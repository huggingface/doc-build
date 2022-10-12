import{S as Qj,i as Vj,s as Jj,e as a,k as c,w as T,t as n,M as Gj,c as r,d as t,m as p,a as i,x as b,h as s,b as f,G as e,g as _,y as w,q as E,o as $,B as F,v as Xj,L as ie}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ie}from"../../chunks/Tip-hf-doc-builder.js";import{D as I}from"../../chunks/Docstring-hf-doc-builder.js";import{C as le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Se}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as re}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Yj(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraModel, ElectraConfig

# Initializing a ELECTRA electra-base-uncased style configuration
configuration = ElectraConfig()

# Initializing a model from the electra-base-uncased style configuration
model = ElectraModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraModel, ElectraConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ELECTRA electra-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ElectraConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the electra-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),g=n("Examples:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Examples:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function Zj(x){let d,g,m,u,v;return u=new le({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),g=n("pair mask has the following format:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"pair mask has the following format:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function eC(x){let d,g,m,u,v;return u=new le({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),g=n("sequence pair mask has the following format:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"sequence pair mask has the following format:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function tC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function oC(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, ElectraModel
import torch

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = ElectraModel.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraModel.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function nC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function sC(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraForPreTraining, ElectraTokenizerFast
import torch

discriminator = ElectraForPreTraining.from_pretrained("google/electra-base-discriminator")
tokenizer = ElectraTokenizerFast.from_pretrained("google/electra-base-discriminator")

sentence = "The quick brown fox jumps over the lazy dog"
fake_sentence = "The quick brown fox fake over the lazy dog"

fake_tokens = tokenizer.tokenize(fake_sentence, add_special_tokens=True)
fake_inputs = tokenizer.encode(fake_sentence, return_tensors="pt")
discriminator_outputs = discriminator(fake_inputs)
predictions = torch.round((torch.sign(discriminator_outputs[0]) + 1) / 2)

fake_tokens

predictions.squeeze().tolist()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraForPreTraining, ElectraTokenizerFast
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>discriminator = ElectraForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/electra-base-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizerFast.from_pretrained(<span class="hljs-string">&quot;google/electra-base-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sentence = <span class="hljs-string">&quot;The quick brown fox jumps over the lazy dog&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>fake_sentence = <span class="hljs-string">&quot;The quick brown fox fake over the lazy dog&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>fake_tokens = tokenizer.tokenize(fake_sentence, add_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>fake_inputs = tokenizer.encode(fake_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>discriminator_outputs = discriminator(fake_inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>predictions = torch.<span class="hljs-built_in">round</span>((torch.sign(discriminator_outputs[<span class="hljs-number">0</span>]) + <span class="hljs-number">1</span>) / <span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>fake_tokens
[<span class="hljs-string">&#x27;[CLS]&#x27;</span>, <span class="hljs-string">&#x27;the&#x27;</span>, <span class="hljs-string">&#x27;quick&#x27;</span>, <span class="hljs-string">&#x27;brown&#x27;</span>, <span class="hljs-string">&#x27;fox&#x27;</span>, <span class="hljs-string">&#x27;fake&#x27;</span>, <span class="hljs-string">&#x27;over&#x27;</span>, <span class="hljs-string">&#x27;the&#x27;</span>, <span class="hljs-string">&#x27;lazy&#x27;</span>, <span class="hljs-string">&#x27;dog&#x27;</span>, <span class="hljs-string">&#x27;[SEP]&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predictions.squeeze().tolist()
[<span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>]`}}),{c(){d=a("p"),g=n("Examples:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Examples:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function aC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function rC(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, ElectraForCausalLM, ElectraConfig
import torch

tokenizer = ElectraTokenizer.from_pretrained("google/electra-base-generator")
config = ElectraConfig.from_pretrained("google/electra-base-generator")
config.is_decoder = True
model = ElectraForCausalLM.from_pretrained("google/electra-base-generator", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForCausalLM, ElectraConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-base-generator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = ElectraConfig.from_pretrained(<span class="hljs-string">&quot;google/electra-base-generator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/electra-base-generator&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function iC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function lC(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, ElectraForMaskedLM
import torch

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-generator")
model = ElectraForMaskedLM.from_pretrained("google/electra-small-generator")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-generator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-generator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function dC(x){let d,g;return d=new le({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.22</span>`}}),{c(){T(d.$$.fragment)},l(m){b(d.$$.fragment,m)},m(m,u){w(d,m,u),g=!0},p:ie,i(m){g||(E(d.$$.fragment,m),g=!0)},o(m){$(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function cC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function pC(x){let d,g,m,u,v;return u=new le({props:{code:`import torch
from transformers import ElectraTokenizer, ElectraForSequenceClassification

tokenizer = ElectraTokenizer.from_pretrained("bhadresh-savani/electra-base-emotion")
model = ElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of single-label classification:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example of single-label classification:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function hC(x){let d,g;return d=new le({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = ElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.06</span>`}}),{c(){T(d.$$.fragment)},l(m){b(d.$$.fragment,m)},m(m,u){w(d,m,u),g=!0},p:ie,i(m){g||(E(d.$$.fragment,m),g=!0)},o(m){$(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function mC(x){let d,g,m,u,v;return u=new le({props:{code:`import torch
from transformers import ElectraTokenizer, ElectraForSequenceClassification

tokenizer = ElectraTokenizer.from_pretrained("bhadresh-savani/electra-base-emotion")
model = ElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of multi-label classification:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example of multi-label classification:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function uC(x){let d,g;return d=new le({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = ElectraForSequenceClassification.from_pretrained(
    "bhadresh-savani/electra-base-emotion", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(m){b(d.$$.fragment,m)},m(m,u){w(d,m,u),g=!0},p:ie,i(m){g||(E(d.$$.fragment,m),g=!0)},o(m){$(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function fC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function gC(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, ElectraForMultipleChoice
import torch

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = ElectraForMultipleChoice.from_pretrained("google/electra-small-discriminator")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function _C(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function kC(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, ElectraForTokenClassification
import torch

tokenizer = ElectraTokenizer.from_pretrained("bhadresh-savani/electra-base-discriminator-finetuned-conll03-english")
model = ElectraForTokenClassification.from_pretrained("bhadresh-savani/electra-base-discriminator-finetuned-conll03-english")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-discriminator-finetuned-conll03-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-discriminator-finetuned-conll03-english&quot;</span>)

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
[<span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;B-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function vC(x){let d,g;return d=new le({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.11</span>`}}),{c(){T(d.$$.fragment)},l(m){b(d.$$.fragment,m)},m(m,u){w(d,m,u),g=!0},p:ie,i(m){g||(E(d.$$.fragment,m),g=!0)},o(m){$(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function yC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function TC(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, ElectraForQuestionAnswering
import torch

tokenizer = ElectraTokenizer.from_pretrained("bhadresh-savani/electra-base-squad2")
model = ElectraForQuestionAnswering.from_pretrained("bhadresh-savani/electra-base-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function bC(x){let d,g;return d=new le({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([11])
target_end_index = torch.tensor([12])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">11</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">12</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">2.64</span>`}}),{c(){T(d.$$.fragment)},l(m){b(d.$$.fragment,m)},m(m,u){w(d,m,u),g=!0},p:ie,i(m){g||(E(d.$$.fragment,m),g=!0)},o(m){$(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function wC(x){let d,g,m,u,v,l,h,z,Te,fe,W,ae,ee,M,be,K,we,ge,U,Ee,de,Q,$e,_e,R,Fe,ke,H,me,xe,oe,C,A,ve,B,ue,Me,V,ne,ze,P,qe,J,ce,je,G,pe,Ce,D,ye,S,Pe,Z,L,Ae,O,Le,Oe;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),l=c(),h=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=c(),W=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),C=a("ul"),A=a("li"),ve=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=c(),P=a("li"),qe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=n("model([input_ids, attention_mask])"),je=n(" or "),G=a("code"),pe=n("model([input_ids, attention_mask, token_type_ids])"),Ce=c(),D=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),L=a("p"),Ae=n(`Note that when creating models and layers with
`),O=a("a"),Le=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var q=i(d);g=s(q,"TensorFlow models and layers in "),m=r(q,"CODE",{});var De=i(m);u=s(De,"transformers"),De.forEach(t),v=s(q," accept two formats as input:"),q.forEach(t),l=p(y),h=r(y,"UL",{});var te=i(h);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=p(te),W=r(te,"LI",{});var Qe=i(W);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=p(y),M=r(y,"P",{});var j=i(M);be=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(j,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(j,"CODE",{});var he=i(Q);$e=s(he,"fit()"),he.forEach(t),_e=s(j," and "),R=r(j,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(j,`, such as when creating your own layers or models with
the Keras `),H=r(j,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=p(y),C=r(y,"UL",{});var N=i(C);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=p(N),P=r(N,"LI",{});var Y=i(P);qe=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ce=s(He,"model([input_ids, attention_mask])"),He.forEach(t),je=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);pe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),Ce=p(N),D=r(N,"LI",{});var Ne=i(D);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ne,"CODE",{});var Be=i(S);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=p(y),L=r(y,"P",{});var se=i(L);Ae=s(se,`Note that when creating models and layers with
`),O=r(se,"A",{href:!0,rel:!0});var Ye=i(O);Le=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(y,q){_(y,d,q),e(d,g),e(d,m),e(m,u),e(d,v),_(y,l,q),_(y,h,q),e(h,z),e(z,Te),e(h,fe),e(h,W),e(W,ae),_(y,ee,q),_(y,M,q),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,de),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ke),e(M,H),e(H,me),e(M,xe),_(y,oe,q),_(y,C,q),e(C,A),e(A,ve),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(C,ze),e(C,P),e(P,qe),e(P,J),e(J,ce),e(P,je),e(P,G),e(G,pe),e(C,Ce),e(C,D),e(D,ye),e(D,S),e(S,Pe),_(y,Z,q),_(y,L,q),e(L,Ae),e(L,O),e(O,Le),e(L,Oe)},d(y){y&&t(d),y&&t(l),y&&t(h),y&&t(ee),y&&t(M),y&&t(oe),y&&t(C),y&&t(Z),y&&t(L)}}}function EC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function $C(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, TFElectraModel
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = TFElectraModel.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraModel.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function FC(x){let d,g,m,u,v,l,h,z,Te,fe,W,ae,ee,M,be,K,we,ge,U,Ee,de,Q,$e,_e,R,Fe,ke,H,me,xe,oe,C,A,ve,B,ue,Me,V,ne,ze,P,qe,J,ce,je,G,pe,Ce,D,ye,S,Pe,Z,L,Ae,O,Le,Oe;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),l=c(),h=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=c(),W=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),C=a("ul"),A=a("li"),ve=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=c(),P=a("li"),qe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=n("model([input_ids, attention_mask])"),je=n(" or "),G=a("code"),pe=n("model([input_ids, attention_mask, token_type_ids])"),Ce=c(),D=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),L=a("p"),Ae=n(`Note that when creating models and layers with
`),O=a("a"),Le=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var q=i(d);g=s(q,"TensorFlow models and layers in "),m=r(q,"CODE",{});var De=i(m);u=s(De,"transformers"),De.forEach(t),v=s(q," accept two formats as input:"),q.forEach(t),l=p(y),h=r(y,"UL",{});var te=i(h);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=p(te),W=r(te,"LI",{});var Qe=i(W);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=p(y),M=r(y,"P",{});var j=i(M);be=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(j,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(j,"CODE",{});var he=i(Q);$e=s(he,"fit()"),he.forEach(t),_e=s(j," and "),R=r(j,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(j,`, such as when creating your own layers or models with
the Keras `),H=r(j,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=p(y),C=r(y,"UL",{});var N=i(C);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=p(N),P=r(N,"LI",{});var Y=i(P);qe=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ce=s(He,"model([input_ids, attention_mask])"),He.forEach(t),je=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);pe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),Ce=p(N),D=r(N,"LI",{});var Ne=i(D);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ne,"CODE",{});var Be=i(S);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=p(y),L=r(y,"P",{});var se=i(L);Ae=s(se,`Note that when creating models and layers with
`),O=r(se,"A",{href:!0,rel:!0});var Ye=i(O);Le=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(y,q){_(y,d,q),e(d,g),e(d,m),e(m,u),e(d,v),_(y,l,q),_(y,h,q),e(h,z),e(z,Te),e(h,fe),e(h,W),e(W,ae),_(y,ee,q),_(y,M,q),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,de),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ke),e(M,H),e(H,me),e(M,xe),_(y,oe,q),_(y,C,q),e(C,A),e(A,ve),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(C,ze),e(C,P),e(P,qe),e(P,J),e(J,ce),e(P,je),e(P,G),e(G,pe),e(C,Ce),e(C,D),e(D,ye),e(D,S),e(S,Pe),_(y,Z,q),_(y,L,q),e(L,Ae),e(L,O),e(O,Le),e(L,Oe)},d(y){y&&t(d),y&&t(l),y&&t(h),y&&t(ee),y&&t(M),y&&t(oe),y&&t(C),y&&t(Z),y&&t(L)}}}function xC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function MC(x){let d,g,m,u,v;return u=new le({props:{code:`import tensorflow as tf
from transformers import ElectraTokenizer, TFElectraForPreTraining

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = TFElectraForPreTraining.from_pretrained("google/electra-small-discriminator")
input_ids = tf.constant(tokenizer.encode("Hello, my dog is cute"))[None, :]  # Batch size 1
outputs = model(input_ids)
scores = outputs[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>))[<span class="hljs-literal">None</span>, :]  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>scores = outputs[<span class="hljs-number">0</span>]`}}),{c(){d=a("p"),g=n("Examples:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Examples:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function zC(x){let d,g,m,u,v,l,h,z,Te,fe,W,ae,ee,M,be,K,we,ge,U,Ee,de,Q,$e,_e,R,Fe,ke,H,me,xe,oe,C,A,ve,B,ue,Me,V,ne,ze,P,qe,J,ce,je,G,pe,Ce,D,ye,S,Pe,Z,L,Ae,O,Le,Oe;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),l=c(),h=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=c(),W=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),C=a("ul"),A=a("li"),ve=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=c(),P=a("li"),qe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=n("model([input_ids, attention_mask])"),je=n(" or "),G=a("code"),pe=n("model([input_ids, attention_mask, token_type_ids])"),Ce=c(),D=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),L=a("p"),Ae=n(`Note that when creating models and layers with
`),O=a("a"),Le=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var q=i(d);g=s(q,"TensorFlow models and layers in "),m=r(q,"CODE",{});var De=i(m);u=s(De,"transformers"),De.forEach(t),v=s(q," accept two formats as input:"),q.forEach(t),l=p(y),h=r(y,"UL",{});var te=i(h);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=p(te),W=r(te,"LI",{});var Qe=i(W);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=p(y),M=r(y,"P",{});var j=i(M);be=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(j,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(j,"CODE",{});var he=i(Q);$e=s(he,"fit()"),he.forEach(t),_e=s(j," and "),R=r(j,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(j,`, such as when creating your own layers or models with
the Keras `),H=r(j,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=p(y),C=r(y,"UL",{});var N=i(C);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=p(N),P=r(N,"LI",{});var Y=i(P);qe=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ce=s(He,"model([input_ids, attention_mask])"),He.forEach(t),je=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);pe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),Ce=p(N),D=r(N,"LI",{});var Ne=i(D);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ne,"CODE",{});var Be=i(S);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=p(y),L=r(y,"P",{});var se=i(L);Ae=s(se,`Note that when creating models and layers with
`),O=r(se,"A",{href:!0,rel:!0});var Ye=i(O);Le=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(y,q){_(y,d,q),e(d,g),e(d,m),e(m,u),e(d,v),_(y,l,q),_(y,h,q),e(h,z),e(z,Te),e(h,fe),e(h,W),e(W,ae),_(y,ee,q),_(y,M,q),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,de),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ke),e(M,H),e(H,me),e(M,xe),_(y,oe,q),_(y,C,q),e(C,A),e(A,ve),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(C,ze),e(C,P),e(P,qe),e(P,J),e(J,ce),e(P,je),e(P,G),e(G,pe),e(C,Ce),e(C,D),e(D,ye),e(D,S),e(S,Pe),_(y,Z,q),_(y,L,q),e(L,Ae),e(L,O),e(O,Le),e(L,Oe)},d(y){y&&t(d),y&&t(l),y&&t(h),y&&t(ee),y&&t(M),y&&t(oe),y&&t(C),y&&t(Z),y&&t(L)}}}function qC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function jC(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, TFElectraForMaskedLM
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-generator")
model = TFElectraForMaskedLM.from_pretrained("google/electra-small-generator")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-generator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-generator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function CC(x){let d,g;return d=new le({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">1.22</span>`}}),{c(){T(d.$$.fragment)},l(m){b(d.$$.fragment,m)},m(m,u){w(d,m,u),g=!0},p:ie,i(m){g||(E(d.$$.fragment,m),g=!0)},o(m){$(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function PC(x){let d,g,m,u,v,l,h,z,Te,fe,W,ae,ee,M,be,K,we,ge,U,Ee,de,Q,$e,_e,R,Fe,ke,H,me,xe,oe,C,A,ve,B,ue,Me,V,ne,ze,P,qe,J,ce,je,G,pe,Ce,D,ye,S,Pe,Z,L,Ae,O,Le,Oe;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),l=c(),h=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=c(),W=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),C=a("ul"),A=a("li"),ve=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=c(),P=a("li"),qe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=n("model([input_ids, attention_mask])"),je=n(" or "),G=a("code"),pe=n("model([input_ids, attention_mask, token_type_ids])"),Ce=c(),D=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),L=a("p"),Ae=n(`Note that when creating models and layers with
`),O=a("a"),Le=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var q=i(d);g=s(q,"TensorFlow models and layers in "),m=r(q,"CODE",{});var De=i(m);u=s(De,"transformers"),De.forEach(t),v=s(q," accept two formats as input:"),q.forEach(t),l=p(y),h=r(y,"UL",{});var te=i(h);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=p(te),W=r(te,"LI",{});var Qe=i(W);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=p(y),M=r(y,"P",{});var j=i(M);be=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(j,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(j,"CODE",{});var he=i(Q);$e=s(he,"fit()"),he.forEach(t),_e=s(j," and "),R=r(j,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(j,`, such as when creating your own layers or models with
the Keras `),H=r(j,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=p(y),C=r(y,"UL",{});var N=i(C);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=p(N),P=r(N,"LI",{});var Y=i(P);qe=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ce=s(He,"model([input_ids, attention_mask])"),He.forEach(t),je=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);pe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),Ce=p(N),D=r(N,"LI",{});var Ne=i(D);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ne,"CODE",{});var Be=i(S);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=p(y),L=r(y,"P",{});var se=i(L);Ae=s(se,`Note that when creating models and layers with
`),O=r(se,"A",{href:!0,rel:!0});var Ye=i(O);Le=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(y,q){_(y,d,q),e(d,g),e(d,m),e(m,u),e(d,v),_(y,l,q),_(y,h,q),e(h,z),e(z,Te),e(h,fe),e(h,W),e(W,ae),_(y,ee,q),_(y,M,q),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,de),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ke),e(M,H),e(H,me),e(M,xe),_(y,oe,q),_(y,C,q),e(C,A),e(A,ve),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(C,ze),e(C,P),e(P,qe),e(P,J),e(J,ce),e(P,je),e(P,G),e(G,pe),e(C,Ce),e(C,D),e(D,ye),e(D,S),e(S,Pe),_(y,Z,q),_(y,L,q),e(L,Ae),e(L,O),e(O,Le),e(L,Oe)},d(y){y&&t(d),y&&t(l),y&&t(h),y&&t(ee),y&&t(M),y&&t(oe),y&&t(C),y&&t(Z),y&&t(L)}}}function AC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function LC(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, TFElectraForSequenceClassification
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("bhadresh-savani/electra-base-emotion")
model = TFElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function OC(x){let d,g;return d=new le({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.06</span>`}}),{c(){T(d.$$.fragment)},l(m){b(d.$$.fragment,m)},m(m,u){w(d,m,u),g=!0},p:ie,i(m){g||(E(d.$$.fragment,m),g=!0)},o(m){$(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function NC(x){let d,g,m,u,v,l,h,z,Te,fe,W,ae,ee,M,be,K,we,ge,U,Ee,de,Q,$e,_e,R,Fe,ke,H,me,xe,oe,C,A,ve,B,ue,Me,V,ne,ze,P,qe,J,ce,je,G,pe,Ce,D,ye,S,Pe,Z,L,Ae,O,Le,Oe;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),l=c(),h=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=c(),W=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),C=a("ul"),A=a("li"),ve=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=c(),P=a("li"),qe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=n("model([input_ids, attention_mask])"),je=n(" or "),G=a("code"),pe=n("model([input_ids, attention_mask, token_type_ids])"),Ce=c(),D=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),L=a("p"),Ae=n(`Note that when creating models and layers with
`),O=a("a"),Le=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var q=i(d);g=s(q,"TensorFlow models and layers in "),m=r(q,"CODE",{});var De=i(m);u=s(De,"transformers"),De.forEach(t),v=s(q," accept two formats as input:"),q.forEach(t),l=p(y),h=r(y,"UL",{});var te=i(h);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=p(te),W=r(te,"LI",{});var Qe=i(W);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=p(y),M=r(y,"P",{});var j=i(M);be=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(j,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(j,"CODE",{});var he=i(Q);$e=s(he,"fit()"),he.forEach(t),_e=s(j," and "),R=r(j,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(j,`, such as when creating your own layers or models with
the Keras `),H=r(j,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=p(y),C=r(y,"UL",{});var N=i(C);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=p(N),P=r(N,"LI",{});var Y=i(P);qe=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ce=s(He,"model([input_ids, attention_mask])"),He.forEach(t),je=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);pe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),Ce=p(N),D=r(N,"LI",{});var Ne=i(D);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ne,"CODE",{});var Be=i(S);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=p(y),L=r(y,"P",{});var se=i(L);Ae=s(se,`Note that when creating models and layers with
`),O=r(se,"A",{href:!0,rel:!0});var Ye=i(O);Le=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(y,q){_(y,d,q),e(d,g),e(d,m),e(m,u),e(d,v),_(y,l,q),_(y,h,q),e(h,z),e(z,Te),e(h,fe),e(h,W),e(W,ae),_(y,ee,q),_(y,M,q),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,de),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ke),e(M,H),e(H,me),e(M,xe),_(y,oe,q),_(y,C,q),e(C,A),e(A,ve),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(C,ze),e(C,P),e(P,qe),e(P,J),e(J,ce),e(P,je),e(P,G),e(G,pe),e(C,Ce),e(C,D),e(D,ye),e(D,S),e(S,Pe),_(y,Z,q),_(y,L,q),e(L,Ae),e(L,O),e(O,Le),e(L,Oe)},d(y){y&&t(d),y&&t(l),y&&t(h),y&&t(ee),y&&t(M),y&&t(oe),y&&t(C),y&&t(Z),y&&t(L)}}}function IC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function DC(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, TFElectraForMultipleChoice
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = TFElectraForMultipleChoice.from_pretrained("google/electra-small-discriminator")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function SC(x){let d,g,m,u,v,l,h,z,Te,fe,W,ae,ee,M,be,K,we,ge,U,Ee,de,Q,$e,_e,R,Fe,ke,H,me,xe,oe,C,A,ve,B,ue,Me,V,ne,ze,P,qe,J,ce,je,G,pe,Ce,D,ye,S,Pe,Z,L,Ae,O,Le,Oe;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),l=c(),h=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=c(),W=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),C=a("ul"),A=a("li"),ve=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=c(),P=a("li"),qe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=n("model([input_ids, attention_mask])"),je=n(" or "),G=a("code"),pe=n("model([input_ids, attention_mask, token_type_ids])"),Ce=c(),D=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),L=a("p"),Ae=n(`Note that when creating models and layers with
`),O=a("a"),Le=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var q=i(d);g=s(q,"TensorFlow models and layers in "),m=r(q,"CODE",{});var De=i(m);u=s(De,"transformers"),De.forEach(t),v=s(q," accept two formats as input:"),q.forEach(t),l=p(y),h=r(y,"UL",{});var te=i(h);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=p(te),W=r(te,"LI",{});var Qe=i(W);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=p(y),M=r(y,"P",{});var j=i(M);be=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(j,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(j,"CODE",{});var he=i(Q);$e=s(he,"fit()"),he.forEach(t),_e=s(j," and "),R=r(j,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(j,`, such as when creating your own layers or models with
the Keras `),H=r(j,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=p(y),C=r(y,"UL",{});var N=i(C);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=p(N),P=r(N,"LI",{});var Y=i(P);qe=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ce=s(He,"model([input_ids, attention_mask])"),He.forEach(t),je=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);pe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),Ce=p(N),D=r(N,"LI",{});var Ne=i(D);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ne,"CODE",{});var Be=i(S);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=p(y),L=r(y,"P",{});var se=i(L);Ae=s(se,`Note that when creating models and layers with
`),O=r(se,"A",{href:!0,rel:!0});var Ye=i(O);Le=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(y,q){_(y,d,q),e(d,g),e(d,m),e(m,u),e(d,v),_(y,l,q),_(y,h,q),e(h,z),e(z,Te),e(h,fe),e(h,W),e(W,ae),_(y,ee,q),_(y,M,q),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,de),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ke),e(M,H),e(H,me),e(M,xe),_(y,oe,q),_(y,C,q),e(C,A),e(A,ve),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(C,ze),e(C,P),e(P,qe),e(P,J),e(J,ce),e(P,je),e(P,G),e(G,pe),e(C,Ce),e(C,D),e(D,ye),e(D,S),e(S,Pe),_(y,Z,q),_(y,L,q),e(L,Ae),e(L,O),e(O,Le),e(L,Oe)},d(y){y&&t(d),y&&t(l),y&&t(h),y&&t(ee),y&&t(M),y&&t(oe),y&&t(C),y&&t(Z),y&&t(L)}}}function WC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function UC(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, TFElectraForTokenClassification
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("bhadresh-savani/electra-base-discriminator-finetuned-conll03-english")
model = TFElectraForTokenClassification.from_pretrained("bhadresh-savani/electra-base-discriminator-finetuned-conll03-english")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-discriminator-finetuned-conll03-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-discriminator-finetuned-conll03-english&quot;</span>)

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
[<span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;B-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function BC(x){let d,g;return d=new le({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.11</span>`}}),{c(){T(d.$$.fragment)},l(m){b(d.$$.fragment,m)},m(m,u){w(d,m,u),g=!0},p:ie,i(m){g||(E(d.$$.fragment,m),g=!0)},o(m){$(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function RC(x){let d,g,m,u,v,l,h,z,Te,fe,W,ae,ee,M,be,K,we,ge,U,Ee,de,Q,$e,_e,R,Fe,ke,H,me,xe,oe,C,A,ve,B,ue,Me,V,ne,ze,P,qe,J,ce,je,G,pe,Ce,D,ye,S,Pe,Z,L,Ae,O,Le,Oe;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),l=c(),h=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=c(),W=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),C=a("ul"),A=a("li"),ve=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=c(),P=a("li"),qe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=n("model([input_ids, attention_mask])"),je=n(" or "),G=a("code"),pe=n("model([input_ids, attention_mask, token_type_ids])"),Ce=c(),D=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),L=a("p"),Ae=n(`Note that when creating models and layers with
`),O=a("a"),Le=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var q=i(d);g=s(q,"TensorFlow models and layers in "),m=r(q,"CODE",{});var De=i(m);u=s(De,"transformers"),De.forEach(t),v=s(q," accept two formats as input:"),q.forEach(t),l=p(y),h=r(y,"UL",{});var te=i(h);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=p(te),W=r(te,"LI",{});var Qe=i(W);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=p(y),M=r(y,"P",{});var j=i(M);be=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(j,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(j,"CODE",{});var he=i(Q);$e=s(he,"fit()"),he.forEach(t),_e=s(j," and "),R=r(j,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(j,`, such as when creating your own layers or models with
the Keras `),H=r(j,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=p(y),C=r(y,"UL",{});var N=i(C);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=p(N),P=r(N,"LI",{});var Y=i(P);qe=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ce=s(He,"model([input_ids, attention_mask])"),He.forEach(t),je=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);pe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),Ce=p(N),D=r(N,"LI",{});var Ne=i(D);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ne,"CODE",{});var Be=i(S);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=p(y),L=r(y,"P",{});var se=i(L);Ae=s(se,`Note that when creating models and layers with
`),O=r(se,"A",{href:!0,rel:!0});var Ye=i(O);Le=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(y,q){_(y,d,q),e(d,g),e(d,m),e(m,u),e(d,v),_(y,l,q),_(y,h,q),e(h,z),e(z,Te),e(h,fe),e(h,W),e(W,ae),_(y,ee,q),_(y,M,q),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,de),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ke),e(M,H),e(H,me),e(M,xe),_(y,oe,q),_(y,C,q),e(C,A),e(A,ve),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(C,ze),e(C,P),e(P,qe),e(P,J),e(J,ce),e(P,je),e(P,G),e(G,pe),e(C,Ce),e(C,D),e(D,ye),e(D,S),e(S,Pe),_(y,Z,q),_(y,L,q),e(L,Ae),e(L,O),e(O,Le),e(L,Oe)},d(y){y&&t(d),y&&t(l),y&&t(h),y&&t(ee),y&&t(M),y&&t(oe),y&&t(C),y&&t(Z),y&&t(L)}}}function HC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function KC(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, TFElectraForQuestionAnswering
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("bhadresh-savani/electra-base-squad2")
model = TFElectraForQuestionAnswering.from_pretrained("bhadresh-savani/electra-base-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function QC(x){let d,g;return d=new le({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([11])
target_end_index = tf.constant([12])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">11</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">12</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">2.64</span>`}}),{c(){T(d.$$.fragment)},l(m){b(d.$$.fragment,m)},m(m,u){w(d,m,u),g=!0},p:ie,i(m){g||(E(d.$$.fragment,m),g=!0)},o(m){$(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function VC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function JC(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, FlaxElectraModel

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraModel.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraModel.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function GC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function XC(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForPreTraining

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForPreTraining.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function YC(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function ZC(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForCausalLM

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForCausalLM.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function eP(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function tP(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMaskedLM

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForMaskedLM.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function oP(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function nP(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForSequenceClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForSequenceClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function sP(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function aP(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMultipleChoice

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForMultipleChoice.from_pretrained("google/electra-small-discriminator")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function rP(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function iP(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForTokenClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForTokenClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function lP(x){let d,g,m,u,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function dP(x){let d,g,m,u,v;return u=new le({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForQuestionAnswering

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForQuestionAnswering.from_pretrained("google/electra-small-discriminator")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=a("p"),g=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);g=s(h,"Example:"),h.forEach(t),m=p(l),b(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(u,l,h),v=!0},p:ie,i(l){v||(E(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),F(u,l)}}}function cP(x){let d,g,m,u,v,l,h,z,Te,fe,W,ae,ee,M,be,K,we,ge,U,Ee,de,Q,$e,_e,R,Fe,ke,H,me,xe,oe,C,A,ve,B,ue,Me,V,ne,ze,P,qe,J,ce,je,G,pe,Ce,D,ye,S,Pe,Z,L,Ae,O,Le,Oe,y,q,De,te,We,Qe,j,Ve,Ke,he,Ue,Je,N,X,Re,Ge,Y,He,Xe,Ne,Be,se,Ye,R_,Bo,H_,Xd,K_,Q_,Yd,V_,J_,G_,Xn,yf,Ro,Yn,Tp,ir,X_,bp,Y_,Tf,tt,lr,Z_,wp,ek,tk,dr,ok,Zd,nk,sk,ak,zo,cr,rk,Ep,ik,lk,pr,ec,dk,$p,ck,pk,tc,hk,Fp,mk,uk,Zn,hr,fk,xp,gk,_k,Kt,mr,kk,Mp,vk,yk,es,Tk,Ho,bk,zp,wk,Ek,qp,$k,Fk,xk,ts,ur,Mk,fr,zk,jp,qk,jk,bf,Ko,os,Cp,gr,Ck,Pp,Pk,wf,bt,_r,Ak,kr,Lk,Ap,Ok,Nk,Ik,vr,Dk,oc,Sk,Wk,Uk,qo,yr,Bk,Lp,Rk,Hk,Tr,nc,Kk,Op,Qk,Vk,sc,Jk,Np,Gk,Xk,Qt,br,Yk,Ip,Zk,ev,ns,tv,Qo,ov,Dp,nv,sv,Sp,av,rv,Ef,Vo,ss,Wp,wr,iv,Up,lv,$f,Jo,Er,dv,$r,cv,ac,pv,hv,Ff,Go,Fr,mv,xr,uv,rc,fv,gv,xf,Xo,as,Bp,Mr,_v,Rp,kv,Mf,wt,zr,vv,Hp,yv,Tv,qr,bv,ic,wv,Ev,$v,jr,Fv,Cr,xv,Mv,zv,Vt,Pr,qv,Yo,jv,lc,Cv,Pv,Kp,Av,Lv,Ov,rs,Nv,is,zf,Zo,ls,Qp,Ar,Iv,Vp,Dv,qf,ht,Lr,Sv,Jp,Wv,Uv,Gp,Bv,Rv,Or,Hv,dc,Kv,Qv,Vv,Nr,Jv,Ir,Gv,Xv,Yv,Jt,Dr,Zv,en,ey,cc,ty,oy,Xp,ny,sy,ay,ds,ry,cs,jf,tn,ps,Yp,Sr,iy,Zp,ly,Cf,Et,Wr,dy,Ur,cy,eh,py,hy,my,Br,uy,pc,fy,gy,_y,Rr,ky,Hr,vy,yy,Ty,Gt,Kr,by,on,wy,hc,Ey,$y,th,Fy,xy,My,hs,zy,ms,Pf,nn,us,oh,Qr,qy,nh,jy,Af,mt,Vr,Cy,sh,Py,Ay,ah,Ly,Oy,Jr,Ny,mc,Iy,Dy,Sy,Gr,Wy,Xr,Uy,By,Ry,Mt,Yr,Hy,sn,Ky,uc,Qy,Vy,rh,Jy,Gy,Xy,fs,Yy,gs,Zy,_s,Lf,an,ks,ih,Zr,eT,lh,tT,Of,$t,ei,oT,dh,nT,sT,ti,aT,fc,rT,iT,lT,oi,dT,ni,cT,pT,hT,pt,si,mT,rn,uT,gc,fT,gT,ch,_T,kT,vT,vs,yT,ys,TT,Ts,bT,bs,wT,ws,Nf,ln,Es,ph,ai,ET,hh,$T,If,Ft,ri,FT,mh,xT,MT,ii,zT,_c,qT,jT,CT,li,PT,di,AT,LT,OT,Xt,ci,NT,dn,IT,kc,DT,ST,uh,WT,UT,BT,$s,RT,Fs,Df,cn,xs,fh,pi,HT,gh,KT,Sf,ut,hi,QT,_h,VT,JT,kh,GT,XT,mi,YT,vc,ZT,eb,tb,ui,ob,fi,nb,sb,ab,zt,gi,rb,pn,ib,yc,lb,db,vh,cb,pb,hb,Ms,mb,zs,ub,qs,Wf,hn,js,yh,_i,fb,Th,gb,Uf,xt,ki,_b,mn,kb,bh,vb,yb,wh,Tb,bb,wb,vi,Eb,Tc,$b,Fb,xb,yi,Mb,Ti,zb,qb,jb,qt,bi,Cb,un,Pb,bc,Ab,Lb,Eh,Ob,Nb,Ib,Cs,Db,Ps,Sb,As,Bf,fn,Ls,$h,wi,Wb,Fh,Ub,Rf,ft,Ei,Bb,xh,Rb,Hb,$i,Kb,wc,Qb,Vb,Jb,Fi,Gb,xi,Xb,Yb,Zb,Os,ew,Yt,Mi,tw,gn,ow,Ec,nw,sw,Mh,aw,rw,iw,Ns,lw,Is,Hf,_n,Ds,zh,zi,dw,qh,cw,Kf,ot,qi,pw,jh,hw,mw,Ch,uw,fw,ji,gw,$c,_w,kw,vw,Ci,yw,Pi,Tw,bw,ww,Ss,Ew,Zt,Ai,$w,kn,Fw,Fc,xw,Mw,Ph,zw,qw,jw,Ws,Cw,Us,Qf,vn,Bs,Ah,Li,Pw,Lh,Aw,Vf,nt,Oi,Lw,Oh,Ow,Nw,Nh,Iw,Dw,Ni,Sw,xc,Ww,Uw,Bw,Ii,Rw,Di,Hw,Kw,Qw,Rs,Vw,jt,Si,Jw,yn,Gw,Mc,Xw,Yw,Ih,Zw,eE,tE,Hs,oE,Ks,nE,Qs,Jf,Tn,Vs,Dh,Wi,sE,Sh,aE,Gf,gt,Ui,rE,Wh,iE,lE,Bi,dE,zc,cE,pE,hE,Ri,mE,Hi,uE,fE,gE,Js,_E,Ct,Ki,kE,bn,vE,qc,yE,TE,Uh,bE,wE,EE,Gs,$E,Xs,FE,Ys,Xf,wn,Zs,Bh,Qi,xE,Rh,ME,Yf,_t,Vi,zE,Hh,qE,jE,Ji,CE,jc,PE,AE,LE,Gi,OE,Xi,NE,IE,DE,ea,SE,eo,Yi,WE,En,UE,Cc,BE,RE,Kh,HE,KE,QE,ta,VE,oa,Zf,$n,na,Qh,Zi,JE,Vh,GE,eg,st,el,XE,Jh,YE,ZE,Gh,e$,t$,tl,o$,Pc,n$,s$,a$,ol,r$,nl,i$,l$,d$,sa,c$,Pt,sl,p$,Fn,h$,Ac,m$,u$,Xh,f$,g$,_$,aa,k$,ra,v$,ia,tg,xn,la,Yh,al,y$,Zh,T$,og,kt,rl,b$,Mn,w$,em,E$,$$,tm,F$,x$,M$,il,z$,Lc,q$,j$,C$,ll,P$,dl,A$,L$,O$,da,N$,At,cl,I$,zn,D$,Oc,S$,W$,om,U$,B$,R$,ca,H$,pa,K$,ha,ng,qn,ma,nm,pl,Q$,sm,V$,sg,at,hl,J$,am,G$,X$,ml,Y$,Nc,Z$,e1,t1,ul,o1,fl,n1,s1,a1,rm,r1,i1,_o,im,gl,l1,d1,lm,_l,c1,p1,dm,kl,h1,m1,cm,vl,u1,f1,to,yl,g1,jn,_1,pm,k1,v1,hm,y1,T1,b1,ua,w1,fa,ag,Cn,ga,mm,Tl,E1,um,$1,rg,Ze,bl,F1,fm,x1,M1,gm,z1,q1,wl,j1,Ic,C1,P1,A1,El,L1,$l,O1,N1,I1,_m,D1,S1,ko,km,Fl,W1,U1,vm,xl,B1,R1,ym,Ml,H1,K1,Tm,zl,Q1,V1,oo,ql,J1,Pn,G1,bm,X1,Y1,wm,Z1,e2,t2,_a,o2,ka,ig,An,va,Em,jl,n2,$m,s2,lg,rt,Cl,a2,Fm,r2,i2,Pl,l2,Dc,d2,c2,p2,Al,h2,Ll,m2,u2,f2,xm,g2,_2,vo,Mm,Ol,k2,v2,zm,Nl,y2,T2,qm,Il,b2,w2,jm,Dl,E2,$2,no,Sl,F2,Ln,x2,Cm,M2,z2,Pm,q2,j2,C2,ya,P2,Ta,dg,On,ba,Am,Wl,A2,Lm,L2,cg,it,Ul,O2,Bl,N2,Om,I2,D2,S2,Rl,W2,Sc,U2,B2,R2,Hl,H2,Kl,K2,Q2,V2,Nm,J2,G2,yo,Im,Ql,X2,Y2,Dm,Vl,Z2,eF,Sm,Jl,tF,oF,Wm,Gl,nF,sF,so,Xl,aF,Nn,rF,Um,iF,lF,Bm,dF,cF,pF,wa,hF,Ea,pg,In,$a,Rm,Yl,mF,Hm,uF,hg,lt,Zl,fF,Km,gF,_F,ed,kF,Wc,vF,yF,TF,td,bF,od,wF,EF,$F,Qm,FF,xF,To,Vm,nd,MF,zF,Jm,sd,qF,jF,Gm,ad,CF,PF,Xm,rd,AF,LF,ao,id,OF,Dn,NF,Ym,IF,DF,Zm,SF,WF,UF,Fa,BF,xa,mg,Sn,Ma,eu,ld,RF,tu,HF,ug,dt,dd,KF,ou,QF,VF,cd,JF,Uc,GF,XF,YF,pd,ZF,hd,e0,t0,o0,nu,n0,s0,bo,su,md,a0,r0,au,ud,i0,l0,ru,fd,d0,c0,iu,gd,p0,h0,ro,_d,m0,Wn,u0,lu,f0,g0,du,_0,k0,v0,za,y0,qa,fg,Un,ja,cu,kd,T0,pu,b0,gg,et,vd,w0,hu,E0,$0,mu,F0,x0,yd,M0,Bc,z0,q0,j0,Td,C0,bd,P0,A0,L0,uu,O0,N0,wo,fu,wd,I0,D0,gu,Ed,S0,W0,_u,$d,U0,B0,ku,Fd,R0,H0,io,xd,K0,Bn,Q0,vu,V0,J0,yu,G0,X0,Y0,Ca,Z0,Pa,_g,Rn,Aa,Tu,Md,ex,bu,tx,kg,ct,zd,ox,Hn,nx,wu,sx,ax,Eu,rx,ix,lx,qd,dx,Rc,cx,px,hx,jd,mx,Cd,ux,fx,gx,$u,_x,kx,Eo,Fu,Pd,vx,yx,xu,Ad,Tx,bx,Mu,Ld,wx,Ex,zu,Od,$x,Fx,lo,Nd,xx,Kn,Mx,qu,zx,qx,ju,jx,Cx,Px,La,Ax,Oa,vg;return l=new Se({}),M=new Se({}),We=new Se({}),Ue=new I({props:{name:"class transformers.ElectraConfig",anchor:"transformers.ElectraConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 256"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 1024"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = 'gelu'"},{name:"summary_last_dropout",val:" = 0.1"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ElectraConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ELECTRA model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraModel">ElectraModel</a> or <a href="/docs/transformers/main/en/model_doc/electra#transformers.TFElectraModel">TFElectraModel</a>.`,name:"vocab_size"},{anchor:"transformers.ElectraConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"embedding_size"},{anchor:"transformers.ElectraConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ElectraConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ElectraConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ElectraConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ElectraConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ElectraConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ElectraConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ElectraConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.ElectraConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraModel">ElectraModel</a> or <a href="/docs/transformers/main/en/model_doc/electra#transformers.TFElectraModel">TFElectraModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.ElectraConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ElectraConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ElectraConfig.summary_type",description:`<strong>summary_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;first&quot;</code>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.ElectraConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.ElectraConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Pass <code>&quot;gelu&quot;</code> for a gelu activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.ElectraConfig.summary_last_dropout",description:`<strong>summary_last_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_last_dropout"},{anchor:"transformers.ElectraConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.ElectraConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.ElectraConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/configuration_electra.py#L44"}}),Xn=new re({props:{anchor:"transformers.ElectraConfig.example",$$slots:{default:[Yj]},$$scope:{ctx:x}}}),ir=new Se({}),lr=new I({props:{name:"class transformers.ElectraTokenizer",anchor:"transformers.ElectraTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ElectraTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.ElectraTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.ElectraTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.ElectraTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.ElectraTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.ElectraTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.ElectraTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.ElectraTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.ElectraTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.ElectraTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.ElectraTokenizer.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/tokenization_electra.py#L93"}}),cr=new I({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ElectraTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ElectraTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ElectraTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/tokenization_electra.py#L224",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hr=new I({props:{name:"convert_tokens_to_string",anchor:"transformers.ElectraTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/tokenization_electra.py#L219"}}),mr=new I({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ElectraTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ElectraTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ElectraTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/tokenization_electra.py#L277",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),es=new re({props:{anchor:"transformers.ElectraTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Zj]},$$scope:{ctx:x}}}),ur=new I({props:{name:"get_special_tokens_mask",anchor:"transformers.ElectraTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ElectraTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ElectraTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ElectraTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/tokenization_electra.py#L249",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),gr=new Se({}),_r=new I({props:{name:"class transformers.ElectraTokenizerFast",anchor:"transformers.ElectraTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ElectraTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.ElectraTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.ElectraTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.ElectraTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.ElectraTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.ElectraTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.ElectraTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.ElectraTokenizerFast.clean_text",description:`<strong>clean_text</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean the text before tokenization by removing any control characters and replacing all
whitespaces by the classic one.`,name:"clean_text"},{anchor:"transformers.ElectraTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.ElectraTokenizerFast.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original ELECTRA).`,name:"strip_accents"},{anchor:"transformers.ElectraTokenizerFast.wordpieces_prefix",description:`<strong>wordpieces_prefix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;##&quot;</code>) &#x2014;
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/tokenization_electra_fast.py#L88"}}),yr=new I({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ElectraTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.ElectraTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ElectraTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/tokenization_electra_fast.py#L176",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),br=new I({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ElectraTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ElectraTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ElectraTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/tokenization_electra_fast.py#L200",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ns=new re({props:{anchor:"transformers.ElectraTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[eC]},$$scope:{ctx:x}}}),wr=new Se({}),Er=new I({props:{name:"class transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L694"}}),Fr=new I({props:{name:"class transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>tf.Tensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L815"}}),Mr=new Se({}),zr=new I({props:{name:"class transformers.ElectraModel",anchor:"transformers.ElectraModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L806"}}),Pr=new I({props:{name:"forward",anchor:"transformers.ElectraModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L833",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rs=new Ie({props:{$$slots:{default:[tC]},$$scope:{ctx:x}}}),is=new re({props:{anchor:"transformers.ElectraModel.forward.example",$$slots:{default:[oC]},$$scope:{ctx:x}}}),Ar=new Se({}),Lr=new I({props:{name:"class transformers.ElectraForPreTraining",anchor:"transformers.ElectraForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1057"}}),Dr=new I({props:{name:"forward",anchor:"transformers.ElectraForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForPreTraining.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForPreTraining.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the ELECTRA loss. Input should be a sequence of tokens (see <code>input_ids</code> docstring)
Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates the token is an original token,</li>
<li>1 indicates the token was replaced.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1066",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/electra#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"
>transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss of the ELECTRA objective.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the head (scores for each token before SoftMax).</p>
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
  href="/docs/transformers/main/en/model_doc/electra#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"
>transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ds=new Ie({props:{$$slots:{default:[nC]},$$scope:{ctx:x}}}),cs=new re({props:{anchor:"transformers.ElectraForPreTraining.forward.example",$$slots:{default:[sC]},$$scope:{ctx:x}}}),Sr=new Se({}),Wr=new I({props:{name:"class transformers.ElectraForCausalLM",anchor:"transformers.ElectraForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1532"}}),Kr=new I({props:{name:"forward",anchor:"transformers.ElectraForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.ElectraForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.ElectraForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1551",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),hs=new Ie({props:{$$slots:{default:[aC]},$$scope:{ctx:x}}}),ms=new re({props:{anchor:"transformers.ElectraForCausalLM.forward.example",$$slots:{default:[rC]},$$scope:{ctx:x}}}),Qr=new Se({}),Vr=new I({props:{name:"class transformers.ElectraForMaskedLM",anchor:"transformers.ElectraForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1163"}}),Yr=new I({props:{name:"forward",anchor:"transformers.ElectraForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForMaskedLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForMaskedLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1180",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),fs=new Ie({props:{$$slots:{default:[iC]},$$scope:{ctx:x}}}),gs=new re({props:{anchor:"transformers.ElectraForMaskedLM.forward.example",$$slots:{default:[lC]},$$scope:{ctx:x}}}),_s=new re({props:{anchor:"transformers.ElectraForMaskedLM.forward.example-2",$$slots:{default:[dC]},$$scope:{ctx:x}}}),Zr=new Se({}),ei=new I({props:{name:"class transformers.ElectraForSequenceClassification",anchor:"transformers.ElectraForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L958"}}),si=new I({props:{name:"forward",anchor:"transformers.ElectraForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForSequenceClassification.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForSequenceClassification.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L969",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),vs=new Ie({props:{$$slots:{default:[cC]},$$scope:{ctx:x}}}),ys=new re({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example",$$slots:{default:[pC]},$$scope:{ctx:x}}}),Ts=new re({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-2",$$slots:{default:[hC]},$$scope:{ctx:x}}}),bs=new re({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-3",$$slots:{default:[mC]},$$scope:{ctx:x}}}),ws=new re({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-4",$$slots:{default:[uC]},$$scope:{ctx:x}}}),ai=new Se({}),ri=new I({props:{name:"class transformers.ElectraForMultipleChoice",anchor:"transformers.ElectraForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1444"}}),ci=new I({props:{name:"forward",anchor:"transformers.ElectraForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForMultipleChoice.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForMultipleChoice.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1455",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),$s=new Ie({props:{$$slots:{default:[fC]},$$scope:{ctx:x}}}),Fs=new re({props:{anchor:"transformers.ElectraForMultipleChoice.forward.example",$$slots:{default:[gC]},$$scope:{ctx:x}}}),pi=new Se({}),hi=new I({props:{name:"class transformers.ElectraForTokenClassification",anchor:"transformers.ElectraForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1253"}}),gi=new I({props:{name:"forward",anchor:"transformers.ElectraForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForTokenClassification.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForTokenClassification.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1267",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Ms=new Ie({props:{$$slots:{default:[_C]},$$scope:{ctx:x}}}),zs=new re({props:{anchor:"transformers.ElectraForTokenClassification.forward.example",$$slots:{default:[kC]},$$scope:{ctx:x}}}),qs=new re({props:{anchor:"transformers.ElectraForTokenClassification.forward.example-2",$$slots:{default:[vC]},$$scope:{ctx:x}}}),_i=new Se({}),ki=new I({props:{name:"class transformers.ElectraForQuestionAnswering",anchor:"transformers.ElectraForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1335"}}),bi=new I({props:{name:"forward",anchor:"transformers.ElectraForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForQuestionAnswering.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForQuestionAnswering.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.ElectraForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1349",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Cs=new Ie({props:{$$slots:{default:[yC]},$$scope:{ctx:x}}}),Ps=new re({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example",$$slots:{default:[TC]},$$scope:{ctx:x}}}),As=new re({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example-2",$$slots:{default:[bC]},$$scope:{ctx:x}}}),wi=new Se({}),Ei=new I({props:{name:"class transformers.TFElectraModel",anchor:"transformers.TFElectraModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L940"}}),Os=new Ie({props:{$$slots:{default:[wC]},$$scope:{ctx:x}}}),Mi=new I({props:{name:"call",anchor:"transformers.TFElectraModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFElectraModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFElectraModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFElectraModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L946",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ns=new Ie({props:{$$slots:{default:[EC]},$$scope:{ctx:x}}}),Is=new re({props:{anchor:"transformers.TFElectraModel.call.example",$$slots:{default:[$C]},$$scope:{ctx:x}}}),zi=new Se({}),qi=new I({props:{name:"class transformers.TFElectraForPreTraining",anchor:"transformers.TFElectraForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1037"}}),Ss=new Ie({props:{$$slots:{default:[FC]},$$scope:{ctx:x}}}),Ai=new I({props:{name:"call",anchor:"transformers.TFElectraForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForPreTraining.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForPreTraining.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForPreTraining.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForPreTraining.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForPreTraining.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForPreTraining.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForPreTraining.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1044",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/electra#transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput"
>transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>tf.Tensor</code> of shape <code>(1,)</code>) \u2014 Total loss of the ELECTRA objective.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the head (scores for each token before SoftMax).</p>
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
  href="/docs/transformers/main/en/model_doc/electra#transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput"
>transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ws=new Ie({props:{$$slots:{default:[xC]},$$scope:{ctx:x}}}),Us=new re({props:{anchor:"transformers.TFElectraForPreTraining.call.example",$$slots:{default:[MC]},$$scope:{ctx:x}}}),Li=new Se({}),Oi=new I({props:{name:"class transformers.TFElectraForMaskedLM",anchor:"transformers.TFElectraForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1152"}}),Rs=new Ie({props:{$$slots:{default:[zC]},$$scope:{ctx:x}}}),Si=new I({props:{name:"call",anchor:"transformers.TFElectraForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1174",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Hs=new Ie({props:{$$slots:{default:[qC]},$$scope:{ctx:x}}}),Ks=new re({props:{anchor:"transformers.TFElectraForMaskedLM.call.example",$$slots:{default:[jC]},$$scope:{ctx:x}}}),Qs=new re({props:{anchor:"transformers.TFElectraForMaskedLM.call.example-2",$$slots:{default:[CC]},$$scope:{ctx:x}}}),Wi=new Se({}),Ui=new I({props:{name:"class transformers.TFElectraForSequenceClassification",anchor:"transformers.TFElectraForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1279"}}),Js=new Ie({props:{$$slots:{default:[PC]},$$scope:{ctx:x}}}),Ki=new I({props:{name:"call",anchor:"transformers.TFElectraForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1286",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Gs=new Ie({props:{$$slots:{default:[AC]},$$scope:{ctx:x}}}),Xs=new re({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example",$$slots:{default:[LC]},$$scope:{ctx:x}}}),Ys=new re({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example-2",$$slots:{default:[OC]},$$scope:{ctx:x}}}),Qi=new Se({}),Vi=new I({props:{name:"class transformers.TFElectraForMultipleChoice",anchor:"transformers.TFElectraForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1358"}}),ea=new Ie({props:{$$slots:{default:[NC]},$$scope:{ctx:x}}}),Yi=new I({props:{name:"call",anchor:"transformers.TFElectraForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1380",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),ta=new Ie({props:{$$slots:{default:[IC]},$$scope:{ctx:x}}}),oa=new re({props:{anchor:"transformers.TFElectraForMultipleChoice.call.example",$$slots:{default:[DC]},$$scope:{ctx:x}}}),Zi=new Se({}),el=new I({props:{name:"class transformers.TFElectraForTokenClassification",anchor:"transformers.TFElectraForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1484"}}),sa=new Ie({props:{$$slots:{default:[SC]},$$scope:{ctx:x}}}),sl=new I({props:{name:"call",anchor:"transformers.TFElectraForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1497",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),aa=new Ie({props:{$$slots:{default:[WC]},$$scope:{ctx:x}}}),ra=new re({props:{anchor:"transformers.TFElectraForTokenClassification.call.example",$$slots:{default:[UC]},$$scope:{ctx:x}}}),ia=new re({props:{anchor:"transformers.TFElectraForTokenClassification.call.example-2",$$slots:{default:[BC]},$$scope:{ctx:x}}}),al=new Se({}),rl=new I({props:{name:"class transformers.TFElectraForQuestionAnswering",anchor:"transformers.TFElectraForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1569"}}),da=new Ie({props:{$$slots:{default:[RC]},$$scope:{ctx:x}}}),cl=new I({props:{name:"call",anchor:"transformers.TFElectraForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFElectraForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1579",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),ca=new Ie({props:{$$slots:{default:[HC]},$$scope:{ctx:x}}}),pa=new re({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example",$$slots:{default:[KC]},$$scope:{ctx:x}}}),ha=new re({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example-2",$$slots:{default:[QC]},$$scope:{ctx:x}}}),pl=new Se({}),hl=new I({props:{name:"class transformers.FlaxElectraModel",anchor:"transformers.FlaxElectraModel",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L923"}}),yl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ua=new Ie({props:{$$slots:{default:[VC]},$$scope:{ctx:x}}}),fa=new re({props:{anchor:"transformers.FlaxElectraModel.__call__.example",$$slots:{default:[JC]},$$scope:{ctx:x}}}),Tl=new Se({}),bl=new I({props:{name:"class transformers.FlaxElectraForPreTraining",anchor:"transformers.FlaxElectraForPreTraining",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1078"}}),ql=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForPreTraining.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForPreTraining.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForPreTraining.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <code>transformers.models.electra.modeling_flax_electra.FlaxElectraForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
<p><code>transformers.models.electra.modeling_flax_electra.FlaxElectraForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_a=new Ie({props:{$$slots:{default:[GC]},$$scope:{ctx:x}}}),ka=new re({props:{anchor:"transformers.FlaxElectraForPreTraining.__call__.example",$$slots:{default:[XC]},$$scope:{ctx:x}}}),jl=new Se({}),Cl=new I({props:{name:"class transformers.FlaxElectraForCausalLM",anchor:"transformers.FlaxElectraForCausalLM",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1576"}}),Sl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForCausalLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForCausalLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),ya=new Ie({props:{$$slots:{default:[YC]},$$scope:{ctx:x}}}),Ta=new re({props:{anchor:"transformers.FlaxElectraForCausalLM.__call__.example",$$slots:{default:[ZC]},$$scope:{ctx:x}}}),Wl=new Se({}),Ul=new I({props:{name:"class transformers.FlaxElectraForMaskedLM",anchor:"transformers.FlaxElectraForMaskedLM",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1012"}}),Xl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),wa=new Ie({props:{$$slots:{default:[eP]},$$scope:{ctx:x}}}),Ea=new re({props:{anchor:"transformers.FlaxElectraForMaskedLM.__call__.example",$$slots:{default:[tP]},$$scope:{ctx:x}}}),Yl=new Se({}),Zl=new I({props:{name:"class transformers.FlaxElectraForSequenceClassification",anchor:"transformers.FlaxElectraForSequenceClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1491"}}),id=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Fa=new Ie({props:{$$slots:{default:[oP]},$$scope:{ctx:x}}}),xa=new re({props:{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.example",$$slots:{default:[nP]},$$scope:{ctx:x}}}),ld=new Se({}),dd=new I({props:{name:"class transformers.FlaxElectraForMultipleChoice",anchor:"transformers.FlaxElectraForMultipleChoice",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1321"}}),_d=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),za=new Ie({props:{$$slots:{default:[sP]},$$scope:{ctx:x}}}),qa=new re({props:{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.example",$$slots:{default:[aP]},$$scope:{ctx:x}}}),kd=new Se({}),vd=new I({props:{name:"class transformers.FlaxElectraForTokenClassification",anchor:"transformers.FlaxElectraForTokenClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1173"}}),xd=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Ca=new Ie({props:{$$slots:{default:[rP]},$$scope:{ctx:x}}}),Pa=new re({props:{anchor:"transformers.FlaxElectraForTokenClassification.__call__.example",$$slots:{default:[iP]},$$scope:{ctx:x}}}),Md=new Se({}),zd=new I({props:{name:"class transformers.FlaxElectraForQuestionAnswering",anchor:"transformers.FlaxElectraForQuestionAnswering",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1397"}}),Nd=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),La=new Ie({props:{$$slots:{default:[lP]},$$scope:{ctx:x}}}),Oa=new re({props:{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.example",$$slots:{default:[dP]},$$scope:{ctx:x}}}),{c(){d=a("meta"),g=c(),m=a("h1"),u=a("a"),v=a("span"),T(l.$$.fragment),h=c(),z=a("span"),Te=n("ELECTRA"),fe=c(),W=a("h2"),ae=a("a"),ee=a("span"),T(M.$$.fragment),be=c(),K=a("span"),we=n("Overview"),ge=c(),U=a("p"),Ee=n("The ELECTRA model was proposed in the paper "),de=a("a"),Q=n(`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
Generators`),$e=n(`. ELECTRA is a new pretraining approach which trains two
transformer models: the generator and the discriminator. The generator\u2019s role is to replace tokens in a sequence, and
is therefore trained as a masked language model. The discriminator, which is the model we\u2019re interested in, tries to
identify which tokens were replaced by the generator in the sequence.`),_e=c(),R=a("p"),Fe=n("The abstract from the paper is the following:"),ke=c(),H=a("p"),me=a("em"),xe=n(`Masked language modeling (MLM) pretraining methods such as BERT corrupt the input by replacing some tokens with [MASK]
and then train a model to reconstruct the original tokens. While they produce good results when transferred to
downstream NLP tasks, they generally require large amounts of compute to be effective. As an alternative, we propose a
more sample-efficient pretraining task called replaced token detection. Instead of masking the input, our approach
corrupts it by replacing some tokens with plausible alternatives sampled from a small generator network. Then, instead
of training a model that predicts the original identities of the corrupted tokens, we train a discriminative model that
predicts whether each token in the corrupted input was replaced by a generator sample or not. Thorough experiments
demonstrate this new pretraining task is more efficient than MLM because the task is defined over all input tokens
rather than just the small subset that was masked out. As a result, the contextual representations learned by our
approach substantially outperform the ones learned by BERT given the same model size, data, and compute. The gains are
particularly strong for small models; for example, we train a model on one GPU for 4 days that outperforms GPT (trained
using 30x more compute) on the GLUE natural language understanding benchmark. Our approach also works well at scale,
where it performs comparably to RoBERTa and XLNet while using less than 1/4 of their compute and outperforms them when
using the same amount of compute.`),oe=c(),C=a("p"),A=n("Tips:"),ve=c(),B=a("ul"),ue=a("li"),Me=n(`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),V=c(),ne=a("li"),ze=n("The ELECTRA checkpoints saved using "),P=a("a"),qe=n("Google Research\u2019s implementation"),J=n(`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),ce=a("a"),je=n("ElectraForMaskedLM"),G=n(` model, and the generator may be loaded in the
`),pe=a("a"),Ce=n("ElectraForPreTraining"),D=n(` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),ye=c(),S=a("p"),Pe=n("This model was contributed by "),Z=a("a"),L=n("lysandre"),Ae=n(". The original code can be found "),O=a("a"),Le=n("here"),Oe=n("."),y=c(),q=a("h2"),De=a("a"),te=a("span"),T(We.$$.fragment),Qe=c(),j=a("span"),Ve=n("ElectraConfig"),Ke=c(),he=a("div"),T(Ue.$$.fragment),Je=c(),N=a("p"),X=n("This is the configuration class to store the configuration of a "),Re=a("a"),Ge=n("ElectraModel"),Y=n(" or a "),He=a("a"),Xe=n("TFElectraModel"),Ne=n(`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),Be=a("a"),se=n("google/electra-small-discriminator"),Ye=n(" architecture."),R_=c(),Bo=a("p"),H_=n("Configuration objects inherit from "),Xd=a("a"),K_=n("PretrainedConfig"),Q_=n(` and can be used to control the model outputs. Read the
documentation from `),Yd=a("a"),V_=n("PretrainedConfig"),J_=n(" for more information."),G_=c(),T(Xn.$$.fragment),yf=c(),Ro=a("h2"),Yn=a("a"),Tp=a("span"),T(ir.$$.fragment),X_=c(),bp=a("span"),Y_=n("ElectraTokenizer"),Tf=c(),tt=a("div"),T(lr.$$.fragment),Z_=c(),wp=a("p"),ek=n("Construct a BERT tokenizer. Based on WordPiece."),tk=c(),dr=a("p"),ok=n("This tokenizer inherits from "),Zd=a("a"),nk=n("PreTrainedTokenizer"),sk=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ak=c(),zo=a("div"),T(cr.$$.fragment),rk=c(),Ep=a("p"),ik=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),lk=c(),pr=a("ul"),ec=a("li"),dk=n("single sequence: "),$p=a("code"),ck=n("[CLS] X [SEP]"),pk=c(),tc=a("li"),hk=n("pair of sequences: "),Fp=a("code"),mk=n("[CLS] A [SEP] B [SEP]"),uk=c(),Zn=a("div"),T(hr.$$.fragment),fk=c(),xp=a("p"),gk=n("Converts a sequence of tokens (string) in a single string."),_k=c(),Kt=a("div"),T(mr.$$.fragment),kk=c(),Mp=a("p"),vk=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),yk=c(),T(es.$$.fragment),Tk=c(),Ho=a("p"),bk=n("If "),zp=a("code"),wk=n("token_ids_1"),Ek=n(" is "),qp=a("code"),$k=n("None"),Fk=n(", this method only returns the first portion of the mask (0s)."),xk=c(),ts=a("div"),T(ur.$$.fragment),Mk=c(),fr=a("p"),zk=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),jp=a("code"),qk=n("prepare_for_model"),jk=n(" method."),bf=c(),Ko=a("h2"),os=a("a"),Cp=a("span"),T(gr.$$.fragment),Ck=c(),Pp=a("span"),Pk=n("ElectraTokenizerFast"),wf=c(),bt=a("div"),T(_r.$$.fragment),Ak=c(),kr=a("p"),Lk=n("Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),Ap=a("em"),Ok=n("tokenizers"),Nk=n(" library). Based on WordPiece."),Ik=c(),vr=a("p"),Dk=n("This tokenizer inherits from "),oc=a("a"),Sk=n("PreTrainedTokenizerFast"),Wk=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Uk=c(),qo=a("div"),T(yr.$$.fragment),Bk=c(),Lp=a("p"),Rk=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A ELECTRA sequence has the following format:`),Hk=c(),Tr=a("ul"),nc=a("li"),Kk=n("single sequence: "),Op=a("code"),Qk=n("[CLS] X [SEP]"),Vk=c(),sc=a("li"),Jk=n("pair of sequences: "),Np=a("code"),Gk=n("[CLS] A [SEP] B [SEP]"),Xk=c(),Qt=a("div"),T(br.$$.fragment),Yk=c(),Ip=a("p"),Zk=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A ELECTRA"),ev=c(),T(ns.$$.fragment),tv=c(),Qo=a("p"),ov=n("If "),Dp=a("code"),nv=n("token_ids_1"),sv=n(" is "),Sp=a("code"),av=n("None"),rv=n(", this method only returns the first portion of the mask (0s)."),Ef=c(),Vo=a("h2"),ss=a("a"),Wp=a("span"),T(wr.$$.fragment),iv=c(),Up=a("span"),lv=n("Electra specific outputs"),$f=c(),Jo=a("div"),T(Er.$$.fragment),dv=c(),$r=a("p"),cv=n("Output type of "),ac=a("a"),pv=n("ElectraForPreTraining"),hv=n("."),Ff=c(),Go=a("div"),T(Fr.$$.fragment),mv=c(),xr=a("p"),uv=n("Output type of "),rc=a("a"),fv=n("TFElectraForPreTraining"),gv=n("."),xf=c(),Xo=a("h2"),as=a("a"),Bp=a("span"),T(Mr.$$.fragment),_v=c(),Rp=a("span"),kv=n("ElectraModel"),Mf=c(),wt=a("div"),T(zr.$$.fragment),vv=c(),Hp=a("p"),yv=n("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),Tv=c(),qr=a("p"),bv=n("This model inherits from "),ic=a("a"),wv=n("PreTrainedModel"),Ev=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$v=c(),jr=a("p"),Fv=n("This model is also a PyTorch "),Cr=a("a"),xv=n("torch.nn.Module"),Mv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zv=c(),Vt=a("div"),T(Pr.$$.fragment),qv=c(),Yo=a("p"),jv=n("The "),lc=a("a"),Cv=n("ElectraModel"),Pv=n(" forward method, overrides the "),Kp=a("code"),Av=n("__call__"),Lv=n(" special method."),Ov=c(),T(rs.$$.fragment),Nv=c(),T(is.$$.fragment),zf=c(),Zo=a("h2"),ls=a("a"),Qp=a("span"),T(Ar.$$.fragment),Iv=c(),Vp=a("span"),Dv=n("ElectraForPreTraining"),qf=c(),ht=a("div"),T(Lr.$$.fragment),Sv=c(),Jp=a("p"),Wv=n("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),Uv=c(),Gp=a("p"),Bv=n("It is recommended to load the discriminator checkpoint into that model."),Rv=c(),Or=a("p"),Hv=n("This model inherits from "),dc=a("a"),Kv=n("PreTrainedModel"),Qv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vv=c(),Nr=a("p"),Jv=n("This model is also a PyTorch "),Ir=a("a"),Gv=n("torch.nn.Module"),Xv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yv=c(),Jt=a("div"),T(Dr.$$.fragment),Zv=c(),en=a("p"),ey=n("The "),cc=a("a"),ty=n("ElectraForPreTraining"),oy=n(" forward method, overrides the "),Xp=a("code"),ny=n("__call__"),sy=n(" special method."),ay=c(),T(ds.$$.fragment),ry=c(),T(cs.$$.fragment),jf=c(),tn=a("h2"),ps=a("a"),Yp=a("span"),T(Sr.$$.fragment),iy=c(),Zp=a("span"),ly=n("ElectraForCausalLM"),Cf=c(),Et=a("div"),T(Wr.$$.fragment),dy=c(),Ur=a("p"),cy=n("ELECTRA Model with a "),eh=a("code"),py=n("language modeling"),hy=n(" head on top for CLM fine-tuning."),my=c(),Br=a("p"),uy=n("This model inherits from "),pc=a("a"),fy=n("PreTrainedModel"),gy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_y=c(),Rr=a("p"),ky=n("This model is also a PyTorch "),Hr=a("a"),vy=n("torch.nn.Module"),yy=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ty=c(),Gt=a("div"),T(Kr.$$.fragment),by=c(),on=a("p"),wy=n("The "),hc=a("a"),Ey=n("ElectraForCausalLM"),$y=n(" forward method, overrides the "),th=a("code"),Fy=n("__call__"),xy=n(" special method."),My=c(),T(hs.$$.fragment),zy=c(),T(ms.$$.fragment),Pf=c(),nn=a("h2"),us=a("a"),oh=a("span"),T(Qr.$$.fragment),qy=c(),nh=a("span"),jy=n("ElectraForMaskedLM"),Af=c(),mt=a("div"),T(Vr.$$.fragment),Cy=c(),sh=a("p"),Py=n("Electra model with a language modeling head on top."),Ay=c(),ah=a("p"),Ly=n(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),Oy=c(),Jr=a("p"),Ny=n("This model inherits from "),mc=a("a"),Iy=n("PreTrainedModel"),Dy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sy=c(),Gr=a("p"),Wy=n("This model is also a PyTorch "),Xr=a("a"),Uy=n("torch.nn.Module"),By=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ry=c(),Mt=a("div"),T(Yr.$$.fragment),Hy=c(),sn=a("p"),Ky=n("The "),uc=a("a"),Qy=n("ElectraForMaskedLM"),Vy=n(" forward method, overrides the "),rh=a("code"),Jy=n("__call__"),Gy=n(" special method."),Xy=c(),T(fs.$$.fragment),Yy=c(),T(gs.$$.fragment),Zy=c(),T(_s.$$.fragment),Lf=c(),an=a("h2"),ks=a("a"),ih=a("span"),T(Zr.$$.fragment),eT=c(),lh=a("span"),tT=n("ElectraForSequenceClassification"),Of=c(),$t=a("div"),T(ei.$$.fragment),oT=c(),dh=a("p"),nT=n(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),sT=c(),ti=a("p"),aT=n("This model inherits from "),fc=a("a"),rT=n("PreTrainedModel"),iT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lT=c(),oi=a("p"),dT=n("This model is also a PyTorch "),ni=a("a"),cT=n("torch.nn.Module"),pT=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hT=c(),pt=a("div"),T(si.$$.fragment),mT=c(),rn=a("p"),uT=n("The "),gc=a("a"),fT=n("ElectraForSequenceClassification"),gT=n(" forward method, overrides the "),ch=a("code"),_T=n("__call__"),kT=n(" special method."),vT=c(),T(vs.$$.fragment),yT=c(),T(ys.$$.fragment),TT=c(),T(Ts.$$.fragment),bT=c(),T(bs.$$.fragment),wT=c(),T(ws.$$.fragment),Nf=c(),ln=a("h2"),Es=a("a"),ph=a("span"),T(ai.$$.fragment),ET=c(),hh=a("span"),$T=n("ElectraForMultipleChoice"),If=c(),Ft=a("div"),T(ri.$$.fragment),FT=c(),mh=a("p"),xT=n(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),MT=c(),ii=a("p"),zT=n("This model inherits from "),_c=a("a"),qT=n("PreTrainedModel"),jT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),CT=c(),li=a("p"),PT=n("This model is also a PyTorch "),di=a("a"),AT=n("torch.nn.Module"),LT=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),OT=c(),Xt=a("div"),T(ci.$$.fragment),NT=c(),dn=a("p"),IT=n("The "),kc=a("a"),DT=n("ElectraForMultipleChoice"),ST=n(" forward method, overrides the "),uh=a("code"),WT=n("__call__"),UT=n(" special method."),BT=c(),T($s.$$.fragment),RT=c(),T(Fs.$$.fragment),Df=c(),cn=a("h2"),xs=a("a"),fh=a("span"),T(pi.$$.fragment),HT=c(),gh=a("span"),KT=n("ElectraForTokenClassification"),Sf=c(),ut=a("div"),T(hi.$$.fragment),QT=c(),_h=a("p"),VT=n("Electra model with a token classification head on top."),JT=c(),kh=a("p"),GT=n("Both the discriminator and generator may be loaded into this model."),XT=c(),mi=a("p"),YT=n("This model inherits from "),vc=a("a"),ZT=n("PreTrainedModel"),eb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tb=c(),ui=a("p"),ob=n("This model is also a PyTorch "),fi=a("a"),nb=n("torch.nn.Module"),sb=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ab=c(),zt=a("div"),T(gi.$$.fragment),rb=c(),pn=a("p"),ib=n("The "),yc=a("a"),lb=n("ElectraForTokenClassification"),db=n(" forward method, overrides the "),vh=a("code"),cb=n("__call__"),pb=n(" special method."),hb=c(),T(Ms.$$.fragment),mb=c(),T(zs.$$.fragment),ub=c(),T(qs.$$.fragment),Wf=c(),hn=a("h2"),js=a("a"),yh=a("span"),T(_i.$$.fragment),fb=c(),Th=a("span"),gb=n("ElectraForQuestionAnswering"),Uf=c(),xt=a("div"),T(ki.$$.fragment),_b=c(),mn=a("p"),kb=n(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),bh=a("code"),vb=n("span start logits"),yb=n(" and "),wh=a("code"),Tb=n("span end logits"),bb=n(")."),wb=c(),vi=a("p"),Eb=n("This model inherits from "),Tc=a("a"),$b=n("PreTrainedModel"),Fb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xb=c(),yi=a("p"),Mb=n("This model is also a PyTorch "),Ti=a("a"),zb=n("torch.nn.Module"),qb=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jb=c(),qt=a("div"),T(bi.$$.fragment),Cb=c(),un=a("p"),Pb=n("The "),bc=a("a"),Ab=n("ElectraForQuestionAnswering"),Lb=n(" forward method, overrides the "),Eh=a("code"),Ob=n("__call__"),Nb=n(" special method."),Ib=c(),T(Cs.$$.fragment),Db=c(),T(Ps.$$.fragment),Sb=c(),T(As.$$.fragment),Bf=c(),fn=a("h2"),Ls=a("a"),$h=a("span"),T(wi.$$.fragment),Wb=c(),Fh=a("span"),Ub=n("TFElectraModel"),Rf=c(),ft=a("div"),T(Ei.$$.fragment),Bb=c(),xh=a("p"),Rb=n("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),Hb=c(),$i=a("p"),Kb=n("This model inherits from "),wc=a("a"),Qb=n("TFPreTrainedModel"),Vb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jb=c(),Fi=a("p"),Gb=n("This model is also a "),xi=a("a"),Xb=n("tf.keras.Model"),Yb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zb=c(),T(Os.$$.fragment),ew=c(),Yt=a("div"),T(Mi.$$.fragment),tw=c(),gn=a("p"),ow=n("The "),Ec=a("a"),nw=n("TFElectraModel"),sw=n(" forward method, overrides the "),Mh=a("code"),aw=n("__call__"),rw=n(" special method."),iw=c(),T(Ns.$$.fragment),lw=c(),T(Is.$$.fragment),Hf=c(),_n=a("h2"),Ds=a("a"),zh=a("span"),T(zi.$$.fragment),dw=c(),qh=a("span"),cw=n("TFElectraForPreTraining"),Kf=c(),ot=a("div"),T(qi.$$.fragment),pw=c(),jh=a("p"),hw=n("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),mw=c(),Ch=a("p"),uw=n(`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),fw=c(),ji=a("p"),gw=n("This model inherits from "),$c=a("a"),_w=n("TFPreTrainedModel"),kw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vw=c(),Ci=a("p"),yw=n("This model is also a "),Pi=a("a"),Tw=n("tf.keras.Model"),bw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ww=c(),T(Ss.$$.fragment),Ew=c(),Zt=a("div"),T(Ai.$$.fragment),$w=c(),kn=a("p"),Fw=n("The "),Fc=a("a"),xw=n("TFElectraForPreTraining"),Mw=n(" forward method, overrides the "),Ph=a("code"),zw=n("__call__"),qw=n(" special method."),jw=c(),T(Ws.$$.fragment),Cw=c(),T(Us.$$.fragment),Qf=c(),vn=a("h2"),Bs=a("a"),Ah=a("span"),T(Li.$$.fragment),Pw=c(),Lh=a("span"),Aw=n("TFElectraForMaskedLM"),Vf=c(),nt=a("div"),T(Oi.$$.fragment),Lw=c(),Oh=a("p"),Ow=n("Electra model with a language modeling head on top."),Nw=c(),Nh=a("p"),Iw=n(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),Dw=c(),Ni=a("p"),Sw=n("This model inherits from "),xc=a("a"),Ww=n("TFPreTrainedModel"),Uw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bw=c(),Ii=a("p"),Rw=n("This model is also a "),Di=a("a"),Hw=n("tf.keras.Model"),Kw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qw=c(),T(Rs.$$.fragment),Vw=c(),jt=a("div"),T(Si.$$.fragment),Jw=c(),yn=a("p"),Gw=n("The "),Mc=a("a"),Xw=n("TFElectraForMaskedLM"),Yw=n(" forward method, overrides the "),Ih=a("code"),Zw=n("__call__"),eE=n(" special method."),tE=c(),T(Hs.$$.fragment),oE=c(),T(Ks.$$.fragment),nE=c(),T(Qs.$$.fragment),Jf=c(),Tn=a("h2"),Vs=a("a"),Dh=a("span"),T(Wi.$$.fragment),sE=c(),Sh=a("span"),aE=n("TFElectraForSequenceClassification"),Gf=c(),gt=a("div"),T(Ui.$$.fragment),rE=c(),Wh=a("p"),iE=n(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),lE=c(),Bi=a("p"),dE=n("This model inherits from "),zc=a("a"),cE=n("TFPreTrainedModel"),pE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hE=c(),Ri=a("p"),mE=n("This model is also a "),Hi=a("a"),uE=n("tf.keras.Model"),fE=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gE=c(),T(Js.$$.fragment),_E=c(),Ct=a("div"),T(Ki.$$.fragment),kE=c(),bn=a("p"),vE=n("The "),qc=a("a"),yE=n("TFElectraForSequenceClassification"),TE=n(" forward method, overrides the "),Uh=a("code"),bE=n("__call__"),wE=n(" special method."),EE=c(),T(Gs.$$.fragment),$E=c(),T(Xs.$$.fragment),FE=c(),T(Ys.$$.fragment),Xf=c(),wn=a("h2"),Zs=a("a"),Bh=a("span"),T(Qi.$$.fragment),xE=c(),Rh=a("span"),ME=n("TFElectraForMultipleChoice"),Yf=c(),_t=a("div"),T(Vi.$$.fragment),zE=c(),Hh=a("p"),qE=n(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),jE=c(),Ji=a("p"),CE=n("This model inherits from "),jc=a("a"),PE=n("TFPreTrainedModel"),AE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),LE=c(),Gi=a("p"),OE=n("This model is also a "),Xi=a("a"),NE=n("tf.keras.Model"),IE=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),DE=c(),T(ea.$$.fragment),SE=c(),eo=a("div"),T(Yi.$$.fragment),WE=c(),En=a("p"),UE=n("The "),Cc=a("a"),BE=n("TFElectraForMultipleChoice"),RE=n(" forward method, overrides the "),Kh=a("code"),HE=n("__call__"),KE=n(" special method."),QE=c(),T(ta.$$.fragment),VE=c(),T(oa.$$.fragment),Zf=c(),$n=a("h2"),na=a("a"),Qh=a("span"),T(Zi.$$.fragment),JE=c(),Vh=a("span"),GE=n("TFElectraForTokenClassification"),eg=c(),st=a("div"),T(el.$$.fragment),XE=c(),Jh=a("p"),YE=n("Electra model with a token classification head on top."),ZE=c(),Gh=a("p"),e$=n("Both the discriminator and generator may be loaded into this model."),t$=c(),tl=a("p"),o$=n("This model inherits from "),Pc=a("a"),n$=n("TFPreTrainedModel"),s$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),a$=c(),ol=a("p"),r$=n("This model is also a "),nl=a("a"),i$=n("tf.keras.Model"),l$=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),d$=c(),T(sa.$$.fragment),c$=c(),Pt=a("div"),T(sl.$$.fragment),p$=c(),Fn=a("p"),h$=n("The "),Ac=a("a"),m$=n("TFElectraForTokenClassification"),u$=n(" forward method, overrides the "),Xh=a("code"),f$=n("__call__"),g$=n(" special method."),_$=c(),T(aa.$$.fragment),k$=c(),T(ra.$$.fragment),v$=c(),T(ia.$$.fragment),tg=c(),xn=a("h2"),la=a("a"),Yh=a("span"),T(al.$$.fragment),y$=c(),Zh=a("span"),T$=n("TFElectraForQuestionAnswering"),og=c(),kt=a("div"),T(rl.$$.fragment),b$=c(),Mn=a("p"),w$=n(`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),em=a("code"),E$=n("span start logits"),$$=n(" and "),tm=a("code"),F$=n("span end logits"),x$=n(")."),M$=c(),il=a("p"),z$=n("This model inherits from "),Lc=a("a"),q$=n("TFPreTrainedModel"),j$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),C$=c(),ll=a("p"),P$=n("This model is also a "),dl=a("a"),A$=n("tf.keras.Model"),L$=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),O$=c(),T(da.$$.fragment),N$=c(),At=a("div"),T(cl.$$.fragment),I$=c(),zn=a("p"),D$=n("The "),Oc=a("a"),S$=n("TFElectraForQuestionAnswering"),W$=n(" forward method, overrides the "),om=a("code"),U$=n("__call__"),B$=n(" special method."),R$=c(),T(ca.$$.fragment),H$=c(),T(pa.$$.fragment),K$=c(),T(ha.$$.fragment),ng=c(),qn=a("h2"),ma=a("a"),nm=a("span"),T(pl.$$.fragment),Q$=c(),sm=a("span"),V$=n("FlaxElectraModel"),sg=c(),at=a("div"),T(hl.$$.fragment),J$=c(),am=a("p"),G$=n("The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),X$=c(),ml=a("p"),Y$=n("This model inherits from "),Nc=a("a"),Z$=n("FlaxPreTrainedModel"),e1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),t1=c(),ul=a("p"),o1=n(`This model is also a Flax Linen
`),fl=a("a"),n1=n("flax.nn.Module"),s1=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),a1=c(),rm=a("p"),r1=n("Finally, this model supports inherent JAX features such as:"),i1=c(),_o=a("ul"),im=a("li"),gl=a("a"),l1=n("Just-In-Time (JIT) compilation"),d1=c(),lm=a("li"),_l=a("a"),c1=n("Automatic Differentiation"),p1=c(),dm=a("li"),kl=a("a"),h1=n("Vectorization"),m1=c(),cm=a("li"),vl=a("a"),u1=n("Parallelization"),f1=c(),to=a("div"),T(yl.$$.fragment),g1=c(),jn=a("p"),_1=n("The "),pm=a("code"),k1=n("FlaxElectraPreTrainedModel"),v1=n(" forward method, overrides the "),hm=a("code"),y1=n("__call__"),T1=n(" special method."),b1=c(),T(ua.$$.fragment),w1=c(),T(fa.$$.fragment),ag=c(),Cn=a("h2"),ga=a("a"),mm=a("span"),T(Tl.$$.fragment),E1=c(),um=a("span"),$1=n("FlaxElectraForPreTraining"),rg=c(),Ze=a("div"),T(bl.$$.fragment),F1=c(),fm=a("p"),x1=n("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),M1=c(),gm=a("p"),z1=n("It is recommended to load the discriminator checkpoint into that model."),q1=c(),wl=a("p"),j1=n("This model inherits from "),Ic=a("a"),C1=n("FlaxPreTrainedModel"),P1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),A1=c(),El=a("p"),L1=n(`This model is also a Flax Linen
`),$l=a("a"),O1=n("flax.nn.Module"),N1=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),I1=c(),_m=a("p"),D1=n("Finally, this model supports inherent JAX features such as:"),S1=c(),ko=a("ul"),km=a("li"),Fl=a("a"),W1=n("Just-In-Time (JIT) compilation"),U1=c(),vm=a("li"),xl=a("a"),B1=n("Automatic Differentiation"),R1=c(),ym=a("li"),Ml=a("a"),H1=n("Vectorization"),K1=c(),Tm=a("li"),zl=a("a"),Q1=n("Parallelization"),V1=c(),oo=a("div"),T(ql.$$.fragment),J1=c(),Pn=a("p"),G1=n("The "),bm=a("code"),X1=n("FlaxElectraPreTrainedModel"),Y1=n(" forward method, overrides the "),wm=a("code"),Z1=n("__call__"),e2=n(" special method."),t2=c(),T(_a.$$.fragment),o2=c(),T(ka.$$.fragment),ig=c(),An=a("h2"),va=a("a"),Em=a("span"),T(jl.$$.fragment),n2=c(),$m=a("span"),s2=n("FlaxElectraForCausalLM"),lg=c(),rt=a("div"),T(Cl.$$.fragment),a2=c(),Fm=a("p"),r2=n(`Electra Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),i2=c(),Pl=a("p"),l2=n("This model inherits from "),Dc=a("a"),d2=n("FlaxPreTrainedModel"),c2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),p2=c(),Al=a("p"),h2=n(`This model is also a Flax Linen
`),Ll=a("a"),m2=n("flax.nn.Module"),u2=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),f2=c(),xm=a("p"),g2=n("Finally, this model supports inherent JAX features such as:"),_2=c(),vo=a("ul"),Mm=a("li"),Ol=a("a"),k2=n("Just-In-Time (JIT) compilation"),v2=c(),zm=a("li"),Nl=a("a"),y2=n("Automatic Differentiation"),T2=c(),qm=a("li"),Il=a("a"),b2=n("Vectorization"),w2=c(),jm=a("li"),Dl=a("a"),E2=n("Parallelization"),$2=c(),no=a("div"),T(Sl.$$.fragment),F2=c(),Ln=a("p"),x2=n("The "),Cm=a("code"),M2=n("FlaxElectraPreTrainedModel"),z2=n(" forward method, overrides the "),Pm=a("code"),q2=n("__call__"),j2=n(" special method."),C2=c(),T(ya.$$.fragment),P2=c(),T(Ta.$$.fragment),dg=c(),On=a("h2"),ba=a("a"),Am=a("span"),T(Wl.$$.fragment),A2=c(),Lm=a("span"),L2=n("FlaxElectraForMaskedLM"),cg=c(),it=a("div"),T(Ul.$$.fragment),O2=c(),Bl=a("p"),N2=n("Electra Model with a "),Om=a("code"),I2=n("language modeling"),D2=n(" head on top."),S2=c(),Rl=a("p"),W2=n("This model inherits from "),Sc=a("a"),U2=n("FlaxPreTrainedModel"),B2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),R2=c(),Hl=a("p"),H2=n(`This model is also a Flax Linen
`),Kl=a("a"),K2=n("flax.nn.Module"),Q2=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),V2=c(),Nm=a("p"),J2=n("Finally, this model supports inherent JAX features such as:"),G2=c(),yo=a("ul"),Im=a("li"),Ql=a("a"),X2=n("Just-In-Time (JIT) compilation"),Y2=c(),Dm=a("li"),Vl=a("a"),Z2=n("Automatic Differentiation"),eF=c(),Sm=a("li"),Jl=a("a"),tF=n("Vectorization"),oF=c(),Wm=a("li"),Gl=a("a"),nF=n("Parallelization"),sF=c(),so=a("div"),T(Xl.$$.fragment),aF=c(),Nn=a("p"),rF=n("The "),Um=a("code"),iF=n("FlaxElectraPreTrainedModel"),lF=n(" forward method, overrides the "),Bm=a("code"),dF=n("__call__"),cF=n(" special method."),pF=c(),T(wa.$$.fragment),hF=c(),T(Ea.$$.fragment),pg=c(),In=a("h2"),$a=a("a"),Rm=a("span"),T(Yl.$$.fragment),mF=c(),Hm=a("span"),uF=n("FlaxElectraForSequenceClassification"),hg=c(),lt=a("div"),T(Zl.$$.fragment),fF=c(),Km=a("p"),gF=n(`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),_F=c(),ed=a("p"),kF=n("This model inherits from "),Wc=a("a"),vF=n("FlaxPreTrainedModel"),yF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),TF=c(),td=a("p"),bF=n(`This model is also a Flax Linen
`),od=a("a"),wF=n("flax.nn.Module"),EF=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$F=c(),Qm=a("p"),FF=n("Finally, this model supports inherent JAX features such as:"),xF=c(),To=a("ul"),Vm=a("li"),nd=a("a"),MF=n("Just-In-Time (JIT) compilation"),zF=c(),Jm=a("li"),sd=a("a"),qF=n("Automatic Differentiation"),jF=c(),Gm=a("li"),ad=a("a"),CF=n("Vectorization"),PF=c(),Xm=a("li"),rd=a("a"),AF=n("Parallelization"),LF=c(),ao=a("div"),T(id.$$.fragment),OF=c(),Dn=a("p"),NF=n("The "),Ym=a("code"),IF=n("FlaxElectraPreTrainedModel"),DF=n(" forward method, overrides the "),Zm=a("code"),SF=n("__call__"),WF=n(" special method."),UF=c(),T(Fa.$$.fragment),BF=c(),T(xa.$$.fragment),mg=c(),Sn=a("h2"),Ma=a("a"),eu=a("span"),T(ld.$$.fragment),RF=c(),tu=a("span"),HF=n("FlaxElectraForMultipleChoice"),ug=c(),dt=a("div"),T(dd.$$.fragment),KF=c(),ou=a("p"),QF=n(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),VF=c(),cd=a("p"),JF=n("This model inherits from "),Uc=a("a"),GF=n("FlaxPreTrainedModel"),XF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),YF=c(),pd=a("p"),ZF=n(`This model is also a Flax Linen
`),hd=a("a"),e0=n("flax.nn.Module"),t0=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),o0=c(),nu=a("p"),n0=n("Finally, this model supports inherent JAX features such as:"),s0=c(),bo=a("ul"),su=a("li"),md=a("a"),a0=n("Just-In-Time (JIT) compilation"),r0=c(),au=a("li"),ud=a("a"),i0=n("Automatic Differentiation"),l0=c(),ru=a("li"),fd=a("a"),d0=n("Vectorization"),c0=c(),iu=a("li"),gd=a("a"),p0=n("Parallelization"),h0=c(),ro=a("div"),T(_d.$$.fragment),m0=c(),Wn=a("p"),u0=n("The "),lu=a("code"),f0=n("FlaxElectraPreTrainedModel"),g0=n(" forward method, overrides the "),du=a("code"),_0=n("__call__"),k0=n(" special method."),v0=c(),T(za.$$.fragment),y0=c(),T(qa.$$.fragment),fg=c(),Un=a("h2"),ja=a("a"),cu=a("span"),T(kd.$$.fragment),T0=c(),pu=a("span"),b0=n("FlaxElectraForTokenClassification"),gg=c(),et=a("div"),T(vd.$$.fragment),w0=c(),hu=a("p"),E0=n("Electra model with a token classification head on top."),$0=c(),mu=a("p"),F0=n("Both the discriminator and generator may be loaded into this model."),x0=c(),yd=a("p"),M0=n("This model inherits from "),Bc=a("a"),z0=n("FlaxPreTrainedModel"),q0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),j0=c(),Td=a("p"),C0=n(`This model is also a Flax Linen
`),bd=a("a"),P0=n("flax.nn.Module"),A0=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),L0=c(),uu=a("p"),O0=n("Finally, this model supports inherent JAX features such as:"),N0=c(),wo=a("ul"),fu=a("li"),wd=a("a"),I0=n("Just-In-Time (JIT) compilation"),D0=c(),gu=a("li"),Ed=a("a"),S0=n("Automatic Differentiation"),W0=c(),_u=a("li"),$d=a("a"),U0=n("Vectorization"),B0=c(),ku=a("li"),Fd=a("a"),R0=n("Parallelization"),H0=c(),io=a("div"),T(xd.$$.fragment),K0=c(),Bn=a("p"),Q0=n("The "),vu=a("code"),V0=n("FlaxElectraPreTrainedModel"),J0=n(" forward method, overrides the "),yu=a("code"),G0=n("__call__"),X0=n(" special method."),Y0=c(),T(Ca.$$.fragment),Z0=c(),T(Pa.$$.fragment),_g=c(),Rn=a("h2"),Aa=a("a"),Tu=a("span"),T(Md.$$.fragment),ex=c(),bu=a("span"),tx=n("FlaxElectraForQuestionAnswering"),kg=c(),ct=a("div"),T(zd.$$.fragment),ox=c(),Hn=a("p"),nx=n(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),wu=a("code"),sx=n("span start logits"),ax=n(" and "),Eu=a("code"),rx=n("span end logits"),ix=n(")."),lx=c(),qd=a("p"),dx=n("This model inherits from "),Rc=a("a"),cx=n("FlaxPreTrainedModel"),px=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hx=c(),jd=a("p"),mx=n(`This model is also a Flax Linen
`),Cd=a("a"),ux=n("flax.nn.Module"),fx=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),gx=c(),$u=a("p"),_x=n("Finally, this model supports inherent JAX features such as:"),kx=c(),Eo=a("ul"),Fu=a("li"),Pd=a("a"),vx=n("Just-In-Time (JIT) compilation"),yx=c(),xu=a("li"),Ad=a("a"),Tx=n("Automatic Differentiation"),bx=c(),Mu=a("li"),Ld=a("a"),wx=n("Vectorization"),Ex=c(),zu=a("li"),Od=a("a"),$x=n("Parallelization"),Fx=c(),lo=a("div"),T(Nd.$$.fragment),xx=c(),Kn=a("p"),Mx=n("The "),qu=a("code"),zx=n("FlaxElectraPreTrainedModel"),qx=n(" forward method, overrides the "),ju=a("code"),jx=n("__call__"),Cx=n(" special method."),Px=c(),T(La.$$.fragment),Ax=c(),T(Oa.$$.fragment),this.h()},l(o){const k=Gj('[data-svelte="svelte-1phssyn"]',document.head);d=r(k,"META",{name:!0,content:!0}),k.forEach(t),g=p(o),m=r(o,"H1",{class:!0});var Id=i(m);u=r(Id,"A",{id:!0,class:!0,href:!0});var Cu=i(u);v=r(Cu,"SPAN",{});var Pu=i(v);b(l.$$.fragment,Pu),Pu.forEach(t),Cu.forEach(t),h=p(Id),z=r(Id,"SPAN",{});var Au=i(z);Te=s(Au,"ELECTRA"),Au.forEach(t),Id.forEach(t),fe=p(o),W=r(o,"H2",{class:!0});var Dd=i(W);ae=r(Dd,"A",{id:!0,class:!0,href:!0});var Lu=i(ae);ee=r(Lu,"SPAN",{});var Ou=i(ee);b(M.$$.fragment,Ou),Ou.forEach(t),Lu.forEach(t),be=p(Dd),K=r(Dd,"SPAN",{});var Nu=i(K);we=s(Nu,"Overview"),Nu.forEach(t),Dd.forEach(t),ge=p(o),U=r(o,"P",{});var Sd=i(U);Ee=s(Sd,"The ELECTRA model was proposed in the paper "),de=r(Sd,"A",{href:!0,rel:!0});var Iu=i(de);Q=s(Iu,`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
Generators`),Iu.forEach(t),$e=s(Sd,`. ELECTRA is a new pretraining approach which trains two
transformer models: the generator and the discriminator. The generator\u2019s role is to replace tokens in a sequence, and
is therefore trained as a masked language model. The discriminator, which is the model we\u2019re interested in, tries to
identify which tokens were replaced by the generator in the sequence.`),Sd.forEach(t),_e=p(o),R=r(o,"P",{});var Du=i(R);Fe=s(Du,"The abstract from the paper is the following:"),Du.forEach(t),ke=p(o),H=r(o,"P",{});var Su=i(H);me=r(Su,"EM",{});var Wu=i(me);xe=s(Wu,`Masked language modeling (MLM) pretraining methods such as BERT corrupt the input by replacing some tokens with [MASK]
and then train a model to reconstruct the original tokens. While they produce good results when transferred to
downstream NLP tasks, they generally require large amounts of compute to be effective. As an alternative, we propose a
more sample-efficient pretraining task called replaced token detection. Instead of masking the input, our approach
corrupts it by replacing some tokens with plausible alternatives sampled from a small generator network. Then, instead
of training a model that predicts the original identities of the corrupted tokens, we train a discriminative model that
predicts whether each token in the corrupted input was replaced by a generator sample or not. Thorough experiments
demonstrate this new pretraining task is more efficient than MLM because the task is defined over all input tokens
rather than just the small subset that was masked out. As a result, the contextual representations learned by our
approach substantially outperform the ones learned by BERT given the same model size, data, and compute. The gains are
particularly strong for small models; for example, we train a model on one GPU for 4 days that outperforms GPT (trained
using 30x more compute) on the GLUE natural language understanding benchmark. Our approach also works well at scale,
where it performs comparably to RoBERTa and XLNet while using less than 1/4 of their compute and outperforms them when
using the same amount of compute.`),Wu.forEach(t),Su.forEach(t),oe=p(o),C=r(o,"P",{});var Uu=i(C);A=s(Uu,"Tips:"),Uu.forEach(t),ve=p(o),B=r(o,"UL",{});var Wd=i(B);ue=r(Wd,"LI",{});var Bu=i(ue);Me=s(Bu,`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),Bu.forEach(t),V=p(Wd),ne=r(Wd,"LI",{});var $o=i(ne);ze=s($o,"The ELECTRA checkpoints saved using "),P=r($o,"A",{href:!0,rel:!0});var Ru=i(P);qe=s(Ru,"Google Research\u2019s implementation"),Ru.forEach(t),J=s($o,`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),ce=r($o,"A",{href:!0});var Hu=i(ce);je=s(Hu,"ElectraForMaskedLM"),Hu.forEach(t),G=s($o,` model, and the generator may be loaded in the
`),pe=r($o,"A",{href:!0});var Ku=i(pe);Ce=s(Ku,"ElectraForPreTraining"),Ku.forEach(t),D=s($o,` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),$o.forEach(t),Wd.forEach(t),ye=p(o),S=r(o,"P",{});var Qn=i(S);Pe=s(Qn,"This model was contributed by "),Z=r(Qn,"A",{href:!0,rel:!0});var Qu=i(Z);L=s(Qu,"lysandre"),Qu.forEach(t),Ae=s(Qn,". The original code can be found "),O=r(Qn,"A",{href:!0,rel:!0});var Vu=i(O);Le=s(Vu,"here"),Vu.forEach(t),Oe=s(Qn,"."),Qn.forEach(t),y=p(o),q=r(o,"H2",{class:!0});var Ud=i(q);De=r(Ud,"A",{id:!0,class:!0,href:!0});var Ju=i(De);te=r(Ju,"SPAN",{});var Gu=i(te);b(We.$$.fragment,Gu),Gu.forEach(t),Ju.forEach(t),Qe=p(Ud),j=r(Ud,"SPAN",{});var Xu=i(j);Ve=s(Xu,"ElectraConfig"),Xu.forEach(t),Ud.forEach(t),Ke=p(o),he=r(o,"DIV",{class:!0});var Fo=i(he);b(Ue.$$.fragment,Fo),Je=p(Fo),N=r(Fo,"P",{});var xo=i(N);X=s(xo,"This is the configuration class to store the configuration of a "),Re=r(xo,"A",{href:!0});var Yu=i(Re);Ge=s(Yu,"ElectraModel"),Yu.forEach(t),Y=s(xo," or a "),He=r(xo,"A",{href:!0});var Zu=i(He);Xe=s(Zu,"TFElectraModel"),Zu.forEach(t),Ne=s(xo,`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),Be=r(xo,"A",{href:!0,rel:!0});var ef=i(Be);se=s(ef,"google/electra-small-discriminator"),ef.forEach(t),Ye=s(xo," architecture."),xo.forEach(t),R_=p(Fo),Bo=r(Fo,"P",{});var Vn=i(Bo);H_=s(Vn,"Configuration objects inherit from "),Xd=r(Vn,"A",{href:!0});var tf=i(Xd);K_=s(tf,"PretrainedConfig"),tf.forEach(t),Q_=s(Vn,` and can be used to control the model outputs. Read the
documentation from `),Yd=r(Vn,"A",{href:!0});var of=i(Yd);V_=s(of,"PretrainedConfig"),of.forEach(t),J_=s(Vn," for more information."),Vn.forEach(t),G_=p(Fo),b(Xn.$$.fragment,Fo),Fo.forEach(t),yf=p(o),Ro=r(o,"H2",{class:!0});var Bd=i(Ro);Yn=r(Bd,"A",{id:!0,class:!0,href:!0});var nf=i(Yn);Tp=r(nf,"SPAN",{});var sf=i(Tp);b(ir.$$.fragment,sf),sf.forEach(t),nf.forEach(t),X_=p(Bd),bp=r(Bd,"SPAN",{});var af=i(bp);Y_=s(af,"ElectraTokenizer"),af.forEach(t),Bd.forEach(t),Tf=p(o),tt=r(o,"DIV",{class:!0});var vt=i(tt);b(lr.$$.fragment,vt),Z_=p(vt),wp=r(vt,"P",{});var rf=i(wp);ek=s(rf,"Construct a BERT tokenizer. Based on WordPiece."),rf.forEach(t),tk=p(vt),dr=r(vt,"P",{});var Rd=i(dr);ok=s(Rd,"This tokenizer inherits from "),Zd=r(Rd,"A",{href:!0});var lf=i(Zd);nk=s(lf,"PreTrainedTokenizer"),lf.forEach(t),sk=s(Rd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rd.forEach(t),ak=p(vt),zo=r(vt,"DIV",{class:!0});var Jn=i(zo);b(cr.$$.fragment,Jn),rk=p(Jn),Ep=r(Jn,"P",{});var df=i(Ep);ik=s(df,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),df.forEach(t),lk=p(Jn),pr=r(Jn,"UL",{});var Hd=i(pr);ec=r(Hd,"LI",{});var Hc=i(ec);dk=s(Hc,"single sequence: "),$p=r(Hc,"CODE",{});var cf=i($p);ck=s(cf,"[CLS] X [SEP]"),cf.forEach(t),Hc.forEach(t),pk=p(Hd),tc=r(Hd,"LI",{});var Kc=i(tc);hk=s(Kc,"pair of sequences: "),Fp=r(Kc,"CODE",{});var pf=i(Fp);mk=s(pf,"[CLS] A [SEP] B [SEP]"),pf.forEach(t),Kc.forEach(t),Hd.forEach(t),Jn.forEach(t),uk=p(vt),Zn=r(vt,"DIV",{class:!0});var Kd=i(Zn);b(hr.$$.fragment,Kd),fk=p(Kd),xp=r(Kd,"P",{});var hf=i(xp);gk=s(hf,"Converts a sequence of tokens (string) in a single string."),hf.forEach(t),Kd.forEach(t),_k=p(vt),Kt=r(vt,"DIV",{class:!0});var Mo=i(Kt);b(mr.$$.fragment,Mo),kk=p(Mo),Mp=r(Mo,"P",{});var mf=i(Mp);vk=s(mf,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),mf.forEach(t),yk=p(Mo),b(es.$$.fragment,Mo),Tk=p(Mo),Ho=r(Mo,"P",{});var Gn=i(Ho);bk=s(Gn,"If "),zp=r(Gn,"CODE",{});var uf=i(zp);wk=s(uf,"token_ids_1"),uf.forEach(t),Ek=s(Gn," is "),qp=r(Gn,"CODE",{});var ff=i(qp);$k=s(ff,"None"),ff.forEach(t),Fk=s(Gn,", this method only returns the first portion of the mask (0s)."),Gn.forEach(t),Mo.forEach(t),xk=p(vt),ts=r(vt,"DIV",{class:!0});var Qd=i(ts);b(ur.$$.fragment,Qd),Mk=p(Qd),fr=r(Qd,"P",{});var Vd=i(fr);zk=s(Vd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),jp=r(Vd,"CODE",{});var gf=i(jp);qk=s(gf,"prepare_for_model"),gf.forEach(t),jk=s(Vd," method."),Vd.forEach(t),Qd.forEach(t),vt.forEach(t),bf=p(o),Ko=r(o,"H2",{class:!0});var Jd=i(Ko);os=r(Jd,"A",{id:!0,class:!0,href:!0});var _f=i(os);Cp=r(_f,"SPAN",{});var kf=i(Cp);b(gr.$$.fragment,kf),kf.forEach(t),_f.forEach(t),Ck=p(Jd),Pp=r(Jd,"SPAN",{});var vf=i(Pp);Pk=s(vf,"ElectraTokenizerFast"),vf.forEach(t),Jd.forEach(t),wf=p(o),bt=r(o,"DIV",{class:!0});var Ht=i(bt);b(_r.$$.fragment,Ht),Ak=p(Ht),kr=r(Ht,"P",{});var Gd=i(kr);Lk=s(Gd,"Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),Ap=r(Gd,"EM",{});var Nx=i(Ap);Ok=s(Nx,"tokenizers"),Nx.forEach(t),Nk=s(Gd," library). Based on WordPiece."),Gd.forEach(t),Ik=p(Ht),vr=r(Ht,"P",{});var yg=i(vr);Dk=s(yg,"This tokenizer inherits from "),oc=r(yg,"A",{href:!0});var Ix=i(oc);Sk=s(Ix,"PreTrainedTokenizerFast"),Ix.forEach(t),Wk=s(yg,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),yg.forEach(t),Uk=p(Ht),qo=r(Ht,"DIV",{class:!0});var Qc=i(qo);b(yr.$$.fragment,Qc),Bk=p(Qc),Lp=r(Qc,"P",{});var Dx=i(Lp);Rk=s(Dx,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A ELECTRA sequence has the following format:`),Dx.forEach(t),Hk=p(Qc),Tr=r(Qc,"UL",{});var Tg=i(Tr);nc=r(Tg,"LI",{});var Lx=i(nc);Kk=s(Lx,"single sequence: "),Op=r(Lx,"CODE",{});var Sx=i(Op);Qk=s(Sx,"[CLS] X [SEP]"),Sx.forEach(t),Lx.forEach(t),Vk=p(Tg),sc=r(Tg,"LI",{});var Ox=i(sc);Jk=s(Ox,"pair of sequences: "),Np=r(Ox,"CODE",{});var Wx=i(Np);Gk=s(Wx,"[CLS] A [SEP] B [SEP]"),Wx.forEach(t),Ox.forEach(t),Tg.forEach(t),Qc.forEach(t),Xk=p(Ht),Qt=r(Ht,"DIV",{class:!0});var Na=i(Qt);b(br.$$.fragment,Na),Yk=p(Na),Ip=r(Na,"P",{});var Ux=i(Ip);Zk=s(Ux,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A ELECTRA"),Ux.forEach(t),ev=p(Na),b(ns.$$.fragment,Na),tv=p(Na),Qo=r(Na,"P",{});var Vc=i(Qo);ov=s(Vc,"If "),Dp=r(Vc,"CODE",{});var Bx=i(Dp);nv=s(Bx,"token_ids_1"),Bx.forEach(t),sv=s(Vc," is "),Sp=r(Vc,"CODE",{});var Rx=i(Sp);av=s(Rx,"None"),Rx.forEach(t),rv=s(Vc,", this method only returns the first portion of the mask (0s)."),Vc.forEach(t),Na.forEach(t),Ht.forEach(t),Ef=p(o),Vo=r(o,"H2",{class:!0});var bg=i(Vo);ss=r(bg,"A",{id:!0,class:!0,href:!0});var Hx=i(ss);Wp=r(Hx,"SPAN",{});var Kx=i(Wp);b(wr.$$.fragment,Kx),Kx.forEach(t),Hx.forEach(t),iv=p(bg),Up=r(bg,"SPAN",{});var Qx=i(Up);lv=s(Qx,"Electra specific outputs"),Qx.forEach(t),bg.forEach(t),$f=p(o),Jo=r(o,"DIV",{class:!0});var wg=i(Jo);b(Er.$$.fragment,wg),dv=p(wg),$r=r(wg,"P",{});var Eg=i($r);cv=s(Eg,"Output type of "),ac=r(Eg,"A",{href:!0});var Vx=i(ac);pv=s(Vx,"ElectraForPreTraining"),Vx.forEach(t),hv=s(Eg,"."),Eg.forEach(t),wg.forEach(t),Ff=p(o),Go=r(o,"DIV",{class:!0});var $g=i(Go);b(Fr.$$.fragment,$g),mv=p($g),xr=r($g,"P",{});var Fg=i(xr);uv=s(Fg,"Output type of "),rc=r(Fg,"A",{href:!0});var Jx=i(rc);fv=s(Jx,"TFElectraForPreTraining"),Jx.forEach(t),gv=s(Fg,"."),Fg.forEach(t),$g.forEach(t),xf=p(o),Xo=r(o,"H2",{class:!0});var xg=i(Xo);as=r(xg,"A",{id:!0,class:!0,href:!0});var Gx=i(as);Bp=r(Gx,"SPAN",{});var Xx=i(Bp);b(Mr.$$.fragment,Xx),Xx.forEach(t),Gx.forEach(t),_v=p(xg),Rp=r(xg,"SPAN",{});var Yx=i(Rp);kv=s(Yx,"ElectraModel"),Yx.forEach(t),xg.forEach(t),Mf=p(o),wt=r(o,"DIV",{class:!0});var jo=i(wt);b(zr.$$.fragment,jo),vv=p(jo),Hp=r(jo,"P",{});var Zx=i(Hp);yv=s(Zx,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),Zx.forEach(t),Tv=p(jo),qr=r(jo,"P",{});var Mg=i(qr);bv=s(Mg,"This model inherits from "),ic=r(Mg,"A",{href:!0});var eM=i(ic);wv=s(eM,"PreTrainedModel"),eM.forEach(t),Ev=s(Mg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mg.forEach(t),$v=p(jo),jr=r(jo,"P",{});var zg=i(jr);Fv=s(zg,"This model is also a PyTorch "),Cr=r(zg,"A",{href:!0,rel:!0});var tM=i(Cr);xv=s(tM,"torch.nn.Module"),tM.forEach(t),Mv=s(zg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zg.forEach(t),zv=p(jo),Vt=r(jo,"DIV",{class:!0});var Ia=i(Vt);b(Pr.$$.fragment,Ia),qv=p(Ia),Yo=r(Ia,"P",{});var Jc=i(Yo);jv=s(Jc,"The "),lc=r(Jc,"A",{href:!0});var oM=i(lc);Cv=s(oM,"ElectraModel"),oM.forEach(t),Pv=s(Jc," forward method, overrides the "),Kp=r(Jc,"CODE",{});var nM=i(Kp);Av=s(nM,"__call__"),nM.forEach(t),Lv=s(Jc," special method."),Jc.forEach(t),Ov=p(Ia),b(rs.$$.fragment,Ia),Nv=p(Ia),b(is.$$.fragment,Ia),Ia.forEach(t),jo.forEach(t),zf=p(o),Zo=r(o,"H2",{class:!0});var qg=i(Zo);ls=r(qg,"A",{id:!0,class:!0,href:!0});var sM=i(ls);Qp=r(sM,"SPAN",{});var aM=i(Qp);b(Ar.$$.fragment,aM),aM.forEach(t),sM.forEach(t),Iv=p(qg),Vp=r(qg,"SPAN",{});var rM=i(Vp);Dv=s(rM,"ElectraForPreTraining"),rM.forEach(t),qg.forEach(t),qf=p(o),ht=r(o,"DIV",{class:!0});var co=i(ht);b(Lr.$$.fragment,co),Sv=p(co),Jp=r(co,"P",{});var iM=i(Jp);Wv=s(iM,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),iM.forEach(t),Uv=p(co),Gp=r(co,"P",{});var lM=i(Gp);Bv=s(lM,"It is recommended to load the discriminator checkpoint into that model."),lM.forEach(t),Rv=p(co),Or=r(co,"P",{});var jg=i(Or);Hv=s(jg,"This model inherits from "),dc=r(jg,"A",{href:!0});var dM=i(dc);Kv=s(dM,"PreTrainedModel"),dM.forEach(t),Qv=s(jg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jg.forEach(t),Vv=p(co),Nr=r(co,"P",{});var Cg=i(Nr);Jv=s(Cg,"This model is also a PyTorch "),Ir=r(Cg,"A",{href:!0,rel:!0});var cM=i(Ir);Gv=s(cM,"torch.nn.Module"),cM.forEach(t),Xv=s(Cg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cg.forEach(t),Yv=p(co),Jt=r(co,"DIV",{class:!0});var Da=i(Jt);b(Dr.$$.fragment,Da),Zv=p(Da),en=r(Da,"P",{});var Gc=i(en);ey=s(Gc,"The "),cc=r(Gc,"A",{href:!0});var pM=i(cc);ty=s(pM,"ElectraForPreTraining"),pM.forEach(t),oy=s(Gc," forward method, overrides the "),Xp=r(Gc,"CODE",{});var hM=i(Xp);ny=s(hM,"__call__"),hM.forEach(t),sy=s(Gc," special method."),Gc.forEach(t),ay=p(Da),b(ds.$$.fragment,Da),ry=p(Da),b(cs.$$.fragment,Da),Da.forEach(t),co.forEach(t),jf=p(o),tn=r(o,"H2",{class:!0});var Pg=i(tn);ps=r(Pg,"A",{id:!0,class:!0,href:!0});var mM=i(ps);Yp=r(mM,"SPAN",{});var uM=i(Yp);b(Sr.$$.fragment,uM),uM.forEach(t),mM.forEach(t),iy=p(Pg),Zp=r(Pg,"SPAN",{});var fM=i(Zp);ly=s(fM,"ElectraForCausalLM"),fM.forEach(t),Pg.forEach(t),Cf=p(o),Et=r(o,"DIV",{class:!0});var Co=i(Et);b(Wr.$$.fragment,Co),dy=p(Co),Ur=r(Co,"P",{});var Ag=i(Ur);cy=s(Ag,"ELECTRA Model with a "),eh=r(Ag,"CODE",{});var gM=i(eh);py=s(gM,"language modeling"),gM.forEach(t),hy=s(Ag," head on top for CLM fine-tuning."),Ag.forEach(t),my=p(Co),Br=r(Co,"P",{});var Lg=i(Br);uy=s(Lg,"This model inherits from "),pc=r(Lg,"A",{href:!0});var _M=i(pc);fy=s(_M,"PreTrainedModel"),_M.forEach(t),gy=s(Lg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lg.forEach(t),_y=p(Co),Rr=r(Co,"P",{});var Og=i(Rr);ky=s(Og,"This model is also a PyTorch "),Hr=r(Og,"A",{href:!0,rel:!0});var kM=i(Hr);vy=s(kM,"torch.nn.Module"),kM.forEach(t),yy=s(Og,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Og.forEach(t),Ty=p(Co),Gt=r(Co,"DIV",{class:!0});var Sa=i(Gt);b(Kr.$$.fragment,Sa),by=p(Sa),on=r(Sa,"P",{});var Xc=i(on);wy=s(Xc,"The "),hc=r(Xc,"A",{href:!0});var vM=i(hc);Ey=s(vM,"ElectraForCausalLM"),vM.forEach(t),$y=s(Xc," forward method, overrides the "),th=r(Xc,"CODE",{});var yM=i(th);Fy=s(yM,"__call__"),yM.forEach(t),xy=s(Xc," special method."),Xc.forEach(t),My=p(Sa),b(hs.$$.fragment,Sa),zy=p(Sa),b(ms.$$.fragment,Sa),Sa.forEach(t),Co.forEach(t),Pf=p(o),nn=r(o,"H2",{class:!0});var Ng=i(nn);us=r(Ng,"A",{id:!0,class:!0,href:!0});var TM=i(us);oh=r(TM,"SPAN",{});var bM=i(oh);b(Qr.$$.fragment,bM),bM.forEach(t),TM.forEach(t),qy=p(Ng),nh=r(Ng,"SPAN",{});var wM=i(nh);jy=s(wM,"ElectraForMaskedLM"),wM.forEach(t),Ng.forEach(t),Af=p(o),mt=r(o,"DIV",{class:!0});var po=i(mt);b(Vr.$$.fragment,po),Cy=p(po),sh=r(po,"P",{});var EM=i(sh);Py=s(EM,"Electra model with a language modeling head on top."),EM.forEach(t),Ay=p(po),ah=r(po,"P",{});var $M=i(ah);Ly=s($M,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),$M.forEach(t),Oy=p(po),Jr=r(po,"P",{});var Ig=i(Jr);Ny=s(Ig,"This model inherits from "),mc=r(Ig,"A",{href:!0});var FM=i(mc);Iy=s(FM,"PreTrainedModel"),FM.forEach(t),Dy=s(Ig,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ig.forEach(t),Sy=p(po),Gr=r(po,"P",{});var Dg=i(Gr);Wy=s(Dg,"This model is also a PyTorch "),Xr=r(Dg,"A",{href:!0,rel:!0});var xM=i(Xr);Uy=s(xM,"torch.nn.Module"),xM.forEach(t),By=s(Dg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dg.forEach(t),Ry=p(po),Mt=r(po,"DIV",{class:!0});var Po=i(Mt);b(Yr.$$.fragment,Po),Hy=p(Po),sn=r(Po,"P",{});var Yc=i(sn);Ky=s(Yc,"The "),uc=r(Yc,"A",{href:!0});var MM=i(uc);Qy=s(MM,"ElectraForMaskedLM"),MM.forEach(t),Vy=s(Yc," forward method, overrides the "),rh=r(Yc,"CODE",{});var zM=i(rh);Jy=s(zM,"__call__"),zM.forEach(t),Gy=s(Yc," special method."),Yc.forEach(t),Xy=p(Po),b(fs.$$.fragment,Po),Yy=p(Po),b(gs.$$.fragment,Po),Zy=p(Po),b(_s.$$.fragment,Po),Po.forEach(t),po.forEach(t),Lf=p(o),an=r(o,"H2",{class:!0});var Sg=i(an);ks=r(Sg,"A",{id:!0,class:!0,href:!0});var qM=i(ks);ih=r(qM,"SPAN",{});var jM=i(ih);b(Zr.$$.fragment,jM),jM.forEach(t),qM.forEach(t),eT=p(Sg),lh=r(Sg,"SPAN",{});var CM=i(lh);tT=s(CM,"ElectraForSequenceClassification"),CM.forEach(t),Sg.forEach(t),Of=p(o),$t=r(o,"DIV",{class:!0});var Ao=i($t);b(ei.$$.fragment,Ao),oT=p(Ao),dh=r(Ao,"P",{});var PM=i(dh);nT=s(PM,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),PM.forEach(t),sT=p(Ao),ti=r(Ao,"P",{});var Wg=i(ti);aT=s(Wg,"This model inherits from "),fc=r(Wg,"A",{href:!0});var AM=i(fc);rT=s(AM,"PreTrainedModel"),AM.forEach(t),iT=s(Wg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wg.forEach(t),lT=p(Ao),oi=r(Ao,"P",{});var Ug=i(oi);dT=s(Ug,"This model is also a PyTorch "),ni=r(Ug,"A",{href:!0,rel:!0});var LM=i(ni);cT=s(LM,"torch.nn.Module"),LM.forEach(t),pT=s(Ug,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ug.forEach(t),hT=p(Ao),pt=r(Ao,"DIV",{class:!0});var Lt=i(pt);b(si.$$.fragment,Lt),mT=p(Lt),rn=r(Lt,"P",{});var Zc=i(rn);uT=s(Zc,"The "),gc=r(Zc,"A",{href:!0});var OM=i(gc);fT=s(OM,"ElectraForSequenceClassification"),OM.forEach(t),gT=s(Zc," forward method, overrides the "),ch=r(Zc,"CODE",{});var NM=i(ch);_T=s(NM,"__call__"),NM.forEach(t),kT=s(Zc," special method."),Zc.forEach(t),vT=p(Lt),b(vs.$$.fragment,Lt),yT=p(Lt),b(ys.$$.fragment,Lt),TT=p(Lt),b(Ts.$$.fragment,Lt),bT=p(Lt),b(bs.$$.fragment,Lt),wT=p(Lt),b(ws.$$.fragment,Lt),Lt.forEach(t),Ao.forEach(t),Nf=p(o),ln=r(o,"H2",{class:!0});var Bg=i(ln);Es=r(Bg,"A",{id:!0,class:!0,href:!0});var IM=i(Es);ph=r(IM,"SPAN",{});var DM=i(ph);b(ai.$$.fragment,DM),DM.forEach(t),IM.forEach(t),ET=p(Bg),hh=r(Bg,"SPAN",{});var SM=i(hh);$T=s(SM,"ElectraForMultipleChoice"),SM.forEach(t),Bg.forEach(t),If=p(o),Ft=r(o,"DIV",{class:!0});var Lo=i(Ft);b(ri.$$.fragment,Lo),FT=p(Lo),mh=r(Lo,"P",{});var WM=i(mh);xT=s(WM,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),WM.forEach(t),MT=p(Lo),ii=r(Lo,"P",{});var Rg=i(ii);zT=s(Rg,"This model inherits from "),_c=r(Rg,"A",{href:!0});var UM=i(_c);qT=s(UM,"PreTrainedModel"),UM.forEach(t),jT=s(Rg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rg.forEach(t),CT=p(Lo),li=r(Lo,"P",{});var Hg=i(li);PT=s(Hg,"This model is also a PyTorch "),di=r(Hg,"A",{href:!0,rel:!0});var BM=i(di);AT=s(BM,"torch.nn.Module"),BM.forEach(t),LT=s(Hg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hg.forEach(t),OT=p(Lo),Xt=r(Lo,"DIV",{class:!0});var Wa=i(Xt);b(ci.$$.fragment,Wa),NT=p(Wa),dn=r(Wa,"P",{});var ep=i(dn);IT=s(ep,"The "),kc=r(ep,"A",{href:!0});var RM=i(kc);DT=s(RM,"ElectraForMultipleChoice"),RM.forEach(t),ST=s(ep," forward method, overrides the "),uh=r(ep,"CODE",{});var HM=i(uh);WT=s(HM,"__call__"),HM.forEach(t),UT=s(ep," special method."),ep.forEach(t),BT=p(Wa),b($s.$$.fragment,Wa),RT=p(Wa),b(Fs.$$.fragment,Wa),Wa.forEach(t),Lo.forEach(t),Df=p(o),cn=r(o,"H2",{class:!0});var Kg=i(cn);xs=r(Kg,"A",{id:!0,class:!0,href:!0});var KM=i(xs);fh=r(KM,"SPAN",{});var QM=i(fh);b(pi.$$.fragment,QM),QM.forEach(t),KM.forEach(t),HT=p(Kg),gh=r(Kg,"SPAN",{});var VM=i(gh);KT=s(VM,"ElectraForTokenClassification"),VM.forEach(t),Kg.forEach(t),Sf=p(o),ut=r(o,"DIV",{class:!0});var ho=i(ut);b(hi.$$.fragment,ho),QT=p(ho),_h=r(ho,"P",{});var JM=i(_h);VT=s(JM,"Electra model with a token classification head on top."),JM.forEach(t),JT=p(ho),kh=r(ho,"P",{});var GM=i(kh);GT=s(GM,"Both the discriminator and generator may be loaded into this model."),GM.forEach(t),XT=p(ho),mi=r(ho,"P",{});var Qg=i(mi);YT=s(Qg,"This model inherits from "),vc=r(Qg,"A",{href:!0});var XM=i(vc);ZT=s(XM,"PreTrainedModel"),XM.forEach(t),eb=s(Qg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qg.forEach(t),tb=p(ho),ui=r(ho,"P",{});var Vg=i(ui);ob=s(Vg,"This model is also a PyTorch "),fi=r(Vg,"A",{href:!0,rel:!0});var YM=i(fi);nb=s(YM,"torch.nn.Module"),YM.forEach(t),sb=s(Vg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vg.forEach(t),ab=p(ho),zt=r(ho,"DIV",{class:!0});var Oo=i(zt);b(gi.$$.fragment,Oo),rb=p(Oo),pn=r(Oo,"P",{});var tp=i(pn);ib=s(tp,"The "),yc=r(tp,"A",{href:!0});var ZM=i(yc);lb=s(ZM,"ElectraForTokenClassification"),ZM.forEach(t),db=s(tp," forward method, overrides the "),vh=r(tp,"CODE",{});var ez=i(vh);cb=s(ez,"__call__"),ez.forEach(t),pb=s(tp," special method."),tp.forEach(t),hb=p(Oo),b(Ms.$$.fragment,Oo),mb=p(Oo),b(zs.$$.fragment,Oo),ub=p(Oo),b(qs.$$.fragment,Oo),Oo.forEach(t),ho.forEach(t),Wf=p(o),hn=r(o,"H2",{class:!0});var Jg=i(hn);js=r(Jg,"A",{id:!0,class:!0,href:!0});var tz=i(js);yh=r(tz,"SPAN",{});var oz=i(yh);b(_i.$$.fragment,oz),oz.forEach(t),tz.forEach(t),fb=p(Jg),Th=r(Jg,"SPAN",{});var nz=i(Th);gb=s(nz,"ElectraForQuestionAnswering"),nz.forEach(t),Jg.forEach(t),Uf=p(o),xt=r(o,"DIV",{class:!0});var No=i(xt);b(ki.$$.fragment,No),_b=p(No),mn=r(No,"P",{});var op=i(mn);kb=s(op,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),bh=r(op,"CODE",{});var sz=i(bh);vb=s(sz,"span start logits"),sz.forEach(t),yb=s(op," and "),wh=r(op,"CODE",{});var az=i(wh);Tb=s(az,"span end logits"),az.forEach(t),bb=s(op,")."),op.forEach(t),wb=p(No),vi=r(No,"P",{});var Gg=i(vi);Eb=s(Gg,"This model inherits from "),Tc=r(Gg,"A",{href:!0});var rz=i(Tc);$b=s(rz,"PreTrainedModel"),rz.forEach(t),Fb=s(Gg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gg.forEach(t),xb=p(No),yi=r(No,"P",{});var Xg=i(yi);Mb=s(Xg,"This model is also a PyTorch "),Ti=r(Xg,"A",{href:!0,rel:!0});var iz=i(Ti);zb=s(iz,"torch.nn.Module"),iz.forEach(t),qb=s(Xg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xg.forEach(t),jb=p(No),qt=r(No,"DIV",{class:!0});var Io=i(qt);b(bi.$$.fragment,Io),Cb=p(Io),un=r(Io,"P",{});var np=i(un);Pb=s(np,"The "),bc=r(np,"A",{href:!0});var lz=i(bc);Ab=s(lz,"ElectraForQuestionAnswering"),lz.forEach(t),Lb=s(np," forward method, overrides the "),Eh=r(np,"CODE",{});var dz=i(Eh);Ob=s(dz,"__call__"),dz.forEach(t),Nb=s(np," special method."),np.forEach(t),Ib=p(Io),b(Cs.$$.fragment,Io),Db=p(Io),b(Ps.$$.fragment,Io),Sb=p(Io),b(As.$$.fragment,Io),Io.forEach(t),No.forEach(t),Bf=p(o),fn=r(o,"H2",{class:!0});var Yg=i(fn);Ls=r(Yg,"A",{id:!0,class:!0,href:!0});var cz=i(Ls);$h=r(cz,"SPAN",{});var pz=i($h);b(wi.$$.fragment,pz),pz.forEach(t),cz.forEach(t),Wb=p(Yg),Fh=r(Yg,"SPAN",{});var hz=i(Fh);Ub=s(hz,"TFElectraModel"),hz.forEach(t),Yg.forEach(t),Rf=p(o),ft=r(o,"DIV",{class:!0});var mo=i(ft);b(Ei.$$.fragment,mo),Bb=p(mo),xh=r(mo,"P",{});var mz=i(xh);Rb=s(mz,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),mz.forEach(t),Hb=p(mo),$i=r(mo,"P",{});var Zg=i($i);Kb=s(Zg,"This model inherits from "),wc=r(Zg,"A",{href:!0});var uz=i(wc);Qb=s(uz,"TFPreTrainedModel"),uz.forEach(t),Vb=s(Zg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zg.forEach(t),Jb=p(mo),Fi=r(mo,"P",{});var e_=i(Fi);Gb=s(e_,"This model is also a "),xi=r(e_,"A",{href:!0,rel:!0});var fz=i(xi);Xb=s(fz,"tf.keras.Model"),fz.forEach(t),Yb=s(e_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),e_.forEach(t),Zb=p(mo),b(Os.$$.fragment,mo),ew=p(mo),Yt=r(mo,"DIV",{class:!0});var Ua=i(Yt);b(Mi.$$.fragment,Ua),tw=p(Ua),gn=r(Ua,"P",{});var sp=i(gn);ow=s(sp,"The "),Ec=r(sp,"A",{href:!0});var gz=i(Ec);nw=s(gz,"TFElectraModel"),gz.forEach(t),sw=s(sp," forward method, overrides the "),Mh=r(sp,"CODE",{});var _z=i(Mh);aw=s(_z,"__call__"),_z.forEach(t),rw=s(sp," special method."),sp.forEach(t),iw=p(Ua),b(Ns.$$.fragment,Ua),lw=p(Ua),b(Is.$$.fragment,Ua),Ua.forEach(t),mo.forEach(t),Hf=p(o),_n=r(o,"H2",{class:!0});var t_=i(_n);Ds=r(t_,"A",{id:!0,class:!0,href:!0});var kz=i(Ds);zh=r(kz,"SPAN",{});var vz=i(zh);b(zi.$$.fragment,vz),vz.forEach(t),kz.forEach(t),dw=p(t_),qh=r(t_,"SPAN",{});var yz=i(qh);cw=s(yz,"TFElectraForPreTraining"),yz.forEach(t),t_.forEach(t),Kf=p(o),ot=r(o,"DIV",{class:!0});var Ot=i(ot);b(qi.$$.fragment,Ot),pw=p(Ot),jh=r(Ot,"P",{});var Tz=i(jh);hw=s(Tz,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),Tz.forEach(t),mw=p(Ot),Ch=r(Ot,"P",{});var bz=i(Ch);uw=s(bz,`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),bz.forEach(t),fw=p(Ot),ji=r(Ot,"P",{});var o_=i(ji);gw=s(o_,"This model inherits from "),$c=r(o_,"A",{href:!0});var wz=i($c);_w=s(wz,"TFPreTrainedModel"),wz.forEach(t),kw=s(o_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),o_.forEach(t),vw=p(Ot),Ci=r(Ot,"P",{});var n_=i(Ci);yw=s(n_,"This model is also a "),Pi=r(n_,"A",{href:!0,rel:!0});var Ez=i(Pi);Tw=s(Ez,"tf.keras.Model"),Ez.forEach(t),bw=s(n_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),n_.forEach(t),ww=p(Ot),b(Ss.$$.fragment,Ot),Ew=p(Ot),Zt=r(Ot,"DIV",{class:!0});var Ba=i(Zt);b(Ai.$$.fragment,Ba),$w=p(Ba),kn=r(Ba,"P",{});var ap=i(kn);Fw=s(ap,"The "),Fc=r(ap,"A",{href:!0});var $z=i(Fc);xw=s($z,"TFElectraForPreTraining"),$z.forEach(t),Mw=s(ap," forward method, overrides the "),Ph=r(ap,"CODE",{});var Fz=i(Ph);zw=s(Fz,"__call__"),Fz.forEach(t),qw=s(ap," special method."),ap.forEach(t),jw=p(Ba),b(Ws.$$.fragment,Ba),Cw=p(Ba),b(Us.$$.fragment,Ba),Ba.forEach(t),Ot.forEach(t),Qf=p(o),vn=r(o,"H2",{class:!0});var s_=i(vn);Bs=r(s_,"A",{id:!0,class:!0,href:!0});var xz=i(Bs);Ah=r(xz,"SPAN",{});var Mz=i(Ah);b(Li.$$.fragment,Mz),Mz.forEach(t),xz.forEach(t),Pw=p(s_),Lh=r(s_,"SPAN",{});var zz=i(Lh);Aw=s(zz,"TFElectraForMaskedLM"),zz.forEach(t),s_.forEach(t),Vf=p(o),nt=r(o,"DIV",{class:!0});var Nt=i(nt);b(Oi.$$.fragment,Nt),Lw=p(Nt),Oh=r(Nt,"P",{});var qz=i(Oh);Ow=s(qz,"Electra model with a language modeling head on top."),qz.forEach(t),Nw=p(Nt),Nh=r(Nt,"P",{});var jz=i(Nh);Iw=s(jz,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),jz.forEach(t),Dw=p(Nt),Ni=r(Nt,"P",{});var a_=i(Ni);Sw=s(a_,"This model inherits from "),xc=r(a_,"A",{href:!0});var Cz=i(xc);Ww=s(Cz,"TFPreTrainedModel"),Cz.forEach(t),Uw=s(a_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),a_.forEach(t),Bw=p(Nt),Ii=r(Nt,"P",{});var r_=i(Ii);Rw=s(r_,"This model is also a "),Di=r(r_,"A",{href:!0,rel:!0});var Pz=i(Di);Hw=s(Pz,"tf.keras.Model"),Pz.forEach(t),Kw=s(r_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),r_.forEach(t),Qw=p(Nt),b(Rs.$$.fragment,Nt),Vw=p(Nt),jt=r(Nt,"DIV",{class:!0});var Do=i(jt);b(Si.$$.fragment,Do),Jw=p(Do),yn=r(Do,"P",{});var rp=i(yn);Gw=s(rp,"The "),Mc=r(rp,"A",{href:!0});var Az=i(Mc);Xw=s(Az,"TFElectraForMaskedLM"),Az.forEach(t),Yw=s(rp," forward method, overrides the "),Ih=r(rp,"CODE",{});var Lz=i(Ih);Zw=s(Lz,"__call__"),Lz.forEach(t),eE=s(rp," special method."),rp.forEach(t),tE=p(Do),b(Hs.$$.fragment,Do),oE=p(Do),b(Ks.$$.fragment,Do),nE=p(Do),b(Qs.$$.fragment,Do),Do.forEach(t),Nt.forEach(t),Jf=p(o),Tn=r(o,"H2",{class:!0});var i_=i(Tn);Vs=r(i_,"A",{id:!0,class:!0,href:!0});var Oz=i(Vs);Dh=r(Oz,"SPAN",{});var Nz=i(Dh);b(Wi.$$.fragment,Nz),Nz.forEach(t),Oz.forEach(t),sE=p(i_),Sh=r(i_,"SPAN",{});var Iz=i(Sh);aE=s(Iz,"TFElectraForSequenceClassification"),Iz.forEach(t),i_.forEach(t),Gf=p(o),gt=r(o,"DIV",{class:!0});var uo=i(gt);b(Ui.$$.fragment,uo),rE=p(uo),Wh=r(uo,"P",{});var Dz=i(Wh);iE=s(Dz,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Dz.forEach(t),lE=p(uo),Bi=r(uo,"P",{});var l_=i(Bi);dE=s(l_,"This model inherits from "),zc=r(l_,"A",{href:!0});var Sz=i(zc);cE=s(Sz,"TFPreTrainedModel"),Sz.forEach(t),pE=s(l_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),l_.forEach(t),hE=p(uo),Ri=r(uo,"P",{});var d_=i(Ri);mE=s(d_,"This model is also a "),Hi=r(d_,"A",{href:!0,rel:!0});var Wz=i(Hi);uE=s(Wz,"tf.keras.Model"),Wz.forEach(t),fE=s(d_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),d_.forEach(t),gE=p(uo),b(Js.$$.fragment,uo),_E=p(uo),Ct=r(uo,"DIV",{class:!0});var So=i(Ct);b(Ki.$$.fragment,So),kE=p(So),bn=r(So,"P",{});var ip=i(bn);vE=s(ip,"The "),qc=r(ip,"A",{href:!0});var Uz=i(qc);yE=s(Uz,"TFElectraForSequenceClassification"),Uz.forEach(t),TE=s(ip," forward method, overrides the "),Uh=r(ip,"CODE",{});var Bz=i(Uh);bE=s(Bz,"__call__"),Bz.forEach(t),wE=s(ip," special method."),ip.forEach(t),EE=p(So),b(Gs.$$.fragment,So),$E=p(So),b(Xs.$$.fragment,So),FE=p(So),b(Ys.$$.fragment,So),So.forEach(t),uo.forEach(t),Xf=p(o),wn=r(o,"H2",{class:!0});var c_=i(wn);Zs=r(c_,"A",{id:!0,class:!0,href:!0});var Rz=i(Zs);Bh=r(Rz,"SPAN",{});var Hz=i(Bh);b(Qi.$$.fragment,Hz),Hz.forEach(t),Rz.forEach(t),xE=p(c_),Rh=r(c_,"SPAN",{});var Kz=i(Rh);ME=s(Kz,"TFElectraForMultipleChoice"),Kz.forEach(t),c_.forEach(t),Yf=p(o),_t=r(o,"DIV",{class:!0});var fo=i(_t);b(Vi.$$.fragment,fo),zE=p(fo),Hh=r(fo,"P",{});var Qz=i(Hh);qE=s(Qz,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Qz.forEach(t),jE=p(fo),Ji=r(fo,"P",{});var p_=i(Ji);CE=s(p_,"This model inherits from "),jc=r(p_,"A",{href:!0});var Vz=i(jc);PE=s(Vz,"TFPreTrainedModel"),Vz.forEach(t),AE=s(p_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),p_.forEach(t),LE=p(fo),Gi=r(fo,"P",{});var h_=i(Gi);OE=s(h_,"This model is also a "),Xi=r(h_,"A",{href:!0,rel:!0});var Jz=i(Xi);NE=s(Jz,"tf.keras.Model"),Jz.forEach(t),IE=s(h_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),h_.forEach(t),DE=p(fo),b(ea.$$.fragment,fo),SE=p(fo),eo=r(fo,"DIV",{class:!0});var Ra=i(eo);b(Yi.$$.fragment,Ra),WE=p(Ra),En=r(Ra,"P",{});var lp=i(En);UE=s(lp,"The "),Cc=r(lp,"A",{href:!0});var Gz=i(Cc);BE=s(Gz,"TFElectraForMultipleChoice"),Gz.forEach(t),RE=s(lp," forward method, overrides the "),Kh=r(lp,"CODE",{});var Xz=i(Kh);HE=s(Xz,"__call__"),Xz.forEach(t),KE=s(lp," special method."),lp.forEach(t),QE=p(Ra),b(ta.$$.fragment,Ra),VE=p(Ra),b(oa.$$.fragment,Ra),Ra.forEach(t),fo.forEach(t),Zf=p(o),$n=r(o,"H2",{class:!0});var m_=i($n);na=r(m_,"A",{id:!0,class:!0,href:!0});var Yz=i(na);Qh=r(Yz,"SPAN",{});var Zz=i(Qh);b(Zi.$$.fragment,Zz),Zz.forEach(t),Yz.forEach(t),JE=p(m_),Vh=r(m_,"SPAN",{});var e4=i(Vh);GE=s(e4,"TFElectraForTokenClassification"),e4.forEach(t),m_.forEach(t),eg=p(o),st=r(o,"DIV",{class:!0});var It=i(st);b(el.$$.fragment,It),XE=p(It),Jh=r(It,"P",{});var t4=i(Jh);YE=s(t4,"Electra model with a token classification head on top."),t4.forEach(t),ZE=p(It),Gh=r(It,"P",{});var o4=i(Gh);e$=s(o4,"Both the discriminator and generator may be loaded into this model."),o4.forEach(t),t$=p(It),tl=r(It,"P",{});var u_=i(tl);o$=s(u_,"This model inherits from "),Pc=r(u_,"A",{href:!0});var n4=i(Pc);n$=s(n4,"TFPreTrainedModel"),n4.forEach(t),s$=s(u_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),u_.forEach(t),a$=p(It),ol=r(It,"P",{});var f_=i(ol);r$=s(f_,"This model is also a "),nl=r(f_,"A",{href:!0,rel:!0});var s4=i(nl);i$=s(s4,"tf.keras.Model"),s4.forEach(t),l$=s(f_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),f_.forEach(t),d$=p(It),b(sa.$$.fragment,It),c$=p(It),Pt=r(It,"DIV",{class:!0});var Wo=i(Pt);b(sl.$$.fragment,Wo),p$=p(Wo),Fn=r(Wo,"P",{});var dp=i(Fn);h$=s(dp,"The "),Ac=r(dp,"A",{href:!0});var a4=i(Ac);m$=s(a4,"TFElectraForTokenClassification"),a4.forEach(t),u$=s(dp," forward method, overrides the "),Xh=r(dp,"CODE",{});var r4=i(Xh);f$=s(r4,"__call__"),r4.forEach(t),g$=s(dp," special method."),dp.forEach(t),_$=p(Wo),b(aa.$$.fragment,Wo),k$=p(Wo),b(ra.$$.fragment,Wo),v$=p(Wo),b(ia.$$.fragment,Wo),Wo.forEach(t),It.forEach(t),tg=p(o),xn=r(o,"H2",{class:!0});var g_=i(xn);la=r(g_,"A",{id:!0,class:!0,href:!0});var i4=i(la);Yh=r(i4,"SPAN",{});var l4=i(Yh);b(al.$$.fragment,l4),l4.forEach(t),i4.forEach(t),y$=p(g_),Zh=r(g_,"SPAN",{});var d4=i(Zh);T$=s(d4,"TFElectraForQuestionAnswering"),d4.forEach(t),g_.forEach(t),og=p(o),kt=r(o,"DIV",{class:!0});var go=i(kt);b(rl.$$.fragment,go),b$=p(go),Mn=r(go,"P",{});var cp=i(Mn);w$=s(cp,`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),em=r(cp,"CODE",{});var c4=i(em);E$=s(c4,"span start logits"),c4.forEach(t),$$=s(cp," and "),tm=r(cp,"CODE",{});var p4=i(tm);F$=s(p4,"span end logits"),p4.forEach(t),x$=s(cp,")."),cp.forEach(t),M$=p(go),il=r(go,"P",{});var __=i(il);z$=s(__,"This model inherits from "),Lc=r(__,"A",{href:!0});var h4=i(Lc);q$=s(h4,"TFPreTrainedModel"),h4.forEach(t),j$=s(__,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),__.forEach(t),C$=p(go),ll=r(go,"P",{});var k_=i(ll);P$=s(k_,"This model is also a "),dl=r(k_,"A",{href:!0,rel:!0});var m4=i(dl);A$=s(m4,"tf.keras.Model"),m4.forEach(t),L$=s(k_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),k_.forEach(t),O$=p(go),b(da.$$.fragment,go),N$=p(go),At=r(go,"DIV",{class:!0});var Uo=i(At);b(cl.$$.fragment,Uo),I$=p(Uo),zn=r(Uo,"P",{});var pp=i(zn);D$=s(pp,"The "),Oc=r(pp,"A",{href:!0});var u4=i(Oc);S$=s(u4,"TFElectraForQuestionAnswering"),u4.forEach(t),W$=s(pp," forward method, overrides the "),om=r(pp,"CODE",{});var f4=i(om);U$=s(f4,"__call__"),f4.forEach(t),B$=s(pp," special method."),pp.forEach(t),R$=p(Uo),b(ca.$$.fragment,Uo),H$=p(Uo),b(pa.$$.fragment,Uo),K$=p(Uo),b(ha.$$.fragment,Uo),Uo.forEach(t),go.forEach(t),ng=p(o),qn=r(o,"H2",{class:!0});var v_=i(qn);ma=r(v_,"A",{id:!0,class:!0,href:!0});var g4=i(ma);nm=r(g4,"SPAN",{});var _4=i(nm);b(pl.$$.fragment,_4),_4.forEach(t),g4.forEach(t),Q$=p(v_),sm=r(v_,"SPAN",{});var k4=i(sm);V$=s(k4,"FlaxElectraModel"),k4.forEach(t),v_.forEach(t),sg=p(o),at=r(o,"DIV",{class:!0});var Dt=i(at);b(hl.$$.fragment,Dt),J$=p(Dt),am=r(Dt,"P",{});var v4=i(am);G$=s(v4,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),v4.forEach(t),X$=p(Dt),ml=r(Dt,"P",{});var y_=i(ml);Y$=s(y_,"This model inherits from "),Nc=r(y_,"A",{href:!0});var y4=i(Nc);Z$=s(y4,"FlaxPreTrainedModel"),y4.forEach(t),e1=s(y_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),y_.forEach(t),t1=p(Dt),ul=r(Dt,"P",{});var T_=i(ul);o1=s(T_,`This model is also a Flax Linen
`),fl=r(T_,"A",{href:!0,rel:!0});var T4=i(fl);n1=s(T4,"flax.nn.Module"),T4.forEach(t),s1=s(T_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),T_.forEach(t),a1=p(Dt),rm=r(Dt,"P",{});var b4=i(rm);r1=s(b4,"Finally, this model supports inherent JAX features such as:"),b4.forEach(t),i1=p(Dt),_o=r(Dt,"UL",{});var Ha=i(_o);im=r(Ha,"LI",{});var w4=i(im);gl=r(w4,"A",{href:!0,rel:!0});var E4=i(gl);l1=s(E4,"Just-In-Time (JIT) compilation"),E4.forEach(t),w4.forEach(t),d1=p(Ha),lm=r(Ha,"LI",{});var $4=i(lm);_l=r($4,"A",{href:!0,rel:!0});var F4=i(_l);c1=s(F4,"Automatic Differentiation"),F4.forEach(t),$4.forEach(t),p1=p(Ha),dm=r(Ha,"LI",{});var x4=i(dm);kl=r(x4,"A",{href:!0,rel:!0});var M4=i(kl);h1=s(M4,"Vectorization"),M4.forEach(t),x4.forEach(t),m1=p(Ha),cm=r(Ha,"LI",{});var z4=i(cm);vl=r(z4,"A",{href:!0,rel:!0});var q4=i(vl);u1=s(q4,"Parallelization"),q4.forEach(t),z4.forEach(t),Ha.forEach(t),f1=p(Dt),to=r(Dt,"DIV",{class:!0});var Ka=i(to);b(yl.$$.fragment,Ka),g1=p(Ka),jn=r(Ka,"P",{});var hp=i(jn);_1=s(hp,"The "),pm=r(hp,"CODE",{});var j4=i(pm);k1=s(j4,"FlaxElectraPreTrainedModel"),j4.forEach(t),v1=s(hp," forward method, overrides the "),hm=r(hp,"CODE",{});var C4=i(hm);y1=s(C4,"__call__"),C4.forEach(t),T1=s(hp," special method."),hp.forEach(t),b1=p(Ka),b(ua.$$.fragment,Ka),w1=p(Ka),b(fa.$$.fragment,Ka),Ka.forEach(t),Dt.forEach(t),ag=p(o),Cn=r(o,"H2",{class:!0});var b_=i(Cn);ga=r(b_,"A",{id:!0,class:!0,href:!0});var P4=i(ga);mm=r(P4,"SPAN",{});var A4=i(mm);b(Tl.$$.fragment,A4),A4.forEach(t),P4.forEach(t),E1=p(b_),um=r(b_,"SPAN",{});var L4=i(um);$1=s(L4,"FlaxElectraForPreTraining"),L4.forEach(t),b_.forEach(t),rg=p(o),Ze=r(o,"DIV",{class:!0});var yt=i(Ze);b(bl.$$.fragment,yt),F1=p(yt),fm=r(yt,"P",{});var O4=i(fm);x1=s(O4,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),O4.forEach(t),M1=p(yt),gm=r(yt,"P",{});var N4=i(gm);z1=s(N4,"It is recommended to load the discriminator checkpoint into that model."),N4.forEach(t),q1=p(yt),wl=r(yt,"P",{});var w_=i(wl);j1=s(w_,"This model inherits from "),Ic=r(w_,"A",{href:!0});var I4=i(Ic);C1=s(I4,"FlaxPreTrainedModel"),I4.forEach(t),P1=s(w_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),w_.forEach(t),A1=p(yt),El=r(yt,"P",{});var E_=i(El);L1=s(E_,`This model is also a Flax Linen
`),$l=r(E_,"A",{href:!0,rel:!0});var D4=i($l);O1=s(D4,"flax.nn.Module"),D4.forEach(t),N1=s(E_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),E_.forEach(t),I1=p(yt),_m=r(yt,"P",{});var S4=i(_m);D1=s(S4,"Finally, this model supports inherent JAX features such as:"),S4.forEach(t),S1=p(yt),ko=r(yt,"UL",{});var Qa=i(ko);km=r(Qa,"LI",{});var W4=i(km);Fl=r(W4,"A",{href:!0,rel:!0});var U4=i(Fl);W1=s(U4,"Just-In-Time (JIT) compilation"),U4.forEach(t),W4.forEach(t),U1=p(Qa),vm=r(Qa,"LI",{});var B4=i(vm);xl=r(B4,"A",{href:!0,rel:!0});var R4=i(xl);B1=s(R4,"Automatic Differentiation"),R4.forEach(t),B4.forEach(t),R1=p(Qa),ym=r(Qa,"LI",{});var H4=i(ym);Ml=r(H4,"A",{href:!0,rel:!0});var K4=i(Ml);H1=s(K4,"Vectorization"),K4.forEach(t),H4.forEach(t),K1=p(Qa),Tm=r(Qa,"LI",{});var Q4=i(Tm);zl=r(Q4,"A",{href:!0,rel:!0});var V4=i(zl);Q1=s(V4,"Parallelization"),V4.forEach(t),Q4.forEach(t),Qa.forEach(t),V1=p(yt),oo=r(yt,"DIV",{class:!0});var Va=i(oo);b(ql.$$.fragment,Va),J1=p(Va),Pn=r(Va,"P",{});var mp=i(Pn);G1=s(mp,"The "),bm=r(mp,"CODE",{});var J4=i(bm);X1=s(J4,"FlaxElectraPreTrainedModel"),J4.forEach(t),Y1=s(mp," forward method, overrides the "),wm=r(mp,"CODE",{});var G4=i(wm);Z1=s(G4,"__call__"),G4.forEach(t),e2=s(mp," special method."),mp.forEach(t),t2=p(Va),b(_a.$$.fragment,Va),o2=p(Va),b(ka.$$.fragment,Va),Va.forEach(t),yt.forEach(t),ig=p(o),An=r(o,"H2",{class:!0});var $_=i(An);va=r($_,"A",{id:!0,class:!0,href:!0});var X4=i(va);Em=r(X4,"SPAN",{});var Y4=i(Em);b(jl.$$.fragment,Y4),Y4.forEach(t),X4.forEach(t),n2=p($_),$m=r($_,"SPAN",{});var Z4=i($m);s2=s(Z4,"FlaxElectraForCausalLM"),Z4.forEach(t),$_.forEach(t),lg=p(o),rt=r(o,"DIV",{class:!0});var St=i(rt);b(Cl.$$.fragment,St),a2=p(St),Fm=r(St,"P",{});var eq=i(Fm);r2=s(eq,`Electra Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),eq.forEach(t),i2=p(St),Pl=r(St,"P",{});var F_=i(Pl);l2=s(F_,"This model inherits from "),Dc=r(F_,"A",{href:!0});var tq=i(Dc);d2=s(tq,"FlaxPreTrainedModel"),tq.forEach(t),c2=s(F_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),F_.forEach(t),p2=p(St),Al=r(St,"P",{});var x_=i(Al);h2=s(x_,`This model is also a Flax Linen
`),Ll=r(x_,"A",{href:!0,rel:!0});var oq=i(Ll);m2=s(oq,"flax.nn.Module"),oq.forEach(t),u2=s(x_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),x_.forEach(t),f2=p(St),xm=r(St,"P",{});var nq=i(xm);g2=s(nq,"Finally, this model supports inherent JAX features such as:"),nq.forEach(t),_2=p(St),vo=r(St,"UL",{});var Ja=i(vo);Mm=r(Ja,"LI",{});var sq=i(Mm);Ol=r(sq,"A",{href:!0,rel:!0});var aq=i(Ol);k2=s(aq,"Just-In-Time (JIT) compilation"),aq.forEach(t),sq.forEach(t),v2=p(Ja),zm=r(Ja,"LI",{});var rq=i(zm);Nl=r(rq,"A",{href:!0,rel:!0});var iq=i(Nl);y2=s(iq,"Automatic Differentiation"),iq.forEach(t),rq.forEach(t),T2=p(Ja),qm=r(Ja,"LI",{});var lq=i(qm);Il=r(lq,"A",{href:!0,rel:!0});var dq=i(Il);b2=s(dq,"Vectorization"),dq.forEach(t),lq.forEach(t),w2=p(Ja),jm=r(Ja,"LI",{});var cq=i(jm);Dl=r(cq,"A",{href:!0,rel:!0});var pq=i(Dl);E2=s(pq,"Parallelization"),pq.forEach(t),cq.forEach(t),Ja.forEach(t),$2=p(St),no=r(St,"DIV",{class:!0});var Ga=i(no);b(Sl.$$.fragment,Ga),F2=p(Ga),Ln=r(Ga,"P",{});var up=i(Ln);x2=s(up,"The "),Cm=r(up,"CODE",{});var hq=i(Cm);M2=s(hq,"FlaxElectraPreTrainedModel"),hq.forEach(t),z2=s(up," forward method, overrides the "),Pm=r(up,"CODE",{});var mq=i(Pm);q2=s(mq,"__call__"),mq.forEach(t),j2=s(up," special method."),up.forEach(t),C2=p(Ga),b(ya.$$.fragment,Ga),P2=p(Ga),b(Ta.$$.fragment,Ga),Ga.forEach(t),St.forEach(t),dg=p(o),On=r(o,"H2",{class:!0});var M_=i(On);ba=r(M_,"A",{id:!0,class:!0,href:!0});var uq=i(ba);Am=r(uq,"SPAN",{});var fq=i(Am);b(Wl.$$.fragment,fq),fq.forEach(t),uq.forEach(t),A2=p(M_),Lm=r(M_,"SPAN",{});var gq=i(Lm);L2=s(gq,"FlaxElectraForMaskedLM"),gq.forEach(t),M_.forEach(t),cg=p(o),it=r(o,"DIV",{class:!0});var Wt=i(it);b(Ul.$$.fragment,Wt),O2=p(Wt),Bl=r(Wt,"P",{});var z_=i(Bl);N2=s(z_,"Electra Model with a "),Om=r(z_,"CODE",{});var _q=i(Om);I2=s(_q,"language modeling"),_q.forEach(t),D2=s(z_," head on top."),z_.forEach(t),S2=p(Wt),Rl=r(Wt,"P",{});var q_=i(Rl);W2=s(q_,"This model inherits from "),Sc=r(q_,"A",{href:!0});var kq=i(Sc);U2=s(kq,"FlaxPreTrainedModel"),kq.forEach(t),B2=s(q_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),q_.forEach(t),R2=p(Wt),Hl=r(Wt,"P",{});var j_=i(Hl);H2=s(j_,`This model is also a Flax Linen
`),Kl=r(j_,"A",{href:!0,rel:!0});var vq=i(Kl);K2=s(vq,"flax.nn.Module"),vq.forEach(t),Q2=s(j_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),j_.forEach(t),V2=p(Wt),Nm=r(Wt,"P",{});var yq=i(Nm);J2=s(yq,"Finally, this model supports inherent JAX features such as:"),yq.forEach(t),G2=p(Wt),yo=r(Wt,"UL",{});var Xa=i(yo);Im=r(Xa,"LI",{});var Tq=i(Im);Ql=r(Tq,"A",{href:!0,rel:!0});var bq=i(Ql);X2=s(bq,"Just-In-Time (JIT) compilation"),bq.forEach(t),Tq.forEach(t),Y2=p(Xa),Dm=r(Xa,"LI",{});var wq=i(Dm);Vl=r(wq,"A",{href:!0,rel:!0});var Eq=i(Vl);Z2=s(Eq,"Automatic Differentiation"),Eq.forEach(t),wq.forEach(t),eF=p(Xa),Sm=r(Xa,"LI",{});var $q=i(Sm);Jl=r($q,"A",{href:!0,rel:!0});var Fq=i(Jl);tF=s(Fq,"Vectorization"),Fq.forEach(t),$q.forEach(t),oF=p(Xa),Wm=r(Xa,"LI",{});var xq=i(Wm);Gl=r(xq,"A",{href:!0,rel:!0});var Mq=i(Gl);nF=s(Mq,"Parallelization"),Mq.forEach(t),xq.forEach(t),Xa.forEach(t),sF=p(Wt),so=r(Wt,"DIV",{class:!0});var Ya=i(so);b(Xl.$$.fragment,Ya),aF=p(Ya),Nn=r(Ya,"P",{});var fp=i(Nn);rF=s(fp,"The "),Um=r(fp,"CODE",{});var zq=i(Um);iF=s(zq,"FlaxElectraPreTrainedModel"),zq.forEach(t),lF=s(fp," forward method, overrides the "),Bm=r(fp,"CODE",{});var qq=i(Bm);dF=s(qq,"__call__"),qq.forEach(t),cF=s(fp," special method."),fp.forEach(t),pF=p(Ya),b(wa.$$.fragment,Ya),hF=p(Ya),b(Ea.$$.fragment,Ya),Ya.forEach(t),Wt.forEach(t),pg=p(o),In=r(o,"H2",{class:!0});var C_=i(In);$a=r(C_,"A",{id:!0,class:!0,href:!0});var jq=i($a);Rm=r(jq,"SPAN",{});var Cq=i(Rm);b(Yl.$$.fragment,Cq),Cq.forEach(t),jq.forEach(t),mF=p(C_),Hm=r(C_,"SPAN",{});var Pq=i(Hm);uF=s(Pq,"FlaxElectraForSequenceClassification"),Pq.forEach(t),C_.forEach(t),hg=p(o),lt=r(o,"DIV",{class:!0});var Ut=i(lt);b(Zl.$$.fragment,Ut),fF=p(Ut),Km=r(Ut,"P",{});var Aq=i(Km);gF=s(Aq,`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Aq.forEach(t),_F=p(Ut),ed=r(Ut,"P",{});var P_=i(ed);kF=s(P_,"This model inherits from "),Wc=r(P_,"A",{href:!0});var Lq=i(Wc);vF=s(Lq,"FlaxPreTrainedModel"),Lq.forEach(t),yF=s(P_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),P_.forEach(t),TF=p(Ut),td=r(Ut,"P",{});var A_=i(td);bF=s(A_,`This model is also a Flax Linen
`),od=r(A_,"A",{href:!0,rel:!0});var Oq=i(od);wF=s(Oq,"flax.nn.Module"),Oq.forEach(t),EF=s(A_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),A_.forEach(t),$F=p(Ut),Qm=r(Ut,"P",{});var Nq=i(Qm);FF=s(Nq,"Finally, this model supports inherent JAX features such as:"),Nq.forEach(t),xF=p(Ut),To=r(Ut,"UL",{});var Za=i(To);Vm=r(Za,"LI",{});var Iq=i(Vm);nd=r(Iq,"A",{href:!0,rel:!0});var Dq=i(nd);MF=s(Dq,"Just-In-Time (JIT) compilation"),Dq.forEach(t),Iq.forEach(t),zF=p(Za),Jm=r(Za,"LI",{});var Sq=i(Jm);sd=r(Sq,"A",{href:!0,rel:!0});var Wq=i(sd);qF=s(Wq,"Automatic Differentiation"),Wq.forEach(t),Sq.forEach(t),jF=p(Za),Gm=r(Za,"LI",{});var Uq=i(Gm);ad=r(Uq,"A",{href:!0,rel:!0});var Bq=i(ad);CF=s(Bq,"Vectorization"),Bq.forEach(t),Uq.forEach(t),PF=p(Za),Xm=r(Za,"LI",{});var Rq=i(Xm);rd=r(Rq,"A",{href:!0,rel:!0});var Hq=i(rd);AF=s(Hq,"Parallelization"),Hq.forEach(t),Rq.forEach(t),Za.forEach(t),LF=p(Ut),ao=r(Ut,"DIV",{class:!0});var er=i(ao);b(id.$$.fragment,er),OF=p(er),Dn=r(er,"P",{});var gp=i(Dn);NF=s(gp,"The "),Ym=r(gp,"CODE",{});var Kq=i(Ym);IF=s(Kq,"FlaxElectraPreTrainedModel"),Kq.forEach(t),DF=s(gp," forward method, overrides the "),Zm=r(gp,"CODE",{});var Qq=i(Zm);SF=s(Qq,"__call__"),Qq.forEach(t),WF=s(gp," special method."),gp.forEach(t),UF=p(er),b(Fa.$$.fragment,er),BF=p(er),b(xa.$$.fragment,er),er.forEach(t),Ut.forEach(t),mg=p(o),Sn=r(o,"H2",{class:!0});var L_=i(Sn);Ma=r(L_,"A",{id:!0,class:!0,href:!0});var Vq=i(Ma);eu=r(Vq,"SPAN",{});var Jq=i(eu);b(ld.$$.fragment,Jq),Jq.forEach(t),Vq.forEach(t),RF=p(L_),tu=r(L_,"SPAN",{});var Gq=i(tu);HF=s(Gq,"FlaxElectraForMultipleChoice"),Gq.forEach(t),L_.forEach(t),ug=p(o),dt=r(o,"DIV",{class:!0});var Bt=i(dt);b(dd.$$.fragment,Bt),KF=p(Bt),ou=r(Bt,"P",{});var Xq=i(ou);QF=s(Xq,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Xq.forEach(t),VF=p(Bt),cd=r(Bt,"P",{});var O_=i(cd);JF=s(O_,"This model inherits from "),Uc=r(O_,"A",{href:!0});var Yq=i(Uc);GF=s(Yq,"FlaxPreTrainedModel"),Yq.forEach(t),XF=s(O_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),O_.forEach(t),YF=p(Bt),pd=r(Bt,"P",{});var N_=i(pd);ZF=s(N_,`This model is also a Flax Linen
`),hd=r(N_,"A",{href:!0,rel:!0});var Zq=i(hd);e0=s(Zq,"flax.nn.Module"),Zq.forEach(t),t0=s(N_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),N_.forEach(t),o0=p(Bt),nu=r(Bt,"P",{});var ej=i(nu);n0=s(ej,"Finally, this model supports inherent JAX features such as:"),ej.forEach(t),s0=p(Bt),bo=r(Bt,"UL",{});var tr=i(bo);su=r(tr,"LI",{});var tj=i(su);md=r(tj,"A",{href:!0,rel:!0});var oj=i(md);a0=s(oj,"Just-In-Time (JIT) compilation"),oj.forEach(t),tj.forEach(t),r0=p(tr),au=r(tr,"LI",{});var nj=i(au);ud=r(nj,"A",{href:!0,rel:!0});var sj=i(ud);i0=s(sj,"Automatic Differentiation"),sj.forEach(t),nj.forEach(t),l0=p(tr),ru=r(tr,"LI",{});var aj=i(ru);fd=r(aj,"A",{href:!0,rel:!0});var rj=i(fd);d0=s(rj,"Vectorization"),rj.forEach(t),aj.forEach(t),c0=p(tr),iu=r(tr,"LI",{});var ij=i(iu);gd=r(ij,"A",{href:!0,rel:!0});var lj=i(gd);p0=s(lj,"Parallelization"),lj.forEach(t),ij.forEach(t),tr.forEach(t),h0=p(Bt),ro=r(Bt,"DIV",{class:!0});var or=i(ro);b(_d.$$.fragment,or),m0=p(or),Wn=r(or,"P",{});var _p=i(Wn);u0=s(_p,"The "),lu=r(_p,"CODE",{});var dj=i(lu);f0=s(dj,"FlaxElectraPreTrainedModel"),dj.forEach(t),g0=s(_p," forward method, overrides the "),du=r(_p,"CODE",{});var cj=i(du);_0=s(cj,"__call__"),cj.forEach(t),k0=s(_p," special method."),_p.forEach(t),v0=p(or),b(za.$$.fragment,or),y0=p(or),b(qa.$$.fragment,or),or.forEach(t),Bt.forEach(t),fg=p(o),Un=r(o,"H2",{class:!0});var I_=i(Un);ja=r(I_,"A",{id:!0,class:!0,href:!0});var pj=i(ja);cu=r(pj,"SPAN",{});var hj=i(cu);b(kd.$$.fragment,hj),hj.forEach(t),pj.forEach(t),T0=p(I_),pu=r(I_,"SPAN",{});var mj=i(pu);b0=s(mj,"FlaxElectraForTokenClassification"),mj.forEach(t),I_.forEach(t),gg=p(o),et=r(o,"DIV",{class:!0});var Tt=i(et);b(vd.$$.fragment,Tt),w0=p(Tt),hu=r(Tt,"P",{});var uj=i(hu);E0=s(uj,"Electra model with a token classification head on top."),uj.forEach(t),$0=p(Tt),mu=r(Tt,"P",{});var fj=i(mu);F0=s(fj,"Both the discriminator and generator may be loaded into this model."),fj.forEach(t),x0=p(Tt),yd=r(Tt,"P",{});var D_=i(yd);M0=s(D_,"This model inherits from "),Bc=r(D_,"A",{href:!0});var gj=i(Bc);z0=s(gj,"FlaxPreTrainedModel"),gj.forEach(t),q0=s(D_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),D_.forEach(t),j0=p(Tt),Td=r(Tt,"P",{});var S_=i(Td);C0=s(S_,`This model is also a Flax Linen
`),bd=r(S_,"A",{href:!0,rel:!0});var _j=i(bd);P0=s(_j,"flax.nn.Module"),_j.forEach(t),A0=s(S_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),S_.forEach(t),L0=p(Tt),uu=r(Tt,"P",{});var kj=i(uu);O0=s(kj,"Finally, this model supports inherent JAX features such as:"),kj.forEach(t),N0=p(Tt),wo=r(Tt,"UL",{});var nr=i(wo);fu=r(nr,"LI",{});var vj=i(fu);wd=r(vj,"A",{href:!0,rel:!0});var yj=i(wd);I0=s(yj,"Just-In-Time (JIT) compilation"),yj.forEach(t),vj.forEach(t),D0=p(nr),gu=r(nr,"LI",{});var Tj=i(gu);Ed=r(Tj,"A",{href:!0,rel:!0});var bj=i(Ed);S0=s(bj,"Automatic Differentiation"),bj.forEach(t),Tj.forEach(t),W0=p(nr),_u=r(nr,"LI",{});var wj=i(_u);$d=r(wj,"A",{href:!0,rel:!0});var Ej=i($d);U0=s(Ej,"Vectorization"),Ej.forEach(t),wj.forEach(t),B0=p(nr),ku=r(nr,"LI",{});var $j=i(ku);Fd=r($j,"A",{href:!0,rel:!0});var Fj=i(Fd);R0=s(Fj,"Parallelization"),Fj.forEach(t),$j.forEach(t),nr.forEach(t),H0=p(Tt),io=r(Tt,"DIV",{class:!0});var sr=i(io);b(xd.$$.fragment,sr),K0=p(sr),Bn=r(sr,"P",{});var kp=i(Bn);Q0=s(kp,"The "),vu=r(kp,"CODE",{});var xj=i(vu);V0=s(xj,"FlaxElectraPreTrainedModel"),xj.forEach(t),J0=s(kp," forward method, overrides the "),yu=r(kp,"CODE",{});var Mj=i(yu);G0=s(Mj,"__call__"),Mj.forEach(t),X0=s(kp," special method."),kp.forEach(t),Y0=p(sr),b(Ca.$$.fragment,sr),Z0=p(sr),b(Pa.$$.fragment,sr),sr.forEach(t),Tt.forEach(t),_g=p(o),Rn=r(o,"H2",{class:!0});var W_=i(Rn);Aa=r(W_,"A",{id:!0,class:!0,href:!0});var zj=i(Aa);Tu=r(zj,"SPAN",{});var qj=i(Tu);b(Md.$$.fragment,qj),qj.forEach(t),zj.forEach(t),ex=p(W_),bu=r(W_,"SPAN",{});var jj=i(bu);tx=s(jj,"FlaxElectraForQuestionAnswering"),jj.forEach(t),W_.forEach(t),kg=p(o),ct=r(o,"DIV",{class:!0});var Rt=i(ct);b(zd.$$.fragment,Rt),ox=p(Rt),Hn=r(Rt,"P",{});var vp=i(Hn);nx=s(vp,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),wu=r(vp,"CODE",{});var Cj=i(wu);sx=s(Cj,"span start logits"),Cj.forEach(t),ax=s(vp," and "),Eu=r(vp,"CODE",{});var Pj=i(Eu);rx=s(Pj,"span end logits"),Pj.forEach(t),ix=s(vp,")."),vp.forEach(t),lx=p(Rt),qd=r(Rt,"P",{});var U_=i(qd);dx=s(U_,"This model inherits from "),Rc=r(U_,"A",{href:!0});var Aj=i(Rc);cx=s(Aj,"FlaxPreTrainedModel"),Aj.forEach(t),px=s(U_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),U_.forEach(t),hx=p(Rt),jd=r(Rt,"P",{});var B_=i(jd);mx=s(B_,`This model is also a Flax Linen
`),Cd=r(B_,"A",{href:!0,rel:!0});var Lj=i(Cd);ux=s(Lj,"flax.nn.Module"),Lj.forEach(t),fx=s(B_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),B_.forEach(t),gx=p(Rt),$u=r(Rt,"P",{});var Oj=i($u);_x=s(Oj,"Finally, this model supports inherent JAX features such as:"),Oj.forEach(t),kx=p(Rt),Eo=r(Rt,"UL",{});var ar=i(Eo);Fu=r(ar,"LI",{});var Nj=i(Fu);Pd=r(Nj,"A",{href:!0,rel:!0});var Ij=i(Pd);vx=s(Ij,"Just-In-Time (JIT) compilation"),Ij.forEach(t),Nj.forEach(t),yx=p(ar),xu=r(ar,"LI",{});var Dj=i(xu);Ad=r(Dj,"A",{href:!0,rel:!0});var Sj=i(Ad);Tx=s(Sj,"Automatic Differentiation"),Sj.forEach(t),Dj.forEach(t),bx=p(ar),Mu=r(ar,"LI",{});var Wj=i(Mu);Ld=r(Wj,"A",{href:!0,rel:!0});var Uj=i(Ld);wx=s(Uj,"Vectorization"),Uj.forEach(t),Wj.forEach(t),Ex=p(ar),zu=r(ar,"LI",{});var Bj=i(zu);Od=r(Bj,"A",{href:!0,rel:!0});var Rj=i(Od);$x=s(Rj,"Parallelization"),Rj.forEach(t),Bj.forEach(t),ar.forEach(t),Fx=p(Rt),lo=r(Rt,"DIV",{class:!0});var rr=i(lo);b(Nd.$$.fragment,rr),xx=p(rr),Kn=r(rr,"P",{});var yp=i(Kn);Mx=s(yp,"The "),qu=r(yp,"CODE",{});var Hj=i(qu);zx=s(Hj,"FlaxElectraPreTrainedModel"),Hj.forEach(t),qx=s(yp," forward method, overrides the "),ju=r(yp,"CODE",{});var Kj=i(ju);jx=s(Kj,"__call__"),Kj.forEach(t),Cx=s(yp," special method."),yp.forEach(t),Px=p(rr),b(La.$$.fragment,rr),Ax=p(rr),b(Oa.$$.fragment,rr),rr.forEach(t),Rt.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(pP)),f(u,"id","electra"),f(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(u,"href","#electra"),f(m,"class","relative group"),f(ae,"id","overview"),f(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ae,"href","#overview"),f(W,"class","relative group"),f(de,"href","https://openreview.net/pdf?id=r1xMH1BtvB"),f(de,"rel","nofollow"),f(P,"href","https://github.com/google-research/electra"),f(P,"rel","nofollow"),f(ce,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForMaskedLM"),f(pe,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForPreTraining"),f(Z,"href","https://huggingface.co/lysandre"),f(Z,"rel","nofollow"),f(O,"href","https://github.com/google-research/electra"),f(O,"rel","nofollow"),f(De,"id","transformers.ElectraConfig"),f(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(De,"href","#transformers.ElectraConfig"),f(q,"class","relative group"),f(Re,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraModel"),f(He,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraModel"),f(Be,"href","https://huggingface.co/google/electra-small-discriminator"),f(Be,"rel","nofollow"),f(Xd,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Yd,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Yn,"id","transformers.ElectraTokenizer"),f(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Yn,"href","#transformers.ElectraTokenizer"),f(Ro,"class","relative group"),f(Zd,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Zn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ts,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(os,"id","transformers.ElectraTokenizerFast"),f(os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(os,"href","#transformers.ElectraTokenizerFast"),f(Ko,"class","relative group"),f(oc,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ss,"id","transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),f(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ss,"href","#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),f(Vo,"class","relative group"),f(ac,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForPreTraining"),f(Jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rc,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForPreTraining"),f(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(as,"id","transformers.ElectraModel"),f(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(as,"href","#transformers.ElectraModel"),f(Xo,"class","relative group"),f(ic,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Cr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Cr,"rel","nofollow"),f(lc,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraModel"),f(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ls,"id","transformers.ElectraForPreTraining"),f(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ls,"href","#transformers.ElectraForPreTraining"),f(Zo,"class","relative group"),f(dc,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ir,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ir,"rel","nofollow"),f(cc,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForPreTraining"),f(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ps,"id","transformers.ElectraForCausalLM"),f(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ps,"href","#transformers.ElectraForCausalLM"),f(tn,"class","relative group"),f(pc,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Hr,"rel","nofollow"),f(hc,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForCausalLM"),f(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(us,"id","transformers.ElectraForMaskedLM"),f(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(us,"href","#transformers.ElectraForMaskedLM"),f(nn,"class","relative group"),f(mc,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Xr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Xr,"rel","nofollow"),f(uc,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForMaskedLM"),f(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ks,"id","transformers.ElectraForSequenceClassification"),f(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ks,"href","#transformers.ElectraForSequenceClassification"),f(an,"class","relative group"),f(fc,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ni,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ni,"rel","nofollow"),f(gc,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForSequenceClassification"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Es,"id","transformers.ElectraForMultipleChoice"),f(Es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Es,"href","#transformers.ElectraForMultipleChoice"),f(ln,"class","relative group"),f(_c,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(di,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(di,"rel","nofollow"),f(kc,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForMultipleChoice"),f(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xs,"id","transformers.ElectraForTokenClassification"),f(xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xs,"href","#transformers.ElectraForTokenClassification"),f(cn,"class","relative group"),f(vc,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(fi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(fi,"rel","nofollow"),f(yc,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForTokenClassification"),f(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(js,"id","transformers.ElectraForQuestionAnswering"),f(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(js,"href","#transformers.ElectraForQuestionAnswering"),f(hn,"class","relative group"),f(Tc,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ti,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ti,"rel","nofollow"),f(bc,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForQuestionAnswering"),f(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ls,"id","transformers.TFElectraModel"),f(Ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ls,"href","#transformers.TFElectraModel"),f(fn,"class","relative group"),f(wc,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(xi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(xi,"rel","nofollow"),f(Ec,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraModel"),f(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ds,"id","transformers.TFElectraForPreTraining"),f(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ds,"href","#transformers.TFElectraForPreTraining"),f(_n,"class","relative group"),f($c,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Pi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Pi,"rel","nofollow"),f(Fc,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForPreTraining"),f(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bs,"id","transformers.TFElectraForMaskedLM"),f(Bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Bs,"href","#transformers.TFElectraForMaskedLM"),f(vn,"class","relative group"),f(xc,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Di,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Di,"rel","nofollow"),f(Mc,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForMaskedLM"),f(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vs,"id","transformers.TFElectraForSequenceClassification"),f(Vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Vs,"href","#transformers.TFElectraForSequenceClassification"),f(Tn,"class","relative group"),f(zc,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Hi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Hi,"rel","nofollow"),f(qc,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForSequenceClassification"),f(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Zs,"id","transformers.TFElectraForMultipleChoice"),f(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Zs,"href","#transformers.TFElectraForMultipleChoice"),f(wn,"class","relative group"),f(jc,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Xi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Xi,"rel","nofollow"),f(Cc,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForMultipleChoice"),f(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(na,"id","transformers.TFElectraForTokenClassification"),f(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(na,"href","#transformers.TFElectraForTokenClassification"),f($n,"class","relative group"),f(Pc,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(nl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(nl,"rel","nofollow"),f(Ac,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForTokenClassification"),f(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(la,"id","transformers.TFElectraForQuestionAnswering"),f(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(la,"href","#transformers.TFElectraForQuestionAnswering"),f(xn,"class","relative group"),f(Lc,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(dl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(dl,"rel","nofollow"),f(Oc,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForQuestionAnswering"),f(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ma,"id","transformers.FlaxElectraModel"),f(ma,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ma,"href","#transformers.FlaxElectraModel"),f(qn,"class","relative group"),f(Nc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(fl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(fl,"rel","nofollow"),f(gl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(gl,"rel","nofollow"),f(_l,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(_l,"rel","nofollow"),f(kl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(kl,"rel","nofollow"),f(vl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(vl,"rel","nofollow"),f(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ga,"id","transformers.FlaxElectraForPreTraining"),f(ga,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ga,"href","#transformers.FlaxElectraForPreTraining"),f(Cn,"class","relative group"),f(Ic,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f($l,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f($l,"rel","nofollow"),f(Fl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Fl,"rel","nofollow"),f(xl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(xl,"rel","nofollow"),f(Ml,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ml,"rel","nofollow"),f(zl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(zl,"rel","nofollow"),f(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(va,"id","transformers.FlaxElectraForCausalLM"),f(va,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(va,"href","#transformers.FlaxElectraForCausalLM"),f(An,"class","relative group"),f(Dc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ll,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Ll,"rel","nofollow"),f(Ol,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ol,"rel","nofollow"),f(Nl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Nl,"rel","nofollow"),f(Il,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Il,"rel","nofollow"),f(Dl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Dl,"rel","nofollow"),f(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ba,"id","transformers.FlaxElectraForMaskedLM"),f(ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ba,"href","#transformers.FlaxElectraForMaskedLM"),f(On,"class","relative group"),f(Sc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Kl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Kl,"rel","nofollow"),f(Ql,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ql,"rel","nofollow"),f(Vl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Vl,"rel","nofollow"),f(Jl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Jl,"rel","nofollow"),f(Gl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Gl,"rel","nofollow"),f(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($a,"id","transformers.FlaxElectraForSequenceClassification"),f($a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($a,"href","#transformers.FlaxElectraForSequenceClassification"),f(In,"class","relative group"),f(Wc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(od,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(od,"rel","nofollow"),f(nd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(nd,"rel","nofollow"),f(sd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(sd,"rel","nofollow"),f(ad,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ad,"rel","nofollow"),f(rd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(rd,"rel","nofollow"),f(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ma,"id","transformers.FlaxElectraForMultipleChoice"),f(Ma,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ma,"href","#transformers.FlaxElectraForMultipleChoice"),f(Sn,"class","relative group"),f(Uc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(hd,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(hd,"rel","nofollow"),f(md,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(md,"rel","nofollow"),f(ud,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ud,"rel","nofollow"),f(fd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(fd,"rel","nofollow"),f(gd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(gd,"rel","nofollow"),f(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ja,"id","transformers.FlaxElectraForTokenClassification"),f(ja,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ja,"href","#transformers.FlaxElectraForTokenClassification"),f(Un,"class","relative group"),f(Bc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(bd,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(bd,"rel","nofollow"),f(wd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(wd,"rel","nofollow"),f(Ed,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ed,"rel","nofollow"),f($d,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f($d,"rel","nofollow"),f(Fd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Fd,"rel","nofollow"),f(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Aa,"id","transformers.FlaxElectraForQuestionAnswering"),f(Aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Aa,"href","#transformers.FlaxElectraForQuestionAnswering"),f(Rn,"class","relative group"),f(Rc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Cd,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Cd,"rel","nofollow"),f(Pd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Pd,"rel","nofollow"),f(Ad,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ad,"rel","nofollow"),f(Ld,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ld,"rel","nofollow"),f(Od,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Od,"rel","nofollow"),f(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),_(o,g,k),_(o,m,k),e(m,u),e(u,v),w(l,v,null),e(m,h),e(m,z),e(z,Te),_(o,fe,k),_(o,W,k),e(W,ae),e(ae,ee),w(M,ee,null),e(W,be),e(W,K),e(K,we),_(o,ge,k),_(o,U,k),e(U,Ee),e(U,de),e(de,Q),e(U,$e),_(o,_e,k),_(o,R,k),e(R,Fe),_(o,ke,k),_(o,H,k),e(H,me),e(me,xe),_(o,oe,k),_(o,C,k),e(C,A),_(o,ve,k),_(o,B,k),e(B,ue),e(ue,Me),e(B,V),e(B,ne),e(ne,ze),e(ne,P),e(P,qe),e(ne,J),e(ne,ce),e(ce,je),e(ne,G),e(ne,pe),e(pe,Ce),e(ne,D),_(o,ye,k),_(o,S,k),e(S,Pe),e(S,Z),e(Z,L),e(S,Ae),e(S,O),e(O,Le),e(S,Oe),_(o,y,k),_(o,q,k),e(q,De),e(De,te),w(We,te,null),e(q,Qe),e(q,j),e(j,Ve),_(o,Ke,k),_(o,he,k),w(Ue,he,null),e(he,Je),e(he,N),e(N,X),e(N,Re),e(Re,Ge),e(N,Y),e(N,He),e(He,Xe),e(N,Ne),e(N,Be),e(Be,se),e(N,Ye),e(he,R_),e(he,Bo),e(Bo,H_),e(Bo,Xd),e(Xd,K_),e(Bo,Q_),e(Bo,Yd),e(Yd,V_),e(Bo,J_),e(he,G_),w(Xn,he,null),_(o,yf,k),_(o,Ro,k),e(Ro,Yn),e(Yn,Tp),w(ir,Tp,null),e(Ro,X_),e(Ro,bp),e(bp,Y_),_(o,Tf,k),_(o,tt,k),w(lr,tt,null),e(tt,Z_),e(tt,wp),e(wp,ek),e(tt,tk),e(tt,dr),e(dr,ok),e(dr,Zd),e(Zd,nk),e(dr,sk),e(tt,ak),e(tt,zo),w(cr,zo,null),e(zo,rk),e(zo,Ep),e(Ep,ik),e(zo,lk),e(zo,pr),e(pr,ec),e(ec,dk),e(ec,$p),e($p,ck),e(pr,pk),e(pr,tc),e(tc,hk),e(tc,Fp),e(Fp,mk),e(tt,uk),e(tt,Zn),w(hr,Zn,null),e(Zn,fk),e(Zn,xp),e(xp,gk),e(tt,_k),e(tt,Kt),w(mr,Kt,null),e(Kt,kk),e(Kt,Mp),e(Mp,vk),e(Kt,yk),w(es,Kt,null),e(Kt,Tk),e(Kt,Ho),e(Ho,bk),e(Ho,zp),e(zp,wk),e(Ho,Ek),e(Ho,qp),e(qp,$k),e(Ho,Fk),e(tt,xk),e(tt,ts),w(ur,ts,null),e(ts,Mk),e(ts,fr),e(fr,zk),e(fr,jp),e(jp,qk),e(fr,jk),_(o,bf,k),_(o,Ko,k),e(Ko,os),e(os,Cp),w(gr,Cp,null),e(Ko,Ck),e(Ko,Pp),e(Pp,Pk),_(o,wf,k),_(o,bt,k),w(_r,bt,null),e(bt,Ak),e(bt,kr),e(kr,Lk),e(kr,Ap),e(Ap,Ok),e(kr,Nk),e(bt,Ik),e(bt,vr),e(vr,Dk),e(vr,oc),e(oc,Sk),e(vr,Wk),e(bt,Uk),e(bt,qo),w(yr,qo,null),e(qo,Bk),e(qo,Lp),e(Lp,Rk),e(qo,Hk),e(qo,Tr),e(Tr,nc),e(nc,Kk),e(nc,Op),e(Op,Qk),e(Tr,Vk),e(Tr,sc),e(sc,Jk),e(sc,Np),e(Np,Gk),e(bt,Xk),e(bt,Qt),w(br,Qt,null),e(Qt,Yk),e(Qt,Ip),e(Ip,Zk),e(Qt,ev),w(ns,Qt,null),e(Qt,tv),e(Qt,Qo),e(Qo,ov),e(Qo,Dp),e(Dp,nv),e(Qo,sv),e(Qo,Sp),e(Sp,av),e(Qo,rv),_(o,Ef,k),_(o,Vo,k),e(Vo,ss),e(ss,Wp),w(wr,Wp,null),e(Vo,iv),e(Vo,Up),e(Up,lv),_(o,$f,k),_(o,Jo,k),w(Er,Jo,null),e(Jo,dv),e(Jo,$r),e($r,cv),e($r,ac),e(ac,pv),e($r,hv),_(o,Ff,k),_(o,Go,k),w(Fr,Go,null),e(Go,mv),e(Go,xr),e(xr,uv),e(xr,rc),e(rc,fv),e(xr,gv),_(o,xf,k),_(o,Xo,k),e(Xo,as),e(as,Bp),w(Mr,Bp,null),e(Xo,_v),e(Xo,Rp),e(Rp,kv),_(o,Mf,k),_(o,wt,k),w(zr,wt,null),e(wt,vv),e(wt,Hp),e(Hp,yv),e(wt,Tv),e(wt,qr),e(qr,bv),e(qr,ic),e(ic,wv),e(qr,Ev),e(wt,$v),e(wt,jr),e(jr,Fv),e(jr,Cr),e(Cr,xv),e(jr,Mv),e(wt,zv),e(wt,Vt),w(Pr,Vt,null),e(Vt,qv),e(Vt,Yo),e(Yo,jv),e(Yo,lc),e(lc,Cv),e(Yo,Pv),e(Yo,Kp),e(Kp,Av),e(Yo,Lv),e(Vt,Ov),w(rs,Vt,null),e(Vt,Nv),w(is,Vt,null),_(o,zf,k),_(o,Zo,k),e(Zo,ls),e(ls,Qp),w(Ar,Qp,null),e(Zo,Iv),e(Zo,Vp),e(Vp,Dv),_(o,qf,k),_(o,ht,k),w(Lr,ht,null),e(ht,Sv),e(ht,Jp),e(Jp,Wv),e(ht,Uv),e(ht,Gp),e(Gp,Bv),e(ht,Rv),e(ht,Or),e(Or,Hv),e(Or,dc),e(dc,Kv),e(Or,Qv),e(ht,Vv),e(ht,Nr),e(Nr,Jv),e(Nr,Ir),e(Ir,Gv),e(Nr,Xv),e(ht,Yv),e(ht,Jt),w(Dr,Jt,null),e(Jt,Zv),e(Jt,en),e(en,ey),e(en,cc),e(cc,ty),e(en,oy),e(en,Xp),e(Xp,ny),e(en,sy),e(Jt,ay),w(ds,Jt,null),e(Jt,ry),w(cs,Jt,null),_(o,jf,k),_(o,tn,k),e(tn,ps),e(ps,Yp),w(Sr,Yp,null),e(tn,iy),e(tn,Zp),e(Zp,ly),_(o,Cf,k),_(o,Et,k),w(Wr,Et,null),e(Et,dy),e(Et,Ur),e(Ur,cy),e(Ur,eh),e(eh,py),e(Ur,hy),e(Et,my),e(Et,Br),e(Br,uy),e(Br,pc),e(pc,fy),e(Br,gy),e(Et,_y),e(Et,Rr),e(Rr,ky),e(Rr,Hr),e(Hr,vy),e(Rr,yy),e(Et,Ty),e(Et,Gt),w(Kr,Gt,null),e(Gt,by),e(Gt,on),e(on,wy),e(on,hc),e(hc,Ey),e(on,$y),e(on,th),e(th,Fy),e(on,xy),e(Gt,My),w(hs,Gt,null),e(Gt,zy),w(ms,Gt,null),_(o,Pf,k),_(o,nn,k),e(nn,us),e(us,oh),w(Qr,oh,null),e(nn,qy),e(nn,nh),e(nh,jy),_(o,Af,k),_(o,mt,k),w(Vr,mt,null),e(mt,Cy),e(mt,sh),e(sh,Py),e(mt,Ay),e(mt,ah),e(ah,Ly),e(mt,Oy),e(mt,Jr),e(Jr,Ny),e(Jr,mc),e(mc,Iy),e(Jr,Dy),e(mt,Sy),e(mt,Gr),e(Gr,Wy),e(Gr,Xr),e(Xr,Uy),e(Gr,By),e(mt,Ry),e(mt,Mt),w(Yr,Mt,null),e(Mt,Hy),e(Mt,sn),e(sn,Ky),e(sn,uc),e(uc,Qy),e(sn,Vy),e(sn,rh),e(rh,Jy),e(sn,Gy),e(Mt,Xy),w(fs,Mt,null),e(Mt,Yy),w(gs,Mt,null),e(Mt,Zy),w(_s,Mt,null),_(o,Lf,k),_(o,an,k),e(an,ks),e(ks,ih),w(Zr,ih,null),e(an,eT),e(an,lh),e(lh,tT),_(o,Of,k),_(o,$t,k),w(ei,$t,null),e($t,oT),e($t,dh),e(dh,nT),e($t,sT),e($t,ti),e(ti,aT),e(ti,fc),e(fc,rT),e(ti,iT),e($t,lT),e($t,oi),e(oi,dT),e(oi,ni),e(ni,cT),e(oi,pT),e($t,hT),e($t,pt),w(si,pt,null),e(pt,mT),e(pt,rn),e(rn,uT),e(rn,gc),e(gc,fT),e(rn,gT),e(rn,ch),e(ch,_T),e(rn,kT),e(pt,vT),w(vs,pt,null),e(pt,yT),w(ys,pt,null),e(pt,TT),w(Ts,pt,null),e(pt,bT),w(bs,pt,null),e(pt,wT),w(ws,pt,null),_(o,Nf,k),_(o,ln,k),e(ln,Es),e(Es,ph),w(ai,ph,null),e(ln,ET),e(ln,hh),e(hh,$T),_(o,If,k),_(o,Ft,k),w(ri,Ft,null),e(Ft,FT),e(Ft,mh),e(mh,xT),e(Ft,MT),e(Ft,ii),e(ii,zT),e(ii,_c),e(_c,qT),e(ii,jT),e(Ft,CT),e(Ft,li),e(li,PT),e(li,di),e(di,AT),e(li,LT),e(Ft,OT),e(Ft,Xt),w(ci,Xt,null),e(Xt,NT),e(Xt,dn),e(dn,IT),e(dn,kc),e(kc,DT),e(dn,ST),e(dn,uh),e(uh,WT),e(dn,UT),e(Xt,BT),w($s,Xt,null),e(Xt,RT),w(Fs,Xt,null),_(o,Df,k),_(o,cn,k),e(cn,xs),e(xs,fh),w(pi,fh,null),e(cn,HT),e(cn,gh),e(gh,KT),_(o,Sf,k),_(o,ut,k),w(hi,ut,null),e(ut,QT),e(ut,_h),e(_h,VT),e(ut,JT),e(ut,kh),e(kh,GT),e(ut,XT),e(ut,mi),e(mi,YT),e(mi,vc),e(vc,ZT),e(mi,eb),e(ut,tb),e(ut,ui),e(ui,ob),e(ui,fi),e(fi,nb),e(ui,sb),e(ut,ab),e(ut,zt),w(gi,zt,null),e(zt,rb),e(zt,pn),e(pn,ib),e(pn,yc),e(yc,lb),e(pn,db),e(pn,vh),e(vh,cb),e(pn,pb),e(zt,hb),w(Ms,zt,null),e(zt,mb),w(zs,zt,null),e(zt,ub),w(qs,zt,null),_(o,Wf,k),_(o,hn,k),e(hn,js),e(js,yh),w(_i,yh,null),e(hn,fb),e(hn,Th),e(Th,gb),_(o,Uf,k),_(o,xt,k),w(ki,xt,null),e(xt,_b),e(xt,mn),e(mn,kb),e(mn,bh),e(bh,vb),e(mn,yb),e(mn,wh),e(wh,Tb),e(mn,bb),e(xt,wb),e(xt,vi),e(vi,Eb),e(vi,Tc),e(Tc,$b),e(vi,Fb),e(xt,xb),e(xt,yi),e(yi,Mb),e(yi,Ti),e(Ti,zb),e(yi,qb),e(xt,jb),e(xt,qt),w(bi,qt,null),e(qt,Cb),e(qt,un),e(un,Pb),e(un,bc),e(bc,Ab),e(un,Lb),e(un,Eh),e(Eh,Ob),e(un,Nb),e(qt,Ib),w(Cs,qt,null),e(qt,Db),w(Ps,qt,null),e(qt,Sb),w(As,qt,null),_(o,Bf,k),_(o,fn,k),e(fn,Ls),e(Ls,$h),w(wi,$h,null),e(fn,Wb),e(fn,Fh),e(Fh,Ub),_(o,Rf,k),_(o,ft,k),w(Ei,ft,null),e(ft,Bb),e(ft,xh),e(xh,Rb),e(ft,Hb),e(ft,$i),e($i,Kb),e($i,wc),e(wc,Qb),e($i,Vb),e(ft,Jb),e(ft,Fi),e(Fi,Gb),e(Fi,xi),e(xi,Xb),e(Fi,Yb),e(ft,Zb),w(Os,ft,null),e(ft,ew),e(ft,Yt),w(Mi,Yt,null),e(Yt,tw),e(Yt,gn),e(gn,ow),e(gn,Ec),e(Ec,nw),e(gn,sw),e(gn,Mh),e(Mh,aw),e(gn,rw),e(Yt,iw),w(Ns,Yt,null),e(Yt,lw),w(Is,Yt,null),_(o,Hf,k),_(o,_n,k),e(_n,Ds),e(Ds,zh),w(zi,zh,null),e(_n,dw),e(_n,qh),e(qh,cw),_(o,Kf,k),_(o,ot,k),w(qi,ot,null),e(ot,pw),e(ot,jh),e(jh,hw),e(ot,mw),e(ot,Ch),e(Ch,uw),e(ot,fw),e(ot,ji),e(ji,gw),e(ji,$c),e($c,_w),e(ji,kw),e(ot,vw),e(ot,Ci),e(Ci,yw),e(Ci,Pi),e(Pi,Tw),e(Ci,bw),e(ot,ww),w(Ss,ot,null),e(ot,Ew),e(ot,Zt),w(Ai,Zt,null),e(Zt,$w),e(Zt,kn),e(kn,Fw),e(kn,Fc),e(Fc,xw),e(kn,Mw),e(kn,Ph),e(Ph,zw),e(kn,qw),e(Zt,jw),w(Ws,Zt,null),e(Zt,Cw),w(Us,Zt,null),_(o,Qf,k),_(o,vn,k),e(vn,Bs),e(Bs,Ah),w(Li,Ah,null),e(vn,Pw),e(vn,Lh),e(Lh,Aw),_(o,Vf,k),_(o,nt,k),w(Oi,nt,null),e(nt,Lw),e(nt,Oh),e(Oh,Ow),e(nt,Nw),e(nt,Nh),e(Nh,Iw),e(nt,Dw),e(nt,Ni),e(Ni,Sw),e(Ni,xc),e(xc,Ww),e(Ni,Uw),e(nt,Bw),e(nt,Ii),e(Ii,Rw),e(Ii,Di),e(Di,Hw),e(Ii,Kw),e(nt,Qw),w(Rs,nt,null),e(nt,Vw),e(nt,jt),w(Si,jt,null),e(jt,Jw),e(jt,yn),e(yn,Gw),e(yn,Mc),e(Mc,Xw),e(yn,Yw),e(yn,Ih),e(Ih,Zw),e(yn,eE),e(jt,tE),w(Hs,jt,null),e(jt,oE),w(Ks,jt,null),e(jt,nE),w(Qs,jt,null),_(o,Jf,k),_(o,Tn,k),e(Tn,Vs),e(Vs,Dh),w(Wi,Dh,null),e(Tn,sE),e(Tn,Sh),e(Sh,aE),_(o,Gf,k),_(o,gt,k),w(Ui,gt,null),e(gt,rE),e(gt,Wh),e(Wh,iE),e(gt,lE),e(gt,Bi),e(Bi,dE),e(Bi,zc),e(zc,cE),e(Bi,pE),e(gt,hE),e(gt,Ri),e(Ri,mE),e(Ri,Hi),e(Hi,uE),e(Ri,fE),e(gt,gE),w(Js,gt,null),e(gt,_E),e(gt,Ct),w(Ki,Ct,null),e(Ct,kE),e(Ct,bn),e(bn,vE),e(bn,qc),e(qc,yE),e(bn,TE),e(bn,Uh),e(Uh,bE),e(bn,wE),e(Ct,EE),w(Gs,Ct,null),e(Ct,$E),w(Xs,Ct,null),e(Ct,FE),w(Ys,Ct,null),_(o,Xf,k),_(o,wn,k),e(wn,Zs),e(Zs,Bh),w(Qi,Bh,null),e(wn,xE),e(wn,Rh),e(Rh,ME),_(o,Yf,k),_(o,_t,k),w(Vi,_t,null),e(_t,zE),e(_t,Hh),e(Hh,qE),e(_t,jE),e(_t,Ji),e(Ji,CE),e(Ji,jc),e(jc,PE),e(Ji,AE),e(_t,LE),e(_t,Gi),e(Gi,OE),e(Gi,Xi),e(Xi,NE),e(Gi,IE),e(_t,DE),w(ea,_t,null),e(_t,SE),e(_t,eo),w(Yi,eo,null),e(eo,WE),e(eo,En),e(En,UE),e(En,Cc),e(Cc,BE),e(En,RE),e(En,Kh),e(Kh,HE),e(En,KE),e(eo,QE),w(ta,eo,null),e(eo,VE),w(oa,eo,null),_(o,Zf,k),_(o,$n,k),e($n,na),e(na,Qh),w(Zi,Qh,null),e($n,JE),e($n,Vh),e(Vh,GE),_(o,eg,k),_(o,st,k),w(el,st,null),e(st,XE),e(st,Jh),e(Jh,YE),e(st,ZE),e(st,Gh),e(Gh,e$),e(st,t$),e(st,tl),e(tl,o$),e(tl,Pc),e(Pc,n$),e(tl,s$),e(st,a$),e(st,ol),e(ol,r$),e(ol,nl),e(nl,i$),e(ol,l$),e(st,d$),w(sa,st,null),e(st,c$),e(st,Pt),w(sl,Pt,null),e(Pt,p$),e(Pt,Fn),e(Fn,h$),e(Fn,Ac),e(Ac,m$),e(Fn,u$),e(Fn,Xh),e(Xh,f$),e(Fn,g$),e(Pt,_$),w(aa,Pt,null),e(Pt,k$),w(ra,Pt,null),e(Pt,v$),w(ia,Pt,null),_(o,tg,k),_(o,xn,k),e(xn,la),e(la,Yh),w(al,Yh,null),e(xn,y$),e(xn,Zh),e(Zh,T$),_(o,og,k),_(o,kt,k),w(rl,kt,null),e(kt,b$),e(kt,Mn),e(Mn,w$),e(Mn,em),e(em,E$),e(Mn,$$),e(Mn,tm),e(tm,F$),e(Mn,x$),e(kt,M$),e(kt,il),e(il,z$),e(il,Lc),e(Lc,q$),e(il,j$),e(kt,C$),e(kt,ll),e(ll,P$),e(ll,dl),e(dl,A$),e(ll,L$),e(kt,O$),w(da,kt,null),e(kt,N$),e(kt,At),w(cl,At,null),e(At,I$),e(At,zn),e(zn,D$),e(zn,Oc),e(Oc,S$),e(zn,W$),e(zn,om),e(om,U$),e(zn,B$),e(At,R$),w(ca,At,null),e(At,H$),w(pa,At,null),e(At,K$),w(ha,At,null),_(o,ng,k),_(o,qn,k),e(qn,ma),e(ma,nm),w(pl,nm,null),e(qn,Q$),e(qn,sm),e(sm,V$),_(o,sg,k),_(o,at,k),w(hl,at,null),e(at,J$),e(at,am),e(am,G$),e(at,X$),e(at,ml),e(ml,Y$),e(ml,Nc),e(Nc,Z$),e(ml,e1),e(at,t1),e(at,ul),e(ul,o1),e(ul,fl),e(fl,n1),e(ul,s1),e(at,a1),e(at,rm),e(rm,r1),e(at,i1),e(at,_o),e(_o,im),e(im,gl),e(gl,l1),e(_o,d1),e(_o,lm),e(lm,_l),e(_l,c1),e(_o,p1),e(_o,dm),e(dm,kl),e(kl,h1),e(_o,m1),e(_o,cm),e(cm,vl),e(vl,u1),e(at,f1),e(at,to),w(yl,to,null),e(to,g1),e(to,jn),e(jn,_1),e(jn,pm),e(pm,k1),e(jn,v1),e(jn,hm),e(hm,y1),e(jn,T1),e(to,b1),w(ua,to,null),e(to,w1),w(fa,to,null),_(o,ag,k),_(o,Cn,k),e(Cn,ga),e(ga,mm),w(Tl,mm,null),e(Cn,E1),e(Cn,um),e(um,$1),_(o,rg,k),_(o,Ze,k),w(bl,Ze,null),e(Ze,F1),e(Ze,fm),e(fm,x1),e(Ze,M1),e(Ze,gm),e(gm,z1),e(Ze,q1),e(Ze,wl),e(wl,j1),e(wl,Ic),e(Ic,C1),e(wl,P1),e(Ze,A1),e(Ze,El),e(El,L1),e(El,$l),e($l,O1),e(El,N1),e(Ze,I1),e(Ze,_m),e(_m,D1),e(Ze,S1),e(Ze,ko),e(ko,km),e(km,Fl),e(Fl,W1),e(ko,U1),e(ko,vm),e(vm,xl),e(xl,B1),e(ko,R1),e(ko,ym),e(ym,Ml),e(Ml,H1),e(ko,K1),e(ko,Tm),e(Tm,zl),e(zl,Q1),e(Ze,V1),e(Ze,oo),w(ql,oo,null),e(oo,J1),e(oo,Pn),e(Pn,G1),e(Pn,bm),e(bm,X1),e(Pn,Y1),e(Pn,wm),e(wm,Z1),e(Pn,e2),e(oo,t2),w(_a,oo,null),e(oo,o2),w(ka,oo,null),_(o,ig,k),_(o,An,k),e(An,va),e(va,Em),w(jl,Em,null),e(An,n2),e(An,$m),e($m,s2),_(o,lg,k),_(o,rt,k),w(Cl,rt,null),e(rt,a2),e(rt,Fm),e(Fm,r2),e(rt,i2),e(rt,Pl),e(Pl,l2),e(Pl,Dc),e(Dc,d2),e(Pl,c2),e(rt,p2),e(rt,Al),e(Al,h2),e(Al,Ll),e(Ll,m2),e(Al,u2),e(rt,f2),e(rt,xm),e(xm,g2),e(rt,_2),e(rt,vo),e(vo,Mm),e(Mm,Ol),e(Ol,k2),e(vo,v2),e(vo,zm),e(zm,Nl),e(Nl,y2),e(vo,T2),e(vo,qm),e(qm,Il),e(Il,b2),e(vo,w2),e(vo,jm),e(jm,Dl),e(Dl,E2),e(rt,$2),e(rt,no),w(Sl,no,null),e(no,F2),e(no,Ln),e(Ln,x2),e(Ln,Cm),e(Cm,M2),e(Ln,z2),e(Ln,Pm),e(Pm,q2),e(Ln,j2),e(no,C2),w(ya,no,null),e(no,P2),w(Ta,no,null),_(o,dg,k),_(o,On,k),e(On,ba),e(ba,Am),w(Wl,Am,null),e(On,A2),e(On,Lm),e(Lm,L2),_(o,cg,k),_(o,it,k),w(Ul,it,null),e(it,O2),e(it,Bl),e(Bl,N2),e(Bl,Om),e(Om,I2),e(Bl,D2),e(it,S2),e(it,Rl),e(Rl,W2),e(Rl,Sc),e(Sc,U2),e(Rl,B2),e(it,R2),e(it,Hl),e(Hl,H2),e(Hl,Kl),e(Kl,K2),e(Hl,Q2),e(it,V2),e(it,Nm),e(Nm,J2),e(it,G2),e(it,yo),e(yo,Im),e(Im,Ql),e(Ql,X2),e(yo,Y2),e(yo,Dm),e(Dm,Vl),e(Vl,Z2),e(yo,eF),e(yo,Sm),e(Sm,Jl),e(Jl,tF),e(yo,oF),e(yo,Wm),e(Wm,Gl),e(Gl,nF),e(it,sF),e(it,so),w(Xl,so,null),e(so,aF),e(so,Nn),e(Nn,rF),e(Nn,Um),e(Um,iF),e(Nn,lF),e(Nn,Bm),e(Bm,dF),e(Nn,cF),e(so,pF),w(wa,so,null),e(so,hF),w(Ea,so,null),_(o,pg,k),_(o,In,k),e(In,$a),e($a,Rm),w(Yl,Rm,null),e(In,mF),e(In,Hm),e(Hm,uF),_(o,hg,k),_(o,lt,k),w(Zl,lt,null),e(lt,fF),e(lt,Km),e(Km,gF),e(lt,_F),e(lt,ed),e(ed,kF),e(ed,Wc),e(Wc,vF),e(ed,yF),e(lt,TF),e(lt,td),e(td,bF),e(td,od),e(od,wF),e(td,EF),e(lt,$F),e(lt,Qm),e(Qm,FF),e(lt,xF),e(lt,To),e(To,Vm),e(Vm,nd),e(nd,MF),e(To,zF),e(To,Jm),e(Jm,sd),e(sd,qF),e(To,jF),e(To,Gm),e(Gm,ad),e(ad,CF),e(To,PF),e(To,Xm),e(Xm,rd),e(rd,AF),e(lt,LF),e(lt,ao),w(id,ao,null),e(ao,OF),e(ao,Dn),e(Dn,NF),e(Dn,Ym),e(Ym,IF),e(Dn,DF),e(Dn,Zm),e(Zm,SF),e(Dn,WF),e(ao,UF),w(Fa,ao,null),e(ao,BF),w(xa,ao,null),_(o,mg,k),_(o,Sn,k),e(Sn,Ma),e(Ma,eu),w(ld,eu,null),e(Sn,RF),e(Sn,tu),e(tu,HF),_(o,ug,k),_(o,dt,k),w(dd,dt,null),e(dt,KF),e(dt,ou),e(ou,QF),e(dt,VF),e(dt,cd),e(cd,JF),e(cd,Uc),e(Uc,GF),e(cd,XF),e(dt,YF),e(dt,pd),e(pd,ZF),e(pd,hd),e(hd,e0),e(pd,t0),e(dt,o0),e(dt,nu),e(nu,n0),e(dt,s0),e(dt,bo),e(bo,su),e(su,md),e(md,a0),e(bo,r0),e(bo,au),e(au,ud),e(ud,i0),e(bo,l0),e(bo,ru),e(ru,fd),e(fd,d0),e(bo,c0),e(bo,iu),e(iu,gd),e(gd,p0),e(dt,h0),e(dt,ro),w(_d,ro,null),e(ro,m0),e(ro,Wn),e(Wn,u0),e(Wn,lu),e(lu,f0),e(Wn,g0),e(Wn,du),e(du,_0),e(Wn,k0),e(ro,v0),w(za,ro,null),e(ro,y0),w(qa,ro,null),_(o,fg,k),_(o,Un,k),e(Un,ja),e(ja,cu),w(kd,cu,null),e(Un,T0),e(Un,pu),e(pu,b0),_(o,gg,k),_(o,et,k),w(vd,et,null),e(et,w0),e(et,hu),e(hu,E0),e(et,$0),e(et,mu),e(mu,F0),e(et,x0),e(et,yd),e(yd,M0),e(yd,Bc),e(Bc,z0),e(yd,q0),e(et,j0),e(et,Td),e(Td,C0),e(Td,bd),e(bd,P0),e(Td,A0),e(et,L0),e(et,uu),e(uu,O0),e(et,N0),e(et,wo),e(wo,fu),e(fu,wd),e(wd,I0),e(wo,D0),e(wo,gu),e(gu,Ed),e(Ed,S0),e(wo,W0),e(wo,_u),e(_u,$d),e($d,U0),e(wo,B0),e(wo,ku),e(ku,Fd),e(Fd,R0),e(et,H0),e(et,io),w(xd,io,null),e(io,K0),e(io,Bn),e(Bn,Q0),e(Bn,vu),e(vu,V0),e(Bn,J0),e(Bn,yu),e(yu,G0),e(Bn,X0),e(io,Y0),w(Ca,io,null),e(io,Z0),w(Pa,io,null),_(o,_g,k),_(o,Rn,k),e(Rn,Aa),e(Aa,Tu),w(Md,Tu,null),e(Rn,ex),e(Rn,bu),e(bu,tx),_(o,kg,k),_(o,ct,k),w(zd,ct,null),e(ct,ox),e(ct,Hn),e(Hn,nx),e(Hn,wu),e(wu,sx),e(Hn,ax),e(Hn,Eu),e(Eu,rx),e(Hn,ix),e(ct,lx),e(ct,qd),e(qd,dx),e(qd,Rc),e(Rc,cx),e(qd,px),e(ct,hx),e(ct,jd),e(jd,mx),e(jd,Cd),e(Cd,ux),e(jd,fx),e(ct,gx),e(ct,$u),e($u,_x),e(ct,kx),e(ct,Eo),e(Eo,Fu),e(Fu,Pd),e(Pd,vx),e(Eo,yx),e(Eo,xu),e(xu,Ad),e(Ad,Tx),e(Eo,bx),e(Eo,Mu),e(Mu,Ld),e(Ld,wx),e(Eo,Ex),e(Eo,zu),e(zu,Od),e(Od,$x),e(ct,Fx),e(ct,lo),w(Nd,lo,null),e(lo,xx),e(lo,Kn),e(Kn,Mx),e(Kn,qu),e(qu,zx),e(Kn,qx),e(Kn,ju),e(ju,jx),e(Kn,Cx),e(lo,Px),w(La,lo,null),e(lo,Ax),w(Oa,lo,null),vg=!0},p(o,[k]){const Id={};k&2&&(Id.$$scope={dirty:k,ctx:o}),Xn.$set(Id);const Cu={};k&2&&(Cu.$$scope={dirty:k,ctx:o}),es.$set(Cu);const Pu={};k&2&&(Pu.$$scope={dirty:k,ctx:o}),ns.$set(Pu);const Au={};k&2&&(Au.$$scope={dirty:k,ctx:o}),rs.$set(Au);const Dd={};k&2&&(Dd.$$scope={dirty:k,ctx:o}),is.$set(Dd);const Lu={};k&2&&(Lu.$$scope={dirty:k,ctx:o}),ds.$set(Lu);const Ou={};k&2&&(Ou.$$scope={dirty:k,ctx:o}),cs.$set(Ou);const Nu={};k&2&&(Nu.$$scope={dirty:k,ctx:o}),hs.$set(Nu);const Sd={};k&2&&(Sd.$$scope={dirty:k,ctx:o}),ms.$set(Sd);const Iu={};k&2&&(Iu.$$scope={dirty:k,ctx:o}),fs.$set(Iu);const Du={};k&2&&(Du.$$scope={dirty:k,ctx:o}),gs.$set(Du);const Su={};k&2&&(Su.$$scope={dirty:k,ctx:o}),_s.$set(Su);const Wu={};k&2&&(Wu.$$scope={dirty:k,ctx:o}),vs.$set(Wu);const Uu={};k&2&&(Uu.$$scope={dirty:k,ctx:o}),ys.$set(Uu);const Wd={};k&2&&(Wd.$$scope={dirty:k,ctx:o}),Ts.$set(Wd);const Bu={};k&2&&(Bu.$$scope={dirty:k,ctx:o}),bs.$set(Bu);const $o={};k&2&&($o.$$scope={dirty:k,ctx:o}),ws.$set($o);const Ru={};k&2&&(Ru.$$scope={dirty:k,ctx:o}),$s.$set(Ru);const Hu={};k&2&&(Hu.$$scope={dirty:k,ctx:o}),Fs.$set(Hu);const Ku={};k&2&&(Ku.$$scope={dirty:k,ctx:o}),Ms.$set(Ku);const Qn={};k&2&&(Qn.$$scope={dirty:k,ctx:o}),zs.$set(Qn);const Qu={};k&2&&(Qu.$$scope={dirty:k,ctx:o}),qs.$set(Qu);const Vu={};k&2&&(Vu.$$scope={dirty:k,ctx:o}),Cs.$set(Vu);const Ud={};k&2&&(Ud.$$scope={dirty:k,ctx:o}),Ps.$set(Ud);const Ju={};k&2&&(Ju.$$scope={dirty:k,ctx:o}),As.$set(Ju);const Gu={};k&2&&(Gu.$$scope={dirty:k,ctx:o}),Os.$set(Gu);const Xu={};k&2&&(Xu.$$scope={dirty:k,ctx:o}),Ns.$set(Xu);const Fo={};k&2&&(Fo.$$scope={dirty:k,ctx:o}),Is.$set(Fo);const xo={};k&2&&(xo.$$scope={dirty:k,ctx:o}),Ss.$set(xo);const Yu={};k&2&&(Yu.$$scope={dirty:k,ctx:o}),Ws.$set(Yu);const Zu={};k&2&&(Zu.$$scope={dirty:k,ctx:o}),Us.$set(Zu);const ef={};k&2&&(ef.$$scope={dirty:k,ctx:o}),Rs.$set(ef);const Vn={};k&2&&(Vn.$$scope={dirty:k,ctx:o}),Hs.$set(Vn);const tf={};k&2&&(tf.$$scope={dirty:k,ctx:o}),Ks.$set(tf);const of={};k&2&&(of.$$scope={dirty:k,ctx:o}),Qs.$set(of);const Bd={};k&2&&(Bd.$$scope={dirty:k,ctx:o}),Js.$set(Bd);const nf={};k&2&&(nf.$$scope={dirty:k,ctx:o}),Gs.$set(nf);const sf={};k&2&&(sf.$$scope={dirty:k,ctx:o}),Xs.$set(sf);const af={};k&2&&(af.$$scope={dirty:k,ctx:o}),Ys.$set(af);const vt={};k&2&&(vt.$$scope={dirty:k,ctx:o}),ea.$set(vt);const rf={};k&2&&(rf.$$scope={dirty:k,ctx:o}),ta.$set(rf);const Rd={};k&2&&(Rd.$$scope={dirty:k,ctx:o}),oa.$set(Rd);const lf={};k&2&&(lf.$$scope={dirty:k,ctx:o}),sa.$set(lf);const Jn={};k&2&&(Jn.$$scope={dirty:k,ctx:o}),aa.$set(Jn);const df={};k&2&&(df.$$scope={dirty:k,ctx:o}),ra.$set(df);const Hd={};k&2&&(Hd.$$scope={dirty:k,ctx:o}),ia.$set(Hd);const Hc={};k&2&&(Hc.$$scope={dirty:k,ctx:o}),da.$set(Hc);const cf={};k&2&&(cf.$$scope={dirty:k,ctx:o}),ca.$set(cf);const Kc={};k&2&&(Kc.$$scope={dirty:k,ctx:o}),pa.$set(Kc);const pf={};k&2&&(pf.$$scope={dirty:k,ctx:o}),ha.$set(pf);const Kd={};k&2&&(Kd.$$scope={dirty:k,ctx:o}),ua.$set(Kd);const hf={};k&2&&(hf.$$scope={dirty:k,ctx:o}),fa.$set(hf);const Mo={};k&2&&(Mo.$$scope={dirty:k,ctx:o}),_a.$set(Mo);const mf={};k&2&&(mf.$$scope={dirty:k,ctx:o}),ka.$set(mf);const Gn={};k&2&&(Gn.$$scope={dirty:k,ctx:o}),ya.$set(Gn);const uf={};k&2&&(uf.$$scope={dirty:k,ctx:o}),Ta.$set(uf);const ff={};k&2&&(ff.$$scope={dirty:k,ctx:o}),wa.$set(ff);const Qd={};k&2&&(Qd.$$scope={dirty:k,ctx:o}),Ea.$set(Qd);const Vd={};k&2&&(Vd.$$scope={dirty:k,ctx:o}),Fa.$set(Vd);const gf={};k&2&&(gf.$$scope={dirty:k,ctx:o}),xa.$set(gf);const Jd={};k&2&&(Jd.$$scope={dirty:k,ctx:o}),za.$set(Jd);const _f={};k&2&&(_f.$$scope={dirty:k,ctx:o}),qa.$set(_f);const kf={};k&2&&(kf.$$scope={dirty:k,ctx:o}),Ca.$set(kf);const vf={};k&2&&(vf.$$scope={dirty:k,ctx:o}),Pa.$set(vf);const Ht={};k&2&&(Ht.$$scope={dirty:k,ctx:o}),La.$set(Ht);const Gd={};k&2&&(Gd.$$scope={dirty:k,ctx:o}),Oa.$set(Gd)},i(o){vg||(E(l.$$.fragment,o),E(M.$$.fragment,o),E(We.$$.fragment,o),E(Ue.$$.fragment,o),E(Xn.$$.fragment,o),E(ir.$$.fragment,o),E(lr.$$.fragment,o),E(cr.$$.fragment,o),E(hr.$$.fragment,o),E(mr.$$.fragment,o),E(es.$$.fragment,o),E(ur.$$.fragment,o),E(gr.$$.fragment,o),E(_r.$$.fragment,o),E(yr.$$.fragment,o),E(br.$$.fragment,o),E(ns.$$.fragment,o),E(wr.$$.fragment,o),E(Er.$$.fragment,o),E(Fr.$$.fragment,o),E(Mr.$$.fragment,o),E(zr.$$.fragment,o),E(Pr.$$.fragment,o),E(rs.$$.fragment,o),E(is.$$.fragment,o),E(Ar.$$.fragment,o),E(Lr.$$.fragment,o),E(Dr.$$.fragment,o),E(ds.$$.fragment,o),E(cs.$$.fragment,o),E(Sr.$$.fragment,o),E(Wr.$$.fragment,o),E(Kr.$$.fragment,o),E(hs.$$.fragment,o),E(ms.$$.fragment,o),E(Qr.$$.fragment,o),E(Vr.$$.fragment,o),E(Yr.$$.fragment,o),E(fs.$$.fragment,o),E(gs.$$.fragment,o),E(_s.$$.fragment,o),E(Zr.$$.fragment,o),E(ei.$$.fragment,o),E(si.$$.fragment,o),E(vs.$$.fragment,o),E(ys.$$.fragment,o),E(Ts.$$.fragment,o),E(bs.$$.fragment,o),E(ws.$$.fragment,o),E(ai.$$.fragment,o),E(ri.$$.fragment,o),E(ci.$$.fragment,o),E($s.$$.fragment,o),E(Fs.$$.fragment,o),E(pi.$$.fragment,o),E(hi.$$.fragment,o),E(gi.$$.fragment,o),E(Ms.$$.fragment,o),E(zs.$$.fragment,o),E(qs.$$.fragment,o),E(_i.$$.fragment,o),E(ki.$$.fragment,o),E(bi.$$.fragment,o),E(Cs.$$.fragment,o),E(Ps.$$.fragment,o),E(As.$$.fragment,o),E(wi.$$.fragment,o),E(Ei.$$.fragment,o),E(Os.$$.fragment,o),E(Mi.$$.fragment,o),E(Ns.$$.fragment,o),E(Is.$$.fragment,o),E(zi.$$.fragment,o),E(qi.$$.fragment,o),E(Ss.$$.fragment,o),E(Ai.$$.fragment,o),E(Ws.$$.fragment,o),E(Us.$$.fragment,o),E(Li.$$.fragment,o),E(Oi.$$.fragment,o),E(Rs.$$.fragment,o),E(Si.$$.fragment,o),E(Hs.$$.fragment,o),E(Ks.$$.fragment,o),E(Qs.$$.fragment,o),E(Wi.$$.fragment,o),E(Ui.$$.fragment,o),E(Js.$$.fragment,o),E(Ki.$$.fragment,o),E(Gs.$$.fragment,o),E(Xs.$$.fragment,o),E(Ys.$$.fragment,o),E(Qi.$$.fragment,o),E(Vi.$$.fragment,o),E(ea.$$.fragment,o),E(Yi.$$.fragment,o),E(ta.$$.fragment,o),E(oa.$$.fragment,o),E(Zi.$$.fragment,o),E(el.$$.fragment,o),E(sa.$$.fragment,o),E(sl.$$.fragment,o),E(aa.$$.fragment,o),E(ra.$$.fragment,o),E(ia.$$.fragment,o),E(al.$$.fragment,o),E(rl.$$.fragment,o),E(da.$$.fragment,o),E(cl.$$.fragment,o),E(ca.$$.fragment,o),E(pa.$$.fragment,o),E(ha.$$.fragment,o),E(pl.$$.fragment,o),E(hl.$$.fragment,o),E(yl.$$.fragment,o),E(ua.$$.fragment,o),E(fa.$$.fragment,o),E(Tl.$$.fragment,o),E(bl.$$.fragment,o),E(ql.$$.fragment,o),E(_a.$$.fragment,o),E(ka.$$.fragment,o),E(jl.$$.fragment,o),E(Cl.$$.fragment,o),E(Sl.$$.fragment,o),E(ya.$$.fragment,o),E(Ta.$$.fragment,o),E(Wl.$$.fragment,o),E(Ul.$$.fragment,o),E(Xl.$$.fragment,o),E(wa.$$.fragment,o),E(Ea.$$.fragment,o),E(Yl.$$.fragment,o),E(Zl.$$.fragment,o),E(id.$$.fragment,o),E(Fa.$$.fragment,o),E(xa.$$.fragment,o),E(ld.$$.fragment,o),E(dd.$$.fragment,o),E(_d.$$.fragment,o),E(za.$$.fragment,o),E(qa.$$.fragment,o),E(kd.$$.fragment,o),E(vd.$$.fragment,o),E(xd.$$.fragment,o),E(Ca.$$.fragment,o),E(Pa.$$.fragment,o),E(Md.$$.fragment,o),E(zd.$$.fragment,o),E(Nd.$$.fragment,o),E(La.$$.fragment,o),E(Oa.$$.fragment,o),vg=!0)},o(o){$(l.$$.fragment,o),$(M.$$.fragment,o),$(We.$$.fragment,o),$(Ue.$$.fragment,o),$(Xn.$$.fragment,o),$(ir.$$.fragment,o),$(lr.$$.fragment,o),$(cr.$$.fragment,o),$(hr.$$.fragment,o),$(mr.$$.fragment,o),$(es.$$.fragment,o),$(ur.$$.fragment,o),$(gr.$$.fragment,o),$(_r.$$.fragment,o),$(yr.$$.fragment,o),$(br.$$.fragment,o),$(ns.$$.fragment,o),$(wr.$$.fragment,o),$(Er.$$.fragment,o),$(Fr.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$(Pr.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(Ar.$$.fragment,o),$(Lr.$$.fragment,o),$(Dr.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(Sr.$$.fragment,o),$(Wr.$$.fragment,o),$(Kr.$$.fragment,o),$(hs.$$.fragment,o),$(ms.$$.fragment,o),$(Qr.$$.fragment,o),$(Vr.$$.fragment,o),$(Yr.$$.fragment,o),$(fs.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(Zr.$$.fragment,o),$(ei.$$.fragment,o),$(si.$$.fragment,o),$(vs.$$.fragment,o),$(ys.$$.fragment,o),$(Ts.$$.fragment,o),$(bs.$$.fragment,o),$(ws.$$.fragment,o),$(ai.$$.fragment,o),$(ri.$$.fragment,o),$(ci.$$.fragment,o),$($s.$$.fragment,o),$(Fs.$$.fragment,o),$(pi.$$.fragment,o),$(hi.$$.fragment,o),$(gi.$$.fragment,o),$(Ms.$$.fragment,o),$(zs.$$.fragment,o),$(qs.$$.fragment,o),$(_i.$$.fragment,o),$(ki.$$.fragment,o),$(bi.$$.fragment,o),$(Cs.$$.fragment,o),$(Ps.$$.fragment,o),$(As.$$.fragment,o),$(wi.$$.fragment,o),$(Ei.$$.fragment,o),$(Os.$$.fragment,o),$(Mi.$$.fragment,o),$(Ns.$$.fragment,o),$(Is.$$.fragment,o),$(zi.$$.fragment,o),$(qi.$$.fragment,o),$(Ss.$$.fragment,o),$(Ai.$$.fragment,o),$(Ws.$$.fragment,o),$(Us.$$.fragment,o),$(Li.$$.fragment,o),$(Oi.$$.fragment,o),$(Rs.$$.fragment,o),$(Si.$$.fragment,o),$(Hs.$$.fragment,o),$(Ks.$$.fragment,o),$(Qs.$$.fragment,o),$(Wi.$$.fragment,o),$(Ui.$$.fragment,o),$(Js.$$.fragment,o),$(Ki.$$.fragment,o),$(Gs.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(Qi.$$.fragment,o),$(Vi.$$.fragment,o),$(ea.$$.fragment,o),$(Yi.$$.fragment,o),$(ta.$$.fragment,o),$(oa.$$.fragment,o),$(Zi.$$.fragment,o),$(el.$$.fragment,o),$(sa.$$.fragment,o),$(sl.$$.fragment,o),$(aa.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),$(al.$$.fragment,o),$(rl.$$.fragment,o),$(da.$$.fragment,o),$(cl.$$.fragment,o),$(ca.$$.fragment,o),$(pa.$$.fragment,o),$(ha.$$.fragment,o),$(pl.$$.fragment,o),$(hl.$$.fragment,o),$(yl.$$.fragment,o),$(ua.$$.fragment,o),$(fa.$$.fragment,o),$(Tl.$$.fragment,o),$(bl.$$.fragment,o),$(ql.$$.fragment,o),$(_a.$$.fragment,o),$(ka.$$.fragment,o),$(jl.$$.fragment,o),$(Cl.$$.fragment,o),$(Sl.$$.fragment,o),$(ya.$$.fragment,o),$(Ta.$$.fragment,o),$(Wl.$$.fragment,o),$(Ul.$$.fragment,o),$(Xl.$$.fragment,o),$(wa.$$.fragment,o),$(Ea.$$.fragment,o),$(Yl.$$.fragment,o),$(Zl.$$.fragment,o),$(id.$$.fragment,o),$(Fa.$$.fragment,o),$(xa.$$.fragment,o),$(ld.$$.fragment,o),$(dd.$$.fragment,o),$(_d.$$.fragment,o),$(za.$$.fragment,o),$(qa.$$.fragment,o),$(kd.$$.fragment,o),$(vd.$$.fragment,o),$(xd.$$.fragment,o),$(Ca.$$.fragment,o),$(Pa.$$.fragment,o),$(Md.$$.fragment,o),$(zd.$$.fragment,o),$(Nd.$$.fragment,o),$(La.$$.fragment,o),$(Oa.$$.fragment,o),vg=!1},d(o){t(d),o&&t(g),o&&t(m),F(l),o&&t(fe),o&&t(W),F(M),o&&t(ge),o&&t(U),o&&t(_e),o&&t(R),o&&t(ke),o&&t(H),o&&t(oe),o&&t(C),o&&t(ve),o&&t(B),o&&t(ye),o&&t(S),o&&t(y),o&&t(q),F(We),o&&t(Ke),o&&t(he),F(Ue),F(Xn),o&&t(yf),o&&t(Ro),F(ir),o&&t(Tf),o&&t(tt),F(lr),F(cr),F(hr),F(mr),F(es),F(ur),o&&t(bf),o&&t(Ko),F(gr),o&&t(wf),o&&t(bt),F(_r),F(yr),F(br),F(ns),o&&t(Ef),o&&t(Vo),F(wr),o&&t($f),o&&t(Jo),F(Er),o&&t(Ff),o&&t(Go),F(Fr),o&&t(xf),o&&t(Xo),F(Mr),o&&t(Mf),o&&t(wt),F(zr),F(Pr),F(rs),F(is),o&&t(zf),o&&t(Zo),F(Ar),o&&t(qf),o&&t(ht),F(Lr),F(Dr),F(ds),F(cs),o&&t(jf),o&&t(tn),F(Sr),o&&t(Cf),o&&t(Et),F(Wr),F(Kr),F(hs),F(ms),o&&t(Pf),o&&t(nn),F(Qr),o&&t(Af),o&&t(mt),F(Vr),F(Yr),F(fs),F(gs),F(_s),o&&t(Lf),o&&t(an),F(Zr),o&&t(Of),o&&t($t),F(ei),F(si),F(vs),F(ys),F(Ts),F(bs),F(ws),o&&t(Nf),o&&t(ln),F(ai),o&&t(If),o&&t(Ft),F(ri),F(ci),F($s),F(Fs),o&&t(Df),o&&t(cn),F(pi),o&&t(Sf),o&&t(ut),F(hi),F(gi),F(Ms),F(zs),F(qs),o&&t(Wf),o&&t(hn),F(_i),o&&t(Uf),o&&t(xt),F(ki),F(bi),F(Cs),F(Ps),F(As),o&&t(Bf),o&&t(fn),F(wi),o&&t(Rf),o&&t(ft),F(Ei),F(Os),F(Mi),F(Ns),F(Is),o&&t(Hf),o&&t(_n),F(zi),o&&t(Kf),o&&t(ot),F(qi),F(Ss),F(Ai),F(Ws),F(Us),o&&t(Qf),o&&t(vn),F(Li),o&&t(Vf),o&&t(nt),F(Oi),F(Rs),F(Si),F(Hs),F(Ks),F(Qs),o&&t(Jf),o&&t(Tn),F(Wi),o&&t(Gf),o&&t(gt),F(Ui),F(Js),F(Ki),F(Gs),F(Xs),F(Ys),o&&t(Xf),o&&t(wn),F(Qi),o&&t(Yf),o&&t(_t),F(Vi),F(ea),F(Yi),F(ta),F(oa),o&&t(Zf),o&&t($n),F(Zi),o&&t(eg),o&&t(st),F(el),F(sa),F(sl),F(aa),F(ra),F(ia),o&&t(tg),o&&t(xn),F(al),o&&t(og),o&&t(kt),F(rl),F(da),F(cl),F(ca),F(pa),F(ha),o&&t(ng),o&&t(qn),F(pl),o&&t(sg),o&&t(at),F(hl),F(yl),F(ua),F(fa),o&&t(ag),o&&t(Cn),F(Tl),o&&t(rg),o&&t(Ze),F(bl),F(ql),F(_a),F(ka),o&&t(ig),o&&t(An),F(jl),o&&t(lg),o&&t(rt),F(Cl),F(Sl),F(ya),F(Ta),o&&t(dg),o&&t(On),F(Wl),o&&t(cg),o&&t(it),F(Ul),F(Xl),F(wa),F(Ea),o&&t(pg),o&&t(In),F(Yl),o&&t(hg),o&&t(lt),F(Zl),F(id),F(Fa),F(xa),o&&t(mg),o&&t(Sn),F(ld),o&&t(ug),o&&t(dt),F(dd),F(_d),F(za),F(qa),o&&t(fg),o&&t(Un),F(kd),o&&t(gg),o&&t(et),F(vd),F(xd),F(Ca),F(Pa),o&&t(_g),o&&t(Rn),F(Md),o&&t(kg),o&&t(ct),F(zd),F(Nd),F(La),F(Oa)}}}const pP={local:"electra",sections:[{local:"overview",title:"Overview"},{local:"transformers.ElectraConfig",title:"ElectraConfig"},{local:"transformers.ElectraTokenizer",title:"ElectraTokenizer"},{local:"transformers.ElectraTokenizerFast",title:"ElectraTokenizerFast"},{local:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",title:"Electra specific outputs"},{local:"transformers.ElectraModel",title:"ElectraModel"},{local:"transformers.ElectraForPreTraining",title:"ElectraForPreTraining"},{local:"transformers.ElectraForCausalLM",title:"ElectraForCausalLM"},{local:"transformers.ElectraForMaskedLM",title:"ElectraForMaskedLM"},{local:"transformers.ElectraForSequenceClassification",title:"ElectraForSequenceClassification"},{local:"transformers.ElectraForMultipleChoice",title:"ElectraForMultipleChoice"},{local:"transformers.ElectraForTokenClassification",title:"ElectraForTokenClassification"},{local:"transformers.ElectraForQuestionAnswering",title:"ElectraForQuestionAnswering"},{local:"transformers.TFElectraModel",title:"TFElectraModel"},{local:"transformers.TFElectraForPreTraining",title:"TFElectraForPreTraining"},{local:"transformers.TFElectraForMaskedLM",title:"TFElectraForMaskedLM"},{local:"transformers.TFElectraForSequenceClassification",title:"TFElectraForSequenceClassification"},{local:"transformers.TFElectraForMultipleChoice",title:"TFElectraForMultipleChoice"},{local:"transformers.TFElectraForTokenClassification",title:"TFElectraForTokenClassification"},{local:"transformers.TFElectraForQuestionAnswering",title:"TFElectraForQuestionAnswering"},{local:"transformers.FlaxElectraModel",title:"FlaxElectraModel"},{local:"transformers.FlaxElectraForPreTraining",title:"FlaxElectraForPreTraining"},{local:"transformers.FlaxElectraForCausalLM",title:"FlaxElectraForCausalLM"},{local:"transformers.FlaxElectraForMaskedLM",title:"FlaxElectraForMaskedLM"},{local:"transformers.FlaxElectraForSequenceClassification",title:"FlaxElectraForSequenceClassification"},{local:"transformers.FlaxElectraForMultipleChoice",title:"FlaxElectraForMultipleChoice"},{local:"transformers.FlaxElectraForTokenClassification",title:"FlaxElectraForTokenClassification"},{local:"transformers.FlaxElectraForQuestionAnswering",title:"FlaxElectraForQuestionAnswering"}],title:"ELECTRA"};function hP(x){return Xj(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vP extends Qj{constructor(d){super();Vj(this,d,hP,cP,Jj,{})}}export{vP as default,pP as metadata};
