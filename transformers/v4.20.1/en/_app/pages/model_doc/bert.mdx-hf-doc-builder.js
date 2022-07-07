import{S as E8,i as z8,s as P8,e as r,k as c,w as y,t as n,M as q8,c as a,d as t,m as p,a as i,x as T,h as s,b as u,G as e,g as b,y as w,q as $,o as x,B as F,v as j8,L as ne}from"../../chunks/vendor-hf-doc-builder.js";import{T as we}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as se}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as oe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function C8(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertModel, BertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Examples:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function N8(B){let d,_,h,f,g;return f=new se({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"pair mask has the following format:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function O8(B){let d,_,h,f,g;return f=new se({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"pair mask has the following format:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function A8(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function I8(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, BertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function L8(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function D8(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, BertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function S8(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function U8(B){let d,_,h,f,g;return f=new se({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function W8(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function H8(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, BertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function R8(B){let d,_;return d=new se({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function Q8(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function V8(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, BertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function K8(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function J8(B){let d,_,h,f,g;return f=new se({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of single-label classification:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example of single-label classification:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function G8(B){let d,_;return d=new se({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function X8(B){let d,_,h,f,g;return f=new se({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of multi-label classification:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example of multi-label classification:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function Y8(B){let d,_;return d=new se({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function Z8(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function eO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, BertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function tO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function oO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, BertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function nO(B){let d,_;return d=new se({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function sO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function rO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function aO(B){let d,_;return d=new se({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function iO(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ve,D,ke,fe,J,O,ae,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,Te,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ve=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ke=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=a(k,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(k),f=a(k,"UL",{});var K=i(f);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(k),z=a(k,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ve=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ke=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(k),O=a(k,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(k),P=a(k,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);me=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);Te=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(k,E){b(k,d,E),e(d,_),b(k,h,E),b(k,f,E),e(f,g),e(g,l),e(f,m),e(f,M),e(M,be),b(k,X,E),b(k,z,E),e(z,ee),e(z,L),e(L,re),e(z,ve),e(z,D),e(D,ke),e(z,fe),b(k,J,E),b(k,O,E),e(O,ae),b(k,Y,E),b(k,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,Te),e(N,V),e(V,pe)},d(k){k&&t(d),k&&t(h),k&&t(f),k&&t(X),k&&t(z),k&&t(J),k&&t(O),k&&t(Y),k&&t(P)}}}function lO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function dO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, TFBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function cO(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ve,D,ke,fe,J,O,ae,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,Te,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ve=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ke=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=a(k,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(k),f=a(k,"UL",{});var K=i(f);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(k),z=a(k,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ve=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ke=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(k),O=a(k,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(k),P=a(k,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);me=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);Te=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(k,E){b(k,d,E),e(d,_),b(k,h,E),b(k,f,E),e(f,g),e(g,l),e(f,m),e(f,M),e(M,be),b(k,X,E),b(k,z,E),e(z,ee),e(z,L),e(L,re),e(z,ve),e(z,D),e(D,ke),e(z,fe),b(k,J,E),b(k,O,E),e(O,ae),b(k,Y,E),b(k,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,Te),e(N,V),e(V,pe)},d(k){k&&t(d),k&&t(h),k&&t(f),k&&t(X),k&&t(z),k&&t(J),k&&t(O),k&&t(Y),k&&t(P)}}}function pO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function hO(B){let d,_,h,f,g;return f=new se({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits, seq_relationship_logits = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Examples:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function fO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function mO(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ve,D,ke,fe,J,O,ae,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,Te,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ve=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ke=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=a(k,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(k),f=a(k,"UL",{});var K=i(f);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(k),z=a(k,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ve=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ke=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(k),O=a(k,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(k),P=a(k,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);me=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);Te=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(k,E){b(k,d,E),e(d,_),b(k,h,E),b(k,f,E),e(f,g),e(g,l),e(f,m),e(f,M),e(M,be),b(k,X,E),b(k,z,E),e(z,ee),e(z,L),e(L,re),e(z,ve),e(z,D),e(D,ke),e(z,fe),b(k,J,E),b(k,O,E),e(O,ae),b(k,Y,E),b(k,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,Te),e(N,V),e(V,pe)},d(k){k&&t(d),k&&t(h),k&&t(f),k&&t(X),k&&t(z),k&&t(J),k&&t(O),k&&t(Y),k&&t(P)}}}function uO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function gO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, TFBertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function _O(B){let d,_;return d=new se({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function bO(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ve,D,ke,fe,J,O,ae,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,Te,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ve=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ke=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=a(k,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(k),f=a(k,"UL",{});var K=i(f);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(k),z=a(k,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ve=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ke=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(k),O=a(k,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(k),P=a(k,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);me=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);Te=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(k,E){b(k,d,E),e(d,_),b(k,h,E),b(k,f,E),e(f,g),e(g,l),e(f,m),e(f,M),e(M,be),b(k,X,E),b(k,z,E),e(z,ee),e(z,L),e(L,re),e(z,ve),e(z,D),e(D,ke),e(z,fe),b(k,J,E),b(k,O,E),e(O,ae),b(k,Y,E),b(k,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,Te),e(N,V),e(V,pe)},d(k){k&&t(d),k&&t(h),k&&t(f),k&&t(X),k&&t(z),k&&t(J),k&&t(O),k&&t(Y),k&&t(P)}}}function vO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function kO(B){let d,_,h,f,g;return f=new se({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Examples:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function yO(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ve,D,ke,fe,J,O,ae,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,Te,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ve=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ke=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=a(k,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(k),f=a(k,"UL",{});var K=i(f);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(k),z=a(k,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ve=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ke=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(k),O=a(k,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(k),P=a(k,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);me=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);Te=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(k,E){b(k,d,E),e(d,_),b(k,h,E),b(k,f,E),e(f,g),e(g,l),e(f,m),e(f,M),e(M,be),b(k,X,E),b(k,z,E),e(z,ee),e(z,L),e(L,re),e(z,ve),e(z,D),e(D,ke),e(z,fe),b(k,J,E),b(k,O,E),e(O,ae),b(k,Y,E),b(k,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,Te),e(N,V),e(V,pe)},d(k){k&&t(d),k&&t(h),k&&t(f),k&&t(X),k&&t(z),k&&t(J),k&&t(O),k&&t(Y),k&&t(P)}}}function TO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function wO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, TFBertForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function $O(B){let d,_;return d=new se({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function xO(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ve,D,ke,fe,J,O,ae,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,Te,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ve=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ke=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=a(k,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(k),f=a(k,"UL",{});var K=i(f);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(k),z=a(k,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ve=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ke=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(k),O=a(k,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(k),P=a(k,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);me=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);Te=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(k,E){b(k,d,E),e(d,_),b(k,h,E),b(k,f,E),e(f,g),e(g,l),e(f,m),e(f,M),e(M,be),b(k,X,E),b(k,z,E),e(z,ee),e(z,L),e(L,re),e(z,ve),e(z,D),e(D,ke),e(z,fe),b(k,J,E),b(k,O,E),e(O,ae),b(k,Y,E),b(k,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,Te),e(N,V),e(V,pe)},d(k){k&&t(d),k&&t(h),k&&t(f),k&&t(X),k&&t(z),k&&t(J),k&&t(O),k&&t(Y),k&&t(P)}}}function FO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function BO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, TFBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function MO(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ve,D,ke,fe,J,O,ae,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,Te,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ve=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ke=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=a(k,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(k),f=a(k,"UL",{});var K=i(f);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(k),z=a(k,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ve=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ke=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(k),O=a(k,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(k),P=a(k,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);me=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);Te=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(k,E){b(k,d,E),e(d,_),b(k,h,E),b(k,f,E),e(f,g),e(g,l),e(f,m),e(f,M),e(M,be),b(k,X,E),b(k,z,E),e(z,ee),e(z,L),e(L,re),e(z,ve),e(z,D),e(D,ke),e(z,fe),b(k,J,E),b(k,O,E),e(O,ae),b(k,Y,E),b(k,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,Te),e(N,V),e(V,pe)},d(k){k&&t(d),k&&t(h),k&&t(f),k&&t(X),k&&t(z),k&&t(J),k&&t(O),k&&t(Y),k&&t(P)}}}function EO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function zO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, TFBertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function PO(B){let d,_;return d=new se({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function qO(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ve,D,ke,fe,J,O,ae,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,Te,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ve=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ke=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=a(k,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(k),f=a(k,"UL",{});var K=i(f);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(k),z=a(k,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ve=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ke=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(k),O=a(k,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(k),P=a(k,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);me=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);Te=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(k,E){b(k,d,E),e(d,_),b(k,h,E),b(k,f,E),e(f,g),e(g,l),e(f,m),e(f,M),e(M,be),b(k,X,E),b(k,z,E),e(z,ee),e(z,L),e(L,re),e(z,ve),e(z,D),e(D,ke),e(z,fe),b(k,J,E),b(k,O,E),e(O,ae),b(k,Y,E),b(k,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,Te),e(N,V),e(V,pe)},d(k){k&&t(d),k&&t(h),k&&t(f),k&&t(X),k&&t(z),k&&t(J),k&&t(O),k&&t(Y),k&&t(P)}}}function jO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function CO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, TFBertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function NO(B){let d,_;return d=new se({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function OO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function AO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function IO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function LO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function DO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function SO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function UO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function WO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForMaskedLM

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function HO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function RO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForNextSentencePrediction

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function QO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function VO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForSequenceClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function KO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function JO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function GO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function XO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForTokenClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForTokenClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function YO(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function ZO(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function e7(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ve,D,ke,fe,J,O,ae,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,Te,V,pe,k,E,K,ze,Be,A,Pe,Me,qe,I,W,$e,Fe,U,Ee,je,he,Ce,Z_,Ct,Na,Zk,po,ey,hp,ty,oy,fp,ny,sy,Oa,ry,ay,iy,Wo,ly,mp,dy,cy,up,py,hy,fy,ds,eb,Ho,cs,Zh,Aa,my,ef,uy,tb,Ne,Ia,gy,tf,_y,by,La,vy,gp,ky,yy,Ty,xo,Da,wy,of,$y,xy,Sa,_p,Fy,nf,By,My,bp,Ey,sf,zy,Py,ps,Ua,qy,Wa,jy,rf,Cy,Ny,Oy,Ot,Ha,Ay,af,Iy,Ly,hs,Dy,Ro,Sy,lf,Uy,Wy,df,Hy,Ry,Qy,vp,Ra,ob,Qo,fs,cf,Qa,Vy,pf,Ky,nb,rt,Va,Jy,Ka,Gy,hf,Xy,Yy,Zy,Ja,eT,kp,tT,oT,nT,Fo,Ga,sT,ff,rT,aT,Xa,yp,iT,mf,lT,dT,Tp,cT,uf,pT,hT,At,Ya,fT,gf,mT,uT,ms,gT,Vo,_T,_f,bT,vT,bf,kT,yT,sb,Ko,us,vf,Za,TT,kf,wT,rb,Jo,ei,$T,ti,xT,wp,FT,BT,ab,Go,oi,MT,ni,ET,$p,zT,PT,ib,ho,si,qT,ri,jT,xp,CT,NT,OT,gs,ai,AT,yf,IT,lb,Xo,_s,Tf,ii,LT,wf,DT,db,Oe,li,ST,$f,UT,WT,di,HT,Fp,RT,QT,VT,ci,KT,pi,JT,GT,XT,hi,YT,fi,ZT,e1,t1,Ke,o1,xf,n1,s1,Ff,r1,a1,Bf,i1,l1,Mf,d1,c1,Ef,p1,h1,zf,f1,m1,u1,It,mi,g1,Yo,_1,Bp,b1,v1,Pf,k1,y1,T1,bs,w1,vs,cb,Zo,ks,qf,ui,$1,jf,x1,pb,at,gi,F1,en,B1,Cf,M1,E1,Nf,z1,P1,q1,_i,j1,Mp,C1,N1,O1,bi,A1,vi,I1,L1,D1,Lt,ki,S1,tn,U1,Ep,W1,H1,Of,R1,Q1,V1,ys,K1,Ts,hb,on,ws,Af,yi,J1,If,G1,fb,it,Ti,X1,wi,Y1,Lf,Z1,ew,tw,$i,ow,zp,nw,sw,rw,xi,aw,Fi,iw,lw,dw,Dt,Bi,cw,nn,pw,Pp,hw,fw,Df,mw,uw,gw,$s,_w,xs,mb,sn,Fs,Sf,Mi,bw,Uf,vw,ub,lt,Ei,kw,zi,yw,Wf,Tw,ww,$w,Pi,xw,qp,Fw,Bw,Mw,qi,Ew,ji,zw,Pw,qw,mt,Ci,jw,rn,Cw,jp,Nw,Ow,Hf,Aw,Iw,Lw,Bs,Dw,Ms,Sw,Es,gb,an,zs,Rf,Ni,Uw,Qf,Ww,_b,dt,Oi,Hw,Ai,Rw,Vf,Qw,Vw,Kw,Ii,Jw,Cp,Gw,Xw,Yw,Li,Zw,Di,e2,t2,o2,St,Si,n2,ln,s2,Np,r2,a2,Kf,i2,l2,d2,Ps,c2,qs,bb,dn,js,Jf,Ui,p2,Gf,h2,vb,ct,Wi,f2,Xf,m2,u2,Hi,g2,Op,_2,b2,v2,Ri,k2,Qi,y2,T2,w2,Ve,Vi,$2,cn,x2,Ap,F2,B2,Yf,M2,E2,z2,Cs,P2,Ns,q2,Os,j2,As,C2,Is,kb,pn,Ls,Zf,Ki,N2,em,O2,yb,pt,Ji,A2,tm,I2,L2,Gi,D2,Ip,S2,U2,W2,Xi,H2,Yi,R2,Q2,V2,Ut,Zi,K2,hn,J2,Lp,G2,X2,om,Y2,Z2,e$,Ds,t$,Ss,Tb,fn,Us,nm,el,o$,sm,n$,wb,ht,tl,s$,rm,r$,a$,ol,i$,Dp,l$,d$,c$,nl,p$,sl,h$,f$,m$,ut,rl,u$,mn,g$,Sp,_$,b$,am,v$,k$,y$,Ws,T$,Hs,w$,Rs,$b,un,Qs,im,al,$$,lm,x$,xb,ft,il,F$,gn,B$,dm,M$,E$,cm,z$,P$,q$,ll,j$,Up,C$,N$,O$,dl,A$,cl,I$,L$,D$,gt,pl,S$,_n,U$,Wp,W$,H$,pm,R$,Q$,V$,Vs,K$,Ks,J$,Js,Fb,bn,Gs,hm,hl,G$,fm,X$,Bb,Je,fl,Y$,mm,Z$,e0,ml,t0,Hp,o0,n0,s0,ul,r0,gl,a0,i0,l0,Xs,d0,Wt,_l,c0,vn,p0,Rp,h0,f0,um,m0,u0,g0,Ys,_0,Zs,Mb,kn,er,gm,bl,b0,_m,v0,Eb,Ge,vl,k0,yn,y0,bm,T0,w0,vm,$0,x0,F0,kl,B0,Qp,M0,E0,z0,yl,P0,Tl,q0,j0,C0,tr,N0,Ht,wl,O0,Tn,A0,Vp,I0,L0,km,D0,S0,U0,or,W0,nr,zb,wn,sr,ym,$l,H0,Tm,R0,Pb,$n,xl,Q0,_t,Fl,V0,Ae,K0,wm,J0,G0,$m,X0,Y0,xm,Z0,ex,Fm,tx,ox,Bm,nx,sx,Mm,rx,ax,Em,ix,lx,dx,Bl,Ml,cx,zm,px,hx,fx,El,mx,Pm,ux,gx,_x,G,bx,qm,vx,kx,jm,yx,Tx,Cm,wx,$x,Nm,xx,Fx,Om,Bx,Mx,Am,Ex,zx,Im,Px,qx,Lm,jx,Cx,Dm,Nx,Ox,Sm,Ax,Ix,Um,Lx,Dx,Wm,Sx,Ux,Hm,Wx,Hx,Rm,Rx,Qx,Qm,Vx,Kx,Vm,Jx,Gx,Km,Xx,Yx,Jm,Zx,eF,Gm,tF,oF,Xm,nF,sF,rF,rr,qb,xn,ar,Ym,zl,aF,Zm,iF,jb,Xe,Pl,lF,ql,dF,eu,cF,pF,hF,jl,fF,Kp,mF,uF,gF,Cl,_F,Nl,bF,vF,kF,ir,yF,bt,Ol,TF,Fn,wF,Jp,$F,xF,tu,FF,BF,MF,lr,EF,dr,zF,cr,Cb,Bn,pr,ou,Al,PF,nu,qF,Nb,Ye,Il,jF,Ll,CF,su,NF,OF,AF,Dl,IF,Gp,LF,DF,SF,Sl,UF,Ul,WF,HF,RF,hr,QF,Rt,Wl,VF,Mn,KF,Xp,JF,GF,ru,XF,YF,ZF,fr,e4,mr,Ob,En,ur,au,Hl,t4,iu,o4,Ab,Ze,Rl,n4,lu,s4,r4,Ql,a4,Yp,i4,l4,d4,Vl,c4,Kl,p4,h4,f4,gr,m4,vt,Jl,u4,zn,g4,Zp,_4,b4,du,v4,k4,y4,_r,T4,br,w4,vr,Ib,Pn,kr,cu,Gl,$4,pu,x4,Lb,et,Xl,F4,hu,B4,M4,Yl,E4,eh,z4,P4,q4,Zl,j4,ed,C4,N4,O4,yr,A4,Qt,td,I4,qn,L4,th,D4,S4,fu,U4,W4,H4,Tr,R4,wr,Db,jn,$r,mu,od,Q4,uu,V4,Sb,tt,nd,K4,gu,J4,G4,sd,X4,oh,Y4,Z4,eB,rd,tB,ad,oB,nB,sB,xr,rB,kt,id,aB,Cn,iB,nh,lB,dB,_u,cB,pB,hB,Fr,fB,Br,mB,Mr,Ub,Nn,Er,bu,ld,uB,vu,gB,Wb,ot,dd,_B,On,bB,ku,vB,kB,yu,yB,TB,wB,cd,$B,sh,xB,FB,BB,pd,MB,hd,EB,zB,PB,zr,qB,yt,fd,jB,An,CB,rh,NB,OB,Tu,AB,IB,LB,Pr,DB,qr,SB,jr,Hb,In,Cr,wu,md,UB,$u,WB,Rb,Ie,ud,HB,xu,RB,QB,gd,VB,ah,KB,JB,GB,_d,XB,bd,YB,ZB,eM,Fu,tM,oM,fo,Bu,vd,nM,sM,Mu,kd,rM,aM,Eu,yd,iM,lM,zu,Td,dM,cM,Vt,wd,pM,Ln,hM,Pu,fM,mM,qu,uM,gM,_M,Nr,bM,Or,Qb,Dn,Ar,ju,$d,vM,Cu,kM,Vb,Le,xd,yM,Sn,TM,Nu,wM,$M,Ou,xM,FM,BM,Fd,MM,ih,EM,zM,PM,Bd,qM,Md,jM,CM,NM,Au,OM,AM,mo,Iu,Ed,IM,LM,Lu,zd,DM,SM,Du,Pd,UM,WM,Su,qd,HM,RM,Kt,jd,QM,Un,VM,Uu,KM,JM,Wu,GM,XM,YM,Ir,ZM,Lr,Kb,Wn,Dr,Hu,Cd,eE,Ru,tE,Jb,De,Nd,oE,Qu,nE,sE,Od,rE,lh,aE,iE,lE,Ad,dE,Id,cE,pE,hE,Vu,fE,mE,uo,Ku,Ld,uE,gE,Ju,Dd,_E,bE,Gu,Sd,vE,kE,Xu,Ud,yE,TE,Jt,Wd,wE,Hn,$E,Yu,xE,FE,Zu,BE,ME,EE,Sr,zE,Ur,Gb,Rn,Wr,eg,Hd,PE,tg,qE,Xb,Se,Rd,jE,Qd,CE,og,NE,OE,AE,Vd,IE,dh,LE,DE,SE,Kd,UE,Jd,WE,HE,RE,ng,QE,VE,go,sg,Gd,KE,JE,rg,Xd,GE,XE,ag,Yd,YE,ZE,ig,Zd,ez,tz,Gt,ec,oz,Qn,nz,lg,sz,rz,dg,az,iz,lz,Hr,dz,Rr,Yb,Vn,Qr,cg,tc,cz,pg,pz,Zb,Ue,oc,hz,nc,fz,hg,mz,uz,gz,sc,_z,ch,bz,vz,kz,rc,yz,ac,Tz,wz,$z,fg,xz,Fz,_o,mg,ic,Bz,Mz,ug,lc,Ez,zz,gg,dc,Pz,qz,_g,cc,jz,Cz,Xt,pc,Nz,Kn,Oz,bg,Az,Iz,vg,Lz,Dz,Sz,Vr,Uz,Kr,ev,Jn,Jr,kg,hc,Wz,yg,Hz,tv,We,fc,Rz,Tg,Qz,Vz,mc,Kz,ph,Jz,Gz,Xz,uc,Yz,gc,Zz,eP,tP,wg,oP,nP,bo,$g,_c,sP,rP,xg,bc,aP,iP,Fg,vc,lP,dP,Bg,kc,cP,pP,Yt,yc,hP,Gn,fP,Mg,mP,uP,Eg,gP,_P,bP,Gr,vP,Xr,ov,Xn,Yr,zg,Tc,kP,Pg,yP,nv,He,wc,TP,qg,wP,$P,$c,xP,hh,FP,BP,MP,xc,EP,Fc,zP,PP,qP,jg,jP,CP,vo,Cg,Bc,NP,OP,Ng,Mc,AP,IP,Og,Ec,LP,DP,Ag,zc,SP,UP,Zt,Pc,WP,Yn,HP,Ig,RP,QP,Lg,VP,KP,JP,Zr,GP,ea,sv,Zn,ta,Dg,qc,XP,Sg,YP,rv,Re,jc,ZP,Ug,eq,tq,Cc,oq,fh,nq,sq,rq,Nc,aq,Oc,iq,lq,dq,Wg,cq,pq,ko,Hg,Ac,hq,fq,Rg,Ic,mq,uq,Qg,Lc,gq,_q,Vg,Dc,bq,vq,eo,Sc,kq,es,yq,Kg,Tq,wq,Jg,$q,xq,Fq,oa,Bq,na,av,ts,sa,Gg,Uc,Mq,Xg,Eq,iv,Qe,Wc,zq,os,Pq,Yg,qq,jq,Zg,Cq,Nq,Oq,Hc,Aq,mh,Iq,Lq,Dq,Rc,Sq,Qc,Uq,Wq,Hq,e_,Rq,Qq,yo,t_,Vc,Vq,Kq,o_,Kc,Jq,Gq,n_,Jc,Xq,Yq,s_,Gc,Zq,ej,to,Xc,tj,ns,oj,r_,nj,sj,a_,rj,aj,ij,ra,lj,aa,lv;return l=new xe({}),re=new xe({}),Ee=new xe({}),Na=new C({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.BertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/configuration_bert.py#L72"}}),ds=new oe({props:{anchor:"transformers.BertConfig.example",$$slots:{default:[C8]},$$scope:{ctx:B}}}),Aa=new xe({}),Ia=new C({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/tokenization_bert.py#L137"}}),Da=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ua=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ha=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/tokenization_bert.py#L321",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hs=new oe({props:{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[N8]},$$scope:{ctx:B}}}),Ra=new C({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/tokenization_bert.py#L350"}}),Qa=new xe({}),Va=new C({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/tokenization_bert_fast.py#L161"}}),Ga=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/tokenization_bert_fast.py#L249",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ya=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/tokenization_bert_fast.py#L273",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ms=new oe({props:{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[O8]},$$scope:{ctx:B}}}),Za=new xe({}),ei=new C({props:{name:"class transformers.models.bert.modeling_bert.BertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L767"}}),oi=new C({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L931"}}),si=new C({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L61"}}),ai=new C({props:{name:"replace",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/flax/struct.py#L109"}}),ii=new xe({}),li=new C({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L870"}}),mi=new C({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L909",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bs=new we({props:{$$slots:{default:[A8]},$$scope:{ctx:B}}}),vs=new oe({props:{anchor:"transformers.BertModel.forward.example",$$slots:{default:[I8]},$$scope:{ctx:B}}}),ui=new xe({}),gi=new C({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L1053"}}),ki=new C({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L1069",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ys=new we({props:{$$slots:{default:[L8]},$$scope:{ctx:B}}}),Ts=new oe({props:{anchor:"transformers.BertForPreTraining.forward.example",$$slots:{default:[D8]},$$scope:{ctx:B}}}),yi=new xe({}),Ti=new C({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L1157"}}),Bi=new C({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertLMHeadModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L1180",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$s=new we({props:{$$slots:{default:[S8]},$$scope:{ctx:B}}}),xs=new oe({props:{anchor:"transformers.BertLMHeadModel.forward.example",$$slots:{default:[U8]},$$scope:{ctx:B}}}),Mi=new xe({}),Ei=new C({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L1292"}}),Ci=new C({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L1318",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bs=new we({props:{$$slots:{default:[W8]},$$scope:{ctx:B}}}),Ms=new oe({props:{anchor:"transformers.BertForMaskedLM.forward.example",$$slots:{default:[H8]},$$scope:{ctx:B}}}),Es=new oe({props:{anchor:"transformers.BertForMaskedLM.forward.example-2",$$slots:{default:[R8]},$$scope:{ctx:B}}}),Ni=new xe({}),Oi=new C({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L1405"}}),Si=new C({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L1415",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ps=new we({props:{$$slots:{default:[Q8]},$$scope:{ctx:B}}}),qs=new oe({props:{anchor:"transformers.BertForNextSentencePrediction.forward.example",$$slots:{default:[V8]},$$scope:{ctx:B}}}),Ui=new xe({}),Wi=new C({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L1510"}}),Vi=new C({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L1526",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cs=new we({props:{$$slots:{default:[K8]},$$scope:{ctx:B}}}),Ns=new oe({props:{anchor:"transformers.BertForSequenceClassification.forward.example",$$slots:{default:[J8]},$$scope:{ctx:B}}}),Os=new oe({props:{anchor:"transformers.BertForSequenceClassification.forward.example-2",$$slots:{default:[G8]},$$scope:{ctx:B}}}),As=new oe({props:{anchor:"transformers.BertForSequenceClassification.forward.example-3",$$slots:{default:[X8]},$$scope:{ctx:B}}}),Is=new oe({props:{anchor:"transformers.BertForSequenceClassification.forward.example-4",$$slots:{default:[Y8]},$$scope:{ctx:B}}}),Ki=new xe({}),Ji=new C({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L1614"}}),Zi=new C({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L1628",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ds=new we({props:{$$slots:{default:[Z8]},$$scope:{ctx:B}}}),Ss=new oe({props:{anchor:"transformers.BertForMultipleChoice.forward.example",$$slots:{default:[eO]},$$scope:{ctx:B}}}),el=new xe({}),tl=new C({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L1709"}}),rl=new C({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L1727",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ws=new we({props:{$$slots:{default:[tO]},$$scope:{ctx:B}}}),Hs=new oe({props:{anchor:"transformers.BertForTokenClassification.forward.example",$$slots:{default:[oO]},$$scope:{ctx:B}}}),Rs=new oe({props:{anchor:"transformers.BertForTokenClassification.forward.example-2",$$slots:{default:[nO]},$$scope:{ctx:B}}}),al=new xe({}),il=new C({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L1796"}}),pl=new C({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_bert.py#L1810",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vs=new we({props:{$$slots:{default:[sO]},$$scope:{ctx:B}}}),Ks=new oe({props:{anchor:"transformers.BertForQuestionAnswering.forward.example",$$slots:{default:[rO]},$$scope:{ctx:B}}}),Js=new oe({props:{anchor:"transformers.BertForQuestionAnswering.forward.example-2",$$slots:{default:[aO]},$$scope:{ctx:B}}}),hl=new xe({}),fl=new C({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1058"}}),Xs=new we({props:{$$slots:{default:[iO]},$$scope:{ctx:B}}}),_l=new C({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1064",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ys=new we({props:{$$slots:{default:[lO]},$$scope:{ctx:B}}}),Zs=new oe({props:{anchor:"transformers.TFBertModel.call.example",$$slots:{default:[dO]},$$scope:{ctx:B}}}),bl=new xe({}),vl=new C({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1155"}}),tr=new we({props:{$$slots:{default:[cO]},$$scope:{ctx:B}}}),wl=new C({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1177",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),or=new we({props:{$$slots:{default:[pO]},$$scope:{ctx:B}}}),nr=new oe({props:{anchor:"transformers.TFBertForPreTraining.call.example",$$slots:{default:[hO]},$$scope:{ctx:B}}}),$l=new xe({}),xl=new C({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1364"}}),Fl=new C({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1401",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),rr=new oe({props:{anchor:"transformers.TFBertLMHeadModel.call.example",$$slots:{default:[fO]},$$scope:{ctx:B}}}),zl=new xe({}),Pl=new C({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1272"}}),ir=new we({props:{$$slots:{default:[mO]},$$scope:{ctx:B}}}),Ol=new C({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1300",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),lr=new we({props:{$$slots:{default:[uO]},$$scope:{ctx:B}}}),dr=new oe({props:{anchor:"transformers.TFBertForMaskedLM.call.example",$$slots:{default:[gO]},$$scope:{ctx:B}}}),cr=new oe({props:{anchor:"transformers.TFBertForMaskedLM.call.example-2",$$slots:{default:[_O]},$$scope:{ctx:B}}}),Al=new xe({}),Il=new C({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1514"}}),hr=new we({props:{$$slots:{default:[bO]},$$scope:{ctx:B}}}),Wl=new C({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1524",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),fr=new we({props:{$$slots:{default:[vO]},$$scope:{ctx:B}}}),mr=new oe({props:{anchor:"transformers.TFBertForNextSentencePrediction.call.example",$$slots:{default:[kO]},$$scope:{ctx:B}}}),Hl=new xe({}),Rl=new C({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1605"}}),gr=new we({props:{$$slots:{default:[yO]},$$scope:{ctx:B}}}),Jl=new C({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1626",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_r=new we({props:{$$slots:{default:[TO]},$$scope:{ctx:B}}}),br=new oe({props:{anchor:"transformers.TFBertForSequenceClassification.call.example",$$slots:{default:[wO]},$$scope:{ctx:B}}}),vr=new oe({props:{anchor:"transformers.TFBertForSequenceClassification.call.example-2",$$slots:{default:[$O]},$$scope:{ctx:B}}}),Gl=new xe({}),Xl=new C({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1698"}}),yr=new we({props:{$$slots:{default:[xO]},$$scope:{ctx:B}}}),td=new C({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1722",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tr=new we({props:{$$slots:{default:[FO]},$$scope:{ctx:B}}}),wr=new oe({props:{anchor:"transformers.TFBertForMultipleChoice.call.example",$$slots:{default:[BO]},$$scope:{ctx:B}}}),od=new xe({}),nd=new C({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1828"}}),xr=new we({props:{$$slots:{default:[MO]},$$scope:{ctx:B}}}),id=new C({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fr=new we({props:{$$slots:{default:[EO]},$$scope:{ctx:B}}}),Br=new oe({props:{anchor:"transformers.TFBertForTokenClassification.call.example",$$slots:{default:[zO]},$$scope:{ctx:B}}}),Mr=new oe({props:{anchor:"transformers.TFBertForTokenClassification.call.example-2",$$slots:{default:[PO]},$$scope:{ctx:B}}}),ld=new xe({}),dd=new C({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1925"}}),zr=new we({props:{$$slots:{default:[qO]},$$scope:{ctx:B}}}),fd=new C({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_tf_bert.py#L1947",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pr=new we({props:{$$slots:{default:[jO]},$$scope:{ctx:B}}}),qr=new oe({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example",$$slots:{default:[CO]},$$scope:{ctx:B}}}),jr=new oe({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example-2",$$slots:{default:[NO]},$$scope:{ctx:B}}}),md=new xe({}),ud=new C({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L994"}}),wd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nr=new we({props:{$$slots:{default:[OO]},$$scope:{ctx:B}}}),Or=new oe({props:{anchor:"transformers.FlaxBertModel.__call__.example",$$slots:{default:[AO]},$$scope:{ctx:B}}}),$d=new xe({}),xd=new C({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L1067"}}),jd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ir=new we({props:{$$slots:{default:[IO]},$$scope:{ctx:B}}}),Lr=new oe({props:{anchor:"transformers.FlaxBertForPreTraining.__call__.example",$$slots:{default:[LO]},$$scope:{ctx:B}}}),Cd=new xe({}),Nd=new C({props:{name:"class transformers.FlaxBertForCausalLM",anchor:"transformers.FlaxBertForCausalLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L1605"}}),Wd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sr=new we({props:{$$slots:{default:[DO]},$$scope:{ctx:B}}}),Ur=new oe({props:{anchor:"transformers.FlaxBertForCausalLM.__call__.example",$$slots:{default:[SO]},$$scope:{ctx:B}}}),Hd=new xe({}),Rd=new C({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L1152"}}),ec=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hr=new we({props:{$$slots:{default:[UO]},$$scope:{ctx:B}}}),Rr=new oe({props:{anchor:"transformers.FlaxBertForMaskedLM.__call__.example",$$slots:{default:[WO]},$$scope:{ctx:B}}}),tc=new xe({}),oc=new C({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L1213"}}),pc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForNextSentencePrediction.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vr=new we({props:{$$slots:{default:[HO]},$$scope:{ctx:B}}}),Kr=new oe({props:{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.example",$$slots:{default:[RO]},$$scope:{ctx:B}}}),hc=new xe({}),fc=new C({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L1311"}}),yc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gr=new we({props:{$$slots:{default:[QO]},$$scope:{ctx:B}}}),Xr=new oe({props:{anchor:"transformers.FlaxBertForSequenceClassification.__call__.example",$$slots:{default:[VO]},$$scope:{ctx:B}}}),Tc=new xe({}),wc=new C({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L1387"}}),Pc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zr=new we({props:{$$slots:{default:[KO]},$$scope:{ctx:B}}}),ea=new oe({props:{anchor:"transformers.FlaxBertForMultipleChoice.__call__.example",$$slots:{default:[JO]},$$scope:{ctx:B}}}),qc=new xe({}),jc=new C({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L1459"}}),Sc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oa=new we({props:{$$slots:{default:[GO]},$$scope:{ctx:B}}}),na=new oe({props:{anchor:"transformers.FlaxBertForTokenClassification.__call__.example",$$slots:{default:[XO]},$$scope:{ctx:B}}}),Uc=new xe({}),Wc=new C({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L1526"}}),Xc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ra=new we({props:{$$slots:{default:[YO]},$$scope:{ctx:B}}}),aa=new oe({props:{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.example",$$slots:{default:[ZO]},$$scope:{ctx:B}}}),{c(){d=r("meta"),_=c(),h=r("h1"),f=r("a"),g=r("span"),y(l.$$.fragment),m=c(),M=r("span"),be=n("BERT"),X=c(),z=r("h2"),ee=r("a"),L=r("span"),y(re.$$.fragment),ve=c(),D=r("span"),ke=n("Overview"),fe=c(),J=r("p"),O=n("The BERT model was proposed in "),ae=r("a"),Y=n("BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),P=n(` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),j=c(),ie=r("p"),H=n("The abstract from the paper is the following:"),me=c(),le=r("p"),S=r("em"),ye=n(`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),ue=c(),q=r("p"),ce=r("em"),R=n(`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),ge=c(),de=r("p"),Q=n("Tips:"),_e=c(),te=r("ul"),N=r("li"),Te=n(`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),V=c(),pe=r("li"),k=n(`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),E=c(),K=r("p"),ze=n("This model was contributed by "),Be=r("a"),A=n("thomwolf"),Pe=n(". The original code can be found "),Me=r("a"),qe=n("here"),I=n("."),W=c(),$e=r("h2"),Fe=r("a"),U=r("span"),y(Ee.$$.fragment),je=c(),he=r("span"),Ce=n("BertConfig"),Z_=c(),Ct=r("div"),y(Na.$$.fragment),Zk=c(),po=r("p"),ey=n("This is the configuration class to store the configuration of a "),hp=r("a"),ty=n("BertModel"),oy=n(" or a "),fp=r("a"),ny=n("TFBertModel"),sy=n(`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Oa=r("a"),ry=n("bert-base-uncased"),ay=n(" architecture."),iy=c(),Wo=r("p"),ly=n("Configuration objects inherit from "),mp=r("a"),dy=n("PretrainedConfig"),cy=n(` and can be used to control the model outputs. Read the
documentation from `),up=r("a"),py=n("PretrainedConfig"),hy=n(" for more information."),fy=c(),y(ds.$$.fragment),eb=c(),Ho=r("h2"),cs=r("a"),Zh=r("span"),y(Aa.$$.fragment),my=c(),ef=r("span"),uy=n("BertTokenizer"),tb=c(),Ne=r("div"),y(Ia.$$.fragment),gy=c(),tf=r("p"),_y=n("Construct a BERT tokenizer. Based on WordPiece."),by=c(),La=r("p"),vy=n("This tokenizer inherits from "),gp=r("a"),ky=n("PreTrainedTokenizer"),yy=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ty=c(),xo=r("div"),y(Da.$$.fragment),wy=c(),of=r("p"),$y=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),xy=c(),Sa=r("ul"),_p=r("li"),Fy=n("single sequence: "),nf=r("code"),By=n("[CLS] X [SEP]"),My=c(),bp=r("li"),Ey=n("pair of sequences: "),sf=r("code"),zy=n("[CLS] A [SEP] B [SEP]"),Py=c(),ps=r("div"),y(Ua.$$.fragment),qy=c(),Wa=r("p"),jy=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),rf=r("code"),Cy=n("prepare_for_model"),Ny=n(" method."),Oy=c(),Ot=r("div"),y(Ha.$$.fragment),Ay=c(),af=r("p"),Iy=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Ly=c(),y(hs.$$.fragment),Dy=c(),Ro=r("p"),Sy=n("If "),lf=r("code"),Uy=n("token_ids_1"),Wy=n(" is "),df=r("code"),Hy=n("None"),Ry=n(", this method only returns the first portion of the mask (0s)."),Qy=c(),vp=r("div"),y(Ra.$$.fragment),ob=c(),Qo=r("h2"),fs=r("a"),cf=r("span"),y(Qa.$$.fragment),Vy=c(),pf=r("span"),Ky=n("BertTokenizerFast"),nb=c(),rt=r("div"),y(Va.$$.fragment),Jy=c(),Ka=r("p"),Gy=n("Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),hf=r("em"),Xy=n("tokenizers"),Yy=n(" library). Based on WordPiece."),Zy=c(),Ja=r("p"),eT=n("This tokenizer inherits from "),kp=r("a"),tT=n("PreTrainedTokenizerFast"),oT=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),nT=c(),Fo=r("div"),y(Ga.$$.fragment),sT=c(),ff=r("p"),rT=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),aT=c(),Xa=r("ul"),yp=r("li"),iT=n("single sequence: "),mf=r("code"),lT=n("[CLS] X [SEP]"),dT=c(),Tp=r("li"),cT=n("pair of sequences: "),uf=r("code"),pT=n("[CLS] A [SEP] B [SEP]"),hT=c(),At=r("div"),y(Ya.$$.fragment),fT=c(),gf=r("p"),mT=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),uT=c(),y(ms.$$.fragment),gT=c(),Vo=r("p"),_T=n("If "),_f=r("code"),bT=n("token_ids_1"),vT=n(" is "),bf=r("code"),kT=n("None"),yT=n(", this method only returns the first portion of the mask (0s)."),sb=c(),Ko=r("h2"),us=r("a"),vf=r("span"),y(Za.$$.fragment),TT=c(),kf=r("span"),wT=n("Bert specific outputs"),rb=c(),Jo=r("div"),y(ei.$$.fragment),$T=c(),ti=r("p"),xT=n("Output type of "),wp=r("a"),FT=n("BertForPreTraining"),BT=n("."),ab=c(),Go=r("div"),y(oi.$$.fragment),MT=c(),ni=r("p"),ET=n("Output type of "),$p=r("a"),zT=n("TFBertForPreTraining"),PT=n("."),ib=c(),ho=r("div"),y(si.$$.fragment),qT=c(),ri=r("p"),jT=n("Output type of "),xp=r("a"),CT=n("BertForPreTraining"),NT=n("."),OT=c(),gs=r("div"),y(ai.$$.fragment),AT=c(),yf=r("p"),IT=n("\u201CReturns a new object replacing the specified fields with new values."),lb=c(),Xo=r("h2"),_s=r("a"),Tf=r("span"),y(ii.$$.fragment),LT=c(),wf=r("span"),DT=n("BertModel"),db=c(),Oe=r("div"),y(li.$$.fragment),ST=c(),$f=r("p"),UT=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),WT=c(),di=r("p"),HT=n("This model inherits from "),Fp=r("a"),RT=n("PreTrainedModel"),QT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),VT=c(),ci=r("p"),KT=n("This model is also a PyTorch "),pi=r("a"),JT=n("torch.nn.Module"),GT=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),XT=c(),hi=r("p"),YT=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),fi=r("a"),ZT=n(`Attention is
all you need`),e1=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),t1=c(),Ke=r("p"),o1=n("To behave as an decoder the model needs to be initialized with the "),xf=r("code"),n1=n("is_decoder"),s1=n(` argument of the configuration set
to `),Ff=r("code"),r1=n("True"),a1=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),Bf=r("code"),i1=n("is_decoder"),l1=n(` argument and
`),Mf=r("code"),d1=n("add_cross_attention"),c1=n(" set to "),Ef=r("code"),p1=n("True"),h1=n("; an "),zf=r("code"),f1=n("encoder_hidden_states"),m1=n(" is then expected as an input to the forward pass."),u1=c(),It=r("div"),y(mi.$$.fragment),g1=c(),Yo=r("p"),_1=n("The "),Bp=r("a"),b1=n("BertModel"),v1=n(" forward method, overrides the "),Pf=r("code"),k1=n("__call__"),y1=n(" special method."),T1=c(),y(bs.$$.fragment),w1=c(),y(vs.$$.fragment),cb=c(),Zo=r("h2"),ks=r("a"),qf=r("span"),y(ui.$$.fragment),$1=c(),jf=r("span"),x1=n("BertForPreTraining"),pb=c(),at=r("div"),y(gi.$$.fragment),F1=c(),en=r("p"),B1=n("Bert Model with two heads on top as done during the pretraining: a "),Cf=r("code"),M1=n("masked language modeling"),E1=n(" head and a "),Nf=r("code"),z1=n("next sentence prediction (classification)"),P1=n(" head."),q1=c(),_i=r("p"),j1=n("This model inherits from "),Mp=r("a"),C1=n("PreTrainedModel"),N1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),O1=c(),bi=r("p"),A1=n("This model is also a PyTorch "),vi=r("a"),I1=n("torch.nn.Module"),L1=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),D1=c(),Lt=r("div"),y(ki.$$.fragment),S1=c(),tn=r("p"),U1=n("The "),Ep=r("a"),W1=n("BertForPreTraining"),H1=n(" forward method, overrides the "),Of=r("code"),R1=n("__call__"),Q1=n(" special method."),V1=c(),y(ys.$$.fragment),K1=c(),y(Ts.$$.fragment),hb=c(),on=r("h2"),ws=r("a"),Af=r("span"),y(yi.$$.fragment),J1=c(),If=r("span"),G1=n("BertLMHeadModel"),fb=c(),it=r("div"),y(Ti.$$.fragment),X1=c(),wi=r("p"),Y1=n("Bert Model with a "),Lf=r("code"),Z1=n("language modeling"),ew=n(" head on top for CLM fine-tuning."),tw=c(),$i=r("p"),ow=n("This model inherits from "),zp=r("a"),nw=n("PreTrainedModel"),sw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rw=c(),xi=r("p"),aw=n("This model is also a PyTorch "),Fi=r("a"),iw=n("torch.nn.Module"),lw=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dw=c(),Dt=r("div"),y(Bi.$$.fragment),cw=c(),nn=r("p"),pw=n("The "),Pp=r("a"),hw=n("BertLMHeadModel"),fw=n(" forward method, overrides the "),Df=r("code"),mw=n("__call__"),uw=n(" special method."),gw=c(),y($s.$$.fragment),_w=c(),y(xs.$$.fragment),mb=c(),sn=r("h2"),Fs=r("a"),Sf=r("span"),y(Mi.$$.fragment),bw=c(),Uf=r("span"),vw=n("BertForMaskedLM"),ub=c(),lt=r("div"),y(Ei.$$.fragment),kw=c(),zi=r("p"),yw=n("Bert Model with a "),Wf=r("code"),Tw=n("language modeling"),ww=n(" head on top."),$w=c(),Pi=r("p"),xw=n("This model inherits from "),qp=r("a"),Fw=n("PreTrainedModel"),Bw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mw=c(),qi=r("p"),Ew=n("This model is also a PyTorch "),ji=r("a"),zw=n("torch.nn.Module"),Pw=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qw=c(),mt=r("div"),y(Ci.$$.fragment),jw=c(),rn=r("p"),Cw=n("The "),jp=r("a"),Nw=n("BertForMaskedLM"),Ow=n(" forward method, overrides the "),Hf=r("code"),Aw=n("__call__"),Iw=n(" special method."),Lw=c(),y(Bs.$$.fragment),Dw=c(),y(Ms.$$.fragment),Sw=c(),y(Es.$$.fragment),gb=c(),an=r("h2"),zs=r("a"),Rf=r("span"),y(Ni.$$.fragment),Uw=c(),Qf=r("span"),Ww=n("BertForNextSentencePrediction"),_b=c(),dt=r("div"),y(Oi.$$.fragment),Hw=c(),Ai=r("p"),Rw=n("Bert Model with a "),Vf=r("code"),Qw=n("next sentence prediction (classification)"),Vw=n(" head on top."),Kw=c(),Ii=r("p"),Jw=n("This model inherits from "),Cp=r("a"),Gw=n("PreTrainedModel"),Xw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yw=c(),Li=r("p"),Zw=n("This model is also a PyTorch "),Di=r("a"),e2=n("torch.nn.Module"),t2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),o2=c(),St=r("div"),y(Si.$$.fragment),n2=c(),ln=r("p"),s2=n("The "),Np=r("a"),r2=n("BertForNextSentencePrediction"),a2=n(" forward method, overrides the "),Kf=r("code"),i2=n("__call__"),l2=n(" special method."),d2=c(),y(Ps.$$.fragment),c2=c(),y(qs.$$.fragment),bb=c(),dn=r("h2"),js=r("a"),Jf=r("span"),y(Ui.$$.fragment),p2=c(),Gf=r("span"),h2=n("BertForSequenceClassification"),vb=c(),ct=r("div"),y(Wi.$$.fragment),f2=c(),Xf=r("p"),m2=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),u2=c(),Hi=r("p"),g2=n("This model inherits from "),Op=r("a"),_2=n("PreTrainedModel"),b2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),v2=c(),Ri=r("p"),k2=n("This model is also a PyTorch "),Qi=r("a"),y2=n("torch.nn.Module"),T2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),w2=c(),Ve=r("div"),y(Vi.$$.fragment),$2=c(),cn=r("p"),x2=n("The "),Ap=r("a"),F2=n("BertForSequenceClassification"),B2=n(" forward method, overrides the "),Yf=r("code"),M2=n("__call__"),E2=n(" special method."),z2=c(),y(Cs.$$.fragment),P2=c(),y(Ns.$$.fragment),q2=c(),y(Os.$$.fragment),j2=c(),y(As.$$.fragment),C2=c(),y(Is.$$.fragment),kb=c(),pn=r("h2"),Ls=r("a"),Zf=r("span"),y(Ki.$$.fragment),N2=c(),em=r("span"),O2=n("BertForMultipleChoice"),yb=c(),pt=r("div"),y(Ji.$$.fragment),A2=c(),tm=r("p"),I2=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),L2=c(),Gi=r("p"),D2=n("This model inherits from "),Ip=r("a"),S2=n("PreTrainedModel"),U2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W2=c(),Xi=r("p"),H2=n("This model is also a PyTorch "),Yi=r("a"),R2=n("torch.nn.Module"),Q2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),V2=c(),Ut=r("div"),y(Zi.$$.fragment),K2=c(),hn=r("p"),J2=n("The "),Lp=r("a"),G2=n("BertForMultipleChoice"),X2=n(" forward method, overrides the "),om=r("code"),Y2=n("__call__"),Z2=n(" special method."),e$=c(),y(Ds.$$.fragment),t$=c(),y(Ss.$$.fragment),Tb=c(),fn=r("h2"),Us=r("a"),nm=r("span"),y(el.$$.fragment),o$=c(),sm=r("span"),n$=n("BertForTokenClassification"),wb=c(),ht=r("div"),y(tl.$$.fragment),s$=c(),rm=r("p"),r$=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),a$=c(),ol=r("p"),i$=n("This model inherits from "),Dp=r("a"),l$=n("PreTrainedModel"),d$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),c$=c(),nl=r("p"),p$=n("This model is also a PyTorch "),sl=r("a"),h$=n("torch.nn.Module"),f$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),m$=c(),ut=r("div"),y(rl.$$.fragment),u$=c(),mn=r("p"),g$=n("The "),Sp=r("a"),_$=n("BertForTokenClassification"),b$=n(" forward method, overrides the "),am=r("code"),v$=n("__call__"),k$=n(" special method."),y$=c(),y(Ws.$$.fragment),T$=c(),y(Hs.$$.fragment),w$=c(),y(Rs.$$.fragment),$b=c(),un=r("h2"),Qs=r("a"),im=r("span"),y(al.$$.fragment),$$=c(),lm=r("span"),x$=n("BertForQuestionAnswering"),xb=c(),ft=r("div"),y(il.$$.fragment),F$=c(),gn=r("p"),B$=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),dm=r("code"),M$=n("span start logits"),E$=n(" and "),cm=r("code"),z$=n("span end logits"),P$=n(")."),q$=c(),ll=r("p"),j$=n("This model inherits from "),Up=r("a"),C$=n("PreTrainedModel"),N$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),O$=c(),dl=r("p"),A$=n("This model is also a PyTorch "),cl=r("a"),I$=n("torch.nn.Module"),L$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),D$=c(),gt=r("div"),y(pl.$$.fragment),S$=c(),_n=r("p"),U$=n("The "),Wp=r("a"),W$=n("BertForQuestionAnswering"),H$=n(" forward method, overrides the "),pm=r("code"),R$=n("__call__"),Q$=n(" special method."),V$=c(),y(Vs.$$.fragment),K$=c(),y(Ks.$$.fragment),J$=c(),y(Js.$$.fragment),Fb=c(),bn=r("h2"),Gs=r("a"),hm=r("span"),y(hl.$$.fragment),G$=c(),fm=r("span"),X$=n("TFBertModel"),Bb=c(),Je=r("div"),y(fl.$$.fragment),Y$=c(),mm=r("p"),Z$=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),e0=c(),ml=r("p"),t0=n("This model inherits from "),Hp=r("a"),o0=n("TFPreTrainedModel"),n0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),s0=c(),ul=r("p"),r0=n("This model is also a "),gl=r("a"),a0=n("tf.keras.Model"),i0=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),l0=c(),y(Xs.$$.fragment),d0=c(),Wt=r("div"),y(_l.$$.fragment),c0=c(),vn=r("p"),p0=n("The "),Rp=r("a"),h0=n("TFBertModel"),f0=n(" forward method, overrides the "),um=r("code"),m0=n("__call__"),u0=n(" special method."),g0=c(),y(Ys.$$.fragment),_0=c(),y(Zs.$$.fragment),Mb=c(),kn=r("h2"),er=r("a"),gm=r("span"),y(bl.$$.fragment),b0=c(),_m=r("span"),v0=n("TFBertForPreTraining"),Eb=c(),Ge=r("div"),y(vl.$$.fragment),k0=c(),yn=r("p"),y0=n(`Bert Model with two heads on top as done during the pretraining:
a `),bm=r("code"),T0=n("masked language modeling"),w0=n(" head and a "),vm=r("code"),$0=n("next sentence prediction (classification)"),x0=n(" head."),F0=c(),kl=r("p"),B0=n("This model inherits from "),Qp=r("a"),M0=n("TFPreTrainedModel"),E0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),z0=c(),yl=r("p"),P0=n("This model is also a "),Tl=r("a"),q0=n("tf.keras.Model"),j0=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),C0=c(),y(tr.$$.fragment),N0=c(),Ht=r("div"),y(wl.$$.fragment),O0=c(),Tn=r("p"),A0=n("The "),Vp=r("a"),I0=n("TFBertForPreTraining"),L0=n(" forward method, overrides the "),km=r("code"),D0=n("__call__"),S0=n(" special method."),U0=c(),y(or.$$.fragment),W0=c(),y(nr.$$.fragment),zb=c(),wn=r("h2"),sr=r("a"),ym=r("span"),y($l.$$.fragment),H0=c(),Tm=r("span"),R0=n("TFBertModelLMHeadModel"),Pb=c(),$n=r("div"),y(xl.$$.fragment),Q0=c(),_t=r("div"),y(Fl.$$.fragment),V0=c(),Ae=r("p"),K0=n("encoder_hidden_states  ("),wm=r("code"),J0=n("tf.Tensor"),G0=n(" of shape "),$m=r("code"),X0=n("(batch_size, sequence_length, hidden_size)"),Y0=n(", "),xm=r("em"),Z0=n("optional"),ex=n(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),Fm=r("code"),tx=n("tf.Tensor"),ox=n(" of shape "),Bm=r("code"),nx=n("(batch_size, sequence_length)"),sx=n(", "),Mm=r("em"),rx=n("optional"),ax=n(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),Em=r("code"),ix=n("[0, 1]"),lx=n(":"),dx=c(),Bl=r("ul"),Ml=r("li"),cx=n("1 for tokens that are "),zm=r("strong"),px=n("not masked"),hx=n(","),fx=c(),El=r("li"),mx=n("0 for tokens that are "),Pm=r("strong"),ux=n("masked"),gx=n("."),_x=c(),G=r("p"),bx=n("past_key_values ("),qm=r("code"),vx=n("Tuple[Tuple[tf.Tensor]]"),kx=n(" of length "),jm=r("code"),yx=n("config.n_layers"),Tx=n(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),Cm=r("code"),wx=n("past_key_values"),$x=n(" are used, the user can optionally input only the last "),Nm=r("code"),xx=n("decoder_input_ids"),Fx=n(` (those that
don\u2019t have their past key value states given to this model) of shape `),Om=r("code"),Bx=n("(batch_size, 1)"),Mx=n(` instead of all
`),Am=r("code"),Ex=n("decoder_input_ids"),zx=n(" of shape "),Im=r("code"),Px=n("(batch_size, sequence_length)"),qx=n(`.
use_cache (`),Lm=r("code"),jx=n("bool"),Cx=n(", "),Dm=r("em"),Nx=n("optional"),Ox=n(", defaults to "),Sm=r("code"),Ax=n("True"),Ix=n(`):
If set to `),Um=r("code"),Lx=n("True"),Dx=n(", "),Wm=r("code"),Sx=n("past_key_values"),Ux=n(` key value states are returned and can be used to speed up decoding (see
`),Hm=r("code"),Wx=n("past_key_values"),Hx=n("). Set to "),Rm=r("code"),Rx=n("False"),Qx=n(" during training, "),Qm=r("code"),Vx=n("True"),Kx=n(` during generation
labels (`),Vm=r("code"),Jx=n("tf.Tensor"),Gx=n(" or "),Km=r("code"),Xx=n("np.ndarray"),Yx=n(" of shape "),Jm=r("code"),Zx=n("(batch_size, sequence_length)"),eF=n(", "),Gm=r("em"),tF=n("optional"),oF=n(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Xm=r("code"),nF=n("[0, ..., config.vocab_size - 1]"),sF=n("."),rF=c(),y(rr.$$.fragment),qb=c(),xn=r("h2"),ar=r("a"),Ym=r("span"),y(zl.$$.fragment),aF=c(),Zm=r("span"),iF=n("TFBertForMaskedLM"),jb=c(),Xe=r("div"),y(Pl.$$.fragment),lF=c(),ql=r("p"),dF=n("Bert Model with a "),eu=r("code"),cF=n("language modeling"),pF=n(" head on top."),hF=c(),jl=r("p"),fF=n("This model inherits from "),Kp=r("a"),mF=n("TFPreTrainedModel"),uF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gF=c(),Cl=r("p"),_F=n("This model is also a "),Nl=r("a"),bF=n("tf.keras.Model"),vF=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kF=c(),y(ir.$$.fragment),yF=c(),bt=r("div"),y(Ol.$$.fragment),TF=c(),Fn=r("p"),wF=n("The "),Jp=r("a"),$F=n("TFBertForMaskedLM"),xF=n(" forward method, overrides the "),tu=r("code"),FF=n("__call__"),BF=n(" special method."),MF=c(),y(lr.$$.fragment),EF=c(),y(dr.$$.fragment),zF=c(),y(cr.$$.fragment),Cb=c(),Bn=r("h2"),pr=r("a"),ou=r("span"),y(Al.$$.fragment),PF=c(),nu=r("span"),qF=n("TFBertForNextSentencePrediction"),Nb=c(),Ye=r("div"),y(Il.$$.fragment),jF=c(),Ll=r("p"),CF=n("Bert Model with a "),su=r("code"),NF=n("next sentence prediction (classification)"),OF=n(" head on top."),AF=c(),Dl=r("p"),IF=n("This model inherits from "),Gp=r("a"),LF=n("TFPreTrainedModel"),DF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),SF=c(),Sl=r("p"),UF=n("This model is also a "),Ul=r("a"),WF=n("tf.keras.Model"),HF=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),RF=c(),y(hr.$$.fragment),QF=c(),Rt=r("div"),y(Wl.$$.fragment),VF=c(),Mn=r("p"),KF=n("The "),Xp=r("a"),JF=n("TFBertForNextSentencePrediction"),GF=n(" forward method, overrides the "),ru=r("code"),XF=n("__call__"),YF=n(" special method."),ZF=c(),y(fr.$$.fragment),e4=c(),y(mr.$$.fragment),Ob=c(),En=r("h2"),ur=r("a"),au=r("span"),y(Hl.$$.fragment),t4=c(),iu=r("span"),o4=n("TFBertForSequenceClassification"),Ab=c(),Ze=r("div"),y(Rl.$$.fragment),n4=c(),lu=r("p"),s4=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),r4=c(),Ql=r("p"),a4=n("This model inherits from "),Yp=r("a"),i4=n("TFPreTrainedModel"),l4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),d4=c(),Vl=r("p"),c4=n("This model is also a "),Kl=r("a"),p4=n("tf.keras.Model"),h4=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),f4=c(),y(gr.$$.fragment),m4=c(),vt=r("div"),y(Jl.$$.fragment),u4=c(),zn=r("p"),g4=n("The "),Zp=r("a"),_4=n("TFBertForSequenceClassification"),b4=n(" forward method, overrides the "),du=r("code"),v4=n("__call__"),k4=n(" special method."),y4=c(),y(_r.$$.fragment),T4=c(),y(br.$$.fragment),w4=c(),y(vr.$$.fragment),Ib=c(),Pn=r("h2"),kr=r("a"),cu=r("span"),y(Gl.$$.fragment),$4=c(),pu=r("span"),x4=n("TFBertForMultipleChoice"),Lb=c(),et=r("div"),y(Xl.$$.fragment),F4=c(),hu=r("p"),B4=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),M4=c(),Yl=r("p"),E4=n("This model inherits from "),eh=r("a"),z4=n("TFPreTrainedModel"),P4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),q4=c(),Zl=r("p"),j4=n("This model is also a "),ed=r("a"),C4=n("tf.keras.Model"),N4=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),O4=c(),y(yr.$$.fragment),A4=c(),Qt=r("div"),y(td.$$.fragment),I4=c(),qn=r("p"),L4=n("The "),th=r("a"),D4=n("TFBertForMultipleChoice"),S4=n(" forward method, overrides the "),fu=r("code"),U4=n("__call__"),W4=n(" special method."),H4=c(),y(Tr.$$.fragment),R4=c(),y(wr.$$.fragment),Db=c(),jn=r("h2"),$r=r("a"),mu=r("span"),y(od.$$.fragment),Q4=c(),uu=r("span"),V4=n("TFBertForTokenClassification"),Sb=c(),tt=r("div"),y(nd.$$.fragment),K4=c(),gu=r("p"),J4=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),G4=c(),sd=r("p"),X4=n("This model inherits from "),oh=r("a"),Y4=n("TFPreTrainedModel"),Z4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eB=c(),rd=r("p"),tB=n("This model is also a "),ad=r("a"),oB=n("tf.keras.Model"),nB=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sB=c(),y(xr.$$.fragment),rB=c(),kt=r("div"),y(id.$$.fragment),aB=c(),Cn=r("p"),iB=n("The "),nh=r("a"),lB=n("TFBertForTokenClassification"),dB=n(" forward method, overrides the "),_u=r("code"),cB=n("__call__"),pB=n(" special method."),hB=c(),y(Fr.$$.fragment),fB=c(),y(Br.$$.fragment),mB=c(),y(Mr.$$.fragment),Ub=c(),Nn=r("h2"),Er=r("a"),bu=r("span"),y(ld.$$.fragment),uB=c(),vu=r("span"),gB=n("TFBertForQuestionAnswering"),Wb=c(),ot=r("div"),y(dd.$$.fragment),_B=c(),On=r("p"),bB=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ku=r("code"),vB=n("span start logits"),kB=n(" and "),yu=r("code"),yB=n("span end logits"),TB=n(")."),wB=c(),cd=r("p"),$B=n("This model inherits from "),sh=r("a"),xB=n("TFPreTrainedModel"),FB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),BB=c(),pd=r("p"),MB=n("This model is also a "),hd=r("a"),EB=n("tf.keras.Model"),zB=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),PB=c(),y(zr.$$.fragment),qB=c(),yt=r("div"),y(fd.$$.fragment),jB=c(),An=r("p"),CB=n("The "),rh=r("a"),NB=n("TFBertForQuestionAnswering"),OB=n(" forward method, overrides the "),Tu=r("code"),AB=n("__call__"),IB=n(" special method."),LB=c(),y(Pr.$$.fragment),DB=c(),y(qr.$$.fragment),SB=c(),y(jr.$$.fragment),Hb=c(),In=r("h2"),Cr=r("a"),wu=r("span"),y(md.$$.fragment),UB=c(),$u=r("span"),WB=n("FlaxBertModel"),Rb=c(),Ie=r("div"),y(ud.$$.fragment),HB=c(),xu=r("p"),RB=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),QB=c(),gd=r("p"),VB=n("This model inherits from "),ah=r("a"),KB=n("FlaxPreTrainedModel"),JB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),GB=c(),_d=r("p"),XB=n("This model is also a Flax Linen "),bd=r("a"),YB=n("flax.linen.Module"),ZB=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),eM=c(),Fu=r("p"),tM=n("Finally, this model supports inherent JAX features such as:"),oM=c(),fo=r("ul"),Bu=r("li"),vd=r("a"),nM=n("Just-In-Time (JIT) compilation"),sM=c(),Mu=r("li"),kd=r("a"),rM=n("Automatic Differentiation"),aM=c(),Eu=r("li"),yd=r("a"),iM=n("Vectorization"),lM=c(),zu=r("li"),Td=r("a"),dM=n("Parallelization"),cM=c(),Vt=r("div"),y(wd.$$.fragment),pM=c(),Ln=r("p"),hM=n("The "),Pu=r("code"),fM=n("FlaxBertPreTrainedModel"),mM=n(" forward method, overrides the "),qu=r("code"),uM=n("__call__"),gM=n(" special method."),_M=c(),y(Nr.$$.fragment),bM=c(),y(Or.$$.fragment),Qb=c(),Dn=r("h2"),Ar=r("a"),ju=r("span"),y($d.$$.fragment),vM=c(),Cu=r("span"),kM=n("FlaxBertForPreTraining"),Vb=c(),Le=r("div"),y(xd.$$.fragment),yM=c(),Sn=r("p"),TM=n("Bert Model with two heads on top as done during the pretraining: a "),Nu=r("code"),wM=n("masked language modeling"),$M=n(" head and a "),Ou=r("code"),xM=n("next sentence prediction (classification)"),FM=n(" head."),BM=c(),Fd=r("p"),MM=n("This model inherits from "),ih=r("a"),EM=n("FlaxPreTrainedModel"),zM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),PM=c(),Bd=r("p"),qM=n("This model is also a Flax Linen "),Md=r("a"),jM=n("flax.linen.Module"),CM=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),NM=c(),Au=r("p"),OM=n("Finally, this model supports inherent JAX features such as:"),AM=c(),mo=r("ul"),Iu=r("li"),Ed=r("a"),IM=n("Just-In-Time (JIT) compilation"),LM=c(),Lu=r("li"),zd=r("a"),DM=n("Automatic Differentiation"),SM=c(),Du=r("li"),Pd=r("a"),UM=n("Vectorization"),WM=c(),Su=r("li"),qd=r("a"),HM=n("Parallelization"),RM=c(),Kt=r("div"),y(jd.$$.fragment),QM=c(),Un=r("p"),VM=n("The "),Uu=r("code"),KM=n("FlaxBertPreTrainedModel"),JM=n(" forward method, overrides the "),Wu=r("code"),GM=n("__call__"),XM=n(" special method."),YM=c(),y(Ir.$$.fragment),ZM=c(),y(Lr.$$.fragment),Kb=c(),Wn=r("h2"),Dr=r("a"),Hu=r("span"),y(Cd.$$.fragment),eE=c(),Ru=r("span"),tE=n("FlaxBertForCausalLM"),Jb=c(),De=r("div"),y(Nd.$$.fragment),oE=c(),Qu=r("p"),nE=n(`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),sE=c(),Od=r("p"),rE=n("This model inherits from "),lh=r("a"),aE=n("FlaxPreTrainedModel"),iE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),lE=c(),Ad=r("p"),dE=n("This model is also a Flax Linen "),Id=r("a"),cE=n("flax.linen.Module"),pE=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hE=c(),Vu=r("p"),fE=n("Finally, this model supports inherent JAX features such as:"),mE=c(),uo=r("ul"),Ku=r("li"),Ld=r("a"),uE=n("Just-In-Time (JIT) compilation"),gE=c(),Ju=r("li"),Dd=r("a"),_E=n("Automatic Differentiation"),bE=c(),Gu=r("li"),Sd=r("a"),vE=n("Vectorization"),kE=c(),Xu=r("li"),Ud=r("a"),yE=n("Parallelization"),TE=c(),Jt=r("div"),y(Wd.$$.fragment),wE=c(),Hn=r("p"),$E=n("The "),Yu=r("code"),xE=n("FlaxBertPreTrainedModel"),FE=n(" forward method, overrides the "),Zu=r("code"),BE=n("__call__"),ME=n(" special method."),EE=c(),y(Sr.$$.fragment),zE=c(),y(Ur.$$.fragment),Gb=c(),Rn=r("h2"),Wr=r("a"),eg=r("span"),y(Hd.$$.fragment),PE=c(),tg=r("span"),qE=n("FlaxBertForMaskedLM"),Xb=c(),Se=r("div"),y(Rd.$$.fragment),jE=c(),Qd=r("p"),CE=n("Bert Model with a "),og=r("code"),NE=n("language modeling"),OE=n(" head on top."),AE=c(),Vd=r("p"),IE=n("This model inherits from "),dh=r("a"),LE=n("FlaxPreTrainedModel"),DE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),SE=c(),Kd=r("p"),UE=n("This model is also a Flax Linen "),Jd=r("a"),WE=n("flax.linen.Module"),HE=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),RE=c(),ng=r("p"),QE=n("Finally, this model supports inherent JAX features such as:"),VE=c(),go=r("ul"),sg=r("li"),Gd=r("a"),KE=n("Just-In-Time (JIT) compilation"),JE=c(),rg=r("li"),Xd=r("a"),GE=n("Automatic Differentiation"),XE=c(),ag=r("li"),Yd=r("a"),YE=n("Vectorization"),ZE=c(),ig=r("li"),Zd=r("a"),ez=n("Parallelization"),tz=c(),Gt=r("div"),y(ec.$$.fragment),oz=c(),Qn=r("p"),nz=n("The "),lg=r("code"),sz=n("FlaxBertPreTrainedModel"),rz=n(" forward method, overrides the "),dg=r("code"),az=n("__call__"),iz=n(" special method."),lz=c(),y(Hr.$$.fragment),dz=c(),y(Rr.$$.fragment),Yb=c(),Vn=r("h2"),Qr=r("a"),cg=r("span"),y(tc.$$.fragment),cz=c(),pg=r("span"),pz=n("FlaxBertForNextSentencePrediction"),Zb=c(),Ue=r("div"),y(oc.$$.fragment),hz=c(),nc=r("p"),fz=n("Bert Model with a "),hg=r("code"),mz=n("next sentence prediction (classification)"),uz=n(" head on top."),gz=c(),sc=r("p"),_z=n("This model inherits from "),ch=r("a"),bz=n("FlaxPreTrainedModel"),vz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kz=c(),rc=r("p"),yz=n("This model is also a Flax Linen "),ac=r("a"),Tz=n("flax.linen.Module"),wz=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$z=c(),fg=r("p"),xz=n("Finally, this model supports inherent JAX features such as:"),Fz=c(),_o=r("ul"),mg=r("li"),ic=r("a"),Bz=n("Just-In-Time (JIT) compilation"),Mz=c(),ug=r("li"),lc=r("a"),Ez=n("Automatic Differentiation"),zz=c(),gg=r("li"),dc=r("a"),Pz=n("Vectorization"),qz=c(),_g=r("li"),cc=r("a"),jz=n("Parallelization"),Cz=c(),Xt=r("div"),y(pc.$$.fragment),Nz=c(),Kn=r("p"),Oz=n("The "),bg=r("code"),Az=n("FlaxBertPreTrainedModel"),Iz=n(" forward method, overrides the "),vg=r("code"),Lz=n("__call__"),Dz=n(" special method."),Sz=c(),y(Vr.$$.fragment),Uz=c(),y(Kr.$$.fragment),ev=c(),Jn=r("h2"),Jr=r("a"),kg=r("span"),y(hc.$$.fragment),Wz=c(),yg=r("span"),Hz=n("FlaxBertForSequenceClassification"),tv=c(),We=r("div"),y(fc.$$.fragment),Rz=c(),Tg=r("p"),Qz=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Vz=c(),mc=r("p"),Kz=n("This model inherits from "),ph=r("a"),Jz=n("FlaxPreTrainedModel"),Gz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xz=c(),uc=r("p"),Yz=n("This model is also a Flax Linen "),gc=r("a"),Zz=n("flax.linen.Module"),eP=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tP=c(),wg=r("p"),oP=n("Finally, this model supports inherent JAX features such as:"),nP=c(),bo=r("ul"),$g=r("li"),_c=r("a"),sP=n("Just-In-Time (JIT) compilation"),rP=c(),xg=r("li"),bc=r("a"),aP=n("Automatic Differentiation"),iP=c(),Fg=r("li"),vc=r("a"),lP=n("Vectorization"),dP=c(),Bg=r("li"),kc=r("a"),cP=n("Parallelization"),pP=c(),Yt=r("div"),y(yc.$$.fragment),hP=c(),Gn=r("p"),fP=n("The "),Mg=r("code"),mP=n("FlaxBertPreTrainedModel"),uP=n(" forward method, overrides the "),Eg=r("code"),gP=n("__call__"),_P=n(" special method."),bP=c(),y(Gr.$$.fragment),vP=c(),y(Xr.$$.fragment),ov=c(),Xn=r("h2"),Yr=r("a"),zg=r("span"),y(Tc.$$.fragment),kP=c(),Pg=r("span"),yP=n("FlaxBertForMultipleChoice"),nv=c(),He=r("div"),y(wc.$$.fragment),TP=c(),qg=r("p"),wP=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),$P=c(),$c=r("p"),xP=n("This model inherits from "),hh=r("a"),FP=n("FlaxPreTrainedModel"),BP=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),MP=c(),xc=r("p"),EP=n("This model is also a Flax Linen "),Fc=r("a"),zP=n("flax.linen.Module"),PP=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qP=c(),jg=r("p"),jP=n("Finally, this model supports inherent JAX features such as:"),CP=c(),vo=r("ul"),Cg=r("li"),Bc=r("a"),NP=n("Just-In-Time (JIT) compilation"),OP=c(),Ng=r("li"),Mc=r("a"),AP=n("Automatic Differentiation"),IP=c(),Og=r("li"),Ec=r("a"),LP=n("Vectorization"),DP=c(),Ag=r("li"),zc=r("a"),SP=n("Parallelization"),UP=c(),Zt=r("div"),y(Pc.$$.fragment),WP=c(),Yn=r("p"),HP=n("The "),Ig=r("code"),RP=n("FlaxBertPreTrainedModel"),QP=n(" forward method, overrides the "),Lg=r("code"),VP=n("__call__"),KP=n(" special method."),JP=c(),y(Zr.$$.fragment),GP=c(),y(ea.$$.fragment),sv=c(),Zn=r("h2"),ta=r("a"),Dg=r("span"),y(qc.$$.fragment),XP=c(),Sg=r("span"),YP=n("FlaxBertForTokenClassification"),rv=c(),Re=r("div"),y(jc.$$.fragment),ZP=c(),Ug=r("p"),eq=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),tq=c(),Cc=r("p"),oq=n("This model inherits from "),fh=r("a"),nq=n("FlaxPreTrainedModel"),sq=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rq=c(),Nc=r("p"),aq=n("This model is also a Flax Linen "),Oc=r("a"),iq=n("flax.linen.Module"),lq=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),dq=c(),Wg=r("p"),cq=n("Finally, this model supports inherent JAX features such as:"),pq=c(),ko=r("ul"),Hg=r("li"),Ac=r("a"),hq=n("Just-In-Time (JIT) compilation"),fq=c(),Rg=r("li"),Ic=r("a"),mq=n("Automatic Differentiation"),uq=c(),Qg=r("li"),Lc=r("a"),gq=n("Vectorization"),_q=c(),Vg=r("li"),Dc=r("a"),bq=n("Parallelization"),vq=c(),eo=r("div"),y(Sc.$$.fragment),kq=c(),es=r("p"),yq=n("The "),Kg=r("code"),Tq=n("FlaxBertPreTrainedModel"),wq=n(" forward method, overrides the "),Jg=r("code"),$q=n("__call__"),xq=n(" special method."),Fq=c(),y(oa.$$.fragment),Bq=c(),y(na.$$.fragment),av=c(),ts=r("h2"),sa=r("a"),Gg=r("span"),y(Uc.$$.fragment),Mq=c(),Xg=r("span"),Eq=n("FlaxBertForQuestionAnswering"),iv=c(),Qe=r("div"),y(Wc.$$.fragment),zq=c(),os=r("p"),Pq=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Yg=r("code"),qq=n("span start logits"),jq=n(" and "),Zg=r("code"),Cq=n("span end logits"),Nq=n(")."),Oq=c(),Hc=r("p"),Aq=n("This model inherits from "),mh=r("a"),Iq=n("FlaxPreTrainedModel"),Lq=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Dq=c(),Rc=r("p"),Sq=n("This model is also a Flax Linen "),Qc=r("a"),Uq=n("flax.linen.Module"),Wq=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Hq=c(),e_=r("p"),Rq=n("Finally, this model supports inherent JAX features such as:"),Qq=c(),yo=r("ul"),t_=r("li"),Vc=r("a"),Vq=n("Just-In-Time (JIT) compilation"),Kq=c(),o_=r("li"),Kc=r("a"),Jq=n("Automatic Differentiation"),Gq=c(),n_=r("li"),Jc=r("a"),Xq=n("Vectorization"),Yq=c(),s_=r("li"),Gc=r("a"),Zq=n("Parallelization"),ej=c(),to=r("div"),y(Xc.$$.fragment),tj=c(),ns=r("p"),oj=n("The "),r_=r("code"),nj=n("FlaxBertPreTrainedModel"),sj=n(" forward method, overrides the "),a_=r("code"),rj=n("__call__"),aj=n(" special method."),ij=c(),y(ra.$$.fragment),lj=c(),y(aa.$$.fragment),this.h()},l(o){const v=q8('[data-svelte="svelte-1phssyn"]',document.head);d=a(v,"META",{name:!0,content:!0}),v.forEach(t),_=p(o),h=a(o,"H1",{class:!0});var Yc=i(h);f=a(Yc,"A",{id:!0,class:!0,href:!0});var i_=i(f);g=a(i_,"SPAN",{});var l_=i(g);T(l.$$.fragment,l_),l_.forEach(t),i_.forEach(t),m=p(Yc),M=a(Yc,"SPAN",{});var d_=i(M);be=s(d_,"BERT"),d_.forEach(t),Yc.forEach(t),X=p(o),z=a(o,"H2",{class:!0});var Zc=i(z);ee=a(Zc,"A",{id:!0,class:!0,href:!0});var c_=i(ee);L=a(c_,"SPAN",{});var p_=i(L);T(re.$$.fragment,p_),p_.forEach(t),c_.forEach(t),ve=p(Zc),D=a(Zc,"SPAN",{});var h_=i(D);ke=s(h_,"Overview"),h_.forEach(t),Zc.forEach(t),fe=p(o),J=a(o,"P",{});var ep=i(J);O=s(ep,"The BERT model was proposed in "),ae=a(ep,"A",{href:!0,rel:!0});var f_=i(ae);Y=s(f_,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),f_.forEach(t),P=s(ep,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),ep.forEach(t),j=p(o),ie=a(o,"P",{});var m_=i(ie);H=s(m_,"The abstract from the paper is the following:"),m_.forEach(t),me=p(o),le=a(o,"P",{});var u_=i(le);S=a(u_,"EM",{});var g_=i(S);ye=s(g_,`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),g_.forEach(t),u_.forEach(t),ue=p(o),q=a(o,"P",{});var __=i(q);ce=a(__,"EM",{});var b_=i(ce);R=s(b_,`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),b_.forEach(t),__.forEach(t),ge=p(o),de=a(o,"P",{});var v_=i(de);Q=s(v_,"Tips:"),v_.forEach(t),_e=p(o),te=a(o,"UL",{});var tp=i(te);N=a(tp,"LI",{});var k_=i(N);Te=s(k_,`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),k_.forEach(t),V=p(tp),pe=a(tp,"LI",{});var y_=i(pe);k=s(y_,`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),y_.forEach(t),tp.forEach(t),E=p(o),K=a(o,"P",{});var ss=i(K);ze=s(ss,"This model was contributed by "),Be=a(ss,"A",{href:!0,rel:!0});var T_=i(Be);A=s(T_,"thomwolf"),T_.forEach(t),Pe=s(ss,". The original code can be found "),Me=a(ss,"A",{href:!0,rel:!0});var w_=i(Me);qe=s(w_,"here"),w_.forEach(t),I=s(ss,"."),ss.forEach(t),W=p(o),$e=a(o,"H2",{class:!0});var op=i($e);Fe=a(op,"A",{id:!0,class:!0,href:!0});var $_=i(Fe);U=a($_,"SPAN",{});var x_=i(U);T(Ee.$$.fragment,x_),x_.forEach(t),$_.forEach(t),je=p(op),he=a(op,"SPAN",{});var F_=i(he);Ce=s(F_,"BertConfig"),F_.forEach(t),op.forEach(t),Z_=p(o),Ct=a(o,"DIV",{class:!0});var To=i(Ct);T(Na.$$.fragment,To),Zk=p(To),po=a(To,"P",{});var wo=i(po);ey=s(wo,"This is the configuration class to store the configuration of a "),hp=a(wo,"A",{href:!0});var B_=i(hp);ty=s(B_,"BertModel"),B_.forEach(t),oy=s(wo," or a "),fp=a(wo,"A",{href:!0});var M_=i(fp);ny=s(M_,"TFBertModel"),M_.forEach(t),sy=s(wo,`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Oa=a(wo,"A",{href:!0,rel:!0});var E_=i(Oa);ry=s(E_,"bert-base-uncased"),E_.forEach(t),ay=s(wo," architecture."),wo.forEach(t),iy=p(To),Wo=a(To,"P",{});var rs=i(Wo);ly=s(rs,"Configuration objects inherit from "),mp=a(rs,"A",{href:!0});var z_=i(mp);dy=s(z_,"PretrainedConfig"),z_.forEach(t),cy=s(rs,` and can be used to control the model outputs. Read the
documentation from `),up=a(rs,"A",{href:!0});var P_=i(up);py=s(P_,"PretrainedConfig"),P_.forEach(t),hy=s(rs," for more information."),rs.forEach(t),fy=p(To),T(ds.$$.fragment,To),To.forEach(t),eb=p(o),Ho=a(o,"H2",{class:!0});var np=i(Ho);cs=a(np,"A",{id:!0,class:!0,href:!0});var q_=i(cs);Zh=a(q_,"SPAN",{});var j_=i(Zh);T(Aa.$$.fragment,j_),j_.forEach(t),q_.forEach(t),my=p(np),ef=a(np,"SPAN",{});var C_=i(ef);uy=s(C_,"BertTokenizer"),C_.forEach(t),np.forEach(t),tb=p(o),Ne=a(o,"DIV",{class:!0});var nt=i(Ne);T(Ia.$$.fragment,nt),gy=p(nt),tf=a(nt,"P",{});var N_=i(tf);_y=s(N_,"Construct a BERT tokenizer. Based on WordPiece."),N_.forEach(t),by=p(nt),La=a(nt,"P",{});var sp=i(La);vy=s(sp,"This tokenizer inherits from "),gp=a(sp,"A",{href:!0});var O_=i(gp);ky=s(O_,"PreTrainedTokenizer"),O_.forEach(t),yy=s(sp,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),sp.forEach(t),Ty=p(nt),xo=a(nt,"DIV",{class:!0});var as=i(xo);T(Da.$$.fragment,as),wy=p(as),of=a(as,"P",{});var A_=i(of);$y=s(A_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),A_.forEach(t),xy=p(as),Sa=a(as,"UL",{});var rp=i(Sa);_p=a(rp,"LI",{});var uh=i(_p);Fy=s(uh,"single sequence: "),nf=a(uh,"CODE",{});var I_=i(nf);By=s(I_,"[CLS] X [SEP]"),I_.forEach(t),uh.forEach(t),My=p(rp),bp=a(rp,"LI",{});var gh=i(bp);Ey=s(gh,"pair of sequences: "),sf=a(gh,"CODE",{});var L_=i(sf);zy=s(L_,"[CLS] A [SEP] B [SEP]"),L_.forEach(t),gh.forEach(t),rp.forEach(t),as.forEach(t),Py=p(nt),ps=a(nt,"DIV",{class:!0});var ap=i(ps);T(Ua.$$.fragment,ap),qy=p(ap),Wa=a(ap,"P",{});var ip=i(Wa);jy=s(ip,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),rf=a(ip,"CODE",{});var D_=i(rf);Cy=s(D_,"prepare_for_model"),D_.forEach(t),Ny=s(ip," method."),ip.forEach(t),ap.forEach(t),Oy=p(nt),Ot=a(nt,"DIV",{class:!0});var $o=i(Ot);T(Ha.$$.fragment,$o),Ay=p($o),af=a($o,"P",{});var S_=i(af);Iy=s(S_,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),S_.forEach(t),Ly=p($o),T(hs.$$.fragment,$o),Dy=p($o),Ro=a($o,"P",{});var is=i(Ro);Sy=s(is,"If "),lf=a(is,"CODE",{});var U_=i(lf);Uy=s(U_,"token_ids_1"),U_.forEach(t),Wy=s(is," is "),df=a(is,"CODE",{});var W_=i(df);Hy=s(W_,"None"),W_.forEach(t),Ry=s(is,", this method only returns the first portion of the mask (0s)."),is.forEach(t),$o.forEach(t),Qy=p(nt),vp=a(nt,"DIV",{class:!0});var H_=i(vp);T(Ra.$$.fragment,H_),H_.forEach(t),nt.forEach(t),ob=p(o),Qo=a(o,"H2",{class:!0});var lp=i(Qo);fs=a(lp,"A",{id:!0,class:!0,href:!0});var R_=i(fs);cf=a(R_,"SPAN",{});var Q_=i(cf);T(Qa.$$.fragment,Q_),Q_.forEach(t),R_.forEach(t),Vy=p(lp),pf=a(lp,"SPAN",{});var V_=i(pf);Ky=s(V_,"BertTokenizerFast"),V_.forEach(t),lp.forEach(t),nb=p(o),rt=a(o,"DIV",{class:!0});var Nt=i(rt);T(Va.$$.fragment,Nt),Jy=p(Nt),Ka=a(Nt,"P",{});var dp=i(Ka);Gy=s(dp,"Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),hf=a(dp,"EM",{});var K_=i(hf);Xy=s(K_,"tokenizers"),K_.forEach(t),Yy=s(dp," library). Based on WordPiece."),dp.forEach(t),Zy=p(Nt),Ja=a(Nt,"P",{});var cp=i(Ja);eT=s(cp,"This tokenizer inherits from "),kp=a(cp,"A",{href:!0});var J_=i(kp);tT=s(J_,"PreTrainedTokenizerFast"),J_.forEach(t),oT=s(cp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),cp.forEach(t),nT=p(Nt),Fo=a(Nt,"DIV",{class:!0});var ls=i(Fo);T(Ga.$$.fragment,ls),sT=p(ls),ff=a(ls,"P",{});var G_=i(ff);rT=s(G_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),G_.forEach(t),aT=p(ls),Xa=a(ls,"UL",{});var pp=i(Xa);yp=a(pp,"LI",{});var _h=i(yp);iT=s(_h,"single sequence: "),mf=a(_h,"CODE",{});var X_=i(mf);lT=s(X_,"[CLS] X [SEP]"),X_.forEach(t),_h.forEach(t),dT=p(pp),Tp=a(pp,"LI",{});var bh=i(Tp);cT=s(bh,"pair of sequences: "),uf=a(bh,"CODE",{});var Y_=i(uf);pT=s(Y_,"[CLS] A [SEP] B [SEP]"),Y_.forEach(t),bh.forEach(t),pp.forEach(t),ls.forEach(t),hT=p(Nt),At=a(Nt,"DIV",{class:!0});var ia=i(At);T(Ya.$$.fragment,ia),fT=p(ia),gf=a(ia,"P",{});var dj=i(gf);mT=s(dj,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),dj.forEach(t),uT=p(ia),T(ms.$$.fragment,ia),gT=p(ia),Vo=a(ia,"P",{});var vh=i(Vo);_T=s(vh,"If "),_f=a(vh,"CODE",{});var cj=i(_f);bT=s(cj,"token_ids_1"),cj.forEach(t),vT=s(vh," is "),bf=a(vh,"CODE",{});var pj=i(bf);kT=s(pj,"None"),pj.forEach(t),yT=s(vh,", this method only returns the first portion of the mask (0s)."),vh.forEach(t),ia.forEach(t),Nt.forEach(t),sb=p(o),Ko=a(o,"H2",{class:!0});var dv=i(Ko);us=a(dv,"A",{id:!0,class:!0,href:!0});var hj=i(us);vf=a(hj,"SPAN",{});var fj=i(vf);T(Za.$$.fragment,fj),fj.forEach(t),hj.forEach(t),TT=p(dv),kf=a(dv,"SPAN",{});var mj=i(kf);wT=s(mj,"Bert specific outputs"),mj.forEach(t),dv.forEach(t),rb=p(o),Jo=a(o,"DIV",{class:!0});var cv=i(Jo);T(ei.$$.fragment,cv),$T=p(cv),ti=a(cv,"P",{});var pv=i(ti);xT=s(pv,"Output type of "),wp=a(pv,"A",{href:!0});var uj=i(wp);FT=s(uj,"BertForPreTraining"),uj.forEach(t),BT=s(pv,"."),pv.forEach(t),cv.forEach(t),ab=p(o),Go=a(o,"DIV",{class:!0});var hv=i(Go);T(oi.$$.fragment,hv),MT=p(hv),ni=a(hv,"P",{});var fv=i(ni);ET=s(fv,"Output type of "),$p=a(fv,"A",{href:!0});var gj=i($p);zT=s(gj,"TFBertForPreTraining"),gj.forEach(t),PT=s(fv,"."),fv.forEach(t),hv.forEach(t),ib=p(o),ho=a(o,"DIV",{class:!0});var kh=i(ho);T(si.$$.fragment,kh),qT=p(kh),ri=a(kh,"P",{});var mv=i(ri);jT=s(mv,"Output type of "),xp=a(mv,"A",{href:!0});var _j=i(xp);CT=s(_j,"BertForPreTraining"),_j.forEach(t),NT=s(mv,"."),mv.forEach(t),OT=p(kh),gs=a(kh,"DIV",{class:!0});var uv=i(gs);T(ai.$$.fragment,uv),AT=p(uv),yf=a(uv,"P",{});var bj=i(yf);IT=s(bj,"\u201CReturns a new object replacing the specified fields with new values."),bj.forEach(t),uv.forEach(t),kh.forEach(t),lb=p(o),Xo=a(o,"H2",{class:!0});var gv=i(Xo);_s=a(gv,"A",{id:!0,class:!0,href:!0});var vj=i(_s);Tf=a(vj,"SPAN",{});var kj=i(Tf);T(ii.$$.fragment,kj),kj.forEach(t),vj.forEach(t),LT=p(gv),wf=a(gv,"SPAN",{});var yj=i(wf);DT=s(yj,"BertModel"),yj.forEach(t),gv.forEach(t),db=p(o),Oe=a(o,"DIV",{class:!0});var Tt=i(Oe);T(li.$$.fragment,Tt),ST=p(Tt),$f=a(Tt,"P",{});var Tj=i($f);UT=s(Tj,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Tj.forEach(t),WT=p(Tt),di=a(Tt,"P",{});var _v=i(di);HT=s(_v,"This model inherits from "),Fp=a(_v,"A",{href:!0});var wj=i(Fp);RT=s(wj,"PreTrainedModel"),wj.forEach(t),QT=s(_v,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_v.forEach(t),VT=p(Tt),ci=a(Tt,"P",{});var bv=i(ci);KT=s(bv,"This model is also a PyTorch "),pi=a(bv,"A",{href:!0,rel:!0});var $j=i(pi);JT=s($j,"torch.nn.Module"),$j.forEach(t),GT=s(bv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bv.forEach(t),XT=p(Tt),hi=a(Tt,"P",{});var vv=i(hi);YT=s(vv,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),fi=a(vv,"A",{href:!0,rel:!0});var xj=i(fi);ZT=s(xj,`Attention is
all you need`),xj.forEach(t),e1=s(vv,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),vv.forEach(t),t1=p(Tt),Ke=a(Tt,"P",{});var wt=i(Ke);o1=s(wt,"To behave as an decoder the model needs to be initialized with the "),xf=a(wt,"CODE",{});var Fj=i(xf);n1=s(Fj,"is_decoder"),Fj.forEach(t),s1=s(wt,` argument of the configuration set
to `),Ff=a(wt,"CODE",{});var Bj=i(Ff);r1=s(Bj,"True"),Bj.forEach(t),a1=s(wt,". To be used in a Seq2Seq model, the model needs to initialized with both "),Bf=a(wt,"CODE",{});var Mj=i(Bf);i1=s(Mj,"is_decoder"),Mj.forEach(t),l1=s(wt,` argument and
`),Mf=a(wt,"CODE",{});var Ej=i(Mf);d1=s(Ej,"add_cross_attention"),Ej.forEach(t),c1=s(wt," set to "),Ef=a(wt,"CODE",{});var zj=i(Ef);p1=s(zj,"True"),zj.forEach(t),h1=s(wt,"; an "),zf=a(wt,"CODE",{});var Pj=i(zf);f1=s(Pj,"encoder_hidden_states"),Pj.forEach(t),m1=s(wt," is then expected as an input to the forward pass."),wt.forEach(t),u1=p(Tt),It=a(Tt,"DIV",{class:!0});var la=i(It);T(mi.$$.fragment,la),g1=p(la),Yo=a(la,"P",{});var yh=i(Yo);_1=s(yh,"The "),Bp=a(yh,"A",{href:!0});var qj=i(Bp);b1=s(qj,"BertModel"),qj.forEach(t),v1=s(yh," forward method, overrides the "),Pf=a(yh,"CODE",{});var jj=i(Pf);k1=s(jj,"__call__"),jj.forEach(t),y1=s(yh," special method."),yh.forEach(t),T1=p(la),T(bs.$$.fragment,la),w1=p(la),T(vs.$$.fragment,la),la.forEach(t),Tt.forEach(t),cb=p(o),Zo=a(o,"H2",{class:!0});var kv=i(Zo);ks=a(kv,"A",{id:!0,class:!0,href:!0});var Cj=i(ks);qf=a(Cj,"SPAN",{});var Nj=i(qf);T(ui.$$.fragment,Nj),Nj.forEach(t),Cj.forEach(t),$1=p(kv),jf=a(kv,"SPAN",{});var Oj=i(jf);x1=s(Oj,"BertForPreTraining"),Oj.forEach(t),kv.forEach(t),pb=p(o),at=a(o,"DIV",{class:!0});var Bo=i(at);T(gi.$$.fragment,Bo),F1=p(Bo),en=a(Bo,"P",{});var Th=i(en);B1=s(Th,"Bert Model with two heads on top as done during the pretraining: a "),Cf=a(Th,"CODE",{});var Aj=i(Cf);M1=s(Aj,"masked language modeling"),Aj.forEach(t),E1=s(Th," head and a "),Nf=a(Th,"CODE",{});var Ij=i(Nf);z1=s(Ij,"next sentence prediction (classification)"),Ij.forEach(t),P1=s(Th," head."),Th.forEach(t),q1=p(Bo),_i=a(Bo,"P",{});var yv=i(_i);j1=s(yv,"This model inherits from "),Mp=a(yv,"A",{href:!0});var Lj=i(Mp);C1=s(Lj,"PreTrainedModel"),Lj.forEach(t),N1=s(yv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yv.forEach(t),O1=p(Bo),bi=a(Bo,"P",{});var Tv=i(bi);A1=s(Tv,"This model is also a PyTorch "),vi=a(Tv,"A",{href:!0,rel:!0});var Dj=i(vi);I1=s(Dj,"torch.nn.Module"),Dj.forEach(t),L1=s(Tv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tv.forEach(t),D1=p(Bo),Lt=a(Bo,"DIV",{class:!0});var da=i(Lt);T(ki.$$.fragment,da),S1=p(da),tn=a(da,"P",{});var wh=i(tn);U1=s(wh,"The "),Ep=a(wh,"A",{href:!0});var Sj=i(Ep);W1=s(Sj,"BertForPreTraining"),Sj.forEach(t),H1=s(wh," forward method, overrides the "),Of=a(wh,"CODE",{});var Uj=i(Of);R1=s(Uj,"__call__"),Uj.forEach(t),Q1=s(wh," special method."),wh.forEach(t),V1=p(da),T(ys.$$.fragment,da),K1=p(da),T(Ts.$$.fragment,da),da.forEach(t),Bo.forEach(t),hb=p(o),on=a(o,"H2",{class:!0});var wv=i(on);ws=a(wv,"A",{id:!0,class:!0,href:!0});var Wj=i(ws);Af=a(Wj,"SPAN",{});var Hj=i(Af);T(yi.$$.fragment,Hj),Hj.forEach(t),Wj.forEach(t),J1=p(wv),If=a(wv,"SPAN",{});var Rj=i(If);G1=s(Rj,"BertLMHeadModel"),Rj.forEach(t),wv.forEach(t),fb=p(o),it=a(o,"DIV",{class:!0});var Mo=i(it);T(Ti.$$.fragment,Mo),X1=p(Mo),wi=a(Mo,"P",{});var $v=i(wi);Y1=s($v,"Bert Model with a "),Lf=a($v,"CODE",{});var Qj=i(Lf);Z1=s(Qj,"language modeling"),Qj.forEach(t),ew=s($v," head on top for CLM fine-tuning."),$v.forEach(t),tw=p(Mo),$i=a(Mo,"P",{});var xv=i($i);ow=s(xv,"This model inherits from "),zp=a(xv,"A",{href:!0});var Vj=i(zp);nw=s(Vj,"PreTrainedModel"),Vj.forEach(t),sw=s(xv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xv.forEach(t),rw=p(Mo),xi=a(Mo,"P",{});var Fv=i(xi);aw=s(Fv,"This model is also a PyTorch "),Fi=a(Fv,"A",{href:!0,rel:!0});var Kj=i(Fi);iw=s(Kj,"torch.nn.Module"),Kj.forEach(t),lw=s(Fv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fv.forEach(t),dw=p(Mo),Dt=a(Mo,"DIV",{class:!0});var ca=i(Dt);T(Bi.$$.fragment,ca),cw=p(ca),nn=a(ca,"P",{});var $h=i(nn);pw=s($h,"The "),Pp=a($h,"A",{href:!0});var Jj=i(Pp);hw=s(Jj,"BertLMHeadModel"),Jj.forEach(t),fw=s($h," forward method, overrides the "),Df=a($h,"CODE",{});var Gj=i(Df);mw=s(Gj,"__call__"),Gj.forEach(t),uw=s($h," special method."),$h.forEach(t),gw=p(ca),T($s.$$.fragment,ca),_w=p(ca),T(xs.$$.fragment,ca),ca.forEach(t),Mo.forEach(t),mb=p(o),sn=a(o,"H2",{class:!0});var Bv=i(sn);Fs=a(Bv,"A",{id:!0,class:!0,href:!0});var Xj=i(Fs);Sf=a(Xj,"SPAN",{});var Yj=i(Sf);T(Mi.$$.fragment,Yj),Yj.forEach(t),Xj.forEach(t),bw=p(Bv),Uf=a(Bv,"SPAN",{});var Zj=i(Uf);vw=s(Zj,"BertForMaskedLM"),Zj.forEach(t),Bv.forEach(t),ub=p(o),lt=a(o,"DIV",{class:!0});var Eo=i(lt);T(Ei.$$.fragment,Eo),kw=p(Eo),zi=a(Eo,"P",{});var Mv=i(zi);yw=s(Mv,"Bert Model with a "),Wf=a(Mv,"CODE",{});var e3=i(Wf);Tw=s(e3,"language modeling"),e3.forEach(t),ww=s(Mv," head on top."),Mv.forEach(t),$w=p(Eo),Pi=a(Eo,"P",{});var Ev=i(Pi);xw=s(Ev,"This model inherits from "),qp=a(Ev,"A",{href:!0});var t3=i(qp);Fw=s(t3,"PreTrainedModel"),t3.forEach(t),Bw=s(Ev,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ev.forEach(t),Mw=p(Eo),qi=a(Eo,"P",{});var zv=i(qi);Ew=s(zv,"This model is also a PyTorch "),ji=a(zv,"A",{href:!0,rel:!0});var o3=i(ji);zw=s(o3,"torch.nn.Module"),o3.forEach(t),Pw=s(zv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zv.forEach(t),qw=p(Eo),mt=a(Eo,"DIV",{class:!0});var zo=i(mt);T(Ci.$$.fragment,zo),jw=p(zo),rn=a(zo,"P",{});var xh=i(rn);Cw=s(xh,"The "),jp=a(xh,"A",{href:!0});var n3=i(jp);Nw=s(n3,"BertForMaskedLM"),n3.forEach(t),Ow=s(xh," forward method, overrides the "),Hf=a(xh,"CODE",{});var s3=i(Hf);Aw=s(s3,"__call__"),s3.forEach(t),Iw=s(xh," special method."),xh.forEach(t),Lw=p(zo),T(Bs.$$.fragment,zo),Dw=p(zo),T(Ms.$$.fragment,zo),Sw=p(zo),T(Es.$$.fragment,zo),zo.forEach(t),Eo.forEach(t),gb=p(o),an=a(o,"H2",{class:!0});var Pv=i(an);zs=a(Pv,"A",{id:!0,class:!0,href:!0});var r3=i(zs);Rf=a(r3,"SPAN",{});var a3=i(Rf);T(Ni.$$.fragment,a3),a3.forEach(t),r3.forEach(t),Uw=p(Pv),Qf=a(Pv,"SPAN",{});var i3=i(Qf);Ww=s(i3,"BertForNextSentencePrediction"),i3.forEach(t),Pv.forEach(t),_b=p(o),dt=a(o,"DIV",{class:!0});var Po=i(dt);T(Oi.$$.fragment,Po),Hw=p(Po),Ai=a(Po,"P",{});var qv=i(Ai);Rw=s(qv,"Bert Model with a "),Vf=a(qv,"CODE",{});var l3=i(Vf);Qw=s(l3,"next sentence prediction (classification)"),l3.forEach(t),Vw=s(qv," head on top."),qv.forEach(t),Kw=p(Po),Ii=a(Po,"P",{});var jv=i(Ii);Jw=s(jv,"This model inherits from "),Cp=a(jv,"A",{href:!0});var d3=i(Cp);Gw=s(d3,"PreTrainedModel"),d3.forEach(t),Xw=s(jv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jv.forEach(t),Yw=p(Po),Li=a(Po,"P",{});var Cv=i(Li);Zw=s(Cv,"This model is also a PyTorch "),Di=a(Cv,"A",{href:!0,rel:!0});var c3=i(Di);e2=s(c3,"torch.nn.Module"),c3.forEach(t),t2=s(Cv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cv.forEach(t),o2=p(Po),St=a(Po,"DIV",{class:!0});var pa=i(St);T(Si.$$.fragment,pa),n2=p(pa),ln=a(pa,"P",{});var Fh=i(ln);s2=s(Fh,"The "),Np=a(Fh,"A",{href:!0});var p3=i(Np);r2=s(p3,"BertForNextSentencePrediction"),p3.forEach(t),a2=s(Fh," forward method, overrides the "),Kf=a(Fh,"CODE",{});var h3=i(Kf);i2=s(h3,"__call__"),h3.forEach(t),l2=s(Fh," special method."),Fh.forEach(t),d2=p(pa),T(Ps.$$.fragment,pa),c2=p(pa),T(qs.$$.fragment,pa),pa.forEach(t),Po.forEach(t),bb=p(o),dn=a(o,"H2",{class:!0});var Nv=i(dn);js=a(Nv,"A",{id:!0,class:!0,href:!0});var f3=i(js);Jf=a(f3,"SPAN",{});var m3=i(Jf);T(Ui.$$.fragment,m3),m3.forEach(t),f3.forEach(t),p2=p(Nv),Gf=a(Nv,"SPAN",{});var u3=i(Gf);h2=s(u3,"BertForSequenceClassification"),u3.forEach(t),Nv.forEach(t),vb=p(o),ct=a(o,"DIV",{class:!0});var qo=i(ct);T(Wi.$$.fragment,qo),f2=p(qo),Xf=a(qo,"P",{});var g3=i(Xf);m2=s(g3,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),g3.forEach(t),u2=p(qo),Hi=a(qo,"P",{});var Ov=i(Hi);g2=s(Ov,"This model inherits from "),Op=a(Ov,"A",{href:!0});var _3=i(Op);_2=s(_3,"PreTrainedModel"),_3.forEach(t),b2=s(Ov,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ov.forEach(t),v2=p(qo),Ri=a(qo,"P",{});var Av=i(Ri);k2=s(Av,"This model is also a PyTorch "),Qi=a(Av,"A",{href:!0,rel:!0});var b3=i(Qi);y2=s(b3,"torch.nn.Module"),b3.forEach(t),T2=s(Av,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Av.forEach(t),w2=p(qo),Ve=a(qo,"DIV",{class:!0});var $t=i(Ve);T(Vi.$$.fragment,$t),$2=p($t),cn=a($t,"P",{});var Bh=i(cn);x2=s(Bh,"The "),Ap=a(Bh,"A",{href:!0});var v3=i(Ap);F2=s(v3,"BertForSequenceClassification"),v3.forEach(t),B2=s(Bh," forward method, overrides the "),Yf=a(Bh,"CODE",{});var k3=i(Yf);M2=s(k3,"__call__"),k3.forEach(t),E2=s(Bh," special method."),Bh.forEach(t),z2=p($t),T(Cs.$$.fragment,$t),P2=p($t),T(Ns.$$.fragment,$t),q2=p($t),T(Os.$$.fragment,$t),j2=p($t),T(As.$$.fragment,$t),C2=p($t),T(Is.$$.fragment,$t),$t.forEach(t),qo.forEach(t),kb=p(o),pn=a(o,"H2",{class:!0});var Iv=i(pn);Ls=a(Iv,"A",{id:!0,class:!0,href:!0});var y3=i(Ls);Zf=a(y3,"SPAN",{});var T3=i(Zf);T(Ki.$$.fragment,T3),T3.forEach(t),y3.forEach(t),N2=p(Iv),em=a(Iv,"SPAN",{});var w3=i(em);O2=s(w3,"BertForMultipleChoice"),w3.forEach(t),Iv.forEach(t),yb=p(o),pt=a(o,"DIV",{class:!0});var jo=i(pt);T(Ji.$$.fragment,jo),A2=p(jo),tm=a(jo,"P",{});var $3=i(tm);I2=s($3,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),$3.forEach(t),L2=p(jo),Gi=a(jo,"P",{});var Lv=i(Gi);D2=s(Lv,"This model inherits from "),Ip=a(Lv,"A",{href:!0});var x3=i(Ip);S2=s(x3,"PreTrainedModel"),x3.forEach(t),U2=s(Lv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lv.forEach(t),W2=p(jo),Xi=a(jo,"P",{});var Dv=i(Xi);H2=s(Dv,"This model is also a PyTorch "),Yi=a(Dv,"A",{href:!0,rel:!0});var F3=i(Yi);R2=s(F3,"torch.nn.Module"),F3.forEach(t),Q2=s(Dv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dv.forEach(t),V2=p(jo),Ut=a(jo,"DIV",{class:!0});var ha=i(Ut);T(Zi.$$.fragment,ha),K2=p(ha),hn=a(ha,"P",{});var Mh=i(hn);J2=s(Mh,"The "),Lp=a(Mh,"A",{href:!0});var B3=i(Lp);G2=s(B3,"BertForMultipleChoice"),B3.forEach(t),X2=s(Mh," forward method, overrides the "),om=a(Mh,"CODE",{});var M3=i(om);Y2=s(M3,"__call__"),M3.forEach(t),Z2=s(Mh," special method."),Mh.forEach(t),e$=p(ha),T(Ds.$$.fragment,ha),t$=p(ha),T(Ss.$$.fragment,ha),ha.forEach(t),jo.forEach(t),Tb=p(o),fn=a(o,"H2",{class:!0});var Sv=i(fn);Us=a(Sv,"A",{id:!0,class:!0,href:!0});var E3=i(Us);nm=a(E3,"SPAN",{});var z3=i(nm);T(el.$$.fragment,z3),z3.forEach(t),E3.forEach(t),o$=p(Sv),sm=a(Sv,"SPAN",{});var P3=i(sm);n$=s(P3,"BertForTokenClassification"),P3.forEach(t),Sv.forEach(t),wb=p(o),ht=a(o,"DIV",{class:!0});var Co=i(ht);T(tl.$$.fragment,Co),s$=p(Co),rm=a(Co,"P",{});var q3=i(rm);r$=s(q3,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),q3.forEach(t),a$=p(Co),ol=a(Co,"P",{});var Uv=i(ol);i$=s(Uv,"This model inherits from "),Dp=a(Uv,"A",{href:!0});var j3=i(Dp);l$=s(j3,"PreTrainedModel"),j3.forEach(t),d$=s(Uv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uv.forEach(t),c$=p(Co),nl=a(Co,"P",{});var Wv=i(nl);p$=s(Wv,"This model is also a PyTorch "),sl=a(Wv,"A",{href:!0,rel:!0});var C3=i(sl);h$=s(C3,"torch.nn.Module"),C3.forEach(t),f$=s(Wv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wv.forEach(t),m$=p(Co),ut=a(Co,"DIV",{class:!0});var No=i(ut);T(rl.$$.fragment,No),u$=p(No),mn=a(No,"P",{});var Eh=i(mn);g$=s(Eh,"The "),Sp=a(Eh,"A",{href:!0});var N3=i(Sp);_$=s(N3,"BertForTokenClassification"),N3.forEach(t),b$=s(Eh," forward method, overrides the "),am=a(Eh,"CODE",{});var O3=i(am);v$=s(O3,"__call__"),O3.forEach(t),k$=s(Eh," special method."),Eh.forEach(t),y$=p(No),T(Ws.$$.fragment,No),T$=p(No),T(Hs.$$.fragment,No),w$=p(No),T(Rs.$$.fragment,No),No.forEach(t),Co.forEach(t),$b=p(o),un=a(o,"H2",{class:!0});var Hv=i(un);Qs=a(Hv,"A",{id:!0,class:!0,href:!0});var A3=i(Qs);im=a(A3,"SPAN",{});var I3=i(im);T(al.$$.fragment,I3),I3.forEach(t),A3.forEach(t),$$=p(Hv),lm=a(Hv,"SPAN",{});var L3=i(lm);x$=s(L3,"BertForQuestionAnswering"),L3.forEach(t),Hv.forEach(t),xb=p(o),ft=a(o,"DIV",{class:!0});var Oo=i(ft);T(il.$$.fragment,Oo),F$=p(Oo),gn=a(Oo,"P",{});var zh=i(gn);B$=s(zh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),dm=a(zh,"CODE",{});var D3=i(dm);M$=s(D3,"span start logits"),D3.forEach(t),E$=s(zh," and "),cm=a(zh,"CODE",{});var S3=i(cm);z$=s(S3,"span end logits"),S3.forEach(t),P$=s(zh,")."),zh.forEach(t),q$=p(Oo),ll=a(Oo,"P",{});var Rv=i(ll);j$=s(Rv,"This model inherits from "),Up=a(Rv,"A",{href:!0});var U3=i(Up);C$=s(U3,"PreTrainedModel"),U3.forEach(t),N$=s(Rv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rv.forEach(t),O$=p(Oo),dl=a(Oo,"P",{});var Qv=i(dl);A$=s(Qv,"This model is also a PyTorch "),cl=a(Qv,"A",{href:!0,rel:!0});var W3=i(cl);I$=s(W3,"torch.nn.Module"),W3.forEach(t),L$=s(Qv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qv.forEach(t),D$=p(Oo),gt=a(Oo,"DIV",{class:!0});var Ao=i(gt);T(pl.$$.fragment,Ao),S$=p(Ao),_n=a(Ao,"P",{});var Ph=i(_n);U$=s(Ph,"The "),Wp=a(Ph,"A",{href:!0});var H3=i(Wp);W$=s(H3,"BertForQuestionAnswering"),H3.forEach(t),H$=s(Ph," forward method, overrides the "),pm=a(Ph,"CODE",{});var R3=i(pm);R$=s(R3,"__call__"),R3.forEach(t),Q$=s(Ph," special method."),Ph.forEach(t),V$=p(Ao),T(Vs.$$.fragment,Ao),K$=p(Ao),T(Ks.$$.fragment,Ao),J$=p(Ao),T(Js.$$.fragment,Ao),Ao.forEach(t),Oo.forEach(t),Fb=p(o),bn=a(o,"H2",{class:!0});var Vv=i(bn);Gs=a(Vv,"A",{id:!0,class:!0,href:!0});var Q3=i(Gs);hm=a(Q3,"SPAN",{});var V3=i(hm);T(hl.$$.fragment,V3),V3.forEach(t),Q3.forEach(t),G$=p(Vv),fm=a(Vv,"SPAN",{});var K3=i(fm);X$=s(K3,"TFBertModel"),K3.forEach(t),Vv.forEach(t),Bb=p(o),Je=a(o,"DIV",{class:!0});var oo=i(Je);T(fl.$$.fragment,oo),Y$=p(oo),mm=a(oo,"P",{});var J3=i(mm);Z$=s(J3,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),J3.forEach(t),e0=p(oo),ml=a(oo,"P",{});var Kv=i(ml);t0=s(Kv,"This model inherits from "),Hp=a(Kv,"A",{href:!0});var G3=i(Hp);o0=s(G3,"TFPreTrainedModel"),G3.forEach(t),n0=s(Kv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kv.forEach(t),s0=p(oo),ul=a(oo,"P",{});var Jv=i(ul);r0=s(Jv,"This model is also a "),gl=a(Jv,"A",{href:!0,rel:!0});var X3=i(gl);a0=s(X3,"tf.keras.Model"),X3.forEach(t),i0=s(Jv,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jv.forEach(t),l0=p(oo),T(Xs.$$.fragment,oo),d0=p(oo),Wt=a(oo,"DIV",{class:!0});var fa=i(Wt);T(_l.$$.fragment,fa),c0=p(fa),vn=a(fa,"P",{});var qh=i(vn);p0=s(qh,"The "),Rp=a(qh,"A",{href:!0});var Y3=i(Rp);h0=s(Y3,"TFBertModel"),Y3.forEach(t),f0=s(qh," forward method, overrides the "),um=a(qh,"CODE",{});var Z3=i(um);m0=s(Z3,"__call__"),Z3.forEach(t),u0=s(qh," special method."),qh.forEach(t),g0=p(fa),T(Ys.$$.fragment,fa),_0=p(fa),T(Zs.$$.fragment,fa),fa.forEach(t),oo.forEach(t),Mb=p(o),kn=a(o,"H2",{class:!0});var Gv=i(kn);er=a(Gv,"A",{id:!0,class:!0,href:!0});var eC=i(er);gm=a(eC,"SPAN",{});var tC=i(gm);T(bl.$$.fragment,tC),tC.forEach(t),eC.forEach(t),b0=p(Gv),_m=a(Gv,"SPAN",{});var oC=i(_m);v0=s(oC,"TFBertForPreTraining"),oC.forEach(t),Gv.forEach(t),Eb=p(o),Ge=a(o,"DIV",{class:!0});var no=i(Ge);T(vl.$$.fragment,no),k0=p(no),yn=a(no,"P",{});var jh=i(yn);y0=s(jh,`Bert Model with two heads on top as done during the pretraining:
a `),bm=a(jh,"CODE",{});var nC=i(bm);T0=s(nC,"masked language modeling"),nC.forEach(t),w0=s(jh," head and a "),vm=a(jh,"CODE",{});var sC=i(vm);$0=s(sC,"next sentence prediction (classification)"),sC.forEach(t),x0=s(jh," head."),jh.forEach(t),F0=p(no),kl=a(no,"P",{});var Xv=i(kl);B0=s(Xv,"This model inherits from "),Qp=a(Xv,"A",{href:!0});var rC=i(Qp);M0=s(rC,"TFPreTrainedModel"),rC.forEach(t),E0=s(Xv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xv.forEach(t),z0=p(no),yl=a(no,"P",{});var Yv=i(yl);P0=s(Yv,"This model is also a "),Tl=a(Yv,"A",{href:!0,rel:!0});var aC=i(Tl);q0=s(aC,"tf.keras.Model"),aC.forEach(t),j0=s(Yv,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yv.forEach(t),C0=p(no),T(tr.$$.fragment,no),N0=p(no),Ht=a(no,"DIV",{class:!0});var ma=i(Ht);T(wl.$$.fragment,ma),O0=p(ma),Tn=a(ma,"P",{});var Ch=i(Tn);A0=s(Ch,"The "),Vp=a(Ch,"A",{href:!0});var iC=i(Vp);I0=s(iC,"TFBertForPreTraining"),iC.forEach(t),L0=s(Ch," forward method, overrides the "),km=a(Ch,"CODE",{});var lC=i(km);D0=s(lC,"__call__"),lC.forEach(t),S0=s(Ch," special method."),Ch.forEach(t),U0=p(ma),T(or.$$.fragment,ma),W0=p(ma),T(nr.$$.fragment,ma),ma.forEach(t),no.forEach(t),zb=p(o),wn=a(o,"H2",{class:!0});var Zv=i(wn);sr=a(Zv,"A",{id:!0,class:!0,href:!0});var dC=i(sr);ym=a(dC,"SPAN",{});var cC=i(ym);T($l.$$.fragment,cC),cC.forEach(t),dC.forEach(t),H0=p(Zv),Tm=a(Zv,"SPAN",{});var pC=i(Tm);R0=s(pC,"TFBertModelLMHeadModel"),pC.forEach(t),Zv.forEach(t),Pb=p(o),$n=a(o,"DIV",{class:!0});var ek=i($n);T(xl.$$.fragment,ek),Q0=p(ek),_t=a(ek,"DIV",{class:!0});var Io=i(_t);T(Fl.$$.fragment,Io),V0=p(Io),Ae=a(Io,"P",{});var st=i(Ae);K0=s(st,"encoder_hidden_states  ("),wm=a(st,"CODE",{});var hC=i(wm);J0=s(hC,"tf.Tensor"),hC.forEach(t),G0=s(st," of shape "),$m=a(st,"CODE",{});var fC=i($m);X0=s(fC,"(batch_size, sequence_length, hidden_size)"),fC.forEach(t),Y0=s(st,", "),xm=a(st,"EM",{});var mC=i(xm);Z0=s(mC,"optional"),mC.forEach(t),ex=s(st,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),Fm=a(st,"CODE",{});var uC=i(Fm);tx=s(uC,"tf.Tensor"),uC.forEach(t),ox=s(st," of shape "),Bm=a(st,"CODE",{});var gC=i(Bm);nx=s(gC,"(batch_size, sequence_length)"),gC.forEach(t),sx=s(st,", "),Mm=a(st,"EM",{});var _C=i(Mm);rx=s(_C,"optional"),_C.forEach(t),ax=s(st,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),Em=a(st,"CODE",{});var bC=i(Em);ix=s(bC,"[0, 1]"),bC.forEach(t),lx=s(st,":"),st.forEach(t),dx=p(Io),Bl=a(Io,"UL",{});var tk=i(Bl);Ml=a(tk,"LI",{});var ok=i(Ml);cx=s(ok,"1 for tokens that are "),zm=a(ok,"STRONG",{});var vC=i(zm);px=s(vC,"not masked"),vC.forEach(t),hx=s(ok,","),ok.forEach(t),fx=p(tk),El=a(tk,"LI",{});var nk=i(El);mx=s(nk,"0 for tokens that are "),Pm=a(nk,"STRONG",{});var kC=i(Pm);ux=s(kC,"masked"),kC.forEach(t),gx=s(nk,"."),nk.forEach(t),tk.forEach(t),_x=p(Io),G=a(Io,"P",{});var Z=i(G);bx=s(Z,"past_key_values ("),qm=a(Z,"CODE",{});var yC=i(qm);vx=s(yC,"Tuple[Tuple[tf.Tensor]]"),yC.forEach(t),kx=s(Z," of length "),jm=a(Z,"CODE",{});var TC=i(jm);yx=s(TC,"config.n_layers"),TC.forEach(t),Tx=s(Z,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),Cm=a(Z,"CODE",{});var wC=i(Cm);wx=s(wC,"past_key_values"),wC.forEach(t),$x=s(Z," are used, the user can optionally input only the last "),Nm=a(Z,"CODE",{});var $C=i(Nm);xx=s($C,"decoder_input_ids"),$C.forEach(t),Fx=s(Z,` (those that
don\u2019t have their past key value states given to this model) of shape `),Om=a(Z,"CODE",{});var xC=i(Om);Bx=s(xC,"(batch_size, 1)"),xC.forEach(t),Mx=s(Z,` instead of all
`),Am=a(Z,"CODE",{});var FC=i(Am);Ex=s(FC,"decoder_input_ids"),FC.forEach(t),zx=s(Z," of shape "),Im=a(Z,"CODE",{});var BC=i(Im);Px=s(BC,"(batch_size, sequence_length)"),BC.forEach(t),qx=s(Z,`.
use_cache (`),Lm=a(Z,"CODE",{});var MC=i(Lm);jx=s(MC,"bool"),MC.forEach(t),Cx=s(Z,", "),Dm=a(Z,"EM",{});var EC=i(Dm);Nx=s(EC,"optional"),EC.forEach(t),Ox=s(Z,", defaults to "),Sm=a(Z,"CODE",{});var zC=i(Sm);Ax=s(zC,"True"),zC.forEach(t),Ix=s(Z,`):
If set to `),Um=a(Z,"CODE",{});var PC=i(Um);Lx=s(PC,"True"),PC.forEach(t),Dx=s(Z,", "),Wm=a(Z,"CODE",{});var qC=i(Wm);Sx=s(qC,"past_key_values"),qC.forEach(t),Ux=s(Z,` key value states are returned and can be used to speed up decoding (see
`),Hm=a(Z,"CODE",{});var jC=i(Hm);Wx=s(jC,"past_key_values"),jC.forEach(t),Hx=s(Z,"). Set to "),Rm=a(Z,"CODE",{});var CC=i(Rm);Rx=s(CC,"False"),CC.forEach(t),Qx=s(Z," during training, "),Qm=a(Z,"CODE",{});var NC=i(Qm);Vx=s(NC,"True"),NC.forEach(t),Kx=s(Z,` during generation
labels (`),Vm=a(Z,"CODE",{});var OC=i(Vm);Jx=s(OC,"tf.Tensor"),OC.forEach(t),Gx=s(Z," or "),Km=a(Z,"CODE",{});var AC=i(Km);Xx=s(AC,"np.ndarray"),AC.forEach(t),Yx=s(Z," of shape "),Jm=a(Z,"CODE",{});var IC=i(Jm);Zx=s(IC,"(batch_size, sequence_length)"),IC.forEach(t),eF=s(Z,", "),Gm=a(Z,"EM",{});var LC=i(Gm);tF=s(LC,"optional"),LC.forEach(t),oF=s(Z,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Xm=a(Z,"CODE",{});var DC=i(Xm);nF=s(DC,"[0, ..., config.vocab_size - 1]"),DC.forEach(t),sF=s(Z,"."),Z.forEach(t),rF=p(Io),T(rr.$$.fragment,Io),Io.forEach(t),ek.forEach(t),qb=p(o),xn=a(o,"H2",{class:!0});var sk=i(xn);ar=a(sk,"A",{id:!0,class:!0,href:!0});var SC=i(ar);Ym=a(SC,"SPAN",{});var UC=i(Ym);T(zl.$$.fragment,UC),UC.forEach(t),SC.forEach(t),aF=p(sk),Zm=a(sk,"SPAN",{});var WC=i(Zm);iF=s(WC,"TFBertForMaskedLM"),WC.forEach(t),sk.forEach(t),jb=p(o),Xe=a(o,"DIV",{class:!0});var so=i(Xe);T(Pl.$$.fragment,so),lF=p(so),ql=a(so,"P",{});var rk=i(ql);dF=s(rk,"Bert Model with a "),eu=a(rk,"CODE",{});var HC=i(eu);cF=s(HC,"language modeling"),HC.forEach(t),pF=s(rk," head on top."),rk.forEach(t),hF=p(so),jl=a(so,"P",{});var ak=i(jl);fF=s(ak,"This model inherits from "),Kp=a(ak,"A",{href:!0});var RC=i(Kp);mF=s(RC,"TFPreTrainedModel"),RC.forEach(t),uF=s(ak,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ak.forEach(t),gF=p(so),Cl=a(so,"P",{});var ik=i(Cl);_F=s(ik,"This model is also a "),Nl=a(ik,"A",{href:!0,rel:!0});var QC=i(Nl);bF=s(QC,"tf.keras.Model"),QC.forEach(t),vF=s(ik,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ik.forEach(t),kF=p(so),T(ir.$$.fragment,so),yF=p(so),bt=a(so,"DIV",{class:!0});var Lo=i(bt);T(Ol.$$.fragment,Lo),TF=p(Lo),Fn=a(Lo,"P",{});var Nh=i(Fn);wF=s(Nh,"The "),Jp=a(Nh,"A",{href:!0});var VC=i(Jp);$F=s(VC,"TFBertForMaskedLM"),VC.forEach(t),xF=s(Nh," forward method, overrides the "),tu=a(Nh,"CODE",{});var KC=i(tu);FF=s(KC,"__call__"),KC.forEach(t),BF=s(Nh," special method."),Nh.forEach(t),MF=p(Lo),T(lr.$$.fragment,Lo),EF=p(Lo),T(dr.$$.fragment,Lo),zF=p(Lo),T(cr.$$.fragment,Lo),Lo.forEach(t),so.forEach(t),Cb=p(o),Bn=a(o,"H2",{class:!0});var lk=i(Bn);pr=a(lk,"A",{id:!0,class:!0,href:!0});var JC=i(pr);ou=a(JC,"SPAN",{});var GC=i(ou);T(Al.$$.fragment,GC),GC.forEach(t),JC.forEach(t),PF=p(lk),nu=a(lk,"SPAN",{});var XC=i(nu);qF=s(XC,"TFBertForNextSentencePrediction"),XC.forEach(t),lk.forEach(t),Nb=p(o),Ye=a(o,"DIV",{class:!0});var ro=i(Ye);T(Il.$$.fragment,ro),jF=p(ro),Ll=a(ro,"P",{});var dk=i(Ll);CF=s(dk,"Bert Model with a "),su=a(dk,"CODE",{});var YC=i(su);NF=s(YC,"next sentence prediction (classification)"),YC.forEach(t),OF=s(dk," head on top."),dk.forEach(t),AF=p(ro),Dl=a(ro,"P",{});var ck=i(Dl);IF=s(ck,"This model inherits from "),Gp=a(ck,"A",{href:!0});var ZC=i(Gp);LF=s(ZC,"TFPreTrainedModel"),ZC.forEach(t),DF=s(ck,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ck.forEach(t),SF=p(ro),Sl=a(ro,"P",{});var pk=i(Sl);UF=s(pk,"This model is also a "),Ul=a(pk,"A",{href:!0,rel:!0});var e6=i(Ul);WF=s(e6,"tf.keras.Model"),e6.forEach(t),HF=s(pk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pk.forEach(t),RF=p(ro),T(hr.$$.fragment,ro),QF=p(ro),Rt=a(ro,"DIV",{class:!0});var ua=i(Rt);T(Wl.$$.fragment,ua),VF=p(ua),Mn=a(ua,"P",{});var Oh=i(Mn);KF=s(Oh,"The "),Xp=a(Oh,"A",{href:!0});var t6=i(Xp);JF=s(t6,"TFBertForNextSentencePrediction"),t6.forEach(t),GF=s(Oh," forward method, overrides the "),ru=a(Oh,"CODE",{});var o6=i(ru);XF=s(o6,"__call__"),o6.forEach(t),YF=s(Oh," special method."),Oh.forEach(t),ZF=p(ua),T(fr.$$.fragment,ua),e4=p(ua),T(mr.$$.fragment,ua),ua.forEach(t),ro.forEach(t),Ob=p(o),En=a(o,"H2",{class:!0});var hk=i(En);ur=a(hk,"A",{id:!0,class:!0,href:!0});var n6=i(ur);au=a(n6,"SPAN",{});var s6=i(au);T(Hl.$$.fragment,s6),s6.forEach(t),n6.forEach(t),t4=p(hk),iu=a(hk,"SPAN",{});var r6=i(iu);o4=s(r6,"TFBertForSequenceClassification"),r6.forEach(t),hk.forEach(t),Ab=p(o),Ze=a(o,"DIV",{class:!0});var ao=i(Ze);T(Rl.$$.fragment,ao),n4=p(ao),lu=a(ao,"P",{});var a6=i(lu);s4=s(a6,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),a6.forEach(t),r4=p(ao),Ql=a(ao,"P",{});var fk=i(Ql);a4=s(fk,"This model inherits from "),Yp=a(fk,"A",{href:!0});var i6=i(Yp);i4=s(i6,"TFPreTrainedModel"),i6.forEach(t),l4=s(fk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fk.forEach(t),d4=p(ao),Vl=a(ao,"P",{});var mk=i(Vl);c4=s(mk,"This model is also a "),Kl=a(mk,"A",{href:!0,rel:!0});var l6=i(Kl);p4=s(l6,"tf.keras.Model"),l6.forEach(t),h4=s(mk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mk.forEach(t),f4=p(ao),T(gr.$$.fragment,ao),m4=p(ao),vt=a(ao,"DIV",{class:!0});var Do=i(vt);T(Jl.$$.fragment,Do),u4=p(Do),zn=a(Do,"P",{});var Ah=i(zn);g4=s(Ah,"The "),Zp=a(Ah,"A",{href:!0});var d6=i(Zp);_4=s(d6,"TFBertForSequenceClassification"),d6.forEach(t),b4=s(Ah," forward method, overrides the "),du=a(Ah,"CODE",{});var c6=i(du);v4=s(c6,"__call__"),c6.forEach(t),k4=s(Ah," special method."),Ah.forEach(t),y4=p(Do),T(_r.$$.fragment,Do),T4=p(Do),T(br.$$.fragment,Do),w4=p(Do),T(vr.$$.fragment,Do),Do.forEach(t),ao.forEach(t),Ib=p(o),Pn=a(o,"H2",{class:!0});var uk=i(Pn);kr=a(uk,"A",{id:!0,class:!0,href:!0});var p6=i(kr);cu=a(p6,"SPAN",{});var h6=i(cu);T(Gl.$$.fragment,h6),h6.forEach(t),p6.forEach(t),$4=p(uk),pu=a(uk,"SPAN",{});var f6=i(pu);x4=s(f6,"TFBertForMultipleChoice"),f6.forEach(t),uk.forEach(t),Lb=p(o),et=a(o,"DIV",{class:!0});var io=i(et);T(Xl.$$.fragment,io),F4=p(io),hu=a(io,"P",{});var m6=i(hu);B4=s(m6,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),m6.forEach(t),M4=p(io),Yl=a(io,"P",{});var gk=i(Yl);E4=s(gk,"This model inherits from "),eh=a(gk,"A",{href:!0});var u6=i(eh);z4=s(u6,"TFPreTrainedModel"),u6.forEach(t),P4=s(gk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gk.forEach(t),q4=p(io),Zl=a(io,"P",{});var _k=i(Zl);j4=s(_k,"This model is also a "),ed=a(_k,"A",{href:!0,rel:!0});var g6=i(ed);C4=s(g6,"tf.keras.Model"),g6.forEach(t),N4=s(_k,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_k.forEach(t),O4=p(io),T(yr.$$.fragment,io),A4=p(io),Qt=a(io,"DIV",{class:!0});var ga=i(Qt);T(td.$$.fragment,ga),I4=p(ga),qn=a(ga,"P",{});var Ih=i(qn);L4=s(Ih,"The "),th=a(Ih,"A",{href:!0});var _6=i(th);D4=s(_6,"TFBertForMultipleChoice"),_6.forEach(t),S4=s(Ih," forward method, overrides the "),fu=a(Ih,"CODE",{});var b6=i(fu);U4=s(b6,"__call__"),b6.forEach(t),W4=s(Ih," special method."),Ih.forEach(t),H4=p(ga),T(Tr.$$.fragment,ga),R4=p(ga),T(wr.$$.fragment,ga),ga.forEach(t),io.forEach(t),Db=p(o),jn=a(o,"H2",{class:!0});var bk=i(jn);$r=a(bk,"A",{id:!0,class:!0,href:!0});var v6=i($r);mu=a(v6,"SPAN",{});var k6=i(mu);T(od.$$.fragment,k6),k6.forEach(t),v6.forEach(t),Q4=p(bk),uu=a(bk,"SPAN",{});var y6=i(uu);V4=s(y6,"TFBertForTokenClassification"),y6.forEach(t),bk.forEach(t),Sb=p(o),tt=a(o,"DIV",{class:!0});var lo=i(tt);T(nd.$$.fragment,lo),K4=p(lo),gu=a(lo,"P",{});var T6=i(gu);J4=s(T6,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),T6.forEach(t),G4=p(lo),sd=a(lo,"P",{});var vk=i(sd);X4=s(vk,"This model inherits from "),oh=a(vk,"A",{href:!0});var w6=i(oh);Y4=s(w6,"TFPreTrainedModel"),w6.forEach(t),Z4=s(vk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vk.forEach(t),eB=p(lo),rd=a(lo,"P",{});var kk=i(rd);tB=s(kk,"This model is also a "),ad=a(kk,"A",{href:!0,rel:!0});var $6=i(ad);oB=s($6,"tf.keras.Model"),$6.forEach(t),nB=s(kk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kk.forEach(t),sB=p(lo),T(xr.$$.fragment,lo),rB=p(lo),kt=a(lo,"DIV",{class:!0});var So=i(kt);T(id.$$.fragment,So),aB=p(So),Cn=a(So,"P",{});var Lh=i(Cn);iB=s(Lh,"The "),nh=a(Lh,"A",{href:!0});var x6=i(nh);lB=s(x6,"TFBertForTokenClassification"),x6.forEach(t),dB=s(Lh," forward method, overrides the "),_u=a(Lh,"CODE",{});var F6=i(_u);cB=s(F6,"__call__"),F6.forEach(t),pB=s(Lh," special method."),Lh.forEach(t),hB=p(So),T(Fr.$$.fragment,So),fB=p(So),T(Br.$$.fragment,So),mB=p(So),T(Mr.$$.fragment,So),So.forEach(t),lo.forEach(t),Ub=p(o),Nn=a(o,"H2",{class:!0});var yk=i(Nn);Er=a(yk,"A",{id:!0,class:!0,href:!0});var B6=i(Er);bu=a(B6,"SPAN",{});var M6=i(bu);T(ld.$$.fragment,M6),M6.forEach(t),B6.forEach(t),uB=p(yk),vu=a(yk,"SPAN",{});var E6=i(vu);gB=s(E6,"TFBertForQuestionAnswering"),E6.forEach(t),yk.forEach(t),Wb=p(o),ot=a(o,"DIV",{class:!0});var co=i(ot);T(dd.$$.fragment,co),_B=p(co),On=a(co,"P",{});var Dh=i(On);bB=s(Dh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ku=a(Dh,"CODE",{});var z6=i(ku);vB=s(z6,"span start logits"),z6.forEach(t),kB=s(Dh," and "),yu=a(Dh,"CODE",{});var P6=i(yu);yB=s(P6,"span end logits"),P6.forEach(t),TB=s(Dh,")."),Dh.forEach(t),wB=p(co),cd=a(co,"P",{});var Tk=i(cd);$B=s(Tk,"This model inherits from "),sh=a(Tk,"A",{href:!0});var q6=i(sh);xB=s(q6,"TFPreTrainedModel"),q6.forEach(t),FB=s(Tk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tk.forEach(t),BB=p(co),pd=a(co,"P",{});var wk=i(pd);MB=s(wk,"This model is also a "),hd=a(wk,"A",{href:!0,rel:!0});var j6=i(hd);EB=s(j6,"tf.keras.Model"),j6.forEach(t),zB=s(wk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wk.forEach(t),PB=p(co),T(zr.$$.fragment,co),qB=p(co),yt=a(co,"DIV",{class:!0});var Uo=i(yt);T(fd.$$.fragment,Uo),jB=p(Uo),An=a(Uo,"P",{});var Sh=i(An);CB=s(Sh,"The "),rh=a(Sh,"A",{href:!0});var C6=i(rh);NB=s(C6,"TFBertForQuestionAnswering"),C6.forEach(t),OB=s(Sh," forward method, overrides the "),Tu=a(Sh,"CODE",{});var N6=i(Tu);AB=s(N6,"__call__"),N6.forEach(t),IB=s(Sh," special method."),Sh.forEach(t),LB=p(Uo),T(Pr.$$.fragment,Uo),DB=p(Uo),T(qr.$$.fragment,Uo),SB=p(Uo),T(jr.$$.fragment,Uo),Uo.forEach(t),co.forEach(t),Hb=p(o),In=a(o,"H2",{class:!0});var $k=i(In);Cr=a($k,"A",{id:!0,class:!0,href:!0});var O6=i(Cr);wu=a(O6,"SPAN",{});var A6=i(wu);T(md.$$.fragment,A6),A6.forEach(t),O6.forEach(t),UB=p($k),$u=a($k,"SPAN",{});var I6=i($u);WB=s(I6,"FlaxBertModel"),I6.forEach(t),$k.forEach(t),Rb=p(o),Ie=a(o,"DIV",{class:!0});var xt=i(Ie);T(ud.$$.fragment,xt),HB=p(xt),xu=a(xt,"P",{});var L6=i(xu);RB=s(L6,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),L6.forEach(t),QB=p(xt),gd=a(xt,"P",{});var xk=i(gd);VB=s(xk,"This model inherits from "),ah=a(xk,"A",{href:!0});var D6=i(ah);KB=s(D6,"FlaxPreTrainedModel"),D6.forEach(t),JB=s(xk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xk.forEach(t),GB=p(xt),_d=a(xt,"P",{});var Fk=i(_d);XB=s(Fk,"This model is also a Flax Linen "),bd=a(Fk,"A",{href:!0,rel:!0});var S6=i(bd);YB=s(S6,"flax.linen.Module"),S6.forEach(t),ZB=s(Fk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fk.forEach(t),eM=p(xt),Fu=a(xt,"P",{});var U6=i(Fu);tM=s(U6,"Finally, this model supports inherent JAX features such as:"),U6.forEach(t),oM=p(xt),fo=a(xt,"UL",{});var _a=i(fo);Bu=a(_a,"LI",{});var W6=i(Bu);vd=a(W6,"A",{href:!0,rel:!0});var H6=i(vd);nM=s(H6,"Just-In-Time (JIT) compilation"),H6.forEach(t),W6.forEach(t),sM=p(_a),Mu=a(_a,"LI",{});var R6=i(Mu);kd=a(R6,"A",{href:!0,rel:!0});var Q6=i(kd);rM=s(Q6,"Automatic Differentiation"),Q6.forEach(t),R6.forEach(t),aM=p(_a),Eu=a(_a,"LI",{});var V6=i(Eu);yd=a(V6,"A",{href:!0,rel:!0});var K6=i(yd);iM=s(K6,"Vectorization"),K6.forEach(t),V6.forEach(t),lM=p(_a),zu=a(_a,"LI",{});var J6=i(zu);Td=a(J6,"A",{href:!0,rel:!0});var G6=i(Td);dM=s(G6,"Parallelization"),G6.forEach(t),J6.forEach(t),_a.forEach(t),cM=p(xt),Vt=a(xt,"DIV",{class:!0});var ba=i(Vt);T(wd.$$.fragment,ba),pM=p(ba),Ln=a(ba,"P",{});var Uh=i(Ln);hM=s(Uh,"The "),Pu=a(Uh,"CODE",{});var X6=i(Pu);fM=s(X6,"FlaxBertPreTrainedModel"),X6.forEach(t),mM=s(Uh," forward method, overrides the "),qu=a(Uh,"CODE",{});var Y6=i(qu);uM=s(Y6,"__call__"),Y6.forEach(t),gM=s(Uh," special method."),Uh.forEach(t),_M=p(ba),T(Nr.$$.fragment,ba),bM=p(ba),T(Or.$$.fragment,ba),ba.forEach(t),xt.forEach(t),Qb=p(o),Dn=a(o,"H2",{class:!0});var Bk=i(Dn);Ar=a(Bk,"A",{id:!0,class:!0,href:!0});var Z6=i(Ar);ju=a(Z6,"SPAN",{});var e5=i(ju);T($d.$$.fragment,e5),e5.forEach(t),Z6.forEach(t),vM=p(Bk),Cu=a(Bk,"SPAN",{});var t5=i(Cu);kM=s(t5,"FlaxBertForPreTraining"),t5.forEach(t),Bk.forEach(t),Vb=p(o),Le=a(o,"DIV",{class:!0});var Ft=i(Le);T(xd.$$.fragment,Ft),yM=p(Ft),Sn=a(Ft,"P",{});var Wh=i(Sn);TM=s(Wh,"Bert Model with two heads on top as done during the pretraining: a "),Nu=a(Wh,"CODE",{});var o5=i(Nu);wM=s(o5,"masked language modeling"),o5.forEach(t),$M=s(Wh," head and a "),Ou=a(Wh,"CODE",{});var n5=i(Ou);xM=s(n5,"next sentence prediction (classification)"),n5.forEach(t),FM=s(Wh," head."),Wh.forEach(t),BM=p(Ft),Fd=a(Ft,"P",{});var Mk=i(Fd);MM=s(Mk,"This model inherits from "),ih=a(Mk,"A",{href:!0});var s5=i(ih);EM=s(s5,"FlaxPreTrainedModel"),s5.forEach(t),zM=s(Mk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Mk.forEach(t),PM=p(Ft),Bd=a(Ft,"P",{});var Ek=i(Bd);qM=s(Ek,"This model is also a Flax Linen "),Md=a(Ek,"A",{href:!0,rel:!0});var r5=i(Md);jM=s(r5,"flax.linen.Module"),r5.forEach(t),CM=s(Ek,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ek.forEach(t),NM=p(Ft),Au=a(Ft,"P",{});var a5=i(Au);OM=s(a5,"Finally, this model supports inherent JAX features such as:"),a5.forEach(t),AM=p(Ft),mo=a(Ft,"UL",{});var va=i(mo);Iu=a(va,"LI",{});var i5=i(Iu);Ed=a(i5,"A",{href:!0,rel:!0});var l5=i(Ed);IM=s(l5,"Just-In-Time (JIT) compilation"),l5.forEach(t),i5.forEach(t),LM=p(va),Lu=a(va,"LI",{});var d5=i(Lu);zd=a(d5,"A",{href:!0,rel:!0});var c5=i(zd);DM=s(c5,"Automatic Differentiation"),c5.forEach(t),d5.forEach(t),SM=p(va),Du=a(va,"LI",{});var p5=i(Du);Pd=a(p5,"A",{href:!0,rel:!0});var h5=i(Pd);UM=s(h5,"Vectorization"),h5.forEach(t),p5.forEach(t),WM=p(va),Su=a(va,"LI",{});var f5=i(Su);qd=a(f5,"A",{href:!0,rel:!0});var m5=i(qd);HM=s(m5,"Parallelization"),m5.forEach(t),f5.forEach(t),va.forEach(t),RM=p(Ft),Kt=a(Ft,"DIV",{class:!0});var ka=i(Kt);T(jd.$$.fragment,ka),QM=p(ka),Un=a(ka,"P",{});var Hh=i(Un);VM=s(Hh,"The "),Uu=a(Hh,"CODE",{});var u5=i(Uu);KM=s(u5,"FlaxBertPreTrainedModel"),u5.forEach(t),JM=s(Hh," forward method, overrides the "),Wu=a(Hh,"CODE",{});var g5=i(Wu);GM=s(g5,"__call__"),g5.forEach(t),XM=s(Hh," special method."),Hh.forEach(t),YM=p(ka),T(Ir.$$.fragment,ka),ZM=p(ka),T(Lr.$$.fragment,ka),ka.forEach(t),Ft.forEach(t),Kb=p(o),Wn=a(o,"H2",{class:!0});var zk=i(Wn);Dr=a(zk,"A",{id:!0,class:!0,href:!0});var _5=i(Dr);Hu=a(_5,"SPAN",{});var b5=i(Hu);T(Cd.$$.fragment,b5),b5.forEach(t),_5.forEach(t),eE=p(zk),Ru=a(zk,"SPAN",{});var v5=i(Ru);tE=s(v5,"FlaxBertForCausalLM"),v5.forEach(t),zk.forEach(t),Jb=p(o),De=a(o,"DIV",{class:!0});var Bt=i(De);T(Nd.$$.fragment,Bt),oE=p(Bt),Qu=a(Bt,"P",{});var k5=i(Qu);nE=s(k5,`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),k5.forEach(t),sE=p(Bt),Od=a(Bt,"P",{});var Pk=i(Od);rE=s(Pk,"This model inherits from "),lh=a(Pk,"A",{href:!0});var y5=i(lh);aE=s(y5,"FlaxPreTrainedModel"),y5.forEach(t),iE=s(Pk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Pk.forEach(t),lE=p(Bt),Ad=a(Bt,"P",{});var qk=i(Ad);dE=s(qk,"This model is also a Flax Linen "),Id=a(qk,"A",{href:!0,rel:!0});var T5=i(Id);cE=s(T5,"flax.linen.Module"),T5.forEach(t),pE=s(qk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qk.forEach(t),hE=p(Bt),Vu=a(Bt,"P",{});var w5=i(Vu);fE=s(w5,"Finally, this model supports inherent JAX features such as:"),w5.forEach(t),mE=p(Bt),uo=a(Bt,"UL",{});var ya=i(uo);Ku=a(ya,"LI",{});var $5=i(Ku);Ld=a($5,"A",{href:!0,rel:!0});var x5=i(Ld);uE=s(x5,"Just-In-Time (JIT) compilation"),x5.forEach(t),$5.forEach(t),gE=p(ya),Ju=a(ya,"LI",{});var F5=i(Ju);Dd=a(F5,"A",{href:!0,rel:!0});var B5=i(Dd);_E=s(B5,"Automatic Differentiation"),B5.forEach(t),F5.forEach(t),bE=p(ya),Gu=a(ya,"LI",{});var M5=i(Gu);Sd=a(M5,"A",{href:!0,rel:!0});var E5=i(Sd);vE=s(E5,"Vectorization"),E5.forEach(t),M5.forEach(t),kE=p(ya),Xu=a(ya,"LI",{});var z5=i(Xu);Ud=a(z5,"A",{href:!0,rel:!0});var P5=i(Ud);yE=s(P5,"Parallelization"),P5.forEach(t),z5.forEach(t),ya.forEach(t),TE=p(Bt),Jt=a(Bt,"DIV",{class:!0});var Ta=i(Jt);T(Wd.$$.fragment,Ta),wE=p(Ta),Hn=a(Ta,"P",{});var Rh=i(Hn);$E=s(Rh,"The "),Yu=a(Rh,"CODE",{});var q5=i(Yu);xE=s(q5,"FlaxBertPreTrainedModel"),q5.forEach(t),FE=s(Rh," forward method, overrides the "),Zu=a(Rh,"CODE",{});var j5=i(Zu);BE=s(j5,"__call__"),j5.forEach(t),ME=s(Rh," special method."),Rh.forEach(t),EE=p(Ta),T(Sr.$$.fragment,Ta),zE=p(Ta),T(Ur.$$.fragment,Ta),Ta.forEach(t),Bt.forEach(t),Gb=p(o),Rn=a(o,"H2",{class:!0});var jk=i(Rn);Wr=a(jk,"A",{id:!0,class:!0,href:!0});var C5=i(Wr);eg=a(C5,"SPAN",{});var N5=i(eg);T(Hd.$$.fragment,N5),N5.forEach(t),C5.forEach(t),PE=p(jk),tg=a(jk,"SPAN",{});var O5=i(tg);qE=s(O5,"FlaxBertForMaskedLM"),O5.forEach(t),jk.forEach(t),Xb=p(o),Se=a(o,"DIV",{class:!0});var Mt=i(Se);T(Rd.$$.fragment,Mt),jE=p(Mt),Qd=a(Mt,"P",{});var Ck=i(Qd);CE=s(Ck,"Bert Model with a "),og=a(Ck,"CODE",{});var A5=i(og);NE=s(A5,"language modeling"),A5.forEach(t),OE=s(Ck," head on top."),Ck.forEach(t),AE=p(Mt),Vd=a(Mt,"P",{});var Nk=i(Vd);IE=s(Nk,"This model inherits from "),dh=a(Nk,"A",{href:!0});var I5=i(dh);LE=s(I5,"FlaxPreTrainedModel"),I5.forEach(t),DE=s(Nk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Nk.forEach(t),SE=p(Mt),Kd=a(Mt,"P",{});var Ok=i(Kd);UE=s(Ok,"This model is also a Flax Linen "),Jd=a(Ok,"A",{href:!0,rel:!0});var L5=i(Jd);WE=s(L5,"flax.linen.Module"),L5.forEach(t),HE=s(Ok,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ok.forEach(t),RE=p(Mt),ng=a(Mt,"P",{});var D5=i(ng);QE=s(D5,"Finally, this model supports inherent JAX features such as:"),D5.forEach(t),VE=p(Mt),go=a(Mt,"UL",{});var wa=i(go);sg=a(wa,"LI",{});var S5=i(sg);Gd=a(S5,"A",{href:!0,rel:!0});var U5=i(Gd);KE=s(U5,"Just-In-Time (JIT) compilation"),U5.forEach(t),S5.forEach(t),JE=p(wa),rg=a(wa,"LI",{});var W5=i(rg);Xd=a(W5,"A",{href:!0,rel:!0});var H5=i(Xd);GE=s(H5,"Automatic Differentiation"),H5.forEach(t),W5.forEach(t),XE=p(wa),ag=a(wa,"LI",{});var R5=i(ag);Yd=a(R5,"A",{href:!0,rel:!0});var Q5=i(Yd);YE=s(Q5,"Vectorization"),Q5.forEach(t),R5.forEach(t),ZE=p(wa),ig=a(wa,"LI",{});var V5=i(ig);Zd=a(V5,"A",{href:!0,rel:!0});var K5=i(Zd);ez=s(K5,"Parallelization"),K5.forEach(t),V5.forEach(t),wa.forEach(t),tz=p(Mt),Gt=a(Mt,"DIV",{class:!0});var $a=i(Gt);T(ec.$$.fragment,$a),oz=p($a),Qn=a($a,"P",{});var Qh=i(Qn);nz=s(Qh,"The "),lg=a(Qh,"CODE",{});var J5=i(lg);sz=s(J5,"FlaxBertPreTrainedModel"),J5.forEach(t),rz=s(Qh," forward method, overrides the "),dg=a(Qh,"CODE",{});var G5=i(dg);az=s(G5,"__call__"),G5.forEach(t),iz=s(Qh," special method."),Qh.forEach(t),lz=p($a),T(Hr.$$.fragment,$a),dz=p($a),T(Rr.$$.fragment,$a),$a.forEach(t),Mt.forEach(t),Yb=p(o),Vn=a(o,"H2",{class:!0});var Ak=i(Vn);Qr=a(Ak,"A",{id:!0,class:!0,href:!0});var X5=i(Qr);cg=a(X5,"SPAN",{});var Y5=i(cg);T(tc.$$.fragment,Y5),Y5.forEach(t),X5.forEach(t),cz=p(Ak),pg=a(Ak,"SPAN",{});var Z5=i(pg);pz=s(Z5,"FlaxBertForNextSentencePrediction"),Z5.forEach(t),Ak.forEach(t),Zb=p(o),Ue=a(o,"DIV",{class:!0});var Et=i(Ue);T(oc.$$.fragment,Et),hz=p(Et),nc=a(Et,"P",{});var Ik=i(nc);fz=s(Ik,"Bert Model with a "),hg=a(Ik,"CODE",{});var eN=i(hg);mz=s(eN,"next sentence prediction (classification)"),eN.forEach(t),uz=s(Ik," head on top."),Ik.forEach(t),gz=p(Et),sc=a(Et,"P",{});var Lk=i(sc);_z=s(Lk,"This model inherits from "),ch=a(Lk,"A",{href:!0});var tN=i(ch);bz=s(tN,"FlaxPreTrainedModel"),tN.forEach(t),vz=s(Lk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Lk.forEach(t),kz=p(Et),rc=a(Et,"P",{});var Dk=i(rc);yz=s(Dk,"This model is also a Flax Linen "),ac=a(Dk,"A",{href:!0,rel:!0});var oN=i(ac);Tz=s(oN,"flax.linen.Module"),oN.forEach(t),wz=s(Dk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Dk.forEach(t),$z=p(Et),fg=a(Et,"P",{});var nN=i(fg);xz=s(nN,"Finally, this model supports inherent JAX features such as:"),nN.forEach(t),Fz=p(Et),_o=a(Et,"UL",{});var xa=i(_o);mg=a(xa,"LI",{});var sN=i(mg);ic=a(sN,"A",{href:!0,rel:!0});var rN=i(ic);Bz=s(rN,"Just-In-Time (JIT) compilation"),rN.forEach(t),sN.forEach(t),Mz=p(xa),ug=a(xa,"LI",{});var aN=i(ug);lc=a(aN,"A",{href:!0,rel:!0});var iN=i(lc);Ez=s(iN,"Automatic Differentiation"),iN.forEach(t),aN.forEach(t),zz=p(xa),gg=a(xa,"LI",{});var lN=i(gg);dc=a(lN,"A",{href:!0,rel:!0});var dN=i(dc);Pz=s(dN,"Vectorization"),dN.forEach(t),lN.forEach(t),qz=p(xa),_g=a(xa,"LI",{});var cN=i(_g);cc=a(cN,"A",{href:!0,rel:!0});var pN=i(cc);jz=s(pN,"Parallelization"),pN.forEach(t),cN.forEach(t),xa.forEach(t),Cz=p(Et),Xt=a(Et,"DIV",{class:!0});var Fa=i(Xt);T(pc.$$.fragment,Fa),Nz=p(Fa),Kn=a(Fa,"P",{});var Vh=i(Kn);Oz=s(Vh,"The "),bg=a(Vh,"CODE",{});var hN=i(bg);Az=s(hN,"FlaxBertPreTrainedModel"),hN.forEach(t),Iz=s(Vh," forward method, overrides the "),vg=a(Vh,"CODE",{});var fN=i(vg);Lz=s(fN,"__call__"),fN.forEach(t),Dz=s(Vh," special method."),Vh.forEach(t),Sz=p(Fa),T(Vr.$$.fragment,Fa),Uz=p(Fa),T(Kr.$$.fragment,Fa),Fa.forEach(t),Et.forEach(t),ev=p(o),Jn=a(o,"H2",{class:!0});var Sk=i(Jn);Jr=a(Sk,"A",{id:!0,class:!0,href:!0});var mN=i(Jr);kg=a(mN,"SPAN",{});var uN=i(kg);T(hc.$$.fragment,uN),uN.forEach(t),mN.forEach(t),Wz=p(Sk),yg=a(Sk,"SPAN",{});var gN=i(yg);Hz=s(gN,"FlaxBertForSequenceClassification"),gN.forEach(t),Sk.forEach(t),tv=p(o),We=a(o,"DIV",{class:!0});var zt=i(We);T(fc.$$.fragment,zt),Rz=p(zt),Tg=a(zt,"P",{});var _N=i(Tg);Qz=s(_N,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),_N.forEach(t),Vz=p(zt),mc=a(zt,"P",{});var Uk=i(mc);Kz=s(Uk,"This model inherits from "),ph=a(Uk,"A",{href:!0});var bN=i(ph);Jz=s(bN,"FlaxPreTrainedModel"),bN.forEach(t),Gz=s(Uk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uk.forEach(t),Xz=p(zt),uc=a(zt,"P",{});var Wk=i(uc);Yz=s(Wk,"This model is also a Flax Linen "),gc=a(Wk,"A",{href:!0,rel:!0});var vN=i(gc);Zz=s(vN,"flax.linen.Module"),vN.forEach(t),eP=s(Wk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Wk.forEach(t),tP=p(zt),wg=a(zt,"P",{});var kN=i(wg);oP=s(kN,"Finally, this model supports inherent JAX features such as:"),kN.forEach(t),nP=p(zt),bo=a(zt,"UL",{});var Ba=i(bo);$g=a(Ba,"LI",{});var yN=i($g);_c=a(yN,"A",{href:!0,rel:!0});var TN=i(_c);sP=s(TN,"Just-In-Time (JIT) compilation"),TN.forEach(t),yN.forEach(t),rP=p(Ba),xg=a(Ba,"LI",{});var wN=i(xg);bc=a(wN,"A",{href:!0,rel:!0});var $N=i(bc);aP=s($N,"Automatic Differentiation"),$N.forEach(t),wN.forEach(t),iP=p(Ba),Fg=a(Ba,"LI",{});var xN=i(Fg);vc=a(xN,"A",{href:!0,rel:!0});var FN=i(vc);lP=s(FN,"Vectorization"),FN.forEach(t),xN.forEach(t),dP=p(Ba),Bg=a(Ba,"LI",{});var BN=i(Bg);kc=a(BN,"A",{href:!0,rel:!0});var MN=i(kc);cP=s(MN,"Parallelization"),MN.forEach(t),BN.forEach(t),Ba.forEach(t),pP=p(zt),Yt=a(zt,"DIV",{class:!0});var Ma=i(Yt);T(yc.$$.fragment,Ma),hP=p(Ma),Gn=a(Ma,"P",{});var Kh=i(Gn);fP=s(Kh,"The "),Mg=a(Kh,"CODE",{});var EN=i(Mg);mP=s(EN,"FlaxBertPreTrainedModel"),EN.forEach(t),uP=s(Kh," forward method, overrides the "),Eg=a(Kh,"CODE",{});var zN=i(Eg);gP=s(zN,"__call__"),zN.forEach(t),_P=s(Kh," special method."),Kh.forEach(t),bP=p(Ma),T(Gr.$$.fragment,Ma),vP=p(Ma),T(Xr.$$.fragment,Ma),Ma.forEach(t),zt.forEach(t),ov=p(o),Xn=a(o,"H2",{class:!0});var Hk=i(Xn);Yr=a(Hk,"A",{id:!0,class:!0,href:!0});var PN=i(Yr);zg=a(PN,"SPAN",{});var qN=i(zg);T(Tc.$$.fragment,qN),qN.forEach(t),PN.forEach(t),kP=p(Hk),Pg=a(Hk,"SPAN",{});var jN=i(Pg);yP=s(jN,"FlaxBertForMultipleChoice"),jN.forEach(t),Hk.forEach(t),nv=p(o),He=a(o,"DIV",{class:!0});var Pt=i(He);T(wc.$$.fragment,Pt),TP=p(Pt),qg=a(Pt,"P",{});var CN=i(qg);wP=s(CN,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),CN.forEach(t),$P=p(Pt),$c=a(Pt,"P",{});var Rk=i($c);xP=s(Rk,"This model inherits from "),hh=a(Rk,"A",{href:!0});var NN=i(hh);FP=s(NN,"FlaxPreTrainedModel"),NN.forEach(t),BP=s(Rk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rk.forEach(t),MP=p(Pt),xc=a(Pt,"P",{});var Qk=i(xc);EP=s(Qk,"This model is also a Flax Linen "),Fc=a(Qk,"A",{href:!0,rel:!0});var ON=i(Fc);zP=s(ON,"flax.linen.Module"),ON.forEach(t),PP=s(Qk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Qk.forEach(t),qP=p(Pt),jg=a(Pt,"P",{});var AN=i(jg);jP=s(AN,"Finally, this model supports inherent JAX features such as:"),AN.forEach(t),CP=p(Pt),vo=a(Pt,"UL",{});var Ea=i(vo);Cg=a(Ea,"LI",{});var IN=i(Cg);Bc=a(IN,"A",{href:!0,rel:!0});var LN=i(Bc);NP=s(LN,"Just-In-Time (JIT) compilation"),LN.forEach(t),IN.forEach(t),OP=p(Ea),Ng=a(Ea,"LI",{});var DN=i(Ng);Mc=a(DN,"A",{href:!0,rel:!0});var SN=i(Mc);AP=s(SN,"Automatic Differentiation"),SN.forEach(t),DN.forEach(t),IP=p(Ea),Og=a(Ea,"LI",{});var UN=i(Og);Ec=a(UN,"A",{href:!0,rel:!0});var WN=i(Ec);LP=s(WN,"Vectorization"),WN.forEach(t),UN.forEach(t),DP=p(Ea),Ag=a(Ea,"LI",{});var HN=i(Ag);zc=a(HN,"A",{href:!0,rel:!0});var RN=i(zc);SP=s(RN,"Parallelization"),RN.forEach(t),HN.forEach(t),Ea.forEach(t),UP=p(Pt),Zt=a(Pt,"DIV",{class:!0});var za=i(Zt);T(Pc.$$.fragment,za),WP=p(za),Yn=a(za,"P",{});var Jh=i(Yn);HP=s(Jh,"The "),Ig=a(Jh,"CODE",{});var QN=i(Ig);RP=s(QN,"FlaxBertPreTrainedModel"),QN.forEach(t),QP=s(Jh," forward method, overrides the "),Lg=a(Jh,"CODE",{});var VN=i(Lg);VP=s(VN,"__call__"),VN.forEach(t),KP=s(Jh," special method."),Jh.forEach(t),JP=p(za),T(Zr.$$.fragment,za),GP=p(za),T(ea.$$.fragment,za),za.forEach(t),Pt.forEach(t),sv=p(o),Zn=a(o,"H2",{class:!0});var Vk=i(Zn);ta=a(Vk,"A",{id:!0,class:!0,href:!0});var KN=i(ta);Dg=a(KN,"SPAN",{});var JN=i(Dg);T(qc.$$.fragment,JN),JN.forEach(t),KN.forEach(t),XP=p(Vk),Sg=a(Vk,"SPAN",{});var GN=i(Sg);YP=s(GN,"FlaxBertForTokenClassification"),GN.forEach(t),Vk.forEach(t),rv=p(o),Re=a(o,"DIV",{class:!0});var qt=i(Re);T(jc.$$.fragment,qt),ZP=p(qt),Ug=a(qt,"P",{});var XN=i(Ug);eq=s(XN,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),XN.forEach(t),tq=p(qt),Cc=a(qt,"P",{});var Kk=i(Cc);oq=s(Kk,"This model inherits from "),fh=a(Kk,"A",{href:!0});var YN=i(fh);nq=s(YN,"FlaxPreTrainedModel"),YN.forEach(t),sq=s(Kk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Kk.forEach(t),rq=p(qt),Nc=a(qt,"P",{});var Jk=i(Nc);aq=s(Jk,"This model is also a Flax Linen "),Oc=a(Jk,"A",{href:!0,rel:!0});var ZN=i(Oc);iq=s(ZN,"flax.linen.Module"),ZN.forEach(t),lq=s(Jk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Jk.forEach(t),dq=p(qt),Wg=a(qt,"P",{});var e8=i(Wg);cq=s(e8,"Finally, this model supports inherent JAX features such as:"),e8.forEach(t),pq=p(qt),ko=a(qt,"UL",{});var Pa=i(ko);Hg=a(Pa,"LI",{});var t8=i(Hg);Ac=a(t8,"A",{href:!0,rel:!0});var o8=i(Ac);hq=s(o8,"Just-In-Time (JIT) compilation"),o8.forEach(t),t8.forEach(t),fq=p(Pa),Rg=a(Pa,"LI",{});var n8=i(Rg);Ic=a(n8,"A",{href:!0,rel:!0});var s8=i(Ic);mq=s(s8,"Automatic Differentiation"),s8.forEach(t),n8.forEach(t),uq=p(Pa),Qg=a(Pa,"LI",{});var r8=i(Qg);Lc=a(r8,"A",{href:!0,rel:!0});var a8=i(Lc);gq=s(a8,"Vectorization"),a8.forEach(t),r8.forEach(t),_q=p(Pa),Vg=a(Pa,"LI",{});var i8=i(Vg);Dc=a(i8,"A",{href:!0,rel:!0});var l8=i(Dc);bq=s(l8,"Parallelization"),l8.forEach(t),i8.forEach(t),Pa.forEach(t),vq=p(qt),eo=a(qt,"DIV",{class:!0});var qa=i(eo);T(Sc.$$.fragment,qa),kq=p(qa),es=a(qa,"P",{});var Gh=i(es);yq=s(Gh,"The "),Kg=a(Gh,"CODE",{});var d8=i(Kg);Tq=s(d8,"FlaxBertPreTrainedModel"),d8.forEach(t),wq=s(Gh," forward method, overrides the "),Jg=a(Gh,"CODE",{});var c8=i(Jg);$q=s(c8,"__call__"),c8.forEach(t),xq=s(Gh," special method."),Gh.forEach(t),Fq=p(qa),T(oa.$$.fragment,qa),Bq=p(qa),T(na.$$.fragment,qa),qa.forEach(t),qt.forEach(t),av=p(o),ts=a(o,"H2",{class:!0});var Gk=i(ts);sa=a(Gk,"A",{id:!0,class:!0,href:!0});var p8=i(sa);Gg=a(p8,"SPAN",{});var h8=i(Gg);T(Uc.$$.fragment,h8),h8.forEach(t),p8.forEach(t),Mq=p(Gk),Xg=a(Gk,"SPAN",{});var f8=i(Xg);Eq=s(f8,"FlaxBertForQuestionAnswering"),f8.forEach(t),Gk.forEach(t),iv=p(o),Qe=a(o,"DIV",{class:!0});var jt=i(Qe);T(Wc.$$.fragment,jt),zq=p(jt),os=a(jt,"P",{});var Xh=i(os);Pq=s(Xh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Yg=a(Xh,"CODE",{});var m8=i(Yg);qq=s(m8,"span start logits"),m8.forEach(t),jq=s(Xh," and "),Zg=a(Xh,"CODE",{});var u8=i(Zg);Cq=s(u8,"span end logits"),u8.forEach(t),Nq=s(Xh,")."),Xh.forEach(t),Oq=p(jt),Hc=a(jt,"P",{});var Xk=i(Hc);Aq=s(Xk,"This model inherits from "),mh=a(Xk,"A",{href:!0});var g8=i(mh);Iq=s(g8,"FlaxPreTrainedModel"),g8.forEach(t),Lq=s(Xk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xk.forEach(t),Dq=p(jt),Rc=a(jt,"P",{});var Yk=i(Rc);Sq=s(Yk,"This model is also a Flax Linen "),Qc=a(Yk,"A",{href:!0,rel:!0});var _8=i(Qc);Uq=s(_8,"flax.linen.Module"),_8.forEach(t),Wq=s(Yk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Yk.forEach(t),Hq=p(jt),e_=a(jt,"P",{});var b8=i(e_);Rq=s(b8,"Finally, this model supports inherent JAX features such as:"),b8.forEach(t),Qq=p(jt),yo=a(jt,"UL",{});var ja=i(yo);t_=a(ja,"LI",{});var v8=i(t_);Vc=a(v8,"A",{href:!0,rel:!0});var k8=i(Vc);Vq=s(k8,"Just-In-Time (JIT) compilation"),k8.forEach(t),v8.forEach(t),Kq=p(ja),o_=a(ja,"LI",{});var y8=i(o_);Kc=a(y8,"A",{href:!0,rel:!0});var T8=i(Kc);Jq=s(T8,"Automatic Differentiation"),T8.forEach(t),y8.forEach(t),Gq=p(ja),n_=a(ja,"LI",{});var w8=i(n_);Jc=a(w8,"A",{href:!0,rel:!0});var $8=i(Jc);Xq=s($8,"Vectorization"),$8.forEach(t),w8.forEach(t),Yq=p(ja),s_=a(ja,"LI",{});var x8=i(s_);Gc=a(x8,"A",{href:!0,rel:!0});var F8=i(Gc);Zq=s(F8,"Parallelization"),F8.forEach(t),x8.forEach(t),ja.forEach(t),ej=p(jt),to=a(jt,"DIV",{class:!0});var Ca=i(to);T(Xc.$$.fragment,Ca),tj=p(Ca),ns=a(Ca,"P",{});var Yh=i(ns);oj=s(Yh,"The "),r_=a(Yh,"CODE",{});var B8=i(r_);nj=s(B8,"FlaxBertPreTrainedModel"),B8.forEach(t),sj=s(Yh," forward method, overrides the "),a_=a(Yh,"CODE",{});var M8=i(a_);rj=s(M8,"__call__"),M8.forEach(t),aj=s(Yh," special method."),Yh.forEach(t),ij=p(Ca),T(ra.$$.fragment,Ca),lj=p(Ca),T(aa.$$.fragment,Ca),Ca.forEach(t),jt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(t7)),u(f,"id","bert"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#bert"),u(h,"class","relative group"),u(ee,"id","overview"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#overview"),u(z,"class","relative group"),u(ae,"href","https://arxiv.org/abs/1810.04805"),u(ae,"rel","nofollow"),u(Be,"href","https://huggingface.co/thomwolf"),u(Be,"rel","nofollow"),u(Me,"href","https://github.com/google-research/bert"),u(Me,"rel","nofollow"),u(Fe,"id","transformers.BertConfig"),u(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fe,"href","#transformers.BertConfig"),u($e,"class","relative group"),u(hp,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertModel"),u(fp,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.TFBertModel"),u(Oa,"href","https://huggingface.co/bert-base-uncased"),u(Oa,"rel","nofollow"),u(mp,"href","/docs/transformers/v4.20.1/en/main_classes/configuration#transformers.PretrainedConfig"),u(up,"href","/docs/transformers/v4.20.1/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(cs,"id","transformers.BertTokenizer"),u(cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(cs,"href","#transformers.BertTokenizer"),u(Ho,"class","relative group"),u(gp,"href","/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ps,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vp,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fs,"id","transformers.BertTokenizerFast"),u(fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fs,"href","#transformers.BertTokenizerFast"),u(Qo,"class","relative group"),u(kp,"href","/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(us,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(us,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(Ko,"class","relative group"),u(wp,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertForPreTraining"),u(Jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($p,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xp,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertForPreTraining"),u(gs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.BertModel"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.BertModel"),u(Xo,"class","relative group"),u(Fp,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),u(pi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(pi,"rel","nofollow"),u(fi,"href","https://arxiv.org/abs/1706.03762"),u(fi,"rel","nofollow"),u(Bp,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertModel"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ks,"id","transformers.BertForPreTraining"),u(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ks,"href","#transformers.BertForPreTraining"),u(Zo,"class","relative group"),u(Mp,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),u(vi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(vi,"rel","nofollow"),u(Ep,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertForPreTraining"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ws,"id","transformers.BertLMHeadModel"),u(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ws,"href","#transformers.BertLMHeadModel"),u(on,"class","relative group"),u(zp,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),u(Fi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Fi,"rel","nofollow"),u(Pp,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertLMHeadModel"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fs,"id","transformers.BertForMaskedLM"),u(Fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fs,"href","#transformers.BertForMaskedLM"),u(sn,"class","relative group"),u(qp,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),u(ji,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ji,"rel","nofollow"),u(jp,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertForMaskedLM"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zs,"id","transformers.BertForNextSentencePrediction"),u(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zs,"href","#transformers.BertForNextSentencePrediction"),u(an,"class","relative group"),u(Cp,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),u(Di,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Di,"rel","nofollow"),u(Np,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertForNextSentencePrediction"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.BertForSequenceClassification"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.BertForSequenceClassification"),u(dn,"class","relative group"),u(Op,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),u(Qi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Qi,"rel","nofollow"),u(Ap,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertForSequenceClassification"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ls,"id","transformers.BertForMultipleChoice"),u(Ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ls,"href","#transformers.BertForMultipleChoice"),u(pn,"class","relative group"),u(Ip,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),u(Yi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Yi,"rel","nofollow"),u(Lp,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertForMultipleChoice"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Us,"id","transformers.BertForTokenClassification"),u(Us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Us,"href","#transformers.BertForTokenClassification"),u(fn,"class","relative group"),u(Dp,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),u(sl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(sl,"rel","nofollow"),u(Sp,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertForTokenClassification"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qs,"id","transformers.BertForQuestionAnswering"),u(Qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qs,"href","#transformers.BertForQuestionAnswering"),u(un,"class","relative group"),u(Up,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),u(cl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(cl,"rel","nofollow"),u(Wp,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertForQuestionAnswering"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gs,"id","transformers.TFBertModel"),u(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gs,"href","#transformers.TFBertModel"),u(bn,"class","relative group"),u(Hp,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(gl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(gl,"rel","nofollow"),u(Rp,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.TFBertModel"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.TFBertForPreTraining"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.TFBertForPreTraining"),u(kn,"class","relative group"),u(Qp,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(Tl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Tl,"rel","nofollow"),u(Vp,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sr,"id","transformers.TFBertLMHeadModel"),u(sr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(sr,"href","#transformers.TFBertLMHeadModel"),u(wn,"class","relative group"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ar,"id","transformers.TFBertForMaskedLM"),u(ar,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ar,"href","#transformers.TFBertForMaskedLM"),u(xn,"class","relative group"),u(Kp,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(Nl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Nl,"rel","nofollow"),u(Jp,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.TFBertForMaskedLM"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pr,"id","transformers.TFBertForNextSentencePrediction"),u(pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pr,"href","#transformers.TFBertForNextSentencePrediction"),u(Bn,"class","relative group"),u(Gp,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ul,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ul,"rel","nofollow"),u(Xp,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ur,"id","transformers.TFBertForSequenceClassification"),u(ur,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ur,"href","#transformers.TFBertForSequenceClassification"),u(En,"class","relative group"),u(Yp,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(Kl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Kl,"rel","nofollow"),u(Zp,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.TFBertForSequenceClassification"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kr,"id","transformers.TFBertForMultipleChoice"),u(kr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(kr,"href","#transformers.TFBertForMultipleChoice"),u(Pn,"class","relative group"),u(eh,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(ed,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ed,"rel","nofollow"),u(th,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.TFBertForMultipleChoice"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($r,"id","transformers.TFBertForTokenClassification"),u($r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($r,"href","#transformers.TFBertForTokenClassification"),u(jn,"class","relative group"),u(oh,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(ad,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ad,"rel","nofollow"),u(nh,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.TFBertForTokenClassification"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Er,"id","transformers.TFBertForQuestionAnswering"),u(Er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Er,"href","#transformers.TFBertForQuestionAnswering"),u(Nn,"class","relative group"),u(sh,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(hd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(hd,"rel","nofollow"),u(rh,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cr,"id","transformers.FlaxBertModel"),u(Cr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cr,"href","#transformers.FlaxBertModel"),u(In,"class","relative group"),u(ah,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(bd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(bd,"rel","nofollow"),u(vd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(vd,"rel","nofollow"),u(kd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(kd,"rel","nofollow"),u(yd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(yd,"rel","nofollow"),u(Td,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Td,"rel","nofollow"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ar,"id","transformers.FlaxBertForPreTraining"),u(Ar,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ar,"href","#transformers.FlaxBertForPreTraining"),u(Dn,"class","relative group"),u(ih,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Md,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Md,"rel","nofollow"),u(Ed,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ed,"rel","nofollow"),u(zd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(zd,"rel","nofollow"),u(Pd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Pd,"rel","nofollow"),u(qd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(qd,"rel","nofollow"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dr,"id","transformers.FlaxBertForCausalLM"),u(Dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dr,"href","#transformers.FlaxBertForCausalLM"),u(Wn,"class","relative group"),u(lh,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Id,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Id,"rel","nofollow"),u(Ld,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ld,"rel","nofollow"),u(Dd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Dd,"rel","nofollow"),u(Sd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Sd,"rel","nofollow"),u(Ud,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ud,"rel","nofollow"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wr,"id","transformers.FlaxBertForMaskedLM"),u(Wr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wr,"href","#transformers.FlaxBertForMaskedLM"),u(Rn,"class","relative group"),u(dh,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Jd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Jd,"rel","nofollow"),u(Gd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Gd,"rel","nofollow"),u(Xd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Xd,"rel","nofollow"),u(Yd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Yd,"rel","nofollow"),u(Zd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Zd,"rel","nofollow"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qr,"id","transformers.FlaxBertForNextSentencePrediction"),u(Qr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qr,"href","#transformers.FlaxBertForNextSentencePrediction"),u(Vn,"class","relative group"),u(ch,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ac,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ac,"rel","nofollow"),u(ic,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ic,"rel","nofollow"),u(lc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(lc,"rel","nofollow"),u(dc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(dc,"rel","nofollow"),u(cc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(cc,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jr,"id","transformers.FlaxBertForSequenceClassification"),u(Jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jr,"href","#transformers.FlaxBertForSequenceClassification"),u(Jn,"class","relative group"),u(ph,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(gc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(gc,"rel","nofollow"),u(_c,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(_c,"rel","nofollow"),u(bc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(bc,"rel","nofollow"),u(vc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(vc,"rel","nofollow"),u(kc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(kc,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yr,"id","transformers.FlaxBertForMultipleChoice"),u(Yr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yr,"href","#transformers.FlaxBertForMultipleChoice"),u(Xn,"class","relative group"),u(hh,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Fc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Fc,"rel","nofollow"),u(Bc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Bc,"rel","nofollow"),u(Mc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Mc,"rel","nofollow"),u(Ec,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ec,"rel","nofollow"),u(zc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(zc,"rel","nofollow"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ta,"id","transformers.FlaxBertForTokenClassification"),u(ta,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ta,"href","#transformers.FlaxBertForTokenClassification"),u(Zn,"class","relative group"),u(fh,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Oc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Oc,"rel","nofollow"),u(Ac,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ac,"rel","nofollow"),u(Ic,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ic,"rel","nofollow"),u(Lc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Lc,"rel","nofollow"),u(Dc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Dc,"rel","nofollow"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sa,"id","transformers.FlaxBertForQuestionAnswering"),u(sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(sa,"href","#transformers.FlaxBertForQuestionAnswering"),u(ts,"class","relative group"),u(mh,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Qc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Qc,"rel","nofollow"),u(Vc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Vc,"rel","nofollow"),u(Kc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Kc,"rel","nofollow"),u(Jc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Jc,"rel","nofollow"),u(Gc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Gc,"rel","nofollow"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,v){e(document.head,d),b(o,_,v),b(o,h,v),e(h,f),e(f,g),w(l,g,null),e(h,m),e(h,M),e(M,be),b(o,X,v),b(o,z,v),e(z,ee),e(ee,L),w(re,L,null),e(z,ve),e(z,D),e(D,ke),b(o,fe,v),b(o,J,v),e(J,O),e(J,ae),e(ae,Y),e(J,P),b(o,j,v),b(o,ie,v),e(ie,H),b(o,me,v),b(o,le,v),e(le,S),e(S,ye),b(o,ue,v),b(o,q,v),e(q,ce),e(ce,R),b(o,ge,v),b(o,de,v),e(de,Q),b(o,_e,v),b(o,te,v),e(te,N),e(N,Te),e(te,V),e(te,pe),e(pe,k),b(o,E,v),b(o,K,v),e(K,ze),e(K,Be),e(Be,A),e(K,Pe),e(K,Me),e(Me,qe),e(K,I),b(o,W,v),b(o,$e,v),e($e,Fe),e(Fe,U),w(Ee,U,null),e($e,je),e($e,he),e(he,Ce),b(o,Z_,v),b(o,Ct,v),w(Na,Ct,null),e(Ct,Zk),e(Ct,po),e(po,ey),e(po,hp),e(hp,ty),e(po,oy),e(po,fp),e(fp,ny),e(po,sy),e(po,Oa),e(Oa,ry),e(po,ay),e(Ct,iy),e(Ct,Wo),e(Wo,ly),e(Wo,mp),e(mp,dy),e(Wo,cy),e(Wo,up),e(up,py),e(Wo,hy),e(Ct,fy),w(ds,Ct,null),b(o,eb,v),b(o,Ho,v),e(Ho,cs),e(cs,Zh),w(Aa,Zh,null),e(Ho,my),e(Ho,ef),e(ef,uy),b(o,tb,v),b(o,Ne,v),w(Ia,Ne,null),e(Ne,gy),e(Ne,tf),e(tf,_y),e(Ne,by),e(Ne,La),e(La,vy),e(La,gp),e(gp,ky),e(La,yy),e(Ne,Ty),e(Ne,xo),w(Da,xo,null),e(xo,wy),e(xo,of),e(of,$y),e(xo,xy),e(xo,Sa),e(Sa,_p),e(_p,Fy),e(_p,nf),e(nf,By),e(Sa,My),e(Sa,bp),e(bp,Ey),e(bp,sf),e(sf,zy),e(Ne,Py),e(Ne,ps),w(Ua,ps,null),e(ps,qy),e(ps,Wa),e(Wa,jy),e(Wa,rf),e(rf,Cy),e(Wa,Ny),e(Ne,Oy),e(Ne,Ot),w(Ha,Ot,null),e(Ot,Ay),e(Ot,af),e(af,Iy),e(Ot,Ly),w(hs,Ot,null),e(Ot,Dy),e(Ot,Ro),e(Ro,Sy),e(Ro,lf),e(lf,Uy),e(Ro,Wy),e(Ro,df),e(df,Hy),e(Ro,Ry),e(Ne,Qy),e(Ne,vp),w(Ra,vp,null),b(o,ob,v),b(o,Qo,v),e(Qo,fs),e(fs,cf),w(Qa,cf,null),e(Qo,Vy),e(Qo,pf),e(pf,Ky),b(o,nb,v),b(o,rt,v),w(Va,rt,null),e(rt,Jy),e(rt,Ka),e(Ka,Gy),e(Ka,hf),e(hf,Xy),e(Ka,Yy),e(rt,Zy),e(rt,Ja),e(Ja,eT),e(Ja,kp),e(kp,tT),e(Ja,oT),e(rt,nT),e(rt,Fo),w(Ga,Fo,null),e(Fo,sT),e(Fo,ff),e(ff,rT),e(Fo,aT),e(Fo,Xa),e(Xa,yp),e(yp,iT),e(yp,mf),e(mf,lT),e(Xa,dT),e(Xa,Tp),e(Tp,cT),e(Tp,uf),e(uf,pT),e(rt,hT),e(rt,At),w(Ya,At,null),e(At,fT),e(At,gf),e(gf,mT),e(At,uT),w(ms,At,null),e(At,gT),e(At,Vo),e(Vo,_T),e(Vo,_f),e(_f,bT),e(Vo,vT),e(Vo,bf),e(bf,kT),e(Vo,yT),b(o,sb,v),b(o,Ko,v),e(Ko,us),e(us,vf),w(Za,vf,null),e(Ko,TT),e(Ko,kf),e(kf,wT),b(o,rb,v),b(o,Jo,v),w(ei,Jo,null),e(Jo,$T),e(Jo,ti),e(ti,xT),e(ti,wp),e(wp,FT),e(ti,BT),b(o,ab,v),b(o,Go,v),w(oi,Go,null),e(Go,MT),e(Go,ni),e(ni,ET),e(ni,$p),e($p,zT),e(ni,PT),b(o,ib,v),b(o,ho,v),w(si,ho,null),e(ho,qT),e(ho,ri),e(ri,jT),e(ri,xp),e(xp,CT),e(ri,NT),e(ho,OT),e(ho,gs),w(ai,gs,null),e(gs,AT),e(gs,yf),e(yf,IT),b(o,lb,v),b(o,Xo,v),e(Xo,_s),e(_s,Tf),w(ii,Tf,null),e(Xo,LT),e(Xo,wf),e(wf,DT),b(o,db,v),b(o,Oe,v),w(li,Oe,null),e(Oe,ST),e(Oe,$f),e($f,UT),e(Oe,WT),e(Oe,di),e(di,HT),e(di,Fp),e(Fp,RT),e(di,QT),e(Oe,VT),e(Oe,ci),e(ci,KT),e(ci,pi),e(pi,JT),e(ci,GT),e(Oe,XT),e(Oe,hi),e(hi,YT),e(hi,fi),e(fi,ZT),e(hi,e1),e(Oe,t1),e(Oe,Ke),e(Ke,o1),e(Ke,xf),e(xf,n1),e(Ke,s1),e(Ke,Ff),e(Ff,r1),e(Ke,a1),e(Ke,Bf),e(Bf,i1),e(Ke,l1),e(Ke,Mf),e(Mf,d1),e(Ke,c1),e(Ke,Ef),e(Ef,p1),e(Ke,h1),e(Ke,zf),e(zf,f1),e(Ke,m1),e(Oe,u1),e(Oe,It),w(mi,It,null),e(It,g1),e(It,Yo),e(Yo,_1),e(Yo,Bp),e(Bp,b1),e(Yo,v1),e(Yo,Pf),e(Pf,k1),e(Yo,y1),e(It,T1),w(bs,It,null),e(It,w1),w(vs,It,null),b(o,cb,v),b(o,Zo,v),e(Zo,ks),e(ks,qf),w(ui,qf,null),e(Zo,$1),e(Zo,jf),e(jf,x1),b(o,pb,v),b(o,at,v),w(gi,at,null),e(at,F1),e(at,en),e(en,B1),e(en,Cf),e(Cf,M1),e(en,E1),e(en,Nf),e(Nf,z1),e(en,P1),e(at,q1),e(at,_i),e(_i,j1),e(_i,Mp),e(Mp,C1),e(_i,N1),e(at,O1),e(at,bi),e(bi,A1),e(bi,vi),e(vi,I1),e(bi,L1),e(at,D1),e(at,Lt),w(ki,Lt,null),e(Lt,S1),e(Lt,tn),e(tn,U1),e(tn,Ep),e(Ep,W1),e(tn,H1),e(tn,Of),e(Of,R1),e(tn,Q1),e(Lt,V1),w(ys,Lt,null),e(Lt,K1),w(Ts,Lt,null),b(o,hb,v),b(o,on,v),e(on,ws),e(ws,Af),w(yi,Af,null),e(on,J1),e(on,If),e(If,G1),b(o,fb,v),b(o,it,v),w(Ti,it,null),e(it,X1),e(it,wi),e(wi,Y1),e(wi,Lf),e(Lf,Z1),e(wi,ew),e(it,tw),e(it,$i),e($i,ow),e($i,zp),e(zp,nw),e($i,sw),e(it,rw),e(it,xi),e(xi,aw),e(xi,Fi),e(Fi,iw),e(xi,lw),e(it,dw),e(it,Dt),w(Bi,Dt,null),e(Dt,cw),e(Dt,nn),e(nn,pw),e(nn,Pp),e(Pp,hw),e(nn,fw),e(nn,Df),e(Df,mw),e(nn,uw),e(Dt,gw),w($s,Dt,null),e(Dt,_w),w(xs,Dt,null),b(o,mb,v),b(o,sn,v),e(sn,Fs),e(Fs,Sf),w(Mi,Sf,null),e(sn,bw),e(sn,Uf),e(Uf,vw),b(o,ub,v),b(o,lt,v),w(Ei,lt,null),e(lt,kw),e(lt,zi),e(zi,yw),e(zi,Wf),e(Wf,Tw),e(zi,ww),e(lt,$w),e(lt,Pi),e(Pi,xw),e(Pi,qp),e(qp,Fw),e(Pi,Bw),e(lt,Mw),e(lt,qi),e(qi,Ew),e(qi,ji),e(ji,zw),e(qi,Pw),e(lt,qw),e(lt,mt),w(Ci,mt,null),e(mt,jw),e(mt,rn),e(rn,Cw),e(rn,jp),e(jp,Nw),e(rn,Ow),e(rn,Hf),e(Hf,Aw),e(rn,Iw),e(mt,Lw),w(Bs,mt,null),e(mt,Dw),w(Ms,mt,null),e(mt,Sw),w(Es,mt,null),b(o,gb,v),b(o,an,v),e(an,zs),e(zs,Rf),w(Ni,Rf,null),e(an,Uw),e(an,Qf),e(Qf,Ww),b(o,_b,v),b(o,dt,v),w(Oi,dt,null),e(dt,Hw),e(dt,Ai),e(Ai,Rw),e(Ai,Vf),e(Vf,Qw),e(Ai,Vw),e(dt,Kw),e(dt,Ii),e(Ii,Jw),e(Ii,Cp),e(Cp,Gw),e(Ii,Xw),e(dt,Yw),e(dt,Li),e(Li,Zw),e(Li,Di),e(Di,e2),e(Li,t2),e(dt,o2),e(dt,St),w(Si,St,null),e(St,n2),e(St,ln),e(ln,s2),e(ln,Np),e(Np,r2),e(ln,a2),e(ln,Kf),e(Kf,i2),e(ln,l2),e(St,d2),w(Ps,St,null),e(St,c2),w(qs,St,null),b(o,bb,v),b(o,dn,v),e(dn,js),e(js,Jf),w(Ui,Jf,null),e(dn,p2),e(dn,Gf),e(Gf,h2),b(o,vb,v),b(o,ct,v),w(Wi,ct,null),e(ct,f2),e(ct,Xf),e(Xf,m2),e(ct,u2),e(ct,Hi),e(Hi,g2),e(Hi,Op),e(Op,_2),e(Hi,b2),e(ct,v2),e(ct,Ri),e(Ri,k2),e(Ri,Qi),e(Qi,y2),e(Ri,T2),e(ct,w2),e(ct,Ve),w(Vi,Ve,null),e(Ve,$2),e(Ve,cn),e(cn,x2),e(cn,Ap),e(Ap,F2),e(cn,B2),e(cn,Yf),e(Yf,M2),e(cn,E2),e(Ve,z2),w(Cs,Ve,null),e(Ve,P2),w(Ns,Ve,null),e(Ve,q2),w(Os,Ve,null),e(Ve,j2),w(As,Ve,null),e(Ve,C2),w(Is,Ve,null),b(o,kb,v),b(o,pn,v),e(pn,Ls),e(Ls,Zf),w(Ki,Zf,null),e(pn,N2),e(pn,em),e(em,O2),b(o,yb,v),b(o,pt,v),w(Ji,pt,null),e(pt,A2),e(pt,tm),e(tm,I2),e(pt,L2),e(pt,Gi),e(Gi,D2),e(Gi,Ip),e(Ip,S2),e(Gi,U2),e(pt,W2),e(pt,Xi),e(Xi,H2),e(Xi,Yi),e(Yi,R2),e(Xi,Q2),e(pt,V2),e(pt,Ut),w(Zi,Ut,null),e(Ut,K2),e(Ut,hn),e(hn,J2),e(hn,Lp),e(Lp,G2),e(hn,X2),e(hn,om),e(om,Y2),e(hn,Z2),e(Ut,e$),w(Ds,Ut,null),e(Ut,t$),w(Ss,Ut,null),b(o,Tb,v),b(o,fn,v),e(fn,Us),e(Us,nm),w(el,nm,null),e(fn,o$),e(fn,sm),e(sm,n$),b(o,wb,v),b(o,ht,v),w(tl,ht,null),e(ht,s$),e(ht,rm),e(rm,r$),e(ht,a$),e(ht,ol),e(ol,i$),e(ol,Dp),e(Dp,l$),e(ol,d$),e(ht,c$),e(ht,nl),e(nl,p$),e(nl,sl),e(sl,h$),e(nl,f$),e(ht,m$),e(ht,ut),w(rl,ut,null),e(ut,u$),e(ut,mn),e(mn,g$),e(mn,Sp),e(Sp,_$),e(mn,b$),e(mn,am),e(am,v$),e(mn,k$),e(ut,y$),w(Ws,ut,null),e(ut,T$),w(Hs,ut,null),e(ut,w$),w(Rs,ut,null),b(o,$b,v),b(o,un,v),e(un,Qs),e(Qs,im),w(al,im,null),e(un,$$),e(un,lm),e(lm,x$),b(o,xb,v),b(o,ft,v),w(il,ft,null),e(ft,F$),e(ft,gn),e(gn,B$),e(gn,dm),e(dm,M$),e(gn,E$),e(gn,cm),e(cm,z$),e(gn,P$),e(ft,q$),e(ft,ll),e(ll,j$),e(ll,Up),e(Up,C$),e(ll,N$),e(ft,O$),e(ft,dl),e(dl,A$),e(dl,cl),e(cl,I$),e(dl,L$),e(ft,D$),e(ft,gt),w(pl,gt,null),e(gt,S$),e(gt,_n),e(_n,U$),e(_n,Wp),e(Wp,W$),e(_n,H$),e(_n,pm),e(pm,R$),e(_n,Q$),e(gt,V$),w(Vs,gt,null),e(gt,K$),w(Ks,gt,null),e(gt,J$),w(Js,gt,null),b(o,Fb,v),b(o,bn,v),e(bn,Gs),e(Gs,hm),w(hl,hm,null),e(bn,G$),e(bn,fm),e(fm,X$),b(o,Bb,v),b(o,Je,v),w(fl,Je,null),e(Je,Y$),e(Je,mm),e(mm,Z$),e(Je,e0),e(Je,ml),e(ml,t0),e(ml,Hp),e(Hp,o0),e(ml,n0),e(Je,s0),e(Je,ul),e(ul,r0),e(ul,gl),e(gl,a0),e(ul,i0),e(Je,l0),w(Xs,Je,null),e(Je,d0),e(Je,Wt),w(_l,Wt,null),e(Wt,c0),e(Wt,vn),e(vn,p0),e(vn,Rp),e(Rp,h0),e(vn,f0),e(vn,um),e(um,m0),e(vn,u0),e(Wt,g0),w(Ys,Wt,null),e(Wt,_0),w(Zs,Wt,null),b(o,Mb,v),b(o,kn,v),e(kn,er),e(er,gm),w(bl,gm,null),e(kn,b0),e(kn,_m),e(_m,v0),b(o,Eb,v),b(o,Ge,v),w(vl,Ge,null),e(Ge,k0),e(Ge,yn),e(yn,y0),e(yn,bm),e(bm,T0),e(yn,w0),e(yn,vm),e(vm,$0),e(yn,x0),e(Ge,F0),e(Ge,kl),e(kl,B0),e(kl,Qp),e(Qp,M0),e(kl,E0),e(Ge,z0),e(Ge,yl),e(yl,P0),e(yl,Tl),e(Tl,q0),e(yl,j0),e(Ge,C0),w(tr,Ge,null),e(Ge,N0),e(Ge,Ht),w(wl,Ht,null),e(Ht,O0),e(Ht,Tn),e(Tn,A0),e(Tn,Vp),e(Vp,I0),e(Tn,L0),e(Tn,km),e(km,D0),e(Tn,S0),e(Ht,U0),w(or,Ht,null),e(Ht,W0),w(nr,Ht,null),b(o,zb,v),b(o,wn,v),e(wn,sr),e(sr,ym),w($l,ym,null),e(wn,H0),e(wn,Tm),e(Tm,R0),b(o,Pb,v),b(o,$n,v),w(xl,$n,null),e($n,Q0),e($n,_t),w(Fl,_t,null),e(_t,V0),e(_t,Ae),e(Ae,K0),e(Ae,wm),e(wm,J0),e(Ae,G0),e(Ae,$m),e($m,X0),e(Ae,Y0),e(Ae,xm),e(xm,Z0),e(Ae,ex),e(Ae,Fm),e(Fm,tx),e(Ae,ox),e(Ae,Bm),e(Bm,nx),e(Ae,sx),e(Ae,Mm),e(Mm,rx),e(Ae,ax),e(Ae,Em),e(Em,ix),e(Ae,lx),e(_t,dx),e(_t,Bl),e(Bl,Ml),e(Ml,cx),e(Ml,zm),e(zm,px),e(Ml,hx),e(Bl,fx),e(Bl,El),e(El,mx),e(El,Pm),e(Pm,ux),e(El,gx),e(_t,_x),e(_t,G),e(G,bx),e(G,qm),e(qm,vx),e(G,kx),e(G,jm),e(jm,yx),e(G,Tx),e(G,Cm),e(Cm,wx),e(G,$x),e(G,Nm),e(Nm,xx),e(G,Fx),e(G,Om),e(Om,Bx),e(G,Mx),e(G,Am),e(Am,Ex),e(G,zx),e(G,Im),e(Im,Px),e(G,qx),e(G,Lm),e(Lm,jx),e(G,Cx),e(G,Dm),e(Dm,Nx),e(G,Ox),e(G,Sm),e(Sm,Ax),e(G,Ix),e(G,Um),e(Um,Lx),e(G,Dx),e(G,Wm),e(Wm,Sx),e(G,Ux),e(G,Hm),e(Hm,Wx),e(G,Hx),e(G,Rm),e(Rm,Rx),e(G,Qx),e(G,Qm),e(Qm,Vx),e(G,Kx),e(G,Vm),e(Vm,Jx),e(G,Gx),e(G,Km),e(Km,Xx),e(G,Yx),e(G,Jm),e(Jm,Zx),e(G,eF),e(G,Gm),e(Gm,tF),e(G,oF),e(G,Xm),e(Xm,nF),e(G,sF),e(_t,rF),w(rr,_t,null),b(o,qb,v),b(o,xn,v),e(xn,ar),e(ar,Ym),w(zl,Ym,null),e(xn,aF),e(xn,Zm),e(Zm,iF),b(o,jb,v),b(o,Xe,v),w(Pl,Xe,null),e(Xe,lF),e(Xe,ql),e(ql,dF),e(ql,eu),e(eu,cF),e(ql,pF),e(Xe,hF),e(Xe,jl),e(jl,fF),e(jl,Kp),e(Kp,mF),e(jl,uF),e(Xe,gF),e(Xe,Cl),e(Cl,_F),e(Cl,Nl),e(Nl,bF),e(Cl,vF),e(Xe,kF),w(ir,Xe,null),e(Xe,yF),e(Xe,bt),w(Ol,bt,null),e(bt,TF),e(bt,Fn),e(Fn,wF),e(Fn,Jp),e(Jp,$F),e(Fn,xF),e(Fn,tu),e(tu,FF),e(Fn,BF),e(bt,MF),w(lr,bt,null),e(bt,EF),w(dr,bt,null),e(bt,zF),w(cr,bt,null),b(o,Cb,v),b(o,Bn,v),e(Bn,pr),e(pr,ou),w(Al,ou,null),e(Bn,PF),e(Bn,nu),e(nu,qF),b(o,Nb,v),b(o,Ye,v),w(Il,Ye,null),e(Ye,jF),e(Ye,Ll),e(Ll,CF),e(Ll,su),e(su,NF),e(Ll,OF),e(Ye,AF),e(Ye,Dl),e(Dl,IF),e(Dl,Gp),e(Gp,LF),e(Dl,DF),e(Ye,SF),e(Ye,Sl),e(Sl,UF),e(Sl,Ul),e(Ul,WF),e(Sl,HF),e(Ye,RF),w(hr,Ye,null),e(Ye,QF),e(Ye,Rt),w(Wl,Rt,null),e(Rt,VF),e(Rt,Mn),e(Mn,KF),e(Mn,Xp),e(Xp,JF),e(Mn,GF),e(Mn,ru),e(ru,XF),e(Mn,YF),e(Rt,ZF),w(fr,Rt,null),e(Rt,e4),w(mr,Rt,null),b(o,Ob,v),b(o,En,v),e(En,ur),e(ur,au),w(Hl,au,null),e(En,t4),e(En,iu),e(iu,o4),b(o,Ab,v),b(o,Ze,v),w(Rl,Ze,null),e(Ze,n4),e(Ze,lu),e(lu,s4),e(Ze,r4),e(Ze,Ql),e(Ql,a4),e(Ql,Yp),e(Yp,i4),e(Ql,l4),e(Ze,d4),e(Ze,Vl),e(Vl,c4),e(Vl,Kl),e(Kl,p4),e(Vl,h4),e(Ze,f4),w(gr,Ze,null),e(Ze,m4),e(Ze,vt),w(Jl,vt,null),e(vt,u4),e(vt,zn),e(zn,g4),e(zn,Zp),e(Zp,_4),e(zn,b4),e(zn,du),e(du,v4),e(zn,k4),e(vt,y4),w(_r,vt,null),e(vt,T4),w(br,vt,null),e(vt,w4),w(vr,vt,null),b(o,Ib,v),b(o,Pn,v),e(Pn,kr),e(kr,cu),w(Gl,cu,null),e(Pn,$4),e(Pn,pu),e(pu,x4),b(o,Lb,v),b(o,et,v),w(Xl,et,null),e(et,F4),e(et,hu),e(hu,B4),e(et,M4),e(et,Yl),e(Yl,E4),e(Yl,eh),e(eh,z4),e(Yl,P4),e(et,q4),e(et,Zl),e(Zl,j4),e(Zl,ed),e(ed,C4),e(Zl,N4),e(et,O4),w(yr,et,null),e(et,A4),e(et,Qt),w(td,Qt,null),e(Qt,I4),e(Qt,qn),e(qn,L4),e(qn,th),e(th,D4),e(qn,S4),e(qn,fu),e(fu,U4),e(qn,W4),e(Qt,H4),w(Tr,Qt,null),e(Qt,R4),w(wr,Qt,null),b(o,Db,v),b(o,jn,v),e(jn,$r),e($r,mu),w(od,mu,null),e(jn,Q4),e(jn,uu),e(uu,V4),b(o,Sb,v),b(o,tt,v),w(nd,tt,null),e(tt,K4),e(tt,gu),e(gu,J4),e(tt,G4),e(tt,sd),e(sd,X4),e(sd,oh),e(oh,Y4),e(sd,Z4),e(tt,eB),e(tt,rd),e(rd,tB),e(rd,ad),e(ad,oB),e(rd,nB),e(tt,sB),w(xr,tt,null),e(tt,rB),e(tt,kt),w(id,kt,null),e(kt,aB),e(kt,Cn),e(Cn,iB),e(Cn,nh),e(nh,lB),e(Cn,dB),e(Cn,_u),e(_u,cB),e(Cn,pB),e(kt,hB),w(Fr,kt,null),e(kt,fB),w(Br,kt,null),e(kt,mB),w(Mr,kt,null),b(o,Ub,v),b(o,Nn,v),e(Nn,Er),e(Er,bu),w(ld,bu,null),e(Nn,uB),e(Nn,vu),e(vu,gB),b(o,Wb,v),b(o,ot,v),w(dd,ot,null),e(ot,_B),e(ot,On),e(On,bB),e(On,ku),e(ku,vB),e(On,kB),e(On,yu),e(yu,yB),e(On,TB),e(ot,wB),e(ot,cd),e(cd,$B),e(cd,sh),e(sh,xB),e(cd,FB),e(ot,BB),e(ot,pd),e(pd,MB),e(pd,hd),e(hd,EB),e(pd,zB),e(ot,PB),w(zr,ot,null),e(ot,qB),e(ot,yt),w(fd,yt,null),e(yt,jB),e(yt,An),e(An,CB),e(An,rh),e(rh,NB),e(An,OB),e(An,Tu),e(Tu,AB),e(An,IB),e(yt,LB),w(Pr,yt,null),e(yt,DB),w(qr,yt,null),e(yt,SB),w(jr,yt,null),b(o,Hb,v),b(o,In,v),e(In,Cr),e(Cr,wu),w(md,wu,null),e(In,UB),e(In,$u),e($u,WB),b(o,Rb,v),b(o,Ie,v),w(ud,Ie,null),e(Ie,HB),e(Ie,xu),e(xu,RB),e(Ie,QB),e(Ie,gd),e(gd,VB),e(gd,ah),e(ah,KB),e(gd,JB),e(Ie,GB),e(Ie,_d),e(_d,XB),e(_d,bd),e(bd,YB),e(_d,ZB),e(Ie,eM),e(Ie,Fu),e(Fu,tM),e(Ie,oM),e(Ie,fo),e(fo,Bu),e(Bu,vd),e(vd,nM),e(fo,sM),e(fo,Mu),e(Mu,kd),e(kd,rM),e(fo,aM),e(fo,Eu),e(Eu,yd),e(yd,iM),e(fo,lM),e(fo,zu),e(zu,Td),e(Td,dM),e(Ie,cM),e(Ie,Vt),w(wd,Vt,null),e(Vt,pM),e(Vt,Ln),e(Ln,hM),e(Ln,Pu),e(Pu,fM),e(Ln,mM),e(Ln,qu),e(qu,uM),e(Ln,gM),e(Vt,_M),w(Nr,Vt,null),e(Vt,bM),w(Or,Vt,null),b(o,Qb,v),b(o,Dn,v),e(Dn,Ar),e(Ar,ju),w($d,ju,null),e(Dn,vM),e(Dn,Cu),e(Cu,kM),b(o,Vb,v),b(o,Le,v),w(xd,Le,null),e(Le,yM),e(Le,Sn),e(Sn,TM),e(Sn,Nu),e(Nu,wM),e(Sn,$M),e(Sn,Ou),e(Ou,xM),e(Sn,FM),e(Le,BM),e(Le,Fd),e(Fd,MM),e(Fd,ih),e(ih,EM),e(Fd,zM),e(Le,PM),e(Le,Bd),e(Bd,qM),e(Bd,Md),e(Md,jM),e(Bd,CM),e(Le,NM),e(Le,Au),e(Au,OM),e(Le,AM),e(Le,mo),e(mo,Iu),e(Iu,Ed),e(Ed,IM),e(mo,LM),e(mo,Lu),e(Lu,zd),e(zd,DM),e(mo,SM),e(mo,Du),e(Du,Pd),e(Pd,UM),e(mo,WM),e(mo,Su),e(Su,qd),e(qd,HM),e(Le,RM),e(Le,Kt),w(jd,Kt,null),e(Kt,QM),e(Kt,Un),e(Un,VM),e(Un,Uu),e(Uu,KM),e(Un,JM),e(Un,Wu),e(Wu,GM),e(Un,XM),e(Kt,YM),w(Ir,Kt,null),e(Kt,ZM),w(Lr,Kt,null),b(o,Kb,v),b(o,Wn,v),e(Wn,Dr),e(Dr,Hu),w(Cd,Hu,null),e(Wn,eE),e(Wn,Ru),e(Ru,tE),b(o,Jb,v),b(o,De,v),w(Nd,De,null),e(De,oE),e(De,Qu),e(Qu,nE),e(De,sE),e(De,Od),e(Od,rE),e(Od,lh),e(lh,aE),e(Od,iE),e(De,lE),e(De,Ad),e(Ad,dE),e(Ad,Id),e(Id,cE),e(Ad,pE),e(De,hE),e(De,Vu),e(Vu,fE),e(De,mE),e(De,uo),e(uo,Ku),e(Ku,Ld),e(Ld,uE),e(uo,gE),e(uo,Ju),e(Ju,Dd),e(Dd,_E),e(uo,bE),e(uo,Gu),e(Gu,Sd),e(Sd,vE),e(uo,kE),e(uo,Xu),e(Xu,Ud),e(Ud,yE),e(De,TE),e(De,Jt),w(Wd,Jt,null),e(Jt,wE),e(Jt,Hn),e(Hn,$E),e(Hn,Yu),e(Yu,xE),e(Hn,FE),e(Hn,Zu),e(Zu,BE),e(Hn,ME),e(Jt,EE),w(Sr,Jt,null),e(Jt,zE),w(Ur,Jt,null),b(o,Gb,v),b(o,Rn,v),e(Rn,Wr),e(Wr,eg),w(Hd,eg,null),e(Rn,PE),e(Rn,tg),e(tg,qE),b(o,Xb,v),b(o,Se,v),w(Rd,Se,null),e(Se,jE),e(Se,Qd),e(Qd,CE),e(Qd,og),e(og,NE),e(Qd,OE),e(Se,AE),e(Se,Vd),e(Vd,IE),e(Vd,dh),e(dh,LE),e(Vd,DE),e(Se,SE),e(Se,Kd),e(Kd,UE),e(Kd,Jd),e(Jd,WE),e(Kd,HE),e(Se,RE),e(Se,ng),e(ng,QE),e(Se,VE),e(Se,go),e(go,sg),e(sg,Gd),e(Gd,KE),e(go,JE),e(go,rg),e(rg,Xd),e(Xd,GE),e(go,XE),e(go,ag),e(ag,Yd),e(Yd,YE),e(go,ZE),e(go,ig),e(ig,Zd),e(Zd,ez),e(Se,tz),e(Se,Gt),w(ec,Gt,null),e(Gt,oz),e(Gt,Qn),e(Qn,nz),e(Qn,lg),e(lg,sz),e(Qn,rz),e(Qn,dg),e(dg,az),e(Qn,iz),e(Gt,lz),w(Hr,Gt,null),e(Gt,dz),w(Rr,Gt,null),b(o,Yb,v),b(o,Vn,v),e(Vn,Qr),e(Qr,cg),w(tc,cg,null),e(Vn,cz),e(Vn,pg),e(pg,pz),b(o,Zb,v),b(o,Ue,v),w(oc,Ue,null),e(Ue,hz),e(Ue,nc),e(nc,fz),e(nc,hg),e(hg,mz),e(nc,uz),e(Ue,gz),e(Ue,sc),e(sc,_z),e(sc,ch),e(ch,bz),e(sc,vz),e(Ue,kz),e(Ue,rc),e(rc,yz),e(rc,ac),e(ac,Tz),e(rc,wz),e(Ue,$z),e(Ue,fg),e(fg,xz),e(Ue,Fz),e(Ue,_o),e(_o,mg),e(mg,ic),e(ic,Bz),e(_o,Mz),e(_o,ug),e(ug,lc),e(lc,Ez),e(_o,zz),e(_o,gg),e(gg,dc),e(dc,Pz),e(_o,qz),e(_o,_g),e(_g,cc),e(cc,jz),e(Ue,Cz),e(Ue,Xt),w(pc,Xt,null),e(Xt,Nz),e(Xt,Kn),e(Kn,Oz),e(Kn,bg),e(bg,Az),e(Kn,Iz),e(Kn,vg),e(vg,Lz),e(Kn,Dz),e(Xt,Sz),w(Vr,Xt,null),e(Xt,Uz),w(Kr,Xt,null),b(o,ev,v),b(o,Jn,v),e(Jn,Jr),e(Jr,kg),w(hc,kg,null),e(Jn,Wz),e(Jn,yg),e(yg,Hz),b(o,tv,v),b(o,We,v),w(fc,We,null),e(We,Rz),e(We,Tg),e(Tg,Qz),e(We,Vz),e(We,mc),e(mc,Kz),e(mc,ph),e(ph,Jz),e(mc,Gz),e(We,Xz),e(We,uc),e(uc,Yz),e(uc,gc),e(gc,Zz),e(uc,eP),e(We,tP),e(We,wg),e(wg,oP),e(We,nP),e(We,bo),e(bo,$g),e($g,_c),e(_c,sP),e(bo,rP),e(bo,xg),e(xg,bc),e(bc,aP),e(bo,iP),e(bo,Fg),e(Fg,vc),e(vc,lP),e(bo,dP),e(bo,Bg),e(Bg,kc),e(kc,cP),e(We,pP),e(We,Yt),w(yc,Yt,null),e(Yt,hP),e(Yt,Gn),e(Gn,fP),e(Gn,Mg),e(Mg,mP),e(Gn,uP),e(Gn,Eg),e(Eg,gP),e(Gn,_P),e(Yt,bP),w(Gr,Yt,null),e(Yt,vP),w(Xr,Yt,null),b(o,ov,v),b(o,Xn,v),e(Xn,Yr),e(Yr,zg),w(Tc,zg,null),e(Xn,kP),e(Xn,Pg),e(Pg,yP),b(o,nv,v),b(o,He,v),w(wc,He,null),e(He,TP),e(He,qg),e(qg,wP),e(He,$P),e(He,$c),e($c,xP),e($c,hh),e(hh,FP),e($c,BP),e(He,MP),e(He,xc),e(xc,EP),e(xc,Fc),e(Fc,zP),e(xc,PP),e(He,qP),e(He,jg),e(jg,jP),e(He,CP),e(He,vo),e(vo,Cg),e(Cg,Bc),e(Bc,NP),e(vo,OP),e(vo,Ng),e(Ng,Mc),e(Mc,AP),e(vo,IP),e(vo,Og),e(Og,Ec),e(Ec,LP),e(vo,DP),e(vo,Ag),e(Ag,zc),e(zc,SP),e(He,UP),e(He,Zt),w(Pc,Zt,null),e(Zt,WP),e(Zt,Yn),e(Yn,HP),e(Yn,Ig),e(Ig,RP),e(Yn,QP),e(Yn,Lg),e(Lg,VP),e(Yn,KP),e(Zt,JP),w(Zr,Zt,null),e(Zt,GP),w(ea,Zt,null),b(o,sv,v),b(o,Zn,v),e(Zn,ta),e(ta,Dg),w(qc,Dg,null),e(Zn,XP),e(Zn,Sg),e(Sg,YP),b(o,rv,v),b(o,Re,v),w(jc,Re,null),e(Re,ZP),e(Re,Ug),e(Ug,eq),e(Re,tq),e(Re,Cc),e(Cc,oq),e(Cc,fh),e(fh,nq),e(Cc,sq),e(Re,rq),e(Re,Nc),e(Nc,aq),e(Nc,Oc),e(Oc,iq),e(Nc,lq),e(Re,dq),e(Re,Wg),e(Wg,cq),e(Re,pq),e(Re,ko),e(ko,Hg),e(Hg,Ac),e(Ac,hq),e(ko,fq),e(ko,Rg),e(Rg,Ic),e(Ic,mq),e(ko,uq),e(ko,Qg),e(Qg,Lc),e(Lc,gq),e(ko,_q),e(ko,Vg),e(Vg,Dc),e(Dc,bq),e(Re,vq),e(Re,eo),w(Sc,eo,null),e(eo,kq),e(eo,es),e(es,yq),e(es,Kg),e(Kg,Tq),e(es,wq),e(es,Jg),e(Jg,$q),e(es,xq),e(eo,Fq),w(oa,eo,null),e(eo,Bq),w(na,eo,null),b(o,av,v),b(o,ts,v),e(ts,sa),e(sa,Gg),w(Uc,Gg,null),e(ts,Mq),e(ts,Xg),e(Xg,Eq),b(o,iv,v),b(o,Qe,v),w(Wc,Qe,null),e(Qe,zq),e(Qe,os),e(os,Pq),e(os,Yg),e(Yg,qq),e(os,jq),e(os,Zg),e(Zg,Cq),e(os,Nq),e(Qe,Oq),e(Qe,Hc),e(Hc,Aq),e(Hc,mh),e(mh,Iq),e(Hc,Lq),e(Qe,Dq),e(Qe,Rc),e(Rc,Sq),e(Rc,Qc),e(Qc,Uq),e(Rc,Wq),e(Qe,Hq),e(Qe,e_),e(e_,Rq),e(Qe,Qq),e(Qe,yo),e(yo,t_),e(t_,Vc),e(Vc,Vq),e(yo,Kq),e(yo,o_),e(o_,Kc),e(Kc,Jq),e(yo,Gq),e(yo,n_),e(n_,Jc),e(Jc,Xq),e(yo,Yq),e(yo,s_),e(s_,Gc),e(Gc,Zq),e(Qe,ej),e(Qe,to),w(Xc,to,null),e(to,tj),e(to,ns),e(ns,oj),e(ns,r_),e(r_,nj),e(ns,sj),e(ns,a_),e(a_,rj),e(ns,aj),e(to,ij),w(ra,to,null),e(to,lj),w(aa,to,null),lv=!0},p(o,[v]){const Yc={};v&2&&(Yc.$$scope={dirty:v,ctx:o}),ds.$set(Yc);const i_={};v&2&&(i_.$$scope={dirty:v,ctx:o}),hs.$set(i_);const l_={};v&2&&(l_.$$scope={dirty:v,ctx:o}),ms.$set(l_);const d_={};v&2&&(d_.$$scope={dirty:v,ctx:o}),bs.$set(d_);const Zc={};v&2&&(Zc.$$scope={dirty:v,ctx:o}),vs.$set(Zc);const c_={};v&2&&(c_.$$scope={dirty:v,ctx:o}),ys.$set(c_);const p_={};v&2&&(p_.$$scope={dirty:v,ctx:o}),Ts.$set(p_);const h_={};v&2&&(h_.$$scope={dirty:v,ctx:o}),$s.$set(h_);const ep={};v&2&&(ep.$$scope={dirty:v,ctx:o}),xs.$set(ep);const f_={};v&2&&(f_.$$scope={dirty:v,ctx:o}),Bs.$set(f_);const m_={};v&2&&(m_.$$scope={dirty:v,ctx:o}),Ms.$set(m_);const u_={};v&2&&(u_.$$scope={dirty:v,ctx:o}),Es.$set(u_);const g_={};v&2&&(g_.$$scope={dirty:v,ctx:o}),Ps.$set(g_);const __={};v&2&&(__.$$scope={dirty:v,ctx:o}),qs.$set(__);const b_={};v&2&&(b_.$$scope={dirty:v,ctx:o}),Cs.$set(b_);const v_={};v&2&&(v_.$$scope={dirty:v,ctx:o}),Ns.$set(v_);const tp={};v&2&&(tp.$$scope={dirty:v,ctx:o}),Os.$set(tp);const k_={};v&2&&(k_.$$scope={dirty:v,ctx:o}),As.$set(k_);const y_={};v&2&&(y_.$$scope={dirty:v,ctx:o}),Is.$set(y_);const ss={};v&2&&(ss.$$scope={dirty:v,ctx:o}),Ds.$set(ss);const T_={};v&2&&(T_.$$scope={dirty:v,ctx:o}),Ss.$set(T_);const w_={};v&2&&(w_.$$scope={dirty:v,ctx:o}),Ws.$set(w_);const op={};v&2&&(op.$$scope={dirty:v,ctx:o}),Hs.$set(op);const $_={};v&2&&($_.$$scope={dirty:v,ctx:o}),Rs.$set($_);const x_={};v&2&&(x_.$$scope={dirty:v,ctx:o}),Vs.$set(x_);const F_={};v&2&&(F_.$$scope={dirty:v,ctx:o}),Ks.$set(F_);const To={};v&2&&(To.$$scope={dirty:v,ctx:o}),Js.$set(To);const wo={};v&2&&(wo.$$scope={dirty:v,ctx:o}),Xs.$set(wo);const B_={};v&2&&(B_.$$scope={dirty:v,ctx:o}),Ys.$set(B_);const M_={};v&2&&(M_.$$scope={dirty:v,ctx:o}),Zs.$set(M_);const E_={};v&2&&(E_.$$scope={dirty:v,ctx:o}),tr.$set(E_);const rs={};v&2&&(rs.$$scope={dirty:v,ctx:o}),or.$set(rs);const z_={};v&2&&(z_.$$scope={dirty:v,ctx:o}),nr.$set(z_);const P_={};v&2&&(P_.$$scope={dirty:v,ctx:o}),rr.$set(P_);const np={};v&2&&(np.$$scope={dirty:v,ctx:o}),ir.$set(np);const q_={};v&2&&(q_.$$scope={dirty:v,ctx:o}),lr.$set(q_);const j_={};v&2&&(j_.$$scope={dirty:v,ctx:o}),dr.$set(j_);const C_={};v&2&&(C_.$$scope={dirty:v,ctx:o}),cr.$set(C_);const nt={};v&2&&(nt.$$scope={dirty:v,ctx:o}),hr.$set(nt);const N_={};v&2&&(N_.$$scope={dirty:v,ctx:o}),fr.$set(N_);const sp={};v&2&&(sp.$$scope={dirty:v,ctx:o}),mr.$set(sp);const O_={};v&2&&(O_.$$scope={dirty:v,ctx:o}),gr.$set(O_);const as={};v&2&&(as.$$scope={dirty:v,ctx:o}),_r.$set(as);const A_={};v&2&&(A_.$$scope={dirty:v,ctx:o}),br.$set(A_);const rp={};v&2&&(rp.$$scope={dirty:v,ctx:o}),vr.$set(rp);const uh={};v&2&&(uh.$$scope={dirty:v,ctx:o}),yr.$set(uh);const I_={};v&2&&(I_.$$scope={dirty:v,ctx:o}),Tr.$set(I_);const gh={};v&2&&(gh.$$scope={dirty:v,ctx:o}),wr.$set(gh);const L_={};v&2&&(L_.$$scope={dirty:v,ctx:o}),xr.$set(L_);const ap={};v&2&&(ap.$$scope={dirty:v,ctx:o}),Fr.$set(ap);const ip={};v&2&&(ip.$$scope={dirty:v,ctx:o}),Br.$set(ip);const D_={};v&2&&(D_.$$scope={dirty:v,ctx:o}),Mr.$set(D_);const $o={};v&2&&($o.$$scope={dirty:v,ctx:o}),zr.$set($o);const S_={};v&2&&(S_.$$scope={dirty:v,ctx:o}),Pr.$set(S_);const is={};v&2&&(is.$$scope={dirty:v,ctx:o}),qr.$set(is);const U_={};v&2&&(U_.$$scope={dirty:v,ctx:o}),jr.$set(U_);const W_={};v&2&&(W_.$$scope={dirty:v,ctx:o}),Nr.$set(W_);const H_={};v&2&&(H_.$$scope={dirty:v,ctx:o}),Or.$set(H_);const lp={};v&2&&(lp.$$scope={dirty:v,ctx:o}),Ir.$set(lp);const R_={};v&2&&(R_.$$scope={dirty:v,ctx:o}),Lr.$set(R_);const Q_={};v&2&&(Q_.$$scope={dirty:v,ctx:o}),Sr.$set(Q_);const V_={};v&2&&(V_.$$scope={dirty:v,ctx:o}),Ur.$set(V_);const Nt={};v&2&&(Nt.$$scope={dirty:v,ctx:o}),Hr.$set(Nt);const dp={};v&2&&(dp.$$scope={dirty:v,ctx:o}),Rr.$set(dp);const K_={};v&2&&(K_.$$scope={dirty:v,ctx:o}),Vr.$set(K_);const cp={};v&2&&(cp.$$scope={dirty:v,ctx:o}),Kr.$set(cp);const J_={};v&2&&(J_.$$scope={dirty:v,ctx:o}),Gr.$set(J_);const ls={};v&2&&(ls.$$scope={dirty:v,ctx:o}),Xr.$set(ls);const G_={};v&2&&(G_.$$scope={dirty:v,ctx:o}),Zr.$set(G_);const pp={};v&2&&(pp.$$scope={dirty:v,ctx:o}),ea.$set(pp);const _h={};v&2&&(_h.$$scope={dirty:v,ctx:o}),oa.$set(_h);const X_={};v&2&&(X_.$$scope={dirty:v,ctx:o}),na.$set(X_);const bh={};v&2&&(bh.$$scope={dirty:v,ctx:o}),ra.$set(bh);const Y_={};v&2&&(Y_.$$scope={dirty:v,ctx:o}),aa.$set(Y_)},i(o){lv||($(l.$$.fragment,o),$(re.$$.fragment,o),$(Ee.$$.fragment,o),$(Na.$$.fragment,o),$(ds.$$.fragment,o),$(Aa.$$.fragment,o),$(Ia.$$.fragment,o),$(Da.$$.fragment,o),$(Ua.$$.fragment,o),$(Ha.$$.fragment,o),$(hs.$$.fragment,o),$(Ra.$$.fragment,o),$(Qa.$$.fragment,o),$(Va.$$.fragment,o),$(Ga.$$.fragment,o),$(Ya.$$.fragment,o),$(ms.$$.fragment,o),$(Za.$$.fragment,o),$(ei.$$.fragment,o),$(oi.$$.fragment,o),$(si.$$.fragment,o),$(ai.$$.fragment,o),$(ii.$$.fragment,o),$(li.$$.fragment,o),$(mi.$$.fragment,o),$(bs.$$.fragment,o),$(vs.$$.fragment,o),$(ui.$$.fragment,o),$(gi.$$.fragment,o),$(ki.$$.fragment,o),$(ys.$$.fragment,o),$(Ts.$$.fragment,o),$(yi.$$.fragment,o),$(Ti.$$.fragment,o),$(Bi.$$.fragment,o),$($s.$$.fragment,o),$(xs.$$.fragment,o),$(Mi.$$.fragment,o),$(Ei.$$.fragment,o),$(Ci.$$.fragment,o),$(Bs.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(Ni.$$.fragment,o),$(Oi.$$.fragment,o),$(Si.$$.fragment,o),$(Ps.$$.fragment,o),$(qs.$$.fragment,o),$(Ui.$$.fragment,o),$(Wi.$$.fragment,o),$(Vi.$$.fragment,o),$(Cs.$$.fragment,o),$(Ns.$$.fragment,o),$(Os.$$.fragment,o),$(As.$$.fragment,o),$(Is.$$.fragment,o),$(Ki.$$.fragment,o),$(Ji.$$.fragment,o),$(Zi.$$.fragment,o),$(Ds.$$.fragment,o),$(Ss.$$.fragment,o),$(el.$$.fragment,o),$(tl.$$.fragment,o),$(rl.$$.fragment,o),$(Ws.$$.fragment,o),$(Hs.$$.fragment,o),$(Rs.$$.fragment,o),$(al.$$.fragment,o),$(il.$$.fragment,o),$(pl.$$.fragment,o),$(Vs.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(hl.$$.fragment,o),$(fl.$$.fragment,o),$(Xs.$$.fragment,o),$(_l.$$.fragment,o),$(Ys.$$.fragment,o),$(Zs.$$.fragment,o),$(bl.$$.fragment,o),$(vl.$$.fragment,o),$(tr.$$.fragment,o),$(wl.$$.fragment,o),$(or.$$.fragment,o),$(nr.$$.fragment,o),$($l.$$.fragment,o),$(xl.$$.fragment,o),$(Fl.$$.fragment,o),$(rr.$$.fragment,o),$(zl.$$.fragment,o),$(Pl.$$.fragment,o),$(ir.$$.fragment,o),$(Ol.$$.fragment,o),$(lr.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(Al.$$.fragment,o),$(Il.$$.fragment,o),$(hr.$$.fragment,o),$(Wl.$$.fragment,o),$(fr.$$.fragment,o),$(mr.$$.fragment,o),$(Hl.$$.fragment,o),$(Rl.$$.fragment,o),$(gr.$$.fragment,o),$(Jl.$$.fragment,o),$(_r.$$.fragment,o),$(br.$$.fragment,o),$(vr.$$.fragment,o),$(Gl.$$.fragment,o),$(Xl.$$.fragment,o),$(yr.$$.fragment,o),$(td.$$.fragment,o),$(Tr.$$.fragment,o),$(wr.$$.fragment,o),$(od.$$.fragment,o),$(nd.$$.fragment,o),$(xr.$$.fragment,o),$(id.$$.fragment,o),$(Fr.$$.fragment,o),$(Br.$$.fragment,o),$(Mr.$$.fragment,o),$(ld.$$.fragment,o),$(dd.$$.fragment,o),$(zr.$$.fragment,o),$(fd.$$.fragment,o),$(Pr.$$.fragment,o),$(qr.$$.fragment,o),$(jr.$$.fragment,o),$(md.$$.fragment,o),$(ud.$$.fragment,o),$(wd.$$.fragment,o),$(Nr.$$.fragment,o),$(Or.$$.fragment,o),$($d.$$.fragment,o),$(xd.$$.fragment,o),$(jd.$$.fragment,o),$(Ir.$$.fragment,o),$(Lr.$$.fragment,o),$(Cd.$$.fragment,o),$(Nd.$$.fragment,o),$(Wd.$$.fragment,o),$(Sr.$$.fragment,o),$(Ur.$$.fragment,o),$(Hd.$$.fragment,o),$(Rd.$$.fragment,o),$(ec.$$.fragment,o),$(Hr.$$.fragment,o),$(Rr.$$.fragment,o),$(tc.$$.fragment,o),$(oc.$$.fragment,o),$(pc.$$.fragment,o),$(Vr.$$.fragment,o),$(Kr.$$.fragment,o),$(hc.$$.fragment,o),$(fc.$$.fragment,o),$(yc.$$.fragment,o),$(Gr.$$.fragment,o),$(Xr.$$.fragment,o),$(Tc.$$.fragment,o),$(wc.$$.fragment,o),$(Pc.$$.fragment,o),$(Zr.$$.fragment,o),$(ea.$$.fragment,o),$(qc.$$.fragment,o),$(jc.$$.fragment,o),$(Sc.$$.fragment,o),$(oa.$$.fragment,o),$(na.$$.fragment,o),$(Uc.$$.fragment,o),$(Wc.$$.fragment,o),$(Xc.$$.fragment,o),$(ra.$$.fragment,o),$(aa.$$.fragment,o),lv=!0)},o(o){x(l.$$.fragment,o),x(re.$$.fragment,o),x(Ee.$$.fragment,o),x(Na.$$.fragment,o),x(ds.$$.fragment,o),x(Aa.$$.fragment,o),x(Ia.$$.fragment,o),x(Da.$$.fragment,o),x(Ua.$$.fragment,o),x(Ha.$$.fragment,o),x(hs.$$.fragment,o),x(Ra.$$.fragment,o),x(Qa.$$.fragment,o),x(Va.$$.fragment,o),x(Ga.$$.fragment,o),x(Ya.$$.fragment,o),x(ms.$$.fragment,o),x(Za.$$.fragment,o),x(ei.$$.fragment,o),x(oi.$$.fragment,o),x(si.$$.fragment,o),x(ai.$$.fragment,o),x(ii.$$.fragment,o),x(li.$$.fragment,o),x(mi.$$.fragment,o),x(bs.$$.fragment,o),x(vs.$$.fragment,o),x(ui.$$.fragment,o),x(gi.$$.fragment,o),x(ki.$$.fragment,o),x(ys.$$.fragment,o),x(Ts.$$.fragment,o),x(yi.$$.fragment,o),x(Ti.$$.fragment,o),x(Bi.$$.fragment,o),x($s.$$.fragment,o),x(xs.$$.fragment,o),x(Mi.$$.fragment,o),x(Ei.$$.fragment,o),x(Ci.$$.fragment,o),x(Bs.$$.fragment,o),x(Ms.$$.fragment,o),x(Es.$$.fragment,o),x(Ni.$$.fragment,o),x(Oi.$$.fragment,o),x(Si.$$.fragment,o),x(Ps.$$.fragment,o),x(qs.$$.fragment,o),x(Ui.$$.fragment,o),x(Wi.$$.fragment,o),x(Vi.$$.fragment,o),x(Cs.$$.fragment,o),x(Ns.$$.fragment,o),x(Os.$$.fragment,o),x(As.$$.fragment,o),x(Is.$$.fragment,o),x(Ki.$$.fragment,o),x(Ji.$$.fragment,o),x(Zi.$$.fragment,o),x(Ds.$$.fragment,o),x(Ss.$$.fragment,o),x(el.$$.fragment,o),x(tl.$$.fragment,o),x(rl.$$.fragment,o),x(Ws.$$.fragment,o),x(Hs.$$.fragment,o),x(Rs.$$.fragment,o),x(al.$$.fragment,o),x(il.$$.fragment,o),x(pl.$$.fragment,o),x(Vs.$$.fragment,o),x(Ks.$$.fragment,o),x(Js.$$.fragment,o),x(hl.$$.fragment,o),x(fl.$$.fragment,o),x(Xs.$$.fragment,o),x(_l.$$.fragment,o),x(Ys.$$.fragment,o),x(Zs.$$.fragment,o),x(bl.$$.fragment,o),x(vl.$$.fragment,o),x(tr.$$.fragment,o),x(wl.$$.fragment,o),x(or.$$.fragment,o),x(nr.$$.fragment,o),x($l.$$.fragment,o),x(xl.$$.fragment,o),x(Fl.$$.fragment,o),x(rr.$$.fragment,o),x(zl.$$.fragment,o),x(Pl.$$.fragment,o),x(ir.$$.fragment,o),x(Ol.$$.fragment,o),x(lr.$$.fragment,o),x(dr.$$.fragment,o),x(cr.$$.fragment,o),x(Al.$$.fragment,o),x(Il.$$.fragment,o),x(hr.$$.fragment,o),x(Wl.$$.fragment,o),x(fr.$$.fragment,o),x(mr.$$.fragment,o),x(Hl.$$.fragment,o),x(Rl.$$.fragment,o),x(gr.$$.fragment,o),x(Jl.$$.fragment,o),x(_r.$$.fragment,o),x(br.$$.fragment,o),x(vr.$$.fragment,o),x(Gl.$$.fragment,o),x(Xl.$$.fragment,o),x(yr.$$.fragment,o),x(td.$$.fragment,o),x(Tr.$$.fragment,o),x(wr.$$.fragment,o),x(od.$$.fragment,o),x(nd.$$.fragment,o),x(xr.$$.fragment,o),x(id.$$.fragment,o),x(Fr.$$.fragment,o),x(Br.$$.fragment,o),x(Mr.$$.fragment,o),x(ld.$$.fragment,o),x(dd.$$.fragment,o),x(zr.$$.fragment,o),x(fd.$$.fragment,o),x(Pr.$$.fragment,o),x(qr.$$.fragment,o),x(jr.$$.fragment,o),x(md.$$.fragment,o),x(ud.$$.fragment,o),x(wd.$$.fragment,o),x(Nr.$$.fragment,o),x(Or.$$.fragment,o),x($d.$$.fragment,o),x(xd.$$.fragment,o),x(jd.$$.fragment,o),x(Ir.$$.fragment,o),x(Lr.$$.fragment,o),x(Cd.$$.fragment,o),x(Nd.$$.fragment,o),x(Wd.$$.fragment,o),x(Sr.$$.fragment,o),x(Ur.$$.fragment,o),x(Hd.$$.fragment,o),x(Rd.$$.fragment,o),x(ec.$$.fragment,o),x(Hr.$$.fragment,o),x(Rr.$$.fragment,o),x(tc.$$.fragment,o),x(oc.$$.fragment,o),x(pc.$$.fragment,o),x(Vr.$$.fragment,o),x(Kr.$$.fragment,o),x(hc.$$.fragment,o),x(fc.$$.fragment,o),x(yc.$$.fragment,o),x(Gr.$$.fragment,o),x(Xr.$$.fragment,o),x(Tc.$$.fragment,o),x(wc.$$.fragment,o),x(Pc.$$.fragment,o),x(Zr.$$.fragment,o),x(ea.$$.fragment,o),x(qc.$$.fragment,o),x(jc.$$.fragment,o),x(Sc.$$.fragment,o),x(oa.$$.fragment,o),x(na.$$.fragment,o),x(Uc.$$.fragment,o),x(Wc.$$.fragment,o),x(Xc.$$.fragment,o),x(ra.$$.fragment,o),x(aa.$$.fragment,o),lv=!1},d(o){t(d),o&&t(_),o&&t(h),F(l),o&&t(X),o&&t(z),F(re),o&&t(fe),o&&t(J),o&&t(j),o&&t(ie),o&&t(me),o&&t(le),o&&t(ue),o&&t(q),o&&t(ge),o&&t(de),o&&t(_e),o&&t(te),o&&t(E),o&&t(K),o&&t(W),o&&t($e),F(Ee),o&&t(Z_),o&&t(Ct),F(Na),F(ds),o&&t(eb),o&&t(Ho),F(Aa),o&&t(tb),o&&t(Ne),F(Ia),F(Da),F(Ua),F(Ha),F(hs),F(Ra),o&&t(ob),o&&t(Qo),F(Qa),o&&t(nb),o&&t(rt),F(Va),F(Ga),F(Ya),F(ms),o&&t(sb),o&&t(Ko),F(Za),o&&t(rb),o&&t(Jo),F(ei),o&&t(ab),o&&t(Go),F(oi),o&&t(ib),o&&t(ho),F(si),F(ai),o&&t(lb),o&&t(Xo),F(ii),o&&t(db),o&&t(Oe),F(li),F(mi),F(bs),F(vs),o&&t(cb),o&&t(Zo),F(ui),o&&t(pb),o&&t(at),F(gi),F(ki),F(ys),F(Ts),o&&t(hb),o&&t(on),F(yi),o&&t(fb),o&&t(it),F(Ti),F(Bi),F($s),F(xs),o&&t(mb),o&&t(sn),F(Mi),o&&t(ub),o&&t(lt),F(Ei),F(Ci),F(Bs),F(Ms),F(Es),o&&t(gb),o&&t(an),F(Ni),o&&t(_b),o&&t(dt),F(Oi),F(Si),F(Ps),F(qs),o&&t(bb),o&&t(dn),F(Ui),o&&t(vb),o&&t(ct),F(Wi),F(Vi),F(Cs),F(Ns),F(Os),F(As),F(Is),o&&t(kb),o&&t(pn),F(Ki),o&&t(yb),o&&t(pt),F(Ji),F(Zi),F(Ds),F(Ss),o&&t(Tb),o&&t(fn),F(el),o&&t(wb),o&&t(ht),F(tl),F(rl),F(Ws),F(Hs),F(Rs),o&&t($b),o&&t(un),F(al),o&&t(xb),o&&t(ft),F(il),F(pl),F(Vs),F(Ks),F(Js),o&&t(Fb),o&&t(bn),F(hl),o&&t(Bb),o&&t(Je),F(fl),F(Xs),F(_l),F(Ys),F(Zs),o&&t(Mb),o&&t(kn),F(bl),o&&t(Eb),o&&t(Ge),F(vl),F(tr),F(wl),F(or),F(nr),o&&t(zb),o&&t(wn),F($l),o&&t(Pb),o&&t($n),F(xl),F(Fl),F(rr),o&&t(qb),o&&t(xn),F(zl),o&&t(jb),o&&t(Xe),F(Pl),F(ir),F(Ol),F(lr),F(dr),F(cr),o&&t(Cb),o&&t(Bn),F(Al),o&&t(Nb),o&&t(Ye),F(Il),F(hr),F(Wl),F(fr),F(mr),o&&t(Ob),o&&t(En),F(Hl),o&&t(Ab),o&&t(Ze),F(Rl),F(gr),F(Jl),F(_r),F(br),F(vr),o&&t(Ib),o&&t(Pn),F(Gl),o&&t(Lb),o&&t(et),F(Xl),F(yr),F(td),F(Tr),F(wr),o&&t(Db),o&&t(jn),F(od),o&&t(Sb),o&&t(tt),F(nd),F(xr),F(id),F(Fr),F(Br),F(Mr),o&&t(Ub),o&&t(Nn),F(ld),o&&t(Wb),o&&t(ot),F(dd),F(zr),F(fd),F(Pr),F(qr),F(jr),o&&t(Hb),o&&t(In),F(md),o&&t(Rb),o&&t(Ie),F(ud),F(wd),F(Nr),F(Or),o&&t(Qb),o&&t(Dn),F($d),o&&t(Vb),o&&t(Le),F(xd),F(jd),F(Ir),F(Lr),o&&t(Kb),o&&t(Wn),F(Cd),o&&t(Jb),o&&t(De),F(Nd),F(Wd),F(Sr),F(Ur),o&&t(Gb),o&&t(Rn),F(Hd),o&&t(Xb),o&&t(Se),F(Rd),F(ec),F(Hr),F(Rr),o&&t(Yb),o&&t(Vn),F(tc),o&&t(Zb),o&&t(Ue),F(oc),F(pc),F(Vr),F(Kr),o&&t(ev),o&&t(Jn),F(hc),o&&t(tv),o&&t(We),F(fc),F(yc),F(Gr),F(Xr),o&&t(ov),o&&t(Xn),F(Tc),o&&t(nv),o&&t(He),F(wc),F(Pc),F(Zr),F(ea),o&&t(sv),o&&t(Zn),F(qc),o&&t(rv),o&&t(Re),F(jc),F(Sc),F(oa),F(na),o&&t(av),o&&t(ts),F(Uc),o&&t(iv),o&&t(Qe),F(Wc),F(Xc),F(ra),F(aa)}}}const t7={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForCausalLM",title:"FlaxBertForCausalLM"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function o7(B){return j8(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class d7 extends E8{constructor(d){super();z8(this,d,o7,e7,P8,{})}}export{d7 as default,t7 as metadata};
