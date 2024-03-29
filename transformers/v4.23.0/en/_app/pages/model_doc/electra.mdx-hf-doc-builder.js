import{S as hj,i as mj,s as uj,e as a,k as c,w as T,t as n,M as fj,c as r,d as t,m as p,a as i,x as b,h as s,b as u,G as e,g as _,y as w,q as E,o as $,B as F,v as gj,L as le}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ie}from"../../chunks/Tip-hf-doc-builder.js";import{D as I}from"../../chunks/Docstring-hf-doc-builder.js";import{C as de}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Se}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function _j(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraModel, ElectraConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),g=n("Examples:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function kj(x){let d,g,h,f,v;return f=new de({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),g=n("pair mask has the following format:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"pair mask has the following format:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function vj(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function yj(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, ElectraModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function Tj(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function bj(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraForPreTraining, ElectraTokenizerFast
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
[<span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>]`}}),{c(){d=a("p"),g=n("Examples:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function wj(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function Ej(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, ElectraForCausalLM, ElectraConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function $j(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function Fj(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, ElectraForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function xj(x){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.22</span>`}}),{c(){T(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:le,i(h){g||(E(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Mj(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function zj(x){let d,g,h,f,v;return f=new de({props:{code:`import torch
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of single-label classification:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example of single-label classification:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function jj(x){let d,g;return d=new de({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = ElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.06</span>`}}),{c(){T(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:le,i(h){g||(E(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Cj(x){let d,g,h,f,v;return f=new de({props:{code:`import torch
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of multi-label classification:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example of multi-label classification:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function qj(x){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:le,i(h){g||(E(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Pj(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function Aj(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, ElectraForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function Oj(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function Lj(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, ElectraForTokenClassification
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
[<span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;B-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function Nj(x){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.11</span>`}}),{c(){T(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:le,i(h){g||(E(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Ij(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function Dj(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, ElectraForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function Sj(x){let d,g;return d=new de({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">2.64</span>`}}),{c(){T(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:le,i(h){g||(E(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Wj(x){let d,g,h,f,v,l,m,z,Te,fe,W,ae,ee,M,be,K,we,ge,U,Ee,re,Q,$e,_e,R,Fe,ke,H,me,xe,oe,q,A,ve,B,ue,Me,V,ne,ze,P,je,J,ce,Ce,G,pe,qe,D,ye,S,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),h=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=c(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=c(),W=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),q=a("ul"),A=a("li"),ve=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=c(),P=a("li"),je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=n("model([input_ids, attention_mask])"),Ce=n(" or "),G=a("code"),pe=n("model([input_ids, attention_mask, token_type_ids])"),qe=c(),D=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var j=i(d);g=s(j,"TensorFlow models and layers in "),h=r(j,"CODE",{});var De=i(h);f=s(De,"transformers"),De.forEach(t),v=s(j," accept two formats as input:"),j.forEach(t),l=p(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=p(te),W=r(te,"LI",{});var Qe=i(W);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=p(y),M=r(y,"P",{});var C=i(M);be=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(C,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),re=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(C,"CODE",{});var he=i(Q);$e=s(he,"fit()"),he.forEach(t),_e=s(C," and "),R=r(C,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),oe=p(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=p(N),P=r(N,"LI",{});var Y=i(P);je=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ce=s(He,"model([input_ids, attention_mask])"),He.forEach(t),Ce=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);pe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=p(N),D=r(N,"LI",{});var Ne=i(D);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ne,"CODE",{});var Be=i(S);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=p(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,j){_(y,d,j),e(d,g),e(d,h),e(h,f),e(d,v),_(y,l,j),_(y,m,j),e(m,z),e(z,Te),e(m,fe),e(m,W),e(W,ae),_(y,ee,j),_(y,M,j),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ke),e(M,H),e(H,me),e(M,xe),_(y,oe,j),_(y,q,j),e(q,A),e(A,ve),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,je),e(P,J),e(J,ce),e(P,Ce),e(P,G),e(G,pe),e(q,qe),e(q,D),e(D,ye),e(D,S),e(S,Pe),_(y,Z,j),_(y,O,j),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function Uj(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function Bj(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function Rj(x){let d,g,h,f,v,l,m,z,Te,fe,W,ae,ee,M,be,K,we,ge,U,Ee,re,Q,$e,_e,R,Fe,ke,H,me,xe,oe,q,A,ve,B,ue,Me,V,ne,ze,P,je,J,ce,Ce,G,pe,qe,D,ye,S,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),h=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=c(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=c(),W=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),q=a("ul"),A=a("li"),ve=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=c(),P=a("li"),je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=n("model([input_ids, attention_mask])"),Ce=n(" or "),G=a("code"),pe=n("model([input_ids, attention_mask, token_type_ids])"),qe=c(),D=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var j=i(d);g=s(j,"TensorFlow models and layers in "),h=r(j,"CODE",{});var De=i(h);f=s(De,"transformers"),De.forEach(t),v=s(j," accept two formats as input:"),j.forEach(t),l=p(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=p(te),W=r(te,"LI",{});var Qe=i(W);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=p(y),M=r(y,"P",{});var C=i(M);be=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(C,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),re=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(C,"CODE",{});var he=i(Q);$e=s(he,"fit()"),he.forEach(t),_e=s(C," and "),R=r(C,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),oe=p(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=p(N),P=r(N,"LI",{});var Y=i(P);je=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ce=s(He,"model([input_ids, attention_mask])"),He.forEach(t),Ce=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);pe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=p(N),D=r(N,"LI",{});var Ne=i(D);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ne,"CODE",{});var Be=i(S);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=p(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,j){_(y,d,j),e(d,g),e(d,h),e(h,f),e(d,v),_(y,l,j),_(y,m,j),e(m,z),e(z,Te),e(m,fe),e(m,W),e(W,ae),_(y,ee,j),_(y,M,j),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ke),e(M,H),e(H,me),e(M,xe),_(y,oe,j),_(y,q,j),e(q,A),e(A,ve),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,je),e(P,J),e(J,ce),e(P,Ce),e(P,G),e(G,pe),e(q,qe),e(q,D),e(D,ye),e(D,S),e(S,Pe),_(y,Z,j),_(y,O,j),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function Hj(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function Kj(x){let d,g,h,f,v;return f=new de({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>scores = outputs[<span class="hljs-number">0</span>]`}}),{c(){d=a("p"),g=n("Examples:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function Qj(x){let d,g,h,f,v,l,m,z,Te,fe,W,ae,ee,M,be,K,we,ge,U,Ee,re,Q,$e,_e,R,Fe,ke,H,me,xe,oe,q,A,ve,B,ue,Me,V,ne,ze,P,je,J,ce,Ce,G,pe,qe,D,ye,S,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),h=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=c(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=c(),W=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),q=a("ul"),A=a("li"),ve=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=c(),P=a("li"),je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=n("model([input_ids, attention_mask])"),Ce=n(" or "),G=a("code"),pe=n("model([input_ids, attention_mask, token_type_ids])"),qe=c(),D=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var j=i(d);g=s(j,"TensorFlow models and layers in "),h=r(j,"CODE",{});var De=i(h);f=s(De,"transformers"),De.forEach(t),v=s(j," accept two formats as input:"),j.forEach(t),l=p(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=p(te),W=r(te,"LI",{});var Qe=i(W);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=p(y),M=r(y,"P",{});var C=i(M);be=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(C,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),re=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(C,"CODE",{});var he=i(Q);$e=s(he,"fit()"),he.forEach(t),_e=s(C," and "),R=r(C,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),oe=p(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=p(N),P=r(N,"LI",{});var Y=i(P);je=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ce=s(He,"model([input_ids, attention_mask])"),He.forEach(t),Ce=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);pe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=p(N),D=r(N,"LI",{});var Ne=i(D);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ne,"CODE",{});var Be=i(S);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=p(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,j){_(y,d,j),e(d,g),e(d,h),e(h,f),e(d,v),_(y,l,j),_(y,m,j),e(m,z),e(z,Te),e(m,fe),e(m,W),e(W,ae),_(y,ee,j),_(y,M,j),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ke),e(M,H),e(H,me),e(M,xe),_(y,oe,j),_(y,q,j),e(q,A),e(A,ve),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,je),e(P,J),e(J,ce),e(P,Ce),e(P,G),e(G,pe),e(q,qe),e(q,D),e(D,ye),e(D,S),e(S,Pe),_(y,Z,j),_(y,O,j),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function Vj(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function Jj(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function Gj(x){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">1.22</span>`}}),{c(){T(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:le,i(h){g||(E(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Xj(x){let d,g,h,f,v,l,m,z,Te,fe,W,ae,ee,M,be,K,we,ge,U,Ee,re,Q,$e,_e,R,Fe,ke,H,me,xe,oe,q,A,ve,B,ue,Me,V,ne,ze,P,je,J,ce,Ce,G,pe,qe,D,ye,S,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),h=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=c(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=c(),W=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),q=a("ul"),A=a("li"),ve=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=c(),P=a("li"),je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=n("model([input_ids, attention_mask])"),Ce=n(" or "),G=a("code"),pe=n("model([input_ids, attention_mask, token_type_ids])"),qe=c(),D=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var j=i(d);g=s(j,"TensorFlow models and layers in "),h=r(j,"CODE",{});var De=i(h);f=s(De,"transformers"),De.forEach(t),v=s(j," accept two formats as input:"),j.forEach(t),l=p(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=p(te),W=r(te,"LI",{});var Qe=i(W);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=p(y),M=r(y,"P",{});var C=i(M);be=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(C,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),re=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(C,"CODE",{});var he=i(Q);$e=s(he,"fit()"),he.forEach(t),_e=s(C," and "),R=r(C,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),oe=p(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=p(N),P=r(N,"LI",{});var Y=i(P);je=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ce=s(He,"model([input_ids, attention_mask])"),He.forEach(t),Ce=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);pe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=p(N),D=r(N,"LI",{});var Ne=i(D);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ne,"CODE",{});var Be=i(S);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=p(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,j){_(y,d,j),e(d,g),e(d,h),e(h,f),e(d,v),_(y,l,j),_(y,m,j),e(m,z),e(z,Te),e(m,fe),e(m,W),e(W,ae),_(y,ee,j),_(y,M,j),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ke),e(M,H),e(H,me),e(M,xe),_(y,oe,j),_(y,q,j),e(q,A),e(A,ve),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,je),e(P,J),e(J,ce),e(P,Ce),e(P,G),e(G,pe),e(q,qe),e(q,D),e(D,ye),e(D,S),e(S,Pe),_(y,Z,j),_(y,O,j),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function Yj(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function Zj(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraForSequenceClassification
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function eC(x){let d,g;return d=new de({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.06</span>`}}),{c(){T(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:le,i(h){g||(E(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function tC(x){let d,g,h,f,v,l,m,z,Te,fe,W,ae,ee,M,be,K,we,ge,U,Ee,re,Q,$e,_e,R,Fe,ke,H,me,xe,oe,q,A,ve,B,ue,Me,V,ne,ze,P,je,J,ce,Ce,G,pe,qe,D,ye,S,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),h=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=c(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=c(),W=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),q=a("ul"),A=a("li"),ve=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=c(),P=a("li"),je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=n("model([input_ids, attention_mask])"),Ce=n(" or "),G=a("code"),pe=n("model([input_ids, attention_mask, token_type_ids])"),qe=c(),D=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var j=i(d);g=s(j,"TensorFlow models and layers in "),h=r(j,"CODE",{});var De=i(h);f=s(De,"transformers"),De.forEach(t),v=s(j," accept two formats as input:"),j.forEach(t),l=p(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=p(te),W=r(te,"LI",{});var Qe=i(W);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=p(y),M=r(y,"P",{});var C=i(M);be=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(C,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),re=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(C,"CODE",{});var he=i(Q);$e=s(he,"fit()"),he.forEach(t),_e=s(C," and "),R=r(C,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),oe=p(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=p(N),P=r(N,"LI",{});var Y=i(P);je=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ce=s(He,"model([input_ids, attention_mask])"),He.forEach(t),Ce=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);pe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=p(N),D=r(N,"LI",{});var Ne=i(D);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ne,"CODE",{});var Be=i(S);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=p(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,j){_(y,d,j),e(d,g),e(d,h),e(h,f),e(d,v),_(y,l,j),_(y,m,j),e(m,z),e(z,Te),e(m,fe),e(m,W),e(W,ae),_(y,ee,j),_(y,M,j),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ke),e(M,H),e(H,me),e(M,xe),_(y,oe,j),_(y,q,j),e(q,A),e(A,ve),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,je),e(P,J),e(J,ce),e(P,Ce),e(P,G),e(G,pe),e(q,qe),e(q,D),e(D,ye),e(D,S),e(S,Pe),_(y,Z,j),_(y,O,j),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function oC(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function nC(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function sC(x){let d,g,h,f,v,l,m,z,Te,fe,W,ae,ee,M,be,K,we,ge,U,Ee,re,Q,$e,_e,R,Fe,ke,H,me,xe,oe,q,A,ve,B,ue,Me,V,ne,ze,P,je,J,ce,Ce,G,pe,qe,D,ye,S,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),h=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=c(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=c(),W=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),q=a("ul"),A=a("li"),ve=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=c(),P=a("li"),je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=n("model([input_ids, attention_mask])"),Ce=n(" or "),G=a("code"),pe=n("model([input_ids, attention_mask, token_type_ids])"),qe=c(),D=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var j=i(d);g=s(j,"TensorFlow models and layers in "),h=r(j,"CODE",{});var De=i(h);f=s(De,"transformers"),De.forEach(t),v=s(j," accept two formats as input:"),j.forEach(t),l=p(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=p(te),W=r(te,"LI",{});var Qe=i(W);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=p(y),M=r(y,"P",{});var C=i(M);be=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(C,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),re=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(C,"CODE",{});var he=i(Q);$e=s(he,"fit()"),he.forEach(t),_e=s(C," and "),R=r(C,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),oe=p(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=p(N),P=r(N,"LI",{});var Y=i(P);je=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ce=s(He,"model([input_ids, attention_mask])"),He.forEach(t),Ce=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);pe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=p(N),D=r(N,"LI",{});var Ne=i(D);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ne,"CODE",{});var Be=i(S);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=p(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,j){_(y,d,j),e(d,g),e(d,h),e(h,f),e(d,v),_(y,l,j),_(y,m,j),e(m,z),e(z,Te),e(m,fe),e(m,W),e(W,ae),_(y,ee,j),_(y,M,j),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ke),e(M,H),e(H,me),e(M,xe),_(y,oe,j),_(y,q,j),e(q,A),e(A,ve),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,je),e(P,J),e(J,ce),e(P,Ce),e(P,G),e(G,pe),e(q,qe),e(q,D),e(D,ye),e(D,S),e(S,Pe),_(y,Z,j),_(y,O,j),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function aC(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function rC(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraForTokenClassification
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
[<span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;B-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function iC(x){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.11</span>`}}),{c(){T(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:le,i(h){g||(E(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function lC(x){let d,g,h,f,v,l,m,z,Te,fe,W,ae,ee,M,be,K,we,ge,U,Ee,re,Q,$e,_e,R,Fe,ke,H,me,xe,oe,q,A,ve,B,ue,Me,V,ne,ze,P,je,J,ce,Ce,G,pe,qe,D,ye,S,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),h=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=c(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=c(),W=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),q=a("ul"),A=a("li"),ve=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=c(),P=a("li"),je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=n("model([input_ids, attention_mask])"),Ce=n(" or "),G=a("code"),pe=n("model([input_ids, attention_mask, token_type_ids])"),qe=c(),D=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var j=i(d);g=s(j,"TensorFlow models and layers in "),h=r(j,"CODE",{});var De=i(h);f=s(De,"transformers"),De.forEach(t),v=s(j," accept two formats as input:"),j.forEach(t),l=p(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=p(te),W=r(te,"LI",{});var Qe=i(W);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=p(y),M=r(y,"P",{});var C=i(M);be=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(C,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),re=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(C,"CODE",{});var he=i(Q);$e=s(he,"fit()"),he.forEach(t),_e=s(C," and "),R=r(C,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),oe=p(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=p(N),P=r(N,"LI",{});var Y=i(P);je=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ce=s(He,"model([input_ids, attention_mask])"),He.forEach(t),Ce=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);pe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=p(N),D=r(N,"LI",{});var Ne=i(D);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ne,"CODE",{});var Be=i(S);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=p(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,j){_(y,d,j),e(d,g),e(d,h),e(h,f),e(d,v),_(y,l,j),_(y,m,j),e(m,z),e(z,Te),e(m,fe),e(m,W),e(W,ae),_(y,ee,j),_(y,M,j),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ke),e(M,H),e(H,me),e(M,xe),_(y,oe,j),_(y,q,j),e(q,A),e(A,ve),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,je),e(P,J),e(J,ce),e(P,Ce),e(P,G),e(G,pe),e(q,qe),e(q,D),e(D,ye),e(D,S),e(S,Pe),_(y,Z,j),_(y,O,j),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function dC(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function cC(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function pC(x){let d,g;return d=new de({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">2.64</span>`}}),{c(){T(d.$$.fragment)},l(h){b(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:le,i(h){g||(E(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function hC(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function mC(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraModel

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraModel.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraModel.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function uC(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function fC(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForPreTraining

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForPreTraining.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function gC(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function _C(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function kC(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function vC(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMaskedLM

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForMaskedLM.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function yC(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function TC(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForSequenceClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForSequenceClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function bC(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function wC(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function EC(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function $C(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForTokenClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForTokenClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function FC(x){let d,g,h,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(m,"CODE",{});var z=i(h);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,v)},d(l){l&&t(d)}}}function xC(x){let d,g,h,f,v;return f=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=a("p"),g=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),v=!0},p:le,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function MC(x){let d,g,h,f,v,l,m,z,Te,fe,W,ae,ee,M,be,K,we,ge,U,Ee,re,Q,$e,_e,R,Fe,ke,H,me,xe,oe,q,A,ve,B,ue,Me,V,ne,ze,P,je,J,ce,Ce,G,pe,qe,D,ye,S,Pe,Z,O,Ae,L,Oe,Le,y,j,De,te,We,Qe,C,Ve,Ke,he,Ue,Je,N,X,Re,Ge,Y,He,Xe,Ne,Be,se,Ye,z_,Wo,j_,Bd,C_,q_,Rd,P_,A_,O_,Vn,sf,Uo,Jn,pp,nr,L_,hp,N_,af,tt,sr,I_,mp,D_,S_,ar,W_,Hd,U_,B_,R_,Mo,rr,H_,up,K_,Q_,ir,Kd,V_,fp,J_,G_,Qd,X_,gp,Y_,Z_,Gn,lr,ek,_p,tk,ok,Ht,dr,nk,kp,sk,ak,Xn,rk,Bo,ik,vp,lk,dk,yp,ck,pk,hk,Yn,cr,mk,pr,uk,Tp,fk,gk,rf,Ro,Zn,bp,hr,_k,wp,kk,lf,Rt,mr,vk,ur,yk,Ep,Tk,bk,wk,es,Vd,Ek,$k,Jd,Fk,xk,Mk,fr,zk,Gd,jk,Ck,df,Ho,ts,$p,gr,qk,Fp,Pk,cf,Ko,_r,Ak,kr,Ok,Xd,Lk,Nk,pf,Qo,vr,Ik,yr,Dk,Yd,Sk,Wk,hf,Vo,os,xp,Tr,Uk,Mp,Bk,mf,bt,br,Rk,zp,Hk,Kk,wr,Qk,Zd,Vk,Jk,Gk,Er,Xk,$r,Yk,Zk,ev,Kt,Fr,tv,Jo,ov,ec,nv,sv,jp,av,rv,iv,ns,lv,ss,uf,Go,as,Cp,xr,dv,qp,cv,ff,ht,Mr,pv,Pp,hv,mv,Ap,uv,fv,zr,gv,tc,_v,kv,vv,jr,yv,Cr,Tv,bv,wv,Qt,qr,Ev,Xo,$v,oc,Fv,xv,Op,Mv,zv,jv,rs,Cv,is,gf,Yo,ls,Lp,Pr,qv,Np,Pv,_f,wt,Ar,Av,Or,Ov,Ip,Lv,Nv,Iv,Lr,Dv,nc,Sv,Wv,Uv,Nr,Bv,Ir,Rv,Hv,Kv,Vt,Dr,Qv,Zo,Vv,sc,Jv,Gv,Dp,Xv,Yv,Zv,ds,ey,cs,kf,en,ps,Sp,Sr,ty,Wp,oy,vf,mt,Wr,ny,Up,sy,ay,Bp,ry,iy,Ur,ly,ac,dy,cy,py,Br,hy,Rr,my,uy,fy,xt,Hr,gy,tn,_y,rc,ky,vy,Rp,yy,Ty,by,hs,wy,ms,Ey,us,yf,on,fs,Hp,Kr,$y,Kp,Fy,Tf,Et,Qr,xy,Qp,My,zy,Vr,jy,ic,Cy,qy,Py,Jr,Ay,Gr,Oy,Ly,Ny,pt,Xr,Iy,nn,Dy,lc,Sy,Wy,Vp,Uy,By,Ry,gs,Hy,_s,Ky,ks,Qy,vs,Vy,ys,bf,sn,Ts,Jp,Yr,Jy,Gp,Gy,wf,$t,Zr,Xy,Xp,Yy,Zy,ei,eT,dc,tT,oT,nT,ti,sT,oi,aT,rT,iT,Jt,ni,lT,an,dT,cc,cT,pT,Yp,hT,mT,uT,bs,fT,ws,Ef,rn,Es,Zp,si,gT,eh,_T,$f,ut,ai,kT,th,vT,yT,oh,TT,bT,ri,wT,pc,ET,$T,FT,ii,xT,li,MT,zT,jT,Mt,di,CT,ln,qT,hc,PT,AT,nh,OT,LT,NT,$s,IT,Fs,DT,xs,Ff,dn,Ms,sh,ci,ST,ah,WT,xf,Ft,pi,UT,cn,BT,rh,RT,HT,ih,KT,QT,VT,hi,JT,mc,GT,XT,YT,mi,ZT,ui,eb,tb,ob,zt,fi,nb,pn,sb,uc,ab,rb,lh,ib,lb,db,zs,cb,js,pb,Cs,Mf,hn,qs,dh,gi,hb,ch,mb,zf,ft,_i,ub,ph,fb,gb,ki,_b,fc,kb,vb,yb,vi,Tb,yi,bb,wb,Eb,Ps,$b,Gt,Ti,Fb,mn,xb,gc,Mb,zb,hh,jb,Cb,qb,As,Pb,Os,jf,un,Ls,mh,bi,Ab,uh,Ob,Cf,ot,wi,Lb,fh,Nb,Ib,gh,Db,Sb,Ei,Wb,_c,Ub,Bb,Rb,$i,Hb,Fi,Kb,Qb,Vb,Ns,Jb,Xt,xi,Gb,fn,Xb,kc,Yb,Zb,_h,ew,tw,ow,Is,nw,Ds,qf,gn,Ss,kh,Mi,sw,vh,aw,Pf,nt,zi,rw,yh,iw,lw,Th,dw,cw,ji,pw,vc,hw,mw,uw,Ci,fw,qi,gw,_w,kw,Ws,vw,jt,Pi,yw,_n,Tw,yc,bw,ww,bh,Ew,$w,Fw,Us,xw,Bs,Mw,Rs,Af,kn,Hs,wh,Ai,zw,Eh,jw,Of,gt,Oi,Cw,$h,qw,Pw,Li,Aw,Tc,Ow,Lw,Nw,Ni,Iw,Ii,Dw,Sw,Ww,Ks,Uw,Ct,Di,Bw,vn,Rw,bc,Hw,Kw,Fh,Qw,Vw,Jw,Qs,Gw,Vs,Xw,Js,Lf,yn,Gs,xh,Si,Yw,Mh,Zw,Nf,_t,Wi,eE,zh,tE,oE,Ui,nE,wc,sE,aE,rE,Bi,iE,Ri,lE,dE,cE,Xs,pE,Yt,Hi,hE,Tn,mE,Ec,uE,fE,jh,gE,_E,kE,Ys,vE,Zs,If,bn,ea,Ch,Ki,yE,qh,TE,Df,st,Qi,bE,Ph,wE,EE,Ah,$E,FE,Vi,xE,$c,ME,zE,jE,Ji,CE,Gi,qE,PE,AE,ta,OE,qt,Xi,LE,wn,NE,Fc,IE,DE,Oh,SE,WE,UE,oa,BE,na,RE,sa,Sf,En,aa,Lh,Yi,HE,Nh,KE,Wf,kt,Zi,QE,$n,VE,Ih,JE,GE,Dh,XE,YE,ZE,el,e$,xc,t$,o$,n$,tl,s$,ol,a$,r$,i$,ra,l$,Pt,nl,d$,Fn,c$,Mc,p$,h$,Sh,m$,u$,f$,ia,g$,la,_$,da,Uf,xn,ca,Wh,sl,k$,Uh,v$,Bf,at,al,y$,Bh,T$,b$,rl,w$,zc,E$,$$,F$,il,x$,ll,M$,z$,j$,Rh,C$,q$,fo,Hh,dl,P$,A$,Kh,cl,O$,L$,Qh,pl,N$,I$,Vh,hl,D$,S$,Zt,ml,W$,Mn,U$,Jh,B$,R$,Gh,H$,K$,Q$,pa,V$,ha,Rf,zn,ma,Xh,ul,J$,Yh,G$,Hf,Ze,fl,X$,Zh,Y$,Z$,em,e2,t2,gl,o2,jc,n2,s2,a2,_l,r2,kl,i2,l2,d2,tm,c2,p2,go,om,vl,h2,m2,nm,yl,u2,f2,sm,Tl,g2,_2,am,bl,k2,v2,eo,wl,y2,jn,T2,rm,b2,w2,im,E2,$2,F2,ua,x2,fa,Kf,Cn,ga,lm,El,M2,dm,z2,Qf,rt,$l,j2,cm,C2,q2,Fl,P2,Cc,A2,O2,L2,xl,N2,Ml,I2,D2,S2,pm,W2,U2,_o,hm,zl,B2,R2,mm,jl,H2,K2,um,Cl,Q2,V2,fm,ql,J2,G2,to,Pl,X2,qn,Y2,gm,Z2,e1,_m,t1,o1,n1,_a,s1,ka,Vf,Pn,va,km,Al,a1,vm,r1,Jf,it,Ol,i1,Ll,l1,ym,d1,c1,p1,Nl,h1,qc,m1,u1,f1,Il,g1,Dl,_1,k1,v1,Tm,y1,T1,ko,bm,Sl,b1,w1,wm,Wl,E1,$1,Em,Ul,F1,x1,$m,Bl,M1,z1,oo,Rl,j1,An,C1,Fm,q1,P1,xm,A1,O1,L1,ya,N1,Ta,Gf,On,ba,Mm,Hl,I1,zm,D1,Xf,lt,Kl,S1,jm,W1,U1,Ql,B1,Pc,R1,H1,K1,Vl,Q1,Jl,V1,J1,G1,Cm,X1,Y1,vo,qm,Gl,Z1,e0,Pm,Xl,t0,o0,Am,Yl,n0,s0,Om,Zl,a0,r0,no,ed,i0,Ln,l0,Lm,d0,c0,Nm,p0,h0,m0,wa,u0,Ea,Yf,Nn,$a,Im,td,f0,Dm,g0,Zf,dt,od,_0,Sm,k0,v0,nd,y0,Ac,T0,b0,w0,sd,E0,ad,$0,F0,x0,Wm,M0,z0,yo,Um,rd,j0,C0,Bm,id,q0,P0,Rm,ld,A0,O0,Hm,dd,L0,N0,so,cd,I0,In,D0,Km,S0,W0,Qm,U0,B0,R0,Fa,H0,xa,eg,Dn,Ma,Vm,pd,K0,Jm,Q0,tg,et,hd,V0,Gm,J0,G0,Xm,X0,Y0,md,Z0,Oc,eF,tF,oF,ud,nF,fd,sF,aF,rF,Ym,iF,lF,To,Zm,gd,dF,cF,eu,_d,pF,hF,tu,kd,mF,uF,ou,vd,fF,gF,ao,yd,_F,Sn,kF,nu,vF,yF,su,TF,bF,wF,za,EF,ja,og,Wn,Ca,au,Td,$F,ru,FF,ng,ct,bd,xF,Un,MF,iu,zF,jF,lu,CF,qF,PF,wd,AF,Lc,OF,LF,NF,Ed,IF,$d,DF,SF,WF,du,UF,BF,bo,cu,Fd,RF,HF,pu,xd,KF,QF,hu,Md,VF,JF,mu,zd,GF,XF,ro,jd,YF,Bn,ZF,uu,ex,tx,fu,ox,nx,sx,qa,ax,Pa,sg;return l=new Se({}),M=new Se({}),We=new Se({}),Ue=new I({props:{name:"class transformers.ElectraConfig",anchor:"transformers.ElectraConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 256"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 1024"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = 'gelu'"},{name:"summary_last_dropout",val:" = 0.1"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ElectraConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ELECTRA model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraModel">ElectraModel</a> or <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.TFElectraModel">TFElectraModel</a>.`,name:"vocab_size"},{anchor:"transformers.ElectraConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraModel">ElectraModel</a> or <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.TFElectraModel">TFElectraModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.ElectraConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/configuration_electra.py#L44"}}),Vn=new ie({props:{anchor:"transformers.ElectraConfig.example",$$slots:{default:[_j]},$$scope:{ctx:x}}}),nr=new Se({}),sr=new I({props:{name:"class transformers.ElectraTokenizer",anchor:"transformers.ElectraTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ElectraTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/tokenization_electra.py#L93"}}),rr=new I({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ElectraTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ElectraTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ElectraTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/tokenization_electra.py#L224",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),lr=new I({props:{name:"convert_tokens_to_string",anchor:"transformers.ElectraTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/tokenization_electra.py#L219"}}),dr=new I({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ElectraTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ElectraTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ElectraTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/tokenization_electra.py#L277",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xn=new ie({props:{anchor:"transformers.ElectraTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[kj]},$$scope:{ctx:x}}}),cr=new I({props:{name:"get_special_tokens_mask",anchor:"transformers.ElectraTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ElectraTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ElectraTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ElectraTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/tokenization_electra.py#L249",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hr=new Se({}),mr=new I({props:{name:"class transformers.ElectraTokenizerFast",anchor:"transformers.ElectraTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/tokenization_electra_fast.py#L83"}}),gr=new Se({}),_r=new I({props:{name:"class transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L694"}}),vr=new I({props:{name:"class transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>tf.Tensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_tf_electra.py#L815"}}),Tr=new Se({}),br=new I({props:{name:"class transformers.ElectraModel",anchor:"transformers.ElectraModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L806"}}),Fr=new I({props:{name:"forward",anchor:"transformers.ElectraModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L833",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ns=new Ie({props:{$$slots:{default:[vj]},$$scope:{ctx:x}}}),ss=new ie({props:{anchor:"transformers.ElectraModel.forward.example",$$slots:{default:[yj]},$$scope:{ctx:x}}}),xr=new Se({}),Mr=new I({props:{name:"class transformers.ElectraForPreTraining",anchor:"transformers.ElectraForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L1057"}}),qr=new I({props:{name:"forward",anchor:"transformers.ElectraForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the ELECTRA loss. Input should be a sequence of tokens (see <code>input_ids</code> docstring)
Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates the token is an original token,</li>
<li>1 indicates the token was replaced.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L1066",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"
>transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"
>transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rs=new Ie({props:{$$slots:{default:[Tj]},$$scope:{ctx:x}}}),is=new ie({props:{anchor:"transformers.ElectraForPreTraining.forward.example",$$slots:{default:[bj]},$$scope:{ctx:x}}}),Pr=new Se({}),Ar=new I({props:{name:"class transformers.ElectraForCausalLM",anchor:"transformers.ElectraForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L1532"}}),Dr=new I({props:{name:"forward",anchor:"transformers.ElectraForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L1551",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ds=new Ie({props:{$$slots:{default:[wj]},$$scope:{ctx:x}}}),cs=new ie({props:{anchor:"transformers.ElectraForCausalLM.forward.example",$$slots:{default:[Ej]},$$scope:{ctx:x}}}),Sr=new Se({}),Wr=new I({props:{name:"class transformers.ElectraForMaskedLM",anchor:"transformers.ElectraForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L1163"}}),Hr=new I({props:{name:"forward",anchor:"transformers.ElectraForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L1180",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hs=new Ie({props:{$$slots:{default:[$j]},$$scope:{ctx:x}}}),ms=new ie({props:{anchor:"transformers.ElectraForMaskedLM.forward.example",$$slots:{default:[Fj]},$$scope:{ctx:x}}}),us=new ie({props:{anchor:"transformers.ElectraForMaskedLM.forward.example-2",$$slots:{default:[xj]},$$scope:{ctx:x}}}),Kr=new Se({}),Qr=new I({props:{name:"class transformers.ElectraForSequenceClassification",anchor:"transformers.ElectraForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L958"}}),Xr=new I({props:{name:"forward",anchor:"transformers.ElectraForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L969",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gs=new Ie({props:{$$slots:{default:[Mj]},$$scope:{ctx:x}}}),_s=new ie({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example",$$slots:{default:[zj]},$$scope:{ctx:x}}}),ks=new ie({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-2",$$slots:{default:[jj]},$$scope:{ctx:x}}}),vs=new ie({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-3",$$slots:{default:[Cj]},$$scope:{ctx:x}}}),ys=new ie({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-4",$$slots:{default:[qj]},$$scope:{ctx:x}}}),Yr=new Se({}),Zr=new I({props:{name:"class transformers.ElectraForMultipleChoice",anchor:"transformers.ElectraForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L1444"}}),ni=new I({props:{name:"forward",anchor:"transformers.ElectraForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L1455",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bs=new Ie({props:{$$slots:{default:[Pj]},$$scope:{ctx:x}}}),ws=new ie({props:{anchor:"transformers.ElectraForMultipleChoice.forward.example",$$slots:{default:[Aj]},$$scope:{ctx:x}}}),si=new Se({}),ai=new I({props:{name:"class transformers.ElectraForTokenClassification",anchor:"transformers.ElectraForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L1253"}}),di=new I({props:{name:"forward",anchor:"transformers.ElectraForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L1267",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$s=new Ie({props:{$$slots:{default:[Oj]},$$scope:{ctx:x}}}),Fs=new ie({props:{anchor:"transformers.ElectraForTokenClassification.forward.example",$$slots:{default:[Lj]},$$scope:{ctx:x}}}),xs=new ie({props:{anchor:"transformers.ElectraForTokenClassification.forward.example-2",$$slots:{default:[Nj]},$$scope:{ctx:x}}}),ci=new Se({}),pi=new I({props:{name:"class transformers.ElectraForQuestionAnswering",anchor:"transformers.ElectraForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L1335"}}),fi=new I({props:{name:"forward",anchor:"transformers.ElectraForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.ElectraForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_electra.py#L1349",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zs=new Ie({props:{$$slots:{default:[Ij]},$$scope:{ctx:x}}}),js=new ie({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example",$$slots:{default:[Dj]},$$scope:{ctx:x}}}),Cs=new ie({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example-2",$$slots:{default:[Sj]},$$scope:{ctx:x}}}),gi=new Se({}),_i=new I({props:{name:"class transformers.TFElectraModel",anchor:"transformers.TFElectraModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_tf_electra.py#L940"}}),Ps=new Ie({props:{$$slots:{default:[Wj]},$$scope:{ctx:x}}}),Ti=new I({props:{name:"call",anchor:"transformers.TFElectraModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_tf_electra.py#L946",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),As=new Ie({props:{$$slots:{default:[Uj]},$$scope:{ctx:x}}}),Os=new ie({props:{anchor:"transformers.TFElectraModel.call.example",$$slots:{default:[Bj]},$$scope:{ctx:x}}}),bi=new Se({}),wi=new I({props:{name:"class transformers.TFElectraForPreTraining",anchor:"transformers.TFElectraForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_tf_electra.py#L1037"}}),Ns=new Ie({props:{$$slots:{default:[Rj]},$$scope:{ctx:x}}}),xi=new I({props:{name:"call",anchor:"transformers.TFElectraForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_tf_electra.py#L1044",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput"
>transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput"
>transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Is=new Ie({props:{$$slots:{default:[Hj]},$$scope:{ctx:x}}}),Ds=new ie({props:{anchor:"transformers.TFElectraForPreTraining.call.example",$$slots:{default:[Kj]},$$scope:{ctx:x}}}),Mi=new Se({}),zi=new I({props:{name:"class transformers.TFElectraForMaskedLM",anchor:"transformers.TFElectraForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_tf_electra.py#L1152"}}),Ws=new Ie({props:{$$slots:{default:[Qj]},$$scope:{ctx:x}}}),Pi=new I({props:{name:"call",anchor:"transformers.TFElectraForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_tf_electra.py#L1174",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Us=new Ie({props:{$$slots:{default:[Vj]},$$scope:{ctx:x}}}),Bs=new ie({props:{anchor:"transformers.TFElectraForMaskedLM.call.example",$$slots:{default:[Jj]},$$scope:{ctx:x}}}),Rs=new ie({props:{anchor:"transformers.TFElectraForMaskedLM.call.example-2",$$slots:{default:[Gj]},$$scope:{ctx:x}}}),Ai=new Se({}),Oi=new I({props:{name:"class transformers.TFElectraForSequenceClassification",anchor:"transformers.TFElectraForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_tf_electra.py#L1279"}}),Ks=new Ie({props:{$$slots:{default:[Xj]},$$scope:{ctx:x}}}),Di=new I({props:{name:"call",anchor:"transformers.TFElectraForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_tf_electra.py#L1286",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qs=new Ie({props:{$$slots:{default:[Yj]},$$scope:{ctx:x}}}),Vs=new ie({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example",$$slots:{default:[Zj]},$$scope:{ctx:x}}}),Js=new ie({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example-2",$$slots:{default:[eC]},$$scope:{ctx:x}}}),Si=new Se({}),Wi=new I({props:{name:"class transformers.TFElectraForMultipleChoice",anchor:"transformers.TFElectraForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_tf_electra.py#L1358"}}),Xs=new Ie({props:{$$slots:{default:[tC]},$$scope:{ctx:x}}}),Hi=new I({props:{name:"call",anchor:"transformers.TFElectraForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_tf_electra.py#L1380",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ys=new Ie({props:{$$slots:{default:[oC]},$$scope:{ctx:x}}}),Zs=new ie({props:{anchor:"transformers.TFElectraForMultipleChoice.call.example",$$slots:{default:[nC]},$$scope:{ctx:x}}}),Ki=new Se({}),Qi=new I({props:{name:"class transformers.TFElectraForTokenClassification",anchor:"transformers.TFElectraForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_tf_electra.py#L1484"}}),ta=new Ie({props:{$$slots:{default:[sC]},$$scope:{ctx:x}}}),Xi=new I({props:{name:"call",anchor:"transformers.TFElectraForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_tf_electra.py#L1497",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),oa=new Ie({props:{$$slots:{default:[aC]},$$scope:{ctx:x}}}),na=new ie({props:{anchor:"transformers.TFElectraForTokenClassification.call.example",$$slots:{default:[rC]},$$scope:{ctx:x}}}),sa=new ie({props:{anchor:"transformers.TFElectraForTokenClassification.call.example-2",$$slots:{default:[iC]},$$scope:{ctx:x}}}),Yi=new Se({}),Zi=new I({props:{name:"class transformers.TFElectraForQuestionAnswering",anchor:"transformers.TFElectraForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_tf_electra.py#L1569"}}),ra=new Ie({props:{$$slots:{default:[lC]},$$scope:{ctx:x}}}),nl=new I({props:{name:"call",anchor:"transformers.TFElectraForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFElectraForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_tf_electra.py#L1579",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ia=new Ie({props:{$$slots:{default:[dC]},$$scope:{ctx:x}}}),la=new ie({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example",$$slots:{default:[cC]},$$scope:{ctx:x}}}),da=new ie({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example-2",$$slots:{default:[pC]},$$scope:{ctx:x}}}),sl=new Se({}),al=new I({props:{name:"class transformers.FlaxElectraModel",anchor:"transformers.FlaxElectraModel",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_flax_electra.py#L923"}}),ml=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pa=new Ie({props:{$$slots:{default:[hC]},$$scope:{ctx:x}}}),ha=new ie({props:{anchor:"transformers.FlaxElectraModel.__call__.example",$$slots:{default:[mC]},$$scope:{ctx:x}}}),ul=new Se({}),fl=new I({props:{name:"class transformers.FlaxElectraForPreTraining",anchor:"transformers.FlaxElectraForPreTraining",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_flax_electra.py#L1078"}}),wl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <code>transformers.models.electra.modeling_flax_electra.FlaxElectraForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
`}}),ua=new Ie({props:{$$slots:{default:[uC]},$$scope:{ctx:x}}}),fa=new ie({props:{anchor:"transformers.FlaxElectraForPreTraining.__call__.example",$$slots:{default:[fC]},$$scope:{ctx:x}}}),El=new Se({}),$l=new I({props:{name:"class transformers.FlaxElectraForCausalLM",anchor:"transformers.FlaxElectraForCausalLM",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_flax_electra.py#L1576"}}),Pl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_a=new Ie({props:{$$slots:{default:[gC]},$$scope:{ctx:x}}}),ka=new ie({props:{anchor:"transformers.FlaxElectraForCausalLM.__call__.example",$$slots:{default:[_C]},$$scope:{ctx:x}}}),Al=new Se({}),Ol=new I({props:{name:"class transformers.FlaxElectraForMaskedLM",anchor:"transformers.FlaxElectraForMaskedLM",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_flax_electra.py#L1012"}}),Rl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ya=new Ie({props:{$$slots:{default:[kC]},$$scope:{ctx:x}}}),Ta=new ie({props:{anchor:"transformers.FlaxElectraForMaskedLM.__call__.example",$$slots:{default:[vC]},$$scope:{ctx:x}}}),Hl=new Se({}),Kl=new I({props:{name:"class transformers.FlaxElectraForSequenceClassification",anchor:"transformers.FlaxElectraForSequenceClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_flax_electra.py#L1491"}}),ed=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wa=new Ie({props:{$$slots:{default:[yC]},$$scope:{ctx:x}}}),Ea=new ie({props:{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.example",$$slots:{default:[TC]},$$scope:{ctx:x}}}),td=new Se({}),od=new I({props:{name:"class transformers.FlaxElectraForMultipleChoice",anchor:"transformers.FlaxElectraForMultipleChoice",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_flax_electra.py#L1321"}}),cd=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fa=new Ie({props:{$$slots:{default:[bC]},$$scope:{ctx:x}}}),xa=new ie({props:{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.example",$$slots:{default:[wC]},$$scope:{ctx:x}}}),pd=new Se({}),hd=new I({props:{name:"class transformers.FlaxElectraForTokenClassification",anchor:"transformers.FlaxElectraForTokenClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_flax_electra.py#L1173"}}),yd=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),za=new Ie({props:{$$slots:{default:[EC]},$$scope:{ctx:x}}}),ja=new ie({props:{anchor:"transformers.FlaxElectraForTokenClassification.__call__.example",$$slots:{default:[$C]},$$scope:{ctx:x}}}),Td=new Se({}),bd=new I({props:{name:"class transformers.FlaxElectraForQuestionAnswering",anchor:"transformers.FlaxElectraForQuestionAnswering",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_flax_electra.py#L1397"}}),jd=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qa=new Ie({props:{$$slots:{default:[FC]},$$scope:{ctx:x}}}),Pa=new ie({props:{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.example",$$slots:{default:[xC]},$$scope:{ctx:x}}}),{c(){d=a("meta"),g=c(),h=a("h1"),f=a("a"),v=a("span"),T(l.$$.fragment),m=c(),z=a("span"),Te=n("ELECTRA"),fe=c(),W=a("h2"),ae=a("a"),ee=a("span"),T(M.$$.fragment),be=c(),K=a("span"),we=n("Overview"),ge=c(),U=a("p"),Ee=n("The ELECTRA model was proposed in the paper "),re=a("a"),Q=n(`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
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
using the same amount of compute.`),oe=c(),q=a("p"),A=n("Tips:"),ve=c(),B=a("ul"),ue=a("li"),Me=n(`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),V=c(),ne=a("li"),ze=n("The ELECTRA checkpoints saved using "),P=a("a"),je=n("Google Research\u2019s implementation"),J=n(`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),ce=a("a"),Ce=n("ElectraForMaskedLM"),G=n(` model, and the generator may be loaded in the
`),pe=a("a"),qe=n("ElectraForPreTraining"),D=n(` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),ye=c(),S=a("p"),Pe=n("This model was contributed by "),Z=a("a"),O=n("lysandre"),Ae=n(". The original code can be found "),L=a("a"),Oe=n("here"),Le=n("."),y=c(),j=a("h2"),De=a("a"),te=a("span"),T(We.$$.fragment),Qe=c(),C=a("span"),Ve=n("ElectraConfig"),Ke=c(),he=a("div"),T(Ue.$$.fragment),Je=c(),N=a("p"),X=n("This is the configuration class to store the configuration of a "),Re=a("a"),Ge=n("ElectraModel"),Y=n(" or a "),He=a("a"),Xe=n("TFElectraModel"),Ne=n(`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),Be=a("a"),se=n("google/electra-small-discriminator"),Ye=n(" architecture."),z_=c(),Wo=a("p"),j_=n("Configuration objects inherit from "),Bd=a("a"),C_=n("PretrainedConfig"),q_=n(` and can be used to control the model outputs. Read the
documentation from `),Rd=a("a"),P_=n("PretrainedConfig"),A_=n(" for more information."),O_=c(),T(Vn.$$.fragment),sf=c(),Uo=a("h2"),Jn=a("a"),pp=a("span"),T(nr.$$.fragment),L_=c(),hp=a("span"),N_=n("ElectraTokenizer"),af=c(),tt=a("div"),T(sr.$$.fragment),I_=c(),mp=a("p"),D_=n("Construct a BERT tokenizer. Based on WordPiece."),S_=c(),ar=a("p"),W_=n("This tokenizer inherits from "),Hd=a("a"),U_=n("PreTrainedTokenizer"),B_=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),R_=c(),Mo=a("div"),T(rr.$$.fragment),H_=c(),up=a("p"),K_=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Q_=c(),ir=a("ul"),Kd=a("li"),V_=n("single sequence: "),fp=a("code"),J_=n("[CLS] X [SEP]"),G_=c(),Qd=a("li"),X_=n("pair of sequences: "),gp=a("code"),Y_=n("[CLS] A [SEP] B [SEP]"),Z_=c(),Gn=a("div"),T(lr.$$.fragment),ek=c(),_p=a("p"),tk=n("Converts a sequence of tokens (string) in a single string."),ok=c(),Ht=a("div"),T(dr.$$.fragment),nk=c(),kp=a("p"),sk=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),ak=c(),T(Xn.$$.fragment),rk=c(),Bo=a("p"),ik=n("If "),vp=a("code"),lk=n("token_ids_1"),dk=n(" is "),yp=a("code"),ck=n("None"),pk=n(", this method only returns the first portion of the mask (0s)."),hk=c(),Yn=a("div"),T(cr.$$.fragment),mk=c(),pr=a("p"),uk=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Tp=a("code"),fk=n("prepare_for_model"),gk=n(" method."),rf=c(),Ro=a("h2"),Zn=a("a"),bp=a("span"),T(hr.$$.fragment),_k=c(),wp=a("span"),kk=n("ElectraTokenizerFast"),lf=c(),Rt=a("div"),T(mr.$$.fragment),vk=c(),ur=a("p"),yk=n("Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),Ep=a("em"),Tk=n("tokenizers"),bk=n(" library)."),wk=c(),es=a("p"),Vd=a("a"),Ek=n("ElectraTokenizerFast"),$k=n(" is identical to "),Jd=a("a"),Fk=n("BertTokenizerFast"),xk=n(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Mk=c(),fr=a("p"),zk=n("Refer to superclass "),Gd=a("a"),jk=n("BertTokenizerFast"),Ck=n(" for usage examples and documentation concerning parameters."),df=c(),Ho=a("h2"),ts=a("a"),$p=a("span"),T(gr.$$.fragment),qk=c(),Fp=a("span"),Pk=n("Electra specific outputs"),cf=c(),Ko=a("div"),T(_r.$$.fragment),Ak=c(),kr=a("p"),Ok=n("Output type of "),Xd=a("a"),Lk=n("ElectraForPreTraining"),Nk=n("."),pf=c(),Qo=a("div"),T(vr.$$.fragment),Ik=c(),yr=a("p"),Dk=n("Output type of "),Yd=a("a"),Sk=n("TFElectraForPreTraining"),Wk=n("."),hf=c(),Vo=a("h2"),os=a("a"),xp=a("span"),T(Tr.$$.fragment),Uk=c(),Mp=a("span"),Bk=n("ElectraModel"),mf=c(),bt=a("div"),T(br.$$.fragment),Rk=c(),zp=a("p"),Hk=n("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),Kk=c(),wr=a("p"),Qk=n("This model inherits from "),Zd=a("a"),Vk=n("PreTrainedModel"),Jk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gk=c(),Er=a("p"),Xk=n("This model is also a PyTorch "),$r=a("a"),Yk=n("torch.nn.Module"),Zk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ev=c(),Kt=a("div"),T(Fr.$$.fragment),tv=c(),Jo=a("p"),ov=n("The "),ec=a("a"),nv=n("ElectraModel"),sv=n(" forward method, overrides the "),jp=a("code"),av=n("__call__"),rv=n(" special method."),iv=c(),T(ns.$$.fragment),lv=c(),T(ss.$$.fragment),uf=c(),Go=a("h2"),as=a("a"),Cp=a("span"),T(xr.$$.fragment),dv=c(),qp=a("span"),cv=n("ElectraForPreTraining"),ff=c(),ht=a("div"),T(Mr.$$.fragment),pv=c(),Pp=a("p"),hv=n("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),mv=c(),Ap=a("p"),uv=n("It is recommended to load the discriminator checkpoint into that model."),fv=c(),zr=a("p"),gv=n("This model inherits from "),tc=a("a"),_v=n("PreTrainedModel"),kv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vv=c(),jr=a("p"),yv=n("This model is also a PyTorch "),Cr=a("a"),Tv=n("torch.nn.Module"),bv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wv=c(),Qt=a("div"),T(qr.$$.fragment),Ev=c(),Xo=a("p"),$v=n("The "),oc=a("a"),Fv=n("ElectraForPreTraining"),xv=n(" forward method, overrides the "),Op=a("code"),Mv=n("__call__"),zv=n(" special method."),jv=c(),T(rs.$$.fragment),Cv=c(),T(is.$$.fragment),gf=c(),Yo=a("h2"),ls=a("a"),Lp=a("span"),T(Pr.$$.fragment),qv=c(),Np=a("span"),Pv=n("ElectraForCausalLM"),_f=c(),wt=a("div"),T(Ar.$$.fragment),Av=c(),Or=a("p"),Ov=n("ELECTRA Model with a "),Ip=a("code"),Lv=n("language modeling"),Nv=n(" head on top for CLM fine-tuning."),Iv=c(),Lr=a("p"),Dv=n("This model inherits from "),nc=a("a"),Sv=n("PreTrainedModel"),Wv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uv=c(),Nr=a("p"),Bv=n("This model is also a PyTorch "),Ir=a("a"),Rv=n("torch.nn.Module"),Hv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kv=c(),Vt=a("div"),T(Dr.$$.fragment),Qv=c(),Zo=a("p"),Vv=n("The "),sc=a("a"),Jv=n("ElectraForCausalLM"),Gv=n(" forward method, overrides the "),Dp=a("code"),Xv=n("__call__"),Yv=n(" special method."),Zv=c(),T(ds.$$.fragment),ey=c(),T(cs.$$.fragment),kf=c(),en=a("h2"),ps=a("a"),Sp=a("span"),T(Sr.$$.fragment),ty=c(),Wp=a("span"),oy=n("ElectraForMaskedLM"),vf=c(),mt=a("div"),T(Wr.$$.fragment),ny=c(),Up=a("p"),sy=n("Electra model with a language modeling head on top."),ay=c(),Bp=a("p"),ry=n(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),iy=c(),Ur=a("p"),ly=n("This model inherits from "),ac=a("a"),dy=n("PreTrainedModel"),cy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),py=c(),Br=a("p"),hy=n("This model is also a PyTorch "),Rr=a("a"),my=n("torch.nn.Module"),uy=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fy=c(),xt=a("div"),T(Hr.$$.fragment),gy=c(),tn=a("p"),_y=n("The "),rc=a("a"),ky=n("ElectraForMaskedLM"),vy=n(" forward method, overrides the "),Rp=a("code"),yy=n("__call__"),Ty=n(" special method."),by=c(),T(hs.$$.fragment),wy=c(),T(ms.$$.fragment),Ey=c(),T(us.$$.fragment),yf=c(),on=a("h2"),fs=a("a"),Hp=a("span"),T(Kr.$$.fragment),$y=c(),Kp=a("span"),Fy=n("ElectraForSequenceClassification"),Tf=c(),Et=a("div"),T(Qr.$$.fragment),xy=c(),Qp=a("p"),My=n(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),zy=c(),Vr=a("p"),jy=n("This model inherits from "),ic=a("a"),Cy=n("PreTrainedModel"),qy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Py=c(),Jr=a("p"),Ay=n("This model is also a PyTorch "),Gr=a("a"),Oy=n("torch.nn.Module"),Ly=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ny=c(),pt=a("div"),T(Xr.$$.fragment),Iy=c(),nn=a("p"),Dy=n("The "),lc=a("a"),Sy=n("ElectraForSequenceClassification"),Wy=n(" forward method, overrides the "),Vp=a("code"),Uy=n("__call__"),By=n(" special method."),Ry=c(),T(gs.$$.fragment),Hy=c(),T(_s.$$.fragment),Ky=c(),T(ks.$$.fragment),Qy=c(),T(vs.$$.fragment),Vy=c(),T(ys.$$.fragment),bf=c(),sn=a("h2"),Ts=a("a"),Jp=a("span"),T(Yr.$$.fragment),Jy=c(),Gp=a("span"),Gy=n("ElectraForMultipleChoice"),wf=c(),$t=a("div"),T(Zr.$$.fragment),Xy=c(),Xp=a("p"),Yy=n(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Zy=c(),ei=a("p"),eT=n("This model inherits from "),dc=a("a"),tT=n("PreTrainedModel"),oT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nT=c(),ti=a("p"),sT=n("This model is also a PyTorch "),oi=a("a"),aT=n("torch.nn.Module"),rT=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),iT=c(),Jt=a("div"),T(ni.$$.fragment),lT=c(),an=a("p"),dT=n("The "),cc=a("a"),cT=n("ElectraForMultipleChoice"),pT=n(" forward method, overrides the "),Yp=a("code"),hT=n("__call__"),mT=n(" special method."),uT=c(),T(bs.$$.fragment),fT=c(),T(ws.$$.fragment),Ef=c(),rn=a("h2"),Es=a("a"),Zp=a("span"),T(si.$$.fragment),gT=c(),eh=a("span"),_T=n("ElectraForTokenClassification"),$f=c(),ut=a("div"),T(ai.$$.fragment),kT=c(),th=a("p"),vT=n("Electra model with a token classification head on top."),yT=c(),oh=a("p"),TT=n("Both the discriminator and generator may be loaded into this model."),bT=c(),ri=a("p"),wT=n("This model inherits from "),pc=a("a"),ET=n("PreTrainedModel"),$T=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),FT=c(),ii=a("p"),xT=n("This model is also a PyTorch "),li=a("a"),MT=n("torch.nn.Module"),zT=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jT=c(),Mt=a("div"),T(di.$$.fragment),CT=c(),ln=a("p"),qT=n("The "),hc=a("a"),PT=n("ElectraForTokenClassification"),AT=n(" forward method, overrides the "),nh=a("code"),OT=n("__call__"),LT=n(" special method."),NT=c(),T($s.$$.fragment),IT=c(),T(Fs.$$.fragment),DT=c(),T(xs.$$.fragment),Ff=c(),dn=a("h2"),Ms=a("a"),sh=a("span"),T(ci.$$.fragment),ST=c(),ah=a("span"),WT=n("ElectraForQuestionAnswering"),xf=c(),Ft=a("div"),T(pi.$$.fragment),UT=c(),cn=a("p"),BT=n(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rh=a("code"),RT=n("span start logits"),HT=n(" and "),ih=a("code"),KT=n("span end logits"),QT=n(")."),VT=c(),hi=a("p"),JT=n("This model inherits from "),mc=a("a"),GT=n("PreTrainedModel"),XT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),YT=c(),mi=a("p"),ZT=n("This model is also a PyTorch "),ui=a("a"),eb=n("torch.nn.Module"),tb=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ob=c(),zt=a("div"),T(fi.$$.fragment),nb=c(),pn=a("p"),sb=n("The "),uc=a("a"),ab=n("ElectraForQuestionAnswering"),rb=n(" forward method, overrides the "),lh=a("code"),ib=n("__call__"),lb=n(" special method."),db=c(),T(zs.$$.fragment),cb=c(),T(js.$$.fragment),pb=c(),T(Cs.$$.fragment),Mf=c(),hn=a("h2"),qs=a("a"),dh=a("span"),T(gi.$$.fragment),hb=c(),ch=a("span"),mb=n("TFElectraModel"),zf=c(),ft=a("div"),T(_i.$$.fragment),ub=c(),ph=a("p"),fb=n("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),gb=c(),ki=a("p"),_b=n("This model inherits from "),fc=a("a"),kb=n("TFPreTrainedModel"),vb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yb=c(),vi=a("p"),Tb=n("This model is also a "),yi=a("a"),bb=n("tf.keras.Model"),wb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Eb=c(),T(Ps.$$.fragment),$b=c(),Gt=a("div"),T(Ti.$$.fragment),Fb=c(),mn=a("p"),xb=n("The "),gc=a("a"),Mb=n("TFElectraModel"),zb=n(" forward method, overrides the "),hh=a("code"),jb=n("__call__"),Cb=n(" special method."),qb=c(),T(As.$$.fragment),Pb=c(),T(Os.$$.fragment),jf=c(),un=a("h2"),Ls=a("a"),mh=a("span"),T(bi.$$.fragment),Ab=c(),uh=a("span"),Ob=n("TFElectraForPreTraining"),Cf=c(),ot=a("div"),T(wi.$$.fragment),Lb=c(),fh=a("p"),Nb=n("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),Ib=c(),gh=a("p"),Db=n(`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),Sb=c(),Ei=a("p"),Wb=n("This model inherits from "),_c=a("a"),Ub=n("TFPreTrainedModel"),Bb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rb=c(),$i=a("p"),Hb=n("This model is also a "),Fi=a("a"),Kb=n("tf.keras.Model"),Qb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vb=c(),T(Ns.$$.fragment),Jb=c(),Xt=a("div"),T(xi.$$.fragment),Gb=c(),fn=a("p"),Xb=n("The "),kc=a("a"),Yb=n("TFElectraForPreTraining"),Zb=n(" forward method, overrides the "),_h=a("code"),ew=n("__call__"),tw=n(" special method."),ow=c(),T(Is.$$.fragment),nw=c(),T(Ds.$$.fragment),qf=c(),gn=a("h2"),Ss=a("a"),kh=a("span"),T(Mi.$$.fragment),sw=c(),vh=a("span"),aw=n("TFElectraForMaskedLM"),Pf=c(),nt=a("div"),T(zi.$$.fragment),rw=c(),yh=a("p"),iw=n("Electra model with a language modeling head on top."),lw=c(),Th=a("p"),dw=n(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),cw=c(),ji=a("p"),pw=n("This model inherits from "),vc=a("a"),hw=n("TFPreTrainedModel"),mw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uw=c(),Ci=a("p"),fw=n("This model is also a "),qi=a("a"),gw=n("tf.keras.Model"),_w=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kw=c(),T(Ws.$$.fragment),vw=c(),jt=a("div"),T(Pi.$$.fragment),yw=c(),_n=a("p"),Tw=n("The "),yc=a("a"),bw=n("TFElectraForMaskedLM"),ww=n(" forward method, overrides the "),bh=a("code"),Ew=n("__call__"),$w=n(" special method."),Fw=c(),T(Us.$$.fragment),xw=c(),T(Bs.$$.fragment),Mw=c(),T(Rs.$$.fragment),Af=c(),kn=a("h2"),Hs=a("a"),wh=a("span"),T(Ai.$$.fragment),zw=c(),Eh=a("span"),jw=n("TFElectraForSequenceClassification"),Of=c(),gt=a("div"),T(Oi.$$.fragment),Cw=c(),$h=a("p"),qw=n(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Pw=c(),Li=a("p"),Aw=n("This model inherits from "),Tc=a("a"),Ow=n("TFPreTrainedModel"),Lw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nw=c(),Ni=a("p"),Iw=n("This model is also a "),Ii=a("a"),Dw=n("tf.keras.Model"),Sw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ww=c(),T(Ks.$$.fragment),Uw=c(),Ct=a("div"),T(Di.$$.fragment),Bw=c(),vn=a("p"),Rw=n("The "),bc=a("a"),Hw=n("TFElectraForSequenceClassification"),Kw=n(" forward method, overrides the "),Fh=a("code"),Qw=n("__call__"),Vw=n(" special method."),Jw=c(),T(Qs.$$.fragment),Gw=c(),T(Vs.$$.fragment),Xw=c(),T(Js.$$.fragment),Lf=c(),yn=a("h2"),Gs=a("a"),xh=a("span"),T(Si.$$.fragment),Yw=c(),Mh=a("span"),Zw=n("TFElectraForMultipleChoice"),Nf=c(),_t=a("div"),T(Wi.$$.fragment),eE=c(),zh=a("p"),tE=n(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),oE=c(),Ui=a("p"),nE=n("This model inherits from "),wc=a("a"),sE=n("TFPreTrainedModel"),aE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rE=c(),Bi=a("p"),iE=n("This model is also a "),Ri=a("a"),lE=n("tf.keras.Model"),dE=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cE=c(),T(Xs.$$.fragment),pE=c(),Yt=a("div"),T(Hi.$$.fragment),hE=c(),Tn=a("p"),mE=n("The "),Ec=a("a"),uE=n("TFElectraForMultipleChoice"),fE=n(" forward method, overrides the "),jh=a("code"),gE=n("__call__"),_E=n(" special method."),kE=c(),T(Ys.$$.fragment),vE=c(),T(Zs.$$.fragment),If=c(),bn=a("h2"),ea=a("a"),Ch=a("span"),T(Ki.$$.fragment),yE=c(),qh=a("span"),TE=n("TFElectraForTokenClassification"),Df=c(),st=a("div"),T(Qi.$$.fragment),bE=c(),Ph=a("p"),wE=n("Electra model with a token classification head on top."),EE=c(),Ah=a("p"),$E=n("Both the discriminator and generator may be loaded into this model."),FE=c(),Vi=a("p"),xE=n("This model inherits from "),$c=a("a"),ME=n("TFPreTrainedModel"),zE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jE=c(),Ji=a("p"),CE=n("This model is also a "),Gi=a("a"),qE=n("tf.keras.Model"),PE=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),AE=c(),T(ta.$$.fragment),OE=c(),qt=a("div"),T(Xi.$$.fragment),LE=c(),wn=a("p"),NE=n("The "),Fc=a("a"),IE=n("TFElectraForTokenClassification"),DE=n(" forward method, overrides the "),Oh=a("code"),SE=n("__call__"),WE=n(" special method."),UE=c(),T(oa.$$.fragment),BE=c(),T(na.$$.fragment),RE=c(),T(sa.$$.fragment),Sf=c(),En=a("h2"),aa=a("a"),Lh=a("span"),T(Yi.$$.fragment),HE=c(),Nh=a("span"),KE=n("TFElectraForQuestionAnswering"),Wf=c(),kt=a("div"),T(Zi.$$.fragment),QE=c(),$n=a("p"),VE=n(`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ih=a("code"),JE=n("span start logits"),GE=n(" and "),Dh=a("code"),XE=n("span end logits"),YE=n(")."),ZE=c(),el=a("p"),e$=n("This model inherits from "),xc=a("a"),t$=n("TFPreTrainedModel"),o$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),n$=c(),tl=a("p"),s$=n("This model is also a "),ol=a("a"),a$=n("tf.keras.Model"),r$=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),i$=c(),T(ra.$$.fragment),l$=c(),Pt=a("div"),T(nl.$$.fragment),d$=c(),Fn=a("p"),c$=n("The "),Mc=a("a"),p$=n("TFElectraForQuestionAnswering"),h$=n(" forward method, overrides the "),Sh=a("code"),m$=n("__call__"),u$=n(" special method."),f$=c(),T(ia.$$.fragment),g$=c(),T(la.$$.fragment),_$=c(),T(da.$$.fragment),Uf=c(),xn=a("h2"),ca=a("a"),Wh=a("span"),T(sl.$$.fragment),k$=c(),Uh=a("span"),v$=n("FlaxElectraModel"),Bf=c(),at=a("div"),T(al.$$.fragment),y$=c(),Bh=a("p"),T$=n("The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),b$=c(),rl=a("p"),w$=n("This model inherits from "),zc=a("a"),E$=n("FlaxPreTrainedModel"),$$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),F$=c(),il=a("p"),x$=n(`This model is also a Flax Linen
`),ll=a("a"),M$=n("flax.nn.Module"),z$=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),j$=c(),Rh=a("p"),C$=n("Finally, this model supports inherent JAX features such as:"),q$=c(),fo=a("ul"),Hh=a("li"),dl=a("a"),P$=n("Just-In-Time (JIT) compilation"),A$=c(),Kh=a("li"),cl=a("a"),O$=n("Automatic Differentiation"),L$=c(),Qh=a("li"),pl=a("a"),N$=n("Vectorization"),I$=c(),Vh=a("li"),hl=a("a"),D$=n("Parallelization"),S$=c(),Zt=a("div"),T(ml.$$.fragment),W$=c(),Mn=a("p"),U$=n("The "),Jh=a("code"),B$=n("FlaxElectraPreTrainedModel"),R$=n(" forward method, overrides the "),Gh=a("code"),H$=n("__call__"),K$=n(" special method."),Q$=c(),T(pa.$$.fragment),V$=c(),T(ha.$$.fragment),Rf=c(),zn=a("h2"),ma=a("a"),Xh=a("span"),T(ul.$$.fragment),J$=c(),Yh=a("span"),G$=n("FlaxElectraForPreTraining"),Hf=c(),Ze=a("div"),T(fl.$$.fragment),X$=c(),Zh=a("p"),Y$=n("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),Z$=c(),em=a("p"),e2=n("It is recommended to load the discriminator checkpoint into that model."),t2=c(),gl=a("p"),o2=n("This model inherits from "),jc=a("a"),n2=n("FlaxPreTrainedModel"),s2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),a2=c(),_l=a("p"),r2=n(`This model is also a Flax Linen
`),kl=a("a"),i2=n("flax.nn.Module"),l2=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),d2=c(),tm=a("p"),c2=n("Finally, this model supports inherent JAX features such as:"),p2=c(),go=a("ul"),om=a("li"),vl=a("a"),h2=n("Just-In-Time (JIT) compilation"),m2=c(),nm=a("li"),yl=a("a"),u2=n("Automatic Differentiation"),f2=c(),sm=a("li"),Tl=a("a"),g2=n("Vectorization"),_2=c(),am=a("li"),bl=a("a"),k2=n("Parallelization"),v2=c(),eo=a("div"),T(wl.$$.fragment),y2=c(),jn=a("p"),T2=n("The "),rm=a("code"),b2=n("FlaxElectraPreTrainedModel"),w2=n(" forward method, overrides the "),im=a("code"),E2=n("__call__"),$2=n(" special method."),F2=c(),T(ua.$$.fragment),x2=c(),T(fa.$$.fragment),Kf=c(),Cn=a("h2"),ga=a("a"),lm=a("span"),T(El.$$.fragment),M2=c(),dm=a("span"),z2=n("FlaxElectraForCausalLM"),Qf=c(),rt=a("div"),T($l.$$.fragment),j2=c(),cm=a("p"),C2=n(`Electra Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),q2=c(),Fl=a("p"),P2=n("This model inherits from "),Cc=a("a"),A2=n("FlaxPreTrainedModel"),O2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),L2=c(),xl=a("p"),N2=n(`This model is also a Flax Linen
`),Ml=a("a"),I2=n("flax.nn.Module"),D2=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),S2=c(),pm=a("p"),W2=n("Finally, this model supports inherent JAX features such as:"),U2=c(),_o=a("ul"),hm=a("li"),zl=a("a"),B2=n("Just-In-Time (JIT) compilation"),R2=c(),mm=a("li"),jl=a("a"),H2=n("Automatic Differentiation"),K2=c(),um=a("li"),Cl=a("a"),Q2=n("Vectorization"),V2=c(),fm=a("li"),ql=a("a"),J2=n("Parallelization"),G2=c(),to=a("div"),T(Pl.$$.fragment),X2=c(),qn=a("p"),Y2=n("The "),gm=a("code"),Z2=n("FlaxElectraPreTrainedModel"),e1=n(" forward method, overrides the "),_m=a("code"),t1=n("__call__"),o1=n(" special method."),n1=c(),T(_a.$$.fragment),s1=c(),T(ka.$$.fragment),Vf=c(),Pn=a("h2"),va=a("a"),km=a("span"),T(Al.$$.fragment),a1=c(),vm=a("span"),r1=n("FlaxElectraForMaskedLM"),Jf=c(),it=a("div"),T(Ol.$$.fragment),i1=c(),Ll=a("p"),l1=n("Electra Model with a "),ym=a("code"),d1=n("language modeling"),c1=n(" head on top."),p1=c(),Nl=a("p"),h1=n("This model inherits from "),qc=a("a"),m1=n("FlaxPreTrainedModel"),u1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),f1=c(),Il=a("p"),g1=n(`This model is also a Flax Linen
`),Dl=a("a"),_1=n("flax.nn.Module"),k1=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),v1=c(),Tm=a("p"),y1=n("Finally, this model supports inherent JAX features such as:"),T1=c(),ko=a("ul"),bm=a("li"),Sl=a("a"),b1=n("Just-In-Time (JIT) compilation"),w1=c(),wm=a("li"),Wl=a("a"),E1=n("Automatic Differentiation"),$1=c(),Em=a("li"),Ul=a("a"),F1=n("Vectorization"),x1=c(),$m=a("li"),Bl=a("a"),M1=n("Parallelization"),z1=c(),oo=a("div"),T(Rl.$$.fragment),j1=c(),An=a("p"),C1=n("The "),Fm=a("code"),q1=n("FlaxElectraPreTrainedModel"),P1=n(" forward method, overrides the "),xm=a("code"),A1=n("__call__"),O1=n(" special method."),L1=c(),T(ya.$$.fragment),N1=c(),T(Ta.$$.fragment),Gf=c(),On=a("h2"),ba=a("a"),Mm=a("span"),T(Hl.$$.fragment),I1=c(),zm=a("span"),D1=n("FlaxElectraForSequenceClassification"),Xf=c(),lt=a("div"),T(Kl.$$.fragment),S1=c(),jm=a("p"),W1=n(`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),U1=c(),Ql=a("p"),B1=n("This model inherits from "),Pc=a("a"),R1=n("FlaxPreTrainedModel"),H1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),K1=c(),Vl=a("p"),Q1=n(`This model is also a Flax Linen
`),Jl=a("a"),V1=n("flax.nn.Module"),J1=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),G1=c(),Cm=a("p"),X1=n("Finally, this model supports inherent JAX features such as:"),Y1=c(),vo=a("ul"),qm=a("li"),Gl=a("a"),Z1=n("Just-In-Time (JIT) compilation"),e0=c(),Pm=a("li"),Xl=a("a"),t0=n("Automatic Differentiation"),o0=c(),Am=a("li"),Yl=a("a"),n0=n("Vectorization"),s0=c(),Om=a("li"),Zl=a("a"),a0=n("Parallelization"),r0=c(),no=a("div"),T(ed.$$.fragment),i0=c(),Ln=a("p"),l0=n("The "),Lm=a("code"),d0=n("FlaxElectraPreTrainedModel"),c0=n(" forward method, overrides the "),Nm=a("code"),p0=n("__call__"),h0=n(" special method."),m0=c(),T(wa.$$.fragment),u0=c(),T(Ea.$$.fragment),Yf=c(),Nn=a("h2"),$a=a("a"),Im=a("span"),T(td.$$.fragment),f0=c(),Dm=a("span"),g0=n("FlaxElectraForMultipleChoice"),Zf=c(),dt=a("div"),T(od.$$.fragment),_0=c(),Sm=a("p"),k0=n(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),v0=c(),nd=a("p"),y0=n("This model inherits from "),Ac=a("a"),T0=n("FlaxPreTrainedModel"),b0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),w0=c(),sd=a("p"),E0=n(`This model is also a Flax Linen
`),ad=a("a"),$0=n("flax.nn.Module"),F0=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),x0=c(),Wm=a("p"),M0=n("Finally, this model supports inherent JAX features such as:"),z0=c(),yo=a("ul"),Um=a("li"),rd=a("a"),j0=n("Just-In-Time (JIT) compilation"),C0=c(),Bm=a("li"),id=a("a"),q0=n("Automatic Differentiation"),P0=c(),Rm=a("li"),ld=a("a"),A0=n("Vectorization"),O0=c(),Hm=a("li"),dd=a("a"),L0=n("Parallelization"),N0=c(),so=a("div"),T(cd.$$.fragment),I0=c(),In=a("p"),D0=n("The "),Km=a("code"),S0=n("FlaxElectraPreTrainedModel"),W0=n(" forward method, overrides the "),Qm=a("code"),U0=n("__call__"),B0=n(" special method."),R0=c(),T(Fa.$$.fragment),H0=c(),T(xa.$$.fragment),eg=c(),Dn=a("h2"),Ma=a("a"),Vm=a("span"),T(pd.$$.fragment),K0=c(),Jm=a("span"),Q0=n("FlaxElectraForTokenClassification"),tg=c(),et=a("div"),T(hd.$$.fragment),V0=c(),Gm=a("p"),J0=n("Electra model with a token classification head on top."),G0=c(),Xm=a("p"),X0=n("Both the discriminator and generator may be loaded into this model."),Y0=c(),md=a("p"),Z0=n("This model inherits from "),Oc=a("a"),eF=n("FlaxPreTrainedModel"),tF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oF=c(),ud=a("p"),nF=n(`This model is also a Flax Linen
`),fd=a("a"),sF=n("flax.nn.Module"),aF=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rF=c(),Ym=a("p"),iF=n("Finally, this model supports inherent JAX features such as:"),lF=c(),To=a("ul"),Zm=a("li"),gd=a("a"),dF=n("Just-In-Time (JIT) compilation"),cF=c(),eu=a("li"),_d=a("a"),pF=n("Automatic Differentiation"),hF=c(),tu=a("li"),kd=a("a"),mF=n("Vectorization"),uF=c(),ou=a("li"),vd=a("a"),fF=n("Parallelization"),gF=c(),ao=a("div"),T(yd.$$.fragment),_F=c(),Sn=a("p"),kF=n("The "),nu=a("code"),vF=n("FlaxElectraPreTrainedModel"),yF=n(" forward method, overrides the "),su=a("code"),TF=n("__call__"),bF=n(" special method."),wF=c(),T(za.$$.fragment),EF=c(),T(ja.$$.fragment),og=c(),Wn=a("h2"),Ca=a("a"),au=a("span"),T(Td.$$.fragment),$F=c(),ru=a("span"),FF=n("FlaxElectraForQuestionAnswering"),ng=c(),ct=a("div"),T(bd.$$.fragment),xF=c(),Un=a("p"),MF=n(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),iu=a("code"),zF=n("span start logits"),jF=n(" and "),lu=a("code"),CF=n("span end logits"),qF=n(")."),PF=c(),wd=a("p"),AF=n("This model inherits from "),Lc=a("a"),OF=n("FlaxPreTrainedModel"),LF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),NF=c(),Ed=a("p"),IF=n(`This model is also a Flax Linen
`),$d=a("a"),DF=n("flax.nn.Module"),SF=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),WF=c(),du=a("p"),UF=n("Finally, this model supports inherent JAX features such as:"),BF=c(),bo=a("ul"),cu=a("li"),Fd=a("a"),RF=n("Just-In-Time (JIT) compilation"),HF=c(),pu=a("li"),xd=a("a"),KF=n("Automatic Differentiation"),QF=c(),hu=a("li"),Md=a("a"),VF=n("Vectorization"),JF=c(),mu=a("li"),zd=a("a"),GF=n("Parallelization"),XF=c(),ro=a("div"),T(jd.$$.fragment),YF=c(),Bn=a("p"),ZF=n("The "),uu=a("code"),ex=n("FlaxElectraPreTrainedModel"),tx=n(" forward method, overrides the "),fu=a("code"),ox=n("__call__"),nx=n(" special method."),sx=c(),T(qa.$$.fragment),ax=c(),T(Pa.$$.fragment),this.h()},l(o){const k=fj('[data-svelte="svelte-1phssyn"]',document.head);d=r(k,"META",{name:!0,content:!0}),k.forEach(t),g=p(o),h=r(o,"H1",{class:!0});var Cd=i(h);f=r(Cd,"A",{id:!0,class:!0,href:!0});var gu=i(f);v=r(gu,"SPAN",{});var _u=i(v);b(l.$$.fragment,_u),_u.forEach(t),gu.forEach(t),m=p(Cd),z=r(Cd,"SPAN",{});var ku=i(z);Te=s(ku,"ELECTRA"),ku.forEach(t),Cd.forEach(t),fe=p(o),W=r(o,"H2",{class:!0});var qd=i(W);ae=r(qd,"A",{id:!0,class:!0,href:!0});var vu=i(ae);ee=r(vu,"SPAN",{});var yu=i(ee);b(M.$$.fragment,yu),yu.forEach(t),vu.forEach(t),be=p(qd),K=r(qd,"SPAN",{});var Tu=i(K);we=s(Tu,"Overview"),Tu.forEach(t),qd.forEach(t),ge=p(o),U=r(o,"P",{});var Pd=i(U);Ee=s(Pd,"The ELECTRA model was proposed in the paper "),re=r(Pd,"A",{href:!0,rel:!0});var bu=i(re);Q=s(bu,`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
Generators`),bu.forEach(t),$e=s(Pd,`. ELECTRA is a new pretraining approach which trains two
transformer models: the generator and the discriminator. The generator\u2019s role is to replace tokens in a sequence, and
is therefore trained as a masked language model. The discriminator, which is the model we\u2019re interested in, tries to
identify which tokens were replaced by the generator in the sequence.`),Pd.forEach(t),_e=p(o),R=r(o,"P",{});var wu=i(R);Fe=s(wu,"The abstract from the paper is the following:"),wu.forEach(t),ke=p(o),H=r(o,"P",{});var Eu=i(H);me=r(Eu,"EM",{});var $u=i(me);xe=s($u,`Masked language modeling (MLM) pretraining methods such as BERT corrupt the input by replacing some tokens with [MASK]
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
using the same amount of compute.`),$u.forEach(t),Eu.forEach(t),oe=p(o),q=r(o,"P",{});var Fu=i(q);A=s(Fu,"Tips:"),Fu.forEach(t),ve=p(o),B=r(o,"UL",{});var Ad=i(B);ue=r(Ad,"LI",{});var xu=i(ue);Me=s(xu,`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),xu.forEach(t),V=p(Ad),ne=r(Ad,"LI",{});var wo=i(ne);ze=s(wo,"The ELECTRA checkpoints saved using "),P=r(wo,"A",{href:!0,rel:!0});var Mu=i(P);je=s(Mu,"Google Research\u2019s implementation"),Mu.forEach(t),J=s(wo,`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),ce=r(wo,"A",{href:!0});var zu=i(ce);Ce=s(zu,"ElectraForMaskedLM"),zu.forEach(t),G=s(wo,` model, and the generator may be loaded in the
`),pe=r(wo,"A",{href:!0});var ju=i(pe);qe=s(ju,"ElectraForPreTraining"),ju.forEach(t),D=s(wo,` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),wo.forEach(t),Ad.forEach(t),ye=p(o),S=r(o,"P",{});var Rn=i(S);Pe=s(Rn,"This model was contributed by "),Z=r(Rn,"A",{href:!0,rel:!0});var Cu=i(Z);O=s(Cu,"lysandre"),Cu.forEach(t),Ae=s(Rn,". The original code can be found "),L=r(Rn,"A",{href:!0,rel:!0});var qu=i(L);Oe=s(qu,"here"),qu.forEach(t),Le=s(Rn,"."),Rn.forEach(t),y=p(o),j=r(o,"H2",{class:!0});var Od=i(j);De=r(Od,"A",{id:!0,class:!0,href:!0});var Pu=i(De);te=r(Pu,"SPAN",{});var Au=i(te);b(We.$$.fragment,Au),Au.forEach(t),Pu.forEach(t),Qe=p(Od),C=r(Od,"SPAN",{});var Ou=i(C);Ve=s(Ou,"ElectraConfig"),Ou.forEach(t),Od.forEach(t),Ke=p(o),he=r(o,"DIV",{class:!0});var Eo=i(he);b(Ue.$$.fragment,Eo),Je=p(Eo),N=r(Eo,"P",{});var $o=i(N);X=s($o,"This is the configuration class to store the configuration of a "),Re=r($o,"A",{href:!0});var Lu=i(Re);Ge=s(Lu,"ElectraModel"),Lu.forEach(t),Y=s($o," or a "),He=r($o,"A",{href:!0});var Nu=i(He);Xe=s(Nu,"TFElectraModel"),Nu.forEach(t),Ne=s($o,`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),Be=r($o,"A",{href:!0,rel:!0});var Iu=i(Be);se=s(Iu,"google/electra-small-discriminator"),Iu.forEach(t),Ye=s($o," architecture."),$o.forEach(t),z_=p(Eo),Wo=r(Eo,"P",{});var Hn=i(Wo);j_=s(Hn,"Configuration objects inherit from "),Bd=r(Hn,"A",{href:!0});var Du=i(Bd);C_=s(Du,"PretrainedConfig"),Du.forEach(t),q_=s(Hn,` and can be used to control the model outputs. Read the
documentation from `),Rd=r(Hn,"A",{href:!0});var Su=i(Rd);P_=s(Su,"PretrainedConfig"),Su.forEach(t),A_=s(Hn," for more information."),Hn.forEach(t),O_=p(Eo),b(Vn.$$.fragment,Eo),Eo.forEach(t),sf=p(o),Uo=r(o,"H2",{class:!0});var Ld=i(Uo);Jn=r(Ld,"A",{id:!0,class:!0,href:!0});var Wu=i(Jn);pp=r(Wu,"SPAN",{});var Uu=i(pp);b(nr.$$.fragment,Uu),Uu.forEach(t),Wu.forEach(t),L_=p(Ld),hp=r(Ld,"SPAN",{});var Bu=i(hp);N_=s(Bu,"ElectraTokenizer"),Bu.forEach(t),Ld.forEach(t),af=p(o),tt=r(o,"DIV",{class:!0});var vt=i(tt);b(sr.$$.fragment,vt),I_=p(vt),mp=r(vt,"P",{});var Ru=i(mp);D_=s(Ru,"Construct a BERT tokenizer. Based on WordPiece."),Ru.forEach(t),S_=p(vt),ar=r(vt,"P",{});var Nd=i(ar);W_=s(Nd,"This tokenizer inherits from "),Hd=r(Nd,"A",{href:!0});var Hu=i(Hd);U_=s(Hu,"PreTrainedTokenizer"),Hu.forEach(t),B_=s(Nd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Nd.forEach(t),R_=p(vt),Mo=r(vt,"DIV",{class:!0});var Kn=i(Mo);b(rr.$$.fragment,Kn),H_=p(Kn),up=r(Kn,"P",{});var Ku=i(up);K_=s(Ku,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Ku.forEach(t),Q_=p(Kn),ir=r(Kn,"UL",{});var Id=i(ir);Kd=r(Id,"LI",{});var Nc=i(Kd);V_=s(Nc,"single sequence: "),fp=r(Nc,"CODE",{});var Qu=i(fp);J_=s(Qu,"[CLS] X [SEP]"),Qu.forEach(t),Nc.forEach(t),G_=p(Id),Qd=r(Id,"LI",{});var Ic=i(Qd);X_=s(Ic,"pair of sequences: "),gp=r(Ic,"CODE",{});var Vu=i(gp);Y_=s(Vu,"[CLS] A [SEP] B [SEP]"),Vu.forEach(t),Ic.forEach(t),Id.forEach(t),Kn.forEach(t),Z_=p(vt),Gn=r(vt,"DIV",{class:!0});var Dd=i(Gn);b(lr.$$.fragment,Dd),ek=p(Dd),_p=r(Dd,"P",{});var Ju=i(_p);tk=s(Ju,"Converts a sequence of tokens (string) in a single string."),Ju.forEach(t),Dd.forEach(t),ok=p(vt),Ht=r(vt,"DIV",{class:!0});var Fo=i(Ht);b(dr.$$.fragment,Fo),nk=p(Fo),kp=r(Fo,"P",{});var Gu=i(kp);sk=s(Gu,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Gu.forEach(t),ak=p(Fo),b(Xn.$$.fragment,Fo),rk=p(Fo),Bo=r(Fo,"P",{});var Qn=i(Bo);ik=s(Qn,"If "),vp=r(Qn,"CODE",{});var Xu=i(vp);lk=s(Xu,"token_ids_1"),Xu.forEach(t),dk=s(Qn," is "),yp=r(Qn,"CODE",{});var Yu=i(yp);ck=s(Yu,"None"),Yu.forEach(t),pk=s(Qn,", this method only returns the first portion of the mask (0s)."),Qn.forEach(t),Fo.forEach(t),hk=p(vt),Yn=r(vt,"DIV",{class:!0});var Sd=i(Yn);b(cr.$$.fragment,Sd),mk=p(Sd),pr=r(Sd,"P",{});var Wd=i(pr);uk=s(Wd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Tp=r(Wd,"CODE",{});var Zu=i(Tp);fk=s(Zu,"prepare_for_model"),Zu.forEach(t),gk=s(Wd," method."),Wd.forEach(t),Sd.forEach(t),vt.forEach(t),rf=p(o),Ro=r(o,"H2",{class:!0});var Ud=i(Ro);Zn=r(Ud,"A",{id:!0,class:!0,href:!0});var ef=i(Zn);bp=r(ef,"SPAN",{});var tf=i(bp);b(hr.$$.fragment,tf),tf.forEach(t),ef.forEach(t),_k=p(Ud),wp=r(Ud,"SPAN",{});var of=i(wp);kk=s(of,"ElectraTokenizerFast"),of.forEach(t),Ud.forEach(t),lf=p(o),Rt=r(o,"DIV",{class:!0});var xo=i(Rt);b(mr.$$.fragment,xo),vk=p(xo),ur=r(xo,"P",{});var ag=i(ur);yk=s(ag,"Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),Ep=r(ag,"EM",{});var rx=i(Ep);Tk=s(rx,"tokenizers"),rx.forEach(t),bk=s(ag," library)."),ag.forEach(t),wk=p(xo),es=r(xo,"P",{});var nf=i(es);Vd=r(nf,"A",{href:!0});var ix=i(Vd);Ek=s(ix,"ElectraTokenizerFast"),ix.forEach(t),$k=s(nf," is identical to "),Jd=r(nf,"A",{href:!0});var lx=i(Jd);Fk=s(lx,"BertTokenizerFast"),lx.forEach(t),xk=s(nf,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),nf.forEach(t),Mk=p(xo),fr=r(xo,"P",{});var rg=i(fr);zk=s(rg,"Refer to superclass "),Gd=r(rg,"A",{href:!0});var dx=i(Gd);jk=s(dx,"BertTokenizerFast"),dx.forEach(t),Ck=s(rg," for usage examples and documentation concerning parameters."),rg.forEach(t),xo.forEach(t),df=p(o),Ho=r(o,"H2",{class:!0});var ig=i(Ho);ts=r(ig,"A",{id:!0,class:!0,href:!0});var cx=i(ts);$p=r(cx,"SPAN",{});var px=i($p);b(gr.$$.fragment,px),px.forEach(t),cx.forEach(t),qk=p(ig),Fp=r(ig,"SPAN",{});var hx=i(Fp);Pk=s(hx,"Electra specific outputs"),hx.forEach(t),ig.forEach(t),cf=p(o),Ko=r(o,"DIV",{class:!0});var lg=i(Ko);b(_r.$$.fragment,lg),Ak=p(lg),kr=r(lg,"P",{});var dg=i(kr);Ok=s(dg,"Output type of "),Xd=r(dg,"A",{href:!0});var mx=i(Xd);Lk=s(mx,"ElectraForPreTraining"),mx.forEach(t),Nk=s(dg,"."),dg.forEach(t),lg.forEach(t),pf=p(o),Qo=r(o,"DIV",{class:!0});var cg=i(Qo);b(vr.$$.fragment,cg),Ik=p(cg),yr=r(cg,"P",{});var pg=i(yr);Dk=s(pg,"Output type of "),Yd=r(pg,"A",{href:!0});var ux=i(Yd);Sk=s(ux,"TFElectraForPreTraining"),ux.forEach(t),Wk=s(pg,"."),pg.forEach(t),cg.forEach(t),hf=p(o),Vo=r(o,"H2",{class:!0});var hg=i(Vo);os=r(hg,"A",{id:!0,class:!0,href:!0});var fx=i(os);xp=r(fx,"SPAN",{});var gx=i(xp);b(Tr.$$.fragment,gx),gx.forEach(t),fx.forEach(t),Uk=p(hg),Mp=r(hg,"SPAN",{});var _x=i(Mp);Bk=s(_x,"ElectraModel"),_x.forEach(t),hg.forEach(t),mf=p(o),bt=r(o,"DIV",{class:!0});var zo=i(bt);b(br.$$.fragment,zo),Rk=p(zo),zp=r(zo,"P",{});var kx=i(zp);Hk=s(kx,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),kx.forEach(t),Kk=p(zo),wr=r(zo,"P",{});var mg=i(wr);Qk=s(mg,"This model inherits from "),Zd=r(mg,"A",{href:!0});var vx=i(Zd);Vk=s(vx,"PreTrainedModel"),vx.forEach(t),Jk=s(mg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mg.forEach(t),Gk=p(zo),Er=r(zo,"P",{});var ug=i(Er);Xk=s(ug,"This model is also a PyTorch "),$r=r(ug,"A",{href:!0,rel:!0});var yx=i($r);Yk=s(yx,"torch.nn.Module"),yx.forEach(t),Zk=s(ug,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ug.forEach(t),ev=p(zo),Kt=r(zo,"DIV",{class:!0});var Aa=i(Kt);b(Fr.$$.fragment,Aa),tv=p(Aa),Jo=r(Aa,"P",{});var Dc=i(Jo);ov=s(Dc,"The "),ec=r(Dc,"A",{href:!0});var Tx=i(ec);nv=s(Tx,"ElectraModel"),Tx.forEach(t),sv=s(Dc," forward method, overrides the "),jp=r(Dc,"CODE",{});var bx=i(jp);av=s(bx,"__call__"),bx.forEach(t),rv=s(Dc," special method."),Dc.forEach(t),iv=p(Aa),b(ns.$$.fragment,Aa),lv=p(Aa),b(ss.$$.fragment,Aa),Aa.forEach(t),zo.forEach(t),uf=p(o),Go=r(o,"H2",{class:!0});var fg=i(Go);as=r(fg,"A",{id:!0,class:!0,href:!0});var wx=i(as);Cp=r(wx,"SPAN",{});var Ex=i(Cp);b(xr.$$.fragment,Ex),Ex.forEach(t),wx.forEach(t),dv=p(fg),qp=r(fg,"SPAN",{});var $x=i(qp);cv=s($x,"ElectraForPreTraining"),$x.forEach(t),fg.forEach(t),ff=p(o),ht=r(o,"DIV",{class:!0});var io=i(ht);b(Mr.$$.fragment,io),pv=p(io),Pp=r(io,"P",{});var Fx=i(Pp);hv=s(Fx,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),Fx.forEach(t),mv=p(io),Ap=r(io,"P",{});var xx=i(Ap);uv=s(xx,"It is recommended to load the discriminator checkpoint into that model."),xx.forEach(t),fv=p(io),zr=r(io,"P",{});var gg=i(zr);gv=s(gg,"This model inherits from "),tc=r(gg,"A",{href:!0});var Mx=i(tc);_v=s(Mx,"PreTrainedModel"),Mx.forEach(t),kv=s(gg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gg.forEach(t),vv=p(io),jr=r(io,"P",{});var _g=i(jr);yv=s(_g,"This model is also a PyTorch "),Cr=r(_g,"A",{href:!0,rel:!0});var zx=i(Cr);Tv=s(zx,"torch.nn.Module"),zx.forEach(t),bv=s(_g,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_g.forEach(t),wv=p(io),Qt=r(io,"DIV",{class:!0});var Oa=i(Qt);b(qr.$$.fragment,Oa),Ev=p(Oa),Xo=r(Oa,"P",{});var Sc=i(Xo);$v=s(Sc,"The "),oc=r(Sc,"A",{href:!0});var jx=i(oc);Fv=s(jx,"ElectraForPreTraining"),jx.forEach(t),xv=s(Sc," forward method, overrides the "),Op=r(Sc,"CODE",{});var Cx=i(Op);Mv=s(Cx,"__call__"),Cx.forEach(t),zv=s(Sc," special method."),Sc.forEach(t),jv=p(Oa),b(rs.$$.fragment,Oa),Cv=p(Oa),b(is.$$.fragment,Oa),Oa.forEach(t),io.forEach(t),gf=p(o),Yo=r(o,"H2",{class:!0});var kg=i(Yo);ls=r(kg,"A",{id:!0,class:!0,href:!0});var qx=i(ls);Lp=r(qx,"SPAN",{});var Px=i(Lp);b(Pr.$$.fragment,Px),Px.forEach(t),qx.forEach(t),qv=p(kg),Np=r(kg,"SPAN",{});var Ax=i(Np);Pv=s(Ax,"ElectraForCausalLM"),Ax.forEach(t),kg.forEach(t),_f=p(o),wt=r(o,"DIV",{class:!0});var jo=i(wt);b(Ar.$$.fragment,jo),Av=p(jo),Or=r(jo,"P",{});var vg=i(Or);Ov=s(vg,"ELECTRA Model with a "),Ip=r(vg,"CODE",{});var Ox=i(Ip);Lv=s(Ox,"language modeling"),Ox.forEach(t),Nv=s(vg," head on top for CLM fine-tuning."),vg.forEach(t),Iv=p(jo),Lr=r(jo,"P",{});var yg=i(Lr);Dv=s(yg,"This model inherits from "),nc=r(yg,"A",{href:!0});var Lx=i(nc);Sv=s(Lx,"PreTrainedModel"),Lx.forEach(t),Wv=s(yg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yg.forEach(t),Uv=p(jo),Nr=r(jo,"P",{});var Tg=i(Nr);Bv=s(Tg,"This model is also a PyTorch "),Ir=r(Tg,"A",{href:!0,rel:!0});var Nx=i(Ir);Rv=s(Nx,"torch.nn.Module"),Nx.forEach(t),Hv=s(Tg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tg.forEach(t),Kv=p(jo),Vt=r(jo,"DIV",{class:!0});var La=i(Vt);b(Dr.$$.fragment,La),Qv=p(La),Zo=r(La,"P",{});var Wc=i(Zo);Vv=s(Wc,"The "),sc=r(Wc,"A",{href:!0});var Ix=i(sc);Jv=s(Ix,"ElectraForCausalLM"),Ix.forEach(t),Gv=s(Wc," forward method, overrides the "),Dp=r(Wc,"CODE",{});var Dx=i(Dp);Xv=s(Dx,"__call__"),Dx.forEach(t),Yv=s(Wc," special method."),Wc.forEach(t),Zv=p(La),b(ds.$$.fragment,La),ey=p(La),b(cs.$$.fragment,La),La.forEach(t),jo.forEach(t),kf=p(o),en=r(o,"H2",{class:!0});var bg=i(en);ps=r(bg,"A",{id:!0,class:!0,href:!0});var Sx=i(ps);Sp=r(Sx,"SPAN",{});var Wx=i(Sp);b(Sr.$$.fragment,Wx),Wx.forEach(t),Sx.forEach(t),ty=p(bg),Wp=r(bg,"SPAN",{});var Ux=i(Wp);oy=s(Ux,"ElectraForMaskedLM"),Ux.forEach(t),bg.forEach(t),vf=p(o),mt=r(o,"DIV",{class:!0});var lo=i(mt);b(Wr.$$.fragment,lo),ny=p(lo),Up=r(lo,"P",{});var Bx=i(Up);sy=s(Bx,"Electra model with a language modeling head on top."),Bx.forEach(t),ay=p(lo),Bp=r(lo,"P",{});var Rx=i(Bp);ry=s(Rx,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),Rx.forEach(t),iy=p(lo),Ur=r(lo,"P",{});var wg=i(Ur);ly=s(wg,"This model inherits from "),ac=r(wg,"A",{href:!0});var Hx=i(ac);dy=s(Hx,"PreTrainedModel"),Hx.forEach(t),cy=s(wg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wg.forEach(t),py=p(lo),Br=r(lo,"P",{});var Eg=i(Br);hy=s(Eg,"This model is also a PyTorch "),Rr=r(Eg,"A",{href:!0,rel:!0});var Kx=i(Rr);my=s(Kx,"torch.nn.Module"),Kx.forEach(t),uy=s(Eg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Eg.forEach(t),fy=p(lo),xt=r(lo,"DIV",{class:!0});var Co=i(xt);b(Hr.$$.fragment,Co),gy=p(Co),tn=r(Co,"P",{});var Uc=i(tn);_y=s(Uc,"The "),rc=r(Uc,"A",{href:!0});var Qx=i(rc);ky=s(Qx,"ElectraForMaskedLM"),Qx.forEach(t),vy=s(Uc," forward method, overrides the "),Rp=r(Uc,"CODE",{});var Vx=i(Rp);yy=s(Vx,"__call__"),Vx.forEach(t),Ty=s(Uc," special method."),Uc.forEach(t),by=p(Co),b(hs.$$.fragment,Co),wy=p(Co),b(ms.$$.fragment,Co),Ey=p(Co),b(us.$$.fragment,Co),Co.forEach(t),lo.forEach(t),yf=p(o),on=r(o,"H2",{class:!0});var $g=i(on);fs=r($g,"A",{id:!0,class:!0,href:!0});var Jx=i(fs);Hp=r(Jx,"SPAN",{});var Gx=i(Hp);b(Kr.$$.fragment,Gx),Gx.forEach(t),Jx.forEach(t),$y=p($g),Kp=r($g,"SPAN",{});var Xx=i(Kp);Fy=s(Xx,"ElectraForSequenceClassification"),Xx.forEach(t),$g.forEach(t),Tf=p(o),Et=r(o,"DIV",{class:!0});var qo=i(Et);b(Qr.$$.fragment,qo),xy=p(qo),Qp=r(qo,"P",{});var Yx=i(Qp);My=s(Yx,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Yx.forEach(t),zy=p(qo),Vr=r(qo,"P",{});var Fg=i(Vr);jy=s(Fg,"This model inherits from "),ic=r(Fg,"A",{href:!0});var Zx=i(ic);Cy=s(Zx,"PreTrainedModel"),Zx.forEach(t),qy=s(Fg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fg.forEach(t),Py=p(qo),Jr=r(qo,"P",{});var xg=i(Jr);Ay=s(xg,"This model is also a PyTorch "),Gr=r(xg,"A",{href:!0,rel:!0});var e4=i(Gr);Oy=s(e4,"torch.nn.Module"),e4.forEach(t),Ly=s(xg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xg.forEach(t),Ny=p(qo),pt=r(qo,"DIV",{class:!0});var At=i(pt);b(Xr.$$.fragment,At),Iy=p(At),nn=r(At,"P",{});var Bc=i(nn);Dy=s(Bc,"The "),lc=r(Bc,"A",{href:!0});var t4=i(lc);Sy=s(t4,"ElectraForSequenceClassification"),t4.forEach(t),Wy=s(Bc," forward method, overrides the "),Vp=r(Bc,"CODE",{});var o4=i(Vp);Uy=s(o4,"__call__"),o4.forEach(t),By=s(Bc," special method."),Bc.forEach(t),Ry=p(At),b(gs.$$.fragment,At),Hy=p(At),b(_s.$$.fragment,At),Ky=p(At),b(ks.$$.fragment,At),Qy=p(At),b(vs.$$.fragment,At),Vy=p(At),b(ys.$$.fragment,At),At.forEach(t),qo.forEach(t),bf=p(o),sn=r(o,"H2",{class:!0});var Mg=i(sn);Ts=r(Mg,"A",{id:!0,class:!0,href:!0});var n4=i(Ts);Jp=r(n4,"SPAN",{});var s4=i(Jp);b(Yr.$$.fragment,s4),s4.forEach(t),n4.forEach(t),Jy=p(Mg),Gp=r(Mg,"SPAN",{});var a4=i(Gp);Gy=s(a4,"ElectraForMultipleChoice"),a4.forEach(t),Mg.forEach(t),wf=p(o),$t=r(o,"DIV",{class:!0});var Po=i($t);b(Zr.$$.fragment,Po),Xy=p(Po),Xp=r(Po,"P",{});var r4=i(Xp);Yy=s(r4,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),r4.forEach(t),Zy=p(Po),ei=r(Po,"P",{});var zg=i(ei);eT=s(zg,"This model inherits from "),dc=r(zg,"A",{href:!0});var i4=i(dc);tT=s(i4,"PreTrainedModel"),i4.forEach(t),oT=s(zg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zg.forEach(t),nT=p(Po),ti=r(Po,"P",{});var jg=i(ti);sT=s(jg,"This model is also a PyTorch "),oi=r(jg,"A",{href:!0,rel:!0});var l4=i(oi);aT=s(l4,"torch.nn.Module"),l4.forEach(t),rT=s(jg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jg.forEach(t),iT=p(Po),Jt=r(Po,"DIV",{class:!0});var Na=i(Jt);b(ni.$$.fragment,Na),lT=p(Na),an=r(Na,"P",{});var Rc=i(an);dT=s(Rc,"The "),cc=r(Rc,"A",{href:!0});var d4=i(cc);cT=s(d4,"ElectraForMultipleChoice"),d4.forEach(t),pT=s(Rc," forward method, overrides the "),Yp=r(Rc,"CODE",{});var c4=i(Yp);hT=s(c4,"__call__"),c4.forEach(t),mT=s(Rc," special method."),Rc.forEach(t),uT=p(Na),b(bs.$$.fragment,Na),fT=p(Na),b(ws.$$.fragment,Na),Na.forEach(t),Po.forEach(t),Ef=p(o),rn=r(o,"H2",{class:!0});var Cg=i(rn);Es=r(Cg,"A",{id:!0,class:!0,href:!0});var p4=i(Es);Zp=r(p4,"SPAN",{});var h4=i(Zp);b(si.$$.fragment,h4),h4.forEach(t),p4.forEach(t),gT=p(Cg),eh=r(Cg,"SPAN",{});var m4=i(eh);_T=s(m4,"ElectraForTokenClassification"),m4.forEach(t),Cg.forEach(t),$f=p(o),ut=r(o,"DIV",{class:!0});var co=i(ut);b(ai.$$.fragment,co),kT=p(co),th=r(co,"P",{});var u4=i(th);vT=s(u4,"Electra model with a token classification head on top."),u4.forEach(t),yT=p(co),oh=r(co,"P",{});var f4=i(oh);TT=s(f4,"Both the discriminator and generator may be loaded into this model."),f4.forEach(t),bT=p(co),ri=r(co,"P",{});var qg=i(ri);wT=s(qg,"This model inherits from "),pc=r(qg,"A",{href:!0});var g4=i(pc);ET=s(g4,"PreTrainedModel"),g4.forEach(t),$T=s(qg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qg.forEach(t),FT=p(co),ii=r(co,"P",{});var Pg=i(ii);xT=s(Pg,"This model is also a PyTorch "),li=r(Pg,"A",{href:!0,rel:!0});var _4=i(li);MT=s(_4,"torch.nn.Module"),_4.forEach(t),zT=s(Pg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pg.forEach(t),jT=p(co),Mt=r(co,"DIV",{class:!0});var Ao=i(Mt);b(di.$$.fragment,Ao),CT=p(Ao),ln=r(Ao,"P",{});var Hc=i(ln);qT=s(Hc,"The "),hc=r(Hc,"A",{href:!0});var k4=i(hc);PT=s(k4,"ElectraForTokenClassification"),k4.forEach(t),AT=s(Hc," forward method, overrides the "),nh=r(Hc,"CODE",{});var v4=i(nh);OT=s(v4,"__call__"),v4.forEach(t),LT=s(Hc," special method."),Hc.forEach(t),NT=p(Ao),b($s.$$.fragment,Ao),IT=p(Ao),b(Fs.$$.fragment,Ao),DT=p(Ao),b(xs.$$.fragment,Ao),Ao.forEach(t),co.forEach(t),Ff=p(o),dn=r(o,"H2",{class:!0});var Ag=i(dn);Ms=r(Ag,"A",{id:!0,class:!0,href:!0});var y4=i(Ms);sh=r(y4,"SPAN",{});var T4=i(sh);b(ci.$$.fragment,T4),T4.forEach(t),y4.forEach(t),ST=p(Ag),ah=r(Ag,"SPAN",{});var b4=i(ah);WT=s(b4,"ElectraForQuestionAnswering"),b4.forEach(t),Ag.forEach(t),xf=p(o),Ft=r(o,"DIV",{class:!0});var Oo=i(Ft);b(pi.$$.fragment,Oo),UT=p(Oo),cn=r(Oo,"P",{});var Kc=i(cn);BT=s(Kc,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rh=r(Kc,"CODE",{});var w4=i(rh);RT=s(w4,"span start logits"),w4.forEach(t),HT=s(Kc," and "),ih=r(Kc,"CODE",{});var E4=i(ih);KT=s(E4,"span end logits"),E4.forEach(t),QT=s(Kc,")."),Kc.forEach(t),VT=p(Oo),hi=r(Oo,"P",{});var Og=i(hi);JT=s(Og,"This model inherits from "),mc=r(Og,"A",{href:!0});var $4=i(mc);GT=s($4,"PreTrainedModel"),$4.forEach(t),XT=s(Og,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Og.forEach(t),YT=p(Oo),mi=r(Oo,"P",{});var Lg=i(mi);ZT=s(Lg,"This model is also a PyTorch "),ui=r(Lg,"A",{href:!0,rel:!0});var F4=i(ui);eb=s(F4,"torch.nn.Module"),F4.forEach(t),tb=s(Lg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lg.forEach(t),ob=p(Oo),zt=r(Oo,"DIV",{class:!0});var Lo=i(zt);b(fi.$$.fragment,Lo),nb=p(Lo),pn=r(Lo,"P",{});var Qc=i(pn);sb=s(Qc,"The "),uc=r(Qc,"A",{href:!0});var x4=i(uc);ab=s(x4,"ElectraForQuestionAnswering"),x4.forEach(t),rb=s(Qc," forward method, overrides the "),lh=r(Qc,"CODE",{});var M4=i(lh);ib=s(M4,"__call__"),M4.forEach(t),lb=s(Qc," special method."),Qc.forEach(t),db=p(Lo),b(zs.$$.fragment,Lo),cb=p(Lo),b(js.$$.fragment,Lo),pb=p(Lo),b(Cs.$$.fragment,Lo),Lo.forEach(t),Oo.forEach(t),Mf=p(o),hn=r(o,"H2",{class:!0});var Ng=i(hn);qs=r(Ng,"A",{id:!0,class:!0,href:!0});var z4=i(qs);dh=r(z4,"SPAN",{});var j4=i(dh);b(gi.$$.fragment,j4),j4.forEach(t),z4.forEach(t),hb=p(Ng),ch=r(Ng,"SPAN",{});var C4=i(ch);mb=s(C4,"TFElectraModel"),C4.forEach(t),Ng.forEach(t),zf=p(o),ft=r(o,"DIV",{class:!0});var po=i(ft);b(_i.$$.fragment,po),ub=p(po),ph=r(po,"P",{});var q4=i(ph);fb=s(q4,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),q4.forEach(t),gb=p(po),ki=r(po,"P",{});var Ig=i(ki);_b=s(Ig,"This model inherits from "),fc=r(Ig,"A",{href:!0});var P4=i(fc);kb=s(P4,"TFPreTrainedModel"),P4.forEach(t),vb=s(Ig,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ig.forEach(t),yb=p(po),vi=r(po,"P",{});var Dg=i(vi);Tb=s(Dg,"This model is also a "),yi=r(Dg,"A",{href:!0,rel:!0});var A4=i(yi);bb=s(A4,"tf.keras.Model"),A4.forEach(t),wb=s(Dg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dg.forEach(t),Eb=p(po),b(Ps.$$.fragment,po),$b=p(po),Gt=r(po,"DIV",{class:!0});var Ia=i(Gt);b(Ti.$$.fragment,Ia),Fb=p(Ia),mn=r(Ia,"P",{});var Vc=i(mn);xb=s(Vc,"The "),gc=r(Vc,"A",{href:!0});var O4=i(gc);Mb=s(O4,"TFElectraModel"),O4.forEach(t),zb=s(Vc," forward method, overrides the "),hh=r(Vc,"CODE",{});var L4=i(hh);jb=s(L4,"__call__"),L4.forEach(t),Cb=s(Vc," special method."),Vc.forEach(t),qb=p(Ia),b(As.$$.fragment,Ia),Pb=p(Ia),b(Os.$$.fragment,Ia),Ia.forEach(t),po.forEach(t),jf=p(o),un=r(o,"H2",{class:!0});var Sg=i(un);Ls=r(Sg,"A",{id:!0,class:!0,href:!0});var N4=i(Ls);mh=r(N4,"SPAN",{});var I4=i(mh);b(bi.$$.fragment,I4),I4.forEach(t),N4.forEach(t),Ab=p(Sg),uh=r(Sg,"SPAN",{});var D4=i(uh);Ob=s(D4,"TFElectraForPreTraining"),D4.forEach(t),Sg.forEach(t),Cf=p(o),ot=r(o,"DIV",{class:!0});var Ot=i(ot);b(wi.$$.fragment,Ot),Lb=p(Ot),fh=r(Ot,"P",{});var S4=i(fh);Nb=s(S4,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),S4.forEach(t),Ib=p(Ot),gh=r(Ot,"P",{});var W4=i(gh);Db=s(W4,`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),W4.forEach(t),Sb=p(Ot),Ei=r(Ot,"P",{});var Wg=i(Ei);Wb=s(Wg,"This model inherits from "),_c=r(Wg,"A",{href:!0});var U4=i(_c);Ub=s(U4,"TFPreTrainedModel"),U4.forEach(t),Bb=s(Wg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wg.forEach(t),Rb=p(Ot),$i=r(Ot,"P",{});var Ug=i($i);Hb=s(Ug,"This model is also a "),Fi=r(Ug,"A",{href:!0,rel:!0});var B4=i(Fi);Kb=s(B4,"tf.keras.Model"),B4.forEach(t),Qb=s(Ug,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ug.forEach(t),Vb=p(Ot),b(Ns.$$.fragment,Ot),Jb=p(Ot),Xt=r(Ot,"DIV",{class:!0});var Da=i(Xt);b(xi.$$.fragment,Da),Gb=p(Da),fn=r(Da,"P",{});var Jc=i(fn);Xb=s(Jc,"The "),kc=r(Jc,"A",{href:!0});var R4=i(kc);Yb=s(R4,"TFElectraForPreTraining"),R4.forEach(t),Zb=s(Jc," forward method, overrides the "),_h=r(Jc,"CODE",{});var H4=i(_h);ew=s(H4,"__call__"),H4.forEach(t),tw=s(Jc," special method."),Jc.forEach(t),ow=p(Da),b(Is.$$.fragment,Da),nw=p(Da),b(Ds.$$.fragment,Da),Da.forEach(t),Ot.forEach(t),qf=p(o),gn=r(o,"H2",{class:!0});var Bg=i(gn);Ss=r(Bg,"A",{id:!0,class:!0,href:!0});var K4=i(Ss);kh=r(K4,"SPAN",{});var Q4=i(kh);b(Mi.$$.fragment,Q4),Q4.forEach(t),K4.forEach(t),sw=p(Bg),vh=r(Bg,"SPAN",{});var V4=i(vh);aw=s(V4,"TFElectraForMaskedLM"),V4.forEach(t),Bg.forEach(t),Pf=p(o),nt=r(o,"DIV",{class:!0});var Lt=i(nt);b(zi.$$.fragment,Lt),rw=p(Lt),yh=r(Lt,"P",{});var J4=i(yh);iw=s(J4,"Electra model with a language modeling head on top."),J4.forEach(t),lw=p(Lt),Th=r(Lt,"P",{});var G4=i(Th);dw=s(G4,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),G4.forEach(t),cw=p(Lt),ji=r(Lt,"P",{});var Rg=i(ji);pw=s(Rg,"This model inherits from "),vc=r(Rg,"A",{href:!0});var X4=i(vc);hw=s(X4,"TFPreTrainedModel"),X4.forEach(t),mw=s(Rg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rg.forEach(t),uw=p(Lt),Ci=r(Lt,"P",{});var Hg=i(Ci);fw=s(Hg,"This model is also a "),qi=r(Hg,"A",{href:!0,rel:!0});var Y4=i(qi);gw=s(Y4,"tf.keras.Model"),Y4.forEach(t),_w=s(Hg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hg.forEach(t),kw=p(Lt),b(Ws.$$.fragment,Lt),vw=p(Lt),jt=r(Lt,"DIV",{class:!0});var No=i(jt);b(Pi.$$.fragment,No),yw=p(No),_n=r(No,"P",{});var Gc=i(_n);Tw=s(Gc,"The "),yc=r(Gc,"A",{href:!0});var Z4=i(yc);bw=s(Z4,"TFElectraForMaskedLM"),Z4.forEach(t),ww=s(Gc," forward method, overrides the "),bh=r(Gc,"CODE",{});var e3=i(bh);Ew=s(e3,"__call__"),e3.forEach(t),$w=s(Gc," special method."),Gc.forEach(t),Fw=p(No),b(Us.$$.fragment,No),xw=p(No),b(Bs.$$.fragment,No),Mw=p(No),b(Rs.$$.fragment,No),No.forEach(t),Lt.forEach(t),Af=p(o),kn=r(o,"H2",{class:!0});var Kg=i(kn);Hs=r(Kg,"A",{id:!0,class:!0,href:!0});var t3=i(Hs);wh=r(t3,"SPAN",{});var o3=i(wh);b(Ai.$$.fragment,o3),o3.forEach(t),t3.forEach(t),zw=p(Kg),Eh=r(Kg,"SPAN",{});var n3=i(Eh);jw=s(n3,"TFElectraForSequenceClassification"),n3.forEach(t),Kg.forEach(t),Of=p(o),gt=r(o,"DIV",{class:!0});var ho=i(gt);b(Oi.$$.fragment,ho),Cw=p(ho),$h=r(ho,"P",{});var s3=i($h);qw=s(s3,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),s3.forEach(t),Pw=p(ho),Li=r(ho,"P",{});var Qg=i(Li);Aw=s(Qg,"This model inherits from "),Tc=r(Qg,"A",{href:!0});var a3=i(Tc);Ow=s(a3,"TFPreTrainedModel"),a3.forEach(t),Lw=s(Qg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qg.forEach(t),Nw=p(ho),Ni=r(ho,"P",{});var Vg=i(Ni);Iw=s(Vg,"This model is also a "),Ii=r(Vg,"A",{href:!0,rel:!0});var r3=i(Ii);Dw=s(r3,"tf.keras.Model"),r3.forEach(t),Sw=s(Vg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vg.forEach(t),Ww=p(ho),b(Ks.$$.fragment,ho),Uw=p(ho),Ct=r(ho,"DIV",{class:!0});var Io=i(Ct);b(Di.$$.fragment,Io),Bw=p(Io),vn=r(Io,"P",{});var Xc=i(vn);Rw=s(Xc,"The "),bc=r(Xc,"A",{href:!0});var i3=i(bc);Hw=s(i3,"TFElectraForSequenceClassification"),i3.forEach(t),Kw=s(Xc," forward method, overrides the "),Fh=r(Xc,"CODE",{});var l3=i(Fh);Qw=s(l3,"__call__"),l3.forEach(t),Vw=s(Xc," special method."),Xc.forEach(t),Jw=p(Io),b(Qs.$$.fragment,Io),Gw=p(Io),b(Vs.$$.fragment,Io),Xw=p(Io),b(Js.$$.fragment,Io),Io.forEach(t),ho.forEach(t),Lf=p(o),yn=r(o,"H2",{class:!0});var Jg=i(yn);Gs=r(Jg,"A",{id:!0,class:!0,href:!0});var d3=i(Gs);xh=r(d3,"SPAN",{});var c3=i(xh);b(Si.$$.fragment,c3),c3.forEach(t),d3.forEach(t),Yw=p(Jg),Mh=r(Jg,"SPAN",{});var p3=i(Mh);Zw=s(p3,"TFElectraForMultipleChoice"),p3.forEach(t),Jg.forEach(t),Nf=p(o),_t=r(o,"DIV",{class:!0});var mo=i(_t);b(Wi.$$.fragment,mo),eE=p(mo),zh=r(mo,"P",{});var h3=i(zh);tE=s(h3,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),h3.forEach(t),oE=p(mo),Ui=r(mo,"P",{});var Gg=i(Ui);nE=s(Gg,"This model inherits from "),wc=r(Gg,"A",{href:!0});var m3=i(wc);sE=s(m3,"TFPreTrainedModel"),m3.forEach(t),aE=s(Gg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gg.forEach(t),rE=p(mo),Bi=r(mo,"P",{});var Xg=i(Bi);iE=s(Xg,"This model is also a "),Ri=r(Xg,"A",{href:!0,rel:!0});var u3=i(Ri);lE=s(u3,"tf.keras.Model"),u3.forEach(t),dE=s(Xg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xg.forEach(t),cE=p(mo),b(Xs.$$.fragment,mo),pE=p(mo),Yt=r(mo,"DIV",{class:!0});var Sa=i(Yt);b(Hi.$$.fragment,Sa),hE=p(Sa),Tn=r(Sa,"P",{});var Yc=i(Tn);mE=s(Yc,"The "),Ec=r(Yc,"A",{href:!0});var f3=i(Ec);uE=s(f3,"TFElectraForMultipleChoice"),f3.forEach(t),fE=s(Yc," forward method, overrides the "),jh=r(Yc,"CODE",{});var g3=i(jh);gE=s(g3,"__call__"),g3.forEach(t),_E=s(Yc," special method."),Yc.forEach(t),kE=p(Sa),b(Ys.$$.fragment,Sa),vE=p(Sa),b(Zs.$$.fragment,Sa),Sa.forEach(t),mo.forEach(t),If=p(o),bn=r(o,"H2",{class:!0});var Yg=i(bn);ea=r(Yg,"A",{id:!0,class:!0,href:!0});var _3=i(ea);Ch=r(_3,"SPAN",{});var k3=i(Ch);b(Ki.$$.fragment,k3),k3.forEach(t),_3.forEach(t),yE=p(Yg),qh=r(Yg,"SPAN",{});var v3=i(qh);TE=s(v3,"TFElectraForTokenClassification"),v3.forEach(t),Yg.forEach(t),Df=p(o),st=r(o,"DIV",{class:!0});var Nt=i(st);b(Qi.$$.fragment,Nt),bE=p(Nt),Ph=r(Nt,"P",{});var y3=i(Ph);wE=s(y3,"Electra model with a token classification head on top."),y3.forEach(t),EE=p(Nt),Ah=r(Nt,"P",{});var T3=i(Ah);$E=s(T3,"Both the discriminator and generator may be loaded into this model."),T3.forEach(t),FE=p(Nt),Vi=r(Nt,"P",{});var Zg=i(Vi);xE=s(Zg,"This model inherits from "),$c=r(Zg,"A",{href:!0});var b3=i($c);ME=s(b3,"TFPreTrainedModel"),b3.forEach(t),zE=s(Zg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zg.forEach(t),jE=p(Nt),Ji=r(Nt,"P",{});var e_=i(Ji);CE=s(e_,"This model is also a "),Gi=r(e_,"A",{href:!0,rel:!0});var w3=i(Gi);qE=s(w3,"tf.keras.Model"),w3.forEach(t),PE=s(e_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),e_.forEach(t),AE=p(Nt),b(ta.$$.fragment,Nt),OE=p(Nt),qt=r(Nt,"DIV",{class:!0});var Do=i(qt);b(Xi.$$.fragment,Do),LE=p(Do),wn=r(Do,"P",{});var Zc=i(wn);NE=s(Zc,"The "),Fc=r(Zc,"A",{href:!0});var E3=i(Fc);IE=s(E3,"TFElectraForTokenClassification"),E3.forEach(t),DE=s(Zc," forward method, overrides the "),Oh=r(Zc,"CODE",{});var $3=i(Oh);SE=s($3,"__call__"),$3.forEach(t),WE=s(Zc," special method."),Zc.forEach(t),UE=p(Do),b(oa.$$.fragment,Do),BE=p(Do),b(na.$$.fragment,Do),RE=p(Do),b(sa.$$.fragment,Do),Do.forEach(t),Nt.forEach(t),Sf=p(o),En=r(o,"H2",{class:!0});var t_=i(En);aa=r(t_,"A",{id:!0,class:!0,href:!0});var F3=i(aa);Lh=r(F3,"SPAN",{});var x3=i(Lh);b(Yi.$$.fragment,x3),x3.forEach(t),F3.forEach(t),HE=p(t_),Nh=r(t_,"SPAN",{});var M3=i(Nh);KE=s(M3,"TFElectraForQuestionAnswering"),M3.forEach(t),t_.forEach(t),Wf=p(o),kt=r(o,"DIV",{class:!0});var uo=i(kt);b(Zi.$$.fragment,uo),QE=p(uo),$n=r(uo,"P",{});var ep=i($n);VE=s(ep,`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ih=r(ep,"CODE",{});var z3=i(Ih);JE=s(z3,"span start logits"),z3.forEach(t),GE=s(ep," and "),Dh=r(ep,"CODE",{});var j3=i(Dh);XE=s(j3,"span end logits"),j3.forEach(t),YE=s(ep,")."),ep.forEach(t),ZE=p(uo),el=r(uo,"P",{});var o_=i(el);e$=s(o_,"This model inherits from "),xc=r(o_,"A",{href:!0});var C3=i(xc);t$=s(C3,"TFPreTrainedModel"),C3.forEach(t),o$=s(o_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),o_.forEach(t),n$=p(uo),tl=r(uo,"P",{});var n_=i(tl);s$=s(n_,"This model is also a "),ol=r(n_,"A",{href:!0,rel:!0});var q3=i(ol);a$=s(q3,"tf.keras.Model"),q3.forEach(t),r$=s(n_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),n_.forEach(t),i$=p(uo),b(ra.$$.fragment,uo),l$=p(uo),Pt=r(uo,"DIV",{class:!0});var So=i(Pt);b(nl.$$.fragment,So),d$=p(So),Fn=r(So,"P",{});var tp=i(Fn);c$=s(tp,"The "),Mc=r(tp,"A",{href:!0});var P3=i(Mc);p$=s(P3,"TFElectraForQuestionAnswering"),P3.forEach(t),h$=s(tp," forward method, overrides the "),Sh=r(tp,"CODE",{});var A3=i(Sh);m$=s(A3,"__call__"),A3.forEach(t),u$=s(tp," special method."),tp.forEach(t),f$=p(So),b(ia.$$.fragment,So),g$=p(So),b(la.$$.fragment,So),_$=p(So),b(da.$$.fragment,So),So.forEach(t),uo.forEach(t),Uf=p(o),xn=r(o,"H2",{class:!0});var s_=i(xn);ca=r(s_,"A",{id:!0,class:!0,href:!0});var O3=i(ca);Wh=r(O3,"SPAN",{});var L3=i(Wh);b(sl.$$.fragment,L3),L3.forEach(t),O3.forEach(t),k$=p(s_),Uh=r(s_,"SPAN",{});var N3=i(Uh);v$=s(N3,"FlaxElectraModel"),N3.forEach(t),s_.forEach(t),Bf=p(o),at=r(o,"DIV",{class:!0});var It=i(at);b(al.$$.fragment,It),y$=p(It),Bh=r(It,"P",{});var I3=i(Bh);T$=s(I3,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),I3.forEach(t),b$=p(It),rl=r(It,"P",{});var a_=i(rl);w$=s(a_,"This model inherits from "),zc=r(a_,"A",{href:!0});var D3=i(zc);E$=s(D3,"FlaxPreTrainedModel"),D3.forEach(t),$$=s(a_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),a_.forEach(t),F$=p(It),il=r(It,"P",{});var r_=i(il);x$=s(r_,`This model is also a Flax Linen
`),ll=r(r_,"A",{href:!0,rel:!0});var S3=i(ll);M$=s(S3,"flax.nn.Module"),S3.forEach(t),z$=s(r_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),r_.forEach(t),j$=p(It),Rh=r(It,"P",{});var W3=i(Rh);C$=s(W3,"Finally, this model supports inherent JAX features such as:"),W3.forEach(t),q$=p(It),fo=r(It,"UL",{});var Wa=i(fo);Hh=r(Wa,"LI",{});var U3=i(Hh);dl=r(U3,"A",{href:!0,rel:!0});var B3=i(dl);P$=s(B3,"Just-In-Time (JIT) compilation"),B3.forEach(t),U3.forEach(t),A$=p(Wa),Kh=r(Wa,"LI",{});var R3=i(Kh);cl=r(R3,"A",{href:!0,rel:!0});var H3=i(cl);O$=s(H3,"Automatic Differentiation"),H3.forEach(t),R3.forEach(t),L$=p(Wa),Qh=r(Wa,"LI",{});var K3=i(Qh);pl=r(K3,"A",{href:!0,rel:!0});var Q3=i(pl);N$=s(Q3,"Vectorization"),Q3.forEach(t),K3.forEach(t),I$=p(Wa),Vh=r(Wa,"LI",{});var V3=i(Vh);hl=r(V3,"A",{href:!0,rel:!0});var J3=i(hl);D$=s(J3,"Parallelization"),J3.forEach(t),V3.forEach(t),Wa.forEach(t),S$=p(It),Zt=r(It,"DIV",{class:!0});var Ua=i(Zt);b(ml.$$.fragment,Ua),W$=p(Ua),Mn=r(Ua,"P",{});var op=i(Mn);U$=s(op,"The "),Jh=r(op,"CODE",{});var G3=i(Jh);B$=s(G3,"FlaxElectraPreTrainedModel"),G3.forEach(t),R$=s(op," forward method, overrides the "),Gh=r(op,"CODE",{});var X3=i(Gh);H$=s(X3,"__call__"),X3.forEach(t),K$=s(op," special method."),op.forEach(t),Q$=p(Ua),b(pa.$$.fragment,Ua),V$=p(Ua),b(ha.$$.fragment,Ua),Ua.forEach(t),It.forEach(t),Rf=p(o),zn=r(o,"H2",{class:!0});var i_=i(zn);ma=r(i_,"A",{id:!0,class:!0,href:!0});var Y3=i(ma);Xh=r(Y3,"SPAN",{});var Z3=i(Xh);b(ul.$$.fragment,Z3),Z3.forEach(t),Y3.forEach(t),J$=p(i_),Yh=r(i_,"SPAN",{});var eM=i(Yh);G$=s(eM,"FlaxElectraForPreTraining"),eM.forEach(t),i_.forEach(t),Hf=p(o),Ze=r(o,"DIV",{class:!0});var yt=i(Ze);b(fl.$$.fragment,yt),X$=p(yt),Zh=r(yt,"P",{});var tM=i(Zh);Y$=s(tM,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),tM.forEach(t),Z$=p(yt),em=r(yt,"P",{});var oM=i(em);e2=s(oM,"It is recommended to load the discriminator checkpoint into that model."),oM.forEach(t),t2=p(yt),gl=r(yt,"P",{});var l_=i(gl);o2=s(l_,"This model inherits from "),jc=r(l_,"A",{href:!0});var nM=i(jc);n2=s(nM,"FlaxPreTrainedModel"),nM.forEach(t),s2=s(l_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),l_.forEach(t),a2=p(yt),_l=r(yt,"P",{});var d_=i(_l);r2=s(d_,`This model is also a Flax Linen
`),kl=r(d_,"A",{href:!0,rel:!0});var sM=i(kl);i2=s(sM,"flax.nn.Module"),sM.forEach(t),l2=s(d_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),d_.forEach(t),d2=p(yt),tm=r(yt,"P",{});var aM=i(tm);c2=s(aM,"Finally, this model supports inherent JAX features such as:"),aM.forEach(t),p2=p(yt),go=r(yt,"UL",{});var Ba=i(go);om=r(Ba,"LI",{});var rM=i(om);vl=r(rM,"A",{href:!0,rel:!0});var iM=i(vl);h2=s(iM,"Just-In-Time (JIT) compilation"),iM.forEach(t),rM.forEach(t),m2=p(Ba),nm=r(Ba,"LI",{});var lM=i(nm);yl=r(lM,"A",{href:!0,rel:!0});var dM=i(yl);u2=s(dM,"Automatic Differentiation"),dM.forEach(t),lM.forEach(t),f2=p(Ba),sm=r(Ba,"LI",{});var cM=i(sm);Tl=r(cM,"A",{href:!0,rel:!0});var pM=i(Tl);g2=s(pM,"Vectorization"),pM.forEach(t),cM.forEach(t),_2=p(Ba),am=r(Ba,"LI",{});var hM=i(am);bl=r(hM,"A",{href:!0,rel:!0});var mM=i(bl);k2=s(mM,"Parallelization"),mM.forEach(t),hM.forEach(t),Ba.forEach(t),v2=p(yt),eo=r(yt,"DIV",{class:!0});var Ra=i(eo);b(wl.$$.fragment,Ra),y2=p(Ra),jn=r(Ra,"P",{});var np=i(jn);T2=s(np,"The "),rm=r(np,"CODE",{});var uM=i(rm);b2=s(uM,"FlaxElectraPreTrainedModel"),uM.forEach(t),w2=s(np," forward method, overrides the "),im=r(np,"CODE",{});var fM=i(im);E2=s(fM,"__call__"),fM.forEach(t),$2=s(np," special method."),np.forEach(t),F2=p(Ra),b(ua.$$.fragment,Ra),x2=p(Ra),b(fa.$$.fragment,Ra),Ra.forEach(t),yt.forEach(t),Kf=p(o),Cn=r(o,"H2",{class:!0});var c_=i(Cn);ga=r(c_,"A",{id:!0,class:!0,href:!0});var gM=i(ga);lm=r(gM,"SPAN",{});var _M=i(lm);b(El.$$.fragment,_M),_M.forEach(t),gM.forEach(t),M2=p(c_),dm=r(c_,"SPAN",{});var kM=i(dm);z2=s(kM,"FlaxElectraForCausalLM"),kM.forEach(t),c_.forEach(t),Qf=p(o),rt=r(o,"DIV",{class:!0});var Dt=i(rt);b($l.$$.fragment,Dt),j2=p(Dt),cm=r(Dt,"P",{});var vM=i(cm);C2=s(vM,`Electra Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),vM.forEach(t),q2=p(Dt),Fl=r(Dt,"P",{});var p_=i(Fl);P2=s(p_,"This model inherits from "),Cc=r(p_,"A",{href:!0});var yM=i(Cc);A2=s(yM,"FlaxPreTrainedModel"),yM.forEach(t),O2=s(p_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),p_.forEach(t),L2=p(Dt),xl=r(Dt,"P",{});var h_=i(xl);N2=s(h_,`This model is also a Flax Linen
`),Ml=r(h_,"A",{href:!0,rel:!0});var TM=i(Ml);I2=s(TM,"flax.nn.Module"),TM.forEach(t),D2=s(h_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),h_.forEach(t),S2=p(Dt),pm=r(Dt,"P",{});var bM=i(pm);W2=s(bM,"Finally, this model supports inherent JAX features such as:"),bM.forEach(t),U2=p(Dt),_o=r(Dt,"UL",{});var Ha=i(_o);hm=r(Ha,"LI",{});var wM=i(hm);zl=r(wM,"A",{href:!0,rel:!0});var EM=i(zl);B2=s(EM,"Just-In-Time (JIT) compilation"),EM.forEach(t),wM.forEach(t),R2=p(Ha),mm=r(Ha,"LI",{});var $M=i(mm);jl=r($M,"A",{href:!0,rel:!0});var FM=i(jl);H2=s(FM,"Automatic Differentiation"),FM.forEach(t),$M.forEach(t),K2=p(Ha),um=r(Ha,"LI",{});var xM=i(um);Cl=r(xM,"A",{href:!0,rel:!0});var MM=i(Cl);Q2=s(MM,"Vectorization"),MM.forEach(t),xM.forEach(t),V2=p(Ha),fm=r(Ha,"LI",{});var zM=i(fm);ql=r(zM,"A",{href:!0,rel:!0});var jM=i(ql);J2=s(jM,"Parallelization"),jM.forEach(t),zM.forEach(t),Ha.forEach(t),G2=p(Dt),to=r(Dt,"DIV",{class:!0});var Ka=i(to);b(Pl.$$.fragment,Ka),X2=p(Ka),qn=r(Ka,"P",{});var sp=i(qn);Y2=s(sp,"The "),gm=r(sp,"CODE",{});var CM=i(gm);Z2=s(CM,"FlaxElectraPreTrainedModel"),CM.forEach(t),e1=s(sp," forward method, overrides the "),_m=r(sp,"CODE",{});var qM=i(_m);t1=s(qM,"__call__"),qM.forEach(t),o1=s(sp," special method."),sp.forEach(t),n1=p(Ka),b(_a.$$.fragment,Ka),s1=p(Ka),b(ka.$$.fragment,Ka),Ka.forEach(t),Dt.forEach(t),Vf=p(o),Pn=r(o,"H2",{class:!0});var m_=i(Pn);va=r(m_,"A",{id:!0,class:!0,href:!0});var PM=i(va);km=r(PM,"SPAN",{});var AM=i(km);b(Al.$$.fragment,AM),AM.forEach(t),PM.forEach(t),a1=p(m_),vm=r(m_,"SPAN",{});var OM=i(vm);r1=s(OM,"FlaxElectraForMaskedLM"),OM.forEach(t),m_.forEach(t),Jf=p(o),it=r(o,"DIV",{class:!0});var St=i(it);b(Ol.$$.fragment,St),i1=p(St),Ll=r(St,"P",{});var u_=i(Ll);l1=s(u_,"Electra Model with a "),ym=r(u_,"CODE",{});var LM=i(ym);d1=s(LM,"language modeling"),LM.forEach(t),c1=s(u_," head on top."),u_.forEach(t),p1=p(St),Nl=r(St,"P",{});var f_=i(Nl);h1=s(f_,"This model inherits from "),qc=r(f_,"A",{href:!0});var NM=i(qc);m1=s(NM,"FlaxPreTrainedModel"),NM.forEach(t),u1=s(f_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),f_.forEach(t),f1=p(St),Il=r(St,"P",{});var g_=i(Il);g1=s(g_,`This model is also a Flax Linen
`),Dl=r(g_,"A",{href:!0,rel:!0});var IM=i(Dl);_1=s(IM,"flax.nn.Module"),IM.forEach(t),k1=s(g_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),g_.forEach(t),v1=p(St),Tm=r(St,"P",{});var DM=i(Tm);y1=s(DM,"Finally, this model supports inherent JAX features such as:"),DM.forEach(t),T1=p(St),ko=r(St,"UL",{});var Qa=i(ko);bm=r(Qa,"LI",{});var SM=i(bm);Sl=r(SM,"A",{href:!0,rel:!0});var WM=i(Sl);b1=s(WM,"Just-In-Time (JIT) compilation"),WM.forEach(t),SM.forEach(t),w1=p(Qa),wm=r(Qa,"LI",{});var UM=i(wm);Wl=r(UM,"A",{href:!0,rel:!0});var BM=i(Wl);E1=s(BM,"Automatic Differentiation"),BM.forEach(t),UM.forEach(t),$1=p(Qa),Em=r(Qa,"LI",{});var RM=i(Em);Ul=r(RM,"A",{href:!0,rel:!0});var HM=i(Ul);F1=s(HM,"Vectorization"),HM.forEach(t),RM.forEach(t),x1=p(Qa),$m=r(Qa,"LI",{});var KM=i($m);Bl=r(KM,"A",{href:!0,rel:!0});var QM=i(Bl);M1=s(QM,"Parallelization"),QM.forEach(t),KM.forEach(t),Qa.forEach(t),z1=p(St),oo=r(St,"DIV",{class:!0});var Va=i(oo);b(Rl.$$.fragment,Va),j1=p(Va),An=r(Va,"P",{});var ap=i(An);C1=s(ap,"The "),Fm=r(ap,"CODE",{});var VM=i(Fm);q1=s(VM,"FlaxElectraPreTrainedModel"),VM.forEach(t),P1=s(ap," forward method, overrides the "),xm=r(ap,"CODE",{});var JM=i(xm);A1=s(JM,"__call__"),JM.forEach(t),O1=s(ap," special method."),ap.forEach(t),L1=p(Va),b(ya.$$.fragment,Va),N1=p(Va),b(Ta.$$.fragment,Va),Va.forEach(t),St.forEach(t),Gf=p(o),On=r(o,"H2",{class:!0});var __=i(On);ba=r(__,"A",{id:!0,class:!0,href:!0});var GM=i(ba);Mm=r(GM,"SPAN",{});var XM=i(Mm);b(Hl.$$.fragment,XM),XM.forEach(t),GM.forEach(t),I1=p(__),zm=r(__,"SPAN",{});var YM=i(zm);D1=s(YM,"FlaxElectraForSequenceClassification"),YM.forEach(t),__.forEach(t),Xf=p(o),lt=r(o,"DIV",{class:!0});var Wt=i(lt);b(Kl.$$.fragment,Wt),S1=p(Wt),jm=r(Wt,"P",{});var ZM=i(jm);W1=s(ZM,`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ZM.forEach(t),U1=p(Wt),Ql=r(Wt,"P",{});var k_=i(Ql);B1=s(k_,"This model inherits from "),Pc=r(k_,"A",{href:!0});var ez=i(Pc);R1=s(ez,"FlaxPreTrainedModel"),ez.forEach(t),H1=s(k_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),k_.forEach(t),K1=p(Wt),Vl=r(Wt,"P",{});var v_=i(Vl);Q1=s(v_,`This model is also a Flax Linen
`),Jl=r(v_,"A",{href:!0,rel:!0});var tz=i(Jl);V1=s(tz,"flax.nn.Module"),tz.forEach(t),J1=s(v_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),v_.forEach(t),G1=p(Wt),Cm=r(Wt,"P",{});var oz=i(Cm);X1=s(oz,"Finally, this model supports inherent JAX features such as:"),oz.forEach(t),Y1=p(Wt),vo=r(Wt,"UL",{});var Ja=i(vo);qm=r(Ja,"LI",{});var nz=i(qm);Gl=r(nz,"A",{href:!0,rel:!0});var sz=i(Gl);Z1=s(sz,"Just-In-Time (JIT) compilation"),sz.forEach(t),nz.forEach(t),e0=p(Ja),Pm=r(Ja,"LI",{});var az=i(Pm);Xl=r(az,"A",{href:!0,rel:!0});var rz=i(Xl);t0=s(rz,"Automatic Differentiation"),rz.forEach(t),az.forEach(t),o0=p(Ja),Am=r(Ja,"LI",{});var iz=i(Am);Yl=r(iz,"A",{href:!0,rel:!0});var lz=i(Yl);n0=s(lz,"Vectorization"),lz.forEach(t),iz.forEach(t),s0=p(Ja),Om=r(Ja,"LI",{});var dz=i(Om);Zl=r(dz,"A",{href:!0,rel:!0});var cz=i(Zl);a0=s(cz,"Parallelization"),cz.forEach(t),dz.forEach(t),Ja.forEach(t),r0=p(Wt),no=r(Wt,"DIV",{class:!0});var Ga=i(no);b(ed.$$.fragment,Ga),i0=p(Ga),Ln=r(Ga,"P",{});var rp=i(Ln);l0=s(rp,"The "),Lm=r(rp,"CODE",{});var pz=i(Lm);d0=s(pz,"FlaxElectraPreTrainedModel"),pz.forEach(t),c0=s(rp," forward method, overrides the "),Nm=r(rp,"CODE",{});var hz=i(Nm);p0=s(hz,"__call__"),hz.forEach(t),h0=s(rp," special method."),rp.forEach(t),m0=p(Ga),b(wa.$$.fragment,Ga),u0=p(Ga),b(Ea.$$.fragment,Ga),Ga.forEach(t),Wt.forEach(t),Yf=p(o),Nn=r(o,"H2",{class:!0});var y_=i(Nn);$a=r(y_,"A",{id:!0,class:!0,href:!0});var mz=i($a);Im=r(mz,"SPAN",{});var uz=i(Im);b(td.$$.fragment,uz),uz.forEach(t),mz.forEach(t),f0=p(y_),Dm=r(y_,"SPAN",{});var fz=i(Dm);g0=s(fz,"FlaxElectraForMultipleChoice"),fz.forEach(t),y_.forEach(t),Zf=p(o),dt=r(o,"DIV",{class:!0});var Ut=i(dt);b(od.$$.fragment,Ut),_0=p(Ut),Sm=r(Ut,"P",{});var gz=i(Sm);k0=s(gz,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),gz.forEach(t),v0=p(Ut),nd=r(Ut,"P",{});var T_=i(nd);y0=s(T_,"This model inherits from "),Ac=r(T_,"A",{href:!0});var _z=i(Ac);T0=s(_z,"FlaxPreTrainedModel"),_z.forEach(t),b0=s(T_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),T_.forEach(t),w0=p(Ut),sd=r(Ut,"P",{});var b_=i(sd);E0=s(b_,`This model is also a Flax Linen
`),ad=r(b_,"A",{href:!0,rel:!0});var kz=i(ad);$0=s(kz,"flax.nn.Module"),kz.forEach(t),F0=s(b_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),b_.forEach(t),x0=p(Ut),Wm=r(Ut,"P",{});var vz=i(Wm);M0=s(vz,"Finally, this model supports inherent JAX features such as:"),vz.forEach(t),z0=p(Ut),yo=r(Ut,"UL",{});var Xa=i(yo);Um=r(Xa,"LI",{});var yz=i(Um);rd=r(yz,"A",{href:!0,rel:!0});var Tz=i(rd);j0=s(Tz,"Just-In-Time (JIT) compilation"),Tz.forEach(t),yz.forEach(t),C0=p(Xa),Bm=r(Xa,"LI",{});var bz=i(Bm);id=r(bz,"A",{href:!0,rel:!0});var wz=i(id);q0=s(wz,"Automatic Differentiation"),wz.forEach(t),bz.forEach(t),P0=p(Xa),Rm=r(Xa,"LI",{});var Ez=i(Rm);ld=r(Ez,"A",{href:!0,rel:!0});var $z=i(ld);A0=s($z,"Vectorization"),$z.forEach(t),Ez.forEach(t),O0=p(Xa),Hm=r(Xa,"LI",{});var Fz=i(Hm);dd=r(Fz,"A",{href:!0,rel:!0});var xz=i(dd);L0=s(xz,"Parallelization"),xz.forEach(t),Fz.forEach(t),Xa.forEach(t),N0=p(Ut),so=r(Ut,"DIV",{class:!0});var Ya=i(so);b(cd.$$.fragment,Ya),I0=p(Ya),In=r(Ya,"P",{});var ip=i(In);D0=s(ip,"The "),Km=r(ip,"CODE",{});var Mz=i(Km);S0=s(Mz,"FlaxElectraPreTrainedModel"),Mz.forEach(t),W0=s(ip," forward method, overrides the "),Qm=r(ip,"CODE",{});var zz=i(Qm);U0=s(zz,"__call__"),zz.forEach(t),B0=s(ip," special method."),ip.forEach(t),R0=p(Ya),b(Fa.$$.fragment,Ya),H0=p(Ya),b(xa.$$.fragment,Ya),Ya.forEach(t),Ut.forEach(t),eg=p(o),Dn=r(o,"H2",{class:!0});var w_=i(Dn);Ma=r(w_,"A",{id:!0,class:!0,href:!0});var jz=i(Ma);Vm=r(jz,"SPAN",{});var Cz=i(Vm);b(pd.$$.fragment,Cz),Cz.forEach(t),jz.forEach(t),K0=p(w_),Jm=r(w_,"SPAN",{});var qz=i(Jm);Q0=s(qz,"FlaxElectraForTokenClassification"),qz.forEach(t),w_.forEach(t),tg=p(o),et=r(o,"DIV",{class:!0});var Tt=i(et);b(hd.$$.fragment,Tt),V0=p(Tt),Gm=r(Tt,"P",{});var Pz=i(Gm);J0=s(Pz,"Electra model with a token classification head on top."),Pz.forEach(t),G0=p(Tt),Xm=r(Tt,"P",{});var Az=i(Xm);X0=s(Az,"Both the discriminator and generator may be loaded into this model."),Az.forEach(t),Y0=p(Tt),md=r(Tt,"P",{});var E_=i(md);Z0=s(E_,"This model inherits from "),Oc=r(E_,"A",{href:!0});var Oz=i(Oc);eF=s(Oz,"FlaxPreTrainedModel"),Oz.forEach(t),tF=s(E_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),E_.forEach(t),oF=p(Tt),ud=r(Tt,"P",{});var $_=i(ud);nF=s($_,`This model is also a Flax Linen
`),fd=r($_,"A",{href:!0,rel:!0});var Lz=i(fd);sF=s(Lz,"flax.nn.Module"),Lz.forEach(t),aF=s($_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$_.forEach(t),rF=p(Tt),Ym=r(Tt,"P",{});var Nz=i(Ym);iF=s(Nz,"Finally, this model supports inherent JAX features such as:"),Nz.forEach(t),lF=p(Tt),To=r(Tt,"UL",{});var Za=i(To);Zm=r(Za,"LI",{});var Iz=i(Zm);gd=r(Iz,"A",{href:!0,rel:!0});var Dz=i(gd);dF=s(Dz,"Just-In-Time (JIT) compilation"),Dz.forEach(t),Iz.forEach(t),cF=p(Za),eu=r(Za,"LI",{});var Sz=i(eu);_d=r(Sz,"A",{href:!0,rel:!0});var Wz=i(_d);pF=s(Wz,"Automatic Differentiation"),Wz.forEach(t),Sz.forEach(t),hF=p(Za),tu=r(Za,"LI",{});var Uz=i(tu);kd=r(Uz,"A",{href:!0,rel:!0});var Bz=i(kd);mF=s(Bz,"Vectorization"),Bz.forEach(t),Uz.forEach(t),uF=p(Za),ou=r(Za,"LI",{});var Rz=i(ou);vd=r(Rz,"A",{href:!0,rel:!0});var Hz=i(vd);fF=s(Hz,"Parallelization"),Hz.forEach(t),Rz.forEach(t),Za.forEach(t),gF=p(Tt),ao=r(Tt,"DIV",{class:!0});var er=i(ao);b(yd.$$.fragment,er),_F=p(er),Sn=r(er,"P",{});var lp=i(Sn);kF=s(lp,"The "),nu=r(lp,"CODE",{});var Kz=i(nu);vF=s(Kz,"FlaxElectraPreTrainedModel"),Kz.forEach(t),yF=s(lp," forward method, overrides the "),su=r(lp,"CODE",{});var Qz=i(su);TF=s(Qz,"__call__"),Qz.forEach(t),bF=s(lp," special method."),lp.forEach(t),wF=p(er),b(za.$$.fragment,er),EF=p(er),b(ja.$$.fragment,er),er.forEach(t),Tt.forEach(t),og=p(o),Wn=r(o,"H2",{class:!0});var F_=i(Wn);Ca=r(F_,"A",{id:!0,class:!0,href:!0});var Vz=i(Ca);au=r(Vz,"SPAN",{});var Jz=i(au);b(Td.$$.fragment,Jz),Jz.forEach(t),Vz.forEach(t),$F=p(F_),ru=r(F_,"SPAN",{});var Gz=i(ru);FF=s(Gz,"FlaxElectraForQuestionAnswering"),Gz.forEach(t),F_.forEach(t),ng=p(o),ct=r(o,"DIV",{class:!0});var Bt=i(ct);b(bd.$$.fragment,Bt),xF=p(Bt),Un=r(Bt,"P",{});var dp=i(Un);MF=s(dp,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),iu=r(dp,"CODE",{});var Xz=i(iu);zF=s(Xz,"span start logits"),Xz.forEach(t),jF=s(dp," and "),lu=r(dp,"CODE",{});var Yz=i(lu);CF=s(Yz,"span end logits"),Yz.forEach(t),qF=s(dp,")."),dp.forEach(t),PF=p(Bt),wd=r(Bt,"P",{});var x_=i(wd);AF=s(x_,"This model inherits from "),Lc=r(x_,"A",{href:!0});var Zz=i(Lc);OF=s(Zz,"FlaxPreTrainedModel"),Zz.forEach(t),LF=s(x_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),x_.forEach(t),NF=p(Bt),Ed=r(Bt,"P",{});var M_=i(Ed);IF=s(M_,`This model is also a Flax Linen
`),$d=r(M_,"A",{href:!0,rel:!0});var ej=i($d);DF=s(ej,"flax.nn.Module"),ej.forEach(t),SF=s(M_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),M_.forEach(t),WF=p(Bt),du=r(Bt,"P",{});var tj=i(du);UF=s(tj,"Finally, this model supports inherent JAX features such as:"),tj.forEach(t),BF=p(Bt),bo=r(Bt,"UL",{});var tr=i(bo);cu=r(tr,"LI",{});var oj=i(cu);Fd=r(oj,"A",{href:!0,rel:!0});var nj=i(Fd);RF=s(nj,"Just-In-Time (JIT) compilation"),nj.forEach(t),oj.forEach(t),HF=p(tr),pu=r(tr,"LI",{});var sj=i(pu);xd=r(sj,"A",{href:!0,rel:!0});var aj=i(xd);KF=s(aj,"Automatic Differentiation"),aj.forEach(t),sj.forEach(t),QF=p(tr),hu=r(tr,"LI",{});var rj=i(hu);Md=r(rj,"A",{href:!0,rel:!0});var ij=i(Md);VF=s(ij,"Vectorization"),ij.forEach(t),rj.forEach(t),JF=p(tr),mu=r(tr,"LI",{});var lj=i(mu);zd=r(lj,"A",{href:!0,rel:!0});var dj=i(zd);GF=s(dj,"Parallelization"),dj.forEach(t),lj.forEach(t),tr.forEach(t),XF=p(Bt),ro=r(Bt,"DIV",{class:!0});var or=i(ro);b(jd.$$.fragment,or),YF=p(or),Bn=r(or,"P",{});var cp=i(Bn);ZF=s(cp,"The "),uu=r(cp,"CODE",{});var cj=i(uu);ex=s(cj,"FlaxElectraPreTrainedModel"),cj.forEach(t),tx=s(cp," forward method, overrides the "),fu=r(cp,"CODE",{});var pj=i(fu);ox=s(pj,"__call__"),pj.forEach(t),nx=s(cp," special method."),cp.forEach(t),sx=p(or),b(qa.$$.fragment,or),ax=p(or),b(Pa.$$.fragment,or),or.forEach(t),Bt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(zC)),u(f,"id","electra"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#electra"),u(h,"class","relative group"),u(ae,"id","overview"),u(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ae,"href","#overview"),u(W,"class","relative group"),u(re,"href","https://openreview.net/pdf?id=r1xMH1BtvB"),u(re,"rel","nofollow"),u(P,"href","https://github.com/google-research/electra"),u(P,"rel","nofollow"),u(ce,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraForMaskedLM"),u(pe,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraForPreTraining"),u(Z,"href","https://huggingface.co/lysandre"),u(Z,"rel","nofollow"),u(L,"href","https://github.com/google-research/electra"),u(L,"rel","nofollow"),u(De,"id","transformers.ElectraConfig"),u(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(De,"href","#transformers.ElectraConfig"),u(j,"class","relative group"),u(Re,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraModel"),u(He,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.TFElectraModel"),u(Be,"href","https://huggingface.co/google/electra-small-discriminator"),u(Be,"rel","nofollow"),u(Bd,"href","/docs/transformers/v4.23.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(Rd,"href","/docs/transformers/v4.23.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jn,"id","transformers.ElectraTokenizer"),u(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jn,"href","#transformers.ElectraTokenizer"),u(Uo,"class","relative group"),u(Hd,"href","/docs/transformers/v4.23.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zn,"id","transformers.ElectraTokenizerFast"),u(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zn,"href","#transformers.ElectraTokenizerFast"),u(Ro,"class","relative group"),u(Vd,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraTokenizerFast"),u(Jd,"href","/docs/transformers/v4.23.0/en/model_doc/bert#transformers.BertTokenizerFast"),u(Gd,"href","/docs/transformers/v4.23.0/en/model_doc/bert#transformers.BertTokenizerFast"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ts,"id","transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),u(ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ts,"href","#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),u(Ho,"class","relative group"),u(Xd,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraForPreTraining"),u(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yd,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.TFElectraForPreTraining"),u(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(os,"id","transformers.ElectraModel"),u(os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(os,"href","#transformers.ElectraModel"),u(Vo,"class","relative group"),u(Zd,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),u($r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u($r,"rel","nofollow"),u(ec,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraModel"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(as,"id","transformers.ElectraForPreTraining"),u(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(as,"href","#transformers.ElectraForPreTraining"),u(Go,"class","relative group"),u(tc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),u(Cr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Cr,"rel","nofollow"),u(oc,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraForPreTraining"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ls,"id","transformers.ElectraForCausalLM"),u(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ls,"href","#transformers.ElectraForCausalLM"),u(Yo,"class","relative group"),u(nc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ir,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ir,"rel","nofollow"),u(sc,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraForCausalLM"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ps,"id","transformers.ElectraForMaskedLM"),u(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ps,"href","#transformers.ElectraForMaskedLM"),u(en,"class","relative group"),u(ac,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),u(Rr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Rr,"rel","nofollow"),u(rc,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraForMaskedLM"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fs,"id","transformers.ElectraForSequenceClassification"),u(fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fs,"href","#transformers.ElectraForSequenceClassification"),u(on,"class","relative group"),u(ic,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),u(Gr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Gr,"rel","nofollow"),u(lc,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraForSequenceClassification"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ts,"id","transformers.ElectraForMultipleChoice"),u(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ts,"href","#transformers.ElectraForMultipleChoice"),u(sn,"class","relative group"),u(dc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),u(oi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(oi,"rel","nofollow"),u(cc,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraForMultipleChoice"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Es,"id","transformers.ElectraForTokenClassification"),u(Es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Es,"href","#transformers.ElectraForTokenClassification"),u(rn,"class","relative group"),u(pc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),u(li,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(li,"rel","nofollow"),u(hc,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraForTokenClassification"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ms,"id","transformers.ElectraForQuestionAnswering"),u(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ms,"href","#transformers.ElectraForQuestionAnswering"),u(dn,"class","relative group"),u(mc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),u(ui,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ui,"rel","nofollow"),u(uc,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.ElectraForQuestionAnswering"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qs,"id","transformers.TFElectraModel"),u(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qs,"href","#transformers.TFElectraModel"),u(hn,"class","relative group"),u(fc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(yi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(yi,"rel","nofollow"),u(gc,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.TFElectraModel"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ls,"id","transformers.TFElectraForPreTraining"),u(Ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ls,"href","#transformers.TFElectraForPreTraining"),u(un,"class","relative group"),u(_c,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Fi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Fi,"rel","nofollow"),u(kc,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.TFElectraForPreTraining"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ss,"id","transformers.TFElectraForMaskedLM"),u(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ss,"href","#transformers.TFElectraForMaskedLM"),u(gn,"class","relative group"),u(vc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(qi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(qi,"rel","nofollow"),u(yc,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.TFElectraForMaskedLM"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.TFElectraForSequenceClassification"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.TFElectraForSequenceClassification"),u(kn,"class","relative group"),u(Tc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ii,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ii,"rel","nofollow"),u(bc,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.TFElectraForSequenceClassification"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gs,"id","transformers.TFElectraForMultipleChoice"),u(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gs,"href","#transformers.TFElectraForMultipleChoice"),u(yn,"class","relative group"),u(wc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ri,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ri,"rel","nofollow"),u(Ec,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.TFElectraForMultipleChoice"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ea,"id","transformers.TFElectraForTokenClassification"),u(ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ea,"href","#transformers.TFElectraForTokenClassification"),u(bn,"class","relative group"),u($c,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Gi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Gi,"rel","nofollow"),u(Fc,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.TFElectraForTokenClassification"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(aa,"id","transformers.TFElectraForQuestionAnswering"),u(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(aa,"href","#transformers.TFElectraForQuestionAnswering"),u(En,"class","relative group"),u(xc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(ol,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ol,"rel","nofollow"),u(Mc,"href","/docs/transformers/v4.23.0/en/model_doc/electra#transformers.TFElectraForQuestionAnswering"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ca,"id","transformers.FlaxElectraModel"),u(ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ca,"href","#transformers.FlaxElectraModel"),u(xn,"class","relative group"),u(zc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ll,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(ll,"rel","nofollow"),u(dl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(dl,"rel","nofollow"),u(cl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(cl,"rel","nofollow"),u(pl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(pl,"rel","nofollow"),u(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(hl,"rel","nofollow"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ma,"id","transformers.FlaxElectraForPreTraining"),u(ma,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ma,"href","#transformers.FlaxElectraForPreTraining"),u(zn,"class","relative group"),u(jc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(kl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(kl,"rel","nofollow"),u(vl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(vl,"rel","nofollow"),u(yl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(yl,"rel","nofollow"),u(Tl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Tl,"rel","nofollow"),u(bl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(bl,"rel","nofollow"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ga,"id","transformers.FlaxElectraForCausalLM"),u(ga,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ga,"href","#transformers.FlaxElectraForCausalLM"),u(Cn,"class","relative group"),u(Cc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ml,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Ml,"rel","nofollow"),u(zl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(zl,"rel","nofollow"),u(jl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(jl,"rel","nofollow"),u(Cl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Cl,"rel","nofollow"),u(ql,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(ql,"rel","nofollow"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(va,"id","transformers.FlaxElectraForMaskedLM"),u(va,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(va,"href","#transformers.FlaxElectraForMaskedLM"),u(Pn,"class","relative group"),u(qc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Dl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Dl,"rel","nofollow"),u(Sl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Sl,"rel","nofollow"),u(Wl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Wl,"rel","nofollow"),u(Ul,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ul,"rel","nofollow"),u(Bl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Bl,"rel","nofollow"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ba,"id","transformers.FlaxElectraForSequenceClassification"),u(ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ba,"href","#transformers.FlaxElectraForSequenceClassification"),u(On,"class","relative group"),u(Pc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Jl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Jl,"rel","nofollow"),u(Gl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Gl,"rel","nofollow"),u(Xl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Xl,"rel","nofollow"),u(Yl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Yl,"rel","nofollow"),u(Zl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Zl,"rel","nofollow"),u(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($a,"id","transformers.FlaxElectraForMultipleChoice"),u($a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($a,"href","#transformers.FlaxElectraForMultipleChoice"),u(Nn,"class","relative group"),u(Ac,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ad,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(ad,"rel","nofollow"),u(rd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(rd,"rel","nofollow"),u(id,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(id,"rel","nofollow"),u(ld,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ld,"rel","nofollow"),u(dd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(dd,"rel","nofollow"),u(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ma,"id","transformers.FlaxElectraForTokenClassification"),u(Ma,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ma,"href","#transformers.FlaxElectraForTokenClassification"),u(Dn,"class","relative group"),u(Oc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(fd,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(fd,"rel","nofollow"),u(gd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(gd,"rel","nofollow"),u(_d,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(_d,"rel","nofollow"),u(kd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(kd,"rel","nofollow"),u(vd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(vd,"rel","nofollow"),u(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ca,"id","transformers.FlaxElectraForQuestionAnswering"),u(Ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ca,"href","#transformers.FlaxElectraForQuestionAnswering"),u(Wn,"class","relative group"),u(Lc,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u($d,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u($d,"rel","nofollow"),u(Fd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Fd,"rel","nofollow"),u(xd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(xd,"rel","nofollow"),u(Md,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Md,"rel","nofollow"),u(zd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(zd,"rel","nofollow"),u(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),_(o,g,k),_(o,h,k),e(h,f),e(f,v),w(l,v,null),e(h,m),e(h,z),e(z,Te),_(o,fe,k),_(o,W,k),e(W,ae),e(ae,ee),w(M,ee,null),e(W,be),e(W,K),e(K,we),_(o,ge,k),_(o,U,k),e(U,Ee),e(U,re),e(re,Q),e(U,$e),_(o,_e,k),_(o,R,k),e(R,Fe),_(o,ke,k),_(o,H,k),e(H,me),e(me,xe),_(o,oe,k),_(o,q,k),e(q,A),_(o,ve,k),_(o,B,k),e(B,ue),e(ue,Me),e(B,V),e(B,ne),e(ne,ze),e(ne,P),e(P,je),e(ne,J),e(ne,ce),e(ce,Ce),e(ne,G),e(ne,pe),e(pe,qe),e(ne,D),_(o,ye,k),_(o,S,k),e(S,Pe),e(S,Z),e(Z,O),e(S,Ae),e(S,L),e(L,Oe),e(S,Le),_(o,y,k),_(o,j,k),e(j,De),e(De,te),w(We,te,null),e(j,Qe),e(j,C),e(C,Ve),_(o,Ke,k),_(o,he,k),w(Ue,he,null),e(he,Je),e(he,N),e(N,X),e(N,Re),e(Re,Ge),e(N,Y),e(N,He),e(He,Xe),e(N,Ne),e(N,Be),e(Be,se),e(N,Ye),e(he,z_),e(he,Wo),e(Wo,j_),e(Wo,Bd),e(Bd,C_),e(Wo,q_),e(Wo,Rd),e(Rd,P_),e(Wo,A_),e(he,O_),w(Vn,he,null),_(o,sf,k),_(o,Uo,k),e(Uo,Jn),e(Jn,pp),w(nr,pp,null),e(Uo,L_),e(Uo,hp),e(hp,N_),_(o,af,k),_(o,tt,k),w(sr,tt,null),e(tt,I_),e(tt,mp),e(mp,D_),e(tt,S_),e(tt,ar),e(ar,W_),e(ar,Hd),e(Hd,U_),e(ar,B_),e(tt,R_),e(tt,Mo),w(rr,Mo,null),e(Mo,H_),e(Mo,up),e(up,K_),e(Mo,Q_),e(Mo,ir),e(ir,Kd),e(Kd,V_),e(Kd,fp),e(fp,J_),e(ir,G_),e(ir,Qd),e(Qd,X_),e(Qd,gp),e(gp,Y_),e(tt,Z_),e(tt,Gn),w(lr,Gn,null),e(Gn,ek),e(Gn,_p),e(_p,tk),e(tt,ok),e(tt,Ht),w(dr,Ht,null),e(Ht,nk),e(Ht,kp),e(kp,sk),e(Ht,ak),w(Xn,Ht,null),e(Ht,rk),e(Ht,Bo),e(Bo,ik),e(Bo,vp),e(vp,lk),e(Bo,dk),e(Bo,yp),e(yp,ck),e(Bo,pk),e(tt,hk),e(tt,Yn),w(cr,Yn,null),e(Yn,mk),e(Yn,pr),e(pr,uk),e(pr,Tp),e(Tp,fk),e(pr,gk),_(o,rf,k),_(o,Ro,k),e(Ro,Zn),e(Zn,bp),w(hr,bp,null),e(Ro,_k),e(Ro,wp),e(wp,kk),_(o,lf,k),_(o,Rt,k),w(mr,Rt,null),e(Rt,vk),e(Rt,ur),e(ur,yk),e(ur,Ep),e(Ep,Tk),e(ur,bk),e(Rt,wk),e(Rt,es),e(es,Vd),e(Vd,Ek),e(es,$k),e(es,Jd),e(Jd,Fk),e(es,xk),e(Rt,Mk),e(Rt,fr),e(fr,zk),e(fr,Gd),e(Gd,jk),e(fr,Ck),_(o,df,k),_(o,Ho,k),e(Ho,ts),e(ts,$p),w(gr,$p,null),e(Ho,qk),e(Ho,Fp),e(Fp,Pk),_(o,cf,k),_(o,Ko,k),w(_r,Ko,null),e(Ko,Ak),e(Ko,kr),e(kr,Ok),e(kr,Xd),e(Xd,Lk),e(kr,Nk),_(o,pf,k),_(o,Qo,k),w(vr,Qo,null),e(Qo,Ik),e(Qo,yr),e(yr,Dk),e(yr,Yd),e(Yd,Sk),e(yr,Wk),_(o,hf,k),_(o,Vo,k),e(Vo,os),e(os,xp),w(Tr,xp,null),e(Vo,Uk),e(Vo,Mp),e(Mp,Bk),_(o,mf,k),_(o,bt,k),w(br,bt,null),e(bt,Rk),e(bt,zp),e(zp,Hk),e(bt,Kk),e(bt,wr),e(wr,Qk),e(wr,Zd),e(Zd,Vk),e(wr,Jk),e(bt,Gk),e(bt,Er),e(Er,Xk),e(Er,$r),e($r,Yk),e(Er,Zk),e(bt,ev),e(bt,Kt),w(Fr,Kt,null),e(Kt,tv),e(Kt,Jo),e(Jo,ov),e(Jo,ec),e(ec,nv),e(Jo,sv),e(Jo,jp),e(jp,av),e(Jo,rv),e(Kt,iv),w(ns,Kt,null),e(Kt,lv),w(ss,Kt,null),_(o,uf,k),_(o,Go,k),e(Go,as),e(as,Cp),w(xr,Cp,null),e(Go,dv),e(Go,qp),e(qp,cv),_(o,ff,k),_(o,ht,k),w(Mr,ht,null),e(ht,pv),e(ht,Pp),e(Pp,hv),e(ht,mv),e(ht,Ap),e(Ap,uv),e(ht,fv),e(ht,zr),e(zr,gv),e(zr,tc),e(tc,_v),e(zr,kv),e(ht,vv),e(ht,jr),e(jr,yv),e(jr,Cr),e(Cr,Tv),e(jr,bv),e(ht,wv),e(ht,Qt),w(qr,Qt,null),e(Qt,Ev),e(Qt,Xo),e(Xo,$v),e(Xo,oc),e(oc,Fv),e(Xo,xv),e(Xo,Op),e(Op,Mv),e(Xo,zv),e(Qt,jv),w(rs,Qt,null),e(Qt,Cv),w(is,Qt,null),_(o,gf,k),_(o,Yo,k),e(Yo,ls),e(ls,Lp),w(Pr,Lp,null),e(Yo,qv),e(Yo,Np),e(Np,Pv),_(o,_f,k),_(o,wt,k),w(Ar,wt,null),e(wt,Av),e(wt,Or),e(Or,Ov),e(Or,Ip),e(Ip,Lv),e(Or,Nv),e(wt,Iv),e(wt,Lr),e(Lr,Dv),e(Lr,nc),e(nc,Sv),e(Lr,Wv),e(wt,Uv),e(wt,Nr),e(Nr,Bv),e(Nr,Ir),e(Ir,Rv),e(Nr,Hv),e(wt,Kv),e(wt,Vt),w(Dr,Vt,null),e(Vt,Qv),e(Vt,Zo),e(Zo,Vv),e(Zo,sc),e(sc,Jv),e(Zo,Gv),e(Zo,Dp),e(Dp,Xv),e(Zo,Yv),e(Vt,Zv),w(ds,Vt,null),e(Vt,ey),w(cs,Vt,null),_(o,kf,k),_(o,en,k),e(en,ps),e(ps,Sp),w(Sr,Sp,null),e(en,ty),e(en,Wp),e(Wp,oy),_(o,vf,k),_(o,mt,k),w(Wr,mt,null),e(mt,ny),e(mt,Up),e(Up,sy),e(mt,ay),e(mt,Bp),e(Bp,ry),e(mt,iy),e(mt,Ur),e(Ur,ly),e(Ur,ac),e(ac,dy),e(Ur,cy),e(mt,py),e(mt,Br),e(Br,hy),e(Br,Rr),e(Rr,my),e(Br,uy),e(mt,fy),e(mt,xt),w(Hr,xt,null),e(xt,gy),e(xt,tn),e(tn,_y),e(tn,rc),e(rc,ky),e(tn,vy),e(tn,Rp),e(Rp,yy),e(tn,Ty),e(xt,by),w(hs,xt,null),e(xt,wy),w(ms,xt,null),e(xt,Ey),w(us,xt,null),_(o,yf,k),_(o,on,k),e(on,fs),e(fs,Hp),w(Kr,Hp,null),e(on,$y),e(on,Kp),e(Kp,Fy),_(o,Tf,k),_(o,Et,k),w(Qr,Et,null),e(Et,xy),e(Et,Qp),e(Qp,My),e(Et,zy),e(Et,Vr),e(Vr,jy),e(Vr,ic),e(ic,Cy),e(Vr,qy),e(Et,Py),e(Et,Jr),e(Jr,Ay),e(Jr,Gr),e(Gr,Oy),e(Jr,Ly),e(Et,Ny),e(Et,pt),w(Xr,pt,null),e(pt,Iy),e(pt,nn),e(nn,Dy),e(nn,lc),e(lc,Sy),e(nn,Wy),e(nn,Vp),e(Vp,Uy),e(nn,By),e(pt,Ry),w(gs,pt,null),e(pt,Hy),w(_s,pt,null),e(pt,Ky),w(ks,pt,null),e(pt,Qy),w(vs,pt,null),e(pt,Vy),w(ys,pt,null),_(o,bf,k),_(o,sn,k),e(sn,Ts),e(Ts,Jp),w(Yr,Jp,null),e(sn,Jy),e(sn,Gp),e(Gp,Gy),_(o,wf,k),_(o,$t,k),w(Zr,$t,null),e($t,Xy),e($t,Xp),e(Xp,Yy),e($t,Zy),e($t,ei),e(ei,eT),e(ei,dc),e(dc,tT),e(ei,oT),e($t,nT),e($t,ti),e(ti,sT),e(ti,oi),e(oi,aT),e(ti,rT),e($t,iT),e($t,Jt),w(ni,Jt,null),e(Jt,lT),e(Jt,an),e(an,dT),e(an,cc),e(cc,cT),e(an,pT),e(an,Yp),e(Yp,hT),e(an,mT),e(Jt,uT),w(bs,Jt,null),e(Jt,fT),w(ws,Jt,null),_(o,Ef,k),_(o,rn,k),e(rn,Es),e(Es,Zp),w(si,Zp,null),e(rn,gT),e(rn,eh),e(eh,_T),_(o,$f,k),_(o,ut,k),w(ai,ut,null),e(ut,kT),e(ut,th),e(th,vT),e(ut,yT),e(ut,oh),e(oh,TT),e(ut,bT),e(ut,ri),e(ri,wT),e(ri,pc),e(pc,ET),e(ri,$T),e(ut,FT),e(ut,ii),e(ii,xT),e(ii,li),e(li,MT),e(ii,zT),e(ut,jT),e(ut,Mt),w(di,Mt,null),e(Mt,CT),e(Mt,ln),e(ln,qT),e(ln,hc),e(hc,PT),e(ln,AT),e(ln,nh),e(nh,OT),e(ln,LT),e(Mt,NT),w($s,Mt,null),e(Mt,IT),w(Fs,Mt,null),e(Mt,DT),w(xs,Mt,null),_(o,Ff,k),_(o,dn,k),e(dn,Ms),e(Ms,sh),w(ci,sh,null),e(dn,ST),e(dn,ah),e(ah,WT),_(o,xf,k),_(o,Ft,k),w(pi,Ft,null),e(Ft,UT),e(Ft,cn),e(cn,BT),e(cn,rh),e(rh,RT),e(cn,HT),e(cn,ih),e(ih,KT),e(cn,QT),e(Ft,VT),e(Ft,hi),e(hi,JT),e(hi,mc),e(mc,GT),e(hi,XT),e(Ft,YT),e(Ft,mi),e(mi,ZT),e(mi,ui),e(ui,eb),e(mi,tb),e(Ft,ob),e(Ft,zt),w(fi,zt,null),e(zt,nb),e(zt,pn),e(pn,sb),e(pn,uc),e(uc,ab),e(pn,rb),e(pn,lh),e(lh,ib),e(pn,lb),e(zt,db),w(zs,zt,null),e(zt,cb),w(js,zt,null),e(zt,pb),w(Cs,zt,null),_(o,Mf,k),_(o,hn,k),e(hn,qs),e(qs,dh),w(gi,dh,null),e(hn,hb),e(hn,ch),e(ch,mb),_(o,zf,k),_(o,ft,k),w(_i,ft,null),e(ft,ub),e(ft,ph),e(ph,fb),e(ft,gb),e(ft,ki),e(ki,_b),e(ki,fc),e(fc,kb),e(ki,vb),e(ft,yb),e(ft,vi),e(vi,Tb),e(vi,yi),e(yi,bb),e(vi,wb),e(ft,Eb),w(Ps,ft,null),e(ft,$b),e(ft,Gt),w(Ti,Gt,null),e(Gt,Fb),e(Gt,mn),e(mn,xb),e(mn,gc),e(gc,Mb),e(mn,zb),e(mn,hh),e(hh,jb),e(mn,Cb),e(Gt,qb),w(As,Gt,null),e(Gt,Pb),w(Os,Gt,null),_(o,jf,k),_(o,un,k),e(un,Ls),e(Ls,mh),w(bi,mh,null),e(un,Ab),e(un,uh),e(uh,Ob),_(o,Cf,k),_(o,ot,k),w(wi,ot,null),e(ot,Lb),e(ot,fh),e(fh,Nb),e(ot,Ib),e(ot,gh),e(gh,Db),e(ot,Sb),e(ot,Ei),e(Ei,Wb),e(Ei,_c),e(_c,Ub),e(Ei,Bb),e(ot,Rb),e(ot,$i),e($i,Hb),e($i,Fi),e(Fi,Kb),e($i,Qb),e(ot,Vb),w(Ns,ot,null),e(ot,Jb),e(ot,Xt),w(xi,Xt,null),e(Xt,Gb),e(Xt,fn),e(fn,Xb),e(fn,kc),e(kc,Yb),e(fn,Zb),e(fn,_h),e(_h,ew),e(fn,tw),e(Xt,ow),w(Is,Xt,null),e(Xt,nw),w(Ds,Xt,null),_(o,qf,k),_(o,gn,k),e(gn,Ss),e(Ss,kh),w(Mi,kh,null),e(gn,sw),e(gn,vh),e(vh,aw),_(o,Pf,k),_(o,nt,k),w(zi,nt,null),e(nt,rw),e(nt,yh),e(yh,iw),e(nt,lw),e(nt,Th),e(Th,dw),e(nt,cw),e(nt,ji),e(ji,pw),e(ji,vc),e(vc,hw),e(ji,mw),e(nt,uw),e(nt,Ci),e(Ci,fw),e(Ci,qi),e(qi,gw),e(Ci,_w),e(nt,kw),w(Ws,nt,null),e(nt,vw),e(nt,jt),w(Pi,jt,null),e(jt,yw),e(jt,_n),e(_n,Tw),e(_n,yc),e(yc,bw),e(_n,ww),e(_n,bh),e(bh,Ew),e(_n,$w),e(jt,Fw),w(Us,jt,null),e(jt,xw),w(Bs,jt,null),e(jt,Mw),w(Rs,jt,null),_(o,Af,k),_(o,kn,k),e(kn,Hs),e(Hs,wh),w(Ai,wh,null),e(kn,zw),e(kn,Eh),e(Eh,jw),_(o,Of,k),_(o,gt,k),w(Oi,gt,null),e(gt,Cw),e(gt,$h),e($h,qw),e(gt,Pw),e(gt,Li),e(Li,Aw),e(Li,Tc),e(Tc,Ow),e(Li,Lw),e(gt,Nw),e(gt,Ni),e(Ni,Iw),e(Ni,Ii),e(Ii,Dw),e(Ni,Sw),e(gt,Ww),w(Ks,gt,null),e(gt,Uw),e(gt,Ct),w(Di,Ct,null),e(Ct,Bw),e(Ct,vn),e(vn,Rw),e(vn,bc),e(bc,Hw),e(vn,Kw),e(vn,Fh),e(Fh,Qw),e(vn,Vw),e(Ct,Jw),w(Qs,Ct,null),e(Ct,Gw),w(Vs,Ct,null),e(Ct,Xw),w(Js,Ct,null),_(o,Lf,k),_(o,yn,k),e(yn,Gs),e(Gs,xh),w(Si,xh,null),e(yn,Yw),e(yn,Mh),e(Mh,Zw),_(o,Nf,k),_(o,_t,k),w(Wi,_t,null),e(_t,eE),e(_t,zh),e(zh,tE),e(_t,oE),e(_t,Ui),e(Ui,nE),e(Ui,wc),e(wc,sE),e(Ui,aE),e(_t,rE),e(_t,Bi),e(Bi,iE),e(Bi,Ri),e(Ri,lE),e(Bi,dE),e(_t,cE),w(Xs,_t,null),e(_t,pE),e(_t,Yt),w(Hi,Yt,null),e(Yt,hE),e(Yt,Tn),e(Tn,mE),e(Tn,Ec),e(Ec,uE),e(Tn,fE),e(Tn,jh),e(jh,gE),e(Tn,_E),e(Yt,kE),w(Ys,Yt,null),e(Yt,vE),w(Zs,Yt,null),_(o,If,k),_(o,bn,k),e(bn,ea),e(ea,Ch),w(Ki,Ch,null),e(bn,yE),e(bn,qh),e(qh,TE),_(o,Df,k),_(o,st,k),w(Qi,st,null),e(st,bE),e(st,Ph),e(Ph,wE),e(st,EE),e(st,Ah),e(Ah,$E),e(st,FE),e(st,Vi),e(Vi,xE),e(Vi,$c),e($c,ME),e(Vi,zE),e(st,jE),e(st,Ji),e(Ji,CE),e(Ji,Gi),e(Gi,qE),e(Ji,PE),e(st,AE),w(ta,st,null),e(st,OE),e(st,qt),w(Xi,qt,null),e(qt,LE),e(qt,wn),e(wn,NE),e(wn,Fc),e(Fc,IE),e(wn,DE),e(wn,Oh),e(Oh,SE),e(wn,WE),e(qt,UE),w(oa,qt,null),e(qt,BE),w(na,qt,null),e(qt,RE),w(sa,qt,null),_(o,Sf,k),_(o,En,k),e(En,aa),e(aa,Lh),w(Yi,Lh,null),e(En,HE),e(En,Nh),e(Nh,KE),_(o,Wf,k),_(o,kt,k),w(Zi,kt,null),e(kt,QE),e(kt,$n),e($n,VE),e($n,Ih),e(Ih,JE),e($n,GE),e($n,Dh),e(Dh,XE),e($n,YE),e(kt,ZE),e(kt,el),e(el,e$),e(el,xc),e(xc,t$),e(el,o$),e(kt,n$),e(kt,tl),e(tl,s$),e(tl,ol),e(ol,a$),e(tl,r$),e(kt,i$),w(ra,kt,null),e(kt,l$),e(kt,Pt),w(nl,Pt,null),e(Pt,d$),e(Pt,Fn),e(Fn,c$),e(Fn,Mc),e(Mc,p$),e(Fn,h$),e(Fn,Sh),e(Sh,m$),e(Fn,u$),e(Pt,f$),w(ia,Pt,null),e(Pt,g$),w(la,Pt,null),e(Pt,_$),w(da,Pt,null),_(o,Uf,k),_(o,xn,k),e(xn,ca),e(ca,Wh),w(sl,Wh,null),e(xn,k$),e(xn,Uh),e(Uh,v$),_(o,Bf,k),_(o,at,k),w(al,at,null),e(at,y$),e(at,Bh),e(Bh,T$),e(at,b$),e(at,rl),e(rl,w$),e(rl,zc),e(zc,E$),e(rl,$$),e(at,F$),e(at,il),e(il,x$),e(il,ll),e(ll,M$),e(il,z$),e(at,j$),e(at,Rh),e(Rh,C$),e(at,q$),e(at,fo),e(fo,Hh),e(Hh,dl),e(dl,P$),e(fo,A$),e(fo,Kh),e(Kh,cl),e(cl,O$),e(fo,L$),e(fo,Qh),e(Qh,pl),e(pl,N$),e(fo,I$),e(fo,Vh),e(Vh,hl),e(hl,D$),e(at,S$),e(at,Zt),w(ml,Zt,null),e(Zt,W$),e(Zt,Mn),e(Mn,U$),e(Mn,Jh),e(Jh,B$),e(Mn,R$),e(Mn,Gh),e(Gh,H$),e(Mn,K$),e(Zt,Q$),w(pa,Zt,null),e(Zt,V$),w(ha,Zt,null),_(o,Rf,k),_(o,zn,k),e(zn,ma),e(ma,Xh),w(ul,Xh,null),e(zn,J$),e(zn,Yh),e(Yh,G$),_(o,Hf,k),_(o,Ze,k),w(fl,Ze,null),e(Ze,X$),e(Ze,Zh),e(Zh,Y$),e(Ze,Z$),e(Ze,em),e(em,e2),e(Ze,t2),e(Ze,gl),e(gl,o2),e(gl,jc),e(jc,n2),e(gl,s2),e(Ze,a2),e(Ze,_l),e(_l,r2),e(_l,kl),e(kl,i2),e(_l,l2),e(Ze,d2),e(Ze,tm),e(tm,c2),e(Ze,p2),e(Ze,go),e(go,om),e(om,vl),e(vl,h2),e(go,m2),e(go,nm),e(nm,yl),e(yl,u2),e(go,f2),e(go,sm),e(sm,Tl),e(Tl,g2),e(go,_2),e(go,am),e(am,bl),e(bl,k2),e(Ze,v2),e(Ze,eo),w(wl,eo,null),e(eo,y2),e(eo,jn),e(jn,T2),e(jn,rm),e(rm,b2),e(jn,w2),e(jn,im),e(im,E2),e(jn,$2),e(eo,F2),w(ua,eo,null),e(eo,x2),w(fa,eo,null),_(o,Kf,k),_(o,Cn,k),e(Cn,ga),e(ga,lm),w(El,lm,null),e(Cn,M2),e(Cn,dm),e(dm,z2),_(o,Qf,k),_(o,rt,k),w($l,rt,null),e(rt,j2),e(rt,cm),e(cm,C2),e(rt,q2),e(rt,Fl),e(Fl,P2),e(Fl,Cc),e(Cc,A2),e(Fl,O2),e(rt,L2),e(rt,xl),e(xl,N2),e(xl,Ml),e(Ml,I2),e(xl,D2),e(rt,S2),e(rt,pm),e(pm,W2),e(rt,U2),e(rt,_o),e(_o,hm),e(hm,zl),e(zl,B2),e(_o,R2),e(_o,mm),e(mm,jl),e(jl,H2),e(_o,K2),e(_o,um),e(um,Cl),e(Cl,Q2),e(_o,V2),e(_o,fm),e(fm,ql),e(ql,J2),e(rt,G2),e(rt,to),w(Pl,to,null),e(to,X2),e(to,qn),e(qn,Y2),e(qn,gm),e(gm,Z2),e(qn,e1),e(qn,_m),e(_m,t1),e(qn,o1),e(to,n1),w(_a,to,null),e(to,s1),w(ka,to,null),_(o,Vf,k),_(o,Pn,k),e(Pn,va),e(va,km),w(Al,km,null),e(Pn,a1),e(Pn,vm),e(vm,r1),_(o,Jf,k),_(o,it,k),w(Ol,it,null),e(it,i1),e(it,Ll),e(Ll,l1),e(Ll,ym),e(ym,d1),e(Ll,c1),e(it,p1),e(it,Nl),e(Nl,h1),e(Nl,qc),e(qc,m1),e(Nl,u1),e(it,f1),e(it,Il),e(Il,g1),e(Il,Dl),e(Dl,_1),e(Il,k1),e(it,v1),e(it,Tm),e(Tm,y1),e(it,T1),e(it,ko),e(ko,bm),e(bm,Sl),e(Sl,b1),e(ko,w1),e(ko,wm),e(wm,Wl),e(Wl,E1),e(ko,$1),e(ko,Em),e(Em,Ul),e(Ul,F1),e(ko,x1),e(ko,$m),e($m,Bl),e(Bl,M1),e(it,z1),e(it,oo),w(Rl,oo,null),e(oo,j1),e(oo,An),e(An,C1),e(An,Fm),e(Fm,q1),e(An,P1),e(An,xm),e(xm,A1),e(An,O1),e(oo,L1),w(ya,oo,null),e(oo,N1),w(Ta,oo,null),_(o,Gf,k),_(o,On,k),e(On,ba),e(ba,Mm),w(Hl,Mm,null),e(On,I1),e(On,zm),e(zm,D1),_(o,Xf,k),_(o,lt,k),w(Kl,lt,null),e(lt,S1),e(lt,jm),e(jm,W1),e(lt,U1),e(lt,Ql),e(Ql,B1),e(Ql,Pc),e(Pc,R1),e(Ql,H1),e(lt,K1),e(lt,Vl),e(Vl,Q1),e(Vl,Jl),e(Jl,V1),e(Vl,J1),e(lt,G1),e(lt,Cm),e(Cm,X1),e(lt,Y1),e(lt,vo),e(vo,qm),e(qm,Gl),e(Gl,Z1),e(vo,e0),e(vo,Pm),e(Pm,Xl),e(Xl,t0),e(vo,o0),e(vo,Am),e(Am,Yl),e(Yl,n0),e(vo,s0),e(vo,Om),e(Om,Zl),e(Zl,a0),e(lt,r0),e(lt,no),w(ed,no,null),e(no,i0),e(no,Ln),e(Ln,l0),e(Ln,Lm),e(Lm,d0),e(Ln,c0),e(Ln,Nm),e(Nm,p0),e(Ln,h0),e(no,m0),w(wa,no,null),e(no,u0),w(Ea,no,null),_(o,Yf,k),_(o,Nn,k),e(Nn,$a),e($a,Im),w(td,Im,null),e(Nn,f0),e(Nn,Dm),e(Dm,g0),_(o,Zf,k),_(o,dt,k),w(od,dt,null),e(dt,_0),e(dt,Sm),e(Sm,k0),e(dt,v0),e(dt,nd),e(nd,y0),e(nd,Ac),e(Ac,T0),e(nd,b0),e(dt,w0),e(dt,sd),e(sd,E0),e(sd,ad),e(ad,$0),e(sd,F0),e(dt,x0),e(dt,Wm),e(Wm,M0),e(dt,z0),e(dt,yo),e(yo,Um),e(Um,rd),e(rd,j0),e(yo,C0),e(yo,Bm),e(Bm,id),e(id,q0),e(yo,P0),e(yo,Rm),e(Rm,ld),e(ld,A0),e(yo,O0),e(yo,Hm),e(Hm,dd),e(dd,L0),e(dt,N0),e(dt,so),w(cd,so,null),e(so,I0),e(so,In),e(In,D0),e(In,Km),e(Km,S0),e(In,W0),e(In,Qm),e(Qm,U0),e(In,B0),e(so,R0),w(Fa,so,null),e(so,H0),w(xa,so,null),_(o,eg,k),_(o,Dn,k),e(Dn,Ma),e(Ma,Vm),w(pd,Vm,null),e(Dn,K0),e(Dn,Jm),e(Jm,Q0),_(o,tg,k),_(o,et,k),w(hd,et,null),e(et,V0),e(et,Gm),e(Gm,J0),e(et,G0),e(et,Xm),e(Xm,X0),e(et,Y0),e(et,md),e(md,Z0),e(md,Oc),e(Oc,eF),e(md,tF),e(et,oF),e(et,ud),e(ud,nF),e(ud,fd),e(fd,sF),e(ud,aF),e(et,rF),e(et,Ym),e(Ym,iF),e(et,lF),e(et,To),e(To,Zm),e(Zm,gd),e(gd,dF),e(To,cF),e(To,eu),e(eu,_d),e(_d,pF),e(To,hF),e(To,tu),e(tu,kd),e(kd,mF),e(To,uF),e(To,ou),e(ou,vd),e(vd,fF),e(et,gF),e(et,ao),w(yd,ao,null),e(ao,_F),e(ao,Sn),e(Sn,kF),e(Sn,nu),e(nu,vF),e(Sn,yF),e(Sn,su),e(su,TF),e(Sn,bF),e(ao,wF),w(za,ao,null),e(ao,EF),w(ja,ao,null),_(o,og,k),_(o,Wn,k),e(Wn,Ca),e(Ca,au),w(Td,au,null),e(Wn,$F),e(Wn,ru),e(ru,FF),_(o,ng,k),_(o,ct,k),w(bd,ct,null),e(ct,xF),e(ct,Un),e(Un,MF),e(Un,iu),e(iu,zF),e(Un,jF),e(Un,lu),e(lu,CF),e(Un,qF),e(ct,PF),e(ct,wd),e(wd,AF),e(wd,Lc),e(Lc,OF),e(wd,LF),e(ct,NF),e(ct,Ed),e(Ed,IF),e(Ed,$d),e($d,DF),e(Ed,SF),e(ct,WF),e(ct,du),e(du,UF),e(ct,BF),e(ct,bo),e(bo,cu),e(cu,Fd),e(Fd,RF),e(bo,HF),e(bo,pu),e(pu,xd),e(xd,KF),e(bo,QF),e(bo,hu),e(hu,Md),e(Md,VF),e(bo,JF),e(bo,mu),e(mu,zd),e(zd,GF),e(ct,XF),e(ct,ro),w(jd,ro,null),e(ro,YF),e(ro,Bn),e(Bn,ZF),e(Bn,uu),e(uu,ex),e(Bn,tx),e(Bn,fu),e(fu,ox),e(Bn,nx),e(ro,sx),w(qa,ro,null),e(ro,ax),w(Pa,ro,null),sg=!0},p(o,[k]){const Cd={};k&2&&(Cd.$$scope={dirty:k,ctx:o}),Vn.$set(Cd);const gu={};k&2&&(gu.$$scope={dirty:k,ctx:o}),Xn.$set(gu);const _u={};k&2&&(_u.$$scope={dirty:k,ctx:o}),ns.$set(_u);const ku={};k&2&&(ku.$$scope={dirty:k,ctx:o}),ss.$set(ku);const qd={};k&2&&(qd.$$scope={dirty:k,ctx:o}),rs.$set(qd);const vu={};k&2&&(vu.$$scope={dirty:k,ctx:o}),is.$set(vu);const yu={};k&2&&(yu.$$scope={dirty:k,ctx:o}),ds.$set(yu);const Tu={};k&2&&(Tu.$$scope={dirty:k,ctx:o}),cs.$set(Tu);const Pd={};k&2&&(Pd.$$scope={dirty:k,ctx:o}),hs.$set(Pd);const bu={};k&2&&(bu.$$scope={dirty:k,ctx:o}),ms.$set(bu);const wu={};k&2&&(wu.$$scope={dirty:k,ctx:o}),us.$set(wu);const Eu={};k&2&&(Eu.$$scope={dirty:k,ctx:o}),gs.$set(Eu);const $u={};k&2&&($u.$$scope={dirty:k,ctx:o}),_s.$set($u);const Fu={};k&2&&(Fu.$$scope={dirty:k,ctx:o}),ks.$set(Fu);const Ad={};k&2&&(Ad.$$scope={dirty:k,ctx:o}),vs.$set(Ad);const xu={};k&2&&(xu.$$scope={dirty:k,ctx:o}),ys.$set(xu);const wo={};k&2&&(wo.$$scope={dirty:k,ctx:o}),bs.$set(wo);const Mu={};k&2&&(Mu.$$scope={dirty:k,ctx:o}),ws.$set(Mu);const zu={};k&2&&(zu.$$scope={dirty:k,ctx:o}),$s.$set(zu);const ju={};k&2&&(ju.$$scope={dirty:k,ctx:o}),Fs.$set(ju);const Rn={};k&2&&(Rn.$$scope={dirty:k,ctx:o}),xs.$set(Rn);const Cu={};k&2&&(Cu.$$scope={dirty:k,ctx:o}),zs.$set(Cu);const qu={};k&2&&(qu.$$scope={dirty:k,ctx:o}),js.$set(qu);const Od={};k&2&&(Od.$$scope={dirty:k,ctx:o}),Cs.$set(Od);const Pu={};k&2&&(Pu.$$scope={dirty:k,ctx:o}),Ps.$set(Pu);const Au={};k&2&&(Au.$$scope={dirty:k,ctx:o}),As.$set(Au);const Ou={};k&2&&(Ou.$$scope={dirty:k,ctx:o}),Os.$set(Ou);const Eo={};k&2&&(Eo.$$scope={dirty:k,ctx:o}),Ns.$set(Eo);const $o={};k&2&&($o.$$scope={dirty:k,ctx:o}),Is.$set($o);const Lu={};k&2&&(Lu.$$scope={dirty:k,ctx:o}),Ds.$set(Lu);const Nu={};k&2&&(Nu.$$scope={dirty:k,ctx:o}),Ws.$set(Nu);const Iu={};k&2&&(Iu.$$scope={dirty:k,ctx:o}),Us.$set(Iu);const Hn={};k&2&&(Hn.$$scope={dirty:k,ctx:o}),Bs.$set(Hn);const Du={};k&2&&(Du.$$scope={dirty:k,ctx:o}),Rs.$set(Du);const Su={};k&2&&(Su.$$scope={dirty:k,ctx:o}),Ks.$set(Su);const Ld={};k&2&&(Ld.$$scope={dirty:k,ctx:o}),Qs.$set(Ld);const Wu={};k&2&&(Wu.$$scope={dirty:k,ctx:o}),Vs.$set(Wu);const Uu={};k&2&&(Uu.$$scope={dirty:k,ctx:o}),Js.$set(Uu);const Bu={};k&2&&(Bu.$$scope={dirty:k,ctx:o}),Xs.$set(Bu);const vt={};k&2&&(vt.$$scope={dirty:k,ctx:o}),Ys.$set(vt);const Ru={};k&2&&(Ru.$$scope={dirty:k,ctx:o}),Zs.$set(Ru);const Nd={};k&2&&(Nd.$$scope={dirty:k,ctx:o}),ta.$set(Nd);const Hu={};k&2&&(Hu.$$scope={dirty:k,ctx:o}),oa.$set(Hu);const Kn={};k&2&&(Kn.$$scope={dirty:k,ctx:o}),na.$set(Kn);const Ku={};k&2&&(Ku.$$scope={dirty:k,ctx:o}),sa.$set(Ku);const Id={};k&2&&(Id.$$scope={dirty:k,ctx:o}),ra.$set(Id);const Nc={};k&2&&(Nc.$$scope={dirty:k,ctx:o}),ia.$set(Nc);const Qu={};k&2&&(Qu.$$scope={dirty:k,ctx:o}),la.$set(Qu);const Ic={};k&2&&(Ic.$$scope={dirty:k,ctx:o}),da.$set(Ic);const Vu={};k&2&&(Vu.$$scope={dirty:k,ctx:o}),pa.$set(Vu);const Dd={};k&2&&(Dd.$$scope={dirty:k,ctx:o}),ha.$set(Dd);const Ju={};k&2&&(Ju.$$scope={dirty:k,ctx:o}),ua.$set(Ju);const Fo={};k&2&&(Fo.$$scope={dirty:k,ctx:o}),fa.$set(Fo);const Gu={};k&2&&(Gu.$$scope={dirty:k,ctx:o}),_a.$set(Gu);const Qn={};k&2&&(Qn.$$scope={dirty:k,ctx:o}),ka.$set(Qn);const Xu={};k&2&&(Xu.$$scope={dirty:k,ctx:o}),ya.$set(Xu);const Yu={};k&2&&(Yu.$$scope={dirty:k,ctx:o}),Ta.$set(Yu);const Sd={};k&2&&(Sd.$$scope={dirty:k,ctx:o}),wa.$set(Sd);const Wd={};k&2&&(Wd.$$scope={dirty:k,ctx:o}),Ea.$set(Wd);const Zu={};k&2&&(Zu.$$scope={dirty:k,ctx:o}),Fa.$set(Zu);const Ud={};k&2&&(Ud.$$scope={dirty:k,ctx:o}),xa.$set(Ud);const ef={};k&2&&(ef.$$scope={dirty:k,ctx:o}),za.$set(ef);const tf={};k&2&&(tf.$$scope={dirty:k,ctx:o}),ja.$set(tf);const of={};k&2&&(of.$$scope={dirty:k,ctx:o}),qa.$set(of);const xo={};k&2&&(xo.$$scope={dirty:k,ctx:o}),Pa.$set(xo)},i(o){sg||(E(l.$$.fragment,o),E(M.$$.fragment,o),E(We.$$.fragment,o),E(Ue.$$.fragment,o),E(Vn.$$.fragment,o),E(nr.$$.fragment,o),E(sr.$$.fragment,o),E(rr.$$.fragment,o),E(lr.$$.fragment,o),E(dr.$$.fragment,o),E(Xn.$$.fragment,o),E(cr.$$.fragment,o),E(hr.$$.fragment,o),E(mr.$$.fragment,o),E(gr.$$.fragment,o),E(_r.$$.fragment,o),E(vr.$$.fragment,o),E(Tr.$$.fragment,o),E(br.$$.fragment,o),E(Fr.$$.fragment,o),E(ns.$$.fragment,o),E(ss.$$.fragment,o),E(xr.$$.fragment,o),E(Mr.$$.fragment,o),E(qr.$$.fragment,o),E(rs.$$.fragment,o),E(is.$$.fragment,o),E(Pr.$$.fragment,o),E(Ar.$$.fragment,o),E(Dr.$$.fragment,o),E(ds.$$.fragment,o),E(cs.$$.fragment,o),E(Sr.$$.fragment,o),E(Wr.$$.fragment,o),E(Hr.$$.fragment,o),E(hs.$$.fragment,o),E(ms.$$.fragment,o),E(us.$$.fragment,o),E(Kr.$$.fragment,o),E(Qr.$$.fragment,o),E(Xr.$$.fragment,o),E(gs.$$.fragment,o),E(_s.$$.fragment,o),E(ks.$$.fragment,o),E(vs.$$.fragment,o),E(ys.$$.fragment,o),E(Yr.$$.fragment,o),E(Zr.$$.fragment,o),E(ni.$$.fragment,o),E(bs.$$.fragment,o),E(ws.$$.fragment,o),E(si.$$.fragment,o),E(ai.$$.fragment,o),E(di.$$.fragment,o),E($s.$$.fragment,o),E(Fs.$$.fragment,o),E(xs.$$.fragment,o),E(ci.$$.fragment,o),E(pi.$$.fragment,o),E(fi.$$.fragment,o),E(zs.$$.fragment,o),E(js.$$.fragment,o),E(Cs.$$.fragment,o),E(gi.$$.fragment,o),E(_i.$$.fragment,o),E(Ps.$$.fragment,o),E(Ti.$$.fragment,o),E(As.$$.fragment,o),E(Os.$$.fragment,o),E(bi.$$.fragment,o),E(wi.$$.fragment,o),E(Ns.$$.fragment,o),E(xi.$$.fragment,o),E(Is.$$.fragment,o),E(Ds.$$.fragment,o),E(Mi.$$.fragment,o),E(zi.$$.fragment,o),E(Ws.$$.fragment,o),E(Pi.$$.fragment,o),E(Us.$$.fragment,o),E(Bs.$$.fragment,o),E(Rs.$$.fragment,o),E(Ai.$$.fragment,o),E(Oi.$$.fragment,o),E(Ks.$$.fragment,o),E(Di.$$.fragment,o),E(Qs.$$.fragment,o),E(Vs.$$.fragment,o),E(Js.$$.fragment,o),E(Si.$$.fragment,o),E(Wi.$$.fragment,o),E(Xs.$$.fragment,o),E(Hi.$$.fragment,o),E(Ys.$$.fragment,o),E(Zs.$$.fragment,o),E(Ki.$$.fragment,o),E(Qi.$$.fragment,o),E(ta.$$.fragment,o),E(Xi.$$.fragment,o),E(oa.$$.fragment,o),E(na.$$.fragment,o),E(sa.$$.fragment,o),E(Yi.$$.fragment,o),E(Zi.$$.fragment,o),E(ra.$$.fragment,o),E(nl.$$.fragment,o),E(ia.$$.fragment,o),E(la.$$.fragment,o),E(da.$$.fragment,o),E(sl.$$.fragment,o),E(al.$$.fragment,o),E(ml.$$.fragment,o),E(pa.$$.fragment,o),E(ha.$$.fragment,o),E(ul.$$.fragment,o),E(fl.$$.fragment,o),E(wl.$$.fragment,o),E(ua.$$.fragment,o),E(fa.$$.fragment,o),E(El.$$.fragment,o),E($l.$$.fragment,o),E(Pl.$$.fragment,o),E(_a.$$.fragment,o),E(ka.$$.fragment,o),E(Al.$$.fragment,o),E(Ol.$$.fragment,o),E(Rl.$$.fragment,o),E(ya.$$.fragment,o),E(Ta.$$.fragment,o),E(Hl.$$.fragment,o),E(Kl.$$.fragment,o),E(ed.$$.fragment,o),E(wa.$$.fragment,o),E(Ea.$$.fragment,o),E(td.$$.fragment,o),E(od.$$.fragment,o),E(cd.$$.fragment,o),E(Fa.$$.fragment,o),E(xa.$$.fragment,o),E(pd.$$.fragment,o),E(hd.$$.fragment,o),E(yd.$$.fragment,o),E(za.$$.fragment,o),E(ja.$$.fragment,o),E(Td.$$.fragment,o),E(bd.$$.fragment,o),E(jd.$$.fragment,o),E(qa.$$.fragment,o),E(Pa.$$.fragment,o),sg=!0)},o(o){$(l.$$.fragment,o),$(M.$$.fragment,o),$(We.$$.fragment,o),$(Ue.$$.fragment,o),$(Vn.$$.fragment,o),$(nr.$$.fragment,o),$(sr.$$.fragment,o),$(rr.$$.fragment,o),$(lr.$$.fragment,o),$(dr.$$.fragment,o),$(Xn.$$.fragment,o),$(cr.$$.fragment,o),$(hr.$$.fragment,o),$(mr.$$.fragment,o),$(gr.$$.fragment,o),$(_r.$$.fragment,o),$(vr.$$.fragment,o),$(Tr.$$.fragment,o),$(br.$$.fragment,o),$(Fr.$$.fragment,o),$(ns.$$.fragment,o),$(ss.$$.fragment,o),$(xr.$$.fragment,o),$(Mr.$$.fragment,o),$(qr.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(Pr.$$.fragment,o),$(Ar.$$.fragment,o),$(Dr.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(Sr.$$.fragment,o),$(Wr.$$.fragment,o),$(Hr.$$.fragment,o),$(hs.$$.fragment,o),$(ms.$$.fragment,o),$(us.$$.fragment,o),$(Kr.$$.fragment,o),$(Qr.$$.fragment,o),$(Xr.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(ks.$$.fragment,o),$(vs.$$.fragment,o),$(ys.$$.fragment,o),$(Yr.$$.fragment,o),$(Zr.$$.fragment,o),$(ni.$$.fragment,o),$(bs.$$.fragment,o),$(ws.$$.fragment,o),$(si.$$.fragment,o),$(ai.$$.fragment,o),$(di.$$.fragment,o),$($s.$$.fragment,o),$(Fs.$$.fragment,o),$(xs.$$.fragment,o),$(ci.$$.fragment,o),$(pi.$$.fragment,o),$(fi.$$.fragment,o),$(zs.$$.fragment,o),$(js.$$.fragment,o),$(Cs.$$.fragment,o),$(gi.$$.fragment,o),$(_i.$$.fragment,o),$(Ps.$$.fragment,o),$(Ti.$$.fragment,o),$(As.$$.fragment,o),$(Os.$$.fragment,o),$(bi.$$.fragment,o),$(wi.$$.fragment,o),$(Ns.$$.fragment,o),$(xi.$$.fragment,o),$(Is.$$.fragment,o),$(Ds.$$.fragment,o),$(Mi.$$.fragment,o),$(zi.$$.fragment,o),$(Ws.$$.fragment,o),$(Pi.$$.fragment,o),$(Us.$$.fragment,o),$(Bs.$$.fragment,o),$(Rs.$$.fragment,o),$(Ai.$$.fragment,o),$(Oi.$$.fragment,o),$(Ks.$$.fragment,o),$(Di.$$.fragment,o),$(Qs.$$.fragment,o),$(Vs.$$.fragment,o),$(Js.$$.fragment,o),$(Si.$$.fragment,o),$(Wi.$$.fragment,o),$(Xs.$$.fragment,o),$(Hi.$$.fragment,o),$(Ys.$$.fragment,o),$(Zs.$$.fragment,o),$(Ki.$$.fragment,o),$(Qi.$$.fragment,o),$(ta.$$.fragment,o),$(Xi.$$.fragment,o),$(oa.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(Yi.$$.fragment,o),$(Zi.$$.fragment,o),$(ra.$$.fragment,o),$(nl.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(da.$$.fragment,o),$(sl.$$.fragment,o),$(al.$$.fragment,o),$(ml.$$.fragment,o),$(pa.$$.fragment,o),$(ha.$$.fragment,o),$(ul.$$.fragment,o),$(fl.$$.fragment,o),$(wl.$$.fragment,o),$(ua.$$.fragment,o),$(fa.$$.fragment,o),$(El.$$.fragment,o),$($l.$$.fragment,o),$(Pl.$$.fragment,o),$(_a.$$.fragment,o),$(ka.$$.fragment,o),$(Al.$$.fragment,o),$(Ol.$$.fragment,o),$(Rl.$$.fragment,o),$(ya.$$.fragment,o),$(Ta.$$.fragment,o),$(Hl.$$.fragment,o),$(Kl.$$.fragment,o),$(ed.$$.fragment,o),$(wa.$$.fragment,o),$(Ea.$$.fragment,o),$(td.$$.fragment,o),$(od.$$.fragment,o),$(cd.$$.fragment,o),$(Fa.$$.fragment,o),$(xa.$$.fragment,o),$(pd.$$.fragment,o),$(hd.$$.fragment,o),$(yd.$$.fragment,o),$(za.$$.fragment,o),$(ja.$$.fragment,o),$(Td.$$.fragment,o),$(bd.$$.fragment,o),$(jd.$$.fragment,o),$(qa.$$.fragment,o),$(Pa.$$.fragment,o),sg=!1},d(o){t(d),o&&t(g),o&&t(h),F(l),o&&t(fe),o&&t(W),F(M),o&&t(ge),o&&t(U),o&&t(_e),o&&t(R),o&&t(ke),o&&t(H),o&&t(oe),o&&t(q),o&&t(ve),o&&t(B),o&&t(ye),o&&t(S),o&&t(y),o&&t(j),F(We),o&&t(Ke),o&&t(he),F(Ue),F(Vn),o&&t(sf),o&&t(Uo),F(nr),o&&t(af),o&&t(tt),F(sr),F(rr),F(lr),F(dr),F(Xn),F(cr),o&&t(rf),o&&t(Ro),F(hr),o&&t(lf),o&&t(Rt),F(mr),o&&t(df),o&&t(Ho),F(gr),o&&t(cf),o&&t(Ko),F(_r),o&&t(pf),o&&t(Qo),F(vr),o&&t(hf),o&&t(Vo),F(Tr),o&&t(mf),o&&t(bt),F(br),F(Fr),F(ns),F(ss),o&&t(uf),o&&t(Go),F(xr),o&&t(ff),o&&t(ht),F(Mr),F(qr),F(rs),F(is),o&&t(gf),o&&t(Yo),F(Pr),o&&t(_f),o&&t(wt),F(Ar),F(Dr),F(ds),F(cs),o&&t(kf),o&&t(en),F(Sr),o&&t(vf),o&&t(mt),F(Wr),F(Hr),F(hs),F(ms),F(us),o&&t(yf),o&&t(on),F(Kr),o&&t(Tf),o&&t(Et),F(Qr),F(Xr),F(gs),F(_s),F(ks),F(vs),F(ys),o&&t(bf),o&&t(sn),F(Yr),o&&t(wf),o&&t($t),F(Zr),F(ni),F(bs),F(ws),o&&t(Ef),o&&t(rn),F(si),o&&t($f),o&&t(ut),F(ai),F(di),F($s),F(Fs),F(xs),o&&t(Ff),o&&t(dn),F(ci),o&&t(xf),o&&t(Ft),F(pi),F(fi),F(zs),F(js),F(Cs),o&&t(Mf),o&&t(hn),F(gi),o&&t(zf),o&&t(ft),F(_i),F(Ps),F(Ti),F(As),F(Os),o&&t(jf),o&&t(un),F(bi),o&&t(Cf),o&&t(ot),F(wi),F(Ns),F(xi),F(Is),F(Ds),o&&t(qf),o&&t(gn),F(Mi),o&&t(Pf),o&&t(nt),F(zi),F(Ws),F(Pi),F(Us),F(Bs),F(Rs),o&&t(Af),o&&t(kn),F(Ai),o&&t(Of),o&&t(gt),F(Oi),F(Ks),F(Di),F(Qs),F(Vs),F(Js),o&&t(Lf),o&&t(yn),F(Si),o&&t(Nf),o&&t(_t),F(Wi),F(Xs),F(Hi),F(Ys),F(Zs),o&&t(If),o&&t(bn),F(Ki),o&&t(Df),o&&t(st),F(Qi),F(ta),F(Xi),F(oa),F(na),F(sa),o&&t(Sf),o&&t(En),F(Yi),o&&t(Wf),o&&t(kt),F(Zi),F(ra),F(nl),F(ia),F(la),F(da),o&&t(Uf),o&&t(xn),F(sl),o&&t(Bf),o&&t(at),F(al),F(ml),F(pa),F(ha),o&&t(Rf),o&&t(zn),F(ul),o&&t(Hf),o&&t(Ze),F(fl),F(wl),F(ua),F(fa),o&&t(Kf),o&&t(Cn),F(El),o&&t(Qf),o&&t(rt),F($l),F(Pl),F(_a),F(ka),o&&t(Vf),o&&t(Pn),F(Al),o&&t(Jf),o&&t(it),F(Ol),F(Rl),F(ya),F(Ta),o&&t(Gf),o&&t(On),F(Hl),o&&t(Xf),o&&t(lt),F(Kl),F(ed),F(wa),F(Ea),o&&t(Yf),o&&t(Nn),F(td),o&&t(Zf),o&&t(dt),F(od),F(cd),F(Fa),F(xa),o&&t(eg),o&&t(Dn),F(pd),o&&t(tg),o&&t(et),F(hd),F(yd),F(za),F(ja),o&&t(og),o&&t(Wn),F(Td),o&&t(ng),o&&t(ct),F(bd),F(jd),F(qa),F(Pa)}}}const zC={local:"electra",sections:[{local:"overview",title:"Overview"},{local:"transformers.ElectraConfig",title:"ElectraConfig"},{local:"transformers.ElectraTokenizer",title:"ElectraTokenizer"},{local:"transformers.ElectraTokenizerFast",title:"ElectraTokenizerFast"},{local:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",title:"Electra specific outputs"},{local:"transformers.ElectraModel",title:"ElectraModel"},{local:"transformers.ElectraForPreTraining",title:"ElectraForPreTraining"},{local:"transformers.ElectraForCausalLM",title:"ElectraForCausalLM"},{local:"transformers.ElectraForMaskedLM",title:"ElectraForMaskedLM"},{local:"transformers.ElectraForSequenceClassification",title:"ElectraForSequenceClassification"},{local:"transformers.ElectraForMultipleChoice",title:"ElectraForMultipleChoice"},{local:"transformers.ElectraForTokenClassification",title:"ElectraForTokenClassification"},{local:"transformers.ElectraForQuestionAnswering",title:"ElectraForQuestionAnswering"},{local:"transformers.TFElectraModel",title:"TFElectraModel"},{local:"transformers.TFElectraForPreTraining",title:"TFElectraForPreTraining"},{local:"transformers.TFElectraForMaskedLM",title:"TFElectraForMaskedLM"},{local:"transformers.TFElectraForSequenceClassification",title:"TFElectraForSequenceClassification"},{local:"transformers.TFElectraForMultipleChoice",title:"TFElectraForMultipleChoice"},{local:"transformers.TFElectraForTokenClassification",title:"TFElectraForTokenClassification"},{local:"transformers.TFElectraForQuestionAnswering",title:"TFElectraForQuestionAnswering"},{local:"transformers.FlaxElectraModel",title:"FlaxElectraModel"},{local:"transformers.FlaxElectraForPreTraining",title:"FlaxElectraForPreTraining"},{local:"transformers.FlaxElectraForCausalLM",title:"FlaxElectraForCausalLM"},{local:"transformers.FlaxElectraForMaskedLM",title:"FlaxElectraForMaskedLM"},{local:"transformers.FlaxElectraForSequenceClassification",title:"FlaxElectraForSequenceClassification"},{local:"transformers.FlaxElectraForMultipleChoice",title:"FlaxElectraForMultipleChoice"},{local:"transformers.FlaxElectraForTokenClassification",title:"FlaxElectraForTokenClassification"},{local:"transformers.FlaxElectraForQuestionAnswering",title:"FlaxElectraForQuestionAnswering"}],title:"ELECTRA"};function jC(x){return gj(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class NC extends hj{constructor(d){super();mj(this,d,jC,MC,uj,{})}}export{NC as default,zC as metadata};
