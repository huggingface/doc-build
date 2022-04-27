import{S as ch,i as ph,s as mh,e as a,k as h,w as v,t as s,M as hh,c as i,d as o,m as u,a as l,x as M,h as r,b as g,F as e,g as b,y as w,q as $,o as T,B as y,v as uh,L as j}from"../../chunks/vendor-6b77c823.js";import{T as We}from"../../chunks/Tip-39098574.js";import{D as P}from"../../chunks/Docstring-1088f2fb.js";import{C as z}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as te}from"../../chunks/IconCopyLink-7a11ce68.js";import{E}from"../../chunks/ExampleCodeBlock-5212b321.js";function fh(B){let d,_,c,m,k;return m=new z({props:{code:`from transformers import MegatronBertModel, MegatronBertConfig

# Initializing a MEGATRON_BERT bert-base-uncased style configuration
configuration = MegatronBertConfig()

# Initializing a model from the bert-base-uncased style configuration
model = MegatronBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MegatronBertModel, MegatronBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MEGATRON_BERT bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MegatronBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),_=s("Examples:"),c=h(),v(m.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Examples:"),p.forEach(o),c=u(n),M(m.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(m,n,p),k=!0},p:j,i(n){k||($(m.$$.fragment,n),k=!0)},o(n){T(m.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(m,n)}}}function gh(B){let d,_,c,m,k;return{c(){d=a("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);m=r(F,"Module"),F.forEach(o),k=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,m),e(d,k)},d(n){n&&o(d)}}}function _h(B){let d,_,c,m,k;return m=new z({props:{code:`from transformers import BertTokenizer, MegatronBertModel
import torch

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertModel.from_pretrained("nvidia/megatron-bert-cased-345m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertModel.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=s("Example:"),c=h(),v(m.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Example:"),p.forEach(o),c=u(n),M(m.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(m,n,p),k=!0},p:j,i(n){k||($(m.$$.fragment,n),k=!0)},o(n){T(m.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(m,n)}}}function bh(B){let d,_,c,m,k;return{c(){d=a("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);m=r(F,"Module"),F.forEach(o),k=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,m),e(d,k)},d(n){n&&o(d)}}}function kh(B){let d,_,c,m,k;return m=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForMaskedLM
import torch

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForMaskedLM.from_pretrained("nvidia/megatron-bert-cased-345m")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=a("p"),_=s("Example:"),c=h(),v(m.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Example:"),p.forEach(o),c=u(n),M(m.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(m,n,p),k=!0},p:j,i(n){k||($(m.$$.fragment,n),k=!0)},o(n){T(m.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(m,n)}}}function vh(B){let d,_;return d=new z({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Mh(B){let d,_,c,m,k;return{c(){d=a("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);m=r(F,"Module"),F.forEach(o),k=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,m),e(d,k)},d(n){n&&o(d)}}}function wh(B){let d,_,c,m,k;return m=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForCausalLM, MegatronBertConfig
import torch

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForCausalLM.from_pretrained("nvidia/megatron-bert-cased-345m", is_decoder=True)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForCausalLM, MegatronBertConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForCausalLM.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>, is_decoder=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),_=s("Example:"),c=h(),v(m.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Example:"),p.forEach(o),c=u(n),M(m.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(m,n,p),k=!0},p:j,i(n){k||($(m.$$.fragment,n),k=!0)},o(n){T(m.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(m,n)}}}function $h(B){let d,_,c,m,k;return{c(){d=a("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);m=r(F,"Module"),F.forEach(o),k=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,m),e(d,k)},d(n){n&&o(d)}}}function Th(B){let d,_,c,m,k;return m=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForNextSentencePrediction
import torch

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForNextSentencePrediction.from_pretrained("nvidia/megatron-bert-cased-345m")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="pt")

outputs = model(**encoding, labels=torch.LongTensor([1]))
logits = outputs.logits
assert logits[0, 0] < logits[0, 1]  # next sentence was random`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=a("p"),_=s("Example:"),c=h(),v(m.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Example:"),p.forEach(o),c=u(n),M(m.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(m,n,p),k=!0},p:j,i(n){k||($(m.$$.fragment,n),k=!0)},o(n){T(m.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(m,n)}}}function yh(B){let d,_,c,m,k;return{c(){d=a("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);m=r(F,"Module"),F.forEach(o),k=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,m),e(d,k)},d(n){n&&o(d)}}}function Bh(B){let d,_,c,m,k;return m=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForPreTraining
import torch

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForPreTraining.from_pretrained("nvidia/megatron-bert-cased-345m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=a("p"),_=s("Example:"),c=h(),v(m.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Example:"),p.forEach(o),c=u(n),M(m.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(m,n,p),k=!0},p:j,i(n){k||($(m.$$.fragment,n),k=!0)},o(n){T(m.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(m,n)}}}function Fh(B){let d,_,c,m,k;return{c(){d=a("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);m=r(F,"Module"),F.forEach(o),k=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,m),e(d,k)},d(n){n&&o(d)}}}function zh(B){let d,_,c,m,k;return m=new z({props:{code:`import torch
from transformers import BertTokenizer, MegatronBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForSequenceClassification.from_pretrained("nvidia/megatron-bert-cased-345m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),_=s("Example of single-label classification:"),c=h(),v(m.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Example of single-label classification:"),p.forEach(o),c=u(n),M(m.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(m,n,p),k=!0},p:j,i(n){k||($(m.$$.fragment,n),k=!0)},o(n){T(m.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(m,n)}}}function xh(B){let d,_;return d=new z({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MegatronBertForSequenceClassification.from_pretrained("nvidia/megatron-bert-cased-345m", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Ph(B){let d,_,c,m,k;return m=new z({props:{code:`import torch
from transformers import BertTokenizer, MegatronBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForSequenceClassification.from_pretrained("nvidia/megatron-bert-cased-345m", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),_=s("Example of multi-label classification:"),c=h(),v(m.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Example of multi-label classification:"),p.forEach(o),c=u(n),M(m.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(m,n,p),k=!0},p:j,i(n){k||($(m.$$.fragment,n),k=!0)},o(n){T(m.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(m,n)}}}function qh(B){let d,_;return d=new z({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MegatronBertForSequenceClassification.from_pretrained(
    "nvidia/megatron-bert-cased-345m", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Ch(B){let d,_,c,m,k;return{c(){d=a("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);m=r(F,"Module"),F.forEach(o),k=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,m),e(d,k)},d(n){n&&o(d)}}}function Eh(B){let d,_,c,m,k;return m=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForMultipleChoice
import torch

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForMultipleChoice.from_pretrained("nvidia/megatron-bert-cased-345m")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=s("Example:"),c=h(),v(m.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Example:"),p.forEach(o),c=u(n),M(m.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(m,n,p),k=!0},p:j,i(n){k||($(m.$$.fragment,n),k=!0)},o(n){T(m.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(m,n)}}}function jh(B){let d,_,c,m,k;return{c(){d=a("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);m=r(F,"Module"),F.forEach(o),k=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,m),e(d,k)},d(n){n&&o(d)}}}function Ah(B){let d,_,c,m,k;return m=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForTokenClassification
import torch

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForTokenClassification.from_pretrained("nvidia/megatron-bert-cased-345m")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)

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
`}}),{c(){d=a("p"),_=s("Example:"),c=h(),v(m.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Example:"),p.forEach(o),c=u(n),M(m.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(m,n,p),k=!0},p:j,i(n){k||($(m.$$.fragment,n),k=!0)},o(n){T(m.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(m,n)}}}function Sh(B){let d,_;return d=new z({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Nh(B){let d,_,c,m,k;return{c(){d=a("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);m=r(F,"Module"),F.forEach(o),k=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,m),e(d,k)},d(n){n&&o(d)}}}function Lh(B){let d,_,c,m,k;return m=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForQuestionAnswering
import torch

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForQuestionAnswering.from_pretrained("nvidia/megatron-bert-cased-345m")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),_=s("Example:"),c=h(),v(m.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=r(p,"Example:"),p.forEach(o),c=u(n),M(m.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(m,n,p),k=!0},p:j,i(n){k||($(m.$$.fragment,n),k=!0)},o(n){T(m.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(m,n)}}}function Ih(B){let d,_;return d=new z({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Oh(B){let d,_,c,m,k,n,p,F,Ta,lr,ge,Re,Qn,Et,ya,Vn,Ba,dr,He,Fa,jt,za,xa,cr,nn,Pa,pr,sn,Gn,qa,mr,rn,Ca,hr,Ue,Ea,At,ja,Aa,ur,oe,Sa,St,Na,La,Nt,Ia,Oa,fr,an,Da,gr,ln,Wa,_r,Lt,br,dn,Ra,kr,It,vr,cn,Ha,Mr,ne,Ua,Jn,Qa,Va,Kn,Ga,Ja,wr,Ot,$r,Dt,Tr,se,Ka,Wt,Ya,Xa,Rt,Za,ei,yr,_e,Qe,Yn,Ht,ti,Xn,oi,Br,J,Ut,ni,be,si,pn,ri,ai,Qt,ii,li,di,ke,ci,mn,pi,mi,hn,hi,ui,fi,Ve,Fr,ve,Ge,Zn,Vt,gi,es,_i,zr,x,Gt,bi,ts,ki,vi,Jt,Mi,un,wi,$i,Ti,Kt,yi,Yt,Bi,Fi,zi,Xt,xi,Zt,Pi,qi,Ci,C,Ei,os,ji,Ai,ns,Si,Ni,ss,Li,Ii,rs,Oi,Di,as,Wi,Ri,is,Hi,Ui,Qi,K,eo,Vi,Me,Gi,fn,Ji,Ki,ls,Yi,Xi,Zi,Je,el,Ke,xr,we,Ye,ds,to,tl,cs,ol,Pr,A,oo,nl,no,sl,ps,rl,al,il,so,ll,gn,dl,cl,pl,ro,ml,ao,hl,ul,fl,R,io,gl,$e,_l,_n,bl,kl,ms,vl,Ml,wl,Xe,$l,Ze,Tl,et,qr,Te,tt,hs,lo,yl,us,Bl,Cr,S,co,Fl,po,zl,fs,xl,Pl,ql,mo,Cl,bn,El,jl,Al,ho,Sl,uo,Nl,Ll,Il,Y,fo,Ol,ye,Dl,kn,Wl,Rl,gs,Hl,Ul,Ql,ot,Vl,nt,Er,Be,st,_s,go,Gl,bs,Jl,jr,N,_o,Kl,bo,Yl,ks,Xl,Zl,ed,ko,td,vn,od,nd,sd,vo,rd,Mo,ad,id,ld,X,wo,dd,Fe,cd,Mn,pd,md,vs,hd,ud,fd,rt,gd,at,Ar,ze,it,Ms,$o,_d,ws,bd,Sr,L,To,kd,xe,vd,$s,Md,wd,Ts,$d,Td,yd,yo,Bd,wn,Fd,zd,xd,Bo,Pd,Fo,qd,Cd,Ed,Z,zo,jd,Pe,Ad,$n,Sd,Nd,ys,Ld,Id,Od,lt,Dd,dt,Nr,qe,ct,Bs,xo,Wd,Fs,Rd,Lr,I,Po,Hd,zs,Ud,Qd,qo,Vd,Tn,Gd,Jd,Kd,Co,Yd,Eo,Xd,Zd,ec,q,jo,tc,Ce,oc,yn,nc,sc,xs,rc,ac,ic,pt,lc,mt,dc,ht,cc,ut,pc,ft,Ir,Ee,gt,Ps,Ao,mc,qs,hc,Or,O,So,uc,Cs,fc,gc,No,_c,Bn,bc,kc,vc,Lo,Mc,Io,wc,$c,Tc,ee,Oo,yc,je,Bc,Fn,Fc,zc,Es,xc,Pc,qc,_t,Cc,bt,Dr,Ae,kt,js,Do,Ec,As,jc,Wr,D,Wo,Ac,Ss,Sc,Nc,Ro,Lc,zn,Ic,Oc,Dc,Ho,Wc,Uo,Rc,Hc,Uc,H,Qo,Qc,Se,Vc,xn,Gc,Jc,Ns,Kc,Yc,Xc,vt,Zc,Mt,ep,wt,Rr,Ne,$t,Ls,Vo,tp,Is,op,Hr,W,Go,np,Le,sp,Os,rp,ap,Ds,ip,lp,dp,Jo,cp,Pn,pp,mp,hp,Ko,up,Yo,fp,gp,_p,U,Xo,bp,Ie,kp,qn,vp,Mp,Ws,wp,$p,Tp,Tt,yp,yt,Bp,Bt,Ur;return n=new te({}),Et=new te({}),Lt=new z({props:{code:`wget --content-disposition https://api.ngc.nvidia.com/v2/models/nvidia/megatron_bert_345m/versions/v0.1_uncased/zip
-O megatron_bert_345m_v0_1_uncased.zip`,highlighted:`wget --content-disposition https://api.ngc.nvidia.com/v2/models/nvidia/megatron_bert_345m/versions/v0.1_uncased/zip
-O megatron_bert_345m_v0_1_uncased.zip`}}),It=new z({props:{code:`wget --content-disposition https://api.ngc.nvidia.com/v2/models/nvidia/megatron_bert_345m/versions/v0.1_cased/zip -O
megatron_bert_345m_v0_1_cased.zip`,highlighted:`wget --content-disposition https://api.ngc.nvidia.com/v2/models/nvidia/megatron_bert_345m/versions/v0.1_cased/zip -O
megatron_bert_345m_v0_1_cased.zip`}}),Ot=new z({props:{code:"python3 $PATH_TO_TRANSFORMERS/models/megatron_bert/convert_megatron_bert_checkpoint.py megatron_bert_345m_v0_1_uncased.zip",highlighted:'python3 <span class="hljs-variable">$PATH_TO_TRANSFORMERS</span>/models/megatron_bert/convert_megatron_bert_checkpoint.py megatron_bert_345m_v0_1_uncased.zip'}}),Dt=new z({props:{code:"python3 $PATH_TO_TRANSFORMERS/models/megatron_bert/convert_megatron_bert_checkpoint.py megatron_bert_345m_v0_1_cased.zip",highlighted:'python3 <span class="hljs-variable">$PATH_TO_TRANSFORMERS</span>/models/megatron_bert/convert_megatron_bert_checkpoint.py megatron_bert_345m_v0_1_cased.zip'}}),Ht=new te({}),Ut=new P({props:{name:"class transformers.MegatronBertConfig",anchor:"transformers.MegatronBertConfig",parameters:[{name:"vocab_size",val:" = 29056"},{name:"hidden_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 16"},{name:"intermediate_size",val:" = 4096"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 29056) &#x2014;
Vocabulary size of the MEGATRON_BERT model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertModel">MegatronBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.MegatronBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.MegatronBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.MegatronBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.MegatronBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.MegatronBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.MegatronBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.MegatronBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.MegatronBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MegatronBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertModel">MegatronBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.MegatronBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.MegatronBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.MegatronBertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.MegatronBertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/configuration_megatron_bert.py#L28"}}),Ve=new E({props:{anchor:"transformers.MegatronBertConfig.example",$$slots:{default:[fh]},$$scope:{ctx:B}}}),Vt=new te({}),Gt=new P({props:{name:"class transformers.MegatronBertModel",anchor:"transformers.MegatronBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MegatronBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L828"}}),eo=new P({props:{name:"forward",anchor:"transformers.MegatronBertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MegatronBertModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.MegatronBertModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MegatronBertModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L867",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
`}}),Je=new We({props:{$$slots:{default:[gh]},$$scope:{ctx:B}}}),Ke=new E({props:{anchor:"transformers.MegatronBertModel.forward.example",$$slots:{default:[_h]},$$scope:{ctx:B}}}),to=new te({}),oo=new P({props:{name:"class transformers.MegatronBertForMaskedLM",anchor:"transformers.MegatronBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1255"}}),io=new P({props:{name:"forward",anchor:"transformers.MegatronBertForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1281",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
`}}),Xe=new We({props:{$$slots:{default:[bh]},$$scope:{ctx:B}}}),Ze=new E({props:{anchor:"transformers.MegatronBertForMaskedLM.forward.example",$$slots:{default:[kh]},$$scope:{ctx:B}}}),et=new E({props:{anchor:"transformers.MegatronBertForMaskedLM.forward.example-2",$$slots:{default:[vh]},$$scope:{ctx:B}}}),lo=new te({}),co=new P({props:{name:"class transformers.MegatronBertForCausalLM",anchor:"transformers.MegatronBertForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1109"}}),fo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MegatronBertForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.MegatronBertForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.MegatronBertForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MegatronBertForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1132",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
`}}),ot=new We({props:{$$slots:{default:[Mh]},$$scope:{ctx:B}}}),nt=new E({props:{anchor:"transformers.MegatronBertForCausalLM.forward.example",$$slots:{default:[wh]},$$scope:{ctx:B}}}),go=new te({}),_o=new P({props:{name:"class transformers.MegatronBertForNextSentencePrediction",anchor:"transformers.MegatronBertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1365"}}),wo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1378",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
`}}),rt=new We({props:{$$slots:{default:[$h]},$$scope:{ctx:B}}}),at=new E({props:{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.example",$$slots:{default:[Th]},$$scope:{ctx:B}}}),$o=new te({}),To=new P({props:{name:"class transformers.MegatronBertForPreTraining",anchor:"transformers.MegatronBertForPreTraining",parameters:[{name:"config",val:""},{name:"add_binary_head",val:" = True"}],parametersDescription:[{anchor:"transformers.MegatronBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1005"}}),zo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForPreTraining.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"next_sentence_label",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.MegatronBertForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"},{anchor:"transformers.MegatronBertForPreTraining.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1021",returnDescription:`
<p>A <code>transformers.models.megatron_bert.modeling_megatron_bert.MegatronBertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
<p><code>transformers.models.megatron_bert.modeling_megatron_bert.MegatronBertForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),lt=new We({props:{$$slots:{default:[yh]},$$scope:{ctx:B}}}),dt=new E({props:{anchor:"transformers.MegatronBertForPreTraining.forward.example",$$slots:{default:[Bh]},$$scope:{ctx:B}}}),xo=new te({}),Po=new P({props:{name:"class transformers.MegatronBertForSequenceClassification",anchor:"transformers.MegatronBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1471"}}),jo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1483",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
`}}),pt=new We({props:{$$slots:{default:[Fh]},$$scope:{ctx:B}}}),mt=new E({props:{anchor:"transformers.MegatronBertForSequenceClassification.forward.example",$$slots:{default:[zh]},$$scope:{ctx:B}}}),ht=new E({props:{anchor:"transformers.MegatronBertForSequenceClassification.forward.example-2",$$slots:{default:[xh]},$$scope:{ctx:B}}}),ut=new E({props:{anchor:"transformers.MegatronBertForSequenceClassification.forward.example-3",$$slots:{default:[Ph]},$$scope:{ctx:B}}}),ft=new E({props:{anchor:"transformers.MegatronBertForSequenceClassification.forward.example-4",$$slots:{default:[qh]},$$scope:{ctx:B}}}),Ao=new te({}),So=new P({props:{name:"class transformers.MegatronBertForMultipleChoice",anchor:"transformers.MegatronBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1569"}}),Oo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1580",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
`}}),_t=new We({props:{$$slots:{default:[Ch]},$$scope:{ctx:B}}}),bt=new E({props:{anchor:"transformers.MegatronBertForMultipleChoice.forward.example",$$slots:{default:[Eh]},$$scope:{ctx:B}}}),Do=new te({}),Wo=new P({props:{name:"class transformers.MegatronBertForTokenClassification",anchor:"transformers.MegatronBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1663"}}),Qo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1678",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
`}}),vt=new We({props:{$$slots:{default:[jh]},$$scope:{ctx:B}}}),Mt=new E({props:{anchor:"transformers.MegatronBertForTokenClassification.forward.example",$$slots:{default:[Ah]},$$scope:{ctx:B}}}),wt=new E({props:{anchor:"transformers.MegatronBertForTokenClassification.forward.example-2",$$slots:{default:[Sh]},$$scope:{ctx:B}}}),Vo=new te({}),Go=new P({props:{name:"class transformers.MegatronBertForQuestionAnswering",anchor:"transformers.MegatronBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1745"}}),Xo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1759",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
`}}),Tt=new We({props:{$$slots:{default:[Nh]},$$scope:{ctx:B}}}),yt=new E({props:{anchor:"transformers.MegatronBertForQuestionAnswering.forward.example",$$slots:{default:[Lh]},$$scope:{ctx:B}}}),Bt=new E({props:{anchor:"transformers.MegatronBertForQuestionAnswering.forward.example-2",$$slots:{default:[Ih]},$$scope:{ctx:B}}}),{c(){d=a("meta"),_=h(),c=a("h1"),m=a("a"),k=a("span"),v(n.$$.fragment),p=h(),F=a("span"),Ta=s("MegatronBERT"),lr=h(),ge=a("h2"),Re=a("a"),Qn=a("span"),v(Et.$$.fragment),ya=h(),Vn=a("span"),Ba=s("Overview"),dr=h(),He=a("p"),Fa=s("The MegatronBERT model was proposed in "),jt=a("a"),za=s(`Megatron-LM: Training Multi-Billion Parameter Language Models Using Model
Parallelism`),xa=s(` by Mohammad Shoeybi, Mostofa Patwary, Raul Puri, Patrick LeGresley,
Jared Casper and Bryan Catanzaro.`),cr=h(),nn=a("p"),Pa=s("The abstract from the paper is the following:"),pr=h(),sn=a("p"),Gn=a("em"),qa=s(`Recent work in language modeling demonstrates that training large transformer models advances the state of the art in
Natural Language Processing applications. However, very large models can be quite difficult to train due to memory
constraints. In this work, we present our techniques for training very large transformer models and implement a simple,
efficient intra-layer model parallel approach that enables training transformer models with billions of parameters. Our
approach does not require a new compiler or library changes, is orthogonal and complimentary to pipeline model
parallelism, and can be fully implemented with the insertion of a few communication operations in native PyTorch. We
illustrate this approach by converging transformer based models up to 8.3 billion parameters using 512 GPUs. We sustain
15.1 PetaFLOPs across the entire application with 76% scaling efficiency when compared to a strong single GPU baseline
that sustains 39 TeraFLOPs, which is 30% of peak FLOPs. To demonstrate that large language models can further advance
the state of the art (SOTA), we train an 8.3 billion parameter transformer language model similar to GPT-2 and a 3.9
billion parameter model similar to BERT. We show that careful attention to the placement of layer normalization in
BERT-like models is critical to achieving increased performance as the model size grows. Using the GPT-2 model we
achieve SOTA results on the WikiText103 (10.8 compared to SOTA perplexity of 15.8) and LAMBADA (66.5% compared to SOTA
accuracy of 63.2%) datasets. Our BERT model achieves SOTA results on the RACE dataset (90.9% compared to SOTA accuracy
of 89.4%).`),mr=h(),rn=a("p"),Ca=s("Tips:"),hr=h(),Ue=a("p"),Ea=s("We have provided pretrained "),At=a("a"),ja=s("BERT-345M"),Aa=s(` checkpoints
for use to evaluate or finetuning downstream tasks.`),ur=h(),oe=a("p"),Sa=s("To access these checkpoints, first "),St=a("a"),Na=s("sign up"),La=s(` for and setup the NVIDIA GPU Cloud (NGC)
Registry CLI. Further documentation for downloading models can be found in the `),Nt=a("a"),Ia=s("NGC documentation"),Oa=s("."),fr=h(),an=a("p"),Da=s("Alternatively, you can directly download the checkpoints using:"),gr=h(),ln=a("p"),Wa=s("BERT-345M-uncased:"),_r=h(),v(Lt.$$.fragment),br=h(),dn=a("p"),Ra=s("BERT-345M-cased:"),kr=h(),v(It.$$.fragment),vr=h(),cn=a("p"),Ha=s(`Once you have obtained the checkpoints from NVIDIA GPU Cloud (NGC), you have to convert them to a format that will
easily be loaded by Hugging Face Transformers and our port of the BERT code.`),Mr=h(),ne=a("p"),Ua=s("The following commands allow you to do the conversion. We assume that the folder "),Jn=a("code"),Qa=s("models/megatron_bert"),Va=s(` contains
`),Kn=a("code"),Ga=s("megatron_bert_345m_v0_1_{cased, uncased}.zip"),Ja=s(" and that the commands are run from inside that folder:"),wr=h(),v(Ot.$$.fragment),$r=h(),v(Dt.$$.fragment),Tr=h(),se=a("p"),Ka=s("This model was contributed by "),Wt=a("a"),Ya=s("jdemouth"),Xa=s(". The original code can be found "),Rt=a("a"),Za=s("here"),ei=s(`. That repository contains a multi-GPU and multi-node implementation of the
Megatron Language models. In particular, it contains a hybrid model parallel approach using \u201Ctensor parallel\u201D and
\u201Cpipeline parallel\u201D techniques.`),yr=h(),_e=a("h2"),Qe=a("a"),Yn=a("span"),v(Ht.$$.fragment),ti=h(),Xn=a("span"),oi=s("MegatronBertConfig"),Br=h(),J=a("div"),v(Ut.$$.fragment),ni=h(),be=a("p"),si=s("This is the configuration class to store the configuration of a "),pn=a("a"),ri=s("MegatronBertModel"),ai=s(`. It is used to instantiate a
MEGATRON_BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MEGATRON_BERT
`),Qt=a("a"),ii=s("nvidia/megatron-bert-uncased-345m"),li=s(" architecture."),di=h(),ke=a("p"),ci=s("Configuration objects inherit from "),mn=a("a"),pi=s("PretrainedConfig"),mi=s(` and can be used to control the model outputs. Read the
documentation from `),hn=a("a"),hi=s("PretrainedConfig"),ui=s(" for more information."),fi=h(),v(Ve.$$.fragment),Fr=h(),ve=a("h2"),Ge=a("a"),Zn=a("span"),v(Vt.$$.fragment),gi=h(),es=a("span"),_i=s("MegatronBertModel"),zr=h(),x=a("div"),v(Gt.$$.fragment),bi=h(),ts=a("p"),ki=s("The bare MegatronBert Model transformer outputting raw hidden-states without any specific head on top."),vi=h(),Jt=a("p"),Mi=s("This model inherits from "),un=a("a"),wi=s("PreTrainedModel"),$i=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ti=h(),Kt=a("p"),yi=s("This model is also a PyTorch "),Yt=a("a"),Bi=s("torch.nn.Module"),Fi=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zi=h(),Xt=a("p"),xi=s(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Zt=a("a"),Pi=s(`Attention is
all you need`),qi=s(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ci=h(),C=a("p"),Ei=s("To behave as an decoder the model needs to be initialized with the "),os=a("code"),ji=s("is_decoder"),Ai=s(` argument of the configuration set
to `),ns=a("code"),Si=s("True"),Ni=s(". To be used in a Seq2Seq model, the model needs to initialized with both "),ss=a("code"),Li=s("is_decoder"),Ii=s(` argument and
`),rs=a("code"),Oi=s("add_cross_attention"),Di=s(" set to "),as=a("code"),Wi=s("True"),Ri=s("; an "),is=a("code"),Hi=s("encoder_hidden_states"),Ui=s(" is then expected as an input to the forward pass."),Qi=h(),K=a("div"),v(eo.$$.fragment),Vi=h(),Me=a("p"),Gi=s("The "),fn=a("a"),Ji=s("MegatronBertModel"),Ki=s(" forward method, overrides the "),ls=a("code"),Yi=s("__call__"),Xi=s(" special method."),Zi=h(),v(Je.$$.fragment),el=h(),v(Ke.$$.fragment),xr=h(),we=a("h2"),Ye=a("a"),ds=a("span"),v(to.$$.fragment),tl=h(),cs=a("span"),ol=s("MegatronBertForMaskedLM"),Pr=h(),A=a("div"),v(oo.$$.fragment),nl=h(),no=a("p"),sl=s("MegatronBert Model with a "),ps=a("code"),rl=s("language modeling"),al=s(" head on top."),il=h(),so=a("p"),ll=s("This model inherits from "),gn=a("a"),dl=s("PreTrainedModel"),cl=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pl=h(),ro=a("p"),ml=s("This model is also a PyTorch "),ao=a("a"),hl=s("torch.nn.Module"),ul=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fl=h(),R=a("div"),v(io.$$.fragment),gl=h(),$e=a("p"),_l=s("The "),_n=a("a"),bl=s("MegatronBertForMaskedLM"),kl=s(" forward method, overrides the "),ms=a("code"),vl=s("__call__"),Ml=s(" special method."),wl=h(),v(Xe.$$.fragment),$l=h(),v(Ze.$$.fragment),Tl=h(),v(et.$$.fragment),qr=h(),Te=a("h2"),tt=a("a"),hs=a("span"),v(lo.$$.fragment),yl=h(),us=a("span"),Bl=s("MegatronBertForCausalLM"),Cr=h(),S=a("div"),v(co.$$.fragment),Fl=h(),po=a("p"),zl=s("MegatronBert Model with a "),fs=a("code"),xl=s("language modeling"),Pl=s(" head on top for CLM fine-tuning."),ql=h(),mo=a("p"),Cl=s("This model inherits from "),bn=a("a"),El=s("PreTrainedModel"),jl=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Al=h(),ho=a("p"),Sl=s("This model is also a PyTorch "),uo=a("a"),Nl=s("torch.nn.Module"),Ll=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Il=h(),Y=a("div"),v(fo.$$.fragment),Ol=h(),ye=a("p"),Dl=s("The "),kn=a("a"),Wl=s("MegatronBertForCausalLM"),Rl=s(" forward method, overrides the "),gs=a("code"),Hl=s("__call__"),Ul=s(" special method."),Ql=h(),v(ot.$$.fragment),Vl=h(),v(nt.$$.fragment),Er=h(),Be=a("h2"),st=a("a"),_s=a("span"),v(go.$$.fragment),Gl=h(),bs=a("span"),Jl=s("MegatronBertForNextSentencePrediction"),jr=h(),N=a("div"),v(_o.$$.fragment),Kl=h(),bo=a("p"),Yl=s("MegatronBert Model with a "),ks=a("code"),Xl=s("next sentence prediction (classification)"),Zl=s(" head on top."),ed=h(),ko=a("p"),td=s("This model inherits from "),vn=a("a"),od=s("PreTrainedModel"),nd=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sd=h(),vo=a("p"),rd=s("This model is also a PyTorch "),Mo=a("a"),ad=s("torch.nn.Module"),id=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ld=h(),X=a("div"),v(wo.$$.fragment),dd=h(),Fe=a("p"),cd=s("The "),Mn=a("a"),pd=s("MegatronBertForNextSentencePrediction"),md=s(" forward method, overrides the "),vs=a("code"),hd=s("__call__"),ud=s(" special method."),fd=h(),v(rt.$$.fragment),gd=h(),v(at.$$.fragment),Ar=h(),ze=a("h2"),it=a("a"),Ms=a("span"),v($o.$$.fragment),_d=h(),ws=a("span"),bd=s("MegatronBertForPreTraining"),Sr=h(),L=a("div"),v(To.$$.fragment),kd=h(),xe=a("p"),vd=s("MegatronBert Model with two heads on top as done during the pretraining: a "),$s=a("code"),Md=s("masked language modeling"),wd=s(` head and a
`),Ts=a("code"),$d=s("next sentence prediction (classification)"),Td=s(" head."),yd=h(),yo=a("p"),Bd=s("This model inherits from "),wn=a("a"),Fd=s("PreTrainedModel"),zd=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd=h(),Bo=a("p"),Pd=s("This model is also a PyTorch "),Fo=a("a"),qd=s("torch.nn.Module"),Cd=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ed=h(),Z=a("div"),v(zo.$$.fragment),jd=h(),Pe=a("p"),Ad=s("The "),$n=a("a"),Sd=s("MegatronBertForPreTraining"),Nd=s(" forward method, overrides the "),ys=a("code"),Ld=s("__call__"),Id=s(" special method."),Od=h(),v(lt.$$.fragment),Dd=h(),v(dt.$$.fragment),Nr=h(),qe=a("h2"),ct=a("a"),Bs=a("span"),v(xo.$$.fragment),Wd=h(),Fs=a("span"),Rd=s("MegatronBertForSequenceClassification"),Lr=h(),I=a("div"),v(Po.$$.fragment),Hd=h(),zs=a("p"),Ud=s(`MegatronBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Qd=h(),qo=a("p"),Vd=s("This model inherits from "),Tn=a("a"),Gd=s("PreTrainedModel"),Jd=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kd=h(),Co=a("p"),Yd=s("This model is also a PyTorch "),Eo=a("a"),Xd=s("torch.nn.Module"),Zd=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ec=h(),q=a("div"),v(jo.$$.fragment),tc=h(),Ce=a("p"),oc=s("The "),yn=a("a"),nc=s("MegatronBertForSequenceClassification"),sc=s(" forward method, overrides the "),xs=a("code"),rc=s("__call__"),ac=s(" special method."),ic=h(),v(pt.$$.fragment),lc=h(),v(mt.$$.fragment),dc=h(),v(ht.$$.fragment),cc=h(),v(ut.$$.fragment),pc=h(),v(ft.$$.fragment),Ir=h(),Ee=a("h2"),gt=a("a"),Ps=a("span"),v(Ao.$$.fragment),mc=h(),qs=a("span"),hc=s("MegatronBertForMultipleChoice"),Or=h(),O=a("div"),v(So.$$.fragment),uc=h(),Cs=a("p"),fc=s(`MegatronBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output
and a softmax) e.g. for RocStories/SWAG tasks.`),gc=h(),No=a("p"),_c=s("This model inherits from "),Bn=a("a"),bc=s("PreTrainedModel"),kc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vc=h(),Lo=a("p"),Mc=s("This model is also a PyTorch "),Io=a("a"),wc=s("torch.nn.Module"),$c=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc=h(),ee=a("div"),v(Oo.$$.fragment),yc=h(),je=a("p"),Bc=s("The "),Fn=a("a"),Fc=s("MegatronBertForMultipleChoice"),zc=s(" forward method, overrides the "),Es=a("code"),xc=s("__call__"),Pc=s(" special method."),qc=h(),v(_t.$$.fragment),Cc=h(),v(bt.$$.fragment),Dr=h(),Ae=a("h2"),kt=a("a"),js=a("span"),v(Do.$$.fragment),Ec=h(),As=a("span"),jc=s("MegatronBertForTokenClassification"),Wr=h(),D=a("div"),v(Wo.$$.fragment),Ac=h(),Ss=a("p"),Sc=s(`MegatronBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Nc=h(),Ro=a("p"),Lc=s("This model inherits from "),zn=a("a"),Ic=s("PreTrainedModel"),Oc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dc=h(),Ho=a("p"),Wc=s("This model is also a PyTorch "),Uo=a("a"),Rc=s("torch.nn.Module"),Hc=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uc=h(),H=a("div"),v(Qo.$$.fragment),Qc=h(),Se=a("p"),Vc=s("The "),xn=a("a"),Gc=s("MegatronBertForTokenClassification"),Jc=s(" forward method, overrides the "),Ns=a("code"),Kc=s("__call__"),Yc=s(" special method."),Xc=h(),v(vt.$$.fragment),Zc=h(),v(Mt.$$.fragment),ep=h(),v(wt.$$.fragment),Rr=h(),Ne=a("h2"),$t=a("a"),Ls=a("span"),v(Vo.$$.fragment),tp=h(),Is=a("span"),op=s("MegatronBertForQuestionAnswering"),Hr=h(),W=a("div"),v(Go.$$.fragment),np=h(),Le=a("p"),sp=s(`MegatronBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Os=a("code"),rp=s("span start logits"),ap=s(" and "),Ds=a("code"),ip=s("span end logits"),lp=s(")."),dp=h(),Jo=a("p"),cp=s("This model inherits from "),Pn=a("a"),pp=s("PreTrainedModel"),mp=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hp=h(),Ko=a("p"),up=s("This model is also a PyTorch "),Yo=a("a"),fp=s("torch.nn.Module"),gp=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_p=h(),U=a("div"),v(Xo.$$.fragment),bp=h(),Ie=a("p"),kp=s("The "),qn=a("a"),vp=s("MegatronBertForQuestionAnswering"),Mp=s(" forward method, overrides the "),Ws=a("code"),wp=s("__call__"),$p=s(" special method."),Tp=h(),v(Tt.$$.fragment),yp=h(),v(yt.$$.fragment),Bp=h(),v(Bt.$$.fragment),this.h()},l(t){const f=hh('[data-svelte="svelte-1phssyn"]',document.head);d=i(f,"META",{name:!0,content:!0}),f.forEach(o),_=u(t),c=i(t,"H1",{class:!0});var Zo=l(c);m=i(Zo,"A",{id:!0,class:!0,href:!0});var Rs=l(m);k=i(Rs,"SPAN",{});var Hs=l(k);M(n.$$.fragment,Hs),Hs.forEach(o),Rs.forEach(o),p=u(Zo),F=i(Zo,"SPAN",{});var Us=l(F);Ta=r(Us,"MegatronBERT"),Us.forEach(o),Zo.forEach(o),lr=u(t),ge=i(t,"H2",{class:!0});var en=l(ge);Re=i(en,"A",{id:!0,class:!0,href:!0});var Qs=l(Re);Qn=i(Qs,"SPAN",{});var Vs=l(Qn);M(Et.$$.fragment,Vs),Vs.forEach(o),Qs.forEach(o),ya=u(en),Vn=i(en,"SPAN",{});var Gs=l(Vn);Ba=r(Gs,"Overview"),Gs.forEach(o),en.forEach(o),dr=u(t),He=i(t,"P",{});var tn=l(He);Fa=r(tn,"The MegatronBERT model was proposed in "),jt=i(tn,"A",{href:!0,rel:!0});var Js=l(jt);za=r(Js,`Megatron-LM: Training Multi-Billion Parameter Language Models Using Model
Parallelism`),Js.forEach(o),xa=r(tn,` by Mohammad Shoeybi, Mostofa Patwary, Raul Puri, Patrick LeGresley,
Jared Casper and Bryan Catanzaro.`),tn.forEach(o),cr=u(t),nn=i(t,"P",{});var Ks=l(nn);Pa=r(Ks,"The abstract from the paper is the following:"),Ks.forEach(o),pr=u(t),sn=i(t,"P",{});var Ys=l(sn);Gn=i(Ys,"EM",{});var Xs=l(Gn);qa=r(Xs,`Recent work in language modeling demonstrates that training large transformer models advances the state of the art in
Natural Language Processing applications. However, very large models can be quite difficult to train due to memory
constraints. In this work, we present our techniques for training very large transformer models and implement a simple,
efficient intra-layer model parallel approach that enables training transformer models with billions of parameters. Our
approach does not require a new compiler or library changes, is orthogonal and complimentary to pipeline model
parallelism, and can be fully implemented with the insertion of a few communication operations in native PyTorch. We
illustrate this approach by converging transformer based models up to 8.3 billion parameters using 512 GPUs. We sustain
15.1 PetaFLOPs across the entire application with 76% scaling efficiency when compared to a strong single GPU baseline
that sustains 39 TeraFLOPs, which is 30% of peak FLOPs. To demonstrate that large language models can further advance
the state of the art (SOTA), we train an 8.3 billion parameter transformer language model similar to GPT-2 and a 3.9
billion parameter model similar to BERT. We show that careful attention to the placement of layer normalization in
BERT-like models is critical to achieving increased performance as the model size grows. Using the GPT-2 model we
achieve SOTA results on the WikiText103 (10.8 compared to SOTA perplexity of 15.8) and LAMBADA (66.5% compared to SOTA
accuracy of 63.2%) datasets. Our BERT model achieves SOTA results on the RACE dataset (90.9% compared to SOTA accuracy
of 89.4%).`),Xs.forEach(o),Ys.forEach(o),mr=u(t),rn=i(t,"P",{});var Zs=l(rn);Ca=r(Zs,"Tips:"),Zs.forEach(o),hr=u(t),Ue=i(t,"P",{});var on=l(Ue);Ea=r(on,"We have provided pretrained "),At=i(on,"A",{href:!0,rel:!0});var er=l(At);ja=r(er,"BERT-345M"),er.forEach(o),Aa=r(on,` checkpoints
for use to evaluate or finetuning downstream tasks.`),on.forEach(o),ur=u(t),oe=i(t,"P",{});var Oe=l(oe);Sa=r(Oe,"To access these checkpoints, first "),St=i(Oe,"A",{href:!0,rel:!0});var tr=l(St);Na=r(tr,"sign up"),tr.forEach(o),La=r(Oe,` for and setup the NVIDIA GPU Cloud (NGC)
Registry CLI. Further documentation for downloading models can be found in the `),Nt=i(Oe,"A",{href:!0,rel:!0});var or=l(Nt);Ia=r(or,"NGC documentation"),or.forEach(o),Oa=r(Oe,"."),Oe.forEach(o),fr=u(t),an=i(t,"P",{});var nr=l(an);Da=r(nr,"Alternatively, you can directly download the checkpoints using:"),nr.forEach(o),gr=u(t),ln=i(t,"P",{});var sr=l(ln);Wa=r(sr,"BERT-345M-uncased:"),sr.forEach(o),_r=u(t),M(Lt.$$.fragment,t),br=u(t),dn=i(t,"P",{});var rr=l(dn);Ra=r(rr,"BERT-345M-cased:"),rr.forEach(o),kr=u(t),M(It.$$.fragment,t),vr=u(t),cn=i(t,"P",{});var ar=l(cn);Ha=r(ar,`Once you have obtained the checkpoints from NVIDIA GPU Cloud (NGC), you have to convert them to a format that will
easily be loaded by Hugging Face Transformers and our port of the BERT code.`),ar.forEach(o),Mr=u(t),ne=i(t,"P",{});var De=l(ne);Ua=r(De,"The following commands allow you to do the conversion. We assume that the folder "),Jn=i(De,"CODE",{});var ir=l(Jn);Qa=r(ir,"models/megatron_bert"),ir.forEach(o),Va=r(De,` contains
`),Kn=i(De,"CODE",{});var Fp=l(Kn);Ga=r(Fp,"megatron_bert_345m_v0_1_{cased, uncased}.zip"),Fp.forEach(o),Ja=r(De," and that the commands are run from inside that folder:"),De.forEach(o),wr=u(t),M(Ot.$$.fragment,t),$r=u(t),M(Dt.$$.fragment,t),Tr=u(t),se=i(t,"P",{});var Cn=l(se);Ka=r(Cn,"This model was contributed by "),Wt=i(Cn,"A",{href:!0,rel:!0});var zp=l(Wt);Ya=r(zp,"jdemouth"),zp.forEach(o),Xa=r(Cn,". The original code can be found "),Rt=i(Cn,"A",{href:!0,rel:!0});var xp=l(Rt);Za=r(xp,"here"),xp.forEach(o),ei=r(Cn,`. That repository contains a multi-GPU and multi-node implementation of the
Megatron Language models. In particular, it contains a hybrid model parallel approach using \u201Ctensor parallel\u201D and
\u201Cpipeline parallel\u201D techniques.`),Cn.forEach(o),yr=u(t),_e=i(t,"H2",{class:!0});var Qr=l(_e);Qe=i(Qr,"A",{id:!0,class:!0,href:!0});var Pp=l(Qe);Yn=i(Pp,"SPAN",{});var qp=l(Yn);M(Ht.$$.fragment,qp),qp.forEach(o),Pp.forEach(o),ti=u(Qr),Xn=i(Qr,"SPAN",{});var Cp=l(Xn);oi=r(Cp,"MegatronBertConfig"),Cp.forEach(o),Qr.forEach(o),Br=u(t),J=i(t,"DIV",{class:!0});var Ft=l(J);M(Ut.$$.fragment,Ft),ni=u(Ft),be=i(Ft,"P",{});var En=l(be);si=r(En,"This is the configuration class to store the configuration of a "),pn=i(En,"A",{href:!0});var Ep=l(pn);ri=r(Ep,"MegatronBertModel"),Ep.forEach(o),ai=r(En,`. It is used to instantiate a
MEGATRON_BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MEGATRON_BERT
`),Qt=i(En,"A",{href:!0,rel:!0});var jp=l(Qt);ii=r(jp,"nvidia/megatron-bert-uncased-345m"),jp.forEach(o),li=r(En," architecture."),En.forEach(o),di=u(Ft),ke=i(Ft,"P",{});var jn=l(ke);ci=r(jn,"Configuration objects inherit from "),mn=i(jn,"A",{href:!0});var Ap=l(mn);pi=r(Ap,"PretrainedConfig"),Ap.forEach(o),mi=r(jn,` and can be used to control the model outputs. Read the
documentation from `),hn=i(jn,"A",{href:!0});var Sp=l(hn);hi=r(Sp,"PretrainedConfig"),Sp.forEach(o),ui=r(jn," for more information."),jn.forEach(o),fi=u(Ft),M(Ve.$$.fragment,Ft),Ft.forEach(o),Fr=u(t),ve=i(t,"H2",{class:!0});var Vr=l(ve);Ge=i(Vr,"A",{id:!0,class:!0,href:!0});var Np=l(Ge);Zn=i(Np,"SPAN",{});var Lp=l(Zn);M(Vt.$$.fragment,Lp),Lp.forEach(o),Np.forEach(o),gi=u(Vr),es=i(Vr,"SPAN",{});var Ip=l(es);_i=r(Ip,"MegatronBertModel"),Ip.forEach(o),Vr.forEach(o),zr=u(t),x=i(t,"DIV",{class:!0});var Q=l(x);M(Gt.$$.fragment,Q),bi=u(Q),ts=i(Q,"P",{});var Op=l(ts);ki=r(Op,"The bare MegatronBert Model transformer outputting raw hidden-states without any specific head on top."),Op.forEach(o),vi=u(Q),Jt=i(Q,"P",{});var Gr=l(Jt);Mi=r(Gr,"This model inherits from "),un=i(Gr,"A",{href:!0});var Dp=l(un);wi=r(Dp,"PreTrainedModel"),Dp.forEach(o),$i=r(Gr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gr.forEach(o),Ti=u(Q),Kt=i(Q,"P",{});var Jr=l(Kt);yi=r(Jr,"This model is also a PyTorch "),Yt=i(Jr,"A",{href:!0,rel:!0});var Wp=l(Yt);Bi=r(Wp,"torch.nn.Module"),Wp.forEach(o),Fi=r(Jr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr.forEach(o),zi=u(Q),Xt=i(Q,"P",{});var Kr=l(Xt);xi=r(Kr,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Zt=i(Kr,"A",{href:!0,rel:!0});var Rp=l(Zt);Pi=r(Rp,`Attention is
all you need`),Rp.forEach(o),qi=r(Kr,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Kr.forEach(o),Ci=u(Q),C=i(Q,"P",{});var V=l(C);Ei=r(V,"To behave as an decoder the model needs to be initialized with the "),os=i(V,"CODE",{});var Hp=l(os);ji=r(Hp,"is_decoder"),Hp.forEach(o),Ai=r(V,` argument of the configuration set
to `),ns=i(V,"CODE",{});var Up=l(ns);Si=r(Up,"True"),Up.forEach(o),Ni=r(V,". To be used in a Seq2Seq model, the model needs to initialized with both "),ss=i(V,"CODE",{});var Qp=l(ss);Li=r(Qp,"is_decoder"),Qp.forEach(o),Ii=r(V,` argument and
`),rs=i(V,"CODE",{});var Vp=l(rs);Oi=r(Vp,"add_cross_attention"),Vp.forEach(o),Di=r(V," set to "),as=i(V,"CODE",{});var Gp=l(as);Wi=r(Gp,"True"),Gp.forEach(o),Ri=r(V,"; an "),is=i(V,"CODE",{});var Jp=l(is);Hi=r(Jp,"encoder_hidden_states"),Jp.forEach(o),Ui=r(V," is then expected as an input to the forward pass."),V.forEach(o),Qi=u(Q),K=i(Q,"DIV",{class:!0});var zt=l(K);M(eo.$$.fragment,zt),Vi=u(zt),Me=i(zt,"P",{});var An=l(Me);Gi=r(An,"The "),fn=i(An,"A",{href:!0});var Kp=l(fn);Ji=r(Kp,"MegatronBertModel"),Kp.forEach(o),Ki=r(An," forward method, overrides the "),ls=i(An,"CODE",{});var Yp=l(ls);Yi=r(Yp,"__call__"),Yp.forEach(o),Xi=r(An," special method."),An.forEach(o),Zi=u(zt),M(Je.$$.fragment,zt),el=u(zt),M(Ke.$$.fragment,zt),zt.forEach(o),Q.forEach(o),xr=u(t),we=i(t,"H2",{class:!0});var Yr=l(we);Ye=i(Yr,"A",{id:!0,class:!0,href:!0});var Xp=l(Ye);ds=i(Xp,"SPAN",{});var Zp=l(ds);M(to.$$.fragment,Zp),Zp.forEach(o),Xp.forEach(o),tl=u(Yr),cs=i(Yr,"SPAN",{});var em=l(cs);ol=r(em,"MegatronBertForMaskedLM"),em.forEach(o),Yr.forEach(o),Pr=u(t),A=i(t,"DIV",{class:!0});var re=l(A);M(oo.$$.fragment,re),nl=u(re),no=i(re,"P",{});var Xr=l(no);sl=r(Xr,"MegatronBert Model with a "),ps=i(Xr,"CODE",{});var tm=l(ps);rl=r(tm,"language modeling"),tm.forEach(o),al=r(Xr," head on top."),Xr.forEach(o),il=u(re),so=i(re,"P",{});var Zr=l(so);ll=r(Zr,"This model inherits from "),gn=i(Zr,"A",{href:!0});var om=l(gn);dl=r(om,"PreTrainedModel"),om.forEach(o),cl=r(Zr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zr.forEach(o),pl=u(re),ro=i(re,"P",{});var ea=l(ro);ml=r(ea,"This model is also a PyTorch "),ao=i(ea,"A",{href:!0,rel:!0});var nm=l(ao);hl=r(nm,"torch.nn.Module"),nm.forEach(o),ul=r(ea,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ea.forEach(o),fl=u(re),R=i(re,"DIV",{class:!0});var ae=l(R);M(io.$$.fragment,ae),gl=u(ae),$e=i(ae,"P",{});var Sn=l($e);_l=r(Sn,"The "),_n=i(Sn,"A",{href:!0});var sm=l(_n);bl=r(sm,"MegatronBertForMaskedLM"),sm.forEach(o),kl=r(Sn," forward method, overrides the "),ms=i(Sn,"CODE",{});var rm=l(ms);vl=r(rm,"__call__"),rm.forEach(o),Ml=r(Sn," special method."),Sn.forEach(o),wl=u(ae),M(Xe.$$.fragment,ae),$l=u(ae),M(Ze.$$.fragment,ae),Tl=u(ae),M(et.$$.fragment,ae),ae.forEach(o),re.forEach(o),qr=u(t),Te=i(t,"H2",{class:!0});var ta=l(Te);tt=i(ta,"A",{id:!0,class:!0,href:!0});var am=l(tt);hs=i(am,"SPAN",{});var im=l(hs);M(lo.$$.fragment,im),im.forEach(o),am.forEach(o),yl=u(ta),us=i(ta,"SPAN",{});var lm=l(us);Bl=r(lm,"MegatronBertForCausalLM"),lm.forEach(o),ta.forEach(o),Cr=u(t),S=i(t,"DIV",{class:!0});var ie=l(S);M(co.$$.fragment,ie),Fl=u(ie),po=i(ie,"P",{});var oa=l(po);zl=r(oa,"MegatronBert Model with a "),fs=i(oa,"CODE",{});var dm=l(fs);xl=r(dm,"language modeling"),dm.forEach(o),Pl=r(oa," head on top for CLM fine-tuning."),oa.forEach(o),ql=u(ie),mo=i(ie,"P",{});var na=l(mo);Cl=r(na,"This model inherits from "),bn=i(na,"A",{href:!0});var cm=l(bn);El=r(cm,"PreTrainedModel"),cm.forEach(o),jl=r(na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),na.forEach(o),Al=u(ie),ho=i(ie,"P",{});var sa=l(ho);Sl=r(sa,"This model is also a PyTorch "),uo=i(sa,"A",{href:!0,rel:!0});var pm=l(uo);Nl=r(pm,"torch.nn.Module"),pm.forEach(o),Ll=r(sa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sa.forEach(o),Il=u(ie),Y=i(ie,"DIV",{class:!0});var xt=l(Y);M(fo.$$.fragment,xt),Ol=u(xt),ye=i(xt,"P",{});var Nn=l(ye);Dl=r(Nn,"The "),kn=i(Nn,"A",{href:!0});var mm=l(kn);Wl=r(mm,"MegatronBertForCausalLM"),mm.forEach(o),Rl=r(Nn," forward method, overrides the "),gs=i(Nn,"CODE",{});var hm=l(gs);Hl=r(hm,"__call__"),hm.forEach(o),Ul=r(Nn," special method."),Nn.forEach(o),Ql=u(xt),M(ot.$$.fragment,xt),Vl=u(xt),M(nt.$$.fragment,xt),xt.forEach(o),ie.forEach(o),Er=u(t),Be=i(t,"H2",{class:!0});var ra=l(Be);st=i(ra,"A",{id:!0,class:!0,href:!0});var um=l(st);_s=i(um,"SPAN",{});var fm=l(_s);M(go.$$.fragment,fm),fm.forEach(o),um.forEach(o),Gl=u(ra),bs=i(ra,"SPAN",{});var gm=l(bs);Jl=r(gm,"MegatronBertForNextSentencePrediction"),gm.forEach(o),ra.forEach(o),jr=u(t),N=i(t,"DIV",{class:!0});var le=l(N);M(_o.$$.fragment,le),Kl=u(le),bo=i(le,"P",{});var aa=l(bo);Yl=r(aa,"MegatronBert Model with a "),ks=i(aa,"CODE",{});var _m=l(ks);Xl=r(_m,"next sentence prediction (classification)"),_m.forEach(o),Zl=r(aa," head on top."),aa.forEach(o),ed=u(le),ko=i(le,"P",{});var ia=l(ko);td=r(ia,"This model inherits from "),vn=i(ia,"A",{href:!0});var bm=l(vn);od=r(bm,"PreTrainedModel"),bm.forEach(o),nd=r(ia,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ia.forEach(o),sd=u(le),vo=i(le,"P",{});var la=l(vo);rd=r(la,"This model is also a PyTorch "),Mo=i(la,"A",{href:!0,rel:!0});var km=l(Mo);ad=r(km,"torch.nn.Module"),km.forEach(o),id=r(la,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),la.forEach(o),ld=u(le),X=i(le,"DIV",{class:!0});var Pt=l(X);M(wo.$$.fragment,Pt),dd=u(Pt),Fe=i(Pt,"P",{});var Ln=l(Fe);cd=r(Ln,"The "),Mn=i(Ln,"A",{href:!0});var vm=l(Mn);pd=r(vm,"MegatronBertForNextSentencePrediction"),vm.forEach(o),md=r(Ln," forward method, overrides the "),vs=i(Ln,"CODE",{});var Mm=l(vs);hd=r(Mm,"__call__"),Mm.forEach(o),ud=r(Ln," special method."),Ln.forEach(o),fd=u(Pt),M(rt.$$.fragment,Pt),gd=u(Pt),M(at.$$.fragment,Pt),Pt.forEach(o),le.forEach(o),Ar=u(t),ze=i(t,"H2",{class:!0});var da=l(ze);it=i(da,"A",{id:!0,class:!0,href:!0});var wm=l(it);Ms=i(wm,"SPAN",{});var $m=l(Ms);M($o.$$.fragment,$m),$m.forEach(o),wm.forEach(o),_d=u(da),ws=i(da,"SPAN",{});var Tm=l(ws);bd=r(Tm,"MegatronBertForPreTraining"),Tm.forEach(o),da.forEach(o),Sr=u(t),L=i(t,"DIV",{class:!0});var de=l(L);M(To.$$.fragment,de),kd=u(de),xe=i(de,"P",{});var In=l(xe);vd=r(In,"MegatronBert Model with two heads on top as done during the pretraining: a "),$s=i(In,"CODE",{});var ym=l($s);Md=r(ym,"masked language modeling"),ym.forEach(o),wd=r(In,` head and a
`),Ts=i(In,"CODE",{});var Bm=l(Ts);$d=r(Bm,"next sentence prediction (classification)"),Bm.forEach(o),Td=r(In," head."),In.forEach(o),yd=u(de),yo=i(de,"P",{});var ca=l(yo);Bd=r(ca,"This model inherits from "),wn=i(ca,"A",{href:!0});var Fm=l(wn);Fd=r(Fm,"PreTrainedModel"),Fm.forEach(o),zd=r(ca,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ca.forEach(o),xd=u(de),Bo=i(de,"P",{});var pa=l(Bo);Pd=r(pa,"This model is also a PyTorch "),Fo=i(pa,"A",{href:!0,rel:!0});var zm=l(Fo);qd=r(zm,"torch.nn.Module"),zm.forEach(o),Cd=r(pa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pa.forEach(o),Ed=u(de),Z=i(de,"DIV",{class:!0});var qt=l(Z);M(zo.$$.fragment,qt),jd=u(qt),Pe=i(qt,"P",{});var On=l(Pe);Ad=r(On,"The "),$n=i(On,"A",{href:!0});var xm=l($n);Sd=r(xm,"MegatronBertForPreTraining"),xm.forEach(o),Nd=r(On," forward method, overrides the "),ys=i(On,"CODE",{});var Pm=l(ys);Ld=r(Pm,"__call__"),Pm.forEach(o),Id=r(On," special method."),On.forEach(o),Od=u(qt),M(lt.$$.fragment,qt),Dd=u(qt),M(dt.$$.fragment,qt),qt.forEach(o),de.forEach(o),Nr=u(t),qe=i(t,"H2",{class:!0});var ma=l(qe);ct=i(ma,"A",{id:!0,class:!0,href:!0});var qm=l(ct);Bs=i(qm,"SPAN",{});var Cm=l(Bs);M(xo.$$.fragment,Cm),Cm.forEach(o),qm.forEach(o),Wd=u(ma),Fs=i(ma,"SPAN",{});var Em=l(Fs);Rd=r(Em,"MegatronBertForSequenceClassification"),Em.forEach(o),ma.forEach(o),Lr=u(t),I=i(t,"DIV",{class:!0});var ce=l(I);M(Po.$$.fragment,ce),Hd=u(ce),zs=i(ce,"P",{});var jm=l(zs);Ud=r(jm,`MegatronBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),jm.forEach(o),Qd=u(ce),qo=i(ce,"P",{});var ha=l(qo);Vd=r(ha,"This model inherits from "),Tn=i(ha,"A",{href:!0});var Am=l(Tn);Gd=r(Am,"PreTrainedModel"),Am.forEach(o),Jd=r(ha,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ha.forEach(o),Kd=u(ce),Co=i(ce,"P",{});var ua=l(Co);Yd=r(ua,"This model is also a PyTorch "),Eo=i(ua,"A",{href:!0,rel:!0});var Sm=l(Eo);Xd=r(Sm,"torch.nn.Module"),Sm.forEach(o),Zd=r(ua,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ua.forEach(o),ec=u(ce),q=i(ce,"DIV",{class:!0});var G=l(q);M(jo.$$.fragment,G),tc=u(G),Ce=i(G,"P",{});var Dn=l(Ce);oc=r(Dn,"The "),yn=i(Dn,"A",{href:!0});var Nm=l(yn);nc=r(Nm,"MegatronBertForSequenceClassification"),Nm.forEach(o),sc=r(Dn," forward method, overrides the "),xs=i(Dn,"CODE",{});var Lm=l(xs);rc=r(Lm,"__call__"),Lm.forEach(o),ac=r(Dn," special method."),Dn.forEach(o),ic=u(G),M(pt.$$.fragment,G),lc=u(G),M(mt.$$.fragment,G),dc=u(G),M(ht.$$.fragment,G),cc=u(G),M(ut.$$.fragment,G),pc=u(G),M(ft.$$.fragment,G),G.forEach(o),ce.forEach(o),Ir=u(t),Ee=i(t,"H2",{class:!0});var fa=l(Ee);gt=i(fa,"A",{id:!0,class:!0,href:!0});var Im=l(gt);Ps=i(Im,"SPAN",{});var Om=l(Ps);M(Ao.$$.fragment,Om),Om.forEach(o),Im.forEach(o),mc=u(fa),qs=i(fa,"SPAN",{});var Dm=l(qs);hc=r(Dm,"MegatronBertForMultipleChoice"),Dm.forEach(o),fa.forEach(o),Or=u(t),O=i(t,"DIV",{class:!0});var pe=l(O);M(So.$$.fragment,pe),uc=u(pe),Cs=i(pe,"P",{});var Wm=l(Cs);fc=r(Wm,`MegatronBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output
and a softmax) e.g. for RocStories/SWAG tasks.`),Wm.forEach(o),gc=u(pe),No=i(pe,"P",{});var ga=l(No);_c=r(ga,"This model inherits from "),Bn=i(ga,"A",{href:!0});var Rm=l(Bn);bc=r(Rm,"PreTrainedModel"),Rm.forEach(o),kc=r(ga,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ga.forEach(o),vc=u(pe),Lo=i(pe,"P",{});var _a=l(Lo);Mc=r(_a,"This model is also a PyTorch "),Io=i(_a,"A",{href:!0,rel:!0});var Hm=l(Io);wc=r(Hm,"torch.nn.Module"),Hm.forEach(o),$c=r(_a,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_a.forEach(o),Tc=u(pe),ee=i(pe,"DIV",{class:!0});var Ct=l(ee);M(Oo.$$.fragment,Ct),yc=u(Ct),je=i(Ct,"P",{});var Wn=l(je);Bc=r(Wn,"The "),Fn=i(Wn,"A",{href:!0});var Um=l(Fn);Fc=r(Um,"MegatronBertForMultipleChoice"),Um.forEach(o),zc=r(Wn," forward method, overrides the "),Es=i(Wn,"CODE",{});var Qm=l(Es);xc=r(Qm,"__call__"),Qm.forEach(o),Pc=r(Wn," special method."),Wn.forEach(o),qc=u(Ct),M(_t.$$.fragment,Ct),Cc=u(Ct),M(bt.$$.fragment,Ct),Ct.forEach(o),pe.forEach(o),Dr=u(t),Ae=i(t,"H2",{class:!0});var ba=l(Ae);kt=i(ba,"A",{id:!0,class:!0,href:!0});var Vm=l(kt);js=i(Vm,"SPAN",{});var Gm=l(js);M(Do.$$.fragment,Gm),Gm.forEach(o),Vm.forEach(o),Ec=u(ba),As=i(ba,"SPAN",{});var Jm=l(As);jc=r(Jm,"MegatronBertForTokenClassification"),Jm.forEach(o),ba.forEach(o),Wr=u(t),D=i(t,"DIV",{class:!0});var me=l(D);M(Wo.$$.fragment,me),Ac=u(me),Ss=i(me,"P",{});var Km=l(Ss);Sc=r(Km,`MegatronBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Km.forEach(o),Nc=u(me),Ro=i(me,"P",{});var ka=l(Ro);Lc=r(ka,"This model inherits from "),zn=i(ka,"A",{href:!0});var Ym=l(zn);Ic=r(Ym,"PreTrainedModel"),Ym.forEach(o),Oc=r(ka,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ka.forEach(o),Dc=u(me),Ho=i(me,"P",{});var va=l(Ho);Wc=r(va,"This model is also a PyTorch "),Uo=i(va,"A",{href:!0,rel:!0});var Xm=l(Uo);Rc=r(Xm,"torch.nn.Module"),Xm.forEach(o),Hc=r(va,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),va.forEach(o),Uc=u(me),H=i(me,"DIV",{class:!0});var he=l(H);M(Qo.$$.fragment,he),Qc=u(he),Se=i(he,"P",{});var Rn=l(Se);Vc=r(Rn,"The "),xn=i(Rn,"A",{href:!0});var Zm=l(xn);Gc=r(Zm,"MegatronBertForTokenClassification"),Zm.forEach(o),Jc=r(Rn," forward method, overrides the "),Ns=i(Rn,"CODE",{});var eh=l(Ns);Kc=r(eh,"__call__"),eh.forEach(o),Yc=r(Rn," special method."),Rn.forEach(o),Xc=u(he),M(vt.$$.fragment,he),Zc=u(he),M(Mt.$$.fragment,he),ep=u(he),M(wt.$$.fragment,he),he.forEach(o),me.forEach(o),Rr=u(t),Ne=i(t,"H2",{class:!0});var Ma=l(Ne);$t=i(Ma,"A",{id:!0,class:!0,href:!0});var th=l($t);Ls=i(th,"SPAN",{});var oh=l(Ls);M(Vo.$$.fragment,oh),oh.forEach(o),th.forEach(o),tp=u(Ma),Is=i(Ma,"SPAN",{});var nh=l(Is);op=r(nh,"MegatronBertForQuestionAnswering"),nh.forEach(o),Ma.forEach(o),Hr=u(t),W=i(t,"DIV",{class:!0});var ue=l(W);M(Go.$$.fragment,ue),np=u(ue),Le=i(ue,"P",{});var Hn=l(Le);sp=r(Hn,`MegatronBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Os=i(Hn,"CODE",{});var sh=l(Os);rp=r(sh,"span start logits"),sh.forEach(o),ap=r(Hn," and "),Ds=i(Hn,"CODE",{});var rh=l(Ds);ip=r(rh,"span end logits"),rh.forEach(o),lp=r(Hn,")."),Hn.forEach(o),dp=u(ue),Jo=i(ue,"P",{});var wa=l(Jo);cp=r(wa,"This model inherits from "),Pn=i(wa,"A",{href:!0});var ah=l(Pn);pp=r(ah,"PreTrainedModel"),ah.forEach(o),mp=r(wa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wa.forEach(o),hp=u(ue),Ko=i(ue,"P",{});var $a=l(Ko);up=r($a,"This model is also a PyTorch "),Yo=i($a,"A",{href:!0,rel:!0});var ih=l(Yo);fp=r(ih,"torch.nn.Module"),ih.forEach(o),gp=r($a,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$a.forEach(o),_p=u(ue),U=i(ue,"DIV",{class:!0});var fe=l(U);M(Xo.$$.fragment,fe),bp=u(fe),Ie=i(fe,"P",{});var Un=l(Ie);kp=r(Un,"The "),qn=i(Un,"A",{href:!0});var lh=l(qn);vp=r(lh,"MegatronBertForQuestionAnswering"),lh.forEach(o),Mp=r(Un," forward method, overrides the "),Ws=i(Un,"CODE",{});var dh=l(Ws);wp=r(dh,"__call__"),dh.forEach(o),$p=r(Un," special method."),Un.forEach(o),Tp=u(fe),M(Tt.$$.fragment,fe),yp=u(fe),M(yt.$$.fragment,fe),Bp=u(fe),M(Bt.$$.fragment,fe),fe.forEach(o),ue.forEach(o),this.h()},h(){g(d,"name","hf:doc:metadata"),g(d,"content",JSON.stringify(Dh)),g(m,"id","megatronbert"),g(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(m,"href","#megatronbert"),g(c,"class","relative group"),g(Re,"id","overview"),g(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Re,"href","#overview"),g(ge,"class","relative group"),g(jt,"href","https://arxiv.org/abs/1909.08053"),g(jt,"rel","nofollow"),g(At,"href","https://ngc.nvidia.com/catalog/models/nvidia:megatron_bert_345m"),g(At,"rel","nofollow"),g(St,"href","https://ngc.nvidia.com/signup"),g(St,"rel","nofollow"),g(Nt,"href","https://docs.nvidia.com/dgx/ngc-registry-cli-user-guide/index.html#topic_6_4_1"),g(Nt,"rel","nofollow"),g(Wt,"href","https://huggingface.co/jdemouth"),g(Wt,"rel","nofollow"),g(Rt,"href","https://github.com/NVIDIA/Megatron-LM"),g(Rt,"rel","nofollow"),g(Qe,"id","transformers.MegatronBertConfig"),g(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Qe,"href","#transformers.MegatronBertConfig"),g(_e,"class","relative group"),g(pn,"href","/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertModel"),g(Qt,"href","https://huggingface.co/nvidia/megatron-bert-uncased-345m"),g(Qt,"rel","nofollow"),g(mn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(hn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ge,"id","transformers.MegatronBertModel"),g(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ge,"href","#transformers.MegatronBertModel"),g(ve,"class","relative group"),g(un,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Yt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Yt,"rel","nofollow"),g(Zt,"href","https://arxiv.org/abs/1706.03762"),g(Zt,"rel","nofollow"),g(fn,"href","/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertModel"),g(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ye,"id","transformers.MegatronBertForMaskedLM"),g(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ye,"href","#transformers.MegatronBertForMaskedLM"),g(we,"class","relative group"),g(gn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ao,"rel","nofollow"),g(_n,"href","/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertForMaskedLM"),g(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(tt,"id","transformers.MegatronBertForCausalLM"),g(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(tt,"href","#transformers.MegatronBertForCausalLM"),g(Te,"class","relative group"),g(bn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(uo,"rel","nofollow"),g(kn,"href","/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertForCausalLM"),g(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(st,"id","transformers.MegatronBertForNextSentencePrediction"),g(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(st,"href","#transformers.MegatronBertForNextSentencePrediction"),g(Be,"class","relative group"),g(vn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Mo,"rel","nofollow"),g(Mn,"href","/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertForNextSentencePrediction"),g(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"id","transformers.MegatronBertForPreTraining"),g(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(it,"href","#transformers.MegatronBertForPreTraining"),g(ze,"class","relative group"),g(wn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Fo,"rel","nofollow"),g($n,"href","/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertForPreTraining"),g(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ct,"id","transformers.MegatronBertForSequenceClassification"),g(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ct,"href","#transformers.MegatronBertForSequenceClassification"),g(qe,"class","relative group"),g(Tn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Eo,"rel","nofollow"),g(yn,"href","/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertForSequenceClassification"),g(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(gt,"id","transformers.MegatronBertForMultipleChoice"),g(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(gt,"href","#transformers.MegatronBertForMultipleChoice"),g(Ee,"class","relative group"),g(Bn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Io,"rel","nofollow"),g(Fn,"href","/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertForMultipleChoice"),g(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(kt,"id","transformers.MegatronBertForTokenClassification"),g(kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(kt,"href","#transformers.MegatronBertForTokenClassification"),g(Ae,"class","relative group"),g(zn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Uo,"rel","nofollow"),g(xn,"href","/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertForTokenClassification"),g(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g($t,"id","transformers.MegatronBertForQuestionAnswering"),g($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g($t,"href","#transformers.MegatronBertForQuestionAnswering"),g(Ne,"class","relative group"),g(Pn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Yo,"rel","nofollow"),g(qn,"href","/docs/transformers/main/en/model_doc/megatron-bert#transformers.MegatronBertForQuestionAnswering"),g(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,d),b(t,_,f),b(t,c,f),e(c,m),e(m,k),w(n,k,null),e(c,p),e(c,F),e(F,Ta),b(t,lr,f),b(t,ge,f),e(ge,Re),e(Re,Qn),w(Et,Qn,null),e(ge,ya),e(ge,Vn),e(Vn,Ba),b(t,dr,f),b(t,He,f),e(He,Fa),e(He,jt),e(jt,za),e(He,xa),b(t,cr,f),b(t,nn,f),e(nn,Pa),b(t,pr,f),b(t,sn,f),e(sn,Gn),e(Gn,qa),b(t,mr,f),b(t,rn,f),e(rn,Ca),b(t,hr,f),b(t,Ue,f),e(Ue,Ea),e(Ue,At),e(At,ja),e(Ue,Aa),b(t,ur,f),b(t,oe,f),e(oe,Sa),e(oe,St),e(St,Na),e(oe,La),e(oe,Nt),e(Nt,Ia),e(oe,Oa),b(t,fr,f),b(t,an,f),e(an,Da),b(t,gr,f),b(t,ln,f),e(ln,Wa),b(t,_r,f),w(Lt,t,f),b(t,br,f),b(t,dn,f),e(dn,Ra),b(t,kr,f),w(It,t,f),b(t,vr,f),b(t,cn,f),e(cn,Ha),b(t,Mr,f),b(t,ne,f),e(ne,Ua),e(ne,Jn),e(Jn,Qa),e(ne,Va),e(ne,Kn),e(Kn,Ga),e(ne,Ja),b(t,wr,f),w(Ot,t,f),b(t,$r,f),w(Dt,t,f),b(t,Tr,f),b(t,se,f),e(se,Ka),e(se,Wt),e(Wt,Ya),e(se,Xa),e(se,Rt),e(Rt,Za),e(se,ei),b(t,yr,f),b(t,_e,f),e(_e,Qe),e(Qe,Yn),w(Ht,Yn,null),e(_e,ti),e(_e,Xn),e(Xn,oi),b(t,Br,f),b(t,J,f),w(Ut,J,null),e(J,ni),e(J,be),e(be,si),e(be,pn),e(pn,ri),e(be,ai),e(be,Qt),e(Qt,ii),e(be,li),e(J,di),e(J,ke),e(ke,ci),e(ke,mn),e(mn,pi),e(ke,mi),e(ke,hn),e(hn,hi),e(ke,ui),e(J,fi),w(Ve,J,null),b(t,Fr,f),b(t,ve,f),e(ve,Ge),e(Ge,Zn),w(Vt,Zn,null),e(ve,gi),e(ve,es),e(es,_i),b(t,zr,f),b(t,x,f),w(Gt,x,null),e(x,bi),e(x,ts),e(ts,ki),e(x,vi),e(x,Jt),e(Jt,Mi),e(Jt,un),e(un,wi),e(Jt,$i),e(x,Ti),e(x,Kt),e(Kt,yi),e(Kt,Yt),e(Yt,Bi),e(Kt,Fi),e(x,zi),e(x,Xt),e(Xt,xi),e(Xt,Zt),e(Zt,Pi),e(Xt,qi),e(x,Ci),e(x,C),e(C,Ei),e(C,os),e(os,ji),e(C,Ai),e(C,ns),e(ns,Si),e(C,Ni),e(C,ss),e(ss,Li),e(C,Ii),e(C,rs),e(rs,Oi),e(C,Di),e(C,as),e(as,Wi),e(C,Ri),e(C,is),e(is,Hi),e(C,Ui),e(x,Qi),e(x,K),w(eo,K,null),e(K,Vi),e(K,Me),e(Me,Gi),e(Me,fn),e(fn,Ji),e(Me,Ki),e(Me,ls),e(ls,Yi),e(Me,Xi),e(K,Zi),w(Je,K,null),e(K,el),w(Ke,K,null),b(t,xr,f),b(t,we,f),e(we,Ye),e(Ye,ds),w(to,ds,null),e(we,tl),e(we,cs),e(cs,ol),b(t,Pr,f),b(t,A,f),w(oo,A,null),e(A,nl),e(A,no),e(no,sl),e(no,ps),e(ps,rl),e(no,al),e(A,il),e(A,so),e(so,ll),e(so,gn),e(gn,dl),e(so,cl),e(A,pl),e(A,ro),e(ro,ml),e(ro,ao),e(ao,hl),e(ro,ul),e(A,fl),e(A,R),w(io,R,null),e(R,gl),e(R,$e),e($e,_l),e($e,_n),e(_n,bl),e($e,kl),e($e,ms),e(ms,vl),e($e,Ml),e(R,wl),w(Xe,R,null),e(R,$l),w(Ze,R,null),e(R,Tl),w(et,R,null),b(t,qr,f),b(t,Te,f),e(Te,tt),e(tt,hs),w(lo,hs,null),e(Te,yl),e(Te,us),e(us,Bl),b(t,Cr,f),b(t,S,f),w(co,S,null),e(S,Fl),e(S,po),e(po,zl),e(po,fs),e(fs,xl),e(po,Pl),e(S,ql),e(S,mo),e(mo,Cl),e(mo,bn),e(bn,El),e(mo,jl),e(S,Al),e(S,ho),e(ho,Sl),e(ho,uo),e(uo,Nl),e(ho,Ll),e(S,Il),e(S,Y),w(fo,Y,null),e(Y,Ol),e(Y,ye),e(ye,Dl),e(ye,kn),e(kn,Wl),e(ye,Rl),e(ye,gs),e(gs,Hl),e(ye,Ul),e(Y,Ql),w(ot,Y,null),e(Y,Vl),w(nt,Y,null),b(t,Er,f),b(t,Be,f),e(Be,st),e(st,_s),w(go,_s,null),e(Be,Gl),e(Be,bs),e(bs,Jl),b(t,jr,f),b(t,N,f),w(_o,N,null),e(N,Kl),e(N,bo),e(bo,Yl),e(bo,ks),e(ks,Xl),e(bo,Zl),e(N,ed),e(N,ko),e(ko,td),e(ko,vn),e(vn,od),e(ko,nd),e(N,sd),e(N,vo),e(vo,rd),e(vo,Mo),e(Mo,ad),e(vo,id),e(N,ld),e(N,X),w(wo,X,null),e(X,dd),e(X,Fe),e(Fe,cd),e(Fe,Mn),e(Mn,pd),e(Fe,md),e(Fe,vs),e(vs,hd),e(Fe,ud),e(X,fd),w(rt,X,null),e(X,gd),w(at,X,null),b(t,Ar,f),b(t,ze,f),e(ze,it),e(it,Ms),w($o,Ms,null),e(ze,_d),e(ze,ws),e(ws,bd),b(t,Sr,f),b(t,L,f),w(To,L,null),e(L,kd),e(L,xe),e(xe,vd),e(xe,$s),e($s,Md),e(xe,wd),e(xe,Ts),e(Ts,$d),e(xe,Td),e(L,yd),e(L,yo),e(yo,Bd),e(yo,wn),e(wn,Fd),e(yo,zd),e(L,xd),e(L,Bo),e(Bo,Pd),e(Bo,Fo),e(Fo,qd),e(Bo,Cd),e(L,Ed),e(L,Z),w(zo,Z,null),e(Z,jd),e(Z,Pe),e(Pe,Ad),e(Pe,$n),e($n,Sd),e(Pe,Nd),e(Pe,ys),e(ys,Ld),e(Pe,Id),e(Z,Od),w(lt,Z,null),e(Z,Dd),w(dt,Z,null),b(t,Nr,f),b(t,qe,f),e(qe,ct),e(ct,Bs),w(xo,Bs,null),e(qe,Wd),e(qe,Fs),e(Fs,Rd),b(t,Lr,f),b(t,I,f),w(Po,I,null),e(I,Hd),e(I,zs),e(zs,Ud),e(I,Qd),e(I,qo),e(qo,Vd),e(qo,Tn),e(Tn,Gd),e(qo,Jd),e(I,Kd),e(I,Co),e(Co,Yd),e(Co,Eo),e(Eo,Xd),e(Co,Zd),e(I,ec),e(I,q),w(jo,q,null),e(q,tc),e(q,Ce),e(Ce,oc),e(Ce,yn),e(yn,nc),e(Ce,sc),e(Ce,xs),e(xs,rc),e(Ce,ac),e(q,ic),w(pt,q,null),e(q,lc),w(mt,q,null),e(q,dc),w(ht,q,null),e(q,cc),w(ut,q,null),e(q,pc),w(ft,q,null),b(t,Ir,f),b(t,Ee,f),e(Ee,gt),e(gt,Ps),w(Ao,Ps,null),e(Ee,mc),e(Ee,qs),e(qs,hc),b(t,Or,f),b(t,O,f),w(So,O,null),e(O,uc),e(O,Cs),e(Cs,fc),e(O,gc),e(O,No),e(No,_c),e(No,Bn),e(Bn,bc),e(No,kc),e(O,vc),e(O,Lo),e(Lo,Mc),e(Lo,Io),e(Io,wc),e(Lo,$c),e(O,Tc),e(O,ee),w(Oo,ee,null),e(ee,yc),e(ee,je),e(je,Bc),e(je,Fn),e(Fn,Fc),e(je,zc),e(je,Es),e(Es,xc),e(je,Pc),e(ee,qc),w(_t,ee,null),e(ee,Cc),w(bt,ee,null),b(t,Dr,f),b(t,Ae,f),e(Ae,kt),e(kt,js),w(Do,js,null),e(Ae,Ec),e(Ae,As),e(As,jc),b(t,Wr,f),b(t,D,f),w(Wo,D,null),e(D,Ac),e(D,Ss),e(Ss,Sc),e(D,Nc),e(D,Ro),e(Ro,Lc),e(Ro,zn),e(zn,Ic),e(Ro,Oc),e(D,Dc),e(D,Ho),e(Ho,Wc),e(Ho,Uo),e(Uo,Rc),e(Ho,Hc),e(D,Uc),e(D,H),w(Qo,H,null),e(H,Qc),e(H,Se),e(Se,Vc),e(Se,xn),e(xn,Gc),e(Se,Jc),e(Se,Ns),e(Ns,Kc),e(Se,Yc),e(H,Xc),w(vt,H,null),e(H,Zc),w(Mt,H,null),e(H,ep),w(wt,H,null),b(t,Rr,f),b(t,Ne,f),e(Ne,$t),e($t,Ls),w(Vo,Ls,null),e(Ne,tp),e(Ne,Is),e(Is,op),b(t,Hr,f),b(t,W,f),w(Go,W,null),e(W,np),e(W,Le),e(Le,sp),e(Le,Os),e(Os,rp),e(Le,ap),e(Le,Ds),e(Ds,ip),e(Le,lp),e(W,dp),e(W,Jo),e(Jo,cp),e(Jo,Pn),e(Pn,pp),e(Jo,mp),e(W,hp),e(W,Ko),e(Ko,up),e(Ko,Yo),e(Yo,fp),e(Ko,gp),e(W,_p),e(W,U),w(Xo,U,null),e(U,bp),e(U,Ie),e(Ie,kp),e(Ie,qn),e(qn,vp),e(Ie,Mp),e(Ie,Ws),e(Ws,wp),e(Ie,$p),e(U,Tp),w(Tt,U,null),e(U,yp),w(yt,U,null),e(U,Bp),w(Bt,U,null),Ur=!0},p(t,[f]){const Zo={};f&2&&(Zo.$$scope={dirty:f,ctx:t}),Ve.$set(Zo);const Rs={};f&2&&(Rs.$$scope={dirty:f,ctx:t}),Je.$set(Rs);const Hs={};f&2&&(Hs.$$scope={dirty:f,ctx:t}),Ke.$set(Hs);const Us={};f&2&&(Us.$$scope={dirty:f,ctx:t}),Xe.$set(Us);const en={};f&2&&(en.$$scope={dirty:f,ctx:t}),Ze.$set(en);const Qs={};f&2&&(Qs.$$scope={dirty:f,ctx:t}),et.$set(Qs);const Vs={};f&2&&(Vs.$$scope={dirty:f,ctx:t}),ot.$set(Vs);const Gs={};f&2&&(Gs.$$scope={dirty:f,ctx:t}),nt.$set(Gs);const tn={};f&2&&(tn.$$scope={dirty:f,ctx:t}),rt.$set(tn);const Js={};f&2&&(Js.$$scope={dirty:f,ctx:t}),at.$set(Js);const Ks={};f&2&&(Ks.$$scope={dirty:f,ctx:t}),lt.$set(Ks);const Ys={};f&2&&(Ys.$$scope={dirty:f,ctx:t}),dt.$set(Ys);const Xs={};f&2&&(Xs.$$scope={dirty:f,ctx:t}),pt.$set(Xs);const Zs={};f&2&&(Zs.$$scope={dirty:f,ctx:t}),mt.$set(Zs);const on={};f&2&&(on.$$scope={dirty:f,ctx:t}),ht.$set(on);const er={};f&2&&(er.$$scope={dirty:f,ctx:t}),ut.$set(er);const Oe={};f&2&&(Oe.$$scope={dirty:f,ctx:t}),ft.$set(Oe);const tr={};f&2&&(tr.$$scope={dirty:f,ctx:t}),_t.$set(tr);const or={};f&2&&(or.$$scope={dirty:f,ctx:t}),bt.$set(or);const nr={};f&2&&(nr.$$scope={dirty:f,ctx:t}),vt.$set(nr);const sr={};f&2&&(sr.$$scope={dirty:f,ctx:t}),Mt.$set(sr);const rr={};f&2&&(rr.$$scope={dirty:f,ctx:t}),wt.$set(rr);const ar={};f&2&&(ar.$$scope={dirty:f,ctx:t}),Tt.$set(ar);const De={};f&2&&(De.$$scope={dirty:f,ctx:t}),yt.$set(De);const ir={};f&2&&(ir.$$scope={dirty:f,ctx:t}),Bt.$set(ir)},i(t){Ur||($(n.$$.fragment,t),$(Et.$$.fragment,t),$(Lt.$$.fragment,t),$(It.$$.fragment,t),$(Ot.$$.fragment,t),$(Dt.$$.fragment,t),$(Ht.$$.fragment,t),$(Ut.$$.fragment,t),$(Ve.$$.fragment,t),$(Vt.$$.fragment,t),$(Gt.$$.fragment,t),$(eo.$$.fragment,t),$(Je.$$.fragment,t),$(Ke.$$.fragment,t),$(to.$$.fragment,t),$(oo.$$.fragment,t),$(io.$$.fragment,t),$(Xe.$$.fragment,t),$(Ze.$$.fragment,t),$(et.$$.fragment,t),$(lo.$$.fragment,t),$(co.$$.fragment,t),$(fo.$$.fragment,t),$(ot.$$.fragment,t),$(nt.$$.fragment,t),$(go.$$.fragment,t),$(_o.$$.fragment,t),$(wo.$$.fragment,t),$(rt.$$.fragment,t),$(at.$$.fragment,t),$($o.$$.fragment,t),$(To.$$.fragment,t),$(zo.$$.fragment,t),$(lt.$$.fragment,t),$(dt.$$.fragment,t),$(xo.$$.fragment,t),$(Po.$$.fragment,t),$(jo.$$.fragment,t),$(pt.$$.fragment,t),$(mt.$$.fragment,t),$(ht.$$.fragment,t),$(ut.$$.fragment,t),$(ft.$$.fragment,t),$(Ao.$$.fragment,t),$(So.$$.fragment,t),$(Oo.$$.fragment,t),$(_t.$$.fragment,t),$(bt.$$.fragment,t),$(Do.$$.fragment,t),$(Wo.$$.fragment,t),$(Qo.$$.fragment,t),$(vt.$$.fragment,t),$(Mt.$$.fragment,t),$(wt.$$.fragment,t),$(Vo.$$.fragment,t),$(Go.$$.fragment,t),$(Xo.$$.fragment,t),$(Tt.$$.fragment,t),$(yt.$$.fragment,t),$(Bt.$$.fragment,t),Ur=!0)},o(t){T(n.$$.fragment,t),T(Et.$$.fragment,t),T(Lt.$$.fragment,t),T(It.$$.fragment,t),T(Ot.$$.fragment,t),T(Dt.$$.fragment,t),T(Ht.$$.fragment,t),T(Ut.$$.fragment,t),T(Ve.$$.fragment,t),T(Vt.$$.fragment,t),T(Gt.$$.fragment,t),T(eo.$$.fragment,t),T(Je.$$.fragment,t),T(Ke.$$.fragment,t),T(to.$$.fragment,t),T(oo.$$.fragment,t),T(io.$$.fragment,t),T(Xe.$$.fragment,t),T(Ze.$$.fragment,t),T(et.$$.fragment,t),T(lo.$$.fragment,t),T(co.$$.fragment,t),T(fo.$$.fragment,t),T(ot.$$.fragment,t),T(nt.$$.fragment,t),T(go.$$.fragment,t),T(_o.$$.fragment,t),T(wo.$$.fragment,t),T(rt.$$.fragment,t),T(at.$$.fragment,t),T($o.$$.fragment,t),T(To.$$.fragment,t),T(zo.$$.fragment,t),T(lt.$$.fragment,t),T(dt.$$.fragment,t),T(xo.$$.fragment,t),T(Po.$$.fragment,t),T(jo.$$.fragment,t),T(pt.$$.fragment,t),T(mt.$$.fragment,t),T(ht.$$.fragment,t),T(ut.$$.fragment,t),T(ft.$$.fragment,t),T(Ao.$$.fragment,t),T(So.$$.fragment,t),T(Oo.$$.fragment,t),T(_t.$$.fragment,t),T(bt.$$.fragment,t),T(Do.$$.fragment,t),T(Wo.$$.fragment,t),T(Qo.$$.fragment,t),T(vt.$$.fragment,t),T(Mt.$$.fragment,t),T(wt.$$.fragment,t),T(Vo.$$.fragment,t),T(Go.$$.fragment,t),T(Xo.$$.fragment,t),T(Tt.$$.fragment,t),T(yt.$$.fragment,t),T(Bt.$$.fragment,t),Ur=!1},d(t){o(d),t&&o(_),t&&o(c),y(n),t&&o(lr),t&&o(ge),y(Et),t&&o(dr),t&&o(He),t&&o(cr),t&&o(nn),t&&o(pr),t&&o(sn),t&&o(mr),t&&o(rn),t&&o(hr),t&&o(Ue),t&&o(ur),t&&o(oe),t&&o(fr),t&&o(an),t&&o(gr),t&&o(ln),t&&o(_r),y(Lt,t),t&&o(br),t&&o(dn),t&&o(kr),y(It,t),t&&o(vr),t&&o(cn),t&&o(Mr),t&&o(ne),t&&o(wr),y(Ot,t),t&&o($r),y(Dt,t),t&&o(Tr),t&&o(se),t&&o(yr),t&&o(_e),y(Ht),t&&o(Br),t&&o(J),y(Ut),y(Ve),t&&o(Fr),t&&o(ve),y(Vt),t&&o(zr),t&&o(x),y(Gt),y(eo),y(Je),y(Ke),t&&o(xr),t&&o(we),y(to),t&&o(Pr),t&&o(A),y(oo),y(io),y(Xe),y(Ze),y(et),t&&o(qr),t&&o(Te),y(lo),t&&o(Cr),t&&o(S),y(co),y(fo),y(ot),y(nt),t&&o(Er),t&&o(Be),y(go),t&&o(jr),t&&o(N),y(_o),y(wo),y(rt),y(at),t&&o(Ar),t&&o(ze),y($o),t&&o(Sr),t&&o(L),y(To),y(zo),y(lt),y(dt),t&&o(Nr),t&&o(qe),y(xo),t&&o(Lr),t&&o(I),y(Po),y(jo),y(pt),y(mt),y(ht),y(ut),y(ft),t&&o(Ir),t&&o(Ee),y(Ao),t&&o(Or),t&&o(O),y(So),y(Oo),y(_t),y(bt),t&&o(Dr),t&&o(Ae),y(Do),t&&o(Wr),t&&o(D),y(Wo),y(Qo),y(vt),y(Mt),y(wt),t&&o(Rr),t&&o(Ne),y(Vo),t&&o(Hr),t&&o(W),y(Go),y(Xo),y(Tt),y(yt),y(Bt)}}}const Dh={local:"megatronbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.MegatronBertConfig",title:"MegatronBertConfig"},{local:"transformers.MegatronBertModel",title:"MegatronBertModel"},{local:"transformers.MegatronBertForMaskedLM",title:"MegatronBertForMaskedLM"},{local:"transformers.MegatronBertForCausalLM",title:"MegatronBertForCausalLM"},{local:"transformers.MegatronBertForNextSentencePrediction",title:"MegatronBertForNextSentencePrediction"},{local:"transformers.MegatronBertForPreTraining",title:"MegatronBertForPreTraining"},{local:"transformers.MegatronBertForSequenceClassification",title:"MegatronBertForSequenceClassification"},{local:"transformers.MegatronBertForMultipleChoice",title:"MegatronBertForMultipleChoice"},{local:"transformers.MegatronBertForTokenClassification",title:"MegatronBertForTokenClassification"},{local:"transformers.MegatronBertForQuestionAnswering",title:"MegatronBertForQuestionAnswering"}],title:"MegatronBERT"};function Wh(B){return uh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Jh extends ch{constructor(d){super();ph(this,d,Wh,Oh,mh,{})}}export{Jh as default,Dh as metadata};
