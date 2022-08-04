import{S as W7,i as H7,s as R7,e as r,k as c,w as T,t as n,M as Q7,c as a,d as t,m as p,a as i,x as y,h as s,b as u,G as e,g as b,y as w,q as $,o as F,B as x,v as V7,L as te}from"../../chunks/vendor-hf-doc-builder.js";import{T as we}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as oe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as $e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ee}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function K7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertModel, BertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function J7(B){let d,_,m,h,g;return h=new oe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"pair mask has the following format:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function G7(B){let d,_,m,h,g;return h=new oe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"pair mask has the following format:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function X7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import TFBertTokenizer

tf_tokenizer = TFBertTokenizer.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFBertTokenizer

tf_tokenizer = TFBertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function Y7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import AutoTokenizer, TFBertTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
tf_tokenizer = TFBertTokenizer.from_tokenizer(tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFBertTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
tf_tokenizer = TFBertTokenizer.from_tokenizer(tokenizer)`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function Z7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function eO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function tO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function oO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function nO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function sO(B){let d,_,m,h,g;return h=new oe({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function rO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function aO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function iO(B){let d,_;return d=new oe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){T(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function lO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function dO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function cO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function pO(B){let d,_,m,h,g;return h=new oe({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of single-label classification:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of single-label classification:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function hO(B){let d,_;return d=new oe({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function mO(B){let d,_,m,h,g;return h=new oe({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of multi-label classification:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of multi-label classification:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function fO(B){let d,_;return d=new oe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function uO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function gO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function _O(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function bO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function kO(B){let d,_;return d=new oe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function vO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function TO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function yO(B){let d,_;return d=new oe({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){T(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function wO(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,ve,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ye,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),M=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ve=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=a(v,"P",{});var z=i(d);_=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),m=p(v),h=a(v,"UL",{});var K=i(h);g=a(K,"LI",{});var Me=i(g);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(v),M=a(v,"P",{});var I=i(M);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);ve=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(v),O=a(v,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(v),P=a(v,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var Fe=i(H);fe=s(Fe,"input_ids"),Fe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);Te=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var ze=i(R);ge=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ye=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(v,z){b(v,d,z),e(d,_),b(v,m,z),b(v,h,z),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(v,X,z),b(v,M,z),e(M,ne),e(M,L),e(L,re),e(M,ke),e(M,D),e(D,ve),e(M,me),b(v,J,z),b(v,O,z),e(O,ae),b(v,Y,z),b(v,P,z),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ye),e(N,V),e(V,pe)},d(v){v&&t(d),v&&t(m),v&&t(h),v&&t(X),v&&t(M),v&&t(J),v&&t(O),v&&t(Y),v&&t(P)}}}function $O(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function FO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function xO(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,ve,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ye,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),M=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ve=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=a(v,"P",{});var z=i(d);_=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),m=p(v),h=a(v,"UL",{});var K=i(h);g=a(K,"LI",{});var Me=i(g);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(v),M=a(v,"P",{});var I=i(M);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);ve=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(v),O=a(v,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(v),P=a(v,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var Fe=i(H);fe=s(Fe,"input_ids"),Fe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);Te=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var ze=i(R);ge=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ye=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(v,z){b(v,d,z),e(d,_),b(v,m,z),b(v,h,z),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(v,X,z),b(v,M,z),e(M,ne),e(M,L),e(L,re),e(M,ke),e(M,D),e(D,ve),e(M,me),b(v,J,z),b(v,O,z),e(O,ae),b(v,Y,z),b(v,P,z),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ye),e(N,V),e(V,pe)},d(v){v&&t(d),v&&t(m),v&&t(h),v&&t(X),v&&t(M),v&&t(J),v&&t(O),v&&t(Y),v&&t(P)}}}function BO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function EO(B){let d,_,m,h,g;return h=new oe({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits, seq_relationship_logits = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function zO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function MO(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,ve,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ye,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),M=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ve=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=a(v,"P",{});var z=i(d);_=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),m=p(v),h=a(v,"UL",{});var K=i(h);g=a(K,"LI",{});var Me=i(g);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(v),M=a(v,"P",{});var I=i(M);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);ve=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(v),O=a(v,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(v),P=a(v,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var Fe=i(H);fe=s(Fe,"input_ids"),Fe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);Te=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var ze=i(R);ge=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ye=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(v,z){b(v,d,z),e(d,_),b(v,m,z),b(v,h,z),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(v,X,z),b(v,M,z),e(M,ne),e(M,L),e(L,re),e(M,ke),e(M,D),e(D,ve),e(M,me),b(v,J,z),b(v,O,z),e(O,ae),b(v,Y,z),b(v,P,z),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ye),e(N,V),e(V,pe)},d(v){v&&t(d),v&&t(m),v&&t(h),v&&t(X),v&&t(M),v&&t(J),v&&t(O),v&&t(Y),v&&t(P)}}}function PO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function qO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function jO(B){let d,_;return d=new oe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){T(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function CO(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,ve,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ye,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),M=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ve=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=a(v,"P",{});var z=i(d);_=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),m=p(v),h=a(v,"UL",{});var K=i(h);g=a(K,"LI",{});var Me=i(g);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(v),M=a(v,"P",{});var I=i(M);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);ve=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(v),O=a(v,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(v),P=a(v,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var Fe=i(H);fe=s(Fe,"input_ids"),Fe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);Te=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var ze=i(R);ge=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ye=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(v,z){b(v,d,z),e(d,_),b(v,m,z),b(v,h,z),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(v,X,z),b(v,M,z),e(M,ne),e(M,L),e(L,re),e(M,ke),e(M,D),e(D,ve),e(M,me),b(v,J,z),b(v,O,z),e(O,ae),b(v,Y,z),b(v,P,z),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ye),e(N,V),e(V,pe)},d(v){v&&t(d),v&&t(m),v&&t(h),v&&t(X),v&&t(M),v&&t(J),v&&t(O),v&&t(Y),v&&t(P)}}}function NO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function OO(B){let d,_,m,h,g;return h=new oe({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function IO(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,ve,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ye,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),M=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ve=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=a(v,"P",{});var z=i(d);_=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),m=p(v),h=a(v,"UL",{});var K=i(h);g=a(K,"LI",{});var Me=i(g);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(v),M=a(v,"P",{});var I=i(M);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);ve=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(v),O=a(v,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(v),P=a(v,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var Fe=i(H);fe=s(Fe,"input_ids"),Fe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);Te=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var ze=i(R);ge=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ye=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(v,z){b(v,d,z),e(d,_),b(v,m,z),b(v,h,z),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(v,X,z),b(v,M,z),e(M,ne),e(M,L),e(L,re),e(M,ke),e(M,D),e(D,ve),e(M,me),b(v,J,z),b(v,O,z),e(O,ae),b(v,Y,z),b(v,P,z),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ye),e(N,V),e(V,pe)},d(v){v&&t(d),v&&t(m),v&&t(h),v&&t(X),v&&t(M),v&&t(J),v&&t(O),v&&t(Y),v&&t(P)}}}function AO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function LO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function DO(B){let d,_;return d=new oe({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function SO(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,ve,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ye,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),M=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ve=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=a(v,"P",{});var z=i(d);_=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),m=p(v),h=a(v,"UL",{});var K=i(h);g=a(K,"LI",{});var Me=i(g);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(v),M=a(v,"P",{});var I=i(M);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);ve=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(v),O=a(v,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(v),P=a(v,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var Fe=i(H);fe=s(Fe,"input_ids"),Fe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);Te=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var ze=i(R);ge=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ye=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(v,z){b(v,d,z),e(d,_),b(v,m,z),b(v,h,z),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(v,X,z),b(v,M,z),e(M,ne),e(M,L),e(L,re),e(M,ke),e(M,D),e(D,ve),e(M,me),b(v,J,z),b(v,O,z),e(O,ae),b(v,Y,z),b(v,P,z),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ye),e(N,V),e(V,pe)},d(v){v&&t(d),v&&t(m),v&&t(h),v&&t(X),v&&t(M),v&&t(J),v&&t(O),v&&t(Y),v&&t(P)}}}function UO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function WO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function HO(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,ve,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ye,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),M=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ve=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=a(v,"P",{});var z=i(d);_=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),m=p(v),h=a(v,"UL",{});var K=i(h);g=a(K,"LI",{});var Me=i(g);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(v),M=a(v,"P",{});var I=i(M);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);ve=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(v),O=a(v,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(v),P=a(v,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var Fe=i(H);fe=s(Fe,"input_ids"),Fe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);Te=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var ze=i(R);ge=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ye=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(v,z){b(v,d,z),e(d,_),b(v,m,z),b(v,h,z),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(v,X,z),b(v,M,z),e(M,ne),e(M,L),e(L,re),e(M,ke),e(M,D),e(D,ve),e(M,me),b(v,J,z),b(v,O,z),e(O,ae),b(v,Y,z),b(v,P,z),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ye),e(N,V),e(V,pe)},d(v){v&&t(d),v&&t(m),v&&t(h),v&&t(X),v&&t(M),v&&t(J),v&&t(O),v&&t(Y),v&&t(P)}}}function RO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function QO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function VO(B){let d,_;return d=new oe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function KO(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,ve,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ye,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),M=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ve=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=a(v,"P",{});var z=i(d);_=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),m=p(v),h=a(v,"UL",{});var K=i(h);g=a(K,"LI",{});var Me=i(g);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(v),M=a(v,"P",{});var I=i(M);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);ve=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(v),O=a(v,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(v),P=a(v,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var Fe=i(H);fe=s(Fe,"input_ids"),Fe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);Te=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var ze=i(R);ge=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ye=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(v,z){b(v,d,z),e(d,_),b(v,m,z),b(v,h,z),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(v,X,z),b(v,M,z),e(M,ne),e(M,L),e(L,re),e(M,ke),e(M,D),e(D,ve),e(M,me),b(v,J,z),b(v,O,z),e(O,ae),b(v,Y,z),b(v,P,z),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ye),e(N,V),e(V,pe)},d(v){v&&t(d),v&&t(m),v&&t(h),v&&t(X),v&&t(M),v&&t(J),v&&t(O),v&&t(Y),v&&t(P)}}}function JO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function GO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function XO(B){let d,_;return d=new oe({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){T(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function YO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function ZO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function eI(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function tI(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function oI(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function nI(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function sI(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function rI(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertForMaskedLM

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function aI(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function iI(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertForNextSentencePrediction

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function lI(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function dI(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForSequenceClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function cI(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function pI(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function hI(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function mI(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertForTokenClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForTokenClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function fI(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function uI(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function gI(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,ve,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ye,V,pe,v,z,K,Me,Be,I,Pe,Ee,qe,A,W,Fe,xe,U,ze,je,he,Ce,Eb,Nt,Ra,j1,ho,C1,Ep,N1,O1,zp,I1,A1,Qa,L1,D1,S1,Ko,U1,Mp,W1,H1,Pp,R1,Q1,V1,_s,zb,Jo,bs,km,Va,K1,vm,J1,Mb,Ne,Ka,G1,Tm,X1,Y1,Ja,Z1,qp,eT,tT,oT,Bo,Ga,nT,ym,sT,rT,Xa,jp,aT,wm,iT,lT,Cp,dT,$m,cT,pT,ks,Ya,hT,Za,mT,Fm,fT,uT,gT,It,ei,_T,xm,bT,kT,vs,vT,Go,TT,Bm,yT,wT,Em,$T,FT,xT,Np,ti,Pb,Xo,Ts,zm,oi,BT,Mm,ET,qb,rt,ni,zT,si,MT,Pm,PT,qT,jT,ri,CT,Op,NT,OT,IT,Eo,ai,AT,qm,LT,DT,ii,Ip,ST,jm,UT,WT,Ap,HT,Cm,RT,QT,At,li,VT,Nm,KT,JT,ys,GT,Yo,XT,Om,YT,ZT,Im,ey,ty,jb,Zo,ws,Am,di,oy,Lm,ny,Cb,at,ci,sy,en,ry,Dm,ay,iy,Sm,ly,dy,cy,pi,py,Um,hy,my,fy,zo,hi,uy,mi,gy,Wm,_y,by,ky,$s,vy,Mo,fi,Ty,tn,yy,Hm,wy,$y,Rm,Fy,xy,By,Fs,Nb,on,xs,Qm,ui,Ey,Vm,zy,Ob,nn,gi,My,_i,Py,Lp,qy,jy,Ib,sn,bi,Cy,ki,Ny,Dp,Oy,Iy,Ab,mo,vi,Ay,Ti,Ly,Sp,Dy,Sy,Uy,Bs,yi,Wy,Km,Hy,Lb,rn,Es,Jm,wi,Ry,Gm,Qy,Db,Oe,$i,Vy,Xm,Ky,Jy,Fi,Gy,Up,Xy,Yy,Zy,xi,ew,Bi,tw,ow,nw,Ei,sw,zi,rw,aw,iw,Ke,lw,Ym,dw,cw,Zm,pw,hw,ef,mw,fw,tf,uw,gw,of,_w,bw,nf,kw,vw,Tw,Lt,Mi,yw,an,ww,Wp,$w,Fw,sf,xw,Bw,Ew,zs,zw,Ms,Sb,ln,Ps,rf,Pi,Mw,af,Pw,Ub,it,qi,qw,dn,jw,lf,Cw,Nw,df,Ow,Iw,Aw,ji,Lw,Hp,Dw,Sw,Uw,Ci,Ww,Ni,Hw,Rw,Qw,Dt,Oi,Vw,cn,Kw,Rp,Jw,Gw,cf,Xw,Yw,Zw,qs,e$,js,Wb,pn,Cs,pf,Ii,t$,hf,o$,Hb,lt,Ai,n$,Li,s$,mf,r$,a$,i$,Di,l$,Qp,d$,c$,p$,Si,h$,Ui,m$,f$,u$,St,Wi,g$,hn,_$,Vp,b$,k$,ff,v$,T$,y$,Ns,w$,Os,Rb,mn,Is,uf,Hi,$$,gf,F$,Qb,dt,Ri,x$,Qi,B$,_f,E$,z$,M$,Vi,P$,Kp,q$,j$,C$,Ki,N$,Ji,O$,I$,A$,ut,Gi,L$,fn,D$,Jp,S$,U$,bf,W$,H$,R$,As,Q$,Ls,V$,Ds,Vb,un,Ss,kf,Xi,K$,vf,J$,Kb,ct,Yi,G$,Zi,X$,Tf,Y$,Z$,e2,el,t2,Gp,o2,n2,s2,tl,r2,ol,a2,i2,l2,Ut,nl,d2,gn,c2,Xp,p2,h2,yf,m2,f2,u2,Us,g2,Ws,Jb,_n,Hs,wf,sl,_2,$f,b2,Gb,pt,rl,k2,Ff,v2,T2,al,y2,Yp,w2,$2,F2,il,x2,ll,B2,E2,z2,Ve,dl,M2,bn,P2,Zp,q2,j2,xf,C2,N2,O2,Rs,I2,Qs,A2,Vs,L2,Ks,D2,Js,Xb,kn,Gs,Bf,cl,S2,Ef,U2,Yb,ht,pl,W2,zf,H2,R2,hl,Q2,eh,V2,K2,J2,ml,G2,fl,X2,Y2,Z2,Wt,ul,eF,vn,tF,th,oF,nF,Mf,sF,rF,aF,Xs,iF,Ys,Zb,Tn,Zs,Pf,gl,lF,qf,dF,ek,mt,_l,cF,jf,pF,hF,bl,mF,oh,fF,uF,gF,kl,_F,vl,bF,kF,vF,gt,Tl,TF,yn,yF,nh,wF,$F,Cf,FF,xF,BF,er,EF,tr,zF,or,tk,wn,nr,Nf,yl,MF,Of,PF,ok,ft,wl,qF,$n,jF,If,CF,NF,Af,OF,IF,AF,$l,LF,sh,DF,SF,UF,Fl,WF,xl,HF,RF,QF,_t,Bl,VF,Fn,KF,rh,JF,GF,Lf,XF,YF,ZF,sr,ex,rr,tx,ar,nk,xn,ir,Df,El,ox,Sf,nx,sk,Je,zl,sx,Uf,rx,ax,Ml,ix,ah,lx,dx,cx,Pl,px,ql,hx,mx,fx,lr,ux,Ht,jl,gx,Bn,_x,ih,bx,kx,Wf,vx,Tx,yx,dr,wx,cr,rk,En,pr,Hf,Cl,$x,Rf,Fx,ak,Ge,Nl,xx,zn,Bx,Qf,Ex,zx,Vf,Mx,Px,qx,Ol,jx,lh,Cx,Nx,Ox,Il,Ix,Al,Ax,Lx,Dx,hr,Sx,Rt,Ll,Ux,Mn,Wx,dh,Hx,Rx,Kf,Qx,Vx,Kx,mr,Jx,fr,ik,Pn,ur,Jf,Dl,Gx,Gf,Xx,lk,qn,Sl,Yx,bt,Ul,Zx,Ie,e0,Xf,t0,o0,Yf,n0,s0,Zf,r0,a0,eu,i0,l0,tu,d0,c0,ou,p0,h0,nu,m0,f0,u0,Wl,Hl,g0,su,_0,b0,k0,Rl,v0,ru,T0,y0,w0,G,$0,au,F0,x0,iu,B0,E0,lu,z0,M0,du,P0,q0,cu,j0,C0,pu,N0,O0,hu,I0,A0,mu,L0,D0,fu,S0,U0,uu,W0,H0,gu,R0,Q0,_u,V0,K0,bu,J0,G0,ku,X0,Y0,vu,Z0,e4,Tu,t4,o4,yu,n4,s4,wu,r4,a4,$u,i4,l4,Fu,d4,c4,p4,gr,dk,jn,_r,xu,Ql,h4,Bu,m4,ck,Xe,Vl,f4,Kl,u4,Eu,g4,_4,b4,Jl,k4,ch,v4,T4,y4,Gl,w4,Xl,$4,F4,x4,br,B4,kt,Yl,E4,Cn,z4,ph,M4,P4,zu,q4,j4,C4,kr,N4,vr,O4,Tr,pk,Nn,yr,Mu,Zl,I4,Pu,A4,hk,Ye,ed,L4,td,D4,qu,S4,U4,W4,od,H4,hh,R4,Q4,V4,nd,K4,sd,J4,G4,X4,wr,Y4,Qt,rd,Z4,On,eB,mh,tB,oB,ju,nB,sB,rB,$r,aB,Fr,mk,In,xr,Cu,ad,iB,Nu,lB,fk,Ze,id,dB,Ou,cB,pB,ld,hB,fh,mB,fB,uB,dd,gB,cd,_B,bB,kB,Br,vB,vt,pd,TB,An,yB,uh,wB,$B,Iu,FB,xB,BB,Er,EB,zr,zB,Mr,uk,Ln,Pr,Au,hd,MB,Lu,PB,gk,et,md,qB,Du,jB,CB,fd,NB,gh,OB,IB,AB,ud,LB,gd,DB,SB,UB,qr,WB,Vt,_d,HB,Dn,RB,_h,QB,VB,Su,KB,JB,GB,jr,XB,Cr,_k,Sn,Nr,Uu,bd,YB,Wu,ZB,bk,tt,kd,eE,Hu,tE,oE,vd,nE,bh,sE,rE,aE,Td,iE,yd,lE,dE,cE,Or,pE,Tt,wd,hE,Un,mE,kh,fE,uE,Ru,gE,_E,bE,Ir,kE,Ar,vE,Lr,kk,Wn,Dr,Qu,$d,TE,Vu,yE,vk,ot,Fd,wE,Hn,$E,Ku,FE,xE,Ju,BE,EE,zE,xd,ME,vh,PE,qE,jE,Bd,CE,Ed,NE,OE,IE,Sr,AE,yt,zd,LE,Rn,DE,Th,SE,UE,Gu,WE,HE,RE,Ur,QE,Wr,VE,Hr,Tk,Qn,Rr,Xu,Md,KE,Yu,JE,yk,Ae,Pd,GE,Zu,XE,YE,qd,ZE,yh,ez,tz,oz,jd,nz,Cd,sz,rz,az,eg,iz,lz,fo,tg,Nd,dz,cz,og,Od,pz,hz,ng,Id,mz,fz,sg,Ad,uz,gz,Kt,Ld,_z,Vn,bz,rg,kz,vz,ag,Tz,yz,wz,Qr,$z,Vr,wk,Kn,Kr,ig,Dd,Fz,lg,xz,$k,Le,Sd,Bz,Jn,Ez,dg,zz,Mz,cg,Pz,qz,jz,Ud,Cz,wh,Nz,Oz,Iz,Wd,Az,Hd,Lz,Dz,Sz,pg,Uz,Wz,uo,hg,Rd,Hz,Rz,mg,Qd,Qz,Vz,fg,Vd,Kz,Jz,ug,Kd,Gz,Xz,Jt,Jd,Yz,Gn,Zz,gg,eM,tM,_g,oM,nM,sM,Jr,rM,Gr,Fk,Xn,Xr,bg,Gd,aM,kg,iM,xk,De,Xd,lM,vg,dM,cM,Yd,pM,$h,hM,mM,fM,Zd,uM,ec,gM,_M,bM,Tg,kM,vM,go,yg,tc,TM,yM,wg,oc,wM,$M,$g,nc,FM,xM,Fg,sc,BM,EM,Gt,rc,zM,Yn,MM,xg,PM,qM,Bg,jM,CM,NM,Yr,OM,Zr,Bk,Zn,ea,Eg,ac,IM,zg,AM,Ek,Se,ic,LM,lc,DM,Mg,SM,UM,WM,dc,HM,Fh,RM,QM,VM,cc,KM,pc,JM,GM,XM,Pg,YM,ZM,_o,qg,hc,eP,tP,jg,mc,oP,nP,Cg,fc,sP,rP,Ng,uc,aP,iP,Xt,gc,lP,es,dP,Og,cP,pP,Ig,hP,mP,fP,ta,uP,oa,zk,ts,na,Ag,_c,gP,Lg,_P,Mk,Ue,bc,bP,kc,kP,Dg,vP,TP,yP,vc,wP,xh,$P,FP,xP,Tc,BP,yc,EP,zP,MP,Sg,PP,qP,bo,Ug,wc,jP,CP,Wg,$c,NP,OP,Hg,Fc,IP,AP,Rg,xc,LP,DP,Yt,Bc,SP,os,UP,Qg,WP,HP,Vg,RP,QP,VP,sa,KP,ra,Pk,ns,aa,Kg,Ec,JP,Jg,GP,qk,We,zc,XP,Gg,YP,ZP,Mc,eq,Bh,tq,oq,nq,Pc,sq,qc,rq,aq,iq,Xg,lq,dq,ko,Yg,jc,cq,pq,Zg,Cc,hq,mq,e_,Nc,fq,uq,t_,Oc,gq,_q,Zt,Ic,bq,ss,kq,o_,vq,Tq,n_,yq,wq,$q,ia,Fq,la,jk,rs,da,s_,Ac,xq,r_,Bq,Ck,He,Lc,Eq,a_,zq,Mq,Dc,Pq,Eh,qq,jq,Cq,Sc,Nq,Uc,Oq,Iq,Aq,i_,Lq,Dq,vo,l_,Wc,Sq,Uq,d_,Hc,Wq,Hq,c_,Rc,Rq,Qq,p_,Qc,Vq,Kq,eo,Vc,Jq,as,Gq,h_,Xq,Yq,m_,Zq,ej,tj,ca,oj,pa,Nk,is,ha,f_,Kc,nj,u_,sj,Ok,Re,Jc,rj,g_,aj,ij,Gc,lj,zh,dj,cj,pj,Xc,hj,Yc,mj,fj,uj,__,gj,_j,To,b_,Zc,bj,kj,k_,ep,vj,Tj,v_,tp,yj,wj,T_,op,$j,Fj,to,np,xj,ls,Bj,y_,Ej,zj,w_,Mj,Pj,qj,ma,jj,fa,Ik,ds,ua,$_,sp,Cj,F_,Nj,Ak,Qe,rp,Oj,cs,Ij,x_,Aj,Lj,B_,Dj,Sj,Uj,ap,Wj,Mh,Hj,Rj,Qj,ip,Vj,lp,Kj,Jj,Gj,E_,Xj,Yj,yo,z_,dp,Zj,e3,M_,cp,t3,o3,P_,pp,n3,s3,q_,hp,r3,a3,oo,mp,i3,ps,l3,j_,d3,c3,C_,p3,h3,m3,ga,f3,_a,Lk;return l=new $e({}),re=new $e({}),ze=new $e({}),Ra=new C({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.BertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/configuration_bert.py#L72"}}),_s=new ee({props:{anchor:"transformers.BertConfig.example",$$slots:{default:[K7]},$$scope:{ctx:B}}}),Va=new $e({}),Ka=new C({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/tokenization_bert.py#L137"}}),Ga=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ya=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ei=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/tokenization_bert.py#L321",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vs=new ee({props:{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[J7]},$$scope:{ctx:B}}}),ti=new C({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/tokenization_bert.py#L350"}}),oi=new $e({}),ni=new C({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/tokenization_bert_fast.py#L161"}}),ai=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/tokenization_bert_fast.py#L249",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),li=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/tokenization_bert_fast.py#L273",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ys=new ee({props:{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[G7]},$$scope:{ctx:B}}}),di=new $e({}),ci=new C({props:{name:"class transformers.TFBertTokenizer",anchor:"transformers.TFBertTokenizer",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.vocab_list",description:`<strong>vocab_list</strong> (<code>list</code>) &#x2014;
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
Whether to return the attention_mask.`,name:"return_attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/tokenization_bert_tf.py#L11"}}),hi=new C({props:{name:"from_pretrained",anchor:"transformers.TFBertTokenizer.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"*init_inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
The name or path to the pre-trained tokenizer.`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/tokenization_bert_tf.py#L113"}}),$s=new ee({props:{anchor:"transformers.TFBertTokenizer.from_pretrained.example",$$slots:{default:[X7]},$$scope:{ctx:B}}}),fi=new C({props:{name:"from_tokenizer",anchor:"transformers.TFBertTokenizer.from_tokenizer",parameters:[{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.from_tokenizer.tokenizer",description:`<strong>tokenizer</strong> (<code>PreTrainedTokenizerBase</code>) &#x2014;
The tokenizer to use to initialize the <code>TFBertTokenizer</code>.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/tokenization_bert_tf.py#L83"}}),Fs=new ee({props:{anchor:"transformers.TFBertTokenizer.from_tokenizer.example",$$slots:{default:[Y7]},$$scope:{ctx:B}}}),ui=new $e({}),gi=new C({props:{name:"class transformers.models.bert.modeling_bert.BertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L767"}}),bi=new C({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L925"}}),vi=new C({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L64"}}),yi=new C({props:{name:"replace",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/flax/struct.py#L108"}}),wi=new $e({}),$i=new C({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L870"}}),Mi=new C({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L909",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zs=new we({props:{$$slots:{default:[Z7]},$$scope:{ctx:B}}}),Ms=new ee({props:{anchor:"transformers.BertModel.forward.example",$$slots:{default:[eO]},$$scope:{ctx:B}}}),Pi=new $e({}),qi=new C({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L1053"}}),Oi=new C({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L1069",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qs=new we({props:{$$slots:{default:[tO]},$$scope:{ctx:B}}}),js=new ee({props:{anchor:"transformers.BertForPreTraining.forward.example",$$slots:{default:[oO]},$$scope:{ctx:B}}}),Ii=new $e({}),Ai=new C({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L1157"}}),Wi=new C({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertLMHeadModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L1180",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ns=new we({props:{$$slots:{default:[nO]},$$scope:{ctx:B}}}),Os=new ee({props:{anchor:"transformers.BertLMHeadModel.forward.example",$$slots:{default:[sO]},$$scope:{ctx:B}}}),Hi=new $e({}),Ri=new C({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L1292"}}),Gi=new C({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L1318",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),As=new we({props:{$$slots:{default:[rO]},$$scope:{ctx:B}}}),Ls=new ee({props:{anchor:"transformers.BertForMaskedLM.forward.example",$$slots:{default:[aO]},$$scope:{ctx:B}}}),Ds=new ee({props:{anchor:"transformers.BertForMaskedLM.forward.example-2",$$slots:{default:[iO]},$$scope:{ctx:B}}}),Xi=new $e({}),Yi=new C({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L1405"}}),nl=new C({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L1415",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Us=new we({props:{$$slots:{default:[lO]},$$scope:{ctx:B}}}),Ws=new ee({props:{anchor:"transformers.BertForNextSentencePrediction.forward.example",$$slots:{default:[dO]},$$scope:{ctx:B}}}),sl=new $e({}),rl=new C({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L1510"}}),dl=new C({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L1526",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rs=new we({props:{$$slots:{default:[cO]},$$scope:{ctx:B}}}),Qs=new ee({props:{anchor:"transformers.BertForSequenceClassification.forward.example",$$slots:{default:[pO]},$$scope:{ctx:B}}}),Vs=new ee({props:{anchor:"transformers.BertForSequenceClassification.forward.example-2",$$slots:{default:[hO]},$$scope:{ctx:B}}}),Ks=new ee({props:{anchor:"transformers.BertForSequenceClassification.forward.example-3",$$slots:{default:[mO]},$$scope:{ctx:B}}}),Js=new ee({props:{anchor:"transformers.BertForSequenceClassification.forward.example-4",$$slots:{default:[fO]},$$scope:{ctx:B}}}),cl=new $e({}),pl=new C({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L1614"}}),ul=new C({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L1628",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xs=new we({props:{$$slots:{default:[uO]},$$scope:{ctx:B}}}),Ys=new ee({props:{anchor:"transformers.BertForMultipleChoice.forward.example",$$slots:{default:[gO]},$$scope:{ctx:B}}}),gl=new $e({}),_l=new C({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L1709"}}),Tl=new C({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L1727",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),er=new we({props:{$$slots:{default:[_O]},$$scope:{ctx:B}}}),tr=new ee({props:{anchor:"transformers.BertForTokenClassification.forward.example",$$slots:{default:[bO]},$$scope:{ctx:B}}}),or=new ee({props:{anchor:"transformers.BertForTokenClassification.forward.example-2",$$slots:{default:[kO]},$$scope:{ctx:B}}}),yl=new $e({}),wl=new C({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L1796"}}),Bl=new C({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_bert.py#L1810",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sr=new we({props:{$$slots:{default:[vO]},$$scope:{ctx:B}}}),rr=new ee({props:{anchor:"transformers.BertForQuestionAnswering.forward.example",$$slots:{default:[TO]},$$scope:{ctx:B}}}),ar=new ee({props:{anchor:"transformers.BertForQuestionAnswering.forward.example-2",$$slots:{default:[yO]},$$scope:{ctx:B}}}),El=new $e({}),zl=new C({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1052"}}),lr=new we({props:{$$slots:{default:[wO]},$$scope:{ctx:B}}}),jl=new C({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1058",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),dr=new we({props:{$$slots:{default:[$O]},$$scope:{ctx:B}}}),cr=new ee({props:{anchor:"transformers.TFBertModel.call.example",$$slots:{default:[FO]},$$scope:{ctx:B}}}),Cl=new $e({}),Nl=new C({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1149"}}),hr=new we({props:{$$slots:{default:[xO]},$$scope:{ctx:B}}}),Ll=new C({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1171",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mr=new we({props:{$$slots:{default:[BO]},$$scope:{ctx:B}}}),fr=new ee({props:{anchor:"transformers.TFBertForPreTraining.call.example",$$slots:{default:[EO]},$$scope:{ctx:B}}}),Dl=new $e({}),Sl=new C({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1358"}}),Ul=new C({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1395",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gr=new ee({props:{anchor:"transformers.TFBertLMHeadModel.call.example",$$slots:{default:[zO]},$$scope:{ctx:B}}}),Ql=new $e({}),Vl=new C({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1266"}}),br=new we({props:{$$slots:{default:[MO]},$$scope:{ctx:B}}}),Yl=new C({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1294",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),kr=new we({props:{$$slots:{default:[PO]},$$scope:{ctx:B}}}),vr=new ee({props:{anchor:"transformers.TFBertForMaskedLM.call.example",$$slots:{default:[qO]},$$scope:{ctx:B}}}),Tr=new ee({props:{anchor:"transformers.TFBertForMaskedLM.call.example-2",$$slots:{default:[jO]},$$scope:{ctx:B}}}),Zl=new $e({}),ed=new C({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1508"}}),wr=new we({props:{$$slots:{default:[CO]},$$scope:{ctx:B}}}),rd=new C({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1518",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$r=new we({props:{$$slots:{default:[NO]},$$scope:{ctx:B}}}),Fr=new ee({props:{anchor:"transformers.TFBertForNextSentencePrediction.call.example",$$slots:{default:[OO]},$$scope:{ctx:B}}}),ad=new $e({}),id=new C({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1599"}}),Br=new we({props:{$$slots:{default:[IO]},$$scope:{ctx:B}}}),pd=new C({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1620",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Er=new we({props:{$$slots:{default:[AO]},$$scope:{ctx:B}}}),zr=new ee({props:{anchor:"transformers.TFBertForSequenceClassification.call.example",$$slots:{default:[LO]},$$scope:{ctx:B}}}),Mr=new ee({props:{anchor:"transformers.TFBertForSequenceClassification.call.example-2",$$slots:{default:[DO]},$$scope:{ctx:B}}}),hd=new $e({}),md=new C({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1692"}}),qr=new we({props:{$$slots:{default:[SO]},$$scope:{ctx:B}}}),_d=new C({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1716",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),jr=new we({props:{$$slots:{default:[UO]},$$scope:{ctx:B}}}),Cr=new ee({props:{anchor:"transformers.TFBertForMultipleChoice.call.example",$$slots:{default:[WO]},$$scope:{ctx:B}}}),bd=new $e({}),kd=new C({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1822"}}),Or=new we({props:{$$slots:{default:[HO]},$$scope:{ctx:B}}}),wd=new C({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1849",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ir=new we({props:{$$slots:{default:[RO]},$$scope:{ctx:B}}}),Ar=new ee({props:{anchor:"transformers.TFBertForTokenClassification.call.example",$$slots:{default:[QO]},$$scope:{ctx:B}}}),Lr=new ee({props:{anchor:"transformers.TFBertForTokenClassification.call.example-2",$$slots:{default:[VO]},$$scope:{ctx:B}}}),$d=new $e({}),Fd=new C({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1919"}}),Sr=new we({props:{$$slots:{default:[KO]},$$scope:{ctx:B}}}),zd=new C({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_tf_bert.py#L1941",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ur=new we({props:{$$slots:{default:[JO]},$$scope:{ctx:B}}}),Wr=new ee({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example",$$slots:{default:[GO]},$$scope:{ctx:B}}}),Hr=new ee({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example-2",$$slots:{default:[XO]},$$scope:{ctx:B}}}),Md=new $e({}),Pd=new C({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L1028"}}),Ld=new C({props:{name:"__call__",anchor:"transformers.FlaxBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qr=new we({props:{$$slots:{default:[YO]},$$scope:{ctx:B}}}),Vr=new ee({props:{anchor:"transformers.FlaxBertModel.__call__.example",$$slots:{default:[ZO]},$$scope:{ctx:B}}}),Dd=new $e({}),Sd=new C({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L1106"}}),Jd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jr=new we({props:{$$slots:{default:[eI]},$$scope:{ctx:B}}}),Gr=new ee({props:{anchor:"transformers.FlaxBertForPreTraining.__call__.example",$$slots:{default:[tI]},$$scope:{ctx:B}}}),Gd=new $e({}),Xd=new C({props:{name:"class transformers.FlaxBertForCausalLM",anchor:"transformers.FlaxBertForCausalLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L1683"}}),rc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yr=new we({props:{$$slots:{default:[oI]},$$scope:{ctx:B}}}),Zr=new ee({props:{anchor:"transformers.FlaxBertForCausalLM.__call__.example",$$slots:{default:[nI]},$$scope:{ctx:B}}}),ac=new $e({}),ic=new C({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L1197"}}),gc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ta=new we({props:{$$slots:{default:[sI]},$$scope:{ctx:B}}}),oa=new ee({props:{anchor:"transformers.FlaxBertForMaskedLM.__call__.example",$$slots:{default:[rI]},$$scope:{ctx:B}}}),_c=new $e({}),bc=new C({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L1263"}}),Bc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForNextSentencePrediction.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sa=new we({props:{$$slots:{default:[aI]},$$scope:{ctx:B}}}),ra=new ee({props:{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.example",$$slots:{default:[iI]},$$scope:{ctx:B}}}),Ec=new $e({}),zc=new C({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L1366"}}),Ic=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ia=new we({props:{$$slots:{default:[lI]},$$scope:{ctx:B}}}),la=new ee({props:{anchor:"transformers.FlaxBertForSequenceClassification.__call__.example",$$slots:{default:[dI]},$$scope:{ctx:B}}}),Ac=new $e({}),Lc=new C({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L1447"}}),Vc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ca=new we({props:{$$slots:{default:[cI]},$$scope:{ctx:B}}}),pa=new ee({props:{anchor:"transformers.FlaxBertForMultipleChoice.__call__.example",$$slots:{default:[pI]},$$scope:{ctx:B}}}),Kc=new $e({}),Jc=new C({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L1525"}}),np=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ma=new we({props:{$$slots:{default:[hI]},$$scope:{ctx:B}}}),fa=new ee({props:{anchor:"transformers.FlaxBertForTokenClassification.__call__.example",$$slots:{default:[mI]},$$scope:{ctx:B}}}),sp=new $e({}),rp=new C({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L1598"}}),mp=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ga=new we({props:{$$slots:{default:[fI]},$$scope:{ctx:B}}}),_a=new ee({props:{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.example",$$slots:{default:[uI]},$$scope:{ctx:B}}}),{c(){d=r("meta"),_=c(),m=r("h1"),h=r("a"),g=r("span"),T(l.$$.fragment),f=c(),E=r("span"),be=n("BERT"),X=c(),M=r("h2"),ne=r("a"),L=r("span"),T(re.$$.fragment),ke=c(),D=r("span"),ve=n("Overview"),me=c(),J=r("p"),O=n("The BERT model was proposed in "),ae=r("a"),Y=n("BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),P=n(` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),j=c(),ie=r("p"),H=n("The abstract from the paper is the following:"),fe=c(),le=r("p"),S=r("em"),Te=n(`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),ue=c(),q=r("p"),ce=r("em"),R=n(`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),ge=c(),de=r("p"),Q=n("Tips:"),_e=c(),se=r("ul"),N=r("li"),ye=n(`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),V=c(),pe=r("li"),v=n(`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),z=c(),K=r("p"),Me=n("This model was contributed by "),Be=r("a"),I=n("thomwolf"),Pe=n(". The original code can be found "),Ee=r("a"),qe=n("here"),A=n("."),W=c(),Fe=r("h2"),xe=r("a"),U=r("span"),T(ze.$$.fragment),je=c(),he=r("span"),Ce=n("BertConfig"),Eb=c(),Nt=r("div"),T(Ra.$$.fragment),j1=c(),ho=r("p"),C1=n("This is the configuration class to store the configuration of a "),Ep=r("a"),N1=n("BertModel"),O1=n(" or a "),zp=r("a"),I1=n("TFBertModel"),A1=n(`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Qa=r("a"),L1=n("bert-base-uncased"),D1=n(" architecture."),S1=c(),Ko=r("p"),U1=n("Configuration objects inherit from "),Mp=r("a"),W1=n("PretrainedConfig"),H1=n(` and can be used to control the model outputs. Read the
documentation from `),Pp=r("a"),R1=n("PretrainedConfig"),Q1=n(" for more information."),V1=c(),T(_s.$$.fragment),zb=c(),Jo=r("h2"),bs=r("a"),km=r("span"),T(Va.$$.fragment),K1=c(),vm=r("span"),J1=n("BertTokenizer"),Mb=c(),Ne=r("div"),T(Ka.$$.fragment),G1=c(),Tm=r("p"),X1=n("Construct a BERT tokenizer. Based on WordPiece."),Y1=c(),Ja=r("p"),Z1=n("This tokenizer inherits from "),qp=r("a"),eT=n("PreTrainedTokenizer"),tT=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),oT=c(),Bo=r("div"),T(Ga.$$.fragment),nT=c(),ym=r("p"),sT=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),rT=c(),Xa=r("ul"),jp=r("li"),aT=n("single sequence: "),wm=r("code"),iT=n("[CLS] X [SEP]"),lT=c(),Cp=r("li"),dT=n("pair of sequences: "),$m=r("code"),cT=n("[CLS] A [SEP] B [SEP]"),pT=c(),ks=r("div"),T(Ya.$$.fragment),hT=c(),Za=r("p"),mT=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Fm=r("code"),fT=n("prepare_for_model"),uT=n(" method."),gT=c(),It=r("div"),T(ei.$$.fragment),_T=c(),xm=r("p"),bT=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),kT=c(),T(vs.$$.fragment),vT=c(),Go=r("p"),TT=n("If "),Bm=r("code"),yT=n("token_ids_1"),wT=n(" is "),Em=r("code"),$T=n("None"),FT=n(", this method only returns the first portion of the mask (0s)."),xT=c(),Np=r("div"),T(ti.$$.fragment),Pb=c(),Xo=r("h2"),Ts=r("a"),zm=r("span"),T(oi.$$.fragment),BT=c(),Mm=r("span"),ET=n("BertTokenizerFast"),qb=c(),rt=r("div"),T(ni.$$.fragment),zT=c(),si=r("p"),MT=n("Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Pm=r("em"),PT=n("tokenizers"),qT=n(" library). Based on WordPiece."),jT=c(),ri=r("p"),CT=n("This tokenizer inherits from "),Op=r("a"),NT=n("PreTrainedTokenizerFast"),OT=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),IT=c(),Eo=r("div"),T(ai.$$.fragment),AT=c(),qm=r("p"),LT=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),DT=c(),ii=r("ul"),Ip=r("li"),ST=n("single sequence: "),jm=r("code"),UT=n("[CLS] X [SEP]"),WT=c(),Ap=r("li"),HT=n("pair of sequences: "),Cm=r("code"),RT=n("[CLS] A [SEP] B [SEP]"),QT=c(),At=r("div"),T(li.$$.fragment),VT=c(),Nm=r("p"),KT=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),JT=c(),T(ys.$$.fragment),GT=c(),Yo=r("p"),XT=n("If "),Om=r("code"),YT=n("token_ids_1"),ZT=n(" is "),Im=r("code"),ey=n("None"),ty=n(", this method only returns the first portion of the mask (0s)."),jb=c(),Zo=r("h2"),ws=r("a"),Am=r("span"),T(di.$$.fragment),oy=c(),Lm=r("span"),ny=n("TFBertTokenizer"),Cb=c(),at=r("div"),T(ci.$$.fragment),sy=c(),en=r("p"),ry=n(`This is an in-graph tokenizer for BERT. It should be initialized similarly to other tokenizers, using the
`),Dm=r("code"),ay=n("from_pretrained()"),iy=n(" method. It can also be initialized with the "),Sm=r("code"),ly=n("from_tokenizer()"),dy=n(` method, which imports settings
from an existing standard tokenizer object.`),cy=c(),pi=r("p"),py=n(`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. As a result, they have somewhat more limited options
than standard tokenizer classes. They are most useful when you want to create an end-to-end model that goes
straight from `),Um=r("code"),hy=n("tf.string"),my=n(" inputs to outputs."),fy=c(),zo=r("div"),T(hi.$$.fragment),uy=c(),mi=r("p"),gy=n("Instantiate a "),Wm=r("code"),_y=n("TFBertTokenizer"),by=n(" from a pre-trained tokenizer."),ky=c(),T($s.$$.fragment),vy=c(),Mo=r("div"),T(fi.$$.fragment),Ty=c(),tn=r("p"),yy=n("Initialize a "),Hm=r("code"),wy=n("TFBertTokenizer"),$y=n(" from an existing "),Rm=r("code"),Fy=n("Tokenizer"),xy=n("."),By=c(),T(Fs.$$.fragment),Nb=c(),on=r("h2"),xs=r("a"),Qm=r("span"),T(ui.$$.fragment),Ey=c(),Vm=r("span"),zy=n("Bert specific outputs"),Ob=c(),nn=r("div"),T(gi.$$.fragment),My=c(),_i=r("p"),Py=n("Output type of "),Lp=r("a"),qy=n("BertForPreTraining"),jy=n("."),Ib=c(),sn=r("div"),T(bi.$$.fragment),Cy=c(),ki=r("p"),Ny=n("Output type of "),Dp=r("a"),Oy=n("TFBertForPreTraining"),Iy=n("."),Ab=c(),mo=r("div"),T(vi.$$.fragment),Ay=c(),Ti=r("p"),Ly=n("Output type of "),Sp=r("a"),Dy=n("BertForPreTraining"),Sy=n("."),Uy=c(),Bs=r("div"),T(yi.$$.fragment),Wy=c(),Km=r("p"),Hy=n("\u201CReturns a new object replacing the specified fields with new values."),Lb=c(),rn=r("h2"),Es=r("a"),Jm=r("span"),T(wi.$$.fragment),Ry=c(),Gm=r("span"),Qy=n("BertModel"),Db=c(),Oe=r("div"),T($i.$$.fragment),Vy=c(),Xm=r("p"),Ky=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Jy=c(),Fi=r("p"),Gy=n("This model inherits from "),Up=r("a"),Xy=n("PreTrainedModel"),Yy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zy=c(),xi=r("p"),ew=n("This model is also a PyTorch "),Bi=r("a"),tw=n("torch.nn.Module"),ow=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nw=c(),Ei=r("p"),sw=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),zi=r("a"),rw=n(`Attention is
all you need`),aw=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),iw=c(),Ke=r("p"),lw=n("To behave as an decoder the model needs to be initialized with the "),Ym=r("code"),dw=n("is_decoder"),cw=n(` argument of the configuration set
to `),Zm=r("code"),pw=n("True"),hw=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),ef=r("code"),mw=n("is_decoder"),fw=n(` argument and
`),tf=r("code"),uw=n("add_cross_attention"),gw=n(" set to "),of=r("code"),_w=n("True"),bw=n("; an "),nf=r("code"),kw=n("encoder_hidden_states"),vw=n(" is then expected as an input to the forward pass."),Tw=c(),Lt=r("div"),T(Mi.$$.fragment),yw=c(),an=r("p"),ww=n("The "),Wp=r("a"),$w=n("BertModel"),Fw=n(" forward method, overrides the "),sf=r("code"),xw=n("__call__"),Bw=n(" special method."),Ew=c(),T(zs.$$.fragment),zw=c(),T(Ms.$$.fragment),Sb=c(),ln=r("h2"),Ps=r("a"),rf=r("span"),T(Pi.$$.fragment),Mw=c(),af=r("span"),Pw=n("BertForPreTraining"),Ub=c(),it=r("div"),T(qi.$$.fragment),qw=c(),dn=r("p"),jw=n("Bert Model with two heads on top as done during the pretraining: a "),lf=r("code"),Cw=n("masked language modeling"),Nw=n(" head and a "),df=r("code"),Ow=n("next sentence prediction (classification)"),Iw=n(" head."),Aw=c(),ji=r("p"),Lw=n("This model inherits from "),Hp=r("a"),Dw=n("PreTrainedModel"),Sw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uw=c(),Ci=r("p"),Ww=n("This model is also a PyTorch "),Ni=r("a"),Hw=n("torch.nn.Module"),Rw=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qw=c(),Dt=r("div"),T(Oi.$$.fragment),Vw=c(),cn=r("p"),Kw=n("The "),Rp=r("a"),Jw=n("BertForPreTraining"),Gw=n(" forward method, overrides the "),cf=r("code"),Xw=n("__call__"),Yw=n(" special method."),Zw=c(),T(qs.$$.fragment),e$=c(),T(js.$$.fragment),Wb=c(),pn=r("h2"),Cs=r("a"),pf=r("span"),T(Ii.$$.fragment),t$=c(),hf=r("span"),o$=n("BertLMHeadModel"),Hb=c(),lt=r("div"),T(Ai.$$.fragment),n$=c(),Li=r("p"),s$=n("Bert Model with a "),mf=r("code"),r$=n("language modeling"),a$=n(" head on top for CLM fine-tuning."),i$=c(),Di=r("p"),l$=n("This model inherits from "),Qp=r("a"),d$=n("PreTrainedModel"),c$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),p$=c(),Si=r("p"),h$=n("This model is also a PyTorch "),Ui=r("a"),m$=n("torch.nn.Module"),f$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),u$=c(),St=r("div"),T(Wi.$$.fragment),g$=c(),hn=r("p"),_$=n("The "),Vp=r("a"),b$=n("BertLMHeadModel"),k$=n(" forward method, overrides the "),ff=r("code"),v$=n("__call__"),T$=n(" special method."),y$=c(),T(Ns.$$.fragment),w$=c(),T(Os.$$.fragment),Rb=c(),mn=r("h2"),Is=r("a"),uf=r("span"),T(Hi.$$.fragment),$$=c(),gf=r("span"),F$=n("BertForMaskedLM"),Qb=c(),dt=r("div"),T(Ri.$$.fragment),x$=c(),Qi=r("p"),B$=n("Bert Model with a "),_f=r("code"),E$=n("language modeling"),z$=n(" head on top."),M$=c(),Vi=r("p"),P$=n("This model inherits from "),Kp=r("a"),q$=n("PreTrainedModel"),j$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),C$=c(),Ki=r("p"),N$=n("This model is also a PyTorch "),Ji=r("a"),O$=n("torch.nn.Module"),I$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),A$=c(),ut=r("div"),T(Gi.$$.fragment),L$=c(),fn=r("p"),D$=n("The "),Jp=r("a"),S$=n("BertForMaskedLM"),U$=n(" forward method, overrides the "),bf=r("code"),W$=n("__call__"),H$=n(" special method."),R$=c(),T(As.$$.fragment),Q$=c(),T(Ls.$$.fragment),V$=c(),T(Ds.$$.fragment),Vb=c(),un=r("h2"),Ss=r("a"),kf=r("span"),T(Xi.$$.fragment),K$=c(),vf=r("span"),J$=n("BertForNextSentencePrediction"),Kb=c(),ct=r("div"),T(Yi.$$.fragment),G$=c(),Zi=r("p"),X$=n("Bert Model with a "),Tf=r("code"),Y$=n("next sentence prediction (classification)"),Z$=n(" head on top."),e2=c(),el=r("p"),t2=n("This model inherits from "),Gp=r("a"),o2=n("PreTrainedModel"),n2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),s2=c(),tl=r("p"),r2=n("This model is also a PyTorch "),ol=r("a"),a2=n("torch.nn.Module"),i2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),l2=c(),Ut=r("div"),T(nl.$$.fragment),d2=c(),gn=r("p"),c2=n("The "),Xp=r("a"),p2=n("BertForNextSentencePrediction"),h2=n(" forward method, overrides the "),yf=r("code"),m2=n("__call__"),f2=n(" special method."),u2=c(),T(Us.$$.fragment),g2=c(),T(Ws.$$.fragment),Jb=c(),_n=r("h2"),Hs=r("a"),wf=r("span"),T(sl.$$.fragment),_2=c(),$f=r("span"),b2=n("BertForSequenceClassification"),Gb=c(),pt=r("div"),T(rl.$$.fragment),k2=c(),Ff=r("p"),v2=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),T2=c(),al=r("p"),y2=n("This model inherits from "),Yp=r("a"),w2=n("PreTrainedModel"),$2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),F2=c(),il=r("p"),x2=n("This model is also a PyTorch "),ll=r("a"),B2=n("torch.nn.Module"),E2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),z2=c(),Ve=r("div"),T(dl.$$.fragment),M2=c(),bn=r("p"),P2=n("The "),Zp=r("a"),q2=n("BertForSequenceClassification"),j2=n(" forward method, overrides the "),xf=r("code"),C2=n("__call__"),N2=n(" special method."),O2=c(),T(Rs.$$.fragment),I2=c(),T(Qs.$$.fragment),A2=c(),T(Vs.$$.fragment),L2=c(),T(Ks.$$.fragment),D2=c(),T(Js.$$.fragment),Xb=c(),kn=r("h2"),Gs=r("a"),Bf=r("span"),T(cl.$$.fragment),S2=c(),Ef=r("span"),U2=n("BertForMultipleChoice"),Yb=c(),ht=r("div"),T(pl.$$.fragment),W2=c(),zf=r("p"),H2=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),R2=c(),hl=r("p"),Q2=n("This model inherits from "),eh=r("a"),V2=n("PreTrainedModel"),K2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),J2=c(),ml=r("p"),G2=n("This model is also a PyTorch "),fl=r("a"),X2=n("torch.nn.Module"),Y2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Z2=c(),Wt=r("div"),T(ul.$$.fragment),eF=c(),vn=r("p"),tF=n("The "),th=r("a"),oF=n("BertForMultipleChoice"),nF=n(" forward method, overrides the "),Mf=r("code"),sF=n("__call__"),rF=n(" special method."),aF=c(),T(Xs.$$.fragment),iF=c(),T(Ys.$$.fragment),Zb=c(),Tn=r("h2"),Zs=r("a"),Pf=r("span"),T(gl.$$.fragment),lF=c(),qf=r("span"),dF=n("BertForTokenClassification"),ek=c(),mt=r("div"),T(_l.$$.fragment),cF=c(),jf=r("p"),pF=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hF=c(),bl=r("p"),mF=n("This model inherits from "),oh=r("a"),fF=n("PreTrainedModel"),uF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gF=c(),kl=r("p"),_F=n("This model is also a PyTorch "),vl=r("a"),bF=n("torch.nn.Module"),kF=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vF=c(),gt=r("div"),T(Tl.$$.fragment),TF=c(),yn=r("p"),yF=n("The "),nh=r("a"),wF=n("BertForTokenClassification"),$F=n(" forward method, overrides the "),Cf=r("code"),FF=n("__call__"),xF=n(" special method."),BF=c(),T(er.$$.fragment),EF=c(),T(tr.$$.fragment),zF=c(),T(or.$$.fragment),tk=c(),wn=r("h2"),nr=r("a"),Nf=r("span"),T(yl.$$.fragment),MF=c(),Of=r("span"),PF=n("BertForQuestionAnswering"),ok=c(),ft=r("div"),T(wl.$$.fragment),qF=c(),$n=r("p"),jF=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),If=r("code"),CF=n("span start logits"),NF=n(" and "),Af=r("code"),OF=n("span end logits"),IF=n(")."),AF=c(),$l=r("p"),LF=n("This model inherits from "),sh=r("a"),DF=n("PreTrainedModel"),SF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),UF=c(),Fl=r("p"),WF=n("This model is also a PyTorch "),xl=r("a"),HF=n("torch.nn.Module"),RF=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),QF=c(),_t=r("div"),T(Bl.$$.fragment),VF=c(),Fn=r("p"),KF=n("The "),rh=r("a"),JF=n("BertForQuestionAnswering"),GF=n(" forward method, overrides the "),Lf=r("code"),XF=n("__call__"),YF=n(" special method."),ZF=c(),T(sr.$$.fragment),ex=c(),T(rr.$$.fragment),tx=c(),T(ar.$$.fragment),nk=c(),xn=r("h2"),ir=r("a"),Df=r("span"),T(El.$$.fragment),ox=c(),Sf=r("span"),nx=n("TFBertModel"),sk=c(),Je=r("div"),T(zl.$$.fragment),sx=c(),Uf=r("p"),rx=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),ax=c(),Ml=r("p"),ix=n("This model inherits from "),ah=r("a"),lx=n("TFPreTrainedModel"),dx=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cx=c(),Pl=r("p"),px=n("This model is also a "),ql=r("a"),hx=n("tf.keras.Model"),mx=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fx=c(),T(lr.$$.fragment),ux=c(),Ht=r("div"),T(jl.$$.fragment),gx=c(),Bn=r("p"),_x=n("The "),ih=r("a"),bx=n("TFBertModel"),kx=n(" forward method, overrides the "),Wf=r("code"),vx=n("__call__"),Tx=n(" special method."),yx=c(),T(dr.$$.fragment),wx=c(),T(cr.$$.fragment),rk=c(),En=r("h2"),pr=r("a"),Hf=r("span"),T(Cl.$$.fragment),$x=c(),Rf=r("span"),Fx=n("TFBertForPreTraining"),ak=c(),Ge=r("div"),T(Nl.$$.fragment),xx=c(),zn=r("p"),Bx=n(`Bert Model with two heads on top as done during the pretraining:
a `),Qf=r("code"),Ex=n("masked language modeling"),zx=n(" head and a "),Vf=r("code"),Mx=n("next sentence prediction (classification)"),Px=n(" head."),qx=c(),Ol=r("p"),jx=n("This model inherits from "),lh=r("a"),Cx=n("TFPreTrainedModel"),Nx=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ox=c(),Il=r("p"),Ix=n("This model is also a "),Al=r("a"),Ax=n("tf.keras.Model"),Lx=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dx=c(),T(hr.$$.fragment),Sx=c(),Rt=r("div"),T(Ll.$$.fragment),Ux=c(),Mn=r("p"),Wx=n("The "),dh=r("a"),Hx=n("TFBertForPreTraining"),Rx=n(" forward method, overrides the "),Kf=r("code"),Qx=n("__call__"),Vx=n(" special method."),Kx=c(),T(mr.$$.fragment),Jx=c(),T(fr.$$.fragment),ik=c(),Pn=r("h2"),ur=r("a"),Jf=r("span"),T(Dl.$$.fragment),Gx=c(),Gf=r("span"),Xx=n("TFBertModelLMHeadModel"),lk=c(),qn=r("div"),T(Sl.$$.fragment),Yx=c(),bt=r("div"),T(Ul.$$.fragment),Zx=c(),Ie=r("p"),e0=n("encoder_hidden_states  ("),Xf=r("code"),t0=n("tf.Tensor"),o0=n(" of shape "),Yf=r("code"),n0=n("(batch_size, sequence_length, hidden_size)"),s0=n(", "),Zf=r("em"),r0=n("optional"),a0=n(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),eu=r("code"),i0=n("tf.Tensor"),l0=n(" of shape "),tu=r("code"),d0=n("(batch_size, sequence_length)"),c0=n(", "),ou=r("em"),p0=n("optional"),h0=n(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),nu=r("code"),m0=n("[0, 1]"),f0=n(":"),u0=c(),Wl=r("ul"),Hl=r("li"),g0=n("1 for tokens that are "),su=r("strong"),_0=n("not masked"),b0=n(","),k0=c(),Rl=r("li"),v0=n("0 for tokens that are "),ru=r("strong"),T0=n("masked"),y0=n("."),w0=c(),G=r("p"),$0=n("past_key_values ("),au=r("code"),F0=n("Tuple[Tuple[tf.Tensor]]"),x0=n(" of length "),iu=r("code"),B0=n("config.n_layers"),E0=n(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),lu=r("code"),z0=n("past_key_values"),M0=n(" are used, the user can optionally input only the last "),du=r("code"),P0=n("decoder_input_ids"),q0=n(` (those that
don\u2019t have their past key value states given to this model) of shape `),cu=r("code"),j0=n("(batch_size, 1)"),C0=n(` instead of all
`),pu=r("code"),N0=n("decoder_input_ids"),O0=n(" of shape "),hu=r("code"),I0=n("(batch_size, sequence_length)"),A0=n(`.
use_cache (`),mu=r("code"),L0=n("bool"),D0=n(", "),fu=r("em"),S0=n("optional"),U0=n(", defaults to "),uu=r("code"),W0=n("True"),H0=n(`):
If set to `),gu=r("code"),R0=n("True"),Q0=n(", "),_u=r("code"),V0=n("past_key_values"),K0=n(` key value states are returned and can be used to speed up decoding (see
`),bu=r("code"),J0=n("past_key_values"),G0=n("). Set to "),ku=r("code"),X0=n("False"),Y0=n(" during training, "),vu=r("code"),Z0=n("True"),e4=n(` during generation
labels (`),Tu=r("code"),t4=n("tf.Tensor"),o4=n(" or "),yu=r("code"),n4=n("np.ndarray"),s4=n(" of shape "),wu=r("code"),r4=n("(batch_size, sequence_length)"),a4=n(", "),$u=r("em"),i4=n("optional"),l4=n(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Fu=r("code"),d4=n("[0, ..., config.vocab_size - 1]"),c4=n("."),p4=c(),T(gr.$$.fragment),dk=c(),jn=r("h2"),_r=r("a"),xu=r("span"),T(Ql.$$.fragment),h4=c(),Bu=r("span"),m4=n("TFBertForMaskedLM"),ck=c(),Xe=r("div"),T(Vl.$$.fragment),f4=c(),Kl=r("p"),u4=n("Bert Model with a "),Eu=r("code"),g4=n("language modeling"),_4=n(" head on top."),b4=c(),Jl=r("p"),k4=n("This model inherits from "),ch=r("a"),v4=n("TFPreTrainedModel"),T4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),y4=c(),Gl=r("p"),w4=n("This model is also a "),Xl=r("a"),$4=n("tf.keras.Model"),F4=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),x4=c(),T(br.$$.fragment),B4=c(),kt=r("div"),T(Yl.$$.fragment),E4=c(),Cn=r("p"),z4=n("The "),ph=r("a"),M4=n("TFBertForMaskedLM"),P4=n(" forward method, overrides the "),zu=r("code"),q4=n("__call__"),j4=n(" special method."),C4=c(),T(kr.$$.fragment),N4=c(),T(vr.$$.fragment),O4=c(),T(Tr.$$.fragment),pk=c(),Nn=r("h2"),yr=r("a"),Mu=r("span"),T(Zl.$$.fragment),I4=c(),Pu=r("span"),A4=n("TFBertForNextSentencePrediction"),hk=c(),Ye=r("div"),T(ed.$$.fragment),L4=c(),td=r("p"),D4=n("Bert Model with a "),qu=r("code"),S4=n("next sentence prediction (classification)"),U4=n(" head on top."),W4=c(),od=r("p"),H4=n("This model inherits from "),hh=r("a"),R4=n("TFPreTrainedModel"),Q4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),V4=c(),nd=r("p"),K4=n("This model is also a "),sd=r("a"),J4=n("tf.keras.Model"),G4=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),X4=c(),T(wr.$$.fragment),Y4=c(),Qt=r("div"),T(rd.$$.fragment),Z4=c(),On=r("p"),eB=n("The "),mh=r("a"),tB=n("TFBertForNextSentencePrediction"),oB=n(" forward method, overrides the "),ju=r("code"),nB=n("__call__"),sB=n(" special method."),rB=c(),T($r.$$.fragment),aB=c(),T(Fr.$$.fragment),mk=c(),In=r("h2"),xr=r("a"),Cu=r("span"),T(ad.$$.fragment),iB=c(),Nu=r("span"),lB=n("TFBertForSequenceClassification"),fk=c(),Ze=r("div"),T(id.$$.fragment),dB=c(),Ou=r("p"),cB=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),pB=c(),ld=r("p"),hB=n("This model inherits from "),fh=r("a"),mB=n("TFPreTrainedModel"),fB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uB=c(),dd=r("p"),gB=n("This model is also a "),cd=r("a"),_B=n("tf.keras.Model"),bB=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kB=c(),T(Br.$$.fragment),vB=c(),vt=r("div"),T(pd.$$.fragment),TB=c(),An=r("p"),yB=n("The "),uh=r("a"),wB=n("TFBertForSequenceClassification"),$B=n(" forward method, overrides the "),Iu=r("code"),FB=n("__call__"),xB=n(" special method."),BB=c(),T(Er.$$.fragment),EB=c(),T(zr.$$.fragment),zB=c(),T(Mr.$$.fragment),uk=c(),Ln=r("h2"),Pr=r("a"),Au=r("span"),T(hd.$$.fragment),MB=c(),Lu=r("span"),PB=n("TFBertForMultipleChoice"),gk=c(),et=r("div"),T(md.$$.fragment),qB=c(),Du=r("p"),jB=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),CB=c(),fd=r("p"),NB=n("This model inherits from "),gh=r("a"),OB=n("TFPreTrainedModel"),IB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),AB=c(),ud=r("p"),LB=n("This model is also a "),gd=r("a"),DB=n("tf.keras.Model"),SB=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),UB=c(),T(qr.$$.fragment),WB=c(),Vt=r("div"),T(_d.$$.fragment),HB=c(),Dn=r("p"),RB=n("The "),_h=r("a"),QB=n("TFBertForMultipleChoice"),VB=n(" forward method, overrides the "),Su=r("code"),KB=n("__call__"),JB=n(" special method."),GB=c(),T(jr.$$.fragment),XB=c(),T(Cr.$$.fragment),_k=c(),Sn=r("h2"),Nr=r("a"),Uu=r("span"),T(bd.$$.fragment),YB=c(),Wu=r("span"),ZB=n("TFBertForTokenClassification"),bk=c(),tt=r("div"),T(kd.$$.fragment),eE=c(),Hu=r("p"),tE=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),oE=c(),vd=r("p"),nE=n("This model inherits from "),bh=r("a"),sE=n("TFPreTrainedModel"),rE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aE=c(),Td=r("p"),iE=n("This model is also a "),yd=r("a"),lE=n("tf.keras.Model"),dE=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cE=c(),T(Or.$$.fragment),pE=c(),Tt=r("div"),T(wd.$$.fragment),hE=c(),Un=r("p"),mE=n("The "),kh=r("a"),fE=n("TFBertForTokenClassification"),uE=n(" forward method, overrides the "),Ru=r("code"),gE=n("__call__"),_E=n(" special method."),bE=c(),T(Ir.$$.fragment),kE=c(),T(Ar.$$.fragment),vE=c(),T(Lr.$$.fragment),kk=c(),Wn=r("h2"),Dr=r("a"),Qu=r("span"),T($d.$$.fragment),TE=c(),Vu=r("span"),yE=n("TFBertForQuestionAnswering"),vk=c(),ot=r("div"),T(Fd.$$.fragment),wE=c(),Hn=r("p"),$E=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ku=r("code"),FE=n("span start logits"),xE=n(" and "),Ju=r("code"),BE=n("span end logits"),EE=n(")."),zE=c(),xd=r("p"),ME=n("This model inherits from "),vh=r("a"),PE=n("TFPreTrainedModel"),qE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jE=c(),Bd=r("p"),CE=n("This model is also a "),Ed=r("a"),NE=n("tf.keras.Model"),OE=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),IE=c(),T(Sr.$$.fragment),AE=c(),yt=r("div"),T(zd.$$.fragment),LE=c(),Rn=r("p"),DE=n("The "),Th=r("a"),SE=n("TFBertForQuestionAnswering"),UE=n(" forward method, overrides the "),Gu=r("code"),WE=n("__call__"),HE=n(" special method."),RE=c(),T(Ur.$$.fragment),QE=c(),T(Wr.$$.fragment),VE=c(),T(Hr.$$.fragment),Tk=c(),Qn=r("h2"),Rr=r("a"),Xu=r("span"),T(Md.$$.fragment),KE=c(),Yu=r("span"),JE=n("FlaxBertModel"),yk=c(),Ae=r("div"),T(Pd.$$.fragment),GE=c(),Zu=r("p"),XE=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),YE=c(),qd=r("p"),ZE=n("This model inherits from "),yh=r("a"),ez=n("FlaxPreTrainedModel"),tz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oz=c(),jd=r("p"),nz=n("This model is also a Flax Linen "),Cd=r("a"),sz=n("flax.linen.Module"),rz=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),az=c(),eg=r("p"),iz=n("Finally, this model supports inherent JAX features such as:"),lz=c(),fo=r("ul"),tg=r("li"),Nd=r("a"),dz=n("Just-In-Time (JIT) compilation"),cz=c(),og=r("li"),Od=r("a"),pz=n("Automatic Differentiation"),hz=c(),ng=r("li"),Id=r("a"),mz=n("Vectorization"),fz=c(),sg=r("li"),Ad=r("a"),uz=n("Parallelization"),gz=c(),Kt=r("div"),T(Ld.$$.fragment),_z=c(),Vn=r("p"),bz=n("The "),rg=r("code"),kz=n("FlaxBertPreTrainedModel"),vz=n(" forward method, overrides the "),ag=r("code"),Tz=n("__call__"),yz=n(" special method."),wz=c(),T(Qr.$$.fragment),$z=c(),T(Vr.$$.fragment),wk=c(),Kn=r("h2"),Kr=r("a"),ig=r("span"),T(Dd.$$.fragment),Fz=c(),lg=r("span"),xz=n("FlaxBertForPreTraining"),$k=c(),Le=r("div"),T(Sd.$$.fragment),Bz=c(),Jn=r("p"),Ez=n("Bert Model with two heads on top as done during the pretraining: a "),dg=r("code"),zz=n("masked language modeling"),Mz=n(" head and a "),cg=r("code"),Pz=n("next sentence prediction (classification)"),qz=n(" head."),jz=c(),Ud=r("p"),Cz=n("This model inherits from "),wh=r("a"),Nz=n("FlaxPreTrainedModel"),Oz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Iz=c(),Wd=r("p"),Az=n("This model is also a Flax Linen "),Hd=r("a"),Lz=n("flax.linen.Module"),Dz=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Sz=c(),pg=r("p"),Uz=n("Finally, this model supports inherent JAX features such as:"),Wz=c(),uo=r("ul"),hg=r("li"),Rd=r("a"),Hz=n("Just-In-Time (JIT) compilation"),Rz=c(),mg=r("li"),Qd=r("a"),Qz=n("Automatic Differentiation"),Vz=c(),fg=r("li"),Vd=r("a"),Kz=n("Vectorization"),Jz=c(),ug=r("li"),Kd=r("a"),Gz=n("Parallelization"),Xz=c(),Jt=r("div"),T(Jd.$$.fragment),Yz=c(),Gn=r("p"),Zz=n("The "),gg=r("code"),eM=n("FlaxBertPreTrainedModel"),tM=n(" forward method, overrides the "),_g=r("code"),oM=n("__call__"),nM=n(" special method."),sM=c(),T(Jr.$$.fragment),rM=c(),T(Gr.$$.fragment),Fk=c(),Xn=r("h2"),Xr=r("a"),bg=r("span"),T(Gd.$$.fragment),aM=c(),kg=r("span"),iM=n("FlaxBertForCausalLM"),xk=c(),De=r("div"),T(Xd.$$.fragment),lM=c(),vg=r("p"),dM=n(`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),cM=c(),Yd=r("p"),pM=n("This model inherits from "),$h=r("a"),hM=n("FlaxPreTrainedModel"),mM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fM=c(),Zd=r("p"),uM=n("This model is also a Flax Linen "),ec=r("a"),gM=n("flax.linen.Module"),_M=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bM=c(),Tg=r("p"),kM=n("Finally, this model supports inherent JAX features such as:"),vM=c(),go=r("ul"),yg=r("li"),tc=r("a"),TM=n("Just-In-Time (JIT) compilation"),yM=c(),wg=r("li"),oc=r("a"),wM=n("Automatic Differentiation"),$M=c(),$g=r("li"),nc=r("a"),FM=n("Vectorization"),xM=c(),Fg=r("li"),sc=r("a"),BM=n("Parallelization"),EM=c(),Gt=r("div"),T(rc.$$.fragment),zM=c(),Yn=r("p"),MM=n("The "),xg=r("code"),PM=n("FlaxBertPreTrainedModel"),qM=n(" forward method, overrides the "),Bg=r("code"),jM=n("__call__"),CM=n(" special method."),NM=c(),T(Yr.$$.fragment),OM=c(),T(Zr.$$.fragment),Bk=c(),Zn=r("h2"),ea=r("a"),Eg=r("span"),T(ac.$$.fragment),IM=c(),zg=r("span"),AM=n("FlaxBertForMaskedLM"),Ek=c(),Se=r("div"),T(ic.$$.fragment),LM=c(),lc=r("p"),DM=n("Bert Model with a "),Mg=r("code"),SM=n("language modeling"),UM=n(" head on top."),WM=c(),dc=r("p"),HM=n("This model inherits from "),Fh=r("a"),RM=n("FlaxPreTrainedModel"),QM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),VM=c(),cc=r("p"),KM=n("This model is also a Flax Linen "),pc=r("a"),JM=n("flax.linen.Module"),GM=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),XM=c(),Pg=r("p"),YM=n("Finally, this model supports inherent JAX features such as:"),ZM=c(),_o=r("ul"),qg=r("li"),hc=r("a"),eP=n("Just-In-Time (JIT) compilation"),tP=c(),jg=r("li"),mc=r("a"),oP=n("Automatic Differentiation"),nP=c(),Cg=r("li"),fc=r("a"),sP=n("Vectorization"),rP=c(),Ng=r("li"),uc=r("a"),aP=n("Parallelization"),iP=c(),Xt=r("div"),T(gc.$$.fragment),lP=c(),es=r("p"),dP=n("The "),Og=r("code"),cP=n("FlaxBertPreTrainedModel"),pP=n(" forward method, overrides the "),Ig=r("code"),hP=n("__call__"),mP=n(" special method."),fP=c(),T(ta.$$.fragment),uP=c(),T(oa.$$.fragment),zk=c(),ts=r("h2"),na=r("a"),Ag=r("span"),T(_c.$$.fragment),gP=c(),Lg=r("span"),_P=n("FlaxBertForNextSentencePrediction"),Mk=c(),Ue=r("div"),T(bc.$$.fragment),bP=c(),kc=r("p"),kP=n("Bert Model with a "),Dg=r("code"),vP=n("next sentence prediction (classification)"),TP=n(" head on top."),yP=c(),vc=r("p"),wP=n("This model inherits from "),xh=r("a"),$P=n("FlaxPreTrainedModel"),FP=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xP=c(),Tc=r("p"),BP=n("This model is also a Flax Linen "),yc=r("a"),EP=n("flax.linen.Module"),zP=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),MP=c(),Sg=r("p"),PP=n("Finally, this model supports inherent JAX features such as:"),qP=c(),bo=r("ul"),Ug=r("li"),wc=r("a"),jP=n("Just-In-Time (JIT) compilation"),CP=c(),Wg=r("li"),$c=r("a"),NP=n("Automatic Differentiation"),OP=c(),Hg=r("li"),Fc=r("a"),IP=n("Vectorization"),AP=c(),Rg=r("li"),xc=r("a"),LP=n("Parallelization"),DP=c(),Yt=r("div"),T(Bc.$$.fragment),SP=c(),os=r("p"),UP=n("The "),Qg=r("code"),WP=n("FlaxBertPreTrainedModel"),HP=n(" forward method, overrides the "),Vg=r("code"),RP=n("__call__"),QP=n(" special method."),VP=c(),T(sa.$$.fragment),KP=c(),T(ra.$$.fragment),Pk=c(),ns=r("h2"),aa=r("a"),Kg=r("span"),T(Ec.$$.fragment),JP=c(),Jg=r("span"),GP=n("FlaxBertForSequenceClassification"),qk=c(),We=r("div"),T(zc.$$.fragment),XP=c(),Gg=r("p"),YP=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),ZP=c(),Mc=r("p"),eq=n("This model inherits from "),Bh=r("a"),tq=n("FlaxPreTrainedModel"),oq=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nq=c(),Pc=r("p"),sq=n("This model is also a Flax Linen "),qc=r("a"),rq=n("flax.linen.Module"),aq=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),iq=c(),Xg=r("p"),lq=n("Finally, this model supports inherent JAX features such as:"),dq=c(),ko=r("ul"),Yg=r("li"),jc=r("a"),cq=n("Just-In-Time (JIT) compilation"),pq=c(),Zg=r("li"),Cc=r("a"),hq=n("Automatic Differentiation"),mq=c(),e_=r("li"),Nc=r("a"),fq=n("Vectorization"),uq=c(),t_=r("li"),Oc=r("a"),gq=n("Parallelization"),_q=c(),Zt=r("div"),T(Ic.$$.fragment),bq=c(),ss=r("p"),kq=n("The "),o_=r("code"),vq=n("FlaxBertPreTrainedModel"),Tq=n(" forward method, overrides the "),n_=r("code"),yq=n("__call__"),wq=n(" special method."),$q=c(),T(ia.$$.fragment),Fq=c(),T(la.$$.fragment),jk=c(),rs=r("h2"),da=r("a"),s_=r("span"),T(Ac.$$.fragment),xq=c(),r_=r("span"),Bq=n("FlaxBertForMultipleChoice"),Ck=c(),He=r("div"),T(Lc.$$.fragment),Eq=c(),a_=r("p"),zq=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Mq=c(),Dc=r("p"),Pq=n("This model inherits from "),Eh=r("a"),qq=n("FlaxPreTrainedModel"),jq=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cq=c(),Sc=r("p"),Nq=n("This model is also a Flax Linen "),Uc=r("a"),Oq=n("flax.linen.Module"),Iq=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Aq=c(),i_=r("p"),Lq=n("Finally, this model supports inherent JAX features such as:"),Dq=c(),vo=r("ul"),l_=r("li"),Wc=r("a"),Sq=n("Just-In-Time (JIT) compilation"),Uq=c(),d_=r("li"),Hc=r("a"),Wq=n("Automatic Differentiation"),Hq=c(),c_=r("li"),Rc=r("a"),Rq=n("Vectorization"),Qq=c(),p_=r("li"),Qc=r("a"),Vq=n("Parallelization"),Kq=c(),eo=r("div"),T(Vc.$$.fragment),Jq=c(),as=r("p"),Gq=n("The "),h_=r("code"),Xq=n("FlaxBertPreTrainedModel"),Yq=n(" forward method, overrides the "),m_=r("code"),Zq=n("__call__"),ej=n(" special method."),tj=c(),T(ca.$$.fragment),oj=c(),T(pa.$$.fragment),Nk=c(),is=r("h2"),ha=r("a"),f_=r("span"),T(Kc.$$.fragment),nj=c(),u_=r("span"),sj=n("FlaxBertForTokenClassification"),Ok=c(),Re=r("div"),T(Jc.$$.fragment),rj=c(),g_=r("p"),aj=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ij=c(),Gc=r("p"),lj=n("This model inherits from "),zh=r("a"),dj=n("FlaxPreTrainedModel"),cj=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pj=c(),Xc=r("p"),hj=n("This model is also a Flax Linen "),Yc=r("a"),mj=n("flax.linen.Module"),fj=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uj=c(),__=r("p"),gj=n("Finally, this model supports inherent JAX features such as:"),_j=c(),To=r("ul"),b_=r("li"),Zc=r("a"),bj=n("Just-In-Time (JIT) compilation"),kj=c(),k_=r("li"),ep=r("a"),vj=n("Automatic Differentiation"),Tj=c(),v_=r("li"),tp=r("a"),yj=n("Vectorization"),wj=c(),T_=r("li"),op=r("a"),$j=n("Parallelization"),Fj=c(),to=r("div"),T(np.$$.fragment),xj=c(),ls=r("p"),Bj=n("The "),y_=r("code"),Ej=n("FlaxBertPreTrainedModel"),zj=n(" forward method, overrides the "),w_=r("code"),Mj=n("__call__"),Pj=n(" special method."),qj=c(),T(ma.$$.fragment),jj=c(),T(fa.$$.fragment),Ik=c(),ds=r("h2"),ua=r("a"),$_=r("span"),T(sp.$$.fragment),Cj=c(),F_=r("span"),Nj=n("FlaxBertForQuestionAnswering"),Ak=c(),Qe=r("div"),T(rp.$$.fragment),Oj=c(),cs=r("p"),Ij=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),x_=r("code"),Aj=n("span start logits"),Lj=n(" and "),B_=r("code"),Dj=n("span end logits"),Sj=n(")."),Uj=c(),ap=r("p"),Wj=n("This model inherits from "),Mh=r("a"),Hj=n("FlaxPreTrainedModel"),Rj=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qj=c(),ip=r("p"),Vj=n("This model is also a Flax Linen "),lp=r("a"),Kj=n("flax.linen.Module"),Jj=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gj=c(),E_=r("p"),Xj=n("Finally, this model supports inherent JAX features such as:"),Yj=c(),yo=r("ul"),z_=r("li"),dp=r("a"),Zj=n("Just-In-Time (JIT) compilation"),e3=c(),M_=r("li"),cp=r("a"),t3=n("Automatic Differentiation"),o3=c(),P_=r("li"),pp=r("a"),n3=n("Vectorization"),s3=c(),q_=r("li"),hp=r("a"),r3=n("Parallelization"),a3=c(),oo=r("div"),T(mp.$$.fragment),i3=c(),ps=r("p"),l3=n("The "),j_=r("code"),d3=n("FlaxBertPreTrainedModel"),c3=n(" forward method, overrides the "),C_=r("code"),p3=n("__call__"),h3=n(" special method."),m3=c(),T(ga.$$.fragment),f3=c(),T(_a.$$.fragment),this.h()},l(o){const k=Q7('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),_=p(o),m=a(o,"H1",{class:!0});var fp=i(m);h=a(fp,"A",{id:!0,class:!0,href:!0});var N_=i(h);g=a(N_,"SPAN",{});var O_=i(g);y(l.$$.fragment,O_),O_.forEach(t),N_.forEach(t),f=p(fp),E=a(fp,"SPAN",{});var I_=i(E);be=s(I_,"BERT"),I_.forEach(t),fp.forEach(t),X=p(o),M=a(o,"H2",{class:!0});var up=i(M);ne=a(up,"A",{id:!0,class:!0,href:!0});var A_=i(ne);L=a(A_,"SPAN",{});var L_=i(L);y(re.$$.fragment,L_),L_.forEach(t),A_.forEach(t),ke=p(up),D=a(up,"SPAN",{});var D_=i(D);ve=s(D_,"Overview"),D_.forEach(t),up.forEach(t),me=p(o),J=a(o,"P",{});var gp=i(J);O=s(gp,"The BERT model was proposed in "),ae=a(gp,"A",{href:!0,rel:!0});var S_=i(ae);Y=s(S_,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),S_.forEach(t),P=s(gp,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),gp.forEach(t),j=p(o),ie=a(o,"P",{});var U_=i(ie);H=s(U_,"The abstract from the paper is the following:"),U_.forEach(t),fe=p(o),le=a(o,"P",{});var W_=i(le);S=a(W_,"EM",{});var H_=i(S);Te=s(H_,`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),H_.forEach(t),W_.forEach(t),ue=p(o),q=a(o,"P",{});var R_=i(q);ce=a(R_,"EM",{});var Q_=i(ce);R=s(Q_,`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),Q_.forEach(t),R_.forEach(t),ge=p(o),de=a(o,"P",{});var V_=i(de);Q=s(V_,"Tips:"),V_.forEach(t),_e=p(o),se=a(o,"UL",{});var _p=i(se);N=a(_p,"LI",{});var K_=i(N);ye=s(K_,`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),K_.forEach(t),V=p(_p),pe=a(_p,"LI",{});var J_=i(pe);v=s(J_,`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),J_.forEach(t),_p.forEach(t),z=p(o),K=a(o,"P",{});var hs=i(K);Me=s(hs,"This model was contributed by "),Be=a(hs,"A",{href:!0,rel:!0});var G_=i(Be);I=s(G_,"thomwolf"),G_.forEach(t),Pe=s(hs,". The original code can be found "),Ee=a(hs,"A",{href:!0,rel:!0});var X_=i(Ee);qe=s(X_,"here"),X_.forEach(t),A=s(hs,"."),hs.forEach(t),W=p(o),Fe=a(o,"H2",{class:!0});var bp=i(Fe);xe=a(bp,"A",{id:!0,class:!0,href:!0});var Y_=i(xe);U=a(Y_,"SPAN",{});var Z_=i(U);y(ze.$$.fragment,Z_),Z_.forEach(t),Y_.forEach(t),je=p(bp),he=a(bp,"SPAN",{});var eb=i(he);Ce=s(eb,"BertConfig"),eb.forEach(t),bp.forEach(t),Eb=p(o),Nt=a(o,"DIV",{class:!0});var wo=i(Nt);y(Ra.$$.fragment,wo),j1=p(wo),ho=a(wo,"P",{});var $o=i(ho);C1=s($o,"This is the configuration class to store the configuration of a "),Ep=a($o,"A",{href:!0});var tb=i(Ep);N1=s(tb,"BertModel"),tb.forEach(t),O1=s($o," or a "),zp=a($o,"A",{href:!0});var ob=i(zp);I1=s(ob,"TFBertModel"),ob.forEach(t),A1=s($o,`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Qa=a($o,"A",{href:!0,rel:!0});var nb=i(Qa);L1=s(nb,"bert-base-uncased"),nb.forEach(t),D1=s($o," architecture."),$o.forEach(t),S1=p(wo),Ko=a(wo,"P",{});var ms=i(Ko);U1=s(ms,"Configuration objects inherit from "),Mp=a(ms,"A",{href:!0});var sb=i(Mp);W1=s(sb,"PretrainedConfig"),sb.forEach(t),H1=s(ms,` and can be used to control the model outputs. Read the
documentation from `),Pp=a(ms,"A",{href:!0});var rb=i(Pp);R1=s(rb,"PretrainedConfig"),rb.forEach(t),Q1=s(ms," for more information."),ms.forEach(t),V1=p(wo),y(_s.$$.fragment,wo),wo.forEach(t),zb=p(o),Jo=a(o,"H2",{class:!0});var kp=i(Jo);bs=a(kp,"A",{id:!0,class:!0,href:!0});var ab=i(bs);km=a(ab,"SPAN",{});var ib=i(km);y(Va.$$.fragment,ib),ib.forEach(t),ab.forEach(t),K1=p(kp),vm=a(kp,"SPAN",{});var lb=i(vm);J1=s(lb,"BertTokenizer"),lb.forEach(t),kp.forEach(t),Mb=p(o),Ne=a(o,"DIV",{class:!0});var nt=i(Ne);y(Ka.$$.fragment,nt),G1=p(nt),Tm=a(nt,"P",{});var db=i(Tm);X1=s(db,"Construct a BERT tokenizer. Based on WordPiece."),db.forEach(t),Y1=p(nt),Ja=a(nt,"P",{});var vp=i(Ja);Z1=s(vp,"This tokenizer inherits from "),qp=a(vp,"A",{href:!0});var cb=i(qp);eT=s(cb,"PreTrainedTokenizer"),cb.forEach(t),tT=s(vp,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),vp.forEach(t),oT=p(nt),Bo=a(nt,"DIV",{class:!0});var fs=i(Bo);y(Ga.$$.fragment,fs),nT=p(fs),ym=a(fs,"P",{});var pb=i(ym);sT=s(pb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),pb.forEach(t),rT=p(fs),Xa=a(fs,"UL",{});var Tp=i(Xa);jp=a(Tp,"LI",{});var Ph=i(jp);aT=s(Ph,"single sequence: "),wm=a(Ph,"CODE",{});var hb=i(wm);iT=s(hb,"[CLS] X [SEP]"),hb.forEach(t),Ph.forEach(t),lT=p(Tp),Cp=a(Tp,"LI",{});var qh=i(Cp);dT=s(qh,"pair of sequences: "),$m=a(qh,"CODE",{});var mb=i($m);cT=s(mb,"[CLS] A [SEP] B [SEP]"),mb.forEach(t),qh.forEach(t),Tp.forEach(t),fs.forEach(t),pT=p(nt),ks=a(nt,"DIV",{class:!0});var yp=i(ks);y(Ya.$$.fragment,yp),hT=p(yp),Za=a(yp,"P",{});var wp=i(Za);mT=s(wp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Fm=a(wp,"CODE",{});var fb=i(Fm);fT=s(fb,"prepare_for_model"),fb.forEach(t),uT=s(wp," method."),wp.forEach(t),yp.forEach(t),gT=p(nt),It=a(nt,"DIV",{class:!0});var Fo=i(It);y(ei.$$.fragment,Fo),_T=p(Fo),xm=a(Fo,"P",{});var ub=i(xm);bT=s(ub,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),ub.forEach(t),kT=p(Fo),y(vs.$$.fragment,Fo),vT=p(Fo),Go=a(Fo,"P",{});var us=i(Go);TT=s(us,"If "),Bm=a(us,"CODE",{});var gb=i(Bm);yT=s(gb,"token_ids_1"),gb.forEach(t),wT=s(us," is "),Em=a(us,"CODE",{});var _b=i(Em);$T=s(_b,"None"),_b.forEach(t),FT=s(us,", this method only returns the first portion of the mask (0s)."),us.forEach(t),Fo.forEach(t),xT=p(nt),Np=a(nt,"DIV",{class:!0});var bb=i(Np);y(ti.$$.fragment,bb),bb.forEach(t),nt.forEach(t),Pb=p(o),Xo=a(o,"H2",{class:!0});var $p=i(Xo);Ts=a($p,"A",{id:!0,class:!0,href:!0});var kb=i(Ts);zm=a(kb,"SPAN",{});var vb=i(zm);y(oi.$$.fragment,vb),vb.forEach(t),kb.forEach(t),BT=p($p),Mm=a($p,"SPAN",{});var Tb=i(Mm);ET=s(Tb,"BertTokenizerFast"),Tb.forEach(t),$p.forEach(t),qb=p(o),rt=a(o,"DIV",{class:!0});var Ot=i(rt);y(ni.$$.fragment,Ot),zT=p(Ot),si=a(Ot,"P",{});var Fp=i(si);MT=s(Fp,"Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Pm=a(Fp,"EM",{});var yb=i(Pm);PT=s(yb,"tokenizers"),yb.forEach(t),qT=s(Fp," library). Based on WordPiece."),Fp.forEach(t),jT=p(Ot),ri=a(Ot,"P",{});var xp=i(ri);CT=s(xp,"This tokenizer inherits from "),Op=a(xp,"A",{href:!0});var wb=i(Op);NT=s(wb,"PreTrainedTokenizerFast"),wb.forEach(t),OT=s(xp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),xp.forEach(t),IT=p(Ot),Eo=a(Ot,"DIV",{class:!0});var gs=i(Eo);y(ai.$$.fragment,gs),AT=p(gs),qm=a(gs,"P",{});var $b=i(qm);LT=s($b,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),$b.forEach(t),DT=p(gs),ii=a(gs,"UL",{});var Bp=i(ii);Ip=a(Bp,"LI",{});var jh=i(Ip);ST=s(jh,"single sequence: "),jm=a(jh,"CODE",{});var Fb=i(jm);UT=s(Fb,"[CLS] X [SEP]"),Fb.forEach(t),jh.forEach(t),WT=p(Bp),Ap=a(Bp,"LI",{});var Ch=i(Ap);HT=s(Ch,"pair of sequences: "),Cm=a(Ch,"CODE",{});var xb=i(Cm);RT=s(xb,"[CLS] A [SEP] B [SEP]"),xb.forEach(t),Ch.forEach(t),Bp.forEach(t),gs.forEach(t),QT=p(Ot),At=a(Ot,"DIV",{class:!0});var xo=i(At);y(li.$$.fragment,xo),VT=p(xo),Nm=a(xo,"P",{});var Bb=i(Nm);KT=s(Bb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Bb.forEach(t),JT=p(xo),y(ys.$$.fragment,xo),GT=p(xo),Yo=a(xo,"P",{});var Nh=i(Yo);XT=s(Nh,"If "),Om=a(Nh,"CODE",{});var u3=i(Om);YT=s(u3,"token_ids_1"),u3.forEach(t),ZT=s(Nh," is "),Im=a(Nh,"CODE",{});var g3=i(Im);ey=s(g3,"None"),g3.forEach(t),ty=s(Nh,", this method only returns the first portion of the mask (0s)."),Nh.forEach(t),xo.forEach(t),Ot.forEach(t),jb=p(o),Zo=a(o,"H2",{class:!0});var Dk=i(Zo);ws=a(Dk,"A",{id:!0,class:!0,href:!0});var _3=i(ws);Am=a(_3,"SPAN",{});var b3=i(Am);y(di.$$.fragment,b3),b3.forEach(t),_3.forEach(t),oy=p(Dk),Lm=a(Dk,"SPAN",{});var k3=i(Lm);ny=s(k3,"TFBertTokenizer"),k3.forEach(t),Dk.forEach(t),Cb=p(o),at=a(o,"DIV",{class:!0});var Po=i(at);y(ci.$$.fragment,Po),sy=p(Po),en=a(Po,"P",{});var Oh=i(en);ry=s(Oh,`This is an in-graph tokenizer for BERT. It should be initialized similarly to other tokenizers, using the
`),Dm=a(Oh,"CODE",{});var v3=i(Dm);ay=s(v3,"from_pretrained()"),v3.forEach(t),iy=s(Oh," method. It can also be initialized with the "),Sm=a(Oh,"CODE",{});var T3=i(Sm);ly=s(T3,"from_tokenizer()"),T3.forEach(t),dy=s(Oh,` method, which imports settings
from an existing standard tokenizer object.`),Oh.forEach(t),cy=p(Po),pi=a(Po,"P",{});var Sk=i(pi);py=s(Sk,`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. As a result, they have somewhat more limited options
than standard tokenizer classes. They are most useful when you want to create an end-to-end model that goes
straight from `),Um=a(Sk,"CODE",{});var y3=i(Um);hy=s(y3,"tf.string"),y3.forEach(t),my=s(Sk," inputs to outputs."),Sk.forEach(t),fy=p(Po),zo=a(Po,"DIV",{class:!0});var Ih=i(zo);y(hi.$$.fragment,Ih),uy=p(Ih),mi=a(Ih,"P",{});var Uk=i(mi);gy=s(Uk,"Instantiate a "),Wm=a(Uk,"CODE",{});var w3=i(Wm);_y=s(w3,"TFBertTokenizer"),w3.forEach(t),by=s(Uk," from a pre-trained tokenizer."),Uk.forEach(t),ky=p(Ih),y($s.$$.fragment,Ih),Ih.forEach(t),vy=p(Po),Mo=a(Po,"DIV",{class:!0});var Ah=i(Mo);y(fi.$$.fragment,Ah),Ty=p(Ah),tn=a(Ah,"P",{});var Lh=i(tn);yy=s(Lh,"Initialize a "),Hm=a(Lh,"CODE",{});var $3=i(Hm);wy=s($3,"TFBertTokenizer"),$3.forEach(t),$y=s(Lh," from an existing "),Rm=a(Lh,"CODE",{});var F3=i(Rm);Fy=s(F3,"Tokenizer"),F3.forEach(t),xy=s(Lh,"."),Lh.forEach(t),By=p(Ah),y(Fs.$$.fragment,Ah),Ah.forEach(t),Po.forEach(t),Nb=p(o),on=a(o,"H2",{class:!0});var Wk=i(on);xs=a(Wk,"A",{id:!0,class:!0,href:!0});var x3=i(xs);Qm=a(x3,"SPAN",{});var B3=i(Qm);y(ui.$$.fragment,B3),B3.forEach(t),x3.forEach(t),Ey=p(Wk),Vm=a(Wk,"SPAN",{});var E3=i(Vm);zy=s(E3,"Bert specific outputs"),E3.forEach(t),Wk.forEach(t),Ob=p(o),nn=a(o,"DIV",{class:!0});var Hk=i(nn);y(gi.$$.fragment,Hk),My=p(Hk),_i=a(Hk,"P",{});var Rk=i(_i);Py=s(Rk,"Output type of "),Lp=a(Rk,"A",{href:!0});var z3=i(Lp);qy=s(z3,"BertForPreTraining"),z3.forEach(t),jy=s(Rk,"."),Rk.forEach(t),Hk.forEach(t),Ib=p(o),sn=a(o,"DIV",{class:!0});var Qk=i(sn);y(bi.$$.fragment,Qk),Cy=p(Qk),ki=a(Qk,"P",{});var Vk=i(ki);Ny=s(Vk,"Output type of "),Dp=a(Vk,"A",{href:!0});var M3=i(Dp);Oy=s(M3,"TFBertForPreTraining"),M3.forEach(t),Iy=s(Vk,"."),Vk.forEach(t),Qk.forEach(t),Ab=p(o),mo=a(o,"DIV",{class:!0});var Dh=i(mo);y(vi.$$.fragment,Dh),Ay=p(Dh),Ti=a(Dh,"P",{});var Kk=i(Ti);Ly=s(Kk,"Output type of "),Sp=a(Kk,"A",{href:!0});var P3=i(Sp);Dy=s(P3,"BertForPreTraining"),P3.forEach(t),Sy=s(Kk,"."),Kk.forEach(t),Uy=p(Dh),Bs=a(Dh,"DIV",{class:!0});var Jk=i(Bs);y(yi.$$.fragment,Jk),Wy=p(Jk),Km=a(Jk,"P",{});var q3=i(Km);Hy=s(q3,"\u201CReturns a new object replacing the specified fields with new values."),q3.forEach(t),Jk.forEach(t),Dh.forEach(t),Lb=p(o),rn=a(o,"H2",{class:!0});var Gk=i(rn);Es=a(Gk,"A",{id:!0,class:!0,href:!0});var j3=i(Es);Jm=a(j3,"SPAN",{});var C3=i(Jm);y(wi.$$.fragment,C3),C3.forEach(t),j3.forEach(t),Ry=p(Gk),Gm=a(Gk,"SPAN",{});var N3=i(Gm);Qy=s(N3,"BertModel"),N3.forEach(t),Gk.forEach(t),Db=p(o),Oe=a(o,"DIV",{class:!0});var wt=i(Oe);y($i.$$.fragment,wt),Vy=p(wt),Xm=a(wt,"P",{});var O3=i(Xm);Ky=s(O3,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),O3.forEach(t),Jy=p(wt),Fi=a(wt,"P",{});var Xk=i(Fi);Gy=s(Xk,"This model inherits from "),Up=a(Xk,"A",{href:!0});var I3=i(Up);Xy=s(I3,"PreTrainedModel"),I3.forEach(t),Yy=s(Xk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xk.forEach(t),Zy=p(wt),xi=a(wt,"P",{});var Yk=i(xi);ew=s(Yk,"This model is also a PyTorch "),Bi=a(Yk,"A",{href:!0,rel:!0});var A3=i(Bi);tw=s(A3,"torch.nn.Module"),A3.forEach(t),ow=s(Yk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yk.forEach(t),nw=p(wt),Ei=a(wt,"P",{});var Zk=i(Ei);sw=s(Zk,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),zi=a(Zk,"A",{href:!0,rel:!0});var L3=i(zi);rw=s(L3,`Attention is
all you need`),L3.forEach(t),aw=s(Zk,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Zk.forEach(t),iw=p(wt),Ke=a(wt,"P",{});var $t=i(Ke);lw=s($t,"To behave as an decoder the model needs to be initialized with the "),Ym=a($t,"CODE",{});var D3=i(Ym);dw=s(D3,"is_decoder"),D3.forEach(t),cw=s($t,` argument of the configuration set
to `),Zm=a($t,"CODE",{});var S3=i(Zm);pw=s(S3,"True"),S3.forEach(t),hw=s($t,". To be used in a Seq2Seq model, the model needs to initialized with both "),ef=a($t,"CODE",{});var U3=i(ef);mw=s(U3,"is_decoder"),U3.forEach(t),fw=s($t,` argument and
`),tf=a($t,"CODE",{});var W3=i(tf);uw=s(W3,"add_cross_attention"),W3.forEach(t),gw=s($t," set to "),of=a($t,"CODE",{});var H3=i(of);_w=s(H3,"True"),H3.forEach(t),bw=s($t,"; an "),nf=a($t,"CODE",{});var R3=i(nf);kw=s(R3,"encoder_hidden_states"),R3.forEach(t),vw=s($t," is then expected as an input to the forward pass."),$t.forEach(t),Tw=p(wt),Lt=a(wt,"DIV",{class:!0});var ba=i(Lt);y(Mi.$$.fragment,ba),yw=p(ba),an=a(ba,"P",{});var Sh=i(an);ww=s(Sh,"The "),Wp=a(Sh,"A",{href:!0});var Q3=i(Wp);$w=s(Q3,"BertModel"),Q3.forEach(t),Fw=s(Sh," forward method, overrides the "),sf=a(Sh,"CODE",{});var V3=i(sf);xw=s(V3,"__call__"),V3.forEach(t),Bw=s(Sh," special method."),Sh.forEach(t),Ew=p(ba),y(zs.$$.fragment,ba),zw=p(ba),y(Ms.$$.fragment,ba),ba.forEach(t),wt.forEach(t),Sb=p(o),ln=a(o,"H2",{class:!0});var ev=i(ln);Ps=a(ev,"A",{id:!0,class:!0,href:!0});var K3=i(Ps);rf=a(K3,"SPAN",{});var J3=i(rf);y(Pi.$$.fragment,J3),J3.forEach(t),K3.forEach(t),Mw=p(ev),af=a(ev,"SPAN",{});var G3=i(af);Pw=s(G3,"BertForPreTraining"),G3.forEach(t),ev.forEach(t),Ub=p(o),it=a(o,"DIV",{class:!0});var qo=i(it);y(qi.$$.fragment,qo),qw=p(qo),dn=a(qo,"P",{});var Uh=i(dn);jw=s(Uh,"Bert Model with two heads on top as done during the pretraining: a "),lf=a(Uh,"CODE",{});var X3=i(lf);Cw=s(X3,"masked language modeling"),X3.forEach(t),Nw=s(Uh," head and a "),df=a(Uh,"CODE",{});var Y3=i(df);Ow=s(Y3,"next sentence prediction (classification)"),Y3.forEach(t),Iw=s(Uh," head."),Uh.forEach(t),Aw=p(qo),ji=a(qo,"P",{});var tv=i(ji);Lw=s(tv,"This model inherits from "),Hp=a(tv,"A",{href:!0});var Z3=i(Hp);Dw=s(Z3,"PreTrainedModel"),Z3.forEach(t),Sw=s(tv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tv.forEach(t),Uw=p(qo),Ci=a(qo,"P",{});var ov=i(Ci);Ww=s(ov,"This model is also a PyTorch "),Ni=a(ov,"A",{href:!0,rel:!0});var eC=i(Ni);Hw=s(eC,"torch.nn.Module"),eC.forEach(t),Rw=s(ov,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ov.forEach(t),Qw=p(qo),Dt=a(qo,"DIV",{class:!0});var ka=i(Dt);y(Oi.$$.fragment,ka),Vw=p(ka),cn=a(ka,"P",{});var Wh=i(cn);Kw=s(Wh,"The "),Rp=a(Wh,"A",{href:!0});var tC=i(Rp);Jw=s(tC,"BertForPreTraining"),tC.forEach(t),Gw=s(Wh," forward method, overrides the "),cf=a(Wh,"CODE",{});var oC=i(cf);Xw=s(oC,"__call__"),oC.forEach(t),Yw=s(Wh," special method."),Wh.forEach(t),Zw=p(ka),y(qs.$$.fragment,ka),e$=p(ka),y(js.$$.fragment,ka),ka.forEach(t),qo.forEach(t),Wb=p(o),pn=a(o,"H2",{class:!0});var nv=i(pn);Cs=a(nv,"A",{id:!0,class:!0,href:!0});var nC=i(Cs);pf=a(nC,"SPAN",{});var sC=i(pf);y(Ii.$$.fragment,sC),sC.forEach(t),nC.forEach(t),t$=p(nv),hf=a(nv,"SPAN",{});var rC=i(hf);o$=s(rC,"BertLMHeadModel"),rC.forEach(t),nv.forEach(t),Hb=p(o),lt=a(o,"DIV",{class:!0});var jo=i(lt);y(Ai.$$.fragment,jo),n$=p(jo),Li=a(jo,"P",{});var sv=i(Li);s$=s(sv,"Bert Model with a "),mf=a(sv,"CODE",{});var aC=i(mf);r$=s(aC,"language modeling"),aC.forEach(t),a$=s(sv," head on top for CLM fine-tuning."),sv.forEach(t),i$=p(jo),Di=a(jo,"P",{});var rv=i(Di);l$=s(rv,"This model inherits from "),Qp=a(rv,"A",{href:!0});var iC=i(Qp);d$=s(iC,"PreTrainedModel"),iC.forEach(t),c$=s(rv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rv.forEach(t),p$=p(jo),Si=a(jo,"P",{});var av=i(Si);h$=s(av,"This model is also a PyTorch "),Ui=a(av,"A",{href:!0,rel:!0});var lC=i(Ui);m$=s(lC,"torch.nn.Module"),lC.forEach(t),f$=s(av,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),av.forEach(t),u$=p(jo),St=a(jo,"DIV",{class:!0});var va=i(St);y(Wi.$$.fragment,va),g$=p(va),hn=a(va,"P",{});var Hh=i(hn);_$=s(Hh,"The "),Vp=a(Hh,"A",{href:!0});var dC=i(Vp);b$=s(dC,"BertLMHeadModel"),dC.forEach(t),k$=s(Hh," forward method, overrides the "),ff=a(Hh,"CODE",{});var cC=i(ff);v$=s(cC,"__call__"),cC.forEach(t),T$=s(Hh," special method."),Hh.forEach(t),y$=p(va),y(Ns.$$.fragment,va),w$=p(va),y(Os.$$.fragment,va),va.forEach(t),jo.forEach(t),Rb=p(o),mn=a(o,"H2",{class:!0});var iv=i(mn);Is=a(iv,"A",{id:!0,class:!0,href:!0});var pC=i(Is);uf=a(pC,"SPAN",{});var hC=i(uf);y(Hi.$$.fragment,hC),hC.forEach(t),pC.forEach(t),$$=p(iv),gf=a(iv,"SPAN",{});var mC=i(gf);F$=s(mC,"BertForMaskedLM"),mC.forEach(t),iv.forEach(t),Qb=p(o),dt=a(o,"DIV",{class:!0});var Co=i(dt);y(Ri.$$.fragment,Co),x$=p(Co),Qi=a(Co,"P",{});var lv=i(Qi);B$=s(lv,"Bert Model with a "),_f=a(lv,"CODE",{});var fC=i(_f);E$=s(fC,"language modeling"),fC.forEach(t),z$=s(lv," head on top."),lv.forEach(t),M$=p(Co),Vi=a(Co,"P",{});var dv=i(Vi);P$=s(dv,"This model inherits from "),Kp=a(dv,"A",{href:!0});var uC=i(Kp);q$=s(uC,"PreTrainedModel"),uC.forEach(t),j$=s(dv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dv.forEach(t),C$=p(Co),Ki=a(Co,"P",{});var cv=i(Ki);N$=s(cv,"This model is also a PyTorch "),Ji=a(cv,"A",{href:!0,rel:!0});var gC=i(Ji);O$=s(gC,"torch.nn.Module"),gC.forEach(t),I$=s(cv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cv.forEach(t),A$=p(Co),ut=a(Co,"DIV",{class:!0});var No=i(ut);y(Gi.$$.fragment,No),L$=p(No),fn=a(No,"P",{});var Rh=i(fn);D$=s(Rh,"The "),Jp=a(Rh,"A",{href:!0});var _C=i(Jp);S$=s(_C,"BertForMaskedLM"),_C.forEach(t),U$=s(Rh," forward method, overrides the "),bf=a(Rh,"CODE",{});var bC=i(bf);W$=s(bC,"__call__"),bC.forEach(t),H$=s(Rh," special method."),Rh.forEach(t),R$=p(No),y(As.$$.fragment,No),Q$=p(No),y(Ls.$$.fragment,No),V$=p(No),y(Ds.$$.fragment,No),No.forEach(t),Co.forEach(t),Vb=p(o),un=a(o,"H2",{class:!0});var pv=i(un);Ss=a(pv,"A",{id:!0,class:!0,href:!0});var kC=i(Ss);kf=a(kC,"SPAN",{});var vC=i(kf);y(Xi.$$.fragment,vC),vC.forEach(t),kC.forEach(t),K$=p(pv),vf=a(pv,"SPAN",{});var TC=i(vf);J$=s(TC,"BertForNextSentencePrediction"),TC.forEach(t),pv.forEach(t),Kb=p(o),ct=a(o,"DIV",{class:!0});var Oo=i(ct);y(Yi.$$.fragment,Oo),G$=p(Oo),Zi=a(Oo,"P",{});var hv=i(Zi);X$=s(hv,"Bert Model with a "),Tf=a(hv,"CODE",{});var yC=i(Tf);Y$=s(yC,"next sentence prediction (classification)"),yC.forEach(t),Z$=s(hv," head on top."),hv.forEach(t),e2=p(Oo),el=a(Oo,"P",{});var mv=i(el);t2=s(mv,"This model inherits from "),Gp=a(mv,"A",{href:!0});var wC=i(Gp);o2=s(wC,"PreTrainedModel"),wC.forEach(t),n2=s(mv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mv.forEach(t),s2=p(Oo),tl=a(Oo,"P",{});var fv=i(tl);r2=s(fv,"This model is also a PyTorch "),ol=a(fv,"A",{href:!0,rel:!0});var $C=i(ol);a2=s($C,"torch.nn.Module"),$C.forEach(t),i2=s(fv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fv.forEach(t),l2=p(Oo),Ut=a(Oo,"DIV",{class:!0});var Ta=i(Ut);y(nl.$$.fragment,Ta),d2=p(Ta),gn=a(Ta,"P",{});var Qh=i(gn);c2=s(Qh,"The "),Xp=a(Qh,"A",{href:!0});var FC=i(Xp);p2=s(FC,"BertForNextSentencePrediction"),FC.forEach(t),h2=s(Qh," forward method, overrides the "),yf=a(Qh,"CODE",{});var xC=i(yf);m2=s(xC,"__call__"),xC.forEach(t),f2=s(Qh," special method."),Qh.forEach(t),u2=p(Ta),y(Us.$$.fragment,Ta),g2=p(Ta),y(Ws.$$.fragment,Ta),Ta.forEach(t),Oo.forEach(t),Jb=p(o),_n=a(o,"H2",{class:!0});var uv=i(_n);Hs=a(uv,"A",{id:!0,class:!0,href:!0});var BC=i(Hs);wf=a(BC,"SPAN",{});var EC=i(wf);y(sl.$$.fragment,EC),EC.forEach(t),BC.forEach(t),_2=p(uv),$f=a(uv,"SPAN",{});var zC=i($f);b2=s(zC,"BertForSequenceClassification"),zC.forEach(t),uv.forEach(t),Gb=p(o),pt=a(o,"DIV",{class:!0});var Io=i(pt);y(rl.$$.fragment,Io),k2=p(Io),Ff=a(Io,"P",{});var MC=i(Ff);v2=s(MC,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),MC.forEach(t),T2=p(Io),al=a(Io,"P",{});var gv=i(al);y2=s(gv,"This model inherits from "),Yp=a(gv,"A",{href:!0});var PC=i(Yp);w2=s(PC,"PreTrainedModel"),PC.forEach(t),$2=s(gv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gv.forEach(t),F2=p(Io),il=a(Io,"P",{});var _v=i(il);x2=s(_v,"This model is also a PyTorch "),ll=a(_v,"A",{href:!0,rel:!0});var qC=i(ll);B2=s(qC,"torch.nn.Module"),qC.forEach(t),E2=s(_v,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_v.forEach(t),z2=p(Io),Ve=a(Io,"DIV",{class:!0});var Ft=i(Ve);y(dl.$$.fragment,Ft),M2=p(Ft),bn=a(Ft,"P",{});var Vh=i(bn);P2=s(Vh,"The "),Zp=a(Vh,"A",{href:!0});var jC=i(Zp);q2=s(jC,"BertForSequenceClassification"),jC.forEach(t),j2=s(Vh," forward method, overrides the "),xf=a(Vh,"CODE",{});var CC=i(xf);C2=s(CC,"__call__"),CC.forEach(t),N2=s(Vh," special method."),Vh.forEach(t),O2=p(Ft),y(Rs.$$.fragment,Ft),I2=p(Ft),y(Qs.$$.fragment,Ft),A2=p(Ft),y(Vs.$$.fragment,Ft),L2=p(Ft),y(Ks.$$.fragment,Ft),D2=p(Ft),y(Js.$$.fragment,Ft),Ft.forEach(t),Io.forEach(t),Xb=p(o),kn=a(o,"H2",{class:!0});var bv=i(kn);Gs=a(bv,"A",{id:!0,class:!0,href:!0});var NC=i(Gs);Bf=a(NC,"SPAN",{});var OC=i(Bf);y(cl.$$.fragment,OC),OC.forEach(t),NC.forEach(t),S2=p(bv),Ef=a(bv,"SPAN",{});var IC=i(Ef);U2=s(IC,"BertForMultipleChoice"),IC.forEach(t),bv.forEach(t),Yb=p(o),ht=a(o,"DIV",{class:!0});var Ao=i(ht);y(pl.$$.fragment,Ao),W2=p(Ao),zf=a(Ao,"P",{});var AC=i(zf);H2=s(AC,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),AC.forEach(t),R2=p(Ao),hl=a(Ao,"P",{});var kv=i(hl);Q2=s(kv,"This model inherits from "),eh=a(kv,"A",{href:!0});var LC=i(eh);V2=s(LC,"PreTrainedModel"),LC.forEach(t),K2=s(kv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kv.forEach(t),J2=p(Ao),ml=a(Ao,"P",{});var vv=i(ml);G2=s(vv,"This model is also a PyTorch "),fl=a(vv,"A",{href:!0,rel:!0});var DC=i(fl);X2=s(DC,"torch.nn.Module"),DC.forEach(t),Y2=s(vv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vv.forEach(t),Z2=p(Ao),Wt=a(Ao,"DIV",{class:!0});var ya=i(Wt);y(ul.$$.fragment,ya),eF=p(ya),vn=a(ya,"P",{});var Kh=i(vn);tF=s(Kh,"The "),th=a(Kh,"A",{href:!0});var SC=i(th);oF=s(SC,"BertForMultipleChoice"),SC.forEach(t),nF=s(Kh," forward method, overrides the "),Mf=a(Kh,"CODE",{});var UC=i(Mf);sF=s(UC,"__call__"),UC.forEach(t),rF=s(Kh," special method."),Kh.forEach(t),aF=p(ya),y(Xs.$$.fragment,ya),iF=p(ya),y(Ys.$$.fragment,ya),ya.forEach(t),Ao.forEach(t),Zb=p(o),Tn=a(o,"H2",{class:!0});var Tv=i(Tn);Zs=a(Tv,"A",{id:!0,class:!0,href:!0});var WC=i(Zs);Pf=a(WC,"SPAN",{});var HC=i(Pf);y(gl.$$.fragment,HC),HC.forEach(t),WC.forEach(t),lF=p(Tv),qf=a(Tv,"SPAN",{});var RC=i(qf);dF=s(RC,"BertForTokenClassification"),RC.forEach(t),Tv.forEach(t),ek=p(o),mt=a(o,"DIV",{class:!0});var Lo=i(mt);y(_l.$$.fragment,Lo),cF=p(Lo),jf=a(Lo,"P",{});var QC=i(jf);pF=s(QC,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),QC.forEach(t),hF=p(Lo),bl=a(Lo,"P",{});var yv=i(bl);mF=s(yv,"This model inherits from "),oh=a(yv,"A",{href:!0});var VC=i(oh);fF=s(VC,"PreTrainedModel"),VC.forEach(t),uF=s(yv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yv.forEach(t),gF=p(Lo),kl=a(Lo,"P",{});var wv=i(kl);_F=s(wv,"This model is also a PyTorch "),vl=a(wv,"A",{href:!0,rel:!0});var KC=i(vl);bF=s(KC,"torch.nn.Module"),KC.forEach(t),kF=s(wv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wv.forEach(t),vF=p(Lo),gt=a(Lo,"DIV",{class:!0});var Do=i(gt);y(Tl.$$.fragment,Do),TF=p(Do),yn=a(Do,"P",{});var Jh=i(yn);yF=s(Jh,"The "),nh=a(Jh,"A",{href:!0});var JC=i(nh);wF=s(JC,"BertForTokenClassification"),JC.forEach(t),$F=s(Jh," forward method, overrides the "),Cf=a(Jh,"CODE",{});var GC=i(Cf);FF=s(GC,"__call__"),GC.forEach(t),xF=s(Jh," special method."),Jh.forEach(t),BF=p(Do),y(er.$$.fragment,Do),EF=p(Do),y(tr.$$.fragment,Do),zF=p(Do),y(or.$$.fragment,Do),Do.forEach(t),Lo.forEach(t),tk=p(o),wn=a(o,"H2",{class:!0});var $v=i(wn);nr=a($v,"A",{id:!0,class:!0,href:!0});var XC=i(nr);Nf=a(XC,"SPAN",{});var YC=i(Nf);y(yl.$$.fragment,YC),YC.forEach(t),XC.forEach(t),MF=p($v),Of=a($v,"SPAN",{});var ZC=i(Of);PF=s(ZC,"BertForQuestionAnswering"),ZC.forEach(t),$v.forEach(t),ok=p(o),ft=a(o,"DIV",{class:!0});var So=i(ft);y(wl.$$.fragment,So),qF=p(So),$n=a(So,"P",{});var Gh=i($n);jF=s(Gh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),If=a(Gh,"CODE",{});var e5=i(If);CF=s(e5,"span start logits"),e5.forEach(t),NF=s(Gh," and "),Af=a(Gh,"CODE",{});var t5=i(Af);OF=s(t5,"span end logits"),t5.forEach(t),IF=s(Gh,")."),Gh.forEach(t),AF=p(So),$l=a(So,"P",{});var Fv=i($l);LF=s(Fv,"This model inherits from "),sh=a(Fv,"A",{href:!0});var o5=i(sh);DF=s(o5,"PreTrainedModel"),o5.forEach(t),SF=s(Fv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fv.forEach(t),UF=p(So),Fl=a(So,"P",{});var xv=i(Fl);WF=s(xv,"This model is also a PyTorch "),xl=a(xv,"A",{href:!0,rel:!0});var n5=i(xl);HF=s(n5,"torch.nn.Module"),n5.forEach(t),RF=s(xv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xv.forEach(t),QF=p(So),_t=a(So,"DIV",{class:!0});var Uo=i(_t);y(Bl.$$.fragment,Uo),VF=p(Uo),Fn=a(Uo,"P",{});var Xh=i(Fn);KF=s(Xh,"The "),rh=a(Xh,"A",{href:!0});var s5=i(rh);JF=s(s5,"BertForQuestionAnswering"),s5.forEach(t),GF=s(Xh," forward method, overrides the "),Lf=a(Xh,"CODE",{});var r5=i(Lf);XF=s(r5,"__call__"),r5.forEach(t),YF=s(Xh," special method."),Xh.forEach(t),ZF=p(Uo),y(sr.$$.fragment,Uo),ex=p(Uo),y(rr.$$.fragment,Uo),tx=p(Uo),y(ar.$$.fragment,Uo),Uo.forEach(t),So.forEach(t),nk=p(o),xn=a(o,"H2",{class:!0});var Bv=i(xn);ir=a(Bv,"A",{id:!0,class:!0,href:!0});var a5=i(ir);Df=a(a5,"SPAN",{});var i5=i(Df);y(El.$$.fragment,i5),i5.forEach(t),a5.forEach(t),ox=p(Bv),Sf=a(Bv,"SPAN",{});var l5=i(Sf);nx=s(l5,"TFBertModel"),l5.forEach(t),Bv.forEach(t),sk=p(o),Je=a(o,"DIV",{class:!0});var no=i(Je);y(zl.$$.fragment,no),sx=p(no),Uf=a(no,"P",{});var d5=i(Uf);rx=s(d5,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),d5.forEach(t),ax=p(no),Ml=a(no,"P",{});var Ev=i(Ml);ix=s(Ev,"This model inherits from "),ah=a(Ev,"A",{href:!0});var c5=i(ah);lx=s(c5,"TFPreTrainedModel"),c5.forEach(t),dx=s(Ev,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ev.forEach(t),cx=p(no),Pl=a(no,"P",{});var zv=i(Pl);px=s(zv,"This model is also a "),ql=a(zv,"A",{href:!0,rel:!0});var p5=i(ql);hx=s(p5,"tf.keras.Model"),p5.forEach(t),mx=s(zv,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zv.forEach(t),fx=p(no),y(lr.$$.fragment,no),ux=p(no),Ht=a(no,"DIV",{class:!0});var wa=i(Ht);y(jl.$$.fragment,wa),gx=p(wa),Bn=a(wa,"P",{});var Yh=i(Bn);_x=s(Yh,"The "),ih=a(Yh,"A",{href:!0});var h5=i(ih);bx=s(h5,"TFBertModel"),h5.forEach(t),kx=s(Yh," forward method, overrides the "),Wf=a(Yh,"CODE",{});var m5=i(Wf);vx=s(m5,"__call__"),m5.forEach(t),Tx=s(Yh," special method."),Yh.forEach(t),yx=p(wa),y(dr.$$.fragment,wa),wx=p(wa),y(cr.$$.fragment,wa),wa.forEach(t),no.forEach(t),rk=p(o),En=a(o,"H2",{class:!0});var Mv=i(En);pr=a(Mv,"A",{id:!0,class:!0,href:!0});var f5=i(pr);Hf=a(f5,"SPAN",{});var u5=i(Hf);y(Cl.$$.fragment,u5),u5.forEach(t),f5.forEach(t),$x=p(Mv),Rf=a(Mv,"SPAN",{});var g5=i(Rf);Fx=s(g5,"TFBertForPreTraining"),g5.forEach(t),Mv.forEach(t),ak=p(o),Ge=a(o,"DIV",{class:!0});var so=i(Ge);y(Nl.$$.fragment,so),xx=p(so),zn=a(so,"P",{});var Zh=i(zn);Bx=s(Zh,`Bert Model with two heads on top as done during the pretraining:
a `),Qf=a(Zh,"CODE",{});var _5=i(Qf);Ex=s(_5,"masked language modeling"),_5.forEach(t),zx=s(Zh," head and a "),Vf=a(Zh,"CODE",{});var b5=i(Vf);Mx=s(b5,"next sentence prediction (classification)"),b5.forEach(t),Px=s(Zh," head."),Zh.forEach(t),qx=p(so),Ol=a(so,"P",{});var Pv=i(Ol);jx=s(Pv,"This model inherits from "),lh=a(Pv,"A",{href:!0});var k5=i(lh);Cx=s(k5,"TFPreTrainedModel"),k5.forEach(t),Nx=s(Pv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pv.forEach(t),Ox=p(so),Il=a(so,"P",{});var qv=i(Il);Ix=s(qv,"This model is also a "),Al=a(qv,"A",{href:!0,rel:!0});var v5=i(Al);Ax=s(v5,"tf.keras.Model"),v5.forEach(t),Lx=s(qv,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qv.forEach(t),Dx=p(so),y(hr.$$.fragment,so),Sx=p(so),Rt=a(so,"DIV",{class:!0});var $a=i(Rt);y(Ll.$$.fragment,$a),Ux=p($a),Mn=a($a,"P",{});var em=i(Mn);Wx=s(em,"The "),dh=a(em,"A",{href:!0});var T5=i(dh);Hx=s(T5,"TFBertForPreTraining"),T5.forEach(t),Rx=s(em," forward method, overrides the "),Kf=a(em,"CODE",{});var y5=i(Kf);Qx=s(y5,"__call__"),y5.forEach(t),Vx=s(em," special method."),em.forEach(t),Kx=p($a),y(mr.$$.fragment,$a),Jx=p($a),y(fr.$$.fragment,$a),$a.forEach(t),so.forEach(t),ik=p(o),Pn=a(o,"H2",{class:!0});var jv=i(Pn);ur=a(jv,"A",{id:!0,class:!0,href:!0});var w5=i(ur);Jf=a(w5,"SPAN",{});var $5=i(Jf);y(Dl.$$.fragment,$5),$5.forEach(t),w5.forEach(t),Gx=p(jv),Gf=a(jv,"SPAN",{});var F5=i(Gf);Xx=s(F5,"TFBertModelLMHeadModel"),F5.forEach(t),jv.forEach(t),lk=p(o),qn=a(o,"DIV",{class:!0});var Cv=i(qn);y(Sl.$$.fragment,Cv),Yx=p(Cv),bt=a(Cv,"DIV",{class:!0});var Wo=i(bt);y(Ul.$$.fragment,Wo),Zx=p(Wo),Ie=a(Wo,"P",{});var st=i(Ie);e0=s(st,"encoder_hidden_states  ("),Xf=a(st,"CODE",{});var x5=i(Xf);t0=s(x5,"tf.Tensor"),x5.forEach(t),o0=s(st," of shape "),Yf=a(st,"CODE",{});var B5=i(Yf);n0=s(B5,"(batch_size, sequence_length, hidden_size)"),B5.forEach(t),s0=s(st,", "),Zf=a(st,"EM",{});var E5=i(Zf);r0=s(E5,"optional"),E5.forEach(t),a0=s(st,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),eu=a(st,"CODE",{});var z5=i(eu);i0=s(z5,"tf.Tensor"),z5.forEach(t),l0=s(st," of shape "),tu=a(st,"CODE",{});var M5=i(tu);d0=s(M5,"(batch_size, sequence_length)"),M5.forEach(t),c0=s(st,", "),ou=a(st,"EM",{});var P5=i(ou);p0=s(P5,"optional"),P5.forEach(t),h0=s(st,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),nu=a(st,"CODE",{});var q5=i(nu);m0=s(q5,"[0, 1]"),q5.forEach(t),f0=s(st,":"),st.forEach(t),u0=p(Wo),Wl=a(Wo,"UL",{});var Nv=i(Wl);Hl=a(Nv,"LI",{});var Ov=i(Hl);g0=s(Ov,"1 for tokens that are "),su=a(Ov,"STRONG",{});var j5=i(su);_0=s(j5,"not masked"),j5.forEach(t),b0=s(Ov,","),Ov.forEach(t),k0=p(Nv),Rl=a(Nv,"LI",{});var Iv=i(Rl);v0=s(Iv,"0 for tokens that are "),ru=a(Iv,"STRONG",{});var C5=i(ru);T0=s(C5,"masked"),C5.forEach(t),y0=s(Iv,"."),Iv.forEach(t),Nv.forEach(t),w0=p(Wo),G=a(Wo,"P",{});var Z=i(G);$0=s(Z,"past_key_values ("),au=a(Z,"CODE",{});var N5=i(au);F0=s(N5,"Tuple[Tuple[tf.Tensor]]"),N5.forEach(t),x0=s(Z," of length "),iu=a(Z,"CODE",{});var O5=i(iu);B0=s(O5,"config.n_layers"),O5.forEach(t),E0=s(Z,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),lu=a(Z,"CODE",{});var I5=i(lu);z0=s(I5,"past_key_values"),I5.forEach(t),M0=s(Z," are used, the user can optionally input only the last "),du=a(Z,"CODE",{});var A5=i(du);P0=s(A5,"decoder_input_ids"),A5.forEach(t),q0=s(Z,` (those that
don\u2019t have their past key value states given to this model) of shape `),cu=a(Z,"CODE",{});var L5=i(cu);j0=s(L5,"(batch_size, 1)"),L5.forEach(t),C0=s(Z,` instead of all
`),pu=a(Z,"CODE",{});var D5=i(pu);N0=s(D5,"decoder_input_ids"),D5.forEach(t),O0=s(Z," of shape "),hu=a(Z,"CODE",{});var S5=i(hu);I0=s(S5,"(batch_size, sequence_length)"),S5.forEach(t),A0=s(Z,`.
use_cache (`),mu=a(Z,"CODE",{});var U5=i(mu);L0=s(U5,"bool"),U5.forEach(t),D0=s(Z,", "),fu=a(Z,"EM",{});var W5=i(fu);S0=s(W5,"optional"),W5.forEach(t),U0=s(Z,", defaults to "),uu=a(Z,"CODE",{});var H5=i(uu);W0=s(H5,"True"),H5.forEach(t),H0=s(Z,`):
If set to `),gu=a(Z,"CODE",{});var R5=i(gu);R0=s(R5,"True"),R5.forEach(t),Q0=s(Z,", "),_u=a(Z,"CODE",{});var Q5=i(_u);V0=s(Q5,"past_key_values"),Q5.forEach(t),K0=s(Z,` key value states are returned and can be used to speed up decoding (see
`),bu=a(Z,"CODE",{});var V5=i(bu);J0=s(V5,"past_key_values"),V5.forEach(t),G0=s(Z,"). Set to "),ku=a(Z,"CODE",{});var K5=i(ku);X0=s(K5,"False"),K5.forEach(t),Y0=s(Z," during training, "),vu=a(Z,"CODE",{});var J5=i(vu);Z0=s(J5,"True"),J5.forEach(t),e4=s(Z,` during generation
labels (`),Tu=a(Z,"CODE",{});var G5=i(Tu);t4=s(G5,"tf.Tensor"),G5.forEach(t),o4=s(Z," or "),yu=a(Z,"CODE",{});var X5=i(yu);n4=s(X5,"np.ndarray"),X5.forEach(t),s4=s(Z," of shape "),wu=a(Z,"CODE",{});var Y5=i(wu);r4=s(Y5,"(batch_size, sequence_length)"),Y5.forEach(t),a4=s(Z,", "),$u=a(Z,"EM",{});var Z5=i($u);i4=s(Z5,"optional"),Z5.forEach(t),l4=s(Z,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Fu=a(Z,"CODE",{});var e6=i(Fu);d4=s(e6,"[0, ..., config.vocab_size - 1]"),e6.forEach(t),c4=s(Z,"."),Z.forEach(t),p4=p(Wo),y(gr.$$.fragment,Wo),Wo.forEach(t),Cv.forEach(t),dk=p(o),jn=a(o,"H2",{class:!0});var Av=i(jn);_r=a(Av,"A",{id:!0,class:!0,href:!0});var t6=i(_r);xu=a(t6,"SPAN",{});var o6=i(xu);y(Ql.$$.fragment,o6),o6.forEach(t),t6.forEach(t),h4=p(Av),Bu=a(Av,"SPAN",{});var n6=i(Bu);m4=s(n6,"TFBertForMaskedLM"),n6.forEach(t),Av.forEach(t),ck=p(o),Xe=a(o,"DIV",{class:!0});var ro=i(Xe);y(Vl.$$.fragment,ro),f4=p(ro),Kl=a(ro,"P",{});var Lv=i(Kl);u4=s(Lv,"Bert Model with a "),Eu=a(Lv,"CODE",{});var s6=i(Eu);g4=s(s6,"language modeling"),s6.forEach(t),_4=s(Lv," head on top."),Lv.forEach(t),b4=p(ro),Jl=a(ro,"P",{});var Dv=i(Jl);k4=s(Dv,"This model inherits from "),ch=a(Dv,"A",{href:!0});var r6=i(ch);v4=s(r6,"TFPreTrainedModel"),r6.forEach(t),T4=s(Dv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dv.forEach(t),y4=p(ro),Gl=a(ro,"P",{});var Sv=i(Gl);w4=s(Sv,"This model is also a "),Xl=a(Sv,"A",{href:!0,rel:!0});var a6=i(Xl);$4=s(a6,"tf.keras.Model"),a6.forEach(t),F4=s(Sv,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sv.forEach(t),x4=p(ro),y(br.$$.fragment,ro),B4=p(ro),kt=a(ro,"DIV",{class:!0});var Ho=i(kt);y(Yl.$$.fragment,Ho),E4=p(Ho),Cn=a(Ho,"P",{});var tm=i(Cn);z4=s(tm,"The "),ph=a(tm,"A",{href:!0});var i6=i(ph);M4=s(i6,"TFBertForMaskedLM"),i6.forEach(t),P4=s(tm," forward method, overrides the "),zu=a(tm,"CODE",{});var l6=i(zu);q4=s(l6,"__call__"),l6.forEach(t),j4=s(tm," special method."),tm.forEach(t),C4=p(Ho),y(kr.$$.fragment,Ho),N4=p(Ho),y(vr.$$.fragment,Ho),O4=p(Ho),y(Tr.$$.fragment,Ho),Ho.forEach(t),ro.forEach(t),pk=p(o),Nn=a(o,"H2",{class:!0});var Uv=i(Nn);yr=a(Uv,"A",{id:!0,class:!0,href:!0});var d6=i(yr);Mu=a(d6,"SPAN",{});var c6=i(Mu);y(Zl.$$.fragment,c6),c6.forEach(t),d6.forEach(t),I4=p(Uv),Pu=a(Uv,"SPAN",{});var p6=i(Pu);A4=s(p6,"TFBertForNextSentencePrediction"),p6.forEach(t),Uv.forEach(t),hk=p(o),Ye=a(o,"DIV",{class:!0});var ao=i(Ye);y(ed.$$.fragment,ao),L4=p(ao),td=a(ao,"P",{});var Wv=i(td);D4=s(Wv,"Bert Model with a "),qu=a(Wv,"CODE",{});var h6=i(qu);S4=s(h6,"next sentence prediction (classification)"),h6.forEach(t),U4=s(Wv," head on top."),Wv.forEach(t),W4=p(ao),od=a(ao,"P",{});var Hv=i(od);H4=s(Hv,"This model inherits from "),hh=a(Hv,"A",{href:!0});var m6=i(hh);R4=s(m6,"TFPreTrainedModel"),m6.forEach(t),Q4=s(Hv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hv.forEach(t),V4=p(ao),nd=a(ao,"P",{});var Rv=i(nd);K4=s(Rv,"This model is also a "),sd=a(Rv,"A",{href:!0,rel:!0});var f6=i(sd);J4=s(f6,"tf.keras.Model"),f6.forEach(t),G4=s(Rv,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rv.forEach(t),X4=p(ao),y(wr.$$.fragment,ao),Y4=p(ao),Qt=a(ao,"DIV",{class:!0});var Fa=i(Qt);y(rd.$$.fragment,Fa),Z4=p(Fa),On=a(Fa,"P",{});var om=i(On);eB=s(om,"The "),mh=a(om,"A",{href:!0});var u6=i(mh);tB=s(u6,"TFBertForNextSentencePrediction"),u6.forEach(t),oB=s(om," forward method, overrides the "),ju=a(om,"CODE",{});var g6=i(ju);nB=s(g6,"__call__"),g6.forEach(t),sB=s(om," special method."),om.forEach(t),rB=p(Fa),y($r.$$.fragment,Fa),aB=p(Fa),y(Fr.$$.fragment,Fa),Fa.forEach(t),ao.forEach(t),mk=p(o),In=a(o,"H2",{class:!0});var Qv=i(In);xr=a(Qv,"A",{id:!0,class:!0,href:!0});var _6=i(xr);Cu=a(_6,"SPAN",{});var b6=i(Cu);y(ad.$$.fragment,b6),b6.forEach(t),_6.forEach(t),iB=p(Qv),Nu=a(Qv,"SPAN",{});var k6=i(Nu);lB=s(k6,"TFBertForSequenceClassification"),k6.forEach(t),Qv.forEach(t),fk=p(o),Ze=a(o,"DIV",{class:!0});var io=i(Ze);y(id.$$.fragment,io),dB=p(io),Ou=a(io,"P",{});var v6=i(Ou);cB=s(v6,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),v6.forEach(t),pB=p(io),ld=a(io,"P",{});var Vv=i(ld);hB=s(Vv,"This model inherits from "),fh=a(Vv,"A",{href:!0});var T6=i(fh);mB=s(T6,"TFPreTrainedModel"),T6.forEach(t),fB=s(Vv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vv.forEach(t),uB=p(io),dd=a(io,"P",{});var Kv=i(dd);gB=s(Kv,"This model is also a "),cd=a(Kv,"A",{href:!0,rel:!0});var y6=i(cd);_B=s(y6,"tf.keras.Model"),y6.forEach(t),bB=s(Kv,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kv.forEach(t),kB=p(io),y(Br.$$.fragment,io),vB=p(io),vt=a(io,"DIV",{class:!0});var Ro=i(vt);y(pd.$$.fragment,Ro),TB=p(Ro),An=a(Ro,"P",{});var nm=i(An);yB=s(nm,"The "),uh=a(nm,"A",{href:!0});var w6=i(uh);wB=s(w6,"TFBertForSequenceClassification"),w6.forEach(t),$B=s(nm," forward method, overrides the "),Iu=a(nm,"CODE",{});var $6=i(Iu);FB=s($6,"__call__"),$6.forEach(t),xB=s(nm," special method."),nm.forEach(t),BB=p(Ro),y(Er.$$.fragment,Ro),EB=p(Ro),y(zr.$$.fragment,Ro),zB=p(Ro),y(Mr.$$.fragment,Ro),Ro.forEach(t),io.forEach(t),uk=p(o),Ln=a(o,"H2",{class:!0});var Jv=i(Ln);Pr=a(Jv,"A",{id:!0,class:!0,href:!0});var F6=i(Pr);Au=a(F6,"SPAN",{});var x6=i(Au);y(hd.$$.fragment,x6),x6.forEach(t),F6.forEach(t),MB=p(Jv),Lu=a(Jv,"SPAN",{});var B6=i(Lu);PB=s(B6,"TFBertForMultipleChoice"),B6.forEach(t),Jv.forEach(t),gk=p(o),et=a(o,"DIV",{class:!0});var lo=i(et);y(md.$$.fragment,lo),qB=p(lo),Du=a(lo,"P",{});var E6=i(Du);jB=s(E6,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),E6.forEach(t),CB=p(lo),fd=a(lo,"P",{});var Gv=i(fd);NB=s(Gv,"This model inherits from "),gh=a(Gv,"A",{href:!0});var z6=i(gh);OB=s(z6,"TFPreTrainedModel"),z6.forEach(t),IB=s(Gv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gv.forEach(t),AB=p(lo),ud=a(lo,"P",{});var Xv=i(ud);LB=s(Xv,"This model is also a "),gd=a(Xv,"A",{href:!0,rel:!0});var M6=i(gd);DB=s(M6,"tf.keras.Model"),M6.forEach(t),SB=s(Xv,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xv.forEach(t),UB=p(lo),y(qr.$$.fragment,lo),WB=p(lo),Vt=a(lo,"DIV",{class:!0});var xa=i(Vt);y(_d.$$.fragment,xa),HB=p(xa),Dn=a(xa,"P",{});var sm=i(Dn);RB=s(sm,"The "),_h=a(sm,"A",{href:!0});var P6=i(_h);QB=s(P6,"TFBertForMultipleChoice"),P6.forEach(t),VB=s(sm," forward method, overrides the "),Su=a(sm,"CODE",{});var q6=i(Su);KB=s(q6,"__call__"),q6.forEach(t),JB=s(sm," special method."),sm.forEach(t),GB=p(xa),y(jr.$$.fragment,xa),XB=p(xa),y(Cr.$$.fragment,xa),xa.forEach(t),lo.forEach(t),_k=p(o),Sn=a(o,"H2",{class:!0});var Yv=i(Sn);Nr=a(Yv,"A",{id:!0,class:!0,href:!0});var j6=i(Nr);Uu=a(j6,"SPAN",{});var C6=i(Uu);y(bd.$$.fragment,C6),C6.forEach(t),j6.forEach(t),YB=p(Yv),Wu=a(Yv,"SPAN",{});var N6=i(Wu);ZB=s(N6,"TFBertForTokenClassification"),N6.forEach(t),Yv.forEach(t),bk=p(o),tt=a(o,"DIV",{class:!0});var co=i(tt);y(kd.$$.fragment,co),eE=p(co),Hu=a(co,"P",{});var O6=i(Hu);tE=s(O6,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),O6.forEach(t),oE=p(co),vd=a(co,"P",{});var Zv=i(vd);nE=s(Zv,"This model inherits from "),bh=a(Zv,"A",{href:!0});var I6=i(bh);sE=s(I6,"TFPreTrainedModel"),I6.forEach(t),rE=s(Zv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zv.forEach(t),aE=p(co),Td=a(co,"P",{});var e1=i(Td);iE=s(e1,"This model is also a "),yd=a(e1,"A",{href:!0,rel:!0});var A6=i(yd);lE=s(A6,"tf.keras.Model"),A6.forEach(t),dE=s(e1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),e1.forEach(t),cE=p(co),y(Or.$$.fragment,co),pE=p(co),Tt=a(co,"DIV",{class:!0});var Qo=i(Tt);y(wd.$$.fragment,Qo),hE=p(Qo),Un=a(Qo,"P",{});var rm=i(Un);mE=s(rm,"The "),kh=a(rm,"A",{href:!0});var L6=i(kh);fE=s(L6,"TFBertForTokenClassification"),L6.forEach(t),uE=s(rm," forward method, overrides the "),Ru=a(rm,"CODE",{});var D6=i(Ru);gE=s(D6,"__call__"),D6.forEach(t),_E=s(rm," special method."),rm.forEach(t),bE=p(Qo),y(Ir.$$.fragment,Qo),kE=p(Qo),y(Ar.$$.fragment,Qo),vE=p(Qo),y(Lr.$$.fragment,Qo),Qo.forEach(t),co.forEach(t),kk=p(o),Wn=a(o,"H2",{class:!0});var t1=i(Wn);Dr=a(t1,"A",{id:!0,class:!0,href:!0});var S6=i(Dr);Qu=a(S6,"SPAN",{});var U6=i(Qu);y($d.$$.fragment,U6),U6.forEach(t),S6.forEach(t),TE=p(t1),Vu=a(t1,"SPAN",{});var W6=i(Vu);yE=s(W6,"TFBertForQuestionAnswering"),W6.forEach(t),t1.forEach(t),vk=p(o),ot=a(o,"DIV",{class:!0});var po=i(ot);y(Fd.$$.fragment,po),wE=p(po),Hn=a(po,"P",{});var am=i(Hn);$E=s(am,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ku=a(am,"CODE",{});var H6=i(Ku);FE=s(H6,"span start logits"),H6.forEach(t),xE=s(am," and "),Ju=a(am,"CODE",{});var R6=i(Ju);BE=s(R6,"span end logits"),R6.forEach(t),EE=s(am,")."),am.forEach(t),zE=p(po),xd=a(po,"P",{});var o1=i(xd);ME=s(o1,"This model inherits from "),vh=a(o1,"A",{href:!0});var Q6=i(vh);PE=s(Q6,"TFPreTrainedModel"),Q6.forEach(t),qE=s(o1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),o1.forEach(t),jE=p(po),Bd=a(po,"P",{});var n1=i(Bd);CE=s(n1,"This model is also a "),Ed=a(n1,"A",{href:!0,rel:!0});var V6=i(Ed);NE=s(V6,"tf.keras.Model"),V6.forEach(t),OE=s(n1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),n1.forEach(t),IE=p(po),y(Sr.$$.fragment,po),AE=p(po),yt=a(po,"DIV",{class:!0});var Vo=i(yt);y(zd.$$.fragment,Vo),LE=p(Vo),Rn=a(Vo,"P",{});var im=i(Rn);DE=s(im,"The "),Th=a(im,"A",{href:!0});var K6=i(Th);SE=s(K6,"TFBertForQuestionAnswering"),K6.forEach(t),UE=s(im," forward method, overrides the "),Gu=a(im,"CODE",{});var J6=i(Gu);WE=s(J6,"__call__"),J6.forEach(t),HE=s(im," special method."),im.forEach(t),RE=p(Vo),y(Ur.$$.fragment,Vo),QE=p(Vo),y(Wr.$$.fragment,Vo),VE=p(Vo),y(Hr.$$.fragment,Vo),Vo.forEach(t),po.forEach(t),Tk=p(o),Qn=a(o,"H2",{class:!0});var s1=i(Qn);Rr=a(s1,"A",{id:!0,class:!0,href:!0});var G6=i(Rr);Xu=a(G6,"SPAN",{});var X6=i(Xu);y(Md.$$.fragment,X6),X6.forEach(t),G6.forEach(t),KE=p(s1),Yu=a(s1,"SPAN",{});var Y6=i(Yu);JE=s(Y6,"FlaxBertModel"),Y6.forEach(t),s1.forEach(t),yk=p(o),Ae=a(o,"DIV",{class:!0});var xt=i(Ae);y(Pd.$$.fragment,xt),GE=p(xt),Zu=a(xt,"P",{});var Z6=i(Zu);XE=s(Z6,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Z6.forEach(t),YE=p(xt),qd=a(xt,"P",{});var r1=i(qd);ZE=s(r1,"This model inherits from "),yh=a(r1,"A",{href:!0});var eN=i(yh);ez=s(eN,"FlaxPreTrainedModel"),eN.forEach(t),tz=s(r1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),r1.forEach(t),oz=p(xt),jd=a(xt,"P",{});var a1=i(jd);nz=s(a1,"This model is also a Flax Linen "),Cd=a(a1,"A",{href:!0,rel:!0});var tN=i(Cd);sz=s(tN,"flax.linen.Module"),tN.forEach(t),rz=s(a1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),a1.forEach(t),az=p(xt),eg=a(xt,"P",{});var oN=i(eg);iz=s(oN,"Finally, this model supports inherent JAX features such as:"),oN.forEach(t),lz=p(xt),fo=a(xt,"UL",{});var Ba=i(fo);tg=a(Ba,"LI",{});var nN=i(tg);Nd=a(nN,"A",{href:!0,rel:!0});var sN=i(Nd);dz=s(sN,"Just-In-Time (JIT) compilation"),sN.forEach(t),nN.forEach(t),cz=p(Ba),og=a(Ba,"LI",{});var rN=i(og);Od=a(rN,"A",{href:!0,rel:!0});var aN=i(Od);pz=s(aN,"Automatic Differentiation"),aN.forEach(t),rN.forEach(t),hz=p(Ba),ng=a(Ba,"LI",{});var iN=i(ng);Id=a(iN,"A",{href:!0,rel:!0});var lN=i(Id);mz=s(lN,"Vectorization"),lN.forEach(t),iN.forEach(t),fz=p(Ba),sg=a(Ba,"LI",{});var dN=i(sg);Ad=a(dN,"A",{href:!0,rel:!0});var cN=i(Ad);uz=s(cN,"Parallelization"),cN.forEach(t),dN.forEach(t),Ba.forEach(t),gz=p(xt),Kt=a(xt,"DIV",{class:!0});var Ea=i(Kt);y(Ld.$$.fragment,Ea),_z=p(Ea),Vn=a(Ea,"P",{});var lm=i(Vn);bz=s(lm,"The "),rg=a(lm,"CODE",{});var pN=i(rg);kz=s(pN,"FlaxBertPreTrainedModel"),pN.forEach(t),vz=s(lm," forward method, overrides the "),ag=a(lm,"CODE",{});var hN=i(ag);Tz=s(hN,"__call__"),hN.forEach(t),yz=s(lm," special method."),lm.forEach(t),wz=p(Ea),y(Qr.$$.fragment,Ea),$z=p(Ea),y(Vr.$$.fragment,Ea),Ea.forEach(t),xt.forEach(t),wk=p(o),Kn=a(o,"H2",{class:!0});var i1=i(Kn);Kr=a(i1,"A",{id:!0,class:!0,href:!0});var mN=i(Kr);ig=a(mN,"SPAN",{});var fN=i(ig);y(Dd.$$.fragment,fN),fN.forEach(t),mN.forEach(t),Fz=p(i1),lg=a(i1,"SPAN",{});var uN=i(lg);xz=s(uN,"FlaxBertForPreTraining"),uN.forEach(t),i1.forEach(t),$k=p(o),Le=a(o,"DIV",{class:!0});var Bt=i(Le);y(Sd.$$.fragment,Bt),Bz=p(Bt),Jn=a(Bt,"P",{});var dm=i(Jn);Ez=s(dm,"Bert Model with two heads on top as done during the pretraining: a "),dg=a(dm,"CODE",{});var gN=i(dg);zz=s(gN,"masked language modeling"),gN.forEach(t),Mz=s(dm," head and a "),cg=a(dm,"CODE",{});var _N=i(cg);Pz=s(_N,"next sentence prediction (classification)"),_N.forEach(t),qz=s(dm," head."),dm.forEach(t),jz=p(Bt),Ud=a(Bt,"P",{});var l1=i(Ud);Cz=s(l1,"This model inherits from "),wh=a(l1,"A",{href:!0});var bN=i(wh);Nz=s(bN,"FlaxPreTrainedModel"),bN.forEach(t),Oz=s(l1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),l1.forEach(t),Iz=p(Bt),Wd=a(Bt,"P",{});var d1=i(Wd);Az=s(d1,"This model is also a Flax Linen "),Hd=a(d1,"A",{href:!0,rel:!0});var kN=i(Hd);Lz=s(kN,"flax.linen.Module"),kN.forEach(t),Dz=s(d1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),d1.forEach(t),Sz=p(Bt),pg=a(Bt,"P",{});var vN=i(pg);Uz=s(vN,"Finally, this model supports inherent JAX features such as:"),vN.forEach(t),Wz=p(Bt),uo=a(Bt,"UL",{});var za=i(uo);hg=a(za,"LI",{});var TN=i(hg);Rd=a(TN,"A",{href:!0,rel:!0});var yN=i(Rd);Hz=s(yN,"Just-In-Time (JIT) compilation"),yN.forEach(t),TN.forEach(t),Rz=p(za),mg=a(za,"LI",{});var wN=i(mg);Qd=a(wN,"A",{href:!0,rel:!0});var $N=i(Qd);Qz=s($N,"Automatic Differentiation"),$N.forEach(t),wN.forEach(t),Vz=p(za),fg=a(za,"LI",{});var FN=i(fg);Vd=a(FN,"A",{href:!0,rel:!0});var xN=i(Vd);Kz=s(xN,"Vectorization"),xN.forEach(t),FN.forEach(t),Jz=p(za),ug=a(za,"LI",{});var BN=i(ug);Kd=a(BN,"A",{href:!0,rel:!0});var EN=i(Kd);Gz=s(EN,"Parallelization"),EN.forEach(t),BN.forEach(t),za.forEach(t),Xz=p(Bt),Jt=a(Bt,"DIV",{class:!0});var Ma=i(Jt);y(Jd.$$.fragment,Ma),Yz=p(Ma),Gn=a(Ma,"P",{});var cm=i(Gn);Zz=s(cm,"The "),gg=a(cm,"CODE",{});var zN=i(gg);eM=s(zN,"FlaxBertPreTrainedModel"),zN.forEach(t),tM=s(cm," forward method, overrides the "),_g=a(cm,"CODE",{});var MN=i(_g);oM=s(MN,"__call__"),MN.forEach(t),nM=s(cm," special method."),cm.forEach(t),sM=p(Ma),y(Jr.$$.fragment,Ma),rM=p(Ma),y(Gr.$$.fragment,Ma),Ma.forEach(t),Bt.forEach(t),Fk=p(o),Xn=a(o,"H2",{class:!0});var c1=i(Xn);Xr=a(c1,"A",{id:!0,class:!0,href:!0});var PN=i(Xr);bg=a(PN,"SPAN",{});var qN=i(bg);y(Gd.$$.fragment,qN),qN.forEach(t),PN.forEach(t),aM=p(c1),kg=a(c1,"SPAN",{});var jN=i(kg);iM=s(jN,"FlaxBertForCausalLM"),jN.forEach(t),c1.forEach(t),xk=p(o),De=a(o,"DIV",{class:!0});var Et=i(De);y(Xd.$$.fragment,Et),lM=p(Et),vg=a(Et,"P",{});var CN=i(vg);dM=s(CN,`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),CN.forEach(t),cM=p(Et),Yd=a(Et,"P",{});var p1=i(Yd);pM=s(p1,"This model inherits from "),$h=a(p1,"A",{href:!0});var NN=i($h);hM=s(NN,"FlaxPreTrainedModel"),NN.forEach(t),mM=s(p1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),p1.forEach(t),fM=p(Et),Zd=a(Et,"P",{});var h1=i(Zd);uM=s(h1,"This model is also a Flax Linen "),ec=a(h1,"A",{href:!0,rel:!0});var ON=i(ec);gM=s(ON,"flax.linen.Module"),ON.forEach(t),_M=s(h1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),h1.forEach(t),bM=p(Et),Tg=a(Et,"P",{});var IN=i(Tg);kM=s(IN,"Finally, this model supports inherent JAX features such as:"),IN.forEach(t),vM=p(Et),go=a(Et,"UL",{});var Pa=i(go);yg=a(Pa,"LI",{});var AN=i(yg);tc=a(AN,"A",{href:!0,rel:!0});var LN=i(tc);TM=s(LN,"Just-In-Time (JIT) compilation"),LN.forEach(t),AN.forEach(t),yM=p(Pa),wg=a(Pa,"LI",{});var DN=i(wg);oc=a(DN,"A",{href:!0,rel:!0});var SN=i(oc);wM=s(SN,"Automatic Differentiation"),SN.forEach(t),DN.forEach(t),$M=p(Pa),$g=a(Pa,"LI",{});var UN=i($g);nc=a(UN,"A",{href:!0,rel:!0});var WN=i(nc);FM=s(WN,"Vectorization"),WN.forEach(t),UN.forEach(t),xM=p(Pa),Fg=a(Pa,"LI",{});var HN=i(Fg);sc=a(HN,"A",{href:!0,rel:!0});var RN=i(sc);BM=s(RN,"Parallelization"),RN.forEach(t),HN.forEach(t),Pa.forEach(t),EM=p(Et),Gt=a(Et,"DIV",{class:!0});var qa=i(Gt);y(rc.$$.fragment,qa),zM=p(qa),Yn=a(qa,"P",{});var pm=i(Yn);MM=s(pm,"The "),xg=a(pm,"CODE",{});var QN=i(xg);PM=s(QN,"FlaxBertPreTrainedModel"),QN.forEach(t),qM=s(pm," forward method, overrides the "),Bg=a(pm,"CODE",{});var VN=i(Bg);jM=s(VN,"__call__"),VN.forEach(t),CM=s(pm," special method."),pm.forEach(t),NM=p(qa),y(Yr.$$.fragment,qa),OM=p(qa),y(Zr.$$.fragment,qa),qa.forEach(t),Et.forEach(t),Bk=p(o),Zn=a(o,"H2",{class:!0});var m1=i(Zn);ea=a(m1,"A",{id:!0,class:!0,href:!0});var KN=i(ea);Eg=a(KN,"SPAN",{});var JN=i(Eg);y(ac.$$.fragment,JN),JN.forEach(t),KN.forEach(t),IM=p(m1),zg=a(m1,"SPAN",{});var GN=i(zg);AM=s(GN,"FlaxBertForMaskedLM"),GN.forEach(t),m1.forEach(t),Ek=p(o),Se=a(o,"DIV",{class:!0});var zt=i(Se);y(ic.$$.fragment,zt),LM=p(zt),lc=a(zt,"P",{});var f1=i(lc);DM=s(f1,"Bert Model with a "),Mg=a(f1,"CODE",{});var XN=i(Mg);SM=s(XN,"language modeling"),XN.forEach(t),UM=s(f1," head on top."),f1.forEach(t),WM=p(zt),dc=a(zt,"P",{});var u1=i(dc);HM=s(u1,"This model inherits from "),Fh=a(u1,"A",{href:!0});var YN=i(Fh);RM=s(YN,"FlaxPreTrainedModel"),YN.forEach(t),QM=s(u1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),u1.forEach(t),VM=p(zt),cc=a(zt,"P",{});var g1=i(cc);KM=s(g1,"This model is also a Flax Linen "),pc=a(g1,"A",{href:!0,rel:!0});var ZN=i(pc);JM=s(ZN,"flax.linen.Module"),ZN.forEach(t),GM=s(g1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),g1.forEach(t),XM=p(zt),Pg=a(zt,"P",{});var e8=i(Pg);YM=s(e8,"Finally, this model supports inherent JAX features such as:"),e8.forEach(t),ZM=p(zt),_o=a(zt,"UL",{});var ja=i(_o);qg=a(ja,"LI",{});var t8=i(qg);hc=a(t8,"A",{href:!0,rel:!0});var o8=i(hc);eP=s(o8,"Just-In-Time (JIT) compilation"),o8.forEach(t),t8.forEach(t),tP=p(ja),jg=a(ja,"LI",{});var n8=i(jg);mc=a(n8,"A",{href:!0,rel:!0});var s8=i(mc);oP=s(s8,"Automatic Differentiation"),s8.forEach(t),n8.forEach(t),nP=p(ja),Cg=a(ja,"LI",{});var r8=i(Cg);fc=a(r8,"A",{href:!0,rel:!0});var a8=i(fc);sP=s(a8,"Vectorization"),a8.forEach(t),r8.forEach(t),rP=p(ja),Ng=a(ja,"LI",{});var i8=i(Ng);uc=a(i8,"A",{href:!0,rel:!0});var l8=i(uc);aP=s(l8,"Parallelization"),l8.forEach(t),i8.forEach(t),ja.forEach(t),iP=p(zt),Xt=a(zt,"DIV",{class:!0});var Ca=i(Xt);y(gc.$$.fragment,Ca),lP=p(Ca),es=a(Ca,"P",{});var hm=i(es);dP=s(hm,"The "),Og=a(hm,"CODE",{});var d8=i(Og);cP=s(d8,"FlaxBertPreTrainedModel"),d8.forEach(t),pP=s(hm," forward method, overrides the "),Ig=a(hm,"CODE",{});var c8=i(Ig);hP=s(c8,"__call__"),c8.forEach(t),mP=s(hm," special method."),hm.forEach(t),fP=p(Ca),y(ta.$$.fragment,Ca),uP=p(Ca),y(oa.$$.fragment,Ca),Ca.forEach(t),zt.forEach(t),zk=p(o),ts=a(o,"H2",{class:!0});var _1=i(ts);na=a(_1,"A",{id:!0,class:!0,href:!0});var p8=i(na);Ag=a(p8,"SPAN",{});var h8=i(Ag);y(_c.$$.fragment,h8),h8.forEach(t),p8.forEach(t),gP=p(_1),Lg=a(_1,"SPAN",{});var m8=i(Lg);_P=s(m8,"FlaxBertForNextSentencePrediction"),m8.forEach(t),_1.forEach(t),Mk=p(o),Ue=a(o,"DIV",{class:!0});var Mt=i(Ue);y(bc.$$.fragment,Mt),bP=p(Mt),kc=a(Mt,"P",{});var b1=i(kc);kP=s(b1,"Bert Model with a "),Dg=a(b1,"CODE",{});var f8=i(Dg);vP=s(f8,"next sentence prediction (classification)"),f8.forEach(t),TP=s(b1," head on top."),b1.forEach(t),yP=p(Mt),vc=a(Mt,"P",{});var k1=i(vc);wP=s(k1,"This model inherits from "),xh=a(k1,"A",{href:!0});var u8=i(xh);$P=s(u8,"FlaxPreTrainedModel"),u8.forEach(t),FP=s(k1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),k1.forEach(t),xP=p(Mt),Tc=a(Mt,"P",{});var v1=i(Tc);BP=s(v1,"This model is also a Flax Linen "),yc=a(v1,"A",{href:!0,rel:!0});var g8=i(yc);EP=s(g8,"flax.linen.Module"),g8.forEach(t),zP=s(v1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),v1.forEach(t),MP=p(Mt),Sg=a(Mt,"P",{});var _8=i(Sg);PP=s(_8,"Finally, this model supports inherent JAX features such as:"),_8.forEach(t),qP=p(Mt),bo=a(Mt,"UL",{});var Na=i(bo);Ug=a(Na,"LI",{});var b8=i(Ug);wc=a(b8,"A",{href:!0,rel:!0});var k8=i(wc);jP=s(k8,"Just-In-Time (JIT) compilation"),k8.forEach(t),b8.forEach(t),CP=p(Na),Wg=a(Na,"LI",{});var v8=i(Wg);$c=a(v8,"A",{href:!0,rel:!0});var T8=i($c);NP=s(T8,"Automatic Differentiation"),T8.forEach(t),v8.forEach(t),OP=p(Na),Hg=a(Na,"LI",{});var y8=i(Hg);Fc=a(y8,"A",{href:!0,rel:!0});var w8=i(Fc);IP=s(w8,"Vectorization"),w8.forEach(t),y8.forEach(t),AP=p(Na),Rg=a(Na,"LI",{});var $8=i(Rg);xc=a($8,"A",{href:!0,rel:!0});var F8=i(xc);LP=s(F8,"Parallelization"),F8.forEach(t),$8.forEach(t),Na.forEach(t),DP=p(Mt),Yt=a(Mt,"DIV",{class:!0});var Oa=i(Yt);y(Bc.$$.fragment,Oa),SP=p(Oa),os=a(Oa,"P",{});var mm=i(os);UP=s(mm,"The "),Qg=a(mm,"CODE",{});var x8=i(Qg);WP=s(x8,"FlaxBertPreTrainedModel"),x8.forEach(t),HP=s(mm," forward method, overrides the "),Vg=a(mm,"CODE",{});var B8=i(Vg);RP=s(B8,"__call__"),B8.forEach(t),QP=s(mm," special method."),mm.forEach(t),VP=p(Oa),y(sa.$$.fragment,Oa),KP=p(Oa),y(ra.$$.fragment,Oa),Oa.forEach(t),Mt.forEach(t),Pk=p(o),ns=a(o,"H2",{class:!0});var T1=i(ns);aa=a(T1,"A",{id:!0,class:!0,href:!0});var E8=i(aa);Kg=a(E8,"SPAN",{});var z8=i(Kg);y(Ec.$$.fragment,z8),z8.forEach(t),E8.forEach(t),JP=p(T1),Jg=a(T1,"SPAN",{});var M8=i(Jg);GP=s(M8,"FlaxBertForSequenceClassification"),M8.forEach(t),T1.forEach(t),qk=p(o),We=a(o,"DIV",{class:!0});var Pt=i(We);y(zc.$$.fragment,Pt),XP=p(Pt),Gg=a(Pt,"P",{});var P8=i(Gg);YP=s(P8,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),P8.forEach(t),ZP=p(Pt),Mc=a(Pt,"P",{});var y1=i(Mc);eq=s(y1,"This model inherits from "),Bh=a(y1,"A",{href:!0});var q8=i(Bh);tq=s(q8,"FlaxPreTrainedModel"),q8.forEach(t),oq=s(y1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),y1.forEach(t),nq=p(Pt),Pc=a(Pt,"P",{});var w1=i(Pc);sq=s(w1,"This model is also a Flax Linen "),qc=a(w1,"A",{href:!0,rel:!0});var j8=i(qc);rq=s(j8,"flax.linen.Module"),j8.forEach(t),aq=s(w1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),w1.forEach(t),iq=p(Pt),Xg=a(Pt,"P",{});var C8=i(Xg);lq=s(C8,"Finally, this model supports inherent JAX features such as:"),C8.forEach(t),dq=p(Pt),ko=a(Pt,"UL",{});var Ia=i(ko);Yg=a(Ia,"LI",{});var N8=i(Yg);jc=a(N8,"A",{href:!0,rel:!0});var O8=i(jc);cq=s(O8,"Just-In-Time (JIT) compilation"),O8.forEach(t),N8.forEach(t),pq=p(Ia),Zg=a(Ia,"LI",{});var I8=i(Zg);Cc=a(I8,"A",{href:!0,rel:!0});var A8=i(Cc);hq=s(A8,"Automatic Differentiation"),A8.forEach(t),I8.forEach(t),mq=p(Ia),e_=a(Ia,"LI",{});var L8=i(e_);Nc=a(L8,"A",{href:!0,rel:!0});var D8=i(Nc);fq=s(D8,"Vectorization"),D8.forEach(t),L8.forEach(t),uq=p(Ia),t_=a(Ia,"LI",{});var S8=i(t_);Oc=a(S8,"A",{href:!0,rel:!0});var U8=i(Oc);gq=s(U8,"Parallelization"),U8.forEach(t),S8.forEach(t),Ia.forEach(t),_q=p(Pt),Zt=a(Pt,"DIV",{class:!0});var Aa=i(Zt);y(Ic.$$.fragment,Aa),bq=p(Aa),ss=a(Aa,"P",{});var fm=i(ss);kq=s(fm,"The "),o_=a(fm,"CODE",{});var W8=i(o_);vq=s(W8,"FlaxBertPreTrainedModel"),W8.forEach(t),Tq=s(fm," forward method, overrides the "),n_=a(fm,"CODE",{});var H8=i(n_);yq=s(H8,"__call__"),H8.forEach(t),wq=s(fm," special method."),fm.forEach(t),$q=p(Aa),y(ia.$$.fragment,Aa),Fq=p(Aa),y(la.$$.fragment,Aa),Aa.forEach(t),Pt.forEach(t),jk=p(o),rs=a(o,"H2",{class:!0});var $1=i(rs);da=a($1,"A",{id:!0,class:!0,href:!0});var R8=i(da);s_=a(R8,"SPAN",{});var Q8=i(s_);y(Ac.$$.fragment,Q8),Q8.forEach(t),R8.forEach(t),xq=p($1),r_=a($1,"SPAN",{});var V8=i(r_);Bq=s(V8,"FlaxBertForMultipleChoice"),V8.forEach(t),$1.forEach(t),Ck=p(o),He=a(o,"DIV",{class:!0});var qt=i(He);y(Lc.$$.fragment,qt),Eq=p(qt),a_=a(qt,"P",{});var K8=i(a_);zq=s(K8,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),K8.forEach(t),Mq=p(qt),Dc=a(qt,"P",{});var F1=i(Dc);Pq=s(F1,"This model inherits from "),Eh=a(F1,"A",{href:!0});var J8=i(Eh);qq=s(J8,"FlaxPreTrainedModel"),J8.forEach(t),jq=s(F1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),F1.forEach(t),Cq=p(qt),Sc=a(qt,"P",{});var x1=i(Sc);Nq=s(x1,"This model is also a Flax Linen "),Uc=a(x1,"A",{href:!0,rel:!0});var G8=i(Uc);Oq=s(G8,"flax.linen.Module"),G8.forEach(t),Iq=s(x1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),x1.forEach(t),Aq=p(qt),i_=a(qt,"P",{});var X8=i(i_);Lq=s(X8,"Finally, this model supports inherent JAX features such as:"),X8.forEach(t),Dq=p(qt),vo=a(qt,"UL",{});var La=i(vo);l_=a(La,"LI",{});var Y8=i(l_);Wc=a(Y8,"A",{href:!0,rel:!0});var Z8=i(Wc);Sq=s(Z8,"Just-In-Time (JIT) compilation"),Z8.forEach(t),Y8.forEach(t),Uq=p(La),d_=a(La,"LI",{});var e7=i(d_);Hc=a(e7,"A",{href:!0,rel:!0});var t7=i(Hc);Wq=s(t7,"Automatic Differentiation"),t7.forEach(t),e7.forEach(t),Hq=p(La),c_=a(La,"LI",{});var o7=i(c_);Rc=a(o7,"A",{href:!0,rel:!0});var n7=i(Rc);Rq=s(n7,"Vectorization"),n7.forEach(t),o7.forEach(t),Qq=p(La),p_=a(La,"LI",{});var s7=i(p_);Qc=a(s7,"A",{href:!0,rel:!0});var r7=i(Qc);Vq=s(r7,"Parallelization"),r7.forEach(t),s7.forEach(t),La.forEach(t),Kq=p(qt),eo=a(qt,"DIV",{class:!0});var Da=i(eo);y(Vc.$$.fragment,Da),Jq=p(Da),as=a(Da,"P",{});var um=i(as);Gq=s(um,"The "),h_=a(um,"CODE",{});var a7=i(h_);Xq=s(a7,"FlaxBertPreTrainedModel"),a7.forEach(t),Yq=s(um," forward method, overrides the "),m_=a(um,"CODE",{});var i7=i(m_);Zq=s(i7,"__call__"),i7.forEach(t),ej=s(um," special method."),um.forEach(t),tj=p(Da),y(ca.$$.fragment,Da),oj=p(Da),y(pa.$$.fragment,Da),Da.forEach(t),qt.forEach(t),Nk=p(o),is=a(o,"H2",{class:!0});var B1=i(is);ha=a(B1,"A",{id:!0,class:!0,href:!0});var l7=i(ha);f_=a(l7,"SPAN",{});var d7=i(f_);y(Kc.$$.fragment,d7),d7.forEach(t),l7.forEach(t),nj=p(B1),u_=a(B1,"SPAN",{});var c7=i(u_);sj=s(c7,"FlaxBertForTokenClassification"),c7.forEach(t),B1.forEach(t),Ok=p(o),Re=a(o,"DIV",{class:!0});var jt=i(Re);y(Jc.$$.fragment,jt),rj=p(jt),g_=a(jt,"P",{});var p7=i(g_);aj=s(p7,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),p7.forEach(t),ij=p(jt),Gc=a(jt,"P",{});var E1=i(Gc);lj=s(E1,"This model inherits from "),zh=a(E1,"A",{href:!0});var h7=i(zh);dj=s(h7,"FlaxPreTrainedModel"),h7.forEach(t),cj=s(E1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),E1.forEach(t),pj=p(jt),Xc=a(jt,"P",{});var z1=i(Xc);hj=s(z1,"This model is also a Flax Linen "),Yc=a(z1,"A",{href:!0,rel:!0});var m7=i(Yc);mj=s(m7,"flax.linen.Module"),m7.forEach(t),fj=s(z1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),z1.forEach(t),uj=p(jt),__=a(jt,"P",{});var f7=i(__);gj=s(f7,"Finally, this model supports inherent JAX features such as:"),f7.forEach(t),_j=p(jt),To=a(jt,"UL",{});var Sa=i(To);b_=a(Sa,"LI",{});var u7=i(b_);Zc=a(u7,"A",{href:!0,rel:!0});var g7=i(Zc);bj=s(g7,"Just-In-Time (JIT) compilation"),g7.forEach(t),u7.forEach(t),kj=p(Sa),k_=a(Sa,"LI",{});var _7=i(k_);ep=a(_7,"A",{href:!0,rel:!0});var b7=i(ep);vj=s(b7,"Automatic Differentiation"),b7.forEach(t),_7.forEach(t),Tj=p(Sa),v_=a(Sa,"LI",{});var k7=i(v_);tp=a(k7,"A",{href:!0,rel:!0});var v7=i(tp);yj=s(v7,"Vectorization"),v7.forEach(t),k7.forEach(t),wj=p(Sa),T_=a(Sa,"LI",{});var T7=i(T_);op=a(T7,"A",{href:!0,rel:!0});var y7=i(op);$j=s(y7,"Parallelization"),y7.forEach(t),T7.forEach(t),Sa.forEach(t),Fj=p(jt),to=a(jt,"DIV",{class:!0});var Ua=i(to);y(np.$$.fragment,Ua),xj=p(Ua),ls=a(Ua,"P",{});var gm=i(ls);Bj=s(gm,"The "),y_=a(gm,"CODE",{});var w7=i(y_);Ej=s(w7,"FlaxBertPreTrainedModel"),w7.forEach(t),zj=s(gm," forward method, overrides the "),w_=a(gm,"CODE",{});var $7=i(w_);Mj=s($7,"__call__"),$7.forEach(t),Pj=s(gm," special method."),gm.forEach(t),qj=p(Ua),y(ma.$$.fragment,Ua),jj=p(Ua),y(fa.$$.fragment,Ua),Ua.forEach(t),jt.forEach(t),Ik=p(o),ds=a(o,"H2",{class:!0});var M1=i(ds);ua=a(M1,"A",{id:!0,class:!0,href:!0});var F7=i(ua);$_=a(F7,"SPAN",{});var x7=i($_);y(sp.$$.fragment,x7),x7.forEach(t),F7.forEach(t),Cj=p(M1),F_=a(M1,"SPAN",{});var B7=i(F_);Nj=s(B7,"FlaxBertForQuestionAnswering"),B7.forEach(t),M1.forEach(t),Ak=p(o),Qe=a(o,"DIV",{class:!0});var Ct=i(Qe);y(rp.$$.fragment,Ct),Oj=p(Ct),cs=a(Ct,"P",{});var _m=i(cs);Ij=s(_m,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),x_=a(_m,"CODE",{});var E7=i(x_);Aj=s(E7,"span start logits"),E7.forEach(t),Lj=s(_m," and "),B_=a(_m,"CODE",{});var z7=i(B_);Dj=s(z7,"span end logits"),z7.forEach(t),Sj=s(_m,")."),_m.forEach(t),Uj=p(Ct),ap=a(Ct,"P",{});var P1=i(ap);Wj=s(P1,"This model inherits from "),Mh=a(P1,"A",{href:!0});var M7=i(Mh);Hj=s(M7,"FlaxPreTrainedModel"),M7.forEach(t),Rj=s(P1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),P1.forEach(t),Qj=p(Ct),ip=a(Ct,"P",{});var q1=i(ip);Vj=s(q1,"This model is also a Flax Linen "),lp=a(q1,"A",{href:!0,rel:!0});var P7=i(lp);Kj=s(P7,"flax.linen.Module"),P7.forEach(t),Jj=s(q1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),q1.forEach(t),Gj=p(Ct),E_=a(Ct,"P",{});var q7=i(E_);Xj=s(q7,"Finally, this model supports inherent JAX features such as:"),q7.forEach(t),Yj=p(Ct),yo=a(Ct,"UL",{});var Wa=i(yo);z_=a(Wa,"LI",{});var j7=i(z_);dp=a(j7,"A",{href:!0,rel:!0});var C7=i(dp);Zj=s(C7,"Just-In-Time (JIT) compilation"),C7.forEach(t),j7.forEach(t),e3=p(Wa),M_=a(Wa,"LI",{});var N7=i(M_);cp=a(N7,"A",{href:!0,rel:!0});var O7=i(cp);t3=s(O7,"Automatic Differentiation"),O7.forEach(t),N7.forEach(t),o3=p(Wa),P_=a(Wa,"LI",{});var I7=i(P_);pp=a(I7,"A",{href:!0,rel:!0});var A7=i(pp);n3=s(A7,"Vectorization"),A7.forEach(t),I7.forEach(t),s3=p(Wa),q_=a(Wa,"LI",{});var L7=i(q_);hp=a(L7,"A",{href:!0,rel:!0});var D7=i(hp);r3=s(D7,"Parallelization"),D7.forEach(t),L7.forEach(t),Wa.forEach(t),a3=p(Ct),oo=a(Ct,"DIV",{class:!0});var Ha=i(oo);y(mp.$$.fragment,Ha),i3=p(Ha),ps=a(Ha,"P",{});var bm=i(ps);l3=s(bm,"The "),j_=a(bm,"CODE",{});var S7=i(j_);d3=s(S7,"FlaxBertPreTrainedModel"),S7.forEach(t),c3=s(bm," forward method, overrides the "),C_=a(bm,"CODE",{});var U7=i(C_);p3=s(U7,"__call__"),U7.forEach(t),h3=s(bm," special method."),bm.forEach(t),m3=p(Ha),y(ga.$$.fragment,Ha),f3=p(Ha),y(_a.$$.fragment,Ha),Ha.forEach(t),Ct.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(_I)),u(h,"id","bert"),u(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(h,"href","#bert"),u(m,"class","relative group"),u(ne,"id","overview"),u(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ne,"href","#overview"),u(M,"class","relative group"),u(ae,"href","https://arxiv.org/abs/1810.04805"),u(ae,"rel","nofollow"),u(Be,"href","https://huggingface.co/thomwolf"),u(Be,"rel","nofollow"),u(Ee,"href","https://github.com/google-research/bert"),u(Ee,"rel","nofollow"),u(xe,"id","transformers.BertConfig"),u(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xe,"href","#transformers.BertConfig"),u(Fe,"class","relative group"),u(Ep,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertModel"),u(zp,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.TFBertModel"),u(Qa,"href","https://huggingface.co/bert-base-uncased"),u(Qa,"rel","nofollow"),u(Mp,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),u(Pp,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bs,"id","transformers.BertTokenizer"),u(bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bs,"href","#transformers.BertTokenizer"),u(Jo,"class","relative group"),u(qp,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ks,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Np,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ts,"id","transformers.BertTokenizerFast"),u(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ts,"href","#transformers.BertTokenizerFast"),u(Xo,"class","relative group"),u(Op,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ws,"id","transformers.TFBertTokenizer"),u(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ws,"href","#transformers.TFBertTokenizer"),u(Zo,"class","relative group"),u(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xs,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xs,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(on,"class","relative group"),u(Lp,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertForPreTraining"),u(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dp,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.TFBertForPreTraining"),u(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Sp,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertForPreTraining"),u(Bs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Es,"id","transformers.BertModel"),u(Es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Es,"href","#transformers.BertModel"),u(rn,"class","relative group"),u(Up,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),u(Bi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Bi,"rel","nofollow"),u(zi,"href","https://arxiv.org/abs/1706.03762"),u(zi,"rel","nofollow"),u(Wp,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertModel"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ps,"id","transformers.BertForPreTraining"),u(Ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ps,"href","#transformers.BertForPreTraining"),u(ln,"class","relative group"),u(Hp,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),u(Ni,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ni,"rel","nofollow"),u(Rp,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertForPreTraining"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cs,"id","transformers.BertLMHeadModel"),u(Cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cs,"href","#transformers.BertLMHeadModel"),u(pn,"class","relative group"),u(Qp,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),u(Ui,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ui,"rel","nofollow"),u(Vp,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertLMHeadModel"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.BertForMaskedLM"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.BertForMaskedLM"),u(mn,"class","relative group"),u(Kp,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),u(Ji,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ji,"rel","nofollow"),u(Jp,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertForMaskedLM"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ss,"id","transformers.BertForNextSentencePrediction"),u(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ss,"href","#transformers.BertForNextSentencePrediction"),u(un,"class","relative group"),u(Gp,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),u(ol,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ol,"rel","nofollow"),u(Xp,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertForNextSentencePrediction"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.BertForSequenceClassification"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.BertForSequenceClassification"),u(_n,"class","relative group"),u(Yp,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),u(ll,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ll,"rel","nofollow"),u(Zp,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertForSequenceClassification"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gs,"id","transformers.BertForMultipleChoice"),u(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gs,"href","#transformers.BertForMultipleChoice"),u(kn,"class","relative group"),u(eh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),u(fl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(fl,"rel","nofollow"),u(th,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertForMultipleChoice"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zs,"id","transformers.BertForTokenClassification"),u(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zs,"href","#transformers.BertForTokenClassification"),u(Tn,"class","relative group"),u(oh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),u(vl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(vl,"rel","nofollow"),u(nh,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertForTokenClassification"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nr,"id","transformers.BertForQuestionAnswering"),u(nr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(nr,"href","#transformers.BertForQuestionAnswering"),u(wn,"class","relative group"),u(sh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),u(xl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(xl,"rel","nofollow"),u(rh,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertForQuestionAnswering"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ir,"id","transformers.TFBertModel"),u(ir,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ir,"href","#transformers.TFBertModel"),u(xn,"class","relative group"),u(ah,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(ql,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ql,"rel","nofollow"),u(ih,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.TFBertModel"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pr,"id","transformers.TFBertForPreTraining"),u(pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pr,"href","#transformers.TFBertForPreTraining"),u(En,"class","relative group"),u(lh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(Al,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Al,"rel","nofollow"),u(dh,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ur,"id","transformers.TFBertLMHeadModel"),u(ur,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ur,"href","#transformers.TFBertLMHeadModel"),u(Pn,"class","relative group"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_r,"id","transformers.TFBertForMaskedLM"),u(_r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_r,"href","#transformers.TFBertForMaskedLM"),u(jn,"class","relative group"),u(ch,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(Xl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Xl,"rel","nofollow"),u(ph,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.TFBertForMaskedLM"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yr,"id","transformers.TFBertForNextSentencePrediction"),u(yr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yr,"href","#transformers.TFBertForNextSentencePrediction"),u(Nn,"class","relative group"),u(hh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(sd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(sd,"rel","nofollow"),u(mh,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xr,"id","transformers.TFBertForSequenceClassification"),u(xr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xr,"href","#transformers.TFBertForSequenceClassification"),u(In,"class","relative group"),u(fh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(cd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(cd,"rel","nofollow"),u(uh,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.TFBertForSequenceClassification"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pr,"id","transformers.TFBertForMultipleChoice"),u(Pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pr,"href","#transformers.TFBertForMultipleChoice"),u(Ln,"class","relative group"),u(gh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(gd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(gd,"rel","nofollow"),u(_h,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.TFBertForMultipleChoice"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nr,"id","transformers.TFBertForTokenClassification"),u(Nr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Nr,"href","#transformers.TFBertForTokenClassification"),u(Sn,"class","relative group"),u(bh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(yd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(yd,"rel","nofollow"),u(kh,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.TFBertForTokenClassification"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dr,"id","transformers.TFBertForQuestionAnswering"),u(Dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dr,"href","#transformers.TFBertForQuestionAnswering"),u(Wn,"class","relative group"),u(vh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ed,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ed,"rel","nofollow"),u(Th,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rr,"id","transformers.FlaxBertModel"),u(Rr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rr,"href","#transformers.FlaxBertModel"),u(Qn,"class","relative group"),u(yh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Cd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Cd,"rel","nofollow"),u(Nd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Nd,"rel","nofollow"),u(Od,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Od,"rel","nofollow"),u(Id,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Id,"rel","nofollow"),u(Ad,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ad,"rel","nofollow"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Kr,"id","transformers.FlaxBertForPreTraining"),u(Kr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Kr,"href","#transformers.FlaxBertForPreTraining"),u(Kn,"class","relative group"),u(wh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Hd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Hd,"rel","nofollow"),u(Rd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Rd,"rel","nofollow"),u(Qd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Qd,"rel","nofollow"),u(Vd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Vd,"rel","nofollow"),u(Kd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Kd,"rel","nofollow"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xr,"id","transformers.FlaxBertForCausalLM"),u(Xr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xr,"href","#transformers.FlaxBertForCausalLM"),u(Xn,"class","relative group"),u($h,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ec,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ec,"rel","nofollow"),u(tc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(tc,"rel","nofollow"),u(oc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(oc,"rel","nofollow"),u(nc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(nc,"rel","nofollow"),u(sc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(sc,"rel","nofollow"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ea,"id","transformers.FlaxBertForMaskedLM"),u(ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ea,"href","#transformers.FlaxBertForMaskedLM"),u(Zn,"class","relative group"),u(Fh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(pc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(pc,"rel","nofollow"),u(hc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(hc,"rel","nofollow"),u(mc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(mc,"rel","nofollow"),u(fc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(fc,"rel","nofollow"),u(uc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(uc,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(na,"id","transformers.FlaxBertForNextSentencePrediction"),u(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(na,"href","#transformers.FlaxBertForNextSentencePrediction"),u(ts,"class","relative group"),u(xh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(yc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(yc,"rel","nofollow"),u(wc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(wc,"rel","nofollow"),u($c,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u($c,"rel","nofollow"),u(Fc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Fc,"rel","nofollow"),u(xc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(xc,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(aa,"id","transformers.FlaxBertForSequenceClassification"),u(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(aa,"href","#transformers.FlaxBertForSequenceClassification"),u(ns,"class","relative group"),u(Bh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(qc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(qc,"rel","nofollow"),u(jc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(jc,"rel","nofollow"),u(Cc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Cc,"rel","nofollow"),u(Nc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Nc,"rel","nofollow"),u(Oc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Oc,"rel","nofollow"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(da,"id","transformers.FlaxBertForMultipleChoice"),u(da,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(da,"href","#transformers.FlaxBertForMultipleChoice"),u(rs,"class","relative group"),u(Eh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Uc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Uc,"rel","nofollow"),u(Wc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Wc,"rel","nofollow"),u(Hc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Hc,"rel","nofollow"),u(Rc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Rc,"rel","nofollow"),u(Qc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Qc,"rel","nofollow"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ha,"id","transformers.FlaxBertForTokenClassification"),u(ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ha,"href","#transformers.FlaxBertForTokenClassification"),u(is,"class","relative group"),u(zh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Yc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Yc,"rel","nofollow"),u(Zc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Zc,"rel","nofollow"),u(ep,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ep,"rel","nofollow"),u(tp,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(tp,"rel","nofollow"),u(op,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(op,"rel","nofollow"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ua,"id","transformers.FlaxBertForQuestionAnswering"),u(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ua,"href","#transformers.FlaxBertForQuestionAnswering"),u(ds,"class","relative group"),u(Mh,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(lp,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(lp,"rel","nofollow"),u(dp,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(dp,"rel","nofollow"),u(cp,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(cp,"rel","nofollow"),u(pp,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(pp,"rel","nofollow"),u(hp,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(hp,"rel","nofollow"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),b(o,_,k),b(o,m,k),e(m,h),e(h,g),w(l,g,null),e(m,f),e(m,E),e(E,be),b(o,X,k),b(o,M,k),e(M,ne),e(ne,L),w(re,L,null),e(M,ke),e(M,D),e(D,ve),b(o,me,k),b(o,J,k),e(J,O),e(J,ae),e(ae,Y),e(J,P),b(o,j,k),b(o,ie,k),e(ie,H),b(o,fe,k),b(o,le,k),e(le,S),e(S,Te),b(o,ue,k),b(o,q,k),e(q,ce),e(ce,R),b(o,ge,k),b(o,de,k),e(de,Q),b(o,_e,k),b(o,se,k),e(se,N),e(N,ye),e(se,V),e(se,pe),e(pe,v),b(o,z,k),b(o,K,k),e(K,Me),e(K,Be),e(Be,I),e(K,Pe),e(K,Ee),e(Ee,qe),e(K,A),b(o,W,k),b(o,Fe,k),e(Fe,xe),e(xe,U),w(ze,U,null),e(Fe,je),e(Fe,he),e(he,Ce),b(o,Eb,k),b(o,Nt,k),w(Ra,Nt,null),e(Nt,j1),e(Nt,ho),e(ho,C1),e(ho,Ep),e(Ep,N1),e(ho,O1),e(ho,zp),e(zp,I1),e(ho,A1),e(ho,Qa),e(Qa,L1),e(ho,D1),e(Nt,S1),e(Nt,Ko),e(Ko,U1),e(Ko,Mp),e(Mp,W1),e(Ko,H1),e(Ko,Pp),e(Pp,R1),e(Ko,Q1),e(Nt,V1),w(_s,Nt,null),b(o,zb,k),b(o,Jo,k),e(Jo,bs),e(bs,km),w(Va,km,null),e(Jo,K1),e(Jo,vm),e(vm,J1),b(o,Mb,k),b(o,Ne,k),w(Ka,Ne,null),e(Ne,G1),e(Ne,Tm),e(Tm,X1),e(Ne,Y1),e(Ne,Ja),e(Ja,Z1),e(Ja,qp),e(qp,eT),e(Ja,tT),e(Ne,oT),e(Ne,Bo),w(Ga,Bo,null),e(Bo,nT),e(Bo,ym),e(ym,sT),e(Bo,rT),e(Bo,Xa),e(Xa,jp),e(jp,aT),e(jp,wm),e(wm,iT),e(Xa,lT),e(Xa,Cp),e(Cp,dT),e(Cp,$m),e($m,cT),e(Ne,pT),e(Ne,ks),w(Ya,ks,null),e(ks,hT),e(ks,Za),e(Za,mT),e(Za,Fm),e(Fm,fT),e(Za,uT),e(Ne,gT),e(Ne,It),w(ei,It,null),e(It,_T),e(It,xm),e(xm,bT),e(It,kT),w(vs,It,null),e(It,vT),e(It,Go),e(Go,TT),e(Go,Bm),e(Bm,yT),e(Go,wT),e(Go,Em),e(Em,$T),e(Go,FT),e(Ne,xT),e(Ne,Np),w(ti,Np,null),b(o,Pb,k),b(o,Xo,k),e(Xo,Ts),e(Ts,zm),w(oi,zm,null),e(Xo,BT),e(Xo,Mm),e(Mm,ET),b(o,qb,k),b(o,rt,k),w(ni,rt,null),e(rt,zT),e(rt,si),e(si,MT),e(si,Pm),e(Pm,PT),e(si,qT),e(rt,jT),e(rt,ri),e(ri,CT),e(ri,Op),e(Op,NT),e(ri,OT),e(rt,IT),e(rt,Eo),w(ai,Eo,null),e(Eo,AT),e(Eo,qm),e(qm,LT),e(Eo,DT),e(Eo,ii),e(ii,Ip),e(Ip,ST),e(Ip,jm),e(jm,UT),e(ii,WT),e(ii,Ap),e(Ap,HT),e(Ap,Cm),e(Cm,RT),e(rt,QT),e(rt,At),w(li,At,null),e(At,VT),e(At,Nm),e(Nm,KT),e(At,JT),w(ys,At,null),e(At,GT),e(At,Yo),e(Yo,XT),e(Yo,Om),e(Om,YT),e(Yo,ZT),e(Yo,Im),e(Im,ey),e(Yo,ty),b(o,jb,k),b(o,Zo,k),e(Zo,ws),e(ws,Am),w(di,Am,null),e(Zo,oy),e(Zo,Lm),e(Lm,ny),b(o,Cb,k),b(o,at,k),w(ci,at,null),e(at,sy),e(at,en),e(en,ry),e(en,Dm),e(Dm,ay),e(en,iy),e(en,Sm),e(Sm,ly),e(en,dy),e(at,cy),e(at,pi),e(pi,py),e(pi,Um),e(Um,hy),e(pi,my),e(at,fy),e(at,zo),w(hi,zo,null),e(zo,uy),e(zo,mi),e(mi,gy),e(mi,Wm),e(Wm,_y),e(mi,by),e(zo,ky),w($s,zo,null),e(at,vy),e(at,Mo),w(fi,Mo,null),e(Mo,Ty),e(Mo,tn),e(tn,yy),e(tn,Hm),e(Hm,wy),e(tn,$y),e(tn,Rm),e(Rm,Fy),e(tn,xy),e(Mo,By),w(Fs,Mo,null),b(o,Nb,k),b(o,on,k),e(on,xs),e(xs,Qm),w(ui,Qm,null),e(on,Ey),e(on,Vm),e(Vm,zy),b(o,Ob,k),b(o,nn,k),w(gi,nn,null),e(nn,My),e(nn,_i),e(_i,Py),e(_i,Lp),e(Lp,qy),e(_i,jy),b(o,Ib,k),b(o,sn,k),w(bi,sn,null),e(sn,Cy),e(sn,ki),e(ki,Ny),e(ki,Dp),e(Dp,Oy),e(ki,Iy),b(o,Ab,k),b(o,mo,k),w(vi,mo,null),e(mo,Ay),e(mo,Ti),e(Ti,Ly),e(Ti,Sp),e(Sp,Dy),e(Ti,Sy),e(mo,Uy),e(mo,Bs),w(yi,Bs,null),e(Bs,Wy),e(Bs,Km),e(Km,Hy),b(o,Lb,k),b(o,rn,k),e(rn,Es),e(Es,Jm),w(wi,Jm,null),e(rn,Ry),e(rn,Gm),e(Gm,Qy),b(o,Db,k),b(o,Oe,k),w($i,Oe,null),e(Oe,Vy),e(Oe,Xm),e(Xm,Ky),e(Oe,Jy),e(Oe,Fi),e(Fi,Gy),e(Fi,Up),e(Up,Xy),e(Fi,Yy),e(Oe,Zy),e(Oe,xi),e(xi,ew),e(xi,Bi),e(Bi,tw),e(xi,ow),e(Oe,nw),e(Oe,Ei),e(Ei,sw),e(Ei,zi),e(zi,rw),e(Ei,aw),e(Oe,iw),e(Oe,Ke),e(Ke,lw),e(Ke,Ym),e(Ym,dw),e(Ke,cw),e(Ke,Zm),e(Zm,pw),e(Ke,hw),e(Ke,ef),e(ef,mw),e(Ke,fw),e(Ke,tf),e(tf,uw),e(Ke,gw),e(Ke,of),e(of,_w),e(Ke,bw),e(Ke,nf),e(nf,kw),e(Ke,vw),e(Oe,Tw),e(Oe,Lt),w(Mi,Lt,null),e(Lt,yw),e(Lt,an),e(an,ww),e(an,Wp),e(Wp,$w),e(an,Fw),e(an,sf),e(sf,xw),e(an,Bw),e(Lt,Ew),w(zs,Lt,null),e(Lt,zw),w(Ms,Lt,null),b(o,Sb,k),b(o,ln,k),e(ln,Ps),e(Ps,rf),w(Pi,rf,null),e(ln,Mw),e(ln,af),e(af,Pw),b(o,Ub,k),b(o,it,k),w(qi,it,null),e(it,qw),e(it,dn),e(dn,jw),e(dn,lf),e(lf,Cw),e(dn,Nw),e(dn,df),e(df,Ow),e(dn,Iw),e(it,Aw),e(it,ji),e(ji,Lw),e(ji,Hp),e(Hp,Dw),e(ji,Sw),e(it,Uw),e(it,Ci),e(Ci,Ww),e(Ci,Ni),e(Ni,Hw),e(Ci,Rw),e(it,Qw),e(it,Dt),w(Oi,Dt,null),e(Dt,Vw),e(Dt,cn),e(cn,Kw),e(cn,Rp),e(Rp,Jw),e(cn,Gw),e(cn,cf),e(cf,Xw),e(cn,Yw),e(Dt,Zw),w(qs,Dt,null),e(Dt,e$),w(js,Dt,null),b(o,Wb,k),b(o,pn,k),e(pn,Cs),e(Cs,pf),w(Ii,pf,null),e(pn,t$),e(pn,hf),e(hf,o$),b(o,Hb,k),b(o,lt,k),w(Ai,lt,null),e(lt,n$),e(lt,Li),e(Li,s$),e(Li,mf),e(mf,r$),e(Li,a$),e(lt,i$),e(lt,Di),e(Di,l$),e(Di,Qp),e(Qp,d$),e(Di,c$),e(lt,p$),e(lt,Si),e(Si,h$),e(Si,Ui),e(Ui,m$),e(Si,f$),e(lt,u$),e(lt,St),w(Wi,St,null),e(St,g$),e(St,hn),e(hn,_$),e(hn,Vp),e(Vp,b$),e(hn,k$),e(hn,ff),e(ff,v$),e(hn,T$),e(St,y$),w(Ns,St,null),e(St,w$),w(Os,St,null),b(o,Rb,k),b(o,mn,k),e(mn,Is),e(Is,uf),w(Hi,uf,null),e(mn,$$),e(mn,gf),e(gf,F$),b(o,Qb,k),b(o,dt,k),w(Ri,dt,null),e(dt,x$),e(dt,Qi),e(Qi,B$),e(Qi,_f),e(_f,E$),e(Qi,z$),e(dt,M$),e(dt,Vi),e(Vi,P$),e(Vi,Kp),e(Kp,q$),e(Vi,j$),e(dt,C$),e(dt,Ki),e(Ki,N$),e(Ki,Ji),e(Ji,O$),e(Ki,I$),e(dt,A$),e(dt,ut),w(Gi,ut,null),e(ut,L$),e(ut,fn),e(fn,D$),e(fn,Jp),e(Jp,S$),e(fn,U$),e(fn,bf),e(bf,W$),e(fn,H$),e(ut,R$),w(As,ut,null),e(ut,Q$),w(Ls,ut,null),e(ut,V$),w(Ds,ut,null),b(o,Vb,k),b(o,un,k),e(un,Ss),e(Ss,kf),w(Xi,kf,null),e(un,K$),e(un,vf),e(vf,J$),b(o,Kb,k),b(o,ct,k),w(Yi,ct,null),e(ct,G$),e(ct,Zi),e(Zi,X$),e(Zi,Tf),e(Tf,Y$),e(Zi,Z$),e(ct,e2),e(ct,el),e(el,t2),e(el,Gp),e(Gp,o2),e(el,n2),e(ct,s2),e(ct,tl),e(tl,r2),e(tl,ol),e(ol,a2),e(tl,i2),e(ct,l2),e(ct,Ut),w(nl,Ut,null),e(Ut,d2),e(Ut,gn),e(gn,c2),e(gn,Xp),e(Xp,p2),e(gn,h2),e(gn,yf),e(yf,m2),e(gn,f2),e(Ut,u2),w(Us,Ut,null),e(Ut,g2),w(Ws,Ut,null),b(o,Jb,k),b(o,_n,k),e(_n,Hs),e(Hs,wf),w(sl,wf,null),e(_n,_2),e(_n,$f),e($f,b2),b(o,Gb,k),b(o,pt,k),w(rl,pt,null),e(pt,k2),e(pt,Ff),e(Ff,v2),e(pt,T2),e(pt,al),e(al,y2),e(al,Yp),e(Yp,w2),e(al,$2),e(pt,F2),e(pt,il),e(il,x2),e(il,ll),e(ll,B2),e(il,E2),e(pt,z2),e(pt,Ve),w(dl,Ve,null),e(Ve,M2),e(Ve,bn),e(bn,P2),e(bn,Zp),e(Zp,q2),e(bn,j2),e(bn,xf),e(xf,C2),e(bn,N2),e(Ve,O2),w(Rs,Ve,null),e(Ve,I2),w(Qs,Ve,null),e(Ve,A2),w(Vs,Ve,null),e(Ve,L2),w(Ks,Ve,null),e(Ve,D2),w(Js,Ve,null),b(o,Xb,k),b(o,kn,k),e(kn,Gs),e(Gs,Bf),w(cl,Bf,null),e(kn,S2),e(kn,Ef),e(Ef,U2),b(o,Yb,k),b(o,ht,k),w(pl,ht,null),e(ht,W2),e(ht,zf),e(zf,H2),e(ht,R2),e(ht,hl),e(hl,Q2),e(hl,eh),e(eh,V2),e(hl,K2),e(ht,J2),e(ht,ml),e(ml,G2),e(ml,fl),e(fl,X2),e(ml,Y2),e(ht,Z2),e(ht,Wt),w(ul,Wt,null),e(Wt,eF),e(Wt,vn),e(vn,tF),e(vn,th),e(th,oF),e(vn,nF),e(vn,Mf),e(Mf,sF),e(vn,rF),e(Wt,aF),w(Xs,Wt,null),e(Wt,iF),w(Ys,Wt,null),b(o,Zb,k),b(o,Tn,k),e(Tn,Zs),e(Zs,Pf),w(gl,Pf,null),e(Tn,lF),e(Tn,qf),e(qf,dF),b(o,ek,k),b(o,mt,k),w(_l,mt,null),e(mt,cF),e(mt,jf),e(jf,pF),e(mt,hF),e(mt,bl),e(bl,mF),e(bl,oh),e(oh,fF),e(bl,uF),e(mt,gF),e(mt,kl),e(kl,_F),e(kl,vl),e(vl,bF),e(kl,kF),e(mt,vF),e(mt,gt),w(Tl,gt,null),e(gt,TF),e(gt,yn),e(yn,yF),e(yn,nh),e(nh,wF),e(yn,$F),e(yn,Cf),e(Cf,FF),e(yn,xF),e(gt,BF),w(er,gt,null),e(gt,EF),w(tr,gt,null),e(gt,zF),w(or,gt,null),b(o,tk,k),b(o,wn,k),e(wn,nr),e(nr,Nf),w(yl,Nf,null),e(wn,MF),e(wn,Of),e(Of,PF),b(o,ok,k),b(o,ft,k),w(wl,ft,null),e(ft,qF),e(ft,$n),e($n,jF),e($n,If),e(If,CF),e($n,NF),e($n,Af),e(Af,OF),e($n,IF),e(ft,AF),e(ft,$l),e($l,LF),e($l,sh),e(sh,DF),e($l,SF),e(ft,UF),e(ft,Fl),e(Fl,WF),e(Fl,xl),e(xl,HF),e(Fl,RF),e(ft,QF),e(ft,_t),w(Bl,_t,null),e(_t,VF),e(_t,Fn),e(Fn,KF),e(Fn,rh),e(rh,JF),e(Fn,GF),e(Fn,Lf),e(Lf,XF),e(Fn,YF),e(_t,ZF),w(sr,_t,null),e(_t,ex),w(rr,_t,null),e(_t,tx),w(ar,_t,null),b(o,nk,k),b(o,xn,k),e(xn,ir),e(ir,Df),w(El,Df,null),e(xn,ox),e(xn,Sf),e(Sf,nx),b(o,sk,k),b(o,Je,k),w(zl,Je,null),e(Je,sx),e(Je,Uf),e(Uf,rx),e(Je,ax),e(Je,Ml),e(Ml,ix),e(Ml,ah),e(ah,lx),e(Ml,dx),e(Je,cx),e(Je,Pl),e(Pl,px),e(Pl,ql),e(ql,hx),e(Pl,mx),e(Je,fx),w(lr,Je,null),e(Je,ux),e(Je,Ht),w(jl,Ht,null),e(Ht,gx),e(Ht,Bn),e(Bn,_x),e(Bn,ih),e(ih,bx),e(Bn,kx),e(Bn,Wf),e(Wf,vx),e(Bn,Tx),e(Ht,yx),w(dr,Ht,null),e(Ht,wx),w(cr,Ht,null),b(o,rk,k),b(o,En,k),e(En,pr),e(pr,Hf),w(Cl,Hf,null),e(En,$x),e(En,Rf),e(Rf,Fx),b(o,ak,k),b(o,Ge,k),w(Nl,Ge,null),e(Ge,xx),e(Ge,zn),e(zn,Bx),e(zn,Qf),e(Qf,Ex),e(zn,zx),e(zn,Vf),e(Vf,Mx),e(zn,Px),e(Ge,qx),e(Ge,Ol),e(Ol,jx),e(Ol,lh),e(lh,Cx),e(Ol,Nx),e(Ge,Ox),e(Ge,Il),e(Il,Ix),e(Il,Al),e(Al,Ax),e(Il,Lx),e(Ge,Dx),w(hr,Ge,null),e(Ge,Sx),e(Ge,Rt),w(Ll,Rt,null),e(Rt,Ux),e(Rt,Mn),e(Mn,Wx),e(Mn,dh),e(dh,Hx),e(Mn,Rx),e(Mn,Kf),e(Kf,Qx),e(Mn,Vx),e(Rt,Kx),w(mr,Rt,null),e(Rt,Jx),w(fr,Rt,null),b(o,ik,k),b(o,Pn,k),e(Pn,ur),e(ur,Jf),w(Dl,Jf,null),e(Pn,Gx),e(Pn,Gf),e(Gf,Xx),b(o,lk,k),b(o,qn,k),w(Sl,qn,null),e(qn,Yx),e(qn,bt),w(Ul,bt,null),e(bt,Zx),e(bt,Ie),e(Ie,e0),e(Ie,Xf),e(Xf,t0),e(Ie,o0),e(Ie,Yf),e(Yf,n0),e(Ie,s0),e(Ie,Zf),e(Zf,r0),e(Ie,a0),e(Ie,eu),e(eu,i0),e(Ie,l0),e(Ie,tu),e(tu,d0),e(Ie,c0),e(Ie,ou),e(ou,p0),e(Ie,h0),e(Ie,nu),e(nu,m0),e(Ie,f0),e(bt,u0),e(bt,Wl),e(Wl,Hl),e(Hl,g0),e(Hl,su),e(su,_0),e(Hl,b0),e(Wl,k0),e(Wl,Rl),e(Rl,v0),e(Rl,ru),e(ru,T0),e(Rl,y0),e(bt,w0),e(bt,G),e(G,$0),e(G,au),e(au,F0),e(G,x0),e(G,iu),e(iu,B0),e(G,E0),e(G,lu),e(lu,z0),e(G,M0),e(G,du),e(du,P0),e(G,q0),e(G,cu),e(cu,j0),e(G,C0),e(G,pu),e(pu,N0),e(G,O0),e(G,hu),e(hu,I0),e(G,A0),e(G,mu),e(mu,L0),e(G,D0),e(G,fu),e(fu,S0),e(G,U0),e(G,uu),e(uu,W0),e(G,H0),e(G,gu),e(gu,R0),e(G,Q0),e(G,_u),e(_u,V0),e(G,K0),e(G,bu),e(bu,J0),e(G,G0),e(G,ku),e(ku,X0),e(G,Y0),e(G,vu),e(vu,Z0),e(G,e4),e(G,Tu),e(Tu,t4),e(G,o4),e(G,yu),e(yu,n4),e(G,s4),e(G,wu),e(wu,r4),e(G,a4),e(G,$u),e($u,i4),e(G,l4),e(G,Fu),e(Fu,d4),e(G,c4),e(bt,p4),w(gr,bt,null),b(o,dk,k),b(o,jn,k),e(jn,_r),e(_r,xu),w(Ql,xu,null),e(jn,h4),e(jn,Bu),e(Bu,m4),b(o,ck,k),b(o,Xe,k),w(Vl,Xe,null),e(Xe,f4),e(Xe,Kl),e(Kl,u4),e(Kl,Eu),e(Eu,g4),e(Kl,_4),e(Xe,b4),e(Xe,Jl),e(Jl,k4),e(Jl,ch),e(ch,v4),e(Jl,T4),e(Xe,y4),e(Xe,Gl),e(Gl,w4),e(Gl,Xl),e(Xl,$4),e(Gl,F4),e(Xe,x4),w(br,Xe,null),e(Xe,B4),e(Xe,kt),w(Yl,kt,null),e(kt,E4),e(kt,Cn),e(Cn,z4),e(Cn,ph),e(ph,M4),e(Cn,P4),e(Cn,zu),e(zu,q4),e(Cn,j4),e(kt,C4),w(kr,kt,null),e(kt,N4),w(vr,kt,null),e(kt,O4),w(Tr,kt,null),b(o,pk,k),b(o,Nn,k),e(Nn,yr),e(yr,Mu),w(Zl,Mu,null),e(Nn,I4),e(Nn,Pu),e(Pu,A4),b(o,hk,k),b(o,Ye,k),w(ed,Ye,null),e(Ye,L4),e(Ye,td),e(td,D4),e(td,qu),e(qu,S4),e(td,U4),e(Ye,W4),e(Ye,od),e(od,H4),e(od,hh),e(hh,R4),e(od,Q4),e(Ye,V4),e(Ye,nd),e(nd,K4),e(nd,sd),e(sd,J4),e(nd,G4),e(Ye,X4),w(wr,Ye,null),e(Ye,Y4),e(Ye,Qt),w(rd,Qt,null),e(Qt,Z4),e(Qt,On),e(On,eB),e(On,mh),e(mh,tB),e(On,oB),e(On,ju),e(ju,nB),e(On,sB),e(Qt,rB),w($r,Qt,null),e(Qt,aB),w(Fr,Qt,null),b(o,mk,k),b(o,In,k),e(In,xr),e(xr,Cu),w(ad,Cu,null),e(In,iB),e(In,Nu),e(Nu,lB),b(o,fk,k),b(o,Ze,k),w(id,Ze,null),e(Ze,dB),e(Ze,Ou),e(Ou,cB),e(Ze,pB),e(Ze,ld),e(ld,hB),e(ld,fh),e(fh,mB),e(ld,fB),e(Ze,uB),e(Ze,dd),e(dd,gB),e(dd,cd),e(cd,_B),e(dd,bB),e(Ze,kB),w(Br,Ze,null),e(Ze,vB),e(Ze,vt),w(pd,vt,null),e(vt,TB),e(vt,An),e(An,yB),e(An,uh),e(uh,wB),e(An,$B),e(An,Iu),e(Iu,FB),e(An,xB),e(vt,BB),w(Er,vt,null),e(vt,EB),w(zr,vt,null),e(vt,zB),w(Mr,vt,null),b(o,uk,k),b(o,Ln,k),e(Ln,Pr),e(Pr,Au),w(hd,Au,null),e(Ln,MB),e(Ln,Lu),e(Lu,PB),b(o,gk,k),b(o,et,k),w(md,et,null),e(et,qB),e(et,Du),e(Du,jB),e(et,CB),e(et,fd),e(fd,NB),e(fd,gh),e(gh,OB),e(fd,IB),e(et,AB),e(et,ud),e(ud,LB),e(ud,gd),e(gd,DB),e(ud,SB),e(et,UB),w(qr,et,null),e(et,WB),e(et,Vt),w(_d,Vt,null),e(Vt,HB),e(Vt,Dn),e(Dn,RB),e(Dn,_h),e(_h,QB),e(Dn,VB),e(Dn,Su),e(Su,KB),e(Dn,JB),e(Vt,GB),w(jr,Vt,null),e(Vt,XB),w(Cr,Vt,null),b(o,_k,k),b(o,Sn,k),e(Sn,Nr),e(Nr,Uu),w(bd,Uu,null),e(Sn,YB),e(Sn,Wu),e(Wu,ZB),b(o,bk,k),b(o,tt,k),w(kd,tt,null),e(tt,eE),e(tt,Hu),e(Hu,tE),e(tt,oE),e(tt,vd),e(vd,nE),e(vd,bh),e(bh,sE),e(vd,rE),e(tt,aE),e(tt,Td),e(Td,iE),e(Td,yd),e(yd,lE),e(Td,dE),e(tt,cE),w(Or,tt,null),e(tt,pE),e(tt,Tt),w(wd,Tt,null),e(Tt,hE),e(Tt,Un),e(Un,mE),e(Un,kh),e(kh,fE),e(Un,uE),e(Un,Ru),e(Ru,gE),e(Un,_E),e(Tt,bE),w(Ir,Tt,null),e(Tt,kE),w(Ar,Tt,null),e(Tt,vE),w(Lr,Tt,null),b(o,kk,k),b(o,Wn,k),e(Wn,Dr),e(Dr,Qu),w($d,Qu,null),e(Wn,TE),e(Wn,Vu),e(Vu,yE),b(o,vk,k),b(o,ot,k),w(Fd,ot,null),e(ot,wE),e(ot,Hn),e(Hn,$E),e(Hn,Ku),e(Ku,FE),e(Hn,xE),e(Hn,Ju),e(Ju,BE),e(Hn,EE),e(ot,zE),e(ot,xd),e(xd,ME),e(xd,vh),e(vh,PE),e(xd,qE),e(ot,jE),e(ot,Bd),e(Bd,CE),e(Bd,Ed),e(Ed,NE),e(Bd,OE),e(ot,IE),w(Sr,ot,null),e(ot,AE),e(ot,yt),w(zd,yt,null),e(yt,LE),e(yt,Rn),e(Rn,DE),e(Rn,Th),e(Th,SE),e(Rn,UE),e(Rn,Gu),e(Gu,WE),e(Rn,HE),e(yt,RE),w(Ur,yt,null),e(yt,QE),w(Wr,yt,null),e(yt,VE),w(Hr,yt,null),b(o,Tk,k),b(o,Qn,k),e(Qn,Rr),e(Rr,Xu),w(Md,Xu,null),e(Qn,KE),e(Qn,Yu),e(Yu,JE),b(o,yk,k),b(o,Ae,k),w(Pd,Ae,null),e(Ae,GE),e(Ae,Zu),e(Zu,XE),e(Ae,YE),e(Ae,qd),e(qd,ZE),e(qd,yh),e(yh,ez),e(qd,tz),e(Ae,oz),e(Ae,jd),e(jd,nz),e(jd,Cd),e(Cd,sz),e(jd,rz),e(Ae,az),e(Ae,eg),e(eg,iz),e(Ae,lz),e(Ae,fo),e(fo,tg),e(tg,Nd),e(Nd,dz),e(fo,cz),e(fo,og),e(og,Od),e(Od,pz),e(fo,hz),e(fo,ng),e(ng,Id),e(Id,mz),e(fo,fz),e(fo,sg),e(sg,Ad),e(Ad,uz),e(Ae,gz),e(Ae,Kt),w(Ld,Kt,null),e(Kt,_z),e(Kt,Vn),e(Vn,bz),e(Vn,rg),e(rg,kz),e(Vn,vz),e(Vn,ag),e(ag,Tz),e(Vn,yz),e(Kt,wz),w(Qr,Kt,null),e(Kt,$z),w(Vr,Kt,null),b(o,wk,k),b(o,Kn,k),e(Kn,Kr),e(Kr,ig),w(Dd,ig,null),e(Kn,Fz),e(Kn,lg),e(lg,xz),b(o,$k,k),b(o,Le,k),w(Sd,Le,null),e(Le,Bz),e(Le,Jn),e(Jn,Ez),e(Jn,dg),e(dg,zz),e(Jn,Mz),e(Jn,cg),e(cg,Pz),e(Jn,qz),e(Le,jz),e(Le,Ud),e(Ud,Cz),e(Ud,wh),e(wh,Nz),e(Ud,Oz),e(Le,Iz),e(Le,Wd),e(Wd,Az),e(Wd,Hd),e(Hd,Lz),e(Wd,Dz),e(Le,Sz),e(Le,pg),e(pg,Uz),e(Le,Wz),e(Le,uo),e(uo,hg),e(hg,Rd),e(Rd,Hz),e(uo,Rz),e(uo,mg),e(mg,Qd),e(Qd,Qz),e(uo,Vz),e(uo,fg),e(fg,Vd),e(Vd,Kz),e(uo,Jz),e(uo,ug),e(ug,Kd),e(Kd,Gz),e(Le,Xz),e(Le,Jt),w(Jd,Jt,null),e(Jt,Yz),e(Jt,Gn),e(Gn,Zz),e(Gn,gg),e(gg,eM),e(Gn,tM),e(Gn,_g),e(_g,oM),e(Gn,nM),e(Jt,sM),w(Jr,Jt,null),e(Jt,rM),w(Gr,Jt,null),b(o,Fk,k),b(o,Xn,k),e(Xn,Xr),e(Xr,bg),w(Gd,bg,null),e(Xn,aM),e(Xn,kg),e(kg,iM),b(o,xk,k),b(o,De,k),w(Xd,De,null),e(De,lM),e(De,vg),e(vg,dM),e(De,cM),e(De,Yd),e(Yd,pM),e(Yd,$h),e($h,hM),e(Yd,mM),e(De,fM),e(De,Zd),e(Zd,uM),e(Zd,ec),e(ec,gM),e(Zd,_M),e(De,bM),e(De,Tg),e(Tg,kM),e(De,vM),e(De,go),e(go,yg),e(yg,tc),e(tc,TM),e(go,yM),e(go,wg),e(wg,oc),e(oc,wM),e(go,$M),e(go,$g),e($g,nc),e(nc,FM),e(go,xM),e(go,Fg),e(Fg,sc),e(sc,BM),e(De,EM),e(De,Gt),w(rc,Gt,null),e(Gt,zM),e(Gt,Yn),e(Yn,MM),e(Yn,xg),e(xg,PM),e(Yn,qM),e(Yn,Bg),e(Bg,jM),e(Yn,CM),e(Gt,NM),w(Yr,Gt,null),e(Gt,OM),w(Zr,Gt,null),b(o,Bk,k),b(o,Zn,k),e(Zn,ea),e(ea,Eg),w(ac,Eg,null),e(Zn,IM),e(Zn,zg),e(zg,AM),b(o,Ek,k),b(o,Se,k),w(ic,Se,null),e(Se,LM),e(Se,lc),e(lc,DM),e(lc,Mg),e(Mg,SM),e(lc,UM),e(Se,WM),e(Se,dc),e(dc,HM),e(dc,Fh),e(Fh,RM),e(dc,QM),e(Se,VM),e(Se,cc),e(cc,KM),e(cc,pc),e(pc,JM),e(cc,GM),e(Se,XM),e(Se,Pg),e(Pg,YM),e(Se,ZM),e(Se,_o),e(_o,qg),e(qg,hc),e(hc,eP),e(_o,tP),e(_o,jg),e(jg,mc),e(mc,oP),e(_o,nP),e(_o,Cg),e(Cg,fc),e(fc,sP),e(_o,rP),e(_o,Ng),e(Ng,uc),e(uc,aP),e(Se,iP),e(Se,Xt),w(gc,Xt,null),e(Xt,lP),e(Xt,es),e(es,dP),e(es,Og),e(Og,cP),e(es,pP),e(es,Ig),e(Ig,hP),e(es,mP),e(Xt,fP),w(ta,Xt,null),e(Xt,uP),w(oa,Xt,null),b(o,zk,k),b(o,ts,k),e(ts,na),e(na,Ag),w(_c,Ag,null),e(ts,gP),e(ts,Lg),e(Lg,_P),b(o,Mk,k),b(o,Ue,k),w(bc,Ue,null),e(Ue,bP),e(Ue,kc),e(kc,kP),e(kc,Dg),e(Dg,vP),e(kc,TP),e(Ue,yP),e(Ue,vc),e(vc,wP),e(vc,xh),e(xh,$P),e(vc,FP),e(Ue,xP),e(Ue,Tc),e(Tc,BP),e(Tc,yc),e(yc,EP),e(Tc,zP),e(Ue,MP),e(Ue,Sg),e(Sg,PP),e(Ue,qP),e(Ue,bo),e(bo,Ug),e(Ug,wc),e(wc,jP),e(bo,CP),e(bo,Wg),e(Wg,$c),e($c,NP),e(bo,OP),e(bo,Hg),e(Hg,Fc),e(Fc,IP),e(bo,AP),e(bo,Rg),e(Rg,xc),e(xc,LP),e(Ue,DP),e(Ue,Yt),w(Bc,Yt,null),e(Yt,SP),e(Yt,os),e(os,UP),e(os,Qg),e(Qg,WP),e(os,HP),e(os,Vg),e(Vg,RP),e(os,QP),e(Yt,VP),w(sa,Yt,null),e(Yt,KP),w(ra,Yt,null),b(o,Pk,k),b(o,ns,k),e(ns,aa),e(aa,Kg),w(Ec,Kg,null),e(ns,JP),e(ns,Jg),e(Jg,GP),b(o,qk,k),b(o,We,k),w(zc,We,null),e(We,XP),e(We,Gg),e(Gg,YP),e(We,ZP),e(We,Mc),e(Mc,eq),e(Mc,Bh),e(Bh,tq),e(Mc,oq),e(We,nq),e(We,Pc),e(Pc,sq),e(Pc,qc),e(qc,rq),e(Pc,aq),e(We,iq),e(We,Xg),e(Xg,lq),e(We,dq),e(We,ko),e(ko,Yg),e(Yg,jc),e(jc,cq),e(ko,pq),e(ko,Zg),e(Zg,Cc),e(Cc,hq),e(ko,mq),e(ko,e_),e(e_,Nc),e(Nc,fq),e(ko,uq),e(ko,t_),e(t_,Oc),e(Oc,gq),e(We,_q),e(We,Zt),w(Ic,Zt,null),e(Zt,bq),e(Zt,ss),e(ss,kq),e(ss,o_),e(o_,vq),e(ss,Tq),e(ss,n_),e(n_,yq),e(ss,wq),e(Zt,$q),w(ia,Zt,null),e(Zt,Fq),w(la,Zt,null),b(o,jk,k),b(o,rs,k),e(rs,da),e(da,s_),w(Ac,s_,null),e(rs,xq),e(rs,r_),e(r_,Bq),b(o,Ck,k),b(o,He,k),w(Lc,He,null),e(He,Eq),e(He,a_),e(a_,zq),e(He,Mq),e(He,Dc),e(Dc,Pq),e(Dc,Eh),e(Eh,qq),e(Dc,jq),e(He,Cq),e(He,Sc),e(Sc,Nq),e(Sc,Uc),e(Uc,Oq),e(Sc,Iq),e(He,Aq),e(He,i_),e(i_,Lq),e(He,Dq),e(He,vo),e(vo,l_),e(l_,Wc),e(Wc,Sq),e(vo,Uq),e(vo,d_),e(d_,Hc),e(Hc,Wq),e(vo,Hq),e(vo,c_),e(c_,Rc),e(Rc,Rq),e(vo,Qq),e(vo,p_),e(p_,Qc),e(Qc,Vq),e(He,Kq),e(He,eo),w(Vc,eo,null),e(eo,Jq),e(eo,as),e(as,Gq),e(as,h_),e(h_,Xq),e(as,Yq),e(as,m_),e(m_,Zq),e(as,ej),e(eo,tj),w(ca,eo,null),e(eo,oj),w(pa,eo,null),b(o,Nk,k),b(o,is,k),e(is,ha),e(ha,f_),w(Kc,f_,null),e(is,nj),e(is,u_),e(u_,sj),b(o,Ok,k),b(o,Re,k),w(Jc,Re,null),e(Re,rj),e(Re,g_),e(g_,aj),e(Re,ij),e(Re,Gc),e(Gc,lj),e(Gc,zh),e(zh,dj),e(Gc,cj),e(Re,pj),e(Re,Xc),e(Xc,hj),e(Xc,Yc),e(Yc,mj),e(Xc,fj),e(Re,uj),e(Re,__),e(__,gj),e(Re,_j),e(Re,To),e(To,b_),e(b_,Zc),e(Zc,bj),e(To,kj),e(To,k_),e(k_,ep),e(ep,vj),e(To,Tj),e(To,v_),e(v_,tp),e(tp,yj),e(To,wj),e(To,T_),e(T_,op),e(op,$j),e(Re,Fj),e(Re,to),w(np,to,null),e(to,xj),e(to,ls),e(ls,Bj),e(ls,y_),e(y_,Ej),e(ls,zj),e(ls,w_),e(w_,Mj),e(ls,Pj),e(to,qj),w(ma,to,null),e(to,jj),w(fa,to,null),b(o,Ik,k),b(o,ds,k),e(ds,ua),e(ua,$_),w(sp,$_,null),e(ds,Cj),e(ds,F_),e(F_,Nj),b(o,Ak,k),b(o,Qe,k),w(rp,Qe,null),e(Qe,Oj),e(Qe,cs),e(cs,Ij),e(cs,x_),e(x_,Aj),e(cs,Lj),e(cs,B_),e(B_,Dj),e(cs,Sj),e(Qe,Uj),e(Qe,ap),e(ap,Wj),e(ap,Mh),e(Mh,Hj),e(ap,Rj),e(Qe,Qj),e(Qe,ip),e(ip,Vj),e(ip,lp),e(lp,Kj),e(ip,Jj),e(Qe,Gj),e(Qe,E_),e(E_,Xj),e(Qe,Yj),e(Qe,yo),e(yo,z_),e(z_,dp),e(dp,Zj),e(yo,e3),e(yo,M_),e(M_,cp),e(cp,t3),e(yo,o3),e(yo,P_),e(P_,pp),e(pp,n3),e(yo,s3),e(yo,q_),e(q_,hp),e(hp,r3),e(Qe,a3),e(Qe,oo),w(mp,oo,null),e(oo,i3),e(oo,ps),e(ps,l3),e(ps,j_),e(j_,d3),e(ps,c3),e(ps,C_),e(C_,p3),e(ps,h3),e(oo,m3),w(ga,oo,null),e(oo,f3),w(_a,oo,null),Lk=!0},p(o,[k]){const fp={};k&2&&(fp.$$scope={dirty:k,ctx:o}),_s.$set(fp);const N_={};k&2&&(N_.$$scope={dirty:k,ctx:o}),vs.$set(N_);const O_={};k&2&&(O_.$$scope={dirty:k,ctx:o}),ys.$set(O_);const I_={};k&2&&(I_.$$scope={dirty:k,ctx:o}),$s.$set(I_);const up={};k&2&&(up.$$scope={dirty:k,ctx:o}),Fs.$set(up);const A_={};k&2&&(A_.$$scope={dirty:k,ctx:o}),zs.$set(A_);const L_={};k&2&&(L_.$$scope={dirty:k,ctx:o}),Ms.$set(L_);const D_={};k&2&&(D_.$$scope={dirty:k,ctx:o}),qs.$set(D_);const gp={};k&2&&(gp.$$scope={dirty:k,ctx:o}),js.$set(gp);const S_={};k&2&&(S_.$$scope={dirty:k,ctx:o}),Ns.$set(S_);const U_={};k&2&&(U_.$$scope={dirty:k,ctx:o}),Os.$set(U_);const W_={};k&2&&(W_.$$scope={dirty:k,ctx:o}),As.$set(W_);const H_={};k&2&&(H_.$$scope={dirty:k,ctx:o}),Ls.$set(H_);const R_={};k&2&&(R_.$$scope={dirty:k,ctx:o}),Ds.$set(R_);const Q_={};k&2&&(Q_.$$scope={dirty:k,ctx:o}),Us.$set(Q_);const V_={};k&2&&(V_.$$scope={dirty:k,ctx:o}),Ws.$set(V_);const _p={};k&2&&(_p.$$scope={dirty:k,ctx:o}),Rs.$set(_p);const K_={};k&2&&(K_.$$scope={dirty:k,ctx:o}),Qs.$set(K_);const J_={};k&2&&(J_.$$scope={dirty:k,ctx:o}),Vs.$set(J_);const hs={};k&2&&(hs.$$scope={dirty:k,ctx:o}),Ks.$set(hs);const G_={};k&2&&(G_.$$scope={dirty:k,ctx:o}),Js.$set(G_);const X_={};k&2&&(X_.$$scope={dirty:k,ctx:o}),Xs.$set(X_);const bp={};k&2&&(bp.$$scope={dirty:k,ctx:o}),Ys.$set(bp);const Y_={};k&2&&(Y_.$$scope={dirty:k,ctx:o}),er.$set(Y_);const Z_={};k&2&&(Z_.$$scope={dirty:k,ctx:o}),tr.$set(Z_);const eb={};k&2&&(eb.$$scope={dirty:k,ctx:o}),or.$set(eb);const wo={};k&2&&(wo.$$scope={dirty:k,ctx:o}),sr.$set(wo);const $o={};k&2&&($o.$$scope={dirty:k,ctx:o}),rr.$set($o);const tb={};k&2&&(tb.$$scope={dirty:k,ctx:o}),ar.$set(tb);const ob={};k&2&&(ob.$$scope={dirty:k,ctx:o}),lr.$set(ob);const nb={};k&2&&(nb.$$scope={dirty:k,ctx:o}),dr.$set(nb);const ms={};k&2&&(ms.$$scope={dirty:k,ctx:o}),cr.$set(ms);const sb={};k&2&&(sb.$$scope={dirty:k,ctx:o}),hr.$set(sb);const rb={};k&2&&(rb.$$scope={dirty:k,ctx:o}),mr.$set(rb);const kp={};k&2&&(kp.$$scope={dirty:k,ctx:o}),fr.$set(kp);const ab={};k&2&&(ab.$$scope={dirty:k,ctx:o}),gr.$set(ab);const ib={};k&2&&(ib.$$scope={dirty:k,ctx:o}),br.$set(ib);const lb={};k&2&&(lb.$$scope={dirty:k,ctx:o}),kr.$set(lb);const nt={};k&2&&(nt.$$scope={dirty:k,ctx:o}),vr.$set(nt);const db={};k&2&&(db.$$scope={dirty:k,ctx:o}),Tr.$set(db);const vp={};k&2&&(vp.$$scope={dirty:k,ctx:o}),wr.$set(vp);const cb={};k&2&&(cb.$$scope={dirty:k,ctx:o}),$r.$set(cb);const fs={};k&2&&(fs.$$scope={dirty:k,ctx:o}),Fr.$set(fs);const pb={};k&2&&(pb.$$scope={dirty:k,ctx:o}),Br.$set(pb);const Tp={};k&2&&(Tp.$$scope={dirty:k,ctx:o}),Er.$set(Tp);const Ph={};k&2&&(Ph.$$scope={dirty:k,ctx:o}),zr.$set(Ph);const hb={};k&2&&(hb.$$scope={dirty:k,ctx:o}),Mr.$set(hb);const qh={};k&2&&(qh.$$scope={dirty:k,ctx:o}),qr.$set(qh);const mb={};k&2&&(mb.$$scope={dirty:k,ctx:o}),jr.$set(mb);const yp={};k&2&&(yp.$$scope={dirty:k,ctx:o}),Cr.$set(yp);const wp={};k&2&&(wp.$$scope={dirty:k,ctx:o}),Or.$set(wp);const fb={};k&2&&(fb.$$scope={dirty:k,ctx:o}),Ir.$set(fb);const Fo={};k&2&&(Fo.$$scope={dirty:k,ctx:o}),Ar.$set(Fo);const ub={};k&2&&(ub.$$scope={dirty:k,ctx:o}),Lr.$set(ub);const us={};k&2&&(us.$$scope={dirty:k,ctx:o}),Sr.$set(us);const gb={};k&2&&(gb.$$scope={dirty:k,ctx:o}),Ur.$set(gb);const _b={};k&2&&(_b.$$scope={dirty:k,ctx:o}),Wr.$set(_b);const bb={};k&2&&(bb.$$scope={dirty:k,ctx:o}),Hr.$set(bb);const $p={};k&2&&($p.$$scope={dirty:k,ctx:o}),Qr.$set($p);const kb={};k&2&&(kb.$$scope={dirty:k,ctx:o}),Vr.$set(kb);const vb={};k&2&&(vb.$$scope={dirty:k,ctx:o}),Jr.$set(vb);const Tb={};k&2&&(Tb.$$scope={dirty:k,ctx:o}),Gr.$set(Tb);const Ot={};k&2&&(Ot.$$scope={dirty:k,ctx:o}),Yr.$set(Ot);const Fp={};k&2&&(Fp.$$scope={dirty:k,ctx:o}),Zr.$set(Fp);const yb={};k&2&&(yb.$$scope={dirty:k,ctx:o}),ta.$set(yb);const xp={};k&2&&(xp.$$scope={dirty:k,ctx:o}),oa.$set(xp);const wb={};k&2&&(wb.$$scope={dirty:k,ctx:o}),sa.$set(wb);const gs={};k&2&&(gs.$$scope={dirty:k,ctx:o}),ra.$set(gs);const $b={};k&2&&($b.$$scope={dirty:k,ctx:o}),ia.$set($b);const Bp={};k&2&&(Bp.$$scope={dirty:k,ctx:o}),la.$set(Bp);const jh={};k&2&&(jh.$$scope={dirty:k,ctx:o}),ca.$set(jh);const Fb={};k&2&&(Fb.$$scope={dirty:k,ctx:o}),pa.$set(Fb);const Ch={};k&2&&(Ch.$$scope={dirty:k,ctx:o}),ma.$set(Ch);const xb={};k&2&&(xb.$$scope={dirty:k,ctx:o}),fa.$set(xb);const xo={};k&2&&(xo.$$scope={dirty:k,ctx:o}),ga.$set(xo);const Bb={};k&2&&(Bb.$$scope={dirty:k,ctx:o}),_a.$set(Bb)},i(o){Lk||($(l.$$.fragment,o),$(re.$$.fragment,o),$(ze.$$.fragment,o),$(Ra.$$.fragment,o),$(_s.$$.fragment,o),$(Va.$$.fragment,o),$(Ka.$$.fragment,o),$(Ga.$$.fragment,o),$(Ya.$$.fragment,o),$(ei.$$.fragment,o),$(vs.$$.fragment,o),$(ti.$$.fragment,o),$(oi.$$.fragment,o),$(ni.$$.fragment,o),$(ai.$$.fragment,o),$(li.$$.fragment,o),$(ys.$$.fragment,o),$(di.$$.fragment,o),$(ci.$$.fragment,o),$(hi.$$.fragment,o),$($s.$$.fragment,o),$(fi.$$.fragment,o),$(Fs.$$.fragment,o),$(ui.$$.fragment,o),$(gi.$$.fragment,o),$(bi.$$.fragment,o),$(vi.$$.fragment,o),$(yi.$$.fragment,o),$(wi.$$.fragment,o),$($i.$$.fragment,o),$(Mi.$$.fragment,o),$(zs.$$.fragment,o),$(Ms.$$.fragment,o),$(Pi.$$.fragment,o),$(qi.$$.fragment,o),$(Oi.$$.fragment,o),$(qs.$$.fragment,o),$(js.$$.fragment,o),$(Ii.$$.fragment,o),$(Ai.$$.fragment,o),$(Wi.$$.fragment,o),$(Ns.$$.fragment,o),$(Os.$$.fragment,o),$(Hi.$$.fragment,o),$(Ri.$$.fragment,o),$(Gi.$$.fragment,o),$(As.$$.fragment,o),$(Ls.$$.fragment,o),$(Ds.$$.fragment,o),$(Xi.$$.fragment,o),$(Yi.$$.fragment,o),$(nl.$$.fragment,o),$(Us.$$.fragment,o),$(Ws.$$.fragment,o),$(sl.$$.fragment,o),$(rl.$$.fragment,o),$(dl.$$.fragment,o),$(Rs.$$.fragment,o),$(Qs.$$.fragment,o),$(Vs.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(cl.$$.fragment,o),$(pl.$$.fragment,o),$(ul.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(gl.$$.fragment,o),$(_l.$$.fragment,o),$(Tl.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(yl.$$.fragment,o),$(wl.$$.fragment,o),$(Bl.$$.fragment,o),$(sr.$$.fragment,o),$(rr.$$.fragment,o),$(ar.$$.fragment,o),$(El.$$.fragment,o),$(zl.$$.fragment,o),$(lr.$$.fragment,o),$(jl.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(Cl.$$.fragment,o),$(Nl.$$.fragment,o),$(hr.$$.fragment,o),$(Ll.$$.fragment,o),$(mr.$$.fragment,o),$(fr.$$.fragment,o),$(Dl.$$.fragment,o),$(Sl.$$.fragment,o),$(Ul.$$.fragment,o),$(gr.$$.fragment,o),$(Ql.$$.fragment,o),$(Vl.$$.fragment,o),$(br.$$.fragment,o),$(Yl.$$.fragment,o),$(kr.$$.fragment,o),$(vr.$$.fragment,o),$(Tr.$$.fragment,o),$(Zl.$$.fragment,o),$(ed.$$.fragment,o),$(wr.$$.fragment,o),$(rd.$$.fragment,o),$($r.$$.fragment,o),$(Fr.$$.fragment,o),$(ad.$$.fragment,o),$(id.$$.fragment,o),$(Br.$$.fragment,o),$(pd.$$.fragment,o),$(Er.$$.fragment,o),$(zr.$$.fragment,o),$(Mr.$$.fragment,o),$(hd.$$.fragment,o),$(md.$$.fragment,o),$(qr.$$.fragment,o),$(_d.$$.fragment,o),$(jr.$$.fragment,o),$(Cr.$$.fragment,o),$(bd.$$.fragment,o),$(kd.$$.fragment,o),$(Or.$$.fragment,o),$(wd.$$.fragment,o),$(Ir.$$.fragment,o),$(Ar.$$.fragment,o),$(Lr.$$.fragment,o),$($d.$$.fragment,o),$(Fd.$$.fragment,o),$(Sr.$$.fragment,o),$(zd.$$.fragment,o),$(Ur.$$.fragment,o),$(Wr.$$.fragment,o),$(Hr.$$.fragment,o),$(Md.$$.fragment,o),$(Pd.$$.fragment,o),$(Ld.$$.fragment,o),$(Qr.$$.fragment,o),$(Vr.$$.fragment,o),$(Dd.$$.fragment,o),$(Sd.$$.fragment,o),$(Jd.$$.fragment,o),$(Jr.$$.fragment,o),$(Gr.$$.fragment,o),$(Gd.$$.fragment,o),$(Xd.$$.fragment,o),$(rc.$$.fragment,o),$(Yr.$$.fragment,o),$(Zr.$$.fragment,o),$(ac.$$.fragment,o),$(ic.$$.fragment,o),$(gc.$$.fragment,o),$(ta.$$.fragment,o),$(oa.$$.fragment,o),$(_c.$$.fragment,o),$(bc.$$.fragment,o),$(Bc.$$.fragment,o),$(sa.$$.fragment,o),$(ra.$$.fragment,o),$(Ec.$$.fragment,o),$(zc.$$.fragment,o),$(Ic.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(Ac.$$.fragment,o),$(Lc.$$.fragment,o),$(Vc.$$.fragment,o),$(ca.$$.fragment,o),$(pa.$$.fragment,o),$(Kc.$$.fragment,o),$(Jc.$$.fragment,o),$(np.$$.fragment,o),$(ma.$$.fragment,o),$(fa.$$.fragment,o),$(sp.$$.fragment,o),$(rp.$$.fragment,o),$(mp.$$.fragment,o),$(ga.$$.fragment,o),$(_a.$$.fragment,o),Lk=!0)},o(o){F(l.$$.fragment,o),F(re.$$.fragment,o),F(ze.$$.fragment,o),F(Ra.$$.fragment,o),F(_s.$$.fragment,o),F(Va.$$.fragment,o),F(Ka.$$.fragment,o),F(Ga.$$.fragment,o),F(Ya.$$.fragment,o),F(ei.$$.fragment,o),F(vs.$$.fragment,o),F(ti.$$.fragment,o),F(oi.$$.fragment,o),F(ni.$$.fragment,o),F(ai.$$.fragment,o),F(li.$$.fragment,o),F(ys.$$.fragment,o),F(di.$$.fragment,o),F(ci.$$.fragment,o),F(hi.$$.fragment,o),F($s.$$.fragment,o),F(fi.$$.fragment,o),F(Fs.$$.fragment,o),F(ui.$$.fragment,o),F(gi.$$.fragment,o),F(bi.$$.fragment,o),F(vi.$$.fragment,o),F(yi.$$.fragment,o),F(wi.$$.fragment,o),F($i.$$.fragment,o),F(Mi.$$.fragment,o),F(zs.$$.fragment,o),F(Ms.$$.fragment,o),F(Pi.$$.fragment,o),F(qi.$$.fragment,o),F(Oi.$$.fragment,o),F(qs.$$.fragment,o),F(js.$$.fragment,o),F(Ii.$$.fragment,o),F(Ai.$$.fragment,o),F(Wi.$$.fragment,o),F(Ns.$$.fragment,o),F(Os.$$.fragment,o),F(Hi.$$.fragment,o),F(Ri.$$.fragment,o),F(Gi.$$.fragment,o),F(As.$$.fragment,o),F(Ls.$$.fragment,o),F(Ds.$$.fragment,o),F(Xi.$$.fragment,o),F(Yi.$$.fragment,o),F(nl.$$.fragment,o),F(Us.$$.fragment,o),F(Ws.$$.fragment,o),F(sl.$$.fragment,o),F(rl.$$.fragment,o),F(dl.$$.fragment,o),F(Rs.$$.fragment,o),F(Qs.$$.fragment,o),F(Vs.$$.fragment,o),F(Ks.$$.fragment,o),F(Js.$$.fragment,o),F(cl.$$.fragment,o),F(pl.$$.fragment,o),F(ul.$$.fragment,o),F(Xs.$$.fragment,o),F(Ys.$$.fragment,o),F(gl.$$.fragment,o),F(_l.$$.fragment,o),F(Tl.$$.fragment,o),F(er.$$.fragment,o),F(tr.$$.fragment,o),F(or.$$.fragment,o),F(yl.$$.fragment,o),F(wl.$$.fragment,o),F(Bl.$$.fragment,o),F(sr.$$.fragment,o),F(rr.$$.fragment,o),F(ar.$$.fragment,o),F(El.$$.fragment,o),F(zl.$$.fragment,o),F(lr.$$.fragment,o),F(jl.$$.fragment,o),F(dr.$$.fragment,o),F(cr.$$.fragment,o),F(Cl.$$.fragment,o),F(Nl.$$.fragment,o),F(hr.$$.fragment,o),F(Ll.$$.fragment,o),F(mr.$$.fragment,o),F(fr.$$.fragment,o),F(Dl.$$.fragment,o),F(Sl.$$.fragment,o),F(Ul.$$.fragment,o),F(gr.$$.fragment,o),F(Ql.$$.fragment,o),F(Vl.$$.fragment,o),F(br.$$.fragment,o),F(Yl.$$.fragment,o),F(kr.$$.fragment,o),F(vr.$$.fragment,o),F(Tr.$$.fragment,o),F(Zl.$$.fragment,o),F(ed.$$.fragment,o),F(wr.$$.fragment,o),F(rd.$$.fragment,o),F($r.$$.fragment,o),F(Fr.$$.fragment,o),F(ad.$$.fragment,o),F(id.$$.fragment,o),F(Br.$$.fragment,o),F(pd.$$.fragment,o),F(Er.$$.fragment,o),F(zr.$$.fragment,o),F(Mr.$$.fragment,o),F(hd.$$.fragment,o),F(md.$$.fragment,o),F(qr.$$.fragment,o),F(_d.$$.fragment,o),F(jr.$$.fragment,o),F(Cr.$$.fragment,o),F(bd.$$.fragment,o),F(kd.$$.fragment,o),F(Or.$$.fragment,o),F(wd.$$.fragment,o),F(Ir.$$.fragment,o),F(Ar.$$.fragment,o),F(Lr.$$.fragment,o),F($d.$$.fragment,o),F(Fd.$$.fragment,o),F(Sr.$$.fragment,o),F(zd.$$.fragment,o),F(Ur.$$.fragment,o),F(Wr.$$.fragment,o),F(Hr.$$.fragment,o),F(Md.$$.fragment,o),F(Pd.$$.fragment,o),F(Ld.$$.fragment,o),F(Qr.$$.fragment,o),F(Vr.$$.fragment,o),F(Dd.$$.fragment,o),F(Sd.$$.fragment,o),F(Jd.$$.fragment,o),F(Jr.$$.fragment,o),F(Gr.$$.fragment,o),F(Gd.$$.fragment,o),F(Xd.$$.fragment,o),F(rc.$$.fragment,o),F(Yr.$$.fragment,o),F(Zr.$$.fragment,o),F(ac.$$.fragment,o),F(ic.$$.fragment,o),F(gc.$$.fragment,o),F(ta.$$.fragment,o),F(oa.$$.fragment,o),F(_c.$$.fragment,o),F(bc.$$.fragment,o),F(Bc.$$.fragment,o),F(sa.$$.fragment,o),F(ra.$$.fragment,o),F(Ec.$$.fragment,o),F(zc.$$.fragment,o),F(Ic.$$.fragment,o),F(ia.$$.fragment,o),F(la.$$.fragment,o),F(Ac.$$.fragment,o),F(Lc.$$.fragment,o),F(Vc.$$.fragment,o),F(ca.$$.fragment,o),F(pa.$$.fragment,o),F(Kc.$$.fragment,o),F(Jc.$$.fragment,o),F(np.$$.fragment,o),F(ma.$$.fragment,o),F(fa.$$.fragment,o),F(sp.$$.fragment,o),F(rp.$$.fragment,o),F(mp.$$.fragment,o),F(ga.$$.fragment,o),F(_a.$$.fragment,o),Lk=!1},d(o){t(d),o&&t(_),o&&t(m),x(l),o&&t(X),o&&t(M),x(re),o&&t(me),o&&t(J),o&&t(j),o&&t(ie),o&&t(fe),o&&t(le),o&&t(ue),o&&t(q),o&&t(ge),o&&t(de),o&&t(_e),o&&t(se),o&&t(z),o&&t(K),o&&t(W),o&&t(Fe),x(ze),o&&t(Eb),o&&t(Nt),x(Ra),x(_s),o&&t(zb),o&&t(Jo),x(Va),o&&t(Mb),o&&t(Ne),x(Ka),x(Ga),x(Ya),x(ei),x(vs),x(ti),o&&t(Pb),o&&t(Xo),x(oi),o&&t(qb),o&&t(rt),x(ni),x(ai),x(li),x(ys),o&&t(jb),o&&t(Zo),x(di),o&&t(Cb),o&&t(at),x(ci),x(hi),x($s),x(fi),x(Fs),o&&t(Nb),o&&t(on),x(ui),o&&t(Ob),o&&t(nn),x(gi),o&&t(Ib),o&&t(sn),x(bi),o&&t(Ab),o&&t(mo),x(vi),x(yi),o&&t(Lb),o&&t(rn),x(wi),o&&t(Db),o&&t(Oe),x($i),x(Mi),x(zs),x(Ms),o&&t(Sb),o&&t(ln),x(Pi),o&&t(Ub),o&&t(it),x(qi),x(Oi),x(qs),x(js),o&&t(Wb),o&&t(pn),x(Ii),o&&t(Hb),o&&t(lt),x(Ai),x(Wi),x(Ns),x(Os),o&&t(Rb),o&&t(mn),x(Hi),o&&t(Qb),o&&t(dt),x(Ri),x(Gi),x(As),x(Ls),x(Ds),o&&t(Vb),o&&t(un),x(Xi),o&&t(Kb),o&&t(ct),x(Yi),x(nl),x(Us),x(Ws),o&&t(Jb),o&&t(_n),x(sl),o&&t(Gb),o&&t(pt),x(rl),x(dl),x(Rs),x(Qs),x(Vs),x(Ks),x(Js),o&&t(Xb),o&&t(kn),x(cl),o&&t(Yb),o&&t(ht),x(pl),x(ul),x(Xs),x(Ys),o&&t(Zb),o&&t(Tn),x(gl),o&&t(ek),o&&t(mt),x(_l),x(Tl),x(er),x(tr),x(or),o&&t(tk),o&&t(wn),x(yl),o&&t(ok),o&&t(ft),x(wl),x(Bl),x(sr),x(rr),x(ar),o&&t(nk),o&&t(xn),x(El),o&&t(sk),o&&t(Je),x(zl),x(lr),x(jl),x(dr),x(cr),o&&t(rk),o&&t(En),x(Cl),o&&t(ak),o&&t(Ge),x(Nl),x(hr),x(Ll),x(mr),x(fr),o&&t(ik),o&&t(Pn),x(Dl),o&&t(lk),o&&t(qn),x(Sl),x(Ul),x(gr),o&&t(dk),o&&t(jn),x(Ql),o&&t(ck),o&&t(Xe),x(Vl),x(br),x(Yl),x(kr),x(vr),x(Tr),o&&t(pk),o&&t(Nn),x(Zl),o&&t(hk),o&&t(Ye),x(ed),x(wr),x(rd),x($r),x(Fr),o&&t(mk),o&&t(In),x(ad),o&&t(fk),o&&t(Ze),x(id),x(Br),x(pd),x(Er),x(zr),x(Mr),o&&t(uk),o&&t(Ln),x(hd),o&&t(gk),o&&t(et),x(md),x(qr),x(_d),x(jr),x(Cr),o&&t(_k),o&&t(Sn),x(bd),o&&t(bk),o&&t(tt),x(kd),x(Or),x(wd),x(Ir),x(Ar),x(Lr),o&&t(kk),o&&t(Wn),x($d),o&&t(vk),o&&t(ot),x(Fd),x(Sr),x(zd),x(Ur),x(Wr),x(Hr),o&&t(Tk),o&&t(Qn),x(Md),o&&t(yk),o&&t(Ae),x(Pd),x(Ld),x(Qr),x(Vr),o&&t(wk),o&&t(Kn),x(Dd),o&&t($k),o&&t(Le),x(Sd),x(Jd),x(Jr),x(Gr),o&&t(Fk),o&&t(Xn),x(Gd),o&&t(xk),o&&t(De),x(Xd),x(rc),x(Yr),x(Zr),o&&t(Bk),o&&t(Zn),x(ac),o&&t(Ek),o&&t(Se),x(ic),x(gc),x(ta),x(oa),o&&t(zk),o&&t(ts),x(_c),o&&t(Mk),o&&t(Ue),x(bc),x(Bc),x(sa),x(ra),o&&t(Pk),o&&t(ns),x(Ec),o&&t(qk),o&&t(We),x(zc),x(Ic),x(ia),x(la),o&&t(jk),o&&t(rs),x(Ac),o&&t(Ck),o&&t(He),x(Lc),x(Vc),x(ca),x(pa),o&&t(Nk),o&&t(is),x(Kc),o&&t(Ok),o&&t(Re),x(Jc),x(np),x(ma),x(fa),o&&t(Ik),o&&t(ds),x(sp),o&&t(Ak),o&&t(Qe),x(rp),x(mp),x(ga),x(_a)}}}const _I={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.TFBertTokenizer",title:"TFBertTokenizer"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForCausalLM",title:"FlaxBertForCausalLM"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function bI(B){return V7(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class FI extends W7{constructor(d){super();H7(this,d,bI,gI,R7,{})}}export{FI as default,_I as metadata};
