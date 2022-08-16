import{S as W7,i as H7,s as R7,e as r,k as c,w as y,t as n,M as V7,c as a,d as t,m as p,a as i,x as v,h as s,b as u,G as e,g as b,y as w,q as $,o as x,B as F,v as Q7,L as te}from"../../chunks/vendor-hf-doc-builder.js";import{T as we}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as oe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as $e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ee}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function K7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertModel, BertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function J7(B){let d,_,m,h,g;return h=new oe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"pair mask has the following format:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function G7(B){let d,_,m,h,g;return h=new oe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"pair mask has the following format:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function X7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import TFBertTokenizer

tf_tokenizer = TFBertTokenizer.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFBertTokenizer

tf_tokenizer = TFBertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function Y7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import AutoTokenizer, TFBertTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
tf_tokenizer = TFBertTokenizer.from_tokenizer(tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFBertTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
tf_tokenizer = TFBertTokenizer.from_tokenizer(tokenizer)`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function Z7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function tO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function nO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function rO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function iO(B){let d,_;return d=new oe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function lO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function cO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of single-label classification:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of single-label classification:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function hO(B){let d,_;return d=new oe({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function mO(B){let d,_,m,h,g;return h=new oe({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of multi-label classification:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of multi-label classification:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function fO(B){let d,_;return d=new oe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function uO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function _O(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function kO(B){let d,_;return d=new oe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function TO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function yO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function vO(B){let d,_;return d=new oe({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function wO(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,V,_e,se,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var M=i(d);_=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=p(T),h=a(T,"UL",{});var K=i(h);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var I=i(z);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);Te=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var xe=i(H);fe=s(xe,"input_ids"),xe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Me=i(R);ge=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(T,M){b(T,d,M),e(d,_),b(T,m,M),b(T,h,M),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(T,X,M),b(T,z,M),e(z,ne),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,Te),e(z,me),b(T,J,M),b(T,O,M),e(O,ae),b(T,Y,M),b(T,P,M),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,se),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function $O(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function xO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function FO(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,V,_e,se,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var M=i(d);_=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=p(T),h=a(T,"UL",{});var K=i(h);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var I=i(z);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);Te=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var xe=i(H);fe=s(xe,"input_ids"),xe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Me=i(R);ge=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(T,M){b(T,d,M),e(d,_),b(T,m,M),b(T,h,M),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(T,X,M),b(T,z,M),e(z,ne),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,Te),e(z,me),b(T,J,M),b(T,O,M),e(O,ae),b(T,Y,M),b(T,P,M),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,se),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function BO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits, seq_relationship_logits = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function MO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function zO(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,V,_e,se,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var M=i(d);_=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=p(T),h=a(T,"UL",{});var K=i(h);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var I=i(z);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);Te=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var xe=i(H);fe=s(xe,"input_ids"),xe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Me=i(R);ge=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(T,M){b(T,d,M),e(d,_),b(T,m,M),b(T,h,M),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(T,X,M),b(T,z,M),e(z,ne),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,Te),e(z,me),b(T,J,M),b(T,O,M),e(O,ae),b(T,Y,M),b(T,P,M),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,se),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function PO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function jO(B){let d,_;return d=new oe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function CO(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,V,_e,se,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var M=i(d);_=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=p(T),h=a(T,"UL",{});var K=i(h);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var I=i(z);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);Te=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var xe=i(H);fe=s(xe,"input_ids"),xe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Me=i(R);ge=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(T,M){b(T,d,M),e(d,_),b(T,m,M),b(T,h,M),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(T,X,M),b(T,z,M),e(z,ne),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,Te),e(z,me),b(T,J,M),b(T,O,M),e(O,ae),b(T,Y,M),b(T,P,M),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,se),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function NO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function IO(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,V,_e,se,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var M=i(d);_=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=p(T),h=a(T,"UL",{});var K=i(h);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var I=i(z);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);Te=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var xe=i(H);fe=s(xe,"input_ids"),xe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Me=i(R);ge=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(T,M){b(T,d,M),e(d,_),b(T,m,M),b(T,h,M),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(T,X,M),b(T,z,M),e(z,ne),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,Te),e(z,me),b(T,J,M),b(T,O,M),e(O,ae),b(T,Y,M),b(T,P,M),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,se),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function AO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function DO(B){let d,_;return d=new oe({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function SO(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,V,_e,se,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var M=i(d);_=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=p(T),h=a(T,"UL",{});var K=i(h);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var I=i(z);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);Te=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var xe=i(H);fe=s(xe,"input_ids"),xe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Me=i(R);ge=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(T,M){b(T,d,M),e(d,_),b(T,m,M),b(T,h,M),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(T,X,M),b(T,z,M),e(z,ne),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,Te),e(z,me),b(T,J,M),b(T,O,M),e(O,ae),b(T,Y,M),b(T,P,M),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,se),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function UO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function HO(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,V,_e,se,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var M=i(d);_=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=p(T),h=a(T,"UL",{});var K=i(h);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var I=i(z);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);Te=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var xe=i(H);fe=s(xe,"input_ids"),xe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Me=i(R);ge=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(T,M){b(T,d,M),e(d,_),b(T,m,M),b(T,h,M),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(T,X,M),b(T,z,M),e(z,ne),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,Te),e(z,me),b(T,J,M),b(T,O,M),e(O,ae),b(T,Y,M),b(T,P,M),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,se),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function RO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function VO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function QO(B){let d,_;return d=new oe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function KO(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,V,_e,se,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var M=i(d);_=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=p(T),h=a(T,"UL",{});var K=i(h);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var I=i(z);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);Te=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var xe=i(H);fe=s(xe,"input_ids"),xe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Me=i(R);ge=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(T,M){b(T,d,M),e(d,_),b(T,m,M),b(T,h,M),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(T,X,M),b(T,z,M),e(z,ne),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,Te),e(z,me),b(T,J,M),b(T,O,M),e(O,ae),b(T,Y,M),b(T,P,M),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,se),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function JO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function XO(B){let d,_;return d=new oe({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function YO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function eI(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function oI(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function sI(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function aI(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function lI(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function cI(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function hI(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function fI(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function gI(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,V,_e,se,N,ve,Q,pe,T,M,K,ze,Be,I,Pe,Ee,qe,A,W,xe,Fe,U,Me,je,he,Ce,Eb,Nt,Ra,jy,ho,Cy,Ep,Ny,Oy,Mp,Iy,Ay,Va,Ly,Dy,Sy,Ko,Uy,zp,Wy,Hy,Pp,Ry,Vy,Qy,_s,Mb,Jo,bs,km,Qa,Ky,Tm,Jy,zb,Ne,Ka,Gy,ym,Xy,Yy,Ja,Zy,qp,ev,tv,ov,Bo,Ga,nv,vm,sv,rv,Xa,jp,av,wm,iv,lv,Cp,dv,$m,cv,pv,ks,Ya,hv,Za,mv,xm,fv,uv,gv,It,ei,_v,Fm,bv,kv,Ts,Tv,Go,yv,Bm,vv,wv,Em,$v,xv,Fv,Np,ti,Pb,Xo,ys,Mm,oi,Bv,zm,Ev,qb,rt,ni,Mv,si,zv,Pm,Pv,qv,jv,ri,Cv,Op,Nv,Ov,Iv,Eo,ai,Av,qm,Lv,Dv,ii,Ip,Sv,jm,Uv,Wv,Ap,Hv,Cm,Rv,Vv,At,li,Qv,Nm,Kv,Jv,vs,Gv,Yo,Xv,Om,Yv,Zv,Im,ew,tw,jb,Zo,ws,Am,di,ow,Lm,nw,Cb,at,ci,sw,en,rw,Dm,aw,iw,Sm,lw,dw,cw,pi,pw,Um,hw,mw,fw,Mo,hi,uw,mi,gw,Wm,_w,bw,kw,$s,Tw,zo,fi,yw,tn,vw,Hm,ww,$w,Rm,xw,Fw,Bw,xs,Nb,on,Fs,Vm,ui,Ew,Qm,Mw,Ob,nn,gi,zw,_i,Pw,Lp,qw,jw,Ib,sn,bi,Cw,ki,Nw,Dp,Ow,Iw,Ab,mo,Ti,Aw,yi,Lw,Sp,Dw,Sw,Uw,Bs,vi,Ww,Km,Hw,Lb,rn,Es,Jm,wi,Rw,Gm,Vw,Db,Oe,$i,Qw,Xm,Kw,Jw,xi,Gw,Up,Xw,Yw,Zw,Fi,e1,Bi,t1,o1,n1,Ei,s1,Mi,r1,a1,i1,Ke,l1,Ym,d1,c1,Zm,p1,h1,ef,m1,f1,tf,u1,g1,of,_1,b1,nf,k1,T1,y1,Lt,zi,v1,an,w1,Wp,$1,x1,sf,F1,B1,E1,Ms,M1,zs,Sb,ln,Ps,rf,Pi,z1,af,P1,Ub,it,qi,q1,dn,j1,lf,C1,N1,df,O1,I1,A1,ji,L1,Hp,D1,S1,U1,Ci,W1,Ni,H1,R1,V1,Dt,Oi,Q1,cn,K1,Rp,J1,G1,cf,X1,Y1,Z1,qs,e$,js,Wb,pn,Cs,pf,Ii,t$,hf,o$,Hb,lt,Ai,n$,Li,s$,mf,r$,a$,i$,Di,l$,Vp,d$,c$,p$,Si,h$,Ui,m$,f$,u$,St,Wi,g$,hn,_$,Qp,b$,k$,ff,T$,y$,v$,Ns,w$,Os,Rb,mn,Is,uf,Hi,$$,gf,x$,Vb,dt,Ri,F$,Vi,B$,_f,E$,M$,z$,Qi,P$,Kp,q$,j$,C$,Ki,N$,Ji,O$,I$,A$,ut,Gi,L$,fn,D$,Jp,S$,U$,bf,W$,H$,R$,As,V$,Ls,Q$,Ds,Qb,un,Ss,kf,Xi,K$,Tf,J$,Kb,ct,Yi,G$,Zi,X$,yf,Y$,Z$,e2,el,t2,Gp,o2,n2,s2,tl,r2,ol,a2,i2,l2,Ut,nl,d2,gn,c2,Xp,p2,h2,vf,m2,f2,u2,Us,g2,Ws,Jb,_n,Hs,wf,sl,_2,$f,b2,Gb,pt,rl,k2,xf,T2,y2,al,v2,Yp,w2,$2,x2,il,F2,ll,B2,E2,M2,Qe,dl,z2,bn,P2,Zp,q2,j2,Ff,C2,N2,O2,Rs,I2,Vs,A2,Qs,L2,Ks,D2,Js,Xb,kn,Gs,Bf,cl,S2,Ef,U2,Yb,ht,pl,W2,Mf,H2,R2,hl,V2,eh,Q2,K2,J2,ml,G2,fl,X2,Y2,Z2,Wt,ul,ex,Tn,tx,th,ox,nx,zf,sx,rx,ax,Xs,ix,Ys,Zb,yn,Zs,Pf,gl,lx,qf,dx,ek,mt,_l,cx,jf,px,hx,bl,mx,oh,fx,ux,gx,kl,_x,Tl,bx,kx,Tx,gt,yl,yx,vn,vx,nh,wx,$x,Cf,xx,Fx,Bx,er,Ex,tr,Mx,or,tk,wn,nr,Nf,vl,zx,Of,Px,ok,ft,wl,qx,$n,jx,If,Cx,Nx,Af,Ox,Ix,Ax,$l,Lx,sh,Dx,Sx,Ux,xl,Wx,Fl,Hx,Rx,Vx,_t,Bl,Qx,xn,Kx,rh,Jx,Gx,Lf,Xx,Yx,Zx,sr,eF,rr,tF,ar,nk,Fn,ir,Df,El,oF,Sf,nF,sk,Je,Ml,sF,Uf,rF,aF,zl,iF,ah,lF,dF,cF,Pl,pF,ql,hF,mF,fF,lr,uF,Ht,jl,gF,Bn,_F,ih,bF,kF,Wf,TF,yF,vF,dr,wF,cr,rk,En,pr,Hf,Cl,$F,Rf,xF,ak,Ge,Nl,FF,Mn,BF,Vf,EF,MF,Qf,zF,PF,qF,Ol,jF,lh,CF,NF,OF,Il,IF,Al,AF,LF,DF,hr,SF,Rt,Ll,UF,zn,WF,dh,HF,RF,Kf,VF,QF,KF,mr,JF,fr,ik,Pn,ur,Jf,Dl,GF,Gf,XF,lk,qn,Sl,YF,bt,Ul,ZF,Ie,e0,Xf,t0,o0,Yf,n0,s0,Zf,r0,a0,eu,i0,l0,tu,d0,c0,ou,p0,h0,nu,m0,f0,u0,Wl,Hl,g0,su,_0,b0,k0,Rl,T0,ru,y0,v0,w0,G,$0,au,x0,F0,iu,B0,E0,lu,M0,z0,du,P0,q0,cu,j0,C0,pu,N0,O0,hu,I0,A0,mu,L0,D0,fu,S0,U0,uu,W0,H0,gu,R0,V0,_u,Q0,K0,bu,J0,G0,ku,X0,Y0,Tu,Z0,eB,yu,tB,oB,vu,nB,sB,wu,rB,aB,$u,iB,lB,xu,dB,cB,pB,gr,dk,jn,_r,Fu,Vl,hB,Bu,mB,ck,Xe,Ql,fB,Kl,uB,Eu,gB,_B,bB,Jl,kB,ch,TB,yB,vB,Gl,wB,Xl,$B,xB,FB,br,BB,kt,Yl,EB,Cn,MB,ph,zB,PB,Mu,qB,jB,CB,kr,NB,Tr,OB,yr,pk,Nn,vr,zu,Zl,IB,Pu,AB,hk,Ye,ed,LB,td,DB,qu,SB,UB,WB,od,HB,hh,RB,VB,QB,nd,KB,sd,JB,GB,XB,wr,YB,Vt,rd,ZB,On,eE,mh,tE,oE,ju,nE,sE,rE,$r,aE,xr,mk,In,Fr,Cu,ad,iE,Nu,lE,fk,Ze,id,dE,Ou,cE,pE,ld,hE,fh,mE,fE,uE,dd,gE,cd,_E,bE,kE,Br,TE,Tt,pd,yE,An,vE,uh,wE,$E,Iu,xE,FE,BE,Er,EE,Mr,ME,zr,uk,Ln,Pr,Au,hd,zE,Lu,PE,gk,et,md,qE,Du,jE,CE,fd,NE,gh,OE,IE,AE,ud,LE,gd,DE,SE,UE,qr,WE,Qt,_d,HE,Dn,RE,_h,VE,QE,Su,KE,JE,GE,jr,XE,Cr,_k,Sn,Nr,Uu,bd,YE,Wu,ZE,bk,tt,kd,eM,Hu,tM,oM,Td,nM,bh,sM,rM,aM,yd,iM,vd,lM,dM,cM,Or,pM,yt,wd,hM,Un,mM,kh,fM,uM,Ru,gM,_M,bM,Ir,kM,Ar,TM,Lr,kk,Wn,Dr,Vu,$d,yM,Qu,vM,Tk,ot,xd,wM,Hn,$M,Ku,xM,FM,Ju,BM,EM,MM,Fd,zM,Th,PM,qM,jM,Bd,CM,Ed,NM,OM,IM,Sr,AM,vt,Md,LM,Rn,DM,yh,SM,UM,Gu,WM,HM,RM,Ur,VM,Wr,QM,Hr,yk,Vn,Rr,Xu,zd,KM,Yu,JM,vk,Ae,Pd,GM,Zu,XM,YM,qd,ZM,vh,ez,tz,oz,jd,nz,Cd,sz,rz,az,eg,iz,lz,fo,tg,Nd,dz,cz,og,Od,pz,hz,ng,Id,mz,fz,sg,Ad,uz,gz,Kt,Ld,_z,Qn,bz,rg,kz,Tz,ag,yz,vz,wz,Vr,$z,Qr,wk,Kn,Kr,ig,Dd,xz,lg,Fz,$k,Le,Sd,Bz,Jn,Ez,dg,Mz,zz,cg,Pz,qz,jz,Ud,Cz,wh,Nz,Oz,Iz,Wd,Az,Hd,Lz,Dz,Sz,pg,Uz,Wz,uo,hg,Rd,Hz,Rz,mg,Vd,Vz,Qz,fg,Qd,Kz,Jz,ug,Kd,Gz,Xz,Jt,Jd,Yz,Gn,Zz,gg,e4,t4,_g,o4,n4,s4,Jr,r4,Gr,xk,Xn,Xr,bg,Gd,a4,kg,i4,Fk,De,Xd,l4,Tg,d4,c4,Yd,p4,$h,h4,m4,f4,Zd,u4,ec,g4,_4,b4,yg,k4,T4,go,vg,tc,y4,v4,wg,oc,w4,$4,$g,nc,x4,F4,xg,sc,B4,E4,Gt,rc,M4,Yn,z4,Fg,P4,q4,Bg,j4,C4,N4,Yr,O4,Zr,Bk,Zn,ea,Eg,ac,I4,Mg,A4,Ek,Se,ic,L4,lc,D4,zg,S4,U4,W4,dc,H4,xh,R4,V4,Q4,cc,K4,pc,J4,G4,X4,Pg,Y4,Z4,_o,qg,hc,eP,tP,jg,mc,oP,nP,Cg,fc,sP,rP,Ng,uc,aP,iP,Xt,gc,lP,es,dP,Og,cP,pP,Ig,hP,mP,fP,ta,uP,oa,Mk,ts,na,Ag,_c,gP,Lg,_P,zk,Ue,bc,bP,kc,kP,Dg,TP,yP,vP,Tc,wP,Fh,$P,xP,FP,yc,BP,vc,EP,MP,zP,Sg,PP,qP,bo,Ug,wc,jP,CP,Wg,$c,NP,OP,Hg,xc,IP,AP,Rg,Fc,LP,DP,Yt,Bc,SP,os,UP,Vg,WP,HP,Qg,RP,VP,QP,sa,KP,ra,Pk,ns,aa,Kg,Ec,JP,Jg,GP,qk,We,Mc,XP,Gg,YP,ZP,zc,eq,Bh,tq,oq,nq,Pc,sq,qc,rq,aq,iq,Xg,lq,dq,ko,Yg,jc,cq,pq,Zg,Cc,hq,mq,e_,Nc,fq,uq,t_,Oc,gq,_q,Zt,Ic,bq,ss,kq,o_,Tq,yq,n_,vq,wq,$q,ia,xq,la,jk,rs,da,s_,Ac,Fq,r_,Bq,Ck,He,Lc,Eq,a_,Mq,zq,Dc,Pq,Eh,qq,jq,Cq,Sc,Nq,Uc,Oq,Iq,Aq,i_,Lq,Dq,To,l_,Wc,Sq,Uq,d_,Hc,Wq,Hq,c_,Rc,Rq,Vq,p_,Vc,Qq,Kq,eo,Qc,Jq,as,Gq,h_,Xq,Yq,m_,Zq,ej,tj,ca,oj,pa,Nk,is,ha,f_,Kc,nj,u_,sj,Ok,Re,Jc,rj,g_,aj,ij,Gc,lj,Mh,dj,cj,pj,Xc,hj,Yc,mj,fj,uj,__,gj,_j,yo,b_,Zc,bj,kj,k_,ep,Tj,yj,T_,tp,vj,wj,y_,op,$j,xj,to,np,Fj,ls,Bj,v_,Ej,Mj,w_,zj,Pj,qj,ma,jj,fa,Ik,ds,ua,$_,sp,Cj,x_,Nj,Ak,Ve,rp,Oj,cs,Ij,F_,Aj,Lj,B_,Dj,Sj,Uj,ap,Wj,zh,Hj,Rj,Vj,ip,Qj,lp,Kj,Jj,Gj,E_,Xj,Yj,vo,M_,dp,Zj,eC,z_,cp,tC,oC,P_,pp,nC,sC,q_,hp,rC,aC,oo,mp,iC,ps,lC,j_,dC,cC,C_,pC,hC,mC,ga,fC,_a,Lk;return l=new $e({}),re=new $e({}),Me=new $e({}),Ra=new C({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/configuration_bert.py#L72"}}),_s=new ee({props:{anchor:"transformers.BertConfig.example",$$slots:{default:[K7]},$$scope:{ctx:B}}}),Qa=new $e({}),Ka=new C({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L137"}}),Ga=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ya=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ei=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L321",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ts=new ee({props:{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[J7]},$$scope:{ctx:B}}}),ti=new C({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L350"}}),oi=new $e({}),ni=new C({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert_fast.py#L161"}}),ai=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert_fast.py#L249",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),li=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert_fast.py#L273",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vs=new ee({props:{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[G7]},$$scope:{ctx:B}}}),di=new $e({}),ci=new C({props:{name:"class transformers.TFBertTokenizer",anchor:"transformers.TFBertTokenizer",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.vocab_list",description:`<strong>vocab_list</strong> (<code>list</code>) &#x2014;
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
Whether to return the attention_mask.`,name:"return_attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert_tf.py#L11"}}),hi=new C({props:{name:"from_pretrained",anchor:"transformers.TFBertTokenizer.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"*init_inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
The name or path to the pre-trained tokenizer.`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert_tf.py#L113"}}),$s=new ee({props:{anchor:"transformers.TFBertTokenizer.from_pretrained.example",$$slots:{default:[X7]},$$scope:{ctx:B}}}),fi=new C({props:{name:"from_tokenizer",anchor:"transformers.TFBertTokenizer.from_tokenizer",parameters:[{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.from_tokenizer.tokenizer",description:`<strong>tokenizer</strong> (<code>PreTrainedTokenizerBase</code>) &#x2014;
The tokenizer to use to initialize the <code>TFBertTokenizer</code>.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert_tf.py#L83"}}),xs=new ee({props:{anchor:"transformers.TFBertTokenizer.from_tokenizer.example",$$slots:{default:[Y7]},$$scope:{ctx:B}}}),ui=new $e({}),gi=new C({props:{name:"class transformers.models.bert.modeling_bert.BertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L771"}}),bi=new C({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L925"}}),Ti=new C({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L64"}}),vi=new C({props:{name:"replace",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/flax/struct.py#L108"}}),wi=new $e({}),$i=new C({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L874"}}),zi=new C({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L913",returnDescription:`
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
`}}),Ms=new we({props:{$$slots:{default:[Z7]},$$scope:{ctx:B}}}),zs=new ee({props:{anchor:"transformers.BertModel.forward.example",$$slots:{default:[eO]},$$scope:{ctx:B}}}),Pi=new $e({}),qi=new C({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1057"}}),Oi=new C({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1073",returnDescription:`
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
`}}),qs=new we({props:{$$slots:{default:[tO]},$$scope:{ctx:B}}}),js=new ee({props:{anchor:"transformers.BertForPreTraining.forward.example",$$slots:{default:[oO]},$$scope:{ctx:B}}}),Ii=new $e({}),Ai=new C({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1161"}}),Wi=new C({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1184",returnDescription:`
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
`}}),Ns=new we({props:{$$slots:{default:[nO]},$$scope:{ctx:B}}}),Os=new ee({props:{anchor:"transformers.BertLMHeadModel.forward.example",$$slots:{default:[sO]},$$scope:{ctx:B}}}),Hi=new $e({}),Ri=new C({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1296"}}),Gi=new C({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1322",returnDescription:`
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
`}}),As=new we({props:{$$slots:{default:[rO]},$$scope:{ctx:B}}}),Ls=new ee({props:{anchor:"transformers.BertForMaskedLM.forward.example",$$slots:{default:[aO]},$$scope:{ctx:B}}}),Ds=new ee({props:{anchor:"transformers.BertForMaskedLM.forward.example-2",$$slots:{default:[iO]},$$scope:{ctx:B}}}),Xi=new $e({}),Yi=new C({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1409"}}),nl=new C({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1419",returnDescription:`
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
`}}),Us=new we({props:{$$slots:{default:[lO]},$$scope:{ctx:B}}}),Ws=new ee({props:{anchor:"transformers.BertForNextSentencePrediction.forward.example",$$slots:{default:[dO]},$$scope:{ctx:B}}}),sl=new $e({}),rl=new C({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1514"}}),dl=new C({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1530",returnDescription:`
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
`}}),Rs=new we({props:{$$slots:{default:[cO]},$$scope:{ctx:B}}}),Vs=new ee({props:{anchor:"transformers.BertForSequenceClassification.forward.example",$$slots:{default:[pO]},$$scope:{ctx:B}}}),Qs=new ee({props:{anchor:"transformers.BertForSequenceClassification.forward.example-2",$$slots:{default:[hO]},$$scope:{ctx:B}}}),Ks=new ee({props:{anchor:"transformers.BertForSequenceClassification.forward.example-3",$$slots:{default:[mO]},$$scope:{ctx:B}}}),Js=new ee({props:{anchor:"transformers.BertForSequenceClassification.forward.example-4",$$slots:{default:[fO]},$$scope:{ctx:B}}}),cl=new $e({}),pl=new C({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1618"}}),ul=new C({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1632",returnDescription:`
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
`}}),Xs=new we({props:{$$slots:{default:[uO]},$$scope:{ctx:B}}}),Ys=new ee({props:{anchor:"transformers.BertForMultipleChoice.forward.example",$$slots:{default:[gO]},$$scope:{ctx:B}}}),gl=new $e({}),_l=new C({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1713"}}),yl=new C({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1731",returnDescription:`
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
`}}),er=new we({props:{$$slots:{default:[_O]},$$scope:{ctx:B}}}),tr=new ee({props:{anchor:"transformers.BertForTokenClassification.forward.example",$$slots:{default:[bO]},$$scope:{ctx:B}}}),or=new ee({props:{anchor:"transformers.BertForTokenClassification.forward.example-2",$$slots:{default:[kO]},$$scope:{ctx:B}}}),vl=new $e({}),wl=new C({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1800"}}),Bl=new C({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1814",returnDescription:`
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
`}}),sr=new we({props:{$$slots:{default:[TO]},$$scope:{ctx:B}}}),rr=new ee({props:{anchor:"transformers.BertForQuestionAnswering.forward.example",$$slots:{default:[yO]},$$scope:{ctx:B}}}),ar=new ee({props:{anchor:"transformers.BertForQuestionAnswering.forward.example-2",$$slots:{default:[vO]},$$scope:{ctx:B}}}),El=new $e({}),Ml=new C({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1052"}}),lr=new we({props:{$$slots:{default:[wO]},$$scope:{ctx:B}}}),jl=new C({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1058",returnDescription:`
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
`}}),dr=new we({props:{$$slots:{default:[$O]},$$scope:{ctx:B}}}),cr=new ee({props:{anchor:"transformers.TFBertModel.call.example",$$slots:{default:[xO]},$$scope:{ctx:B}}}),Cl=new $e({}),Nl=new C({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1149"}}),hr=new we({props:{$$slots:{default:[FO]},$$scope:{ctx:B}}}),Ll=new C({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1171",returnDescription:`
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
`}}),mr=new we({props:{$$slots:{default:[BO]},$$scope:{ctx:B}}}),fr=new ee({props:{anchor:"transformers.TFBertForPreTraining.call.example",$$slots:{default:[EO]},$$scope:{ctx:B}}}),Dl=new $e({}),Sl=new C({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1358"}}),Ul=new C({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1395",returnDescription:`
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
`}}),gr=new ee({props:{anchor:"transformers.TFBertLMHeadModel.call.example",$$slots:{default:[MO]},$$scope:{ctx:B}}}),Vl=new $e({}),Ql=new C({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1266"}}),br=new we({props:{$$slots:{default:[zO]},$$scope:{ctx:B}}}),Yl=new C({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1294",returnDescription:`
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
`}}),kr=new we({props:{$$slots:{default:[PO]},$$scope:{ctx:B}}}),Tr=new ee({props:{anchor:"transformers.TFBertForMaskedLM.call.example",$$slots:{default:[qO]},$$scope:{ctx:B}}}),yr=new ee({props:{anchor:"transformers.TFBertForMaskedLM.call.example-2",$$slots:{default:[jO]},$$scope:{ctx:B}}}),Zl=new $e({}),ed=new C({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1508"}}),wr=new we({props:{$$slots:{default:[CO]},$$scope:{ctx:B}}}),rd=new C({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1518",returnDescription:`
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
`}}),$r=new we({props:{$$slots:{default:[NO]},$$scope:{ctx:B}}}),xr=new ee({props:{anchor:"transformers.TFBertForNextSentencePrediction.call.example",$$slots:{default:[OO]},$$scope:{ctx:B}}}),ad=new $e({}),id=new C({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1599"}}),Br=new we({props:{$$slots:{default:[IO]},$$scope:{ctx:B}}}),pd=new C({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1620",returnDescription:`
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
`}}),Er=new we({props:{$$slots:{default:[AO]},$$scope:{ctx:B}}}),Mr=new ee({props:{anchor:"transformers.TFBertForSequenceClassification.call.example",$$slots:{default:[LO]},$$scope:{ctx:B}}}),zr=new ee({props:{anchor:"transformers.TFBertForSequenceClassification.call.example-2",$$slots:{default:[DO]},$$scope:{ctx:B}}}),hd=new $e({}),md=new C({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1692"}}),qr=new we({props:{$$slots:{default:[SO]},$$scope:{ctx:B}}}),_d=new C({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1716",returnDescription:`
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
`}}),jr=new we({props:{$$slots:{default:[UO]},$$scope:{ctx:B}}}),Cr=new ee({props:{anchor:"transformers.TFBertForMultipleChoice.call.example",$$slots:{default:[WO]},$$scope:{ctx:B}}}),bd=new $e({}),kd=new C({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1822"}}),Or=new we({props:{$$slots:{default:[HO]},$$scope:{ctx:B}}}),wd=new C({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1849",returnDescription:`
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
`}}),Ir=new we({props:{$$slots:{default:[RO]},$$scope:{ctx:B}}}),Ar=new ee({props:{anchor:"transformers.TFBertForTokenClassification.call.example",$$slots:{default:[VO]},$$scope:{ctx:B}}}),Lr=new ee({props:{anchor:"transformers.TFBertForTokenClassification.call.example-2",$$slots:{default:[QO]},$$scope:{ctx:B}}}),$d=new $e({}),xd=new C({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1919"}}),Sr=new we({props:{$$slots:{default:[KO]},$$scope:{ctx:B}}}),Md=new C({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1941",returnDescription:`
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
`}}),Ur=new we({props:{$$slots:{default:[JO]},$$scope:{ctx:B}}}),Wr=new ee({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example",$$slots:{default:[GO]},$$scope:{ctx:B}}}),Hr=new ee({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example-2",$$slots:{default:[XO]},$$scope:{ctx:B}}}),zd=new $e({}),Pd=new C({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1028"}}),Ld=new C({props:{name:"__call__",anchor:"transformers.FlaxBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Vr=new we({props:{$$slots:{default:[YO]},$$scope:{ctx:B}}}),Qr=new ee({props:{anchor:"transformers.FlaxBertModel.__call__.example",$$slots:{default:[ZO]},$$scope:{ctx:B}}}),Dd=new $e({}),Sd=new C({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1106"}}),Jd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Jr=new we({props:{$$slots:{default:[eI]},$$scope:{ctx:B}}}),Gr=new ee({props:{anchor:"transformers.FlaxBertForPreTraining.__call__.example",$$slots:{default:[tI]},$$scope:{ctx:B}}}),Gd=new $e({}),Xd=new C({props:{name:"class transformers.FlaxBertForCausalLM",anchor:"transformers.FlaxBertForCausalLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1683"}}),rc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Yr=new we({props:{$$slots:{default:[oI]},$$scope:{ctx:B}}}),Zr=new ee({props:{anchor:"transformers.FlaxBertForCausalLM.__call__.example",$$slots:{default:[nI]},$$scope:{ctx:B}}}),ac=new $e({}),ic=new C({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1197"}}),gc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ta=new we({props:{$$slots:{default:[sI]},$$scope:{ctx:B}}}),oa=new ee({props:{anchor:"transformers.FlaxBertForMaskedLM.__call__.example",$$slots:{default:[rI]},$$scope:{ctx:B}}}),_c=new $e({}),bc=new C({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1263"}}),Bc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForNextSentencePrediction.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),sa=new we({props:{$$slots:{default:[aI]},$$scope:{ctx:B}}}),ra=new ee({props:{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.example",$$slots:{default:[iI]},$$scope:{ctx:B}}}),Ec=new $e({}),Mc=new C({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1366"}}),Ic=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ia=new we({props:{$$slots:{default:[lI]},$$scope:{ctx:B}}}),la=new ee({props:{anchor:"transformers.FlaxBertForSequenceClassification.__call__.example",$$slots:{default:[dI]},$$scope:{ctx:B}}}),Ac=new $e({}),Lc=new C({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1447"}}),Qc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ca=new we({props:{$$slots:{default:[cI]},$$scope:{ctx:B}}}),pa=new ee({props:{anchor:"transformers.FlaxBertForMultipleChoice.__call__.example",$$slots:{default:[pI]},$$scope:{ctx:B}}}),Kc=new $e({}),Jc=new C({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1525"}}),np=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ma=new we({props:{$$slots:{default:[hI]},$$scope:{ctx:B}}}),fa=new ee({props:{anchor:"transformers.FlaxBertForTokenClassification.__call__.example",$$slots:{default:[mI]},$$scope:{ctx:B}}}),sp=new $e({}),rp=new C({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1598"}}),mp=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ga=new we({props:{$$slots:{default:[fI]},$$scope:{ctx:B}}}),_a=new ee({props:{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.example",$$slots:{default:[uI]},$$scope:{ctx:B}}}),{c(){d=r("meta"),_=c(),m=r("h1"),h=r("a"),g=r("span"),y(l.$$.fragment),f=c(),E=r("span"),be=n("BERT"),X=c(),z=r("h2"),ne=r("a"),L=r("span"),y(re.$$.fragment),ke=c(),D=r("span"),Te=n("Overview"),me=c(),J=r("p"),O=n("The BERT model was proposed in "),ae=r("a"),Y=n("BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),P=n(` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),j=c(),ie=r("p"),H=n("The abstract from the paper is the following:"),fe=c(),le=r("p"),S=r("em"),ye=n(`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),ue=c(),q=r("p"),ce=r("em"),R=n(`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),ge=c(),de=r("p"),V=n("Tips:"),_e=c(),se=r("ul"),N=r("li"),ve=n(`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Q=c(),pe=r("li"),T=n(`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),M=c(),K=r("p"),ze=n("This model was contributed by "),Be=r("a"),I=n("thomwolf"),Pe=n(". The original code can be found "),Ee=r("a"),qe=n("here"),A=n("."),W=c(),xe=r("h2"),Fe=r("a"),U=r("span"),y(Me.$$.fragment),je=c(),he=r("span"),Ce=n("BertConfig"),Eb=c(),Nt=r("div"),y(Ra.$$.fragment),jy=c(),ho=r("p"),Cy=n("This is the configuration class to store the configuration of a "),Ep=r("a"),Ny=n("BertModel"),Oy=n(" or a "),Mp=r("a"),Iy=n("TFBertModel"),Ay=n(`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Va=r("a"),Ly=n("bert-base-uncased"),Dy=n(" architecture."),Sy=c(),Ko=r("p"),Uy=n("Configuration objects inherit from "),zp=r("a"),Wy=n("PretrainedConfig"),Hy=n(` and can be used to control the model outputs. Read the
documentation from `),Pp=r("a"),Ry=n("PretrainedConfig"),Vy=n(" for more information."),Qy=c(),y(_s.$$.fragment),Mb=c(),Jo=r("h2"),bs=r("a"),km=r("span"),y(Qa.$$.fragment),Ky=c(),Tm=r("span"),Jy=n("BertTokenizer"),zb=c(),Ne=r("div"),y(Ka.$$.fragment),Gy=c(),ym=r("p"),Xy=n("Construct a BERT tokenizer. Based on WordPiece."),Yy=c(),Ja=r("p"),Zy=n("This tokenizer inherits from "),qp=r("a"),ev=n("PreTrainedTokenizer"),tv=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ov=c(),Bo=r("div"),y(Ga.$$.fragment),nv=c(),vm=r("p"),sv=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),rv=c(),Xa=r("ul"),jp=r("li"),av=n("single sequence: "),wm=r("code"),iv=n("[CLS] X [SEP]"),lv=c(),Cp=r("li"),dv=n("pair of sequences: "),$m=r("code"),cv=n("[CLS] A [SEP] B [SEP]"),pv=c(),ks=r("div"),y(Ya.$$.fragment),hv=c(),Za=r("p"),mv=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xm=r("code"),fv=n("prepare_for_model"),uv=n(" method."),gv=c(),It=r("div"),y(ei.$$.fragment),_v=c(),Fm=r("p"),bv=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),kv=c(),y(Ts.$$.fragment),Tv=c(),Go=r("p"),yv=n("If "),Bm=r("code"),vv=n("token_ids_1"),wv=n(" is "),Em=r("code"),$v=n("None"),xv=n(", this method only returns the first portion of the mask (0s)."),Fv=c(),Np=r("div"),y(ti.$$.fragment),Pb=c(),Xo=r("h2"),ys=r("a"),Mm=r("span"),y(oi.$$.fragment),Bv=c(),zm=r("span"),Ev=n("BertTokenizerFast"),qb=c(),rt=r("div"),y(ni.$$.fragment),Mv=c(),si=r("p"),zv=n("Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Pm=r("em"),Pv=n("tokenizers"),qv=n(" library). Based on WordPiece."),jv=c(),ri=r("p"),Cv=n("This tokenizer inherits from "),Op=r("a"),Nv=n("PreTrainedTokenizerFast"),Ov=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Iv=c(),Eo=r("div"),y(ai.$$.fragment),Av=c(),qm=r("p"),Lv=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Dv=c(),ii=r("ul"),Ip=r("li"),Sv=n("single sequence: "),jm=r("code"),Uv=n("[CLS] X [SEP]"),Wv=c(),Ap=r("li"),Hv=n("pair of sequences: "),Cm=r("code"),Rv=n("[CLS] A [SEP] B [SEP]"),Vv=c(),At=r("div"),y(li.$$.fragment),Qv=c(),Nm=r("p"),Kv=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Jv=c(),y(vs.$$.fragment),Gv=c(),Yo=r("p"),Xv=n("If "),Om=r("code"),Yv=n("token_ids_1"),Zv=n(" is "),Im=r("code"),ew=n("None"),tw=n(", this method only returns the first portion of the mask (0s)."),jb=c(),Zo=r("h2"),ws=r("a"),Am=r("span"),y(di.$$.fragment),ow=c(),Lm=r("span"),nw=n("TFBertTokenizer"),Cb=c(),at=r("div"),y(ci.$$.fragment),sw=c(),en=r("p"),rw=n(`This is an in-graph tokenizer for BERT. It should be initialized similarly to other tokenizers, using the
`),Dm=r("code"),aw=n("from_pretrained()"),iw=n(" method. It can also be initialized with the "),Sm=r("code"),lw=n("from_tokenizer()"),dw=n(` method, which imports settings
from an existing standard tokenizer object.`),cw=c(),pi=r("p"),pw=n(`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. As a result, they have somewhat more limited options
than standard tokenizer classes. They are most useful when you want to create an end-to-end model that goes
straight from `),Um=r("code"),hw=n("tf.string"),mw=n(" inputs to outputs."),fw=c(),Mo=r("div"),y(hi.$$.fragment),uw=c(),mi=r("p"),gw=n("Instantiate a "),Wm=r("code"),_w=n("TFBertTokenizer"),bw=n(" from a pre-trained tokenizer."),kw=c(),y($s.$$.fragment),Tw=c(),zo=r("div"),y(fi.$$.fragment),yw=c(),tn=r("p"),vw=n("Initialize a "),Hm=r("code"),ww=n("TFBertTokenizer"),$w=n(" from an existing "),Rm=r("code"),xw=n("Tokenizer"),Fw=n("."),Bw=c(),y(xs.$$.fragment),Nb=c(),on=r("h2"),Fs=r("a"),Vm=r("span"),y(ui.$$.fragment),Ew=c(),Qm=r("span"),Mw=n("Bert specific outputs"),Ob=c(),nn=r("div"),y(gi.$$.fragment),zw=c(),_i=r("p"),Pw=n("Output type of "),Lp=r("a"),qw=n("BertForPreTraining"),jw=n("."),Ib=c(),sn=r("div"),y(bi.$$.fragment),Cw=c(),ki=r("p"),Nw=n("Output type of "),Dp=r("a"),Ow=n("TFBertForPreTraining"),Iw=n("."),Ab=c(),mo=r("div"),y(Ti.$$.fragment),Aw=c(),yi=r("p"),Lw=n("Output type of "),Sp=r("a"),Dw=n("BertForPreTraining"),Sw=n("."),Uw=c(),Bs=r("div"),y(vi.$$.fragment),Ww=c(),Km=r("p"),Hw=n("\u201CReturns a new object replacing the specified fields with new values."),Lb=c(),rn=r("h2"),Es=r("a"),Jm=r("span"),y(wi.$$.fragment),Rw=c(),Gm=r("span"),Vw=n("BertModel"),Db=c(),Oe=r("div"),y($i.$$.fragment),Qw=c(),Xm=r("p"),Kw=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Jw=c(),xi=r("p"),Gw=n("This model inherits from "),Up=r("a"),Xw=n("PreTrainedModel"),Yw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zw=c(),Fi=r("p"),e1=n("This model is also a PyTorch "),Bi=r("a"),t1=n("torch.nn.Module"),o1=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),n1=c(),Ei=r("p"),s1=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Mi=r("a"),r1=n(`Attention is
all you need`),a1=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),i1=c(),Ke=r("p"),l1=n("To behave as an decoder the model needs to be initialized with the "),Ym=r("code"),d1=n("is_decoder"),c1=n(` argument of the configuration set
to `),Zm=r("code"),p1=n("True"),h1=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),ef=r("code"),m1=n("is_decoder"),f1=n(` argument and
`),tf=r("code"),u1=n("add_cross_attention"),g1=n(" set to "),of=r("code"),_1=n("True"),b1=n("; an "),nf=r("code"),k1=n("encoder_hidden_states"),T1=n(" is then expected as an input to the forward pass."),y1=c(),Lt=r("div"),y(zi.$$.fragment),v1=c(),an=r("p"),w1=n("The "),Wp=r("a"),$1=n("BertModel"),x1=n(" forward method, overrides the "),sf=r("code"),F1=n("__call__"),B1=n(" special method."),E1=c(),y(Ms.$$.fragment),M1=c(),y(zs.$$.fragment),Sb=c(),ln=r("h2"),Ps=r("a"),rf=r("span"),y(Pi.$$.fragment),z1=c(),af=r("span"),P1=n("BertForPreTraining"),Ub=c(),it=r("div"),y(qi.$$.fragment),q1=c(),dn=r("p"),j1=n("Bert Model with two heads on top as done during the pretraining: a "),lf=r("code"),C1=n("masked language modeling"),N1=n(" head and a "),df=r("code"),O1=n("next sentence prediction (classification)"),I1=n(" head."),A1=c(),ji=r("p"),L1=n("This model inherits from "),Hp=r("a"),D1=n("PreTrainedModel"),S1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U1=c(),Ci=r("p"),W1=n("This model is also a PyTorch "),Ni=r("a"),H1=n("torch.nn.Module"),R1=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),V1=c(),Dt=r("div"),y(Oi.$$.fragment),Q1=c(),cn=r("p"),K1=n("The "),Rp=r("a"),J1=n("BertForPreTraining"),G1=n(" forward method, overrides the "),cf=r("code"),X1=n("__call__"),Y1=n(" special method."),Z1=c(),y(qs.$$.fragment),e$=c(),y(js.$$.fragment),Wb=c(),pn=r("h2"),Cs=r("a"),pf=r("span"),y(Ii.$$.fragment),t$=c(),hf=r("span"),o$=n("BertLMHeadModel"),Hb=c(),lt=r("div"),y(Ai.$$.fragment),n$=c(),Li=r("p"),s$=n("Bert Model with a "),mf=r("code"),r$=n("language modeling"),a$=n(" head on top for CLM fine-tuning."),i$=c(),Di=r("p"),l$=n("This model inherits from "),Vp=r("a"),d$=n("PreTrainedModel"),c$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),p$=c(),Si=r("p"),h$=n("This model is also a PyTorch "),Ui=r("a"),m$=n("torch.nn.Module"),f$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),u$=c(),St=r("div"),y(Wi.$$.fragment),g$=c(),hn=r("p"),_$=n("The "),Qp=r("a"),b$=n("BertLMHeadModel"),k$=n(" forward method, overrides the "),ff=r("code"),T$=n("__call__"),y$=n(" special method."),v$=c(),y(Ns.$$.fragment),w$=c(),y(Os.$$.fragment),Rb=c(),mn=r("h2"),Is=r("a"),uf=r("span"),y(Hi.$$.fragment),$$=c(),gf=r("span"),x$=n("BertForMaskedLM"),Vb=c(),dt=r("div"),y(Ri.$$.fragment),F$=c(),Vi=r("p"),B$=n("Bert Model with a "),_f=r("code"),E$=n("language modeling"),M$=n(" head on top."),z$=c(),Qi=r("p"),P$=n("This model inherits from "),Kp=r("a"),q$=n("PreTrainedModel"),j$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),C$=c(),Ki=r("p"),N$=n("This model is also a PyTorch "),Ji=r("a"),O$=n("torch.nn.Module"),I$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),A$=c(),ut=r("div"),y(Gi.$$.fragment),L$=c(),fn=r("p"),D$=n("The "),Jp=r("a"),S$=n("BertForMaskedLM"),U$=n(" forward method, overrides the "),bf=r("code"),W$=n("__call__"),H$=n(" special method."),R$=c(),y(As.$$.fragment),V$=c(),y(Ls.$$.fragment),Q$=c(),y(Ds.$$.fragment),Qb=c(),un=r("h2"),Ss=r("a"),kf=r("span"),y(Xi.$$.fragment),K$=c(),Tf=r("span"),J$=n("BertForNextSentencePrediction"),Kb=c(),ct=r("div"),y(Yi.$$.fragment),G$=c(),Zi=r("p"),X$=n("Bert Model with a "),yf=r("code"),Y$=n("next sentence prediction (classification)"),Z$=n(" head on top."),e2=c(),el=r("p"),t2=n("This model inherits from "),Gp=r("a"),o2=n("PreTrainedModel"),n2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),s2=c(),tl=r("p"),r2=n("This model is also a PyTorch "),ol=r("a"),a2=n("torch.nn.Module"),i2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),l2=c(),Ut=r("div"),y(nl.$$.fragment),d2=c(),gn=r("p"),c2=n("The "),Xp=r("a"),p2=n("BertForNextSentencePrediction"),h2=n(" forward method, overrides the "),vf=r("code"),m2=n("__call__"),f2=n(" special method."),u2=c(),y(Us.$$.fragment),g2=c(),y(Ws.$$.fragment),Jb=c(),_n=r("h2"),Hs=r("a"),wf=r("span"),y(sl.$$.fragment),_2=c(),$f=r("span"),b2=n("BertForSequenceClassification"),Gb=c(),pt=r("div"),y(rl.$$.fragment),k2=c(),xf=r("p"),T2=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),y2=c(),al=r("p"),v2=n("This model inherits from "),Yp=r("a"),w2=n("PreTrainedModel"),$2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),x2=c(),il=r("p"),F2=n("This model is also a PyTorch "),ll=r("a"),B2=n("torch.nn.Module"),E2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),M2=c(),Qe=r("div"),y(dl.$$.fragment),z2=c(),bn=r("p"),P2=n("The "),Zp=r("a"),q2=n("BertForSequenceClassification"),j2=n(" forward method, overrides the "),Ff=r("code"),C2=n("__call__"),N2=n(" special method."),O2=c(),y(Rs.$$.fragment),I2=c(),y(Vs.$$.fragment),A2=c(),y(Qs.$$.fragment),L2=c(),y(Ks.$$.fragment),D2=c(),y(Js.$$.fragment),Xb=c(),kn=r("h2"),Gs=r("a"),Bf=r("span"),y(cl.$$.fragment),S2=c(),Ef=r("span"),U2=n("BertForMultipleChoice"),Yb=c(),ht=r("div"),y(pl.$$.fragment),W2=c(),Mf=r("p"),H2=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),R2=c(),hl=r("p"),V2=n("This model inherits from "),eh=r("a"),Q2=n("PreTrainedModel"),K2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),J2=c(),ml=r("p"),G2=n("This model is also a PyTorch "),fl=r("a"),X2=n("torch.nn.Module"),Y2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Z2=c(),Wt=r("div"),y(ul.$$.fragment),ex=c(),Tn=r("p"),tx=n("The "),th=r("a"),ox=n("BertForMultipleChoice"),nx=n(" forward method, overrides the "),zf=r("code"),sx=n("__call__"),rx=n(" special method."),ax=c(),y(Xs.$$.fragment),ix=c(),y(Ys.$$.fragment),Zb=c(),yn=r("h2"),Zs=r("a"),Pf=r("span"),y(gl.$$.fragment),lx=c(),qf=r("span"),dx=n("BertForTokenClassification"),ek=c(),mt=r("div"),y(_l.$$.fragment),cx=c(),jf=r("p"),px=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hx=c(),bl=r("p"),mx=n("This model inherits from "),oh=r("a"),fx=n("PreTrainedModel"),ux=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gx=c(),kl=r("p"),_x=n("This model is also a PyTorch "),Tl=r("a"),bx=n("torch.nn.Module"),kx=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tx=c(),gt=r("div"),y(yl.$$.fragment),yx=c(),vn=r("p"),vx=n("The "),nh=r("a"),wx=n("BertForTokenClassification"),$x=n(" forward method, overrides the "),Cf=r("code"),xx=n("__call__"),Fx=n(" special method."),Bx=c(),y(er.$$.fragment),Ex=c(),y(tr.$$.fragment),Mx=c(),y(or.$$.fragment),tk=c(),wn=r("h2"),nr=r("a"),Nf=r("span"),y(vl.$$.fragment),zx=c(),Of=r("span"),Px=n("BertForQuestionAnswering"),ok=c(),ft=r("div"),y(wl.$$.fragment),qx=c(),$n=r("p"),jx=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),If=r("code"),Cx=n("span start logits"),Nx=n(" and "),Af=r("code"),Ox=n("span end logits"),Ix=n(")."),Ax=c(),$l=r("p"),Lx=n("This model inherits from "),sh=r("a"),Dx=n("PreTrainedModel"),Sx=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ux=c(),xl=r("p"),Wx=n("This model is also a PyTorch "),Fl=r("a"),Hx=n("torch.nn.Module"),Rx=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vx=c(),_t=r("div"),y(Bl.$$.fragment),Qx=c(),xn=r("p"),Kx=n("The "),rh=r("a"),Jx=n("BertForQuestionAnswering"),Gx=n(" forward method, overrides the "),Lf=r("code"),Xx=n("__call__"),Yx=n(" special method."),Zx=c(),y(sr.$$.fragment),eF=c(),y(rr.$$.fragment),tF=c(),y(ar.$$.fragment),nk=c(),Fn=r("h2"),ir=r("a"),Df=r("span"),y(El.$$.fragment),oF=c(),Sf=r("span"),nF=n("TFBertModel"),sk=c(),Je=r("div"),y(Ml.$$.fragment),sF=c(),Uf=r("p"),rF=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),aF=c(),zl=r("p"),iF=n("This model inherits from "),ah=r("a"),lF=n("TFPreTrainedModel"),dF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cF=c(),Pl=r("p"),pF=n("This model is also a "),ql=r("a"),hF=n("tf.keras.Model"),mF=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fF=c(),y(lr.$$.fragment),uF=c(),Ht=r("div"),y(jl.$$.fragment),gF=c(),Bn=r("p"),_F=n("The "),ih=r("a"),bF=n("TFBertModel"),kF=n(" forward method, overrides the "),Wf=r("code"),TF=n("__call__"),yF=n(" special method."),vF=c(),y(dr.$$.fragment),wF=c(),y(cr.$$.fragment),rk=c(),En=r("h2"),pr=r("a"),Hf=r("span"),y(Cl.$$.fragment),$F=c(),Rf=r("span"),xF=n("TFBertForPreTraining"),ak=c(),Ge=r("div"),y(Nl.$$.fragment),FF=c(),Mn=r("p"),BF=n(`Bert Model with two heads on top as done during the pretraining:
a `),Vf=r("code"),EF=n("masked language modeling"),MF=n(" head and a "),Qf=r("code"),zF=n("next sentence prediction (classification)"),PF=n(" head."),qF=c(),Ol=r("p"),jF=n("This model inherits from "),lh=r("a"),CF=n("TFPreTrainedModel"),NF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),OF=c(),Il=r("p"),IF=n("This model is also a "),Al=r("a"),AF=n("tf.keras.Model"),LF=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),DF=c(),y(hr.$$.fragment),SF=c(),Rt=r("div"),y(Ll.$$.fragment),UF=c(),zn=r("p"),WF=n("The "),dh=r("a"),HF=n("TFBertForPreTraining"),RF=n(" forward method, overrides the "),Kf=r("code"),VF=n("__call__"),QF=n(" special method."),KF=c(),y(mr.$$.fragment),JF=c(),y(fr.$$.fragment),ik=c(),Pn=r("h2"),ur=r("a"),Jf=r("span"),y(Dl.$$.fragment),GF=c(),Gf=r("span"),XF=n("TFBertModelLMHeadModel"),lk=c(),qn=r("div"),y(Sl.$$.fragment),YF=c(),bt=r("div"),y(Ul.$$.fragment),ZF=c(),Ie=r("p"),e0=n("encoder_hidden_states  ("),Xf=r("code"),t0=n("tf.Tensor"),o0=n(" of shape "),Yf=r("code"),n0=n("(batch_size, sequence_length, hidden_size)"),s0=n(", "),Zf=r("em"),r0=n("optional"),a0=n(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),eu=r("code"),i0=n("tf.Tensor"),l0=n(" of shape "),tu=r("code"),d0=n("(batch_size, sequence_length)"),c0=n(", "),ou=r("em"),p0=n("optional"),h0=n(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),nu=r("code"),m0=n("[0, 1]"),f0=n(":"),u0=c(),Wl=r("ul"),Hl=r("li"),g0=n("1 for tokens that are "),su=r("strong"),_0=n("not masked"),b0=n(","),k0=c(),Rl=r("li"),T0=n("0 for tokens that are "),ru=r("strong"),y0=n("masked"),v0=n("."),w0=c(),G=r("p"),$0=n("past_key_values ("),au=r("code"),x0=n("Tuple[Tuple[tf.Tensor]]"),F0=n(" of length "),iu=r("code"),B0=n("config.n_layers"),E0=n(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),lu=r("code"),M0=n("past_key_values"),z0=n(" are used, the user can optionally input only the last "),du=r("code"),P0=n("decoder_input_ids"),q0=n(` (those that
don\u2019t have their past key value states given to this model) of shape `),cu=r("code"),j0=n("(batch_size, 1)"),C0=n(` instead of all
`),pu=r("code"),N0=n("decoder_input_ids"),O0=n(" of shape "),hu=r("code"),I0=n("(batch_size, sequence_length)"),A0=n(`.
use_cache (`),mu=r("code"),L0=n("bool"),D0=n(", "),fu=r("em"),S0=n("optional"),U0=n(", defaults to "),uu=r("code"),W0=n("True"),H0=n(`):
If set to `),gu=r("code"),R0=n("True"),V0=n(", "),_u=r("code"),Q0=n("past_key_values"),K0=n(` key value states are returned and can be used to speed up decoding (see
`),bu=r("code"),J0=n("past_key_values"),G0=n("). Set to "),ku=r("code"),X0=n("False"),Y0=n(" during training, "),Tu=r("code"),Z0=n("True"),eB=n(` during generation
labels (`),yu=r("code"),tB=n("tf.Tensor"),oB=n(" or "),vu=r("code"),nB=n("np.ndarray"),sB=n(" of shape "),wu=r("code"),rB=n("(batch_size, sequence_length)"),aB=n(", "),$u=r("em"),iB=n("optional"),lB=n(`):
Labels for computing the cross entropy classification loss. Indices should be in `),xu=r("code"),dB=n("[0, ..., config.vocab_size - 1]"),cB=n("."),pB=c(),y(gr.$$.fragment),dk=c(),jn=r("h2"),_r=r("a"),Fu=r("span"),y(Vl.$$.fragment),hB=c(),Bu=r("span"),mB=n("TFBertForMaskedLM"),ck=c(),Xe=r("div"),y(Ql.$$.fragment),fB=c(),Kl=r("p"),uB=n("Bert Model with a "),Eu=r("code"),gB=n("language modeling"),_B=n(" head on top."),bB=c(),Jl=r("p"),kB=n("This model inherits from "),ch=r("a"),TB=n("TFPreTrainedModel"),yB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vB=c(),Gl=r("p"),wB=n("This model is also a "),Xl=r("a"),$B=n("tf.keras.Model"),xB=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),FB=c(),y(br.$$.fragment),BB=c(),kt=r("div"),y(Yl.$$.fragment),EB=c(),Cn=r("p"),MB=n("The "),ph=r("a"),zB=n("TFBertForMaskedLM"),PB=n(" forward method, overrides the "),Mu=r("code"),qB=n("__call__"),jB=n(" special method."),CB=c(),y(kr.$$.fragment),NB=c(),y(Tr.$$.fragment),OB=c(),y(yr.$$.fragment),pk=c(),Nn=r("h2"),vr=r("a"),zu=r("span"),y(Zl.$$.fragment),IB=c(),Pu=r("span"),AB=n("TFBertForNextSentencePrediction"),hk=c(),Ye=r("div"),y(ed.$$.fragment),LB=c(),td=r("p"),DB=n("Bert Model with a "),qu=r("code"),SB=n("next sentence prediction (classification)"),UB=n(" head on top."),WB=c(),od=r("p"),HB=n("This model inherits from "),hh=r("a"),RB=n("TFPreTrainedModel"),VB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),QB=c(),nd=r("p"),KB=n("This model is also a "),sd=r("a"),JB=n("tf.keras.Model"),GB=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),XB=c(),y(wr.$$.fragment),YB=c(),Vt=r("div"),y(rd.$$.fragment),ZB=c(),On=r("p"),eE=n("The "),mh=r("a"),tE=n("TFBertForNextSentencePrediction"),oE=n(" forward method, overrides the "),ju=r("code"),nE=n("__call__"),sE=n(" special method."),rE=c(),y($r.$$.fragment),aE=c(),y(xr.$$.fragment),mk=c(),In=r("h2"),Fr=r("a"),Cu=r("span"),y(ad.$$.fragment),iE=c(),Nu=r("span"),lE=n("TFBertForSequenceClassification"),fk=c(),Ze=r("div"),y(id.$$.fragment),dE=c(),Ou=r("p"),cE=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),pE=c(),ld=r("p"),hE=n("This model inherits from "),fh=r("a"),mE=n("TFPreTrainedModel"),fE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uE=c(),dd=r("p"),gE=n("This model is also a "),cd=r("a"),_E=n("tf.keras.Model"),bE=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kE=c(),y(Br.$$.fragment),TE=c(),Tt=r("div"),y(pd.$$.fragment),yE=c(),An=r("p"),vE=n("The "),uh=r("a"),wE=n("TFBertForSequenceClassification"),$E=n(" forward method, overrides the "),Iu=r("code"),xE=n("__call__"),FE=n(" special method."),BE=c(),y(Er.$$.fragment),EE=c(),y(Mr.$$.fragment),ME=c(),y(zr.$$.fragment),uk=c(),Ln=r("h2"),Pr=r("a"),Au=r("span"),y(hd.$$.fragment),zE=c(),Lu=r("span"),PE=n("TFBertForMultipleChoice"),gk=c(),et=r("div"),y(md.$$.fragment),qE=c(),Du=r("p"),jE=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),CE=c(),fd=r("p"),NE=n("This model inherits from "),gh=r("a"),OE=n("TFPreTrainedModel"),IE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),AE=c(),ud=r("p"),LE=n("This model is also a "),gd=r("a"),DE=n("tf.keras.Model"),SE=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),UE=c(),y(qr.$$.fragment),WE=c(),Qt=r("div"),y(_d.$$.fragment),HE=c(),Dn=r("p"),RE=n("The "),_h=r("a"),VE=n("TFBertForMultipleChoice"),QE=n(" forward method, overrides the "),Su=r("code"),KE=n("__call__"),JE=n(" special method."),GE=c(),y(jr.$$.fragment),XE=c(),y(Cr.$$.fragment),_k=c(),Sn=r("h2"),Nr=r("a"),Uu=r("span"),y(bd.$$.fragment),YE=c(),Wu=r("span"),ZE=n("TFBertForTokenClassification"),bk=c(),tt=r("div"),y(kd.$$.fragment),eM=c(),Hu=r("p"),tM=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),oM=c(),Td=r("p"),nM=n("This model inherits from "),bh=r("a"),sM=n("TFPreTrainedModel"),rM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aM=c(),yd=r("p"),iM=n("This model is also a "),vd=r("a"),lM=n("tf.keras.Model"),dM=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cM=c(),y(Or.$$.fragment),pM=c(),yt=r("div"),y(wd.$$.fragment),hM=c(),Un=r("p"),mM=n("The "),kh=r("a"),fM=n("TFBertForTokenClassification"),uM=n(" forward method, overrides the "),Ru=r("code"),gM=n("__call__"),_M=n(" special method."),bM=c(),y(Ir.$$.fragment),kM=c(),y(Ar.$$.fragment),TM=c(),y(Lr.$$.fragment),kk=c(),Wn=r("h2"),Dr=r("a"),Vu=r("span"),y($d.$$.fragment),yM=c(),Qu=r("span"),vM=n("TFBertForQuestionAnswering"),Tk=c(),ot=r("div"),y(xd.$$.fragment),wM=c(),Hn=r("p"),$M=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ku=r("code"),xM=n("span start logits"),FM=n(" and "),Ju=r("code"),BM=n("span end logits"),EM=n(")."),MM=c(),Fd=r("p"),zM=n("This model inherits from "),Th=r("a"),PM=n("TFPreTrainedModel"),qM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jM=c(),Bd=r("p"),CM=n("This model is also a "),Ed=r("a"),NM=n("tf.keras.Model"),OM=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),IM=c(),y(Sr.$$.fragment),AM=c(),vt=r("div"),y(Md.$$.fragment),LM=c(),Rn=r("p"),DM=n("The "),yh=r("a"),SM=n("TFBertForQuestionAnswering"),UM=n(" forward method, overrides the "),Gu=r("code"),WM=n("__call__"),HM=n(" special method."),RM=c(),y(Ur.$$.fragment),VM=c(),y(Wr.$$.fragment),QM=c(),y(Hr.$$.fragment),yk=c(),Vn=r("h2"),Rr=r("a"),Xu=r("span"),y(zd.$$.fragment),KM=c(),Yu=r("span"),JM=n("FlaxBertModel"),vk=c(),Ae=r("div"),y(Pd.$$.fragment),GM=c(),Zu=r("p"),XM=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),YM=c(),qd=r("p"),ZM=n("This model inherits from "),vh=r("a"),ez=n("FlaxPreTrainedModel"),tz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oz=c(),jd=r("p"),nz=n("This model is also a Flax Linen "),Cd=r("a"),sz=n("flax.linen.Module"),rz=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),az=c(),eg=r("p"),iz=n("Finally, this model supports inherent JAX features such as:"),lz=c(),fo=r("ul"),tg=r("li"),Nd=r("a"),dz=n("Just-In-Time (JIT) compilation"),cz=c(),og=r("li"),Od=r("a"),pz=n("Automatic Differentiation"),hz=c(),ng=r("li"),Id=r("a"),mz=n("Vectorization"),fz=c(),sg=r("li"),Ad=r("a"),uz=n("Parallelization"),gz=c(),Kt=r("div"),y(Ld.$$.fragment),_z=c(),Qn=r("p"),bz=n("The "),rg=r("code"),kz=n("FlaxBertPreTrainedModel"),Tz=n(" forward method, overrides the "),ag=r("code"),yz=n("__call__"),vz=n(" special method."),wz=c(),y(Vr.$$.fragment),$z=c(),y(Qr.$$.fragment),wk=c(),Kn=r("h2"),Kr=r("a"),ig=r("span"),y(Dd.$$.fragment),xz=c(),lg=r("span"),Fz=n("FlaxBertForPreTraining"),$k=c(),Le=r("div"),y(Sd.$$.fragment),Bz=c(),Jn=r("p"),Ez=n("Bert Model with two heads on top as done during the pretraining: a "),dg=r("code"),Mz=n("masked language modeling"),zz=n(" head and a "),cg=r("code"),Pz=n("next sentence prediction (classification)"),qz=n(" head."),jz=c(),Ud=r("p"),Cz=n("This model inherits from "),wh=r("a"),Nz=n("FlaxPreTrainedModel"),Oz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Iz=c(),Wd=r("p"),Az=n("This model is also a Flax Linen "),Hd=r("a"),Lz=n("flax.linen.Module"),Dz=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Sz=c(),pg=r("p"),Uz=n("Finally, this model supports inherent JAX features such as:"),Wz=c(),uo=r("ul"),hg=r("li"),Rd=r("a"),Hz=n("Just-In-Time (JIT) compilation"),Rz=c(),mg=r("li"),Vd=r("a"),Vz=n("Automatic Differentiation"),Qz=c(),fg=r("li"),Qd=r("a"),Kz=n("Vectorization"),Jz=c(),ug=r("li"),Kd=r("a"),Gz=n("Parallelization"),Xz=c(),Jt=r("div"),y(Jd.$$.fragment),Yz=c(),Gn=r("p"),Zz=n("The "),gg=r("code"),e4=n("FlaxBertPreTrainedModel"),t4=n(" forward method, overrides the "),_g=r("code"),o4=n("__call__"),n4=n(" special method."),s4=c(),y(Jr.$$.fragment),r4=c(),y(Gr.$$.fragment),xk=c(),Xn=r("h2"),Xr=r("a"),bg=r("span"),y(Gd.$$.fragment),a4=c(),kg=r("span"),i4=n("FlaxBertForCausalLM"),Fk=c(),De=r("div"),y(Xd.$$.fragment),l4=c(),Tg=r("p"),d4=n(`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),c4=c(),Yd=r("p"),p4=n("This model inherits from "),$h=r("a"),h4=n("FlaxPreTrainedModel"),m4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),f4=c(),Zd=r("p"),u4=n("This model is also a Flax Linen "),ec=r("a"),g4=n("flax.linen.Module"),_4=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),b4=c(),yg=r("p"),k4=n("Finally, this model supports inherent JAX features such as:"),T4=c(),go=r("ul"),vg=r("li"),tc=r("a"),y4=n("Just-In-Time (JIT) compilation"),v4=c(),wg=r("li"),oc=r("a"),w4=n("Automatic Differentiation"),$4=c(),$g=r("li"),nc=r("a"),x4=n("Vectorization"),F4=c(),xg=r("li"),sc=r("a"),B4=n("Parallelization"),E4=c(),Gt=r("div"),y(rc.$$.fragment),M4=c(),Yn=r("p"),z4=n("The "),Fg=r("code"),P4=n("FlaxBertPreTrainedModel"),q4=n(" forward method, overrides the "),Bg=r("code"),j4=n("__call__"),C4=n(" special method."),N4=c(),y(Yr.$$.fragment),O4=c(),y(Zr.$$.fragment),Bk=c(),Zn=r("h2"),ea=r("a"),Eg=r("span"),y(ac.$$.fragment),I4=c(),Mg=r("span"),A4=n("FlaxBertForMaskedLM"),Ek=c(),Se=r("div"),y(ic.$$.fragment),L4=c(),lc=r("p"),D4=n("Bert Model with a "),zg=r("code"),S4=n("language modeling"),U4=n(" head on top."),W4=c(),dc=r("p"),H4=n("This model inherits from "),xh=r("a"),R4=n("FlaxPreTrainedModel"),V4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Q4=c(),cc=r("p"),K4=n("This model is also a Flax Linen "),pc=r("a"),J4=n("flax.linen.Module"),G4=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),X4=c(),Pg=r("p"),Y4=n("Finally, this model supports inherent JAX features such as:"),Z4=c(),_o=r("ul"),qg=r("li"),hc=r("a"),eP=n("Just-In-Time (JIT) compilation"),tP=c(),jg=r("li"),mc=r("a"),oP=n("Automatic Differentiation"),nP=c(),Cg=r("li"),fc=r("a"),sP=n("Vectorization"),rP=c(),Ng=r("li"),uc=r("a"),aP=n("Parallelization"),iP=c(),Xt=r("div"),y(gc.$$.fragment),lP=c(),es=r("p"),dP=n("The "),Og=r("code"),cP=n("FlaxBertPreTrainedModel"),pP=n(" forward method, overrides the "),Ig=r("code"),hP=n("__call__"),mP=n(" special method."),fP=c(),y(ta.$$.fragment),uP=c(),y(oa.$$.fragment),Mk=c(),ts=r("h2"),na=r("a"),Ag=r("span"),y(_c.$$.fragment),gP=c(),Lg=r("span"),_P=n("FlaxBertForNextSentencePrediction"),zk=c(),Ue=r("div"),y(bc.$$.fragment),bP=c(),kc=r("p"),kP=n("Bert Model with a "),Dg=r("code"),TP=n("next sentence prediction (classification)"),yP=n(" head on top."),vP=c(),Tc=r("p"),wP=n("This model inherits from "),Fh=r("a"),$P=n("FlaxPreTrainedModel"),xP=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),FP=c(),yc=r("p"),BP=n("This model is also a Flax Linen "),vc=r("a"),EP=n("flax.linen.Module"),MP=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zP=c(),Sg=r("p"),PP=n("Finally, this model supports inherent JAX features such as:"),qP=c(),bo=r("ul"),Ug=r("li"),wc=r("a"),jP=n("Just-In-Time (JIT) compilation"),CP=c(),Wg=r("li"),$c=r("a"),NP=n("Automatic Differentiation"),OP=c(),Hg=r("li"),xc=r("a"),IP=n("Vectorization"),AP=c(),Rg=r("li"),Fc=r("a"),LP=n("Parallelization"),DP=c(),Yt=r("div"),y(Bc.$$.fragment),SP=c(),os=r("p"),UP=n("The "),Vg=r("code"),WP=n("FlaxBertPreTrainedModel"),HP=n(" forward method, overrides the "),Qg=r("code"),RP=n("__call__"),VP=n(" special method."),QP=c(),y(sa.$$.fragment),KP=c(),y(ra.$$.fragment),Pk=c(),ns=r("h2"),aa=r("a"),Kg=r("span"),y(Ec.$$.fragment),JP=c(),Jg=r("span"),GP=n("FlaxBertForSequenceClassification"),qk=c(),We=r("div"),y(Mc.$$.fragment),XP=c(),Gg=r("p"),YP=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),ZP=c(),zc=r("p"),eq=n("This model inherits from "),Bh=r("a"),tq=n("FlaxPreTrainedModel"),oq=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nq=c(),Pc=r("p"),sq=n("This model is also a Flax Linen "),qc=r("a"),rq=n("flax.linen.Module"),aq=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),iq=c(),Xg=r("p"),lq=n("Finally, this model supports inherent JAX features such as:"),dq=c(),ko=r("ul"),Yg=r("li"),jc=r("a"),cq=n("Just-In-Time (JIT) compilation"),pq=c(),Zg=r("li"),Cc=r("a"),hq=n("Automatic Differentiation"),mq=c(),e_=r("li"),Nc=r("a"),fq=n("Vectorization"),uq=c(),t_=r("li"),Oc=r("a"),gq=n("Parallelization"),_q=c(),Zt=r("div"),y(Ic.$$.fragment),bq=c(),ss=r("p"),kq=n("The "),o_=r("code"),Tq=n("FlaxBertPreTrainedModel"),yq=n(" forward method, overrides the "),n_=r("code"),vq=n("__call__"),wq=n(" special method."),$q=c(),y(ia.$$.fragment),xq=c(),y(la.$$.fragment),jk=c(),rs=r("h2"),da=r("a"),s_=r("span"),y(Ac.$$.fragment),Fq=c(),r_=r("span"),Bq=n("FlaxBertForMultipleChoice"),Ck=c(),He=r("div"),y(Lc.$$.fragment),Eq=c(),a_=r("p"),Mq=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),zq=c(),Dc=r("p"),Pq=n("This model inherits from "),Eh=r("a"),qq=n("FlaxPreTrainedModel"),jq=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cq=c(),Sc=r("p"),Nq=n("This model is also a Flax Linen "),Uc=r("a"),Oq=n("flax.linen.Module"),Iq=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Aq=c(),i_=r("p"),Lq=n("Finally, this model supports inherent JAX features such as:"),Dq=c(),To=r("ul"),l_=r("li"),Wc=r("a"),Sq=n("Just-In-Time (JIT) compilation"),Uq=c(),d_=r("li"),Hc=r("a"),Wq=n("Automatic Differentiation"),Hq=c(),c_=r("li"),Rc=r("a"),Rq=n("Vectorization"),Vq=c(),p_=r("li"),Vc=r("a"),Qq=n("Parallelization"),Kq=c(),eo=r("div"),y(Qc.$$.fragment),Jq=c(),as=r("p"),Gq=n("The "),h_=r("code"),Xq=n("FlaxBertPreTrainedModel"),Yq=n(" forward method, overrides the "),m_=r("code"),Zq=n("__call__"),ej=n(" special method."),tj=c(),y(ca.$$.fragment),oj=c(),y(pa.$$.fragment),Nk=c(),is=r("h2"),ha=r("a"),f_=r("span"),y(Kc.$$.fragment),nj=c(),u_=r("span"),sj=n("FlaxBertForTokenClassification"),Ok=c(),Re=r("div"),y(Jc.$$.fragment),rj=c(),g_=r("p"),aj=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ij=c(),Gc=r("p"),lj=n("This model inherits from "),Mh=r("a"),dj=n("FlaxPreTrainedModel"),cj=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pj=c(),Xc=r("p"),hj=n("This model is also a Flax Linen "),Yc=r("a"),mj=n("flax.linen.Module"),fj=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uj=c(),__=r("p"),gj=n("Finally, this model supports inherent JAX features such as:"),_j=c(),yo=r("ul"),b_=r("li"),Zc=r("a"),bj=n("Just-In-Time (JIT) compilation"),kj=c(),k_=r("li"),ep=r("a"),Tj=n("Automatic Differentiation"),yj=c(),T_=r("li"),tp=r("a"),vj=n("Vectorization"),wj=c(),y_=r("li"),op=r("a"),$j=n("Parallelization"),xj=c(),to=r("div"),y(np.$$.fragment),Fj=c(),ls=r("p"),Bj=n("The "),v_=r("code"),Ej=n("FlaxBertPreTrainedModel"),Mj=n(" forward method, overrides the "),w_=r("code"),zj=n("__call__"),Pj=n(" special method."),qj=c(),y(ma.$$.fragment),jj=c(),y(fa.$$.fragment),Ik=c(),ds=r("h2"),ua=r("a"),$_=r("span"),y(sp.$$.fragment),Cj=c(),x_=r("span"),Nj=n("FlaxBertForQuestionAnswering"),Ak=c(),Ve=r("div"),y(rp.$$.fragment),Oj=c(),cs=r("p"),Ij=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),F_=r("code"),Aj=n("span start logits"),Lj=n(" and "),B_=r("code"),Dj=n("span end logits"),Sj=n(")."),Uj=c(),ap=r("p"),Wj=n("This model inherits from "),zh=r("a"),Hj=n("FlaxPreTrainedModel"),Rj=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Vj=c(),ip=r("p"),Qj=n("This model is also a Flax Linen "),lp=r("a"),Kj=n("flax.linen.Module"),Jj=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gj=c(),E_=r("p"),Xj=n("Finally, this model supports inherent JAX features such as:"),Yj=c(),vo=r("ul"),M_=r("li"),dp=r("a"),Zj=n("Just-In-Time (JIT) compilation"),eC=c(),z_=r("li"),cp=r("a"),tC=n("Automatic Differentiation"),oC=c(),P_=r("li"),pp=r("a"),nC=n("Vectorization"),sC=c(),q_=r("li"),hp=r("a"),rC=n("Parallelization"),aC=c(),oo=r("div"),y(mp.$$.fragment),iC=c(),ps=r("p"),lC=n("The "),j_=r("code"),dC=n("FlaxBertPreTrainedModel"),cC=n(" forward method, overrides the "),C_=r("code"),pC=n("__call__"),hC=n(" special method."),mC=c(),y(ga.$$.fragment),fC=c(),y(_a.$$.fragment),this.h()},l(o){const k=V7('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),_=p(o),m=a(o,"H1",{class:!0});var fp=i(m);h=a(fp,"A",{id:!0,class:!0,href:!0});var N_=i(h);g=a(N_,"SPAN",{});var O_=i(g);v(l.$$.fragment,O_),O_.forEach(t),N_.forEach(t),f=p(fp),E=a(fp,"SPAN",{});var I_=i(E);be=s(I_,"BERT"),I_.forEach(t),fp.forEach(t),X=p(o),z=a(o,"H2",{class:!0});var up=i(z);ne=a(up,"A",{id:!0,class:!0,href:!0});var A_=i(ne);L=a(A_,"SPAN",{});var L_=i(L);v(re.$$.fragment,L_),L_.forEach(t),A_.forEach(t),ke=p(up),D=a(up,"SPAN",{});var D_=i(D);Te=s(D_,"Overview"),D_.forEach(t),up.forEach(t),me=p(o),J=a(o,"P",{});var gp=i(J);O=s(gp,"The BERT model was proposed in "),ae=a(gp,"A",{href:!0,rel:!0});var S_=i(ae);Y=s(S_,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),S_.forEach(t),P=s(gp,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),gp.forEach(t),j=p(o),ie=a(o,"P",{});var U_=i(ie);H=s(U_,"The abstract from the paper is the following:"),U_.forEach(t),fe=p(o),le=a(o,"P",{});var W_=i(le);S=a(W_,"EM",{});var H_=i(S);ye=s(H_,`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),H_.forEach(t),W_.forEach(t),ue=p(o),q=a(o,"P",{});var R_=i(q);ce=a(R_,"EM",{});var V_=i(ce);R=s(V_,`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),V_.forEach(t),R_.forEach(t),ge=p(o),de=a(o,"P",{});var Q_=i(de);V=s(Q_,"Tips:"),Q_.forEach(t),_e=p(o),se=a(o,"UL",{});var _p=i(se);N=a(_p,"LI",{});var K_=i(N);ve=s(K_,`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),K_.forEach(t),Q=p(_p),pe=a(_p,"LI",{});var J_=i(pe);T=s(J_,`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),J_.forEach(t),_p.forEach(t),M=p(o),K=a(o,"P",{});var hs=i(K);ze=s(hs,"This model was contributed by "),Be=a(hs,"A",{href:!0,rel:!0});var G_=i(Be);I=s(G_,"thomwolf"),G_.forEach(t),Pe=s(hs,". The original code can be found "),Ee=a(hs,"A",{href:!0,rel:!0});var X_=i(Ee);qe=s(X_,"here"),X_.forEach(t),A=s(hs,"."),hs.forEach(t),W=p(o),xe=a(o,"H2",{class:!0});var bp=i(xe);Fe=a(bp,"A",{id:!0,class:!0,href:!0});var Y_=i(Fe);U=a(Y_,"SPAN",{});var Z_=i(U);v(Me.$$.fragment,Z_),Z_.forEach(t),Y_.forEach(t),je=p(bp),he=a(bp,"SPAN",{});var eb=i(he);Ce=s(eb,"BertConfig"),eb.forEach(t),bp.forEach(t),Eb=p(o),Nt=a(o,"DIV",{class:!0});var wo=i(Nt);v(Ra.$$.fragment,wo),jy=p(wo),ho=a(wo,"P",{});var $o=i(ho);Cy=s($o,"This is the configuration class to store the configuration of a "),Ep=a($o,"A",{href:!0});var tb=i(Ep);Ny=s(tb,"BertModel"),tb.forEach(t),Oy=s($o," or a "),Mp=a($o,"A",{href:!0});var ob=i(Mp);Iy=s(ob,"TFBertModel"),ob.forEach(t),Ay=s($o,`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Va=a($o,"A",{href:!0,rel:!0});var nb=i(Va);Ly=s(nb,"bert-base-uncased"),nb.forEach(t),Dy=s($o," architecture."),$o.forEach(t),Sy=p(wo),Ko=a(wo,"P",{});var ms=i(Ko);Uy=s(ms,"Configuration objects inherit from "),zp=a(ms,"A",{href:!0});var sb=i(zp);Wy=s(sb,"PretrainedConfig"),sb.forEach(t),Hy=s(ms,` and can be used to control the model outputs. Read the
documentation from `),Pp=a(ms,"A",{href:!0});var rb=i(Pp);Ry=s(rb,"PretrainedConfig"),rb.forEach(t),Vy=s(ms," for more information."),ms.forEach(t),Qy=p(wo),v(_s.$$.fragment,wo),wo.forEach(t),Mb=p(o),Jo=a(o,"H2",{class:!0});var kp=i(Jo);bs=a(kp,"A",{id:!0,class:!0,href:!0});var ab=i(bs);km=a(ab,"SPAN",{});var ib=i(km);v(Qa.$$.fragment,ib),ib.forEach(t),ab.forEach(t),Ky=p(kp),Tm=a(kp,"SPAN",{});var lb=i(Tm);Jy=s(lb,"BertTokenizer"),lb.forEach(t),kp.forEach(t),zb=p(o),Ne=a(o,"DIV",{class:!0});var nt=i(Ne);v(Ka.$$.fragment,nt),Gy=p(nt),ym=a(nt,"P",{});var db=i(ym);Xy=s(db,"Construct a BERT tokenizer. Based on WordPiece."),db.forEach(t),Yy=p(nt),Ja=a(nt,"P",{});var Tp=i(Ja);Zy=s(Tp,"This tokenizer inherits from "),qp=a(Tp,"A",{href:!0});var cb=i(qp);ev=s(cb,"PreTrainedTokenizer"),cb.forEach(t),tv=s(Tp,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Tp.forEach(t),ov=p(nt),Bo=a(nt,"DIV",{class:!0});var fs=i(Bo);v(Ga.$$.fragment,fs),nv=p(fs),vm=a(fs,"P",{});var pb=i(vm);sv=s(pb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),pb.forEach(t),rv=p(fs),Xa=a(fs,"UL",{});var yp=i(Xa);jp=a(yp,"LI",{});var Ph=i(jp);av=s(Ph,"single sequence: "),wm=a(Ph,"CODE",{});var hb=i(wm);iv=s(hb,"[CLS] X [SEP]"),hb.forEach(t),Ph.forEach(t),lv=p(yp),Cp=a(yp,"LI",{});var qh=i(Cp);dv=s(qh,"pair of sequences: "),$m=a(qh,"CODE",{});var mb=i($m);cv=s(mb,"[CLS] A [SEP] B [SEP]"),mb.forEach(t),qh.forEach(t),yp.forEach(t),fs.forEach(t),pv=p(nt),ks=a(nt,"DIV",{class:!0});var vp=i(ks);v(Ya.$$.fragment,vp),hv=p(vp),Za=a(vp,"P",{});var wp=i(Za);mv=s(wp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xm=a(wp,"CODE",{});var fb=i(xm);fv=s(fb,"prepare_for_model"),fb.forEach(t),uv=s(wp," method."),wp.forEach(t),vp.forEach(t),gv=p(nt),It=a(nt,"DIV",{class:!0});var xo=i(It);v(ei.$$.fragment,xo),_v=p(xo),Fm=a(xo,"P",{});var ub=i(Fm);bv=s(ub,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),ub.forEach(t),kv=p(xo),v(Ts.$$.fragment,xo),Tv=p(xo),Go=a(xo,"P",{});var us=i(Go);yv=s(us,"If "),Bm=a(us,"CODE",{});var gb=i(Bm);vv=s(gb,"token_ids_1"),gb.forEach(t),wv=s(us," is "),Em=a(us,"CODE",{});var _b=i(Em);$v=s(_b,"None"),_b.forEach(t),xv=s(us,", this method only returns the first portion of the mask (0s)."),us.forEach(t),xo.forEach(t),Fv=p(nt),Np=a(nt,"DIV",{class:!0});var bb=i(Np);v(ti.$$.fragment,bb),bb.forEach(t),nt.forEach(t),Pb=p(o),Xo=a(o,"H2",{class:!0});var $p=i(Xo);ys=a($p,"A",{id:!0,class:!0,href:!0});var kb=i(ys);Mm=a(kb,"SPAN",{});var Tb=i(Mm);v(oi.$$.fragment,Tb),Tb.forEach(t),kb.forEach(t),Bv=p($p),zm=a($p,"SPAN",{});var yb=i(zm);Ev=s(yb,"BertTokenizerFast"),yb.forEach(t),$p.forEach(t),qb=p(o),rt=a(o,"DIV",{class:!0});var Ot=i(rt);v(ni.$$.fragment,Ot),Mv=p(Ot),si=a(Ot,"P",{});var xp=i(si);zv=s(xp,"Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Pm=a(xp,"EM",{});var vb=i(Pm);Pv=s(vb,"tokenizers"),vb.forEach(t),qv=s(xp," library). Based on WordPiece."),xp.forEach(t),jv=p(Ot),ri=a(Ot,"P",{});var Fp=i(ri);Cv=s(Fp,"This tokenizer inherits from "),Op=a(Fp,"A",{href:!0});var wb=i(Op);Nv=s(wb,"PreTrainedTokenizerFast"),wb.forEach(t),Ov=s(Fp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Fp.forEach(t),Iv=p(Ot),Eo=a(Ot,"DIV",{class:!0});var gs=i(Eo);v(ai.$$.fragment,gs),Av=p(gs),qm=a(gs,"P",{});var $b=i(qm);Lv=s($b,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),$b.forEach(t),Dv=p(gs),ii=a(gs,"UL",{});var Bp=i(ii);Ip=a(Bp,"LI",{});var jh=i(Ip);Sv=s(jh,"single sequence: "),jm=a(jh,"CODE",{});var xb=i(jm);Uv=s(xb,"[CLS] X [SEP]"),xb.forEach(t),jh.forEach(t),Wv=p(Bp),Ap=a(Bp,"LI",{});var Ch=i(Ap);Hv=s(Ch,"pair of sequences: "),Cm=a(Ch,"CODE",{});var Fb=i(Cm);Rv=s(Fb,"[CLS] A [SEP] B [SEP]"),Fb.forEach(t),Ch.forEach(t),Bp.forEach(t),gs.forEach(t),Vv=p(Ot),At=a(Ot,"DIV",{class:!0});var Fo=i(At);v(li.$$.fragment,Fo),Qv=p(Fo),Nm=a(Fo,"P",{});var Bb=i(Nm);Kv=s(Bb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Bb.forEach(t),Jv=p(Fo),v(vs.$$.fragment,Fo),Gv=p(Fo),Yo=a(Fo,"P",{});var Nh=i(Yo);Xv=s(Nh,"If "),Om=a(Nh,"CODE",{});var uC=i(Om);Yv=s(uC,"token_ids_1"),uC.forEach(t),Zv=s(Nh," is "),Im=a(Nh,"CODE",{});var gC=i(Im);ew=s(gC,"None"),gC.forEach(t),tw=s(Nh,", this method only returns the first portion of the mask (0s)."),Nh.forEach(t),Fo.forEach(t),Ot.forEach(t),jb=p(o),Zo=a(o,"H2",{class:!0});var Dk=i(Zo);ws=a(Dk,"A",{id:!0,class:!0,href:!0});var _C=i(ws);Am=a(_C,"SPAN",{});var bC=i(Am);v(di.$$.fragment,bC),bC.forEach(t),_C.forEach(t),ow=p(Dk),Lm=a(Dk,"SPAN",{});var kC=i(Lm);nw=s(kC,"TFBertTokenizer"),kC.forEach(t),Dk.forEach(t),Cb=p(o),at=a(o,"DIV",{class:!0});var Po=i(at);v(ci.$$.fragment,Po),sw=p(Po),en=a(Po,"P",{});var Oh=i(en);rw=s(Oh,`This is an in-graph tokenizer for BERT. It should be initialized similarly to other tokenizers, using the
`),Dm=a(Oh,"CODE",{});var TC=i(Dm);aw=s(TC,"from_pretrained()"),TC.forEach(t),iw=s(Oh," method. It can also be initialized with the "),Sm=a(Oh,"CODE",{});var yC=i(Sm);lw=s(yC,"from_tokenizer()"),yC.forEach(t),dw=s(Oh,` method, which imports settings
from an existing standard tokenizer object.`),Oh.forEach(t),cw=p(Po),pi=a(Po,"P",{});var Sk=i(pi);pw=s(Sk,`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. As a result, they have somewhat more limited options
than standard tokenizer classes. They are most useful when you want to create an end-to-end model that goes
straight from `),Um=a(Sk,"CODE",{});var vC=i(Um);hw=s(vC,"tf.string"),vC.forEach(t),mw=s(Sk," inputs to outputs."),Sk.forEach(t),fw=p(Po),Mo=a(Po,"DIV",{class:!0});var Ih=i(Mo);v(hi.$$.fragment,Ih),uw=p(Ih),mi=a(Ih,"P",{});var Uk=i(mi);gw=s(Uk,"Instantiate a "),Wm=a(Uk,"CODE",{});var wC=i(Wm);_w=s(wC,"TFBertTokenizer"),wC.forEach(t),bw=s(Uk," from a pre-trained tokenizer."),Uk.forEach(t),kw=p(Ih),v($s.$$.fragment,Ih),Ih.forEach(t),Tw=p(Po),zo=a(Po,"DIV",{class:!0});var Ah=i(zo);v(fi.$$.fragment,Ah),yw=p(Ah),tn=a(Ah,"P",{});var Lh=i(tn);vw=s(Lh,"Initialize a "),Hm=a(Lh,"CODE",{});var $C=i(Hm);ww=s($C,"TFBertTokenizer"),$C.forEach(t),$w=s(Lh," from an existing "),Rm=a(Lh,"CODE",{});var xC=i(Rm);xw=s(xC,"Tokenizer"),xC.forEach(t),Fw=s(Lh,"."),Lh.forEach(t),Bw=p(Ah),v(xs.$$.fragment,Ah),Ah.forEach(t),Po.forEach(t),Nb=p(o),on=a(o,"H2",{class:!0});var Wk=i(on);Fs=a(Wk,"A",{id:!0,class:!0,href:!0});var FC=i(Fs);Vm=a(FC,"SPAN",{});var BC=i(Vm);v(ui.$$.fragment,BC),BC.forEach(t),FC.forEach(t),Ew=p(Wk),Qm=a(Wk,"SPAN",{});var EC=i(Qm);Mw=s(EC,"Bert specific outputs"),EC.forEach(t),Wk.forEach(t),Ob=p(o),nn=a(o,"DIV",{class:!0});var Hk=i(nn);v(gi.$$.fragment,Hk),zw=p(Hk),_i=a(Hk,"P",{});var Rk=i(_i);Pw=s(Rk,"Output type of "),Lp=a(Rk,"A",{href:!0});var MC=i(Lp);qw=s(MC,"BertForPreTraining"),MC.forEach(t),jw=s(Rk,"."),Rk.forEach(t),Hk.forEach(t),Ib=p(o),sn=a(o,"DIV",{class:!0});var Vk=i(sn);v(bi.$$.fragment,Vk),Cw=p(Vk),ki=a(Vk,"P",{});var Qk=i(ki);Nw=s(Qk,"Output type of "),Dp=a(Qk,"A",{href:!0});var zC=i(Dp);Ow=s(zC,"TFBertForPreTraining"),zC.forEach(t),Iw=s(Qk,"."),Qk.forEach(t),Vk.forEach(t),Ab=p(o),mo=a(o,"DIV",{class:!0});var Dh=i(mo);v(Ti.$$.fragment,Dh),Aw=p(Dh),yi=a(Dh,"P",{});var Kk=i(yi);Lw=s(Kk,"Output type of "),Sp=a(Kk,"A",{href:!0});var PC=i(Sp);Dw=s(PC,"BertForPreTraining"),PC.forEach(t),Sw=s(Kk,"."),Kk.forEach(t),Uw=p(Dh),Bs=a(Dh,"DIV",{class:!0});var Jk=i(Bs);v(vi.$$.fragment,Jk),Ww=p(Jk),Km=a(Jk,"P",{});var qC=i(Km);Hw=s(qC,"\u201CReturns a new object replacing the specified fields with new values."),qC.forEach(t),Jk.forEach(t),Dh.forEach(t),Lb=p(o),rn=a(o,"H2",{class:!0});var Gk=i(rn);Es=a(Gk,"A",{id:!0,class:!0,href:!0});var jC=i(Es);Jm=a(jC,"SPAN",{});var CC=i(Jm);v(wi.$$.fragment,CC),CC.forEach(t),jC.forEach(t),Rw=p(Gk),Gm=a(Gk,"SPAN",{});var NC=i(Gm);Vw=s(NC,"BertModel"),NC.forEach(t),Gk.forEach(t),Db=p(o),Oe=a(o,"DIV",{class:!0});var wt=i(Oe);v($i.$$.fragment,wt),Qw=p(wt),Xm=a(wt,"P",{});var OC=i(Xm);Kw=s(OC,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),OC.forEach(t),Jw=p(wt),xi=a(wt,"P",{});var Xk=i(xi);Gw=s(Xk,"This model inherits from "),Up=a(Xk,"A",{href:!0});var IC=i(Up);Xw=s(IC,"PreTrainedModel"),IC.forEach(t),Yw=s(Xk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xk.forEach(t),Zw=p(wt),Fi=a(wt,"P",{});var Yk=i(Fi);e1=s(Yk,"This model is also a PyTorch "),Bi=a(Yk,"A",{href:!0,rel:!0});var AC=i(Bi);t1=s(AC,"torch.nn.Module"),AC.forEach(t),o1=s(Yk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yk.forEach(t),n1=p(wt),Ei=a(wt,"P",{});var Zk=i(Ei);s1=s(Zk,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Mi=a(Zk,"A",{href:!0,rel:!0});var LC=i(Mi);r1=s(LC,`Attention is
all you need`),LC.forEach(t),a1=s(Zk,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Zk.forEach(t),i1=p(wt),Ke=a(wt,"P",{});var $t=i(Ke);l1=s($t,"To behave as an decoder the model needs to be initialized with the "),Ym=a($t,"CODE",{});var DC=i(Ym);d1=s(DC,"is_decoder"),DC.forEach(t),c1=s($t,` argument of the configuration set
to `),Zm=a($t,"CODE",{});var SC=i(Zm);p1=s(SC,"True"),SC.forEach(t),h1=s($t,". To be used in a Seq2Seq model, the model needs to initialized with both "),ef=a($t,"CODE",{});var UC=i(ef);m1=s(UC,"is_decoder"),UC.forEach(t),f1=s($t,` argument and
`),tf=a($t,"CODE",{});var WC=i(tf);u1=s(WC,"add_cross_attention"),WC.forEach(t),g1=s($t," set to "),of=a($t,"CODE",{});var HC=i(of);_1=s(HC,"True"),HC.forEach(t),b1=s($t,"; an "),nf=a($t,"CODE",{});var RC=i(nf);k1=s(RC,"encoder_hidden_states"),RC.forEach(t),T1=s($t," is then expected as an input to the forward pass."),$t.forEach(t),y1=p(wt),Lt=a(wt,"DIV",{class:!0});var ba=i(Lt);v(zi.$$.fragment,ba),v1=p(ba),an=a(ba,"P",{});var Sh=i(an);w1=s(Sh,"The "),Wp=a(Sh,"A",{href:!0});var VC=i(Wp);$1=s(VC,"BertModel"),VC.forEach(t),x1=s(Sh," forward method, overrides the "),sf=a(Sh,"CODE",{});var QC=i(sf);F1=s(QC,"__call__"),QC.forEach(t),B1=s(Sh," special method."),Sh.forEach(t),E1=p(ba),v(Ms.$$.fragment,ba),M1=p(ba),v(zs.$$.fragment,ba),ba.forEach(t),wt.forEach(t),Sb=p(o),ln=a(o,"H2",{class:!0});var eT=i(ln);Ps=a(eT,"A",{id:!0,class:!0,href:!0});var KC=i(Ps);rf=a(KC,"SPAN",{});var JC=i(rf);v(Pi.$$.fragment,JC),JC.forEach(t),KC.forEach(t),z1=p(eT),af=a(eT,"SPAN",{});var GC=i(af);P1=s(GC,"BertForPreTraining"),GC.forEach(t),eT.forEach(t),Ub=p(o),it=a(o,"DIV",{class:!0});var qo=i(it);v(qi.$$.fragment,qo),q1=p(qo),dn=a(qo,"P",{});var Uh=i(dn);j1=s(Uh,"Bert Model with two heads on top as done during the pretraining: a "),lf=a(Uh,"CODE",{});var XC=i(lf);C1=s(XC,"masked language modeling"),XC.forEach(t),N1=s(Uh," head and a "),df=a(Uh,"CODE",{});var YC=i(df);O1=s(YC,"next sentence prediction (classification)"),YC.forEach(t),I1=s(Uh," head."),Uh.forEach(t),A1=p(qo),ji=a(qo,"P",{});var tT=i(ji);L1=s(tT,"This model inherits from "),Hp=a(tT,"A",{href:!0});var ZC=i(Hp);D1=s(ZC,"PreTrainedModel"),ZC.forEach(t),S1=s(tT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tT.forEach(t),U1=p(qo),Ci=a(qo,"P",{});var oT=i(Ci);W1=s(oT,"This model is also a PyTorch "),Ni=a(oT,"A",{href:!0,rel:!0});var e3=i(Ni);H1=s(e3,"torch.nn.Module"),e3.forEach(t),R1=s(oT,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oT.forEach(t),V1=p(qo),Dt=a(qo,"DIV",{class:!0});var ka=i(Dt);v(Oi.$$.fragment,ka),Q1=p(ka),cn=a(ka,"P",{});var Wh=i(cn);K1=s(Wh,"The "),Rp=a(Wh,"A",{href:!0});var t3=i(Rp);J1=s(t3,"BertForPreTraining"),t3.forEach(t),G1=s(Wh," forward method, overrides the "),cf=a(Wh,"CODE",{});var o3=i(cf);X1=s(o3,"__call__"),o3.forEach(t),Y1=s(Wh," special method."),Wh.forEach(t),Z1=p(ka),v(qs.$$.fragment,ka),e$=p(ka),v(js.$$.fragment,ka),ka.forEach(t),qo.forEach(t),Wb=p(o),pn=a(o,"H2",{class:!0});var nT=i(pn);Cs=a(nT,"A",{id:!0,class:!0,href:!0});var n3=i(Cs);pf=a(n3,"SPAN",{});var s3=i(pf);v(Ii.$$.fragment,s3),s3.forEach(t),n3.forEach(t),t$=p(nT),hf=a(nT,"SPAN",{});var r3=i(hf);o$=s(r3,"BertLMHeadModel"),r3.forEach(t),nT.forEach(t),Hb=p(o),lt=a(o,"DIV",{class:!0});var jo=i(lt);v(Ai.$$.fragment,jo),n$=p(jo),Li=a(jo,"P",{});var sT=i(Li);s$=s(sT,"Bert Model with a "),mf=a(sT,"CODE",{});var a3=i(mf);r$=s(a3,"language modeling"),a3.forEach(t),a$=s(sT," head on top for CLM fine-tuning."),sT.forEach(t),i$=p(jo),Di=a(jo,"P",{});var rT=i(Di);l$=s(rT,"This model inherits from "),Vp=a(rT,"A",{href:!0});var i3=i(Vp);d$=s(i3,"PreTrainedModel"),i3.forEach(t),c$=s(rT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rT.forEach(t),p$=p(jo),Si=a(jo,"P",{});var aT=i(Si);h$=s(aT,"This model is also a PyTorch "),Ui=a(aT,"A",{href:!0,rel:!0});var l3=i(Ui);m$=s(l3,"torch.nn.Module"),l3.forEach(t),f$=s(aT,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),aT.forEach(t),u$=p(jo),St=a(jo,"DIV",{class:!0});var Ta=i(St);v(Wi.$$.fragment,Ta),g$=p(Ta),hn=a(Ta,"P",{});var Hh=i(hn);_$=s(Hh,"The "),Qp=a(Hh,"A",{href:!0});var d3=i(Qp);b$=s(d3,"BertLMHeadModel"),d3.forEach(t),k$=s(Hh," forward method, overrides the "),ff=a(Hh,"CODE",{});var c3=i(ff);T$=s(c3,"__call__"),c3.forEach(t),y$=s(Hh," special method."),Hh.forEach(t),v$=p(Ta),v(Ns.$$.fragment,Ta),w$=p(Ta),v(Os.$$.fragment,Ta),Ta.forEach(t),jo.forEach(t),Rb=p(o),mn=a(o,"H2",{class:!0});var iT=i(mn);Is=a(iT,"A",{id:!0,class:!0,href:!0});var p3=i(Is);uf=a(p3,"SPAN",{});var h3=i(uf);v(Hi.$$.fragment,h3),h3.forEach(t),p3.forEach(t),$$=p(iT),gf=a(iT,"SPAN",{});var m3=i(gf);x$=s(m3,"BertForMaskedLM"),m3.forEach(t),iT.forEach(t),Vb=p(o),dt=a(o,"DIV",{class:!0});var Co=i(dt);v(Ri.$$.fragment,Co),F$=p(Co),Vi=a(Co,"P",{});var lT=i(Vi);B$=s(lT,"Bert Model with a "),_f=a(lT,"CODE",{});var f3=i(_f);E$=s(f3,"language modeling"),f3.forEach(t),M$=s(lT," head on top."),lT.forEach(t),z$=p(Co),Qi=a(Co,"P",{});var dT=i(Qi);P$=s(dT,"This model inherits from "),Kp=a(dT,"A",{href:!0});var u3=i(Kp);q$=s(u3,"PreTrainedModel"),u3.forEach(t),j$=s(dT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dT.forEach(t),C$=p(Co),Ki=a(Co,"P",{});var cT=i(Ki);N$=s(cT,"This model is also a PyTorch "),Ji=a(cT,"A",{href:!0,rel:!0});var g3=i(Ji);O$=s(g3,"torch.nn.Module"),g3.forEach(t),I$=s(cT,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cT.forEach(t),A$=p(Co),ut=a(Co,"DIV",{class:!0});var No=i(ut);v(Gi.$$.fragment,No),L$=p(No),fn=a(No,"P",{});var Rh=i(fn);D$=s(Rh,"The "),Jp=a(Rh,"A",{href:!0});var _3=i(Jp);S$=s(_3,"BertForMaskedLM"),_3.forEach(t),U$=s(Rh," forward method, overrides the "),bf=a(Rh,"CODE",{});var b3=i(bf);W$=s(b3,"__call__"),b3.forEach(t),H$=s(Rh," special method."),Rh.forEach(t),R$=p(No),v(As.$$.fragment,No),V$=p(No),v(Ls.$$.fragment,No),Q$=p(No),v(Ds.$$.fragment,No),No.forEach(t),Co.forEach(t),Qb=p(o),un=a(o,"H2",{class:!0});var pT=i(un);Ss=a(pT,"A",{id:!0,class:!0,href:!0});var k3=i(Ss);kf=a(k3,"SPAN",{});var T3=i(kf);v(Xi.$$.fragment,T3),T3.forEach(t),k3.forEach(t),K$=p(pT),Tf=a(pT,"SPAN",{});var y3=i(Tf);J$=s(y3,"BertForNextSentencePrediction"),y3.forEach(t),pT.forEach(t),Kb=p(o),ct=a(o,"DIV",{class:!0});var Oo=i(ct);v(Yi.$$.fragment,Oo),G$=p(Oo),Zi=a(Oo,"P",{});var hT=i(Zi);X$=s(hT,"Bert Model with a "),yf=a(hT,"CODE",{});var v3=i(yf);Y$=s(v3,"next sentence prediction (classification)"),v3.forEach(t),Z$=s(hT," head on top."),hT.forEach(t),e2=p(Oo),el=a(Oo,"P",{});var mT=i(el);t2=s(mT,"This model inherits from "),Gp=a(mT,"A",{href:!0});var w3=i(Gp);o2=s(w3,"PreTrainedModel"),w3.forEach(t),n2=s(mT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mT.forEach(t),s2=p(Oo),tl=a(Oo,"P",{});var fT=i(tl);r2=s(fT,"This model is also a PyTorch "),ol=a(fT,"A",{href:!0,rel:!0});var $3=i(ol);a2=s($3,"torch.nn.Module"),$3.forEach(t),i2=s(fT,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fT.forEach(t),l2=p(Oo),Ut=a(Oo,"DIV",{class:!0});var ya=i(Ut);v(nl.$$.fragment,ya),d2=p(ya),gn=a(ya,"P",{});var Vh=i(gn);c2=s(Vh,"The "),Xp=a(Vh,"A",{href:!0});var x3=i(Xp);p2=s(x3,"BertForNextSentencePrediction"),x3.forEach(t),h2=s(Vh," forward method, overrides the "),vf=a(Vh,"CODE",{});var F3=i(vf);m2=s(F3,"__call__"),F3.forEach(t),f2=s(Vh," special method."),Vh.forEach(t),u2=p(ya),v(Us.$$.fragment,ya),g2=p(ya),v(Ws.$$.fragment,ya),ya.forEach(t),Oo.forEach(t),Jb=p(o),_n=a(o,"H2",{class:!0});var uT=i(_n);Hs=a(uT,"A",{id:!0,class:!0,href:!0});var B3=i(Hs);wf=a(B3,"SPAN",{});var E3=i(wf);v(sl.$$.fragment,E3),E3.forEach(t),B3.forEach(t),_2=p(uT),$f=a(uT,"SPAN",{});var M3=i($f);b2=s(M3,"BertForSequenceClassification"),M3.forEach(t),uT.forEach(t),Gb=p(o),pt=a(o,"DIV",{class:!0});var Io=i(pt);v(rl.$$.fragment,Io),k2=p(Io),xf=a(Io,"P",{});var z3=i(xf);T2=s(z3,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),z3.forEach(t),y2=p(Io),al=a(Io,"P",{});var gT=i(al);v2=s(gT,"This model inherits from "),Yp=a(gT,"A",{href:!0});var P3=i(Yp);w2=s(P3,"PreTrainedModel"),P3.forEach(t),$2=s(gT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gT.forEach(t),x2=p(Io),il=a(Io,"P",{});var _T=i(il);F2=s(_T,"This model is also a PyTorch "),ll=a(_T,"A",{href:!0,rel:!0});var q3=i(ll);B2=s(q3,"torch.nn.Module"),q3.forEach(t),E2=s(_T,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_T.forEach(t),M2=p(Io),Qe=a(Io,"DIV",{class:!0});var xt=i(Qe);v(dl.$$.fragment,xt),z2=p(xt),bn=a(xt,"P",{});var Qh=i(bn);P2=s(Qh,"The "),Zp=a(Qh,"A",{href:!0});var j3=i(Zp);q2=s(j3,"BertForSequenceClassification"),j3.forEach(t),j2=s(Qh," forward method, overrides the "),Ff=a(Qh,"CODE",{});var C3=i(Ff);C2=s(C3,"__call__"),C3.forEach(t),N2=s(Qh," special method."),Qh.forEach(t),O2=p(xt),v(Rs.$$.fragment,xt),I2=p(xt),v(Vs.$$.fragment,xt),A2=p(xt),v(Qs.$$.fragment,xt),L2=p(xt),v(Ks.$$.fragment,xt),D2=p(xt),v(Js.$$.fragment,xt),xt.forEach(t),Io.forEach(t),Xb=p(o),kn=a(o,"H2",{class:!0});var bT=i(kn);Gs=a(bT,"A",{id:!0,class:!0,href:!0});var N3=i(Gs);Bf=a(N3,"SPAN",{});var O3=i(Bf);v(cl.$$.fragment,O3),O3.forEach(t),N3.forEach(t),S2=p(bT),Ef=a(bT,"SPAN",{});var I3=i(Ef);U2=s(I3,"BertForMultipleChoice"),I3.forEach(t),bT.forEach(t),Yb=p(o),ht=a(o,"DIV",{class:!0});var Ao=i(ht);v(pl.$$.fragment,Ao),W2=p(Ao),Mf=a(Ao,"P",{});var A3=i(Mf);H2=s(A3,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),A3.forEach(t),R2=p(Ao),hl=a(Ao,"P",{});var kT=i(hl);V2=s(kT,"This model inherits from "),eh=a(kT,"A",{href:!0});var L3=i(eh);Q2=s(L3,"PreTrainedModel"),L3.forEach(t),K2=s(kT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kT.forEach(t),J2=p(Ao),ml=a(Ao,"P",{});var TT=i(ml);G2=s(TT,"This model is also a PyTorch "),fl=a(TT,"A",{href:!0,rel:!0});var D3=i(fl);X2=s(D3,"torch.nn.Module"),D3.forEach(t),Y2=s(TT,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),TT.forEach(t),Z2=p(Ao),Wt=a(Ao,"DIV",{class:!0});var va=i(Wt);v(ul.$$.fragment,va),ex=p(va),Tn=a(va,"P",{});var Kh=i(Tn);tx=s(Kh,"The "),th=a(Kh,"A",{href:!0});var S3=i(th);ox=s(S3,"BertForMultipleChoice"),S3.forEach(t),nx=s(Kh," forward method, overrides the "),zf=a(Kh,"CODE",{});var U3=i(zf);sx=s(U3,"__call__"),U3.forEach(t),rx=s(Kh," special method."),Kh.forEach(t),ax=p(va),v(Xs.$$.fragment,va),ix=p(va),v(Ys.$$.fragment,va),va.forEach(t),Ao.forEach(t),Zb=p(o),yn=a(o,"H2",{class:!0});var yT=i(yn);Zs=a(yT,"A",{id:!0,class:!0,href:!0});var W3=i(Zs);Pf=a(W3,"SPAN",{});var H3=i(Pf);v(gl.$$.fragment,H3),H3.forEach(t),W3.forEach(t),lx=p(yT),qf=a(yT,"SPAN",{});var R3=i(qf);dx=s(R3,"BertForTokenClassification"),R3.forEach(t),yT.forEach(t),ek=p(o),mt=a(o,"DIV",{class:!0});var Lo=i(mt);v(_l.$$.fragment,Lo),cx=p(Lo),jf=a(Lo,"P",{});var V3=i(jf);px=s(V3,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),V3.forEach(t),hx=p(Lo),bl=a(Lo,"P",{});var vT=i(bl);mx=s(vT,"This model inherits from "),oh=a(vT,"A",{href:!0});var Q3=i(oh);fx=s(Q3,"PreTrainedModel"),Q3.forEach(t),ux=s(vT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vT.forEach(t),gx=p(Lo),kl=a(Lo,"P",{});var wT=i(kl);_x=s(wT,"This model is also a PyTorch "),Tl=a(wT,"A",{href:!0,rel:!0});var K3=i(Tl);bx=s(K3,"torch.nn.Module"),K3.forEach(t),kx=s(wT,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wT.forEach(t),Tx=p(Lo),gt=a(Lo,"DIV",{class:!0});var Do=i(gt);v(yl.$$.fragment,Do),yx=p(Do),vn=a(Do,"P",{});var Jh=i(vn);vx=s(Jh,"The "),nh=a(Jh,"A",{href:!0});var J3=i(nh);wx=s(J3,"BertForTokenClassification"),J3.forEach(t),$x=s(Jh," forward method, overrides the "),Cf=a(Jh,"CODE",{});var G3=i(Cf);xx=s(G3,"__call__"),G3.forEach(t),Fx=s(Jh," special method."),Jh.forEach(t),Bx=p(Do),v(er.$$.fragment,Do),Ex=p(Do),v(tr.$$.fragment,Do),Mx=p(Do),v(or.$$.fragment,Do),Do.forEach(t),Lo.forEach(t),tk=p(o),wn=a(o,"H2",{class:!0});var $T=i(wn);nr=a($T,"A",{id:!0,class:!0,href:!0});var X3=i(nr);Nf=a(X3,"SPAN",{});var Y3=i(Nf);v(vl.$$.fragment,Y3),Y3.forEach(t),X3.forEach(t),zx=p($T),Of=a($T,"SPAN",{});var Z3=i(Of);Px=s(Z3,"BertForQuestionAnswering"),Z3.forEach(t),$T.forEach(t),ok=p(o),ft=a(o,"DIV",{class:!0});var So=i(ft);v(wl.$$.fragment,So),qx=p(So),$n=a(So,"P",{});var Gh=i($n);jx=s(Gh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),If=a(Gh,"CODE",{});var e5=i(If);Cx=s(e5,"span start logits"),e5.forEach(t),Nx=s(Gh," and "),Af=a(Gh,"CODE",{});var t5=i(Af);Ox=s(t5,"span end logits"),t5.forEach(t),Ix=s(Gh,")."),Gh.forEach(t),Ax=p(So),$l=a(So,"P",{});var xT=i($l);Lx=s(xT,"This model inherits from "),sh=a(xT,"A",{href:!0});var o5=i(sh);Dx=s(o5,"PreTrainedModel"),o5.forEach(t),Sx=s(xT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xT.forEach(t),Ux=p(So),xl=a(So,"P",{});var FT=i(xl);Wx=s(FT,"This model is also a PyTorch "),Fl=a(FT,"A",{href:!0,rel:!0});var n5=i(Fl);Hx=s(n5,"torch.nn.Module"),n5.forEach(t),Rx=s(FT,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),FT.forEach(t),Vx=p(So),_t=a(So,"DIV",{class:!0});var Uo=i(_t);v(Bl.$$.fragment,Uo),Qx=p(Uo),xn=a(Uo,"P",{});var Xh=i(xn);Kx=s(Xh,"The "),rh=a(Xh,"A",{href:!0});var s5=i(rh);Jx=s(s5,"BertForQuestionAnswering"),s5.forEach(t),Gx=s(Xh," forward method, overrides the "),Lf=a(Xh,"CODE",{});var r5=i(Lf);Xx=s(r5,"__call__"),r5.forEach(t),Yx=s(Xh," special method."),Xh.forEach(t),Zx=p(Uo),v(sr.$$.fragment,Uo),eF=p(Uo),v(rr.$$.fragment,Uo),tF=p(Uo),v(ar.$$.fragment,Uo),Uo.forEach(t),So.forEach(t),nk=p(o),Fn=a(o,"H2",{class:!0});var BT=i(Fn);ir=a(BT,"A",{id:!0,class:!0,href:!0});var a5=i(ir);Df=a(a5,"SPAN",{});var i5=i(Df);v(El.$$.fragment,i5),i5.forEach(t),a5.forEach(t),oF=p(BT),Sf=a(BT,"SPAN",{});var l5=i(Sf);nF=s(l5,"TFBertModel"),l5.forEach(t),BT.forEach(t),sk=p(o),Je=a(o,"DIV",{class:!0});var no=i(Je);v(Ml.$$.fragment,no),sF=p(no),Uf=a(no,"P",{});var d5=i(Uf);rF=s(d5,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),d5.forEach(t),aF=p(no),zl=a(no,"P",{});var ET=i(zl);iF=s(ET,"This model inherits from "),ah=a(ET,"A",{href:!0});var c5=i(ah);lF=s(c5,"TFPreTrainedModel"),c5.forEach(t),dF=s(ET,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ET.forEach(t),cF=p(no),Pl=a(no,"P",{});var MT=i(Pl);pF=s(MT,"This model is also a "),ql=a(MT,"A",{href:!0,rel:!0});var p5=i(ql);hF=s(p5,"tf.keras.Model"),p5.forEach(t),mF=s(MT,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),MT.forEach(t),fF=p(no),v(lr.$$.fragment,no),uF=p(no),Ht=a(no,"DIV",{class:!0});var wa=i(Ht);v(jl.$$.fragment,wa),gF=p(wa),Bn=a(wa,"P",{});var Yh=i(Bn);_F=s(Yh,"The "),ih=a(Yh,"A",{href:!0});var h5=i(ih);bF=s(h5,"TFBertModel"),h5.forEach(t),kF=s(Yh," forward method, overrides the "),Wf=a(Yh,"CODE",{});var m5=i(Wf);TF=s(m5,"__call__"),m5.forEach(t),yF=s(Yh," special method."),Yh.forEach(t),vF=p(wa),v(dr.$$.fragment,wa),wF=p(wa),v(cr.$$.fragment,wa),wa.forEach(t),no.forEach(t),rk=p(o),En=a(o,"H2",{class:!0});var zT=i(En);pr=a(zT,"A",{id:!0,class:!0,href:!0});var f5=i(pr);Hf=a(f5,"SPAN",{});var u5=i(Hf);v(Cl.$$.fragment,u5),u5.forEach(t),f5.forEach(t),$F=p(zT),Rf=a(zT,"SPAN",{});var g5=i(Rf);xF=s(g5,"TFBertForPreTraining"),g5.forEach(t),zT.forEach(t),ak=p(o),Ge=a(o,"DIV",{class:!0});var so=i(Ge);v(Nl.$$.fragment,so),FF=p(so),Mn=a(so,"P",{});var Zh=i(Mn);BF=s(Zh,`Bert Model with two heads on top as done during the pretraining:
a `),Vf=a(Zh,"CODE",{});var _5=i(Vf);EF=s(_5,"masked language modeling"),_5.forEach(t),MF=s(Zh," head and a "),Qf=a(Zh,"CODE",{});var b5=i(Qf);zF=s(b5,"next sentence prediction (classification)"),b5.forEach(t),PF=s(Zh," head."),Zh.forEach(t),qF=p(so),Ol=a(so,"P",{});var PT=i(Ol);jF=s(PT,"This model inherits from "),lh=a(PT,"A",{href:!0});var k5=i(lh);CF=s(k5,"TFPreTrainedModel"),k5.forEach(t),NF=s(PT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),PT.forEach(t),OF=p(so),Il=a(so,"P",{});var qT=i(Il);IF=s(qT,"This model is also a "),Al=a(qT,"A",{href:!0,rel:!0});var T5=i(Al);AF=s(T5,"tf.keras.Model"),T5.forEach(t),LF=s(qT,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qT.forEach(t),DF=p(so),v(hr.$$.fragment,so),SF=p(so),Rt=a(so,"DIV",{class:!0});var $a=i(Rt);v(Ll.$$.fragment,$a),UF=p($a),zn=a($a,"P",{});var em=i(zn);WF=s(em,"The "),dh=a(em,"A",{href:!0});var y5=i(dh);HF=s(y5,"TFBertForPreTraining"),y5.forEach(t),RF=s(em," forward method, overrides the "),Kf=a(em,"CODE",{});var v5=i(Kf);VF=s(v5,"__call__"),v5.forEach(t),QF=s(em," special method."),em.forEach(t),KF=p($a),v(mr.$$.fragment,$a),JF=p($a),v(fr.$$.fragment,$a),$a.forEach(t),so.forEach(t),ik=p(o),Pn=a(o,"H2",{class:!0});var jT=i(Pn);ur=a(jT,"A",{id:!0,class:!0,href:!0});var w5=i(ur);Jf=a(w5,"SPAN",{});var $5=i(Jf);v(Dl.$$.fragment,$5),$5.forEach(t),w5.forEach(t),GF=p(jT),Gf=a(jT,"SPAN",{});var x5=i(Gf);XF=s(x5,"TFBertModelLMHeadModel"),x5.forEach(t),jT.forEach(t),lk=p(o),qn=a(o,"DIV",{class:!0});var CT=i(qn);v(Sl.$$.fragment,CT),YF=p(CT),bt=a(CT,"DIV",{class:!0});var Wo=i(bt);v(Ul.$$.fragment,Wo),ZF=p(Wo),Ie=a(Wo,"P",{});var st=i(Ie);e0=s(st,"encoder_hidden_states  ("),Xf=a(st,"CODE",{});var F5=i(Xf);t0=s(F5,"tf.Tensor"),F5.forEach(t),o0=s(st," of shape "),Yf=a(st,"CODE",{});var B5=i(Yf);n0=s(B5,"(batch_size, sequence_length, hidden_size)"),B5.forEach(t),s0=s(st,", "),Zf=a(st,"EM",{});var E5=i(Zf);r0=s(E5,"optional"),E5.forEach(t),a0=s(st,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),eu=a(st,"CODE",{});var M5=i(eu);i0=s(M5,"tf.Tensor"),M5.forEach(t),l0=s(st," of shape "),tu=a(st,"CODE",{});var z5=i(tu);d0=s(z5,"(batch_size, sequence_length)"),z5.forEach(t),c0=s(st,", "),ou=a(st,"EM",{});var P5=i(ou);p0=s(P5,"optional"),P5.forEach(t),h0=s(st,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),nu=a(st,"CODE",{});var q5=i(nu);m0=s(q5,"[0, 1]"),q5.forEach(t),f0=s(st,":"),st.forEach(t),u0=p(Wo),Wl=a(Wo,"UL",{});var NT=i(Wl);Hl=a(NT,"LI",{});var OT=i(Hl);g0=s(OT,"1 for tokens that are "),su=a(OT,"STRONG",{});var j5=i(su);_0=s(j5,"not masked"),j5.forEach(t),b0=s(OT,","),OT.forEach(t),k0=p(NT),Rl=a(NT,"LI",{});var IT=i(Rl);T0=s(IT,"0 for tokens that are "),ru=a(IT,"STRONG",{});var C5=i(ru);y0=s(C5,"masked"),C5.forEach(t),v0=s(IT,"."),IT.forEach(t),NT.forEach(t),w0=p(Wo),G=a(Wo,"P",{});var Z=i(G);$0=s(Z,"past_key_values ("),au=a(Z,"CODE",{});var N5=i(au);x0=s(N5,"Tuple[Tuple[tf.Tensor]]"),N5.forEach(t),F0=s(Z," of length "),iu=a(Z,"CODE",{});var O5=i(iu);B0=s(O5,"config.n_layers"),O5.forEach(t),E0=s(Z,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),lu=a(Z,"CODE",{});var I5=i(lu);M0=s(I5,"past_key_values"),I5.forEach(t),z0=s(Z," are used, the user can optionally input only the last "),du=a(Z,"CODE",{});var A5=i(du);P0=s(A5,"decoder_input_ids"),A5.forEach(t),q0=s(Z,` (those that
don\u2019t have their past key value states given to this model) of shape `),cu=a(Z,"CODE",{});var L5=i(cu);j0=s(L5,"(batch_size, 1)"),L5.forEach(t),C0=s(Z,` instead of all
`),pu=a(Z,"CODE",{});var D5=i(pu);N0=s(D5,"decoder_input_ids"),D5.forEach(t),O0=s(Z," of shape "),hu=a(Z,"CODE",{});var S5=i(hu);I0=s(S5,"(batch_size, sequence_length)"),S5.forEach(t),A0=s(Z,`.
use_cache (`),mu=a(Z,"CODE",{});var U5=i(mu);L0=s(U5,"bool"),U5.forEach(t),D0=s(Z,", "),fu=a(Z,"EM",{});var W5=i(fu);S0=s(W5,"optional"),W5.forEach(t),U0=s(Z,", defaults to "),uu=a(Z,"CODE",{});var H5=i(uu);W0=s(H5,"True"),H5.forEach(t),H0=s(Z,`):
If set to `),gu=a(Z,"CODE",{});var R5=i(gu);R0=s(R5,"True"),R5.forEach(t),V0=s(Z,", "),_u=a(Z,"CODE",{});var V5=i(_u);Q0=s(V5,"past_key_values"),V5.forEach(t),K0=s(Z,` key value states are returned and can be used to speed up decoding (see
`),bu=a(Z,"CODE",{});var Q5=i(bu);J0=s(Q5,"past_key_values"),Q5.forEach(t),G0=s(Z,"). Set to "),ku=a(Z,"CODE",{});var K5=i(ku);X0=s(K5,"False"),K5.forEach(t),Y0=s(Z," during training, "),Tu=a(Z,"CODE",{});var J5=i(Tu);Z0=s(J5,"True"),J5.forEach(t),eB=s(Z,` during generation
labels (`),yu=a(Z,"CODE",{});var G5=i(yu);tB=s(G5,"tf.Tensor"),G5.forEach(t),oB=s(Z," or "),vu=a(Z,"CODE",{});var X5=i(vu);nB=s(X5,"np.ndarray"),X5.forEach(t),sB=s(Z," of shape "),wu=a(Z,"CODE",{});var Y5=i(wu);rB=s(Y5,"(batch_size, sequence_length)"),Y5.forEach(t),aB=s(Z,", "),$u=a(Z,"EM",{});var Z5=i($u);iB=s(Z5,"optional"),Z5.forEach(t),lB=s(Z,`):
Labels for computing the cross entropy classification loss. Indices should be in `),xu=a(Z,"CODE",{});var e6=i(xu);dB=s(e6,"[0, ..., config.vocab_size - 1]"),e6.forEach(t),cB=s(Z,"."),Z.forEach(t),pB=p(Wo),v(gr.$$.fragment,Wo),Wo.forEach(t),CT.forEach(t),dk=p(o),jn=a(o,"H2",{class:!0});var AT=i(jn);_r=a(AT,"A",{id:!0,class:!0,href:!0});var t6=i(_r);Fu=a(t6,"SPAN",{});var o6=i(Fu);v(Vl.$$.fragment,o6),o6.forEach(t),t6.forEach(t),hB=p(AT),Bu=a(AT,"SPAN",{});var n6=i(Bu);mB=s(n6,"TFBertForMaskedLM"),n6.forEach(t),AT.forEach(t),ck=p(o),Xe=a(o,"DIV",{class:!0});var ro=i(Xe);v(Ql.$$.fragment,ro),fB=p(ro),Kl=a(ro,"P",{});var LT=i(Kl);uB=s(LT,"Bert Model with a "),Eu=a(LT,"CODE",{});var s6=i(Eu);gB=s(s6,"language modeling"),s6.forEach(t),_B=s(LT," head on top."),LT.forEach(t),bB=p(ro),Jl=a(ro,"P",{});var DT=i(Jl);kB=s(DT,"This model inherits from "),ch=a(DT,"A",{href:!0});var r6=i(ch);TB=s(r6,"TFPreTrainedModel"),r6.forEach(t),yB=s(DT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),DT.forEach(t),vB=p(ro),Gl=a(ro,"P",{});var ST=i(Gl);wB=s(ST,"This model is also a "),Xl=a(ST,"A",{href:!0,rel:!0});var a6=i(Xl);$B=s(a6,"tf.keras.Model"),a6.forEach(t),xB=s(ST,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ST.forEach(t),FB=p(ro),v(br.$$.fragment,ro),BB=p(ro),kt=a(ro,"DIV",{class:!0});var Ho=i(kt);v(Yl.$$.fragment,Ho),EB=p(Ho),Cn=a(Ho,"P",{});var tm=i(Cn);MB=s(tm,"The "),ph=a(tm,"A",{href:!0});var i6=i(ph);zB=s(i6,"TFBertForMaskedLM"),i6.forEach(t),PB=s(tm," forward method, overrides the "),Mu=a(tm,"CODE",{});var l6=i(Mu);qB=s(l6,"__call__"),l6.forEach(t),jB=s(tm," special method."),tm.forEach(t),CB=p(Ho),v(kr.$$.fragment,Ho),NB=p(Ho),v(Tr.$$.fragment,Ho),OB=p(Ho),v(yr.$$.fragment,Ho),Ho.forEach(t),ro.forEach(t),pk=p(o),Nn=a(o,"H2",{class:!0});var UT=i(Nn);vr=a(UT,"A",{id:!0,class:!0,href:!0});var d6=i(vr);zu=a(d6,"SPAN",{});var c6=i(zu);v(Zl.$$.fragment,c6),c6.forEach(t),d6.forEach(t),IB=p(UT),Pu=a(UT,"SPAN",{});var p6=i(Pu);AB=s(p6,"TFBertForNextSentencePrediction"),p6.forEach(t),UT.forEach(t),hk=p(o),Ye=a(o,"DIV",{class:!0});var ao=i(Ye);v(ed.$$.fragment,ao),LB=p(ao),td=a(ao,"P",{});var WT=i(td);DB=s(WT,"Bert Model with a "),qu=a(WT,"CODE",{});var h6=i(qu);SB=s(h6,"next sentence prediction (classification)"),h6.forEach(t),UB=s(WT," head on top."),WT.forEach(t),WB=p(ao),od=a(ao,"P",{});var HT=i(od);HB=s(HT,"This model inherits from "),hh=a(HT,"A",{href:!0});var m6=i(hh);RB=s(m6,"TFPreTrainedModel"),m6.forEach(t),VB=s(HT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),HT.forEach(t),QB=p(ao),nd=a(ao,"P",{});var RT=i(nd);KB=s(RT,"This model is also a "),sd=a(RT,"A",{href:!0,rel:!0});var f6=i(sd);JB=s(f6,"tf.keras.Model"),f6.forEach(t),GB=s(RT,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),RT.forEach(t),XB=p(ao),v(wr.$$.fragment,ao),YB=p(ao),Vt=a(ao,"DIV",{class:!0});var xa=i(Vt);v(rd.$$.fragment,xa),ZB=p(xa),On=a(xa,"P",{});var om=i(On);eE=s(om,"The "),mh=a(om,"A",{href:!0});var u6=i(mh);tE=s(u6,"TFBertForNextSentencePrediction"),u6.forEach(t),oE=s(om," forward method, overrides the "),ju=a(om,"CODE",{});var g6=i(ju);nE=s(g6,"__call__"),g6.forEach(t),sE=s(om," special method."),om.forEach(t),rE=p(xa),v($r.$$.fragment,xa),aE=p(xa),v(xr.$$.fragment,xa),xa.forEach(t),ao.forEach(t),mk=p(o),In=a(o,"H2",{class:!0});var VT=i(In);Fr=a(VT,"A",{id:!0,class:!0,href:!0});var _6=i(Fr);Cu=a(_6,"SPAN",{});var b6=i(Cu);v(ad.$$.fragment,b6),b6.forEach(t),_6.forEach(t),iE=p(VT),Nu=a(VT,"SPAN",{});var k6=i(Nu);lE=s(k6,"TFBertForSequenceClassification"),k6.forEach(t),VT.forEach(t),fk=p(o),Ze=a(o,"DIV",{class:!0});var io=i(Ze);v(id.$$.fragment,io),dE=p(io),Ou=a(io,"P",{});var T6=i(Ou);cE=s(T6,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),T6.forEach(t),pE=p(io),ld=a(io,"P",{});var QT=i(ld);hE=s(QT,"This model inherits from "),fh=a(QT,"A",{href:!0});var y6=i(fh);mE=s(y6,"TFPreTrainedModel"),y6.forEach(t),fE=s(QT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),QT.forEach(t),uE=p(io),dd=a(io,"P",{});var KT=i(dd);gE=s(KT,"This model is also a "),cd=a(KT,"A",{href:!0,rel:!0});var v6=i(cd);_E=s(v6,"tf.keras.Model"),v6.forEach(t),bE=s(KT,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),KT.forEach(t),kE=p(io),v(Br.$$.fragment,io),TE=p(io),Tt=a(io,"DIV",{class:!0});var Ro=i(Tt);v(pd.$$.fragment,Ro),yE=p(Ro),An=a(Ro,"P",{});var nm=i(An);vE=s(nm,"The "),uh=a(nm,"A",{href:!0});var w6=i(uh);wE=s(w6,"TFBertForSequenceClassification"),w6.forEach(t),$E=s(nm," forward method, overrides the "),Iu=a(nm,"CODE",{});var $6=i(Iu);xE=s($6,"__call__"),$6.forEach(t),FE=s(nm," special method."),nm.forEach(t),BE=p(Ro),v(Er.$$.fragment,Ro),EE=p(Ro),v(Mr.$$.fragment,Ro),ME=p(Ro),v(zr.$$.fragment,Ro),Ro.forEach(t),io.forEach(t),uk=p(o),Ln=a(o,"H2",{class:!0});var JT=i(Ln);Pr=a(JT,"A",{id:!0,class:!0,href:!0});var x6=i(Pr);Au=a(x6,"SPAN",{});var F6=i(Au);v(hd.$$.fragment,F6),F6.forEach(t),x6.forEach(t),zE=p(JT),Lu=a(JT,"SPAN",{});var B6=i(Lu);PE=s(B6,"TFBertForMultipleChoice"),B6.forEach(t),JT.forEach(t),gk=p(o),et=a(o,"DIV",{class:!0});var lo=i(et);v(md.$$.fragment,lo),qE=p(lo),Du=a(lo,"P",{});var E6=i(Du);jE=s(E6,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),E6.forEach(t),CE=p(lo),fd=a(lo,"P",{});var GT=i(fd);NE=s(GT,"This model inherits from "),gh=a(GT,"A",{href:!0});var M6=i(gh);OE=s(M6,"TFPreTrainedModel"),M6.forEach(t),IE=s(GT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),GT.forEach(t),AE=p(lo),ud=a(lo,"P",{});var XT=i(ud);LE=s(XT,"This model is also a "),gd=a(XT,"A",{href:!0,rel:!0});var z6=i(gd);DE=s(z6,"tf.keras.Model"),z6.forEach(t),SE=s(XT,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),XT.forEach(t),UE=p(lo),v(qr.$$.fragment,lo),WE=p(lo),Qt=a(lo,"DIV",{class:!0});var Fa=i(Qt);v(_d.$$.fragment,Fa),HE=p(Fa),Dn=a(Fa,"P",{});var sm=i(Dn);RE=s(sm,"The "),_h=a(sm,"A",{href:!0});var P6=i(_h);VE=s(P6,"TFBertForMultipleChoice"),P6.forEach(t),QE=s(sm," forward method, overrides the "),Su=a(sm,"CODE",{});var q6=i(Su);KE=s(q6,"__call__"),q6.forEach(t),JE=s(sm," special method."),sm.forEach(t),GE=p(Fa),v(jr.$$.fragment,Fa),XE=p(Fa),v(Cr.$$.fragment,Fa),Fa.forEach(t),lo.forEach(t),_k=p(o),Sn=a(o,"H2",{class:!0});var YT=i(Sn);Nr=a(YT,"A",{id:!0,class:!0,href:!0});var j6=i(Nr);Uu=a(j6,"SPAN",{});var C6=i(Uu);v(bd.$$.fragment,C6),C6.forEach(t),j6.forEach(t),YE=p(YT),Wu=a(YT,"SPAN",{});var N6=i(Wu);ZE=s(N6,"TFBertForTokenClassification"),N6.forEach(t),YT.forEach(t),bk=p(o),tt=a(o,"DIV",{class:!0});var co=i(tt);v(kd.$$.fragment,co),eM=p(co),Hu=a(co,"P",{});var O6=i(Hu);tM=s(O6,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),O6.forEach(t),oM=p(co),Td=a(co,"P",{});var ZT=i(Td);nM=s(ZT,"This model inherits from "),bh=a(ZT,"A",{href:!0});var I6=i(bh);sM=s(I6,"TFPreTrainedModel"),I6.forEach(t),rM=s(ZT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ZT.forEach(t),aM=p(co),yd=a(co,"P",{});var ey=i(yd);iM=s(ey,"This model is also a "),vd=a(ey,"A",{href:!0,rel:!0});var A6=i(vd);lM=s(A6,"tf.keras.Model"),A6.forEach(t),dM=s(ey,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ey.forEach(t),cM=p(co),v(Or.$$.fragment,co),pM=p(co),yt=a(co,"DIV",{class:!0});var Vo=i(yt);v(wd.$$.fragment,Vo),hM=p(Vo),Un=a(Vo,"P",{});var rm=i(Un);mM=s(rm,"The "),kh=a(rm,"A",{href:!0});var L6=i(kh);fM=s(L6,"TFBertForTokenClassification"),L6.forEach(t),uM=s(rm," forward method, overrides the "),Ru=a(rm,"CODE",{});var D6=i(Ru);gM=s(D6,"__call__"),D6.forEach(t),_M=s(rm," special method."),rm.forEach(t),bM=p(Vo),v(Ir.$$.fragment,Vo),kM=p(Vo),v(Ar.$$.fragment,Vo),TM=p(Vo),v(Lr.$$.fragment,Vo),Vo.forEach(t),co.forEach(t),kk=p(o),Wn=a(o,"H2",{class:!0});var ty=i(Wn);Dr=a(ty,"A",{id:!0,class:!0,href:!0});var S6=i(Dr);Vu=a(S6,"SPAN",{});var U6=i(Vu);v($d.$$.fragment,U6),U6.forEach(t),S6.forEach(t),yM=p(ty),Qu=a(ty,"SPAN",{});var W6=i(Qu);vM=s(W6,"TFBertForQuestionAnswering"),W6.forEach(t),ty.forEach(t),Tk=p(o),ot=a(o,"DIV",{class:!0});var po=i(ot);v(xd.$$.fragment,po),wM=p(po),Hn=a(po,"P",{});var am=i(Hn);$M=s(am,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ku=a(am,"CODE",{});var H6=i(Ku);xM=s(H6,"span start logits"),H6.forEach(t),FM=s(am," and "),Ju=a(am,"CODE",{});var R6=i(Ju);BM=s(R6,"span end logits"),R6.forEach(t),EM=s(am,")."),am.forEach(t),MM=p(po),Fd=a(po,"P",{});var oy=i(Fd);zM=s(oy,"This model inherits from "),Th=a(oy,"A",{href:!0});var V6=i(Th);PM=s(V6,"TFPreTrainedModel"),V6.forEach(t),qM=s(oy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oy.forEach(t),jM=p(po),Bd=a(po,"P",{});var ny=i(Bd);CM=s(ny,"This model is also a "),Ed=a(ny,"A",{href:!0,rel:!0});var Q6=i(Ed);NM=s(Q6,"tf.keras.Model"),Q6.forEach(t),OM=s(ny,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ny.forEach(t),IM=p(po),v(Sr.$$.fragment,po),AM=p(po),vt=a(po,"DIV",{class:!0});var Qo=i(vt);v(Md.$$.fragment,Qo),LM=p(Qo),Rn=a(Qo,"P",{});var im=i(Rn);DM=s(im,"The "),yh=a(im,"A",{href:!0});var K6=i(yh);SM=s(K6,"TFBertForQuestionAnswering"),K6.forEach(t),UM=s(im," forward method, overrides the "),Gu=a(im,"CODE",{});var J6=i(Gu);WM=s(J6,"__call__"),J6.forEach(t),HM=s(im," special method."),im.forEach(t),RM=p(Qo),v(Ur.$$.fragment,Qo),VM=p(Qo),v(Wr.$$.fragment,Qo),QM=p(Qo),v(Hr.$$.fragment,Qo),Qo.forEach(t),po.forEach(t),yk=p(o),Vn=a(o,"H2",{class:!0});var sy=i(Vn);Rr=a(sy,"A",{id:!0,class:!0,href:!0});var G6=i(Rr);Xu=a(G6,"SPAN",{});var X6=i(Xu);v(zd.$$.fragment,X6),X6.forEach(t),G6.forEach(t),KM=p(sy),Yu=a(sy,"SPAN",{});var Y6=i(Yu);JM=s(Y6,"FlaxBertModel"),Y6.forEach(t),sy.forEach(t),vk=p(o),Ae=a(o,"DIV",{class:!0});var Ft=i(Ae);v(Pd.$$.fragment,Ft),GM=p(Ft),Zu=a(Ft,"P",{});var Z6=i(Zu);XM=s(Z6,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Z6.forEach(t),YM=p(Ft),qd=a(Ft,"P",{});var ry=i(qd);ZM=s(ry,"This model inherits from "),vh=a(ry,"A",{href:!0});var eN=i(vh);ez=s(eN,"FlaxPreTrainedModel"),eN.forEach(t),tz=s(ry,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ry.forEach(t),oz=p(Ft),jd=a(Ft,"P",{});var ay=i(jd);nz=s(ay,"This model is also a Flax Linen "),Cd=a(ay,"A",{href:!0,rel:!0});var tN=i(Cd);sz=s(tN,"flax.linen.Module"),tN.forEach(t),rz=s(ay,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ay.forEach(t),az=p(Ft),eg=a(Ft,"P",{});var oN=i(eg);iz=s(oN,"Finally, this model supports inherent JAX features such as:"),oN.forEach(t),lz=p(Ft),fo=a(Ft,"UL",{});var Ba=i(fo);tg=a(Ba,"LI",{});var nN=i(tg);Nd=a(nN,"A",{href:!0,rel:!0});var sN=i(Nd);dz=s(sN,"Just-In-Time (JIT) compilation"),sN.forEach(t),nN.forEach(t),cz=p(Ba),og=a(Ba,"LI",{});var rN=i(og);Od=a(rN,"A",{href:!0,rel:!0});var aN=i(Od);pz=s(aN,"Automatic Differentiation"),aN.forEach(t),rN.forEach(t),hz=p(Ba),ng=a(Ba,"LI",{});var iN=i(ng);Id=a(iN,"A",{href:!0,rel:!0});var lN=i(Id);mz=s(lN,"Vectorization"),lN.forEach(t),iN.forEach(t),fz=p(Ba),sg=a(Ba,"LI",{});var dN=i(sg);Ad=a(dN,"A",{href:!0,rel:!0});var cN=i(Ad);uz=s(cN,"Parallelization"),cN.forEach(t),dN.forEach(t),Ba.forEach(t),gz=p(Ft),Kt=a(Ft,"DIV",{class:!0});var Ea=i(Kt);v(Ld.$$.fragment,Ea),_z=p(Ea),Qn=a(Ea,"P",{});var lm=i(Qn);bz=s(lm,"The "),rg=a(lm,"CODE",{});var pN=i(rg);kz=s(pN,"FlaxBertPreTrainedModel"),pN.forEach(t),Tz=s(lm," forward method, overrides the "),ag=a(lm,"CODE",{});var hN=i(ag);yz=s(hN,"__call__"),hN.forEach(t),vz=s(lm," special method."),lm.forEach(t),wz=p(Ea),v(Vr.$$.fragment,Ea),$z=p(Ea),v(Qr.$$.fragment,Ea),Ea.forEach(t),Ft.forEach(t),wk=p(o),Kn=a(o,"H2",{class:!0});var iy=i(Kn);Kr=a(iy,"A",{id:!0,class:!0,href:!0});var mN=i(Kr);ig=a(mN,"SPAN",{});var fN=i(ig);v(Dd.$$.fragment,fN),fN.forEach(t),mN.forEach(t),xz=p(iy),lg=a(iy,"SPAN",{});var uN=i(lg);Fz=s(uN,"FlaxBertForPreTraining"),uN.forEach(t),iy.forEach(t),$k=p(o),Le=a(o,"DIV",{class:!0});var Bt=i(Le);v(Sd.$$.fragment,Bt),Bz=p(Bt),Jn=a(Bt,"P",{});var dm=i(Jn);Ez=s(dm,"Bert Model with two heads on top as done during the pretraining: a "),dg=a(dm,"CODE",{});var gN=i(dg);Mz=s(gN,"masked language modeling"),gN.forEach(t),zz=s(dm," head and a "),cg=a(dm,"CODE",{});var _N=i(cg);Pz=s(_N,"next sentence prediction (classification)"),_N.forEach(t),qz=s(dm," head."),dm.forEach(t),jz=p(Bt),Ud=a(Bt,"P",{});var ly=i(Ud);Cz=s(ly,"This model inherits from "),wh=a(ly,"A",{href:!0});var bN=i(wh);Nz=s(bN,"FlaxPreTrainedModel"),bN.forEach(t),Oz=s(ly,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ly.forEach(t),Iz=p(Bt),Wd=a(Bt,"P",{});var dy=i(Wd);Az=s(dy,"This model is also a Flax Linen "),Hd=a(dy,"A",{href:!0,rel:!0});var kN=i(Hd);Lz=s(kN,"flax.linen.Module"),kN.forEach(t),Dz=s(dy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),dy.forEach(t),Sz=p(Bt),pg=a(Bt,"P",{});var TN=i(pg);Uz=s(TN,"Finally, this model supports inherent JAX features such as:"),TN.forEach(t),Wz=p(Bt),uo=a(Bt,"UL",{});var Ma=i(uo);hg=a(Ma,"LI",{});var yN=i(hg);Rd=a(yN,"A",{href:!0,rel:!0});var vN=i(Rd);Hz=s(vN,"Just-In-Time (JIT) compilation"),vN.forEach(t),yN.forEach(t),Rz=p(Ma),mg=a(Ma,"LI",{});var wN=i(mg);Vd=a(wN,"A",{href:!0,rel:!0});var $N=i(Vd);Vz=s($N,"Automatic Differentiation"),$N.forEach(t),wN.forEach(t),Qz=p(Ma),fg=a(Ma,"LI",{});var xN=i(fg);Qd=a(xN,"A",{href:!0,rel:!0});var FN=i(Qd);Kz=s(FN,"Vectorization"),FN.forEach(t),xN.forEach(t),Jz=p(Ma),ug=a(Ma,"LI",{});var BN=i(ug);Kd=a(BN,"A",{href:!0,rel:!0});var EN=i(Kd);Gz=s(EN,"Parallelization"),EN.forEach(t),BN.forEach(t),Ma.forEach(t),Xz=p(Bt),Jt=a(Bt,"DIV",{class:!0});var za=i(Jt);v(Jd.$$.fragment,za),Yz=p(za),Gn=a(za,"P",{});var cm=i(Gn);Zz=s(cm,"The "),gg=a(cm,"CODE",{});var MN=i(gg);e4=s(MN,"FlaxBertPreTrainedModel"),MN.forEach(t),t4=s(cm," forward method, overrides the "),_g=a(cm,"CODE",{});var zN=i(_g);o4=s(zN,"__call__"),zN.forEach(t),n4=s(cm," special method."),cm.forEach(t),s4=p(za),v(Jr.$$.fragment,za),r4=p(za),v(Gr.$$.fragment,za),za.forEach(t),Bt.forEach(t),xk=p(o),Xn=a(o,"H2",{class:!0});var cy=i(Xn);Xr=a(cy,"A",{id:!0,class:!0,href:!0});var PN=i(Xr);bg=a(PN,"SPAN",{});var qN=i(bg);v(Gd.$$.fragment,qN),qN.forEach(t),PN.forEach(t),a4=p(cy),kg=a(cy,"SPAN",{});var jN=i(kg);i4=s(jN,"FlaxBertForCausalLM"),jN.forEach(t),cy.forEach(t),Fk=p(o),De=a(o,"DIV",{class:!0});var Et=i(De);v(Xd.$$.fragment,Et),l4=p(Et),Tg=a(Et,"P",{});var CN=i(Tg);d4=s(CN,`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),CN.forEach(t),c4=p(Et),Yd=a(Et,"P",{});var py=i(Yd);p4=s(py,"This model inherits from "),$h=a(py,"A",{href:!0});var NN=i($h);h4=s(NN,"FlaxPreTrainedModel"),NN.forEach(t),m4=s(py,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),py.forEach(t),f4=p(Et),Zd=a(Et,"P",{});var hy=i(Zd);u4=s(hy,"This model is also a Flax Linen "),ec=a(hy,"A",{href:!0,rel:!0});var ON=i(ec);g4=s(ON,"flax.linen.Module"),ON.forEach(t),_4=s(hy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hy.forEach(t),b4=p(Et),yg=a(Et,"P",{});var IN=i(yg);k4=s(IN,"Finally, this model supports inherent JAX features such as:"),IN.forEach(t),T4=p(Et),go=a(Et,"UL",{});var Pa=i(go);vg=a(Pa,"LI",{});var AN=i(vg);tc=a(AN,"A",{href:!0,rel:!0});var LN=i(tc);y4=s(LN,"Just-In-Time (JIT) compilation"),LN.forEach(t),AN.forEach(t),v4=p(Pa),wg=a(Pa,"LI",{});var DN=i(wg);oc=a(DN,"A",{href:!0,rel:!0});var SN=i(oc);w4=s(SN,"Automatic Differentiation"),SN.forEach(t),DN.forEach(t),$4=p(Pa),$g=a(Pa,"LI",{});var UN=i($g);nc=a(UN,"A",{href:!0,rel:!0});var WN=i(nc);x4=s(WN,"Vectorization"),WN.forEach(t),UN.forEach(t),F4=p(Pa),xg=a(Pa,"LI",{});var HN=i(xg);sc=a(HN,"A",{href:!0,rel:!0});var RN=i(sc);B4=s(RN,"Parallelization"),RN.forEach(t),HN.forEach(t),Pa.forEach(t),E4=p(Et),Gt=a(Et,"DIV",{class:!0});var qa=i(Gt);v(rc.$$.fragment,qa),M4=p(qa),Yn=a(qa,"P",{});var pm=i(Yn);z4=s(pm,"The "),Fg=a(pm,"CODE",{});var VN=i(Fg);P4=s(VN,"FlaxBertPreTrainedModel"),VN.forEach(t),q4=s(pm," forward method, overrides the "),Bg=a(pm,"CODE",{});var QN=i(Bg);j4=s(QN,"__call__"),QN.forEach(t),C4=s(pm," special method."),pm.forEach(t),N4=p(qa),v(Yr.$$.fragment,qa),O4=p(qa),v(Zr.$$.fragment,qa),qa.forEach(t),Et.forEach(t),Bk=p(o),Zn=a(o,"H2",{class:!0});var my=i(Zn);ea=a(my,"A",{id:!0,class:!0,href:!0});var KN=i(ea);Eg=a(KN,"SPAN",{});var JN=i(Eg);v(ac.$$.fragment,JN),JN.forEach(t),KN.forEach(t),I4=p(my),Mg=a(my,"SPAN",{});var GN=i(Mg);A4=s(GN,"FlaxBertForMaskedLM"),GN.forEach(t),my.forEach(t),Ek=p(o),Se=a(o,"DIV",{class:!0});var Mt=i(Se);v(ic.$$.fragment,Mt),L4=p(Mt),lc=a(Mt,"P",{});var fy=i(lc);D4=s(fy,"Bert Model with a "),zg=a(fy,"CODE",{});var XN=i(zg);S4=s(XN,"language modeling"),XN.forEach(t),U4=s(fy," head on top."),fy.forEach(t),W4=p(Mt),dc=a(Mt,"P",{});var uy=i(dc);H4=s(uy,"This model inherits from "),xh=a(uy,"A",{href:!0});var YN=i(xh);R4=s(YN,"FlaxPreTrainedModel"),YN.forEach(t),V4=s(uy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),uy.forEach(t),Q4=p(Mt),cc=a(Mt,"P",{});var gy=i(cc);K4=s(gy,"This model is also a Flax Linen "),pc=a(gy,"A",{href:!0,rel:!0});var ZN=i(pc);J4=s(ZN,"flax.linen.Module"),ZN.forEach(t),G4=s(gy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gy.forEach(t),X4=p(Mt),Pg=a(Mt,"P",{});var e8=i(Pg);Y4=s(e8,"Finally, this model supports inherent JAX features such as:"),e8.forEach(t),Z4=p(Mt),_o=a(Mt,"UL",{});var ja=i(_o);qg=a(ja,"LI",{});var t8=i(qg);hc=a(t8,"A",{href:!0,rel:!0});var o8=i(hc);eP=s(o8,"Just-In-Time (JIT) compilation"),o8.forEach(t),t8.forEach(t),tP=p(ja),jg=a(ja,"LI",{});var n8=i(jg);mc=a(n8,"A",{href:!0,rel:!0});var s8=i(mc);oP=s(s8,"Automatic Differentiation"),s8.forEach(t),n8.forEach(t),nP=p(ja),Cg=a(ja,"LI",{});var r8=i(Cg);fc=a(r8,"A",{href:!0,rel:!0});var a8=i(fc);sP=s(a8,"Vectorization"),a8.forEach(t),r8.forEach(t),rP=p(ja),Ng=a(ja,"LI",{});var i8=i(Ng);uc=a(i8,"A",{href:!0,rel:!0});var l8=i(uc);aP=s(l8,"Parallelization"),l8.forEach(t),i8.forEach(t),ja.forEach(t),iP=p(Mt),Xt=a(Mt,"DIV",{class:!0});var Ca=i(Xt);v(gc.$$.fragment,Ca),lP=p(Ca),es=a(Ca,"P",{});var hm=i(es);dP=s(hm,"The "),Og=a(hm,"CODE",{});var d8=i(Og);cP=s(d8,"FlaxBertPreTrainedModel"),d8.forEach(t),pP=s(hm," forward method, overrides the "),Ig=a(hm,"CODE",{});var c8=i(Ig);hP=s(c8,"__call__"),c8.forEach(t),mP=s(hm," special method."),hm.forEach(t),fP=p(Ca),v(ta.$$.fragment,Ca),uP=p(Ca),v(oa.$$.fragment,Ca),Ca.forEach(t),Mt.forEach(t),Mk=p(o),ts=a(o,"H2",{class:!0});var _y=i(ts);na=a(_y,"A",{id:!0,class:!0,href:!0});var p8=i(na);Ag=a(p8,"SPAN",{});var h8=i(Ag);v(_c.$$.fragment,h8),h8.forEach(t),p8.forEach(t),gP=p(_y),Lg=a(_y,"SPAN",{});var m8=i(Lg);_P=s(m8,"FlaxBertForNextSentencePrediction"),m8.forEach(t),_y.forEach(t),zk=p(o),Ue=a(o,"DIV",{class:!0});var zt=i(Ue);v(bc.$$.fragment,zt),bP=p(zt),kc=a(zt,"P",{});var by=i(kc);kP=s(by,"Bert Model with a "),Dg=a(by,"CODE",{});var f8=i(Dg);TP=s(f8,"next sentence prediction (classification)"),f8.forEach(t),yP=s(by," head on top."),by.forEach(t),vP=p(zt),Tc=a(zt,"P",{});var ky=i(Tc);wP=s(ky,"This model inherits from "),Fh=a(ky,"A",{href:!0});var u8=i(Fh);$P=s(u8,"FlaxPreTrainedModel"),u8.forEach(t),xP=s(ky,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ky.forEach(t),FP=p(zt),yc=a(zt,"P",{});var Ty=i(yc);BP=s(Ty,"This model is also a Flax Linen "),vc=a(Ty,"A",{href:!0,rel:!0});var g8=i(vc);EP=s(g8,"flax.linen.Module"),g8.forEach(t),MP=s(Ty,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ty.forEach(t),zP=p(zt),Sg=a(zt,"P",{});var _8=i(Sg);PP=s(_8,"Finally, this model supports inherent JAX features such as:"),_8.forEach(t),qP=p(zt),bo=a(zt,"UL",{});var Na=i(bo);Ug=a(Na,"LI",{});var b8=i(Ug);wc=a(b8,"A",{href:!0,rel:!0});var k8=i(wc);jP=s(k8,"Just-In-Time (JIT) compilation"),k8.forEach(t),b8.forEach(t),CP=p(Na),Wg=a(Na,"LI",{});var T8=i(Wg);$c=a(T8,"A",{href:!0,rel:!0});var y8=i($c);NP=s(y8,"Automatic Differentiation"),y8.forEach(t),T8.forEach(t),OP=p(Na),Hg=a(Na,"LI",{});var v8=i(Hg);xc=a(v8,"A",{href:!0,rel:!0});var w8=i(xc);IP=s(w8,"Vectorization"),w8.forEach(t),v8.forEach(t),AP=p(Na),Rg=a(Na,"LI",{});var $8=i(Rg);Fc=a($8,"A",{href:!0,rel:!0});var x8=i(Fc);LP=s(x8,"Parallelization"),x8.forEach(t),$8.forEach(t),Na.forEach(t),DP=p(zt),Yt=a(zt,"DIV",{class:!0});var Oa=i(Yt);v(Bc.$$.fragment,Oa),SP=p(Oa),os=a(Oa,"P",{});var mm=i(os);UP=s(mm,"The "),Vg=a(mm,"CODE",{});var F8=i(Vg);WP=s(F8,"FlaxBertPreTrainedModel"),F8.forEach(t),HP=s(mm," forward method, overrides the "),Qg=a(mm,"CODE",{});var B8=i(Qg);RP=s(B8,"__call__"),B8.forEach(t),VP=s(mm," special method."),mm.forEach(t),QP=p(Oa),v(sa.$$.fragment,Oa),KP=p(Oa),v(ra.$$.fragment,Oa),Oa.forEach(t),zt.forEach(t),Pk=p(o),ns=a(o,"H2",{class:!0});var yy=i(ns);aa=a(yy,"A",{id:!0,class:!0,href:!0});var E8=i(aa);Kg=a(E8,"SPAN",{});var M8=i(Kg);v(Ec.$$.fragment,M8),M8.forEach(t),E8.forEach(t),JP=p(yy),Jg=a(yy,"SPAN",{});var z8=i(Jg);GP=s(z8,"FlaxBertForSequenceClassification"),z8.forEach(t),yy.forEach(t),qk=p(o),We=a(o,"DIV",{class:!0});var Pt=i(We);v(Mc.$$.fragment,Pt),XP=p(Pt),Gg=a(Pt,"P",{});var P8=i(Gg);YP=s(P8,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),P8.forEach(t),ZP=p(Pt),zc=a(Pt,"P",{});var vy=i(zc);eq=s(vy,"This model inherits from "),Bh=a(vy,"A",{href:!0});var q8=i(Bh);tq=s(q8,"FlaxPreTrainedModel"),q8.forEach(t),oq=s(vy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vy.forEach(t),nq=p(Pt),Pc=a(Pt,"P",{});var wy=i(Pc);sq=s(wy,"This model is also a Flax Linen "),qc=a(wy,"A",{href:!0,rel:!0});var j8=i(qc);rq=s(j8,"flax.linen.Module"),j8.forEach(t),aq=s(wy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),wy.forEach(t),iq=p(Pt),Xg=a(Pt,"P",{});var C8=i(Xg);lq=s(C8,"Finally, this model supports inherent JAX features such as:"),C8.forEach(t),dq=p(Pt),ko=a(Pt,"UL",{});var Ia=i(ko);Yg=a(Ia,"LI",{});var N8=i(Yg);jc=a(N8,"A",{href:!0,rel:!0});var O8=i(jc);cq=s(O8,"Just-In-Time (JIT) compilation"),O8.forEach(t),N8.forEach(t),pq=p(Ia),Zg=a(Ia,"LI",{});var I8=i(Zg);Cc=a(I8,"A",{href:!0,rel:!0});var A8=i(Cc);hq=s(A8,"Automatic Differentiation"),A8.forEach(t),I8.forEach(t),mq=p(Ia),e_=a(Ia,"LI",{});var L8=i(e_);Nc=a(L8,"A",{href:!0,rel:!0});var D8=i(Nc);fq=s(D8,"Vectorization"),D8.forEach(t),L8.forEach(t),uq=p(Ia),t_=a(Ia,"LI",{});var S8=i(t_);Oc=a(S8,"A",{href:!0,rel:!0});var U8=i(Oc);gq=s(U8,"Parallelization"),U8.forEach(t),S8.forEach(t),Ia.forEach(t),_q=p(Pt),Zt=a(Pt,"DIV",{class:!0});var Aa=i(Zt);v(Ic.$$.fragment,Aa),bq=p(Aa),ss=a(Aa,"P",{});var fm=i(ss);kq=s(fm,"The "),o_=a(fm,"CODE",{});var W8=i(o_);Tq=s(W8,"FlaxBertPreTrainedModel"),W8.forEach(t),yq=s(fm," forward method, overrides the "),n_=a(fm,"CODE",{});var H8=i(n_);vq=s(H8,"__call__"),H8.forEach(t),wq=s(fm," special method."),fm.forEach(t),$q=p(Aa),v(ia.$$.fragment,Aa),xq=p(Aa),v(la.$$.fragment,Aa),Aa.forEach(t),Pt.forEach(t),jk=p(o),rs=a(o,"H2",{class:!0});var $y=i(rs);da=a($y,"A",{id:!0,class:!0,href:!0});var R8=i(da);s_=a(R8,"SPAN",{});var V8=i(s_);v(Ac.$$.fragment,V8),V8.forEach(t),R8.forEach(t),Fq=p($y),r_=a($y,"SPAN",{});var Q8=i(r_);Bq=s(Q8,"FlaxBertForMultipleChoice"),Q8.forEach(t),$y.forEach(t),Ck=p(o),He=a(o,"DIV",{class:!0});var qt=i(He);v(Lc.$$.fragment,qt),Eq=p(qt),a_=a(qt,"P",{});var K8=i(a_);Mq=s(K8,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),K8.forEach(t),zq=p(qt),Dc=a(qt,"P",{});var xy=i(Dc);Pq=s(xy,"This model inherits from "),Eh=a(xy,"A",{href:!0});var J8=i(Eh);qq=s(J8,"FlaxPreTrainedModel"),J8.forEach(t),jq=s(xy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xy.forEach(t),Cq=p(qt),Sc=a(qt,"P",{});var Fy=i(Sc);Nq=s(Fy,"This model is also a Flax Linen "),Uc=a(Fy,"A",{href:!0,rel:!0});var G8=i(Uc);Oq=s(G8,"flax.linen.Module"),G8.forEach(t),Iq=s(Fy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fy.forEach(t),Aq=p(qt),i_=a(qt,"P",{});var X8=i(i_);Lq=s(X8,"Finally, this model supports inherent JAX features such as:"),X8.forEach(t),Dq=p(qt),To=a(qt,"UL",{});var La=i(To);l_=a(La,"LI",{});var Y8=i(l_);Wc=a(Y8,"A",{href:!0,rel:!0});var Z8=i(Wc);Sq=s(Z8,"Just-In-Time (JIT) compilation"),Z8.forEach(t),Y8.forEach(t),Uq=p(La),d_=a(La,"LI",{});var e7=i(d_);Hc=a(e7,"A",{href:!0,rel:!0});var t7=i(Hc);Wq=s(t7,"Automatic Differentiation"),t7.forEach(t),e7.forEach(t),Hq=p(La),c_=a(La,"LI",{});var o7=i(c_);Rc=a(o7,"A",{href:!0,rel:!0});var n7=i(Rc);Rq=s(n7,"Vectorization"),n7.forEach(t),o7.forEach(t),Vq=p(La),p_=a(La,"LI",{});var s7=i(p_);Vc=a(s7,"A",{href:!0,rel:!0});var r7=i(Vc);Qq=s(r7,"Parallelization"),r7.forEach(t),s7.forEach(t),La.forEach(t),Kq=p(qt),eo=a(qt,"DIV",{class:!0});var Da=i(eo);v(Qc.$$.fragment,Da),Jq=p(Da),as=a(Da,"P",{});var um=i(as);Gq=s(um,"The "),h_=a(um,"CODE",{});var a7=i(h_);Xq=s(a7,"FlaxBertPreTrainedModel"),a7.forEach(t),Yq=s(um," forward method, overrides the "),m_=a(um,"CODE",{});var i7=i(m_);Zq=s(i7,"__call__"),i7.forEach(t),ej=s(um," special method."),um.forEach(t),tj=p(Da),v(ca.$$.fragment,Da),oj=p(Da),v(pa.$$.fragment,Da),Da.forEach(t),qt.forEach(t),Nk=p(o),is=a(o,"H2",{class:!0});var By=i(is);ha=a(By,"A",{id:!0,class:!0,href:!0});var l7=i(ha);f_=a(l7,"SPAN",{});var d7=i(f_);v(Kc.$$.fragment,d7),d7.forEach(t),l7.forEach(t),nj=p(By),u_=a(By,"SPAN",{});var c7=i(u_);sj=s(c7,"FlaxBertForTokenClassification"),c7.forEach(t),By.forEach(t),Ok=p(o),Re=a(o,"DIV",{class:!0});var jt=i(Re);v(Jc.$$.fragment,jt),rj=p(jt),g_=a(jt,"P",{});var p7=i(g_);aj=s(p7,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),p7.forEach(t),ij=p(jt),Gc=a(jt,"P",{});var Ey=i(Gc);lj=s(Ey,"This model inherits from "),Mh=a(Ey,"A",{href:!0});var h7=i(Mh);dj=s(h7,"FlaxPreTrainedModel"),h7.forEach(t),cj=s(Ey,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ey.forEach(t),pj=p(jt),Xc=a(jt,"P",{});var My=i(Xc);hj=s(My,"This model is also a Flax Linen "),Yc=a(My,"A",{href:!0,rel:!0});var m7=i(Yc);mj=s(m7,"flax.linen.Module"),m7.forEach(t),fj=s(My,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),My.forEach(t),uj=p(jt),__=a(jt,"P",{});var f7=i(__);gj=s(f7,"Finally, this model supports inherent JAX features such as:"),f7.forEach(t),_j=p(jt),yo=a(jt,"UL",{});var Sa=i(yo);b_=a(Sa,"LI",{});var u7=i(b_);Zc=a(u7,"A",{href:!0,rel:!0});var g7=i(Zc);bj=s(g7,"Just-In-Time (JIT) compilation"),g7.forEach(t),u7.forEach(t),kj=p(Sa),k_=a(Sa,"LI",{});var _7=i(k_);ep=a(_7,"A",{href:!0,rel:!0});var b7=i(ep);Tj=s(b7,"Automatic Differentiation"),b7.forEach(t),_7.forEach(t),yj=p(Sa),T_=a(Sa,"LI",{});var k7=i(T_);tp=a(k7,"A",{href:!0,rel:!0});var T7=i(tp);vj=s(T7,"Vectorization"),T7.forEach(t),k7.forEach(t),wj=p(Sa),y_=a(Sa,"LI",{});var y7=i(y_);op=a(y7,"A",{href:!0,rel:!0});var v7=i(op);$j=s(v7,"Parallelization"),v7.forEach(t),y7.forEach(t),Sa.forEach(t),xj=p(jt),to=a(jt,"DIV",{class:!0});var Ua=i(to);v(np.$$.fragment,Ua),Fj=p(Ua),ls=a(Ua,"P",{});var gm=i(ls);Bj=s(gm,"The "),v_=a(gm,"CODE",{});var w7=i(v_);Ej=s(w7,"FlaxBertPreTrainedModel"),w7.forEach(t),Mj=s(gm," forward method, overrides the "),w_=a(gm,"CODE",{});var $7=i(w_);zj=s($7,"__call__"),$7.forEach(t),Pj=s(gm," special method."),gm.forEach(t),qj=p(Ua),v(ma.$$.fragment,Ua),jj=p(Ua),v(fa.$$.fragment,Ua),Ua.forEach(t),jt.forEach(t),Ik=p(o),ds=a(o,"H2",{class:!0});var zy=i(ds);ua=a(zy,"A",{id:!0,class:!0,href:!0});var x7=i(ua);$_=a(x7,"SPAN",{});var F7=i($_);v(sp.$$.fragment,F7),F7.forEach(t),x7.forEach(t),Cj=p(zy),x_=a(zy,"SPAN",{});var B7=i(x_);Nj=s(B7,"FlaxBertForQuestionAnswering"),B7.forEach(t),zy.forEach(t),Ak=p(o),Ve=a(o,"DIV",{class:!0});var Ct=i(Ve);v(rp.$$.fragment,Ct),Oj=p(Ct),cs=a(Ct,"P",{});var _m=i(cs);Ij=s(_m,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),F_=a(_m,"CODE",{});var E7=i(F_);Aj=s(E7,"span start logits"),E7.forEach(t),Lj=s(_m," and "),B_=a(_m,"CODE",{});var M7=i(B_);Dj=s(M7,"span end logits"),M7.forEach(t),Sj=s(_m,")."),_m.forEach(t),Uj=p(Ct),ap=a(Ct,"P",{});var Py=i(ap);Wj=s(Py,"This model inherits from "),zh=a(Py,"A",{href:!0});var z7=i(zh);Hj=s(z7,"FlaxPreTrainedModel"),z7.forEach(t),Rj=s(Py,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Py.forEach(t),Vj=p(Ct),ip=a(Ct,"P",{});var qy=i(ip);Qj=s(qy,"This model is also a Flax Linen "),lp=a(qy,"A",{href:!0,rel:!0});var P7=i(lp);Kj=s(P7,"flax.linen.Module"),P7.forEach(t),Jj=s(qy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qy.forEach(t),Gj=p(Ct),E_=a(Ct,"P",{});var q7=i(E_);Xj=s(q7,"Finally, this model supports inherent JAX features such as:"),q7.forEach(t),Yj=p(Ct),vo=a(Ct,"UL",{});var Wa=i(vo);M_=a(Wa,"LI",{});var j7=i(M_);dp=a(j7,"A",{href:!0,rel:!0});var C7=i(dp);Zj=s(C7,"Just-In-Time (JIT) compilation"),C7.forEach(t),j7.forEach(t),eC=p(Wa),z_=a(Wa,"LI",{});var N7=i(z_);cp=a(N7,"A",{href:!0,rel:!0});var O7=i(cp);tC=s(O7,"Automatic Differentiation"),O7.forEach(t),N7.forEach(t),oC=p(Wa),P_=a(Wa,"LI",{});var I7=i(P_);pp=a(I7,"A",{href:!0,rel:!0});var A7=i(pp);nC=s(A7,"Vectorization"),A7.forEach(t),I7.forEach(t),sC=p(Wa),q_=a(Wa,"LI",{});var L7=i(q_);hp=a(L7,"A",{href:!0,rel:!0});var D7=i(hp);rC=s(D7,"Parallelization"),D7.forEach(t),L7.forEach(t),Wa.forEach(t),aC=p(Ct),oo=a(Ct,"DIV",{class:!0});var Ha=i(oo);v(mp.$$.fragment,Ha),iC=p(Ha),ps=a(Ha,"P",{});var bm=i(ps);lC=s(bm,"The "),j_=a(bm,"CODE",{});var S7=i(j_);dC=s(S7,"FlaxBertPreTrainedModel"),S7.forEach(t),cC=s(bm," forward method, overrides the "),C_=a(bm,"CODE",{});var U7=i(C_);pC=s(U7,"__call__"),U7.forEach(t),hC=s(bm," special method."),bm.forEach(t),mC=p(Ha),v(ga.$$.fragment,Ha),fC=p(Ha),v(_a.$$.fragment,Ha),Ha.forEach(t),Ct.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(_I)),u(h,"id","bert"),u(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(h,"href","#bert"),u(m,"class","relative group"),u(ne,"id","overview"),u(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ne,"href","#overview"),u(z,"class","relative group"),u(ae,"href","https://arxiv.org/abs/1810.04805"),u(ae,"rel","nofollow"),u(Be,"href","https://huggingface.co/thomwolf"),u(Be,"rel","nofollow"),u(Ee,"href","https://github.com/google-research/bert"),u(Ee,"rel","nofollow"),u(Fe,"id","transformers.BertConfig"),u(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fe,"href","#transformers.BertConfig"),u(xe,"class","relative group"),u(Ep,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),u(Mp,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertModel"),u(Va,"href","https://huggingface.co/bert-base-uncased"),u(Va,"rel","nofollow"),u(zp,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Pp,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bs,"id","transformers.BertTokenizer"),u(bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bs,"href","#transformers.BertTokenizer"),u(Jo,"class","relative group"),u(qp,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ks,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Np,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.BertTokenizerFast"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.BertTokenizerFast"),u(Xo,"class","relative group"),u(Op,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ws,"id","transformers.TFBertTokenizer"),u(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ws,"href","#transformers.TFBertTokenizer"),u(Zo,"class","relative group"),u(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fs,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(Fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fs,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(on,"class","relative group"),u(Lp,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForPreTraining"),u(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dp,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertForPreTraining"),u(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Sp,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForPreTraining"),u(Bs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Es,"id","transformers.BertModel"),u(Es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Es,"href","#transformers.BertModel"),u(rn,"class","relative group"),u(Up,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Bi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Bi,"rel","nofollow"),u(Mi,"href","https://arxiv.org/abs/1706.03762"),u(Mi,"rel","nofollow"),u(Wp,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ps,"id","transformers.BertForPreTraining"),u(Ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ps,"href","#transformers.BertForPreTraining"),u(ln,"class","relative group"),u(Hp,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Ni,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ni,"rel","nofollow"),u(Rp,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForPreTraining"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cs,"id","transformers.BertLMHeadModel"),u(Cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cs,"href","#transformers.BertLMHeadModel"),u(pn,"class","relative group"),u(Vp,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Ui,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ui,"rel","nofollow"),u(Qp,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertLMHeadModel"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.BertForMaskedLM"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.BertForMaskedLM"),u(mn,"class","relative group"),u(Kp,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Ji,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ji,"rel","nofollow"),u(Jp,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForMaskedLM"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ss,"id","transformers.BertForNextSentencePrediction"),u(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ss,"href","#transformers.BertForNextSentencePrediction"),u(un,"class","relative group"),u(Gp,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(ol,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ol,"rel","nofollow"),u(Xp,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForNextSentencePrediction"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.BertForSequenceClassification"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.BertForSequenceClassification"),u(_n,"class","relative group"),u(Yp,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(ll,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ll,"rel","nofollow"),u(Zp,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForSequenceClassification"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gs,"id","transformers.BertForMultipleChoice"),u(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gs,"href","#transformers.BertForMultipleChoice"),u(kn,"class","relative group"),u(eh,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(fl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(fl,"rel","nofollow"),u(th,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForMultipleChoice"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zs,"id","transformers.BertForTokenClassification"),u(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zs,"href","#transformers.BertForTokenClassification"),u(yn,"class","relative group"),u(oh,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Tl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Tl,"rel","nofollow"),u(nh,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForTokenClassification"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nr,"id","transformers.BertForQuestionAnswering"),u(nr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(nr,"href","#transformers.BertForQuestionAnswering"),u(wn,"class","relative group"),u(sh,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Fl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Fl,"rel","nofollow"),u(rh,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForQuestionAnswering"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ir,"id","transformers.TFBertModel"),u(ir,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ir,"href","#transformers.TFBertModel"),u(Fn,"class","relative group"),u(ah,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ql,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ql,"rel","nofollow"),u(ih,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertModel"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pr,"id","transformers.TFBertForPreTraining"),u(pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pr,"href","#transformers.TFBertForPreTraining"),u(En,"class","relative group"),u(lh,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Al,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Al,"rel","nofollow"),u(dh,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ur,"id","transformers.TFBertLMHeadModel"),u(ur,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ur,"href","#transformers.TFBertLMHeadModel"),u(Pn,"class","relative group"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_r,"id","transformers.TFBertForMaskedLM"),u(_r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_r,"href","#transformers.TFBertForMaskedLM"),u(jn,"class","relative group"),u(ch,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Xl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Xl,"rel","nofollow"),u(ph,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertForMaskedLM"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vr,"id","transformers.TFBertForNextSentencePrediction"),u(vr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vr,"href","#transformers.TFBertForNextSentencePrediction"),u(Nn,"class","relative group"),u(hh,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(sd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(sd,"rel","nofollow"),u(mh,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fr,"id","transformers.TFBertForSequenceClassification"),u(Fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fr,"href","#transformers.TFBertForSequenceClassification"),u(In,"class","relative group"),u(fh,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(cd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(cd,"rel","nofollow"),u(uh,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertForSequenceClassification"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pr,"id","transformers.TFBertForMultipleChoice"),u(Pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pr,"href","#transformers.TFBertForMultipleChoice"),u(Ln,"class","relative group"),u(gh,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(gd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(gd,"rel","nofollow"),u(_h,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertForMultipleChoice"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nr,"id","transformers.TFBertForTokenClassification"),u(Nr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Nr,"href","#transformers.TFBertForTokenClassification"),u(Sn,"class","relative group"),u(bh,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(vd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(vd,"rel","nofollow"),u(kh,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertForTokenClassification"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dr,"id","transformers.TFBertForQuestionAnswering"),u(Dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dr,"href","#transformers.TFBertForQuestionAnswering"),u(Wn,"class","relative group"),u(Th,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ed,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ed,"rel","nofollow"),u(yh,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rr,"id","transformers.FlaxBertModel"),u(Rr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rr,"href","#transformers.FlaxBertModel"),u(Vn,"class","relative group"),u(vh,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Cd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Cd,"rel","nofollow"),u(Nd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Nd,"rel","nofollow"),u(Od,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Od,"rel","nofollow"),u(Id,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Id,"rel","nofollow"),u(Ad,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ad,"rel","nofollow"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Kr,"id","transformers.FlaxBertForPreTraining"),u(Kr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Kr,"href","#transformers.FlaxBertForPreTraining"),u(Kn,"class","relative group"),u(wh,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Hd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Hd,"rel","nofollow"),u(Rd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Rd,"rel","nofollow"),u(Vd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Vd,"rel","nofollow"),u(Qd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Qd,"rel","nofollow"),u(Kd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Kd,"rel","nofollow"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xr,"id","transformers.FlaxBertForCausalLM"),u(Xr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xr,"href","#transformers.FlaxBertForCausalLM"),u(Xn,"class","relative group"),u($h,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ec,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ec,"rel","nofollow"),u(tc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(tc,"rel","nofollow"),u(oc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(oc,"rel","nofollow"),u(nc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(nc,"rel","nofollow"),u(sc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(sc,"rel","nofollow"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ea,"id","transformers.FlaxBertForMaskedLM"),u(ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ea,"href","#transformers.FlaxBertForMaskedLM"),u(Zn,"class","relative group"),u(xh,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(pc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(pc,"rel","nofollow"),u(hc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(hc,"rel","nofollow"),u(mc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(mc,"rel","nofollow"),u(fc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(fc,"rel","nofollow"),u(uc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(uc,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(na,"id","transformers.FlaxBertForNextSentencePrediction"),u(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(na,"href","#transformers.FlaxBertForNextSentencePrediction"),u(ts,"class","relative group"),u(Fh,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(vc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(vc,"rel","nofollow"),u(wc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(wc,"rel","nofollow"),u($c,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u($c,"rel","nofollow"),u(xc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(xc,"rel","nofollow"),u(Fc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Fc,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(aa,"id","transformers.FlaxBertForSequenceClassification"),u(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(aa,"href","#transformers.FlaxBertForSequenceClassification"),u(ns,"class","relative group"),u(Bh,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(qc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(qc,"rel","nofollow"),u(jc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(jc,"rel","nofollow"),u(Cc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Cc,"rel","nofollow"),u(Nc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Nc,"rel","nofollow"),u(Oc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Oc,"rel","nofollow"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(da,"id","transformers.FlaxBertForMultipleChoice"),u(da,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(da,"href","#transformers.FlaxBertForMultipleChoice"),u(rs,"class","relative group"),u(Eh,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Uc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Uc,"rel","nofollow"),u(Wc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Wc,"rel","nofollow"),u(Hc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Hc,"rel","nofollow"),u(Rc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Rc,"rel","nofollow"),u(Vc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Vc,"rel","nofollow"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ha,"id","transformers.FlaxBertForTokenClassification"),u(ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ha,"href","#transformers.FlaxBertForTokenClassification"),u(is,"class","relative group"),u(Mh,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Yc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Yc,"rel","nofollow"),u(Zc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Zc,"rel","nofollow"),u(ep,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ep,"rel","nofollow"),u(tp,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(tp,"rel","nofollow"),u(op,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(op,"rel","nofollow"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ua,"id","transformers.FlaxBertForQuestionAnswering"),u(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ua,"href","#transformers.FlaxBertForQuestionAnswering"),u(ds,"class","relative group"),u(zh,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(lp,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(lp,"rel","nofollow"),u(dp,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(dp,"rel","nofollow"),u(cp,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(cp,"rel","nofollow"),u(pp,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(pp,"rel","nofollow"),u(hp,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(hp,"rel","nofollow"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),b(o,_,k),b(o,m,k),e(m,h),e(h,g),w(l,g,null),e(m,f),e(m,E),e(E,be),b(o,X,k),b(o,z,k),e(z,ne),e(ne,L),w(re,L,null),e(z,ke),e(z,D),e(D,Te),b(o,me,k),b(o,J,k),e(J,O),e(J,ae),e(ae,Y),e(J,P),b(o,j,k),b(o,ie,k),e(ie,H),b(o,fe,k),b(o,le,k),e(le,S),e(S,ye),b(o,ue,k),b(o,q,k),e(q,ce),e(ce,R),b(o,ge,k),b(o,de,k),e(de,V),b(o,_e,k),b(o,se,k),e(se,N),e(N,ve),e(se,Q),e(se,pe),e(pe,T),b(o,M,k),b(o,K,k),e(K,ze),e(K,Be),e(Be,I),e(K,Pe),e(K,Ee),e(Ee,qe),e(K,A),b(o,W,k),b(o,xe,k),e(xe,Fe),e(Fe,U),w(Me,U,null),e(xe,je),e(xe,he),e(he,Ce),b(o,Eb,k),b(o,Nt,k),w(Ra,Nt,null),e(Nt,jy),e(Nt,ho),e(ho,Cy),e(ho,Ep),e(Ep,Ny),e(ho,Oy),e(ho,Mp),e(Mp,Iy),e(ho,Ay),e(ho,Va),e(Va,Ly),e(ho,Dy),e(Nt,Sy),e(Nt,Ko),e(Ko,Uy),e(Ko,zp),e(zp,Wy),e(Ko,Hy),e(Ko,Pp),e(Pp,Ry),e(Ko,Vy),e(Nt,Qy),w(_s,Nt,null),b(o,Mb,k),b(o,Jo,k),e(Jo,bs),e(bs,km),w(Qa,km,null),e(Jo,Ky),e(Jo,Tm),e(Tm,Jy),b(o,zb,k),b(o,Ne,k),w(Ka,Ne,null),e(Ne,Gy),e(Ne,ym),e(ym,Xy),e(Ne,Yy),e(Ne,Ja),e(Ja,Zy),e(Ja,qp),e(qp,ev),e(Ja,tv),e(Ne,ov),e(Ne,Bo),w(Ga,Bo,null),e(Bo,nv),e(Bo,vm),e(vm,sv),e(Bo,rv),e(Bo,Xa),e(Xa,jp),e(jp,av),e(jp,wm),e(wm,iv),e(Xa,lv),e(Xa,Cp),e(Cp,dv),e(Cp,$m),e($m,cv),e(Ne,pv),e(Ne,ks),w(Ya,ks,null),e(ks,hv),e(ks,Za),e(Za,mv),e(Za,xm),e(xm,fv),e(Za,uv),e(Ne,gv),e(Ne,It),w(ei,It,null),e(It,_v),e(It,Fm),e(Fm,bv),e(It,kv),w(Ts,It,null),e(It,Tv),e(It,Go),e(Go,yv),e(Go,Bm),e(Bm,vv),e(Go,wv),e(Go,Em),e(Em,$v),e(Go,xv),e(Ne,Fv),e(Ne,Np),w(ti,Np,null),b(o,Pb,k),b(o,Xo,k),e(Xo,ys),e(ys,Mm),w(oi,Mm,null),e(Xo,Bv),e(Xo,zm),e(zm,Ev),b(o,qb,k),b(o,rt,k),w(ni,rt,null),e(rt,Mv),e(rt,si),e(si,zv),e(si,Pm),e(Pm,Pv),e(si,qv),e(rt,jv),e(rt,ri),e(ri,Cv),e(ri,Op),e(Op,Nv),e(ri,Ov),e(rt,Iv),e(rt,Eo),w(ai,Eo,null),e(Eo,Av),e(Eo,qm),e(qm,Lv),e(Eo,Dv),e(Eo,ii),e(ii,Ip),e(Ip,Sv),e(Ip,jm),e(jm,Uv),e(ii,Wv),e(ii,Ap),e(Ap,Hv),e(Ap,Cm),e(Cm,Rv),e(rt,Vv),e(rt,At),w(li,At,null),e(At,Qv),e(At,Nm),e(Nm,Kv),e(At,Jv),w(vs,At,null),e(At,Gv),e(At,Yo),e(Yo,Xv),e(Yo,Om),e(Om,Yv),e(Yo,Zv),e(Yo,Im),e(Im,ew),e(Yo,tw),b(o,jb,k),b(o,Zo,k),e(Zo,ws),e(ws,Am),w(di,Am,null),e(Zo,ow),e(Zo,Lm),e(Lm,nw),b(o,Cb,k),b(o,at,k),w(ci,at,null),e(at,sw),e(at,en),e(en,rw),e(en,Dm),e(Dm,aw),e(en,iw),e(en,Sm),e(Sm,lw),e(en,dw),e(at,cw),e(at,pi),e(pi,pw),e(pi,Um),e(Um,hw),e(pi,mw),e(at,fw),e(at,Mo),w(hi,Mo,null),e(Mo,uw),e(Mo,mi),e(mi,gw),e(mi,Wm),e(Wm,_w),e(mi,bw),e(Mo,kw),w($s,Mo,null),e(at,Tw),e(at,zo),w(fi,zo,null),e(zo,yw),e(zo,tn),e(tn,vw),e(tn,Hm),e(Hm,ww),e(tn,$w),e(tn,Rm),e(Rm,xw),e(tn,Fw),e(zo,Bw),w(xs,zo,null),b(o,Nb,k),b(o,on,k),e(on,Fs),e(Fs,Vm),w(ui,Vm,null),e(on,Ew),e(on,Qm),e(Qm,Mw),b(o,Ob,k),b(o,nn,k),w(gi,nn,null),e(nn,zw),e(nn,_i),e(_i,Pw),e(_i,Lp),e(Lp,qw),e(_i,jw),b(o,Ib,k),b(o,sn,k),w(bi,sn,null),e(sn,Cw),e(sn,ki),e(ki,Nw),e(ki,Dp),e(Dp,Ow),e(ki,Iw),b(o,Ab,k),b(o,mo,k),w(Ti,mo,null),e(mo,Aw),e(mo,yi),e(yi,Lw),e(yi,Sp),e(Sp,Dw),e(yi,Sw),e(mo,Uw),e(mo,Bs),w(vi,Bs,null),e(Bs,Ww),e(Bs,Km),e(Km,Hw),b(o,Lb,k),b(o,rn,k),e(rn,Es),e(Es,Jm),w(wi,Jm,null),e(rn,Rw),e(rn,Gm),e(Gm,Vw),b(o,Db,k),b(o,Oe,k),w($i,Oe,null),e(Oe,Qw),e(Oe,Xm),e(Xm,Kw),e(Oe,Jw),e(Oe,xi),e(xi,Gw),e(xi,Up),e(Up,Xw),e(xi,Yw),e(Oe,Zw),e(Oe,Fi),e(Fi,e1),e(Fi,Bi),e(Bi,t1),e(Fi,o1),e(Oe,n1),e(Oe,Ei),e(Ei,s1),e(Ei,Mi),e(Mi,r1),e(Ei,a1),e(Oe,i1),e(Oe,Ke),e(Ke,l1),e(Ke,Ym),e(Ym,d1),e(Ke,c1),e(Ke,Zm),e(Zm,p1),e(Ke,h1),e(Ke,ef),e(ef,m1),e(Ke,f1),e(Ke,tf),e(tf,u1),e(Ke,g1),e(Ke,of),e(of,_1),e(Ke,b1),e(Ke,nf),e(nf,k1),e(Ke,T1),e(Oe,y1),e(Oe,Lt),w(zi,Lt,null),e(Lt,v1),e(Lt,an),e(an,w1),e(an,Wp),e(Wp,$1),e(an,x1),e(an,sf),e(sf,F1),e(an,B1),e(Lt,E1),w(Ms,Lt,null),e(Lt,M1),w(zs,Lt,null),b(o,Sb,k),b(o,ln,k),e(ln,Ps),e(Ps,rf),w(Pi,rf,null),e(ln,z1),e(ln,af),e(af,P1),b(o,Ub,k),b(o,it,k),w(qi,it,null),e(it,q1),e(it,dn),e(dn,j1),e(dn,lf),e(lf,C1),e(dn,N1),e(dn,df),e(df,O1),e(dn,I1),e(it,A1),e(it,ji),e(ji,L1),e(ji,Hp),e(Hp,D1),e(ji,S1),e(it,U1),e(it,Ci),e(Ci,W1),e(Ci,Ni),e(Ni,H1),e(Ci,R1),e(it,V1),e(it,Dt),w(Oi,Dt,null),e(Dt,Q1),e(Dt,cn),e(cn,K1),e(cn,Rp),e(Rp,J1),e(cn,G1),e(cn,cf),e(cf,X1),e(cn,Y1),e(Dt,Z1),w(qs,Dt,null),e(Dt,e$),w(js,Dt,null),b(o,Wb,k),b(o,pn,k),e(pn,Cs),e(Cs,pf),w(Ii,pf,null),e(pn,t$),e(pn,hf),e(hf,o$),b(o,Hb,k),b(o,lt,k),w(Ai,lt,null),e(lt,n$),e(lt,Li),e(Li,s$),e(Li,mf),e(mf,r$),e(Li,a$),e(lt,i$),e(lt,Di),e(Di,l$),e(Di,Vp),e(Vp,d$),e(Di,c$),e(lt,p$),e(lt,Si),e(Si,h$),e(Si,Ui),e(Ui,m$),e(Si,f$),e(lt,u$),e(lt,St),w(Wi,St,null),e(St,g$),e(St,hn),e(hn,_$),e(hn,Qp),e(Qp,b$),e(hn,k$),e(hn,ff),e(ff,T$),e(hn,y$),e(St,v$),w(Ns,St,null),e(St,w$),w(Os,St,null),b(o,Rb,k),b(o,mn,k),e(mn,Is),e(Is,uf),w(Hi,uf,null),e(mn,$$),e(mn,gf),e(gf,x$),b(o,Vb,k),b(o,dt,k),w(Ri,dt,null),e(dt,F$),e(dt,Vi),e(Vi,B$),e(Vi,_f),e(_f,E$),e(Vi,M$),e(dt,z$),e(dt,Qi),e(Qi,P$),e(Qi,Kp),e(Kp,q$),e(Qi,j$),e(dt,C$),e(dt,Ki),e(Ki,N$),e(Ki,Ji),e(Ji,O$),e(Ki,I$),e(dt,A$),e(dt,ut),w(Gi,ut,null),e(ut,L$),e(ut,fn),e(fn,D$),e(fn,Jp),e(Jp,S$),e(fn,U$),e(fn,bf),e(bf,W$),e(fn,H$),e(ut,R$),w(As,ut,null),e(ut,V$),w(Ls,ut,null),e(ut,Q$),w(Ds,ut,null),b(o,Qb,k),b(o,un,k),e(un,Ss),e(Ss,kf),w(Xi,kf,null),e(un,K$),e(un,Tf),e(Tf,J$),b(o,Kb,k),b(o,ct,k),w(Yi,ct,null),e(ct,G$),e(ct,Zi),e(Zi,X$),e(Zi,yf),e(yf,Y$),e(Zi,Z$),e(ct,e2),e(ct,el),e(el,t2),e(el,Gp),e(Gp,o2),e(el,n2),e(ct,s2),e(ct,tl),e(tl,r2),e(tl,ol),e(ol,a2),e(tl,i2),e(ct,l2),e(ct,Ut),w(nl,Ut,null),e(Ut,d2),e(Ut,gn),e(gn,c2),e(gn,Xp),e(Xp,p2),e(gn,h2),e(gn,vf),e(vf,m2),e(gn,f2),e(Ut,u2),w(Us,Ut,null),e(Ut,g2),w(Ws,Ut,null),b(o,Jb,k),b(o,_n,k),e(_n,Hs),e(Hs,wf),w(sl,wf,null),e(_n,_2),e(_n,$f),e($f,b2),b(o,Gb,k),b(o,pt,k),w(rl,pt,null),e(pt,k2),e(pt,xf),e(xf,T2),e(pt,y2),e(pt,al),e(al,v2),e(al,Yp),e(Yp,w2),e(al,$2),e(pt,x2),e(pt,il),e(il,F2),e(il,ll),e(ll,B2),e(il,E2),e(pt,M2),e(pt,Qe),w(dl,Qe,null),e(Qe,z2),e(Qe,bn),e(bn,P2),e(bn,Zp),e(Zp,q2),e(bn,j2),e(bn,Ff),e(Ff,C2),e(bn,N2),e(Qe,O2),w(Rs,Qe,null),e(Qe,I2),w(Vs,Qe,null),e(Qe,A2),w(Qs,Qe,null),e(Qe,L2),w(Ks,Qe,null),e(Qe,D2),w(Js,Qe,null),b(o,Xb,k),b(o,kn,k),e(kn,Gs),e(Gs,Bf),w(cl,Bf,null),e(kn,S2),e(kn,Ef),e(Ef,U2),b(o,Yb,k),b(o,ht,k),w(pl,ht,null),e(ht,W2),e(ht,Mf),e(Mf,H2),e(ht,R2),e(ht,hl),e(hl,V2),e(hl,eh),e(eh,Q2),e(hl,K2),e(ht,J2),e(ht,ml),e(ml,G2),e(ml,fl),e(fl,X2),e(ml,Y2),e(ht,Z2),e(ht,Wt),w(ul,Wt,null),e(Wt,ex),e(Wt,Tn),e(Tn,tx),e(Tn,th),e(th,ox),e(Tn,nx),e(Tn,zf),e(zf,sx),e(Tn,rx),e(Wt,ax),w(Xs,Wt,null),e(Wt,ix),w(Ys,Wt,null),b(o,Zb,k),b(o,yn,k),e(yn,Zs),e(Zs,Pf),w(gl,Pf,null),e(yn,lx),e(yn,qf),e(qf,dx),b(o,ek,k),b(o,mt,k),w(_l,mt,null),e(mt,cx),e(mt,jf),e(jf,px),e(mt,hx),e(mt,bl),e(bl,mx),e(bl,oh),e(oh,fx),e(bl,ux),e(mt,gx),e(mt,kl),e(kl,_x),e(kl,Tl),e(Tl,bx),e(kl,kx),e(mt,Tx),e(mt,gt),w(yl,gt,null),e(gt,yx),e(gt,vn),e(vn,vx),e(vn,nh),e(nh,wx),e(vn,$x),e(vn,Cf),e(Cf,xx),e(vn,Fx),e(gt,Bx),w(er,gt,null),e(gt,Ex),w(tr,gt,null),e(gt,Mx),w(or,gt,null),b(o,tk,k),b(o,wn,k),e(wn,nr),e(nr,Nf),w(vl,Nf,null),e(wn,zx),e(wn,Of),e(Of,Px),b(o,ok,k),b(o,ft,k),w(wl,ft,null),e(ft,qx),e(ft,$n),e($n,jx),e($n,If),e(If,Cx),e($n,Nx),e($n,Af),e(Af,Ox),e($n,Ix),e(ft,Ax),e(ft,$l),e($l,Lx),e($l,sh),e(sh,Dx),e($l,Sx),e(ft,Ux),e(ft,xl),e(xl,Wx),e(xl,Fl),e(Fl,Hx),e(xl,Rx),e(ft,Vx),e(ft,_t),w(Bl,_t,null),e(_t,Qx),e(_t,xn),e(xn,Kx),e(xn,rh),e(rh,Jx),e(xn,Gx),e(xn,Lf),e(Lf,Xx),e(xn,Yx),e(_t,Zx),w(sr,_t,null),e(_t,eF),w(rr,_t,null),e(_t,tF),w(ar,_t,null),b(o,nk,k),b(o,Fn,k),e(Fn,ir),e(ir,Df),w(El,Df,null),e(Fn,oF),e(Fn,Sf),e(Sf,nF),b(o,sk,k),b(o,Je,k),w(Ml,Je,null),e(Je,sF),e(Je,Uf),e(Uf,rF),e(Je,aF),e(Je,zl),e(zl,iF),e(zl,ah),e(ah,lF),e(zl,dF),e(Je,cF),e(Je,Pl),e(Pl,pF),e(Pl,ql),e(ql,hF),e(Pl,mF),e(Je,fF),w(lr,Je,null),e(Je,uF),e(Je,Ht),w(jl,Ht,null),e(Ht,gF),e(Ht,Bn),e(Bn,_F),e(Bn,ih),e(ih,bF),e(Bn,kF),e(Bn,Wf),e(Wf,TF),e(Bn,yF),e(Ht,vF),w(dr,Ht,null),e(Ht,wF),w(cr,Ht,null),b(o,rk,k),b(o,En,k),e(En,pr),e(pr,Hf),w(Cl,Hf,null),e(En,$F),e(En,Rf),e(Rf,xF),b(o,ak,k),b(o,Ge,k),w(Nl,Ge,null),e(Ge,FF),e(Ge,Mn),e(Mn,BF),e(Mn,Vf),e(Vf,EF),e(Mn,MF),e(Mn,Qf),e(Qf,zF),e(Mn,PF),e(Ge,qF),e(Ge,Ol),e(Ol,jF),e(Ol,lh),e(lh,CF),e(Ol,NF),e(Ge,OF),e(Ge,Il),e(Il,IF),e(Il,Al),e(Al,AF),e(Il,LF),e(Ge,DF),w(hr,Ge,null),e(Ge,SF),e(Ge,Rt),w(Ll,Rt,null),e(Rt,UF),e(Rt,zn),e(zn,WF),e(zn,dh),e(dh,HF),e(zn,RF),e(zn,Kf),e(Kf,VF),e(zn,QF),e(Rt,KF),w(mr,Rt,null),e(Rt,JF),w(fr,Rt,null),b(o,ik,k),b(o,Pn,k),e(Pn,ur),e(ur,Jf),w(Dl,Jf,null),e(Pn,GF),e(Pn,Gf),e(Gf,XF),b(o,lk,k),b(o,qn,k),w(Sl,qn,null),e(qn,YF),e(qn,bt),w(Ul,bt,null),e(bt,ZF),e(bt,Ie),e(Ie,e0),e(Ie,Xf),e(Xf,t0),e(Ie,o0),e(Ie,Yf),e(Yf,n0),e(Ie,s0),e(Ie,Zf),e(Zf,r0),e(Ie,a0),e(Ie,eu),e(eu,i0),e(Ie,l0),e(Ie,tu),e(tu,d0),e(Ie,c0),e(Ie,ou),e(ou,p0),e(Ie,h0),e(Ie,nu),e(nu,m0),e(Ie,f0),e(bt,u0),e(bt,Wl),e(Wl,Hl),e(Hl,g0),e(Hl,su),e(su,_0),e(Hl,b0),e(Wl,k0),e(Wl,Rl),e(Rl,T0),e(Rl,ru),e(ru,y0),e(Rl,v0),e(bt,w0),e(bt,G),e(G,$0),e(G,au),e(au,x0),e(G,F0),e(G,iu),e(iu,B0),e(G,E0),e(G,lu),e(lu,M0),e(G,z0),e(G,du),e(du,P0),e(G,q0),e(G,cu),e(cu,j0),e(G,C0),e(G,pu),e(pu,N0),e(G,O0),e(G,hu),e(hu,I0),e(G,A0),e(G,mu),e(mu,L0),e(G,D0),e(G,fu),e(fu,S0),e(G,U0),e(G,uu),e(uu,W0),e(G,H0),e(G,gu),e(gu,R0),e(G,V0),e(G,_u),e(_u,Q0),e(G,K0),e(G,bu),e(bu,J0),e(G,G0),e(G,ku),e(ku,X0),e(G,Y0),e(G,Tu),e(Tu,Z0),e(G,eB),e(G,yu),e(yu,tB),e(G,oB),e(G,vu),e(vu,nB),e(G,sB),e(G,wu),e(wu,rB),e(G,aB),e(G,$u),e($u,iB),e(G,lB),e(G,xu),e(xu,dB),e(G,cB),e(bt,pB),w(gr,bt,null),b(o,dk,k),b(o,jn,k),e(jn,_r),e(_r,Fu),w(Vl,Fu,null),e(jn,hB),e(jn,Bu),e(Bu,mB),b(o,ck,k),b(o,Xe,k),w(Ql,Xe,null),e(Xe,fB),e(Xe,Kl),e(Kl,uB),e(Kl,Eu),e(Eu,gB),e(Kl,_B),e(Xe,bB),e(Xe,Jl),e(Jl,kB),e(Jl,ch),e(ch,TB),e(Jl,yB),e(Xe,vB),e(Xe,Gl),e(Gl,wB),e(Gl,Xl),e(Xl,$B),e(Gl,xB),e(Xe,FB),w(br,Xe,null),e(Xe,BB),e(Xe,kt),w(Yl,kt,null),e(kt,EB),e(kt,Cn),e(Cn,MB),e(Cn,ph),e(ph,zB),e(Cn,PB),e(Cn,Mu),e(Mu,qB),e(Cn,jB),e(kt,CB),w(kr,kt,null),e(kt,NB),w(Tr,kt,null),e(kt,OB),w(yr,kt,null),b(o,pk,k),b(o,Nn,k),e(Nn,vr),e(vr,zu),w(Zl,zu,null),e(Nn,IB),e(Nn,Pu),e(Pu,AB),b(o,hk,k),b(o,Ye,k),w(ed,Ye,null),e(Ye,LB),e(Ye,td),e(td,DB),e(td,qu),e(qu,SB),e(td,UB),e(Ye,WB),e(Ye,od),e(od,HB),e(od,hh),e(hh,RB),e(od,VB),e(Ye,QB),e(Ye,nd),e(nd,KB),e(nd,sd),e(sd,JB),e(nd,GB),e(Ye,XB),w(wr,Ye,null),e(Ye,YB),e(Ye,Vt),w(rd,Vt,null),e(Vt,ZB),e(Vt,On),e(On,eE),e(On,mh),e(mh,tE),e(On,oE),e(On,ju),e(ju,nE),e(On,sE),e(Vt,rE),w($r,Vt,null),e(Vt,aE),w(xr,Vt,null),b(o,mk,k),b(o,In,k),e(In,Fr),e(Fr,Cu),w(ad,Cu,null),e(In,iE),e(In,Nu),e(Nu,lE),b(o,fk,k),b(o,Ze,k),w(id,Ze,null),e(Ze,dE),e(Ze,Ou),e(Ou,cE),e(Ze,pE),e(Ze,ld),e(ld,hE),e(ld,fh),e(fh,mE),e(ld,fE),e(Ze,uE),e(Ze,dd),e(dd,gE),e(dd,cd),e(cd,_E),e(dd,bE),e(Ze,kE),w(Br,Ze,null),e(Ze,TE),e(Ze,Tt),w(pd,Tt,null),e(Tt,yE),e(Tt,An),e(An,vE),e(An,uh),e(uh,wE),e(An,$E),e(An,Iu),e(Iu,xE),e(An,FE),e(Tt,BE),w(Er,Tt,null),e(Tt,EE),w(Mr,Tt,null),e(Tt,ME),w(zr,Tt,null),b(o,uk,k),b(o,Ln,k),e(Ln,Pr),e(Pr,Au),w(hd,Au,null),e(Ln,zE),e(Ln,Lu),e(Lu,PE),b(o,gk,k),b(o,et,k),w(md,et,null),e(et,qE),e(et,Du),e(Du,jE),e(et,CE),e(et,fd),e(fd,NE),e(fd,gh),e(gh,OE),e(fd,IE),e(et,AE),e(et,ud),e(ud,LE),e(ud,gd),e(gd,DE),e(ud,SE),e(et,UE),w(qr,et,null),e(et,WE),e(et,Qt),w(_d,Qt,null),e(Qt,HE),e(Qt,Dn),e(Dn,RE),e(Dn,_h),e(_h,VE),e(Dn,QE),e(Dn,Su),e(Su,KE),e(Dn,JE),e(Qt,GE),w(jr,Qt,null),e(Qt,XE),w(Cr,Qt,null),b(o,_k,k),b(o,Sn,k),e(Sn,Nr),e(Nr,Uu),w(bd,Uu,null),e(Sn,YE),e(Sn,Wu),e(Wu,ZE),b(o,bk,k),b(o,tt,k),w(kd,tt,null),e(tt,eM),e(tt,Hu),e(Hu,tM),e(tt,oM),e(tt,Td),e(Td,nM),e(Td,bh),e(bh,sM),e(Td,rM),e(tt,aM),e(tt,yd),e(yd,iM),e(yd,vd),e(vd,lM),e(yd,dM),e(tt,cM),w(Or,tt,null),e(tt,pM),e(tt,yt),w(wd,yt,null),e(yt,hM),e(yt,Un),e(Un,mM),e(Un,kh),e(kh,fM),e(Un,uM),e(Un,Ru),e(Ru,gM),e(Un,_M),e(yt,bM),w(Ir,yt,null),e(yt,kM),w(Ar,yt,null),e(yt,TM),w(Lr,yt,null),b(o,kk,k),b(o,Wn,k),e(Wn,Dr),e(Dr,Vu),w($d,Vu,null),e(Wn,yM),e(Wn,Qu),e(Qu,vM),b(o,Tk,k),b(o,ot,k),w(xd,ot,null),e(ot,wM),e(ot,Hn),e(Hn,$M),e(Hn,Ku),e(Ku,xM),e(Hn,FM),e(Hn,Ju),e(Ju,BM),e(Hn,EM),e(ot,MM),e(ot,Fd),e(Fd,zM),e(Fd,Th),e(Th,PM),e(Fd,qM),e(ot,jM),e(ot,Bd),e(Bd,CM),e(Bd,Ed),e(Ed,NM),e(Bd,OM),e(ot,IM),w(Sr,ot,null),e(ot,AM),e(ot,vt),w(Md,vt,null),e(vt,LM),e(vt,Rn),e(Rn,DM),e(Rn,yh),e(yh,SM),e(Rn,UM),e(Rn,Gu),e(Gu,WM),e(Rn,HM),e(vt,RM),w(Ur,vt,null),e(vt,VM),w(Wr,vt,null),e(vt,QM),w(Hr,vt,null),b(o,yk,k),b(o,Vn,k),e(Vn,Rr),e(Rr,Xu),w(zd,Xu,null),e(Vn,KM),e(Vn,Yu),e(Yu,JM),b(o,vk,k),b(o,Ae,k),w(Pd,Ae,null),e(Ae,GM),e(Ae,Zu),e(Zu,XM),e(Ae,YM),e(Ae,qd),e(qd,ZM),e(qd,vh),e(vh,ez),e(qd,tz),e(Ae,oz),e(Ae,jd),e(jd,nz),e(jd,Cd),e(Cd,sz),e(jd,rz),e(Ae,az),e(Ae,eg),e(eg,iz),e(Ae,lz),e(Ae,fo),e(fo,tg),e(tg,Nd),e(Nd,dz),e(fo,cz),e(fo,og),e(og,Od),e(Od,pz),e(fo,hz),e(fo,ng),e(ng,Id),e(Id,mz),e(fo,fz),e(fo,sg),e(sg,Ad),e(Ad,uz),e(Ae,gz),e(Ae,Kt),w(Ld,Kt,null),e(Kt,_z),e(Kt,Qn),e(Qn,bz),e(Qn,rg),e(rg,kz),e(Qn,Tz),e(Qn,ag),e(ag,yz),e(Qn,vz),e(Kt,wz),w(Vr,Kt,null),e(Kt,$z),w(Qr,Kt,null),b(o,wk,k),b(o,Kn,k),e(Kn,Kr),e(Kr,ig),w(Dd,ig,null),e(Kn,xz),e(Kn,lg),e(lg,Fz),b(o,$k,k),b(o,Le,k),w(Sd,Le,null),e(Le,Bz),e(Le,Jn),e(Jn,Ez),e(Jn,dg),e(dg,Mz),e(Jn,zz),e(Jn,cg),e(cg,Pz),e(Jn,qz),e(Le,jz),e(Le,Ud),e(Ud,Cz),e(Ud,wh),e(wh,Nz),e(Ud,Oz),e(Le,Iz),e(Le,Wd),e(Wd,Az),e(Wd,Hd),e(Hd,Lz),e(Wd,Dz),e(Le,Sz),e(Le,pg),e(pg,Uz),e(Le,Wz),e(Le,uo),e(uo,hg),e(hg,Rd),e(Rd,Hz),e(uo,Rz),e(uo,mg),e(mg,Vd),e(Vd,Vz),e(uo,Qz),e(uo,fg),e(fg,Qd),e(Qd,Kz),e(uo,Jz),e(uo,ug),e(ug,Kd),e(Kd,Gz),e(Le,Xz),e(Le,Jt),w(Jd,Jt,null),e(Jt,Yz),e(Jt,Gn),e(Gn,Zz),e(Gn,gg),e(gg,e4),e(Gn,t4),e(Gn,_g),e(_g,o4),e(Gn,n4),e(Jt,s4),w(Jr,Jt,null),e(Jt,r4),w(Gr,Jt,null),b(o,xk,k),b(o,Xn,k),e(Xn,Xr),e(Xr,bg),w(Gd,bg,null),e(Xn,a4),e(Xn,kg),e(kg,i4),b(o,Fk,k),b(o,De,k),w(Xd,De,null),e(De,l4),e(De,Tg),e(Tg,d4),e(De,c4),e(De,Yd),e(Yd,p4),e(Yd,$h),e($h,h4),e(Yd,m4),e(De,f4),e(De,Zd),e(Zd,u4),e(Zd,ec),e(ec,g4),e(Zd,_4),e(De,b4),e(De,yg),e(yg,k4),e(De,T4),e(De,go),e(go,vg),e(vg,tc),e(tc,y4),e(go,v4),e(go,wg),e(wg,oc),e(oc,w4),e(go,$4),e(go,$g),e($g,nc),e(nc,x4),e(go,F4),e(go,xg),e(xg,sc),e(sc,B4),e(De,E4),e(De,Gt),w(rc,Gt,null),e(Gt,M4),e(Gt,Yn),e(Yn,z4),e(Yn,Fg),e(Fg,P4),e(Yn,q4),e(Yn,Bg),e(Bg,j4),e(Yn,C4),e(Gt,N4),w(Yr,Gt,null),e(Gt,O4),w(Zr,Gt,null),b(o,Bk,k),b(o,Zn,k),e(Zn,ea),e(ea,Eg),w(ac,Eg,null),e(Zn,I4),e(Zn,Mg),e(Mg,A4),b(o,Ek,k),b(o,Se,k),w(ic,Se,null),e(Se,L4),e(Se,lc),e(lc,D4),e(lc,zg),e(zg,S4),e(lc,U4),e(Se,W4),e(Se,dc),e(dc,H4),e(dc,xh),e(xh,R4),e(dc,V4),e(Se,Q4),e(Se,cc),e(cc,K4),e(cc,pc),e(pc,J4),e(cc,G4),e(Se,X4),e(Se,Pg),e(Pg,Y4),e(Se,Z4),e(Se,_o),e(_o,qg),e(qg,hc),e(hc,eP),e(_o,tP),e(_o,jg),e(jg,mc),e(mc,oP),e(_o,nP),e(_o,Cg),e(Cg,fc),e(fc,sP),e(_o,rP),e(_o,Ng),e(Ng,uc),e(uc,aP),e(Se,iP),e(Se,Xt),w(gc,Xt,null),e(Xt,lP),e(Xt,es),e(es,dP),e(es,Og),e(Og,cP),e(es,pP),e(es,Ig),e(Ig,hP),e(es,mP),e(Xt,fP),w(ta,Xt,null),e(Xt,uP),w(oa,Xt,null),b(o,Mk,k),b(o,ts,k),e(ts,na),e(na,Ag),w(_c,Ag,null),e(ts,gP),e(ts,Lg),e(Lg,_P),b(o,zk,k),b(o,Ue,k),w(bc,Ue,null),e(Ue,bP),e(Ue,kc),e(kc,kP),e(kc,Dg),e(Dg,TP),e(kc,yP),e(Ue,vP),e(Ue,Tc),e(Tc,wP),e(Tc,Fh),e(Fh,$P),e(Tc,xP),e(Ue,FP),e(Ue,yc),e(yc,BP),e(yc,vc),e(vc,EP),e(yc,MP),e(Ue,zP),e(Ue,Sg),e(Sg,PP),e(Ue,qP),e(Ue,bo),e(bo,Ug),e(Ug,wc),e(wc,jP),e(bo,CP),e(bo,Wg),e(Wg,$c),e($c,NP),e(bo,OP),e(bo,Hg),e(Hg,xc),e(xc,IP),e(bo,AP),e(bo,Rg),e(Rg,Fc),e(Fc,LP),e(Ue,DP),e(Ue,Yt),w(Bc,Yt,null),e(Yt,SP),e(Yt,os),e(os,UP),e(os,Vg),e(Vg,WP),e(os,HP),e(os,Qg),e(Qg,RP),e(os,VP),e(Yt,QP),w(sa,Yt,null),e(Yt,KP),w(ra,Yt,null),b(o,Pk,k),b(o,ns,k),e(ns,aa),e(aa,Kg),w(Ec,Kg,null),e(ns,JP),e(ns,Jg),e(Jg,GP),b(o,qk,k),b(o,We,k),w(Mc,We,null),e(We,XP),e(We,Gg),e(Gg,YP),e(We,ZP),e(We,zc),e(zc,eq),e(zc,Bh),e(Bh,tq),e(zc,oq),e(We,nq),e(We,Pc),e(Pc,sq),e(Pc,qc),e(qc,rq),e(Pc,aq),e(We,iq),e(We,Xg),e(Xg,lq),e(We,dq),e(We,ko),e(ko,Yg),e(Yg,jc),e(jc,cq),e(ko,pq),e(ko,Zg),e(Zg,Cc),e(Cc,hq),e(ko,mq),e(ko,e_),e(e_,Nc),e(Nc,fq),e(ko,uq),e(ko,t_),e(t_,Oc),e(Oc,gq),e(We,_q),e(We,Zt),w(Ic,Zt,null),e(Zt,bq),e(Zt,ss),e(ss,kq),e(ss,o_),e(o_,Tq),e(ss,yq),e(ss,n_),e(n_,vq),e(ss,wq),e(Zt,$q),w(ia,Zt,null),e(Zt,xq),w(la,Zt,null),b(o,jk,k),b(o,rs,k),e(rs,da),e(da,s_),w(Ac,s_,null),e(rs,Fq),e(rs,r_),e(r_,Bq),b(o,Ck,k),b(o,He,k),w(Lc,He,null),e(He,Eq),e(He,a_),e(a_,Mq),e(He,zq),e(He,Dc),e(Dc,Pq),e(Dc,Eh),e(Eh,qq),e(Dc,jq),e(He,Cq),e(He,Sc),e(Sc,Nq),e(Sc,Uc),e(Uc,Oq),e(Sc,Iq),e(He,Aq),e(He,i_),e(i_,Lq),e(He,Dq),e(He,To),e(To,l_),e(l_,Wc),e(Wc,Sq),e(To,Uq),e(To,d_),e(d_,Hc),e(Hc,Wq),e(To,Hq),e(To,c_),e(c_,Rc),e(Rc,Rq),e(To,Vq),e(To,p_),e(p_,Vc),e(Vc,Qq),e(He,Kq),e(He,eo),w(Qc,eo,null),e(eo,Jq),e(eo,as),e(as,Gq),e(as,h_),e(h_,Xq),e(as,Yq),e(as,m_),e(m_,Zq),e(as,ej),e(eo,tj),w(ca,eo,null),e(eo,oj),w(pa,eo,null),b(o,Nk,k),b(o,is,k),e(is,ha),e(ha,f_),w(Kc,f_,null),e(is,nj),e(is,u_),e(u_,sj),b(o,Ok,k),b(o,Re,k),w(Jc,Re,null),e(Re,rj),e(Re,g_),e(g_,aj),e(Re,ij),e(Re,Gc),e(Gc,lj),e(Gc,Mh),e(Mh,dj),e(Gc,cj),e(Re,pj),e(Re,Xc),e(Xc,hj),e(Xc,Yc),e(Yc,mj),e(Xc,fj),e(Re,uj),e(Re,__),e(__,gj),e(Re,_j),e(Re,yo),e(yo,b_),e(b_,Zc),e(Zc,bj),e(yo,kj),e(yo,k_),e(k_,ep),e(ep,Tj),e(yo,yj),e(yo,T_),e(T_,tp),e(tp,vj),e(yo,wj),e(yo,y_),e(y_,op),e(op,$j),e(Re,xj),e(Re,to),w(np,to,null),e(to,Fj),e(to,ls),e(ls,Bj),e(ls,v_),e(v_,Ej),e(ls,Mj),e(ls,w_),e(w_,zj),e(ls,Pj),e(to,qj),w(ma,to,null),e(to,jj),w(fa,to,null),b(o,Ik,k),b(o,ds,k),e(ds,ua),e(ua,$_),w(sp,$_,null),e(ds,Cj),e(ds,x_),e(x_,Nj),b(o,Ak,k),b(o,Ve,k),w(rp,Ve,null),e(Ve,Oj),e(Ve,cs),e(cs,Ij),e(cs,F_),e(F_,Aj),e(cs,Lj),e(cs,B_),e(B_,Dj),e(cs,Sj),e(Ve,Uj),e(Ve,ap),e(ap,Wj),e(ap,zh),e(zh,Hj),e(ap,Rj),e(Ve,Vj),e(Ve,ip),e(ip,Qj),e(ip,lp),e(lp,Kj),e(ip,Jj),e(Ve,Gj),e(Ve,E_),e(E_,Xj),e(Ve,Yj),e(Ve,vo),e(vo,M_),e(M_,dp),e(dp,Zj),e(vo,eC),e(vo,z_),e(z_,cp),e(cp,tC),e(vo,oC),e(vo,P_),e(P_,pp),e(pp,nC),e(vo,sC),e(vo,q_),e(q_,hp),e(hp,rC),e(Ve,aC),e(Ve,oo),w(mp,oo,null),e(oo,iC),e(oo,ps),e(ps,lC),e(ps,j_),e(j_,dC),e(ps,cC),e(ps,C_),e(C_,pC),e(ps,hC),e(oo,mC),w(ga,oo,null),e(oo,fC),w(_a,oo,null),Lk=!0},p(o,[k]){const fp={};k&2&&(fp.$$scope={dirty:k,ctx:o}),_s.$set(fp);const N_={};k&2&&(N_.$$scope={dirty:k,ctx:o}),Ts.$set(N_);const O_={};k&2&&(O_.$$scope={dirty:k,ctx:o}),vs.$set(O_);const I_={};k&2&&(I_.$$scope={dirty:k,ctx:o}),$s.$set(I_);const up={};k&2&&(up.$$scope={dirty:k,ctx:o}),xs.$set(up);const A_={};k&2&&(A_.$$scope={dirty:k,ctx:o}),Ms.$set(A_);const L_={};k&2&&(L_.$$scope={dirty:k,ctx:o}),zs.$set(L_);const D_={};k&2&&(D_.$$scope={dirty:k,ctx:o}),qs.$set(D_);const gp={};k&2&&(gp.$$scope={dirty:k,ctx:o}),js.$set(gp);const S_={};k&2&&(S_.$$scope={dirty:k,ctx:o}),Ns.$set(S_);const U_={};k&2&&(U_.$$scope={dirty:k,ctx:o}),Os.$set(U_);const W_={};k&2&&(W_.$$scope={dirty:k,ctx:o}),As.$set(W_);const H_={};k&2&&(H_.$$scope={dirty:k,ctx:o}),Ls.$set(H_);const R_={};k&2&&(R_.$$scope={dirty:k,ctx:o}),Ds.$set(R_);const V_={};k&2&&(V_.$$scope={dirty:k,ctx:o}),Us.$set(V_);const Q_={};k&2&&(Q_.$$scope={dirty:k,ctx:o}),Ws.$set(Q_);const _p={};k&2&&(_p.$$scope={dirty:k,ctx:o}),Rs.$set(_p);const K_={};k&2&&(K_.$$scope={dirty:k,ctx:o}),Vs.$set(K_);const J_={};k&2&&(J_.$$scope={dirty:k,ctx:o}),Qs.$set(J_);const hs={};k&2&&(hs.$$scope={dirty:k,ctx:o}),Ks.$set(hs);const G_={};k&2&&(G_.$$scope={dirty:k,ctx:o}),Js.$set(G_);const X_={};k&2&&(X_.$$scope={dirty:k,ctx:o}),Xs.$set(X_);const bp={};k&2&&(bp.$$scope={dirty:k,ctx:o}),Ys.$set(bp);const Y_={};k&2&&(Y_.$$scope={dirty:k,ctx:o}),er.$set(Y_);const Z_={};k&2&&(Z_.$$scope={dirty:k,ctx:o}),tr.$set(Z_);const eb={};k&2&&(eb.$$scope={dirty:k,ctx:o}),or.$set(eb);const wo={};k&2&&(wo.$$scope={dirty:k,ctx:o}),sr.$set(wo);const $o={};k&2&&($o.$$scope={dirty:k,ctx:o}),rr.$set($o);const tb={};k&2&&(tb.$$scope={dirty:k,ctx:o}),ar.$set(tb);const ob={};k&2&&(ob.$$scope={dirty:k,ctx:o}),lr.$set(ob);const nb={};k&2&&(nb.$$scope={dirty:k,ctx:o}),dr.$set(nb);const ms={};k&2&&(ms.$$scope={dirty:k,ctx:o}),cr.$set(ms);const sb={};k&2&&(sb.$$scope={dirty:k,ctx:o}),hr.$set(sb);const rb={};k&2&&(rb.$$scope={dirty:k,ctx:o}),mr.$set(rb);const kp={};k&2&&(kp.$$scope={dirty:k,ctx:o}),fr.$set(kp);const ab={};k&2&&(ab.$$scope={dirty:k,ctx:o}),gr.$set(ab);const ib={};k&2&&(ib.$$scope={dirty:k,ctx:o}),br.$set(ib);const lb={};k&2&&(lb.$$scope={dirty:k,ctx:o}),kr.$set(lb);const nt={};k&2&&(nt.$$scope={dirty:k,ctx:o}),Tr.$set(nt);const db={};k&2&&(db.$$scope={dirty:k,ctx:o}),yr.$set(db);const Tp={};k&2&&(Tp.$$scope={dirty:k,ctx:o}),wr.$set(Tp);const cb={};k&2&&(cb.$$scope={dirty:k,ctx:o}),$r.$set(cb);const fs={};k&2&&(fs.$$scope={dirty:k,ctx:o}),xr.$set(fs);const pb={};k&2&&(pb.$$scope={dirty:k,ctx:o}),Br.$set(pb);const yp={};k&2&&(yp.$$scope={dirty:k,ctx:o}),Er.$set(yp);const Ph={};k&2&&(Ph.$$scope={dirty:k,ctx:o}),Mr.$set(Ph);const hb={};k&2&&(hb.$$scope={dirty:k,ctx:o}),zr.$set(hb);const qh={};k&2&&(qh.$$scope={dirty:k,ctx:o}),qr.$set(qh);const mb={};k&2&&(mb.$$scope={dirty:k,ctx:o}),jr.$set(mb);const vp={};k&2&&(vp.$$scope={dirty:k,ctx:o}),Cr.$set(vp);const wp={};k&2&&(wp.$$scope={dirty:k,ctx:o}),Or.$set(wp);const fb={};k&2&&(fb.$$scope={dirty:k,ctx:o}),Ir.$set(fb);const xo={};k&2&&(xo.$$scope={dirty:k,ctx:o}),Ar.$set(xo);const ub={};k&2&&(ub.$$scope={dirty:k,ctx:o}),Lr.$set(ub);const us={};k&2&&(us.$$scope={dirty:k,ctx:o}),Sr.$set(us);const gb={};k&2&&(gb.$$scope={dirty:k,ctx:o}),Ur.$set(gb);const _b={};k&2&&(_b.$$scope={dirty:k,ctx:o}),Wr.$set(_b);const bb={};k&2&&(bb.$$scope={dirty:k,ctx:o}),Hr.$set(bb);const $p={};k&2&&($p.$$scope={dirty:k,ctx:o}),Vr.$set($p);const kb={};k&2&&(kb.$$scope={dirty:k,ctx:o}),Qr.$set(kb);const Tb={};k&2&&(Tb.$$scope={dirty:k,ctx:o}),Jr.$set(Tb);const yb={};k&2&&(yb.$$scope={dirty:k,ctx:o}),Gr.$set(yb);const Ot={};k&2&&(Ot.$$scope={dirty:k,ctx:o}),Yr.$set(Ot);const xp={};k&2&&(xp.$$scope={dirty:k,ctx:o}),Zr.$set(xp);const vb={};k&2&&(vb.$$scope={dirty:k,ctx:o}),ta.$set(vb);const Fp={};k&2&&(Fp.$$scope={dirty:k,ctx:o}),oa.$set(Fp);const wb={};k&2&&(wb.$$scope={dirty:k,ctx:o}),sa.$set(wb);const gs={};k&2&&(gs.$$scope={dirty:k,ctx:o}),ra.$set(gs);const $b={};k&2&&($b.$$scope={dirty:k,ctx:o}),ia.$set($b);const Bp={};k&2&&(Bp.$$scope={dirty:k,ctx:o}),la.$set(Bp);const jh={};k&2&&(jh.$$scope={dirty:k,ctx:o}),ca.$set(jh);const xb={};k&2&&(xb.$$scope={dirty:k,ctx:o}),pa.$set(xb);const Ch={};k&2&&(Ch.$$scope={dirty:k,ctx:o}),ma.$set(Ch);const Fb={};k&2&&(Fb.$$scope={dirty:k,ctx:o}),fa.$set(Fb);const Fo={};k&2&&(Fo.$$scope={dirty:k,ctx:o}),ga.$set(Fo);const Bb={};k&2&&(Bb.$$scope={dirty:k,ctx:o}),_a.$set(Bb)},i(o){Lk||($(l.$$.fragment,o),$(re.$$.fragment,o),$(Me.$$.fragment,o),$(Ra.$$.fragment,o),$(_s.$$.fragment,o),$(Qa.$$.fragment,o),$(Ka.$$.fragment,o),$(Ga.$$.fragment,o),$(Ya.$$.fragment,o),$(ei.$$.fragment,o),$(Ts.$$.fragment,o),$(ti.$$.fragment,o),$(oi.$$.fragment,o),$(ni.$$.fragment,o),$(ai.$$.fragment,o),$(li.$$.fragment,o),$(vs.$$.fragment,o),$(di.$$.fragment,o),$(ci.$$.fragment,o),$(hi.$$.fragment,o),$($s.$$.fragment,o),$(fi.$$.fragment,o),$(xs.$$.fragment,o),$(ui.$$.fragment,o),$(gi.$$.fragment,o),$(bi.$$.fragment,o),$(Ti.$$.fragment,o),$(vi.$$.fragment,o),$(wi.$$.fragment,o),$($i.$$.fragment,o),$(zi.$$.fragment,o),$(Ms.$$.fragment,o),$(zs.$$.fragment,o),$(Pi.$$.fragment,o),$(qi.$$.fragment,o),$(Oi.$$.fragment,o),$(qs.$$.fragment,o),$(js.$$.fragment,o),$(Ii.$$.fragment,o),$(Ai.$$.fragment,o),$(Wi.$$.fragment,o),$(Ns.$$.fragment,o),$(Os.$$.fragment,o),$(Hi.$$.fragment,o),$(Ri.$$.fragment,o),$(Gi.$$.fragment,o),$(As.$$.fragment,o),$(Ls.$$.fragment,o),$(Ds.$$.fragment,o),$(Xi.$$.fragment,o),$(Yi.$$.fragment,o),$(nl.$$.fragment,o),$(Us.$$.fragment,o),$(Ws.$$.fragment,o),$(sl.$$.fragment,o),$(rl.$$.fragment,o),$(dl.$$.fragment,o),$(Rs.$$.fragment,o),$(Vs.$$.fragment,o),$(Qs.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(cl.$$.fragment,o),$(pl.$$.fragment,o),$(ul.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(gl.$$.fragment,o),$(_l.$$.fragment,o),$(yl.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(vl.$$.fragment,o),$(wl.$$.fragment,o),$(Bl.$$.fragment,o),$(sr.$$.fragment,o),$(rr.$$.fragment,o),$(ar.$$.fragment,o),$(El.$$.fragment,o),$(Ml.$$.fragment,o),$(lr.$$.fragment,o),$(jl.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(Cl.$$.fragment,o),$(Nl.$$.fragment,o),$(hr.$$.fragment,o),$(Ll.$$.fragment,o),$(mr.$$.fragment,o),$(fr.$$.fragment,o),$(Dl.$$.fragment,o),$(Sl.$$.fragment,o),$(Ul.$$.fragment,o),$(gr.$$.fragment,o),$(Vl.$$.fragment,o),$(Ql.$$.fragment,o),$(br.$$.fragment,o),$(Yl.$$.fragment,o),$(kr.$$.fragment,o),$(Tr.$$.fragment,o),$(yr.$$.fragment,o),$(Zl.$$.fragment,o),$(ed.$$.fragment,o),$(wr.$$.fragment,o),$(rd.$$.fragment,o),$($r.$$.fragment,o),$(xr.$$.fragment,o),$(ad.$$.fragment,o),$(id.$$.fragment,o),$(Br.$$.fragment,o),$(pd.$$.fragment,o),$(Er.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$(hd.$$.fragment,o),$(md.$$.fragment,o),$(qr.$$.fragment,o),$(_d.$$.fragment,o),$(jr.$$.fragment,o),$(Cr.$$.fragment,o),$(bd.$$.fragment,o),$(kd.$$.fragment,o),$(Or.$$.fragment,o),$(wd.$$.fragment,o),$(Ir.$$.fragment,o),$(Ar.$$.fragment,o),$(Lr.$$.fragment,o),$($d.$$.fragment,o),$(xd.$$.fragment,o),$(Sr.$$.fragment,o),$(Md.$$.fragment,o),$(Ur.$$.fragment,o),$(Wr.$$.fragment,o),$(Hr.$$.fragment,o),$(zd.$$.fragment,o),$(Pd.$$.fragment,o),$(Ld.$$.fragment,o),$(Vr.$$.fragment,o),$(Qr.$$.fragment,o),$(Dd.$$.fragment,o),$(Sd.$$.fragment,o),$(Jd.$$.fragment,o),$(Jr.$$.fragment,o),$(Gr.$$.fragment,o),$(Gd.$$.fragment,o),$(Xd.$$.fragment,o),$(rc.$$.fragment,o),$(Yr.$$.fragment,o),$(Zr.$$.fragment,o),$(ac.$$.fragment,o),$(ic.$$.fragment,o),$(gc.$$.fragment,o),$(ta.$$.fragment,o),$(oa.$$.fragment,o),$(_c.$$.fragment,o),$(bc.$$.fragment,o),$(Bc.$$.fragment,o),$(sa.$$.fragment,o),$(ra.$$.fragment,o),$(Ec.$$.fragment,o),$(Mc.$$.fragment,o),$(Ic.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(Ac.$$.fragment,o),$(Lc.$$.fragment,o),$(Qc.$$.fragment,o),$(ca.$$.fragment,o),$(pa.$$.fragment,o),$(Kc.$$.fragment,o),$(Jc.$$.fragment,o),$(np.$$.fragment,o),$(ma.$$.fragment,o),$(fa.$$.fragment,o),$(sp.$$.fragment,o),$(rp.$$.fragment,o),$(mp.$$.fragment,o),$(ga.$$.fragment,o),$(_a.$$.fragment,o),Lk=!0)},o(o){x(l.$$.fragment,o),x(re.$$.fragment,o),x(Me.$$.fragment,o),x(Ra.$$.fragment,o),x(_s.$$.fragment,o),x(Qa.$$.fragment,o),x(Ka.$$.fragment,o),x(Ga.$$.fragment,o),x(Ya.$$.fragment,o),x(ei.$$.fragment,o),x(Ts.$$.fragment,o),x(ti.$$.fragment,o),x(oi.$$.fragment,o),x(ni.$$.fragment,o),x(ai.$$.fragment,o),x(li.$$.fragment,o),x(vs.$$.fragment,o),x(di.$$.fragment,o),x(ci.$$.fragment,o),x(hi.$$.fragment,o),x($s.$$.fragment,o),x(fi.$$.fragment,o),x(xs.$$.fragment,o),x(ui.$$.fragment,o),x(gi.$$.fragment,o),x(bi.$$.fragment,o),x(Ti.$$.fragment,o),x(vi.$$.fragment,o),x(wi.$$.fragment,o),x($i.$$.fragment,o),x(zi.$$.fragment,o),x(Ms.$$.fragment,o),x(zs.$$.fragment,o),x(Pi.$$.fragment,o),x(qi.$$.fragment,o),x(Oi.$$.fragment,o),x(qs.$$.fragment,o),x(js.$$.fragment,o),x(Ii.$$.fragment,o),x(Ai.$$.fragment,o),x(Wi.$$.fragment,o),x(Ns.$$.fragment,o),x(Os.$$.fragment,o),x(Hi.$$.fragment,o),x(Ri.$$.fragment,o),x(Gi.$$.fragment,o),x(As.$$.fragment,o),x(Ls.$$.fragment,o),x(Ds.$$.fragment,o),x(Xi.$$.fragment,o),x(Yi.$$.fragment,o),x(nl.$$.fragment,o),x(Us.$$.fragment,o),x(Ws.$$.fragment,o),x(sl.$$.fragment,o),x(rl.$$.fragment,o),x(dl.$$.fragment,o),x(Rs.$$.fragment,o),x(Vs.$$.fragment,o),x(Qs.$$.fragment,o),x(Ks.$$.fragment,o),x(Js.$$.fragment,o),x(cl.$$.fragment,o),x(pl.$$.fragment,o),x(ul.$$.fragment,o),x(Xs.$$.fragment,o),x(Ys.$$.fragment,o),x(gl.$$.fragment,o),x(_l.$$.fragment,o),x(yl.$$.fragment,o),x(er.$$.fragment,o),x(tr.$$.fragment,o),x(or.$$.fragment,o),x(vl.$$.fragment,o),x(wl.$$.fragment,o),x(Bl.$$.fragment,o),x(sr.$$.fragment,o),x(rr.$$.fragment,o),x(ar.$$.fragment,o),x(El.$$.fragment,o),x(Ml.$$.fragment,o),x(lr.$$.fragment,o),x(jl.$$.fragment,o),x(dr.$$.fragment,o),x(cr.$$.fragment,o),x(Cl.$$.fragment,o),x(Nl.$$.fragment,o),x(hr.$$.fragment,o),x(Ll.$$.fragment,o),x(mr.$$.fragment,o),x(fr.$$.fragment,o),x(Dl.$$.fragment,o),x(Sl.$$.fragment,o),x(Ul.$$.fragment,o),x(gr.$$.fragment,o),x(Vl.$$.fragment,o),x(Ql.$$.fragment,o),x(br.$$.fragment,o),x(Yl.$$.fragment,o),x(kr.$$.fragment,o),x(Tr.$$.fragment,o),x(yr.$$.fragment,o),x(Zl.$$.fragment,o),x(ed.$$.fragment,o),x(wr.$$.fragment,o),x(rd.$$.fragment,o),x($r.$$.fragment,o),x(xr.$$.fragment,o),x(ad.$$.fragment,o),x(id.$$.fragment,o),x(Br.$$.fragment,o),x(pd.$$.fragment,o),x(Er.$$.fragment,o),x(Mr.$$.fragment,o),x(zr.$$.fragment,o),x(hd.$$.fragment,o),x(md.$$.fragment,o),x(qr.$$.fragment,o),x(_d.$$.fragment,o),x(jr.$$.fragment,o),x(Cr.$$.fragment,o),x(bd.$$.fragment,o),x(kd.$$.fragment,o),x(Or.$$.fragment,o),x(wd.$$.fragment,o),x(Ir.$$.fragment,o),x(Ar.$$.fragment,o),x(Lr.$$.fragment,o),x($d.$$.fragment,o),x(xd.$$.fragment,o),x(Sr.$$.fragment,o),x(Md.$$.fragment,o),x(Ur.$$.fragment,o),x(Wr.$$.fragment,o),x(Hr.$$.fragment,o),x(zd.$$.fragment,o),x(Pd.$$.fragment,o),x(Ld.$$.fragment,o),x(Vr.$$.fragment,o),x(Qr.$$.fragment,o),x(Dd.$$.fragment,o),x(Sd.$$.fragment,o),x(Jd.$$.fragment,o),x(Jr.$$.fragment,o),x(Gr.$$.fragment,o),x(Gd.$$.fragment,o),x(Xd.$$.fragment,o),x(rc.$$.fragment,o),x(Yr.$$.fragment,o),x(Zr.$$.fragment,o),x(ac.$$.fragment,o),x(ic.$$.fragment,o),x(gc.$$.fragment,o),x(ta.$$.fragment,o),x(oa.$$.fragment,o),x(_c.$$.fragment,o),x(bc.$$.fragment,o),x(Bc.$$.fragment,o),x(sa.$$.fragment,o),x(ra.$$.fragment,o),x(Ec.$$.fragment,o),x(Mc.$$.fragment,o),x(Ic.$$.fragment,o),x(ia.$$.fragment,o),x(la.$$.fragment,o),x(Ac.$$.fragment,o),x(Lc.$$.fragment,o),x(Qc.$$.fragment,o),x(ca.$$.fragment,o),x(pa.$$.fragment,o),x(Kc.$$.fragment,o),x(Jc.$$.fragment,o),x(np.$$.fragment,o),x(ma.$$.fragment,o),x(fa.$$.fragment,o),x(sp.$$.fragment,o),x(rp.$$.fragment,o),x(mp.$$.fragment,o),x(ga.$$.fragment,o),x(_a.$$.fragment,o),Lk=!1},d(o){t(d),o&&t(_),o&&t(m),F(l),o&&t(X),o&&t(z),F(re),o&&t(me),o&&t(J),o&&t(j),o&&t(ie),o&&t(fe),o&&t(le),o&&t(ue),o&&t(q),o&&t(ge),o&&t(de),o&&t(_e),o&&t(se),o&&t(M),o&&t(K),o&&t(W),o&&t(xe),F(Me),o&&t(Eb),o&&t(Nt),F(Ra),F(_s),o&&t(Mb),o&&t(Jo),F(Qa),o&&t(zb),o&&t(Ne),F(Ka),F(Ga),F(Ya),F(ei),F(Ts),F(ti),o&&t(Pb),o&&t(Xo),F(oi),o&&t(qb),o&&t(rt),F(ni),F(ai),F(li),F(vs),o&&t(jb),o&&t(Zo),F(di),o&&t(Cb),o&&t(at),F(ci),F(hi),F($s),F(fi),F(xs),o&&t(Nb),o&&t(on),F(ui),o&&t(Ob),o&&t(nn),F(gi),o&&t(Ib),o&&t(sn),F(bi),o&&t(Ab),o&&t(mo),F(Ti),F(vi),o&&t(Lb),o&&t(rn),F(wi),o&&t(Db),o&&t(Oe),F($i),F(zi),F(Ms),F(zs),o&&t(Sb),o&&t(ln),F(Pi),o&&t(Ub),o&&t(it),F(qi),F(Oi),F(qs),F(js),o&&t(Wb),o&&t(pn),F(Ii),o&&t(Hb),o&&t(lt),F(Ai),F(Wi),F(Ns),F(Os),o&&t(Rb),o&&t(mn),F(Hi),o&&t(Vb),o&&t(dt),F(Ri),F(Gi),F(As),F(Ls),F(Ds),o&&t(Qb),o&&t(un),F(Xi),o&&t(Kb),o&&t(ct),F(Yi),F(nl),F(Us),F(Ws),o&&t(Jb),o&&t(_n),F(sl),o&&t(Gb),o&&t(pt),F(rl),F(dl),F(Rs),F(Vs),F(Qs),F(Ks),F(Js),o&&t(Xb),o&&t(kn),F(cl),o&&t(Yb),o&&t(ht),F(pl),F(ul),F(Xs),F(Ys),o&&t(Zb),o&&t(yn),F(gl),o&&t(ek),o&&t(mt),F(_l),F(yl),F(er),F(tr),F(or),o&&t(tk),o&&t(wn),F(vl),o&&t(ok),o&&t(ft),F(wl),F(Bl),F(sr),F(rr),F(ar),o&&t(nk),o&&t(Fn),F(El),o&&t(sk),o&&t(Je),F(Ml),F(lr),F(jl),F(dr),F(cr),o&&t(rk),o&&t(En),F(Cl),o&&t(ak),o&&t(Ge),F(Nl),F(hr),F(Ll),F(mr),F(fr),o&&t(ik),o&&t(Pn),F(Dl),o&&t(lk),o&&t(qn),F(Sl),F(Ul),F(gr),o&&t(dk),o&&t(jn),F(Vl),o&&t(ck),o&&t(Xe),F(Ql),F(br),F(Yl),F(kr),F(Tr),F(yr),o&&t(pk),o&&t(Nn),F(Zl),o&&t(hk),o&&t(Ye),F(ed),F(wr),F(rd),F($r),F(xr),o&&t(mk),o&&t(In),F(ad),o&&t(fk),o&&t(Ze),F(id),F(Br),F(pd),F(Er),F(Mr),F(zr),o&&t(uk),o&&t(Ln),F(hd),o&&t(gk),o&&t(et),F(md),F(qr),F(_d),F(jr),F(Cr),o&&t(_k),o&&t(Sn),F(bd),o&&t(bk),o&&t(tt),F(kd),F(Or),F(wd),F(Ir),F(Ar),F(Lr),o&&t(kk),o&&t(Wn),F($d),o&&t(Tk),o&&t(ot),F(xd),F(Sr),F(Md),F(Ur),F(Wr),F(Hr),o&&t(yk),o&&t(Vn),F(zd),o&&t(vk),o&&t(Ae),F(Pd),F(Ld),F(Vr),F(Qr),o&&t(wk),o&&t(Kn),F(Dd),o&&t($k),o&&t(Le),F(Sd),F(Jd),F(Jr),F(Gr),o&&t(xk),o&&t(Xn),F(Gd),o&&t(Fk),o&&t(De),F(Xd),F(rc),F(Yr),F(Zr),o&&t(Bk),o&&t(Zn),F(ac),o&&t(Ek),o&&t(Se),F(ic),F(gc),F(ta),F(oa),o&&t(Mk),o&&t(ts),F(_c),o&&t(zk),o&&t(Ue),F(bc),F(Bc),F(sa),F(ra),o&&t(Pk),o&&t(ns),F(Ec),o&&t(qk),o&&t(We),F(Mc),F(Ic),F(ia),F(la),o&&t(jk),o&&t(rs),F(Ac),o&&t(Ck),o&&t(He),F(Lc),F(Qc),F(ca),F(pa),o&&t(Nk),o&&t(is),F(Kc),o&&t(Ok),o&&t(Re),F(Jc),F(np),F(ma),F(fa),o&&t(Ik),o&&t(ds),F(sp),o&&t(Ak),o&&t(Ve),F(rp),F(mp),F(ga),F(_a)}}}const _I={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.TFBertTokenizer",title:"TFBertTokenizer"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForCausalLM",title:"FlaxBertForCausalLM"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function bI(B){return Q7(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xI extends W7{constructor(d){super();H7(this,d,bI,gI,R7,{})}}export{xI as default,_I as metadata};
