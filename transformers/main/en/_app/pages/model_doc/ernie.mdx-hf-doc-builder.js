import{S as jf,i as Df,s as Wf,e as o,k as c,w as v,t as a,M as Bf,c as r,d as t,m as h,a as s,x as y,h as i,b as l,G as e,g as _,y as T,q as E,o as w,B as $,v as Hf,L as Dt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ye}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Xe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as W}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as jt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Rf(z){let p,b,u,f,k;return f=new Xe({props:{code:`from transformers import ErnieModel, ErnieConfig

# Initializing a ERNIE nghuyong/ernie-3.0-base-zh style configuration
configuration = ErnieConfig()

# Initializing a model from the nghuyong/ernie-3.0-base-zh style configuration
model = ErnieModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ErnieModel, ErnieConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ERNIE nghuyong/ernie-3.0-base-zh style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ErnieConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the nghuyong/ernie-3.0-base-zh style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=o("p"),b=a("Examples:"),u=c(),v(f.$$.fragment)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Examples:"),m.forEach(t),u=h(d),y(f.$$.fragment,d)},m(d,m){_(d,p,m),e(p,b),_(d,u,m),T(f,d,m),k=!0},p:Dt,i(d){k||(E(f.$$.fragment,d),k=!0)},o(d){w(f.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(u),$(f,d)}}}function Qf(z){let p,b,u,f,k;return{c(){p=o("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=o("code"),f=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var M=s(u);f=i(M,"Module"),M.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,u),e(u,f),e(p,k)},d(d){d&&t(p)}}}function Uf(z){let p,b,u,f,k;return f=new Xe({props:{code:`from transformers import BertTokenizer, ErnieModel
import torch

tokenizer = BertTokenizer.from_pretrained("nghuyong/ernie-1.0-base-zh")
model = ErnieModel.from_pretrained("nghuyong/ernie-1.0-base-zh")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, ErnieModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieModel.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=o("p"),b=a("Example:"),u=c(),v(f.$$.fragment)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Example:"),m.forEach(t),u=h(d),y(f.$$.fragment,d)},m(d,m){_(d,p,m),e(p,b),_(d,u,m),T(f,d,m),k=!0},p:Dt,i(d){k||(E(f.$$.fragment,d),k=!0)},o(d){w(f.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(u),$(f,d)}}}function Vf(z){let p,b,u,f,k;return{c(){p=o("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=o("code"),f=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var M=s(u);f=i(M,"Module"),M.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,u),e(u,f),e(p,k)},d(d){d&&t(p)}}}function Gf(z){let p,b,u,f,k;return f=new Xe({props:{code:`from transformers import BertTokenizer, ErnieForPreTraining
import torch

tokenizer = BertTokenizer.from_pretrained("nghuyong/ernie-1.0-base-zh")
model = ErnieForPreTraining.from_pretrained("nghuyong/ernie-1.0-base-zh")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, ErnieForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieForPreTraining.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){p=o("p"),b=a("Example:"),u=c(),v(f.$$.fragment)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Example:"),m.forEach(t),u=h(d),y(f.$$.fragment,d)},m(d,m){_(d,p,m),e(p,b),_(d,u,m),T(f,d,m),k=!0},p:Dt,i(d){k||(E(f.$$.fragment,d),k=!0)},o(d){w(f.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(u),$(f,d)}}}function Kf(z){let p,b,u,f,k;return{c(){p=o("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=o("code"),f=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var M=s(u);f=i(M,"Module"),M.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,u),e(u,f),e(p,k)},d(d){d&&t(p)}}}function Jf(z){let p,b,u,f,k;return f=new Xe({props:{code:`import torch
from transformers import BertTokenizer, ErnieForCausalLM

tokenizer = BertTokenizer.from_pretrained("nghuyong/ernie-1.0-base-zh")
model = ErnieForCausalLM.from_pretrained("nghuyong/ernie-1.0-base-zh")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, ErnieForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieForCausalLM.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=o("p"),b=a("Example:"),u=c(),v(f.$$.fragment)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Example:"),m.forEach(t),u=h(d),y(f.$$.fragment,d)},m(d,m){_(d,p,m),e(p,b),_(d,u,m),T(f,d,m),k=!0},p:Dt,i(d){k||(E(f.$$.fragment,d),k=!0)},o(d){w(f.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(u),$(f,d)}}}function Yf(z){let p,b,u,f,k;return{c(){p=o("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=o("code"),f=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var M=s(u);f=i(M,"Module"),M.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,u),e(u,f),e(p,k)},d(d){d&&t(p)}}}function Xf(z){let p,b,u,f,k;return f=new Xe({props:{code:`from transformers import BertTokenizer, ErnieForMaskedLM
import torch

tokenizer = BertTokenizer.from_pretrained("nghuyong/ernie-1.0-base-zh")
model = ErnieForMaskedLM.from_pretrained("nghuyong/ernie-1.0-base-zh")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, ErnieForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieForMaskedLM.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){p=o("p"),b=a("Example:"),u=c(),v(f.$$.fragment)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Example:"),m.forEach(t),u=h(d),y(f.$$.fragment,d)},m(d,m){_(d,p,m),e(p,b),_(d,u,m),T(f,d,m),k=!0},p:Dt,i(d){k||(E(f.$$.fragment,d),k=!0)},o(d){w(f.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(u),$(f,d)}}}function Zf(z){let p,b;return p=new Xe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){v(p.$$.fragment)},l(u){y(p.$$.fragment,u)},m(u,f){T(p,u,f),b=!0},p:Dt,i(u){b||(E(p.$$.fragment,u),b=!0)},o(u){w(p.$$.fragment,u),b=!1},d(u){$(p,u)}}}function eg(z){let p,b,u,f,k;return{c(){p=o("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=o("code"),f=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var M=s(u);f=i(M,"Module"),M.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,u),e(u,f),e(p,k)},d(d){d&&t(p)}}}function tg(z){let p,b,u,f,k;return f=new Xe({props:{code:`from transformers import BertTokenizer, ErnieForNextSentencePrediction
import torch

tokenizer = BertTokenizer.from_pretrained("nghuyong/ernie-1.0-base-zh")
model = ErnieForNextSentencePrediction.from_pretrained("nghuyong/ernie-1.0-base-zh")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="pt")

outputs = model(**encoding, labels=torch.LongTensor([1]))
logits = outputs.logits
assert logits[0, 0] < logits[0, 1]  # next sentence was random`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, ErnieForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){p=o("p"),b=a("Example:"),u=c(),v(f.$$.fragment)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Example:"),m.forEach(t),u=h(d),y(f.$$.fragment,d)},m(d,m){_(d,p,m),e(p,b),_(d,u,m),T(f,d,m),k=!0},p:Dt,i(d){k||(E(f.$$.fragment,d),k=!0)},o(d){w(f.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(u),$(f,d)}}}function ng(z){let p,b,u,f,k;return{c(){p=o("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=o("code"),f=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var M=s(u);f=i(M,"Module"),M.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,u),e(u,f),e(p,k)},d(d){d&&t(p)}}}function og(z){let p,b,u,f,k;return{c(){p=o("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=o("code"),f=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var M=s(u);f=i(M,"Module"),M.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,u),e(u,f),e(p,k)},d(d){d&&t(p)}}}function rg(z){let p,b,u,f,k;return f=new Xe({props:{code:`from transformers import BertTokenizer, ErnieForMultipleChoice
import torch

tokenizer = BertTokenizer.from_pretrained("nghuyong/ernie-1.0-base-zh")
model = ErnieForMultipleChoice.from_pretrained("nghuyong/ernie-1.0-base-zh")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, ErnieForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=o("p"),b=a("Example:"),u=c(),v(f.$$.fragment)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Example:"),m.forEach(t),u=h(d),y(f.$$.fragment,d)},m(d,m){_(d,p,m),e(p,b),_(d,u,m),T(f,d,m),k=!0},p:Dt,i(d){k||(E(f.$$.fragment,d),k=!0)},o(d){w(f.$$.fragment,d),k=!1},d(d){d&&t(p),d&&t(u),$(f,d)}}}function sg(z){let p,b,u,f,k;return{c(){p=o("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=o("code"),f=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var M=s(u);f=i(M,"Module"),M.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,u),e(u,f),e(p,k)},d(d){d&&t(p)}}}function ag(z){let p,b,u,f,k;return{c(){p=o("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=o("code"),f=a("Module"),k=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(m,"CODE",{});var M=s(u);f=i(M,"Module"),M.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,u),e(u,f),e(p,k)},d(d){d&&t(p)}}}function ig(z){let p,b,u,f,k,d,m,M,pi,ea,pe,Ze,Dr,Wt,mi,Wr,ui,ta,Z,fi,Bt,gi,_i,Ht,ki,bi,na,me,et,Br,Rt,vi,Hr,yi,oa,Qt,ra,ue,tt,Rr,Ut,Ti,Qr,Ei,sa,nt,Ur,fe,mo,wi,$i,uo,zi,Mi,fo,Fi,xi,F,ge,go,Pi,Ci,_o,qi,Ni,ko,Oi,Ai,_e,bo,Li,Si,vo,Ii,ji,yo,Di,Wi,ke,To,Bi,Hi,Eo,Ri,Qi,wo,Ui,Vi,be,$o,Gi,Ki,zo,Ji,Yi,Mo,Xi,Zi,ve,Fo,ed,td,xo,nd,od,Po,rd,sd,ye,Co,ad,id,qo,dd,ld,No,cd,hd,Te,Oo,pd,md,Ao,ud,fd,Lo,gd,_d,Ee,So,kd,bd,Io,vd,yd,jo,Td,Ed,we,Do,wd,$d,Wo,zd,Md,Bo,Fd,xd,$e,Ho,Pd,Cd,Ro,qd,Nd,Qo,Od,aa,U,Ad,Vt,Ld,Sd,Gt,Id,jd,Kt,Dd,Wd,ia,ze,ot,Vr,Jt,Bd,Gr,Hd,da,Q,Yt,Rd,X,Qd,Uo,Ud,Vd,Kr,Gd,Kd,Xt,Jd,Yd,Xd,Me,Zd,Vo,el,tl,Go,nl,ol,rl,rt,la,Fe,st,Jr,Zt,sl,Yr,al,ca,xe,en,il,tn,dl,Ko,ll,cl,ha,Pe,at,Xr,nn,hl,Zr,pl,pa,C,on,ml,es,ul,fl,rn,gl,Jo,_l,kl,bl,sn,vl,an,yl,Tl,El,dn,wl,ln,$l,zl,Ml,q,Fl,ts,xl,Pl,ns,Cl,ql,os,Nl,Ol,rs,Al,Ll,ss,Sl,Il,as,jl,Dl,Wl,V,cn,Bl,Ce,Hl,Yo,Rl,Ql,is,Ul,Vl,Gl,it,Kl,dt,ma,qe,lt,ds,hn,Jl,ls,Yl,ua,N,pn,Xl,Ne,Zl,cs,ec,tc,hs,nc,oc,rc,mn,sc,Xo,ac,ic,dc,un,lc,fn,cc,hc,pc,G,gn,mc,Oe,uc,Zo,fc,gc,ps,_c,kc,bc,ct,vc,ht,fa,Ae,pt,ms,_n,yc,us,Tc,ga,O,kn,Ec,bn,wc,fs,$c,zc,Mc,vn,Fc,er,xc,Pc,Cc,yn,qc,Tn,Nc,Oc,Ac,K,En,Lc,Le,Sc,tr,Ic,jc,gs,Dc,Wc,Bc,mt,Hc,ut,_a,Se,ft,_s,wn,Rc,ks,Qc,ka,A,$n,Uc,zn,Vc,bs,Gc,Kc,Jc,Mn,Yc,nr,Xc,Zc,eh,Fn,th,xn,nh,oh,rh,B,Pn,sh,Ie,ah,or,ih,dh,vs,lh,ch,hh,gt,ph,_t,mh,kt,ba,je,bt,ys,Cn,uh,Ts,fh,va,L,qn,gh,Nn,_h,Es,kh,bh,vh,On,yh,rr,Th,Eh,wh,An,$h,Ln,zh,Mh,Fh,J,Sn,xh,De,Ph,sr,Ch,qh,ws,Nh,Oh,Ah,vt,Lh,yt,ya,We,Tt,$s,In,Sh,zs,Ih,Ta,S,jn,jh,Ms,Dh,Wh,Dn,Bh,ar,Hh,Rh,Qh,Wn,Uh,Bn,Vh,Gh,Kh,ee,Hn,Jh,Be,Yh,ir,Xh,Zh,Fs,ep,tp,np,Et,Ea,He,wt,xs,Rn,op,Ps,rp,wa,I,Qn,sp,Cs,ap,ip,Un,dp,dr,lp,cp,hp,Vn,pp,Gn,mp,up,fp,Y,Kn,gp,Re,_p,lr,kp,bp,qs,vp,yp,Tp,$t,Ep,zt,$a,Qe,Mt,Ns,Jn,wp,Os,$p,za,j,Yn,zp,As,Mp,Fp,Xn,xp,cr,Pp,Cp,qp,Zn,Np,eo,Op,Ap,Lp,te,to,Sp,Ue,Ip,hr,jp,Dp,Ls,Wp,Bp,Hp,Ft,Ma,Ve,xt,Ss,no,Rp,Is,Qp,Fa,D,oo,Up,Ge,Vp,js,Gp,Kp,Ds,Jp,Yp,Xp,ro,Zp,pr,em,tm,nm,so,om,ao,rm,sm,am,ne,io,im,Ke,dm,mr,lm,cm,Ws,hm,pm,mm,Pt,xa;return d=new W({}),Wt=new W({}),Rt=new W({}),Qt=new Xe({props:{code:`from transformers import AutoTokenizer, AutoModel
tokenizer = AutoTokenizer.from_pretrained("nghuyong/ernie-1.0-base-zh")
model = AutoModel.from_pretrained("nghuyong/ernie-1.0-base-zh")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModel
tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)`}}),Ut=new W({}),Jt=new W({}),Yt=new P({props:{name:"class transformers.ErnieConfig",anchor:"transformers.ErnieConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"task_type_vocab_size",val:" = 3"},{name:"use_task_id",val:" = False"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ErnieConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ERNIE model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieModel">ErnieModel</a> or <code>TFErnieModel</code>.`,name:"vocab_size"},{anchor:"transformers.ErnieConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ErnieConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ErnieConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ErnieConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ErnieConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ErnieConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ErnieConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ErnieConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.ErnieConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieModel">ErnieModel</a> or <code>TFErnieModel</code>.`,name:"type_vocab_size"},{anchor:"transformers.ErnieConfig.task_type_vocab_size",description:`<strong>task_type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The vocabulary size of the <code>task_type_ids</code> for ERNIE2.0/ERNIE3.0 model`,name:"task_type_vocab_size"},{anchor:"transformers.ErnieConfig.use_task_id",description:`<strong>use_task_id</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model support <code>task_type_ids</code>`,name:"use_task_id"},{anchor:"transformers.ErnieConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ErnieConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ErnieConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.ErnieConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.ErnieConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/configuration_ernie.py#L41"}}),rt=new jt({props:{anchor:"transformers.ErnieConfig.example",$$slots:{default:[Rf]},$$scope:{ctx:z}}}),Zt=new W({}),en=new P({props:{name:"class transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput",anchor:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L682"}}),nn=new W({}),on=new P({props:{name:"class transformers.ErnieModel",anchor:"transformers.ErnieModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.ErnieModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L790"}}),cn=new P({props:{name:"forward",anchor:"transformers.ErnieModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ErnieModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieModel.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ErnieModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ErnieModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.ErnieModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L833",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig"
>ErnieConfig</a>) and inputs.</p>
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
`}}),it=new Ye({props:{$$slots:{default:[Qf]},$$scope:{ctx:z}}}),dt=new jt({props:{anchor:"transformers.ErnieModel.forward.example",$$slots:{default:[Uf]},$$scope:{ctx:z}}}),hn=new W({}),pn=new P({props:{name:"class transformers.ErnieForPreTraining",anchor:"transformers.ErnieForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L979"}}),gn=new P({props:{name:"forward",anchor:"transformers.ErnieForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ErnieForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieForPreTraining.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L998",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/ernie#transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput"
>transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig"
>ErnieConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/model_doc/ernie#transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput"
>transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ct=new Ye({props:{$$slots:{default:[Vf]},$$scope:{ctx:z}}}),ht=new jt({props:{anchor:"transformers.ErnieForPreTraining.forward.example",$$slots:{default:[Gf]},$$scope:{ctx:z}}}),_n=new W({}),kn=new P({props:{name:"class transformers.ErnieForCausalLM",anchor:"transformers.ErnieForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1088"}}),En=new P({props:{name:"forward",anchor:"transformers.ErnieForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ErnieForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieForCausalLM.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ErnieForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ErnieForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.ErnieForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.ErnieForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1113",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig"
>ErnieConfig</a>) and inputs.</p>
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
`}}),mt=new Ye({props:{$$slots:{default:[Kf]},$$scope:{ctx:z}}}),ut=new jt({props:{anchor:"transformers.ErnieForCausalLM.forward.example",$$slots:{default:[Jf]},$$scope:{ctx:z}}}),wn=new W({}),$n=new P({props:{name:"class transformers.ErnieForMaskedLM",anchor:"transformers.ErnieForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1229"}}),Pn=new P({props:{name:"forward",anchor:"transformers.ErnieForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ErnieForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieForMaskedLM.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1257",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig"
>ErnieConfig</a>) and inputs.</p>
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
`}}),gt=new Ye({props:{$$slots:{default:[Yf]},$$scope:{ctx:z}}}),_t=new jt({props:{anchor:"transformers.ErnieForMaskedLM.forward.example",$$slots:{default:[Xf]},$$scope:{ctx:z}}}),kt=new jt({props:{anchor:"transformers.ErnieForMaskedLM.forward.example-2",$$slots:{default:[Zf]},$$scope:{ctx:z}}}),Cn=new W({}),qn=new P({props:{name:"class transformers.ErnieForNextSentencePrediction",anchor:"transformers.ErnieForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1347"}}),Sn=new P({props:{name:"forward",anchor:"transformers.ErnieForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ErnieForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1358",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig"
>ErnieConfig</a>) and inputs.</p>
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
`}}),vt=new Ye({props:{$$slots:{default:[eg]},$$scope:{ctx:z}}}),yt=new jt({props:{anchor:"transformers.ErnieForNextSentencePrediction.forward.example",$$slots:{default:[tg]},$$scope:{ctx:z}}}),In=new W({}),jn=new P({props:{name:"class transformers.ErnieForSequenceClassification",anchor:"transformers.ErnieForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1455"}}),Hn=new P({props:{name:"forward",anchor:"transformers.ErnieForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ErnieForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieForSequenceClassification.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1472"}}),Et=new Ye({props:{$$slots:{default:[ng]},$$scope:{ctx:z}}}),Rn=new W({}),Qn=new P({props:{name:"class transformers.ErnieForMultipleChoice",anchor:"transformers.ErnieForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1554"}}),Kn=new P({props:{name:"forward",anchor:"transformers.ErnieForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ErnieForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieForMultipleChoice.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1569",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig"
>ErnieConfig</a>) and inputs.</p>
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
`}}),$t=new Ye({props:{$$slots:{default:[og]},$$scope:{ctx:z}}}),zt=new jt({props:{anchor:"transformers.ErnieForMultipleChoice.forward.example",$$slots:{default:[rg]},$$scope:{ctx:z}}}),Jn=new W({}),Yn=new P({props:{name:"class transformers.ErnieForTokenClassification",anchor:"transformers.ErnieForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1652"}}),to=new P({props:{name:"forward",anchor:"transformers.ErnieForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ErnieForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieForTokenClassification.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1670"}}),Ft=new Ye({props:{$$slots:{default:[sg]},$$scope:{ctx:z}}}),no=new W({}),oo=new P({props:{name:"class transformers.ErnieForQuestionAnswering",anchor:"transformers.ErnieForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1733"}}),io=new P({props:{name:"forward",anchor:"transformers.ErnieForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ErnieForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ErnieForQuestionAnswering.forward.task_type_ids",description:`<strong>task_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Task type embedding is a special embedding to represent the characteristic of different tasks, such as
word-aware pre-training task, structure-aware pre-training task and semantic-aware pre-training task. We
assign a <code>task_type_id</code> to each task and the <code>task_type_id</code> is in the range \`[0,
config.task_type_vocab_size-1]`,name:"task_type_ids"},{anchor:"transformers.ErnieForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.ErnieForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ernie/modeling_ernie.py#L1747"}}),Pt=new Ye({props:{$$slots:{default:[ag]},$$scope:{ctx:z}}}),{c(){p=o("meta"),b=c(),u=o("h1"),f=o("a"),k=o("span"),v(d.$$.fragment),m=c(),M=o("span"),pi=a("ERNIE"),ea=c(),pe=o("h2"),Ze=o("a"),Dr=o("span"),v(Wt.$$.fragment),mi=c(),Wr=o("span"),ui=a("Overview"),ta=a(`

ERNIE is a series of powerful models proposed by baidu, especially in Chinese tasks,
including [ERNIE1.0](https://arxiv.org/abs/1904.09223), [ERNIE2.0](https://ojs.aaai.org/index.php/AAAI/article/view/6428),
[ERNIE3.0](https://arxiv.org/abs/2107.02137), [ERNIE-Gram](https://arxiv.org/abs/2010.12148), [ERNIE-health](https://arxiv.org/abs/2110.07244), etc.
`),Z=o("p"),fi=a("These models are contributed by "),Bt=o("a"),gi=a("nghuyong"),_i=a(" and the official code can be found in "),Ht=o("a"),ki=a("PaddleNLP"),bi=a(" (in PaddlePaddle)."),na=c(),me=o("h3"),et=o("a"),Br=o("span"),v(Rt.$$.fragment),vi=c(),Hr=o("span"),yi=a("How to use"),oa=a(`

Take \`ernie-1.0-base-zh\` as an example:

	`),v(Qt.$$.fragment),ra=c(),ue=o("h3"),tt=o("a"),Rr=o("span"),v(Ut.$$.fragment),Ti=c(),Qr=o("span"),Ei=a("Supported Models"),sa=c(),nt=o("table"),Ur=o("thead"),fe=o("tr"),mo=o("th"),wi=a("Model Name"),$i=c(),uo=o("th"),zi=a("Language"),Mi=c(),fo=o("th"),Fi=a("Description"),xi=c(),F=o("tbody"),ge=o("tr"),go=o("td"),Pi=a("ernie-1.0-base-zh"),Ci=c(),_o=o("td"),qi=a("Chinese"),Ni=c(),ko=o("td"),Oi=a("Layer:12, Heads:12, Hidden:768"),Ai=c(),_e=o("tr"),bo=o("td"),Li=a("ernie-2.0-base-en"),Si=c(),vo=o("td"),Ii=a("English"),ji=c(),yo=o("td"),Di=a("Layer:12, Heads:12, Hidden:768"),Wi=c(),ke=o("tr"),To=o("td"),Bi=a("ernie-2.0-large-en"),Hi=c(),Eo=o("td"),Ri=a("English"),Qi=c(),wo=o("td"),Ui=a("Layer:24, Heads:16, Hidden:1024"),Vi=c(),be=o("tr"),$o=o("td"),Gi=a("ernie-3.0-base-zh"),Ki=c(),zo=o("td"),Ji=a("Chinese"),Yi=c(),Mo=o("td"),Xi=a("Layer:12, Heads:12, Hidden:768"),Zi=c(),ve=o("tr"),Fo=o("td"),ed=a("ernie-3.0-medium-zh"),td=c(),xo=o("td"),nd=a("Chinese"),od=c(),Po=o("td"),rd=a("Layer:6, Heads:12, Hidden:768"),sd=c(),ye=o("tr"),Co=o("td"),ad=a("ernie-3.0-mini-zh"),id=c(),qo=o("td"),dd=a("Chinese"),ld=c(),No=o("td"),cd=a("Layer:6, Heads:12, Hidden:384"),hd=c(),Te=o("tr"),Oo=o("td"),pd=a("ernie-3.0-micro-zh"),md=c(),Ao=o("td"),ud=a("Chinese"),fd=c(),Lo=o("td"),gd=a("Layer:4, Heads:12, Hidden:384"),_d=c(),Ee=o("tr"),So=o("td"),kd=a("ernie-3.0-nano-zh"),bd=c(),Io=o("td"),vd=a("Chinese"),yd=c(),jo=o("td"),Td=a("Layer:4, Heads:12, Hidden:312"),Ed=c(),we=o("tr"),Do=o("td"),wd=a("ernie-health-zh"),$d=c(),Wo=o("td"),zd=a("Chinese"),Md=c(),Bo=o("td"),Fd=a("Layer:12, Heads:12, Hidden:768"),xd=c(),$e=o("tr"),Ho=o("td"),Pd=a("ernie-gram-zh"),Cd=c(),Ro=o("td"),qd=a("Chinese"),Nd=c(),Qo=o("td"),Od=a("Layer:12, Heads:12, Hidden:768"),aa=c(),U=o("p"),Ad=a("You can find all the supported models from huggingface\u2019s model hub: "),Vt=o("a"),Ld=a("huggingface.co/nghuyong"),Sd=a(`, and model details from paddle\u2019s official
repo: `),Gt=o("a"),Id=a("PaddleNLP"),jd=a(`
and `),Kt=o("a"),Dd=a("ERNIE"),Wd=a("."),ia=c(),ze=o("h2"),ot=o("a"),Vr=o("span"),v(Jt.$$.fragment),Bd=c(),Gr=o("span"),Hd=a("ErnieConfig"),da=c(),Q=o("div"),v(Yt.$$.fragment),Rd=c(),X=o("p"),Qd=a("This is the configuration class to store the configuration of a "),Uo=o("a"),Ud=a("ErnieModel"),Vd=a(" or a "),Kr=o("code"),Gd=a("TFErnieModel"),Kd=a(`. It is used to
instantiate a ERNIE model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the ERNIE
`),Xt=o("a"),Jd=a("nghuyong/ernie-3.0-base-zh"),Yd=a(" architecture."),Xd=c(),Me=o("p"),Zd=a("Configuration objects inherit from "),Vo=o("a"),el=a("PretrainedConfig"),tl=a(` and can be used to control the model outputs. Read the
documentation from `),Go=o("a"),nl=a("PretrainedConfig"),ol=a(" for more information."),rl=c(),v(rt.$$.fragment),la=c(),Fe=o("h2"),st=o("a"),Jr=o("span"),v(Zt.$$.fragment),sl=c(),Yr=o("span"),al=a("Ernie specific outputs"),ca=c(),xe=o("div"),v(en.$$.fragment),il=c(),tn=o("p"),dl=a("Output type of "),Ko=o("a"),ll=a("ErnieForPreTraining"),cl=a("."),ha=c(),Pe=o("h2"),at=o("a"),Xr=o("span"),v(nn.$$.fragment),hl=c(),Zr=o("span"),pl=a("ErnieModel"),pa=c(),C=o("div"),v(on.$$.fragment),ml=c(),es=o("p"),ul=a("The bare Ernie Model transformer outputting raw hidden-states without any specific head on top."),fl=c(),rn=o("p"),gl=a("This model inherits from "),Jo=o("a"),_l=a("PreTrainedModel"),kl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bl=c(),sn=o("p"),vl=a("This model is also a PyTorch "),an=o("a"),yl=a("torch.nn.Module"),Tl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),El=c(),dn=o("p"),wl=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),ln=o("a"),$l=a(`Attention is
all you need`),zl=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ml=c(),q=o("p"),Fl=a("To behave as an decoder the model needs to be initialized with the "),ts=o("code"),xl=a("is_decoder"),Pl=a(` argument of the configuration set
to `),ns=o("code"),Cl=a("True"),ql=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),os=o("code"),Nl=a("is_decoder"),Ol=a(` argument and
`),rs=o("code"),Al=a("add_cross_attention"),Ll=a(" set to "),ss=o("code"),Sl=a("True"),Il=a("; an "),as=o("code"),jl=a("encoder_hidden_states"),Dl=a(" is then expected as an input to the forward pass."),Wl=c(),V=o("div"),v(cn.$$.fragment),Bl=c(),Ce=o("p"),Hl=a("The "),Yo=o("a"),Rl=a("ErnieModel"),Ql=a(" forward method, overrides the "),is=o("code"),Ul=a("__call__"),Vl=a(" special method."),Gl=c(),v(it.$$.fragment),Kl=c(),v(dt.$$.fragment),ma=c(),qe=o("h2"),lt=o("a"),ds=o("span"),v(hn.$$.fragment),Jl=c(),ls=o("span"),Yl=a("ErnieForPreTraining"),ua=c(),N=o("div"),v(pn.$$.fragment),Xl=c(),Ne=o("p"),Zl=a("Ernie Model with two heads on top as done during the pretraining: a "),cs=o("code"),ec=a("masked language modeling"),tc=a(" head and a "),hs=o("code"),nc=a("next sentence prediction (classification)"),oc=a(" head."),rc=c(),mn=o("p"),sc=a("This model inherits from "),Xo=o("a"),ac=a("PreTrainedModel"),ic=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dc=c(),un=o("p"),lc=a("This model is also a PyTorch "),fn=o("a"),cc=a("torch.nn.Module"),hc=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pc=c(),G=o("div"),v(gn.$$.fragment),mc=c(),Oe=o("p"),uc=a("The "),Zo=o("a"),fc=a("ErnieForPreTraining"),gc=a(" forward method, overrides the "),ps=o("code"),_c=a("__call__"),kc=a(" special method."),bc=c(),v(ct.$$.fragment),vc=c(),v(ht.$$.fragment),fa=c(),Ae=o("h2"),pt=o("a"),ms=o("span"),v(_n.$$.fragment),yc=c(),us=o("span"),Tc=a("ErnieForCausalLM"),ga=c(),O=o("div"),v(kn.$$.fragment),Ec=c(),bn=o("p"),wc=a("Ernie Model with a "),fs=o("code"),$c=a("language modeling"),zc=a(" head on top for CLM fine-tuning."),Mc=c(),vn=o("p"),Fc=a("This model inherits from "),er=o("a"),xc=a("PreTrainedModel"),Pc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cc=c(),yn=o("p"),qc=a("This model is also a PyTorch "),Tn=o("a"),Nc=a("torch.nn.Module"),Oc=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ac=c(),K=o("div"),v(En.$$.fragment),Lc=c(),Le=o("p"),Sc=a("The "),tr=o("a"),Ic=a("ErnieForCausalLM"),jc=a(" forward method, overrides the "),gs=o("code"),Dc=a("__call__"),Wc=a(" special method."),Bc=c(),v(mt.$$.fragment),Hc=c(),v(ut.$$.fragment),_a=c(),Se=o("h2"),ft=o("a"),_s=o("span"),v(wn.$$.fragment),Rc=c(),ks=o("span"),Qc=a("ErnieForMaskedLM"),ka=c(),A=o("div"),v($n.$$.fragment),Uc=c(),zn=o("p"),Vc=a("Ernie Model with a "),bs=o("code"),Gc=a("language modeling"),Kc=a(" head on top."),Jc=c(),Mn=o("p"),Yc=a("This model inherits from "),nr=o("a"),Xc=a("PreTrainedModel"),Zc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eh=c(),Fn=o("p"),th=a("This model is also a PyTorch "),xn=o("a"),nh=a("torch.nn.Module"),oh=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rh=c(),B=o("div"),v(Pn.$$.fragment),sh=c(),Ie=o("p"),ah=a("The "),or=o("a"),ih=a("ErnieForMaskedLM"),dh=a(" forward method, overrides the "),vs=o("code"),lh=a("__call__"),ch=a(" special method."),hh=c(),v(gt.$$.fragment),ph=c(),v(_t.$$.fragment),mh=c(),v(kt.$$.fragment),ba=c(),je=o("h2"),bt=o("a"),ys=o("span"),v(Cn.$$.fragment),uh=c(),Ts=o("span"),fh=a("ErnieForNextSentencePrediction"),va=c(),L=o("div"),v(qn.$$.fragment),gh=c(),Nn=o("p"),_h=a("Ernie Model with a "),Es=o("code"),kh=a("next sentence prediction (classification)"),bh=a(" head on top."),vh=c(),On=o("p"),yh=a("This model inherits from "),rr=o("a"),Th=a("PreTrainedModel"),Eh=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wh=c(),An=o("p"),$h=a("This model is also a PyTorch "),Ln=o("a"),zh=a("torch.nn.Module"),Mh=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fh=c(),J=o("div"),v(Sn.$$.fragment),xh=c(),De=o("p"),Ph=a("The "),sr=o("a"),Ch=a("ErnieForNextSentencePrediction"),qh=a(" forward method, overrides the "),ws=o("code"),Nh=a("__call__"),Oh=a(" special method."),Ah=c(),v(vt.$$.fragment),Lh=c(),v(yt.$$.fragment),ya=c(),We=o("h2"),Tt=o("a"),$s=o("span"),v(In.$$.fragment),Sh=c(),zs=o("span"),Ih=a("ErnieForSequenceClassification"),Ta=c(),S=o("div"),v(jn.$$.fragment),jh=c(),Ms=o("p"),Dh=a(`Ernie Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Wh=c(),Dn=o("p"),Bh=a("This model inherits from "),ar=o("a"),Hh=a("PreTrainedModel"),Rh=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qh=c(),Wn=o("p"),Uh=a("This model is also a PyTorch "),Bn=o("a"),Vh=a("torch.nn.Module"),Gh=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kh=c(),ee=o("div"),v(Hn.$$.fragment),Jh=c(),Be=o("p"),Yh=a("The "),ir=o("a"),Xh=a("ErnieForSequenceClassification"),Zh=a(" forward method, overrides the "),Fs=o("code"),ep=a("__call__"),tp=a(" special method."),np=c(),v(Et.$$.fragment),Ea=c(),He=o("h2"),wt=o("a"),xs=o("span"),v(Rn.$$.fragment),op=c(),Ps=o("span"),rp=a("ErnieForMultipleChoice"),wa=c(),I=o("div"),v(Qn.$$.fragment),sp=c(),Cs=o("p"),ap=a(`Ernie Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ip=c(),Un=o("p"),dp=a("This model inherits from "),dr=o("a"),lp=a("PreTrainedModel"),cp=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hp=c(),Vn=o("p"),pp=a("This model is also a PyTorch "),Gn=o("a"),mp=a("torch.nn.Module"),up=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fp=c(),Y=o("div"),v(Kn.$$.fragment),gp=c(),Re=o("p"),_p=a("The "),lr=o("a"),kp=a("ErnieForMultipleChoice"),bp=a(" forward method, overrides the "),qs=o("code"),vp=a("__call__"),yp=a(" special method."),Tp=c(),v($t.$$.fragment),Ep=c(),v(zt.$$.fragment),$a=c(),Qe=o("h2"),Mt=o("a"),Ns=o("span"),v(Jn.$$.fragment),wp=c(),Os=o("span"),$p=a("ErnieForTokenClassification"),za=c(),j=o("div"),v(Yn.$$.fragment),zp=c(),As=o("p"),Mp=a(`Ernie Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Fp=c(),Xn=o("p"),xp=a("This model inherits from "),cr=o("a"),Pp=a("PreTrainedModel"),Cp=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qp=c(),Zn=o("p"),Np=a("This model is also a PyTorch "),eo=o("a"),Op=a("torch.nn.Module"),Ap=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lp=c(),te=o("div"),v(to.$$.fragment),Sp=c(),Ue=o("p"),Ip=a("The "),hr=o("a"),jp=a("ErnieForTokenClassification"),Dp=a(" forward method, overrides the "),Ls=o("code"),Wp=a("__call__"),Bp=a(" special method."),Hp=c(),v(Ft.$$.fragment),Ma=c(),Ve=o("h2"),xt=o("a"),Ss=o("span"),v(no.$$.fragment),Rp=c(),Is=o("span"),Qp=a("ErnieForQuestionAnswering"),Fa=c(),D=o("div"),v(oo.$$.fragment),Up=c(),Ge=o("p"),Vp=a(`Ernie Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),js=o("code"),Gp=a("span start logits"),Kp=a(" and "),Ds=o("code"),Jp=a("span end logits"),Yp=a(")."),Xp=c(),ro=o("p"),Zp=a("This model inherits from "),pr=o("a"),em=a("PreTrainedModel"),tm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nm=c(),so=o("p"),om=a("This model is also a PyTorch "),ao=o("a"),rm=a("torch.nn.Module"),sm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),am=c(),ne=o("div"),v(io.$$.fragment),im=c(),Ke=o("p"),dm=a("The "),mr=o("a"),lm=a("ErnieForQuestionAnswering"),cm=a(" forward method, overrides the "),Ws=o("code"),hm=a("__call__"),pm=a(" special method."),mm=c(),v(Pt.$$.fragment),this.h()},l(n){const g=Bf('[data-svelte="svelte-1phssyn"]',document.head);p=r(g,"META",{name:!0,content:!0}),g.forEach(t),b=h(n),u=r(n,"H1",{class:!0});var lo=s(u);f=r(lo,"A",{id:!0,class:!0,href:!0});var Bs=s(f);k=r(Bs,"SPAN",{});var Hs=s(k);y(d.$$.fragment,Hs),Hs.forEach(t),Bs.forEach(t),m=h(lo),M=r(lo,"SPAN",{});var Rs=s(M);pi=i(Rs,"ERNIE"),Rs.forEach(t),lo.forEach(t),ea=h(n),pe=r(n,"H2",{class:!0});var co=s(pe);Ze=r(co,"A",{id:!0,class:!0,href:!0});var Qs=s(Ze);Dr=r(Qs,"SPAN",{});var Us=s(Dr);y(Wt.$$.fragment,Us),Us.forEach(t),Qs.forEach(t),mi=h(co),Wr=r(co,"SPAN",{});var Vs=s(Wr);ui=i(Vs,"Overview"),Vs.forEach(t),co.forEach(t),ta=i(n,`

ERNIE is a series of powerful models proposed by baidu, especially in Chinese tasks,
including [ERNIE1.0](https://arxiv.org/abs/1904.09223), [ERNIE2.0](https://ojs.aaai.org/index.php/AAAI/article/view/6428),
[ERNIE3.0](https://arxiv.org/abs/2107.02137), [ERNIE-Gram](https://arxiv.org/abs/2010.12148), [ERNIE-health](https://arxiv.org/abs/2110.07244), etc.
`),Z=r(n,"P",{});var Je=s(Z);fi=i(Je,"These models are contributed by "),Bt=r(Je,"A",{href:!0,rel:!0});var Gs=s(Bt);gi=i(Gs,"nghuyong"),Gs.forEach(t),_i=i(Je," and the official code can be found in "),Ht=r(Je,"A",{href:!0,rel:!0});var Ks=s(Ht);ki=i(Ks,"PaddleNLP"),Ks.forEach(t),bi=i(Je," (in PaddlePaddle)."),Je.forEach(t),na=h(n),me=r(n,"H3",{class:!0});var ho=s(me);et=r(ho,"A",{id:!0,class:!0,href:!0});var Js=s(et);Br=r(Js,"SPAN",{});var Ys=s(Br);y(Rt.$$.fragment,Ys),Ys.forEach(t),Js.forEach(t),vi=h(ho),Hr=r(ho,"SPAN",{});var Xs=s(Hr);yi=i(Xs,"How to use"),Xs.forEach(t),ho.forEach(t),oa=i(n,`

Take \`ernie-1.0-base-zh\` as an example:

	`),y(Qt.$$.fragment,n),ra=h(n),ue=r(n,"H3",{class:!0});var po=s(ue);tt=r(po,"A",{id:!0,class:!0,href:!0});var Zs=s(tt);Rr=r(Zs,"SPAN",{});var um=s(Rr);y(Ut.$$.fragment,um),um.forEach(t),Zs.forEach(t),Ti=h(po),Qr=r(po,"SPAN",{});var fm=s(Qr);Ei=i(fm,"Supported Models"),fm.forEach(t),po.forEach(t),sa=h(n),nt=r(n,"TABLE",{});var Pa=s(nt);Ur=r(Pa,"THEAD",{});var gm=s(Ur);fe=r(gm,"TR",{});var ur=s(fe);mo=r(ur,"TH",{align:!0});var _m=s(mo);wi=i(_m,"Model Name"),_m.forEach(t),$i=h(ur),uo=r(ur,"TH",{align:!0});var km=s(uo);zi=i(km,"Language"),km.forEach(t),Mi=h(ur),fo=r(ur,"TH",{align:!0});var bm=s(fo);Fi=i(bm,"Description"),bm.forEach(t),ur.forEach(t),gm.forEach(t),xi=h(Pa),F=r(Pa,"TBODY",{});var x=s(F);ge=r(x,"TR",{});var fr=s(ge);go=r(fr,"TD",{align:!0});var vm=s(go);Pi=i(vm,"ernie-1.0-base-zh"),vm.forEach(t),Ci=h(fr),_o=r(fr,"TD",{align:!0});var ym=s(_o);qi=i(ym,"Chinese"),ym.forEach(t),Ni=h(fr),ko=r(fr,"TD",{align:!0});var Tm=s(ko);Oi=i(Tm,"Layer:12, Heads:12, Hidden:768"),Tm.forEach(t),fr.forEach(t),Ai=h(x),_e=r(x,"TR",{});var gr=s(_e);bo=r(gr,"TD",{align:!0});var Em=s(bo);Li=i(Em,"ernie-2.0-base-en"),Em.forEach(t),Si=h(gr),vo=r(gr,"TD",{align:!0});var wm=s(vo);Ii=i(wm,"English"),wm.forEach(t),ji=h(gr),yo=r(gr,"TD",{align:!0});var $m=s(yo);Di=i($m,"Layer:12, Heads:12, Hidden:768"),$m.forEach(t),gr.forEach(t),Wi=h(x),ke=r(x,"TR",{});var _r=s(ke);To=r(_r,"TD",{align:!0});var zm=s(To);Bi=i(zm,"ernie-2.0-large-en"),zm.forEach(t),Hi=h(_r),Eo=r(_r,"TD",{align:!0});var Mm=s(Eo);Ri=i(Mm,"English"),Mm.forEach(t),Qi=h(_r),wo=r(_r,"TD",{align:!0});var Fm=s(wo);Ui=i(Fm,"Layer:24, Heads:16, Hidden:1024"),Fm.forEach(t),_r.forEach(t),Vi=h(x),be=r(x,"TR",{});var kr=s(be);$o=r(kr,"TD",{align:!0});var xm=s($o);Gi=i(xm,"ernie-3.0-base-zh"),xm.forEach(t),Ki=h(kr),zo=r(kr,"TD",{align:!0});var Pm=s(zo);Ji=i(Pm,"Chinese"),Pm.forEach(t),Yi=h(kr),Mo=r(kr,"TD",{align:!0});var Cm=s(Mo);Xi=i(Cm,"Layer:12, Heads:12, Hidden:768"),Cm.forEach(t),kr.forEach(t),Zi=h(x),ve=r(x,"TR",{});var br=s(ve);Fo=r(br,"TD",{align:!0});var qm=s(Fo);ed=i(qm,"ernie-3.0-medium-zh"),qm.forEach(t),td=h(br),xo=r(br,"TD",{align:!0});var Nm=s(xo);nd=i(Nm,"Chinese"),Nm.forEach(t),od=h(br),Po=r(br,"TD",{align:!0});var Om=s(Po);rd=i(Om,"Layer:6, Heads:12, Hidden:768"),Om.forEach(t),br.forEach(t),sd=h(x),ye=r(x,"TR",{});var vr=s(ye);Co=r(vr,"TD",{align:!0});var Am=s(Co);ad=i(Am,"ernie-3.0-mini-zh"),Am.forEach(t),id=h(vr),qo=r(vr,"TD",{align:!0});var Lm=s(qo);dd=i(Lm,"Chinese"),Lm.forEach(t),ld=h(vr),No=r(vr,"TD",{align:!0});var Sm=s(No);cd=i(Sm,"Layer:6, Heads:12, Hidden:384"),Sm.forEach(t),vr.forEach(t),hd=h(x),Te=r(x,"TR",{});var yr=s(Te);Oo=r(yr,"TD",{align:!0});var Im=s(Oo);pd=i(Im,"ernie-3.0-micro-zh"),Im.forEach(t),md=h(yr),Ao=r(yr,"TD",{align:!0});var jm=s(Ao);ud=i(jm,"Chinese"),jm.forEach(t),fd=h(yr),Lo=r(yr,"TD",{align:!0});var Dm=s(Lo);gd=i(Dm,"Layer:4, Heads:12, Hidden:384"),Dm.forEach(t),yr.forEach(t),_d=h(x),Ee=r(x,"TR",{});var Tr=s(Ee);So=r(Tr,"TD",{align:!0});var Wm=s(So);kd=i(Wm,"ernie-3.0-nano-zh"),Wm.forEach(t),bd=h(Tr),Io=r(Tr,"TD",{align:!0});var Bm=s(Io);vd=i(Bm,"Chinese"),Bm.forEach(t),yd=h(Tr),jo=r(Tr,"TD",{align:!0});var Hm=s(jo);Td=i(Hm,"Layer:4, Heads:12, Hidden:312"),Hm.forEach(t),Tr.forEach(t),Ed=h(x),we=r(x,"TR",{});var Er=s(we);Do=r(Er,"TD",{align:!0});var Rm=s(Do);wd=i(Rm,"ernie-health-zh"),Rm.forEach(t),$d=h(Er),Wo=r(Er,"TD",{align:!0});var Qm=s(Wo);zd=i(Qm,"Chinese"),Qm.forEach(t),Md=h(Er),Bo=r(Er,"TD",{align:!0});var Um=s(Bo);Fd=i(Um,"Layer:12, Heads:12, Hidden:768"),Um.forEach(t),Er.forEach(t),xd=h(x),$e=r(x,"TR",{});var wr=s($e);Ho=r(wr,"TD",{align:!0});var Vm=s(Ho);Pd=i(Vm,"ernie-gram-zh"),Vm.forEach(t),Cd=h(wr),Ro=r(wr,"TD",{align:!0});var Gm=s(Ro);qd=i(Gm,"Chinese"),Gm.forEach(t),Nd=h(wr),Qo=r(wr,"TD",{align:!0});var Km=s(Qo);Od=i(Km,"Layer:12, Heads:12, Hidden:768"),Km.forEach(t),wr.forEach(t),x.forEach(t),Pa.forEach(t),aa=h(n),U=r(n,"P",{});var Ct=s(U);Ad=i(Ct,"You can find all the supported models from huggingface\u2019s model hub: "),Vt=r(Ct,"A",{href:!0,rel:!0});var Jm=s(Vt);Ld=i(Jm,"huggingface.co/nghuyong"),Jm.forEach(t),Sd=i(Ct,`, and model details from paddle\u2019s official
repo: `),Gt=r(Ct,"A",{href:!0,rel:!0});var Ym=s(Gt);Id=i(Ym,"PaddleNLP"),Ym.forEach(t),jd=i(Ct,`
and `),Kt=r(Ct,"A",{href:!0,rel:!0});var Xm=s(Kt);Dd=i(Xm,"ERNIE"),Xm.forEach(t),Wd=i(Ct,"."),Ct.forEach(t),ia=h(n),ze=r(n,"H2",{class:!0});var Ca=s(ze);ot=r(Ca,"A",{id:!0,class:!0,href:!0});var Zm=s(ot);Vr=r(Zm,"SPAN",{});var eu=s(Vr);y(Jt.$$.fragment,eu),eu.forEach(t),Zm.forEach(t),Bd=h(Ca),Gr=r(Ca,"SPAN",{});var tu=s(Gr);Hd=i(tu,"ErnieConfig"),tu.forEach(t),Ca.forEach(t),da=h(n),Q=r(n,"DIV",{class:!0});var qt=s(Q);y(Yt.$$.fragment,qt),Rd=h(qt),X=r(qt,"P",{});var Nt=s(X);Qd=i(Nt,"This is the configuration class to store the configuration of a "),Uo=r(Nt,"A",{href:!0});var nu=s(Uo);Ud=i(nu,"ErnieModel"),nu.forEach(t),Vd=i(Nt," or a "),Kr=r(Nt,"CODE",{});var ou=s(Kr);Gd=i(ou,"TFErnieModel"),ou.forEach(t),Kd=i(Nt,`. It is used to
instantiate a ERNIE model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the ERNIE
`),Xt=r(Nt,"A",{href:!0,rel:!0});var ru=s(Xt);Jd=i(ru,"nghuyong/ernie-3.0-base-zh"),ru.forEach(t),Yd=i(Nt," architecture."),Nt.forEach(t),Xd=h(qt),Me=r(qt,"P",{});var $r=s(Me);Zd=i($r,"Configuration objects inherit from "),Vo=r($r,"A",{href:!0});var su=s(Vo);el=i(su,"PretrainedConfig"),su.forEach(t),tl=i($r,` and can be used to control the model outputs. Read the
documentation from `),Go=r($r,"A",{href:!0});var au=s(Go);nl=i(au,"PretrainedConfig"),au.forEach(t),ol=i($r," for more information."),$r.forEach(t),rl=h(qt),y(rt.$$.fragment,qt),qt.forEach(t),la=h(n),Fe=r(n,"H2",{class:!0});var qa=s(Fe);st=r(qa,"A",{id:!0,class:!0,href:!0});var iu=s(st);Jr=r(iu,"SPAN",{});var du=s(Jr);y(Zt.$$.fragment,du),du.forEach(t),iu.forEach(t),sl=h(qa),Yr=r(qa,"SPAN",{});var lu=s(Yr);al=i(lu,"Ernie specific outputs"),lu.forEach(t),qa.forEach(t),ca=h(n),xe=r(n,"DIV",{class:!0});var Na=s(xe);y(en.$$.fragment,Na),il=h(Na),tn=r(Na,"P",{});var Oa=s(tn);dl=i(Oa,"Output type of "),Ko=r(Oa,"A",{href:!0});var cu=s(Ko);ll=i(cu,"ErnieForPreTraining"),cu.forEach(t),cl=i(Oa,"."),Oa.forEach(t),Na.forEach(t),ha=h(n),Pe=r(n,"H2",{class:!0});var Aa=s(Pe);at=r(Aa,"A",{id:!0,class:!0,href:!0});var hu=s(at);Xr=r(hu,"SPAN",{});var pu=s(Xr);y(nn.$$.fragment,pu),pu.forEach(t),hu.forEach(t),hl=h(Aa),Zr=r(Aa,"SPAN",{});var mu=s(Zr);pl=i(mu,"ErnieModel"),mu.forEach(t),Aa.forEach(t),pa=h(n),C=r(n,"DIV",{class:!0});var H=s(C);y(on.$$.fragment,H),ml=h(H),es=r(H,"P",{});var uu=s(es);ul=i(uu,"The bare Ernie Model transformer outputting raw hidden-states without any specific head on top."),uu.forEach(t),fl=h(H),rn=r(H,"P",{});var La=s(rn);gl=i(La,"This model inherits from "),Jo=r(La,"A",{href:!0});var fu=s(Jo);_l=i(fu,"PreTrainedModel"),fu.forEach(t),kl=i(La,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),La.forEach(t),bl=h(H),sn=r(H,"P",{});var Sa=s(sn);vl=i(Sa,"This model is also a PyTorch "),an=r(Sa,"A",{href:!0,rel:!0});var gu=s(an);yl=i(gu,"torch.nn.Module"),gu.forEach(t),Tl=i(Sa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sa.forEach(t),El=h(H),dn=r(H,"P",{});var Ia=s(dn);wl=i(Ia,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),ln=r(Ia,"A",{href:!0,rel:!0});var _u=s(ln);$l=i(_u,`Attention is
all you need`),_u.forEach(t),zl=i(Ia,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ia.forEach(t),Ml=h(H),q=r(H,"P",{});var R=s(q);Fl=i(R,"To behave as an decoder the model needs to be initialized with the "),ts=r(R,"CODE",{});var ku=s(ts);xl=i(ku,"is_decoder"),ku.forEach(t),Pl=i(R,` argument of the configuration set
to `),ns=r(R,"CODE",{});var bu=s(ns);Cl=i(bu,"True"),bu.forEach(t),ql=i(R,". To be used in a Seq2Seq model, the model needs to initialized with both "),os=r(R,"CODE",{});var vu=s(os);Nl=i(vu,"is_decoder"),vu.forEach(t),Ol=i(R,` argument and
`),rs=r(R,"CODE",{});var yu=s(rs);Al=i(yu,"add_cross_attention"),yu.forEach(t),Ll=i(R," set to "),ss=r(R,"CODE",{});var Tu=s(ss);Sl=i(Tu,"True"),Tu.forEach(t),Il=i(R,"; an "),as=r(R,"CODE",{});var Eu=s(as);jl=i(Eu,"encoder_hidden_states"),Eu.forEach(t),Dl=i(R," is then expected as an input to the forward pass."),R.forEach(t),Wl=h(H),V=r(H,"DIV",{class:!0});var Ot=s(V);y(cn.$$.fragment,Ot),Bl=h(Ot),Ce=r(Ot,"P",{});var zr=s(Ce);Hl=i(zr,"The "),Yo=r(zr,"A",{href:!0});var wu=s(Yo);Rl=i(wu,"ErnieModel"),wu.forEach(t),Ql=i(zr," forward method, overrides the "),is=r(zr,"CODE",{});var $u=s(is);Ul=i($u,"__call__"),$u.forEach(t),Vl=i(zr," special method."),zr.forEach(t),Gl=h(Ot),y(it.$$.fragment,Ot),Kl=h(Ot),y(dt.$$.fragment,Ot),Ot.forEach(t),H.forEach(t),ma=h(n),qe=r(n,"H2",{class:!0});var ja=s(qe);lt=r(ja,"A",{id:!0,class:!0,href:!0});var zu=s(lt);ds=r(zu,"SPAN",{});var Mu=s(ds);y(hn.$$.fragment,Mu),Mu.forEach(t),zu.forEach(t),Jl=h(ja),ls=r(ja,"SPAN",{});var Fu=s(ls);Yl=i(Fu,"ErnieForPreTraining"),Fu.forEach(t),ja.forEach(t),ua=h(n),N=r(n,"DIV",{class:!0});var oe=s(N);y(pn.$$.fragment,oe),Xl=h(oe),Ne=r(oe,"P",{});var Mr=s(Ne);Zl=i(Mr,"Ernie Model with two heads on top as done during the pretraining: a "),cs=r(Mr,"CODE",{});var xu=s(cs);ec=i(xu,"masked language modeling"),xu.forEach(t),tc=i(Mr," head and a "),hs=r(Mr,"CODE",{});var Pu=s(hs);nc=i(Pu,"next sentence prediction (classification)"),Pu.forEach(t),oc=i(Mr," head."),Mr.forEach(t),rc=h(oe),mn=r(oe,"P",{});var Da=s(mn);sc=i(Da,"This model inherits from "),Xo=r(Da,"A",{href:!0});var Cu=s(Xo);ac=i(Cu,"PreTrainedModel"),Cu.forEach(t),ic=i(Da,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Da.forEach(t),dc=h(oe),un=r(oe,"P",{});var Wa=s(un);lc=i(Wa,"This model is also a PyTorch "),fn=r(Wa,"A",{href:!0,rel:!0});var qu=s(fn);cc=i(qu,"torch.nn.Module"),qu.forEach(t),hc=i(Wa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wa.forEach(t),pc=h(oe),G=r(oe,"DIV",{class:!0});var At=s(G);y(gn.$$.fragment,At),mc=h(At),Oe=r(At,"P",{});var Fr=s(Oe);uc=i(Fr,"The "),Zo=r(Fr,"A",{href:!0});var Nu=s(Zo);fc=i(Nu,"ErnieForPreTraining"),Nu.forEach(t),gc=i(Fr," forward method, overrides the "),ps=r(Fr,"CODE",{});var Ou=s(ps);_c=i(Ou,"__call__"),Ou.forEach(t),kc=i(Fr," special method."),Fr.forEach(t),bc=h(At),y(ct.$$.fragment,At),vc=h(At),y(ht.$$.fragment,At),At.forEach(t),oe.forEach(t),fa=h(n),Ae=r(n,"H2",{class:!0});var Ba=s(Ae);pt=r(Ba,"A",{id:!0,class:!0,href:!0});var Au=s(pt);ms=r(Au,"SPAN",{});var Lu=s(ms);y(_n.$$.fragment,Lu),Lu.forEach(t),Au.forEach(t),yc=h(Ba),us=r(Ba,"SPAN",{});var Su=s(us);Tc=i(Su,"ErnieForCausalLM"),Su.forEach(t),Ba.forEach(t),ga=h(n),O=r(n,"DIV",{class:!0});var re=s(O);y(kn.$$.fragment,re),Ec=h(re),bn=r(re,"P",{});var Ha=s(bn);wc=i(Ha,"Ernie Model with a "),fs=r(Ha,"CODE",{});var Iu=s(fs);$c=i(Iu,"language modeling"),Iu.forEach(t),zc=i(Ha," head on top for CLM fine-tuning."),Ha.forEach(t),Mc=h(re),vn=r(re,"P",{});var Ra=s(vn);Fc=i(Ra,"This model inherits from "),er=r(Ra,"A",{href:!0});var ju=s(er);xc=i(ju,"PreTrainedModel"),ju.forEach(t),Pc=i(Ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ra.forEach(t),Cc=h(re),yn=r(re,"P",{});var Qa=s(yn);qc=i(Qa,"This model is also a PyTorch "),Tn=r(Qa,"A",{href:!0,rel:!0});var Du=s(Tn);Nc=i(Du,"torch.nn.Module"),Du.forEach(t),Oc=i(Qa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qa.forEach(t),Ac=h(re),K=r(re,"DIV",{class:!0});var Lt=s(K);y(En.$$.fragment,Lt),Lc=h(Lt),Le=r(Lt,"P",{});var xr=s(Le);Sc=i(xr,"The "),tr=r(xr,"A",{href:!0});var Wu=s(tr);Ic=i(Wu,"ErnieForCausalLM"),Wu.forEach(t),jc=i(xr," forward method, overrides the "),gs=r(xr,"CODE",{});var Bu=s(gs);Dc=i(Bu,"__call__"),Bu.forEach(t),Wc=i(xr," special method."),xr.forEach(t),Bc=h(Lt),y(mt.$$.fragment,Lt),Hc=h(Lt),y(ut.$$.fragment,Lt),Lt.forEach(t),re.forEach(t),_a=h(n),Se=r(n,"H2",{class:!0});var Ua=s(Se);ft=r(Ua,"A",{id:!0,class:!0,href:!0});var Hu=s(ft);_s=r(Hu,"SPAN",{});var Ru=s(_s);y(wn.$$.fragment,Ru),Ru.forEach(t),Hu.forEach(t),Rc=h(Ua),ks=r(Ua,"SPAN",{});var Qu=s(ks);Qc=i(Qu,"ErnieForMaskedLM"),Qu.forEach(t),Ua.forEach(t),ka=h(n),A=r(n,"DIV",{class:!0});var se=s(A);y($n.$$.fragment,se),Uc=h(se),zn=r(se,"P",{});var Va=s(zn);Vc=i(Va,"Ernie Model with a "),bs=r(Va,"CODE",{});var Uu=s(bs);Gc=i(Uu,"language modeling"),Uu.forEach(t),Kc=i(Va," head on top."),Va.forEach(t),Jc=h(se),Mn=r(se,"P",{});var Ga=s(Mn);Yc=i(Ga,"This model inherits from "),nr=r(Ga,"A",{href:!0});var Vu=s(nr);Xc=i(Vu,"PreTrainedModel"),Vu.forEach(t),Zc=i(Ga,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ga.forEach(t),eh=h(se),Fn=r(se,"P",{});var Ka=s(Fn);th=i(Ka,"This model is also a PyTorch "),xn=r(Ka,"A",{href:!0,rel:!0});var Gu=s(xn);nh=i(Gu,"torch.nn.Module"),Gu.forEach(t),oh=i(Ka,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ka.forEach(t),rh=h(se),B=r(se,"DIV",{class:!0});var ae=s(B);y(Pn.$$.fragment,ae),sh=h(ae),Ie=r(ae,"P",{});var Pr=s(Ie);ah=i(Pr,"The "),or=r(Pr,"A",{href:!0});var Ku=s(or);ih=i(Ku,"ErnieForMaskedLM"),Ku.forEach(t),dh=i(Pr," forward method, overrides the "),vs=r(Pr,"CODE",{});var Ju=s(vs);lh=i(Ju,"__call__"),Ju.forEach(t),ch=i(Pr," special method."),Pr.forEach(t),hh=h(ae),y(gt.$$.fragment,ae),ph=h(ae),y(_t.$$.fragment,ae),mh=h(ae),y(kt.$$.fragment,ae),ae.forEach(t),se.forEach(t),ba=h(n),je=r(n,"H2",{class:!0});var Ja=s(je);bt=r(Ja,"A",{id:!0,class:!0,href:!0});var Yu=s(bt);ys=r(Yu,"SPAN",{});var Xu=s(ys);y(Cn.$$.fragment,Xu),Xu.forEach(t),Yu.forEach(t),uh=h(Ja),Ts=r(Ja,"SPAN",{});var Zu=s(Ts);fh=i(Zu,"ErnieForNextSentencePrediction"),Zu.forEach(t),Ja.forEach(t),va=h(n),L=r(n,"DIV",{class:!0});var ie=s(L);y(qn.$$.fragment,ie),gh=h(ie),Nn=r(ie,"P",{});var Ya=s(Nn);_h=i(Ya,"Ernie Model with a "),Es=r(Ya,"CODE",{});var ef=s(Es);kh=i(ef,"next sentence prediction (classification)"),ef.forEach(t),bh=i(Ya," head on top."),Ya.forEach(t),vh=h(ie),On=r(ie,"P",{});var Xa=s(On);yh=i(Xa,"This model inherits from "),rr=r(Xa,"A",{href:!0});var tf=s(rr);Th=i(tf,"PreTrainedModel"),tf.forEach(t),Eh=i(Xa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xa.forEach(t),wh=h(ie),An=r(ie,"P",{});var Za=s(An);$h=i(Za,"This model is also a PyTorch "),Ln=r(Za,"A",{href:!0,rel:!0});var nf=s(Ln);zh=i(nf,"torch.nn.Module"),nf.forEach(t),Mh=i(Za,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Za.forEach(t),Fh=h(ie),J=r(ie,"DIV",{class:!0});var St=s(J);y(Sn.$$.fragment,St),xh=h(St),De=r(St,"P",{});var Cr=s(De);Ph=i(Cr,"The "),sr=r(Cr,"A",{href:!0});var of=s(sr);Ch=i(of,"ErnieForNextSentencePrediction"),of.forEach(t),qh=i(Cr," forward method, overrides the "),ws=r(Cr,"CODE",{});var rf=s(ws);Nh=i(rf,"__call__"),rf.forEach(t),Oh=i(Cr," special method."),Cr.forEach(t),Ah=h(St),y(vt.$$.fragment,St),Lh=h(St),y(yt.$$.fragment,St),St.forEach(t),ie.forEach(t),ya=h(n),We=r(n,"H2",{class:!0});var ei=s(We);Tt=r(ei,"A",{id:!0,class:!0,href:!0});var sf=s(Tt);$s=r(sf,"SPAN",{});var af=s($s);y(In.$$.fragment,af),af.forEach(t),sf.forEach(t),Sh=h(ei),zs=r(ei,"SPAN",{});var df=s(zs);Ih=i(df,"ErnieForSequenceClassification"),df.forEach(t),ei.forEach(t),Ta=h(n),S=r(n,"DIV",{class:!0});var de=s(S);y(jn.$$.fragment,de),jh=h(de),Ms=r(de,"P",{});var lf=s(Ms);Dh=i(lf,`Ernie Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),lf.forEach(t),Wh=h(de),Dn=r(de,"P",{});var ti=s(Dn);Bh=i(ti,"This model inherits from "),ar=r(ti,"A",{href:!0});var cf=s(ar);Hh=i(cf,"PreTrainedModel"),cf.forEach(t),Rh=i(ti,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ti.forEach(t),Qh=h(de),Wn=r(de,"P",{});var ni=s(Wn);Uh=i(ni,"This model is also a PyTorch "),Bn=r(ni,"A",{href:!0,rel:!0});var hf=s(Bn);Vh=i(hf,"torch.nn.Module"),hf.forEach(t),Gh=i(ni,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ni.forEach(t),Kh=h(de),ee=r(de,"DIV",{class:!0});var qr=s(ee);y(Hn.$$.fragment,qr),Jh=h(qr),Be=r(qr,"P",{});var Nr=s(Be);Yh=i(Nr,"The "),ir=r(Nr,"A",{href:!0});var pf=s(ir);Xh=i(pf,"ErnieForSequenceClassification"),pf.forEach(t),Zh=i(Nr," forward method, overrides the "),Fs=r(Nr,"CODE",{});var mf=s(Fs);ep=i(mf,"__call__"),mf.forEach(t),tp=i(Nr," special method."),Nr.forEach(t),np=h(qr),y(Et.$$.fragment,qr),qr.forEach(t),de.forEach(t),Ea=h(n),He=r(n,"H2",{class:!0});var oi=s(He);wt=r(oi,"A",{id:!0,class:!0,href:!0});var uf=s(wt);xs=r(uf,"SPAN",{});var ff=s(xs);y(Rn.$$.fragment,ff),ff.forEach(t),uf.forEach(t),op=h(oi),Ps=r(oi,"SPAN",{});var gf=s(Ps);rp=i(gf,"ErnieForMultipleChoice"),gf.forEach(t),oi.forEach(t),wa=h(n),I=r(n,"DIV",{class:!0});var le=s(I);y(Qn.$$.fragment,le),sp=h(le),Cs=r(le,"P",{});var _f=s(Cs);ap=i(_f,`Ernie Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),_f.forEach(t),ip=h(le),Un=r(le,"P",{});var ri=s(Un);dp=i(ri,"This model inherits from "),dr=r(ri,"A",{href:!0});var kf=s(dr);lp=i(kf,"PreTrainedModel"),kf.forEach(t),cp=i(ri,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ri.forEach(t),hp=h(le),Vn=r(le,"P",{});var si=s(Vn);pp=i(si,"This model is also a PyTorch "),Gn=r(si,"A",{href:!0,rel:!0});var bf=s(Gn);mp=i(bf,"torch.nn.Module"),bf.forEach(t),up=i(si,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),si.forEach(t),fp=h(le),Y=r(le,"DIV",{class:!0});var It=s(Y);y(Kn.$$.fragment,It),gp=h(It),Re=r(It,"P",{});var Or=s(Re);_p=i(Or,"The "),lr=r(Or,"A",{href:!0});var vf=s(lr);kp=i(vf,"ErnieForMultipleChoice"),vf.forEach(t),bp=i(Or," forward method, overrides the "),qs=r(Or,"CODE",{});var yf=s(qs);vp=i(yf,"__call__"),yf.forEach(t),yp=i(Or," special method."),Or.forEach(t),Tp=h(It),y($t.$$.fragment,It),Ep=h(It),y(zt.$$.fragment,It),It.forEach(t),le.forEach(t),$a=h(n),Qe=r(n,"H2",{class:!0});var ai=s(Qe);Mt=r(ai,"A",{id:!0,class:!0,href:!0});var Tf=s(Mt);Ns=r(Tf,"SPAN",{});var Ef=s(Ns);y(Jn.$$.fragment,Ef),Ef.forEach(t),Tf.forEach(t),wp=h(ai),Os=r(ai,"SPAN",{});var wf=s(Os);$p=i(wf,"ErnieForTokenClassification"),wf.forEach(t),ai.forEach(t),za=h(n),j=r(n,"DIV",{class:!0});var ce=s(j);y(Yn.$$.fragment,ce),zp=h(ce),As=r(ce,"P",{});var $f=s(As);Mp=i($f,`Ernie Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$f.forEach(t),Fp=h(ce),Xn=r(ce,"P",{});var ii=s(Xn);xp=i(ii,"This model inherits from "),cr=r(ii,"A",{href:!0});var zf=s(cr);Pp=i(zf,"PreTrainedModel"),zf.forEach(t),Cp=i(ii,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ii.forEach(t),qp=h(ce),Zn=r(ce,"P",{});var di=s(Zn);Np=i(di,"This model is also a PyTorch "),eo=r(di,"A",{href:!0,rel:!0});var Mf=s(eo);Op=i(Mf,"torch.nn.Module"),Mf.forEach(t),Ap=i(di,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),di.forEach(t),Lp=h(ce),te=r(ce,"DIV",{class:!0});var Ar=s(te);y(to.$$.fragment,Ar),Sp=h(Ar),Ue=r(Ar,"P",{});var Lr=s(Ue);Ip=i(Lr,"The "),hr=r(Lr,"A",{href:!0});var Ff=s(hr);jp=i(Ff,"ErnieForTokenClassification"),Ff.forEach(t),Dp=i(Lr," forward method, overrides the "),Ls=r(Lr,"CODE",{});var xf=s(Ls);Wp=i(xf,"__call__"),xf.forEach(t),Bp=i(Lr," special method."),Lr.forEach(t),Hp=h(Ar),y(Ft.$$.fragment,Ar),Ar.forEach(t),ce.forEach(t),Ma=h(n),Ve=r(n,"H2",{class:!0});var li=s(Ve);xt=r(li,"A",{id:!0,class:!0,href:!0});var Pf=s(xt);Ss=r(Pf,"SPAN",{});var Cf=s(Ss);y(no.$$.fragment,Cf),Cf.forEach(t),Pf.forEach(t),Rp=h(li),Is=r(li,"SPAN",{});var qf=s(Is);Qp=i(qf,"ErnieForQuestionAnswering"),qf.forEach(t),li.forEach(t),Fa=h(n),D=r(n,"DIV",{class:!0});var he=s(D);y(oo.$$.fragment,he),Up=h(he),Ge=r(he,"P",{});var Sr=s(Ge);Vp=i(Sr,`Ernie Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),js=r(Sr,"CODE",{});var Nf=s(js);Gp=i(Nf,"span start logits"),Nf.forEach(t),Kp=i(Sr," and "),Ds=r(Sr,"CODE",{});var Of=s(Ds);Jp=i(Of,"span end logits"),Of.forEach(t),Yp=i(Sr,")."),Sr.forEach(t),Xp=h(he),ro=r(he,"P",{});var ci=s(ro);Zp=i(ci,"This model inherits from "),pr=r(ci,"A",{href:!0});var Af=s(pr);em=i(Af,"PreTrainedModel"),Af.forEach(t),tm=i(ci,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ci.forEach(t),nm=h(he),so=r(he,"P",{});var hi=s(so);om=i(hi,"This model is also a PyTorch "),ao=r(hi,"A",{href:!0,rel:!0});var Lf=s(ao);rm=i(Lf,"torch.nn.Module"),Lf.forEach(t),sm=i(hi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hi.forEach(t),am=h(he),ne=r(he,"DIV",{class:!0});var Ir=s(ne);y(io.$$.fragment,Ir),im=h(Ir),Ke=r(Ir,"P",{});var jr=s(Ke);dm=i(jr,"The "),mr=r(jr,"A",{href:!0});var Sf=s(mr);lm=i(Sf,"ErnieForQuestionAnswering"),Sf.forEach(t),cm=i(jr," forward method, overrides the "),Ws=r(jr,"CODE",{});var If=s(Ws);hm=i(If,"__call__"),If.forEach(t),pm=i(jr," special method."),jr.forEach(t),mm=h(Ir),y(Pt.$$.fragment,Ir),Ir.forEach(t),he.forEach(t),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(dg)),l(f,"id","ernie"),l(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(f,"href","#ernie"),l(u,"class","relative group"),l(Ze,"id","overview"),l(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ze,"href","#overview"),l(pe,"class","relative group"),l(Bt,"href","https://huggingface.co/nghuyong"),l(Bt,"rel","nofollow"),l(Ht,"href","https://github.com/PaddlePaddle/PaddleNLP"),l(Ht,"rel","nofollow"),l(et,"id","how-to-use"),l(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(et,"href","#how-to-use"),l(me,"class","relative group"),l(tt,"id","supported-models"),l(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(tt,"href","#supported-models"),l(ue,"class","relative group"),l(mo,"align","center"),l(uo,"align","center"),l(fo,"align","center"),l(go,"align","center"),l(_o,"align","center"),l(ko,"align","center"),l(bo,"align","center"),l(vo,"align","center"),l(yo,"align","center"),l(To,"align","center"),l(Eo,"align","center"),l(wo,"align","center"),l($o,"align","center"),l(zo,"align","center"),l(Mo,"align","center"),l(Fo,"align","center"),l(xo,"align","center"),l(Po,"align","center"),l(Co,"align","center"),l(qo,"align","center"),l(No,"align","center"),l(Oo,"align","center"),l(Ao,"align","center"),l(Lo,"align","center"),l(So,"align","center"),l(Io,"align","center"),l(jo,"align","center"),l(Do,"align","center"),l(Wo,"align","center"),l(Bo,"align","center"),l(Ho,"align","center"),l(Ro,"align","center"),l(Qo,"align","center"),l(Vt,"href","https://huggingface.co/nghuyong"),l(Vt,"rel","nofollow"),l(Gt,"href","https://paddlenlp.readthedocs.io/zh/latest/model_zoo/transformers/ERNIE/contents.html"),l(Gt,"rel","nofollow"),l(Kt,"href","https://github.com/PaddlePaddle/ERNIE/blob/repro"),l(Kt,"rel","nofollow"),l(ot,"id","transformers.ErnieConfig"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.ErnieConfig"),l(ze,"class","relative group"),l(Uo,"href","/docs/transformers/main/en/model_doc/ernie#transformers.ErnieModel"),l(Xt,"href","https://huggingface.co/nghuyong/ernie-3.0-base-zh"),l(Xt,"rel","nofollow"),l(Vo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(Go,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(st,"id","transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput"),l(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(st,"href","#transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput"),l(Fe,"class","relative group"),l(Ko,"href","/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForPreTraining"),l(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(at,"id","transformers.ErnieModel"),l(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(at,"href","#transformers.ErnieModel"),l(Pe,"class","relative group"),l(Jo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(an,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(an,"rel","nofollow"),l(ln,"href","https://arxiv.org/abs/1706.03762"),l(ln,"rel","nofollow"),l(Yo,"href","/docs/transformers/main/en/model_doc/ernie#transformers.ErnieModel"),l(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(lt,"id","transformers.ErnieForPreTraining"),l(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lt,"href","#transformers.ErnieForPreTraining"),l(qe,"class","relative group"),l(Xo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(fn,"rel","nofollow"),l(Zo,"href","/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForPreTraining"),l(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(pt,"id","transformers.ErnieForCausalLM"),l(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(pt,"href","#transformers.ErnieForCausalLM"),l(Ae,"class","relative group"),l(er,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Tn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Tn,"rel","nofollow"),l(tr,"href","/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForCausalLM"),l(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ft,"id","transformers.ErnieForMaskedLM"),l(ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ft,"href","#transformers.ErnieForMaskedLM"),l(Se,"class","relative group"),l(nr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(xn,"rel","nofollow"),l(or,"href","/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForMaskedLM"),l(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(bt,"id","transformers.ErnieForNextSentencePrediction"),l(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(bt,"href","#transformers.ErnieForNextSentencePrediction"),l(je,"class","relative group"),l(rr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ln,"rel","nofollow"),l(sr,"href","/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForNextSentencePrediction"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Tt,"id","transformers.ErnieForSequenceClassification"),l(Tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Tt,"href","#transformers.ErnieForSequenceClassification"),l(We,"class","relative group"),l(ar,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Bn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Bn,"rel","nofollow"),l(ir,"href","/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForSequenceClassification"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(wt,"id","transformers.ErnieForMultipleChoice"),l(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(wt,"href","#transformers.ErnieForMultipleChoice"),l(He,"class","relative group"),l(dr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Gn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Gn,"rel","nofollow"),l(lr,"href","/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForMultipleChoice"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Mt,"id","transformers.ErnieForTokenClassification"),l(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Mt,"href","#transformers.ErnieForTokenClassification"),l(Qe,"class","relative group"),l(cr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(eo,"rel","nofollow"),l(hr,"href","/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForTokenClassification"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(xt,"id","transformers.ErnieForQuestionAnswering"),l(xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(xt,"href","#transformers.ErnieForQuestionAnswering"),l(Ve,"class","relative group"),l(pr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ao,"rel","nofollow"),l(mr,"href","/docs/transformers/main/en/model_doc/ernie#transformers.ErnieForQuestionAnswering"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,g){e(document.head,p),_(n,b,g),_(n,u,g),e(u,f),e(f,k),T(d,k,null),e(u,m),e(u,M),e(M,pi),_(n,ea,g),_(n,pe,g),e(pe,Ze),e(Ze,Dr),T(Wt,Dr,null),e(pe,mi),e(pe,Wr),e(Wr,ui),_(n,ta,g),_(n,Z,g),e(Z,fi),e(Z,Bt),e(Bt,gi),e(Z,_i),e(Z,Ht),e(Ht,ki),e(Z,bi),_(n,na,g),_(n,me,g),e(me,et),e(et,Br),T(Rt,Br,null),e(me,vi),e(me,Hr),e(Hr,yi),_(n,oa,g),T(Qt,n,g),_(n,ra,g),_(n,ue,g),e(ue,tt),e(tt,Rr),T(Ut,Rr,null),e(ue,Ti),e(ue,Qr),e(Qr,Ei),_(n,sa,g),_(n,nt,g),e(nt,Ur),e(Ur,fe),e(fe,mo),e(mo,wi),e(fe,$i),e(fe,uo),e(uo,zi),e(fe,Mi),e(fe,fo),e(fo,Fi),e(nt,xi),e(nt,F),e(F,ge),e(ge,go),e(go,Pi),e(ge,Ci),e(ge,_o),e(_o,qi),e(ge,Ni),e(ge,ko),e(ko,Oi),e(F,Ai),e(F,_e),e(_e,bo),e(bo,Li),e(_e,Si),e(_e,vo),e(vo,Ii),e(_e,ji),e(_e,yo),e(yo,Di),e(F,Wi),e(F,ke),e(ke,To),e(To,Bi),e(ke,Hi),e(ke,Eo),e(Eo,Ri),e(ke,Qi),e(ke,wo),e(wo,Ui),e(F,Vi),e(F,be),e(be,$o),e($o,Gi),e(be,Ki),e(be,zo),e(zo,Ji),e(be,Yi),e(be,Mo),e(Mo,Xi),e(F,Zi),e(F,ve),e(ve,Fo),e(Fo,ed),e(ve,td),e(ve,xo),e(xo,nd),e(ve,od),e(ve,Po),e(Po,rd),e(F,sd),e(F,ye),e(ye,Co),e(Co,ad),e(ye,id),e(ye,qo),e(qo,dd),e(ye,ld),e(ye,No),e(No,cd),e(F,hd),e(F,Te),e(Te,Oo),e(Oo,pd),e(Te,md),e(Te,Ao),e(Ao,ud),e(Te,fd),e(Te,Lo),e(Lo,gd),e(F,_d),e(F,Ee),e(Ee,So),e(So,kd),e(Ee,bd),e(Ee,Io),e(Io,vd),e(Ee,yd),e(Ee,jo),e(jo,Td),e(F,Ed),e(F,we),e(we,Do),e(Do,wd),e(we,$d),e(we,Wo),e(Wo,zd),e(we,Md),e(we,Bo),e(Bo,Fd),e(F,xd),e(F,$e),e($e,Ho),e(Ho,Pd),e($e,Cd),e($e,Ro),e(Ro,qd),e($e,Nd),e($e,Qo),e(Qo,Od),_(n,aa,g),_(n,U,g),e(U,Ad),e(U,Vt),e(Vt,Ld),e(U,Sd),e(U,Gt),e(Gt,Id),e(U,jd),e(U,Kt),e(Kt,Dd),e(U,Wd),_(n,ia,g),_(n,ze,g),e(ze,ot),e(ot,Vr),T(Jt,Vr,null),e(ze,Bd),e(ze,Gr),e(Gr,Hd),_(n,da,g),_(n,Q,g),T(Yt,Q,null),e(Q,Rd),e(Q,X),e(X,Qd),e(X,Uo),e(Uo,Ud),e(X,Vd),e(X,Kr),e(Kr,Gd),e(X,Kd),e(X,Xt),e(Xt,Jd),e(X,Yd),e(Q,Xd),e(Q,Me),e(Me,Zd),e(Me,Vo),e(Vo,el),e(Me,tl),e(Me,Go),e(Go,nl),e(Me,ol),e(Q,rl),T(rt,Q,null),_(n,la,g),_(n,Fe,g),e(Fe,st),e(st,Jr),T(Zt,Jr,null),e(Fe,sl),e(Fe,Yr),e(Yr,al),_(n,ca,g),_(n,xe,g),T(en,xe,null),e(xe,il),e(xe,tn),e(tn,dl),e(tn,Ko),e(Ko,ll),e(tn,cl),_(n,ha,g),_(n,Pe,g),e(Pe,at),e(at,Xr),T(nn,Xr,null),e(Pe,hl),e(Pe,Zr),e(Zr,pl),_(n,pa,g),_(n,C,g),T(on,C,null),e(C,ml),e(C,es),e(es,ul),e(C,fl),e(C,rn),e(rn,gl),e(rn,Jo),e(Jo,_l),e(rn,kl),e(C,bl),e(C,sn),e(sn,vl),e(sn,an),e(an,yl),e(sn,Tl),e(C,El),e(C,dn),e(dn,wl),e(dn,ln),e(ln,$l),e(dn,zl),e(C,Ml),e(C,q),e(q,Fl),e(q,ts),e(ts,xl),e(q,Pl),e(q,ns),e(ns,Cl),e(q,ql),e(q,os),e(os,Nl),e(q,Ol),e(q,rs),e(rs,Al),e(q,Ll),e(q,ss),e(ss,Sl),e(q,Il),e(q,as),e(as,jl),e(q,Dl),e(C,Wl),e(C,V),T(cn,V,null),e(V,Bl),e(V,Ce),e(Ce,Hl),e(Ce,Yo),e(Yo,Rl),e(Ce,Ql),e(Ce,is),e(is,Ul),e(Ce,Vl),e(V,Gl),T(it,V,null),e(V,Kl),T(dt,V,null),_(n,ma,g),_(n,qe,g),e(qe,lt),e(lt,ds),T(hn,ds,null),e(qe,Jl),e(qe,ls),e(ls,Yl),_(n,ua,g),_(n,N,g),T(pn,N,null),e(N,Xl),e(N,Ne),e(Ne,Zl),e(Ne,cs),e(cs,ec),e(Ne,tc),e(Ne,hs),e(hs,nc),e(Ne,oc),e(N,rc),e(N,mn),e(mn,sc),e(mn,Xo),e(Xo,ac),e(mn,ic),e(N,dc),e(N,un),e(un,lc),e(un,fn),e(fn,cc),e(un,hc),e(N,pc),e(N,G),T(gn,G,null),e(G,mc),e(G,Oe),e(Oe,uc),e(Oe,Zo),e(Zo,fc),e(Oe,gc),e(Oe,ps),e(ps,_c),e(Oe,kc),e(G,bc),T(ct,G,null),e(G,vc),T(ht,G,null),_(n,fa,g),_(n,Ae,g),e(Ae,pt),e(pt,ms),T(_n,ms,null),e(Ae,yc),e(Ae,us),e(us,Tc),_(n,ga,g),_(n,O,g),T(kn,O,null),e(O,Ec),e(O,bn),e(bn,wc),e(bn,fs),e(fs,$c),e(bn,zc),e(O,Mc),e(O,vn),e(vn,Fc),e(vn,er),e(er,xc),e(vn,Pc),e(O,Cc),e(O,yn),e(yn,qc),e(yn,Tn),e(Tn,Nc),e(yn,Oc),e(O,Ac),e(O,K),T(En,K,null),e(K,Lc),e(K,Le),e(Le,Sc),e(Le,tr),e(tr,Ic),e(Le,jc),e(Le,gs),e(gs,Dc),e(Le,Wc),e(K,Bc),T(mt,K,null),e(K,Hc),T(ut,K,null),_(n,_a,g),_(n,Se,g),e(Se,ft),e(ft,_s),T(wn,_s,null),e(Se,Rc),e(Se,ks),e(ks,Qc),_(n,ka,g),_(n,A,g),T($n,A,null),e(A,Uc),e(A,zn),e(zn,Vc),e(zn,bs),e(bs,Gc),e(zn,Kc),e(A,Jc),e(A,Mn),e(Mn,Yc),e(Mn,nr),e(nr,Xc),e(Mn,Zc),e(A,eh),e(A,Fn),e(Fn,th),e(Fn,xn),e(xn,nh),e(Fn,oh),e(A,rh),e(A,B),T(Pn,B,null),e(B,sh),e(B,Ie),e(Ie,ah),e(Ie,or),e(or,ih),e(Ie,dh),e(Ie,vs),e(vs,lh),e(Ie,ch),e(B,hh),T(gt,B,null),e(B,ph),T(_t,B,null),e(B,mh),T(kt,B,null),_(n,ba,g),_(n,je,g),e(je,bt),e(bt,ys),T(Cn,ys,null),e(je,uh),e(je,Ts),e(Ts,fh),_(n,va,g),_(n,L,g),T(qn,L,null),e(L,gh),e(L,Nn),e(Nn,_h),e(Nn,Es),e(Es,kh),e(Nn,bh),e(L,vh),e(L,On),e(On,yh),e(On,rr),e(rr,Th),e(On,Eh),e(L,wh),e(L,An),e(An,$h),e(An,Ln),e(Ln,zh),e(An,Mh),e(L,Fh),e(L,J),T(Sn,J,null),e(J,xh),e(J,De),e(De,Ph),e(De,sr),e(sr,Ch),e(De,qh),e(De,ws),e(ws,Nh),e(De,Oh),e(J,Ah),T(vt,J,null),e(J,Lh),T(yt,J,null),_(n,ya,g),_(n,We,g),e(We,Tt),e(Tt,$s),T(In,$s,null),e(We,Sh),e(We,zs),e(zs,Ih),_(n,Ta,g),_(n,S,g),T(jn,S,null),e(S,jh),e(S,Ms),e(Ms,Dh),e(S,Wh),e(S,Dn),e(Dn,Bh),e(Dn,ar),e(ar,Hh),e(Dn,Rh),e(S,Qh),e(S,Wn),e(Wn,Uh),e(Wn,Bn),e(Bn,Vh),e(Wn,Gh),e(S,Kh),e(S,ee),T(Hn,ee,null),e(ee,Jh),e(ee,Be),e(Be,Yh),e(Be,ir),e(ir,Xh),e(Be,Zh),e(Be,Fs),e(Fs,ep),e(Be,tp),e(ee,np),T(Et,ee,null),_(n,Ea,g),_(n,He,g),e(He,wt),e(wt,xs),T(Rn,xs,null),e(He,op),e(He,Ps),e(Ps,rp),_(n,wa,g),_(n,I,g),T(Qn,I,null),e(I,sp),e(I,Cs),e(Cs,ap),e(I,ip),e(I,Un),e(Un,dp),e(Un,dr),e(dr,lp),e(Un,cp),e(I,hp),e(I,Vn),e(Vn,pp),e(Vn,Gn),e(Gn,mp),e(Vn,up),e(I,fp),e(I,Y),T(Kn,Y,null),e(Y,gp),e(Y,Re),e(Re,_p),e(Re,lr),e(lr,kp),e(Re,bp),e(Re,qs),e(qs,vp),e(Re,yp),e(Y,Tp),T($t,Y,null),e(Y,Ep),T(zt,Y,null),_(n,$a,g),_(n,Qe,g),e(Qe,Mt),e(Mt,Ns),T(Jn,Ns,null),e(Qe,wp),e(Qe,Os),e(Os,$p),_(n,za,g),_(n,j,g),T(Yn,j,null),e(j,zp),e(j,As),e(As,Mp),e(j,Fp),e(j,Xn),e(Xn,xp),e(Xn,cr),e(cr,Pp),e(Xn,Cp),e(j,qp),e(j,Zn),e(Zn,Np),e(Zn,eo),e(eo,Op),e(Zn,Ap),e(j,Lp),e(j,te),T(to,te,null),e(te,Sp),e(te,Ue),e(Ue,Ip),e(Ue,hr),e(hr,jp),e(Ue,Dp),e(Ue,Ls),e(Ls,Wp),e(Ue,Bp),e(te,Hp),T(Ft,te,null),_(n,Ma,g),_(n,Ve,g),e(Ve,xt),e(xt,Ss),T(no,Ss,null),e(Ve,Rp),e(Ve,Is),e(Is,Qp),_(n,Fa,g),_(n,D,g),T(oo,D,null),e(D,Up),e(D,Ge),e(Ge,Vp),e(Ge,js),e(js,Gp),e(Ge,Kp),e(Ge,Ds),e(Ds,Jp),e(Ge,Yp),e(D,Xp),e(D,ro),e(ro,Zp),e(ro,pr),e(pr,em),e(ro,tm),e(D,nm),e(D,so),e(so,om),e(so,ao),e(ao,rm),e(so,sm),e(D,am),e(D,ne),T(io,ne,null),e(ne,im),e(ne,Ke),e(Ke,dm),e(Ke,mr),e(mr,lm),e(Ke,cm),e(Ke,Ws),e(Ws,hm),e(Ke,pm),e(ne,mm),T(Pt,ne,null),xa=!0},p(n,[g]){const lo={};g&2&&(lo.$$scope={dirty:g,ctx:n}),rt.$set(lo);const Bs={};g&2&&(Bs.$$scope={dirty:g,ctx:n}),it.$set(Bs);const Hs={};g&2&&(Hs.$$scope={dirty:g,ctx:n}),dt.$set(Hs);const Rs={};g&2&&(Rs.$$scope={dirty:g,ctx:n}),ct.$set(Rs);const co={};g&2&&(co.$$scope={dirty:g,ctx:n}),ht.$set(co);const Qs={};g&2&&(Qs.$$scope={dirty:g,ctx:n}),mt.$set(Qs);const Us={};g&2&&(Us.$$scope={dirty:g,ctx:n}),ut.$set(Us);const Vs={};g&2&&(Vs.$$scope={dirty:g,ctx:n}),gt.$set(Vs);const Je={};g&2&&(Je.$$scope={dirty:g,ctx:n}),_t.$set(Je);const Gs={};g&2&&(Gs.$$scope={dirty:g,ctx:n}),kt.$set(Gs);const Ks={};g&2&&(Ks.$$scope={dirty:g,ctx:n}),vt.$set(Ks);const ho={};g&2&&(ho.$$scope={dirty:g,ctx:n}),yt.$set(ho);const Js={};g&2&&(Js.$$scope={dirty:g,ctx:n}),Et.$set(Js);const Ys={};g&2&&(Ys.$$scope={dirty:g,ctx:n}),$t.$set(Ys);const Xs={};g&2&&(Xs.$$scope={dirty:g,ctx:n}),zt.$set(Xs);const po={};g&2&&(po.$$scope={dirty:g,ctx:n}),Ft.$set(po);const Zs={};g&2&&(Zs.$$scope={dirty:g,ctx:n}),Pt.$set(Zs)},i(n){xa||(E(d.$$.fragment,n),E(Wt.$$.fragment,n),E(Rt.$$.fragment,n),E(Qt.$$.fragment,n),E(Ut.$$.fragment,n),E(Jt.$$.fragment,n),E(Yt.$$.fragment,n),E(rt.$$.fragment,n),E(Zt.$$.fragment,n),E(en.$$.fragment,n),E(nn.$$.fragment,n),E(on.$$.fragment,n),E(cn.$$.fragment,n),E(it.$$.fragment,n),E(dt.$$.fragment,n),E(hn.$$.fragment,n),E(pn.$$.fragment,n),E(gn.$$.fragment,n),E(ct.$$.fragment,n),E(ht.$$.fragment,n),E(_n.$$.fragment,n),E(kn.$$.fragment,n),E(En.$$.fragment,n),E(mt.$$.fragment,n),E(ut.$$.fragment,n),E(wn.$$.fragment,n),E($n.$$.fragment,n),E(Pn.$$.fragment,n),E(gt.$$.fragment,n),E(_t.$$.fragment,n),E(kt.$$.fragment,n),E(Cn.$$.fragment,n),E(qn.$$.fragment,n),E(Sn.$$.fragment,n),E(vt.$$.fragment,n),E(yt.$$.fragment,n),E(In.$$.fragment,n),E(jn.$$.fragment,n),E(Hn.$$.fragment,n),E(Et.$$.fragment,n),E(Rn.$$.fragment,n),E(Qn.$$.fragment,n),E(Kn.$$.fragment,n),E($t.$$.fragment,n),E(zt.$$.fragment,n),E(Jn.$$.fragment,n),E(Yn.$$.fragment,n),E(to.$$.fragment,n),E(Ft.$$.fragment,n),E(no.$$.fragment,n),E(oo.$$.fragment,n),E(io.$$.fragment,n),E(Pt.$$.fragment,n),xa=!0)},o(n){w(d.$$.fragment,n),w(Wt.$$.fragment,n),w(Rt.$$.fragment,n),w(Qt.$$.fragment,n),w(Ut.$$.fragment,n),w(Jt.$$.fragment,n),w(Yt.$$.fragment,n),w(rt.$$.fragment,n),w(Zt.$$.fragment,n),w(en.$$.fragment,n),w(nn.$$.fragment,n),w(on.$$.fragment,n),w(cn.$$.fragment,n),w(it.$$.fragment,n),w(dt.$$.fragment,n),w(hn.$$.fragment,n),w(pn.$$.fragment,n),w(gn.$$.fragment,n),w(ct.$$.fragment,n),w(ht.$$.fragment,n),w(_n.$$.fragment,n),w(kn.$$.fragment,n),w(En.$$.fragment,n),w(mt.$$.fragment,n),w(ut.$$.fragment,n),w(wn.$$.fragment,n),w($n.$$.fragment,n),w(Pn.$$.fragment,n),w(gt.$$.fragment,n),w(_t.$$.fragment,n),w(kt.$$.fragment,n),w(Cn.$$.fragment,n),w(qn.$$.fragment,n),w(Sn.$$.fragment,n),w(vt.$$.fragment,n),w(yt.$$.fragment,n),w(In.$$.fragment,n),w(jn.$$.fragment,n),w(Hn.$$.fragment,n),w(Et.$$.fragment,n),w(Rn.$$.fragment,n),w(Qn.$$.fragment,n),w(Kn.$$.fragment,n),w($t.$$.fragment,n),w(zt.$$.fragment,n),w(Jn.$$.fragment,n),w(Yn.$$.fragment,n),w(to.$$.fragment,n),w(Ft.$$.fragment,n),w(no.$$.fragment,n),w(oo.$$.fragment,n),w(io.$$.fragment,n),w(Pt.$$.fragment,n),xa=!1},d(n){t(p),n&&t(b),n&&t(u),$(d),n&&t(ea),n&&t(pe),$(Wt),n&&t(ta),n&&t(Z),n&&t(na),n&&t(me),$(Rt),n&&t(oa),$(Qt,n),n&&t(ra),n&&t(ue),$(Ut),n&&t(sa),n&&t(nt),n&&t(aa),n&&t(U),n&&t(ia),n&&t(ze),$(Jt),n&&t(da),n&&t(Q),$(Yt),$(rt),n&&t(la),n&&t(Fe),$(Zt),n&&t(ca),n&&t(xe),$(en),n&&t(ha),n&&t(Pe),$(nn),n&&t(pa),n&&t(C),$(on),$(cn),$(it),$(dt),n&&t(ma),n&&t(qe),$(hn),n&&t(ua),n&&t(N),$(pn),$(gn),$(ct),$(ht),n&&t(fa),n&&t(Ae),$(_n),n&&t(ga),n&&t(O),$(kn),$(En),$(mt),$(ut),n&&t(_a),n&&t(Se),$(wn),n&&t(ka),n&&t(A),$($n),$(Pn),$(gt),$(_t),$(kt),n&&t(ba),n&&t(je),$(Cn),n&&t(va),n&&t(L),$(qn),$(Sn),$(vt),$(yt),n&&t(ya),n&&t(We),$(In),n&&t(Ta),n&&t(S),$(jn),$(Hn),$(Et),n&&t(Ea),n&&t(He),$(Rn),n&&t(wa),n&&t(I),$(Qn),$(Kn),$($t),$(zt),n&&t($a),n&&t(Qe),$(Jn),n&&t(za),n&&t(j),$(Yn),$(to),$(Ft),n&&t(Ma),n&&t(Ve),$(no),n&&t(Fa),n&&t(D),$(oo),$(io),$(Pt)}}}const dg={local:"ernie",sections:[{local:"overview",sections:[{local:"how-to-use",title:"How to use"},{local:"supported-models",title:"Supported Models"}],title:"Overview"},{local:"transformers.ErnieConfig",title:"ErnieConfig"},{local:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput",title:"Ernie specific outputs"},{local:"transformers.ErnieModel",title:"ErnieModel"},{local:"transformers.ErnieForPreTraining",title:"ErnieForPreTraining"},{local:"transformers.ErnieForCausalLM",title:"ErnieForCausalLM"},{local:"transformers.ErnieForMaskedLM",title:"ErnieForMaskedLM"},{local:"transformers.ErnieForNextSentencePrediction",title:"ErnieForNextSentencePrediction"},{local:"transformers.ErnieForSequenceClassification",title:"ErnieForSequenceClassification"},{local:"transformers.ErnieForMultipleChoice",title:"ErnieForMultipleChoice"},{local:"transformers.ErnieForTokenClassification",title:"ErnieForTokenClassification"},{local:"transformers.ErnieForQuestionAnswering",title:"ErnieForQuestionAnswering"}],title:"ERNIE"};function lg(z){return Hf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class gg extends jf{constructor(p){super();Df(this,p,lg,ig,Wf,{})}}export{gg as default,dg as metadata};
