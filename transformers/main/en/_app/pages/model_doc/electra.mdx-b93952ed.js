import{S as Pz,i as Az,s as Oz,e as n,k as c,w as b,t as r,M as Lz,c as s,d as t,m as p,a,x as y,h as i,b as f,F as e,g as k,y as E,q as w,o as $,B as F,v as Nz,L as de}from"../../chunks/vendor-6b77c823.js";import{T as Ee}from"../../chunks/Tip-39098574.js";import{D as I}from"../../chunks/Docstring-1088f2fb.js";import{C as ce}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as $e}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as le}from"../../chunks/ExampleCodeBlock-5212b321.js";function Iz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraModel, ElectraConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=r("Examples:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Examples:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Sz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Dz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Wz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Uz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraForPreTraining, ElectraTokenizerFast
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
[<span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>]`}}),{c(){d=n("p"),g=r("Examples:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Examples:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Rz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Hz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForCausalLM, ElectraConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Qz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Bz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Vz(x){let d,g;return d=new ce({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.22</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Kz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Jz(x){let d,g,h,m,_;return m=new ce({props:{code:`import torch
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of single-label classification:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example of single-label classification:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Gz(x){let d,g;return d=new ce({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = ElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.06</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Xz(x){let d,g,h,m,_;return m=new ce({props:{code:`import torch
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of multi-label classification:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example of multi-label classification:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Yz(x){let d,g;return d=new ce({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Zz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function e4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function t4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function o4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForTokenClassification
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
[<span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;B-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function n4(x){let d,g;return d=new ce({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.11</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function s4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function a4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function r4(x){let d,g;return d=new ce({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">2.64</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function i4(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,S,oe,fe,D,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),S=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ie=r(" or "),H=n("code"),Te=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),C=s(v,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=a(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var be=a(D);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(v),j=s(v,"UL",{});var A=a(j);P=s(A,"LI",{});var B=a(P);ae=i(B,"a single Tensor with "),R=s(B,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=a(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),q=s(A,"LI",{});var V=a(q);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=a(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var ye=a(Q);ve=i(ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ye.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),k(v,J,z),k(v,C,z),e(C,ee),e(C,S),e(S,oe),e(C,fe),e(C,D),e(D,ge),e(C,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ie),e(q,H),e(H,Te),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(C),v&&t(K),v&&t(O),v&&t(X),v&&t(j)}}}function l4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function d4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function c4(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,S,oe,fe,D,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),S=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ie=r(" or "),H=n("code"),Te=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),C=s(v,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=a(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var be=a(D);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(v),j=s(v,"UL",{});var A=a(j);P=s(A,"LI",{});var B=a(P);ae=i(B,"a single Tensor with "),R=s(B,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=a(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),q=s(A,"LI",{});var V=a(q);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=a(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var ye=a(Q);ve=i(ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ye.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),k(v,J,z),k(v,C,z),e(C,ee),e(C,S),e(S,oe),e(C,fe),e(C,D),e(D,ge),e(C,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ie),e(q,H),e(H,Te),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(C),v&&t(K),v&&t(O),v&&t(X),v&&t(j)}}}function p4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function h4(x){let d,g,h,m,_;return m=new ce({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>scores = outputs[<span class="hljs-number">0</span>]`}}),{c(){d=n("p"),g=r("Examples:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Examples:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function m4(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,S,oe,fe,D,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),S=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ie=r(" or "),H=n("code"),Te=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),C=s(v,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=a(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var be=a(D);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(v),j=s(v,"UL",{});var A=a(j);P=s(A,"LI",{});var B=a(P);ae=i(B,"a single Tensor with "),R=s(B,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=a(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),q=s(A,"LI",{});var V=a(q);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=a(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var ye=a(Q);ve=i(ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ye.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),k(v,J,z),k(v,C,z),e(C,ee),e(C,S),e(S,oe),e(C,fe),e(C,D),e(D,ge),e(C,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ie),e(q,H),e(H,Te),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(C),v&&t(K),v&&t(O),v&&t(X),v&&t(j)}}}function u4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function f4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function g4(x){let d,g;return d=new ce({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">1.22</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function _4(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,S,oe,fe,D,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),S=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ie=r(" or "),H=n("code"),Te=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),C=s(v,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=a(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var be=a(D);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(v),j=s(v,"UL",{});var A=a(j);P=s(A,"LI",{});var B=a(P);ae=i(B,"a single Tensor with "),R=s(B,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=a(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),q=s(A,"LI",{});var V=a(q);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=a(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var ye=a(Q);ve=i(ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ye.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),k(v,J,z),k(v,C,z),e(C,ee),e(C,S),e(S,oe),e(C,fe),e(C,D),e(D,ge),e(C,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ie),e(q,H),e(H,Te),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(C),v&&t(K),v&&t(O),v&&t(X),v&&t(j)}}}function k4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function T4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForSequenceClassification
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function v4(x){let d,g;return d=new ce({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.06</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function b4(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,S,oe,fe,D,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),S=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ie=r(" or "),H=n("code"),Te=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),C=s(v,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=a(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var be=a(D);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(v),j=s(v,"UL",{});var A=a(j);P=s(A,"LI",{});var B=a(P);ae=i(B,"a single Tensor with "),R=s(B,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=a(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),q=s(A,"LI",{});var V=a(q);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=a(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var ye=a(Q);ve=i(ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ye.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),k(v,J,z),k(v,C,z),e(C,ee),e(C,S),e(S,oe),e(C,fe),e(C,D),e(D,ge),e(C,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ie),e(q,H),e(H,Te),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(C),v&&t(K),v&&t(O),v&&t(X),v&&t(j)}}}function y4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function E4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function w4(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,S,oe,fe,D,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),S=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ie=r(" or "),H=n("code"),Te=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),C=s(v,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=a(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var be=a(D);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(v),j=s(v,"UL",{});var A=a(j);P=s(A,"LI",{});var B=a(P);ae=i(B,"a single Tensor with "),R=s(B,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=a(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),q=s(A,"LI",{});var V=a(q);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=a(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var ye=a(Q);ve=i(ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ye.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),k(v,J,z),k(v,C,z),e(C,ee),e(C,S),e(S,oe),e(C,fe),e(C,D),e(D,ge),e(C,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ie),e(q,H),e(H,Te),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(C),v&&t(K),v&&t(O),v&&t(X),v&&t(j)}}}function $4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function F4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForTokenClassification
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
[<span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;B-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function x4(x){let d,g;return d=new ce({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.11</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function M4(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,S,oe,fe,D,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ie,H,Te,G,L,se,Q,ve;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),S=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ie=r(" or "),H=n("code"),Te=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ve=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(v),m=s(v,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(v),C=s(v,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=a(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var be=a(D);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(v),O=s(v,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(v),j=s(v,"UL",{});var A=a(j);P=s(A,"LI",{});var B=a(P);ae=i(B,"a single Tensor with "),R=s(B,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(B," only and nothing else: "),W=s(B,"CODE",{});var we=a(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),B.forEach(t),me=p(A),q=s(A,"LI",{});var V=a(q);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(V," or "),H=s(V,"CODE",{});var Me=a(H);Te=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var ye=a(Q);ve=i(ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ye.forEach(t),Z.forEach(t),A.forEach(t)},m(v,z){k(v,d,z),e(d,g),k(v,h,z),k(v,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),k(v,J,z),k(v,C,z),e(C,ee),e(C,S),e(S,oe),e(C,fe),e(C,D),e(D,ge),e(C,pe),k(v,K,z),k(v,O,z),e(O,ne),k(v,X,z),k(v,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ie),e(q,H),e(H,Te),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,ve)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(C),v&&t(K),v&&t(O),v&&t(X),v&&t(j)}}}function z4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function C4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function j4(x){let d,g;return d=new ce({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">2.64</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function q4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function P4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraModel

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraModel.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraModel.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function A4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function O4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForPreTraining

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForPreTraining.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function L4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function N4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMaskedLM

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForMaskedLM.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function I4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function S4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForSequenceClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForSequenceClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function D4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function W4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function U4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function R4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForTokenClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForTokenClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function H4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Q4(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function B4(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,S,oe,fe,D,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ie,H,Te,G,L,se,Q,ve,v,z,Y,Fe,ze,N,xe,be,Ce,A,B,je,we,V,qe,Me,Z,ye,uc,ya,dg,fc,cg,Qm,vt,Ea,pg,Ht,hg,Kl,mg,ug,Jl,fg,gg,wa,_g,kg,Tg,go,vg,Gl,bg,yg,Xl,Eg,wg,$g,kn,Bm,_o,Tn,gc,$a,Fg,_c,xg,Vm,bt,Fa,Mg,kc,zg,Cg,vn,Yl,jg,qg,Zl,Pg,Ag,Og,xa,Lg,ed,Ng,Ig,Km,ko,bn,Tc,Ma,Sg,vc,Dg,Jm,yt,za,Wg,Ca,Ug,bc,Rg,Hg,Qg,yn,td,Bg,Vg,od,Kg,Jg,Gg,ja,Xg,nd,Yg,Zg,Gm,To,En,yc,qa,e_,Ec,t_,Xm,vo,Pa,o_,Aa,n_,sd,s_,a_,Ym,bo,Oa,r_,La,i_,ad,l_,d_,Zm,yo,wn,wc,Na,c_,$c,p_,eu,Ze,Ia,h_,Fc,m_,u_,Sa,f_,rd,g_,__,k_,Da,T_,Wa,v_,b_,y_,Et,Ua,E_,Eo,w_,id,$_,F_,xc,x_,M_,z_,$n,C_,Fn,tu,wo,xn,Mc,Ra,j_,zc,q_,ou,He,Ha,P_,Cc,A_,O_,jc,L_,N_,Qa,I_,ld,S_,D_,W_,Ba,U_,Va,R_,H_,Q_,wt,Ka,B_,$o,V_,dd,K_,J_,qc,G_,X_,Y_,Mn,Z_,zn,nu,Fo,Cn,Pc,Ja,ek,Ac,tk,su,et,Ga,ok,Xa,nk,Oc,sk,ak,rk,Ya,ik,cd,lk,dk,ck,Za,pk,er,hk,mk,uk,$t,tr,fk,xo,gk,pd,_k,kk,Lc,Tk,vk,bk,jn,yk,qn,au,Mo,Pn,Nc,or,Ek,Ic,wk,ru,Qe,nr,$k,Sc,Fk,xk,Dc,Mk,zk,sr,Ck,hd,jk,qk,Pk,ar,Ak,rr,Ok,Lk,Nk,st,ir,Ik,zo,Sk,md,Dk,Wk,Wc,Uk,Rk,Hk,An,Qk,On,Bk,Ln,iu,Co,Nn,Uc,lr,Vk,Rc,Kk,lu,tt,dr,Jk,Hc,Gk,Xk,cr,Yk,ud,Zk,eT,tT,pr,oT,hr,nT,sT,aT,Re,mr,rT,jo,iT,fd,lT,dT,Qc,cT,pT,hT,In,mT,Sn,uT,Dn,fT,Wn,gT,Un,du,qo,Rn,Bc,ur,_T,Vc,kT,cu,ot,fr,TT,Kc,vT,bT,gr,yT,gd,ET,wT,$T,_r,FT,kr,xT,MT,zT,Ft,Tr,CT,Po,jT,_d,qT,PT,Jc,AT,OT,LT,Hn,NT,Qn,pu,Ao,Bn,Gc,vr,IT,Xc,ST,hu,Be,br,DT,Yc,WT,UT,Zc,RT,HT,yr,QT,kd,BT,VT,KT,Er,JT,wr,GT,XT,YT,at,$r,ZT,Oo,ev,Td,tv,ov,ep,nv,sv,av,Vn,rv,Kn,iv,Jn,mu,Lo,Gn,tp,Fr,lv,op,dv,uu,nt,xr,cv,No,pv,np,hv,mv,sp,uv,fv,gv,Mr,_v,vd,kv,Tv,vv,zr,bv,Cr,yv,Ev,wv,rt,jr,$v,Io,Fv,bd,xv,Mv,ap,zv,Cv,jv,Xn,qv,Yn,Pv,Zn,fu,So,es,rp,qr,Av,ip,Ov,gu,Ve,Pr,Lv,lp,Nv,Iv,Ar,Sv,yd,Dv,Wv,Uv,Or,Rv,Lr,Hv,Qv,Bv,ts,Vv,xt,Nr,Kv,Do,Jv,Ed,Gv,Xv,dp,Yv,Zv,eb,os,tb,ns,_u,Wo,ss,cp,Ir,ob,pp,nb,ku,Oe,Sr,sb,hp,ab,rb,mp,ib,lb,Dr,db,wd,cb,pb,hb,Wr,mb,Ur,ub,fb,gb,as,_b,Mt,Rr,kb,Uo,Tb,$d,vb,bb,up,yb,Eb,wb,rs,$b,is,Tu,Ro,ls,fp,Hr,Fb,gp,xb,vu,Le,Qr,Mb,_p,zb,Cb,kp,jb,qb,Br,Pb,Fd,Ab,Ob,Lb,Vr,Nb,Kr,Ib,Sb,Db,ds,Wb,it,Jr,Ub,Ho,Rb,xd,Hb,Qb,Tp,Bb,Vb,Kb,cs,Jb,ps,Gb,hs,bu,Qo,ms,vp,Gr,Xb,bp,Yb,yu,Ke,Xr,Zb,yp,ey,ty,Yr,oy,Md,ny,sy,ay,Zr,ry,ei,iy,ly,dy,us,cy,lt,ti,py,Bo,hy,zd,my,uy,Ep,fy,gy,_y,fs,ky,gs,Ty,_s,Eu,Vo,ks,wp,oi,vy,$p,by,wu,Je,ni,yy,Fp,Ey,wy,si,$y,Cd,Fy,xy,My,ai,zy,ri,Cy,jy,qy,Ts,Py,zt,ii,Ay,Ko,Oy,jd,Ly,Ny,xp,Iy,Sy,Dy,vs,Wy,bs,$u,Jo,ys,Mp,li,Uy,zp,Ry,Fu,Ne,di,Hy,Cp,Qy,By,jp,Vy,Ky,ci,Jy,qd,Gy,Xy,Yy,pi,Zy,hi,eE,tE,oE,Es,nE,dt,mi,sE,Go,aE,Pd,rE,iE,qp,lE,dE,cE,ws,pE,$s,hE,Fs,xu,Xo,xs,Pp,ui,mE,Ap,uE,Mu,Ge,fi,fE,Yo,gE,Op,_E,kE,Lp,TE,vE,bE,gi,yE,Ad,EE,wE,$E,_i,FE,ki,xE,ME,zE,Ms,CE,ct,Ti,jE,Zo,qE,Od,PE,AE,Np,OE,LE,NE,zs,IE,Cs,SE,js,zu,en,qs,Ip,vi,DE,Sp,WE,Cu,Ie,bi,UE,Dp,RE,HE,yi,QE,Ld,BE,VE,KE,Ei,JE,wi,GE,XE,YE,Wp,ZE,ew,Qt,Up,$i,tw,ow,Rp,Fi,nw,sw,Hp,xi,aw,rw,Qp,Mi,iw,lw,Ct,zi,dw,tn,cw,Bp,pw,hw,Vp,mw,uw,fw,Ps,gw,As,ju,on,Os,Kp,Ci,_w,Jp,kw,qu,Pe,ji,Tw,Gp,vw,bw,Xp,yw,Ew,qi,ww,Nd,$w,Fw,xw,Pi,Mw,Ai,zw,Cw,jw,Yp,qw,Pw,Bt,Zp,Oi,Aw,Ow,eh,Li,Lw,Nw,th,Ni,Iw,Sw,oh,Ii,Dw,Ww,jt,Si,Uw,nn,Rw,nh,Hw,Qw,sh,Bw,Vw,Kw,Ls,Jw,Ns,Pu,sn,Is,ah,Di,Gw,rh,Xw,Au,Se,Wi,Yw,Ui,Zw,ih,e$,t$,o$,Ri,n$,Id,s$,a$,r$,Hi,i$,Qi,l$,d$,c$,lh,p$,h$,Vt,dh,Bi,m$,u$,ch,Vi,f$,g$,ph,Ki,_$,k$,hh,Ji,T$,v$,qt,Gi,b$,an,y$,mh,E$,w$,uh,$$,F$,x$,Ss,M$,Ds,Ou,rn,Ws,fh,Xi,z$,gh,C$,Lu,De,Yi,j$,_h,q$,P$,Zi,A$,Sd,O$,L$,N$,el,I$,tl,S$,D$,W$,kh,U$,R$,Kt,Th,ol,H$,Q$,vh,nl,B$,V$,bh,sl,K$,J$,yh,al,G$,X$,Pt,rl,Y$,ln,Z$,Eh,e1,t1,wh,o1,n1,s1,Us,a1,Rs,Nu,dn,Hs,$h,il,r1,Fh,i1,Iu,We,ll,l1,xh,d1,c1,dl,p1,Dd,h1,m1,u1,cl,f1,pl,g1,_1,k1,Mh,T1,v1,Jt,zh,hl,b1,y1,Ch,ml,E1,w1,jh,ul,$1,F1,qh,fl,x1,M1,At,gl,z1,cn,C1,Ph,j1,q1,Ah,P1,A1,O1,Qs,L1,Bs,Su,pn,Vs,Oh,_l,N1,Lh,I1,Du,Ae,kl,S1,Nh,D1,W1,Ih,U1,R1,Tl,H1,Wd,Q1,B1,V1,vl,K1,bl,J1,G1,X1,Sh,Y1,Z1,Gt,Dh,yl,e2,t2,Wh,El,o2,n2,Uh,wl,s2,a2,Rh,$l,r2,i2,Ot,Fl,l2,hn,d2,Hh,c2,p2,Qh,h2,m2,u2,Ks,f2,Js,Wu,mn,Gs,Bh,xl,g2,Vh,_2,Uu,Ue,Ml,k2,un,T2,Kh,v2,b2,Jh,y2,E2,w2,zl,$2,Ud,F2,x2,M2,Cl,z2,jl,C2,j2,q2,Gh,P2,A2,Xt,Xh,ql,O2,L2,Yh,Pl,N2,I2,Zh,Al,S2,D2,em,Ol,W2,U2,Lt,Ll,R2,fn,H2,tm,Q2,B2,om,V2,K2,J2,Xs,G2,Ys,Ru;return l=new $e({}),oe=new $e({}),ya=new $e({}),Ea=new I({props:{name:"class transformers.ElectraConfig",anchor:"transformers.ElectraConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 256"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 1024"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = 'gelu'"},{name:"summary_last_dropout",val:" = 0.1"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ElectraConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/configuration_electra.py#L38"}}),kn=new le({props:{anchor:"transformers.ElectraConfig.example",$$slots:{default:[Iz]},$$scope:{ctx:x}}}),$a=new $e({}),Fa=new I({props:{name:"class transformers.ElectraTokenizer",anchor:"transformers.ElectraTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/tokenization_electra.py#L52"}}),Ma=new $e({}),za=new I({props:{name:"class transformers.ElectraTokenizerFast",anchor:"transformers.ElectraTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/tokenization_electra_fast.py#L61"}}),qa=new $e({}),Pa=new I({props:{name:"class transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L692"}}),Oa=new I({props:{name:"class transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>tf.Tensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L805"}}),Na=new $e({}),Ia=new I({props:{name:"class transformers.ElectraModel",anchor:"transformers.ElectraModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L804"}}),Ua=new I({props:{name:"forward",anchor:"transformers.ElectraModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L831",returnDescription:`
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
`}}),$n=new Ee({props:{$$slots:{default:[Sz]},$$scope:{ctx:x}}}),Fn=new le({props:{anchor:"transformers.ElectraModel.forward.example",$$slots:{default:[Dz]},$$scope:{ctx:x}}}),Ra=new $e({}),Ha=new I({props:{name:"class transformers.ElectraForPreTraining",anchor:"transformers.ElectraForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1055"}}),Ka=new I({props:{name:"forward",anchor:"transformers.ElectraForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1064",returnDescription:`
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
`}}),Mn=new Ee({props:{$$slots:{default:[Wz]},$$scope:{ctx:x}}}),zn=new le({props:{anchor:"transformers.ElectraForPreTraining.forward.example",$$slots:{default:[Uz]},$$scope:{ctx:x}}}),Ja=new $e({}),Ga=new I({props:{name:"class transformers.ElectraForCausalLM",anchor:"transformers.ElectraForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1530"}}),tr=new I({props:{name:"forward",anchor:"transformers.ElectraForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1549",returnDescription:`
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
`}}),jn=new Ee({props:{$$slots:{default:[Rz]},$$scope:{ctx:x}}}),qn=new le({props:{anchor:"transformers.ElectraForCausalLM.forward.example",$$slots:{default:[Hz]},$$scope:{ctx:x}}}),or=new $e({}),nr=new I({props:{name:"class transformers.ElectraForMaskedLM",anchor:"transformers.ElectraForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1161"}}),ir=new I({props:{name:"forward",anchor:"transformers.ElectraForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1178",returnDescription:`
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
`}}),An=new Ee({props:{$$slots:{default:[Qz]},$$scope:{ctx:x}}}),On=new le({props:{anchor:"transformers.ElectraForMaskedLM.forward.example",$$slots:{default:[Bz]},$$scope:{ctx:x}}}),Ln=new le({props:{anchor:"transformers.ElectraForMaskedLM.forward.example-2",$$slots:{default:[Vz]},$$scope:{ctx:x}}}),lr=new $e({}),dr=new I({props:{name:"class transformers.ElectraForSequenceClassification",anchor:"transformers.ElectraForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L956"}}),mr=new I({props:{name:"forward",anchor:"transformers.ElectraForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L967",returnDescription:`
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
`}}),In=new Ee({props:{$$slots:{default:[Kz]},$$scope:{ctx:x}}}),Sn=new le({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example",$$slots:{default:[Jz]},$$scope:{ctx:x}}}),Dn=new le({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-2",$$slots:{default:[Gz]},$$scope:{ctx:x}}}),Wn=new le({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-3",$$slots:{default:[Xz]},$$scope:{ctx:x}}}),Un=new le({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-4",$$slots:{default:[Yz]},$$scope:{ctx:x}}}),ur=new $e({}),fr=new I({props:{name:"class transformers.ElectraForMultipleChoice",anchor:"transformers.ElectraForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1442"}}),Tr=new I({props:{name:"forward",anchor:"transformers.ElectraForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1453",returnDescription:`
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
`}}),Hn=new Ee({props:{$$slots:{default:[Zz]},$$scope:{ctx:x}}}),Qn=new le({props:{anchor:"transformers.ElectraForMultipleChoice.forward.example",$$slots:{default:[e4]},$$scope:{ctx:x}}}),vr=new $e({}),br=new I({props:{name:"class transformers.ElectraForTokenClassification",anchor:"transformers.ElectraForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1251"}}),$r=new I({props:{name:"forward",anchor:"transformers.ElectraForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1265",returnDescription:`
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
`}}),Vn=new Ee({props:{$$slots:{default:[t4]},$$scope:{ctx:x}}}),Kn=new le({props:{anchor:"transformers.ElectraForTokenClassification.forward.example",$$slots:{default:[o4]},$$scope:{ctx:x}}}),Jn=new le({props:{anchor:"transformers.ElectraForTokenClassification.forward.example-2",$$slots:{default:[n4]},$$scope:{ctx:x}}}),Fr=new $e({}),xr=new I({props:{name:"class transformers.ElectraForQuestionAnswering",anchor:"transformers.ElectraForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1333"}}),jr=new I({props:{name:"forward",anchor:"transformers.ElectraForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_electra.py#L1347",returnDescription:`
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
`}}),Xn=new Ee({props:{$$slots:{default:[s4]},$$scope:{ctx:x}}}),Yn=new le({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example",$$slots:{default:[a4]},$$scope:{ctx:x}}}),Zn=new le({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example-2",$$slots:{default:[r4]},$$scope:{ctx:x}}}),qr=new $e({}),Pr=new I({props:{name:"class transformers.TFElectraModel",anchor:"transformers.TFElectraModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L925"}}),ts=new Ee({props:{$$slots:{default:[i4]},$$scope:{ctx:x}}}),Nr=new I({props:{name:"call",anchor:"transformers.TFElectraModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L931",returnDescription:`
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
`}}),os=new Ee({props:{$$slots:{default:[l4]},$$scope:{ctx:x}}}),ns=new le({props:{anchor:"transformers.TFElectraModel.call.example",$$slots:{default:[d4]},$$scope:{ctx:x}}}),Ir=new $e({}),Sr=new I({props:{name:"class transformers.TFElectraForPreTraining",anchor:"transformers.TFElectraForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1022"}}),as=new Ee({props:{$$slots:{default:[c4]},$$scope:{ctx:x}}}),Rr=new I({props:{name:"call",anchor:"transformers.TFElectraForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1029",returnDescription:`
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
`}}),rs=new Ee({props:{$$slots:{default:[p4]},$$scope:{ctx:x}}}),is=new le({props:{anchor:"transformers.TFElectraForPreTraining.call.example",$$slots:{default:[h4]},$$scope:{ctx:x}}}),Hr=new $e({}),Qr=new I({props:{name:"class transformers.TFElectraForMaskedLM",anchor:"transformers.TFElectraForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1137"}}),ds=new Ee({props:{$$slots:{default:[m4]},$$scope:{ctx:x}}}),Jr=new I({props:{name:"call",anchor:"transformers.TFElectraForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1159",returnDescription:`
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
`}}),cs=new Ee({props:{$$slots:{default:[u4]},$$scope:{ctx:x}}}),ps=new le({props:{anchor:"transformers.TFElectraForMaskedLM.call.example",$$slots:{default:[f4]},$$scope:{ctx:x}}}),hs=new le({props:{anchor:"transformers.TFElectraForMaskedLM.call.example-2",$$slots:{default:[g4]},$$scope:{ctx:x}}}),Gr=new $e({}),Xr=new I({props:{name:"class transformers.TFElectraForSequenceClassification",anchor:"transformers.TFElectraForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1264"}}),us=new Ee({props:{$$slots:{default:[_4]},$$scope:{ctx:x}}}),ti=new I({props:{name:"call",anchor:"transformers.TFElectraForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1271",returnDescription:`
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
`}}),fs=new Ee({props:{$$slots:{default:[k4]},$$scope:{ctx:x}}}),gs=new le({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example",$$slots:{default:[T4]},$$scope:{ctx:x}}}),_s=new le({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example-2",$$slots:{default:[v4]},$$scope:{ctx:x}}}),oi=new $e({}),ni=new I({props:{name:"class transformers.TFElectraForMultipleChoice",anchor:"transformers.TFElectraForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1343"}}),Ts=new Ee({props:{$$slots:{default:[b4]},$$scope:{ctx:x}}}),ii=new I({props:{name:"call",anchor:"transformers.TFElectraForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1365",returnDescription:`
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
`}}),vs=new Ee({props:{$$slots:{default:[y4]},$$scope:{ctx:x}}}),bs=new le({props:{anchor:"transformers.TFElectraForMultipleChoice.call.example",$$slots:{default:[E4]},$$scope:{ctx:x}}}),li=new $e({}),di=new I({props:{name:"class transformers.TFElectraForTokenClassification",anchor:"transformers.TFElectraForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1469"}}),Es=new Ee({props:{$$slots:{default:[w4]},$$scope:{ctx:x}}}),mi=new I({props:{name:"call",anchor:"transformers.TFElectraForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1482",returnDescription:`
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
`}}),ws=new Ee({props:{$$slots:{default:[$4]},$$scope:{ctx:x}}}),$s=new le({props:{anchor:"transformers.TFElectraForTokenClassification.call.example",$$slots:{default:[F4]},$$scope:{ctx:x}}}),Fs=new le({props:{anchor:"transformers.TFElectraForTokenClassification.call.example-2",$$slots:{default:[x4]},$$scope:{ctx:x}}}),ui=new $e({}),fi=new I({props:{name:"class transformers.TFElectraForQuestionAnswering",anchor:"transformers.TFElectraForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1554"}}),Ms=new Ee({props:{$$slots:{default:[M4]},$$scope:{ctx:x}}}),Ti=new I({props:{name:"call",anchor:"transformers.TFElectraForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_tf_electra.py#L1564",returnDescription:`
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
`}}),zs=new Ee({props:{$$slots:{default:[z4]},$$scope:{ctx:x}}}),Cs=new le({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example",$$slots:{default:[C4]},$$scope:{ctx:x}}}),js=new le({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example-2",$$slots:{default:[j4]},$$scope:{ctx:x}}}),vi=new $e({}),bi=new I({props:{name:"class transformers.FlaxElectraModel",anchor:"transformers.FlaxElectraModel",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L674"}}),zi=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L576",returnDescription:`
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
`}}),Ps=new Ee({props:{$$slots:{default:[q4]},$$scope:{ctx:x}}}),As=new le({props:{anchor:"transformers.FlaxElectraModel.__call__.example",$$slots:{default:[P4]},$$scope:{ctx:x}}}),Ci=new $e({}),ji=new I({props:{name:"class transformers.FlaxElectraForPreTraining",anchor:"transformers.FlaxElectraForPreTraining",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L823"}}),Si=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L576",returnDescription:`
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
`}}),Ls=new Ee({props:{$$slots:{default:[A4]},$$scope:{ctx:x}}}),Ns=new le({props:{anchor:"transformers.FlaxElectraForPreTraining.__call__.example",$$slots:{default:[O4]},$$scope:{ctx:x}}}),Di=new $e({}),Wi=new I({props:{name:"class transformers.FlaxElectraForMaskedLM",anchor:"transformers.FlaxElectraForMaskedLM",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L760"}}),Gi=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L576",returnDescription:`
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
`}}),Ss=new Ee({props:{$$slots:{default:[L4]},$$scope:{ctx:x}}}),Ds=new le({props:{anchor:"transformers.FlaxElectraForMaskedLM.__call__.example",$$slots:{default:[N4]},$$scope:{ctx:x}}}),Xi=new $e({}),Yi=new I({props:{name:"class transformers.FlaxElectraForSequenceClassification",anchor:"transformers.FlaxElectraForSequenceClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1224"}}),rl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L576",returnDescription:`
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
`}}),Us=new Ee({props:{$$slots:{default:[I4]},$$scope:{ctx:x}}}),Rs=new le({props:{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.example",$$slots:{default:[S4]},$$scope:{ctx:x}}}),il=new $e({}),ll=new I({props:{name:"class transformers.FlaxElectraForMultipleChoice",anchor:"transformers.FlaxElectraForMultipleChoice",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1060"}}),gl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L576",returnDescription:`
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
`}}),Qs=new Ee({props:{$$slots:{default:[D4]},$$scope:{ctx:x}}}),Bs=new le({props:{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.example",$$slots:{default:[W4]},$$scope:{ctx:x}}}),_l=new $e({}),kl=new I({props:{name:"class transformers.FlaxElectraForTokenClassification",anchor:"transformers.FlaxElectraForTokenClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L915"}}),Fl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L576",returnDescription:`
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
`}}),Ks=new Ee({props:{$$slots:{default:[U4]},$$scope:{ctx:x}}}),Js=new le({props:{anchor:"transformers.FlaxElectraForTokenClassification.__call__.example",$$slots:{default:[R4]},$$scope:{ctx:x}}}),xl=new $e({}),Ml=new I({props:{name:"class transformers.FlaxElectraForQuestionAnswering",anchor:"transformers.FlaxElectraForQuestionAnswering",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L1133"}}),Ll=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/electra/modeling_flax_electra.py#L576",returnDescription:`
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
`}}),Xs=new Ee({props:{$$slots:{default:[H4]},$$scope:{ctx:x}}}),Ys=new le({props:{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.example",$$slots:{default:[Q4]},$$scope:{ctx:x}}}),{c(){d=n("meta"),g=c(),h=n("h1"),m=n("a"),_=n("span"),b(l.$$.fragment),u=c(),M=n("span"),ue=r("ELECTRA"),J=c(),C=n("h2"),ee=n("a"),S=n("span"),b(oe.$$.fragment),fe=c(),D=n("span"),ge=r("Overview"),pe=c(),K=n("p"),O=r("The ELECTRA model was proposed in the paper "),ne=n("a"),X=r(`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
Generators`),j=r(`. ELECTRA is a new pretraining approach which trains two
transformer models: the generator and the discriminator. The generator\u2019s role is to replace tokens in a sequence, and
is therefore trained as a masked language model. The discriminator, which is the model we\u2019re interested in, tries to
identify which tokens were replaced by the generator in the sequence.`),P=c(),ae=n("p"),R=r("The abstract from the paper is the following:"),he=c(),re=n("p"),W=n("em"),_e=r(`Masked language modeling (MLM) pretraining methods such as BERT corrupt the input by replacing some tokens with [MASK]
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
using the same amount of compute.`),me=c(),q=n("p"),ke=r("Tips:"),U=c(),te=n("ul"),ie=n("li"),H=r(`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),Te=c(),G=n("li"),L=r("The ELECTRA checkpoints saved using "),se=n("a"),Q=r("Google Research\u2019s implementation"),ve=r(`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),v=n("a"),z=r("ElectraForMaskedLM"),Y=r(` model, and the generator may be loaded in the
`),Fe=n("a"),ze=r("ElectraForPreTraining"),N=r(` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),xe=c(),be=n("p"),Ce=r("This model was contributed by "),A=n("a"),B=r("lysandre"),je=r(". The original code can be found "),we=n("a"),V=r("here"),qe=r("."),Me=c(),Z=n("h2"),ye=n("a"),uc=n("span"),b(ya.$$.fragment),dg=c(),fc=n("span"),cg=r("ElectraConfig"),Qm=c(),vt=n("div"),b(Ea.$$.fragment),pg=c(),Ht=n("p"),hg=r("This is the configuration class to store the configuration of a "),Kl=n("a"),mg=r("ElectraModel"),ug=r(" or a "),Jl=n("a"),fg=r("TFElectraModel"),gg=r(`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),wa=n("a"),_g=r("google/electra-small-discriminator"),kg=r(" architecture."),Tg=c(),go=n("p"),vg=r("Configuration objects inherit from "),Gl=n("a"),bg=r("PretrainedConfig"),yg=r(` and can be used to control the model outputs. Read the
documentation from `),Xl=n("a"),Eg=r("PretrainedConfig"),wg=r(" for more information."),$g=c(),b(kn.$$.fragment),Bm=c(),_o=n("h2"),Tn=n("a"),gc=n("span"),b($a.$$.fragment),Fg=c(),_c=n("span"),xg=r("ElectraTokenizer"),Vm=c(),bt=n("div"),b(Fa.$$.fragment),Mg=c(),kc=n("p"),zg=r("Construct an ELECTRA tokenizer."),Cg=c(),vn=n("p"),Yl=n("a"),jg=r("ElectraTokenizer"),qg=r(" is identical to "),Zl=n("a"),Pg=r("BertTokenizer"),Ag=r(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Og=c(),xa=n("p"),Lg=r("Refer to superclass "),ed=n("a"),Ng=r("BertTokenizer"),Ig=r(" for usage examples and documentation concerning parameters."),Km=c(),ko=n("h2"),bn=n("a"),Tc=n("span"),b(Ma.$$.fragment),Sg=c(),vc=n("span"),Dg=r("ElectraTokenizerFast"),Jm=c(),yt=n("div"),b(za.$$.fragment),Wg=c(),Ca=n("p"),Ug=r("Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),bc=n("em"),Rg=r("tokenizers"),Hg=r(" library)."),Qg=c(),yn=n("p"),td=n("a"),Bg=r("ElectraTokenizerFast"),Vg=r(" is identical to "),od=n("a"),Kg=r("BertTokenizerFast"),Jg=r(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Gg=c(),ja=n("p"),Xg=r("Refer to superclass "),nd=n("a"),Yg=r("BertTokenizerFast"),Zg=r(" for usage examples and documentation concerning parameters."),Gm=c(),To=n("h2"),En=n("a"),yc=n("span"),b(qa.$$.fragment),e_=c(),Ec=n("span"),t_=r("Electra specific outputs"),Xm=c(),vo=n("div"),b(Pa.$$.fragment),o_=c(),Aa=n("p"),n_=r("Output type of "),sd=n("a"),s_=r("ElectraForPreTraining"),a_=r("."),Ym=c(),bo=n("div"),b(Oa.$$.fragment),r_=c(),La=n("p"),i_=r("Output type of "),ad=n("a"),l_=r("TFElectraForPreTraining"),d_=r("."),Zm=c(),yo=n("h2"),wn=n("a"),wc=n("span"),b(Na.$$.fragment),c_=c(),$c=n("span"),p_=r("ElectraModel"),eu=c(),Ze=n("div"),b(Ia.$$.fragment),h_=c(),Fc=n("p"),m_=r("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),u_=c(),Sa=n("p"),f_=r("This model inherits from "),rd=n("a"),g_=r("PreTrainedModel"),__=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),k_=c(),Da=n("p"),T_=r("This model is also a PyTorch "),Wa=n("a"),v_=r("torch.nn.Module"),b_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),y_=c(),Et=n("div"),b(Ua.$$.fragment),E_=c(),Eo=n("p"),w_=r("The "),id=n("a"),$_=r("ElectraModel"),F_=r(" forward method, overrides the "),xc=n("code"),x_=r("__call__"),M_=r(" special method."),z_=c(),b($n.$$.fragment),C_=c(),b(Fn.$$.fragment),tu=c(),wo=n("h2"),xn=n("a"),Mc=n("span"),b(Ra.$$.fragment),j_=c(),zc=n("span"),q_=r("ElectraForPreTraining"),ou=c(),He=n("div"),b(Ha.$$.fragment),P_=c(),Cc=n("p"),A_=r("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),O_=c(),jc=n("p"),L_=r("It is recommended to load the discriminator checkpoint into that model."),N_=c(),Qa=n("p"),I_=r("This model inherits from "),ld=n("a"),S_=r("PreTrainedModel"),D_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W_=c(),Ba=n("p"),U_=r("This model is also a PyTorch "),Va=n("a"),R_=r("torch.nn.Module"),H_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Q_=c(),wt=n("div"),b(Ka.$$.fragment),B_=c(),$o=n("p"),V_=r("The "),dd=n("a"),K_=r("ElectraForPreTraining"),J_=r(" forward method, overrides the "),qc=n("code"),G_=r("__call__"),X_=r(" special method."),Y_=c(),b(Mn.$$.fragment),Z_=c(),b(zn.$$.fragment),nu=c(),Fo=n("h2"),Cn=n("a"),Pc=n("span"),b(Ja.$$.fragment),ek=c(),Ac=n("span"),tk=r("ElectraForCausalLM"),su=c(),et=n("div"),b(Ga.$$.fragment),ok=c(),Xa=n("p"),nk=r("ELECTRA Model with a "),Oc=n("code"),sk=r("language modeling"),ak=r(" head on top for CLM fine-tuning."),rk=c(),Ya=n("p"),ik=r("This model inherits from "),cd=n("a"),lk=r("PreTrainedModel"),dk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ck=c(),Za=n("p"),pk=r("This model is also a PyTorch "),er=n("a"),hk=r("torch.nn.Module"),mk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),uk=c(),$t=n("div"),b(tr.$$.fragment),fk=c(),xo=n("p"),gk=r("The "),pd=n("a"),_k=r("ElectraForCausalLM"),kk=r(" forward method, overrides the "),Lc=n("code"),Tk=r("__call__"),vk=r(" special method."),bk=c(),b(jn.$$.fragment),yk=c(),b(qn.$$.fragment),au=c(),Mo=n("h2"),Pn=n("a"),Nc=n("span"),b(or.$$.fragment),Ek=c(),Ic=n("span"),wk=r("ElectraForMaskedLM"),ru=c(),Qe=n("div"),b(nr.$$.fragment),$k=c(),Sc=n("p"),Fk=r("Electra model with a language modeling head on top."),xk=c(),Dc=n("p"),Mk=r(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),zk=c(),sr=n("p"),Ck=r("This model inherits from "),hd=n("a"),jk=r("PreTrainedModel"),qk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pk=c(),ar=n("p"),Ak=r("This model is also a PyTorch "),rr=n("a"),Ok=r("torch.nn.Module"),Lk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nk=c(),st=n("div"),b(ir.$$.fragment),Ik=c(),zo=n("p"),Sk=r("The "),md=n("a"),Dk=r("ElectraForMaskedLM"),Wk=r(" forward method, overrides the "),Wc=n("code"),Uk=r("__call__"),Rk=r(" special method."),Hk=c(),b(An.$$.fragment),Qk=c(),b(On.$$.fragment),Bk=c(),b(Ln.$$.fragment),iu=c(),Co=n("h2"),Nn=n("a"),Uc=n("span"),b(lr.$$.fragment),Vk=c(),Rc=n("span"),Kk=r("ElectraForSequenceClassification"),lu=c(),tt=n("div"),b(dr.$$.fragment),Jk=c(),Hc=n("p"),Gk=r(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Xk=c(),cr=n("p"),Yk=r("This model inherits from "),ud=n("a"),Zk=r("PreTrainedModel"),eT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tT=c(),pr=n("p"),oT=r("This model is also a PyTorch "),hr=n("a"),nT=r("torch.nn.Module"),sT=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),aT=c(),Re=n("div"),b(mr.$$.fragment),rT=c(),jo=n("p"),iT=r("The "),fd=n("a"),lT=r("ElectraForSequenceClassification"),dT=r(" forward method, overrides the "),Qc=n("code"),cT=r("__call__"),pT=r(" special method."),hT=c(),b(In.$$.fragment),mT=c(),b(Sn.$$.fragment),uT=c(),b(Dn.$$.fragment),fT=c(),b(Wn.$$.fragment),gT=c(),b(Un.$$.fragment),du=c(),qo=n("h2"),Rn=n("a"),Bc=n("span"),b(ur.$$.fragment),_T=c(),Vc=n("span"),kT=r("ElectraForMultipleChoice"),cu=c(),ot=n("div"),b(fr.$$.fragment),TT=c(),Kc=n("p"),vT=r(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),bT=c(),gr=n("p"),yT=r("This model inherits from "),gd=n("a"),ET=r("PreTrainedModel"),wT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$T=c(),_r=n("p"),FT=r("This model is also a PyTorch "),kr=n("a"),xT=r("torch.nn.Module"),MT=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zT=c(),Ft=n("div"),b(Tr.$$.fragment),CT=c(),Po=n("p"),jT=r("The "),_d=n("a"),qT=r("ElectraForMultipleChoice"),PT=r(" forward method, overrides the "),Jc=n("code"),AT=r("__call__"),OT=r(" special method."),LT=c(),b(Hn.$$.fragment),NT=c(),b(Qn.$$.fragment),pu=c(),Ao=n("h2"),Bn=n("a"),Gc=n("span"),b(vr.$$.fragment),IT=c(),Xc=n("span"),ST=r("ElectraForTokenClassification"),hu=c(),Be=n("div"),b(br.$$.fragment),DT=c(),Yc=n("p"),WT=r("Electra model with a token classification head on top."),UT=c(),Zc=n("p"),RT=r("Both the discriminator and generator may be loaded into this model."),HT=c(),yr=n("p"),QT=r("This model inherits from "),kd=n("a"),BT=r("PreTrainedModel"),VT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),KT=c(),Er=n("p"),JT=r("This model is also a PyTorch "),wr=n("a"),GT=r("torch.nn.Module"),XT=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),YT=c(),at=n("div"),b($r.$$.fragment),ZT=c(),Oo=n("p"),ev=r("The "),Td=n("a"),tv=r("ElectraForTokenClassification"),ov=r(" forward method, overrides the "),ep=n("code"),nv=r("__call__"),sv=r(" special method."),av=c(),b(Vn.$$.fragment),rv=c(),b(Kn.$$.fragment),iv=c(),b(Jn.$$.fragment),mu=c(),Lo=n("h2"),Gn=n("a"),tp=n("span"),b(Fr.$$.fragment),lv=c(),op=n("span"),dv=r("ElectraForQuestionAnswering"),uu=c(),nt=n("div"),b(xr.$$.fragment),cv=c(),No=n("p"),pv=r(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),np=n("code"),hv=r("span start logits"),mv=r(" and "),sp=n("code"),uv=r("span end logits"),fv=r(")."),gv=c(),Mr=n("p"),_v=r("This model inherits from "),vd=n("a"),kv=r("PreTrainedModel"),Tv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vv=c(),zr=n("p"),bv=r("This model is also a PyTorch "),Cr=n("a"),yv=r("torch.nn.Module"),Ev=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wv=c(),rt=n("div"),b(jr.$$.fragment),$v=c(),Io=n("p"),Fv=r("The "),bd=n("a"),xv=r("ElectraForQuestionAnswering"),Mv=r(" forward method, overrides the "),ap=n("code"),zv=r("__call__"),Cv=r(" special method."),jv=c(),b(Xn.$$.fragment),qv=c(),b(Yn.$$.fragment),Pv=c(),b(Zn.$$.fragment),fu=c(),So=n("h2"),es=n("a"),rp=n("span"),b(qr.$$.fragment),Av=c(),ip=n("span"),Ov=r("TFElectraModel"),gu=c(),Ve=n("div"),b(Pr.$$.fragment),Lv=c(),lp=n("p"),Nv=r("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),Iv=c(),Ar=n("p"),Sv=r("This model inherits from "),yd=n("a"),Dv=r("TFPreTrainedModel"),Wv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uv=c(),Or=n("p"),Rv=r("This model is also a "),Lr=n("a"),Hv=r("tf.keras.Model"),Qv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bv=c(),b(ts.$$.fragment),Vv=c(),xt=n("div"),b(Nr.$$.fragment),Kv=c(),Do=n("p"),Jv=r("The "),Ed=n("a"),Gv=r("TFElectraModel"),Xv=r(" forward method, overrides the "),dp=n("code"),Yv=r("__call__"),Zv=r(" special method."),eb=c(),b(os.$$.fragment),tb=c(),b(ns.$$.fragment),_u=c(),Wo=n("h2"),ss=n("a"),cp=n("span"),b(Ir.$$.fragment),ob=c(),pp=n("span"),nb=r("TFElectraForPreTraining"),ku=c(),Oe=n("div"),b(Sr.$$.fragment),sb=c(),hp=n("p"),ab=r("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),rb=c(),mp=n("p"),ib=r(`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),lb=c(),Dr=n("p"),db=r("This model inherits from "),wd=n("a"),cb=r("TFPreTrainedModel"),pb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hb=c(),Wr=n("p"),mb=r("This model is also a "),Ur=n("a"),ub=r("tf.keras.Model"),fb=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gb=c(),b(as.$$.fragment),_b=c(),Mt=n("div"),b(Rr.$$.fragment),kb=c(),Uo=n("p"),Tb=r("The "),$d=n("a"),vb=r("TFElectraForPreTraining"),bb=r(" forward method, overrides the "),up=n("code"),yb=r("__call__"),Eb=r(" special method."),wb=c(),b(rs.$$.fragment),$b=c(),b(is.$$.fragment),Tu=c(),Ro=n("h2"),ls=n("a"),fp=n("span"),b(Hr.$$.fragment),Fb=c(),gp=n("span"),xb=r("TFElectraForMaskedLM"),vu=c(),Le=n("div"),b(Qr.$$.fragment),Mb=c(),_p=n("p"),zb=r("Electra model with a language modeling head on top."),Cb=c(),kp=n("p"),jb=r(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),qb=c(),Br=n("p"),Pb=r("This model inherits from "),Fd=n("a"),Ab=r("TFPreTrainedModel"),Ob=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lb=c(),Vr=n("p"),Nb=r("This model is also a "),Kr=n("a"),Ib=r("tf.keras.Model"),Sb=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Db=c(),b(ds.$$.fragment),Wb=c(),it=n("div"),b(Jr.$$.fragment),Ub=c(),Ho=n("p"),Rb=r("The "),xd=n("a"),Hb=r("TFElectraForMaskedLM"),Qb=r(" forward method, overrides the "),Tp=n("code"),Bb=r("__call__"),Vb=r(" special method."),Kb=c(),b(cs.$$.fragment),Jb=c(),b(ps.$$.fragment),Gb=c(),b(hs.$$.fragment),bu=c(),Qo=n("h2"),ms=n("a"),vp=n("span"),b(Gr.$$.fragment),Xb=c(),bp=n("span"),Yb=r("TFElectraForSequenceClassification"),yu=c(),Ke=n("div"),b(Xr.$$.fragment),Zb=c(),yp=n("p"),ey=r(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ty=c(),Yr=n("p"),oy=r("This model inherits from "),Md=n("a"),ny=r("TFPreTrainedModel"),sy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ay=c(),Zr=n("p"),ry=r("This model is also a "),ei=n("a"),iy=r("tf.keras.Model"),ly=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dy=c(),b(us.$$.fragment),cy=c(),lt=n("div"),b(ti.$$.fragment),py=c(),Bo=n("p"),hy=r("The "),zd=n("a"),my=r("TFElectraForSequenceClassification"),uy=r(" forward method, overrides the "),Ep=n("code"),fy=r("__call__"),gy=r(" special method."),_y=c(),b(fs.$$.fragment),ky=c(),b(gs.$$.fragment),Ty=c(),b(_s.$$.fragment),Eu=c(),Vo=n("h2"),ks=n("a"),wp=n("span"),b(oi.$$.fragment),vy=c(),$p=n("span"),by=r("TFElectraForMultipleChoice"),wu=c(),Je=n("div"),b(ni.$$.fragment),yy=c(),Fp=n("p"),Ey=r(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),wy=c(),si=n("p"),$y=r("This model inherits from "),Cd=n("a"),Fy=r("TFPreTrainedModel"),xy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),My=c(),ai=n("p"),zy=r("This model is also a "),ri=n("a"),Cy=r("tf.keras.Model"),jy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qy=c(),b(Ts.$$.fragment),Py=c(),zt=n("div"),b(ii.$$.fragment),Ay=c(),Ko=n("p"),Oy=r("The "),jd=n("a"),Ly=r("TFElectraForMultipleChoice"),Ny=r(" forward method, overrides the "),xp=n("code"),Iy=r("__call__"),Sy=r(" special method."),Dy=c(),b(vs.$$.fragment),Wy=c(),b(bs.$$.fragment),$u=c(),Jo=n("h2"),ys=n("a"),Mp=n("span"),b(li.$$.fragment),Uy=c(),zp=n("span"),Ry=r("TFElectraForTokenClassification"),Fu=c(),Ne=n("div"),b(di.$$.fragment),Hy=c(),Cp=n("p"),Qy=r("Electra model with a token classification head on top."),By=c(),jp=n("p"),Vy=r("Both the discriminator and generator may be loaded into this model."),Ky=c(),ci=n("p"),Jy=r("This model inherits from "),qd=n("a"),Gy=r("TFPreTrainedModel"),Xy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yy=c(),pi=n("p"),Zy=r("This model is also a "),hi=n("a"),eE=r("tf.keras.Model"),tE=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),oE=c(),b(Es.$$.fragment),nE=c(),dt=n("div"),b(mi.$$.fragment),sE=c(),Go=n("p"),aE=r("The "),Pd=n("a"),rE=r("TFElectraForTokenClassification"),iE=r(" forward method, overrides the "),qp=n("code"),lE=r("__call__"),dE=r(" special method."),cE=c(),b(ws.$$.fragment),pE=c(),b($s.$$.fragment),hE=c(),b(Fs.$$.fragment),xu=c(),Xo=n("h2"),xs=n("a"),Pp=n("span"),b(ui.$$.fragment),mE=c(),Ap=n("span"),uE=r("TFElectraForQuestionAnswering"),Mu=c(),Ge=n("div"),b(fi.$$.fragment),fE=c(),Yo=n("p"),gE=r(`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Op=n("code"),_E=r("span start logits"),kE=r(" and "),Lp=n("code"),TE=r("span end logits"),vE=r(")."),bE=c(),gi=n("p"),yE=r("This model inherits from "),Ad=n("a"),EE=r("TFPreTrainedModel"),wE=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$E=c(),_i=n("p"),FE=r("This model is also a "),ki=n("a"),xE=r("tf.keras.Model"),ME=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zE=c(),b(Ms.$$.fragment),CE=c(),ct=n("div"),b(Ti.$$.fragment),jE=c(),Zo=n("p"),qE=r("The "),Od=n("a"),PE=r("TFElectraForQuestionAnswering"),AE=r(" forward method, overrides the "),Np=n("code"),OE=r("__call__"),LE=r(" special method."),NE=c(),b(zs.$$.fragment),IE=c(),b(Cs.$$.fragment),SE=c(),b(js.$$.fragment),zu=c(),en=n("h2"),qs=n("a"),Ip=n("span"),b(vi.$$.fragment),DE=c(),Sp=n("span"),WE=r("FlaxElectraModel"),Cu=c(),Ie=n("div"),b(bi.$$.fragment),UE=c(),Dp=n("p"),RE=r("The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),HE=c(),yi=n("p"),QE=r("This model inherits from "),Ld=n("a"),BE=r("FlaxPreTrainedModel"),VE=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),KE=c(),Ei=n("p"),JE=r(`This model is also a Flax Linen
`),wi=n("a"),GE=r("flax.nn.Module"),XE=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),YE=c(),Wp=n("p"),ZE=r("Finally, this model supports inherent JAX features such as:"),ew=c(),Qt=n("ul"),Up=n("li"),$i=n("a"),tw=r("Just-In-Time (JIT) compilation"),ow=c(),Rp=n("li"),Fi=n("a"),nw=r("Automatic Differentiation"),sw=c(),Hp=n("li"),xi=n("a"),aw=r("Vectorization"),rw=c(),Qp=n("li"),Mi=n("a"),iw=r("Parallelization"),lw=c(),Ct=n("div"),b(zi.$$.fragment),dw=c(),tn=n("p"),cw=r("The "),Bp=n("code"),pw=r("FlaxElectraPreTrainedModel"),hw=r(" forward method, overrides the "),Vp=n("code"),mw=r("__call__"),uw=r(" special method."),fw=c(),b(Ps.$$.fragment),gw=c(),b(As.$$.fragment),ju=c(),on=n("h2"),Os=n("a"),Kp=n("span"),b(Ci.$$.fragment),_w=c(),Jp=n("span"),kw=r("FlaxElectraForPreTraining"),qu=c(),Pe=n("div"),b(ji.$$.fragment),Tw=c(),Gp=n("p"),vw=r("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),bw=c(),Xp=n("p"),yw=r("It is recommended to load the discriminator checkpoint into that model."),Ew=c(),qi=n("p"),ww=r("This model inherits from "),Nd=n("a"),$w=r("FlaxPreTrainedModel"),Fw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xw=c(),Pi=n("p"),Mw=r(`This model is also a Flax Linen
`),Ai=n("a"),zw=r("flax.nn.Module"),Cw=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jw=c(),Yp=n("p"),qw=r("Finally, this model supports inherent JAX features such as:"),Pw=c(),Bt=n("ul"),Zp=n("li"),Oi=n("a"),Aw=r("Just-In-Time (JIT) compilation"),Ow=c(),eh=n("li"),Li=n("a"),Lw=r("Automatic Differentiation"),Nw=c(),th=n("li"),Ni=n("a"),Iw=r("Vectorization"),Sw=c(),oh=n("li"),Ii=n("a"),Dw=r("Parallelization"),Ww=c(),jt=n("div"),b(Si.$$.fragment),Uw=c(),nn=n("p"),Rw=r("The "),nh=n("code"),Hw=r("FlaxElectraPreTrainedModel"),Qw=r(" forward method, overrides the "),sh=n("code"),Bw=r("__call__"),Vw=r(" special method."),Kw=c(),b(Ls.$$.fragment),Jw=c(),b(Ns.$$.fragment),Pu=c(),sn=n("h2"),Is=n("a"),ah=n("span"),b(Di.$$.fragment),Gw=c(),rh=n("span"),Xw=r("FlaxElectraForMaskedLM"),Au=c(),Se=n("div"),b(Wi.$$.fragment),Yw=c(),Ui=n("p"),Zw=r("Electra Model with a "),ih=n("code"),e$=r("language modeling"),t$=r(" head on top."),o$=c(),Ri=n("p"),n$=r("This model inherits from "),Id=n("a"),s$=r("FlaxPreTrainedModel"),a$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),r$=c(),Hi=n("p"),i$=r(`This model is also a Flax Linen
`),Qi=n("a"),l$=r("flax.nn.Module"),d$=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),c$=c(),lh=n("p"),p$=r("Finally, this model supports inherent JAX features such as:"),h$=c(),Vt=n("ul"),dh=n("li"),Bi=n("a"),m$=r("Just-In-Time (JIT) compilation"),u$=c(),ch=n("li"),Vi=n("a"),f$=r("Automatic Differentiation"),g$=c(),ph=n("li"),Ki=n("a"),_$=r("Vectorization"),k$=c(),hh=n("li"),Ji=n("a"),T$=r("Parallelization"),v$=c(),qt=n("div"),b(Gi.$$.fragment),b$=c(),an=n("p"),y$=r("The "),mh=n("code"),E$=r("FlaxElectraPreTrainedModel"),w$=r(" forward method, overrides the "),uh=n("code"),$$=r("__call__"),F$=r(" special method."),x$=c(),b(Ss.$$.fragment),M$=c(),b(Ds.$$.fragment),Ou=c(),rn=n("h2"),Ws=n("a"),fh=n("span"),b(Xi.$$.fragment),z$=c(),gh=n("span"),C$=r("FlaxElectraForSequenceClassification"),Lu=c(),De=n("div"),b(Yi.$$.fragment),j$=c(),_h=n("p"),q$=r(`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),P$=c(),Zi=n("p"),A$=r("This model inherits from "),Sd=n("a"),O$=r("FlaxPreTrainedModel"),L$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),N$=c(),el=n("p"),I$=r(`This model is also a Flax Linen
`),tl=n("a"),S$=r("flax.nn.Module"),D$=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),W$=c(),kh=n("p"),U$=r("Finally, this model supports inherent JAX features such as:"),R$=c(),Kt=n("ul"),Th=n("li"),ol=n("a"),H$=r("Just-In-Time (JIT) compilation"),Q$=c(),vh=n("li"),nl=n("a"),B$=r("Automatic Differentiation"),V$=c(),bh=n("li"),sl=n("a"),K$=r("Vectorization"),J$=c(),yh=n("li"),al=n("a"),G$=r("Parallelization"),X$=c(),Pt=n("div"),b(rl.$$.fragment),Y$=c(),ln=n("p"),Z$=r("The "),Eh=n("code"),e1=r("FlaxElectraPreTrainedModel"),t1=r(" forward method, overrides the "),wh=n("code"),o1=r("__call__"),n1=r(" special method."),s1=c(),b(Us.$$.fragment),a1=c(),b(Rs.$$.fragment),Nu=c(),dn=n("h2"),Hs=n("a"),$h=n("span"),b(il.$$.fragment),r1=c(),Fh=n("span"),i1=r("FlaxElectraForMultipleChoice"),Iu=c(),We=n("div"),b(ll.$$.fragment),l1=c(),xh=n("p"),d1=r(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),c1=c(),dl=n("p"),p1=r("This model inherits from "),Dd=n("a"),h1=r("FlaxPreTrainedModel"),m1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),u1=c(),cl=n("p"),f1=r(`This model is also a Flax Linen
`),pl=n("a"),g1=r("flax.nn.Module"),_1=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),k1=c(),Mh=n("p"),T1=r("Finally, this model supports inherent JAX features such as:"),v1=c(),Jt=n("ul"),zh=n("li"),hl=n("a"),b1=r("Just-In-Time (JIT) compilation"),y1=c(),Ch=n("li"),ml=n("a"),E1=r("Automatic Differentiation"),w1=c(),jh=n("li"),ul=n("a"),$1=r("Vectorization"),F1=c(),qh=n("li"),fl=n("a"),x1=r("Parallelization"),M1=c(),At=n("div"),b(gl.$$.fragment),z1=c(),cn=n("p"),C1=r("The "),Ph=n("code"),j1=r("FlaxElectraPreTrainedModel"),q1=r(" forward method, overrides the "),Ah=n("code"),P1=r("__call__"),A1=r(" special method."),O1=c(),b(Qs.$$.fragment),L1=c(),b(Bs.$$.fragment),Su=c(),pn=n("h2"),Vs=n("a"),Oh=n("span"),b(_l.$$.fragment),N1=c(),Lh=n("span"),I1=r("FlaxElectraForTokenClassification"),Du=c(),Ae=n("div"),b(kl.$$.fragment),S1=c(),Nh=n("p"),D1=r("Electra model with a token classification head on top."),W1=c(),Ih=n("p"),U1=r("Both the discriminator and generator may be loaded into this model."),R1=c(),Tl=n("p"),H1=r("This model inherits from "),Wd=n("a"),Q1=r("FlaxPreTrainedModel"),B1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),V1=c(),vl=n("p"),K1=r(`This model is also a Flax Linen
`),bl=n("a"),J1=r("flax.nn.Module"),G1=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),X1=c(),Sh=n("p"),Y1=r("Finally, this model supports inherent JAX features such as:"),Z1=c(),Gt=n("ul"),Dh=n("li"),yl=n("a"),e2=r("Just-In-Time (JIT) compilation"),t2=c(),Wh=n("li"),El=n("a"),o2=r("Automatic Differentiation"),n2=c(),Uh=n("li"),wl=n("a"),s2=r("Vectorization"),a2=c(),Rh=n("li"),$l=n("a"),r2=r("Parallelization"),i2=c(),Ot=n("div"),b(Fl.$$.fragment),l2=c(),hn=n("p"),d2=r("The "),Hh=n("code"),c2=r("FlaxElectraPreTrainedModel"),p2=r(" forward method, overrides the "),Qh=n("code"),h2=r("__call__"),m2=r(" special method."),u2=c(),b(Ks.$$.fragment),f2=c(),b(Js.$$.fragment),Wu=c(),mn=n("h2"),Gs=n("a"),Bh=n("span"),b(xl.$$.fragment),g2=c(),Vh=n("span"),_2=r("FlaxElectraForQuestionAnswering"),Uu=c(),Ue=n("div"),b(Ml.$$.fragment),k2=c(),un=n("p"),T2=r(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Kh=n("code"),v2=r("span start logits"),b2=r(" and "),Jh=n("code"),y2=r("span end logits"),E2=r(")."),w2=c(),zl=n("p"),$2=r("This model inherits from "),Ud=n("a"),F2=r("FlaxPreTrainedModel"),x2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),M2=c(),Cl=n("p"),z2=r(`This model is also a Flax Linen
`),jl=n("a"),C2=r("flax.nn.Module"),j2=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),q2=c(),Gh=n("p"),P2=r("Finally, this model supports inherent JAX features such as:"),A2=c(),Xt=n("ul"),Xh=n("li"),ql=n("a"),O2=r("Just-In-Time (JIT) compilation"),L2=c(),Yh=n("li"),Pl=n("a"),N2=r("Automatic Differentiation"),I2=c(),Zh=n("li"),Al=n("a"),S2=r("Vectorization"),D2=c(),em=n("li"),Ol=n("a"),W2=r("Parallelization"),U2=c(),Lt=n("div"),b(Ll.$$.fragment),R2=c(),fn=n("p"),H2=r("The "),tm=n("code"),Q2=r("FlaxElectraPreTrainedModel"),B2=r(" forward method, overrides the "),om=n("code"),V2=r("__call__"),K2=r(" special method."),J2=c(),b(Xs.$$.fragment),G2=c(),b(Ys.$$.fragment),this.h()},l(o){const T=Lz('[data-svelte="svelte-1phssyn"]',document.head);d=s(T,"META",{name:!0,content:!0}),T.forEach(t),g=p(o),h=s(o,"H1",{class:!0});var Nl=a(h);m=s(Nl,"A",{id:!0,class:!0,href:!0});var nm=a(m);_=s(nm,"SPAN",{});var sm=a(_);y(l.$$.fragment,sm),sm.forEach(t),nm.forEach(t),u=p(Nl),M=s(Nl,"SPAN",{});var am=a(M);ue=i(am,"ELECTRA"),am.forEach(t),Nl.forEach(t),J=p(o),C=s(o,"H2",{class:!0});var Il=a(C);ee=s(Il,"A",{id:!0,class:!0,href:!0});var rm=a(ee);S=s(rm,"SPAN",{});var im=a(S);y(oe.$$.fragment,im),im.forEach(t),rm.forEach(t),fe=p(Il),D=s(Il,"SPAN",{});var lm=a(D);ge=i(lm,"Overview"),lm.forEach(t),Il.forEach(t),pe=p(o),K=s(o,"P",{});var Sl=a(K);O=i(Sl,"The ELECTRA model was proposed in the paper "),ne=s(Sl,"A",{href:!0,rel:!0});var dm=a(ne);X=i(dm,`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
Generators`),dm.forEach(t),j=i(Sl,`. ELECTRA is a new pretraining approach which trains two
transformer models: the generator and the discriminator. The generator\u2019s role is to replace tokens in a sequence, and
is therefore trained as a masked language model. The discriminator, which is the model we\u2019re interested in, tries to
identify which tokens were replaced by the generator in the sequence.`),Sl.forEach(t),P=p(o),ae=s(o,"P",{});var cm=a(ae);R=i(cm,"The abstract from the paper is the following:"),cm.forEach(t),he=p(o),re=s(o,"P",{});var pm=a(re);W=s(pm,"EM",{});var hm=a(W);_e=i(hm,`Masked language modeling (MLM) pretraining methods such as BERT corrupt the input by replacing some tokens with [MASK]
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
using the same amount of compute.`),hm.forEach(t),pm.forEach(t),me=p(o),q=s(o,"P",{});var mm=a(q);ke=i(mm,"Tips:"),mm.forEach(t),U=p(o),te=s(o,"UL",{});var Dl=a(te);ie=s(Dl,"LI",{});var um=a(ie);H=i(um,`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),um.forEach(t),Te=p(Dl),G=s(Dl,"LI",{});var Yt=a(G);L=i(Yt,"The ELECTRA checkpoints saved using "),se=s(Yt,"A",{href:!0,rel:!0});var fm=a(se);Q=i(fm,"Google Research\u2019s implementation"),fm.forEach(t),ve=i(Yt,`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),v=s(Yt,"A",{href:!0});var gm=a(v);z=i(gm,"ElectraForMaskedLM"),gm.forEach(t),Y=i(Yt,` model, and the generator may be loaded in the
`),Fe=s(Yt,"A",{href:!0});var _m=a(Fe);ze=i(_m,"ElectraForPreTraining"),_m.forEach(t),N=i(Yt,` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),Yt.forEach(t),Dl.forEach(t),xe=p(o),be=s(o,"P",{});var gn=a(be);Ce=i(gn,"This model was contributed by "),A=s(gn,"A",{href:!0,rel:!0});var km=a(A);B=i(km,"lysandre"),km.forEach(t),je=i(gn,". The original code can be found "),we=s(gn,"A",{href:!0,rel:!0});var Tm=a(we);V=i(Tm,"here"),Tm.forEach(t),qe=i(gn,"."),gn.forEach(t),Me=p(o),Z=s(o,"H2",{class:!0});var Wl=a(Z);ye=s(Wl,"A",{id:!0,class:!0,href:!0});var vm=a(ye);uc=s(vm,"SPAN",{});var bm=a(uc);y(ya.$$.fragment,bm),bm.forEach(t),vm.forEach(t),dg=p(Wl),fc=s(Wl,"SPAN",{});var ym=a(fc);cg=i(ym,"ElectraConfig"),ym.forEach(t),Wl.forEach(t),Qm=p(o),vt=s(o,"DIV",{class:!0});var Zt=a(vt);y(Ea.$$.fragment,Zt),pg=p(Zt),Ht=s(Zt,"P",{});var eo=a(Ht);hg=i(eo,"This is the configuration class to store the configuration of a "),Kl=s(eo,"A",{href:!0});var Em=a(Kl);mg=i(Em,"ElectraModel"),Em.forEach(t),ug=i(eo," or a "),Jl=s(eo,"A",{href:!0});var wm=a(Jl);fg=i(wm,"TFElectraModel"),wm.forEach(t),gg=i(eo,`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),wa=s(eo,"A",{href:!0,rel:!0});var $m=a(wa);_g=i($m,"google/electra-small-discriminator"),$m.forEach(t),kg=i(eo," architecture."),eo.forEach(t),Tg=p(Zt),go=s(Zt,"P",{});var _n=a(go);vg=i(_n,"Configuration objects inherit from "),Gl=s(_n,"A",{href:!0});var Fm=a(Gl);bg=i(Fm,"PretrainedConfig"),Fm.forEach(t),yg=i(_n,` and can be used to control the model outputs. Read the
documentation from `),Xl=s(_n,"A",{href:!0});var xm=a(Xl);Eg=i(xm,"PretrainedConfig"),xm.forEach(t),wg=i(_n," for more information."),_n.forEach(t),$g=p(Zt),y(kn.$$.fragment,Zt),Zt.forEach(t),Bm=p(o),_o=s(o,"H2",{class:!0});var Ul=a(_o);Tn=s(Ul,"A",{id:!0,class:!0,href:!0});var Mm=a(Tn);gc=s(Mm,"SPAN",{});var zm=a(gc);y($a.$$.fragment,zm),zm.forEach(t),Mm.forEach(t),Fg=p(Ul),_c=s(Ul,"SPAN",{});var Cm=a(_c);xg=i(Cm,"ElectraTokenizer"),Cm.forEach(t),Ul.forEach(t),Vm=p(o),bt=s(o,"DIV",{class:!0});var to=a(bt);y(Fa.$$.fragment,to),Mg=p(to),kc=s(to,"P",{});var jm=a(kc);zg=i(jm,"Construct an ELECTRA tokenizer."),jm.forEach(t),Cg=p(to),vn=s(to,"P",{});var Zs=a(vn);Yl=s(Zs,"A",{href:!0});var qm=a(Yl);jg=i(qm,"ElectraTokenizer"),qm.forEach(t),qg=i(Zs," is identical to "),Zl=s(Zs,"A",{href:!0});var Pm=a(Zl);Pg=i(Pm,"BertTokenizer"),Pm.forEach(t),Ag=i(Zs,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Zs.forEach(t),Og=p(to),xa=s(to,"P",{});var Rl=a(xa);Lg=i(Rl,"Refer to superclass "),ed=s(Rl,"A",{href:!0});var Am=a(ed);Ng=i(Am,"BertTokenizer"),Am.forEach(t),Ig=i(Rl," for usage examples and documentation concerning parameters."),Rl.forEach(t),to.forEach(t),Km=p(o),ko=s(o,"H2",{class:!0});var Hl=a(ko);bn=s(Hl,"A",{id:!0,class:!0,href:!0});var Om=a(bn);Tc=s(Om,"SPAN",{});var Lm=a(Tc);y(Ma.$$.fragment,Lm),Lm.forEach(t),Om.forEach(t),Sg=p(Hl),vc=s(Hl,"SPAN",{});var Nm=a(vc);Dg=i(Nm,"ElectraTokenizerFast"),Nm.forEach(t),Hl.forEach(t),Jm=p(o),yt=s(o,"DIV",{class:!0});var oo=a(yt);y(za.$$.fragment,oo),Wg=p(oo),Ca=s(oo,"P",{});var Ql=a(Ca);Ug=i(Ql,"Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),bc=s(Ql,"EM",{});var Im=a(bc);Rg=i(Im,"tokenizers"),Im.forEach(t),Hg=i(Ql," library)."),Ql.forEach(t),Qg=p(oo),yn=s(oo,"P",{});var ea=a(yn);td=s(ea,"A",{href:!0});var Sm=a(td);Bg=i(Sm,"ElectraTokenizerFast"),Sm.forEach(t),Vg=i(ea," is identical to "),od=s(ea,"A",{href:!0});var Dm=a(od);Kg=i(Dm,"BertTokenizerFast"),Dm.forEach(t),Jg=i(ea,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),ea.forEach(t),Gg=p(oo),ja=s(oo,"P",{});var Bl=a(ja);Xg=i(Bl,"Refer to superclass "),nd=s(Bl,"A",{href:!0});var Wm=a(nd);Yg=i(Wm,"BertTokenizerFast"),Wm.forEach(t),Zg=i(Bl," for usage examples and documentation concerning parameters."),Bl.forEach(t),oo.forEach(t),Gm=p(o),To=s(o,"H2",{class:!0});var Vl=a(To);En=s(Vl,"A",{id:!0,class:!0,href:!0});var Um=a(En);yc=s(Um,"SPAN",{});var Rm=a(yc);y(qa.$$.fragment,Rm),Rm.forEach(t),Um.forEach(t),e_=p(Vl),Ec=s(Vl,"SPAN",{});var Hm=a(Ec);t_=i(Hm,"Electra specific outputs"),Hm.forEach(t),Vl.forEach(t),Xm=p(o),vo=s(o,"DIV",{class:!0});var Hu=a(vo);y(Pa.$$.fragment,Hu),o_=p(Hu),Aa=s(Hu,"P",{});var Qu=a(Aa);n_=i(Qu,"Output type of "),sd=s(Qu,"A",{href:!0});var X2=a(sd);s_=i(X2,"ElectraForPreTraining"),X2.forEach(t),a_=i(Qu,"."),Qu.forEach(t),Hu.forEach(t),Ym=p(o),bo=s(o,"DIV",{class:!0});var Bu=a(bo);y(Oa.$$.fragment,Bu),r_=p(Bu),La=s(Bu,"P",{});var Vu=a(La);i_=i(Vu,"Output type of "),ad=s(Vu,"A",{href:!0});var Y2=a(ad);l_=i(Y2,"TFElectraForPreTraining"),Y2.forEach(t),d_=i(Vu,"."),Vu.forEach(t),Bu.forEach(t),Zm=p(o),yo=s(o,"H2",{class:!0});var Ku=a(yo);wn=s(Ku,"A",{id:!0,class:!0,href:!0});var Z2=a(wn);wc=s(Z2,"SPAN",{});var eF=a(wc);y(Na.$$.fragment,eF),eF.forEach(t),Z2.forEach(t),c_=p(Ku),$c=s(Ku,"SPAN",{});var tF=a($c);p_=i(tF,"ElectraModel"),tF.forEach(t),Ku.forEach(t),eu=p(o),Ze=s(o,"DIV",{class:!0});var no=a(Ze);y(Ia.$$.fragment,no),h_=p(no),Fc=s(no,"P",{});var oF=a(Fc);m_=i(oF,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),oF.forEach(t),u_=p(no),Sa=s(no,"P",{});var Ju=a(Sa);f_=i(Ju,"This model inherits from "),rd=s(Ju,"A",{href:!0});var nF=a(rd);g_=i(nF,"PreTrainedModel"),nF.forEach(t),__=i(Ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ju.forEach(t),k_=p(no),Da=s(no,"P",{});var Gu=a(Da);T_=i(Gu,"This model is also a PyTorch "),Wa=s(Gu,"A",{href:!0,rel:!0});var sF=a(Wa);v_=i(sF,"torch.nn.Module"),sF.forEach(t),b_=i(Gu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gu.forEach(t),y_=p(no),Et=s(no,"DIV",{class:!0});var ta=a(Et);y(Ua.$$.fragment,ta),E_=p(ta),Eo=s(ta,"P",{});var Rd=a(Eo);w_=i(Rd,"The "),id=s(Rd,"A",{href:!0});var aF=a(id);$_=i(aF,"ElectraModel"),aF.forEach(t),F_=i(Rd," forward method, overrides the "),xc=s(Rd,"CODE",{});var rF=a(xc);x_=i(rF,"__call__"),rF.forEach(t),M_=i(Rd," special method."),Rd.forEach(t),z_=p(ta),y($n.$$.fragment,ta),C_=p(ta),y(Fn.$$.fragment,ta),ta.forEach(t),no.forEach(t),tu=p(o),wo=s(o,"H2",{class:!0});var Xu=a(wo);xn=s(Xu,"A",{id:!0,class:!0,href:!0});var iF=a(xn);Mc=s(iF,"SPAN",{});var lF=a(Mc);y(Ra.$$.fragment,lF),lF.forEach(t),iF.forEach(t),j_=p(Xu),zc=s(Xu,"SPAN",{});var dF=a(zc);q_=i(dF,"ElectraForPreTraining"),dF.forEach(t),Xu.forEach(t),ou=p(o),He=s(o,"DIV",{class:!0});var Nt=a(He);y(Ha.$$.fragment,Nt),P_=p(Nt),Cc=s(Nt,"P",{});var cF=a(Cc);A_=i(cF,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),cF.forEach(t),O_=p(Nt),jc=s(Nt,"P",{});var pF=a(jc);L_=i(pF,"It is recommended to load the discriminator checkpoint into that model."),pF.forEach(t),N_=p(Nt),Qa=s(Nt,"P",{});var Yu=a(Qa);I_=i(Yu,"This model inherits from "),ld=s(Yu,"A",{href:!0});var hF=a(ld);S_=i(hF,"PreTrainedModel"),hF.forEach(t),D_=i(Yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yu.forEach(t),W_=p(Nt),Ba=s(Nt,"P",{});var Zu=a(Ba);U_=i(Zu,"This model is also a PyTorch "),Va=s(Zu,"A",{href:!0,rel:!0});var mF=a(Va);R_=i(mF,"torch.nn.Module"),mF.forEach(t),H_=i(Zu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zu.forEach(t),Q_=p(Nt),wt=s(Nt,"DIV",{class:!0});var oa=a(wt);y(Ka.$$.fragment,oa),B_=p(oa),$o=s(oa,"P",{});var Hd=a($o);V_=i(Hd,"The "),dd=s(Hd,"A",{href:!0});var uF=a(dd);K_=i(uF,"ElectraForPreTraining"),uF.forEach(t),J_=i(Hd," forward method, overrides the "),qc=s(Hd,"CODE",{});var fF=a(qc);G_=i(fF,"__call__"),fF.forEach(t),X_=i(Hd," special method."),Hd.forEach(t),Y_=p(oa),y(Mn.$$.fragment,oa),Z_=p(oa),y(zn.$$.fragment,oa),oa.forEach(t),Nt.forEach(t),nu=p(o),Fo=s(o,"H2",{class:!0});var ef=a(Fo);Cn=s(ef,"A",{id:!0,class:!0,href:!0});var gF=a(Cn);Pc=s(gF,"SPAN",{});var _F=a(Pc);y(Ja.$$.fragment,_F),_F.forEach(t),gF.forEach(t),ek=p(ef),Ac=s(ef,"SPAN",{});var kF=a(Ac);tk=i(kF,"ElectraForCausalLM"),kF.forEach(t),ef.forEach(t),su=p(o),et=s(o,"DIV",{class:!0});var so=a(et);y(Ga.$$.fragment,so),ok=p(so),Xa=s(so,"P",{});var tf=a(Xa);nk=i(tf,"ELECTRA Model with a "),Oc=s(tf,"CODE",{});var TF=a(Oc);sk=i(TF,"language modeling"),TF.forEach(t),ak=i(tf," head on top for CLM fine-tuning."),tf.forEach(t),rk=p(so),Ya=s(so,"P",{});var of=a(Ya);ik=i(of,"This model inherits from "),cd=s(of,"A",{href:!0});var vF=a(cd);lk=i(vF,"PreTrainedModel"),vF.forEach(t),dk=i(of,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),of.forEach(t),ck=p(so),Za=s(so,"P",{});var nf=a(Za);pk=i(nf,"This model is also a PyTorch "),er=s(nf,"A",{href:!0,rel:!0});var bF=a(er);hk=i(bF,"torch.nn.Module"),bF.forEach(t),mk=i(nf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nf.forEach(t),uk=p(so),$t=s(so,"DIV",{class:!0});var na=a($t);y(tr.$$.fragment,na),fk=p(na),xo=s(na,"P",{});var Qd=a(xo);gk=i(Qd,"The "),pd=s(Qd,"A",{href:!0});var yF=a(pd);_k=i(yF,"ElectraForCausalLM"),yF.forEach(t),kk=i(Qd," forward method, overrides the "),Lc=s(Qd,"CODE",{});var EF=a(Lc);Tk=i(EF,"__call__"),EF.forEach(t),vk=i(Qd," special method."),Qd.forEach(t),bk=p(na),y(jn.$$.fragment,na),yk=p(na),y(qn.$$.fragment,na),na.forEach(t),so.forEach(t),au=p(o),Mo=s(o,"H2",{class:!0});var sf=a(Mo);Pn=s(sf,"A",{id:!0,class:!0,href:!0});var wF=a(Pn);Nc=s(wF,"SPAN",{});var $F=a(Nc);y(or.$$.fragment,$F),$F.forEach(t),wF.forEach(t),Ek=p(sf),Ic=s(sf,"SPAN",{});var FF=a(Ic);wk=i(FF,"ElectraForMaskedLM"),FF.forEach(t),sf.forEach(t),ru=p(o),Qe=s(o,"DIV",{class:!0});var It=a(Qe);y(nr.$$.fragment,It),$k=p(It),Sc=s(It,"P",{});var xF=a(Sc);Fk=i(xF,"Electra model with a language modeling head on top."),xF.forEach(t),xk=p(It),Dc=s(It,"P",{});var MF=a(Dc);Mk=i(MF,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),MF.forEach(t),zk=p(It),sr=s(It,"P",{});var af=a(sr);Ck=i(af,"This model inherits from "),hd=s(af,"A",{href:!0});var zF=a(hd);jk=i(zF,"PreTrainedModel"),zF.forEach(t),qk=i(af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),af.forEach(t),Pk=p(It),ar=s(It,"P",{});var rf=a(ar);Ak=i(rf,"This model is also a PyTorch "),rr=s(rf,"A",{href:!0,rel:!0});var CF=a(rr);Ok=i(CF,"torch.nn.Module"),CF.forEach(t),Lk=i(rf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rf.forEach(t),Nk=p(It),st=s(It,"DIV",{class:!0});var ao=a(st);y(ir.$$.fragment,ao),Ik=p(ao),zo=s(ao,"P",{});var Bd=a(zo);Sk=i(Bd,"The "),md=s(Bd,"A",{href:!0});var jF=a(md);Dk=i(jF,"ElectraForMaskedLM"),jF.forEach(t),Wk=i(Bd," forward method, overrides the "),Wc=s(Bd,"CODE",{});var qF=a(Wc);Uk=i(qF,"__call__"),qF.forEach(t),Rk=i(Bd," special method."),Bd.forEach(t),Hk=p(ao),y(An.$$.fragment,ao),Qk=p(ao),y(On.$$.fragment,ao),Bk=p(ao),y(Ln.$$.fragment,ao),ao.forEach(t),It.forEach(t),iu=p(o),Co=s(o,"H2",{class:!0});var lf=a(Co);Nn=s(lf,"A",{id:!0,class:!0,href:!0});var PF=a(Nn);Uc=s(PF,"SPAN",{});var AF=a(Uc);y(lr.$$.fragment,AF),AF.forEach(t),PF.forEach(t),Vk=p(lf),Rc=s(lf,"SPAN",{});var OF=a(Rc);Kk=i(OF,"ElectraForSequenceClassification"),OF.forEach(t),lf.forEach(t),lu=p(o),tt=s(o,"DIV",{class:!0});var ro=a(tt);y(dr.$$.fragment,ro),Jk=p(ro),Hc=s(ro,"P",{});var LF=a(Hc);Gk=i(LF,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),LF.forEach(t),Xk=p(ro),cr=s(ro,"P",{});var df=a(cr);Yk=i(df,"This model inherits from "),ud=s(df,"A",{href:!0});var NF=a(ud);Zk=i(NF,"PreTrainedModel"),NF.forEach(t),eT=i(df,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),df.forEach(t),tT=p(ro),pr=s(ro,"P",{});var cf=a(pr);oT=i(cf,"This model is also a PyTorch "),hr=s(cf,"A",{href:!0,rel:!0});var IF=a(hr);nT=i(IF,"torch.nn.Module"),IF.forEach(t),sT=i(cf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cf.forEach(t),aT=p(ro),Re=s(ro,"DIV",{class:!0});var pt=a(Re);y(mr.$$.fragment,pt),rT=p(pt),jo=s(pt,"P",{});var Vd=a(jo);iT=i(Vd,"The "),fd=s(Vd,"A",{href:!0});var SF=a(fd);lT=i(SF,"ElectraForSequenceClassification"),SF.forEach(t),dT=i(Vd," forward method, overrides the "),Qc=s(Vd,"CODE",{});var DF=a(Qc);cT=i(DF,"__call__"),DF.forEach(t),pT=i(Vd," special method."),Vd.forEach(t),hT=p(pt),y(In.$$.fragment,pt),mT=p(pt),y(Sn.$$.fragment,pt),uT=p(pt),y(Dn.$$.fragment,pt),fT=p(pt),y(Wn.$$.fragment,pt),gT=p(pt),y(Un.$$.fragment,pt),pt.forEach(t),ro.forEach(t),du=p(o),qo=s(o,"H2",{class:!0});var pf=a(qo);Rn=s(pf,"A",{id:!0,class:!0,href:!0});var WF=a(Rn);Bc=s(WF,"SPAN",{});var UF=a(Bc);y(ur.$$.fragment,UF),UF.forEach(t),WF.forEach(t),_T=p(pf),Vc=s(pf,"SPAN",{});var RF=a(Vc);kT=i(RF,"ElectraForMultipleChoice"),RF.forEach(t),pf.forEach(t),cu=p(o),ot=s(o,"DIV",{class:!0});var io=a(ot);y(fr.$$.fragment,io),TT=p(io),Kc=s(io,"P",{});var HF=a(Kc);vT=i(HF,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),HF.forEach(t),bT=p(io),gr=s(io,"P",{});var hf=a(gr);yT=i(hf,"This model inherits from "),gd=s(hf,"A",{href:!0});var QF=a(gd);ET=i(QF,"PreTrainedModel"),QF.forEach(t),wT=i(hf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hf.forEach(t),$T=p(io),_r=s(io,"P",{});var mf=a(_r);FT=i(mf,"This model is also a PyTorch "),kr=s(mf,"A",{href:!0,rel:!0});var BF=a(kr);xT=i(BF,"torch.nn.Module"),BF.forEach(t),MT=i(mf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mf.forEach(t),zT=p(io),Ft=s(io,"DIV",{class:!0});var sa=a(Ft);y(Tr.$$.fragment,sa),CT=p(sa),Po=s(sa,"P",{});var Kd=a(Po);jT=i(Kd,"The "),_d=s(Kd,"A",{href:!0});var VF=a(_d);qT=i(VF,"ElectraForMultipleChoice"),VF.forEach(t),PT=i(Kd," forward method, overrides the "),Jc=s(Kd,"CODE",{});var KF=a(Jc);AT=i(KF,"__call__"),KF.forEach(t),OT=i(Kd," special method."),Kd.forEach(t),LT=p(sa),y(Hn.$$.fragment,sa),NT=p(sa),y(Qn.$$.fragment,sa),sa.forEach(t),io.forEach(t),pu=p(o),Ao=s(o,"H2",{class:!0});var uf=a(Ao);Bn=s(uf,"A",{id:!0,class:!0,href:!0});var JF=a(Bn);Gc=s(JF,"SPAN",{});var GF=a(Gc);y(vr.$$.fragment,GF),GF.forEach(t),JF.forEach(t),IT=p(uf),Xc=s(uf,"SPAN",{});var XF=a(Xc);ST=i(XF,"ElectraForTokenClassification"),XF.forEach(t),uf.forEach(t),hu=p(o),Be=s(o,"DIV",{class:!0});var St=a(Be);y(br.$$.fragment,St),DT=p(St),Yc=s(St,"P",{});var YF=a(Yc);WT=i(YF,"Electra model with a token classification head on top."),YF.forEach(t),UT=p(St),Zc=s(St,"P",{});var ZF=a(Zc);RT=i(ZF,"Both the discriminator and generator may be loaded into this model."),ZF.forEach(t),HT=p(St),yr=s(St,"P",{});var ff=a(yr);QT=i(ff,"This model inherits from "),kd=s(ff,"A",{href:!0});var e0=a(kd);BT=i(e0,"PreTrainedModel"),e0.forEach(t),VT=i(ff,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ff.forEach(t),KT=p(St),Er=s(St,"P",{});var gf=a(Er);JT=i(gf,"This model is also a PyTorch "),wr=s(gf,"A",{href:!0,rel:!0});var t0=a(wr);GT=i(t0,"torch.nn.Module"),t0.forEach(t),XT=i(gf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gf.forEach(t),YT=p(St),at=s(St,"DIV",{class:!0});var lo=a(at);y($r.$$.fragment,lo),ZT=p(lo),Oo=s(lo,"P",{});var Jd=a(Oo);ev=i(Jd,"The "),Td=s(Jd,"A",{href:!0});var o0=a(Td);tv=i(o0,"ElectraForTokenClassification"),o0.forEach(t),ov=i(Jd," forward method, overrides the "),ep=s(Jd,"CODE",{});var n0=a(ep);nv=i(n0,"__call__"),n0.forEach(t),sv=i(Jd," special method."),Jd.forEach(t),av=p(lo),y(Vn.$$.fragment,lo),rv=p(lo),y(Kn.$$.fragment,lo),iv=p(lo),y(Jn.$$.fragment,lo),lo.forEach(t),St.forEach(t),mu=p(o),Lo=s(o,"H2",{class:!0});var _f=a(Lo);Gn=s(_f,"A",{id:!0,class:!0,href:!0});var s0=a(Gn);tp=s(s0,"SPAN",{});var a0=a(tp);y(Fr.$$.fragment,a0),a0.forEach(t),s0.forEach(t),lv=p(_f),op=s(_f,"SPAN",{});var r0=a(op);dv=i(r0,"ElectraForQuestionAnswering"),r0.forEach(t),_f.forEach(t),uu=p(o),nt=s(o,"DIV",{class:!0});var co=a(nt);y(xr.$$.fragment,co),cv=p(co),No=s(co,"P",{});var Gd=a(No);pv=i(Gd,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),np=s(Gd,"CODE",{});var i0=a(np);hv=i(i0,"span start logits"),i0.forEach(t),mv=i(Gd," and "),sp=s(Gd,"CODE",{});var l0=a(sp);uv=i(l0,"span end logits"),l0.forEach(t),fv=i(Gd,")."),Gd.forEach(t),gv=p(co),Mr=s(co,"P",{});var kf=a(Mr);_v=i(kf,"This model inherits from "),vd=s(kf,"A",{href:!0});var d0=a(vd);kv=i(d0,"PreTrainedModel"),d0.forEach(t),Tv=i(kf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kf.forEach(t),vv=p(co),zr=s(co,"P",{});var Tf=a(zr);bv=i(Tf,"This model is also a PyTorch "),Cr=s(Tf,"A",{href:!0,rel:!0});var c0=a(Cr);yv=i(c0,"torch.nn.Module"),c0.forEach(t),Ev=i(Tf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tf.forEach(t),wv=p(co),rt=s(co,"DIV",{class:!0});var po=a(rt);y(jr.$$.fragment,po),$v=p(po),Io=s(po,"P",{});var Xd=a(Io);Fv=i(Xd,"The "),bd=s(Xd,"A",{href:!0});var p0=a(bd);xv=i(p0,"ElectraForQuestionAnswering"),p0.forEach(t),Mv=i(Xd," forward method, overrides the "),ap=s(Xd,"CODE",{});var h0=a(ap);zv=i(h0,"__call__"),h0.forEach(t),Cv=i(Xd," special method."),Xd.forEach(t),jv=p(po),y(Xn.$$.fragment,po),qv=p(po),y(Yn.$$.fragment,po),Pv=p(po),y(Zn.$$.fragment,po),po.forEach(t),co.forEach(t),fu=p(o),So=s(o,"H2",{class:!0});var vf=a(So);es=s(vf,"A",{id:!0,class:!0,href:!0});var m0=a(es);rp=s(m0,"SPAN",{});var u0=a(rp);y(qr.$$.fragment,u0),u0.forEach(t),m0.forEach(t),Av=p(vf),ip=s(vf,"SPAN",{});var f0=a(ip);Ov=i(f0,"TFElectraModel"),f0.forEach(t),vf.forEach(t),gu=p(o),Ve=s(o,"DIV",{class:!0});var Dt=a(Ve);y(Pr.$$.fragment,Dt),Lv=p(Dt),lp=s(Dt,"P",{});var g0=a(lp);Nv=i(g0,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),g0.forEach(t),Iv=p(Dt),Ar=s(Dt,"P",{});var bf=a(Ar);Sv=i(bf,"This model inherits from "),yd=s(bf,"A",{href:!0});var _0=a(yd);Dv=i(_0,"TFPreTrainedModel"),_0.forEach(t),Wv=i(bf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bf.forEach(t),Uv=p(Dt),Or=s(Dt,"P",{});var yf=a(Or);Rv=i(yf,"This model is also a "),Lr=s(yf,"A",{href:!0,rel:!0});var k0=a(Lr);Hv=i(k0,"tf.keras.Model"),k0.forEach(t),Qv=i(yf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yf.forEach(t),Bv=p(Dt),y(ts.$$.fragment,Dt),Vv=p(Dt),xt=s(Dt,"DIV",{class:!0});var aa=a(xt);y(Nr.$$.fragment,aa),Kv=p(aa),Do=s(aa,"P",{});var Yd=a(Do);Jv=i(Yd,"The "),Ed=s(Yd,"A",{href:!0});var T0=a(Ed);Gv=i(T0,"TFElectraModel"),T0.forEach(t),Xv=i(Yd," forward method, overrides the "),dp=s(Yd,"CODE",{});var v0=a(dp);Yv=i(v0,"__call__"),v0.forEach(t),Zv=i(Yd," special method."),Yd.forEach(t),eb=p(aa),y(os.$$.fragment,aa),tb=p(aa),y(ns.$$.fragment,aa),aa.forEach(t),Dt.forEach(t),_u=p(o),Wo=s(o,"H2",{class:!0});var Ef=a(Wo);ss=s(Ef,"A",{id:!0,class:!0,href:!0});var b0=a(ss);cp=s(b0,"SPAN",{});var y0=a(cp);y(Ir.$$.fragment,y0),y0.forEach(t),b0.forEach(t),ob=p(Ef),pp=s(Ef,"SPAN",{});var E0=a(pp);nb=i(E0,"TFElectraForPreTraining"),E0.forEach(t),Ef.forEach(t),ku=p(o),Oe=s(o,"DIV",{class:!0});var ht=a(Oe);y(Sr.$$.fragment,ht),sb=p(ht),hp=s(ht,"P",{});var w0=a(hp);ab=i(w0,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),w0.forEach(t),rb=p(ht),mp=s(ht,"P",{});var $0=a(mp);ib=i($0,`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),$0.forEach(t),lb=p(ht),Dr=s(ht,"P",{});var wf=a(Dr);db=i(wf,"This model inherits from "),wd=s(wf,"A",{href:!0});var F0=a(wd);cb=i(F0,"TFPreTrainedModel"),F0.forEach(t),pb=i(wf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wf.forEach(t),hb=p(ht),Wr=s(ht,"P",{});var $f=a(Wr);mb=i($f,"This model is also a "),Ur=s($f,"A",{href:!0,rel:!0});var x0=a(Ur);ub=i(x0,"tf.keras.Model"),x0.forEach(t),fb=i($f,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$f.forEach(t),gb=p(ht),y(as.$$.fragment,ht),_b=p(ht),Mt=s(ht,"DIV",{class:!0});var ra=a(Mt);y(Rr.$$.fragment,ra),kb=p(ra),Uo=s(ra,"P",{});var Zd=a(Uo);Tb=i(Zd,"The "),$d=s(Zd,"A",{href:!0});var M0=a($d);vb=i(M0,"TFElectraForPreTraining"),M0.forEach(t),bb=i(Zd," forward method, overrides the "),up=s(Zd,"CODE",{});var z0=a(up);yb=i(z0,"__call__"),z0.forEach(t),Eb=i(Zd," special method."),Zd.forEach(t),wb=p(ra),y(rs.$$.fragment,ra),$b=p(ra),y(is.$$.fragment,ra),ra.forEach(t),ht.forEach(t),Tu=p(o),Ro=s(o,"H2",{class:!0});var Ff=a(Ro);ls=s(Ff,"A",{id:!0,class:!0,href:!0});var C0=a(ls);fp=s(C0,"SPAN",{});var j0=a(fp);y(Hr.$$.fragment,j0),j0.forEach(t),C0.forEach(t),Fb=p(Ff),gp=s(Ff,"SPAN",{});var q0=a(gp);xb=i(q0,"TFElectraForMaskedLM"),q0.forEach(t),Ff.forEach(t),vu=p(o),Le=s(o,"DIV",{class:!0});var mt=a(Le);y(Qr.$$.fragment,mt),Mb=p(mt),_p=s(mt,"P",{});var P0=a(_p);zb=i(P0,"Electra model with a language modeling head on top."),P0.forEach(t),Cb=p(mt),kp=s(mt,"P",{});var A0=a(kp);jb=i(A0,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),A0.forEach(t),qb=p(mt),Br=s(mt,"P",{});var xf=a(Br);Pb=i(xf,"This model inherits from "),Fd=s(xf,"A",{href:!0});var O0=a(Fd);Ab=i(O0,"TFPreTrainedModel"),O0.forEach(t),Ob=i(xf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xf.forEach(t),Lb=p(mt),Vr=s(mt,"P",{});var Mf=a(Vr);Nb=i(Mf,"This model is also a "),Kr=s(Mf,"A",{href:!0,rel:!0});var L0=a(Kr);Ib=i(L0,"tf.keras.Model"),L0.forEach(t),Sb=i(Mf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mf.forEach(t),Db=p(mt),y(ds.$$.fragment,mt),Wb=p(mt),it=s(mt,"DIV",{class:!0});var ho=a(it);y(Jr.$$.fragment,ho),Ub=p(ho),Ho=s(ho,"P",{});var ec=a(Ho);Rb=i(ec,"The "),xd=s(ec,"A",{href:!0});var N0=a(xd);Hb=i(N0,"TFElectraForMaskedLM"),N0.forEach(t),Qb=i(ec," forward method, overrides the "),Tp=s(ec,"CODE",{});var I0=a(Tp);Bb=i(I0,"__call__"),I0.forEach(t),Vb=i(ec," special method."),ec.forEach(t),Kb=p(ho),y(cs.$$.fragment,ho),Jb=p(ho),y(ps.$$.fragment,ho),Gb=p(ho),y(hs.$$.fragment,ho),ho.forEach(t),mt.forEach(t),bu=p(o),Qo=s(o,"H2",{class:!0});var zf=a(Qo);ms=s(zf,"A",{id:!0,class:!0,href:!0});var S0=a(ms);vp=s(S0,"SPAN",{});var D0=a(vp);y(Gr.$$.fragment,D0),D0.forEach(t),S0.forEach(t),Xb=p(zf),bp=s(zf,"SPAN",{});var W0=a(bp);Yb=i(W0,"TFElectraForSequenceClassification"),W0.forEach(t),zf.forEach(t),yu=p(o),Ke=s(o,"DIV",{class:!0});var Wt=a(Ke);y(Xr.$$.fragment,Wt),Zb=p(Wt),yp=s(Wt,"P",{});var U0=a(yp);ey=i(U0,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),U0.forEach(t),ty=p(Wt),Yr=s(Wt,"P",{});var Cf=a(Yr);oy=i(Cf,"This model inherits from "),Md=s(Cf,"A",{href:!0});var R0=a(Md);ny=i(R0,"TFPreTrainedModel"),R0.forEach(t),sy=i(Cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cf.forEach(t),ay=p(Wt),Zr=s(Wt,"P",{});var jf=a(Zr);ry=i(jf,"This model is also a "),ei=s(jf,"A",{href:!0,rel:!0});var H0=a(ei);iy=i(H0,"tf.keras.Model"),H0.forEach(t),ly=i(jf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jf.forEach(t),dy=p(Wt),y(us.$$.fragment,Wt),cy=p(Wt),lt=s(Wt,"DIV",{class:!0});var mo=a(lt);y(ti.$$.fragment,mo),py=p(mo),Bo=s(mo,"P",{});var tc=a(Bo);hy=i(tc,"The "),zd=s(tc,"A",{href:!0});var Q0=a(zd);my=i(Q0,"TFElectraForSequenceClassification"),Q0.forEach(t),uy=i(tc," forward method, overrides the "),Ep=s(tc,"CODE",{});var B0=a(Ep);fy=i(B0,"__call__"),B0.forEach(t),gy=i(tc," special method."),tc.forEach(t),_y=p(mo),y(fs.$$.fragment,mo),ky=p(mo),y(gs.$$.fragment,mo),Ty=p(mo),y(_s.$$.fragment,mo),mo.forEach(t),Wt.forEach(t),Eu=p(o),Vo=s(o,"H2",{class:!0});var qf=a(Vo);ks=s(qf,"A",{id:!0,class:!0,href:!0});var V0=a(ks);wp=s(V0,"SPAN",{});var K0=a(wp);y(oi.$$.fragment,K0),K0.forEach(t),V0.forEach(t),vy=p(qf),$p=s(qf,"SPAN",{});var J0=a($p);by=i(J0,"TFElectraForMultipleChoice"),J0.forEach(t),qf.forEach(t),wu=p(o),Je=s(o,"DIV",{class:!0});var Ut=a(Je);y(ni.$$.fragment,Ut),yy=p(Ut),Fp=s(Ut,"P",{});var G0=a(Fp);Ey=i(G0,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),G0.forEach(t),wy=p(Ut),si=s(Ut,"P",{});var Pf=a(si);$y=i(Pf,"This model inherits from "),Cd=s(Pf,"A",{href:!0});var X0=a(Cd);Fy=i(X0,"TFPreTrainedModel"),X0.forEach(t),xy=i(Pf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pf.forEach(t),My=p(Ut),ai=s(Ut,"P",{});var Af=a(ai);zy=i(Af,"This model is also a "),ri=s(Af,"A",{href:!0,rel:!0});var Y0=a(ri);Cy=i(Y0,"tf.keras.Model"),Y0.forEach(t),jy=i(Af,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Af.forEach(t),qy=p(Ut),y(Ts.$$.fragment,Ut),Py=p(Ut),zt=s(Ut,"DIV",{class:!0});var ia=a(zt);y(ii.$$.fragment,ia),Ay=p(ia),Ko=s(ia,"P",{});var oc=a(Ko);Oy=i(oc,"The "),jd=s(oc,"A",{href:!0});var Z0=a(jd);Ly=i(Z0,"TFElectraForMultipleChoice"),Z0.forEach(t),Ny=i(oc," forward method, overrides the "),xp=s(oc,"CODE",{});var ex=a(xp);Iy=i(ex,"__call__"),ex.forEach(t),Sy=i(oc," special method."),oc.forEach(t),Dy=p(ia),y(vs.$$.fragment,ia),Wy=p(ia),y(bs.$$.fragment,ia),ia.forEach(t),Ut.forEach(t),$u=p(o),Jo=s(o,"H2",{class:!0});var Of=a(Jo);ys=s(Of,"A",{id:!0,class:!0,href:!0});var tx=a(ys);Mp=s(tx,"SPAN",{});var ox=a(Mp);y(li.$$.fragment,ox),ox.forEach(t),tx.forEach(t),Uy=p(Of),zp=s(Of,"SPAN",{});var nx=a(zp);Ry=i(nx,"TFElectraForTokenClassification"),nx.forEach(t),Of.forEach(t),Fu=p(o),Ne=s(o,"DIV",{class:!0});var ut=a(Ne);y(di.$$.fragment,ut),Hy=p(ut),Cp=s(ut,"P",{});var sx=a(Cp);Qy=i(sx,"Electra model with a token classification head on top."),sx.forEach(t),By=p(ut),jp=s(ut,"P",{});var ax=a(jp);Vy=i(ax,"Both the discriminator and generator may be loaded into this model."),ax.forEach(t),Ky=p(ut),ci=s(ut,"P",{});var Lf=a(ci);Jy=i(Lf,"This model inherits from "),qd=s(Lf,"A",{href:!0});var rx=a(qd);Gy=i(rx,"TFPreTrainedModel"),rx.forEach(t),Xy=i(Lf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lf.forEach(t),Yy=p(ut),pi=s(ut,"P",{});var Nf=a(pi);Zy=i(Nf,"This model is also a "),hi=s(Nf,"A",{href:!0,rel:!0});var ix=a(hi);eE=i(ix,"tf.keras.Model"),ix.forEach(t),tE=i(Nf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nf.forEach(t),oE=p(ut),y(Es.$$.fragment,ut),nE=p(ut),dt=s(ut,"DIV",{class:!0});var uo=a(dt);y(mi.$$.fragment,uo),sE=p(uo),Go=s(uo,"P",{});var nc=a(Go);aE=i(nc,"The "),Pd=s(nc,"A",{href:!0});var lx=a(Pd);rE=i(lx,"TFElectraForTokenClassification"),lx.forEach(t),iE=i(nc," forward method, overrides the "),qp=s(nc,"CODE",{});var dx=a(qp);lE=i(dx,"__call__"),dx.forEach(t),dE=i(nc," special method."),nc.forEach(t),cE=p(uo),y(ws.$$.fragment,uo),pE=p(uo),y($s.$$.fragment,uo),hE=p(uo),y(Fs.$$.fragment,uo),uo.forEach(t),ut.forEach(t),xu=p(o),Xo=s(o,"H2",{class:!0});var If=a(Xo);xs=s(If,"A",{id:!0,class:!0,href:!0});var cx=a(xs);Pp=s(cx,"SPAN",{});var px=a(Pp);y(ui.$$.fragment,px),px.forEach(t),cx.forEach(t),mE=p(If),Ap=s(If,"SPAN",{});var hx=a(Ap);uE=i(hx,"TFElectraForQuestionAnswering"),hx.forEach(t),If.forEach(t),Mu=p(o),Ge=s(o,"DIV",{class:!0});var Rt=a(Ge);y(fi.$$.fragment,Rt),fE=p(Rt),Yo=s(Rt,"P",{});var sc=a(Yo);gE=i(sc,`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Op=s(sc,"CODE",{});var mx=a(Op);_E=i(mx,"span start logits"),mx.forEach(t),kE=i(sc," and "),Lp=s(sc,"CODE",{});var ux=a(Lp);TE=i(ux,"span end logits"),ux.forEach(t),vE=i(sc,")."),sc.forEach(t),bE=p(Rt),gi=s(Rt,"P",{});var Sf=a(gi);yE=i(Sf,"This model inherits from "),Ad=s(Sf,"A",{href:!0});var fx=a(Ad);EE=i(fx,"TFPreTrainedModel"),fx.forEach(t),wE=i(Sf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sf.forEach(t),$E=p(Rt),_i=s(Rt,"P",{});var Df=a(_i);FE=i(Df,"This model is also a "),ki=s(Df,"A",{href:!0,rel:!0});var gx=a(ki);xE=i(gx,"tf.keras.Model"),gx.forEach(t),ME=i(Df,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Df.forEach(t),zE=p(Rt),y(Ms.$$.fragment,Rt),CE=p(Rt),ct=s(Rt,"DIV",{class:!0});var fo=a(ct);y(Ti.$$.fragment,fo),jE=p(fo),Zo=s(fo,"P",{});var ac=a(Zo);qE=i(ac,"The "),Od=s(ac,"A",{href:!0});var _x=a(Od);PE=i(_x,"TFElectraForQuestionAnswering"),_x.forEach(t),AE=i(ac," forward method, overrides the "),Np=s(ac,"CODE",{});var kx=a(Np);OE=i(kx,"__call__"),kx.forEach(t),LE=i(ac," special method."),ac.forEach(t),NE=p(fo),y(zs.$$.fragment,fo),IE=p(fo),y(Cs.$$.fragment,fo),SE=p(fo),y(js.$$.fragment,fo),fo.forEach(t),Rt.forEach(t),zu=p(o),en=s(o,"H2",{class:!0});var Wf=a(en);qs=s(Wf,"A",{id:!0,class:!0,href:!0});var Tx=a(qs);Ip=s(Tx,"SPAN",{});var vx=a(Ip);y(vi.$$.fragment,vx),vx.forEach(t),Tx.forEach(t),DE=p(Wf),Sp=s(Wf,"SPAN",{});var bx=a(Sp);WE=i(bx,"FlaxElectraModel"),bx.forEach(t),Wf.forEach(t),Cu=p(o),Ie=s(o,"DIV",{class:!0});var ft=a(Ie);y(bi.$$.fragment,ft),UE=p(ft),Dp=s(ft,"P",{});var yx=a(Dp);RE=i(yx,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),yx.forEach(t),HE=p(ft),yi=s(ft,"P",{});var Uf=a(yi);QE=i(Uf,"This model inherits from "),Ld=s(Uf,"A",{href:!0});var Ex=a(Ld);BE=i(Ex,"FlaxPreTrainedModel"),Ex.forEach(t),VE=i(Uf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uf.forEach(t),KE=p(ft),Ei=s(ft,"P",{});var Rf=a(Ei);JE=i(Rf,`This model is also a Flax Linen
`),wi=s(Rf,"A",{href:!0,rel:!0});var wx=a(wi);GE=i(wx,"flax.nn.Module"),wx.forEach(t),XE=i(Rf,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Rf.forEach(t),YE=p(ft),Wp=s(ft,"P",{});var $x=a(Wp);ZE=i($x,"Finally, this model supports inherent JAX features such as:"),$x.forEach(t),ew=p(ft),Qt=s(ft,"UL",{});var la=a(Qt);Up=s(la,"LI",{});var Fx=a(Up);$i=s(Fx,"A",{href:!0,rel:!0});var xx=a($i);tw=i(xx,"Just-In-Time (JIT) compilation"),xx.forEach(t),Fx.forEach(t),ow=p(la),Rp=s(la,"LI",{});var Mx=a(Rp);Fi=s(Mx,"A",{href:!0,rel:!0});var zx=a(Fi);nw=i(zx,"Automatic Differentiation"),zx.forEach(t),Mx.forEach(t),sw=p(la),Hp=s(la,"LI",{});var Cx=a(Hp);xi=s(Cx,"A",{href:!0,rel:!0});var jx=a(xi);aw=i(jx,"Vectorization"),jx.forEach(t),Cx.forEach(t),rw=p(la),Qp=s(la,"LI",{});var qx=a(Qp);Mi=s(qx,"A",{href:!0,rel:!0});var Px=a(Mi);iw=i(Px,"Parallelization"),Px.forEach(t),qx.forEach(t),la.forEach(t),lw=p(ft),Ct=s(ft,"DIV",{class:!0});var da=a(Ct);y(zi.$$.fragment,da),dw=p(da),tn=s(da,"P",{});var rc=a(tn);cw=i(rc,"The "),Bp=s(rc,"CODE",{});var Ax=a(Bp);pw=i(Ax,"FlaxElectraPreTrainedModel"),Ax.forEach(t),hw=i(rc," forward method, overrides the "),Vp=s(rc,"CODE",{});var Ox=a(Vp);mw=i(Ox,"__call__"),Ox.forEach(t),uw=i(rc," special method."),rc.forEach(t),fw=p(da),y(Ps.$$.fragment,da),gw=p(da),y(As.$$.fragment,da),da.forEach(t),ft.forEach(t),ju=p(o),on=s(o,"H2",{class:!0});var Hf=a(on);Os=s(Hf,"A",{id:!0,class:!0,href:!0});var Lx=a(Os);Kp=s(Lx,"SPAN",{});var Nx=a(Kp);y(Ci.$$.fragment,Nx),Nx.forEach(t),Lx.forEach(t),_w=p(Hf),Jp=s(Hf,"SPAN",{});var Ix=a(Jp);kw=i(Ix,"FlaxElectraForPreTraining"),Ix.forEach(t),Hf.forEach(t),qu=p(o),Pe=s(o,"DIV",{class:!0});var Xe=a(Pe);y(ji.$$.fragment,Xe),Tw=p(Xe),Gp=s(Xe,"P",{});var Sx=a(Gp);vw=i(Sx,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),Sx.forEach(t),bw=p(Xe),Xp=s(Xe,"P",{});var Dx=a(Xp);yw=i(Dx,"It is recommended to load the discriminator checkpoint into that model."),Dx.forEach(t),Ew=p(Xe),qi=s(Xe,"P",{});var Qf=a(qi);ww=i(Qf,"This model inherits from "),Nd=s(Qf,"A",{href:!0});var Wx=a(Nd);$w=i(Wx,"FlaxPreTrainedModel"),Wx.forEach(t),Fw=i(Qf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qf.forEach(t),xw=p(Xe),Pi=s(Xe,"P",{});var Bf=a(Pi);Mw=i(Bf,`This model is also a Flax Linen
`),Ai=s(Bf,"A",{href:!0,rel:!0});var Ux=a(Ai);zw=i(Ux,"flax.nn.Module"),Ux.forEach(t),Cw=i(Bf,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Bf.forEach(t),jw=p(Xe),Yp=s(Xe,"P",{});var Rx=a(Yp);qw=i(Rx,"Finally, this model supports inherent JAX features such as:"),Rx.forEach(t),Pw=p(Xe),Bt=s(Xe,"UL",{});var ca=a(Bt);Zp=s(ca,"LI",{});var Hx=a(Zp);Oi=s(Hx,"A",{href:!0,rel:!0});var Qx=a(Oi);Aw=i(Qx,"Just-In-Time (JIT) compilation"),Qx.forEach(t),Hx.forEach(t),Ow=p(ca),eh=s(ca,"LI",{});var Bx=a(eh);Li=s(Bx,"A",{href:!0,rel:!0});var Vx=a(Li);Lw=i(Vx,"Automatic Differentiation"),Vx.forEach(t),Bx.forEach(t),Nw=p(ca),th=s(ca,"LI",{});var Kx=a(th);Ni=s(Kx,"A",{href:!0,rel:!0});var Jx=a(Ni);Iw=i(Jx,"Vectorization"),Jx.forEach(t),Kx.forEach(t),Sw=p(ca),oh=s(ca,"LI",{});var Gx=a(oh);Ii=s(Gx,"A",{href:!0,rel:!0});var Xx=a(Ii);Dw=i(Xx,"Parallelization"),Xx.forEach(t),Gx.forEach(t),ca.forEach(t),Ww=p(Xe),jt=s(Xe,"DIV",{class:!0});var pa=a(jt);y(Si.$$.fragment,pa),Uw=p(pa),nn=s(pa,"P",{});var ic=a(nn);Rw=i(ic,"The "),nh=s(ic,"CODE",{});var Yx=a(nh);Hw=i(Yx,"FlaxElectraPreTrainedModel"),Yx.forEach(t),Qw=i(ic," forward method, overrides the "),sh=s(ic,"CODE",{});var Zx=a(sh);Bw=i(Zx,"__call__"),Zx.forEach(t),Vw=i(ic," special method."),ic.forEach(t),Kw=p(pa),y(Ls.$$.fragment,pa),Jw=p(pa),y(Ns.$$.fragment,pa),pa.forEach(t),Xe.forEach(t),Pu=p(o),sn=s(o,"H2",{class:!0});var Vf=a(sn);Is=s(Vf,"A",{id:!0,class:!0,href:!0});var eM=a(Is);ah=s(eM,"SPAN",{});var tM=a(ah);y(Di.$$.fragment,tM),tM.forEach(t),eM.forEach(t),Gw=p(Vf),rh=s(Vf,"SPAN",{});var oM=a(rh);Xw=i(oM,"FlaxElectraForMaskedLM"),oM.forEach(t),Vf.forEach(t),Au=p(o),Se=s(o,"DIV",{class:!0});var gt=a(Se);y(Wi.$$.fragment,gt),Yw=p(gt),Ui=s(gt,"P",{});var Kf=a(Ui);Zw=i(Kf,"Electra Model with a "),ih=s(Kf,"CODE",{});var nM=a(ih);e$=i(nM,"language modeling"),nM.forEach(t),t$=i(Kf," head on top."),Kf.forEach(t),o$=p(gt),Ri=s(gt,"P",{});var Jf=a(Ri);n$=i(Jf,"This model inherits from "),Id=s(Jf,"A",{href:!0});var sM=a(Id);s$=i(sM,"FlaxPreTrainedModel"),sM.forEach(t),a$=i(Jf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jf.forEach(t),r$=p(gt),Hi=s(gt,"P",{});var Gf=a(Hi);i$=i(Gf,`This model is also a Flax Linen
`),Qi=s(Gf,"A",{href:!0,rel:!0});var aM=a(Qi);l$=i(aM,"flax.nn.Module"),aM.forEach(t),d$=i(Gf,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Gf.forEach(t),c$=p(gt),lh=s(gt,"P",{});var rM=a(lh);p$=i(rM,"Finally, this model supports inherent JAX features such as:"),rM.forEach(t),h$=p(gt),Vt=s(gt,"UL",{});var ha=a(Vt);dh=s(ha,"LI",{});var iM=a(dh);Bi=s(iM,"A",{href:!0,rel:!0});var lM=a(Bi);m$=i(lM,"Just-In-Time (JIT) compilation"),lM.forEach(t),iM.forEach(t),u$=p(ha),ch=s(ha,"LI",{});var dM=a(ch);Vi=s(dM,"A",{href:!0,rel:!0});var cM=a(Vi);f$=i(cM,"Automatic Differentiation"),cM.forEach(t),dM.forEach(t),g$=p(ha),ph=s(ha,"LI",{});var pM=a(ph);Ki=s(pM,"A",{href:!0,rel:!0});var hM=a(Ki);_$=i(hM,"Vectorization"),hM.forEach(t),pM.forEach(t),k$=p(ha),hh=s(ha,"LI",{});var mM=a(hh);Ji=s(mM,"A",{href:!0,rel:!0});var uM=a(Ji);T$=i(uM,"Parallelization"),uM.forEach(t),mM.forEach(t),ha.forEach(t),v$=p(gt),qt=s(gt,"DIV",{class:!0});var ma=a(qt);y(Gi.$$.fragment,ma),b$=p(ma),an=s(ma,"P",{});var lc=a(an);y$=i(lc,"The "),mh=s(lc,"CODE",{});var fM=a(mh);E$=i(fM,"FlaxElectraPreTrainedModel"),fM.forEach(t),w$=i(lc," forward method, overrides the "),uh=s(lc,"CODE",{});var gM=a(uh);$$=i(gM,"__call__"),gM.forEach(t),F$=i(lc," special method."),lc.forEach(t),x$=p(ma),y(Ss.$$.fragment,ma),M$=p(ma),y(Ds.$$.fragment,ma),ma.forEach(t),gt.forEach(t),Ou=p(o),rn=s(o,"H2",{class:!0});var Xf=a(rn);Ws=s(Xf,"A",{id:!0,class:!0,href:!0});var _M=a(Ws);fh=s(_M,"SPAN",{});var kM=a(fh);y(Xi.$$.fragment,kM),kM.forEach(t),_M.forEach(t),z$=p(Xf),gh=s(Xf,"SPAN",{});var TM=a(gh);C$=i(TM,"FlaxElectraForSequenceClassification"),TM.forEach(t),Xf.forEach(t),Lu=p(o),De=s(o,"DIV",{class:!0});var _t=a(De);y(Yi.$$.fragment,_t),j$=p(_t),_h=s(_t,"P",{});var vM=a(_h);q$=i(vM,`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vM.forEach(t),P$=p(_t),Zi=s(_t,"P",{});var Yf=a(Zi);A$=i(Yf,"This model inherits from "),Sd=s(Yf,"A",{href:!0});var bM=a(Sd);O$=i(bM,"FlaxPreTrainedModel"),bM.forEach(t),L$=i(Yf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yf.forEach(t),N$=p(_t),el=s(_t,"P",{});var Zf=a(el);I$=i(Zf,`This model is also a Flax Linen
`),tl=s(Zf,"A",{href:!0,rel:!0});var yM=a(tl);S$=i(yM,"flax.nn.Module"),yM.forEach(t),D$=i(Zf,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Zf.forEach(t),W$=p(_t),kh=s(_t,"P",{});var EM=a(kh);U$=i(EM,"Finally, this model supports inherent JAX features such as:"),EM.forEach(t),R$=p(_t),Kt=s(_t,"UL",{});var ua=a(Kt);Th=s(ua,"LI",{});var wM=a(Th);ol=s(wM,"A",{href:!0,rel:!0});var $M=a(ol);H$=i($M,"Just-In-Time (JIT) compilation"),$M.forEach(t),wM.forEach(t),Q$=p(ua),vh=s(ua,"LI",{});var FM=a(vh);nl=s(FM,"A",{href:!0,rel:!0});var xM=a(nl);B$=i(xM,"Automatic Differentiation"),xM.forEach(t),FM.forEach(t),V$=p(ua),bh=s(ua,"LI",{});var MM=a(bh);sl=s(MM,"A",{href:!0,rel:!0});var zM=a(sl);K$=i(zM,"Vectorization"),zM.forEach(t),MM.forEach(t),J$=p(ua),yh=s(ua,"LI",{});var CM=a(yh);al=s(CM,"A",{href:!0,rel:!0});var jM=a(al);G$=i(jM,"Parallelization"),jM.forEach(t),CM.forEach(t),ua.forEach(t),X$=p(_t),Pt=s(_t,"DIV",{class:!0});var fa=a(Pt);y(rl.$$.fragment,fa),Y$=p(fa),ln=s(fa,"P",{});var dc=a(ln);Z$=i(dc,"The "),Eh=s(dc,"CODE",{});var qM=a(Eh);e1=i(qM,"FlaxElectraPreTrainedModel"),qM.forEach(t),t1=i(dc," forward method, overrides the "),wh=s(dc,"CODE",{});var PM=a(wh);o1=i(PM,"__call__"),PM.forEach(t),n1=i(dc," special method."),dc.forEach(t),s1=p(fa),y(Us.$$.fragment,fa),a1=p(fa),y(Rs.$$.fragment,fa),fa.forEach(t),_t.forEach(t),Nu=p(o),dn=s(o,"H2",{class:!0});var eg=a(dn);Hs=s(eg,"A",{id:!0,class:!0,href:!0});var AM=a(Hs);$h=s(AM,"SPAN",{});var OM=a($h);y(il.$$.fragment,OM),OM.forEach(t),AM.forEach(t),r1=p(eg),Fh=s(eg,"SPAN",{});var LM=a(Fh);i1=i(LM,"FlaxElectraForMultipleChoice"),LM.forEach(t),eg.forEach(t),Iu=p(o),We=s(o,"DIV",{class:!0});var kt=a(We);y(ll.$$.fragment,kt),l1=p(kt),xh=s(kt,"P",{});var NM=a(xh);d1=i(NM,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),NM.forEach(t),c1=p(kt),dl=s(kt,"P",{});var tg=a(dl);p1=i(tg,"This model inherits from "),Dd=s(tg,"A",{href:!0});var IM=a(Dd);h1=i(IM,"FlaxPreTrainedModel"),IM.forEach(t),m1=i(tg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),tg.forEach(t),u1=p(kt),cl=s(kt,"P",{});var og=a(cl);f1=i(og,`This model is also a Flax Linen
`),pl=s(og,"A",{href:!0,rel:!0});var SM=a(pl);g1=i(SM,"flax.nn.Module"),SM.forEach(t),_1=i(og,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),og.forEach(t),k1=p(kt),Mh=s(kt,"P",{});var DM=a(Mh);T1=i(DM,"Finally, this model supports inherent JAX features such as:"),DM.forEach(t),v1=p(kt),Jt=s(kt,"UL",{});var ga=a(Jt);zh=s(ga,"LI",{});var WM=a(zh);hl=s(WM,"A",{href:!0,rel:!0});var UM=a(hl);b1=i(UM,"Just-In-Time (JIT) compilation"),UM.forEach(t),WM.forEach(t),y1=p(ga),Ch=s(ga,"LI",{});var RM=a(Ch);ml=s(RM,"A",{href:!0,rel:!0});var HM=a(ml);E1=i(HM,"Automatic Differentiation"),HM.forEach(t),RM.forEach(t),w1=p(ga),jh=s(ga,"LI",{});var QM=a(jh);ul=s(QM,"A",{href:!0,rel:!0});var BM=a(ul);$1=i(BM,"Vectorization"),BM.forEach(t),QM.forEach(t),F1=p(ga),qh=s(ga,"LI",{});var VM=a(qh);fl=s(VM,"A",{href:!0,rel:!0});var KM=a(fl);x1=i(KM,"Parallelization"),KM.forEach(t),VM.forEach(t),ga.forEach(t),M1=p(kt),At=s(kt,"DIV",{class:!0});var _a=a(At);y(gl.$$.fragment,_a),z1=p(_a),cn=s(_a,"P",{});var cc=a(cn);C1=i(cc,"The "),Ph=s(cc,"CODE",{});var JM=a(Ph);j1=i(JM,"FlaxElectraPreTrainedModel"),JM.forEach(t),q1=i(cc," forward method, overrides the "),Ah=s(cc,"CODE",{});var GM=a(Ah);P1=i(GM,"__call__"),GM.forEach(t),A1=i(cc," special method."),cc.forEach(t),O1=p(_a),y(Qs.$$.fragment,_a),L1=p(_a),y(Bs.$$.fragment,_a),_a.forEach(t),kt.forEach(t),Su=p(o),pn=s(o,"H2",{class:!0});var ng=a(pn);Vs=s(ng,"A",{id:!0,class:!0,href:!0});var XM=a(Vs);Oh=s(XM,"SPAN",{});var YM=a(Oh);y(_l.$$.fragment,YM),YM.forEach(t),XM.forEach(t),N1=p(ng),Lh=s(ng,"SPAN",{});var ZM=a(Lh);I1=i(ZM,"FlaxElectraForTokenClassification"),ZM.forEach(t),ng.forEach(t),Du=p(o),Ae=s(o,"DIV",{class:!0});var Ye=a(Ae);y(kl.$$.fragment,Ye),S1=p(Ye),Nh=s(Ye,"P",{});var ez=a(Nh);D1=i(ez,"Electra model with a token classification head on top."),ez.forEach(t),W1=p(Ye),Ih=s(Ye,"P",{});var tz=a(Ih);U1=i(tz,"Both the discriminator and generator may be loaded into this model."),tz.forEach(t),R1=p(Ye),Tl=s(Ye,"P",{});var sg=a(Tl);H1=i(sg,"This model inherits from "),Wd=s(sg,"A",{href:!0});var oz=a(Wd);Q1=i(oz,"FlaxPreTrainedModel"),oz.forEach(t),B1=i(sg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),sg.forEach(t),V1=p(Ye),vl=s(Ye,"P",{});var ag=a(vl);K1=i(ag,`This model is also a Flax Linen
`),bl=s(ag,"A",{href:!0,rel:!0});var nz=a(bl);J1=i(nz,"flax.nn.Module"),nz.forEach(t),G1=i(ag,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ag.forEach(t),X1=p(Ye),Sh=s(Ye,"P",{});var sz=a(Sh);Y1=i(sz,"Finally, this model supports inherent JAX features such as:"),sz.forEach(t),Z1=p(Ye),Gt=s(Ye,"UL",{});var ka=a(Gt);Dh=s(ka,"LI",{});var az=a(Dh);yl=s(az,"A",{href:!0,rel:!0});var rz=a(yl);e2=i(rz,"Just-In-Time (JIT) compilation"),rz.forEach(t),az.forEach(t),t2=p(ka),Wh=s(ka,"LI",{});var iz=a(Wh);El=s(iz,"A",{href:!0,rel:!0});var lz=a(El);o2=i(lz,"Automatic Differentiation"),lz.forEach(t),iz.forEach(t),n2=p(ka),Uh=s(ka,"LI",{});var dz=a(Uh);wl=s(dz,"A",{href:!0,rel:!0});var cz=a(wl);s2=i(cz,"Vectorization"),cz.forEach(t),dz.forEach(t),a2=p(ka),Rh=s(ka,"LI",{});var pz=a(Rh);$l=s(pz,"A",{href:!0,rel:!0});var hz=a($l);r2=i(hz,"Parallelization"),hz.forEach(t),pz.forEach(t),ka.forEach(t),i2=p(Ye),Ot=s(Ye,"DIV",{class:!0});var Ta=a(Ot);y(Fl.$$.fragment,Ta),l2=p(Ta),hn=s(Ta,"P",{});var pc=a(hn);d2=i(pc,"The "),Hh=s(pc,"CODE",{});var mz=a(Hh);c2=i(mz,"FlaxElectraPreTrainedModel"),mz.forEach(t),p2=i(pc," forward method, overrides the "),Qh=s(pc,"CODE",{});var uz=a(Qh);h2=i(uz,"__call__"),uz.forEach(t),m2=i(pc," special method."),pc.forEach(t),u2=p(Ta),y(Ks.$$.fragment,Ta),f2=p(Ta),y(Js.$$.fragment,Ta),Ta.forEach(t),Ye.forEach(t),Wu=p(o),mn=s(o,"H2",{class:!0});var rg=a(mn);Gs=s(rg,"A",{id:!0,class:!0,href:!0});var fz=a(Gs);Bh=s(fz,"SPAN",{});var gz=a(Bh);y(xl.$$.fragment,gz),gz.forEach(t),fz.forEach(t),g2=p(rg),Vh=s(rg,"SPAN",{});var _z=a(Vh);_2=i(_z,"FlaxElectraForQuestionAnswering"),_z.forEach(t),rg.forEach(t),Uu=p(o),Ue=s(o,"DIV",{class:!0});var Tt=a(Ue);y(Ml.$$.fragment,Tt),k2=p(Tt),un=s(Tt,"P",{});var hc=a(un);T2=i(hc,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Kh=s(hc,"CODE",{});var kz=a(Kh);v2=i(kz,"span start logits"),kz.forEach(t),b2=i(hc," and "),Jh=s(hc,"CODE",{});var Tz=a(Jh);y2=i(Tz,"span end logits"),Tz.forEach(t),E2=i(hc,")."),hc.forEach(t),w2=p(Tt),zl=s(Tt,"P",{});var ig=a(zl);$2=i(ig,"This model inherits from "),Ud=s(ig,"A",{href:!0});var vz=a(Ud);F2=i(vz,"FlaxPreTrainedModel"),vz.forEach(t),x2=i(ig,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ig.forEach(t),M2=p(Tt),Cl=s(Tt,"P",{});var lg=a(Cl);z2=i(lg,`This model is also a Flax Linen
`),jl=s(lg,"A",{href:!0,rel:!0});var bz=a(jl);C2=i(bz,"flax.nn.Module"),bz.forEach(t),j2=i(lg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),lg.forEach(t),q2=p(Tt),Gh=s(Tt,"P",{});var yz=a(Gh);P2=i(yz,"Finally, this model supports inherent JAX features such as:"),yz.forEach(t),A2=p(Tt),Xt=s(Tt,"UL",{});var va=a(Xt);Xh=s(va,"LI",{});var Ez=a(Xh);ql=s(Ez,"A",{href:!0,rel:!0});var wz=a(ql);O2=i(wz,"Just-In-Time (JIT) compilation"),wz.forEach(t),Ez.forEach(t),L2=p(va),Yh=s(va,"LI",{});var $z=a(Yh);Pl=s($z,"A",{href:!0,rel:!0});var Fz=a(Pl);N2=i(Fz,"Automatic Differentiation"),Fz.forEach(t),$z.forEach(t),I2=p(va),Zh=s(va,"LI",{});var xz=a(Zh);Al=s(xz,"A",{href:!0,rel:!0});var Mz=a(Al);S2=i(Mz,"Vectorization"),Mz.forEach(t),xz.forEach(t),D2=p(va),em=s(va,"LI",{});var zz=a(em);Ol=s(zz,"A",{href:!0,rel:!0});var Cz=a(Ol);W2=i(Cz,"Parallelization"),Cz.forEach(t),zz.forEach(t),va.forEach(t),U2=p(Tt),Lt=s(Tt,"DIV",{class:!0});var ba=a(Lt);y(Ll.$$.fragment,ba),R2=p(ba),fn=s(ba,"P",{});var mc=a(fn);H2=i(mc,"The "),tm=s(mc,"CODE",{});var jz=a(tm);Q2=i(jz,"FlaxElectraPreTrainedModel"),jz.forEach(t),B2=i(mc," forward method, overrides the "),om=s(mc,"CODE",{});var qz=a(om);V2=i(qz,"__call__"),qz.forEach(t),K2=i(mc," special method."),mc.forEach(t),J2=p(ba),y(Xs.$$.fragment,ba),G2=p(ba),y(Ys.$$.fragment,ba),ba.forEach(t),Tt.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(V4)),f(m,"id","electra"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#electra"),f(h,"class","relative group"),f(ee,"id","overview"),f(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ee,"href","#overview"),f(C,"class","relative group"),f(ne,"href","https://openreview.net/pdf?id=r1xMH1BtvB"),f(ne,"rel","nofollow"),f(se,"href","https://github.com/google-research/electra"),f(se,"rel","nofollow"),f(v,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForMaskedLM"),f(Fe,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForPreTraining"),f(A,"href","https://huggingface.co/lysandre"),f(A,"rel","nofollow"),f(we,"href","https://github.com/google-research/electra"),f(we,"rel","nofollow"),f(ye,"id","transformers.ElectraConfig"),f(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ye,"href","#transformers.ElectraConfig"),f(Z,"class","relative group"),f(Kl,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraModel"),f(Jl,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraModel"),f(wa,"href","https://huggingface.co/google/electra-small-discriminator"),f(wa,"rel","nofollow"),f(Gl,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Xl,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Tn,"id","transformers.ElectraTokenizer"),f(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Tn,"href","#transformers.ElectraTokenizer"),f(_o,"class","relative group"),f(Yl,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizer"),f(Zl,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),f(ed,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),f(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(bn,"id","transformers.ElectraTokenizerFast"),f(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(bn,"href","#transformers.ElectraTokenizerFast"),f(ko,"class","relative group"),f(td,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraTokenizerFast"),f(od,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),f(nd,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),f(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(En,"id","transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),f(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(En,"href","#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),f(To,"class","relative group"),f(sd,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForPreTraining"),f(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ad,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForPreTraining"),f(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wn,"id","transformers.ElectraModel"),f(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(wn,"href","#transformers.ElectraModel"),f(yo,"class","relative group"),f(rd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Wa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Wa,"rel","nofollow"),f(id,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraModel"),f(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xn,"id","transformers.ElectraForPreTraining"),f(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xn,"href","#transformers.ElectraForPreTraining"),f(wo,"class","relative group"),f(ld,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Va,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Va,"rel","nofollow"),f(dd,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForPreTraining"),f(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Cn,"id","transformers.ElectraForCausalLM"),f(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Cn,"href","#transformers.ElectraForCausalLM"),f(Fo,"class","relative group"),f(cd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(er,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(er,"rel","nofollow"),f(pd,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForCausalLM"),f($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pn,"id","transformers.ElectraForMaskedLM"),f(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Pn,"href","#transformers.ElectraForMaskedLM"),f(Mo,"class","relative group"),f(hd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(rr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(rr,"rel","nofollow"),f(md,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForMaskedLM"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Nn,"id","transformers.ElectraForSequenceClassification"),f(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Nn,"href","#transformers.ElectraForSequenceClassification"),f(Co,"class","relative group"),f(ud,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(hr,"rel","nofollow"),f(fd,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForSequenceClassification"),f(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Rn,"id","transformers.ElectraForMultipleChoice"),f(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Rn,"href","#transformers.ElectraForMultipleChoice"),f(qo,"class","relative group"),f(gd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(kr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(kr,"rel","nofollow"),f(_d,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForMultipleChoice"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bn,"id","transformers.ElectraForTokenClassification"),f(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Bn,"href","#transformers.ElectraForTokenClassification"),f(Ao,"class","relative group"),f(kd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(wr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(wr,"rel","nofollow"),f(Td,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForTokenClassification"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gn,"id","transformers.ElectraForQuestionAnswering"),f(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Gn,"href","#transformers.ElectraForQuestionAnswering"),f(Lo,"class","relative group"),f(vd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Cr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Cr,"rel","nofollow"),f(bd,"href","/docs/transformers/main/en/model_doc/electra#transformers.ElectraForQuestionAnswering"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(es,"id","transformers.TFElectraModel"),f(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(es,"href","#transformers.TFElectraModel"),f(So,"class","relative group"),f(yd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Lr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Lr,"rel","nofollow"),f(Ed,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraModel"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ss,"id","transformers.TFElectraForPreTraining"),f(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ss,"href","#transformers.TFElectraForPreTraining"),f(Wo,"class","relative group"),f(wd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ur,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ur,"rel","nofollow"),f($d,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForPreTraining"),f(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ls,"id","transformers.TFElectraForMaskedLM"),f(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ls,"href","#transformers.TFElectraForMaskedLM"),f(Ro,"class","relative group"),f(Fd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Kr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Kr,"rel","nofollow"),f(xd,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForMaskedLM"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ms,"id","transformers.TFElectraForSequenceClassification"),f(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ms,"href","#transformers.TFElectraForSequenceClassification"),f(Qo,"class","relative group"),f(Md,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ei,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ei,"rel","nofollow"),f(zd,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForSequenceClassification"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ks,"id","transformers.TFElectraForMultipleChoice"),f(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ks,"href","#transformers.TFElectraForMultipleChoice"),f(Vo,"class","relative group"),f(Cd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ri,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ri,"rel","nofollow"),f(jd,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForMultipleChoice"),f(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ys,"id","transformers.TFElectraForTokenClassification"),f(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ys,"href","#transformers.TFElectraForTokenClassification"),f(Jo,"class","relative group"),f(qd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(hi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(hi,"rel","nofollow"),f(Pd,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForTokenClassification"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xs,"id","transformers.TFElectraForQuestionAnswering"),f(xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xs,"href","#transformers.TFElectraForQuestionAnswering"),f(Xo,"class","relative group"),f(Ad,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ki,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ki,"rel","nofollow"),f(Od,"href","/docs/transformers/main/en/model_doc/electra#transformers.TFElectraForQuestionAnswering"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qs,"id","transformers.FlaxElectraModel"),f(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(qs,"href","#transformers.FlaxElectraModel"),f(en,"class","relative group"),f(Ld,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(wi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(wi,"rel","nofollow"),f($i,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f($i,"rel","nofollow"),f(Fi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Fi,"rel","nofollow"),f(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(xi,"rel","nofollow"),f(Mi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Mi,"rel","nofollow"),f(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Os,"id","transformers.FlaxElectraForPreTraining"),f(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Os,"href","#transformers.FlaxElectraForPreTraining"),f(on,"class","relative group"),f(Nd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ai,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Ai,"rel","nofollow"),f(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Oi,"rel","nofollow"),f(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Li,"rel","nofollow"),f(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ni,"rel","nofollow"),f(Ii,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ii,"rel","nofollow"),f(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Is,"id","transformers.FlaxElectraForMaskedLM"),f(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Is,"href","#transformers.FlaxElectraForMaskedLM"),f(sn,"class","relative group"),f(Id,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Qi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Qi,"rel","nofollow"),f(Bi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Bi,"rel","nofollow"),f(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Vi,"rel","nofollow"),f(Ki,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ki,"rel","nofollow"),f(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ji,"rel","nofollow"),f(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ws,"id","transformers.FlaxElectraForSequenceClassification"),f(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ws,"href","#transformers.FlaxElectraForSequenceClassification"),f(rn,"class","relative group"),f(Sd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(tl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(tl,"rel","nofollow"),f(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ol,"rel","nofollow"),f(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(nl,"rel","nofollow"),f(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(sl,"rel","nofollow"),f(al,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(al,"rel","nofollow"),f(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Hs,"id","transformers.FlaxElectraForMultipleChoice"),f(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Hs,"href","#transformers.FlaxElectraForMultipleChoice"),f(dn,"class","relative group"),f(Dd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(pl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(pl,"rel","nofollow"),f(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(hl,"rel","nofollow"),f(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ml,"rel","nofollow"),f(ul,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ul,"rel","nofollow"),f(fl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(fl,"rel","nofollow"),f(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vs,"id","transformers.FlaxElectraForTokenClassification"),f(Vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Vs,"href","#transformers.FlaxElectraForTokenClassification"),f(pn,"class","relative group"),f(Wd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(bl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(bl,"rel","nofollow"),f(yl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(yl,"rel","nofollow"),f(El,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(El,"rel","nofollow"),f(wl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(wl,"rel","nofollow"),f($l,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f($l,"rel","nofollow"),f(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gs,"id","transformers.FlaxElectraForQuestionAnswering"),f(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Gs,"href","#transformers.FlaxElectraForQuestionAnswering"),f(mn,"class","relative group"),f(Ud,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(jl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(jl,"rel","nofollow"),f(ql,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ql,"rel","nofollow"),f(Pl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Pl,"rel","nofollow"),f(Al,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Al,"rel","nofollow"),f(Ol,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ol,"rel","nofollow"),f(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,T){e(document.head,d),k(o,g,T),k(o,h,T),e(h,m),e(m,_),E(l,_,null),e(h,u),e(h,M),e(M,ue),k(o,J,T),k(o,C,T),e(C,ee),e(ee,S),E(oe,S,null),e(C,fe),e(C,D),e(D,ge),k(o,pe,T),k(o,K,T),e(K,O),e(K,ne),e(ne,X),e(K,j),k(o,P,T),k(o,ae,T),e(ae,R),k(o,he,T),k(o,re,T),e(re,W),e(W,_e),k(o,me,T),k(o,q,T),e(q,ke),k(o,U,T),k(o,te,T),e(te,ie),e(ie,H),e(te,Te),e(te,G),e(G,L),e(G,se),e(se,Q),e(G,ve),e(G,v),e(v,z),e(G,Y),e(G,Fe),e(Fe,ze),e(G,N),k(o,xe,T),k(o,be,T),e(be,Ce),e(be,A),e(A,B),e(be,je),e(be,we),e(we,V),e(be,qe),k(o,Me,T),k(o,Z,T),e(Z,ye),e(ye,uc),E(ya,uc,null),e(Z,dg),e(Z,fc),e(fc,cg),k(o,Qm,T),k(o,vt,T),E(Ea,vt,null),e(vt,pg),e(vt,Ht),e(Ht,hg),e(Ht,Kl),e(Kl,mg),e(Ht,ug),e(Ht,Jl),e(Jl,fg),e(Ht,gg),e(Ht,wa),e(wa,_g),e(Ht,kg),e(vt,Tg),e(vt,go),e(go,vg),e(go,Gl),e(Gl,bg),e(go,yg),e(go,Xl),e(Xl,Eg),e(go,wg),e(vt,$g),E(kn,vt,null),k(o,Bm,T),k(o,_o,T),e(_o,Tn),e(Tn,gc),E($a,gc,null),e(_o,Fg),e(_o,_c),e(_c,xg),k(o,Vm,T),k(o,bt,T),E(Fa,bt,null),e(bt,Mg),e(bt,kc),e(kc,zg),e(bt,Cg),e(bt,vn),e(vn,Yl),e(Yl,jg),e(vn,qg),e(vn,Zl),e(Zl,Pg),e(vn,Ag),e(bt,Og),e(bt,xa),e(xa,Lg),e(xa,ed),e(ed,Ng),e(xa,Ig),k(o,Km,T),k(o,ko,T),e(ko,bn),e(bn,Tc),E(Ma,Tc,null),e(ko,Sg),e(ko,vc),e(vc,Dg),k(o,Jm,T),k(o,yt,T),E(za,yt,null),e(yt,Wg),e(yt,Ca),e(Ca,Ug),e(Ca,bc),e(bc,Rg),e(Ca,Hg),e(yt,Qg),e(yt,yn),e(yn,td),e(td,Bg),e(yn,Vg),e(yn,od),e(od,Kg),e(yn,Jg),e(yt,Gg),e(yt,ja),e(ja,Xg),e(ja,nd),e(nd,Yg),e(ja,Zg),k(o,Gm,T),k(o,To,T),e(To,En),e(En,yc),E(qa,yc,null),e(To,e_),e(To,Ec),e(Ec,t_),k(o,Xm,T),k(o,vo,T),E(Pa,vo,null),e(vo,o_),e(vo,Aa),e(Aa,n_),e(Aa,sd),e(sd,s_),e(Aa,a_),k(o,Ym,T),k(o,bo,T),E(Oa,bo,null),e(bo,r_),e(bo,La),e(La,i_),e(La,ad),e(ad,l_),e(La,d_),k(o,Zm,T),k(o,yo,T),e(yo,wn),e(wn,wc),E(Na,wc,null),e(yo,c_),e(yo,$c),e($c,p_),k(o,eu,T),k(o,Ze,T),E(Ia,Ze,null),e(Ze,h_),e(Ze,Fc),e(Fc,m_),e(Ze,u_),e(Ze,Sa),e(Sa,f_),e(Sa,rd),e(rd,g_),e(Sa,__),e(Ze,k_),e(Ze,Da),e(Da,T_),e(Da,Wa),e(Wa,v_),e(Da,b_),e(Ze,y_),e(Ze,Et),E(Ua,Et,null),e(Et,E_),e(Et,Eo),e(Eo,w_),e(Eo,id),e(id,$_),e(Eo,F_),e(Eo,xc),e(xc,x_),e(Eo,M_),e(Et,z_),E($n,Et,null),e(Et,C_),E(Fn,Et,null),k(o,tu,T),k(o,wo,T),e(wo,xn),e(xn,Mc),E(Ra,Mc,null),e(wo,j_),e(wo,zc),e(zc,q_),k(o,ou,T),k(o,He,T),E(Ha,He,null),e(He,P_),e(He,Cc),e(Cc,A_),e(He,O_),e(He,jc),e(jc,L_),e(He,N_),e(He,Qa),e(Qa,I_),e(Qa,ld),e(ld,S_),e(Qa,D_),e(He,W_),e(He,Ba),e(Ba,U_),e(Ba,Va),e(Va,R_),e(Ba,H_),e(He,Q_),e(He,wt),E(Ka,wt,null),e(wt,B_),e(wt,$o),e($o,V_),e($o,dd),e(dd,K_),e($o,J_),e($o,qc),e(qc,G_),e($o,X_),e(wt,Y_),E(Mn,wt,null),e(wt,Z_),E(zn,wt,null),k(o,nu,T),k(o,Fo,T),e(Fo,Cn),e(Cn,Pc),E(Ja,Pc,null),e(Fo,ek),e(Fo,Ac),e(Ac,tk),k(o,su,T),k(o,et,T),E(Ga,et,null),e(et,ok),e(et,Xa),e(Xa,nk),e(Xa,Oc),e(Oc,sk),e(Xa,ak),e(et,rk),e(et,Ya),e(Ya,ik),e(Ya,cd),e(cd,lk),e(Ya,dk),e(et,ck),e(et,Za),e(Za,pk),e(Za,er),e(er,hk),e(Za,mk),e(et,uk),e(et,$t),E(tr,$t,null),e($t,fk),e($t,xo),e(xo,gk),e(xo,pd),e(pd,_k),e(xo,kk),e(xo,Lc),e(Lc,Tk),e(xo,vk),e($t,bk),E(jn,$t,null),e($t,yk),E(qn,$t,null),k(o,au,T),k(o,Mo,T),e(Mo,Pn),e(Pn,Nc),E(or,Nc,null),e(Mo,Ek),e(Mo,Ic),e(Ic,wk),k(o,ru,T),k(o,Qe,T),E(nr,Qe,null),e(Qe,$k),e(Qe,Sc),e(Sc,Fk),e(Qe,xk),e(Qe,Dc),e(Dc,Mk),e(Qe,zk),e(Qe,sr),e(sr,Ck),e(sr,hd),e(hd,jk),e(sr,qk),e(Qe,Pk),e(Qe,ar),e(ar,Ak),e(ar,rr),e(rr,Ok),e(ar,Lk),e(Qe,Nk),e(Qe,st),E(ir,st,null),e(st,Ik),e(st,zo),e(zo,Sk),e(zo,md),e(md,Dk),e(zo,Wk),e(zo,Wc),e(Wc,Uk),e(zo,Rk),e(st,Hk),E(An,st,null),e(st,Qk),E(On,st,null),e(st,Bk),E(Ln,st,null),k(o,iu,T),k(o,Co,T),e(Co,Nn),e(Nn,Uc),E(lr,Uc,null),e(Co,Vk),e(Co,Rc),e(Rc,Kk),k(o,lu,T),k(o,tt,T),E(dr,tt,null),e(tt,Jk),e(tt,Hc),e(Hc,Gk),e(tt,Xk),e(tt,cr),e(cr,Yk),e(cr,ud),e(ud,Zk),e(cr,eT),e(tt,tT),e(tt,pr),e(pr,oT),e(pr,hr),e(hr,nT),e(pr,sT),e(tt,aT),e(tt,Re),E(mr,Re,null),e(Re,rT),e(Re,jo),e(jo,iT),e(jo,fd),e(fd,lT),e(jo,dT),e(jo,Qc),e(Qc,cT),e(jo,pT),e(Re,hT),E(In,Re,null),e(Re,mT),E(Sn,Re,null),e(Re,uT),E(Dn,Re,null),e(Re,fT),E(Wn,Re,null),e(Re,gT),E(Un,Re,null),k(o,du,T),k(o,qo,T),e(qo,Rn),e(Rn,Bc),E(ur,Bc,null),e(qo,_T),e(qo,Vc),e(Vc,kT),k(o,cu,T),k(o,ot,T),E(fr,ot,null),e(ot,TT),e(ot,Kc),e(Kc,vT),e(ot,bT),e(ot,gr),e(gr,yT),e(gr,gd),e(gd,ET),e(gr,wT),e(ot,$T),e(ot,_r),e(_r,FT),e(_r,kr),e(kr,xT),e(_r,MT),e(ot,zT),e(ot,Ft),E(Tr,Ft,null),e(Ft,CT),e(Ft,Po),e(Po,jT),e(Po,_d),e(_d,qT),e(Po,PT),e(Po,Jc),e(Jc,AT),e(Po,OT),e(Ft,LT),E(Hn,Ft,null),e(Ft,NT),E(Qn,Ft,null),k(o,pu,T),k(o,Ao,T),e(Ao,Bn),e(Bn,Gc),E(vr,Gc,null),e(Ao,IT),e(Ao,Xc),e(Xc,ST),k(o,hu,T),k(o,Be,T),E(br,Be,null),e(Be,DT),e(Be,Yc),e(Yc,WT),e(Be,UT),e(Be,Zc),e(Zc,RT),e(Be,HT),e(Be,yr),e(yr,QT),e(yr,kd),e(kd,BT),e(yr,VT),e(Be,KT),e(Be,Er),e(Er,JT),e(Er,wr),e(wr,GT),e(Er,XT),e(Be,YT),e(Be,at),E($r,at,null),e(at,ZT),e(at,Oo),e(Oo,ev),e(Oo,Td),e(Td,tv),e(Oo,ov),e(Oo,ep),e(ep,nv),e(Oo,sv),e(at,av),E(Vn,at,null),e(at,rv),E(Kn,at,null),e(at,iv),E(Jn,at,null),k(o,mu,T),k(o,Lo,T),e(Lo,Gn),e(Gn,tp),E(Fr,tp,null),e(Lo,lv),e(Lo,op),e(op,dv),k(o,uu,T),k(o,nt,T),E(xr,nt,null),e(nt,cv),e(nt,No),e(No,pv),e(No,np),e(np,hv),e(No,mv),e(No,sp),e(sp,uv),e(No,fv),e(nt,gv),e(nt,Mr),e(Mr,_v),e(Mr,vd),e(vd,kv),e(Mr,Tv),e(nt,vv),e(nt,zr),e(zr,bv),e(zr,Cr),e(Cr,yv),e(zr,Ev),e(nt,wv),e(nt,rt),E(jr,rt,null),e(rt,$v),e(rt,Io),e(Io,Fv),e(Io,bd),e(bd,xv),e(Io,Mv),e(Io,ap),e(ap,zv),e(Io,Cv),e(rt,jv),E(Xn,rt,null),e(rt,qv),E(Yn,rt,null),e(rt,Pv),E(Zn,rt,null),k(o,fu,T),k(o,So,T),e(So,es),e(es,rp),E(qr,rp,null),e(So,Av),e(So,ip),e(ip,Ov),k(o,gu,T),k(o,Ve,T),E(Pr,Ve,null),e(Ve,Lv),e(Ve,lp),e(lp,Nv),e(Ve,Iv),e(Ve,Ar),e(Ar,Sv),e(Ar,yd),e(yd,Dv),e(Ar,Wv),e(Ve,Uv),e(Ve,Or),e(Or,Rv),e(Or,Lr),e(Lr,Hv),e(Or,Qv),e(Ve,Bv),E(ts,Ve,null),e(Ve,Vv),e(Ve,xt),E(Nr,xt,null),e(xt,Kv),e(xt,Do),e(Do,Jv),e(Do,Ed),e(Ed,Gv),e(Do,Xv),e(Do,dp),e(dp,Yv),e(Do,Zv),e(xt,eb),E(os,xt,null),e(xt,tb),E(ns,xt,null),k(o,_u,T),k(o,Wo,T),e(Wo,ss),e(ss,cp),E(Ir,cp,null),e(Wo,ob),e(Wo,pp),e(pp,nb),k(o,ku,T),k(o,Oe,T),E(Sr,Oe,null),e(Oe,sb),e(Oe,hp),e(hp,ab),e(Oe,rb),e(Oe,mp),e(mp,ib),e(Oe,lb),e(Oe,Dr),e(Dr,db),e(Dr,wd),e(wd,cb),e(Dr,pb),e(Oe,hb),e(Oe,Wr),e(Wr,mb),e(Wr,Ur),e(Ur,ub),e(Wr,fb),e(Oe,gb),E(as,Oe,null),e(Oe,_b),e(Oe,Mt),E(Rr,Mt,null),e(Mt,kb),e(Mt,Uo),e(Uo,Tb),e(Uo,$d),e($d,vb),e(Uo,bb),e(Uo,up),e(up,yb),e(Uo,Eb),e(Mt,wb),E(rs,Mt,null),e(Mt,$b),E(is,Mt,null),k(o,Tu,T),k(o,Ro,T),e(Ro,ls),e(ls,fp),E(Hr,fp,null),e(Ro,Fb),e(Ro,gp),e(gp,xb),k(o,vu,T),k(o,Le,T),E(Qr,Le,null),e(Le,Mb),e(Le,_p),e(_p,zb),e(Le,Cb),e(Le,kp),e(kp,jb),e(Le,qb),e(Le,Br),e(Br,Pb),e(Br,Fd),e(Fd,Ab),e(Br,Ob),e(Le,Lb),e(Le,Vr),e(Vr,Nb),e(Vr,Kr),e(Kr,Ib),e(Vr,Sb),e(Le,Db),E(ds,Le,null),e(Le,Wb),e(Le,it),E(Jr,it,null),e(it,Ub),e(it,Ho),e(Ho,Rb),e(Ho,xd),e(xd,Hb),e(Ho,Qb),e(Ho,Tp),e(Tp,Bb),e(Ho,Vb),e(it,Kb),E(cs,it,null),e(it,Jb),E(ps,it,null),e(it,Gb),E(hs,it,null),k(o,bu,T),k(o,Qo,T),e(Qo,ms),e(ms,vp),E(Gr,vp,null),e(Qo,Xb),e(Qo,bp),e(bp,Yb),k(o,yu,T),k(o,Ke,T),E(Xr,Ke,null),e(Ke,Zb),e(Ke,yp),e(yp,ey),e(Ke,ty),e(Ke,Yr),e(Yr,oy),e(Yr,Md),e(Md,ny),e(Yr,sy),e(Ke,ay),e(Ke,Zr),e(Zr,ry),e(Zr,ei),e(ei,iy),e(Zr,ly),e(Ke,dy),E(us,Ke,null),e(Ke,cy),e(Ke,lt),E(ti,lt,null),e(lt,py),e(lt,Bo),e(Bo,hy),e(Bo,zd),e(zd,my),e(Bo,uy),e(Bo,Ep),e(Ep,fy),e(Bo,gy),e(lt,_y),E(fs,lt,null),e(lt,ky),E(gs,lt,null),e(lt,Ty),E(_s,lt,null),k(o,Eu,T),k(o,Vo,T),e(Vo,ks),e(ks,wp),E(oi,wp,null),e(Vo,vy),e(Vo,$p),e($p,by),k(o,wu,T),k(o,Je,T),E(ni,Je,null),e(Je,yy),e(Je,Fp),e(Fp,Ey),e(Je,wy),e(Je,si),e(si,$y),e(si,Cd),e(Cd,Fy),e(si,xy),e(Je,My),e(Je,ai),e(ai,zy),e(ai,ri),e(ri,Cy),e(ai,jy),e(Je,qy),E(Ts,Je,null),e(Je,Py),e(Je,zt),E(ii,zt,null),e(zt,Ay),e(zt,Ko),e(Ko,Oy),e(Ko,jd),e(jd,Ly),e(Ko,Ny),e(Ko,xp),e(xp,Iy),e(Ko,Sy),e(zt,Dy),E(vs,zt,null),e(zt,Wy),E(bs,zt,null),k(o,$u,T),k(o,Jo,T),e(Jo,ys),e(ys,Mp),E(li,Mp,null),e(Jo,Uy),e(Jo,zp),e(zp,Ry),k(o,Fu,T),k(o,Ne,T),E(di,Ne,null),e(Ne,Hy),e(Ne,Cp),e(Cp,Qy),e(Ne,By),e(Ne,jp),e(jp,Vy),e(Ne,Ky),e(Ne,ci),e(ci,Jy),e(ci,qd),e(qd,Gy),e(ci,Xy),e(Ne,Yy),e(Ne,pi),e(pi,Zy),e(pi,hi),e(hi,eE),e(pi,tE),e(Ne,oE),E(Es,Ne,null),e(Ne,nE),e(Ne,dt),E(mi,dt,null),e(dt,sE),e(dt,Go),e(Go,aE),e(Go,Pd),e(Pd,rE),e(Go,iE),e(Go,qp),e(qp,lE),e(Go,dE),e(dt,cE),E(ws,dt,null),e(dt,pE),E($s,dt,null),e(dt,hE),E(Fs,dt,null),k(o,xu,T),k(o,Xo,T),e(Xo,xs),e(xs,Pp),E(ui,Pp,null),e(Xo,mE),e(Xo,Ap),e(Ap,uE),k(o,Mu,T),k(o,Ge,T),E(fi,Ge,null),e(Ge,fE),e(Ge,Yo),e(Yo,gE),e(Yo,Op),e(Op,_E),e(Yo,kE),e(Yo,Lp),e(Lp,TE),e(Yo,vE),e(Ge,bE),e(Ge,gi),e(gi,yE),e(gi,Ad),e(Ad,EE),e(gi,wE),e(Ge,$E),e(Ge,_i),e(_i,FE),e(_i,ki),e(ki,xE),e(_i,ME),e(Ge,zE),E(Ms,Ge,null),e(Ge,CE),e(Ge,ct),E(Ti,ct,null),e(ct,jE),e(ct,Zo),e(Zo,qE),e(Zo,Od),e(Od,PE),e(Zo,AE),e(Zo,Np),e(Np,OE),e(Zo,LE),e(ct,NE),E(zs,ct,null),e(ct,IE),E(Cs,ct,null),e(ct,SE),E(js,ct,null),k(o,zu,T),k(o,en,T),e(en,qs),e(qs,Ip),E(vi,Ip,null),e(en,DE),e(en,Sp),e(Sp,WE),k(o,Cu,T),k(o,Ie,T),E(bi,Ie,null),e(Ie,UE),e(Ie,Dp),e(Dp,RE),e(Ie,HE),e(Ie,yi),e(yi,QE),e(yi,Ld),e(Ld,BE),e(yi,VE),e(Ie,KE),e(Ie,Ei),e(Ei,JE),e(Ei,wi),e(wi,GE),e(Ei,XE),e(Ie,YE),e(Ie,Wp),e(Wp,ZE),e(Ie,ew),e(Ie,Qt),e(Qt,Up),e(Up,$i),e($i,tw),e(Qt,ow),e(Qt,Rp),e(Rp,Fi),e(Fi,nw),e(Qt,sw),e(Qt,Hp),e(Hp,xi),e(xi,aw),e(Qt,rw),e(Qt,Qp),e(Qp,Mi),e(Mi,iw),e(Ie,lw),e(Ie,Ct),E(zi,Ct,null),e(Ct,dw),e(Ct,tn),e(tn,cw),e(tn,Bp),e(Bp,pw),e(tn,hw),e(tn,Vp),e(Vp,mw),e(tn,uw),e(Ct,fw),E(Ps,Ct,null),e(Ct,gw),E(As,Ct,null),k(o,ju,T),k(o,on,T),e(on,Os),e(Os,Kp),E(Ci,Kp,null),e(on,_w),e(on,Jp),e(Jp,kw),k(o,qu,T),k(o,Pe,T),E(ji,Pe,null),e(Pe,Tw),e(Pe,Gp),e(Gp,vw),e(Pe,bw),e(Pe,Xp),e(Xp,yw),e(Pe,Ew),e(Pe,qi),e(qi,ww),e(qi,Nd),e(Nd,$w),e(qi,Fw),e(Pe,xw),e(Pe,Pi),e(Pi,Mw),e(Pi,Ai),e(Ai,zw),e(Pi,Cw),e(Pe,jw),e(Pe,Yp),e(Yp,qw),e(Pe,Pw),e(Pe,Bt),e(Bt,Zp),e(Zp,Oi),e(Oi,Aw),e(Bt,Ow),e(Bt,eh),e(eh,Li),e(Li,Lw),e(Bt,Nw),e(Bt,th),e(th,Ni),e(Ni,Iw),e(Bt,Sw),e(Bt,oh),e(oh,Ii),e(Ii,Dw),e(Pe,Ww),e(Pe,jt),E(Si,jt,null),e(jt,Uw),e(jt,nn),e(nn,Rw),e(nn,nh),e(nh,Hw),e(nn,Qw),e(nn,sh),e(sh,Bw),e(nn,Vw),e(jt,Kw),E(Ls,jt,null),e(jt,Jw),E(Ns,jt,null),k(o,Pu,T),k(o,sn,T),e(sn,Is),e(Is,ah),E(Di,ah,null),e(sn,Gw),e(sn,rh),e(rh,Xw),k(o,Au,T),k(o,Se,T),E(Wi,Se,null),e(Se,Yw),e(Se,Ui),e(Ui,Zw),e(Ui,ih),e(ih,e$),e(Ui,t$),e(Se,o$),e(Se,Ri),e(Ri,n$),e(Ri,Id),e(Id,s$),e(Ri,a$),e(Se,r$),e(Se,Hi),e(Hi,i$),e(Hi,Qi),e(Qi,l$),e(Hi,d$),e(Se,c$),e(Se,lh),e(lh,p$),e(Se,h$),e(Se,Vt),e(Vt,dh),e(dh,Bi),e(Bi,m$),e(Vt,u$),e(Vt,ch),e(ch,Vi),e(Vi,f$),e(Vt,g$),e(Vt,ph),e(ph,Ki),e(Ki,_$),e(Vt,k$),e(Vt,hh),e(hh,Ji),e(Ji,T$),e(Se,v$),e(Se,qt),E(Gi,qt,null),e(qt,b$),e(qt,an),e(an,y$),e(an,mh),e(mh,E$),e(an,w$),e(an,uh),e(uh,$$),e(an,F$),e(qt,x$),E(Ss,qt,null),e(qt,M$),E(Ds,qt,null),k(o,Ou,T),k(o,rn,T),e(rn,Ws),e(Ws,fh),E(Xi,fh,null),e(rn,z$),e(rn,gh),e(gh,C$),k(o,Lu,T),k(o,De,T),E(Yi,De,null),e(De,j$),e(De,_h),e(_h,q$),e(De,P$),e(De,Zi),e(Zi,A$),e(Zi,Sd),e(Sd,O$),e(Zi,L$),e(De,N$),e(De,el),e(el,I$),e(el,tl),e(tl,S$),e(el,D$),e(De,W$),e(De,kh),e(kh,U$),e(De,R$),e(De,Kt),e(Kt,Th),e(Th,ol),e(ol,H$),e(Kt,Q$),e(Kt,vh),e(vh,nl),e(nl,B$),e(Kt,V$),e(Kt,bh),e(bh,sl),e(sl,K$),e(Kt,J$),e(Kt,yh),e(yh,al),e(al,G$),e(De,X$),e(De,Pt),E(rl,Pt,null),e(Pt,Y$),e(Pt,ln),e(ln,Z$),e(ln,Eh),e(Eh,e1),e(ln,t1),e(ln,wh),e(wh,o1),e(ln,n1),e(Pt,s1),E(Us,Pt,null),e(Pt,a1),E(Rs,Pt,null),k(o,Nu,T),k(o,dn,T),e(dn,Hs),e(Hs,$h),E(il,$h,null),e(dn,r1),e(dn,Fh),e(Fh,i1),k(o,Iu,T),k(o,We,T),E(ll,We,null),e(We,l1),e(We,xh),e(xh,d1),e(We,c1),e(We,dl),e(dl,p1),e(dl,Dd),e(Dd,h1),e(dl,m1),e(We,u1),e(We,cl),e(cl,f1),e(cl,pl),e(pl,g1),e(cl,_1),e(We,k1),e(We,Mh),e(Mh,T1),e(We,v1),e(We,Jt),e(Jt,zh),e(zh,hl),e(hl,b1),e(Jt,y1),e(Jt,Ch),e(Ch,ml),e(ml,E1),e(Jt,w1),e(Jt,jh),e(jh,ul),e(ul,$1),e(Jt,F1),e(Jt,qh),e(qh,fl),e(fl,x1),e(We,M1),e(We,At),E(gl,At,null),e(At,z1),e(At,cn),e(cn,C1),e(cn,Ph),e(Ph,j1),e(cn,q1),e(cn,Ah),e(Ah,P1),e(cn,A1),e(At,O1),E(Qs,At,null),e(At,L1),E(Bs,At,null),k(o,Su,T),k(o,pn,T),e(pn,Vs),e(Vs,Oh),E(_l,Oh,null),e(pn,N1),e(pn,Lh),e(Lh,I1),k(o,Du,T),k(o,Ae,T),E(kl,Ae,null),e(Ae,S1),e(Ae,Nh),e(Nh,D1),e(Ae,W1),e(Ae,Ih),e(Ih,U1),e(Ae,R1),e(Ae,Tl),e(Tl,H1),e(Tl,Wd),e(Wd,Q1),e(Tl,B1),e(Ae,V1),e(Ae,vl),e(vl,K1),e(vl,bl),e(bl,J1),e(vl,G1),e(Ae,X1),e(Ae,Sh),e(Sh,Y1),e(Ae,Z1),e(Ae,Gt),e(Gt,Dh),e(Dh,yl),e(yl,e2),e(Gt,t2),e(Gt,Wh),e(Wh,El),e(El,o2),e(Gt,n2),e(Gt,Uh),e(Uh,wl),e(wl,s2),e(Gt,a2),e(Gt,Rh),e(Rh,$l),e($l,r2),e(Ae,i2),e(Ae,Ot),E(Fl,Ot,null),e(Ot,l2),e(Ot,hn),e(hn,d2),e(hn,Hh),e(Hh,c2),e(hn,p2),e(hn,Qh),e(Qh,h2),e(hn,m2),e(Ot,u2),E(Ks,Ot,null),e(Ot,f2),E(Js,Ot,null),k(o,Wu,T),k(o,mn,T),e(mn,Gs),e(Gs,Bh),E(xl,Bh,null),e(mn,g2),e(mn,Vh),e(Vh,_2),k(o,Uu,T),k(o,Ue,T),E(Ml,Ue,null),e(Ue,k2),e(Ue,un),e(un,T2),e(un,Kh),e(Kh,v2),e(un,b2),e(un,Jh),e(Jh,y2),e(un,E2),e(Ue,w2),e(Ue,zl),e(zl,$2),e(zl,Ud),e(Ud,F2),e(zl,x2),e(Ue,M2),e(Ue,Cl),e(Cl,z2),e(Cl,jl),e(jl,C2),e(Cl,j2),e(Ue,q2),e(Ue,Gh),e(Gh,P2),e(Ue,A2),e(Ue,Xt),e(Xt,Xh),e(Xh,ql),e(ql,O2),e(Xt,L2),e(Xt,Yh),e(Yh,Pl),e(Pl,N2),e(Xt,I2),e(Xt,Zh),e(Zh,Al),e(Al,S2),e(Xt,D2),e(Xt,em),e(em,Ol),e(Ol,W2),e(Ue,U2),e(Ue,Lt),E(Ll,Lt,null),e(Lt,R2),e(Lt,fn),e(fn,H2),e(fn,tm),e(tm,Q2),e(fn,B2),e(fn,om),e(om,V2),e(fn,K2),e(Lt,J2),E(Xs,Lt,null),e(Lt,G2),E(Ys,Lt,null),Ru=!0},p(o,[T]){const Nl={};T&2&&(Nl.$$scope={dirty:T,ctx:o}),kn.$set(Nl);const nm={};T&2&&(nm.$$scope={dirty:T,ctx:o}),$n.$set(nm);const sm={};T&2&&(sm.$$scope={dirty:T,ctx:o}),Fn.$set(sm);const am={};T&2&&(am.$$scope={dirty:T,ctx:o}),Mn.$set(am);const Il={};T&2&&(Il.$$scope={dirty:T,ctx:o}),zn.$set(Il);const rm={};T&2&&(rm.$$scope={dirty:T,ctx:o}),jn.$set(rm);const im={};T&2&&(im.$$scope={dirty:T,ctx:o}),qn.$set(im);const lm={};T&2&&(lm.$$scope={dirty:T,ctx:o}),An.$set(lm);const Sl={};T&2&&(Sl.$$scope={dirty:T,ctx:o}),On.$set(Sl);const dm={};T&2&&(dm.$$scope={dirty:T,ctx:o}),Ln.$set(dm);const cm={};T&2&&(cm.$$scope={dirty:T,ctx:o}),In.$set(cm);const pm={};T&2&&(pm.$$scope={dirty:T,ctx:o}),Sn.$set(pm);const hm={};T&2&&(hm.$$scope={dirty:T,ctx:o}),Dn.$set(hm);const mm={};T&2&&(mm.$$scope={dirty:T,ctx:o}),Wn.$set(mm);const Dl={};T&2&&(Dl.$$scope={dirty:T,ctx:o}),Un.$set(Dl);const um={};T&2&&(um.$$scope={dirty:T,ctx:o}),Hn.$set(um);const Yt={};T&2&&(Yt.$$scope={dirty:T,ctx:o}),Qn.$set(Yt);const fm={};T&2&&(fm.$$scope={dirty:T,ctx:o}),Vn.$set(fm);const gm={};T&2&&(gm.$$scope={dirty:T,ctx:o}),Kn.$set(gm);const _m={};T&2&&(_m.$$scope={dirty:T,ctx:o}),Jn.$set(_m);const gn={};T&2&&(gn.$$scope={dirty:T,ctx:o}),Xn.$set(gn);const km={};T&2&&(km.$$scope={dirty:T,ctx:o}),Yn.$set(km);const Tm={};T&2&&(Tm.$$scope={dirty:T,ctx:o}),Zn.$set(Tm);const Wl={};T&2&&(Wl.$$scope={dirty:T,ctx:o}),ts.$set(Wl);const vm={};T&2&&(vm.$$scope={dirty:T,ctx:o}),os.$set(vm);const bm={};T&2&&(bm.$$scope={dirty:T,ctx:o}),ns.$set(bm);const ym={};T&2&&(ym.$$scope={dirty:T,ctx:o}),as.$set(ym);const Zt={};T&2&&(Zt.$$scope={dirty:T,ctx:o}),rs.$set(Zt);const eo={};T&2&&(eo.$$scope={dirty:T,ctx:o}),is.$set(eo);const Em={};T&2&&(Em.$$scope={dirty:T,ctx:o}),ds.$set(Em);const wm={};T&2&&(wm.$$scope={dirty:T,ctx:o}),cs.$set(wm);const $m={};T&2&&($m.$$scope={dirty:T,ctx:o}),ps.$set($m);const _n={};T&2&&(_n.$$scope={dirty:T,ctx:o}),hs.$set(_n);const Fm={};T&2&&(Fm.$$scope={dirty:T,ctx:o}),us.$set(Fm);const xm={};T&2&&(xm.$$scope={dirty:T,ctx:o}),fs.$set(xm);const Ul={};T&2&&(Ul.$$scope={dirty:T,ctx:o}),gs.$set(Ul);const Mm={};T&2&&(Mm.$$scope={dirty:T,ctx:o}),_s.$set(Mm);const zm={};T&2&&(zm.$$scope={dirty:T,ctx:o}),Ts.$set(zm);const Cm={};T&2&&(Cm.$$scope={dirty:T,ctx:o}),vs.$set(Cm);const to={};T&2&&(to.$$scope={dirty:T,ctx:o}),bs.$set(to);const jm={};T&2&&(jm.$$scope={dirty:T,ctx:o}),Es.$set(jm);const Zs={};T&2&&(Zs.$$scope={dirty:T,ctx:o}),ws.$set(Zs);const qm={};T&2&&(qm.$$scope={dirty:T,ctx:o}),$s.$set(qm);const Pm={};T&2&&(Pm.$$scope={dirty:T,ctx:o}),Fs.$set(Pm);const Rl={};T&2&&(Rl.$$scope={dirty:T,ctx:o}),Ms.$set(Rl);const Am={};T&2&&(Am.$$scope={dirty:T,ctx:o}),zs.$set(Am);const Hl={};T&2&&(Hl.$$scope={dirty:T,ctx:o}),Cs.$set(Hl);const Om={};T&2&&(Om.$$scope={dirty:T,ctx:o}),js.$set(Om);const Lm={};T&2&&(Lm.$$scope={dirty:T,ctx:o}),Ps.$set(Lm);const Nm={};T&2&&(Nm.$$scope={dirty:T,ctx:o}),As.$set(Nm);const oo={};T&2&&(oo.$$scope={dirty:T,ctx:o}),Ls.$set(oo);const Ql={};T&2&&(Ql.$$scope={dirty:T,ctx:o}),Ns.$set(Ql);const Im={};T&2&&(Im.$$scope={dirty:T,ctx:o}),Ss.$set(Im);const ea={};T&2&&(ea.$$scope={dirty:T,ctx:o}),Ds.$set(ea);const Sm={};T&2&&(Sm.$$scope={dirty:T,ctx:o}),Us.$set(Sm);const Dm={};T&2&&(Dm.$$scope={dirty:T,ctx:o}),Rs.$set(Dm);const Bl={};T&2&&(Bl.$$scope={dirty:T,ctx:o}),Qs.$set(Bl);const Wm={};T&2&&(Wm.$$scope={dirty:T,ctx:o}),Bs.$set(Wm);const Vl={};T&2&&(Vl.$$scope={dirty:T,ctx:o}),Ks.$set(Vl);const Um={};T&2&&(Um.$$scope={dirty:T,ctx:o}),Js.$set(Um);const Rm={};T&2&&(Rm.$$scope={dirty:T,ctx:o}),Xs.$set(Rm);const Hm={};T&2&&(Hm.$$scope={dirty:T,ctx:o}),Ys.$set(Hm)},i(o){Ru||(w(l.$$.fragment,o),w(oe.$$.fragment,o),w(ya.$$.fragment,o),w(Ea.$$.fragment,o),w(kn.$$.fragment,o),w($a.$$.fragment,o),w(Fa.$$.fragment,o),w(Ma.$$.fragment,o),w(za.$$.fragment,o),w(qa.$$.fragment,o),w(Pa.$$.fragment,o),w(Oa.$$.fragment,o),w(Na.$$.fragment,o),w(Ia.$$.fragment,o),w(Ua.$$.fragment,o),w($n.$$.fragment,o),w(Fn.$$.fragment,o),w(Ra.$$.fragment,o),w(Ha.$$.fragment,o),w(Ka.$$.fragment,o),w(Mn.$$.fragment,o),w(zn.$$.fragment,o),w(Ja.$$.fragment,o),w(Ga.$$.fragment,o),w(tr.$$.fragment,o),w(jn.$$.fragment,o),w(qn.$$.fragment,o),w(or.$$.fragment,o),w(nr.$$.fragment,o),w(ir.$$.fragment,o),w(An.$$.fragment,o),w(On.$$.fragment,o),w(Ln.$$.fragment,o),w(lr.$$.fragment,o),w(dr.$$.fragment,o),w(mr.$$.fragment,o),w(In.$$.fragment,o),w(Sn.$$.fragment,o),w(Dn.$$.fragment,o),w(Wn.$$.fragment,o),w(Un.$$.fragment,o),w(ur.$$.fragment,o),w(fr.$$.fragment,o),w(Tr.$$.fragment,o),w(Hn.$$.fragment,o),w(Qn.$$.fragment,o),w(vr.$$.fragment,o),w(br.$$.fragment,o),w($r.$$.fragment,o),w(Vn.$$.fragment,o),w(Kn.$$.fragment,o),w(Jn.$$.fragment,o),w(Fr.$$.fragment,o),w(xr.$$.fragment,o),w(jr.$$.fragment,o),w(Xn.$$.fragment,o),w(Yn.$$.fragment,o),w(Zn.$$.fragment,o),w(qr.$$.fragment,o),w(Pr.$$.fragment,o),w(ts.$$.fragment,o),w(Nr.$$.fragment,o),w(os.$$.fragment,o),w(ns.$$.fragment,o),w(Ir.$$.fragment,o),w(Sr.$$.fragment,o),w(as.$$.fragment,o),w(Rr.$$.fragment,o),w(rs.$$.fragment,o),w(is.$$.fragment,o),w(Hr.$$.fragment,o),w(Qr.$$.fragment,o),w(ds.$$.fragment,o),w(Jr.$$.fragment,o),w(cs.$$.fragment,o),w(ps.$$.fragment,o),w(hs.$$.fragment,o),w(Gr.$$.fragment,o),w(Xr.$$.fragment,o),w(us.$$.fragment,o),w(ti.$$.fragment,o),w(fs.$$.fragment,o),w(gs.$$.fragment,o),w(_s.$$.fragment,o),w(oi.$$.fragment,o),w(ni.$$.fragment,o),w(Ts.$$.fragment,o),w(ii.$$.fragment,o),w(vs.$$.fragment,o),w(bs.$$.fragment,o),w(li.$$.fragment,o),w(di.$$.fragment,o),w(Es.$$.fragment,o),w(mi.$$.fragment,o),w(ws.$$.fragment,o),w($s.$$.fragment,o),w(Fs.$$.fragment,o),w(ui.$$.fragment,o),w(fi.$$.fragment,o),w(Ms.$$.fragment,o),w(Ti.$$.fragment,o),w(zs.$$.fragment,o),w(Cs.$$.fragment,o),w(js.$$.fragment,o),w(vi.$$.fragment,o),w(bi.$$.fragment,o),w(zi.$$.fragment,o),w(Ps.$$.fragment,o),w(As.$$.fragment,o),w(Ci.$$.fragment,o),w(ji.$$.fragment,o),w(Si.$$.fragment,o),w(Ls.$$.fragment,o),w(Ns.$$.fragment,o),w(Di.$$.fragment,o),w(Wi.$$.fragment,o),w(Gi.$$.fragment,o),w(Ss.$$.fragment,o),w(Ds.$$.fragment,o),w(Xi.$$.fragment,o),w(Yi.$$.fragment,o),w(rl.$$.fragment,o),w(Us.$$.fragment,o),w(Rs.$$.fragment,o),w(il.$$.fragment,o),w(ll.$$.fragment,o),w(gl.$$.fragment,o),w(Qs.$$.fragment,o),w(Bs.$$.fragment,o),w(_l.$$.fragment,o),w(kl.$$.fragment,o),w(Fl.$$.fragment,o),w(Ks.$$.fragment,o),w(Js.$$.fragment,o),w(xl.$$.fragment,o),w(Ml.$$.fragment,o),w(Ll.$$.fragment,o),w(Xs.$$.fragment,o),w(Ys.$$.fragment,o),Ru=!0)},o(o){$(l.$$.fragment,o),$(oe.$$.fragment,o),$(ya.$$.fragment,o),$(Ea.$$.fragment,o),$(kn.$$.fragment,o),$($a.$$.fragment,o),$(Fa.$$.fragment,o),$(Ma.$$.fragment,o),$(za.$$.fragment,o),$(qa.$$.fragment,o),$(Pa.$$.fragment,o),$(Oa.$$.fragment,o),$(Na.$$.fragment,o),$(Ia.$$.fragment,o),$(Ua.$$.fragment,o),$($n.$$.fragment,o),$(Fn.$$.fragment,o),$(Ra.$$.fragment,o),$(Ha.$$.fragment,o),$(Ka.$$.fragment,o),$(Mn.$$.fragment,o),$(zn.$$.fragment,o),$(Ja.$$.fragment,o),$(Ga.$$.fragment,o),$(tr.$$.fragment,o),$(jn.$$.fragment,o),$(qn.$$.fragment,o),$(or.$$.fragment,o),$(nr.$$.fragment,o),$(ir.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(Ln.$$.fragment,o),$(lr.$$.fragment,o),$(dr.$$.fragment,o),$(mr.$$.fragment,o),$(In.$$.fragment,o),$(Sn.$$.fragment,o),$(Dn.$$.fragment,o),$(Wn.$$.fragment,o),$(Un.$$.fragment,o),$(ur.$$.fragment,o),$(fr.$$.fragment,o),$(Tr.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(vr.$$.fragment,o),$(br.$$.fragment,o),$($r.$$.fragment,o),$(Vn.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Fr.$$.fragment,o),$(xr.$$.fragment,o),$(jr.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(qr.$$.fragment,o),$(Pr.$$.fragment,o),$(ts.$$.fragment,o),$(Nr.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(Ir.$$.fragment,o),$(Sr.$$.fragment,o),$(as.$$.fragment,o),$(Rr.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(Hr.$$.fragment,o),$(Qr.$$.fragment,o),$(ds.$$.fragment,o),$(Jr.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(Gr.$$.fragment,o),$(Xr.$$.fragment,o),$(us.$$.fragment,o),$(ti.$$.fragment,o),$(fs.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(oi.$$.fragment,o),$(ni.$$.fragment,o),$(Ts.$$.fragment,o),$(ii.$$.fragment,o),$(vs.$$.fragment,o),$(bs.$$.fragment,o),$(li.$$.fragment,o),$(di.$$.fragment,o),$(Es.$$.fragment,o),$(mi.$$.fragment,o),$(ws.$$.fragment,o),$($s.$$.fragment,o),$(Fs.$$.fragment,o),$(ui.$$.fragment,o),$(fi.$$.fragment,o),$(Ms.$$.fragment,o),$(Ti.$$.fragment,o),$(zs.$$.fragment,o),$(Cs.$$.fragment,o),$(js.$$.fragment,o),$(vi.$$.fragment,o),$(bi.$$.fragment,o),$(zi.$$.fragment,o),$(Ps.$$.fragment,o),$(As.$$.fragment,o),$(Ci.$$.fragment,o),$(ji.$$.fragment,o),$(Si.$$.fragment,o),$(Ls.$$.fragment,o),$(Ns.$$.fragment,o),$(Di.$$.fragment,o),$(Wi.$$.fragment,o),$(Gi.$$.fragment,o),$(Ss.$$.fragment,o),$(Ds.$$.fragment,o),$(Xi.$$.fragment,o),$(Yi.$$.fragment,o),$(rl.$$.fragment,o),$(Us.$$.fragment,o),$(Rs.$$.fragment,o),$(il.$$.fragment,o),$(ll.$$.fragment,o),$(gl.$$.fragment,o),$(Qs.$$.fragment,o),$(Bs.$$.fragment,o),$(_l.$$.fragment,o),$(kl.$$.fragment,o),$(Fl.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(xl.$$.fragment,o),$(Ml.$$.fragment,o),$(Ll.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),Ru=!1},d(o){t(d),o&&t(g),o&&t(h),F(l),o&&t(J),o&&t(C),F(oe),o&&t(pe),o&&t(K),o&&t(P),o&&t(ae),o&&t(he),o&&t(re),o&&t(me),o&&t(q),o&&t(U),o&&t(te),o&&t(xe),o&&t(be),o&&t(Me),o&&t(Z),F(ya),o&&t(Qm),o&&t(vt),F(Ea),F(kn),o&&t(Bm),o&&t(_o),F($a),o&&t(Vm),o&&t(bt),F(Fa),o&&t(Km),o&&t(ko),F(Ma),o&&t(Jm),o&&t(yt),F(za),o&&t(Gm),o&&t(To),F(qa),o&&t(Xm),o&&t(vo),F(Pa),o&&t(Ym),o&&t(bo),F(Oa),o&&t(Zm),o&&t(yo),F(Na),o&&t(eu),o&&t(Ze),F(Ia),F(Ua),F($n),F(Fn),o&&t(tu),o&&t(wo),F(Ra),o&&t(ou),o&&t(He),F(Ha),F(Ka),F(Mn),F(zn),o&&t(nu),o&&t(Fo),F(Ja),o&&t(su),o&&t(et),F(Ga),F(tr),F(jn),F(qn),o&&t(au),o&&t(Mo),F(or),o&&t(ru),o&&t(Qe),F(nr),F(ir),F(An),F(On),F(Ln),o&&t(iu),o&&t(Co),F(lr),o&&t(lu),o&&t(tt),F(dr),F(mr),F(In),F(Sn),F(Dn),F(Wn),F(Un),o&&t(du),o&&t(qo),F(ur),o&&t(cu),o&&t(ot),F(fr),F(Tr),F(Hn),F(Qn),o&&t(pu),o&&t(Ao),F(vr),o&&t(hu),o&&t(Be),F(br),F($r),F(Vn),F(Kn),F(Jn),o&&t(mu),o&&t(Lo),F(Fr),o&&t(uu),o&&t(nt),F(xr),F(jr),F(Xn),F(Yn),F(Zn),o&&t(fu),o&&t(So),F(qr),o&&t(gu),o&&t(Ve),F(Pr),F(ts),F(Nr),F(os),F(ns),o&&t(_u),o&&t(Wo),F(Ir),o&&t(ku),o&&t(Oe),F(Sr),F(as),F(Rr),F(rs),F(is),o&&t(Tu),o&&t(Ro),F(Hr),o&&t(vu),o&&t(Le),F(Qr),F(ds),F(Jr),F(cs),F(ps),F(hs),o&&t(bu),o&&t(Qo),F(Gr),o&&t(yu),o&&t(Ke),F(Xr),F(us),F(ti),F(fs),F(gs),F(_s),o&&t(Eu),o&&t(Vo),F(oi),o&&t(wu),o&&t(Je),F(ni),F(Ts),F(ii),F(vs),F(bs),o&&t($u),o&&t(Jo),F(li),o&&t(Fu),o&&t(Ne),F(di),F(Es),F(mi),F(ws),F($s),F(Fs),o&&t(xu),o&&t(Xo),F(ui),o&&t(Mu),o&&t(Ge),F(fi),F(Ms),F(Ti),F(zs),F(Cs),F(js),o&&t(zu),o&&t(en),F(vi),o&&t(Cu),o&&t(Ie),F(bi),F(zi),F(Ps),F(As),o&&t(ju),o&&t(on),F(Ci),o&&t(qu),o&&t(Pe),F(ji),F(Si),F(Ls),F(Ns),o&&t(Pu),o&&t(sn),F(Di),o&&t(Au),o&&t(Se),F(Wi),F(Gi),F(Ss),F(Ds),o&&t(Ou),o&&t(rn),F(Xi),o&&t(Lu),o&&t(De),F(Yi),F(rl),F(Us),F(Rs),o&&t(Nu),o&&t(dn),F(il),o&&t(Iu),o&&t(We),F(ll),F(gl),F(Qs),F(Bs),o&&t(Su),o&&t(pn),F(_l),o&&t(Du),o&&t(Ae),F(kl),F(Fl),F(Ks),F(Js),o&&t(Wu),o&&t(mn),F(xl),o&&t(Uu),o&&t(Ue),F(Ml),F(Ll),F(Xs),F(Ys)}}}const V4={local:"electra",sections:[{local:"overview",title:"Overview"},{local:"transformers.ElectraConfig",title:"ElectraConfig"},{local:"transformers.ElectraTokenizer",title:"ElectraTokenizer"},{local:"transformers.ElectraTokenizerFast",title:"ElectraTokenizerFast"},{local:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",title:"Electra specific outputs"},{local:"transformers.ElectraModel",title:"ElectraModel"},{local:"transformers.ElectraForPreTraining",title:"ElectraForPreTraining"},{local:"transformers.ElectraForCausalLM",title:"ElectraForCausalLM"},{local:"transformers.ElectraForMaskedLM",title:"ElectraForMaskedLM"},{local:"transformers.ElectraForSequenceClassification",title:"ElectraForSequenceClassification"},{local:"transformers.ElectraForMultipleChoice",title:"ElectraForMultipleChoice"},{local:"transformers.ElectraForTokenClassification",title:"ElectraForTokenClassification"},{local:"transformers.ElectraForQuestionAnswering",title:"ElectraForQuestionAnswering"},{local:"transformers.TFElectraModel",title:"TFElectraModel"},{local:"transformers.TFElectraForPreTraining",title:"TFElectraForPreTraining"},{local:"transformers.TFElectraForMaskedLM",title:"TFElectraForMaskedLM"},{local:"transformers.TFElectraForSequenceClassification",title:"TFElectraForSequenceClassification"},{local:"transformers.TFElectraForMultipleChoice",title:"TFElectraForMultipleChoice"},{local:"transformers.TFElectraForTokenClassification",title:"TFElectraForTokenClassification"},{local:"transformers.TFElectraForQuestionAnswering",title:"TFElectraForQuestionAnswering"},{local:"transformers.FlaxElectraModel",title:"FlaxElectraModel"},{local:"transformers.FlaxElectraForPreTraining",title:"FlaxElectraForPreTraining"},{local:"transformers.FlaxElectraForMaskedLM",title:"FlaxElectraForMaskedLM"},{local:"transformers.FlaxElectraForSequenceClassification",title:"FlaxElectraForSequenceClassification"},{local:"transformers.FlaxElectraForMultipleChoice",title:"FlaxElectraForMultipleChoice"},{local:"transformers.FlaxElectraForTokenClassification",title:"FlaxElectraForTokenClassification"},{local:"transformers.FlaxElectraForQuestionAnswering",title:"FlaxElectraForQuestionAnswering"}],title:"ELECTRA"};function K4(x){return Nz(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tC extends Pz{constructor(d){super();Az(this,d,K4,B4,Oz,{})}}export{tC as default,V4 as metadata};
