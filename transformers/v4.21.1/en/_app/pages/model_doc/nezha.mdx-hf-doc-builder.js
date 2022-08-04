import{S as Xc,i as Yc,s as eh,e as i,k as m,w as k,t as a,M as th,c as l,d as o,m as u,a as d,x as v,h as r,b as f,G as e,g as z,y as $,q as w,o as T,B as y,v as oh,L as D}from"../../chunks/vendor-hf-doc-builder.js";import{T as kt}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as B}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ee}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as I}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function nh(N){let s,g,c,h,b;return h=new B({props:{code:`from transformers import NezhaConfig, NezhaModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){s=i("p"),g=a("Example:"),c=m(),k(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){z(n,s,p),e(s,g),z(n,c,p),$(h,n,p),b=!0},p:D,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){T(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),y(h,n)}}}function sh(N){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){z(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function ah(N){let s,g,c,h,b;return h=new B({props:{code:`from transformers import BertTokenizer, NezhaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){s=i("p"),g=a("Example:"),c=m(),k(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){z(n,s,p),e(s,g),z(n,c,p),$(h,n,p),b=!0},p:D,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){T(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),y(h,n)}}}function rh(N){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){z(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function ih(N){let s,g,c,h,b;return h=new B({props:{code:`from transformers import BertTokenizer, NezhaForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){s=i("p"),g=a("Example:"),c=m(),k(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){z(n,s,p),e(s,g),z(n,c,p),$(h,n,p),b=!0},p:D,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){T(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),y(h,n)}}}function lh(N){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){z(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function dh(N){let s,g,c,h,b;return h=new B({props:{code:`from transformers import BertTokenizer, NezhaForMaskedLM
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
`}}),{c(){s=i("p"),g=a("Example:"),c=m(),k(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){z(n,s,p),e(s,g),z(n,c,p),$(h,n,p),b=!0},p:D,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){T(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),y(h,n)}}}function ch(N){let s,g;return s=new B({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,h){$(s,c,h),g=!0},p:D,i(c){g||(w(s.$$.fragment,c),g=!0)},o(c){T(s.$$.fragment,c),g=!1},d(c){y(s,c)}}}function hh(N){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){z(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function ph(N){let s,g,c,h,b;return h=new B({props:{code:`from transformers import BertTokenizer, NezhaForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){s=i("p"),g=a("Example:"),c=m(),k(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){z(n,s,p),e(s,g),z(n,c,p),$(h,n,p),b=!0},p:D,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){T(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),y(h,n)}}}function mh(N){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){z(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function uh(N){let s,g,c,h,b;return h=new B({props:{code:`import torch
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
`}}),{c(){s=i("p"),g=a("Example of single-label classification:"),c=m(),k(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example of single-label classification:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){z(n,s,p),e(s,g),z(n,c,p),$(h,n,p),b=!0},p:D,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){T(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),y(h,n)}}}function fh(N){let s,g;return s=new B({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = NezhaForSequenceClassification.from_pretrained("sijunhe/nezha-cn-base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NezhaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,h){$(s,c,h),g=!0},p:D,i(c){g||(w(s.$$.fragment,c),g=!0)},o(c){T(s.$$.fragment,c),g=!1},d(c){y(s,c)}}}function gh(N){let s,g,c,h,b;return h=new B({props:{code:`import torch
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
`}}),{c(){s=i("p"),g=a("Example of multi-label classification:"),c=m(),k(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example of multi-label classification:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){z(n,s,p),e(s,g),z(n,c,p),$(h,n,p),b=!0},p:D,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){T(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),y(h,n)}}}function _h(N){let s,g;return s=new B({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,h){$(s,c,h),g=!0},p:D,i(c){g||(w(s.$$.fragment,c),g=!0)},o(c){T(s.$$.fragment,c),g=!1},d(c){y(s,c)}}}function bh(N){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){z(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function zh(N){let s,g,c,h,b;return h=new B({props:{code:`from transformers import BertTokenizer, NezhaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){s=i("p"),g=a("Example:"),c=m(),k(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){z(n,s,p),e(s,g),z(n,c,p),$(h,n,p),b=!0},p:D,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){T(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),y(h,n)}}}function kh(N){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){z(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function vh(N){let s,g,c,h,b;return h=new B({props:{code:`from transformers import BertTokenizer, NezhaForTokenClassification
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
`}}),{c(){s=i("p"),g=a("Example:"),c=m(),k(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){z(n,s,p),e(s,g),z(n,c,p),$(h,n,p),b=!0},p:D,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){T(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),y(h,n)}}}function $h(N){let s,g;return s=new B({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,h){$(s,c,h),g=!0},p:D,i(c){g||(w(s.$$.fragment,c),g=!0)},o(c){T(s.$$.fragment,c),g=!1},d(c){y(s,c)}}}function wh(N){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){z(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function Th(N){let s,g,c,h,b;return h=new B({props:{code:`from transformers import BertTokenizer, NezhaForQuestionAnswering
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
`}}),{c(){s=i("p"),g=a("Example:"),c=m(),k(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){z(n,s,p),e(s,g),z(n,c,p),$(h,n,p),b=!0},p:D,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){T(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),y(h,n)}}}function yh(N){let s,g;return s=new B({props:{code:`# target is "nice puppet"
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
`}}),{c(){k(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,h){$(s,c,h),g=!0},p:D,i(c){g||(w(s.$$.fragment,c),g=!0)},o(c){T(s.$$.fragment,c),g=!1},d(c){y(s,c)}}}function Nh(N){let s,g,c,h,b,n,p,F,ua,_s,pe,Oe,cn,vt,fa,hn,ga,bs,Se,_a,$t,ba,za,zs,Po,ka,ks,qo,pn,va,vs,te,$a,wt,wa,Ta,Tt,ya,Na,$s,me,Le,mn,yt,Fa,un,Ma,ws,Z,Nt,xa,ue,ja,Co,Pa,qa,Ft,Ca,Ea,Aa,fe,Oa,Eo,Sa,La,Ao,Ia,Da,Ba,Ie,Ts,ge,De,fn,Mt,Wa,gn,Ha,ys,M,xt,Qa,_n,Ua,Va,jt,Ra,Oo,Za,Ja,Ka,Pt,Ga,qt,Xa,Ya,er,Ct,tr,Et,or,nr,sr,j,ar,bn,rr,ir,zn,lr,dr,kn,cr,hr,vn,pr,mr,$n,ur,fr,wn,gr,_r,br,J,At,zr,_e,kr,So,vr,$r,Tn,wr,Tr,yr,Be,Nr,We,Ns,be,He,yn,Ot,Fr,Nn,Mr,Fs,q,St,xr,ze,jr,Fn,Pr,qr,Mn,Cr,Er,Ar,Lt,Or,Lo,Sr,Lr,Ir,It,Dr,Dt,Br,Wr,Hr,K,Bt,Qr,ke,Ur,Io,Vr,Rr,xn,Zr,Jr,Kr,Qe,Gr,Ue,Ms,ve,Ve,jn,Wt,Xr,Pn,Yr,xs,C,Ht,ei,Qt,ti,qn,oi,ni,si,Ut,ai,Do,ri,ii,li,Vt,di,Rt,ci,hi,pi,W,Zt,mi,$e,ui,Bo,fi,gi,Cn,_i,bi,zi,Re,ki,Ze,vi,Je,js,we,Ke,En,Jt,$i,An,wi,Ps,E,Kt,Ti,Gt,yi,On,Ni,Fi,Mi,Xt,xi,Wo,ji,Pi,qi,Yt,Ci,eo,Ei,Ai,Oi,G,to,Si,Te,Li,Ho,Ii,Di,Sn,Bi,Wi,Hi,Ge,Qi,Xe,qs,ye,Ye,Ln,oo,Ui,In,Vi,Cs,A,no,Ri,Dn,Zi,Ji,so,Ki,Qo,Gi,Xi,Yi,ao,el,ro,tl,ol,nl,x,io,sl,Ne,al,Uo,rl,il,Bn,ll,dl,cl,et,hl,tt,pl,ot,ml,nt,ul,st,Es,Fe,at,Wn,lo,fl,Hn,gl,As,O,co,_l,Qn,bl,zl,ho,kl,Vo,vl,$l,wl,po,Tl,mo,yl,Nl,Fl,X,uo,Ml,Me,xl,Ro,jl,Pl,Un,ql,Cl,El,rt,Al,it,Os,xe,lt,Vn,fo,Ol,Rn,Sl,Ss,S,go,Ll,Zn,Il,Dl,_o,Bl,Zo,Wl,Hl,Ql,bo,Ul,zo,Vl,Rl,Zl,H,ko,Jl,je,Kl,Jo,Gl,Xl,Jn,Yl,ed,td,dt,od,ct,nd,ht,Ls,Pe,pt,Kn,vo,sd,Gn,ad,Is,L,$o,rd,qe,id,Xn,ld,dd,Yn,cd,hd,pd,wo,md,Ko,ud,fd,gd,To,_d,yo,bd,zd,kd,Q,No,vd,Ce,$d,Go,wd,Td,es,yd,Nd,Fd,mt,Md,ut,xd,ft,Ds;return n=new ee({}),vt=new ee({}),yt=new ee({}),Nt=new P({props:{name:"class transformers.NezhaConfig",anchor:"transformers.NezhaConfig",parameters:[{name:"vocab_size",val:" = 21128"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"max_relative_position",val:" = 64"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"classifier_dropout",val:" = 0.1"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 3"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.NezhaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, optional, defaults to 21128) &#x2014;
Vocabulary size of the NEZHA model. Defines the different tokens that can be represented by the
<em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaModel">NezhaModel</a>.`,name:"vocab_size"},{anchor:"transformers.NezhaConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, optional, defaults to 128) &#x2014;
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
The vocabulary size of the <em>token_type_ids</em> passed into <a href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaModel">NezhaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.NezhaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, optional, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.NezhaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.NezhaConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, optional, defaults to 0.1) &#x2014;
The dropout ratio for attached classifiers.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/configuration_nezha.py#L9"}}),Ie=new I({props:{anchor:"transformers.NezhaConfig.example",$$slots:{default:[nh]},$$scope:{ctx:N}}}),Mt=new ee({}),xt=new P({props:{name:"class transformers.NezhaModel",anchor:"transformers.NezhaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.NezhaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/modeling_nezha.py#L864"}}),At=new P({props:{name:"forward",anchor:"transformers.NezhaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NezhaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/modeling_nezha.py#L903",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new kt({props:{$$slots:{default:[sh]},$$scope:{ctx:N}}}),We=new I({props:{anchor:"transformers.NezhaModel.forward.example",$$slots:{default:[ah]},$$scope:{ctx:N}}}),Ot=new ee({}),St=new P({props:{name:"class transformers.NezhaForPreTraining",anchor:"transformers.NezhaForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/modeling_nezha.py#L1044"}}),Bt=new P({props:{name:"forward",anchor:"transformers.NezhaForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NezhaForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/modeling_nezha.py#L1060",returnDescription:`
<p>A <code>transformers.models.nezha.modeling_nezha.NezhaForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaConfig"
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
`}}),Qe=new kt({props:{$$slots:{default:[rh]},$$scope:{ctx:N}}}),Ue=new I({props:{anchor:"transformers.NezhaForPreTraining.forward.example",$$slots:{default:[ih]},$$scope:{ctx:N}}}),Wt=new ee({}),Ht=new P({props:{name:"class transformers.NezhaForMaskedLM",anchor:"transformers.NezhaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/modeling_nezha.py#L1144"}}),Zt=new P({props:{name:"forward",anchor:"transformers.NezhaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NezhaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/modeling_nezha.py#L1170",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Re=new kt({props:{$$slots:{default:[lh]},$$scope:{ctx:N}}}),Ze=new I({props:{anchor:"transformers.NezhaForMaskedLM.forward.example",$$slots:{default:[dh]},$$scope:{ctx:N}}}),Je=new I({props:{anchor:"transformers.NezhaForMaskedLM.forward.example-2",$$slots:{default:[ch]},$$scope:{ctx:N}}}),Jt=new ee({}),Kt=new P({props:{name:"class transformers.NezhaForNextSentencePrediction",anchor:"transformers.NezhaForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/modeling_nezha.py#L1253"}}),to=new P({props:{name:"forward",anchor:"transformers.NezhaForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.NezhaForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/modeling_nezha.py#L1263",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ge=new kt({props:{$$slots:{default:[hh]},$$scope:{ctx:N}}}),Xe=new I({props:{anchor:"transformers.NezhaForNextSentencePrediction.forward.example",$$slots:{default:[ph]},$$scope:{ctx:N}}}),oo=new ee({}),no=new P({props:{name:"class transformers.NezhaForSequenceClassification",anchor:"transformers.NezhaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/modeling_nezha.py#L1356"}}),io=new P({props:{name:"forward",anchor:"transformers.NezhaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NezhaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/modeling_nezha.py#L1372",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),et=new kt({props:{$$slots:{default:[mh]},$$scope:{ctx:N}}}),tt=new I({props:{anchor:"transformers.NezhaForSequenceClassification.forward.example",$$slots:{default:[uh]},$$scope:{ctx:N}}}),ot=new I({props:{anchor:"transformers.NezhaForSequenceClassification.forward.example-2",$$slots:{default:[fh]},$$scope:{ctx:N}}}),nt=new I({props:{anchor:"transformers.NezhaForSequenceClassification.forward.example-3",$$slots:{default:[gh]},$$scope:{ctx:N}}}),st=new I({props:{anchor:"transformers.NezhaForSequenceClassification.forward.example-4",$$slots:{default:[_h]},$$scope:{ctx:N}}}),lo=new ee({}),co=new P({props:{name:"class transformers.NezhaForMultipleChoice",anchor:"transformers.NezhaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/modeling_nezha.py#L1456"}}),uo=new P({props:{name:"forward",anchor:"transformers.NezhaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NezhaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/modeling_nezha.py#L1470",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rt=new kt({props:{$$slots:{default:[bh]},$$scope:{ctx:N}}}),it=new I({props:{anchor:"transformers.NezhaForMultipleChoice.forward.example",$$slots:{default:[zh]},$$scope:{ctx:N}}}),fo=new ee({}),go=new P({props:{name:"class transformers.NezhaForTokenClassification",anchor:"transformers.NezhaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/modeling_nezha.py#L1549"}}),ko=new P({props:{name:"forward",anchor:"transformers.NezhaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NezhaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/modeling_nezha.py#L1567",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dt=new kt({props:{$$slots:{default:[kh]},$$scope:{ctx:N}}}),ct=new I({props:{anchor:"transformers.NezhaForTokenClassification.forward.example",$$slots:{default:[vh]},$$scope:{ctx:N}}}),ht=new I({props:{anchor:"transformers.NezhaForTokenClassification.forward.example-2",$$slots:{default:[$h]},$$scope:{ctx:N}}}),vo=new ee({}),$o=new P({props:{name:"class transformers.NezhaForQuestionAnswering",anchor:"transformers.NezhaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NezhaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaConfig">NezhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/modeling_nezha.py#L1632"}}),No=new P({props:{name:"forward",anchor:"transformers.NezhaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NezhaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NezhaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.NezhaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/nezha/modeling_nezha.py#L1646",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mt=new kt({props:{$$slots:{default:[wh]},$$scope:{ctx:N}}}),ut=new I({props:{anchor:"transformers.NezhaForQuestionAnswering.forward.example",$$slots:{default:[Th]},$$scope:{ctx:N}}}),ft=new I({props:{anchor:"transformers.NezhaForQuestionAnswering.forward.example-2",$$slots:{default:[yh]},$$scope:{ctx:N}}}),{c(){s=i("meta"),g=m(),c=i("h1"),h=i("a"),b=i("span"),k(n.$$.fragment),p=m(),F=i("span"),ua=a("Nezha"),_s=m(),pe=i("h2"),Oe=i("a"),cn=i("span"),k(vt.$$.fragment),fa=m(),hn=i("span"),ga=a("Overview"),bs=m(),Se=i("p"),_a=a("The Nezha model was proposed in "),$t=i("a"),ba=a("NEZHA: Neural Contextualized Representation for Chinese Language Understanding"),za=a(" by Junqiu Wei et al."),zs=m(),Po=i("p"),ka=a("The abstract from the paper is the following:"),ks=m(),qo=i("p"),pn=i("em"),va=a(`The pre-trained language models have achieved great successes in various natural language understanding (NLU) tasks
due to its capacity to capture the deep contextualized information in text by pre-training on large-scale corpora.
In this technical report, we present our practice of pre-training language models named NEZHA (NEural contextualiZed
representation for CHinese lAnguage understanding) on Chinese corpora and finetuning for the Chinese NLU tasks.
The current version of NEZHA is based on BERT with a collection of proven improvements, which include Functional
Relative Positional Encoding as an effective positional encoding scheme, Whole Word Masking strategy,
Mixed Precision Training and the LAMB Optimizer in training the models. The experimental results show that NEZHA
achieves the state-of-the-art performances when finetuned on several representative Chinese tasks, including
named entity recognition (People\u2019s Daily NER), sentence matching (LCQMC), Chinese sentiment classification (ChnSenti)
and natural language inference (XNLI).`),vs=m(),te=i("p"),$a=a("This model was contributed by "),wt=i("a"),wa=a("sijunhe"),Ta=a(". The original code can be found "),Tt=i("a"),ya=a("here"),Na=a("."),$s=m(),me=i("h2"),Le=i("a"),mn=i("span"),k(yt.$$.fragment),Fa=m(),un=i("span"),Ma=a("NezhaConfig"),ws=m(),Z=i("div"),k(Nt.$$.fragment),xa=m(),ue=i("p"),ja=a("This is the configuration class to store the configuration of an "),Co=i("a"),Pa=a("NezhaModel"),qa=a(`. It is used to instantiate an Nezha
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Nezha
`),Ft=i("a"),Ca=a("sijunhe/nezha-cn-base"),Ea=a(" architecture."),Aa=m(),fe=i("p"),Oa=a("Configuration objects inherit from "),Eo=i("a"),Sa=a("PretrainedConfig"),La=a(` and can be used to control the model outputs. Read the
documentation from `),Ao=i("a"),Ia=a("PretrainedConfig"),Da=a(" for more information."),Ba=m(),k(Ie.$$.fragment),Ts=m(),ge=i("h2"),De=i("a"),fn=i("span"),k(Mt.$$.fragment),Wa=m(),gn=i("span"),Ha=a("NezhaModel"),ys=m(),M=i("div"),k(xt.$$.fragment),Qa=m(),_n=i("p"),Ua=a("The bare Nezha Model transformer outputting raw hidden-states without any specific head on top."),Va=m(),jt=i("p"),Ra=a("This model inherits from "),Oo=i("a"),Za=a("PreTrainedModel"),Ja=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ka=m(),Pt=i("p"),Ga=a("This model is also a PyTorch "),qt=i("a"),Xa=a("torch.nn.Module"),Ya=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),er=m(),Ct=i("p"),tr=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Et=i("a"),or=a(`Attention is
all you need`),nr=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),sr=m(),j=i("p"),ar=a("To behave as an decoder the model needs to be initialized with the "),bn=i("code"),rr=a("is_decoder"),ir=a(` argument of the configuration set
to `),zn=i("code"),lr=a("True"),dr=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),kn=i("code"),cr=a("is_decoder"),hr=a(` argument and
`),vn=i("code"),pr=a("add_cross_attention"),mr=a(" set to "),$n=i("code"),ur=a("True"),fr=a("; an "),wn=i("code"),gr=a("encoder_hidden_states"),_r=a(" is then expected as an input to the forward pass."),br=m(),J=i("div"),k(At.$$.fragment),zr=m(),_e=i("p"),kr=a("The "),So=i("a"),vr=a("NezhaModel"),$r=a(" forward method, overrides the "),Tn=i("code"),wr=a("__call__"),Tr=a(" special method."),yr=m(),k(Be.$$.fragment),Nr=m(),k(We.$$.fragment),Ns=m(),be=i("h2"),He=i("a"),yn=i("span"),k(Ot.$$.fragment),Fr=m(),Nn=i("span"),Mr=a("NezhaForPreTraining"),Fs=m(),q=i("div"),k(St.$$.fragment),xr=m(),ze=i("p"),jr=a("Nezha Model with two heads on top as done during the pretraining: a "),Fn=i("code"),Pr=a("masked language modeling"),qr=a(" head and a "),Mn=i("code"),Cr=a("next sentence prediction (classification)"),Er=a(" head."),Ar=m(),Lt=i("p"),Or=a("This model inherits from "),Lo=i("a"),Sr=a("PreTrainedModel"),Lr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ir=m(),It=i("p"),Dr=a("This model is also a PyTorch "),Dt=i("a"),Br=a("torch.nn.Module"),Wr=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hr=m(),K=i("div"),k(Bt.$$.fragment),Qr=m(),ke=i("p"),Ur=a("The "),Io=i("a"),Vr=a("NezhaForPreTraining"),Rr=a(" forward method, overrides the "),xn=i("code"),Zr=a("__call__"),Jr=a(" special method."),Kr=m(),k(Qe.$$.fragment),Gr=m(),k(Ue.$$.fragment),Ms=m(),ve=i("h2"),Ve=i("a"),jn=i("span"),k(Wt.$$.fragment),Xr=m(),Pn=i("span"),Yr=a("NezhaForMaskedLM"),xs=m(),C=i("div"),k(Ht.$$.fragment),ei=m(),Qt=i("p"),ti=a("Nezha Model with a "),qn=i("code"),oi=a("language modeling"),ni=a(" head on top."),si=m(),Ut=i("p"),ai=a("This model inherits from "),Do=i("a"),ri=a("PreTrainedModel"),ii=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),li=m(),Vt=i("p"),di=a("This model is also a PyTorch "),Rt=i("a"),ci=a("torch.nn.Module"),hi=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pi=m(),W=i("div"),k(Zt.$$.fragment),mi=m(),$e=i("p"),ui=a("The "),Bo=i("a"),fi=a("NezhaForMaskedLM"),gi=a(" forward method, overrides the "),Cn=i("code"),_i=a("__call__"),bi=a(" special method."),zi=m(),k(Re.$$.fragment),ki=m(),k(Ze.$$.fragment),vi=m(),k(Je.$$.fragment),js=m(),we=i("h2"),Ke=i("a"),En=i("span"),k(Jt.$$.fragment),$i=m(),An=i("span"),wi=a("NezhaForNextSentencePrediction"),Ps=m(),E=i("div"),k(Kt.$$.fragment),Ti=m(),Gt=i("p"),yi=a("Nezha Model with a "),On=i("code"),Ni=a("next sentence prediction (classification)"),Fi=a(" head on top."),Mi=m(),Xt=i("p"),xi=a("This model inherits from "),Wo=i("a"),ji=a("PreTrainedModel"),Pi=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qi=m(),Yt=i("p"),Ci=a("This model is also a PyTorch "),eo=i("a"),Ei=a("torch.nn.Module"),Ai=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Oi=m(),G=i("div"),k(to.$$.fragment),Si=m(),Te=i("p"),Li=a("The "),Ho=i("a"),Ii=a("NezhaForNextSentencePrediction"),Di=a(" forward method, overrides the "),Sn=i("code"),Bi=a("__call__"),Wi=a(" special method."),Hi=m(),k(Ge.$$.fragment),Qi=m(),k(Xe.$$.fragment),qs=m(),ye=i("h2"),Ye=i("a"),Ln=i("span"),k(oo.$$.fragment),Ui=m(),In=i("span"),Vi=a("NezhaForSequenceClassification"),Cs=m(),A=i("div"),k(no.$$.fragment),Ri=m(),Dn=i("p"),Zi=a(`Nezha Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Ji=m(),so=i("p"),Ki=a("This model inherits from "),Qo=i("a"),Gi=a("PreTrainedModel"),Xi=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yi=m(),ao=i("p"),el=a("This model is also a PyTorch "),ro=i("a"),tl=a("torch.nn.Module"),ol=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nl=m(),x=i("div"),k(io.$$.fragment),sl=m(),Ne=i("p"),al=a("The "),Uo=i("a"),rl=a("NezhaForSequenceClassification"),il=a(" forward method, overrides the "),Bn=i("code"),ll=a("__call__"),dl=a(" special method."),cl=m(),k(et.$$.fragment),hl=m(),k(tt.$$.fragment),pl=m(),k(ot.$$.fragment),ml=m(),k(nt.$$.fragment),ul=m(),k(st.$$.fragment),Es=m(),Fe=i("h2"),at=i("a"),Wn=i("span"),k(lo.$$.fragment),fl=m(),Hn=i("span"),gl=a("NezhaForMultipleChoice"),As=m(),O=i("div"),k(co.$$.fragment),_l=m(),Qn=i("p"),bl=a(`Nezha Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),zl=m(),ho=i("p"),kl=a("This model inherits from "),Vo=i("a"),vl=a("PreTrainedModel"),$l=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wl=m(),po=i("p"),Tl=a("This model is also a PyTorch "),mo=i("a"),yl=a("torch.nn.Module"),Nl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fl=m(),X=i("div"),k(uo.$$.fragment),Ml=m(),Me=i("p"),xl=a("The "),Ro=i("a"),jl=a("NezhaForMultipleChoice"),Pl=a(" forward method, overrides the "),Un=i("code"),ql=a("__call__"),Cl=a(" special method."),El=m(),k(rt.$$.fragment),Al=m(),k(it.$$.fragment),Os=m(),xe=i("h2"),lt=i("a"),Vn=i("span"),k(fo.$$.fragment),Ol=m(),Rn=i("span"),Sl=a("NezhaForTokenClassification"),Ss=m(),S=i("div"),k(go.$$.fragment),Ll=m(),Zn=i("p"),Il=a(`Nezha Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Dl=m(),_o=i("p"),Bl=a("This model inherits from "),Zo=i("a"),Wl=a("PreTrainedModel"),Hl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ql=m(),bo=i("p"),Ul=a("This model is also a PyTorch "),zo=i("a"),Vl=a("torch.nn.Module"),Rl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zl=m(),H=i("div"),k(ko.$$.fragment),Jl=m(),je=i("p"),Kl=a("The "),Jo=i("a"),Gl=a("NezhaForTokenClassification"),Xl=a(" forward method, overrides the "),Jn=i("code"),Yl=a("__call__"),ed=a(" special method."),td=m(),k(dt.$$.fragment),od=m(),k(ct.$$.fragment),nd=m(),k(ht.$$.fragment),Ls=m(),Pe=i("h2"),pt=i("a"),Kn=i("span"),k(vo.$$.fragment),sd=m(),Gn=i("span"),ad=a("NezhaForQuestionAnswering"),Is=m(),L=i("div"),k($o.$$.fragment),rd=m(),qe=i("p"),id=a(`Nezha Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Xn=i("code"),ld=a("span start logits"),dd=a(" and "),Yn=i("code"),cd=a("span end logits"),hd=a(")."),pd=m(),wo=i("p"),md=a("This model inherits from "),Ko=i("a"),ud=a("PreTrainedModel"),fd=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd=m(),To=i("p"),_d=a("This model is also a PyTorch "),yo=i("a"),bd=a("torch.nn.Module"),zd=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kd=m(),Q=i("div"),k(No.$$.fragment),vd=m(),Ce=i("p"),$d=a("The "),Go=i("a"),wd=a("NezhaForQuestionAnswering"),Td=a(" forward method, overrides the "),es=i("code"),yd=a("__call__"),Nd=a(" special method."),Fd=m(),k(mt.$$.fragment),Md=m(),k(ut.$$.fragment),xd=m(),k(ft.$$.fragment),this.h()},l(t){const _=th('[data-svelte="svelte-1phssyn"]',document.head);s=l(_,"META",{name:!0,content:!0}),_.forEach(o),g=u(t),c=l(t,"H1",{class:!0});var Fo=d(c);h=l(Fo,"A",{id:!0,class:!0,href:!0});var ts=d(h);b=l(ts,"SPAN",{});var os=d(b);v(n.$$.fragment,os),os.forEach(o),ts.forEach(o),p=u(Fo),F=l(Fo,"SPAN",{});var ns=d(F);ua=r(ns,"Nezha"),ns.forEach(o),Fo.forEach(o),_s=u(t),pe=l(t,"H2",{class:!0});var Mo=d(pe);Oe=l(Mo,"A",{id:!0,class:!0,href:!0});var ss=d(Oe);cn=l(ss,"SPAN",{});var as=d(cn);v(vt.$$.fragment,as),as.forEach(o),ss.forEach(o),fa=u(Mo),hn=l(Mo,"SPAN",{});var rs=d(hn);ga=r(rs,"Overview"),rs.forEach(o),Mo.forEach(o),bs=u(t),Se=l(t,"P",{});var xo=d(Se);_a=r(xo,"The Nezha model was proposed in "),$t=l(xo,"A",{href:!0,rel:!0});var is=d($t);ba=r(is,"NEZHA: Neural Contextualized Representation for Chinese Language Understanding"),is.forEach(o),za=r(xo," by Junqiu Wei et al."),xo.forEach(o),zs=u(t),Po=l(t,"P",{});var ls=d(Po);ka=r(ls,"The abstract from the paper is the following:"),ls.forEach(o),ks=u(t),qo=l(t,"P",{});var ds=d(qo);pn=l(ds,"EM",{});var cs=d(pn);va=r(cs,`The pre-trained language models have achieved great successes in various natural language understanding (NLU) tasks
due to its capacity to capture the deep contextualized information in text by pre-training on large-scale corpora.
In this technical report, we present our practice of pre-training language models named NEZHA (NEural contextualiZed
representation for CHinese lAnguage understanding) on Chinese corpora and finetuning for the Chinese NLU tasks.
The current version of NEZHA is based on BERT with a collection of proven improvements, which include Functional
Relative Positional Encoding as an effective positional encoding scheme, Whole Word Masking strategy,
Mixed Precision Training and the LAMB Optimizer in training the models. The experimental results show that NEZHA
achieves the state-of-the-art performances when finetuned on several representative Chinese tasks, including
named entity recognition (People\u2019s Daily NER), sentence matching (LCQMC), Chinese sentiment classification (ChnSenti)
and natural language inference (XNLI).`),cs.forEach(o),ds.forEach(o),vs=u(t),te=l(t,"P",{});var Ee=d(te);$a=r(Ee,"This model was contributed by "),wt=l(Ee,"A",{href:!0,rel:!0});var hs=d(wt);wa=r(hs,"sijunhe"),hs.forEach(o),Ta=r(Ee,". The original code can be found "),Tt=l(Ee,"A",{href:!0,rel:!0});var ps=d(Tt);ya=r(ps,"here"),ps.forEach(o),Na=r(Ee,"."),Ee.forEach(o),$s=u(t),me=l(t,"H2",{class:!0});var jo=d(me);Le=l(jo,"A",{id:!0,class:!0,href:!0});var ms=d(Le);mn=l(ms,"SPAN",{});var us=d(mn);v(yt.$$.fragment,us),us.forEach(o),ms.forEach(o),Fa=u(jo),un=l(jo,"SPAN",{});var fs=d(un);Ma=r(fs,"NezhaConfig"),fs.forEach(o),jo.forEach(o),ws=u(t),Z=l(t,"DIV",{class:!0});var Y=d(Z);v(Nt.$$.fragment,Y),xa=u(Y),ue=l(Y,"P",{});var Ae=d(ue);ja=r(Ae,"This is the configuration class to store the configuration of an "),Co=l(Ae,"A",{href:!0});var gs=d(Co);Pa=r(gs,"NezhaModel"),gs.forEach(o),qa=r(Ae,`. It is used to instantiate an Nezha
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Nezha
`),Ft=l(Ae,"A",{href:!0,rel:!0});var jd=d(Ft);Ca=r(jd,"sijunhe/nezha-cn-base"),jd.forEach(o),Ea=r(Ae," architecture."),Ae.forEach(o),Aa=u(Y),fe=l(Y,"P",{});var Xo=d(fe);Oa=r(Xo,"Configuration objects inherit from "),Eo=l(Xo,"A",{href:!0});var Pd=d(Eo);Sa=r(Pd,"PretrainedConfig"),Pd.forEach(o),La=r(Xo,` and can be used to control the model outputs. Read the
documentation from `),Ao=l(Xo,"A",{href:!0});var qd=d(Ao);Ia=r(qd,"PretrainedConfig"),qd.forEach(o),Da=r(Xo," for more information."),Xo.forEach(o),Ba=u(Y),v(Ie.$$.fragment,Y),Y.forEach(o),Ts=u(t),ge=l(t,"H2",{class:!0});var Bs=d(ge);De=l(Bs,"A",{id:!0,class:!0,href:!0});var Cd=d(De);fn=l(Cd,"SPAN",{});var Ed=d(fn);v(Mt.$$.fragment,Ed),Ed.forEach(o),Cd.forEach(o),Wa=u(Bs),gn=l(Bs,"SPAN",{});var Ad=d(gn);Ha=r(Ad,"NezhaModel"),Ad.forEach(o),Bs.forEach(o),ys=u(t),M=l(t,"DIV",{class:!0});var U=d(M);v(xt.$$.fragment,U),Qa=u(U),_n=l(U,"P",{});var Od=d(_n);Ua=r(Od,"The bare Nezha Model transformer outputting raw hidden-states without any specific head on top."),Od.forEach(o),Va=u(U),jt=l(U,"P",{});var Ws=d(jt);Ra=r(Ws,"This model inherits from "),Oo=l(Ws,"A",{href:!0});var Sd=d(Oo);Za=r(Sd,"PreTrainedModel"),Sd.forEach(o),Ja=r(Ws,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ws.forEach(o),Ka=u(U),Pt=l(U,"P",{});var Hs=d(Pt);Ga=r(Hs,"This model is also a PyTorch "),qt=l(Hs,"A",{href:!0,rel:!0});var Ld=d(qt);Xa=r(Ld,"torch.nn.Module"),Ld.forEach(o),Ya=r(Hs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hs.forEach(o),er=u(U),Ct=l(U,"P",{});var Qs=d(Ct);tr=r(Qs,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Et=l(Qs,"A",{href:!0,rel:!0});var Id=d(Et);or=r(Id,`Attention is
all you need`),Id.forEach(o),nr=r(Qs,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Qs.forEach(o),sr=u(U),j=l(U,"P",{});var V=d(j);ar=r(V,"To behave as an decoder the model needs to be initialized with the "),bn=l(V,"CODE",{});var Dd=d(bn);rr=r(Dd,"is_decoder"),Dd.forEach(o),ir=r(V,` argument of the configuration set
to `),zn=l(V,"CODE",{});var Bd=d(zn);lr=r(Bd,"True"),Bd.forEach(o),dr=r(V,". To be used in a Seq2Seq model, the model needs to initialized with both "),kn=l(V,"CODE",{});var Wd=d(kn);cr=r(Wd,"is_decoder"),Wd.forEach(o),hr=r(V,` argument and
`),vn=l(V,"CODE",{});var Hd=d(vn);pr=r(Hd,"add_cross_attention"),Hd.forEach(o),mr=r(V," set to "),$n=l(V,"CODE",{});var Qd=d($n);ur=r(Qd,"True"),Qd.forEach(o),fr=r(V,"; an "),wn=l(V,"CODE",{});var Ud=d(wn);gr=r(Ud,"encoder_hidden_states"),Ud.forEach(o),_r=r(V," is then expected as an input to the forward pass."),V.forEach(o),br=u(U),J=l(U,"DIV",{class:!0});var gt=d(J);v(At.$$.fragment,gt),zr=u(gt),_e=l(gt,"P",{});var Yo=d(_e);kr=r(Yo,"The "),So=l(Yo,"A",{href:!0});var Vd=d(So);vr=r(Vd,"NezhaModel"),Vd.forEach(o),$r=r(Yo," forward method, overrides the "),Tn=l(Yo,"CODE",{});var Rd=d(Tn);wr=r(Rd,"__call__"),Rd.forEach(o),Tr=r(Yo," special method."),Yo.forEach(o),yr=u(gt),v(Be.$$.fragment,gt),Nr=u(gt),v(We.$$.fragment,gt),gt.forEach(o),U.forEach(o),Ns=u(t),be=l(t,"H2",{class:!0});var Us=d(be);He=l(Us,"A",{id:!0,class:!0,href:!0});var Zd=d(He);yn=l(Zd,"SPAN",{});var Jd=d(yn);v(Ot.$$.fragment,Jd),Jd.forEach(o),Zd.forEach(o),Fr=u(Us),Nn=l(Us,"SPAN",{});var Kd=d(Nn);Mr=r(Kd,"NezhaForPreTraining"),Kd.forEach(o),Us.forEach(o),Fs=u(t),q=l(t,"DIV",{class:!0});var oe=d(q);v(St.$$.fragment,oe),xr=u(oe),ze=l(oe,"P",{});var en=d(ze);jr=r(en,"Nezha Model with two heads on top as done during the pretraining: a "),Fn=l(en,"CODE",{});var Gd=d(Fn);Pr=r(Gd,"masked language modeling"),Gd.forEach(o),qr=r(en," head and a "),Mn=l(en,"CODE",{});var Xd=d(Mn);Cr=r(Xd,"next sentence prediction (classification)"),Xd.forEach(o),Er=r(en," head."),en.forEach(o),Ar=u(oe),Lt=l(oe,"P",{});var Vs=d(Lt);Or=r(Vs,"This model inherits from "),Lo=l(Vs,"A",{href:!0});var Yd=d(Lo);Sr=r(Yd,"PreTrainedModel"),Yd.forEach(o),Lr=r(Vs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vs.forEach(o),Ir=u(oe),It=l(oe,"P",{});var Rs=d(It);Dr=r(Rs,"This model is also a PyTorch "),Dt=l(Rs,"A",{href:!0,rel:!0});var ec=d(Dt);Br=r(ec,"torch.nn.Module"),ec.forEach(o),Wr=r(Rs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rs.forEach(o),Hr=u(oe),K=l(oe,"DIV",{class:!0});var _t=d(K);v(Bt.$$.fragment,_t),Qr=u(_t),ke=l(_t,"P",{});var tn=d(ke);Ur=r(tn,"The "),Io=l(tn,"A",{href:!0});var tc=d(Io);Vr=r(tc,"NezhaForPreTraining"),tc.forEach(o),Rr=r(tn," forward method, overrides the "),xn=l(tn,"CODE",{});var oc=d(xn);Zr=r(oc,"__call__"),oc.forEach(o),Jr=r(tn," special method."),tn.forEach(o),Kr=u(_t),v(Qe.$$.fragment,_t),Gr=u(_t),v(Ue.$$.fragment,_t),_t.forEach(o),oe.forEach(o),Ms=u(t),ve=l(t,"H2",{class:!0});var Zs=d(ve);Ve=l(Zs,"A",{id:!0,class:!0,href:!0});var nc=d(Ve);jn=l(nc,"SPAN",{});var sc=d(jn);v(Wt.$$.fragment,sc),sc.forEach(o),nc.forEach(o),Xr=u(Zs),Pn=l(Zs,"SPAN",{});var ac=d(Pn);Yr=r(ac,"NezhaForMaskedLM"),ac.forEach(o),Zs.forEach(o),xs=u(t),C=l(t,"DIV",{class:!0});var ne=d(C);v(Ht.$$.fragment,ne),ei=u(ne),Qt=l(ne,"P",{});var Js=d(Qt);ti=r(Js,"Nezha Model with a "),qn=l(Js,"CODE",{});var rc=d(qn);oi=r(rc,"language modeling"),rc.forEach(o),ni=r(Js," head on top."),Js.forEach(o),si=u(ne),Ut=l(ne,"P",{});var Ks=d(Ut);ai=r(Ks,"This model inherits from "),Do=l(Ks,"A",{href:!0});var ic=d(Do);ri=r(ic,"PreTrainedModel"),ic.forEach(o),ii=r(Ks,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ks.forEach(o),li=u(ne),Vt=l(ne,"P",{});var Gs=d(Vt);di=r(Gs,"This model is also a PyTorch "),Rt=l(Gs,"A",{href:!0,rel:!0});var lc=d(Rt);ci=r(lc,"torch.nn.Module"),lc.forEach(o),hi=r(Gs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gs.forEach(o),pi=u(ne),W=l(ne,"DIV",{class:!0});var se=d(W);v(Zt.$$.fragment,se),mi=u(se),$e=l(se,"P",{});var on=d($e);ui=r(on,"The "),Bo=l(on,"A",{href:!0});var dc=d(Bo);fi=r(dc,"NezhaForMaskedLM"),dc.forEach(o),gi=r(on," forward method, overrides the "),Cn=l(on,"CODE",{});var cc=d(Cn);_i=r(cc,"__call__"),cc.forEach(o),bi=r(on," special method."),on.forEach(o),zi=u(se),v(Re.$$.fragment,se),ki=u(se),v(Ze.$$.fragment,se),vi=u(se),v(Je.$$.fragment,se),se.forEach(o),ne.forEach(o),js=u(t),we=l(t,"H2",{class:!0});var Xs=d(we);Ke=l(Xs,"A",{id:!0,class:!0,href:!0});var hc=d(Ke);En=l(hc,"SPAN",{});var pc=d(En);v(Jt.$$.fragment,pc),pc.forEach(o),hc.forEach(o),$i=u(Xs),An=l(Xs,"SPAN",{});var mc=d(An);wi=r(mc,"NezhaForNextSentencePrediction"),mc.forEach(o),Xs.forEach(o),Ps=u(t),E=l(t,"DIV",{class:!0});var ae=d(E);v(Kt.$$.fragment,ae),Ti=u(ae),Gt=l(ae,"P",{});var Ys=d(Gt);yi=r(Ys,"Nezha Model with a "),On=l(Ys,"CODE",{});var uc=d(On);Ni=r(uc,"next sentence prediction (classification)"),uc.forEach(o),Fi=r(Ys," head on top."),Ys.forEach(o),Mi=u(ae),Xt=l(ae,"P",{});var ea=d(Xt);xi=r(ea,"This model inherits from "),Wo=l(ea,"A",{href:!0});var fc=d(Wo);ji=r(fc,"PreTrainedModel"),fc.forEach(o),Pi=r(ea,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ea.forEach(o),qi=u(ae),Yt=l(ae,"P",{});var ta=d(Yt);Ci=r(ta,"This model is also a PyTorch "),eo=l(ta,"A",{href:!0,rel:!0});var gc=d(eo);Ei=r(gc,"torch.nn.Module"),gc.forEach(o),Ai=r(ta,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ta.forEach(o),Oi=u(ae),G=l(ae,"DIV",{class:!0});var bt=d(G);v(to.$$.fragment,bt),Si=u(bt),Te=l(bt,"P",{});var nn=d(Te);Li=r(nn,"The "),Ho=l(nn,"A",{href:!0});var _c=d(Ho);Ii=r(_c,"NezhaForNextSentencePrediction"),_c.forEach(o),Di=r(nn," forward method, overrides the "),Sn=l(nn,"CODE",{});var bc=d(Sn);Bi=r(bc,"__call__"),bc.forEach(o),Wi=r(nn," special method."),nn.forEach(o),Hi=u(bt),v(Ge.$$.fragment,bt),Qi=u(bt),v(Xe.$$.fragment,bt),bt.forEach(o),ae.forEach(o),qs=u(t),ye=l(t,"H2",{class:!0});var oa=d(ye);Ye=l(oa,"A",{id:!0,class:!0,href:!0});var zc=d(Ye);Ln=l(zc,"SPAN",{});var kc=d(Ln);v(oo.$$.fragment,kc),kc.forEach(o),zc.forEach(o),Ui=u(oa),In=l(oa,"SPAN",{});var vc=d(In);Vi=r(vc,"NezhaForSequenceClassification"),vc.forEach(o),oa.forEach(o),Cs=u(t),A=l(t,"DIV",{class:!0});var re=d(A);v(no.$$.fragment,re),Ri=u(re),Dn=l(re,"P",{});var $c=d(Dn);Zi=r($c,`Nezha Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$c.forEach(o),Ji=u(re),so=l(re,"P",{});var na=d(so);Ki=r(na,"This model inherits from "),Qo=l(na,"A",{href:!0});var wc=d(Qo);Gi=r(wc,"PreTrainedModel"),wc.forEach(o),Xi=r(na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),na.forEach(o),Yi=u(re),ao=l(re,"P",{});var sa=d(ao);el=r(sa,"This model is also a PyTorch "),ro=l(sa,"A",{href:!0,rel:!0});var Tc=d(ro);tl=r(Tc,"torch.nn.Module"),Tc.forEach(o),ol=r(sa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sa.forEach(o),nl=u(re),x=l(re,"DIV",{class:!0});var R=d(x);v(io.$$.fragment,R),sl=u(R),Ne=l(R,"P",{});var sn=d(Ne);al=r(sn,"The "),Uo=l(sn,"A",{href:!0});var yc=d(Uo);rl=r(yc,"NezhaForSequenceClassification"),yc.forEach(o),il=r(sn," forward method, overrides the "),Bn=l(sn,"CODE",{});var Nc=d(Bn);ll=r(Nc,"__call__"),Nc.forEach(o),dl=r(sn," special method."),sn.forEach(o),cl=u(R),v(et.$$.fragment,R),hl=u(R),v(tt.$$.fragment,R),pl=u(R),v(ot.$$.fragment,R),ml=u(R),v(nt.$$.fragment,R),ul=u(R),v(st.$$.fragment,R),R.forEach(o),re.forEach(o),Es=u(t),Fe=l(t,"H2",{class:!0});var aa=d(Fe);at=l(aa,"A",{id:!0,class:!0,href:!0});var Fc=d(at);Wn=l(Fc,"SPAN",{});var Mc=d(Wn);v(lo.$$.fragment,Mc),Mc.forEach(o),Fc.forEach(o),fl=u(aa),Hn=l(aa,"SPAN",{});var xc=d(Hn);gl=r(xc,"NezhaForMultipleChoice"),xc.forEach(o),aa.forEach(o),As=u(t),O=l(t,"DIV",{class:!0});var ie=d(O);v(co.$$.fragment,ie),_l=u(ie),Qn=l(ie,"P",{});var jc=d(Qn);bl=r(jc,`Nezha Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),jc.forEach(o),zl=u(ie),ho=l(ie,"P",{});var ra=d(ho);kl=r(ra,"This model inherits from "),Vo=l(ra,"A",{href:!0});var Pc=d(Vo);vl=r(Pc,"PreTrainedModel"),Pc.forEach(o),$l=r(ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ra.forEach(o),wl=u(ie),po=l(ie,"P",{});var ia=d(po);Tl=r(ia,"This model is also a PyTorch "),mo=l(ia,"A",{href:!0,rel:!0});var qc=d(mo);yl=r(qc,"torch.nn.Module"),qc.forEach(o),Nl=r(ia,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ia.forEach(o),Fl=u(ie),X=l(ie,"DIV",{class:!0});var zt=d(X);v(uo.$$.fragment,zt),Ml=u(zt),Me=l(zt,"P",{});var an=d(Me);xl=r(an,"The "),Ro=l(an,"A",{href:!0});var Cc=d(Ro);jl=r(Cc,"NezhaForMultipleChoice"),Cc.forEach(o),Pl=r(an," forward method, overrides the "),Un=l(an,"CODE",{});var Ec=d(Un);ql=r(Ec,"__call__"),Ec.forEach(o),Cl=r(an," special method."),an.forEach(o),El=u(zt),v(rt.$$.fragment,zt),Al=u(zt),v(it.$$.fragment,zt),zt.forEach(o),ie.forEach(o),Os=u(t),xe=l(t,"H2",{class:!0});var la=d(xe);lt=l(la,"A",{id:!0,class:!0,href:!0});var Ac=d(lt);Vn=l(Ac,"SPAN",{});var Oc=d(Vn);v(fo.$$.fragment,Oc),Oc.forEach(o),Ac.forEach(o),Ol=u(la),Rn=l(la,"SPAN",{});var Sc=d(Rn);Sl=r(Sc,"NezhaForTokenClassification"),Sc.forEach(o),la.forEach(o),Ss=u(t),S=l(t,"DIV",{class:!0});var le=d(S);v(go.$$.fragment,le),Ll=u(le),Zn=l(le,"P",{});var Lc=d(Zn);Il=r(Lc,`Nezha Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Lc.forEach(o),Dl=u(le),_o=l(le,"P",{});var da=d(_o);Bl=r(da,"This model inherits from "),Zo=l(da,"A",{href:!0});var Ic=d(Zo);Wl=r(Ic,"PreTrainedModel"),Ic.forEach(o),Hl=r(da,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),da.forEach(o),Ql=u(le),bo=l(le,"P",{});var ca=d(bo);Ul=r(ca,"This model is also a PyTorch "),zo=l(ca,"A",{href:!0,rel:!0});var Dc=d(zo);Vl=r(Dc,"torch.nn.Module"),Dc.forEach(o),Rl=r(ca,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ca.forEach(o),Zl=u(le),H=l(le,"DIV",{class:!0});var de=d(H);v(ko.$$.fragment,de),Jl=u(de),je=l(de,"P",{});var rn=d(je);Kl=r(rn,"The "),Jo=l(rn,"A",{href:!0});var Bc=d(Jo);Gl=r(Bc,"NezhaForTokenClassification"),Bc.forEach(o),Xl=r(rn," forward method, overrides the "),Jn=l(rn,"CODE",{});var Wc=d(Jn);Yl=r(Wc,"__call__"),Wc.forEach(o),ed=r(rn," special method."),rn.forEach(o),td=u(de),v(dt.$$.fragment,de),od=u(de),v(ct.$$.fragment,de),nd=u(de),v(ht.$$.fragment,de),de.forEach(o),le.forEach(o),Ls=u(t),Pe=l(t,"H2",{class:!0});var ha=d(Pe);pt=l(ha,"A",{id:!0,class:!0,href:!0});var Hc=d(pt);Kn=l(Hc,"SPAN",{});var Qc=d(Kn);v(vo.$$.fragment,Qc),Qc.forEach(o),Hc.forEach(o),sd=u(ha),Gn=l(ha,"SPAN",{});var Uc=d(Gn);ad=r(Uc,"NezhaForQuestionAnswering"),Uc.forEach(o),ha.forEach(o),Is=u(t),L=l(t,"DIV",{class:!0});var ce=d(L);v($o.$$.fragment,ce),rd=u(ce),qe=l(ce,"P",{});var ln=d(qe);id=r(ln,`Nezha Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Xn=l(ln,"CODE",{});var Vc=d(Xn);ld=r(Vc,"span start logits"),Vc.forEach(o),dd=r(ln," and "),Yn=l(ln,"CODE",{});var Rc=d(Yn);cd=r(Rc,"span end logits"),Rc.forEach(o),hd=r(ln,")."),ln.forEach(o),pd=u(ce),wo=l(ce,"P",{});var pa=d(wo);md=r(pa,"This model inherits from "),Ko=l(pa,"A",{href:!0});var Zc=d(Ko);ud=r(Zc,"PreTrainedModel"),Zc.forEach(o),fd=r(pa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pa.forEach(o),gd=u(ce),To=l(ce,"P",{});var ma=d(To);_d=r(ma,"This model is also a PyTorch "),yo=l(ma,"A",{href:!0,rel:!0});var Jc=d(yo);bd=r(Jc,"torch.nn.Module"),Jc.forEach(o),zd=r(ma,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ma.forEach(o),kd=u(ce),Q=l(ce,"DIV",{class:!0});var he=d(Q);v(No.$$.fragment,he),vd=u(he),Ce=l(he,"P",{});var dn=d(Ce);$d=r(dn,"The "),Go=l(dn,"A",{href:!0});var Kc=d(Go);wd=r(Kc,"NezhaForQuestionAnswering"),Kc.forEach(o),Td=r(dn," forward method, overrides the "),es=l(dn,"CODE",{});var Gc=d(es);yd=r(Gc,"__call__"),Gc.forEach(o),Nd=r(dn," special method."),dn.forEach(o),Fd=u(he),v(mt.$$.fragment,he),Md=u(he),v(ut.$$.fragment,he),xd=u(he),v(ft.$$.fragment,he),he.forEach(o),ce.forEach(o),this.h()},h(){f(s,"name","hf:doc:metadata"),f(s,"content",JSON.stringify(Fh)),f(h,"id","nezha"),f(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(h,"href","#nezha"),f(c,"class","relative group"),f(Oe,"id","overview"),f(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Oe,"href","#overview"),f(pe,"class","relative group"),f($t,"href","https://arxiv.org/abs/1909.00204"),f($t,"rel","nofollow"),f(wt,"href","https://huggingface.co/sijunhe"),f(wt,"rel","nofollow"),f(Tt,"href","https://github.com/huawei-noah/Pretrained-Language-Model/tree/master/NEZHA-PyTorch"),f(Tt,"rel","nofollow"),f(Le,"id","transformers.NezhaConfig"),f(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Le,"href","#transformers.NezhaConfig"),f(me,"class","relative group"),f(Co,"href","/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaModel"),f(Ft,"href","https://huggingface.co/sijunhe/nezha-cn-base"),f(Ft,"rel","nofollow"),f(Eo,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),f(Ao,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(De,"id","transformers.NezhaModel"),f(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(De,"href","#transformers.NezhaModel"),f(ge,"class","relative group"),f(Oo,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),f(qt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(qt,"rel","nofollow"),f(Et,"href","https://arxiv.org/abs/1706.03762"),f(Et,"rel","nofollow"),f(So,"href","/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaModel"),f(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(He,"id","transformers.NezhaForPreTraining"),f(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(He,"href","#transformers.NezhaForPreTraining"),f(be,"class","relative group"),f(Lo,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),f(Dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Dt,"rel","nofollow"),f(Io,"href","/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaForPreTraining"),f(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ve,"id","transformers.NezhaForMaskedLM"),f(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ve,"href","#transformers.NezhaForMaskedLM"),f(ve,"class","relative group"),f(Do,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),f(Rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Rt,"rel","nofollow"),f(Bo,"href","/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaForMaskedLM"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ke,"id","transformers.NezhaForNextSentencePrediction"),f(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ke,"href","#transformers.NezhaForNextSentencePrediction"),f(we,"class","relative group"),f(Wo,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),f(eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(eo,"rel","nofollow"),f(Ho,"href","/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaForNextSentencePrediction"),f(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ye,"id","transformers.NezhaForSequenceClassification"),f(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ye,"href","#transformers.NezhaForSequenceClassification"),f(ye,"class","relative group"),f(Qo,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),f(ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ro,"rel","nofollow"),f(Uo,"href","/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaForSequenceClassification"),f(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"id","transformers.NezhaForMultipleChoice"),f(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(at,"href","#transformers.NezhaForMultipleChoice"),f(Fe,"class","relative group"),f(Vo,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),f(mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(mo,"rel","nofollow"),f(Ro,"href","/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaForMultipleChoice"),f(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lt,"id","transformers.NezhaForTokenClassification"),f(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(lt,"href","#transformers.NezhaForTokenClassification"),f(xe,"class","relative group"),f(Zo,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),f(zo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(zo,"rel","nofollow"),f(Jo,"href","/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaForTokenClassification"),f(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"id","transformers.NezhaForQuestionAnswering"),f(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pt,"href","#transformers.NezhaForQuestionAnswering"),f(Pe,"class","relative group"),f(Ko,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),f(yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(yo,"rel","nofollow"),f(Go,"href","/docs/transformers/v4.21.1/en/model_doc/nezha#transformers.NezhaForQuestionAnswering"),f(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,s),z(t,g,_),z(t,c,_),e(c,h),e(h,b),$(n,b,null),e(c,p),e(c,F),e(F,ua),z(t,_s,_),z(t,pe,_),e(pe,Oe),e(Oe,cn),$(vt,cn,null),e(pe,fa),e(pe,hn),e(hn,ga),z(t,bs,_),z(t,Se,_),e(Se,_a),e(Se,$t),e($t,ba),e(Se,za),z(t,zs,_),z(t,Po,_),e(Po,ka),z(t,ks,_),z(t,qo,_),e(qo,pn),e(pn,va),z(t,vs,_),z(t,te,_),e(te,$a),e(te,wt),e(wt,wa),e(te,Ta),e(te,Tt),e(Tt,ya),e(te,Na),z(t,$s,_),z(t,me,_),e(me,Le),e(Le,mn),$(yt,mn,null),e(me,Fa),e(me,un),e(un,Ma),z(t,ws,_),z(t,Z,_),$(Nt,Z,null),e(Z,xa),e(Z,ue),e(ue,ja),e(ue,Co),e(Co,Pa),e(ue,qa),e(ue,Ft),e(Ft,Ca),e(ue,Ea),e(Z,Aa),e(Z,fe),e(fe,Oa),e(fe,Eo),e(Eo,Sa),e(fe,La),e(fe,Ao),e(Ao,Ia),e(fe,Da),e(Z,Ba),$(Ie,Z,null),z(t,Ts,_),z(t,ge,_),e(ge,De),e(De,fn),$(Mt,fn,null),e(ge,Wa),e(ge,gn),e(gn,Ha),z(t,ys,_),z(t,M,_),$(xt,M,null),e(M,Qa),e(M,_n),e(_n,Ua),e(M,Va),e(M,jt),e(jt,Ra),e(jt,Oo),e(Oo,Za),e(jt,Ja),e(M,Ka),e(M,Pt),e(Pt,Ga),e(Pt,qt),e(qt,Xa),e(Pt,Ya),e(M,er),e(M,Ct),e(Ct,tr),e(Ct,Et),e(Et,or),e(Ct,nr),e(M,sr),e(M,j),e(j,ar),e(j,bn),e(bn,rr),e(j,ir),e(j,zn),e(zn,lr),e(j,dr),e(j,kn),e(kn,cr),e(j,hr),e(j,vn),e(vn,pr),e(j,mr),e(j,$n),e($n,ur),e(j,fr),e(j,wn),e(wn,gr),e(j,_r),e(M,br),e(M,J),$(At,J,null),e(J,zr),e(J,_e),e(_e,kr),e(_e,So),e(So,vr),e(_e,$r),e(_e,Tn),e(Tn,wr),e(_e,Tr),e(J,yr),$(Be,J,null),e(J,Nr),$(We,J,null),z(t,Ns,_),z(t,be,_),e(be,He),e(He,yn),$(Ot,yn,null),e(be,Fr),e(be,Nn),e(Nn,Mr),z(t,Fs,_),z(t,q,_),$(St,q,null),e(q,xr),e(q,ze),e(ze,jr),e(ze,Fn),e(Fn,Pr),e(ze,qr),e(ze,Mn),e(Mn,Cr),e(ze,Er),e(q,Ar),e(q,Lt),e(Lt,Or),e(Lt,Lo),e(Lo,Sr),e(Lt,Lr),e(q,Ir),e(q,It),e(It,Dr),e(It,Dt),e(Dt,Br),e(It,Wr),e(q,Hr),e(q,K),$(Bt,K,null),e(K,Qr),e(K,ke),e(ke,Ur),e(ke,Io),e(Io,Vr),e(ke,Rr),e(ke,xn),e(xn,Zr),e(ke,Jr),e(K,Kr),$(Qe,K,null),e(K,Gr),$(Ue,K,null),z(t,Ms,_),z(t,ve,_),e(ve,Ve),e(Ve,jn),$(Wt,jn,null),e(ve,Xr),e(ve,Pn),e(Pn,Yr),z(t,xs,_),z(t,C,_),$(Ht,C,null),e(C,ei),e(C,Qt),e(Qt,ti),e(Qt,qn),e(qn,oi),e(Qt,ni),e(C,si),e(C,Ut),e(Ut,ai),e(Ut,Do),e(Do,ri),e(Ut,ii),e(C,li),e(C,Vt),e(Vt,di),e(Vt,Rt),e(Rt,ci),e(Vt,hi),e(C,pi),e(C,W),$(Zt,W,null),e(W,mi),e(W,$e),e($e,ui),e($e,Bo),e(Bo,fi),e($e,gi),e($e,Cn),e(Cn,_i),e($e,bi),e(W,zi),$(Re,W,null),e(W,ki),$(Ze,W,null),e(W,vi),$(Je,W,null),z(t,js,_),z(t,we,_),e(we,Ke),e(Ke,En),$(Jt,En,null),e(we,$i),e(we,An),e(An,wi),z(t,Ps,_),z(t,E,_),$(Kt,E,null),e(E,Ti),e(E,Gt),e(Gt,yi),e(Gt,On),e(On,Ni),e(Gt,Fi),e(E,Mi),e(E,Xt),e(Xt,xi),e(Xt,Wo),e(Wo,ji),e(Xt,Pi),e(E,qi),e(E,Yt),e(Yt,Ci),e(Yt,eo),e(eo,Ei),e(Yt,Ai),e(E,Oi),e(E,G),$(to,G,null),e(G,Si),e(G,Te),e(Te,Li),e(Te,Ho),e(Ho,Ii),e(Te,Di),e(Te,Sn),e(Sn,Bi),e(Te,Wi),e(G,Hi),$(Ge,G,null),e(G,Qi),$(Xe,G,null),z(t,qs,_),z(t,ye,_),e(ye,Ye),e(Ye,Ln),$(oo,Ln,null),e(ye,Ui),e(ye,In),e(In,Vi),z(t,Cs,_),z(t,A,_),$(no,A,null),e(A,Ri),e(A,Dn),e(Dn,Zi),e(A,Ji),e(A,so),e(so,Ki),e(so,Qo),e(Qo,Gi),e(so,Xi),e(A,Yi),e(A,ao),e(ao,el),e(ao,ro),e(ro,tl),e(ao,ol),e(A,nl),e(A,x),$(io,x,null),e(x,sl),e(x,Ne),e(Ne,al),e(Ne,Uo),e(Uo,rl),e(Ne,il),e(Ne,Bn),e(Bn,ll),e(Ne,dl),e(x,cl),$(et,x,null),e(x,hl),$(tt,x,null),e(x,pl),$(ot,x,null),e(x,ml),$(nt,x,null),e(x,ul),$(st,x,null),z(t,Es,_),z(t,Fe,_),e(Fe,at),e(at,Wn),$(lo,Wn,null),e(Fe,fl),e(Fe,Hn),e(Hn,gl),z(t,As,_),z(t,O,_),$(co,O,null),e(O,_l),e(O,Qn),e(Qn,bl),e(O,zl),e(O,ho),e(ho,kl),e(ho,Vo),e(Vo,vl),e(ho,$l),e(O,wl),e(O,po),e(po,Tl),e(po,mo),e(mo,yl),e(po,Nl),e(O,Fl),e(O,X),$(uo,X,null),e(X,Ml),e(X,Me),e(Me,xl),e(Me,Ro),e(Ro,jl),e(Me,Pl),e(Me,Un),e(Un,ql),e(Me,Cl),e(X,El),$(rt,X,null),e(X,Al),$(it,X,null),z(t,Os,_),z(t,xe,_),e(xe,lt),e(lt,Vn),$(fo,Vn,null),e(xe,Ol),e(xe,Rn),e(Rn,Sl),z(t,Ss,_),z(t,S,_),$(go,S,null),e(S,Ll),e(S,Zn),e(Zn,Il),e(S,Dl),e(S,_o),e(_o,Bl),e(_o,Zo),e(Zo,Wl),e(_o,Hl),e(S,Ql),e(S,bo),e(bo,Ul),e(bo,zo),e(zo,Vl),e(bo,Rl),e(S,Zl),e(S,H),$(ko,H,null),e(H,Jl),e(H,je),e(je,Kl),e(je,Jo),e(Jo,Gl),e(je,Xl),e(je,Jn),e(Jn,Yl),e(je,ed),e(H,td),$(dt,H,null),e(H,od),$(ct,H,null),e(H,nd),$(ht,H,null),z(t,Ls,_),z(t,Pe,_),e(Pe,pt),e(pt,Kn),$(vo,Kn,null),e(Pe,sd),e(Pe,Gn),e(Gn,ad),z(t,Is,_),z(t,L,_),$($o,L,null),e(L,rd),e(L,qe),e(qe,id),e(qe,Xn),e(Xn,ld),e(qe,dd),e(qe,Yn),e(Yn,cd),e(qe,hd),e(L,pd),e(L,wo),e(wo,md),e(wo,Ko),e(Ko,ud),e(wo,fd),e(L,gd),e(L,To),e(To,_d),e(To,yo),e(yo,bd),e(To,zd),e(L,kd),e(L,Q),$(No,Q,null),e(Q,vd),e(Q,Ce),e(Ce,$d),e(Ce,Go),e(Go,wd),e(Ce,Td),e(Ce,es),e(es,yd),e(Ce,Nd),e(Q,Fd),$(mt,Q,null),e(Q,Md),$(ut,Q,null),e(Q,xd),$(ft,Q,null),Ds=!0},p(t,[_]){const Fo={};_&2&&(Fo.$$scope={dirty:_,ctx:t}),Ie.$set(Fo);const ts={};_&2&&(ts.$$scope={dirty:_,ctx:t}),Be.$set(ts);const os={};_&2&&(os.$$scope={dirty:_,ctx:t}),We.$set(os);const ns={};_&2&&(ns.$$scope={dirty:_,ctx:t}),Qe.$set(ns);const Mo={};_&2&&(Mo.$$scope={dirty:_,ctx:t}),Ue.$set(Mo);const ss={};_&2&&(ss.$$scope={dirty:_,ctx:t}),Re.$set(ss);const as={};_&2&&(as.$$scope={dirty:_,ctx:t}),Ze.$set(as);const rs={};_&2&&(rs.$$scope={dirty:_,ctx:t}),Je.$set(rs);const xo={};_&2&&(xo.$$scope={dirty:_,ctx:t}),Ge.$set(xo);const is={};_&2&&(is.$$scope={dirty:_,ctx:t}),Xe.$set(is);const ls={};_&2&&(ls.$$scope={dirty:_,ctx:t}),et.$set(ls);const ds={};_&2&&(ds.$$scope={dirty:_,ctx:t}),tt.$set(ds);const cs={};_&2&&(cs.$$scope={dirty:_,ctx:t}),ot.$set(cs);const Ee={};_&2&&(Ee.$$scope={dirty:_,ctx:t}),nt.$set(Ee);const hs={};_&2&&(hs.$$scope={dirty:_,ctx:t}),st.$set(hs);const ps={};_&2&&(ps.$$scope={dirty:_,ctx:t}),rt.$set(ps);const jo={};_&2&&(jo.$$scope={dirty:_,ctx:t}),it.$set(jo);const ms={};_&2&&(ms.$$scope={dirty:_,ctx:t}),dt.$set(ms);const us={};_&2&&(us.$$scope={dirty:_,ctx:t}),ct.$set(us);const fs={};_&2&&(fs.$$scope={dirty:_,ctx:t}),ht.$set(fs);const Y={};_&2&&(Y.$$scope={dirty:_,ctx:t}),mt.$set(Y);const Ae={};_&2&&(Ae.$$scope={dirty:_,ctx:t}),ut.$set(Ae);const gs={};_&2&&(gs.$$scope={dirty:_,ctx:t}),ft.$set(gs)},i(t){Ds||(w(n.$$.fragment,t),w(vt.$$.fragment,t),w(yt.$$.fragment,t),w(Nt.$$.fragment,t),w(Ie.$$.fragment,t),w(Mt.$$.fragment,t),w(xt.$$.fragment,t),w(At.$$.fragment,t),w(Be.$$.fragment,t),w(We.$$.fragment,t),w(Ot.$$.fragment,t),w(St.$$.fragment,t),w(Bt.$$.fragment,t),w(Qe.$$.fragment,t),w(Ue.$$.fragment,t),w(Wt.$$.fragment,t),w(Ht.$$.fragment,t),w(Zt.$$.fragment,t),w(Re.$$.fragment,t),w(Ze.$$.fragment,t),w(Je.$$.fragment,t),w(Jt.$$.fragment,t),w(Kt.$$.fragment,t),w(to.$$.fragment,t),w(Ge.$$.fragment,t),w(Xe.$$.fragment,t),w(oo.$$.fragment,t),w(no.$$.fragment,t),w(io.$$.fragment,t),w(et.$$.fragment,t),w(tt.$$.fragment,t),w(ot.$$.fragment,t),w(nt.$$.fragment,t),w(st.$$.fragment,t),w(lo.$$.fragment,t),w(co.$$.fragment,t),w(uo.$$.fragment,t),w(rt.$$.fragment,t),w(it.$$.fragment,t),w(fo.$$.fragment,t),w(go.$$.fragment,t),w(ko.$$.fragment,t),w(dt.$$.fragment,t),w(ct.$$.fragment,t),w(ht.$$.fragment,t),w(vo.$$.fragment,t),w($o.$$.fragment,t),w(No.$$.fragment,t),w(mt.$$.fragment,t),w(ut.$$.fragment,t),w(ft.$$.fragment,t),Ds=!0)},o(t){T(n.$$.fragment,t),T(vt.$$.fragment,t),T(yt.$$.fragment,t),T(Nt.$$.fragment,t),T(Ie.$$.fragment,t),T(Mt.$$.fragment,t),T(xt.$$.fragment,t),T(At.$$.fragment,t),T(Be.$$.fragment,t),T(We.$$.fragment,t),T(Ot.$$.fragment,t),T(St.$$.fragment,t),T(Bt.$$.fragment,t),T(Qe.$$.fragment,t),T(Ue.$$.fragment,t),T(Wt.$$.fragment,t),T(Ht.$$.fragment,t),T(Zt.$$.fragment,t),T(Re.$$.fragment,t),T(Ze.$$.fragment,t),T(Je.$$.fragment,t),T(Jt.$$.fragment,t),T(Kt.$$.fragment,t),T(to.$$.fragment,t),T(Ge.$$.fragment,t),T(Xe.$$.fragment,t),T(oo.$$.fragment,t),T(no.$$.fragment,t),T(io.$$.fragment,t),T(et.$$.fragment,t),T(tt.$$.fragment,t),T(ot.$$.fragment,t),T(nt.$$.fragment,t),T(st.$$.fragment,t),T(lo.$$.fragment,t),T(co.$$.fragment,t),T(uo.$$.fragment,t),T(rt.$$.fragment,t),T(it.$$.fragment,t),T(fo.$$.fragment,t),T(go.$$.fragment,t),T(ko.$$.fragment,t),T(dt.$$.fragment,t),T(ct.$$.fragment,t),T(ht.$$.fragment,t),T(vo.$$.fragment,t),T($o.$$.fragment,t),T(No.$$.fragment,t),T(mt.$$.fragment,t),T(ut.$$.fragment,t),T(ft.$$.fragment,t),Ds=!1},d(t){o(s),t&&o(g),t&&o(c),y(n),t&&o(_s),t&&o(pe),y(vt),t&&o(bs),t&&o(Se),t&&o(zs),t&&o(Po),t&&o(ks),t&&o(qo),t&&o(vs),t&&o(te),t&&o($s),t&&o(me),y(yt),t&&o(ws),t&&o(Z),y(Nt),y(Ie),t&&o(Ts),t&&o(ge),y(Mt),t&&o(ys),t&&o(M),y(xt),y(At),y(Be),y(We),t&&o(Ns),t&&o(be),y(Ot),t&&o(Fs),t&&o(q),y(St),y(Bt),y(Qe),y(Ue),t&&o(Ms),t&&o(ve),y(Wt),t&&o(xs),t&&o(C),y(Ht),y(Zt),y(Re),y(Ze),y(Je),t&&o(js),t&&o(we),y(Jt),t&&o(Ps),t&&o(E),y(Kt),y(to),y(Ge),y(Xe),t&&o(qs),t&&o(ye),y(oo),t&&o(Cs),t&&o(A),y(no),y(io),y(et),y(tt),y(ot),y(nt),y(st),t&&o(Es),t&&o(Fe),y(lo),t&&o(As),t&&o(O),y(co),y(uo),y(rt),y(it),t&&o(Os),t&&o(xe),y(fo),t&&o(Ss),t&&o(S),y(go),y(ko),y(dt),y(ct),y(ht),t&&o(Ls),t&&o(Pe),y(vo),t&&o(Is),t&&o(L),y($o),y(No),y(mt),y(ut),y(ft)}}}const Fh={local:"nezha",sections:[{local:"overview",title:"Overview"},{local:"transformers.NezhaConfig",title:"NezhaConfig"},{local:"transformers.NezhaModel",title:"NezhaModel"},{local:"transformers.NezhaForPreTraining",title:"NezhaForPreTraining"},{local:"transformers.NezhaForMaskedLM",title:"NezhaForMaskedLM"},{local:"transformers.NezhaForNextSentencePrediction",title:"NezhaForNextSentencePrediction"},{local:"transformers.NezhaForSequenceClassification",title:"NezhaForSequenceClassification"},{local:"transformers.NezhaForMultipleChoice",title:"NezhaForMultipleChoice"},{local:"transformers.NezhaForTokenClassification",title:"NezhaForTokenClassification"},{local:"transformers.NezhaForQuestionAnswering",title:"NezhaForQuestionAnswering"}],title:"Nezha"};function Mh(N){return oh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ah extends Xc{constructor(s){super();Yc(this,s,Mh,Nh,eh,{})}}export{Ah as default,Fh as metadata};
