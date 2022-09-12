import{S as pC,i as hC,s as mC,e as a,k as p,w as T,t as n,M as uC,c as r,d as t,m as h,a as i,x as b,h as s,b as u,G as e,g as _,y as w,q as E,o as $,B as F,v as fC,L as pe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ie}from"../../chunks/Tip-hf-doc-builder.js";import{D as W}from"../../chunks/Docstring-hf-doc-builder.js";import{C as he}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Se}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function gC(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraModel, ElectraConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),g=n("Examples:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function _C(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function kC(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, ElectraModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function vC(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function yC(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraForPreTraining, ElectraTokenizerFast
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
[<span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>]`}}),{c(){d=a("p"),g=n("Examples:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function TC(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function bC(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, ElectraForCausalLM, ElectraConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function wC(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function EC(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, ElectraForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function $C(x){let d,g;return d=new he({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.22</span>`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function FC(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function xC(x){let d,g,c,f,v;return f=new he({props:{code:`import torch
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of single-label classification:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example of single-label classification:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function MC(x){let d,g;return d=new he({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = ElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.06</span>`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function zC(x){let d,g,c,f,v;return f=new he({props:{code:`import torch
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of multi-label classification:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example of multi-label classification:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function CC(x){let d,g;return d=new he({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function jC(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function qC(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, ElectraForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function PC(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function AC(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, ElectraForTokenClassification
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
[<span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;B-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function OC(x){let d,g;return d=new he({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.11</span>`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function LC(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function NC(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, ElectraForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function IC(x){let d,g;return d=new he({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">2.64</span>`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function DC(x){let d,g,c,f,v,l,m,z,Te,fe,S,ae,ee,M,be,Q,we,ge,U,Ee,re,B,$e,_e,H,Fe,ke,K,me,xe,oe,q,A,ve,R,ue,Me,V,ne,ze,P,Ce,J,ie,je,G,le,qe,I,ye,D,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=p(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),S=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),$e=n("fit()"),_e=n(" and "),H=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=a("ul"),A=a("li"),ve=n("a single Tensor with "),R=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=p(),P=a("li"),Ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ie=n("model([input_ids, attention_mask])"),je=n(" or "),G=a("code"),le=n("model([input_ids, attention_mask, token_type_ids])"),qe=p(),I=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=p(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var C=i(d);g=s(C,"TensorFlow models and layers in "),c=r(C,"CODE",{});var De=i(c);f=s(De,"transformers"),De.forEach(t),v=s(C," accept two formats as input:"),C.forEach(t),l=h(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=h(te),S=r(te,"LI",{});var Be=i(S);ae=s(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),ee=h(y),M=r(y,"P",{});var j=i(M);be=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(j,"CODE",{});var Ve=i(Q);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Qe=i(U);Ee=s(Qe,"model.fit()"),Qe.forEach(t),re=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(j,"CODE",{});var de=i(B);$e=s(de,"fit()"),de.forEach(t),_e=s(j," and "),H=r(j,"CODE",{});var Ue=i(H);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Je=i(K);me=s(Je,"Functional"),Je.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),R=r(X,"CODE",{});var He=i(R);ue=s(He,"input_ids"),He.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=h(N),P=r(N,"LI",{});var Y=i(P);Ce=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var Ke=i(J);ie=s(Ke,"model([input_ids, attention_mask])"),Ke.forEach(t),je=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);le=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=h(N),I=r(N,"LI",{});var Ne=i(I);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=r(Ne,"CODE",{});var Re=i(D);Pe=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ne.forEach(t),N.forEach(t),Z=h(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,C){_(y,d,C),e(d,g),e(d,c),e(c,f),e(d,v),_(y,l,C),_(y,m,C),e(m,z),e(z,Te),e(m,fe),e(m,S),e(S,ae),_(y,ee,C),_(y,M,C),e(M,be),e(M,Q),e(Q,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,B),e(B,$e),e(M,_e),e(M,H),e(H,Fe),e(M,ke),e(M,K),e(K,me),e(M,xe),_(y,oe,C),_(y,q,C),e(q,A),e(A,ve),e(A,R),e(R,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,Ce),e(P,J),e(J,ie),e(P,je),e(P,G),e(G,le),e(q,qe),e(q,I),e(I,ye),e(I,D),e(D,Pe),_(y,Z,C),_(y,O,C),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function SC(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function WC(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, TFElectraModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function UC(x){let d,g,c,f,v,l,m,z,Te,fe,S,ae,ee,M,be,Q,we,ge,U,Ee,re,B,$e,_e,H,Fe,ke,K,me,xe,oe,q,A,ve,R,ue,Me,V,ne,ze,P,Ce,J,ie,je,G,le,qe,I,ye,D,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=p(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),S=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),$e=n("fit()"),_e=n(" and "),H=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=a("ul"),A=a("li"),ve=n("a single Tensor with "),R=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=p(),P=a("li"),Ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ie=n("model([input_ids, attention_mask])"),je=n(" or "),G=a("code"),le=n("model([input_ids, attention_mask, token_type_ids])"),qe=p(),I=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=p(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var C=i(d);g=s(C,"TensorFlow models and layers in "),c=r(C,"CODE",{});var De=i(c);f=s(De,"transformers"),De.forEach(t),v=s(C," accept two formats as input:"),C.forEach(t),l=h(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=h(te),S=r(te,"LI",{});var Be=i(S);ae=s(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),ee=h(y),M=r(y,"P",{});var j=i(M);be=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(j,"CODE",{});var Ve=i(Q);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Qe=i(U);Ee=s(Qe,"model.fit()"),Qe.forEach(t),re=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(j,"CODE",{});var de=i(B);$e=s(de,"fit()"),de.forEach(t),_e=s(j," and "),H=r(j,"CODE",{});var Ue=i(H);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Je=i(K);me=s(Je,"Functional"),Je.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),R=r(X,"CODE",{});var He=i(R);ue=s(He,"input_ids"),He.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=h(N),P=r(N,"LI",{});var Y=i(P);Ce=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var Ke=i(J);ie=s(Ke,"model([input_ids, attention_mask])"),Ke.forEach(t),je=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);le=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=h(N),I=r(N,"LI",{});var Ne=i(I);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=r(Ne,"CODE",{});var Re=i(D);Pe=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ne.forEach(t),N.forEach(t),Z=h(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,C){_(y,d,C),e(d,g),e(d,c),e(c,f),e(d,v),_(y,l,C),_(y,m,C),e(m,z),e(z,Te),e(m,fe),e(m,S),e(S,ae),_(y,ee,C),_(y,M,C),e(M,be),e(M,Q),e(Q,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,B),e(B,$e),e(M,_e),e(M,H),e(H,Fe),e(M,ke),e(M,K),e(K,me),e(M,xe),_(y,oe,C),_(y,q,C),e(q,A),e(A,ve),e(A,R),e(R,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,Ce),e(P,J),e(J,ie),e(P,je),e(P,G),e(G,le),e(q,qe),e(q,I),e(I,ye),e(I,D),e(D,Pe),_(y,Z,C),_(y,O,C),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function RC(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function HC(x){let d,g,c,f,v;return f=new he({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>scores = outputs[<span class="hljs-number">0</span>]`}}),{c(){d=a("p"),g=n("Examples:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function KC(x){let d,g,c,f,v,l,m,z,Te,fe,S,ae,ee,M,be,Q,we,ge,U,Ee,re,B,$e,_e,H,Fe,ke,K,me,xe,oe,q,A,ve,R,ue,Me,V,ne,ze,P,Ce,J,ie,je,G,le,qe,I,ye,D,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=p(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),S=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),$e=n("fit()"),_e=n(" and "),H=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=a("ul"),A=a("li"),ve=n("a single Tensor with "),R=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=p(),P=a("li"),Ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ie=n("model([input_ids, attention_mask])"),je=n(" or "),G=a("code"),le=n("model([input_ids, attention_mask, token_type_ids])"),qe=p(),I=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=p(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var C=i(d);g=s(C,"TensorFlow models and layers in "),c=r(C,"CODE",{});var De=i(c);f=s(De,"transformers"),De.forEach(t),v=s(C," accept two formats as input:"),C.forEach(t),l=h(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=h(te),S=r(te,"LI",{});var Be=i(S);ae=s(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),ee=h(y),M=r(y,"P",{});var j=i(M);be=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(j,"CODE",{});var Ve=i(Q);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Qe=i(U);Ee=s(Qe,"model.fit()"),Qe.forEach(t),re=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(j,"CODE",{});var de=i(B);$e=s(de,"fit()"),de.forEach(t),_e=s(j," and "),H=r(j,"CODE",{});var Ue=i(H);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Je=i(K);me=s(Je,"Functional"),Je.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),R=r(X,"CODE",{});var He=i(R);ue=s(He,"input_ids"),He.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=h(N),P=r(N,"LI",{});var Y=i(P);Ce=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var Ke=i(J);ie=s(Ke,"model([input_ids, attention_mask])"),Ke.forEach(t),je=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);le=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=h(N),I=r(N,"LI",{});var Ne=i(I);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=r(Ne,"CODE",{});var Re=i(D);Pe=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ne.forEach(t),N.forEach(t),Z=h(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,C){_(y,d,C),e(d,g),e(d,c),e(c,f),e(d,v),_(y,l,C),_(y,m,C),e(m,z),e(z,Te),e(m,fe),e(m,S),e(S,ae),_(y,ee,C),_(y,M,C),e(M,be),e(M,Q),e(Q,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,B),e(B,$e),e(M,_e),e(M,H),e(H,Fe),e(M,ke),e(M,K),e(K,me),e(M,xe),_(y,oe,C),_(y,q,C),e(q,A),e(A,ve),e(A,R),e(R,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,Ce),e(P,J),e(J,ie),e(P,je),e(P,G),e(G,le),e(q,qe),e(q,I),e(I,ye),e(I,D),e(D,Pe),_(y,Z,C),_(y,O,C),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function QC(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function BC(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, TFElectraForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function VC(x){let d,g;return d=new he({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">1.22</span>`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function JC(x){let d,g,c,f,v,l,m,z,Te,fe,S,ae,ee,M,be,Q,we,ge,U,Ee,re,B,$e,_e,H,Fe,ke,K,me,xe,oe,q,A,ve,R,ue,Me,V,ne,ze,P,Ce,J,ie,je,G,le,qe,I,ye,D,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=p(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),S=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),$e=n("fit()"),_e=n(" and "),H=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=a("ul"),A=a("li"),ve=n("a single Tensor with "),R=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=p(),P=a("li"),Ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ie=n("model([input_ids, attention_mask])"),je=n(" or "),G=a("code"),le=n("model([input_ids, attention_mask, token_type_ids])"),qe=p(),I=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=p(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var C=i(d);g=s(C,"TensorFlow models and layers in "),c=r(C,"CODE",{});var De=i(c);f=s(De,"transformers"),De.forEach(t),v=s(C," accept two formats as input:"),C.forEach(t),l=h(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=h(te),S=r(te,"LI",{});var Be=i(S);ae=s(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),ee=h(y),M=r(y,"P",{});var j=i(M);be=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(j,"CODE",{});var Ve=i(Q);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Qe=i(U);Ee=s(Qe,"model.fit()"),Qe.forEach(t),re=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(j,"CODE",{});var de=i(B);$e=s(de,"fit()"),de.forEach(t),_e=s(j," and "),H=r(j,"CODE",{});var Ue=i(H);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Je=i(K);me=s(Je,"Functional"),Je.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),R=r(X,"CODE",{});var He=i(R);ue=s(He,"input_ids"),He.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=h(N),P=r(N,"LI",{});var Y=i(P);Ce=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var Ke=i(J);ie=s(Ke,"model([input_ids, attention_mask])"),Ke.forEach(t),je=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);le=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=h(N),I=r(N,"LI",{});var Ne=i(I);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=r(Ne,"CODE",{});var Re=i(D);Pe=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ne.forEach(t),N.forEach(t),Z=h(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,C){_(y,d,C),e(d,g),e(d,c),e(c,f),e(d,v),_(y,l,C),_(y,m,C),e(m,z),e(z,Te),e(m,fe),e(m,S),e(S,ae),_(y,ee,C),_(y,M,C),e(M,be),e(M,Q),e(Q,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,B),e(B,$e),e(M,_e),e(M,H),e(H,Fe),e(M,ke),e(M,K),e(K,me),e(M,xe),_(y,oe,C),_(y,q,C),e(q,A),e(A,ve),e(A,R),e(R,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,Ce),e(P,J),e(J,ie),e(P,je),e(P,G),e(G,le),e(q,qe),e(q,I),e(I,ye),e(I,D),e(D,Pe),_(y,Z,C),_(y,O,C),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function GC(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function XC(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, TFElectraForSequenceClassification
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function YC(x){let d,g;return d=new he({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.06</span>`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function ZC(x){let d,g,c,f,v,l,m,z,Te,fe,S,ae,ee,M,be,Q,we,ge,U,Ee,re,B,$e,_e,H,Fe,ke,K,me,xe,oe,q,A,ve,R,ue,Me,V,ne,ze,P,Ce,J,ie,je,G,le,qe,I,ye,D,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=p(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),S=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),$e=n("fit()"),_e=n(" and "),H=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=a("ul"),A=a("li"),ve=n("a single Tensor with "),R=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=p(),P=a("li"),Ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ie=n("model([input_ids, attention_mask])"),je=n(" or "),G=a("code"),le=n("model([input_ids, attention_mask, token_type_ids])"),qe=p(),I=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=p(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var C=i(d);g=s(C,"TensorFlow models and layers in "),c=r(C,"CODE",{});var De=i(c);f=s(De,"transformers"),De.forEach(t),v=s(C," accept two formats as input:"),C.forEach(t),l=h(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=h(te),S=r(te,"LI",{});var Be=i(S);ae=s(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),ee=h(y),M=r(y,"P",{});var j=i(M);be=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(j,"CODE",{});var Ve=i(Q);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Qe=i(U);Ee=s(Qe,"model.fit()"),Qe.forEach(t),re=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(j,"CODE",{});var de=i(B);$e=s(de,"fit()"),de.forEach(t),_e=s(j," and "),H=r(j,"CODE",{});var Ue=i(H);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Je=i(K);me=s(Je,"Functional"),Je.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),R=r(X,"CODE",{});var He=i(R);ue=s(He,"input_ids"),He.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=h(N),P=r(N,"LI",{});var Y=i(P);Ce=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var Ke=i(J);ie=s(Ke,"model([input_ids, attention_mask])"),Ke.forEach(t),je=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);le=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=h(N),I=r(N,"LI",{});var Ne=i(I);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=r(Ne,"CODE",{});var Re=i(D);Pe=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ne.forEach(t),N.forEach(t),Z=h(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,C){_(y,d,C),e(d,g),e(d,c),e(c,f),e(d,v),_(y,l,C),_(y,m,C),e(m,z),e(z,Te),e(m,fe),e(m,S),e(S,ae),_(y,ee,C),_(y,M,C),e(M,be),e(M,Q),e(Q,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,B),e(B,$e),e(M,_e),e(M,H),e(H,Fe),e(M,ke),e(M,K),e(K,me),e(M,xe),_(y,oe,C),_(y,q,C),e(q,A),e(A,ve),e(A,R),e(R,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,Ce),e(P,J),e(J,ie),e(P,je),e(P,G),e(G,le),e(q,qe),e(q,I),e(I,ye),e(I,D),e(D,Pe),_(y,Z,C),_(y,O,C),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function ej(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function tj(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, TFElectraForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function oj(x){let d,g,c,f,v,l,m,z,Te,fe,S,ae,ee,M,be,Q,we,ge,U,Ee,re,B,$e,_e,H,Fe,ke,K,me,xe,oe,q,A,ve,R,ue,Me,V,ne,ze,P,Ce,J,ie,je,G,le,qe,I,ye,D,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=p(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),S=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),$e=n("fit()"),_e=n(" and "),H=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=a("ul"),A=a("li"),ve=n("a single Tensor with "),R=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=p(),P=a("li"),Ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ie=n("model([input_ids, attention_mask])"),je=n(" or "),G=a("code"),le=n("model([input_ids, attention_mask, token_type_ids])"),qe=p(),I=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=p(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var C=i(d);g=s(C,"TensorFlow models and layers in "),c=r(C,"CODE",{});var De=i(c);f=s(De,"transformers"),De.forEach(t),v=s(C," accept two formats as input:"),C.forEach(t),l=h(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=h(te),S=r(te,"LI",{});var Be=i(S);ae=s(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),ee=h(y),M=r(y,"P",{});var j=i(M);be=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(j,"CODE",{});var Ve=i(Q);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Qe=i(U);Ee=s(Qe,"model.fit()"),Qe.forEach(t),re=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(j,"CODE",{});var de=i(B);$e=s(de,"fit()"),de.forEach(t),_e=s(j," and "),H=r(j,"CODE",{});var Ue=i(H);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Je=i(K);me=s(Je,"Functional"),Je.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),R=r(X,"CODE",{});var He=i(R);ue=s(He,"input_ids"),He.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=h(N),P=r(N,"LI",{});var Y=i(P);Ce=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var Ke=i(J);ie=s(Ke,"model([input_ids, attention_mask])"),Ke.forEach(t),je=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);le=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=h(N),I=r(N,"LI",{});var Ne=i(I);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=r(Ne,"CODE",{});var Re=i(D);Pe=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ne.forEach(t),N.forEach(t),Z=h(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,C){_(y,d,C),e(d,g),e(d,c),e(c,f),e(d,v),_(y,l,C),_(y,m,C),e(m,z),e(z,Te),e(m,fe),e(m,S),e(S,ae),_(y,ee,C),_(y,M,C),e(M,be),e(M,Q),e(Q,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,B),e(B,$e),e(M,_e),e(M,H),e(H,Fe),e(M,ke),e(M,K),e(K,me),e(M,xe),_(y,oe,C),_(y,q,C),e(q,A),e(A,ve),e(A,R),e(R,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,Ce),e(P,J),e(J,ie),e(P,je),e(P,G),e(G,le),e(q,qe),e(q,I),e(I,ye),e(I,D),e(D,Pe),_(y,Z,C),_(y,O,C),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function nj(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function sj(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, TFElectraForTokenClassification
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
[<span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;B-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function aj(x){let d,g;return d=new he({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.11</span>`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function rj(x){let d,g,c,f,v,l,m,z,Te,fe,S,ae,ee,M,be,Q,we,ge,U,Ee,re,B,$e,_e,H,Fe,ke,K,me,xe,oe,q,A,ve,R,ue,Me,V,ne,ze,P,Ce,J,ie,je,G,le,qe,I,ye,D,Pe,Z,O,Ae,L,Oe,Le;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=p(),m=a("ul"),z=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),S=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a("code"),we=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),Ee=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),$e=n("fit()"),_e=n(" and "),H=a("code"),Fe=n("predict()"),ke=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),me=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=a("ul"),A=a("li"),ve=n("a single Tensor with "),R=a("code"),ue=n("input_ids"),Me=n(" only and nothing else: "),V=a("code"),ne=n("model(input_ids)"),ze=p(),P=a("li"),Ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ie=n("model([input_ids, attention_mask])"),je=n(" or "),G=a("code"),le=n("model([input_ids, attention_mask, token_type_ids])"),qe=p(),I=a("li"),ye=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=a("code"),Pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=p(),O=a("p"),Ae=n(`Note that when creating models and layers with
`),L=a("a"),Oe=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var C=i(d);g=s(C,"TensorFlow models and layers in "),c=r(C,"CODE",{});var De=i(c);f=s(De,"transformers"),De.forEach(t),v=s(C," accept two formats as input:"),C.forEach(t),l=h(y),m=r(y,"UL",{});var te=i(m);z=r(te,"LI",{});var We=i(z);Te=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),fe=h(te),S=r(te,"LI",{});var Be=i(S);ae=s(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),ee=h(y),M=r(y,"P",{});var j=i(M);be=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(j,"CODE",{});var Ve=i(Q);we=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Qe=i(U);Ee=s(Qe,"model.fit()"),Qe.forEach(t),re=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(j,"CODE",{});var de=i(B);$e=s(de,"fit()"),de.forEach(t),_e=s(j," and "),H=r(j,"CODE",{});var Ue=i(H);Fe=s(Ue,"predict()"),Ue.forEach(t),ke=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Je=i(K);me=s(Je,"Functional"),Je.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(y),q=r(y,"UL",{});var N=i(q);A=r(N,"LI",{});var X=i(A);ve=s(X,"a single Tensor with "),R=r(X,"CODE",{});var He=i(R);ue=s(He,"input_ids"),He.forEach(t),Me=s(X," only and nothing else: "),V=r(X,"CODE",{});var Ge=i(V);ne=s(Ge,"model(input_ids)"),Ge.forEach(t),X.forEach(t),ze=h(N),P=r(N,"LI",{});var Y=i(P);Ce=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var Ke=i(J);ie=s(Ke,"model([input_ids, attention_mask])"),Ke.forEach(t),je=s(Y," or "),G=r(Y,"CODE",{});var Xe=i(G);le=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Y.forEach(t),qe=h(N),I=r(N,"LI",{});var Ne=i(I);ye=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=r(Ne,"CODE",{});var Re=i(D);Pe=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ne.forEach(t),N.forEach(t),Z=h(y),O=r(y,"P",{});var se=i(O);Ae=s(se,`Note that when creating models and layers with
`),L=r(se,"A",{href:!0,rel:!0});var Ye=i(L);Oe=s(Ye,"subclassing"),Ye.forEach(t),Le=s(se,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),se.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(y,C){_(y,d,C),e(d,g),e(d,c),e(c,f),e(d,v),_(y,l,C),_(y,m,C),e(m,z),e(z,Te),e(m,fe),e(m,S),e(S,ae),_(y,ee,C),_(y,M,C),e(M,be),e(M,Q),e(Q,we),e(M,ge),e(M,U),e(U,Ee),e(M,re),e(M,B),e(B,$e),e(M,_e),e(M,H),e(H,Fe),e(M,ke),e(M,K),e(K,me),e(M,xe),_(y,oe,C),_(y,q,C),e(q,A),e(A,ve),e(A,R),e(R,ue),e(A,Me),e(A,V),e(V,ne),e(q,ze),e(q,P),e(P,Ce),e(P,J),e(J,ie),e(P,je),e(P,G),e(G,le),e(q,qe),e(q,I),e(I,ye),e(I,D),e(D,Pe),_(y,Z,C),_(y,O,C),e(O,Ae),e(O,L),e(L,Oe),e(O,Le)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(ee),y&&t(M),y&&t(oe),y&&t(q),y&&t(Z),y&&t(O)}}}function ij(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function lj(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, TFElectraForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function dj(x){let d,g;return d=new he({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">2.64</span>`}}),{c(){T(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(E(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function cj(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function pj(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, FlaxElectraModel

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraModel.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraModel.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function hj(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function mj(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForPreTraining

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForPreTraining.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function uj(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function fj(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function gj(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function _j(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMaskedLM

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForMaskedLM.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function kj(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function vj(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForSequenceClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForSequenceClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function yj(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function Tj(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function bj(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function wj(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForTokenClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForTokenClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Ej(x){let d,g,c,f,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function $j(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),b(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||(E(f.$$.fragment,l),v=!0)},o(l){$(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Fj(x){let d,g,c,f,v,l,m,z,Te,fe,S,ae,ee,M,be,Q,we,ge,U,Ee,re,B,$e,_e,H,Fe,ke,K,me,xe,oe,q,A,ve,R,ue,Me,V,ne,ze,P,Ce,J,ie,je,G,le,qe,I,ye,D,Pe,Z,O,Ae,L,Oe,Le,y,C,De,te,We,Be,j,Ve,Qe,de,Ue,Je,N,X,He,Ge,Y,Ke,Xe,Ne,Re,se,Ye,n_,Io,s_,qd,a_,r_,Pd,i_,l_,d_,Un,Nu,Do,Rn,Yc,Xa,c_,Zc,p_,Iu,Ut,Ya,h_,ep,m_,u_,Hn,Ad,f_,g_,Od,__,k_,v_,Za,y_,Ld,T_,b_,Du,So,Kn,tp,er,w_,op,E_,Su,Rt,tr,$_,or,F_,np,x_,M_,z_,Qn,Nd,C_,j_,Id,q_,P_,A_,nr,O_,Dd,L_,N_,Wu,Wo,Bn,sp,sr,I_,ap,D_,Uu,Uo,ar,S_,rr,W_,Sd,U_,R_,Ru,Ro,ir,H_,lr,K_,Wd,Q_,B_,Hu,Ho,Vn,rp,dr,V_,ip,J_,Ku,yt,cr,G_,lp,X_,Y_,pr,Z_,Ud,ek,tk,ok,hr,nk,mr,sk,ak,rk,Ht,ur,ik,Ko,lk,Rd,dk,ck,dp,pk,hk,mk,Jn,uk,Gn,Qu,Qo,Xn,cp,fr,fk,pp,gk,Bu,pt,gr,_k,hp,kk,vk,mp,yk,Tk,_r,bk,Hd,wk,Ek,$k,kr,Fk,vr,xk,Mk,zk,Kt,yr,Ck,Bo,jk,Kd,qk,Pk,up,Ak,Ok,Lk,Yn,Nk,Zn,Vu,Vo,es,fp,Tr,Ik,gp,Dk,Ju,Tt,br,Sk,wr,Wk,_p,Uk,Rk,Hk,Er,Kk,Qd,Qk,Bk,Vk,$r,Jk,Fr,Gk,Xk,Yk,Qt,xr,Zk,Jo,ev,Bd,tv,ov,kp,nv,sv,av,ts,rv,os,Gu,Go,ns,vp,Mr,iv,yp,lv,Xu,ht,zr,dv,Tp,cv,pv,bp,hv,mv,Cr,uv,Vd,fv,gv,_v,jr,kv,qr,vv,yv,Tv,$t,Pr,bv,Xo,wv,Jd,Ev,$v,wp,Fv,xv,Mv,ss,zv,as,Cv,rs,Yu,Yo,is,Ep,Ar,jv,$p,qv,Zu,bt,Or,Pv,Fp,Av,Ov,Lr,Lv,Gd,Nv,Iv,Dv,Nr,Sv,Ir,Wv,Uv,Rv,ct,Dr,Hv,Zo,Kv,Xd,Qv,Bv,xp,Vv,Jv,Gv,ls,Xv,ds,Yv,cs,Zv,ps,ey,hs,ef,en,ms,Mp,Sr,ty,zp,oy,tf,wt,Wr,ny,Cp,sy,ay,Ur,ry,Yd,iy,ly,dy,Rr,cy,Hr,py,hy,my,Bt,Kr,uy,tn,fy,Zd,gy,_y,jp,ky,vy,yy,us,Ty,fs,of,on,gs,qp,Qr,by,Pp,wy,nf,mt,Br,Ey,Ap,$y,Fy,Op,xy,My,Vr,zy,ec,Cy,jy,qy,Jr,Py,Gr,Ay,Oy,Ly,Ft,Xr,Ny,nn,Iy,tc,Dy,Sy,Lp,Wy,Uy,Ry,_s,Hy,ks,Ky,vs,sf,sn,ys,Np,Yr,Qy,Ip,By,af,Et,Zr,Vy,an,Jy,Dp,Gy,Xy,Sp,Yy,Zy,eT,ei,tT,oc,oT,nT,sT,ti,aT,oi,rT,iT,lT,xt,ni,dT,rn,cT,nc,pT,hT,Wp,mT,uT,fT,Ts,gT,bs,_T,ws,rf,ln,Es,Up,si,kT,Rp,vT,lf,ut,ai,yT,Hp,TT,bT,ri,wT,sc,ET,$T,FT,ii,xT,li,MT,zT,CT,$s,jT,Vt,di,qT,dn,PT,ac,AT,OT,Kp,LT,NT,IT,Fs,DT,xs,df,cn,Ms,Qp,ci,ST,Bp,WT,cf,tt,pi,UT,Vp,RT,HT,Jp,KT,QT,hi,BT,rc,VT,JT,GT,mi,XT,ui,YT,ZT,eb,zs,tb,Jt,fi,ob,pn,nb,ic,sb,ab,Gp,rb,ib,lb,Cs,db,js,pf,hn,qs,Xp,gi,cb,Yp,pb,hf,ot,_i,hb,Zp,mb,ub,eh,fb,gb,ki,_b,lc,kb,vb,yb,vi,Tb,yi,bb,wb,Eb,Ps,$b,Mt,Ti,Fb,mn,xb,dc,Mb,zb,th,Cb,jb,qb,As,Pb,Os,Ab,Ls,mf,un,Ns,oh,bi,Ob,nh,Lb,uf,ft,wi,Nb,sh,Ib,Db,Ei,Sb,cc,Wb,Ub,Rb,$i,Hb,Fi,Kb,Qb,Bb,Is,Vb,zt,xi,Jb,fn,Gb,pc,Xb,Yb,ah,Zb,ew,tw,Ds,ow,Ss,nw,Ws,ff,gn,Us,rh,Mi,sw,ih,aw,gf,gt,zi,rw,lh,iw,lw,Ci,dw,hc,cw,pw,hw,ji,mw,qi,uw,fw,gw,Rs,_w,Gt,Pi,kw,_n,vw,mc,yw,Tw,dh,bw,ww,Ew,Hs,$w,Ks,_f,kn,Qs,ch,Ai,Fw,ph,xw,kf,nt,Oi,Mw,hh,zw,Cw,mh,jw,qw,Li,Pw,uc,Aw,Ow,Lw,Ni,Nw,Ii,Iw,Dw,Sw,Bs,Ww,Ct,Di,Uw,vn,Rw,fc,Hw,Kw,uh,Qw,Bw,Vw,Vs,Jw,Js,Gw,Gs,vf,yn,Xs,fh,Si,Xw,gh,Yw,yf,_t,Wi,Zw,Tn,eE,_h,tE,oE,kh,nE,sE,aE,Ui,rE,gc,iE,lE,dE,Ri,cE,Hi,pE,hE,mE,Ys,uE,jt,Ki,fE,bn,gE,_c,_E,kE,vh,vE,yE,TE,Zs,bE,ea,wE,ta,Tf,wn,oa,yh,Qi,EE,Th,$E,bf,st,Bi,FE,bh,xE,ME,Vi,zE,kc,CE,jE,qE,Ji,PE,Gi,AE,OE,LE,wh,NE,IE,mo,Eh,Xi,DE,SE,$h,Yi,WE,UE,Fh,Zi,RE,HE,xh,el,KE,QE,Xt,tl,BE,En,VE,Mh,JE,GE,zh,XE,YE,ZE,na,e$,sa,wf,$n,aa,Ch,ol,t$,jh,o$,Ef,Ze,nl,n$,qh,s$,a$,Ph,r$,i$,sl,l$,vc,d$,c$,p$,al,h$,rl,m$,u$,f$,Ah,g$,_$,uo,Oh,il,k$,v$,Lh,ll,y$,T$,Nh,dl,b$,w$,Ih,cl,E$,$$,Yt,pl,F$,Fn,x$,Dh,M$,z$,Sh,C$,j$,q$,ra,P$,ia,$f,xn,la,Wh,hl,A$,Uh,O$,Ff,at,ml,L$,Rh,N$,I$,ul,D$,yc,S$,W$,U$,fl,R$,gl,H$,K$,Q$,Hh,B$,V$,fo,Kh,_l,J$,G$,Qh,kl,X$,Y$,Bh,vl,Z$,e1,Vh,yl,t1,o1,Zt,Tl,n1,Mn,s1,Jh,a1,r1,Gh,i1,l1,d1,da,c1,ca,xf,zn,pa,Xh,bl,p1,Yh,h1,Mf,rt,wl,m1,El,u1,Zh,f1,g1,_1,$l,k1,Tc,v1,y1,T1,Fl,b1,xl,w1,E1,$1,em,F1,x1,go,tm,Ml,M1,z1,om,zl,C1,j1,nm,Cl,q1,P1,sm,jl,A1,O1,eo,ql,L1,Cn,N1,am,I1,D1,rm,S1,W1,U1,ha,R1,ma,zf,jn,ua,im,Pl,H1,lm,K1,Cf,it,Al,Q1,dm,B1,V1,Ol,J1,bc,G1,X1,Y1,Ll,Z1,Nl,e2,t2,o2,cm,n2,s2,_o,pm,Il,a2,r2,hm,Dl,i2,l2,mm,Sl,d2,c2,um,Wl,p2,h2,to,Ul,m2,qn,u2,fm,f2,g2,gm,_2,k2,v2,fa,y2,ga,jf,Pn,_a,_m,Rl,T2,km,b2,qf,lt,Hl,w2,vm,E2,$2,Kl,F2,wc,x2,M2,z2,Ql,C2,Bl,j2,q2,P2,ym,A2,O2,ko,Tm,Vl,L2,N2,bm,Jl,I2,D2,wm,Gl,S2,W2,Em,Xl,U2,R2,oo,Yl,H2,An,K2,$m,Q2,B2,Fm,V2,J2,G2,ka,X2,va,Pf,On,ya,xm,Zl,Y2,Mm,Z2,Af,et,ed,eF,zm,tF,oF,Cm,nF,sF,td,aF,Ec,rF,iF,lF,od,dF,nd,cF,pF,hF,jm,mF,uF,vo,qm,sd,fF,gF,Pm,ad,_F,kF,Am,rd,vF,yF,Om,id,TF,bF,no,ld,wF,Ln,EF,Lm,$F,FF,Nm,xF,MF,zF,Ta,CF,ba,Of,Nn,wa,Im,dd,jF,Dm,qF,Lf,dt,cd,PF,In,AF,Sm,OF,LF,Wm,NF,IF,DF,pd,SF,$c,WF,UF,RF,hd,HF,md,KF,QF,BF,Um,VF,JF,yo,Rm,ud,GF,XF,Hm,fd,YF,ZF,Km,gd,e0,t0,Qm,_d,o0,n0,so,kd,s0,Dn,a0,Bm,r0,i0,Vm,l0,d0,c0,Ea,p0,$a,Nf;return l=new Se({}),M=new Se({}),We=new Se({}),Ue=new W({props:{name:"class transformers.ElectraConfig",anchor:"transformers.ElectraConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 256"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 1024"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = 'gelu'"},{name:"summary_last_dropout",val:" = 0.1"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ElectraConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/configuration_electra.py#L44"}}),Un=new ce({props:{anchor:"transformers.ElectraConfig.example",$$slots:{default:[gC]},$$scope:{ctx:x}}}),Xa=new Se({}),Ya=new W({props:{name:"class transformers.ElectraTokenizer",anchor:"transformers.ElectraTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/tokenization_electra.py#L62"}}),er=new Se({}),tr=new W({props:{name:"class transformers.ElectraTokenizerFast",anchor:"transformers.ElectraTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/tokenization_electra_fast.py#L83"}}),sr=new Se({}),ar=new W({props:{name:"class transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L702"}}),ir=new W({props:{name:"class transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>tf.Tensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L805"}}),dr=new Se({}),cr=new W({props:{name:"class transformers.ElectraModel",anchor:"transformers.ElectraModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L814"}}),ur=new W({props:{name:"forward",anchor:"transformers.ElectraModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L841",returnDescription:`
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
`}}),Jn=new Ie({props:{$$slots:{default:[_C]},$$scope:{ctx:x}}}),Gn=new ce({props:{anchor:"transformers.ElectraModel.forward.example",$$slots:{default:[kC]},$$scope:{ctx:x}}}),fr=new Se({}),gr=new W({props:{name:"class transformers.ElectraForPreTraining",anchor:"transformers.ElectraForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1065"}}),yr=new W({props:{name:"forward",anchor:"transformers.ElectraForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1074",returnDescription:`
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
`}}),Yn=new Ie({props:{$$slots:{default:[vC]},$$scope:{ctx:x}}}),Zn=new ce({props:{anchor:"transformers.ElectraForPreTraining.forward.example",$$slots:{default:[yC]},$$scope:{ctx:x}}}),Tr=new Se({}),br=new W({props:{name:"class transformers.ElectraForCausalLM",anchor:"transformers.ElectraForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1540"}}),xr=new W({props:{name:"forward",anchor:"transformers.ElectraForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1559",returnDescription:`
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
`}}),ts=new Ie({props:{$$slots:{default:[TC]},$$scope:{ctx:x}}}),os=new ce({props:{anchor:"transformers.ElectraForCausalLM.forward.example",$$slots:{default:[bC]},$$scope:{ctx:x}}}),Mr=new Se({}),zr=new W({props:{name:"class transformers.ElectraForMaskedLM",anchor:"transformers.ElectraForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1171"}}),Pr=new W({props:{name:"forward",anchor:"transformers.ElectraForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1188",returnDescription:`
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
`}}),ss=new Ie({props:{$$slots:{default:[wC]},$$scope:{ctx:x}}}),as=new ce({props:{anchor:"transformers.ElectraForMaskedLM.forward.example",$$slots:{default:[EC]},$$scope:{ctx:x}}}),rs=new ce({props:{anchor:"transformers.ElectraForMaskedLM.forward.example-2",$$slots:{default:[$C]},$$scope:{ctx:x}}}),Ar=new Se({}),Or=new W({props:{name:"class transformers.ElectraForSequenceClassification",anchor:"transformers.ElectraForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L966"}}),Dr=new W({props:{name:"forward",anchor:"transformers.ElectraForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L977",returnDescription:`
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
`}}),ls=new Ie({props:{$$slots:{default:[FC]},$$scope:{ctx:x}}}),ds=new ce({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example",$$slots:{default:[xC]},$$scope:{ctx:x}}}),cs=new ce({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-2",$$slots:{default:[MC]},$$scope:{ctx:x}}}),ps=new ce({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-3",$$slots:{default:[zC]},$$scope:{ctx:x}}}),hs=new ce({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-4",$$slots:{default:[CC]},$$scope:{ctx:x}}}),Sr=new Se({}),Wr=new W({props:{name:"class transformers.ElectraForMultipleChoice",anchor:"transformers.ElectraForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1452"}}),Kr=new W({props:{name:"forward",anchor:"transformers.ElectraForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1463",returnDescription:`
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
`}}),us=new Ie({props:{$$slots:{default:[jC]},$$scope:{ctx:x}}}),fs=new ce({props:{anchor:"transformers.ElectraForMultipleChoice.forward.example",$$slots:{default:[qC]},$$scope:{ctx:x}}}),Qr=new Se({}),Br=new W({props:{name:"class transformers.ElectraForTokenClassification",anchor:"transformers.ElectraForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1261"}}),Xr=new W({props:{name:"forward",anchor:"transformers.ElectraForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1275",returnDescription:`
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
`}}),_s=new Ie({props:{$$slots:{default:[PC]},$$scope:{ctx:x}}}),ks=new ce({props:{anchor:"transformers.ElectraForTokenClassification.forward.example",$$slots:{default:[AC]},$$scope:{ctx:x}}}),vs=new ce({props:{anchor:"transformers.ElectraForTokenClassification.forward.example-2",$$slots:{default:[OC]},$$scope:{ctx:x}}}),Yr=new Se({}),Zr=new W({props:{name:"class transformers.ElectraForQuestionAnswering",anchor:"transformers.ElectraForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1343"}}),ni=new W({props:{name:"forward",anchor:"transformers.ElectraForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1357",returnDescription:`
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
`}}),Ts=new Ie({props:{$$slots:{default:[LC]},$$scope:{ctx:x}}}),bs=new ce({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example",$$slots:{default:[NC]},$$scope:{ctx:x}}}),ws=new ce({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example-2",$$slots:{default:[IC]},$$scope:{ctx:x}}}),si=new Se({}),ai=new W({props:{name:"class transformers.TFElectraModel",anchor:"transformers.TFElectraModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L930"}}),$s=new Ie({props:{$$slots:{default:[DC]},$$scope:{ctx:x}}}),di=new W({props:{name:"call",anchor:"transformers.TFElectraModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L936",returnDescription:`
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
`}}),Fs=new Ie({props:{$$slots:{default:[SC]},$$scope:{ctx:x}}}),xs=new ce({props:{anchor:"transformers.TFElectraModel.call.example",$$slots:{default:[WC]},$$scope:{ctx:x}}}),ci=new Se({}),pi=new W({props:{name:"class transformers.TFElectraForPreTraining",anchor:"transformers.TFElectraForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1027"}}),zs=new Ie({props:{$$slots:{default:[UC]},$$scope:{ctx:x}}}),fi=new W({props:{name:"call",anchor:"transformers.TFElectraForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1034",returnDescription:`
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
`}}),Cs=new Ie({props:{$$slots:{default:[RC]},$$scope:{ctx:x}}}),js=new ce({props:{anchor:"transformers.TFElectraForPreTraining.call.example",$$slots:{default:[HC]},$$scope:{ctx:x}}}),gi=new Se({}),_i=new W({props:{name:"class transformers.TFElectraForMaskedLM",anchor:"transformers.TFElectraForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1142"}}),Ps=new Ie({props:{$$slots:{default:[KC]},$$scope:{ctx:x}}}),Ti=new W({props:{name:"call",anchor:"transformers.TFElectraForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1164",returnDescription:`
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
`}}),As=new Ie({props:{$$slots:{default:[QC]},$$scope:{ctx:x}}}),Os=new ce({props:{anchor:"transformers.TFElectraForMaskedLM.call.example",$$slots:{default:[BC]},$$scope:{ctx:x}}}),Ls=new ce({props:{anchor:"transformers.TFElectraForMaskedLM.call.example-2",$$slots:{default:[VC]},$$scope:{ctx:x}}}),bi=new Se({}),wi=new W({props:{name:"class transformers.TFElectraForSequenceClassification",anchor:"transformers.TFElectraForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1269"}}),Is=new Ie({props:{$$slots:{default:[JC]},$$scope:{ctx:x}}}),xi=new W({props:{name:"call",anchor:"transformers.TFElectraForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1276",returnDescription:`
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
`}}),Ds=new Ie({props:{$$slots:{default:[GC]},$$scope:{ctx:x}}}),Ss=new ce({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example",$$slots:{default:[XC]},$$scope:{ctx:x}}}),Ws=new ce({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example-2",$$slots:{default:[YC]},$$scope:{ctx:x}}}),Mi=new Se({}),zi=new W({props:{name:"class transformers.TFElectraForMultipleChoice",anchor:"transformers.TFElectraForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1348"}}),Rs=new Ie({props:{$$slots:{default:[ZC]},$$scope:{ctx:x}}}),Pi=new W({props:{name:"call",anchor:"transformers.TFElectraForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1370",returnDescription:`
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
`}}),Hs=new Ie({props:{$$slots:{default:[ej]},$$scope:{ctx:x}}}),Ks=new ce({props:{anchor:"transformers.TFElectraForMultipleChoice.call.example",$$slots:{default:[tj]},$$scope:{ctx:x}}}),Ai=new Se({}),Oi=new W({props:{name:"class transformers.TFElectraForTokenClassification",anchor:"transformers.TFElectraForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1474"}}),Bs=new Ie({props:{$$slots:{default:[oj]},$$scope:{ctx:x}}}),Di=new W({props:{name:"call",anchor:"transformers.TFElectraForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1487",returnDescription:`
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
`}}),Vs=new Ie({props:{$$slots:{default:[nj]},$$scope:{ctx:x}}}),Js=new ce({props:{anchor:"transformers.TFElectraForTokenClassification.call.example",$$slots:{default:[sj]},$$scope:{ctx:x}}}),Gs=new ce({props:{anchor:"transformers.TFElectraForTokenClassification.call.example-2",$$slots:{default:[aj]},$$scope:{ctx:x}}}),Si=new Se({}),Wi=new W({props:{name:"class transformers.TFElectraForQuestionAnswering",anchor:"transformers.TFElectraForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1559"}}),Ys=new Ie({props:{$$slots:{default:[rj]},$$scope:{ctx:x}}}),Ki=new W({props:{name:"call",anchor:"transformers.TFElectraForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1569",returnDescription:`
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
`}}),Zs=new Ie({props:{$$slots:{default:[ij]},$$scope:{ctx:x}}}),ea=new ce({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example",$$slots:{default:[lj]},$$scope:{ctx:x}}}),ta=new ce({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example-2",$$slots:{default:[dj]},$$scope:{ctx:x}}}),Qi=new Se({}),Bi=new W({props:{name:"class transformers.FlaxElectraModel",anchor:"transformers.FlaxElectraModel",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L923"}}),tl=new W({props:{name:"__call__",anchor:"transformers.FlaxElectraModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),na=new Ie({props:{$$slots:{default:[cj]},$$scope:{ctx:x}}}),sa=new ce({props:{anchor:"transformers.FlaxElectraModel.__call__.example",$$slots:{default:[pj]},$$scope:{ctx:x}}}),ol=new Se({}),nl=new W({props:{name:"class transformers.FlaxElectraForPreTraining",anchor:"transformers.FlaxElectraForPreTraining",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1078"}}),pl=new W({props:{name:"__call__",anchor:"transformers.FlaxElectraForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ra=new Ie({props:{$$slots:{default:[hj]},$$scope:{ctx:x}}}),ia=new ce({props:{anchor:"transformers.FlaxElectraForPreTraining.__call__.example",$$slots:{default:[mj]},$$scope:{ctx:x}}}),hl=new Se({}),ml=new W({props:{name:"class transformers.FlaxElectraForCausalLM",anchor:"transformers.FlaxElectraForCausalLM",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1576"}}),Tl=new W({props:{name:"__call__",anchor:"transformers.FlaxElectraForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),da=new Ie({props:{$$slots:{default:[uj]},$$scope:{ctx:x}}}),ca=new ce({props:{anchor:"transformers.FlaxElectraForCausalLM.__call__.example",$$slots:{default:[fj]},$$scope:{ctx:x}}}),bl=new Se({}),wl=new W({props:{name:"class transformers.FlaxElectraForMaskedLM",anchor:"transformers.FlaxElectraForMaskedLM",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1012"}}),ql=new W({props:{name:"__call__",anchor:"transformers.FlaxElectraForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ha=new Ie({props:{$$slots:{default:[gj]},$$scope:{ctx:x}}}),ma=new ce({props:{anchor:"transformers.FlaxElectraForMaskedLM.__call__.example",$$slots:{default:[_j]},$$scope:{ctx:x}}}),Pl=new Se({}),Al=new W({props:{name:"class transformers.FlaxElectraForSequenceClassification",anchor:"transformers.FlaxElectraForSequenceClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1491"}}),Ul=new W({props:{name:"__call__",anchor:"transformers.FlaxElectraForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),fa=new Ie({props:{$$slots:{default:[kj]},$$scope:{ctx:x}}}),ga=new ce({props:{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.example",$$slots:{default:[vj]},$$scope:{ctx:x}}}),Rl=new Se({}),Hl=new W({props:{name:"class transformers.FlaxElectraForMultipleChoice",anchor:"transformers.FlaxElectraForMultipleChoice",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1321"}}),Yl=new W({props:{name:"__call__",anchor:"transformers.FlaxElectraForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ka=new Ie({props:{$$slots:{default:[yj]},$$scope:{ctx:x}}}),va=new ce({props:{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.example",$$slots:{default:[Tj]},$$scope:{ctx:x}}}),Zl=new Se({}),ed=new W({props:{name:"class transformers.FlaxElectraForTokenClassification",anchor:"transformers.FlaxElectraForTokenClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1173"}}),ld=new W({props:{name:"__call__",anchor:"transformers.FlaxElectraForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Ta=new Ie({props:{$$slots:{default:[bj]},$$scope:{ctx:x}}}),ba=new ce({props:{anchor:"transformers.FlaxElectraForTokenClassification.__call__.example",$$slots:{default:[wj]},$$scope:{ctx:x}}}),dd=new Se({}),cd=new W({props:{name:"class transformers.FlaxElectraForQuestionAnswering",anchor:"transformers.FlaxElectraForQuestionAnswering",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1397"}}),kd=new W({props:{name:"__call__",anchor:"transformers.FlaxElectraForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Ea=new Ie({props:{$$slots:{default:[Ej]},$$scope:{ctx:x}}}),$a=new ce({props:{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.example",$$slots:{default:[$j]},$$scope:{ctx:x}}}),{c(){d=a("meta"),g=p(),c=a("h1"),f=a("a"),v=a("span"),T(l.$$.fragment),m=p(),z=a("span"),Te=n("ELECTRA"),fe=p(),S=a("h2"),ae=a("a"),ee=a("span"),T(M.$$.fragment),be=p(),Q=a("span"),we=n("Overview"),ge=p(),U=a("p"),Ee=n("The ELECTRA model was proposed in the paper "),re=a("a"),B=n(`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
Generators`),$e=n(`. ELECTRA is a new pretraining approach which trains two
transformer models: the generator and the discriminator. The generator\u2019s role is to replace tokens in a sequence, and
is therefore trained as a masked language model. The discriminator, which is the model we\u2019re interested in, tries to
identify which tokens were replaced by the generator in the sequence.`),_e=p(),H=a("p"),Fe=n("The abstract from the paper is the following:"),ke=p(),K=a("p"),me=a("em"),xe=n(`Masked language modeling (MLM) pretraining methods such as BERT corrupt the input by replacing some tokens with [MASK]
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
using the same amount of compute.`),oe=p(),q=a("p"),A=n("Tips:"),ve=p(),R=a("ul"),ue=a("li"),Me=n(`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),V=p(),ne=a("li"),ze=n("The ELECTRA checkpoints saved using "),P=a("a"),Ce=n("Google Research\u2019s implementation"),J=n(`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),ie=a("a"),je=n("ElectraForMaskedLM"),G=n(` model, and the generator may be loaded in the
`),le=a("a"),qe=n("ElectraForPreTraining"),I=n(` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),ye=p(),D=a("p"),Pe=n("This model was contributed by "),Z=a("a"),O=n("lysandre"),Ae=n(". The original code can be found "),L=a("a"),Oe=n("here"),Le=n("."),y=p(),C=a("h2"),De=a("a"),te=a("span"),T(We.$$.fragment),Be=p(),j=a("span"),Ve=n("ElectraConfig"),Qe=p(),de=a("div"),T(Ue.$$.fragment),Je=p(),N=a("p"),X=n("This is the configuration class to store the configuration of a "),He=a("a"),Ge=n("ElectraModel"),Y=n(" or a "),Ke=a("a"),Xe=n("TFElectraModel"),Ne=n(`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),Re=a("a"),se=n("google/electra-small-discriminator"),Ye=n(" architecture."),n_=p(),Io=a("p"),s_=n("Configuration objects inherit from "),qd=a("a"),a_=n("PretrainedConfig"),r_=n(` and can be used to control the model outputs. Read the
documentation from `),Pd=a("a"),i_=n("PretrainedConfig"),l_=n(" for more information."),d_=p(),T(Un.$$.fragment),Nu=p(),Do=a("h2"),Rn=a("a"),Yc=a("span"),T(Xa.$$.fragment),c_=p(),Zc=a("span"),p_=n("ElectraTokenizer"),Iu=p(),Ut=a("div"),T(Ya.$$.fragment),h_=p(),ep=a("p"),m_=n("Construct an ELECTRA tokenizer."),u_=p(),Hn=a("p"),Ad=a("a"),f_=n("ElectraTokenizer"),g_=n(" is identical to "),Od=a("a"),__=n("BertTokenizer"),k_=n(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),v_=p(),Za=a("p"),y_=n("Refer to superclass "),Ld=a("a"),T_=n("BertTokenizer"),b_=n(" for usage examples and documentation concerning parameters."),Du=p(),So=a("h2"),Kn=a("a"),tp=a("span"),T(er.$$.fragment),w_=p(),op=a("span"),E_=n("ElectraTokenizerFast"),Su=p(),Rt=a("div"),T(tr.$$.fragment),$_=p(),or=a("p"),F_=n("Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),np=a("em"),x_=n("tokenizers"),M_=n(" library)."),z_=p(),Qn=a("p"),Nd=a("a"),C_=n("ElectraTokenizerFast"),j_=n(" is identical to "),Id=a("a"),q_=n("BertTokenizerFast"),P_=n(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),A_=p(),nr=a("p"),O_=n("Refer to superclass "),Dd=a("a"),L_=n("BertTokenizerFast"),N_=n(" for usage examples and documentation concerning parameters."),Wu=p(),Wo=a("h2"),Bn=a("a"),sp=a("span"),T(sr.$$.fragment),I_=p(),ap=a("span"),D_=n("Electra specific outputs"),Uu=p(),Uo=a("div"),T(ar.$$.fragment),S_=p(),rr=a("p"),W_=n("Output type of "),Sd=a("a"),U_=n("ElectraForPreTraining"),R_=n("."),Ru=p(),Ro=a("div"),T(ir.$$.fragment),H_=p(),lr=a("p"),K_=n("Output type of "),Wd=a("a"),Q_=n("TFElectraForPreTraining"),B_=n("."),Hu=p(),Ho=a("h2"),Vn=a("a"),rp=a("span"),T(dr.$$.fragment),V_=p(),ip=a("span"),J_=n("ElectraModel"),Ku=p(),yt=a("div"),T(cr.$$.fragment),G_=p(),lp=a("p"),X_=n("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),Y_=p(),pr=a("p"),Z_=n("This model inherits from "),Ud=a("a"),ek=n("PreTrainedModel"),tk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ok=p(),hr=a("p"),nk=n("This model is also a PyTorch "),mr=a("a"),sk=n("torch.nn.Module"),ak=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rk=p(),Ht=a("div"),T(ur.$$.fragment),ik=p(),Ko=a("p"),lk=n("The "),Rd=a("a"),dk=n("ElectraModel"),ck=n(" forward method, overrides the "),dp=a("code"),pk=n("__call__"),hk=n(" special method."),mk=p(),T(Jn.$$.fragment),uk=p(),T(Gn.$$.fragment),Qu=p(),Qo=a("h2"),Xn=a("a"),cp=a("span"),T(fr.$$.fragment),fk=p(),pp=a("span"),gk=n("ElectraForPreTraining"),Bu=p(),pt=a("div"),T(gr.$$.fragment),_k=p(),hp=a("p"),kk=n("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),vk=p(),mp=a("p"),yk=n("It is recommended to load the discriminator checkpoint into that model."),Tk=p(),_r=a("p"),bk=n("This model inherits from "),Hd=a("a"),wk=n("PreTrainedModel"),Ek=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$k=p(),kr=a("p"),Fk=n("This model is also a PyTorch "),vr=a("a"),xk=n("torch.nn.Module"),Mk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zk=p(),Kt=a("div"),T(yr.$$.fragment),Ck=p(),Bo=a("p"),jk=n("The "),Kd=a("a"),qk=n("ElectraForPreTraining"),Pk=n(" forward method, overrides the "),up=a("code"),Ak=n("__call__"),Ok=n(" special method."),Lk=p(),T(Yn.$$.fragment),Nk=p(),T(Zn.$$.fragment),Vu=p(),Vo=a("h2"),es=a("a"),fp=a("span"),T(Tr.$$.fragment),Ik=p(),gp=a("span"),Dk=n("ElectraForCausalLM"),Ju=p(),Tt=a("div"),T(br.$$.fragment),Sk=p(),wr=a("p"),Wk=n("ELECTRA Model with a "),_p=a("code"),Uk=n("language modeling"),Rk=n(" head on top for CLM fine-tuning."),Hk=p(),Er=a("p"),Kk=n("This model inherits from "),Qd=a("a"),Qk=n("PreTrainedModel"),Bk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vk=p(),$r=a("p"),Jk=n("This model is also a PyTorch "),Fr=a("a"),Gk=n("torch.nn.Module"),Xk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yk=p(),Qt=a("div"),T(xr.$$.fragment),Zk=p(),Jo=a("p"),ev=n("The "),Bd=a("a"),tv=n("ElectraForCausalLM"),ov=n(" forward method, overrides the "),kp=a("code"),nv=n("__call__"),sv=n(" special method."),av=p(),T(ts.$$.fragment),rv=p(),T(os.$$.fragment),Gu=p(),Go=a("h2"),ns=a("a"),vp=a("span"),T(Mr.$$.fragment),iv=p(),yp=a("span"),lv=n("ElectraForMaskedLM"),Xu=p(),ht=a("div"),T(zr.$$.fragment),dv=p(),Tp=a("p"),cv=n("Electra model with a language modeling head on top."),pv=p(),bp=a("p"),hv=n(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),mv=p(),Cr=a("p"),uv=n("This model inherits from "),Vd=a("a"),fv=n("PreTrainedModel"),gv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_v=p(),jr=a("p"),kv=n("This model is also a PyTorch "),qr=a("a"),vv=n("torch.nn.Module"),yv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tv=p(),$t=a("div"),T(Pr.$$.fragment),bv=p(),Xo=a("p"),wv=n("The "),Jd=a("a"),Ev=n("ElectraForMaskedLM"),$v=n(" forward method, overrides the "),wp=a("code"),Fv=n("__call__"),xv=n(" special method."),Mv=p(),T(ss.$$.fragment),zv=p(),T(as.$$.fragment),Cv=p(),T(rs.$$.fragment),Yu=p(),Yo=a("h2"),is=a("a"),Ep=a("span"),T(Ar.$$.fragment),jv=p(),$p=a("span"),qv=n("ElectraForSequenceClassification"),Zu=p(),bt=a("div"),T(Or.$$.fragment),Pv=p(),Fp=a("p"),Av=n(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ov=p(),Lr=a("p"),Lv=n("This model inherits from "),Gd=a("a"),Nv=n("PreTrainedModel"),Iv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dv=p(),Nr=a("p"),Sv=n("This model is also a PyTorch "),Ir=a("a"),Wv=n("torch.nn.Module"),Uv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rv=p(),ct=a("div"),T(Dr.$$.fragment),Hv=p(),Zo=a("p"),Kv=n("The "),Xd=a("a"),Qv=n("ElectraForSequenceClassification"),Bv=n(" forward method, overrides the "),xp=a("code"),Vv=n("__call__"),Jv=n(" special method."),Gv=p(),T(ls.$$.fragment),Xv=p(),T(ds.$$.fragment),Yv=p(),T(cs.$$.fragment),Zv=p(),T(ps.$$.fragment),ey=p(),T(hs.$$.fragment),ef=p(),en=a("h2"),ms=a("a"),Mp=a("span"),T(Sr.$$.fragment),ty=p(),zp=a("span"),oy=n("ElectraForMultipleChoice"),tf=p(),wt=a("div"),T(Wr.$$.fragment),ny=p(),Cp=a("p"),sy=n(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ay=p(),Ur=a("p"),ry=n("This model inherits from "),Yd=a("a"),iy=n("PreTrainedModel"),ly=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dy=p(),Rr=a("p"),cy=n("This model is also a PyTorch "),Hr=a("a"),py=n("torch.nn.Module"),hy=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),my=p(),Bt=a("div"),T(Kr.$$.fragment),uy=p(),tn=a("p"),fy=n("The "),Zd=a("a"),gy=n("ElectraForMultipleChoice"),_y=n(" forward method, overrides the "),jp=a("code"),ky=n("__call__"),vy=n(" special method."),yy=p(),T(us.$$.fragment),Ty=p(),T(fs.$$.fragment),of=p(),on=a("h2"),gs=a("a"),qp=a("span"),T(Qr.$$.fragment),by=p(),Pp=a("span"),wy=n("ElectraForTokenClassification"),nf=p(),mt=a("div"),T(Br.$$.fragment),Ey=p(),Ap=a("p"),$y=n("Electra model with a token classification head on top."),Fy=p(),Op=a("p"),xy=n("Both the discriminator and generator may be loaded into this model."),My=p(),Vr=a("p"),zy=n("This model inherits from "),ec=a("a"),Cy=n("PreTrainedModel"),jy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qy=p(),Jr=a("p"),Py=n("This model is also a PyTorch "),Gr=a("a"),Ay=n("torch.nn.Module"),Oy=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ly=p(),Ft=a("div"),T(Xr.$$.fragment),Ny=p(),nn=a("p"),Iy=n("The "),tc=a("a"),Dy=n("ElectraForTokenClassification"),Sy=n(" forward method, overrides the "),Lp=a("code"),Wy=n("__call__"),Uy=n(" special method."),Ry=p(),T(_s.$$.fragment),Hy=p(),T(ks.$$.fragment),Ky=p(),T(vs.$$.fragment),sf=p(),sn=a("h2"),ys=a("a"),Np=a("span"),T(Yr.$$.fragment),Qy=p(),Ip=a("span"),By=n("ElectraForQuestionAnswering"),af=p(),Et=a("div"),T(Zr.$$.fragment),Vy=p(),an=a("p"),Jy=n(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Dp=a("code"),Gy=n("span start logits"),Xy=n(" and "),Sp=a("code"),Yy=n("span end logits"),Zy=n(")."),eT=p(),ei=a("p"),tT=n("This model inherits from "),oc=a("a"),oT=n("PreTrainedModel"),nT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sT=p(),ti=a("p"),aT=n("This model is also a PyTorch "),oi=a("a"),rT=n("torch.nn.Module"),iT=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lT=p(),xt=a("div"),T(ni.$$.fragment),dT=p(),rn=a("p"),cT=n("The "),nc=a("a"),pT=n("ElectraForQuestionAnswering"),hT=n(" forward method, overrides the "),Wp=a("code"),mT=n("__call__"),uT=n(" special method."),fT=p(),T(Ts.$$.fragment),gT=p(),T(bs.$$.fragment),_T=p(),T(ws.$$.fragment),rf=p(),ln=a("h2"),Es=a("a"),Up=a("span"),T(si.$$.fragment),kT=p(),Rp=a("span"),vT=n("TFElectraModel"),lf=p(),ut=a("div"),T(ai.$$.fragment),yT=p(),Hp=a("p"),TT=n("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),bT=p(),ri=a("p"),wT=n("This model inherits from "),sc=a("a"),ET=n("TFPreTrainedModel"),$T=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),FT=p(),ii=a("p"),xT=n("This model is also a "),li=a("a"),MT=n("tf.keras.Model"),zT=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),CT=p(),T($s.$$.fragment),jT=p(),Vt=a("div"),T(di.$$.fragment),qT=p(),dn=a("p"),PT=n("The "),ac=a("a"),AT=n("TFElectraModel"),OT=n(" forward method, overrides the "),Kp=a("code"),LT=n("__call__"),NT=n(" special method."),IT=p(),T(Fs.$$.fragment),DT=p(),T(xs.$$.fragment),df=p(),cn=a("h2"),Ms=a("a"),Qp=a("span"),T(ci.$$.fragment),ST=p(),Bp=a("span"),WT=n("TFElectraForPreTraining"),cf=p(),tt=a("div"),T(pi.$$.fragment),UT=p(),Vp=a("p"),RT=n("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),HT=p(),Jp=a("p"),KT=n(`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),QT=p(),hi=a("p"),BT=n("This model inherits from "),rc=a("a"),VT=n("TFPreTrainedModel"),JT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),GT=p(),mi=a("p"),XT=n("This model is also a "),ui=a("a"),YT=n("tf.keras.Model"),ZT=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),eb=p(),T(zs.$$.fragment),tb=p(),Jt=a("div"),T(fi.$$.fragment),ob=p(),pn=a("p"),nb=n("The "),ic=a("a"),sb=n("TFElectraForPreTraining"),ab=n(" forward method, overrides the "),Gp=a("code"),rb=n("__call__"),ib=n(" special method."),lb=p(),T(Cs.$$.fragment),db=p(),T(js.$$.fragment),pf=p(),hn=a("h2"),qs=a("a"),Xp=a("span"),T(gi.$$.fragment),cb=p(),Yp=a("span"),pb=n("TFElectraForMaskedLM"),hf=p(),ot=a("div"),T(_i.$$.fragment),hb=p(),Zp=a("p"),mb=n("Electra model with a language modeling head on top."),ub=p(),eh=a("p"),fb=n(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),gb=p(),ki=a("p"),_b=n("This model inherits from "),lc=a("a"),kb=n("TFPreTrainedModel"),vb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yb=p(),vi=a("p"),Tb=n("This model is also a "),yi=a("a"),bb=n("tf.keras.Model"),wb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Eb=p(),T(Ps.$$.fragment),$b=p(),Mt=a("div"),T(Ti.$$.fragment),Fb=p(),mn=a("p"),xb=n("The "),dc=a("a"),Mb=n("TFElectraForMaskedLM"),zb=n(" forward method, overrides the "),th=a("code"),Cb=n("__call__"),jb=n(" special method."),qb=p(),T(As.$$.fragment),Pb=p(),T(Os.$$.fragment),Ab=p(),T(Ls.$$.fragment),mf=p(),un=a("h2"),Ns=a("a"),oh=a("span"),T(bi.$$.fragment),Ob=p(),nh=a("span"),Lb=n("TFElectraForSequenceClassification"),uf=p(),ft=a("div"),T(wi.$$.fragment),Nb=p(),sh=a("p"),Ib=n(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Db=p(),Ei=a("p"),Sb=n("This model inherits from "),cc=a("a"),Wb=n("TFPreTrainedModel"),Ub=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rb=p(),$i=a("p"),Hb=n("This model is also a "),Fi=a("a"),Kb=n("tf.keras.Model"),Qb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bb=p(),T(Is.$$.fragment),Vb=p(),zt=a("div"),T(xi.$$.fragment),Jb=p(),fn=a("p"),Gb=n("The "),pc=a("a"),Xb=n("TFElectraForSequenceClassification"),Yb=n(" forward method, overrides the "),ah=a("code"),Zb=n("__call__"),ew=n(" special method."),tw=p(),T(Ds.$$.fragment),ow=p(),T(Ss.$$.fragment),nw=p(),T(Ws.$$.fragment),ff=p(),gn=a("h2"),Us=a("a"),rh=a("span"),T(Mi.$$.fragment),sw=p(),ih=a("span"),aw=n("TFElectraForMultipleChoice"),gf=p(),gt=a("div"),T(zi.$$.fragment),rw=p(),lh=a("p"),iw=n(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),lw=p(),Ci=a("p"),dw=n("This model inherits from "),hc=a("a"),cw=n("TFPreTrainedModel"),pw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hw=p(),ji=a("p"),mw=n("This model is also a "),qi=a("a"),uw=n("tf.keras.Model"),fw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gw=p(),T(Rs.$$.fragment),_w=p(),Gt=a("div"),T(Pi.$$.fragment),kw=p(),_n=a("p"),vw=n("The "),mc=a("a"),yw=n("TFElectraForMultipleChoice"),Tw=n(" forward method, overrides the "),dh=a("code"),bw=n("__call__"),ww=n(" special method."),Ew=p(),T(Hs.$$.fragment),$w=p(),T(Ks.$$.fragment),_f=p(),kn=a("h2"),Qs=a("a"),ch=a("span"),T(Ai.$$.fragment),Fw=p(),ph=a("span"),xw=n("TFElectraForTokenClassification"),kf=p(),nt=a("div"),T(Oi.$$.fragment),Mw=p(),hh=a("p"),zw=n("Electra model with a token classification head on top."),Cw=p(),mh=a("p"),jw=n("Both the discriminator and generator may be loaded into this model."),qw=p(),Li=a("p"),Pw=n("This model inherits from "),uc=a("a"),Aw=n("TFPreTrainedModel"),Ow=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lw=p(),Ni=a("p"),Nw=n("This model is also a "),Ii=a("a"),Iw=n("tf.keras.Model"),Dw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sw=p(),T(Bs.$$.fragment),Ww=p(),Ct=a("div"),T(Di.$$.fragment),Uw=p(),vn=a("p"),Rw=n("The "),fc=a("a"),Hw=n("TFElectraForTokenClassification"),Kw=n(" forward method, overrides the "),uh=a("code"),Qw=n("__call__"),Bw=n(" special method."),Vw=p(),T(Vs.$$.fragment),Jw=p(),T(Js.$$.fragment),Gw=p(),T(Gs.$$.fragment),vf=p(),yn=a("h2"),Xs=a("a"),fh=a("span"),T(Si.$$.fragment),Xw=p(),gh=a("span"),Yw=n("TFElectraForQuestionAnswering"),yf=p(),_t=a("div"),T(Wi.$$.fragment),Zw=p(),Tn=a("p"),eE=n(`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),_h=a("code"),tE=n("span start logits"),oE=n(" and "),kh=a("code"),nE=n("span end logits"),sE=n(")."),aE=p(),Ui=a("p"),rE=n("This model inherits from "),gc=a("a"),iE=n("TFPreTrainedModel"),lE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dE=p(),Ri=a("p"),cE=n("This model is also a "),Hi=a("a"),pE=n("tf.keras.Model"),hE=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mE=p(),T(Ys.$$.fragment),uE=p(),jt=a("div"),T(Ki.$$.fragment),fE=p(),bn=a("p"),gE=n("The "),_c=a("a"),_E=n("TFElectraForQuestionAnswering"),kE=n(" forward method, overrides the "),vh=a("code"),vE=n("__call__"),yE=n(" special method."),TE=p(),T(Zs.$$.fragment),bE=p(),T(ea.$$.fragment),wE=p(),T(ta.$$.fragment),Tf=p(),wn=a("h2"),oa=a("a"),yh=a("span"),T(Qi.$$.fragment),EE=p(),Th=a("span"),$E=n("FlaxElectraModel"),bf=p(),st=a("div"),T(Bi.$$.fragment),FE=p(),bh=a("p"),xE=n("The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),ME=p(),Vi=a("p"),zE=n("This model inherits from "),kc=a("a"),CE=n("FlaxPreTrainedModel"),jE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),qE=p(),Ji=a("p"),PE=n(`This model is also a Flax Linen
`),Gi=a("a"),AE=n("flax.nn.Module"),OE=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),LE=p(),wh=a("p"),NE=n("Finally, this model supports inherent JAX features such as:"),IE=p(),mo=a("ul"),Eh=a("li"),Xi=a("a"),DE=n("Just-In-Time (JIT) compilation"),SE=p(),$h=a("li"),Yi=a("a"),WE=n("Automatic Differentiation"),UE=p(),Fh=a("li"),Zi=a("a"),RE=n("Vectorization"),HE=p(),xh=a("li"),el=a("a"),KE=n("Parallelization"),QE=p(),Xt=a("div"),T(tl.$$.fragment),BE=p(),En=a("p"),VE=n("The "),Mh=a("code"),JE=n("FlaxElectraPreTrainedModel"),GE=n(" forward method, overrides the "),zh=a("code"),XE=n("__call__"),YE=n(" special method."),ZE=p(),T(na.$$.fragment),e$=p(),T(sa.$$.fragment),wf=p(),$n=a("h2"),aa=a("a"),Ch=a("span"),T(ol.$$.fragment),t$=p(),jh=a("span"),o$=n("FlaxElectraForPreTraining"),Ef=p(),Ze=a("div"),T(nl.$$.fragment),n$=p(),qh=a("p"),s$=n("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),a$=p(),Ph=a("p"),r$=n("It is recommended to load the discriminator checkpoint into that model."),i$=p(),sl=a("p"),l$=n("This model inherits from "),vc=a("a"),d$=n("FlaxPreTrainedModel"),c$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),p$=p(),al=a("p"),h$=n(`This model is also a Flax Linen
`),rl=a("a"),m$=n("flax.nn.Module"),u$=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),f$=p(),Ah=a("p"),g$=n("Finally, this model supports inherent JAX features such as:"),_$=p(),uo=a("ul"),Oh=a("li"),il=a("a"),k$=n("Just-In-Time (JIT) compilation"),v$=p(),Lh=a("li"),ll=a("a"),y$=n("Automatic Differentiation"),T$=p(),Nh=a("li"),dl=a("a"),b$=n("Vectorization"),w$=p(),Ih=a("li"),cl=a("a"),E$=n("Parallelization"),$$=p(),Yt=a("div"),T(pl.$$.fragment),F$=p(),Fn=a("p"),x$=n("The "),Dh=a("code"),M$=n("FlaxElectraPreTrainedModel"),z$=n(" forward method, overrides the "),Sh=a("code"),C$=n("__call__"),j$=n(" special method."),q$=p(),T(ra.$$.fragment),P$=p(),T(ia.$$.fragment),$f=p(),xn=a("h2"),la=a("a"),Wh=a("span"),T(hl.$$.fragment),A$=p(),Uh=a("span"),O$=n("FlaxElectraForCausalLM"),Ff=p(),at=a("div"),T(ml.$$.fragment),L$=p(),Rh=a("p"),N$=n(`Electra Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),I$=p(),ul=a("p"),D$=n("This model inherits from "),yc=a("a"),S$=n("FlaxPreTrainedModel"),W$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),U$=p(),fl=a("p"),R$=n(`This model is also a Flax Linen
`),gl=a("a"),H$=n("flax.nn.Module"),K$=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Q$=p(),Hh=a("p"),B$=n("Finally, this model supports inherent JAX features such as:"),V$=p(),fo=a("ul"),Kh=a("li"),_l=a("a"),J$=n("Just-In-Time (JIT) compilation"),G$=p(),Qh=a("li"),kl=a("a"),X$=n("Automatic Differentiation"),Y$=p(),Bh=a("li"),vl=a("a"),Z$=n("Vectorization"),e1=p(),Vh=a("li"),yl=a("a"),t1=n("Parallelization"),o1=p(),Zt=a("div"),T(Tl.$$.fragment),n1=p(),Mn=a("p"),s1=n("The "),Jh=a("code"),a1=n("FlaxElectraPreTrainedModel"),r1=n(" forward method, overrides the "),Gh=a("code"),i1=n("__call__"),l1=n(" special method."),d1=p(),T(da.$$.fragment),c1=p(),T(ca.$$.fragment),xf=p(),zn=a("h2"),pa=a("a"),Xh=a("span"),T(bl.$$.fragment),p1=p(),Yh=a("span"),h1=n("FlaxElectraForMaskedLM"),Mf=p(),rt=a("div"),T(wl.$$.fragment),m1=p(),El=a("p"),u1=n("Electra Model with a "),Zh=a("code"),f1=n("language modeling"),g1=n(" head on top."),_1=p(),$l=a("p"),k1=n("This model inherits from "),Tc=a("a"),v1=n("FlaxPreTrainedModel"),y1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),T1=p(),Fl=a("p"),b1=n(`This model is also a Flax Linen
`),xl=a("a"),w1=n("flax.nn.Module"),E1=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$1=p(),em=a("p"),F1=n("Finally, this model supports inherent JAX features such as:"),x1=p(),go=a("ul"),tm=a("li"),Ml=a("a"),M1=n("Just-In-Time (JIT) compilation"),z1=p(),om=a("li"),zl=a("a"),C1=n("Automatic Differentiation"),j1=p(),nm=a("li"),Cl=a("a"),q1=n("Vectorization"),P1=p(),sm=a("li"),jl=a("a"),A1=n("Parallelization"),O1=p(),eo=a("div"),T(ql.$$.fragment),L1=p(),Cn=a("p"),N1=n("The "),am=a("code"),I1=n("FlaxElectraPreTrainedModel"),D1=n(" forward method, overrides the "),rm=a("code"),S1=n("__call__"),W1=n(" special method."),U1=p(),T(ha.$$.fragment),R1=p(),T(ma.$$.fragment),zf=p(),jn=a("h2"),ua=a("a"),im=a("span"),T(Pl.$$.fragment),H1=p(),lm=a("span"),K1=n("FlaxElectraForSequenceClassification"),Cf=p(),it=a("div"),T(Al.$$.fragment),Q1=p(),dm=a("p"),B1=n(`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),V1=p(),Ol=a("p"),J1=n("This model inherits from "),bc=a("a"),G1=n("FlaxPreTrainedModel"),X1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Y1=p(),Ll=a("p"),Z1=n(`This model is also a Flax Linen
`),Nl=a("a"),e2=n("flax.nn.Module"),t2=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),o2=p(),cm=a("p"),n2=n("Finally, this model supports inherent JAX features such as:"),s2=p(),_o=a("ul"),pm=a("li"),Il=a("a"),a2=n("Just-In-Time (JIT) compilation"),r2=p(),hm=a("li"),Dl=a("a"),i2=n("Automatic Differentiation"),l2=p(),mm=a("li"),Sl=a("a"),d2=n("Vectorization"),c2=p(),um=a("li"),Wl=a("a"),p2=n("Parallelization"),h2=p(),to=a("div"),T(Ul.$$.fragment),m2=p(),qn=a("p"),u2=n("The "),fm=a("code"),f2=n("FlaxElectraPreTrainedModel"),g2=n(" forward method, overrides the "),gm=a("code"),_2=n("__call__"),k2=n(" special method."),v2=p(),T(fa.$$.fragment),y2=p(),T(ga.$$.fragment),jf=p(),Pn=a("h2"),_a=a("a"),_m=a("span"),T(Rl.$$.fragment),T2=p(),km=a("span"),b2=n("FlaxElectraForMultipleChoice"),qf=p(),lt=a("div"),T(Hl.$$.fragment),w2=p(),vm=a("p"),E2=n(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),$2=p(),Kl=a("p"),F2=n("This model inherits from "),wc=a("a"),x2=n("FlaxPreTrainedModel"),M2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),z2=p(),Ql=a("p"),C2=n(`This model is also a Flax Linen
`),Bl=a("a"),j2=n("flax.nn.Module"),q2=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),P2=p(),ym=a("p"),A2=n("Finally, this model supports inherent JAX features such as:"),O2=p(),ko=a("ul"),Tm=a("li"),Vl=a("a"),L2=n("Just-In-Time (JIT) compilation"),N2=p(),bm=a("li"),Jl=a("a"),I2=n("Automatic Differentiation"),D2=p(),wm=a("li"),Gl=a("a"),S2=n("Vectorization"),W2=p(),Em=a("li"),Xl=a("a"),U2=n("Parallelization"),R2=p(),oo=a("div"),T(Yl.$$.fragment),H2=p(),An=a("p"),K2=n("The "),$m=a("code"),Q2=n("FlaxElectraPreTrainedModel"),B2=n(" forward method, overrides the "),Fm=a("code"),V2=n("__call__"),J2=n(" special method."),G2=p(),T(ka.$$.fragment),X2=p(),T(va.$$.fragment),Pf=p(),On=a("h2"),ya=a("a"),xm=a("span"),T(Zl.$$.fragment),Y2=p(),Mm=a("span"),Z2=n("FlaxElectraForTokenClassification"),Af=p(),et=a("div"),T(ed.$$.fragment),eF=p(),zm=a("p"),tF=n("Electra model with a token classification head on top."),oF=p(),Cm=a("p"),nF=n("Both the discriminator and generator may be loaded into this model."),sF=p(),td=a("p"),aF=n("This model inherits from "),Ec=a("a"),rF=n("FlaxPreTrainedModel"),iF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),lF=p(),od=a("p"),dF=n(`This model is also a Flax Linen
`),nd=a("a"),cF=n("flax.nn.Module"),pF=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),hF=p(),jm=a("p"),mF=n("Finally, this model supports inherent JAX features such as:"),uF=p(),vo=a("ul"),qm=a("li"),sd=a("a"),fF=n("Just-In-Time (JIT) compilation"),gF=p(),Pm=a("li"),ad=a("a"),_F=n("Automatic Differentiation"),kF=p(),Am=a("li"),rd=a("a"),vF=n("Vectorization"),yF=p(),Om=a("li"),id=a("a"),TF=n("Parallelization"),bF=p(),no=a("div"),T(ld.$$.fragment),wF=p(),Ln=a("p"),EF=n("The "),Lm=a("code"),$F=n("FlaxElectraPreTrainedModel"),FF=n(" forward method, overrides the "),Nm=a("code"),xF=n("__call__"),MF=n(" special method."),zF=p(),T(Ta.$$.fragment),CF=p(),T(ba.$$.fragment),Of=p(),Nn=a("h2"),wa=a("a"),Im=a("span"),T(dd.$$.fragment),jF=p(),Dm=a("span"),qF=n("FlaxElectraForQuestionAnswering"),Lf=p(),dt=a("div"),T(cd.$$.fragment),PF=p(),In=a("p"),AF=n(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Sm=a("code"),OF=n("span start logits"),LF=n(" and "),Wm=a("code"),NF=n("span end logits"),IF=n(")."),DF=p(),pd=a("p"),SF=n("This model inherits from "),$c=a("a"),WF=n("FlaxPreTrainedModel"),UF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),RF=p(),hd=a("p"),HF=n(`This model is also a Flax Linen
`),md=a("a"),KF=n("flax.nn.Module"),QF=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),BF=p(),Um=a("p"),VF=n("Finally, this model supports inherent JAX features such as:"),JF=p(),yo=a("ul"),Rm=a("li"),ud=a("a"),GF=n("Just-In-Time (JIT) compilation"),XF=p(),Hm=a("li"),fd=a("a"),YF=n("Automatic Differentiation"),ZF=p(),Km=a("li"),gd=a("a"),e0=n("Vectorization"),t0=p(),Qm=a("li"),_d=a("a"),o0=n("Parallelization"),n0=p(),so=a("div"),T(kd.$$.fragment),s0=p(),Dn=a("p"),a0=n("The "),Bm=a("code"),r0=n("FlaxElectraPreTrainedModel"),i0=n(" forward method, overrides the "),Vm=a("code"),l0=n("__call__"),d0=n(" special method."),c0=p(),T(Ea.$$.fragment),p0=p(),T($a.$$.fragment),this.h()},l(o){const k=uC('[data-svelte="svelte-1phssyn"]',document.head);d=r(k,"META",{name:!0,content:!0}),k.forEach(t),g=h(o),c=r(o,"H1",{class:!0});var vd=i(c);f=r(vd,"A",{id:!0,class:!0,href:!0});var Jm=i(f);v=r(Jm,"SPAN",{});var Gm=i(v);b(l.$$.fragment,Gm),Gm.forEach(t),Jm.forEach(t),m=h(vd),z=r(vd,"SPAN",{});var Xm=i(z);Te=s(Xm,"ELECTRA"),Xm.forEach(t),vd.forEach(t),fe=h(o),S=r(o,"H2",{class:!0});var yd=i(S);ae=r(yd,"A",{id:!0,class:!0,href:!0});var Ym=i(ae);ee=r(Ym,"SPAN",{});var Zm=i(ee);b(M.$$.fragment,Zm),Zm.forEach(t),Ym.forEach(t),be=h(yd),Q=r(yd,"SPAN",{});var eu=i(Q);we=s(eu,"Overview"),eu.forEach(t),yd.forEach(t),ge=h(o),U=r(o,"P",{});var Td=i(U);Ee=s(Td,"The ELECTRA model was proposed in the paper "),re=r(Td,"A",{href:!0,rel:!0});var tu=i(re);B=s(tu,`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
Generators`),tu.forEach(t),$e=s(Td,`. ELECTRA is a new pretraining approach which trains two
transformer models: the generator and the discriminator. The generator\u2019s role is to replace tokens in a sequence, and
is therefore trained as a masked language model. The discriminator, which is the model we\u2019re interested in, tries to
identify which tokens were replaced by the generator in the sequence.`),Td.forEach(t),_e=h(o),H=r(o,"P",{});var ou=i(H);Fe=s(ou,"The abstract from the paper is the following:"),ou.forEach(t),ke=h(o),K=r(o,"P",{});var nu=i(K);me=r(nu,"EM",{});var su=i(me);xe=s(su,`Masked language modeling (MLM) pretraining methods such as BERT corrupt the input by replacing some tokens with [MASK]
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
using the same amount of compute.`),su.forEach(t),nu.forEach(t),oe=h(o),q=r(o,"P",{});var au=i(q);A=s(au,"Tips:"),au.forEach(t),ve=h(o),R=r(o,"UL",{});var bd=i(R);ue=r(bd,"LI",{});var ru=i(ue);Me=s(ru,`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),ru.forEach(t),V=h(bd),ne=r(bd,"LI",{});var To=i(ne);ze=s(To,"The ELECTRA checkpoints saved using "),P=r(To,"A",{href:!0,rel:!0});var iu=i(P);Ce=s(iu,"Google Research\u2019s implementation"),iu.forEach(t),J=s(To,`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),ie=r(To,"A",{href:!0});var lu=i(ie);je=s(lu,"ElectraForMaskedLM"),lu.forEach(t),G=s(To,` model, and the generator may be loaded in the
`),le=r(To,"A",{href:!0});var du=i(le);qe=s(du,"ElectraForPreTraining"),du.forEach(t),I=s(To,` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),To.forEach(t),bd.forEach(t),ye=h(o),D=r(o,"P",{});var Sn=i(D);Pe=s(Sn,"This model was contributed by "),Z=r(Sn,"A",{href:!0,rel:!0});var cu=i(Z);O=s(cu,"lysandre"),cu.forEach(t),Ae=s(Sn,". The original code can be found "),L=r(Sn,"A",{href:!0,rel:!0});var pu=i(L);Oe=s(pu,"here"),pu.forEach(t),Le=s(Sn,"."),Sn.forEach(t),y=h(o),C=r(o,"H2",{class:!0});var wd=i(C);De=r(wd,"A",{id:!0,class:!0,href:!0});var hu=i(De);te=r(hu,"SPAN",{});var mu=i(te);b(We.$$.fragment,mu),mu.forEach(t),hu.forEach(t),Be=h(wd),j=r(wd,"SPAN",{});var uu=i(j);Ve=s(uu,"ElectraConfig"),uu.forEach(t),wd.forEach(t),Qe=h(o),de=r(o,"DIV",{class:!0});var bo=i(de);b(Ue.$$.fragment,bo),Je=h(bo),N=r(bo,"P",{});var wo=i(N);X=s(wo,"This is the configuration class to store the configuration of a "),He=r(wo,"A",{href:!0});var fu=i(He);Ge=s(fu,"ElectraModel"),fu.forEach(t),Y=s(wo," or a "),Ke=r(wo,"A",{href:!0});var gu=i(Ke);Xe=s(gu,"TFElectraModel"),gu.forEach(t),Ne=s(wo,`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),Re=r(wo,"A",{href:!0,rel:!0});var _u=i(Re);se=s(_u,"google/electra-small-discriminator"),_u.forEach(t),Ye=s(wo," architecture."),wo.forEach(t),n_=h(bo),Io=r(bo,"P",{});var Wn=i(Io);s_=s(Wn,"Configuration objects inherit from "),qd=r(Wn,"A",{href:!0});var ku=i(qd);a_=s(ku,"PretrainedConfig"),ku.forEach(t),r_=s(Wn,` and can be used to control the model outputs. Read the
documentation from `),Pd=r(Wn,"A",{href:!0});var vu=i(Pd);i_=s(vu,"PretrainedConfig"),vu.forEach(t),l_=s(Wn," for more information."),Wn.forEach(t),d_=h(bo),b(Un.$$.fragment,bo),bo.forEach(t),Nu=h(o),Do=r(o,"H2",{class:!0});var Ed=i(Do);Rn=r(Ed,"A",{id:!0,class:!0,href:!0});var yu=i(Rn);Yc=r(yu,"SPAN",{});var Tu=i(Yc);b(Xa.$$.fragment,Tu),Tu.forEach(t),yu.forEach(t),c_=h(Ed),Zc=r(Ed,"SPAN",{});var bu=i(Zc);p_=s(bu,"ElectraTokenizer"),bu.forEach(t),Ed.forEach(t),Iu=h(o),Ut=r(o,"DIV",{class:!0});var Eo=i(Ut);b(Ya.$$.fragment,Eo),h_=h(Eo),ep=r(Eo,"P",{});var wu=i(ep);m_=s(wu,"Construct an ELECTRA tokenizer."),wu.forEach(t),u_=h(Eo),Hn=r(Eo,"P",{});var Fa=i(Hn);Ad=r(Fa,"A",{href:!0});var Eu=i(Ad);f_=s(Eu,"ElectraTokenizer"),Eu.forEach(t),g_=s(Fa," is identical to "),Od=r(Fa,"A",{href:!0});var $u=i(Od);__=s($u,"BertTokenizer"),$u.forEach(t),k_=s(Fa,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Fa.forEach(t),v_=h(Eo),Za=r(Eo,"P",{});var $d=i(Za);y_=s($d,"Refer to superclass "),Ld=r($d,"A",{href:!0});var Fu=i(Ld);T_=s(Fu,"BertTokenizer"),Fu.forEach(t),b_=s($d," for usage examples and documentation concerning parameters."),$d.forEach(t),Eo.forEach(t),Du=h(o),So=r(o,"H2",{class:!0});var Fd=i(So);Kn=r(Fd,"A",{id:!0,class:!0,href:!0});var xu=i(Kn);tp=r(xu,"SPAN",{});var Mu=i(tp);b(er.$$.fragment,Mu),Mu.forEach(t),xu.forEach(t),w_=h(Fd),op=r(Fd,"SPAN",{});var zu=i(op);E_=s(zu,"ElectraTokenizerFast"),zu.forEach(t),Fd.forEach(t),Su=h(o),Rt=r(o,"DIV",{class:!0});var $o=i(Rt);b(tr.$$.fragment,$o),$_=h($o),or=r($o,"P",{});var xd=i(or);F_=s(xd,"Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),np=r(xd,"EM",{});var Cu=i(np);x_=s(Cu,"tokenizers"),Cu.forEach(t),M_=s(xd," library)."),xd.forEach(t),z_=h($o),Qn=r($o,"P",{});var xa=i(Qn);Nd=r(xa,"A",{href:!0});var ju=i(Nd);C_=s(ju,"ElectraTokenizerFast"),ju.forEach(t),j_=s(xa," is identical to "),Id=r(xa,"A",{href:!0});var qu=i(Id);q_=s(qu,"BertTokenizerFast"),qu.forEach(t),P_=s(xa,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),xa.forEach(t),A_=h($o),nr=r($o,"P",{});var Md=i(nr);O_=s(Md,"Refer to superclass "),Dd=r(Md,"A",{href:!0});var Pu=i(Dd);L_=s(Pu,"BertTokenizerFast"),Pu.forEach(t),N_=s(Md," for usage examples and documentation concerning parameters."),Md.forEach(t),$o.forEach(t),Wu=h(o),Wo=r(o,"H2",{class:!0});var zd=i(Wo);Bn=r(zd,"A",{id:!0,class:!0,href:!0});var Au=i(Bn);sp=r(Au,"SPAN",{});var Ou=i(sp);b(sr.$$.fragment,Ou),Ou.forEach(t),Au.forEach(t),I_=h(zd),ap=r(zd,"SPAN",{});var Lu=i(ap);D_=s(Lu,"Electra specific outputs"),Lu.forEach(t),zd.forEach(t),Uu=h(o),Uo=r(o,"DIV",{class:!0});var Cd=i(Uo);b(ar.$$.fragment,Cd),S_=h(Cd),rr=r(Cd,"P",{});var jd=i(rr);W_=s(jd,"Output type of "),Sd=r(jd,"A",{href:!0});var h0=i(Sd);U_=s(h0,"ElectraForPreTraining"),h0.forEach(t),R_=s(jd,"."),jd.forEach(t),Cd.forEach(t),Ru=h(o),Ro=r(o,"DIV",{class:!0});var If=i(Ro);b(ir.$$.fragment,If),H_=h(If),lr=r(If,"P",{});var Df=i(lr);K_=s(Df,"Output type of "),Wd=r(Df,"A",{href:!0});var m0=i(Wd);Q_=s(m0,"TFElectraForPreTraining"),m0.forEach(t),B_=s(Df,"."),Df.forEach(t),If.forEach(t),Hu=h(o),Ho=r(o,"H2",{class:!0});var Sf=i(Ho);Vn=r(Sf,"A",{id:!0,class:!0,href:!0});var u0=i(Vn);rp=r(u0,"SPAN",{});var f0=i(rp);b(dr.$$.fragment,f0),f0.forEach(t),u0.forEach(t),V_=h(Sf),ip=r(Sf,"SPAN",{});var g0=i(ip);J_=s(g0,"ElectraModel"),g0.forEach(t),Sf.forEach(t),Ku=h(o),yt=r(o,"DIV",{class:!0});var Fo=i(yt);b(cr.$$.fragment,Fo),G_=h(Fo),lp=r(Fo,"P",{});var _0=i(lp);X_=s(_0,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),_0.forEach(t),Y_=h(Fo),pr=r(Fo,"P",{});var Wf=i(pr);Z_=s(Wf,"This model inherits from "),Ud=r(Wf,"A",{href:!0});var k0=i(Ud);ek=s(k0,"PreTrainedModel"),k0.forEach(t),tk=s(Wf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wf.forEach(t),ok=h(Fo),hr=r(Fo,"P",{});var Uf=i(hr);nk=s(Uf,"This model is also a PyTorch "),mr=r(Uf,"A",{href:!0,rel:!0});var v0=i(mr);sk=s(v0,"torch.nn.Module"),v0.forEach(t),ak=s(Uf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uf.forEach(t),rk=h(Fo),Ht=r(Fo,"DIV",{class:!0});var Ma=i(Ht);b(ur.$$.fragment,Ma),ik=h(Ma),Ko=r(Ma,"P",{});var Fc=i(Ko);lk=s(Fc,"The "),Rd=r(Fc,"A",{href:!0});var y0=i(Rd);dk=s(y0,"ElectraModel"),y0.forEach(t),ck=s(Fc," forward method, overrides the "),dp=r(Fc,"CODE",{});var T0=i(dp);pk=s(T0,"__call__"),T0.forEach(t),hk=s(Fc," special method."),Fc.forEach(t),mk=h(Ma),b(Jn.$$.fragment,Ma),uk=h(Ma),b(Gn.$$.fragment,Ma),Ma.forEach(t),Fo.forEach(t),Qu=h(o),Qo=r(o,"H2",{class:!0});var Rf=i(Qo);Xn=r(Rf,"A",{id:!0,class:!0,href:!0});var b0=i(Xn);cp=r(b0,"SPAN",{});var w0=i(cp);b(fr.$$.fragment,w0),w0.forEach(t),b0.forEach(t),fk=h(Rf),pp=r(Rf,"SPAN",{});var E0=i(pp);gk=s(E0,"ElectraForPreTraining"),E0.forEach(t),Rf.forEach(t),Bu=h(o),pt=r(o,"DIV",{class:!0});var ao=i(pt);b(gr.$$.fragment,ao),_k=h(ao),hp=r(ao,"P",{});var $0=i(hp);kk=s($0,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),$0.forEach(t),vk=h(ao),mp=r(ao,"P",{});var F0=i(mp);yk=s(F0,"It is recommended to load the discriminator checkpoint into that model."),F0.forEach(t),Tk=h(ao),_r=r(ao,"P",{});var Hf=i(_r);bk=s(Hf,"This model inherits from "),Hd=r(Hf,"A",{href:!0});var x0=i(Hd);wk=s(x0,"PreTrainedModel"),x0.forEach(t),Ek=s(Hf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hf.forEach(t),$k=h(ao),kr=r(ao,"P",{});var Kf=i(kr);Fk=s(Kf,"This model is also a PyTorch "),vr=r(Kf,"A",{href:!0,rel:!0});var M0=i(vr);xk=s(M0,"torch.nn.Module"),M0.forEach(t),Mk=s(Kf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kf.forEach(t),zk=h(ao),Kt=r(ao,"DIV",{class:!0});var za=i(Kt);b(yr.$$.fragment,za),Ck=h(za),Bo=r(za,"P",{});var xc=i(Bo);jk=s(xc,"The "),Kd=r(xc,"A",{href:!0});var z0=i(Kd);qk=s(z0,"ElectraForPreTraining"),z0.forEach(t),Pk=s(xc," forward method, overrides the "),up=r(xc,"CODE",{});var C0=i(up);Ak=s(C0,"__call__"),C0.forEach(t),Ok=s(xc," special method."),xc.forEach(t),Lk=h(za),b(Yn.$$.fragment,za),Nk=h(za),b(Zn.$$.fragment,za),za.forEach(t),ao.forEach(t),Vu=h(o),Vo=r(o,"H2",{class:!0});var Qf=i(Vo);es=r(Qf,"A",{id:!0,class:!0,href:!0});var j0=i(es);fp=r(j0,"SPAN",{});var q0=i(fp);b(Tr.$$.fragment,q0),q0.forEach(t),j0.forEach(t),Ik=h(Qf),gp=r(Qf,"SPAN",{});var P0=i(gp);Dk=s(P0,"ElectraForCausalLM"),P0.forEach(t),Qf.forEach(t),Ju=h(o),Tt=r(o,"DIV",{class:!0});var xo=i(Tt);b(br.$$.fragment,xo),Sk=h(xo),wr=r(xo,"P",{});var Bf=i(wr);Wk=s(Bf,"ELECTRA Model with a "),_p=r(Bf,"CODE",{});var A0=i(_p);Uk=s(A0,"language modeling"),A0.forEach(t),Rk=s(Bf," head on top for CLM fine-tuning."),Bf.forEach(t),Hk=h(xo),Er=r(xo,"P",{});var Vf=i(Er);Kk=s(Vf,"This model inherits from "),Qd=r(Vf,"A",{href:!0});var O0=i(Qd);Qk=s(O0,"PreTrainedModel"),O0.forEach(t),Bk=s(Vf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vf.forEach(t),Vk=h(xo),$r=r(xo,"P",{});var Jf=i($r);Jk=s(Jf,"This model is also a PyTorch "),Fr=r(Jf,"A",{href:!0,rel:!0});var L0=i(Fr);Gk=s(L0,"torch.nn.Module"),L0.forEach(t),Xk=s(Jf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jf.forEach(t),Yk=h(xo),Qt=r(xo,"DIV",{class:!0});var Ca=i(Qt);b(xr.$$.fragment,Ca),Zk=h(Ca),Jo=r(Ca,"P",{});var Mc=i(Jo);ev=s(Mc,"The "),Bd=r(Mc,"A",{href:!0});var N0=i(Bd);tv=s(N0,"ElectraForCausalLM"),N0.forEach(t),ov=s(Mc," forward method, overrides the "),kp=r(Mc,"CODE",{});var I0=i(kp);nv=s(I0,"__call__"),I0.forEach(t),sv=s(Mc," special method."),Mc.forEach(t),av=h(Ca),b(ts.$$.fragment,Ca),rv=h(Ca),b(os.$$.fragment,Ca),Ca.forEach(t),xo.forEach(t),Gu=h(o),Go=r(o,"H2",{class:!0});var Gf=i(Go);ns=r(Gf,"A",{id:!0,class:!0,href:!0});var D0=i(ns);vp=r(D0,"SPAN",{});var S0=i(vp);b(Mr.$$.fragment,S0),S0.forEach(t),D0.forEach(t),iv=h(Gf),yp=r(Gf,"SPAN",{});var W0=i(yp);lv=s(W0,"ElectraForMaskedLM"),W0.forEach(t),Gf.forEach(t),Xu=h(o),ht=r(o,"DIV",{class:!0});var ro=i(ht);b(zr.$$.fragment,ro),dv=h(ro),Tp=r(ro,"P",{});var U0=i(Tp);cv=s(U0,"Electra model with a language modeling head on top."),U0.forEach(t),pv=h(ro),bp=r(ro,"P",{});var R0=i(bp);hv=s(R0,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),R0.forEach(t),mv=h(ro),Cr=r(ro,"P",{});var Xf=i(Cr);uv=s(Xf,"This model inherits from "),Vd=r(Xf,"A",{href:!0});var H0=i(Vd);fv=s(H0,"PreTrainedModel"),H0.forEach(t),gv=s(Xf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xf.forEach(t),_v=h(ro),jr=r(ro,"P",{});var Yf=i(jr);kv=s(Yf,"This model is also a PyTorch "),qr=r(Yf,"A",{href:!0,rel:!0});var K0=i(qr);vv=s(K0,"torch.nn.Module"),K0.forEach(t),yv=s(Yf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yf.forEach(t),Tv=h(ro),$t=r(ro,"DIV",{class:!0});var Mo=i($t);b(Pr.$$.fragment,Mo),bv=h(Mo),Xo=r(Mo,"P",{});var zc=i(Xo);wv=s(zc,"The "),Jd=r(zc,"A",{href:!0});var Q0=i(Jd);Ev=s(Q0,"ElectraForMaskedLM"),Q0.forEach(t),$v=s(zc," forward method, overrides the "),wp=r(zc,"CODE",{});var B0=i(wp);Fv=s(B0,"__call__"),B0.forEach(t),xv=s(zc," special method."),zc.forEach(t),Mv=h(Mo),b(ss.$$.fragment,Mo),zv=h(Mo),b(as.$$.fragment,Mo),Cv=h(Mo),b(rs.$$.fragment,Mo),Mo.forEach(t),ro.forEach(t),Yu=h(o),Yo=r(o,"H2",{class:!0});var Zf=i(Yo);is=r(Zf,"A",{id:!0,class:!0,href:!0});var V0=i(is);Ep=r(V0,"SPAN",{});var J0=i(Ep);b(Ar.$$.fragment,J0),J0.forEach(t),V0.forEach(t),jv=h(Zf),$p=r(Zf,"SPAN",{});var G0=i($p);qv=s(G0,"ElectraForSequenceClassification"),G0.forEach(t),Zf.forEach(t),Zu=h(o),bt=r(o,"DIV",{class:!0});var zo=i(bt);b(Or.$$.fragment,zo),Pv=h(zo),Fp=r(zo,"P",{});var X0=i(Fp);Av=s(X0,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),X0.forEach(t),Ov=h(zo),Lr=r(zo,"P",{});var eg=i(Lr);Lv=s(eg,"This model inherits from "),Gd=r(eg,"A",{href:!0});var Y0=i(Gd);Nv=s(Y0,"PreTrainedModel"),Y0.forEach(t),Iv=s(eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eg.forEach(t),Dv=h(zo),Nr=r(zo,"P",{});var tg=i(Nr);Sv=s(tg,"This model is also a PyTorch "),Ir=r(tg,"A",{href:!0,rel:!0});var Z0=i(Ir);Wv=s(Z0,"torch.nn.Module"),Z0.forEach(t),Uv=s(tg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tg.forEach(t),Rv=h(zo),ct=r(zo,"DIV",{class:!0});var qt=i(ct);b(Dr.$$.fragment,qt),Hv=h(qt),Zo=r(qt,"P",{});var Cc=i(Zo);Kv=s(Cc,"The "),Xd=r(Cc,"A",{href:!0});var ex=i(Xd);Qv=s(ex,"ElectraForSequenceClassification"),ex.forEach(t),Bv=s(Cc," forward method, overrides the "),xp=r(Cc,"CODE",{});var tx=i(xp);Vv=s(tx,"__call__"),tx.forEach(t),Jv=s(Cc," special method."),Cc.forEach(t),Gv=h(qt),b(ls.$$.fragment,qt),Xv=h(qt),b(ds.$$.fragment,qt),Yv=h(qt),b(cs.$$.fragment,qt),Zv=h(qt),b(ps.$$.fragment,qt),ey=h(qt),b(hs.$$.fragment,qt),qt.forEach(t),zo.forEach(t),ef=h(o),en=r(o,"H2",{class:!0});var og=i(en);ms=r(og,"A",{id:!0,class:!0,href:!0});var ox=i(ms);Mp=r(ox,"SPAN",{});var nx=i(Mp);b(Sr.$$.fragment,nx),nx.forEach(t),ox.forEach(t),ty=h(og),zp=r(og,"SPAN",{});var sx=i(zp);oy=s(sx,"ElectraForMultipleChoice"),sx.forEach(t),og.forEach(t),tf=h(o),wt=r(o,"DIV",{class:!0});var Co=i(wt);b(Wr.$$.fragment,Co),ny=h(Co),Cp=r(Co,"P",{});var ax=i(Cp);sy=s(ax,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ax.forEach(t),ay=h(Co),Ur=r(Co,"P",{});var ng=i(Ur);ry=s(ng,"This model inherits from "),Yd=r(ng,"A",{href:!0});var rx=i(Yd);iy=s(rx,"PreTrainedModel"),rx.forEach(t),ly=s(ng,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ng.forEach(t),dy=h(Co),Rr=r(Co,"P",{});var sg=i(Rr);cy=s(sg,"This model is also a PyTorch "),Hr=r(sg,"A",{href:!0,rel:!0});var ix=i(Hr);py=s(ix,"torch.nn.Module"),ix.forEach(t),hy=s(sg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sg.forEach(t),my=h(Co),Bt=r(Co,"DIV",{class:!0});var ja=i(Bt);b(Kr.$$.fragment,ja),uy=h(ja),tn=r(ja,"P",{});var jc=i(tn);fy=s(jc,"The "),Zd=r(jc,"A",{href:!0});var lx=i(Zd);gy=s(lx,"ElectraForMultipleChoice"),lx.forEach(t),_y=s(jc," forward method, overrides the "),jp=r(jc,"CODE",{});var dx=i(jp);ky=s(dx,"__call__"),dx.forEach(t),vy=s(jc," special method."),jc.forEach(t),yy=h(ja),b(us.$$.fragment,ja),Ty=h(ja),b(fs.$$.fragment,ja),ja.forEach(t),Co.forEach(t),of=h(o),on=r(o,"H2",{class:!0});var ag=i(on);gs=r(ag,"A",{id:!0,class:!0,href:!0});var cx=i(gs);qp=r(cx,"SPAN",{});var px=i(qp);b(Qr.$$.fragment,px),px.forEach(t),cx.forEach(t),by=h(ag),Pp=r(ag,"SPAN",{});var hx=i(Pp);wy=s(hx,"ElectraForTokenClassification"),hx.forEach(t),ag.forEach(t),nf=h(o),mt=r(o,"DIV",{class:!0});var io=i(mt);b(Br.$$.fragment,io),Ey=h(io),Ap=r(io,"P",{});var mx=i(Ap);$y=s(mx,"Electra model with a token classification head on top."),mx.forEach(t),Fy=h(io),Op=r(io,"P",{});var ux=i(Op);xy=s(ux,"Both the discriminator and generator may be loaded into this model."),ux.forEach(t),My=h(io),Vr=r(io,"P",{});var rg=i(Vr);zy=s(rg,"This model inherits from "),ec=r(rg,"A",{href:!0});var fx=i(ec);Cy=s(fx,"PreTrainedModel"),fx.forEach(t),jy=s(rg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rg.forEach(t),qy=h(io),Jr=r(io,"P",{});var ig=i(Jr);Py=s(ig,"This model is also a PyTorch "),Gr=r(ig,"A",{href:!0,rel:!0});var gx=i(Gr);Ay=s(gx,"torch.nn.Module"),gx.forEach(t),Oy=s(ig,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ig.forEach(t),Ly=h(io),Ft=r(io,"DIV",{class:!0});var jo=i(Ft);b(Xr.$$.fragment,jo),Ny=h(jo),nn=r(jo,"P",{});var qc=i(nn);Iy=s(qc,"The "),tc=r(qc,"A",{href:!0});var _x=i(tc);Dy=s(_x,"ElectraForTokenClassification"),_x.forEach(t),Sy=s(qc," forward method, overrides the "),Lp=r(qc,"CODE",{});var kx=i(Lp);Wy=s(kx,"__call__"),kx.forEach(t),Uy=s(qc," special method."),qc.forEach(t),Ry=h(jo),b(_s.$$.fragment,jo),Hy=h(jo),b(ks.$$.fragment,jo),Ky=h(jo),b(vs.$$.fragment,jo),jo.forEach(t),io.forEach(t),sf=h(o),sn=r(o,"H2",{class:!0});var lg=i(sn);ys=r(lg,"A",{id:!0,class:!0,href:!0});var vx=i(ys);Np=r(vx,"SPAN",{});var yx=i(Np);b(Yr.$$.fragment,yx),yx.forEach(t),vx.forEach(t),Qy=h(lg),Ip=r(lg,"SPAN",{});var Tx=i(Ip);By=s(Tx,"ElectraForQuestionAnswering"),Tx.forEach(t),lg.forEach(t),af=h(o),Et=r(o,"DIV",{class:!0});var qo=i(Et);b(Zr.$$.fragment,qo),Vy=h(qo),an=r(qo,"P",{});var Pc=i(an);Jy=s(Pc,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Dp=r(Pc,"CODE",{});var bx=i(Dp);Gy=s(bx,"span start logits"),bx.forEach(t),Xy=s(Pc," and "),Sp=r(Pc,"CODE",{});var wx=i(Sp);Yy=s(wx,"span end logits"),wx.forEach(t),Zy=s(Pc,")."),Pc.forEach(t),eT=h(qo),ei=r(qo,"P",{});var dg=i(ei);tT=s(dg,"This model inherits from "),oc=r(dg,"A",{href:!0});var Ex=i(oc);oT=s(Ex,"PreTrainedModel"),Ex.forEach(t),nT=s(dg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dg.forEach(t),sT=h(qo),ti=r(qo,"P",{});var cg=i(ti);aT=s(cg,"This model is also a PyTorch "),oi=r(cg,"A",{href:!0,rel:!0});var $x=i(oi);rT=s($x,"torch.nn.Module"),$x.forEach(t),iT=s(cg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cg.forEach(t),lT=h(qo),xt=r(qo,"DIV",{class:!0});var Po=i(xt);b(ni.$$.fragment,Po),dT=h(Po),rn=r(Po,"P",{});var Ac=i(rn);cT=s(Ac,"The "),nc=r(Ac,"A",{href:!0});var Fx=i(nc);pT=s(Fx,"ElectraForQuestionAnswering"),Fx.forEach(t),hT=s(Ac," forward method, overrides the "),Wp=r(Ac,"CODE",{});var xx=i(Wp);mT=s(xx,"__call__"),xx.forEach(t),uT=s(Ac," special method."),Ac.forEach(t),fT=h(Po),b(Ts.$$.fragment,Po),gT=h(Po),b(bs.$$.fragment,Po),_T=h(Po),b(ws.$$.fragment,Po),Po.forEach(t),qo.forEach(t),rf=h(o),ln=r(o,"H2",{class:!0});var pg=i(ln);Es=r(pg,"A",{id:!0,class:!0,href:!0});var Mx=i(Es);Up=r(Mx,"SPAN",{});var zx=i(Up);b(si.$$.fragment,zx),zx.forEach(t),Mx.forEach(t),kT=h(pg),Rp=r(pg,"SPAN",{});var Cx=i(Rp);vT=s(Cx,"TFElectraModel"),Cx.forEach(t),pg.forEach(t),lf=h(o),ut=r(o,"DIV",{class:!0});var lo=i(ut);b(ai.$$.fragment,lo),yT=h(lo),Hp=r(lo,"P",{});var jx=i(Hp);TT=s(jx,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),jx.forEach(t),bT=h(lo),ri=r(lo,"P",{});var hg=i(ri);wT=s(hg,"This model inherits from "),sc=r(hg,"A",{href:!0});var qx=i(sc);ET=s(qx,"TFPreTrainedModel"),qx.forEach(t),$T=s(hg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hg.forEach(t),FT=h(lo),ii=r(lo,"P",{});var mg=i(ii);xT=s(mg,"This model is also a "),li=r(mg,"A",{href:!0,rel:!0});var Px=i(li);MT=s(Px,"tf.keras.Model"),Px.forEach(t),zT=s(mg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mg.forEach(t),CT=h(lo),b($s.$$.fragment,lo),jT=h(lo),Vt=r(lo,"DIV",{class:!0});var qa=i(Vt);b(di.$$.fragment,qa),qT=h(qa),dn=r(qa,"P",{});var Oc=i(dn);PT=s(Oc,"The "),ac=r(Oc,"A",{href:!0});var Ax=i(ac);AT=s(Ax,"TFElectraModel"),Ax.forEach(t),OT=s(Oc," forward method, overrides the "),Kp=r(Oc,"CODE",{});var Ox=i(Kp);LT=s(Ox,"__call__"),Ox.forEach(t),NT=s(Oc," special method."),Oc.forEach(t),IT=h(qa),b(Fs.$$.fragment,qa),DT=h(qa),b(xs.$$.fragment,qa),qa.forEach(t),lo.forEach(t),df=h(o),cn=r(o,"H2",{class:!0});var ug=i(cn);Ms=r(ug,"A",{id:!0,class:!0,href:!0});var Lx=i(Ms);Qp=r(Lx,"SPAN",{});var Nx=i(Qp);b(ci.$$.fragment,Nx),Nx.forEach(t),Lx.forEach(t),ST=h(ug),Bp=r(ug,"SPAN",{});var Ix=i(Bp);WT=s(Ix,"TFElectraForPreTraining"),Ix.forEach(t),ug.forEach(t),cf=h(o),tt=r(o,"DIV",{class:!0});var Pt=i(tt);b(pi.$$.fragment,Pt),UT=h(Pt),Vp=r(Pt,"P",{});var Dx=i(Vp);RT=s(Dx,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),Dx.forEach(t),HT=h(Pt),Jp=r(Pt,"P",{});var Sx=i(Jp);KT=s(Sx,`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),Sx.forEach(t),QT=h(Pt),hi=r(Pt,"P",{});var fg=i(hi);BT=s(fg,"This model inherits from "),rc=r(fg,"A",{href:!0});var Wx=i(rc);VT=s(Wx,"TFPreTrainedModel"),Wx.forEach(t),JT=s(fg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fg.forEach(t),GT=h(Pt),mi=r(Pt,"P",{});var gg=i(mi);XT=s(gg,"This model is also a "),ui=r(gg,"A",{href:!0,rel:!0});var Ux=i(ui);YT=s(Ux,"tf.keras.Model"),Ux.forEach(t),ZT=s(gg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gg.forEach(t),eb=h(Pt),b(zs.$$.fragment,Pt),tb=h(Pt),Jt=r(Pt,"DIV",{class:!0});var Pa=i(Jt);b(fi.$$.fragment,Pa),ob=h(Pa),pn=r(Pa,"P",{});var Lc=i(pn);nb=s(Lc,"The "),ic=r(Lc,"A",{href:!0});var Rx=i(ic);sb=s(Rx,"TFElectraForPreTraining"),Rx.forEach(t),ab=s(Lc," forward method, overrides the "),Gp=r(Lc,"CODE",{});var Hx=i(Gp);rb=s(Hx,"__call__"),Hx.forEach(t),ib=s(Lc," special method."),Lc.forEach(t),lb=h(Pa),b(Cs.$$.fragment,Pa),db=h(Pa),b(js.$$.fragment,Pa),Pa.forEach(t),Pt.forEach(t),pf=h(o),hn=r(o,"H2",{class:!0});var _g=i(hn);qs=r(_g,"A",{id:!0,class:!0,href:!0});var Kx=i(qs);Xp=r(Kx,"SPAN",{});var Qx=i(Xp);b(gi.$$.fragment,Qx),Qx.forEach(t),Kx.forEach(t),cb=h(_g),Yp=r(_g,"SPAN",{});var Bx=i(Yp);pb=s(Bx,"TFElectraForMaskedLM"),Bx.forEach(t),_g.forEach(t),hf=h(o),ot=r(o,"DIV",{class:!0});var At=i(ot);b(_i.$$.fragment,At),hb=h(At),Zp=r(At,"P",{});var Vx=i(Zp);mb=s(Vx,"Electra model with a language modeling head on top."),Vx.forEach(t),ub=h(At),eh=r(At,"P",{});var Jx=i(eh);fb=s(Jx,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),Jx.forEach(t),gb=h(At),ki=r(At,"P",{});var kg=i(ki);_b=s(kg,"This model inherits from "),lc=r(kg,"A",{href:!0});var Gx=i(lc);kb=s(Gx,"TFPreTrainedModel"),Gx.forEach(t),vb=s(kg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kg.forEach(t),yb=h(At),vi=r(At,"P",{});var vg=i(vi);Tb=s(vg,"This model is also a "),yi=r(vg,"A",{href:!0,rel:!0});var Xx=i(yi);bb=s(Xx,"tf.keras.Model"),Xx.forEach(t),wb=s(vg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vg.forEach(t),Eb=h(At),b(Ps.$$.fragment,At),$b=h(At),Mt=r(At,"DIV",{class:!0});var Ao=i(Mt);b(Ti.$$.fragment,Ao),Fb=h(Ao),mn=r(Ao,"P",{});var Nc=i(mn);xb=s(Nc,"The "),dc=r(Nc,"A",{href:!0});var Yx=i(dc);Mb=s(Yx,"TFElectraForMaskedLM"),Yx.forEach(t),zb=s(Nc," forward method, overrides the "),th=r(Nc,"CODE",{});var Zx=i(th);Cb=s(Zx,"__call__"),Zx.forEach(t),jb=s(Nc," special method."),Nc.forEach(t),qb=h(Ao),b(As.$$.fragment,Ao),Pb=h(Ao),b(Os.$$.fragment,Ao),Ab=h(Ao),b(Ls.$$.fragment,Ao),Ao.forEach(t),At.forEach(t),mf=h(o),un=r(o,"H2",{class:!0});var yg=i(un);Ns=r(yg,"A",{id:!0,class:!0,href:!0});var eM=i(Ns);oh=r(eM,"SPAN",{});var tM=i(oh);b(bi.$$.fragment,tM),tM.forEach(t),eM.forEach(t),Ob=h(yg),nh=r(yg,"SPAN",{});var oM=i(nh);Lb=s(oM,"TFElectraForSequenceClassification"),oM.forEach(t),yg.forEach(t),uf=h(o),ft=r(o,"DIV",{class:!0});var co=i(ft);b(wi.$$.fragment,co),Nb=h(co),sh=r(co,"P",{});var nM=i(sh);Ib=s(nM,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),nM.forEach(t),Db=h(co),Ei=r(co,"P",{});var Tg=i(Ei);Sb=s(Tg,"This model inherits from "),cc=r(Tg,"A",{href:!0});var sM=i(cc);Wb=s(sM,"TFPreTrainedModel"),sM.forEach(t),Ub=s(Tg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tg.forEach(t),Rb=h(co),$i=r(co,"P",{});var bg=i($i);Hb=s(bg,"This model is also a "),Fi=r(bg,"A",{href:!0,rel:!0});var aM=i(Fi);Kb=s(aM,"tf.keras.Model"),aM.forEach(t),Qb=s(bg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bg.forEach(t),Bb=h(co),b(Is.$$.fragment,co),Vb=h(co),zt=r(co,"DIV",{class:!0});var Oo=i(zt);b(xi.$$.fragment,Oo),Jb=h(Oo),fn=r(Oo,"P",{});var Ic=i(fn);Gb=s(Ic,"The "),pc=r(Ic,"A",{href:!0});var rM=i(pc);Xb=s(rM,"TFElectraForSequenceClassification"),rM.forEach(t),Yb=s(Ic," forward method, overrides the "),ah=r(Ic,"CODE",{});var iM=i(ah);Zb=s(iM,"__call__"),iM.forEach(t),ew=s(Ic," special method."),Ic.forEach(t),tw=h(Oo),b(Ds.$$.fragment,Oo),ow=h(Oo),b(Ss.$$.fragment,Oo),nw=h(Oo),b(Ws.$$.fragment,Oo),Oo.forEach(t),co.forEach(t),ff=h(o),gn=r(o,"H2",{class:!0});var wg=i(gn);Us=r(wg,"A",{id:!0,class:!0,href:!0});var lM=i(Us);rh=r(lM,"SPAN",{});var dM=i(rh);b(Mi.$$.fragment,dM),dM.forEach(t),lM.forEach(t),sw=h(wg),ih=r(wg,"SPAN",{});var cM=i(ih);aw=s(cM,"TFElectraForMultipleChoice"),cM.forEach(t),wg.forEach(t),gf=h(o),gt=r(o,"DIV",{class:!0});var po=i(gt);b(zi.$$.fragment,po),rw=h(po),lh=r(po,"P",{});var pM=i(lh);iw=s(pM,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),pM.forEach(t),lw=h(po),Ci=r(po,"P",{});var Eg=i(Ci);dw=s(Eg,"This model inherits from "),hc=r(Eg,"A",{href:!0});var hM=i(hc);cw=s(hM,"TFPreTrainedModel"),hM.forEach(t),pw=s(Eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eg.forEach(t),hw=h(po),ji=r(po,"P",{});var $g=i(ji);mw=s($g,"This model is also a "),qi=r($g,"A",{href:!0,rel:!0});var mM=i(qi);uw=s(mM,"tf.keras.Model"),mM.forEach(t),fw=s($g,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$g.forEach(t),gw=h(po),b(Rs.$$.fragment,po),_w=h(po),Gt=r(po,"DIV",{class:!0});var Aa=i(Gt);b(Pi.$$.fragment,Aa),kw=h(Aa),_n=r(Aa,"P",{});var Dc=i(_n);vw=s(Dc,"The "),mc=r(Dc,"A",{href:!0});var uM=i(mc);yw=s(uM,"TFElectraForMultipleChoice"),uM.forEach(t),Tw=s(Dc," forward method, overrides the "),dh=r(Dc,"CODE",{});var fM=i(dh);bw=s(fM,"__call__"),fM.forEach(t),ww=s(Dc," special method."),Dc.forEach(t),Ew=h(Aa),b(Hs.$$.fragment,Aa),$w=h(Aa),b(Ks.$$.fragment,Aa),Aa.forEach(t),po.forEach(t),_f=h(o),kn=r(o,"H2",{class:!0});var Fg=i(kn);Qs=r(Fg,"A",{id:!0,class:!0,href:!0});var gM=i(Qs);ch=r(gM,"SPAN",{});var _M=i(ch);b(Ai.$$.fragment,_M),_M.forEach(t),gM.forEach(t),Fw=h(Fg),ph=r(Fg,"SPAN",{});var kM=i(ph);xw=s(kM,"TFElectraForTokenClassification"),kM.forEach(t),Fg.forEach(t),kf=h(o),nt=r(o,"DIV",{class:!0});var Ot=i(nt);b(Oi.$$.fragment,Ot),Mw=h(Ot),hh=r(Ot,"P",{});var vM=i(hh);zw=s(vM,"Electra model with a token classification head on top."),vM.forEach(t),Cw=h(Ot),mh=r(Ot,"P",{});var yM=i(mh);jw=s(yM,"Both the discriminator and generator may be loaded into this model."),yM.forEach(t),qw=h(Ot),Li=r(Ot,"P",{});var xg=i(Li);Pw=s(xg,"This model inherits from "),uc=r(xg,"A",{href:!0});var TM=i(uc);Aw=s(TM,"TFPreTrainedModel"),TM.forEach(t),Ow=s(xg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xg.forEach(t),Lw=h(Ot),Ni=r(Ot,"P",{});var Mg=i(Ni);Nw=s(Mg,"This model is also a "),Ii=r(Mg,"A",{href:!0,rel:!0});var bM=i(Ii);Iw=s(bM,"tf.keras.Model"),bM.forEach(t),Dw=s(Mg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mg.forEach(t),Sw=h(Ot),b(Bs.$$.fragment,Ot),Ww=h(Ot),Ct=r(Ot,"DIV",{class:!0});var Lo=i(Ct);b(Di.$$.fragment,Lo),Uw=h(Lo),vn=r(Lo,"P",{});var Sc=i(vn);Rw=s(Sc,"The "),fc=r(Sc,"A",{href:!0});var wM=i(fc);Hw=s(wM,"TFElectraForTokenClassification"),wM.forEach(t),Kw=s(Sc," forward method, overrides the "),uh=r(Sc,"CODE",{});var EM=i(uh);Qw=s(EM,"__call__"),EM.forEach(t),Bw=s(Sc," special method."),Sc.forEach(t),Vw=h(Lo),b(Vs.$$.fragment,Lo),Jw=h(Lo),b(Js.$$.fragment,Lo),Gw=h(Lo),b(Gs.$$.fragment,Lo),Lo.forEach(t),Ot.forEach(t),vf=h(o),yn=r(o,"H2",{class:!0});var zg=i(yn);Xs=r(zg,"A",{id:!0,class:!0,href:!0});var $M=i(Xs);fh=r($M,"SPAN",{});var FM=i(fh);b(Si.$$.fragment,FM),FM.forEach(t),$M.forEach(t),Xw=h(zg),gh=r(zg,"SPAN",{});var xM=i(gh);Yw=s(xM,"TFElectraForQuestionAnswering"),xM.forEach(t),zg.forEach(t),yf=h(o),_t=r(o,"DIV",{class:!0});var ho=i(_t);b(Wi.$$.fragment,ho),Zw=h(ho),Tn=r(ho,"P",{});var Wc=i(Tn);eE=s(Wc,`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),_h=r(Wc,"CODE",{});var MM=i(_h);tE=s(MM,"span start logits"),MM.forEach(t),oE=s(Wc," and "),kh=r(Wc,"CODE",{});var zM=i(kh);nE=s(zM,"span end logits"),zM.forEach(t),sE=s(Wc,")."),Wc.forEach(t),aE=h(ho),Ui=r(ho,"P",{});var Cg=i(Ui);rE=s(Cg,"This model inherits from "),gc=r(Cg,"A",{href:!0});var CM=i(gc);iE=s(CM,"TFPreTrainedModel"),CM.forEach(t),lE=s(Cg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cg.forEach(t),dE=h(ho),Ri=r(ho,"P",{});var jg=i(Ri);cE=s(jg,"This model is also a "),Hi=r(jg,"A",{href:!0,rel:!0});var jM=i(Hi);pE=s(jM,"tf.keras.Model"),jM.forEach(t),hE=s(jg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jg.forEach(t),mE=h(ho),b(Ys.$$.fragment,ho),uE=h(ho),jt=r(ho,"DIV",{class:!0});var No=i(jt);b(Ki.$$.fragment,No),fE=h(No),bn=r(No,"P",{});var Uc=i(bn);gE=s(Uc,"The "),_c=r(Uc,"A",{href:!0});var qM=i(_c);_E=s(qM,"TFElectraForQuestionAnswering"),qM.forEach(t),kE=s(Uc," forward method, overrides the "),vh=r(Uc,"CODE",{});var PM=i(vh);vE=s(PM,"__call__"),PM.forEach(t),yE=s(Uc," special method."),Uc.forEach(t),TE=h(No),b(Zs.$$.fragment,No),bE=h(No),b(ea.$$.fragment,No),wE=h(No),b(ta.$$.fragment,No),No.forEach(t),ho.forEach(t),Tf=h(o),wn=r(o,"H2",{class:!0});var qg=i(wn);oa=r(qg,"A",{id:!0,class:!0,href:!0});var AM=i(oa);yh=r(AM,"SPAN",{});var OM=i(yh);b(Qi.$$.fragment,OM),OM.forEach(t),AM.forEach(t),EE=h(qg),Th=r(qg,"SPAN",{});var LM=i(Th);$E=s(LM,"FlaxElectraModel"),LM.forEach(t),qg.forEach(t),bf=h(o),st=r(o,"DIV",{class:!0});var Lt=i(st);b(Bi.$$.fragment,Lt),FE=h(Lt),bh=r(Lt,"P",{});var NM=i(bh);xE=s(NM,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),NM.forEach(t),ME=h(Lt),Vi=r(Lt,"P",{});var Pg=i(Vi);zE=s(Pg,"This model inherits from "),kc=r(Pg,"A",{href:!0});var IM=i(kc);CE=s(IM,"FlaxPreTrainedModel"),IM.forEach(t),jE=s(Pg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Pg.forEach(t),qE=h(Lt),Ji=r(Lt,"P",{});var Ag=i(Ji);PE=s(Ag,`This model is also a Flax Linen
`),Gi=r(Ag,"A",{href:!0,rel:!0});var DM=i(Gi);AE=s(DM,"flax.nn.Module"),DM.forEach(t),OE=s(Ag,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ag.forEach(t),LE=h(Lt),wh=r(Lt,"P",{});var SM=i(wh);NE=s(SM,"Finally, this model supports inherent JAX features such as:"),SM.forEach(t),IE=h(Lt),mo=r(Lt,"UL",{});var Oa=i(mo);Eh=r(Oa,"LI",{});var WM=i(Eh);Xi=r(WM,"A",{href:!0,rel:!0});var UM=i(Xi);DE=s(UM,"Just-In-Time (JIT) compilation"),UM.forEach(t),WM.forEach(t),SE=h(Oa),$h=r(Oa,"LI",{});var RM=i($h);Yi=r(RM,"A",{href:!0,rel:!0});var HM=i(Yi);WE=s(HM,"Automatic Differentiation"),HM.forEach(t),RM.forEach(t),UE=h(Oa),Fh=r(Oa,"LI",{});var KM=i(Fh);Zi=r(KM,"A",{href:!0,rel:!0});var QM=i(Zi);RE=s(QM,"Vectorization"),QM.forEach(t),KM.forEach(t),HE=h(Oa),xh=r(Oa,"LI",{});var BM=i(xh);el=r(BM,"A",{href:!0,rel:!0});var VM=i(el);KE=s(VM,"Parallelization"),VM.forEach(t),BM.forEach(t),Oa.forEach(t),QE=h(Lt),Xt=r(Lt,"DIV",{class:!0});var La=i(Xt);b(tl.$$.fragment,La),BE=h(La),En=r(La,"P",{});var Rc=i(En);VE=s(Rc,"The "),Mh=r(Rc,"CODE",{});var JM=i(Mh);JE=s(JM,"FlaxElectraPreTrainedModel"),JM.forEach(t),GE=s(Rc," forward method, overrides the "),zh=r(Rc,"CODE",{});var GM=i(zh);XE=s(GM,"__call__"),GM.forEach(t),YE=s(Rc," special method."),Rc.forEach(t),ZE=h(La),b(na.$$.fragment,La),e$=h(La),b(sa.$$.fragment,La),La.forEach(t),Lt.forEach(t),wf=h(o),$n=r(o,"H2",{class:!0});var Og=i($n);aa=r(Og,"A",{id:!0,class:!0,href:!0});var XM=i(aa);Ch=r(XM,"SPAN",{});var YM=i(Ch);b(ol.$$.fragment,YM),YM.forEach(t),XM.forEach(t),t$=h(Og),jh=r(Og,"SPAN",{});var ZM=i(jh);o$=s(ZM,"FlaxElectraForPreTraining"),ZM.forEach(t),Og.forEach(t),Ef=h(o),Ze=r(o,"DIV",{class:!0});var kt=i(Ze);b(nl.$$.fragment,kt),n$=h(kt),qh=r(kt,"P",{});var ez=i(qh);s$=s(ez,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),ez.forEach(t),a$=h(kt),Ph=r(kt,"P",{});var tz=i(Ph);r$=s(tz,"It is recommended to load the discriminator checkpoint into that model."),tz.forEach(t),i$=h(kt),sl=r(kt,"P",{});var Lg=i(sl);l$=s(Lg,"This model inherits from "),vc=r(Lg,"A",{href:!0});var oz=i(vc);d$=s(oz,"FlaxPreTrainedModel"),oz.forEach(t),c$=s(Lg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Lg.forEach(t),p$=h(kt),al=r(kt,"P",{});var Ng=i(al);h$=s(Ng,`This model is also a Flax Linen
`),rl=r(Ng,"A",{href:!0,rel:!0});var nz=i(rl);m$=s(nz,"flax.nn.Module"),nz.forEach(t),u$=s(Ng,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ng.forEach(t),f$=h(kt),Ah=r(kt,"P",{});var sz=i(Ah);g$=s(sz,"Finally, this model supports inherent JAX features such as:"),sz.forEach(t),_$=h(kt),uo=r(kt,"UL",{});var Na=i(uo);Oh=r(Na,"LI",{});var az=i(Oh);il=r(az,"A",{href:!0,rel:!0});var rz=i(il);k$=s(rz,"Just-In-Time (JIT) compilation"),rz.forEach(t),az.forEach(t),v$=h(Na),Lh=r(Na,"LI",{});var iz=i(Lh);ll=r(iz,"A",{href:!0,rel:!0});var lz=i(ll);y$=s(lz,"Automatic Differentiation"),lz.forEach(t),iz.forEach(t),T$=h(Na),Nh=r(Na,"LI",{});var dz=i(Nh);dl=r(dz,"A",{href:!0,rel:!0});var cz=i(dl);b$=s(cz,"Vectorization"),cz.forEach(t),dz.forEach(t),w$=h(Na),Ih=r(Na,"LI",{});var pz=i(Ih);cl=r(pz,"A",{href:!0,rel:!0});var hz=i(cl);E$=s(hz,"Parallelization"),hz.forEach(t),pz.forEach(t),Na.forEach(t),$$=h(kt),Yt=r(kt,"DIV",{class:!0});var Ia=i(Yt);b(pl.$$.fragment,Ia),F$=h(Ia),Fn=r(Ia,"P",{});var Hc=i(Fn);x$=s(Hc,"The "),Dh=r(Hc,"CODE",{});var mz=i(Dh);M$=s(mz,"FlaxElectraPreTrainedModel"),mz.forEach(t),z$=s(Hc," forward method, overrides the "),Sh=r(Hc,"CODE",{});var uz=i(Sh);C$=s(uz,"__call__"),uz.forEach(t),j$=s(Hc," special method."),Hc.forEach(t),q$=h(Ia),b(ra.$$.fragment,Ia),P$=h(Ia),b(ia.$$.fragment,Ia),Ia.forEach(t),kt.forEach(t),$f=h(o),xn=r(o,"H2",{class:!0});var Ig=i(xn);la=r(Ig,"A",{id:!0,class:!0,href:!0});var fz=i(la);Wh=r(fz,"SPAN",{});var gz=i(Wh);b(hl.$$.fragment,gz),gz.forEach(t),fz.forEach(t),A$=h(Ig),Uh=r(Ig,"SPAN",{});var _z=i(Uh);O$=s(_z,"FlaxElectraForCausalLM"),_z.forEach(t),Ig.forEach(t),Ff=h(o),at=r(o,"DIV",{class:!0});var Nt=i(at);b(ml.$$.fragment,Nt),L$=h(Nt),Rh=r(Nt,"P",{});var kz=i(Rh);N$=s(kz,`Electra Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),kz.forEach(t),I$=h(Nt),ul=r(Nt,"P",{});var Dg=i(ul);D$=s(Dg,"This model inherits from "),yc=r(Dg,"A",{href:!0});var vz=i(yc);S$=s(vz,"FlaxPreTrainedModel"),vz.forEach(t),W$=s(Dg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Dg.forEach(t),U$=h(Nt),fl=r(Nt,"P",{});var Sg=i(fl);R$=s(Sg,`This model is also a Flax Linen
`),gl=r(Sg,"A",{href:!0,rel:!0});var yz=i(gl);H$=s(yz,"flax.nn.Module"),yz.forEach(t),K$=s(Sg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Sg.forEach(t),Q$=h(Nt),Hh=r(Nt,"P",{});var Tz=i(Hh);B$=s(Tz,"Finally, this model supports inherent JAX features such as:"),Tz.forEach(t),V$=h(Nt),fo=r(Nt,"UL",{});var Da=i(fo);Kh=r(Da,"LI",{});var bz=i(Kh);_l=r(bz,"A",{href:!0,rel:!0});var wz=i(_l);J$=s(wz,"Just-In-Time (JIT) compilation"),wz.forEach(t),bz.forEach(t),G$=h(Da),Qh=r(Da,"LI",{});var Ez=i(Qh);kl=r(Ez,"A",{href:!0,rel:!0});var $z=i(kl);X$=s($z,"Automatic Differentiation"),$z.forEach(t),Ez.forEach(t),Y$=h(Da),Bh=r(Da,"LI",{});var Fz=i(Bh);vl=r(Fz,"A",{href:!0,rel:!0});var xz=i(vl);Z$=s(xz,"Vectorization"),xz.forEach(t),Fz.forEach(t),e1=h(Da),Vh=r(Da,"LI",{});var Mz=i(Vh);yl=r(Mz,"A",{href:!0,rel:!0});var zz=i(yl);t1=s(zz,"Parallelization"),zz.forEach(t),Mz.forEach(t),Da.forEach(t),o1=h(Nt),Zt=r(Nt,"DIV",{class:!0});var Sa=i(Zt);b(Tl.$$.fragment,Sa),n1=h(Sa),Mn=r(Sa,"P",{});var Kc=i(Mn);s1=s(Kc,"The "),Jh=r(Kc,"CODE",{});var Cz=i(Jh);a1=s(Cz,"FlaxElectraPreTrainedModel"),Cz.forEach(t),r1=s(Kc," forward method, overrides the "),Gh=r(Kc,"CODE",{});var jz=i(Gh);i1=s(jz,"__call__"),jz.forEach(t),l1=s(Kc," special method."),Kc.forEach(t),d1=h(Sa),b(da.$$.fragment,Sa),c1=h(Sa),b(ca.$$.fragment,Sa),Sa.forEach(t),Nt.forEach(t),xf=h(o),zn=r(o,"H2",{class:!0});var Wg=i(zn);pa=r(Wg,"A",{id:!0,class:!0,href:!0});var qz=i(pa);Xh=r(qz,"SPAN",{});var Pz=i(Xh);b(bl.$$.fragment,Pz),Pz.forEach(t),qz.forEach(t),p1=h(Wg),Yh=r(Wg,"SPAN",{});var Az=i(Yh);h1=s(Az,"FlaxElectraForMaskedLM"),Az.forEach(t),Wg.forEach(t),Mf=h(o),rt=r(o,"DIV",{class:!0});var It=i(rt);b(wl.$$.fragment,It),m1=h(It),El=r(It,"P",{});var Ug=i(El);u1=s(Ug,"Electra Model with a "),Zh=r(Ug,"CODE",{});var Oz=i(Zh);f1=s(Oz,"language modeling"),Oz.forEach(t),g1=s(Ug," head on top."),Ug.forEach(t),_1=h(It),$l=r(It,"P",{});var Rg=i($l);k1=s(Rg,"This model inherits from "),Tc=r(Rg,"A",{href:!0});var Lz=i(Tc);v1=s(Lz,"FlaxPreTrainedModel"),Lz.forEach(t),y1=s(Rg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rg.forEach(t),T1=h(It),Fl=r(It,"P",{});var Hg=i(Fl);b1=s(Hg,`This model is also a Flax Linen
`),xl=r(Hg,"A",{href:!0,rel:!0});var Nz=i(xl);w1=s(Nz,"flax.nn.Module"),Nz.forEach(t),E1=s(Hg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Hg.forEach(t),$1=h(It),em=r(It,"P",{});var Iz=i(em);F1=s(Iz,"Finally, this model supports inherent JAX features such as:"),Iz.forEach(t),x1=h(It),go=r(It,"UL",{});var Wa=i(go);tm=r(Wa,"LI",{});var Dz=i(tm);Ml=r(Dz,"A",{href:!0,rel:!0});var Sz=i(Ml);M1=s(Sz,"Just-In-Time (JIT) compilation"),Sz.forEach(t),Dz.forEach(t),z1=h(Wa),om=r(Wa,"LI",{});var Wz=i(om);zl=r(Wz,"A",{href:!0,rel:!0});var Uz=i(zl);C1=s(Uz,"Automatic Differentiation"),Uz.forEach(t),Wz.forEach(t),j1=h(Wa),nm=r(Wa,"LI",{});var Rz=i(nm);Cl=r(Rz,"A",{href:!0,rel:!0});var Hz=i(Cl);q1=s(Hz,"Vectorization"),Hz.forEach(t),Rz.forEach(t),P1=h(Wa),sm=r(Wa,"LI",{});var Kz=i(sm);jl=r(Kz,"A",{href:!0,rel:!0});var Qz=i(jl);A1=s(Qz,"Parallelization"),Qz.forEach(t),Kz.forEach(t),Wa.forEach(t),O1=h(It),eo=r(It,"DIV",{class:!0});var Ua=i(eo);b(ql.$$.fragment,Ua),L1=h(Ua),Cn=r(Ua,"P",{});var Qc=i(Cn);N1=s(Qc,"The "),am=r(Qc,"CODE",{});var Bz=i(am);I1=s(Bz,"FlaxElectraPreTrainedModel"),Bz.forEach(t),D1=s(Qc," forward method, overrides the "),rm=r(Qc,"CODE",{});var Vz=i(rm);S1=s(Vz,"__call__"),Vz.forEach(t),W1=s(Qc," special method."),Qc.forEach(t),U1=h(Ua),b(ha.$$.fragment,Ua),R1=h(Ua),b(ma.$$.fragment,Ua),Ua.forEach(t),It.forEach(t),zf=h(o),jn=r(o,"H2",{class:!0});var Kg=i(jn);ua=r(Kg,"A",{id:!0,class:!0,href:!0});var Jz=i(ua);im=r(Jz,"SPAN",{});var Gz=i(im);b(Pl.$$.fragment,Gz),Gz.forEach(t),Jz.forEach(t),H1=h(Kg),lm=r(Kg,"SPAN",{});var Xz=i(lm);K1=s(Xz,"FlaxElectraForSequenceClassification"),Xz.forEach(t),Kg.forEach(t),Cf=h(o),it=r(o,"DIV",{class:!0});var Dt=i(it);b(Al.$$.fragment,Dt),Q1=h(Dt),dm=r(Dt,"P",{});var Yz=i(dm);B1=s(Yz,`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Yz.forEach(t),V1=h(Dt),Ol=r(Dt,"P",{});var Qg=i(Ol);J1=s(Qg,"This model inherits from "),bc=r(Qg,"A",{href:!0});var Zz=i(bc);G1=s(Zz,"FlaxPreTrainedModel"),Zz.forEach(t),X1=s(Qg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qg.forEach(t),Y1=h(Dt),Ll=r(Dt,"P",{});var Bg=i(Ll);Z1=s(Bg,`This model is also a Flax Linen
`),Nl=r(Bg,"A",{href:!0,rel:!0});var e4=i(Nl);e2=s(e4,"flax.nn.Module"),e4.forEach(t),t2=s(Bg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Bg.forEach(t),o2=h(Dt),cm=r(Dt,"P",{});var t4=i(cm);n2=s(t4,"Finally, this model supports inherent JAX features such as:"),t4.forEach(t),s2=h(Dt),_o=r(Dt,"UL",{});var Ra=i(_o);pm=r(Ra,"LI",{});var o4=i(pm);Il=r(o4,"A",{href:!0,rel:!0});var n4=i(Il);a2=s(n4,"Just-In-Time (JIT) compilation"),n4.forEach(t),o4.forEach(t),r2=h(Ra),hm=r(Ra,"LI",{});var s4=i(hm);Dl=r(s4,"A",{href:!0,rel:!0});var a4=i(Dl);i2=s(a4,"Automatic Differentiation"),a4.forEach(t),s4.forEach(t),l2=h(Ra),mm=r(Ra,"LI",{});var r4=i(mm);Sl=r(r4,"A",{href:!0,rel:!0});var i4=i(Sl);d2=s(i4,"Vectorization"),i4.forEach(t),r4.forEach(t),c2=h(Ra),um=r(Ra,"LI",{});var l4=i(um);Wl=r(l4,"A",{href:!0,rel:!0});var d4=i(Wl);p2=s(d4,"Parallelization"),d4.forEach(t),l4.forEach(t),Ra.forEach(t),h2=h(Dt),to=r(Dt,"DIV",{class:!0});var Ha=i(to);b(Ul.$$.fragment,Ha),m2=h(Ha),qn=r(Ha,"P",{});var Bc=i(qn);u2=s(Bc,"The "),fm=r(Bc,"CODE",{});var c4=i(fm);f2=s(c4,"FlaxElectraPreTrainedModel"),c4.forEach(t),g2=s(Bc," forward method, overrides the "),gm=r(Bc,"CODE",{});var p4=i(gm);_2=s(p4,"__call__"),p4.forEach(t),k2=s(Bc," special method."),Bc.forEach(t),v2=h(Ha),b(fa.$$.fragment,Ha),y2=h(Ha),b(ga.$$.fragment,Ha),Ha.forEach(t),Dt.forEach(t),jf=h(o),Pn=r(o,"H2",{class:!0});var Vg=i(Pn);_a=r(Vg,"A",{id:!0,class:!0,href:!0});var h4=i(_a);_m=r(h4,"SPAN",{});var m4=i(_m);b(Rl.$$.fragment,m4),m4.forEach(t),h4.forEach(t),T2=h(Vg),km=r(Vg,"SPAN",{});var u4=i(km);b2=s(u4,"FlaxElectraForMultipleChoice"),u4.forEach(t),Vg.forEach(t),qf=h(o),lt=r(o,"DIV",{class:!0});var St=i(lt);b(Hl.$$.fragment,St),w2=h(St),vm=r(St,"P",{});var f4=i(vm);E2=s(f4,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),f4.forEach(t),$2=h(St),Kl=r(St,"P",{});var Jg=i(Kl);F2=s(Jg,"This model inherits from "),wc=r(Jg,"A",{href:!0});var g4=i(wc);x2=s(g4,"FlaxPreTrainedModel"),g4.forEach(t),M2=s(Jg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jg.forEach(t),z2=h(St),Ql=r(St,"P",{});var Gg=i(Ql);C2=s(Gg,`This model is also a Flax Linen
`),Bl=r(Gg,"A",{href:!0,rel:!0});var _4=i(Bl);j2=s(_4,"flax.nn.Module"),_4.forEach(t),q2=s(Gg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Gg.forEach(t),P2=h(St),ym=r(St,"P",{});var k4=i(ym);A2=s(k4,"Finally, this model supports inherent JAX features such as:"),k4.forEach(t),O2=h(St),ko=r(St,"UL",{});var Ka=i(ko);Tm=r(Ka,"LI",{});var v4=i(Tm);Vl=r(v4,"A",{href:!0,rel:!0});var y4=i(Vl);L2=s(y4,"Just-In-Time (JIT) compilation"),y4.forEach(t),v4.forEach(t),N2=h(Ka),bm=r(Ka,"LI",{});var T4=i(bm);Jl=r(T4,"A",{href:!0,rel:!0});var b4=i(Jl);I2=s(b4,"Automatic Differentiation"),b4.forEach(t),T4.forEach(t),D2=h(Ka),wm=r(Ka,"LI",{});var w4=i(wm);Gl=r(w4,"A",{href:!0,rel:!0});var E4=i(Gl);S2=s(E4,"Vectorization"),E4.forEach(t),w4.forEach(t),W2=h(Ka),Em=r(Ka,"LI",{});var $4=i(Em);Xl=r($4,"A",{href:!0,rel:!0});var F4=i(Xl);U2=s(F4,"Parallelization"),F4.forEach(t),$4.forEach(t),Ka.forEach(t),R2=h(St),oo=r(St,"DIV",{class:!0});var Qa=i(oo);b(Yl.$$.fragment,Qa),H2=h(Qa),An=r(Qa,"P",{});var Vc=i(An);K2=s(Vc,"The "),$m=r(Vc,"CODE",{});var x4=i($m);Q2=s(x4,"FlaxElectraPreTrainedModel"),x4.forEach(t),B2=s(Vc," forward method, overrides the "),Fm=r(Vc,"CODE",{});var M4=i(Fm);V2=s(M4,"__call__"),M4.forEach(t),J2=s(Vc," special method."),Vc.forEach(t),G2=h(Qa),b(ka.$$.fragment,Qa),X2=h(Qa),b(va.$$.fragment,Qa),Qa.forEach(t),St.forEach(t),Pf=h(o),On=r(o,"H2",{class:!0});var Xg=i(On);ya=r(Xg,"A",{id:!0,class:!0,href:!0});var z4=i(ya);xm=r(z4,"SPAN",{});var C4=i(xm);b(Zl.$$.fragment,C4),C4.forEach(t),z4.forEach(t),Y2=h(Xg),Mm=r(Xg,"SPAN",{});var j4=i(Mm);Z2=s(j4,"FlaxElectraForTokenClassification"),j4.forEach(t),Xg.forEach(t),Af=h(o),et=r(o,"DIV",{class:!0});var vt=i(et);b(ed.$$.fragment,vt),eF=h(vt),zm=r(vt,"P",{});var q4=i(zm);tF=s(q4,"Electra model with a token classification head on top."),q4.forEach(t),oF=h(vt),Cm=r(vt,"P",{});var P4=i(Cm);nF=s(P4,"Both the discriminator and generator may be loaded into this model."),P4.forEach(t),sF=h(vt),td=r(vt,"P",{});var Yg=i(td);aF=s(Yg,"This model inherits from "),Ec=r(Yg,"A",{href:!0});var A4=i(Ec);rF=s(A4,"FlaxPreTrainedModel"),A4.forEach(t),iF=s(Yg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yg.forEach(t),lF=h(vt),od=r(vt,"P",{});var Zg=i(od);dF=s(Zg,`This model is also a Flax Linen
`),nd=r(Zg,"A",{href:!0,rel:!0});var O4=i(nd);cF=s(O4,"flax.nn.Module"),O4.forEach(t),pF=s(Zg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Zg.forEach(t),hF=h(vt),jm=r(vt,"P",{});var L4=i(jm);mF=s(L4,"Finally, this model supports inherent JAX features such as:"),L4.forEach(t),uF=h(vt),vo=r(vt,"UL",{});var Ba=i(vo);qm=r(Ba,"LI",{});var N4=i(qm);sd=r(N4,"A",{href:!0,rel:!0});var I4=i(sd);fF=s(I4,"Just-In-Time (JIT) compilation"),I4.forEach(t),N4.forEach(t),gF=h(Ba),Pm=r(Ba,"LI",{});var D4=i(Pm);ad=r(D4,"A",{href:!0,rel:!0});var S4=i(ad);_F=s(S4,"Automatic Differentiation"),S4.forEach(t),D4.forEach(t),kF=h(Ba),Am=r(Ba,"LI",{});var W4=i(Am);rd=r(W4,"A",{href:!0,rel:!0});var U4=i(rd);vF=s(U4,"Vectorization"),U4.forEach(t),W4.forEach(t),yF=h(Ba),Om=r(Ba,"LI",{});var R4=i(Om);id=r(R4,"A",{href:!0,rel:!0});var H4=i(id);TF=s(H4,"Parallelization"),H4.forEach(t),R4.forEach(t),Ba.forEach(t),bF=h(vt),no=r(vt,"DIV",{class:!0});var Va=i(no);b(ld.$$.fragment,Va),wF=h(Va),Ln=r(Va,"P",{});var Jc=i(Ln);EF=s(Jc,"The "),Lm=r(Jc,"CODE",{});var K4=i(Lm);$F=s(K4,"FlaxElectraPreTrainedModel"),K4.forEach(t),FF=s(Jc," forward method, overrides the "),Nm=r(Jc,"CODE",{});var Q4=i(Nm);xF=s(Q4,"__call__"),Q4.forEach(t),MF=s(Jc," special method."),Jc.forEach(t),zF=h(Va),b(Ta.$$.fragment,Va),CF=h(Va),b(ba.$$.fragment,Va),Va.forEach(t),vt.forEach(t),Of=h(o),Nn=r(o,"H2",{class:!0});var e_=i(Nn);wa=r(e_,"A",{id:!0,class:!0,href:!0});var B4=i(wa);Im=r(B4,"SPAN",{});var V4=i(Im);b(dd.$$.fragment,V4),V4.forEach(t),B4.forEach(t),jF=h(e_),Dm=r(e_,"SPAN",{});var J4=i(Dm);qF=s(J4,"FlaxElectraForQuestionAnswering"),J4.forEach(t),e_.forEach(t),Lf=h(o),dt=r(o,"DIV",{class:!0});var Wt=i(dt);b(cd.$$.fragment,Wt),PF=h(Wt),In=r(Wt,"P",{});var Gc=i(In);AF=s(Gc,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Sm=r(Gc,"CODE",{});var G4=i(Sm);OF=s(G4,"span start logits"),G4.forEach(t),LF=s(Gc," and "),Wm=r(Gc,"CODE",{});var X4=i(Wm);NF=s(X4,"span end logits"),X4.forEach(t),IF=s(Gc,")."),Gc.forEach(t),DF=h(Wt),pd=r(Wt,"P",{});var t_=i(pd);SF=s(t_,"This model inherits from "),$c=r(t_,"A",{href:!0});var Y4=i($c);WF=s(Y4,"FlaxPreTrainedModel"),Y4.forEach(t),UF=s(t_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),t_.forEach(t),RF=h(Wt),hd=r(Wt,"P",{});var o_=i(hd);HF=s(o_,`This model is also a Flax Linen
`),md=r(o_,"A",{href:!0,rel:!0});var Z4=i(md);KF=s(Z4,"flax.nn.Module"),Z4.forEach(t),QF=s(o_,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),o_.forEach(t),BF=h(Wt),Um=r(Wt,"P",{});var eC=i(Um);VF=s(eC,"Finally, this model supports inherent JAX features such as:"),eC.forEach(t),JF=h(Wt),yo=r(Wt,"UL",{});var Ja=i(yo);Rm=r(Ja,"LI",{});var tC=i(Rm);ud=r(tC,"A",{href:!0,rel:!0});var oC=i(ud);GF=s(oC,"Just-In-Time (JIT) compilation"),oC.forEach(t),tC.forEach(t),XF=h(Ja),Hm=r(Ja,"LI",{});var nC=i(Hm);fd=r(nC,"A",{href:!0,rel:!0});var sC=i(fd);YF=s(sC,"Automatic Differentiation"),sC.forEach(t),nC.forEach(t),ZF=h(Ja),Km=r(Ja,"LI",{});var aC=i(Km);gd=r(aC,"A",{href:!0,rel:!0});var rC=i(gd);e0=s(rC,"Vectorization"),rC.forEach(t),aC.forEach(t),t0=h(Ja),Qm=r(Ja,"LI",{});var iC=i(Qm);_d=r(iC,"A",{href:!0,rel:!0});var lC=i(_d);o0=s(lC,"Parallelization"),lC.forEach(t),iC.forEach(t),Ja.forEach(t),n0=h(Wt),so=r(Wt,"DIV",{class:!0});var Ga=i(so);b(kd.$$.fragment,Ga),s0=h(Ga),Dn=r(Ga,"P",{});var Xc=i(Dn);a0=s(Xc,"The "),Bm=r(Xc,"CODE",{});var dC=i(Bm);r0=s(dC,"FlaxElectraPreTrainedModel"),dC.forEach(t),i0=s(Xc," forward method, overrides the "),Vm=r(Xc,"CODE",{});var cC=i(Vm);l0=s(cC,"__call__"),cC.forEach(t),d0=s(Xc," special method."),Xc.forEach(t),c0=h(Ga),b(Ea.$$.fragment,Ga),p0=h(Ga),b($a.$$.fragment,Ga),Ga.forEach(t),Wt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(xj)),u(f,"id","electra"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#electra"),u(c,"class","relative group"),u(ae,"id","overview"),u(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ae,"href","#overview"),u(S,"class","relative group"),u(re,"href","https://openreview.net/pdf?id=r1xMH1BtvB"),u(re,"rel","nofollow"),u(P,"href","https://github.com/google-research/electra"),u(P,"rel","nofollow"),u(ie,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForMaskedLM"),u(le,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForPreTraining"),u(Z,"href","https://huggingface.co/lysandre"),u(Z,"rel","nofollow"),u(L,"href","https://github.com/google-research/electra"),u(L,"rel","nofollow"),u(De,"id","transformers.ElectraConfig"),u(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(De,"href","#transformers.ElectraConfig"),u(C,"class","relative group"),u(He,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraModel"),u(Ke,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraModel"),u(Re,"href","https://huggingface.co/google/electra-small-discriminator"),u(Re,"rel","nofollow"),u(qd,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Pd,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rn,"id","transformers.ElectraTokenizer"),u(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rn,"href","#transformers.ElectraTokenizer"),u(Do,"class","relative group"),u(Ad,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer"),u(Od,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),u(Ld,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Kn,"id","transformers.ElectraTokenizerFast"),u(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Kn,"href","#transformers.ElectraTokenizerFast"),u(So,"class","relative group"),u(Nd,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizerFast"),u(Id,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),u(Dd,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bn,"id","transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),u(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bn,"href","#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),u(Wo,"class","relative group"),u(Sd,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForPreTraining"),u(Uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wd,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForPreTraining"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vn,"id","transformers.ElectraModel"),u(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vn,"href","#transformers.ElectraModel"),u(Ho,"class","relative group"),u(Ud,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(mr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(mr,"rel","nofollow"),u(Rd,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraModel"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xn,"id","transformers.ElectraForPreTraining"),u(Xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xn,"href","#transformers.ElectraForPreTraining"),u(Qo,"class","relative group"),u(Hd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(vr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(vr,"rel","nofollow"),u(Kd,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForPreTraining"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"id","transformers.ElectraForCausalLM"),u(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(es,"href","#transformers.ElectraForCausalLM"),u(Vo,"class","relative group"),u(Qd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Fr,"rel","nofollow"),u(Bd,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForCausalLM"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ns,"id","transformers.ElectraForMaskedLM"),u(ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ns,"href","#transformers.ElectraForMaskedLM"),u(Go,"class","relative group"),u(Vd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(qr,"rel","nofollow"),u(Jd,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForMaskedLM"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(is,"id","transformers.ElectraForSequenceClassification"),u(is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(is,"href","#transformers.ElectraForSequenceClassification"),u(Yo,"class","relative group"),u(Gd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Ir,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ir,"rel","nofollow"),u(Xd,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForSequenceClassification"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ms,"id","transformers.ElectraForMultipleChoice"),u(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ms,"href","#transformers.ElectraForMultipleChoice"),u(en,"class","relative group"),u(Yd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Hr,"rel","nofollow"),u(Zd,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForMultipleChoice"),u(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gs,"id","transformers.ElectraForTokenClassification"),u(gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(gs,"href","#transformers.ElectraForTokenClassification"),u(on,"class","relative group"),u(ec,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Gr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Gr,"rel","nofollow"),u(tc,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForTokenClassification"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.ElectraForQuestionAnswering"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.ElectraForQuestionAnswering"),u(sn,"class","relative group"),u(oc,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(oi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(oi,"rel","nofollow"),u(nc,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForQuestionAnswering"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Es,"id","transformers.TFElectraModel"),u(Es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Es,"href","#transformers.TFElectraModel"),u(ln,"class","relative group"),u(sc,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(li,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(li,"rel","nofollow"),u(ac,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraModel"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ms,"id","transformers.TFElectraForPreTraining"),u(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ms,"href","#transformers.TFElectraForPreTraining"),u(cn,"class","relative group"),u(rc,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ui,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ui,"rel","nofollow"),u(ic,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForPreTraining"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qs,"id","transformers.TFElectraForMaskedLM"),u(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qs,"href","#transformers.TFElectraForMaskedLM"),u(hn,"class","relative group"),u(lc,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(yi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(yi,"rel","nofollow"),u(dc,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForMaskedLM"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ns,"id","transformers.TFElectraForSequenceClassification"),u(Ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ns,"href","#transformers.TFElectraForSequenceClassification"),u(un,"class","relative group"),u(cc,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Fi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Fi,"rel","nofollow"),u(pc,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForSequenceClassification"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Us,"id","transformers.TFElectraForMultipleChoice"),u(Us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Us,"href","#transformers.TFElectraForMultipleChoice"),u(gn,"class","relative group"),u(hc,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(qi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(qi,"rel","nofollow"),u(mc,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForMultipleChoice"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qs,"id","transformers.TFElectraForTokenClassification"),u(Qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qs,"href","#transformers.TFElectraForTokenClassification"),u(kn,"class","relative group"),u(uc,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ii,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ii,"rel","nofollow"),u(fc,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForTokenClassification"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xs,"id","transformers.TFElectraForQuestionAnswering"),u(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xs,"href","#transformers.TFElectraForQuestionAnswering"),u(yn,"class","relative group"),u(gc,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Hi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Hi,"rel","nofollow"),u(_c,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForQuestionAnswering"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oa,"id","transformers.FlaxElectraModel"),u(oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(oa,"href","#transformers.FlaxElectraModel"),u(wn,"class","relative group"),u(kc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Gi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Gi,"rel","nofollow"),u(Xi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Xi,"rel","nofollow"),u(Yi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Yi,"rel","nofollow"),u(Zi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Zi,"rel","nofollow"),u(el,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(el,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(aa,"id","transformers.FlaxElectraForPreTraining"),u(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(aa,"href","#transformers.FlaxElectraForPreTraining"),u($n,"class","relative group"),u(vc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(rl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(rl,"rel","nofollow"),u(il,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(il,"rel","nofollow"),u(ll,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ll,"rel","nofollow"),u(dl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(dl,"rel","nofollow"),u(cl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(cl,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(la,"id","transformers.FlaxElectraForCausalLM"),u(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(la,"href","#transformers.FlaxElectraForCausalLM"),u(xn,"class","relative group"),u(yc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(gl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(gl,"rel","nofollow"),u(_l,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(_l,"rel","nofollow"),u(kl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(kl,"rel","nofollow"),u(vl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(vl,"rel","nofollow"),u(yl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(yl,"rel","nofollow"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pa,"id","transformers.FlaxElectraForMaskedLM"),u(pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pa,"href","#transformers.FlaxElectraForMaskedLM"),u(zn,"class","relative group"),u(Tc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(xl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(xl,"rel","nofollow"),u(Ml,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ml,"rel","nofollow"),u(zl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(zl,"rel","nofollow"),u(Cl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Cl,"rel","nofollow"),u(jl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(jl,"rel","nofollow"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ua,"id","transformers.FlaxElectraForSequenceClassification"),u(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ua,"href","#transformers.FlaxElectraForSequenceClassification"),u(jn,"class","relative group"),u(bc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Nl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Nl,"rel","nofollow"),u(Il,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Il,"rel","nofollow"),u(Dl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Dl,"rel","nofollow"),u(Sl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Sl,"rel","nofollow"),u(Wl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Wl,"rel","nofollow"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_a,"id","transformers.FlaxElectraForMultipleChoice"),u(_a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_a,"href","#transformers.FlaxElectraForMultipleChoice"),u(Pn,"class","relative group"),u(wc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Bl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Bl,"rel","nofollow"),u(Vl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Vl,"rel","nofollow"),u(Jl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Jl,"rel","nofollow"),u(Gl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Gl,"rel","nofollow"),u(Xl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Xl,"rel","nofollow"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ya,"id","transformers.FlaxElectraForTokenClassification"),u(ya,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ya,"href","#transformers.FlaxElectraForTokenClassification"),u(On,"class","relative group"),u(Ec,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(nd,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(nd,"rel","nofollow"),u(sd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(sd,"rel","nofollow"),u(ad,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ad,"rel","nofollow"),u(rd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(rd,"rel","nofollow"),u(id,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(id,"rel","nofollow"),u(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wa,"id","transformers.FlaxElectraForQuestionAnswering"),u(wa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wa,"href","#transformers.FlaxElectraForQuestionAnswering"),u(Nn,"class","relative group"),u($c,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(md,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(md,"rel","nofollow"),u(ud,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ud,"rel","nofollow"),u(fd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(fd,"rel","nofollow"),u(gd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(gd,"rel","nofollow"),u(_d,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(_d,"rel","nofollow"),u(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),_(o,g,k),_(o,c,k),e(c,f),e(f,v),w(l,v,null),e(c,m),e(c,z),e(z,Te),_(o,fe,k),_(o,S,k),e(S,ae),e(ae,ee),w(M,ee,null),e(S,be),e(S,Q),e(Q,we),_(o,ge,k),_(o,U,k),e(U,Ee),e(U,re),e(re,B),e(U,$e),_(o,_e,k),_(o,H,k),e(H,Fe),_(o,ke,k),_(o,K,k),e(K,me),e(me,xe),_(o,oe,k),_(o,q,k),e(q,A),_(o,ve,k),_(o,R,k),e(R,ue),e(ue,Me),e(R,V),e(R,ne),e(ne,ze),e(ne,P),e(P,Ce),e(ne,J),e(ne,ie),e(ie,je),e(ne,G),e(ne,le),e(le,qe),e(ne,I),_(o,ye,k),_(o,D,k),e(D,Pe),e(D,Z),e(Z,O),e(D,Ae),e(D,L),e(L,Oe),e(D,Le),_(o,y,k),_(o,C,k),e(C,De),e(De,te),w(We,te,null),e(C,Be),e(C,j),e(j,Ve),_(o,Qe,k),_(o,de,k),w(Ue,de,null),e(de,Je),e(de,N),e(N,X),e(N,He),e(He,Ge),e(N,Y),e(N,Ke),e(Ke,Xe),e(N,Ne),e(N,Re),e(Re,se),e(N,Ye),e(de,n_),e(de,Io),e(Io,s_),e(Io,qd),e(qd,a_),e(Io,r_),e(Io,Pd),e(Pd,i_),e(Io,l_),e(de,d_),w(Un,de,null),_(o,Nu,k),_(o,Do,k),e(Do,Rn),e(Rn,Yc),w(Xa,Yc,null),e(Do,c_),e(Do,Zc),e(Zc,p_),_(o,Iu,k),_(o,Ut,k),w(Ya,Ut,null),e(Ut,h_),e(Ut,ep),e(ep,m_),e(Ut,u_),e(Ut,Hn),e(Hn,Ad),e(Ad,f_),e(Hn,g_),e(Hn,Od),e(Od,__),e(Hn,k_),e(Ut,v_),e(Ut,Za),e(Za,y_),e(Za,Ld),e(Ld,T_),e(Za,b_),_(o,Du,k),_(o,So,k),e(So,Kn),e(Kn,tp),w(er,tp,null),e(So,w_),e(So,op),e(op,E_),_(o,Su,k),_(o,Rt,k),w(tr,Rt,null),e(Rt,$_),e(Rt,or),e(or,F_),e(or,np),e(np,x_),e(or,M_),e(Rt,z_),e(Rt,Qn),e(Qn,Nd),e(Nd,C_),e(Qn,j_),e(Qn,Id),e(Id,q_),e(Qn,P_),e(Rt,A_),e(Rt,nr),e(nr,O_),e(nr,Dd),e(Dd,L_),e(nr,N_),_(o,Wu,k),_(o,Wo,k),e(Wo,Bn),e(Bn,sp),w(sr,sp,null),e(Wo,I_),e(Wo,ap),e(ap,D_),_(o,Uu,k),_(o,Uo,k),w(ar,Uo,null),e(Uo,S_),e(Uo,rr),e(rr,W_),e(rr,Sd),e(Sd,U_),e(rr,R_),_(o,Ru,k),_(o,Ro,k),w(ir,Ro,null),e(Ro,H_),e(Ro,lr),e(lr,K_),e(lr,Wd),e(Wd,Q_),e(lr,B_),_(o,Hu,k),_(o,Ho,k),e(Ho,Vn),e(Vn,rp),w(dr,rp,null),e(Ho,V_),e(Ho,ip),e(ip,J_),_(o,Ku,k),_(o,yt,k),w(cr,yt,null),e(yt,G_),e(yt,lp),e(lp,X_),e(yt,Y_),e(yt,pr),e(pr,Z_),e(pr,Ud),e(Ud,ek),e(pr,tk),e(yt,ok),e(yt,hr),e(hr,nk),e(hr,mr),e(mr,sk),e(hr,ak),e(yt,rk),e(yt,Ht),w(ur,Ht,null),e(Ht,ik),e(Ht,Ko),e(Ko,lk),e(Ko,Rd),e(Rd,dk),e(Ko,ck),e(Ko,dp),e(dp,pk),e(Ko,hk),e(Ht,mk),w(Jn,Ht,null),e(Ht,uk),w(Gn,Ht,null),_(o,Qu,k),_(o,Qo,k),e(Qo,Xn),e(Xn,cp),w(fr,cp,null),e(Qo,fk),e(Qo,pp),e(pp,gk),_(o,Bu,k),_(o,pt,k),w(gr,pt,null),e(pt,_k),e(pt,hp),e(hp,kk),e(pt,vk),e(pt,mp),e(mp,yk),e(pt,Tk),e(pt,_r),e(_r,bk),e(_r,Hd),e(Hd,wk),e(_r,Ek),e(pt,$k),e(pt,kr),e(kr,Fk),e(kr,vr),e(vr,xk),e(kr,Mk),e(pt,zk),e(pt,Kt),w(yr,Kt,null),e(Kt,Ck),e(Kt,Bo),e(Bo,jk),e(Bo,Kd),e(Kd,qk),e(Bo,Pk),e(Bo,up),e(up,Ak),e(Bo,Ok),e(Kt,Lk),w(Yn,Kt,null),e(Kt,Nk),w(Zn,Kt,null),_(o,Vu,k),_(o,Vo,k),e(Vo,es),e(es,fp),w(Tr,fp,null),e(Vo,Ik),e(Vo,gp),e(gp,Dk),_(o,Ju,k),_(o,Tt,k),w(br,Tt,null),e(Tt,Sk),e(Tt,wr),e(wr,Wk),e(wr,_p),e(_p,Uk),e(wr,Rk),e(Tt,Hk),e(Tt,Er),e(Er,Kk),e(Er,Qd),e(Qd,Qk),e(Er,Bk),e(Tt,Vk),e(Tt,$r),e($r,Jk),e($r,Fr),e(Fr,Gk),e($r,Xk),e(Tt,Yk),e(Tt,Qt),w(xr,Qt,null),e(Qt,Zk),e(Qt,Jo),e(Jo,ev),e(Jo,Bd),e(Bd,tv),e(Jo,ov),e(Jo,kp),e(kp,nv),e(Jo,sv),e(Qt,av),w(ts,Qt,null),e(Qt,rv),w(os,Qt,null),_(o,Gu,k),_(o,Go,k),e(Go,ns),e(ns,vp),w(Mr,vp,null),e(Go,iv),e(Go,yp),e(yp,lv),_(o,Xu,k),_(o,ht,k),w(zr,ht,null),e(ht,dv),e(ht,Tp),e(Tp,cv),e(ht,pv),e(ht,bp),e(bp,hv),e(ht,mv),e(ht,Cr),e(Cr,uv),e(Cr,Vd),e(Vd,fv),e(Cr,gv),e(ht,_v),e(ht,jr),e(jr,kv),e(jr,qr),e(qr,vv),e(jr,yv),e(ht,Tv),e(ht,$t),w(Pr,$t,null),e($t,bv),e($t,Xo),e(Xo,wv),e(Xo,Jd),e(Jd,Ev),e(Xo,$v),e(Xo,wp),e(wp,Fv),e(Xo,xv),e($t,Mv),w(ss,$t,null),e($t,zv),w(as,$t,null),e($t,Cv),w(rs,$t,null),_(o,Yu,k),_(o,Yo,k),e(Yo,is),e(is,Ep),w(Ar,Ep,null),e(Yo,jv),e(Yo,$p),e($p,qv),_(o,Zu,k),_(o,bt,k),w(Or,bt,null),e(bt,Pv),e(bt,Fp),e(Fp,Av),e(bt,Ov),e(bt,Lr),e(Lr,Lv),e(Lr,Gd),e(Gd,Nv),e(Lr,Iv),e(bt,Dv),e(bt,Nr),e(Nr,Sv),e(Nr,Ir),e(Ir,Wv),e(Nr,Uv),e(bt,Rv),e(bt,ct),w(Dr,ct,null),e(ct,Hv),e(ct,Zo),e(Zo,Kv),e(Zo,Xd),e(Xd,Qv),e(Zo,Bv),e(Zo,xp),e(xp,Vv),e(Zo,Jv),e(ct,Gv),w(ls,ct,null),e(ct,Xv),w(ds,ct,null),e(ct,Yv),w(cs,ct,null),e(ct,Zv),w(ps,ct,null),e(ct,ey),w(hs,ct,null),_(o,ef,k),_(o,en,k),e(en,ms),e(ms,Mp),w(Sr,Mp,null),e(en,ty),e(en,zp),e(zp,oy),_(o,tf,k),_(o,wt,k),w(Wr,wt,null),e(wt,ny),e(wt,Cp),e(Cp,sy),e(wt,ay),e(wt,Ur),e(Ur,ry),e(Ur,Yd),e(Yd,iy),e(Ur,ly),e(wt,dy),e(wt,Rr),e(Rr,cy),e(Rr,Hr),e(Hr,py),e(Rr,hy),e(wt,my),e(wt,Bt),w(Kr,Bt,null),e(Bt,uy),e(Bt,tn),e(tn,fy),e(tn,Zd),e(Zd,gy),e(tn,_y),e(tn,jp),e(jp,ky),e(tn,vy),e(Bt,yy),w(us,Bt,null),e(Bt,Ty),w(fs,Bt,null),_(o,of,k),_(o,on,k),e(on,gs),e(gs,qp),w(Qr,qp,null),e(on,by),e(on,Pp),e(Pp,wy),_(o,nf,k),_(o,mt,k),w(Br,mt,null),e(mt,Ey),e(mt,Ap),e(Ap,$y),e(mt,Fy),e(mt,Op),e(Op,xy),e(mt,My),e(mt,Vr),e(Vr,zy),e(Vr,ec),e(ec,Cy),e(Vr,jy),e(mt,qy),e(mt,Jr),e(Jr,Py),e(Jr,Gr),e(Gr,Ay),e(Jr,Oy),e(mt,Ly),e(mt,Ft),w(Xr,Ft,null),e(Ft,Ny),e(Ft,nn),e(nn,Iy),e(nn,tc),e(tc,Dy),e(nn,Sy),e(nn,Lp),e(Lp,Wy),e(nn,Uy),e(Ft,Ry),w(_s,Ft,null),e(Ft,Hy),w(ks,Ft,null),e(Ft,Ky),w(vs,Ft,null),_(o,sf,k),_(o,sn,k),e(sn,ys),e(ys,Np),w(Yr,Np,null),e(sn,Qy),e(sn,Ip),e(Ip,By),_(o,af,k),_(o,Et,k),w(Zr,Et,null),e(Et,Vy),e(Et,an),e(an,Jy),e(an,Dp),e(Dp,Gy),e(an,Xy),e(an,Sp),e(Sp,Yy),e(an,Zy),e(Et,eT),e(Et,ei),e(ei,tT),e(ei,oc),e(oc,oT),e(ei,nT),e(Et,sT),e(Et,ti),e(ti,aT),e(ti,oi),e(oi,rT),e(ti,iT),e(Et,lT),e(Et,xt),w(ni,xt,null),e(xt,dT),e(xt,rn),e(rn,cT),e(rn,nc),e(nc,pT),e(rn,hT),e(rn,Wp),e(Wp,mT),e(rn,uT),e(xt,fT),w(Ts,xt,null),e(xt,gT),w(bs,xt,null),e(xt,_T),w(ws,xt,null),_(o,rf,k),_(o,ln,k),e(ln,Es),e(Es,Up),w(si,Up,null),e(ln,kT),e(ln,Rp),e(Rp,vT),_(o,lf,k),_(o,ut,k),w(ai,ut,null),e(ut,yT),e(ut,Hp),e(Hp,TT),e(ut,bT),e(ut,ri),e(ri,wT),e(ri,sc),e(sc,ET),e(ri,$T),e(ut,FT),e(ut,ii),e(ii,xT),e(ii,li),e(li,MT),e(ii,zT),e(ut,CT),w($s,ut,null),e(ut,jT),e(ut,Vt),w(di,Vt,null),e(Vt,qT),e(Vt,dn),e(dn,PT),e(dn,ac),e(ac,AT),e(dn,OT),e(dn,Kp),e(Kp,LT),e(dn,NT),e(Vt,IT),w(Fs,Vt,null),e(Vt,DT),w(xs,Vt,null),_(o,df,k),_(o,cn,k),e(cn,Ms),e(Ms,Qp),w(ci,Qp,null),e(cn,ST),e(cn,Bp),e(Bp,WT),_(o,cf,k),_(o,tt,k),w(pi,tt,null),e(tt,UT),e(tt,Vp),e(Vp,RT),e(tt,HT),e(tt,Jp),e(Jp,KT),e(tt,QT),e(tt,hi),e(hi,BT),e(hi,rc),e(rc,VT),e(hi,JT),e(tt,GT),e(tt,mi),e(mi,XT),e(mi,ui),e(ui,YT),e(mi,ZT),e(tt,eb),w(zs,tt,null),e(tt,tb),e(tt,Jt),w(fi,Jt,null),e(Jt,ob),e(Jt,pn),e(pn,nb),e(pn,ic),e(ic,sb),e(pn,ab),e(pn,Gp),e(Gp,rb),e(pn,ib),e(Jt,lb),w(Cs,Jt,null),e(Jt,db),w(js,Jt,null),_(o,pf,k),_(o,hn,k),e(hn,qs),e(qs,Xp),w(gi,Xp,null),e(hn,cb),e(hn,Yp),e(Yp,pb),_(o,hf,k),_(o,ot,k),w(_i,ot,null),e(ot,hb),e(ot,Zp),e(Zp,mb),e(ot,ub),e(ot,eh),e(eh,fb),e(ot,gb),e(ot,ki),e(ki,_b),e(ki,lc),e(lc,kb),e(ki,vb),e(ot,yb),e(ot,vi),e(vi,Tb),e(vi,yi),e(yi,bb),e(vi,wb),e(ot,Eb),w(Ps,ot,null),e(ot,$b),e(ot,Mt),w(Ti,Mt,null),e(Mt,Fb),e(Mt,mn),e(mn,xb),e(mn,dc),e(dc,Mb),e(mn,zb),e(mn,th),e(th,Cb),e(mn,jb),e(Mt,qb),w(As,Mt,null),e(Mt,Pb),w(Os,Mt,null),e(Mt,Ab),w(Ls,Mt,null),_(o,mf,k),_(o,un,k),e(un,Ns),e(Ns,oh),w(bi,oh,null),e(un,Ob),e(un,nh),e(nh,Lb),_(o,uf,k),_(o,ft,k),w(wi,ft,null),e(ft,Nb),e(ft,sh),e(sh,Ib),e(ft,Db),e(ft,Ei),e(Ei,Sb),e(Ei,cc),e(cc,Wb),e(Ei,Ub),e(ft,Rb),e(ft,$i),e($i,Hb),e($i,Fi),e(Fi,Kb),e($i,Qb),e(ft,Bb),w(Is,ft,null),e(ft,Vb),e(ft,zt),w(xi,zt,null),e(zt,Jb),e(zt,fn),e(fn,Gb),e(fn,pc),e(pc,Xb),e(fn,Yb),e(fn,ah),e(ah,Zb),e(fn,ew),e(zt,tw),w(Ds,zt,null),e(zt,ow),w(Ss,zt,null),e(zt,nw),w(Ws,zt,null),_(o,ff,k),_(o,gn,k),e(gn,Us),e(Us,rh),w(Mi,rh,null),e(gn,sw),e(gn,ih),e(ih,aw),_(o,gf,k),_(o,gt,k),w(zi,gt,null),e(gt,rw),e(gt,lh),e(lh,iw),e(gt,lw),e(gt,Ci),e(Ci,dw),e(Ci,hc),e(hc,cw),e(Ci,pw),e(gt,hw),e(gt,ji),e(ji,mw),e(ji,qi),e(qi,uw),e(ji,fw),e(gt,gw),w(Rs,gt,null),e(gt,_w),e(gt,Gt),w(Pi,Gt,null),e(Gt,kw),e(Gt,_n),e(_n,vw),e(_n,mc),e(mc,yw),e(_n,Tw),e(_n,dh),e(dh,bw),e(_n,ww),e(Gt,Ew),w(Hs,Gt,null),e(Gt,$w),w(Ks,Gt,null),_(o,_f,k),_(o,kn,k),e(kn,Qs),e(Qs,ch),w(Ai,ch,null),e(kn,Fw),e(kn,ph),e(ph,xw),_(o,kf,k),_(o,nt,k),w(Oi,nt,null),e(nt,Mw),e(nt,hh),e(hh,zw),e(nt,Cw),e(nt,mh),e(mh,jw),e(nt,qw),e(nt,Li),e(Li,Pw),e(Li,uc),e(uc,Aw),e(Li,Ow),e(nt,Lw),e(nt,Ni),e(Ni,Nw),e(Ni,Ii),e(Ii,Iw),e(Ni,Dw),e(nt,Sw),w(Bs,nt,null),e(nt,Ww),e(nt,Ct),w(Di,Ct,null),e(Ct,Uw),e(Ct,vn),e(vn,Rw),e(vn,fc),e(fc,Hw),e(vn,Kw),e(vn,uh),e(uh,Qw),e(vn,Bw),e(Ct,Vw),w(Vs,Ct,null),e(Ct,Jw),w(Js,Ct,null),e(Ct,Gw),w(Gs,Ct,null),_(o,vf,k),_(o,yn,k),e(yn,Xs),e(Xs,fh),w(Si,fh,null),e(yn,Xw),e(yn,gh),e(gh,Yw),_(o,yf,k),_(o,_t,k),w(Wi,_t,null),e(_t,Zw),e(_t,Tn),e(Tn,eE),e(Tn,_h),e(_h,tE),e(Tn,oE),e(Tn,kh),e(kh,nE),e(Tn,sE),e(_t,aE),e(_t,Ui),e(Ui,rE),e(Ui,gc),e(gc,iE),e(Ui,lE),e(_t,dE),e(_t,Ri),e(Ri,cE),e(Ri,Hi),e(Hi,pE),e(Ri,hE),e(_t,mE),w(Ys,_t,null),e(_t,uE),e(_t,jt),w(Ki,jt,null),e(jt,fE),e(jt,bn),e(bn,gE),e(bn,_c),e(_c,_E),e(bn,kE),e(bn,vh),e(vh,vE),e(bn,yE),e(jt,TE),w(Zs,jt,null),e(jt,bE),w(ea,jt,null),e(jt,wE),w(ta,jt,null),_(o,Tf,k),_(o,wn,k),e(wn,oa),e(oa,yh),w(Qi,yh,null),e(wn,EE),e(wn,Th),e(Th,$E),_(o,bf,k),_(o,st,k),w(Bi,st,null),e(st,FE),e(st,bh),e(bh,xE),e(st,ME),e(st,Vi),e(Vi,zE),e(Vi,kc),e(kc,CE),e(Vi,jE),e(st,qE),e(st,Ji),e(Ji,PE),e(Ji,Gi),e(Gi,AE),e(Ji,OE),e(st,LE),e(st,wh),e(wh,NE),e(st,IE),e(st,mo),e(mo,Eh),e(Eh,Xi),e(Xi,DE),e(mo,SE),e(mo,$h),e($h,Yi),e(Yi,WE),e(mo,UE),e(mo,Fh),e(Fh,Zi),e(Zi,RE),e(mo,HE),e(mo,xh),e(xh,el),e(el,KE),e(st,QE),e(st,Xt),w(tl,Xt,null),e(Xt,BE),e(Xt,En),e(En,VE),e(En,Mh),e(Mh,JE),e(En,GE),e(En,zh),e(zh,XE),e(En,YE),e(Xt,ZE),w(na,Xt,null),e(Xt,e$),w(sa,Xt,null),_(o,wf,k),_(o,$n,k),e($n,aa),e(aa,Ch),w(ol,Ch,null),e($n,t$),e($n,jh),e(jh,o$),_(o,Ef,k),_(o,Ze,k),w(nl,Ze,null),e(Ze,n$),e(Ze,qh),e(qh,s$),e(Ze,a$),e(Ze,Ph),e(Ph,r$),e(Ze,i$),e(Ze,sl),e(sl,l$),e(sl,vc),e(vc,d$),e(sl,c$),e(Ze,p$),e(Ze,al),e(al,h$),e(al,rl),e(rl,m$),e(al,u$),e(Ze,f$),e(Ze,Ah),e(Ah,g$),e(Ze,_$),e(Ze,uo),e(uo,Oh),e(Oh,il),e(il,k$),e(uo,v$),e(uo,Lh),e(Lh,ll),e(ll,y$),e(uo,T$),e(uo,Nh),e(Nh,dl),e(dl,b$),e(uo,w$),e(uo,Ih),e(Ih,cl),e(cl,E$),e(Ze,$$),e(Ze,Yt),w(pl,Yt,null),e(Yt,F$),e(Yt,Fn),e(Fn,x$),e(Fn,Dh),e(Dh,M$),e(Fn,z$),e(Fn,Sh),e(Sh,C$),e(Fn,j$),e(Yt,q$),w(ra,Yt,null),e(Yt,P$),w(ia,Yt,null),_(o,$f,k),_(o,xn,k),e(xn,la),e(la,Wh),w(hl,Wh,null),e(xn,A$),e(xn,Uh),e(Uh,O$),_(o,Ff,k),_(o,at,k),w(ml,at,null),e(at,L$),e(at,Rh),e(Rh,N$),e(at,I$),e(at,ul),e(ul,D$),e(ul,yc),e(yc,S$),e(ul,W$),e(at,U$),e(at,fl),e(fl,R$),e(fl,gl),e(gl,H$),e(fl,K$),e(at,Q$),e(at,Hh),e(Hh,B$),e(at,V$),e(at,fo),e(fo,Kh),e(Kh,_l),e(_l,J$),e(fo,G$),e(fo,Qh),e(Qh,kl),e(kl,X$),e(fo,Y$),e(fo,Bh),e(Bh,vl),e(vl,Z$),e(fo,e1),e(fo,Vh),e(Vh,yl),e(yl,t1),e(at,o1),e(at,Zt),w(Tl,Zt,null),e(Zt,n1),e(Zt,Mn),e(Mn,s1),e(Mn,Jh),e(Jh,a1),e(Mn,r1),e(Mn,Gh),e(Gh,i1),e(Mn,l1),e(Zt,d1),w(da,Zt,null),e(Zt,c1),w(ca,Zt,null),_(o,xf,k),_(o,zn,k),e(zn,pa),e(pa,Xh),w(bl,Xh,null),e(zn,p1),e(zn,Yh),e(Yh,h1),_(o,Mf,k),_(o,rt,k),w(wl,rt,null),e(rt,m1),e(rt,El),e(El,u1),e(El,Zh),e(Zh,f1),e(El,g1),e(rt,_1),e(rt,$l),e($l,k1),e($l,Tc),e(Tc,v1),e($l,y1),e(rt,T1),e(rt,Fl),e(Fl,b1),e(Fl,xl),e(xl,w1),e(Fl,E1),e(rt,$1),e(rt,em),e(em,F1),e(rt,x1),e(rt,go),e(go,tm),e(tm,Ml),e(Ml,M1),e(go,z1),e(go,om),e(om,zl),e(zl,C1),e(go,j1),e(go,nm),e(nm,Cl),e(Cl,q1),e(go,P1),e(go,sm),e(sm,jl),e(jl,A1),e(rt,O1),e(rt,eo),w(ql,eo,null),e(eo,L1),e(eo,Cn),e(Cn,N1),e(Cn,am),e(am,I1),e(Cn,D1),e(Cn,rm),e(rm,S1),e(Cn,W1),e(eo,U1),w(ha,eo,null),e(eo,R1),w(ma,eo,null),_(o,zf,k),_(o,jn,k),e(jn,ua),e(ua,im),w(Pl,im,null),e(jn,H1),e(jn,lm),e(lm,K1),_(o,Cf,k),_(o,it,k),w(Al,it,null),e(it,Q1),e(it,dm),e(dm,B1),e(it,V1),e(it,Ol),e(Ol,J1),e(Ol,bc),e(bc,G1),e(Ol,X1),e(it,Y1),e(it,Ll),e(Ll,Z1),e(Ll,Nl),e(Nl,e2),e(Ll,t2),e(it,o2),e(it,cm),e(cm,n2),e(it,s2),e(it,_o),e(_o,pm),e(pm,Il),e(Il,a2),e(_o,r2),e(_o,hm),e(hm,Dl),e(Dl,i2),e(_o,l2),e(_o,mm),e(mm,Sl),e(Sl,d2),e(_o,c2),e(_o,um),e(um,Wl),e(Wl,p2),e(it,h2),e(it,to),w(Ul,to,null),e(to,m2),e(to,qn),e(qn,u2),e(qn,fm),e(fm,f2),e(qn,g2),e(qn,gm),e(gm,_2),e(qn,k2),e(to,v2),w(fa,to,null),e(to,y2),w(ga,to,null),_(o,jf,k),_(o,Pn,k),e(Pn,_a),e(_a,_m),w(Rl,_m,null),e(Pn,T2),e(Pn,km),e(km,b2),_(o,qf,k),_(o,lt,k),w(Hl,lt,null),e(lt,w2),e(lt,vm),e(vm,E2),e(lt,$2),e(lt,Kl),e(Kl,F2),e(Kl,wc),e(wc,x2),e(Kl,M2),e(lt,z2),e(lt,Ql),e(Ql,C2),e(Ql,Bl),e(Bl,j2),e(Ql,q2),e(lt,P2),e(lt,ym),e(ym,A2),e(lt,O2),e(lt,ko),e(ko,Tm),e(Tm,Vl),e(Vl,L2),e(ko,N2),e(ko,bm),e(bm,Jl),e(Jl,I2),e(ko,D2),e(ko,wm),e(wm,Gl),e(Gl,S2),e(ko,W2),e(ko,Em),e(Em,Xl),e(Xl,U2),e(lt,R2),e(lt,oo),w(Yl,oo,null),e(oo,H2),e(oo,An),e(An,K2),e(An,$m),e($m,Q2),e(An,B2),e(An,Fm),e(Fm,V2),e(An,J2),e(oo,G2),w(ka,oo,null),e(oo,X2),w(va,oo,null),_(o,Pf,k),_(o,On,k),e(On,ya),e(ya,xm),w(Zl,xm,null),e(On,Y2),e(On,Mm),e(Mm,Z2),_(o,Af,k),_(o,et,k),w(ed,et,null),e(et,eF),e(et,zm),e(zm,tF),e(et,oF),e(et,Cm),e(Cm,nF),e(et,sF),e(et,td),e(td,aF),e(td,Ec),e(Ec,rF),e(td,iF),e(et,lF),e(et,od),e(od,dF),e(od,nd),e(nd,cF),e(od,pF),e(et,hF),e(et,jm),e(jm,mF),e(et,uF),e(et,vo),e(vo,qm),e(qm,sd),e(sd,fF),e(vo,gF),e(vo,Pm),e(Pm,ad),e(ad,_F),e(vo,kF),e(vo,Am),e(Am,rd),e(rd,vF),e(vo,yF),e(vo,Om),e(Om,id),e(id,TF),e(et,bF),e(et,no),w(ld,no,null),e(no,wF),e(no,Ln),e(Ln,EF),e(Ln,Lm),e(Lm,$F),e(Ln,FF),e(Ln,Nm),e(Nm,xF),e(Ln,MF),e(no,zF),w(Ta,no,null),e(no,CF),w(ba,no,null),_(o,Of,k),_(o,Nn,k),e(Nn,wa),e(wa,Im),w(dd,Im,null),e(Nn,jF),e(Nn,Dm),e(Dm,qF),_(o,Lf,k),_(o,dt,k),w(cd,dt,null),e(dt,PF),e(dt,In),e(In,AF),e(In,Sm),e(Sm,OF),e(In,LF),e(In,Wm),e(Wm,NF),e(In,IF),e(dt,DF),e(dt,pd),e(pd,SF),e(pd,$c),e($c,WF),e(pd,UF),e(dt,RF),e(dt,hd),e(hd,HF),e(hd,md),e(md,KF),e(hd,QF),e(dt,BF),e(dt,Um),e(Um,VF),e(dt,JF),e(dt,yo),e(yo,Rm),e(Rm,ud),e(ud,GF),e(yo,XF),e(yo,Hm),e(Hm,fd),e(fd,YF),e(yo,ZF),e(yo,Km),e(Km,gd),e(gd,e0),e(yo,t0),e(yo,Qm),e(Qm,_d),e(_d,o0),e(dt,n0),e(dt,so),w(kd,so,null),e(so,s0),e(so,Dn),e(Dn,a0),e(Dn,Bm),e(Bm,r0),e(Dn,i0),e(Dn,Vm),e(Vm,l0),e(Dn,d0),e(so,c0),w(Ea,so,null),e(so,p0),w($a,so,null),Nf=!0},p(o,[k]){const vd={};k&2&&(vd.$$scope={dirty:k,ctx:o}),Un.$set(vd);const Jm={};k&2&&(Jm.$$scope={dirty:k,ctx:o}),Jn.$set(Jm);const Gm={};k&2&&(Gm.$$scope={dirty:k,ctx:o}),Gn.$set(Gm);const Xm={};k&2&&(Xm.$$scope={dirty:k,ctx:o}),Yn.$set(Xm);const yd={};k&2&&(yd.$$scope={dirty:k,ctx:o}),Zn.$set(yd);const Ym={};k&2&&(Ym.$$scope={dirty:k,ctx:o}),ts.$set(Ym);const Zm={};k&2&&(Zm.$$scope={dirty:k,ctx:o}),os.$set(Zm);const eu={};k&2&&(eu.$$scope={dirty:k,ctx:o}),ss.$set(eu);const Td={};k&2&&(Td.$$scope={dirty:k,ctx:o}),as.$set(Td);const tu={};k&2&&(tu.$$scope={dirty:k,ctx:o}),rs.$set(tu);const ou={};k&2&&(ou.$$scope={dirty:k,ctx:o}),ls.$set(ou);const nu={};k&2&&(nu.$$scope={dirty:k,ctx:o}),ds.$set(nu);const su={};k&2&&(su.$$scope={dirty:k,ctx:o}),cs.$set(su);const au={};k&2&&(au.$$scope={dirty:k,ctx:o}),ps.$set(au);const bd={};k&2&&(bd.$$scope={dirty:k,ctx:o}),hs.$set(bd);const ru={};k&2&&(ru.$$scope={dirty:k,ctx:o}),us.$set(ru);const To={};k&2&&(To.$$scope={dirty:k,ctx:o}),fs.$set(To);const iu={};k&2&&(iu.$$scope={dirty:k,ctx:o}),_s.$set(iu);const lu={};k&2&&(lu.$$scope={dirty:k,ctx:o}),ks.$set(lu);const du={};k&2&&(du.$$scope={dirty:k,ctx:o}),vs.$set(du);const Sn={};k&2&&(Sn.$$scope={dirty:k,ctx:o}),Ts.$set(Sn);const cu={};k&2&&(cu.$$scope={dirty:k,ctx:o}),bs.$set(cu);const pu={};k&2&&(pu.$$scope={dirty:k,ctx:o}),ws.$set(pu);const wd={};k&2&&(wd.$$scope={dirty:k,ctx:o}),$s.$set(wd);const hu={};k&2&&(hu.$$scope={dirty:k,ctx:o}),Fs.$set(hu);const mu={};k&2&&(mu.$$scope={dirty:k,ctx:o}),xs.$set(mu);const uu={};k&2&&(uu.$$scope={dirty:k,ctx:o}),zs.$set(uu);const bo={};k&2&&(bo.$$scope={dirty:k,ctx:o}),Cs.$set(bo);const wo={};k&2&&(wo.$$scope={dirty:k,ctx:o}),js.$set(wo);const fu={};k&2&&(fu.$$scope={dirty:k,ctx:o}),Ps.$set(fu);const gu={};k&2&&(gu.$$scope={dirty:k,ctx:o}),As.$set(gu);const _u={};k&2&&(_u.$$scope={dirty:k,ctx:o}),Os.$set(_u);const Wn={};k&2&&(Wn.$$scope={dirty:k,ctx:o}),Ls.$set(Wn);const ku={};k&2&&(ku.$$scope={dirty:k,ctx:o}),Is.$set(ku);const vu={};k&2&&(vu.$$scope={dirty:k,ctx:o}),Ds.$set(vu);const Ed={};k&2&&(Ed.$$scope={dirty:k,ctx:o}),Ss.$set(Ed);const yu={};k&2&&(yu.$$scope={dirty:k,ctx:o}),Ws.$set(yu);const Tu={};k&2&&(Tu.$$scope={dirty:k,ctx:o}),Rs.$set(Tu);const bu={};k&2&&(bu.$$scope={dirty:k,ctx:o}),Hs.$set(bu);const Eo={};k&2&&(Eo.$$scope={dirty:k,ctx:o}),Ks.$set(Eo);const wu={};k&2&&(wu.$$scope={dirty:k,ctx:o}),Bs.$set(wu);const Fa={};k&2&&(Fa.$$scope={dirty:k,ctx:o}),Vs.$set(Fa);const Eu={};k&2&&(Eu.$$scope={dirty:k,ctx:o}),Js.$set(Eu);const $u={};k&2&&($u.$$scope={dirty:k,ctx:o}),Gs.$set($u);const $d={};k&2&&($d.$$scope={dirty:k,ctx:o}),Ys.$set($d);const Fu={};k&2&&(Fu.$$scope={dirty:k,ctx:o}),Zs.$set(Fu);const Fd={};k&2&&(Fd.$$scope={dirty:k,ctx:o}),ea.$set(Fd);const xu={};k&2&&(xu.$$scope={dirty:k,ctx:o}),ta.$set(xu);const Mu={};k&2&&(Mu.$$scope={dirty:k,ctx:o}),na.$set(Mu);const zu={};k&2&&(zu.$$scope={dirty:k,ctx:o}),sa.$set(zu);const $o={};k&2&&($o.$$scope={dirty:k,ctx:o}),ra.$set($o);const xd={};k&2&&(xd.$$scope={dirty:k,ctx:o}),ia.$set(xd);const Cu={};k&2&&(Cu.$$scope={dirty:k,ctx:o}),da.$set(Cu);const xa={};k&2&&(xa.$$scope={dirty:k,ctx:o}),ca.$set(xa);const ju={};k&2&&(ju.$$scope={dirty:k,ctx:o}),ha.$set(ju);const qu={};k&2&&(qu.$$scope={dirty:k,ctx:o}),ma.$set(qu);const Md={};k&2&&(Md.$$scope={dirty:k,ctx:o}),fa.$set(Md);const Pu={};k&2&&(Pu.$$scope={dirty:k,ctx:o}),ga.$set(Pu);const zd={};k&2&&(zd.$$scope={dirty:k,ctx:o}),ka.$set(zd);const Au={};k&2&&(Au.$$scope={dirty:k,ctx:o}),va.$set(Au);const Ou={};k&2&&(Ou.$$scope={dirty:k,ctx:o}),Ta.$set(Ou);const Lu={};k&2&&(Lu.$$scope={dirty:k,ctx:o}),ba.$set(Lu);const Cd={};k&2&&(Cd.$$scope={dirty:k,ctx:o}),Ea.$set(Cd);const jd={};k&2&&(jd.$$scope={dirty:k,ctx:o}),$a.$set(jd)},i(o){Nf||(E(l.$$.fragment,o),E(M.$$.fragment,o),E(We.$$.fragment,o),E(Ue.$$.fragment,o),E(Un.$$.fragment,o),E(Xa.$$.fragment,o),E(Ya.$$.fragment,o),E(er.$$.fragment,o),E(tr.$$.fragment,o),E(sr.$$.fragment,o),E(ar.$$.fragment,o),E(ir.$$.fragment,o),E(dr.$$.fragment,o),E(cr.$$.fragment,o),E(ur.$$.fragment,o),E(Jn.$$.fragment,o),E(Gn.$$.fragment,o),E(fr.$$.fragment,o),E(gr.$$.fragment,o),E(yr.$$.fragment,o),E(Yn.$$.fragment,o),E(Zn.$$.fragment,o),E(Tr.$$.fragment,o),E(br.$$.fragment,o),E(xr.$$.fragment,o),E(ts.$$.fragment,o),E(os.$$.fragment,o),E(Mr.$$.fragment,o),E(zr.$$.fragment,o),E(Pr.$$.fragment,o),E(ss.$$.fragment,o),E(as.$$.fragment,o),E(rs.$$.fragment,o),E(Ar.$$.fragment,o),E(Or.$$.fragment,o),E(Dr.$$.fragment,o),E(ls.$$.fragment,o),E(ds.$$.fragment,o),E(cs.$$.fragment,o),E(ps.$$.fragment,o),E(hs.$$.fragment,o),E(Sr.$$.fragment,o),E(Wr.$$.fragment,o),E(Kr.$$.fragment,o),E(us.$$.fragment,o),E(fs.$$.fragment,o),E(Qr.$$.fragment,o),E(Br.$$.fragment,o),E(Xr.$$.fragment,o),E(_s.$$.fragment,o),E(ks.$$.fragment,o),E(vs.$$.fragment,o),E(Yr.$$.fragment,o),E(Zr.$$.fragment,o),E(ni.$$.fragment,o),E(Ts.$$.fragment,o),E(bs.$$.fragment,o),E(ws.$$.fragment,o),E(si.$$.fragment,o),E(ai.$$.fragment,o),E($s.$$.fragment,o),E(di.$$.fragment,o),E(Fs.$$.fragment,o),E(xs.$$.fragment,o),E(ci.$$.fragment,o),E(pi.$$.fragment,o),E(zs.$$.fragment,o),E(fi.$$.fragment,o),E(Cs.$$.fragment,o),E(js.$$.fragment,o),E(gi.$$.fragment,o),E(_i.$$.fragment,o),E(Ps.$$.fragment,o),E(Ti.$$.fragment,o),E(As.$$.fragment,o),E(Os.$$.fragment,o),E(Ls.$$.fragment,o),E(bi.$$.fragment,o),E(wi.$$.fragment,o),E(Is.$$.fragment,o),E(xi.$$.fragment,o),E(Ds.$$.fragment,o),E(Ss.$$.fragment,o),E(Ws.$$.fragment,o),E(Mi.$$.fragment,o),E(zi.$$.fragment,o),E(Rs.$$.fragment,o),E(Pi.$$.fragment,o),E(Hs.$$.fragment,o),E(Ks.$$.fragment,o),E(Ai.$$.fragment,o),E(Oi.$$.fragment,o),E(Bs.$$.fragment,o),E(Di.$$.fragment,o),E(Vs.$$.fragment,o),E(Js.$$.fragment,o),E(Gs.$$.fragment,o),E(Si.$$.fragment,o),E(Wi.$$.fragment,o),E(Ys.$$.fragment,o),E(Ki.$$.fragment,o),E(Zs.$$.fragment,o),E(ea.$$.fragment,o),E(ta.$$.fragment,o),E(Qi.$$.fragment,o),E(Bi.$$.fragment,o),E(tl.$$.fragment,o),E(na.$$.fragment,o),E(sa.$$.fragment,o),E(ol.$$.fragment,o),E(nl.$$.fragment,o),E(pl.$$.fragment,o),E(ra.$$.fragment,o),E(ia.$$.fragment,o),E(hl.$$.fragment,o),E(ml.$$.fragment,o),E(Tl.$$.fragment,o),E(da.$$.fragment,o),E(ca.$$.fragment,o),E(bl.$$.fragment,o),E(wl.$$.fragment,o),E(ql.$$.fragment,o),E(ha.$$.fragment,o),E(ma.$$.fragment,o),E(Pl.$$.fragment,o),E(Al.$$.fragment,o),E(Ul.$$.fragment,o),E(fa.$$.fragment,o),E(ga.$$.fragment,o),E(Rl.$$.fragment,o),E(Hl.$$.fragment,o),E(Yl.$$.fragment,o),E(ka.$$.fragment,o),E(va.$$.fragment,o),E(Zl.$$.fragment,o),E(ed.$$.fragment,o),E(ld.$$.fragment,o),E(Ta.$$.fragment,o),E(ba.$$.fragment,o),E(dd.$$.fragment,o),E(cd.$$.fragment,o),E(kd.$$.fragment,o),E(Ea.$$.fragment,o),E($a.$$.fragment,o),Nf=!0)},o(o){$(l.$$.fragment,o),$(M.$$.fragment,o),$(We.$$.fragment,o),$(Ue.$$.fragment,o),$(Un.$$.fragment,o),$(Xa.$$.fragment,o),$(Ya.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(sr.$$.fragment,o),$(ar.$$.fragment,o),$(ir.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(ur.$$.fragment,o),$(Jn.$$.fragment,o),$(Gn.$$.fragment,o),$(fr.$$.fragment,o),$(gr.$$.fragment,o),$(yr.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(Tr.$$.fragment,o),$(br.$$.fragment,o),$(xr.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$(Pr.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(Ar.$$.fragment,o),$(Or.$$.fragment,o),$(Dr.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(Sr.$$.fragment,o),$(Wr.$$.fragment,o),$(Kr.$$.fragment,o),$(us.$$.fragment,o),$(fs.$$.fragment,o),$(Qr.$$.fragment,o),$(Br.$$.fragment,o),$(Xr.$$.fragment,o),$(_s.$$.fragment,o),$(ks.$$.fragment,o),$(vs.$$.fragment,o),$(Yr.$$.fragment,o),$(Zr.$$.fragment,o),$(ni.$$.fragment,o),$(Ts.$$.fragment,o),$(bs.$$.fragment,o),$(ws.$$.fragment,o),$(si.$$.fragment,o),$(ai.$$.fragment,o),$($s.$$.fragment,o),$(di.$$.fragment,o),$(Fs.$$.fragment,o),$(xs.$$.fragment,o),$(ci.$$.fragment,o),$(pi.$$.fragment,o),$(zs.$$.fragment,o),$(fi.$$.fragment,o),$(Cs.$$.fragment,o),$(js.$$.fragment,o),$(gi.$$.fragment,o),$(_i.$$.fragment,o),$(Ps.$$.fragment,o),$(Ti.$$.fragment,o),$(As.$$.fragment,o),$(Os.$$.fragment,o),$(Ls.$$.fragment,o),$(bi.$$.fragment,o),$(wi.$$.fragment,o),$(Is.$$.fragment,o),$(xi.$$.fragment,o),$(Ds.$$.fragment,o),$(Ss.$$.fragment,o),$(Ws.$$.fragment,o),$(Mi.$$.fragment,o),$(zi.$$.fragment,o),$(Rs.$$.fragment,o),$(Pi.$$.fragment,o),$(Hs.$$.fragment,o),$(Ks.$$.fragment,o),$(Ai.$$.fragment,o),$(Oi.$$.fragment,o),$(Bs.$$.fragment,o),$(Di.$$.fragment,o),$(Vs.$$.fragment,o),$(Js.$$.fragment,o),$(Gs.$$.fragment,o),$(Si.$$.fragment,o),$(Wi.$$.fragment,o),$(Ys.$$.fragment,o),$(Ki.$$.fragment,o),$(Zs.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(Qi.$$.fragment,o),$(Bi.$$.fragment,o),$(tl.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(ol.$$.fragment,o),$(nl.$$.fragment,o),$(pl.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),$(hl.$$.fragment,o),$(ml.$$.fragment,o),$(Tl.$$.fragment,o),$(da.$$.fragment,o),$(ca.$$.fragment,o),$(bl.$$.fragment,o),$(wl.$$.fragment,o),$(ql.$$.fragment,o),$(ha.$$.fragment,o),$(ma.$$.fragment,o),$(Pl.$$.fragment,o),$(Al.$$.fragment,o),$(Ul.$$.fragment,o),$(fa.$$.fragment,o),$(ga.$$.fragment,o),$(Rl.$$.fragment,o),$(Hl.$$.fragment,o),$(Yl.$$.fragment,o),$(ka.$$.fragment,o),$(va.$$.fragment,o),$(Zl.$$.fragment,o),$(ed.$$.fragment,o),$(ld.$$.fragment,o),$(Ta.$$.fragment,o),$(ba.$$.fragment,o),$(dd.$$.fragment,o),$(cd.$$.fragment,o),$(kd.$$.fragment,o),$(Ea.$$.fragment,o),$($a.$$.fragment,o),Nf=!1},d(o){t(d),o&&t(g),o&&t(c),F(l),o&&t(fe),o&&t(S),F(M),o&&t(ge),o&&t(U),o&&t(_e),o&&t(H),o&&t(ke),o&&t(K),o&&t(oe),o&&t(q),o&&t(ve),o&&t(R),o&&t(ye),o&&t(D),o&&t(y),o&&t(C),F(We),o&&t(Qe),o&&t(de),F(Ue),F(Un),o&&t(Nu),o&&t(Do),F(Xa),o&&t(Iu),o&&t(Ut),F(Ya),o&&t(Du),o&&t(So),F(er),o&&t(Su),o&&t(Rt),F(tr),o&&t(Wu),o&&t(Wo),F(sr),o&&t(Uu),o&&t(Uo),F(ar),o&&t(Ru),o&&t(Ro),F(ir),o&&t(Hu),o&&t(Ho),F(dr),o&&t(Ku),o&&t(yt),F(cr),F(ur),F(Jn),F(Gn),o&&t(Qu),o&&t(Qo),F(fr),o&&t(Bu),o&&t(pt),F(gr),F(yr),F(Yn),F(Zn),o&&t(Vu),o&&t(Vo),F(Tr),o&&t(Ju),o&&t(Tt),F(br),F(xr),F(ts),F(os),o&&t(Gu),o&&t(Go),F(Mr),o&&t(Xu),o&&t(ht),F(zr),F(Pr),F(ss),F(as),F(rs),o&&t(Yu),o&&t(Yo),F(Ar),o&&t(Zu),o&&t(bt),F(Or),F(Dr),F(ls),F(ds),F(cs),F(ps),F(hs),o&&t(ef),o&&t(en),F(Sr),o&&t(tf),o&&t(wt),F(Wr),F(Kr),F(us),F(fs),o&&t(of),o&&t(on),F(Qr),o&&t(nf),o&&t(mt),F(Br),F(Xr),F(_s),F(ks),F(vs),o&&t(sf),o&&t(sn),F(Yr),o&&t(af),o&&t(Et),F(Zr),F(ni),F(Ts),F(bs),F(ws),o&&t(rf),o&&t(ln),F(si),o&&t(lf),o&&t(ut),F(ai),F($s),F(di),F(Fs),F(xs),o&&t(df),o&&t(cn),F(ci),o&&t(cf),o&&t(tt),F(pi),F(zs),F(fi),F(Cs),F(js),o&&t(pf),o&&t(hn),F(gi),o&&t(hf),o&&t(ot),F(_i),F(Ps),F(Ti),F(As),F(Os),F(Ls),o&&t(mf),o&&t(un),F(bi),o&&t(uf),o&&t(ft),F(wi),F(Is),F(xi),F(Ds),F(Ss),F(Ws),o&&t(ff),o&&t(gn),F(Mi),o&&t(gf),o&&t(gt),F(zi),F(Rs),F(Pi),F(Hs),F(Ks),o&&t(_f),o&&t(kn),F(Ai),o&&t(kf),o&&t(nt),F(Oi),F(Bs),F(Di),F(Vs),F(Js),F(Gs),o&&t(vf),o&&t(yn),F(Si),o&&t(yf),o&&t(_t),F(Wi),F(Ys),F(Ki),F(Zs),F(ea),F(ta),o&&t(Tf),o&&t(wn),F(Qi),o&&t(bf),o&&t(st),F(Bi),F(tl),F(na),F(sa),o&&t(wf),o&&t($n),F(ol),o&&t(Ef),o&&t(Ze),F(nl),F(pl),F(ra),F(ia),o&&t($f),o&&t(xn),F(hl),o&&t(Ff),o&&t(at),F(ml),F(Tl),F(da),F(ca),o&&t(xf),o&&t(zn),F(bl),o&&t(Mf),o&&t(rt),F(wl),F(ql),F(ha),F(ma),o&&t(zf),o&&t(jn),F(Pl),o&&t(Cf),o&&t(it),F(Al),F(Ul),F(fa),F(ga),o&&t(jf),o&&t(Pn),F(Rl),o&&t(qf),o&&t(lt),F(Hl),F(Yl),F(ka),F(va),o&&t(Pf),o&&t(On),F(Zl),o&&t(Af),o&&t(et),F(ed),F(ld),F(Ta),F(ba),o&&t(Of),o&&t(Nn),F(dd),o&&t(Lf),o&&t(dt),F(cd),F(kd),F(Ea),F($a)}}}const xj={local:"electra",sections:[{local:"overview",title:"Overview"},{local:"transformers.ElectraConfig",title:"ElectraConfig"},{local:"transformers.ElectraTokenizer",title:"ElectraTokenizer"},{local:"transformers.ElectraTokenizerFast",title:"ElectraTokenizerFast"},{local:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",title:"Electra specific outputs"},{local:"transformers.ElectraModel",title:"ElectraModel"},{local:"transformers.ElectraForPreTraining",title:"ElectraForPreTraining"},{local:"transformers.ElectraForCausalLM",title:"ElectraForCausalLM"},{local:"transformers.ElectraForMaskedLM",title:"ElectraForMaskedLM"},{local:"transformers.ElectraForSequenceClassification",title:"ElectraForSequenceClassification"},{local:"transformers.ElectraForMultipleChoice",title:"ElectraForMultipleChoice"},{local:"transformers.ElectraForTokenClassification",title:"ElectraForTokenClassification"},{local:"transformers.ElectraForQuestionAnswering",title:"ElectraForQuestionAnswering"},{local:"transformers.TFElectraModel",title:"TFElectraModel"},{local:"transformers.TFElectraForPreTraining",title:"TFElectraForPreTraining"},{local:"transformers.TFElectraForMaskedLM",title:"TFElectraForMaskedLM"},{local:"transformers.TFElectraForSequenceClassification",title:"TFElectraForSequenceClassification"},{local:"transformers.TFElectraForMultipleChoice",title:"TFElectraForMultipleChoice"},{local:"transformers.TFElectraForTokenClassification",title:"TFElectraForTokenClassification"},{local:"transformers.TFElectraForQuestionAnswering",title:"TFElectraForQuestionAnswering"},{local:"transformers.FlaxElectraModel",title:"FlaxElectraModel"},{local:"transformers.FlaxElectraForPreTraining",title:"FlaxElectraForPreTraining"},{local:"transformers.FlaxElectraForCausalLM",title:"FlaxElectraForCausalLM"},{local:"transformers.FlaxElectraForMaskedLM",title:"FlaxElectraForMaskedLM"},{local:"transformers.FlaxElectraForSequenceClassification",title:"FlaxElectraForSequenceClassification"},{local:"transformers.FlaxElectraForMultipleChoice",title:"FlaxElectraForMultipleChoice"},{local:"transformers.FlaxElectraForTokenClassification",title:"FlaxElectraForTokenClassification"},{local:"transformers.FlaxElectraForQuestionAnswering",title:"FlaxElectraForQuestionAnswering"}],title:"ELECTRA"};function Mj(x){return fC(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Oj extends pC{constructor(d){super();hC(this,d,Mj,Fj,mC,{})}}export{Oj as default,xj as metadata};
