import{S as W7,i as H7,s as K7,e as s,k as c,w as y,t as o,M as R7,c as r,d as t,m as p,a,x as T,h as n,b as u,G as e,g as _,y as w,q as $,o as F,B as x,v as V7,L as ie}from"../../chunks/vendor-hf-doc-builder.js";import{T as Se}from"../../chunks/Tip-hf-doc-builder.js";import{D as A}from"../../chunks/Docstring-hf-doc-builder.js";import{C as le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ue}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ae}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Q7(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertModel, BertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),g=o("Examples:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Examples:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function J7(B){let d,g,m,f,b;return f=new le({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=s("p"),g=o("pair mask has the following format:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"pair mask has the following format:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function G7(B){let d,g,m,f,b;return f=new le({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=s("p"),g=o("pair mask has the following format:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"pair mask has the following format:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function X7(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import TFBertTokenizer

tf_tokenizer = TFBertTokenizer.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFBertTokenizer

tf_tokenizer = TFBertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),{c(){d=s("p"),g=o("Examples:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Examples:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function Y7(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import AutoTokenizer, TFBertTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
tf_tokenizer = TFBertTokenizer.from_tokenizer(tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFBertTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
tf_tokenizer = TFBertTokenizer.from_tokenizer(tokenizer)`}}),{c(){d=s("p"),g=o("Examples:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Examples:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function Z7(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function tO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function nO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function rO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function iO(B){let d,g;return d=new le({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){y(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){F(d.$$.fragment,m),g=!1},d(m){x(d,m)}}}function lO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function cO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=s("p"),g=o("Example of single-label classification:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example of single-label classification:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function hO(B){let d,g;return d=new le({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){F(d.$$.fragment,m),g=!1},d(m){x(d,m)}}}function mO(B){let d,g,m,f,b;return f=new le({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=s("p"),g=o("Example of multi-label classification:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example of multi-label classification:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function fO(B){let d,g;return d=new le({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){F(d.$$.fragment,m),g=!1},d(m){x(d,m)}}}function uO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function _O(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function vO(B){let d,g;return d=new le({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){F(d.$$.fragment,m),g=!1},d(m){x(d,m)}}}function kO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function yO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function TO(B){let d,g;return d=new le({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){y(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){F(d.$$.fragment,m),g=!1},d(m){x(d,m)}}}function wO(B){let d,g,m,f,b,l,h,M,xe,ye,S,pe,ee,E,Be,R,Ee,Te,U,Me,me,G,ze,we,H,Pe,$e,K,_e,je,oe,j,q,qe,Q,ge,Ce,J,he,be,N,Ne,V,Oe,Fe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ve,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),m=s("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),M=s("li"),xe=o("having all inputs as keyword arguments (like PyTorch models), or"),ye=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),Te=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),Me=o("model.fit()"),me=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),ze=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),Q=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=s("code"),Oe=o("model([input_ids, attention_mask])"),Fe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),fe=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ve=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var z=a(d);g=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Re=a(m);f=n(Re,"transformers"),Re.forEach(t),b=n(z," accept two formats as input:"),z.forEach(t),l=p(k),h=r(k,"UL",{});var ne=a(h);M=r(ne,"LI",{});var ke=a(M);xe=n(ke,"having all inputs as keyword arguments (like PyTorch models), or"),ke.forEach(t),ye=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(k),E=r(k,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),Te=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Ve=a(U);Me=n(Ve,"model.fit()"),Ve.forEach(t),me=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);ze=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Qe=a(H);Pe=n(Qe,"predict()"),Qe.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(k),j=r(k,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),Q=r(X,"CODE",{});var Ge=a(Q);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(Y,"CODE",{});var Xe=a(V);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),Fe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),fe=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(k),C=r(k,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ve=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(k,z){_(k,d,z),e(d,g),e(d,m),e(m,f),e(d,b),_(k,l,z),_(k,h,z),e(h,M),e(M,xe),e(h,ye),e(h,S),e(S,pe),_(k,ee,z),_(k,E,z),e(E,Be),e(E,R),e(R,Ee),e(E,Te),e(E,U),e(U,Me),e(E,me),e(E,G),e(G,ze),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(k,oe,z),_(k,j,z),e(j,q),e(q,qe),e(q,Q),e(Q,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,V),e(V,Oe),e(N,Fe),e(N,D),e(D,Ae),e(j,fe),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(k,se,z),_(k,C,z),e(C,de),e(C,O),e(O,ve),e(C,ue)},d(k){k&&t(d),k&&t(l),k&&t(h),k&&t(ee),k&&t(E),k&&t(oe),k&&t(j),k&&t(se),k&&t(C)}}}function $O(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function FO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, TFBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function xO(B){let d,g,m,f,b,l,h,M,xe,ye,S,pe,ee,E,Be,R,Ee,Te,U,Me,me,G,ze,we,H,Pe,$e,K,_e,je,oe,j,q,qe,Q,ge,Ce,J,he,be,N,Ne,V,Oe,Fe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ve,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),m=s("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),M=s("li"),xe=o("having all inputs as keyword arguments (like PyTorch models), or"),ye=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),Te=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),Me=o("model.fit()"),me=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),ze=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),Q=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=s("code"),Oe=o("model([input_ids, attention_mask])"),Fe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),fe=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ve=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var z=a(d);g=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Re=a(m);f=n(Re,"transformers"),Re.forEach(t),b=n(z," accept two formats as input:"),z.forEach(t),l=p(k),h=r(k,"UL",{});var ne=a(h);M=r(ne,"LI",{});var ke=a(M);xe=n(ke,"having all inputs as keyword arguments (like PyTorch models), or"),ke.forEach(t),ye=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(k),E=r(k,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),Te=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Ve=a(U);Me=n(Ve,"model.fit()"),Ve.forEach(t),me=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);ze=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Qe=a(H);Pe=n(Qe,"predict()"),Qe.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(k),j=r(k,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),Q=r(X,"CODE",{});var Ge=a(Q);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(Y,"CODE",{});var Xe=a(V);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),Fe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),fe=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(k),C=r(k,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ve=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(k,z){_(k,d,z),e(d,g),e(d,m),e(m,f),e(d,b),_(k,l,z),_(k,h,z),e(h,M),e(M,xe),e(h,ye),e(h,S),e(S,pe),_(k,ee,z),_(k,E,z),e(E,Be),e(E,R),e(R,Ee),e(E,Te),e(E,U),e(U,Me),e(E,me),e(E,G),e(G,ze),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(k,oe,z),_(k,j,z),e(j,q),e(q,qe),e(q,Q),e(Q,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,V),e(V,Oe),e(N,Fe),e(N,D),e(D,Ae),e(j,fe),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(k,se,z),_(k,C,z),e(C,de),e(C,O),e(O,ve),e(C,ue)},d(k){k&&t(d),k&&t(l),k&&t(h),k&&t(ee),k&&t(E),k&&t(oe),k&&t(j),k&&t(se),k&&t(C)}}}function BO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits, seq_relationship_logits = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=s("p"),g=o("Examples:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Examples:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function MO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function zO(B){let d,g,m,f,b,l,h,M,xe,ye,S,pe,ee,E,Be,R,Ee,Te,U,Me,me,G,ze,we,H,Pe,$e,K,_e,je,oe,j,q,qe,Q,ge,Ce,J,he,be,N,Ne,V,Oe,Fe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ve,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),m=s("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),M=s("li"),xe=o("having all inputs as keyword arguments (like PyTorch models), or"),ye=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),Te=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),Me=o("model.fit()"),me=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),ze=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),Q=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=s("code"),Oe=o("model([input_ids, attention_mask])"),Fe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),fe=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ve=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var z=a(d);g=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Re=a(m);f=n(Re,"transformers"),Re.forEach(t),b=n(z," accept two formats as input:"),z.forEach(t),l=p(k),h=r(k,"UL",{});var ne=a(h);M=r(ne,"LI",{});var ke=a(M);xe=n(ke,"having all inputs as keyword arguments (like PyTorch models), or"),ke.forEach(t),ye=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(k),E=r(k,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),Te=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Ve=a(U);Me=n(Ve,"model.fit()"),Ve.forEach(t),me=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);ze=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Qe=a(H);Pe=n(Qe,"predict()"),Qe.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(k),j=r(k,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),Q=r(X,"CODE",{});var Ge=a(Q);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(Y,"CODE",{});var Xe=a(V);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),Fe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),fe=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(k),C=r(k,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ve=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(k,z){_(k,d,z),e(d,g),e(d,m),e(m,f),e(d,b),_(k,l,z),_(k,h,z),e(h,M),e(M,xe),e(h,ye),e(h,S),e(S,pe),_(k,ee,z),_(k,E,z),e(E,Be),e(E,R),e(R,Ee),e(E,Te),e(E,U),e(U,Me),e(E,me),e(E,G),e(G,ze),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(k,oe,z),_(k,j,z),e(j,q),e(q,qe),e(q,Q),e(Q,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,V),e(V,Oe),e(N,Fe),e(N,D),e(D,Ae),e(j,fe),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(k,se,z),_(k,C,z),e(C,de),e(C,O),e(O,ve),e(C,ue)},d(k){k&&t(d),k&&t(l),k&&t(h),k&&t(ee),k&&t(E),k&&t(oe),k&&t(j),k&&t(se),k&&t(C)}}}function PO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function qO(B){let d,g;return d=new le({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){y(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){F(d.$$.fragment,m),g=!1},d(m){x(d,m)}}}function CO(B){let d,g,m,f,b,l,h,M,xe,ye,S,pe,ee,E,Be,R,Ee,Te,U,Me,me,G,ze,we,H,Pe,$e,K,_e,je,oe,j,q,qe,Q,ge,Ce,J,he,be,N,Ne,V,Oe,Fe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ve,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),m=s("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),M=s("li"),xe=o("having all inputs as keyword arguments (like PyTorch models), or"),ye=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),Te=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),Me=o("model.fit()"),me=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),ze=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),Q=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=s("code"),Oe=o("model([input_ids, attention_mask])"),Fe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),fe=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ve=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var z=a(d);g=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Re=a(m);f=n(Re,"transformers"),Re.forEach(t),b=n(z," accept two formats as input:"),z.forEach(t),l=p(k),h=r(k,"UL",{});var ne=a(h);M=r(ne,"LI",{});var ke=a(M);xe=n(ke,"having all inputs as keyword arguments (like PyTorch models), or"),ke.forEach(t),ye=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(k),E=r(k,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),Te=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Ve=a(U);Me=n(Ve,"model.fit()"),Ve.forEach(t),me=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);ze=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Qe=a(H);Pe=n(Qe,"predict()"),Qe.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(k),j=r(k,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),Q=r(X,"CODE",{});var Ge=a(Q);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(Y,"CODE",{});var Xe=a(V);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),Fe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),fe=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(k),C=r(k,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ve=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(k,z){_(k,d,z),e(d,g),e(d,m),e(m,f),e(d,b),_(k,l,z),_(k,h,z),e(h,M),e(M,xe),e(h,ye),e(h,S),e(S,pe),_(k,ee,z),_(k,E,z),e(E,Be),e(E,R),e(R,Ee),e(E,Te),e(E,U),e(U,Me),e(E,me),e(E,G),e(G,ze),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(k,oe,z),_(k,j,z),e(j,q),e(q,qe),e(q,Q),e(Q,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,V),e(V,Oe),e(N,Fe),e(N,D),e(D,Ae),e(j,fe),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(k,se,z),_(k,C,z),e(C,de),e(C,O),e(O,ve),e(C,ue)},d(k){k&&t(d),k&&t(l),k&&t(h),k&&t(ee),k&&t(E),k&&t(oe),k&&t(j),k&&t(se),k&&t(C)}}}function NO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),{c(){d=s("p"),g=o("Examples:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Examples:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function AO(B){let d,g,m,f,b,l,h,M,xe,ye,S,pe,ee,E,Be,R,Ee,Te,U,Me,me,G,ze,we,H,Pe,$e,K,_e,je,oe,j,q,qe,Q,ge,Ce,J,he,be,N,Ne,V,Oe,Fe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ve,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),m=s("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),M=s("li"),xe=o("having all inputs as keyword arguments (like PyTorch models), or"),ye=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),Te=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),Me=o("model.fit()"),me=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),ze=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),Q=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=s("code"),Oe=o("model([input_ids, attention_mask])"),Fe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),fe=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ve=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var z=a(d);g=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Re=a(m);f=n(Re,"transformers"),Re.forEach(t),b=n(z," accept two formats as input:"),z.forEach(t),l=p(k),h=r(k,"UL",{});var ne=a(h);M=r(ne,"LI",{});var ke=a(M);xe=n(ke,"having all inputs as keyword arguments (like PyTorch models), or"),ke.forEach(t),ye=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(k),E=r(k,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),Te=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Ve=a(U);Me=n(Ve,"model.fit()"),Ve.forEach(t),me=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);ze=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Qe=a(H);Pe=n(Qe,"predict()"),Qe.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(k),j=r(k,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),Q=r(X,"CODE",{});var Ge=a(Q);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(Y,"CODE",{});var Xe=a(V);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),Fe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),fe=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(k),C=r(k,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ve=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(k,z){_(k,d,z),e(d,g),e(d,m),e(m,f),e(d,b),_(k,l,z),_(k,h,z),e(h,M),e(M,xe),e(h,ye),e(h,S),e(S,pe),_(k,ee,z),_(k,E,z),e(E,Be),e(E,R),e(R,Ee),e(E,Te),e(E,U),e(U,Me),e(E,me),e(E,G),e(G,ze),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(k,oe,z),_(k,j,z),e(j,q),e(q,qe),e(q,Q),e(Q,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,V),e(V,Oe),e(N,Fe),e(N,D),e(D,Ae),e(j,fe),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(k,se,z),_(k,C,z),e(C,de),e(C,O),e(O,ve),e(C,ue)},d(k){k&&t(d),k&&t(l),k&&t(h),k&&t(ee),k&&t(E),k&&t(oe),k&&t(j),k&&t(se),k&&t(C)}}}function IO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function DO(B){let d,g;return d=new le({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){F(d.$$.fragment,m),g=!1},d(m){x(d,m)}}}function SO(B){let d,g,m,f,b,l,h,M,xe,ye,S,pe,ee,E,Be,R,Ee,Te,U,Me,me,G,ze,we,H,Pe,$e,K,_e,je,oe,j,q,qe,Q,ge,Ce,J,he,be,N,Ne,V,Oe,Fe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ve,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),m=s("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),M=s("li"),xe=o("having all inputs as keyword arguments (like PyTorch models), or"),ye=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),Te=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),Me=o("model.fit()"),me=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),ze=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),Q=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=s("code"),Oe=o("model([input_ids, attention_mask])"),Fe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),fe=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ve=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var z=a(d);g=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Re=a(m);f=n(Re,"transformers"),Re.forEach(t),b=n(z," accept two formats as input:"),z.forEach(t),l=p(k),h=r(k,"UL",{});var ne=a(h);M=r(ne,"LI",{});var ke=a(M);xe=n(ke,"having all inputs as keyword arguments (like PyTorch models), or"),ke.forEach(t),ye=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(k),E=r(k,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),Te=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Ve=a(U);Me=n(Ve,"model.fit()"),Ve.forEach(t),me=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);ze=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Qe=a(H);Pe=n(Qe,"predict()"),Qe.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(k),j=r(k,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),Q=r(X,"CODE",{});var Ge=a(Q);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(Y,"CODE",{});var Xe=a(V);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),Fe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),fe=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(k),C=r(k,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ve=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(k,z){_(k,d,z),e(d,g),e(d,m),e(m,f),e(d,b),_(k,l,z),_(k,h,z),e(h,M),e(M,xe),e(h,ye),e(h,S),e(S,pe),_(k,ee,z),_(k,E,z),e(E,Be),e(E,R),e(R,Ee),e(E,Te),e(E,U),e(U,Me),e(E,me),e(E,G),e(G,ze),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(k,oe,z),_(k,j,z),e(j,q),e(q,qe),e(q,Q),e(Q,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,V),e(V,Oe),e(N,Fe),e(N,D),e(D,Ae),e(j,fe),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(k,se,z),_(k,C,z),e(C,de),e(C,O),e(O,ve),e(C,ue)},d(k){k&&t(d),k&&t(l),k&&t(h),k&&t(ee),k&&t(E),k&&t(oe),k&&t(j),k&&t(se),k&&t(C)}}}function UO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function HO(B){let d,g,m,f,b,l,h,M,xe,ye,S,pe,ee,E,Be,R,Ee,Te,U,Me,me,G,ze,we,H,Pe,$e,K,_e,je,oe,j,q,qe,Q,ge,Ce,J,he,be,N,Ne,V,Oe,Fe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ve,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),m=s("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),M=s("li"),xe=o("having all inputs as keyword arguments (like PyTorch models), or"),ye=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),Te=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),Me=o("model.fit()"),me=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),ze=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),Q=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=s("code"),Oe=o("model([input_ids, attention_mask])"),Fe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),fe=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ve=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var z=a(d);g=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Re=a(m);f=n(Re,"transformers"),Re.forEach(t),b=n(z," accept two formats as input:"),z.forEach(t),l=p(k),h=r(k,"UL",{});var ne=a(h);M=r(ne,"LI",{});var ke=a(M);xe=n(ke,"having all inputs as keyword arguments (like PyTorch models), or"),ke.forEach(t),ye=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(k),E=r(k,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),Te=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Ve=a(U);Me=n(Ve,"model.fit()"),Ve.forEach(t),me=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);ze=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Qe=a(H);Pe=n(Qe,"predict()"),Qe.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(k),j=r(k,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),Q=r(X,"CODE",{});var Ge=a(Q);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(Y,"CODE",{});var Xe=a(V);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),Fe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),fe=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(k),C=r(k,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ve=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(k,z){_(k,d,z),e(d,g),e(d,m),e(m,f),e(d,b),_(k,l,z),_(k,h,z),e(h,M),e(M,xe),e(h,ye),e(h,S),e(S,pe),_(k,ee,z),_(k,E,z),e(E,Be),e(E,R),e(R,Ee),e(E,Te),e(E,U),e(U,Me),e(E,me),e(E,G),e(G,ze),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(k,oe,z),_(k,j,z),e(j,q),e(q,qe),e(q,Q),e(Q,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,V),e(V,Oe),e(N,Fe),e(N,D),e(D,Ae),e(j,fe),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(k,se,z),_(k,C,z),e(C,de),e(C,O),e(O,ve),e(C,ue)},d(k){k&&t(d),k&&t(l),k&&t(h),k&&t(ee),k&&t(E),k&&t(oe),k&&t(j),k&&t(se),k&&t(C)}}}function KO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function VO(B){let d,g;return d=new le({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){F(d.$$.fragment,m),g=!1},d(m){x(d,m)}}}function QO(B){let d,g,m,f,b,l,h,M,xe,ye,S,pe,ee,E,Be,R,Ee,Te,U,Me,me,G,ze,we,H,Pe,$e,K,_e,je,oe,j,q,qe,Q,ge,Ce,J,he,be,N,Ne,V,Oe,Fe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ve,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),m=s("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),M=s("li"),xe=o("having all inputs as keyword arguments (like PyTorch models), or"),ye=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),Te=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),Me=o("model.fit()"),me=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),ze=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),Q=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=s("code"),Oe=o("model([input_ids, attention_mask])"),Fe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),fe=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ve=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var z=a(d);g=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Re=a(m);f=n(Re,"transformers"),Re.forEach(t),b=n(z," accept two formats as input:"),z.forEach(t),l=p(k),h=r(k,"UL",{});var ne=a(h);M=r(ne,"LI",{});var ke=a(M);xe=n(ke,"having all inputs as keyword arguments (like PyTorch models), or"),ke.forEach(t),ye=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(k),E=r(k,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),Te=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Ve=a(U);Me=n(Ve,"model.fit()"),Ve.forEach(t),me=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);ze=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Qe=a(H);Pe=n(Qe,"predict()"),Qe.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(k),j=r(k,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),Q=r(X,"CODE",{});var Ge=a(Q);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(Y,"CODE",{});var Xe=a(V);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),Fe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),fe=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(k),C=r(k,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ve=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(k,z){_(k,d,z),e(d,g),e(d,m),e(m,f),e(d,b),_(k,l,z),_(k,h,z),e(h,M),e(M,xe),e(h,ye),e(h,S),e(S,pe),_(k,ee,z),_(k,E,z),e(E,Be),e(E,R),e(R,Ee),e(E,Te),e(E,U),e(U,Me),e(E,me),e(E,G),e(G,ze),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(k,oe,z),_(k,j,z),e(j,q),e(q,qe),e(q,Q),e(Q,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,V),e(V,Oe),e(N,Fe),e(N,D),e(D,Ae),e(j,fe),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(k,se,z),_(k,C,z),e(C,de),e(C,O),e(O,ve),e(C,ue)},d(k){k&&t(d),k&&t(l),k&&t(h),k&&t(ee),k&&t(E),k&&t(oe),k&&t(j),k&&t(se),k&&t(C)}}}function JO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function XO(B){let d,g;return d=new le({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){y(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){F(d.$$.fragment,m),g=!1},d(m){x(d,m)}}}function YO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function eA(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function oA(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function sA(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function aA(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function lA(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function cA(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function hA(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function fA(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=a(m);f=n(M,"Module"),M.forEach(t),b=n(h,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function gA(B){let d,g,m,f,b,l,h,M,xe,ye,S,pe,ee,E,Be,R,Ee,Te,U,Me,me,G,ze,we,H,Pe,$e,K,_e,je,oe,j,q,qe,Q,ge,Ce,J,he,be,N,Ne,V,Oe,Fe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ve,ue,k,z,Re,ne,ke,We,P,De,Ve,Ke,Qe,Je,I,X,Ge,He,Y,Xe,Ye,ce,Ze,Z,et,Hy,Wp,Ky,Ry,Vy,Cs,Db,mn,Ns,Pm,li,Qy,jm,Jy,Sb,tt,di,Gy,qm,Xy,Yy,ci,Zy,Hp,eT,tT,oT,Ko,pi,nT,Cm,sT,rT,hi,Kp,aT,Nm,iT,lT,Rp,dT,Om,cT,pT,Os,mi,hT,fi,mT,Am,fT,uT,gT,oo,ui,_T,Im,bT,vT,As,kT,fn,yT,Lm,TT,wT,Dm,$T,FT,xT,Vp,gi,Ub,un,Is,Sm,_i,BT,Um,ET,Wb,Ft,bi,MT,vi,zT,Wm,PT,jT,qT,ki,CT,Qp,NT,OT,AT,Ro,yi,IT,Hm,LT,DT,Ti,Jp,ST,Km,UT,WT,Gp,HT,Rm,KT,RT,no,wi,VT,Vm,QT,JT,Ls,GT,gn,XT,Qm,YT,ZT,Jm,e2,t2,Hb,_n,Ds,Gm,$i,o2,Xm,n2,Kb,xt,Fi,s2,bn,r2,Ym,a2,i2,Zm,l2,d2,c2,xi,p2,ef,h2,m2,f2,Vo,Bi,u2,Ei,g2,tf,_2,b2,v2,Ss,k2,Qo,Mi,y2,vn,T2,of,w2,$2,nf,F2,x2,B2,Us,Rb,kn,Ws,sf,zi,E2,rf,M2,Vb,yn,Pi,z2,ji,P2,Xp,j2,q2,Qb,Tn,qi,C2,Ci,N2,Yp,O2,A2,Jb,Po,Ni,I2,Oi,L2,Zp,D2,S2,U2,Hs,Ai,W2,af,H2,Gb,wn,Ks,lf,Ii,K2,df,R2,Xb,ot,Li,V2,cf,Q2,J2,Di,G2,eh,X2,Y2,Z2,Si,ew,Ui,tw,ow,nw,Wi,sw,Hi,rw,aw,iw,ft,lw,pf,dw,cw,hf,pw,hw,mf,mw,fw,ff,uw,gw,uf,_w,bw,gf,vw,kw,yw,so,Ki,Tw,$n,ww,th,$w,Fw,_f,xw,Bw,Ew,Rs,Mw,Vs,Yb,Fn,Qs,bf,Ri,zw,vf,Pw,Zb,Bt,Vi,jw,xn,qw,kf,Cw,Nw,yf,Ow,Aw,Iw,Qi,Lw,oh,Dw,Sw,Uw,Ji,Ww,Gi,Hw,Kw,Rw,ro,Xi,Vw,Bn,Qw,nh,Jw,Gw,Tf,Xw,Yw,Zw,Js,e1,Gs,ev,En,Xs,wf,Yi,t1,$f,o1,tv,Et,Zi,n1,el,s1,Ff,r1,a1,i1,tl,l1,sh,d1,c1,p1,ol,h1,nl,m1,f1,u1,ao,sl,g1,Mn,_1,rh,b1,v1,xf,k1,y1,T1,Ys,w1,Zs,ov,zn,er,Bf,rl,$1,Ef,F1,nv,Mt,al,x1,il,B1,Mf,E1,M1,z1,ll,P1,ah,j1,q1,C1,dl,N1,cl,O1,A1,I1,Nt,pl,L1,Pn,D1,ih,S1,U1,zf,W1,H1,K1,tr,R1,or,V1,nr,sv,jn,sr,Pf,hl,Q1,jf,J1,rv,zt,ml,G1,fl,X1,qf,Y1,Z1,e$,ul,t$,lh,o$,n$,s$,gl,r$,_l,a$,i$,l$,io,bl,d$,qn,c$,dh,p$,h$,Cf,m$,f$,u$,rr,g$,ar,av,Cn,ir,Nf,vl,_$,Of,b$,iv,Pt,kl,v$,Af,k$,y$,yl,T$,ch,w$,$$,F$,Tl,x$,wl,B$,E$,M$,mt,$l,z$,Nn,P$,ph,j$,q$,If,C$,N$,O$,lr,A$,dr,I$,cr,L$,pr,D$,hr,lv,On,mr,Lf,Fl,S$,Df,U$,dv,jt,xl,W$,Sf,H$,K$,Bl,R$,hh,V$,Q$,J$,El,G$,Ml,X$,Y$,Z$,lo,zl,e0,An,t0,mh,o0,n0,Uf,s0,r0,a0,fr,i0,ur,cv,In,gr,Wf,Pl,l0,Hf,d0,pv,qt,jl,c0,Kf,p0,h0,ql,m0,fh,f0,u0,g0,Cl,_0,Nl,b0,v0,k0,Ot,Ol,y0,Ln,T0,uh,w0,$0,Rf,F0,x0,B0,_r,E0,br,M0,vr,hv,Dn,kr,Vf,Al,z0,Qf,P0,mv,Ct,Il,j0,Sn,q0,Jf,C0,N0,Gf,O0,A0,I0,Ll,L0,gh,D0,S0,U0,Dl,W0,Sl,H0,K0,R0,At,Ul,V0,Un,Q0,_h,J0,G0,Xf,X0,Y0,Z0,yr,eF,Tr,tF,wr,fv,Wn,$r,Yf,Wl,oF,Zf,nF,uv,ut,Hl,sF,eu,rF,aF,Kl,iF,bh,lF,dF,cF,Rl,pF,Vl,hF,mF,fF,Fr,uF,co,Ql,gF,Hn,_F,vh,bF,vF,tu,kF,yF,TF,xr,wF,Br,gv,Kn,Er,ou,Jl,$F,nu,FF,_v,gt,Gl,xF,Rn,BF,su,EF,MF,ru,zF,PF,jF,Xl,qF,kh,CF,NF,OF,Yl,AF,Zl,IF,LF,DF,Mr,SF,po,ed,UF,Vn,WF,yh,HF,KF,au,RF,VF,QF,zr,JF,Pr,bv,Qn,jr,iu,td,GF,lu,XF,vv,Jn,od,YF,It,nd,ZF,nt,ex,du,tx,ox,cu,nx,sx,pu,rx,ax,hu,ix,lx,mu,dx,cx,fu,px,hx,uu,mx,fx,ux,sd,rd,gx,gu,_x,bx,vx,ad,kx,_u,yx,Tx,wx,te,$x,bu,Fx,xx,vu,Bx,Ex,ku,Mx,zx,yu,Px,jx,Tu,qx,Cx,wu,Nx,Ox,$u,Ax,Ix,Fu,Lx,Dx,xu,Sx,Ux,Bu,Wx,Hx,Eu,Kx,Rx,Mu,Vx,Qx,zu,Jx,Gx,Pu,Xx,Yx,ju,Zx,e4,qu,t4,o4,Cu,n4,s4,Nu,r4,a4,Ou,i4,l4,Au,d4,c4,p4,qr,kv,Gn,Cr,Iu,id,h4,Lu,m4,yv,_t,ld,f4,dd,u4,Du,g4,_4,b4,cd,v4,Th,k4,y4,T4,pd,w4,hd,$4,F4,x4,Nr,B4,Lt,md,E4,Xn,M4,wh,z4,P4,Su,j4,q4,C4,Or,N4,Ar,O4,Ir,Tv,Yn,Lr,Uu,fd,A4,Wu,I4,wv,bt,ud,L4,gd,D4,Hu,S4,U4,W4,_d,H4,$h,K4,R4,V4,bd,Q4,vd,J4,G4,X4,Dr,Y4,ho,kd,Z4,Zn,eB,Fh,tB,oB,Ku,nB,sB,rB,Sr,aB,Ur,$v,es,Wr,Ru,yd,iB,Vu,lB,Fv,vt,Td,dB,Qu,cB,pB,wd,hB,xh,mB,fB,uB,$d,gB,Fd,_B,bB,vB,Hr,kB,Dt,xd,yB,ts,TB,Bh,wB,$B,Ju,FB,xB,BB,Kr,EB,Rr,MB,Vr,xv,os,Qr,Gu,Bd,zB,Xu,PB,Bv,kt,Ed,jB,Yu,qB,CB,Md,NB,Eh,OB,AB,IB,zd,LB,Pd,DB,SB,UB,Jr,WB,mo,jd,HB,ns,KB,Mh,RB,VB,Zu,QB,JB,GB,Gr,XB,Xr,Ev,ss,Yr,eg,qd,YB,tg,ZB,Mv,yt,Cd,eE,og,tE,oE,Nd,nE,zh,sE,rE,aE,Od,iE,Ad,lE,dE,cE,Zr,pE,St,Id,hE,rs,mE,Ph,fE,uE,ng,gE,_E,bE,ea,vE,ta,kE,oa,zv,as,na,sg,Ld,yE,rg,TE,Pv,Tt,Dd,wE,is,$E,ag,FE,xE,ig,BE,EE,ME,Sd,zE,jh,PE,jE,qE,Ud,CE,Wd,NE,OE,AE,sa,IE,Ut,Hd,LE,ls,DE,qh,SE,UE,lg,WE,HE,KE,ra,RE,aa,VE,ia,jv,ds,la,dg,Kd,QE,cg,JE,qv,st,Rd,GE,pg,XE,YE,Vd,ZE,Ch,eM,tM,oM,Qd,nM,Jd,sM,rM,aM,hg,iM,lM,jo,mg,Gd,dM,cM,fg,Xd,pM,hM,ug,Yd,mM,fM,gg,Zd,uM,gM,fo,ec,_M,cs,bM,_g,vM,kM,bg,yM,TM,wM,da,$M,ca,Cv,ps,pa,vg,tc,FM,kg,xM,Nv,rt,oc,BM,hs,EM,yg,MM,zM,Tg,PM,jM,qM,nc,CM,Nh,NM,OM,AM,sc,IM,rc,LM,DM,SM,wg,UM,WM,qo,$g,ac,HM,KM,Fg,ic,RM,VM,xg,lc,QM,JM,Bg,dc,GM,XM,uo,cc,YM,ms,ZM,Eg,ez,tz,Mg,oz,nz,sz,ha,rz,ma,Ov,fs,fa,zg,pc,az,Pg,iz,Av,at,hc,lz,jg,dz,cz,mc,pz,Oh,hz,mz,fz,fc,uz,uc,gz,_z,bz,qg,vz,kz,Co,Cg,gc,yz,Tz,Ng,_c,wz,$z,Og,bc,Fz,xz,Ag,vc,Bz,Ez,go,kc,Mz,us,zz,Ig,Pz,jz,Lg,qz,Cz,Nz,ua,Oz,ga,Iv,gs,_a,Dg,yc,Az,Sg,Iz,Lv,it,Tc,Lz,wc,Dz,Ug,Sz,Uz,Wz,$c,Hz,Ah,Kz,Rz,Vz,Fc,Qz,xc,Jz,Gz,Xz,Wg,Yz,Zz,No,Hg,Bc,eP,tP,Kg,Ec,oP,nP,Rg,Mc,sP,rP,Vg,zc,aP,iP,_o,Pc,lP,_s,dP,Qg,cP,pP,Jg,hP,mP,fP,ba,uP,va,Dv,bs,ka,Gg,jc,gP,Xg,_P,Sv,lt,qc,bP,Cc,vP,Yg,kP,yP,TP,Nc,wP,Ih,$P,FP,xP,Oc,BP,Ac,EP,MP,zP,Zg,PP,jP,Oo,e_,Ic,qP,CP,t_,Lc,NP,OP,o_,Dc,AP,IP,n_,Sc,LP,DP,bo,Uc,SP,vs,UP,s_,WP,HP,r_,KP,RP,VP,ya,QP,Ta,Uv,ks,wa,a_,Wc,JP,i_,GP,Wv,dt,Hc,XP,l_,YP,ZP,Kc,ej,Lh,tj,oj,nj,Rc,sj,Vc,rj,aj,ij,d_,lj,dj,Ao,c_,Qc,cj,pj,p_,Jc,hj,mj,h_,Gc,fj,uj,m_,Xc,gj,_j,vo,Yc,bj,ys,vj,f_,kj,yj,u_,Tj,wj,$j,$a,Fj,Fa,Hv,Ts,xa,g_,Zc,xj,__,Bj,Kv,ct,ep,Ej,b_,Mj,zj,tp,Pj,Dh,jj,qj,Cj,op,Nj,np,Oj,Aj,Ij,v_,Lj,Dj,Io,k_,sp,Sj,Uj,y_,rp,Wj,Hj,T_,ap,Kj,Rj,w_,ip,Vj,Qj,ko,lp,Jj,ws,Gj,$_,Xj,Yj,F_,Zj,eq,tq,Ba,oq,Ea,Rv,$s,Ma,x_,dp,nq,B_,sq,Vv,pt,cp,rq,E_,aq,iq,pp,lq,Sh,dq,cq,pq,hp,hq,mp,mq,fq,uq,M_,gq,_q,Lo,z_,fp,bq,vq,P_,up,kq,yq,j_,gp,Tq,wq,q_,_p,$q,Fq,yo,bp,xq,Fs,Bq,C_,Eq,Mq,N_,zq,Pq,jq,za,qq,Pa,Qv,xs,ja,O_,vp,Cq,A_,Nq,Jv,ht,kp,Oq,Bs,Aq,I_,Iq,Lq,L_,Dq,Sq,Uq,yp,Wq,Uh,Hq,Kq,Rq,Tp,Vq,wp,Qq,Jq,Gq,D_,Xq,Yq,Do,S_,$p,Zq,e3,U_,Fp,t3,o3,W_,xp,n3,s3,H_,Bp,r3,a3,To,Ep,i3,Es,l3,K_,d3,c3,R_,p3,h3,m3,qa,f3,Ca,Gv;return l=new Ue({}),E=new Ue({}),ue=new Ue({}),We=new A({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.BertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/configuration_bert.py#L72"}}),Cs=new ae({props:{anchor:"transformers.BertConfig.example",$$slots:{default:[Q7]},$$scope:{ctx:B}}}),li=new Ue({}),di=new A({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/tokenization_bert.py#L137"}}),pi=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mi=new A({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ui=new A({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/tokenization_bert.py#L321",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),As=new ae({props:{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[J7]},$$scope:{ctx:B}}}),gi=new A({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/tokenization_bert.py#L350"}}),_i=new Ue({}),bi=new A({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/tokenization_bert_fast.py#L161"}}),yi=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/tokenization_bert_fast.py#L249",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wi=new A({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/tokenization_bert_fast.py#L273",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ls=new ae({props:{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[G7]},$$scope:{ctx:B}}}),$i=new Ue({}),Fi=new A({props:{name:"class transformers.TFBertTokenizer",anchor:"transformers.TFBertTokenizer",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.vocab_list",description:`<strong>vocab_list</strong> (<code>list</code>) &#x2014;
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
Whether to return the attention_mask.`,name:"return_attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/tokenization_bert_tf.py#L11"}}),Bi=new A({props:{name:"from_pretrained",anchor:"transformers.TFBertTokenizer.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"*init_inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
The name or path to the pre-trained tokenizer.`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/tokenization_bert_tf.py#L113"}}),Ss=new ae({props:{anchor:"transformers.TFBertTokenizer.from_pretrained.example",$$slots:{default:[X7]},$$scope:{ctx:B}}}),Mi=new A({props:{name:"from_tokenizer",anchor:"transformers.TFBertTokenizer.from_tokenizer",parameters:[{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.from_tokenizer.tokenizer",description:`<strong>tokenizer</strong> (<code>PreTrainedTokenizerBase</code>) &#x2014;
The tokenizer to use to initialize the <code>TFBertTokenizer</code>.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/tokenization_bert_tf.py#L83"}}),Us=new ae({props:{anchor:"transformers.TFBertTokenizer.from_tokenizer.example",$$slots:{default:[Y7]},$$scope:{ctx:B}}}),zi=new Ue({}),Pi=new A({props:{name:"class transformers.models.bert.modeling_bert.BertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L771"}}),qi=new A({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L925"}}),Ni=new A({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L64"}}),Ai=new A({props:{name:"replace",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/flax/struct.py#L108"}}),Ii=new Ue({}),Li=new A({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L874"}}),Ki=new A({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L913",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rs=new Se({props:{$$slots:{default:[Z7]},$$scope:{ctx:B}}}),Vs=new ae({props:{anchor:"transformers.BertModel.forward.example",$$slots:{default:[eO]},$$scope:{ctx:B}}}),Ri=new Ue({}),Vi=new A({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L1057"}}),Xi=new A({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L1073",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Js=new Se({props:{$$slots:{default:[tO]},$$scope:{ctx:B}}}),Gs=new ae({props:{anchor:"transformers.BertForPreTraining.forward.example",$$slots:{default:[oO]},$$scope:{ctx:B}}}),Yi=new Ue({}),Zi=new A({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L1161"}}),sl=new A({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertLMHeadModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L1184",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ys=new Se({props:{$$slots:{default:[nO]},$$scope:{ctx:B}}}),Zs=new ae({props:{anchor:"transformers.BertLMHeadModel.forward.example",$$slots:{default:[sO]},$$scope:{ctx:B}}}),rl=new Ue({}),al=new A({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L1296"}}),pl=new A({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L1322",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tr=new Se({props:{$$slots:{default:[rO]},$$scope:{ctx:B}}}),or=new ae({props:{anchor:"transformers.BertForMaskedLM.forward.example",$$slots:{default:[aO]},$$scope:{ctx:B}}}),nr=new ae({props:{anchor:"transformers.BertForMaskedLM.forward.example-2",$$slots:{default:[iO]},$$scope:{ctx:B}}}),hl=new Ue({}),ml=new A({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L1409"}}),bl=new A({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L1419",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rr=new Se({props:{$$slots:{default:[lO]},$$scope:{ctx:B}}}),ar=new ae({props:{anchor:"transformers.BertForNextSentencePrediction.forward.example",$$slots:{default:[dO]},$$scope:{ctx:B}}}),vl=new Ue({}),kl=new A({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L1514"}}),$l=new A({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L1530",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),lr=new Se({props:{$$slots:{default:[cO]},$$scope:{ctx:B}}}),dr=new ae({props:{anchor:"transformers.BertForSequenceClassification.forward.example",$$slots:{default:[pO]},$$scope:{ctx:B}}}),cr=new ae({props:{anchor:"transformers.BertForSequenceClassification.forward.example-2",$$slots:{default:[hO]},$$scope:{ctx:B}}}),pr=new ae({props:{anchor:"transformers.BertForSequenceClassification.forward.example-3",$$slots:{default:[mO]},$$scope:{ctx:B}}}),hr=new ae({props:{anchor:"transformers.BertForSequenceClassification.forward.example-4",$$slots:{default:[fO]},$$scope:{ctx:B}}}),Fl=new Ue({}),xl=new A({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L1618"}}),zl=new A({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L1632",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fr=new Se({props:{$$slots:{default:[uO]},$$scope:{ctx:B}}}),ur=new ae({props:{anchor:"transformers.BertForMultipleChoice.forward.example",$$slots:{default:[gO]},$$scope:{ctx:B}}}),Pl=new Ue({}),jl=new A({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L1713"}}),Ol=new A({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L1731",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_r=new Se({props:{$$slots:{default:[_O]},$$scope:{ctx:B}}}),br=new ae({props:{anchor:"transformers.BertForTokenClassification.forward.example",$$slots:{default:[bO]},$$scope:{ctx:B}}}),vr=new ae({props:{anchor:"transformers.BertForTokenClassification.forward.example-2",$$slots:{default:[vO]},$$scope:{ctx:B}}}),Al=new Ue({}),Il=new A({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L1800"}}),Ul=new A({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_bert.py#L1814",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yr=new Se({props:{$$slots:{default:[kO]},$$scope:{ctx:B}}}),Tr=new ae({props:{anchor:"transformers.BertForQuestionAnswering.forward.example",$$slots:{default:[yO]},$$scope:{ctx:B}}}),wr=new ae({props:{anchor:"transformers.BertForQuestionAnswering.forward.example-2",$$slots:{default:[TO]},$$scope:{ctx:B}}}),Wl=new Ue({}),Hl=new A({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1057"}}),Fr=new Se({props:{$$slots:{default:[wO]},$$scope:{ctx:B}}}),Ql=new A({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1063",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xr=new Se({props:{$$slots:{default:[$O]},$$scope:{ctx:B}}}),Br=new ae({props:{anchor:"transformers.TFBertModel.call.example",$$slots:{default:[FO]},$$scope:{ctx:B}}}),Jl=new Ue({}),Gl=new A({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1154"}}),Mr=new Se({props:{$$slots:{default:[xO]},$$scope:{ctx:B}}}),ed=new A({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zr=new Se({props:{$$slots:{default:[BO]},$$scope:{ctx:B}}}),Pr=new ae({props:{anchor:"transformers.TFBertForPreTraining.call.example",$$slots:{default:[EO]},$$scope:{ctx:B}}}),td=new Ue({}),od=new A({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1363"}}),nd=new A({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1400",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),qr=new ae({props:{anchor:"transformers.TFBertLMHeadModel.call.example",$$slots:{default:[MO]},$$scope:{ctx:B}}}),id=new Ue({}),ld=new A({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1271"}}),Nr=new Se({props:{$$slots:{default:[zO]},$$scope:{ctx:B}}}),md=new A({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1299",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Or=new Se({props:{$$slots:{default:[PO]},$$scope:{ctx:B}}}),Ar=new ae({props:{anchor:"transformers.TFBertForMaskedLM.call.example",$$slots:{default:[jO]},$$scope:{ctx:B}}}),Ir=new ae({props:{anchor:"transformers.TFBertForMaskedLM.call.example-2",$$slots:{default:[qO]},$$scope:{ctx:B}}}),fd=new Ue({}),ud=new A({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1513"}}),Dr=new Se({props:{$$slots:{default:[CO]},$$scope:{ctx:B}}}),kd=new A({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1523",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Sr=new Se({props:{$$slots:{default:[NO]},$$scope:{ctx:B}}}),Ur=new ae({props:{anchor:"transformers.TFBertForNextSentencePrediction.call.example",$$slots:{default:[OO]},$$scope:{ctx:B}}}),yd=new Ue({}),Td=new A({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1604"}}),Hr=new Se({props:{$$slots:{default:[AO]},$$scope:{ctx:B}}}),xd=new A({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1625",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Kr=new Se({props:{$$slots:{default:[IO]},$$scope:{ctx:B}}}),Rr=new ae({props:{anchor:"transformers.TFBertForSequenceClassification.call.example",$$slots:{default:[LO]},$$scope:{ctx:B}}}),Vr=new ae({props:{anchor:"transformers.TFBertForSequenceClassification.call.example-2",$$slots:{default:[DO]},$$scope:{ctx:B}}}),Bd=new Ue({}),Ed=new A({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1697"}}),Jr=new Se({props:{$$slots:{default:[SO]},$$scope:{ctx:B}}}),jd=new A({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1721",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gr=new Se({props:{$$slots:{default:[UO]},$$scope:{ctx:B}}}),Xr=new ae({props:{anchor:"transformers.TFBertForMultipleChoice.call.example",$$slots:{default:[WO]},$$scope:{ctx:B}}}),qd=new Ue({}),Cd=new A({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1827"}}),Zr=new Se({props:{$$slots:{default:[HO]},$$scope:{ctx:B}}}),Id=new A({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1854",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ea=new Se({props:{$$slots:{default:[KO]},$$scope:{ctx:B}}}),ta=new ae({props:{anchor:"transformers.TFBertForTokenClassification.call.example",$$slots:{default:[RO]},$$scope:{ctx:B}}}),oa=new ae({props:{anchor:"transformers.TFBertForTokenClassification.call.example-2",$$slots:{default:[VO]},$$scope:{ctx:B}}}),Ld=new Ue({}),Dd=new A({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1924"}}),sa=new Se({props:{$$slots:{default:[QO]},$$scope:{ctx:B}}}),Hd=new A({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_tf_bert.py#L1946",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ra=new Se({props:{$$slots:{default:[JO]},$$scope:{ctx:B}}}),aa=new ae({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example",$$slots:{default:[GO]},$$scope:{ctx:B}}}),ia=new ae({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example-2",$$slots:{default:[XO]},$$scope:{ctx:B}}}),Kd=new Ue({}),Rd=new A({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L1028"}}),ec=new A({props:{name:"__call__",anchor:"transformers.FlaxBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),da=new Se({props:{$$slots:{default:[YO]},$$scope:{ctx:B}}}),ca=new ae({props:{anchor:"transformers.FlaxBertModel.__call__.example",$$slots:{default:[ZO]},$$scope:{ctx:B}}}),tc=new Ue({}),oc=new A({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L1106"}}),cc=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ha=new Se({props:{$$slots:{default:[eA]},$$scope:{ctx:B}}}),ma=new ae({props:{anchor:"transformers.FlaxBertForPreTraining.__call__.example",$$slots:{default:[tA]},$$scope:{ctx:B}}}),pc=new Ue({}),hc=new A({props:{name:"class transformers.FlaxBertForCausalLM",anchor:"transformers.FlaxBertForCausalLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L1683"}}),kc=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ua=new Se({props:{$$slots:{default:[oA]},$$scope:{ctx:B}}}),ga=new ae({props:{anchor:"transformers.FlaxBertForCausalLM.__call__.example",$$slots:{default:[nA]},$$scope:{ctx:B}}}),yc=new Ue({}),Tc=new A({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L1197"}}),Pc=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ba=new Se({props:{$$slots:{default:[sA]},$$scope:{ctx:B}}}),va=new ae({props:{anchor:"transformers.FlaxBertForMaskedLM.__call__.example",$$slots:{default:[rA]},$$scope:{ctx:B}}}),jc=new Ue({}),qc=new A({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L1263"}}),Uc=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForNextSentencePrediction.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ya=new Se({props:{$$slots:{default:[aA]},$$scope:{ctx:B}}}),Ta=new ae({props:{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.example",$$slots:{default:[iA]},$$scope:{ctx:B}}}),Wc=new Ue({}),Hc=new A({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L1366"}}),Yc=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$a=new Se({props:{$$slots:{default:[lA]},$$scope:{ctx:B}}}),Fa=new ae({props:{anchor:"transformers.FlaxBertForSequenceClassification.__call__.example",$$slots:{default:[dA]},$$scope:{ctx:B}}}),Zc=new Ue({}),ep=new A({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L1447"}}),lp=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ba=new Se({props:{$$slots:{default:[cA]},$$scope:{ctx:B}}}),Ea=new ae({props:{anchor:"transformers.FlaxBertForMultipleChoice.__call__.example",$$slots:{default:[pA]},$$scope:{ctx:B}}}),dp=new Ue({}),cp=new A({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L1525"}}),bp=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),za=new Se({props:{$$slots:{default:[hA]},$$scope:{ctx:B}}}),Pa=new ae({props:{anchor:"transformers.FlaxBertForTokenClassification.__call__.example",$$slots:{default:[mA]},$$scope:{ctx:B}}}),vp=new Ue({}),kp=new A({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L1598"}}),Ep=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qa=new Se({props:{$$slots:{default:[fA]},$$scope:{ctx:B}}}),Ca=new ae({props:{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.example",$$slots:{default:[uA]},$$scope:{ctx:B}}}),{c(){d=s("meta"),g=c(),m=s("h1"),f=s("a"),b=s("span"),y(l.$$.fragment),h=c(),M=s("span"),xe=o("BERT"),ye=c(),S=s("h2"),pe=s("a"),ee=s("span"),y(E.$$.fragment),Be=c(),R=s("span"),Ee=o("Overview"),Te=c(),U=s("p"),Me=o("The BERT model was proposed in "),me=s("a"),G=o("BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),ze=o(` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),we=c(),H=s("p"),Pe=o("The abstract from the paper is the following:"),$e=c(),K=s("p"),_e=s("em"),je=o(`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),oe=c(),j=s("p"),q=s("em"),qe=o(`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),Q=c(),ge=s("p"),Ce=o("Tips:"),J=c(),he=s("ul"),be=s("li"),N=o(`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Ne=c(),V=s("li"),Oe=o(`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),Fe=c(),D=s("p"),Ae=o("This model was contributed by "),fe=s("a"),L=o("thomwolf"),Ie=o(". The original code can be found "),W=s("a"),Le=o("here"),se=o("."),C=c(),de=s("h2"),O=s("a"),ve=s("span"),y(ue.$$.fragment),k=c(),z=s("span"),Re=o("BertConfig"),ne=c(),ke=s("div"),y(We.$$.fragment),P=c(),De=s("p"),Ve=o("This is the configuration class to store the configuration of a "),Ke=s("a"),Qe=o("BertModel"),Je=o(" or a "),I=s("a"),X=o("TFBertModel"),Ge=o(`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),He=s("a"),Y=o("bert-base-uncased"),Xe=o(" architecture."),Ye=c(),ce=s("p"),Ze=o("Configuration objects inherit from "),Z=s("a"),et=o("PretrainedConfig"),Hy=o(` and can be used to control the model outputs. Read the
documentation from `),Wp=s("a"),Ky=o("PretrainedConfig"),Ry=o(" for more information."),Vy=c(),y(Cs.$$.fragment),Db=c(),mn=s("h2"),Ns=s("a"),Pm=s("span"),y(li.$$.fragment),Qy=c(),jm=s("span"),Jy=o("BertTokenizer"),Sb=c(),tt=s("div"),y(di.$$.fragment),Gy=c(),qm=s("p"),Xy=o("Construct a BERT tokenizer. Based on WordPiece."),Yy=c(),ci=s("p"),Zy=o("This tokenizer inherits from "),Hp=s("a"),eT=o("PreTrainedTokenizer"),tT=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),oT=c(),Ko=s("div"),y(pi.$$.fragment),nT=c(),Cm=s("p"),sT=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),rT=c(),hi=s("ul"),Kp=s("li"),aT=o("single sequence: "),Nm=s("code"),iT=o("[CLS] X [SEP]"),lT=c(),Rp=s("li"),dT=o("pair of sequences: "),Om=s("code"),cT=o("[CLS] A [SEP] B [SEP]"),pT=c(),Os=s("div"),y(mi.$$.fragment),hT=c(),fi=s("p"),mT=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Am=s("code"),fT=o("prepare_for_model"),uT=o(" method."),gT=c(),oo=s("div"),y(ui.$$.fragment),_T=c(),Im=s("p"),bT=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),vT=c(),y(As.$$.fragment),kT=c(),fn=s("p"),yT=o("If "),Lm=s("code"),TT=o("token_ids_1"),wT=o(" is "),Dm=s("code"),$T=o("None"),FT=o(", this method only returns the first portion of the mask (0s)."),xT=c(),Vp=s("div"),y(gi.$$.fragment),Ub=c(),un=s("h2"),Is=s("a"),Sm=s("span"),y(_i.$$.fragment),BT=c(),Um=s("span"),ET=o("BertTokenizerFast"),Wb=c(),Ft=s("div"),y(bi.$$.fragment),MT=c(),vi=s("p"),zT=o("Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Wm=s("em"),PT=o("tokenizers"),jT=o(" library). Based on WordPiece."),qT=c(),ki=s("p"),CT=o("This tokenizer inherits from "),Qp=s("a"),NT=o("PreTrainedTokenizerFast"),OT=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),AT=c(),Ro=s("div"),y(yi.$$.fragment),IT=c(),Hm=s("p"),LT=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),DT=c(),Ti=s("ul"),Jp=s("li"),ST=o("single sequence: "),Km=s("code"),UT=o("[CLS] X [SEP]"),WT=c(),Gp=s("li"),HT=o("pair of sequences: "),Rm=s("code"),KT=o("[CLS] A [SEP] B [SEP]"),RT=c(),no=s("div"),y(wi.$$.fragment),VT=c(),Vm=s("p"),QT=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),JT=c(),y(Ls.$$.fragment),GT=c(),gn=s("p"),XT=o("If "),Qm=s("code"),YT=o("token_ids_1"),ZT=o(" is "),Jm=s("code"),e2=o("None"),t2=o(", this method only returns the first portion of the mask (0s)."),Hb=c(),_n=s("h2"),Ds=s("a"),Gm=s("span"),y($i.$$.fragment),o2=c(),Xm=s("span"),n2=o("TFBertTokenizer"),Kb=c(),xt=s("div"),y(Fi.$$.fragment),s2=c(),bn=s("p"),r2=o(`This is an in-graph tokenizer for BERT. It should be initialized similarly to other tokenizers, using the
`),Ym=s("code"),a2=o("from_pretrained()"),i2=o(" method. It can also be initialized with the "),Zm=s("code"),l2=o("from_tokenizer()"),d2=o(` method, which imports settings
from an existing standard tokenizer object.`),c2=c(),xi=s("p"),p2=o(`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. As a result, they have somewhat more limited options
than standard tokenizer classes. They are most useful when you want to create an end-to-end model that goes
straight from `),ef=s("code"),h2=o("tf.string"),m2=o(" inputs to outputs."),f2=c(),Vo=s("div"),y(Bi.$$.fragment),u2=c(),Ei=s("p"),g2=o("Instantiate a "),tf=s("code"),_2=o("TFBertTokenizer"),b2=o(" from a pre-trained tokenizer."),v2=c(),y(Ss.$$.fragment),k2=c(),Qo=s("div"),y(Mi.$$.fragment),y2=c(),vn=s("p"),T2=o("Initialize a "),of=s("code"),w2=o("TFBertTokenizer"),$2=o(" from an existing "),nf=s("code"),F2=o("Tokenizer"),x2=o("."),B2=c(),y(Us.$$.fragment),Rb=c(),kn=s("h2"),Ws=s("a"),sf=s("span"),y(zi.$$.fragment),E2=c(),rf=s("span"),M2=o("Bert specific outputs"),Vb=c(),yn=s("div"),y(Pi.$$.fragment),z2=c(),ji=s("p"),P2=o("Output type of "),Xp=s("a"),j2=o("BertForPreTraining"),q2=o("."),Qb=c(),Tn=s("div"),y(qi.$$.fragment),C2=c(),Ci=s("p"),N2=o("Output type of "),Yp=s("a"),O2=o("TFBertForPreTraining"),A2=o("."),Jb=c(),Po=s("div"),y(Ni.$$.fragment),I2=c(),Oi=s("p"),L2=o("Output type of "),Zp=s("a"),D2=o("BertForPreTraining"),S2=o("."),U2=c(),Hs=s("div"),y(Ai.$$.fragment),W2=c(),af=s("p"),H2=o("\u201CReturns a new object replacing the specified fields with new values."),Gb=c(),wn=s("h2"),Ks=s("a"),lf=s("span"),y(Ii.$$.fragment),K2=c(),df=s("span"),R2=o("BertModel"),Xb=c(),ot=s("div"),y(Li.$$.fragment),V2=c(),cf=s("p"),Q2=o("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),J2=c(),Di=s("p"),G2=o("This model inherits from "),eh=s("a"),X2=o("PreTrainedModel"),Y2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Z2=c(),Si=s("p"),ew=o("This model is also a PyTorch "),Ui=s("a"),tw=o("torch.nn.Module"),ow=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nw=c(),Wi=s("p"),sw=o(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Hi=s("a"),rw=o(`Attention is
all you need`),aw=o(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),iw=c(),ft=s("p"),lw=o("To behave as an decoder the model needs to be initialized with the "),pf=s("code"),dw=o("is_decoder"),cw=o(` argument of the configuration set
to `),hf=s("code"),pw=o("True"),hw=o(". To be used in a Seq2Seq model, the model needs to initialized with both "),mf=s("code"),mw=o("is_decoder"),fw=o(` argument and
`),ff=s("code"),uw=o("add_cross_attention"),gw=o(" set to "),uf=s("code"),_w=o("True"),bw=o("; an "),gf=s("code"),vw=o("encoder_hidden_states"),kw=o(" is then expected as an input to the forward pass."),yw=c(),so=s("div"),y(Ki.$$.fragment),Tw=c(),$n=s("p"),ww=o("The "),th=s("a"),$w=o("BertModel"),Fw=o(" forward method, overrides the "),_f=s("code"),xw=o("__call__"),Bw=o(" special method."),Ew=c(),y(Rs.$$.fragment),Mw=c(),y(Vs.$$.fragment),Yb=c(),Fn=s("h2"),Qs=s("a"),bf=s("span"),y(Ri.$$.fragment),zw=c(),vf=s("span"),Pw=o("BertForPreTraining"),Zb=c(),Bt=s("div"),y(Vi.$$.fragment),jw=c(),xn=s("p"),qw=o("Bert Model with two heads on top as done during the pretraining: a "),kf=s("code"),Cw=o("masked language modeling"),Nw=o(" head and a "),yf=s("code"),Ow=o("next sentence prediction (classification)"),Aw=o(" head."),Iw=c(),Qi=s("p"),Lw=o("This model inherits from "),oh=s("a"),Dw=o("PreTrainedModel"),Sw=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uw=c(),Ji=s("p"),Ww=o("This model is also a PyTorch "),Gi=s("a"),Hw=o("torch.nn.Module"),Kw=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rw=c(),ro=s("div"),y(Xi.$$.fragment),Vw=c(),Bn=s("p"),Qw=o("The "),nh=s("a"),Jw=o("BertForPreTraining"),Gw=o(" forward method, overrides the "),Tf=s("code"),Xw=o("__call__"),Yw=o(" special method."),Zw=c(),y(Js.$$.fragment),e1=c(),y(Gs.$$.fragment),ev=c(),En=s("h2"),Xs=s("a"),wf=s("span"),y(Yi.$$.fragment),t1=c(),$f=s("span"),o1=o("BertLMHeadModel"),tv=c(),Et=s("div"),y(Zi.$$.fragment),n1=c(),el=s("p"),s1=o("Bert Model with a "),Ff=s("code"),r1=o("language modeling"),a1=o(" head on top for CLM fine-tuning."),i1=c(),tl=s("p"),l1=o("This model inherits from "),sh=s("a"),d1=o("PreTrainedModel"),c1=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),p1=c(),ol=s("p"),h1=o("This model is also a PyTorch "),nl=s("a"),m1=o("torch.nn.Module"),f1=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),u1=c(),ao=s("div"),y(sl.$$.fragment),g1=c(),Mn=s("p"),_1=o("The "),rh=s("a"),b1=o("BertLMHeadModel"),v1=o(" forward method, overrides the "),xf=s("code"),k1=o("__call__"),y1=o(" special method."),T1=c(),y(Ys.$$.fragment),w1=c(),y(Zs.$$.fragment),ov=c(),zn=s("h2"),er=s("a"),Bf=s("span"),y(rl.$$.fragment),$1=c(),Ef=s("span"),F1=o("BertForMaskedLM"),nv=c(),Mt=s("div"),y(al.$$.fragment),x1=c(),il=s("p"),B1=o("Bert Model with a "),Mf=s("code"),E1=o("language modeling"),M1=o(" head on top."),z1=c(),ll=s("p"),P1=o("This model inherits from "),ah=s("a"),j1=o("PreTrainedModel"),q1=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),C1=c(),dl=s("p"),N1=o("This model is also a PyTorch "),cl=s("a"),O1=o("torch.nn.Module"),A1=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),I1=c(),Nt=s("div"),y(pl.$$.fragment),L1=c(),Pn=s("p"),D1=o("The "),ih=s("a"),S1=o("BertForMaskedLM"),U1=o(" forward method, overrides the "),zf=s("code"),W1=o("__call__"),H1=o(" special method."),K1=c(),y(tr.$$.fragment),R1=c(),y(or.$$.fragment),V1=c(),y(nr.$$.fragment),sv=c(),jn=s("h2"),sr=s("a"),Pf=s("span"),y(hl.$$.fragment),Q1=c(),jf=s("span"),J1=o("BertForNextSentencePrediction"),rv=c(),zt=s("div"),y(ml.$$.fragment),G1=c(),fl=s("p"),X1=o("Bert Model with a "),qf=s("code"),Y1=o("next sentence prediction (classification)"),Z1=o(" head on top."),e$=c(),ul=s("p"),t$=o("This model inherits from "),lh=s("a"),o$=o("PreTrainedModel"),n$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),s$=c(),gl=s("p"),r$=o("This model is also a PyTorch "),_l=s("a"),a$=o("torch.nn.Module"),i$=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),l$=c(),io=s("div"),y(bl.$$.fragment),d$=c(),qn=s("p"),c$=o("The "),dh=s("a"),p$=o("BertForNextSentencePrediction"),h$=o(" forward method, overrides the "),Cf=s("code"),m$=o("__call__"),f$=o(" special method."),u$=c(),y(rr.$$.fragment),g$=c(),y(ar.$$.fragment),av=c(),Cn=s("h2"),ir=s("a"),Nf=s("span"),y(vl.$$.fragment),_$=c(),Of=s("span"),b$=o("BertForSequenceClassification"),iv=c(),Pt=s("div"),y(kl.$$.fragment),v$=c(),Af=s("p"),k$=o(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),y$=c(),yl=s("p"),T$=o("This model inherits from "),ch=s("a"),w$=o("PreTrainedModel"),$$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),F$=c(),Tl=s("p"),x$=o("This model is also a PyTorch "),wl=s("a"),B$=o("torch.nn.Module"),E$=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),M$=c(),mt=s("div"),y($l.$$.fragment),z$=c(),Nn=s("p"),P$=o("The "),ph=s("a"),j$=o("BertForSequenceClassification"),q$=o(" forward method, overrides the "),If=s("code"),C$=o("__call__"),N$=o(" special method."),O$=c(),y(lr.$$.fragment),A$=c(),y(dr.$$.fragment),I$=c(),y(cr.$$.fragment),L$=c(),y(pr.$$.fragment),D$=c(),y(hr.$$.fragment),lv=c(),On=s("h2"),mr=s("a"),Lf=s("span"),y(Fl.$$.fragment),S$=c(),Df=s("span"),U$=o("BertForMultipleChoice"),dv=c(),jt=s("div"),y(xl.$$.fragment),W$=c(),Sf=s("p"),H$=o(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),K$=c(),Bl=s("p"),R$=o("This model inherits from "),hh=s("a"),V$=o("PreTrainedModel"),Q$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),J$=c(),El=s("p"),G$=o("This model is also a PyTorch "),Ml=s("a"),X$=o("torch.nn.Module"),Y$=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Z$=c(),lo=s("div"),y(zl.$$.fragment),e0=c(),An=s("p"),t0=o("The "),mh=s("a"),o0=o("BertForMultipleChoice"),n0=o(" forward method, overrides the "),Uf=s("code"),s0=o("__call__"),r0=o(" special method."),a0=c(),y(fr.$$.fragment),i0=c(),y(ur.$$.fragment),cv=c(),In=s("h2"),gr=s("a"),Wf=s("span"),y(Pl.$$.fragment),l0=c(),Hf=s("span"),d0=o("BertForTokenClassification"),pv=c(),qt=s("div"),y(jl.$$.fragment),c0=c(),Kf=s("p"),p0=o(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),h0=c(),ql=s("p"),m0=o("This model inherits from "),fh=s("a"),f0=o("PreTrainedModel"),u0=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),g0=c(),Cl=s("p"),_0=o("This model is also a PyTorch "),Nl=s("a"),b0=o("torch.nn.Module"),v0=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),k0=c(),Ot=s("div"),y(Ol.$$.fragment),y0=c(),Ln=s("p"),T0=o("The "),uh=s("a"),w0=o("BertForTokenClassification"),$0=o(" forward method, overrides the "),Rf=s("code"),F0=o("__call__"),x0=o(" special method."),B0=c(),y(_r.$$.fragment),E0=c(),y(br.$$.fragment),M0=c(),y(vr.$$.fragment),hv=c(),Dn=s("h2"),kr=s("a"),Vf=s("span"),y(Al.$$.fragment),z0=c(),Qf=s("span"),P0=o("BertForQuestionAnswering"),mv=c(),Ct=s("div"),y(Il.$$.fragment),j0=c(),Sn=s("p"),q0=o(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Jf=s("code"),C0=o("span start logits"),N0=o(" and "),Gf=s("code"),O0=o("span end logits"),A0=o(")."),I0=c(),Ll=s("p"),L0=o("This model inherits from "),gh=s("a"),D0=o("PreTrainedModel"),S0=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U0=c(),Dl=s("p"),W0=o("This model is also a PyTorch "),Sl=s("a"),H0=o("torch.nn.Module"),K0=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),R0=c(),At=s("div"),y(Ul.$$.fragment),V0=c(),Un=s("p"),Q0=o("The "),_h=s("a"),J0=o("BertForQuestionAnswering"),G0=o(" forward method, overrides the "),Xf=s("code"),X0=o("__call__"),Y0=o(" special method."),Z0=c(),y(yr.$$.fragment),eF=c(),y(Tr.$$.fragment),tF=c(),y(wr.$$.fragment),fv=c(),Wn=s("h2"),$r=s("a"),Yf=s("span"),y(Wl.$$.fragment),oF=c(),Zf=s("span"),nF=o("TFBertModel"),uv=c(),ut=s("div"),y(Hl.$$.fragment),sF=c(),eu=s("p"),rF=o("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),aF=c(),Kl=s("p"),iF=o("This model inherits from "),bh=s("a"),lF=o("TFPreTrainedModel"),dF=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cF=c(),Rl=s("p"),pF=o("This model is also a "),Vl=s("a"),hF=o("tf.keras.Model"),mF=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fF=c(),y(Fr.$$.fragment),uF=c(),co=s("div"),y(Ql.$$.fragment),gF=c(),Hn=s("p"),_F=o("The "),vh=s("a"),bF=o("TFBertModel"),vF=o(" forward method, overrides the "),tu=s("code"),kF=o("__call__"),yF=o(" special method."),TF=c(),y(xr.$$.fragment),wF=c(),y(Br.$$.fragment),gv=c(),Kn=s("h2"),Er=s("a"),ou=s("span"),y(Jl.$$.fragment),$F=c(),nu=s("span"),FF=o("TFBertForPreTraining"),_v=c(),gt=s("div"),y(Gl.$$.fragment),xF=c(),Rn=s("p"),BF=o(`Bert Model with two heads on top as done during the pretraining:
a `),su=s("code"),EF=o("masked language modeling"),MF=o(" head and a "),ru=s("code"),zF=o("next sentence prediction (classification)"),PF=o(" head."),jF=c(),Xl=s("p"),qF=o("This model inherits from "),kh=s("a"),CF=o("TFPreTrainedModel"),NF=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),OF=c(),Yl=s("p"),AF=o("This model is also a "),Zl=s("a"),IF=o("tf.keras.Model"),LF=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),DF=c(),y(Mr.$$.fragment),SF=c(),po=s("div"),y(ed.$$.fragment),UF=c(),Vn=s("p"),WF=o("The "),yh=s("a"),HF=o("TFBertForPreTraining"),KF=o(" forward method, overrides the "),au=s("code"),RF=o("__call__"),VF=o(" special method."),QF=c(),y(zr.$$.fragment),JF=c(),y(Pr.$$.fragment),bv=c(),Qn=s("h2"),jr=s("a"),iu=s("span"),y(td.$$.fragment),GF=c(),lu=s("span"),XF=o("TFBertModelLMHeadModel"),vv=c(),Jn=s("div"),y(od.$$.fragment),YF=c(),It=s("div"),y(nd.$$.fragment),ZF=c(),nt=s("p"),ex=o("encoder_hidden_states  ("),du=s("code"),tx=o("tf.Tensor"),ox=o(" of shape "),cu=s("code"),nx=o("(batch_size, sequence_length, hidden_size)"),sx=o(", "),pu=s("em"),rx=o("optional"),ax=o(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),hu=s("code"),ix=o("tf.Tensor"),lx=o(" of shape "),mu=s("code"),dx=o("(batch_size, sequence_length)"),cx=o(", "),fu=s("em"),px=o("optional"),hx=o(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),uu=s("code"),mx=o("[0, 1]"),fx=o(":"),ux=c(),sd=s("ul"),rd=s("li"),gx=o("1 for tokens that are "),gu=s("strong"),_x=o("not masked"),bx=o(","),vx=c(),ad=s("li"),kx=o("0 for tokens that are "),_u=s("strong"),yx=o("masked"),Tx=o("."),wx=c(),te=s("p"),$x=o("past_key_values ("),bu=s("code"),Fx=o("Tuple[Tuple[tf.Tensor]]"),xx=o(" of length "),vu=s("code"),Bx=o("config.n_layers"),Ex=o(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),ku=s("code"),Mx=o("past_key_values"),zx=o(" are used, the user can optionally input only the last "),yu=s("code"),Px=o("decoder_input_ids"),jx=o(` (those that
don\u2019t have their past key value states given to this model) of shape `),Tu=s("code"),qx=o("(batch_size, 1)"),Cx=o(` instead of all
`),wu=s("code"),Nx=o("decoder_input_ids"),Ox=o(" of shape "),$u=s("code"),Ax=o("(batch_size, sequence_length)"),Ix=o(`.
use_cache (`),Fu=s("code"),Lx=o("bool"),Dx=o(", "),xu=s("em"),Sx=o("optional"),Ux=o(", defaults to "),Bu=s("code"),Wx=o("True"),Hx=o(`):
If set to `),Eu=s("code"),Kx=o("True"),Rx=o(", "),Mu=s("code"),Vx=o("past_key_values"),Qx=o(` key value states are returned and can be used to speed up decoding (see
`),zu=s("code"),Jx=o("past_key_values"),Gx=o("). Set to "),Pu=s("code"),Xx=o("False"),Yx=o(" during training, "),ju=s("code"),Zx=o("True"),e4=o(` during generation
labels (`),qu=s("code"),t4=o("tf.Tensor"),o4=o(" or "),Cu=s("code"),n4=o("np.ndarray"),s4=o(" of shape "),Nu=s("code"),r4=o("(batch_size, sequence_length)"),a4=o(", "),Ou=s("em"),i4=o("optional"),l4=o(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Au=s("code"),d4=o("[0, ..., config.vocab_size - 1]"),c4=o("."),p4=c(),y(qr.$$.fragment),kv=c(),Gn=s("h2"),Cr=s("a"),Iu=s("span"),y(id.$$.fragment),h4=c(),Lu=s("span"),m4=o("TFBertForMaskedLM"),yv=c(),_t=s("div"),y(ld.$$.fragment),f4=c(),dd=s("p"),u4=o("Bert Model with a "),Du=s("code"),g4=o("language modeling"),_4=o(" head on top."),b4=c(),cd=s("p"),v4=o("This model inherits from "),Th=s("a"),k4=o("TFPreTrainedModel"),y4=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),T4=c(),pd=s("p"),w4=o("This model is also a "),hd=s("a"),$4=o("tf.keras.Model"),F4=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),x4=c(),y(Nr.$$.fragment),B4=c(),Lt=s("div"),y(md.$$.fragment),E4=c(),Xn=s("p"),M4=o("The "),wh=s("a"),z4=o("TFBertForMaskedLM"),P4=o(" forward method, overrides the "),Su=s("code"),j4=o("__call__"),q4=o(" special method."),C4=c(),y(Or.$$.fragment),N4=c(),y(Ar.$$.fragment),O4=c(),y(Ir.$$.fragment),Tv=c(),Yn=s("h2"),Lr=s("a"),Uu=s("span"),y(fd.$$.fragment),A4=c(),Wu=s("span"),I4=o("TFBertForNextSentencePrediction"),wv=c(),bt=s("div"),y(ud.$$.fragment),L4=c(),gd=s("p"),D4=o("Bert Model with a "),Hu=s("code"),S4=o("next sentence prediction (classification)"),U4=o(" head on top."),W4=c(),_d=s("p"),H4=o("This model inherits from "),$h=s("a"),K4=o("TFPreTrainedModel"),R4=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),V4=c(),bd=s("p"),Q4=o("This model is also a "),vd=s("a"),J4=o("tf.keras.Model"),G4=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),X4=c(),y(Dr.$$.fragment),Y4=c(),ho=s("div"),y(kd.$$.fragment),Z4=c(),Zn=s("p"),eB=o("The "),Fh=s("a"),tB=o("TFBertForNextSentencePrediction"),oB=o(" forward method, overrides the "),Ku=s("code"),nB=o("__call__"),sB=o(" special method."),rB=c(),y(Sr.$$.fragment),aB=c(),y(Ur.$$.fragment),$v=c(),es=s("h2"),Wr=s("a"),Ru=s("span"),y(yd.$$.fragment),iB=c(),Vu=s("span"),lB=o("TFBertForSequenceClassification"),Fv=c(),vt=s("div"),y(Td.$$.fragment),dB=c(),Qu=s("p"),cB=o(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),pB=c(),wd=s("p"),hB=o("This model inherits from "),xh=s("a"),mB=o("TFPreTrainedModel"),fB=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uB=c(),$d=s("p"),gB=o("This model is also a "),Fd=s("a"),_B=o("tf.keras.Model"),bB=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vB=c(),y(Hr.$$.fragment),kB=c(),Dt=s("div"),y(xd.$$.fragment),yB=c(),ts=s("p"),TB=o("The "),Bh=s("a"),wB=o("TFBertForSequenceClassification"),$B=o(" forward method, overrides the "),Ju=s("code"),FB=o("__call__"),xB=o(" special method."),BB=c(),y(Kr.$$.fragment),EB=c(),y(Rr.$$.fragment),MB=c(),y(Vr.$$.fragment),xv=c(),os=s("h2"),Qr=s("a"),Gu=s("span"),y(Bd.$$.fragment),zB=c(),Xu=s("span"),PB=o("TFBertForMultipleChoice"),Bv=c(),kt=s("div"),y(Ed.$$.fragment),jB=c(),Yu=s("p"),qB=o(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),CB=c(),Md=s("p"),NB=o("This model inherits from "),Eh=s("a"),OB=o("TFPreTrainedModel"),AB=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),IB=c(),zd=s("p"),LB=o("This model is also a "),Pd=s("a"),DB=o("tf.keras.Model"),SB=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),UB=c(),y(Jr.$$.fragment),WB=c(),mo=s("div"),y(jd.$$.fragment),HB=c(),ns=s("p"),KB=o("The "),Mh=s("a"),RB=o("TFBertForMultipleChoice"),VB=o(" forward method, overrides the "),Zu=s("code"),QB=o("__call__"),JB=o(" special method."),GB=c(),y(Gr.$$.fragment),XB=c(),y(Xr.$$.fragment),Ev=c(),ss=s("h2"),Yr=s("a"),eg=s("span"),y(qd.$$.fragment),YB=c(),tg=s("span"),ZB=o("TFBertForTokenClassification"),Mv=c(),yt=s("div"),y(Cd.$$.fragment),eE=c(),og=s("p"),tE=o(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),oE=c(),Nd=s("p"),nE=o("This model inherits from "),zh=s("a"),sE=o("TFPreTrainedModel"),rE=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aE=c(),Od=s("p"),iE=o("This model is also a "),Ad=s("a"),lE=o("tf.keras.Model"),dE=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cE=c(),y(Zr.$$.fragment),pE=c(),St=s("div"),y(Id.$$.fragment),hE=c(),rs=s("p"),mE=o("The "),Ph=s("a"),fE=o("TFBertForTokenClassification"),uE=o(" forward method, overrides the "),ng=s("code"),gE=o("__call__"),_E=o(" special method."),bE=c(),y(ea.$$.fragment),vE=c(),y(ta.$$.fragment),kE=c(),y(oa.$$.fragment),zv=c(),as=s("h2"),na=s("a"),sg=s("span"),y(Ld.$$.fragment),yE=c(),rg=s("span"),TE=o("TFBertForQuestionAnswering"),Pv=c(),Tt=s("div"),y(Dd.$$.fragment),wE=c(),is=s("p"),$E=o(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ag=s("code"),FE=o("span start logits"),xE=o(" and "),ig=s("code"),BE=o("span end logits"),EE=o(")."),ME=c(),Sd=s("p"),zE=o("This model inherits from "),jh=s("a"),PE=o("TFPreTrainedModel"),jE=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qE=c(),Ud=s("p"),CE=o("This model is also a "),Wd=s("a"),NE=o("tf.keras.Model"),OE=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),AE=c(),y(sa.$$.fragment),IE=c(),Ut=s("div"),y(Hd.$$.fragment),LE=c(),ls=s("p"),DE=o("The "),qh=s("a"),SE=o("TFBertForQuestionAnswering"),UE=o(" forward method, overrides the "),lg=s("code"),WE=o("__call__"),HE=o(" special method."),KE=c(),y(ra.$$.fragment),RE=c(),y(aa.$$.fragment),VE=c(),y(ia.$$.fragment),jv=c(),ds=s("h2"),la=s("a"),dg=s("span"),y(Kd.$$.fragment),QE=c(),cg=s("span"),JE=o("FlaxBertModel"),qv=c(),st=s("div"),y(Rd.$$.fragment),GE=c(),pg=s("p"),XE=o("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),YE=c(),Vd=s("p"),ZE=o("This model inherits from "),Ch=s("a"),eM=o("FlaxPreTrainedModel"),tM=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oM=c(),Qd=s("p"),nM=o("This model is also a Flax Linen "),Jd=s("a"),sM=o("flax.linen.Module"),rM=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),aM=c(),hg=s("p"),iM=o("Finally, this model supports inherent JAX features such as:"),lM=c(),jo=s("ul"),mg=s("li"),Gd=s("a"),dM=o("Just-In-Time (JIT) compilation"),cM=c(),fg=s("li"),Xd=s("a"),pM=o("Automatic Differentiation"),hM=c(),ug=s("li"),Yd=s("a"),mM=o("Vectorization"),fM=c(),gg=s("li"),Zd=s("a"),uM=o("Parallelization"),gM=c(),fo=s("div"),y(ec.$$.fragment),_M=c(),cs=s("p"),bM=o("The "),_g=s("code"),vM=o("FlaxBertPreTrainedModel"),kM=o(" forward method, overrides the "),bg=s("code"),yM=o("__call__"),TM=o(" special method."),wM=c(),y(da.$$.fragment),$M=c(),y(ca.$$.fragment),Cv=c(),ps=s("h2"),pa=s("a"),vg=s("span"),y(tc.$$.fragment),FM=c(),kg=s("span"),xM=o("FlaxBertForPreTraining"),Nv=c(),rt=s("div"),y(oc.$$.fragment),BM=c(),hs=s("p"),EM=o("Bert Model with two heads on top as done during the pretraining: a "),yg=s("code"),MM=o("masked language modeling"),zM=o(" head and a "),Tg=s("code"),PM=o("next sentence prediction (classification)"),jM=o(" head."),qM=c(),nc=s("p"),CM=o("This model inherits from "),Nh=s("a"),NM=o("FlaxPreTrainedModel"),OM=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),AM=c(),sc=s("p"),IM=o("This model is also a Flax Linen "),rc=s("a"),LM=o("flax.linen.Module"),DM=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),SM=c(),wg=s("p"),UM=o("Finally, this model supports inherent JAX features such as:"),WM=c(),qo=s("ul"),$g=s("li"),ac=s("a"),HM=o("Just-In-Time (JIT) compilation"),KM=c(),Fg=s("li"),ic=s("a"),RM=o("Automatic Differentiation"),VM=c(),xg=s("li"),lc=s("a"),QM=o("Vectorization"),JM=c(),Bg=s("li"),dc=s("a"),GM=o("Parallelization"),XM=c(),uo=s("div"),y(cc.$$.fragment),YM=c(),ms=s("p"),ZM=o("The "),Eg=s("code"),ez=o("FlaxBertPreTrainedModel"),tz=o(" forward method, overrides the "),Mg=s("code"),oz=o("__call__"),nz=o(" special method."),sz=c(),y(ha.$$.fragment),rz=c(),y(ma.$$.fragment),Ov=c(),fs=s("h2"),fa=s("a"),zg=s("span"),y(pc.$$.fragment),az=c(),Pg=s("span"),iz=o("FlaxBertForCausalLM"),Av=c(),at=s("div"),y(hc.$$.fragment),lz=c(),jg=s("p"),dz=o(`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),cz=c(),mc=s("p"),pz=o("This model inherits from "),Oh=s("a"),hz=o("FlaxPreTrainedModel"),mz=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fz=c(),fc=s("p"),uz=o("This model is also a Flax Linen "),uc=s("a"),gz=o("flax.linen.Module"),_z=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bz=c(),qg=s("p"),vz=o("Finally, this model supports inherent JAX features such as:"),kz=c(),Co=s("ul"),Cg=s("li"),gc=s("a"),yz=o("Just-In-Time (JIT) compilation"),Tz=c(),Ng=s("li"),_c=s("a"),wz=o("Automatic Differentiation"),$z=c(),Og=s("li"),bc=s("a"),Fz=o("Vectorization"),xz=c(),Ag=s("li"),vc=s("a"),Bz=o("Parallelization"),Ez=c(),go=s("div"),y(kc.$$.fragment),Mz=c(),us=s("p"),zz=o("The "),Ig=s("code"),Pz=o("FlaxBertPreTrainedModel"),jz=o(" forward method, overrides the "),Lg=s("code"),qz=o("__call__"),Cz=o(" special method."),Nz=c(),y(ua.$$.fragment),Oz=c(),y(ga.$$.fragment),Iv=c(),gs=s("h2"),_a=s("a"),Dg=s("span"),y(yc.$$.fragment),Az=c(),Sg=s("span"),Iz=o("FlaxBertForMaskedLM"),Lv=c(),it=s("div"),y(Tc.$$.fragment),Lz=c(),wc=s("p"),Dz=o("Bert Model with a "),Ug=s("code"),Sz=o("language modeling"),Uz=o(" head on top."),Wz=c(),$c=s("p"),Hz=o("This model inherits from "),Ah=s("a"),Kz=o("FlaxPreTrainedModel"),Rz=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Vz=c(),Fc=s("p"),Qz=o("This model is also a Flax Linen "),xc=s("a"),Jz=o("flax.linen.Module"),Gz=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xz=c(),Wg=s("p"),Yz=o("Finally, this model supports inherent JAX features such as:"),Zz=c(),No=s("ul"),Hg=s("li"),Bc=s("a"),eP=o("Just-In-Time (JIT) compilation"),tP=c(),Kg=s("li"),Ec=s("a"),oP=o("Automatic Differentiation"),nP=c(),Rg=s("li"),Mc=s("a"),sP=o("Vectorization"),rP=c(),Vg=s("li"),zc=s("a"),aP=o("Parallelization"),iP=c(),_o=s("div"),y(Pc.$$.fragment),lP=c(),_s=s("p"),dP=o("The "),Qg=s("code"),cP=o("FlaxBertPreTrainedModel"),pP=o(" forward method, overrides the "),Jg=s("code"),hP=o("__call__"),mP=o(" special method."),fP=c(),y(ba.$$.fragment),uP=c(),y(va.$$.fragment),Dv=c(),bs=s("h2"),ka=s("a"),Gg=s("span"),y(jc.$$.fragment),gP=c(),Xg=s("span"),_P=o("FlaxBertForNextSentencePrediction"),Sv=c(),lt=s("div"),y(qc.$$.fragment),bP=c(),Cc=s("p"),vP=o("Bert Model with a "),Yg=s("code"),kP=o("next sentence prediction (classification)"),yP=o(" head on top."),TP=c(),Nc=s("p"),wP=o("This model inherits from "),Ih=s("a"),$P=o("FlaxPreTrainedModel"),FP=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xP=c(),Oc=s("p"),BP=o("This model is also a Flax Linen "),Ac=s("a"),EP=o("flax.linen.Module"),MP=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zP=c(),Zg=s("p"),PP=o("Finally, this model supports inherent JAX features such as:"),jP=c(),Oo=s("ul"),e_=s("li"),Ic=s("a"),qP=o("Just-In-Time (JIT) compilation"),CP=c(),t_=s("li"),Lc=s("a"),NP=o("Automatic Differentiation"),OP=c(),o_=s("li"),Dc=s("a"),AP=o("Vectorization"),IP=c(),n_=s("li"),Sc=s("a"),LP=o("Parallelization"),DP=c(),bo=s("div"),y(Uc.$$.fragment),SP=c(),vs=s("p"),UP=o("The "),s_=s("code"),WP=o("FlaxBertPreTrainedModel"),HP=o(" forward method, overrides the "),r_=s("code"),KP=o("__call__"),RP=o(" special method."),VP=c(),y(ya.$$.fragment),QP=c(),y(Ta.$$.fragment),Uv=c(),ks=s("h2"),wa=s("a"),a_=s("span"),y(Wc.$$.fragment),JP=c(),i_=s("span"),GP=o("FlaxBertForSequenceClassification"),Wv=c(),dt=s("div"),y(Hc.$$.fragment),XP=c(),l_=s("p"),YP=o(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),ZP=c(),Kc=s("p"),ej=o("This model inherits from "),Lh=s("a"),tj=o("FlaxPreTrainedModel"),oj=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nj=c(),Rc=s("p"),sj=o("This model is also a Flax Linen "),Vc=s("a"),rj=o("flax.linen.Module"),aj=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ij=c(),d_=s("p"),lj=o("Finally, this model supports inherent JAX features such as:"),dj=c(),Ao=s("ul"),c_=s("li"),Qc=s("a"),cj=o("Just-In-Time (JIT) compilation"),pj=c(),p_=s("li"),Jc=s("a"),hj=o("Automatic Differentiation"),mj=c(),h_=s("li"),Gc=s("a"),fj=o("Vectorization"),uj=c(),m_=s("li"),Xc=s("a"),gj=o("Parallelization"),_j=c(),vo=s("div"),y(Yc.$$.fragment),bj=c(),ys=s("p"),vj=o("The "),f_=s("code"),kj=o("FlaxBertPreTrainedModel"),yj=o(" forward method, overrides the "),u_=s("code"),Tj=o("__call__"),wj=o(" special method."),$j=c(),y($a.$$.fragment),Fj=c(),y(Fa.$$.fragment),Hv=c(),Ts=s("h2"),xa=s("a"),g_=s("span"),y(Zc.$$.fragment),xj=c(),__=s("span"),Bj=o("FlaxBertForMultipleChoice"),Kv=c(),ct=s("div"),y(ep.$$.fragment),Ej=c(),b_=s("p"),Mj=o(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),zj=c(),tp=s("p"),Pj=o("This model inherits from "),Dh=s("a"),jj=o("FlaxPreTrainedModel"),qj=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cj=c(),op=s("p"),Nj=o("This model is also a Flax Linen "),np=s("a"),Oj=o("flax.linen.Module"),Aj=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ij=c(),v_=s("p"),Lj=o("Finally, this model supports inherent JAX features such as:"),Dj=c(),Io=s("ul"),k_=s("li"),sp=s("a"),Sj=o("Just-In-Time (JIT) compilation"),Uj=c(),y_=s("li"),rp=s("a"),Wj=o("Automatic Differentiation"),Hj=c(),T_=s("li"),ap=s("a"),Kj=o("Vectorization"),Rj=c(),w_=s("li"),ip=s("a"),Vj=o("Parallelization"),Qj=c(),ko=s("div"),y(lp.$$.fragment),Jj=c(),ws=s("p"),Gj=o("The "),$_=s("code"),Xj=o("FlaxBertPreTrainedModel"),Yj=o(" forward method, overrides the "),F_=s("code"),Zj=o("__call__"),eq=o(" special method."),tq=c(),y(Ba.$$.fragment),oq=c(),y(Ea.$$.fragment),Rv=c(),$s=s("h2"),Ma=s("a"),x_=s("span"),y(dp.$$.fragment),nq=c(),B_=s("span"),sq=o("FlaxBertForTokenClassification"),Vv=c(),pt=s("div"),y(cp.$$.fragment),rq=c(),E_=s("p"),aq=o(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),iq=c(),pp=s("p"),lq=o("This model inherits from "),Sh=s("a"),dq=o("FlaxPreTrainedModel"),cq=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pq=c(),hp=s("p"),hq=o("This model is also a Flax Linen "),mp=s("a"),mq=o("flax.linen.Module"),fq=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uq=c(),M_=s("p"),gq=o("Finally, this model supports inherent JAX features such as:"),_q=c(),Lo=s("ul"),z_=s("li"),fp=s("a"),bq=o("Just-In-Time (JIT) compilation"),vq=c(),P_=s("li"),up=s("a"),kq=o("Automatic Differentiation"),yq=c(),j_=s("li"),gp=s("a"),Tq=o("Vectorization"),wq=c(),q_=s("li"),_p=s("a"),$q=o("Parallelization"),Fq=c(),yo=s("div"),y(bp.$$.fragment),xq=c(),Fs=s("p"),Bq=o("The "),C_=s("code"),Eq=o("FlaxBertPreTrainedModel"),Mq=o(" forward method, overrides the "),N_=s("code"),zq=o("__call__"),Pq=o(" special method."),jq=c(),y(za.$$.fragment),qq=c(),y(Pa.$$.fragment),Qv=c(),xs=s("h2"),ja=s("a"),O_=s("span"),y(vp.$$.fragment),Cq=c(),A_=s("span"),Nq=o("FlaxBertForQuestionAnswering"),Jv=c(),ht=s("div"),y(kp.$$.fragment),Oq=c(),Bs=s("p"),Aq=o(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),I_=s("code"),Iq=o("span start logits"),Lq=o(" and "),L_=s("code"),Dq=o("span end logits"),Sq=o(")."),Uq=c(),yp=s("p"),Wq=o("This model inherits from "),Uh=s("a"),Hq=o("FlaxPreTrainedModel"),Kq=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rq=c(),Tp=s("p"),Vq=o("This model is also a Flax Linen "),wp=s("a"),Qq=o("flax.linen.Module"),Jq=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gq=c(),D_=s("p"),Xq=o("Finally, this model supports inherent JAX features such as:"),Yq=c(),Do=s("ul"),S_=s("li"),$p=s("a"),Zq=o("Just-In-Time (JIT) compilation"),e3=c(),U_=s("li"),Fp=s("a"),t3=o("Automatic Differentiation"),o3=c(),W_=s("li"),xp=s("a"),n3=o("Vectorization"),s3=c(),H_=s("li"),Bp=s("a"),r3=o("Parallelization"),a3=c(),To=s("div"),y(Ep.$$.fragment),i3=c(),Es=s("p"),l3=o("The "),K_=s("code"),d3=o("FlaxBertPreTrainedModel"),c3=o(" forward method, overrides the "),R_=s("code"),p3=o("__call__"),h3=o(" special method."),m3=c(),y(qa.$$.fragment),f3=c(),y(Ca.$$.fragment),this.h()},l(i){const v=R7('[data-svelte="svelte-1phssyn"]',document.head);d=r(v,"META",{name:!0,content:!0}),v.forEach(t),g=p(i),m=r(i,"H1",{class:!0});var Mp=a(m);f=r(Mp,"A",{id:!0,class:!0,href:!0});var V_=a(f);b=r(V_,"SPAN",{});var Q_=a(b);T(l.$$.fragment,Q_),Q_.forEach(t),V_.forEach(t),h=p(Mp),M=r(Mp,"SPAN",{});var J_=a(M);xe=n(J_,"BERT"),J_.forEach(t),Mp.forEach(t),ye=p(i),S=r(i,"H2",{class:!0});var zp=a(S);pe=r(zp,"A",{id:!0,class:!0,href:!0});var G_=a(pe);ee=r(G_,"SPAN",{});var X_=a(ee);T(E.$$.fragment,X_),X_.forEach(t),G_.forEach(t),Be=p(zp),R=r(zp,"SPAN",{});var Y_=a(R);Ee=n(Y_,"Overview"),Y_.forEach(t),zp.forEach(t),Te=p(i),U=r(i,"P",{});var Pp=a(U);Me=n(Pp,"The BERT model was proposed in "),me=r(Pp,"A",{href:!0,rel:!0});var Z_=a(me);G=n(Z_,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),Z_.forEach(t),ze=n(Pp,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),Pp.forEach(t),we=p(i),H=r(i,"P",{});var eb=a(H);Pe=n(eb,"The abstract from the paper is the following:"),eb.forEach(t),$e=p(i),K=r(i,"P",{});var tb=a(K);_e=r(tb,"EM",{});var ob=a(_e);je=n(ob,`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),ob.forEach(t),tb.forEach(t),oe=p(i),j=r(i,"P",{});var nb=a(j);q=r(nb,"EM",{});var sb=a(q);qe=n(sb,`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),sb.forEach(t),nb.forEach(t),Q=p(i),ge=r(i,"P",{});var rb=a(ge);Ce=n(rb,"Tips:"),rb.forEach(t),J=p(i),he=r(i,"UL",{});var jp=a(he);be=r(jp,"LI",{});var ab=a(be);N=n(ab,`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),ab.forEach(t),Ne=p(jp),V=r(jp,"LI",{});var ib=a(V);Oe=n(ib,`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),ib.forEach(t),jp.forEach(t),Fe=p(i),D=r(i,"P",{});var Ms=a(D);Ae=n(Ms,"This model was contributed by "),fe=r(Ms,"A",{href:!0,rel:!0});var lb=a(fe);L=n(lb,"thomwolf"),lb.forEach(t),Ie=n(Ms,". The original code can be found "),W=r(Ms,"A",{href:!0,rel:!0});var db=a(W);Le=n(db,"here"),db.forEach(t),se=n(Ms,"."),Ms.forEach(t),C=p(i),de=r(i,"H2",{class:!0});var qp=a(de);O=r(qp,"A",{id:!0,class:!0,href:!0});var cb=a(O);ve=r(cb,"SPAN",{});var pb=a(ve);T(ue.$$.fragment,pb),pb.forEach(t),cb.forEach(t),k=p(qp),z=r(qp,"SPAN",{});var hb=a(z);Re=n(hb,"BertConfig"),hb.forEach(t),qp.forEach(t),ne=p(i),ke=r(i,"DIV",{class:!0});var So=a(ke);T(We.$$.fragment,So),P=p(So),De=r(So,"P",{});var Uo=a(De);Ve=n(Uo,"This is the configuration class to store the configuration of a "),Ke=r(Uo,"A",{href:!0});var mb=a(Ke);Qe=n(mb,"BertModel"),mb.forEach(t),Je=n(Uo," or a "),I=r(Uo,"A",{href:!0});var fb=a(I);X=n(fb,"TFBertModel"),fb.forEach(t),Ge=n(Uo,`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),He=r(Uo,"A",{href:!0,rel:!0});var ub=a(He);Y=n(ub,"bert-base-uncased"),ub.forEach(t),Xe=n(Uo," architecture."),Uo.forEach(t),Ye=p(So),ce=r(So,"P",{});var zs=a(ce);Ze=n(zs,"Configuration objects inherit from "),Z=r(zs,"A",{href:!0});var gb=a(Z);et=n(gb,"PretrainedConfig"),gb.forEach(t),Hy=n(zs,` and can be used to control the model outputs. Read the
documentation from `),Wp=r(zs,"A",{href:!0});var _b=a(Wp);Ky=n(_b,"PretrainedConfig"),_b.forEach(t),Ry=n(zs," for more information."),zs.forEach(t),Vy=p(So),T(Cs.$$.fragment,So),So.forEach(t),Db=p(i),mn=r(i,"H2",{class:!0});var Cp=a(mn);Ns=r(Cp,"A",{id:!0,class:!0,href:!0});var bb=a(Ns);Pm=r(bb,"SPAN",{});var vb=a(Pm);T(li.$$.fragment,vb),vb.forEach(t),bb.forEach(t),Qy=p(Cp),jm=r(Cp,"SPAN",{});var kb=a(jm);Jy=n(kb,"BertTokenizer"),kb.forEach(t),Cp.forEach(t),Sb=p(i),tt=r(i,"DIV",{class:!0});var wt=a(tt);T(di.$$.fragment,wt),Gy=p(wt),qm=r(wt,"P",{});var yb=a(qm);Xy=n(yb,"Construct a BERT tokenizer. Based on WordPiece."),yb.forEach(t),Yy=p(wt),ci=r(wt,"P",{});var Np=a(ci);Zy=n(Np,"This tokenizer inherits from "),Hp=r(Np,"A",{href:!0});var Tb=a(Hp);eT=n(Tb,"PreTrainedTokenizer"),Tb.forEach(t),tT=n(Np,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Np.forEach(t),oT=p(wt),Ko=r(wt,"DIV",{class:!0});var Ps=a(Ko);T(pi.$$.fragment,Ps),nT=p(Ps),Cm=r(Ps,"P",{});var wb=a(Cm);sT=n(wb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),wb.forEach(t),rT=p(Ps),hi=r(Ps,"UL",{});var Op=a(hi);Kp=r(Op,"LI",{});var Wh=a(Kp);aT=n(Wh,"single sequence: "),Nm=r(Wh,"CODE",{});var $b=a(Nm);iT=n($b,"[CLS] X [SEP]"),$b.forEach(t),Wh.forEach(t),lT=p(Op),Rp=r(Op,"LI",{});var Hh=a(Rp);dT=n(Hh,"pair of sequences: "),Om=r(Hh,"CODE",{});var Fb=a(Om);cT=n(Fb,"[CLS] A [SEP] B [SEP]"),Fb.forEach(t),Hh.forEach(t),Op.forEach(t),Ps.forEach(t),pT=p(wt),Os=r(wt,"DIV",{class:!0});var Ap=a(Os);T(mi.$$.fragment,Ap),hT=p(Ap),fi=r(Ap,"P",{});var Ip=a(fi);mT=n(Ip,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Am=r(Ip,"CODE",{});var xb=a(Am);fT=n(xb,"prepare_for_model"),xb.forEach(t),uT=n(Ip," method."),Ip.forEach(t),Ap.forEach(t),gT=p(wt),oo=r(wt,"DIV",{class:!0});var Wo=a(oo);T(ui.$$.fragment,Wo),_T=p(Wo),Im=r(Wo,"P",{});var Bb=a(Im);bT=n(Bb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Bb.forEach(t),vT=p(Wo),T(As.$$.fragment,Wo),kT=p(Wo),fn=r(Wo,"P",{});var js=a(fn);yT=n(js,"If "),Lm=r(js,"CODE",{});var Eb=a(Lm);TT=n(Eb,"token_ids_1"),Eb.forEach(t),wT=n(js," is "),Dm=r(js,"CODE",{});var Mb=a(Dm);$T=n(Mb,"None"),Mb.forEach(t),FT=n(js,", this method only returns the first portion of the mask (0s)."),js.forEach(t),Wo.forEach(t),xT=p(wt),Vp=r(wt,"DIV",{class:!0});var zb=a(Vp);T(gi.$$.fragment,zb),zb.forEach(t),wt.forEach(t),Ub=p(i),un=r(i,"H2",{class:!0});var Lp=a(un);Is=r(Lp,"A",{id:!0,class:!0,href:!0});var Pb=a(Is);Sm=r(Pb,"SPAN",{});var jb=a(Sm);T(_i.$$.fragment,jb),jb.forEach(t),Pb.forEach(t),BT=p(Lp),Um=r(Lp,"SPAN",{});var qb=a(Um);ET=n(qb,"BertTokenizerFast"),qb.forEach(t),Lp.forEach(t),Wb=p(i),Ft=r(i,"DIV",{class:!0});var to=a(Ft);T(bi.$$.fragment,to),MT=p(to),vi=r(to,"P",{});var Dp=a(vi);zT=n(Dp,"Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Wm=r(Dp,"EM",{});var Cb=a(Wm);PT=n(Cb,"tokenizers"),Cb.forEach(t),jT=n(Dp," library). Based on WordPiece."),Dp.forEach(t),qT=p(to),ki=r(to,"P",{});var Sp=a(ki);CT=n(Sp,"This tokenizer inherits from "),Qp=r(Sp,"A",{href:!0});var Nb=a(Qp);NT=n(Nb,"PreTrainedTokenizerFast"),Nb.forEach(t),OT=n(Sp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Sp.forEach(t),AT=p(to),Ro=r(to,"DIV",{class:!0});var qs=a(Ro);T(yi.$$.fragment,qs),IT=p(qs),Hm=r(qs,"P",{});var Ob=a(Hm);LT=n(Ob,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Ob.forEach(t),DT=p(qs),Ti=r(qs,"UL",{});var Up=a(Ti);Jp=r(Up,"LI",{});var Kh=a(Jp);ST=n(Kh,"single sequence: "),Km=r(Kh,"CODE",{});var Ab=a(Km);UT=n(Ab,"[CLS] X [SEP]"),Ab.forEach(t),Kh.forEach(t),WT=p(Up),Gp=r(Up,"LI",{});var Rh=a(Gp);HT=n(Rh,"pair of sequences: "),Rm=r(Rh,"CODE",{});var Ib=a(Rm);KT=n(Ib,"[CLS] A [SEP] B [SEP]"),Ib.forEach(t),Rh.forEach(t),Up.forEach(t),qs.forEach(t),RT=p(to),no=r(to,"DIV",{class:!0});var Ho=a(no);T(wi.$$.fragment,Ho),VT=p(Ho),Vm=r(Ho,"P",{});var Lb=a(Vm);QT=n(Lb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Lb.forEach(t),JT=p(Ho),T(Ls.$$.fragment,Ho),GT=p(Ho),gn=r(Ho,"P",{});var Vh=a(gn);XT=n(Vh,"If "),Qm=r(Vh,"CODE",{});var u3=a(Qm);YT=n(u3,"token_ids_1"),u3.forEach(t),ZT=n(Vh," is "),Jm=r(Vh,"CODE",{});var g3=a(Jm);e2=n(g3,"None"),g3.forEach(t),t2=n(Vh,", this method only returns the first portion of the mask (0s)."),Vh.forEach(t),Ho.forEach(t),to.forEach(t),Hb=p(i),_n=r(i,"H2",{class:!0});var Xv=a(_n);Ds=r(Xv,"A",{id:!0,class:!0,href:!0});var _3=a(Ds);Gm=r(_3,"SPAN",{});var b3=a(Gm);T($i.$$.fragment,b3),b3.forEach(t),_3.forEach(t),o2=p(Xv),Xm=r(Xv,"SPAN",{});var v3=a(Xm);n2=n(v3,"TFBertTokenizer"),v3.forEach(t),Xv.forEach(t),Kb=p(i),xt=r(i,"DIV",{class:!0});var Jo=a(xt);T(Fi.$$.fragment,Jo),s2=p(Jo),bn=r(Jo,"P",{});var Qh=a(bn);r2=n(Qh,`This is an in-graph tokenizer for BERT. It should be initialized similarly to other tokenizers, using the
`),Ym=r(Qh,"CODE",{});var k3=a(Ym);a2=n(k3,"from_pretrained()"),k3.forEach(t),i2=n(Qh," method. It can also be initialized with the "),Zm=r(Qh,"CODE",{});var y3=a(Zm);l2=n(y3,"from_tokenizer()"),y3.forEach(t),d2=n(Qh,` method, which imports settings
from an existing standard tokenizer object.`),Qh.forEach(t),c2=p(Jo),xi=r(Jo,"P",{});var Yv=a(xi);p2=n(Yv,`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. As a result, they have somewhat more limited options
than standard tokenizer classes. They are most useful when you want to create an end-to-end model that goes
straight from `),ef=r(Yv,"CODE",{});var T3=a(ef);h2=n(T3,"tf.string"),T3.forEach(t),m2=n(Yv," inputs to outputs."),Yv.forEach(t),f2=p(Jo),Vo=r(Jo,"DIV",{class:!0});var Jh=a(Vo);T(Bi.$$.fragment,Jh),u2=p(Jh),Ei=r(Jh,"P",{});var Zv=a(Ei);g2=n(Zv,"Instantiate a "),tf=r(Zv,"CODE",{});var w3=a(tf);_2=n(w3,"TFBertTokenizer"),w3.forEach(t),b2=n(Zv," from a pre-trained tokenizer."),Zv.forEach(t),v2=p(Jh),T(Ss.$$.fragment,Jh),Jh.forEach(t),k2=p(Jo),Qo=r(Jo,"DIV",{class:!0});var Gh=a(Qo);T(Mi.$$.fragment,Gh),y2=p(Gh),vn=r(Gh,"P",{});var Xh=a(vn);T2=n(Xh,"Initialize a "),of=r(Xh,"CODE",{});var $3=a(of);w2=n($3,"TFBertTokenizer"),$3.forEach(t),$2=n(Xh," from an existing "),nf=r(Xh,"CODE",{});var F3=a(nf);F2=n(F3,"Tokenizer"),F3.forEach(t),x2=n(Xh,"."),Xh.forEach(t),B2=p(Gh),T(Us.$$.fragment,Gh),Gh.forEach(t),Jo.forEach(t),Rb=p(i),kn=r(i,"H2",{class:!0});var ek=a(kn);Ws=r(ek,"A",{id:!0,class:!0,href:!0});var x3=a(Ws);sf=r(x3,"SPAN",{});var B3=a(sf);T(zi.$$.fragment,B3),B3.forEach(t),x3.forEach(t),E2=p(ek),rf=r(ek,"SPAN",{});var E3=a(rf);M2=n(E3,"Bert specific outputs"),E3.forEach(t),ek.forEach(t),Vb=p(i),yn=r(i,"DIV",{class:!0});var tk=a(yn);T(Pi.$$.fragment,tk),z2=p(tk),ji=r(tk,"P",{});var ok=a(ji);P2=n(ok,"Output type of "),Xp=r(ok,"A",{href:!0});var M3=a(Xp);j2=n(M3,"BertForPreTraining"),M3.forEach(t),q2=n(ok,"."),ok.forEach(t),tk.forEach(t),Qb=p(i),Tn=r(i,"DIV",{class:!0});var nk=a(Tn);T(qi.$$.fragment,nk),C2=p(nk),Ci=r(nk,"P",{});var sk=a(Ci);N2=n(sk,"Output type of "),Yp=r(sk,"A",{href:!0});var z3=a(Yp);O2=n(z3,"TFBertForPreTraining"),z3.forEach(t),A2=n(sk,"."),sk.forEach(t),nk.forEach(t),Jb=p(i),Po=r(i,"DIV",{class:!0});var Yh=a(Po);T(Ni.$$.fragment,Yh),I2=p(Yh),Oi=r(Yh,"P",{});var rk=a(Oi);L2=n(rk,"Output type of "),Zp=r(rk,"A",{href:!0});var P3=a(Zp);D2=n(P3,"BertForPreTraining"),P3.forEach(t),S2=n(rk,"."),rk.forEach(t),U2=p(Yh),Hs=r(Yh,"DIV",{class:!0});var ak=a(Hs);T(Ai.$$.fragment,ak),W2=p(ak),af=r(ak,"P",{});var j3=a(af);H2=n(j3,"\u201CReturns a new object replacing the specified fields with new values."),j3.forEach(t),ak.forEach(t),Yh.forEach(t),Gb=p(i),wn=r(i,"H2",{class:!0});var ik=a(wn);Ks=r(ik,"A",{id:!0,class:!0,href:!0});var q3=a(Ks);lf=r(q3,"SPAN",{});var C3=a(lf);T(Ii.$$.fragment,C3),C3.forEach(t),q3.forEach(t),K2=p(ik),df=r(ik,"SPAN",{});var N3=a(df);R2=n(N3,"BertModel"),N3.forEach(t),ik.forEach(t),Xb=p(i),ot=r(i,"DIV",{class:!0});var Wt=a(ot);T(Li.$$.fragment,Wt),V2=p(Wt),cf=r(Wt,"P",{});var O3=a(cf);Q2=n(O3,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),O3.forEach(t),J2=p(Wt),Di=r(Wt,"P",{});var lk=a(Di);G2=n(lk,"This model inherits from "),eh=r(lk,"A",{href:!0});var A3=a(eh);X2=n(A3,"PreTrainedModel"),A3.forEach(t),Y2=n(lk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lk.forEach(t),Z2=p(Wt),Si=r(Wt,"P",{});var dk=a(Si);ew=n(dk,"This model is also a PyTorch "),Ui=r(dk,"A",{href:!0,rel:!0});var I3=a(Ui);tw=n(I3,"torch.nn.Module"),I3.forEach(t),ow=n(dk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dk.forEach(t),nw=p(Wt),Wi=r(Wt,"P",{});var ck=a(Wi);sw=n(ck,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Hi=r(ck,"A",{href:!0,rel:!0});var L3=a(Hi);rw=n(L3,`Attention is
all you need`),L3.forEach(t),aw=n(ck,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),ck.forEach(t),iw=p(Wt),ft=r(Wt,"P",{});var Ht=a(ft);lw=n(Ht,"To behave as an decoder the model needs to be initialized with the "),pf=r(Ht,"CODE",{});var D3=a(pf);dw=n(D3,"is_decoder"),D3.forEach(t),cw=n(Ht,` argument of the configuration set
to `),hf=r(Ht,"CODE",{});var S3=a(hf);pw=n(S3,"True"),S3.forEach(t),hw=n(Ht,". To be used in a Seq2Seq model, the model needs to initialized with both "),mf=r(Ht,"CODE",{});var U3=a(mf);mw=n(U3,"is_decoder"),U3.forEach(t),fw=n(Ht,` argument and
`),ff=r(Ht,"CODE",{});var W3=a(ff);uw=n(W3,"add_cross_attention"),W3.forEach(t),gw=n(Ht," set to "),uf=r(Ht,"CODE",{});var H3=a(uf);_w=n(H3,"True"),H3.forEach(t),bw=n(Ht,"; an "),gf=r(Ht,"CODE",{});var K3=a(gf);vw=n(K3,"encoder_hidden_states"),K3.forEach(t),kw=n(Ht," is then expected as an input to the forward pass."),Ht.forEach(t),yw=p(Wt),so=r(Wt,"DIV",{class:!0});var Na=a(so);T(Ki.$$.fragment,Na),Tw=p(Na),$n=r(Na,"P",{});var Zh=a($n);ww=n(Zh,"The "),th=r(Zh,"A",{href:!0});var R3=a(th);$w=n(R3,"BertModel"),R3.forEach(t),Fw=n(Zh," forward method, overrides the "),_f=r(Zh,"CODE",{});var V3=a(_f);xw=n(V3,"__call__"),V3.forEach(t),Bw=n(Zh," special method."),Zh.forEach(t),Ew=p(Na),T(Rs.$$.fragment,Na),Mw=p(Na),T(Vs.$$.fragment,Na),Na.forEach(t),Wt.forEach(t),Yb=p(i),Fn=r(i,"H2",{class:!0});var pk=a(Fn);Qs=r(pk,"A",{id:!0,class:!0,href:!0});var Q3=a(Qs);bf=r(Q3,"SPAN",{});var J3=a(bf);T(Ri.$$.fragment,J3),J3.forEach(t),Q3.forEach(t),zw=p(pk),vf=r(pk,"SPAN",{});var G3=a(vf);Pw=n(G3,"BertForPreTraining"),G3.forEach(t),pk.forEach(t),Zb=p(i),Bt=r(i,"DIV",{class:!0});var Go=a(Bt);T(Vi.$$.fragment,Go),jw=p(Go),xn=r(Go,"P",{});var em=a(xn);qw=n(em,"Bert Model with two heads on top as done during the pretraining: a "),kf=r(em,"CODE",{});var X3=a(kf);Cw=n(X3,"masked language modeling"),X3.forEach(t),Nw=n(em," head and a "),yf=r(em,"CODE",{});var Y3=a(yf);Ow=n(Y3,"next sentence prediction (classification)"),Y3.forEach(t),Aw=n(em," head."),em.forEach(t),Iw=p(Go),Qi=r(Go,"P",{});var hk=a(Qi);Lw=n(hk,"This model inherits from "),oh=r(hk,"A",{href:!0});var Z3=a(oh);Dw=n(Z3,"PreTrainedModel"),Z3.forEach(t),Sw=n(hk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hk.forEach(t),Uw=p(Go),Ji=r(Go,"P",{});var mk=a(Ji);Ww=n(mk,"This model is also a PyTorch "),Gi=r(mk,"A",{href:!0,rel:!0});var eC=a(Gi);Hw=n(eC,"torch.nn.Module"),eC.forEach(t),Kw=n(mk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mk.forEach(t),Rw=p(Go),ro=r(Go,"DIV",{class:!0});var Oa=a(ro);T(Xi.$$.fragment,Oa),Vw=p(Oa),Bn=r(Oa,"P",{});var tm=a(Bn);Qw=n(tm,"The "),nh=r(tm,"A",{href:!0});var tC=a(nh);Jw=n(tC,"BertForPreTraining"),tC.forEach(t),Gw=n(tm," forward method, overrides the "),Tf=r(tm,"CODE",{});var oC=a(Tf);Xw=n(oC,"__call__"),oC.forEach(t),Yw=n(tm," special method."),tm.forEach(t),Zw=p(Oa),T(Js.$$.fragment,Oa),e1=p(Oa),T(Gs.$$.fragment,Oa),Oa.forEach(t),Go.forEach(t),ev=p(i),En=r(i,"H2",{class:!0});var fk=a(En);Xs=r(fk,"A",{id:!0,class:!0,href:!0});var nC=a(Xs);wf=r(nC,"SPAN",{});var sC=a(wf);T(Yi.$$.fragment,sC),sC.forEach(t),nC.forEach(t),t1=p(fk),$f=r(fk,"SPAN",{});var rC=a($f);o1=n(rC,"BertLMHeadModel"),rC.forEach(t),fk.forEach(t),tv=p(i),Et=r(i,"DIV",{class:!0});var Xo=a(Et);T(Zi.$$.fragment,Xo),n1=p(Xo),el=r(Xo,"P",{});var uk=a(el);s1=n(uk,"Bert Model with a "),Ff=r(uk,"CODE",{});var aC=a(Ff);r1=n(aC,"language modeling"),aC.forEach(t),a1=n(uk," head on top for CLM fine-tuning."),uk.forEach(t),i1=p(Xo),tl=r(Xo,"P",{});var gk=a(tl);l1=n(gk,"This model inherits from "),sh=r(gk,"A",{href:!0});var iC=a(sh);d1=n(iC,"PreTrainedModel"),iC.forEach(t),c1=n(gk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gk.forEach(t),p1=p(Xo),ol=r(Xo,"P",{});var _k=a(ol);h1=n(_k,"This model is also a PyTorch "),nl=r(_k,"A",{href:!0,rel:!0});var lC=a(nl);m1=n(lC,"torch.nn.Module"),lC.forEach(t),f1=n(_k,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_k.forEach(t),u1=p(Xo),ao=r(Xo,"DIV",{class:!0});var Aa=a(ao);T(sl.$$.fragment,Aa),g1=p(Aa),Mn=r(Aa,"P",{});var om=a(Mn);_1=n(om,"The "),rh=r(om,"A",{href:!0});var dC=a(rh);b1=n(dC,"BertLMHeadModel"),dC.forEach(t),v1=n(om," forward method, overrides the "),xf=r(om,"CODE",{});var cC=a(xf);k1=n(cC,"__call__"),cC.forEach(t),y1=n(om," special method."),om.forEach(t),T1=p(Aa),T(Ys.$$.fragment,Aa),w1=p(Aa),T(Zs.$$.fragment,Aa),Aa.forEach(t),Xo.forEach(t),ov=p(i),zn=r(i,"H2",{class:!0});var bk=a(zn);er=r(bk,"A",{id:!0,class:!0,href:!0});var pC=a(er);Bf=r(pC,"SPAN",{});var hC=a(Bf);T(rl.$$.fragment,hC),hC.forEach(t),pC.forEach(t),$1=p(bk),Ef=r(bk,"SPAN",{});var mC=a(Ef);F1=n(mC,"BertForMaskedLM"),mC.forEach(t),bk.forEach(t),nv=p(i),Mt=r(i,"DIV",{class:!0});var Yo=a(Mt);T(al.$$.fragment,Yo),x1=p(Yo),il=r(Yo,"P",{});var vk=a(il);B1=n(vk,"Bert Model with a "),Mf=r(vk,"CODE",{});var fC=a(Mf);E1=n(fC,"language modeling"),fC.forEach(t),M1=n(vk," head on top."),vk.forEach(t),z1=p(Yo),ll=r(Yo,"P",{});var kk=a(ll);P1=n(kk,"This model inherits from "),ah=r(kk,"A",{href:!0});var uC=a(ah);j1=n(uC,"PreTrainedModel"),uC.forEach(t),q1=n(kk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kk.forEach(t),C1=p(Yo),dl=r(Yo,"P",{});var yk=a(dl);N1=n(yk,"This model is also a PyTorch "),cl=r(yk,"A",{href:!0,rel:!0});var gC=a(cl);O1=n(gC,"torch.nn.Module"),gC.forEach(t),A1=n(yk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yk.forEach(t),I1=p(Yo),Nt=r(Yo,"DIV",{class:!0});var Zo=a(Nt);T(pl.$$.fragment,Zo),L1=p(Zo),Pn=r(Zo,"P",{});var nm=a(Pn);D1=n(nm,"The "),ih=r(nm,"A",{href:!0});var _C=a(ih);S1=n(_C,"BertForMaskedLM"),_C.forEach(t),U1=n(nm," forward method, overrides the "),zf=r(nm,"CODE",{});var bC=a(zf);W1=n(bC,"__call__"),bC.forEach(t),H1=n(nm," special method."),nm.forEach(t),K1=p(Zo),T(tr.$$.fragment,Zo),R1=p(Zo),T(or.$$.fragment,Zo),V1=p(Zo),T(nr.$$.fragment,Zo),Zo.forEach(t),Yo.forEach(t),sv=p(i),jn=r(i,"H2",{class:!0});var Tk=a(jn);sr=r(Tk,"A",{id:!0,class:!0,href:!0});var vC=a(sr);Pf=r(vC,"SPAN",{});var kC=a(Pf);T(hl.$$.fragment,kC),kC.forEach(t),vC.forEach(t),Q1=p(Tk),jf=r(Tk,"SPAN",{});var yC=a(jf);J1=n(yC,"BertForNextSentencePrediction"),yC.forEach(t),Tk.forEach(t),rv=p(i),zt=r(i,"DIV",{class:!0});var en=a(zt);T(ml.$$.fragment,en),G1=p(en),fl=r(en,"P",{});var wk=a(fl);X1=n(wk,"Bert Model with a "),qf=r(wk,"CODE",{});var TC=a(qf);Y1=n(TC,"next sentence prediction (classification)"),TC.forEach(t),Z1=n(wk," head on top."),wk.forEach(t),e$=p(en),ul=r(en,"P",{});var $k=a(ul);t$=n($k,"This model inherits from "),lh=r($k,"A",{href:!0});var wC=a(lh);o$=n(wC,"PreTrainedModel"),wC.forEach(t),n$=n($k,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$k.forEach(t),s$=p(en),gl=r(en,"P",{});var Fk=a(gl);r$=n(Fk,"This model is also a PyTorch "),_l=r(Fk,"A",{href:!0,rel:!0});var $C=a(_l);a$=n($C,"torch.nn.Module"),$C.forEach(t),i$=n(Fk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fk.forEach(t),l$=p(en),io=r(en,"DIV",{class:!0});var Ia=a(io);T(bl.$$.fragment,Ia),d$=p(Ia),qn=r(Ia,"P",{});var sm=a(qn);c$=n(sm,"The "),dh=r(sm,"A",{href:!0});var FC=a(dh);p$=n(FC,"BertForNextSentencePrediction"),FC.forEach(t),h$=n(sm," forward method, overrides the "),Cf=r(sm,"CODE",{});var xC=a(Cf);m$=n(xC,"__call__"),xC.forEach(t),f$=n(sm," special method."),sm.forEach(t),u$=p(Ia),T(rr.$$.fragment,Ia),g$=p(Ia),T(ar.$$.fragment,Ia),Ia.forEach(t),en.forEach(t),av=p(i),Cn=r(i,"H2",{class:!0});var xk=a(Cn);ir=r(xk,"A",{id:!0,class:!0,href:!0});var BC=a(ir);Nf=r(BC,"SPAN",{});var EC=a(Nf);T(vl.$$.fragment,EC),EC.forEach(t),BC.forEach(t),_$=p(xk),Of=r(xk,"SPAN",{});var MC=a(Of);b$=n(MC,"BertForSequenceClassification"),MC.forEach(t),xk.forEach(t),iv=p(i),Pt=r(i,"DIV",{class:!0});var tn=a(Pt);T(kl.$$.fragment,tn),v$=p(tn),Af=r(tn,"P",{});var zC=a(Af);k$=n(zC,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),zC.forEach(t),y$=p(tn),yl=r(tn,"P",{});var Bk=a(yl);T$=n(Bk,"This model inherits from "),ch=r(Bk,"A",{href:!0});var PC=a(ch);w$=n(PC,"PreTrainedModel"),PC.forEach(t),$$=n(Bk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bk.forEach(t),F$=p(tn),Tl=r(tn,"P",{});var Ek=a(Tl);x$=n(Ek,"This model is also a PyTorch "),wl=r(Ek,"A",{href:!0,rel:!0});var jC=a(wl);B$=n(jC,"torch.nn.Module"),jC.forEach(t),E$=n(Ek,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ek.forEach(t),M$=p(tn),mt=r(tn,"DIV",{class:!0});var Kt=a(mt);T($l.$$.fragment,Kt),z$=p(Kt),Nn=r(Kt,"P",{});var rm=a(Nn);P$=n(rm,"The "),ph=r(rm,"A",{href:!0});var qC=a(ph);j$=n(qC,"BertForSequenceClassification"),qC.forEach(t),q$=n(rm," forward method, overrides the "),If=r(rm,"CODE",{});var CC=a(If);C$=n(CC,"__call__"),CC.forEach(t),N$=n(rm," special method."),rm.forEach(t),O$=p(Kt),T(lr.$$.fragment,Kt),A$=p(Kt),T(dr.$$.fragment,Kt),I$=p(Kt),T(cr.$$.fragment,Kt),L$=p(Kt),T(pr.$$.fragment,Kt),D$=p(Kt),T(hr.$$.fragment,Kt),Kt.forEach(t),tn.forEach(t),lv=p(i),On=r(i,"H2",{class:!0});var Mk=a(On);mr=r(Mk,"A",{id:!0,class:!0,href:!0});var NC=a(mr);Lf=r(NC,"SPAN",{});var OC=a(Lf);T(Fl.$$.fragment,OC),OC.forEach(t),NC.forEach(t),S$=p(Mk),Df=r(Mk,"SPAN",{});var AC=a(Df);U$=n(AC,"BertForMultipleChoice"),AC.forEach(t),Mk.forEach(t),dv=p(i),jt=r(i,"DIV",{class:!0});var on=a(jt);T(xl.$$.fragment,on),W$=p(on),Sf=r(on,"P",{});var IC=a(Sf);H$=n(IC,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),IC.forEach(t),K$=p(on),Bl=r(on,"P",{});var zk=a(Bl);R$=n(zk,"This model inherits from "),hh=r(zk,"A",{href:!0});var LC=a(hh);V$=n(LC,"PreTrainedModel"),LC.forEach(t),Q$=n(zk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zk.forEach(t),J$=p(on),El=r(on,"P",{});var Pk=a(El);G$=n(Pk,"This model is also a PyTorch "),Ml=r(Pk,"A",{href:!0,rel:!0});var DC=a(Ml);X$=n(DC,"torch.nn.Module"),DC.forEach(t),Y$=n(Pk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pk.forEach(t),Z$=p(on),lo=r(on,"DIV",{class:!0});var La=a(lo);T(zl.$$.fragment,La),e0=p(La),An=r(La,"P",{});var am=a(An);t0=n(am,"The "),mh=r(am,"A",{href:!0});var SC=a(mh);o0=n(SC,"BertForMultipleChoice"),SC.forEach(t),n0=n(am," forward method, overrides the "),Uf=r(am,"CODE",{});var UC=a(Uf);s0=n(UC,"__call__"),UC.forEach(t),r0=n(am," special method."),am.forEach(t),a0=p(La),T(fr.$$.fragment,La),i0=p(La),T(ur.$$.fragment,La),La.forEach(t),on.forEach(t),cv=p(i),In=r(i,"H2",{class:!0});var jk=a(In);gr=r(jk,"A",{id:!0,class:!0,href:!0});var WC=a(gr);Wf=r(WC,"SPAN",{});var HC=a(Wf);T(Pl.$$.fragment,HC),HC.forEach(t),WC.forEach(t),l0=p(jk),Hf=r(jk,"SPAN",{});var KC=a(Hf);d0=n(KC,"BertForTokenClassification"),KC.forEach(t),jk.forEach(t),pv=p(i),qt=r(i,"DIV",{class:!0});var nn=a(qt);T(jl.$$.fragment,nn),c0=p(nn),Kf=r(nn,"P",{});var RC=a(Kf);p0=n(RC,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),RC.forEach(t),h0=p(nn),ql=r(nn,"P",{});var qk=a(ql);m0=n(qk,"This model inherits from "),fh=r(qk,"A",{href:!0});var VC=a(fh);f0=n(VC,"PreTrainedModel"),VC.forEach(t),u0=n(qk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qk.forEach(t),g0=p(nn),Cl=r(nn,"P",{});var Ck=a(Cl);_0=n(Ck,"This model is also a PyTorch "),Nl=r(Ck,"A",{href:!0,rel:!0});var QC=a(Nl);b0=n(QC,"torch.nn.Module"),QC.forEach(t),v0=n(Ck,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ck.forEach(t),k0=p(nn),Ot=r(nn,"DIV",{class:!0});var sn=a(Ot);T(Ol.$$.fragment,sn),y0=p(sn),Ln=r(sn,"P",{});var im=a(Ln);T0=n(im,"The "),uh=r(im,"A",{href:!0});var JC=a(uh);w0=n(JC,"BertForTokenClassification"),JC.forEach(t),$0=n(im," forward method, overrides the "),Rf=r(im,"CODE",{});var GC=a(Rf);F0=n(GC,"__call__"),GC.forEach(t),x0=n(im," special method."),im.forEach(t),B0=p(sn),T(_r.$$.fragment,sn),E0=p(sn),T(br.$$.fragment,sn),M0=p(sn),T(vr.$$.fragment,sn),sn.forEach(t),nn.forEach(t),hv=p(i),Dn=r(i,"H2",{class:!0});var Nk=a(Dn);kr=r(Nk,"A",{id:!0,class:!0,href:!0});var XC=a(kr);Vf=r(XC,"SPAN",{});var YC=a(Vf);T(Al.$$.fragment,YC),YC.forEach(t),XC.forEach(t),z0=p(Nk),Qf=r(Nk,"SPAN",{});var ZC=a(Qf);P0=n(ZC,"BertForQuestionAnswering"),ZC.forEach(t),Nk.forEach(t),mv=p(i),Ct=r(i,"DIV",{class:!0});var rn=a(Ct);T(Il.$$.fragment,rn),j0=p(rn),Sn=r(rn,"P",{});var lm=a(Sn);q0=n(lm,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Jf=r(lm,"CODE",{});var e5=a(Jf);C0=n(e5,"span start logits"),e5.forEach(t),N0=n(lm," and "),Gf=r(lm,"CODE",{});var t5=a(Gf);O0=n(t5,"span end logits"),t5.forEach(t),A0=n(lm,")."),lm.forEach(t),I0=p(rn),Ll=r(rn,"P",{});var Ok=a(Ll);L0=n(Ok,"This model inherits from "),gh=r(Ok,"A",{href:!0});var o5=a(gh);D0=n(o5,"PreTrainedModel"),o5.forEach(t),S0=n(Ok,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ok.forEach(t),U0=p(rn),Dl=r(rn,"P",{});var Ak=a(Dl);W0=n(Ak,"This model is also a PyTorch "),Sl=r(Ak,"A",{href:!0,rel:!0});var n5=a(Sl);H0=n(n5,"torch.nn.Module"),n5.forEach(t),K0=n(Ak,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ak.forEach(t),R0=p(rn),At=r(rn,"DIV",{class:!0});var an=a(At);T(Ul.$$.fragment,an),V0=p(an),Un=r(an,"P",{});var dm=a(Un);Q0=n(dm,"The "),_h=r(dm,"A",{href:!0});var s5=a(_h);J0=n(s5,"BertForQuestionAnswering"),s5.forEach(t),G0=n(dm," forward method, overrides the "),Xf=r(dm,"CODE",{});var r5=a(Xf);X0=n(r5,"__call__"),r5.forEach(t),Y0=n(dm," special method."),dm.forEach(t),Z0=p(an),T(yr.$$.fragment,an),eF=p(an),T(Tr.$$.fragment,an),tF=p(an),T(wr.$$.fragment,an),an.forEach(t),rn.forEach(t),fv=p(i),Wn=r(i,"H2",{class:!0});var Ik=a(Wn);$r=r(Ik,"A",{id:!0,class:!0,href:!0});var a5=a($r);Yf=r(a5,"SPAN",{});var i5=a(Yf);T(Wl.$$.fragment,i5),i5.forEach(t),a5.forEach(t),oF=p(Ik),Zf=r(Ik,"SPAN",{});var l5=a(Zf);nF=n(l5,"TFBertModel"),l5.forEach(t),Ik.forEach(t),uv=p(i),ut=r(i,"DIV",{class:!0});var wo=a(ut);T(Hl.$$.fragment,wo),sF=p(wo),eu=r(wo,"P",{});var d5=a(eu);rF=n(d5,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),d5.forEach(t),aF=p(wo),Kl=r(wo,"P",{});var Lk=a(Kl);iF=n(Lk,"This model inherits from "),bh=r(Lk,"A",{href:!0});var c5=a(bh);lF=n(c5,"TFPreTrainedModel"),c5.forEach(t),dF=n(Lk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lk.forEach(t),cF=p(wo),Rl=r(wo,"P",{});var Dk=a(Rl);pF=n(Dk,"This model is also a "),Vl=r(Dk,"A",{href:!0,rel:!0});var p5=a(Vl);hF=n(p5,"tf.keras.Model"),p5.forEach(t),mF=n(Dk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dk.forEach(t),fF=p(wo),T(Fr.$$.fragment,wo),uF=p(wo),co=r(wo,"DIV",{class:!0});var Da=a(co);T(Ql.$$.fragment,Da),gF=p(Da),Hn=r(Da,"P",{});var cm=a(Hn);_F=n(cm,"The "),vh=r(cm,"A",{href:!0});var h5=a(vh);bF=n(h5,"TFBertModel"),h5.forEach(t),vF=n(cm," forward method, overrides the "),tu=r(cm,"CODE",{});var m5=a(tu);kF=n(m5,"__call__"),m5.forEach(t),yF=n(cm," special method."),cm.forEach(t),TF=p(Da),T(xr.$$.fragment,Da),wF=p(Da),T(Br.$$.fragment,Da),Da.forEach(t),wo.forEach(t),gv=p(i),Kn=r(i,"H2",{class:!0});var Sk=a(Kn);Er=r(Sk,"A",{id:!0,class:!0,href:!0});var f5=a(Er);ou=r(f5,"SPAN",{});var u5=a(ou);T(Jl.$$.fragment,u5),u5.forEach(t),f5.forEach(t),$F=p(Sk),nu=r(Sk,"SPAN",{});var g5=a(nu);FF=n(g5,"TFBertForPreTraining"),g5.forEach(t),Sk.forEach(t),_v=p(i),gt=r(i,"DIV",{class:!0});var $o=a(gt);T(Gl.$$.fragment,$o),xF=p($o),Rn=r($o,"P",{});var pm=a(Rn);BF=n(pm,`Bert Model with two heads on top as done during the pretraining:
a `),su=r(pm,"CODE",{});var _5=a(su);EF=n(_5,"masked language modeling"),_5.forEach(t),MF=n(pm," head and a "),ru=r(pm,"CODE",{});var b5=a(ru);zF=n(b5,"next sentence prediction (classification)"),b5.forEach(t),PF=n(pm," head."),pm.forEach(t),jF=p($o),Xl=r($o,"P",{});var Uk=a(Xl);qF=n(Uk,"This model inherits from "),kh=r(Uk,"A",{href:!0});var v5=a(kh);CF=n(v5,"TFPreTrainedModel"),v5.forEach(t),NF=n(Uk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uk.forEach(t),OF=p($o),Yl=r($o,"P",{});var Wk=a(Yl);AF=n(Wk,"This model is also a "),Zl=r(Wk,"A",{href:!0,rel:!0});var k5=a(Zl);IF=n(k5,"tf.keras.Model"),k5.forEach(t),LF=n(Wk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wk.forEach(t),DF=p($o),T(Mr.$$.fragment,$o),SF=p($o),po=r($o,"DIV",{class:!0});var Sa=a(po);T(ed.$$.fragment,Sa),UF=p(Sa),Vn=r(Sa,"P",{});var hm=a(Vn);WF=n(hm,"The "),yh=r(hm,"A",{href:!0});var y5=a(yh);HF=n(y5,"TFBertForPreTraining"),y5.forEach(t),KF=n(hm," forward method, overrides the "),au=r(hm,"CODE",{});var T5=a(au);RF=n(T5,"__call__"),T5.forEach(t),VF=n(hm," special method."),hm.forEach(t),QF=p(Sa),T(zr.$$.fragment,Sa),JF=p(Sa),T(Pr.$$.fragment,Sa),Sa.forEach(t),$o.forEach(t),bv=p(i),Qn=r(i,"H2",{class:!0});var Hk=a(Qn);jr=r(Hk,"A",{id:!0,class:!0,href:!0});var w5=a(jr);iu=r(w5,"SPAN",{});var $5=a(iu);T(td.$$.fragment,$5),$5.forEach(t),w5.forEach(t),GF=p(Hk),lu=r(Hk,"SPAN",{});var F5=a(lu);XF=n(F5,"TFBertModelLMHeadModel"),F5.forEach(t),Hk.forEach(t),vv=p(i),Jn=r(i,"DIV",{class:!0});var Kk=a(Jn);T(od.$$.fragment,Kk),YF=p(Kk),It=r(Kk,"DIV",{class:!0});var ln=a(It);T(nd.$$.fragment,ln),ZF=p(ln),nt=r(ln,"P",{});var $t=a(nt);ex=n($t,"encoder_hidden_states  ("),du=r($t,"CODE",{});var x5=a(du);tx=n(x5,"tf.Tensor"),x5.forEach(t),ox=n($t," of shape "),cu=r($t,"CODE",{});var B5=a(cu);nx=n(B5,"(batch_size, sequence_length, hidden_size)"),B5.forEach(t),sx=n($t,", "),pu=r($t,"EM",{});var E5=a(pu);rx=n(E5,"optional"),E5.forEach(t),ax=n($t,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),hu=r($t,"CODE",{});var M5=a(hu);ix=n(M5,"tf.Tensor"),M5.forEach(t),lx=n($t," of shape "),mu=r($t,"CODE",{});var z5=a(mu);dx=n(z5,"(batch_size, sequence_length)"),z5.forEach(t),cx=n($t,", "),fu=r($t,"EM",{});var P5=a(fu);px=n(P5,"optional"),P5.forEach(t),hx=n($t,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),uu=r($t,"CODE",{});var j5=a(uu);mx=n(j5,"[0, 1]"),j5.forEach(t),fx=n($t,":"),$t.forEach(t),ux=p(ln),sd=r(ln,"UL",{});var Rk=a(sd);rd=r(Rk,"LI",{});var Vk=a(rd);gx=n(Vk,"1 for tokens that are "),gu=r(Vk,"STRONG",{});var q5=a(gu);_x=n(q5,"not masked"),q5.forEach(t),bx=n(Vk,","),Vk.forEach(t),vx=p(Rk),ad=r(Rk,"LI",{});var Qk=a(ad);kx=n(Qk,"0 for tokens that are "),_u=r(Qk,"STRONG",{});var C5=a(_u);yx=n(C5,"masked"),C5.forEach(t),Tx=n(Qk,"."),Qk.forEach(t),Rk.forEach(t),wx=p(ln),te=r(ln,"P",{});var re=a(te);$x=n(re,"past_key_values ("),bu=r(re,"CODE",{});var N5=a(bu);Fx=n(N5,"Tuple[Tuple[tf.Tensor]]"),N5.forEach(t),xx=n(re," of length "),vu=r(re,"CODE",{});var O5=a(vu);Bx=n(O5,"config.n_layers"),O5.forEach(t),Ex=n(re,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),ku=r(re,"CODE",{});var A5=a(ku);Mx=n(A5,"past_key_values"),A5.forEach(t),zx=n(re," are used, the user can optionally input only the last "),yu=r(re,"CODE",{});var I5=a(yu);Px=n(I5,"decoder_input_ids"),I5.forEach(t),jx=n(re,` (those that
don\u2019t have their past key value states given to this model) of shape `),Tu=r(re,"CODE",{});var L5=a(Tu);qx=n(L5,"(batch_size, 1)"),L5.forEach(t),Cx=n(re,` instead of all
`),wu=r(re,"CODE",{});var D5=a(wu);Nx=n(D5,"decoder_input_ids"),D5.forEach(t),Ox=n(re," of shape "),$u=r(re,"CODE",{});var S5=a($u);Ax=n(S5,"(batch_size, sequence_length)"),S5.forEach(t),Ix=n(re,`.
use_cache (`),Fu=r(re,"CODE",{});var U5=a(Fu);Lx=n(U5,"bool"),U5.forEach(t),Dx=n(re,", "),xu=r(re,"EM",{});var W5=a(xu);Sx=n(W5,"optional"),W5.forEach(t),Ux=n(re,", defaults to "),Bu=r(re,"CODE",{});var H5=a(Bu);Wx=n(H5,"True"),H5.forEach(t),Hx=n(re,`):
If set to `),Eu=r(re,"CODE",{});var K5=a(Eu);Kx=n(K5,"True"),K5.forEach(t),Rx=n(re,", "),Mu=r(re,"CODE",{});var R5=a(Mu);Vx=n(R5,"past_key_values"),R5.forEach(t),Qx=n(re,` key value states are returned and can be used to speed up decoding (see
`),zu=r(re,"CODE",{});var V5=a(zu);Jx=n(V5,"past_key_values"),V5.forEach(t),Gx=n(re,"). Set to "),Pu=r(re,"CODE",{});var Q5=a(Pu);Xx=n(Q5,"False"),Q5.forEach(t),Yx=n(re," during training, "),ju=r(re,"CODE",{});var J5=a(ju);Zx=n(J5,"True"),J5.forEach(t),e4=n(re,` during generation
labels (`),qu=r(re,"CODE",{});var G5=a(qu);t4=n(G5,"tf.Tensor"),G5.forEach(t),o4=n(re," or "),Cu=r(re,"CODE",{});var X5=a(Cu);n4=n(X5,"np.ndarray"),X5.forEach(t),s4=n(re," of shape "),Nu=r(re,"CODE",{});var Y5=a(Nu);r4=n(Y5,"(batch_size, sequence_length)"),Y5.forEach(t),a4=n(re,", "),Ou=r(re,"EM",{});var Z5=a(Ou);i4=n(Z5,"optional"),Z5.forEach(t),l4=n(re,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Au=r(re,"CODE",{});var e6=a(Au);d4=n(e6,"[0, ..., config.vocab_size - 1]"),e6.forEach(t),c4=n(re,"."),re.forEach(t),p4=p(ln),T(qr.$$.fragment,ln),ln.forEach(t),Kk.forEach(t),kv=p(i),Gn=r(i,"H2",{class:!0});var Jk=a(Gn);Cr=r(Jk,"A",{id:!0,class:!0,href:!0});var t6=a(Cr);Iu=r(t6,"SPAN",{});var o6=a(Iu);T(id.$$.fragment,o6),o6.forEach(t),t6.forEach(t),h4=p(Jk),Lu=r(Jk,"SPAN",{});var n6=a(Lu);m4=n(n6,"TFBertForMaskedLM"),n6.forEach(t),Jk.forEach(t),yv=p(i),_t=r(i,"DIV",{class:!0});var Fo=a(_t);T(ld.$$.fragment,Fo),f4=p(Fo),dd=r(Fo,"P",{});var Gk=a(dd);u4=n(Gk,"Bert Model with a "),Du=r(Gk,"CODE",{});var s6=a(Du);g4=n(s6,"language modeling"),s6.forEach(t),_4=n(Gk," head on top."),Gk.forEach(t),b4=p(Fo),cd=r(Fo,"P",{});var Xk=a(cd);v4=n(Xk,"This model inherits from "),Th=r(Xk,"A",{href:!0});var r6=a(Th);k4=n(r6,"TFPreTrainedModel"),r6.forEach(t),y4=n(Xk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xk.forEach(t),T4=p(Fo),pd=r(Fo,"P",{});var Yk=a(pd);w4=n(Yk,"This model is also a "),hd=r(Yk,"A",{href:!0,rel:!0});var a6=a(hd);$4=n(a6,"tf.keras.Model"),a6.forEach(t),F4=n(Yk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yk.forEach(t),x4=p(Fo),T(Nr.$$.fragment,Fo),B4=p(Fo),Lt=r(Fo,"DIV",{class:!0});var dn=a(Lt);T(md.$$.fragment,dn),E4=p(dn),Xn=r(dn,"P",{});var mm=a(Xn);M4=n(mm,"The "),wh=r(mm,"A",{href:!0});var i6=a(wh);z4=n(i6,"TFBertForMaskedLM"),i6.forEach(t),P4=n(mm," forward method, overrides the "),Su=r(mm,"CODE",{});var l6=a(Su);j4=n(l6,"__call__"),l6.forEach(t),q4=n(mm," special method."),mm.forEach(t),C4=p(dn),T(Or.$$.fragment,dn),N4=p(dn),T(Ar.$$.fragment,dn),O4=p(dn),T(Ir.$$.fragment,dn),dn.forEach(t),Fo.forEach(t),Tv=p(i),Yn=r(i,"H2",{class:!0});var Zk=a(Yn);Lr=r(Zk,"A",{id:!0,class:!0,href:!0});var d6=a(Lr);Uu=r(d6,"SPAN",{});var c6=a(Uu);T(fd.$$.fragment,c6),c6.forEach(t),d6.forEach(t),A4=p(Zk),Wu=r(Zk,"SPAN",{});var p6=a(Wu);I4=n(p6,"TFBertForNextSentencePrediction"),p6.forEach(t),Zk.forEach(t),wv=p(i),bt=r(i,"DIV",{class:!0});var xo=a(bt);T(ud.$$.fragment,xo),L4=p(xo),gd=r(xo,"P",{});var ey=a(gd);D4=n(ey,"Bert Model with a "),Hu=r(ey,"CODE",{});var h6=a(Hu);S4=n(h6,"next sentence prediction (classification)"),h6.forEach(t),U4=n(ey," head on top."),ey.forEach(t),W4=p(xo),_d=r(xo,"P",{});var ty=a(_d);H4=n(ty,"This model inherits from "),$h=r(ty,"A",{href:!0});var m6=a($h);K4=n(m6,"TFPreTrainedModel"),m6.forEach(t),R4=n(ty,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ty.forEach(t),V4=p(xo),bd=r(xo,"P",{});var oy=a(bd);Q4=n(oy,"This model is also a "),vd=r(oy,"A",{href:!0,rel:!0});var f6=a(vd);J4=n(f6,"tf.keras.Model"),f6.forEach(t),G4=n(oy,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),oy.forEach(t),X4=p(xo),T(Dr.$$.fragment,xo),Y4=p(xo),ho=r(xo,"DIV",{class:!0});var Ua=a(ho);T(kd.$$.fragment,Ua),Z4=p(Ua),Zn=r(Ua,"P",{});var fm=a(Zn);eB=n(fm,"The "),Fh=r(fm,"A",{href:!0});var u6=a(Fh);tB=n(u6,"TFBertForNextSentencePrediction"),u6.forEach(t),oB=n(fm," forward method, overrides the "),Ku=r(fm,"CODE",{});var g6=a(Ku);nB=n(g6,"__call__"),g6.forEach(t),sB=n(fm," special method."),fm.forEach(t),rB=p(Ua),T(Sr.$$.fragment,Ua),aB=p(Ua),T(Ur.$$.fragment,Ua),Ua.forEach(t),xo.forEach(t),$v=p(i),es=r(i,"H2",{class:!0});var ny=a(es);Wr=r(ny,"A",{id:!0,class:!0,href:!0});var _6=a(Wr);Ru=r(_6,"SPAN",{});var b6=a(Ru);T(yd.$$.fragment,b6),b6.forEach(t),_6.forEach(t),iB=p(ny),Vu=r(ny,"SPAN",{});var v6=a(Vu);lB=n(v6,"TFBertForSequenceClassification"),v6.forEach(t),ny.forEach(t),Fv=p(i),vt=r(i,"DIV",{class:!0});var Bo=a(vt);T(Td.$$.fragment,Bo),dB=p(Bo),Qu=r(Bo,"P",{});var k6=a(Qu);cB=n(k6,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),k6.forEach(t),pB=p(Bo),wd=r(Bo,"P",{});var sy=a(wd);hB=n(sy,"This model inherits from "),xh=r(sy,"A",{href:!0});var y6=a(xh);mB=n(y6,"TFPreTrainedModel"),y6.forEach(t),fB=n(sy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sy.forEach(t),uB=p(Bo),$d=r(Bo,"P",{});var ry=a($d);gB=n(ry,"This model is also a "),Fd=r(ry,"A",{href:!0,rel:!0});var T6=a(Fd);_B=n(T6,"tf.keras.Model"),T6.forEach(t),bB=n(ry,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ry.forEach(t),vB=p(Bo),T(Hr.$$.fragment,Bo),kB=p(Bo),Dt=r(Bo,"DIV",{class:!0});var cn=a(Dt);T(xd.$$.fragment,cn),yB=p(cn),ts=r(cn,"P",{});var um=a(ts);TB=n(um,"The "),Bh=r(um,"A",{href:!0});var w6=a(Bh);wB=n(w6,"TFBertForSequenceClassification"),w6.forEach(t),$B=n(um," forward method, overrides the "),Ju=r(um,"CODE",{});var $6=a(Ju);FB=n($6,"__call__"),$6.forEach(t),xB=n(um," special method."),um.forEach(t),BB=p(cn),T(Kr.$$.fragment,cn),EB=p(cn),T(Rr.$$.fragment,cn),MB=p(cn),T(Vr.$$.fragment,cn),cn.forEach(t),Bo.forEach(t),xv=p(i),os=r(i,"H2",{class:!0});var ay=a(os);Qr=r(ay,"A",{id:!0,class:!0,href:!0});var F6=a(Qr);Gu=r(F6,"SPAN",{});var x6=a(Gu);T(Bd.$$.fragment,x6),x6.forEach(t),F6.forEach(t),zB=p(ay),Xu=r(ay,"SPAN",{});var B6=a(Xu);PB=n(B6,"TFBertForMultipleChoice"),B6.forEach(t),ay.forEach(t),Bv=p(i),kt=r(i,"DIV",{class:!0});var Eo=a(kt);T(Ed.$$.fragment,Eo),jB=p(Eo),Yu=r(Eo,"P",{});var E6=a(Yu);qB=n(E6,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),E6.forEach(t),CB=p(Eo),Md=r(Eo,"P",{});var iy=a(Md);NB=n(iy,"This model inherits from "),Eh=r(iy,"A",{href:!0});var M6=a(Eh);OB=n(M6,"TFPreTrainedModel"),M6.forEach(t),AB=n(iy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iy.forEach(t),IB=p(Eo),zd=r(Eo,"P",{});var ly=a(zd);LB=n(ly,"This model is also a "),Pd=r(ly,"A",{href:!0,rel:!0});var z6=a(Pd);DB=n(z6,"tf.keras.Model"),z6.forEach(t),SB=n(ly,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ly.forEach(t),UB=p(Eo),T(Jr.$$.fragment,Eo),WB=p(Eo),mo=r(Eo,"DIV",{class:!0});var Wa=a(mo);T(jd.$$.fragment,Wa),HB=p(Wa),ns=r(Wa,"P",{});var gm=a(ns);KB=n(gm,"The "),Mh=r(gm,"A",{href:!0});var P6=a(Mh);RB=n(P6,"TFBertForMultipleChoice"),P6.forEach(t),VB=n(gm," forward method, overrides the "),Zu=r(gm,"CODE",{});var j6=a(Zu);QB=n(j6,"__call__"),j6.forEach(t),JB=n(gm," special method."),gm.forEach(t),GB=p(Wa),T(Gr.$$.fragment,Wa),XB=p(Wa),T(Xr.$$.fragment,Wa),Wa.forEach(t),Eo.forEach(t),Ev=p(i),ss=r(i,"H2",{class:!0});var dy=a(ss);Yr=r(dy,"A",{id:!0,class:!0,href:!0});var q6=a(Yr);eg=r(q6,"SPAN",{});var C6=a(eg);T(qd.$$.fragment,C6),C6.forEach(t),q6.forEach(t),YB=p(dy),tg=r(dy,"SPAN",{});var N6=a(tg);ZB=n(N6,"TFBertForTokenClassification"),N6.forEach(t),dy.forEach(t),Mv=p(i),yt=r(i,"DIV",{class:!0});var Mo=a(yt);T(Cd.$$.fragment,Mo),eE=p(Mo),og=r(Mo,"P",{});var O6=a(og);tE=n(O6,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),O6.forEach(t),oE=p(Mo),Nd=r(Mo,"P",{});var cy=a(Nd);nE=n(cy,"This model inherits from "),zh=r(cy,"A",{href:!0});var A6=a(zh);sE=n(A6,"TFPreTrainedModel"),A6.forEach(t),rE=n(cy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cy.forEach(t),aE=p(Mo),Od=r(Mo,"P",{});var py=a(Od);iE=n(py,"This model is also a "),Ad=r(py,"A",{href:!0,rel:!0});var I6=a(Ad);lE=n(I6,"tf.keras.Model"),I6.forEach(t),dE=n(py,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),py.forEach(t),cE=p(Mo),T(Zr.$$.fragment,Mo),pE=p(Mo),St=r(Mo,"DIV",{class:!0});var pn=a(St);T(Id.$$.fragment,pn),hE=p(pn),rs=r(pn,"P",{});var _m=a(rs);mE=n(_m,"The "),Ph=r(_m,"A",{href:!0});var L6=a(Ph);fE=n(L6,"TFBertForTokenClassification"),L6.forEach(t),uE=n(_m," forward method, overrides the "),ng=r(_m,"CODE",{});var D6=a(ng);gE=n(D6,"__call__"),D6.forEach(t),_E=n(_m," special method."),_m.forEach(t),bE=p(pn),T(ea.$$.fragment,pn),vE=p(pn),T(ta.$$.fragment,pn),kE=p(pn),T(oa.$$.fragment,pn),pn.forEach(t),Mo.forEach(t),zv=p(i),as=r(i,"H2",{class:!0});var hy=a(as);na=r(hy,"A",{id:!0,class:!0,href:!0});var S6=a(na);sg=r(S6,"SPAN",{});var U6=a(sg);T(Ld.$$.fragment,U6),U6.forEach(t),S6.forEach(t),yE=p(hy),rg=r(hy,"SPAN",{});var W6=a(rg);TE=n(W6,"TFBertForQuestionAnswering"),W6.forEach(t),hy.forEach(t),Pv=p(i),Tt=r(i,"DIV",{class:!0});var zo=a(Tt);T(Dd.$$.fragment,zo),wE=p(zo),is=r(zo,"P",{});var bm=a(is);$E=n(bm,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ag=r(bm,"CODE",{});var H6=a(ag);FE=n(H6,"span start logits"),H6.forEach(t),xE=n(bm," and "),ig=r(bm,"CODE",{});var K6=a(ig);BE=n(K6,"span end logits"),K6.forEach(t),EE=n(bm,")."),bm.forEach(t),ME=p(zo),Sd=r(zo,"P",{});var my=a(Sd);zE=n(my,"This model inherits from "),jh=r(my,"A",{href:!0});var R6=a(jh);PE=n(R6,"TFPreTrainedModel"),R6.forEach(t),jE=n(my,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),my.forEach(t),qE=p(zo),Ud=r(zo,"P",{});var fy=a(Ud);CE=n(fy,"This model is also a "),Wd=r(fy,"A",{href:!0,rel:!0});var V6=a(Wd);NE=n(V6,"tf.keras.Model"),V6.forEach(t),OE=n(fy,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fy.forEach(t),AE=p(zo),T(sa.$$.fragment,zo),IE=p(zo),Ut=r(zo,"DIV",{class:!0});var hn=a(Ut);T(Hd.$$.fragment,hn),LE=p(hn),ls=r(hn,"P",{});var vm=a(ls);DE=n(vm,"The "),qh=r(vm,"A",{href:!0});var Q6=a(qh);SE=n(Q6,"TFBertForQuestionAnswering"),Q6.forEach(t),UE=n(vm," forward method, overrides the "),lg=r(vm,"CODE",{});var J6=a(lg);WE=n(J6,"__call__"),J6.forEach(t),HE=n(vm," special method."),vm.forEach(t),KE=p(hn),T(ra.$$.fragment,hn),RE=p(hn),T(aa.$$.fragment,hn),VE=p(hn),T(ia.$$.fragment,hn),hn.forEach(t),zo.forEach(t),jv=p(i),ds=r(i,"H2",{class:!0});var uy=a(ds);la=r(uy,"A",{id:!0,class:!0,href:!0});var G6=a(la);dg=r(G6,"SPAN",{});var X6=a(dg);T(Kd.$$.fragment,X6),X6.forEach(t),G6.forEach(t),QE=p(uy),cg=r(uy,"SPAN",{});var Y6=a(cg);JE=n(Y6,"FlaxBertModel"),Y6.forEach(t),uy.forEach(t),qv=p(i),st=r(i,"DIV",{class:!0});var Rt=a(st);T(Rd.$$.fragment,Rt),GE=p(Rt),pg=r(Rt,"P",{});var Z6=a(pg);XE=n(Z6,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Z6.forEach(t),YE=p(Rt),Vd=r(Rt,"P",{});var gy=a(Vd);ZE=n(gy,"This model inherits from "),Ch=r(gy,"A",{href:!0});var eN=a(Ch);eM=n(eN,"FlaxPreTrainedModel"),eN.forEach(t),tM=n(gy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gy.forEach(t),oM=p(Rt),Qd=r(Rt,"P",{});var _y=a(Qd);nM=n(_y,"This model is also a Flax Linen "),Jd=r(_y,"A",{href:!0,rel:!0});var tN=a(Jd);sM=n(tN,"flax.linen.Module"),tN.forEach(t),rM=n(_y,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_y.forEach(t),aM=p(Rt),hg=r(Rt,"P",{});var oN=a(hg);iM=n(oN,"Finally, this model supports inherent JAX features such as:"),oN.forEach(t),lM=p(Rt),jo=r(Rt,"UL",{});var Ha=a(jo);mg=r(Ha,"LI",{});var nN=a(mg);Gd=r(nN,"A",{href:!0,rel:!0});var sN=a(Gd);dM=n(sN,"Just-In-Time (JIT) compilation"),sN.forEach(t),nN.forEach(t),cM=p(Ha),fg=r(Ha,"LI",{});var rN=a(fg);Xd=r(rN,"A",{href:!0,rel:!0});var aN=a(Xd);pM=n(aN,"Automatic Differentiation"),aN.forEach(t),rN.forEach(t),hM=p(Ha),ug=r(Ha,"LI",{});var iN=a(ug);Yd=r(iN,"A",{href:!0,rel:!0});var lN=a(Yd);mM=n(lN,"Vectorization"),lN.forEach(t),iN.forEach(t),fM=p(Ha),gg=r(Ha,"LI",{});var dN=a(gg);Zd=r(dN,"A",{href:!0,rel:!0});var cN=a(Zd);uM=n(cN,"Parallelization"),cN.forEach(t),dN.forEach(t),Ha.forEach(t),gM=p(Rt),fo=r(Rt,"DIV",{class:!0});var Ka=a(fo);T(ec.$$.fragment,Ka),_M=p(Ka),cs=r(Ka,"P",{});var km=a(cs);bM=n(km,"The "),_g=r(km,"CODE",{});var pN=a(_g);vM=n(pN,"FlaxBertPreTrainedModel"),pN.forEach(t),kM=n(km," forward method, overrides the "),bg=r(km,"CODE",{});var hN=a(bg);yM=n(hN,"__call__"),hN.forEach(t),TM=n(km," special method."),km.forEach(t),wM=p(Ka),T(da.$$.fragment,Ka),$M=p(Ka),T(ca.$$.fragment,Ka),Ka.forEach(t),Rt.forEach(t),Cv=p(i),ps=r(i,"H2",{class:!0});var by=a(ps);pa=r(by,"A",{id:!0,class:!0,href:!0});var mN=a(pa);vg=r(mN,"SPAN",{});var fN=a(vg);T(tc.$$.fragment,fN),fN.forEach(t),mN.forEach(t),FM=p(by),kg=r(by,"SPAN",{});var uN=a(kg);xM=n(uN,"FlaxBertForPreTraining"),uN.forEach(t),by.forEach(t),Nv=p(i),rt=r(i,"DIV",{class:!0});var Vt=a(rt);T(oc.$$.fragment,Vt),BM=p(Vt),hs=r(Vt,"P",{});var ym=a(hs);EM=n(ym,"Bert Model with two heads on top as done during the pretraining: a "),yg=r(ym,"CODE",{});var gN=a(yg);MM=n(gN,"masked language modeling"),gN.forEach(t),zM=n(ym," head and a "),Tg=r(ym,"CODE",{});var _N=a(Tg);PM=n(_N,"next sentence prediction (classification)"),_N.forEach(t),jM=n(ym," head."),ym.forEach(t),qM=p(Vt),nc=r(Vt,"P",{});var vy=a(nc);CM=n(vy,"This model inherits from "),Nh=r(vy,"A",{href:!0});var bN=a(Nh);NM=n(bN,"FlaxPreTrainedModel"),bN.forEach(t),OM=n(vy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vy.forEach(t),AM=p(Vt),sc=r(Vt,"P",{});var ky=a(sc);IM=n(ky,"This model is also a Flax Linen "),rc=r(ky,"A",{href:!0,rel:!0});var vN=a(rc);LM=n(vN,"flax.linen.Module"),vN.forEach(t),DM=n(ky,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ky.forEach(t),SM=p(Vt),wg=r(Vt,"P",{});var kN=a(wg);UM=n(kN,"Finally, this model supports inherent JAX features such as:"),kN.forEach(t),WM=p(Vt),qo=r(Vt,"UL",{});var Ra=a(qo);$g=r(Ra,"LI",{});var yN=a($g);ac=r(yN,"A",{href:!0,rel:!0});var TN=a(ac);HM=n(TN,"Just-In-Time (JIT) compilation"),TN.forEach(t),yN.forEach(t),KM=p(Ra),Fg=r(Ra,"LI",{});var wN=a(Fg);ic=r(wN,"A",{href:!0,rel:!0});var $N=a(ic);RM=n($N,"Automatic Differentiation"),$N.forEach(t),wN.forEach(t),VM=p(Ra),xg=r(Ra,"LI",{});var FN=a(xg);lc=r(FN,"A",{href:!0,rel:!0});var xN=a(lc);QM=n(xN,"Vectorization"),xN.forEach(t),FN.forEach(t),JM=p(Ra),Bg=r(Ra,"LI",{});var BN=a(Bg);dc=r(BN,"A",{href:!0,rel:!0});var EN=a(dc);GM=n(EN,"Parallelization"),EN.forEach(t),BN.forEach(t),Ra.forEach(t),XM=p(Vt),uo=r(Vt,"DIV",{class:!0});var Va=a(uo);T(cc.$$.fragment,Va),YM=p(Va),ms=r(Va,"P",{});var Tm=a(ms);ZM=n(Tm,"The "),Eg=r(Tm,"CODE",{});var MN=a(Eg);ez=n(MN,"FlaxBertPreTrainedModel"),MN.forEach(t),tz=n(Tm," forward method, overrides the "),Mg=r(Tm,"CODE",{});var zN=a(Mg);oz=n(zN,"__call__"),zN.forEach(t),nz=n(Tm," special method."),Tm.forEach(t),sz=p(Va),T(ha.$$.fragment,Va),rz=p(Va),T(ma.$$.fragment,Va),Va.forEach(t),Vt.forEach(t),Ov=p(i),fs=r(i,"H2",{class:!0});var yy=a(fs);fa=r(yy,"A",{id:!0,class:!0,href:!0});var PN=a(fa);zg=r(PN,"SPAN",{});var jN=a(zg);T(pc.$$.fragment,jN),jN.forEach(t),PN.forEach(t),az=p(yy),Pg=r(yy,"SPAN",{});var qN=a(Pg);iz=n(qN,"FlaxBertForCausalLM"),qN.forEach(t),yy.forEach(t),Av=p(i),at=r(i,"DIV",{class:!0});var Qt=a(at);T(hc.$$.fragment,Qt),lz=p(Qt),jg=r(Qt,"P",{});var CN=a(jg);dz=n(CN,`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),CN.forEach(t),cz=p(Qt),mc=r(Qt,"P",{});var Ty=a(mc);pz=n(Ty,"This model inherits from "),Oh=r(Ty,"A",{href:!0});var NN=a(Oh);hz=n(NN,"FlaxPreTrainedModel"),NN.forEach(t),mz=n(Ty,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ty.forEach(t),fz=p(Qt),fc=r(Qt,"P",{});var wy=a(fc);uz=n(wy,"This model is also a Flax Linen "),uc=r(wy,"A",{href:!0,rel:!0});var ON=a(uc);gz=n(ON,"flax.linen.Module"),ON.forEach(t),_z=n(wy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),wy.forEach(t),bz=p(Qt),qg=r(Qt,"P",{});var AN=a(qg);vz=n(AN,"Finally, this model supports inherent JAX features such as:"),AN.forEach(t),kz=p(Qt),Co=r(Qt,"UL",{});var Qa=a(Co);Cg=r(Qa,"LI",{});var IN=a(Cg);gc=r(IN,"A",{href:!0,rel:!0});var LN=a(gc);yz=n(LN,"Just-In-Time (JIT) compilation"),LN.forEach(t),IN.forEach(t),Tz=p(Qa),Ng=r(Qa,"LI",{});var DN=a(Ng);_c=r(DN,"A",{href:!0,rel:!0});var SN=a(_c);wz=n(SN,"Automatic Differentiation"),SN.forEach(t),DN.forEach(t),$z=p(Qa),Og=r(Qa,"LI",{});var UN=a(Og);bc=r(UN,"A",{href:!0,rel:!0});var WN=a(bc);Fz=n(WN,"Vectorization"),WN.forEach(t),UN.forEach(t),xz=p(Qa),Ag=r(Qa,"LI",{});var HN=a(Ag);vc=r(HN,"A",{href:!0,rel:!0});var KN=a(vc);Bz=n(KN,"Parallelization"),KN.forEach(t),HN.forEach(t),Qa.forEach(t),Ez=p(Qt),go=r(Qt,"DIV",{class:!0});var Ja=a(go);T(kc.$$.fragment,Ja),Mz=p(Ja),us=r(Ja,"P",{});var wm=a(us);zz=n(wm,"The "),Ig=r(wm,"CODE",{});var RN=a(Ig);Pz=n(RN,"FlaxBertPreTrainedModel"),RN.forEach(t),jz=n(wm," forward method, overrides the "),Lg=r(wm,"CODE",{});var VN=a(Lg);qz=n(VN,"__call__"),VN.forEach(t),Cz=n(wm," special method."),wm.forEach(t),Nz=p(Ja),T(ua.$$.fragment,Ja),Oz=p(Ja),T(ga.$$.fragment,Ja),Ja.forEach(t),Qt.forEach(t),Iv=p(i),gs=r(i,"H2",{class:!0});var $y=a(gs);_a=r($y,"A",{id:!0,class:!0,href:!0});var QN=a(_a);Dg=r(QN,"SPAN",{});var JN=a(Dg);T(yc.$$.fragment,JN),JN.forEach(t),QN.forEach(t),Az=p($y),Sg=r($y,"SPAN",{});var GN=a(Sg);Iz=n(GN,"FlaxBertForMaskedLM"),GN.forEach(t),$y.forEach(t),Lv=p(i),it=r(i,"DIV",{class:!0});var Jt=a(it);T(Tc.$$.fragment,Jt),Lz=p(Jt),wc=r(Jt,"P",{});var Fy=a(wc);Dz=n(Fy,"Bert Model with a "),Ug=r(Fy,"CODE",{});var XN=a(Ug);Sz=n(XN,"language modeling"),XN.forEach(t),Uz=n(Fy," head on top."),Fy.forEach(t),Wz=p(Jt),$c=r(Jt,"P",{});var xy=a($c);Hz=n(xy,"This model inherits from "),Ah=r(xy,"A",{href:!0});var YN=a(Ah);Kz=n(YN,"FlaxPreTrainedModel"),YN.forEach(t),Rz=n(xy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xy.forEach(t),Vz=p(Jt),Fc=r(Jt,"P",{});var By=a(Fc);Qz=n(By,"This model is also a Flax Linen "),xc=r(By,"A",{href:!0,rel:!0});var ZN=a(xc);Jz=n(ZN,"flax.linen.Module"),ZN.forEach(t),Gz=n(By,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),By.forEach(t),Xz=p(Jt),Wg=r(Jt,"P",{});var e8=a(Wg);Yz=n(e8,"Finally, this model supports inherent JAX features such as:"),e8.forEach(t),Zz=p(Jt),No=r(Jt,"UL",{});var Ga=a(No);Hg=r(Ga,"LI",{});var t8=a(Hg);Bc=r(t8,"A",{href:!0,rel:!0});var o8=a(Bc);eP=n(o8,"Just-In-Time (JIT) compilation"),o8.forEach(t),t8.forEach(t),tP=p(Ga),Kg=r(Ga,"LI",{});var n8=a(Kg);Ec=r(n8,"A",{href:!0,rel:!0});var s8=a(Ec);oP=n(s8,"Automatic Differentiation"),s8.forEach(t),n8.forEach(t),nP=p(Ga),Rg=r(Ga,"LI",{});var r8=a(Rg);Mc=r(r8,"A",{href:!0,rel:!0});var a8=a(Mc);sP=n(a8,"Vectorization"),a8.forEach(t),r8.forEach(t),rP=p(Ga),Vg=r(Ga,"LI",{});var i8=a(Vg);zc=r(i8,"A",{href:!0,rel:!0});var l8=a(zc);aP=n(l8,"Parallelization"),l8.forEach(t),i8.forEach(t),Ga.forEach(t),iP=p(Jt),_o=r(Jt,"DIV",{class:!0});var Xa=a(_o);T(Pc.$$.fragment,Xa),lP=p(Xa),_s=r(Xa,"P",{});var $m=a(_s);dP=n($m,"The "),Qg=r($m,"CODE",{});var d8=a(Qg);cP=n(d8,"FlaxBertPreTrainedModel"),d8.forEach(t),pP=n($m," forward method, overrides the "),Jg=r($m,"CODE",{});var c8=a(Jg);hP=n(c8,"__call__"),c8.forEach(t),mP=n($m," special method."),$m.forEach(t),fP=p(Xa),T(ba.$$.fragment,Xa),uP=p(Xa),T(va.$$.fragment,Xa),Xa.forEach(t),Jt.forEach(t),Dv=p(i),bs=r(i,"H2",{class:!0});var Ey=a(bs);ka=r(Ey,"A",{id:!0,class:!0,href:!0});var p8=a(ka);Gg=r(p8,"SPAN",{});var h8=a(Gg);T(jc.$$.fragment,h8),h8.forEach(t),p8.forEach(t),gP=p(Ey),Xg=r(Ey,"SPAN",{});var m8=a(Xg);_P=n(m8,"FlaxBertForNextSentencePrediction"),m8.forEach(t),Ey.forEach(t),Sv=p(i),lt=r(i,"DIV",{class:!0});var Gt=a(lt);T(qc.$$.fragment,Gt),bP=p(Gt),Cc=r(Gt,"P",{});var My=a(Cc);vP=n(My,"Bert Model with a "),Yg=r(My,"CODE",{});var f8=a(Yg);kP=n(f8,"next sentence prediction (classification)"),f8.forEach(t),yP=n(My," head on top."),My.forEach(t),TP=p(Gt),Nc=r(Gt,"P",{});var zy=a(Nc);wP=n(zy,"This model inherits from "),Ih=r(zy,"A",{href:!0});var u8=a(Ih);$P=n(u8,"FlaxPreTrainedModel"),u8.forEach(t),FP=n(zy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),zy.forEach(t),xP=p(Gt),Oc=r(Gt,"P",{});var Py=a(Oc);BP=n(Py,"This model is also a Flax Linen "),Ac=r(Py,"A",{href:!0,rel:!0});var g8=a(Ac);EP=n(g8,"flax.linen.Module"),g8.forEach(t),MP=n(Py,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Py.forEach(t),zP=p(Gt),Zg=r(Gt,"P",{});var _8=a(Zg);PP=n(_8,"Finally, this model supports inherent JAX features such as:"),_8.forEach(t),jP=p(Gt),Oo=r(Gt,"UL",{});var Ya=a(Oo);e_=r(Ya,"LI",{});var b8=a(e_);Ic=r(b8,"A",{href:!0,rel:!0});var v8=a(Ic);qP=n(v8,"Just-In-Time (JIT) compilation"),v8.forEach(t),b8.forEach(t),CP=p(Ya),t_=r(Ya,"LI",{});var k8=a(t_);Lc=r(k8,"A",{href:!0,rel:!0});var y8=a(Lc);NP=n(y8,"Automatic Differentiation"),y8.forEach(t),k8.forEach(t),OP=p(Ya),o_=r(Ya,"LI",{});var T8=a(o_);Dc=r(T8,"A",{href:!0,rel:!0});var w8=a(Dc);AP=n(w8,"Vectorization"),w8.forEach(t),T8.forEach(t),IP=p(Ya),n_=r(Ya,"LI",{});var $8=a(n_);Sc=r($8,"A",{href:!0,rel:!0});var F8=a(Sc);LP=n(F8,"Parallelization"),F8.forEach(t),$8.forEach(t),Ya.forEach(t),DP=p(Gt),bo=r(Gt,"DIV",{class:!0});var Za=a(bo);T(Uc.$$.fragment,Za),SP=p(Za),vs=r(Za,"P",{});var Fm=a(vs);UP=n(Fm,"The "),s_=r(Fm,"CODE",{});var x8=a(s_);WP=n(x8,"FlaxBertPreTrainedModel"),x8.forEach(t),HP=n(Fm," forward method, overrides the "),r_=r(Fm,"CODE",{});var B8=a(r_);KP=n(B8,"__call__"),B8.forEach(t),RP=n(Fm," special method."),Fm.forEach(t),VP=p(Za),T(ya.$$.fragment,Za),QP=p(Za),T(Ta.$$.fragment,Za),Za.forEach(t),Gt.forEach(t),Uv=p(i),ks=r(i,"H2",{class:!0});var jy=a(ks);wa=r(jy,"A",{id:!0,class:!0,href:!0});var E8=a(wa);a_=r(E8,"SPAN",{});var M8=a(a_);T(Wc.$$.fragment,M8),M8.forEach(t),E8.forEach(t),JP=p(jy),i_=r(jy,"SPAN",{});var z8=a(i_);GP=n(z8,"FlaxBertForSequenceClassification"),z8.forEach(t),jy.forEach(t),Wv=p(i),dt=r(i,"DIV",{class:!0});var Xt=a(dt);T(Hc.$$.fragment,Xt),XP=p(Xt),l_=r(Xt,"P",{});var P8=a(l_);YP=n(P8,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),P8.forEach(t),ZP=p(Xt),Kc=r(Xt,"P",{});var qy=a(Kc);ej=n(qy,"This model inherits from "),Lh=r(qy,"A",{href:!0});var j8=a(Lh);tj=n(j8,"FlaxPreTrainedModel"),j8.forEach(t),oj=n(qy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),qy.forEach(t),nj=p(Xt),Rc=r(Xt,"P",{});var Cy=a(Rc);sj=n(Cy,"This model is also a Flax Linen "),Vc=r(Cy,"A",{href:!0,rel:!0});var q8=a(Vc);rj=n(q8,"flax.linen.Module"),q8.forEach(t),aj=n(Cy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Cy.forEach(t),ij=p(Xt),d_=r(Xt,"P",{});var C8=a(d_);lj=n(C8,"Finally, this model supports inherent JAX features such as:"),C8.forEach(t),dj=p(Xt),Ao=r(Xt,"UL",{});var ei=a(Ao);c_=r(ei,"LI",{});var N8=a(c_);Qc=r(N8,"A",{href:!0,rel:!0});var O8=a(Qc);cj=n(O8,"Just-In-Time (JIT) compilation"),O8.forEach(t),N8.forEach(t),pj=p(ei),p_=r(ei,"LI",{});var A8=a(p_);Jc=r(A8,"A",{href:!0,rel:!0});var I8=a(Jc);hj=n(I8,"Automatic Differentiation"),I8.forEach(t),A8.forEach(t),mj=p(ei),h_=r(ei,"LI",{});var L8=a(h_);Gc=r(L8,"A",{href:!0,rel:!0});var D8=a(Gc);fj=n(D8,"Vectorization"),D8.forEach(t),L8.forEach(t),uj=p(ei),m_=r(ei,"LI",{});var S8=a(m_);Xc=r(S8,"A",{href:!0,rel:!0});var U8=a(Xc);gj=n(U8,"Parallelization"),U8.forEach(t),S8.forEach(t),ei.forEach(t),_j=p(Xt),vo=r(Xt,"DIV",{class:!0});var ti=a(vo);T(Yc.$$.fragment,ti),bj=p(ti),ys=r(ti,"P",{});var xm=a(ys);vj=n(xm,"The "),f_=r(xm,"CODE",{});var W8=a(f_);kj=n(W8,"FlaxBertPreTrainedModel"),W8.forEach(t),yj=n(xm," forward method, overrides the "),u_=r(xm,"CODE",{});var H8=a(u_);Tj=n(H8,"__call__"),H8.forEach(t),wj=n(xm," special method."),xm.forEach(t),$j=p(ti),T($a.$$.fragment,ti),Fj=p(ti),T(Fa.$$.fragment,ti),ti.forEach(t),Xt.forEach(t),Hv=p(i),Ts=r(i,"H2",{class:!0});var Ny=a(Ts);xa=r(Ny,"A",{id:!0,class:!0,href:!0});var K8=a(xa);g_=r(K8,"SPAN",{});var R8=a(g_);T(Zc.$$.fragment,R8),R8.forEach(t),K8.forEach(t),xj=p(Ny),__=r(Ny,"SPAN",{});var V8=a(__);Bj=n(V8,"FlaxBertForMultipleChoice"),V8.forEach(t),Ny.forEach(t),Kv=p(i),ct=r(i,"DIV",{class:!0});var Yt=a(ct);T(ep.$$.fragment,Yt),Ej=p(Yt),b_=r(Yt,"P",{});var Q8=a(b_);Mj=n(Q8,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Q8.forEach(t),zj=p(Yt),tp=r(Yt,"P",{});var Oy=a(tp);Pj=n(Oy,"This model inherits from "),Dh=r(Oy,"A",{href:!0});var J8=a(Dh);jj=n(J8,"FlaxPreTrainedModel"),J8.forEach(t),qj=n(Oy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Oy.forEach(t),Cj=p(Yt),op=r(Yt,"P",{});var Ay=a(op);Nj=n(Ay,"This model is also a Flax Linen "),np=r(Ay,"A",{href:!0,rel:!0});var G8=a(np);Oj=n(G8,"flax.linen.Module"),G8.forEach(t),Aj=n(Ay,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ay.forEach(t),Ij=p(Yt),v_=r(Yt,"P",{});var X8=a(v_);Lj=n(X8,"Finally, this model supports inherent JAX features such as:"),X8.forEach(t),Dj=p(Yt),Io=r(Yt,"UL",{});var oi=a(Io);k_=r(oi,"LI",{});var Y8=a(k_);sp=r(Y8,"A",{href:!0,rel:!0});var Z8=a(sp);Sj=n(Z8,"Just-In-Time (JIT) compilation"),Z8.forEach(t),Y8.forEach(t),Uj=p(oi),y_=r(oi,"LI",{});var e7=a(y_);rp=r(e7,"A",{href:!0,rel:!0});var t7=a(rp);Wj=n(t7,"Automatic Differentiation"),t7.forEach(t),e7.forEach(t),Hj=p(oi),T_=r(oi,"LI",{});var o7=a(T_);ap=r(o7,"A",{href:!0,rel:!0});var n7=a(ap);Kj=n(n7,"Vectorization"),n7.forEach(t),o7.forEach(t),Rj=p(oi),w_=r(oi,"LI",{});var s7=a(w_);ip=r(s7,"A",{href:!0,rel:!0});var r7=a(ip);Vj=n(r7,"Parallelization"),r7.forEach(t),s7.forEach(t),oi.forEach(t),Qj=p(Yt),ko=r(Yt,"DIV",{class:!0});var ni=a(ko);T(lp.$$.fragment,ni),Jj=p(ni),ws=r(ni,"P",{});var Bm=a(ws);Gj=n(Bm,"The "),$_=r(Bm,"CODE",{});var a7=a($_);Xj=n(a7,"FlaxBertPreTrainedModel"),a7.forEach(t),Yj=n(Bm," forward method, overrides the "),F_=r(Bm,"CODE",{});var i7=a(F_);Zj=n(i7,"__call__"),i7.forEach(t),eq=n(Bm," special method."),Bm.forEach(t),tq=p(ni),T(Ba.$$.fragment,ni),oq=p(ni),T(Ea.$$.fragment,ni),ni.forEach(t),Yt.forEach(t),Rv=p(i),$s=r(i,"H2",{class:!0});var Iy=a($s);Ma=r(Iy,"A",{id:!0,class:!0,href:!0});var l7=a(Ma);x_=r(l7,"SPAN",{});var d7=a(x_);T(dp.$$.fragment,d7),d7.forEach(t),l7.forEach(t),nq=p(Iy),B_=r(Iy,"SPAN",{});var c7=a(B_);sq=n(c7,"FlaxBertForTokenClassification"),c7.forEach(t),Iy.forEach(t),Vv=p(i),pt=r(i,"DIV",{class:!0});var Zt=a(pt);T(cp.$$.fragment,Zt),rq=p(Zt),E_=r(Zt,"P",{});var p7=a(E_);aq=n(p7,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),p7.forEach(t),iq=p(Zt),pp=r(Zt,"P",{});var Ly=a(pp);lq=n(Ly,"This model inherits from "),Sh=r(Ly,"A",{href:!0});var h7=a(Sh);dq=n(h7,"FlaxPreTrainedModel"),h7.forEach(t),cq=n(Ly,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ly.forEach(t),pq=p(Zt),hp=r(Zt,"P",{});var Dy=a(hp);hq=n(Dy,"This model is also a Flax Linen "),mp=r(Dy,"A",{href:!0,rel:!0});var m7=a(mp);mq=n(m7,"flax.linen.Module"),m7.forEach(t),fq=n(Dy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Dy.forEach(t),uq=p(Zt),M_=r(Zt,"P",{});var f7=a(M_);gq=n(f7,"Finally, this model supports inherent JAX features such as:"),f7.forEach(t),_q=p(Zt),Lo=r(Zt,"UL",{});var si=a(Lo);z_=r(si,"LI",{});var u7=a(z_);fp=r(u7,"A",{href:!0,rel:!0});var g7=a(fp);bq=n(g7,"Just-In-Time (JIT) compilation"),g7.forEach(t),u7.forEach(t),vq=p(si),P_=r(si,"LI",{});var _7=a(P_);up=r(_7,"A",{href:!0,rel:!0});var b7=a(up);kq=n(b7,"Automatic Differentiation"),b7.forEach(t),_7.forEach(t),yq=p(si),j_=r(si,"LI",{});var v7=a(j_);gp=r(v7,"A",{href:!0,rel:!0});var k7=a(gp);Tq=n(k7,"Vectorization"),k7.forEach(t),v7.forEach(t),wq=p(si),q_=r(si,"LI",{});var y7=a(q_);_p=r(y7,"A",{href:!0,rel:!0});var T7=a(_p);$q=n(T7,"Parallelization"),T7.forEach(t),y7.forEach(t),si.forEach(t),Fq=p(Zt),yo=r(Zt,"DIV",{class:!0});var ri=a(yo);T(bp.$$.fragment,ri),xq=p(ri),Fs=r(ri,"P",{});var Em=a(Fs);Bq=n(Em,"The "),C_=r(Em,"CODE",{});var w7=a(C_);Eq=n(w7,"FlaxBertPreTrainedModel"),w7.forEach(t),Mq=n(Em," forward method, overrides the "),N_=r(Em,"CODE",{});var $7=a(N_);zq=n($7,"__call__"),$7.forEach(t),Pq=n(Em," special method."),Em.forEach(t),jq=p(ri),T(za.$$.fragment,ri),qq=p(ri),T(Pa.$$.fragment,ri),ri.forEach(t),Zt.forEach(t),Qv=p(i),xs=r(i,"H2",{class:!0});var Sy=a(xs);ja=r(Sy,"A",{id:!0,class:!0,href:!0});var F7=a(ja);O_=r(F7,"SPAN",{});var x7=a(O_);T(vp.$$.fragment,x7),x7.forEach(t),F7.forEach(t),Cq=p(Sy),A_=r(Sy,"SPAN",{});var B7=a(A_);Nq=n(B7,"FlaxBertForQuestionAnswering"),B7.forEach(t),Sy.forEach(t),Jv=p(i),ht=r(i,"DIV",{class:!0});var eo=a(ht);T(kp.$$.fragment,eo),Oq=p(eo),Bs=r(eo,"P",{});var Mm=a(Bs);Aq=n(Mm,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),I_=r(Mm,"CODE",{});var E7=a(I_);Iq=n(E7,"span start logits"),E7.forEach(t),Lq=n(Mm," and "),L_=r(Mm,"CODE",{});var M7=a(L_);Dq=n(M7,"span end logits"),M7.forEach(t),Sq=n(Mm,")."),Mm.forEach(t),Uq=p(eo),yp=r(eo,"P",{});var Uy=a(yp);Wq=n(Uy,"This model inherits from "),Uh=r(Uy,"A",{href:!0});var z7=a(Uh);Hq=n(z7,"FlaxPreTrainedModel"),z7.forEach(t),Kq=n(Uy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uy.forEach(t),Rq=p(eo),Tp=r(eo,"P",{});var Wy=a(Tp);Vq=n(Wy,"This model is also a Flax Linen "),wp=r(Wy,"A",{href:!0,rel:!0});var P7=a(wp);Qq=n(P7,"flax.linen.Module"),P7.forEach(t),Jq=n(Wy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Wy.forEach(t),Gq=p(eo),D_=r(eo,"P",{});var j7=a(D_);Xq=n(j7,"Finally, this model supports inherent JAX features such as:"),j7.forEach(t),Yq=p(eo),Do=r(eo,"UL",{});var ai=a(Do);S_=r(ai,"LI",{});var q7=a(S_);$p=r(q7,"A",{href:!0,rel:!0});var C7=a($p);Zq=n(C7,"Just-In-Time (JIT) compilation"),C7.forEach(t),q7.forEach(t),e3=p(ai),U_=r(ai,"LI",{});var N7=a(U_);Fp=r(N7,"A",{href:!0,rel:!0});var O7=a(Fp);t3=n(O7,"Automatic Differentiation"),O7.forEach(t),N7.forEach(t),o3=p(ai),W_=r(ai,"LI",{});var A7=a(W_);xp=r(A7,"A",{href:!0,rel:!0});var I7=a(xp);n3=n(I7,"Vectorization"),I7.forEach(t),A7.forEach(t),s3=p(ai),H_=r(ai,"LI",{});var L7=a(H_);Bp=r(L7,"A",{href:!0,rel:!0});var D7=a(Bp);r3=n(D7,"Parallelization"),D7.forEach(t),L7.forEach(t),ai.forEach(t),a3=p(eo),To=r(eo,"DIV",{class:!0});var ii=a(To);T(Ep.$$.fragment,ii),i3=p(ii),Es=r(ii,"P",{});var zm=a(Es);l3=n(zm,"The "),K_=r(zm,"CODE",{});var S7=a(K_);d3=n(S7,"FlaxBertPreTrainedModel"),S7.forEach(t),c3=n(zm," forward method, overrides the "),R_=r(zm,"CODE",{});var U7=a(R_);p3=n(U7,"__call__"),U7.forEach(t),h3=n(zm," special method."),zm.forEach(t),m3=p(ii),T(qa.$$.fragment,ii),f3=p(ii),T(Ca.$$.fragment,ii),ii.forEach(t),eo.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(_A)),u(f,"id","bert"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#bert"),u(m,"class","relative group"),u(pe,"id","overview"),u(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pe,"href","#overview"),u(S,"class","relative group"),u(me,"href","https://arxiv.org/abs/1810.04805"),u(me,"rel","nofollow"),u(fe,"href","https://huggingface.co/thomwolf"),u(fe,"rel","nofollow"),u(W,"href","https://github.com/google-research/bert"),u(W,"rel","nofollow"),u(O,"id","transformers.BertConfig"),u(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(O,"href","#transformers.BertConfig"),u(de,"class","relative group"),u(Ke,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertModel"),u(I,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.TFBertModel"),u(He,"href","https://huggingface.co/bert-base-uncased"),u(He,"rel","nofollow"),u(Z,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(Wp,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ns,"id","transformers.BertTokenizer"),u(Ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ns,"href","#transformers.BertTokenizer"),u(mn,"class","relative group"),u(Hp,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Os,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vp,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.BertTokenizerFast"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.BertTokenizerFast"),u(un,"class","relative group"),u(Qp,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.TFBertTokenizer"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.TFBertTokenizer"),u(_n,"class","relative group"),u(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ws,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ws,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(kn,"class","relative group"),u(Xp,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertForPreTraining"),u(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yp,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zp,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertForPreTraining"),u(Hs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.BertModel"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.BertModel"),u(wn,"class","relative group"),u(eh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ui,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ui,"rel","nofollow"),u(Hi,"href","https://arxiv.org/abs/1706.03762"),u(Hi,"rel","nofollow"),u(th,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertModel"),u(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qs,"id","transformers.BertForPreTraining"),u(Qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qs,"href","#transformers.BertForPreTraining"),u(Fn,"class","relative group"),u(oh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(Gi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Gi,"rel","nofollow"),u(nh,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertForPreTraining"),u(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xs,"id","transformers.BertLMHeadModel"),u(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xs,"href","#transformers.BertLMHeadModel"),u(En,"class","relative group"),u(sh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(nl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(nl,"rel","nofollow"),u(rh,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertLMHeadModel"),u(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.BertForMaskedLM"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.BertForMaskedLM"),u(zn,"class","relative group"),u(ah,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(cl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(cl,"rel","nofollow"),u(ih,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertForMaskedLM"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sr,"id","transformers.BertForNextSentencePrediction"),u(sr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(sr,"href","#transformers.BertForNextSentencePrediction"),u(jn,"class","relative group"),u(lh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(_l,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(_l,"rel","nofollow"),u(dh,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertForNextSentencePrediction"),u(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ir,"id","transformers.BertForSequenceClassification"),u(ir,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ir,"href","#transformers.BertForSequenceClassification"),u(Cn,"class","relative group"),u(ch,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(wl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(wl,"rel","nofollow"),u(ph,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertForSequenceClassification"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mr,"id","transformers.BertForMultipleChoice"),u(mr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mr,"href","#transformers.BertForMultipleChoice"),u(On,"class","relative group"),u(hh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ml,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ml,"rel","nofollow"),u(mh,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertForMultipleChoice"),u(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gr,"id","transformers.BertForTokenClassification"),u(gr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(gr,"href","#transformers.BertForTokenClassification"),u(In,"class","relative group"),u(fh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(Nl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Nl,"rel","nofollow"),u(uh,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertForTokenClassification"),u(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kr,"id","transformers.BertForQuestionAnswering"),u(kr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(kr,"href","#transformers.BertForQuestionAnswering"),u(Dn,"class","relative group"),u(gh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(Sl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Sl,"rel","nofollow"),u(_h,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertForQuestionAnswering"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($r,"id","transformers.TFBertModel"),u($r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($r,"href","#transformers.TFBertModel"),u(Wn,"class","relative group"),u(bh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Vl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Vl,"rel","nofollow"),u(vh,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.TFBertModel"),u(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Er,"id","transformers.TFBertForPreTraining"),u(Er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Er,"href","#transformers.TFBertForPreTraining"),u(Kn,"class","relative group"),u(kh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Zl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Zl,"rel","nofollow"),u(yh,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.TFBertForPreTraining"),u(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jr,"id","transformers.TFBertLMHeadModel"),u(jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jr,"href","#transformers.TFBertLMHeadModel"),u(Qn,"class","relative group"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cr,"id","transformers.TFBertForMaskedLM"),u(Cr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cr,"href","#transformers.TFBertForMaskedLM"),u(Gn,"class","relative group"),u(Th,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(hd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(hd,"rel","nofollow"),u(wh,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.TFBertForMaskedLM"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Lr,"id","transformers.TFBertForNextSentencePrediction"),u(Lr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Lr,"href","#transformers.TFBertForNextSentencePrediction"),u(Yn,"class","relative group"),u($h,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(vd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(vd,"rel","nofollow"),u(Fh,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),u(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wr,"id","transformers.TFBertForSequenceClassification"),u(Wr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wr,"href","#transformers.TFBertForSequenceClassification"),u(es,"class","relative group"),u(xh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Fd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Fd,"rel","nofollow"),u(Bh,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.TFBertForSequenceClassification"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qr,"id","transformers.TFBertForMultipleChoice"),u(Qr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qr,"href","#transformers.TFBertForMultipleChoice"),u(os,"class","relative group"),u(Eh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Pd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Pd,"rel","nofollow"),u(Mh,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.TFBertForMultipleChoice"),u(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yr,"id","transformers.TFBertForTokenClassification"),u(Yr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yr,"href","#transformers.TFBertForTokenClassification"),u(ss,"class","relative group"),u(zh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ad,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ad,"rel","nofollow"),u(Ph,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.TFBertForTokenClassification"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(na,"id","transformers.TFBertForQuestionAnswering"),u(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(na,"href","#transformers.TFBertForQuestionAnswering"),u(as,"class","relative group"),u(jh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wd,"rel","nofollow"),u(qh,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(la,"id","transformers.FlaxBertModel"),u(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(la,"href","#transformers.FlaxBertModel"),u(ds,"class","relative group"),u(Ch,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Jd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Jd,"rel","nofollow"),u(Gd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Gd,"rel","nofollow"),u(Xd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Xd,"rel","nofollow"),u(Yd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Yd,"rel","nofollow"),u(Zd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Zd,"rel","nofollow"),u(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pa,"id","transformers.FlaxBertForPreTraining"),u(pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pa,"href","#transformers.FlaxBertForPreTraining"),u(ps,"class","relative group"),u(Nh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(rc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(rc,"rel","nofollow"),u(ac,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ac,"rel","nofollow"),u(ic,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ic,"rel","nofollow"),u(lc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(lc,"rel","nofollow"),u(dc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(dc,"rel","nofollow"),u(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fa,"id","transformers.FlaxBertForCausalLM"),u(fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fa,"href","#transformers.FlaxBertForCausalLM"),u(fs,"class","relative group"),u(Oh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(uc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(uc,"rel","nofollow"),u(gc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(gc,"rel","nofollow"),u(_c,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(_c,"rel","nofollow"),u(bc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(bc,"rel","nofollow"),u(vc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(vc,"rel","nofollow"),u(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_a,"id","transformers.FlaxBertForMaskedLM"),u(_a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_a,"href","#transformers.FlaxBertForMaskedLM"),u(gs,"class","relative group"),u(Ah,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(xc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(xc,"rel","nofollow"),u(Bc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Bc,"rel","nofollow"),u(Ec,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ec,"rel","nofollow"),u(Mc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Mc,"rel","nofollow"),u(zc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(zc,"rel","nofollow"),u(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ka,"id","transformers.FlaxBertForNextSentencePrediction"),u(ka,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ka,"href","#transformers.FlaxBertForNextSentencePrediction"),u(bs,"class","relative group"),u(Ih,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ac,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ac,"rel","nofollow"),u(Ic,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ic,"rel","nofollow"),u(Lc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Lc,"rel","nofollow"),u(Dc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Dc,"rel","nofollow"),u(Sc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Sc,"rel","nofollow"),u(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wa,"id","transformers.FlaxBertForSequenceClassification"),u(wa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wa,"href","#transformers.FlaxBertForSequenceClassification"),u(ks,"class","relative group"),u(Lh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Vc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Vc,"rel","nofollow"),u(Qc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Qc,"rel","nofollow"),u(Jc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Jc,"rel","nofollow"),u(Gc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Gc,"rel","nofollow"),u(Xc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Xc,"rel","nofollow"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xa,"id","transformers.FlaxBertForMultipleChoice"),u(xa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xa,"href","#transformers.FlaxBertForMultipleChoice"),u(Ts,"class","relative group"),u(Dh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(np,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(np,"rel","nofollow"),u(sp,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(sp,"rel","nofollow"),u(rp,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(rp,"rel","nofollow"),u(ap,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ap,"rel","nofollow"),u(ip,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(ip,"rel","nofollow"),u(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ma,"id","transformers.FlaxBertForTokenClassification"),u(Ma,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ma,"href","#transformers.FlaxBertForTokenClassification"),u($s,"class","relative group"),u(Sh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(mp,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(mp,"rel","nofollow"),u(fp,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(fp,"rel","nofollow"),u(up,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(up,"rel","nofollow"),u(gp,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(gp,"rel","nofollow"),u(_p,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(_p,"rel","nofollow"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ja,"id","transformers.FlaxBertForQuestionAnswering"),u(ja,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ja,"href","#transformers.FlaxBertForQuestionAnswering"),u(xs,"class","relative group"),u(Uh,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(wp,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(wp,"rel","nofollow"),u($p,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u($p,"rel","nofollow"),u(Fp,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Fp,"rel","nofollow"),u(xp,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(xp,"rel","nofollow"),u(Bp,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Bp,"rel","nofollow"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,v){e(document.head,d),_(i,g,v),_(i,m,v),e(m,f),e(f,b),w(l,b,null),e(m,h),e(m,M),e(M,xe),_(i,ye,v),_(i,S,v),e(S,pe),e(pe,ee),w(E,ee,null),e(S,Be),e(S,R),e(R,Ee),_(i,Te,v),_(i,U,v),e(U,Me),e(U,me),e(me,G),e(U,ze),_(i,we,v),_(i,H,v),e(H,Pe),_(i,$e,v),_(i,K,v),e(K,_e),e(_e,je),_(i,oe,v),_(i,j,v),e(j,q),e(q,qe),_(i,Q,v),_(i,ge,v),e(ge,Ce),_(i,J,v),_(i,he,v),e(he,be),e(be,N),e(he,Ne),e(he,V),e(V,Oe),_(i,Fe,v),_(i,D,v),e(D,Ae),e(D,fe),e(fe,L),e(D,Ie),e(D,W),e(W,Le),e(D,se),_(i,C,v),_(i,de,v),e(de,O),e(O,ve),w(ue,ve,null),e(de,k),e(de,z),e(z,Re),_(i,ne,v),_(i,ke,v),w(We,ke,null),e(ke,P),e(ke,De),e(De,Ve),e(De,Ke),e(Ke,Qe),e(De,Je),e(De,I),e(I,X),e(De,Ge),e(De,He),e(He,Y),e(De,Xe),e(ke,Ye),e(ke,ce),e(ce,Ze),e(ce,Z),e(Z,et),e(ce,Hy),e(ce,Wp),e(Wp,Ky),e(ce,Ry),e(ke,Vy),w(Cs,ke,null),_(i,Db,v),_(i,mn,v),e(mn,Ns),e(Ns,Pm),w(li,Pm,null),e(mn,Qy),e(mn,jm),e(jm,Jy),_(i,Sb,v),_(i,tt,v),w(di,tt,null),e(tt,Gy),e(tt,qm),e(qm,Xy),e(tt,Yy),e(tt,ci),e(ci,Zy),e(ci,Hp),e(Hp,eT),e(ci,tT),e(tt,oT),e(tt,Ko),w(pi,Ko,null),e(Ko,nT),e(Ko,Cm),e(Cm,sT),e(Ko,rT),e(Ko,hi),e(hi,Kp),e(Kp,aT),e(Kp,Nm),e(Nm,iT),e(hi,lT),e(hi,Rp),e(Rp,dT),e(Rp,Om),e(Om,cT),e(tt,pT),e(tt,Os),w(mi,Os,null),e(Os,hT),e(Os,fi),e(fi,mT),e(fi,Am),e(Am,fT),e(fi,uT),e(tt,gT),e(tt,oo),w(ui,oo,null),e(oo,_T),e(oo,Im),e(Im,bT),e(oo,vT),w(As,oo,null),e(oo,kT),e(oo,fn),e(fn,yT),e(fn,Lm),e(Lm,TT),e(fn,wT),e(fn,Dm),e(Dm,$T),e(fn,FT),e(tt,xT),e(tt,Vp),w(gi,Vp,null),_(i,Ub,v),_(i,un,v),e(un,Is),e(Is,Sm),w(_i,Sm,null),e(un,BT),e(un,Um),e(Um,ET),_(i,Wb,v),_(i,Ft,v),w(bi,Ft,null),e(Ft,MT),e(Ft,vi),e(vi,zT),e(vi,Wm),e(Wm,PT),e(vi,jT),e(Ft,qT),e(Ft,ki),e(ki,CT),e(ki,Qp),e(Qp,NT),e(ki,OT),e(Ft,AT),e(Ft,Ro),w(yi,Ro,null),e(Ro,IT),e(Ro,Hm),e(Hm,LT),e(Ro,DT),e(Ro,Ti),e(Ti,Jp),e(Jp,ST),e(Jp,Km),e(Km,UT),e(Ti,WT),e(Ti,Gp),e(Gp,HT),e(Gp,Rm),e(Rm,KT),e(Ft,RT),e(Ft,no),w(wi,no,null),e(no,VT),e(no,Vm),e(Vm,QT),e(no,JT),w(Ls,no,null),e(no,GT),e(no,gn),e(gn,XT),e(gn,Qm),e(Qm,YT),e(gn,ZT),e(gn,Jm),e(Jm,e2),e(gn,t2),_(i,Hb,v),_(i,_n,v),e(_n,Ds),e(Ds,Gm),w($i,Gm,null),e(_n,o2),e(_n,Xm),e(Xm,n2),_(i,Kb,v),_(i,xt,v),w(Fi,xt,null),e(xt,s2),e(xt,bn),e(bn,r2),e(bn,Ym),e(Ym,a2),e(bn,i2),e(bn,Zm),e(Zm,l2),e(bn,d2),e(xt,c2),e(xt,xi),e(xi,p2),e(xi,ef),e(ef,h2),e(xi,m2),e(xt,f2),e(xt,Vo),w(Bi,Vo,null),e(Vo,u2),e(Vo,Ei),e(Ei,g2),e(Ei,tf),e(tf,_2),e(Ei,b2),e(Vo,v2),w(Ss,Vo,null),e(xt,k2),e(xt,Qo),w(Mi,Qo,null),e(Qo,y2),e(Qo,vn),e(vn,T2),e(vn,of),e(of,w2),e(vn,$2),e(vn,nf),e(nf,F2),e(vn,x2),e(Qo,B2),w(Us,Qo,null),_(i,Rb,v),_(i,kn,v),e(kn,Ws),e(Ws,sf),w(zi,sf,null),e(kn,E2),e(kn,rf),e(rf,M2),_(i,Vb,v),_(i,yn,v),w(Pi,yn,null),e(yn,z2),e(yn,ji),e(ji,P2),e(ji,Xp),e(Xp,j2),e(ji,q2),_(i,Qb,v),_(i,Tn,v),w(qi,Tn,null),e(Tn,C2),e(Tn,Ci),e(Ci,N2),e(Ci,Yp),e(Yp,O2),e(Ci,A2),_(i,Jb,v),_(i,Po,v),w(Ni,Po,null),e(Po,I2),e(Po,Oi),e(Oi,L2),e(Oi,Zp),e(Zp,D2),e(Oi,S2),e(Po,U2),e(Po,Hs),w(Ai,Hs,null),e(Hs,W2),e(Hs,af),e(af,H2),_(i,Gb,v),_(i,wn,v),e(wn,Ks),e(Ks,lf),w(Ii,lf,null),e(wn,K2),e(wn,df),e(df,R2),_(i,Xb,v),_(i,ot,v),w(Li,ot,null),e(ot,V2),e(ot,cf),e(cf,Q2),e(ot,J2),e(ot,Di),e(Di,G2),e(Di,eh),e(eh,X2),e(Di,Y2),e(ot,Z2),e(ot,Si),e(Si,ew),e(Si,Ui),e(Ui,tw),e(Si,ow),e(ot,nw),e(ot,Wi),e(Wi,sw),e(Wi,Hi),e(Hi,rw),e(Wi,aw),e(ot,iw),e(ot,ft),e(ft,lw),e(ft,pf),e(pf,dw),e(ft,cw),e(ft,hf),e(hf,pw),e(ft,hw),e(ft,mf),e(mf,mw),e(ft,fw),e(ft,ff),e(ff,uw),e(ft,gw),e(ft,uf),e(uf,_w),e(ft,bw),e(ft,gf),e(gf,vw),e(ft,kw),e(ot,yw),e(ot,so),w(Ki,so,null),e(so,Tw),e(so,$n),e($n,ww),e($n,th),e(th,$w),e($n,Fw),e($n,_f),e(_f,xw),e($n,Bw),e(so,Ew),w(Rs,so,null),e(so,Mw),w(Vs,so,null),_(i,Yb,v),_(i,Fn,v),e(Fn,Qs),e(Qs,bf),w(Ri,bf,null),e(Fn,zw),e(Fn,vf),e(vf,Pw),_(i,Zb,v),_(i,Bt,v),w(Vi,Bt,null),e(Bt,jw),e(Bt,xn),e(xn,qw),e(xn,kf),e(kf,Cw),e(xn,Nw),e(xn,yf),e(yf,Ow),e(xn,Aw),e(Bt,Iw),e(Bt,Qi),e(Qi,Lw),e(Qi,oh),e(oh,Dw),e(Qi,Sw),e(Bt,Uw),e(Bt,Ji),e(Ji,Ww),e(Ji,Gi),e(Gi,Hw),e(Ji,Kw),e(Bt,Rw),e(Bt,ro),w(Xi,ro,null),e(ro,Vw),e(ro,Bn),e(Bn,Qw),e(Bn,nh),e(nh,Jw),e(Bn,Gw),e(Bn,Tf),e(Tf,Xw),e(Bn,Yw),e(ro,Zw),w(Js,ro,null),e(ro,e1),w(Gs,ro,null),_(i,ev,v),_(i,En,v),e(En,Xs),e(Xs,wf),w(Yi,wf,null),e(En,t1),e(En,$f),e($f,o1),_(i,tv,v),_(i,Et,v),w(Zi,Et,null),e(Et,n1),e(Et,el),e(el,s1),e(el,Ff),e(Ff,r1),e(el,a1),e(Et,i1),e(Et,tl),e(tl,l1),e(tl,sh),e(sh,d1),e(tl,c1),e(Et,p1),e(Et,ol),e(ol,h1),e(ol,nl),e(nl,m1),e(ol,f1),e(Et,u1),e(Et,ao),w(sl,ao,null),e(ao,g1),e(ao,Mn),e(Mn,_1),e(Mn,rh),e(rh,b1),e(Mn,v1),e(Mn,xf),e(xf,k1),e(Mn,y1),e(ao,T1),w(Ys,ao,null),e(ao,w1),w(Zs,ao,null),_(i,ov,v),_(i,zn,v),e(zn,er),e(er,Bf),w(rl,Bf,null),e(zn,$1),e(zn,Ef),e(Ef,F1),_(i,nv,v),_(i,Mt,v),w(al,Mt,null),e(Mt,x1),e(Mt,il),e(il,B1),e(il,Mf),e(Mf,E1),e(il,M1),e(Mt,z1),e(Mt,ll),e(ll,P1),e(ll,ah),e(ah,j1),e(ll,q1),e(Mt,C1),e(Mt,dl),e(dl,N1),e(dl,cl),e(cl,O1),e(dl,A1),e(Mt,I1),e(Mt,Nt),w(pl,Nt,null),e(Nt,L1),e(Nt,Pn),e(Pn,D1),e(Pn,ih),e(ih,S1),e(Pn,U1),e(Pn,zf),e(zf,W1),e(Pn,H1),e(Nt,K1),w(tr,Nt,null),e(Nt,R1),w(or,Nt,null),e(Nt,V1),w(nr,Nt,null),_(i,sv,v),_(i,jn,v),e(jn,sr),e(sr,Pf),w(hl,Pf,null),e(jn,Q1),e(jn,jf),e(jf,J1),_(i,rv,v),_(i,zt,v),w(ml,zt,null),e(zt,G1),e(zt,fl),e(fl,X1),e(fl,qf),e(qf,Y1),e(fl,Z1),e(zt,e$),e(zt,ul),e(ul,t$),e(ul,lh),e(lh,o$),e(ul,n$),e(zt,s$),e(zt,gl),e(gl,r$),e(gl,_l),e(_l,a$),e(gl,i$),e(zt,l$),e(zt,io),w(bl,io,null),e(io,d$),e(io,qn),e(qn,c$),e(qn,dh),e(dh,p$),e(qn,h$),e(qn,Cf),e(Cf,m$),e(qn,f$),e(io,u$),w(rr,io,null),e(io,g$),w(ar,io,null),_(i,av,v),_(i,Cn,v),e(Cn,ir),e(ir,Nf),w(vl,Nf,null),e(Cn,_$),e(Cn,Of),e(Of,b$),_(i,iv,v),_(i,Pt,v),w(kl,Pt,null),e(Pt,v$),e(Pt,Af),e(Af,k$),e(Pt,y$),e(Pt,yl),e(yl,T$),e(yl,ch),e(ch,w$),e(yl,$$),e(Pt,F$),e(Pt,Tl),e(Tl,x$),e(Tl,wl),e(wl,B$),e(Tl,E$),e(Pt,M$),e(Pt,mt),w($l,mt,null),e(mt,z$),e(mt,Nn),e(Nn,P$),e(Nn,ph),e(ph,j$),e(Nn,q$),e(Nn,If),e(If,C$),e(Nn,N$),e(mt,O$),w(lr,mt,null),e(mt,A$),w(dr,mt,null),e(mt,I$),w(cr,mt,null),e(mt,L$),w(pr,mt,null),e(mt,D$),w(hr,mt,null),_(i,lv,v),_(i,On,v),e(On,mr),e(mr,Lf),w(Fl,Lf,null),e(On,S$),e(On,Df),e(Df,U$),_(i,dv,v),_(i,jt,v),w(xl,jt,null),e(jt,W$),e(jt,Sf),e(Sf,H$),e(jt,K$),e(jt,Bl),e(Bl,R$),e(Bl,hh),e(hh,V$),e(Bl,Q$),e(jt,J$),e(jt,El),e(El,G$),e(El,Ml),e(Ml,X$),e(El,Y$),e(jt,Z$),e(jt,lo),w(zl,lo,null),e(lo,e0),e(lo,An),e(An,t0),e(An,mh),e(mh,o0),e(An,n0),e(An,Uf),e(Uf,s0),e(An,r0),e(lo,a0),w(fr,lo,null),e(lo,i0),w(ur,lo,null),_(i,cv,v),_(i,In,v),e(In,gr),e(gr,Wf),w(Pl,Wf,null),e(In,l0),e(In,Hf),e(Hf,d0),_(i,pv,v),_(i,qt,v),w(jl,qt,null),e(qt,c0),e(qt,Kf),e(Kf,p0),e(qt,h0),e(qt,ql),e(ql,m0),e(ql,fh),e(fh,f0),e(ql,u0),e(qt,g0),e(qt,Cl),e(Cl,_0),e(Cl,Nl),e(Nl,b0),e(Cl,v0),e(qt,k0),e(qt,Ot),w(Ol,Ot,null),e(Ot,y0),e(Ot,Ln),e(Ln,T0),e(Ln,uh),e(uh,w0),e(Ln,$0),e(Ln,Rf),e(Rf,F0),e(Ln,x0),e(Ot,B0),w(_r,Ot,null),e(Ot,E0),w(br,Ot,null),e(Ot,M0),w(vr,Ot,null),_(i,hv,v),_(i,Dn,v),e(Dn,kr),e(kr,Vf),w(Al,Vf,null),e(Dn,z0),e(Dn,Qf),e(Qf,P0),_(i,mv,v),_(i,Ct,v),w(Il,Ct,null),e(Ct,j0),e(Ct,Sn),e(Sn,q0),e(Sn,Jf),e(Jf,C0),e(Sn,N0),e(Sn,Gf),e(Gf,O0),e(Sn,A0),e(Ct,I0),e(Ct,Ll),e(Ll,L0),e(Ll,gh),e(gh,D0),e(Ll,S0),e(Ct,U0),e(Ct,Dl),e(Dl,W0),e(Dl,Sl),e(Sl,H0),e(Dl,K0),e(Ct,R0),e(Ct,At),w(Ul,At,null),e(At,V0),e(At,Un),e(Un,Q0),e(Un,_h),e(_h,J0),e(Un,G0),e(Un,Xf),e(Xf,X0),e(Un,Y0),e(At,Z0),w(yr,At,null),e(At,eF),w(Tr,At,null),e(At,tF),w(wr,At,null),_(i,fv,v),_(i,Wn,v),e(Wn,$r),e($r,Yf),w(Wl,Yf,null),e(Wn,oF),e(Wn,Zf),e(Zf,nF),_(i,uv,v),_(i,ut,v),w(Hl,ut,null),e(ut,sF),e(ut,eu),e(eu,rF),e(ut,aF),e(ut,Kl),e(Kl,iF),e(Kl,bh),e(bh,lF),e(Kl,dF),e(ut,cF),e(ut,Rl),e(Rl,pF),e(Rl,Vl),e(Vl,hF),e(Rl,mF),e(ut,fF),w(Fr,ut,null),e(ut,uF),e(ut,co),w(Ql,co,null),e(co,gF),e(co,Hn),e(Hn,_F),e(Hn,vh),e(vh,bF),e(Hn,vF),e(Hn,tu),e(tu,kF),e(Hn,yF),e(co,TF),w(xr,co,null),e(co,wF),w(Br,co,null),_(i,gv,v),_(i,Kn,v),e(Kn,Er),e(Er,ou),w(Jl,ou,null),e(Kn,$F),e(Kn,nu),e(nu,FF),_(i,_v,v),_(i,gt,v),w(Gl,gt,null),e(gt,xF),e(gt,Rn),e(Rn,BF),e(Rn,su),e(su,EF),e(Rn,MF),e(Rn,ru),e(ru,zF),e(Rn,PF),e(gt,jF),e(gt,Xl),e(Xl,qF),e(Xl,kh),e(kh,CF),e(Xl,NF),e(gt,OF),e(gt,Yl),e(Yl,AF),e(Yl,Zl),e(Zl,IF),e(Yl,LF),e(gt,DF),w(Mr,gt,null),e(gt,SF),e(gt,po),w(ed,po,null),e(po,UF),e(po,Vn),e(Vn,WF),e(Vn,yh),e(yh,HF),e(Vn,KF),e(Vn,au),e(au,RF),e(Vn,VF),e(po,QF),w(zr,po,null),e(po,JF),w(Pr,po,null),_(i,bv,v),_(i,Qn,v),e(Qn,jr),e(jr,iu),w(td,iu,null),e(Qn,GF),e(Qn,lu),e(lu,XF),_(i,vv,v),_(i,Jn,v),w(od,Jn,null),e(Jn,YF),e(Jn,It),w(nd,It,null),e(It,ZF),e(It,nt),e(nt,ex),e(nt,du),e(du,tx),e(nt,ox),e(nt,cu),e(cu,nx),e(nt,sx),e(nt,pu),e(pu,rx),e(nt,ax),e(nt,hu),e(hu,ix),e(nt,lx),e(nt,mu),e(mu,dx),e(nt,cx),e(nt,fu),e(fu,px),e(nt,hx),e(nt,uu),e(uu,mx),e(nt,fx),e(It,ux),e(It,sd),e(sd,rd),e(rd,gx),e(rd,gu),e(gu,_x),e(rd,bx),e(sd,vx),e(sd,ad),e(ad,kx),e(ad,_u),e(_u,yx),e(ad,Tx),e(It,wx),e(It,te),e(te,$x),e(te,bu),e(bu,Fx),e(te,xx),e(te,vu),e(vu,Bx),e(te,Ex),e(te,ku),e(ku,Mx),e(te,zx),e(te,yu),e(yu,Px),e(te,jx),e(te,Tu),e(Tu,qx),e(te,Cx),e(te,wu),e(wu,Nx),e(te,Ox),e(te,$u),e($u,Ax),e(te,Ix),e(te,Fu),e(Fu,Lx),e(te,Dx),e(te,xu),e(xu,Sx),e(te,Ux),e(te,Bu),e(Bu,Wx),e(te,Hx),e(te,Eu),e(Eu,Kx),e(te,Rx),e(te,Mu),e(Mu,Vx),e(te,Qx),e(te,zu),e(zu,Jx),e(te,Gx),e(te,Pu),e(Pu,Xx),e(te,Yx),e(te,ju),e(ju,Zx),e(te,e4),e(te,qu),e(qu,t4),e(te,o4),e(te,Cu),e(Cu,n4),e(te,s4),e(te,Nu),e(Nu,r4),e(te,a4),e(te,Ou),e(Ou,i4),e(te,l4),e(te,Au),e(Au,d4),e(te,c4),e(It,p4),w(qr,It,null),_(i,kv,v),_(i,Gn,v),e(Gn,Cr),e(Cr,Iu),w(id,Iu,null),e(Gn,h4),e(Gn,Lu),e(Lu,m4),_(i,yv,v),_(i,_t,v),w(ld,_t,null),e(_t,f4),e(_t,dd),e(dd,u4),e(dd,Du),e(Du,g4),e(dd,_4),e(_t,b4),e(_t,cd),e(cd,v4),e(cd,Th),e(Th,k4),e(cd,y4),e(_t,T4),e(_t,pd),e(pd,w4),e(pd,hd),e(hd,$4),e(pd,F4),e(_t,x4),w(Nr,_t,null),e(_t,B4),e(_t,Lt),w(md,Lt,null),e(Lt,E4),e(Lt,Xn),e(Xn,M4),e(Xn,wh),e(wh,z4),e(Xn,P4),e(Xn,Su),e(Su,j4),e(Xn,q4),e(Lt,C4),w(Or,Lt,null),e(Lt,N4),w(Ar,Lt,null),e(Lt,O4),w(Ir,Lt,null),_(i,Tv,v),_(i,Yn,v),e(Yn,Lr),e(Lr,Uu),w(fd,Uu,null),e(Yn,A4),e(Yn,Wu),e(Wu,I4),_(i,wv,v),_(i,bt,v),w(ud,bt,null),e(bt,L4),e(bt,gd),e(gd,D4),e(gd,Hu),e(Hu,S4),e(gd,U4),e(bt,W4),e(bt,_d),e(_d,H4),e(_d,$h),e($h,K4),e(_d,R4),e(bt,V4),e(bt,bd),e(bd,Q4),e(bd,vd),e(vd,J4),e(bd,G4),e(bt,X4),w(Dr,bt,null),e(bt,Y4),e(bt,ho),w(kd,ho,null),e(ho,Z4),e(ho,Zn),e(Zn,eB),e(Zn,Fh),e(Fh,tB),e(Zn,oB),e(Zn,Ku),e(Ku,nB),e(Zn,sB),e(ho,rB),w(Sr,ho,null),e(ho,aB),w(Ur,ho,null),_(i,$v,v),_(i,es,v),e(es,Wr),e(Wr,Ru),w(yd,Ru,null),e(es,iB),e(es,Vu),e(Vu,lB),_(i,Fv,v),_(i,vt,v),w(Td,vt,null),e(vt,dB),e(vt,Qu),e(Qu,cB),e(vt,pB),e(vt,wd),e(wd,hB),e(wd,xh),e(xh,mB),e(wd,fB),e(vt,uB),e(vt,$d),e($d,gB),e($d,Fd),e(Fd,_B),e($d,bB),e(vt,vB),w(Hr,vt,null),e(vt,kB),e(vt,Dt),w(xd,Dt,null),e(Dt,yB),e(Dt,ts),e(ts,TB),e(ts,Bh),e(Bh,wB),e(ts,$B),e(ts,Ju),e(Ju,FB),e(ts,xB),e(Dt,BB),w(Kr,Dt,null),e(Dt,EB),w(Rr,Dt,null),e(Dt,MB),w(Vr,Dt,null),_(i,xv,v),_(i,os,v),e(os,Qr),e(Qr,Gu),w(Bd,Gu,null),e(os,zB),e(os,Xu),e(Xu,PB),_(i,Bv,v),_(i,kt,v),w(Ed,kt,null),e(kt,jB),e(kt,Yu),e(Yu,qB),e(kt,CB),e(kt,Md),e(Md,NB),e(Md,Eh),e(Eh,OB),e(Md,AB),e(kt,IB),e(kt,zd),e(zd,LB),e(zd,Pd),e(Pd,DB),e(zd,SB),e(kt,UB),w(Jr,kt,null),e(kt,WB),e(kt,mo),w(jd,mo,null),e(mo,HB),e(mo,ns),e(ns,KB),e(ns,Mh),e(Mh,RB),e(ns,VB),e(ns,Zu),e(Zu,QB),e(ns,JB),e(mo,GB),w(Gr,mo,null),e(mo,XB),w(Xr,mo,null),_(i,Ev,v),_(i,ss,v),e(ss,Yr),e(Yr,eg),w(qd,eg,null),e(ss,YB),e(ss,tg),e(tg,ZB),_(i,Mv,v),_(i,yt,v),w(Cd,yt,null),e(yt,eE),e(yt,og),e(og,tE),e(yt,oE),e(yt,Nd),e(Nd,nE),e(Nd,zh),e(zh,sE),e(Nd,rE),e(yt,aE),e(yt,Od),e(Od,iE),e(Od,Ad),e(Ad,lE),e(Od,dE),e(yt,cE),w(Zr,yt,null),e(yt,pE),e(yt,St),w(Id,St,null),e(St,hE),e(St,rs),e(rs,mE),e(rs,Ph),e(Ph,fE),e(rs,uE),e(rs,ng),e(ng,gE),e(rs,_E),e(St,bE),w(ea,St,null),e(St,vE),w(ta,St,null),e(St,kE),w(oa,St,null),_(i,zv,v),_(i,as,v),e(as,na),e(na,sg),w(Ld,sg,null),e(as,yE),e(as,rg),e(rg,TE),_(i,Pv,v),_(i,Tt,v),w(Dd,Tt,null),e(Tt,wE),e(Tt,is),e(is,$E),e(is,ag),e(ag,FE),e(is,xE),e(is,ig),e(ig,BE),e(is,EE),e(Tt,ME),e(Tt,Sd),e(Sd,zE),e(Sd,jh),e(jh,PE),e(Sd,jE),e(Tt,qE),e(Tt,Ud),e(Ud,CE),e(Ud,Wd),e(Wd,NE),e(Ud,OE),e(Tt,AE),w(sa,Tt,null),e(Tt,IE),e(Tt,Ut),w(Hd,Ut,null),e(Ut,LE),e(Ut,ls),e(ls,DE),e(ls,qh),e(qh,SE),e(ls,UE),e(ls,lg),e(lg,WE),e(ls,HE),e(Ut,KE),w(ra,Ut,null),e(Ut,RE),w(aa,Ut,null),e(Ut,VE),w(ia,Ut,null),_(i,jv,v),_(i,ds,v),e(ds,la),e(la,dg),w(Kd,dg,null),e(ds,QE),e(ds,cg),e(cg,JE),_(i,qv,v),_(i,st,v),w(Rd,st,null),e(st,GE),e(st,pg),e(pg,XE),e(st,YE),e(st,Vd),e(Vd,ZE),e(Vd,Ch),e(Ch,eM),e(Vd,tM),e(st,oM),e(st,Qd),e(Qd,nM),e(Qd,Jd),e(Jd,sM),e(Qd,rM),e(st,aM),e(st,hg),e(hg,iM),e(st,lM),e(st,jo),e(jo,mg),e(mg,Gd),e(Gd,dM),e(jo,cM),e(jo,fg),e(fg,Xd),e(Xd,pM),e(jo,hM),e(jo,ug),e(ug,Yd),e(Yd,mM),e(jo,fM),e(jo,gg),e(gg,Zd),e(Zd,uM),e(st,gM),e(st,fo),w(ec,fo,null),e(fo,_M),e(fo,cs),e(cs,bM),e(cs,_g),e(_g,vM),e(cs,kM),e(cs,bg),e(bg,yM),e(cs,TM),e(fo,wM),w(da,fo,null),e(fo,$M),w(ca,fo,null),_(i,Cv,v),_(i,ps,v),e(ps,pa),e(pa,vg),w(tc,vg,null),e(ps,FM),e(ps,kg),e(kg,xM),_(i,Nv,v),_(i,rt,v),w(oc,rt,null),e(rt,BM),e(rt,hs),e(hs,EM),e(hs,yg),e(yg,MM),e(hs,zM),e(hs,Tg),e(Tg,PM),e(hs,jM),e(rt,qM),e(rt,nc),e(nc,CM),e(nc,Nh),e(Nh,NM),e(nc,OM),e(rt,AM),e(rt,sc),e(sc,IM),e(sc,rc),e(rc,LM),e(sc,DM),e(rt,SM),e(rt,wg),e(wg,UM),e(rt,WM),e(rt,qo),e(qo,$g),e($g,ac),e(ac,HM),e(qo,KM),e(qo,Fg),e(Fg,ic),e(ic,RM),e(qo,VM),e(qo,xg),e(xg,lc),e(lc,QM),e(qo,JM),e(qo,Bg),e(Bg,dc),e(dc,GM),e(rt,XM),e(rt,uo),w(cc,uo,null),e(uo,YM),e(uo,ms),e(ms,ZM),e(ms,Eg),e(Eg,ez),e(ms,tz),e(ms,Mg),e(Mg,oz),e(ms,nz),e(uo,sz),w(ha,uo,null),e(uo,rz),w(ma,uo,null),_(i,Ov,v),_(i,fs,v),e(fs,fa),e(fa,zg),w(pc,zg,null),e(fs,az),e(fs,Pg),e(Pg,iz),_(i,Av,v),_(i,at,v),w(hc,at,null),e(at,lz),e(at,jg),e(jg,dz),e(at,cz),e(at,mc),e(mc,pz),e(mc,Oh),e(Oh,hz),e(mc,mz),e(at,fz),e(at,fc),e(fc,uz),e(fc,uc),e(uc,gz),e(fc,_z),e(at,bz),e(at,qg),e(qg,vz),e(at,kz),e(at,Co),e(Co,Cg),e(Cg,gc),e(gc,yz),e(Co,Tz),e(Co,Ng),e(Ng,_c),e(_c,wz),e(Co,$z),e(Co,Og),e(Og,bc),e(bc,Fz),e(Co,xz),e(Co,Ag),e(Ag,vc),e(vc,Bz),e(at,Ez),e(at,go),w(kc,go,null),e(go,Mz),e(go,us),e(us,zz),e(us,Ig),e(Ig,Pz),e(us,jz),e(us,Lg),e(Lg,qz),e(us,Cz),e(go,Nz),w(ua,go,null),e(go,Oz),w(ga,go,null),_(i,Iv,v),_(i,gs,v),e(gs,_a),e(_a,Dg),w(yc,Dg,null),e(gs,Az),e(gs,Sg),e(Sg,Iz),_(i,Lv,v),_(i,it,v),w(Tc,it,null),e(it,Lz),e(it,wc),e(wc,Dz),e(wc,Ug),e(Ug,Sz),e(wc,Uz),e(it,Wz),e(it,$c),e($c,Hz),e($c,Ah),e(Ah,Kz),e($c,Rz),e(it,Vz),e(it,Fc),e(Fc,Qz),e(Fc,xc),e(xc,Jz),e(Fc,Gz),e(it,Xz),e(it,Wg),e(Wg,Yz),e(it,Zz),e(it,No),e(No,Hg),e(Hg,Bc),e(Bc,eP),e(No,tP),e(No,Kg),e(Kg,Ec),e(Ec,oP),e(No,nP),e(No,Rg),e(Rg,Mc),e(Mc,sP),e(No,rP),e(No,Vg),e(Vg,zc),e(zc,aP),e(it,iP),e(it,_o),w(Pc,_o,null),e(_o,lP),e(_o,_s),e(_s,dP),e(_s,Qg),e(Qg,cP),e(_s,pP),e(_s,Jg),e(Jg,hP),e(_s,mP),e(_o,fP),w(ba,_o,null),e(_o,uP),w(va,_o,null),_(i,Dv,v),_(i,bs,v),e(bs,ka),e(ka,Gg),w(jc,Gg,null),e(bs,gP),e(bs,Xg),e(Xg,_P),_(i,Sv,v),_(i,lt,v),w(qc,lt,null),e(lt,bP),e(lt,Cc),e(Cc,vP),e(Cc,Yg),e(Yg,kP),e(Cc,yP),e(lt,TP),e(lt,Nc),e(Nc,wP),e(Nc,Ih),e(Ih,$P),e(Nc,FP),e(lt,xP),e(lt,Oc),e(Oc,BP),e(Oc,Ac),e(Ac,EP),e(Oc,MP),e(lt,zP),e(lt,Zg),e(Zg,PP),e(lt,jP),e(lt,Oo),e(Oo,e_),e(e_,Ic),e(Ic,qP),e(Oo,CP),e(Oo,t_),e(t_,Lc),e(Lc,NP),e(Oo,OP),e(Oo,o_),e(o_,Dc),e(Dc,AP),e(Oo,IP),e(Oo,n_),e(n_,Sc),e(Sc,LP),e(lt,DP),e(lt,bo),w(Uc,bo,null),e(bo,SP),e(bo,vs),e(vs,UP),e(vs,s_),e(s_,WP),e(vs,HP),e(vs,r_),e(r_,KP),e(vs,RP),e(bo,VP),w(ya,bo,null),e(bo,QP),w(Ta,bo,null),_(i,Uv,v),_(i,ks,v),e(ks,wa),e(wa,a_),w(Wc,a_,null),e(ks,JP),e(ks,i_),e(i_,GP),_(i,Wv,v),_(i,dt,v),w(Hc,dt,null),e(dt,XP),e(dt,l_),e(l_,YP),e(dt,ZP),e(dt,Kc),e(Kc,ej),e(Kc,Lh),e(Lh,tj),e(Kc,oj),e(dt,nj),e(dt,Rc),e(Rc,sj),e(Rc,Vc),e(Vc,rj),e(Rc,aj),e(dt,ij),e(dt,d_),e(d_,lj),e(dt,dj),e(dt,Ao),e(Ao,c_),e(c_,Qc),e(Qc,cj),e(Ao,pj),e(Ao,p_),e(p_,Jc),e(Jc,hj),e(Ao,mj),e(Ao,h_),e(h_,Gc),e(Gc,fj),e(Ao,uj),e(Ao,m_),e(m_,Xc),e(Xc,gj),e(dt,_j),e(dt,vo),w(Yc,vo,null),e(vo,bj),e(vo,ys),e(ys,vj),e(ys,f_),e(f_,kj),e(ys,yj),e(ys,u_),e(u_,Tj),e(ys,wj),e(vo,$j),w($a,vo,null),e(vo,Fj),w(Fa,vo,null),_(i,Hv,v),_(i,Ts,v),e(Ts,xa),e(xa,g_),w(Zc,g_,null),e(Ts,xj),e(Ts,__),e(__,Bj),_(i,Kv,v),_(i,ct,v),w(ep,ct,null),e(ct,Ej),e(ct,b_),e(b_,Mj),e(ct,zj),e(ct,tp),e(tp,Pj),e(tp,Dh),e(Dh,jj),e(tp,qj),e(ct,Cj),e(ct,op),e(op,Nj),e(op,np),e(np,Oj),e(op,Aj),e(ct,Ij),e(ct,v_),e(v_,Lj),e(ct,Dj),e(ct,Io),e(Io,k_),e(k_,sp),e(sp,Sj),e(Io,Uj),e(Io,y_),e(y_,rp),e(rp,Wj),e(Io,Hj),e(Io,T_),e(T_,ap),e(ap,Kj),e(Io,Rj),e(Io,w_),e(w_,ip),e(ip,Vj),e(ct,Qj),e(ct,ko),w(lp,ko,null),e(ko,Jj),e(ko,ws),e(ws,Gj),e(ws,$_),e($_,Xj),e(ws,Yj),e(ws,F_),e(F_,Zj),e(ws,eq),e(ko,tq),w(Ba,ko,null),e(ko,oq),w(Ea,ko,null),_(i,Rv,v),_(i,$s,v),e($s,Ma),e(Ma,x_),w(dp,x_,null),e($s,nq),e($s,B_),e(B_,sq),_(i,Vv,v),_(i,pt,v),w(cp,pt,null),e(pt,rq),e(pt,E_),e(E_,aq),e(pt,iq),e(pt,pp),e(pp,lq),e(pp,Sh),e(Sh,dq),e(pp,cq),e(pt,pq),e(pt,hp),e(hp,hq),e(hp,mp),e(mp,mq),e(hp,fq),e(pt,uq),e(pt,M_),e(M_,gq),e(pt,_q),e(pt,Lo),e(Lo,z_),e(z_,fp),e(fp,bq),e(Lo,vq),e(Lo,P_),e(P_,up),e(up,kq),e(Lo,yq),e(Lo,j_),e(j_,gp),e(gp,Tq),e(Lo,wq),e(Lo,q_),e(q_,_p),e(_p,$q),e(pt,Fq),e(pt,yo),w(bp,yo,null),e(yo,xq),e(yo,Fs),e(Fs,Bq),e(Fs,C_),e(C_,Eq),e(Fs,Mq),e(Fs,N_),e(N_,zq),e(Fs,Pq),e(yo,jq),w(za,yo,null),e(yo,qq),w(Pa,yo,null),_(i,Qv,v),_(i,xs,v),e(xs,ja),e(ja,O_),w(vp,O_,null),e(xs,Cq),e(xs,A_),e(A_,Nq),_(i,Jv,v),_(i,ht,v),w(kp,ht,null),e(ht,Oq),e(ht,Bs),e(Bs,Aq),e(Bs,I_),e(I_,Iq),e(Bs,Lq),e(Bs,L_),e(L_,Dq),e(Bs,Sq),e(ht,Uq),e(ht,yp),e(yp,Wq),e(yp,Uh),e(Uh,Hq),e(yp,Kq),e(ht,Rq),e(ht,Tp),e(Tp,Vq),e(Tp,wp),e(wp,Qq),e(Tp,Jq),e(ht,Gq),e(ht,D_),e(D_,Xq),e(ht,Yq),e(ht,Do),e(Do,S_),e(S_,$p),e($p,Zq),e(Do,e3),e(Do,U_),e(U_,Fp),e(Fp,t3),e(Do,o3),e(Do,W_),e(W_,xp),e(xp,n3),e(Do,s3),e(Do,H_),e(H_,Bp),e(Bp,r3),e(ht,a3),e(ht,To),w(Ep,To,null),e(To,i3),e(To,Es),e(Es,l3),e(Es,K_),e(K_,d3),e(Es,c3),e(Es,R_),e(R_,p3),e(Es,h3),e(To,m3),w(qa,To,null),e(To,f3),w(Ca,To,null),Gv=!0},p(i,[v]){const Mp={};v&2&&(Mp.$$scope={dirty:v,ctx:i}),Cs.$set(Mp);const V_={};v&2&&(V_.$$scope={dirty:v,ctx:i}),As.$set(V_);const Q_={};v&2&&(Q_.$$scope={dirty:v,ctx:i}),Ls.$set(Q_);const J_={};v&2&&(J_.$$scope={dirty:v,ctx:i}),Ss.$set(J_);const zp={};v&2&&(zp.$$scope={dirty:v,ctx:i}),Us.$set(zp);const G_={};v&2&&(G_.$$scope={dirty:v,ctx:i}),Rs.$set(G_);const X_={};v&2&&(X_.$$scope={dirty:v,ctx:i}),Vs.$set(X_);const Y_={};v&2&&(Y_.$$scope={dirty:v,ctx:i}),Js.$set(Y_);const Pp={};v&2&&(Pp.$$scope={dirty:v,ctx:i}),Gs.$set(Pp);const Z_={};v&2&&(Z_.$$scope={dirty:v,ctx:i}),Ys.$set(Z_);const eb={};v&2&&(eb.$$scope={dirty:v,ctx:i}),Zs.$set(eb);const tb={};v&2&&(tb.$$scope={dirty:v,ctx:i}),tr.$set(tb);const ob={};v&2&&(ob.$$scope={dirty:v,ctx:i}),or.$set(ob);const nb={};v&2&&(nb.$$scope={dirty:v,ctx:i}),nr.$set(nb);const sb={};v&2&&(sb.$$scope={dirty:v,ctx:i}),rr.$set(sb);const rb={};v&2&&(rb.$$scope={dirty:v,ctx:i}),ar.$set(rb);const jp={};v&2&&(jp.$$scope={dirty:v,ctx:i}),lr.$set(jp);const ab={};v&2&&(ab.$$scope={dirty:v,ctx:i}),dr.$set(ab);const ib={};v&2&&(ib.$$scope={dirty:v,ctx:i}),cr.$set(ib);const Ms={};v&2&&(Ms.$$scope={dirty:v,ctx:i}),pr.$set(Ms);const lb={};v&2&&(lb.$$scope={dirty:v,ctx:i}),hr.$set(lb);const db={};v&2&&(db.$$scope={dirty:v,ctx:i}),fr.$set(db);const qp={};v&2&&(qp.$$scope={dirty:v,ctx:i}),ur.$set(qp);const cb={};v&2&&(cb.$$scope={dirty:v,ctx:i}),_r.$set(cb);const pb={};v&2&&(pb.$$scope={dirty:v,ctx:i}),br.$set(pb);const hb={};v&2&&(hb.$$scope={dirty:v,ctx:i}),vr.$set(hb);const So={};v&2&&(So.$$scope={dirty:v,ctx:i}),yr.$set(So);const Uo={};v&2&&(Uo.$$scope={dirty:v,ctx:i}),Tr.$set(Uo);const mb={};v&2&&(mb.$$scope={dirty:v,ctx:i}),wr.$set(mb);const fb={};v&2&&(fb.$$scope={dirty:v,ctx:i}),Fr.$set(fb);const ub={};v&2&&(ub.$$scope={dirty:v,ctx:i}),xr.$set(ub);const zs={};v&2&&(zs.$$scope={dirty:v,ctx:i}),Br.$set(zs);const gb={};v&2&&(gb.$$scope={dirty:v,ctx:i}),Mr.$set(gb);const _b={};v&2&&(_b.$$scope={dirty:v,ctx:i}),zr.$set(_b);const Cp={};v&2&&(Cp.$$scope={dirty:v,ctx:i}),Pr.$set(Cp);const bb={};v&2&&(bb.$$scope={dirty:v,ctx:i}),qr.$set(bb);const vb={};v&2&&(vb.$$scope={dirty:v,ctx:i}),Nr.$set(vb);const kb={};v&2&&(kb.$$scope={dirty:v,ctx:i}),Or.$set(kb);const wt={};v&2&&(wt.$$scope={dirty:v,ctx:i}),Ar.$set(wt);const yb={};v&2&&(yb.$$scope={dirty:v,ctx:i}),Ir.$set(yb);const Np={};v&2&&(Np.$$scope={dirty:v,ctx:i}),Dr.$set(Np);const Tb={};v&2&&(Tb.$$scope={dirty:v,ctx:i}),Sr.$set(Tb);const Ps={};v&2&&(Ps.$$scope={dirty:v,ctx:i}),Ur.$set(Ps);const wb={};v&2&&(wb.$$scope={dirty:v,ctx:i}),Hr.$set(wb);const Op={};v&2&&(Op.$$scope={dirty:v,ctx:i}),Kr.$set(Op);const Wh={};v&2&&(Wh.$$scope={dirty:v,ctx:i}),Rr.$set(Wh);const $b={};v&2&&($b.$$scope={dirty:v,ctx:i}),Vr.$set($b);const Hh={};v&2&&(Hh.$$scope={dirty:v,ctx:i}),Jr.$set(Hh);const Fb={};v&2&&(Fb.$$scope={dirty:v,ctx:i}),Gr.$set(Fb);const Ap={};v&2&&(Ap.$$scope={dirty:v,ctx:i}),Xr.$set(Ap);const Ip={};v&2&&(Ip.$$scope={dirty:v,ctx:i}),Zr.$set(Ip);const xb={};v&2&&(xb.$$scope={dirty:v,ctx:i}),ea.$set(xb);const Wo={};v&2&&(Wo.$$scope={dirty:v,ctx:i}),ta.$set(Wo);const Bb={};v&2&&(Bb.$$scope={dirty:v,ctx:i}),oa.$set(Bb);const js={};v&2&&(js.$$scope={dirty:v,ctx:i}),sa.$set(js);const Eb={};v&2&&(Eb.$$scope={dirty:v,ctx:i}),ra.$set(Eb);const Mb={};v&2&&(Mb.$$scope={dirty:v,ctx:i}),aa.$set(Mb);const zb={};v&2&&(zb.$$scope={dirty:v,ctx:i}),ia.$set(zb);const Lp={};v&2&&(Lp.$$scope={dirty:v,ctx:i}),da.$set(Lp);const Pb={};v&2&&(Pb.$$scope={dirty:v,ctx:i}),ca.$set(Pb);const jb={};v&2&&(jb.$$scope={dirty:v,ctx:i}),ha.$set(jb);const qb={};v&2&&(qb.$$scope={dirty:v,ctx:i}),ma.$set(qb);const to={};v&2&&(to.$$scope={dirty:v,ctx:i}),ua.$set(to);const Dp={};v&2&&(Dp.$$scope={dirty:v,ctx:i}),ga.$set(Dp);const Cb={};v&2&&(Cb.$$scope={dirty:v,ctx:i}),ba.$set(Cb);const Sp={};v&2&&(Sp.$$scope={dirty:v,ctx:i}),va.$set(Sp);const Nb={};v&2&&(Nb.$$scope={dirty:v,ctx:i}),ya.$set(Nb);const qs={};v&2&&(qs.$$scope={dirty:v,ctx:i}),Ta.$set(qs);const Ob={};v&2&&(Ob.$$scope={dirty:v,ctx:i}),$a.$set(Ob);const Up={};v&2&&(Up.$$scope={dirty:v,ctx:i}),Fa.$set(Up);const Kh={};v&2&&(Kh.$$scope={dirty:v,ctx:i}),Ba.$set(Kh);const Ab={};v&2&&(Ab.$$scope={dirty:v,ctx:i}),Ea.$set(Ab);const Rh={};v&2&&(Rh.$$scope={dirty:v,ctx:i}),za.$set(Rh);const Ib={};v&2&&(Ib.$$scope={dirty:v,ctx:i}),Pa.$set(Ib);const Ho={};v&2&&(Ho.$$scope={dirty:v,ctx:i}),qa.$set(Ho);const Lb={};v&2&&(Lb.$$scope={dirty:v,ctx:i}),Ca.$set(Lb)},i(i){Gv||($(l.$$.fragment,i),$(E.$$.fragment,i),$(ue.$$.fragment,i),$(We.$$.fragment,i),$(Cs.$$.fragment,i),$(li.$$.fragment,i),$(di.$$.fragment,i),$(pi.$$.fragment,i),$(mi.$$.fragment,i),$(ui.$$.fragment,i),$(As.$$.fragment,i),$(gi.$$.fragment,i),$(_i.$$.fragment,i),$(bi.$$.fragment,i),$(yi.$$.fragment,i),$(wi.$$.fragment,i),$(Ls.$$.fragment,i),$($i.$$.fragment,i),$(Fi.$$.fragment,i),$(Bi.$$.fragment,i),$(Ss.$$.fragment,i),$(Mi.$$.fragment,i),$(Us.$$.fragment,i),$(zi.$$.fragment,i),$(Pi.$$.fragment,i),$(qi.$$.fragment,i),$(Ni.$$.fragment,i),$(Ai.$$.fragment,i),$(Ii.$$.fragment,i),$(Li.$$.fragment,i),$(Ki.$$.fragment,i),$(Rs.$$.fragment,i),$(Vs.$$.fragment,i),$(Ri.$$.fragment,i),$(Vi.$$.fragment,i),$(Xi.$$.fragment,i),$(Js.$$.fragment,i),$(Gs.$$.fragment,i),$(Yi.$$.fragment,i),$(Zi.$$.fragment,i),$(sl.$$.fragment,i),$(Ys.$$.fragment,i),$(Zs.$$.fragment,i),$(rl.$$.fragment,i),$(al.$$.fragment,i),$(pl.$$.fragment,i),$(tr.$$.fragment,i),$(or.$$.fragment,i),$(nr.$$.fragment,i),$(hl.$$.fragment,i),$(ml.$$.fragment,i),$(bl.$$.fragment,i),$(rr.$$.fragment,i),$(ar.$$.fragment,i),$(vl.$$.fragment,i),$(kl.$$.fragment,i),$($l.$$.fragment,i),$(lr.$$.fragment,i),$(dr.$$.fragment,i),$(cr.$$.fragment,i),$(pr.$$.fragment,i),$(hr.$$.fragment,i),$(Fl.$$.fragment,i),$(xl.$$.fragment,i),$(zl.$$.fragment,i),$(fr.$$.fragment,i),$(ur.$$.fragment,i),$(Pl.$$.fragment,i),$(jl.$$.fragment,i),$(Ol.$$.fragment,i),$(_r.$$.fragment,i),$(br.$$.fragment,i),$(vr.$$.fragment,i),$(Al.$$.fragment,i),$(Il.$$.fragment,i),$(Ul.$$.fragment,i),$(yr.$$.fragment,i),$(Tr.$$.fragment,i),$(wr.$$.fragment,i),$(Wl.$$.fragment,i),$(Hl.$$.fragment,i),$(Fr.$$.fragment,i),$(Ql.$$.fragment,i),$(xr.$$.fragment,i),$(Br.$$.fragment,i),$(Jl.$$.fragment,i),$(Gl.$$.fragment,i),$(Mr.$$.fragment,i),$(ed.$$.fragment,i),$(zr.$$.fragment,i),$(Pr.$$.fragment,i),$(td.$$.fragment,i),$(od.$$.fragment,i),$(nd.$$.fragment,i),$(qr.$$.fragment,i),$(id.$$.fragment,i),$(ld.$$.fragment,i),$(Nr.$$.fragment,i),$(md.$$.fragment,i),$(Or.$$.fragment,i),$(Ar.$$.fragment,i),$(Ir.$$.fragment,i),$(fd.$$.fragment,i),$(ud.$$.fragment,i),$(Dr.$$.fragment,i),$(kd.$$.fragment,i),$(Sr.$$.fragment,i),$(Ur.$$.fragment,i),$(yd.$$.fragment,i),$(Td.$$.fragment,i),$(Hr.$$.fragment,i),$(xd.$$.fragment,i),$(Kr.$$.fragment,i),$(Rr.$$.fragment,i),$(Vr.$$.fragment,i),$(Bd.$$.fragment,i),$(Ed.$$.fragment,i),$(Jr.$$.fragment,i),$(jd.$$.fragment,i),$(Gr.$$.fragment,i),$(Xr.$$.fragment,i),$(qd.$$.fragment,i),$(Cd.$$.fragment,i),$(Zr.$$.fragment,i),$(Id.$$.fragment,i),$(ea.$$.fragment,i),$(ta.$$.fragment,i),$(oa.$$.fragment,i),$(Ld.$$.fragment,i),$(Dd.$$.fragment,i),$(sa.$$.fragment,i),$(Hd.$$.fragment,i),$(ra.$$.fragment,i),$(aa.$$.fragment,i),$(ia.$$.fragment,i),$(Kd.$$.fragment,i),$(Rd.$$.fragment,i),$(ec.$$.fragment,i),$(da.$$.fragment,i),$(ca.$$.fragment,i),$(tc.$$.fragment,i),$(oc.$$.fragment,i),$(cc.$$.fragment,i),$(ha.$$.fragment,i),$(ma.$$.fragment,i),$(pc.$$.fragment,i),$(hc.$$.fragment,i),$(kc.$$.fragment,i),$(ua.$$.fragment,i),$(ga.$$.fragment,i),$(yc.$$.fragment,i),$(Tc.$$.fragment,i),$(Pc.$$.fragment,i),$(ba.$$.fragment,i),$(va.$$.fragment,i),$(jc.$$.fragment,i),$(qc.$$.fragment,i),$(Uc.$$.fragment,i),$(ya.$$.fragment,i),$(Ta.$$.fragment,i),$(Wc.$$.fragment,i),$(Hc.$$.fragment,i),$(Yc.$$.fragment,i),$($a.$$.fragment,i),$(Fa.$$.fragment,i),$(Zc.$$.fragment,i),$(ep.$$.fragment,i),$(lp.$$.fragment,i),$(Ba.$$.fragment,i),$(Ea.$$.fragment,i),$(dp.$$.fragment,i),$(cp.$$.fragment,i),$(bp.$$.fragment,i),$(za.$$.fragment,i),$(Pa.$$.fragment,i),$(vp.$$.fragment,i),$(kp.$$.fragment,i),$(Ep.$$.fragment,i),$(qa.$$.fragment,i),$(Ca.$$.fragment,i),Gv=!0)},o(i){F(l.$$.fragment,i),F(E.$$.fragment,i),F(ue.$$.fragment,i),F(We.$$.fragment,i),F(Cs.$$.fragment,i),F(li.$$.fragment,i),F(di.$$.fragment,i),F(pi.$$.fragment,i),F(mi.$$.fragment,i),F(ui.$$.fragment,i),F(As.$$.fragment,i),F(gi.$$.fragment,i),F(_i.$$.fragment,i),F(bi.$$.fragment,i),F(yi.$$.fragment,i),F(wi.$$.fragment,i),F(Ls.$$.fragment,i),F($i.$$.fragment,i),F(Fi.$$.fragment,i),F(Bi.$$.fragment,i),F(Ss.$$.fragment,i),F(Mi.$$.fragment,i),F(Us.$$.fragment,i),F(zi.$$.fragment,i),F(Pi.$$.fragment,i),F(qi.$$.fragment,i),F(Ni.$$.fragment,i),F(Ai.$$.fragment,i),F(Ii.$$.fragment,i),F(Li.$$.fragment,i),F(Ki.$$.fragment,i),F(Rs.$$.fragment,i),F(Vs.$$.fragment,i),F(Ri.$$.fragment,i),F(Vi.$$.fragment,i),F(Xi.$$.fragment,i),F(Js.$$.fragment,i),F(Gs.$$.fragment,i),F(Yi.$$.fragment,i),F(Zi.$$.fragment,i),F(sl.$$.fragment,i),F(Ys.$$.fragment,i),F(Zs.$$.fragment,i),F(rl.$$.fragment,i),F(al.$$.fragment,i),F(pl.$$.fragment,i),F(tr.$$.fragment,i),F(or.$$.fragment,i),F(nr.$$.fragment,i),F(hl.$$.fragment,i),F(ml.$$.fragment,i),F(bl.$$.fragment,i),F(rr.$$.fragment,i),F(ar.$$.fragment,i),F(vl.$$.fragment,i),F(kl.$$.fragment,i),F($l.$$.fragment,i),F(lr.$$.fragment,i),F(dr.$$.fragment,i),F(cr.$$.fragment,i),F(pr.$$.fragment,i),F(hr.$$.fragment,i),F(Fl.$$.fragment,i),F(xl.$$.fragment,i),F(zl.$$.fragment,i),F(fr.$$.fragment,i),F(ur.$$.fragment,i),F(Pl.$$.fragment,i),F(jl.$$.fragment,i),F(Ol.$$.fragment,i),F(_r.$$.fragment,i),F(br.$$.fragment,i),F(vr.$$.fragment,i),F(Al.$$.fragment,i),F(Il.$$.fragment,i),F(Ul.$$.fragment,i),F(yr.$$.fragment,i),F(Tr.$$.fragment,i),F(wr.$$.fragment,i),F(Wl.$$.fragment,i),F(Hl.$$.fragment,i),F(Fr.$$.fragment,i),F(Ql.$$.fragment,i),F(xr.$$.fragment,i),F(Br.$$.fragment,i),F(Jl.$$.fragment,i),F(Gl.$$.fragment,i),F(Mr.$$.fragment,i),F(ed.$$.fragment,i),F(zr.$$.fragment,i),F(Pr.$$.fragment,i),F(td.$$.fragment,i),F(od.$$.fragment,i),F(nd.$$.fragment,i),F(qr.$$.fragment,i),F(id.$$.fragment,i),F(ld.$$.fragment,i),F(Nr.$$.fragment,i),F(md.$$.fragment,i),F(Or.$$.fragment,i),F(Ar.$$.fragment,i),F(Ir.$$.fragment,i),F(fd.$$.fragment,i),F(ud.$$.fragment,i),F(Dr.$$.fragment,i),F(kd.$$.fragment,i),F(Sr.$$.fragment,i),F(Ur.$$.fragment,i),F(yd.$$.fragment,i),F(Td.$$.fragment,i),F(Hr.$$.fragment,i),F(xd.$$.fragment,i),F(Kr.$$.fragment,i),F(Rr.$$.fragment,i),F(Vr.$$.fragment,i),F(Bd.$$.fragment,i),F(Ed.$$.fragment,i),F(Jr.$$.fragment,i),F(jd.$$.fragment,i),F(Gr.$$.fragment,i),F(Xr.$$.fragment,i),F(qd.$$.fragment,i),F(Cd.$$.fragment,i),F(Zr.$$.fragment,i),F(Id.$$.fragment,i),F(ea.$$.fragment,i),F(ta.$$.fragment,i),F(oa.$$.fragment,i),F(Ld.$$.fragment,i),F(Dd.$$.fragment,i),F(sa.$$.fragment,i),F(Hd.$$.fragment,i),F(ra.$$.fragment,i),F(aa.$$.fragment,i),F(ia.$$.fragment,i),F(Kd.$$.fragment,i),F(Rd.$$.fragment,i),F(ec.$$.fragment,i),F(da.$$.fragment,i),F(ca.$$.fragment,i),F(tc.$$.fragment,i),F(oc.$$.fragment,i),F(cc.$$.fragment,i),F(ha.$$.fragment,i),F(ma.$$.fragment,i),F(pc.$$.fragment,i),F(hc.$$.fragment,i),F(kc.$$.fragment,i),F(ua.$$.fragment,i),F(ga.$$.fragment,i),F(yc.$$.fragment,i),F(Tc.$$.fragment,i),F(Pc.$$.fragment,i),F(ba.$$.fragment,i),F(va.$$.fragment,i),F(jc.$$.fragment,i),F(qc.$$.fragment,i),F(Uc.$$.fragment,i),F(ya.$$.fragment,i),F(Ta.$$.fragment,i),F(Wc.$$.fragment,i),F(Hc.$$.fragment,i),F(Yc.$$.fragment,i),F($a.$$.fragment,i),F(Fa.$$.fragment,i),F(Zc.$$.fragment,i),F(ep.$$.fragment,i),F(lp.$$.fragment,i),F(Ba.$$.fragment,i),F(Ea.$$.fragment,i),F(dp.$$.fragment,i),F(cp.$$.fragment,i),F(bp.$$.fragment,i),F(za.$$.fragment,i),F(Pa.$$.fragment,i),F(vp.$$.fragment,i),F(kp.$$.fragment,i),F(Ep.$$.fragment,i),F(qa.$$.fragment,i),F(Ca.$$.fragment,i),Gv=!1},d(i){t(d),i&&t(g),i&&t(m),x(l),i&&t(ye),i&&t(S),x(E),i&&t(Te),i&&t(U),i&&t(we),i&&t(H),i&&t($e),i&&t(K),i&&t(oe),i&&t(j),i&&t(Q),i&&t(ge),i&&t(J),i&&t(he),i&&t(Fe),i&&t(D),i&&t(C),i&&t(de),x(ue),i&&t(ne),i&&t(ke),x(We),x(Cs),i&&t(Db),i&&t(mn),x(li),i&&t(Sb),i&&t(tt),x(di),x(pi),x(mi),x(ui),x(As),x(gi),i&&t(Ub),i&&t(un),x(_i),i&&t(Wb),i&&t(Ft),x(bi),x(yi),x(wi),x(Ls),i&&t(Hb),i&&t(_n),x($i),i&&t(Kb),i&&t(xt),x(Fi),x(Bi),x(Ss),x(Mi),x(Us),i&&t(Rb),i&&t(kn),x(zi),i&&t(Vb),i&&t(yn),x(Pi),i&&t(Qb),i&&t(Tn),x(qi),i&&t(Jb),i&&t(Po),x(Ni),x(Ai),i&&t(Gb),i&&t(wn),x(Ii),i&&t(Xb),i&&t(ot),x(Li),x(Ki),x(Rs),x(Vs),i&&t(Yb),i&&t(Fn),x(Ri),i&&t(Zb),i&&t(Bt),x(Vi),x(Xi),x(Js),x(Gs),i&&t(ev),i&&t(En),x(Yi),i&&t(tv),i&&t(Et),x(Zi),x(sl),x(Ys),x(Zs),i&&t(ov),i&&t(zn),x(rl),i&&t(nv),i&&t(Mt),x(al),x(pl),x(tr),x(or),x(nr),i&&t(sv),i&&t(jn),x(hl),i&&t(rv),i&&t(zt),x(ml),x(bl),x(rr),x(ar),i&&t(av),i&&t(Cn),x(vl),i&&t(iv),i&&t(Pt),x(kl),x($l),x(lr),x(dr),x(cr),x(pr),x(hr),i&&t(lv),i&&t(On),x(Fl),i&&t(dv),i&&t(jt),x(xl),x(zl),x(fr),x(ur),i&&t(cv),i&&t(In),x(Pl),i&&t(pv),i&&t(qt),x(jl),x(Ol),x(_r),x(br),x(vr),i&&t(hv),i&&t(Dn),x(Al),i&&t(mv),i&&t(Ct),x(Il),x(Ul),x(yr),x(Tr),x(wr),i&&t(fv),i&&t(Wn),x(Wl),i&&t(uv),i&&t(ut),x(Hl),x(Fr),x(Ql),x(xr),x(Br),i&&t(gv),i&&t(Kn),x(Jl),i&&t(_v),i&&t(gt),x(Gl),x(Mr),x(ed),x(zr),x(Pr),i&&t(bv),i&&t(Qn),x(td),i&&t(vv),i&&t(Jn),x(od),x(nd),x(qr),i&&t(kv),i&&t(Gn),x(id),i&&t(yv),i&&t(_t),x(ld),x(Nr),x(md),x(Or),x(Ar),x(Ir),i&&t(Tv),i&&t(Yn),x(fd),i&&t(wv),i&&t(bt),x(ud),x(Dr),x(kd),x(Sr),x(Ur),i&&t($v),i&&t(es),x(yd),i&&t(Fv),i&&t(vt),x(Td),x(Hr),x(xd),x(Kr),x(Rr),x(Vr),i&&t(xv),i&&t(os),x(Bd),i&&t(Bv),i&&t(kt),x(Ed),x(Jr),x(jd),x(Gr),x(Xr),i&&t(Ev),i&&t(ss),x(qd),i&&t(Mv),i&&t(yt),x(Cd),x(Zr),x(Id),x(ea),x(ta),x(oa),i&&t(zv),i&&t(as),x(Ld),i&&t(Pv),i&&t(Tt),x(Dd),x(sa),x(Hd),x(ra),x(aa),x(ia),i&&t(jv),i&&t(ds),x(Kd),i&&t(qv),i&&t(st),x(Rd),x(ec),x(da),x(ca),i&&t(Cv),i&&t(ps),x(tc),i&&t(Nv),i&&t(rt),x(oc),x(cc),x(ha),x(ma),i&&t(Ov),i&&t(fs),x(pc),i&&t(Av),i&&t(at),x(hc),x(kc),x(ua),x(ga),i&&t(Iv),i&&t(gs),x(yc),i&&t(Lv),i&&t(it),x(Tc),x(Pc),x(ba),x(va),i&&t(Dv),i&&t(bs),x(jc),i&&t(Sv),i&&t(lt),x(qc),x(Uc),x(ya),x(Ta),i&&t(Uv),i&&t(ks),x(Wc),i&&t(Wv),i&&t(dt),x(Hc),x(Yc),x($a),x(Fa),i&&t(Hv),i&&t(Ts),x(Zc),i&&t(Kv),i&&t(ct),x(ep),x(lp),x(Ba),x(Ea),i&&t(Rv),i&&t($s),x(dp),i&&t(Vv),i&&t(pt),x(cp),x(bp),x(za),x(Pa),i&&t(Qv),i&&t(xs),x(vp),i&&t(Jv),i&&t(ht),x(kp),x(Ep),x(qa),x(Ca)}}}const _A={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.TFBertTokenizer",title:"TFBertTokenizer"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForCausalLM",title:"FlaxBertForCausalLM"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function bA(B){return V7(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class FA extends W7{constructor(d){super();H7(this,d,bA,gA,K7,{})}}export{FA as default,_A as metadata};
