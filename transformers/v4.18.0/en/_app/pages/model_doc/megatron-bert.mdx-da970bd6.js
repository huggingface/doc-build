import{S as cm,i as pm,s as hm,e as a,k as m,w as k,t as r,M as mm,c as i,d as o,m as u,a as l,x as M,h as s,b as g,F as e,g as b,y as w,q as $,o as T,B as y,v as um,L as j}from"../../chunks/vendor-6b77c823.js";import{T as We}from"../../chunks/Tip-39098574.js";import{D as P}from"../../chunks/Docstring-1088f2fb.js";import{C as z}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as te}from"../../chunks/IconCopyLink-7a11ce68.js";import{E}from"../../chunks/ExampleCodeBlock-5212b321.js";function fm(B){let d,_,c,h,v;return h=new z({props:{code:`from transformers import MegatronBertModel, MegatronBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),_=r("Examples:"),c=m(),k(h.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Examples:"),p.forEach(o),c=u(n),M(h.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(h,n,p),v=!0},p:j,i(n){v||($(h.$$.fragment,n),v=!0)},o(n){T(h.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function gm(B){let d,_,c,h,v;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);h=s(F,"Module"),F.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,h),e(d,v)},d(n){n&&o(d)}}}function _m(B){let d,_,c,h,v;return h=new z({props:{code:`from transformers import BertTokenizer, MegatronBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=r("Example:"),c=m(),k(h.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Example:"),p.forEach(o),c=u(n),M(h.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(h,n,p),v=!0},p:j,i(n){v||($(h.$$.fragment,n),v=!0)},o(n){T(h.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function bm(B){let d,_,c,h,v;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);h=s(F,"Module"),F.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,h),e(d,v)},d(n){n&&o(d)}}}function vm(B){let d,_,c,h,v;return h=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForMaskedLM
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
`}}),{c(){d=a("p"),_=r("Example:"),c=m(),k(h.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Example:"),p.forEach(o),c=u(n),M(h.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(h,n,p),v=!0},p:j,i(n){v||($(h.$$.fragment,n),v=!0)},o(n){T(h.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function km(B){let d,_;return d=new z({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,h){w(d,c,h),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Mm(B){let d,_,c,h,v;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);h=s(F,"Module"),F.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,h),e(d,v)},d(n){n&&o(d)}}}function wm(B){let d,_,c,h,v;return h=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForCausalLM, MegatronBertConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),_=r("Example:"),c=m(),k(h.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Example:"),p.forEach(o),c=u(n),M(h.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(h,n,p),v=!0},p:j,i(n){v||($(h.$$.fragment,n),v=!0)},o(n){T(h.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function $m(B){let d,_,c,h,v;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);h=s(F,"Module"),F.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,h),e(d,v)},d(n){n&&o(d)}}}function Tm(B){let d,_,c,h,v;return h=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=a("p"),_=r("Example:"),c=m(),k(h.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Example:"),p.forEach(o),c=u(n),M(h.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(h,n,p),v=!0},p:j,i(n){v||($(h.$$.fragment,n),v=!0)},o(n){T(h.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function ym(B){let d,_,c,h,v;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);h=s(F,"Module"),F.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,h),e(d,v)},d(n){n&&o(d)}}}function Bm(B){let d,_,c,h,v;return h=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=a("p"),_=r("Example:"),c=m(),k(h.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Example:"),p.forEach(o),c=u(n),M(h.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(h,n,p),v=!0},p:j,i(n){v||($(h.$$.fragment,n),v=!0)},o(n){T(h.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function Fm(B){let d,_,c,h,v;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);h=s(F,"Module"),F.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,h),e(d,v)},d(n){n&&o(d)}}}function zm(B){let d,_,c,h,v;return h=new z({props:{code:`import torch
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
`}}),{c(){d=a("p"),_=r("Example of single-label classification:"),c=m(),k(h.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Example of single-label classification:"),p.forEach(o),c=u(n),M(h.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(h,n,p),v=!0},p:j,i(n){v||($(h.$$.fragment,n),v=!0)},o(n){T(h.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function xm(B){let d,_;return d=new z({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){k(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,h){w(d,c,h),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Pm(B){let d,_,c,h,v;return h=new z({props:{code:`import torch
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
`}}),{c(){d=a("p"),_=r("Example of multi-label classification:"),c=m(),k(h.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Example of multi-label classification:"),p.forEach(o),c=u(n),M(h.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(h,n,p),v=!0},p:j,i(n){v||($(h.$$.fragment,n),v=!0)},o(n){T(h.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function qm(B){let d,_;return d=new z({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MegatronBertForSequenceClassification.from_pretrained("nvidia/megatron-bert-cased-345m", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,h){w(d,c,h),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Cm(B){let d,_,c,h,v;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);h=s(F,"Module"),F.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,h),e(d,v)},d(n){n&&o(d)}}}function Em(B){let d,_,c,h,v;return h=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=r("Example:"),c=m(),k(h.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Example:"),p.forEach(o),c=u(n),M(h.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(h,n,p),v=!0},p:j,i(n){v||($(h.$$.fragment,n),v=!0)},o(n){T(h.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function jm(B){let d,_,c,h,v;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);h=s(F,"Module"),F.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,h),e(d,v)},d(n){n&&o(d)}}}function Am(B){let d,_,c,h,v;return h=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForTokenClassification
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
`}}),{c(){d=a("p"),_=r("Example:"),c=m(),k(h.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Example:"),p.forEach(o),c=u(n),M(h.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(h,n,p),v=!0},p:j,i(n){v||($(h.$$.fragment,n),v=!0)},o(n){T(h.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function Sm(B){let d,_;return d=new z({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,h){w(d,c,h),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Nm(B){let d,_,c,h,v;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var F=l(c);h=s(F,"Module"),F.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){b(n,d,p),e(d,_),e(d,c),e(c,h),e(d,v)},d(n){n&&o(d)}}}function Lm(B){let d,_,c,h,v;return h=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForQuestionAnswering
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
`}}),{c(){d=a("p"),_=r("Example:"),c=m(),k(h.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);_=s(p,"Example:"),p.forEach(o),c=u(n),M(h.$$.fragment,n)},m(n,p){b(n,d,p),e(d,_),b(n,c,p),w(h,n,p),v=!0},p:j,i(n){v||($(h.$$.fragment,n),v=!0)},o(n){T(h.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function Im(B){let d,_;return d=new z({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,h){w(d,c,h),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Om(B){let d,_,c,h,v,n,p,F,Ta,ls,ge,Re,Qn,Et,ya,Vn,Ba,ds,He,Fa,jt,za,xa,cs,nn,Pa,ps,rn,Gn,qa,hs,sn,Ca,ms,Ue,Ea,At,ja,Aa,us,oe,Sa,St,Na,La,Nt,Ia,Oa,fs,an,Da,gs,ln,Wa,_s,Lt,bs,dn,Ra,vs,It,ks,cn,Ha,Ms,ne,Ua,Jn,Qa,Va,Kn,Ga,Ja,ws,Ot,$s,Dt,Ts,re,Ka,Wt,Ya,Xa,Rt,Za,ei,ys,_e,Qe,Yn,Ht,ti,Xn,oi,Bs,J,Ut,ni,be,ri,pn,si,ai,Qt,ii,li,di,ve,ci,hn,pi,hi,mn,mi,ui,fi,Ve,Fs,ke,Ge,Zn,Vt,gi,er,_i,zs,x,Gt,bi,tr,vi,ki,Jt,Mi,un,wi,$i,Ti,Kt,yi,Yt,Bi,Fi,zi,Xt,xi,Zt,Pi,qi,Ci,C,Ei,or,ji,Ai,nr,Si,Ni,rr,Li,Ii,sr,Oi,Di,ar,Wi,Ri,ir,Hi,Ui,Qi,K,eo,Vi,Me,Gi,fn,Ji,Ki,lr,Yi,Xi,Zi,Je,el,Ke,xs,we,Ye,dr,to,tl,cr,ol,Ps,A,oo,nl,no,rl,pr,sl,al,il,ro,ll,gn,dl,cl,pl,so,hl,ao,ml,ul,fl,R,io,gl,$e,_l,_n,bl,vl,hr,kl,Ml,wl,Xe,$l,Ze,Tl,et,qs,Te,tt,mr,lo,yl,ur,Bl,Cs,S,co,Fl,po,zl,fr,xl,Pl,ql,ho,Cl,bn,El,jl,Al,mo,Sl,uo,Nl,Ll,Il,Y,fo,Ol,ye,Dl,vn,Wl,Rl,gr,Hl,Ul,Ql,ot,Vl,nt,Es,Be,rt,_r,go,Gl,br,Jl,js,N,_o,Kl,bo,Yl,vr,Xl,Zl,ed,vo,td,kn,od,nd,rd,ko,sd,Mo,ad,id,ld,X,wo,dd,Fe,cd,Mn,pd,hd,kr,md,ud,fd,st,gd,at,As,ze,it,Mr,$o,_d,wr,bd,Ss,L,To,vd,xe,kd,$r,Md,wd,Tr,$d,Td,yd,yo,Bd,wn,Fd,zd,xd,Bo,Pd,Fo,qd,Cd,Ed,Z,zo,jd,Pe,Ad,$n,Sd,Nd,yr,Ld,Id,Od,lt,Dd,dt,Ns,qe,ct,Br,xo,Wd,Fr,Rd,Ls,I,Po,Hd,zr,Ud,Qd,qo,Vd,Tn,Gd,Jd,Kd,Co,Yd,Eo,Xd,Zd,ec,q,jo,tc,Ce,oc,yn,nc,rc,xr,sc,ac,ic,pt,lc,ht,dc,mt,cc,ut,pc,ft,Is,Ee,gt,Pr,Ao,hc,qr,mc,Os,O,So,uc,Cr,fc,gc,No,_c,Bn,bc,vc,kc,Lo,Mc,Io,wc,$c,Tc,ee,Oo,yc,je,Bc,Fn,Fc,zc,Er,xc,Pc,qc,_t,Cc,bt,Ds,Ae,vt,jr,Do,Ec,Ar,jc,Ws,D,Wo,Ac,Sr,Sc,Nc,Ro,Lc,zn,Ic,Oc,Dc,Ho,Wc,Uo,Rc,Hc,Uc,H,Qo,Qc,Se,Vc,xn,Gc,Jc,Nr,Kc,Yc,Xc,kt,Zc,Mt,ep,wt,Rs,Ne,$t,Lr,Vo,tp,Ir,op,Hs,W,Go,np,Le,rp,Or,sp,ap,Dr,ip,lp,dp,Jo,cp,Pn,pp,hp,mp,Ko,up,Yo,fp,gp,_p,U,Xo,bp,Ie,vp,qn,kp,Mp,Wr,wp,$p,Tp,Tt,yp,yt,Bp,Bt,Us;return n=new te({}),Et=new te({}),Lt=new z({props:{code:`wget --content-disposition https://api.ngc.nvidia.com/v2/models/nvidia/megatron_bert_345m/versions/v0.1_uncased/zip
-O megatron_bert_345m_v0_1_uncased.zip`,highlighted:`wget --content-disposition https://api.ngc.nvidia.com/v2/models/nvidia/megatron_bert_345m/versions/v0.1_uncased/zip
-O megatron_bert_345m_v0_1_uncased.zip`}}),It=new z({props:{code:`wget --content-disposition https://api.ngc.nvidia.com/v2/models/nvidia/megatron_bert_345m/versions/v0.1_cased/zip -O
megatron_bert_345m_v0_1_cased.zip`,highlighted:`wget --content-disposition https://api.ngc.nvidia.com/v2/models/nvidia/megatron_bert_345m/versions/v0.1_cased/zip -O
megatron_bert_345m_v0_1_cased.zip`}}),Ot=new z({props:{code:"python3 $PATH_TO_TRANSFORMERS/models/megatron_bert/convert_megatron_bert_checkpoint.py megatron_bert_345m_v0_1_uncased.zip",highlighted:'python3 <span class="hljs-variable">$PATH_TO_TRANSFORMERS</span>/models/megatron_bert/convert_megatron_bert_checkpoint.py megatron_bert_345m_v0_1_uncased.zip'}}),Dt=new z({props:{code:"python3 $PATH_TO_TRANSFORMERS/models/megatron_bert/convert_megatron_bert_checkpoint.py megatron_bert_345m_v0_1_cased.zip",highlighted:'python3 <span class="hljs-variable">$PATH_TO_TRANSFORMERS</span>/models/megatron_bert/convert_megatron_bert_checkpoint.py megatron_bert_345m_v0_1_cased.zip'}}),Ht=new te({}),Ut=new P({props:{name:"class transformers.MegatronBertConfig",anchor:"transformers.MegatronBertConfig",parameters:[{name:"vocab_size",val:" = 29056"},{name:"hidden_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 16"},{name:"intermediate_size",val:" = 4096"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 29056) &#x2014;
Vocabulary size of the MEGATRON_BERT model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertModel">MegatronBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.MegatronBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertModel">MegatronBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.MegatronBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.MegatronBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.MegatronBertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.MegatronBertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/configuration_megatron_bert.py#L28"}}),Ve=new E({props:{anchor:"transformers.MegatronBertConfig.example",$$slots:{default:[fm]},$$scope:{ctx:B}}}),Vt=new te({}),Gt=new P({props:{name:"class transformers.MegatronBertModel",anchor:"transformers.MegatronBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MegatronBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L835"}}),eo=new P({props:{name:"forward",anchor:"transformers.MegatronBertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L874",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Je=new We({props:{$$slots:{default:[gm]},$$scope:{ctx:B}}}),Ke=new E({props:{anchor:"transformers.MegatronBertModel.forward.example",$$slots:{default:[_m]},$$scope:{ctx:B}}}),to=new te({}),oo=new P({props:{name:"class transformers.MegatronBertForMaskedLM",anchor:"transformers.MegatronBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1262"}}),io=new P({props:{name:"forward",anchor:"transformers.MegatronBertForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1288",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xe=new We({props:{$$slots:{default:[bm]},$$scope:{ctx:B}}}),Ze=new E({props:{anchor:"transformers.MegatronBertForMaskedLM.forward.example",$$slots:{default:[vm]},$$scope:{ctx:B}}}),et=new E({props:{anchor:"transformers.MegatronBertForMaskedLM.forward.example-2",$$slots:{default:[km]},$$scope:{ctx:B}}}),lo=new te({}),co=new P({props:{name:"class transformers.MegatronBertForCausalLM",anchor:"transformers.MegatronBertForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1116"}}),fo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1139",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ot=new We({props:{$$slots:{default:[Mm]},$$scope:{ctx:B}}}),nt=new E({props:{anchor:"transformers.MegatronBertForCausalLM.forward.example",$$slots:{default:[wm]},$$scope:{ctx:B}}}),go=new te({}),_o=new P({props:{name:"class transformers.MegatronBertForNextSentencePrediction",anchor:"transformers.MegatronBertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1371"}}),wo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1384",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),st=new We({props:{$$slots:{default:[$m]},$$scope:{ctx:B}}}),at=new E({props:{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.example",$$slots:{default:[Tm]},$$scope:{ctx:B}}}),$o=new te({}),To=new P({props:{name:"class transformers.MegatronBertForPreTraining",anchor:"transformers.MegatronBertForPreTraining",parameters:[{name:"config",val:""},{name:"add_binary_head",val:" = True"}],parametersDescription:[{anchor:"transformers.MegatronBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1012"}}),zo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForPreTraining.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"next_sentence_label",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.MegatronBertForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"},{anchor:"transformers.MegatronBertForPreTraining.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1028",returnDescription:`
<p>A <code>transformers.models.megatron_bert.modeling_megatron_bert.MegatronBertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
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
`}}),lt=new We({props:{$$slots:{default:[ym]},$$scope:{ctx:B}}}),dt=new E({props:{anchor:"transformers.MegatronBertForPreTraining.forward.example",$$slots:{default:[Bm]},$$scope:{ctx:B}}}),xo=new te({}),Po=new P({props:{name:"class transformers.MegatronBertForSequenceClassification",anchor:"transformers.MegatronBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1477"}}),jo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1489",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pt=new We({props:{$$slots:{default:[Fm]},$$scope:{ctx:B}}}),ht=new E({props:{anchor:"transformers.MegatronBertForSequenceClassification.forward.example",$$slots:{default:[zm]},$$scope:{ctx:B}}}),mt=new E({props:{anchor:"transformers.MegatronBertForSequenceClassification.forward.example-2",$$slots:{default:[xm]},$$scope:{ctx:B}}}),ut=new E({props:{anchor:"transformers.MegatronBertForSequenceClassification.forward.example-3",$$slots:{default:[Pm]},$$scope:{ctx:B}}}),ft=new E({props:{anchor:"transformers.MegatronBertForSequenceClassification.forward.example-4",$$slots:{default:[qm]},$$scope:{ctx:B}}}),Ao=new te({}),So=new P({props:{name:"class transformers.MegatronBertForMultipleChoice",anchor:"transformers.MegatronBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1575"}}),Oo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1586",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_t=new We({props:{$$slots:{default:[Cm]},$$scope:{ctx:B}}}),bt=new E({props:{anchor:"transformers.MegatronBertForMultipleChoice.forward.example",$$slots:{default:[Em]},$$scope:{ctx:B}}}),Do=new te({}),Wo=new P({props:{name:"class transformers.MegatronBertForTokenClassification",anchor:"transformers.MegatronBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1669"}}),Qo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1684",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kt=new We({props:{$$slots:{default:[jm]},$$scope:{ctx:B}}}),Mt=new E({props:{anchor:"transformers.MegatronBertForTokenClassification.forward.example",$$slots:{default:[Am]},$$scope:{ctx:B}}}),wt=new E({props:{anchor:"transformers.MegatronBertForTokenClassification.forward.example-2",$$slots:{default:[Sm]},$$scope:{ctx:B}}}),Vo=new te({}),Go=new P({props:{name:"class transformers.MegatronBertForQuestionAnswering",anchor:"transformers.MegatronBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1751"}}),Xo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1765",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tt=new We({props:{$$slots:{default:[Nm]},$$scope:{ctx:B}}}),yt=new E({props:{anchor:"transformers.MegatronBertForQuestionAnswering.forward.example",$$slots:{default:[Lm]},$$scope:{ctx:B}}}),Bt=new E({props:{anchor:"transformers.MegatronBertForQuestionAnswering.forward.example-2",$$slots:{default:[Im]},$$scope:{ctx:B}}}),{c(){d=a("meta"),_=m(),c=a("h1"),h=a("a"),v=a("span"),k(n.$$.fragment),p=m(),F=a("span"),Ta=r("MegatronBERT"),ls=m(),ge=a("h2"),Re=a("a"),Qn=a("span"),k(Et.$$.fragment),ya=m(),Vn=a("span"),Ba=r("Overview"),ds=m(),He=a("p"),Fa=r("The MegatronBERT model was proposed in "),jt=a("a"),za=r(`Megatron-LM: Training Multi-Billion Parameter Language Models Using Model
Parallelism`),xa=r(` by Mohammad Shoeybi, Mostofa Patwary, Raul Puri, Patrick LeGresley,
Jared Casper and Bryan Catanzaro.`),cs=m(),nn=a("p"),Pa=r("The abstract from the paper is the following:"),ps=m(),rn=a("p"),Gn=a("em"),qa=r(`Recent work in language modeling demonstrates that training large transformer models advances the state of the art in
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
of 89.4%).`),hs=m(),sn=a("p"),Ca=r("Tips:"),ms=m(),Ue=a("p"),Ea=r("We have provided pretrained "),At=a("a"),ja=r("BERT-345M"),Aa=r(` checkpoints
for use to evaluate or finetuning downstream tasks.`),us=m(),oe=a("p"),Sa=r("To access these checkpoints, first "),St=a("a"),Na=r("sign up"),La=r(` for and setup the NVIDIA GPU Cloud (NGC)
Registry CLI. Further documentation for downloading models can be found in the `),Nt=a("a"),Ia=r("NGC documentation"),Oa=r("."),fs=m(),an=a("p"),Da=r("Alternatively, you can directly download the checkpoints using:"),gs=m(),ln=a("p"),Wa=r("BERT-345M-uncased:"),_s=m(),k(Lt.$$.fragment),bs=m(),dn=a("p"),Ra=r("BERT-345M-cased:"),vs=m(),k(It.$$.fragment),ks=m(),cn=a("p"),Ha=r(`Once you have obtained the checkpoints from NVIDIA GPU Cloud (NGC), you have to convert them to a format that will
easily be loaded by Hugging Face Transformers and our port of the BERT code.`),Ms=m(),ne=a("p"),Ua=r("The following commands allow you to do the conversion. We assume that the folder "),Jn=a("code"),Qa=r("models/megatron_bert"),Va=r(` contains
`),Kn=a("code"),Ga=r("megatron_bert_345m_v0_1_{cased, uncased}.zip"),Ja=r(" and that the commands are run from inside that folder:"),ws=m(),k(Ot.$$.fragment),$s=m(),k(Dt.$$.fragment),Ts=m(),re=a("p"),Ka=r("This model was contributed by "),Wt=a("a"),Ya=r("jdemouth"),Xa=r(". The original code can be found "),Rt=a("a"),Za=r("here"),ei=r(`. That repository contains a multi-GPU and multi-node implementation of the
Megatron Language models. In particular, it contains a hybrid model parallel approach using \u201Ctensor parallel\u201D and
\u201Cpipeline parallel\u201D techniques.`),ys=m(),_e=a("h2"),Qe=a("a"),Yn=a("span"),k(Ht.$$.fragment),ti=m(),Xn=a("span"),oi=r("MegatronBertConfig"),Bs=m(),J=a("div"),k(Ut.$$.fragment),ni=m(),be=a("p"),ri=r("This is the configuration class to store the configuration of a "),pn=a("a"),si=r("MegatronBertModel"),ai=r(`. It is used to instantiate a
MEGATRON_BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MEGATRON_BERT
`),Qt=a("a"),ii=r("megatron-bert-uncased-345m"),li=r(" architecture."),di=m(),ve=a("p"),ci=r("Configuration objects inherit from "),hn=a("a"),pi=r("PretrainedConfig"),hi=r(` and can be used to control the model outputs. Read the
documentation from `),mn=a("a"),mi=r("PretrainedConfig"),ui=r(" for more information."),fi=m(),k(Ve.$$.fragment),Fs=m(),ke=a("h2"),Ge=a("a"),Zn=a("span"),k(Vt.$$.fragment),gi=m(),er=a("span"),_i=r("MegatronBertModel"),zs=m(),x=a("div"),k(Gt.$$.fragment),bi=m(),tr=a("p"),vi=r("The bare MegatronBert Model transformer outputting raw hidden-states without any specific head on top."),ki=m(),Jt=a("p"),Mi=r("This model inherits from "),un=a("a"),wi=r("PreTrainedModel"),$i=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ti=m(),Kt=a("p"),yi=r("This model is also a PyTorch "),Yt=a("a"),Bi=r("torch.nn.Module"),Fi=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zi=m(),Xt=a("p"),xi=r(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Zt=a("a"),Pi=r(`Attention is
all you need`),qi=r(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ci=m(),C=a("p"),Ei=r("To behave as an decoder the model needs to be initialized with the "),or=a("code"),ji=r("is_decoder"),Ai=r(` argument of the configuration set
to `),nr=a("code"),Si=r("True"),Ni=r(". To be used in a Seq2Seq model, the model needs to initialized with both "),rr=a("code"),Li=r("is_decoder"),Ii=r(` argument and
`),sr=a("code"),Oi=r("add_cross_attention"),Di=r(" set to "),ar=a("code"),Wi=r("True"),Ri=r("; an "),ir=a("code"),Hi=r("encoder_hidden_states"),Ui=r(" is then expected as an input to the forward pass."),Qi=m(),K=a("div"),k(eo.$$.fragment),Vi=m(),Me=a("p"),Gi=r("The "),fn=a("a"),Ji=r("MegatronBertModel"),Ki=r(" forward method, overrides the "),lr=a("code"),Yi=r("__call__"),Xi=r(" special method."),Zi=m(),k(Je.$$.fragment),el=m(),k(Ke.$$.fragment),xs=m(),we=a("h2"),Ye=a("a"),dr=a("span"),k(to.$$.fragment),tl=m(),cr=a("span"),ol=r("MegatronBertForMaskedLM"),Ps=m(),A=a("div"),k(oo.$$.fragment),nl=m(),no=a("p"),rl=r("MegatronBert Model with a "),pr=a("code"),sl=r("language modeling"),al=r(" head on top."),il=m(),ro=a("p"),ll=r("This model inherits from "),gn=a("a"),dl=r("PreTrainedModel"),cl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pl=m(),so=a("p"),hl=r("This model is also a PyTorch "),ao=a("a"),ml=r("torch.nn.Module"),ul=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fl=m(),R=a("div"),k(io.$$.fragment),gl=m(),$e=a("p"),_l=r("The "),_n=a("a"),bl=r("MegatronBertForMaskedLM"),vl=r(" forward method, overrides the "),hr=a("code"),kl=r("__call__"),Ml=r(" special method."),wl=m(),k(Xe.$$.fragment),$l=m(),k(Ze.$$.fragment),Tl=m(),k(et.$$.fragment),qs=m(),Te=a("h2"),tt=a("a"),mr=a("span"),k(lo.$$.fragment),yl=m(),ur=a("span"),Bl=r("MegatronBertForCausalLM"),Cs=m(),S=a("div"),k(co.$$.fragment),Fl=m(),po=a("p"),zl=r("MegatronBert Model with a "),fr=a("code"),xl=r("language modeling"),Pl=r(" head on top for CLM fine-tuning."),ql=m(),ho=a("p"),Cl=r("This model inherits from "),bn=a("a"),El=r("PreTrainedModel"),jl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Al=m(),mo=a("p"),Sl=r("This model is also a PyTorch "),uo=a("a"),Nl=r("torch.nn.Module"),Ll=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Il=m(),Y=a("div"),k(fo.$$.fragment),Ol=m(),ye=a("p"),Dl=r("The "),vn=a("a"),Wl=r("MegatronBertForCausalLM"),Rl=r(" forward method, overrides the "),gr=a("code"),Hl=r("__call__"),Ul=r(" special method."),Ql=m(),k(ot.$$.fragment),Vl=m(),k(nt.$$.fragment),Es=m(),Be=a("h2"),rt=a("a"),_r=a("span"),k(go.$$.fragment),Gl=m(),br=a("span"),Jl=r("MegatronBertForNextSentencePrediction"),js=m(),N=a("div"),k(_o.$$.fragment),Kl=m(),bo=a("p"),Yl=r("MegatronBert Model with a "),vr=a("code"),Xl=r("next sentence prediction (classification)"),Zl=r(" head on top."),ed=m(),vo=a("p"),td=r("This model inherits from "),kn=a("a"),od=r("PreTrainedModel"),nd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rd=m(),ko=a("p"),sd=r("This model is also a PyTorch "),Mo=a("a"),ad=r("torch.nn.Module"),id=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ld=m(),X=a("div"),k(wo.$$.fragment),dd=m(),Fe=a("p"),cd=r("The "),Mn=a("a"),pd=r("MegatronBertForNextSentencePrediction"),hd=r(" forward method, overrides the "),kr=a("code"),md=r("__call__"),ud=r(" special method."),fd=m(),k(st.$$.fragment),gd=m(),k(at.$$.fragment),As=m(),ze=a("h2"),it=a("a"),Mr=a("span"),k($o.$$.fragment),_d=m(),wr=a("span"),bd=r("MegatronBertForPreTraining"),Ss=m(),L=a("div"),k(To.$$.fragment),vd=m(),xe=a("p"),kd=r("MegatronBert Model with two heads on top as done during the pretraining: a "),$r=a("code"),Md=r("masked language modeling"),wd=r(` head and a
`),Tr=a("code"),$d=r("next sentence prediction (classification)"),Td=r(" head."),yd=m(),yo=a("p"),Bd=r("This model inherits from "),wn=a("a"),Fd=r("PreTrainedModel"),zd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd=m(),Bo=a("p"),Pd=r("This model is also a PyTorch "),Fo=a("a"),qd=r("torch.nn.Module"),Cd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ed=m(),Z=a("div"),k(zo.$$.fragment),jd=m(),Pe=a("p"),Ad=r("The "),$n=a("a"),Sd=r("MegatronBertForPreTraining"),Nd=r(" forward method, overrides the "),yr=a("code"),Ld=r("__call__"),Id=r(" special method."),Od=m(),k(lt.$$.fragment),Dd=m(),k(dt.$$.fragment),Ns=m(),qe=a("h2"),ct=a("a"),Br=a("span"),k(xo.$$.fragment),Wd=m(),Fr=a("span"),Rd=r("MegatronBertForSequenceClassification"),Ls=m(),I=a("div"),k(Po.$$.fragment),Hd=m(),zr=a("p"),Ud=r(`MegatronBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Qd=m(),qo=a("p"),Vd=r("This model inherits from "),Tn=a("a"),Gd=r("PreTrainedModel"),Jd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kd=m(),Co=a("p"),Yd=r("This model is also a PyTorch "),Eo=a("a"),Xd=r("torch.nn.Module"),Zd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ec=m(),q=a("div"),k(jo.$$.fragment),tc=m(),Ce=a("p"),oc=r("The "),yn=a("a"),nc=r("MegatronBertForSequenceClassification"),rc=r(" forward method, overrides the "),xr=a("code"),sc=r("__call__"),ac=r(" special method."),ic=m(),k(pt.$$.fragment),lc=m(),k(ht.$$.fragment),dc=m(),k(mt.$$.fragment),cc=m(),k(ut.$$.fragment),pc=m(),k(ft.$$.fragment),Is=m(),Ee=a("h2"),gt=a("a"),Pr=a("span"),k(Ao.$$.fragment),hc=m(),qr=a("span"),mc=r("MegatronBertForMultipleChoice"),Os=m(),O=a("div"),k(So.$$.fragment),uc=m(),Cr=a("p"),fc=r(`MegatronBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output
and a softmax) e.g. for RocStories/SWAG tasks.`),gc=m(),No=a("p"),_c=r("This model inherits from "),Bn=a("a"),bc=r("PreTrainedModel"),vc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kc=m(),Lo=a("p"),Mc=r("This model is also a PyTorch "),Io=a("a"),wc=r("torch.nn.Module"),$c=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc=m(),ee=a("div"),k(Oo.$$.fragment),yc=m(),je=a("p"),Bc=r("The "),Fn=a("a"),Fc=r("MegatronBertForMultipleChoice"),zc=r(" forward method, overrides the "),Er=a("code"),xc=r("__call__"),Pc=r(" special method."),qc=m(),k(_t.$$.fragment),Cc=m(),k(bt.$$.fragment),Ds=m(),Ae=a("h2"),vt=a("a"),jr=a("span"),k(Do.$$.fragment),Ec=m(),Ar=a("span"),jc=r("MegatronBertForTokenClassification"),Ws=m(),D=a("div"),k(Wo.$$.fragment),Ac=m(),Sr=a("p"),Sc=r(`MegatronBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Nc=m(),Ro=a("p"),Lc=r("This model inherits from "),zn=a("a"),Ic=r("PreTrainedModel"),Oc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dc=m(),Ho=a("p"),Wc=r("This model is also a PyTorch "),Uo=a("a"),Rc=r("torch.nn.Module"),Hc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uc=m(),H=a("div"),k(Qo.$$.fragment),Qc=m(),Se=a("p"),Vc=r("The "),xn=a("a"),Gc=r("MegatronBertForTokenClassification"),Jc=r(" forward method, overrides the "),Nr=a("code"),Kc=r("__call__"),Yc=r(" special method."),Xc=m(),k(kt.$$.fragment),Zc=m(),k(Mt.$$.fragment),ep=m(),k(wt.$$.fragment),Rs=m(),Ne=a("h2"),$t=a("a"),Lr=a("span"),k(Vo.$$.fragment),tp=m(),Ir=a("span"),op=r("MegatronBertForQuestionAnswering"),Hs=m(),W=a("div"),k(Go.$$.fragment),np=m(),Le=a("p"),rp=r(`MegatronBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Or=a("code"),sp=r("span start logits"),ap=r(" and "),Dr=a("code"),ip=r("span end logits"),lp=r(")."),dp=m(),Jo=a("p"),cp=r("This model inherits from "),Pn=a("a"),pp=r("PreTrainedModel"),hp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp=m(),Ko=a("p"),up=r("This model is also a PyTorch "),Yo=a("a"),fp=r("torch.nn.Module"),gp=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_p=m(),U=a("div"),k(Xo.$$.fragment),bp=m(),Ie=a("p"),vp=r("The "),qn=a("a"),kp=r("MegatronBertForQuestionAnswering"),Mp=r(" forward method, overrides the "),Wr=a("code"),wp=r("__call__"),$p=r(" special method."),Tp=m(),k(Tt.$$.fragment),yp=m(),k(yt.$$.fragment),Bp=m(),k(Bt.$$.fragment),this.h()},l(t){const f=mm('[data-svelte="svelte-1phssyn"]',document.head);d=i(f,"META",{name:!0,content:!0}),f.forEach(o),_=u(t),c=i(t,"H1",{class:!0});var Zo=l(c);h=i(Zo,"A",{id:!0,class:!0,href:!0});var Rr=l(h);v=i(Rr,"SPAN",{});var Hr=l(v);M(n.$$.fragment,Hr),Hr.forEach(o),Rr.forEach(o),p=u(Zo),F=i(Zo,"SPAN",{});var Ur=l(F);Ta=s(Ur,"MegatronBERT"),Ur.forEach(o),Zo.forEach(o),ls=u(t),ge=i(t,"H2",{class:!0});var en=l(ge);Re=i(en,"A",{id:!0,class:!0,href:!0});var Qr=l(Re);Qn=i(Qr,"SPAN",{});var Vr=l(Qn);M(Et.$$.fragment,Vr),Vr.forEach(o),Qr.forEach(o),ya=u(en),Vn=i(en,"SPAN",{});var Gr=l(Vn);Ba=s(Gr,"Overview"),Gr.forEach(o),en.forEach(o),ds=u(t),He=i(t,"P",{});var tn=l(He);Fa=s(tn,"The MegatronBERT model was proposed in "),jt=i(tn,"A",{href:!0,rel:!0});var Jr=l(jt);za=s(Jr,`Megatron-LM: Training Multi-Billion Parameter Language Models Using Model
Parallelism`),Jr.forEach(o),xa=s(tn,` by Mohammad Shoeybi, Mostofa Patwary, Raul Puri, Patrick LeGresley,
Jared Casper and Bryan Catanzaro.`),tn.forEach(o),cs=u(t),nn=i(t,"P",{});var Kr=l(nn);Pa=s(Kr,"The abstract from the paper is the following:"),Kr.forEach(o),ps=u(t),rn=i(t,"P",{});var Yr=l(rn);Gn=i(Yr,"EM",{});var Xr=l(Gn);qa=s(Xr,`Recent work in language modeling demonstrates that training large transformer models advances the state of the art in
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
of 89.4%).`),Xr.forEach(o),Yr.forEach(o),hs=u(t),sn=i(t,"P",{});var Zr=l(sn);Ca=s(Zr,"Tips:"),Zr.forEach(o),ms=u(t),Ue=i(t,"P",{});var on=l(Ue);Ea=s(on,"We have provided pretrained "),At=i(on,"A",{href:!0,rel:!0});var es=l(At);ja=s(es,"BERT-345M"),es.forEach(o),Aa=s(on,` checkpoints
for use to evaluate or finetuning downstream tasks.`),on.forEach(o),us=u(t),oe=i(t,"P",{});var Oe=l(oe);Sa=s(Oe,"To access these checkpoints, first "),St=i(Oe,"A",{href:!0,rel:!0});var ts=l(St);Na=s(ts,"sign up"),ts.forEach(o),La=s(Oe,` for and setup the NVIDIA GPU Cloud (NGC)
Registry CLI. Further documentation for downloading models can be found in the `),Nt=i(Oe,"A",{href:!0,rel:!0});var os=l(Nt);Ia=s(os,"NGC documentation"),os.forEach(o),Oa=s(Oe,"."),Oe.forEach(o),fs=u(t),an=i(t,"P",{});var ns=l(an);Da=s(ns,"Alternatively, you can directly download the checkpoints using:"),ns.forEach(o),gs=u(t),ln=i(t,"P",{});var rs=l(ln);Wa=s(rs,"BERT-345M-uncased:"),rs.forEach(o),_s=u(t),M(Lt.$$.fragment,t),bs=u(t),dn=i(t,"P",{});var ss=l(dn);Ra=s(ss,"BERT-345M-cased:"),ss.forEach(o),vs=u(t),M(It.$$.fragment,t),ks=u(t),cn=i(t,"P",{});var as=l(cn);Ha=s(as,`Once you have obtained the checkpoints from NVIDIA GPU Cloud (NGC), you have to convert them to a format that will
easily be loaded by Hugging Face Transformers and our port of the BERT code.`),as.forEach(o),Ms=u(t),ne=i(t,"P",{});var De=l(ne);Ua=s(De,"The following commands allow you to do the conversion. We assume that the folder "),Jn=i(De,"CODE",{});var is=l(Jn);Qa=s(is,"models/megatron_bert"),is.forEach(o),Va=s(De,` contains
`),Kn=i(De,"CODE",{});var Fp=l(Kn);Ga=s(Fp,"megatron_bert_345m_v0_1_{cased, uncased}.zip"),Fp.forEach(o),Ja=s(De," and that the commands are run from inside that folder:"),De.forEach(o),ws=u(t),M(Ot.$$.fragment,t),$s=u(t),M(Dt.$$.fragment,t),Ts=u(t),re=i(t,"P",{});var Cn=l(re);Ka=s(Cn,"This model was contributed by "),Wt=i(Cn,"A",{href:!0,rel:!0});var zp=l(Wt);Ya=s(zp,"jdemouth"),zp.forEach(o),Xa=s(Cn,". The original code can be found "),Rt=i(Cn,"A",{href:!0,rel:!0});var xp=l(Rt);Za=s(xp,"here"),xp.forEach(o),ei=s(Cn,`. That repository contains a multi-GPU and multi-node implementation of the
Megatron Language models. In particular, it contains a hybrid model parallel approach using \u201Ctensor parallel\u201D and
\u201Cpipeline parallel\u201D techniques.`),Cn.forEach(o),ys=u(t),_e=i(t,"H2",{class:!0});var Qs=l(_e);Qe=i(Qs,"A",{id:!0,class:!0,href:!0});var Pp=l(Qe);Yn=i(Pp,"SPAN",{});var qp=l(Yn);M(Ht.$$.fragment,qp),qp.forEach(o),Pp.forEach(o),ti=u(Qs),Xn=i(Qs,"SPAN",{});var Cp=l(Xn);oi=s(Cp,"MegatronBertConfig"),Cp.forEach(o),Qs.forEach(o),Bs=u(t),J=i(t,"DIV",{class:!0});var Ft=l(J);M(Ut.$$.fragment,Ft),ni=u(Ft),be=i(Ft,"P",{});var En=l(be);ri=s(En,"This is the configuration class to store the configuration of a "),pn=i(En,"A",{href:!0});var Ep=l(pn);si=s(Ep,"MegatronBertModel"),Ep.forEach(o),ai=s(En,`. It is used to instantiate a
MEGATRON_BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MEGATRON_BERT
`),Qt=i(En,"A",{href:!0,rel:!0});var jp=l(Qt);ii=s(jp,"megatron-bert-uncased-345m"),jp.forEach(o),li=s(En," architecture."),En.forEach(o),di=u(Ft),ve=i(Ft,"P",{});var jn=l(ve);ci=s(jn,"Configuration objects inherit from "),hn=i(jn,"A",{href:!0});var Ap=l(hn);pi=s(Ap,"PretrainedConfig"),Ap.forEach(o),hi=s(jn,` and can be used to control the model outputs. Read the
documentation from `),mn=i(jn,"A",{href:!0});var Sp=l(mn);mi=s(Sp,"PretrainedConfig"),Sp.forEach(o),ui=s(jn," for more information."),jn.forEach(o),fi=u(Ft),M(Ve.$$.fragment,Ft),Ft.forEach(o),Fs=u(t),ke=i(t,"H2",{class:!0});var Vs=l(ke);Ge=i(Vs,"A",{id:!0,class:!0,href:!0});var Np=l(Ge);Zn=i(Np,"SPAN",{});var Lp=l(Zn);M(Vt.$$.fragment,Lp),Lp.forEach(o),Np.forEach(o),gi=u(Vs),er=i(Vs,"SPAN",{});var Ip=l(er);_i=s(Ip,"MegatronBertModel"),Ip.forEach(o),Vs.forEach(o),zs=u(t),x=i(t,"DIV",{class:!0});var Q=l(x);M(Gt.$$.fragment,Q),bi=u(Q),tr=i(Q,"P",{});var Op=l(tr);vi=s(Op,"The bare MegatronBert Model transformer outputting raw hidden-states without any specific head on top."),Op.forEach(o),ki=u(Q),Jt=i(Q,"P",{});var Gs=l(Jt);Mi=s(Gs,"This model inherits from "),un=i(Gs,"A",{href:!0});var Dp=l(un);wi=s(Dp,"PreTrainedModel"),Dp.forEach(o),$i=s(Gs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gs.forEach(o),Ti=u(Q),Kt=i(Q,"P",{});var Js=l(Kt);yi=s(Js,"This model is also a PyTorch "),Yt=i(Js,"A",{href:!0,rel:!0});var Wp=l(Yt);Bi=s(Wp,"torch.nn.Module"),Wp.forEach(o),Fi=s(Js,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Js.forEach(o),zi=u(Q),Xt=i(Q,"P",{});var Ks=l(Xt);xi=s(Ks,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Zt=i(Ks,"A",{href:!0,rel:!0});var Rp=l(Zt);Pi=s(Rp,`Attention is
all you need`),Rp.forEach(o),qi=s(Ks,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ks.forEach(o),Ci=u(Q),C=i(Q,"P",{});var V=l(C);Ei=s(V,"To behave as an decoder the model needs to be initialized with the "),or=i(V,"CODE",{});var Hp=l(or);ji=s(Hp,"is_decoder"),Hp.forEach(o),Ai=s(V,` argument of the configuration set
to `),nr=i(V,"CODE",{});var Up=l(nr);Si=s(Up,"True"),Up.forEach(o),Ni=s(V,". To be used in a Seq2Seq model, the model needs to initialized with both "),rr=i(V,"CODE",{});var Qp=l(rr);Li=s(Qp,"is_decoder"),Qp.forEach(o),Ii=s(V,` argument and
`),sr=i(V,"CODE",{});var Vp=l(sr);Oi=s(Vp,"add_cross_attention"),Vp.forEach(o),Di=s(V," set to "),ar=i(V,"CODE",{});var Gp=l(ar);Wi=s(Gp,"True"),Gp.forEach(o),Ri=s(V,"; an "),ir=i(V,"CODE",{});var Jp=l(ir);Hi=s(Jp,"encoder_hidden_states"),Jp.forEach(o),Ui=s(V," is then expected as an input to the forward pass."),V.forEach(o),Qi=u(Q),K=i(Q,"DIV",{class:!0});var zt=l(K);M(eo.$$.fragment,zt),Vi=u(zt),Me=i(zt,"P",{});var An=l(Me);Gi=s(An,"The "),fn=i(An,"A",{href:!0});var Kp=l(fn);Ji=s(Kp,"MegatronBertModel"),Kp.forEach(o),Ki=s(An," forward method, overrides the "),lr=i(An,"CODE",{});var Yp=l(lr);Yi=s(Yp,"__call__"),Yp.forEach(o),Xi=s(An," special method."),An.forEach(o),Zi=u(zt),M(Je.$$.fragment,zt),el=u(zt),M(Ke.$$.fragment,zt),zt.forEach(o),Q.forEach(o),xs=u(t),we=i(t,"H2",{class:!0});var Ys=l(we);Ye=i(Ys,"A",{id:!0,class:!0,href:!0});var Xp=l(Ye);dr=i(Xp,"SPAN",{});var Zp=l(dr);M(to.$$.fragment,Zp),Zp.forEach(o),Xp.forEach(o),tl=u(Ys),cr=i(Ys,"SPAN",{});var eh=l(cr);ol=s(eh,"MegatronBertForMaskedLM"),eh.forEach(o),Ys.forEach(o),Ps=u(t),A=i(t,"DIV",{class:!0});var se=l(A);M(oo.$$.fragment,se),nl=u(se),no=i(se,"P",{});var Xs=l(no);rl=s(Xs,"MegatronBert Model with a "),pr=i(Xs,"CODE",{});var th=l(pr);sl=s(th,"language modeling"),th.forEach(o),al=s(Xs," head on top."),Xs.forEach(o),il=u(se),ro=i(se,"P",{});var Zs=l(ro);ll=s(Zs,"This model inherits from "),gn=i(Zs,"A",{href:!0});var oh=l(gn);dl=s(oh,"PreTrainedModel"),oh.forEach(o),cl=s(Zs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zs.forEach(o),pl=u(se),so=i(se,"P",{});var ea=l(so);hl=s(ea,"This model is also a PyTorch "),ao=i(ea,"A",{href:!0,rel:!0});var nh=l(ao);ml=s(nh,"torch.nn.Module"),nh.forEach(o),ul=s(ea,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ea.forEach(o),fl=u(se),R=i(se,"DIV",{class:!0});var ae=l(R);M(io.$$.fragment,ae),gl=u(ae),$e=i(ae,"P",{});var Sn=l($e);_l=s(Sn,"The "),_n=i(Sn,"A",{href:!0});var rh=l(_n);bl=s(rh,"MegatronBertForMaskedLM"),rh.forEach(o),vl=s(Sn," forward method, overrides the "),hr=i(Sn,"CODE",{});var sh=l(hr);kl=s(sh,"__call__"),sh.forEach(o),Ml=s(Sn," special method."),Sn.forEach(o),wl=u(ae),M(Xe.$$.fragment,ae),$l=u(ae),M(Ze.$$.fragment,ae),Tl=u(ae),M(et.$$.fragment,ae),ae.forEach(o),se.forEach(o),qs=u(t),Te=i(t,"H2",{class:!0});var ta=l(Te);tt=i(ta,"A",{id:!0,class:!0,href:!0});var ah=l(tt);mr=i(ah,"SPAN",{});var ih=l(mr);M(lo.$$.fragment,ih),ih.forEach(o),ah.forEach(o),yl=u(ta),ur=i(ta,"SPAN",{});var lh=l(ur);Bl=s(lh,"MegatronBertForCausalLM"),lh.forEach(o),ta.forEach(o),Cs=u(t),S=i(t,"DIV",{class:!0});var ie=l(S);M(co.$$.fragment,ie),Fl=u(ie),po=i(ie,"P",{});var oa=l(po);zl=s(oa,"MegatronBert Model with a "),fr=i(oa,"CODE",{});var dh=l(fr);xl=s(dh,"language modeling"),dh.forEach(o),Pl=s(oa," head on top for CLM fine-tuning."),oa.forEach(o),ql=u(ie),ho=i(ie,"P",{});var na=l(ho);Cl=s(na,"This model inherits from "),bn=i(na,"A",{href:!0});var ch=l(bn);El=s(ch,"PreTrainedModel"),ch.forEach(o),jl=s(na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),na.forEach(o),Al=u(ie),mo=i(ie,"P",{});var ra=l(mo);Sl=s(ra,"This model is also a PyTorch "),uo=i(ra,"A",{href:!0,rel:!0});var ph=l(uo);Nl=s(ph,"torch.nn.Module"),ph.forEach(o),Ll=s(ra,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ra.forEach(o),Il=u(ie),Y=i(ie,"DIV",{class:!0});var xt=l(Y);M(fo.$$.fragment,xt),Ol=u(xt),ye=i(xt,"P",{});var Nn=l(ye);Dl=s(Nn,"The "),vn=i(Nn,"A",{href:!0});var hh=l(vn);Wl=s(hh,"MegatronBertForCausalLM"),hh.forEach(o),Rl=s(Nn," forward method, overrides the "),gr=i(Nn,"CODE",{});var mh=l(gr);Hl=s(mh,"__call__"),mh.forEach(o),Ul=s(Nn," special method."),Nn.forEach(o),Ql=u(xt),M(ot.$$.fragment,xt),Vl=u(xt),M(nt.$$.fragment,xt),xt.forEach(o),ie.forEach(o),Es=u(t),Be=i(t,"H2",{class:!0});var sa=l(Be);rt=i(sa,"A",{id:!0,class:!0,href:!0});var uh=l(rt);_r=i(uh,"SPAN",{});var fh=l(_r);M(go.$$.fragment,fh),fh.forEach(o),uh.forEach(o),Gl=u(sa),br=i(sa,"SPAN",{});var gh=l(br);Jl=s(gh,"MegatronBertForNextSentencePrediction"),gh.forEach(o),sa.forEach(o),js=u(t),N=i(t,"DIV",{class:!0});var le=l(N);M(_o.$$.fragment,le),Kl=u(le),bo=i(le,"P",{});var aa=l(bo);Yl=s(aa,"MegatronBert Model with a "),vr=i(aa,"CODE",{});var _h=l(vr);Xl=s(_h,"next sentence prediction (classification)"),_h.forEach(o),Zl=s(aa," head on top."),aa.forEach(o),ed=u(le),vo=i(le,"P",{});var ia=l(vo);td=s(ia,"This model inherits from "),kn=i(ia,"A",{href:!0});var bh=l(kn);od=s(bh,"PreTrainedModel"),bh.forEach(o),nd=s(ia,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ia.forEach(o),rd=u(le),ko=i(le,"P",{});var la=l(ko);sd=s(la,"This model is also a PyTorch "),Mo=i(la,"A",{href:!0,rel:!0});var vh=l(Mo);ad=s(vh,"torch.nn.Module"),vh.forEach(o),id=s(la,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),la.forEach(o),ld=u(le),X=i(le,"DIV",{class:!0});var Pt=l(X);M(wo.$$.fragment,Pt),dd=u(Pt),Fe=i(Pt,"P",{});var Ln=l(Fe);cd=s(Ln,"The "),Mn=i(Ln,"A",{href:!0});var kh=l(Mn);pd=s(kh,"MegatronBertForNextSentencePrediction"),kh.forEach(o),hd=s(Ln," forward method, overrides the "),kr=i(Ln,"CODE",{});var Mh=l(kr);md=s(Mh,"__call__"),Mh.forEach(o),ud=s(Ln," special method."),Ln.forEach(o),fd=u(Pt),M(st.$$.fragment,Pt),gd=u(Pt),M(at.$$.fragment,Pt),Pt.forEach(o),le.forEach(o),As=u(t),ze=i(t,"H2",{class:!0});var da=l(ze);it=i(da,"A",{id:!0,class:!0,href:!0});var wh=l(it);Mr=i(wh,"SPAN",{});var $h=l(Mr);M($o.$$.fragment,$h),$h.forEach(o),wh.forEach(o),_d=u(da),wr=i(da,"SPAN",{});var Th=l(wr);bd=s(Th,"MegatronBertForPreTraining"),Th.forEach(o),da.forEach(o),Ss=u(t),L=i(t,"DIV",{class:!0});var de=l(L);M(To.$$.fragment,de),vd=u(de),xe=i(de,"P",{});var In=l(xe);kd=s(In,"MegatronBert Model with two heads on top as done during the pretraining: a "),$r=i(In,"CODE",{});var yh=l($r);Md=s(yh,"masked language modeling"),yh.forEach(o),wd=s(In,` head and a
`),Tr=i(In,"CODE",{});var Bh=l(Tr);$d=s(Bh,"next sentence prediction (classification)"),Bh.forEach(o),Td=s(In," head."),In.forEach(o),yd=u(de),yo=i(de,"P",{});var ca=l(yo);Bd=s(ca,"This model inherits from "),wn=i(ca,"A",{href:!0});var Fh=l(wn);Fd=s(Fh,"PreTrainedModel"),Fh.forEach(o),zd=s(ca,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ca.forEach(o),xd=u(de),Bo=i(de,"P",{});var pa=l(Bo);Pd=s(pa,"This model is also a PyTorch "),Fo=i(pa,"A",{href:!0,rel:!0});var zh=l(Fo);qd=s(zh,"torch.nn.Module"),zh.forEach(o),Cd=s(pa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pa.forEach(o),Ed=u(de),Z=i(de,"DIV",{class:!0});var qt=l(Z);M(zo.$$.fragment,qt),jd=u(qt),Pe=i(qt,"P",{});var On=l(Pe);Ad=s(On,"The "),$n=i(On,"A",{href:!0});var xh=l($n);Sd=s(xh,"MegatronBertForPreTraining"),xh.forEach(o),Nd=s(On," forward method, overrides the "),yr=i(On,"CODE",{});var Ph=l(yr);Ld=s(Ph,"__call__"),Ph.forEach(o),Id=s(On," special method."),On.forEach(o),Od=u(qt),M(lt.$$.fragment,qt),Dd=u(qt),M(dt.$$.fragment,qt),qt.forEach(o),de.forEach(o),Ns=u(t),qe=i(t,"H2",{class:!0});var ha=l(qe);ct=i(ha,"A",{id:!0,class:!0,href:!0});var qh=l(ct);Br=i(qh,"SPAN",{});var Ch=l(Br);M(xo.$$.fragment,Ch),Ch.forEach(o),qh.forEach(o),Wd=u(ha),Fr=i(ha,"SPAN",{});var Eh=l(Fr);Rd=s(Eh,"MegatronBertForSequenceClassification"),Eh.forEach(o),ha.forEach(o),Ls=u(t),I=i(t,"DIV",{class:!0});var ce=l(I);M(Po.$$.fragment,ce),Hd=u(ce),zr=i(ce,"P",{});var jh=l(zr);Ud=s(jh,`MegatronBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),jh.forEach(o),Qd=u(ce),qo=i(ce,"P",{});var ma=l(qo);Vd=s(ma,"This model inherits from "),Tn=i(ma,"A",{href:!0});var Ah=l(Tn);Gd=s(Ah,"PreTrainedModel"),Ah.forEach(o),Jd=s(ma,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ma.forEach(o),Kd=u(ce),Co=i(ce,"P",{});var ua=l(Co);Yd=s(ua,"This model is also a PyTorch "),Eo=i(ua,"A",{href:!0,rel:!0});var Sh=l(Eo);Xd=s(Sh,"torch.nn.Module"),Sh.forEach(o),Zd=s(ua,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ua.forEach(o),ec=u(ce),q=i(ce,"DIV",{class:!0});var G=l(q);M(jo.$$.fragment,G),tc=u(G),Ce=i(G,"P",{});var Dn=l(Ce);oc=s(Dn,"The "),yn=i(Dn,"A",{href:!0});var Nh=l(yn);nc=s(Nh,"MegatronBertForSequenceClassification"),Nh.forEach(o),rc=s(Dn," forward method, overrides the "),xr=i(Dn,"CODE",{});var Lh=l(xr);sc=s(Lh,"__call__"),Lh.forEach(o),ac=s(Dn," special method."),Dn.forEach(o),ic=u(G),M(pt.$$.fragment,G),lc=u(G),M(ht.$$.fragment,G),dc=u(G),M(mt.$$.fragment,G),cc=u(G),M(ut.$$.fragment,G),pc=u(G),M(ft.$$.fragment,G),G.forEach(o),ce.forEach(o),Is=u(t),Ee=i(t,"H2",{class:!0});var fa=l(Ee);gt=i(fa,"A",{id:!0,class:!0,href:!0});var Ih=l(gt);Pr=i(Ih,"SPAN",{});var Oh=l(Pr);M(Ao.$$.fragment,Oh),Oh.forEach(o),Ih.forEach(o),hc=u(fa),qr=i(fa,"SPAN",{});var Dh=l(qr);mc=s(Dh,"MegatronBertForMultipleChoice"),Dh.forEach(o),fa.forEach(o),Os=u(t),O=i(t,"DIV",{class:!0});var pe=l(O);M(So.$$.fragment,pe),uc=u(pe),Cr=i(pe,"P",{});var Wh=l(Cr);fc=s(Wh,`MegatronBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output
and a softmax) e.g. for RocStories/SWAG tasks.`),Wh.forEach(o),gc=u(pe),No=i(pe,"P",{});var ga=l(No);_c=s(ga,"This model inherits from "),Bn=i(ga,"A",{href:!0});var Rh=l(Bn);bc=s(Rh,"PreTrainedModel"),Rh.forEach(o),vc=s(ga,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ga.forEach(o),kc=u(pe),Lo=i(pe,"P",{});var _a=l(Lo);Mc=s(_a,"This model is also a PyTorch "),Io=i(_a,"A",{href:!0,rel:!0});var Hh=l(Io);wc=s(Hh,"torch.nn.Module"),Hh.forEach(o),$c=s(_a,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_a.forEach(o),Tc=u(pe),ee=i(pe,"DIV",{class:!0});var Ct=l(ee);M(Oo.$$.fragment,Ct),yc=u(Ct),je=i(Ct,"P",{});var Wn=l(je);Bc=s(Wn,"The "),Fn=i(Wn,"A",{href:!0});var Uh=l(Fn);Fc=s(Uh,"MegatronBertForMultipleChoice"),Uh.forEach(o),zc=s(Wn," forward method, overrides the "),Er=i(Wn,"CODE",{});var Qh=l(Er);xc=s(Qh,"__call__"),Qh.forEach(o),Pc=s(Wn," special method."),Wn.forEach(o),qc=u(Ct),M(_t.$$.fragment,Ct),Cc=u(Ct),M(bt.$$.fragment,Ct),Ct.forEach(o),pe.forEach(o),Ds=u(t),Ae=i(t,"H2",{class:!0});var ba=l(Ae);vt=i(ba,"A",{id:!0,class:!0,href:!0});var Vh=l(vt);jr=i(Vh,"SPAN",{});var Gh=l(jr);M(Do.$$.fragment,Gh),Gh.forEach(o),Vh.forEach(o),Ec=u(ba),Ar=i(ba,"SPAN",{});var Jh=l(Ar);jc=s(Jh,"MegatronBertForTokenClassification"),Jh.forEach(o),ba.forEach(o),Ws=u(t),D=i(t,"DIV",{class:!0});var he=l(D);M(Wo.$$.fragment,he),Ac=u(he),Sr=i(he,"P",{});var Kh=l(Sr);Sc=s(Kh,`MegatronBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Kh.forEach(o),Nc=u(he),Ro=i(he,"P",{});var va=l(Ro);Lc=s(va,"This model inherits from "),zn=i(va,"A",{href:!0});var Yh=l(zn);Ic=s(Yh,"PreTrainedModel"),Yh.forEach(o),Oc=s(va,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),va.forEach(o),Dc=u(he),Ho=i(he,"P",{});var ka=l(Ho);Wc=s(ka,"This model is also a PyTorch "),Uo=i(ka,"A",{href:!0,rel:!0});var Xh=l(Uo);Rc=s(Xh,"torch.nn.Module"),Xh.forEach(o),Hc=s(ka,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ka.forEach(o),Uc=u(he),H=i(he,"DIV",{class:!0});var me=l(H);M(Qo.$$.fragment,me),Qc=u(me),Se=i(me,"P",{});var Rn=l(Se);Vc=s(Rn,"The "),xn=i(Rn,"A",{href:!0});var Zh=l(xn);Gc=s(Zh,"MegatronBertForTokenClassification"),Zh.forEach(o),Jc=s(Rn," forward method, overrides the "),Nr=i(Rn,"CODE",{});var em=l(Nr);Kc=s(em,"__call__"),em.forEach(o),Yc=s(Rn," special method."),Rn.forEach(o),Xc=u(me),M(kt.$$.fragment,me),Zc=u(me),M(Mt.$$.fragment,me),ep=u(me),M(wt.$$.fragment,me),me.forEach(o),he.forEach(o),Rs=u(t),Ne=i(t,"H2",{class:!0});var Ma=l(Ne);$t=i(Ma,"A",{id:!0,class:!0,href:!0});var tm=l($t);Lr=i(tm,"SPAN",{});var om=l(Lr);M(Vo.$$.fragment,om),om.forEach(o),tm.forEach(o),tp=u(Ma),Ir=i(Ma,"SPAN",{});var nm=l(Ir);op=s(nm,"MegatronBertForQuestionAnswering"),nm.forEach(o),Ma.forEach(o),Hs=u(t),W=i(t,"DIV",{class:!0});var ue=l(W);M(Go.$$.fragment,ue),np=u(ue),Le=i(ue,"P",{});var Hn=l(Le);rp=s(Hn,`MegatronBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Or=i(Hn,"CODE",{});var rm=l(Or);sp=s(rm,"span start logits"),rm.forEach(o),ap=s(Hn," and "),Dr=i(Hn,"CODE",{});var sm=l(Dr);ip=s(sm,"span end logits"),sm.forEach(o),lp=s(Hn,")."),Hn.forEach(o),dp=u(ue),Jo=i(ue,"P",{});var wa=l(Jo);cp=s(wa,"This model inherits from "),Pn=i(wa,"A",{href:!0});var am=l(Pn);pp=s(am,"PreTrainedModel"),am.forEach(o),hp=s(wa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wa.forEach(o),mp=u(ue),Ko=i(ue,"P",{});var $a=l(Ko);up=s($a,"This model is also a PyTorch "),Yo=i($a,"A",{href:!0,rel:!0});var im=l(Yo);fp=s(im,"torch.nn.Module"),im.forEach(o),gp=s($a,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$a.forEach(o),_p=u(ue),U=i(ue,"DIV",{class:!0});var fe=l(U);M(Xo.$$.fragment,fe),bp=u(fe),Ie=i(fe,"P",{});var Un=l(Ie);vp=s(Un,"The "),qn=i(Un,"A",{href:!0});var lm=l(qn);kp=s(lm,"MegatronBertForQuestionAnswering"),lm.forEach(o),Mp=s(Un," forward method, overrides the "),Wr=i(Un,"CODE",{});var dm=l(Wr);wp=s(dm,"__call__"),dm.forEach(o),$p=s(Un," special method."),Un.forEach(o),Tp=u(fe),M(Tt.$$.fragment,fe),yp=u(fe),M(yt.$$.fragment,fe),Bp=u(fe),M(Bt.$$.fragment,fe),fe.forEach(o),ue.forEach(o),this.h()},h(){g(d,"name","hf:doc:metadata"),g(d,"content",JSON.stringify(Dm)),g(h,"id","megatronbert"),g(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(h,"href","#megatronbert"),g(c,"class","relative group"),g(Re,"id","overview"),g(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Re,"href","#overview"),g(ge,"class","relative group"),g(jt,"href","https://arxiv.org/abs/1909.08053"),g(jt,"rel","nofollow"),g(At,"href","https://ngc.nvidia.com/catalog/models/nvidia:megatron_bert_345m"),g(At,"rel","nofollow"),g(St,"href","https://ngc.nvidia.com/signup"),g(St,"rel","nofollow"),g(Nt,"href","https://docs.nvidia.com/dgx/ngc-registry-cli-user-guide/index.html#topic_6_4_1"),g(Nt,"rel","nofollow"),g(Wt,"href","https://huggingface.co/jdemouth"),g(Wt,"rel","nofollow"),g(Rt,"href","https://github.com/NVIDIA/Megatron-LM"),g(Rt,"rel","nofollow"),g(Qe,"id","transformers.MegatronBertConfig"),g(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Qe,"href","#transformers.MegatronBertConfig"),g(_e,"class","relative group"),g(pn,"href","/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertModel"),g(Qt,"href","https://huggingface.co/nvidia/megatron-bert-uncased-345m"),g(Qt,"rel","nofollow"),g(hn,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),g(mn,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),g(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ge,"id","transformers.MegatronBertModel"),g(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ge,"href","#transformers.MegatronBertModel"),g(ke,"class","relative group"),g(un,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),g(Yt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Yt,"rel","nofollow"),g(Zt,"href","https://arxiv.org/abs/1706.03762"),g(Zt,"rel","nofollow"),g(fn,"href","/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertModel"),g(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ye,"id","transformers.MegatronBertForMaskedLM"),g(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ye,"href","#transformers.MegatronBertForMaskedLM"),g(we,"class","relative group"),g(gn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),g(ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ao,"rel","nofollow"),g(_n,"href","/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertForMaskedLM"),g(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(tt,"id","transformers.MegatronBertForCausalLM"),g(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(tt,"href","#transformers.MegatronBertForCausalLM"),g(Te,"class","relative group"),g(bn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),g(uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(uo,"rel","nofollow"),g(vn,"href","/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertForCausalLM"),g(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(rt,"id","transformers.MegatronBertForNextSentencePrediction"),g(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(rt,"href","#transformers.MegatronBertForNextSentencePrediction"),g(Be,"class","relative group"),g(kn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),g(Mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Mo,"rel","nofollow"),g(Mn,"href","/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertForNextSentencePrediction"),g(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"id","transformers.MegatronBertForPreTraining"),g(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(it,"href","#transformers.MegatronBertForPreTraining"),g(ze,"class","relative group"),g(wn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),g(Fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Fo,"rel","nofollow"),g($n,"href","/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertForPreTraining"),g(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ct,"id","transformers.MegatronBertForSequenceClassification"),g(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ct,"href","#transformers.MegatronBertForSequenceClassification"),g(qe,"class","relative group"),g(Tn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),g(Eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Eo,"rel","nofollow"),g(yn,"href","/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertForSequenceClassification"),g(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(gt,"id","transformers.MegatronBertForMultipleChoice"),g(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(gt,"href","#transformers.MegatronBertForMultipleChoice"),g(Ee,"class","relative group"),g(Bn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),g(Io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Io,"rel","nofollow"),g(Fn,"href","/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertForMultipleChoice"),g(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(vt,"id","transformers.MegatronBertForTokenClassification"),g(vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(vt,"href","#transformers.MegatronBertForTokenClassification"),g(Ae,"class","relative group"),g(zn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),g(Uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Uo,"rel","nofollow"),g(xn,"href","/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertForTokenClassification"),g(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g($t,"id","transformers.MegatronBertForQuestionAnswering"),g($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g($t,"href","#transformers.MegatronBertForQuestionAnswering"),g(Ne,"class","relative group"),g(Pn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),g(Yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Yo,"rel","nofollow"),g(qn,"href","/docs/transformers/v4.18.0/en/model_doc/megatron-bert#transformers.MegatronBertForQuestionAnswering"),g(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,d),b(t,_,f),b(t,c,f),e(c,h),e(h,v),w(n,v,null),e(c,p),e(c,F),e(F,Ta),b(t,ls,f),b(t,ge,f),e(ge,Re),e(Re,Qn),w(Et,Qn,null),e(ge,ya),e(ge,Vn),e(Vn,Ba),b(t,ds,f),b(t,He,f),e(He,Fa),e(He,jt),e(jt,za),e(He,xa),b(t,cs,f),b(t,nn,f),e(nn,Pa),b(t,ps,f),b(t,rn,f),e(rn,Gn),e(Gn,qa),b(t,hs,f),b(t,sn,f),e(sn,Ca),b(t,ms,f),b(t,Ue,f),e(Ue,Ea),e(Ue,At),e(At,ja),e(Ue,Aa),b(t,us,f),b(t,oe,f),e(oe,Sa),e(oe,St),e(St,Na),e(oe,La),e(oe,Nt),e(Nt,Ia),e(oe,Oa),b(t,fs,f),b(t,an,f),e(an,Da),b(t,gs,f),b(t,ln,f),e(ln,Wa),b(t,_s,f),w(Lt,t,f),b(t,bs,f),b(t,dn,f),e(dn,Ra),b(t,vs,f),w(It,t,f),b(t,ks,f),b(t,cn,f),e(cn,Ha),b(t,Ms,f),b(t,ne,f),e(ne,Ua),e(ne,Jn),e(Jn,Qa),e(ne,Va),e(ne,Kn),e(Kn,Ga),e(ne,Ja),b(t,ws,f),w(Ot,t,f),b(t,$s,f),w(Dt,t,f),b(t,Ts,f),b(t,re,f),e(re,Ka),e(re,Wt),e(Wt,Ya),e(re,Xa),e(re,Rt),e(Rt,Za),e(re,ei),b(t,ys,f),b(t,_e,f),e(_e,Qe),e(Qe,Yn),w(Ht,Yn,null),e(_e,ti),e(_e,Xn),e(Xn,oi),b(t,Bs,f),b(t,J,f),w(Ut,J,null),e(J,ni),e(J,be),e(be,ri),e(be,pn),e(pn,si),e(be,ai),e(be,Qt),e(Qt,ii),e(be,li),e(J,di),e(J,ve),e(ve,ci),e(ve,hn),e(hn,pi),e(ve,hi),e(ve,mn),e(mn,mi),e(ve,ui),e(J,fi),w(Ve,J,null),b(t,Fs,f),b(t,ke,f),e(ke,Ge),e(Ge,Zn),w(Vt,Zn,null),e(ke,gi),e(ke,er),e(er,_i),b(t,zs,f),b(t,x,f),w(Gt,x,null),e(x,bi),e(x,tr),e(tr,vi),e(x,ki),e(x,Jt),e(Jt,Mi),e(Jt,un),e(un,wi),e(Jt,$i),e(x,Ti),e(x,Kt),e(Kt,yi),e(Kt,Yt),e(Yt,Bi),e(Kt,Fi),e(x,zi),e(x,Xt),e(Xt,xi),e(Xt,Zt),e(Zt,Pi),e(Xt,qi),e(x,Ci),e(x,C),e(C,Ei),e(C,or),e(or,ji),e(C,Ai),e(C,nr),e(nr,Si),e(C,Ni),e(C,rr),e(rr,Li),e(C,Ii),e(C,sr),e(sr,Oi),e(C,Di),e(C,ar),e(ar,Wi),e(C,Ri),e(C,ir),e(ir,Hi),e(C,Ui),e(x,Qi),e(x,K),w(eo,K,null),e(K,Vi),e(K,Me),e(Me,Gi),e(Me,fn),e(fn,Ji),e(Me,Ki),e(Me,lr),e(lr,Yi),e(Me,Xi),e(K,Zi),w(Je,K,null),e(K,el),w(Ke,K,null),b(t,xs,f),b(t,we,f),e(we,Ye),e(Ye,dr),w(to,dr,null),e(we,tl),e(we,cr),e(cr,ol),b(t,Ps,f),b(t,A,f),w(oo,A,null),e(A,nl),e(A,no),e(no,rl),e(no,pr),e(pr,sl),e(no,al),e(A,il),e(A,ro),e(ro,ll),e(ro,gn),e(gn,dl),e(ro,cl),e(A,pl),e(A,so),e(so,hl),e(so,ao),e(ao,ml),e(so,ul),e(A,fl),e(A,R),w(io,R,null),e(R,gl),e(R,$e),e($e,_l),e($e,_n),e(_n,bl),e($e,vl),e($e,hr),e(hr,kl),e($e,Ml),e(R,wl),w(Xe,R,null),e(R,$l),w(Ze,R,null),e(R,Tl),w(et,R,null),b(t,qs,f),b(t,Te,f),e(Te,tt),e(tt,mr),w(lo,mr,null),e(Te,yl),e(Te,ur),e(ur,Bl),b(t,Cs,f),b(t,S,f),w(co,S,null),e(S,Fl),e(S,po),e(po,zl),e(po,fr),e(fr,xl),e(po,Pl),e(S,ql),e(S,ho),e(ho,Cl),e(ho,bn),e(bn,El),e(ho,jl),e(S,Al),e(S,mo),e(mo,Sl),e(mo,uo),e(uo,Nl),e(mo,Ll),e(S,Il),e(S,Y),w(fo,Y,null),e(Y,Ol),e(Y,ye),e(ye,Dl),e(ye,vn),e(vn,Wl),e(ye,Rl),e(ye,gr),e(gr,Hl),e(ye,Ul),e(Y,Ql),w(ot,Y,null),e(Y,Vl),w(nt,Y,null),b(t,Es,f),b(t,Be,f),e(Be,rt),e(rt,_r),w(go,_r,null),e(Be,Gl),e(Be,br),e(br,Jl),b(t,js,f),b(t,N,f),w(_o,N,null),e(N,Kl),e(N,bo),e(bo,Yl),e(bo,vr),e(vr,Xl),e(bo,Zl),e(N,ed),e(N,vo),e(vo,td),e(vo,kn),e(kn,od),e(vo,nd),e(N,rd),e(N,ko),e(ko,sd),e(ko,Mo),e(Mo,ad),e(ko,id),e(N,ld),e(N,X),w(wo,X,null),e(X,dd),e(X,Fe),e(Fe,cd),e(Fe,Mn),e(Mn,pd),e(Fe,hd),e(Fe,kr),e(kr,md),e(Fe,ud),e(X,fd),w(st,X,null),e(X,gd),w(at,X,null),b(t,As,f),b(t,ze,f),e(ze,it),e(it,Mr),w($o,Mr,null),e(ze,_d),e(ze,wr),e(wr,bd),b(t,Ss,f),b(t,L,f),w(To,L,null),e(L,vd),e(L,xe),e(xe,kd),e(xe,$r),e($r,Md),e(xe,wd),e(xe,Tr),e(Tr,$d),e(xe,Td),e(L,yd),e(L,yo),e(yo,Bd),e(yo,wn),e(wn,Fd),e(yo,zd),e(L,xd),e(L,Bo),e(Bo,Pd),e(Bo,Fo),e(Fo,qd),e(Bo,Cd),e(L,Ed),e(L,Z),w(zo,Z,null),e(Z,jd),e(Z,Pe),e(Pe,Ad),e(Pe,$n),e($n,Sd),e(Pe,Nd),e(Pe,yr),e(yr,Ld),e(Pe,Id),e(Z,Od),w(lt,Z,null),e(Z,Dd),w(dt,Z,null),b(t,Ns,f),b(t,qe,f),e(qe,ct),e(ct,Br),w(xo,Br,null),e(qe,Wd),e(qe,Fr),e(Fr,Rd),b(t,Ls,f),b(t,I,f),w(Po,I,null),e(I,Hd),e(I,zr),e(zr,Ud),e(I,Qd),e(I,qo),e(qo,Vd),e(qo,Tn),e(Tn,Gd),e(qo,Jd),e(I,Kd),e(I,Co),e(Co,Yd),e(Co,Eo),e(Eo,Xd),e(Co,Zd),e(I,ec),e(I,q),w(jo,q,null),e(q,tc),e(q,Ce),e(Ce,oc),e(Ce,yn),e(yn,nc),e(Ce,rc),e(Ce,xr),e(xr,sc),e(Ce,ac),e(q,ic),w(pt,q,null),e(q,lc),w(ht,q,null),e(q,dc),w(mt,q,null),e(q,cc),w(ut,q,null),e(q,pc),w(ft,q,null),b(t,Is,f),b(t,Ee,f),e(Ee,gt),e(gt,Pr),w(Ao,Pr,null),e(Ee,hc),e(Ee,qr),e(qr,mc),b(t,Os,f),b(t,O,f),w(So,O,null),e(O,uc),e(O,Cr),e(Cr,fc),e(O,gc),e(O,No),e(No,_c),e(No,Bn),e(Bn,bc),e(No,vc),e(O,kc),e(O,Lo),e(Lo,Mc),e(Lo,Io),e(Io,wc),e(Lo,$c),e(O,Tc),e(O,ee),w(Oo,ee,null),e(ee,yc),e(ee,je),e(je,Bc),e(je,Fn),e(Fn,Fc),e(je,zc),e(je,Er),e(Er,xc),e(je,Pc),e(ee,qc),w(_t,ee,null),e(ee,Cc),w(bt,ee,null),b(t,Ds,f),b(t,Ae,f),e(Ae,vt),e(vt,jr),w(Do,jr,null),e(Ae,Ec),e(Ae,Ar),e(Ar,jc),b(t,Ws,f),b(t,D,f),w(Wo,D,null),e(D,Ac),e(D,Sr),e(Sr,Sc),e(D,Nc),e(D,Ro),e(Ro,Lc),e(Ro,zn),e(zn,Ic),e(Ro,Oc),e(D,Dc),e(D,Ho),e(Ho,Wc),e(Ho,Uo),e(Uo,Rc),e(Ho,Hc),e(D,Uc),e(D,H),w(Qo,H,null),e(H,Qc),e(H,Se),e(Se,Vc),e(Se,xn),e(xn,Gc),e(Se,Jc),e(Se,Nr),e(Nr,Kc),e(Se,Yc),e(H,Xc),w(kt,H,null),e(H,Zc),w(Mt,H,null),e(H,ep),w(wt,H,null),b(t,Rs,f),b(t,Ne,f),e(Ne,$t),e($t,Lr),w(Vo,Lr,null),e(Ne,tp),e(Ne,Ir),e(Ir,op),b(t,Hs,f),b(t,W,f),w(Go,W,null),e(W,np),e(W,Le),e(Le,rp),e(Le,Or),e(Or,sp),e(Le,ap),e(Le,Dr),e(Dr,ip),e(Le,lp),e(W,dp),e(W,Jo),e(Jo,cp),e(Jo,Pn),e(Pn,pp),e(Jo,hp),e(W,mp),e(W,Ko),e(Ko,up),e(Ko,Yo),e(Yo,fp),e(Ko,gp),e(W,_p),e(W,U),w(Xo,U,null),e(U,bp),e(U,Ie),e(Ie,vp),e(Ie,qn),e(qn,kp),e(Ie,Mp),e(Ie,Wr),e(Wr,wp),e(Ie,$p),e(U,Tp),w(Tt,U,null),e(U,yp),w(yt,U,null),e(U,Bp),w(Bt,U,null),Us=!0},p(t,[f]){const Zo={};f&2&&(Zo.$$scope={dirty:f,ctx:t}),Ve.$set(Zo);const Rr={};f&2&&(Rr.$$scope={dirty:f,ctx:t}),Je.$set(Rr);const Hr={};f&2&&(Hr.$$scope={dirty:f,ctx:t}),Ke.$set(Hr);const Ur={};f&2&&(Ur.$$scope={dirty:f,ctx:t}),Xe.$set(Ur);const en={};f&2&&(en.$$scope={dirty:f,ctx:t}),Ze.$set(en);const Qr={};f&2&&(Qr.$$scope={dirty:f,ctx:t}),et.$set(Qr);const Vr={};f&2&&(Vr.$$scope={dirty:f,ctx:t}),ot.$set(Vr);const Gr={};f&2&&(Gr.$$scope={dirty:f,ctx:t}),nt.$set(Gr);const tn={};f&2&&(tn.$$scope={dirty:f,ctx:t}),st.$set(tn);const Jr={};f&2&&(Jr.$$scope={dirty:f,ctx:t}),at.$set(Jr);const Kr={};f&2&&(Kr.$$scope={dirty:f,ctx:t}),lt.$set(Kr);const Yr={};f&2&&(Yr.$$scope={dirty:f,ctx:t}),dt.$set(Yr);const Xr={};f&2&&(Xr.$$scope={dirty:f,ctx:t}),pt.$set(Xr);const Zr={};f&2&&(Zr.$$scope={dirty:f,ctx:t}),ht.$set(Zr);const on={};f&2&&(on.$$scope={dirty:f,ctx:t}),mt.$set(on);const es={};f&2&&(es.$$scope={dirty:f,ctx:t}),ut.$set(es);const Oe={};f&2&&(Oe.$$scope={dirty:f,ctx:t}),ft.$set(Oe);const ts={};f&2&&(ts.$$scope={dirty:f,ctx:t}),_t.$set(ts);const os={};f&2&&(os.$$scope={dirty:f,ctx:t}),bt.$set(os);const ns={};f&2&&(ns.$$scope={dirty:f,ctx:t}),kt.$set(ns);const rs={};f&2&&(rs.$$scope={dirty:f,ctx:t}),Mt.$set(rs);const ss={};f&2&&(ss.$$scope={dirty:f,ctx:t}),wt.$set(ss);const as={};f&2&&(as.$$scope={dirty:f,ctx:t}),Tt.$set(as);const De={};f&2&&(De.$$scope={dirty:f,ctx:t}),yt.$set(De);const is={};f&2&&(is.$$scope={dirty:f,ctx:t}),Bt.$set(is)},i(t){Us||($(n.$$.fragment,t),$(Et.$$.fragment,t),$(Lt.$$.fragment,t),$(It.$$.fragment,t),$(Ot.$$.fragment,t),$(Dt.$$.fragment,t),$(Ht.$$.fragment,t),$(Ut.$$.fragment,t),$(Ve.$$.fragment,t),$(Vt.$$.fragment,t),$(Gt.$$.fragment,t),$(eo.$$.fragment,t),$(Je.$$.fragment,t),$(Ke.$$.fragment,t),$(to.$$.fragment,t),$(oo.$$.fragment,t),$(io.$$.fragment,t),$(Xe.$$.fragment,t),$(Ze.$$.fragment,t),$(et.$$.fragment,t),$(lo.$$.fragment,t),$(co.$$.fragment,t),$(fo.$$.fragment,t),$(ot.$$.fragment,t),$(nt.$$.fragment,t),$(go.$$.fragment,t),$(_o.$$.fragment,t),$(wo.$$.fragment,t),$(st.$$.fragment,t),$(at.$$.fragment,t),$($o.$$.fragment,t),$(To.$$.fragment,t),$(zo.$$.fragment,t),$(lt.$$.fragment,t),$(dt.$$.fragment,t),$(xo.$$.fragment,t),$(Po.$$.fragment,t),$(jo.$$.fragment,t),$(pt.$$.fragment,t),$(ht.$$.fragment,t),$(mt.$$.fragment,t),$(ut.$$.fragment,t),$(ft.$$.fragment,t),$(Ao.$$.fragment,t),$(So.$$.fragment,t),$(Oo.$$.fragment,t),$(_t.$$.fragment,t),$(bt.$$.fragment,t),$(Do.$$.fragment,t),$(Wo.$$.fragment,t),$(Qo.$$.fragment,t),$(kt.$$.fragment,t),$(Mt.$$.fragment,t),$(wt.$$.fragment,t),$(Vo.$$.fragment,t),$(Go.$$.fragment,t),$(Xo.$$.fragment,t),$(Tt.$$.fragment,t),$(yt.$$.fragment,t),$(Bt.$$.fragment,t),Us=!0)},o(t){T(n.$$.fragment,t),T(Et.$$.fragment,t),T(Lt.$$.fragment,t),T(It.$$.fragment,t),T(Ot.$$.fragment,t),T(Dt.$$.fragment,t),T(Ht.$$.fragment,t),T(Ut.$$.fragment,t),T(Ve.$$.fragment,t),T(Vt.$$.fragment,t),T(Gt.$$.fragment,t),T(eo.$$.fragment,t),T(Je.$$.fragment,t),T(Ke.$$.fragment,t),T(to.$$.fragment,t),T(oo.$$.fragment,t),T(io.$$.fragment,t),T(Xe.$$.fragment,t),T(Ze.$$.fragment,t),T(et.$$.fragment,t),T(lo.$$.fragment,t),T(co.$$.fragment,t),T(fo.$$.fragment,t),T(ot.$$.fragment,t),T(nt.$$.fragment,t),T(go.$$.fragment,t),T(_o.$$.fragment,t),T(wo.$$.fragment,t),T(st.$$.fragment,t),T(at.$$.fragment,t),T($o.$$.fragment,t),T(To.$$.fragment,t),T(zo.$$.fragment,t),T(lt.$$.fragment,t),T(dt.$$.fragment,t),T(xo.$$.fragment,t),T(Po.$$.fragment,t),T(jo.$$.fragment,t),T(pt.$$.fragment,t),T(ht.$$.fragment,t),T(mt.$$.fragment,t),T(ut.$$.fragment,t),T(ft.$$.fragment,t),T(Ao.$$.fragment,t),T(So.$$.fragment,t),T(Oo.$$.fragment,t),T(_t.$$.fragment,t),T(bt.$$.fragment,t),T(Do.$$.fragment,t),T(Wo.$$.fragment,t),T(Qo.$$.fragment,t),T(kt.$$.fragment,t),T(Mt.$$.fragment,t),T(wt.$$.fragment,t),T(Vo.$$.fragment,t),T(Go.$$.fragment,t),T(Xo.$$.fragment,t),T(Tt.$$.fragment,t),T(yt.$$.fragment,t),T(Bt.$$.fragment,t),Us=!1},d(t){o(d),t&&o(_),t&&o(c),y(n),t&&o(ls),t&&o(ge),y(Et),t&&o(ds),t&&o(He),t&&o(cs),t&&o(nn),t&&o(ps),t&&o(rn),t&&o(hs),t&&o(sn),t&&o(ms),t&&o(Ue),t&&o(us),t&&o(oe),t&&o(fs),t&&o(an),t&&o(gs),t&&o(ln),t&&o(_s),y(Lt,t),t&&o(bs),t&&o(dn),t&&o(vs),y(It,t),t&&o(ks),t&&o(cn),t&&o(Ms),t&&o(ne),t&&o(ws),y(Ot,t),t&&o($s),y(Dt,t),t&&o(Ts),t&&o(re),t&&o(ys),t&&o(_e),y(Ht),t&&o(Bs),t&&o(J),y(Ut),y(Ve),t&&o(Fs),t&&o(ke),y(Vt),t&&o(zs),t&&o(x),y(Gt),y(eo),y(Je),y(Ke),t&&o(xs),t&&o(we),y(to),t&&o(Ps),t&&o(A),y(oo),y(io),y(Xe),y(Ze),y(et),t&&o(qs),t&&o(Te),y(lo),t&&o(Cs),t&&o(S),y(co),y(fo),y(ot),y(nt),t&&o(Es),t&&o(Be),y(go),t&&o(js),t&&o(N),y(_o),y(wo),y(st),y(at),t&&o(As),t&&o(ze),y($o),t&&o(Ss),t&&o(L),y(To),y(zo),y(lt),y(dt),t&&o(Ns),t&&o(qe),y(xo),t&&o(Ls),t&&o(I),y(Po),y(jo),y(pt),y(ht),y(mt),y(ut),y(ft),t&&o(Is),t&&o(Ee),y(Ao),t&&o(Os),t&&o(O),y(So),y(Oo),y(_t),y(bt),t&&o(Ds),t&&o(Ae),y(Do),t&&o(Ws),t&&o(D),y(Wo),y(Qo),y(kt),y(Mt),y(wt),t&&o(Rs),t&&o(Ne),y(Vo),t&&o(Hs),t&&o(W),y(Go),y(Xo),y(Tt),y(yt),y(Bt)}}}const Dm={local:"megatronbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.MegatronBertConfig",title:"MegatronBertConfig"},{local:"transformers.MegatronBertModel",title:"MegatronBertModel"},{local:"transformers.MegatronBertForMaskedLM",title:"MegatronBertForMaskedLM"},{local:"transformers.MegatronBertForCausalLM",title:"MegatronBertForCausalLM"},{local:"transformers.MegatronBertForNextSentencePrediction",title:"MegatronBertForNextSentencePrediction"},{local:"transformers.MegatronBertForPreTraining",title:"MegatronBertForPreTraining"},{local:"transformers.MegatronBertForSequenceClassification",title:"MegatronBertForSequenceClassification"},{local:"transformers.MegatronBertForMultipleChoice",title:"MegatronBertForMultipleChoice"},{local:"transformers.MegatronBertForTokenClassification",title:"MegatronBertForTokenClassification"},{local:"transformers.MegatronBertForQuestionAnswering",title:"MegatronBertForQuestionAnswering"}],title:"MegatronBERT"};function Wm(B){return um(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Jm extends cm{constructor(d){super();pm(this,d,Wm,Om,hm,{})}}export{Jm as default,Dm as metadata};
