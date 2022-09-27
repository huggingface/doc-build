import{S as mh,i as uh,s as gh,e as r,k as f,w as $,t as l,M as _h,c as a,d as o,m,a as i,x as v,h as c,b as u,G as e,g as k,y as F,q as w,o as T,B as y,v as bh,L as P}from"../../chunks/vendor-hf-doc-builder.js";import{T as Dt}from"../../chunks/Tip-hf-doc-builder.js";import{D as q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as M}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as R}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as j}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function kh(N){let s,_,d,p,b;return p=new M({props:{code:`from transformers import FNetModel, FNetConfig

# Initializing a FNet fnet-base style configuration
configuration = FNetConfig()

# Initializing a model from the fnet-base style configuration
model = FNetModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FNetModel, FNetConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a FNet fnet-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = FNetConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the fnet-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){s=r("p"),_=l("Example:"),d=f(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example:"),h.forEach(o),d=m(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),F(p,n,h),b=!0},p:P,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function $h(N){let s,_,d,p,b;return p=new M({props:{code:"0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second sequence |",highlighted:'<span class="hljs-attribute">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> | first sequence | second sequence |'}}),{c(){s=r("p"),_=l("pair mask has the following format: :"),d=f(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"pair mask has the following format: :"),h.forEach(o),d=m(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),F(p,n,h),b=!0},p:P,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function vh(N){let s,_,d,p,b;return p=new M({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){s=r("p"),_=l("sequence pair mask has the following format:"),d=f(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"sequence pair mask has the following format:"),h.forEach(o),d=m(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),F(p,n,h),b=!0},p:P,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function Fh(N){let s,_,d,p,b;return{c(){s=r("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a(h,"CODE",{});var z=i(d);p=c(z,"Module"),z.forEach(o),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,_),e(s,d),e(d,p),e(s,b)},d(n){n&&o(s)}}}function wh(N){let s,_,d,p,b;return p=new M({props:{code:`from transformers import FNetTokenizer, FNetModel
import torch

tokenizer = FNetTokenizer.from_pretrained("google/fnet-base")
model = FNetModel.from_pretrained("google/fnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FNetTokenizer, FNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FNetTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetModel.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){s=r("p"),_=l("Example:"),d=f(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example:"),h.forEach(o),d=m(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),F(p,n,h),b=!0},p:P,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function Th(N){let s,_,d,p,b;return{c(){s=r("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a(h,"CODE",{});var z=i(d);p=c(z,"Module"),z.forEach(o),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,_),e(s,d),e(d,p),e(s,b)},d(n){n&&o(s)}}}function yh(N){let s,_,d,p,b;return p=new M({props:{code:`from transformers import FNetTokenizer, FNetForPreTraining
import torch

tokenizer = FNetTokenizer.from_pretrained("google/fnet-base")
model = FNetForPreTraining.from_pretrained("google/fnet-base")
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)
prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FNetTokenizer, FNetForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FNetTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){s=r("p"),_=l("Example:"),d=f(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example:"),h.forEach(o),d=m(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),F(p,n,h),b=!0},p:P,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function Nh(N){let s,_,d,p,b;return{c(){s=r("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a(h,"CODE",{});var z=i(d);p=c(z,"Module"),z.forEach(o),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,_),e(s,d),e(d,p),e(s,b)},d(n){n&&o(s)}}}function zh(N){let s,_,d,p,b;return p=new M({props:{code:`from transformers import FNetTokenizer, FNetForMaskedLM
import torch

tokenizer = FNetTokenizer.from_pretrained("google/fnet-base")
model = FNetForMaskedLM.from_pretrained("google/fnet-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FNetTokenizer, FNetForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FNetTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){s=r("p"),_=l("Example:"),d=f(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example:"),h.forEach(o),d=m(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),F(p,n,h),b=!0},p:P,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function qh(N){let s,_;return s=new M({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){$(s.$$.fragment)},l(d){v(s.$$.fragment,d)},m(d,p){F(s,d,p),_=!0},p:P,i(d){_||(w(s.$$.fragment,d),_=!0)},o(d){T(s.$$.fragment,d),_=!1},d(d){y(s,d)}}}function xh(N){let s,_,d,p,b;return{c(){s=r("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a(h,"CODE",{});var z=i(d);p=c(z,"Module"),z.forEach(o),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,_),e(s,d),e(d,p),e(s,b)},d(n){n&&o(s)}}}function Eh(N){let s,_,d,p,b;return p=new M({props:{code:`from transformers import FNetTokenizer, FNetForNextSentencePrediction
import torch

tokenizer = FNetTokenizer.from_pretrained("google/fnet-base")
model = FNetForNextSentencePrediction.from_pretrained("google/fnet-base")
prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="pt")
outputs = model(**encoding, labels=torch.LongTensor([1]))
logits = outputs.logits
assert logits[0, 0] < logits[0, 1]  # next sentence was random`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FNetTokenizer, FNetForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FNetTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){s=r("p"),_=l("Example:"),d=f(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example:"),h.forEach(o),d=m(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),F(p,n,h),b=!0},p:P,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function jh(N){let s,_,d,p,b;return{c(){s=r("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a(h,"CODE",{});var z=i(d);p=c(z,"Module"),z.forEach(o),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,_),e(s,d),e(d,p),e(s,b)},d(n){n&&o(s)}}}function Ph(N){let s,_,d,p,b;return p=new M({props:{code:`import torch
from transformers import FNetTokenizer, FNetForSequenceClassification

tokenizer = FNetTokenizer.from_pretrained("google/fnet-base")
model = FNetForSequenceClassification.from_pretrained("google/fnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FNetTokenizer, FNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FNetTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){s=r("p"),_=l("Example of single-label classification:"),d=f(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example of single-label classification:"),h.forEach(o),d=m(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),F(p,n,h),b=!0},p:P,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function Mh(N){let s,_;return s=new M({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = FNetForSequenceClassification.from_pretrained("google/fnet-base", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){$(s.$$.fragment)},l(d){v(s.$$.fragment,d)},m(d,p){F(s,d,p),_=!0},p:P,i(d){_||(w(s.$$.fragment,d),_=!0)},o(d){T(s.$$.fragment,d),_=!1},d(d){y(s,d)}}}function Ch(N){let s,_,d,p,b;return p=new M({props:{code:`import torch
from transformers import FNetTokenizer, FNetForSequenceClassification

tokenizer = FNetTokenizer.from_pretrained("google/fnet-base")
model = FNetForSequenceClassification.from_pretrained("google/fnet-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FNetTokenizer, FNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FNetTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){s=r("p"),_=l("Example of multi-label classification:"),d=f(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example of multi-label classification:"),h.forEach(o),d=m(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),F(p,n,h),b=!0},p:P,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function Sh(N){let s,_;return s=new M({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = FNetForSequenceClassification.from_pretrained(
    "google/fnet-base", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/fnet-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){$(s.$$.fragment)},l(d){v(s.$$.fragment,d)},m(d,p){F(s,d,p),_=!0},p:P,i(d){_||(w(s.$$.fragment,d),_=!0)},o(d){T(s.$$.fragment,d),_=!1},d(d){y(s,d)}}}function Ah(N){let s,_,d,p,b;return{c(){s=r("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a(h,"CODE",{});var z=i(d);p=c(z,"Module"),z.forEach(o),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,_),e(s,d),e(d,p),e(s,b)},d(n){n&&o(s)}}}function Lh(N){let s,_,d,p,b;return p=new M({props:{code:`from transformers import FNetTokenizer, FNetForMultipleChoice
import torch

tokenizer = FNetTokenizer.from_pretrained("google/fnet-base")
model = FNetForMultipleChoice.from_pretrained("google/fnet-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FNetTokenizer, FNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FNetTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){s=r("p"),_=l("Example:"),d=f(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example:"),h.forEach(o),d=m(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),F(p,n,h),b=!0},p:P,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function Ih(N){let s,_,d,p,b;return{c(){s=r("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a(h,"CODE",{});var z=i(d);p=c(z,"Module"),z.forEach(o),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,_),e(s,d),e(d,p),e(s,b)},d(n){n&&o(s)}}}function Oh(N){let s,_,d,p,b;return p=new M({props:{code:`from transformers import FNetTokenizer, FNetForTokenClassification
import torch

tokenizer = FNetTokenizer.from_pretrained("google/fnet-base")
model = FNetForTokenClassification.from_pretrained("google/fnet-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FNetTokenizer, FNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FNetTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)

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
`}}),{c(){s=r("p"),_=l("Example:"),d=f(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example:"),h.forEach(o),d=m(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),F(p,n,h),b=!0},p:P,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function Dh(N){let s,_;return s=new M({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){$(s.$$.fragment)},l(d){v(s.$$.fragment,d)},m(d,p){F(s,d,p),_=!0},p:P,i(d){_||(w(s.$$.fragment,d),_=!0)},o(d){T(s.$$.fragment,d),_=!1},d(d){y(s,d)}}}function Bh(N){let s,_,d,p,b;return{c(){s=r("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a(h,"CODE",{});var z=i(d);p=c(z,"Module"),z.forEach(o),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,_),e(s,d),e(d,p),e(s,b)},d(n){n&&o(s)}}}function Wh(N){let s,_,d,p,b;return p=new M({props:{code:`from transformers import FNetTokenizer, FNetForQuestionAnswering
import torch

tokenizer = FNetTokenizer.from_pretrained("google/fnet-base")
model = FNetForQuestionAnswering.from_pretrained("google/fnet-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FNetTokenizer, FNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FNetTokenizer.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/fnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){s=r("p"),_=l("Example:"),d=f(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example:"),h.forEach(o),d=m(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),F(p,n,h),b=!0},p:P,i(n){b||(w(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function Uh(N){let s,_;return s=new M({props:{code:`# target is "nice puppet"
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
`}}),{c(){$(s.$$.fragment)},l(d){v(s.$$.fragment,d)},m(d,p){F(s,d,p),_=!0},p:P,i(d){_||(w(s.$$.fragment,d),_=!0)},o(d){T(s.$$.fragment,d),_=!1},d(d){y(s,d)}}}function Hh(N){let s,_,d,p,b,n,h,z,sa,lr,he,Be,Wn,Bt,ra,Un,aa,cr,We,ia,Wt,la,ca,dr,en,Hn,da,pr,tn,pa,hr,on,Qn,ha,fr,re,fa,Ut,ma,ua,Ht,ga,_a,mr,fe,Ue,Vn,Qt,ba,Rn,ka,ur,I,Vt,$a,me,va,nn,Fa,wa,Rt,Ta,ya,Na,ue,za,sn,qa,xa,rn,Ea,ja,Pa,He,gr,ge,Qe,Gn,Gt,Ma,Jn,Ca,_r,E,Jt,Sa,te,Aa,an,La,Ia,Kt,Oa,Da,ln,Ba,Wa,Ua,ae,Xt,Ha,Kn,Qa,Va,Yt,cn,Ra,Xn,Ga,Ja,dn,Ka,Yn,Xa,Ya,Ve,Zt,Za,eo,ei,Zn,ti,oi,ni,G,to,si,es,ri,ai,Re,ii,_e,li,ts,ci,di,os,pi,hi,fi,pn,oo,br,be,Ge,ns,no,mi,ss,ui,kr,O,so,gi,D,_i,rs,bi,ki,hn,$i,vi,ro,Fi,wi,fn,Ti,yi,Ni,ie,ao,zi,as,qi,xi,io,mn,Ei,is,ji,Pi,un,Mi,ls,Ci,Si,J,lo,Ai,cs,Li,Ii,Je,Oi,ds,Di,$r,ke,Ke,ps,co,Bi,hs,Wi,vr,B,po,Ui,ho,Hi,fo,Qi,Vi,Ri,mo,Gi,uo,Ji,Ki,Xi,K,go,Yi,$e,Zi,gn,el,tl,fs,ol,nl,sl,Xe,rl,Ye,Fr,ve,Ze,ms,_o,al,us,il,wr,W,bo,ll,Fe,cl,gs,dl,pl,_s,hl,fl,ml,ko,ul,$o,gl,_l,bl,X,vo,kl,we,$l,_n,vl,Fl,bs,wl,Tl,yl,et,Nl,tt,Tr,Te,ot,ks,Fo,zl,$s,ql,yr,oe,wo,xl,ye,El,vs,jl,Pl,To,Ml,Cl,Sl,C,yo,Al,Ne,Ll,bn,Il,Ol,Fs,Dl,Bl,Wl,nt,Ul,st,Hl,rt,Nr,ze,at,ws,No,Ql,Ts,Vl,zr,ne,zo,Rl,qe,Gl,ys,Jl,Kl,qo,Xl,Yl,Zl,Y,xo,ec,xe,tc,kn,oc,nc,Ns,sc,rc,ac,it,ic,lt,qr,Ee,ct,zs,Eo,lc,qs,cc,xr,U,jo,dc,xs,pc,hc,Po,fc,Mo,mc,uc,gc,x,Co,_c,je,bc,$n,kc,$c,Es,vc,Fc,wc,dt,Tc,pt,yc,ht,Nc,ft,zc,mt,Er,Pe,ut,js,So,qc,Ps,xc,jr,H,Ao,Ec,Ms,jc,Pc,Lo,Mc,Io,Cc,Sc,Ac,Z,Oo,Lc,Me,Ic,vn,Oc,Dc,Cs,Bc,Wc,Uc,gt,Hc,_t,Pr,Ce,bt,Ss,Do,Qc,As,Vc,Mr,Q,Bo,Rc,Ls,Gc,Jc,Wo,Kc,Uo,Xc,Yc,Zc,S,Ho,ed,Se,td,Fn,od,nd,Is,sd,rd,ad,kt,id,$t,ld,vt,Cr,Ae,Ft,Os,Qo,cd,Ds,dd,Sr,V,Vo,pd,Le,hd,Bs,fd,md,Ws,ud,gd,_d,Ro,bd,Go,kd,$d,vd,A,Jo,Fd,Ie,wd,wn,Td,yd,Us,Nd,zd,qd,wt,xd,Tt,Ed,yt,Ar;return n=new R({}),Bt=new R({}),Qt=new R({}),Vt=new q({props:{name:"class transformers.FNetConfig",anchor:"transformers.FNetConfig",parameters:[{name:"vocab_size",val:" = 32000"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 4"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_tpu_fourier_optimizations",val:" = False"},{name:"tpu_short_seq_length",val:" = 512"},{name:"pad_token_id",val:" = 3"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32000) &#x2014;
Vocabulary size of the FNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetModel">FNetModel</a> or <code>TFFNetModel</code>.`,name:"vocab_size"},{anchor:"transformers.FNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.FNetConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.FNetConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.FNetConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.FNetConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.FNetConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.FNetConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetModel">FNetModel</a> or <code>TFFNetModel</code>.`,name:"type_vocab_size"},{anchor:"transformers.FNetConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.FNetConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.FNetConfig.use_tpu_fourier_optimizations",description:`<strong>use_tpu_fourier_optimizations</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Determines whether to use TPU optimized FFTs. If <code>True</code>, the model will favor axis-wise FFTs transforms.
Set to <code>False</code> for GPU/CPU hardware, in which case n-dimensional FFTs are used.`,name:"use_tpu_fourier_optimizations"},{anchor:"transformers.FNetConfig.tpu_short_seq_length",description:`<strong>tpu_short_seq_length</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The sequence length that is expected by the model when using TPUs. This will be used to initialize the DFT
matrix only when <em>use_tpu_fourier_optimizations</em> is set to <code>True</code> and the input sequence is shorter than or
equal to 4096 tokens.`,name:"tpu_short_seq_length"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/configuration_fnet.py#L30"}}),He=new j({props:{anchor:"transformers.FNetConfig.example",$$slots:{default:[kh]},$$scope:{ctx:N}}}),Gt=new R({}),Jt=new q({props:{name:"class transformers.FNetTokenizer",anchor:"transformers.FNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = True"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.FNetTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.FNetTokenizer.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.FNetTokenizer.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.FNetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.FNetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.FNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.FNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.FNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.FNetTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.FNetTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/tokenization_fnet.py#L46"}}),Xt=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/tokenization_fnet.py#L218",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Zt=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.FNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.FNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.FNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/tokenization_fnet.py#L243",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),to=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/tokenization_fnet.py#L271",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Re=new j({props:{anchor:"transformers.FNetTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[$h]},$$scope:{ctx:N}}}),oo=new q({props:{name:"save_vocabulary",anchor:"transformers.FNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/tokenization_fnet.py#L300"}}),no=new R({}),so=new q({props:{name:"class transformers.FNetTokenizerFast",anchor:"transformers.FNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = True"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.FNetTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.FNetTokenizerFast.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.FNetTokenizerFast.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.FNetTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.FNetTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.FNetTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.FNetTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.FNetTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/tokenization_fnet_fast.py#L54"}}),ao=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FNetTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FNetTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.FNetTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/tokenization_fnet_fast.py#L137",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),lo=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.FNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/tokenization_fnet_fast.py#L162",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Je=new j({props:{anchor:"transformers.FNetTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[vh]},$$scope:{ctx:N}}}),co=new R({}),po=new q({props:{name:"class transformers.FNetModel",anchor:"transformers.FNetModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.FNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/modeling_fnet.py#L519"}}),go=new q({props:{name:"forward",anchor:"transformers.FNetModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.FNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetTokenizer">FNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FNetModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FNetModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FNetModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/modeling_fnet.py#L545",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetConfig"
>FNetConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xe=new Dt({props:{$$slots:{default:[Fh]},$$scope:{ctx:N}}}),Ye=new j({props:{anchor:"transformers.FNetModel.forward.example",$$slots:{default:[wh]},$$scope:{ctx:N}}}),_o=new R({}),bo=new q({props:{name:"class transformers.FNetForPreTraining",anchor:"transformers.FNetForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/modeling_fnet.py#L629"}}),vo=new q({props:{name:"forward",anchor:"transformers.FNetForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FNetForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetTokenizer">FNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FNetForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FNetForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FNetForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FNetForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FNetForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.FNetForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"},{anchor:"transformers.FNetForPreTraining.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/modeling_fnet.py#L645",returnDescription:`
<p>A <code>transformers.models.fnet.modeling_fnet.FNetForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetConfig"
>FNetConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.</li>
<li><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</li>
<li><strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
</ul>
`,returnType:`
<p><code>transformers.models.fnet.modeling_fnet.FNetForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),et=new Dt({props:{$$slots:{default:[Th]},$$scope:{ctx:N}}}),tt=new j({props:{anchor:"transformers.FNetForPreTraining.forward.example",$$slots:{default:[yh]},$$scope:{ctx:N}}}),Fo=new R({}),wo=new q({props:{name:"class transformers.FNetForMaskedLM",anchor:"transformers.FNetForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/modeling_fnet.py#L721"}}),yo=new q({props:{name:"forward",anchor:"transformers.FNetForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FNetForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetTokenizer">FNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FNetForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FNetForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FNetForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FNetForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FNetForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/modeling_fnet.py#L737",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetConfig"
>FNetConfig</a>) and inputs.</p>
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
`}}),nt=new Dt({props:{$$slots:{default:[Nh]},$$scope:{ctx:N}}}),st=new j({props:{anchor:"transformers.FNetForMaskedLM.forward.example",$$slots:{default:[zh]},$$scope:{ctx:N}}}),rt=new j({props:{anchor:"transformers.FNetForMaskedLM.forward.example-2",$$slots:{default:[qh]},$$scope:{ctx:N}}}),No=new R({}),zo=new q({props:{name:"class transformers.FNetForNextSentencePrediction",anchor:"transformers.FNetForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/modeling_fnet.py#L790"}}),xo=new q({props:{name:"forward",anchor:"transformers.FNetForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FNetForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetTokenizer">FNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FNetForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FNetForNextSentencePrediction.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FNetForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FNetForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FNetForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/modeling_fnet.py#L800",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetConfig"
>FNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),it=new Dt({props:{$$slots:{default:[xh]},$$scope:{ctx:N}}}),lt=new j({props:{anchor:"transformers.FNetForNextSentencePrediction.forward.example",$$slots:{default:[Eh]},$$scope:{ctx:N}}}),Eo=new R({}),jo=new q({props:{name:"class transformers.FNetForSequenceClassification",anchor:"transformers.FNetForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/modeling_fnet.py#L885"}}),Co=new q({props:{name:"forward",anchor:"transformers.FNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetTokenizer">FNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FNetForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FNetForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FNetForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FNetForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FNetForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/modeling_fnet.py#L897",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetConfig"
>FNetConfig</a>) and inputs.</p>
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
`}}),dt=new Dt({props:{$$slots:{default:[jh]},$$scope:{ctx:N}}}),pt=new j({props:{anchor:"transformers.FNetForSequenceClassification.forward.example",$$slots:{default:[Ph]},$$scope:{ctx:N}}}),ht=new j({props:{anchor:"transformers.FNetForSequenceClassification.forward.example-2",$$slots:{default:[Mh]},$$scope:{ctx:N}}}),ft=new j({props:{anchor:"transformers.FNetForSequenceClassification.forward.example-3",$$slots:{default:[Ch]},$$scope:{ctx:N}}}),mt=new j({props:{anchor:"transformers.FNetForSequenceClassification.forward.example-4",$$slots:{default:[Sh]},$$scope:{ctx:N}}}),So=new R({}),Ao=new q({props:{name:"class transformers.FNetForMultipleChoice",anchor:"transformers.FNetForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/modeling_fnet.py#L971"}}),Oo=new q({props:{name:"forward",anchor:"transformers.FNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetTokenizer">FNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FNetForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FNetForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FNetForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FNetForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FNetForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/modeling_fnet.py#L982",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetConfig"
>FNetConfig</a>) and inputs.</p>
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
`}}),gt=new Dt({props:{$$slots:{default:[Ah]},$$scope:{ctx:N}}}),_t=new j({props:{anchor:"transformers.FNetForMultipleChoice.forward.example",$$slots:{default:[Lh]},$$scope:{ctx:N}}}),Do=new R({}),Bo=new q({props:{name:"class transformers.FNetForTokenClassification",anchor:"transformers.FNetForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/modeling_fnet.py#L1051"}}),Ho=new q({props:{name:"forward",anchor:"transformers.FNetForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetTokenizer">FNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FNetForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FNetForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FNetForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FNetForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FNetForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/modeling_fnet.py#L1064",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetConfig"
>FNetConfig</a>) and inputs.</p>
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
`}}),kt=new Dt({props:{$$slots:{default:[Ih]},$$scope:{ctx:N}}}),$t=new j({props:{anchor:"transformers.FNetForTokenClassification.forward.example",$$slots:{default:[Oh]},$$scope:{ctx:N}}}),vt=new j({props:{anchor:"transformers.FNetForTokenClassification.forward.example-2",$$slots:{default:[Dh]},$$scope:{ctx:N}}}),Qo=new R({}),Vo=new q({props:{name:"class transformers.FNetForQuestionAnswering",anchor:"transformers.FNetForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/modeling_fnet.py#L1121"}}),Jo=new q({props:{name:"forward",anchor:"transformers.FNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetTokenizer">FNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FNetForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FNetForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FNetForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FNetForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FNetForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FNetForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/fnet/modeling_fnet.py#L1133",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetConfig"
>FNetConfig</a>) and inputs.</p>
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
`}}),wt=new Dt({props:{$$slots:{default:[Bh]},$$scope:{ctx:N}}}),Tt=new j({props:{anchor:"transformers.FNetForQuestionAnswering.forward.example",$$slots:{default:[Wh]},$$scope:{ctx:N}}}),yt=new j({props:{anchor:"transformers.FNetForQuestionAnswering.forward.example-2",$$slots:{default:[Uh]},$$scope:{ctx:N}}}),{c(){s=r("meta"),_=f(),d=r("h1"),p=r("a"),b=r("span"),$(n.$$.fragment),h=f(),z=r("span"),sa=l("FNet"),lr=f(),he=r("h2"),Be=r("a"),Wn=r("span"),$(Bt.$$.fragment),ra=f(),Un=r("span"),aa=l("Overview"),cr=f(),We=r("p"),ia=l("The FNet model was proposed in "),Wt=r("a"),la=l("FNet: Mixing Tokens with Fourier Transforms"),ca=l(` by
James Lee-Thorp, Joshua Ainslie, Ilya Eckstein, Santiago Ontanon. The model replaces the self-attention layer in a BERT
model with a fourier transform which returns only the real parts of the transform. The model is significantly faster
than the BERT model because it has fewer parameters and is more memory efficient. The model achieves about 92-97%
accuracy of BERT counterparts on GLUE benchmark, and trains much faster than the BERT model. The abstract from the
paper is the following:`),dr=f(),en=r("p"),Hn=r("em"),da=l(`We show that Transformer encoder architectures can be sped up, with limited accuracy costs, by replacing the
self-attention sublayers with simple linear transformations that \u201Cmix\u201D input tokens. These linear mixers, along with
standard nonlinearities in feed-forward layers, prove competent at modeling semantic relationships in several text
classification tasks. Most surprisingly, we find that replacing the self-attention sublayer in a Transformer encoder
with a standard, unparameterized Fourier Transform achieves 92-97% of the accuracy of BERT counterparts on the GLUE
benchmark, but trains 80% faster on GPUs and 70% faster on TPUs at standard 512 input lengths. At longer input lengths,
our FNet model is significantly faster: when compared to the \u201Cefficient\u201D Transformers on the Long Range Arena
benchmark, FNet matches the accuracy of the most accurate models, while outpacing the fastest models across all
sequence lengths on GPUs (and across relatively shorter lengths on TPUs). Finally, FNet has a light memory footprint
and is particularly efficient at smaller model sizes; for a fixed speed and accuracy budget, small FNet models
outperform Transformer counterparts.`),pr=f(),tn=r("p"),pa=l("Tips on usage:"),hr=f(),on=r("ul"),Qn=r("li"),ha=l(`The model was trained without an attention mask as it is based on Fourier Transform. The model was trained with
maximum sequence length 512 which includes pad tokens. Hence, it is highly recommended to use the same maximum
sequence length for fine-tuning and inference.`),fr=f(),re=r("p"),fa=l("This model was contributed by "),Ut=r("a"),ma=l("gchhablani"),ua=l(". The original code can be found "),Ht=r("a"),ga=l("here"),_a=l("."),mr=f(),fe=r("h2"),Ue=r("a"),Vn=r("span"),$(Qt.$$.fragment),ba=f(),Rn=r("span"),ka=l("FNetConfig"),ur=f(),I=r("div"),$(Vt.$$.fragment),$a=f(),me=r("p"),va=l("This is the configuration class to store the configuration of a "),nn=r("a"),Fa=l("FNetModel"),wa=l(`. It is used to instantiate an FNet
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the FNet
`),Rt=r("a"),Ta=l("google/fnet-base"),ya=l(" architecture."),Na=f(),ue=r("p"),za=l("Configuration objects inherit from "),sn=r("a"),qa=l("PretrainedConfig"),xa=l(` and can be used to control the model outputs. Read the
documentation from `),rn=r("a"),Ea=l("PretrainedConfig"),ja=l(" for more information."),Pa=f(),$(He.$$.fragment),gr=f(),ge=r("h2"),Qe=r("a"),Gn=r("span"),$(Gt.$$.fragment),Ma=f(),Jn=r("span"),Ca=l("FNetTokenizer"),_r=f(),E=r("div"),$(Jt.$$.fragment),Sa=f(),te=r("p"),Aa=l("Construct an FNet tokenizer. Adapted from "),an=r("a"),La=l("AlbertTokenizer"),Ia=l(`. Based on
`),Kt=r("a"),Oa=l("SentencePiece"),Da=l(". This tokenizer inherits from "),ln=r("a"),Ba=l("PreTrainedTokenizer"),Wa=l(`
which contains most of the main methods. Users should refer to this superclass for more information regarding those
methods.`),Ua=f(),ae=r("div"),$(Xt.$$.fragment),Ha=f(),Kn=r("p"),Qa=l(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An FNet sequence has the following format:`),Va=f(),Yt=r("ul"),cn=r("li"),Ra=l("single sequence: "),Xn=r("code"),Ga=l("[CLS] X [SEP]"),Ja=f(),dn=r("li"),Ka=l("pair of sequences: "),Yn=r("code"),Xa=l("[CLS] A [SEP] B [SEP]"),Ya=f(),Ve=r("div"),$(Zt.$$.fragment),Za=f(),eo=r("p"),ei=l(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Zn=r("code"),ti=l("prepare_for_model"),oi=l(" method."),ni=f(),G=r("div"),$(to.$$.fragment),si=f(),es=r("p"),ri=l("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An FNet sequence"),ai=f(),$(Re.$$.fragment),ii=f(),_e=r("p"),li=l("If "),ts=r("code"),ci=l("token_ids_1"),di=l(" is "),os=r("code"),pi=l("None"),hi=l(", this method only returns the first portion of the mask (0s)."),fi=f(),pn=r("div"),$(oo.$$.fragment),br=f(),be=r("h2"),Ge=r("a"),ns=r("span"),$(no.$$.fragment),mi=f(),ss=r("span"),ui=l("FNetTokenizerFast"),kr=f(),O=r("div"),$(so.$$.fragment),gi=f(),D=r("p"),_i=l("Construct a \u201Cfast\u201D FNetTokenizer (backed by HuggingFace\u2019s "),rs=r("em"),bi=l("tokenizers"),ki=l(` library). Adapted from
`),hn=r("a"),$i=l("AlbertTokenizerFast"),vi=l(`. Based on
`),ro=r("a"),Fi=l("Unigram"),wi=l(`. This
tokenizer inherits from `),fn=r("a"),Ti=l("PreTrainedTokenizerFast"),yi=l(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Ni=f(),ie=r("div"),$(ao.$$.fragment),zi=f(),as=r("p"),qi=l(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An FNet sequence has the following format:`),xi=f(),io=r("ul"),mn=r("li"),Ei=l("single sequence: "),is=r("code"),ji=l("[CLS] X [SEP]"),Pi=f(),un=r("li"),Mi=l("pair of sequences: "),ls=r("code"),Ci=l("[CLS] A [SEP] B [SEP]"),Si=f(),J=r("div"),$(lo.$$.fragment),Ai=f(),cs=r("p"),Li=l("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An FNet"),Ii=f(),$(Je.$$.fragment),Oi=f(),ds=r("p"),Di=l("if token_ids_1 is None, only returns the first portion of the mask (0s)."),$r=f(),ke=r("h2"),Ke=r("a"),ps=r("span"),$(co.$$.fragment),Bi=f(),hs=r("span"),Wi=l("FNetModel"),vr=f(),B=r("div"),$(po.$$.fragment),Ui=f(),ho=r("p"),Hi=l(`The bare FNet Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),fo=r("a"),Qi=l("torch.nn.Module"),Vi=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ri=f(),mo=r("p"),Gi=l("The model can behave as an encoder, following the architecture described in "),uo=r("a"),Ji=l(`FNet: Mixing Tokens with Fourier
Transforms`),Ki=l(" by James Lee-Thorp, Joshua Ainslie, Ilya Eckstein, Santiago Ontanon."),Xi=f(),K=r("div"),$(go.$$.fragment),Yi=f(),$e=r("p"),Zi=l("The "),gn=r("a"),el=l("FNetModel"),tl=l(" forward method, overrides the "),fs=r("code"),ol=l("__call__"),nl=l(" special method."),sl=f(),$(Xe.$$.fragment),rl=f(),$(Ye.$$.fragment),Fr=f(),ve=r("h2"),Ze=r("a"),ms=r("span"),$(_o.$$.fragment),al=f(),us=r("span"),il=l("FNetForPreTraining"),wr=f(),W=r("div"),$(bo.$$.fragment),ll=f(),Fe=r("p"),cl=l("FNet Model with two heads on top as done during the pretraining: a "),gs=r("code"),dl=l("masked language modeling"),pl=l(" head and a "),_s=r("code"),hl=l("next sentence prediction (classification)"),fl=l(" head."),ml=f(),ko=r("p"),ul=l("This model is a PyTorch "),$o=r("a"),gl=l("torch.nn.Module"),_l=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),bl=f(),X=r("div"),$(vo.$$.fragment),kl=f(),we=r("p"),$l=l("The "),_n=r("a"),vl=l("FNetForPreTraining"),Fl=l(" forward method, overrides the "),bs=r("code"),wl=l("__call__"),Tl=l(" special method."),yl=f(),$(et.$$.fragment),Nl=f(),$(tt.$$.fragment),Tr=f(),Te=r("h2"),ot=r("a"),ks=r("span"),$(Fo.$$.fragment),zl=f(),$s=r("span"),ql=l("FNetForMaskedLM"),yr=f(),oe=r("div"),$(wo.$$.fragment),xl=f(),ye=r("p"),El=l("FNet Model with a "),vs=r("code"),jl=l("language modeling"),Pl=l(` head on top.
This model is a PyTorch `),To=r("a"),Ml=l("torch.nn.Module"),Cl=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Sl=f(),C=r("div"),$(yo.$$.fragment),Al=f(),Ne=r("p"),Ll=l("The "),bn=r("a"),Il=l("FNetForMaskedLM"),Ol=l(" forward method, overrides the "),Fs=r("code"),Dl=l("__call__"),Bl=l(" special method."),Wl=f(),$(nt.$$.fragment),Ul=f(),$(st.$$.fragment),Hl=f(),$(rt.$$.fragment),Nr=f(),ze=r("h2"),at=r("a"),ws=r("span"),$(No.$$.fragment),Ql=f(),Ts=r("span"),Vl=l("FNetForNextSentencePrediction"),zr=f(),ne=r("div"),$(zo.$$.fragment),Rl=f(),qe=r("p"),Gl=l("FNet Model with a "),ys=r("code"),Jl=l("next sentence prediction (classification)"),Kl=l(` head on top.
This model is a PyTorch `),qo=r("a"),Xl=l("torch.nn.Module"),Yl=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zl=f(),Y=r("div"),$(xo.$$.fragment),ec=f(),xe=r("p"),tc=l("The "),kn=r("a"),oc=l("FNetForNextSentencePrediction"),nc=l(" forward method, overrides the "),Ns=r("code"),sc=l("__call__"),rc=l(" special method."),ac=f(),$(it.$$.fragment),ic=f(),$(lt.$$.fragment),qr=f(),Ee=r("h2"),ct=r("a"),zs=r("span"),$(Eo.$$.fragment),lc=f(),qs=r("span"),cc=l("FNetForSequenceClassification"),xr=f(),U=r("div"),$(jo.$$.fragment),dc=f(),xs=r("p"),pc=l(`FNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),hc=f(),Po=r("p"),fc=l("This model is a PyTorch "),Mo=r("a"),mc=l("torch.nn.Module"),uc=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gc=f(),x=r("div"),$(Co.$$.fragment),_c=f(),je=r("p"),bc=l("The "),$n=r("a"),kc=l("FNetForSequenceClassification"),$c=l(" forward method, overrides the "),Es=r("code"),vc=l("__call__"),Fc=l(" special method."),wc=f(),$(dt.$$.fragment),Tc=f(),$(pt.$$.fragment),yc=f(),$(ht.$$.fragment),Nc=f(),$(ft.$$.fragment),zc=f(),$(mt.$$.fragment),Er=f(),Pe=r("h2"),ut=r("a"),js=r("span"),$(So.$$.fragment),qc=f(),Ps=r("span"),xc=l("FNetForMultipleChoice"),jr=f(),H=r("div"),$(Ao.$$.fragment),Ec=f(),Ms=r("p"),jc=l(`FNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Pc=f(),Lo=r("p"),Mc=l("This model is a PyTorch "),Io=r("a"),Cc=l("torch.nn.Module"),Sc=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ac=f(),Z=r("div"),$(Oo.$$.fragment),Lc=f(),Me=r("p"),Ic=l("The "),vn=r("a"),Oc=l("FNetForMultipleChoice"),Dc=l(" forward method, overrides the "),Cs=r("code"),Bc=l("__call__"),Wc=l(" special method."),Uc=f(),$(gt.$$.fragment),Hc=f(),$(_t.$$.fragment),Pr=f(),Ce=r("h2"),bt=r("a"),Ss=r("span"),$(Do.$$.fragment),Qc=f(),As=r("span"),Vc=l("FNetForTokenClassification"),Mr=f(),Q=r("div"),$(Bo.$$.fragment),Rc=f(),Ls=r("p"),Gc=l(`FNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Jc=f(),Wo=r("p"),Kc=l("This model is a PyTorch "),Uo=r("a"),Xc=l("torch.nn.Module"),Yc=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zc=f(),S=r("div"),$(Ho.$$.fragment),ed=f(),Se=r("p"),td=l("The "),Fn=r("a"),od=l("FNetForTokenClassification"),nd=l(" forward method, overrides the "),Is=r("code"),sd=l("__call__"),rd=l(" special method."),ad=f(),$(kt.$$.fragment),id=f(),$($t.$$.fragment),ld=f(),$(vt.$$.fragment),Cr=f(),Ae=r("h2"),Ft=r("a"),Os=r("span"),$(Qo.$$.fragment),cd=f(),Ds=r("span"),dd=l("FNetForQuestionAnswering"),Sr=f(),V=r("div"),$(Vo.$$.fragment),pd=f(),Le=r("p"),hd=l(`FNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Bs=r("code"),fd=l("span start logits"),md=l(" and "),Ws=r("code"),ud=l("span end logits"),gd=l(")."),_d=f(),Ro=r("p"),bd=l("This model is a PyTorch "),Go=r("a"),kd=l("torch.nn.Module"),$d=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vd=f(),A=r("div"),$(Jo.$$.fragment),Fd=f(),Ie=r("p"),wd=l("The "),wn=r("a"),Td=l("FNetForQuestionAnswering"),yd=l(" forward method, overrides the "),Us=r("code"),Nd=l("__call__"),zd=l(" special method."),qd=f(),$(wt.$$.fragment),xd=f(),$(Tt.$$.fragment),Ed=f(),$(yt.$$.fragment),this.h()},l(t){const g=_h('[data-svelte="svelte-1phssyn"]',document.head);s=a(g,"META",{name:!0,content:!0}),g.forEach(o),_=m(t),d=a(t,"H1",{class:!0});var Ko=i(d);p=a(Ko,"A",{id:!0,class:!0,href:!0});var Hs=i(p);b=a(Hs,"SPAN",{});var Qs=i(b);v(n.$$.fragment,Qs),Qs.forEach(o),Hs.forEach(o),h=m(Ko),z=a(Ko,"SPAN",{});var Vs=i(z);sa=c(Vs,"FNet"),Vs.forEach(o),Ko.forEach(o),lr=m(t),he=a(t,"H2",{class:!0});var Xo=i(he);Be=a(Xo,"A",{id:!0,class:!0,href:!0});var Rs=i(Be);Wn=a(Rs,"SPAN",{});var Gs=i(Wn);v(Bt.$$.fragment,Gs),Gs.forEach(o),Rs.forEach(o),ra=m(Xo),Un=a(Xo,"SPAN",{});var Js=i(Un);aa=c(Js,"Overview"),Js.forEach(o),Xo.forEach(o),cr=m(t),We=a(t,"P",{});var Yo=i(We);ia=c(Yo,"The FNet model was proposed in "),Wt=a(Yo,"A",{href:!0,rel:!0});var Ks=i(Wt);la=c(Ks,"FNet: Mixing Tokens with Fourier Transforms"),Ks.forEach(o),ca=c(Yo,` by
James Lee-Thorp, Joshua Ainslie, Ilya Eckstein, Santiago Ontanon. The model replaces the self-attention layer in a BERT
model with a fourier transform which returns only the real parts of the transform. The model is significantly faster
than the BERT model because it has fewer parameters and is more memory efficient. The model achieves about 92-97%
accuracy of BERT counterparts on GLUE benchmark, and trains much faster than the BERT model. The abstract from the
paper is the following:`),Yo.forEach(o),dr=m(t),en=a(t,"P",{});var Xs=i(en);Hn=a(Xs,"EM",{});var Ys=i(Hn);da=c(Ys,`We show that Transformer encoder architectures can be sped up, with limited accuracy costs, by replacing the
self-attention sublayers with simple linear transformations that \u201Cmix\u201D input tokens. These linear mixers, along with
standard nonlinearities in feed-forward layers, prove competent at modeling semantic relationships in several text
classification tasks. Most surprisingly, we find that replacing the self-attention sublayer in a Transformer encoder
with a standard, unparameterized Fourier Transform achieves 92-97% of the accuracy of BERT counterparts on the GLUE
benchmark, but trains 80% faster on GPUs and 70% faster on TPUs at standard 512 input lengths. At longer input lengths,
our FNet model is significantly faster: when compared to the \u201Cefficient\u201D Transformers on the Long Range Arena
benchmark, FNet matches the accuracy of the most accurate models, while outpacing the fastest models across all
sequence lengths on GPUs (and across relatively shorter lengths on TPUs). Finally, FNet has a light memory footprint
and is particularly efficient at smaller model sizes; for a fixed speed and accuracy budget, small FNet models
outperform Transformer counterparts.`),Ys.forEach(o),Xs.forEach(o),pr=m(t),tn=a(t,"P",{});var Zs=i(tn);pa=c(Zs,"Tips on usage:"),Zs.forEach(o),hr=m(t),on=a(t,"UL",{});var er=i(on);Qn=a(er,"LI",{});var tr=i(Qn);ha=c(tr,`The model was trained without an attention mask as it is based on Fourier Transform. The model was trained with
maximum sequence length 512 which includes pad tokens. Hence, it is highly recommended to use the same maximum
sequence length for fine-tuning and inference.`),tr.forEach(o),er.forEach(o),fr=m(t),re=a(t,"P",{});var Oe=i(re);fa=c(Oe,"This model was contributed by "),Ut=a(Oe,"A",{href:!0,rel:!0});var or=i(Ut);ma=c(or,"gchhablani"),or.forEach(o),ua=c(Oe,". The original code can be found "),Ht=a(Oe,"A",{href:!0,rel:!0});var nr=i(Ht);ga=c(nr,"here"),nr.forEach(o),_a=c(Oe,"."),Oe.forEach(o),mr=m(t),fe=a(t,"H2",{class:!0});var Zo=i(fe);Ue=a(Zo,"A",{id:!0,class:!0,href:!0});var sr=i(Ue);Vn=a(sr,"SPAN",{});var rr=i(Vn);v(Qt.$$.fragment,rr),rr.forEach(o),sr.forEach(o),ba=m(Zo),Rn=a(Zo,"SPAN",{});var ar=i(Rn);ka=c(ar,"FNetConfig"),ar.forEach(o),Zo.forEach(o),ur=m(t),I=a(t,"DIV",{class:!0});var se=i(I);v(Vt.$$.fragment,se),$a=m(se),me=a(se,"P",{});var De=i(me);va=c(De,"This is the configuration class to store the configuration of a "),nn=a(De,"A",{href:!0});var ir=i(nn);Fa=c(ir,"FNetModel"),ir.forEach(o),wa=c(De,`. It is used to instantiate an FNet
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the FNet
`),Rt=a(De,"A",{href:!0,rel:!0});var Sd=i(Rt);Ta=c(Sd,"google/fnet-base"),Sd.forEach(o),ya=c(De," architecture."),De.forEach(o),Na=m(se),ue=a(se,"P",{});var Tn=i(ue);za=c(Tn,"Configuration objects inherit from "),sn=a(Tn,"A",{href:!0});var Ad=i(sn);qa=c(Ad,"PretrainedConfig"),Ad.forEach(o),xa=c(Tn,` and can be used to control the model outputs. Read the
documentation from `),rn=a(Tn,"A",{href:!0});var Ld=i(rn);Ea=c(Ld,"PretrainedConfig"),Ld.forEach(o),ja=c(Tn," for more information."),Tn.forEach(o),Pa=m(se),v(He.$$.fragment,se),se.forEach(o),gr=m(t),ge=a(t,"H2",{class:!0});var Lr=i(ge);Qe=a(Lr,"A",{id:!0,class:!0,href:!0});var Id=i(Qe);Gn=a(Id,"SPAN",{});var Od=i(Gn);v(Gt.$$.fragment,Od),Od.forEach(o),Id.forEach(o),Ma=m(Lr),Jn=a(Lr,"SPAN",{});var Dd=i(Jn);Ca=c(Dd,"FNetTokenizer"),Dd.forEach(o),Lr.forEach(o),_r=m(t),E=a(t,"DIV",{class:!0});var ee=i(E);v(Jt.$$.fragment,ee),Sa=m(ee),te=a(ee,"P",{});var Nt=i(te);Aa=c(Nt,"Construct an FNet tokenizer. Adapted from "),an=a(Nt,"A",{href:!0});var Bd=i(an);La=c(Bd,"AlbertTokenizer"),Bd.forEach(o),Ia=c(Nt,`. Based on
`),Kt=a(Nt,"A",{href:!0,rel:!0});var Wd=i(Kt);Oa=c(Wd,"SentencePiece"),Wd.forEach(o),Da=c(Nt,". This tokenizer inherits from "),ln=a(Nt,"A",{href:!0});var Ud=i(ln);Ba=c(Ud,"PreTrainedTokenizer"),Ud.forEach(o),Wa=c(Nt,`
which contains most of the main methods. Users should refer to this superclass for more information regarding those
methods.`),Nt.forEach(o),Ua=m(ee),ae=a(ee,"DIV",{class:!0});var yn=i(ae);v(Xt.$$.fragment,yn),Ha=m(yn),Kn=a(yn,"P",{});var Hd=i(Kn);Qa=c(Hd,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An FNet sequence has the following format:`),Hd.forEach(o),Va=m(yn),Yt=a(yn,"UL",{});var Ir=i(Yt);cn=a(Ir,"LI",{});var jd=i(cn);Ra=c(jd,"single sequence: "),Xn=a(jd,"CODE",{});var Qd=i(Xn);Ga=c(Qd,"[CLS] X [SEP]"),Qd.forEach(o),jd.forEach(o),Ja=m(Ir),dn=a(Ir,"LI",{});var Pd=i(dn);Ka=c(Pd,"pair of sequences: "),Yn=a(Pd,"CODE",{});var Vd=i(Yn);Xa=c(Vd,"[CLS] A [SEP] B [SEP]"),Vd.forEach(o),Pd.forEach(o),Ir.forEach(o),yn.forEach(o),Ya=m(ee),Ve=a(ee,"DIV",{class:!0});var Or=i(Ve);v(Zt.$$.fragment,Or),Za=m(Or),eo=a(Or,"P",{});var Dr=i(eo);ei=c(Dr,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Zn=a(Dr,"CODE",{});var Rd=i(Zn);ti=c(Rd,"prepare_for_model"),Rd.forEach(o),oi=c(Dr," method."),Dr.forEach(o),Or.forEach(o),ni=m(ee),G=a(ee,"DIV",{class:!0});var zt=i(G);v(to.$$.fragment,zt),si=m(zt),es=a(zt,"P",{});var Gd=i(es);ri=c(Gd,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An FNet sequence"),Gd.forEach(o),ai=m(zt),v(Re.$$.fragment,zt),ii=m(zt),_e=a(zt,"P",{});var Nn=i(_e);li=c(Nn,"If "),ts=a(Nn,"CODE",{});var Jd=i(ts);ci=c(Jd,"token_ids_1"),Jd.forEach(o),di=c(Nn," is "),os=a(Nn,"CODE",{});var Kd=i(os);pi=c(Kd,"None"),Kd.forEach(o),hi=c(Nn,", this method only returns the first portion of the mask (0s)."),Nn.forEach(o),zt.forEach(o),fi=m(ee),pn=a(ee,"DIV",{class:!0});var Xd=i(pn);v(oo.$$.fragment,Xd),Xd.forEach(o),ee.forEach(o),br=m(t),be=a(t,"H2",{class:!0});var Br=i(be);Ge=a(Br,"A",{id:!0,class:!0,href:!0});var Yd=i(Ge);ns=a(Yd,"SPAN",{});var Zd=i(ns);v(no.$$.fragment,Zd),Zd.forEach(o),Yd.forEach(o),mi=m(Br),ss=a(Br,"SPAN",{});var ep=i(ss);ui=c(ep,"FNetTokenizerFast"),ep.forEach(o),Br.forEach(o),kr=m(t),O=a(t,"DIV",{class:!0});var qt=i(O);v(so.$$.fragment,qt),gi=m(qt),D=a(qt,"P",{});var le=i(D);_i=c(le,"Construct a \u201Cfast\u201D FNetTokenizer (backed by HuggingFace\u2019s "),rs=a(le,"EM",{});var tp=i(rs);bi=c(tp,"tokenizers"),tp.forEach(o),ki=c(le,` library). Adapted from
`),hn=a(le,"A",{href:!0});var op=i(hn);$i=c(op,"AlbertTokenizerFast"),op.forEach(o),vi=c(le,`. Based on
`),ro=a(le,"A",{href:!0,rel:!0});var np=i(ro);Fi=c(np,"Unigram"),np.forEach(o),wi=c(le,`. This
tokenizer inherits from `),fn=a(le,"A",{href:!0});var sp=i(fn);Ti=c(sp,"PreTrainedTokenizerFast"),sp.forEach(o),yi=c(le,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),le.forEach(o),Ni=m(qt),ie=a(qt,"DIV",{class:!0});var zn=i(ie);v(ao.$$.fragment,zn),zi=m(zn),as=a(zn,"P",{});var rp=i(as);qi=c(rp,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An FNet sequence has the following format:`),rp.forEach(o),xi=m(zn),io=a(zn,"UL",{});var Wr=i(io);mn=a(Wr,"LI",{});var Md=i(mn);Ei=c(Md,"single sequence: "),is=a(Md,"CODE",{});var ap=i(is);ji=c(ap,"[CLS] X [SEP]"),ap.forEach(o),Md.forEach(o),Pi=m(Wr),un=a(Wr,"LI",{});var Cd=i(un);Mi=c(Cd,"pair of sequences: "),ls=a(Cd,"CODE",{});var ip=i(ls);Ci=c(ip,"[CLS] A [SEP] B [SEP]"),ip.forEach(o),Cd.forEach(o),Wr.forEach(o),zn.forEach(o),Si=m(qt),J=a(qt,"DIV",{class:!0});var xt=i(J);v(lo.$$.fragment,xt),Ai=m(xt),cs=a(xt,"P",{});var lp=i(cs);Li=c(lp,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An FNet"),lp.forEach(o),Ii=m(xt),v(Je.$$.fragment,xt),Oi=m(xt),ds=a(xt,"P",{});var cp=i(ds);Di=c(cp,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),cp.forEach(o),xt.forEach(o),qt.forEach(o),$r=m(t),ke=a(t,"H2",{class:!0});var Ur=i(ke);Ke=a(Ur,"A",{id:!0,class:!0,href:!0});var dp=i(Ke);ps=a(dp,"SPAN",{});var pp=i(ps);v(co.$$.fragment,pp),pp.forEach(o),dp.forEach(o),Bi=m(Ur),hs=a(Ur,"SPAN",{});var hp=i(hs);Wi=c(hp,"FNetModel"),hp.forEach(o),Ur.forEach(o),vr=m(t),B=a(t,"DIV",{class:!0});var Et=i(B);v(po.$$.fragment,Et),Ui=m(Et),ho=a(Et,"P",{});var Hr=i(ho);Hi=c(Hr,`The bare FNet Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),fo=a(Hr,"A",{href:!0,rel:!0});var fp=i(fo);Qi=c(fp,"torch.nn.Module"),fp.forEach(o),Vi=c(Hr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hr.forEach(o),Ri=m(Et),mo=a(Et,"P",{});var Qr=i(mo);Gi=c(Qr,"The model can behave as an encoder, following the architecture described in "),uo=a(Qr,"A",{href:!0,rel:!0});var mp=i(uo);Ji=c(mp,`FNet: Mixing Tokens with Fourier
Transforms`),mp.forEach(o),Ki=c(Qr," by James Lee-Thorp, Joshua Ainslie, Ilya Eckstein, Santiago Ontanon."),Qr.forEach(o),Xi=m(Et),K=a(Et,"DIV",{class:!0});var jt=i(K);v(go.$$.fragment,jt),Yi=m(jt),$e=a(jt,"P",{});var qn=i($e);Zi=c(qn,"The "),gn=a(qn,"A",{href:!0});var up=i(gn);el=c(up,"FNetModel"),up.forEach(o),tl=c(qn," forward method, overrides the "),fs=a(qn,"CODE",{});var gp=i(fs);ol=c(gp,"__call__"),gp.forEach(o),nl=c(qn," special method."),qn.forEach(o),sl=m(jt),v(Xe.$$.fragment,jt),rl=m(jt),v(Ye.$$.fragment,jt),jt.forEach(o),Et.forEach(o),Fr=m(t),ve=a(t,"H2",{class:!0});var Vr=i(ve);Ze=a(Vr,"A",{id:!0,class:!0,href:!0});var _p=i(Ze);ms=a(_p,"SPAN",{});var bp=i(ms);v(_o.$$.fragment,bp),bp.forEach(o),_p.forEach(o),al=m(Vr),us=a(Vr,"SPAN",{});var kp=i(us);il=c(kp,"FNetForPreTraining"),kp.forEach(o),Vr.forEach(o),wr=m(t),W=a(t,"DIV",{class:!0});var Pt=i(W);v(bo.$$.fragment,Pt),ll=m(Pt),Fe=a(Pt,"P",{});var xn=i(Fe);cl=c(xn,"FNet Model with two heads on top as done during the pretraining: a "),gs=a(xn,"CODE",{});var $p=i(gs);dl=c($p,"masked language modeling"),$p.forEach(o),pl=c(xn," head and a "),_s=a(xn,"CODE",{});var vp=i(_s);hl=c(vp,"next sentence prediction (classification)"),vp.forEach(o),fl=c(xn," head."),xn.forEach(o),ml=m(Pt),ko=a(Pt,"P",{});var Rr=i(ko);ul=c(Rr,"This model is a PyTorch "),$o=a(Rr,"A",{href:!0,rel:!0});var Fp=i($o);gl=c(Fp,"torch.nn.Module"),Fp.forEach(o),_l=c(Rr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Rr.forEach(o),bl=m(Pt),X=a(Pt,"DIV",{class:!0});var Mt=i(X);v(vo.$$.fragment,Mt),kl=m(Mt),we=a(Mt,"P",{});var En=i(we);$l=c(En,"The "),_n=a(En,"A",{href:!0});var wp=i(_n);vl=c(wp,"FNetForPreTraining"),wp.forEach(o),Fl=c(En," forward method, overrides the "),bs=a(En,"CODE",{});var Tp=i(bs);wl=c(Tp,"__call__"),Tp.forEach(o),Tl=c(En," special method."),En.forEach(o),yl=m(Mt),v(et.$$.fragment,Mt),Nl=m(Mt),v(tt.$$.fragment,Mt),Mt.forEach(o),Pt.forEach(o),Tr=m(t),Te=a(t,"H2",{class:!0});var Gr=i(Te);ot=a(Gr,"A",{id:!0,class:!0,href:!0});var yp=i(ot);ks=a(yp,"SPAN",{});var Np=i(ks);v(Fo.$$.fragment,Np),Np.forEach(o),yp.forEach(o),zl=m(Gr),$s=a(Gr,"SPAN",{});var zp=i($s);ql=c(zp,"FNetForMaskedLM"),zp.forEach(o),Gr.forEach(o),yr=m(t),oe=a(t,"DIV",{class:!0});var jn=i(oe);v(wo.$$.fragment,jn),xl=m(jn),ye=a(jn,"P",{});var Pn=i(ye);El=c(Pn,"FNet Model with a "),vs=a(Pn,"CODE",{});var qp=i(vs);jl=c(qp,"language modeling"),qp.forEach(o),Pl=c(Pn,` head on top.
This model is a PyTorch `),To=a(Pn,"A",{href:!0,rel:!0});var xp=i(To);Ml=c(xp,"torch.nn.Module"),xp.forEach(o),Cl=c(Pn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pn.forEach(o),Sl=m(jn),C=a(jn,"DIV",{class:!0});var ce=i(C);v(yo.$$.fragment,ce),Al=m(ce),Ne=a(ce,"P",{});var Mn=i(Ne);Ll=c(Mn,"The "),bn=a(Mn,"A",{href:!0});var Ep=i(bn);Il=c(Ep,"FNetForMaskedLM"),Ep.forEach(o),Ol=c(Mn," forward method, overrides the "),Fs=a(Mn,"CODE",{});var jp=i(Fs);Dl=c(jp,"__call__"),jp.forEach(o),Bl=c(Mn," special method."),Mn.forEach(o),Wl=m(ce),v(nt.$$.fragment,ce),Ul=m(ce),v(st.$$.fragment,ce),Hl=m(ce),v(rt.$$.fragment,ce),ce.forEach(o),jn.forEach(o),Nr=m(t),ze=a(t,"H2",{class:!0});var Jr=i(ze);at=a(Jr,"A",{id:!0,class:!0,href:!0});var Pp=i(at);ws=a(Pp,"SPAN",{});var Mp=i(ws);v(No.$$.fragment,Mp),Mp.forEach(o),Pp.forEach(o),Ql=m(Jr),Ts=a(Jr,"SPAN",{});var Cp=i(Ts);Vl=c(Cp,"FNetForNextSentencePrediction"),Cp.forEach(o),Jr.forEach(o),zr=m(t),ne=a(t,"DIV",{class:!0});var Cn=i(ne);v(zo.$$.fragment,Cn),Rl=m(Cn),qe=a(Cn,"P",{});var Sn=i(qe);Gl=c(Sn,"FNet Model with a "),ys=a(Sn,"CODE",{});var Sp=i(ys);Jl=c(Sp,"next sentence prediction (classification)"),Sp.forEach(o),Kl=c(Sn,` head on top.
This model is a PyTorch `),qo=a(Sn,"A",{href:!0,rel:!0});var Ap=i(qo);Xl=c(Ap,"torch.nn.Module"),Ap.forEach(o),Yl=c(Sn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Sn.forEach(o),Zl=m(Cn),Y=a(Cn,"DIV",{class:!0});var Ct=i(Y);v(xo.$$.fragment,Ct),ec=m(Ct),xe=a(Ct,"P",{});var An=i(xe);tc=c(An,"The "),kn=a(An,"A",{href:!0});var Lp=i(kn);oc=c(Lp,"FNetForNextSentencePrediction"),Lp.forEach(o),nc=c(An," forward method, overrides the "),Ns=a(An,"CODE",{});var Ip=i(Ns);sc=c(Ip,"__call__"),Ip.forEach(o),rc=c(An," special method."),An.forEach(o),ac=m(Ct),v(it.$$.fragment,Ct),ic=m(Ct),v(lt.$$.fragment,Ct),Ct.forEach(o),Cn.forEach(o),qr=m(t),Ee=a(t,"H2",{class:!0});var Kr=i(Ee);ct=a(Kr,"A",{id:!0,class:!0,href:!0});var Op=i(ct);zs=a(Op,"SPAN",{});var Dp=i(zs);v(Eo.$$.fragment,Dp),Dp.forEach(o),Op.forEach(o),lc=m(Kr),qs=a(Kr,"SPAN",{});var Bp=i(qs);cc=c(Bp,"FNetForSequenceClassification"),Bp.forEach(o),Kr.forEach(o),xr=m(t),U=a(t,"DIV",{class:!0});var St=i(U);v(jo.$$.fragment,St),dc=m(St),xs=a(St,"P",{});var Wp=i(xs);pc=c(Wp,`FNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Wp.forEach(o),hc=m(St),Po=a(St,"P",{});var Xr=i(Po);fc=c(Xr,"This model is a PyTorch "),Mo=a(Xr,"A",{href:!0,rel:!0});var Up=i(Mo);mc=c(Up,"torch.nn.Module"),Up.forEach(o),uc=c(Xr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xr.forEach(o),gc=m(St),x=a(St,"DIV",{class:!0});var L=i(x);v(Co.$$.fragment,L),_c=m(L),je=a(L,"P",{});var Ln=i(je);bc=c(Ln,"The "),$n=a(Ln,"A",{href:!0});var Hp=i($n);kc=c(Hp,"FNetForSequenceClassification"),Hp.forEach(o),$c=c(Ln," forward method, overrides the "),Es=a(Ln,"CODE",{});var Qp=i(Es);vc=c(Qp,"__call__"),Qp.forEach(o),Fc=c(Ln," special method."),Ln.forEach(o),wc=m(L),v(dt.$$.fragment,L),Tc=m(L),v(pt.$$.fragment,L),yc=m(L),v(ht.$$.fragment,L),Nc=m(L),v(ft.$$.fragment,L),zc=m(L),v(mt.$$.fragment,L),L.forEach(o),St.forEach(o),Er=m(t),Pe=a(t,"H2",{class:!0});var Yr=i(Pe);ut=a(Yr,"A",{id:!0,class:!0,href:!0});var Vp=i(ut);js=a(Vp,"SPAN",{});var Rp=i(js);v(So.$$.fragment,Rp),Rp.forEach(o),Vp.forEach(o),qc=m(Yr),Ps=a(Yr,"SPAN",{});var Gp=i(Ps);xc=c(Gp,"FNetForMultipleChoice"),Gp.forEach(o),Yr.forEach(o),jr=m(t),H=a(t,"DIV",{class:!0});var At=i(H);v(Ao.$$.fragment,At),Ec=m(At),Ms=a(At,"P",{});var Jp=i(Ms);jc=c(Jp,`FNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Jp.forEach(o),Pc=m(At),Lo=a(At,"P",{});var Zr=i(Lo);Mc=c(Zr,"This model is a PyTorch "),Io=a(Zr,"A",{href:!0,rel:!0});var Kp=i(Io);Cc=c(Kp,"torch.nn.Module"),Kp.forEach(o),Sc=c(Zr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zr.forEach(o),Ac=m(At),Z=a(At,"DIV",{class:!0});var Lt=i(Z);v(Oo.$$.fragment,Lt),Lc=m(Lt),Me=a(Lt,"P",{});var In=i(Me);Ic=c(In,"The "),vn=a(In,"A",{href:!0});var Xp=i(vn);Oc=c(Xp,"FNetForMultipleChoice"),Xp.forEach(o),Dc=c(In," forward method, overrides the "),Cs=a(In,"CODE",{});var Yp=i(Cs);Bc=c(Yp,"__call__"),Yp.forEach(o),Wc=c(In," special method."),In.forEach(o),Uc=m(Lt),v(gt.$$.fragment,Lt),Hc=m(Lt),v(_t.$$.fragment,Lt),Lt.forEach(o),At.forEach(o),Pr=m(t),Ce=a(t,"H2",{class:!0});var ea=i(Ce);bt=a(ea,"A",{id:!0,class:!0,href:!0});var Zp=i(bt);Ss=a(Zp,"SPAN",{});var eh=i(Ss);v(Do.$$.fragment,eh),eh.forEach(o),Zp.forEach(o),Qc=m(ea),As=a(ea,"SPAN",{});var th=i(As);Vc=c(th,"FNetForTokenClassification"),th.forEach(o),ea.forEach(o),Mr=m(t),Q=a(t,"DIV",{class:!0});var It=i(Q);v(Bo.$$.fragment,It),Rc=m(It),Ls=a(It,"P",{});var oh=i(Ls);Gc=c(oh,`FNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),oh.forEach(o),Jc=m(It),Wo=a(It,"P",{});var ta=i(Wo);Kc=c(ta,"This model is a PyTorch "),Uo=a(ta,"A",{href:!0,rel:!0});var nh=i(Uo);Xc=c(nh,"torch.nn.Module"),nh.forEach(o),Yc=c(ta,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ta.forEach(o),Zc=m(It),S=a(It,"DIV",{class:!0});var de=i(S);v(Ho.$$.fragment,de),ed=m(de),Se=a(de,"P",{});var On=i(Se);td=c(On,"The "),Fn=a(On,"A",{href:!0});var sh=i(Fn);od=c(sh,"FNetForTokenClassification"),sh.forEach(o),nd=c(On," forward method, overrides the "),Is=a(On,"CODE",{});var rh=i(Is);sd=c(rh,"__call__"),rh.forEach(o),rd=c(On," special method."),On.forEach(o),ad=m(de),v(kt.$$.fragment,de),id=m(de),v($t.$$.fragment,de),ld=m(de),v(vt.$$.fragment,de),de.forEach(o),It.forEach(o),Cr=m(t),Ae=a(t,"H2",{class:!0});var oa=i(Ae);Ft=a(oa,"A",{id:!0,class:!0,href:!0});var ah=i(Ft);Os=a(ah,"SPAN",{});var ih=i(Os);v(Qo.$$.fragment,ih),ih.forEach(o),ah.forEach(o),cd=m(oa),Ds=a(oa,"SPAN",{});var lh=i(Ds);dd=c(lh,"FNetForQuestionAnswering"),lh.forEach(o),oa.forEach(o),Sr=m(t),V=a(t,"DIV",{class:!0});var Ot=i(V);v(Vo.$$.fragment,Ot),pd=m(Ot),Le=a(Ot,"P",{});var Dn=i(Le);hd=c(Dn,`FNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Bs=a(Dn,"CODE",{});var ch=i(Bs);fd=c(ch,"span start logits"),ch.forEach(o),md=c(Dn," and "),Ws=a(Dn,"CODE",{});var dh=i(Ws);ud=c(dh,"span end logits"),dh.forEach(o),gd=c(Dn,")."),Dn.forEach(o),_d=m(Ot),Ro=a(Ot,"P",{});var na=i(Ro);bd=c(na,"This model is a PyTorch "),Go=a(na,"A",{href:!0,rel:!0});var ph=i(Go);kd=c(ph,"torch.nn.Module"),ph.forEach(o),$d=c(na,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),na.forEach(o),vd=m(Ot),A=a(Ot,"DIV",{class:!0});var pe=i(A);v(Jo.$$.fragment,pe),Fd=m(pe),Ie=a(pe,"P",{});var Bn=i(Ie);wd=c(Bn,"The "),wn=a(Bn,"A",{href:!0});var hh=i(wn);Td=c(hh,"FNetForQuestionAnswering"),hh.forEach(o),yd=c(Bn," forward method, overrides the "),Us=a(Bn,"CODE",{});var fh=i(Us);Nd=c(fh,"__call__"),fh.forEach(o),zd=c(Bn," special method."),Bn.forEach(o),qd=m(pe),v(wt.$$.fragment,pe),xd=m(pe),v(Tt.$$.fragment,pe),Ed=m(pe),v(yt.$$.fragment,pe),pe.forEach(o),Ot.forEach(o),this.h()},h(){u(s,"name","hf:doc:metadata"),u(s,"content",JSON.stringify(Qh)),u(p,"id","fnet"),u(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(p,"href","#fnet"),u(d,"class","relative group"),u(Be,"id","overview"),u(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Be,"href","#overview"),u(he,"class","relative group"),u(Wt,"href","https://arxiv.org/abs/2105.03824"),u(Wt,"rel","nofollow"),u(Ut,"href","https://huggingface.co/gchhablani"),u(Ut,"rel","nofollow"),u(Ht,"href","https://github.com/google-research/google-research/tree/master/f_net"),u(Ht,"rel","nofollow"),u(Ue,"id","transformers.FNetConfig"),u(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ue,"href","#transformers.FNetConfig"),u(fe,"class","relative group"),u(nn,"href","/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetModel"),u(Rt,"href","https://huggingface.co/google/fnet-base"),u(Rt,"rel","nofollow"),u(sn,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),u(rn,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),u(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"id","transformers.FNetTokenizer"),u(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qe,"href","#transformers.FNetTokenizer"),u(ge,"class","relative group"),u(an,"href","/docs/transformers/v4.22.2/en/model_doc/albert#transformers.AlbertTokenizer"),u(Kt,"href","https://github.com/google/sentencepiece"),u(Kt,"rel","nofollow"),u(ln,"href","/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"id","transformers.FNetTokenizerFast"),u(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ge,"href","#transformers.FNetTokenizerFast"),u(be,"class","relative group"),u(hn,"href","/docs/transformers/v4.22.2/en/model_doc/albert#transformers.AlbertTokenizerFast"),u(ro,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),u(ro,"rel","nofollow"),u(fn,"href","/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"id","transformers.FNetModel"),u(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ke,"href","#transformers.FNetModel"),u(ke,"class","relative group"),u(fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(fo,"rel","nofollow"),u(uo,"href","https://arxiv.org/abs/2105.03824"),u(uo,"rel","nofollow"),u(gn,"href","/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetModel"),u(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"id","transformers.FNetForPreTraining"),u(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ze,"href","#transformers.FNetForPreTraining"),u(ve,"class","relative group"),u($o,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u($o,"rel","nofollow"),u(_n,"href","/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetForPreTraining"),u(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"id","transformers.FNetForMaskedLM"),u(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ot,"href","#transformers.FNetForMaskedLM"),u(Te,"class","relative group"),u(To,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(To,"rel","nofollow"),u(bn,"href","/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetForMaskedLM"),u(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"id","transformers.FNetForNextSentencePrediction"),u(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(at,"href","#transformers.FNetForNextSentencePrediction"),u(ze,"class","relative group"),u(qo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(qo,"rel","nofollow"),u(kn,"href","/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetForNextSentencePrediction"),u(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"id","transformers.FNetForSequenceClassification"),u(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ct,"href","#transformers.FNetForSequenceClassification"),u(Ee,"class","relative group"),u(Mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Mo,"rel","nofollow"),u($n,"href","/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetForSequenceClassification"),u(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ut,"id","transformers.FNetForMultipleChoice"),u(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ut,"href","#transformers.FNetForMultipleChoice"),u(Pe,"class","relative group"),u(Io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Io,"rel","nofollow"),u(vn,"href","/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetForMultipleChoice"),u(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"id","transformers.FNetForTokenClassification"),u(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bt,"href","#transformers.FNetForTokenClassification"),u(Ce,"class","relative group"),u(Uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Uo,"rel","nofollow"),u(Fn,"href","/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetForTokenClassification"),u(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ft,"id","transformers.FNetForQuestionAnswering"),u(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ft,"href","#transformers.FNetForQuestionAnswering"),u(Ae,"class","relative group"),u(Go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Go,"rel","nofollow"),u(wn,"href","/docs/transformers/v4.22.2/en/model_doc/fnet#transformers.FNetForQuestionAnswering"),u(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,s),k(t,_,g),k(t,d,g),e(d,p),e(p,b),F(n,b,null),e(d,h),e(d,z),e(z,sa),k(t,lr,g),k(t,he,g),e(he,Be),e(Be,Wn),F(Bt,Wn,null),e(he,ra),e(he,Un),e(Un,aa),k(t,cr,g),k(t,We,g),e(We,ia),e(We,Wt),e(Wt,la),e(We,ca),k(t,dr,g),k(t,en,g),e(en,Hn),e(Hn,da),k(t,pr,g),k(t,tn,g),e(tn,pa),k(t,hr,g),k(t,on,g),e(on,Qn),e(Qn,ha),k(t,fr,g),k(t,re,g),e(re,fa),e(re,Ut),e(Ut,ma),e(re,ua),e(re,Ht),e(Ht,ga),e(re,_a),k(t,mr,g),k(t,fe,g),e(fe,Ue),e(Ue,Vn),F(Qt,Vn,null),e(fe,ba),e(fe,Rn),e(Rn,ka),k(t,ur,g),k(t,I,g),F(Vt,I,null),e(I,$a),e(I,me),e(me,va),e(me,nn),e(nn,Fa),e(me,wa),e(me,Rt),e(Rt,Ta),e(me,ya),e(I,Na),e(I,ue),e(ue,za),e(ue,sn),e(sn,qa),e(ue,xa),e(ue,rn),e(rn,Ea),e(ue,ja),e(I,Pa),F(He,I,null),k(t,gr,g),k(t,ge,g),e(ge,Qe),e(Qe,Gn),F(Gt,Gn,null),e(ge,Ma),e(ge,Jn),e(Jn,Ca),k(t,_r,g),k(t,E,g),F(Jt,E,null),e(E,Sa),e(E,te),e(te,Aa),e(te,an),e(an,La),e(te,Ia),e(te,Kt),e(Kt,Oa),e(te,Da),e(te,ln),e(ln,Ba),e(te,Wa),e(E,Ua),e(E,ae),F(Xt,ae,null),e(ae,Ha),e(ae,Kn),e(Kn,Qa),e(ae,Va),e(ae,Yt),e(Yt,cn),e(cn,Ra),e(cn,Xn),e(Xn,Ga),e(Yt,Ja),e(Yt,dn),e(dn,Ka),e(dn,Yn),e(Yn,Xa),e(E,Ya),e(E,Ve),F(Zt,Ve,null),e(Ve,Za),e(Ve,eo),e(eo,ei),e(eo,Zn),e(Zn,ti),e(eo,oi),e(E,ni),e(E,G),F(to,G,null),e(G,si),e(G,es),e(es,ri),e(G,ai),F(Re,G,null),e(G,ii),e(G,_e),e(_e,li),e(_e,ts),e(ts,ci),e(_e,di),e(_e,os),e(os,pi),e(_e,hi),e(E,fi),e(E,pn),F(oo,pn,null),k(t,br,g),k(t,be,g),e(be,Ge),e(Ge,ns),F(no,ns,null),e(be,mi),e(be,ss),e(ss,ui),k(t,kr,g),k(t,O,g),F(so,O,null),e(O,gi),e(O,D),e(D,_i),e(D,rs),e(rs,bi),e(D,ki),e(D,hn),e(hn,$i),e(D,vi),e(D,ro),e(ro,Fi),e(D,wi),e(D,fn),e(fn,Ti),e(D,yi),e(O,Ni),e(O,ie),F(ao,ie,null),e(ie,zi),e(ie,as),e(as,qi),e(ie,xi),e(ie,io),e(io,mn),e(mn,Ei),e(mn,is),e(is,ji),e(io,Pi),e(io,un),e(un,Mi),e(un,ls),e(ls,Ci),e(O,Si),e(O,J),F(lo,J,null),e(J,Ai),e(J,cs),e(cs,Li),e(J,Ii),F(Je,J,null),e(J,Oi),e(J,ds),e(ds,Di),k(t,$r,g),k(t,ke,g),e(ke,Ke),e(Ke,ps),F(co,ps,null),e(ke,Bi),e(ke,hs),e(hs,Wi),k(t,vr,g),k(t,B,g),F(po,B,null),e(B,Ui),e(B,ho),e(ho,Hi),e(ho,fo),e(fo,Qi),e(ho,Vi),e(B,Ri),e(B,mo),e(mo,Gi),e(mo,uo),e(uo,Ji),e(mo,Ki),e(B,Xi),e(B,K),F(go,K,null),e(K,Yi),e(K,$e),e($e,Zi),e($e,gn),e(gn,el),e($e,tl),e($e,fs),e(fs,ol),e($e,nl),e(K,sl),F(Xe,K,null),e(K,rl),F(Ye,K,null),k(t,Fr,g),k(t,ve,g),e(ve,Ze),e(Ze,ms),F(_o,ms,null),e(ve,al),e(ve,us),e(us,il),k(t,wr,g),k(t,W,g),F(bo,W,null),e(W,ll),e(W,Fe),e(Fe,cl),e(Fe,gs),e(gs,dl),e(Fe,pl),e(Fe,_s),e(_s,hl),e(Fe,fl),e(W,ml),e(W,ko),e(ko,ul),e(ko,$o),e($o,gl),e(ko,_l),e(W,bl),e(W,X),F(vo,X,null),e(X,kl),e(X,we),e(we,$l),e(we,_n),e(_n,vl),e(we,Fl),e(we,bs),e(bs,wl),e(we,Tl),e(X,yl),F(et,X,null),e(X,Nl),F(tt,X,null),k(t,Tr,g),k(t,Te,g),e(Te,ot),e(ot,ks),F(Fo,ks,null),e(Te,zl),e(Te,$s),e($s,ql),k(t,yr,g),k(t,oe,g),F(wo,oe,null),e(oe,xl),e(oe,ye),e(ye,El),e(ye,vs),e(vs,jl),e(ye,Pl),e(ye,To),e(To,Ml),e(ye,Cl),e(oe,Sl),e(oe,C),F(yo,C,null),e(C,Al),e(C,Ne),e(Ne,Ll),e(Ne,bn),e(bn,Il),e(Ne,Ol),e(Ne,Fs),e(Fs,Dl),e(Ne,Bl),e(C,Wl),F(nt,C,null),e(C,Ul),F(st,C,null),e(C,Hl),F(rt,C,null),k(t,Nr,g),k(t,ze,g),e(ze,at),e(at,ws),F(No,ws,null),e(ze,Ql),e(ze,Ts),e(Ts,Vl),k(t,zr,g),k(t,ne,g),F(zo,ne,null),e(ne,Rl),e(ne,qe),e(qe,Gl),e(qe,ys),e(ys,Jl),e(qe,Kl),e(qe,qo),e(qo,Xl),e(qe,Yl),e(ne,Zl),e(ne,Y),F(xo,Y,null),e(Y,ec),e(Y,xe),e(xe,tc),e(xe,kn),e(kn,oc),e(xe,nc),e(xe,Ns),e(Ns,sc),e(xe,rc),e(Y,ac),F(it,Y,null),e(Y,ic),F(lt,Y,null),k(t,qr,g),k(t,Ee,g),e(Ee,ct),e(ct,zs),F(Eo,zs,null),e(Ee,lc),e(Ee,qs),e(qs,cc),k(t,xr,g),k(t,U,g),F(jo,U,null),e(U,dc),e(U,xs),e(xs,pc),e(U,hc),e(U,Po),e(Po,fc),e(Po,Mo),e(Mo,mc),e(Po,uc),e(U,gc),e(U,x),F(Co,x,null),e(x,_c),e(x,je),e(je,bc),e(je,$n),e($n,kc),e(je,$c),e(je,Es),e(Es,vc),e(je,Fc),e(x,wc),F(dt,x,null),e(x,Tc),F(pt,x,null),e(x,yc),F(ht,x,null),e(x,Nc),F(ft,x,null),e(x,zc),F(mt,x,null),k(t,Er,g),k(t,Pe,g),e(Pe,ut),e(ut,js),F(So,js,null),e(Pe,qc),e(Pe,Ps),e(Ps,xc),k(t,jr,g),k(t,H,g),F(Ao,H,null),e(H,Ec),e(H,Ms),e(Ms,jc),e(H,Pc),e(H,Lo),e(Lo,Mc),e(Lo,Io),e(Io,Cc),e(Lo,Sc),e(H,Ac),e(H,Z),F(Oo,Z,null),e(Z,Lc),e(Z,Me),e(Me,Ic),e(Me,vn),e(vn,Oc),e(Me,Dc),e(Me,Cs),e(Cs,Bc),e(Me,Wc),e(Z,Uc),F(gt,Z,null),e(Z,Hc),F(_t,Z,null),k(t,Pr,g),k(t,Ce,g),e(Ce,bt),e(bt,Ss),F(Do,Ss,null),e(Ce,Qc),e(Ce,As),e(As,Vc),k(t,Mr,g),k(t,Q,g),F(Bo,Q,null),e(Q,Rc),e(Q,Ls),e(Ls,Gc),e(Q,Jc),e(Q,Wo),e(Wo,Kc),e(Wo,Uo),e(Uo,Xc),e(Wo,Yc),e(Q,Zc),e(Q,S),F(Ho,S,null),e(S,ed),e(S,Se),e(Se,td),e(Se,Fn),e(Fn,od),e(Se,nd),e(Se,Is),e(Is,sd),e(Se,rd),e(S,ad),F(kt,S,null),e(S,id),F($t,S,null),e(S,ld),F(vt,S,null),k(t,Cr,g),k(t,Ae,g),e(Ae,Ft),e(Ft,Os),F(Qo,Os,null),e(Ae,cd),e(Ae,Ds),e(Ds,dd),k(t,Sr,g),k(t,V,g),F(Vo,V,null),e(V,pd),e(V,Le),e(Le,hd),e(Le,Bs),e(Bs,fd),e(Le,md),e(Le,Ws),e(Ws,ud),e(Le,gd),e(V,_d),e(V,Ro),e(Ro,bd),e(Ro,Go),e(Go,kd),e(Ro,$d),e(V,vd),e(V,A),F(Jo,A,null),e(A,Fd),e(A,Ie),e(Ie,wd),e(Ie,wn),e(wn,Td),e(Ie,yd),e(Ie,Us),e(Us,Nd),e(Ie,zd),e(A,qd),F(wt,A,null),e(A,xd),F(Tt,A,null),e(A,Ed),F(yt,A,null),Ar=!0},p(t,[g]){const Ko={};g&2&&(Ko.$$scope={dirty:g,ctx:t}),He.$set(Ko);const Hs={};g&2&&(Hs.$$scope={dirty:g,ctx:t}),Re.$set(Hs);const Qs={};g&2&&(Qs.$$scope={dirty:g,ctx:t}),Je.$set(Qs);const Vs={};g&2&&(Vs.$$scope={dirty:g,ctx:t}),Xe.$set(Vs);const Xo={};g&2&&(Xo.$$scope={dirty:g,ctx:t}),Ye.$set(Xo);const Rs={};g&2&&(Rs.$$scope={dirty:g,ctx:t}),et.$set(Rs);const Gs={};g&2&&(Gs.$$scope={dirty:g,ctx:t}),tt.$set(Gs);const Js={};g&2&&(Js.$$scope={dirty:g,ctx:t}),nt.$set(Js);const Yo={};g&2&&(Yo.$$scope={dirty:g,ctx:t}),st.$set(Yo);const Ks={};g&2&&(Ks.$$scope={dirty:g,ctx:t}),rt.$set(Ks);const Xs={};g&2&&(Xs.$$scope={dirty:g,ctx:t}),it.$set(Xs);const Ys={};g&2&&(Ys.$$scope={dirty:g,ctx:t}),lt.$set(Ys);const Zs={};g&2&&(Zs.$$scope={dirty:g,ctx:t}),dt.$set(Zs);const er={};g&2&&(er.$$scope={dirty:g,ctx:t}),pt.$set(er);const tr={};g&2&&(tr.$$scope={dirty:g,ctx:t}),ht.$set(tr);const Oe={};g&2&&(Oe.$$scope={dirty:g,ctx:t}),ft.$set(Oe);const or={};g&2&&(or.$$scope={dirty:g,ctx:t}),mt.$set(or);const nr={};g&2&&(nr.$$scope={dirty:g,ctx:t}),gt.$set(nr);const Zo={};g&2&&(Zo.$$scope={dirty:g,ctx:t}),_t.$set(Zo);const sr={};g&2&&(sr.$$scope={dirty:g,ctx:t}),kt.$set(sr);const rr={};g&2&&(rr.$$scope={dirty:g,ctx:t}),$t.$set(rr);const ar={};g&2&&(ar.$$scope={dirty:g,ctx:t}),vt.$set(ar);const se={};g&2&&(se.$$scope={dirty:g,ctx:t}),wt.$set(se);const De={};g&2&&(De.$$scope={dirty:g,ctx:t}),Tt.$set(De);const ir={};g&2&&(ir.$$scope={dirty:g,ctx:t}),yt.$set(ir)},i(t){Ar||(w(n.$$.fragment,t),w(Bt.$$.fragment,t),w(Qt.$$.fragment,t),w(Vt.$$.fragment,t),w(He.$$.fragment,t),w(Gt.$$.fragment,t),w(Jt.$$.fragment,t),w(Xt.$$.fragment,t),w(Zt.$$.fragment,t),w(to.$$.fragment,t),w(Re.$$.fragment,t),w(oo.$$.fragment,t),w(no.$$.fragment,t),w(so.$$.fragment,t),w(ao.$$.fragment,t),w(lo.$$.fragment,t),w(Je.$$.fragment,t),w(co.$$.fragment,t),w(po.$$.fragment,t),w(go.$$.fragment,t),w(Xe.$$.fragment,t),w(Ye.$$.fragment,t),w(_o.$$.fragment,t),w(bo.$$.fragment,t),w(vo.$$.fragment,t),w(et.$$.fragment,t),w(tt.$$.fragment,t),w(Fo.$$.fragment,t),w(wo.$$.fragment,t),w(yo.$$.fragment,t),w(nt.$$.fragment,t),w(st.$$.fragment,t),w(rt.$$.fragment,t),w(No.$$.fragment,t),w(zo.$$.fragment,t),w(xo.$$.fragment,t),w(it.$$.fragment,t),w(lt.$$.fragment,t),w(Eo.$$.fragment,t),w(jo.$$.fragment,t),w(Co.$$.fragment,t),w(dt.$$.fragment,t),w(pt.$$.fragment,t),w(ht.$$.fragment,t),w(ft.$$.fragment,t),w(mt.$$.fragment,t),w(So.$$.fragment,t),w(Ao.$$.fragment,t),w(Oo.$$.fragment,t),w(gt.$$.fragment,t),w(_t.$$.fragment,t),w(Do.$$.fragment,t),w(Bo.$$.fragment,t),w(Ho.$$.fragment,t),w(kt.$$.fragment,t),w($t.$$.fragment,t),w(vt.$$.fragment,t),w(Qo.$$.fragment,t),w(Vo.$$.fragment,t),w(Jo.$$.fragment,t),w(wt.$$.fragment,t),w(Tt.$$.fragment,t),w(yt.$$.fragment,t),Ar=!0)},o(t){T(n.$$.fragment,t),T(Bt.$$.fragment,t),T(Qt.$$.fragment,t),T(Vt.$$.fragment,t),T(He.$$.fragment,t),T(Gt.$$.fragment,t),T(Jt.$$.fragment,t),T(Xt.$$.fragment,t),T(Zt.$$.fragment,t),T(to.$$.fragment,t),T(Re.$$.fragment,t),T(oo.$$.fragment,t),T(no.$$.fragment,t),T(so.$$.fragment,t),T(ao.$$.fragment,t),T(lo.$$.fragment,t),T(Je.$$.fragment,t),T(co.$$.fragment,t),T(po.$$.fragment,t),T(go.$$.fragment,t),T(Xe.$$.fragment,t),T(Ye.$$.fragment,t),T(_o.$$.fragment,t),T(bo.$$.fragment,t),T(vo.$$.fragment,t),T(et.$$.fragment,t),T(tt.$$.fragment,t),T(Fo.$$.fragment,t),T(wo.$$.fragment,t),T(yo.$$.fragment,t),T(nt.$$.fragment,t),T(st.$$.fragment,t),T(rt.$$.fragment,t),T(No.$$.fragment,t),T(zo.$$.fragment,t),T(xo.$$.fragment,t),T(it.$$.fragment,t),T(lt.$$.fragment,t),T(Eo.$$.fragment,t),T(jo.$$.fragment,t),T(Co.$$.fragment,t),T(dt.$$.fragment,t),T(pt.$$.fragment,t),T(ht.$$.fragment,t),T(ft.$$.fragment,t),T(mt.$$.fragment,t),T(So.$$.fragment,t),T(Ao.$$.fragment,t),T(Oo.$$.fragment,t),T(gt.$$.fragment,t),T(_t.$$.fragment,t),T(Do.$$.fragment,t),T(Bo.$$.fragment,t),T(Ho.$$.fragment,t),T(kt.$$.fragment,t),T($t.$$.fragment,t),T(vt.$$.fragment,t),T(Qo.$$.fragment,t),T(Vo.$$.fragment,t),T(Jo.$$.fragment,t),T(wt.$$.fragment,t),T(Tt.$$.fragment,t),T(yt.$$.fragment,t),Ar=!1},d(t){o(s),t&&o(_),t&&o(d),y(n),t&&o(lr),t&&o(he),y(Bt),t&&o(cr),t&&o(We),t&&o(dr),t&&o(en),t&&o(pr),t&&o(tn),t&&o(hr),t&&o(on),t&&o(fr),t&&o(re),t&&o(mr),t&&o(fe),y(Qt),t&&o(ur),t&&o(I),y(Vt),y(He),t&&o(gr),t&&o(ge),y(Gt),t&&o(_r),t&&o(E),y(Jt),y(Xt),y(Zt),y(to),y(Re),y(oo),t&&o(br),t&&o(be),y(no),t&&o(kr),t&&o(O),y(so),y(ao),y(lo),y(Je),t&&o($r),t&&o(ke),y(co),t&&o(vr),t&&o(B),y(po),y(go),y(Xe),y(Ye),t&&o(Fr),t&&o(ve),y(_o),t&&o(wr),t&&o(W),y(bo),y(vo),y(et),y(tt),t&&o(Tr),t&&o(Te),y(Fo),t&&o(yr),t&&o(oe),y(wo),y(yo),y(nt),y(st),y(rt),t&&o(Nr),t&&o(ze),y(No),t&&o(zr),t&&o(ne),y(zo),y(xo),y(it),y(lt),t&&o(qr),t&&o(Ee),y(Eo),t&&o(xr),t&&o(U),y(jo),y(Co),y(dt),y(pt),y(ht),y(ft),y(mt),t&&o(Er),t&&o(Pe),y(So),t&&o(jr),t&&o(H),y(Ao),y(Oo),y(gt),y(_t),t&&o(Pr),t&&o(Ce),y(Do),t&&o(Mr),t&&o(Q),y(Bo),y(Ho),y(kt),y($t),y(vt),t&&o(Cr),t&&o(Ae),y(Qo),t&&o(Sr),t&&o(V),y(Vo),y(Jo),y(wt),y(Tt),y(yt)}}}const Qh={local:"fnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.FNetConfig",title:"FNetConfig"},{local:"transformers.FNetTokenizer",title:"FNetTokenizer"},{local:"transformers.FNetTokenizerFast",title:"FNetTokenizerFast"},{local:"transformers.FNetModel",title:"FNetModel"},{local:"transformers.FNetForPreTraining",title:"FNetForPreTraining"},{local:"transformers.FNetForMaskedLM",title:"FNetForMaskedLM"},{local:"transformers.FNetForNextSentencePrediction",title:"FNetForNextSentencePrediction"},{local:"transformers.FNetForSequenceClassification",title:"FNetForSequenceClassification"},{local:"transformers.FNetForMultipleChoice",title:"FNetForMultipleChoice"},{local:"transformers.FNetForTokenClassification",title:"FNetForTokenClassification"},{local:"transformers.FNetForQuestionAnswering",title:"FNetForQuestionAnswering"}],title:"FNet"};function Vh(N){return bh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zh extends mh{constructor(s){super();uh(this,s,Vh,Hh,gh,{})}}export{Zh as default,Qh as metadata};
