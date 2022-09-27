import{S as pj,i as hj,s as mj,e as a,k as p,w as T,t as n,M as uj,c as r,d as t,m as h,a as i,x as b,h as s,b as u,G as e,g as _,y as w,q as E,o as $,B as F,v as fj,L as pe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ie}from"../../chunks/Tip-hf-doc-builder.js";import{D as W}from"../../chunks/Docstring-hf-doc-builder.js";import{C as he}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Se}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function gj(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraModel, ElectraConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),g=n("Examples:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function _j(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function vj(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, ElectraModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function kj(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function yj(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraForPreTraining, ElectraTokenizerFast
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
[<span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>]`}}),{c(){d=a("p"),g=n("Examples:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Tj(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function bj(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, ElectraForCausalLM, ElectraConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function wj(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Ej(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, ElectraForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function $j(x){let d,g;return d=new he({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.22</span>`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Fj(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function xj(x){let d,g,c,f,k;return f=new he({props:{code:`import torch
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of single-label classification:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example of single-label classification:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Mj(x){let d,g;return d=new he({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = ElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.06</span>`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function zj(x){let d,g,c,f,k;return f=new he({props:{code:`import torch
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of multi-label classification:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example of multi-label classification:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function jj(x){let d,g;return d=new he({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Cj(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function qj(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, ElectraForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Pj(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Aj(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, ElectraForTokenClassification
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
[<span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;B-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Oj(x){let d,g;return d=new he({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.11</span>`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Lj(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Nj(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, ElectraForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Ij(x){let d,g;return d=new he({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">2.64</span>`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Dj(x){let d,g,c,f,k,l,m,z,Te,fe,S,ae,ee,M,be,K,we,ge,U,Ee,re,Q,$e,_e,R,Fe,ve,H,me,xe,oe,q,A,ke,B,ue,Me,V,ne,ze,P,je,J,ie,Ce,G,le,qe,I,ye,D,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),S=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ve=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=a("ul"),A=a("li"),ke=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=p(),P=a("li"),je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ie=n("model([input_ids, attention_mask])"),Ce=n(" or "),G=a("code"),le=n("model([input_ids, attention_mask, token_type_ids])"),qe=p(),I=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=p(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var j=i(d);g=s(j,"TensorFlow models and layers in "),c=r(j,"CODE",{});var De=i(c);f=s(De,"transformers"),De.forEach(t),k=s(j," accept two formats as input:"),j.forEach(t),l=h(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=h(te),S=r(te,"LI",{});var Qe=i(S);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=h(y),M=r(y,"P",{});var C=i(M);be=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(C,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),re=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(C,"CODE",{});var de=i(Q);$e=s(de,"fit()"),de.forEach(t),_e=s(C," and "),R=r(C,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ve=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),oe=h(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ke=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=h(N),P=r(N,"LI",{});var Y=i(P);je=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ie=s(He,"model([input_ids, attention_mask])"),He.forEach(t),Ce=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);le=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=h(N),I=r(N,"LI",{});var Ne=i(I);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=r(Ne,"CODE",{});var Be=i(D);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=h(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,j){_(y,d,j),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,j),_(y,m,j),e(m,z),e(z,Te),e(m,fe),e(m,S),e(S,ae),_(y,ee,j),_(y,M,j),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ve),e(M,H),e(H,me),e(M,xe),_(y,oe,j),_(y,q,j),e(q,A),e(A,ke),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,je),e(P,J),e(J,ie),e(P,Ce),e(P,G),e(G,le),e(q,qe),e(q,I),e(I,ye),e(I,D),e(D,Pe),_(y,Z,j),_(y,O,j),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function Sj(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Wj(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, TFElectraModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Uj(x){let d,g,c,f,k,l,m,z,Te,fe,S,ae,ee,M,be,K,we,ge,U,Ee,re,Q,$e,_e,R,Fe,ve,H,me,xe,oe,q,A,ke,B,ue,Me,V,ne,ze,P,je,J,ie,Ce,G,le,qe,I,ye,D,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),S=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ve=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=a("ul"),A=a("li"),ke=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=p(),P=a("li"),je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ie=n("model([input_ids, attention_mask])"),Ce=n(" or "),G=a("code"),le=n("model([input_ids, attention_mask, token_type_ids])"),qe=p(),I=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=p(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var j=i(d);g=s(j,"TensorFlow models and layers in "),c=r(j,"CODE",{});var De=i(c);f=s(De,"transformers"),De.forEach(t),k=s(j," accept two formats as input:"),j.forEach(t),l=h(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=h(te),S=r(te,"LI",{});var Qe=i(S);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=h(y),M=r(y,"P",{});var C=i(M);be=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(C,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),re=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(C,"CODE",{});var de=i(Q);$e=s(de,"fit()"),de.forEach(t),_e=s(C," and "),R=r(C,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ve=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),oe=h(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ke=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=h(N),P=r(N,"LI",{});var Y=i(P);je=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ie=s(He,"model([input_ids, attention_mask])"),He.forEach(t),Ce=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);le=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=h(N),I=r(N,"LI",{});var Ne=i(I);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=r(Ne,"CODE",{});var Be=i(D);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=h(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,j){_(y,d,j),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,j),_(y,m,j),e(m,z),e(z,Te),e(m,fe),e(m,S),e(S,ae),_(y,ee,j),_(y,M,j),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ve),e(M,H),e(H,me),e(M,xe),_(y,oe,j),_(y,q,j),e(q,A),e(A,ke),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,je),e(P,J),e(J,ie),e(P,Ce),e(P,G),e(G,le),e(q,qe),e(q,I),e(I,ye),e(I,D),e(D,Pe),_(y,Z,j),_(y,O,j),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function Bj(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Rj(x){let d,g,c,f,k;return f=new he({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>scores = outputs[<span class="hljs-number">0</span>]`}}),{c(){d=a("p"),g=n("Examples:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Hj(x){let d,g,c,f,k,l,m,z,Te,fe,S,ae,ee,M,be,K,we,ge,U,Ee,re,Q,$e,_e,R,Fe,ve,H,me,xe,oe,q,A,ke,B,ue,Me,V,ne,ze,P,je,J,ie,Ce,G,le,qe,I,ye,D,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),S=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ve=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=a("ul"),A=a("li"),ke=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=p(),P=a("li"),je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ie=n("model([input_ids, attention_mask])"),Ce=n(" or "),G=a("code"),le=n("model([input_ids, attention_mask, token_type_ids])"),qe=p(),I=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=p(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var j=i(d);g=s(j,"TensorFlow models and layers in "),c=r(j,"CODE",{});var De=i(c);f=s(De,"transformers"),De.forEach(t),k=s(j," accept two formats as input:"),j.forEach(t),l=h(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=h(te),S=r(te,"LI",{});var Qe=i(S);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=h(y),M=r(y,"P",{});var C=i(M);be=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(C,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),re=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(C,"CODE",{});var de=i(Q);$e=s(de,"fit()"),de.forEach(t),_e=s(C," and "),R=r(C,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ve=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),oe=h(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ke=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=h(N),P=r(N,"LI",{});var Y=i(P);je=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ie=s(He,"model([input_ids, attention_mask])"),He.forEach(t),Ce=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);le=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=h(N),I=r(N,"LI",{});var Ne=i(I);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=r(Ne,"CODE",{});var Be=i(D);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=h(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,j){_(y,d,j),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,j),_(y,m,j),e(m,z),e(z,Te),e(m,fe),e(m,S),e(S,ae),_(y,ee,j),_(y,M,j),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ve),e(M,H),e(H,me),e(M,xe),_(y,oe,j),_(y,q,j),e(q,A),e(A,ke),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,je),e(P,J),e(J,ie),e(P,Ce),e(P,G),e(G,le),e(q,qe),e(q,I),e(I,ye),e(I,D),e(D,Pe),_(y,Z,j),_(y,O,j),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function Kj(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Qj(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, TFElectraForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Vj(x){let d,g;return d=new he({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">1.22</span>`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Jj(x){let d,g,c,f,k,l,m,z,Te,fe,S,ae,ee,M,be,K,we,ge,U,Ee,re,Q,$e,_e,R,Fe,ve,H,me,xe,oe,q,A,ke,B,ue,Me,V,ne,ze,P,je,J,ie,Ce,G,le,qe,I,ye,D,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),S=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ve=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=a("ul"),A=a("li"),ke=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=p(),P=a("li"),je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ie=n("model([input_ids, attention_mask])"),Ce=n(" or "),G=a("code"),le=n("model([input_ids, attention_mask, token_type_ids])"),qe=p(),I=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=p(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var j=i(d);g=s(j,"TensorFlow models and layers in "),c=r(j,"CODE",{});var De=i(c);f=s(De,"transformers"),De.forEach(t),k=s(j," accept two formats as input:"),j.forEach(t),l=h(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=h(te),S=r(te,"LI",{});var Qe=i(S);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=h(y),M=r(y,"P",{});var C=i(M);be=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(C,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),re=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(C,"CODE",{});var de=i(Q);$e=s(de,"fit()"),de.forEach(t),_e=s(C," and "),R=r(C,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ve=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),oe=h(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ke=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=h(N),P=r(N,"LI",{});var Y=i(P);je=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ie=s(He,"model([input_ids, attention_mask])"),He.forEach(t),Ce=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);le=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=h(N),I=r(N,"LI",{});var Ne=i(I);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=r(Ne,"CODE",{});var Be=i(D);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=h(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,j){_(y,d,j),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,j),_(y,m,j),e(m,z),e(z,Te),e(m,fe),e(m,S),e(S,ae),_(y,ee,j),_(y,M,j),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ve),e(M,H),e(H,me),e(M,xe),_(y,oe,j),_(y,q,j),e(q,A),e(A,ke),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,je),e(P,J),e(J,ie),e(P,Ce),e(P,G),e(G,le),e(q,qe),e(q,I),e(I,ye),e(I,D),e(D,Pe),_(y,Z,j),_(y,O,j),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function Gj(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Xj(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, TFElectraForSequenceClassification
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Yj(x){let d,g;return d=new he({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.06</span>`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Zj(x){let d,g,c,f,k,l,m,z,Te,fe,S,ae,ee,M,be,K,we,ge,U,Ee,re,Q,$e,_e,R,Fe,ve,H,me,xe,oe,q,A,ke,B,ue,Me,V,ne,ze,P,je,J,ie,Ce,G,le,qe,I,ye,D,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),S=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ve=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=a("ul"),A=a("li"),ke=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=p(),P=a("li"),je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ie=n("model([input_ids, attention_mask])"),Ce=n(" or "),G=a("code"),le=n("model([input_ids, attention_mask, token_type_ids])"),qe=p(),I=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=p(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var j=i(d);g=s(j,"TensorFlow models and layers in "),c=r(j,"CODE",{});var De=i(c);f=s(De,"transformers"),De.forEach(t),k=s(j," accept two formats as input:"),j.forEach(t),l=h(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=h(te),S=r(te,"LI",{});var Qe=i(S);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=h(y),M=r(y,"P",{});var C=i(M);be=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(C,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),re=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(C,"CODE",{});var de=i(Q);$e=s(de,"fit()"),de.forEach(t),_e=s(C," and "),R=r(C,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ve=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),oe=h(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ke=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=h(N),P=r(N,"LI",{});var Y=i(P);je=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ie=s(He,"model([input_ids, attention_mask])"),He.forEach(t),Ce=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);le=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=h(N),I=r(N,"LI",{});var Ne=i(I);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=r(Ne,"CODE",{});var Be=i(D);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=h(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,j){_(y,d,j),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,j),_(y,m,j),e(m,z),e(z,Te),e(m,fe),e(m,S),e(S,ae),_(y,ee,j),_(y,M,j),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ve),e(M,H),e(H,me),e(M,xe),_(y,oe,j),_(y,q,j),e(q,A),e(A,ke),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,je),e(P,J),e(J,ie),e(P,Ce),e(P,G),e(G,le),e(q,qe),e(q,I),e(I,ye),e(I,D),e(D,Pe),_(y,Z,j),_(y,O,j),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function eC(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function tC(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, TFElectraForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function oC(x){let d,g,c,f,k,l,m,z,Te,fe,S,ae,ee,M,be,K,we,ge,U,Ee,re,Q,$e,_e,R,Fe,ve,H,me,xe,oe,q,A,ke,B,ue,Me,V,ne,ze,P,je,J,ie,Ce,G,le,qe,I,ye,D,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),S=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ve=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=a("ul"),A=a("li"),ke=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=p(),P=a("li"),je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ie=n("model([input_ids, attention_mask])"),Ce=n(" or "),G=a("code"),le=n("model([input_ids, attention_mask, token_type_ids])"),qe=p(),I=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=p(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var j=i(d);g=s(j,"TensorFlow models and layers in "),c=r(j,"CODE",{});var De=i(c);f=s(De,"transformers"),De.forEach(t),k=s(j," accept two formats as input:"),j.forEach(t),l=h(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=h(te),S=r(te,"LI",{});var Qe=i(S);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=h(y),M=r(y,"P",{});var C=i(M);be=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(C,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),re=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(C,"CODE",{});var de=i(Q);$e=s(de,"fit()"),de.forEach(t),_e=s(C," and "),R=r(C,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ve=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),oe=h(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ke=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=h(N),P=r(N,"LI",{});var Y=i(P);je=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ie=s(He,"model([input_ids, attention_mask])"),He.forEach(t),Ce=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);le=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=h(N),I=r(N,"LI",{});var Ne=i(I);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=r(Ne,"CODE",{});var Be=i(D);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=h(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,j){_(y,d,j),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,j),_(y,m,j),e(m,z),e(z,Te),e(m,fe),e(m,S),e(S,ae),_(y,ee,j),_(y,M,j),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ve),e(M,H),e(H,me),e(M,xe),_(y,oe,j),_(y,q,j),e(q,A),e(A,ke),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,je),e(P,J),e(J,ie),e(P,Ce),e(P,G),e(G,le),e(q,qe),e(q,I),e(I,ye),e(I,D),e(D,Pe),_(y,Z,j),_(y,O,j),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function nC(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function sC(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, TFElectraForTokenClassification
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
[<span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;B-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function aC(x){let d,g;return d=new he({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.11</span>`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function rC(x){let d,g,c,f,k,l,m,z,Te,fe,S,ae,ee,M,be,K,we,ge,U,Ee,re,Q,$e,_e,R,Fe,ve,H,me,xe,oe,q,A,ke,B,ue,Me,V,ne,ze,P,je,J,ie,Ce,G,le,qe,I,ye,D,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),S=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=a("code"),$e=n("fit()"),_e=n(" and "),R=a("code"),Fe=n("predict()"),ve=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=a("ul"),A=a("li"),ke=n("a single Tensor with "),B=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=p(),P=a("li"),je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ie=n("model([input_ids, attention_mask])"),Ce=n(" or "),G=a("code"),le=n("model([input_ids, attention_mask, token_type_ids])"),qe=p(),I=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=p(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var j=i(d);g=s(j,"TensorFlow models and layers in "),c=r(j,"CODE",{});var De=i(c);f=s(De,"transformers"),De.forEach(t),k=s(j," accept two formats as input:"),j.forEach(t),l=h(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=h(te),S=r(te,"LI",{});var Qe=i(S);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),te.forEach(t),ee=h(y),M=r(y,"P",{});var C=i(M);be=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ve=i(K);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(C,"CODE",{});var Ke=i(U);Ee=s(Ke,"model.fit()"),Ke.forEach(t),re=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),Q=r(C,"CODE",{});var de=i(Q);$e=s(de,"fit()"),de.forEach(t),_e=s(C," and "),R=r(C,"CODE",{});var Ue=i(R);Fe=s(Ue,"predict()"),Ue.forEach(t),ve=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Je=i(H);me=s(Je,"Functional"),Je.forEach(t),xe=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),oe=h(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ke=s(X,"a single Tensor with "),B=r(X,"CODE",{});var Re=i(B);ue=s(Re,"input_ids"),Re.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=h(N),P=r(N,"LI",{});var Y=i(P);je=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var He=i(J);ie=s(He,"model([input_ids, attention_mask])"),He.forEach(t),Ce=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);le=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=h(N),I=r(N,"LI",{});var Ne=i(I);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=r(Ne,"CODE",{});var Be=i(D);Pe=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),Ne.forEach(t),N.forEach(t),Z=h(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,j){_(y,d,j),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,j),_(y,m,j),e(m,z),e(z,Te),e(m,fe),e(m,S),e(S,ae),_(y,ee,j),_(y,M,j),e(M,be),e(M,K),e(K,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,Q),e(Q,$e),e(M,_e),e(M,R),e(R,Fe),e(M,ve),e(M,H),e(H,me),e(M,xe),_(y,oe,j),_(y,q,j),e(q,A),e(A,ke),e(A,B),e(B,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,je),e(P,J),e(J,ie),e(P,Ce),e(P,G),e(G,le),e(q,qe),e(q,I),e(I,ye),e(I,D),e(D,Pe),_(y,Z,j),_(y,O,j),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function iC(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function lC(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, TFElectraForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function dC(x){let d,g;return d=new he({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">2.64</span>`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function cC(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function pC(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, FlaxElectraModel

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraModel.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraModel.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function hC(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function mC(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForPreTraining

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForPreTraining.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function uC(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function fC(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function gC(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function _C(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMaskedLM

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForMaskedLM.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function vC(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function kC(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForSequenceClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForSequenceClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function yC(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function TC(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function bC(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function wC(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForTokenClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForTokenClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function EC(x){let d,g,c,f,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function $C(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||(E(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function FC(x){let d,g,c,f,k,l,m,z,Te,fe,S,ae,ee,M,be,K,we,ge,U,Ee,re,Q,$e,_e,R,Fe,ve,H,me,xe,oe,q,A,ke,B,ue,Me,V,ne,ze,P,je,J,ie,Ce,G,le,qe,I,ye,D,Pe,Z,O,Ae,L,Oe,Le,y,j,De,te,We,Qe,C,Ve,Ke,de,Ue,Je,N,X,Re,Ge,Y,He,Xe,Ne,Be,se,Ye,n_,Io,s_,qd,a_,r_,Pd,i_,l_,d_,Un,Nu,Do,Bn,Yc,Xa,c_,Zc,p_,Iu,Ut,Ya,h_,ep,m_,u_,Rn,Ad,f_,g_,Od,__,v_,k_,Za,y_,Ld,T_,b_,Du,So,Hn,tp,er,w_,op,E_,Su,Bt,tr,$_,or,F_,np,x_,M_,z_,Kn,Nd,j_,C_,Id,q_,P_,A_,nr,O_,Dd,L_,N_,Wu,Wo,Qn,sp,sr,I_,ap,D_,Uu,Uo,ar,S_,rr,W_,Sd,U_,B_,Bu,Bo,ir,R_,lr,H_,Wd,K_,Q_,Ru,Ro,Vn,rp,dr,V_,ip,J_,Hu,yt,cr,G_,lp,X_,Y_,pr,Z_,Ud,ev,tv,ov,hr,nv,mr,sv,av,rv,Rt,ur,iv,Ho,lv,Bd,dv,cv,dp,pv,hv,mv,Jn,uv,Gn,Ku,Ko,Xn,cp,fr,fv,pp,gv,Qu,pt,gr,_v,hp,vv,kv,mp,yv,Tv,_r,bv,Rd,wv,Ev,$v,vr,Fv,kr,xv,Mv,zv,Ht,yr,jv,Qo,Cv,Hd,qv,Pv,up,Av,Ov,Lv,Yn,Nv,Zn,Vu,Vo,es,fp,Tr,Iv,gp,Dv,Ju,Tt,br,Sv,wr,Wv,_p,Uv,Bv,Rv,Er,Hv,Kd,Kv,Qv,Vv,$r,Jv,Fr,Gv,Xv,Yv,Kt,xr,Zv,Jo,ek,Qd,tk,ok,vp,nk,sk,ak,ts,rk,os,Gu,Go,ns,kp,Mr,ik,yp,lk,Xu,ht,zr,dk,Tp,ck,pk,bp,hk,mk,jr,uk,Vd,fk,gk,_k,Cr,vk,qr,kk,yk,Tk,$t,Pr,bk,Xo,wk,Jd,Ek,$k,wp,Fk,xk,Mk,ss,zk,as,jk,rs,Yu,Yo,is,Ep,Ar,Ck,$p,qk,Zu,bt,Or,Pk,Fp,Ak,Ok,Lr,Lk,Gd,Nk,Ik,Dk,Nr,Sk,Ir,Wk,Uk,Bk,ct,Dr,Rk,Zo,Hk,Xd,Kk,Qk,xp,Vk,Jk,Gk,ls,Xk,ds,Yk,cs,Zk,ps,e2,hs,ef,en,ms,Mp,Sr,t2,zp,o2,tf,wt,Wr,n2,jp,s2,a2,Ur,r2,Yd,i2,l2,d2,Br,c2,Rr,p2,h2,m2,Qt,Hr,u2,tn,f2,Zd,g2,_2,Cp,v2,k2,y2,us,T2,fs,of,on,gs,qp,Kr,b2,Pp,w2,nf,mt,Qr,E2,Ap,$2,F2,Op,x2,M2,Vr,z2,ec,j2,C2,q2,Jr,P2,Gr,A2,O2,L2,Ft,Xr,N2,nn,I2,tc,D2,S2,Lp,W2,U2,B2,_s,R2,vs,H2,ks,sf,sn,ys,Np,Yr,K2,Ip,Q2,af,Et,Zr,V2,an,J2,Dp,G2,X2,Sp,Y2,Z2,ey,ei,ty,oc,oy,ny,sy,ti,ay,oi,ry,iy,ly,xt,ni,dy,rn,cy,nc,py,hy,Wp,my,uy,fy,Ts,gy,bs,_y,ws,rf,ln,Es,Up,si,vy,Bp,ky,lf,ut,ai,yy,Rp,Ty,by,ri,wy,sc,Ey,$y,Fy,ii,xy,li,My,zy,jy,$s,Cy,Vt,di,qy,dn,Py,ac,Ay,Oy,Hp,Ly,Ny,Iy,Fs,Dy,xs,df,cn,Ms,Kp,ci,Sy,Qp,Wy,cf,tt,pi,Uy,Vp,By,Ry,Jp,Hy,Ky,hi,Qy,rc,Vy,Jy,Gy,mi,Xy,ui,Yy,Zy,eT,zs,tT,Jt,fi,oT,pn,nT,ic,sT,aT,Gp,rT,iT,lT,js,dT,Cs,pf,hn,qs,Xp,gi,cT,Yp,pT,hf,ot,_i,hT,Zp,mT,uT,eh,fT,gT,vi,_T,lc,vT,kT,yT,ki,TT,yi,bT,wT,ET,Ps,$T,Mt,Ti,FT,mn,xT,dc,MT,zT,th,jT,CT,qT,As,PT,Os,AT,Ls,mf,un,Ns,oh,bi,OT,nh,LT,uf,ft,wi,NT,sh,IT,DT,Ei,ST,cc,WT,UT,BT,$i,RT,Fi,HT,KT,QT,Is,VT,zt,xi,JT,fn,GT,pc,XT,YT,ah,ZT,eb,tb,Ds,ob,Ss,nb,Ws,ff,gn,Us,rh,Mi,sb,ih,ab,gf,gt,zi,rb,lh,ib,lb,ji,db,hc,cb,pb,hb,Ci,mb,qi,ub,fb,gb,Bs,_b,Gt,Pi,vb,_n,kb,mc,yb,Tb,dh,bb,wb,Eb,Rs,$b,Hs,_f,vn,Ks,ch,Ai,Fb,ph,xb,vf,nt,Oi,Mb,hh,zb,jb,mh,Cb,qb,Li,Pb,uc,Ab,Ob,Lb,Ni,Nb,Ii,Ib,Db,Sb,Qs,Wb,jt,Di,Ub,kn,Bb,fc,Rb,Hb,uh,Kb,Qb,Vb,Vs,Jb,Js,Gb,Gs,kf,yn,Xs,fh,Si,Xb,gh,Yb,yf,_t,Wi,Zb,Tn,ew,_h,tw,ow,vh,nw,sw,aw,Ui,rw,gc,iw,lw,dw,Bi,cw,Ri,pw,hw,mw,Ys,uw,Ct,Hi,fw,bn,gw,_c,_w,vw,kh,kw,yw,Tw,Zs,bw,ea,ww,ta,Tf,wn,oa,yh,Ki,Ew,Th,$w,bf,st,Qi,Fw,bh,xw,Mw,Vi,zw,vc,jw,Cw,qw,Ji,Pw,Gi,Aw,Ow,Lw,wh,Nw,Iw,mo,Eh,Xi,Dw,Sw,$h,Yi,Ww,Uw,Fh,Zi,Bw,Rw,xh,el,Hw,Kw,Xt,tl,Qw,En,Vw,Mh,Jw,Gw,zh,Xw,Yw,Zw,na,eE,sa,wf,$n,aa,jh,ol,tE,Ch,oE,Ef,Ze,nl,nE,qh,sE,aE,Ph,rE,iE,sl,lE,kc,dE,cE,pE,al,hE,rl,mE,uE,fE,Ah,gE,_E,uo,Oh,il,vE,kE,Lh,ll,yE,TE,Nh,dl,bE,wE,Ih,cl,EE,$E,Yt,pl,FE,Fn,xE,Dh,ME,zE,Sh,jE,CE,qE,ra,PE,ia,$f,xn,la,Wh,hl,AE,Uh,OE,Ff,at,ml,LE,Bh,NE,IE,ul,DE,yc,SE,WE,UE,fl,BE,gl,RE,HE,KE,Rh,QE,VE,fo,Hh,_l,JE,GE,Kh,vl,XE,YE,Qh,kl,ZE,e$,Vh,yl,t$,o$,Zt,Tl,n$,Mn,s$,Jh,a$,r$,Gh,i$,l$,d$,da,c$,ca,xf,zn,pa,Xh,bl,p$,Yh,h$,Mf,rt,wl,m$,El,u$,Zh,f$,g$,_$,$l,v$,Tc,k$,y$,T$,Fl,b$,xl,w$,E$,$$,em,F$,x$,go,tm,Ml,M$,z$,om,zl,j$,C$,nm,jl,q$,P$,sm,Cl,A$,O$,eo,ql,L$,jn,N$,am,I$,D$,rm,S$,W$,U$,ha,B$,ma,zf,Cn,ua,im,Pl,R$,lm,H$,jf,it,Al,K$,dm,Q$,V$,Ol,J$,bc,G$,X$,Y$,Ll,Z$,Nl,e1,t1,o1,cm,n1,s1,_o,pm,Il,a1,r1,hm,Dl,i1,l1,mm,Sl,d1,c1,um,Wl,p1,h1,to,Ul,m1,qn,u1,fm,f1,g1,gm,_1,v1,k1,fa,y1,ga,Cf,Pn,_a,_m,Bl,T1,vm,b1,qf,lt,Rl,w1,km,E1,$1,Hl,F1,wc,x1,M1,z1,Kl,j1,Ql,C1,q1,P1,ym,A1,O1,vo,Tm,Vl,L1,N1,bm,Jl,I1,D1,wm,Gl,S1,W1,Em,Xl,U1,B1,oo,Yl,R1,An,H1,$m,K1,Q1,Fm,V1,J1,G1,va,X1,ka,Pf,On,ya,xm,Zl,Y1,Mm,Z1,Af,et,ed,eF,zm,tF,oF,jm,nF,sF,td,aF,Ec,rF,iF,lF,od,dF,nd,cF,pF,hF,Cm,mF,uF,ko,qm,sd,fF,gF,Pm,ad,_F,vF,Am,rd,kF,yF,Om,id,TF,bF,no,ld,wF,Ln,EF,Lm,$F,FF,Nm,xF,MF,zF,Ta,jF,ba,Of,Nn,wa,Im,dd,CF,Dm,qF,Lf,dt,cd,PF,In,AF,Sm,OF,LF,Wm,NF,IF,DF,pd,SF,$c,WF,UF,BF,hd,RF,md,HF,KF,QF,Um,VF,JF,yo,Bm,ud,GF,XF,Rm,fd,YF,ZF,Hm,gd,e0,t0,Km,_d,o0,n0,so,vd,s0,Dn,a0,Qm,r0,i0,Vm,l0,d0,c0,Ea,p0,$a,Nf;return l=new Se({}),M=new Se({}),We=new Se({}),Ue=new W({props:{name:"class transformers.ElectraConfig",anchor:"transformers.ElectraConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 256"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 1024"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = 'gelu'"},{name:"summary_last_dropout",val:" = 0.1"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ElectraConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ELECTRA model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraModel">ElectraModel</a> or <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.TFElectraModel">TFElectraModel</a>.`,name:"vocab_size"},{anchor:"transformers.ElectraConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraModel">ElectraModel</a> or <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.TFElectraModel">TFElectraModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.ElectraConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/configuration_electra.py#L44"}}),Un=new ce({props:{anchor:"transformers.ElectraConfig.example",$$slots:{default:[gj]},$$scope:{ctx:x}}}),Xa=new Se({}),Ya=new W({props:{name:"class transformers.ElectraTokenizer",anchor:"transformers.ElectraTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/tokenization_electra.py#L62"}}),er=new Se({}),tr=new W({props:{name:"class transformers.ElectraTokenizerFast",anchor:"transformers.ElectraTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/tokenization_electra_fast.py#L83"}}),sr=new Se({}),ar=new W({props:{name:"class transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L702"}}),ir=new W({props:{name:"class transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>tf.Tensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_tf_electra.py#L805"}}),dr=new Se({}),cr=new W({props:{name:"class transformers.ElectraModel",anchor:"transformers.ElectraModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L814"}}),ur=new W({props:{name:"forward",anchor:"transformers.ElectraModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L841",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jn=new Ie({props:{$$slots:{default:[_j]},$$scope:{ctx:x}}}),Gn=new ce({props:{anchor:"transformers.ElectraModel.forward.example",$$slots:{default:[vj]},$$scope:{ctx:x}}}),fr=new Se({}),gr=new W({props:{name:"class transformers.ElectraForPreTraining",anchor:"transformers.ElectraForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L1065"}}),yr=new W({props:{name:"forward",anchor:"transformers.ElectraForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the ELECTRA loss. Input should be a sequence of tokens (see <code>input_ids</code> docstring)
Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates the token is an original token,</li>
<li>1 indicates the token was replaced.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L1074",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"
>transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"
>transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yn=new Ie({props:{$$slots:{default:[kj]},$$scope:{ctx:x}}}),Zn=new ce({props:{anchor:"transformers.ElectraForPreTraining.forward.example",$$slots:{default:[yj]},$$scope:{ctx:x}}}),Tr=new Se({}),br=new W({props:{name:"class transformers.ElectraForCausalLM",anchor:"transformers.ElectraForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L1540"}}),xr=new W({props:{name:"forward",anchor:"transformers.ElectraForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L1559",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ts=new Ie({props:{$$slots:{default:[Tj]},$$scope:{ctx:x}}}),os=new ce({props:{anchor:"transformers.ElectraForCausalLM.forward.example",$$slots:{default:[bj]},$$scope:{ctx:x}}}),Mr=new Se({}),zr=new W({props:{name:"class transformers.ElectraForMaskedLM",anchor:"transformers.ElectraForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L1171"}}),Pr=new W({props:{name:"forward",anchor:"transformers.ElectraForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L1188",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ss=new Ie({props:{$$slots:{default:[wj]},$$scope:{ctx:x}}}),as=new ce({props:{anchor:"transformers.ElectraForMaskedLM.forward.example",$$slots:{default:[Ej]},$$scope:{ctx:x}}}),rs=new ce({props:{anchor:"transformers.ElectraForMaskedLM.forward.example-2",$$slots:{default:[$j]},$$scope:{ctx:x}}}),Ar=new Se({}),Or=new W({props:{name:"class transformers.ElectraForSequenceClassification",anchor:"transformers.ElectraForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L966"}}),Dr=new W({props:{name:"forward",anchor:"transformers.ElectraForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L977",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ls=new Ie({props:{$$slots:{default:[Fj]},$$scope:{ctx:x}}}),ds=new ce({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example",$$slots:{default:[xj]},$$scope:{ctx:x}}}),cs=new ce({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-2",$$slots:{default:[Mj]},$$scope:{ctx:x}}}),ps=new ce({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-3",$$slots:{default:[zj]},$$scope:{ctx:x}}}),hs=new ce({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-4",$$slots:{default:[jj]},$$scope:{ctx:x}}}),Sr=new Se({}),Wr=new W({props:{name:"class transformers.ElectraForMultipleChoice",anchor:"transformers.ElectraForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L1452"}}),Hr=new W({props:{name:"forward",anchor:"transformers.ElectraForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L1463",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),us=new Ie({props:{$$slots:{default:[Cj]},$$scope:{ctx:x}}}),fs=new ce({props:{anchor:"transformers.ElectraForMultipleChoice.forward.example",$$slots:{default:[qj]},$$scope:{ctx:x}}}),Kr=new Se({}),Qr=new W({props:{name:"class transformers.ElectraForTokenClassification",anchor:"transformers.ElectraForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L1261"}}),Xr=new W({props:{name:"forward",anchor:"transformers.ElectraForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L1275",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_s=new Ie({props:{$$slots:{default:[Pj]},$$scope:{ctx:x}}}),vs=new ce({props:{anchor:"transformers.ElectraForTokenClassification.forward.example",$$slots:{default:[Aj]},$$scope:{ctx:x}}}),ks=new ce({props:{anchor:"transformers.ElectraForTokenClassification.forward.example-2",$$slots:{default:[Oj]},$$scope:{ctx:x}}}),Yr=new Se({}),Zr=new W({props:{name:"class transformers.ElectraForQuestionAnswering",anchor:"transformers.ElectraForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L1343"}}),ni=new W({props:{name:"forward",anchor:"transformers.ElectraForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.ElectraForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_electra.py#L1357",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ts=new Ie({props:{$$slots:{default:[Lj]},$$scope:{ctx:x}}}),bs=new ce({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example",$$slots:{default:[Nj]},$$scope:{ctx:x}}}),ws=new ce({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example-2",$$slots:{default:[Ij]},$$scope:{ctx:x}}}),si=new Se({}),ai=new W({props:{name:"class transformers.TFElectraModel",anchor:"transformers.TFElectraModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_tf_electra.py#L930"}}),$s=new Ie({props:{$$slots:{default:[Dj]},$$scope:{ctx:x}}}),di=new W({props:{name:"call",anchor:"transformers.TFElectraModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_tf_electra.py#L936",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fs=new Ie({props:{$$slots:{default:[Sj]},$$scope:{ctx:x}}}),xs=new ce({props:{anchor:"transformers.TFElectraModel.call.example",$$slots:{default:[Wj]},$$scope:{ctx:x}}}),ci=new Se({}),pi=new W({props:{name:"class transformers.TFElectraForPreTraining",anchor:"transformers.TFElectraForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_tf_electra.py#L1027"}}),zs=new Ie({props:{$$slots:{default:[Uj]},$$scope:{ctx:x}}}),fi=new W({props:{name:"call",anchor:"transformers.TFElectraForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_tf_electra.py#L1034",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput"
>transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput"
>transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),js=new Ie({props:{$$slots:{default:[Bj]},$$scope:{ctx:x}}}),Cs=new ce({props:{anchor:"transformers.TFElectraForPreTraining.call.example",$$slots:{default:[Rj]},$$scope:{ctx:x}}}),gi=new Se({}),_i=new W({props:{name:"class transformers.TFElectraForMaskedLM",anchor:"transformers.TFElectraForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_tf_electra.py#L1142"}}),Ps=new Ie({props:{$$slots:{default:[Hj]},$$scope:{ctx:x}}}),Ti=new W({props:{name:"call",anchor:"transformers.TFElectraForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_tf_electra.py#L1164",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),As=new Ie({props:{$$slots:{default:[Kj]},$$scope:{ctx:x}}}),Os=new ce({props:{anchor:"transformers.TFElectraForMaskedLM.call.example",$$slots:{default:[Qj]},$$scope:{ctx:x}}}),Ls=new ce({props:{anchor:"transformers.TFElectraForMaskedLM.call.example-2",$$slots:{default:[Vj]},$$scope:{ctx:x}}}),bi=new Se({}),wi=new W({props:{name:"class transformers.TFElectraForSequenceClassification",anchor:"transformers.TFElectraForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_tf_electra.py#L1269"}}),Is=new Ie({props:{$$slots:{default:[Jj]},$$scope:{ctx:x}}}),xi=new W({props:{name:"call",anchor:"transformers.TFElectraForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_tf_electra.py#L1276",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ds=new Ie({props:{$$slots:{default:[Gj]},$$scope:{ctx:x}}}),Ss=new ce({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example",$$slots:{default:[Xj]},$$scope:{ctx:x}}}),Ws=new ce({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example-2",$$slots:{default:[Yj]},$$scope:{ctx:x}}}),Mi=new Se({}),zi=new W({props:{name:"class transformers.TFElectraForMultipleChoice",anchor:"transformers.TFElectraForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_tf_electra.py#L1348"}}),Bs=new Ie({props:{$$slots:{default:[Zj]},$$scope:{ctx:x}}}),Pi=new W({props:{name:"call",anchor:"transformers.TFElectraForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_tf_electra.py#L1370",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Rs=new Ie({props:{$$slots:{default:[eC]},$$scope:{ctx:x}}}),Hs=new ce({props:{anchor:"transformers.TFElectraForMultipleChoice.call.example",$$slots:{default:[tC]},$$scope:{ctx:x}}}),Ai=new Se({}),Oi=new W({props:{name:"class transformers.TFElectraForTokenClassification",anchor:"transformers.TFElectraForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_tf_electra.py#L1474"}}),Qs=new Ie({props:{$$slots:{default:[oC]},$$scope:{ctx:x}}}),Di=new W({props:{name:"call",anchor:"transformers.TFElectraForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_tf_electra.py#L1487",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vs=new Ie({props:{$$slots:{default:[nC]},$$scope:{ctx:x}}}),Js=new ce({props:{anchor:"transformers.TFElectraForTokenClassification.call.example",$$slots:{default:[sC]},$$scope:{ctx:x}}}),Gs=new ce({props:{anchor:"transformers.TFElectraForTokenClassification.call.example-2",$$slots:{default:[aC]},$$scope:{ctx:x}}}),Si=new Se({}),Wi=new W({props:{name:"class transformers.TFElectraForQuestionAnswering",anchor:"transformers.TFElectraForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_tf_electra.py#L1559"}}),Ys=new Ie({props:{$$slots:{default:[rC]},$$scope:{ctx:x}}}),Hi=new W({props:{name:"call",anchor:"transformers.TFElectraForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFElectraForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_tf_electra.py#L1569",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zs=new Ie({props:{$$slots:{default:[iC]},$$scope:{ctx:x}}}),ea=new ce({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example",$$slots:{default:[lC]},$$scope:{ctx:x}}}),ta=new ce({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example-2",$$slots:{default:[dC]},$$scope:{ctx:x}}}),Ki=new Se({}),Qi=new W({props:{name:"class transformers.FlaxElectraModel",anchor:"transformers.FlaxElectraModel",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_flax_electra.py#L923"}}),tl=new W({props:{name:"__call__",anchor:"transformers.FlaxElectraModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),na=new Ie({props:{$$slots:{default:[cC]},$$scope:{ctx:x}}}),sa=new ce({props:{anchor:"transformers.FlaxElectraModel.__call__.example",$$slots:{default:[pC]},$$scope:{ctx:x}}}),ol=new Se({}),nl=new W({props:{name:"class transformers.FlaxElectraForPreTraining",anchor:"transformers.FlaxElectraForPreTraining",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_flax_electra.py#L1078"}}),pl=new W({props:{name:"__call__",anchor:"transformers.FlaxElectraForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <code>transformers.models.electra.modeling_flax_electra.FlaxElectraForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
`}}),ra=new Ie({props:{$$slots:{default:[hC]},$$scope:{ctx:x}}}),ia=new ce({props:{anchor:"transformers.FlaxElectraForPreTraining.__call__.example",$$slots:{default:[mC]},$$scope:{ctx:x}}}),hl=new Se({}),ml=new W({props:{name:"class transformers.FlaxElectraForCausalLM",anchor:"transformers.FlaxElectraForCausalLM",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_flax_electra.py#L1576"}}),Tl=new W({props:{name:"__call__",anchor:"transformers.FlaxElectraForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),da=new Ie({props:{$$slots:{default:[uC]},$$scope:{ctx:x}}}),ca=new ce({props:{anchor:"transformers.FlaxElectraForCausalLM.__call__.example",$$slots:{default:[fC]},$$scope:{ctx:x}}}),bl=new Se({}),wl=new W({props:{name:"class transformers.FlaxElectraForMaskedLM",anchor:"transformers.FlaxElectraForMaskedLM",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_flax_electra.py#L1012"}}),ql=new W({props:{name:"__call__",anchor:"transformers.FlaxElectraForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ha=new Ie({props:{$$slots:{default:[gC]},$$scope:{ctx:x}}}),ma=new ce({props:{anchor:"transformers.FlaxElectraForMaskedLM.__call__.example",$$slots:{default:[_C]},$$scope:{ctx:x}}}),Pl=new Se({}),Al=new W({props:{name:"class transformers.FlaxElectraForSequenceClassification",anchor:"transformers.FlaxElectraForSequenceClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_flax_electra.py#L1491"}}),Ul=new W({props:{name:"__call__",anchor:"transformers.FlaxElectraForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fa=new Ie({props:{$$slots:{default:[vC]},$$scope:{ctx:x}}}),ga=new ce({props:{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.example",$$slots:{default:[kC]},$$scope:{ctx:x}}}),Bl=new Se({}),Rl=new W({props:{name:"class transformers.FlaxElectraForMultipleChoice",anchor:"transformers.FlaxElectraForMultipleChoice",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_flax_electra.py#L1321"}}),Yl=new W({props:{name:"__call__",anchor:"transformers.FlaxElectraForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),va=new Ie({props:{$$slots:{default:[yC]},$$scope:{ctx:x}}}),ka=new ce({props:{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.example",$$slots:{default:[TC]},$$scope:{ctx:x}}}),Zl=new Se({}),ed=new W({props:{name:"class transformers.FlaxElectraForTokenClassification",anchor:"transformers.FlaxElectraForTokenClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_flax_electra.py#L1173"}}),ld=new W({props:{name:"__call__",anchor:"transformers.FlaxElectraForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ta=new Ie({props:{$$slots:{default:[bC]},$$scope:{ctx:x}}}),ba=new ce({props:{anchor:"transformers.FlaxElectraForTokenClassification.__call__.example",$$slots:{default:[wC]},$$scope:{ctx:x}}}),dd=new Se({}),cd=new W({props:{name:"class transformers.FlaxElectraForQuestionAnswering",anchor:"transformers.FlaxElectraForQuestionAnswering",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_flax_electra.py#L1397"}}),vd=new W({props:{name:"__call__",anchor:"transformers.FlaxElectraForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ea=new Ie({props:{$$slots:{default:[EC]},$$scope:{ctx:x}}}),$a=new ce({props:{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.example",$$slots:{default:[$C]},$$scope:{ctx:x}}}),{c(){d=a("meta"),g=p(),c=a("h1"),f=a("a"),k=a("span"),T(l.$$.fragment),m=p(),z=a("span"),Te=n("ELECTRA"),fe=p(),S=a("h2"),ae=a("a"),ee=a("span"),T(M.$$.fragment),be=p(),K=a("span"),we=n("Overview"),ge=p(),U=a("p"),Ee=n("The ELECTRA model was proposed in the paper "),re=a("a"),Q=n(`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
Generators`),$e=n(`. ELECTRA is a new pretraining approach which trains two
transformer models: the generator and the discriminator. The generator\u2019s role is to replace tokens in a sequence, and
is therefore trained as a masked language model. The discriminator, which is the model we\u2019re interested in, tries to
identify which tokens were replaced by the generator in the sequence.`),_e=p(),R=a("p"),Fe=n("The abstract from the paper is the following:"),ve=p(),H=a("p"),me=a("em"),xe=n(`Masked language modeling (MLM) pretraining methods such as BERT corrupt the input by replacing some tokens with [MASK]
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
using the same amount of compute.`),oe=p(),q=a("p"),A=n("Tips:"),ke=p(),B=a("ul"),ue=a("li"),Me=n(`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),V=p(),ne=a("li"),ze=n("The ELECTRA checkpoints saved using "),P=a("a"),je=n("Google Research\u2019s implementation"),J=n(`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),ie=a("a"),Ce=n("ElectraForMaskedLM"),G=n(` model, and the generator may be loaded in the
`),le=a("a"),qe=n("ElectraForPreTraining"),I=n(` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),ye=p(),D=a("p"),Pe=n("This model was contributed by "),Z=a("a"),O=n("lysandre"),Ae=n(". The original code can be found "),L=a("a"),Oe=n("here"),Le=n("."),y=p(),j=a("h2"),De=a("a"),te=a("span"),T(We.$$.fragment),Qe=p(),C=a("span"),Ve=n("ElectraConfig"),Ke=p(),de=a("div"),T(Ue.$$.fragment),Je=p(),N=a("p"),X=n("This is the configuration class to store the configuration of a "),Re=a("a"),Ge=n("ElectraModel"),Y=n(" or a "),He=a("a"),Xe=n("TFElectraModel"),Ne=n(`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),Be=a("a"),se=n("google/electra-small-discriminator"),Ye=n(" architecture."),n_=p(),Io=a("p"),s_=n("Configuration objects inherit from "),qd=a("a"),a_=n("PretrainedConfig"),r_=n(` and can be used to control the model outputs. Read the
documentation from `),Pd=a("a"),i_=n("PretrainedConfig"),l_=n(" for more information."),d_=p(),T(Un.$$.fragment),Nu=p(),Do=a("h2"),Bn=a("a"),Yc=a("span"),T(Xa.$$.fragment),c_=p(),Zc=a("span"),p_=n("ElectraTokenizer"),Iu=p(),Ut=a("div"),T(Ya.$$.fragment),h_=p(),ep=a("p"),m_=n("Construct an ELECTRA tokenizer."),u_=p(),Rn=a("p"),Ad=a("a"),f_=n("ElectraTokenizer"),g_=n(" is identical to "),Od=a("a"),__=n("BertTokenizer"),v_=n(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),k_=p(),Za=a("p"),y_=n("Refer to superclass "),Ld=a("a"),T_=n("BertTokenizer"),b_=n(" for usage examples and documentation concerning parameters."),Du=p(),So=a("h2"),Hn=a("a"),tp=a("span"),T(er.$$.fragment),w_=p(),op=a("span"),E_=n("ElectraTokenizerFast"),Su=p(),Bt=a("div"),T(tr.$$.fragment),$_=p(),or=a("p"),F_=n("Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),np=a("em"),x_=n("tokenizers"),M_=n(" library)."),z_=p(),Kn=a("p"),Nd=a("a"),j_=n("ElectraTokenizerFast"),C_=n(" is identical to "),Id=a("a"),q_=n("BertTokenizerFast"),P_=n(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),A_=p(),nr=a("p"),O_=n("Refer to superclass "),Dd=a("a"),L_=n("BertTokenizerFast"),N_=n(" for usage examples and documentation concerning parameters."),Wu=p(),Wo=a("h2"),Qn=a("a"),sp=a("span"),T(sr.$$.fragment),I_=p(),ap=a("span"),D_=n("Electra specific outputs"),Uu=p(),Uo=a("div"),T(ar.$$.fragment),S_=p(),rr=a("p"),W_=n("Output type of "),Sd=a("a"),U_=n("ElectraForPreTraining"),B_=n("."),Bu=p(),Bo=a("div"),T(ir.$$.fragment),R_=p(),lr=a("p"),H_=n("Output type of "),Wd=a("a"),K_=n("TFElectraForPreTraining"),Q_=n("."),Ru=p(),Ro=a("h2"),Vn=a("a"),rp=a("span"),T(dr.$$.fragment),V_=p(),ip=a("span"),J_=n("ElectraModel"),Hu=p(),yt=a("div"),T(cr.$$.fragment),G_=p(),lp=a("p"),X_=n("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),Y_=p(),pr=a("p"),Z_=n("This model inherits from "),Ud=a("a"),ev=n("PreTrainedModel"),tv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ov=p(),hr=a("p"),nv=n("This model is also a PyTorch "),mr=a("a"),sv=n("torch.nn.Module"),av=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rv=p(),Rt=a("div"),T(ur.$$.fragment),iv=p(),Ho=a("p"),lv=n("The "),Bd=a("a"),dv=n("ElectraModel"),cv=n(" forward method, overrides the "),dp=a("code"),pv=n("__call__"),hv=n(" special method."),mv=p(),T(Jn.$$.fragment),uv=p(),T(Gn.$$.fragment),Ku=p(),Ko=a("h2"),Xn=a("a"),cp=a("span"),T(fr.$$.fragment),fv=p(),pp=a("span"),gv=n("ElectraForPreTraining"),Qu=p(),pt=a("div"),T(gr.$$.fragment),_v=p(),hp=a("p"),vv=n("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),kv=p(),mp=a("p"),yv=n("It is recommended to load the discriminator checkpoint into that model."),Tv=p(),_r=a("p"),bv=n("This model inherits from "),Rd=a("a"),wv=n("PreTrainedModel"),Ev=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$v=p(),vr=a("p"),Fv=n("This model is also a PyTorch "),kr=a("a"),xv=n("torch.nn.Module"),Mv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zv=p(),Ht=a("div"),T(yr.$$.fragment),jv=p(),Qo=a("p"),Cv=n("The "),Hd=a("a"),qv=n("ElectraForPreTraining"),Pv=n(" forward method, overrides the "),up=a("code"),Av=n("__call__"),Ov=n(" special method."),Lv=p(),T(Yn.$$.fragment),Nv=p(),T(Zn.$$.fragment),Vu=p(),Vo=a("h2"),es=a("a"),fp=a("span"),T(Tr.$$.fragment),Iv=p(),gp=a("span"),Dv=n("ElectraForCausalLM"),Ju=p(),Tt=a("div"),T(br.$$.fragment),Sv=p(),wr=a("p"),Wv=n("ELECTRA Model with a "),_p=a("code"),Uv=n("language modeling"),Bv=n(" head on top for CLM fine-tuning."),Rv=p(),Er=a("p"),Hv=n("This model inherits from "),Kd=a("a"),Kv=n("PreTrainedModel"),Qv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vv=p(),$r=a("p"),Jv=n("This model is also a PyTorch "),Fr=a("a"),Gv=n("torch.nn.Module"),Xv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yv=p(),Kt=a("div"),T(xr.$$.fragment),Zv=p(),Jo=a("p"),ek=n("The "),Qd=a("a"),tk=n("ElectraForCausalLM"),ok=n(" forward method, overrides the "),vp=a("code"),nk=n("__call__"),sk=n(" special method."),ak=p(),T(ts.$$.fragment),rk=p(),T(os.$$.fragment),Gu=p(),Go=a("h2"),ns=a("a"),kp=a("span"),T(Mr.$$.fragment),ik=p(),yp=a("span"),lk=n("ElectraForMaskedLM"),Xu=p(),ht=a("div"),T(zr.$$.fragment),dk=p(),Tp=a("p"),ck=n("Electra model with a language modeling head on top."),pk=p(),bp=a("p"),hk=n(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),mk=p(),jr=a("p"),uk=n("This model inherits from "),Vd=a("a"),fk=n("PreTrainedModel"),gk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_k=p(),Cr=a("p"),vk=n("This model is also a PyTorch "),qr=a("a"),kk=n("torch.nn.Module"),yk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tk=p(),$t=a("div"),T(Pr.$$.fragment),bk=p(),Xo=a("p"),wk=n("The "),Jd=a("a"),Ek=n("ElectraForMaskedLM"),$k=n(" forward method, overrides the "),wp=a("code"),Fk=n("__call__"),xk=n(" special method."),Mk=p(),T(ss.$$.fragment),zk=p(),T(as.$$.fragment),jk=p(),T(rs.$$.fragment),Yu=p(),Yo=a("h2"),is=a("a"),Ep=a("span"),T(Ar.$$.fragment),Ck=p(),$p=a("span"),qk=n("ElectraForSequenceClassification"),Zu=p(),bt=a("div"),T(Or.$$.fragment),Pk=p(),Fp=a("p"),Ak=n(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ok=p(),Lr=a("p"),Lk=n("This model inherits from "),Gd=a("a"),Nk=n("PreTrainedModel"),Ik=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dk=p(),Nr=a("p"),Sk=n("This model is also a PyTorch "),Ir=a("a"),Wk=n("torch.nn.Module"),Uk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bk=p(),ct=a("div"),T(Dr.$$.fragment),Rk=p(),Zo=a("p"),Hk=n("The "),Xd=a("a"),Kk=n("ElectraForSequenceClassification"),Qk=n(" forward method, overrides the "),xp=a("code"),Vk=n("__call__"),Jk=n(" special method."),Gk=p(),T(ls.$$.fragment),Xk=p(),T(ds.$$.fragment),Yk=p(),T(cs.$$.fragment),Zk=p(),T(ps.$$.fragment),e2=p(),T(hs.$$.fragment),ef=p(),en=a("h2"),ms=a("a"),Mp=a("span"),T(Sr.$$.fragment),t2=p(),zp=a("span"),o2=n("ElectraForMultipleChoice"),tf=p(),wt=a("div"),T(Wr.$$.fragment),n2=p(),jp=a("p"),s2=n(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),a2=p(),Ur=a("p"),r2=n("This model inherits from "),Yd=a("a"),i2=n("PreTrainedModel"),l2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),d2=p(),Br=a("p"),c2=n("This model is also a PyTorch "),Rr=a("a"),p2=n("torch.nn.Module"),h2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),m2=p(),Qt=a("div"),T(Hr.$$.fragment),u2=p(),tn=a("p"),f2=n("The "),Zd=a("a"),g2=n("ElectraForMultipleChoice"),_2=n(" forward method, overrides the "),Cp=a("code"),v2=n("__call__"),k2=n(" special method."),y2=p(),T(us.$$.fragment),T2=p(),T(fs.$$.fragment),of=p(),on=a("h2"),gs=a("a"),qp=a("span"),T(Kr.$$.fragment),b2=p(),Pp=a("span"),w2=n("ElectraForTokenClassification"),nf=p(),mt=a("div"),T(Qr.$$.fragment),E2=p(),Ap=a("p"),$2=n("Electra model with a token classification head on top."),F2=p(),Op=a("p"),x2=n("Both the discriminator and generator may be loaded into this model."),M2=p(),Vr=a("p"),z2=n("This model inherits from "),ec=a("a"),j2=n("PreTrainedModel"),C2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),q2=p(),Jr=a("p"),P2=n("This model is also a PyTorch "),Gr=a("a"),A2=n("torch.nn.Module"),O2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),L2=p(),Ft=a("div"),T(Xr.$$.fragment),N2=p(),nn=a("p"),I2=n("The "),tc=a("a"),D2=n("ElectraForTokenClassification"),S2=n(" forward method, overrides the "),Lp=a("code"),W2=n("__call__"),U2=n(" special method."),B2=p(),T(_s.$$.fragment),R2=p(),T(vs.$$.fragment),H2=p(),T(ks.$$.fragment),sf=p(),sn=a("h2"),ys=a("a"),Np=a("span"),T(Yr.$$.fragment),K2=p(),Ip=a("span"),Q2=n("ElectraForQuestionAnswering"),af=p(),Et=a("div"),T(Zr.$$.fragment),V2=p(),an=a("p"),J2=n(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Dp=a("code"),G2=n("span start logits"),X2=n(" and "),Sp=a("code"),Y2=n("span end logits"),Z2=n(")."),ey=p(),ei=a("p"),ty=n("This model inherits from "),oc=a("a"),oy=n("PreTrainedModel"),ny=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sy=p(),ti=a("p"),ay=n("This model is also a PyTorch "),oi=a("a"),ry=n("torch.nn.Module"),iy=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ly=p(),xt=a("div"),T(ni.$$.fragment),dy=p(),rn=a("p"),cy=n("The "),nc=a("a"),py=n("ElectraForQuestionAnswering"),hy=n(" forward method, overrides the "),Wp=a("code"),my=n("__call__"),uy=n(" special method."),fy=p(),T(Ts.$$.fragment),gy=p(),T(bs.$$.fragment),_y=p(),T(ws.$$.fragment),rf=p(),ln=a("h2"),Es=a("a"),Up=a("span"),T(si.$$.fragment),vy=p(),Bp=a("span"),ky=n("TFElectraModel"),lf=p(),ut=a("div"),T(ai.$$.fragment),yy=p(),Rp=a("p"),Ty=n("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),by=p(),ri=a("p"),wy=n("This model inherits from "),sc=a("a"),Ey=n("TFPreTrainedModel"),$y=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fy=p(),ii=a("p"),xy=n("This model is also a "),li=a("a"),My=n("tf.keras.Model"),zy=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jy=p(),T($s.$$.fragment),Cy=p(),Vt=a("div"),T(di.$$.fragment),qy=p(),dn=a("p"),Py=n("The "),ac=a("a"),Ay=n("TFElectraModel"),Oy=n(" forward method, overrides the "),Hp=a("code"),Ly=n("__call__"),Ny=n(" special method."),Iy=p(),T(Fs.$$.fragment),Dy=p(),T(xs.$$.fragment),df=p(),cn=a("h2"),Ms=a("a"),Kp=a("span"),T(ci.$$.fragment),Sy=p(),Qp=a("span"),Wy=n("TFElectraForPreTraining"),cf=p(),tt=a("div"),T(pi.$$.fragment),Uy=p(),Vp=a("p"),By=n("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),Ry=p(),Jp=a("p"),Hy=n(`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),Ky=p(),hi=a("p"),Qy=n("This model inherits from "),rc=a("a"),Vy=n("TFPreTrainedModel"),Jy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gy=p(),mi=a("p"),Xy=n("This model is also a "),ui=a("a"),Yy=n("tf.keras.Model"),Zy=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),eT=p(),T(zs.$$.fragment),tT=p(),Jt=a("div"),T(fi.$$.fragment),oT=p(),pn=a("p"),nT=n("The "),ic=a("a"),sT=n("TFElectraForPreTraining"),aT=n(" forward method, overrides the "),Gp=a("code"),rT=n("__call__"),iT=n(" special method."),lT=p(),T(js.$$.fragment),dT=p(),T(Cs.$$.fragment),pf=p(),hn=a("h2"),qs=a("a"),Xp=a("span"),T(gi.$$.fragment),cT=p(),Yp=a("span"),pT=n("TFElectraForMaskedLM"),hf=p(),ot=a("div"),T(_i.$$.fragment),hT=p(),Zp=a("p"),mT=n("Electra model with a language modeling head on top."),uT=p(),eh=a("p"),fT=n(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),gT=p(),vi=a("p"),_T=n("This model inherits from "),lc=a("a"),vT=n("TFPreTrainedModel"),kT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yT=p(),ki=a("p"),TT=n("This model is also a "),yi=a("a"),bT=n("tf.keras.Model"),wT=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ET=p(),T(Ps.$$.fragment),$T=p(),Mt=a("div"),T(Ti.$$.fragment),FT=p(),mn=a("p"),xT=n("The "),dc=a("a"),MT=n("TFElectraForMaskedLM"),zT=n(" forward method, overrides the "),th=a("code"),jT=n("__call__"),CT=n(" special method."),qT=p(),T(As.$$.fragment),PT=p(),T(Os.$$.fragment),AT=p(),T(Ls.$$.fragment),mf=p(),un=a("h2"),Ns=a("a"),oh=a("span"),T(bi.$$.fragment),OT=p(),nh=a("span"),LT=n("TFElectraForSequenceClassification"),uf=p(),ft=a("div"),T(wi.$$.fragment),NT=p(),sh=a("p"),IT=n(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),DT=p(),Ei=a("p"),ST=n("This model inherits from "),cc=a("a"),WT=n("TFPreTrainedModel"),UT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),BT=p(),$i=a("p"),RT=n("This model is also a "),Fi=a("a"),HT=n("tf.keras.Model"),KT=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),QT=p(),T(Is.$$.fragment),VT=p(),zt=a("div"),T(xi.$$.fragment),JT=p(),fn=a("p"),GT=n("The "),pc=a("a"),XT=n("TFElectraForSequenceClassification"),YT=n(" forward method, overrides the "),ah=a("code"),ZT=n("__call__"),eb=n(" special method."),tb=p(),T(Ds.$$.fragment),ob=p(),T(Ss.$$.fragment),nb=p(),T(Ws.$$.fragment),ff=p(),gn=a("h2"),Us=a("a"),rh=a("span"),T(Mi.$$.fragment),sb=p(),ih=a("span"),ab=n("TFElectraForMultipleChoice"),gf=p(),gt=a("div"),T(zi.$$.fragment),rb=p(),lh=a("p"),ib=n(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),lb=p(),ji=a("p"),db=n("This model inherits from "),hc=a("a"),cb=n("TFPreTrainedModel"),pb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hb=p(),Ci=a("p"),mb=n("This model is also a "),qi=a("a"),ub=n("tf.keras.Model"),fb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gb=p(),T(Bs.$$.fragment),_b=p(),Gt=a("div"),T(Pi.$$.fragment),vb=p(),_n=a("p"),kb=n("The "),mc=a("a"),yb=n("TFElectraForMultipleChoice"),Tb=n(" forward method, overrides the "),dh=a("code"),bb=n("__call__"),wb=n(" special method."),Eb=p(),T(Rs.$$.fragment),$b=p(),T(Hs.$$.fragment),_f=p(),vn=a("h2"),Ks=a("a"),ch=a("span"),T(Ai.$$.fragment),Fb=p(),ph=a("span"),xb=n("TFElectraForTokenClassification"),vf=p(),nt=a("div"),T(Oi.$$.fragment),Mb=p(),hh=a("p"),zb=n("Electra model with a token classification head on top."),jb=p(),mh=a("p"),Cb=n("Both the discriminator and generator may be loaded into this model."),qb=p(),Li=a("p"),Pb=n("This model inherits from "),uc=a("a"),Ab=n("TFPreTrainedModel"),Ob=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lb=p(),Ni=a("p"),Nb=n("This model is also a "),Ii=a("a"),Ib=n("tf.keras.Model"),Db=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sb=p(),T(Qs.$$.fragment),Wb=p(),jt=a("div"),T(Di.$$.fragment),Ub=p(),kn=a("p"),Bb=n("The "),fc=a("a"),Rb=n("TFElectraForTokenClassification"),Hb=n(" forward method, overrides the "),uh=a("code"),Kb=n("__call__"),Qb=n(" special method."),Vb=p(),T(Vs.$$.fragment),Jb=p(),T(Js.$$.fragment),Gb=p(),T(Gs.$$.fragment),kf=p(),yn=a("h2"),Xs=a("a"),fh=a("span"),T(Si.$$.fragment),Xb=p(),gh=a("span"),Yb=n("TFElectraForQuestionAnswering"),yf=p(),_t=a("div"),T(Wi.$$.fragment),Zb=p(),Tn=a("p"),ew=n(`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),_h=a("code"),tw=n("span start logits"),ow=n(" and "),vh=a("code"),nw=n("span end logits"),sw=n(")."),aw=p(),Ui=a("p"),rw=n("This model inherits from "),gc=a("a"),iw=n("TFPreTrainedModel"),lw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dw=p(),Bi=a("p"),cw=n("This model is also a "),Ri=a("a"),pw=n("tf.keras.Model"),hw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mw=p(),T(Ys.$$.fragment),uw=p(),Ct=a("div"),T(Hi.$$.fragment),fw=p(),bn=a("p"),gw=n("The "),_c=a("a"),_w=n("TFElectraForQuestionAnswering"),vw=n(" forward method, overrides the "),kh=a("code"),kw=n("__call__"),yw=n(" special method."),Tw=p(),T(Zs.$$.fragment),bw=p(),T(ea.$$.fragment),ww=p(),T(ta.$$.fragment),Tf=p(),wn=a("h2"),oa=a("a"),yh=a("span"),T(Ki.$$.fragment),Ew=p(),Th=a("span"),$w=n("FlaxElectraModel"),bf=p(),st=a("div"),T(Qi.$$.fragment),Fw=p(),bh=a("p"),xw=n("The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),Mw=p(),Vi=a("p"),zw=n("This model inherits from "),vc=a("a"),jw=n("FlaxPreTrainedModel"),Cw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),qw=p(),Ji=a("p"),Pw=n(`This model is also a Flax Linen
`),Gi=a("a"),Aw=n("flax.nn.Module"),Ow=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Lw=p(),wh=a("p"),Nw=n("Finally, this model supports inherent JAX features such as:"),Iw=p(),mo=a("ul"),Eh=a("li"),Xi=a("a"),Dw=n("Just-In-Time (JIT) compilation"),Sw=p(),$h=a("li"),Yi=a("a"),Ww=n("Automatic Differentiation"),Uw=p(),Fh=a("li"),Zi=a("a"),Bw=n("Vectorization"),Rw=p(),xh=a("li"),el=a("a"),Hw=n("Parallelization"),Kw=p(),Xt=a("div"),T(tl.$$.fragment),Qw=p(),En=a("p"),Vw=n("The "),Mh=a("code"),Jw=n("FlaxElectraPreTrainedModel"),Gw=n(" forward method, overrides the "),zh=a("code"),Xw=n("__call__"),Yw=n(" special method."),Zw=p(),T(na.$$.fragment),eE=p(),T(sa.$$.fragment),wf=p(),$n=a("h2"),aa=a("a"),jh=a("span"),T(ol.$$.fragment),tE=p(),Ch=a("span"),oE=n("FlaxElectraForPreTraining"),Ef=p(),Ze=a("div"),T(nl.$$.fragment),nE=p(),qh=a("p"),sE=n("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),aE=p(),Ph=a("p"),rE=n("It is recommended to load the discriminator checkpoint into that model."),iE=p(),sl=a("p"),lE=n("This model inherits from "),kc=a("a"),dE=n("FlaxPreTrainedModel"),cE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pE=p(),al=a("p"),hE=n(`This model is also a Flax Linen
`),rl=a("a"),mE=n("flax.nn.Module"),uE=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fE=p(),Ah=a("p"),gE=n("Finally, this model supports inherent JAX features such as:"),_E=p(),uo=a("ul"),Oh=a("li"),il=a("a"),vE=n("Just-In-Time (JIT) compilation"),kE=p(),Lh=a("li"),ll=a("a"),yE=n("Automatic Differentiation"),TE=p(),Nh=a("li"),dl=a("a"),bE=n("Vectorization"),wE=p(),Ih=a("li"),cl=a("a"),EE=n("Parallelization"),$E=p(),Yt=a("div"),T(pl.$$.fragment),FE=p(),Fn=a("p"),xE=n("The "),Dh=a("code"),ME=n("FlaxElectraPreTrainedModel"),zE=n(" forward method, overrides the "),Sh=a("code"),jE=n("__call__"),CE=n(" special method."),qE=p(),T(ra.$$.fragment),PE=p(),T(ia.$$.fragment),$f=p(),xn=a("h2"),la=a("a"),Wh=a("span"),T(hl.$$.fragment),AE=p(),Uh=a("span"),OE=n("FlaxElectraForCausalLM"),Ff=p(),at=a("div"),T(ml.$$.fragment),LE=p(),Bh=a("p"),NE=n(`Electra Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),IE=p(),ul=a("p"),DE=n("This model inherits from "),yc=a("a"),SE=n("FlaxPreTrainedModel"),WE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),UE=p(),fl=a("p"),BE=n(`This model is also a Flax Linen
`),gl=a("a"),RE=n("flax.nn.Module"),HE=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),KE=p(),Rh=a("p"),QE=n("Finally, this model supports inherent JAX features such as:"),VE=p(),fo=a("ul"),Hh=a("li"),_l=a("a"),JE=n("Just-In-Time (JIT) compilation"),GE=p(),Kh=a("li"),vl=a("a"),XE=n("Automatic Differentiation"),YE=p(),Qh=a("li"),kl=a("a"),ZE=n("Vectorization"),e$=p(),Vh=a("li"),yl=a("a"),t$=n("Parallelization"),o$=p(),Zt=a("div"),T(Tl.$$.fragment),n$=p(),Mn=a("p"),s$=n("The "),Jh=a("code"),a$=n("FlaxElectraPreTrainedModel"),r$=n(" forward method, overrides the "),Gh=a("code"),i$=n("__call__"),l$=n(" special method."),d$=p(),T(da.$$.fragment),c$=p(),T(ca.$$.fragment),xf=p(),zn=a("h2"),pa=a("a"),Xh=a("span"),T(bl.$$.fragment),p$=p(),Yh=a("span"),h$=n("FlaxElectraForMaskedLM"),Mf=p(),rt=a("div"),T(wl.$$.fragment),m$=p(),El=a("p"),u$=n("Electra Model with a "),Zh=a("code"),f$=n("language modeling"),g$=n(" head on top."),_$=p(),$l=a("p"),v$=n("This model inherits from "),Tc=a("a"),k$=n("FlaxPreTrainedModel"),y$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),T$=p(),Fl=a("p"),b$=n(`This model is also a Flax Linen
`),xl=a("a"),w$=n("flax.nn.Module"),E$=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$$=p(),em=a("p"),F$=n("Finally, this model supports inherent JAX features such as:"),x$=p(),go=a("ul"),tm=a("li"),Ml=a("a"),M$=n("Just-In-Time (JIT) compilation"),z$=p(),om=a("li"),zl=a("a"),j$=n("Automatic Differentiation"),C$=p(),nm=a("li"),jl=a("a"),q$=n("Vectorization"),P$=p(),sm=a("li"),Cl=a("a"),A$=n("Parallelization"),O$=p(),eo=a("div"),T(ql.$$.fragment),L$=p(),jn=a("p"),N$=n("The "),am=a("code"),I$=n("FlaxElectraPreTrainedModel"),D$=n(" forward method, overrides the "),rm=a("code"),S$=n("__call__"),W$=n(" special method."),U$=p(),T(ha.$$.fragment),B$=p(),T(ma.$$.fragment),zf=p(),Cn=a("h2"),ua=a("a"),im=a("span"),T(Pl.$$.fragment),R$=p(),lm=a("span"),H$=n("FlaxElectraForSequenceClassification"),jf=p(),it=a("div"),T(Al.$$.fragment),K$=p(),dm=a("p"),Q$=n(`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),V$=p(),Ol=a("p"),J$=n("This model inherits from "),bc=a("a"),G$=n("FlaxPreTrainedModel"),X$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Y$=p(),Ll=a("p"),Z$=n(`This model is also a Flax Linen
`),Nl=a("a"),e1=n("flax.nn.Module"),t1=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),o1=p(),cm=a("p"),n1=n("Finally, this model supports inherent JAX features such as:"),s1=p(),_o=a("ul"),pm=a("li"),Il=a("a"),a1=n("Just-In-Time (JIT) compilation"),r1=p(),hm=a("li"),Dl=a("a"),i1=n("Automatic Differentiation"),l1=p(),mm=a("li"),Sl=a("a"),d1=n("Vectorization"),c1=p(),um=a("li"),Wl=a("a"),p1=n("Parallelization"),h1=p(),to=a("div"),T(Ul.$$.fragment),m1=p(),qn=a("p"),u1=n("The "),fm=a("code"),f1=n("FlaxElectraPreTrainedModel"),g1=n(" forward method, overrides the "),gm=a("code"),_1=n("__call__"),v1=n(" special method."),k1=p(),T(fa.$$.fragment),y1=p(),T(ga.$$.fragment),Cf=p(),Pn=a("h2"),_a=a("a"),_m=a("span"),T(Bl.$$.fragment),T1=p(),vm=a("span"),b1=n("FlaxElectraForMultipleChoice"),qf=p(),lt=a("div"),T(Rl.$$.fragment),w1=p(),km=a("p"),E1=n(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),$1=p(),Hl=a("p"),F1=n("This model inherits from "),wc=a("a"),x1=n("FlaxPreTrainedModel"),M1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),z1=p(),Kl=a("p"),j1=n(`This model is also a Flax Linen
`),Ql=a("a"),C1=n("flax.nn.Module"),q1=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),P1=p(),ym=a("p"),A1=n("Finally, this model supports inherent JAX features such as:"),O1=p(),vo=a("ul"),Tm=a("li"),Vl=a("a"),L1=n("Just-In-Time (JIT) compilation"),N1=p(),bm=a("li"),Jl=a("a"),I1=n("Automatic Differentiation"),D1=p(),wm=a("li"),Gl=a("a"),S1=n("Vectorization"),W1=p(),Em=a("li"),Xl=a("a"),U1=n("Parallelization"),B1=p(),oo=a("div"),T(Yl.$$.fragment),R1=p(),An=a("p"),H1=n("The "),$m=a("code"),K1=n("FlaxElectraPreTrainedModel"),Q1=n(" forward method, overrides the "),Fm=a("code"),V1=n("__call__"),J1=n(" special method."),G1=p(),T(va.$$.fragment),X1=p(),T(ka.$$.fragment),Pf=p(),On=a("h2"),ya=a("a"),xm=a("span"),T(Zl.$$.fragment),Y1=p(),Mm=a("span"),Z1=n("FlaxElectraForTokenClassification"),Af=p(),et=a("div"),T(ed.$$.fragment),eF=p(),zm=a("p"),tF=n("Electra model with a token classification head on top."),oF=p(),jm=a("p"),nF=n("Both the discriminator and generator may be loaded into this model."),sF=p(),td=a("p"),aF=n("This model inherits from "),Ec=a("a"),rF=n("FlaxPreTrainedModel"),iF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),lF=p(),od=a("p"),dF=n(`This model is also a Flax Linen
`),nd=a("a"),cF=n("flax.nn.Module"),pF=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),hF=p(),Cm=a("p"),mF=n("Finally, this model supports inherent JAX features such as:"),uF=p(),ko=a("ul"),qm=a("li"),sd=a("a"),fF=n("Just-In-Time (JIT) compilation"),gF=p(),Pm=a("li"),ad=a("a"),_F=n("Automatic Differentiation"),vF=p(),Am=a("li"),rd=a("a"),kF=n("Vectorization"),yF=p(),Om=a("li"),id=a("a"),TF=n("Parallelization"),bF=p(),no=a("div"),T(ld.$$.fragment),wF=p(),Ln=a("p"),EF=n("The "),Lm=a("code"),$F=n("FlaxElectraPreTrainedModel"),FF=n(" forward method, overrides the "),Nm=a("code"),xF=n("__call__"),MF=n(" special method."),zF=p(),T(Ta.$$.fragment),jF=p(),T(ba.$$.fragment),Of=p(),Nn=a("h2"),wa=a("a"),Im=a("span"),T(dd.$$.fragment),CF=p(),Dm=a("span"),qF=n("FlaxElectraForQuestionAnswering"),Lf=p(),dt=a("div"),T(cd.$$.fragment),PF=p(),In=a("p"),AF=n(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Sm=a("code"),OF=n("span start logits"),LF=n(" and "),Wm=a("code"),NF=n("span end logits"),IF=n(")."),DF=p(),pd=a("p"),SF=n("This model inherits from "),$c=a("a"),WF=n("FlaxPreTrainedModel"),UF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),BF=p(),hd=a("p"),RF=n(`This model is also a Flax Linen
`),md=a("a"),HF=n("flax.nn.Module"),KF=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),QF=p(),Um=a("p"),VF=n("Finally, this model supports inherent JAX features such as:"),JF=p(),yo=a("ul"),Bm=a("li"),ud=a("a"),GF=n("Just-In-Time (JIT) compilation"),XF=p(),Rm=a("li"),fd=a("a"),YF=n("Automatic Differentiation"),ZF=p(),Hm=a("li"),gd=a("a"),e0=n("Vectorization"),t0=p(),Km=a("li"),_d=a("a"),o0=n("Parallelization"),n0=p(),so=a("div"),T(vd.$$.fragment),s0=p(),Dn=a("p"),a0=n("The "),Qm=a("code"),r0=n("FlaxElectraPreTrainedModel"),i0=n(" forward method, overrides the "),Vm=a("code"),l0=n("__call__"),d0=n(" special method."),c0=p(),T(Ea.$$.fragment),p0=p(),T($a.$$.fragment),this.h()},l(o){const v=uj('[data-svelte="svelte-1phssyn"]',document.head);d=r(v,"META",{name:!0,content:!0}),v.forEach(t),g=h(o),c=r(o,"H1",{class:!0});var kd=i(c);f=r(kd,"A",{id:!0,class:!0,href:!0});var Jm=i(f);k=r(Jm,"SPAN",{});var Gm=i(k);b(l.$$.fragment,Gm),Gm.forEach(t),Jm.forEach(t),m=h(kd),z=r(kd,"SPAN",{});var Xm=i(z);Te=s(Xm,"ELECTRA"),Xm.forEach(t),kd.forEach(t),fe=h(o),S=r(o,"H2",{class:!0});var yd=i(S);ae=r(yd,"A",{id:!0,class:!0,href:!0});var Ym=i(ae);ee=r(Ym,"SPAN",{});var Zm=i(ee);b(M.$$.fragment,Zm),Zm.forEach(t),Ym.forEach(t),be=h(yd),K=r(yd,"SPAN",{});var eu=i(K);we=s(eu,"Overview"),eu.forEach(t),yd.forEach(t),ge=h(o),U=r(o,"P",{});var Td=i(U);Ee=s(Td,"The ELECTRA model was proposed in the paper "),re=r(Td,"A",{href:!0,rel:!0});var tu=i(re);Q=s(tu,`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
Generators`),tu.forEach(t),$e=s(Td,`. ELECTRA is a new pretraining approach which trains two
transformer models: the generator and the discriminator. The generator\u2019s role is to replace tokens in a sequence, and
is therefore trained as a masked language model. The discriminator, which is the model we\u2019re interested in, tries to
identify which tokens were replaced by the generator in the sequence.`),Td.forEach(t),_e=h(o),R=r(o,"P",{});var ou=i(R);Fe=s(ou,"The abstract from the paper is the following:"),ou.forEach(t),ve=h(o),H=r(o,"P",{});var nu=i(H);me=r(nu,"EM",{});var su=i(me);xe=s(su,`Masked language modeling (MLM) pretraining methods such as BERT corrupt the input by replacing some tokens with [MASK]
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
using the same amount of compute.`),su.forEach(t),nu.forEach(t),oe=h(o),q=r(o,"P",{});var au=i(q);A=s(au,"Tips:"),au.forEach(t),ke=h(o),B=r(o,"UL",{});var bd=i(B);ue=r(bd,"LI",{});var ru=i(ue);Me=s(ru,`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),ru.forEach(t),V=h(bd),ne=r(bd,"LI",{});var To=i(ne);ze=s(To,"The ELECTRA checkpoints saved using "),P=r(To,"A",{href:!0,rel:!0});var iu=i(P);je=s(iu,"Google Research\u2019s implementation"),iu.forEach(t),J=s(To,`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),ie=r(To,"A",{href:!0});var lu=i(ie);Ce=s(lu,"ElectraForMaskedLM"),lu.forEach(t),G=s(To,` model, and the generator may be loaded in the
`),le=r(To,"A",{href:!0});var du=i(le);qe=s(du,"ElectraForPreTraining"),du.forEach(t),I=s(To,` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),To.forEach(t),bd.forEach(t),ye=h(o),D=r(o,"P",{});var Sn=i(D);Pe=s(Sn,"This model was contributed by "),Z=r(Sn,"A",{href:!0,rel:!0});var cu=i(Z);O=s(cu,"lysandre"),cu.forEach(t),Ae=s(Sn,". The original code can be found "),L=r(Sn,"A",{href:!0,rel:!0});var pu=i(L);Oe=s(pu,"here"),pu.forEach(t),Le=s(Sn,"."),Sn.forEach(t),y=h(o),j=r(o,"H2",{class:!0});var wd=i(j);De=r(wd,"A",{id:!0,class:!0,href:!0});var hu=i(De);te=r(hu,"SPAN",{});var mu=i(te);b(We.$$.fragment,mu),mu.forEach(t),hu.forEach(t),Qe=h(wd),C=r(wd,"SPAN",{});var uu=i(C);Ve=s(uu,"ElectraConfig"),uu.forEach(t),wd.forEach(t),Ke=h(o),de=r(o,"DIV",{class:!0});var bo=i(de);b(Ue.$$.fragment,bo),Je=h(bo),N=r(bo,"P",{});var wo=i(N);X=s(wo,"This is the configuration class to store the configuration of a "),Re=r(wo,"A",{href:!0});var fu=i(Re);Ge=s(fu,"ElectraModel"),fu.forEach(t),Y=s(wo," or a "),He=r(wo,"A",{href:!0});var gu=i(He);Xe=s(gu,"TFElectraModel"),gu.forEach(t),Ne=s(wo,`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),Be=r(wo,"A",{href:!0,rel:!0});var _u=i(Be);se=s(_u,"google/electra-small-discriminator"),_u.forEach(t),Ye=s(wo," architecture."),wo.forEach(t),n_=h(bo),Io=r(bo,"P",{});var Wn=i(Io);s_=s(Wn,"Configuration objects inherit from "),qd=r(Wn,"A",{href:!0});var vu=i(qd);a_=s(vu,"PretrainedConfig"),vu.forEach(t),r_=s(Wn,` and can be used to control the model outputs. Read the
documentation from `),Pd=r(Wn,"A",{href:!0});var ku=i(Pd);i_=s(ku,"PretrainedConfig"),ku.forEach(t),l_=s(Wn," for more information."),Wn.forEach(t),d_=h(bo),b(Un.$$.fragment,bo),bo.forEach(t),Nu=h(o),Do=r(o,"H2",{class:!0});var Ed=i(Do);Bn=r(Ed,"A",{id:!0,class:!0,href:!0});var yu=i(Bn);Yc=r(yu,"SPAN",{});var Tu=i(Yc);b(Xa.$$.fragment,Tu),Tu.forEach(t),yu.forEach(t),c_=h(Ed),Zc=r(Ed,"SPAN",{});var bu=i(Zc);p_=s(bu,"ElectraTokenizer"),bu.forEach(t),Ed.forEach(t),Iu=h(o),Ut=r(o,"DIV",{class:!0});var Eo=i(Ut);b(Ya.$$.fragment,Eo),h_=h(Eo),ep=r(Eo,"P",{});var wu=i(ep);m_=s(wu,"Construct an ELECTRA tokenizer."),wu.forEach(t),u_=h(Eo),Rn=r(Eo,"P",{});var Fa=i(Rn);Ad=r(Fa,"A",{href:!0});var Eu=i(Ad);f_=s(Eu,"ElectraTokenizer"),Eu.forEach(t),g_=s(Fa," is identical to "),Od=r(Fa,"A",{href:!0});var $u=i(Od);__=s($u,"BertTokenizer"),$u.forEach(t),v_=s(Fa,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Fa.forEach(t),k_=h(Eo),Za=r(Eo,"P",{});var $d=i(Za);y_=s($d,"Refer to superclass "),Ld=r($d,"A",{href:!0});var Fu=i(Ld);T_=s(Fu,"BertTokenizer"),Fu.forEach(t),b_=s($d," for usage examples and documentation concerning parameters."),$d.forEach(t),Eo.forEach(t),Du=h(o),So=r(o,"H2",{class:!0});var Fd=i(So);Hn=r(Fd,"A",{id:!0,class:!0,href:!0});var xu=i(Hn);tp=r(xu,"SPAN",{});var Mu=i(tp);b(er.$$.fragment,Mu),Mu.forEach(t),xu.forEach(t),w_=h(Fd),op=r(Fd,"SPAN",{});var zu=i(op);E_=s(zu,"ElectraTokenizerFast"),zu.forEach(t),Fd.forEach(t),Su=h(o),Bt=r(o,"DIV",{class:!0});var $o=i(Bt);b(tr.$$.fragment,$o),$_=h($o),or=r($o,"P",{});var xd=i(or);F_=s(xd,"Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),np=r(xd,"EM",{});var ju=i(np);x_=s(ju,"tokenizers"),ju.forEach(t),M_=s(xd," library)."),xd.forEach(t),z_=h($o),Kn=r($o,"P",{});var xa=i(Kn);Nd=r(xa,"A",{href:!0});var Cu=i(Nd);j_=s(Cu,"ElectraTokenizerFast"),Cu.forEach(t),C_=s(xa," is identical to "),Id=r(xa,"A",{href:!0});var qu=i(Id);q_=s(qu,"BertTokenizerFast"),qu.forEach(t),P_=s(xa,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),xa.forEach(t),A_=h($o),nr=r($o,"P",{});var Md=i(nr);O_=s(Md,"Refer to superclass "),Dd=r(Md,"A",{href:!0});var Pu=i(Dd);L_=s(Pu,"BertTokenizerFast"),Pu.forEach(t),N_=s(Md," for usage examples and documentation concerning parameters."),Md.forEach(t),$o.forEach(t),Wu=h(o),Wo=r(o,"H2",{class:!0});var zd=i(Wo);Qn=r(zd,"A",{id:!0,class:!0,href:!0});var Au=i(Qn);sp=r(Au,"SPAN",{});var Ou=i(sp);b(sr.$$.fragment,Ou),Ou.forEach(t),Au.forEach(t),I_=h(zd),ap=r(zd,"SPAN",{});var Lu=i(ap);D_=s(Lu,"Electra specific outputs"),Lu.forEach(t),zd.forEach(t),Uu=h(o),Uo=r(o,"DIV",{class:!0});var jd=i(Uo);b(ar.$$.fragment,jd),S_=h(jd),rr=r(jd,"P",{});var Cd=i(rr);W_=s(Cd,"Output type of "),Sd=r(Cd,"A",{href:!0});var h0=i(Sd);U_=s(h0,"ElectraForPreTraining"),h0.forEach(t),B_=s(Cd,"."),Cd.forEach(t),jd.forEach(t),Bu=h(o),Bo=r(o,"DIV",{class:!0});var If=i(Bo);b(ir.$$.fragment,If),R_=h(If),lr=r(If,"P",{});var Df=i(lr);H_=s(Df,"Output type of "),Wd=r(Df,"A",{href:!0});var m0=i(Wd);K_=s(m0,"TFElectraForPreTraining"),m0.forEach(t),Q_=s(Df,"."),Df.forEach(t),If.forEach(t),Ru=h(o),Ro=r(o,"H2",{class:!0});var Sf=i(Ro);Vn=r(Sf,"A",{id:!0,class:!0,href:!0});var u0=i(Vn);rp=r(u0,"SPAN",{});var f0=i(rp);b(dr.$$.fragment,f0),f0.forEach(t),u0.forEach(t),V_=h(Sf),ip=r(Sf,"SPAN",{});var g0=i(ip);J_=s(g0,"ElectraModel"),g0.forEach(t),Sf.forEach(t),Hu=h(o),yt=r(o,"DIV",{class:!0});var Fo=i(yt);b(cr.$$.fragment,Fo),G_=h(Fo),lp=r(Fo,"P",{});var _0=i(lp);X_=s(_0,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),_0.forEach(t),Y_=h(Fo),pr=r(Fo,"P",{});var Wf=i(pr);Z_=s(Wf,"This model inherits from "),Ud=r(Wf,"A",{href:!0});var v0=i(Ud);ev=s(v0,"PreTrainedModel"),v0.forEach(t),tv=s(Wf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wf.forEach(t),ov=h(Fo),hr=r(Fo,"P",{});var Uf=i(hr);nv=s(Uf,"This model is also a PyTorch "),mr=r(Uf,"A",{href:!0,rel:!0});var k0=i(mr);sv=s(k0,"torch.nn.Module"),k0.forEach(t),av=s(Uf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uf.forEach(t),rv=h(Fo),Rt=r(Fo,"DIV",{class:!0});var Ma=i(Rt);b(ur.$$.fragment,Ma),iv=h(Ma),Ho=r(Ma,"P",{});var Fc=i(Ho);lv=s(Fc,"The "),Bd=r(Fc,"A",{href:!0});var y0=i(Bd);dv=s(y0,"ElectraModel"),y0.forEach(t),cv=s(Fc," forward method, overrides the "),dp=r(Fc,"CODE",{});var T0=i(dp);pv=s(T0,"__call__"),T0.forEach(t),hv=s(Fc," special method."),Fc.forEach(t),mv=h(Ma),b(Jn.$$.fragment,Ma),uv=h(Ma),b(Gn.$$.fragment,Ma),Ma.forEach(t),Fo.forEach(t),Ku=h(o),Ko=r(o,"H2",{class:!0});var Bf=i(Ko);Xn=r(Bf,"A",{id:!0,class:!0,href:!0});var b0=i(Xn);cp=r(b0,"SPAN",{});var w0=i(cp);b(fr.$$.fragment,w0),w0.forEach(t),b0.forEach(t),fv=h(Bf),pp=r(Bf,"SPAN",{});var E0=i(pp);gv=s(E0,"ElectraForPreTraining"),E0.forEach(t),Bf.forEach(t),Qu=h(o),pt=r(o,"DIV",{class:!0});var ao=i(pt);b(gr.$$.fragment,ao),_v=h(ao),hp=r(ao,"P",{});var $0=i(hp);vv=s($0,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),$0.forEach(t),kv=h(ao),mp=r(ao,"P",{});var F0=i(mp);yv=s(F0,"It is recommended to load the discriminator checkpoint into that model."),F0.forEach(t),Tv=h(ao),_r=r(ao,"P",{});var Rf=i(_r);bv=s(Rf,"This model inherits from "),Rd=r(Rf,"A",{href:!0});var x0=i(Rd);wv=s(x0,"PreTrainedModel"),x0.forEach(t),Ev=s(Rf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rf.forEach(t),$v=h(ao),vr=r(ao,"P",{});var Hf=i(vr);Fv=s(Hf,"This model is also a PyTorch "),kr=r(Hf,"A",{href:!0,rel:!0});var M0=i(kr);xv=s(M0,"torch.nn.Module"),M0.forEach(t),Mv=s(Hf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hf.forEach(t),zv=h(ao),Ht=r(ao,"DIV",{class:!0});var za=i(Ht);b(yr.$$.fragment,za),jv=h(za),Qo=r(za,"P",{});var xc=i(Qo);Cv=s(xc,"The "),Hd=r(xc,"A",{href:!0});var z0=i(Hd);qv=s(z0,"ElectraForPreTraining"),z0.forEach(t),Pv=s(xc," forward method, overrides the "),up=r(xc,"CODE",{});var j0=i(up);Av=s(j0,"__call__"),j0.forEach(t),Ov=s(xc," special method."),xc.forEach(t),Lv=h(za),b(Yn.$$.fragment,za),Nv=h(za),b(Zn.$$.fragment,za),za.forEach(t),ao.forEach(t),Vu=h(o),Vo=r(o,"H2",{class:!0});var Kf=i(Vo);es=r(Kf,"A",{id:!0,class:!0,href:!0});var C0=i(es);fp=r(C0,"SPAN",{});var q0=i(fp);b(Tr.$$.fragment,q0),q0.forEach(t),C0.forEach(t),Iv=h(Kf),gp=r(Kf,"SPAN",{});var P0=i(gp);Dv=s(P0,"ElectraForCausalLM"),P0.forEach(t),Kf.forEach(t),Ju=h(o),Tt=r(o,"DIV",{class:!0});var xo=i(Tt);b(br.$$.fragment,xo),Sv=h(xo),wr=r(xo,"P",{});var Qf=i(wr);Wv=s(Qf,"ELECTRA Model with a "),_p=r(Qf,"CODE",{});var A0=i(_p);Uv=s(A0,"language modeling"),A0.forEach(t),Bv=s(Qf," head on top for CLM fine-tuning."),Qf.forEach(t),Rv=h(xo),Er=r(xo,"P",{});var Vf=i(Er);Hv=s(Vf,"This model inherits from "),Kd=r(Vf,"A",{href:!0});var O0=i(Kd);Kv=s(O0,"PreTrainedModel"),O0.forEach(t),Qv=s(Vf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vf.forEach(t),Vv=h(xo),$r=r(xo,"P",{});var Jf=i($r);Jv=s(Jf,"This model is also a PyTorch "),Fr=r(Jf,"A",{href:!0,rel:!0});var L0=i(Fr);Gv=s(L0,"torch.nn.Module"),L0.forEach(t),Xv=s(Jf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jf.forEach(t),Yv=h(xo),Kt=r(xo,"DIV",{class:!0});var ja=i(Kt);b(xr.$$.fragment,ja),Zv=h(ja),Jo=r(ja,"P",{});var Mc=i(Jo);ek=s(Mc,"The "),Qd=r(Mc,"A",{href:!0});var N0=i(Qd);tk=s(N0,"ElectraForCausalLM"),N0.forEach(t),ok=s(Mc," forward method, overrides the "),vp=r(Mc,"CODE",{});var I0=i(vp);nk=s(I0,"__call__"),I0.forEach(t),sk=s(Mc," special method."),Mc.forEach(t),ak=h(ja),b(ts.$$.fragment,ja),rk=h(ja),b(os.$$.fragment,ja),ja.forEach(t),xo.forEach(t),Gu=h(o),Go=r(o,"H2",{class:!0});var Gf=i(Go);ns=r(Gf,"A",{id:!0,class:!0,href:!0});var D0=i(ns);kp=r(D0,"SPAN",{});var S0=i(kp);b(Mr.$$.fragment,S0),S0.forEach(t),D0.forEach(t),ik=h(Gf),yp=r(Gf,"SPAN",{});var W0=i(yp);lk=s(W0,"ElectraForMaskedLM"),W0.forEach(t),Gf.forEach(t),Xu=h(o),ht=r(o,"DIV",{class:!0});var ro=i(ht);b(zr.$$.fragment,ro),dk=h(ro),Tp=r(ro,"P",{});var U0=i(Tp);ck=s(U0,"Electra model with a language modeling head on top."),U0.forEach(t),pk=h(ro),bp=r(ro,"P",{});var B0=i(bp);hk=s(B0,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),B0.forEach(t),mk=h(ro),jr=r(ro,"P",{});var Xf=i(jr);uk=s(Xf,"This model inherits from "),Vd=r(Xf,"A",{href:!0});var R0=i(Vd);fk=s(R0,"PreTrainedModel"),R0.forEach(t),gk=s(Xf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xf.forEach(t),_k=h(ro),Cr=r(ro,"P",{});var Yf=i(Cr);vk=s(Yf,"This model is also a PyTorch "),qr=r(Yf,"A",{href:!0,rel:!0});var H0=i(qr);kk=s(H0,"torch.nn.Module"),H0.forEach(t),yk=s(Yf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yf.forEach(t),Tk=h(ro),$t=r(ro,"DIV",{class:!0});var Mo=i($t);b(Pr.$$.fragment,Mo),bk=h(Mo),Xo=r(Mo,"P",{});var zc=i(Xo);wk=s(zc,"The "),Jd=r(zc,"A",{href:!0});var K0=i(Jd);Ek=s(K0,"ElectraForMaskedLM"),K0.forEach(t),$k=s(zc," forward method, overrides the "),wp=r(zc,"CODE",{});var Q0=i(wp);Fk=s(Q0,"__call__"),Q0.forEach(t),xk=s(zc," special method."),zc.forEach(t),Mk=h(Mo),b(ss.$$.fragment,Mo),zk=h(Mo),b(as.$$.fragment,Mo),jk=h(Mo),b(rs.$$.fragment,Mo),Mo.forEach(t),ro.forEach(t),Yu=h(o),Yo=r(o,"H2",{class:!0});var Zf=i(Yo);is=r(Zf,"A",{id:!0,class:!0,href:!0});var V0=i(is);Ep=r(V0,"SPAN",{});var J0=i(Ep);b(Ar.$$.fragment,J0),J0.forEach(t),V0.forEach(t),Ck=h(Zf),$p=r(Zf,"SPAN",{});var G0=i($p);qk=s(G0,"ElectraForSequenceClassification"),G0.forEach(t),Zf.forEach(t),Zu=h(o),bt=r(o,"DIV",{class:!0});var zo=i(bt);b(Or.$$.fragment,zo),Pk=h(zo),Fp=r(zo,"P",{});var X0=i(Fp);Ak=s(X0,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),X0.forEach(t),Ok=h(zo),Lr=r(zo,"P",{});var eg=i(Lr);Lk=s(eg,"This model inherits from "),Gd=r(eg,"A",{href:!0});var Y0=i(Gd);Nk=s(Y0,"PreTrainedModel"),Y0.forEach(t),Ik=s(eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eg.forEach(t),Dk=h(zo),Nr=r(zo,"P",{});var tg=i(Nr);Sk=s(tg,"This model is also a PyTorch "),Ir=r(tg,"A",{href:!0,rel:!0});var Z0=i(Ir);Wk=s(Z0,"torch.nn.Module"),Z0.forEach(t),Uk=s(tg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tg.forEach(t),Bk=h(zo),ct=r(zo,"DIV",{class:!0});var qt=i(ct);b(Dr.$$.fragment,qt),Rk=h(qt),Zo=r(qt,"P",{});var jc=i(Zo);Hk=s(jc,"The "),Xd=r(jc,"A",{href:!0});var ex=i(Xd);Kk=s(ex,"ElectraForSequenceClassification"),ex.forEach(t),Qk=s(jc," forward method, overrides the "),xp=r(jc,"CODE",{});var tx=i(xp);Vk=s(tx,"__call__"),tx.forEach(t),Jk=s(jc," special method."),jc.forEach(t),Gk=h(qt),b(ls.$$.fragment,qt),Xk=h(qt),b(ds.$$.fragment,qt),Yk=h(qt),b(cs.$$.fragment,qt),Zk=h(qt),b(ps.$$.fragment,qt),e2=h(qt),b(hs.$$.fragment,qt),qt.forEach(t),zo.forEach(t),ef=h(o),en=r(o,"H2",{class:!0});var og=i(en);ms=r(og,"A",{id:!0,class:!0,href:!0});var ox=i(ms);Mp=r(ox,"SPAN",{});var nx=i(Mp);b(Sr.$$.fragment,nx),nx.forEach(t),ox.forEach(t),t2=h(og),zp=r(og,"SPAN",{});var sx=i(zp);o2=s(sx,"ElectraForMultipleChoice"),sx.forEach(t),og.forEach(t),tf=h(o),wt=r(o,"DIV",{class:!0});var jo=i(wt);b(Wr.$$.fragment,jo),n2=h(jo),jp=r(jo,"P",{});var ax=i(jp);s2=s(ax,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ax.forEach(t),a2=h(jo),Ur=r(jo,"P",{});var ng=i(Ur);r2=s(ng,"This model inherits from "),Yd=r(ng,"A",{href:!0});var rx=i(Yd);i2=s(rx,"PreTrainedModel"),rx.forEach(t),l2=s(ng,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ng.forEach(t),d2=h(jo),Br=r(jo,"P",{});var sg=i(Br);c2=s(sg,"This model is also a PyTorch "),Rr=r(sg,"A",{href:!0,rel:!0});var ix=i(Rr);p2=s(ix,"torch.nn.Module"),ix.forEach(t),h2=s(sg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sg.forEach(t),m2=h(jo),Qt=r(jo,"DIV",{class:!0});var Ca=i(Qt);b(Hr.$$.fragment,Ca),u2=h(Ca),tn=r(Ca,"P",{});var Cc=i(tn);f2=s(Cc,"The "),Zd=r(Cc,"A",{href:!0});var lx=i(Zd);g2=s(lx,"ElectraForMultipleChoice"),lx.forEach(t),_2=s(Cc," forward method, overrides the "),Cp=r(Cc,"CODE",{});var dx=i(Cp);v2=s(dx,"__call__"),dx.forEach(t),k2=s(Cc," special method."),Cc.forEach(t),y2=h(Ca),b(us.$$.fragment,Ca),T2=h(Ca),b(fs.$$.fragment,Ca),Ca.forEach(t),jo.forEach(t),of=h(o),on=r(o,"H2",{class:!0});var ag=i(on);gs=r(ag,"A",{id:!0,class:!0,href:!0});var cx=i(gs);qp=r(cx,"SPAN",{});var px=i(qp);b(Kr.$$.fragment,px),px.forEach(t),cx.forEach(t),b2=h(ag),Pp=r(ag,"SPAN",{});var hx=i(Pp);w2=s(hx,"ElectraForTokenClassification"),hx.forEach(t),ag.forEach(t),nf=h(o),mt=r(o,"DIV",{class:!0});var io=i(mt);b(Qr.$$.fragment,io),E2=h(io),Ap=r(io,"P",{});var mx=i(Ap);$2=s(mx,"Electra model with a token classification head on top."),mx.forEach(t),F2=h(io),Op=r(io,"P",{});var ux=i(Op);x2=s(ux,"Both the discriminator and generator may be loaded into this model."),ux.forEach(t),M2=h(io),Vr=r(io,"P",{});var rg=i(Vr);z2=s(rg,"This model inherits from "),ec=r(rg,"A",{href:!0});var fx=i(ec);j2=s(fx,"PreTrainedModel"),fx.forEach(t),C2=s(rg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rg.forEach(t),q2=h(io),Jr=r(io,"P",{});var ig=i(Jr);P2=s(ig,"This model is also a PyTorch "),Gr=r(ig,"A",{href:!0,rel:!0});var gx=i(Gr);A2=s(gx,"torch.nn.Module"),gx.forEach(t),O2=s(ig,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ig.forEach(t),L2=h(io),Ft=r(io,"DIV",{class:!0});var Co=i(Ft);b(Xr.$$.fragment,Co),N2=h(Co),nn=r(Co,"P",{});var qc=i(nn);I2=s(qc,"The "),tc=r(qc,"A",{href:!0});var _x=i(tc);D2=s(_x,"ElectraForTokenClassification"),_x.forEach(t),S2=s(qc," forward method, overrides the "),Lp=r(qc,"CODE",{});var vx=i(Lp);W2=s(vx,"__call__"),vx.forEach(t),U2=s(qc," special method."),qc.forEach(t),B2=h(Co),b(_s.$$.fragment,Co),R2=h(Co),b(vs.$$.fragment,Co),H2=h(Co),b(ks.$$.fragment,Co),Co.forEach(t),io.forEach(t),sf=h(o),sn=r(o,"H2",{class:!0});var lg=i(sn);ys=r(lg,"A",{id:!0,class:!0,href:!0});var kx=i(ys);Np=r(kx,"SPAN",{});var yx=i(Np);b(Yr.$$.fragment,yx),yx.forEach(t),kx.forEach(t),K2=h(lg),Ip=r(lg,"SPAN",{});var Tx=i(Ip);Q2=s(Tx,"ElectraForQuestionAnswering"),Tx.forEach(t),lg.forEach(t),af=h(o),Et=r(o,"DIV",{class:!0});var qo=i(Et);b(Zr.$$.fragment,qo),V2=h(qo),an=r(qo,"P",{});var Pc=i(an);J2=s(Pc,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Dp=r(Pc,"CODE",{});var bx=i(Dp);G2=s(bx,"span start logits"),bx.forEach(t),X2=s(Pc," and "),Sp=r(Pc,"CODE",{});var wx=i(Sp);Y2=s(wx,"span end logits"),wx.forEach(t),Z2=s(Pc,")."),Pc.forEach(t),ey=h(qo),ei=r(qo,"P",{});var dg=i(ei);ty=s(dg,"This model inherits from "),oc=r(dg,"A",{href:!0});var Ex=i(oc);oy=s(Ex,"PreTrainedModel"),Ex.forEach(t),ny=s(dg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dg.forEach(t),sy=h(qo),ti=r(qo,"P",{});var cg=i(ti);ay=s(cg,"This model is also a PyTorch "),oi=r(cg,"A",{href:!0,rel:!0});var $x=i(oi);ry=s($x,"torch.nn.Module"),$x.forEach(t),iy=s(cg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cg.forEach(t),ly=h(qo),xt=r(qo,"DIV",{class:!0});var Po=i(xt);b(ni.$$.fragment,Po),dy=h(Po),rn=r(Po,"P",{});var Ac=i(rn);cy=s(Ac,"The "),nc=r(Ac,"A",{href:!0});var Fx=i(nc);py=s(Fx,"ElectraForQuestionAnswering"),Fx.forEach(t),hy=s(Ac," forward method, overrides the "),Wp=r(Ac,"CODE",{});var xx=i(Wp);my=s(xx,"__call__"),xx.forEach(t),uy=s(Ac," special method."),Ac.forEach(t),fy=h(Po),b(Ts.$$.fragment,Po),gy=h(Po),b(bs.$$.fragment,Po),_y=h(Po),b(ws.$$.fragment,Po),Po.forEach(t),qo.forEach(t),rf=h(o),ln=r(o,"H2",{class:!0});var pg=i(ln);Es=r(pg,"A",{id:!0,class:!0,href:!0});var Mx=i(Es);Up=r(Mx,"SPAN",{});var zx=i(Up);b(si.$$.fragment,zx),zx.forEach(t),Mx.forEach(t),vy=h(pg),Bp=r(pg,"SPAN",{});var jx=i(Bp);ky=s(jx,"TFElectraModel"),jx.forEach(t),pg.forEach(t),lf=h(o),ut=r(o,"DIV",{class:!0});var lo=i(ut);b(ai.$$.fragment,lo),yy=h(lo),Rp=r(lo,"P",{});var Cx=i(Rp);Ty=s(Cx,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),Cx.forEach(t),by=h(lo),ri=r(lo,"P",{});var hg=i(ri);wy=s(hg,"This model inherits from "),sc=r(hg,"A",{href:!0});var qx=i(sc);Ey=s(qx,"TFPreTrainedModel"),qx.forEach(t),$y=s(hg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hg.forEach(t),Fy=h(lo),ii=r(lo,"P",{});var mg=i(ii);xy=s(mg,"This model is also a "),li=r(mg,"A",{href:!0,rel:!0});var Px=i(li);My=s(Px,"tf.keras.Model"),Px.forEach(t),zy=s(mg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mg.forEach(t),jy=h(lo),b($s.$$.fragment,lo),Cy=h(lo),Vt=r(lo,"DIV",{class:!0});var qa=i(Vt);b(di.$$.fragment,qa),qy=h(qa),dn=r(qa,"P",{});var Oc=i(dn);Py=s(Oc,"The "),ac=r(Oc,"A",{href:!0});var Ax=i(ac);Ay=s(Ax,"TFElectraModel"),Ax.forEach(t),Oy=s(Oc," forward method, overrides the "),Hp=r(Oc,"CODE",{});var Ox=i(Hp);Ly=s(Ox,"__call__"),Ox.forEach(t),Ny=s(Oc," special method."),Oc.forEach(t),Iy=h(qa),b(Fs.$$.fragment,qa),Dy=h(qa),b(xs.$$.fragment,qa),qa.forEach(t),lo.forEach(t),df=h(o),cn=r(o,"H2",{class:!0});var ug=i(cn);Ms=r(ug,"A",{id:!0,class:!0,href:!0});var Lx=i(Ms);Kp=r(Lx,"SPAN",{});var Nx=i(Kp);b(ci.$$.fragment,Nx),Nx.forEach(t),Lx.forEach(t),Sy=h(ug),Qp=r(ug,"SPAN",{});var Ix=i(Qp);Wy=s(Ix,"TFElectraForPreTraining"),Ix.forEach(t),ug.forEach(t),cf=h(o),tt=r(o,"DIV",{class:!0});var Pt=i(tt);b(pi.$$.fragment,Pt),Uy=h(Pt),Vp=r(Pt,"P",{});var Dx=i(Vp);By=s(Dx,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),Dx.forEach(t),Ry=h(Pt),Jp=r(Pt,"P",{});var Sx=i(Jp);Hy=s(Sx,`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),Sx.forEach(t),Ky=h(Pt),hi=r(Pt,"P",{});var fg=i(hi);Qy=s(fg,"This model inherits from "),rc=r(fg,"A",{href:!0});var Wx=i(rc);Vy=s(Wx,"TFPreTrainedModel"),Wx.forEach(t),Jy=s(fg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fg.forEach(t),Gy=h(Pt),mi=r(Pt,"P",{});var gg=i(mi);Xy=s(gg,"This model is also a "),ui=r(gg,"A",{href:!0,rel:!0});var Ux=i(ui);Yy=s(Ux,"tf.keras.Model"),Ux.forEach(t),Zy=s(gg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gg.forEach(t),eT=h(Pt),b(zs.$$.fragment,Pt),tT=h(Pt),Jt=r(Pt,"DIV",{class:!0});var Pa=i(Jt);b(fi.$$.fragment,Pa),oT=h(Pa),pn=r(Pa,"P",{});var Lc=i(pn);nT=s(Lc,"The "),ic=r(Lc,"A",{href:!0});var Bx=i(ic);sT=s(Bx,"TFElectraForPreTraining"),Bx.forEach(t),aT=s(Lc," forward method, overrides the "),Gp=r(Lc,"CODE",{});var Rx=i(Gp);rT=s(Rx,"__call__"),Rx.forEach(t),iT=s(Lc," special method."),Lc.forEach(t),lT=h(Pa),b(js.$$.fragment,Pa),dT=h(Pa),b(Cs.$$.fragment,Pa),Pa.forEach(t),Pt.forEach(t),pf=h(o),hn=r(o,"H2",{class:!0});var _g=i(hn);qs=r(_g,"A",{id:!0,class:!0,href:!0});var Hx=i(qs);Xp=r(Hx,"SPAN",{});var Kx=i(Xp);b(gi.$$.fragment,Kx),Kx.forEach(t),Hx.forEach(t),cT=h(_g),Yp=r(_g,"SPAN",{});var Qx=i(Yp);pT=s(Qx,"TFElectraForMaskedLM"),Qx.forEach(t),_g.forEach(t),hf=h(o),ot=r(o,"DIV",{class:!0});var At=i(ot);b(_i.$$.fragment,At),hT=h(At),Zp=r(At,"P",{});var Vx=i(Zp);mT=s(Vx,"Electra model with a language modeling head on top."),Vx.forEach(t),uT=h(At),eh=r(At,"P",{});var Jx=i(eh);fT=s(Jx,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),Jx.forEach(t),gT=h(At),vi=r(At,"P",{});var vg=i(vi);_T=s(vg,"This model inherits from "),lc=r(vg,"A",{href:!0});var Gx=i(lc);vT=s(Gx,"TFPreTrainedModel"),Gx.forEach(t),kT=s(vg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vg.forEach(t),yT=h(At),ki=r(At,"P",{});var kg=i(ki);TT=s(kg,"This model is also a "),yi=r(kg,"A",{href:!0,rel:!0});var Xx=i(yi);bT=s(Xx,"tf.keras.Model"),Xx.forEach(t),wT=s(kg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kg.forEach(t),ET=h(At),b(Ps.$$.fragment,At),$T=h(At),Mt=r(At,"DIV",{class:!0});var Ao=i(Mt);b(Ti.$$.fragment,Ao),FT=h(Ao),mn=r(Ao,"P",{});var Nc=i(mn);xT=s(Nc,"The "),dc=r(Nc,"A",{href:!0});var Yx=i(dc);MT=s(Yx,"TFElectraForMaskedLM"),Yx.forEach(t),zT=s(Nc," forward method, overrides the "),th=r(Nc,"CODE",{});var Zx=i(th);jT=s(Zx,"__call__"),Zx.forEach(t),CT=s(Nc," special method."),Nc.forEach(t),qT=h(Ao),b(As.$$.fragment,Ao),PT=h(Ao),b(Os.$$.fragment,Ao),AT=h(Ao),b(Ls.$$.fragment,Ao),Ao.forEach(t),At.forEach(t),mf=h(o),un=r(o,"H2",{class:!0});var yg=i(un);Ns=r(yg,"A",{id:!0,class:!0,href:!0});var e4=i(Ns);oh=r(e4,"SPAN",{});var t4=i(oh);b(bi.$$.fragment,t4),t4.forEach(t),e4.forEach(t),OT=h(yg),nh=r(yg,"SPAN",{});var o4=i(nh);LT=s(o4,"TFElectraForSequenceClassification"),o4.forEach(t),yg.forEach(t),uf=h(o),ft=r(o,"DIV",{class:!0});var co=i(ft);b(wi.$$.fragment,co),NT=h(co),sh=r(co,"P",{});var n4=i(sh);IT=s(n4,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),n4.forEach(t),DT=h(co),Ei=r(co,"P",{});var Tg=i(Ei);ST=s(Tg,"This model inherits from "),cc=r(Tg,"A",{href:!0});var s4=i(cc);WT=s(s4,"TFPreTrainedModel"),s4.forEach(t),UT=s(Tg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tg.forEach(t),BT=h(co),$i=r(co,"P",{});var bg=i($i);RT=s(bg,"This model is also a "),Fi=r(bg,"A",{href:!0,rel:!0});var a4=i(Fi);HT=s(a4,"tf.keras.Model"),a4.forEach(t),KT=s(bg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bg.forEach(t),QT=h(co),b(Is.$$.fragment,co),VT=h(co),zt=r(co,"DIV",{class:!0});var Oo=i(zt);b(xi.$$.fragment,Oo),JT=h(Oo),fn=r(Oo,"P",{});var Ic=i(fn);GT=s(Ic,"The "),pc=r(Ic,"A",{href:!0});var r4=i(pc);XT=s(r4,"TFElectraForSequenceClassification"),r4.forEach(t),YT=s(Ic," forward method, overrides the "),ah=r(Ic,"CODE",{});var i4=i(ah);ZT=s(i4,"__call__"),i4.forEach(t),eb=s(Ic," special method."),Ic.forEach(t),tb=h(Oo),b(Ds.$$.fragment,Oo),ob=h(Oo),b(Ss.$$.fragment,Oo),nb=h(Oo),b(Ws.$$.fragment,Oo),Oo.forEach(t),co.forEach(t),ff=h(o),gn=r(o,"H2",{class:!0});var wg=i(gn);Us=r(wg,"A",{id:!0,class:!0,href:!0});var l4=i(Us);rh=r(l4,"SPAN",{});var d4=i(rh);b(Mi.$$.fragment,d4),d4.forEach(t),l4.forEach(t),sb=h(wg),ih=r(wg,"SPAN",{});var c4=i(ih);ab=s(c4,"TFElectraForMultipleChoice"),c4.forEach(t),wg.forEach(t),gf=h(o),gt=r(o,"DIV",{class:!0});var po=i(gt);b(zi.$$.fragment,po),rb=h(po),lh=r(po,"P",{});var p4=i(lh);ib=s(p4,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),p4.forEach(t),lb=h(po),ji=r(po,"P",{});var Eg=i(ji);db=s(Eg,"This model inherits from "),hc=r(Eg,"A",{href:!0});var h4=i(hc);cb=s(h4,"TFPreTrainedModel"),h4.forEach(t),pb=s(Eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eg.forEach(t),hb=h(po),Ci=r(po,"P",{});var $g=i(Ci);mb=s($g,"This model is also a "),qi=r($g,"A",{href:!0,rel:!0});var m4=i(qi);ub=s(m4,"tf.keras.Model"),m4.forEach(t),fb=s($g,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$g.forEach(t),gb=h(po),b(Bs.$$.fragment,po),_b=h(po),Gt=r(po,"DIV",{class:!0});var Aa=i(Gt);b(Pi.$$.fragment,Aa),vb=h(Aa),_n=r(Aa,"P",{});var Dc=i(_n);kb=s(Dc,"The "),mc=r(Dc,"A",{href:!0});var u4=i(mc);yb=s(u4,"TFElectraForMultipleChoice"),u4.forEach(t),Tb=s(Dc," forward method, overrides the "),dh=r(Dc,"CODE",{});var f4=i(dh);bb=s(f4,"__call__"),f4.forEach(t),wb=s(Dc," special method."),Dc.forEach(t),Eb=h(Aa),b(Rs.$$.fragment,Aa),$b=h(Aa),b(Hs.$$.fragment,Aa),Aa.forEach(t),po.forEach(t),_f=h(o),vn=r(o,"H2",{class:!0});var Fg=i(vn);Ks=r(Fg,"A",{id:!0,class:!0,href:!0});var g4=i(Ks);ch=r(g4,"SPAN",{});var _4=i(ch);b(Ai.$$.fragment,_4),_4.forEach(t),g4.forEach(t),Fb=h(Fg),ph=r(Fg,"SPAN",{});var v4=i(ph);xb=s(v4,"TFElectraForTokenClassification"),v4.forEach(t),Fg.forEach(t),vf=h(o),nt=r(o,"DIV",{class:!0});var Ot=i(nt);b(Oi.$$.fragment,Ot),Mb=h(Ot),hh=r(Ot,"P",{});var k4=i(hh);zb=s(k4,"Electra model with a token classification head on top."),k4.forEach(t),jb=h(Ot),mh=r(Ot,"P",{});var y4=i(mh);Cb=s(y4,"Both the discriminator and generator may be loaded into this model."),y4.forEach(t),qb=h(Ot),Li=r(Ot,"P",{});var xg=i(Li);Pb=s(xg,"This model inherits from "),uc=r(xg,"A",{href:!0});var T4=i(uc);Ab=s(T4,"TFPreTrainedModel"),T4.forEach(t),Ob=s(xg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xg.forEach(t),Lb=h(Ot),Ni=r(Ot,"P",{});var Mg=i(Ni);Nb=s(Mg,"This model is also a "),Ii=r(Mg,"A",{href:!0,rel:!0});var b4=i(Ii);Ib=s(b4,"tf.keras.Model"),b4.forEach(t),Db=s(Mg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mg.forEach(t),Sb=h(Ot),b(Qs.$$.fragment,Ot),Wb=h(Ot),jt=r(Ot,"DIV",{class:!0});var Lo=i(jt);b(Di.$$.fragment,Lo),Ub=h(Lo),kn=r(Lo,"P",{});var Sc=i(kn);Bb=s(Sc,"The "),fc=r(Sc,"A",{href:!0});var w4=i(fc);Rb=s(w4,"TFElectraForTokenClassification"),w4.forEach(t),Hb=s(Sc," forward method, overrides the "),uh=r(Sc,"CODE",{});var E4=i(uh);Kb=s(E4,"__call__"),E4.forEach(t),Qb=s(Sc," special method."),Sc.forEach(t),Vb=h(Lo),b(Vs.$$.fragment,Lo),Jb=h(Lo),b(Js.$$.fragment,Lo),Gb=h(Lo),b(Gs.$$.fragment,Lo),Lo.forEach(t),Ot.forEach(t),kf=h(o),yn=r(o,"H2",{class:!0});var zg=i(yn);Xs=r(zg,"A",{id:!0,class:!0,href:!0});var $4=i(Xs);fh=r($4,"SPAN",{});var F4=i(fh);b(Si.$$.fragment,F4),F4.forEach(t),$4.forEach(t),Xb=h(zg),gh=r(zg,"SPAN",{});var x4=i(gh);Yb=s(x4,"TFElectraForQuestionAnswering"),x4.forEach(t),zg.forEach(t),yf=h(o),_t=r(o,"DIV",{class:!0});var ho=i(_t);b(Wi.$$.fragment,ho),Zb=h(ho),Tn=r(ho,"P",{});var Wc=i(Tn);ew=s(Wc,`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),_h=r(Wc,"CODE",{});var M4=i(_h);tw=s(M4,"span start logits"),M4.forEach(t),ow=s(Wc," and "),vh=r(Wc,"CODE",{});var z4=i(vh);nw=s(z4,"span end logits"),z4.forEach(t),sw=s(Wc,")."),Wc.forEach(t),aw=h(ho),Ui=r(ho,"P",{});var jg=i(Ui);rw=s(jg,"This model inherits from "),gc=r(jg,"A",{href:!0});var j4=i(gc);iw=s(j4,"TFPreTrainedModel"),j4.forEach(t),lw=s(jg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jg.forEach(t),dw=h(ho),Bi=r(ho,"P",{});var Cg=i(Bi);cw=s(Cg,"This model is also a "),Ri=r(Cg,"A",{href:!0,rel:!0});var C4=i(Ri);pw=s(C4,"tf.keras.Model"),C4.forEach(t),hw=s(Cg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cg.forEach(t),mw=h(ho),b(Ys.$$.fragment,ho),uw=h(ho),Ct=r(ho,"DIV",{class:!0});var No=i(Ct);b(Hi.$$.fragment,No),fw=h(No),bn=r(No,"P",{});var Uc=i(bn);gw=s(Uc,"The "),_c=r(Uc,"A",{href:!0});var q4=i(_c);_w=s(q4,"TFElectraForQuestionAnswering"),q4.forEach(t),vw=s(Uc," forward method, overrides the "),kh=r(Uc,"CODE",{});var P4=i(kh);kw=s(P4,"__call__"),P4.forEach(t),yw=s(Uc," special method."),Uc.forEach(t),Tw=h(No),b(Zs.$$.fragment,No),bw=h(No),b(ea.$$.fragment,No),ww=h(No),b(ta.$$.fragment,No),No.forEach(t),ho.forEach(t),Tf=h(o),wn=r(o,"H2",{class:!0});var qg=i(wn);oa=r(qg,"A",{id:!0,class:!0,href:!0});var A4=i(oa);yh=r(A4,"SPAN",{});var O4=i(yh);b(Ki.$$.fragment,O4),O4.forEach(t),A4.forEach(t),Ew=h(qg),Th=r(qg,"SPAN",{});var L4=i(Th);$w=s(L4,"FlaxElectraModel"),L4.forEach(t),qg.forEach(t),bf=h(o),st=r(o,"DIV",{class:!0});var Lt=i(st);b(Qi.$$.fragment,Lt),Fw=h(Lt),bh=r(Lt,"P",{});var N4=i(bh);xw=s(N4,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),N4.forEach(t),Mw=h(Lt),Vi=r(Lt,"P",{});var Pg=i(Vi);zw=s(Pg,"This model inherits from "),vc=r(Pg,"A",{href:!0});var I4=i(vc);jw=s(I4,"FlaxPreTrainedModel"),I4.forEach(t),Cw=s(Pg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Pg.forEach(t),qw=h(Lt),Ji=r(Lt,"P",{});var Ag=i(Ji);Pw=s(Ag,`This model is also a Flax Linen
`),Gi=r(Ag,"A",{href:!0,rel:!0});var D4=i(Gi);Aw=s(D4,"flax.nn.Module"),D4.forEach(t),Ow=s(Ag,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ag.forEach(t),Lw=h(Lt),wh=r(Lt,"P",{});var S4=i(wh);Nw=s(S4,"Finally, this model supports inherent JAX features such as:"),S4.forEach(t),Iw=h(Lt),mo=r(Lt,"UL",{});var Oa=i(mo);Eh=r(Oa,"LI",{});var W4=i(Eh);Xi=r(W4,"A",{href:!0,rel:!0});var U4=i(Xi);Dw=s(U4,"Just-In-Time (JIT) compilation"),U4.forEach(t),W4.forEach(t),Sw=h(Oa),$h=r(Oa,"LI",{});var B4=i($h);Yi=r(B4,"A",{href:!0,rel:!0});var R4=i(Yi);Ww=s(R4,"Automatic Differentiation"),R4.forEach(t),B4.forEach(t),Uw=h(Oa),Fh=r(Oa,"LI",{});var H4=i(Fh);Zi=r(H4,"A",{href:!0,rel:!0});var K4=i(Zi);Bw=s(K4,"Vectorization"),K4.forEach(t),H4.forEach(t),Rw=h(Oa),xh=r(Oa,"LI",{});var Q4=i(xh);el=r(Q4,"A",{href:!0,rel:!0});var V4=i(el);Hw=s(V4,"Parallelization"),V4.forEach(t),Q4.forEach(t),Oa.forEach(t),Kw=h(Lt),Xt=r(Lt,"DIV",{class:!0});var La=i(Xt);b(tl.$$.fragment,La),Qw=h(La),En=r(La,"P",{});var Bc=i(En);Vw=s(Bc,"The "),Mh=r(Bc,"CODE",{});var J4=i(Mh);Jw=s(J4,"FlaxElectraPreTrainedModel"),J4.forEach(t),Gw=s(Bc," forward method, overrides the "),zh=r(Bc,"CODE",{});var G4=i(zh);Xw=s(G4,"__call__"),G4.forEach(t),Yw=s(Bc," special method."),Bc.forEach(t),Zw=h(La),b(na.$$.fragment,La),eE=h(La),b(sa.$$.fragment,La),La.forEach(t),Lt.forEach(t),wf=h(o),$n=r(o,"H2",{class:!0});var Og=i($n);aa=r(Og,"A",{id:!0,class:!0,href:!0});var X4=i(aa);jh=r(X4,"SPAN",{});var Y4=i(jh);b(ol.$$.fragment,Y4),Y4.forEach(t),X4.forEach(t),tE=h(Og),Ch=r(Og,"SPAN",{});var Z4=i(Ch);oE=s(Z4,"FlaxElectraForPreTraining"),Z4.forEach(t),Og.forEach(t),Ef=h(o),Ze=r(o,"DIV",{class:!0});var vt=i(Ze);b(nl.$$.fragment,vt),nE=h(vt),qh=r(vt,"P",{});var eM=i(qh);sE=s(eM,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),eM.forEach(t),aE=h(vt),Ph=r(vt,"P",{});var tM=i(Ph);rE=s(tM,"It is recommended to load the discriminator checkpoint into that model."),tM.forEach(t),iE=h(vt),sl=r(vt,"P",{});var Lg=i(sl);lE=s(Lg,"This model inherits from "),kc=r(Lg,"A",{href:!0});var oM=i(kc);dE=s(oM,"FlaxPreTrainedModel"),oM.forEach(t),cE=s(Lg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Lg.forEach(t),pE=h(vt),al=r(vt,"P",{});var Ng=i(al);hE=s(Ng,`This model is also a Flax Linen
`),rl=r(Ng,"A",{href:!0,rel:!0});var nM=i(rl);mE=s(nM,"flax.nn.Module"),nM.forEach(t),uE=s(Ng,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ng.forEach(t),fE=h(vt),Ah=r(vt,"P",{});var sM=i(Ah);gE=s(sM,"Finally, this model supports inherent JAX features such as:"),sM.forEach(t),_E=h(vt),uo=r(vt,"UL",{});var Na=i(uo);Oh=r(Na,"LI",{});var aM=i(Oh);il=r(aM,"A",{href:!0,rel:!0});var rM=i(il);vE=s(rM,"Just-In-Time (JIT) compilation"),rM.forEach(t),aM.forEach(t),kE=h(Na),Lh=r(Na,"LI",{});var iM=i(Lh);ll=r(iM,"A",{href:!0,rel:!0});var lM=i(ll);yE=s(lM,"Automatic Differentiation"),lM.forEach(t),iM.forEach(t),TE=h(Na),Nh=r(Na,"LI",{});var dM=i(Nh);dl=r(dM,"A",{href:!0,rel:!0});var cM=i(dl);bE=s(cM,"Vectorization"),cM.forEach(t),dM.forEach(t),wE=h(Na),Ih=r(Na,"LI",{});var pM=i(Ih);cl=r(pM,"A",{href:!0,rel:!0});var hM=i(cl);EE=s(hM,"Parallelization"),hM.forEach(t),pM.forEach(t),Na.forEach(t),$E=h(vt),Yt=r(vt,"DIV",{class:!0});var Ia=i(Yt);b(pl.$$.fragment,Ia),FE=h(Ia),Fn=r(Ia,"P",{});var Rc=i(Fn);xE=s(Rc,"The "),Dh=r(Rc,"CODE",{});var mM=i(Dh);ME=s(mM,"FlaxElectraPreTrainedModel"),mM.forEach(t),zE=s(Rc," forward method, overrides the "),Sh=r(Rc,"CODE",{});var uM=i(Sh);jE=s(uM,"__call__"),uM.forEach(t),CE=s(Rc," special method."),Rc.forEach(t),qE=h(Ia),b(ra.$$.fragment,Ia),PE=h(Ia),b(ia.$$.fragment,Ia),Ia.forEach(t),vt.forEach(t),$f=h(o),xn=r(o,"H2",{class:!0});var Ig=i(xn);la=r(Ig,"A",{id:!0,class:!0,href:!0});var fM=i(la);Wh=r(fM,"SPAN",{});var gM=i(Wh);b(hl.$$.fragment,gM),gM.forEach(t),fM.forEach(t),AE=h(Ig),Uh=r(Ig,"SPAN",{});var _M=i(Uh);OE=s(_M,"FlaxElectraForCausalLM"),_M.forEach(t),Ig.forEach(t),Ff=h(o),at=r(o,"DIV",{class:!0});var Nt=i(at);b(ml.$$.fragment,Nt),LE=h(Nt),Bh=r(Nt,"P",{});var vM=i(Bh);NE=s(vM,`Electra Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),vM.forEach(t),IE=h(Nt),ul=r(Nt,"P",{});var Dg=i(ul);DE=s(Dg,"This model inherits from "),yc=r(Dg,"A",{href:!0});var kM=i(yc);SE=s(kM,"FlaxPreTrainedModel"),kM.forEach(t),WE=s(Dg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Dg.forEach(t),UE=h(Nt),fl=r(Nt,"P",{});var Sg=i(fl);BE=s(Sg,`This model is also a Flax Linen
`),gl=r(Sg,"A",{href:!0,rel:!0});var yM=i(gl);RE=s(yM,"flax.nn.Module"),yM.forEach(t),HE=s(Sg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Sg.forEach(t),KE=h(Nt),Rh=r(Nt,"P",{});var TM=i(Rh);QE=s(TM,"Finally, this model supports inherent JAX features such as:"),TM.forEach(t),VE=h(Nt),fo=r(Nt,"UL",{});var Da=i(fo);Hh=r(Da,"LI",{});var bM=i(Hh);_l=r(bM,"A",{href:!0,rel:!0});var wM=i(_l);JE=s(wM,"Just-In-Time (JIT) compilation"),wM.forEach(t),bM.forEach(t),GE=h(Da),Kh=r(Da,"LI",{});var EM=i(Kh);vl=r(EM,"A",{href:!0,rel:!0});var $M=i(vl);XE=s($M,"Automatic Differentiation"),$M.forEach(t),EM.forEach(t),YE=h(Da),Qh=r(Da,"LI",{});var FM=i(Qh);kl=r(FM,"A",{href:!0,rel:!0});var xM=i(kl);ZE=s(xM,"Vectorization"),xM.forEach(t),FM.forEach(t),e$=h(Da),Vh=r(Da,"LI",{});var MM=i(Vh);yl=r(MM,"A",{href:!0,rel:!0});var zM=i(yl);t$=s(zM,"Parallelization"),zM.forEach(t),MM.forEach(t),Da.forEach(t),o$=h(Nt),Zt=r(Nt,"DIV",{class:!0});var Sa=i(Zt);b(Tl.$$.fragment,Sa),n$=h(Sa),Mn=r(Sa,"P",{});var Hc=i(Mn);s$=s(Hc,"The "),Jh=r(Hc,"CODE",{});var jM=i(Jh);a$=s(jM,"FlaxElectraPreTrainedModel"),jM.forEach(t),r$=s(Hc," forward method, overrides the "),Gh=r(Hc,"CODE",{});var CM=i(Gh);i$=s(CM,"__call__"),CM.forEach(t),l$=s(Hc," special method."),Hc.forEach(t),d$=h(Sa),b(da.$$.fragment,Sa),c$=h(Sa),b(ca.$$.fragment,Sa),Sa.forEach(t),Nt.forEach(t),xf=h(o),zn=r(o,"H2",{class:!0});var Wg=i(zn);pa=r(Wg,"A",{id:!0,class:!0,href:!0});var qM=i(pa);Xh=r(qM,"SPAN",{});var PM=i(Xh);b(bl.$$.fragment,PM),PM.forEach(t),qM.forEach(t),p$=h(Wg),Yh=r(Wg,"SPAN",{});var AM=i(Yh);h$=s(AM,"FlaxElectraForMaskedLM"),AM.forEach(t),Wg.forEach(t),Mf=h(o),rt=r(o,"DIV",{class:!0});var It=i(rt);b(wl.$$.fragment,It),m$=h(It),El=r(It,"P",{});var Ug=i(El);u$=s(Ug,"Electra Model with a "),Zh=r(Ug,"CODE",{});var OM=i(Zh);f$=s(OM,"language modeling"),OM.forEach(t),g$=s(Ug," head on top."),Ug.forEach(t),_$=h(It),$l=r(It,"P",{});var Bg=i($l);v$=s(Bg,"This model inherits from "),Tc=r(Bg,"A",{href:!0});var LM=i(Tc);k$=s(LM,"FlaxPreTrainedModel"),LM.forEach(t),y$=s(Bg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Bg.forEach(t),T$=h(It),Fl=r(It,"P",{});var Rg=i(Fl);b$=s(Rg,`This model is also a Flax Linen
`),xl=r(Rg,"A",{href:!0,rel:!0});var NM=i(xl);w$=s(NM,"flax.nn.Module"),NM.forEach(t),E$=s(Rg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Rg.forEach(t),$$=h(It),em=r(It,"P",{});var IM=i(em);F$=s(IM,"Finally, this model supports inherent JAX features such as:"),IM.forEach(t),x$=h(It),go=r(It,"UL",{});var Wa=i(go);tm=r(Wa,"LI",{});var DM=i(tm);Ml=r(DM,"A",{href:!0,rel:!0});var SM=i(Ml);M$=s(SM,"Just-In-Time (JIT) compilation"),SM.forEach(t),DM.forEach(t),z$=h(Wa),om=r(Wa,"LI",{});var WM=i(om);zl=r(WM,"A",{href:!0,rel:!0});var UM=i(zl);j$=s(UM,"Automatic Differentiation"),UM.forEach(t),WM.forEach(t),C$=h(Wa),nm=r(Wa,"LI",{});var BM=i(nm);jl=r(BM,"A",{href:!0,rel:!0});var RM=i(jl);q$=s(RM,"Vectorization"),RM.forEach(t),BM.forEach(t),P$=h(Wa),sm=r(Wa,"LI",{});var HM=i(sm);Cl=r(HM,"A",{href:!0,rel:!0});var KM=i(Cl);A$=s(KM,"Parallelization"),KM.forEach(t),HM.forEach(t),Wa.forEach(t),O$=h(It),eo=r(It,"DIV",{class:!0});var Ua=i(eo);b(ql.$$.fragment,Ua),L$=h(Ua),jn=r(Ua,"P",{});var Kc=i(jn);N$=s(Kc,"The "),am=r(Kc,"CODE",{});var QM=i(am);I$=s(QM,"FlaxElectraPreTrainedModel"),QM.forEach(t),D$=s(Kc," forward method, overrides the "),rm=r(Kc,"CODE",{});var VM=i(rm);S$=s(VM,"__call__"),VM.forEach(t),W$=s(Kc," special method."),Kc.forEach(t),U$=h(Ua),b(ha.$$.fragment,Ua),B$=h(Ua),b(ma.$$.fragment,Ua),Ua.forEach(t),It.forEach(t),zf=h(o),Cn=r(o,"H2",{class:!0});var Hg=i(Cn);ua=r(Hg,"A",{id:!0,class:!0,href:!0});var JM=i(ua);im=r(JM,"SPAN",{});var GM=i(im);b(Pl.$$.fragment,GM),GM.forEach(t),JM.forEach(t),R$=h(Hg),lm=r(Hg,"SPAN",{});var XM=i(lm);H$=s(XM,"FlaxElectraForSequenceClassification"),XM.forEach(t),Hg.forEach(t),jf=h(o),it=r(o,"DIV",{class:!0});var Dt=i(it);b(Al.$$.fragment,Dt),K$=h(Dt),dm=r(Dt,"P",{});var YM=i(dm);Q$=s(YM,`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),YM.forEach(t),V$=h(Dt),Ol=r(Dt,"P",{});var Kg=i(Ol);J$=s(Kg,"This model inherits from "),bc=r(Kg,"A",{href:!0});var ZM=i(bc);G$=s(ZM,"FlaxPreTrainedModel"),ZM.forEach(t),X$=s(Kg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Kg.forEach(t),Y$=h(Dt),Ll=r(Dt,"P",{});var Qg=i(Ll);Z$=s(Qg,`This model is also a Flax Linen
`),Nl=r(Qg,"A",{href:!0,rel:!0});var ez=i(Nl);e1=s(ez,"flax.nn.Module"),ez.forEach(t),t1=s(Qg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Qg.forEach(t),o1=h(Dt),cm=r(Dt,"P",{});var tz=i(cm);n1=s(tz,"Finally, this model supports inherent JAX features such as:"),tz.forEach(t),s1=h(Dt),_o=r(Dt,"UL",{});var Ba=i(_o);pm=r(Ba,"LI",{});var oz=i(pm);Il=r(oz,"A",{href:!0,rel:!0});var nz=i(Il);a1=s(nz,"Just-In-Time (JIT) compilation"),nz.forEach(t),oz.forEach(t),r1=h(Ba),hm=r(Ba,"LI",{});var sz=i(hm);Dl=r(sz,"A",{href:!0,rel:!0});var az=i(Dl);i1=s(az,"Automatic Differentiation"),az.forEach(t),sz.forEach(t),l1=h(Ba),mm=r(Ba,"LI",{});var rz=i(mm);Sl=r(rz,"A",{href:!0,rel:!0});var iz=i(Sl);d1=s(iz,"Vectorization"),iz.forEach(t),rz.forEach(t),c1=h(Ba),um=r(Ba,"LI",{});var lz=i(um);Wl=r(lz,"A",{href:!0,rel:!0});var dz=i(Wl);p1=s(dz,"Parallelization"),dz.forEach(t),lz.forEach(t),Ba.forEach(t),h1=h(Dt),to=r(Dt,"DIV",{class:!0});var Ra=i(to);b(Ul.$$.fragment,Ra),m1=h(Ra),qn=r(Ra,"P",{});var Qc=i(qn);u1=s(Qc,"The "),fm=r(Qc,"CODE",{});var cz=i(fm);f1=s(cz,"FlaxElectraPreTrainedModel"),cz.forEach(t),g1=s(Qc," forward method, overrides the "),gm=r(Qc,"CODE",{});var pz=i(gm);_1=s(pz,"__call__"),pz.forEach(t),v1=s(Qc," special method."),Qc.forEach(t),k1=h(Ra),b(fa.$$.fragment,Ra),y1=h(Ra),b(ga.$$.fragment,Ra),Ra.forEach(t),Dt.forEach(t),Cf=h(o),Pn=r(o,"H2",{class:!0});var Vg=i(Pn);_a=r(Vg,"A",{id:!0,class:!0,href:!0});var hz=i(_a);_m=r(hz,"SPAN",{});var mz=i(_m);b(Bl.$$.fragment,mz),mz.forEach(t),hz.forEach(t),T1=h(Vg),vm=r(Vg,"SPAN",{});var uz=i(vm);b1=s(uz,"FlaxElectraForMultipleChoice"),uz.forEach(t),Vg.forEach(t),qf=h(o),lt=r(o,"DIV",{class:!0});var St=i(lt);b(Rl.$$.fragment,St),w1=h(St),km=r(St,"P",{});var fz=i(km);E1=s(fz,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),fz.forEach(t),$1=h(St),Hl=r(St,"P",{});var Jg=i(Hl);F1=s(Jg,"This model inherits from "),wc=r(Jg,"A",{href:!0});var gz=i(wc);x1=s(gz,"FlaxPreTrainedModel"),gz.forEach(t),M1=s(Jg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jg.forEach(t),z1=h(St),Kl=r(St,"P",{});var Gg=i(Kl);j1=s(Gg,`This model is also a Flax Linen
`),Ql=r(Gg,"A",{href:!0,rel:!0});var _z=i(Ql);C1=s(_z,"flax.nn.Module"),_z.forEach(t),q1=s(Gg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Gg.forEach(t),P1=h(St),ym=r(St,"P",{});var vz=i(ym);A1=s(vz,"Finally, this model supports inherent JAX features such as:"),vz.forEach(t),O1=h(St),vo=r(St,"UL",{});var Ha=i(vo);Tm=r(Ha,"LI",{});var kz=i(Tm);Vl=r(kz,"A",{href:!0,rel:!0});var yz=i(Vl);L1=s(yz,"Just-In-Time (JIT) compilation"),yz.forEach(t),kz.forEach(t),N1=h(Ha),bm=r(Ha,"LI",{});var Tz=i(bm);Jl=r(Tz,"A",{href:!0,rel:!0});var bz=i(Jl);I1=s(bz,"Automatic Differentiation"),bz.forEach(t),Tz.forEach(t),D1=h(Ha),wm=r(Ha,"LI",{});var wz=i(wm);Gl=r(wz,"A",{href:!0,rel:!0});var Ez=i(Gl);S1=s(Ez,"Vectorization"),Ez.forEach(t),wz.forEach(t),W1=h(Ha),Em=r(Ha,"LI",{});var $z=i(Em);Xl=r($z,"A",{href:!0,rel:!0});var Fz=i(Xl);U1=s(Fz,"Parallelization"),Fz.forEach(t),$z.forEach(t),Ha.forEach(t),B1=h(St),oo=r(St,"DIV",{class:!0});var Ka=i(oo);b(Yl.$$.fragment,Ka),R1=h(Ka),An=r(Ka,"P",{});var Vc=i(An);H1=s(Vc,"The "),$m=r(Vc,"CODE",{});var xz=i($m);K1=s(xz,"FlaxElectraPreTrainedModel"),xz.forEach(t),Q1=s(Vc," forward method, overrides the "),Fm=r(Vc,"CODE",{});var Mz=i(Fm);V1=s(Mz,"__call__"),Mz.forEach(t),J1=s(Vc," special method."),Vc.forEach(t),G1=h(Ka),b(va.$$.fragment,Ka),X1=h(Ka),b(ka.$$.fragment,Ka),Ka.forEach(t),St.forEach(t),Pf=h(o),On=r(o,"H2",{class:!0});var Xg=i(On);ya=r(Xg,"A",{id:!0,class:!0,href:!0});var zz=i(ya);xm=r(zz,"SPAN",{});var jz=i(xm);b(Zl.$$.fragment,jz),jz.forEach(t),zz.forEach(t),Y1=h(Xg),Mm=r(Xg,"SPAN",{});var Cz=i(Mm);Z1=s(Cz,"FlaxElectraForTokenClassification"),Cz.forEach(t),Xg.forEach(t),Af=h(o),et=r(o,"DIV",{class:!0});var kt=i(et);b(ed.$$.fragment,kt),eF=h(kt),zm=r(kt,"P",{});var qz=i(zm);tF=s(qz,"Electra model with a token classification head on top."),qz.forEach(t),oF=h(kt),jm=r(kt,"P",{});var Pz=i(jm);nF=s(Pz,"Both the discriminator and generator may be loaded into this model."),Pz.forEach(t),sF=h(kt),td=r(kt,"P",{});var Yg=i(td);aF=s(Yg,"This model inherits from "),Ec=r(Yg,"A",{href:!0});var Az=i(Ec);rF=s(Az,"FlaxPreTrainedModel"),Az.forEach(t),iF=s(Yg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yg.forEach(t),lF=h(kt),od=r(kt,"P",{});var Zg=i(od);dF=s(Zg,`This model is also a Flax Linen
`),nd=r(Zg,"A",{href:!0,rel:!0});var Oz=i(nd);cF=s(Oz,"flax.nn.Module"),Oz.forEach(t),pF=s(Zg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Zg.forEach(t),hF=h(kt),Cm=r(kt,"P",{});var Lz=i(Cm);mF=s(Lz,"Finally, this model supports inherent JAX features such as:"),Lz.forEach(t),uF=h(kt),ko=r(kt,"UL",{});var Qa=i(ko);qm=r(Qa,"LI",{});var Nz=i(qm);sd=r(Nz,"A",{href:!0,rel:!0});var Iz=i(sd);fF=s(Iz,"Just-In-Time (JIT) compilation"),Iz.forEach(t),Nz.forEach(t),gF=h(Qa),Pm=r(Qa,"LI",{});var Dz=i(Pm);ad=r(Dz,"A",{href:!0,rel:!0});var Sz=i(ad);_F=s(Sz,"Automatic Differentiation"),Sz.forEach(t),Dz.forEach(t),vF=h(Qa),Am=r(Qa,"LI",{});var Wz=i(Am);rd=r(Wz,"A",{href:!0,rel:!0});var Uz=i(rd);kF=s(Uz,"Vectorization"),Uz.forEach(t),Wz.forEach(t),yF=h(Qa),Om=r(Qa,"LI",{});var Bz=i(Om);id=r(Bz,"A",{href:!0,rel:!0});var Rz=i(id);TF=s(Rz,"Parallelization"),Rz.forEach(t),Bz.forEach(t),Qa.forEach(t),bF=h(kt),no=r(kt,"DIV",{class:!0});var Va=i(no);b(ld.$$.fragment,Va),wF=h(Va),Ln=r(Va,"P",{});var Jc=i(Ln);EF=s(Jc,"The "),Lm=r(Jc,"CODE",{});var Hz=i(Lm);$F=s(Hz,"FlaxElectraPreTrainedModel"),Hz.forEach(t),FF=s(Jc," forward method, overrides the "),Nm=r(Jc,"CODE",{});var Kz=i(Nm);xF=s(Kz,"__call__"),Kz.forEach(t),MF=s(Jc," special method."),Jc.forEach(t),zF=h(Va),b(Ta.$$.fragment,Va),jF=h(Va),b(ba.$$.fragment,Va),Va.forEach(t),kt.forEach(t),Of=h(o),Nn=r(o,"H2",{class:!0});var e_=i(Nn);wa=r(e_,"A",{id:!0,class:!0,href:!0});var Qz=i(wa);Im=r(Qz,"SPAN",{});var Vz=i(Im);b(dd.$$.fragment,Vz),Vz.forEach(t),Qz.forEach(t),CF=h(e_),Dm=r(e_,"SPAN",{});var Jz=i(Dm);qF=s(Jz,"FlaxElectraForQuestionAnswering"),Jz.forEach(t),e_.forEach(t),Lf=h(o),dt=r(o,"DIV",{class:!0});var Wt=i(dt);b(cd.$$.fragment,Wt),PF=h(Wt),In=r(Wt,"P",{});var Gc=i(In);AF=s(Gc,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Sm=r(Gc,"CODE",{});var Gz=i(Sm);OF=s(Gz,"span start logits"),Gz.forEach(t),LF=s(Gc," and "),Wm=r(Gc,"CODE",{});var Xz=i(Wm);NF=s(Xz,"span end logits"),Xz.forEach(t),IF=s(Gc,")."),Gc.forEach(t),DF=h(Wt),pd=r(Wt,"P",{});var t_=i(pd);SF=s(t_,"This model inherits from "),$c=r(t_,"A",{href:!0});var Yz=i($c);WF=s(Yz,"FlaxPreTrainedModel"),Yz.forEach(t),UF=s(t_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),t_.forEach(t),BF=h(Wt),hd=r(Wt,"P",{});var o_=i(hd);RF=s(o_,`This model is also a Flax Linen
`),md=r(o_,"A",{href:!0,rel:!0});var Zz=i(md);HF=s(Zz,"flax.nn.Module"),Zz.forEach(t),KF=s(o_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),o_.forEach(t),QF=h(Wt),Um=r(Wt,"P",{});var ej=i(Um);VF=s(ej,"Finally, this model supports inherent JAX features such as:"),ej.forEach(t),JF=h(Wt),yo=r(Wt,"UL",{});var Ja=i(yo);Bm=r(Ja,"LI",{});var tj=i(Bm);ud=r(tj,"A",{href:!0,rel:!0});var oj=i(ud);GF=s(oj,"Just-In-Time (JIT) compilation"),oj.forEach(t),tj.forEach(t),XF=h(Ja),Rm=r(Ja,"LI",{});var nj=i(Rm);fd=r(nj,"A",{href:!0,rel:!0});var sj=i(fd);YF=s(sj,"Automatic Differentiation"),sj.forEach(t),nj.forEach(t),ZF=h(Ja),Hm=r(Ja,"LI",{});var aj=i(Hm);gd=r(aj,"A",{href:!0,rel:!0});var rj=i(gd);e0=s(rj,"Vectorization"),rj.forEach(t),aj.forEach(t),t0=h(Ja),Km=r(Ja,"LI",{});var ij=i(Km);_d=r(ij,"A",{href:!0,rel:!0});var lj=i(_d);o0=s(lj,"Parallelization"),lj.forEach(t),ij.forEach(t),Ja.forEach(t),n0=h(Wt),so=r(Wt,"DIV",{class:!0});var Ga=i(so);b(vd.$$.fragment,Ga),s0=h(Ga),Dn=r(Ga,"P",{});var Xc=i(Dn);a0=s(Xc,"The "),Qm=r(Xc,"CODE",{});var dj=i(Qm);r0=s(dj,"FlaxElectraPreTrainedModel"),dj.forEach(t),i0=s(Xc," forward method, overrides the "),Vm=r(Xc,"CODE",{});var cj=i(Vm);l0=s(cj,"__call__"),cj.forEach(t),d0=s(Xc," special method."),Xc.forEach(t),c0=h(Ga),b(Ea.$$.fragment,Ga),p0=h(Ga),b($a.$$.fragment,Ga),Ga.forEach(t),Wt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(xC)),u(f,"id","electra"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#electra"),u(c,"class","relative group"),u(ae,"id","overview"),u(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ae,"href","#overview"),u(S,"class","relative group"),u(re,"href","https://openreview.net/pdf?id=r1xMH1BtvB"),u(re,"rel","nofollow"),u(P,"href","https://github.com/google-research/electra"),u(P,"rel","nofollow"),u(ie,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraForMaskedLM"),u(le,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraForPreTraining"),u(Z,"href","https://huggingface.co/lysandre"),u(Z,"rel","nofollow"),u(L,"href","https://github.com/google-research/electra"),u(L,"rel","nofollow"),u(De,"id","transformers.ElectraConfig"),u(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(De,"href","#transformers.ElectraConfig"),u(j,"class","relative group"),u(Re,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraModel"),u(He,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.TFElectraModel"),u(Be,"href","https://huggingface.co/google/electra-small-discriminator"),u(Be,"rel","nofollow"),u(qd,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),u(Pd,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),u(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bn,"id","transformers.ElectraTokenizer"),u(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bn,"href","#transformers.ElectraTokenizer"),u(Do,"class","relative group"),u(Ad,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizer"),u(Od,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer"),u(Ld,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hn,"id","transformers.ElectraTokenizerFast"),u(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hn,"href","#transformers.ElectraTokenizerFast"),u(So,"class","relative group"),u(Nd,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraTokenizerFast"),u(Id,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizerFast"),u(Dd,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizerFast"),u(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qn,"id","transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),u(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qn,"href","#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),u(Wo,"class","relative group"),u(Sd,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraForPreTraining"),u(Uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wd,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.TFElectraForPreTraining"),u(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vn,"id","transformers.ElectraModel"),u(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vn,"href","#transformers.ElectraModel"),u(Ro,"class","relative group"),u(Ud,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),u(mr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(mr,"rel","nofollow"),u(Bd,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraModel"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xn,"id","transformers.ElectraForPreTraining"),u(Xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xn,"href","#transformers.ElectraForPreTraining"),u(Ko,"class","relative group"),u(Rd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),u(kr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(kr,"rel","nofollow"),u(Hd,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraForPreTraining"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"id","transformers.ElectraForCausalLM"),u(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(es,"href","#transformers.ElectraForCausalLM"),u(Vo,"class","relative group"),u(Kd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),u(Fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Fr,"rel","nofollow"),u(Qd,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraForCausalLM"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ns,"id","transformers.ElectraForMaskedLM"),u(ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ns,"href","#transformers.ElectraForMaskedLM"),u(Go,"class","relative group"),u(Vd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),u(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(qr,"rel","nofollow"),u(Jd,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraForMaskedLM"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(is,"id","transformers.ElectraForSequenceClassification"),u(is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(is,"href","#transformers.ElectraForSequenceClassification"),u(Yo,"class","relative group"),u(Gd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),u(Ir,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ir,"rel","nofollow"),u(Xd,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraForSequenceClassification"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ms,"id","transformers.ElectraForMultipleChoice"),u(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ms,"href","#transformers.ElectraForMultipleChoice"),u(en,"class","relative group"),u(Yd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),u(Rr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Rr,"rel","nofollow"),u(Zd,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraForMultipleChoice"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gs,"id","transformers.ElectraForTokenClassification"),u(gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(gs,"href","#transformers.ElectraForTokenClassification"),u(on,"class","relative group"),u(ec,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),u(Gr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Gr,"rel","nofollow"),u(tc,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraForTokenClassification"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.ElectraForQuestionAnswering"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.ElectraForQuestionAnswering"),u(sn,"class","relative group"),u(oc,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),u(oi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(oi,"rel","nofollow"),u(nc,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.ElectraForQuestionAnswering"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Es,"id","transformers.TFElectraModel"),u(Es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Es,"href","#transformers.TFElectraModel"),u(ln,"class","relative group"),u(sc,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(li,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(li,"rel","nofollow"),u(ac,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.TFElectraModel"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ms,"id","transformers.TFElectraForPreTraining"),u(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ms,"href","#transformers.TFElectraForPreTraining"),u(cn,"class","relative group"),u(rc,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(ui,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ui,"rel","nofollow"),u(ic,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.TFElectraForPreTraining"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qs,"id","transformers.TFElectraForMaskedLM"),u(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qs,"href","#transformers.TFElectraForMaskedLM"),u(hn,"class","relative group"),u(lc,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(yi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(yi,"rel","nofollow"),u(dc,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.TFElectraForMaskedLM"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ns,"id","transformers.TFElectraForSequenceClassification"),u(Ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ns,"href","#transformers.TFElectraForSequenceClassification"),u(un,"class","relative group"),u(cc,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(Fi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Fi,"rel","nofollow"),u(pc,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.TFElectraForSequenceClassification"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Us,"id","transformers.TFElectraForMultipleChoice"),u(Us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Us,"href","#transformers.TFElectraForMultipleChoice"),u(gn,"class","relative group"),u(hc,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(qi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(qi,"rel","nofollow"),u(mc,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.TFElectraForMultipleChoice"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.TFElectraForTokenClassification"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.TFElectraForTokenClassification"),u(vn,"class","relative group"),u(uc,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ii,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ii,"rel","nofollow"),u(fc,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.TFElectraForTokenClassification"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xs,"id","transformers.TFElectraForQuestionAnswering"),u(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xs,"href","#transformers.TFElectraForQuestionAnswering"),u(yn,"class","relative group"),u(gc,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ri,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ri,"rel","nofollow"),u(_c,"href","/docs/transformers/v4.22.2/en/model_doc/electra#transformers.TFElectraForQuestionAnswering"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oa,"id","transformers.FlaxElectraModel"),u(oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(oa,"href","#transformers.FlaxElectraModel"),u(wn,"class","relative group"),u(vc,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Gi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Gi,"rel","nofollow"),u(Xi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Xi,"rel","nofollow"),u(Yi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Yi,"rel","nofollow"),u(Zi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Zi,"rel","nofollow"),u(el,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(el,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(aa,"id","transformers.FlaxElectraForPreTraining"),u(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(aa,"href","#transformers.FlaxElectraForPreTraining"),u($n,"class","relative group"),u(kc,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(rl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(rl,"rel","nofollow"),u(il,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(il,"rel","nofollow"),u(ll,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ll,"rel","nofollow"),u(dl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(dl,"rel","nofollow"),u(cl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(cl,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(la,"id","transformers.FlaxElectraForCausalLM"),u(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(la,"href","#transformers.FlaxElectraForCausalLM"),u(xn,"class","relative group"),u(yc,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(gl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(gl,"rel","nofollow"),u(_l,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(_l,"rel","nofollow"),u(vl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(vl,"rel","nofollow"),u(kl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(kl,"rel","nofollow"),u(yl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(yl,"rel","nofollow"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pa,"id","transformers.FlaxElectraForMaskedLM"),u(pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pa,"href","#transformers.FlaxElectraForMaskedLM"),u(zn,"class","relative group"),u(Tc,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(xl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(xl,"rel","nofollow"),u(Ml,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ml,"rel","nofollow"),u(zl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(zl,"rel","nofollow"),u(jl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(jl,"rel","nofollow"),u(Cl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Cl,"rel","nofollow"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ua,"id","transformers.FlaxElectraForSequenceClassification"),u(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ua,"href","#transformers.FlaxElectraForSequenceClassification"),u(Cn,"class","relative group"),u(bc,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Nl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Nl,"rel","nofollow"),u(Il,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Il,"rel","nofollow"),u(Dl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Dl,"rel","nofollow"),u(Sl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Sl,"rel","nofollow"),u(Wl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Wl,"rel","nofollow"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_a,"id","transformers.FlaxElectraForMultipleChoice"),u(_a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_a,"href","#transformers.FlaxElectraForMultipleChoice"),u(Pn,"class","relative group"),u(wc,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ql,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Ql,"rel","nofollow"),u(Vl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Vl,"rel","nofollow"),u(Jl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Jl,"rel","nofollow"),u(Gl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Gl,"rel","nofollow"),u(Xl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Xl,"rel","nofollow"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ya,"id","transformers.FlaxElectraForTokenClassification"),u(ya,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ya,"href","#transformers.FlaxElectraForTokenClassification"),u(On,"class","relative group"),u(Ec,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(nd,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(nd,"rel","nofollow"),u(sd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(sd,"rel","nofollow"),u(ad,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ad,"rel","nofollow"),u(rd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(rd,"rel","nofollow"),u(id,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(id,"rel","nofollow"),u(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wa,"id","transformers.FlaxElectraForQuestionAnswering"),u(wa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wa,"href","#transformers.FlaxElectraForQuestionAnswering"),u(Nn,"class","relative group"),u($c,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(md,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(md,"rel","nofollow"),u(ud,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ud,"rel","nofollow"),u(fd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(fd,"rel","nofollow"),u(gd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(gd,"rel","nofollow"),u(_d,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(_d,"rel","nofollow"),u(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,v){e(document.head,d),_(o,g,v),_(o,c,v),e(c,f),e(f,k),w(l,k,null),e(c,m),e(c,z),e(z,Te),_(o,fe,v),_(o,S,v),e(S,ae),e(ae,ee),w(M,ee,null),e(S,be),e(S,K),e(K,we),_(o,ge,v),_(o,U,v),e(U,Ee),e(U,re),e(re,Q),e(U,$e),_(o,_e,v),_(o,R,v),e(R,Fe),_(o,ve,v),_(o,H,v),e(H,me),e(me,xe),_(o,oe,v),_(o,q,v),e(q,A),_(o,ke,v),_(o,B,v),e(B,ue),e(ue,Me),e(B,V),e(B,ne),e(ne,ze),e(ne,P),e(P,je),e(ne,J),e(ne,ie),e(ie,Ce),e(ne,G),e(ne,le),e(le,qe),e(ne,I),_(o,ye,v),_(o,D,v),e(D,Pe),e(D,Z),e(Z,O),e(D,Ae),e(D,L),e(L,Oe),e(D,Le),_(o,y,v),_(o,j,v),e(j,De),e(De,te),w(We,te,null),e(j,Qe),e(j,C),e(C,Ve),_(o,Ke,v),_(o,de,v),w(Ue,de,null),e(de,Je),e(de,N),e(N,X),e(N,Re),e(Re,Ge),e(N,Y),e(N,He),e(He,Xe),e(N,Ne),e(N,Be),e(Be,se),e(N,Ye),e(de,n_),e(de,Io),e(Io,s_),e(Io,qd),e(qd,a_),e(Io,r_),e(Io,Pd),e(Pd,i_),e(Io,l_),e(de,d_),w(Un,de,null),_(o,Nu,v),_(o,Do,v),e(Do,Bn),e(Bn,Yc),w(Xa,Yc,null),e(Do,c_),e(Do,Zc),e(Zc,p_),_(o,Iu,v),_(o,Ut,v),w(Ya,Ut,null),e(Ut,h_),e(Ut,ep),e(ep,m_),e(Ut,u_),e(Ut,Rn),e(Rn,Ad),e(Ad,f_),e(Rn,g_),e(Rn,Od),e(Od,__),e(Rn,v_),e(Ut,k_),e(Ut,Za),e(Za,y_),e(Za,Ld),e(Ld,T_),e(Za,b_),_(o,Du,v),_(o,So,v),e(So,Hn),e(Hn,tp),w(er,tp,null),e(So,w_),e(So,op),e(op,E_),_(o,Su,v),_(o,Bt,v),w(tr,Bt,null),e(Bt,$_),e(Bt,or),e(or,F_),e(or,np),e(np,x_),e(or,M_),e(Bt,z_),e(Bt,Kn),e(Kn,Nd),e(Nd,j_),e(Kn,C_),e(Kn,Id),e(Id,q_),e(Kn,P_),e(Bt,A_),e(Bt,nr),e(nr,O_),e(nr,Dd),e(Dd,L_),e(nr,N_),_(o,Wu,v),_(o,Wo,v),e(Wo,Qn),e(Qn,sp),w(sr,sp,null),e(Wo,I_),e(Wo,ap),e(ap,D_),_(o,Uu,v),_(o,Uo,v),w(ar,Uo,null),e(Uo,S_),e(Uo,rr),e(rr,W_),e(rr,Sd),e(Sd,U_),e(rr,B_),_(o,Bu,v),_(o,Bo,v),w(ir,Bo,null),e(Bo,R_),e(Bo,lr),e(lr,H_),e(lr,Wd),e(Wd,K_),e(lr,Q_),_(o,Ru,v),_(o,Ro,v),e(Ro,Vn),e(Vn,rp),w(dr,rp,null),e(Ro,V_),e(Ro,ip),e(ip,J_),_(o,Hu,v),_(o,yt,v),w(cr,yt,null),e(yt,G_),e(yt,lp),e(lp,X_),e(yt,Y_),e(yt,pr),e(pr,Z_),e(pr,Ud),e(Ud,ev),e(pr,tv),e(yt,ov),e(yt,hr),e(hr,nv),e(hr,mr),e(mr,sv),e(hr,av),e(yt,rv),e(yt,Rt),w(ur,Rt,null),e(Rt,iv),e(Rt,Ho),e(Ho,lv),e(Ho,Bd),e(Bd,dv),e(Ho,cv),e(Ho,dp),e(dp,pv),e(Ho,hv),e(Rt,mv),w(Jn,Rt,null),e(Rt,uv),w(Gn,Rt,null),_(o,Ku,v),_(o,Ko,v),e(Ko,Xn),e(Xn,cp),w(fr,cp,null),e(Ko,fv),e(Ko,pp),e(pp,gv),_(o,Qu,v),_(o,pt,v),w(gr,pt,null),e(pt,_v),e(pt,hp),e(hp,vv),e(pt,kv),e(pt,mp),e(mp,yv),e(pt,Tv),e(pt,_r),e(_r,bv),e(_r,Rd),e(Rd,wv),e(_r,Ev),e(pt,$v),e(pt,vr),e(vr,Fv),e(vr,kr),e(kr,xv),e(vr,Mv),e(pt,zv),e(pt,Ht),w(yr,Ht,null),e(Ht,jv),e(Ht,Qo),e(Qo,Cv),e(Qo,Hd),e(Hd,qv),e(Qo,Pv),e(Qo,up),e(up,Av),e(Qo,Ov),e(Ht,Lv),w(Yn,Ht,null),e(Ht,Nv),w(Zn,Ht,null),_(o,Vu,v),_(o,Vo,v),e(Vo,es),e(es,fp),w(Tr,fp,null),e(Vo,Iv),e(Vo,gp),e(gp,Dv),_(o,Ju,v),_(o,Tt,v),w(br,Tt,null),e(Tt,Sv),e(Tt,wr),e(wr,Wv),e(wr,_p),e(_p,Uv),e(wr,Bv),e(Tt,Rv),e(Tt,Er),e(Er,Hv),e(Er,Kd),e(Kd,Kv),e(Er,Qv),e(Tt,Vv),e(Tt,$r),e($r,Jv),e($r,Fr),e(Fr,Gv),e($r,Xv),e(Tt,Yv),e(Tt,Kt),w(xr,Kt,null),e(Kt,Zv),e(Kt,Jo),e(Jo,ek),e(Jo,Qd),e(Qd,tk),e(Jo,ok),e(Jo,vp),e(vp,nk),e(Jo,sk),e(Kt,ak),w(ts,Kt,null),e(Kt,rk),w(os,Kt,null),_(o,Gu,v),_(o,Go,v),e(Go,ns),e(ns,kp),w(Mr,kp,null),e(Go,ik),e(Go,yp),e(yp,lk),_(o,Xu,v),_(o,ht,v),w(zr,ht,null),e(ht,dk),e(ht,Tp),e(Tp,ck),e(ht,pk),e(ht,bp),e(bp,hk),e(ht,mk),e(ht,jr),e(jr,uk),e(jr,Vd),e(Vd,fk),e(jr,gk),e(ht,_k),e(ht,Cr),e(Cr,vk),e(Cr,qr),e(qr,kk),e(Cr,yk),e(ht,Tk),e(ht,$t),w(Pr,$t,null),e($t,bk),e($t,Xo),e(Xo,wk),e(Xo,Jd),e(Jd,Ek),e(Xo,$k),e(Xo,wp),e(wp,Fk),e(Xo,xk),e($t,Mk),w(ss,$t,null),e($t,zk),w(as,$t,null),e($t,jk),w(rs,$t,null),_(o,Yu,v),_(o,Yo,v),e(Yo,is),e(is,Ep),w(Ar,Ep,null),e(Yo,Ck),e(Yo,$p),e($p,qk),_(o,Zu,v),_(o,bt,v),w(Or,bt,null),e(bt,Pk),e(bt,Fp),e(Fp,Ak),e(bt,Ok),e(bt,Lr),e(Lr,Lk),e(Lr,Gd),e(Gd,Nk),e(Lr,Ik),e(bt,Dk),e(bt,Nr),e(Nr,Sk),e(Nr,Ir),e(Ir,Wk),e(Nr,Uk),e(bt,Bk),e(bt,ct),w(Dr,ct,null),e(ct,Rk),e(ct,Zo),e(Zo,Hk),e(Zo,Xd),e(Xd,Kk),e(Zo,Qk),e(Zo,xp),e(xp,Vk),e(Zo,Jk),e(ct,Gk),w(ls,ct,null),e(ct,Xk),w(ds,ct,null),e(ct,Yk),w(cs,ct,null),e(ct,Zk),w(ps,ct,null),e(ct,e2),w(hs,ct,null),_(o,ef,v),_(o,en,v),e(en,ms),e(ms,Mp),w(Sr,Mp,null),e(en,t2),e(en,zp),e(zp,o2),_(o,tf,v),_(o,wt,v),w(Wr,wt,null),e(wt,n2),e(wt,jp),e(jp,s2),e(wt,a2),e(wt,Ur),e(Ur,r2),e(Ur,Yd),e(Yd,i2),e(Ur,l2),e(wt,d2),e(wt,Br),e(Br,c2),e(Br,Rr),e(Rr,p2),e(Br,h2),e(wt,m2),e(wt,Qt),w(Hr,Qt,null),e(Qt,u2),e(Qt,tn),e(tn,f2),e(tn,Zd),e(Zd,g2),e(tn,_2),e(tn,Cp),e(Cp,v2),e(tn,k2),e(Qt,y2),w(us,Qt,null),e(Qt,T2),w(fs,Qt,null),_(o,of,v),_(o,on,v),e(on,gs),e(gs,qp),w(Kr,qp,null),e(on,b2),e(on,Pp),e(Pp,w2),_(o,nf,v),_(o,mt,v),w(Qr,mt,null),e(mt,E2),e(mt,Ap),e(Ap,$2),e(mt,F2),e(mt,Op),e(Op,x2),e(mt,M2),e(mt,Vr),e(Vr,z2),e(Vr,ec),e(ec,j2),e(Vr,C2),e(mt,q2),e(mt,Jr),e(Jr,P2),e(Jr,Gr),e(Gr,A2),e(Jr,O2),e(mt,L2),e(mt,Ft),w(Xr,Ft,null),e(Ft,N2),e(Ft,nn),e(nn,I2),e(nn,tc),e(tc,D2),e(nn,S2),e(nn,Lp),e(Lp,W2),e(nn,U2),e(Ft,B2),w(_s,Ft,null),e(Ft,R2),w(vs,Ft,null),e(Ft,H2),w(ks,Ft,null),_(o,sf,v),_(o,sn,v),e(sn,ys),e(ys,Np),w(Yr,Np,null),e(sn,K2),e(sn,Ip),e(Ip,Q2),_(o,af,v),_(o,Et,v),w(Zr,Et,null),e(Et,V2),e(Et,an),e(an,J2),e(an,Dp),e(Dp,G2),e(an,X2),e(an,Sp),e(Sp,Y2),e(an,Z2),e(Et,ey),e(Et,ei),e(ei,ty),e(ei,oc),e(oc,oy),e(ei,ny),e(Et,sy),e(Et,ti),e(ti,ay),e(ti,oi),e(oi,ry),e(ti,iy),e(Et,ly),e(Et,xt),w(ni,xt,null),e(xt,dy),e(xt,rn),e(rn,cy),e(rn,nc),e(nc,py),e(rn,hy),e(rn,Wp),e(Wp,my),e(rn,uy),e(xt,fy),w(Ts,xt,null),e(xt,gy),w(bs,xt,null),e(xt,_y),w(ws,xt,null),_(o,rf,v),_(o,ln,v),e(ln,Es),e(Es,Up),w(si,Up,null),e(ln,vy),e(ln,Bp),e(Bp,ky),_(o,lf,v),_(o,ut,v),w(ai,ut,null),e(ut,yy),e(ut,Rp),e(Rp,Ty),e(ut,by),e(ut,ri),e(ri,wy),e(ri,sc),e(sc,Ey),e(ri,$y),e(ut,Fy),e(ut,ii),e(ii,xy),e(ii,li),e(li,My),e(ii,zy),e(ut,jy),w($s,ut,null),e(ut,Cy),e(ut,Vt),w(di,Vt,null),e(Vt,qy),e(Vt,dn),e(dn,Py),e(dn,ac),e(ac,Ay),e(dn,Oy),e(dn,Hp),e(Hp,Ly),e(dn,Ny),e(Vt,Iy),w(Fs,Vt,null),e(Vt,Dy),w(xs,Vt,null),_(o,df,v),_(o,cn,v),e(cn,Ms),e(Ms,Kp),w(ci,Kp,null),e(cn,Sy),e(cn,Qp),e(Qp,Wy),_(o,cf,v),_(o,tt,v),w(pi,tt,null),e(tt,Uy),e(tt,Vp),e(Vp,By),e(tt,Ry),e(tt,Jp),e(Jp,Hy),e(tt,Ky),e(tt,hi),e(hi,Qy),e(hi,rc),e(rc,Vy),e(hi,Jy),e(tt,Gy),e(tt,mi),e(mi,Xy),e(mi,ui),e(ui,Yy),e(mi,Zy),e(tt,eT),w(zs,tt,null),e(tt,tT),e(tt,Jt),w(fi,Jt,null),e(Jt,oT),e(Jt,pn),e(pn,nT),e(pn,ic),e(ic,sT),e(pn,aT),e(pn,Gp),e(Gp,rT),e(pn,iT),e(Jt,lT),w(js,Jt,null),e(Jt,dT),w(Cs,Jt,null),_(o,pf,v),_(o,hn,v),e(hn,qs),e(qs,Xp),w(gi,Xp,null),e(hn,cT),e(hn,Yp),e(Yp,pT),_(o,hf,v),_(o,ot,v),w(_i,ot,null),e(ot,hT),e(ot,Zp),e(Zp,mT),e(ot,uT),e(ot,eh),e(eh,fT),e(ot,gT),e(ot,vi),e(vi,_T),e(vi,lc),e(lc,vT),e(vi,kT),e(ot,yT),e(ot,ki),e(ki,TT),e(ki,yi),e(yi,bT),e(ki,wT),e(ot,ET),w(Ps,ot,null),e(ot,$T),e(ot,Mt),w(Ti,Mt,null),e(Mt,FT),e(Mt,mn),e(mn,xT),e(mn,dc),e(dc,MT),e(mn,zT),e(mn,th),e(th,jT),e(mn,CT),e(Mt,qT),w(As,Mt,null),e(Mt,PT),w(Os,Mt,null),e(Mt,AT),w(Ls,Mt,null),_(o,mf,v),_(o,un,v),e(un,Ns),e(Ns,oh),w(bi,oh,null),e(un,OT),e(un,nh),e(nh,LT),_(o,uf,v),_(o,ft,v),w(wi,ft,null),e(ft,NT),e(ft,sh),e(sh,IT),e(ft,DT),e(ft,Ei),e(Ei,ST),e(Ei,cc),e(cc,WT),e(Ei,UT),e(ft,BT),e(ft,$i),e($i,RT),e($i,Fi),e(Fi,HT),e($i,KT),e(ft,QT),w(Is,ft,null),e(ft,VT),e(ft,zt),w(xi,zt,null),e(zt,JT),e(zt,fn),e(fn,GT),e(fn,pc),e(pc,XT),e(fn,YT),e(fn,ah),e(ah,ZT),e(fn,eb),e(zt,tb),w(Ds,zt,null),e(zt,ob),w(Ss,zt,null),e(zt,nb),w(Ws,zt,null),_(o,ff,v),_(o,gn,v),e(gn,Us),e(Us,rh),w(Mi,rh,null),e(gn,sb),e(gn,ih),e(ih,ab),_(o,gf,v),_(o,gt,v),w(zi,gt,null),e(gt,rb),e(gt,lh),e(lh,ib),e(gt,lb),e(gt,ji),e(ji,db),e(ji,hc),e(hc,cb),e(ji,pb),e(gt,hb),e(gt,Ci),e(Ci,mb),e(Ci,qi),e(qi,ub),e(Ci,fb),e(gt,gb),w(Bs,gt,null),e(gt,_b),e(gt,Gt),w(Pi,Gt,null),e(Gt,vb),e(Gt,_n),e(_n,kb),e(_n,mc),e(mc,yb),e(_n,Tb),e(_n,dh),e(dh,bb),e(_n,wb),e(Gt,Eb),w(Rs,Gt,null),e(Gt,$b),w(Hs,Gt,null),_(o,_f,v),_(o,vn,v),e(vn,Ks),e(Ks,ch),w(Ai,ch,null),e(vn,Fb),e(vn,ph),e(ph,xb),_(o,vf,v),_(o,nt,v),w(Oi,nt,null),e(nt,Mb),e(nt,hh),e(hh,zb),e(nt,jb),e(nt,mh),e(mh,Cb),e(nt,qb),e(nt,Li),e(Li,Pb),e(Li,uc),e(uc,Ab),e(Li,Ob),e(nt,Lb),e(nt,Ni),e(Ni,Nb),e(Ni,Ii),e(Ii,Ib),e(Ni,Db),e(nt,Sb),w(Qs,nt,null),e(nt,Wb),e(nt,jt),w(Di,jt,null),e(jt,Ub),e(jt,kn),e(kn,Bb),e(kn,fc),e(fc,Rb),e(kn,Hb),e(kn,uh),e(uh,Kb),e(kn,Qb),e(jt,Vb),w(Vs,jt,null),e(jt,Jb),w(Js,jt,null),e(jt,Gb),w(Gs,jt,null),_(o,kf,v),_(o,yn,v),e(yn,Xs),e(Xs,fh),w(Si,fh,null),e(yn,Xb),e(yn,gh),e(gh,Yb),_(o,yf,v),_(o,_t,v),w(Wi,_t,null),e(_t,Zb),e(_t,Tn),e(Tn,ew),e(Tn,_h),e(_h,tw),e(Tn,ow),e(Tn,vh),e(vh,nw),e(Tn,sw),e(_t,aw),e(_t,Ui),e(Ui,rw),e(Ui,gc),e(gc,iw),e(Ui,lw),e(_t,dw),e(_t,Bi),e(Bi,cw),e(Bi,Ri),e(Ri,pw),e(Bi,hw),e(_t,mw),w(Ys,_t,null),e(_t,uw),e(_t,Ct),w(Hi,Ct,null),e(Ct,fw),e(Ct,bn),e(bn,gw),e(bn,_c),e(_c,_w),e(bn,vw),e(bn,kh),e(kh,kw),e(bn,yw),e(Ct,Tw),w(Zs,Ct,null),e(Ct,bw),w(ea,Ct,null),e(Ct,ww),w(ta,Ct,null),_(o,Tf,v),_(o,wn,v),e(wn,oa),e(oa,yh),w(Ki,yh,null),e(wn,Ew),e(wn,Th),e(Th,$w),_(o,bf,v),_(o,st,v),w(Qi,st,null),e(st,Fw),e(st,bh),e(bh,xw),e(st,Mw),e(st,Vi),e(Vi,zw),e(Vi,vc),e(vc,jw),e(Vi,Cw),e(st,qw),e(st,Ji),e(Ji,Pw),e(Ji,Gi),e(Gi,Aw),e(Ji,Ow),e(st,Lw),e(st,wh),e(wh,Nw),e(st,Iw),e(st,mo),e(mo,Eh),e(Eh,Xi),e(Xi,Dw),e(mo,Sw),e(mo,$h),e($h,Yi),e(Yi,Ww),e(mo,Uw),e(mo,Fh),e(Fh,Zi),e(Zi,Bw),e(mo,Rw),e(mo,xh),e(xh,el),e(el,Hw),e(st,Kw),e(st,Xt),w(tl,Xt,null),e(Xt,Qw),e(Xt,En),e(En,Vw),e(En,Mh),e(Mh,Jw),e(En,Gw),e(En,zh),e(zh,Xw),e(En,Yw),e(Xt,Zw),w(na,Xt,null),e(Xt,eE),w(sa,Xt,null),_(o,wf,v),_(o,$n,v),e($n,aa),e(aa,jh),w(ol,jh,null),e($n,tE),e($n,Ch),e(Ch,oE),_(o,Ef,v),_(o,Ze,v),w(nl,Ze,null),e(Ze,nE),e(Ze,qh),e(qh,sE),e(Ze,aE),e(Ze,Ph),e(Ph,rE),e(Ze,iE),e(Ze,sl),e(sl,lE),e(sl,kc),e(kc,dE),e(sl,cE),e(Ze,pE),e(Ze,al),e(al,hE),e(al,rl),e(rl,mE),e(al,uE),e(Ze,fE),e(Ze,Ah),e(Ah,gE),e(Ze,_E),e(Ze,uo),e(uo,Oh),e(Oh,il),e(il,vE),e(uo,kE),e(uo,Lh),e(Lh,ll),e(ll,yE),e(uo,TE),e(uo,Nh),e(Nh,dl),e(dl,bE),e(uo,wE),e(uo,Ih),e(Ih,cl),e(cl,EE),e(Ze,$E),e(Ze,Yt),w(pl,Yt,null),e(Yt,FE),e(Yt,Fn),e(Fn,xE),e(Fn,Dh),e(Dh,ME),e(Fn,zE),e(Fn,Sh),e(Sh,jE),e(Fn,CE),e(Yt,qE),w(ra,Yt,null),e(Yt,PE),w(ia,Yt,null),_(o,$f,v),_(o,xn,v),e(xn,la),e(la,Wh),w(hl,Wh,null),e(xn,AE),e(xn,Uh),e(Uh,OE),_(o,Ff,v),_(o,at,v),w(ml,at,null),e(at,LE),e(at,Bh),e(Bh,NE),e(at,IE),e(at,ul),e(ul,DE),e(ul,yc),e(yc,SE),e(ul,WE),e(at,UE),e(at,fl),e(fl,BE),e(fl,gl),e(gl,RE),e(fl,HE),e(at,KE),e(at,Rh),e(Rh,QE),e(at,VE),e(at,fo),e(fo,Hh),e(Hh,_l),e(_l,JE),e(fo,GE),e(fo,Kh),e(Kh,vl),e(vl,XE),e(fo,YE),e(fo,Qh),e(Qh,kl),e(kl,ZE),e(fo,e$),e(fo,Vh),e(Vh,yl),e(yl,t$),e(at,o$),e(at,Zt),w(Tl,Zt,null),e(Zt,n$),e(Zt,Mn),e(Mn,s$),e(Mn,Jh),e(Jh,a$),e(Mn,r$),e(Mn,Gh),e(Gh,i$),e(Mn,l$),e(Zt,d$),w(da,Zt,null),e(Zt,c$),w(ca,Zt,null),_(o,xf,v),_(o,zn,v),e(zn,pa),e(pa,Xh),w(bl,Xh,null),e(zn,p$),e(zn,Yh),e(Yh,h$),_(o,Mf,v),_(o,rt,v),w(wl,rt,null),e(rt,m$),e(rt,El),e(El,u$),e(El,Zh),e(Zh,f$),e(El,g$),e(rt,_$),e(rt,$l),e($l,v$),e($l,Tc),e(Tc,k$),e($l,y$),e(rt,T$),e(rt,Fl),e(Fl,b$),e(Fl,xl),e(xl,w$),e(Fl,E$),e(rt,$$),e(rt,em),e(em,F$),e(rt,x$),e(rt,go),e(go,tm),e(tm,Ml),e(Ml,M$),e(go,z$),e(go,om),e(om,zl),e(zl,j$),e(go,C$),e(go,nm),e(nm,jl),e(jl,q$),e(go,P$),e(go,sm),e(sm,Cl),e(Cl,A$),e(rt,O$),e(rt,eo),w(ql,eo,null),e(eo,L$),e(eo,jn),e(jn,N$),e(jn,am),e(am,I$),e(jn,D$),e(jn,rm),e(rm,S$),e(jn,W$),e(eo,U$),w(ha,eo,null),e(eo,B$),w(ma,eo,null),_(o,zf,v),_(o,Cn,v),e(Cn,ua),e(ua,im),w(Pl,im,null),e(Cn,R$),e(Cn,lm),e(lm,H$),_(o,jf,v),_(o,it,v),w(Al,it,null),e(it,K$),e(it,dm),e(dm,Q$),e(it,V$),e(it,Ol),e(Ol,J$),e(Ol,bc),e(bc,G$),e(Ol,X$),e(it,Y$),e(it,Ll),e(Ll,Z$),e(Ll,Nl),e(Nl,e1),e(Ll,t1),e(it,o1),e(it,cm),e(cm,n1),e(it,s1),e(it,_o),e(_o,pm),e(pm,Il),e(Il,a1),e(_o,r1),e(_o,hm),e(hm,Dl),e(Dl,i1),e(_o,l1),e(_o,mm),e(mm,Sl),e(Sl,d1),e(_o,c1),e(_o,um),e(um,Wl),e(Wl,p1),e(it,h1),e(it,to),w(Ul,to,null),e(to,m1),e(to,qn),e(qn,u1),e(qn,fm),e(fm,f1),e(qn,g1),e(qn,gm),e(gm,_1),e(qn,v1),e(to,k1),w(fa,to,null),e(to,y1),w(ga,to,null),_(o,Cf,v),_(o,Pn,v),e(Pn,_a),e(_a,_m),w(Bl,_m,null),e(Pn,T1),e(Pn,vm),e(vm,b1),_(o,qf,v),_(o,lt,v),w(Rl,lt,null),e(lt,w1),e(lt,km),e(km,E1),e(lt,$1),e(lt,Hl),e(Hl,F1),e(Hl,wc),e(wc,x1),e(Hl,M1),e(lt,z1),e(lt,Kl),e(Kl,j1),e(Kl,Ql),e(Ql,C1),e(Kl,q1),e(lt,P1),e(lt,ym),e(ym,A1),e(lt,O1),e(lt,vo),e(vo,Tm),e(Tm,Vl),e(Vl,L1),e(vo,N1),e(vo,bm),e(bm,Jl),e(Jl,I1),e(vo,D1),e(vo,wm),e(wm,Gl),e(Gl,S1),e(vo,W1),e(vo,Em),e(Em,Xl),e(Xl,U1),e(lt,B1),e(lt,oo),w(Yl,oo,null),e(oo,R1),e(oo,An),e(An,H1),e(An,$m),e($m,K1),e(An,Q1),e(An,Fm),e(Fm,V1),e(An,J1),e(oo,G1),w(va,oo,null),e(oo,X1),w(ka,oo,null),_(o,Pf,v),_(o,On,v),e(On,ya),e(ya,xm),w(Zl,xm,null),e(On,Y1),e(On,Mm),e(Mm,Z1),_(o,Af,v),_(o,et,v),w(ed,et,null),e(et,eF),e(et,zm),e(zm,tF),e(et,oF),e(et,jm),e(jm,nF),e(et,sF),e(et,td),e(td,aF),e(td,Ec),e(Ec,rF),e(td,iF),e(et,lF),e(et,od),e(od,dF),e(od,nd),e(nd,cF),e(od,pF),e(et,hF),e(et,Cm),e(Cm,mF),e(et,uF),e(et,ko),e(ko,qm),e(qm,sd),e(sd,fF),e(ko,gF),e(ko,Pm),e(Pm,ad),e(ad,_F),e(ko,vF),e(ko,Am),e(Am,rd),e(rd,kF),e(ko,yF),e(ko,Om),e(Om,id),e(id,TF),e(et,bF),e(et,no),w(ld,no,null),e(no,wF),e(no,Ln),e(Ln,EF),e(Ln,Lm),e(Lm,$F),e(Ln,FF),e(Ln,Nm),e(Nm,xF),e(Ln,MF),e(no,zF),w(Ta,no,null),e(no,jF),w(ba,no,null),_(o,Of,v),_(o,Nn,v),e(Nn,wa),e(wa,Im),w(dd,Im,null),e(Nn,CF),e(Nn,Dm),e(Dm,qF),_(o,Lf,v),_(o,dt,v),w(cd,dt,null),e(dt,PF),e(dt,In),e(In,AF),e(In,Sm),e(Sm,OF),e(In,LF),e(In,Wm),e(Wm,NF),e(In,IF),e(dt,DF),e(dt,pd),e(pd,SF),e(pd,$c),e($c,WF),e(pd,UF),e(dt,BF),e(dt,hd),e(hd,RF),e(hd,md),e(md,HF),e(hd,KF),e(dt,QF),e(dt,Um),e(Um,VF),e(dt,JF),e(dt,yo),e(yo,Bm),e(Bm,ud),e(ud,GF),e(yo,XF),e(yo,Rm),e(Rm,fd),e(fd,YF),e(yo,ZF),e(yo,Hm),e(Hm,gd),e(gd,e0),e(yo,t0),e(yo,Km),e(Km,_d),e(_d,o0),e(dt,n0),e(dt,so),w(vd,so,null),e(so,s0),e(so,Dn),e(Dn,a0),e(Dn,Qm),e(Qm,r0),e(Dn,i0),e(Dn,Vm),e(Vm,l0),e(Dn,d0),e(so,c0),w(Ea,so,null),e(so,p0),w($a,so,null),Nf=!0},p(o,[v]){const kd={};v&2&&(kd.$$scope={dirty:v,ctx:o}),Un.$set(kd);const Jm={};v&2&&(Jm.$$scope={dirty:v,ctx:o}),Jn.$set(Jm);const Gm={};v&2&&(Gm.$$scope={dirty:v,ctx:o}),Gn.$set(Gm);const Xm={};v&2&&(Xm.$$scope={dirty:v,ctx:o}),Yn.$set(Xm);const yd={};v&2&&(yd.$$scope={dirty:v,ctx:o}),Zn.$set(yd);const Ym={};v&2&&(Ym.$$scope={dirty:v,ctx:o}),ts.$set(Ym);const Zm={};v&2&&(Zm.$$scope={dirty:v,ctx:o}),os.$set(Zm);const eu={};v&2&&(eu.$$scope={dirty:v,ctx:o}),ss.$set(eu);const Td={};v&2&&(Td.$$scope={dirty:v,ctx:o}),as.$set(Td);const tu={};v&2&&(tu.$$scope={dirty:v,ctx:o}),rs.$set(tu);const ou={};v&2&&(ou.$$scope={dirty:v,ctx:o}),ls.$set(ou);const nu={};v&2&&(nu.$$scope={dirty:v,ctx:o}),ds.$set(nu);const su={};v&2&&(su.$$scope={dirty:v,ctx:o}),cs.$set(su);const au={};v&2&&(au.$$scope={dirty:v,ctx:o}),ps.$set(au);const bd={};v&2&&(bd.$$scope={dirty:v,ctx:o}),hs.$set(bd);const ru={};v&2&&(ru.$$scope={dirty:v,ctx:o}),us.$set(ru);const To={};v&2&&(To.$$scope={dirty:v,ctx:o}),fs.$set(To);const iu={};v&2&&(iu.$$scope={dirty:v,ctx:o}),_s.$set(iu);const lu={};v&2&&(lu.$$scope={dirty:v,ctx:o}),vs.$set(lu);const du={};v&2&&(du.$$scope={dirty:v,ctx:o}),ks.$set(du);const Sn={};v&2&&(Sn.$$scope={dirty:v,ctx:o}),Ts.$set(Sn);const cu={};v&2&&(cu.$$scope={dirty:v,ctx:o}),bs.$set(cu);const pu={};v&2&&(pu.$$scope={dirty:v,ctx:o}),ws.$set(pu);const wd={};v&2&&(wd.$$scope={dirty:v,ctx:o}),$s.$set(wd);const hu={};v&2&&(hu.$$scope={dirty:v,ctx:o}),Fs.$set(hu);const mu={};v&2&&(mu.$$scope={dirty:v,ctx:o}),xs.$set(mu);const uu={};v&2&&(uu.$$scope={dirty:v,ctx:o}),zs.$set(uu);const bo={};v&2&&(bo.$$scope={dirty:v,ctx:o}),js.$set(bo);const wo={};v&2&&(wo.$$scope={dirty:v,ctx:o}),Cs.$set(wo);const fu={};v&2&&(fu.$$scope={dirty:v,ctx:o}),Ps.$set(fu);const gu={};v&2&&(gu.$$scope={dirty:v,ctx:o}),As.$set(gu);const _u={};v&2&&(_u.$$scope={dirty:v,ctx:o}),Os.$set(_u);const Wn={};v&2&&(Wn.$$scope={dirty:v,ctx:o}),Ls.$set(Wn);const vu={};v&2&&(vu.$$scope={dirty:v,ctx:o}),Is.$set(vu);const ku={};v&2&&(ku.$$scope={dirty:v,ctx:o}),Ds.$set(ku);const Ed={};v&2&&(Ed.$$scope={dirty:v,ctx:o}),Ss.$set(Ed);const yu={};v&2&&(yu.$$scope={dirty:v,ctx:o}),Ws.$set(yu);const Tu={};v&2&&(Tu.$$scope={dirty:v,ctx:o}),Bs.$set(Tu);const bu={};v&2&&(bu.$$scope={dirty:v,ctx:o}),Rs.$set(bu);const Eo={};v&2&&(Eo.$$scope={dirty:v,ctx:o}),Hs.$set(Eo);const wu={};v&2&&(wu.$$scope={dirty:v,ctx:o}),Qs.$set(wu);const Fa={};v&2&&(Fa.$$scope={dirty:v,ctx:o}),Vs.$set(Fa);const Eu={};v&2&&(Eu.$$scope={dirty:v,ctx:o}),Js.$set(Eu);const $u={};v&2&&($u.$$scope={dirty:v,ctx:o}),Gs.$set($u);const $d={};v&2&&($d.$$scope={dirty:v,ctx:o}),Ys.$set($d);const Fu={};v&2&&(Fu.$$scope={dirty:v,ctx:o}),Zs.$set(Fu);const Fd={};v&2&&(Fd.$$scope={dirty:v,ctx:o}),ea.$set(Fd);const xu={};v&2&&(xu.$$scope={dirty:v,ctx:o}),ta.$set(xu);const Mu={};v&2&&(Mu.$$scope={dirty:v,ctx:o}),na.$set(Mu);const zu={};v&2&&(zu.$$scope={dirty:v,ctx:o}),sa.$set(zu);const $o={};v&2&&($o.$$scope={dirty:v,ctx:o}),ra.$set($o);const xd={};v&2&&(xd.$$scope={dirty:v,ctx:o}),ia.$set(xd);const ju={};v&2&&(ju.$$scope={dirty:v,ctx:o}),da.$set(ju);const xa={};v&2&&(xa.$$scope={dirty:v,ctx:o}),ca.$set(xa);const Cu={};v&2&&(Cu.$$scope={dirty:v,ctx:o}),ha.$set(Cu);const qu={};v&2&&(qu.$$scope={dirty:v,ctx:o}),ma.$set(qu);const Md={};v&2&&(Md.$$scope={dirty:v,ctx:o}),fa.$set(Md);const Pu={};v&2&&(Pu.$$scope={dirty:v,ctx:o}),ga.$set(Pu);const zd={};v&2&&(zd.$$scope={dirty:v,ctx:o}),va.$set(zd);const Au={};v&2&&(Au.$$scope={dirty:v,ctx:o}),ka.$set(Au);const Ou={};v&2&&(Ou.$$scope={dirty:v,ctx:o}),Ta.$set(Ou);const Lu={};v&2&&(Lu.$$scope={dirty:v,ctx:o}),ba.$set(Lu);const jd={};v&2&&(jd.$$scope={dirty:v,ctx:o}),Ea.$set(jd);const Cd={};v&2&&(Cd.$$scope={dirty:v,ctx:o}),$a.$set(Cd)},i(o){Nf||(E(l.$$.fragment,o),E(M.$$.fragment,o),E(We.$$.fragment,o),E(Ue.$$.fragment,o),E(Un.$$.fragment,o),E(Xa.$$.fragment,o),E(Ya.$$.fragment,o),E(er.$$.fragment,o),E(tr.$$.fragment,o),E(sr.$$.fragment,o),E(ar.$$.fragment,o),E(ir.$$.fragment,o),E(dr.$$.fragment,o),E(cr.$$.fragment,o),E(ur.$$.fragment,o),E(Jn.$$.fragment,o),E(Gn.$$.fragment,o),E(fr.$$.fragment,o),E(gr.$$.fragment,o),E(yr.$$.fragment,o),E(Yn.$$.fragment,o),E(Zn.$$.fragment,o),E(Tr.$$.fragment,o),E(br.$$.fragment,o),E(xr.$$.fragment,o),E(ts.$$.fragment,o),E(os.$$.fragment,o),E(Mr.$$.fragment,o),E(zr.$$.fragment,o),E(Pr.$$.fragment,o),E(ss.$$.fragment,o),E(as.$$.fragment,o),E(rs.$$.fragment,o),E(Ar.$$.fragment,o),E(Or.$$.fragment,o),E(Dr.$$.fragment,o),E(ls.$$.fragment,o),E(ds.$$.fragment,o),E(cs.$$.fragment,o),E(ps.$$.fragment,o),E(hs.$$.fragment,o),E(Sr.$$.fragment,o),E(Wr.$$.fragment,o),E(Hr.$$.fragment,o),E(us.$$.fragment,o),E(fs.$$.fragment,o),E(Kr.$$.fragment,o),E(Qr.$$.fragment,o),E(Xr.$$.fragment,o),E(_s.$$.fragment,o),E(vs.$$.fragment,o),E(ks.$$.fragment,o),E(Yr.$$.fragment,o),E(Zr.$$.fragment,o),E(ni.$$.fragment,o),E(Ts.$$.fragment,o),E(bs.$$.fragment,o),E(ws.$$.fragment,o),E(si.$$.fragment,o),E(ai.$$.fragment,o),E($s.$$.fragment,o),E(di.$$.fragment,o),E(Fs.$$.fragment,o),E(xs.$$.fragment,o),E(ci.$$.fragment,o),E(pi.$$.fragment,o),E(zs.$$.fragment,o),E(fi.$$.fragment,o),E(js.$$.fragment,o),E(Cs.$$.fragment,o),E(gi.$$.fragment,o),E(_i.$$.fragment,o),E(Ps.$$.fragment,o),E(Ti.$$.fragment,o),E(As.$$.fragment,o),E(Os.$$.fragment,o),E(Ls.$$.fragment,o),E(bi.$$.fragment,o),E(wi.$$.fragment,o),E(Is.$$.fragment,o),E(xi.$$.fragment,o),E(Ds.$$.fragment,o),E(Ss.$$.fragment,o),E(Ws.$$.fragment,o),E(Mi.$$.fragment,o),E(zi.$$.fragment,o),E(Bs.$$.fragment,o),E(Pi.$$.fragment,o),E(Rs.$$.fragment,o),E(Hs.$$.fragment,o),E(Ai.$$.fragment,o),E(Oi.$$.fragment,o),E(Qs.$$.fragment,o),E(Di.$$.fragment,o),E(Vs.$$.fragment,o),E(Js.$$.fragment,o),E(Gs.$$.fragment,o),E(Si.$$.fragment,o),E(Wi.$$.fragment,o),E(Ys.$$.fragment,o),E(Hi.$$.fragment,o),E(Zs.$$.fragment,o),E(ea.$$.fragment,o),E(ta.$$.fragment,o),E(Ki.$$.fragment,o),E(Qi.$$.fragment,o),E(tl.$$.fragment,o),E(na.$$.fragment,o),E(sa.$$.fragment,o),E(ol.$$.fragment,o),E(nl.$$.fragment,o),E(pl.$$.fragment,o),E(ra.$$.fragment,o),E(ia.$$.fragment,o),E(hl.$$.fragment,o),E(ml.$$.fragment,o),E(Tl.$$.fragment,o),E(da.$$.fragment,o),E(ca.$$.fragment,o),E(bl.$$.fragment,o),E(wl.$$.fragment,o),E(ql.$$.fragment,o),E(ha.$$.fragment,o),E(ma.$$.fragment,o),E(Pl.$$.fragment,o),E(Al.$$.fragment,o),E(Ul.$$.fragment,o),E(fa.$$.fragment,o),E(ga.$$.fragment,o),E(Bl.$$.fragment,o),E(Rl.$$.fragment,o),E(Yl.$$.fragment,o),E(va.$$.fragment,o),E(ka.$$.fragment,o),E(Zl.$$.fragment,o),E(ed.$$.fragment,o),E(ld.$$.fragment,o),E(Ta.$$.fragment,o),E(ba.$$.fragment,o),E(dd.$$.fragment,o),E(cd.$$.fragment,o),E(vd.$$.fragment,o),E(Ea.$$.fragment,o),E($a.$$.fragment,o),Nf=!0)},o(o){$(l.$$.fragment,o),$(M.$$.fragment,o),$(We.$$.fragment,o),$(Ue.$$.fragment,o),$(Un.$$.fragment,o),$(Xa.$$.fragment,o),$(Ya.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(sr.$$.fragment,o),$(ar.$$.fragment,o),$(ir.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(ur.$$.fragment,o),$(Jn.$$.fragment,o),$(Gn.$$.fragment,o),$(fr.$$.fragment,o),$(gr.$$.fragment,o),$(yr.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(Tr.$$.fragment,o),$(br.$$.fragment,o),$(xr.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$(Pr.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(Ar.$$.fragment,o),$(Or.$$.fragment,o),$(Dr.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(Sr.$$.fragment,o),$(Wr.$$.fragment,o),$(Hr.$$.fragment,o),$(us.$$.fragment,o),$(fs.$$.fragment,o),$(Kr.$$.fragment,o),$(Qr.$$.fragment,o),$(Xr.$$.fragment,o),$(_s.$$.fragment,o),$(vs.$$.fragment,o),$(ks.$$.fragment,o),$(Yr.$$.fragment,o),$(Zr.$$.fragment,o),$(ni.$$.fragment,o),$(Ts.$$.fragment,o),$(bs.$$.fragment,o),$(ws.$$.fragment,o),$(si.$$.fragment,o),$(ai.$$.fragment,o),$($s.$$.fragment,o),$(di.$$.fragment,o),$(Fs.$$.fragment,o),$(xs.$$.fragment,o),$(ci.$$.fragment,o),$(pi.$$.fragment,o),$(zs.$$.fragment,o),$(fi.$$.fragment,o),$(js.$$.fragment,o),$(Cs.$$.fragment,o),$(gi.$$.fragment,o),$(_i.$$.fragment,o),$(Ps.$$.fragment,o),$(Ti.$$.fragment,o),$(As.$$.fragment,o),$(Os.$$.fragment,o),$(Ls.$$.fragment,o),$(bi.$$.fragment,o),$(wi.$$.fragment,o),$(Is.$$.fragment,o),$(xi.$$.fragment,o),$(Ds.$$.fragment,o),$(Ss.$$.fragment,o),$(Ws.$$.fragment,o),$(Mi.$$.fragment,o),$(zi.$$.fragment,o),$(Bs.$$.fragment,o),$(Pi.$$.fragment,o),$(Rs.$$.fragment,o),$(Hs.$$.fragment,o),$(Ai.$$.fragment,o),$(Oi.$$.fragment,o),$(Qs.$$.fragment,o),$(Di.$$.fragment,o),$(Vs.$$.fragment,o),$(Js.$$.fragment,o),$(Gs.$$.fragment,o),$(Si.$$.fragment,o),$(Wi.$$.fragment,o),$(Ys.$$.fragment,o),$(Hi.$$.fragment,o),$(Zs.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(Ki.$$.fragment,o),$(Qi.$$.fragment,o),$(tl.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(ol.$$.fragment,o),$(nl.$$.fragment,o),$(pl.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),$(hl.$$.fragment,o),$(ml.$$.fragment,o),$(Tl.$$.fragment,o),$(da.$$.fragment,o),$(ca.$$.fragment,o),$(bl.$$.fragment,o),$(wl.$$.fragment,o),$(ql.$$.fragment,o),$(ha.$$.fragment,o),$(ma.$$.fragment,o),$(Pl.$$.fragment,o),$(Al.$$.fragment,o),$(Ul.$$.fragment,o),$(fa.$$.fragment,o),$(ga.$$.fragment,o),$(Bl.$$.fragment,o),$(Rl.$$.fragment,o),$(Yl.$$.fragment,o),$(va.$$.fragment,o),$(ka.$$.fragment,o),$(Zl.$$.fragment,o),$(ed.$$.fragment,o),$(ld.$$.fragment,o),$(Ta.$$.fragment,o),$(ba.$$.fragment,o),$(dd.$$.fragment,o),$(cd.$$.fragment,o),$(vd.$$.fragment,o),$(Ea.$$.fragment,o),$($a.$$.fragment,o),Nf=!1},d(o){t(d),o&&t(g),o&&t(c),F(l),o&&t(fe),o&&t(S),F(M),o&&t(ge),o&&t(U),o&&t(_e),o&&t(R),o&&t(ve),o&&t(H),o&&t(oe),o&&t(q),o&&t(ke),o&&t(B),o&&t(ye),o&&t(D),o&&t(y),o&&t(j),F(We),o&&t(Ke),o&&t(de),F(Ue),F(Un),o&&t(Nu),o&&t(Do),F(Xa),o&&t(Iu),o&&t(Ut),F(Ya),o&&t(Du),o&&t(So),F(er),o&&t(Su),o&&t(Bt),F(tr),o&&t(Wu),o&&t(Wo),F(sr),o&&t(Uu),o&&t(Uo),F(ar),o&&t(Bu),o&&t(Bo),F(ir),o&&t(Ru),o&&t(Ro),F(dr),o&&t(Hu),o&&t(yt),F(cr),F(ur),F(Jn),F(Gn),o&&t(Ku),o&&t(Ko),F(fr),o&&t(Qu),o&&t(pt),F(gr),F(yr),F(Yn),F(Zn),o&&t(Vu),o&&t(Vo),F(Tr),o&&t(Ju),o&&t(Tt),F(br),F(xr),F(ts),F(os),o&&t(Gu),o&&t(Go),F(Mr),o&&t(Xu),o&&t(ht),F(zr),F(Pr),F(ss),F(as),F(rs),o&&t(Yu),o&&t(Yo),F(Ar),o&&t(Zu),o&&t(bt),F(Or),F(Dr),F(ls),F(ds),F(cs),F(ps),F(hs),o&&t(ef),o&&t(en),F(Sr),o&&t(tf),o&&t(wt),F(Wr),F(Hr),F(us),F(fs),o&&t(of),o&&t(on),F(Kr),o&&t(nf),o&&t(mt),F(Qr),F(Xr),F(_s),F(vs),F(ks),o&&t(sf),o&&t(sn),F(Yr),o&&t(af),o&&t(Et),F(Zr),F(ni),F(Ts),F(bs),F(ws),o&&t(rf),o&&t(ln),F(si),o&&t(lf),o&&t(ut),F(ai),F($s),F(di),F(Fs),F(xs),o&&t(df),o&&t(cn),F(ci),o&&t(cf),o&&t(tt),F(pi),F(zs),F(fi),F(js),F(Cs),o&&t(pf),o&&t(hn),F(gi),o&&t(hf),o&&t(ot),F(_i),F(Ps),F(Ti),F(As),F(Os),F(Ls),o&&t(mf),o&&t(un),F(bi),o&&t(uf),o&&t(ft),F(wi),F(Is),F(xi),F(Ds),F(Ss),F(Ws),o&&t(ff),o&&t(gn),F(Mi),o&&t(gf),o&&t(gt),F(zi),F(Bs),F(Pi),F(Rs),F(Hs),o&&t(_f),o&&t(vn),F(Ai),o&&t(vf),o&&t(nt),F(Oi),F(Qs),F(Di),F(Vs),F(Js),F(Gs),o&&t(kf),o&&t(yn),F(Si),o&&t(yf),o&&t(_t),F(Wi),F(Ys),F(Hi),F(Zs),F(ea),F(ta),o&&t(Tf),o&&t(wn),F(Ki),o&&t(bf),o&&t(st),F(Qi),F(tl),F(na),F(sa),o&&t(wf),o&&t($n),F(ol),o&&t(Ef),o&&t(Ze),F(nl),F(pl),F(ra),F(ia),o&&t($f),o&&t(xn),F(hl),o&&t(Ff),o&&t(at),F(ml),F(Tl),F(da),F(ca),o&&t(xf),o&&t(zn),F(bl),o&&t(Mf),o&&t(rt),F(wl),F(ql),F(ha),F(ma),o&&t(zf),o&&t(Cn),F(Pl),o&&t(jf),o&&t(it),F(Al),F(Ul),F(fa),F(ga),o&&t(Cf),o&&t(Pn),F(Bl),o&&t(qf),o&&t(lt),F(Rl),F(Yl),F(va),F(ka),o&&t(Pf),o&&t(On),F(Zl),o&&t(Af),o&&t(et),F(ed),F(ld),F(Ta),F(ba),o&&t(Of),o&&t(Nn),F(dd),o&&t(Lf),o&&t(dt),F(cd),F(vd),F(Ea),F($a)}}}const xC={local:"electra",sections:[{local:"overview",title:"Overview"},{local:"transformers.ElectraConfig",title:"ElectraConfig"},{local:"transformers.ElectraTokenizer",title:"ElectraTokenizer"},{local:"transformers.ElectraTokenizerFast",title:"ElectraTokenizerFast"},{local:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",title:"Electra specific outputs"},{local:"transformers.ElectraModel",title:"ElectraModel"},{local:"transformers.ElectraForPreTraining",title:"ElectraForPreTraining"},{local:"transformers.ElectraForCausalLM",title:"ElectraForCausalLM"},{local:"transformers.ElectraForMaskedLM",title:"ElectraForMaskedLM"},{local:"transformers.ElectraForSequenceClassification",title:"ElectraForSequenceClassification"},{local:"transformers.ElectraForMultipleChoice",title:"ElectraForMultipleChoice"},{local:"transformers.ElectraForTokenClassification",title:"ElectraForTokenClassification"},{local:"transformers.ElectraForQuestionAnswering",title:"ElectraForQuestionAnswering"},{local:"transformers.TFElectraModel",title:"TFElectraModel"},{local:"transformers.TFElectraForPreTraining",title:"TFElectraForPreTraining"},{local:"transformers.TFElectraForMaskedLM",title:"TFElectraForMaskedLM"},{local:"transformers.TFElectraForSequenceClassification",title:"TFElectraForSequenceClassification"},{local:"transformers.TFElectraForMultipleChoice",title:"TFElectraForMultipleChoice"},{local:"transformers.TFElectraForTokenClassification",title:"TFElectraForTokenClassification"},{local:"transformers.TFElectraForQuestionAnswering",title:"TFElectraForQuestionAnswering"},{local:"transformers.FlaxElectraModel",title:"FlaxElectraModel"},{local:"transformers.FlaxElectraForPreTraining",title:"FlaxElectraForPreTraining"},{local:"transformers.FlaxElectraForCausalLM",title:"FlaxElectraForCausalLM"},{local:"transformers.FlaxElectraForMaskedLM",title:"FlaxElectraForMaskedLM"},{local:"transformers.FlaxElectraForSequenceClassification",title:"FlaxElectraForSequenceClassification"},{local:"transformers.FlaxElectraForMultipleChoice",title:"FlaxElectraForMultipleChoice"},{local:"transformers.FlaxElectraForTokenClassification",title:"FlaxElectraForTokenClassification"},{local:"transformers.FlaxElectraForQuestionAnswering",title:"FlaxElectraForQuestionAnswering"}],title:"ELECTRA"};function MC(x){return fj(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class OC extends pj{constructor(d){super();hj(this,d,MC,FC,mj,{})}}export{OC as default,xC as metadata};
