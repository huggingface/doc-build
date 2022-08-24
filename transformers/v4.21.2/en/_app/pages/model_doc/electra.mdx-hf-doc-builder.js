import{S as pC,i as hC,s as mC,e as n,k as c,w as b,t as r,M as uC,c as s,d as t,m as p,a,x as y,h as i,b as f,G as e,g as v,y as E,q as w,o as $,B as F,v as fC,L as le}from"../../chunks/vendor-hf-doc-builder.js";import{T as ye}from"../../chunks/Tip-hf-doc-builder.js";import{D as I}from"../../chunks/Docstring-hf-doc-builder.js";import{C as de}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as we}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function gC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraModel, ElectraConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=r("Examples:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Examples:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function _C(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function vC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, ElectraModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function kC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function TC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraForPreTraining, ElectraTokenizerFast
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
[<span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>]`}}),{c(){d=n("p"),g=r("Examples:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Examples:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function bC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function yC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, ElectraForCausalLM, ElectraConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function EC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function wC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, ElectraForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function $C(x){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.22</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function FC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function xC(x){let d,g,h,m,_;return m=new de({props:{code:`import torch
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of single-label classification:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example of single-label classification:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function MC(x){let d,g;return d=new de({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = ElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.06</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function zC(x){let d,g,h,m,_;return m=new de({props:{code:`import torch
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of multi-label classification:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example of multi-label classification:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function CC(x){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function jC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function qC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, ElectraForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function PC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function AC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, ElectraForTokenClassification
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
[<span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;B-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function OC(x){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.11</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function LC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function NC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, ElectraForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function IC(x){let d,g;return d=new de({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">2.64</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function DC(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,D,oe,fe,S,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ve,U,te,ce,H,ke,G,L,se,Q,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),D=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ce=r(" or "),H=n("code"),ke=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var xe=a(D);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var be=a(S);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var V=a(P);ae=i(V,"a single Tensor with "),R=s(V,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(V," only and nothing else: "),W=s(V,"CODE",{});var $e=a(W);_e=i($e,"model(inputs_ids)"),$e.forEach(t),V.forEach(t),me=p(A),q=s(A,"LI",{});var B=a(q);ve=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(B,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ce=i(B," or "),H=s(B,"CODE",{});var Me=a(H);ke=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),B.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var Ee=a(Q);Te=i(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){v(T,d,z),e(d,g),v(T,h,z),v(T,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),v(T,J,z),v(T,C,z),e(C,ee),e(C,D),e(D,oe),e(C,fe),e(C,S),e(S,ge),e(C,pe),v(T,K,z),v(T,O,z),e(O,ne),v(T,X,z),v(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ve),e(q,U),e(U,te),e(q,ce),e(q,H),e(H,ke),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function SC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function WC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function UC(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,D,oe,fe,S,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ve,U,te,ce,H,ke,G,L,se,Q,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),D=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ce=r(" or "),H=n("code"),ke=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var xe=a(D);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var be=a(S);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var V=a(P);ae=i(V,"a single Tensor with "),R=s(V,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(V," only and nothing else: "),W=s(V,"CODE",{});var $e=a(W);_e=i($e,"model(inputs_ids)"),$e.forEach(t),V.forEach(t),me=p(A),q=s(A,"LI",{});var B=a(q);ve=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(B,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ce=i(B," or "),H=s(B,"CODE",{});var Me=a(H);ke=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),B.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var Ee=a(Q);Te=i(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){v(T,d,z),e(d,g),v(T,h,z),v(T,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),v(T,J,z),v(T,C,z),e(C,ee),e(C,D),e(D,oe),e(C,fe),e(C,S),e(S,ge),e(C,pe),v(T,K,z),v(T,O,z),e(O,ne),v(T,X,z),v(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ve),e(q,U),e(U,te),e(q,ce),e(q,H),e(H,ke),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function RC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function HC(x){let d,g,h,m,_;return m=new de({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>scores = outputs[<span class="hljs-number">0</span>]`}}),{c(){d=n("p"),g=r("Examples:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Examples:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function QC(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,D,oe,fe,S,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ve,U,te,ce,H,ke,G,L,se,Q,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),D=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ce=r(" or "),H=n("code"),ke=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var xe=a(D);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var be=a(S);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var V=a(P);ae=i(V,"a single Tensor with "),R=s(V,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(V," only and nothing else: "),W=s(V,"CODE",{});var $e=a(W);_e=i($e,"model(inputs_ids)"),$e.forEach(t),V.forEach(t),me=p(A),q=s(A,"LI",{});var B=a(q);ve=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(B,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ce=i(B," or "),H=s(B,"CODE",{});var Me=a(H);ke=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),B.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var Ee=a(Q);Te=i(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){v(T,d,z),e(d,g),v(T,h,z),v(T,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),v(T,J,z),v(T,C,z),e(C,ee),e(C,D),e(D,oe),e(C,fe),e(C,S),e(S,ge),e(C,pe),v(T,K,z),v(T,O,z),e(O,ne),v(T,X,z),v(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ve),e(q,U),e(U,te),e(q,ce),e(q,H),e(H,ke),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function VC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function BC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function KC(x){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">1.22</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function JC(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,D,oe,fe,S,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ve,U,te,ce,H,ke,G,L,se,Q,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),D=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ce=r(" or "),H=n("code"),ke=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var xe=a(D);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var be=a(S);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var V=a(P);ae=i(V,"a single Tensor with "),R=s(V,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(V," only and nothing else: "),W=s(V,"CODE",{});var $e=a(W);_e=i($e,"model(inputs_ids)"),$e.forEach(t),V.forEach(t),me=p(A),q=s(A,"LI",{});var B=a(q);ve=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(B,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ce=i(B," or "),H=s(B,"CODE",{});var Me=a(H);ke=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),B.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var Ee=a(Q);Te=i(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){v(T,d,z),e(d,g),v(T,h,z),v(T,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),v(T,J,z),v(T,C,z),e(C,ee),e(C,D),e(D,oe),e(C,fe),e(C,S),e(S,ge),e(C,pe),v(T,K,z),v(T,O,z),e(O,ne),v(T,X,z),v(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ve),e(q,U),e(U,te),e(q,ce),e(q,H),e(H,ke),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function GC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function XC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraForSequenceClassification
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function YC(x){let d,g;return d=new de({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.06</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function ZC(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,D,oe,fe,S,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ve,U,te,ce,H,ke,G,L,se,Q,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),D=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ce=r(" or "),H=n("code"),ke=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var xe=a(D);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var be=a(S);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var V=a(P);ae=i(V,"a single Tensor with "),R=s(V,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(V," only and nothing else: "),W=s(V,"CODE",{});var $e=a(W);_e=i($e,"model(inputs_ids)"),$e.forEach(t),V.forEach(t),me=p(A),q=s(A,"LI",{});var B=a(q);ve=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(B,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ce=i(B," or "),H=s(B,"CODE",{});var Me=a(H);ke=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),B.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var Ee=a(Q);Te=i(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){v(T,d,z),e(d,g),v(T,h,z),v(T,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),v(T,J,z),v(T,C,z),e(C,ee),e(C,D),e(D,oe),e(C,fe),e(C,S),e(S,ge),e(C,pe),v(T,K,z),v(T,O,z),e(O,ne),v(T,X,z),v(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ve),e(q,U),e(U,te),e(q,ce),e(q,H),e(H,ke),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function ej(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function tj(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function oj(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,D,oe,fe,S,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ve,U,te,ce,H,ke,G,L,se,Q,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),D=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ce=r(" or "),H=n("code"),ke=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var xe=a(D);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var be=a(S);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var V=a(P);ae=i(V,"a single Tensor with "),R=s(V,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(V," only and nothing else: "),W=s(V,"CODE",{});var $e=a(W);_e=i($e,"model(inputs_ids)"),$e.forEach(t),V.forEach(t),me=p(A),q=s(A,"LI",{});var B=a(q);ve=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(B,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ce=i(B," or "),H=s(B,"CODE",{});var Me=a(H);ke=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),B.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var Ee=a(Q);Te=i(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){v(T,d,z),e(d,g),v(T,h,z),v(T,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),v(T,J,z),v(T,C,z),e(C,ee),e(C,D),e(D,oe),e(C,fe),e(C,S),e(S,ge),e(C,pe),v(T,K,z),v(T,O,z),e(O,ne),v(T,X,z),v(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ve),e(q,U),e(U,te),e(q,ce),e(q,H),e(H,ke),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function nj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function sj(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraForTokenClassification
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
[<span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;B-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function aj(x){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.11</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function rj(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,D,oe,fe,S,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ve,U,te,ce,H,ke,G,L,se,Q,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),D=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ce=r(" or "),H=n("code"),ke=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var xe=a(D);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var be=a(S);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var V=a(P);ae=i(V,"a single Tensor with "),R=s(V,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(V," only and nothing else: "),W=s(V,"CODE",{});var $e=a(W);_e=i($e,"model(inputs_ids)"),$e.forEach(t),V.forEach(t),me=p(A),q=s(A,"LI",{});var B=a(q);ve=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(B,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ce=i(B," or "),H=s(B,"CODE",{});var Me=a(H);ke=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),B.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var Ee=a(Q);Te=i(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){v(T,d,z),e(d,g),v(T,h,z),v(T,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),v(T,J,z),v(T,C,z),e(C,ee),e(C,D),e(D,oe),e(C,fe),e(C,S),e(S,ge),e(C,pe),v(T,K,z),v(T,O,z),e(O,ne),v(T,X,z),v(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ve),e(q,U),e(U,te),e(q,ce),e(q,H),e(H,ke),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function ij(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function lj(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function dj(x){let d,g;return d=new de({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">2.64</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function cj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function pj(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraModel

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraModel.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraModel.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function hj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function mj(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForPreTraining

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForPreTraining.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function uj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function fj(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function gj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function _j(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMaskedLM

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForMaskedLM.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function vj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function kj(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForSequenceClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForSequenceClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Tj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function bj(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function yj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Ej(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForTokenClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForTokenClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function wj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){v(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function $j(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){v(l,d,u),e(d,g),v(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Fj(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,D,oe,fe,S,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ve,U,te,ce,H,ke,G,L,se,Q,Te,T,z,Y,Fe,ze,N,xe,be,Ce,A,V,je,$e,B,qe,Me,Z,Ee,Dc,Pa,Bg,Sc,Kg,Fu,yt,Aa,Jg,Bt,Gg,_d,Xg,Yg,vd,Zg,e_,Oa,t_,o_,n_,To,s_,kd,a_,r_,Td,i_,l_,d_,wn,xu,bo,$n,Wc,La,c_,Uc,p_,Mu,Et,Na,h_,Rc,m_,u_,Fn,bd,f_,g_,yd,__,v_,k_,Ia,T_,Ed,b_,y_,zu,yo,xn,Hc,Da,E_,Qc,w_,Cu,wt,Sa,$_,Wa,F_,Vc,x_,M_,z_,Mn,wd,C_,j_,$d,q_,P_,A_,Ua,O_,Fd,L_,N_,ju,Eo,zn,Bc,Ra,I_,Kc,D_,qu,wo,Ha,S_,Qa,W_,xd,U_,R_,Pu,$o,Va,H_,Ba,Q_,Md,V_,B_,Au,Fo,Cn,Jc,Ka,K_,Gc,J_,Ou,et,Ja,G_,Xc,X_,Y_,Ga,Z_,zd,ev,tv,ov,Xa,nv,Ya,sv,av,rv,$t,Za,iv,xo,lv,Cd,dv,cv,Yc,pv,hv,mv,jn,uv,qn,Lu,Mo,Pn,Zc,er,fv,ep,gv,Nu,Qe,tr,_v,tp,vv,kv,op,Tv,bv,or,yv,jd,Ev,wv,$v,nr,Fv,sr,xv,Mv,zv,Ft,ar,Cv,zo,jv,qd,qv,Pv,np,Av,Ov,Lv,An,Nv,On,Iu,Co,Ln,sp,rr,Iv,ap,Dv,Du,tt,ir,Sv,lr,Wv,rp,Uv,Rv,Hv,dr,Qv,Pd,Vv,Bv,Kv,cr,Jv,pr,Gv,Xv,Yv,xt,hr,Zv,jo,ek,Ad,tk,ok,ip,nk,sk,ak,Nn,rk,In,Su,qo,Dn,lp,mr,ik,dp,lk,Wu,Ve,ur,dk,cp,ck,pk,pp,hk,mk,fr,uk,Od,fk,gk,_k,gr,vk,_r,kk,Tk,bk,at,vr,yk,Po,Ek,Ld,wk,$k,hp,Fk,xk,Mk,Sn,zk,Wn,Ck,Un,Uu,Ao,Rn,mp,kr,jk,up,qk,Ru,ot,Tr,Pk,fp,Ak,Ok,br,Lk,Nd,Nk,Ik,Dk,yr,Sk,Er,Wk,Uk,Rk,He,wr,Hk,Oo,Qk,Id,Vk,Bk,gp,Kk,Jk,Gk,Hn,Xk,Qn,Yk,Vn,Zk,Bn,e2,Kn,Hu,Lo,Jn,_p,$r,t2,vp,o2,Qu,nt,Fr,n2,kp,s2,a2,xr,r2,Dd,i2,l2,d2,Mr,c2,zr,p2,h2,m2,Mt,Cr,u2,No,f2,Sd,g2,_2,Tp,v2,k2,T2,Gn,b2,Xn,Vu,Io,Yn,bp,jr,y2,yp,E2,Bu,Be,qr,w2,Ep,$2,F2,wp,x2,M2,Pr,z2,Wd,C2,j2,q2,Ar,P2,Or,A2,O2,L2,rt,Lr,N2,Do,I2,Ud,D2,S2,$p,W2,U2,R2,Zn,H2,es,Q2,ts,Ku,So,os,Fp,Nr,V2,xp,B2,Ju,st,Ir,K2,Wo,J2,Mp,G2,X2,zp,Y2,Z2,eT,Dr,tT,Rd,oT,nT,sT,Sr,aT,Wr,rT,iT,lT,it,Ur,dT,Uo,cT,Hd,pT,hT,Cp,mT,uT,fT,ns,gT,ss,_T,as,Gu,Ro,rs,jp,Rr,vT,qp,kT,Xu,Ke,Hr,TT,Pp,bT,yT,Qr,ET,Qd,wT,$T,FT,Vr,xT,Br,MT,zT,CT,is,jT,zt,Kr,qT,Ho,PT,Vd,AT,OT,Ap,LT,NT,IT,ls,DT,ds,Yu,Qo,cs,Op,Jr,ST,Lp,WT,Zu,Oe,Gr,UT,Np,RT,HT,Ip,QT,VT,Xr,BT,Bd,KT,JT,GT,Yr,XT,Zr,YT,ZT,eb,ps,tb,Ct,ei,ob,Vo,nb,Kd,sb,ab,Dp,rb,ib,lb,hs,db,ms,ef,Bo,us,Sp,ti,cb,Wp,pb,tf,Le,oi,hb,Up,mb,ub,Rp,fb,gb,ni,_b,Jd,vb,kb,Tb,si,bb,ai,yb,Eb,wb,fs,$b,lt,ri,Fb,Ko,xb,Gd,Mb,zb,Hp,Cb,jb,qb,gs,Pb,_s,Ab,vs,of,Jo,ks,Qp,ii,Ob,Vp,Lb,nf,Je,li,Nb,Bp,Ib,Db,di,Sb,Xd,Wb,Ub,Rb,ci,Hb,pi,Qb,Vb,Bb,Ts,Kb,dt,hi,Jb,Go,Gb,Yd,Xb,Yb,Kp,Zb,ey,ty,bs,oy,ys,ny,Es,sf,Xo,ws,Jp,mi,sy,Gp,ay,af,Ge,ui,ry,Xp,iy,ly,fi,dy,Zd,cy,py,hy,gi,my,_i,uy,fy,gy,$s,_y,jt,vi,vy,Yo,ky,ec,Ty,by,Yp,yy,Ey,wy,Fs,$y,xs,rf,Zo,Ms,Zp,ki,Fy,eh,xy,lf,Ne,Ti,My,th,zy,Cy,oh,jy,qy,bi,Py,tc,Ay,Oy,Ly,yi,Ny,Ei,Iy,Dy,Sy,zs,Wy,ct,wi,Uy,en,Ry,oc,Hy,Qy,nh,Vy,By,Ky,Cs,Jy,js,Gy,qs,df,tn,Ps,sh,$i,Xy,ah,Yy,cf,Xe,Fi,Zy,on,e1,rh,t1,o1,ih,n1,s1,a1,xi,r1,nc,i1,l1,d1,Mi,c1,zi,p1,h1,m1,As,u1,pt,Ci,f1,nn,g1,sc,_1,v1,lh,k1,T1,b1,Os,y1,Ls,E1,Ns,pf,sn,Is,dh,ji,w1,ch,$1,hf,Ie,qi,F1,ph,x1,M1,Pi,z1,ac,C1,j1,q1,Ai,P1,Oi,A1,O1,L1,hh,N1,I1,Kt,mh,Li,D1,S1,uh,Ni,W1,U1,fh,Ii,R1,H1,gh,Di,Q1,V1,qt,Si,B1,an,K1,_h,J1,G1,vh,X1,Y1,Z1,Ds,eE,Ss,mf,rn,Ws,kh,Wi,tE,Th,oE,uf,Pe,Ui,nE,bh,sE,aE,yh,rE,iE,Ri,lE,rc,dE,cE,pE,Hi,hE,Qi,mE,uE,fE,Eh,gE,_E,Jt,wh,Vi,vE,kE,$h,Bi,TE,bE,Fh,Ki,yE,EE,xh,Ji,wE,$E,Pt,Gi,FE,ln,xE,Mh,ME,zE,zh,CE,jE,qE,Us,PE,Rs,ff,dn,Hs,Ch,Xi,AE,jh,OE,gf,De,Yi,LE,qh,NE,IE,Zi,DE,ic,SE,WE,UE,el,RE,tl,HE,QE,VE,Ph,BE,KE,Gt,Ah,ol,JE,GE,Oh,nl,XE,YE,Lh,sl,ZE,ew,Nh,al,tw,ow,At,rl,nw,cn,sw,Ih,aw,rw,Dh,iw,lw,dw,Qs,cw,Vs,_f,pn,Bs,Sh,il,pw,Wh,hw,vf,Se,ll,mw,dl,uw,Uh,fw,gw,_w,cl,vw,lc,kw,Tw,bw,pl,yw,hl,Ew,ww,$w,Rh,Fw,xw,Xt,Hh,ml,Mw,zw,Qh,ul,Cw,jw,Vh,fl,qw,Pw,Bh,gl,Aw,Ow,Ot,_l,Lw,hn,Nw,Kh,Iw,Dw,Jh,Sw,Ww,Uw,Ks,Rw,Js,kf,mn,Gs,Gh,vl,Hw,Xh,Qw,Tf,We,kl,Vw,Yh,Bw,Kw,Tl,Jw,dc,Gw,Xw,Yw,bl,Zw,yl,e$,t$,o$,Zh,n$,s$,Yt,em,El,a$,r$,tm,wl,i$,l$,om,$l,d$,c$,nm,Fl,p$,h$,Lt,xl,m$,un,u$,sm,f$,g$,am,_$,v$,k$,Xs,T$,Ys,bf,fn,Zs,rm,Ml,b$,im,y$,yf,Ue,zl,E$,lm,w$,$$,Cl,F$,cc,x$,M$,z$,jl,C$,ql,j$,q$,P$,dm,A$,O$,Zt,cm,Pl,L$,N$,pm,Al,I$,D$,hm,Ol,S$,W$,mm,Ll,U$,R$,Nt,Nl,H$,gn,Q$,um,V$,B$,fm,K$,J$,G$,ea,X$,ta,Ef,_n,oa,gm,Il,Y$,_m,Z$,wf,Ae,Dl,eF,vm,tF,oF,km,nF,sF,Sl,aF,pc,rF,iF,lF,Wl,dF,Ul,cF,pF,hF,Tm,mF,uF,eo,bm,Rl,fF,gF,ym,Hl,_F,vF,Em,Ql,kF,TF,wm,Vl,bF,yF,It,Bl,EF,vn,wF,$m,$F,FF,Fm,xF,MF,zF,na,CF,sa,$f,kn,aa,xm,Kl,jF,Mm,qF,Ff,Re,Jl,PF,Tn,AF,zm,OF,LF,Cm,NF,IF,DF,Gl,SF,hc,WF,UF,RF,Xl,HF,Yl,QF,VF,BF,jm,KF,JF,to,qm,Zl,GF,XF,Pm,ed,YF,ZF,Am,td,e0,t0,Om,od,o0,n0,Dt,nd,s0,bn,a0,Lm,r0,i0,Nm,l0,d0,c0,ra,p0,ia,xf;return l=new we({}),oe=new we({}),Pa=new we({}),Aa=new I({props:{name:"class transformers.ElectraConfig",anchor:"transformers.ElectraConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 256"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 1024"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = 'gelu'"},{name:"summary_last_dropout",val:" = 0.1"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ElectraConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ELECTRA model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraModel">ElectraModel</a> or <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.TFElectraModel">TFElectraModel</a>.`,name:"vocab_size"},{anchor:"transformers.ElectraConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraModel">ElectraModel</a> or <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.TFElectraModel">TFElectraModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.ElectraConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/configuration_electra.py#L44"}}),wn=new ie({props:{anchor:"transformers.ElectraConfig.example",$$slots:{default:[gC]},$$scope:{ctx:x}}}),La=new we({}),Na=new I({props:{name:"class transformers.ElectraTokenizer",anchor:"transformers.ElectraTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/tokenization_electra.py#L62"}}),Da=new we({}),Sa=new I({props:{name:"class transformers.ElectraTokenizerFast",anchor:"transformers.ElectraTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/tokenization_electra_fast.py#L83"}}),Ra=new we({}),Ha=new I({props:{name:"class transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L698"}}),Va=new I({props:{name:"class transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>tf.Tensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_tf_electra.py#L805"}}),Ka=new we({}),Ja=new I({props:{name:"class transformers.ElectraModel",anchor:"transformers.ElectraModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L810"}}),Za=new I({props:{name:"forward",anchor:"transformers.ElectraModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L837",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jn=new ye({props:{$$slots:{default:[_C]},$$scope:{ctx:x}}}),qn=new ie({props:{anchor:"transformers.ElectraModel.forward.example",$$slots:{default:[vC]},$$scope:{ctx:x}}}),er=new we({}),tr=new I({props:{name:"class transformers.ElectraForPreTraining",anchor:"transformers.ElectraForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L1061"}}),ar=new I({props:{name:"forward",anchor:"transformers.ElectraForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the ELECTRA loss. Input should be a sequence of tokens (see <code>input_ids</code> docstring)
Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates the token is an original token,</li>
<li>1 indicates the token was replaced.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L1070",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"
>transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"
>transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new ye({props:{$$slots:{default:[kC]},$$scope:{ctx:x}}}),On=new ie({props:{anchor:"transformers.ElectraForPreTraining.forward.example",$$slots:{default:[TC]},$$scope:{ctx:x}}}),rr=new we({}),ir=new I({props:{name:"class transformers.ElectraForCausalLM",anchor:"transformers.ElectraForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L1536"}}),hr=new I({props:{name:"forward",anchor:"transformers.ElectraForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L1555",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nn=new ye({props:{$$slots:{default:[bC]},$$scope:{ctx:x}}}),In=new ie({props:{anchor:"transformers.ElectraForCausalLM.forward.example",$$slots:{default:[yC]},$$scope:{ctx:x}}}),mr=new we({}),ur=new I({props:{name:"class transformers.ElectraForMaskedLM",anchor:"transformers.ElectraForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L1167"}}),vr=new I({props:{name:"forward",anchor:"transformers.ElectraForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L1184",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sn=new ye({props:{$$slots:{default:[EC]},$$scope:{ctx:x}}}),Wn=new ie({props:{anchor:"transformers.ElectraForMaskedLM.forward.example",$$slots:{default:[wC]},$$scope:{ctx:x}}}),Un=new ie({props:{anchor:"transformers.ElectraForMaskedLM.forward.example-2",$$slots:{default:[$C]},$$scope:{ctx:x}}}),kr=new we({}),Tr=new I({props:{name:"class transformers.ElectraForSequenceClassification",anchor:"transformers.ElectraForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L962"}}),wr=new I({props:{name:"forward",anchor:"transformers.ElectraForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L973",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hn=new ye({props:{$$slots:{default:[FC]},$$scope:{ctx:x}}}),Qn=new ie({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example",$$slots:{default:[xC]},$$scope:{ctx:x}}}),Vn=new ie({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-2",$$slots:{default:[MC]},$$scope:{ctx:x}}}),Bn=new ie({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-3",$$slots:{default:[zC]},$$scope:{ctx:x}}}),Kn=new ie({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-4",$$slots:{default:[CC]},$$scope:{ctx:x}}}),$r=new we({}),Fr=new I({props:{name:"class transformers.ElectraForMultipleChoice",anchor:"transformers.ElectraForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L1448"}}),Cr=new I({props:{name:"forward",anchor:"transformers.ElectraForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L1459",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gn=new ye({props:{$$slots:{default:[jC]},$$scope:{ctx:x}}}),Xn=new ie({props:{anchor:"transformers.ElectraForMultipleChoice.forward.example",$$slots:{default:[qC]},$$scope:{ctx:x}}}),jr=new we({}),qr=new I({props:{name:"class transformers.ElectraForTokenClassification",anchor:"transformers.ElectraForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L1257"}}),Lr=new I({props:{name:"forward",anchor:"transformers.ElectraForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L1271",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zn=new ye({props:{$$slots:{default:[PC]},$$scope:{ctx:x}}}),es=new ie({props:{anchor:"transformers.ElectraForTokenClassification.forward.example",$$slots:{default:[AC]},$$scope:{ctx:x}}}),ts=new ie({props:{anchor:"transformers.ElectraForTokenClassification.forward.example-2",$$slots:{default:[OC]},$$scope:{ctx:x}}}),Nr=new we({}),Ir=new I({props:{name:"class transformers.ElectraForQuestionAnswering",anchor:"transformers.ElectraForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L1339"}}),Ur=new I({props:{name:"forward",anchor:"transformers.ElectraForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.ElectraForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_electra.py#L1353",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ns=new ye({props:{$$slots:{default:[LC]},$$scope:{ctx:x}}}),ss=new ie({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example",$$slots:{default:[NC]},$$scope:{ctx:x}}}),as=new ie({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example-2",$$slots:{default:[IC]},$$scope:{ctx:x}}}),Rr=new we({}),Hr=new I({props:{name:"class transformers.TFElectraModel",anchor:"transformers.TFElectraModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_tf_electra.py#L925"}}),is=new ye({props:{$$slots:{default:[DC]},$$scope:{ctx:x}}}),Kr=new I({props:{name:"call",anchor:"transformers.TFElectraModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_tf_electra.py#L931",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ls=new ye({props:{$$slots:{default:[SC]},$$scope:{ctx:x}}}),ds=new ie({props:{anchor:"transformers.TFElectraModel.call.example",$$slots:{default:[WC]},$$scope:{ctx:x}}}),Jr=new we({}),Gr=new I({props:{name:"class transformers.TFElectraForPreTraining",anchor:"transformers.TFElectraForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_tf_electra.py#L1022"}}),ps=new ye({props:{$$slots:{default:[UC]},$$scope:{ctx:x}}}),ei=new I({props:{name:"call",anchor:"transformers.TFElectraForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_tf_electra.py#L1029",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput"
>transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput"
>transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),hs=new ye({props:{$$slots:{default:[RC]},$$scope:{ctx:x}}}),ms=new ie({props:{anchor:"transformers.TFElectraForPreTraining.call.example",$$slots:{default:[HC]},$$scope:{ctx:x}}}),ti=new we({}),oi=new I({props:{name:"class transformers.TFElectraForMaskedLM",anchor:"transformers.TFElectraForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_tf_electra.py#L1137"}}),fs=new ye({props:{$$slots:{default:[QC]},$$scope:{ctx:x}}}),ri=new I({props:{name:"call",anchor:"transformers.TFElectraForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_tf_electra.py#L1159",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gs=new ye({props:{$$slots:{default:[VC]},$$scope:{ctx:x}}}),_s=new ie({props:{anchor:"transformers.TFElectraForMaskedLM.call.example",$$slots:{default:[BC]},$$scope:{ctx:x}}}),vs=new ie({props:{anchor:"transformers.TFElectraForMaskedLM.call.example-2",$$slots:{default:[KC]},$$scope:{ctx:x}}}),ii=new we({}),li=new I({props:{name:"class transformers.TFElectraForSequenceClassification",anchor:"transformers.TFElectraForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_tf_electra.py#L1264"}}),Ts=new ye({props:{$$slots:{default:[JC]},$$scope:{ctx:x}}}),hi=new I({props:{name:"call",anchor:"transformers.TFElectraForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_tf_electra.py#L1271",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),bs=new ye({props:{$$slots:{default:[GC]},$$scope:{ctx:x}}}),ys=new ie({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example",$$slots:{default:[XC]},$$scope:{ctx:x}}}),Es=new ie({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example-2",$$slots:{default:[YC]},$$scope:{ctx:x}}}),mi=new we({}),ui=new I({props:{name:"class transformers.TFElectraForMultipleChoice",anchor:"transformers.TFElectraForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_tf_electra.py#L1343"}}),$s=new ye({props:{$$slots:{default:[ZC]},$$scope:{ctx:x}}}),vi=new I({props:{name:"call",anchor:"transformers.TFElectraForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_tf_electra.py#L1365",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fs=new ye({props:{$$slots:{default:[ej]},$$scope:{ctx:x}}}),xs=new ie({props:{anchor:"transformers.TFElectraForMultipleChoice.call.example",$$slots:{default:[tj]},$$scope:{ctx:x}}}),ki=new we({}),Ti=new I({props:{name:"class transformers.TFElectraForTokenClassification",anchor:"transformers.TFElectraForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_tf_electra.py#L1469"}}),zs=new ye({props:{$$slots:{default:[oj]},$$scope:{ctx:x}}}),wi=new I({props:{name:"call",anchor:"transformers.TFElectraForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_tf_electra.py#L1482",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Cs=new ye({props:{$$slots:{default:[nj]},$$scope:{ctx:x}}}),js=new ie({props:{anchor:"transformers.TFElectraForTokenClassification.call.example",$$slots:{default:[sj]},$$scope:{ctx:x}}}),qs=new ie({props:{anchor:"transformers.TFElectraForTokenClassification.call.example-2",$$slots:{default:[aj]},$$scope:{ctx:x}}}),$i=new we({}),Fi=new I({props:{name:"class transformers.TFElectraForQuestionAnswering",anchor:"transformers.TFElectraForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_tf_electra.py#L1554"}}),As=new ye({props:{$$slots:{default:[rj]},$$scope:{ctx:x}}}),Ci=new I({props:{name:"call",anchor:"transformers.TFElectraForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFElectraForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_tf_electra.py#L1564",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Os=new ye({props:{$$slots:{default:[ij]},$$scope:{ctx:x}}}),Ls=new ie({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example",$$slots:{default:[lj]},$$scope:{ctx:x}}}),Ns=new ie({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example-2",$$slots:{default:[dj]},$$scope:{ctx:x}}}),ji=new we({}),qi=new I({props:{name:"class transformers.FlaxElectraModel",anchor:"transformers.FlaxElectraModel",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_flax_electra.py#L923"}}),Si=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ds=new ye({props:{$$slots:{default:[cj]},$$scope:{ctx:x}}}),Ss=new ie({props:{anchor:"transformers.FlaxElectraModel.__call__.example",$$slots:{default:[pj]},$$scope:{ctx:x}}}),Wi=new we({}),Ui=new I({props:{name:"class transformers.FlaxElectraForPreTraining",anchor:"transformers.FlaxElectraForPreTraining",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_flax_electra.py#L1078"}}),Gi=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <code>transformers.models.electra.modeling_flax_electra.FlaxElectraForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
`}}),Us=new ye({props:{$$slots:{default:[hj]},$$scope:{ctx:x}}}),Rs=new ie({props:{anchor:"transformers.FlaxElectraForPreTraining.__call__.example",$$slots:{default:[mj]},$$scope:{ctx:x}}}),Xi=new we({}),Yi=new I({props:{name:"class transformers.FlaxElectraForCausalLM",anchor:"transformers.FlaxElectraForCausalLM",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_flax_electra.py#L1576"}}),rl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qs=new ye({props:{$$slots:{default:[uj]},$$scope:{ctx:x}}}),Vs=new ie({props:{anchor:"transformers.FlaxElectraForCausalLM.__call__.example",$$slots:{default:[fj]},$$scope:{ctx:x}}}),il=new we({}),ll=new I({props:{name:"class transformers.FlaxElectraForMaskedLM",anchor:"transformers.FlaxElectraForMaskedLM",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_flax_electra.py#L1012"}}),_l=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ks=new ye({props:{$$slots:{default:[gj]},$$scope:{ctx:x}}}),Js=new ie({props:{anchor:"transformers.FlaxElectraForMaskedLM.__call__.example",$$slots:{default:[_j]},$$scope:{ctx:x}}}),vl=new we({}),kl=new I({props:{name:"class transformers.FlaxElectraForSequenceClassification",anchor:"transformers.FlaxElectraForSequenceClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_flax_electra.py#L1491"}}),xl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xs=new ye({props:{$$slots:{default:[vj]},$$scope:{ctx:x}}}),Ys=new ie({props:{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.example",$$slots:{default:[kj]},$$scope:{ctx:x}}}),Ml=new we({}),zl=new I({props:{name:"class transformers.FlaxElectraForMultipleChoice",anchor:"transformers.FlaxElectraForMultipleChoice",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_flax_electra.py#L1321"}}),Nl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ea=new ye({props:{$$slots:{default:[Tj]},$$scope:{ctx:x}}}),ta=new ie({props:{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.example",$$slots:{default:[bj]},$$scope:{ctx:x}}}),Il=new we({}),Dl=new I({props:{name:"class transformers.FlaxElectraForTokenClassification",anchor:"transformers.FlaxElectraForTokenClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_flax_electra.py#L1173"}}),Bl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),na=new ye({props:{$$slots:{default:[yj]},$$scope:{ctx:x}}}),sa=new ie({props:{anchor:"transformers.FlaxElectraForTokenClassification.__call__.example",$$slots:{default:[Ej]},$$scope:{ctx:x}}}),Kl=new we({}),Jl=new I({props:{name:"class transformers.FlaxElectraForQuestionAnswering",anchor:"transformers.FlaxElectraForQuestionAnswering",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_flax_electra.py#L1397"}}),nd=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/electra/modeling_flax_electra.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ra=new ye({props:{$$slots:{default:[wj]},$$scope:{ctx:x}}}),ia=new ie({props:{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.example",$$slots:{default:[$j]},$$scope:{ctx:x}}}),{c(){d=n("meta"),g=c(),h=n("h1"),m=n("a"),_=n("span"),b(l.$$.fragment),u=c(),M=n("span"),ue=r("ELECTRA"),J=c(),C=n("h2"),ee=n("a"),D=n("span"),b(oe.$$.fragment),fe=c(),S=n("span"),ge=r("Overview"),pe=c(),K=n("p"),O=r("The ELECTRA model was proposed in the paper "),ne=n("a"),X=r(`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
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
using the same amount of compute.`),me=c(),q=n("p"),ve=r("Tips:"),U=c(),te=n("ul"),ce=n("li"),H=r(`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),ke=c(),G=n("li"),L=r("The ELECTRA checkpoints saved using "),se=n("a"),Q=r("Google Research\u2019s implementation"),Te=r(`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),T=n("a"),z=r("ElectraForMaskedLM"),Y=r(` model, and the generator may be loaded in the
`),Fe=n("a"),ze=r("ElectraForPreTraining"),N=r(` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),xe=c(),be=n("p"),Ce=r("This model was contributed by "),A=n("a"),V=r("lysandre"),je=r(". The original code can be found "),$e=n("a"),B=r("here"),qe=r("."),Me=c(),Z=n("h2"),Ee=n("a"),Dc=n("span"),b(Pa.$$.fragment),Bg=c(),Sc=n("span"),Kg=r("ElectraConfig"),Fu=c(),yt=n("div"),b(Aa.$$.fragment),Jg=c(),Bt=n("p"),Gg=r("This is the configuration class to store the configuration of a "),_d=n("a"),Xg=r("ElectraModel"),Yg=r(" or a "),vd=n("a"),Zg=r("TFElectraModel"),e_=r(`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),Oa=n("a"),t_=r("google/electra-small-discriminator"),o_=r(" architecture."),n_=c(),To=n("p"),s_=r("Configuration objects inherit from "),kd=n("a"),a_=r("PretrainedConfig"),r_=r(` and can be used to control the model outputs. Read the
documentation from `),Td=n("a"),i_=r("PretrainedConfig"),l_=r(" for more information."),d_=c(),b(wn.$$.fragment),xu=c(),bo=n("h2"),$n=n("a"),Wc=n("span"),b(La.$$.fragment),c_=c(),Uc=n("span"),p_=r("ElectraTokenizer"),Mu=c(),Et=n("div"),b(Na.$$.fragment),h_=c(),Rc=n("p"),m_=r("Construct an ELECTRA tokenizer."),u_=c(),Fn=n("p"),bd=n("a"),f_=r("ElectraTokenizer"),g_=r(" is identical to "),yd=n("a"),__=r("BertTokenizer"),v_=r(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),k_=c(),Ia=n("p"),T_=r("Refer to superclass "),Ed=n("a"),b_=r("BertTokenizer"),y_=r(" for usage examples and documentation concerning parameters."),zu=c(),yo=n("h2"),xn=n("a"),Hc=n("span"),b(Da.$$.fragment),E_=c(),Qc=n("span"),w_=r("ElectraTokenizerFast"),Cu=c(),wt=n("div"),b(Sa.$$.fragment),$_=c(),Wa=n("p"),F_=r("Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),Vc=n("em"),x_=r("tokenizers"),M_=r(" library)."),z_=c(),Mn=n("p"),wd=n("a"),C_=r("ElectraTokenizerFast"),j_=r(" is identical to "),$d=n("a"),q_=r("BertTokenizerFast"),P_=r(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),A_=c(),Ua=n("p"),O_=r("Refer to superclass "),Fd=n("a"),L_=r("BertTokenizerFast"),N_=r(" for usage examples and documentation concerning parameters."),ju=c(),Eo=n("h2"),zn=n("a"),Bc=n("span"),b(Ra.$$.fragment),I_=c(),Kc=n("span"),D_=r("Electra specific outputs"),qu=c(),wo=n("div"),b(Ha.$$.fragment),S_=c(),Qa=n("p"),W_=r("Output type of "),xd=n("a"),U_=r("ElectraForPreTraining"),R_=r("."),Pu=c(),$o=n("div"),b(Va.$$.fragment),H_=c(),Ba=n("p"),Q_=r("Output type of "),Md=n("a"),V_=r("TFElectraForPreTraining"),B_=r("."),Au=c(),Fo=n("h2"),Cn=n("a"),Jc=n("span"),b(Ka.$$.fragment),K_=c(),Gc=n("span"),J_=r("ElectraModel"),Ou=c(),et=n("div"),b(Ja.$$.fragment),G_=c(),Xc=n("p"),X_=r("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),Y_=c(),Ga=n("p"),Z_=r("This model inherits from "),zd=n("a"),ev=r("PreTrainedModel"),tv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ov=c(),Xa=n("p"),nv=r("This model is also a PyTorch "),Ya=n("a"),sv=r("torch.nn.Module"),av=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rv=c(),$t=n("div"),b(Za.$$.fragment),iv=c(),xo=n("p"),lv=r("The "),Cd=n("a"),dv=r("ElectraModel"),cv=r(" forward method, overrides the "),Yc=n("code"),pv=r("__call__"),hv=r(" special method."),mv=c(),b(jn.$$.fragment),uv=c(),b(qn.$$.fragment),Lu=c(),Mo=n("h2"),Pn=n("a"),Zc=n("span"),b(er.$$.fragment),fv=c(),ep=n("span"),gv=r("ElectraForPreTraining"),Nu=c(),Qe=n("div"),b(tr.$$.fragment),_v=c(),tp=n("p"),vv=r("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),kv=c(),op=n("p"),Tv=r("It is recommended to load the discriminator checkpoint into that model."),bv=c(),or=n("p"),yv=r("This model inherits from "),jd=n("a"),Ev=r("PreTrainedModel"),wv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$v=c(),nr=n("p"),Fv=r("This model is also a PyTorch "),sr=n("a"),xv=r("torch.nn.Module"),Mv=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zv=c(),Ft=n("div"),b(ar.$$.fragment),Cv=c(),zo=n("p"),jv=r("The "),qd=n("a"),qv=r("ElectraForPreTraining"),Pv=r(" forward method, overrides the "),np=n("code"),Av=r("__call__"),Ov=r(" special method."),Lv=c(),b(An.$$.fragment),Nv=c(),b(On.$$.fragment),Iu=c(),Co=n("h2"),Ln=n("a"),sp=n("span"),b(rr.$$.fragment),Iv=c(),ap=n("span"),Dv=r("ElectraForCausalLM"),Du=c(),tt=n("div"),b(ir.$$.fragment),Sv=c(),lr=n("p"),Wv=r("ELECTRA Model with a "),rp=n("code"),Uv=r("language modeling"),Rv=r(" head on top for CLM fine-tuning."),Hv=c(),dr=n("p"),Qv=r("This model inherits from "),Pd=n("a"),Vv=r("PreTrainedModel"),Bv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kv=c(),cr=n("p"),Jv=r("This model is also a PyTorch "),pr=n("a"),Gv=r("torch.nn.Module"),Xv=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yv=c(),xt=n("div"),b(hr.$$.fragment),Zv=c(),jo=n("p"),ek=r("The "),Ad=n("a"),tk=r("ElectraForCausalLM"),ok=r(" forward method, overrides the "),ip=n("code"),nk=r("__call__"),sk=r(" special method."),ak=c(),b(Nn.$$.fragment),rk=c(),b(In.$$.fragment),Su=c(),qo=n("h2"),Dn=n("a"),lp=n("span"),b(mr.$$.fragment),ik=c(),dp=n("span"),lk=r("ElectraForMaskedLM"),Wu=c(),Ve=n("div"),b(ur.$$.fragment),dk=c(),cp=n("p"),ck=r("Electra model with a language modeling head on top."),pk=c(),pp=n("p"),hk=r(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),mk=c(),fr=n("p"),uk=r("This model inherits from "),Od=n("a"),fk=r("PreTrainedModel"),gk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_k=c(),gr=n("p"),vk=r("This model is also a PyTorch "),_r=n("a"),kk=r("torch.nn.Module"),Tk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bk=c(),at=n("div"),b(vr.$$.fragment),yk=c(),Po=n("p"),Ek=r("The "),Ld=n("a"),wk=r("ElectraForMaskedLM"),$k=r(" forward method, overrides the "),hp=n("code"),Fk=r("__call__"),xk=r(" special method."),Mk=c(),b(Sn.$$.fragment),zk=c(),b(Wn.$$.fragment),Ck=c(),b(Un.$$.fragment),Uu=c(),Ao=n("h2"),Rn=n("a"),mp=n("span"),b(kr.$$.fragment),jk=c(),up=n("span"),qk=r("ElectraForSequenceClassification"),Ru=c(),ot=n("div"),b(Tr.$$.fragment),Pk=c(),fp=n("p"),Ak=r(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ok=c(),br=n("p"),Lk=r("This model inherits from "),Nd=n("a"),Nk=r("PreTrainedModel"),Ik=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dk=c(),yr=n("p"),Sk=r("This model is also a PyTorch "),Er=n("a"),Wk=r("torch.nn.Module"),Uk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rk=c(),He=n("div"),b(wr.$$.fragment),Hk=c(),Oo=n("p"),Qk=r("The "),Id=n("a"),Vk=r("ElectraForSequenceClassification"),Bk=r(" forward method, overrides the "),gp=n("code"),Kk=r("__call__"),Jk=r(" special method."),Gk=c(),b(Hn.$$.fragment),Xk=c(),b(Qn.$$.fragment),Yk=c(),b(Vn.$$.fragment),Zk=c(),b(Bn.$$.fragment),e2=c(),b(Kn.$$.fragment),Hu=c(),Lo=n("h2"),Jn=n("a"),_p=n("span"),b($r.$$.fragment),t2=c(),vp=n("span"),o2=r("ElectraForMultipleChoice"),Qu=c(),nt=n("div"),b(Fr.$$.fragment),n2=c(),kp=n("p"),s2=r(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),a2=c(),xr=n("p"),r2=r("This model inherits from "),Dd=n("a"),i2=r("PreTrainedModel"),l2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),d2=c(),Mr=n("p"),c2=r("This model is also a PyTorch "),zr=n("a"),p2=r("torch.nn.Module"),h2=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),m2=c(),Mt=n("div"),b(Cr.$$.fragment),u2=c(),No=n("p"),f2=r("The "),Sd=n("a"),g2=r("ElectraForMultipleChoice"),_2=r(" forward method, overrides the "),Tp=n("code"),v2=r("__call__"),k2=r(" special method."),T2=c(),b(Gn.$$.fragment),b2=c(),b(Xn.$$.fragment),Vu=c(),Io=n("h2"),Yn=n("a"),bp=n("span"),b(jr.$$.fragment),y2=c(),yp=n("span"),E2=r("ElectraForTokenClassification"),Bu=c(),Be=n("div"),b(qr.$$.fragment),w2=c(),Ep=n("p"),$2=r("Electra model with a token classification head on top."),F2=c(),wp=n("p"),x2=r("Both the discriminator and generator may be loaded into this model."),M2=c(),Pr=n("p"),z2=r("This model inherits from "),Wd=n("a"),C2=r("PreTrainedModel"),j2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),q2=c(),Ar=n("p"),P2=r("This model is also a PyTorch "),Or=n("a"),A2=r("torch.nn.Module"),O2=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),L2=c(),rt=n("div"),b(Lr.$$.fragment),N2=c(),Do=n("p"),I2=r("The "),Ud=n("a"),D2=r("ElectraForTokenClassification"),S2=r(" forward method, overrides the "),$p=n("code"),W2=r("__call__"),U2=r(" special method."),R2=c(),b(Zn.$$.fragment),H2=c(),b(es.$$.fragment),Q2=c(),b(ts.$$.fragment),Ku=c(),So=n("h2"),os=n("a"),Fp=n("span"),b(Nr.$$.fragment),V2=c(),xp=n("span"),B2=r("ElectraForQuestionAnswering"),Ju=c(),st=n("div"),b(Ir.$$.fragment),K2=c(),Wo=n("p"),J2=r(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Mp=n("code"),G2=r("span start logits"),X2=r(" and "),zp=n("code"),Y2=r("span end logits"),Z2=r(")."),eT=c(),Dr=n("p"),tT=r("This model inherits from "),Rd=n("a"),oT=r("PreTrainedModel"),nT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sT=c(),Sr=n("p"),aT=r("This model is also a PyTorch "),Wr=n("a"),rT=r("torch.nn.Module"),iT=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lT=c(),it=n("div"),b(Ur.$$.fragment),dT=c(),Uo=n("p"),cT=r("The "),Hd=n("a"),pT=r("ElectraForQuestionAnswering"),hT=r(" forward method, overrides the "),Cp=n("code"),mT=r("__call__"),uT=r(" special method."),fT=c(),b(ns.$$.fragment),gT=c(),b(ss.$$.fragment),_T=c(),b(as.$$.fragment),Gu=c(),Ro=n("h2"),rs=n("a"),jp=n("span"),b(Rr.$$.fragment),vT=c(),qp=n("span"),kT=r("TFElectraModel"),Xu=c(),Ke=n("div"),b(Hr.$$.fragment),TT=c(),Pp=n("p"),bT=r("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),yT=c(),Qr=n("p"),ET=r("This model inherits from "),Qd=n("a"),wT=r("TFPreTrainedModel"),$T=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),FT=c(),Vr=n("p"),xT=r("This model is also a "),Br=n("a"),MT=r("tf.keras.Model"),zT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),CT=c(),b(is.$$.fragment),jT=c(),zt=n("div"),b(Kr.$$.fragment),qT=c(),Ho=n("p"),PT=r("The "),Vd=n("a"),AT=r("TFElectraModel"),OT=r(" forward method, overrides the "),Ap=n("code"),LT=r("__call__"),NT=r(" special method."),IT=c(),b(ls.$$.fragment),DT=c(),b(ds.$$.fragment),Yu=c(),Qo=n("h2"),cs=n("a"),Op=n("span"),b(Jr.$$.fragment),ST=c(),Lp=n("span"),WT=r("TFElectraForPreTraining"),Zu=c(),Oe=n("div"),b(Gr.$$.fragment),UT=c(),Np=n("p"),RT=r("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),HT=c(),Ip=n("p"),QT=r(`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),VT=c(),Xr=n("p"),BT=r("This model inherits from "),Bd=n("a"),KT=r("TFPreTrainedModel"),JT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),GT=c(),Yr=n("p"),XT=r("This model is also a "),Zr=n("a"),YT=r("tf.keras.Model"),ZT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),eb=c(),b(ps.$$.fragment),tb=c(),Ct=n("div"),b(ei.$$.fragment),ob=c(),Vo=n("p"),nb=r("The "),Kd=n("a"),sb=r("TFElectraForPreTraining"),ab=r(" forward method, overrides the "),Dp=n("code"),rb=r("__call__"),ib=r(" special method."),lb=c(),b(hs.$$.fragment),db=c(),b(ms.$$.fragment),ef=c(),Bo=n("h2"),us=n("a"),Sp=n("span"),b(ti.$$.fragment),cb=c(),Wp=n("span"),pb=r("TFElectraForMaskedLM"),tf=c(),Le=n("div"),b(oi.$$.fragment),hb=c(),Up=n("p"),mb=r("Electra model with a language modeling head on top."),ub=c(),Rp=n("p"),fb=r(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),gb=c(),ni=n("p"),_b=r("This model inherits from "),Jd=n("a"),vb=r("TFPreTrainedModel"),kb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tb=c(),si=n("p"),bb=r("This model is also a "),ai=n("a"),yb=r("tf.keras.Model"),Eb=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wb=c(),b(fs.$$.fragment),$b=c(),lt=n("div"),b(ri.$$.fragment),Fb=c(),Ko=n("p"),xb=r("The "),Gd=n("a"),Mb=r("TFElectraForMaskedLM"),zb=r(" forward method, overrides the "),Hp=n("code"),Cb=r("__call__"),jb=r(" special method."),qb=c(),b(gs.$$.fragment),Pb=c(),b(_s.$$.fragment),Ab=c(),b(vs.$$.fragment),of=c(),Jo=n("h2"),ks=n("a"),Qp=n("span"),b(ii.$$.fragment),Ob=c(),Vp=n("span"),Lb=r("TFElectraForSequenceClassification"),nf=c(),Je=n("div"),b(li.$$.fragment),Nb=c(),Bp=n("p"),Ib=r(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Db=c(),di=n("p"),Sb=r("This model inherits from "),Xd=n("a"),Wb=r("TFPreTrainedModel"),Ub=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rb=c(),ci=n("p"),Hb=r("This model is also a "),pi=n("a"),Qb=r("tf.keras.Model"),Vb=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bb=c(),b(Ts.$$.fragment),Kb=c(),dt=n("div"),b(hi.$$.fragment),Jb=c(),Go=n("p"),Gb=r("The "),Yd=n("a"),Xb=r("TFElectraForSequenceClassification"),Yb=r(" forward method, overrides the "),Kp=n("code"),Zb=r("__call__"),ey=r(" special method."),ty=c(),b(bs.$$.fragment),oy=c(),b(ys.$$.fragment),ny=c(),b(Es.$$.fragment),sf=c(),Xo=n("h2"),ws=n("a"),Jp=n("span"),b(mi.$$.fragment),sy=c(),Gp=n("span"),ay=r("TFElectraForMultipleChoice"),af=c(),Ge=n("div"),b(ui.$$.fragment),ry=c(),Xp=n("p"),iy=r(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ly=c(),fi=n("p"),dy=r("This model inherits from "),Zd=n("a"),cy=r("TFPreTrainedModel"),py=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hy=c(),gi=n("p"),my=r("This model is also a "),_i=n("a"),uy=r("tf.keras.Model"),fy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gy=c(),b($s.$$.fragment),_y=c(),jt=n("div"),b(vi.$$.fragment),vy=c(),Yo=n("p"),ky=r("The "),ec=n("a"),Ty=r("TFElectraForMultipleChoice"),by=r(" forward method, overrides the "),Yp=n("code"),yy=r("__call__"),Ey=r(" special method."),wy=c(),b(Fs.$$.fragment),$y=c(),b(xs.$$.fragment),rf=c(),Zo=n("h2"),Ms=n("a"),Zp=n("span"),b(ki.$$.fragment),Fy=c(),eh=n("span"),xy=r("TFElectraForTokenClassification"),lf=c(),Ne=n("div"),b(Ti.$$.fragment),My=c(),th=n("p"),zy=r("Electra model with a token classification head on top."),Cy=c(),oh=n("p"),jy=r("Both the discriminator and generator may be loaded into this model."),qy=c(),bi=n("p"),Py=r("This model inherits from "),tc=n("a"),Ay=r("TFPreTrainedModel"),Oy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ly=c(),yi=n("p"),Ny=r("This model is also a "),Ei=n("a"),Iy=r("tf.keras.Model"),Dy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sy=c(),b(zs.$$.fragment),Wy=c(),ct=n("div"),b(wi.$$.fragment),Uy=c(),en=n("p"),Ry=r("The "),oc=n("a"),Hy=r("TFElectraForTokenClassification"),Qy=r(" forward method, overrides the "),nh=n("code"),Vy=r("__call__"),By=r(" special method."),Ky=c(),b(Cs.$$.fragment),Jy=c(),b(js.$$.fragment),Gy=c(),b(qs.$$.fragment),df=c(),tn=n("h2"),Ps=n("a"),sh=n("span"),b($i.$$.fragment),Xy=c(),ah=n("span"),Yy=r("TFElectraForQuestionAnswering"),cf=c(),Xe=n("div"),b(Fi.$$.fragment),Zy=c(),on=n("p"),e1=r(`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rh=n("code"),t1=r("span start logits"),o1=r(" and "),ih=n("code"),n1=r("span end logits"),s1=r(")."),a1=c(),xi=n("p"),r1=r("This model inherits from "),nc=n("a"),i1=r("TFPreTrainedModel"),l1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),d1=c(),Mi=n("p"),c1=r("This model is also a "),zi=n("a"),p1=r("tf.keras.Model"),h1=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),m1=c(),b(As.$$.fragment),u1=c(),pt=n("div"),b(Ci.$$.fragment),f1=c(),nn=n("p"),g1=r("The "),sc=n("a"),_1=r("TFElectraForQuestionAnswering"),v1=r(" forward method, overrides the "),lh=n("code"),k1=r("__call__"),T1=r(" special method."),b1=c(),b(Os.$$.fragment),y1=c(),b(Ls.$$.fragment),E1=c(),b(Ns.$$.fragment),pf=c(),sn=n("h2"),Is=n("a"),dh=n("span"),b(ji.$$.fragment),w1=c(),ch=n("span"),$1=r("FlaxElectraModel"),hf=c(),Ie=n("div"),b(qi.$$.fragment),F1=c(),ph=n("p"),x1=r("The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),M1=c(),Pi=n("p"),z1=r("This model inherits from "),ac=n("a"),C1=r("FlaxPreTrainedModel"),j1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),q1=c(),Ai=n("p"),P1=r(`This model is also a Flax Linen
`),Oi=n("a"),A1=r("flax.nn.Module"),O1=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),L1=c(),hh=n("p"),N1=r("Finally, this model supports inherent JAX features such as:"),I1=c(),Kt=n("ul"),mh=n("li"),Li=n("a"),D1=r("Just-In-Time (JIT) compilation"),S1=c(),uh=n("li"),Ni=n("a"),W1=r("Automatic Differentiation"),U1=c(),fh=n("li"),Ii=n("a"),R1=r("Vectorization"),H1=c(),gh=n("li"),Di=n("a"),Q1=r("Parallelization"),V1=c(),qt=n("div"),b(Si.$$.fragment),B1=c(),an=n("p"),K1=r("The "),_h=n("code"),J1=r("FlaxElectraPreTrainedModel"),G1=r(" forward method, overrides the "),vh=n("code"),X1=r("__call__"),Y1=r(" special method."),Z1=c(),b(Ds.$$.fragment),eE=c(),b(Ss.$$.fragment),mf=c(),rn=n("h2"),Ws=n("a"),kh=n("span"),b(Wi.$$.fragment),tE=c(),Th=n("span"),oE=r("FlaxElectraForPreTraining"),uf=c(),Pe=n("div"),b(Ui.$$.fragment),nE=c(),bh=n("p"),sE=r("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),aE=c(),yh=n("p"),rE=r("It is recommended to load the discriminator checkpoint into that model."),iE=c(),Ri=n("p"),lE=r("This model inherits from "),rc=n("a"),dE=r("FlaxPreTrainedModel"),cE=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pE=c(),Hi=n("p"),hE=r(`This model is also a Flax Linen
`),Qi=n("a"),mE=r("flax.nn.Module"),uE=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fE=c(),Eh=n("p"),gE=r("Finally, this model supports inherent JAX features such as:"),_E=c(),Jt=n("ul"),wh=n("li"),Vi=n("a"),vE=r("Just-In-Time (JIT) compilation"),kE=c(),$h=n("li"),Bi=n("a"),TE=r("Automatic Differentiation"),bE=c(),Fh=n("li"),Ki=n("a"),yE=r("Vectorization"),EE=c(),xh=n("li"),Ji=n("a"),wE=r("Parallelization"),$E=c(),Pt=n("div"),b(Gi.$$.fragment),FE=c(),ln=n("p"),xE=r("The "),Mh=n("code"),ME=r("FlaxElectraPreTrainedModel"),zE=r(" forward method, overrides the "),zh=n("code"),CE=r("__call__"),jE=r(" special method."),qE=c(),b(Us.$$.fragment),PE=c(),b(Rs.$$.fragment),ff=c(),dn=n("h2"),Hs=n("a"),Ch=n("span"),b(Xi.$$.fragment),AE=c(),jh=n("span"),OE=r("FlaxElectraForCausalLM"),gf=c(),De=n("div"),b(Yi.$$.fragment),LE=c(),qh=n("p"),NE=r(`Electra Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),IE=c(),Zi=n("p"),DE=r("This model inherits from "),ic=n("a"),SE=r("FlaxPreTrainedModel"),WE=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),UE=c(),el=n("p"),RE=r(`This model is also a Flax Linen
`),tl=n("a"),HE=r("flax.nn.Module"),QE=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),VE=c(),Ph=n("p"),BE=r("Finally, this model supports inherent JAX features such as:"),KE=c(),Gt=n("ul"),Ah=n("li"),ol=n("a"),JE=r("Just-In-Time (JIT) compilation"),GE=c(),Oh=n("li"),nl=n("a"),XE=r("Automatic Differentiation"),YE=c(),Lh=n("li"),sl=n("a"),ZE=r("Vectorization"),ew=c(),Nh=n("li"),al=n("a"),tw=r("Parallelization"),ow=c(),At=n("div"),b(rl.$$.fragment),nw=c(),cn=n("p"),sw=r("The "),Ih=n("code"),aw=r("FlaxElectraPreTrainedModel"),rw=r(" forward method, overrides the "),Dh=n("code"),iw=r("__call__"),lw=r(" special method."),dw=c(),b(Qs.$$.fragment),cw=c(),b(Vs.$$.fragment),_f=c(),pn=n("h2"),Bs=n("a"),Sh=n("span"),b(il.$$.fragment),pw=c(),Wh=n("span"),hw=r("FlaxElectraForMaskedLM"),vf=c(),Se=n("div"),b(ll.$$.fragment),mw=c(),dl=n("p"),uw=r("Electra Model with a "),Uh=n("code"),fw=r("language modeling"),gw=r(" head on top."),_w=c(),cl=n("p"),vw=r("This model inherits from "),lc=n("a"),kw=r("FlaxPreTrainedModel"),Tw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bw=c(),pl=n("p"),yw=r(`This model is also a Flax Linen
`),hl=n("a"),Ew=r("flax.nn.Module"),ww=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$w=c(),Rh=n("p"),Fw=r("Finally, this model supports inherent JAX features such as:"),xw=c(),Xt=n("ul"),Hh=n("li"),ml=n("a"),Mw=r("Just-In-Time (JIT) compilation"),zw=c(),Qh=n("li"),ul=n("a"),Cw=r("Automatic Differentiation"),jw=c(),Vh=n("li"),fl=n("a"),qw=r("Vectorization"),Pw=c(),Bh=n("li"),gl=n("a"),Aw=r("Parallelization"),Ow=c(),Ot=n("div"),b(_l.$$.fragment),Lw=c(),hn=n("p"),Nw=r("The "),Kh=n("code"),Iw=r("FlaxElectraPreTrainedModel"),Dw=r(" forward method, overrides the "),Jh=n("code"),Sw=r("__call__"),Ww=r(" special method."),Uw=c(),b(Ks.$$.fragment),Rw=c(),b(Js.$$.fragment),kf=c(),mn=n("h2"),Gs=n("a"),Gh=n("span"),b(vl.$$.fragment),Hw=c(),Xh=n("span"),Qw=r("FlaxElectraForSequenceClassification"),Tf=c(),We=n("div"),b(kl.$$.fragment),Vw=c(),Yh=n("p"),Bw=r(`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Kw=c(),Tl=n("p"),Jw=r("This model inherits from "),dc=n("a"),Gw=r("FlaxPreTrainedModel"),Xw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yw=c(),bl=n("p"),Zw=r(`This model is also a Flax Linen
`),yl=n("a"),e$=r("flax.nn.Module"),t$=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),o$=c(),Zh=n("p"),n$=r("Finally, this model supports inherent JAX features such as:"),s$=c(),Yt=n("ul"),em=n("li"),El=n("a"),a$=r("Just-In-Time (JIT) compilation"),r$=c(),tm=n("li"),wl=n("a"),i$=r("Automatic Differentiation"),l$=c(),om=n("li"),$l=n("a"),d$=r("Vectorization"),c$=c(),nm=n("li"),Fl=n("a"),p$=r("Parallelization"),h$=c(),Lt=n("div"),b(xl.$$.fragment),m$=c(),un=n("p"),u$=r("The "),sm=n("code"),f$=r("FlaxElectraPreTrainedModel"),g$=r(" forward method, overrides the "),am=n("code"),_$=r("__call__"),v$=r(" special method."),k$=c(),b(Xs.$$.fragment),T$=c(),b(Ys.$$.fragment),bf=c(),fn=n("h2"),Zs=n("a"),rm=n("span"),b(Ml.$$.fragment),b$=c(),im=n("span"),y$=r("FlaxElectraForMultipleChoice"),yf=c(),Ue=n("div"),b(zl.$$.fragment),E$=c(),lm=n("p"),w$=r(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),$$=c(),Cl=n("p"),F$=r("This model inherits from "),cc=n("a"),x$=r("FlaxPreTrainedModel"),M$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),z$=c(),jl=n("p"),C$=r(`This model is also a Flax Linen
`),ql=n("a"),j$=r("flax.nn.Module"),q$=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),P$=c(),dm=n("p"),A$=r("Finally, this model supports inherent JAX features such as:"),O$=c(),Zt=n("ul"),cm=n("li"),Pl=n("a"),L$=r("Just-In-Time (JIT) compilation"),N$=c(),pm=n("li"),Al=n("a"),I$=r("Automatic Differentiation"),D$=c(),hm=n("li"),Ol=n("a"),S$=r("Vectorization"),W$=c(),mm=n("li"),Ll=n("a"),U$=r("Parallelization"),R$=c(),Nt=n("div"),b(Nl.$$.fragment),H$=c(),gn=n("p"),Q$=r("The "),um=n("code"),V$=r("FlaxElectraPreTrainedModel"),B$=r(" forward method, overrides the "),fm=n("code"),K$=r("__call__"),J$=r(" special method."),G$=c(),b(ea.$$.fragment),X$=c(),b(ta.$$.fragment),Ef=c(),_n=n("h2"),oa=n("a"),gm=n("span"),b(Il.$$.fragment),Y$=c(),_m=n("span"),Z$=r("FlaxElectraForTokenClassification"),wf=c(),Ae=n("div"),b(Dl.$$.fragment),eF=c(),vm=n("p"),tF=r("Electra model with a token classification head on top."),oF=c(),km=n("p"),nF=r("Both the discriminator and generator may be loaded into this model."),sF=c(),Sl=n("p"),aF=r("This model inherits from "),pc=n("a"),rF=r("FlaxPreTrainedModel"),iF=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),lF=c(),Wl=n("p"),dF=r(`This model is also a Flax Linen
`),Ul=n("a"),cF=r("flax.nn.Module"),pF=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),hF=c(),Tm=n("p"),mF=r("Finally, this model supports inherent JAX features such as:"),uF=c(),eo=n("ul"),bm=n("li"),Rl=n("a"),fF=r("Just-In-Time (JIT) compilation"),gF=c(),ym=n("li"),Hl=n("a"),_F=r("Automatic Differentiation"),vF=c(),Em=n("li"),Ql=n("a"),kF=r("Vectorization"),TF=c(),wm=n("li"),Vl=n("a"),bF=r("Parallelization"),yF=c(),It=n("div"),b(Bl.$$.fragment),EF=c(),vn=n("p"),wF=r("The "),$m=n("code"),$F=r("FlaxElectraPreTrainedModel"),FF=r(" forward method, overrides the "),Fm=n("code"),xF=r("__call__"),MF=r(" special method."),zF=c(),b(na.$$.fragment),CF=c(),b(sa.$$.fragment),$f=c(),kn=n("h2"),aa=n("a"),xm=n("span"),b(Kl.$$.fragment),jF=c(),Mm=n("span"),qF=r("FlaxElectraForQuestionAnswering"),Ff=c(),Re=n("div"),b(Jl.$$.fragment),PF=c(),Tn=n("p"),AF=r(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zm=n("code"),OF=r("span start logits"),LF=r(" and "),Cm=n("code"),NF=r("span end logits"),IF=r(")."),DF=c(),Gl=n("p"),SF=r("This model inherits from "),hc=n("a"),WF=r("FlaxPreTrainedModel"),UF=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),RF=c(),Xl=n("p"),HF=r(`This model is also a Flax Linen
`),Yl=n("a"),QF=r("flax.nn.Module"),VF=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),BF=c(),jm=n("p"),KF=r("Finally, this model supports inherent JAX features such as:"),JF=c(),to=n("ul"),qm=n("li"),Zl=n("a"),GF=r("Just-In-Time (JIT) compilation"),XF=c(),Pm=n("li"),ed=n("a"),YF=r("Automatic Differentiation"),ZF=c(),Am=n("li"),td=n("a"),e0=r("Vectorization"),t0=c(),Om=n("li"),od=n("a"),o0=r("Parallelization"),n0=c(),Dt=n("div"),b(nd.$$.fragment),s0=c(),bn=n("p"),a0=r("The "),Lm=n("code"),r0=r("FlaxElectraPreTrainedModel"),i0=r(" forward method, overrides the "),Nm=n("code"),l0=r("__call__"),d0=r(" special method."),c0=c(),b(ra.$$.fragment),p0=c(),b(ia.$$.fragment),this.h()},l(o){const k=uC('[data-svelte="svelte-1phssyn"]',document.head);d=s(k,"META",{name:!0,content:!0}),k.forEach(t),g=p(o),h=s(o,"H1",{class:!0});var sd=a(h);m=s(sd,"A",{id:!0,class:!0,href:!0});var Im=a(m);_=s(Im,"SPAN",{});var Dm=a(_);y(l.$$.fragment,Dm),Dm.forEach(t),Im.forEach(t),u=p(sd),M=s(sd,"SPAN",{});var Sm=a(M);ue=i(Sm,"ELECTRA"),Sm.forEach(t),sd.forEach(t),J=p(o),C=s(o,"H2",{class:!0});var ad=a(C);ee=s(ad,"A",{id:!0,class:!0,href:!0});var Wm=a(ee);D=s(Wm,"SPAN",{});var Um=a(D);y(oe.$$.fragment,Um),Um.forEach(t),Wm.forEach(t),fe=p(ad),S=s(ad,"SPAN",{});var Rm=a(S);ge=i(Rm,"Overview"),Rm.forEach(t),ad.forEach(t),pe=p(o),K=s(o,"P",{});var rd=a(K);O=i(rd,"The ELECTRA model was proposed in the paper "),ne=s(rd,"A",{href:!0,rel:!0});var Hm=a(ne);X=i(Hm,`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
Generators`),Hm.forEach(t),j=i(rd,`. ELECTRA is a new pretraining approach which trains two
transformer models: the generator and the discriminator. The generator\u2019s role is to replace tokens in a sequence, and
is therefore trained as a masked language model. The discriminator, which is the model we\u2019re interested in, tries to
identify which tokens were replaced by the generator in the sequence.`),rd.forEach(t),P=p(o),ae=s(o,"P",{});var Qm=a(ae);R=i(Qm,"The abstract from the paper is the following:"),Qm.forEach(t),he=p(o),re=s(o,"P",{});var Vm=a(re);W=s(Vm,"EM",{});var Bm=a(W);_e=i(Bm,`Masked language modeling (MLM) pretraining methods such as BERT corrupt the input by replacing some tokens with [MASK]
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
using the same amount of compute.`),Bm.forEach(t),Vm.forEach(t),me=p(o),q=s(o,"P",{});var Km=a(q);ve=i(Km,"Tips:"),Km.forEach(t),U=p(o),te=s(o,"UL",{});var id=a(te);ce=s(id,"LI",{});var Jm=a(ce);H=i(Jm,`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),Jm.forEach(t),ke=p(id),G=s(id,"LI",{});var oo=a(G);L=i(oo,"The ELECTRA checkpoints saved using "),se=s(oo,"A",{href:!0,rel:!0});var Gm=a(se);Q=i(Gm,"Google Research\u2019s implementation"),Gm.forEach(t),Te=i(oo,`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),T=s(oo,"A",{href:!0});var Xm=a(T);z=i(Xm,"ElectraForMaskedLM"),Xm.forEach(t),Y=i(oo,` model, and the generator may be loaded in the
`),Fe=s(oo,"A",{href:!0});var Ym=a(Fe);ze=i(Ym,"ElectraForPreTraining"),Ym.forEach(t),N=i(oo,` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),oo.forEach(t),id.forEach(t),xe=p(o),be=s(o,"P",{});var yn=a(be);Ce=i(yn,"This model was contributed by "),A=s(yn,"A",{href:!0,rel:!0});var Zm=a(A);V=i(Zm,"lysandre"),Zm.forEach(t),je=i(yn,". The original code can be found "),$e=s(yn,"A",{href:!0,rel:!0});var eu=a($e);B=i(eu,"here"),eu.forEach(t),qe=i(yn,"."),yn.forEach(t),Me=p(o),Z=s(o,"H2",{class:!0});var ld=a(Z);Ee=s(ld,"A",{id:!0,class:!0,href:!0});var tu=a(Ee);Dc=s(tu,"SPAN",{});var ou=a(Dc);y(Pa.$$.fragment,ou),ou.forEach(t),tu.forEach(t),Bg=p(ld),Sc=s(ld,"SPAN",{});var nu=a(Sc);Kg=i(nu,"ElectraConfig"),nu.forEach(t),ld.forEach(t),Fu=p(o),yt=s(o,"DIV",{class:!0});var no=a(yt);y(Aa.$$.fragment,no),Jg=p(no),Bt=s(no,"P",{});var so=a(Bt);Gg=i(so,"This is the configuration class to store the configuration of a "),_d=s(so,"A",{href:!0});var su=a(_d);Xg=i(su,"ElectraModel"),su.forEach(t),Yg=i(so," or a "),vd=s(so,"A",{href:!0});var au=a(vd);Zg=i(au,"TFElectraModel"),au.forEach(t),e_=i(so,`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),Oa=s(so,"A",{href:!0,rel:!0});var ru=a(Oa);t_=i(ru,"google/electra-small-discriminator"),ru.forEach(t),o_=i(so," architecture."),so.forEach(t),n_=p(no),To=s(no,"P",{});var En=a(To);s_=i(En,"Configuration objects inherit from "),kd=s(En,"A",{href:!0});var iu=a(kd);a_=i(iu,"PretrainedConfig"),iu.forEach(t),r_=i(En,` and can be used to control the model outputs. Read the
documentation from `),Td=s(En,"A",{href:!0});var lu=a(Td);i_=i(lu,"PretrainedConfig"),lu.forEach(t),l_=i(En," for more information."),En.forEach(t),d_=p(no),y(wn.$$.fragment,no),no.forEach(t),xu=p(o),bo=s(o,"H2",{class:!0});var dd=a(bo);$n=s(dd,"A",{id:!0,class:!0,href:!0});var du=a($n);Wc=s(du,"SPAN",{});var cu=a(Wc);y(La.$$.fragment,cu),cu.forEach(t),du.forEach(t),c_=p(dd),Uc=s(dd,"SPAN",{});var pu=a(Uc);p_=i(pu,"ElectraTokenizer"),pu.forEach(t),dd.forEach(t),Mu=p(o),Et=s(o,"DIV",{class:!0});var ao=a(Et);y(Na.$$.fragment,ao),h_=p(ao),Rc=s(ao,"P",{});var hu=a(Rc);m_=i(hu,"Construct an ELECTRA tokenizer."),hu.forEach(t),u_=p(ao),Fn=s(ao,"P",{});var la=a(Fn);bd=s(la,"A",{href:!0});var mu=a(bd);f_=i(mu,"ElectraTokenizer"),mu.forEach(t),g_=i(la," is identical to "),yd=s(la,"A",{href:!0});var uu=a(yd);__=i(uu,"BertTokenizer"),uu.forEach(t),v_=i(la,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),la.forEach(t),k_=p(ao),Ia=s(ao,"P",{});var cd=a(Ia);T_=i(cd,"Refer to superclass "),Ed=s(cd,"A",{href:!0});var fu=a(Ed);b_=i(fu,"BertTokenizer"),fu.forEach(t),y_=i(cd," for usage examples and documentation concerning parameters."),cd.forEach(t),ao.forEach(t),zu=p(o),yo=s(o,"H2",{class:!0});var pd=a(yo);xn=s(pd,"A",{id:!0,class:!0,href:!0});var gu=a(xn);Hc=s(gu,"SPAN",{});var _u=a(Hc);y(Da.$$.fragment,_u),_u.forEach(t),gu.forEach(t),E_=p(pd),Qc=s(pd,"SPAN",{});var vu=a(Qc);w_=i(vu,"ElectraTokenizerFast"),vu.forEach(t),pd.forEach(t),Cu=p(o),wt=s(o,"DIV",{class:!0});var ro=a(wt);y(Sa.$$.fragment,ro),$_=p(ro),Wa=s(ro,"P",{});var hd=a(Wa);F_=i(hd,"Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),Vc=s(hd,"EM",{});var ku=a(Vc);x_=i(ku,"tokenizers"),ku.forEach(t),M_=i(hd," library)."),hd.forEach(t),z_=p(ro),Mn=s(ro,"P",{});var da=a(Mn);wd=s(da,"A",{href:!0});var Tu=a(wd);C_=i(Tu,"ElectraTokenizerFast"),Tu.forEach(t),j_=i(da," is identical to "),$d=s(da,"A",{href:!0});var bu=a($d);q_=i(bu,"BertTokenizerFast"),bu.forEach(t),P_=i(da,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),da.forEach(t),A_=p(ro),Ua=s(ro,"P",{});var md=a(Ua);O_=i(md,"Refer to superclass "),Fd=s(md,"A",{href:!0});var yu=a(Fd);L_=i(yu,"BertTokenizerFast"),yu.forEach(t),N_=i(md," for usage examples and documentation concerning parameters."),md.forEach(t),ro.forEach(t),ju=p(o),Eo=s(o,"H2",{class:!0});var ud=a(Eo);zn=s(ud,"A",{id:!0,class:!0,href:!0});var Eu=a(zn);Bc=s(Eu,"SPAN",{});var wu=a(Bc);y(Ra.$$.fragment,wu),wu.forEach(t),Eu.forEach(t),I_=p(ud),Kc=s(ud,"SPAN",{});var $u=a(Kc);D_=i($u,"Electra specific outputs"),$u.forEach(t),ud.forEach(t),qu=p(o),wo=s(o,"DIV",{class:!0});var fd=a(wo);y(Ha.$$.fragment,fd),S_=p(fd),Qa=s(fd,"P",{});var gd=a(Qa);W_=i(gd,"Output type of "),xd=s(gd,"A",{href:!0});var h0=a(xd);U_=i(h0,"ElectraForPreTraining"),h0.forEach(t),R_=i(gd,"."),gd.forEach(t),fd.forEach(t),Pu=p(o),$o=s(o,"DIV",{class:!0});var Mf=a($o);y(Va.$$.fragment,Mf),H_=p(Mf),Ba=s(Mf,"P",{});var zf=a(Ba);Q_=i(zf,"Output type of "),Md=s(zf,"A",{href:!0});var m0=a(Md);V_=i(m0,"TFElectraForPreTraining"),m0.forEach(t),B_=i(zf,"."),zf.forEach(t),Mf.forEach(t),Au=p(o),Fo=s(o,"H2",{class:!0});var Cf=a(Fo);Cn=s(Cf,"A",{id:!0,class:!0,href:!0});var u0=a(Cn);Jc=s(u0,"SPAN",{});var f0=a(Jc);y(Ka.$$.fragment,f0),f0.forEach(t),u0.forEach(t),K_=p(Cf),Gc=s(Cf,"SPAN",{});var g0=a(Gc);J_=i(g0,"ElectraModel"),g0.forEach(t),Cf.forEach(t),Ou=p(o),et=s(o,"DIV",{class:!0});var io=a(et);y(Ja.$$.fragment,io),G_=p(io),Xc=s(io,"P",{});var _0=a(Xc);X_=i(_0,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),_0.forEach(t),Y_=p(io),Ga=s(io,"P",{});var jf=a(Ga);Z_=i(jf,"This model inherits from "),zd=s(jf,"A",{href:!0});var v0=a(zd);ev=i(v0,"PreTrainedModel"),v0.forEach(t),tv=i(jf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jf.forEach(t),ov=p(io),Xa=s(io,"P",{});var qf=a(Xa);nv=i(qf,"This model is also a PyTorch "),Ya=s(qf,"A",{href:!0,rel:!0});var k0=a(Ya);sv=i(k0,"torch.nn.Module"),k0.forEach(t),av=i(qf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qf.forEach(t),rv=p(io),$t=s(io,"DIV",{class:!0});var ca=a($t);y(Za.$$.fragment,ca),iv=p(ca),xo=s(ca,"P",{});var mc=a(xo);lv=i(mc,"The "),Cd=s(mc,"A",{href:!0});var T0=a(Cd);dv=i(T0,"ElectraModel"),T0.forEach(t),cv=i(mc," forward method, overrides the "),Yc=s(mc,"CODE",{});var b0=a(Yc);pv=i(b0,"__call__"),b0.forEach(t),hv=i(mc," special method."),mc.forEach(t),mv=p(ca),y(jn.$$.fragment,ca),uv=p(ca),y(qn.$$.fragment,ca),ca.forEach(t),io.forEach(t),Lu=p(o),Mo=s(o,"H2",{class:!0});var Pf=a(Mo);Pn=s(Pf,"A",{id:!0,class:!0,href:!0});var y0=a(Pn);Zc=s(y0,"SPAN",{});var E0=a(Zc);y(er.$$.fragment,E0),E0.forEach(t),y0.forEach(t),fv=p(Pf),ep=s(Pf,"SPAN",{});var w0=a(ep);gv=i(w0,"ElectraForPreTraining"),w0.forEach(t),Pf.forEach(t),Nu=p(o),Qe=s(o,"DIV",{class:!0});var St=a(Qe);y(tr.$$.fragment,St),_v=p(St),tp=s(St,"P",{});var $0=a(tp);vv=i($0,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),$0.forEach(t),kv=p(St),op=s(St,"P",{});var F0=a(op);Tv=i(F0,"It is recommended to load the discriminator checkpoint into that model."),F0.forEach(t),bv=p(St),or=s(St,"P",{});var Af=a(or);yv=i(Af,"This model inherits from "),jd=s(Af,"A",{href:!0});var x0=a(jd);Ev=i(x0,"PreTrainedModel"),x0.forEach(t),wv=i(Af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Af.forEach(t),$v=p(St),nr=s(St,"P",{});var Of=a(nr);Fv=i(Of,"This model is also a PyTorch "),sr=s(Of,"A",{href:!0,rel:!0});var M0=a(sr);xv=i(M0,"torch.nn.Module"),M0.forEach(t),Mv=i(Of,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Of.forEach(t),zv=p(St),Ft=s(St,"DIV",{class:!0});var pa=a(Ft);y(ar.$$.fragment,pa),Cv=p(pa),zo=s(pa,"P",{});var uc=a(zo);jv=i(uc,"The "),qd=s(uc,"A",{href:!0});var z0=a(qd);qv=i(z0,"ElectraForPreTraining"),z0.forEach(t),Pv=i(uc," forward method, overrides the "),np=s(uc,"CODE",{});var C0=a(np);Av=i(C0,"__call__"),C0.forEach(t),Ov=i(uc," special method."),uc.forEach(t),Lv=p(pa),y(An.$$.fragment,pa),Nv=p(pa),y(On.$$.fragment,pa),pa.forEach(t),St.forEach(t),Iu=p(o),Co=s(o,"H2",{class:!0});var Lf=a(Co);Ln=s(Lf,"A",{id:!0,class:!0,href:!0});var j0=a(Ln);sp=s(j0,"SPAN",{});var q0=a(sp);y(rr.$$.fragment,q0),q0.forEach(t),j0.forEach(t),Iv=p(Lf),ap=s(Lf,"SPAN",{});var P0=a(ap);Dv=i(P0,"ElectraForCausalLM"),P0.forEach(t),Lf.forEach(t),Du=p(o),tt=s(o,"DIV",{class:!0});var lo=a(tt);y(ir.$$.fragment,lo),Sv=p(lo),lr=s(lo,"P",{});var Nf=a(lr);Wv=i(Nf,"ELECTRA Model with a "),rp=s(Nf,"CODE",{});var A0=a(rp);Uv=i(A0,"language modeling"),A0.forEach(t),Rv=i(Nf," head on top for CLM fine-tuning."),Nf.forEach(t),Hv=p(lo),dr=s(lo,"P",{});var If=a(dr);Qv=i(If,"This model inherits from "),Pd=s(If,"A",{href:!0});var O0=a(Pd);Vv=i(O0,"PreTrainedModel"),O0.forEach(t),Bv=i(If,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),If.forEach(t),Kv=p(lo),cr=s(lo,"P",{});var Df=a(cr);Jv=i(Df,"This model is also a PyTorch "),pr=s(Df,"A",{href:!0,rel:!0});var L0=a(pr);Gv=i(L0,"torch.nn.Module"),L0.forEach(t),Xv=i(Df,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Df.forEach(t),Yv=p(lo),xt=s(lo,"DIV",{class:!0});var ha=a(xt);y(hr.$$.fragment,ha),Zv=p(ha),jo=s(ha,"P",{});var fc=a(jo);ek=i(fc,"The "),Ad=s(fc,"A",{href:!0});var N0=a(Ad);tk=i(N0,"ElectraForCausalLM"),N0.forEach(t),ok=i(fc," forward method, overrides the "),ip=s(fc,"CODE",{});var I0=a(ip);nk=i(I0,"__call__"),I0.forEach(t),sk=i(fc," special method."),fc.forEach(t),ak=p(ha),y(Nn.$$.fragment,ha),rk=p(ha),y(In.$$.fragment,ha),ha.forEach(t),lo.forEach(t),Su=p(o),qo=s(o,"H2",{class:!0});var Sf=a(qo);Dn=s(Sf,"A",{id:!0,class:!0,href:!0});var D0=a(Dn);lp=s(D0,"SPAN",{});var S0=a(lp);y(mr.$$.fragment,S0),S0.forEach(t),D0.forEach(t),ik=p(Sf),dp=s(Sf,"SPAN",{});var W0=a(dp);lk=i(W0,"ElectraForMaskedLM"),W0.forEach(t),Sf.forEach(t),Wu=p(o),Ve=s(o,"DIV",{class:!0});var Wt=a(Ve);y(ur.$$.fragment,Wt),dk=p(Wt),cp=s(Wt,"P",{});var U0=a(cp);ck=i(U0,"Electra model with a language modeling head on top."),U0.forEach(t),pk=p(Wt),pp=s(Wt,"P",{});var R0=a(pp);hk=i(R0,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),R0.forEach(t),mk=p(Wt),fr=s(Wt,"P",{});var Wf=a(fr);uk=i(Wf,"This model inherits from "),Od=s(Wf,"A",{href:!0});var H0=a(Od);fk=i(H0,"PreTrainedModel"),H0.forEach(t),gk=i(Wf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wf.forEach(t),_k=p(Wt),gr=s(Wt,"P",{});var Uf=a(gr);vk=i(Uf,"This model is also a PyTorch "),_r=s(Uf,"A",{href:!0,rel:!0});var Q0=a(_r);kk=i(Q0,"torch.nn.Module"),Q0.forEach(t),Tk=i(Uf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uf.forEach(t),bk=p(Wt),at=s(Wt,"DIV",{class:!0});var co=a(at);y(vr.$$.fragment,co),yk=p(co),Po=s(co,"P",{});var gc=a(Po);Ek=i(gc,"The "),Ld=s(gc,"A",{href:!0});var V0=a(Ld);wk=i(V0,"ElectraForMaskedLM"),V0.forEach(t),$k=i(gc," forward method, overrides the "),hp=s(gc,"CODE",{});var B0=a(hp);Fk=i(B0,"__call__"),B0.forEach(t),xk=i(gc," special method."),gc.forEach(t),Mk=p(co),y(Sn.$$.fragment,co),zk=p(co),y(Wn.$$.fragment,co),Ck=p(co),y(Un.$$.fragment,co),co.forEach(t),Wt.forEach(t),Uu=p(o),Ao=s(o,"H2",{class:!0});var Rf=a(Ao);Rn=s(Rf,"A",{id:!0,class:!0,href:!0});var K0=a(Rn);mp=s(K0,"SPAN",{});var J0=a(mp);y(kr.$$.fragment,J0),J0.forEach(t),K0.forEach(t),jk=p(Rf),up=s(Rf,"SPAN",{});var G0=a(up);qk=i(G0,"ElectraForSequenceClassification"),G0.forEach(t),Rf.forEach(t),Ru=p(o),ot=s(o,"DIV",{class:!0});var po=a(ot);y(Tr.$$.fragment,po),Pk=p(po),fp=s(po,"P",{});var X0=a(fp);Ak=i(X0,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),X0.forEach(t),Ok=p(po),br=s(po,"P",{});var Hf=a(br);Lk=i(Hf,"This model inherits from "),Nd=s(Hf,"A",{href:!0});var Y0=a(Nd);Nk=i(Y0,"PreTrainedModel"),Y0.forEach(t),Ik=i(Hf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hf.forEach(t),Dk=p(po),yr=s(po,"P",{});var Qf=a(yr);Sk=i(Qf,"This model is also a PyTorch "),Er=s(Qf,"A",{href:!0,rel:!0});var Z0=a(Er);Wk=i(Z0,"torch.nn.Module"),Z0.forEach(t),Uk=i(Qf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qf.forEach(t),Rk=p(po),He=s(po,"DIV",{class:!0});var ht=a(He);y(wr.$$.fragment,ht),Hk=p(ht),Oo=s(ht,"P",{});var _c=a(Oo);Qk=i(_c,"The "),Id=s(_c,"A",{href:!0});var ex=a(Id);Vk=i(ex,"ElectraForSequenceClassification"),ex.forEach(t),Bk=i(_c," forward method, overrides the "),gp=s(_c,"CODE",{});var tx=a(gp);Kk=i(tx,"__call__"),tx.forEach(t),Jk=i(_c," special method."),_c.forEach(t),Gk=p(ht),y(Hn.$$.fragment,ht),Xk=p(ht),y(Qn.$$.fragment,ht),Yk=p(ht),y(Vn.$$.fragment,ht),Zk=p(ht),y(Bn.$$.fragment,ht),e2=p(ht),y(Kn.$$.fragment,ht),ht.forEach(t),po.forEach(t),Hu=p(o),Lo=s(o,"H2",{class:!0});var Vf=a(Lo);Jn=s(Vf,"A",{id:!0,class:!0,href:!0});var ox=a(Jn);_p=s(ox,"SPAN",{});var nx=a(_p);y($r.$$.fragment,nx),nx.forEach(t),ox.forEach(t),t2=p(Vf),vp=s(Vf,"SPAN",{});var sx=a(vp);o2=i(sx,"ElectraForMultipleChoice"),sx.forEach(t),Vf.forEach(t),Qu=p(o),nt=s(o,"DIV",{class:!0});var ho=a(nt);y(Fr.$$.fragment,ho),n2=p(ho),kp=s(ho,"P",{});var ax=a(kp);s2=i(ax,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ax.forEach(t),a2=p(ho),xr=s(ho,"P",{});var Bf=a(xr);r2=i(Bf,"This model inherits from "),Dd=s(Bf,"A",{href:!0});var rx=a(Dd);i2=i(rx,"PreTrainedModel"),rx.forEach(t),l2=i(Bf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bf.forEach(t),d2=p(ho),Mr=s(ho,"P",{});var Kf=a(Mr);c2=i(Kf,"This model is also a PyTorch "),zr=s(Kf,"A",{href:!0,rel:!0});var ix=a(zr);p2=i(ix,"torch.nn.Module"),ix.forEach(t),h2=i(Kf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kf.forEach(t),m2=p(ho),Mt=s(ho,"DIV",{class:!0});var ma=a(Mt);y(Cr.$$.fragment,ma),u2=p(ma),No=s(ma,"P",{});var vc=a(No);f2=i(vc,"The "),Sd=s(vc,"A",{href:!0});var lx=a(Sd);g2=i(lx,"ElectraForMultipleChoice"),lx.forEach(t),_2=i(vc," forward method, overrides the "),Tp=s(vc,"CODE",{});var dx=a(Tp);v2=i(dx,"__call__"),dx.forEach(t),k2=i(vc," special method."),vc.forEach(t),T2=p(ma),y(Gn.$$.fragment,ma),b2=p(ma),y(Xn.$$.fragment,ma),ma.forEach(t),ho.forEach(t),Vu=p(o),Io=s(o,"H2",{class:!0});var Jf=a(Io);Yn=s(Jf,"A",{id:!0,class:!0,href:!0});var cx=a(Yn);bp=s(cx,"SPAN",{});var px=a(bp);y(jr.$$.fragment,px),px.forEach(t),cx.forEach(t),y2=p(Jf),yp=s(Jf,"SPAN",{});var hx=a(yp);E2=i(hx,"ElectraForTokenClassification"),hx.forEach(t),Jf.forEach(t),Bu=p(o),Be=s(o,"DIV",{class:!0});var Ut=a(Be);y(qr.$$.fragment,Ut),w2=p(Ut),Ep=s(Ut,"P",{});var mx=a(Ep);$2=i(mx,"Electra model with a token classification head on top."),mx.forEach(t),F2=p(Ut),wp=s(Ut,"P",{});var ux=a(wp);x2=i(ux,"Both the discriminator and generator may be loaded into this model."),ux.forEach(t),M2=p(Ut),Pr=s(Ut,"P",{});var Gf=a(Pr);z2=i(Gf,"This model inherits from "),Wd=s(Gf,"A",{href:!0});var fx=a(Wd);C2=i(fx,"PreTrainedModel"),fx.forEach(t),j2=i(Gf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gf.forEach(t),q2=p(Ut),Ar=s(Ut,"P",{});var Xf=a(Ar);P2=i(Xf,"This model is also a PyTorch "),Or=s(Xf,"A",{href:!0,rel:!0});var gx=a(Or);A2=i(gx,"torch.nn.Module"),gx.forEach(t),O2=i(Xf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xf.forEach(t),L2=p(Ut),rt=s(Ut,"DIV",{class:!0});var mo=a(rt);y(Lr.$$.fragment,mo),N2=p(mo),Do=s(mo,"P",{});var kc=a(Do);I2=i(kc,"The "),Ud=s(kc,"A",{href:!0});var _x=a(Ud);D2=i(_x,"ElectraForTokenClassification"),_x.forEach(t),S2=i(kc," forward method, overrides the "),$p=s(kc,"CODE",{});var vx=a($p);W2=i(vx,"__call__"),vx.forEach(t),U2=i(kc," special method."),kc.forEach(t),R2=p(mo),y(Zn.$$.fragment,mo),H2=p(mo),y(es.$$.fragment,mo),Q2=p(mo),y(ts.$$.fragment,mo),mo.forEach(t),Ut.forEach(t),Ku=p(o),So=s(o,"H2",{class:!0});var Yf=a(So);os=s(Yf,"A",{id:!0,class:!0,href:!0});var kx=a(os);Fp=s(kx,"SPAN",{});var Tx=a(Fp);y(Nr.$$.fragment,Tx),Tx.forEach(t),kx.forEach(t),V2=p(Yf),xp=s(Yf,"SPAN",{});var bx=a(xp);B2=i(bx,"ElectraForQuestionAnswering"),bx.forEach(t),Yf.forEach(t),Ju=p(o),st=s(o,"DIV",{class:!0});var uo=a(st);y(Ir.$$.fragment,uo),K2=p(uo),Wo=s(uo,"P",{});var Tc=a(Wo);J2=i(Tc,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Mp=s(Tc,"CODE",{});var yx=a(Mp);G2=i(yx,"span start logits"),yx.forEach(t),X2=i(Tc," and "),zp=s(Tc,"CODE",{});var Ex=a(zp);Y2=i(Ex,"span end logits"),Ex.forEach(t),Z2=i(Tc,")."),Tc.forEach(t),eT=p(uo),Dr=s(uo,"P",{});var Zf=a(Dr);tT=i(Zf,"This model inherits from "),Rd=s(Zf,"A",{href:!0});var wx=a(Rd);oT=i(wx,"PreTrainedModel"),wx.forEach(t),nT=i(Zf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zf.forEach(t),sT=p(uo),Sr=s(uo,"P",{});var eg=a(Sr);aT=i(eg,"This model is also a PyTorch "),Wr=s(eg,"A",{href:!0,rel:!0});var $x=a(Wr);rT=i($x,"torch.nn.Module"),$x.forEach(t),iT=i(eg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eg.forEach(t),lT=p(uo),it=s(uo,"DIV",{class:!0});var fo=a(it);y(Ur.$$.fragment,fo),dT=p(fo),Uo=s(fo,"P",{});var bc=a(Uo);cT=i(bc,"The "),Hd=s(bc,"A",{href:!0});var Fx=a(Hd);pT=i(Fx,"ElectraForQuestionAnswering"),Fx.forEach(t),hT=i(bc," forward method, overrides the "),Cp=s(bc,"CODE",{});var xx=a(Cp);mT=i(xx,"__call__"),xx.forEach(t),uT=i(bc," special method."),bc.forEach(t),fT=p(fo),y(ns.$$.fragment,fo),gT=p(fo),y(ss.$$.fragment,fo),_T=p(fo),y(as.$$.fragment,fo),fo.forEach(t),uo.forEach(t),Gu=p(o),Ro=s(o,"H2",{class:!0});var tg=a(Ro);rs=s(tg,"A",{id:!0,class:!0,href:!0});var Mx=a(rs);jp=s(Mx,"SPAN",{});var zx=a(jp);y(Rr.$$.fragment,zx),zx.forEach(t),Mx.forEach(t),vT=p(tg),qp=s(tg,"SPAN",{});var Cx=a(qp);kT=i(Cx,"TFElectraModel"),Cx.forEach(t),tg.forEach(t),Xu=p(o),Ke=s(o,"DIV",{class:!0});var Rt=a(Ke);y(Hr.$$.fragment,Rt),TT=p(Rt),Pp=s(Rt,"P",{});var jx=a(Pp);bT=i(jx,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),jx.forEach(t),yT=p(Rt),Qr=s(Rt,"P",{});var og=a(Qr);ET=i(og,"This model inherits from "),Qd=s(og,"A",{href:!0});var qx=a(Qd);wT=i(qx,"TFPreTrainedModel"),qx.forEach(t),$T=i(og,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),og.forEach(t),FT=p(Rt),Vr=s(Rt,"P",{});var ng=a(Vr);xT=i(ng,"This model is also a "),Br=s(ng,"A",{href:!0,rel:!0});var Px=a(Br);MT=i(Px,"tf.keras.Model"),Px.forEach(t),zT=i(ng,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ng.forEach(t),CT=p(Rt),y(is.$$.fragment,Rt),jT=p(Rt),zt=s(Rt,"DIV",{class:!0});var ua=a(zt);y(Kr.$$.fragment,ua),qT=p(ua),Ho=s(ua,"P",{});var yc=a(Ho);PT=i(yc,"The "),Vd=s(yc,"A",{href:!0});var Ax=a(Vd);AT=i(Ax,"TFElectraModel"),Ax.forEach(t),OT=i(yc," forward method, overrides the "),Ap=s(yc,"CODE",{});var Ox=a(Ap);LT=i(Ox,"__call__"),Ox.forEach(t),NT=i(yc," special method."),yc.forEach(t),IT=p(ua),y(ls.$$.fragment,ua),DT=p(ua),y(ds.$$.fragment,ua),ua.forEach(t),Rt.forEach(t),Yu=p(o),Qo=s(o,"H2",{class:!0});var sg=a(Qo);cs=s(sg,"A",{id:!0,class:!0,href:!0});var Lx=a(cs);Op=s(Lx,"SPAN",{});var Nx=a(Op);y(Jr.$$.fragment,Nx),Nx.forEach(t),Lx.forEach(t),ST=p(sg),Lp=s(sg,"SPAN",{});var Ix=a(Lp);WT=i(Ix,"TFElectraForPreTraining"),Ix.forEach(t),sg.forEach(t),Zu=p(o),Oe=s(o,"DIV",{class:!0});var mt=a(Oe);y(Gr.$$.fragment,mt),UT=p(mt),Np=s(mt,"P",{});var Dx=a(Np);RT=i(Dx,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),Dx.forEach(t),HT=p(mt),Ip=s(mt,"P",{});var Sx=a(Ip);QT=i(Sx,`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),Sx.forEach(t),VT=p(mt),Xr=s(mt,"P",{});var ag=a(Xr);BT=i(ag,"This model inherits from "),Bd=s(ag,"A",{href:!0});var Wx=a(Bd);KT=i(Wx,"TFPreTrainedModel"),Wx.forEach(t),JT=i(ag,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ag.forEach(t),GT=p(mt),Yr=s(mt,"P",{});var rg=a(Yr);XT=i(rg,"This model is also a "),Zr=s(rg,"A",{href:!0,rel:!0});var Ux=a(Zr);YT=i(Ux,"tf.keras.Model"),Ux.forEach(t),ZT=i(rg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rg.forEach(t),eb=p(mt),y(ps.$$.fragment,mt),tb=p(mt),Ct=s(mt,"DIV",{class:!0});var fa=a(Ct);y(ei.$$.fragment,fa),ob=p(fa),Vo=s(fa,"P",{});var Ec=a(Vo);nb=i(Ec,"The "),Kd=s(Ec,"A",{href:!0});var Rx=a(Kd);sb=i(Rx,"TFElectraForPreTraining"),Rx.forEach(t),ab=i(Ec," forward method, overrides the "),Dp=s(Ec,"CODE",{});var Hx=a(Dp);rb=i(Hx,"__call__"),Hx.forEach(t),ib=i(Ec," special method."),Ec.forEach(t),lb=p(fa),y(hs.$$.fragment,fa),db=p(fa),y(ms.$$.fragment,fa),fa.forEach(t),mt.forEach(t),ef=p(o),Bo=s(o,"H2",{class:!0});var ig=a(Bo);us=s(ig,"A",{id:!0,class:!0,href:!0});var Qx=a(us);Sp=s(Qx,"SPAN",{});var Vx=a(Sp);y(ti.$$.fragment,Vx),Vx.forEach(t),Qx.forEach(t),cb=p(ig),Wp=s(ig,"SPAN",{});var Bx=a(Wp);pb=i(Bx,"TFElectraForMaskedLM"),Bx.forEach(t),ig.forEach(t),tf=p(o),Le=s(o,"DIV",{class:!0});var ut=a(Le);y(oi.$$.fragment,ut),hb=p(ut),Up=s(ut,"P",{});var Kx=a(Up);mb=i(Kx,"Electra model with a language modeling head on top."),Kx.forEach(t),ub=p(ut),Rp=s(ut,"P",{});var Jx=a(Rp);fb=i(Jx,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),Jx.forEach(t),gb=p(ut),ni=s(ut,"P",{});var lg=a(ni);_b=i(lg,"This model inherits from "),Jd=s(lg,"A",{href:!0});var Gx=a(Jd);vb=i(Gx,"TFPreTrainedModel"),Gx.forEach(t),kb=i(lg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lg.forEach(t),Tb=p(ut),si=s(ut,"P",{});var dg=a(si);bb=i(dg,"This model is also a "),ai=s(dg,"A",{href:!0,rel:!0});var Xx=a(ai);yb=i(Xx,"tf.keras.Model"),Xx.forEach(t),Eb=i(dg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dg.forEach(t),wb=p(ut),y(fs.$$.fragment,ut),$b=p(ut),lt=s(ut,"DIV",{class:!0});var go=a(lt);y(ri.$$.fragment,go),Fb=p(go),Ko=s(go,"P",{});var wc=a(Ko);xb=i(wc,"The "),Gd=s(wc,"A",{href:!0});var Yx=a(Gd);Mb=i(Yx,"TFElectraForMaskedLM"),Yx.forEach(t),zb=i(wc," forward method, overrides the "),Hp=s(wc,"CODE",{});var Zx=a(Hp);Cb=i(Zx,"__call__"),Zx.forEach(t),jb=i(wc," special method."),wc.forEach(t),qb=p(go),y(gs.$$.fragment,go),Pb=p(go),y(_s.$$.fragment,go),Ab=p(go),y(vs.$$.fragment,go),go.forEach(t),ut.forEach(t),of=p(o),Jo=s(o,"H2",{class:!0});var cg=a(Jo);ks=s(cg,"A",{id:!0,class:!0,href:!0});var e4=a(ks);Qp=s(e4,"SPAN",{});var t4=a(Qp);y(ii.$$.fragment,t4),t4.forEach(t),e4.forEach(t),Ob=p(cg),Vp=s(cg,"SPAN",{});var o4=a(Vp);Lb=i(o4,"TFElectraForSequenceClassification"),o4.forEach(t),cg.forEach(t),nf=p(o),Je=s(o,"DIV",{class:!0});var Ht=a(Je);y(li.$$.fragment,Ht),Nb=p(Ht),Bp=s(Ht,"P",{});var n4=a(Bp);Ib=i(n4,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),n4.forEach(t),Db=p(Ht),di=s(Ht,"P",{});var pg=a(di);Sb=i(pg,"This model inherits from "),Xd=s(pg,"A",{href:!0});var s4=a(Xd);Wb=i(s4,"TFPreTrainedModel"),s4.forEach(t),Ub=i(pg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pg.forEach(t),Rb=p(Ht),ci=s(Ht,"P",{});var hg=a(ci);Hb=i(hg,"This model is also a "),pi=s(hg,"A",{href:!0,rel:!0});var a4=a(pi);Qb=i(a4,"tf.keras.Model"),a4.forEach(t),Vb=i(hg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hg.forEach(t),Bb=p(Ht),y(Ts.$$.fragment,Ht),Kb=p(Ht),dt=s(Ht,"DIV",{class:!0});var _o=a(dt);y(hi.$$.fragment,_o),Jb=p(_o),Go=s(_o,"P",{});var $c=a(Go);Gb=i($c,"The "),Yd=s($c,"A",{href:!0});var r4=a(Yd);Xb=i(r4,"TFElectraForSequenceClassification"),r4.forEach(t),Yb=i($c," forward method, overrides the "),Kp=s($c,"CODE",{});var i4=a(Kp);Zb=i(i4,"__call__"),i4.forEach(t),ey=i($c," special method."),$c.forEach(t),ty=p(_o),y(bs.$$.fragment,_o),oy=p(_o),y(ys.$$.fragment,_o),ny=p(_o),y(Es.$$.fragment,_o),_o.forEach(t),Ht.forEach(t),sf=p(o),Xo=s(o,"H2",{class:!0});var mg=a(Xo);ws=s(mg,"A",{id:!0,class:!0,href:!0});var l4=a(ws);Jp=s(l4,"SPAN",{});var d4=a(Jp);y(mi.$$.fragment,d4),d4.forEach(t),l4.forEach(t),sy=p(mg),Gp=s(mg,"SPAN",{});var c4=a(Gp);ay=i(c4,"TFElectraForMultipleChoice"),c4.forEach(t),mg.forEach(t),af=p(o),Ge=s(o,"DIV",{class:!0});var Qt=a(Ge);y(ui.$$.fragment,Qt),ry=p(Qt),Xp=s(Qt,"P",{});var p4=a(Xp);iy=i(p4,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),p4.forEach(t),ly=p(Qt),fi=s(Qt,"P",{});var ug=a(fi);dy=i(ug,"This model inherits from "),Zd=s(ug,"A",{href:!0});var h4=a(Zd);cy=i(h4,"TFPreTrainedModel"),h4.forEach(t),py=i(ug,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ug.forEach(t),hy=p(Qt),gi=s(Qt,"P",{});var fg=a(gi);my=i(fg,"This model is also a "),_i=s(fg,"A",{href:!0,rel:!0});var m4=a(_i);uy=i(m4,"tf.keras.Model"),m4.forEach(t),fy=i(fg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fg.forEach(t),gy=p(Qt),y($s.$$.fragment,Qt),_y=p(Qt),jt=s(Qt,"DIV",{class:!0});var ga=a(jt);y(vi.$$.fragment,ga),vy=p(ga),Yo=s(ga,"P",{});var Fc=a(Yo);ky=i(Fc,"The "),ec=s(Fc,"A",{href:!0});var u4=a(ec);Ty=i(u4,"TFElectraForMultipleChoice"),u4.forEach(t),by=i(Fc," forward method, overrides the "),Yp=s(Fc,"CODE",{});var f4=a(Yp);yy=i(f4,"__call__"),f4.forEach(t),Ey=i(Fc," special method."),Fc.forEach(t),wy=p(ga),y(Fs.$$.fragment,ga),$y=p(ga),y(xs.$$.fragment,ga),ga.forEach(t),Qt.forEach(t),rf=p(o),Zo=s(o,"H2",{class:!0});var gg=a(Zo);Ms=s(gg,"A",{id:!0,class:!0,href:!0});var g4=a(Ms);Zp=s(g4,"SPAN",{});var _4=a(Zp);y(ki.$$.fragment,_4),_4.forEach(t),g4.forEach(t),Fy=p(gg),eh=s(gg,"SPAN",{});var v4=a(eh);xy=i(v4,"TFElectraForTokenClassification"),v4.forEach(t),gg.forEach(t),lf=p(o),Ne=s(o,"DIV",{class:!0});var ft=a(Ne);y(Ti.$$.fragment,ft),My=p(ft),th=s(ft,"P",{});var k4=a(th);zy=i(k4,"Electra model with a token classification head on top."),k4.forEach(t),Cy=p(ft),oh=s(ft,"P",{});var T4=a(oh);jy=i(T4,"Both the discriminator and generator may be loaded into this model."),T4.forEach(t),qy=p(ft),bi=s(ft,"P",{});var _g=a(bi);Py=i(_g,"This model inherits from "),tc=s(_g,"A",{href:!0});var b4=a(tc);Ay=i(b4,"TFPreTrainedModel"),b4.forEach(t),Oy=i(_g,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_g.forEach(t),Ly=p(ft),yi=s(ft,"P",{});var vg=a(yi);Ny=i(vg,"This model is also a "),Ei=s(vg,"A",{href:!0,rel:!0});var y4=a(Ei);Iy=i(y4,"tf.keras.Model"),y4.forEach(t),Dy=i(vg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vg.forEach(t),Sy=p(ft),y(zs.$$.fragment,ft),Wy=p(ft),ct=s(ft,"DIV",{class:!0});var vo=a(ct);y(wi.$$.fragment,vo),Uy=p(vo),en=s(vo,"P",{});var xc=a(en);Ry=i(xc,"The "),oc=s(xc,"A",{href:!0});var E4=a(oc);Hy=i(E4,"TFElectraForTokenClassification"),E4.forEach(t),Qy=i(xc," forward method, overrides the "),nh=s(xc,"CODE",{});var w4=a(nh);Vy=i(w4,"__call__"),w4.forEach(t),By=i(xc," special method."),xc.forEach(t),Ky=p(vo),y(Cs.$$.fragment,vo),Jy=p(vo),y(js.$$.fragment,vo),Gy=p(vo),y(qs.$$.fragment,vo),vo.forEach(t),ft.forEach(t),df=p(o),tn=s(o,"H2",{class:!0});var kg=a(tn);Ps=s(kg,"A",{id:!0,class:!0,href:!0});var $4=a(Ps);sh=s($4,"SPAN",{});var F4=a(sh);y($i.$$.fragment,F4),F4.forEach(t),$4.forEach(t),Xy=p(kg),ah=s(kg,"SPAN",{});var x4=a(ah);Yy=i(x4,"TFElectraForQuestionAnswering"),x4.forEach(t),kg.forEach(t),cf=p(o),Xe=s(o,"DIV",{class:!0});var Vt=a(Xe);y(Fi.$$.fragment,Vt),Zy=p(Vt),on=s(Vt,"P",{});var Mc=a(on);e1=i(Mc,`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rh=s(Mc,"CODE",{});var M4=a(rh);t1=i(M4,"span start logits"),M4.forEach(t),o1=i(Mc," and "),ih=s(Mc,"CODE",{});var z4=a(ih);n1=i(z4,"span end logits"),z4.forEach(t),s1=i(Mc,")."),Mc.forEach(t),a1=p(Vt),xi=s(Vt,"P",{});var Tg=a(xi);r1=i(Tg,"This model inherits from "),nc=s(Tg,"A",{href:!0});var C4=a(nc);i1=i(C4,"TFPreTrainedModel"),C4.forEach(t),l1=i(Tg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tg.forEach(t),d1=p(Vt),Mi=s(Vt,"P",{});var bg=a(Mi);c1=i(bg,"This model is also a "),zi=s(bg,"A",{href:!0,rel:!0});var j4=a(zi);p1=i(j4,"tf.keras.Model"),j4.forEach(t),h1=i(bg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bg.forEach(t),m1=p(Vt),y(As.$$.fragment,Vt),u1=p(Vt),pt=s(Vt,"DIV",{class:!0});var ko=a(pt);y(Ci.$$.fragment,ko),f1=p(ko),nn=s(ko,"P",{});var zc=a(nn);g1=i(zc,"The "),sc=s(zc,"A",{href:!0});var q4=a(sc);_1=i(q4,"TFElectraForQuestionAnswering"),q4.forEach(t),v1=i(zc," forward method, overrides the "),lh=s(zc,"CODE",{});var P4=a(lh);k1=i(P4,"__call__"),P4.forEach(t),T1=i(zc," special method."),zc.forEach(t),b1=p(ko),y(Os.$$.fragment,ko),y1=p(ko),y(Ls.$$.fragment,ko),E1=p(ko),y(Ns.$$.fragment,ko),ko.forEach(t),Vt.forEach(t),pf=p(o),sn=s(o,"H2",{class:!0});var yg=a(sn);Is=s(yg,"A",{id:!0,class:!0,href:!0});var A4=a(Is);dh=s(A4,"SPAN",{});var O4=a(dh);y(ji.$$.fragment,O4),O4.forEach(t),A4.forEach(t),w1=p(yg),ch=s(yg,"SPAN",{});var L4=a(ch);$1=i(L4,"FlaxElectraModel"),L4.forEach(t),yg.forEach(t),hf=p(o),Ie=s(o,"DIV",{class:!0});var gt=a(Ie);y(qi.$$.fragment,gt),F1=p(gt),ph=s(gt,"P",{});var N4=a(ph);x1=i(N4,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),N4.forEach(t),M1=p(gt),Pi=s(gt,"P",{});var Eg=a(Pi);z1=i(Eg,"This model inherits from "),ac=s(Eg,"A",{href:!0});var I4=a(ac);C1=i(I4,"FlaxPreTrainedModel"),I4.forEach(t),j1=i(Eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Eg.forEach(t),q1=p(gt),Ai=s(gt,"P",{});var wg=a(Ai);P1=i(wg,`This model is also a Flax Linen
`),Oi=s(wg,"A",{href:!0,rel:!0});var D4=a(Oi);A1=i(D4,"flax.nn.Module"),D4.forEach(t),O1=i(wg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wg.forEach(t),L1=p(gt),hh=s(gt,"P",{});var S4=a(hh);N1=i(S4,"Finally, this model supports inherent JAX features such as:"),S4.forEach(t),I1=p(gt),Kt=s(gt,"UL",{});var _a=a(Kt);mh=s(_a,"LI",{});var W4=a(mh);Li=s(W4,"A",{href:!0,rel:!0});var U4=a(Li);D1=i(U4,"Just-In-Time (JIT) compilation"),U4.forEach(t),W4.forEach(t),S1=p(_a),uh=s(_a,"LI",{});var R4=a(uh);Ni=s(R4,"A",{href:!0,rel:!0});var H4=a(Ni);W1=i(H4,"Automatic Differentiation"),H4.forEach(t),R4.forEach(t),U1=p(_a),fh=s(_a,"LI",{});var Q4=a(fh);Ii=s(Q4,"A",{href:!0,rel:!0});var V4=a(Ii);R1=i(V4,"Vectorization"),V4.forEach(t),Q4.forEach(t),H1=p(_a),gh=s(_a,"LI",{});var B4=a(gh);Di=s(B4,"A",{href:!0,rel:!0});var K4=a(Di);Q1=i(K4,"Parallelization"),K4.forEach(t),B4.forEach(t),_a.forEach(t),V1=p(gt),qt=s(gt,"DIV",{class:!0});var va=a(qt);y(Si.$$.fragment,va),B1=p(va),an=s(va,"P",{});var Cc=a(an);K1=i(Cc,"The "),_h=s(Cc,"CODE",{});var J4=a(_h);J1=i(J4,"FlaxElectraPreTrainedModel"),J4.forEach(t),G1=i(Cc," forward method, overrides the "),vh=s(Cc,"CODE",{});var G4=a(vh);X1=i(G4,"__call__"),G4.forEach(t),Y1=i(Cc," special method."),Cc.forEach(t),Z1=p(va),y(Ds.$$.fragment,va),eE=p(va),y(Ss.$$.fragment,va),va.forEach(t),gt.forEach(t),mf=p(o),rn=s(o,"H2",{class:!0});var $g=a(rn);Ws=s($g,"A",{id:!0,class:!0,href:!0});var X4=a(Ws);kh=s(X4,"SPAN",{});var Y4=a(kh);y(Wi.$$.fragment,Y4),Y4.forEach(t),X4.forEach(t),tE=p($g),Th=s($g,"SPAN",{});var Z4=a(Th);oE=i(Z4,"FlaxElectraForPreTraining"),Z4.forEach(t),$g.forEach(t),uf=p(o),Pe=s(o,"DIV",{class:!0});var Ye=a(Pe);y(Ui.$$.fragment,Ye),nE=p(Ye),bh=s(Ye,"P",{});var eM=a(bh);sE=i(eM,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),eM.forEach(t),aE=p(Ye),yh=s(Ye,"P",{});var tM=a(yh);rE=i(tM,"It is recommended to load the discriminator checkpoint into that model."),tM.forEach(t),iE=p(Ye),Ri=s(Ye,"P",{});var Fg=a(Ri);lE=i(Fg,"This model inherits from "),rc=s(Fg,"A",{href:!0});var oM=a(rc);dE=i(oM,"FlaxPreTrainedModel"),oM.forEach(t),cE=i(Fg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fg.forEach(t),pE=p(Ye),Hi=s(Ye,"P",{});var xg=a(Hi);hE=i(xg,`This model is also a Flax Linen
`),Qi=s(xg,"A",{href:!0,rel:!0});var nM=a(Qi);mE=i(nM,"flax.nn.Module"),nM.forEach(t),uE=i(xg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),xg.forEach(t),fE=p(Ye),Eh=s(Ye,"P",{});var sM=a(Eh);gE=i(sM,"Finally, this model supports inherent JAX features such as:"),sM.forEach(t),_E=p(Ye),Jt=s(Ye,"UL",{});var ka=a(Jt);wh=s(ka,"LI",{});var aM=a(wh);Vi=s(aM,"A",{href:!0,rel:!0});var rM=a(Vi);vE=i(rM,"Just-In-Time (JIT) compilation"),rM.forEach(t),aM.forEach(t),kE=p(ka),$h=s(ka,"LI",{});var iM=a($h);Bi=s(iM,"A",{href:!0,rel:!0});var lM=a(Bi);TE=i(lM,"Automatic Differentiation"),lM.forEach(t),iM.forEach(t),bE=p(ka),Fh=s(ka,"LI",{});var dM=a(Fh);Ki=s(dM,"A",{href:!0,rel:!0});var cM=a(Ki);yE=i(cM,"Vectorization"),cM.forEach(t),dM.forEach(t),EE=p(ka),xh=s(ka,"LI",{});var pM=a(xh);Ji=s(pM,"A",{href:!0,rel:!0});var hM=a(Ji);wE=i(hM,"Parallelization"),hM.forEach(t),pM.forEach(t),ka.forEach(t),$E=p(Ye),Pt=s(Ye,"DIV",{class:!0});var Ta=a(Pt);y(Gi.$$.fragment,Ta),FE=p(Ta),ln=s(Ta,"P",{});var jc=a(ln);xE=i(jc,"The "),Mh=s(jc,"CODE",{});var mM=a(Mh);ME=i(mM,"FlaxElectraPreTrainedModel"),mM.forEach(t),zE=i(jc," forward method, overrides the "),zh=s(jc,"CODE",{});var uM=a(zh);CE=i(uM,"__call__"),uM.forEach(t),jE=i(jc," special method."),jc.forEach(t),qE=p(Ta),y(Us.$$.fragment,Ta),PE=p(Ta),y(Rs.$$.fragment,Ta),Ta.forEach(t),Ye.forEach(t),ff=p(o),dn=s(o,"H2",{class:!0});var Mg=a(dn);Hs=s(Mg,"A",{id:!0,class:!0,href:!0});var fM=a(Hs);Ch=s(fM,"SPAN",{});var gM=a(Ch);y(Xi.$$.fragment,gM),gM.forEach(t),fM.forEach(t),AE=p(Mg),jh=s(Mg,"SPAN",{});var _M=a(jh);OE=i(_M,"FlaxElectraForCausalLM"),_M.forEach(t),Mg.forEach(t),gf=p(o),De=s(o,"DIV",{class:!0});var _t=a(De);y(Yi.$$.fragment,_t),LE=p(_t),qh=s(_t,"P",{});var vM=a(qh);NE=i(vM,`Electra Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),vM.forEach(t),IE=p(_t),Zi=s(_t,"P",{});var zg=a(Zi);DE=i(zg,"This model inherits from "),ic=s(zg,"A",{href:!0});var kM=a(ic);SE=i(kM,"FlaxPreTrainedModel"),kM.forEach(t),WE=i(zg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),zg.forEach(t),UE=p(_t),el=s(_t,"P",{});var Cg=a(el);RE=i(Cg,`This model is also a Flax Linen
`),tl=s(Cg,"A",{href:!0,rel:!0});var TM=a(tl);HE=i(TM,"flax.nn.Module"),TM.forEach(t),QE=i(Cg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Cg.forEach(t),VE=p(_t),Ph=s(_t,"P",{});var bM=a(Ph);BE=i(bM,"Finally, this model supports inherent JAX features such as:"),bM.forEach(t),KE=p(_t),Gt=s(_t,"UL",{});var ba=a(Gt);Ah=s(ba,"LI",{});var yM=a(Ah);ol=s(yM,"A",{href:!0,rel:!0});var EM=a(ol);JE=i(EM,"Just-In-Time (JIT) compilation"),EM.forEach(t),yM.forEach(t),GE=p(ba),Oh=s(ba,"LI",{});var wM=a(Oh);nl=s(wM,"A",{href:!0,rel:!0});var $M=a(nl);XE=i($M,"Automatic Differentiation"),$M.forEach(t),wM.forEach(t),YE=p(ba),Lh=s(ba,"LI",{});var FM=a(Lh);sl=s(FM,"A",{href:!0,rel:!0});var xM=a(sl);ZE=i(xM,"Vectorization"),xM.forEach(t),FM.forEach(t),ew=p(ba),Nh=s(ba,"LI",{});var MM=a(Nh);al=s(MM,"A",{href:!0,rel:!0});var zM=a(al);tw=i(zM,"Parallelization"),zM.forEach(t),MM.forEach(t),ba.forEach(t),ow=p(_t),At=s(_t,"DIV",{class:!0});var ya=a(At);y(rl.$$.fragment,ya),nw=p(ya),cn=s(ya,"P",{});var qc=a(cn);sw=i(qc,"The "),Ih=s(qc,"CODE",{});var CM=a(Ih);aw=i(CM,"FlaxElectraPreTrainedModel"),CM.forEach(t),rw=i(qc," forward method, overrides the "),Dh=s(qc,"CODE",{});var jM=a(Dh);iw=i(jM,"__call__"),jM.forEach(t),lw=i(qc," special method."),qc.forEach(t),dw=p(ya),y(Qs.$$.fragment,ya),cw=p(ya),y(Vs.$$.fragment,ya),ya.forEach(t),_t.forEach(t),_f=p(o),pn=s(o,"H2",{class:!0});var jg=a(pn);Bs=s(jg,"A",{id:!0,class:!0,href:!0});var qM=a(Bs);Sh=s(qM,"SPAN",{});var PM=a(Sh);y(il.$$.fragment,PM),PM.forEach(t),qM.forEach(t),pw=p(jg),Wh=s(jg,"SPAN",{});var AM=a(Wh);hw=i(AM,"FlaxElectraForMaskedLM"),AM.forEach(t),jg.forEach(t),vf=p(o),Se=s(o,"DIV",{class:!0});var vt=a(Se);y(ll.$$.fragment,vt),mw=p(vt),dl=s(vt,"P",{});var qg=a(dl);uw=i(qg,"Electra Model with a "),Uh=s(qg,"CODE",{});var OM=a(Uh);fw=i(OM,"language modeling"),OM.forEach(t),gw=i(qg," head on top."),qg.forEach(t),_w=p(vt),cl=s(vt,"P",{});var Pg=a(cl);vw=i(Pg,"This model inherits from "),lc=s(Pg,"A",{href:!0});var LM=a(lc);kw=i(LM,"FlaxPreTrainedModel"),LM.forEach(t),Tw=i(Pg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Pg.forEach(t),bw=p(vt),pl=s(vt,"P",{});var Ag=a(pl);yw=i(Ag,`This model is also a Flax Linen
`),hl=s(Ag,"A",{href:!0,rel:!0});var NM=a(hl);Ew=i(NM,"flax.nn.Module"),NM.forEach(t),ww=i(Ag,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ag.forEach(t),$w=p(vt),Rh=s(vt,"P",{});var IM=a(Rh);Fw=i(IM,"Finally, this model supports inherent JAX features such as:"),IM.forEach(t),xw=p(vt),Xt=s(vt,"UL",{});var Ea=a(Xt);Hh=s(Ea,"LI",{});var DM=a(Hh);ml=s(DM,"A",{href:!0,rel:!0});var SM=a(ml);Mw=i(SM,"Just-In-Time (JIT) compilation"),SM.forEach(t),DM.forEach(t),zw=p(Ea),Qh=s(Ea,"LI",{});var WM=a(Qh);ul=s(WM,"A",{href:!0,rel:!0});var UM=a(ul);Cw=i(UM,"Automatic Differentiation"),UM.forEach(t),WM.forEach(t),jw=p(Ea),Vh=s(Ea,"LI",{});var RM=a(Vh);fl=s(RM,"A",{href:!0,rel:!0});var HM=a(fl);qw=i(HM,"Vectorization"),HM.forEach(t),RM.forEach(t),Pw=p(Ea),Bh=s(Ea,"LI",{});var QM=a(Bh);gl=s(QM,"A",{href:!0,rel:!0});var VM=a(gl);Aw=i(VM,"Parallelization"),VM.forEach(t),QM.forEach(t),Ea.forEach(t),Ow=p(vt),Ot=s(vt,"DIV",{class:!0});var wa=a(Ot);y(_l.$$.fragment,wa),Lw=p(wa),hn=s(wa,"P",{});var Pc=a(hn);Nw=i(Pc,"The "),Kh=s(Pc,"CODE",{});var BM=a(Kh);Iw=i(BM,"FlaxElectraPreTrainedModel"),BM.forEach(t),Dw=i(Pc," forward method, overrides the "),Jh=s(Pc,"CODE",{});var KM=a(Jh);Sw=i(KM,"__call__"),KM.forEach(t),Ww=i(Pc," special method."),Pc.forEach(t),Uw=p(wa),y(Ks.$$.fragment,wa),Rw=p(wa),y(Js.$$.fragment,wa),wa.forEach(t),vt.forEach(t),kf=p(o),mn=s(o,"H2",{class:!0});var Og=a(mn);Gs=s(Og,"A",{id:!0,class:!0,href:!0});var JM=a(Gs);Gh=s(JM,"SPAN",{});var GM=a(Gh);y(vl.$$.fragment,GM),GM.forEach(t),JM.forEach(t),Hw=p(Og),Xh=s(Og,"SPAN",{});var XM=a(Xh);Qw=i(XM,"FlaxElectraForSequenceClassification"),XM.forEach(t),Og.forEach(t),Tf=p(o),We=s(o,"DIV",{class:!0});var kt=a(We);y(kl.$$.fragment,kt),Vw=p(kt),Yh=s(kt,"P",{});var YM=a(Yh);Bw=i(YM,`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),YM.forEach(t),Kw=p(kt),Tl=s(kt,"P",{});var Lg=a(Tl);Jw=i(Lg,"This model inherits from "),dc=s(Lg,"A",{href:!0});var ZM=a(dc);Gw=i(ZM,"FlaxPreTrainedModel"),ZM.forEach(t),Xw=i(Lg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Lg.forEach(t),Yw=p(kt),bl=s(kt,"P",{});var Ng=a(bl);Zw=i(Ng,`This model is also a Flax Linen
`),yl=s(Ng,"A",{href:!0,rel:!0});var ez=a(yl);e$=i(ez,"flax.nn.Module"),ez.forEach(t),t$=i(Ng,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ng.forEach(t),o$=p(kt),Zh=s(kt,"P",{});var tz=a(Zh);n$=i(tz,"Finally, this model supports inherent JAX features such as:"),tz.forEach(t),s$=p(kt),Yt=s(kt,"UL",{});var $a=a(Yt);em=s($a,"LI",{});var oz=a(em);El=s(oz,"A",{href:!0,rel:!0});var nz=a(El);a$=i(nz,"Just-In-Time (JIT) compilation"),nz.forEach(t),oz.forEach(t),r$=p($a),tm=s($a,"LI",{});var sz=a(tm);wl=s(sz,"A",{href:!0,rel:!0});var az=a(wl);i$=i(az,"Automatic Differentiation"),az.forEach(t),sz.forEach(t),l$=p($a),om=s($a,"LI",{});var rz=a(om);$l=s(rz,"A",{href:!0,rel:!0});var iz=a($l);d$=i(iz,"Vectorization"),iz.forEach(t),rz.forEach(t),c$=p($a),nm=s($a,"LI",{});var lz=a(nm);Fl=s(lz,"A",{href:!0,rel:!0});var dz=a(Fl);p$=i(dz,"Parallelization"),dz.forEach(t),lz.forEach(t),$a.forEach(t),h$=p(kt),Lt=s(kt,"DIV",{class:!0});var Fa=a(Lt);y(xl.$$.fragment,Fa),m$=p(Fa),un=s(Fa,"P",{});var Ac=a(un);u$=i(Ac,"The "),sm=s(Ac,"CODE",{});var cz=a(sm);f$=i(cz,"FlaxElectraPreTrainedModel"),cz.forEach(t),g$=i(Ac," forward method, overrides the "),am=s(Ac,"CODE",{});var pz=a(am);_$=i(pz,"__call__"),pz.forEach(t),v$=i(Ac," special method."),Ac.forEach(t),k$=p(Fa),y(Xs.$$.fragment,Fa),T$=p(Fa),y(Ys.$$.fragment,Fa),Fa.forEach(t),kt.forEach(t),bf=p(o),fn=s(o,"H2",{class:!0});var Ig=a(fn);Zs=s(Ig,"A",{id:!0,class:!0,href:!0});var hz=a(Zs);rm=s(hz,"SPAN",{});var mz=a(rm);y(Ml.$$.fragment,mz),mz.forEach(t),hz.forEach(t),b$=p(Ig),im=s(Ig,"SPAN",{});var uz=a(im);y$=i(uz,"FlaxElectraForMultipleChoice"),uz.forEach(t),Ig.forEach(t),yf=p(o),Ue=s(o,"DIV",{class:!0});var Tt=a(Ue);y(zl.$$.fragment,Tt),E$=p(Tt),lm=s(Tt,"P",{});var fz=a(lm);w$=i(fz,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),fz.forEach(t),$$=p(Tt),Cl=s(Tt,"P",{});var Dg=a(Cl);F$=i(Dg,"This model inherits from "),cc=s(Dg,"A",{href:!0});var gz=a(cc);x$=i(gz,"FlaxPreTrainedModel"),gz.forEach(t),M$=i(Dg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Dg.forEach(t),z$=p(Tt),jl=s(Tt,"P",{});var Sg=a(jl);C$=i(Sg,`This model is also a Flax Linen
`),ql=s(Sg,"A",{href:!0,rel:!0});var _z=a(ql);j$=i(_z,"flax.nn.Module"),_z.forEach(t),q$=i(Sg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Sg.forEach(t),P$=p(Tt),dm=s(Tt,"P",{});var vz=a(dm);A$=i(vz,"Finally, this model supports inherent JAX features such as:"),vz.forEach(t),O$=p(Tt),Zt=s(Tt,"UL",{});var xa=a(Zt);cm=s(xa,"LI",{});var kz=a(cm);Pl=s(kz,"A",{href:!0,rel:!0});var Tz=a(Pl);L$=i(Tz,"Just-In-Time (JIT) compilation"),Tz.forEach(t),kz.forEach(t),N$=p(xa),pm=s(xa,"LI",{});var bz=a(pm);Al=s(bz,"A",{href:!0,rel:!0});var yz=a(Al);I$=i(yz,"Automatic Differentiation"),yz.forEach(t),bz.forEach(t),D$=p(xa),hm=s(xa,"LI",{});var Ez=a(hm);Ol=s(Ez,"A",{href:!0,rel:!0});var wz=a(Ol);S$=i(wz,"Vectorization"),wz.forEach(t),Ez.forEach(t),W$=p(xa),mm=s(xa,"LI",{});var $z=a(mm);Ll=s($z,"A",{href:!0,rel:!0});var Fz=a(Ll);U$=i(Fz,"Parallelization"),Fz.forEach(t),$z.forEach(t),xa.forEach(t),R$=p(Tt),Nt=s(Tt,"DIV",{class:!0});var Ma=a(Nt);y(Nl.$$.fragment,Ma),H$=p(Ma),gn=s(Ma,"P",{});var Oc=a(gn);Q$=i(Oc,"The "),um=s(Oc,"CODE",{});var xz=a(um);V$=i(xz,"FlaxElectraPreTrainedModel"),xz.forEach(t),B$=i(Oc," forward method, overrides the "),fm=s(Oc,"CODE",{});var Mz=a(fm);K$=i(Mz,"__call__"),Mz.forEach(t),J$=i(Oc," special method."),Oc.forEach(t),G$=p(Ma),y(ea.$$.fragment,Ma),X$=p(Ma),y(ta.$$.fragment,Ma),Ma.forEach(t),Tt.forEach(t),Ef=p(o),_n=s(o,"H2",{class:!0});var Wg=a(_n);oa=s(Wg,"A",{id:!0,class:!0,href:!0});var zz=a(oa);gm=s(zz,"SPAN",{});var Cz=a(gm);y(Il.$$.fragment,Cz),Cz.forEach(t),zz.forEach(t),Y$=p(Wg),_m=s(Wg,"SPAN",{});var jz=a(_m);Z$=i(jz,"FlaxElectraForTokenClassification"),jz.forEach(t),Wg.forEach(t),wf=p(o),Ae=s(o,"DIV",{class:!0});var Ze=a(Ae);y(Dl.$$.fragment,Ze),eF=p(Ze),vm=s(Ze,"P",{});var qz=a(vm);tF=i(qz,"Electra model with a token classification head on top."),qz.forEach(t),oF=p(Ze),km=s(Ze,"P",{});var Pz=a(km);nF=i(Pz,"Both the discriminator and generator may be loaded into this model."),Pz.forEach(t),sF=p(Ze),Sl=s(Ze,"P",{});var Ug=a(Sl);aF=i(Ug,"This model inherits from "),pc=s(Ug,"A",{href:!0});var Az=a(pc);rF=i(Az,"FlaxPreTrainedModel"),Az.forEach(t),iF=i(Ug,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ug.forEach(t),lF=p(Ze),Wl=s(Ze,"P",{});var Rg=a(Wl);dF=i(Rg,`This model is also a Flax Linen
`),Ul=s(Rg,"A",{href:!0,rel:!0});var Oz=a(Ul);cF=i(Oz,"flax.nn.Module"),Oz.forEach(t),pF=i(Rg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Rg.forEach(t),hF=p(Ze),Tm=s(Ze,"P",{});var Lz=a(Tm);mF=i(Lz,"Finally, this model supports inherent JAX features such as:"),Lz.forEach(t),uF=p(Ze),eo=s(Ze,"UL",{});var za=a(eo);bm=s(za,"LI",{});var Nz=a(bm);Rl=s(Nz,"A",{href:!0,rel:!0});var Iz=a(Rl);fF=i(Iz,"Just-In-Time (JIT) compilation"),Iz.forEach(t),Nz.forEach(t),gF=p(za),ym=s(za,"LI",{});var Dz=a(ym);Hl=s(Dz,"A",{href:!0,rel:!0});var Sz=a(Hl);_F=i(Sz,"Automatic Differentiation"),Sz.forEach(t),Dz.forEach(t),vF=p(za),Em=s(za,"LI",{});var Wz=a(Em);Ql=s(Wz,"A",{href:!0,rel:!0});var Uz=a(Ql);kF=i(Uz,"Vectorization"),Uz.forEach(t),Wz.forEach(t),TF=p(za),wm=s(za,"LI",{});var Rz=a(wm);Vl=s(Rz,"A",{href:!0,rel:!0});var Hz=a(Vl);bF=i(Hz,"Parallelization"),Hz.forEach(t),Rz.forEach(t),za.forEach(t),yF=p(Ze),It=s(Ze,"DIV",{class:!0});var Ca=a(It);y(Bl.$$.fragment,Ca),EF=p(Ca),vn=s(Ca,"P",{});var Lc=a(vn);wF=i(Lc,"The "),$m=s(Lc,"CODE",{});var Qz=a($m);$F=i(Qz,"FlaxElectraPreTrainedModel"),Qz.forEach(t),FF=i(Lc," forward method, overrides the "),Fm=s(Lc,"CODE",{});var Vz=a(Fm);xF=i(Vz,"__call__"),Vz.forEach(t),MF=i(Lc," special method."),Lc.forEach(t),zF=p(Ca),y(na.$$.fragment,Ca),CF=p(Ca),y(sa.$$.fragment,Ca),Ca.forEach(t),Ze.forEach(t),$f=p(o),kn=s(o,"H2",{class:!0});var Hg=a(kn);aa=s(Hg,"A",{id:!0,class:!0,href:!0});var Bz=a(aa);xm=s(Bz,"SPAN",{});var Kz=a(xm);y(Kl.$$.fragment,Kz),Kz.forEach(t),Bz.forEach(t),jF=p(Hg),Mm=s(Hg,"SPAN",{});var Jz=a(Mm);qF=i(Jz,"FlaxElectraForQuestionAnswering"),Jz.forEach(t),Hg.forEach(t),Ff=p(o),Re=s(o,"DIV",{class:!0});var bt=a(Re);y(Jl.$$.fragment,bt),PF=p(bt),Tn=s(bt,"P",{});var Nc=a(Tn);AF=i(Nc,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zm=s(Nc,"CODE",{});var Gz=a(zm);OF=i(Gz,"span start logits"),Gz.forEach(t),LF=i(Nc," and "),Cm=s(Nc,"CODE",{});var Xz=a(Cm);NF=i(Xz,"span end logits"),Xz.forEach(t),IF=i(Nc,")."),Nc.forEach(t),DF=p(bt),Gl=s(bt,"P",{});var Qg=a(Gl);SF=i(Qg,"This model inherits from "),hc=s(Qg,"A",{href:!0});var Yz=a(hc);WF=i(Yz,"FlaxPreTrainedModel"),Yz.forEach(t),UF=i(Qg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qg.forEach(t),RF=p(bt),Xl=s(bt,"P",{});var Vg=a(Xl);HF=i(Vg,`This model is also a Flax Linen
`),Yl=s(Vg,"A",{href:!0,rel:!0});var Zz=a(Yl);QF=i(Zz,"flax.nn.Module"),Zz.forEach(t),VF=i(Vg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Vg.forEach(t),BF=p(bt),jm=s(bt,"P",{});var eC=a(jm);KF=i(eC,"Finally, this model supports inherent JAX features such as:"),eC.forEach(t),JF=p(bt),to=s(bt,"UL",{});var ja=a(to);qm=s(ja,"LI",{});var tC=a(qm);Zl=s(tC,"A",{href:!0,rel:!0});var oC=a(Zl);GF=i(oC,"Just-In-Time (JIT) compilation"),oC.forEach(t),tC.forEach(t),XF=p(ja),Pm=s(ja,"LI",{});var nC=a(Pm);ed=s(nC,"A",{href:!0,rel:!0});var sC=a(ed);YF=i(sC,"Automatic Differentiation"),sC.forEach(t),nC.forEach(t),ZF=p(ja),Am=s(ja,"LI",{});var aC=a(Am);td=s(aC,"A",{href:!0,rel:!0});var rC=a(td);e0=i(rC,"Vectorization"),rC.forEach(t),aC.forEach(t),t0=p(ja),Om=s(ja,"LI",{});var iC=a(Om);od=s(iC,"A",{href:!0,rel:!0});var lC=a(od);o0=i(lC,"Parallelization"),lC.forEach(t),iC.forEach(t),ja.forEach(t),n0=p(bt),Dt=s(bt,"DIV",{class:!0});var qa=a(Dt);y(nd.$$.fragment,qa),s0=p(qa),bn=s(qa,"P",{});var Ic=a(bn);a0=i(Ic,"The "),Lm=s(Ic,"CODE",{});var dC=a(Lm);r0=i(dC,"FlaxElectraPreTrainedModel"),dC.forEach(t),i0=i(Ic," forward method, overrides the "),Nm=s(Ic,"CODE",{});var cC=a(Nm);l0=i(cC,"__call__"),cC.forEach(t),d0=i(Ic," special method."),Ic.forEach(t),c0=p(qa),y(ra.$$.fragment,qa),p0=p(qa),y(ia.$$.fragment,qa),qa.forEach(t),bt.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(xj)),f(m,"id","electra"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#electra"),f(h,"class","relative group"),f(ee,"id","overview"),f(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ee,"href","#overview"),f(C,"class","relative group"),f(ne,"href","https://openreview.net/pdf?id=r1xMH1BtvB"),f(ne,"rel","nofollow"),f(se,"href","https://github.com/google-research/electra"),f(se,"rel","nofollow"),f(T,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraForMaskedLM"),f(Fe,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraForPreTraining"),f(A,"href","https://huggingface.co/lysandre"),f(A,"rel","nofollow"),f($e,"href","https://github.com/google-research/electra"),f($e,"rel","nofollow"),f(Ee,"id","transformers.ElectraConfig"),f(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ee,"href","#transformers.ElectraConfig"),f(Z,"class","relative group"),f(_d,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraModel"),f(vd,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.TFElectraModel"),f(Oa,"href","https://huggingface.co/google/electra-small-discriminator"),f(Oa,"rel","nofollow"),f(kd,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),f(Td,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),f(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($n,"id","transformers.ElectraTokenizer"),f($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($n,"href","#transformers.ElectraTokenizer"),f(bo,"class","relative group"),f(bd,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizer"),f(yd,"href","/docs/transformers/v4.21.2/en/model_doc/bert#transformers.BertTokenizer"),f(Ed,"href","/docs/transformers/v4.21.2/en/model_doc/bert#transformers.BertTokenizer"),f(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xn,"id","transformers.ElectraTokenizerFast"),f(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xn,"href","#transformers.ElectraTokenizerFast"),f(yo,"class","relative group"),f(wd,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraTokenizerFast"),f($d,"href","/docs/transformers/v4.21.2/en/model_doc/bert#transformers.BertTokenizerFast"),f(Fd,"href","/docs/transformers/v4.21.2/en/model_doc/bert#transformers.BertTokenizerFast"),f(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zn,"id","transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),f(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(zn,"href","#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),f(Eo,"class","relative group"),f(xd,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraForPreTraining"),f(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Md,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.TFElectraForPreTraining"),f($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Cn,"id","transformers.ElectraModel"),f(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Cn,"href","#transformers.ElectraModel"),f(Fo,"class","relative group"),f(zd,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),f(Ya,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ya,"rel","nofollow"),f(Cd,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraModel"),f($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pn,"id","transformers.ElectraForPreTraining"),f(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Pn,"href","#transformers.ElectraForPreTraining"),f(Mo,"class","relative group"),f(jd,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),f(sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(sr,"rel","nofollow"),f(qd,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraForPreTraining"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ln,"id","transformers.ElectraForCausalLM"),f(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ln,"href","#transformers.ElectraForCausalLM"),f(Co,"class","relative group"),f(Pd,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),f(pr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(pr,"rel","nofollow"),f(Ad,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraForCausalLM"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Dn,"id","transformers.ElectraForMaskedLM"),f(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Dn,"href","#transformers.ElectraForMaskedLM"),f(qo,"class","relative group"),f(Od,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),f(_r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(_r,"rel","nofollow"),f(Ld,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraForMaskedLM"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Rn,"id","transformers.ElectraForSequenceClassification"),f(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Rn,"href","#transformers.ElectraForSequenceClassification"),f(Ao,"class","relative group"),f(Nd,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),f(Er,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Er,"rel","nofollow"),f(Id,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraForSequenceClassification"),f(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jn,"id","transformers.ElectraForMultipleChoice"),f(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jn,"href","#transformers.ElectraForMultipleChoice"),f(Lo,"class","relative group"),f(Dd,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),f(zr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(zr,"rel","nofollow"),f(Sd,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraForMultipleChoice"),f(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Yn,"id","transformers.ElectraForTokenClassification"),f(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Yn,"href","#transformers.ElectraForTokenClassification"),f(Io,"class","relative group"),f(Wd,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),f(Or,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Or,"rel","nofollow"),f(Ud,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraForTokenClassification"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(os,"id","transformers.ElectraForQuestionAnswering"),f(os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(os,"href","#transformers.ElectraForQuestionAnswering"),f(So,"class","relative group"),f(Rd,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),f(Wr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Wr,"rel","nofollow"),f(Hd,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.ElectraForQuestionAnswering"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rs,"id","transformers.TFElectraModel"),f(rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rs,"href","#transformers.TFElectraModel"),f(Ro,"class","relative group"),f(Qd,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),f(Br,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Br,"rel","nofollow"),f(Vd,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.TFElectraModel"),f(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(cs,"id","transformers.TFElectraForPreTraining"),f(cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(cs,"href","#transformers.TFElectraForPreTraining"),f(Qo,"class","relative group"),f(Bd,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),f(Zr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Zr,"rel","nofollow"),f(Kd,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.TFElectraForPreTraining"),f(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(us,"id","transformers.TFElectraForMaskedLM"),f(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(us,"href","#transformers.TFElectraForMaskedLM"),f(Bo,"class","relative group"),f(Jd,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),f(ai,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ai,"rel","nofollow"),f(Gd,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.TFElectraForMaskedLM"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ks,"id","transformers.TFElectraForSequenceClassification"),f(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ks,"href","#transformers.TFElectraForSequenceClassification"),f(Jo,"class","relative group"),f(Xd,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),f(pi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(pi,"rel","nofollow"),f(Yd,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.TFElectraForSequenceClassification"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ws,"id","transformers.TFElectraForMultipleChoice"),f(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ws,"href","#transformers.TFElectraForMultipleChoice"),f(Xo,"class","relative group"),f(Zd,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),f(_i,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(_i,"rel","nofollow"),f(ec,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.TFElectraForMultipleChoice"),f(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ms,"id","transformers.TFElectraForTokenClassification"),f(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ms,"href","#transformers.TFElectraForTokenClassification"),f(Zo,"class","relative group"),f(tc,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ei,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ei,"rel","nofollow"),f(oc,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.TFElectraForTokenClassification"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ps,"id","transformers.TFElectraForQuestionAnswering"),f(Ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ps,"href","#transformers.TFElectraForQuestionAnswering"),f(tn,"class","relative group"),f(nc,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),f(zi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(zi,"rel","nofollow"),f(sc,"href","/docs/transformers/v4.21.2/en/model_doc/electra#transformers.TFElectraForQuestionAnswering"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Is,"id","transformers.FlaxElectraModel"),f(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Is,"href","#transformers.FlaxElectraModel"),f(sn,"class","relative group"),f(ac,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Oi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Oi,"rel","nofollow"),f(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Li,"rel","nofollow"),f(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ni,"rel","nofollow"),f(Ii,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ii,"rel","nofollow"),f(Di,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Di,"rel","nofollow"),f(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ws,"id","transformers.FlaxElectraForPreTraining"),f(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ws,"href","#transformers.FlaxElectraForPreTraining"),f(rn,"class","relative group"),f(rc,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Qi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Qi,"rel","nofollow"),f(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Vi,"rel","nofollow"),f(Bi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Bi,"rel","nofollow"),f(Ki,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ki,"rel","nofollow"),f(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ji,"rel","nofollow"),f(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Hs,"id","transformers.FlaxElectraForCausalLM"),f(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Hs,"href","#transformers.FlaxElectraForCausalLM"),f(dn,"class","relative group"),f(ic,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(tl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(tl,"rel","nofollow"),f(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ol,"rel","nofollow"),f(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(nl,"rel","nofollow"),f(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(sl,"rel","nofollow"),f(al,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(al,"rel","nofollow"),f(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bs,"id","transformers.FlaxElectraForMaskedLM"),f(Bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Bs,"href","#transformers.FlaxElectraForMaskedLM"),f(pn,"class","relative group"),f(lc,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(hl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(hl,"rel","nofollow"),f(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ml,"rel","nofollow"),f(ul,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ul,"rel","nofollow"),f(fl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(fl,"rel","nofollow"),f(gl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(gl,"rel","nofollow"),f(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gs,"id","transformers.FlaxElectraForSequenceClassification"),f(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Gs,"href","#transformers.FlaxElectraForSequenceClassification"),f(mn,"class","relative group"),f(dc,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(yl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(yl,"rel","nofollow"),f(El,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(El,"rel","nofollow"),f(wl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(wl,"rel","nofollow"),f($l,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f($l,"rel","nofollow"),f(Fl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Fl,"rel","nofollow"),f(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Zs,"id","transformers.FlaxElectraForMultipleChoice"),f(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Zs,"href","#transformers.FlaxElectraForMultipleChoice"),f(fn,"class","relative group"),f(cc,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ql,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(ql,"rel","nofollow"),f(Pl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Pl,"rel","nofollow"),f(Al,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Al,"rel","nofollow"),f(Ol,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ol,"rel","nofollow"),f(Ll,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ll,"rel","nofollow"),f(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(oa,"id","transformers.FlaxElectraForTokenClassification"),f(oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(oa,"href","#transformers.FlaxElectraForTokenClassification"),f(_n,"class","relative group"),f(pc,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ul,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Ul,"rel","nofollow"),f(Rl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Rl,"rel","nofollow"),f(Hl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Hl,"rel","nofollow"),f(Ql,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ql,"rel","nofollow"),f(Vl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Vl,"rel","nofollow"),f(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(aa,"id","transformers.FlaxElectraForQuestionAnswering"),f(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(aa,"href","#transformers.FlaxElectraForQuestionAnswering"),f(kn,"class","relative group"),f(hc,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Yl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Yl,"rel","nofollow"),f(Zl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Zl,"rel","nofollow"),f(ed,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ed,"rel","nofollow"),f(td,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(td,"rel","nofollow"),f(od,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(od,"rel","nofollow"),f(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),v(o,g,k),v(o,h,k),e(h,m),e(m,_),E(l,_,null),e(h,u),e(h,M),e(M,ue),v(o,J,k),v(o,C,k),e(C,ee),e(ee,D),E(oe,D,null),e(C,fe),e(C,S),e(S,ge),v(o,pe,k),v(o,K,k),e(K,O),e(K,ne),e(ne,X),e(K,j),v(o,P,k),v(o,ae,k),e(ae,R),v(o,he,k),v(o,re,k),e(re,W),e(W,_e),v(o,me,k),v(o,q,k),e(q,ve),v(o,U,k),v(o,te,k),e(te,ce),e(ce,H),e(te,ke),e(te,G),e(G,L),e(G,se),e(se,Q),e(G,Te),e(G,T),e(T,z),e(G,Y),e(G,Fe),e(Fe,ze),e(G,N),v(o,xe,k),v(o,be,k),e(be,Ce),e(be,A),e(A,V),e(be,je),e(be,$e),e($e,B),e(be,qe),v(o,Me,k),v(o,Z,k),e(Z,Ee),e(Ee,Dc),E(Pa,Dc,null),e(Z,Bg),e(Z,Sc),e(Sc,Kg),v(o,Fu,k),v(o,yt,k),E(Aa,yt,null),e(yt,Jg),e(yt,Bt),e(Bt,Gg),e(Bt,_d),e(_d,Xg),e(Bt,Yg),e(Bt,vd),e(vd,Zg),e(Bt,e_),e(Bt,Oa),e(Oa,t_),e(Bt,o_),e(yt,n_),e(yt,To),e(To,s_),e(To,kd),e(kd,a_),e(To,r_),e(To,Td),e(Td,i_),e(To,l_),e(yt,d_),E(wn,yt,null),v(o,xu,k),v(o,bo,k),e(bo,$n),e($n,Wc),E(La,Wc,null),e(bo,c_),e(bo,Uc),e(Uc,p_),v(o,Mu,k),v(o,Et,k),E(Na,Et,null),e(Et,h_),e(Et,Rc),e(Rc,m_),e(Et,u_),e(Et,Fn),e(Fn,bd),e(bd,f_),e(Fn,g_),e(Fn,yd),e(yd,__),e(Fn,v_),e(Et,k_),e(Et,Ia),e(Ia,T_),e(Ia,Ed),e(Ed,b_),e(Ia,y_),v(o,zu,k),v(o,yo,k),e(yo,xn),e(xn,Hc),E(Da,Hc,null),e(yo,E_),e(yo,Qc),e(Qc,w_),v(o,Cu,k),v(o,wt,k),E(Sa,wt,null),e(wt,$_),e(wt,Wa),e(Wa,F_),e(Wa,Vc),e(Vc,x_),e(Wa,M_),e(wt,z_),e(wt,Mn),e(Mn,wd),e(wd,C_),e(Mn,j_),e(Mn,$d),e($d,q_),e(Mn,P_),e(wt,A_),e(wt,Ua),e(Ua,O_),e(Ua,Fd),e(Fd,L_),e(Ua,N_),v(o,ju,k),v(o,Eo,k),e(Eo,zn),e(zn,Bc),E(Ra,Bc,null),e(Eo,I_),e(Eo,Kc),e(Kc,D_),v(o,qu,k),v(o,wo,k),E(Ha,wo,null),e(wo,S_),e(wo,Qa),e(Qa,W_),e(Qa,xd),e(xd,U_),e(Qa,R_),v(o,Pu,k),v(o,$o,k),E(Va,$o,null),e($o,H_),e($o,Ba),e(Ba,Q_),e(Ba,Md),e(Md,V_),e(Ba,B_),v(o,Au,k),v(o,Fo,k),e(Fo,Cn),e(Cn,Jc),E(Ka,Jc,null),e(Fo,K_),e(Fo,Gc),e(Gc,J_),v(o,Ou,k),v(o,et,k),E(Ja,et,null),e(et,G_),e(et,Xc),e(Xc,X_),e(et,Y_),e(et,Ga),e(Ga,Z_),e(Ga,zd),e(zd,ev),e(Ga,tv),e(et,ov),e(et,Xa),e(Xa,nv),e(Xa,Ya),e(Ya,sv),e(Xa,av),e(et,rv),e(et,$t),E(Za,$t,null),e($t,iv),e($t,xo),e(xo,lv),e(xo,Cd),e(Cd,dv),e(xo,cv),e(xo,Yc),e(Yc,pv),e(xo,hv),e($t,mv),E(jn,$t,null),e($t,uv),E(qn,$t,null),v(o,Lu,k),v(o,Mo,k),e(Mo,Pn),e(Pn,Zc),E(er,Zc,null),e(Mo,fv),e(Mo,ep),e(ep,gv),v(o,Nu,k),v(o,Qe,k),E(tr,Qe,null),e(Qe,_v),e(Qe,tp),e(tp,vv),e(Qe,kv),e(Qe,op),e(op,Tv),e(Qe,bv),e(Qe,or),e(or,yv),e(or,jd),e(jd,Ev),e(or,wv),e(Qe,$v),e(Qe,nr),e(nr,Fv),e(nr,sr),e(sr,xv),e(nr,Mv),e(Qe,zv),e(Qe,Ft),E(ar,Ft,null),e(Ft,Cv),e(Ft,zo),e(zo,jv),e(zo,qd),e(qd,qv),e(zo,Pv),e(zo,np),e(np,Av),e(zo,Ov),e(Ft,Lv),E(An,Ft,null),e(Ft,Nv),E(On,Ft,null),v(o,Iu,k),v(o,Co,k),e(Co,Ln),e(Ln,sp),E(rr,sp,null),e(Co,Iv),e(Co,ap),e(ap,Dv),v(o,Du,k),v(o,tt,k),E(ir,tt,null),e(tt,Sv),e(tt,lr),e(lr,Wv),e(lr,rp),e(rp,Uv),e(lr,Rv),e(tt,Hv),e(tt,dr),e(dr,Qv),e(dr,Pd),e(Pd,Vv),e(dr,Bv),e(tt,Kv),e(tt,cr),e(cr,Jv),e(cr,pr),e(pr,Gv),e(cr,Xv),e(tt,Yv),e(tt,xt),E(hr,xt,null),e(xt,Zv),e(xt,jo),e(jo,ek),e(jo,Ad),e(Ad,tk),e(jo,ok),e(jo,ip),e(ip,nk),e(jo,sk),e(xt,ak),E(Nn,xt,null),e(xt,rk),E(In,xt,null),v(o,Su,k),v(o,qo,k),e(qo,Dn),e(Dn,lp),E(mr,lp,null),e(qo,ik),e(qo,dp),e(dp,lk),v(o,Wu,k),v(o,Ve,k),E(ur,Ve,null),e(Ve,dk),e(Ve,cp),e(cp,ck),e(Ve,pk),e(Ve,pp),e(pp,hk),e(Ve,mk),e(Ve,fr),e(fr,uk),e(fr,Od),e(Od,fk),e(fr,gk),e(Ve,_k),e(Ve,gr),e(gr,vk),e(gr,_r),e(_r,kk),e(gr,Tk),e(Ve,bk),e(Ve,at),E(vr,at,null),e(at,yk),e(at,Po),e(Po,Ek),e(Po,Ld),e(Ld,wk),e(Po,$k),e(Po,hp),e(hp,Fk),e(Po,xk),e(at,Mk),E(Sn,at,null),e(at,zk),E(Wn,at,null),e(at,Ck),E(Un,at,null),v(o,Uu,k),v(o,Ao,k),e(Ao,Rn),e(Rn,mp),E(kr,mp,null),e(Ao,jk),e(Ao,up),e(up,qk),v(o,Ru,k),v(o,ot,k),E(Tr,ot,null),e(ot,Pk),e(ot,fp),e(fp,Ak),e(ot,Ok),e(ot,br),e(br,Lk),e(br,Nd),e(Nd,Nk),e(br,Ik),e(ot,Dk),e(ot,yr),e(yr,Sk),e(yr,Er),e(Er,Wk),e(yr,Uk),e(ot,Rk),e(ot,He),E(wr,He,null),e(He,Hk),e(He,Oo),e(Oo,Qk),e(Oo,Id),e(Id,Vk),e(Oo,Bk),e(Oo,gp),e(gp,Kk),e(Oo,Jk),e(He,Gk),E(Hn,He,null),e(He,Xk),E(Qn,He,null),e(He,Yk),E(Vn,He,null),e(He,Zk),E(Bn,He,null),e(He,e2),E(Kn,He,null),v(o,Hu,k),v(o,Lo,k),e(Lo,Jn),e(Jn,_p),E($r,_p,null),e(Lo,t2),e(Lo,vp),e(vp,o2),v(o,Qu,k),v(o,nt,k),E(Fr,nt,null),e(nt,n2),e(nt,kp),e(kp,s2),e(nt,a2),e(nt,xr),e(xr,r2),e(xr,Dd),e(Dd,i2),e(xr,l2),e(nt,d2),e(nt,Mr),e(Mr,c2),e(Mr,zr),e(zr,p2),e(Mr,h2),e(nt,m2),e(nt,Mt),E(Cr,Mt,null),e(Mt,u2),e(Mt,No),e(No,f2),e(No,Sd),e(Sd,g2),e(No,_2),e(No,Tp),e(Tp,v2),e(No,k2),e(Mt,T2),E(Gn,Mt,null),e(Mt,b2),E(Xn,Mt,null),v(o,Vu,k),v(o,Io,k),e(Io,Yn),e(Yn,bp),E(jr,bp,null),e(Io,y2),e(Io,yp),e(yp,E2),v(o,Bu,k),v(o,Be,k),E(qr,Be,null),e(Be,w2),e(Be,Ep),e(Ep,$2),e(Be,F2),e(Be,wp),e(wp,x2),e(Be,M2),e(Be,Pr),e(Pr,z2),e(Pr,Wd),e(Wd,C2),e(Pr,j2),e(Be,q2),e(Be,Ar),e(Ar,P2),e(Ar,Or),e(Or,A2),e(Ar,O2),e(Be,L2),e(Be,rt),E(Lr,rt,null),e(rt,N2),e(rt,Do),e(Do,I2),e(Do,Ud),e(Ud,D2),e(Do,S2),e(Do,$p),e($p,W2),e(Do,U2),e(rt,R2),E(Zn,rt,null),e(rt,H2),E(es,rt,null),e(rt,Q2),E(ts,rt,null),v(o,Ku,k),v(o,So,k),e(So,os),e(os,Fp),E(Nr,Fp,null),e(So,V2),e(So,xp),e(xp,B2),v(o,Ju,k),v(o,st,k),E(Ir,st,null),e(st,K2),e(st,Wo),e(Wo,J2),e(Wo,Mp),e(Mp,G2),e(Wo,X2),e(Wo,zp),e(zp,Y2),e(Wo,Z2),e(st,eT),e(st,Dr),e(Dr,tT),e(Dr,Rd),e(Rd,oT),e(Dr,nT),e(st,sT),e(st,Sr),e(Sr,aT),e(Sr,Wr),e(Wr,rT),e(Sr,iT),e(st,lT),e(st,it),E(Ur,it,null),e(it,dT),e(it,Uo),e(Uo,cT),e(Uo,Hd),e(Hd,pT),e(Uo,hT),e(Uo,Cp),e(Cp,mT),e(Uo,uT),e(it,fT),E(ns,it,null),e(it,gT),E(ss,it,null),e(it,_T),E(as,it,null),v(o,Gu,k),v(o,Ro,k),e(Ro,rs),e(rs,jp),E(Rr,jp,null),e(Ro,vT),e(Ro,qp),e(qp,kT),v(o,Xu,k),v(o,Ke,k),E(Hr,Ke,null),e(Ke,TT),e(Ke,Pp),e(Pp,bT),e(Ke,yT),e(Ke,Qr),e(Qr,ET),e(Qr,Qd),e(Qd,wT),e(Qr,$T),e(Ke,FT),e(Ke,Vr),e(Vr,xT),e(Vr,Br),e(Br,MT),e(Vr,zT),e(Ke,CT),E(is,Ke,null),e(Ke,jT),e(Ke,zt),E(Kr,zt,null),e(zt,qT),e(zt,Ho),e(Ho,PT),e(Ho,Vd),e(Vd,AT),e(Ho,OT),e(Ho,Ap),e(Ap,LT),e(Ho,NT),e(zt,IT),E(ls,zt,null),e(zt,DT),E(ds,zt,null),v(o,Yu,k),v(o,Qo,k),e(Qo,cs),e(cs,Op),E(Jr,Op,null),e(Qo,ST),e(Qo,Lp),e(Lp,WT),v(o,Zu,k),v(o,Oe,k),E(Gr,Oe,null),e(Oe,UT),e(Oe,Np),e(Np,RT),e(Oe,HT),e(Oe,Ip),e(Ip,QT),e(Oe,VT),e(Oe,Xr),e(Xr,BT),e(Xr,Bd),e(Bd,KT),e(Xr,JT),e(Oe,GT),e(Oe,Yr),e(Yr,XT),e(Yr,Zr),e(Zr,YT),e(Yr,ZT),e(Oe,eb),E(ps,Oe,null),e(Oe,tb),e(Oe,Ct),E(ei,Ct,null),e(Ct,ob),e(Ct,Vo),e(Vo,nb),e(Vo,Kd),e(Kd,sb),e(Vo,ab),e(Vo,Dp),e(Dp,rb),e(Vo,ib),e(Ct,lb),E(hs,Ct,null),e(Ct,db),E(ms,Ct,null),v(o,ef,k),v(o,Bo,k),e(Bo,us),e(us,Sp),E(ti,Sp,null),e(Bo,cb),e(Bo,Wp),e(Wp,pb),v(o,tf,k),v(o,Le,k),E(oi,Le,null),e(Le,hb),e(Le,Up),e(Up,mb),e(Le,ub),e(Le,Rp),e(Rp,fb),e(Le,gb),e(Le,ni),e(ni,_b),e(ni,Jd),e(Jd,vb),e(ni,kb),e(Le,Tb),e(Le,si),e(si,bb),e(si,ai),e(ai,yb),e(si,Eb),e(Le,wb),E(fs,Le,null),e(Le,$b),e(Le,lt),E(ri,lt,null),e(lt,Fb),e(lt,Ko),e(Ko,xb),e(Ko,Gd),e(Gd,Mb),e(Ko,zb),e(Ko,Hp),e(Hp,Cb),e(Ko,jb),e(lt,qb),E(gs,lt,null),e(lt,Pb),E(_s,lt,null),e(lt,Ab),E(vs,lt,null),v(o,of,k),v(o,Jo,k),e(Jo,ks),e(ks,Qp),E(ii,Qp,null),e(Jo,Ob),e(Jo,Vp),e(Vp,Lb),v(o,nf,k),v(o,Je,k),E(li,Je,null),e(Je,Nb),e(Je,Bp),e(Bp,Ib),e(Je,Db),e(Je,di),e(di,Sb),e(di,Xd),e(Xd,Wb),e(di,Ub),e(Je,Rb),e(Je,ci),e(ci,Hb),e(ci,pi),e(pi,Qb),e(ci,Vb),e(Je,Bb),E(Ts,Je,null),e(Je,Kb),e(Je,dt),E(hi,dt,null),e(dt,Jb),e(dt,Go),e(Go,Gb),e(Go,Yd),e(Yd,Xb),e(Go,Yb),e(Go,Kp),e(Kp,Zb),e(Go,ey),e(dt,ty),E(bs,dt,null),e(dt,oy),E(ys,dt,null),e(dt,ny),E(Es,dt,null),v(o,sf,k),v(o,Xo,k),e(Xo,ws),e(ws,Jp),E(mi,Jp,null),e(Xo,sy),e(Xo,Gp),e(Gp,ay),v(o,af,k),v(o,Ge,k),E(ui,Ge,null),e(Ge,ry),e(Ge,Xp),e(Xp,iy),e(Ge,ly),e(Ge,fi),e(fi,dy),e(fi,Zd),e(Zd,cy),e(fi,py),e(Ge,hy),e(Ge,gi),e(gi,my),e(gi,_i),e(_i,uy),e(gi,fy),e(Ge,gy),E($s,Ge,null),e(Ge,_y),e(Ge,jt),E(vi,jt,null),e(jt,vy),e(jt,Yo),e(Yo,ky),e(Yo,ec),e(ec,Ty),e(Yo,by),e(Yo,Yp),e(Yp,yy),e(Yo,Ey),e(jt,wy),E(Fs,jt,null),e(jt,$y),E(xs,jt,null),v(o,rf,k),v(o,Zo,k),e(Zo,Ms),e(Ms,Zp),E(ki,Zp,null),e(Zo,Fy),e(Zo,eh),e(eh,xy),v(o,lf,k),v(o,Ne,k),E(Ti,Ne,null),e(Ne,My),e(Ne,th),e(th,zy),e(Ne,Cy),e(Ne,oh),e(oh,jy),e(Ne,qy),e(Ne,bi),e(bi,Py),e(bi,tc),e(tc,Ay),e(bi,Oy),e(Ne,Ly),e(Ne,yi),e(yi,Ny),e(yi,Ei),e(Ei,Iy),e(yi,Dy),e(Ne,Sy),E(zs,Ne,null),e(Ne,Wy),e(Ne,ct),E(wi,ct,null),e(ct,Uy),e(ct,en),e(en,Ry),e(en,oc),e(oc,Hy),e(en,Qy),e(en,nh),e(nh,Vy),e(en,By),e(ct,Ky),E(Cs,ct,null),e(ct,Jy),E(js,ct,null),e(ct,Gy),E(qs,ct,null),v(o,df,k),v(o,tn,k),e(tn,Ps),e(Ps,sh),E($i,sh,null),e(tn,Xy),e(tn,ah),e(ah,Yy),v(o,cf,k),v(o,Xe,k),E(Fi,Xe,null),e(Xe,Zy),e(Xe,on),e(on,e1),e(on,rh),e(rh,t1),e(on,o1),e(on,ih),e(ih,n1),e(on,s1),e(Xe,a1),e(Xe,xi),e(xi,r1),e(xi,nc),e(nc,i1),e(xi,l1),e(Xe,d1),e(Xe,Mi),e(Mi,c1),e(Mi,zi),e(zi,p1),e(Mi,h1),e(Xe,m1),E(As,Xe,null),e(Xe,u1),e(Xe,pt),E(Ci,pt,null),e(pt,f1),e(pt,nn),e(nn,g1),e(nn,sc),e(sc,_1),e(nn,v1),e(nn,lh),e(lh,k1),e(nn,T1),e(pt,b1),E(Os,pt,null),e(pt,y1),E(Ls,pt,null),e(pt,E1),E(Ns,pt,null),v(o,pf,k),v(o,sn,k),e(sn,Is),e(Is,dh),E(ji,dh,null),e(sn,w1),e(sn,ch),e(ch,$1),v(o,hf,k),v(o,Ie,k),E(qi,Ie,null),e(Ie,F1),e(Ie,ph),e(ph,x1),e(Ie,M1),e(Ie,Pi),e(Pi,z1),e(Pi,ac),e(ac,C1),e(Pi,j1),e(Ie,q1),e(Ie,Ai),e(Ai,P1),e(Ai,Oi),e(Oi,A1),e(Ai,O1),e(Ie,L1),e(Ie,hh),e(hh,N1),e(Ie,I1),e(Ie,Kt),e(Kt,mh),e(mh,Li),e(Li,D1),e(Kt,S1),e(Kt,uh),e(uh,Ni),e(Ni,W1),e(Kt,U1),e(Kt,fh),e(fh,Ii),e(Ii,R1),e(Kt,H1),e(Kt,gh),e(gh,Di),e(Di,Q1),e(Ie,V1),e(Ie,qt),E(Si,qt,null),e(qt,B1),e(qt,an),e(an,K1),e(an,_h),e(_h,J1),e(an,G1),e(an,vh),e(vh,X1),e(an,Y1),e(qt,Z1),E(Ds,qt,null),e(qt,eE),E(Ss,qt,null),v(o,mf,k),v(o,rn,k),e(rn,Ws),e(Ws,kh),E(Wi,kh,null),e(rn,tE),e(rn,Th),e(Th,oE),v(o,uf,k),v(o,Pe,k),E(Ui,Pe,null),e(Pe,nE),e(Pe,bh),e(bh,sE),e(Pe,aE),e(Pe,yh),e(yh,rE),e(Pe,iE),e(Pe,Ri),e(Ri,lE),e(Ri,rc),e(rc,dE),e(Ri,cE),e(Pe,pE),e(Pe,Hi),e(Hi,hE),e(Hi,Qi),e(Qi,mE),e(Hi,uE),e(Pe,fE),e(Pe,Eh),e(Eh,gE),e(Pe,_E),e(Pe,Jt),e(Jt,wh),e(wh,Vi),e(Vi,vE),e(Jt,kE),e(Jt,$h),e($h,Bi),e(Bi,TE),e(Jt,bE),e(Jt,Fh),e(Fh,Ki),e(Ki,yE),e(Jt,EE),e(Jt,xh),e(xh,Ji),e(Ji,wE),e(Pe,$E),e(Pe,Pt),E(Gi,Pt,null),e(Pt,FE),e(Pt,ln),e(ln,xE),e(ln,Mh),e(Mh,ME),e(ln,zE),e(ln,zh),e(zh,CE),e(ln,jE),e(Pt,qE),E(Us,Pt,null),e(Pt,PE),E(Rs,Pt,null),v(o,ff,k),v(o,dn,k),e(dn,Hs),e(Hs,Ch),E(Xi,Ch,null),e(dn,AE),e(dn,jh),e(jh,OE),v(o,gf,k),v(o,De,k),E(Yi,De,null),e(De,LE),e(De,qh),e(qh,NE),e(De,IE),e(De,Zi),e(Zi,DE),e(Zi,ic),e(ic,SE),e(Zi,WE),e(De,UE),e(De,el),e(el,RE),e(el,tl),e(tl,HE),e(el,QE),e(De,VE),e(De,Ph),e(Ph,BE),e(De,KE),e(De,Gt),e(Gt,Ah),e(Ah,ol),e(ol,JE),e(Gt,GE),e(Gt,Oh),e(Oh,nl),e(nl,XE),e(Gt,YE),e(Gt,Lh),e(Lh,sl),e(sl,ZE),e(Gt,ew),e(Gt,Nh),e(Nh,al),e(al,tw),e(De,ow),e(De,At),E(rl,At,null),e(At,nw),e(At,cn),e(cn,sw),e(cn,Ih),e(Ih,aw),e(cn,rw),e(cn,Dh),e(Dh,iw),e(cn,lw),e(At,dw),E(Qs,At,null),e(At,cw),E(Vs,At,null),v(o,_f,k),v(o,pn,k),e(pn,Bs),e(Bs,Sh),E(il,Sh,null),e(pn,pw),e(pn,Wh),e(Wh,hw),v(o,vf,k),v(o,Se,k),E(ll,Se,null),e(Se,mw),e(Se,dl),e(dl,uw),e(dl,Uh),e(Uh,fw),e(dl,gw),e(Se,_w),e(Se,cl),e(cl,vw),e(cl,lc),e(lc,kw),e(cl,Tw),e(Se,bw),e(Se,pl),e(pl,yw),e(pl,hl),e(hl,Ew),e(pl,ww),e(Se,$w),e(Se,Rh),e(Rh,Fw),e(Se,xw),e(Se,Xt),e(Xt,Hh),e(Hh,ml),e(ml,Mw),e(Xt,zw),e(Xt,Qh),e(Qh,ul),e(ul,Cw),e(Xt,jw),e(Xt,Vh),e(Vh,fl),e(fl,qw),e(Xt,Pw),e(Xt,Bh),e(Bh,gl),e(gl,Aw),e(Se,Ow),e(Se,Ot),E(_l,Ot,null),e(Ot,Lw),e(Ot,hn),e(hn,Nw),e(hn,Kh),e(Kh,Iw),e(hn,Dw),e(hn,Jh),e(Jh,Sw),e(hn,Ww),e(Ot,Uw),E(Ks,Ot,null),e(Ot,Rw),E(Js,Ot,null),v(o,kf,k),v(o,mn,k),e(mn,Gs),e(Gs,Gh),E(vl,Gh,null),e(mn,Hw),e(mn,Xh),e(Xh,Qw),v(o,Tf,k),v(o,We,k),E(kl,We,null),e(We,Vw),e(We,Yh),e(Yh,Bw),e(We,Kw),e(We,Tl),e(Tl,Jw),e(Tl,dc),e(dc,Gw),e(Tl,Xw),e(We,Yw),e(We,bl),e(bl,Zw),e(bl,yl),e(yl,e$),e(bl,t$),e(We,o$),e(We,Zh),e(Zh,n$),e(We,s$),e(We,Yt),e(Yt,em),e(em,El),e(El,a$),e(Yt,r$),e(Yt,tm),e(tm,wl),e(wl,i$),e(Yt,l$),e(Yt,om),e(om,$l),e($l,d$),e(Yt,c$),e(Yt,nm),e(nm,Fl),e(Fl,p$),e(We,h$),e(We,Lt),E(xl,Lt,null),e(Lt,m$),e(Lt,un),e(un,u$),e(un,sm),e(sm,f$),e(un,g$),e(un,am),e(am,_$),e(un,v$),e(Lt,k$),E(Xs,Lt,null),e(Lt,T$),E(Ys,Lt,null),v(o,bf,k),v(o,fn,k),e(fn,Zs),e(Zs,rm),E(Ml,rm,null),e(fn,b$),e(fn,im),e(im,y$),v(o,yf,k),v(o,Ue,k),E(zl,Ue,null),e(Ue,E$),e(Ue,lm),e(lm,w$),e(Ue,$$),e(Ue,Cl),e(Cl,F$),e(Cl,cc),e(cc,x$),e(Cl,M$),e(Ue,z$),e(Ue,jl),e(jl,C$),e(jl,ql),e(ql,j$),e(jl,q$),e(Ue,P$),e(Ue,dm),e(dm,A$),e(Ue,O$),e(Ue,Zt),e(Zt,cm),e(cm,Pl),e(Pl,L$),e(Zt,N$),e(Zt,pm),e(pm,Al),e(Al,I$),e(Zt,D$),e(Zt,hm),e(hm,Ol),e(Ol,S$),e(Zt,W$),e(Zt,mm),e(mm,Ll),e(Ll,U$),e(Ue,R$),e(Ue,Nt),E(Nl,Nt,null),e(Nt,H$),e(Nt,gn),e(gn,Q$),e(gn,um),e(um,V$),e(gn,B$),e(gn,fm),e(fm,K$),e(gn,J$),e(Nt,G$),E(ea,Nt,null),e(Nt,X$),E(ta,Nt,null),v(o,Ef,k),v(o,_n,k),e(_n,oa),e(oa,gm),E(Il,gm,null),e(_n,Y$),e(_n,_m),e(_m,Z$),v(o,wf,k),v(o,Ae,k),E(Dl,Ae,null),e(Ae,eF),e(Ae,vm),e(vm,tF),e(Ae,oF),e(Ae,km),e(km,nF),e(Ae,sF),e(Ae,Sl),e(Sl,aF),e(Sl,pc),e(pc,rF),e(Sl,iF),e(Ae,lF),e(Ae,Wl),e(Wl,dF),e(Wl,Ul),e(Ul,cF),e(Wl,pF),e(Ae,hF),e(Ae,Tm),e(Tm,mF),e(Ae,uF),e(Ae,eo),e(eo,bm),e(bm,Rl),e(Rl,fF),e(eo,gF),e(eo,ym),e(ym,Hl),e(Hl,_F),e(eo,vF),e(eo,Em),e(Em,Ql),e(Ql,kF),e(eo,TF),e(eo,wm),e(wm,Vl),e(Vl,bF),e(Ae,yF),e(Ae,It),E(Bl,It,null),e(It,EF),e(It,vn),e(vn,wF),e(vn,$m),e($m,$F),e(vn,FF),e(vn,Fm),e(Fm,xF),e(vn,MF),e(It,zF),E(na,It,null),e(It,CF),E(sa,It,null),v(o,$f,k),v(o,kn,k),e(kn,aa),e(aa,xm),E(Kl,xm,null),e(kn,jF),e(kn,Mm),e(Mm,qF),v(o,Ff,k),v(o,Re,k),E(Jl,Re,null),e(Re,PF),e(Re,Tn),e(Tn,AF),e(Tn,zm),e(zm,OF),e(Tn,LF),e(Tn,Cm),e(Cm,NF),e(Tn,IF),e(Re,DF),e(Re,Gl),e(Gl,SF),e(Gl,hc),e(hc,WF),e(Gl,UF),e(Re,RF),e(Re,Xl),e(Xl,HF),e(Xl,Yl),e(Yl,QF),e(Xl,VF),e(Re,BF),e(Re,jm),e(jm,KF),e(Re,JF),e(Re,to),e(to,qm),e(qm,Zl),e(Zl,GF),e(to,XF),e(to,Pm),e(Pm,ed),e(ed,YF),e(to,ZF),e(to,Am),e(Am,td),e(td,e0),e(to,t0),e(to,Om),e(Om,od),e(od,o0),e(Re,n0),e(Re,Dt),E(nd,Dt,null),e(Dt,s0),e(Dt,bn),e(bn,a0),e(bn,Lm),e(Lm,r0),e(bn,i0),e(bn,Nm),e(Nm,l0),e(bn,d0),e(Dt,c0),E(ra,Dt,null),e(Dt,p0),E(ia,Dt,null),xf=!0},p(o,[k]){const sd={};k&2&&(sd.$$scope={dirty:k,ctx:o}),wn.$set(sd);const Im={};k&2&&(Im.$$scope={dirty:k,ctx:o}),jn.$set(Im);const Dm={};k&2&&(Dm.$$scope={dirty:k,ctx:o}),qn.$set(Dm);const Sm={};k&2&&(Sm.$$scope={dirty:k,ctx:o}),An.$set(Sm);const ad={};k&2&&(ad.$$scope={dirty:k,ctx:o}),On.$set(ad);const Wm={};k&2&&(Wm.$$scope={dirty:k,ctx:o}),Nn.$set(Wm);const Um={};k&2&&(Um.$$scope={dirty:k,ctx:o}),In.$set(Um);const Rm={};k&2&&(Rm.$$scope={dirty:k,ctx:o}),Sn.$set(Rm);const rd={};k&2&&(rd.$$scope={dirty:k,ctx:o}),Wn.$set(rd);const Hm={};k&2&&(Hm.$$scope={dirty:k,ctx:o}),Un.$set(Hm);const Qm={};k&2&&(Qm.$$scope={dirty:k,ctx:o}),Hn.$set(Qm);const Vm={};k&2&&(Vm.$$scope={dirty:k,ctx:o}),Qn.$set(Vm);const Bm={};k&2&&(Bm.$$scope={dirty:k,ctx:o}),Vn.$set(Bm);const Km={};k&2&&(Km.$$scope={dirty:k,ctx:o}),Bn.$set(Km);const id={};k&2&&(id.$$scope={dirty:k,ctx:o}),Kn.$set(id);const Jm={};k&2&&(Jm.$$scope={dirty:k,ctx:o}),Gn.$set(Jm);const oo={};k&2&&(oo.$$scope={dirty:k,ctx:o}),Xn.$set(oo);const Gm={};k&2&&(Gm.$$scope={dirty:k,ctx:o}),Zn.$set(Gm);const Xm={};k&2&&(Xm.$$scope={dirty:k,ctx:o}),es.$set(Xm);const Ym={};k&2&&(Ym.$$scope={dirty:k,ctx:o}),ts.$set(Ym);const yn={};k&2&&(yn.$$scope={dirty:k,ctx:o}),ns.$set(yn);const Zm={};k&2&&(Zm.$$scope={dirty:k,ctx:o}),ss.$set(Zm);const eu={};k&2&&(eu.$$scope={dirty:k,ctx:o}),as.$set(eu);const ld={};k&2&&(ld.$$scope={dirty:k,ctx:o}),is.$set(ld);const tu={};k&2&&(tu.$$scope={dirty:k,ctx:o}),ls.$set(tu);const ou={};k&2&&(ou.$$scope={dirty:k,ctx:o}),ds.$set(ou);const nu={};k&2&&(nu.$$scope={dirty:k,ctx:o}),ps.$set(nu);const no={};k&2&&(no.$$scope={dirty:k,ctx:o}),hs.$set(no);const so={};k&2&&(so.$$scope={dirty:k,ctx:o}),ms.$set(so);const su={};k&2&&(su.$$scope={dirty:k,ctx:o}),fs.$set(su);const au={};k&2&&(au.$$scope={dirty:k,ctx:o}),gs.$set(au);const ru={};k&2&&(ru.$$scope={dirty:k,ctx:o}),_s.$set(ru);const En={};k&2&&(En.$$scope={dirty:k,ctx:o}),vs.$set(En);const iu={};k&2&&(iu.$$scope={dirty:k,ctx:o}),Ts.$set(iu);const lu={};k&2&&(lu.$$scope={dirty:k,ctx:o}),bs.$set(lu);const dd={};k&2&&(dd.$$scope={dirty:k,ctx:o}),ys.$set(dd);const du={};k&2&&(du.$$scope={dirty:k,ctx:o}),Es.$set(du);const cu={};k&2&&(cu.$$scope={dirty:k,ctx:o}),$s.$set(cu);const pu={};k&2&&(pu.$$scope={dirty:k,ctx:o}),Fs.$set(pu);const ao={};k&2&&(ao.$$scope={dirty:k,ctx:o}),xs.$set(ao);const hu={};k&2&&(hu.$$scope={dirty:k,ctx:o}),zs.$set(hu);const la={};k&2&&(la.$$scope={dirty:k,ctx:o}),Cs.$set(la);const mu={};k&2&&(mu.$$scope={dirty:k,ctx:o}),js.$set(mu);const uu={};k&2&&(uu.$$scope={dirty:k,ctx:o}),qs.$set(uu);const cd={};k&2&&(cd.$$scope={dirty:k,ctx:o}),As.$set(cd);const fu={};k&2&&(fu.$$scope={dirty:k,ctx:o}),Os.$set(fu);const pd={};k&2&&(pd.$$scope={dirty:k,ctx:o}),Ls.$set(pd);const gu={};k&2&&(gu.$$scope={dirty:k,ctx:o}),Ns.$set(gu);const _u={};k&2&&(_u.$$scope={dirty:k,ctx:o}),Ds.$set(_u);const vu={};k&2&&(vu.$$scope={dirty:k,ctx:o}),Ss.$set(vu);const ro={};k&2&&(ro.$$scope={dirty:k,ctx:o}),Us.$set(ro);const hd={};k&2&&(hd.$$scope={dirty:k,ctx:o}),Rs.$set(hd);const ku={};k&2&&(ku.$$scope={dirty:k,ctx:o}),Qs.$set(ku);const da={};k&2&&(da.$$scope={dirty:k,ctx:o}),Vs.$set(da);const Tu={};k&2&&(Tu.$$scope={dirty:k,ctx:o}),Ks.$set(Tu);const bu={};k&2&&(bu.$$scope={dirty:k,ctx:o}),Js.$set(bu);const md={};k&2&&(md.$$scope={dirty:k,ctx:o}),Xs.$set(md);const yu={};k&2&&(yu.$$scope={dirty:k,ctx:o}),Ys.$set(yu);const ud={};k&2&&(ud.$$scope={dirty:k,ctx:o}),ea.$set(ud);const Eu={};k&2&&(Eu.$$scope={dirty:k,ctx:o}),ta.$set(Eu);const wu={};k&2&&(wu.$$scope={dirty:k,ctx:o}),na.$set(wu);const $u={};k&2&&($u.$$scope={dirty:k,ctx:o}),sa.$set($u);const fd={};k&2&&(fd.$$scope={dirty:k,ctx:o}),ra.$set(fd);const gd={};k&2&&(gd.$$scope={dirty:k,ctx:o}),ia.$set(gd)},i(o){xf||(w(l.$$.fragment,o),w(oe.$$.fragment,o),w(Pa.$$.fragment,o),w(Aa.$$.fragment,o),w(wn.$$.fragment,o),w(La.$$.fragment,o),w(Na.$$.fragment,o),w(Da.$$.fragment,o),w(Sa.$$.fragment,o),w(Ra.$$.fragment,o),w(Ha.$$.fragment,o),w(Va.$$.fragment,o),w(Ka.$$.fragment,o),w(Ja.$$.fragment,o),w(Za.$$.fragment,o),w(jn.$$.fragment,o),w(qn.$$.fragment,o),w(er.$$.fragment,o),w(tr.$$.fragment,o),w(ar.$$.fragment,o),w(An.$$.fragment,o),w(On.$$.fragment,o),w(rr.$$.fragment,o),w(ir.$$.fragment,o),w(hr.$$.fragment,o),w(Nn.$$.fragment,o),w(In.$$.fragment,o),w(mr.$$.fragment,o),w(ur.$$.fragment,o),w(vr.$$.fragment,o),w(Sn.$$.fragment,o),w(Wn.$$.fragment,o),w(Un.$$.fragment,o),w(kr.$$.fragment,o),w(Tr.$$.fragment,o),w(wr.$$.fragment,o),w(Hn.$$.fragment,o),w(Qn.$$.fragment,o),w(Vn.$$.fragment,o),w(Bn.$$.fragment,o),w(Kn.$$.fragment,o),w($r.$$.fragment,o),w(Fr.$$.fragment,o),w(Cr.$$.fragment,o),w(Gn.$$.fragment,o),w(Xn.$$.fragment,o),w(jr.$$.fragment,o),w(qr.$$.fragment,o),w(Lr.$$.fragment,o),w(Zn.$$.fragment,o),w(es.$$.fragment,o),w(ts.$$.fragment,o),w(Nr.$$.fragment,o),w(Ir.$$.fragment,o),w(Ur.$$.fragment,o),w(ns.$$.fragment,o),w(ss.$$.fragment,o),w(as.$$.fragment,o),w(Rr.$$.fragment,o),w(Hr.$$.fragment,o),w(is.$$.fragment,o),w(Kr.$$.fragment,o),w(ls.$$.fragment,o),w(ds.$$.fragment,o),w(Jr.$$.fragment,o),w(Gr.$$.fragment,o),w(ps.$$.fragment,o),w(ei.$$.fragment,o),w(hs.$$.fragment,o),w(ms.$$.fragment,o),w(ti.$$.fragment,o),w(oi.$$.fragment,o),w(fs.$$.fragment,o),w(ri.$$.fragment,o),w(gs.$$.fragment,o),w(_s.$$.fragment,o),w(vs.$$.fragment,o),w(ii.$$.fragment,o),w(li.$$.fragment,o),w(Ts.$$.fragment,o),w(hi.$$.fragment,o),w(bs.$$.fragment,o),w(ys.$$.fragment,o),w(Es.$$.fragment,o),w(mi.$$.fragment,o),w(ui.$$.fragment,o),w($s.$$.fragment,o),w(vi.$$.fragment,o),w(Fs.$$.fragment,o),w(xs.$$.fragment,o),w(ki.$$.fragment,o),w(Ti.$$.fragment,o),w(zs.$$.fragment,o),w(wi.$$.fragment,o),w(Cs.$$.fragment,o),w(js.$$.fragment,o),w(qs.$$.fragment,o),w($i.$$.fragment,o),w(Fi.$$.fragment,o),w(As.$$.fragment,o),w(Ci.$$.fragment,o),w(Os.$$.fragment,o),w(Ls.$$.fragment,o),w(Ns.$$.fragment,o),w(ji.$$.fragment,o),w(qi.$$.fragment,o),w(Si.$$.fragment,o),w(Ds.$$.fragment,o),w(Ss.$$.fragment,o),w(Wi.$$.fragment,o),w(Ui.$$.fragment,o),w(Gi.$$.fragment,o),w(Us.$$.fragment,o),w(Rs.$$.fragment,o),w(Xi.$$.fragment,o),w(Yi.$$.fragment,o),w(rl.$$.fragment,o),w(Qs.$$.fragment,o),w(Vs.$$.fragment,o),w(il.$$.fragment,o),w(ll.$$.fragment,o),w(_l.$$.fragment,o),w(Ks.$$.fragment,o),w(Js.$$.fragment,o),w(vl.$$.fragment,o),w(kl.$$.fragment,o),w(xl.$$.fragment,o),w(Xs.$$.fragment,o),w(Ys.$$.fragment,o),w(Ml.$$.fragment,o),w(zl.$$.fragment,o),w(Nl.$$.fragment,o),w(ea.$$.fragment,o),w(ta.$$.fragment,o),w(Il.$$.fragment,o),w(Dl.$$.fragment,o),w(Bl.$$.fragment,o),w(na.$$.fragment,o),w(sa.$$.fragment,o),w(Kl.$$.fragment,o),w(Jl.$$.fragment,o),w(nd.$$.fragment,o),w(ra.$$.fragment,o),w(ia.$$.fragment,o),xf=!0)},o(o){$(l.$$.fragment,o),$(oe.$$.fragment,o),$(Pa.$$.fragment,o),$(Aa.$$.fragment,o),$(wn.$$.fragment,o),$(La.$$.fragment,o),$(Na.$$.fragment,o),$(Da.$$.fragment,o),$(Sa.$$.fragment,o),$(Ra.$$.fragment,o),$(Ha.$$.fragment,o),$(Va.$$.fragment,o),$(Ka.$$.fragment,o),$(Ja.$$.fragment,o),$(Za.$$.fragment,o),$(jn.$$.fragment,o),$(qn.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(ar.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(rr.$$.fragment,o),$(ir.$$.fragment,o),$(hr.$$.fragment,o),$(Nn.$$.fragment,o),$(In.$$.fragment,o),$(mr.$$.fragment,o),$(ur.$$.fragment,o),$(vr.$$.fragment,o),$(Sn.$$.fragment,o),$(Wn.$$.fragment,o),$(Un.$$.fragment,o),$(kr.$$.fragment,o),$(Tr.$$.fragment,o),$(wr.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(Vn.$$.fragment,o),$(Bn.$$.fragment,o),$(Kn.$$.fragment,o),$($r.$$.fragment,o),$(Fr.$$.fragment,o),$(Cr.$$.fragment,o),$(Gn.$$.fragment,o),$(Xn.$$.fragment,o),$(jr.$$.fragment,o),$(qr.$$.fragment,o),$(Lr.$$.fragment,o),$(Zn.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(Nr.$$.fragment,o),$(Ir.$$.fragment,o),$(Ur.$$.fragment,o),$(ns.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(Rr.$$.fragment,o),$(Hr.$$.fragment,o),$(is.$$.fragment,o),$(Kr.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(Jr.$$.fragment,o),$(Gr.$$.fragment,o),$(ps.$$.fragment,o),$(ei.$$.fragment,o),$(hs.$$.fragment,o),$(ms.$$.fragment,o),$(ti.$$.fragment,o),$(oi.$$.fragment,o),$(fs.$$.fragment,o),$(ri.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(vs.$$.fragment,o),$(ii.$$.fragment,o),$(li.$$.fragment,o),$(Ts.$$.fragment,o),$(hi.$$.fragment,o),$(bs.$$.fragment,o),$(ys.$$.fragment,o),$(Es.$$.fragment,o),$(mi.$$.fragment,o),$(ui.$$.fragment,o),$($s.$$.fragment,o),$(vi.$$.fragment,o),$(Fs.$$.fragment,o),$(xs.$$.fragment,o),$(ki.$$.fragment,o),$(Ti.$$.fragment,o),$(zs.$$.fragment,o),$(wi.$$.fragment,o),$(Cs.$$.fragment,o),$(js.$$.fragment,o),$(qs.$$.fragment,o),$($i.$$.fragment,o),$(Fi.$$.fragment,o),$(As.$$.fragment,o),$(Ci.$$.fragment,o),$(Os.$$.fragment,o),$(Ls.$$.fragment,o),$(Ns.$$.fragment,o),$(ji.$$.fragment,o),$(qi.$$.fragment,o),$(Si.$$.fragment,o),$(Ds.$$.fragment,o),$(Ss.$$.fragment,o),$(Wi.$$.fragment,o),$(Ui.$$.fragment,o),$(Gi.$$.fragment,o),$(Us.$$.fragment,o),$(Rs.$$.fragment,o),$(Xi.$$.fragment,o),$(Yi.$$.fragment,o),$(rl.$$.fragment,o),$(Qs.$$.fragment,o),$(Vs.$$.fragment,o),$(il.$$.fragment,o),$(ll.$$.fragment,o),$(_l.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(vl.$$.fragment,o),$(kl.$$.fragment,o),$(xl.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(Ml.$$.fragment,o),$(zl.$$.fragment,o),$(Nl.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(Il.$$.fragment,o),$(Dl.$$.fragment,o),$(Bl.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(Kl.$$.fragment,o),$(Jl.$$.fragment,o),$(nd.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),xf=!1},d(o){t(d),o&&t(g),o&&t(h),F(l),o&&t(J),o&&t(C),F(oe),o&&t(pe),o&&t(K),o&&t(P),o&&t(ae),o&&t(he),o&&t(re),o&&t(me),o&&t(q),o&&t(U),o&&t(te),o&&t(xe),o&&t(be),o&&t(Me),o&&t(Z),F(Pa),o&&t(Fu),o&&t(yt),F(Aa),F(wn),o&&t(xu),o&&t(bo),F(La),o&&t(Mu),o&&t(Et),F(Na),o&&t(zu),o&&t(yo),F(Da),o&&t(Cu),o&&t(wt),F(Sa),o&&t(ju),o&&t(Eo),F(Ra),o&&t(qu),o&&t(wo),F(Ha),o&&t(Pu),o&&t($o),F(Va),o&&t(Au),o&&t(Fo),F(Ka),o&&t(Ou),o&&t(et),F(Ja),F(Za),F(jn),F(qn),o&&t(Lu),o&&t(Mo),F(er),o&&t(Nu),o&&t(Qe),F(tr),F(ar),F(An),F(On),o&&t(Iu),o&&t(Co),F(rr),o&&t(Du),o&&t(tt),F(ir),F(hr),F(Nn),F(In),o&&t(Su),o&&t(qo),F(mr),o&&t(Wu),o&&t(Ve),F(ur),F(vr),F(Sn),F(Wn),F(Un),o&&t(Uu),o&&t(Ao),F(kr),o&&t(Ru),o&&t(ot),F(Tr),F(wr),F(Hn),F(Qn),F(Vn),F(Bn),F(Kn),o&&t(Hu),o&&t(Lo),F($r),o&&t(Qu),o&&t(nt),F(Fr),F(Cr),F(Gn),F(Xn),o&&t(Vu),o&&t(Io),F(jr),o&&t(Bu),o&&t(Be),F(qr),F(Lr),F(Zn),F(es),F(ts),o&&t(Ku),o&&t(So),F(Nr),o&&t(Ju),o&&t(st),F(Ir),F(Ur),F(ns),F(ss),F(as),o&&t(Gu),o&&t(Ro),F(Rr),o&&t(Xu),o&&t(Ke),F(Hr),F(is),F(Kr),F(ls),F(ds),o&&t(Yu),o&&t(Qo),F(Jr),o&&t(Zu),o&&t(Oe),F(Gr),F(ps),F(ei),F(hs),F(ms),o&&t(ef),o&&t(Bo),F(ti),o&&t(tf),o&&t(Le),F(oi),F(fs),F(ri),F(gs),F(_s),F(vs),o&&t(of),o&&t(Jo),F(ii),o&&t(nf),o&&t(Je),F(li),F(Ts),F(hi),F(bs),F(ys),F(Es),o&&t(sf),o&&t(Xo),F(mi),o&&t(af),o&&t(Ge),F(ui),F($s),F(vi),F(Fs),F(xs),o&&t(rf),o&&t(Zo),F(ki),o&&t(lf),o&&t(Ne),F(Ti),F(zs),F(wi),F(Cs),F(js),F(qs),o&&t(df),o&&t(tn),F($i),o&&t(cf),o&&t(Xe),F(Fi),F(As),F(Ci),F(Os),F(Ls),F(Ns),o&&t(pf),o&&t(sn),F(ji),o&&t(hf),o&&t(Ie),F(qi),F(Si),F(Ds),F(Ss),o&&t(mf),o&&t(rn),F(Wi),o&&t(uf),o&&t(Pe),F(Ui),F(Gi),F(Us),F(Rs),o&&t(ff),o&&t(dn),F(Xi),o&&t(gf),o&&t(De),F(Yi),F(rl),F(Qs),F(Vs),o&&t(_f),o&&t(pn),F(il),o&&t(vf),o&&t(Se),F(ll),F(_l),F(Ks),F(Js),o&&t(kf),o&&t(mn),F(vl),o&&t(Tf),o&&t(We),F(kl),F(xl),F(Xs),F(Ys),o&&t(bf),o&&t(fn),F(Ml),o&&t(yf),o&&t(Ue),F(zl),F(Nl),F(ea),F(ta),o&&t(Ef),o&&t(_n),F(Il),o&&t(wf),o&&t(Ae),F(Dl),F(Bl),F(na),F(sa),o&&t($f),o&&t(kn),F(Kl),o&&t(Ff),o&&t(Re),F(Jl),F(nd),F(ra),F(ia)}}}const xj={local:"electra",sections:[{local:"overview",title:"Overview"},{local:"transformers.ElectraConfig",title:"ElectraConfig"},{local:"transformers.ElectraTokenizer",title:"ElectraTokenizer"},{local:"transformers.ElectraTokenizerFast",title:"ElectraTokenizerFast"},{local:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",title:"Electra specific outputs"},{local:"transformers.ElectraModel",title:"ElectraModel"},{local:"transformers.ElectraForPreTraining",title:"ElectraForPreTraining"},{local:"transformers.ElectraForCausalLM",title:"ElectraForCausalLM"},{local:"transformers.ElectraForMaskedLM",title:"ElectraForMaskedLM"},{local:"transformers.ElectraForSequenceClassification",title:"ElectraForSequenceClassification"},{local:"transformers.ElectraForMultipleChoice",title:"ElectraForMultipleChoice"},{local:"transformers.ElectraForTokenClassification",title:"ElectraForTokenClassification"},{local:"transformers.ElectraForQuestionAnswering",title:"ElectraForQuestionAnswering"},{local:"transformers.TFElectraModel",title:"TFElectraModel"},{local:"transformers.TFElectraForPreTraining",title:"TFElectraForPreTraining"},{local:"transformers.TFElectraForMaskedLM",title:"TFElectraForMaskedLM"},{local:"transformers.TFElectraForSequenceClassification",title:"TFElectraForSequenceClassification"},{local:"transformers.TFElectraForMultipleChoice",title:"TFElectraForMultipleChoice"},{local:"transformers.TFElectraForTokenClassification",title:"TFElectraForTokenClassification"},{local:"transformers.TFElectraForQuestionAnswering",title:"TFElectraForQuestionAnswering"},{local:"transformers.FlaxElectraModel",title:"FlaxElectraModel"},{local:"transformers.FlaxElectraForPreTraining",title:"FlaxElectraForPreTraining"},{local:"transformers.FlaxElectraForCausalLM",title:"FlaxElectraForCausalLM"},{local:"transformers.FlaxElectraForMaskedLM",title:"FlaxElectraForMaskedLM"},{local:"transformers.FlaxElectraForSequenceClassification",title:"FlaxElectraForSequenceClassification"},{local:"transformers.FlaxElectraForMultipleChoice",title:"FlaxElectraForMultipleChoice"},{local:"transformers.FlaxElectraForTokenClassification",title:"FlaxElectraForTokenClassification"},{local:"transformers.FlaxElectraForQuestionAnswering",title:"FlaxElectraForQuestionAnswering"}],title:"ELECTRA"};function Mj(x){return fC(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Oj extends pC{constructor(d){super();hC(this,d,Mj,Fj,mC,{})}}export{Oj as default,xj as metadata};
