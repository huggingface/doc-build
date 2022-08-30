import{S as Xc,i as Yc,s as eh,e as i,k as m,w as k,t as a,M as th,c as l,d as n,m as u,a as d,x as $,h as r,b as f,G as e,g as z,y as v,q as w,o as T,B as y,v as nh,L as D}from"../../chunks/vendor-hf-doc-builder.js";import{T as kt}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as B}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ee}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as I}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function oh(N){let s,g,c,h,b;return h=new B({props:{code:`from transformers import NezhaConfig, NezhaModel

# Initializing an Nezha configuration
configuration = NezhaConfig()

# Initializing a model from the Nezha-base style configuration model
model = NezhaModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> NezhaConfig, NezhaModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing an Nezha configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = NezhaConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the Nezha-base style configuration model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){s=i("p"),g=a("Example:"),c=m(),k(h.$$.fragment)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(n),c=u(o),$(h.$$.fragment,o)},m(o,p){z(o,s,p),e(s,g),z(o,c,p),v(h,o,p),b=!0},p:D,i(o){b||(w(h.$$.fragment,o),b=!0)},o(o){T(h.$$.fragment,o),b=!1},d(o){o&&n(s),o&&n(c),y(h,o)}}}function sh(N){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var M=d(c);h=r(M,"Module"),M.forEach(n),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(o,p){z(o,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(o){o&&n(s)}}}function ah(N){let s,g,c,h,b;return h=new B({props:{code:`from transformers import BertTokenizer, NezhaModel
import torch

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NezhaModel.from_pretrained("sijunhe/nezha-cn-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NezhaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaModel.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){s=i("p"),g=a("Example:"),c=m(),k(h.$$.fragment)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(n),c=u(o),$(h.$$.fragment,o)},m(o,p){z(o,s,p),e(s,g),z(o,c,p),v(h,o,p),b=!0},p:D,i(o){b||(w(h.$$.fragment,o),b=!0)},o(o){T(h.$$.fragment,o),b=!1},d(o){o&&n(s),o&&n(c),y(h,o)}}}function rh(N){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var M=d(c);h=r(M,"Module"),M.forEach(n),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(o,p){z(o,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(o){o&&n(s)}}}function ih(N){let s,g,c,h,b;return h=new B({props:{code:`from transformers import BertTokenizer, NezhaForPreTraining
import torch

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NezhaForPreTraining.from_pretrained("sijunhe/nezha-cn-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NezhaForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForPreTraining.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){s=i("p"),g=a("Example:"),c=m(),k(h.$$.fragment)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(n),c=u(o),$(h.$$.fragment,o)},m(o,p){z(o,s,p),e(s,g),z(o,c,p),v(h,o,p),b=!0},p:D,i(o){b||(w(h.$$.fragment,o),b=!0)},o(o){T(h.$$.fragment,o),b=!1},d(o){o&&n(s),o&&n(c),y(h,o)}}}function lh(N){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var M=d(c);h=r(M,"Module"),M.forEach(n),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(o,p){z(o,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(o){o&&n(s)}}}function dh(N){let s,g,c,h,b;return h=new B({props:{code:`from transformers import BertTokenizer, NezhaForMaskedLM
import torch

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NezhaForMaskedLM.from_pretrained("sijunhe/nezha-cn-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NezhaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){s=i("p"),g=a("Example:"),c=m(),k(h.$$.fragment)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(n),c=u(o),$(h.$$.fragment,o)},m(o,p){z(o,s,p),e(s,g),z(o,c,p),v(h,o,p),b=!0},p:D,i(o){b||(w(h.$$.fragment,o),b=!0)},o(o){T(h.$$.fragment,o),b=!1},d(o){o&&n(s),o&&n(c),y(h,o)}}}function ch(N){let s,g;return s=new B({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(s.$$.fragment)},l(c){$(s.$$.fragment,c)},m(c,h){v(s,c,h),g=!0},p:D,i(c){g||(w(s.$$.fragment,c),g=!0)},o(c){T(s.$$.fragment,c),g=!1},d(c){y(s,c)}}}function hh(N){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var M=d(c);h=r(M,"Module"),M.forEach(n),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(o,p){z(o,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(o){o&&n(s)}}}function ph(N){let s,g,c,h,b;return h=new B({props:{code:`from transformers import BertTokenizer, NezhaForNextSentencePrediction
import torch

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NezhaForNextSentencePrediction.from_pretrained("sijunhe/nezha-cn-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="pt")

outputs = model(**encoding, labels=torch.LongTensor([1]))
logits = outputs.logits
assert logits[0, 0] < logits[0, 1]  # next sentence was random`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NezhaForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){s=i("p"),g=a("Example:"),c=m(),k(h.$$.fragment)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(n),c=u(o),$(h.$$.fragment,o)},m(o,p){z(o,s,p),e(s,g),z(o,c,p),v(h,o,p),b=!0},p:D,i(o){b||(w(h.$$.fragment,o),b=!0)},o(o){T(h.$$.fragment,o),b=!1},d(o){o&&n(s),o&&n(c),y(h,o)}}}function mh(N){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var M=d(c);h=r(M,"Module"),M.forEach(n),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(o,p){z(o,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(o){o&&n(s)}}}function uh(N){let s,g,c,h,b;return h=new B({props:{code:`import torch
from transformers import BertTokenizer, NezhaForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NezhaForSequenceClassification.from_pretrained("sijunhe/nezha-cn-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NezhaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){s=i("p"),g=a("Example of single-label classification:"),c=m(),k(h.$$.fragment)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Example of single-label classification:"),p.forEach(n),c=u(o),$(h.$$.fragment,o)},m(o,p){z(o,s,p),e(s,g),z(o,c,p),v(h,o,p),b=!0},p:D,i(o){b||(w(h.$$.fragment,o),b=!0)},o(o){T(h.$$.fragment,o),b=!1},d(o){o&&n(s),o&&n(c),y(h,o)}}}function fh(N){let s,g;return s=new B({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = NezhaForSequenceClassification.from_pretrained("sijunhe/nezha-cn-base", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(s.$$.fragment)},l(c){$(s.$$.fragment,c)},m(c,h){v(s,c,h),g=!0},p:D,i(c){g||(w(s.$$.fragment,c),g=!0)},o(c){T(s.$$.fragment,c),g=!1},d(c){y(s,c)}}}function gh(N){let s,g,c,h,b;return h=new B({props:{code:`import torch
from transformers import BertTokenizer, NezhaForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NezhaForSequenceClassification.from_pretrained("sijunhe/nezha-cn-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NezhaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){s=i("p"),g=a("Example of multi-label classification:"),c=m(),k(h.$$.fragment)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Example of multi-label classification:"),p.forEach(n),c=u(o),$(h.$$.fragment,o)},m(o,p){z(o,s,p),e(s,g),z(o,c,p),v(h,o,p),b=!0},p:D,i(o){b||(w(h.$$.fragment,o),b=!0)},o(o){T(h.$$.fragment,o),b=!1},d(o){o&&n(s),o&&n(c),y(h,o)}}}function _h(N){let s,g;return s=new B({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = NezhaForSequenceClassification.from_pretrained(
    "sijunhe/nezha-cn-base", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(s.$$.fragment)},l(c){$(s.$$.fragment,c)},m(c,h){v(s,c,h),g=!0},p:D,i(c){g||(w(s.$$.fragment,c),g=!0)},o(c){T(s.$$.fragment,c),g=!1},d(c){y(s,c)}}}function bh(N){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var M=d(c);h=r(M,"Module"),M.forEach(n),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(o,p){z(o,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(o){o&&n(s)}}}function zh(N){let s,g,c,h,b;return h=new B({props:{code:`from transformers import BertTokenizer, NezhaForMultipleChoice
import torch

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NezhaForMultipleChoice.from_pretrained("sijunhe/nezha-cn-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NezhaForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){s=i("p"),g=a("Example:"),c=m(),k(h.$$.fragment)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(n),c=u(o),$(h.$$.fragment,o)},m(o,p){z(o,s,p),e(s,g),z(o,c,p),v(h,o,p),b=!0},p:D,i(o){b||(w(h.$$.fragment,o),b=!0)},o(o){T(h.$$.fragment,o),b=!1},d(o){o&&n(s),o&&n(c),y(h,o)}}}function kh(N){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var M=d(c);h=r(M,"Module"),M.forEach(n),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(o,p){z(o,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(o){o&&n(s)}}}function $h(N){let s,g,c,h,b;return h=new B({props:{code:`from transformers import BertTokenizer, NezhaForTokenClassification
import torch

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NezhaForTokenClassification.from_pretrained("sijunhe/nezha-cn-base")

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
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NezhaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

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
`}}),{c(){s=i("p"),g=a("Example:"),c=m(),k(h.$$.fragment)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(n),c=u(o),$(h.$$.fragment,o)},m(o,p){z(o,s,p),e(s,g),z(o,c,p),v(h,o,p),b=!0},p:D,i(o){b||(w(h.$$.fragment,o),b=!0)},o(o){T(h.$$.fragment,o),b=!1},d(o){o&&n(s),o&&n(c),y(h,o)}}}function vh(N){let s,g;return s=new B({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(s.$$.fragment)},l(c){$(s.$$.fragment,c)},m(c,h){v(s,c,h),g=!0},p:D,i(c){g||(w(s.$$.fragment,c),g=!0)},o(c){T(s.$$.fragment,c),g=!1},d(c){y(s,c)}}}function wh(N){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var M=d(c);h=r(M,"Module"),M.forEach(n),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(o,p){z(o,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(o){o&&n(s)}}}function Th(N){let s,g,c,h,b;return h=new B({props:{code:`from transformers import BertTokenizer, NezhaForQuestionAnswering
import torch

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NezhaForQuestionAnswering.from_pretrained("sijunhe/nezha-cn-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NezhaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){s=i("p"),g=a("Example:"),c=m(),k(h.$$.fragment)},l(o){s=l(o,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(n),c=u(o),$(h.$$.fragment,o)},m(o,p){z(o,s,p),e(s,g),z(o,c,p),v(h,o,p),b=!0},p:D,i(o){b||(w(h.$$.fragment,o),b=!0)},o(o){T(h.$$.fragment,o),b=!1},d(o){o&&n(s),o&&n(c),y(h,o)}}}function yh(N){let s,g;return s=new B({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(s.$$.fragment)},l(c){$(s.$$.fragment,c)},m(c,h){v(s,c,h),g=!0},p:D,i(c){g||(w(s.$$.fragment,c),g=!0)},o(c){T(s.$$.fragment,c),g=!1},d(c){y(s,c)}}}function Nh(N){let s,g,c,h,b,o,p,M,ua,_s,pe,Oe,co,$t,fa,ho,ga,bs,Se,_a,vt,ba,za,zs,Pn,ka,ks,Cn,po,$a,$s,te,va,wt,wa,Ta,Tt,ya,Na,vs,me,Le,mo,yt,Ma,uo,Fa,ws,Z,Nt,xa,ue,ja,qn,Pa,Ca,Mt,qa,Ea,Aa,fe,Oa,En,Sa,La,An,Ia,Da,Ba,Ie,Ts,ge,De,fo,Ft,Wa,go,Ha,ys,F,xt,Qa,_o,Ua,Va,jt,Ra,On,Za,Ja,Ka,Pt,Ga,Ct,Xa,Ya,er,qt,tr,Et,nr,or,sr,j,ar,bo,rr,ir,zo,lr,dr,ko,cr,hr,$o,pr,mr,vo,ur,fr,wo,gr,_r,br,J,At,zr,_e,kr,Sn,$r,vr,To,wr,Tr,yr,Be,Nr,We,Ns,be,He,yo,Ot,Mr,No,Fr,Ms,C,St,xr,ze,jr,Mo,Pr,Cr,Fo,qr,Er,Ar,Lt,Or,Ln,Sr,Lr,Ir,It,Dr,Dt,Br,Wr,Hr,K,Bt,Qr,ke,Ur,In,Vr,Rr,xo,Zr,Jr,Kr,Qe,Gr,Ue,Fs,$e,Ve,jo,Wt,Xr,Po,Yr,xs,q,Ht,ei,Qt,ti,Co,ni,oi,si,Ut,ai,Dn,ri,ii,li,Vt,di,Rt,ci,hi,pi,W,Zt,mi,ve,ui,Bn,fi,gi,qo,_i,bi,zi,Re,ki,Ze,$i,Je,js,we,Ke,Eo,Jt,vi,Ao,wi,Ps,E,Kt,Ti,Gt,yi,Oo,Ni,Mi,Fi,Xt,xi,Wn,ji,Pi,Ci,Yt,qi,en,Ei,Ai,Oi,G,tn,Si,Te,Li,Hn,Ii,Di,So,Bi,Wi,Hi,Ge,Qi,Xe,Cs,ye,Ye,Lo,nn,Ui,Io,Vi,qs,A,on,Ri,Do,Zi,Ji,sn,Ki,Qn,Gi,Xi,Yi,an,el,rn,tl,nl,ol,x,ln,sl,Ne,al,Un,rl,il,Bo,ll,dl,cl,et,hl,tt,pl,nt,ml,ot,ul,st,Es,Me,at,Wo,dn,fl,Ho,gl,As,O,cn,_l,Qo,bl,zl,hn,kl,Vn,$l,vl,wl,pn,Tl,mn,yl,Nl,Ml,X,un,Fl,Fe,xl,Rn,jl,Pl,Uo,Cl,ql,El,rt,Al,it,Os,xe,lt,Vo,fn,Ol,Ro,Sl,Ss,S,gn,Ll,Zo,Il,Dl,_n,Bl,Zn,Wl,Hl,Ql,bn,Ul,zn,Vl,Rl,Zl,H,kn,Jl,je,Kl,Jn,Gl,Xl,Jo,Yl,ed,td,dt,nd,ct,od,ht,Ls,Pe,pt,Ko,$n,sd,Go,ad,Is,L,vn,rd,Ce,id,Xo,ld,dd,Yo,cd,hd,pd,wn,md,Kn,ud,fd,gd,Tn,_d,yn,bd,zd,kd,Q,Nn,$d,qe,vd,Gn,wd,Td,es,yd,Nd,Md,mt,Fd,ut,xd,ft,Ds;return o=new ee({}),$t=new ee({}),yt=new ee({}),Nt=new P({props:{name:"class transformers.NezhaConfig",anchor:"transformers.NezhaConfig",parameters:[{name:"vocab_size",val:" = 21128"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"max_relative_position",val:" = 64"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"classifier_dropout",val:" = 0.1"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 3"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.NezhaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, optional, defaults to 21128) &#x2014;
Vocabulary size of the NEZHA model. Defines the different tokens that can be represented by the
<em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaModel">NezhaModel</a>.`,name:"vocab_size"},{anchor:"transformers.NezhaConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, optional, defaults to 128) &#x2014;
Dimensionality of vocabulary embeddings.`,name:"embedding_size"},{anchor:"transformers.NezhaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, optional, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.NezhaConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, optional, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.NezhaConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, optional, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.NezhaConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, optional, defaults to 3072) &#x2014;
The dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.NezhaConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, optional, defaults to &#x201C;gelu&#x201D;) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler.`,name:"hidden_act"},{anchor:"transformers.NezhaConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, optional, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.NezhaConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, optional, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.NezhaConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, optional, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
(e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.NezhaConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, optional, defaults to 2) &#x2014;
The vocabulary size of the <em>token_type_ids</em> passed into <a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaModel">NezhaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.NezhaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, optional, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.NezhaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.NezhaConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, optional, defaults to 0.1) &#x2014;
The dropout ratio for attached classifiers.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/configuration_nezha.py#L9"}}),Ie=new I({props:{anchor:"transformers.NezhaConfig.example",$$slots:{default:[oh]},$$scope:{ctx:N}}}),Ft=new ee({}),xt=new P({props:{name:"class transformers.NezhaModel",anchor:"transformers.NezhaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.NezhaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L868"}}),At=new P({props:{name:"forward",anchor:"transformers.NezhaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NezhaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NezhaModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NezhaModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NezhaModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NezhaModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NezhaModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NezhaModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NezhaModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.NezhaModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.NezhaModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.NezhaModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L907",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig"
>NezhaConfig</a>) and inputs.</p>
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
`}}),Be=new kt({props:{$$slots:{default:[sh]},$$scope:{ctx:N}}}),We=new I({props:{anchor:"transformers.NezhaModel.forward.example",$$slots:{default:[ah]},$$scope:{ctx:N}}}),Ot=new ee({}),St=new P({props:{name:"class transformers.NezhaForPreTraining",anchor:"transformers.NezhaForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1048"}}),Bt=new P({props:{name:"forward",anchor:"transformers.NezhaForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NezhaForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NezhaForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NezhaForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NezhaForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NezhaForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NezhaForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NezhaForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NezhaForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1064",returnDescription:`
<p>A <code>transformers.models.nezha.modeling_nezha.NezhaForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig"
>NezhaConfig</a>) and inputs.</p>
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
<p><code>transformers.models.nezha.modeling_nezha.NezhaForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qe=new kt({props:{$$slots:{default:[rh]},$$scope:{ctx:N}}}),Ue=new I({props:{anchor:"transformers.NezhaForPreTraining.forward.example",$$slots:{default:[ih]},$$scope:{ctx:N}}}),Wt=new ee({}),Ht=new P({props:{name:"class transformers.NezhaForMaskedLM",anchor:"transformers.NezhaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1148"}}),Zt=new P({props:{name:"forward",anchor:"transformers.NezhaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NezhaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NezhaForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NezhaForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NezhaForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NezhaForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NezhaForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NezhaForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NezhaForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1174",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig"
>NezhaConfig</a>) and inputs.</p>
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
`}}),Re=new kt({props:{$$slots:{default:[lh]},$$scope:{ctx:N}}}),Ze=new I({props:{anchor:"transformers.NezhaForMaskedLM.forward.example",$$slots:{default:[dh]},$$scope:{ctx:N}}}),Je=new I({props:{anchor:"transformers.NezhaForMaskedLM.forward.example-2",$$slots:{default:[ch]},$$scope:{ctx:N}}}),Jt=new ee({}),Kt=new P({props:{name:"class transformers.NezhaForNextSentencePrediction",anchor:"transformers.NezhaForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1257"}}),tn=new P({props:{name:"forward",anchor:"transformers.NezhaForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.NezhaForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1267",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig"
>NezhaConfig</a>) and inputs.</p>
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
`}}),Ge=new kt({props:{$$slots:{default:[hh]},$$scope:{ctx:N}}}),Xe=new I({props:{anchor:"transformers.NezhaForNextSentencePrediction.forward.example",$$slots:{default:[ph]},$$scope:{ctx:N}}}),nn=new ee({}),on=new P({props:{name:"class transformers.NezhaForSequenceClassification",anchor:"transformers.NezhaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1360"}}),ln=new P({props:{name:"forward",anchor:"transformers.NezhaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NezhaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NezhaForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NezhaForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NezhaForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NezhaForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NezhaForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NezhaForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NezhaForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1376",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig"
>NezhaConfig</a>) and inputs.</p>
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
`}}),et=new kt({props:{$$slots:{default:[mh]},$$scope:{ctx:N}}}),tt=new I({props:{anchor:"transformers.NezhaForSequenceClassification.forward.example",$$slots:{default:[uh]},$$scope:{ctx:N}}}),nt=new I({props:{anchor:"transformers.NezhaForSequenceClassification.forward.example-2",$$slots:{default:[fh]},$$scope:{ctx:N}}}),ot=new I({props:{anchor:"transformers.NezhaForSequenceClassification.forward.example-3",$$slots:{default:[gh]},$$scope:{ctx:N}}}),st=new I({props:{anchor:"transformers.NezhaForSequenceClassification.forward.example-4",$$slots:{default:[_h]},$$scope:{ctx:N}}}),dn=new ee({}),cn=new P({props:{name:"class transformers.NezhaForMultipleChoice",anchor:"transformers.NezhaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1460"}}),un=new P({props:{name:"forward",anchor:"transformers.NezhaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NezhaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NezhaForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NezhaForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NezhaForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NezhaForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NezhaForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NezhaForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NezhaForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1474",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig"
>NezhaConfig</a>) and inputs.</p>
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
`}}),rt=new kt({props:{$$slots:{default:[bh]},$$scope:{ctx:N}}}),it=new I({props:{anchor:"transformers.NezhaForMultipleChoice.forward.example",$$slots:{default:[zh]},$$scope:{ctx:N}}}),fn=new ee({}),gn=new P({props:{name:"class transformers.NezhaForTokenClassification",anchor:"transformers.NezhaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1553"}}),kn=new P({props:{name:"forward",anchor:"transformers.NezhaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NezhaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NezhaForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NezhaForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NezhaForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NezhaForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NezhaForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NezhaForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NezhaForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1571",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig"
>NezhaConfig</a>) and inputs.</p>
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
`}}),dt=new kt({props:{$$slots:{default:[kh]},$$scope:{ctx:N}}}),ct=new I({props:{anchor:"transformers.NezhaForTokenClassification.forward.example",$$slots:{default:[$h]},$$scope:{ctx:N}}}),ht=new I({props:{anchor:"transformers.NezhaForTokenClassification.forward.example-2",$$slots:{default:[vh]},$$scope:{ctx:N}}}),$n=new ee({}),vn=new P({props:{name:"class transformers.NezhaForQuestionAnswering",anchor:"transformers.NezhaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1636"}}),Nn=new P({props:{name:"forward",anchor:"transformers.NezhaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NezhaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NezhaForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NezhaForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NezhaForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NezhaForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NezhaForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NezhaForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NezhaForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.NezhaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/nezha/modeling_nezha.py#L1650",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/nezha#transformers.NezhaConfig"
>NezhaConfig</a>) and inputs.</p>
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
`}}),mt=new kt({props:{$$slots:{default:[wh]},$$scope:{ctx:N}}}),ut=new I({props:{anchor:"transformers.NezhaForQuestionAnswering.forward.example",$$slots:{default:[Th]},$$scope:{ctx:N}}}),ft=new I({props:{anchor:"transformers.NezhaForQuestionAnswering.forward.example-2",$$slots:{default:[yh]},$$scope:{ctx:N}}}),{c(){s=i("meta"),g=m(),c=i("h1"),h=i("a"),b=i("span"),k(o.$$.fragment),p=m(),M=i("span"),ua=a("Nezha"),_s=m(),pe=i("h2"),Oe=i("a"),co=i("span"),k($t.$$.fragment),fa=m(),ho=i("span"),ga=a("Overview"),bs=m(),Se=i("p"),_a=a("The Nezha model was proposed in "),vt=i("a"),ba=a("NEZHA: Neural Contextualized Representation for Chinese Language Understanding"),za=a(" by Junqiu Wei et al."),zs=m(),Pn=i("p"),ka=a("The abstract from the paper is the following:"),ks=m(),Cn=i("p"),po=i("em"),$a=a(`The pre-trained language models have achieved great successes in various natural language understanding (NLU) tasks
due to its capacity to capture the deep contextualized information in text by pre-training on large-scale corpora.
In this technical report, we present our practice of pre-training language models named NEZHA (NEural contextualiZed
representation for CHinese lAnguage understanding) on Chinese corpora and finetuning for the Chinese NLU tasks.
The current version of NEZHA is based on BERT with a collection of proven improvements, which include Functional
Relative Positional Encoding as an effective positional encoding scheme, Whole Word Masking strategy,
Mixed Precision Training and the LAMB Optimizer in training the models. The experimental results show that NEZHA
achieves the state-of-the-art performances when finetuned on several representative Chinese tasks, including
named entity recognition (People\u2019s Daily NER), sentence matching (LCQMC), Chinese sentiment classification (ChnSenti)
and natural language inference (XNLI).`),$s=m(),te=i("p"),va=a("This model was contributed by "),wt=i("a"),wa=a("sijunhe"),Ta=a(". The original code can be found "),Tt=i("a"),ya=a("here"),Na=a("."),vs=m(),me=i("h2"),Le=i("a"),mo=i("span"),k(yt.$$.fragment),Ma=m(),uo=i("span"),Fa=a("NezhaConfig"),ws=m(),Z=i("div"),k(Nt.$$.fragment),xa=m(),ue=i("p"),ja=a("This is the configuration class to store the configuration of an "),qn=i("a"),Pa=a("NezhaModel"),Ca=a(`. It is used to instantiate an Nezha
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Nezha
`),Mt=i("a"),qa=a("sijunhe/nezha-cn-base"),Ea=a(" architecture."),Aa=m(),fe=i("p"),Oa=a("Configuration objects inherit from "),En=i("a"),Sa=a("PretrainedConfig"),La=a(` and can be used to control the model outputs. Read the
documentation from `),An=i("a"),Ia=a("PretrainedConfig"),Da=a(" for more information."),Ba=m(),k(Ie.$$.fragment),Ts=m(),ge=i("h2"),De=i("a"),fo=i("span"),k(Ft.$$.fragment),Wa=m(),go=i("span"),Ha=a("NezhaModel"),ys=m(),F=i("div"),k(xt.$$.fragment),Qa=m(),_o=i("p"),Ua=a("The bare Nezha Model transformer outputting raw hidden-states without any specific head on top."),Va=m(),jt=i("p"),Ra=a("This model inherits from "),On=i("a"),Za=a("PreTrainedModel"),Ja=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ka=m(),Pt=i("p"),Ga=a("This model is also a PyTorch "),Ct=i("a"),Xa=a("torch.nn.Module"),Ya=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),er=m(),qt=i("p"),tr=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Et=i("a"),nr=a(`Attention is
all you need`),or=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),sr=m(),j=i("p"),ar=a("To behave as an decoder the model needs to be initialized with the "),bo=i("code"),rr=a("is_decoder"),ir=a(` argument of the configuration set
to `),zo=i("code"),lr=a("True"),dr=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),ko=i("code"),cr=a("is_decoder"),hr=a(` argument and
`),$o=i("code"),pr=a("add_cross_attention"),mr=a(" set to "),vo=i("code"),ur=a("True"),fr=a("; an "),wo=i("code"),gr=a("encoder_hidden_states"),_r=a(" is then expected as an input to the forward pass."),br=m(),J=i("div"),k(At.$$.fragment),zr=m(),_e=i("p"),kr=a("The "),Sn=i("a"),$r=a("NezhaModel"),vr=a(" forward method, overrides the "),To=i("code"),wr=a("__call__"),Tr=a(" special method."),yr=m(),k(Be.$$.fragment),Nr=m(),k(We.$$.fragment),Ns=m(),be=i("h2"),He=i("a"),yo=i("span"),k(Ot.$$.fragment),Mr=m(),No=i("span"),Fr=a("NezhaForPreTraining"),Ms=m(),C=i("div"),k(St.$$.fragment),xr=m(),ze=i("p"),jr=a("Nezha Model with two heads on top as done during the pretraining: a "),Mo=i("code"),Pr=a("masked language modeling"),Cr=a(" head and a "),Fo=i("code"),qr=a("next sentence prediction (classification)"),Er=a(" head."),Ar=m(),Lt=i("p"),Or=a("This model inherits from "),Ln=i("a"),Sr=a("PreTrainedModel"),Lr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ir=m(),It=i("p"),Dr=a("This model is also a PyTorch "),Dt=i("a"),Br=a("torch.nn.Module"),Wr=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hr=m(),K=i("div"),k(Bt.$$.fragment),Qr=m(),ke=i("p"),Ur=a("The "),In=i("a"),Vr=a("NezhaForPreTraining"),Rr=a(" forward method, overrides the "),xo=i("code"),Zr=a("__call__"),Jr=a(" special method."),Kr=m(),k(Qe.$$.fragment),Gr=m(),k(Ue.$$.fragment),Fs=m(),$e=i("h2"),Ve=i("a"),jo=i("span"),k(Wt.$$.fragment),Xr=m(),Po=i("span"),Yr=a("NezhaForMaskedLM"),xs=m(),q=i("div"),k(Ht.$$.fragment),ei=m(),Qt=i("p"),ti=a("Nezha Model with a "),Co=i("code"),ni=a("language modeling"),oi=a(" head on top."),si=m(),Ut=i("p"),ai=a("This model inherits from "),Dn=i("a"),ri=a("PreTrainedModel"),ii=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),li=m(),Vt=i("p"),di=a("This model is also a PyTorch "),Rt=i("a"),ci=a("torch.nn.Module"),hi=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pi=m(),W=i("div"),k(Zt.$$.fragment),mi=m(),ve=i("p"),ui=a("The "),Bn=i("a"),fi=a("NezhaForMaskedLM"),gi=a(" forward method, overrides the "),qo=i("code"),_i=a("__call__"),bi=a(" special method."),zi=m(),k(Re.$$.fragment),ki=m(),k(Ze.$$.fragment),$i=m(),k(Je.$$.fragment),js=m(),we=i("h2"),Ke=i("a"),Eo=i("span"),k(Jt.$$.fragment),vi=m(),Ao=i("span"),wi=a("NezhaForNextSentencePrediction"),Ps=m(),E=i("div"),k(Kt.$$.fragment),Ti=m(),Gt=i("p"),yi=a("Nezha Model with a "),Oo=i("code"),Ni=a("next sentence prediction (classification)"),Mi=a(" head on top."),Fi=m(),Xt=i("p"),xi=a("This model inherits from "),Wn=i("a"),ji=a("PreTrainedModel"),Pi=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ci=m(),Yt=i("p"),qi=a("This model is also a PyTorch "),en=i("a"),Ei=a("torch.nn.Module"),Ai=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Oi=m(),G=i("div"),k(tn.$$.fragment),Si=m(),Te=i("p"),Li=a("The "),Hn=i("a"),Ii=a("NezhaForNextSentencePrediction"),Di=a(" forward method, overrides the "),So=i("code"),Bi=a("__call__"),Wi=a(" special method."),Hi=m(),k(Ge.$$.fragment),Qi=m(),k(Xe.$$.fragment),Cs=m(),ye=i("h2"),Ye=i("a"),Lo=i("span"),k(nn.$$.fragment),Ui=m(),Io=i("span"),Vi=a("NezhaForSequenceClassification"),qs=m(),A=i("div"),k(on.$$.fragment),Ri=m(),Do=i("p"),Zi=a(`Nezha Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Ji=m(),sn=i("p"),Ki=a("This model inherits from "),Qn=i("a"),Gi=a("PreTrainedModel"),Xi=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yi=m(),an=i("p"),el=a("This model is also a PyTorch "),rn=i("a"),tl=a("torch.nn.Module"),nl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ol=m(),x=i("div"),k(ln.$$.fragment),sl=m(),Ne=i("p"),al=a("The "),Un=i("a"),rl=a("NezhaForSequenceClassification"),il=a(" forward method, overrides the "),Bo=i("code"),ll=a("__call__"),dl=a(" special method."),cl=m(),k(et.$$.fragment),hl=m(),k(tt.$$.fragment),pl=m(),k(nt.$$.fragment),ml=m(),k(ot.$$.fragment),ul=m(),k(st.$$.fragment),Es=m(),Me=i("h2"),at=i("a"),Wo=i("span"),k(dn.$$.fragment),fl=m(),Ho=i("span"),gl=a("NezhaForMultipleChoice"),As=m(),O=i("div"),k(cn.$$.fragment),_l=m(),Qo=i("p"),bl=a(`Nezha Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),zl=m(),hn=i("p"),kl=a("This model inherits from "),Vn=i("a"),$l=a("PreTrainedModel"),vl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wl=m(),pn=i("p"),Tl=a("This model is also a PyTorch "),mn=i("a"),yl=a("torch.nn.Module"),Nl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ml=m(),X=i("div"),k(un.$$.fragment),Fl=m(),Fe=i("p"),xl=a("The "),Rn=i("a"),jl=a("NezhaForMultipleChoice"),Pl=a(" forward method, overrides the "),Uo=i("code"),Cl=a("__call__"),ql=a(" special method."),El=m(),k(rt.$$.fragment),Al=m(),k(it.$$.fragment),Os=m(),xe=i("h2"),lt=i("a"),Vo=i("span"),k(fn.$$.fragment),Ol=m(),Ro=i("span"),Sl=a("NezhaForTokenClassification"),Ss=m(),S=i("div"),k(gn.$$.fragment),Ll=m(),Zo=i("p"),Il=a(`Nezha Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Dl=m(),_n=i("p"),Bl=a("This model inherits from "),Zn=i("a"),Wl=a("PreTrainedModel"),Hl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ql=m(),bn=i("p"),Ul=a("This model is also a PyTorch "),zn=i("a"),Vl=a("torch.nn.Module"),Rl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zl=m(),H=i("div"),k(kn.$$.fragment),Jl=m(),je=i("p"),Kl=a("The "),Jn=i("a"),Gl=a("NezhaForTokenClassification"),Xl=a(" forward method, overrides the "),Jo=i("code"),Yl=a("__call__"),ed=a(" special method."),td=m(),k(dt.$$.fragment),nd=m(),k(ct.$$.fragment),od=m(),k(ht.$$.fragment),Ls=m(),Pe=i("h2"),pt=i("a"),Ko=i("span"),k($n.$$.fragment),sd=m(),Go=i("span"),ad=a("NezhaForQuestionAnswering"),Is=m(),L=i("div"),k(vn.$$.fragment),rd=m(),Ce=i("p"),id=a(`Nezha Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Xo=i("code"),ld=a("span start logits"),dd=a(" and "),Yo=i("code"),cd=a("span end logits"),hd=a(")."),pd=m(),wn=i("p"),md=a("This model inherits from "),Kn=i("a"),ud=a("PreTrainedModel"),fd=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd=m(),Tn=i("p"),_d=a("This model is also a PyTorch "),yn=i("a"),bd=a("torch.nn.Module"),zd=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kd=m(),Q=i("div"),k(Nn.$$.fragment),$d=m(),qe=i("p"),vd=a("The "),Gn=i("a"),wd=a("NezhaForQuestionAnswering"),Td=a(" forward method, overrides the "),es=i("code"),yd=a("__call__"),Nd=a(" special method."),Md=m(),k(mt.$$.fragment),Fd=m(),k(ut.$$.fragment),xd=m(),k(ft.$$.fragment),this.h()},l(t){const _=th('[data-svelte="svelte-1phssyn"]',document.head);s=l(_,"META",{name:!0,content:!0}),_.forEach(n),g=u(t),c=l(t,"H1",{class:!0});var Mn=d(c);h=l(Mn,"A",{id:!0,class:!0,href:!0});var ts=d(h);b=l(ts,"SPAN",{});var ns=d(b);$(o.$$.fragment,ns),ns.forEach(n),ts.forEach(n),p=u(Mn),M=l(Mn,"SPAN",{});var os=d(M);ua=r(os,"Nezha"),os.forEach(n),Mn.forEach(n),_s=u(t),pe=l(t,"H2",{class:!0});var Fn=d(pe);Oe=l(Fn,"A",{id:!0,class:!0,href:!0});var ss=d(Oe);co=l(ss,"SPAN",{});var as=d(co);$($t.$$.fragment,as),as.forEach(n),ss.forEach(n),fa=u(Fn),ho=l(Fn,"SPAN",{});var rs=d(ho);ga=r(rs,"Overview"),rs.forEach(n),Fn.forEach(n),bs=u(t),Se=l(t,"P",{});var xn=d(Se);_a=r(xn,"The Nezha model was proposed in "),vt=l(xn,"A",{href:!0,rel:!0});var is=d(vt);ba=r(is,"NEZHA: Neural Contextualized Representation for Chinese Language Understanding"),is.forEach(n),za=r(xn," by Junqiu Wei et al."),xn.forEach(n),zs=u(t),Pn=l(t,"P",{});var ls=d(Pn);ka=r(ls,"The abstract from the paper is the following:"),ls.forEach(n),ks=u(t),Cn=l(t,"P",{});var ds=d(Cn);po=l(ds,"EM",{});var cs=d(po);$a=r(cs,`The pre-trained language models have achieved great successes in various natural language understanding (NLU) tasks
due to its capacity to capture the deep contextualized information in text by pre-training on large-scale corpora.
In this technical report, we present our practice of pre-training language models named NEZHA (NEural contextualiZed
representation for CHinese lAnguage understanding) on Chinese corpora and finetuning for the Chinese NLU tasks.
The current version of NEZHA is based on BERT with a collection of proven improvements, which include Functional
Relative Positional Encoding as an effective positional encoding scheme, Whole Word Masking strategy,
Mixed Precision Training and the LAMB Optimizer in training the models. The experimental results show that NEZHA
achieves the state-of-the-art performances when finetuned on several representative Chinese tasks, including
named entity recognition (People\u2019s Daily NER), sentence matching (LCQMC), Chinese sentiment classification (ChnSenti)
and natural language inference (XNLI).`),cs.forEach(n),ds.forEach(n),$s=u(t),te=l(t,"P",{});var Ee=d(te);va=r(Ee,"This model was contributed by "),wt=l(Ee,"A",{href:!0,rel:!0});var hs=d(wt);wa=r(hs,"sijunhe"),hs.forEach(n),Ta=r(Ee,". The original code can be found "),Tt=l(Ee,"A",{href:!0,rel:!0});var ps=d(Tt);ya=r(ps,"here"),ps.forEach(n),Na=r(Ee,"."),Ee.forEach(n),vs=u(t),me=l(t,"H2",{class:!0});var jn=d(me);Le=l(jn,"A",{id:!0,class:!0,href:!0});var ms=d(Le);mo=l(ms,"SPAN",{});var us=d(mo);$(yt.$$.fragment,us),us.forEach(n),ms.forEach(n),Ma=u(jn),uo=l(jn,"SPAN",{});var fs=d(uo);Fa=r(fs,"NezhaConfig"),fs.forEach(n),jn.forEach(n),ws=u(t),Z=l(t,"DIV",{class:!0});var Y=d(Z);$(Nt.$$.fragment,Y),xa=u(Y),ue=l(Y,"P",{});var Ae=d(ue);ja=r(Ae,"This is the configuration class to store the configuration of an "),qn=l(Ae,"A",{href:!0});var gs=d(qn);Pa=r(gs,"NezhaModel"),gs.forEach(n),Ca=r(Ae,`. It is used to instantiate an Nezha
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Nezha
`),Mt=l(Ae,"A",{href:!0,rel:!0});var jd=d(Mt);qa=r(jd,"sijunhe/nezha-cn-base"),jd.forEach(n),Ea=r(Ae," architecture."),Ae.forEach(n),Aa=u(Y),fe=l(Y,"P",{});var Xn=d(fe);Oa=r(Xn,"Configuration objects inherit from "),En=l(Xn,"A",{href:!0});var Pd=d(En);Sa=r(Pd,"PretrainedConfig"),Pd.forEach(n),La=r(Xn,` and can be used to control the model outputs. Read the
documentation from `),An=l(Xn,"A",{href:!0});var Cd=d(An);Ia=r(Cd,"PretrainedConfig"),Cd.forEach(n),Da=r(Xn," for more information."),Xn.forEach(n),Ba=u(Y),$(Ie.$$.fragment,Y),Y.forEach(n),Ts=u(t),ge=l(t,"H2",{class:!0});var Bs=d(ge);De=l(Bs,"A",{id:!0,class:!0,href:!0});var qd=d(De);fo=l(qd,"SPAN",{});var Ed=d(fo);$(Ft.$$.fragment,Ed),Ed.forEach(n),qd.forEach(n),Wa=u(Bs),go=l(Bs,"SPAN",{});var Ad=d(go);Ha=r(Ad,"NezhaModel"),Ad.forEach(n),Bs.forEach(n),ys=u(t),F=l(t,"DIV",{class:!0});var U=d(F);$(xt.$$.fragment,U),Qa=u(U),_o=l(U,"P",{});var Od=d(_o);Ua=r(Od,"The bare Nezha Model transformer outputting raw hidden-states without any specific head on top."),Od.forEach(n),Va=u(U),jt=l(U,"P",{});var Ws=d(jt);Ra=r(Ws,"This model inherits from "),On=l(Ws,"A",{href:!0});var Sd=d(On);Za=r(Sd,"PreTrainedModel"),Sd.forEach(n),Ja=r(Ws,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ws.forEach(n),Ka=u(U),Pt=l(U,"P",{});var Hs=d(Pt);Ga=r(Hs,"This model is also a PyTorch "),Ct=l(Hs,"A",{href:!0,rel:!0});var Ld=d(Ct);Xa=r(Ld,"torch.nn.Module"),Ld.forEach(n),Ya=r(Hs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hs.forEach(n),er=u(U),qt=l(U,"P",{});var Qs=d(qt);tr=r(Qs,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Et=l(Qs,"A",{href:!0,rel:!0});var Id=d(Et);nr=r(Id,`Attention is
all you need`),Id.forEach(n),or=r(Qs,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Qs.forEach(n),sr=u(U),j=l(U,"P",{});var V=d(j);ar=r(V,"To behave as an decoder the model needs to be initialized with the "),bo=l(V,"CODE",{});var Dd=d(bo);rr=r(Dd,"is_decoder"),Dd.forEach(n),ir=r(V,` argument of the configuration set
to `),zo=l(V,"CODE",{});var Bd=d(zo);lr=r(Bd,"True"),Bd.forEach(n),dr=r(V,". To be used in a Seq2Seq model, the model needs to initialized with both "),ko=l(V,"CODE",{});var Wd=d(ko);cr=r(Wd,"is_decoder"),Wd.forEach(n),hr=r(V,` argument and
`),$o=l(V,"CODE",{});var Hd=d($o);pr=r(Hd,"add_cross_attention"),Hd.forEach(n),mr=r(V," set to "),vo=l(V,"CODE",{});var Qd=d(vo);ur=r(Qd,"True"),Qd.forEach(n),fr=r(V,"; an "),wo=l(V,"CODE",{});var Ud=d(wo);gr=r(Ud,"encoder_hidden_states"),Ud.forEach(n),_r=r(V," is then expected as an input to the forward pass."),V.forEach(n),br=u(U),J=l(U,"DIV",{class:!0});var gt=d(J);$(At.$$.fragment,gt),zr=u(gt),_e=l(gt,"P",{});var Yn=d(_e);kr=r(Yn,"The "),Sn=l(Yn,"A",{href:!0});var Vd=d(Sn);$r=r(Vd,"NezhaModel"),Vd.forEach(n),vr=r(Yn," forward method, overrides the "),To=l(Yn,"CODE",{});var Rd=d(To);wr=r(Rd,"__call__"),Rd.forEach(n),Tr=r(Yn," special method."),Yn.forEach(n),yr=u(gt),$(Be.$$.fragment,gt),Nr=u(gt),$(We.$$.fragment,gt),gt.forEach(n),U.forEach(n),Ns=u(t),be=l(t,"H2",{class:!0});var Us=d(be);He=l(Us,"A",{id:!0,class:!0,href:!0});var Zd=d(He);yo=l(Zd,"SPAN",{});var Jd=d(yo);$(Ot.$$.fragment,Jd),Jd.forEach(n),Zd.forEach(n),Mr=u(Us),No=l(Us,"SPAN",{});var Kd=d(No);Fr=r(Kd,"NezhaForPreTraining"),Kd.forEach(n),Us.forEach(n),Ms=u(t),C=l(t,"DIV",{class:!0});var ne=d(C);$(St.$$.fragment,ne),xr=u(ne),ze=l(ne,"P",{});var eo=d(ze);jr=r(eo,"Nezha Model with two heads on top as done during the pretraining: a "),Mo=l(eo,"CODE",{});var Gd=d(Mo);Pr=r(Gd,"masked language modeling"),Gd.forEach(n),Cr=r(eo," head and a "),Fo=l(eo,"CODE",{});var Xd=d(Fo);qr=r(Xd,"next sentence prediction (classification)"),Xd.forEach(n),Er=r(eo," head."),eo.forEach(n),Ar=u(ne),Lt=l(ne,"P",{});var Vs=d(Lt);Or=r(Vs,"This model inherits from "),Ln=l(Vs,"A",{href:!0});var Yd=d(Ln);Sr=r(Yd,"PreTrainedModel"),Yd.forEach(n),Lr=r(Vs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vs.forEach(n),Ir=u(ne),It=l(ne,"P",{});var Rs=d(It);Dr=r(Rs,"This model is also a PyTorch "),Dt=l(Rs,"A",{href:!0,rel:!0});var ec=d(Dt);Br=r(ec,"torch.nn.Module"),ec.forEach(n),Wr=r(Rs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rs.forEach(n),Hr=u(ne),K=l(ne,"DIV",{class:!0});var _t=d(K);$(Bt.$$.fragment,_t),Qr=u(_t),ke=l(_t,"P",{});var to=d(ke);Ur=r(to,"The "),In=l(to,"A",{href:!0});var tc=d(In);Vr=r(tc,"NezhaForPreTraining"),tc.forEach(n),Rr=r(to," forward method, overrides the "),xo=l(to,"CODE",{});var nc=d(xo);Zr=r(nc,"__call__"),nc.forEach(n),Jr=r(to," special method."),to.forEach(n),Kr=u(_t),$(Qe.$$.fragment,_t),Gr=u(_t),$(Ue.$$.fragment,_t),_t.forEach(n),ne.forEach(n),Fs=u(t),$e=l(t,"H2",{class:!0});var Zs=d($e);Ve=l(Zs,"A",{id:!0,class:!0,href:!0});var oc=d(Ve);jo=l(oc,"SPAN",{});var sc=d(jo);$(Wt.$$.fragment,sc),sc.forEach(n),oc.forEach(n),Xr=u(Zs),Po=l(Zs,"SPAN",{});var ac=d(Po);Yr=r(ac,"NezhaForMaskedLM"),ac.forEach(n),Zs.forEach(n),xs=u(t),q=l(t,"DIV",{class:!0});var oe=d(q);$(Ht.$$.fragment,oe),ei=u(oe),Qt=l(oe,"P",{});var Js=d(Qt);ti=r(Js,"Nezha Model with a "),Co=l(Js,"CODE",{});var rc=d(Co);ni=r(rc,"language modeling"),rc.forEach(n),oi=r(Js," head on top."),Js.forEach(n),si=u(oe),Ut=l(oe,"P",{});var Ks=d(Ut);ai=r(Ks,"This model inherits from "),Dn=l(Ks,"A",{href:!0});var ic=d(Dn);ri=r(ic,"PreTrainedModel"),ic.forEach(n),ii=r(Ks,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ks.forEach(n),li=u(oe),Vt=l(oe,"P",{});var Gs=d(Vt);di=r(Gs,"This model is also a PyTorch "),Rt=l(Gs,"A",{href:!0,rel:!0});var lc=d(Rt);ci=r(lc,"torch.nn.Module"),lc.forEach(n),hi=r(Gs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gs.forEach(n),pi=u(oe),W=l(oe,"DIV",{class:!0});var se=d(W);$(Zt.$$.fragment,se),mi=u(se),ve=l(se,"P",{});var no=d(ve);ui=r(no,"The "),Bn=l(no,"A",{href:!0});var dc=d(Bn);fi=r(dc,"NezhaForMaskedLM"),dc.forEach(n),gi=r(no," forward method, overrides the "),qo=l(no,"CODE",{});var cc=d(qo);_i=r(cc,"__call__"),cc.forEach(n),bi=r(no," special method."),no.forEach(n),zi=u(se),$(Re.$$.fragment,se),ki=u(se),$(Ze.$$.fragment,se),$i=u(se),$(Je.$$.fragment,se),se.forEach(n),oe.forEach(n),js=u(t),we=l(t,"H2",{class:!0});var Xs=d(we);Ke=l(Xs,"A",{id:!0,class:!0,href:!0});var hc=d(Ke);Eo=l(hc,"SPAN",{});var pc=d(Eo);$(Jt.$$.fragment,pc),pc.forEach(n),hc.forEach(n),vi=u(Xs),Ao=l(Xs,"SPAN",{});var mc=d(Ao);wi=r(mc,"NezhaForNextSentencePrediction"),mc.forEach(n),Xs.forEach(n),Ps=u(t),E=l(t,"DIV",{class:!0});var ae=d(E);$(Kt.$$.fragment,ae),Ti=u(ae),Gt=l(ae,"P",{});var Ys=d(Gt);yi=r(Ys,"Nezha Model with a "),Oo=l(Ys,"CODE",{});var uc=d(Oo);Ni=r(uc,"next sentence prediction (classification)"),uc.forEach(n),Mi=r(Ys," head on top."),Ys.forEach(n),Fi=u(ae),Xt=l(ae,"P",{});var ea=d(Xt);xi=r(ea,"This model inherits from "),Wn=l(ea,"A",{href:!0});var fc=d(Wn);ji=r(fc,"PreTrainedModel"),fc.forEach(n),Pi=r(ea,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ea.forEach(n),Ci=u(ae),Yt=l(ae,"P",{});var ta=d(Yt);qi=r(ta,"This model is also a PyTorch "),en=l(ta,"A",{href:!0,rel:!0});var gc=d(en);Ei=r(gc,"torch.nn.Module"),gc.forEach(n),Ai=r(ta,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ta.forEach(n),Oi=u(ae),G=l(ae,"DIV",{class:!0});var bt=d(G);$(tn.$$.fragment,bt),Si=u(bt),Te=l(bt,"P",{});var oo=d(Te);Li=r(oo,"The "),Hn=l(oo,"A",{href:!0});var _c=d(Hn);Ii=r(_c,"NezhaForNextSentencePrediction"),_c.forEach(n),Di=r(oo," forward method, overrides the "),So=l(oo,"CODE",{});var bc=d(So);Bi=r(bc,"__call__"),bc.forEach(n),Wi=r(oo," special method."),oo.forEach(n),Hi=u(bt),$(Ge.$$.fragment,bt),Qi=u(bt),$(Xe.$$.fragment,bt),bt.forEach(n),ae.forEach(n),Cs=u(t),ye=l(t,"H2",{class:!0});var na=d(ye);Ye=l(na,"A",{id:!0,class:!0,href:!0});var zc=d(Ye);Lo=l(zc,"SPAN",{});var kc=d(Lo);$(nn.$$.fragment,kc),kc.forEach(n),zc.forEach(n),Ui=u(na),Io=l(na,"SPAN",{});var $c=d(Io);Vi=r($c,"NezhaForSequenceClassification"),$c.forEach(n),na.forEach(n),qs=u(t),A=l(t,"DIV",{class:!0});var re=d(A);$(on.$$.fragment,re),Ri=u(re),Do=l(re,"P",{});var vc=d(Do);Zi=r(vc,`Nezha Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),vc.forEach(n),Ji=u(re),sn=l(re,"P",{});var oa=d(sn);Ki=r(oa,"This model inherits from "),Qn=l(oa,"A",{href:!0});var wc=d(Qn);Gi=r(wc,"PreTrainedModel"),wc.forEach(n),Xi=r(oa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oa.forEach(n),Yi=u(re),an=l(re,"P",{});var sa=d(an);el=r(sa,"This model is also a PyTorch "),rn=l(sa,"A",{href:!0,rel:!0});var Tc=d(rn);tl=r(Tc,"torch.nn.Module"),Tc.forEach(n),nl=r(sa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sa.forEach(n),ol=u(re),x=l(re,"DIV",{class:!0});var R=d(x);$(ln.$$.fragment,R),sl=u(R),Ne=l(R,"P",{});var so=d(Ne);al=r(so,"The "),Un=l(so,"A",{href:!0});var yc=d(Un);rl=r(yc,"NezhaForSequenceClassification"),yc.forEach(n),il=r(so," forward method, overrides the "),Bo=l(so,"CODE",{});var Nc=d(Bo);ll=r(Nc,"__call__"),Nc.forEach(n),dl=r(so," special method."),so.forEach(n),cl=u(R),$(et.$$.fragment,R),hl=u(R),$(tt.$$.fragment,R),pl=u(R),$(nt.$$.fragment,R),ml=u(R),$(ot.$$.fragment,R),ul=u(R),$(st.$$.fragment,R),R.forEach(n),re.forEach(n),Es=u(t),Me=l(t,"H2",{class:!0});var aa=d(Me);at=l(aa,"A",{id:!0,class:!0,href:!0});var Mc=d(at);Wo=l(Mc,"SPAN",{});var Fc=d(Wo);$(dn.$$.fragment,Fc),Fc.forEach(n),Mc.forEach(n),fl=u(aa),Ho=l(aa,"SPAN",{});var xc=d(Ho);gl=r(xc,"NezhaForMultipleChoice"),xc.forEach(n),aa.forEach(n),As=u(t),O=l(t,"DIV",{class:!0});var ie=d(O);$(cn.$$.fragment,ie),_l=u(ie),Qo=l(ie,"P",{});var jc=d(Qo);bl=r(jc,`Nezha Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),jc.forEach(n),zl=u(ie),hn=l(ie,"P",{});var ra=d(hn);kl=r(ra,"This model inherits from "),Vn=l(ra,"A",{href:!0});var Pc=d(Vn);$l=r(Pc,"PreTrainedModel"),Pc.forEach(n),vl=r(ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ra.forEach(n),wl=u(ie),pn=l(ie,"P",{});var ia=d(pn);Tl=r(ia,"This model is also a PyTorch "),mn=l(ia,"A",{href:!0,rel:!0});var Cc=d(mn);yl=r(Cc,"torch.nn.Module"),Cc.forEach(n),Nl=r(ia,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ia.forEach(n),Ml=u(ie),X=l(ie,"DIV",{class:!0});var zt=d(X);$(un.$$.fragment,zt),Fl=u(zt),Fe=l(zt,"P",{});var ao=d(Fe);xl=r(ao,"The "),Rn=l(ao,"A",{href:!0});var qc=d(Rn);jl=r(qc,"NezhaForMultipleChoice"),qc.forEach(n),Pl=r(ao," forward method, overrides the "),Uo=l(ao,"CODE",{});var Ec=d(Uo);Cl=r(Ec,"__call__"),Ec.forEach(n),ql=r(ao," special method."),ao.forEach(n),El=u(zt),$(rt.$$.fragment,zt),Al=u(zt),$(it.$$.fragment,zt),zt.forEach(n),ie.forEach(n),Os=u(t),xe=l(t,"H2",{class:!0});var la=d(xe);lt=l(la,"A",{id:!0,class:!0,href:!0});var Ac=d(lt);Vo=l(Ac,"SPAN",{});var Oc=d(Vo);$(fn.$$.fragment,Oc),Oc.forEach(n),Ac.forEach(n),Ol=u(la),Ro=l(la,"SPAN",{});var Sc=d(Ro);Sl=r(Sc,"NezhaForTokenClassification"),Sc.forEach(n),la.forEach(n),Ss=u(t),S=l(t,"DIV",{class:!0});var le=d(S);$(gn.$$.fragment,le),Ll=u(le),Zo=l(le,"P",{});var Lc=d(Zo);Il=r(Lc,`Nezha Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Lc.forEach(n),Dl=u(le),_n=l(le,"P",{});var da=d(_n);Bl=r(da,"This model inherits from "),Zn=l(da,"A",{href:!0});var Ic=d(Zn);Wl=r(Ic,"PreTrainedModel"),Ic.forEach(n),Hl=r(da,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),da.forEach(n),Ql=u(le),bn=l(le,"P",{});var ca=d(bn);Ul=r(ca,"This model is also a PyTorch "),zn=l(ca,"A",{href:!0,rel:!0});var Dc=d(zn);Vl=r(Dc,"torch.nn.Module"),Dc.forEach(n),Rl=r(ca,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ca.forEach(n),Zl=u(le),H=l(le,"DIV",{class:!0});var de=d(H);$(kn.$$.fragment,de),Jl=u(de),je=l(de,"P",{});var ro=d(je);Kl=r(ro,"The "),Jn=l(ro,"A",{href:!0});var Bc=d(Jn);Gl=r(Bc,"NezhaForTokenClassification"),Bc.forEach(n),Xl=r(ro," forward method, overrides the "),Jo=l(ro,"CODE",{});var Wc=d(Jo);Yl=r(Wc,"__call__"),Wc.forEach(n),ed=r(ro," special method."),ro.forEach(n),td=u(de),$(dt.$$.fragment,de),nd=u(de),$(ct.$$.fragment,de),od=u(de),$(ht.$$.fragment,de),de.forEach(n),le.forEach(n),Ls=u(t),Pe=l(t,"H2",{class:!0});var ha=d(Pe);pt=l(ha,"A",{id:!0,class:!0,href:!0});var Hc=d(pt);Ko=l(Hc,"SPAN",{});var Qc=d(Ko);$($n.$$.fragment,Qc),Qc.forEach(n),Hc.forEach(n),sd=u(ha),Go=l(ha,"SPAN",{});var Uc=d(Go);ad=r(Uc,"NezhaForQuestionAnswering"),Uc.forEach(n),ha.forEach(n),Is=u(t),L=l(t,"DIV",{class:!0});var ce=d(L);$(vn.$$.fragment,ce),rd=u(ce),Ce=l(ce,"P",{});var io=d(Ce);id=r(io,`Nezha Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Xo=l(io,"CODE",{});var Vc=d(Xo);ld=r(Vc,"span start logits"),Vc.forEach(n),dd=r(io," and "),Yo=l(io,"CODE",{});var Rc=d(Yo);cd=r(Rc,"span end logits"),Rc.forEach(n),hd=r(io,")."),io.forEach(n),pd=u(ce),wn=l(ce,"P",{});var pa=d(wn);md=r(pa,"This model inherits from "),Kn=l(pa,"A",{href:!0});var Zc=d(Kn);ud=r(Zc,"PreTrainedModel"),Zc.forEach(n),fd=r(pa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pa.forEach(n),gd=u(ce),Tn=l(ce,"P",{});var ma=d(Tn);_d=r(ma,"This model is also a PyTorch "),yn=l(ma,"A",{href:!0,rel:!0});var Jc=d(yn);bd=r(Jc,"torch.nn.Module"),Jc.forEach(n),zd=r(ma,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ma.forEach(n),kd=u(ce),Q=l(ce,"DIV",{class:!0});var he=d(Q);$(Nn.$$.fragment,he),$d=u(he),qe=l(he,"P",{});var lo=d(qe);vd=r(lo,"The "),Gn=l(lo,"A",{href:!0});var Kc=d(Gn);wd=r(Kc,"NezhaForQuestionAnswering"),Kc.forEach(n),Td=r(lo," forward method, overrides the "),es=l(lo,"CODE",{});var Gc=d(es);yd=r(Gc,"__call__"),Gc.forEach(n),Nd=r(lo," special method."),lo.forEach(n),Md=u(he),$(mt.$$.fragment,he),Fd=u(he),$(ut.$$.fragment,he),xd=u(he),$(ft.$$.fragment,he),he.forEach(n),ce.forEach(n),this.h()},h(){f(s,"name","hf:doc:metadata"),f(s,"content",JSON.stringify(Mh)),f(h,"id","nezha"),f(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(h,"href","#nezha"),f(c,"class","relative group"),f(Oe,"id","overview"),f(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Oe,"href","#overview"),f(pe,"class","relative group"),f(vt,"href","https://arxiv.org/abs/1909.00204"),f(vt,"rel","nofollow"),f(wt,"href","https://huggingface.co/sijunhe"),f(wt,"rel","nofollow"),f(Tt,"href","https://github.com/huawei-noah/Pretrained-Language-Model/tree/master/NEZHA-PyTorch"),f(Tt,"rel","nofollow"),f(Le,"id","transformers.NezhaConfig"),f(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Le,"href","#transformers.NezhaConfig"),f(me,"class","relative group"),f(qn,"href","/docs/transformers/main/en/model_doc/nezha#transformers.NezhaModel"),f(Mt,"href","https://huggingface.co/sijunhe/nezha-cn-base"),f(Mt,"rel","nofollow"),f(En,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(An,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(De,"id","transformers.NezhaModel"),f(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(De,"href","#transformers.NezhaModel"),f(ge,"class","relative group"),f(On,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ct,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ct,"rel","nofollow"),f(Et,"href","https://arxiv.org/abs/1706.03762"),f(Et,"rel","nofollow"),f(Sn,"href","/docs/transformers/main/en/model_doc/nezha#transformers.NezhaModel"),f(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(He,"id","transformers.NezhaForPreTraining"),f(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(He,"href","#transformers.NezhaForPreTraining"),f(be,"class","relative group"),f(Ln,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Dt,"rel","nofollow"),f(In,"href","/docs/transformers/main/en/model_doc/nezha#transformers.NezhaForPreTraining"),f(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ve,"id","transformers.NezhaForMaskedLM"),f(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ve,"href","#transformers.NezhaForMaskedLM"),f($e,"class","relative group"),f(Dn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Rt,"rel","nofollow"),f(Bn,"href","/docs/transformers/main/en/model_doc/nezha#transformers.NezhaForMaskedLM"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ke,"id","transformers.NezhaForNextSentencePrediction"),f(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ke,"href","#transformers.NezhaForNextSentencePrediction"),f(we,"class","relative group"),f(Wn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(en,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(en,"rel","nofollow"),f(Hn,"href","/docs/transformers/main/en/model_doc/nezha#transformers.NezhaForNextSentencePrediction"),f(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ye,"id","transformers.NezhaForSequenceClassification"),f(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ye,"href","#transformers.NezhaForSequenceClassification"),f(ye,"class","relative group"),f(Qn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(rn,"rel","nofollow"),f(Un,"href","/docs/transformers/main/en/model_doc/nezha#transformers.NezhaForSequenceClassification"),f(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"id","transformers.NezhaForMultipleChoice"),f(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(at,"href","#transformers.NezhaForMultipleChoice"),f(Me,"class","relative group"),f(Vn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(mn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(mn,"rel","nofollow"),f(Rn,"href","/docs/transformers/main/en/model_doc/nezha#transformers.NezhaForMultipleChoice"),f(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lt,"id","transformers.NezhaForTokenClassification"),f(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(lt,"href","#transformers.NezhaForTokenClassification"),f(xe,"class","relative group"),f(Zn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(zn,"rel","nofollow"),f(Jn,"href","/docs/transformers/main/en/model_doc/nezha#transformers.NezhaForTokenClassification"),f(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"id","transformers.NezhaForQuestionAnswering"),f(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pt,"href","#transformers.NezhaForQuestionAnswering"),f(Pe,"class","relative group"),f(Kn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(yn,"rel","nofollow"),f(Gn,"href","/docs/transformers/main/en/model_doc/nezha#transformers.NezhaForQuestionAnswering"),f(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,s),z(t,g,_),z(t,c,_),e(c,h),e(h,b),v(o,b,null),e(c,p),e(c,M),e(M,ua),z(t,_s,_),z(t,pe,_),e(pe,Oe),e(Oe,co),v($t,co,null),e(pe,fa),e(pe,ho),e(ho,ga),z(t,bs,_),z(t,Se,_),e(Se,_a),e(Se,vt),e(vt,ba),e(Se,za),z(t,zs,_),z(t,Pn,_),e(Pn,ka),z(t,ks,_),z(t,Cn,_),e(Cn,po),e(po,$a),z(t,$s,_),z(t,te,_),e(te,va),e(te,wt),e(wt,wa),e(te,Ta),e(te,Tt),e(Tt,ya),e(te,Na),z(t,vs,_),z(t,me,_),e(me,Le),e(Le,mo),v(yt,mo,null),e(me,Ma),e(me,uo),e(uo,Fa),z(t,ws,_),z(t,Z,_),v(Nt,Z,null),e(Z,xa),e(Z,ue),e(ue,ja),e(ue,qn),e(qn,Pa),e(ue,Ca),e(ue,Mt),e(Mt,qa),e(ue,Ea),e(Z,Aa),e(Z,fe),e(fe,Oa),e(fe,En),e(En,Sa),e(fe,La),e(fe,An),e(An,Ia),e(fe,Da),e(Z,Ba),v(Ie,Z,null),z(t,Ts,_),z(t,ge,_),e(ge,De),e(De,fo),v(Ft,fo,null),e(ge,Wa),e(ge,go),e(go,Ha),z(t,ys,_),z(t,F,_),v(xt,F,null),e(F,Qa),e(F,_o),e(_o,Ua),e(F,Va),e(F,jt),e(jt,Ra),e(jt,On),e(On,Za),e(jt,Ja),e(F,Ka),e(F,Pt),e(Pt,Ga),e(Pt,Ct),e(Ct,Xa),e(Pt,Ya),e(F,er),e(F,qt),e(qt,tr),e(qt,Et),e(Et,nr),e(qt,or),e(F,sr),e(F,j),e(j,ar),e(j,bo),e(bo,rr),e(j,ir),e(j,zo),e(zo,lr),e(j,dr),e(j,ko),e(ko,cr),e(j,hr),e(j,$o),e($o,pr),e(j,mr),e(j,vo),e(vo,ur),e(j,fr),e(j,wo),e(wo,gr),e(j,_r),e(F,br),e(F,J),v(At,J,null),e(J,zr),e(J,_e),e(_e,kr),e(_e,Sn),e(Sn,$r),e(_e,vr),e(_e,To),e(To,wr),e(_e,Tr),e(J,yr),v(Be,J,null),e(J,Nr),v(We,J,null),z(t,Ns,_),z(t,be,_),e(be,He),e(He,yo),v(Ot,yo,null),e(be,Mr),e(be,No),e(No,Fr),z(t,Ms,_),z(t,C,_),v(St,C,null),e(C,xr),e(C,ze),e(ze,jr),e(ze,Mo),e(Mo,Pr),e(ze,Cr),e(ze,Fo),e(Fo,qr),e(ze,Er),e(C,Ar),e(C,Lt),e(Lt,Or),e(Lt,Ln),e(Ln,Sr),e(Lt,Lr),e(C,Ir),e(C,It),e(It,Dr),e(It,Dt),e(Dt,Br),e(It,Wr),e(C,Hr),e(C,K),v(Bt,K,null),e(K,Qr),e(K,ke),e(ke,Ur),e(ke,In),e(In,Vr),e(ke,Rr),e(ke,xo),e(xo,Zr),e(ke,Jr),e(K,Kr),v(Qe,K,null),e(K,Gr),v(Ue,K,null),z(t,Fs,_),z(t,$e,_),e($e,Ve),e(Ve,jo),v(Wt,jo,null),e($e,Xr),e($e,Po),e(Po,Yr),z(t,xs,_),z(t,q,_),v(Ht,q,null),e(q,ei),e(q,Qt),e(Qt,ti),e(Qt,Co),e(Co,ni),e(Qt,oi),e(q,si),e(q,Ut),e(Ut,ai),e(Ut,Dn),e(Dn,ri),e(Ut,ii),e(q,li),e(q,Vt),e(Vt,di),e(Vt,Rt),e(Rt,ci),e(Vt,hi),e(q,pi),e(q,W),v(Zt,W,null),e(W,mi),e(W,ve),e(ve,ui),e(ve,Bn),e(Bn,fi),e(ve,gi),e(ve,qo),e(qo,_i),e(ve,bi),e(W,zi),v(Re,W,null),e(W,ki),v(Ze,W,null),e(W,$i),v(Je,W,null),z(t,js,_),z(t,we,_),e(we,Ke),e(Ke,Eo),v(Jt,Eo,null),e(we,vi),e(we,Ao),e(Ao,wi),z(t,Ps,_),z(t,E,_),v(Kt,E,null),e(E,Ti),e(E,Gt),e(Gt,yi),e(Gt,Oo),e(Oo,Ni),e(Gt,Mi),e(E,Fi),e(E,Xt),e(Xt,xi),e(Xt,Wn),e(Wn,ji),e(Xt,Pi),e(E,Ci),e(E,Yt),e(Yt,qi),e(Yt,en),e(en,Ei),e(Yt,Ai),e(E,Oi),e(E,G),v(tn,G,null),e(G,Si),e(G,Te),e(Te,Li),e(Te,Hn),e(Hn,Ii),e(Te,Di),e(Te,So),e(So,Bi),e(Te,Wi),e(G,Hi),v(Ge,G,null),e(G,Qi),v(Xe,G,null),z(t,Cs,_),z(t,ye,_),e(ye,Ye),e(Ye,Lo),v(nn,Lo,null),e(ye,Ui),e(ye,Io),e(Io,Vi),z(t,qs,_),z(t,A,_),v(on,A,null),e(A,Ri),e(A,Do),e(Do,Zi),e(A,Ji),e(A,sn),e(sn,Ki),e(sn,Qn),e(Qn,Gi),e(sn,Xi),e(A,Yi),e(A,an),e(an,el),e(an,rn),e(rn,tl),e(an,nl),e(A,ol),e(A,x),v(ln,x,null),e(x,sl),e(x,Ne),e(Ne,al),e(Ne,Un),e(Un,rl),e(Ne,il),e(Ne,Bo),e(Bo,ll),e(Ne,dl),e(x,cl),v(et,x,null),e(x,hl),v(tt,x,null),e(x,pl),v(nt,x,null),e(x,ml),v(ot,x,null),e(x,ul),v(st,x,null),z(t,Es,_),z(t,Me,_),e(Me,at),e(at,Wo),v(dn,Wo,null),e(Me,fl),e(Me,Ho),e(Ho,gl),z(t,As,_),z(t,O,_),v(cn,O,null),e(O,_l),e(O,Qo),e(Qo,bl),e(O,zl),e(O,hn),e(hn,kl),e(hn,Vn),e(Vn,$l),e(hn,vl),e(O,wl),e(O,pn),e(pn,Tl),e(pn,mn),e(mn,yl),e(pn,Nl),e(O,Ml),e(O,X),v(un,X,null),e(X,Fl),e(X,Fe),e(Fe,xl),e(Fe,Rn),e(Rn,jl),e(Fe,Pl),e(Fe,Uo),e(Uo,Cl),e(Fe,ql),e(X,El),v(rt,X,null),e(X,Al),v(it,X,null),z(t,Os,_),z(t,xe,_),e(xe,lt),e(lt,Vo),v(fn,Vo,null),e(xe,Ol),e(xe,Ro),e(Ro,Sl),z(t,Ss,_),z(t,S,_),v(gn,S,null),e(S,Ll),e(S,Zo),e(Zo,Il),e(S,Dl),e(S,_n),e(_n,Bl),e(_n,Zn),e(Zn,Wl),e(_n,Hl),e(S,Ql),e(S,bn),e(bn,Ul),e(bn,zn),e(zn,Vl),e(bn,Rl),e(S,Zl),e(S,H),v(kn,H,null),e(H,Jl),e(H,je),e(je,Kl),e(je,Jn),e(Jn,Gl),e(je,Xl),e(je,Jo),e(Jo,Yl),e(je,ed),e(H,td),v(dt,H,null),e(H,nd),v(ct,H,null),e(H,od),v(ht,H,null),z(t,Ls,_),z(t,Pe,_),e(Pe,pt),e(pt,Ko),v($n,Ko,null),e(Pe,sd),e(Pe,Go),e(Go,ad),z(t,Is,_),z(t,L,_),v(vn,L,null),e(L,rd),e(L,Ce),e(Ce,id),e(Ce,Xo),e(Xo,ld),e(Ce,dd),e(Ce,Yo),e(Yo,cd),e(Ce,hd),e(L,pd),e(L,wn),e(wn,md),e(wn,Kn),e(Kn,ud),e(wn,fd),e(L,gd),e(L,Tn),e(Tn,_d),e(Tn,yn),e(yn,bd),e(Tn,zd),e(L,kd),e(L,Q),v(Nn,Q,null),e(Q,$d),e(Q,qe),e(qe,vd),e(qe,Gn),e(Gn,wd),e(qe,Td),e(qe,es),e(es,yd),e(qe,Nd),e(Q,Md),v(mt,Q,null),e(Q,Fd),v(ut,Q,null),e(Q,xd),v(ft,Q,null),Ds=!0},p(t,[_]){const Mn={};_&2&&(Mn.$$scope={dirty:_,ctx:t}),Ie.$set(Mn);const ts={};_&2&&(ts.$$scope={dirty:_,ctx:t}),Be.$set(ts);const ns={};_&2&&(ns.$$scope={dirty:_,ctx:t}),We.$set(ns);const os={};_&2&&(os.$$scope={dirty:_,ctx:t}),Qe.$set(os);const Fn={};_&2&&(Fn.$$scope={dirty:_,ctx:t}),Ue.$set(Fn);const ss={};_&2&&(ss.$$scope={dirty:_,ctx:t}),Re.$set(ss);const as={};_&2&&(as.$$scope={dirty:_,ctx:t}),Ze.$set(as);const rs={};_&2&&(rs.$$scope={dirty:_,ctx:t}),Je.$set(rs);const xn={};_&2&&(xn.$$scope={dirty:_,ctx:t}),Ge.$set(xn);const is={};_&2&&(is.$$scope={dirty:_,ctx:t}),Xe.$set(is);const ls={};_&2&&(ls.$$scope={dirty:_,ctx:t}),et.$set(ls);const ds={};_&2&&(ds.$$scope={dirty:_,ctx:t}),tt.$set(ds);const cs={};_&2&&(cs.$$scope={dirty:_,ctx:t}),nt.$set(cs);const Ee={};_&2&&(Ee.$$scope={dirty:_,ctx:t}),ot.$set(Ee);const hs={};_&2&&(hs.$$scope={dirty:_,ctx:t}),st.$set(hs);const ps={};_&2&&(ps.$$scope={dirty:_,ctx:t}),rt.$set(ps);const jn={};_&2&&(jn.$$scope={dirty:_,ctx:t}),it.$set(jn);const ms={};_&2&&(ms.$$scope={dirty:_,ctx:t}),dt.$set(ms);const us={};_&2&&(us.$$scope={dirty:_,ctx:t}),ct.$set(us);const fs={};_&2&&(fs.$$scope={dirty:_,ctx:t}),ht.$set(fs);const Y={};_&2&&(Y.$$scope={dirty:_,ctx:t}),mt.$set(Y);const Ae={};_&2&&(Ae.$$scope={dirty:_,ctx:t}),ut.$set(Ae);const gs={};_&2&&(gs.$$scope={dirty:_,ctx:t}),ft.$set(gs)},i(t){Ds||(w(o.$$.fragment,t),w($t.$$.fragment,t),w(yt.$$.fragment,t),w(Nt.$$.fragment,t),w(Ie.$$.fragment,t),w(Ft.$$.fragment,t),w(xt.$$.fragment,t),w(At.$$.fragment,t),w(Be.$$.fragment,t),w(We.$$.fragment,t),w(Ot.$$.fragment,t),w(St.$$.fragment,t),w(Bt.$$.fragment,t),w(Qe.$$.fragment,t),w(Ue.$$.fragment,t),w(Wt.$$.fragment,t),w(Ht.$$.fragment,t),w(Zt.$$.fragment,t),w(Re.$$.fragment,t),w(Ze.$$.fragment,t),w(Je.$$.fragment,t),w(Jt.$$.fragment,t),w(Kt.$$.fragment,t),w(tn.$$.fragment,t),w(Ge.$$.fragment,t),w(Xe.$$.fragment,t),w(nn.$$.fragment,t),w(on.$$.fragment,t),w(ln.$$.fragment,t),w(et.$$.fragment,t),w(tt.$$.fragment,t),w(nt.$$.fragment,t),w(ot.$$.fragment,t),w(st.$$.fragment,t),w(dn.$$.fragment,t),w(cn.$$.fragment,t),w(un.$$.fragment,t),w(rt.$$.fragment,t),w(it.$$.fragment,t),w(fn.$$.fragment,t),w(gn.$$.fragment,t),w(kn.$$.fragment,t),w(dt.$$.fragment,t),w(ct.$$.fragment,t),w(ht.$$.fragment,t),w($n.$$.fragment,t),w(vn.$$.fragment,t),w(Nn.$$.fragment,t),w(mt.$$.fragment,t),w(ut.$$.fragment,t),w(ft.$$.fragment,t),Ds=!0)},o(t){T(o.$$.fragment,t),T($t.$$.fragment,t),T(yt.$$.fragment,t),T(Nt.$$.fragment,t),T(Ie.$$.fragment,t),T(Ft.$$.fragment,t),T(xt.$$.fragment,t),T(At.$$.fragment,t),T(Be.$$.fragment,t),T(We.$$.fragment,t),T(Ot.$$.fragment,t),T(St.$$.fragment,t),T(Bt.$$.fragment,t),T(Qe.$$.fragment,t),T(Ue.$$.fragment,t),T(Wt.$$.fragment,t),T(Ht.$$.fragment,t),T(Zt.$$.fragment,t),T(Re.$$.fragment,t),T(Ze.$$.fragment,t),T(Je.$$.fragment,t),T(Jt.$$.fragment,t),T(Kt.$$.fragment,t),T(tn.$$.fragment,t),T(Ge.$$.fragment,t),T(Xe.$$.fragment,t),T(nn.$$.fragment,t),T(on.$$.fragment,t),T(ln.$$.fragment,t),T(et.$$.fragment,t),T(tt.$$.fragment,t),T(nt.$$.fragment,t),T(ot.$$.fragment,t),T(st.$$.fragment,t),T(dn.$$.fragment,t),T(cn.$$.fragment,t),T(un.$$.fragment,t),T(rt.$$.fragment,t),T(it.$$.fragment,t),T(fn.$$.fragment,t),T(gn.$$.fragment,t),T(kn.$$.fragment,t),T(dt.$$.fragment,t),T(ct.$$.fragment,t),T(ht.$$.fragment,t),T($n.$$.fragment,t),T(vn.$$.fragment,t),T(Nn.$$.fragment,t),T(mt.$$.fragment,t),T(ut.$$.fragment,t),T(ft.$$.fragment,t),Ds=!1},d(t){n(s),t&&n(g),t&&n(c),y(o),t&&n(_s),t&&n(pe),y($t),t&&n(bs),t&&n(Se),t&&n(zs),t&&n(Pn),t&&n(ks),t&&n(Cn),t&&n($s),t&&n(te),t&&n(vs),t&&n(me),y(yt),t&&n(ws),t&&n(Z),y(Nt),y(Ie),t&&n(Ts),t&&n(ge),y(Ft),t&&n(ys),t&&n(F),y(xt),y(At),y(Be),y(We),t&&n(Ns),t&&n(be),y(Ot),t&&n(Ms),t&&n(C),y(St),y(Bt),y(Qe),y(Ue),t&&n(Fs),t&&n($e),y(Wt),t&&n(xs),t&&n(q),y(Ht),y(Zt),y(Re),y(Ze),y(Je),t&&n(js),t&&n(we),y(Jt),t&&n(Ps),t&&n(E),y(Kt),y(tn),y(Ge),y(Xe),t&&n(Cs),t&&n(ye),y(nn),t&&n(qs),t&&n(A),y(on),y(ln),y(et),y(tt),y(nt),y(ot),y(st),t&&n(Es),t&&n(Me),y(dn),t&&n(As),t&&n(O),y(cn),y(un),y(rt),y(it),t&&n(Os),t&&n(xe),y(fn),t&&n(Ss),t&&n(S),y(gn),y(kn),y(dt),y(ct),y(ht),t&&n(Ls),t&&n(Pe),y($n),t&&n(Is),t&&n(L),y(vn),y(Nn),y(mt),y(ut),y(ft)}}}const Mh={local:"nezha",sections:[{local:"overview",title:"Overview"},{local:"transformers.NezhaConfig",title:"NezhaConfig"},{local:"transformers.NezhaModel",title:"NezhaModel"},{local:"transformers.NezhaForPreTraining",title:"NezhaForPreTraining"},{local:"transformers.NezhaForMaskedLM",title:"NezhaForMaskedLM"},{local:"transformers.NezhaForNextSentencePrediction",title:"NezhaForNextSentencePrediction"},{local:"transformers.NezhaForSequenceClassification",title:"NezhaForSequenceClassification"},{local:"transformers.NezhaForMultipleChoice",title:"NezhaForMultipleChoice"},{local:"transformers.NezhaForTokenClassification",title:"NezhaForTokenClassification"},{local:"transformers.NezhaForQuestionAnswering",title:"NezhaForQuestionAnswering"}],title:"Nezha"};function Fh(N){return nh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ah extends Xc{constructor(s){super();Yc(this,s,Fh,Nh,eh,{})}}export{Ah as default,Mh as metadata};
