import{S as I4,i as D4,s as N4,e as n,k as m,w as y,t as a,M as S4,c as r,d as o,m as h,a as s,x as b,h as i,b as u,G as e,g as k,y as T,q as w,o as $,B as x,v as W4,L as le}from"../../chunks/vendor-hf-doc-builder.js";import{T as Re}from"../../chunks/Tip-hf-doc-builder.js";import{D}from"../../chunks/Docstring-hf-doc-builder.js";import{C as de}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function U4(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerModel, RoFormerConfig

# Initializing a RoFormer junnyu/roformer_chinese_base style configuration
configuration = RoFormerConfig()

# Initializing a model from the junnyu/roformer_chinese_base style configuration
model = RoFormerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerModel, RoFormerConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a RoFormer junnyu/roformer_chinese_base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = RoFormerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the junnyu/roformer_chinese_base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Q4(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
tokenizer.tokenize("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>)
<span class="hljs-comment"># [&#x27;\u4ECA&#x27;, &#x27;\u5929&#x27;, &#x27;\u5929&#x27;, &#x27;\u6C14&#x27;, &#x27;\u975E\u5E38&#x27;, &#x27;\u597D&#x27;, &#x27;\u3002&#x27;]</span>`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function H4(R){let d,g,c,p,_;return p=new de({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),g=a("sequence pair mask has the following format:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"sequence pair mask has the following format:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function V4(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizerFast

tokenizer = RoFormerTokenizerFast.from_pretrained("junnyu/roformer_chinese_base")
tokenizer.tokenize("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizerFast.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>)
<span class="hljs-comment"># [&#x27;\u4ECA&#x27;, &#x27;\u5929&#x27;, &#x27;\u5929&#x27;, &#x27;\u6C14&#x27;, &#x27;\u975E\u5E38&#x27;, &#x27;\u597D&#x27;, &#x27;\u3002&#x27;]</span>`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function K4(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function J4(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerModel
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerModel.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerModel.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function B4(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function G4(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForCausalLM, RoFormerConfig
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
config = RoFormerConfig.from_pretrained("junnyu/roformer_chinese_base")
config.is_decoder = True
model = RoFormerForCausalLM.from_pretrained("junnyu/roformer_chinese_base", config=config)

inputs = tokenizer("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForCausalLM, RoFormerConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = RoFormerConfig.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForCausalLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function X4(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Y4(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForMaskedLM
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForMaskedLM.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Z4(R){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function ex(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function ox(R){let d,g,c,p,_;return p=new de({props:{code:`import torch
from transformers import RoFormerTokenizer, RoFormerForSequenceClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example of single-label classification:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example of single-label classification:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function tx(R){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function nx(R){let d,g,c,p,_;return p=new de({props:{code:`import torch
from transformers import RoFormerTokenizer, RoFormerForSequenceClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example of multi-label classification:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example of multi-label classification:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function rx(R){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RoFormerForSequenceClassification.from_pretrained(
    "junnyu/roformer_chinese_base", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function sx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function ax(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForMultipleChoice
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForMultipleChoice.from_pretrained("junnyu/roformer_chinese_base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function ix(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function lx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForTokenClassification
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForTokenClassification.from_pretrained("junnyu/roformer_chinese_base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

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
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function dx(R){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function cx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function px(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForQuestionAnswering
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForQuestionAnswering.from_pretrained("junnyu/roformer_chinese_base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function mx(R){let d,g;return d=new de({props:{code:`# target is "nice puppet"
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
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function hx(R){let d,g,c,p,_,l,f,M,ue,B,z,Z,N,ee,ge,S,_e,pe,J,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,ve,U,se,ce,H,fe,X,O,te,V,Fe;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),z=n("p"),Z=a("This second option is useful when using "),N=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),_e=a("model(inputs)"),pe=a("."),J=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),O=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),Fe=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(F){d=r(F,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(F),p=r(F,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var be=s(M);ue=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(o),Y.forEach(o),B=h(F),z=r(F,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),N=r(P,"CODE",{});var xe=s(N);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(P,"CODE",{});var we=s(S);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),J=h(F),L=r(F,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(F),j=r(F,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var I=s(C);ve=i(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(I,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(I," or "),H=r(I,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),I.forEach(o),X=h(A),O=r(A,"LI",{});var ye=s(O);te=i(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ye,"CODE",{});var $e=s(V);Fe=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),ye.forEach(o),A.forEach(o)},m(F,E){k(F,d,E),e(d,g),k(F,c,E),k(F,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(F,B,E),k(F,z,E),e(z,Z),e(z,N),e(N,ee),e(z,ge),e(z,S),e(S,_e),e(z,pe),k(F,J,E),k(F,L,E),e(L,oe),k(F,G,E),k(F,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,ve),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,O),e(O,te),e(O,V),e(V,Fe)},d(F){F&&o(d),F&&o(c),F&&o(p),F&&o(B),F&&o(z),F&&o(J),F&&o(L),F&&o(G),F&&o(j)}}}function fx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function ux(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerModel
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerModel.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerModel.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function gx(R){let d,g,c,p,_,l,f,M,ue,B,z,Z,N,ee,ge,S,_e,pe,J,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,ve,U,se,ce,H,fe,X,O,te,V,Fe;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),z=n("p"),Z=a("This second option is useful when using "),N=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),_e=a("model(inputs)"),pe=a("."),J=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),O=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),Fe=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(F){d=r(F,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(F),p=r(F,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var be=s(M);ue=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(o),Y.forEach(o),B=h(F),z=r(F,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),N=r(P,"CODE",{});var xe=s(N);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(P,"CODE",{});var we=s(S);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),J=h(F),L=r(F,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(F),j=r(F,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var I=s(C);ve=i(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(I,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(I," or "),H=r(I,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),I.forEach(o),X=h(A),O=r(A,"LI",{});var ye=s(O);te=i(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ye,"CODE",{});var $e=s(V);Fe=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),ye.forEach(o),A.forEach(o)},m(F,E){k(F,d,E),e(d,g),k(F,c,E),k(F,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(F,B,E),k(F,z,E),e(z,Z),e(z,N),e(N,ee),e(z,ge),e(z,S),e(S,_e),e(z,pe),k(F,J,E),k(F,L,E),e(L,oe),k(F,G,E),k(F,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,ve),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,O),e(O,te),e(O,V),e(V,Fe)},d(F){F&&o(d),F&&o(c),F&&o(p),F&&o(B),F&&o(z),F&&o(J),F&&o(L),F&&o(G),F&&o(j)}}}function _x(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function kx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForMaskedLM
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForMaskedLM.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function vx(R){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function Fx(R){let d,g,c,p,_,l,f,M,ue,B,z,Z,N,ee,ge,S,_e,pe,J,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,ve,U,se,ce,H,fe,X,O,te,V,Fe;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),z=n("p"),Z=a("This second option is useful when using "),N=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),_e=a("model(inputs)"),pe=a("."),J=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),O=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),Fe=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(F){d=r(F,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(F),p=r(F,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var be=s(M);ue=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(o),Y.forEach(o),B=h(F),z=r(F,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),N=r(P,"CODE",{});var xe=s(N);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(P,"CODE",{});var we=s(S);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),J=h(F),L=r(F,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(F),j=r(F,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var I=s(C);ve=i(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(I,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(I," or "),H=r(I,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),I.forEach(o),X=h(A),O=r(A,"LI",{});var ye=s(O);te=i(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ye,"CODE",{});var $e=s(V);Fe=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),ye.forEach(o),A.forEach(o)},m(F,E){k(F,d,E),e(d,g),k(F,c,E),k(F,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(F,B,E),k(F,z,E),e(z,Z),e(z,N),e(N,ee),e(z,ge),e(z,S),e(S,_e),e(z,pe),k(F,J,E),k(F,L,E),e(L,oe),k(F,G,E),k(F,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,ve),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,O),e(O,te),e(O,V),e(V,Fe)},d(F){F&&o(d),F&&o(c),F&&o(p),F&&o(B),F&&o(z),F&&o(J),F&&o(L),F&&o(G),F&&o(j)}}}function yx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForCausalLM
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForCausalLM.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForCausalLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function bx(R){let d,g,c,p,_,l,f,M,ue,B,z,Z,N,ee,ge,S,_e,pe,J,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,ve,U,se,ce,H,fe,X,O,te,V,Fe;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),z=n("p"),Z=a("This second option is useful when using "),N=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),_e=a("model(inputs)"),pe=a("."),J=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),O=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),Fe=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(F){d=r(F,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(F),p=r(F,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var be=s(M);ue=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(o),Y.forEach(o),B=h(F),z=r(F,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),N=r(P,"CODE",{});var xe=s(N);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(P,"CODE",{});var we=s(S);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),J=h(F),L=r(F,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(F),j=r(F,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var I=s(C);ve=i(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(I,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(I," or "),H=r(I,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),I.forEach(o),X=h(A),O=r(A,"LI",{});var ye=s(O);te=i(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ye,"CODE",{});var $e=s(V);Fe=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),ye.forEach(o),A.forEach(o)},m(F,E){k(F,d,E),e(d,g),k(F,c,E),k(F,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(F,B,E),k(F,z,E),e(z,Z),e(z,N),e(N,ee),e(z,ge),e(z,S),e(S,_e),e(z,pe),k(F,J,E),k(F,L,E),e(L,oe),k(F,G,E),k(F,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,ve),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,O),e(O,te),e(O,V),e(V,Fe)},d(F){F&&o(d),F&&o(c),F&&o(p),F&&o(B),F&&o(z),F&&o(J),F&&o(L),F&&o(G),F&&o(j)}}}function Tx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function wx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForSequenceClassification
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function $x(R){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFRoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function xx(R){let d,g,c,p,_,l,f,M,ue,B,z,Z,N,ee,ge,S,_e,pe,J,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,ve,U,se,ce,H,fe,X,O,te,V,Fe;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),z=n("p"),Z=a("This second option is useful when using "),N=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),_e=a("model(inputs)"),pe=a("."),J=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),O=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),Fe=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(F){d=r(F,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(F),p=r(F,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var be=s(M);ue=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(o),Y.forEach(o),B=h(F),z=r(F,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),N=r(P,"CODE",{});var xe=s(N);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(P,"CODE",{});var we=s(S);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),J=h(F),L=r(F,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(F),j=r(F,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var I=s(C);ve=i(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(I,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(I," or "),H=r(I,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),I.forEach(o),X=h(A),O=r(A,"LI",{});var ye=s(O);te=i(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ye,"CODE",{});var $e=s(V);Fe=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),ye.forEach(o),A.forEach(o)},m(F,E){k(F,d,E),e(d,g),k(F,c,E),k(F,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(F,B,E),k(F,z,E),e(z,Z),e(z,N),e(N,ee),e(z,ge),e(z,S),e(S,_e),e(z,pe),k(F,J,E),k(F,L,E),e(L,oe),k(F,G,E),k(F,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,ve),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,O),e(O,te),e(O,V),e(V,Fe)},d(F){F&&o(d),F&&o(c),F&&o(p),F&&o(B),F&&o(z),F&&o(J),F&&o(L),F&&o(G),F&&o(j)}}}function Rx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Mx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForMultipleChoice
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForMultipleChoice.from_pretrained("junnyu/roformer_chinese_base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Ex(R){let d,g,c,p,_,l,f,M,ue,B,z,Z,N,ee,ge,S,_e,pe,J,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,ve,U,se,ce,H,fe,X,O,te,V,Fe;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),z=n("p"),Z=a("This second option is useful when using "),N=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),_e=a("model(inputs)"),pe=a("."),J=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),O=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),Fe=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(F){d=r(F,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(F),p=r(F,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var be=s(M);ue=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(o),Y.forEach(o),B=h(F),z=r(F,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),N=r(P,"CODE",{});var xe=s(N);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(P,"CODE",{});var we=s(S);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),J=h(F),L=r(F,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(F),j=r(F,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var I=s(C);ve=i(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(I,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(I," or "),H=r(I,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),I.forEach(o),X=h(A),O=r(A,"LI",{});var ye=s(O);te=i(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ye,"CODE",{});var $e=s(V);Fe=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),ye.forEach(o),A.forEach(o)},m(F,E){k(F,d,E),e(d,g),k(F,c,E),k(F,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(F,B,E),k(F,z,E),e(z,Z),e(z,N),e(N,ee),e(z,ge),e(z,S),e(S,_e),e(z,pe),k(F,J,E),k(F,L,E),e(L,oe),k(F,G,E),k(F,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,ve),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,O),e(O,te),e(O,V),e(V,Fe)},d(F){F&&o(d),F&&o(c),F&&o(p),F&&o(B),F&&o(z),F&&o(J),F&&o(L),F&&o(G),F&&o(j)}}}function zx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function jx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForTokenClassification
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForTokenClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

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
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Cx(R){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function qx(R){let d,g,c,p,_,l,f,M,ue,B,z,Z,N,ee,ge,S,_e,pe,J,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,ve,U,se,ce,H,fe,X,O,te,V,Fe;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),z=n("p"),Z=a("This second option is useful when using "),N=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),_e=a("model(inputs)"),pe=a("."),J=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),O=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),Fe=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(F){d=r(F,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(F),p=r(F,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var be=s(M);ue=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(o),Y.forEach(o),B=h(F),z=r(F,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),N=r(P,"CODE",{});var xe=s(N);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(P,"CODE",{});var we=s(S);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),J=h(F),L=r(F,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(F),j=r(F,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var I=s(C);ve=i(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(I,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(I," or "),H=r(I,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),I.forEach(o),X=h(A),O=r(A,"LI",{});var ye=s(O);te=i(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ye,"CODE",{});var $e=s(V);Fe=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),ye.forEach(o),A.forEach(o)},m(F,E){k(F,d,E),e(d,g),k(F,c,E),k(F,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(F,B,E),k(F,z,E),e(z,Z),e(z,N),e(N,ee),e(z,ge),e(z,S),e(S,_e),e(z,pe),k(F,J,E),k(F,L,E),e(L,oe),k(F,G,E),k(F,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,ve),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,O),e(O,te),e(O,V),e(V,Fe)},d(F){F&&o(d),F&&o(c),F&&o(p),F&&o(B),F&&o(z),F&&o(J),F&&o(L),F&&o(G),F&&o(j)}}}function Px(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Ax(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForQuestionAnswering
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForQuestionAnswering.from_pretrained("junnyu/roformer_chinese_base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Lx(R){let d,g;return d=new de({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function Ox(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Ix(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerModel

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerModel.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerModel.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Dx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Nx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForMaskedLM

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForMaskedLM.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Sx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Wx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForSequenceClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Ux(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Qx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForMultipleChoice

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForMultipleChoice.from_pretrained("junnyu/roformer_chinese_base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Hx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Vx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForTokenClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForTokenClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Kx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Jx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForQuestionAnswering

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForQuestionAnswering.from_pretrained("junnyu/roformer_chinese_base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),y(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Bx(R){let d,g,c,p,_,l,f,M,ue,B,z,Z,N,ee,ge,S,_e,pe,J,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,ve,U,se,ce,H,fe,X,O,te,V,Fe,F,E,Y,Me,be,P,xe,we,je,A,K,Ee,ae,I,Ce,Te,ye,$e,Nf,Sf,rs,Wf,Uf,Qf,it,Hf,pl,Vf,Kf,ml,Jf,Bf,Gf,an,Qm,lt,ln,wd,ss,Xf,$d,Yf,Hm,qe,as,Zf,is,eu,ls,ou,tu,nu,ds,ru,hl,su,au,iu,dn,lu,Go,cs,du,xd,cu,pu,ps,fl,mu,Rd,hu,fu,ul,uu,Md,gu,_u,cn,ms,ku,hs,vu,Ed,Fu,yu,bu,Fo,fs,Tu,zd,wu,$u,pn,xu,dt,Ru,jd,Mu,Eu,Cd,zu,ju,Cu,gl,us,Vm,ct,mn,qd,gs,qu,Pd,Pu,Km,We,_s,Au,ks,Lu,Ad,Ou,Iu,Du,hn,_l,Nu,Su,kl,Wu,Uu,Qu,vs,Hu,vl,Vu,Ku,Ju,fn,Bu,Xo,Fs,Gu,Ld,Xu,Yu,ys,Fl,Zu,Od,eg,og,yl,tg,Id,ng,Jm,pt,un,Dd,bs,rg,Nd,sg,Bm,Xe,Ts,ag,ws,ig,$s,lg,dg,cg,xs,pg,Rs,mg,hg,fg,Ue,ug,Sd,gg,_g,Wd,kg,vg,Ud,Fg,yg,Qd,bg,Tg,Hd,wg,$g,Vd,xg,Rg,Mg,yo,Ms,Eg,mt,zg,bl,jg,Cg,Kd,qg,Pg,Ag,gn,Lg,_n,Gm,ht,kn,Jd,Es,Og,Bd,Ig,Xm,No,zs,Dg,ft,Ng,Gd,Sg,Wg,js,Ug,Qg,Hg,bo,Cs,Vg,ut,Kg,Tl,Jg,Bg,Xd,Gg,Xg,Yg,vn,Zg,Fn,Ym,gt,yn,Yd,qs,e_,Zd,o_,Zm,So,Ps,t_,_t,n_,ec,r_,s_,As,a_,i_,l_,eo,Ls,d_,kt,c_,wl,p_,m_,oc,h_,f_,u_,bn,g_,Tn,__,wn,eh,vt,$n,tc,Os,k_,nc,v_,oh,go,Is,F_,rc,y_,b_,Ds,T_,Ns,w_,$_,x_,Se,Ss,R_,Ft,M_,$l,E_,z_,sc,j_,C_,q_,xn,P_,Rn,A_,Mn,L_,En,O_,zn,th,yt,jn,ac,Ws,I_,ic,D_,nh,_o,Us,N_,lc,S_,W_,Qs,U_,Hs,Q_,H_,V_,To,Vs,K_,bt,J_,xl,B_,G_,dc,X_,Y_,Z_,Cn,ek,qn,rh,Tt,Pn,cc,Ks,ok,pc,tk,sh,ko,Js,nk,mc,rk,sk,Bs,ak,Gs,ik,lk,dk,oo,Xs,ck,wt,pk,Rl,mk,hk,hc,fk,uk,gk,An,_k,Ln,kk,On,ah,$t,In,fc,Ys,vk,uc,Fk,ih,vo,Zs,yk,xt,bk,gc,Tk,wk,_c,$k,xk,Rk,ea,Mk,oa,Ek,zk,jk,to,ta,Ck,Rt,qk,Ml,Pk,Ak,kc,Lk,Ok,Ik,Dn,Dk,Nn,Nk,Sn,lh,Mt,Wn,vc,na,Sk,Fc,Wk,dh,Qe,ra,Uk,yc,Qk,Hk,sa,Vk,El,Kk,Jk,Bk,aa,Gk,ia,Xk,Yk,Zk,Un,ev,wo,la,ov,Et,tv,zl,nv,rv,bc,sv,av,iv,Qn,lv,Hn,ch,zt,Vn,Tc,da,dv,wc,cv,ph,He,ca,pv,pa,mv,$c,hv,fv,uv,ma,gv,jl,_v,kv,vv,ha,Fv,fa,yv,bv,Tv,Kn,wv,no,ua,$v,jt,xv,Cl,Rv,Mv,xc,Ev,zv,jv,Jn,Cv,Bn,qv,Gn,mh,Ct,Xn,Rc,ga,Pv,Mc,Av,hh,Ve,_a,Lv,ka,Ov,Ec,Iv,Dv,Nv,va,Sv,ql,Wv,Uv,Qv,Fa,Hv,ya,Vv,Kv,Jv,Yn,Bv,Yo,ba,Gv,Ye,Xv,zc,Yv,Zv,jc,eF,oF,Cc,tF,nF,qc,rF,sF,Pc,aF,iF,lF,Zn,fh,qt,er,Ac,Ta,dF,Lc,cF,uh,Ke,wa,pF,Oc,mF,hF,$a,fF,Pl,uF,gF,_F,xa,kF,Ra,vF,FF,yF,or,bF,ro,Ma,TF,Pt,wF,Al,$F,xF,Ic,RF,MF,EF,tr,zF,nr,jF,rr,gh,At,sr,Dc,Ea,CF,Nc,qF,_h,Je,za,PF,Sc,AF,LF,ja,OF,Ll,IF,DF,NF,Ca,SF,qa,WF,UF,QF,ar,HF,$o,Pa,VF,Lt,KF,Ol,JF,BF,Wc,GF,XF,YF,ir,ZF,lr,kh,Ot,dr,Uc,Aa,ey,Qc,oy,vh,Be,La,ty,Hc,ny,ry,Oa,sy,Il,ay,iy,ly,Ia,dy,Da,cy,py,my,cr,hy,so,Na,fy,It,uy,Dl,gy,_y,Vc,ky,vy,Fy,pr,yy,mr,by,hr,Fh,Dt,fr,Kc,Sa,Ty,Jc,wy,yh,Ge,Wa,$y,Nt,xy,Bc,Ry,My,Gc,Ey,zy,jy,Ua,Cy,Nl,qy,Py,Ay,Qa,Ly,Ha,Oy,Iy,Dy,ur,Ny,ao,Va,Sy,St,Wy,Sl,Uy,Qy,Xc,Hy,Vy,Ky,gr,Jy,_r,By,kr,bh,Wt,vr,Yc,Ka,Gy,Zc,Xy,Th,Pe,Ja,Yy,ep,Zy,e2,Ba,o2,Wl,t2,n2,r2,Ga,s2,Xa,a2,i2,l2,op,d2,c2,Wo,tp,Ya,p2,m2,np,Za,h2,f2,rp,ei,u2,g2,sp,oi,_2,k2,xo,ti,v2,Ut,F2,ap,y2,b2,ip,T2,w2,$2,Fr,x2,yr,wh,Qt,br,lp,ni,R2,dp,M2,$h,Ae,ri,E2,si,z2,cp,j2,C2,q2,ai,P2,Ul,A2,L2,O2,ii,I2,li,D2,N2,S2,pp,W2,U2,Uo,mp,di,Q2,H2,hp,ci,V2,K2,fp,pi,J2,B2,up,mi,G2,X2,Ro,hi,Y2,Ht,Z2,gp,eb,ob,_p,tb,nb,rb,Tr,sb,wr,xh,Vt,$r,kp,fi,ab,vp,ib,Rh,Le,ui,lb,Fp,db,cb,gi,pb,Ql,mb,hb,fb,_i,ub,ki,gb,_b,kb,yp,vb,Fb,Qo,bp,vi,yb,bb,Tp,Fi,Tb,wb,wp,yi,$b,xb,$p,bi,Rb,Mb,Mo,Ti,Eb,Kt,zb,xp,jb,Cb,Rp,qb,Pb,Ab,xr,Lb,Rr,Mh,Jt,Mr,Mp,wi,Ob,Ep,Ib,Eh,Oe,$i,Db,zp,Nb,Sb,xi,Wb,Hl,Ub,Qb,Hb,Ri,Vb,Mi,Kb,Jb,Bb,jp,Gb,Xb,Ho,Cp,Ei,Yb,Zb,qp,zi,eT,oT,Pp,ji,tT,nT,Ap,Ci,rT,sT,Eo,qi,aT,Bt,iT,Lp,lT,dT,Op,cT,pT,mT,Er,hT,zr,zh,Gt,jr,Ip,Pi,fT,Dp,uT,jh,Ie,Ai,gT,Np,_T,kT,Li,vT,Vl,FT,yT,bT,Oi,TT,Ii,wT,$T,xT,Sp,RT,MT,Vo,Wp,Di,ET,zT,Up,Ni,jT,CT,Qp,Si,qT,PT,Hp,Wi,AT,LT,zo,Ui,OT,Xt,IT,Vp,DT,NT,Kp,ST,WT,UT,Cr,QT,qr,Ch,Yt,Pr,Jp,Qi,HT,Bp,VT,qh,De,Hi,KT,Zt,JT,Gp,BT,GT,Xp,XT,YT,ZT,Vi,ew,Kl,ow,tw,nw,Ki,rw,Ji,sw,aw,iw,Yp,lw,dw,Ko,Zp,Bi,cw,pw,em,Gi,mw,hw,om,Xi,fw,uw,tm,Yi,gw,_w,jo,Zi,kw,en,vw,nm,Fw,yw,rm,bw,Tw,ww,Ar,$w,Lr,Ph;return l=new ze({}),ee=new ze({}),we=new ze({}),I=new D({props:{name:"class transformers.RoFormerConfig",anchor:"transformers.RoFormerConfig",parameters:[{name:"vocab_size",val:" = 50000"},{name:"embedding_size",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1536"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"rotary_value",val:" = False"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50000) &#x2014;
Vocabulary size of the RoFormer model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerModel">RoFormerModel</a> or <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.TFRoFormerModel">TFRoFormerModel</a>.`,name:"vocab_size"},{anchor:"transformers.RoFormerConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
Dimensionality of the encoder layers and the pooler layer. Defaults to the <code>hidden_size</code> if not provided.`,name:"embedding_size"},{anchor:"transformers.RoFormerConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.RoFormerConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.RoFormerConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.RoFormerConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.RoFormerConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.RoFormerConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.RoFormerConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.RoFormerConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 1536).`,name:"max_position_embeddings"},{anchor:"transformers.RoFormerConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerModel">RoFormerModel</a> or <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.TFRoFormerModel">TFRoFormerModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RoFormerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RoFormerConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RoFormerConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.RoFormerConfig.rotary_value",description:`<strong>rotary_value</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not apply rotary position embeddings on value layer.`,name:"rotary_value"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/configuration_roformer.py#L46"}}),an=new ie({props:{anchor:"transformers.RoFormerConfig.example",$$slots:{default:[U4]},$$scope:{ctx:R}}}),ss=new ze({}),as=new D({props:{name:"class transformers.RoFormerTokenizer",anchor:"transformers.RoFormerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.RoFormerTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.RoFormerTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.RoFormerTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.RoFormerTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.RoFormerTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.RoFormerTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.RoFormerTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.RoFormerTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.RoFormerTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/tokenization_roformer.py#L69"}}),dn=new ie({props:{anchor:"transformers.RoFormerTokenizer.example",$$slots:{default:[Q4]},$$scope:{ctx:R}}}),cs=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/tokenization_roformer.py#L235",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ms=new D({props:{name:"get_special_tokens_mask",anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/tokenization_roformer.py#L260",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fs=new D({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/tokenization_roformer.py#L288",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),pn=new ie({props:{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[H4]},$$scope:{ctx:R}}}),us=new D({props:{name:"save_vocabulary",anchor:"transformers.RoFormerTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/tokenization_roformer.py#L317"}}),gs=new ze({}),_s=new D({props:{name:"class transformers.RoFormerTokenizerFast",anchor:"transformers.RoFormerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/tokenization_roformer_fast.py#L71"}}),fn=new ie({props:{anchor:"transformers.RoFormerTokenizerFast.example",$$slots:{default:[V4]},$$scope:{ctx:R}}}),Fs=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/tokenization_roformer_fast.py#L147",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),bs=new ze({}),Ts=new D({props:{name:"class transformers.RoFormerModel",anchor:"transformers.RoFormerModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_roformer.py#L789"}}),Ms=new D({props:{name:"forward",anchor:"transformers.RoFormerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RoFormerModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RoFormerModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RoFormerModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_roformer.py#L829",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gn=new Re({props:{$$slots:{default:[K4]},$$scope:{ctx:R}}}),_n=new ie({props:{anchor:"transformers.RoFormerModel.forward.example",$$slots:{default:[J4]},$$scope:{ctx:R}}}),Es=new ze({}),zs=new D({props:{name:"class transformers.RoFormerForCausalLM",anchor:"transformers.RoFormerForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_roformer.py#L1057"}}),Cs=new D({props:{name:"forward",anchor:"transformers.RoFormerForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RoFormerForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RoFormerForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RoFormerForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.RoFormerForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_roformer.py#L1079",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),vn=new Re({props:{$$slots:{default:[B4]},$$scope:{ctx:R}}}),Fn=new ie({props:{anchor:"transformers.RoFormerForCausalLM.forward.example",$$slots:{default:[G4]},$$scope:{ctx:R}}}),qs=new ze({}),Ps=new D({props:{name:"class transformers.RoFormerForMaskedLM",anchor:"transformers.RoFormerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_roformer.py#L956"}}),Ls=new D({props:{name:"forward",anchor:"transformers.RoFormerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_roformer.py#L978",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),bn=new Re({props:{$$slots:{default:[X4]},$$scope:{ctx:R}}}),Tn=new ie({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example",$$slots:{default:[Y4]},$$scope:{ctx:R}}}),wn=new ie({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example-2",$$slots:{default:[Z4]},$$scope:{ctx:R}}}),Os=new ze({}),Is=new D({props:{name:"class transformers.RoFormerForSequenceClassification",anchor:"transformers.RoFormerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_roformer.py#L1230"}}),Ss=new D({props:{name:"forward",anchor:"transformers.RoFormerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_roformer.py#L1240",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),xn=new Re({props:{$$slots:{default:[ex]},$$scope:{ctx:R}}}),Rn=new ie({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example",$$slots:{default:[ox]},$$scope:{ctx:R}}}),Mn=new ie({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-2",$$slots:{default:[tx]},$$scope:{ctx:R}}}),En=new ie({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-3",$$slots:{default:[nx]},$$scope:{ctx:R}}}),zn=new ie({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-4",$$slots:{default:[rx]},$$scope:{ctx:R}}}),Ws=new ze({}),Us=new D({props:{name:"class transformers.RoFormerForMultipleChoice",anchor:"transformers.RoFormerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_roformer.py#L1322"}}),Vs=new D({props:{name:"forward",anchor:"transformers.RoFormerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_roformer.py#L1333",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),Cn=new Re({props:{$$slots:{default:[sx]},$$scope:{ctx:R}}}),qn=new ie({props:{anchor:"transformers.RoFormerForMultipleChoice.forward.example",$$slots:{default:[ax]},$$scope:{ctx:R}}}),Ks=new ze({}),Js=new D({props:{name:"class transformers.RoFormerForTokenClassification",anchor:"transformers.RoFormerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_roformer.py#L1414"}}),Xs=new D({props:{name:"forward",anchor:"transformers.RoFormerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_roformer.py#L1426",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),An=new Re({props:{$$slots:{default:[ix]},$$scope:{ctx:R}}}),Ln=new ie({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example",$$slots:{default:[lx]},$$scope:{ctx:R}}}),On=new ie({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example-2",$$slots:{default:[dx]},$$scope:{ctx:R}}}),Ys=new ze({}),Zs=new D({props:{name:"class transformers.RoFormerForQuestionAnswering",anchor:"transformers.RoFormerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_roformer.py#L1491"}}),ta=new D({props:{name:"forward",anchor:"transformers.RoFormerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_roformer.py#L1504",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),Dn=new Re({props:{$$slots:{default:[cx]},$$scope:{ctx:R}}}),Nn=new ie({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example",$$slots:{default:[px]},$$scope:{ctx:R}}}),Sn=new ie({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example-2",$$slots:{default:[mx]},$$scope:{ctx:R}}}),na=new ze({}),ra=new D({props:{name:"class transformers.TFRoFormerModel",anchor:"transformers.TFRoFormerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_tf_roformer.py#L794"}}),Un=new Re({props:{$$slots:{default:[hx]},$$scope:{ctx:R}}}),la=new D({props:{name:"call",anchor:"transformers.TFRoFormerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_tf_roformer.py#L800",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new Re({props:{$$slots:{default:[fx]},$$scope:{ctx:R}}}),Hn=new ie({props:{anchor:"transformers.TFRoFormerModel.call.example",$$slots:{default:[ux]},$$scope:{ctx:R}}}),da=new ze({}),ca=new D({props:{name:"class transformers.TFRoFormerForMaskedLM",anchor:"transformers.TFRoFormerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_tf_roformer.py#L842"}}),Kn=new Re({props:{$$slots:{default:[gx]},$$scope:{ctx:R}}}),ua=new D({props:{name:"call",anchor:"transformers.TFRoFormerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_tf_roformer.py#L858",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),Jn=new Re({props:{$$slots:{default:[_x]},$$scope:{ctx:R}}}),Bn=new ie({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example",$$slots:{default:[kx]},$$scope:{ctx:R}}}),Gn=new ie({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example-2",$$slots:{default:[vx]},$$scope:{ctx:R}}}),ga=new ze({}),_a=new D({props:{name:"class transformers.TFRoFormerForCausalLM",anchor:"transformers.TFRoFormerForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_tf_roformer.py#L921"}}),Yn=new Re({props:{$$slots:{default:[Fx]},$$scope:{ctx:R}}}),ba=new D({props:{name:"call",anchor:"transformers.TFRoFormerForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_tf_roformer.py#L934",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zn=new ie({props:{anchor:"transformers.TFRoFormerForCausalLM.call.example",$$slots:{default:[yx]},$$scope:{ctx:R}}}),Ta=new ze({}),wa=new D({props:{name:"class transformers.TFRoFormerForSequenceClassification",anchor:"transformers.TFRoFormerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_tf_roformer.py#L1034"}}),or=new Re({props:{$$slots:{default:[bx]},$$scope:{ctx:R}}}),Ma=new D({props:{name:"call",anchor:"transformers.TFRoFormerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_tf_roformer.py#L1043",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),tr=new Re({props:{$$slots:{default:[Tx]},$$scope:{ctx:R}}}),nr=new ie({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example",$$slots:{default:[wx]},$$scope:{ctx:R}}}),rr=new ie({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example-2",$$slots:{default:[$x]},$$scope:{ctx:R}}}),Ea=new ze({}),za=new D({props:{name:"class transformers.TFRoFormerForMultipleChoice",anchor:"transformers.TFRoFormerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_tf_roformer.py#L1110"}}),ar=new Re({props:{$$slots:{default:[xx]},$$scope:{ctx:R}}}),Pa=new D({props:{name:"call",anchor:"transformers.TFRoFormerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_tf_roformer.py#L1131",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),ir=new Re({props:{$$slots:{default:[Rx]},$$scope:{ctx:R}}}),lr=new ie({props:{anchor:"transformers.TFRoFormerForMultipleChoice.call.example",$$slots:{default:[Mx]},$$scope:{ctx:R}}}),Aa=new ze({}),La=new D({props:{name:"class transformers.TFRoFormerForTokenClassification",anchor:"transformers.TFRoFormerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_tf_roformer.py#L1234"}}),cr=new Re({props:{$$slots:{default:[Ex]},$$scope:{ctx:R}}}),Na=new D({props:{name:"call",anchor:"transformers.TFRoFormerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_tf_roformer.py#L1246",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),pr=new Re({props:{$$slots:{default:[zx]},$$scope:{ctx:R}}}),mr=new ie({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example",$$slots:{default:[jx]},$$scope:{ctx:R}}}),hr=new ie({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example-2",$$slots:{default:[Cx]},$$scope:{ctx:R}}}),Sa=new ze({}),Wa=new D({props:{name:"class transformers.TFRoFormerForQuestionAnswering",anchor:"transformers.TFRoFormerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_tf_roformer.py#L1312"}}),ur=new Re({props:{$$slots:{default:[qx]},$$scope:{ctx:R}}}),Va=new D({props:{name:"call",anchor:"transformers.TFRoFormerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_tf_roformer.py#L1323",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),gr=new Re({props:{$$slots:{default:[Px]},$$scope:{ctx:R}}}),_r=new ie({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example",$$slots:{default:[Ax]},$$scope:{ctx:R}}}),kr=new ie({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example-2",$$slots:{default:[Lx]},$$scope:{ctx:R}}}),Ka=new ze({}),Ja=new D({props:{name:"class transformers.FlaxRoFormerModel",anchor:"transformers.FlaxRoFormerModel",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_flax_roformer.py#L749"}}),ti=new D({props:{name:"__call__",anchor:"transformers.FlaxRoFormerModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),Fr=new Re({props:{$$slots:{default:[Ox]},$$scope:{ctx:R}}}),yr=new ie({props:{anchor:"transformers.FlaxRoFormerModel.__call__.example",$$slots:{default:[Ix]},$$scope:{ctx:R}}}),ni=new ze({}),ri=new D({props:{name:"class transformers.FlaxRoFormerForMaskedLM",anchor:"transformers.FlaxRoFormerForMaskedLM",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_flax_roformer.py#L809"}}),hi=new D({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),Tr=new Re({props:{$$slots:{default:[Dx]},$$scope:{ctx:R}}}),wr=new ie({props:{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.example",$$slots:{default:[Nx]},$$scope:{ctx:R}}}),fi=new ze({}),ui=new D({props:{name:"class transformers.FlaxRoFormerForSequenceClassification",anchor:"transformers.FlaxRoFormerForSequenceClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_flax_roformer.py#L874"}}),Ti=new D({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),xr=new Re({props:{$$slots:{default:[Sx]},$$scope:{ctx:R}}}),Rr=new ie({props:{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.example",$$slots:{default:[Wx]},$$scope:{ctx:R}}}),wi=new ze({}),$i=new D({props:{name:"class transformers.FlaxRoFormerForMultipleChoice",anchor:"transformers.FlaxRoFormerForMultipleChoice",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_flax_roformer.py#L950"}}),qi=new D({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),Er=new Re({props:{$$slots:{default:[Ux]},$$scope:{ctx:R}}}),zr=new ie({props:{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.example",$$slots:{default:[Qx]},$$scope:{ctx:R}}}),Pi=new ze({}),Ai=new D({props:{name:"class transformers.FlaxRoFormerForTokenClassification",anchor:"transformers.FlaxRoFormerForTokenClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_flax_roformer.py#L1019"}}),Ui=new D({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),Cr=new Re({props:{$$slots:{default:[Hx]},$$scope:{ctx:R}}}),qr=new ie({props:{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.example",$$slots:{default:[Vx]},$$scope:{ctx:R}}}),Qi=new ze({}),Hi=new D({props:{name:"class transformers.FlaxRoFormerForQuestionAnswering",anchor:"transformers.FlaxRoFormerForQuestionAnswering",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_flax_roformer.py#L1088"}}),Zi=new D({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
`}}),Ar=new Re({props:{$$slots:{default:[Kx]},$$scope:{ctx:R}}}),Lr=new ie({props:{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.example",$$slots:{default:[Jx]},$$scope:{ctx:R}}}),{c(){d=n("meta"),g=m(),c=n("h1"),p=n("a"),_=n("span"),y(l.$$.fragment),f=m(),M=n("span"),ue=a("RoFormer"),B=m(),z=n("h2"),Z=n("a"),N=n("span"),y(ee.$$.fragment),ge=m(),S=n("span"),_e=a("Overview"),pe=m(),J=n("p"),L=a("The RoFormer model was proposed in "),oe=n("a"),G=a("RoFormer: Enhanced Transformer with Rotary Position Embedding"),j=a(" by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu."),q=m(),ne=n("p"),Q=a("The abstract from the paper is the following:"),me=m(),re=n("p"),W=n("em"),ke=a(`Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.`),he=m(),C=n("p"),ve=a("Tips:"),U=m(),se=n("ul"),ce=n("li"),H=a(`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`),fe=m(),X=n("p"),O=a("This model was contributed by "),te=n("a"),V=a("junnyu"),Fe=a(". The original code can be found "),F=n("a"),E=a("here"),Y=a("."),Me=m(),be=n("h2"),P=n("a"),xe=n("span"),y(we.$$.fragment),je=m(),A=n("span"),K=a("RoFormerConfig"),Ee=m(),ae=n("div"),y(I.$$.fragment),Ce=m(),Te=n("p"),ye=a("This is the configuration class to store the configuration of a "),$e=n("a"),Nf=a("RoFormerModel"),Sf=a(`. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
`),rs=n("a"),Wf=a("junnyu/roformer_chinese_base"),Uf=a(" architecture."),Qf=m(),it=n("p"),Hf=a("Configuration objects inherit from "),pl=n("a"),Vf=a("PretrainedConfig"),Kf=a(` and can be used to control the model outputs. Read the
documentation from `),ml=n("a"),Jf=a("PretrainedConfig"),Bf=a(" for more information."),Gf=m(),y(an.$$.fragment),Qm=m(),lt=n("h2"),ln=n("a"),wd=n("span"),y(ss.$$.fragment),Xf=m(),$d=n("span"),Yf=a("RoFormerTokenizer"),Hm=m(),qe=n("div"),y(as.$$.fragment),Zf=m(),is=n("p"),eu=a("Construct a RoFormer tokenizer. Based on "),ls=n("a"),ou=a("Rust Jieba"),tu=a("."),nu=m(),ds=n("p"),ru=a("This tokenizer inherits from "),hl=n("a"),su=a("PreTrainedTokenizer"),au=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),iu=m(),y(dn.$$.fragment),lu=m(),Go=n("div"),y(cs.$$.fragment),du=m(),xd=n("p"),cu=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),pu=m(),ps=n("ul"),fl=n("li"),mu=a("single sequence: "),Rd=n("code"),hu=a("[CLS] X [SEP]"),fu=m(),ul=n("li"),uu=a("pair of sequences: "),Md=n("code"),gu=a("[CLS] A [SEP] B [SEP]"),_u=m(),cn=n("div"),y(ms.$$.fragment),ku=m(),hs=n("p"),vu=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ed=n("code"),Fu=a("prepare_for_model"),yu=a(" method."),bu=m(),Fo=n("div"),y(fs.$$.fragment),Tu=m(),zd=n("p"),wu=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer"),$u=m(),y(pn.$$.fragment),xu=m(),dt=n("p"),Ru=a("If "),jd=n("code"),Mu=a("token_ids_1"),Eu=a(" is "),Cd=n("code"),zu=a("None"),ju=a(", this method only returns the first portion of the mask (0s)."),Cu=m(),gl=n("div"),y(us.$$.fragment),Vm=m(),ct=n("h2"),mn=n("a"),qd=n("span"),y(gs.$$.fragment),qu=m(),Pd=n("span"),Pu=a("RoFormerTokenizerFast"),Km=m(),We=n("div"),y(_s.$$.fragment),Au=m(),ks=n("p"),Lu=a("Construct a \u201Cfast\u201D RoFormer tokenizer (backed by HuggingFace\u2019s "),Ad=n("em"),Ou=a("tokenizers"),Iu=a(" library)."),Du=m(),hn=n("p"),_l=n("a"),Nu=a("RoFormerTokenizerFast"),Su=a(" is almost identical to "),kl=n("a"),Wu=a("BertTokenizerFast"),Uu=a(` and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`),Qu=m(),vs=n("p"),Hu=a("This tokenizer inherits from "),vl=n("a"),Vu=a("PreTrainedTokenizerFast"),Ku=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ju=m(),y(fn.$$.fragment),Bu=m(),Xo=n("div"),y(Fs.$$.fragment),Gu=m(),Ld=n("p"),Xu=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Yu=m(),ys=n("ul"),Fl=n("li"),Zu=a("single sequence: "),Od=n("code"),eg=a("[CLS] X [SEP]"),og=m(),yl=n("li"),tg=a("pair of sequences: "),Id=n("code"),ng=a("[CLS] A [SEP] B [SEP]"),Jm=m(),pt=n("h2"),un=n("a"),Dd=n("span"),y(bs.$$.fragment),rg=m(),Nd=n("span"),sg=a("RoFormerModel"),Bm=m(),Xe=n("div"),y(Ts.$$.fragment),ag=m(),ws=n("p"),ig=a(`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$s=n("a"),lg=a("torch.nn.Module"),dg=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cg=m(),xs=n("p"),pg=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Rs=n("a"),mg=a(`Attention is
all you need`),hg=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),fg=m(),Ue=n("p"),ug=a("To behave as an decoder the model needs to be initialized with the "),Sd=n("code"),gg=a("is_decoder"),_g=a(` argument of the configuration set
to `),Wd=n("code"),kg=a("True"),vg=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),Ud=n("code"),Fg=a("is_decoder"),yg=a(` argument and
`),Qd=n("code"),bg=a("add_cross_attention"),Tg=a(" set to "),Hd=n("code"),wg=a("True"),$g=a("; an "),Vd=n("code"),xg=a("encoder_hidden_states"),Rg=a(" is then expected as an input to the forward pass."),Mg=m(),yo=n("div"),y(Ms.$$.fragment),Eg=m(),mt=n("p"),zg=a("The "),bl=n("a"),jg=a("RoFormerModel"),Cg=a(" forward method, overrides the "),Kd=n("code"),qg=a("__call__"),Pg=a(" special method."),Ag=m(),y(gn.$$.fragment),Lg=m(),y(_n.$$.fragment),Gm=m(),ht=n("h2"),kn=n("a"),Jd=n("span"),y(Es.$$.fragment),Og=m(),Bd=n("span"),Ig=a("RoFormerForCausalLM"),Xm=m(),No=n("div"),y(zs.$$.fragment),Dg=m(),ft=n("p"),Ng=a("RoFormer Model with a "),Gd=n("code"),Sg=a("language modeling"),Wg=a(` head on top for CLM fine-tuning.
This model is a PyTorch `),js=n("a"),Ug=a("torch.nn.Module"),Qg=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hg=m(),bo=n("div"),y(Cs.$$.fragment),Vg=m(),ut=n("p"),Kg=a("The "),Tl=n("a"),Jg=a("RoFormerForCausalLM"),Bg=a(" forward method, overrides the "),Xd=n("code"),Gg=a("__call__"),Xg=a(" special method."),Yg=m(),y(vn.$$.fragment),Zg=m(),y(Fn.$$.fragment),Ym=m(),gt=n("h2"),yn=n("a"),Yd=n("span"),y(qs.$$.fragment),e_=m(),Zd=n("span"),o_=a("RoFormerForMaskedLM"),Zm=m(),So=n("div"),y(Ps.$$.fragment),t_=m(),_t=n("p"),n_=a("RoFormer Model with a "),ec=n("code"),r_=a("language modeling"),s_=a(` head on top.
This model is a PyTorch `),As=n("a"),a_=a("torch.nn.Module"),i_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),l_=m(),eo=n("div"),y(Ls.$$.fragment),d_=m(),kt=n("p"),c_=a("The "),wl=n("a"),p_=a("RoFormerForMaskedLM"),m_=a(" forward method, overrides the "),oc=n("code"),h_=a("__call__"),f_=a(" special method."),u_=m(),y(bn.$$.fragment),g_=m(),y(Tn.$$.fragment),__=m(),y(wn.$$.fragment),eh=m(),vt=n("h2"),$n=n("a"),tc=n("span"),y(Os.$$.fragment),k_=m(),nc=n("span"),v_=a("RoFormerForSequenceClassification"),oh=m(),go=n("div"),y(Is.$$.fragment),F_=m(),rc=n("p"),y_=a(`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),b_=m(),Ds=n("p"),T_=a("This model is a PyTorch "),Ns=n("a"),w_=a("torch.nn.Module"),$_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),x_=m(),Se=n("div"),y(Ss.$$.fragment),R_=m(),Ft=n("p"),M_=a("The "),$l=n("a"),E_=a("RoFormerForSequenceClassification"),z_=a(" forward method, overrides the "),sc=n("code"),j_=a("__call__"),C_=a(" special method."),q_=m(),y(xn.$$.fragment),P_=m(),y(Rn.$$.fragment),A_=m(),y(Mn.$$.fragment),L_=m(),y(En.$$.fragment),O_=m(),y(zn.$$.fragment),th=m(),yt=n("h2"),jn=n("a"),ac=n("span"),y(Ws.$$.fragment),I_=m(),ic=n("span"),D_=a("RoFormerForMultipleChoice"),nh=m(),_o=n("div"),y(Us.$$.fragment),N_=m(),lc=n("p"),S_=a(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),W_=m(),Qs=n("p"),U_=a("This model is a PyTorch "),Hs=n("a"),Q_=a("torch.nn.Module"),H_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),V_=m(),To=n("div"),y(Vs.$$.fragment),K_=m(),bt=n("p"),J_=a("The "),xl=n("a"),B_=a("RoFormerForMultipleChoice"),G_=a(" forward method, overrides the "),dc=n("code"),X_=a("__call__"),Y_=a(" special method."),Z_=m(),y(Cn.$$.fragment),ek=m(),y(qn.$$.fragment),rh=m(),Tt=n("h2"),Pn=n("a"),cc=n("span"),y(Ks.$$.fragment),ok=m(),pc=n("span"),tk=a("RoFormerForTokenClassification"),sh=m(),ko=n("div"),y(Js.$$.fragment),nk=m(),mc=n("p"),rk=a(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),sk=m(),Bs=n("p"),ak=a("This model is a PyTorch "),Gs=n("a"),ik=a("torch.nn.Module"),lk=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dk=m(),oo=n("div"),y(Xs.$$.fragment),ck=m(),wt=n("p"),pk=a("The "),Rl=n("a"),mk=a("RoFormerForTokenClassification"),hk=a(" forward method, overrides the "),hc=n("code"),fk=a("__call__"),uk=a(" special method."),gk=m(),y(An.$$.fragment),_k=m(),y(Ln.$$.fragment),kk=m(),y(On.$$.fragment),ah=m(),$t=n("h2"),In=n("a"),fc=n("span"),y(Ys.$$.fragment),vk=m(),uc=n("span"),Fk=a("RoFormerForQuestionAnswering"),ih=m(),vo=n("div"),y(Zs.$$.fragment),yk=m(),xt=n("p"),bk=a(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),gc=n("code"),Tk=a("span start logits"),wk=a(" and "),_c=n("code"),$k=a("span end logits"),xk=a(")."),Rk=m(),ea=n("p"),Mk=a("This model is a PyTorch "),oa=n("a"),Ek=a("torch.nn.Module"),zk=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jk=m(),to=n("div"),y(ta.$$.fragment),Ck=m(),Rt=n("p"),qk=a("The "),Ml=n("a"),Pk=a("RoFormerForQuestionAnswering"),Ak=a(" forward method, overrides the "),kc=n("code"),Lk=a("__call__"),Ok=a(" special method."),Ik=m(),y(Dn.$$.fragment),Dk=m(),y(Nn.$$.fragment),Nk=m(),y(Sn.$$.fragment),lh=m(),Mt=n("h2"),Wn=n("a"),vc=n("span"),y(na.$$.fragment),Sk=m(),Fc=n("span"),Wk=a("TFRoFormerModel"),dh=m(),Qe=n("div"),y(ra.$$.fragment),Uk=m(),yc=n("p"),Qk=a("The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top."),Hk=m(),sa=n("p"),Vk=a("This model inherits from "),El=n("a"),Kk=a("TFPreTrainedModel"),Jk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bk=m(),aa=n("p"),Gk=a("This model is also a "),ia=n("a"),Xk=a("tf.keras.Model"),Yk=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zk=m(),y(Un.$$.fragment),ev=m(),wo=n("div"),y(la.$$.fragment),ov=m(),Et=n("p"),tv=a("The "),zl=n("a"),nv=a("TFRoFormerModel"),rv=a(" forward method, overrides the "),bc=n("code"),sv=a("__call__"),av=a(" special method."),iv=m(),y(Qn.$$.fragment),lv=m(),y(Hn.$$.fragment),ch=m(),zt=n("h2"),Vn=n("a"),Tc=n("span"),y(da.$$.fragment),dv=m(),wc=n("span"),cv=a("TFRoFormerForMaskedLM"),ph=m(),He=n("div"),y(ca.$$.fragment),pv=m(),pa=n("p"),mv=a("RoFormer Model with a "),$c=n("code"),hv=a("language modeling"),fv=a(" head on top."),uv=m(),ma=n("p"),gv=a("This model inherits from "),jl=n("a"),_v=a("TFPreTrainedModel"),kv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vv=m(),ha=n("p"),Fv=a("This model is also a "),fa=n("a"),yv=a("tf.keras.Model"),bv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tv=m(),y(Kn.$$.fragment),wv=m(),no=n("div"),y(ua.$$.fragment),$v=m(),jt=n("p"),xv=a("The "),Cl=n("a"),Rv=a("TFRoFormerForMaskedLM"),Mv=a(" forward method, overrides the "),xc=n("code"),Ev=a("__call__"),zv=a(" special method."),jv=m(),y(Jn.$$.fragment),Cv=m(),y(Bn.$$.fragment),qv=m(),y(Gn.$$.fragment),mh=m(),Ct=n("h2"),Xn=n("a"),Rc=n("span"),y(ga.$$.fragment),Pv=m(),Mc=n("span"),Av=a("TFRoFormerForCausalLM"),hh=m(),Ve=n("div"),y(_a.$$.fragment),Lv=m(),ka=n("p"),Ov=a("RoFormer Model with a "),Ec=n("code"),Iv=a("language modeling"),Dv=a(" head on top for CLM fine-tuning."),Nv=m(),va=n("p"),Sv=a("This model inherits from "),ql=n("a"),Wv=a("TFPreTrainedModel"),Uv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qv=m(),Fa=n("p"),Hv=a("This model is also a "),ya=n("a"),Vv=a("tf.keras.Model"),Kv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jv=m(),y(Yn.$$.fragment),Bv=m(),Yo=n("div"),y(ba.$$.fragment),Gv=m(),Ye=n("p"),Xv=a("labels ("),zc=n("code"),Yv=a("tf.Tensor"),Zv=a(" or "),jc=n("code"),eF=a("np.ndarray"),oF=a(" of shape "),Cc=n("code"),tF=a("(batch_size, sequence_length)"),nF=a(", "),qc=n("em"),rF=a("optional"),sF=a(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Pc=n("code"),aF=a("[0, ..., config.vocab_size - 1]"),iF=a("."),lF=m(),y(Zn.$$.fragment),fh=m(),qt=n("h2"),er=n("a"),Ac=n("span"),y(Ta.$$.fragment),dF=m(),Lc=n("span"),cF=a("TFRoFormerForSequenceClassification"),uh=m(),Ke=n("div"),y(wa.$$.fragment),pF=m(),Oc=n("p"),mF=a("RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),hF=m(),$a=n("p"),fF=a("This model inherits from "),Pl=n("a"),uF=a("TFPreTrainedModel"),gF=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_F=m(),xa=n("p"),kF=a("This model is also a "),Ra=n("a"),vF=a("tf.keras.Model"),FF=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yF=m(),y(or.$$.fragment),bF=m(),ro=n("div"),y(Ma.$$.fragment),TF=m(),Pt=n("p"),wF=a("The "),Al=n("a"),$F=a("TFRoFormerForSequenceClassification"),xF=a(" forward method, overrides the "),Ic=n("code"),RF=a("__call__"),MF=a(" special method."),EF=m(),y(tr.$$.fragment),zF=m(),y(nr.$$.fragment),jF=m(),y(rr.$$.fragment),gh=m(),At=n("h2"),sr=n("a"),Dc=n("span"),y(Ea.$$.fragment),CF=m(),Nc=n("span"),qF=a("TFRoFormerForMultipleChoice"),_h=m(),Je=n("div"),y(za.$$.fragment),PF=m(),Sc=n("p"),AF=a(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),LF=m(),ja=n("p"),OF=a("This model inherits from "),Ll=n("a"),IF=a("TFPreTrainedModel"),DF=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),NF=m(),Ca=n("p"),SF=a("This model is also a "),qa=n("a"),WF=a("tf.keras.Model"),UF=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),QF=m(),y(ar.$$.fragment),HF=m(),$o=n("div"),y(Pa.$$.fragment),VF=m(),Lt=n("p"),KF=a("The "),Ol=n("a"),JF=a("TFRoFormerForMultipleChoice"),BF=a(" forward method, overrides the "),Wc=n("code"),GF=a("__call__"),XF=a(" special method."),YF=m(),y(ir.$$.fragment),ZF=m(),y(lr.$$.fragment),kh=m(),Ot=n("h2"),dr=n("a"),Uc=n("span"),y(Aa.$$.fragment),ey=m(),Qc=n("span"),oy=a("TFRoFormerForTokenClassification"),vh=m(),Be=n("div"),y(La.$$.fragment),ty=m(),Hc=n("p"),ny=a(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ry=m(),Oa=n("p"),sy=a("This model inherits from "),Il=n("a"),ay=a("TFPreTrainedModel"),iy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ly=m(),Ia=n("p"),dy=a("This model is also a "),Da=n("a"),cy=a("tf.keras.Model"),py=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),my=m(),y(cr.$$.fragment),hy=m(),so=n("div"),y(Na.$$.fragment),fy=m(),It=n("p"),uy=a("The "),Dl=n("a"),gy=a("TFRoFormerForTokenClassification"),_y=a(" forward method, overrides the "),Vc=n("code"),ky=a("__call__"),vy=a(" special method."),Fy=m(),y(pr.$$.fragment),yy=m(),y(mr.$$.fragment),by=m(),y(hr.$$.fragment),Fh=m(),Dt=n("h2"),fr=n("a"),Kc=n("span"),y(Sa.$$.fragment),Ty=m(),Jc=n("span"),wy=a("TFRoFormerForQuestionAnswering"),yh=m(),Ge=n("div"),y(Wa.$$.fragment),$y=m(),Nt=n("p"),xy=a(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Bc=n("code"),Ry=a("span start logits"),My=a(" and "),Gc=n("code"),Ey=a("span end logits"),zy=a(")."),jy=m(),Ua=n("p"),Cy=a("This model inherits from "),Nl=n("a"),qy=a("TFPreTrainedModel"),Py=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ay=m(),Qa=n("p"),Ly=a("This model is also a "),Ha=n("a"),Oy=a("tf.keras.Model"),Iy=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dy=m(),y(ur.$$.fragment),Ny=m(),ao=n("div"),y(Va.$$.fragment),Sy=m(),St=n("p"),Wy=a("The "),Sl=n("a"),Uy=a("TFRoFormerForQuestionAnswering"),Qy=a(" forward method, overrides the "),Xc=n("code"),Hy=a("__call__"),Vy=a(" special method."),Ky=m(),y(gr.$$.fragment),Jy=m(),y(_r.$$.fragment),By=m(),y(kr.$$.fragment),bh=m(),Wt=n("h2"),vr=n("a"),Yc=n("span"),y(Ka.$$.fragment),Gy=m(),Zc=n("span"),Xy=a("FlaxRoFormerModel"),Th=m(),Pe=n("div"),y(Ja.$$.fragment),Yy=m(),ep=n("p"),Zy=a("The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top."),e2=m(),Ba=n("p"),o2=a("This model inherits from "),Wl=n("a"),t2=a("FlaxPreTrainedModel"),n2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),r2=m(),Ga=n("p"),s2=a("This model is also a Flax Linen "),Xa=n("a"),a2=a("flax.linen.Module"),i2=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),l2=m(),op=n("p"),d2=a("Finally, this model supports inherent JAX features such as:"),c2=m(),Wo=n("ul"),tp=n("li"),Ya=n("a"),p2=a("Just-In-Time (JIT) compilation"),m2=m(),np=n("li"),Za=n("a"),h2=a("Automatic Differentiation"),f2=m(),rp=n("li"),ei=n("a"),u2=a("Vectorization"),g2=m(),sp=n("li"),oi=n("a"),_2=a("Parallelization"),k2=m(),xo=n("div"),y(ti.$$.fragment),v2=m(),Ut=n("p"),F2=a("The "),ap=n("code"),y2=a("FlaxRoFormerPreTrainedModel"),b2=a(" forward method, overrides the "),ip=n("code"),T2=a("__call__"),w2=a(" special method."),$2=m(),y(Fr.$$.fragment),x2=m(),y(yr.$$.fragment),wh=m(),Qt=n("h2"),br=n("a"),lp=n("span"),y(ni.$$.fragment),R2=m(),dp=n("span"),M2=a("FlaxRoFormerForMaskedLM"),$h=m(),Ae=n("div"),y(ri.$$.fragment),E2=m(),si=n("p"),z2=a("RoFormer Model with a "),cp=n("code"),j2=a("language modeling"),C2=a(" head on top."),q2=m(),ai=n("p"),P2=a("This model inherits from "),Ul=n("a"),A2=a("FlaxPreTrainedModel"),L2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),O2=m(),ii=n("p"),I2=a("This model is also a Flax Linen "),li=n("a"),D2=a("flax.linen.Module"),N2=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),S2=m(),pp=n("p"),W2=a("Finally, this model supports inherent JAX features such as:"),U2=m(),Uo=n("ul"),mp=n("li"),di=n("a"),Q2=a("Just-In-Time (JIT) compilation"),H2=m(),hp=n("li"),ci=n("a"),V2=a("Automatic Differentiation"),K2=m(),fp=n("li"),pi=n("a"),J2=a("Vectorization"),B2=m(),up=n("li"),mi=n("a"),G2=a("Parallelization"),X2=m(),Ro=n("div"),y(hi.$$.fragment),Y2=m(),Ht=n("p"),Z2=a("The "),gp=n("code"),eb=a("FlaxRoFormerPreTrainedModel"),ob=a(" forward method, overrides the "),_p=n("code"),tb=a("__call__"),nb=a(" special method."),rb=m(),y(Tr.$$.fragment),sb=m(),y(wr.$$.fragment),xh=m(),Vt=n("h2"),$r=n("a"),kp=n("span"),y(fi.$$.fragment),ab=m(),vp=n("span"),ib=a("FlaxRoFormerForSequenceClassification"),Rh=m(),Le=n("div"),y(ui.$$.fragment),lb=m(),Fp=n("p"),db=a(`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cb=m(),gi=n("p"),pb=a("This model inherits from "),Ql=n("a"),mb=a("FlaxPreTrainedModel"),hb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fb=m(),_i=n("p"),ub=a("This model is also a Flax Linen "),ki=n("a"),gb=a("flax.linen.Module"),_b=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),kb=m(),yp=n("p"),vb=a("Finally, this model supports inherent JAX features such as:"),Fb=m(),Qo=n("ul"),bp=n("li"),vi=n("a"),yb=a("Just-In-Time (JIT) compilation"),bb=m(),Tp=n("li"),Fi=n("a"),Tb=a("Automatic Differentiation"),wb=m(),wp=n("li"),yi=n("a"),$b=a("Vectorization"),xb=m(),$p=n("li"),bi=n("a"),Rb=a("Parallelization"),Mb=m(),Mo=n("div"),y(Ti.$$.fragment),Eb=m(),Kt=n("p"),zb=a("The "),xp=n("code"),jb=a("FlaxRoFormerPreTrainedModel"),Cb=a(" forward method, overrides the "),Rp=n("code"),qb=a("__call__"),Pb=a(" special method."),Ab=m(),y(xr.$$.fragment),Lb=m(),y(Rr.$$.fragment),Mh=m(),Jt=n("h2"),Mr=n("a"),Mp=n("span"),y(wi.$$.fragment),Ob=m(),Ep=n("span"),Ib=a("FlaxRoFormerForMultipleChoice"),Eh=m(),Oe=n("div"),y($i.$$.fragment),Db=m(),zp=n("p"),Nb=a(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Sb=m(),xi=n("p"),Wb=a("This model inherits from "),Hl=n("a"),Ub=a("FlaxPreTrainedModel"),Qb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hb=m(),Ri=n("p"),Vb=a("This model is also a Flax Linen "),Mi=n("a"),Kb=a("flax.linen.Module"),Jb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Bb=m(),jp=n("p"),Gb=a("Finally, this model supports inherent JAX features such as:"),Xb=m(),Ho=n("ul"),Cp=n("li"),Ei=n("a"),Yb=a("Just-In-Time (JIT) compilation"),Zb=m(),qp=n("li"),zi=n("a"),eT=a("Automatic Differentiation"),oT=m(),Pp=n("li"),ji=n("a"),tT=a("Vectorization"),nT=m(),Ap=n("li"),Ci=n("a"),rT=a("Parallelization"),sT=m(),Eo=n("div"),y(qi.$$.fragment),aT=m(),Bt=n("p"),iT=a("The "),Lp=n("code"),lT=a("FlaxRoFormerPreTrainedModel"),dT=a(" forward method, overrides the "),Op=n("code"),cT=a("__call__"),pT=a(" special method."),mT=m(),y(Er.$$.fragment),hT=m(),y(zr.$$.fragment),zh=m(),Gt=n("h2"),jr=n("a"),Ip=n("span"),y(Pi.$$.fragment),fT=m(),Dp=n("span"),uT=a("FlaxRoFormerForTokenClassification"),jh=m(),Ie=n("div"),y(Ai.$$.fragment),gT=m(),Np=n("p"),_T=a(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),kT=m(),Li=n("p"),vT=a("This model inherits from "),Vl=n("a"),FT=a("FlaxPreTrainedModel"),yT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bT=m(),Oi=n("p"),TT=a("This model is also a Flax Linen "),Ii=n("a"),wT=a("flax.linen.Module"),$T=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xT=m(),Sp=n("p"),RT=a("Finally, this model supports inherent JAX features such as:"),MT=m(),Vo=n("ul"),Wp=n("li"),Di=n("a"),ET=a("Just-In-Time (JIT) compilation"),zT=m(),Up=n("li"),Ni=n("a"),jT=a("Automatic Differentiation"),CT=m(),Qp=n("li"),Si=n("a"),qT=a("Vectorization"),PT=m(),Hp=n("li"),Wi=n("a"),AT=a("Parallelization"),LT=m(),zo=n("div"),y(Ui.$$.fragment),OT=m(),Xt=n("p"),IT=a("The "),Vp=n("code"),DT=a("FlaxRoFormerPreTrainedModel"),NT=a(" forward method, overrides the "),Kp=n("code"),ST=a("__call__"),WT=a(" special method."),UT=m(),y(Cr.$$.fragment),QT=m(),y(qr.$$.fragment),Ch=m(),Yt=n("h2"),Pr=n("a"),Jp=n("span"),y(Qi.$$.fragment),HT=m(),Bp=n("span"),VT=a("FlaxRoFormerForQuestionAnswering"),qh=m(),De=n("div"),y(Hi.$$.fragment),KT=m(),Zt=n("p"),JT=a(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gp=n("code"),BT=a("span start logits"),GT=a(" and "),Xp=n("code"),XT=a("span end logits"),YT=a(")."),ZT=m(),Vi=n("p"),ew=a("This model inherits from "),Kl=n("a"),ow=a("FlaxPreTrainedModel"),tw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nw=m(),Ki=n("p"),rw=a("This model is also a Flax Linen "),Ji=n("a"),sw=a("flax.linen.Module"),aw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),iw=m(),Yp=n("p"),lw=a("Finally, this model supports inherent JAX features such as:"),dw=m(),Ko=n("ul"),Zp=n("li"),Bi=n("a"),cw=a("Just-In-Time (JIT) compilation"),pw=m(),em=n("li"),Gi=n("a"),mw=a("Automatic Differentiation"),hw=m(),om=n("li"),Xi=n("a"),fw=a("Vectorization"),uw=m(),tm=n("li"),Yi=n("a"),gw=a("Parallelization"),_w=m(),jo=n("div"),y(Zi.$$.fragment),kw=m(),en=n("p"),vw=a("The "),nm=n("code"),Fw=a("FlaxRoFormerPreTrainedModel"),yw=a(" forward method, overrides the "),rm=n("code"),bw=a("__call__"),Tw=a(" special method."),ww=m(),y(Ar.$$.fragment),$w=m(),y(Lr.$$.fragment),this.h()},l(t){const v=S4('[data-svelte="svelte-1phssyn"]',document.head);d=r(v,"META",{name:!0,content:!0}),v.forEach(o),g=h(t),c=r(t,"H1",{class:!0});var el=s(c);p=r(el,"A",{id:!0,class:!0,href:!0});var sm=s(p);_=r(sm,"SPAN",{});var am=s(_);b(l.$$.fragment,am),am.forEach(o),sm.forEach(o),f=h(el),M=r(el,"SPAN",{});var im=s(M);ue=i(im,"RoFormer"),im.forEach(o),el.forEach(o),B=h(t),z=r(t,"H2",{class:!0});var ol=s(z);Z=r(ol,"A",{id:!0,class:!0,href:!0});var lm=s(Z);N=r(lm,"SPAN",{});var dm=s(N);b(ee.$$.fragment,dm),dm.forEach(o),lm.forEach(o),ge=h(ol),S=r(ol,"SPAN",{});var cm=s(S);_e=i(cm,"Overview"),cm.forEach(o),ol.forEach(o),pe=h(t),J=r(t,"P",{});var tl=s(J);L=i(tl,"The RoFormer model was proposed in "),oe=r(tl,"A",{href:!0,rel:!0});var pm=s(oe);G=i(pm,"RoFormer: Enhanced Transformer with Rotary Position Embedding"),pm.forEach(o),j=i(tl," by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu."),tl.forEach(o),q=h(t),ne=r(t,"P",{});var mm=s(ne);Q=i(mm,"The abstract from the paper is the following:"),mm.forEach(o),me=h(t),re=r(t,"P",{});var hm=s(re);W=r(hm,"EM",{});var fm=s(W);ke=i(fm,`Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.`),fm.forEach(o),hm.forEach(o),he=h(t),C=r(t,"P",{});var um=s(C);ve=i(um,"Tips:"),um.forEach(o),U=h(t),se=r(t,"UL",{});var gm=s(se);ce=r(gm,"LI",{});var _m=s(ce);H=i(_m,`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`),_m.forEach(o),gm.forEach(o),fe=h(t),X=r(t,"P",{});var on=s(X);O=i(on,"This model was contributed by "),te=r(on,"A",{href:!0,rel:!0});var km=s(te);V=i(km,"junnyu"),km.forEach(o),Fe=i(on,". The original code can be found "),F=r(on,"A",{href:!0,rel:!0});var vm=s(F);E=i(vm,"here"),vm.forEach(o),Y=i(on,"."),on.forEach(o),Me=h(t),be=r(t,"H2",{class:!0});var nl=s(be);P=r(nl,"A",{id:!0,class:!0,href:!0});var Fm=s(P);xe=r(Fm,"SPAN",{});var ym=s(xe);b(we.$$.fragment,ym),ym.forEach(o),Fm.forEach(o),je=h(nl),A=r(nl,"SPAN",{});var bm=s(A);K=i(bm,"RoFormerConfig"),bm.forEach(o),nl.forEach(o),Ee=h(t),ae=r(t,"DIV",{class:!0});var Jo=s(ae);b(I.$$.fragment,Jo),Ce=h(Jo),Te=r(Jo,"P",{});var tn=s(Te);ye=i(tn,"This is the configuration class to store the configuration of a "),$e=r(tn,"A",{href:!0});var Tm=s($e);Nf=i(Tm,"RoFormerModel"),Tm.forEach(o),Sf=i(tn,`. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
`),rs=r(tn,"A",{href:!0,rel:!0});var wm=s(rs);Wf=i(wm,"junnyu/roformer_chinese_base"),wm.forEach(o),Uf=i(tn," architecture."),tn.forEach(o),Qf=h(Jo),it=r(Jo,"P",{});var nn=s(it);Hf=i(nn,"Configuration objects inherit from "),pl=r(nn,"A",{href:!0});var $m=s(pl);Vf=i($m,"PretrainedConfig"),$m.forEach(o),Kf=i(nn,` and can be used to control the model outputs. Read the
documentation from `),ml=r(nn,"A",{href:!0});var xm=s(ml);Jf=i(xm,"PretrainedConfig"),xm.forEach(o),Bf=i(nn," for more information."),nn.forEach(o),Gf=h(Jo),b(an.$$.fragment,Jo),Jo.forEach(o),Qm=h(t),lt=r(t,"H2",{class:!0});var rl=s(lt);ln=r(rl,"A",{id:!0,class:!0,href:!0});var Rm=s(ln);wd=r(Rm,"SPAN",{});var Mm=s(wd);b(ss.$$.fragment,Mm),Mm.forEach(o),Rm.forEach(o),Xf=h(rl),$d=r(rl,"SPAN",{});var Em=s($d);Yf=i(Em,"RoFormerTokenizer"),Em.forEach(o),rl.forEach(o),Hm=h(t),qe=r(t,"DIV",{class:!0});var Ne=s(qe);b(as.$$.fragment,Ne),Zf=h(Ne),is=r(Ne,"P",{});var sl=s(is);eu=i(sl,"Construct a RoFormer tokenizer. Based on "),ls=r(sl,"A",{href:!0,rel:!0});var zm=s(ls);ou=i(zm,"Rust Jieba"),zm.forEach(o),tu=i(sl,"."),sl.forEach(o),nu=h(Ne),ds=r(Ne,"P",{});var al=s(ds);ru=i(al,"This tokenizer inherits from "),hl=r(al,"A",{href:!0});var jm=s(hl);su=i(jm,"PreTrainedTokenizer"),jm.forEach(o),au=i(al,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),al.forEach(o),iu=h(Ne),b(dn.$$.fragment,Ne),lu=h(Ne),Go=r(Ne,"DIV",{class:!0});var rn=s(Go);b(cs.$$.fragment,rn),du=h(rn),xd=r(rn,"P",{});var Cm=s(xd);cu=i(Cm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Cm.forEach(o),pu=h(rn),ps=r(rn,"UL",{});var il=s(ps);fl=r(il,"LI",{});var Jl=s(fl);mu=i(Jl,"single sequence: "),Rd=r(Jl,"CODE",{});var qm=s(Rd);hu=i(qm,"[CLS] X [SEP]"),qm.forEach(o),Jl.forEach(o),fu=h(il),ul=r(il,"LI",{});var Bl=s(ul);uu=i(Bl,"pair of sequences: "),Md=r(Bl,"CODE",{});var Pm=s(Md);gu=i(Pm,"[CLS] A [SEP] B [SEP]"),Pm.forEach(o),Bl.forEach(o),il.forEach(o),rn.forEach(o),_u=h(Ne),cn=r(Ne,"DIV",{class:!0});var ll=s(cn);b(ms.$$.fragment,ll),ku=h(ll),hs=r(ll,"P",{});var dl=s(hs);vu=i(dl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ed=r(dl,"CODE",{});var Am=s(Ed);Fu=i(Am,"prepare_for_model"),Am.forEach(o),yu=i(dl," method."),dl.forEach(o),ll.forEach(o),bu=h(Ne),Fo=r(Ne,"DIV",{class:!0});var Bo=s(Fo);b(fs.$$.fragment,Bo),Tu=h(Bo),zd=r(Bo,"P",{});var Lm=s(zd);wu=i(Lm,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer"),Lm.forEach(o),$u=h(Bo),b(pn.$$.fragment,Bo),xu=h(Bo),dt=r(Bo,"P",{});var sn=s(dt);Ru=i(sn,"If "),jd=r(sn,"CODE",{});var Om=s(jd);Mu=i(Om,"token_ids_1"),Om.forEach(o),Eu=i(sn," is "),Cd=r(sn,"CODE",{});var Im=s(Cd);zu=i(Im,"None"),Im.forEach(o),ju=i(sn,", this method only returns the first portion of the mask (0s)."),sn.forEach(o),Bo.forEach(o),Cu=h(Ne),gl=r(Ne,"DIV",{class:!0});var Dm=s(gl);b(us.$$.fragment,Dm),Dm.forEach(o),Ne.forEach(o),Vm=h(t),ct=r(t,"H2",{class:!0});var cl=s(ct);mn=r(cl,"A",{id:!0,class:!0,href:!0});var Nm=s(mn);qd=r(Nm,"SPAN",{});var Sm=s(qd);b(gs.$$.fragment,Sm),Sm.forEach(o),Nm.forEach(o),qu=h(cl),Pd=r(cl,"SPAN",{});var Wm=s(Pd);Pu=i(Wm,"RoFormerTokenizerFast"),Wm.forEach(o),cl.forEach(o),Km=h(t),We=r(t,"DIV",{class:!0});var Ze=s(We);b(_s.$$.fragment,Ze),Au=h(Ze),ks=r(Ze,"P",{});var Ah=s(ks);Lu=i(Ah,"Construct a \u201Cfast\u201D RoFormer tokenizer (backed by HuggingFace\u2019s "),Ad=r(Ah,"EM",{});var Mw=s(Ad);Ou=i(Mw,"tokenizers"),Mw.forEach(o),Iu=i(Ah," library)."),Ah.forEach(o),Du=h(Ze),hn=r(Ze,"P",{});var Um=s(hn);_l=r(Um,"A",{href:!0});var Ew=s(_l);Nu=i(Ew,"RoFormerTokenizerFast"),Ew.forEach(o),Su=i(Um," is almost identical to "),kl=r(Um,"A",{href:!0});var zw=s(kl);Wu=i(zw,"BertTokenizerFast"),zw.forEach(o),Uu=i(Um,` and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`),Um.forEach(o),Qu=h(Ze),vs=r(Ze,"P",{});var Lh=s(vs);Hu=i(Lh,"This tokenizer inherits from "),vl=r(Lh,"A",{href:!0});var jw=s(vl);Vu=i(jw,"PreTrainedTokenizerFast"),jw.forEach(o),Ku=i(Lh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Lh.forEach(o),Ju=h(Ze),b(fn.$$.fragment,Ze),Bu=h(Ze),Xo=r(Ze,"DIV",{class:!0});var Gl=s(Xo);b(Fs.$$.fragment,Gl),Gu=h(Gl),Ld=r(Gl,"P",{});var Cw=s(Ld);Xu=i(Cw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Cw.forEach(o),Yu=h(Gl),ys=r(Gl,"UL",{});var Oh=s(ys);Fl=r(Oh,"LI",{});var xw=s(Fl);Zu=i(xw,"single sequence: "),Od=r(xw,"CODE",{});var qw=s(Od);eg=i(qw,"[CLS] X [SEP]"),qw.forEach(o),xw.forEach(o),og=h(Oh),yl=r(Oh,"LI",{});var Rw=s(yl);tg=i(Rw,"pair of sequences: "),Id=r(Rw,"CODE",{});var Pw=s(Id);ng=i(Pw,"[CLS] A [SEP] B [SEP]"),Pw.forEach(o),Rw.forEach(o),Oh.forEach(o),Gl.forEach(o),Ze.forEach(o),Jm=h(t),pt=r(t,"H2",{class:!0});var Ih=s(pt);un=r(Ih,"A",{id:!0,class:!0,href:!0});var Aw=s(un);Dd=r(Aw,"SPAN",{});var Lw=s(Dd);b(bs.$$.fragment,Lw),Lw.forEach(o),Aw.forEach(o),rg=h(Ih),Nd=r(Ih,"SPAN",{});var Ow=s(Nd);sg=i(Ow,"RoFormerModel"),Ow.forEach(o),Ih.forEach(o),Bm=h(t),Xe=r(t,"DIV",{class:!0});var Zo=s(Xe);b(Ts.$$.fragment,Zo),ag=h(Zo),ws=r(Zo,"P",{});var Dh=s(ws);ig=i(Dh,`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$s=r(Dh,"A",{href:!0,rel:!0});var Iw=s($s);lg=i(Iw,"torch.nn.Module"),Iw.forEach(o),dg=i(Dh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dh.forEach(o),cg=h(Zo),xs=r(Zo,"P",{});var Nh=s(xs);pg=i(Nh,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Rs=r(Nh,"A",{href:!0,rel:!0});var Dw=s(Rs);mg=i(Dw,`Attention is
all you need`),Dw.forEach(o),hg=i(Nh,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Nh.forEach(o),fg=h(Zo),Ue=r(Zo,"P",{});var io=s(Ue);ug=i(io,"To behave as an decoder the model needs to be initialized with the "),Sd=r(io,"CODE",{});var Nw=s(Sd);gg=i(Nw,"is_decoder"),Nw.forEach(o),_g=i(io,` argument of the configuration set
to `),Wd=r(io,"CODE",{});var Sw=s(Wd);kg=i(Sw,"True"),Sw.forEach(o),vg=i(io,". To be used in a Seq2Seq model, the model needs to initialized with both "),Ud=r(io,"CODE",{});var Ww=s(Ud);Fg=i(Ww,"is_decoder"),Ww.forEach(o),yg=i(io,` argument and
`),Qd=r(io,"CODE",{});var Uw=s(Qd);bg=i(Uw,"add_cross_attention"),Uw.forEach(o),Tg=i(io," set to "),Hd=r(io,"CODE",{});var Qw=s(Hd);wg=i(Qw,"True"),Qw.forEach(o),$g=i(io,"; an "),Vd=r(io,"CODE",{});var Hw=s(Vd);xg=i(Hw,"encoder_hidden_states"),Hw.forEach(o),Rg=i(io," is then expected as an input to the forward pass."),io.forEach(o),Mg=h(Zo),yo=r(Zo,"DIV",{class:!0});var Or=s(yo);b(Ms.$$.fragment,Or),Eg=h(Or),mt=r(Or,"P",{});var Xl=s(mt);zg=i(Xl,"The "),bl=r(Xl,"A",{href:!0});var Vw=s(bl);jg=i(Vw,"RoFormerModel"),Vw.forEach(o),Cg=i(Xl," forward method, overrides the "),Kd=r(Xl,"CODE",{});var Kw=s(Kd);qg=i(Kw,"__call__"),Kw.forEach(o),Pg=i(Xl," special method."),Xl.forEach(o),Ag=h(Or),b(gn.$$.fragment,Or),Lg=h(Or),b(_n.$$.fragment,Or),Or.forEach(o),Zo.forEach(o),Gm=h(t),ht=r(t,"H2",{class:!0});var Sh=s(ht);kn=r(Sh,"A",{id:!0,class:!0,href:!0});var Jw=s(kn);Jd=r(Jw,"SPAN",{});var Bw=s(Jd);b(Es.$$.fragment,Bw),Bw.forEach(o),Jw.forEach(o),Og=h(Sh),Bd=r(Sh,"SPAN",{});var Gw=s(Bd);Ig=i(Gw,"RoFormerForCausalLM"),Gw.forEach(o),Sh.forEach(o),Xm=h(t),No=r(t,"DIV",{class:!0});var Yl=s(No);b(zs.$$.fragment,Yl),Dg=h(Yl),ft=r(Yl,"P",{});var Zl=s(ft);Ng=i(Zl,"RoFormer Model with a "),Gd=r(Zl,"CODE",{});var Xw=s(Gd);Sg=i(Xw,"language modeling"),Xw.forEach(o),Wg=i(Zl,` head on top for CLM fine-tuning.
This model is a PyTorch `),js=r(Zl,"A",{href:!0,rel:!0});var Yw=s(js);Ug=i(Yw,"torch.nn.Module"),Yw.forEach(o),Qg=i(Zl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zl.forEach(o),Hg=h(Yl),bo=r(Yl,"DIV",{class:!0});var Ir=s(bo);b(Cs.$$.fragment,Ir),Vg=h(Ir),ut=r(Ir,"P",{});var ed=s(ut);Kg=i(ed,"The "),Tl=r(ed,"A",{href:!0});var Zw=s(Tl);Jg=i(Zw,"RoFormerForCausalLM"),Zw.forEach(o),Bg=i(ed," forward method, overrides the "),Xd=r(ed,"CODE",{});var e1=s(Xd);Gg=i(e1,"__call__"),e1.forEach(o),Xg=i(ed," special method."),ed.forEach(o),Yg=h(Ir),b(vn.$$.fragment,Ir),Zg=h(Ir),b(Fn.$$.fragment,Ir),Ir.forEach(o),Yl.forEach(o),Ym=h(t),gt=r(t,"H2",{class:!0});var Wh=s(gt);yn=r(Wh,"A",{id:!0,class:!0,href:!0});var o1=s(yn);Yd=r(o1,"SPAN",{});var t1=s(Yd);b(qs.$$.fragment,t1),t1.forEach(o),o1.forEach(o),e_=h(Wh),Zd=r(Wh,"SPAN",{});var n1=s(Zd);o_=i(n1,"RoFormerForMaskedLM"),n1.forEach(o),Wh.forEach(o),Zm=h(t),So=r(t,"DIV",{class:!0});var od=s(So);b(Ps.$$.fragment,od),t_=h(od),_t=r(od,"P",{});var td=s(_t);n_=i(td,"RoFormer Model with a "),ec=r(td,"CODE",{});var r1=s(ec);r_=i(r1,"language modeling"),r1.forEach(o),s_=i(td,` head on top.
This model is a PyTorch `),As=r(td,"A",{href:!0,rel:!0});var s1=s(As);a_=i(s1,"torch.nn.Module"),s1.forEach(o),i_=i(td,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),td.forEach(o),l_=h(od),eo=r(od,"DIV",{class:!0});var et=s(eo);b(Ls.$$.fragment,et),d_=h(et),kt=r(et,"P",{});var nd=s(kt);c_=i(nd,"The "),wl=r(nd,"A",{href:!0});var a1=s(wl);p_=i(a1,"RoFormerForMaskedLM"),a1.forEach(o),m_=i(nd," forward method, overrides the "),oc=r(nd,"CODE",{});var i1=s(oc);h_=i(i1,"__call__"),i1.forEach(o),f_=i(nd," special method."),nd.forEach(o),u_=h(et),b(bn.$$.fragment,et),g_=h(et),b(Tn.$$.fragment,et),__=h(et),b(wn.$$.fragment,et),et.forEach(o),od.forEach(o),eh=h(t),vt=r(t,"H2",{class:!0});var Uh=s(vt);$n=r(Uh,"A",{id:!0,class:!0,href:!0});var l1=s($n);tc=r(l1,"SPAN",{});var d1=s(tc);b(Os.$$.fragment,d1),d1.forEach(o),l1.forEach(o),k_=h(Uh),nc=r(Uh,"SPAN",{});var c1=s(nc);v_=i(c1,"RoFormerForSequenceClassification"),c1.forEach(o),Uh.forEach(o),oh=h(t),go=r(t,"DIV",{class:!0});var Dr=s(go);b(Is.$$.fragment,Dr),F_=h(Dr),rc=r(Dr,"P",{});var p1=s(rc);y_=i(p1,`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),p1.forEach(o),b_=h(Dr),Ds=r(Dr,"P",{});var Qh=s(Ds);T_=i(Qh,"This model is a PyTorch "),Ns=r(Qh,"A",{href:!0,rel:!0});var m1=s(Ns);w_=i(m1,"torch.nn.Module"),m1.forEach(o),$_=i(Qh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qh.forEach(o),x_=h(Dr),Se=r(Dr,"DIV",{class:!0});var lo=s(Se);b(Ss.$$.fragment,lo),R_=h(lo),Ft=r(lo,"P",{});var rd=s(Ft);M_=i(rd,"The "),$l=r(rd,"A",{href:!0});var h1=s($l);E_=i(h1,"RoFormerForSequenceClassification"),h1.forEach(o),z_=i(rd," forward method, overrides the "),sc=r(rd,"CODE",{});var f1=s(sc);j_=i(f1,"__call__"),f1.forEach(o),C_=i(rd," special method."),rd.forEach(o),q_=h(lo),b(xn.$$.fragment,lo),P_=h(lo),b(Rn.$$.fragment,lo),A_=h(lo),b(Mn.$$.fragment,lo),L_=h(lo),b(En.$$.fragment,lo),O_=h(lo),b(zn.$$.fragment,lo),lo.forEach(o),Dr.forEach(o),th=h(t),yt=r(t,"H2",{class:!0});var Hh=s(yt);jn=r(Hh,"A",{id:!0,class:!0,href:!0});var u1=s(jn);ac=r(u1,"SPAN",{});var g1=s(ac);b(Ws.$$.fragment,g1),g1.forEach(o),u1.forEach(o),I_=h(Hh),ic=r(Hh,"SPAN",{});var _1=s(ic);D_=i(_1,"RoFormerForMultipleChoice"),_1.forEach(o),Hh.forEach(o),nh=h(t),_o=r(t,"DIV",{class:!0});var Nr=s(_o);b(Us.$$.fragment,Nr),N_=h(Nr),lc=r(Nr,"P",{});var k1=s(lc);S_=i(k1,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),k1.forEach(o),W_=h(Nr),Qs=r(Nr,"P",{});var Vh=s(Qs);U_=i(Vh,"This model is a PyTorch "),Hs=r(Vh,"A",{href:!0,rel:!0});var v1=s(Hs);Q_=i(v1,"torch.nn.Module"),v1.forEach(o),H_=i(Vh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vh.forEach(o),V_=h(Nr),To=r(Nr,"DIV",{class:!0});var Sr=s(To);b(Vs.$$.fragment,Sr),K_=h(Sr),bt=r(Sr,"P",{});var sd=s(bt);J_=i(sd,"The "),xl=r(sd,"A",{href:!0});var F1=s(xl);B_=i(F1,"RoFormerForMultipleChoice"),F1.forEach(o),G_=i(sd," forward method, overrides the "),dc=r(sd,"CODE",{});var y1=s(dc);X_=i(y1,"__call__"),y1.forEach(o),Y_=i(sd," special method."),sd.forEach(o),Z_=h(Sr),b(Cn.$$.fragment,Sr),ek=h(Sr),b(qn.$$.fragment,Sr),Sr.forEach(o),Nr.forEach(o),rh=h(t),Tt=r(t,"H2",{class:!0});var Kh=s(Tt);Pn=r(Kh,"A",{id:!0,class:!0,href:!0});var b1=s(Pn);cc=r(b1,"SPAN",{});var T1=s(cc);b(Ks.$$.fragment,T1),T1.forEach(o),b1.forEach(o),ok=h(Kh),pc=r(Kh,"SPAN",{});var w1=s(pc);tk=i(w1,"RoFormerForTokenClassification"),w1.forEach(o),Kh.forEach(o),sh=h(t),ko=r(t,"DIV",{class:!0});var Wr=s(ko);b(Js.$$.fragment,Wr),nk=h(Wr),mc=r(Wr,"P",{});var $1=s(mc);rk=i($1,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$1.forEach(o),sk=h(Wr),Bs=r(Wr,"P",{});var Jh=s(Bs);ak=i(Jh,"This model is a PyTorch "),Gs=r(Jh,"A",{href:!0,rel:!0});var x1=s(Gs);ik=i(x1,"torch.nn.Module"),x1.forEach(o),lk=i(Jh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jh.forEach(o),dk=h(Wr),oo=r(Wr,"DIV",{class:!0});var ot=s(oo);b(Xs.$$.fragment,ot),ck=h(ot),wt=r(ot,"P",{});var ad=s(wt);pk=i(ad,"The "),Rl=r(ad,"A",{href:!0});var R1=s(Rl);mk=i(R1,"RoFormerForTokenClassification"),R1.forEach(o),hk=i(ad," forward method, overrides the "),hc=r(ad,"CODE",{});var M1=s(hc);fk=i(M1,"__call__"),M1.forEach(o),uk=i(ad," special method."),ad.forEach(o),gk=h(ot),b(An.$$.fragment,ot),_k=h(ot),b(Ln.$$.fragment,ot),kk=h(ot),b(On.$$.fragment,ot),ot.forEach(o),Wr.forEach(o),ah=h(t),$t=r(t,"H2",{class:!0});var Bh=s($t);In=r(Bh,"A",{id:!0,class:!0,href:!0});var E1=s(In);fc=r(E1,"SPAN",{});var z1=s(fc);b(Ys.$$.fragment,z1),z1.forEach(o),E1.forEach(o),vk=h(Bh),uc=r(Bh,"SPAN",{});var j1=s(uc);Fk=i(j1,"RoFormerForQuestionAnswering"),j1.forEach(o),Bh.forEach(o),ih=h(t),vo=r(t,"DIV",{class:!0});var Ur=s(vo);b(Zs.$$.fragment,Ur),yk=h(Ur),xt=r(Ur,"P",{});var id=s(xt);bk=i(id,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),gc=r(id,"CODE",{});var C1=s(gc);Tk=i(C1,"span start logits"),C1.forEach(o),wk=i(id," and "),_c=r(id,"CODE",{});var q1=s(_c);$k=i(q1,"span end logits"),q1.forEach(o),xk=i(id,")."),id.forEach(o),Rk=h(Ur),ea=r(Ur,"P",{});var Gh=s(ea);Mk=i(Gh,"This model is a PyTorch "),oa=r(Gh,"A",{href:!0,rel:!0});var P1=s(oa);Ek=i(P1,"torch.nn.Module"),P1.forEach(o),zk=i(Gh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gh.forEach(o),jk=h(Ur),to=r(Ur,"DIV",{class:!0});var tt=s(to);b(ta.$$.fragment,tt),Ck=h(tt),Rt=r(tt,"P",{});var ld=s(Rt);qk=i(ld,"The "),Ml=r(ld,"A",{href:!0});var A1=s(Ml);Pk=i(A1,"RoFormerForQuestionAnswering"),A1.forEach(o),Ak=i(ld," forward method, overrides the "),kc=r(ld,"CODE",{});var L1=s(kc);Lk=i(L1,"__call__"),L1.forEach(o),Ok=i(ld," special method."),ld.forEach(o),Ik=h(tt),b(Dn.$$.fragment,tt),Dk=h(tt),b(Nn.$$.fragment,tt),Nk=h(tt),b(Sn.$$.fragment,tt),tt.forEach(o),Ur.forEach(o),lh=h(t),Mt=r(t,"H2",{class:!0});var Xh=s(Mt);Wn=r(Xh,"A",{id:!0,class:!0,href:!0});var O1=s(Wn);vc=r(O1,"SPAN",{});var I1=s(vc);b(na.$$.fragment,I1),I1.forEach(o),O1.forEach(o),Sk=h(Xh),Fc=r(Xh,"SPAN",{});var D1=s(Fc);Wk=i(D1,"TFRoFormerModel"),D1.forEach(o),Xh.forEach(o),dh=h(t),Qe=r(t,"DIV",{class:!0});var Co=s(Qe);b(ra.$$.fragment,Co),Uk=h(Co),yc=r(Co,"P",{});var N1=s(yc);Qk=i(N1,"The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top."),N1.forEach(o),Hk=h(Co),sa=r(Co,"P",{});var Yh=s(sa);Vk=i(Yh,"This model inherits from "),El=r(Yh,"A",{href:!0});var S1=s(El);Kk=i(S1,"TFPreTrainedModel"),S1.forEach(o),Jk=i(Yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yh.forEach(o),Bk=h(Co),aa=r(Co,"P",{});var Zh=s(aa);Gk=i(Zh,"This model is also a "),ia=r(Zh,"A",{href:!0,rel:!0});var W1=s(ia);Xk=i(W1,"tf.keras.Model"),W1.forEach(o),Yk=i(Zh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zh.forEach(o),Zk=h(Co),b(Un.$$.fragment,Co),ev=h(Co),wo=r(Co,"DIV",{class:!0});var Qr=s(wo);b(la.$$.fragment,Qr),ov=h(Qr),Et=r(Qr,"P",{});var dd=s(Et);tv=i(dd,"The "),zl=r(dd,"A",{href:!0});var U1=s(zl);nv=i(U1,"TFRoFormerModel"),U1.forEach(o),rv=i(dd," forward method, overrides the "),bc=r(dd,"CODE",{});var Q1=s(bc);sv=i(Q1,"__call__"),Q1.forEach(o),av=i(dd," special method."),dd.forEach(o),iv=h(Qr),b(Qn.$$.fragment,Qr),lv=h(Qr),b(Hn.$$.fragment,Qr),Qr.forEach(o),Co.forEach(o),ch=h(t),zt=r(t,"H2",{class:!0});var ef=s(zt);Vn=r(ef,"A",{id:!0,class:!0,href:!0});var H1=s(Vn);Tc=r(H1,"SPAN",{});var V1=s(Tc);b(da.$$.fragment,V1),V1.forEach(o),H1.forEach(o),dv=h(ef),wc=r(ef,"SPAN",{});var K1=s(wc);cv=i(K1,"TFRoFormerForMaskedLM"),K1.forEach(o),ef.forEach(o),ph=h(t),He=r(t,"DIV",{class:!0});var qo=s(He);b(ca.$$.fragment,qo),pv=h(qo),pa=r(qo,"P",{});var of=s(pa);mv=i(of,"RoFormer Model with a "),$c=r(of,"CODE",{});var J1=s($c);hv=i(J1,"language modeling"),J1.forEach(o),fv=i(of," head on top."),of.forEach(o),uv=h(qo),ma=r(qo,"P",{});var tf=s(ma);gv=i(tf,"This model inherits from "),jl=r(tf,"A",{href:!0});var B1=s(jl);_v=i(B1,"TFPreTrainedModel"),B1.forEach(o),kv=i(tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf.forEach(o),vv=h(qo),ha=r(qo,"P",{});var nf=s(ha);Fv=i(nf,"This model is also a "),fa=r(nf,"A",{href:!0,rel:!0});var G1=s(fa);yv=i(G1,"tf.keras.Model"),G1.forEach(o),bv=i(nf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf.forEach(o),Tv=h(qo),b(Kn.$$.fragment,qo),wv=h(qo),no=r(qo,"DIV",{class:!0});var nt=s(no);b(ua.$$.fragment,nt),$v=h(nt),jt=r(nt,"P",{});var cd=s(jt);xv=i(cd,"The "),Cl=r(cd,"A",{href:!0});var X1=s(Cl);Rv=i(X1,"TFRoFormerForMaskedLM"),X1.forEach(o),Mv=i(cd," forward method, overrides the "),xc=r(cd,"CODE",{});var Y1=s(xc);Ev=i(Y1,"__call__"),Y1.forEach(o),zv=i(cd," special method."),cd.forEach(o),jv=h(nt),b(Jn.$$.fragment,nt),Cv=h(nt),b(Bn.$$.fragment,nt),qv=h(nt),b(Gn.$$.fragment,nt),nt.forEach(o),qo.forEach(o),mh=h(t),Ct=r(t,"H2",{class:!0});var rf=s(Ct);Xn=r(rf,"A",{id:!0,class:!0,href:!0});var Z1=s(Xn);Rc=r(Z1,"SPAN",{});var e$=s(Rc);b(ga.$$.fragment,e$),e$.forEach(o),Z1.forEach(o),Pv=h(rf),Mc=r(rf,"SPAN",{});var o$=s(Mc);Av=i(o$,"TFRoFormerForCausalLM"),o$.forEach(o),rf.forEach(o),hh=h(t),Ve=r(t,"DIV",{class:!0});var Po=s(Ve);b(_a.$$.fragment,Po),Lv=h(Po),ka=r(Po,"P",{});var sf=s(ka);Ov=i(sf,"RoFormer Model with a "),Ec=r(sf,"CODE",{});var t$=s(Ec);Iv=i(t$,"language modeling"),t$.forEach(o),Dv=i(sf," head on top for CLM fine-tuning."),sf.forEach(o),Nv=h(Po),va=r(Po,"P",{});var af=s(va);Sv=i(af,"This model inherits from "),ql=r(af,"A",{href:!0});var n$=s(ql);Wv=i(n$,"TFPreTrainedModel"),n$.forEach(o),Uv=i(af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),af.forEach(o),Qv=h(Po),Fa=r(Po,"P",{});var lf=s(Fa);Hv=i(lf,"This model is also a "),ya=r(lf,"A",{href:!0,rel:!0});var r$=s(ya);Vv=i(r$,"tf.keras.Model"),r$.forEach(o),Kv=i(lf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lf.forEach(o),Jv=h(Po),b(Yn.$$.fragment,Po),Bv=h(Po),Yo=r(Po,"DIV",{class:!0});var pd=s(Yo);b(ba.$$.fragment,pd),Gv=h(pd),Ye=r(pd,"P",{});var Ao=s(Ye);Xv=i(Ao,"labels ("),zc=r(Ao,"CODE",{});var s$=s(zc);Yv=i(s$,"tf.Tensor"),s$.forEach(o),Zv=i(Ao," or "),jc=r(Ao,"CODE",{});var a$=s(jc);eF=i(a$,"np.ndarray"),a$.forEach(o),oF=i(Ao," of shape "),Cc=r(Ao,"CODE",{});var i$=s(Cc);tF=i(i$,"(batch_size, sequence_length)"),i$.forEach(o),nF=i(Ao,", "),qc=r(Ao,"EM",{});var l$=s(qc);rF=i(l$,"optional"),l$.forEach(o),sF=i(Ao,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Pc=r(Ao,"CODE",{});var d$=s(Pc);aF=i(d$,"[0, ..., config.vocab_size - 1]"),d$.forEach(o),iF=i(Ao,"."),Ao.forEach(o),lF=h(pd),b(Zn.$$.fragment,pd),pd.forEach(o),Po.forEach(o),fh=h(t),qt=r(t,"H2",{class:!0});var df=s(qt);er=r(df,"A",{id:!0,class:!0,href:!0});var c$=s(er);Ac=r(c$,"SPAN",{});var p$=s(Ac);b(Ta.$$.fragment,p$),p$.forEach(o),c$.forEach(o),dF=h(df),Lc=r(df,"SPAN",{});var m$=s(Lc);cF=i(m$,"TFRoFormerForSequenceClassification"),m$.forEach(o),df.forEach(o),uh=h(t),Ke=r(t,"DIV",{class:!0});var Lo=s(Ke);b(wa.$$.fragment,Lo),pF=h(Lo),Oc=r(Lo,"P",{});var h$=s(Oc);mF=i(h$,"RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),h$.forEach(o),hF=h(Lo),$a=r(Lo,"P",{});var cf=s($a);fF=i(cf,"This model inherits from "),Pl=r(cf,"A",{href:!0});var f$=s(Pl);uF=i(f$,"TFPreTrainedModel"),f$.forEach(o),gF=i(cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cf.forEach(o),_F=h(Lo),xa=r(Lo,"P",{});var pf=s(xa);kF=i(pf,"This model is also a "),Ra=r(pf,"A",{href:!0,rel:!0});var u$=s(Ra);vF=i(u$,"tf.keras.Model"),u$.forEach(o),FF=i(pf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pf.forEach(o),yF=h(Lo),b(or.$$.fragment,Lo),bF=h(Lo),ro=r(Lo,"DIV",{class:!0});var rt=s(ro);b(Ma.$$.fragment,rt),TF=h(rt),Pt=r(rt,"P",{});var md=s(Pt);wF=i(md,"The "),Al=r(md,"A",{href:!0});var g$=s(Al);$F=i(g$,"TFRoFormerForSequenceClassification"),g$.forEach(o),xF=i(md," forward method, overrides the "),Ic=r(md,"CODE",{});var _$=s(Ic);RF=i(_$,"__call__"),_$.forEach(o),MF=i(md," special method."),md.forEach(o),EF=h(rt),b(tr.$$.fragment,rt),zF=h(rt),b(nr.$$.fragment,rt),jF=h(rt),b(rr.$$.fragment,rt),rt.forEach(o),Lo.forEach(o),gh=h(t),At=r(t,"H2",{class:!0});var mf=s(At);sr=r(mf,"A",{id:!0,class:!0,href:!0});var k$=s(sr);Dc=r(k$,"SPAN",{});var v$=s(Dc);b(Ea.$$.fragment,v$),v$.forEach(o),k$.forEach(o),CF=h(mf),Nc=r(mf,"SPAN",{});var F$=s(Nc);qF=i(F$,"TFRoFormerForMultipleChoice"),F$.forEach(o),mf.forEach(o),_h=h(t),Je=r(t,"DIV",{class:!0});var Oo=s(Je);b(za.$$.fragment,Oo),PF=h(Oo),Sc=r(Oo,"P",{});var y$=s(Sc);AF=i(y$,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),y$.forEach(o),LF=h(Oo),ja=r(Oo,"P",{});var hf=s(ja);OF=i(hf,"This model inherits from "),Ll=r(hf,"A",{href:!0});var b$=s(Ll);IF=i(b$,"TFPreTrainedModel"),b$.forEach(o),DF=i(hf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hf.forEach(o),NF=h(Oo),Ca=r(Oo,"P",{});var ff=s(Ca);SF=i(ff,"This model is also a "),qa=r(ff,"A",{href:!0,rel:!0});var T$=s(qa);WF=i(T$,"tf.keras.Model"),T$.forEach(o),UF=i(ff,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ff.forEach(o),QF=h(Oo),b(ar.$$.fragment,Oo),HF=h(Oo),$o=r(Oo,"DIV",{class:!0});var Hr=s($o);b(Pa.$$.fragment,Hr),VF=h(Hr),Lt=r(Hr,"P",{});var hd=s(Lt);KF=i(hd,"The "),Ol=r(hd,"A",{href:!0});var w$=s(Ol);JF=i(w$,"TFRoFormerForMultipleChoice"),w$.forEach(o),BF=i(hd," forward method, overrides the "),Wc=r(hd,"CODE",{});var $$=s(Wc);GF=i($$,"__call__"),$$.forEach(o),XF=i(hd," special method."),hd.forEach(o),YF=h(Hr),b(ir.$$.fragment,Hr),ZF=h(Hr),b(lr.$$.fragment,Hr),Hr.forEach(o),Oo.forEach(o),kh=h(t),Ot=r(t,"H2",{class:!0});var uf=s(Ot);dr=r(uf,"A",{id:!0,class:!0,href:!0});var x$=s(dr);Uc=r(x$,"SPAN",{});var R$=s(Uc);b(Aa.$$.fragment,R$),R$.forEach(o),x$.forEach(o),ey=h(uf),Qc=r(uf,"SPAN",{});var M$=s(Qc);oy=i(M$,"TFRoFormerForTokenClassification"),M$.forEach(o),uf.forEach(o),vh=h(t),Be=r(t,"DIV",{class:!0});var Io=s(Be);b(La.$$.fragment,Io),ty=h(Io),Hc=r(Io,"P",{});var E$=s(Hc);ny=i(E$,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),E$.forEach(o),ry=h(Io),Oa=r(Io,"P",{});var gf=s(Oa);sy=i(gf,"This model inherits from "),Il=r(gf,"A",{href:!0});var z$=s(Il);ay=i(z$,"TFPreTrainedModel"),z$.forEach(o),iy=i(gf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gf.forEach(o),ly=h(Io),Ia=r(Io,"P",{});var _f=s(Ia);dy=i(_f,"This model is also a "),Da=r(_f,"A",{href:!0,rel:!0});var j$=s(Da);cy=i(j$,"tf.keras.Model"),j$.forEach(o),py=i(_f,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_f.forEach(o),my=h(Io),b(cr.$$.fragment,Io),hy=h(Io),so=r(Io,"DIV",{class:!0});var st=s(so);b(Na.$$.fragment,st),fy=h(st),It=r(st,"P",{});var fd=s(It);uy=i(fd,"The "),Dl=r(fd,"A",{href:!0});var C$=s(Dl);gy=i(C$,"TFRoFormerForTokenClassification"),C$.forEach(o),_y=i(fd," forward method, overrides the "),Vc=r(fd,"CODE",{});var q$=s(Vc);ky=i(q$,"__call__"),q$.forEach(o),vy=i(fd," special method."),fd.forEach(o),Fy=h(st),b(pr.$$.fragment,st),yy=h(st),b(mr.$$.fragment,st),by=h(st),b(hr.$$.fragment,st),st.forEach(o),Io.forEach(o),Fh=h(t),Dt=r(t,"H2",{class:!0});var kf=s(Dt);fr=r(kf,"A",{id:!0,class:!0,href:!0});var P$=s(fr);Kc=r(P$,"SPAN",{});var A$=s(Kc);b(Sa.$$.fragment,A$),A$.forEach(o),P$.forEach(o),Ty=h(kf),Jc=r(kf,"SPAN",{});var L$=s(Jc);wy=i(L$,"TFRoFormerForQuestionAnswering"),L$.forEach(o),kf.forEach(o),yh=h(t),Ge=r(t,"DIV",{class:!0});var Do=s(Ge);b(Wa.$$.fragment,Do),$y=h(Do),Nt=r(Do,"P",{});var ud=s(Nt);xy=i(ud,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Bc=r(ud,"CODE",{});var O$=s(Bc);Ry=i(O$,"span start logits"),O$.forEach(o),My=i(ud," and "),Gc=r(ud,"CODE",{});var I$=s(Gc);Ey=i(I$,"span end logits"),I$.forEach(o),zy=i(ud,")."),ud.forEach(o),jy=h(Do),Ua=r(Do,"P",{});var vf=s(Ua);Cy=i(vf,"This model inherits from "),Nl=r(vf,"A",{href:!0});var D$=s(Nl);qy=i(D$,"TFPreTrainedModel"),D$.forEach(o),Py=i(vf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vf.forEach(o),Ay=h(Do),Qa=r(Do,"P",{});var Ff=s(Qa);Ly=i(Ff,"This model is also a "),Ha=r(Ff,"A",{href:!0,rel:!0});var N$=s(Ha);Oy=i(N$,"tf.keras.Model"),N$.forEach(o),Iy=i(Ff,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ff.forEach(o),Dy=h(Do),b(ur.$$.fragment,Do),Ny=h(Do),ao=r(Do,"DIV",{class:!0});var at=s(ao);b(Va.$$.fragment,at),Sy=h(at),St=r(at,"P",{});var gd=s(St);Wy=i(gd,"The "),Sl=r(gd,"A",{href:!0});var S$=s(Sl);Uy=i(S$,"TFRoFormerForQuestionAnswering"),S$.forEach(o),Qy=i(gd," forward method, overrides the "),Xc=r(gd,"CODE",{});var W$=s(Xc);Hy=i(W$,"__call__"),W$.forEach(o),Vy=i(gd," special method."),gd.forEach(o),Ky=h(at),b(gr.$$.fragment,at),Jy=h(at),b(_r.$$.fragment,at),By=h(at),b(kr.$$.fragment,at),at.forEach(o),Do.forEach(o),bh=h(t),Wt=r(t,"H2",{class:!0});var yf=s(Wt);vr=r(yf,"A",{id:!0,class:!0,href:!0});var U$=s(vr);Yc=r(U$,"SPAN",{});var Q$=s(Yc);b(Ka.$$.fragment,Q$),Q$.forEach(o),U$.forEach(o),Gy=h(yf),Zc=r(yf,"SPAN",{});var H$=s(Zc);Xy=i(H$,"FlaxRoFormerModel"),H$.forEach(o),yf.forEach(o),Th=h(t),Pe=r(t,"DIV",{class:!0});var co=s(Pe);b(Ja.$$.fragment,co),Yy=h(co),ep=r(co,"P",{});var V$=s(ep);Zy=i(V$,"The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top."),V$.forEach(o),e2=h(co),Ba=r(co,"P",{});var bf=s(Ba);o2=i(bf,"This model inherits from "),Wl=r(bf,"A",{href:!0});var K$=s(Wl);t2=i(K$,"FlaxPreTrainedModel"),K$.forEach(o),n2=i(bf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bf.forEach(o),r2=h(co),Ga=r(co,"P",{});var Tf=s(Ga);s2=i(Tf,"This model is also a Flax Linen "),Xa=r(Tf,"A",{href:!0,rel:!0});var J$=s(Xa);a2=i(J$,"flax.linen.Module"),J$.forEach(o),i2=i(Tf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Tf.forEach(o),l2=h(co),op=r(co,"P",{});var B$=s(op);d2=i(B$,"Finally, this model supports inherent JAX features such as:"),B$.forEach(o),c2=h(co),Wo=r(co,"UL",{});var Vr=s(Wo);tp=r(Vr,"LI",{});var G$=s(tp);Ya=r(G$,"A",{href:!0,rel:!0});var X$=s(Ya);p2=i(X$,"Just-In-Time (JIT) compilation"),X$.forEach(o),G$.forEach(o),m2=h(Vr),np=r(Vr,"LI",{});var Y$=s(np);Za=r(Y$,"A",{href:!0,rel:!0});var Z$=s(Za);h2=i(Z$,"Automatic Differentiation"),Z$.forEach(o),Y$.forEach(o),f2=h(Vr),rp=r(Vr,"LI",{});var e0=s(rp);ei=r(e0,"A",{href:!0,rel:!0});var o0=s(ei);u2=i(o0,"Vectorization"),o0.forEach(o),e0.forEach(o),g2=h(Vr),sp=r(Vr,"LI",{});var t0=s(sp);oi=r(t0,"A",{href:!0,rel:!0});var n0=s(oi);_2=i(n0,"Parallelization"),n0.forEach(o),t0.forEach(o),Vr.forEach(o),k2=h(co),xo=r(co,"DIV",{class:!0});var Kr=s(xo);b(ti.$$.fragment,Kr),v2=h(Kr),Ut=r(Kr,"P",{});var _d=s(Ut);F2=i(_d,"The "),ap=r(_d,"CODE",{});var r0=s(ap);y2=i(r0,"FlaxRoFormerPreTrainedModel"),r0.forEach(o),b2=i(_d," forward method, overrides the "),ip=r(_d,"CODE",{});var s0=s(ip);T2=i(s0,"__call__"),s0.forEach(o),w2=i(_d," special method."),_d.forEach(o),$2=h(Kr),b(Fr.$$.fragment,Kr),x2=h(Kr),b(yr.$$.fragment,Kr),Kr.forEach(o),co.forEach(o),wh=h(t),Qt=r(t,"H2",{class:!0});var wf=s(Qt);br=r(wf,"A",{id:!0,class:!0,href:!0});var a0=s(br);lp=r(a0,"SPAN",{});var i0=s(lp);b(ni.$$.fragment,i0),i0.forEach(o),a0.forEach(o),R2=h(wf),dp=r(wf,"SPAN",{});var l0=s(dp);M2=i(l0,"FlaxRoFormerForMaskedLM"),l0.forEach(o),wf.forEach(o),$h=h(t),Ae=r(t,"DIV",{class:!0});var po=s(Ae);b(ri.$$.fragment,po),E2=h(po),si=r(po,"P",{});var $f=s(si);z2=i($f,"RoFormer Model with a "),cp=r($f,"CODE",{});var d0=s(cp);j2=i(d0,"language modeling"),d0.forEach(o),C2=i($f," head on top."),$f.forEach(o),q2=h(po),ai=r(po,"P",{});var xf=s(ai);P2=i(xf,"This model inherits from "),Ul=r(xf,"A",{href:!0});var c0=s(Ul);A2=i(c0,"FlaxPreTrainedModel"),c0.forEach(o),L2=i(xf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xf.forEach(o),O2=h(po),ii=r(po,"P",{});var Rf=s(ii);I2=i(Rf,"This model is also a Flax Linen "),li=r(Rf,"A",{href:!0,rel:!0});var p0=s(li);D2=i(p0,"flax.linen.Module"),p0.forEach(o),N2=i(Rf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Rf.forEach(o),S2=h(po),pp=r(po,"P",{});var m0=s(pp);W2=i(m0,"Finally, this model supports inherent JAX features such as:"),m0.forEach(o),U2=h(po),Uo=r(po,"UL",{});var Jr=s(Uo);mp=r(Jr,"LI",{});var h0=s(mp);di=r(h0,"A",{href:!0,rel:!0});var f0=s(di);Q2=i(f0,"Just-In-Time (JIT) compilation"),f0.forEach(o),h0.forEach(o),H2=h(Jr),hp=r(Jr,"LI",{});var u0=s(hp);ci=r(u0,"A",{href:!0,rel:!0});var g0=s(ci);V2=i(g0,"Automatic Differentiation"),g0.forEach(o),u0.forEach(o),K2=h(Jr),fp=r(Jr,"LI",{});var _0=s(fp);pi=r(_0,"A",{href:!0,rel:!0});var k0=s(pi);J2=i(k0,"Vectorization"),k0.forEach(o),_0.forEach(o),B2=h(Jr),up=r(Jr,"LI",{});var v0=s(up);mi=r(v0,"A",{href:!0,rel:!0});var F0=s(mi);G2=i(F0,"Parallelization"),F0.forEach(o),v0.forEach(o),Jr.forEach(o),X2=h(po),Ro=r(po,"DIV",{class:!0});var Br=s(Ro);b(hi.$$.fragment,Br),Y2=h(Br),Ht=r(Br,"P",{});var kd=s(Ht);Z2=i(kd,"The "),gp=r(kd,"CODE",{});var y0=s(gp);eb=i(y0,"FlaxRoFormerPreTrainedModel"),y0.forEach(o),ob=i(kd," forward method, overrides the "),_p=r(kd,"CODE",{});var b0=s(_p);tb=i(b0,"__call__"),b0.forEach(o),nb=i(kd," special method."),kd.forEach(o),rb=h(Br),b(Tr.$$.fragment,Br),sb=h(Br),b(wr.$$.fragment,Br),Br.forEach(o),po.forEach(o),xh=h(t),Vt=r(t,"H2",{class:!0});var Mf=s(Vt);$r=r(Mf,"A",{id:!0,class:!0,href:!0});var T0=s($r);kp=r(T0,"SPAN",{});var w0=s(kp);b(fi.$$.fragment,w0),w0.forEach(o),T0.forEach(o),ab=h(Mf),vp=r(Mf,"SPAN",{});var $0=s(vp);ib=i($0,"FlaxRoFormerForSequenceClassification"),$0.forEach(o),Mf.forEach(o),Rh=h(t),Le=r(t,"DIV",{class:!0});var mo=s(Le);b(ui.$$.fragment,mo),lb=h(mo),Fp=r(mo,"P",{});var x0=s(Fp);db=i(x0,`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),x0.forEach(o),cb=h(mo),gi=r(mo,"P",{});var Ef=s(gi);pb=i(Ef,"This model inherits from "),Ql=r(Ef,"A",{href:!0});var R0=s(Ql);mb=i(R0,"FlaxPreTrainedModel"),R0.forEach(o),hb=i(Ef,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ef.forEach(o),fb=h(mo),_i=r(mo,"P",{});var zf=s(_i);ub=i(zf,"This model is also a Flax Linen "),ki=r(zf,"A",{href:!0,rel:!0});var M0=s(ki);gb=i(M0,"flax.linen.Module"),M0.forEach(o),_b=i(zf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zf.forEach(o),kb=h(mo),yp=r(mo,"P",{});var E0=s(yp);vb=i(E0,"Finally, this model supports inherent JAX features such as:"),E0.forEach(o),Fb=h(mo),Qo=r(mo,"UL",{});var Gr=s(Qo);bp=r(Gr,"LI",{});var z0=s(bp);vi=r(z0,"A",{href:!0,rel:!0});var j0=s(vi);yb=i(j0,"Just-In-Time (JIT) compilation"),j0.forEach(o),z0.forEach(o),bb=h(Gr),Tp=r(Gr,"LI",{});var C0=s(Tp);Fi=r(C0,"A",{href:!0,rel:!0});var q0=s(Fi);Tb=i(q0,"Automatic Differentiation"),q0.forEach(o),C0.forEach(o),wb=h(Gr),wp=r(Gr,"LI",{});var P0=s(wp);yi=r(P0,"A",{href:!0,rel:!0});var A0=s(yi);$b=i(A0,"Vectorization"),A0.forEach(o),P0.forEach(o),xb=h(Gr),$p=r(Gr,"LI",{});var L0=s($p);bi=r(L0,"A",{href:!0,rel:!0});var O0=s(bi);Rb=i(O0,"Parallelization"),O0.forEach(o),L0.forEach(o),Gr.forEach(o),Mb=h(mo),Mo=r(mo,"DIV",{class:!0});var Xr=s(Mo);b(Ti.$$.fragment,Xr),Eb=h(Xr),Kt=r(Xr,"P",{});var vd=s(Kt);zb=i(vd,"The "),xp=r(vd,"CODE",{});var I0=s(xp);jb=i(I0,"FlaxRoFormerPreTrainedModel"),I0.forEach(o),Cb=i(vd," forward method, overrides the "),Rp=r(vd,"CODE",{});var D0=s(Rp);qb=i(D0,"__call__"),D0.forEach(o),Pb=i(vd," special method."),vd.forEach(o),Ab=h(Xr),b(xr.$$.fragment,Xr),Lb=h(Xr),b(Rr.$$.fragment,Xr),Xr.forEach(o),mo.forEach(o),Mh=h(t),Jt=r(t,"H2",{class:!0});var jf=s(Jt);Mr=r(jf,"A",{id:!0,class:!0,href:!0});var N0=s(Mr);Mp=r(N0,"SPAN",{});var S0=s(Mp);b(wi.$$.fragment,S0),S0.forEach(o),N0.forEach(o),Ob=h(jf),Ep=r(jf,"SPAN",{});var W0=s(Ep);Ib=i(W0,"FlaxRoFormerForMultipleChoice"),W0.forEach(o),jf.forEach(o),Eh=h(t),Oe=r(t,"DIV",{class:!0});var ho=s(Oe);b($i.$$.fragment,ho),Db=h(ho),zp=r(ho,"P",{});var U0=s(zp);Nb=i(U0,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),U0.forEach(o),Sb=h(ho),xi=r(ho,"P",{});var Cf=s(xi);Wb=i(Cf,"This model inherits from "),Hl=r(Cf,"A",{href:!0});var Q0=s(Hl);Ub=i(Q0,"FlaxPreTrainedModel"),Q0.forEach(o),Qb=i(Cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cf.forEach(o),Hb=h(ho),Ri=r(ho,"P",{});var qf=s(Ri);Vb=i(qf,"This model is also a Flax Linen "),Mi=r(qf,"A",{href:!0,rel:!0});var H0=s(Mi);Kb=i(H0,"flax.linen.Module"),H0.forEach(o),Jb=i(qf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qf.forEach(o),Bb=h(ho),jp=r(ho,"P",{});var V0=s(jp);Gb=i(V0,"Finally, this model supports inherent JAX features such as:"),V0.forEach(o),Xb=h(ho),Ho=r(ho,"UL",{});var Yr=s(Ho);Cp=r(Yr,"LI",{});var K0=s(Cp);Ei=r(K0,"A",{href:!0,rel:!0});var J0=s(Ei);Yb=i(J0,"Just-In-Time (JIT) compilation"),J0.forEach(o),K0.forEach(o),Zb=h(Yr),qp=r(Yr,"LI",{});var B0=s(qp);zi=r(B0,"A",{href:!0,rel:!0});var G0=s(zi);eT=i(G0,"Automatic Differentiation"),G0.forEach(o),B0.forEach(o),oT=h(Yr),Pp=r(Yr,"LI",{});var X0=s(Pp);ji=r(X0,"A",{href:!0,rel:!0});var Y0=s(ji);tT=i(Y0,"Vectorization"),Y0.forEach(o),X0.forEach(o),nT=h(Yr),Ap=r(Yr,"LI",{});var Z0=s(Ap);Ci=r(Z0,"A",{href:!0,rel:!0});var e4=s(Ci);rT=i(e4,"Parallelization"),e4.forEach(o),Z0.forEach(o),Yr.forEach(o),sT=h(ho),Eo=r(ho,"DIV",{class:!0});var Zr=s(Eo);b(qi.$$.fragment,Zr),aT=h(Zr),Bt=r(Zr,"P",{});var Fd=s(Bt);iT=i(Fd,"The "),Lp=r(Fd,"CODE",{});var o4=s(Lp);lT=i(o4,"FlaxRoFormerPreTrainedModel"),o4.forEach(o),dT=i(Fd," forward method, overrides the "),Op=r(Fd,"CODE",{});var t4=s(Op);cT=i(t4,"__call__"),t4.forEach(o),pT=i(Fd," special method."),Fd.forEach(o),mT=h(Zr),b(Er.$$.fragment,Zr),hT=h(Zr),b(zr.$$.fragment,Zr),Zr.forEach(o),ho.forEach(o),zh=h(t),Gt=r(t,"H2",{class:!0});var Pf=s(Gt);jr=r(Pf,"A",{id:!0,class:!0,href:!0});var n4=s(jr);Ip=r(n4,"SPAN",{});var r4=s(Ip);b(Pi.$$.fragment,r4),r4.forEach(o),n4.forEach(o),fT=h(Pf),Dp=r(Pf,"SPAN",{});var s4=s(Dp);uT=i(s4,"FlaxRoFormerForTokenClassification"),s4.forEach(o),Pf.forEach(o),jh=h(t),Ie=r(t,"DIV",{class:!0});var fo=s(Ie);b(Ai.$$.fragment,fo),gT=h(fo),Np=r(fo,"P",{});var a4=s(Np);_T=i(a4,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),a4.forEach(o),kT=h(fo),Li=r(fo,"P",{});var Af=s(Li);vT=i(Af,"This model inherits from "),Vl=r(Af,"A",{href:!0});var i4=s(Vl);FT=i(i4,"FlaxPreTrainedModel"),i4.forEach(o),yT=i(Af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Af.forEach(o),bT=h(fo),Oi=r(fo,"P",{});var Lf=s(Oi);TT=i(Lf,"This model is also a Flax Linen "),Ii=r(Lf,"A",{href:!0,rel:!0});var l4=s(Ii);wT=i(l4,"flax.linen.Module"),l4.forEach(o),$T=i(Lf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Lf.forEach(o),xT=h(fo),Sp=r(fo,"P",{});var d4=s(Sp);RT=i(d4,"Finally, this model supports inherent JAX features such as:"),d4.forEach(o),MT=h(fo),Vo=r(fo,"UL",{});var es=s(Vo);Wp=r(es,"LI",{});var c4=s(Wp);Di=r(c4,"A",{href:!0,rel:!0});var p4=s(Di);ET=i(p4,"Just-In-Time (JIT) compilation"),p4.forEach(o),c4.forEach(o),zT=h(es),Up=r(es,"LI",{});var m4=s(Up);Ni=r(m4,"A",{href:!0,rel:!0});var h4=s(Ni);jT=i(h4,"Automatic Differentiation"),h4.forEach(o),m4.forEach(o),CT=h(es),Qp=r(es,"LI",{});var f4=s(Qp);Si=r(f4,"A",{href:!0,rel:!0});var u4=s(Si);qT=i(u4,"Vectorization"),u4.forEach(o),f4.forEach(o),PT=h(es),Hp=r(es,"LI",{});var g4=s(Hp);Wi=r(g4,"A",{href:!0,rel:!0});var _4=s(Wi);AT=i(_4,"Parallelization"),_4.forEach(o),g4.forEach(o),es.forEach(o),LT=h(fo),zo=r(fo,"DIV",{class:!0});var os=s(zo);b(Ui.$$.fragment,os),OT=h(os),Xt=r(os,"P",{});var yd=s(Xt);IT=i(yd,"The "),Vp=r(yd,"CODE",{});var k4=s(Vp);DT=i(k4,"FlaxRoFormerPreTrainedModel"),k4.forEach(o),NT=i(yd," forward method, overrides the "),Kp=r(yd,"CODE",{});var v4=s(Kp);ST=i(v4,"__call__"),v4.forEach(o),WT=i(yd," special method."),yd.forEach(o),UT=h(os),b(Cr.$$.fragment,os),QT=h(os),b(qr.$$.fragment,os),os.forEach(o),fo.forEach(o),Ch=h(t),Yt=r(t,"H2",{class:!0});var Of=s(Yt);Pr=r(Of,"A",{id:!0,class:!0,href:!0});var F4=s(Pr);Jp=r(F4,"SPAN",{});var y4=s(Jp);b(Qi.$$.fragment,y4),y4.forEach(o),F4.forEach(o),HT=h(Of),Bp=r(Of,"SPAN",{});var b4=s(Bp);VT=i(b4,"FlaxRoFormerForQuestionAnswering"),b4.forEach(o),Of.forEach(o),qh=h(t),De=r(t,"DIV",{class:!0});var uo=s(De);b(Hi.$$.fragment,uo),KT=h(uo),Zt=r(uo,"P",{});var bd=s(Zt);JT=i(bd,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gp=r(bd,"CODE",{});var T4=s(Gp);BT=i(T4,"span start logits"),T4.forEach(o),GT=i(bd," and "),Xp=r(bd,"CODE",{});var w4=s(Xp);XT=i(w4,"span end logits"),w4.forEach(o),YT=i(bd,")."),bd.forEach(o),ZT=h(uo),Vi=r(uo,"P",{});var If=s(Vi);ew=i(If,"This model inherits from "),Kl=r(If,"A",{href:!0});var $4=s(Kl);ow=i($4,"FlaxPreTrainedModel"),$4.forEach(o),tw=i(If,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),If.forEach(o),nw=h(uo),Ki=r(uo,"P",{});var Df=s(Ki);rw=i(Df,"This model is also a Flax Linen "),Ji=r(Df,"A",{href:!0,rel:!0});var x4=s(Ji);sw=i(x4,"flax.linen.Module"),x4.forEach(o),aw=i(Df,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Df.forEach(o),iw=h(uo),Yp=r(uo,"P",{});var R4=s(Yp);lw=i(R4,"Finally, this model supports inherent JAX features such as:"),R4.forEach(o),dw=h(uo),Ko=r(uo,"UL",{});var ts=s(Ko);Zp=r(ts,"LI",{});var M4=s(Zp);Bi=r(M4,"A",{href:!0,rel:!0});var E4=s(Bi);cw=i(E4,"Just-In-Time (JIT) compilation"),E4.forEach(o),M4.forEach(o),pw=h(ts),em=r(ts,"LI",{});var z4=s(em);Gi=r(z4,"A",{href:!0,rel:!0});var j4=s(Gi);mw=i(j4,"Automatic Differentiation"),j4.forEach(o),z4.forEach(o),hw=h(ts),om=r(ts,"LI",{});var C4=s(om);Xi=r(C4,"A",{href:!0,rel:!0});var q4=s(Xi);fw=i(q4,"Vectorization"),q4.forEach(o),C4.forEach(o),uw=h(ts),tm=r(ts,"LI",{});var P4=s(tm);Yi=r(P4,"A",{href:!0,rel:!0});var A4=s(Yi);gw=i(A4,"Parallelization"),A4.forEach(o),P4.forEach(o),ts.forEach(o),_w=h(uo),jo=r(uo,"DIV",{class:!0});var ns=s(jo);b(Zi.$$.fragment,ns),kw=h(ns),en=r(ns,"P",{});var Td=s(en);vw=i(Td,"The "),nm=r(Td,"CODE",{});var L4=s(nm);Fw=i(L4,"FlaxRoFormerPreTrainedModel"),L4.forEach(o),yw=i(Td," forward method, overrides the "),rm=r(Td,"CODE",{});var O4=s(rm);bw=i(O4,"__call__"),O4.forEach(o),Tw=i(Td," special method."),Td.forEach(o),ww=h(ns),b(Ar.$$.fragment,ns),$w=h(ns),b(Lr.$$.fragment,ns),ns.forEach(o),uo.forEach(o),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(Gx)),u(p,"id","roformer"),u(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(p,"href","#roformer"),u(c,"class","relative group"),u(Z,"id","overview"),u(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Z,"href","#overview"),u(z,"class","relative group"),u(oe,"href","https://arxiv.org/pdf/2104.09864v1.pdf"),u(oe,"rel","nofollow"),u(te,"href","https://huggingface.co/junnyu"),u(te,"rel","nofollow"),u(F,"href","https://github.com/ZhuiyiTechnology/roformer"),u(F,"rel","nofollow"),u(P,"id","transformers.RoFormerConfig"),u(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(P,"href","#transformers.RoFormerConfig"),u(be,"class","relative group"),u($e,"href","/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerModel"),u(rs,"href","https://huggingface.co/junnyu/roformer_chinese_base"),u(rs,"rel","nofollow"),u(pl,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),u(ml,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),u(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ln,"id","transformers.RoFormerTokenizer"),u(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ln,"href","#transformers.RoFormerTokenizer"),u(lt,"class","relative group"),u(ls,"href","https://pypi.org/project/rjieba/"),u(ls,"rel","nofollow"),u(hl,"href","/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(cn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gl,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mn,"id","transformers.RoFormerTokenizerFast"),u(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mn,"href","#transformers.RoFormerTokenizerFast"),u(ct,"class","relative group"),u(_l,"href","/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerTokenizerFast"),u(kl,"href","/docs/transformers/v4.21.2/en/model_doc/bert#transformers.BertTokenizerFast"),u(vl,"href","/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(un,"id","transformers.RoFormerModel"),u(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(un,"href","#transformers.RoFormerModel"),u(pt,"class","relative group"),u($s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u($s,"rel","nofollow"),u(Rs,"href","https://arxiv.org/abs/1706.03762"),u(Rs,"rel","nofollow"),u(bl,"href","/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerModel"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kn,"id","transformers.RoFormerForCausalLM"),u(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(kn,"href","#transformers.RoFormerForCausalLM"),u(ht,"class","relative group"),u(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(js,"rel","nofollow"),u(Tl,"href","/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerForCausalLM"),u(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yn,"id","transformers.RoFormerForMaskedLM"),u(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yn,"href","#transformers.RoFormerForMaskedLM"),u(gt,"class","relative group"),u(As,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(As,"rel","nofollow"),u(wl,"href","/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerForMaskedLM"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($n,"id","transformers.RoFormerForSequenceClassification"),u($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($n,"href","#transformers.RoFormerForSequenceClassification"),u(vt,"class","relative group"),u(Ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ns,"rel","nofollow"),u($l,"href","/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerForSequenceClassification"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jn,"id","transformers.RoFormerForMultipleChoice"),u(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jn,"href","#transformers.RoFormerForMultipleChoice"),u(yt,"class","relative group"),u(Hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Hs,"rel","nofollow"),u(xl,"href","/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerForMultipleChoice"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"id","transformers.RoFormerForTokenClassification"),u(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pn,"href","#transformers.RoFormerForTokenClassification"),u(Tt,"class","relative group"),u(Gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Gs,"rel","nofollow"),u(Rl,"href","/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerForTokenClassification"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(In,"id","transformers.RoFormerForQuestionAnswering"),u(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(In,"href","#transformers.RoFormerForQuestionAnswering"),u($t,"class","relative group"),u(oa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(oa,"rel","nofollow"),u(Ml,"href","/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.RoFormerForQuestionAnswering"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wn,"id","transformers.TFRoFormerModel"),u(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wn,"href","#transformers.TFRoFormerModel"),u(Mt,"class","relative group"),u(El,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(ia,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ia,"rel","nofollow"),u(zl,"href","/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.TFRoFormerModel"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vn,"id","transformers.TFRoFormerForMaskedLM"),u(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vn,"href","#transformers.TFRoFormerForMaskedLM"),u(zt,"class","relative group"),u(jl,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(fa,"rel","nofollow"),u(Cl,"href","/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.TFRoFormerForMaskedLM"),u(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xn,"id","transformers.TFRoFormerForCausalLM"),u(Xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xn,"href","#transformers.TFRoFormerForCausalLM"),u(Ct,"class","relative group"),u(ql,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(ya,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ya,"rel","nofollow"),u(Yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.TFRoFormerForSequenceClassification"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.TFRoFormerForSequenceClassification"),u(qt,"class","relative group"),u(Pl,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ra,"rel","nofollow"),u(Al,"href","/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.TFRoFormerForSequenceClassification"),u(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sr,"id","transformers.TFRoFormerForMultipleChoice"),u(sr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(sr,"href","#transformers.TFRoFormerForMultipleChoice"),u(At,"class","relative group"),u(Ll,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(qa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(qa,"rel","nofollow"),u(Ol,"href","/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.TFRoFormerForMultipleChoice"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dr,"id","transformers.TFRoFormerForTokenClassification"),u(dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(dr,"href","#transformers.TFRoFormerForTokenClassification"),u(Ot,"class","relative group"),u(Il,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(Da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Da,"rel","nofollow"),u(Dl,"href","/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.TFRoFormerForTokenClassification"),u(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fr,"id","transformers.TFRoFormerForQuestionAnswering"),u(fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fr,"href","#transformers.TFRoFormerForQuestionAnswering"),u(Dt,"class","relative group"),u(Nl,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ha,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ha,"rel","nofollow"),u(Sl,"href","/docs/transformers/v4.21.2/en/model_doc/roformer#transformers.TFRoFormerForQuestionAnswering"),u(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vr,"id","transformers.FlaxRoFormerModel"),u(vr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vr,"href","#transformers.FlaxRoFormerModel"),u(Wt,"class","relative group"),u(Wl,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Xa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Xa,"rel","nofollow"),u(Ya,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ya,"rel","nofollow"),u(Za,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Za,"rel","nofollow"),u(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ei,"rel","nofollow"),u(oi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(oi,"rel","nofollow"),u(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(br,"id","transformers.FlaxRoFormerForMaskedLM"),u(br,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(br,"href","#transformers.FlaxRoFormerForMaskedLM"),u(Qt,"class","relative group"),u(Ul,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(li,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(li,"rel","nofollow"),u(di,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(di,"rel","nofollow"),u(ci,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ci,"rel","nofollow"),u(pi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(pi,"rel","nofollow"),u(mi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(mi,"rel","nofollow"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($r,"id","transformers.FlaxRoFormerForSequenceClassification"),u($r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($r,"href","#transformers.FlaxRoFormerForSequenceClassification"),u(Vt,"class","relative group"),u(Ql,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ki,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ki,"rel","nofollow"),u(vi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(vi,"rel","nofollow"),u(Fi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Fi,"rel","nofollow"),u(yi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(yi,"rel","nofollow"),u(bi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(bi,"rel","nofollow"),u(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mr,"id","transformers.FlaxRoFormerForMultipleChoice"),u(Mr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Mr,"href","#transformers.FlaxRoFormerForMultipleChoice"),u(Jt,"class","relative group"),u(Hl,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Mi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Mi,"rel","nofollow"),u(Ei,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ei,"rel","nofollow"),u(zi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(zi,"rel","nofollow"),u(ji,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ji,"rel","nofollow"),u(Ci,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ci,"rel","nofollow"),u(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jr,"id","transformers.FlaxRoFormerForTokenClassification"),u(jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jr,"href","#transformers.FlaxRoFormerForTokenClassification"),u(Gt,"class","relative group"),u(Vl,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ii,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ii,"rel","nofollow"),u(Di,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Di,"rel","nofollow"),u(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ni,"rel","nofollow"),u(Si,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Si,"rel","nofollow"),u(Wi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Wi,"rel","nofollow"),u(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pr,"id","transformers.FlaxRoFormerForQuestionAnswering"),u(Pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pr,"href","#transformers.FlaxRoFormerForQuestionAnswering"),u(Yt,"class","relative group"),u(Kl,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ji,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ji,"rel","nofollow"),u(Bi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Bi,"rel","nofollow"),u(Gi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Gi,"rel","nofollow"),u(Xi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Xi,"rel","nofollow"),u(Yi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Yi,"rel","nofollow"),u(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,v){e(document.head,d),k(t,g,v),k(t,c,v),e(c,p),e(p,_),T(l,_,null),e(c,f),e(c,M),e(M,ue),k(t,B,v),k(t,z,v),e(z,Z),e(Z,N),T(ee,N,null),e(z,ge),e(z,S),e(S,_e),k(t,pe,v),k(t,J,v),e(J,L),e(J,oe),e(oe,G),e(J,j),k(t,q,v),k(t,ne,v),e(ne,Q),k(t,me,v),k(t,re,v),e(re,W),e(W,ke),k(t,he,v),k(t,C,v),e(C,ve),k(t,U,v),k(t,se,v),e(se,ce),e(ce,H),k(t,fe,v),k(t,X,v),e(X,O),e(X,te),e(te,V),e(X,Fe),e(X,F),e(F,E),e(X,Y),k(t,Me,v),k(t,be,v),e(be,P),e(P,xe),T(we,xe,null),e(be,je),e(be,A),e(A,K),k(t,Ee,v),k(t,ae,v),T(I,ae,null),e(ae,Ce),e(ae,Te),e(Te,ye),e(Te,$e),e($e,Nf),e(Te,Sf),e(Te,rs),e(rs,Wf),e(Te,Uf),e(ae,Qf),e(ae,it),e(it,Hf),e(it,pl),e(pl,Vf),e(it,Kf),e(it,ml),e(ml,Jf),e(it,Bf),e(ae,Gf),T(an,ae,null),k(t,Qm,v),k(t,lt,v),e(lt,ln),e(ln,wd),T(ss,wd,null),e(lt,Xf),e(lt,$d),e($d,Yf),k(t,Hm,v),k(t,qe,v),T(as,qe,null),e(qe,Zf),e(qe,is),e(is,eu),e(is,ls),e(ls,ou),e(is,tu),e(qe,nu),e(qe,ds),e(ds,ru),e(ds,hl),e(hl,su),e(ds,au),e(qe,iu),T(dn,qe,null),e(qe,lu),e(qe,Go),T(cs,Go,null),e(Go,du),e(Go,xd),e(xd,cu),e(Go,pu),e(Go,ps),e(ps,fl),e(fl,mu),e(fl,Rd),e(Rd,hu),e(ps,fu),e(ps,ul),e(ul,uu),e(ul,Md),e(Md,gu),e(qe,_u),e(qe,cn),T(ms,cn,null),e(cn,ku),e(cn,hs),e(hs,vu),e(hs,Ed),e(Ed,Fu),e(hs,yu),e(qe,bu),e(qe,Fo),T(fs,Fo,null),e(Fo,Tu),e(Fo,zd),e(zd,wu),e(Fo,$u),T(pn,Fo,null),e(Fo,xu),e(Fo,dt),e(dt,Ru),e(dt,jd),e(jd,Mu),e(dt,Eu),e(dt,Cd),e(Cd,zu),e(dt,ju),e(qe,Cu),e(qe,gl),T(us,gl,null),k(t,Vm,v),k(t,ct,v),e(ct,mn),e(mn,qd),T(gs,qd,null),e(ct,qu),e(ct,Pd),e(Pd,Pu),k(t,Km,v),k(t,We,v),T(_s,We,null),e(We,Au),e(We,ks),e(ks,Lu),e(ks,Ad),e(Ad,Ou),e(ks,Iu),e(We,Du),e(We,hn),e(hn,_l),e(_l,Nu),e(hn,Su),e(hn,kl),e(kl,Wu),e(hn,Uu),e(We,Qu),e(We,vs),e(vs,Hu),e(vs,vl),e(vl,Vu),e(vs,Ku),e(We,Ju),T(fn,We,null),e(We,Bu),e(We,Xo),T(Fs,Xo,null),e(Xo,Gu),e(Xo,Ld),e(Ld,Xu),e(Xo,Yu),e(Xo,ys),e(ys,Fl),e(Fl,Zu),e(Fl,Od),e(Od,eg),e(ys,og),e(ys,yl),e(yl,tg),e(yl,Id),e(Id,ng),k(t,Jm,v),k(t,pt,v),e(pt,un),e(un,Dd),T(bs,Dd,null),e(pt,rg),e(pt,Nd),e(Nd,sg),k(t,Bm,v),k(t,Xe,v),T(Ts,Xe,null),e(Xe,ag),e(Xe,ws),e(ws,ig),e(ws,$s),e($s,lg),e(ws,dg),e(Xe,cg),e(Xe,xs),e(xs,pg),e(xs,Rs),e(Rs,mg),e(xs,hg),e(Xe,fg),e(Xe,Ue),e(Ue,ug),e(Ue,Sd),e(Sd,gg),e(Ue,_g),e(Ue,Wd),e(Wd,kg),e(Ue,vg),e(Ue,Ud),e(Ud,Fg),e(Ue,yg),e(Ue,Qd),e(Qd,bg),e(Ue,Tg),e(Ue,Hd),e(Hd,wg),e(Ue,$g),e(Ue,Vd),e(Vd,xg),e(Ue,Rg),e(Xe,Mg),e(Xe,yo),T(Ms,yo,null),e(yo,Eg),e(yo,mt),e(mt,zg),e(mt,bl),e(bl,jg),e(mt,Cg),e(mt,Kd),e(Kd,qg),e(mt,Pg),e(yo,Ag),T(gn,yo,null),e(yo,Lg),T(_n,yo,null),k(t,Gm,v),k(t,ht,v),e(ht,kn),e(kn,Jd),T(Es,Jd,null),e(ht,Og),e(ht,Bd),e(Bd,Ig),k(t,Xm,v),k(t,No,v),T(zs,No,null),e(No,Dg),e(No,ft),e(ft,Ng),e(ft,Gd),e(Gd,Sg),e(ft,Wg),e(ft,js),e(js,Ug),e(ft,Qg),e(No,Hg),e(No,bo),T(Cs,bo,null),e(bo,Vg),e(bo,ut),e(ut,Kg),e(ut,Tl),e(Tl,Jg),e(ut,Bg),e(ut,Xd),e(Xd,Gg),e(ut,Xg),e(bo,Yg),T(vn,bo,null),e(bo,Zg),T(Fn,bo,null),k(t,Ym,v),k(t,gt,v),e(gt,yn),e(yn,Yd),T(qs,Yd,null),e(gt,e_),e(gt,Zd),e(Zd,o_),k(t,Zm,v),k(t,So,v),T(Ps,So,null),e(So,t_),e(So,_t),e(_t,n_),e(_t,ec),e(ec,r_),e(_t,s_),e(_t,As),e(As,a_),e(_t,i_),e(So,l_),e(So,eo),T(Ls,eo,null),e(eo,d_),e(eo,kt),e(kt,c_),e(kt,wl),e(wl,p_),e(kt,m_),e(kt,oc),e(oc,h_),e(kt,f_),e(eo,u_),T(bn,eo,null),e(eo,g_),T(Tn,eo,null),e(eo,__),T(wn,eo,null),k(t,eh,v),k(t,vt,v),e(vt,$n),e($n,tc),T(Os,tc,null),e(vt,k_),e(vt,nc),e(nc,v_),k(t,oh,v),k(t,go,v),T(Is,go,null),e(go,F_),e(go,rc),e(rc,y_),e(go,b_),e(go,Ds),e(Ds,T_),e(Ds,Ns),e(Ns,w_),e(Ds,$_),e(go,x_),e(go,Se),T(Ss,Se,null),e(Se,R_),e(Se,Ft),e(Ft,M_),e(Ft,$l),e($l,E_),e(Ft,z_),e(Ft,sc),e(sc,j_),e(Ft,C_),e(Se,q_),T(xn,Se,null),e(Se,P_),T(Rn,Se,null),e(Se,A_),T(Mn,Se,null),e(Se,L_),T(En,Se,null),e(Se,O_),T(zn,Se,null),k(t,th,v),k(t,yt,v),e(yt,jn),e(jn,ac),T(Ws,ac,null),e(yt,I_),e(yt,ic),e(ic,D_),k(t,nh,v),k(t,_o,v),T(Us,_o,null),e(_o,N_),e(_o,lc),e(lc,S_),e(_o,W_),e(_o,Qs),e(Qs,U_),e(Qs,Hs),e(Hs,Q_),e(Qs,H_),e(_o,V_),e(_o,To),T(Vs,To,null),e(To,K_),e(To,bt),e(bt,J_),e(bt,xl),e(xl,B_),e(bt,G_),e(bt,dc),e(dc,X_),e(bt,Y_),e(To,Z_),T(Cn,To,null),e(To,ek),T(qn,To,null),k(t,rh,v),k(t,Tt,v),e(Tt,Pn),e(Pn,cc),T(Ks,cc,null),e(Tt,ok),e(Tt,pc),e(pc,tk),k(t,sh,v),k(t,ko,v),T(Js,ko,null),e(ko,nk),e(ko,mc),e(mc,rk),e(ko,sk),e(ko,Bs),e(Bs,ak),e(Bs,Gs),e(Gs,ik),e(Bs,lk),e(ko,dk),e(ko,oo),T(Xs,oo,null),e(oo,ck),e(oo,wt),e(wt,pk),e(wt,Rl),e(Rl,mk),e(wt,hk),e(wt,hc),e(hc,fk),e(wt,uk),e(oo,gk),T(An,oo,null),e(oo,_k),T(Ln,oo,null),e(oo,kk),T(On,oo,null),k(t,ah,v),k(t,$t,v),e($t,In),e(In,fc),T(Ys,fc,null),e($t,vk),e($t,uc),e(uc,Fk),k(t,ih,v),k(t,vo,v),T(Zs,vo,null),e(vo,yk),e(vo,xt),e(xt,bk),e(xt,gc),e(gc,Tk),e(xt,wk),e(xt,_c),e(_c,$k),e(xt,xk),e(vo,Rk),e(vo,ea),e(ea,Mk),e(ea,oa),e(oa,Ek),e(ea,zk),e(vo,jk),e(vo,to),T(ta,to,null),e(to,Ck),e(to,Rt),e(Rt,qk),e(Rt,Ml),e(Ml,Pk),e(Rt,Ak),e(Rt,kc),e(kc,Lk),e(Rt,Ok),e(to,Ik),T(Dn,to,null),e(to,Dk),T(Nn,to,null),e(to,Nk),T(Sn,to,null),k(t,lh,v),k(t,Mt,v),e(Mt,Wn),e(Wn,vc),T(na,vc,null),e(Mt,Sk),e(Mt,Fc),e(Fc,Wk),k(t,dh,v),k(t,Qe,v),T(ra,Qe,null),e(Qe,Uk),e(Qe,yc),e(yc,Qk),e(Qe,Hk),e(Qe,sa),e(sa,Vk),e(sa,El),e(El,Kk),e(sa,Jk),e(Qe,Bk),e(Qe,aa),e(aa,Gk),e(aa,ia),e(ia,Xk),e(aa,Yk),e(Qe,Zk),T(Un,Qe,null),e(Qe,ev),e(Qe,wo),T(la,wo,null),e(wo,ov),e(wo,Et),e(Et,tv),e(Et,zl),e(zl,nv),e(Et,rv),e(Et,bc),e(bc,sv),e(Et,av),e(wo,iv),T(Qn,wo,null),e(wo,lv),T(Hn,wo,null),k(t,ch,v),k(t,zt,v),e(zt,Vn),e(Vn,Tc),T(da,Tc,null),e(zt,dv),e(zt,wc),e(wc,cv),k(t,ph,v),k(t,He,v),T(ca,He,null),e(He,pv),e(He,pa),e(pa,mv),e(pa,$c),e($c,hv),e(pa,fv),e(He,uv),e(He,ma),e(ma,gv),e(ma,jl),e(jl,_v),e(ma,kv),e(He,vv),e(He,ha),e(ha,Fv),e(ha,fa),e(fa,yv),e(ha,bv),e(He,Tv),T(Kn,He,null),e(He,wv),e(He,no),T(ua,no,null),e(no,$v),e(no,jt),e(jt,xv),e(jt,Cl),e(Cl,Rv),e(jt,Mv),e(jt,xc),e(xc,Ev),e(jt,zv),e(no,jv),T(Jn,no,null),e(no,Cv),T(Bn,no,null),e(no,qv),T(Gn,no,null),k(t,mh,v),k(t,Ct,v),e(Ct,Xn),e(Xn,Rc),T(ga,Rc,null),e(Ct,Pv),e(Ct,Mc),e(Mc,Av),k(t,hh,v),k(t,Ve,v),T(_a,Ve,null),e(Ve,Lv),e(Ve,ka),e(ka,Ov),e(ka,Ec),e(Ec,Iv),e(ka,Dv),e(Ve,Nv),e(Ve,va),e(va,Sv),e(va,ql),e(ql,Wv),e(va,Uv),e(Ve,Qv),e(Ve,Fa),e(Fa,Hv),e(Fa,ya),e(ya,Vv),e(Fa,Kv),e(Ve,Jv),T(Yn,Ve,null),e(Ve,Bv),e(Ve,Yo),T(ba,Yo,null),e(Yo,Gv),e(Yo,Ye),e(Ye,Xv),e(Ye,zc),e(zc,Yv),e(Ye,Zv),e(Ye,jc),e(jc,eF),e(Ye,oF),e(Ye,Cc),e(Cc,tF),e(Ye,nF),e(Ye,qc),e(qc,rF),e(Ye,sF),e(Ye,Pc),e(Pc,aF),e(Ye,iF),e(Yo,lF),T(Zn,Yo,null),k(t,fh,v),k(t,qt,v),e(qt,er),e(er,Ac),T(Ta,Ac,null),e(qt,dF),e(qt,Lc),e(Lc,cF),k(t,uh,v),k(t,Ke,v),T(wa,Ke,null),e(Ke,pF),e(Ke,Oc),e(Oc,mF),e(Ke,hF),e(Ke,$a),e($a,fF),e($a,Pl),e(Pl,uF),e($a,gF),e(Ke,_F),e(Ke,xa),e(xa,kF),e(xa,Ra),e(Ra,vF),e(xa,FF),e(Ke,yF),T(or,Ke,null),e(Ke,bF),e(Ke,ro),T(Ma,ro,null),e(ro,TF),e(ro,Pt),e(Pt,wF),e(Pt,Al),e(Al,$F),e(Pt,xF),e(Pt,Ic),e(Ic,RF),e(Pt,MF),e(ro,EF),T(tr,ro,null),e(ro,zF),T(nr,ro,null),e(ro,jF),T(rr,ro,null),k(t,gh,v),k(t,At,v),e(At,sr),e(sr,Dc),T(Ea,Dc,null),e(At,CF),e(At,Nc),e(Nc,qF),k(t,_h,v),k(t,Je,v),T(za,Je,null),e(Je,PF),e(Je,Sc),e(Sc,AF),e(Je,LF),e(Je,ja),e(ja,OF),e(ja,Ll),e(Ll,IF),e(ja,DF),e(Je,NF),e(Je,Ca),e(Ca,SF),e(Ca,qa),e(qa,WF),e(Ca,UF),e(Je,QF),T(ar,Je,null),e(Je,HF),e(Je,$o),T(Pa,$o,null),e($o,VF),e($o,Lt),e(Lt,KF),e(Lt,Ol),e(Ol,JF),e(Lt,BF),e(Lt,Wc),e(Wc,GF),e(Lt,XF),e($o,YF),T(ir,$o,null),e($o,ZF),T(lr,$o,null),k(t,kh,v),k(t,Ot,v),e(Ot,dr),e(dr,Uc),T(Aa,Uc,null),e(Ot,ey),e(Ot,Qc),e(Qc,oy),k(t,vh,v),k(t,Be,v),T(La,Be,null),e(Be,ty),e(Be,Hc),e(Hc,ny),e(Be,ry),e(Be,Oa),e(Oa,sy),e(Oa,Il),e(Il,ay),e(Oa,iy),e(Be,ly),e(Be,Ia),e(Ia,dy),e(Ia,Da),e(Da,cy),e(Ia,py),e(Be,my),T(cr,Be,null),e(Be,hy),e(Be,so),T(Na,so,null),e(so,fy),e(so,It),e(It,uy),e(It,Dl),e(Dl,gy),e(It,_y),e(It,Vc),e(Vc,ky),e(It,vy),e(so,Fy),T(pr,so,null),e(so,yy),T(mr,so,null),e(so,by),T(hr,so,null),k(t,Fh,v),k(t,Dt,v),e(Dt,fr),e(fr,Kc),T(Sa,Kc,null),e(Dt,Ty),e(Dt,Jc),e(Jc,wy),k(t,yh,v),k(t,Ge,v),T(Wa,Ge,null),e(Ge,$y),e(Ge,Nt),e(Nt,xy),e(Nt,Bc),e(Bc,Ry),e(Nt,My),e(Nt,Gc),e(Gc,Ey),e(Nt,zy),e(Ge,jy),e(Ge,Ua),e(Ua,Cy),e(Ua,Nl),e(Nl,qy),e(Ua,Py),e(Ge,Ay),e(Ge,Qa),e(Qa,Ly),e(Qa,Ha),e(Ha,Oy),e(Qa,Iy),e(Ge,Dy),T(ur,Ge,null),e(Ge,Ny),e(Ge,ao),T(Va,ao,null),e(ao,Sy),e(ao,St),e(St,Wy),e(St,Sl),e(Sl,Uy),e(St,Qy),e(St,Xc),e(Xc,Hy),e(St,Vy),e(ao,Ky),T(gr,ao,null),e(ao,Jy),T(_r,ao,null),e(ao,By),T(kr,ao,null),k(t,bh,v),k(t,Wt,v),e(Wt,vr),e(vr,Yc),T(Ka,Yc,null),e(Wt,Gy),e(Wt,Zc),e(Zc,Xy),k(t,Th,v),k(t,Pe,v),T(Ja,Pe,null),e(Pe,Yy),e(Pe,ep),e(ep,Zy),e(Pe,e2),e(Pe,Ba),e(Ba,o2),e(Ba,Wl),e(Wl,t2),e(Ba,n2),e(Pe,r2),e(Pe,Ga),e(Ga,s2),e(Ga,Xa),e(Xa,a2),e(Ga,i2),e(Pe,l2),e(Pe,op),e(op,d2),e(Pe,c2),e(Pe,Wo),e(Wo,tp),e(tp,Ya),e(Ya,p2),e(Wo,m2),e(Wo,np),e(np,Za),e(Za,h2),e(Wo,f2),e(Wo,rp),e(rp,ei),e(ei,u2),e(Wo,g2),e(Wo,sp),e(sp,oi),e(oi,_2),e(Pe,k2),e(Pe,xo),T(ti,xo,null),e(xo,v2),e(xo,Ut),e(Ut,F2),e(Ut,ap),e(ap,y2),e(Ut,b2),e(Ut,ip),e(ip,T2),e(Ut,w2),e(xo,$2),T(Fr,xo,null),e(xo,x2),T(yr,xo,null),k(t,wh,v),k(t,Qt,v),e(Qt,br),e(br,lp),T(ni,lp,null),e(Qt,R2),e(Qt,dp),e(dp,M2),k(t,$h,v),k(t,Ae,v),T(ri,Ae,null),e(Ae,E2),e(Ae,si),e(si,z2),e(si,cp),e(cp,j2),e(si,C2),e(Ae,q2),e(Ae,ai),e(ai,P2),e(ai,Ul),e(Ul,A2),e(ai,L2),e(Ae,O2),e(Ae,ii),e(ii,I2),e(ii,li),e(li,D2),e(ii,N2),e(Ae,S2),e(Ae,pp),e(pp,W2),e(Ae,U2),e(Ae,Uo),e(Uo,mp),e(mp,di),e(di,Q2),e(Uo,H2),e(Uo,hp),e(hp,ci),e(ci,V2),e(Uo,K2),e(Uo,fp),e(fp,pi),e(pi,J2),e(Uo,B2),e(Uo,up),e(up,mi),e(mi,G2),e(Ae,X2),e(Ae,Ro),T(hi,Ro,null),e(Ro,Y2),e(Ro,Ht),e(Ht,Z2),e(Ht,gp),e(gp,eb),e(Ht,ob),e(Ht,_p),e(_p,tb),e(Ht,nb),e(Ro,rb),T(Tr,Ro,null),e(Ro,sb),T(wr,Ro,null),k(t,xh,v),k(t,Vt,v),e(Vt,$r),e($r,kp),T(fi,kp,null),e(Vt,ab),e(Vt,vp),e(vp,ib),k(t,Rh,v),k(t,Le,v),T(ui,Le,null),e(Le,lb),e(Le,Fp),e(Fp,db),e(Le,cb),e(Le,gi),e(gi,pb),e(gi,Ql),e(Ql,mb),e(gi,hb),e(Le,fb),e(Le,_i),e(_i,ub),e(_i,ki),e(ki,gb),e(_i,_b),e(Le,kb),e(Le,yp),e(yp,vb),e(Le,Fb),e(Le,Qo),e(Qo,bp),e(bp,vi),e(vi,yb),e(Qo,bb),e(Qo,Tp),e(Tp,Fi),e(Fi,Tb),e(Qo,wb),e(Qo,wp),e(wp,yi),e(yi,$b),e(Qo,xb),e(Qo,$p),e($p,bi),e(bi,Rb),e(Le,Mb),e(Le,Mo),T(Ti,Mo,null),e(Mo,Eb),e(Mo,Kt),e(Kt,zb),e(Kt,xp),e(xp,jb),e(Kt,Cb),e(Kt,Rp),e(Rp,qb),e(Kt,Pb),e(Mo,Ab),T(xr,Mo,null),e(Mo,Lb),T(Rr,Mo,null),k(t,Mh,v),k(t,Jt,v),e(Jt,Mr),e(Mr,Mp),T(wi,Mp,null),e(Jt,Ob),e(Jt,Ep),e(Ep,Ib),k(t,Eh,v),k(t,Oe,v),T($i,Oe,null),e(Oe,Db),e(Oe,zp),e(zp,Nb),e(Oe,Sb),e(Oe,xi),e(xi,Wb),e(xi,Hl),e(Hl,Ub),e(xi,Qb),e(Oe,Hb),e(Oe,Ri),e(Ri,Vb),e(Ri,Mi),e(Mi,Kb),e(Ri,Jb),e(Oe,Bb),e(Oe,jp),e(jp,Gb),e(Oe,Xb),e(Oe,Ho),e(Ho,Cp),e(Cp,Ei),e(Ei,Yb),e(Ho,Zb),e(Ho,qp),e(qp,zi),e(zi,eT),e(Ho,oT),e(Ho,Pp),e(Pp,ji),e(ji,tT),e(Ho,nT),e(Ho,Ap),e(Ap,Ci),e(Ci,rT),e(Oe,sT),e(Oe,Eo),T(qi,Eo,null),e(Eo,aT),e(Eo,Bt),e(Bt,iT),e(Bt,Lp),e(Lp,lT),e(Bt,dT),e(Bt,Op),e(Op,cT),e(Bt,pT),e(Eo,mT),T(Er,Eo,null),e(Eo,hT),T(zr,Eo,null),k(t,zh,v),k(t,Gt,v),e(Gt,jr),e(jr,Ip),T(Pi,Ip,null),e(Gt,fT),e(Gt,Dp),e(Dp,uT),k(t,jh,v),k(t,Ie,v),T(Ai,Ie,null),e(Ie,gT),e(Ie,Np),e(Np,_T),e(Ie,kT),e(Ie,Li),e(Li,vT),e(Li,Vl),e(Vl,FT),e(Li,yT),e(Ie,bT),e(Ie,Oi),e(Oi,TT),e(Oi,Ii),e(Ii,wT),e(Oi,$T),e(Ie,xT),e(Ie,Sp),e(Sp,RT),e(Ie,MT),e(Ie,Vo),e(Vo,Wp),e(Wp,Di),e(Di,ET),e(Vo,zT),e(Vo,Up),e(Up,Ni),e(Ni,jT),e(Vo,CT),e(Vo,Qp),e(Qp,Si),e(Si,qT),e(Vo,PT),e(Vo,Hp),e(Hp,Wi),e(Wi,AT),e(Ie,LT),e(Ie,zo),T(Ui,zo,null),e(zo,OT),e(zo,Xt),e(Xt,IT),e(Xt,Vp),e(Vp,DT),e(Xt,NT),e(Xt,Kp),e(Kp,ST),e(Xt,WT),e(zo,UT),T(Cr,zo,null),e(zo,QT),T(qr,zo,null),k(t,Ch,v),k(t,Yt,v),e(Yt,Pr),e(Pr,Jp),T(Qi,Jp,null),e(Yt,HT),e(Yt,Bp),e(Bp,VT),k(t,qh,v),k(t,De,v),T(Hi,De,null),e(De,KT),e(De,Zt),e(Zt,JT),e(Zt,Gp),e(Gp,BT),e(Zt,GT),e(Zt,Xp),e(Xp,XT),e(Zt,YT),e(De,ZT),e(De,Vi),e(Vi,ew),e(Vi,Kl),e(Kl,ow),e(Vi,tw),e(De,nw),e(De,Ki),e(Ki,rw),e(Ki,Ji),e(Ji,sw),e(Ki,aw),e(De,iw),e(De,Yp),e(Yp,lw),e(De,dw),e(De,Ko),e(Ko,Zp),e(Zp,Bi),e(Bi,cw),e(Ko,pw),e(Ko,em),e(em,Gi),e(Gi,mw),e(Ko,hw),e(Ko,om),e(om,Xi),e(Xi,fw),e(Ko,uw),e(Ko,tm),e(tm,Yi),e(Yi,gw),e(De,_w),e(De,jo),T(Zi,jo,null),e(jo,kw),e(jo,en),e(en,vw),e(en,nm),e(nm,Fw),e(en,yw),e(en,rm),e(rm,bw),e(en,Tw),e(jo,ww),T(Ar,jo,null),e(jo,$w),T(Lr,jo,null),Ph=!0},p(t,[v]){const el={};v&2&&(el.$$scope={dirty:v,ctx:t}),an.$set(el);const sm={};v&2&&(sm.$$scope={dirty:v,ctx:t}),dn.$set(sm);const am={};v&2&&(am.$$scope={dirty:v,ctx:t}),pn.$set(am);const im={};v&2&&(im.$$scope={dirty:v,ctx:t}),fn.$set(im);const ol={};v&2&&(ol.$$scope={dirty:v,ctx:t}),gn.$set(ol);const lm={};v&2&&(lm.$$scope={dirty:v,ctx:t}),_n.$set(lm);const dm={};v&2&&(dm.$$scope={dirty:v,ctx:t}),vn.$set(dm);const cm={};v&2&&(cm.$$scope={dirty:v,ctx:t}),Fn.$set(cm);const tl={};v&2&&(tl.$$scope={dirty:v,ctx:t}),bn.$set(tl);const pm={};v&2&&(pm.$$scope={dirty:v,ctx:t}),Tn.$set(pm);const mm={};v&2&&(mm.$$scope={dirty:v,ctx:t}),wn.$set(mm);const hm={};v&2&&(hm.$$scope={dirty:v,ctx:t}),xn.$set(hm);const fm={};v&2&&(fm.$$scope={dirty:v,ctx:t}),Rn.$set(fm);const um={};v&2&&(um.$$scope={dirty:v,ctx:t}),Mn.$set(um);const gm={};v&2&&(gm.$$scope={dirty:v,ctx:t}),En.$set(gm);const _m={};v&2&&(_m.$$scope={dirty:v,ctx:t}),zn.$set(_m);const on={};v&2&&(on.$$scope={dirty:v,ctx:t}),Cn.$set(on);const km={};v&2&&(km.$$scope={dirty:v,ctx:t}),qn.$set(km);const vm={};v&2&&(vm.$$scope={dirty:v,ctx:t}),An.$set(vm);const nl={};v&2&&(nl.$$scope={dirty:v,ctx:t}),Ln.$set(nl);const Fm={};v&2&&(Fm.$$scope={dirty:v,ctx:t}),On.$set(Fm);const ym={};v&2&&(ym.$$scope={dirty:v,ctx:t}),Dn.$set(ym);const bm={};v&2&&(bm.$$scope={dirty:v,ctx:t}),Nn.$set(bm);const Jo={};v&2&&(Jo.$$scope={dirty:v,ctx:t}),Sn.$set(Jo);const tn={};v&2&&(tn.$$scope={dirty:v,ctx:t}),Un.$set(tn);const Tm={};v&2&&(Tm.$$scope={dirty:v,ctx:t}),Qn.$set(Tm);const wm={};v&2&&(wm.$$scope={dirty:v,ctx:t}),Hn.$set(wm);const nn={};v&2&&(nn.$$scope={dirty:v,ctx:t}),Kn.$set(nn);const $m={};v&2&&($m.$$scope={dirty:v,ctx:t}),Jn.$set($m);const xm={};v&2&&(xm.$$scope={dirty:v,ctx:t}),Bn.$set(xm);const rl={};v&2&&(rl.$$scope={dirty:v,ctx:t}),Gn.$set(rl);const Rm={};v&2&&(Rm.$$scope={dirty:v,ctx:t}),Yn.$set(Rm);const Mm={};v&2&&(Mm.$$scope={dirty:v,ctx:t}),Zn.$set(Mm);const Em={};v&2&&(Em.$$scope={dirty:v,ctx:t}),or.$set(Em);const Ne={};v&2&&(Ne.$$scope={dirty:v,ctx:t}),tr.$set(Ne);const sl={};v&2&&(sl.$$scope={dirty:v,ctx:t}),nr.$set(sl);const zm={};v&2&&(zm.$$scope={dirty:v,ctx:t}),rr.$set(zm);const al={};v&2&&(al.$$scope={dirty:v,ctx:t}),ar.$set(al);const jm={};v&2&&(jm.$$scope={dirty:v,ctx:t}),ir.$set(jm);const rn={};v&2&&(rn.$$scope={dirty:v,ctx:t}),lr.$set(rn);const Cm={};v&2&&(Cm.$$scope={dirty:v,ctx:t}),cr.$set(Cm);const il={};v&2&&(il.$$scope={dirty:v,ctx:t}),pr.$set(il);const Jl={};v&2&&(Jl.$$scope={dirty:v,ctx:t}),mr.$set(Jl);const qm={};v&2&&(qm.$$scope={dirty:v,ctx:t}),hr.$set(qm);const Bl={};v&2&&(Bl.$$scope={dirty:v,ctx:t}),ur.$set(Bl);const Pm={};v&2&&(Pm.$$scope={dirty:v,ctx:t}),gr.$set(Pm);const ll={};v&2&&(ll.$$scope={dirty:v,ctx:t}),_r.$set(ll);const dl={};v&2&&(dl.$$scope={dirty:v,ctx:t}),kr.$set(dl);const Am={};v&2&&(Am.$$scope={dirty:v,ctx:t}),Fr.$set(Am);const Bo={};v&2&&(Bo.$$scope={dirty:v,ctx:t}),yr.$set(Bo);const Lm={};v&2&&(Lm.$$scope={dirty:v,ctx:t}),Tr.$set(Lm);const sn={};v&2&&(sn.$$scope={dirty:v,ctx:t}),wr.$set(sn);const Om={};v&2&&(Om.$$scope={dirty:v,ctx:t}),xr.$set(Om);const Im={};v&2&&(Im.$$scope={dirty:v,ctx:t}),Rr.$set(Im);const Dm={};v&2&&(Dm.$$scope={dirty:v,ctx:t}),Er.$set(Dm);const cl={};v&2&&(cl.$$scope={dirty:v,ctx:t}),zr.$set(cl);const Nm={};v&2&&(Nm.$$scope={dirty:v,ctx:t}),Cr.$set(Nm);const Sm={};v&2&&(Sm.$$scope={dirty:v,ctx:t}),qr.$set(Sm);const Wm={};v&2&&(Wm.$$scope={dirty:v,ctx:t}),Ar.$set(Wm);const Ze={};v&2&&(Ze.$$scope={dirty:v,ctx:t}),Lr.$set(Ze)},i(t){Ph||(w(l.$$.fragment,t),w(ee.$$.fragment,t),w(we.$$.fragment,t),w(I.$$.fragment,t),w(an.$$.fragment,t),w(ss.$$.fragment,t),w(as.$$.fragment,t),w(dn.$$.fragment,t),w(cs.$$.fragment,t),w(ms.$$.fragment,t),w(fs.$$.fragment,t),w(pn.$$.fragment,t),w(us.$$.fragment,t),w(gs.$$.fragment,t),w(_s.$$.fragment,t),w(fn.$$.fragment,t),w(Fs.$$.fragment,t),w(bs.$$.fragment,t),w(Ts.$$.fragment,t),w(Ms.$$.fragment,t),w(gn.$$.fragment,t),w(_n.$$.fragment,t),w(Es.$$.fragment,t),w(zs.$$.fragment,t),w(Cs.$$.fragment,t),w(vn.$$.fragment,t),w(Fn.$$.fragment,t),w(qs.$$.fragment,t),w(Ps.$$.fragment,t),w(Ls.$$.fragment,t),w(bn.$$.fragment,t),w(Tn.$$.fragment,t),w(wn.$$.fragment,t),w(Os.$$.fragment,t),w(Is.$$.fragment,t),w(Ss.$$.fragment,t),w(xn.$$.fragment,t),w(Rn.$$.fragment,t),w(Mn.$$.fragment,t),w(En.$$.fragment,t),w(zn.$$.fragment,t),w(Ws.$$.fragment,t),w(Us.$$.fragment,t),w(Vs.$$.fragment,t),w(Cn.$$.fragment,t),w(qn.$$.fragment,t),w(Ks.$$.fragment,t),w(Js.$$.fragment,t),w(Xs.$$.fragment,t),w(An.$$.fragment,t),w(Ln.$$.fragment,t),w(On.$$.fragment,t),w(Ys.$$.fragment,t),w(Zs.$$.fragment,t),w(ta.$$.fragment,t),w(Dn.$$.fragment,t),w(Nn.$$.fragment,t),w(Sn.$$.fragment,t),w(na.$$.fragment,t),w(ra.$$.fragment,t),w(Un.$$.fragment,t),w(la.$$.fragment,t),w(Qn.$$.fragment,t),w(Hn.$$.fragment,t),w(da.$$.fragment,t),w(ca.$$.fragment,t),w(Kn.$$.fragment,t),w(ua.$$.fragment,t),w(Jn.$$.fragment,t),w(Bn.$$.fragment,t),w(Gn.$$.fragment,t),w(ga.$$.fragment,t),w(_a.$$.fragment,t),w(Yn.$$.fragment,t),w(ba.$$.fragment,t),w(Zn.$$.fragment,t),w(Ta.$$.fragment,t),w(wa.$$.fragment,t),w(or.$$.fragment,t),w(Ma.$$.fragment,t),w(tr.$$.fragment,t),w(nr.$$.fragment,t),w(rr.$$.fragment,t),w(Ea.$$.fragment,t),w(za.$$.fragment,t),w(ar.$$.fragment,t),w(Pa.$$.fragment,t),w(ir.$$.fragment,t),w(lr.$$.fragment,t),w(Aa.$$.fragment,t),w(La.$$.fragment,t),w(cr.$$.fragment,t),w(Na.$$.fragment,t),w(pr.$$.fragment,t),w(mr.$$.fragment,t),w(hr.$$.fragment,t),w(Sa.$$.fragment,t),w(Wa.$$.fragment,t),w(ur.$$.fragment,t),w(Va.$$.fragment,t),w(gr.$$.fragment,t),w(_r.$$.fragment,t),w(kr.$$.fragment,t),w(Ka.$$.fragment,t),w(Ja.$$.fragment,t),w(ti.$$.fragment,t),w(Fr.$$.fragment,t),w(yr.$$.fragment,t),w(ni.$$.fragment,t),w(ri.$$.fragment,t),w(hi.$$.fragment,t),w(Tr.$$.fragment,t),w(wr.$$.fragment,t),w(fi.$$.fragment,t),w(ui.$$.fragment,t),w(Ti.$$.fragment,t),w(xr.$$.fragment,t),w(Rr.$$.fragment,t),w(wi.$$.fragment,t),w($i.$$.fragment,t),w(qi.$$.fragment,t),w(Er.$$.fragment,t),w(zr.$$.fragment,t),w(Pi.$$.fragment,t),w(Ai.$$.fragment,t),w(Ui.$$.fragment,t),w(Cr.$$.fragment,t),w(qr.$$.fragment,t),w(Qi.$$.fragment,t),w(Hi.$$.fragment,t),w(Zi.$$.fragment,t),w(Ar.$$.fragment,t),w(Lr.$$.fragment,t),Ph=!0)},o(t){$(l.$$.fragment,t),$(ee.$$.fragment,t),$(we.$$.fragment,t),$(I.$$.fragment,t),$(an.$$.fragment,t),$(ss.$$.fragment,t),$(as.$$.fragment,t),$(dn.$$.fragment,t),$(cs.$$.fragment,t),$(ms.$$.fragment,t),$(fs.$$.fragment,t),$(pn.$$.fragment,t),$(us.$$.fragment,t),$(gs.$$.fragment,t),$(_s.$$.fragment,t),$(fn.$$.fragment,t),$(Fs.$$.fragment,t),$(bs.$$.fragment,t),$(Ts.$$.fragment,t),$(Ms.$$.fragment,t),$(gn.$$.fragment,t),$(_n.$$.fragment,t),$(Es.$$.fragment,t),$(zs.$$.fragment,t),$(Cs.$$.fragment,t),$(vn.$$.fragment,t),$(Fn.$$.fragment,t),$(qs.$$.fragment,t),$(Ps.$$.fragment,t),$(Ls.$$.fragment,t),$(bn.$$.fragment,t),$(Tn.$$.fragment,t),$(wn.$$.fragment,t),$(Os.$$.fragment,t),$(Is.$$.fragment,t),$(Ss.$$.fragment,t),$(xn.$$.fragment,t),$(Rn.$$.fragment,t),$(Mn.$$.fragment,t),$(En.$$.fragment,t),$(zn.$$.fragment,t),$(Ws.$$.fragment,t),$(Us.$$.fragment,t),$(Vs.$$.fragment,t),$(Cn.$$.fragment,t),$(qn.$$.fragment,t),$(Ks.$$.fragment,t),$(Js.$$.fragment,t),$(Xs.$$.fragment,t),$(An.$$.fragment,t),$(Ln.$$.fragment,t),$(On.$$.fragment,t),$(Ys.$$.fragment,t),$(Zs.$$.fragment,t),$(ta.$$.fragment,t),$(Dn.$$.fragment,t),$(Nn.$$.fragment,t),$(Sn.$$.fragment,t),$(na.$$.fragment,t),$(ra.$$.fragment,t),$(Un.$$.fragment,t),$(la.$$.fragment,t),$(Qn.$$.fragment,t),$(Hn.$$.fragment,t),$(da.$$.fragment,t),$(ca.$$.fragment,t),$(Kn.$$.fragment,t),$(ua.$$.fragment,t),$(Jn.$$.fragment,t),$(Bn.$$.fragment,t),$(Gn.$$.fragment,t),$(ga.$$.fragment,t),$(_a.$$.fragment,t),$(Yn.$$.fragment,t),$(ba.$$.fragment,t),$(Zn.$$.fragment,t),$(Ta.$$.fragment,t),$(wa.$$.fragment,t),$(or.$$.fragment,t),$(Ma.$$.fragment,t),$(tr.$$.fragment,t),$(nr.$$.fragment,t),$(rr.$$.fragment,t),$(Ea.$$.fragment,t),$(za.$$.fragment,t),$(ar.$$.fragment,t),$(Pa.$$.fragment,t),$(ir.$$.fragment,t),$(lr.$$.fragment,t),$(Aa.$$.fragment,t),$(La.$$.fragment,t),$(cr.$$.fragment,t),$(Na.$$.fragment,t),$(pr.$$.fragment,t),$(mr.$$.fragment,t),$(hr.$$.fragment,t),$(Sa.$$.fragment,t),$(Wa.$$.fragment,t),$(ur.$$.fragment,t),$(Va.$$.fragment,t),$(gr.$$.fragment,t),$(_r.$$.fragment,t),$(kr.$$.fragment,t),$(Ka.$$.fragment,t),$(Ja.$$.fragment,t),$(ti.$$.fragment,t),$(Fr.$$.fragment,t),$(yr.$$.fragment,t),$(ni.$$.fragment,t),$(ri.$$.fragment,t),$(hi.$$.fragment,t),$(Tr.$$.fragment,t),$(wr.$$.fragment,t),$(fi.$$.fragment,t),$(ui.$$.fragment,t),$(Ti.$$.fragment,t),$(xr.$$.fragment,t),$(Rr.$$.fragment,t),$(wi.$$.fragment,t),$($i.$$.fragment,t),$(qi.$$.fragment,t),$(Er.$$.fragment,t),$(zr.$$.fragment,t),$(Pi.$$.fragment,t),$(Ai.$$.fragment,t),$(Ui.$$.fragment,t),$(Cr.$$.fragment,t),$(qr.$$.fragment,t),$(Qi.$$.fragment,t),$(Hi.$$.fragment,t),$(Zi.$$.fragment,t),$(Ar.$$.fragment,t),$(Lr.$$.fragment,t),Ph=!1},d(t){o(d),t&&o(g),t&&o(c),x(l),t&&o(B),t&&o(z),x(ee),t&&o(pe),t&&o(J),t&&o(q),t&&o(ne),t&&o(me),t&&o(re),t&&o(he),t&&o(C),t&&o(U),t&&o(se),t&&o(fe),t&&o(X),t&&o(Me),t&&o(be),x(we),t&&o(Ee),t&&o(ae),x(I),x(an),t&&o(Qm),t&&o(lt),x(ss),t&&o(Hm),t&&o(qe),x(as),x(dn),x(cs),x(ms),x(fs),x(pn),x(us),t&&o(Vm),t&&o(ct),x(gs),t&&o(Km),t&&o(We),x(_s),x(fn),x(Fs),t&&o(Jm),t&&o(pt),x(bs),t&&o(Bm),t&&o(Xe),x(Ts),x(Ms),x(gn),x(_n),t&&o(Gm),t&&o(ht),x(Es),t&&o(Xm),t&&o(No),x(zs),x(Cs),x(vn),x(Fn),t&&o(Ym),t&&o(gt),x(qs),t&&o(Zm),t&&o(So),x(Ps),x(Ls),x(bn),x(Tn),x(wn),t&&o(eh),t&&o(vt),x(Os),t&&o(oh),t&&o(go),x(Is),x(Ss),x(xn),x(Rn),x(Mn),x(En),x(zn),t&&o(th),t&&o(yt),x(Ws),t&&o(nh),t&&o(_o),x(Us),x(Vs),x(Cn),x(qn),t&&o(rh),t&&o(Tt),x(Ks),t&&o(sh),t&&o(ko),x(Js),x(Xs),x(An),x(Ln),x(On),t&&o(ah),t&&o($t),x(Ys),t&&o(ih),t&&o(vo),x(Zs),x(ta),x(Dn),x(Nn),x(Sn),t&&o(lh),t&&o(Mt),x(na),t&&o(dh),t&&o(Qe),x(ra),x(Un),x(la),x(Qn),x(Hn),t&&o(ch),t&&o(zt),x(da),t&&o(ph),t&&o(He),x(ca),x(Kn),x(ua),x(Jn),x(Bn),x(Gn),t&&o(mh),t&&o(Ct),x(ga),t&&o(hh),t&&o(Ve),x(_a),x(Yn),x(ba),x(Zn),t&&o(fh),t&&o(qt),x(Ta),t&&o(uh),t&&o(Ke),x(wa),x(or),x(Ma),x(tr),x(nr),x(rr),t&&o(gh),t&&o(At),x(Ea),t&&o(_h),t&&o(Je),x(za),x(ar),x(Pa),x(ir),x(lr),t&&o(kh),t&&o(Ot),x(Aa),t&&o(vh),t&&o(Be),x(La),x(cr),x(Na),x(pr),x(mr),x(hr),t&&o(Fh),t&&o(Dt),x(Sa),t&&o(yh),t&&o(Ge),x(Wa),x(ur),x(Va),x(gr),x(_r),x(kr),t&&o(bh),t&&o(Wt),x(Ka),t&&o(Th),t&&o(Pe),x(Ja),x(ti),x(Fr),x(yr),t&&o(wh),t&&o(Qt),x(ni),t&&o($h),t&&o(Ae),x(ri),x(hi),x(Tr),x(wr),t&&o(xh),t&&o(Vt),x(fi),t&&o(Rh),t&&o(Le),x(ui),x(Ti),x(xr),x(Rr),t&&o(Mh),t&&o(Jt),x(wi),t&&o(Eh),t&&o(Oe),x($i),x(qi),x(Er),x(zr),t&&o(zh),t&&o(Gt),x(Pi),t&&o(jh),t&&o(Ie),x(Ai),x(Ui),x(Cr),x(qr),t&&o(Ch),t&&o(Yt),x(Qi),t&&o(qh),t&&o(De),x(Hi),x(Zi),x(Ar),x(Lr)}}}const Gx={local:"roformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.RoFormerConfig",title:"RoFormerConfig"},{local:"transformers.RoFormerTokenizer",title:"RoFormerTokenizer"},{local:"transformers.RoFormerTokenizerFast",title:"RoFormerTokenizerFast"},{local:"transformers.RoFormerModel",title:"RoFormerModel"},{local:"transformers.RoFormerForCausalLM",title:"RoFormerForCausalLM"},{local:"transformers.RoFormerForMaskedLM",title:"RoFormerForMaskedLM"},{local:"transformers.RoFormerForSequenceClassification",title:"RoFormerForSequenceClassification"},{local:"transformers.RoFormerForMultipleChoice",title:"RoFormerForMultipleChoice"},{local:"transformers.RoFormerForTokenClassification",title:"RoFormerForTokenClassification"},{local:"transformers.RoFormerForQuestionAnswering",title:"RoFormerForQuestionAnswering"},{local:"transformers.TFRoFormerModel",title:"TFRoFormerModel"},{local:"transformers.TFRoFormerForMaskedLM",title:"TFRoFormerForMaskedLM"},{local:"transformers.TFRoFormerForCausalLM",title:"TFRoFormerForCausalLM"},{local:"transformers.TFRoFormerForSequenceClassification",title:"TFRoFormerForSequenceClassification"},{local:"transformers.TFRoFormerForMultipleChoice",title:"TFRoFormerForMultipleChoice"},{local:"transformers.TFRoFormerForTokenClassification",title:"TFRoFormerForTokenClassification"},{local:"transformers.TFRoFormerForQuestionAnswering",title:"TFRoFormerForQuestionAnswering"},{local:"transformers.FlaxRoFormerModel",title:"FlaxRoFormerModel"},{local:"transformers.FlaxRoFormerForMaskedLM",title:"FlaxRoFormerForMaskedLM"},{local:"transformers.FlaxRoFormerForSequenceClassification",title:"FlaxRoFormerForSequenceClassification"},{local:"transformers.FlaxRoFormerForMultipleChoice",title:"FlaxRoFormerForMultipleChoice"},{local:"transformers.FlaxRoFormerForTokenClassification",title:"FlaxRoFormerForTokenClassification"},{local:"transformers.FlaxRoFormerForQuestionAnswering",title:"FlaxRoFormerForQuestionAnswering"}],title:"RoFormer"};function Xx(R){return W4(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class rR extends I4{constructor(d){super();D4(this,d,Xx,Bx,N4,{})}}export{rR as default,Gx as metadata};
