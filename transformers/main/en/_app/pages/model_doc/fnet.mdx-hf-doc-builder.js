import{S as fh,i as uh,s as gh,e as r,k as m,w as $,t as l,M as _h,c as a,d as o,m as f,a as i,x as F,h as c,b as u,G as e,g as k,y as w,q as v,o as T,B as y,v as bh,L as P}from"../../chunks/vendor-hf-doc-builder.js";import{T as Dt}from"../../chunks/Tip-hf-doc-builder.js";import{D as q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as M}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as R}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as j}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function kh(N){let s,_,d,p,b;return p=new M({props:{code:`from transformers import FNetModel, FNetConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){s=r("p"),_=l("Example:"),d=m(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example:"),h.forEach(o),d=f(n),F(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),w(p,n,h),b=!0},p:P,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function $h(N){let s,_,d,p,b;return p=new M({props:{code:"0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second sequence |",highlighted:'<span class="hljs-attribute">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> <span class="hljs-number">1</span> | first sequence | second sequence |'}}),{c(){s=r("p"),_=l("pair mask has the following format: :"),d=m(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"pair mask has the following format: :"),h.forEach(o),d=f(n),F(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),w(p,n,h),b=!0},p:P,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function Fh(N){let s,_,d,p,b;return p=new M({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){s=r("p"),_=l("sequence pair mask has the following format:"),d=m(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"sequence pair mask has the following format:"),h.forEach(o),d=f(n),F(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),w(p,n,h),b=!0},p:P,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function wh(N){let s,_,d,p,b;return{c(){s=r("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a(h,"CODE",{});var z=i(d);p=c(z,"Module"),z.forEach(o),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,_),e(s,d),e(d,p),e(s,b)},d(n){n&&o(s)}}}function vh(N){let s,_,d,p,b;return p=new M({props:{code:`from transformers import FNetTokenizer, FNetModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){s=r("p"),_=l("Example:"),d=m(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example:"),h.forEach(o),d=f(n),F(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),w(p,n,h),b=!0},p:P,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function Th(N){let s,_,d,p,b;return{c(){s=r("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),p=l("Module"),b=l(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){s=r("p"),_=l("Example:"),d=m(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example:"),h.forEach(o),d=f(n),F(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),w(p,n,h),b=!0},p:P,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function Nh(N){let s,_,d,p,b;return{c(){s=r("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),p=l("Module"),b=l(`
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
`}}),{c(){s=r("p"),_=l("Example:"),d=m(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example:"),h.forEach(o),d=f(n),F(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),w(p,n,h),b=!0},p:P,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function qh(N){let s,_;return s=new M({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){$(s.$$.fragment)},l(d){F(s.$$.fragment,d)},m(d,p){w(s,d,p),_=!0},p:P,i(d){_||(v(s.$$.fragment,d),_=!0)},o(d){T(s.$$.fragment,d),_=!1},d(d){y(s,d)}}}function xh(N){let s,_,d,p,b;return{c(){s=r("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),p=l("Module"),b=l(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){s=r("p"),_=l("Example:"),d=m(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example:"),h.forEach(o),d=f(n),F(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),w(p,n,h),b=!0},p:P,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function jh(N){let s,_,d,p,b;return{c(){s=r("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),p=l("Module"),b=l(`
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
`}}),{c(){s=r("p"),_=l("Example of single-label classification:"),d=m(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example of single-label classification:"),h.forEach(o),d=f(n),F(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),w(p,n,h),b=!0},p:P,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function Mh(N){let s,_;return s=new M({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){$(s.$$.fragment)},l(d){F(s.$$.fragment,d)},m(d,p){w(s,d,p),_=!0},p:P,i(d){_||(v(s.$$.fragment,d),_=!0)},o(d){T(s.$$.fragment,d),_=!1},d(d){y(s,d)}}}function Ch(N){let s,_,d,p,b;return p=new M({props:{code:`import torch
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
`}}),{c(){s=r("p"),_=l("Example of multi-label classification:"),d=m(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example of multi-label classification:"),h.forEach(o),d=f(n),F(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),w(p,n,h),b=!0},p:P,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function Sh(N){let s,_;return s=new M({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){$(s.$$.fragment)},l(d){F(s.$$.fragment,d)},m(d,p){w(s,d,p),_=!0},p:P,i(d){_||(v(s.$$.fragment,d),_=!0)},o(d){T(s.$$.fragment,d),_=!1},d(d){y(s,d)}}}function Ah(N){let s,_,d,p,b;return{c(){s=r("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),p=l("Module"),b=l(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){s=r("p"),_=l("Example:"),d=m(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example:"),h.forEach(o),d=f(n),F(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),w(p,n,h),b=!0},p:P,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function Ih(N){let s,_,d,p,b;return{c(){s=r("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),p=l("Module"),b=l(`
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
`}}),{c(){s=r("p"),_=l("Example:"),d=m(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example:"),h.forEach(o),d=f(n),F(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),w(p,n,h),b=!0},p:P,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function Dh(N){let s,_;return s=new M({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){$(s.$$.fragment)},l(d){F(s.$$.fragment,d)},m(d,p){w(s,d,p),_=!0},p:P,i(d){_||(v(s.$$.fragment,d),_=!0)},o(d){T(s.$$.fragment,d),_=!1},d(d){y(s,d)}}}function Wh(N){let s,_,d,p,b;return{c(){s=r("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=a(h,"CODE",{});var z=i(d);p=c(z,"Module"),z.forEach(o),b=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,_),e(s,d),e(d,p),e(s,b)},d(n){n&&o(s)}}}function Uh(N){let s,_,d,p,b;return p=new M({props:{code:`from transformers import FNetTokenizer, FNetForQuestionAnswering
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
`}}),{c(){s=r("p"),_=l("Example:"),d=m(),$(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);_=c(h,"Example:"),h.forEach(o),d=f(n),F(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,_),k(n,d,h),w(p,n,h),b=!0},p:P,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){T(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(d),y(p,n)}}}function Bh(N){let s,_;return s=new M({props:{code:`# target is "nice puppet"
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
`}}),{c(){$(s.$$.fragment)},l(d){F(s.$$.fragment,d)},m(d,p){w(s,d,p),_=!0},p:P,i(d){_||(v(s.$$.fragment,d),_=!0)},o(d){T(s.$$.fragment,d),_=!1},d(d){y(s,d)}}}function Hh(N){let s,_,d,p,b,n,h,z,sa,lr,he,We,Un,Wt,ra,Bn,aa,cr,Ue,ia,Ut,la,ca,dr,en,Hn,da,pr,tn,pa,hr,on,Vn,ha,mr,re,ma,Bt,fa,ua,Ht,ga,_a,fr,me,Be,Qn,Vt,ba,Rn,ka,ur,I,Qt,$a,fe,Fa,nn,wa,va,Rt,Ta,ya,Na,ue,za,sn,qa,xa,rn,Ea,ja,Pa,He,gr,ge,Ve,Gn,Gt,Ma,Jn,Ca,_r,E,Jt,Sa,te,Aa,an,La,Ia,Kt,Oa,Da,ln,Wa,Ua,Ba,ae,Xt,Ha,Kn,Va,Qa,Yt,cn,Ra,Xn,Ga,Ja,dn,Ka,Yn,Xa,Ya,Qe,Zt,Za,eo,ei,Zn,ti,oi,ni,G,to,si,es,ri,ai,Re,ii,_e,li,ts,ci,di,os,pi,hi,mi,pn,oo,br,be,Ge,ns,no,fi,ss,ui,kr,O,so,gi,D,_i,rs,bi,ki,hn,$i,Fi,ro,wi,vi,mn,Ti,yi,Ni,ie,ao,zi,as,qi,xi,io,fn,Ei,is,ji,Pi,un,Mi,ls,Ci,Si,J,lo,Ai,cs,Li,Ii,Je,Oi,ds,Di,$r,ke,Ke,ps,co,Wi,hs,Ui,Fr,W,po,Bi,ho,Hi,mo,Vi,Qi,Ri,fo,Gi,uo,Ji,Ki,Xi,K,go,Yi,$e,Zi,gn,el,tl,ms,ol,nl,sl,Xe,rl,Ye,wr,Fe,Ze,fs,_o,al,us,il,vr,U,bo,ll,we,cl,gs,dl,pl,_s,hl,ml,fl,ko,ul,$o,gl,_l,bl,X,Fo,kl,ve,$l,_n,Fl,wl,bs,vl,Tl,yl,et,Nl,tt,Tr,Te,ot,ks,wo,zl,$s,ql,yr,oe,vo,xl,ye,El,Fs,jl,Pl,To,Ml,Cl,Sl,C,yo,Al,Ne,Ll,bn,Il,Ol,ws,Dl,Wl,Ul,nt,Bl,st,Hl,rt,Nr,ze,at,vs,No,Vl,Ts,Ql,zr,ne,zo,Rl,qe,Gl,ys,Jl,Kl,qo,Xl,Yl,Zl,Y,xo,ec,xe,tc,kn,oc,nc,Ns,sc,rc,ac,it,ic,lt,qr,Ee,ct,zs,Eo,lc,qs,cc,xr,B,jo,dc,xs,pc,hc,Po,mc,Mo,fc,uc,gc,x,Co,_c,je,bc,$n,kc,$c,Es,Fc,wc,vc,dt,Tc,pt,yc,ht,Nc,mt,zc,ft,Er,Pe,ut,js,So,qc,Ps,xc,jr,H,Ao,Ec,Ms,jc,Pc,Lo,Mc,Io,Cc,Sc,Ac,Z,Oo,Lc,Me,Ic,Fn,Oc,Dc,Cs,Wc,Uc,Bc,gt,Hc,_t,Pr,Ce,bt,Ss,Do,Vc,As,Qc,Mr,V,Wo,Rc,Ls,Gc,Jc,Uo,Kc,Bo,Xc,Yc,Zc,S,Ho,ed,Se,td,wn,od,nd,Is,sd,rd,ad,kt,id,$t,ld,Ft,Cr,Ae,wt,Os,Vo,cd,Ds,dd,Sr,Q,Qo,pd,Le,hd,Ws,md,fd,Us,ud,gd,_d,Ro,bd,Go,kd,$d,Fd,A,Jo,wd,Ie,vd,vn,Td,yd,Bs,Nd,zd,qd,vt,xd,Tt,Ed,yt,Ar;return n=new R({}),Wt=new R({}),Vt=new R({}),Qt=new q({props:{name:"class transformers.FNetConfig",anchor:"transformers.FNetConfig",parameters:[{name:"vocab_size",val:" = 32000"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 4"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_tpu_fourier_optimizations",val:" = False"},{name:"tpu_short_seq_length",val:" = 512"},{name:"pad_token_id",val:" = 3"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32000) &#x2014;
Vocabulary size of the FNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetModel">FNetModel</a> or <code>TFFNetModel</code>.`,name:"vocab_size"},{anchor:"transformers.FNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.FNetConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.FNetConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.FNetConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.FNetConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.FNetConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.FNetConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetModel">FNetModel</a> or <code>TFFNetModel</code>.`,name:"type_vocab_size"},{anchor:"transformers.FNetConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.FNetConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.FNetConfig.use_tpu_fourier_optimizations",description:`<strong>use_tpu_fourier_optimizations</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Determines whether to use TPU optimized FFTs. If <code>True</code>, the model will favor axis-wise FFTs transforms.
Set to <code>False</code> for GPU/CPU hardware, in which case n-dimensional FFTs are used.`,name:"use_tpu_fourier_optimizations"},{anchor:"transformers.FNetConfig.tpu_short_seq_length",description:`<strong>tpu_short_seq_length</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The sequence length that is expected by the model when using TPUs. This will be used to initialize the DFT
matrix only when <em>use_tpu_fourier_optimizations</em> is set to <code>True</code> and the input sequence is shorter than or
equal to 4096 tokens.`,name:"tpu_short_seq_length"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/configuration_fnet.py#L30"}}),He=new j({props:{anchor:"transformers.FNetConfig.example",$$slots:{default:[kh]},$$scope:{ctx:N}}}),Gt=new R({}),Jt=new q({props:{name:"class transformers.FNetTokenizer",anchor:"transformers.FNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = True"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/tokenization_fnet.py#L46"}}),Xt=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/tokenization_fnet.py#L218",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Zt=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.FNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.FNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.FNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/tokenization_fnet.py#L243",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),to=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/tokenization_fnet.py#L271",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Re=new j({props:{anchor:"transformers.FNetTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[$h]},$$scope:{ctx:N}}}),oo=new q({props:{name:"save_vocabulary",anchor:"transformers.FNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/tokenization_fnet.py#L300"}}),no=new R({}),so=new q({props:{name:"class transformers.FNetTokenizerFast",anchor:"transformers.FNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = True"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/tokenization_fnet_fast.py#L54"}}),ao=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FNetTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FNetTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.FNetTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/tokenization_fnet_fast.py#L137",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),lo=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.FNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/tokenization_fnet_fast.py#L162",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Je=new j({props:{anchor:"transformers.FNetTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[Fh]},$$scope:{ctx:N}}}),co=new R({}),po=new q({props:{name:"class transformers.FNetModel",anchor:"transformers.FNetModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.FNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L516"}}),go=new q({props:{name:"forward",anchor:"transformers.FNetModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.FNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetTokenizer">FNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L542",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xe=new Dt({props:{$$slots:{default:[wh]},$$scope:{ctx:N}}}),Ye=new j({props:{anchor:"transformers.FNetModel.forward.example",$$slots:{default:[vh]},$$scope:{ctx:N}}}),_o=new R({}),bo=new q({props:{name:"class transformers.FNetForPreTraining",anchor:"transformers.FNetForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L626"}}),Fo=new q({props:{name:"forward",anchor:"transformers.FNetForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FNetForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetTokenizer">FNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.FNetForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"},{anchor:"transformers.FNetForPreTraining.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L642",returnDescription:`
<p>A <code>transformers.models.fnet.modeling_fnet.FNetForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig"
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
`}}),et=new Dt({props:{$$slots:{default:[Th]},$$scope:{ctx:N}}}),tt=new j({props:{anchor:"transformers.FNetForPreTraining.forward.example",$$slots:{default:[yh]},$$scope:{ctx:N}}}),wo=new R({}),vo=new q({props:{name:"class transformers.FNetForMaskedLM",anchor:"transformers.FNetForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L718"}}),yo=new q({props:{name:"forward",anchor:"transformers.FNetForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FNetForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetTokenizer">FNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L734",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nt=new Dt({props:{$$slots:{default:[Nh]},$$scope:{ctx:N}}}),st=new j({props:{anchor:"transformers.FNetForMaskedLM.forward.example",$$slots:{default:[zh]},$$scope:{ctx:N}}}),rt=new j({props:{anchor:"transformers.FNetForMaskedLM.forward.example-2",$$slots:{default:[qh]},$$scope:{ctx:N}}}),No=new R({}),zo=new q({props:{name:"class transformers.FNetForNextSentencePrediction",anchor:"transformers.FNetForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L787"}}),xo=new q({props:{name:"forward",anchor:"transformers.FNetForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FNetForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetTokenizer">FNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L797",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),it=new Dt({props:{$$slots:{default:[xh]},$$scope:{ctx:N}}}),lt=new j({props:{anchor:"transformers.FNetForNextSentencePrediction.forward.example",$$slots:{default:[Eh]},$$scope:{ctx:N}}}),Eo=new R({}),jo=new q({props:{name:"class transformers.FNetForSequenceClassification",anchor:"transformers.FNetForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L882"}}),Co=new q({props:{name:"forward",anchor:"transformers.FNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetTokenizer">FNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L894",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dt=new Dt({props:{$$slots:{default:[jh]},$$scope:{ctx:N}}}),pt=new j({props:{anchor:"transformers.FNetForSequenceClassification.forward.example",$$slots:{default:[Ph]},$$scope:{ctx:N}}}),ht=new j({props:{anchor:"transformers.FNetForSequenceClassification.forward.example-2",$$slots:{default:[Mh]},$$scope:{ctx:N}}}),mt=new j({props:{anchor:"transformers.FNetForSequenceClassification.forward.example-3",$$slots:{default:[Ch]},$$scope:{ctx:N}}}),ft=new j({props:{anchor:"transformers.FNetForSequenceClassification.forward.example-4",$$slots:{default:[Sh]},$$scope:{ctx:N}}}),So=new R({}),Ao=new q({props:{name:"class transformers.FNetForMultipleChoice",anchor:"transformers.FNetForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L968"}}),Oo=new q({props:{name:"forward",anchor:"transformers.FNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetTokenizer">FNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L979",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gt=new Dt({props:{$$slots:{default:[Ah]},$$scope:{ctx:N}}}),_t=new j({props:{anchor:"transformers.FNetForMultipleChoice.forward.example",$$slots:{default:[Lh]},$$scope:{ctx:N}}}),Do=new R({}),Wo=new q({props:{name:"class transformers.FNetForTokenClassification",anchor:"transformers.FNetForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L1048"}}),Ho=new q({props:{name:"forward",anchor:"transformers.FNetForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetTokenizer">FNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L1061",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kt=new Dt({props:{$$slots:{default:[Ih]},$$scope:{ctx:N}}}),$t=new j({props:{anchor:"transformers.FNetForTokenClassification.forward.example",$$slots:{default:[Oh]},$$scope:{ctx:N}}}),Ft=new j({props:{anchor:"transformers.FNetForTokenClassification.forward.example-2",$$slots:{default:[Dh]},$$scope:{ctx:N}}}),Vo=new R({}),Qo=new q({props:{name:"class transformers.FNetForQuestionAnswering",anchor:"transformers.FNetForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig">FNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L1118"}}),Jo=new q({props:{name:"forward",anchor:"transformers.FNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetTokenizer">FNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FNetForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/fnet/modeling_fnet.py#L1130",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/fnet#transformers.FNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vt=new Dt({props:{$$slots:{default:[Wh]},$$scope:{ctx:N}}}),Tt=new j({props:{anchor:"transformers.FNetForQuestionAnswering.forward.example",$$slots:{default:[Uh]},$$scope:{ctx:N}}}),yt=new j({props:{anchor:"transformers.FNetForQuestionAnswering.forward.example-2",$$slots:{default:[Bh]},$$scope:{ctx:N}}}),{c(){s=r("meta"),_=m(),d=r("h1"),p=r("a"),b=r("span"),$(n.$$.fragment),h=m(),z=r("span"),sa=l("FNet"),lr=m(),he=r("h2"),We=r("a"),Un=r("span"),$(Wt.$$.fragment),ra=m(),Bn=r("span"),aa=l("Overview"),cr=m(),Ue=r("p"),ia=l("The FNet model was proposed in "),Ut=r("a"),la=l("FNet: Mixing Tokens with Fourier Transforms"),ca=l(` by
James Lee-Thorp, Joshua Ainslie, Ilya Eckstein, Santiago Ontanon. The model replaces the self-attention layer in a BERT
model with a fourier transform which returns only the real parts of the transform. The model is significantly faster
than the BERT model because it has fewer parameters and is more memory efficient. The model achieves about 92-97%
accuracy of BERT counterparts on GLUE benchmark, and trains much faster than the BERT model. The abstract from the
paper is the following:`),dr=m(),en=r("p"),Hn=r("em"),da=l(`We show that Transformer encoder architectures can be sped up, with limited accuracy costs, by replacing the
self-attention sublayers with simple linear transformations that \u201Cmix\u201D input tokens. These linear mixers, along with
standard nonlinearities in feed-forward layers, prove competent at modeling semantic relationships in several text
classification tasks. Most surprisingly, we find that replacing the self-attention sublayer in a Transformer encoder
with a standard, unparameterized Fourier Transform achieves 92-97% of the accuracy of BERT counterparts on the GLUE
benchmark, but trains 80% faster on GPUs and 70% faster on TPUs at standard 512 input lengths. At longer input lengths,
our FNet model is significantly faster: when compared to the \u201Cefficient\u201D Transformers on the Long Range Arena
benchmark, FNet matches the accuracy of the most accurate models, while outpacing the fastest models across all
sequence lengths on GPUs (and across relatively shorter lengths on TPUs). Finally, FNet has a light memory footprint
and is particularly efficient at smaller model sizes; for a fixed speed and accuracy budget, small FNet models
outperform Transformer counterparts.`),pr=m(),tn=r("p"),pa=l("Tips on usage:"),hr=m(),on=r("ul"),Vn=r("li"),ha=l(`The model was trained without an attention mask as it is based on Fourier Transform. The model was trained with
maximum sequence length 512 which includes pad tokens. Hence, it is highly recommended to use the same maximum
sequence length for fine-tuning and inference.`),mr=m(),re=r("p"),ma=l("This model was contributed by "),Bt=r("a"),fa=l("gchhablani"),ua=l(". The original code can be found "),Ht=r("a"),ga=l("here"),_a=l("."),fr=m(),me=r("h2"),Be=r("a"),Qn=r("span"),$(Vt.$$.fragment),ba=m(),Rn=r("span"),ka=l("FNetConfig"),ur=m(),I=r("div"),$(Qt.$$.fragment),$a=m(),fe=r("p"),Fa=l("This is the configuration class to store the configuration of a "),nn=r("a"),wa=l("FNetModel"),va=l(`. It is used to instantiate an FNet
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the FNet
`),Rt=r("a"),Ta=l("google/fnet-base"),ya=l(" architecture."),Na=m(),ue=r("p"),za=l("Configuration objects inherit from "),sn=r("a"),qa=l("PretrainedConfig"),xa=l(` and can be used to control the model outputs. Read the
documentation from `),rn=r("a"),Ea=l("PretrainedConfig"),ja=l(" for more information."),Pa=m(),$(He.$$.fragment),gr=m(),ge=r("h2"),Ve=r("a"),Gn=r("span"),$(Gt.$$.fragment),Ma=m(),Jn=r("span"),Ca=l("FNetTokenizer"),_r=m(),E=r("div"),$(Jt.$$.fragment),Sa=m(),te=r("p"),Aa=l("Construct an FNet tokenizer. Adapted from "),an=r("a"),La=l("AlbertTokenizer"),Ia=l(`. Based on
`),Kt=r("a"),Oa=l("SentencePiece"),Da=l(". This tokenizer inherits from "),ln=r("a"),Wa=l("PreTrainedTokenizer"),Ua=l(`
which contains most of the main methods. Users should refer to this superclass for more information regarding those
methods.`),Ba=m(),ae=r("div"),$(Xt.$$.fragment),Ha=m(),Kn=r("p"),Va=l(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An FNet sequence has the following format:`),Qa=m(),Yt=r("ul"),cn=r("li"),Ra=l("single sequence: "),Xn=r("code"),Ga=l("[CLS] X [SEP]"),Ja=m(),dn=r("li"),Ka=l("pair of sequences: "),Yn=r("code"),Xa=l("[CLS] A [SEP] B [SEP]"),Ya=m(),Qe=r("div"),$(Zt.$$.fragment),Za=m(),eo=r("p"),ei=l(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Zn=r("code"),ti=l("prepare_for_model"),oi=l(" method."),ni=m(),G=r("div"),$(to.$$.fragment),si=m(),es=r("p"),ri=l("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An FNet sequence"),ai=m(),$(Re.$$.fragment),ii=m(),_e=r("p"),li=l("If "),ts=r("code"),ci=l("token_ids_1"),di=l(" is "),os=r("code"),pi=l("None"),hi=l(", this method only returns the first portion of the mask (0s)."),mi=m(),pn=r("div"),$(oo.$$.fragment),br=m(),be=r("h2"),Ge=r("a"),ns=r("span"),$(no.$$.fragment),fi=m(),ss=r("span"),ui=l("FNetTokenizerFast"),kr=m(),O=r("div"),$(so.$$.fragment),gi=m(),D=r("p"),_i=l("Construct a \u201Cfast\u201D FNetTokenizer (backed by HuggingFace\u2019s "),rs=r("em"),bi=l("tokenizers"),ki=l(` library). Adapted from
`),hn=r("a"),$i=l("AlbertTokenizerFast"),Fi=l(`. Based on
`),ro=r("a"),wi=l("Unigram"),vi=l(`. This
tokenizer inherits from `),mn=r("a"),Ti=l("PreTrainedTokenizerFast"),yi=l(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Ni=m(),ie=r("div"),$(ao.$$.fragment),zi=m(),as=r("p"),qi=l(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An FNet sequence has the following format:`),xi=m(),io=r("ul"),fn=r("li"),Ei=l("single sequence: "),is=r("code"),ji=l("[CLS] X [SEP]"),Pi=m(),un=r("li"),Mi=l("pair of sequences: "),ls=r("code"),Ci=l("[CLS] A [SEP] B [SEP]"),Si=m(),J=r("div"),$(lo.$$.fragment),Ai=m(),cs=r("p"),Li=l("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An FNet"),Ii=m(),$(Je.$$.fragment),Oi=m(),ds=r("p"),Di=l("if token_ids_1 is None, only returns the first portion of the mask (0s)."),$r=m(),ke=r("h2"),Ke=r("a"),ps=r("span"),$(co.$$.fragment),Wi=m(),hs=r("span"),Ui=l("FNetModel"),Fr=m(),W=r("div"),$(po.$$.fragment),Bi=m(),ho=r("p"),Hi=l(`The bare FNet Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),mo=r("a"),Vi=l("torch.nn.Module"),Qi=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ri=m(),fo=r("p"),Gi=l("The model can behave as an encoder, following the architecture described in "),uo=r("a"),Ji=l(`FNet: Mixing Tokens with Fourier
Transforms`),Ki=l(" by James Lee-Thorp, Joshua Ainslie, Ilya Eckstein, Santiago Ontanon."),Xi=m(),K=r("div"),$(go.$$.fragment),Yi=m(),$e=r("p"),Zi=l("The "),gn=r("a"),el=l("FNetModel"),tl=l(" forward method, overrides the "),ms=r("code"),ol=l("__call__"),nl=l(" special method."),sl=m(),$(Xe.$$.fragment),rl=m(),$(Ye.$$.fragment),wr=m(),Fe=r("h2"),Ze=r("a"),fs=r("span"),$(_o.$$.fragment),al=m(),us=r("span"),il=l("FNetForPreTraining"),vr=m(),U=r("div"),$(bo.$$.fragment),ll=m(),we=r("p"),cl=l("FNet Model with two heads on top as done during the pretraining: a "),gs=r("code"),dl=l("masked language modeling"),pl=l(" head and a "),_s=r("code"),hl=l("next sentence prediction (classification)"),ml=l(" head."),fl=m(),ko=r("p"),ul=l("This model is a PyTorch "),$o=r("a"),gl=l("torch.nn.Module"),_l=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),bl=m(),X=r("div"),$(Fo.$$.fragment),kl=m(),ve=r("p"),$l=l("The "),_n=r("a"),Fl=l("FNetForPreTraining"),wl=l(" forward method, overrides the "),bs=r("code"),vl=l("__call__"),Tl=l(" special method."),yl=m(),$(et.$$.fragment),Nl=m(),$(tt.$$.fragment),Tr=m(),Te=r("h2"),ot=r("a"),ks=r("span"),$(wo.$$.fragment),zl=m(),$s=r("span"),ql=l("FNetForMaskedLM"),yr=m(),oe=r("div"),$(vo.$$.fragment),xl=m(),ye=r("p"),El=l("FNet Model with a "),Fs=r("code"),jl=l("language modeling"),Pl=l(` head on top.
This model is a PyTorch `),To=r("a"),Ml=l("torch.nn.Module"),Cl=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Sl=m(),C=r("div"),$(yo.$$.fragment),Al=m(),Ne=r("p"),Ll=l("The "),bn=r("a"),Il=l("FNetForMaskedLM"),Ol=l(" forward method, overrides the "),ws=r("code"),Dl=l("__call__"),Wl=l(" special method."),Ul=m(),$(nt.$$.fragment),Bl=m(),$(st.$$.fragment),Hl=m(),$(rt.$$.fragment),Nr=m(),ze=r("h2"),at=r("a"),vs=r("span"),$(No.$$.fragment),Vl=m(),Ts=r("span"),Ql=l("FNetForNextSentencePrediction"),zr=m(),ne=r("div"),$(zo.$$.fragment),Rl=m(),qe=r("p"),Gl=l("FNet Model with a "),ys=r("code"),Jl=l("next sentence prediction (classification)"),Kl=l(` head on top.
This model is a PyTorch `),qo=r("a"),Xl=l("torch.nn.Module"),Yl=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zl=m(),Y=r("div"),$(xo.$$.fragment),ec=m(),xe=r("p"),tc=l("The "),kn=r("a"),oc=l("FNetForNextSentencePrediction"),nc=l(" forward method, overrides the "),Ns=r("code"),sc=l("__call__"),rc=l(" special method."),ac=m(),$(it.$$.fragment),ic=m(),$(lt.$$.fragment),qr=m(),Ee=r("h2"),ct=r("a"),zs=r("span"),$(Eo.$$.fragment),lc=m(),qs=r("span"),cc=l("FNetForSequenceClassification"),xr=m(),B=r("div"),$(jo.$$.fragment),dc=m(),xs=r("p"),pc=l(`FNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),hc=m(),Po=r("p"),mc=l("This model is a PyTorch "),Mo=r("a"),fc=l("torch.nn.Module"),uc=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gc=m(),x=r("div"),$(Co.$$.fragment),_c=m(),je=r("p"),bc=l("The "),$n=r("a"),kc=l("FNetForSequenceClassification"),$c=l(" forward method, overrides the "),Es=r("code"),Fc=l("__call__"),wc=l(" special method."),vc=m(),$(dt.$$.fragment),Tc=m(),$(pt.$$.fragment),yc=m(),$(ht.$$.fragment),Nc=m(),$(mt.$$.fragment),zc=m(),$(ft.$$.fragment),Er=m(),Pe=r("h2"),ut=r("a"),js=r("span"),$(So.$$.fragment),qc=m(),Ps=r("span"),xc=l("FNetForMultipleChoice"),jr=m(),H=r("div"),$(Ao.$$.fragment),Ec=m(),Ms=r("p"),jc=l(`FNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Pc=m(),Lo=r("p"),Mc=l("This model is a PyTorch "),Io=r("a"),Cc=l("torch.nn.Module"),Sc=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ac=m(),Z=r("div"),$(Oo.$$.fragment),Lc=m(),Me=r("p"),Ic=l("The "),Fn=r("a"),Oc=l("FNetForMultipleChoice"),Dc=l(" forward method, overrides the "),Cs=r("code"),Wc=l("__call__"),Uc=l(" special method."),Bc=m(),$(gt.$$.fragment),Hc=m(),$(_t.$$.fragment),Pr=m(),Ce=r("h2"),bt=r("a"),Ss=r("span"),$(Do.$$.fragment),Vc=m(),As=r("span"),Qc=l("FNetForTokenClassification"),Mr=m(),V=r("div"),$(Wo.$$.fragment),Rc=m(),Ls=r("p"),Gc=l(`FNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Jc=m(),Uo=r("p"),Kc=l("This model is a PyTorch "),Bo=r("a"),Xc=l("torch.nn.Module"),Yc=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zc=m(),S=r("div"),$(Ho.$$.fragment),ed=m(),Se=r("p"),td=l("The "),wn=r("a"),od=l("FNetForTokenClassification"),nd=l(" forward method, overrides the "),Is=r("code"),sd=l("__call__"),rd=l(" special method."),ad=m(),$(kt.$$.fragment),id=m(),$($t.$$.fragment),ld=m(),$(Ft.$$.fragment),Cr=m(),Ae=r("h2"),wt=r("a"),Os=r("span"),$(Vo.$$.fragment),cd=m(),Ds=r("span"),dd=l("FNetForQuestionAnswering"),Sr=m(),Q=r("div"),$(Qo.$$.fragment),pd=m(),Le=r("p"),hd=l(`FNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ws=r("code"),md=l("span start logits"),fd=l(" and "),Us=r("code"),ud=l("span end logits"),gd=l(")."),_d=m(),Ro=r("p"),bd=l("This model is a PyTorch "),Go=r("a"),kd=l("torch.nn.Module"),$d=l(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fd=m(),A=r("div"),$(Jo.$$.fragment),wd=m(),Ie=r("p"),vd=l("The "),vn=r("a"),Td=l("FNetForQuestionAnswering"),yd=l(" forward method, overrides the "),Bs=r("code"),Nd=l("__call__"),zd=l(" special method."),qd=m(),$(vt.$$.fragment),xd=m(),$(Tt.$$.fragment),Ed=m(),$(yt.$$.fragment),this.h()},l(t){const g=_h('[data-svelte="svelte-1phssyn"]',document.head);s=a(g,"META",{name:!0,content:!0}),g.forEach(o),_=f(t),d=a(t,"H1",{class:!0});var Ko=i(d);p=a(Ko,"A",{id:!0,class:!0,href:!0});var Hs=i(p);b=a(Hs,"SPAN",{});var Vs=i(b);F(n.$$.fragment,Vs),Vs.forEach(o),Hs.forEach(o),h=f(Ko),z=a(Ko,"SPAN",{});var Qs=i(z);sa=c(Qs,"FNet"),Qs.forEach(o),Ko.forEach(o),lr=f(t),he=a(t,"H2",{class:!0});var Xo=i(he);We=a(Xo,"A",{id:!0,class:!0,href:!0});var Rs=i(We);Un=a(Rs,"SPAN",{});var Gs=i(Un);F(Wt.$$.fragment,Gs),Gs.forEach(o),Rs.forEach(o),ra=f(Xo),Bn=a(Xo,"SPAN",{});var Js=i(Bn);aa=c(Js,"Overview"),Js.forEach(o),Xo.forEach(o),cr=f(t),Ue=a(t,"P",{});var Yo=i(Ue);ia=c(Yo,"The FNet model was proposed in "),Ut=a(Yo,"A",{href:!0,rel:!0});var Ks=i(Ut);la=c(Ks,"FNet: Mixing Tokens with Fourier Transforms"),Ks.forEach(o),ca=c(Yo,` by
James Lee-Thorp, Joshua Ainslie, Ilya Eckstein, Santiago Ontanon. The model replaces the self-attention layer in a BERT
model with a fourier transform which returns only the real parts of the transform. The model is significantly faster
than the BERT model because it has fewer parameters and is more memory efficient. The model achieves about 92-97%
accuracy of BERT counterparts on GLUE benchmark, and trains much faster than the BERT model. The abstract from the
paper is the following:`),Yo.forEach(o),dr=f(t),en=a(t,"P",{});var Xs=i(en);Hn=a(Xs,"EM",{});var Ys=i(Hn);da=c(Ys,`We show that Transformer encoder architectures can be sped up, with limited accuracy costs, by replacing the
self-attention sublayers with simple linear transformations that \u201Cmix\u201D input tokens. These linear mixers, along with
standard nonlinearities in feed-forward layers, prove competent at modeling semantic relationships in several text
classification tasks. Most surprisingly, we find that replacing the self-attention sublayer in a Transformer encoder
with a standard, unparameterized Fourier Transform achieves 92-97% of the accuracy of BERT counterparts on the GLUE
benchmark, but trains 80% faster on GPUs and 70% faster on TPUs at standard 512 input lengths. At longer input lengths,
our FNet model is significantly faster: when compared to the \u201Cefficient\u201D Transformers on the Long Range Arena
benchmark, FNet matches the accuracy of the most accurate models, while outpacing the fastest models across all
sequence lengths on GPUs (and across relatively shorter lengths on TPUs). Finally, FNet has a light memory footprint
and is particularly efficient at smaller model sizes; for a fixed speed and accuracy budget, small FNet models
outperform Transformer counterparts.`),Ys.forEach(o),Xs.forEach(o),pr=f(t),tn=a(t,"P",{});var Zs=i(tn);pa=c(Zs,"Tips on usage:"),Zs.forEach(o),hr=f(t),on=a(t,"UL",{});var er=i(on);Vn=a(er,"LI",{});var tr=i(Vn);ha=c(tr,`The model was trained without an attention mask as it is based on Fourier Transform. The model was trained with
maximum sequence length 512 which includes pad tokens. Hence, it is highly recommended to use the same maximum
sequence length for fine-tuning and inference.`),tr.forEach(o),er.forEach(o),mr=f(t),re=a(t,"P",{});var Oe=i(re);ma=c(Oe,"This model was contributed by "),Bt=a(Oe,"A",{href:!0,rel:!0});var or=i(Bt);fa=c(or,"gchhablani"),or.forEach(o),ua=c(Oe,". The original code can be found "),Ht=a(Oe,"A",{href:!0,rel:!0});var nr=i(Ht);ga=c(nr,"here"),nr.forEach(o),_a=c(Oe,"."),Oe.forEach(o),fr=f(t),me=a(t,"H2",{class:!0});var Zo=i(me);Be=a(Zo,"A",{id:!0,class:!0,href:!0});var sr=i(Be);Qn=a(sr,"SPAN",{});var rr=i(Qn);F(Vt.$$.fragment,rr),rr.forEach(o),sr.forEach(o),ba=f(Zo),Rn=a(Zo,"SPAN",{});var ar=i(Rn);ka=c(ar,"FNetConfig"),ar.forEach(o),Zo.forEach(o),ur=f(t),I=a(t,"DIV",{class:!0});var se=i(I);F(Qt.$$.fragment,se),$a=f(se),fe=a(se,"P",{});var De=i(fe);Fa=c(De,"This is the configuration class to store the configuration of a "),nn=a(De,"A",{href:!0});var ir=i(nn);wa=c(ir,"FNetModel"),ir.forEach(o),va=c(De,`. It is used to instantiate an FNet
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the FNet
`),Rt=a(De,"A",{href:!0,rel:!0});var Sd=i(Rt);Ta=c(Sd,"google/fnet-base"),Sd.forEach(o),ya=c(De," architecture."),De.forEach(o),Na=f(se),ue=a(se,"P",{});var Tn=i(ue);za=c(Tn,"Configuration objects inherit from "),sn=a(Tn,"A",{href:!0});var Ad=i(sn);qa=c(Ad,"PretrainedConfig"),Ad.forEach(o),xa=c(Tn,` and can be used to control the model outputs. Read the
documentation from `),rn=a(Tn,"A",{href:!0});var Ld=i(rn);Ea=c(Ld,"PretrainedConfig"),Ld.forEach(o),ja=c(Tn," for more information."),Tn.forEach(o),Pa=f(se),F(He.$$.fragment,se),se.forEach(o),gr=f(t),ge=a(t,"H2",{class:!0});var Lr=i(ge);Ve=a(Lr,"A",{id:!0,class:!0,href:!0});var Id=i(Ve);Gn=a(Id,"SPAN",{});var Od=i(Gn);F(Gt.$$.fragment,Od),Od.forEach(o),Id.forEach(o),Ma=f(Lr),Jn=a(Lr,"SPAN",{});var Dd=i(Jn);Ca=c(Dd,"FNetTokenizer"),Dd.forEach(o),Lr.forEach(o),_r=f(t),E=a(t,"DIV",{class:!0});var ee=i(E);F(Jt.$$.fragment,ee),Sa=f(ee),te=a(ee,"P",{});var Nt=i(te);Aa=c(Nt,"Construct an FNet tokenizer. Adapted from "),an=a(Nt,"A",{href:!0});var Wd=i(an);La=c(Wd,"AlbertTokenizer"),Wd.forEach(o),Ia=c(Nt,`. Based on
`),Kt=a(Nt,"A",{href:!0,rel:!0});var Ud=i(Kt);Oa=c(Ud,"SentencePiece"),Ud.forEach(o),Da=c(Nt,". This tokenizer inherits from "),ln=a(Nt,"A",{href:!0});var Bd=i(ln);Wa=c(Bd,"PreTrainedTokenizer"),Bd.forEach(o),Ua=c(Nt,`
which contains most of the main methods. Users should refer to this superclass for more information regarding those
methods.`),Nt.forEach(o),Ba=f(ee),ae=a(ee,"DIV",{class:!0});var yn=i(ae);F(Xt.$$.fragment,yn),Ha=f(yn),Kn=a(yn,"P",{});var Hd=i(Kn);Va=c(Hd,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An FNet sequence has the following format:`),Hd.forEach(o),Qa=f(yn),Yt=a(yn,"UL",{});var Ir=i(Yt);cn=a(Ir,"LI",{});var jd=i(cn);Ra=c(jd,"single sequence: "),Xn=a(jd,"CODE",{});var Vd=i(Xn);Ga=c(Vd,"[CLS] X [SEP]"),Vd.forEach(o),jd.forEach(o),Ja=f(Ir),dn=a(Ir,"LI",{});var Pd=i(dn);Ka=c(Pd,"pair of sequences: "),Yn=a(Pd,"CODE",{});var Qd=i(Yn);Xa=c(Qd,"[CLS] A [SEP] B [SEP]"),Qd.forEach(o),Pd.forEach(o),Ir.forEach(o),yn.forEach(o),Ya=f(ee),Qe=a(ee,"DIV",{class:!0});var Or=i(Qe);F(Zt.$$.fragment,Or),Za=f(Or),eo=a(Or,"P",{});var Dr=i(eo);ei=c(Dr,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Zn=a(Dr,"CODE",{});var Rd=i(Zn);ti=c(Rd,"prepare_for_model"),Rd.forEach(o),oi=c(Dr," method."),Dr.forEach(o),Or.forEach(o),ni=f(ee),G=a(ee,"DIV",{class:!0});var zt=i(G);F(to.$$.fragment,zt),si=f(zt),es=a(zt,"P",{});var Gd=i(es);ri=c(Gd,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An FNet sequence"),Gd.forEach(o),ai=f(zt),F(Re.$$.fragment,zt),ii=f(zt),_e=a(zt,"P",{});var Nn=i(_e);li=c(Nn,"If "),ts=a(Nn,"CODE",{});var Jd=i(ts);ci=c(Jd,"token_ids_1"),Jd.forEach(o),di=c(Nn," is "),os=a(Nn,"CODE",{});var Kd=i(os);pi=c(Kd,"None"),Kd.forEach(o),hi=c(Nn,", this method only returns the first portion of the mask (0s)."),Nn.forEach(o),zt.forEach(o),mi=f(ee),pn=a(ee,"DIV",{class:!0});var Xd=i(pn);F(oo.$$.fragment,Xd),Xd.forEach(o),ee.forEach(o),br=f(t),be=a(t,"H2",{class:!0});var Wr=i(be);Ge=a(Wr,"A",{id:!0,class:!0,href:!0});var Yd=i(Ge);ns=a(Yd,"SPAN",{});var Zd=i(ns);F(no.$$.fragment,Zd),Zd.forEach(o),Yd.forEach(o),fi=f(Wr),ss=a(Wr,"SPAN",{});var ep=i(ss);ui=c(ep,"FNetTokenizerFast"),ep.forEach(o),Wr.forEach(o),kr=f(t),O=a(t,"DIV",{class:!0});var qt=i(O);F(so.$$.fragment,qt),gi=f(qt),D=a(qt,"P",{});var le=i(D);_i=c(le,"Construct a \u201Cfast\u201D FNetTokenizer (backed by HuggingFace\u2019s "),rs=a(le,"EM",{});var tp=i(rs);bi=c(tp,"tokenizers"),tp.forEach(o),ki=c(le,` library). Adapted from
`),hn=a(le,"A",{href:!0});var op=i(hn);$i=c(op,"AlbertTokenizerFast"),op.forEach(o),Fi=c(le,`. Based on
`),ro=a(le,"A",{href:!0,rel:!0});var np=i(ro);wi=c(np,"Unigram"),np.forEach(o),vi=c(le,`. This
tokenizer inherits from `),mn=a(le,"A",{href:!0});var sp=i(mn);Ti=c(sp,"PreTrainedTokenizerFast"),sp.forEach(o),yi=c(le,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),le.forEach(o),Ni=f(qt),ie=a(qt,"DIV",{class:!0});var zn=i(ie);F(ao.$$.fragment,zn),zi=f(zn),as=a(zn,"P",{});var rp=i(as);qi=c(rp,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An FNet sequence has the following format:`),rp.forEach(o),xi=f(zn),io=a(zn,"UL",{});var Ur=i(io);fn=a(Ur,"LI",{});var Md=i(fn);Ei=c(Md,"single sequence: "),is=a(Md,"CODE",{});var ap=i(is);ji=c(ap,"[CLS] X [SEP]"),ap.forEach(o),Md.forEach(o),Pi=f(Ur),un=a(Ur,"LI",{});var Cd=i(un);Mi=c(Cd,"pair of sequences: "),ls=a(Cd,"CODE",{});var ip=i(ls);Ci=c(ip,"[CLS] A [SEP] B [SEP]"),ip.forEach(o),Cd.forEach(o),Ur.forEach(o),zn.forEach(o),Si=f(qt),J=a(qt,"DIV",{class:!0});var xt=i(J);F(lo.$$.fragment,xt),Ai=f(xt),cs=a(xt,"P",{});var lp=i(cs);Li=c(lp,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An FNet"),lp.forEach(o),Ii=f(xt),F(Je.$$.fragment,xt),Oi=f(xt),ds=a(xt,"P",{});var cp=i(ds);Di=c(cp,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),cp.forEach(o),xt.forEach(o),qt.forEach(o),$r=f(t),ke=a(t,"H2",{class:!0});var Br=i(ke);Ke=a(Br,"A",{id:!0,class:!0,href:!0});var dp=i(Ke);ps=a(dp,"SPAN",{});var pp=i(ps);F(co.$$.fragment,pp),pp.forEach(o),dp.forEach(o),Wi=f(Br),hs=a(Br,"SPAN",{});var hp=i(hs);Ui=c(hp,"FNetModel"),hp.forEach(o),Br.forEach(o),Fr=f(t),W=a(t,"DIV",{class:!0});var Et=i(W);F(po.$$.fragment,Et),Bi=f(Et),ho=a(Et,"P",{});var Hr=i(ho);Hi=c(Hr,`The bare FNet Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),mo=a(Hr,"A",{href:!0,rel:!0});var mp=i(mo);Vi=c(mp,"torch.nn.Module"),mp.forEach(o),Qi=c(Hr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hr.forEach(o),Ri=f(Et),fo=a(Et,"P",{});var Vr=i(fo);Gi=c(Vr,"The model can behave as an encoder, following the architecture described in "),uo=a(Vr,"A",{href:!0,rel:!0});var fp=i(uo);Ji=c(fp,`FNet: Mixing Tokens with Fourier
Transforms`),fp.forEach(o),Ki=c(Vr," by James Lee-Thorp, Joshua Ainslie, Ilya Eckstein, Santiago Ontanon."),Vr.forEach(o),Xi=f(Et),K=a(Et,"DIV",{class:!0});var jt=i(K);F(go.$$.fragment,jt),Yi=f(jt),$e=a(jt,"P",{});var qn=i($e);Zi=c(qn,"The "),gn=a(qn,"A",{href:!0});var up=i(gn);el=c(up,"FNetModel"),up.forEach(o),tl=c(qn," forward method, overrides the "),ms=a(qn,"CODE",{});var gp=i(ms);ol=c(gp,"__call__"),gp.forEach(o),nl=c(qn," special method."),qn.forEach(o),sl=f(jt),F(Xe.$$.fragment,jt),rl=f(jt),F(Ye.$$.fragment,jt),jt.forEach(o),Et.forEach(o),wr=f(t),Fe=a(t,"H2",{class:!0});var Qr=i(Fe);Ze=a(Qr,"A",{id:!0,class:!0,href:!0});var _p=i(Ze);fs=a(_p,"SPAN",{});var bp=i(fs);F(_o.$$.fragment,bp),bp.forEach(o),_p.forEach(o),al=f(Qr),us=a(Qr,"SPAN",{});var kp=i(us);il=c(kp,"FNetForPreTraining"),kp.forEach(o),Qr.forEach(o),vr=f(t),U=a(t,"DIV",{class:!0});var Pt=i(U);F(bo.$$.fragment,Pt),ll=f(Pt),we=a(Pt,"P",{});var xn=i(we);cl=c(xn,"FNet Model with two heads on top as done during the pretraining: a "),gs=a(xn,"CODE",{});var $p=i(gs);dl=c($p,"masked language modeling"),$p.forEach(o),pl=c(xn," head and a "),_s=a(xn,"CODE",{});var Fp=i(_s);hl=c(Fp,"next sentence prediction (classification)"),Fp.forEach(o),ml=c(xn," head."),xn.forEach(o),fl=f(Pt),ko=a(Pt,"P",{});var Rr=i(ko);ul=c(Rr,"This model is a PyTorch "),$o=a(Rr,"A",{href:!0,rel:!0});var wp=i($o);gl=c(wp,"torch.nn.Module"),wp.forEach(o),_l=c(Rr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Rr.forEach(o),bl=f(Pt),X=a(Pt,"DIV",{class:!0});var Mt=i(X);F(Fo.$$.fragment,Mt),kl=f(Mt),ve=a(Mt,"P",{});var En=i(ve);$l=c(En,"The "),_n=a(En,"A",{href:!0});var vp=i(_n);Fl=c(vp,"FNetForPreTraining"),vp.forEach(o),wl=c(En," forward method, overrides the "),bs=a(En,"CODE",{});var Tp=i(bs);vl=c(Tp,"__call__"),Tp.forEach(o),Tl=c(En," special method."),En.forEach(o),yl=f(Mt),F(et.$$.fragment,Mt),Nl=f(Mt),F(tt.$$.fragment,Mt),Mt.forEach(o),Pt.forEach(o),Tr=f(t),Te=a(t,"H2",{class:!0});var Gr=i(Te);ot=a(Gr,"A",{id:!0,class:!0,href:!0});var yp=i(ot);ks=a(yp,"SPAN",{});var Np=i(ks);F(wo.$$.fragment,Np),Np.forEach(o),yp.forEach(o),zl=f(Gr),$s=a(Gr,"SPAN",{});var zp=i($s);ql=c(zp,"FNetForMaskedLM"),zp.forEach(o),Gr.forEach(o),yr=f(t),oe=a(t,"DIV",{class:!0});var jn=i(oe);F(vo.$$.fragment,jn),xl=f(jn),ye=a(jn,"P",{});var Pn=i(ye);El=c(Pn,"FNet Model with a "),Fs=a(Pn,"CODE",{});var qp=i(Fs);jl=c(qp,"language modeling"),qp.forEach(o),Pl=c(Pn,` head on top.
This model is a PyTorch `),To=a(Pn,"A",{href:!0,rel:!0});var xp=i(To);Ml=c(xp,"torch.nn.Module"),xp.forEach(o),Cl=c(Pn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pn.forEach(o),Sl=f(jn),C=a(jn,"DIV",{class:!0});var ce=i(C);F(yo.$$.fragment,ce),Al=f(ce),Ne=a(ce,"P",{});var Mn=i(Ne);Ll=c(Mn,"The "),bn=a(Mn,"A",{href:!0});var Ep=i(bn);Il=c(Ep,"FNetForMaskedLM"),Ep.forEach(o),Ol=c(Mn," forward method, overrides the "),ws=a(Mn,"CODE",{});var jp=i(ws);Dl=c(jp,"__call__"),jp.forEach(o),Wl=c(Mn," special method."),Mn.forEach(o),Ul=f(ce),F(nt.$$.fragment,ce),Bl=f(ce),F(st.$$.fragment,ce),Hl=f(ce),F(rt.$$.fragment,ce),ce.forEach(o),jn.forEach(o),Nr=f(t),ze=a(t,"H2",{class:!0});var Jr=i(ze);at=a(Jr,"A",{id:!0,class:!0,href:!0});var Pp=i(at);vs=a(Pp,"SPAN",{});var Mp=i(vs);F(No.$$.fragment,Mp),Mp.forEach(o),Pp.forEach(o),Vl=f(Jr),Ts=a(Jr,"SPAN",{});var Cp=i(Ts);Ql=c(Cp,"FNetForNextSentencePrediction"),Cp.forEach(o),Jr.forEach(o),zr=f(t),ne=a(t,"DIV",{class:!0});var Cn=i(ne);F(zo.$$.fragment,Cn),Rl=f(Cn),qe=a(Cn,"P",{});var Sn=i(qe);Gl=c(Sn,"FNet Model with a "),ys=a(Sn,"CODE",{});var Sp=i(ys);Jl=c(Sp,"next sentence prediction (classification)"),Sp.forEach(o),Kl=c(Sn,` head on top.
This model is a PyTorch `),qo=a(Sn,"A",{href:!0,rel:!0});var Ap=i(qo);Xl=c(Ap,"torch.nn.Module"),Ap.forEach(o),Yl=c(Sn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Sn.forEach(o),Zl=f(Cn),Y=a(Cn,"DIV",{class:!0});var Ct=i(Y);F(xo.$$.fragment,Ct),ec=f(Ct),xe=a(Ct,"P",{});var An=i(xe);tc=c(An,"The "),kn=a(An,"A",{href:!0});var Lp=i(kn);oc=c(Lp,"FNetForNextSentencePrediction"),Lp.forEach(o),nc=c(An," forward method, overrides the "),Ns=a(An,"CODE",{});var Ip=i(Ns);sc=c(Ip,"__call__"),Ip.forEach(o),rc=c(An," special method."),An.forEach(o),ac=f(Ct),F(it.$$.fragment,Ct),ic=f(Ct),F(lt.$$.fragment,Ct),Ct.forEach(o),Cn.forEach(o),qr=f(t),Ee=a(t,"H2",{class:!0});var Kr=i(Ee);ct=a(Kr,"A",{id:!0,class:!0,href:!0});var Op=i(ct);zs=a(Op,"SPAN",{});var Dp=i(zs);F(Eo.$$.fragment,Dp),Dp.forEach(o),Op.forEach(o),lc=f(Kr),qs=a(Kr,"SPAN",{});var Wp=i(qs);cc=c(Wp,"FNetForSequenceClassification"),Wp.forEach(o),Kr.forEach(o),xr=f(t),B=a(t,"DIV",{class:!0});var St=i(B);F(jo.$$.fragment,St),dc=f(St),xs=a(St,"P",{});var Up=i(xs);pc=c(Up,`FNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Up.forEach(o),hc=f(St),Po=a(St,"P",{});var Xr=i(Po);mc=c(Xr,"This model is a PyTorch "),Mo=a(Xr,"A",{href:!0,rel:!0});var Bp=i(Mo);fc=c(Bp,"torch.nn.Module"),Bp.forEach(o),uc=c(Xr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xr.forEach(o),gc=f(St),x=a(St,"DIV",{class:!0});var L=i(x);F(Co.$$.fragment,L),_c=f(L),je=a(L,"P",{});var Ln=i(je);bc=c(Ln,"The "),$n=a(Ln,"A",{href:!0});var Hp=i($n);kc=c(Hp,"FNetForSequenceClassification"),Hp.forEach(o),$c=c(Ln," forward method, overrides the "),Es=a(Ln,"CODE",{});var Vp=i(Es);Fc=c(Vp,"__call__"),Vp.forEach(o),wc=c(Ln," special method."),Ln.forEach(o),vc=f(L),F(dt.$$.fragment,L),Tc=f(L),F(pt.$$.fragment,L),yc=f(L),F(ht.$$.fragment,L),Nc=f(L),F(mt.$$.fragment,L),zc=f(L),F(ft.$$.fragment,L),L.forEach(o),St.forEach(o),Er=f(t),Pe=a(t,"H2",{class:!0});var Yr=i(Pe);ut=a(Yr,"A",{id:!0,class:!0,href:!0});var Qp=i(ut);js=a(Qp,"SPAN",{});var Rp=i(js);F(So.$$.fragment,Rp),Rp.forEach(o),Qp.forEach(o),qc=f(Yr),Ps=a(Yr,"SPAN",{});var Gp=i(Ps);xc=c(Gp,"FNetForMultipleChoice"),Gp.forEach(o),Yr.forEach(o),jr=f(t),H=a(t,"DIV",{class:!0});var At=i(H);F(Ao.$$.fragment,At),Ec=f(At),Ms=a(At,"P",{});var Jp=i(Ms);jc=c(Jp,`FNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Jp.forEach(o),Pc=f(At),Lo=a(At,"P",{});var Zr=i(Lo);Mc=c(Zr,"This model is a PyTorch "),Io=a(Zr,"A",{href:!0,rel:!0});var Kp=i(Io);Cc=c(Kp,"torch.nn.Module"),Kp.forEach(o),Sc=c(Zr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zr.forEach(o),Ac=f(At),Z=a(At,"DIV",{class:!0});var Lt=i(Z);F(Oo.$$.fragment,Lt),Lc=f(Lt),Me=a(Lt,"P",{});var In=i(Me);Ic=c(In,"The "),Fn=a(In,"A",{href:!0});var Xp=i(Fn);Oc=c(Xp,"FNetForMultipleChoice"),Xp.forEach(o),Dc=c(In," forward method, overrides the "),Cs=a(In,"CODE",{});var Yp=i(Cs);Wc=c(Yp,"__call__"),Yp.forEach(o),Uc=c(In," special method."),In.forEach(o),Bc=f(Lt),F(gt.$$.fragment,Lt),Hc=f(Lt),F(_t.$$.fragment,Lt),Lt.forEach(o),At.forEach(o),Pr=f(t),Ce=a(t,"H2",{class:!0});var ea=i(Ce);bt=a(ea,"A",{id:!0,class:!0,href:!0});var Zp=i(bt);Ss=a(Zp,"SPAN",{});var eh=i(Ss);F(Do.$$.fragment,eh),eh.forEach(o),Zp.forEach(o),Vc=f(ea),As=a(ea,"SPAN",{});var th=i(As);Qc=c(th,"FNetForTokenClassification"),th.forEach(o),ea.forEach(o),Mr=f(t),V=a(t,"DIV",{class:!0});var It=i(V);F(Wo.$$.fragment,It),Rc=f(It),Ls=a(It,"P",{});var oh=i(Ls);Gc=c(oh,`FNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),oh.forEach(o),Jc=f(It),Uo=a(It,"P",{});var ta=i(Uo);Kc=c(ta,"This model is a PyTorch "),Bo=a(ta,"A",{href:!0,rel:!0});var nh=i(Bo);Xc=c(nh,"torch.nn.Module"),nh.forEach(o),Yc=c(ta,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ta.forEach(o),Zc=f(It),S=a(It,"DIV",{class:!0});var de=i(S);F(Ho.$$.fragment,de),ed=f(de),Se=a(de,"P",{});var On=i(Se);td=c(On,"The "),wn=a(On,"A",{href:!0});var sh=i(wn);od=c(sh,"FNetForTokenClassification"),sh.forEach(o),nd=c(On," forward method, overrides the "),Is=a(On,"CODE",{});var rh=i(Is);sd=c(rh,"__call__"),rh.forEach(o),rd=c(On," special method."),On.forEach(o),ad=f(de),F(kt.$$.fragment,de),id=f(de),F($t.$$.fragment,de),ld=f(de),F(Ft.$$.fragment,de),de.forEach(o),It.forEach(o),Cr=f(t),Ae=a(t,"H2",{class:!0});var oa=i(Ae);wt=a(oa,"A",{id:!0,class:!0,href:!0});var ah=i(wt);Os=a(ah,"SPAN",{});var ih=i(Os);F(Vo.$$.fragment,ih),ih.forEach(o),ah.forEach(o),cd=f(oa),Ds=a(oa,"SPAN",{});var lh=i(Ds);dd=c(lh,"FNetForQuestionAnswering"),lh.forEach(o),oa.forEach(o),Sr=f(t),Q=a(t,"DIV",{class:!0});var Ot=i(Q);F(Qo.$$.fragment,Ot),pd=f(Ot),Le=a(Ot,"P",{});var Dn=i(Le);hd=c(Dn,`FNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ws=a(Dn,"CODE",{});var ch=i(Ws);md=c(ch,"span start logits"),ch.forEach(o),fd=c(Dn," and "),Us=a(Dn,"CODE",{});var dh=i(Us);ud=c(dh,"span end logits"),dh.forEach(o),gd=c(Dn,")."),Dn.forEach(o),_d=f(Ot),Ro=a(Ot,"P",{});var na=i(Ro);bd=c(na,"This model is a PyTorch "),Go=a(na,"A",{href:!0,rel:!0});var ph=i(Go);kd=c(ph,"torch.nn.Module"),ph.forEach(o),$d=c(na,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),na.forEach(o),Fd=f(Ot),A=a(Ot,"DIV",{class:!0});var pe=i(A);F(Jo.$$.fragment,pe),wd=f(pe),Ie=a(pe,"P",{});var Wn=i(Ie);vd=c(Wn,"The "),vn=a(Wn,"A",{href:!0});var hh=i(vn);Td=c(hh,"FNetForQuestionAnswering"),hh.forEach(o),yd=c(Wn," forward method, overrides the "),Bs=a(Wn,"CODE",{});var mh=i(Bs);Nd=c(mh,"__call__"),mh.forEach(o),zd=c(Wn," special method."),Wn.forEach(o),qd=f(pe),F(vt.$$.fragment,pe),xd=f(pe),F(Tt.$$.fragment,pe),Ed=f(pe),F(yt.$$.fragment,pe),pe.forEach(o),Ot.forEach(o),this.h()},h(){u(s,"name","hf:doc:metadata"),u(s,"content",JSON.stringify(Vh)),u(p,"id","fnet"),u(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(p,"href","#fnet"),u(d,"class","relative group"),u(We,"id","overview"),u(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(We,"href","#overview"),u(he,"class","relative group"),u(Ut,"href","https://arxiv.org/abs/2105.03824"),u(Ut,"rel","nofollow"),u(Bt,"href","https://huggingface.co/gchhablani"),u(Bt,"rel","nofollow"),u(Ht,"href","https://github.com/google-research/google-research/tree/master/f_net"),u(Ht,"rel","nofollow"),u(Be,"id","transformers.FNetConfig"),u(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Be,"href","#transformers.FNetConfig"),u(me,"class","relative group"),u(nn,"href","/docs/transformers/main/en/model_doc/fnet#transformers.FNetModel"),u(Rt,"href","https://huggingface.co/google/fnet-base"),u(Rt,"rel","nofollow"),u(sn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(rn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"id","transformers.FNetTokenizer"),u(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ve,"href","#transformers.FNetTokenizer"),u(ge,"class","relative group"),u(an,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer"),u(Kt,"href","https://github.com/google/sentencepiece"),u(Kt,"rel","nofollow"),u(ln,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"id","transformers.FNetTokenizerFast"),u(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ge,"href","#transformers.FNetTokenizerFast"),u(be,"class","relative group"),u(hn,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizerFast"),u(ro,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),u(ro,"rel","nofollow"),u(mn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"id","transformers.FNetModel"),u(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ke,"href","#transformers.FNetModel"),u(ke,"class","relative group"),u(mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(mo,"rel","nofollow"),u(uo,"href","https://arxiv.org/abs/2105.03824"),u(uo,"rel","nofollow"),u(gn,"href","/docs/transformers/main/en/model_doc/fnet#transformers.FNetModel"),u(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"id","transformers.FNetForPreTraining"),u(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ze,"href","#transformers.FNetForPreTraining"),u(Fe,"class","relative group"),u($o,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u($o,"rel","nofollow"),u(_n,"href","/docs/transformers/main/en/model_doc/fnet#transformers.FNetForPreTraining"),u(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"id","transformers.FNetForMaskedLM"),u(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ot,"href","#transformers.FNetForMaskedLM"),u(Te,"class","relative group"),u(To,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(To,"rel","nofollow"),u(bn,"href","/docs/transformers/main/en/model_doc/fnet#transformers.FNetForMaskedLM"),u(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"id","transformers.FNetForNextSentencePrediction"),u(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(at,"href","#transformers.FNetForNextSentencePrediction"),u(ze,"class","relative group"),u(qo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(qo,"rel","nofollow"),u(kn,"href","/docs/transformers/main/en/model_doc/fnet#transformers.FNetForNextSentencePrediction"),u(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"id","transformers.FNetForSequenceClassification"),u(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ct,"href","#transformers.FNetForSequenceClassification"),u(Ee,"class","relative group"),u(Mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Mo,"rel","nofollow"),u($n,"href","/docs/transformers/main/en/model_doc/fnet#transformers.FNetForSequenceClassification"),u(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ut,"id","transformers.FNetForMultipleChoice"),u(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ut,"href","#transformers.FNetForMultipleChoice"),u(Pe,"class","relative group"),u(Io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Io,"rel","nofollow"),u(Fn,"href","/docs/transformers/main/en/model_doc/fnet#transformers.FNetForMultipleChoice"),u(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"id","transformers.FNetForTokenClassification"),u(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bt,"href","#transformers.FNetForTokenClassification"),u(Ce,"class","relative group"),u(Bo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Bo,"rel","nofollow"),u(wn,"href","/docs/transformers/main/en/model_doc/fnet#transformers.FNetForTokenClassification"),u(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wt,"id","transformers.FNetForQuestionAnswering"),u(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wt,"href","#transformers.FNetForQuestionAnswering"),u(Ae,"class","relative group"),u(Go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Go,"rel","nofollow"),u(vn,"href","/docs/transformers/main/en/model_doc/fnet#transformers.FNetForQuestionAnswering"),u(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,s),k(t,_,g),k(t,d,g),e(d,p),e(p,b),w(n,b,null),e(d,h),e(d,z),e(z,sa),k(t,lr,g),k(t,he,g),e(he,We),e(We,Un),w(Wt,Un,null),e(he,ra),e(he,Bn),e(Bn,aa),k(t,cr,g),k(t,Ue,g),e(Ue,ia),e(Ue,Ut),e(Ut,la),e(Ue,ca),k(t,dr,g),k(t,en,g),e(en,Hn),e(Hn,da),k(t,pr,g),k(t,tn,g),e(tn,pa),k(t,hr,g),k(t,on,g),e(on,Vn),e(Vn,ha),k(t,mr,g),k(t,re,g),e(re,ma),e(re,Bt),e(Bt,fa),e(re,ua),e(re,Ht),e(Ht,ga),e(re,_a),k(t,fr,g),k(t,me,g),e(me,Be),e(Be,Qn),w(Vt,Qn,null),e(me,ba),e(me,Rn),e(Rn,ka),k(t,ur,g),k(t,I,g),w(Qt,I,null),e(I,$a),e(I,fe),e(fe,Fa),e(fe,nn),e(nn,wa),e(fe,va),e(fe,Rt),e(Rt,Ta),e(fe,ya),e(I,Na),e(I,ue),e(ue,za),e(ue,sn),e(sn,qa),e(ue,xa),e(ue,rn),e(rn,Ea),e(ue,ja),e(I,Pa),w(He,I,null),k(t,gr,g),k(t,ge,g),e(ge,Ve),e(Ve,Gn),w(Gt,Gn,null),e(ge,Ma),e(ge,Jn),e(Jn,Ca),k(t,_r,g),k(t,E,g),w(Jt,E,null),e(E,Sa),e(E,te),e(te,Aa),e(te,an),e(an,La),e(te,Ia),e(te,Kt),e(Kt,Oa),e(te,Da),e(te,ln),e(ln,Wa),e(te,Ua),e(E,Ba),e(E,ae),w(Xt,ae,null),e(ae,Ha),e(ae,Kn),e(Kn,Va),e(ae,Qa),e(ae,Yt),e(Yt,cn),e(cn,Ra),e(cn,Xn),e(Xn,Ga),e(Yt,Ja),e(Yt,dn),e(dn,Ka),e(dn,Yn),e(Yn,Xa),e(E,Ya),e(E,Qe),w(Zt,Qe,null),e(Qe,Za),e(Qe,eo),e(eo,ei),e(eo,Zn),e(Zn,ti),e(eo,oi),e(E,ni),e(E,G),w(to,G,null),e(G,si),e(G,es),e(es,ri),e(G,ai),w(Re,G,null),e(G,ii),e(G,_e),e(_e,li),e(_e,ts),e(ts,ci),e(_e,di),e(_e,os),e(os,pi),e(_e,hi),e(E,mi),e(E,pn),w(oo,pn,null),k(t,br,g),k(t,be,g),e(be,Ge),e(Ge,ns),w(no,ns,null),e(be,fi),e(be,ss),e(ss,ui),k(t,kr,g),k(t,O,g),w(so,O,null),e(O,gi),e(O,D),e(D,_i),e(D,rs),e(rs,bi),e(D,ki),e(D,hn),e(hn,$i),e(D,Fi),e(D,ro),e(ro,wi),e(D,vi),e(D,mn),e(mn,Ti),e(D,yi),e(O,Ni),e(O,ie),w(ao,ie,null),e(ie,zi),e(ie,as),e(as,qi),e(ie,xi),e(ie,io),e(io,fn),e(fn,Ei),e(fn,is),e(is,ji),e(io,Pi),e(io,un),e(un,Mi),e(un,ls),e(ls,Ci),e(O,Si),e(O,J),w(lo,J,null),e(J,Ai),e(J,cs),e(cs,Li),e(J,Ii),w(Je,J,null),e(J,Oi),e(J,ds),e(ds,Di),k(t,$r,g),k(t,ke,g),e(ke,Ke),e(Ke,ps),w(co,ps,null),e(ke,Wi),e(ke,hs),e(hs,Ui),k(t,Fr,g),k(t,W,g),w(po,W,null),e(W,Bi),e(W,ho),e(ho,Hi),e(ho,mo),e(mo,Vi),e(ho,Qi),e(W,Ri),e(W,fo),e(fo,Gi),e(fo,uo),e(uo,Ji),e(fo,Ki),e(W,Xi),e(W,K),w(go,K,null),e(K,Yi),e(K,$e),e($e,Zi),e($e,gn),e(gn,el),e($e,tl),e($e,ms),e(ms,ol),e($e,nl),e(K,sl),w(Xe,K,null),e(K,rl),w(Ye,K,null),k(t,wr,g),k(t,Fe,g),e(Fe,Ze),e(Ze,fs),w(_o,fs,null),e(Fe,al),e(Fe,us),e(us,il),k(t,vr,g),k(t,U,g),w(bo,U,null),e(U,ll),e(U,we),e(we,cl),e(we,gs),e(gs,dl),e(we,pl),e(we,_s),e(_s,hl),e(we,ml),e(U,fl),e(U,ko),e(ko,ul),e(ko,$o),e($o,gl),e(ko,_l),e(U,bl),e(U,X),w(Fo,X,null),e(X,kl),e(X,ve),e(ve,$l),e(ve,_n),e(_n,Fl),e(ve,wl),e(ve,bs),e(bs,vl),e(ve,Tl),e(X,yl),w(et,X,null),e(X,Nl),w(tt,X,null),k(t,Tr,g),k(t,Te,g),e(Te,ot),e(ot,ks),w(wo,ks,null),e(Te,zl),e(Te,$s),e($s,ql),k(t,yr,g),k(t,oe,g),w(vo,oe,null),e(oe,xl),e(oe,ye),e(ye,El),e(ye,Fs),e(Fs,jl),e(ye,Pl),e(ye,To),e(To,Ml),e(ye,Cl),e(oe,Sl),e(oe,C),w(yo,C,null),e(C,Al),e(C,Ne),e(Ne,Ll),e(Ne,bn),e(bn,Il),e(Ne,Ol),e(Ne,ws),e(ws,Dl),e(Ne,Wl),e(C,Ul),w(nt,C,null),e(C,Bl),w(st,C,null),e(C,Hl),w(rt,C,null),k(t,Nr,g),k(t,ze,g),e(ze,at),e(at,vs),w(No,vs,null),e(ze,Vl),e(ze,Ts),e(Ts,Ql),k(t,zr,g),k(t,ne,g),w(zo,ne,null),e(ne,Rl),e(ne,qe),e(qe,Gl),e(qe,ys),e(ys,Jl),e(qe,Kl),e(qe,qo),e(qo,Xl),e(qe,Yl),e(ne,Zl),e(ne,Y),w(xo,Y,null),e(Y,ec),e(Y,xe),e(xe,tc),e(xe,kn),e(kn,oc),e(xe,nc),e(xe,Ns),e(Ns,sc),e(xe,rc),e(Y,ac),w(it,Y,null),e(Y,ic),w(lt,Y,null),k(t,qr,g),k(t,Ee,g),e(Ee,ct),e(ct,zs),w(Eo,zs,null),e(Ee,lc),e(Ee,qs),e(qs,cc),k(t,xr,g),k(t,B,g),w(jo,B,null),e(B,dc),e(B,xs),e(xs,pc),e(B,hc),e(B,Po),e(Po,mc),e(Po,Mo),e(Mo,fc),e(Po,uc),e(B,gc),e(B,x),w(Co,x,null),e(x,_c),e(x,je),e(je,bc),e(je,$n),e($n,kc),e(je,$c),e(je,Es),e(Es,Fc),e(je,wc),e(x,vc),w(dt,x,null),e(x,Tc),w(pt,x,null),e(x,yc),w(ht,x,null),e(x,Nc),w(mt,x,null),e(x,zc),w(ft,x,null),k(t,Er,g),k(t,Pe,g),e(Pe,ut),e(ut,js),w(So,js,null),e(Pe,qc),e(Pe,Ps),e(Ps,xc),k(t,jr,g),k(t,H,g),w(Ao,H,null),e(H,Ec),e(H,Ms),e(Ms,jc),e(H,Pc),e(H,Lo),e(Lo,Mc),e(Lo,Io),e(Io,Cc),e(Lo,Sc),e(H,Ac),e(H,Z),w(Oo,Z,null),e(Z,Lc),e(Z,Me),e(Me,Ic),e(Me,Fn),e(Fn,Oc),e(Me,Dc),e(Me,Cs),e(Cs,Wc),e(Me,Uc),e(Z,Bc),w(gt,Z,null),e(Z,Hc),w(_t,Z,null),k(t,Pr,g),k(t,Ce,g),e(Ce,bt),e(bt,Ss),w(Do,Ss,null),e(Ce,Vc),e(Ce,As),e(As,Qc),k(t,Mr,g),k(t,V,g),w(Wo,V,null),e(V,Rc),e(V,Ls),e(Ls,Gc),e(V,Jc),e(V,Uo),e(Uo,Kc),e(Uo,Bo),e(Bo,Xc),e(Uo,Yc),e(V,Zc),e(V,S),w(Ho,S,null),e(S,ed),e(S,Se),e(Se,td),e(Se,wn),e(wn,od),e(Se,nd),e(Se,Is),e(Is,sd),e(Se,rd),e(S,ad),w(kt,S,null),e(S,id),w($t,S,null),e(S,ld),w(Ft,S,null),k(t,Cr,g),k(t,Ae,g),e(Ae,wt),e(wt,Os),w(Vo,Os,null),e(Ae,cd),e(Ae,Ds),e(Ds,dd),k(t,Sr,g),k(t,Q,g),w(Qo,Q,null),e(Q,pd),e(Q,Le),e(Le,hd),e(Le,Ws),e(Ws,md),e(Le,fd),e(Le,Us),e(Us,ud),e(Le,gd),e(Q,_d),e(Q,Ro),e(Ro,bd),e(Ro,Go),e(Go,kd),e(Ro,$d),e(Q,Fd),e(Q,A),w(Jo,A,null),e(A,wd),e(A,Ie),e(Ie,vd),e(Ie,vn),e(vn,Td),e(Ie,yd),e(Ie,Bs),e(Bs,Nd),e(Ie,zd),e(A,qd),w(vt,A,null),e(A,xd),w(Tt,A,null),e(A,Ed),w(yt,A,null),Ar=!0},p(t,[g]){const Ko={};g&2&&(Ko.$$scope={dirty:g,ctx:t}),He.$set(Ko);const Hs={};g&2&&(Hs.$$scope={dirty:g,ctx:t}),Re.$set(Hs);const Vs={};g&2&&(Vs.$$scope={dirty:g,ctx:t}),Je.$set(Vs);const Qs={};g&2&&(Qs.$$scope={dirty:g,ctx:t}),Xe.$set(Qs);const Xo={};g&2&&(Xo.$$scope={dirty:g,ctx:t}),Ye.$set(Xo);const Rs={};g&2&&(Rs.$$scope={dirty:g,ctx:t}),et.$set(Rs);const Gs={};g&2&&(Gs.$$scope={dirty:g,ctx:t}),tt.$set(Gs);const Js={};g&2&&(Js.$$scope={dirty:g,ctx:t}),nt.$set(Js);const Yo={};g&2&&(Yo.$$scope={dirty:g,ctx:t}),st.$set(Yo);const Ks={};g&2&&(Ks.$$scope={dirty:g,ctx:t}),rt.$set(Ks);const Xs={};g&2&&(Xs.$$scope={dirty:g,ctx:t}),it.$set(Xs);const Ys={};g&2&&(Ys.$$scope={dirty:g,ctx:t}),lt.$set(Ys);const Zs={};g&2&&(Zs.$$scope={dirty:g,ctx:t}),dt.$set(Zs);const er={};g&2&&(er.$$scope={dirty:g,ctx:t}),pt.$set(er);const tr={};g&2&&(tr.$$scope={dirty:g,ctx:t}),ht.$set(tr);const Oe={};g&2&&(Oe.$$scope={dirty:g,ctx:t}),mt.$set(Oe);const or={};g&2&&(or.$$scope={dirty:g,ctx:t}),ft.$set(or);const nr={};g&2&&(nr.$$scope={dirty:g,ctx:t}),gt.$set(nr);const Zo={};g&2&&(Zo.$$scope={dirty:g,ctx:t}),_t.$set(Zo);const sr={};g&2&&(sr.$$scope={dirty:g,ctx:t}),kt.$set(sr);const rr={};g&2&&(rr.$$scope={dirty:g,ctx:t}),$t.$set(rr);const ar={};g&2&&(ar.$$scope={dirty:g,ctx:t}),Ft.$set(ar);const se={};g&2&&(se.$$scope={dirty:g,ctx:t}),vt.$set(se);const De={};g&2&&(De.$$scope={dirty:g,ctx:t}),Tt.$set(De);const ir={};g&2&&(ir.$$scope={dirty:g,ctx:t}),yt.$set(ir)},i(t){Ar||(v(n.$$.fragment,t),v(Wt.$$.fragment,t),v(Vt.$$.fragment,t),v(Qt.$$.fragment,t),v(He.$$.fragment,t),v(Gt.$$.fragment,t),v(Jt.$$.fragment,t),v(Xt.$$.fragment,t),v(Zt.$$.fragment,t),v(to.$$.fragment,t),v(Re.$$.fragment,t),v(oo.$$.fragment,t),v(no.$$.fragment,t),v(so.$$.fragment,t),v(ao.$$.fragment,t),v(lo.$$.fragment,t),v(Je.$$.fragment,t),v(co.$$.fragment,t),v(po.$$.fragment,t),v(go.$$.fragment,t),v(Xe.$$.fragment,t),v(Ye.$$.fragment,t),v(_o.$$.fragment,t),v(bo.$$.fragment,t),v(Fo.$$.fragment,t),v(et.$$.fragment,t),v(tt.$$.fragment,t),v(wo.$$.fragment,t),v(vo.$$.fragment,t),v(yo.$$.fragment,t),v(nt.$$.fragment,t),v(st.$$.fragment,t),v(rt.$$.fragment,t),v(No.$$.fragment,t),v(zo.$$.fragment,t),v(xo.$$.fragment,t),v(it.$$.fragment,t),v(lt.$$.fragment,t),v(Eo.$$.fragment,t),v(jo.$$.fragment,t),v(Co.$$.fragment,t),v(dt.$$.fragment,t),v(pt.$$.fragment,t),v(ht.$$.fragment,t),v(mt.$$.fragment,t),v(ft.$$.fragment,t),v(So.$$.fragment,t),v(Ao.$$.fragment,t),v(Oo.$$.fragment,t),v(gt.$$.fragment,t),v(_t.$$.fragment,t),v(Do.$$.fragment,t),v(Wo.$$.fragment,t),v(Ho.$$.fragment,t),v(kt.$$.fragment,t),v($t.$$.fragment,t),v(Ft.$$.fragment,t),v(Vo.$$.fragment,t),v(Qo.$$.fragment,t),v(Jo.$$.fragment,t),v(vt.$$.fragment,t),v(Tt.$$.fragment,t),v(yt.$$.fragment,t),Ar=!0)},o(t){T(n.$$.fragment,t),T(Wt.$$.fragment,t),T(Vt.$$.fragment,t),T(Qt.$$.fragment,t),T(He.$$.fragment,t),T(Gt.$$.fragment,t),T(Jt.$$.fragment,t),T(Xt.$$.fragment,t),T(Zt.$$.fragment,t),T(to.$$.fragment,t),T(Re.$$.fragment,t),T(oo.$$.fragment,t),T(no.$$.fragment,t),T(so.$$.fragment,t),T(ao.$$.fragment,t),T(lo.$$.fragment,t),T(Je.$$.fragment,t),T(co.$$.fragment,t),T(po.$$.fragment,t),T(go.$$.fragment,t),T(Xe.$$.fragment,t),T(Ye.$$.fragment,t),T(_o.$$.fragment,t),T(bo.$$.fragment,t),T(Fo.$$.fragment,t),T(et.$$.fragment,t),T(tt.$$.fragment,t),T(wo.$$.fragment,t),T(vo.$$.fragment,t),T(yo.$$.fragment,t),T(nt.$$.fragment,t),T(st.$$.fragment,t),T(rt.$$.fragment,t),T(No.$$.fragment,t),T(zo.$$.fragment,t),T(xo.$$.fragment,t),T(it.$$.fragment,t),T(lt.$$.fragment,t),T(Eo.$$.fragment,t),T(jo.$$.fragment,t),T(Co.$$.fragment,t),T(dt.$$.fragment,t),T(pt.$$.fragment,t),T(ht.$$.fragment,t),T(mt.$$.fragment,t),T(ft.$$.fragment,t),T(So.$$.fragment,t),T(Ao.$$.fragment,t),T(Oo.$$.fragment,t),T(gt.$$.fragment,t),T(_t.$$.fragment,t),T(Do.$$.fragment,t),T(Wo.$$.fragment,t),T(Ho.$$.fragment,t),T(kt.$$.fragment,t),T($t.$$.fragment,t),T(Ft.$$.fragment,t),T(Vo.$$.fragment,t),T(Qo.$$.fragment,t),T(Jo.$$.fragment,t),T(vt.$$.fragment,t),T(Tt.$$.fragment,t),T(yt.$$.fragment,t),Ar=!1},d(t){o(s),t&&o(_),t&&o(d),y(n),t&&o(lr),t&&o(he),y(Wt),t&&o(cr),t&&o(Ue),t&&o(dr),t&&o(en),t&&o(pr),t&&o(tn),t&&o(hr),t&&o(on),t&&o(mr),t&&o(re),t&&o(fr),t&&o(me),y(Vt),t&&o(ur),t&&o(I),y(Qt),y(He),t&&o(gr),t&&o(ge),y(Gt),t&&o(_r),t&&o(E),y(Jt),y(Xt),y(Zt),y(to),y(Re),y(oo),t&&o(br),t&&o(be),y(no),t&&o(kr),t&&o(O),y(so),y(ao),y(lo),y(Je),t&&o($r),t&&o(ke),y(co),t&&o(Fr),t&&o(W),y(po),y(go),y(Xe),y(Ye),t&&o(wr),t&&o(Fe),y(_o),t&&o(vr),t&&o(U),y(bo),y(Fo),y(et),y(tt),t&&o(Tr),t&&o(Te),y(wo),t&&o(yr),t&&o(oe),y(vo),y(yo),y(nt),y(st),y(rt),t&&o(Nr),t&&o(ze),y(No),t&&o(zr),t&&o(ne),y(zo),y(xo),y(it),y(lt),t&&o(qr),t&&o(Ee),y(Eo),t&&o(xr),t&&o(B),y(jo),y(Co),y(dt),y(pt),y(ht),y(mt),y(ft),t&&o(Er),t&&o(Pe),y(So),t&&o(jr),t&&o(H),y(Ao),y(Oo),y(gt),y(_t),t&&o(Pr),t&&o(Ce),y(Do),t&&o(Mr),t&&o(V),y(Wo),y(Ho),y(kt),y($t),y(Ft),t&&o(Cr),t&&o(Ae),y(Vo),t&&o(Sr),t&&o(Q),y(Qo),y(Jo),y(vt),y(Tt),y(yt)}}}const Vh={local:"fnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.FNetConfig",title:"FNetConfig"},{local:"transformers.FNetTokenizer",title:"FNetTokenizer"},{local:"transformers.FNetTokenizerFast",title:"FNetTokenizerFast"},{local:"transformers.FNetModel",title:"FNetModel"},{local:"transformers.FNetForPreTraining",title:"FNetForPreTraining"},{local:"transformers.FNetForMaskedLM",title:"FNetForMaskedLM"},{local:"transformers.FNetForNextSentencePrediction",title:"FNetForNextSentencePrediction"},{local:"transformers.FNetForSequenceClassification",title:"FNetForSequenceClassification"},{local:"transformers.FNetForMultipleChoice",title:"FNetForMultipleChoice"},{local:"transformers.FNetForTokenClassification",title:"FNetForTokenClassification"},{local:"transformers.FNetForQuestionAnswering",title:"FNetForQuestionAnswering"}],title:"FNet"};function Qh(N){return bh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zh extends fh{constructor(s){super();uh(this,s,Qh,Hh,gh,{})}}export{Zh as default,Vh as metadata};
