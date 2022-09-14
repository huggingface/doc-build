import{S as ju,i as Du,s as Wu,e as n,k as c,w as k,t as a,M as Hu,c as r,d as t,m as h,a as s,x as y,h as i,b as l,G as e,g as _,y as T,q as E,o as w,B as $,v as Bu,L as Dt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ye}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Xe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as W}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as jt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ru(z){let p,b,f,u,v;return u=new Xe({props:{code:`from transformers import ErnieModel, ErnieConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),b=a("Examples:"),f=c(),k(u.$$.fragment)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Examples:"),m.forEach(t),f=h(d),y(u.$$.fragment,d)},m(d,m){_(d,p,m),e(p,b),_(d,f,m),T(u,d,m),v=!0},p:Dt,i(d){v||(E(u.$$.fragment,d),v=!0)},o(d){w(u.$$.fragment,d),v=!1},d(d){d&&t(p),d&&t(f),$(u,d)}}}function Vu(z){let p,b,f,u,v;return{c(){p=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var M=s(f);u=i(M,"Module"),M.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,f),e(f,u),e(p,v)},d(d){d&&t(p)}}}function Qu(z){let p,b,f,u,v;return u=new Xe({props:{code:`from transformers import BertTokenizer, ErnieModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),b=a("Example:"),f=c(),k(u.$$.fragment)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Example:"),m.forEach(t),f=h(d),y(u.$$.fragment,d)},m(d,m){_(d,p,m),e(p,b),_(d,f,m),T(u,d,m),v=!0},p:Dt,i(d){v||(E(u.$$.fragment,d),v=!0)},o(d){w(u.$$.fragment,d),v=!1},d(d){d&&t(p),d&&t(f),$(u,d)}}}function Uu(z){let p,b,f,u,v;return{c(){p=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var M=s(f);u=i(M,"Module"),M.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,f),e(f,u),e(p,v)},d(d){d&&t(p)}}}function Gu(z){let p,b,f,u,v;return u=new Xe({props:{code:`from transformers import BertTokenizer, ErnieForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){p=n("p"),b=a("Example:"),f=c(),k(u.$$.fragment)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Example:"),m.forEach(t),f=h(d),y(u.$$.fragment,d)},m(d,m){_(d,p,m),e(p,b),_(d,f,m),T(u,d,m),v=!0},p:Dt,i(d){v||(E(u.$$.fragment,d),v=!0)},o(d){w(u.$$.fragment,d),v=!1},d(d){d&&t(p),d&&t(f),$(u,d)}}}function Ku(z){let p,b,f,u,v;return{c(){p=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var M=s(f);u=i(M,"Module"),M.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,f),e(f,u),e(p,v)},d(d){d&&t(p)}}}function Ju(z){let p,b,f,u,v;return u=new Xe({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),b=a("Example:"),f=c(),k(u.$$.fragment)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Example:"),m.forEach(t),f=h(d),y(u.$$.fragment,d)},m(d,m){_(d,p,m),e(p,b),_(d,f,m),T(u,d,m),v=!0},p:Dt,i(d){v||(E(u.$$.fragment,d),v=!0)},o(d){w(u.$$.fragment,d),v=!1},d(d){d&&t(p),d&&t(f),$(u,d)}}}function Yu(z){let p,b,f,u,v;return{c(){p=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var M=s(f);u=i(M,"Module"),M.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,f),e(f,u),e(p,v)},d(d){d&&t(p)}}}function Xu(z){let p,b,f,u,v;return u=new Xe({props:{code:`from transformers import BertTokenizer, ErnieForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){p=n("p"),b=a("Example:"),f=c(),k(u.$$.fragment)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Example:"),m.forEach(t),f=h(d),y(u.$$.fragment,d)},m(d,m){_(d,p,m),e(p,b),_(d,f,m),T(u,d,m),v=!0},p:Dt,i(d){v||(E(u.$$.fragment,d),v=!0)},o(d){w(u.$$.fragment,d),v=!1},d(d){d&&t(p),d&&t(f),$(u,d)}}}function Zu(z){let p,b;return p=new Xe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){k(p.$$.fragment)},l(f){y(p.$$.fragment,f)},m(f,u){T(p,f,u),b=!0},p:Dt,i(f){b||(E(p.$$.fragment,f),b=!0)},o(f){w(p.$$.fragment,f),b=!1},d(f){$(p,f)}}}function eg(z){let p,b,f,u,v;return{c(){p=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var M=s(f);u=i(M,"Module"),M.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,f),e(f,u),e(p,v)},d(d){d&&t(p)}}}function tg(z){let p,b,f,u,v;return u=new Xe({props:{code:`from transformers import BertTokenizer, ErnieForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){p=n("p"),b=a("Example:"),f=c(),k(u.$$.fragment)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Example:"),m.forEach(t),f=h(d),y(u.$$.fragment,d)},m(d,m){_(d,p,m),e(p,b),_(d,f,m),T(u,d,m),v=!0},p:Dt,i(d){v||(E(u.$$.fragment,d),v=!0)},o(d){w(u.$$.fragment,d),v=!1},d(d){d&&t(p),d&&t(f),$(u,d)}}}function og(z){let p,b,f,u,v;return{c(){p=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var M=s(f);u=i(M,"Module"),M.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,f),e(f,u),e(p,v)},d(d){d&&t(p)}}}function ng(z){let p,b,f,u,v;return{c(){p=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var M=s(f);u=i(M,"Module"),M.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,f),e(f,u),e(p,v)},d(d){d&&t(p)}}}function rg(z){let p,b,f,u,v;return u=new Xe({props:{code:`from transformers import BertTokenizer, ErnieForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),b=a("Example:"),f=c(),k(u.$$.fragment)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Example:"),m.forEach(t),f=h(d),y(u.$$.fragment,d)},m(d,m){_(d,p,m),e(p,b),_(d,f,m),T(u,d,m),v=!0},p:Dt,i(d){v||(E(u.$$.fragment,d),v=!0)},o(d){w(u.$$.fragment,d),v=!1},d(d){d&&t(p),d&&t(f),$(u,d)}}}function sg(z){let p,b,f,u,v;return{c(){p=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var M=s(f);u=i(M,"Module"),M.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,f),e(f,u),e(p,v)},d(d){d&&t(p)}}}function ag(z){let p,b,f,u,v;return{c(){p=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var m=s(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var M=s(f);u=i(M,"Module"),M.forEach(t),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,p,m),e(p,b),e(p,f),e(f,u),e(p,v)},d(d){d&&t(p)}}}function ig(z){let p,b,f,u,v,d,m,M,pi,ea,pe,Ze,Dr,Wt,mi,Wr,fi,ta,Z,ui,Ht,gi,_i,Bt,vi,bi,oa,me,et,Hr,Rt,ki,Br,yi,na,Vt,ra,fe,tt,Rr,Qt,Ti,Vr,Ei,sa,ot,Qr,ue,mn,wi,$i,fn,zi,Mi,un,Fi,xi,F,ge,gn,Pi,Ci,_n,qi,Ni,vn,Oi,Ai,_e,bn,Li,Si,kn,Ii,ji,yn,Di,Wi,ve,Tn,Hi,Bi,En,Ri,Vi,wn,Qi,Ui,be,$n,Gi,Ki,zn,Ji,Yi,Mn,Xi,Zi,ke,Fn,ed,td,xn,od,nd,Pn,rd,sd,ye,Cn,ad,id,qn,dd,ld,Nn,cd,hd,Te,On,pd,md,An,fd,ud,Ln,gd,_d,Ee,Sn,vd,bd,In,kd,yd,jn,Td,Ed,we,Dn,wd,$d,Wn,zd,Md,Hn,Fd,xd,$e,Bn,Pd,Cd,Rn,qd,Nd,Vn,Od,aa,Q,Ad,Ut,Ld,Sd,Gt,Id,jd,Kt,Dd,Wd,ia,ze,nt,Ur,Jt,Hd,Gr,Bd,da,V,Yt,Rd,X,Vd,Qn,Qd,Ud,Kr,Gd,Kd,Xt,Jd,Yd,Xd,Me,Zd,Un,el,tl,Gn,ol,nl,rl,rt,la,Fe,st,Jr,Zt,sl,Yr,al,ca,xe,eo,il,to,dl,Kn,ll,cl,ha,Pe,at,Xr,oo,hl,Zr,pl,pa,C,no,ml,es,fl,ul,ro,gl,Jn,_l,vl,bl,so,kl,ao,yl,Tl,El,io,wl,lo,$l,zl,Ml,q,Fl,ts,xl,Pl,os,Cl,ql,ns,Nl,Ol,rs,Al,Ll,ss,Sl,Il,as,jl,Dl,Wl,U,co,Hl,Ce,Bl,Yn,Rl,Vl,is,Ql,Ul,Gl,it,Kl,dt,ma,qe,lt,ds,ho,Jl,ls,Yl,fa,N,po,Xl,Ne,Zl,cs,ec,tc,hs,oc,nc,rc,mo,sc,Xn,ac,ic,dc,fo,lc,uo,cc,hc,pc,G,go,mc,Oe,fc,Zn,uc,gc,ps,_c,vc,bc,ct,kc,ht,ua,Ae,pt,ms,_o,yc,fs,Tc,ga,O,vo,Ec,bo,wc,us,$c,zc,Mc,ko,Fc,er,xc,Pc,Cc,yo,qc,To,Nc,Oc,Ac,K,Eo,Lc,Le,Sc,tr,Ic,jc,gs,Dc,Wc,Hc,mt,Bc,ft,_a,Se,ut,_s,wo,Rc,vs,Vc,va,A,$o,Qc,zo,Uc,bs,Gc,Kc,Jc,Mo,Yc,or,Xc,Zc,eh,Fo,th,xo,oh,nh,rh,H,Po,sh,Ie,ah,nr,ih,dh,ks,lh,ch,hh,gt,ph,_t,mh,vt,ba,je,bt,ys,Co,fh,Ts,uh,ka,L,qo,gh,No,_h,Es,vh,bh,kh,Oo,yh,rr,Th,Eh,wh,Ao,$h,Lo,zh,Mh,Fh,J,So,xh,De,Ph,sr,Ch,qh,ws,Nh,Oh,Ah,kt,Lh,yt,ya,We,Tt,$s,Io,Sh,zs,Ih,Ta,S,jo,jh,Ms,Dh,Wh,Do,Hh,ar,Bh,Rh,Vh,Wo,Qh,Ho,Uh,Gh,Kh,ee,Bo,Jh,He,Yh,ir,Xh,Zh,Fs,ep,tp,op,Et,Ea,Be,wt,xs,Ro,np,Ps,rp,wa,I,Vo,sp,Cs,ap,ip,Qo,dp,dr,lp,cp,hp,Uo,pp,Go,mp,fp,up,Y,Ko,gp,Re,_p,lr,vp,bp,qs,kp,yp,Tp,$t,Ep,zt,$a,Ve,Mt,Ns,Jo,wp,Os,$p,za,j,Yo,zp,As,Mp,Fp,Xo,xp,cr,Pp,Cp,qp,Zo,Np,en,Op,Ap,Lp,te,tn,Sp,Qe,Ip,hr,jp,Dp,Ls,Wp,Hp,Bp,Ft,Ma,Ue,xt,Ss,on,Rp,Is,Vp,Fa,D,nn,Qp,Ge,Up,js,Gp,Kp,Ds,Jp,Yp,Xp,rn,Zp,pr,em,tm,om,sn,nm,an,rm,sm,am,oe,dn,im,Ke,dm,mr,lm,cm,Ws,hm,pm,mm,Pt,xa;return d=new W({}),Wt=new W({}),Rt=new W({}),Vt=new Xe({props:{code:`from transformers import AutoTokenizer, AutoModel
tokenizer = AutoTokenizer.from_pretrained("nghuyong/ernie-1.0-base-zh")
model = AutoModel.from_pretrained("nghuyong/ernie-1.0-base-zh")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModel
tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;nghuyong/ernie-1.0-base-zh&quot;</span>)`}}),Qt=new W({}),Jt=new W({}),Yt=new P({props:{name:"class transformers.ErnieConfig",anchor:"transformers.ErnieConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"task_type_vocab_size",val:" = 3"},{name:"use_task_id",val:" = False"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ErnieConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ERNIE model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieModel">ErnieModel</a> or <code>TFErnieModel</code>.`,name:"vocab_size"},{anchor:"transformers.ErnieConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieModel">ErnieModel</a> or <code>TFErnieModel</code>.`,name:"type_vocab_size"},{anchor:"transformers.ErnieConfig.task_type_vocab_size",description:`<strong>task_type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/configuration_ernie.py#L41"}}),rt=new jt({props:{anchor:"transformers.ErnieConfig.example",$$slots:{default:[Ru]},$$scope:{ctx:z}}}),Zt=new W({}),eo=new P({props:{name:"class transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput",anchor:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L690"}}),oo=new W({}),no=new P({props:{name:"class transformers.ErnieModel",anchor:"transformers.ErnieModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.ErnieModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L798"}}),co=new P({props:{name:"forward",anchor:"transformers.ErnieModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ErnieModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L841",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),it=new Ye({props:{$$slots:{default:[Vu]},$$scope:{ctx:z}}}),dt=new jt({props:{anchor:"transformers.ErnieModel.forward.example",$$slots:{default:[Qu]},$$scope:{ctx:z}}}),ho=new W({}),po=new P({props:{name:"class transformers.ErnieForPreTraining",anchor:"transformers.ErnieForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L987"}}),go=new P({props:{name:"forward",anchor:"transformers.ErnieForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ErnieForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L1006",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput"
>transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieConfig"
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
  href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput"
>transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ct=new Ye({props:{$$slots:{default:[Uu]},$$scope:{ctx:z}}}),ht=new jt({props:{anchor:"transformers.ErnieForPreTraining.forward.example",$$slots:{default:[Gu]},$$scope:{ctx:z}}}),_o=new W({}),vo=new P({props:{name:"class transformers.ErnieForCausalLM",anchor:"transformers.ErnieForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L1096"}}),Eo=new P({props:{name:"forward",anchor:"transformers.ErnieForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ErnieForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L1121",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mt=new Ye({props:{$$slots:{default:[Ku]},$$scope:{ctx:z}}}),ft=new jt({props:{anchor:"transformers.ErnieForCausalLM.forward.example",$$slots:{default:[Ju]},$$scope:{ctx:z}}}),wo=new W({}),$o=new P({props:{name:"class transformers.ErnieForMaskedLM",anchor:"transformers.ErnieForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L1237"}}),Po=new P({props:{name:"forward",anchor:"transformers.ErnieForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ErnieForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L1265",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gt=new Ye({props:{$$slots:{default:[Yu]},$$scope:{ctx:z}}}),_t=new jt({props:{anchor:"transformers.ErnieForMaskedLM.forward.example",$$slots:{default:[Xu]},$$scope:{ctx:z}}}),vt=new jt({props:{anchor:"transformers.ErnieForMaskedLM.forward.example-2",$$slots:{default:[Zu]},$$scope:{ctx:z}}}),Co=new W({}),qo=new P({props:{name:"class transformers.ErnieForNextSentencePrediction",anchor:"transformers.ErnieForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L1355"}}),So=new P({props:{name:"forward",anchor:"transformers.ErnieForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ErnieForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L1366",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kt=new Ye({props:{$$slots:{default:[eg]},$$scope:{ctx:z}}}),yt=new jt({props:{anchor:"transformers.ErnieForNextSentencePrediction.forward.example",$$slots:{default:[tg]},$$scope:{ctx:z}}}),Io=new W({}),jo=new P({props:{name:"class transformers.ErnieForSequenceClassification",anchor:"transformers.ErnieForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L1463"}}),Bo=new P({props:{name:"forward",anchor:"transformers.ErnieForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ErnieForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L1480"}}),Et=new Ye({props:{$$slots:{default:[og]},$$scope:{ctx:z}}}),Ro=new W({}),Vo=new P({props:{name:"class transformers.ErnieForMultipleChoice",anchor:"transformers.ErnieForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L1562"}}),Ko=new P({props:{name:"forward",anchor:"transformers.ErnieForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ErnieForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L1577",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$t=new Ye({props:{$$slots:{default:[ng]},$$scope:{ctx:z}}}),zt=new jt({props:{anchor:"transformers.ErnieForMultipleChoice.forward.example",$$slots:{default:[rg]},$$scope:{ctx:z}}}),Jo=new W({}),Yo=new P({props:{name:"class transformers.ErnieForTokenClassification",anchor:"transformers.ErnieForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L1660"}}),tn=new P({props:{name:"forward",anchor:"transformers.ErnieForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ErnieForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L1678"}}),Ft=new Ye({props:{$$slots:{default:[sg]},$$scope:{ctx:z}}}),on=new W({}),nn=new P({props:{name:"class transformers.ErnieForQuestionAnswering",anchor:"transformers.ErnieForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieConfig">ErnieConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L1741"}}),dn=new P({props:{name:"forward",anchor:"transformers.ErnieForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"task_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ErnieForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.ErnieForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/ernie/modeling_ernie.py#L1755"}}),Pt=new Ye({props:{$$slots:{default:[ag]},$$scope:{ctx:z}}}),{c(){p=n("meta"),b=c(),f=n("h1"),u=n("a"),v=n("span"),k(d.$$.fragment),m=c(),M=n("span"),pi=a("ERNIE"),ea=c(),pe=n("h2"),Ze=n("a"),Dr=n("span"),k(Wt.$$.fragment),mi=c(),Wr=n("span"),fi=a("Overview"),ta=a(`

ERNIE is a series of powerful models proposed by baidu, especially in Chinese tasks,
including [ERNIE1.0](https://arxiv.org/abs/1904.09223), [ERNIE2.0](https://ojs.aaai.org/index.php/AAAI/article/view/6428),
[ERNIE3.0](https://arxiv.org/abs/2107.02137), [ERNIE-Gram](https://arxiv.org/abs/2010.12148), [ERNIE-health](https://arxiv.org/abs/2110.07244), etc.
`),Z=n("p"),ui=a("These models are contributed by "),Ht=n("a"),gi=a("nghuyong"),_i=a(" and the official code can be found in "),Bt=n("a"),vi=a("PaddleNLP"),bi=a(" (in PaddlePaddle)."),oa=c(),me=n("h3"),et=n("a"),Hr=n("span"),k(Rt.$$.fragment),ki=c(),Br=n("span"),yi=a("How to use"),na=a(`

Take \`ernie-1.0-base-zh\` as an example:

	`),k(Vt.$$.fragment),ra=c(),fe=n("h3"),tt=n("a"),Rr=n("span"),k(Qt.$$.fragment),Ti=c(),Vr=n("span"),Ei=a("Supported Models"),sa=c(),ot=n("table"),Qr=n("thead"),ue=n("tr"),mn=n("th"),wi=a("Model Name"),$i=c(),fn=n("th"),zi=a("Language"),Mi=c(),un=n("th"),Fi=a("Description"),xi=c(),F=n("tbody"),ge=n("tr"),gn=n("td"),Pi=a("ernie-1.0-base-zh"),Ci=c(),_n=n("td"),qi=a("Chinese"),Ni=c(),vn=n("td"),Oi=a("Layer:12, Heads:12, Hidden:768"),Ai=c(),_e=n("tr"),bn=n("td"),Li=a("ernie-2.0-base-en"),Si=c(),kn=n("td"),Ii=a("English"),ji=c(),yn=n("td"),Di=a("Layer:12, Heads:12, Hidden:768"),Wi=c(),ve=n("tr"),Tn=n("td"),Hi=a("ernie-2.0-large-en"),Bi=c(),En=n("td"),Ri=a("English"),Vi=c(),wn=n("td"),Qi=a("Layer:24, Heads:16, Hidden:1024"),Ui=c(),be=n("tr"),$n=n("td"),Gi=a("ernie-3.0-base-zh"),Ki=c(),zn=n("td"),Ji=a("Chinese"),Yi=c(),Mn=n("td"),Xi=a("Layer:12, Heads:12, Hidden:768"),Zi=c(),ke=n("tr"),Fn=n("td"),ed=a("ernie-3.0-medium-zh"),td=c(),xn=n("td"),od=a("Chinese"),nd=c(),Pn=n("td"),rd=a("Layer:6, Heads:12, Hidden:768"),sd=c(),ye=n("tr"),Cn=n("td"),ad=a("ernie-3.0-mini-zh"),id=c(),qn=n("td"),dd=a("Chinese"),ld=c(),Nn=n("td"),cd=a("Layer:6, Heads:12, Hidden:384"),hd=c(),Te=n("tr"),On=n("td"),pd=a("ernie-3.0-micro-zh"),md=c(),An=n("td"),fd=a("Chinese"),ud=c(),Ln=n("td"),gd=a("Layer:4, Heads:12, Hidden:384"),_d=c(),Ee=n("tr"),Sn=n("td"),vd=a("ernie-3.0-nano-zh"),bd=c(),In=n("td"),kd=a("Chinese"),yd=c(),jn=n("td"),Td=a("Layer:4, Heads:12, Hidden:312"),Ed=c(),we=n("tr"),Dn=n("td"),wd=a("ernie-health-zh"),$d=c(),Wn=n("td"),zd=a("Chinese"),Md=c(),Hn=n("td"),Fd=a("Layer:12, Heads:12, Hidden:768"),xd=c(),$e=n("tr"),Bn=n("td"),Pd=a("ernie-gram-zh"),Cd=c(),Rn=n("td"),qd=a("Chinese"),Nd=c(),Vn=n("td"),Od=a("Layer:12, Heads:12, Hidden:768"),aa=c(),Q=n("p"),Ad=a("You can find all the supported models from huggingface\u2019s model hub: "),Ut=n("a"),Ld=a("huggingface.co/nghuyong"),Sd=a(`, and model details from paddle\u2019s official
repo: `),Gt=n("a"),Id=a("PaddleNLP"),jd=a(`
and `),Kt=n("a"),Dd=a("ERNIE"),Wd=a("."),ia=c(),ze=n("h2"),nt=n("a"),Ur=n("span"),k(Jt.$$.fragment),Hd=c(),Gr=n("span"),Bd=a("ErnieConfig"),da=c(),V=n("div"),k(Yt.$$.fragment),Rd=c(),X=n("p"),Vd=a("This is the configuration class to store the configuration of a "),Qn=n("a"),Qd=a("ErnieModel"),Ud=a(" or a "),Kr=n("code"),Gd=a("TFErnieModel"),Kd=a(`. It is used to
instantiate a ERNIE model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the ERNIE
`),Xt=n("a"),Jd=a("nghuyong/ernie-3.0-base-zh"),Yd=a(" architecture."),Xd=c(),Me=n("p"),Zd=a("Configuration objects inherit from "),Un=n("a"),el=a("PretrainedConfig"),tl=a(` and can be used to control the model outputs. Read the
documentation from `),Gn=n("a"),ol=a("PretrainedConfig"),nl=a(" for more information."),rl=c(),k(rt.$$.fragment),la=c(),Fe=n("h2"),st=n("a"),Jr=n("span"),k(Zt.$$.fragment),sl=c(),Yr=n("span"),al=a("Ernie specific outputs"),ca=c(),xe=n("div"),k(eo.$$.fragment),il=c(),to=n("p"),dl=a("Output type of "),Kn=n("a"),ll=a("ErnieForPreTraining"),cl=a("."),ha=c(),Pe=n("h2"),at=n("a"),Xr=n("span"),k(oo.$$.fragment),hl=c(),Zr=n("span"),pl=a("ErnieModel"),pa=c(),C=n("div"),k(no.$$.fragment),ml=c(),es=n("p"),fl=a("The bare Ernie Model transformer outputting raw hidden-states without any specific head on top."),ul=c(),ro=n("p"),gl=a("This model inherits from "),Jn=n("a"),_l=a("PreTrainedModel"),vl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bl=c(),so=n("p"),kl=a("This model is also a PyTorch "),ao=n("a"),yl=a("torch.nn.Module"),Tl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),El=c(),io=n("p"),wl=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),lo=n("a"),$l=a(`Attention is
all you need`),zl=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ml=c(),q=n("p"),Fl=a("To behave as an decoder the model needs to be initialized with the "),ts=n("code"),xl=a("is_decoder"),Pl=a(` argument of the configuration set
to `),os=n("code"),Cl=a("True"),ql=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),ns=n("code"),Nl=a("is_decoder"),Ol=a(` argument and
`),rs=n("code"),Al=a("add_cross_attention"),Ll=a(" set to "),ss=n("code"),Sl=a("True"),Il=a("; an "),as=n("code"),jl=a("encoder_hidden_states"),Dl=a(" is then expected as an input to the forward pass."),Wl=c(),U=n("div"),k(co.$$.fragment),Hl=c(),Ce=n("p"),Bl=a("The "),Yn=n("a"),Rl=a("ErnieModel"),Vl=a(" forward method, overrides the "),is=n("code"),Ql=a("__call__"),Ul=a(" special method."),Gl=c(),k(it.$$.fragment),Kl=c(),k(dt.$$.fragment),ma=c(),qe=n("h2"),lt=n("a"),ds=n("span"),k(ho.$$.fragment),Jl=c(),ls=n("span"),Yl=a("ErnieForPreTraining"),fa=c(),N=n("div"),k(po.$$.fragment),Xl=c(),Ne=n("p"),Zl=a("Ernie Model with two heads on top as done during the pretraining: a "),cs=n("code"),ec=a("masked language modeling"),tc=a(" head and a "),hs=n("code"),oc=a("next sentence prediction (classification)"),nc=a(" head."),rc=c(),mo=n("p"),sc=a("This model inherits from "),Xn=n("a"),ac=a("PreTrainedModel"),ic=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dc=c(),fo=n("p"),lc=a("This model is also a PyTorch "),uo=n("a"),cc=a("torch.nn.Module"),hc=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pc=c(),G=n("div"),k(go.$$.fragment),mc=c(),Oe=n("p"),fc=a("The "),Zn=n("a"),uc=a("ErnieForPreTraining"),gc=a(" forward method, overrides the "),ps=n("code"),_c=a("__call__"),vc=a(" special method."),bc=c(),k(ct.$$.fragment),kc=c(),k(ht.$$.fragment),ua=c(),Ae=n("h2"),pt=n("a"),ms=n("span"),k(_o.$$.fragment),yc=c(),fs=n("span"),Tc=a("ErnieForCausalLM"),ga=c(),O=n("div"),k(vo.$$.fragment),Ec=c(),bo=n("p"),wc=a("Ernie Model with a "),us=n("code"),$c=a("language modeling"),zc=a(" head on top for CLM fine-tuning."),Mc=c(),ko=n("p"),Fc=a("This model inherits from "),er=n("a"),xc=a("PreTrainedModel"),Pc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cc=c(),yo=n("p"),qc=a("This model is also a PyTorch "),To=n("a"),Nc=a("torch.nn.Module"),Oc=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ac=c(),K=n("div"),k(Eo.$$.fragment),Lc=c(),Le=n("p"),Sc=a("The "),tr=n("a"),Ic=a("ErnieForCausalLM"),jc=a(" forward method, overrides the "),gs=n("code"),Dc=a("__call__"),Wc=a(" special method."),Hc=c(),k(mt.$$.fragment),Bc=c(),k(ft.$$.fragment),_a=c(),Se=n("h2"),ut=n("a"),_s=n("span"),k(wo.$$.fragment),Rc=c(),vs=n("span"),Vc=a("ErnieForMaskedLM"),va=c(),A=n("div"),k($o.$$.fragment),Qc=c(),zo=n("p"),Uc=a("Ernie Model with a "),bs=n("code"),Gc=a("language modeling"),Kc=a(" head on top."),Jc=c(),Mo=n("p"),Yc=a("This model inherits from "),or=n("a"),Xc=a("PreTrainedModel"),Zc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eh=c(),Fo=n("p"),th=a("This model is also a PyTorch "),xo=n("a"),oh=a("torch.nn.Module"),nh=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rh=c(),H=n("div"),k(Po.$$.fragment),sh=c(),Ie=n("p"),ah=a("The "),nr=n("a"),ih=a("ErnieForMaskedLM"),dh=a(" forward method, overrides the "),ks=n("code"),lh=a("__call__"),ch=a(" special method."),hh=c(),k(gt.$$.fragment),ph=c(),k(_t.$$.fragment),mh=c(),k(vt.$$.fragment),ba=c(),je=n("h2"),bt=n("a"),ys=n("span"),k(Co.$$.fragment),fh=c(),Ts=n("span"),uh=a("ErnieForNextSentencePrediction"),ka=c(),L=n("div"),k(qo.$$.fragment),gh=c(),No=n("p"),_h=a("Ernie Model with a "),Es=n("code"),vh=a("next sentence prediction (classification)"),bh=a(" head on top."),kh=c(),Oo=n("p"),yh=a("This model inherits from "),rr=n("a"),Th=a("PreTrainedModel"),Eh=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wh=c(),Ao=n("p"),$h=a("This model is also a PyTorch "),Lo=n("a"),zh=a("torch.nn.Module"),Mh=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fh=c(),J=n("div"),k(So.$$.fragment),xh=c(),De=n("p"),Ph=a("The "),sr=n("a"),Ch=a("ErnieForNextSentencePrediction"),qh=a(" forward method, overrides the "),ws=n("code"),Nh=a("__call__"),Oh=a(" special method."),Ah=c(),k(kt.$$.fragment),Lh=c(),k(yt.$$.fragment),ya=c(),We=n("h2"),Tt=n("a"),$s=n("span"),k(Io.$$.fragment),Sh=c(),zs=n("span"),Ih=a("ErnieForSequenceClassification"),Ta=c(),S=n("div"),k(jo.$$.fragment),jh=c(),Ms=n("p"),Dh=a(`Ernie Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Wh=c(),Do=n("p"),Hh=a("This model inherits from "),ar=n("a"),Bh=a("PreTrainedModel"),Rh=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vh=c(),Wo=n("p"),Qh=a("This model is also a PyTorch "),Ho=n("a"),Uh=a("torch.nn.Module"),Gh=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kh=c(),ee=n("div"),k(Bo.$$.fragment),Jh=c(),He=n("p"),Yh=a("The "),ir=n("a"),Xh=a("ErnieForSequenceClassification"),Zh=a(" forward method, overrides the "),Fs=n("code"),ep=a("__call__"),tp=a(" special method."),op=c(),k(Et.$$.fragment),Ea=c(),Be=n("h2"),wt=n("a"),xs=n("span"),k(Ro.$$.fragment),np=c(),Ps=n("span"),rp=a("ErnieForMultipleChoice"),wa=c(),I=n("div"),k(Vo.$$.fragment),sp=c(),Cs=n("p"),ap=a(`Ernie Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ip=c(),Qo=n("p"),dp=a("This model inherits from "),dr=n("a"),lp=a("PreTrainedModel"),cp=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hp=c(),Uo=n("p"),pp=a("This model is also a PyTorch "),Go=n("a"),mp=a("torch.nn.Module"),fp=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),up=c(),Y=n("div"),k(Ko.$$.fragment),gp=c(),Re=n("p"),_p=a("The "),lr=n("a"),vp=a("ErnieForMultipleChoice"),bp=a(" forward method, overrides the "),qs=n("code"),kp=a("__call__"),yp=a(" special method."),Tp=c(),k($t.$$.fragment),Ep=c(),k(zt.$$.fragment),$a=c(),Ve=n("h2"),Mt=n("a"),Ns=n("span"),k(Jo.$$.fragment),wp=c(),Os=n("span"),$p=a("ErnieForTokenClassification"),za=c(),j=n("div"),k(Yo.$$.fragment),zp=c(),As=n("p"),Mp=a(`Ernie Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Fp=c(),Xo=n("p"),xp=a("This model inherits from "),cr=n("a"),Pp=a("PreTrainedModel"),Cp=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qp=c(),Zo=n("p"),Np=a("This model is also a PyTorch "),en=n("a"),Op=a("torch.nn.Module"),Ap=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lp=c(),te=n("div"),k(tn.$$.fragment),Sp=c(),Qe=n("p"),Ip=a("The "),hr=n("a"),jp=a("ErnieForTokenClassification"),Dp=a(" forward method, overrides the "),Ls=n("code"),Wp=a("__call__"),Hp=a(" special method."),Bp=c(),k(Ft.$$.fragment),Ma=c(),Ue=n("h2"),xt=n("a"),Ss=n("span"),k(on.$$.fragment),Rp=c(),Is=n("span"),Vp=a("ErnieForQuestionAnswering"),Fa=c(),D=n("div"),k(nn.$$.fragment),Qp=c(),Ge=n("p"),Up=a(`Ernie Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),js=n("code"),Gp=a("span start logits"),Kp=a(" and "),Ds=n("code"),Jp=a("span end logits"),Yp=a(")."),Xp=c(),rn=n("p"),Zp=a("This model inherits from "),pr=n("a"),em=a("PreTrainedModel"),tm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),om=c(),sn=n("p"),nm=a("This model is also a PyTorch "),an=n("a"),rm=a("torch.nn.Module"),sm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),am=c(),oe=n("div"),k(dn.$$.fragment),im=c(),Ke=n("p"),dm=a("The "),mr=n("a"),lm=a("ErnieForQuestionAnswering"),cm=a(" forward method, overrides the "),Ws=n("code"),hm=a("__call__"),pm=a(" special method."),mm=c(),k(Pt.$$.fragment),this.h()},l(o){const g=Hu('[data-svelte="svelte-1phssyn"]',document.head);p=r(g,"META",{name:!0,content:!0}),g.forEach(t),b=h(o),f=r(o,"H1",{class:!0});var ln=s(f);u=r(ln,"A",{id:!0,class:!0,href:!0});var Hs=s(u);v=r(Hs,"SPAN",{});var Bs=s(v);y(d.$$.fragment,Bs),Bs.forEach(t),Hs.forEach(t),m=h(ln),M=r(ln,"SPAN",{});var Rs=s(M);pi=i(Rs,"ERNIE"),Rs.forEach(t),ln.forEach(t),ea=h(o),pe=r(o,"H2",{class:!0});var cn=s(pe);Ze=r(cn,"A",{id:!0,class:!0,href:!0});var Vs=s(Ze);Dr=r(Vs,"SPAN",{});var Qs=s(Dr);y(Wt.$$.fragment,Qs),Qs.forEach(t),Vs.forEach(t),mi=h(cn),Wr=r(cn,"SPAN",{});var Us=s(Wr);fi=i(Us,"Overview"),Us.forEach(t),cn.forEach(t),ta=i(o,`

ERNIE is a series of powerful models proposed by baidu, especially in Chinese tasks,
including [ERNIE1.0](https://arxiv.org/abs/1904.09223), [ERNIE2.0](https://ojs.aaai.org/index.php/AAAI/article/view/6428),
[ERNIE3.0](https://arxiv.org/abs/2107.02137), [ERNIE-Gram](https://arxiv.org/abs/2010.12148), [ERNIE-health](https://arxiv.org/abs/2110.07244), etc.
`),Z=r(o,"P",{});var Je=s(Z);ui=i(Je,"These models are contributed by "),Ht=r(Je,"A",{href:!0,rel:!0});var Gs=s(Ht);gi=i(Gs,"nghuyong"),Gs.forEach(t),_i=i(Je," and the official code can be found in "),Bt=r(Je,"A",{href:!0,rel:!0});var Ks=s(Bt);vi=i(Ks,"PaddleNLP"),Ks.forEach(t),bi=i(Je," (in PaddlePaddle)."),Je.forEach(t),oa=h(o),me=r(o,"H3",{class:!0});var hn=s(me);et=r(hn,"A",{id:!0,class:!0,href:!0});var Js=s(et);Hr=r(Js,"SPAN",{});var Ys=s(Hr);y(Rt.$$.fragment,Ys),Ys.forEach(t),Js.forEach(t),ki=h(hn),Br=r(hn,"SPAN",{});var Xs=s(Br);yi=i(Xs,"How to use"),Xs.forEach(t),hn.forEach(t),na=i(o,`

Take \`ernie-1.0-base-zh\` as an example:

	`),y(Vt.$$.fragment,o),ra=h(o),fe=r(o,"H3",{class:!0});var pn=s(fe);tt=r(pn,"A",{id:!0,class:!0,href:!0});var Zs=s(tt);Rr=r(Zs,"SPAN",{});var fm=s(Rr);y(Qt.$$.fragment,fm),fm.forEach(t),Zs.forEach(t),Ti=h(pn),Vr=r(pn,"SPAN",{});var um=s(Vr);Ei=i(um,"Supported Models"),um.forEach(t),pn.forEach(t),sa=h(o),ot=r(o,"TABLE",{});var Pa=s(ot);Qr=r(Pa,"THEAD",{});var gm=s(Qr);ue=r(gm,"TR",{});var fr=s(ue);mn=r(fr,"TH",{align:!0});var _m=s(mn);wi=i(_m,"Model Name"),_m.forEach(t),$i=h(fr),fn=r(fr,"TH",{align:!0});var vm=s(fn);zi=i(vm,"Language"),vm.forEach(t),Mi=h(fr),un=r(fr,"TH",{align:!0});var bm=s(un);Fi=i(bm,"Description"),bm.forEach(t),fr.forEach(t),gm.forEach(t),xi=h(Pa),F=r(Pa,"TBODY",{});var x=s(F);ge=r(x,"TR",{});var ur=s(ge);gn=r(ur,"TD",{align:!0});var km=s(gn);Pi=i(km,"ernie-1.0-base-zh"),km.forEach(t),Ci=h(ur),_n=r(ur,"TD",{align:!0});var ym=s(_n);qi=i(ym,"Chinese"),ym.forEach(t),Ni=h(ur),vn=r(ur,"TD",{align:!0});var Tm=s(vn);Oi=i(Tm,"Layer:12, Heads:12, Hidden:768"),Tm.forEach(t),ur.forEach(t),Ai=h(x),_e=r(x,"TR",{});var gr=s(_e);bn=r(gr,"TD",{align:!0});var Em=s(bn);Li=i(Em,"ernie-2.0-base-en"),Em.forEach(t),Si=h(gr),kn=r(gr,"TD",{align:!0});var wm=s(kn);Ii=i(wm,"English"),wm.forEach(t),ji=h(gr),yn=r(gr,"TD",{align:!0});var $m=s(yn);Di=i($m,"Layer:12, Heads:12, Hidden:768"),$m.forEach(t),gr.forEach(t),Wi=h(x),ve=r(x,"TR",{});var _r=s(ve);Tn=r(_r,"TD",{align:!0});var zm=s(Tn);Hi=i(zm,"ernie-2.0-large-en"),zm.forEach(t),Bi=h(_r),En=r(_r,"TD",{align:!0});var Mm=s(En);Ri=i(Mm,"English"),Mm.forEach(t),Vi=h(_r),wn=r(_r,"TD",{align:!0});var Fm=s(wn);Qi=i(Fm,"Layer:24, Heads:16, Hidden:1024"),Fm.forEach(t),_r.forEach(t),Ui=h(x),be=r(x,"TR",{});var vr=s(be);$n=r(vr,"TD",{align:!0});var xm=s($n);Gi=i(xm,"ernie-3.0-base-zh"),xm.forEach(t),Ki=h(vr),zn=r(vr,"TD",{align:!0});var Pm=s(zn);Ji=i(Pm,"Chinese"),Pm.forEach(t),Yi=h(vr),Mn=r(vr,"TD",{align:!0});var Cm=s(Mn);Xi=i(Cm,"Layer:12, Heads:12, Hidden:768"),Cm.forEach(t),vr.forEach(t),Zi=h(x),ke=r(x,"TR",{});var br=s(ke);Fn=r(br,"TD",{align:!0});var qm=s(Fn);ed=i(qm,"ernie-3.0-medium-zh"),qm.forEach(t),td=h(br),xn=r(br,"TD",{align:!0});var Nm=s(xn);od=i(Nm,"Chinese"),Nm.forEach(t),nd=h(br),Pn=r(br,"TD",{align:!0});var Om=s(Pn);rd=i(Om,"Layer:6, Heads:12, Hidden:768"),Om.forEach(t),br.forEach(t),sd=h(x),ye=r(x,"TR",{});var kr=s(ye);Cn=r(kr,"TD",{align:!0});var Am=s(Cn);ad=i(Am,"ernie-3.0-mini-zh"),Am.forEach(t),id=h(kr),qn=r(kr,"TD",{align:!0});var Lm=s(qn);dd=i(Lm,"Chinese"),Lm.forEach(t),ld=h(kr),Nn=r(kr,"TD",{align:!0});var Sm=s(Nn);cd=i(Sm,"Layer:6, Heads:12, Hidden:384"),Sm.forEach(t),kr.forEach(t),hd=h(x),Te=r(x,"TR",{});var yr=s(Te);On=r(yr,"TD",{align:!0});var Im=s(On);pd=i(Im,"ernie-3.0-micro-zh"),Im.forEach(t),md=h(yr),An=r(yr,"TD",{align:!0});var jm=s(An);fd=i(jm,"Chinese"),jm.forEach(t),ud=h(yr),Ln=r(yr,"TD",{align:!0});var Dm=s(Ln);gd=i(Dm,"Layer:4, Heads:12, Hidden:384"),Dm.forEach(t),yr.forEach(t),_d=h(x),Ee=r(x,"TR",{});var Tr=s(Ee);Sn=r(Tr,"TD",{align:!0});var Wm=s(Sn);vd=i(Wm,"ernie-3.0-nano-zh"),Wm.forEach(t),bd=h(Tr),In=r(Tr,"TD",{align:!0});var Hm=s(In);kd=i(Hm,"Chinese"),Hm.forEach(t),yd=h(Tr),jn=r(Tr,"TD",{align:!0});var Bm=s(jn);Td=i(Bm,"Layer:4, Heads:12, Hidden:312"),Bm.forEach(t),Tr.forEach(t),Ed=h(x),we=r(x,"TR",{});var Er=s(we);Dn=r(Er,"TD",{align:!0});var Rm=s(Dn);wd=i(Rm,"ernie-health-zh"),Rm.forEach(t),$d=h(Er),Wn=r(Er,"TD",{align:!0});var Vm=s(Wn);zd=i(Vm,"Chinese"),Vm.forEach(t),Md=h(Er),Hn=r(Er,"TD",{align:!0});var Qm=s(Hn);Fd=i(Qm,"Layer:12, Heads:12, Hidden:768"),Qm.forEach(t),Er.forEach(t),xd=h(x),$e=r(x,"TR",{});var wr=s($e);Bn=r(wr,"TD",{align:!0});var Um=s(Bn);Pd=i(Um,"ernie-gram-zh"),Um.forEach(t),Cd=h(wr),Rn=r(wr,"TD",{align:!0});var Gm=s(Rn);qd=i(Gm,"Chinese"),Gm.forEach(t),Nd=h(wr),Vn=r(wr,"TD",{align:!0});var Km=s(Vn);Od=i(Km,"Layer:12, Heads:12, Hidden:768"),Km.forEach(t),wr.forEach(t),x.forEach(t),Pa.forEach(t),aa=h(o),Q=r(o,"P",{});var Ct=s(Q);Ad=i(Ct,"You can find all the supported models from huggingface\u2019s model hub: "),Ut=r(Ct,"A",{href:!0,rel:!0});var Jm=s(Ut);Ld=i(Jm,"huggingface.co/nghuyong"),Jm.forEach(t),Sd=i(Ct,`, and model details from paddle\u2019s official
repo: `),Gt=r(Ct,"A",{href:!0,rel:!0});var Ym=s(Gt);Id=i(Ym,"PaddleNLP"),Ym.forEach(t),jd=i(Ct,`
and `),Kt=r(Ct,"A",{href:!0,rel:!0});var Xm=s(Kt);Dd=i(Xm,"ERNIE"),Xm.forEach(t),Wd=i(Ct,"."),Ct.forEach(t),ia=h(o),ze=r(o,"H2",{class:!0});var Ca=s(ze);nt=r(Ca,"A",{id:!0,class:!0,href:!0});var Zm=s(nt);Ur=r(Zm,"SPAN",{});var ef=s(Ur);y(Jt.$$.fragment,ef),ef.forEach(t),Zm.forEach(t),Hd=h(Ca),Gr=r(Ca,"SPAN",{});var tf=s(Gr);Bd=i(tf,"ErnieConfig"),tf.forEach(t),Ca.forEach(t),da=h(o),V=r(o,"DIV",{class:!0});var qt=s(V);y(Yt.$$.fragment,qt),Rd=h(qt),X=r(qt,"P",{});var Nt=s(X);Vd=i(Nt,"This is the configuration class to store the configuration of a "),Qn=r(Nt,"A",{href:!0});var of=s(Qn);Qd=i(of,"ErnieModel"),of.forEach(t),Ud=i(Nt," or a "),Kr=r(Nt,"CODE",{});var nf=s(Kr);Gd=i(nf,"TFErnieModel"),nf.forEach(t),Kd=i(Nt,`. It is used to
instantiate a ERNIE model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the ERNIE
`),Xt=r(Nt,"A",{href:!0,rel:!0});var rf=s(Xt);Jd=i(rf,"nghuyong/ernie-3.0-base-zh"),rf.forEach(t),Yd=i(Nt," architecture."),Nt.forEach(t),Xd=h(qt),Me=r(qt,"P",{});var $r=s(Me);Zd=i($r,"Configuration objects inherit from "),Un=r($r,"A",{href:!0});var sf=s(Un);el=i(sf,"PretrainedConfig"),sf.forEach(t),tl=i($r,` and can be used to control the model outputs. Read the
documentation from `),Gn=r($r,"A",{href:!0});var af=s(Gn);ol=i(af,"PretrainedConfig"),af.forEach(t),nl=i($r," for more information."),$r.forEach(t),rl=h(qt),y(rt.$$.fragment,qt),qt.forEach(t),la=h(o),Fe=r(o,"H2",{class:!0});var qa=s(Fe);st=r(qa,"A",{id:!0,class:!0,href:!0});var df=s(st);Jr=r(df,"SPAN",{});var lf=s(Jr);y(Zt.$$.fragment,lf),lf.forEach(t),df.forEach(t),sl=h(qa),Yr=r(qa,"SPAN",{});var cf=s(Yr);al=i(cf,"Ernie specific outputs"),cf.forEach(t),qa.forEach(t),ca=h(o),xe=r(o,"DIV",{class:!0});var Na=s(xe);y(eo.$$.fragment,Na),il=h(Na),to=r(Na,"P",{});var Oa=s(to);dl=i(Oa,"Output type of "),Kn=r(Oa,"A",{href:!0});var hf=s(Kn);ll=i(hf,"ErnieForPreTraining"),hf.forEach(t),cl=i(Oa,"."),Oa.forEach(t),Na.forEach(t),ha=h(o),Pe=r(o,"H2",{class:!0});var Aa=s(Pe);at=r(Aa,"A",{id:!0,class:!0,href:!0});var pf=s(at);Xr=r(pf,"SPAN",{});var mf=s(Xr);y(oo.$$.fragment,mf),mf.forEach(t),pf.forEach(t),hl=h(Aa),Zr=r(Aa,"SPAN",{});var ff=s(Zr);pl=i(ff,"ErnieModel"),ff.forEach(t),Aa.forEach(t),pa=h(o),C=r(o,"DIV",{class:!0});var B=s(C);y(no.$$.fragment,B),ml=h(B),es=r(B,"P",{});var uf=s(es);fl=i(uf,"The bare Ernie Model transformer outputting raw hidden-states without any specific head on top."),uf.forEach(t),ul=h(B),ro=r(B,"P",{});var La=s(ro);gl=i(La,"This model inherits from "),Jn=r(La,"A",{href:!0});var gf=s(Jn);_l=i(gf,"PreTrainedModel"),gf.forEach(t),vl=i(La,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),La.forEach(t),bl=h(B),so=r(B,"P",{});var Sa=s(so);kl=i(Sa,"This model is also a PyTorch "),ao=r(Sa,"A",{href:!0,rel:!0});var _f=s(ao);yl=i(_f,"torch.nn.Module"),_f.forEach(t),Tl=i(Sa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sa.forEach(t),El=h(B),io=r(B,"P",{});var Ia=s(io);wl=i(Ia,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),lo=r(Ia,"A",{href:!0,rel:!0});var vf=s(lo);$l=i(vf,`Attention is
all you need`),vf.forEach(t),zl=i(Ia,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ia.forEach(t),Ml=h(B),q=r(B,"P",{});var R=s(q);Fl=i(R,"To behave as an decoder the model needs to be initialized with the "),ts=r(R,"CODE",{});var bf=s(ts);xl=i(bf,"is_decoder"),bf.forEach(t),Pl=i(R,` argument of the configuration set
to `),os=r(R,"CODE",{});var kf=s(os);Cl=i(kf,"True"),kf.forEach(t),ql=i(R,". To be used in a Seq2Seq model, the model needs to initialized with both "),ns=r(R,"CODE",{});var yf=s(ns);Nl=i(yf,"is_decoder"),yf.forEach(t),Ol=i(R,` argument and
`),rs=r(R,"CODE",{});var Tf=s(rs);Al=i(Tf,"add_cross_attention"),Tf.forEach(t),Ll=i(R," set to "),ss=r(R,"CODE",{});var Ef=s(ss);Sl=i(Ef,"True"),Ef.forEach(t),Il=i(R,"; an "),as=r(R,"CODE",{});var wf=s(as);jl=i(wf,"encoder_hidden_states"),wf.forEach(t),Dl=i(R," is then expected as an input to the forward pass."),R.forEach(t),Wl=h(B),U=r(B,"DIV",{class:!0});var Ot=s(U);y(co.$$.fragment,Ot),Hl=h(Ot),Ce=r(Ot,"P",{});var zr=s(Ce);Bl=i(zr,"The "),Yn=r(zr,"A",{href:!0});var $f=s(Yn);Rl=i($f,"ErnieModel"),$f.forEach(t),Vl=i(zr," forward method, overrides the "),is=r(zr,"CODE",{});var zf=s(is);Ql=i(zf,"__call__"),zf.forEach(t),Ul=i(zr," special method."),zr.forEach(t),Gl=h(Ot),y(it.$$.fragment,Ot),Kl=h(Ot),y(dt.$$.fragment,Ot),Ot.forEach(t),B.forEach(t),ma=h(o),qe=r(o,"H2",{class:!0});var ja=s(qe);lt=r(ja,"A",{id:!0,class:!0,href:!0});var Mf=s(lt);ds=r(Mf,"SPAN",{});var Ff=s(ds);y(ho.$$.fragment,Ff),Ff.forEach(t),Mf.forEach(t),Jl=h(ja),ls=r(ja,"SPAN",{});var xf=s(ls);Yl=i(xf,"ErnieForPreTraining"),xf.forEach(t),ja.forEach(t),fa=h(o),N=r(o,"DIV",{class:!0});var ne=s(N);y(po.$$.fragment,ne),Xl=h(ne),Ne=r(ne,"P",{});var Mr=s(Ne);Zl=i(Mr,"Ernie Model with two heads on top as done during the pretraining: a "),cs=r(Mr,"CODE",{});var Pf=s(cs);ec=i(Pf,"masked language modeling"),Pf.forEach(t),tc=i(Mr," head and a "),hs=r(Mr,"CODE",{});var Cf=s(hs);oc=i(Cf,"next sentence prediction (classification)"),Cf.forEach(t),nc=i(Mr," head."),Mr.forEach(t),rc=h(ne),mo=r(ne,"P",{});var Da=s(mo);sc=i(Da,"This model inherits from "),Xn=r(Da,"A",{href:!0});var qf=s(Xn);ac=i(qf,"PreTrainedModel"),qf.forEach(t),ic=i(Da,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Da.forEach(t),dc=h(ne),fo=r(ne,"P",{});var Wa=s(fo);lc=i(Wa,"This model is also a PyTorch "),uo=r(Wa,"A",{href:!0,rel:!0});var Nf=s(uo);cc=i(Nf,"torch.nn.Module"),Nf.forEach(t),hc=i(Wa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wa.forEach(t),pc=h(ne),G=r(ne,"DIV",{class:!0});var At=s(G);y(go.$$.fragment,At),mc=h(At),Oe=r(At,"P",{});var Fr=s(Oe);fc=i(Fr,"The "),Zn=r(Fr,"A",{href:!0});var Of=s(Zn);uc=i(Of,"ErnieForPreTraining"),Of.forEach(t),gc=i(Fr," forward method, overrides the "),ps=r(Fr,"CODE",{});var Af=s(ps);_c=i(Af,"__call__"),Af.forEach(t),vc=i(Fr," special method."),Fr.forEach(t),bc=h(At),y(ct.$$.fragment,At),kc=h(At),y(ht.$$.fragment,At),At.forEach(t),ne.forEach(t),ua=h(o),Ae=r(o,"H2",{class:!0});var Ha=s(Ae);pt=r(Ha,"A",{id:!0,class:!0,href:!0});var Lf=s(pt);ms=r(Lf,"SPAN",{});var Sf=s(ms);y(_o.$$.fragment,Sf),Sf.forEach(t),Lf.forEach(t),yc=h(Ha),fs=r(Ha,"SPAN",{});var If=s(fs);Tc=i(If,"ErnieForCausalLM"),If.forEach(t),Ha.forEach(t),ga=h(o),O=r(o,"DIV",{class:!0});var re=s(O);y(vo.$$.fragment,re),Ec=h(re),bo=r(re,"P",{});var Ba=s(bo);wc=i(Ba,"Ernie Model with a "),us=r(Ba,"CODE",{});var jf=s(us);$c=i(jf,"language modeling"),jf.forEach(t),zc=i(Ba," head on top for CLM fine-tuning."),Ba.forEach(t),Mc=h(re),ko=r(re,"P",{});var Ra=s(ko);Fc=i(Ra,"This model inherits from "),er=r(Ra,"A",{href:!0});var Df=s(er);xc=i(Df,"PreTrainedModel"),Df.forEach(t),Pc=i(Ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ra.forEach(t),Cc=h(re),yo=r(re,"P",{});var Va=s(yo);qc=i(Va,"This model is also a PyTorch "),To=r(Va,"A",{href:!0,rel:!0});var Wf=s(To);Nc=i(Wf,"torch.nn.Module"),Wf.forEach(t),Oc=i(Va,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Va.forEach(t),Ac=h(re),K=r(re,"DIV",{class:!0});var Lt=s(K);y(Eo.$$.fragment,Lt),Lc=h(Lt),Le=r(Lt,"P",{});var xr=s(Le);Sc=i(xr,"The "),tr=r(xr,"A",{href:!0});var Hf=s(tr);Ic=i(Hf,"ErnieForCausalLM"),Hf.forEach(t),jc=i(xr," forward method, overrides the "),gs=r(xr,"CODE",{});var Bf=s(gs);Dc=i(Bf,"__call__"),Bf.forEach(t),Wc=i(xr," special method."),xr.forEach(t),Hc=h(Lt),y(mt.$$.fragment,Lt),Bc=h(Lt),y(ft.$$.fragment,Lt),Lt.forEach(t),re.forEach(t),_a=h(o),Se=r(o,"H2",{class:!0});var Qa=s(Se);ut=r(Qa,"A",{id:!0,class:!0,href:!0});var Rf=s(ut);_s=r(Rf,"SPAN",{});var Vf=s(_s);y(wo.$$.fragment,Vf),Vf.forEach(t),Rf.forEach(t),Rc=h(Qa),vs=r(Qa,"SPAN",{});var Qf=s(vs);Vc=i(Qf,"ErnieForMaskedLM"),Qf.forEach(t),Qa.forEach(t),va=h(o),A=r(o,"DIV",{class:!0});var se=s(A);y($o.$$.fragment,se),Qc=h(se),zo=r(se,"P",{});var Ua=s(zo);Uc=i(Ua,"Ernie Model with a "),bs=r(Ua,"CODE",{});var Uf=s(bs);Gc=i(Uf,"language modeling"),Uf.forEach(t),Kc=i(Ua," head on top."),Ua.forEach(t),Jc=h(se),Mo=r(se,"P",{});var Ga=s(Mo);Yc=i(Ga,"This model inherits from "),or=r(Ga,"A",{href:!0});var Gf=s(or);Xc=i(Gf,"PreTrainedModel"),Gf.forEach(t),Zc=i(Ga,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ga.forEach(t),eh=h(se),Fo=r(se,"P",{});var Ka=s(Fo);th=i(Ka,"This model is also a PyTorch "),xo=r(Ka,"A",{href:!0,rel:!0});var Kf=s(xo);oh=i(Kf,"torch.nn.Module"),Kf.forEach(t),nh=i(Ka,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ka.forEach(t),rh=h(se),H=r(se,"DIV",{class:!0});var ae=s(H);y(Po.$$.fragment,ae),sh=h(ae),Ie=r(ae,"P",{});var Pr=s(Ie);ah=i(Pr,"The "),nr=r(Pr,"A",{href:!0});var Jf=s(nr);ih=i(Jf,"ErnieForMaskedLM"),Jf.forEach(t),dh=i(Pr," forward method, overrides the "),ks=r(Pr,"CODE",{});var Yf=s(ks);lh=i(Yf,"__call__"),Yf.forEach(t),ch=i(Pr," special method."),Pr.forEach(t),hh=h(ae),y(gt.$$.fragment,ae),ph=h(ae),y(_t.$$.fragment,ae),mh=h(ae),y(vt.$$.fragment,ae),ae.forEach(t),se.forEach(t),ba=h(o),je=r(o,"H2",{class:!0});var Ja=s(je);bt=r(Ja,"A",{id:!0,class:!0,href:!0});var Xf=s(bt);ys=r(Xf,"SPAN",{});var Zf=s(ys);y(Co.$$.fragment,Zf),Zf.forEach(t),Xf.forEach(t),fh=h(Ja),Ts=r(Ja,"SPAN",{});var eu=s(Ts);uh=i(eu,"ErnieForNextSentencePrediction"),eu.forEach(t),Ja.forEach(t),ka=h(o),L=r(o,"DIV",{class:!0});var ie=s(L);y(qo.$$.fragment,ie),gh=h(ie),No=r(ie,"P",{});var Ya=s(No);_h=i(Ya,"Ernie Model with a "),Es=r(Ya,"CODE",{});var tu=s(Es);vh=i(tu,"next sentence prediction (classification)"),tu.forEach(t),bh=i(Ya," head on top."),Ya.forEach(t),kh=h(ie),Oo=r(ie,"P",{});var Xa=s(Oo);yh=i(Xa,"This model inherits from "),rr=r(Xa,"A",{href:!0});var ou=s(rr);Th=i(ou,"PreTrainedModel"),ou.forEach(t),Eh=i(Xa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xa.forEach(t),wh=h(ie),Ao=r(ie,"P",{});var Za=s(Ao);$h=i(Za,"This model is also a PyTorch "),Lo=r(Za,"A",{href:!0,rel:!0});var nu=s(Lo);zh=i(nu,"torch.nn.Module"),nu.forEach(t),Mh=i(Za,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Za.forEach(t),Fh=h(ie),J=r(ie,"DIV",{class:!0});var St=s(J);y(So.$$.fragment,St),xh=h(St),De=r(St,"P",{});var Cr=s(De);Ph=i(Cr,"The "),sr=r(Cr,"A",{href:!0});var ru=s(sr);Ch=i(ru,"ErnieForNextSentencePrediction"),ru.forEach(t),qh=i(Cr," forward method, overrides the "),ws=r(Cr,"CODE",{});var su=s(ws);Nh=i(su,"__call__"),su.forEach(t),Oh=i(Cr," special method."),Cr.forEach(t),Ah=h(St),y(kt.$$.fragment,St),Lh=h(St),y(yt.$$.fragment,St),St.forEach(t),ie.forEach(t),ya=h(o),We=r(o,"H2",{class:!0});var ei=s(We);Tt=r(ei,"A",{id:!0,class:!0,href:!0});var au=s(Tt);$s=r(au,"SPAN",{});var iu=s($s);y(Io.$$.fragment,iu),iu.forEach(t),au.forEach(t),Sh=h(ei),zs=r(ei,"SPAN",{});var du=s(zs);Ih=i(du,"ErnieForSequenceClassification"),du.forEach(t),ei.forEach(t),Ta=h(o),S=r(o,"DIV",{class:!0});var de=s(S);y(jo.$$.fragment,de),jh=h(de),Ms=r(de,"P",{});var lu=s(Ms);Dh=i(lu,`Ernie Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),lu.forEach(t),Wh=h(de),Do=r(de,"P",{});var ti=s(Do);Hh=i(ti,"This model inherits from "),ar=r(ti,"A",{href:!0});var cu=s(ar);Bh=i(cu,"PreTrainedModel"),cu.forEach(t),Rh=i(ti,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ti.forEach(t),Vh=h(de),Wo=r(de,"P",{});var oi=s(Wo);Qh=i(oi,"This model is also a PyTorch "),Ho=r(oi,"A",{href:!0,rel:!0});var hu=s(Ho);Uh=i(hu,"torch.nn.Module"),hu.forEach(t),Gh=i(oi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oi.forEach(t),Kh=h(de),ee=r(de,"DIV",{class:!0});var qr=s(ee);y(Bo.$$.fragment,qr),Jh=h(qr),He=r(qr,"P",{});var Nr=s(He);Yh=i(Nr,"The "),ir=r(Nr,"A",{href:!0});var pu=s(ir);Xh=i(pu,"ErnieForSequenceClassification"),pu.forEach(t),Zh=i(Nr," forward method, overrides the "),Fs=r(Nr,"CODE",{});var mu=s(Fs);ep=i(mu,"__call__"),mu.forEach(t),tp=i(Nr," special method."),Nr.forEach(t),op=h(qr),y(Et.$$.fragment,qr),qr.forEach(t),de.forEach(t),Ea=h(o),Be=r(o,"H2",{class:!0});var ni=s(Be);wt=r(ni,"A",{id:!0,class:!0,href:!0});var fu=s(wt);xs=r(fu,"SPAN",{});var uu=s(xs);y(Ro.$$.fragment,uu),uu.forEach(t),fu.forEach(t),np=h(ni),Ps=r(ni,"SPAN",{});var gu=s(Ps);rp=i(gu,"ErnieForMultipleChoice"),gu.forEach(t),ni.forEach(t),wa=h(o),I=r(o,"DIV",{class:!0});var le=s(I);y(Vo.$$.fragment,le),sp=h(le),Cs=r(le,"P",{});var _u=s(Cs);ap=i(_u,`Ernie Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),_u.forEach(t),ip=h(le),Qo=r(le,"P",{});var ri=s(Qo);dp=i(ri,"This model inherits from "),dr=r(ri,"A",{href:!0});var vu=s(dr);lp=i(vu,"PreTrainedModel"),vu.forEach(t),cp=i(ri,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ri.forEach(t),hp=h(le),Uo=r(le,"P",{});var si=s(Uo);pp=i(si,"This model is also a PyTorch "),Go=r(si,"A",{href:!0,rel:!0});var bu=s(Go);mp=i(bu,"torch.nn.Module"),bu.forEach(t),fp=i(si,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),si.forEach(t),up=h(le),Y=r(le,"DIV",{class:!0});var It=s(Y);y(Ko.$$.fragment,It),gp=h(It),Re=r(It,"P",{});var Or=s(Re);_p=i(Or,"The "),lr=r(Or,"A",{href:!0});var ku=s(lr);vp=i(ku,"ErnieForMultipleChoice"),ku.forEach(t),bp=i(Or," forward method, overrides the "),qs=r(Or,"CODE",{});var yu=s(qs);kp=i(yu,"__call__"),yu.forEach(t),yp=i(Or," special method."),Or.forEach(t),Tp=h(It),y($t.$$.fragment,It),Ep=h(It),y(zt.$$.fragment,It),It.forEach(t),le.forEach(t),$a=h(o),Ve=r(o,"H2",{class:!0});var ai=s(Ve);Mt=r(ai,"A",{id:!0,class:!0,href:!0});var Tu=s(Mt);Ns=r(Tu,"SPAN",{});var Eu=s(Ns);y(Jo.$$.fragment,Eu),Eu.forEach(t),Tu.forEach(t),wp=h(ai),Os=r(ai,"SPAN",{});var wu=s(Os);$p=i(wu,"ErnieForTokenClassification"),wu.forEach(t),ai.forEach(t),za=h(o),j=r(o,"DIV",{class:!0});var ce=s(j);y(Yo.$$.fragment,ce),zp=h(ce),As=r(ce,"P",{});var $u=s(As);Mp=i($u,`Ernie Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$u.forEach(t),Fp=h(ce),Xo=r(ce,"P",{});var ii=s(Xo);xp=i(ii,"This model inherits from "),cr=r(ii,"A",{href:!0});var zu=s(cr);Pp=i(zu,"PreTrainedModel"),zu.forEach(t),Cp=i(ii,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ii.forEach(t),qp=h(ce),Zo=r(ce,"P",{});var di=s(Zo);Np=i(di,"This model is also a PyTorch "),en=r(di,"A",{href:!0,rel:!0});var Mu=s(en);Op=i(Mu,"torch.nn.Module"),Mu.forEach(t),Ap=i(di,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),di.forEach(t),Lp=h(ce),te=r(ce,"DIV",{class:!0});var Ar=s(te);y(tn.$$.fragment,Ar),Sp=h(Ar),Qe=r(Ar,"P",{});var Lr=s(Qe);Ip=i(Lr,"The "),hr=r(Lr,"A",{href:!0});var Fu=s(hr);jp=i(Fu,"ErnieForTokenClassification"),Fu.forEach(t),Dp=i(Lr," forward method, overrides the "),Ls=r(Lr,"CODE",{});var xu=s(Ls);Wp=i(xu,"__call__"),xu.forEach(t),Hp=i(Lr," special method."),Lr.forEach(t),Bp=h(Ar),y(Ft.$$.fragment,Ar),Ar.forEach(t),ce.forEach(t),Ma=h(o),Ue=r(o,"H2",{class:!0});var li=s(Ue);xt=r(li,"A",{id:!0,class:!0,href:!0});var Pu=s(xt);Ss=r(Pu,"SPAN",{});var Cu=s(Ss);y(on.$$.fragment,Cu),Cu.forEach(t),Pu.forEach(t),Rp=h(li),Is=r(li,"SPAN",{});var qu=s(Is);Vp=i(qu,"ErnieForQuestionAnswering"),qu.forEach(t),li.forEach(t),Fa=h(o),D=r(o,"DIV",{class:!0});var he=s(D);y(nn.$$.fragment,he),Qp=h(he),Ge=r(he,"P",{});var Sr=s(Ge);Up=i(Sr,`Ernie Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),js=r(Sr,"CODE",{});var Nu=s(js);Gp=i(Nu,"span start logits"),Nu.forEach(t),Kp=i(Sr," and "),Ds=r(Sr,"CODE",{});var Ou=s(Ds);Jp=i(Ou,"span end logits"),Ou.forEach(t),Yp=i(Sr,")."),Sr.forEach(t),Xp=h(he),rn=r(he,"P",{});var ci=s(rn);Zp=i(ci,"This model inherits from "),pr=r(ci,"A",{href:!0});var Au=s(pr);em=i(Au,"PreTrainedModel"),Au.forEach(t),tm=i(ci,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ci.forEach(t),om=h(he),sn=r(he,"P",{});var hi=s(sn);nm=i(hi,"This model is also a PyTorch "),an=r(hi,"A",{href:!0,rel:!0});var Lu=s(an);rm=i(Lu,"torch.nn.Module"),Lu.forEach(t),sm=i(hi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hi.forEach(t),am=h(he),oe=r(he,"DIV",{class:!0});var Ir=s(oe);y(dn.$$.fragment,Ir),im=h(Ir),Ke=r(Ir,"P",{});var jr=s(Ke);dm=i(jr,"The "),mr=r(jr,"A",{href:!0});var Su=s(mr);lm=i(Su,"ErnieForQuestionAnswering"),Su.forEach(t),cm=i(jr," forward method, overrides the "),Ws=r(jr,"CODE",{});var Iu=s(Ws);hm=i(Iu,"__call__"),Iu.forEach(t),pm=i(jr," special method."),jr.forEach(t),mm=h(Ir),y(Pt.$$.fragment,Ir),Ir.forEach(t),he.forEach(t),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(dg)),l(u,"id","ernie"),l(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(u,"href","#ernie"),l(f,"class","relative group"),l(Ze,"id","overview"),l(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ze,"href","#overview"),l(pe,"class","relative group"),l(Ht,"href","https://huggingface.co/nghuyong"),l(Ht,"rel","nofollow"),l(Bt,"href","https://github.com/PaddlePaddle/PaddleNLP"),l(Bt,"rel","nofollow"),l(et,"id","how-to-use"),l(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(et,"href","#how-to-use"),l(me,"class","relative group"),l(tt,"id","supported-models"),l(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(tt,"href","#supported-models"),l(fe,"class","relative group"),l(mn,"align","center"),l(fn,"align","center"),l(un,"align","center"),l(gn,"align","center"),l(_n,"align","center"),l(vn,"align","center"),l(bn,"align","center"),l(kn,"align","center"),l(yn,"align","center"),l(Tn,"align","center"),l(En,"align","center"),l(wn,"align","center"),l($n,"align","center"),l(zn,"align","center"),l(Mn,"align","center"),l(Fn,"align","center"),l(xn,"align","center"),l(Pn,"align","center"),l(Cn,"align","center"),l(qn,"align","center"),l(Nn,"align","center"),l(On,"align","center"),l(An,"align","center"),l(Ln,"align","center"),l(Sn,"align","center"),l(In,"align","center"),l(jn,"align","center"),l(Dn,"align","center"),l(Wn,"align","center"),l(Hn,"align","center"),l(Bn,"align","center"),l(Rn,"align","center"),l(Vn,"align","center"),l(Ut,"href","https://huggingface.co/nghuyong"),l(Ut,"rel","nofollow"),l(Gt,"href","https://paddlenlp.readthedocs.io/zh/latest/model_zoo/transformers/ERNIE/contents.html"),l(Gt,"rel","nofollow"),l(Kt,"href","https://github.com/PaddlePaddle/ERNIE/blob/repro"),l(Kt,"rel","nofollow"),l(nt,"id","transformers.ErnieConfig"),l(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(nt,"href","#transformers.ErnieConfig"),l(ze,"class","relative group"),l(Qn,"href","/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieModel"),l(Xt,"href","https://huggingface.co/nghuyong/ernie-3.0-base-zh"),l(Xt,"rel","nofollow"),l(Un,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(Gn,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(st,"id","transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput"),l(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(st,"href","#transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput"),l(Fe,"class","relative group"),l(Kn,"href","/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieForPreTraining"),l(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(at,"id","transformers.ErnieModel"),l(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(at,"href","#transformers.ErnieModel"),l(Pe,"class","relative group"),l(Jn,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),l(ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ao,"rel","nofollow"),l(lo,"href","https://arxiv.org/abs/1706.03762"),l(lo,"rel","nofollow"),l(Yn,"href","/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieModel"),l(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(lt,"id","transformers.ErnieForPreTraining"),l(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lt,"href","#transformers.ErnieForPreTraining"),l(qe,"class","relative group"),l(Xn,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),l(uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(uo,"rel","nofollow"),l(Zn,"href","/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieForPreTraining"),l(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(pt,"id","transformers.ErnieForCausalLM"),l(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(pt,"href","#transformers.ErnieForCausalLM"),l(Ae,"class","relative group"),l(er,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),l(To,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(To,"rel","nofollow"),l(tr,"href","/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieForCausalLM"),l(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ut,"id","transformers.ErnieForMaskedLM"),l(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ut,"href","#transformers.ErnieForMaskedLM"),l(Se,"class","relative group"),l(or,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),l(xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(xo,"rel","nofollow"),l(nr,"href","/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieForMaskedLM"),l(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(bt,"id","transformers.ErnieForNextSentencePrediction"),l(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(bt,"href","#transformers.ErnieForNextSentencePrediction"),l(je,"class","relative group"),l(rr,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),l(Lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Lo,"rel","nofollow"),l(sr,"href","/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieForNextSentencePrediction"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Tt,"id","transformers.ErnieForSequenceClassification"),l(Tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Tt,"href","#transformers.ErnieForSequenceClassification"),l(We,"class","relative group"),l(ar,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),l(Ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ho,"rel","nofollow"),l(ir,"href","/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieForSequenceClassification"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(wt,"id","transformers.ErnieForMultipleChoice"),l(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(wt,"href","#transformers.ErnieForMultipleChoice"),l(Be,"class","relative group"),l(dr,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),l(Go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Go,"rel","nofollow"),l(lr,"href","/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieForMultipleChoice"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Mt,"id","transformers.ErnieForTokenClassification"),l(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Mt,"href","#transformers.ErnieForTokenClassification"),l(Ve,"class","relative group"),l(cr,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),l(en,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(en,"rel","nofollow"),l(hr,"href","/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieForTokenClassification"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(xt,"id","transformers.ErnieForQuestionAnswering"),l(xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(xt,"href","#transformers.ErnieForQuestionAnswering"),l(Ue,"class","relative group"),l(pr,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),l(an,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(an,"rel","nofollow"),l(mr,"href","/docs/transformers/v4.22.0/en/model_doc/ernie#transformers.ErnieForQuestionAnswering"),l(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,p),_(o,b,g),_(o,f,g),e(f,u),e(u,v),T(d,v,null),e(f,m),e(f,M),e(M,pi),_(o,ea,g),_(o,pe,g),e(pe,Ze),e(Ze,Dr),T(Wt,Dr,null),e(pe,mi),e(pe,Wr),e(Wr,fi),_(o,ta,g),_(o,Z,g),e(Z,ui),e(Z,Ht),e(Ht,gi),e(Z,_i),e(Z,Bt),e(Bt,vi),e(Z,bi),_(o,oa,g),_(o,me,g),e(me,et),e(et,Hr),T(Rt,Hr,null),e(me,ki),e(me,Br),e(Br,yi),_(o,na,g),T(Vt,o,g),_(o,ra,g),_(o,fe,g),e(fe,tt),e(tt,Rr),T(Qt,Rr,null),e(fe,Ti),e(fe,Vr),e(Vr,Ei),_(o,sa,g),_(o,ot,g),e(ot,Qr),e(Qr,ue),e(ue,mn),e(mn,wi),e(ue,$i),e(ue,fn),e(fn,zi),e(ue,Mi),e(ue,un),e(un,Fi),e(ot,xi),e(ot,F),e(F,ge),e(ge,gn),e(gn,Pi),e(ge,Ci),e(ge,_n),e(_n,qi),e(ge,Ni),e(ge,vn),e(vn,Oi),e(F,Ai),e(F,_e),e(_e,bn),e(bn,Li),e(_e,Si),e(_e,kn),e(kn,Ii),e(_e,ji),e(_e,yn),e(yn,Di),e(F,Wi),e(F,ve),e(ve,Tn),e(Tn,Hi),e(ve,Bi),e(ve,En),e(En,Ri),e(ve,Vi),e(ve,wn),e(wn,Qi),e(F,Ui),e(F,be),e(be,$n),e($n,Gi),e(be,Ki),e(be,zn),e(zn,Ji),e(be,Yi),e(be,Mn),e(Mn,Xi),e(F,Zi),e(F,ke),e(ke,Fn),e(Fn,ed),e(ke,td),e(ke,xn),e(xn,od),e(ke,nd),e(ke,Pn),e(Pn,rd),e(F,sd),e(F,ye),e(ye,Cn),e(Cn,ad),e(ye,id),e(ye,qn),e(qn,dd),e(ye,ld),e(ye,Nn),e(Nn,cd),e(F,hd),e(F,Te),e(Te,On),e(On,pd),e(Te,md),e(Te,An),e(An,fd),e(Te,ud),e(Te,Ln),e(Ln,gd),e(F,_d),e(F,Ee),e(Ee,Sn),e(Sn,vd),e(Ee,bd),e(Ee,In),e(In,kd),e(Ee,yd),e(Ee,jn),e(jn,Td),e(F,Ed),e(F,we),e(we,Dn),e(Dn,wd),e(we,$d),e(we,Wn),e(Wn,zd),e(we,Md),e(we,Hn),e(Hn,Fd),e(F,xd),e(F,$e),e($e,Bn),e(Bn,Pd),e($e,Cd),e($e,Rn),e(Rn,qd),e($e,Nd),e($e,Vn),e(Vn,Od),_(o,aa,g),_(o,Q,g),e(Q,Ad),e(Q,Ut),e(Ut,Ld),e(Q,Sd),e(Q,Gt),e(Gt,Id),e(Q,jd),e(Q,Kt),e(Kt,Dd),e(Q,Wd),_(o,ia,g),_(o,ze,g),e(ze,nt),e(nt,Ur),T(Jt,Ur,null),e(ze,Hd),e(ze,Gr),e(Gr,Bd),_(o,da,g),_(o,V,g),T(Yt,V,null),e(V,Rd),e(V,X),e(X,Vd),e(X,Qn),e(Qn,Qd),e(X,Ud),e(X,Kr),e(Kr,Gd),e(X,Kd),e(X,Xt),e(Xt,Jd),e(X,Yd),e(V,Xd),e(V,Me),e(Me,Zd),e(Me,Un),e(Un,el),e(Me,tl),e(Me,Gn),e(Gn,ol),e(Me,nl),e(V,rl),T(rt,V,null),_(o,la,g),_(o,Fe,g),e(Fe,st),e(st,Jr),T(Zt,Jr,null),e(Fe,sl),e(Fe,Yr),e(Yr,al),_(o,ca,g),_(o,xe,g),T(eo,xe,null),e(xe,il),e(xe,to),e(to,dl),e(to,Kn),e(Kn,ll),e(to,cl),_(o,ha,g),_(o,Pe,g),e(Pe,at),e(at,Xr),T(oo,Xr,null),e(Pe,hl),e(Pe,Zr),e(Zr,pl),_(o,pa,g),_(o,C,g),T(no,C,null),e(C,ml),e(C,es),e(es,fl),e(C,ul),e(C,ro),e(ro,gl),e(ro,Jn),e(Jn,_l),e(ro,vl),e(C,bl),e(C,so),e(so,kl),e(so,ao),e(ao,yl),e(so,Tl),e(C,El),e(C,io),e(io,wl),e(io,lo),e(lo,$l),e(io,zl),e(C,Ml),e(C,q),e(q,Fl),e(q,ts),e(ts,xl),e(q,Pl),e(q,os),e(os,Cl),e(q,ql),e(q,ns),e(ns,Nl),e(q,Ol),e(q,rs),e(rs,Al),e(q,Ll),e(q,ss),e(ss,Sl),e(q,Il),e(q,as),e(as,jl),e(q,Dl),e(C,Wl),e(C,U),T(co,U,null),e(U,Hl),e(U,Ce),e(Ce,Bl),e(Ce,Yn),e(Yn,Rl),e(Ce,Vl),e(Ce,is),e(is,Ql),e(Ce,Ul),e(U,Gl),T(it,U,null),e(U,Kl),T(dt,U,null),_(o,ma,g),_(o,qe,g),e(qe,lt),e(lt,ds),T(ho,ds,null),e(qe,Jl),e(qe,ls),e(ls,Yl),_(o,fa,g),_(o,N,g),T(po,N,null),e(N,Xl),e(N,Ne),e(Ne,Zl),e(Ne,cs),e(cs,ec),e(Ne,tc),e(Ne,hs),e(hs,oc),e(Ne,nc),e(N,rc),e(N,mo),e(mo,sc),e(mo,Xn),e(Xn,ac),e(mo,ic),e(N,dc),e(N,fo),e(fo,lc),e(fo,uo),e(uo,cc),e(fo,hc),e(N,pc),e(N,G),T(go,G,null),e(G,mc),e(G,Oe),e(Oe,fc),e(Oe,Zn),e(Zn,uc),e(Oe,gc),e(Oe,ps),e(ps,_c),e(Oe,vc),e(G,bc),T(ct,G,null),e(G,kc),T(ht,G,null),_(o,ua,g),_(o,Ae,g),e(Ae,pt),e(pt,ms),T(_o,ms,null),e(Ae,yc),e(Ae,fs),e(fs,Tc),_(o,ga,g),_(o,O,g),T(vo,O,null),e(O,Ec),e(O,bo),e(bo,wc),e(bo,us),e(us,$c),e(bo,zc),e(O,Mc),e(O,ko),e(ko,Fc),e(ko,er),e(er,xc),e(ko,Pc),e(O,Cc),e(O,yo),e(yo,qc),e(yo,To),e(To,Nc),e(yo,Oc),e(O,Ac),e(O,K),T(Eo,K,null),e(K,Lc),e(K,Le),e(Le,Sc),e(Le,tr),e(tr,Ic),e(Le,jc),e(Le,gs),e(gs,Dc),e(Le,Wc),e(K,Hc),T(mt,K,null),e(K,Bc),T(ft,K,null),_(o,_a,g),_(o,Se,g),e(Se,ut),e(ut,_s),T(wo,_s,null),e(Se,Rc),e(Se,vs),e(vs,Vc),_(o,va,g),_(o,A,g),T($o,A,null),e(A,Qc),e(A,zo),e(zo,Uc),e(zo,bs),e(bs,Gc),e(zo,Kc),e(A,Jc),e(A,Mo),e(Mo,Yc),e(Mo,or),e(or,Xc),e(Mo,Zc),e(A,eh),e(A,Fo),e(Fo,th),e(Fo,xo),e(xo,oh),e(Fo,nh),e(A,rh),e(A,H),T(Po,H,null),e(H,sh),e(H,Ie),e(Ie,ah),e(Ie,nr),e(nr,ih),e(Ie,dh),e(Ie,ks),e(ks,lh),e(Ie,ch),e(H,hh),T(gt,H,null),e(H,ph),T(_t,H,null),e(H,mh),T(vt,H,null),_(o,ba,g),_(o,je,g),e(je,bt),e(bt,ys),T(Co,ys,null),e(je,fh),e(je,Ts),e(Ts,uh),_(o,ka,g),_(o,L,g),T(qo,L,null),e(L,gh),e(L,No),e(No,_h),e(No,Es),e(Es,vh),e(No,bh),e(L,kh),e(L,Oo),e(Oo,yh),e(Oo,rr),e(rr,Th),e(Oo,Eh),e(L,wh),e(L,Ao),e(Ao,$h),e(Ao,Lo),e(Lo,zh),e(Ao,Mh),e(L,Fh),e(L,J),T(So,J,null),e(J,xh),e(J,De),e(De,Ph),e(De,sr),e(sr,Ch),e(De,qh),e(De,ws),e(ws,Nh),e(De,Oh),e(J,Ah),T(kt,J,null),e(J,Lh),T(yt,J,null),_(o,ya,g),_(o,We,g),e(We,Tt),e(Tt,$s),T(Io,$s,null),e(We,Sh),e(We,zs),e(zs,Ih),_(o,Ta,g),_(o,S,g),T(jo,S,null),e(S,jh),e(S,Ms),e(Ms,Dh),e(S,Wh),e(S,Do),e(Do,Hh),e(Do,ar),e(ar,Bh),e(Do,Rh),e(S,Vh),e(S,Wo),e(Wo,Qh),e(Wo,Ho),e(Ho,Uh),e(Wo,Gh),e(S,Kh),e(S,ee),T(Bo,ee,null),e(ee,Jh),e(ee,He),e(He,Yh),e(He,ir),e(ir,Xh),e(He,Zh),e(He,Fs),e(Fs,ep),e(He,tp),e(ee,op),T(Et,ee,null),_(o,Ea,g),_(o,Be,g),e(Be,wt),e(wt,xs),T(Ro,xs,null),e(Be,np),e(Be,Ps),e(Ps,rp),_(o,wa,g),_(o,I,g),T(Vo,I,null),e(I,sp),e(I,Cs),e(Cs,ap),e(I,ip),e(I,Qo),e(Qo,dp),e(Qo,dr),e(dr,lp),e(Qo,cp),e(I,hp),e(I,Uo),e(Uo,pp),e(Uo,Go),e(Go,mp),e(Uo,fp),e(I,up),e(I,Y),T(Ko,Y,null),e(Y,gp),e(Y,Re),e(Re,_p),e(Re,lr),e(lr,vp),e(Re,bp),e(Re,qs),e(qs,kp),e(Re,yp),e(Y,Tp),T($t,Y,null),e(Y,Ep),T(zt,Y,null),_(o,$a,g),_(o,Ve,g),e(Ve,Mt),e(Mt,Ns),T(Jo,Ns,null),e(Ve,wp),e(Ve,Os),e(Os,$p),_(o,za,g),_(o,j,g),T(Yo,j,null),e(j,zp),e(j,As),e(As,Mp),e(j,Fp),e(j,Xo),e(Xo,xp),e(Xo,cr),e(cr,Pp),e(Xo,Cp),e(j,qp),e(j,Zo),e(Zo,Np),e(Zo,en),e(en,Op),e(Zo,Ap),e(j,Lp),e(j,te),T(tn,te,null),e(te,Sp),e(te,Qe),e(Qe,Ip),e(Qe,hr),e(hr,jp),e(Qe,Dp),e(Qe,Ls),e(Ls,Wp),e(Qe,Hp),e(te,Bp),T(Ft,te,null),_(o,Ma,g),_(o,Ue,g),e(Ue,xt),e(xt,Ss),T(on,Ss,null),e(Ue,Rp),e(Ue,Is),e(Is,Vp),_(o,Fa,g),_(o,D,g),T(nn,D,null),e(D,Qp),e(D,Ge),e(Ge,Up),e(Ge,js),e(js,Gp),e(Ge,Kp),e(Ge,Ds),e(Ds,Jp),e(Ge,Yp),e(D,Xp),e(D,rn),e(rn,Zp),e(rn,pr),e(pr,em),e(rn,tm),e(D,om),e(D,sn),e(sn,nm),e(sn,an),e(an,rm),e(sn,sm),e(D,am),e(D,oe),T(dn,oe,null),e(oe,im),e(oe,Ke),e(Ke,dm),e(Ke,mr),e(mr,lm),e(Ke,cm),e(Ke,Ws),e(Ws,hm),e(Ke,pm),e(oe,mm),T(Pt,oe,null),xa=!0},p(o,[g]){const ln={};g&2&&(ln.$$scope={dirty:g,ctx:o}),rt.$set(ln);const Hs={};g&2&&(Hs.$$scope={dirty:g,ctx:o}),it.$set(Hs);const Bs={};g&2&&(Bs.$$scope={dirty:g,ctx:o}),dt.$set(Bs);const Rs={};g&2&&(Rs.$$scope={dirty:g,ctx:o}),ct.$set(Rs);const cn={};g&2&&(cn.$$scope={dirty:g,ctx:o}),ht.$set(cn);const Vs={};g&2&&(Vs.$$scope={dirty:g,ctx:o}),mt.$set(Vs);const Qs={};g&2&&(Qs.$$scope={dirty:g,ctx:o}),ft.$set(Qs);const Us={};g&2&&(Us.$$scope={dirty:g,ctx:o}),gt.$set(Us);const Je={};g&2&&(Je.$$scope={dirty:g,ctx:o}),_t.$set(Je);const Gs={};g&2&&(Gs.$$scope={dirty:g,ctx:o}),vt.$set(Gs);const Ks={};g&2&&(Ks.$$scope={dirty:g,ctx:o}),kt.$set(Ks);const hn={};g&2&&(hn.$$scope={dirty:g,ctx:o}),yt.$set(hn);const Js={};g&2&&(Js.$$scope={dirty:g,ctx:o}),Et.$set(Js);const Ys={};g&2&&(Ys.$$scope={dirty:g,ctx:o}),$t.$set(Ys);const Xs={};g&2&&(Xs.$$scope={dirty:g,ctx:o}),zt.$set(Xs);const pn={};g&2&&(pn.$$scope={dirty:g,ctx:o}),Ft.$set(pn);const Zs={};g&2&&(Zs.$$scope={dirty:g,ctx:o}),Pt.$set(Zs)},i(o){xa||(E(d.$$.fragment,o),E(Wt.$$.fragment,o),E(Rt.$$.fragment,o),E(Vt.$$.fragment,o),E(Qt.$$.fragment,o),E(Jt.$$.fragment,o),E(Yt.$$.fragment,o),E(rt.$$.fragment,o),E(Zt.$$.fragment,o),E(eo.$$.fragment,o),E(oo.$$.fragment,o),E(no.$$.fragment,o),E(co.$$.fragment,o),E(it.$$.fragment,o),E(dt.$$.fragment,o),E(ho.$$.fragment,o),E(po.$$.fragment,o),E(go.$$.fragment,o),E(ct.$$.fragment,o),E(ht.$$.fragment,o),E(_o.$$.fragment,o),E(vo.$$.fragment,o),E(Eo.$$.fragment,o),E(mt.$$.fragment,o),E(ft.$$.fragment,o),E(wo.$$.fragment,o),E($o.$$.fragment,o),E(Po.$$.fragment,o),E(gt.$$.fragment,o),E(_t.$$.fragment,o),E(vt.$$.fragment,o),E(Co.$$.fragment,o),E(qo.$$.fragment,o),E(So.$$.fragment,o),E(kt.$$.fragment,o),E(yt.$$.fragment,o),E(Io.$$.fragment,o),E(jo.$$.fragment,o),E(Bo.$$.fragment,o),E(Et.$$.fragment,o),E(Ro.$$.fragment,o),E(Vo.$$.fragment,o),E(Ko.$$.fragment,o),E($t.$$.fragment,o),E(zt.$$.fragment,o),E(Jo.$$.fragment,o),E(Yo.$$.fragment,o),E(tn.$$.fragment,o),E(Ft.$$.fragment,o),E(on.$$.fragment,o),E(nn.$$.fragment,o),E(dn.$$.fragment,o),E(Pt.$$.fragment,o),xa=!0)},o(o){w(d.$$.fragment,o),w(Wt.$$.fragment,o),w(Rt.$$.fragment,o),w(Vt.$$.fragment,o),w(Qt.$$.fragment,o),w(Jt.$$.fragment,o),w(Yt.$$.fragment,o),w(rt.$$.fragment,o),w(Zt.$$.fragment,o),w(eo.$$.fragment,o),w(oo.$$.fragment,o),w(no.$$.fragment,o),w(co.$$.fragment,o),w(it.$$.fragment,o),w(dt.$$.fragment,o),w(ho.$$.fragment,o),w(po.$$.fragment,o),w(go.$$.fragment,o),w(ct.$$.fragment,o),w(ht.$$.fragment,o),w(_o.$$.fragment,o),w(vo.$$.fragment,o),w(Eo.$$.fragment,o),w(mt.$$.fragment,o),w(ft.$$.fragment,o),w(wo.$$.fragment,o),w($o.$$.fragment,o),w(Po.$$.fragment,o),w(gt.$$.fragment,o),w(_t.$$.fragment,o),w(vt.$$.fragment,o),w(Co.$$.fragment,o),w(qo.$$.fragment,o),w(So.$$.fragment,o),w(kt.$$.fragment,o),w(yt.$$.fragment,o),w(Io.$$.fragment,o),w(jo.$$.fragment,o),w(Bo.$$.fragment,o),w(Et.$$.fragment,o),w(Ro.$$.fragment,o),w(Vo.$$.fragment,o),w(Ko.$$.fragment,o),w($t.$$.fragment,o),w(zt.$$.fragment,o),w(Jo.$$.fragment,o),w(Yo.$$.fragment,o),w(tn.$$.fragment,o),w(Ft.$$.fragment,o),w(on.$$.fragment,o),w(nn.$$.fragment,o),w(dn.$$.fragment,o),w(Pt.$$.fragment,o),xa=!1},d(o){t(p),o&&t(b),o&&t(f),$(d),o&&t(ea),o&&t(pe),$(Wt),o&&t(ta),o&&t(Z),o&&t(oa),o&&t(me),$(Rt),o&&t(na),$(Vt,o),o&&t(ra),o&&t(fe),$(Qt),o&&t(sa),o&&t(ot),o&&t(aa),o&&t(Q),o&&t(ia),o&&t(ze),$(Jt),o&&t(da),o&&t(V),$(Yt),$(rt),o&&t(la),o&&t(Fe),$(Zt),o&&t(ca),o&&t(xe),$(eo),o&&t(ha),o&&t(Pe),$(oo),o&&t(pa),o&&t(C),$(no),$(co),$(it),$(dt),o&&t(ma),o&&t(qe),$(ho),o&&t(fa),o&&t(N),$(po),$(go),$(ct),$(ht),o&&t(ua),o&&t(Ae),$(_o),o&&t(ga),o&&t(O),$(vo),$(Eo),$(mt),$(ft),o&&t(_a),o&&t(Se),$(wo),o&&t(va),o&&t(A),$($o),$(Po),$(gt),$(_t),$(vt),o&&t(ba),o&&t(je),$(Co),o&&t(ka),o&&t(L),$(qo),$(So),$(kt),$(yt),o&&t(ya),o&&t(We),$(Io),o&&t(Ta),o&&t(S),$(jo),$(Bo),$(Et),o&&t(Ea),o&&t(Be),$(Ro),o&&t(wa),o&&t(I),$(Vo),$(Ko),$($t),$(zt),o&&t($a),o&&t(Ve),$(Jo),o&&t(za),o&&t(j),$(Yo),$(tn),$(Ft),o&&t(Ma),o&&t(Ue),$(on),o&&t(Fa),o&&t(D),$(nn),$(dn),$(Pt)}}}const dg={local:"ernie",sections:[{local:"overview",sections:[{local:"how-to-use",title:"How to use"},{local:"supported-models",title:"Supported Models"}],title:"Overview"},{local:"transformers.ErnieConfig",title:"ErnieConfig"},{local:"transformers.models.ernie.modeling_ernie.ErnieForPreTrainingOutput",title:"Ernie specific outputs"},{local:"transformers.ErnieModel",title:"ErnieModel"},{local:"transformers.ErnieForPreTraining",title:"ErnieForPreTraining"},{local:"transformers.ErnieForCausalLM",title:"ErnieForCausalLM"},{local:"transformers.ErnieForMaskedLM",title:"ErnieForMaskedLM"},{local:"transformers.ErnieForNextSentencePrediction",title:"ErnieForNextSentencePrediction"},{local:"transformers.ErnieForSequenceClassification",title:"ErnieForSequenceClassification"},{local:"transformers.ErnieForMultipleChoice",title:"ErnieForMultipleChoice"},{local:"transformers.ErnieForTokenClassification",title:"ErnieForTokenClassification"},{local:"transformers.ErnieForQuestionAnswering",title:"ErnieForQuestionAnswering"}],title:"ERNIE"};function lg(z){return Bu(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class gg extends ju{constructor(p){super();Du(this,p,lg,ig,Wu,{})}}export{gg as default,dg as metadata};
