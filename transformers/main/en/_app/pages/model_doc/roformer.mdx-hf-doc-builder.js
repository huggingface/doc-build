import{S as Ix,i as Dx,s as Nx,e as n,k as m,w as v,t as a,M as Sx,c as r,d as o,m as h,a as s,x as b,h as i,b as u,G as e,g as k,y as T,q as w,o as $,B as x,v as Wx,L as le}from"../../chunks/vendor-hf-doc-builder.js";import{T as Re}from"../../chunks/Tip-hf-doc-builder.js";import{D}from"../../chunks/Docstring-hf-doc-builder.js";import{C as de}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ux(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerModel, RoFormerConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Qx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
tokenizer.tokenize("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>)
<span class="hljs-comment"># [&#x27;\u4ECA&#x27;, &#x27;\u5929&#x27;, &#x27;\u5929&#x27;, &#x27;\u6C14&#x27;, &#x27;\u975E\u5E38&#x27;, &#x27;\u597D&#x27;, &#x27;\u3002&#x27;]</span>`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Hx(R){let d,g,c,p,_;return p=new de({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),g=a("sequence pair mask has the following format:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"sequence pair mask has the following format:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Vx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizerFast

tokenizer = RoFormerTokenizerFast.from_pretrained("junnyu/roformer_chinese_base")
tokenizer.tokenize("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizerFast.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>)
<span class="hljs-comment"># [&#x27;\u4ECA&#x27;, &#x27;\u5929&#x27;, &#x27;\u5929&#x27;, &#x27;\u6C14&#x27;, &#x27;\u975E\u5E38&#x27;, &#x27;\u597D&#x27;, &#x27;\u3002&#x27;]</span>`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Kx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Jx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Bx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Gx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForCausalLM, RoFormerConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Xx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Yx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForMaskedLM
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
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Zx(R){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function eR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function oR(R){let d,g,c,p,_;return p=new de({props:{code:`import torch
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
`}}),{c(){d=n("p"),g=a("Example of single-label classification:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example of single-label classification:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function tR(R){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){v(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function nR(R){let d,g,c,p,_;return p=new de({props:{code:`import torch
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
`}}),{c(){d=n("p"),g=a("Example of multi-label classification:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example of multi-label classification:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function rR(R){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function sR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function aR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function iR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function lR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForTokenClassification
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
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function dR(R){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function cR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function pR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForQuestionAnswering
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
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function mR(R){let d,g;return d=new de({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function hR(R){let d,g,c,p,_,l,f,M,ue,B,z,Z,N,ee,ge,S,_e,pe,J,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,O,te,V,ye;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),z=n("p"),Z=a("This second option is useful when using "),N=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),_e=a("model(inputs)"),pe=a("."),J=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),O=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),ye=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=r(y,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(y),p=r(y,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var be=s(M);ue=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(o),Y.forEach(o),B=h(y),z=r(y,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),N=r(P,"CODE",{});var xe=s(N);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(P,"CODE",{});var we=s(S);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),J=h(y),L=r(y,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(y),j=r(y,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var I=s(C);Fe=i(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(I,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(I," or "),H=r(I,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),I.forEach(o),X=h(A),O=r(A,"LI",{});var ve=s(O);te=i(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ve,"CODE",{});var $e=s(V);ye=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),ve.forEach(o),A.forEach(o)},m(y,E){k(y,d,E),e(d,g),k(y,c,E),k(y,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(y,B,E),k(y,z,E),e(z,Z),e(z,N),e(N,ee),e(z,ge),e(z,S),e(S,_e),e(z,pe),k(y,J,E),k(y,L,E),e(L,oe),k(y,G,E),k(y,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,O),e(O,te),e(O,V),e(V,ye)},d(y){y&&o(d),y&&o(c),y&&o(p),y&&o(B),y&&o(z),y&&o(J),y&&o(L),y&&o(G),y&&o(j)}}}function fR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function uR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function gR(R){let d,g,c,p,_,l,f,M,ue,B,z,Z,N,ee,ge,S,_e,pe,J,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,O,te,V,ye;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),z=n("p"),Z=a("This second option is useful when using "),N=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),_e=a("model(inputs)"),pe=a("."),J=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),O=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),ye=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=r(y,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(y),p=r(y,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var be=s(M);ue=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(o),Y.forEach(o),B=h(y),z=r(y,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),N=r(P,"CODE",{});var xe=s(N);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(P,"CODE",{});var we=s(S);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),J=h(y),L=r(y,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(y),j=r(y,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var I=s(C);Fe=i(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(I,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(I," or "),H=r(I,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),I.forEach(o),X=h(A),O=r(A,"LI",{});var ve=s(O);te=i(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ve,"CODE",{});var $e=s(V);ye=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),ve.forEach(o),A.forEach(o)},m(y,E){k(y,d,E),e(d,g),k(y,c,E),k(y,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(y,B,E),k(y,z,E),e(z,Z),e(z,N),e(N,ee),e(z,ge),e(z,S),e(S,_e),e(z,pe),k(y,J,E),k(y,L,E),e(L,oe),k(y,G,E),k(y,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,O),e(O,te),e(O,V),e(V,ye)},d(y){y&&o(d),y&&o(c),y&&o(p),y&&o(B),y&&o(z),y&&o(J),y&&o(L),y&&o(G),y&&o(j)}}}function _R(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function kR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForMaskedLM
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
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function FR(R){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function yR(R){let d,g,c,p,_,l,f,M,ue,B,z,Z,N,ee,ge,S,_e,pe,J,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,O,te,V,ye;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),z=n("p"),Z=a("This second option is useful when using "),N=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),_e=a("model(inputs)"),pe=a("."),J=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),O=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),ye=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=r(y,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(y),p=r(y,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var be=s(M);ue=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(o),Y.forEach(o),B=h(y),z=r(y,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),N=r(P,"CODE",{});var xe=s(N);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(P,"CODE",{});var we=s(S);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),J=h(y),L=r(y,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(y),j=r(y,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var I=s(C);Fe=i(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(I,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(I," or "),H=r(I,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),I.forEach(o),X=h(A),O=r(A,"LI",{});var ve=s(O);te=i(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ve,"CODE",{});var $e=s(V);ye=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),ve.forEach(o),A.forEach(o)},m(y,E){k(y,d,E),e(d,g),k(y,c,E),k(y,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(y,B,E),k(y,z,E),e(z,Z),e(z,N),e(N,ee),e(z,ge),e(z,S),e(S,_e),e(z,pe),k(y,J,E),k(y,L,E),e(L,oe),k(y,G,E),k(y,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,O),e(O,te),e(O,V),e(V,ye)},d(y){y&&o(d),y&&o(c),y&&o(p),y&&o(B),y&&o(z),y&&o(J),y&&o(L),y&&o(G),y&&o(j)}}}function vR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function bR(R){let d,g,c,p,_,l,f,M,ue,B,z,Z,N,ee,ge,S,_e,pe,J,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,O,te,V,ye;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),z=n("p"),Z=a("This second option is useful when using "),N=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),_e=a("model(inputs)"),pe=a("."),J=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),O=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),ye=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=r(y,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(y),p=r(y,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var be=s(M);ue=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(o),Y.forEach(o),B=h(y),z=r(y,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),N=r(P,"CODE",{});var xe=s(N);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(P,"CODE",{});var we=s(S);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),J=h(y),L=r(y,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(y),j=r(y,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var I=s(C);Fe=i(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(I,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(I," or "),H=r(I,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),I.forEach(o),X=h(A),O=r(A,"LI",{});var ve=s(O);te=i(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ve,"CODE",{});var $e=s(V);ye=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),ve.forEach(o),A.forEach(o)},m(y,E){k(y,d,E),e(d,g),k(y,c,E),k(y,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(y,B,E),k(y,z,E),e(z,Z),e(z,N),e(N,ee),e(z,ge),e(z,S),e(S,_e),e(z,pe),k(y,J,E),k(y,L,E),e(L,oe),k(y,G,E),k(y,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,O),e(O,te),e(O,V),e(V,ye)},d(y){y&&o(d),y&&o(c),y&&o(p),y&&o(B),y&&o(z),y&&o(J),y&&o(L),y&&o(G),y&&o(j)}}}function TR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function wR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForSequenceClassification
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
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function $R(R){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){v(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function xR(R){let d,g,c,p,_,l,f,M,ue,B,z,Z,N,ee,ge,S,_e,pe,J,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,O,te,V,ye;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),z=n("p"),Z=a("This second option is useful when using "),N=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),_e=a("model(inputs)"),pe=a("."),J=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),O=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),ye=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=r(y,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(y),p=r(y,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var be=s(M);ue=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(o),Y.forEach(o),B=h(y),z=r(y,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),N=r(P,"CODE",{});var xe=s(N);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(P,"CODE",{});var we=s(S);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),J=h(y),L=r(y,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(y),j=r(y,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var I=s(C);Fe=i(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(I,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(I," or "),H=r(I,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),I.forEach(o),X=h(A),O=r(A,"LI",{});var ve=s(O);te=i(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ve,"CODE",{});var $e=s(V);ye=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),ve.forEach(o),A.forEach(o)},m(y,E){k(y,d,E),e(d,g),k(y,c,E),k(y,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(y,B,E),k(y,z,E),e(z,Z),e(z,N),e(N,ee),e(z,ge),e(z,S),e(S,_e),e(z,pe),k(y,J,E),k(y,L,E),e(L,oe),k(y,G,E),k(y,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,O),e(O,te),e(O,V),e(V,ye)},d(y){y&&o(d),y&&o(c),y&&o(p),y&&o(B),y&&o(z),y&&o(J),y&&o(L),y&&o(G),y&&o(j)}}}function RR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function MR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function ER(R){let d,g,c,p,_,l,f,M,ue,B,z,Z,N,ee,ge,S,_e,pe,J,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,O,te,V,ye;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),z=n("p"),Z=a("This second option is useful when using "),N=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),_e=a("model(inputs)"),pe=a("."),J=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),O=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),ye=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=r(y,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(y),p=r(y,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var be=s(M);ue=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(o),Y.forEach(o),B=h(y),z=r(y,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),N=r(P,"CODE",{});var xe=s(N);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(P,"CODE",{});var we=s(S);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),J=h(y),L=r(y,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(y),j=r(y,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var I=s(C);Fe=i(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(I,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(I," or "),H=r(I,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),I.forEach(o),X=h(A),O=r(A,"LI",{});var ve=s(O);te=i(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ve,"CODE",{});var $e=s(V);ye=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),ve.forEach(o),A.forEach(o)},m(y,E){k(y,d,E),e(d,g),k(y,c,E),k(y,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(y,B,E),k(y,z,E),e(z,Z),e(z,N),e(N,ee),e(z,ge),e(z,S),e(S,_e),e(z,pe),k(y,J,E),k(y,L,E),e(L,oe),k(y,G,E),k(y,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,O),e(O,te),e(O,V),e(V,ye)},d(y){y&&o(d),y&&o(c),y&&o(p),y&&o(B),y&&o(z),y&&o(J),y&&o(L),y&&o(G),y&&o(j)}}}function zR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function jR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForTokenClassification
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
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function CR(R){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function qR(R){let d,g,c,p,_,l,f,M,ue,B,z,Z,N,ee,ge,S,_e,pe,J,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,O,te,V,ye;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),B=m(),z=n("p"),Z=a("This second option is useful when using "),N=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),_e=a("model(inputs)"),pe=a("."),J=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),O=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),ye=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=r(y,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(y),p=r(y,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var be=s(M);ue=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(o),Y.forEach(o),B=h(y),z=r(y,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),N=r(P,"CODE",{});var xe=s(N);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(P,"CODE",{});var we=s(S);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),J=h(y),L=r(y,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(y),j=r(y,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var I=s(C);Fe=i(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(I,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(I," or "),H=r(I,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),I.forEach(o),X=h(A),O=r(A,"LI",{});var ve=s(O);te=i(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ve,"CODE",{});var $e=s(V);ye=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),ve.forEach(o),A.forEach(o)},m(y,E){k(y,d,E),e(d,g),k(y,c,E),k(y,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(y,B,E),k(y,z,E),e(z,Z),e(z,N),e(N,ee),e(z,ge),e(z,S),e(S,_e),e(z,pe),k(y,J,E),k(y,L,E),e(L,oe),k(y,G,E),k(y,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,O),e(O,te),e(O,V),e(V,ye)},d(y){y&&o(d),y&&o(c),y&&o(p),y&&o(B),y&&o(z),y&&o(J),y&&o(L),y&&o(G),y&&o(j)}}}function PR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function AR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForQuestionAnswering
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
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function LR(R){let d,g;return d=new de({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function OR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function IR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerModel

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerModel.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerModel.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function DR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function NR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForMaskedLM

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForMaskedLM.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function SR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function WR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForSequenceClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function UR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function QR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function HR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function VR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForTokenClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForTokenClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function KR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function JR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),b(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function BR(R){let d,g,c,p,_,l,f,M,ue,B,z,Z,N,ee,ge,S,_e,pe,J,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,O,te,V,ye,y,E,Y,Me,be,P,xe,we,je,A,K,Ee,ae,I,Ce,Te,ve,$e,Nf,Sf,rs,Wf,Uf,Qf,it,Hf,pl,Vf,Kf,ml,Jf,Bf,Gf,an,Qm,lt,ln,wd,ss,Xf,$d,Yf,Hm,qe,as,Zf,is,eu,ls,ou,tu,nu,ds,ru,hl,su,au,iu,dn,lu,Go,cs,du,xd,cu,pu,ps,fl,mu,Rd,hu,fu,ul,uu,Md,gu,_u,cn,ms,ku,hs,Fu,Ed,yu,vu,bu,yo,fs,Tu,zd,wu,$u,pn,xu,dt,Ru,jd,Mu,Eu,Cd,zu,ju,Cu,gl,us,Vm,ct,mn,qd,gs,qu,Pd,Pu,Km,We,_s,Au,ks,Lu,Ad,Ou,Iu,Du,hn,_l,Nu,Su,kl,Wu,Uu,Qu,Fs,Hu,Fl,Vu,Ku,Ju,fn,Bu,Xo,ys,Gu,Ld,Xu,Yu,vs,yl,Zu,Od,eg,og,vl,tg,Id,ng,Jm,pt,un,Dd,bs,rg,Nd,sg,Bm,Xe,Ts,ag,ws,ig,$s,lg,dg,cg,xs,pg,Rs,mg,hg,fg,Ue,ug,Sd,gg,_g,Wd,kg,Fg,Ud,yg,vg,Qd,bg,Tg,Hd,wg,$g,Vd,xg,Rg,Mg,vo,Ms,Eg,mt,zg,bl,jg,Cg,Kd,qg,Pg,Ag,gn,Lg,_n,Gm,ht,kn,Jd,Es,Og,Bd,Ig,Xm,No,zs,Dg,ft,Ng,Gd,Sg,Wg,js,Ug,Qg,Hg,bo,Cs,Vg,ut,Kg,Tl,Jg,Bg,Xd,Gg,Xg,Yg,Fn,Zg,yn,Ym,gt,vn,Yd,qs,e_,Zd,o_,Zm,So,Ps,t_,_t,n_,ec,r_,s_,As,a_,i_,l_,eo,Ls,d_,kt,c_,wl,p_,m_,oc,h_,f_,u_,bn,g_,Tn,__,wn,eh,Ft,$n,tc,Os,k_,nc,F_,oh,go,Is,y_,rc,v_,b_,Ds,T_,Ns,w_,$_,x_,Se,Ss,R_,yt,M_,$l,E_,z_,sc,j_,C_,q_,xn,P_,Rn,A_,Mn,L_,En,O_,zn,th,vt,jn,ac,Ws,I_,ic,D_,nh,_o,Us,N_,lc,S_,W_,Qs,U_,Hs,Q_,H_,V_,To,Vs,K_,bt,J_,xl,B_,G_,dc,X_,Y_,Z_,Cn,ek,qn,rh,Tt,Pn,cc,Ks,ok,pc,tk,sh,ko,Js,nk,mc,rk,sk,Bs,ak,Gs,ik,lk,dk,oo,Xs,ck,wt,pk,Rl,mk,hk,hc,fk,uk,gk,An,_k,Ln,kk,On,ah,$t,In,fc,Ys,Fk,uc,yk,ih,Fo,Zs,vk,xt,bk,gc,Tk,wk,_c,$k,xk,Rk,ea,Mk,oa,Ek,zk,jk,to,ta,Ck,Rt,qk,Ml,Pk,Ak,kc,Lk,Ok,Ik,Dn,Dk,Nn,Nk,Sn,lh,Mt,Wn,Fc,na,Sk,yc,Wk,dh,Qe,ra,Uk,vc,Qk,Hk,sa,Vk,El,Kk,Jk,Bk,aa,Gk,ia,Xk,Yk,Zk,Un,eF,wo,la,oF,Et,tF,zl,nF,rF,bc,sF,aF,iF,Qn,lF,Hn,ch,zt,Vn,Tc,da,dF,wc,cF,ph,He,ca,pF,pa,mF,$c,hF,fF,uF,ma,gF,jl,_F,kF,FF,ha,yF,fa,vF,bF,TF,Kn,wF,no,ua,$F,jt,xF,Cl,RF,MF,xc,EF,zF,jF,Jn,CF,Bn,qF,Gn,mh,Ct,Xn,Rc,ga,PF,Mc,AF,hh,Ve,_a,LF,ka,OF,Ec,IF,DF,NF,Fa,SF,ql,WF,UF,QF,ya,HF,va,VF,KF,JF,Yn,BF,Yo,ba,GF,Ye,XF,zc,YF,ZF,jc,ey,oy,Cc,ty,ny,qc,ry,sy,Pc,ay,iy,ly,Zn,fh,qt,er,Ac,Ta,dy,Lc,cy,uh,Ke,wa,py,Oc,my,hy,$a,fy,Pl,uy,gy,_y,xa,ky,Ra,Fy,yy,vy,or,by,ro,Ma,Ty,Pt,wy,Al,$y,xy,Ic,Ry,My,Ey,tr,zy,nr,jy,rr,gh,At,sr,Dc,Ea,Cy,Nc,qy,_h,Je,za,Py,Sc,Ay,Ly,ja,Oy,Ll,Iy,Dy,Ny,Ca,Sy,qa,Wy,Uy,Qy,ar,Hy,$o,Pa,Vy,Lt,Ky,Ol,Jy,By,Wc,Gy,Xy,Yy,ir,Zy,lr,kh,Ot,dr,Uc,Aa,ev,Qc,ov,Fh,Be,La,tv,Hc,nv,rv,Oa,sv,Il,av,iv,lv,Ia,dv,Da,cv,pv,mv,cr,hv,so,Na,fv,It,uv,Dl,gv,_v,Vc,kv,Fv,yv,pr,vv,mr,bv,hr,yh,Dt,fr,Kc,Sa,Tv,Jc,wv,vh,Ge,Wa,$v,Nt,xv,Bc,Rv,Mv,Gc,Ev,zv,jv,Ua,Cv,Nl,qv,Pv,Av,Qa,Lv,Ha,Ov,Iv,Dv,ur,Nv,ao,Va,Sv,St,Wv,Sl,Uv,Qv,Xc,Hv,Vv,Kv,gr,Jv,_r,Bv,kr,bh,Wt,Fr,Yc,Ka,Gv,Zc,Xv,Th,Pe,Ja,Yv,ep,Zv,eb,Ba,ob,Wl,tb,nb,rb,Ga,sb,Xa,ab,ib,lb,op,db,cb,Wo,tp,Ya,pb,mb,np,Za,hb,fb,rp,ei,ub,gb,sp,oi,_b,kb,xo,ti,Fb,Ut,yb,ap,vb,bb,ip,Tb,wb,$b,yr,xb,vr,wh,Qt,br,lp,ni,Rb,dp,Mb,$h,Ae,ri,Eb,si,zb,cp,jb,Cb,qb,ai,Pb,Ul,Ab,Lb,Ob,ii,Ib,li,Db,Nb,Sb,pp,Wb,Ub,Uo,mp,di,Qb,Hb,hp,ci,Vb,Kb,fp,pi,Jb,Bb,up,mi,Gb,Xb,Ro,hi,Yb,Ht,Zb,gp,eT,oT,_p,tT,nT,rT,Tr,sT,wr,xh,Vt,$r,kp,fi,aT,Fp,iT,Rh,Le,ui,lT,yp,dT,cT,gi,pT,Ql,mT,hT,fT,_i,uT,ki,gT,_T,kT,vp,FT,yT,Qo,bp,Fi,vT,bT,Tp,yi,TT,wT,wp,vi,$T,xT,$p,bi,RT,MT,Mo,Ti,ET,Kt,zT,xp,jT,CT,Rp,qT,PT,AT,xr,LT,Rr,Mh,Jt,Mr,Mp,wi,OT,Ep,IT,Eh,Oe,$i,DT,zp,NT,ST,xi,WT,Hl,UT,QT,HT,Ri,VT,Mi,KT,JT,BT,jp,GT,XT,Ho,Cp,Ei,YT,ZT,qp,zi,ew,ow,Pp,ji,tw,nw,Ap,Ci,rw,sw,Eo,qi,aw,Bt,iw,Lp,lw,dw,Op,cw,pw,mw,Er,hw,zr,zh,Gt,jr,Ip,Pi,fw,Dp,uw,jh,Ie,Ai,gw,Np,_w,kw,Li,Fw,Vl,yw,vw,bw,Oi,Tw,Ii,ww,$w,xw,Sp,Rw,Mw,Vo,Wp,Di,Ew,zw,Up,Ni,jw,Cw,Qp,Si,qw,Pw,Hp,Wi,Aw,Lw,zo,Ui,Ow,Xt,Iw,Vp,Dw,Nw,Kp,Sw,Ww,Uw,Cr,Qw,qr,Ch,Yt,Pr,Jp,Qi,Hw,Bp,Vw,qh,De,Hi,Kw,Zt,Jw,Gp,Bw,Gw,Xp,Xw,Yw,Zw,Vi,e$,Kl,o$,t$,n$,Ki,r$,Ji,s$,a$,i$,Yp,l$,d$,Ko,Zp,Bi,c$,p$,em,Gi,m$,h$,om,Xi,f$,u$,tm,Yi,g$,_$,jo,Zi,k$,en,F$,nm,y$,v$,rm,b$,T$,w$,Ar,$$,Lr,Ph;return l=new ze({}),ee=new ze({}),we=new ze({}),I=new D({props:{name:"class transformers.RoFormerConfig",anchor:"transformers.RoFormerConfig",parameters:[{name:"vocab_size",val:" = 50000"},{name:"embedding_size",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1536"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"rotary_value",val:" = False"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50000) &#x2014;
Vocabulary size of the RoFormer model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerModel">RoFormerModel</a> or <a href="/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerModel">TFRoFormerModel</a>.`,name:"vocab_size"},{anchor:"transformers.RoFormerConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerModel">RoFormerModel</a> or <a href="/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerModel">TFRoFormerModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RoFormerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RoFormerConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RoFormerConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.RoFormerConfig.rotary_value",description:`<strong>rotary_value</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not apply rotary position embeddings on value layer.`,name:"rotary_value"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/configuration_roformer.py#L46"}}),an=new ie({props:{anchor:"transformers.RoFormerConfig.example",$$slots:{default:[Ux]},$$scope:{ctx:R}}}),ss=new ze({}),as=new D({props:{name:"class transformers.RoFormerTokenizer",anchor:"transformers.RoFormerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L69"}}),dn=new ie({props:{anchor:"transformers.RoFormerTokenizer.example",$$slots:{default:[Qx]},$$scope:{ctx:R}}}),cs=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L235",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ms=new D({props:{name:"get_special_tokens_mask",anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L260",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fs=new D({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L288",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),pn=new ie({props:{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Hx]},$$scope:{ctx:R}}}),us=new D({props:{name:"save_vocabulary",anchor:"transformers.RoFormerTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L317"}}),gs=new ze({}),_s=new D({props:{name:"class transformers.RoFormerTokenizerFast",anchor:"transformers.RoFormerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer_fast.py#L71"}}),fn=new ie({props:{anchor:"transformers.RoFormerTokenizerFast.example",$$slots:{default:[Vx]},$$scope:{ctx:R}}}),ys=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer_fast.py#L147",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),bs=new ze({}),Ts=new D({props:{name:"class transformers.RoFormerModel",anchor:"transformers.RoFormerModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L789"}}),Ms=new D({props:{name:"forward",anchor:"transformers.RoFormerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L829",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gn=new Re({props:{$$slots:{default:[Kx]},$$scope:{ctx:R}}}),_n=new ie({props:{anchor:"transformers.RoFormerModel.forward.example",$$slots:{default:[Jx]},$$scope:{ctx:R}}}),Es=new ze({}),zs=new D({props:{name:"class transformers.RoFormerForCausalLM",anchor:"transformers.RoFormerForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1057"}}),Cs=new D({props:{name:"forward",anchor:"transformers.RoFormerForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1079",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fn=new Re({props:{$$slots:{default:[Bx]},$$scope:{ctx:R}}}),yn=new ie({props:{anchor:"transformers.RoFormerForCausalLM.forward.example",$$slots:{default:[Gx]},$$scope:{ctx:R}}}),qs=new ze({}),Ps=new D({props:{name:"class transformers.RoFormerForMaskedLM",anchor:"transformers.RoFormerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L956"}}),Ls=new D({props:{name:"forward",anchor:"transformers.RoFormerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L978",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bn=new Re({props:{$$slots:{default:[Xx]},$$scope:{ctx:R}}}),Tn=new ie({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example",$$slots:{default:[Yx]},$$scope:{ctx:R}}}),wn=new ie({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example-2",$$slots:{default:[Zx]},$$scope:{ctx:R}}}),Os=new ze({}),Is=new D({props:{name:"class transformers.RoFormerForSequenceClassification",anchor:"transformers.RoFormerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1230"}}),Ss=new D({props:{name:"forward",anchor:"transformers.RoFormerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1240",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xn=new Re({props:{$$slots:{default:[eR]},$$scope:{ctx:R}}}),Rn=new ie({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example",$$slots:{default:[oR]},$$scope:{ctx:R}}}),Mn=new ie({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-2",$$slots:{default:[tR]},$$scope:{ctx:R}}}),En=new ie({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-3",$$slots:{default:[nR]},$$scope:{ctx:R}}}),zn=new ie({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-4",$$slots:{default:[rR]},$$scope:{ctx:R}}}),Ws=new ze({}),Us=new D({props:{name:"class transformers.RoFormerForMultipleChoice",anchor:"transformers.RoFormerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1322"}}),Vs=new D({props:{name:"forward",anchor:"transformers.RoFormerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1333",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cn=new Re({props:{$$slots:{default:[sR]},$$scope:{ctx:R}}}),qn=new ie({props:{anchor:"transformers.RoFormerForMultipleChoice.forward.example",$$slots:{default:[aR]},$$scope:{ctx:R}}}),Ks=new ze({}),Js=new D({props:{name:"class transformers.RoFormerForTokenClassification",anchor:"transformers.RoFormerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1414"}}),Xs=new D({props:{name:"forward",anchor:"transformers.RoFormerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1426",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new Re({props:{$$slots:{default:[iR]},$$scope:{ctx:R}}}),Ln=new ie({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example",$$slots:{default:[lR]},$$scope:{ctx:R}}}),On=new ie({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example-2",$$slots:{default:[dR]},$$scope:{ctx:R}}}),Ys=new ze({}),Zs=new D({props:{name:"class transformers.RoFormerForQuestionAnswering",anchor:"transformers.RoFormerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1491"}}),ta=new D({props:{name:"forward",anchor:"transformers.RoFormerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1504",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dn=new Re({props:{$$slots:{default:[cR]},$$scope:{ctx:R}}}),Nn=new ie({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example",$$slots:{default:[pR]},$$scope:{ctx:R}}}),Sn=new ie({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example-2",$$slots:{default:[mR]},$$scope:{ctx:R}}}),na=new ze({}),ra=new D({props:{name:"class transformers.TFRoFormerModel",anchor:"transformers.TFRoFormerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L794"}}),Un=new Re({props:{$$slots:{default:[hR]},$$scope:{ctx:R}}}),la=new D({props:{name:"call",anchor:"transformers.TFRoFormerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L800",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new Re({props:{$$slots:{default:[fR]},$$scope:{ctx:R}}}),Hn=new ie({props:{anchor:"transformers.TFRoFormerModel.call.example",$$slots:{default:[uR]},$$scope:{ctx:R}}}),da=new ze({}),ca=new D({props:{name:"class transformers.TFRoFormerForMaskedLM",anchor:"transformers.TFRoFormerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L842"}}),Kn=new Re({props:{$$slots:{default:[gR]},$$scope:{ctx:R}}}),ua=new D({props:{name:"call",anchor:"transformers.TFRoFormerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L858",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Jn=new Re({props:{$$slots:{default:[_R]},$$scope:{ctx:R}}}),Bn=new ie({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example",$$slots:{default:[kR]},$$scope:{ctx:R}}}),Gn=new ie({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example-2",$$slots:{default:[FR]},$$scope:{ctx:R}}}),ga=new ze({}),_a=new D({props:{name:"class transformers.TFRoFormerForCausalLM",anchor:"transformers.TFRoFormerForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L921"}}),Yn=new Re({props:{$$slots:{default:[yR]},$$scope:{ctx:R}}}),ba=new D({props:{name:"call",anchor:"transformers.TFRoFormerForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L934",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zn=new ie({props:{anchor:"transformers.TFRoFormerForCausalLM.call.example",$$slots:{default:[vR]},$$scope:{ctx:R}}}),Ta=new ze({}),wa=new D({props:{name:"class transformers.TFRoFormerForSequenceClassification",anchor:"transformers.TFRoFormerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1034"}}),or=new Re({props:{$$slots:{default:[bR]},$$scope:{ctx:R}}}),Ma=new D({props:{name:"call",anchor:"transformers.TFRoFormerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1043",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),tr=new Re({props:{$$slots:{default:[TR]},$$scope:{ctx:R}}}),nr=new ie({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example",$$slots:{default:[wR]},$$scope:{ctx:R}}}),rr=new ie({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example-2",$$slots:{default:[$R]},$$scope:{ctx:R}}}),Ea=new ze({}),za=new D({props:{name:"class transformers.TFRoFormerForMultipleChoice",anchor:"transformers.TFRoFormerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1110"}}),ar=new Re({props:{$$slots:{default:[xR]},$$scope:{ctx:R}}}),Pa=new D({props:{name:"call",anchor:"transformers.TFRoFormerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1131",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ir=new Re({props:{$$slots:{default:[RR]},$$scope:{ctx:R}}}),lr=new ie({props:{anchor:"transformers.TFRoFormerForMultipleChoice.call.example",$$slots:{default:[MR]},$$scope:{ctx:R}}}),Aa=new ze({}),La=new D({props:{name:"class transformers.TFRoFormerForTokenClassification",anchor:"transformers.TFRoFormerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1234"}}),cr=new Re({props:{$$slots:{default:[ER]},$$scope:{ctx:R}}}),Na=new D({props:{name:"call",anchor:"transformers.TFRoFormerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1246",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pr=new Re({props:{$$slots:{default:[zR]},$$scope:{ctx:R}}}),mr=new ie({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example",$$slots:{default:[jR]},$$scope:{ctx:R}}}),hr=new ie({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example-2",$$slots:{default:[CR]},$$scope:{ctx:R}}}),Sa=new ze({}),Wa=new D({props:{name:"class transformers.TFRoFormerForQuestionAnswering",anchor:"transformers.TFRoFormerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1312"}}),ur=new Re({props:{$$slots:{default:[qR]},$$scope:{ctx:R}}}),Va=new D({props:{name:"call",anchor:"transformers.TFRoFormerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1323",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gr=new Re({props:{$$slots:{default:[PR]},$$scope:{ctx:R}}}),_r=new ie({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example",$$slots:{default:[AR]},$$scope:{ctx:R}}}),kr=new ie({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example-2",$$slots:{default:[LR]},$$scope:{ctx:R}}}),Ka=new ze({}),Ja=new D({props:{name:"class transformers.FlaxRoFormerModel",anchor:"transformers.FlaxRoFormerModel",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L749"}}),ti=new D({props:{name:"__call__",anchor:"transformers.FlaxRoFormerModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yr=new Re({props:{$$slots:{default:[OR]},$$scope:{ctx:R}}}),vr=new ie({props:{anchor:"transformers.FlaxRoFormerModel.__call__.example",$$slots:{default:[IR]},$$scope:{ctx:R}}}),ni=new ze({}),ri=new D({props:{name:"class transformers.FlaxRoFormerForMaskedLM",anchor:"transformers.FlaxRoFormerForMaskedLM",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L809"}}),hi=new D({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tr=new Re({props:{$$slots:{default:[DR]},$$scope:{ctx:R}}}),wr=new ie({props:{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.example",$$slots:{default:[NR]},$$scope:{ctx:R}}}),fi=new ze({}),ui=new D({props:{name:"class transformers.FlaxRoFormerForSequenceClassification",anchor:"transformers.FlaxRoFormerForSequenceClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L874"}}),Ti=new D({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xr=new Re({props:{$$slots:{default:[SR]},$$scope:{ctx:R}}}),Rr=new ie({props:{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.example",$$slots:{default:[WR]},$$scope:{ctx:R}}}),wi=new ze({}),$i=new D({props:{name:"class transformers.FlaxRoFormerForMultipleChoice",anchor:"transformers.FlaxRoFormerForMultipleChoice",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L950"}}),qi=new D({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Er=new Re({props:{$$slots:{default:[UR]},$$scope:{ctx:R}}}),zr=new ie({props:{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.example",$$slots:{default:[QR]},$$scope:{ctx:R}}}),Pi=new ze({}),Ai=new D({props:{name:"class transformers.FlaxRoFormerForTokenClassification",anchor:"transformers.FlaxRoFormerForTokenClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L1019"}}),Ui=new D({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cr=new Re({props:{$$slots:{default:[HR]},$$scope:{ctx:R}}}),qr=new ie({props:{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.example",$$slots:{default:[VR]},$$scope:{ctx:R}}}),Qi=new ze({}),Hi=new D({props:{name:"class transformers.FlaxRoFormerForQuestionAnswering",anchor:"transformers.FlaxRoFormerForQuestionAnswering",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L1088"}}),Zi=new D({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ar=new Re({props:{$$slots:{default:[KR]},$$scope:{ctx:R}}}),Lr=new ie({props:{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.example",$$slots:{default:[JR]},$$scope:{ctx:R}}}),{c(){d=n("meta"),g=m(),c=n("h1"),p=n("a"),_=n("span"),v(l.$$.fragment),f=m(),M=n("span"),ue=a("RoFormer"),B=m(),z=n("h2"),Z=n("a"),N=n("span"),v(ee.$$.fragment),ge=m(),S=n("span"),_e=a("Overview"),pe=m(),J=n("p"),L=a("The RoFormer model was proposed in "),oe=n("a"),G=a("RoFormer: Enhanced Transformer with Rotary Position Embedding"),j=a(" by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu."),q=m(),ne=n("p"),Q=a("The abstract from the paper is the following:"),me=m(),re=n("p"),W=n("em"),ke=a(`Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.`),he=m(),C=n("p"),Fe=a("Tips:"),U=m(),se=n("ul"),ce=n("li"),H=a(`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`),fe=m(),X=n("p"),O=a("This model was contributed by "),te=n("a"),V=a("junnyu"),ye=a(". The original code can be found "),y=n("a"),E=a("here"),Y=a("."),Me=m(),be=n("h2"),P=n("a"),xe=n("span"),v(we.$$.fragment),je=m(),A=n("span"),K=a("RoFormerConfig"),Ee=m(),ae=n("div"),v(I.$$.fragment),Ce=m(),Te=n("p"),ve=a("This is the configuration class to store the configuration of a "),$e=n("a"),Nf=a("RoFormerModel"),Sf=a(`. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
`),rs=n("a"),Wf=a("junnyu/roformer_chinese_base"),Uf=a(" architecture."),Qf=m(),it=n("p"),Hf=a("Configuration objects inherit from "),pl=n("a"),Vf=a("PretrainedConfig"),Kf=a(` and can be used to control the model outputs. Read the
documentation from `),ml=n("a"),Jf=a("PretrainedConfig"),Bf=a(" for more information."),Gf=m(),v(an.$$.fragment),Qm=m(),lt=n("h2"),ln=n("a"),wd=n("span"),v(ss.$$.fragment),Xf=m(),$d=n("span"),Yf=a("RoFormerTokenizer"),Hm=m(),qe=n("div"),v(as.$$.fragment),Zf=m(),is=n("p"),eu=a("Construct a RoFormer tokenizer. Based on "),ls=n("a"),ou=a("Rust Jieba"),tu=a("."),nu=m(),ds=n("p"),ru=a("This tokenizer inherits from "),hl=n("a"),su=a("PreTrainedTokenizer"),au=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),iu=m(),v(dn.$$.fragment),lu=m(),Go=n("div"),v(cs.$$.fragment),du=m(),xd=n("p"),cu=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),pu=m(),ps=n("ul"),fl=n("li"),mu=a("single sequence: "),Rd=n("code"),hu=a("[CLS] X [SEP]"),fu=m(),ul=n("li"),uu=a("pair of sequences: "),Md=n("code"),gu=a("[CLS] A [SEP] B [SEP]"),_u=m(),cn=n("div"),v(ms.$$.fragment),ku=m(),hs=n("p"),Fu=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ed=n("code"),yu=a("prepare_for_model"),vu=a(" method."),bu=m(),yo=n("div"),v(fs.$$.fragment),Tu=m(),zd=n("p"),wu=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer"),$u=m(),v(pn.$$.fragment),xu=m(),dt=n("p"),Ru=a("If "),jd=n("code"),Mu=a("token_ids_1"),Eu=a(" is "),Cd=n("code"),zu=a("None"),ju=a(", this method only returns the first portion of the mask (0s)."),Cu=m(),gl=n("div"),v(us.$$.fragment),Vm=m(),ct=n("h2"),mn=n("a"),qd=n("span"),v(gs.$$.fragment),qu=m(),Pd=n("span"),Pu=a("RoFormerTokenizerFast"),Km=m(),We=n("div"),v(_s.$$.fragment),Au=m(),ks=n("p"),Lu=a("Construct a \u201Cfast\u201D RoFormer tokenizer (backed by HuggingFace\u2019s "),Ad=n("em"),Ou=a("tokenizers"),Iu=a(" library)."),Du=m(),hn=n("p"),_l=n("a"),Nu=a("RoFormerTokenizerFast"),Su=a(" is almost identical to "),kl=n("a"),Wu=a("BertTokenizerFast"),Uu=a(` and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`),Qu=m(),Fs=n("p"),Hu=a("This tokenizer inherits from "),Fl=n("a"),Vu=a("PreTrainedTokenizerFast"),Ku=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ju=m(),v(fn.$$.fragment),Bu=m(),Xo=n("div"),v(ys.$$.fragment),Gu=m(),Ld=n("p"),Xu=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Yu=m(),vs=n("ul"),yl=n("li"),Zu=a("single sequence: "),Od=n("code"),eg=a("[CLS] X [SEP]"),og=m(),vl=n("li"),tg=a("pair of sequences: "),Id=n("code"),ng=a("[CLS] A [SEP] B [SEP]"),Jm=m(),pt=n("h2"),un=n("a"),Dd=n("span"),v(bs.$$.fragment),rg=m(),Nd=n("span"),sg=a("RoFormerModel"),Bm=m(),Xe=n("div"),v(Ts.$$.fragment),ag=m(),ws=n("p"),ig=a(`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$s=n("a"),lg=a("torch.nn.Module"),dg=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cg=m(),xs=n("p"),pg=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Rs=n("a"),mg=a(`Attention is
all you need`),hg=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),fg=m(),Ue=n("p"),ug=a("To behave as an decoder the model needs to be initialized with the "),Sd=n("code"),gg=a("is_decoder"),_g=a(` argument of the configuration set
to `),Wd=n("code"),kg=a("True"),Fg=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),Ud=n("code"),yg=a("is_decoder"),vg=a(` argument and
`),Qd=n("code"),bg=a("add_cross_attention"),Tg=a(" set to "),Hd=n("code"),wg=a("True"),$g=a("; an "),Vd=n("code"),xg=a("encoder_hidden_states"),Rg=a(" is then expected as an input to the forward pass."),Mg=m(),vo=n("div"),v(Ms.$$.fragment),Eg=m(),mt=n("p"),zg=a("The "),bl=n("a"),jg=a("RoFormerModel"),Cg=a(" forward method, overrides the "),Kd=n("code"),qg=a("__call__"),Pg=a(" special method."),Ag=m(),v(gn.$$.fragment),Lg=m(),v(_n.$$.fragment),Gm=m(),ht=n("h2"),kn=n("a"),Jd=n("span"),v(Es.$$.fragment),Og=m(),Bd=n("span"),Ig=a("RoFormerForCausalLM"),Xm=m(),No=n("div"),v(zs.$$.fragment),Dg=m(),ft=n("p"),Ng=a("RoFormer Model with a "),Gd=n("code"),Sg=a("language modeling"),Wg=a(` head on top for CLM fine-tuning.
This model is a PyTorch `),js=n("a"),Ug=a("torch.nn.Module"),Qg=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hg=m(),bo=n("div"),v(Cs.$$.fragment),Vg=m(),ut=n("p"),Kg=a("The "),Tl=n("a"),Jg=a("RoFormerForCausalLM"),Bg=a(" forward method, overrides the "),Xd=n("code"),Gg=a("__call__"),Xg=a(" special method."),Yg=m(),v(Fn.$$.fragment),Zg=m(),v(yn.$$.fragment),Ym=m(),gt=n("h2"),vn=n("a"),Yd=n("span"),v(qs.$$.fragment),e_=m(),Zd=n("span"),o_=a("RoFormerForMaskedLM"),Zm=m(),So=n("div"),v(Ps.$$.fragment),t_=m(),_t=n("p"),n_=a("RoFormer Model with a "),ec=n("code"),r_=a("language modeling"),s_=a(` head on top.
This model is a PyTorch `),As=n("a"),a_=a("torch.nn.Module"),i_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),l_=m(),eo=n("div"),v(Ls.$$.fragment),d_=m(),kt=n("p"),c_=a("The "),wl=n("a"),p_=a("RoFormerForMaskedLM"),m_=a(" forward method, overrides the "),oc=n("code"),h_=a("__call__"),f_=a(" special method."),u_=m(),v(bn.$$.fragment),g_=m(),v(Tn.$$.fragment),__=m(),v(wn.$$.fragment),eh=m(),Ft=n("h2"),$n=n("a"),tc=n("span"),v(Os.$$.fragment),k_=m(),nc=n("span"),F_=a("RoFormerForSequenceClassification"),oh=m(),go=n("div"),v(Is.$$.fragment),y_=m(),rc=n("p"),v_=a(`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),b_=m(),Ds=n("p"),T_=a("This model is a PyTorch "),Ns=n("a"),w_=a("torch.nn.Module"),$_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),x_=m(),Se=n("div"),v(Ss.$$.fragment),R_=m(),yt=n("p"),M_=a("The "),$l=n("a"),E_=a("RoFormerForSequenceClassification"),z_=a(" forward method, overrides the "),sc=n("code"),j_=a("__call__"),C_=a(" special method."),q_=m(),v(xn.$$.fragment),P_=m(),v(Rn.$$.fragment),A_=m(),v(Mn.$$.fragment),L_=m(),v(En.$$.fragment),O_=m(),v(zn.$$.fragment),th=m(),vt=n("h2"),jn=n("a"),ac=n("span"),v(Ws.$$.fragment),I_=m(),ic=n("span"),D_=a("RoFormerForMultipleChoice"),nh=m(),_o=n("div"),v(Us.$$.fragment),N_=m(),lc=n("p"),S_=a(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),W_=m(),Qs=n("p"),U_=a("This model is a PyTorch "),Hs=n("a"),Q_=a("torch.nn.Module"),H_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),V_=m(),To=n("div"),v(Vs.$$.fragment),K_=m(),bt=n("p"),J_=a("The "),xl=n("a"),B_=a("RoFormerForMultipleChoice"),G_=a(" forward method, overrides the "),dc=n("code"),X_=a("__call__"),Y_=a(" special method."),Z_=m(),v(Cn.$$.fragment),ek=m(),v(qn.$$.fragment),rh=m(),Tt=n("h2"),Pn=n("a"),cc=n("span"),v(Ks.$$.fragment),ok=m(),pc=n("span"),tk=a("RoFormerForTokenClassification"),sh=m(),ko=n("div"),v(Js.$$.fragment),nk=m(),mc=n("p"),rk=a(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),sk=m(),Bs=n("p"),ak=a("This model is a PyTorch "),Gs=n("a"),ik=a("torch.nn.Module"),lk=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dk=m(),oo=n("div"),v(Xs.$$.fragment),ck=m(),wt=n("p"),pk=a("The "),Rl=n("a"),mk=a("RoFormerForTokenClassification"),hk=a(" forward method, overrides the "),hc=n("code"),fk=a("__call__"),uk=a(" special method."),gk=m(),v(An.$$.fragment),_k=m(),v(Ln.$$.fragment),kk=m(),v(On.$$.fragment),ah=m(),$t=n("h2"),In=n("a"),fc=n("span"),v(Ys.$$.fragment),Fk=m(),uc=n("span"),yk=a("RoFormerForQuestionAnswering"),ih=m(),Fo=n("div"),v(Zs.$$.fragment),vk=m(),xt=n("p"),bk=a(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),gc=n("code"),Tk=a("span start logits"),wk=a(" and "),_c=n("code"),$k=a("span end logits"),xk=a(")."),Rk=m(),ea=n("p"),Mk=a("This model is a PyTorch "),oa=n("a"),Ek=a("torch.nn.Module"),zk=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jk=m(),to=n("div"),v(ta.$$.fragment),Ck=m(),Rt=n("p"),qk=a("The "),Ml=n("a"),Pk=a("RoFormerForQuestionAnswering"),Ak=a(" forward method, overrides the "),kc=n("code"),Lk=a("__call__"),Ok=a(" special method."),Ik=m(),v(Dn.$$.fragment),Dk=m(),v(Nn.$$.fragment),Nk=m(),v(Sn.$$.fragment),lh=m(),Mt=n("h2"),Wn=n("a"),Fc=n("span"),v(na.$$.fragment),Sk=m(),yc=n("span"),Wk=a("TFRoFormerModel"),dh=m(),Qe=n("div"),v(ra.$$.fragment),Uk=m(),vc=n("p"),Qk=a("The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top."),Hk=m(),sa=n("p"),Vk=a("This model inherits from "),El=n("a"),Kk=a("TFPreTrainedModel"),Jk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bk=m(),aa=n("p"),Gk=a("This model is also a "),ia=n("a"),Xk=a("tf.keras.Model"),Yk=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zk=m(),v(Un.$$.fragment),eF=m(),wo=n("div"),v(la.$$.fragment),oF=m(),Et=n("p"),tF=a("The "),zl=n("a"),nF=a("TFRoFormerModel"),rF=a(" forward method, overrides the "),bc=n("code"),sF=a("__call__"),aF=a(" special method."),iF=m(),v(Qn.$$.fragment),lF=m(),v(Hn.$$.fragment),ch=m(),zt=n("h2"),Vn=n("a"),Tc=n("span"),v(da.$$.fragment),dF=m(),wc=n("span"),cF=a("TFRoFormerForMaskedLM"),ph=m(),He=n("div"),v(ca.$$.fragment),pF=m(),pa=n("p"),mF=a("RoFormer Model with a "),$c=n("code"),hF=a("language modeling"),fF=a(" head on top."),uF=m(),ma=n("p"),gF=a("This model inherits from "),jl=n("a"),_F=a("TFPreTrainedModel"),kF=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),FF=m(),ha=n("p"),yF=a("This model is also a "),fa=n("a"),vF=a("tf.keras.Model"),bF=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),TF=m(),v(Kn.$$.fragment),wF=m(),no=n("div"),v(ua.$$.fragment),$F=m(),jt=n("p"),xF=a("The "),Cl=n("a"),RF=a("TFRoFormerForMaskedLM"),MF=a(" forward method, overrides the "),xc=n("code"),EF=a("__call__"),zF=a(" special method."),jF=m(),v(Jn.$$.fragment),CF=m(),v(Bn.$$.fragment),qF=m(),v(Gn.$$.fragment),mh=m(),Ct=n("h2"),Xn=n("a"),Rc=n("span"),v(ga.$$.fragment),PF=m(),Mc=n("span"),AF=a("TFRoFormerForCausalLM"),hh=m(),Ve=n("div"),v(_a.$$.fragment),LF=m(),ka=n("p"),OF=a("RoFormer Model with a "),Ec=n("code"),IF=a("language modeling"),DF=a(" head on top for CLM fine-tuning."),NF=m(),Fa=n("p"),SF=a("This model inherits from "),ql=n("a"),WF=a("TFPreTrainedModel"),UF=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),QF=m(),ya=n("p"),HF=a("This model is also a "),va=n("a"),VF=a("tf.keras.Model"),KF=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),JF=m(),v(Yn.$$.fragment),BF=m(),Yo=n("div"),v(ba.$$.fragment),GF=m(),Ye=n("p"),XF=a("labels ("),zc=n("code"),YF=a("tf.Tensor"),ZF=a(" or "),jc=n("code"),ey=a("np.ndarray"),oy=a(" of shape "),Cc=n("code"),ty=a("(batch_size, sequence_length)"),ny=a(", "),qc=n("em"),ry=a("optional"),sy=a(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Pc=n("code"),ay=a("[0, ..., config.vocab_size - 1]"),iy=a("."),ly=m(),v(Zn.$$.fragment),fh=m(),qt=n("h2"),er=n("a"),Ac=n("span"),v(Ta.$$.fragment),dy=m(),Lc=n("span"),cy=a("TFRoFormerForSequenceClassification"),uh=m(),Ke=n("div"),v(wa.$$.fragment),py=m(),Oc=n("p"),my=a("RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),hy=m(),$a=n("p"),fy=a("This model inherits from "),Pl=n("a"),uy=a("TFPreTrainedModel"),gy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_y=m(),xa=n("p"),ky=a("This model is also a "),Ra=n("a"),Fy=a("tf.keras.Model"),yy=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vy=m(),v(or.$$.fragment),by=m(),ro=n("div"),v(Ma.$$.fragment),Ty=m(),Pt=n("p"),wy=a("The "),Al=n("a"),$y=a("TFRoFormerForSequenceClassification"),xy=a(" forward method, overrides the "),Ic=n("code"),Ry=a("__call__"),My=a(" special method."),Ey=m(),v(tr.$$.fragment),zy=m(),v(nr.$$.fragment),jy=m(),v(rr.$$.fragment),gh=m(),At=n("h2"),sr=n("a"),Dc=n("span"),v(Ea.$$.fragment),Cy=m(),Nc=n("span"),qy=a("TFRoFormerForMultipleChoice"),_h=m(),Je=n("div"),v(za.$$.fragment),Py=m(),Sc=n("p"),Ay=a(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Ly=m(),ja=n("p"),Oy=a("This model inherits from "),Ll=n("a"),Iy=a("TFPreTrainedModel"),Dy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ny=m(),Ca=n("p"),Sy=a("This model is also a "),qa=n("a"),Wy=a("tf.keras.Model"),Uy=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qy=m(),v(ar.$$.fragment),Hy=m(),$o=n("div"),v(Pa.$$.fragment),Vy=m(),Lt=n("p"),Ky=a("The "),Ol=n("a"),Jy=a("TFRoFormerForMultipleChoice"),By=a(" forward method, overrides the "),Wc=n("code"),Gy=a("__call__"),Xy=a(" special method."),Yy=m(),v(ir.$$.fragment),Zy=m(),v(lr.$$.fragment),kh=m(),Ot=n("h2"),dr=n("a"),Uc=n("span"),v(Aa.$$.fragment),ev=m(),Qc=n("span"),ov=a("TFRoFormerForTokenClassification"),Fh=m(),Be=n("div"),v(La.$$.fragment),tv=m(),Hc=n("p"),nv=a(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),rv=m(),Oa=n("p"),sv=a("This model inherits from "),Il=n("a"),av=a("TFPreTrainedModel"),iv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lv=m(),Ia=n("p"),dv=a("This model is also a "),Da=n("a"),cv=a("tf.keras.Model"),pv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mv=m(),v(cr.$$.fragment),hv=m(),so=n("div"),v(Na.$$.fragment),fv=m(),It=n("p"),uv=a("The "),Dl=n("a"),gv=a("TFRoFormerForTokenClassification"),_v=a(" forward method, overrides the "),Vc=n("code"),kv=a("__call__"),Fv=a(" special method."),yv=m(),v(pr.$$.fragment),vv=m(),v(mr.$$.fragment),bv=m(),v(hr.$$.fragment),yh=m(),Dt=n("h2"),fr=n("a"),Kc=n("span"),v(Sa.$$.fragment),Tv=m(),Jc=n("span"),wv=a("TFRoFormerForQuestionAnswering"),vh=m(),Ge=n("div"),v(Wa.$$.fragment),$v=m(),Nt=n("p"),xv=a(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Bc=n("code"),Rv=a("span start logits"),Mv=a(" and "),Gc=n("code"),Ev=a("span end logits"),zv=a(")."),jv=m(),Ua=n("p"),Cv=a("This model inherits from "),Nl=n("a"),qv=a("TFPreTrainedModel"),Pv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Av=m(),Qa=n("p"),Lv=a("This model is also a "),Ha=n("a"),Ov=a("tf.keras.Model"),Iv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dv=m(),v(ur.$$.fragment),Nv=m(),ao=n("div"),v(Va.$$.fragment),Sv=m(),St=n("p"),Wv=a("The "),Sl=n("a"),Uv=a("TFRoFormerForQuestionAnswering"),Qv=a(" forward method, overrides the "),Xc=n("code"),Hv=a("__call__"),Vv=a(" special method."),Kv=m(),v(gr.$$.fragment),Jv=m(),v(_r.$$.fragment),Bv=m(),v(kr.$$.fragment),bh=m(),Wt=n("h2"),Fr=n("a"),Yc=n("span"),v(Ka.$$.fragment),Gv=m(),Zc=n("span"),Xv=a("FlaxRoFormerModel"),Th=m(),Pe=n("div"),v(Ja.$$.fragment),Yv=m(),ep=n("p"),Zv=a("The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top."),eb=m(),Ba=n("p"),ob=a("This model inherits from "),Wl=n("a"),tb=a("FlaxPreTrainedModel"),nb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rb=m(),Ga=n("p"),sb=a("This model is also a Flax Linen "),Xa=n("a"),ab=a("flax.linen.Module"),ib=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lb=m(),op=n("p"),db=a("Finally, this model supports inherent JAX features such as:"),cb=m(),Wo=n("ul"),tp=n("li"),Ya=n("a"),pb=a("Just-In-Time (JIT) compilation"),mb=m(),np=n("li"),Za=n("a"),hb=a("Automatic Differentiation"),fb=m(),rp=n("li"),ei=n("a"),ub=a("Vectorization"),gb=m(),sp=n("li"),oi=n("a"),_b=a("Parallelization"),kb=m(),xo=n("div"),v(ti.$$.fragment),Fb=m(),Ut=n("p"),yb=a("The "),ap=n("code"),vb=a("FlaxRoFormerPreTrainedModel"),bb=a(" forward method, overrides the "),ip=n("code"),Tb=a("__call__"),wb=a(" special method."),$b=m(),v(yr.$$.fragment),xb=m(),v(vr.$$.fragment),wh=m(),Qt=n("h2"),br=n("a"),lp=n("span"),v(ni.$$.fragment),Rb=m(),dp=n("span"),Mb=a("FlaxRoFormerForMaskedLM"),$h=m(),Ae=n("div"),v(ri.$$.fragment),Eb=m(),si=n("p"),zb=a("RoFormer Model with a "),cp=n("code"),jb=a("language modeling"),Cb=a(" head on top."),qb=m(),ai=n("p"),Pb=a("This model inherits from "),Ul=n("a"),Ab=a("FlaxPreTrainedModel"),Lb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ob=m(),ii=n("p"),Ib=a("This model is also a Flax Linen "),li=n("a"),Db=a("flax.linen.Module"),Nb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Sb=m(),pp=n("p"),Wb=a("Finally, this model supports inherent JAX features such as:"),Ub=m(),Uo=n("ul"),mp=n("li"),di=n("a"),Qb=a("Just-In-Time (JIT) compilation"),Hb=m(),hp=n("li"),ci=n("a"),Vb=a("Automatic Differentiation"),Kb=m(),fp=n("li"),pi=n("a"),Jb=a("Vectorization"),Bb=m(),up=n("li"),mi=n("a"),Gb=a("Parallelization"),Xb=m(),Ro=n("div"),v(hi.$$.fragment),Yb=m(),Ht=n("p"),Zb=a("The "),gp=n("code"),eT=a("FlaxRoFormerPreTrainedModel"),oT=a(" forward method, overrides the "),_p=n("code"),tT=a("__call__"),nT=a(" special method."),rT=m(),v(Tr.$$.fragment),sT=m(),v(wr.$$.fragment),xh=m(),Vt=n("h2"),$r=n("a"),kp=n("span"),v(fi.$$.fragment),aT=m(),Fp=n("span"),iT=a("FlaxRoFormerForSequenceClassification"),Rh=m(),Le=n("div"),v(ui.$$.fragment),lT=m(),yp=n("p"),dT=a(`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cT=m(),gi=n("p"),pT=a("This model inherits from "),Ql=n("a"),mT=a("FlaxPreTrainedModel"),hT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fT=m(),_i=n("p"),uT=a("This model is also a Flax Linen "),ki=n("a"),gT=a("flax.linen.Module"),_T=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),kT=m(),vp=n("p"),FT=a("Finally, this model supports inherent JAX features such as:"),yT=m(),Qo=n("ul"),bp=n("li"),Fi=n("a"),vT=a("Just-In-Time (JIT) compilation"),bT=m(),Tp=n("li"),yi=n("a"),TT=a("Automatic Differentiation"),wT=m(),wp=n("li"),vi=n("a"),$T=a("Vectorization"),xT=m(),$p=n("li"),bi=n("a"),RT=a("Parallelization"),MT=m(),Mo=n("div"),v(Ti.$$.fragment),ET=m(),Kt=n("p"),zT=a("The "),xp=n("code"),jT=a("FlaxRoFormerPreTrainedModel"),CT=a(" forward method, overrides the "),Rp=n("code"),qT=a("__call__"),PT=a(" special method."),AT=m(),v(xr.$$.fragment),LT=m(),v(Rr.$$.fragment),Mh=m(),Jt=n("h2"),Mr=n("a"),Mp=n("span"),v(wi.$$.fragment),OT=m(),Ep=n("span"),IT=a("FlaxRoFormerForMultipleChoice"),Eh=m(),Oe=n("div"),v($i.$$.fragment),DT=m(),zp=n("p"),NT=a(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ST=m(),xi=n("p"),WT=a("This model inherits from "),Hl=n("a"),UT=a("FlaxPreTrainedModel"),QT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),HT=m(),Ri=n("p"),VT=a("This model is also a Flax Linen "),Mi=n("a"),KT=a("flax.linen.Module"),JT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),BT=m(),jp=n("p"),GT=a("Finally, this model supports inherent JAX features such as:"),XT=m(),Ho=n("ul"),Cp=n("li"),Ei=n("a"),YT=a("Just-In-Time (JIT) compilation"),ZT=m(),qp=n("li"),zi=n("a"),ew=a("Automatic Differentiation"),ow=m(),Pp=n("li"),ji=n("a"),tw=a("Vectorization"),nw=m(),Ap=n("li"),Ci=n("a"),rw=a("Parallelization"),sw=m(),Eo=n("div"),v(qi.$$.fragment),aw=m(),Bt=n("p"),iw=a("The "),Lp=n("code"),lw=a("FlaxRoFormerPreTrainedModel"),dw=a(" forward method, overrides the "),Op=n("code"),cw=a("__call__"),pw=a(" special method."),mw=m(),v(Er.$$.fragment),hw=m(),v(zr.$$.fragment),zh=m(),Gt=n("h2"),jr=n("a"),Ip=n("span"),v(Pi.$$.fragment),fw=m(),Dp=n("span"),uw=a("FlaxRoFormerForTokenClassification"),jh=m(),Ie=n("div"),v(Ai.$$.fragment),gw=m(),Np=n("p"),_w=a(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),kw=m(),Li=n("p"),Fw=a("This model inherits from "),Vl=n("a"),yw=a("FlaxPreTrainedModel"),vw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bw=m(),Oi=n("p"),Tw=a("This model is also a Flax Linen "),Ii=n("a"),ww=a("flax.linen.Module"),$w=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xw=m(),Sp=n("p"),Rw=a("Finally, this model supports inherent JAX features such as:"),Mw=m(),Vo=n("ul"),Wp=n("li"),Di=n("a"),Ew=a("Just-In-Time (JIT) compilation"),zw=m(),Up=n("li"),Ni=n("a"),jw=a("Automatic Differentiation"),Cw=m(),Qp=n("li"),Si=n("a"),qw=a("Vectorization"),Pw=m(),Hp=n("li"),Wi=n("a"),Aw=a("Parallelization"),Lw=m(),zo=n("div"),v(Ui.$$.fragment),Ow=m(),Xt=n("p"),Iw=a("The "),Vp=n("code"),Dw=a("FlaxRoFormerPreTrainedModel"),Nw=a(" forward method, overrides the "),Kp=n("code"),Sw=a("__call__"),Ww=a(" special method."),Uw=m(),v(Cr.$$.fragment),Qw=m(),v(qr.$$.fragment),Ch=m(),Yt=n("h2"),Pr=n("a"),Jp=n("span"),v(Qi.$$.fragment),Hw=m(),Bp=n("span"),Vw=a("FlaxRoFormerForQuestionAnswering"),qh=m(),De=n("div"),v(Hi.$$.fragment),Kw=m(),Zt=n("p"),Jw=a(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gp=n("code"),Bw=a("span start logits"),Gw=a(" and "),Xp=n("code"),Xw=a("span end logits"),Yw=a(")."),Zw=m(),Vi=n("p"),e$=a("This model inherits from "),Kl=n("a"),o$=a("FlaxPreTrainedModel"),t$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),n$=m(),Ki=n("p"),r$=a("This model is also a Flax Linen "),Ji=n("a"),s$=a("flax.linen.Module"),a$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),i$=m(),Yp=n("p"),l$=a("Finally, this model supports inherent JAX features such as:"),d$=m(),Ko=n("ul"),Zp=n("li"),Bi=n("a"),c$=a("Just-In-Time (JIT) compilation"),p$=m(),em=n("li"),Gi=n("a"),m$=a("Automatic Differentiation"),h$=m(),om=n("li"),Xi=n("a"),f$=a("Vectorization"),u$=m(),tm=n("li"),Yi=n("a"),g$=a("Parallelization"),_$=m(),jo=n("div"),v(Zi.$$.fragment),k$=m(),en=n("p"),F$=a("The "),nm=n("code"),y$=a("FlaxRoFormerPreTrainedModel"),v$=a(" forward method, overrides the "),rm=n("code"),b$=a("__call__"),T$=a(" special method."),w$=m(),v(Ar.$$.fragment),$$=m(),v(Lr.$$.fragment),this.h()},l(t){const F=Sx('[data-svelte="svelte-1phssyn"]',document.head);d=r(F,"META",{name:!0,content:!0}),F.forEach(o),g=h(t),c=r(t,"H1",{class:!0});var el=s(c);p=r(el,"A",{id:!0,class:!0,href:!0});var sm=s(p);_=r(sm,"SPAN",{});var am=s(_);b(l.$$.fragment,am),am.forEach(o),sm.forEach(o),f=h(el),M=r(el,"SPAN",{});var im=s(M);ue=i(im,"RoFormer"),im.forEach(o),el.forEach(o),B=h(t),z=r(t,"H2",{class:!0});var ol=s(z);Z=r(ol,"A",{id:!0,class:!0,href:!0});var lm=s(Z);N=r(lm,"SPAN",{});var dm=s(N);b(ee.$$.fragment,dm),dm.forEach(o),lm.forEach(o),ge=h(ol),S=r(ol,"SPAN",{});var cm=s(S);_e=i(cm,"Overview"),cm.forEach(o),ol.forEach(o),pe=h(t),J=r(t,"P",{});var tl=s(J);L=i(tl,"The RoFormer model was proposed in "),oe=r(tl,"A",{href:!0,rel:!0});var pm=s(oe);G=i(pm,"RoFormer: Enhanced Transformer with Rotary Position Embedding"),pm.forEach(o),j=i(tl," by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu."),tl.forEach(o),q=h(t),ne=r(t,"P",{});var mm=s(ne);Q=i(mm,"The abstract from the paper is the following:"),mm.forEach(o),me=h(t),re=r(t,"P",{});var hm=s(re);W=r(hm,"EM",{});var fm=s(W);ke=i(fm,`Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.`),fm.forEach(o),hm.forEach(o),he=h(t),C=r(t,"P",{});var um=s(C);Fe=i(um,"Tips:"),um.forEach(o),U=h(t),se=r(t,"UL",{});var gm=s(se);ce=r(gm,"LI",{});var _m=s(ce);H=i(_m,`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`),_m.forEach(o),gm.forEach(o),fe=h(t),X=r(t,"P",{});var on=s(X);O=i(on,"This model was contributed by "),te=r(on,"A",{href:!0,rel:!0});var km=s(te);V=i(km,"junnyu"),km.forEach(o),ye=i(on,". The original code can be found "),y=r(on,"A",{href:!0,rel:!0});var Fm=s(y);E=i(Fm,"here"),Fm.forEach(o),Y=i(on,"."),on.forEach(o),Me=h(t),be=r(t,"H2",{class:!0});var nl=s(be);P=r(nl,"A",{id:!0,class:!0,href:!0});var ym=s(P);xe=r(ym,"SPAN",{});var vm=s(xe);b(we.$$.fragment,vm),vm.forEach(o),ym.forEach(o),je=h(nl),A=r(nl,"SPAN",{});var bm=s(A);K=i(bm,"RoFormerConfig"),bm.forEach(o),nl.forEach(o),Ee=h(t),ae=r(t,"DIV",{class:!0});var Jo=s(ae);b(I.$$.fragment,Jo),Ce=h(Jo),Te=r(Jo,"P",{});var tn=s(Te);ve=i(tn,"This is the configuration class to store the configuration of a "),$e=r(tn,"A",{href:!0});var Tm=s($e);Nf=i(Tm,"RoFormerModel"),Tm.forEach(o),Sf=i(tn,`. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
`),rs=r(tn,"A",{href:!0,rel:!0});var wm=s(rs);Wf=i(wm,"junnyu/roformer_chinese_base"),wm.forEach(o),Uf=i(tn," architecture."),tn.forEach(o),Qf=h(Jo),it=r(Jo,"P",{});var nn=s(it);Hf=i(nn,"Configuration objects inherit from "),pl=r(nn,"A",{href:!0});var $m=s(pl);Vf=i($m,"PretrainedConfig"),$m.forEach(o),Kf=i(nn,` and can be used to control the model outputs. Read the
documentation from `),ml=r(nn,"A",{href:!0});var xm=s(ml);Jf=i(xm,"PretrainedConfig"),xm.forEach(o),Bf=i(nn," for more information."),nn.forEach(o),Gf=h(Jo),b(an.$$.fragment,Jo),Jo.forEach(o),Qm=h(t),lt=r(t,"H2",{class:!0});var rl=s(lt);ln=r(rl,"A",{id:!0,class:!0,href:!0});var Rm=s(ln);wd=r(Rm,"SPAN",{});var Mm=s(wd);b(ss.$$.fragment,Mm),Mm.forEach(o),Rm.forEach(o),Xf=h(rl),$d=r(rl,"SPAN",{});var Em=s($d);Yf=i(Em,"RoFormerTokenizer"),Em.forEach(o),rl.forEach(o),Hm=h(t),qe=r(t,"DIV",{class:!0});var Ne=s(qe);b(as.$$.fragment,Ne),Zf=h(Ne),is=r(Ne,"P",{});var sl=s(is);eu=i(sl,"Construct a RoFormer tokenizer. Based on "),ls=r(sl,"A",{href:!0,rel:!0});var zm=s(ls);ou=i(zm,"Rust Jieba"),zm.forEach(o),tu=i(sl,"."),sl.forEach(o),nu=h(Ne),ds=r(Ne,"P",{});var al=s(ds);ru=i(al,"This tokenizer inherits from "),hl=r(al,"A",{href:!0});var jm=s(hl);su=i(jm,"PreTrainedTokenizer"),jm.forEach(o),au=i(al,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),al.forEach(o),iu=h(Ne),b(dn.$$.fragment,Ne),lu=h(Ne),Go=r(Ne,"DIV",{class:!0});var rn=s(Go);b(cs.$$.fragment,rn),du=h(rn),xd=r(rn,"P",{});var Cm=s(xd);cu=i(Cm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Cm.forEach(o),pu=h(rn),ps=r(rn,"UL",{});var il=s(ps);fl=r(il,"LI",{});var Jl=s(fl);mu=i(Jl,"single sequence: "),Rd=r(Jl,"CODE",{});var qm=s(Rd);hu=i(qm,"[CLS] X [SEP]"),qm.forEach(o),Jl.forEach(o),fu=h(il),ul=r(il,"LI",{});var Bl=s(ul);uu=i(Bl,"pair of sequences: "),Md=r(Bl,"CODE",{});var Pm=s(Md);gu=i(Pm,"[CLS] A [SEP] B [SEP]"),Pm.forEach(o),Bl.forEach(o),il.forEach(o),rn.forEach(o),_u=h(Ne),cn=r(Ne,"DIV",{class:!0});var ll=s(cn);b(ms.$$.fragment,ll),ku=h(ll),hs=r(ll,"P",{});var dl=s(hs);Fu=i(dl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ed=r(dl,"CODE",{});var Am=s(Ed);yu=i(Am,"prepare_for_model"),Am.forEach(o),vu=i(dl," method."),dl.forEach(o),ll.forEach(o),bu=h(Ne),yo=r(Ne,"DIV",{class:!0});var Bo=s(yo);b(fs.$$.fragment,Bo),Tu=h(Bo),zd=r(Bo,"P",{});var Lm=s(zd);wu=i(Lm,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer"),Lm.forEach(o),$u=h(Bo),b(pn.$$.fragment,Bo),xu=h(Bo),dt=r(Bo,"P",{});var sn=s(dt);Ru=i(sn,"If "),jd=r(sn,"CODE",{});var Om=s(jd);Mu=i(Om,"token_ids_1"),Om.forEach(o),Eu=i(sn," is "),Cd=r(sn,"CODE",{});var Im=s(Cd);zu=i(Im,"None"),Im.forEach(o),ju=i(sn,", this method only returns the first portion of the mask (0s)."),sn.forEach(o),Bo.forEach(o),Cu=h(Ne),gl=r(Ne,"DIV",{class:!0});var Dm=s(gl);b(us.$$.fragment,Dm),Dm.forEach(o),Ne.forEach(o),Vm=h(t),ct=r(t,"H2",{class:!0});var cl=s(ct);mn=r(cl,"A",{id:!0,class:!0,href:!0});var Nm=s(mn);qd=r(Nm,"SPAN",{});var Sm=s(qd);b(gs.$$.fragment,Sm),Sm.forEach(o),Nm.forEach(o),qu=h(cl),Pd=r(cl,"SPAN",{});var Wm=s(Pd);Pu=i(Wm,"RoFormerTokenizerFast"),Wm.forEach(o),cl.forEach(o),Km=h(t),We=r(t,"DIV",{class:!0});var Ze=s(We);b(_s.$$.fragment,Ze),Au=h(Ze),ks=r(Ze,"P",{});var Ah=s(ks);Lu=i(Ah,"Construct a \u201Cfast\u201D RoFormer tokenizer (backed by HuggingFace\u2019s "),Ad=r(Ah,"EM",{});var M$=s(Ad);Ou=i(M$,"tokenizers"),M$.forEach(o),Iu=i(Ah," library)."),Ah.forEach(o),Du=h(Ze),hn=r(Ze,"P",{});var Um=s(hn);_l=r(Um,"A",{href:!0});var E$=s(_l);Nu=i(E$,"RoFormerTokenizerFast"),E$.forEach(o),Su=i(Um," is almost identical to "),kl=r(Um,"A",{href:!0});var z$=s(kl);Wu=i(z$,"BertTokenizerFast"),z$.forEach(o),Uu=i(Um,` and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`),Um.forEach(o),Qu=h(Ze),Fs=r(Ze,"P",{});var Lh=s(Fs);Hu=i(Lh,"This tokenizer inherits from "),Fl=r(Lh,"A",{href:!0});var j$=s(Fl);Vu=i(j$,"PreTrainedTokenizerFast"),j$.forEach(o),Ku=i(Lh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Lh.forEach(o),Ju=h(Ze),b(fn.$$.fragment,Ze),Bu=h(Ze),Xo=r(Ze,"DIV",{class:!0});var Gl=s(Xo);b(ys.$$.fragment,Gl),Gu=h(Gl),Ld=r(Gl,"P",{});var C$=s(Ld);Xu=i(C$,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),C$.forEach(o),Yu=h(Gl),vs=r(Gl,"UL",{});var Oh=s(vs);yl=r(Oh,"LI",{});var x$=s(yl);Zu=i(x$,"single sequence: "),Od=r(x$,"CODE",{});var q$=s(Od);eg=i(q$,"[CLS] X [SEP]"),q$.forEach(o),x$.forEach(o),og=h(Oh),vl=r(Oh,"LI",{});var R$=s(vl);tg=i(R$,"pair of sequences: "),Id=r(R$,"CODE",{});var P$=s(Id);ng=i(P$,"[CLS] A [SEP] B [SEP]"),P$.forEach(o),R$.forEach(o),Oh.forEach(o),Gl.forEach(o),Ze.forEach(o),Jm=h(t),pt=r(t,"H2",{class:!0});var Ih=s(pt);un=r(Ih,"A",{id:!0,class:!0,href:!0});var A$=s(un);Dd=r(A$,"SPAN",{});var L$=s(Dd);b(bs.$$.fragment,L$),L$.forEach(o),A$.forEach(o),rg=h(Ih),Nd=r(Ih,"SPAN",{});var O$=s(Nd);sg=i(O$,"RoFormerModel"),O$.forEach(o),Ih.forEach(o),Bm=h(t),Xe=r(t,"DIV",{class:!0});var Zo=s(Xe);b(Ts.$$.fragment,Zo),ag=h(Zo),ws=r(Zo,"P",{});var Dh=s(ws);ig=i(Dh,`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$s=r(Dh,"A",{href:!0,rel:!0});var I$=s($s);lg=i(I$,"torch.nn.Module"),I$.forEach(o),dg=i(Dh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dh.forEach(o),cg=h(Zo),xs=r(Zo,"P",{});var Nh=s(xs);pg=i(Nh,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Rs=r(Nh,"A",{href:!0,rel:!0});var D$=s(Rs);mg=i(D$,`Attention is
all you need`),D$.forEach(o),hg=i(Nh,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Nh.forEach(o),fg=h(Zo),Ue=r(Zo,"P",{});var io=s(Ue);ug=i(io,"To behave as an decoder the model needs to be initialized with the "),Sd=r(io,"CODE",{});var N$=s(Sd);gg=i(N$,"is_decoder"),N$.forEach(o),_g=i(io,` argument of the configuration set
to `),Wd=r(io,"CODE",{});var S$=s(Wd);kg=i(S$,"True"),S$.forEach(o),Fg=i(io,". To be used in a Seq2Seq model, the model needs to initialized with both "),Ud=r(io,"CODE",{});var W$=s(Ud);yg=i(W$,"is_decoder"),W$.forEach(o),vg=i(io,` argument and
`),Qd=r(io,"CODE",{});var U$=s(Qd);bg=i(U$,"add_cross_attention"),U$.forEach(o),Tg=i(io," set to "),Hd=r(io,"CODE",{});var Q$=s(Hd);wg=i(Q$,"True"),Q$.forEach(o),$g=i(io,"; an "),Vd=r(io,"CODE",{});var H$=s(Vd);xg=i(H$,"encoder_hidden_states"),H$.forEach(o),Rg=i(io," is then expected as an input to the forward pass."),io.forEach(o),Mg=h(Zo),vo=r(Zo,"DIV",{class:!0});var Or=s(vo);b(Ms.$$.fragment,Or),Eg=h(Or),mt=r(Or,"P",{});var Xl=s(mt);zg=i(Xl,"The "),bl=r(Xl,"A",{href:!0});var V$=s(bl);jg=i(V$,"RoFormerModel"),V$.forEach(o),Cg=i(Xl," forward method, overrides the "),Kd=r(Xl,"CODE",{});var K$=s(Kd);qg=i(K$,"__call__"),K$.forEach(o),Pg=i(Xl," special method."),Xl.forEach(o),Ag=h(Or),b(gn.$$.fragment,Or),Lg=h(Or),b(_n.$$.fragment,Or),Or.forEach(o),Zo.forEach(o),Gm=h(t),ht=r(t,"H2",{class:!0});var Sh=s(ht);kn=r(Sh,"A",{id:!0,class:!0,href:!0});var J$=s(kn);Jd=r(J$,"SPAN",{});var B$=s(Jd);b(Es.$$.fragment,B$),B$.forEach(o),J$.forEach(o),Og=h(Sh),Bd=r(Sh,"SPAN",{});var G$=s(Bd);Ig=i(G$,"RoFormerForCausalLM"),G$.forEach(o),Sh.forEach(o),Xm=h(t),No=r(t,"DIV",{class:!0});var Yl=s(No);b(zs.$$.fragment,Yl),Dg=h(Yl),ft=r(Yl,"P",{});var Zl=s(ft);Ng=i(Zl,"RoFormer Model with a "),Gd=r(Zl,"CODE",{});var X$=s(Gd);Sg=i(X$,"language modeling"),X$.forEach(o),Wg=i(Zl,` head on top for CLM fine-tuning.
This model is a PyTorch `),js=r(Zl,"A",{href:!0,rel:!0});var Y$=s(js);Ug=i(Y$,"torch.nn.Module"),Y$.forEach(o),Qg=i(Zl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zl.forEach(o),Hg=h(Yl),bo=r(Yl,"DIV",{class:!0});var Ir=s(bo);b(Cs.$$.fragment,Ir),Vg=h(Ir),ut=r(Ir,"P",{});var ed=s(ut);Kg=i(ed,"The "),Tl=r(ed,"A",{href:!0});var Z$=s(Tl);Jg=i(Z$,"RoFormerForCausalLM"),Z$.forEach(o),Bg=i(ed," forward method, overrides the "),Xd=r(ed,"CODE",{});var e1=s(Xd);Gg=i(e1,"__call__"),e1.forEach(o),Xg=i(ed," special method."),ed.forEach(o),Yg=h(Ir),b(Fn.$$.fragment,Ir),Zg=h(Ir),b(yn.$$.fragment,Ir),Ir.forEach(o),Yl.forEach(o),Ym=h(t),gt=r(t,"H2",{class:!0});var Wh=s(gt);vn=r(Wh,"A",{id:!0,class:!0,href:!0});var o1=s(vn);Yd=r(o1,"SPAN",{});var t1=s(Yd);b(qs.$$.fragment,t1),t1.forEach(o),o1.forEach(o),e_=h(Wh),Zd=r(Wh,"SPAN",{});var n1=s(Zd);o_=i(n1,"RoFormerForMaskedLM"),n1.forEach(o),Wh.forEach(o),Zm=h(t),So=r(t,"DIV",{class:!0});var od=s(So);b(Ps.$$.fragment,od),t_=h(od),_t=r(od,"P",{});var td=s(_t);n_=i(td,"RoFormer Model with a "),ec=r(td,"CODE",{});var r1=s(ec);r_=i(r1,"language modeling"),r1.forEach(o),s_=i(td,` head on top.
This model is a PyTorch `),As=r(td,"A",{href:!0,rel:!0});var s1=s(As);a_=i(s1,"torch.nn.Module"),s1.forEach(o),i_=i(td,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),td.forEach(o),l_=h(od),eo=r(od,"DIV",{class:!0});var et=s(eo);b(Ls.$$.fragment,et),d_=h(et),kt=r(et,"P",{});var nd=s(kt);c_=i(nd,"The "),wl=r(nd,"A",{href:!0});var a1=s(wl);p_=i(a1,"RoFormerForMaskedLM"),a1.forEach(o),m_=i(nd," forward method, overrides the "),oc=r(nd,"CODE",{});var i1=s(oc);h_=i(i1,"__call__"),i1.forEach(o),f_=i(nd," special method."),nd.forEach(o),u_=h(et),b(bn.$$.fragment,et),g_=h(et),b(Tn.$$.fragment,et),__=h(et),b(wn.$$.fragment,et),et.forEach(o),od.forEach(o),eh=h(t),Ft=r(t,"H2",{class:!0});var Uh=s(Ft);$n=r(Uh,"A",{id:!0,class:!0,href:!0});var l1=s($n);tc=r(l1,"SPAN",{});var d1=s(tc);b(Os.$$.fragment,d1),d1.forEach(o),l1.forEach(o),k_=h(Uh),nc=r(Uh,"SPAN",{});var c1=s(nc);F_=i(c1,"RoFormerForSequenceClassification"),c1.forEach(o),Uh.forEach(o),oh=h(t),go=r(t,"DIV",{class:!0});var Dr=s(go);b(Is.$$.fragment,Dr),y_=h(Dr),rc=r(Dr,"P",{});var p1=s(rc);v_=i(p1,`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),p1.forEach(o),b_=h(Dr),Ds=r(Dr,"P",{});var Qh=s(Ds);T_=i(Qh,"This model is a PyTorch "),Ns=r(Qh,"A",{href:!0,rel:!0});var m1=s(Ns);w_=i(m1,"torch.nn.Module"),m1.forEach(o),$_=i(Qh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qh.forEach(o),x_=h(Dr),Se=r(Dr,"DIV",{class:!0});var lo=s(Se);b(Ss.$$.fragment,lo),R_=h(lo),yt=r(lo,"P",{});var rd=s(yt);M_=i(rd,"The "),$l=r(rd,"A",{href:!0});var h1=s($l);E_=i(h1,"RoFormerForSequenceClassification"),h1.forEach(o),z_=i(rd," forward method, overrides the "),sc=r(rd,"CODE",{});var f1=s(sc);j_=i(f1,"__call__"),f1.forEach(o),C_=i(rd," special method."),rd.forEach(o),q_=h(lo),b(xn.$$.fragment,lo),P_=h(lo),b(Rn.$$.fragment,lo),A_=h(lo),b(Mn.$$.fragment,lo),L_=h(lo),b(En.$$.fragment,lo),O_=h(lo),b(zn.$$.fragment,lo),lo.forEach(o),Dr.forEach(o),th=h(t),vt=r(t,"H2",{class:!0});var Hh=s(vt);jn=r(Hh,"A",{id:!0,class:!0,href:!0});var u1=s(jn);ac=r(u1,"SPAN",{});var g1=s(ac);b(Ws.$$.fragment,g1),g1.forEach(o),u1.forEach(o),I_=h(Hh),ic=r(Hh,"SPAN",{});var _1=s(ic);D_=i(_1,"RoFormerForMultipleChoice"),_1.forEach(o),Hh.forEach(o),nh=h(t),_o=r(t,"DIV",{class:!0});var Nr=s(_o);b(Us.$$.fragment,Nr),N_=h(Nr),lc=r(Nr,"P",{});var k1=s(lc);S_=i(k1,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),k1.forEach(o),W_=h(Nr),Qs=r(Nr,"P",{});var Vh=s(Qs);U_=i(Vh,"This model is a PyTorch "),Hs=r(Vh,"A",{href:!0,rel:!0});var F1=s(Hs);Q_=i(F1,"torch.nn.Module"),F1.forEach(o),H_=i(Vh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vh.forEach(o),V_=h(Nr),To=r(Nr,"DIV",{class:!0});var Sr=s(To);b(Vs.$$.fragment,Sr),K_=h(Sr),bt=r(Sr,"P",{});var sd=s(bt);J_=i(sd,"The "),xl=r(sd,"A",{href:!0});var y1=s(xl);B_=i(y1,"RoFormerForMultipleChoice"),y1.forEach(o),G_=i(sd," forward method, overrides the "),dc=r(sd,"CODE",{});var v1=s(dc);X_=i(v1,"__call__"),v1.forEach(o),Y_=i(sd," special method."),sd.forEach(o),Z_=h(Sr),b(Cn.$$.fragment,Sr),ek=h(Sr),b(qn.$$.fragment,Sr),Sr.forEach(o),Nr.forEach(o),rh=h(t),Tt=r(t,"H2",{class:!0});var Kh=s(Tt);Pn=r(Kh,"A",{id:!0,class:!0,href:!0});var b1=s(Pn);cc=r(b1,"SPAN",{});var T1=s(cc);b(Ks.$$.fragment,T1),T1.forEach(o),b1.forEach(o),ok=h(Kh),pc=r(Kh,"SPAN",{});var w1=s(pc);tk=i(w1,"RoFormerForTokenClassification"),w1.forEach(o),Kh.forEach(o),sh=h(t),ko=r(t,"DIV",{class:!0});var Wr=s(ko);b(Js.$$.fragment,Wr),nk=h(Wr),mc=r(Wr,"P",{});var $1=s(mc);rk=i($1,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$1.forEach(o),sk=h(Wr),Bs=r(Wr,"P",{});var Jh=s(Bs);ak=i(Jh,"This model is a PyTorch "),Gs=r(Jh,"A",{href:!0,rel:!0});var x1=s(Gs);ik=i(x1,"torch.nn.Module"),x1.forEach(o),lk=i(Jh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jh.forEach(o),dk=h(Wr),oo=r(Wr,"DIV",{class:!0});var ot=s(oo);b(Xs.$$.fragment,ot),ck=h(ot),wt=r(ot,"P",{});var ad=s(wt);pk=i(ad,"The "),Rl=r(ad,"A",{href:!0});var R1=s(Rl);mk=i(R1,"RoFormerForTokenClassification"),R1.forEach(o),hk=i(ad," forward method, overrides the "),hc=r(ad,"CODE",{});var M1=s(hc);fk=i(M1,"__call__"),M1.forEach(o),uk=i(ad," special method."),ad.forEach(o),gk=h(ot),b(An.$$.fragment,ot),_k=h(ot),b(Ln.$$.fragment,ot),kk=h(ot),b(On.$$.fragment,ot),ot.forEach(o),Wr.forEach(o),ah=h(t),$t=r(t,"H2",{class:!0});var Bh=s($t);In=r(Bh,"A",{id:!0,class:!0,href:!0});var E1=s(In);fc=r(E1,"SPAN",{});var z1=s(fc);b(Ys.$$.fragment,z1),z1.forEach(o),E1.forEach(o),Fk=h(Bh),uc=r(Bh,"SPAN",{});var j1=s(uc);yk=i(j1,"RoFormerForQuestionAnswering"),j1.forEach(o),Bh.forEach(o),ih=h(t),Fo=r(t,"DIV",{class:!0});var Ur=s(Fo);b(Zs.$$.fragment,Ur),vk=h(Ur),xt=r(Ur,"P",{});var id=s(xt);bk=i(id,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),gc=r(id,"CODE",{});var C1=s(gc);Tk=i(C1,"span start logits"),C1.forEach(o),wk=i(id," and "),_c=r(id,"CODE",{});var q1=s(_c);$k=i(q1,"span end logits"),q1.forEach(o),xk=i(id,")."),id.forEach(o),Rk=h(Ur),ea=r(Ur,"P",{});var Gh=s(ea);Mk=i(Gh,"This model is a PyTorch "),oa=r(Gh,"A",{href:!0,rel:!0});var P1=s(oa);Ek=i(P1,"torch.nn.Module"),P1.forEach(o),zk=i(Gh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gh.forEach(o),jk=h(Ur),to=r(Ur,"DIV",{class:!0});var tt=s(to);b(ta.$$.fragment,tt),Ck=h(tt),Rt=r(tt,"P",{});var ld=s(Rt);qk=i(ld,"The "),Ml=r(ld,"A",{href:!0});var A1=s(Ml);Pk=i(A1,"RoFormerForQuestionAnswering"),A1.forEach(o),Ak=i(ld," forward method, overrides the "),kc=r(ld,"CODE",{});var L1=s(kc);Lk=i(L1,"__call__"),L1.forEach(o),Ok=i(ld," special method."),ld.forEach(o),Ik=h(tt),b(Dn.$$.fragment,tt),Dk=h(tt),b(Nn.$$.fragment,tt),Nk=h(tt),b(Sn.$$.fragment,tt),tt.forEach(o),Ur.forEach(o),lh=h(t),Mt=r(t,"H2",{class:!0});var Xh=s(Mt);Wn=r(Xh,"A",{id:!0,class:!0,href:!0});var O1=s(Wn);Fc=r(O1,"SPAN",{});var I1=s(Fc);b(na.$$.fragment,I1),I1.forEach(o),O1.forEach(o),Sk=h(Xh),yc=r(Xh,"SPAN",{});var D1=s(yc);Wk=i(D1,"TFRoFormerModel"),D1.forEach(o),Xh.forEach(o),dh=h(t),Qe=r(t,"DIV",{class:!0});var Co=s(Qe);b(ra.$$.fragment,Co),Uk=h(Co),vc=r(Co,"P",{});var N1=s(vc);Qk=i(N1,"The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top."),N1.forEach(o),Hk=h(Co),sa=r(Co,"P",{});var Yh=s(sa);Vk=i(Yh,"This model inherits from "),El=r(Yh,"A",{href:!0});var S1=s(El);Kk=i(S1,"TFPreTrainedModel"),S1.forEach(o),Jk=i(Yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yh.forEach(o),Bk=h(Co),aa=r(Co,"P",{});var Zh=s(aa);Gk=i(Zh,"This model is also a "),ia=r(Zh,"A",{href:!0,rel:!0});var W1=s(ia);Xk=i(W1,"tf.keras.Model"),W1.forEach(o),Yk=i(Zh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zh.forEach(o),Zk=h(Co),b(Un.$$.fragment,Co),eF=h(Co),wo=r(Co,"DIV",{class:!0});var Qr=s(wo);b(la.$$.fragment,Qr),oF=h(Qr),Et=r(Qr,"P",{});var dd=s(Et);tF=i(dd,"The "),zl=r(dd,"A",{href:!0});var U1=s(zl);nF=i(U1,"TFRoFormerModel"),U1.forEach(o),rF=i(dd," forward method, overrides the "),bc=r(dd,"CODE",{});var Q1=s(bc);sF=i(Q1,"__call__"),Q1.forEach(o),aF=i(dd," special method."),dd.forEach(o),iF=h(Qr),b(Qn.$$.fragment,Qr),lF=h(Qr),b(Hn.$$.fragment,Qr),Qr.forEach(o),Co.forEach(o),ch=h(t),zt=r(t,"H2",{class:!0});var ef=s(zt);Vn=r(ef,"A",{id:!0,class:!0,href:!0});var H1=s(Vn);Tc=r(H1,"SPAN",{});var V1=s(Tc);b(da.$$.fragment,V1),V1.forEach(o),H1.forEach(o),dF=h(ef),wc=r(ef,"SPAN",{});var K1=s(wc);cF=i(K1,"TFRoFormerForMaskedLM"),K1.forEach(o),ef.forEach(o),ph=h(t),He=r(t,"DIV",{class:!0});var qo=s(He);b(ca.$$.fragment,qo),pF=h(qo),pa=r(qo,"P",{});var of=s(pa);mF=i(of,"RoFormer Model with a "),$c=r(of,"CODE",{});var J1=s($c);hF=i(J1,"language modeling"),J1.forEach(o),fF=i(of," head on top."),of.forEach(o),uF=h(qo),ma=r(qo,"P",{});var tf=s(ma);gF=i(tf,"This model inherits from "),jl=r(tf,"A",{href:!0});var B1=s(jl);_F=i(B1,"TFPreTrainedModel"),B1.forEach(o),kF=i(tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf.forEach(o),FF=h(qo),ha=r(qo,"P",{});var nf=s(ha);yF=i(nf,"This model is also a "),fa=r(nf,"A",{href:!0,rel:!0});var G1=s(fa);vF=i(G1,"tf.keras.Model"),G1.forEach(o),bF=i(nf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf.forEach(o),TF=h(qo),b(Kn.$$.fragment,qo),wF=h(qo),no=r(qo,"DIV",{class:!0});var nt=s(no);b(ua.$$.fragment,nt),$F=h(nt),jt=r(nt,"P",{});var cd=s(jt);xF=i(cd,"The "),Cl=r(cd,"A",{href:!0});var X1=s(Cl);RF=i(X1,"TFRoFormerForMaskedLM"),X1.forEach(o),MF=i(cd," forward method, overrides the "),xc=r(cd,"CODE",{});var Y1=s(xc);EF=i(Y1,"__call__"),Y1.forEach(o),zF=i(cd," special method."),cd.forEach(o),jF=h(nt),b(Jn.$$.fragment,nt),CF=h(nt),b(Bn.$$.fragment,nt),qF=h(nt),b(Gn.$$.fragment,nt),nt.forEach(o),qo.forEach(o),mh=h(t),Ct=r(t,"H2",{class:!0});var rf=s(Ct);Xn=r(rf,"A",{id:!0,class:!0,href:!0});var Z1=s(Xn);Rc=r(Z1,"SPAN",{});var e2=s(Rc);b(ga.$$.fragment,e2),e2.forEach(o),Z1.forEach(o),PF=h(rf),Mc=r(rf,"SPAN",{});var o2=s(Mc);AF=i(o2,"TFRoFormerForCausalLM"),o2.forEach(o),rf.forEach(o),hh=h(t),Ve=r(t,"DIV",{class:!0});var Po=s(Ve);b(_a.$$.fragment,Po),LF=h(Po),ka=r(Po,"P",{});var sf=s(ka);OF=i(sf,"RoFormer Model with a "),Ec=r(sf,"CODE",{});var t2=s(Ec);IF=i(t2,"language modeling"),t2.forEach(o),DF=i(sf," head on top for CLM fine-tuning."),sf.forEach(o),NF=h(Po),Fa=r(Po,"P",{});var af=s(Fa);SF=i(af,"This model inherits from "),ql=r(af,"A",{href:!0});var n2=s(ql);WF=i(n2,"TFPreTrainedModel"),n2.forEach(o),UF=i(af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),af.forEach(o),QF=h(Po),ya=r(Po,"P",{});var lf=s(ya);HF=i(lf,"This model is also a "),va=r(lf,"A",{href:!0,rel:!0});var r2=s(va);VF=i(r2,"tf.keras.Model"),r2.forEach(o),KF=i(lf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lf.forEach(o),JF=h(Po),b(Yn.$$.fragment,Po),BF=h(Po),Yo=r(Po,"DIV",{class:!0});var pd=s(Yo);b(ba.$$.fragment,pd),GF=h(pd),Ye=r(pd,"P",{});var Ao=s(Ye);XF=i(Ao,"labels ("),zc=r(Ao,"CODE",{});var s2=s(zc);YF=i(s2,"tf.Tensor"),s2.forEach(o),ZF=i(Ao," or "),jc=r(Ao,"CODE",{});var a2=s(jc);ey=i(a2,"np.ndarray"),a2.forEach(o),oy=i(Ao," of shape "),Cc=r(Ao,"CODE",{});var i2=s(Cc);ty=i(i2,"(batch_size, sequence_length)"),i2.forEach(o),ny=i(Ao,", "),qc=r(Ao,"EM",{});var l2=s(qc);ry=i(l2,"optional"),l2.forEach(o),sy=i(Ao,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Pc=r(Ao,"CODE",{});var d2=s(Pc);ay=i(d2,"[0, ..., config.vocab_size - 1]"),d2.forEach(o),iy=i(Ao,"."),Ao.forEach(o),ly=h(pd),b(Zn.$$.fragment,pd),pd.forEach(o),Po.forEach(o),fh=h(t),qt=r(t,"H2",{class:!0});var df=s(qt);er=r(df,"A",{id:!0,class:!0,href:!0});var c2=s(er);Ac=r(c2,"SPAN",{});var p2=s(Ac);b(Ta.$$.fragment,p2),p2.forEach(o),c2.forEach(o),dy=h(df),Lc=r(df,"SPAN",{});var m2=s(Lc);cy=i(m2,"TFRoFormerForSequenceClassification"),m2.forEach(o),df.forEach(o),uh=h(t),Ke=r(t,"DIV",{class:!0});var Lo=s(Ke);b(wa.$$.fragment,Lo),py=h(Lo),Oc=r(Lo,"P",{});var h2=s(Oc);my=i(h2,"RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),h2.forEach(o),hy=h(Lo),$a=r(Lo,"P",{});var cf=s($a);fy=i(cf,"This model inherits from "),Pl=r(cf,"A",{href:!0});var f2=s(Pl);uy=i(f2,"TFPreTrainedModel"),f2.forEach(o),gy=i(cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cf.forEach(o),_y=h(Lo),xa=r(Lo,"P",{});var pf=s(xa);ky=i(pf,"This model is also a "),Ra=r(pf,"A",{href:!0,rel:!0});var u2=s(Ra);Fy=i(u2,"tf.keras.Model"),u2.forEach(o),yy=i(pf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pf.forEach(o),vy=h(Lo),b(or.$$.fragment,Lo),by=h(Lo),ro=r(Lo,"DIV",{class:!0});var rt=s(ro);b(Ma.$$.fragment,rt),Ty=h(rt),Pt=r(rt,"P",{});var md=s(Pt);wy=i(md,"The "),Al=r(md,"A",{href:!0});var g2=s(Al);$y=i(g2,"TFRoFormerForSequenceClassification"),g2.forEach(o),xy=i(md," forward method, overrides the "),Ic=r(md,"CODE",{});var _2=s(Ic);Ry=i(_2,"__call__"),_2.forEach(o),My=i(md," special method."),md.forEach(o),Ey=h(rt),b(tr.$$.fragment,rt),zy=h(rt),b(nr.$$.fragment,rt),jy=h(rt),b(rr.$$.fragment,rt),rt.forEach(o),Lo.forEach(o),gh=h(t),At=r(t,"H2",{class:!0});var mf=s(At);sr=r(mf,"A",{id:!0,class:!0,href:!0});var k2=s(sr);Dc=r(k2,"SPAN",{});var F2=s(Dc);b(Ea.$$.fragment,F2),F2.forEach(o),k2.forEach(o),Cy=h(mf),Nc=r(mf,"SPAN",{});var y2=s(Nc);qy=i(y2,"TFRoFormerForMultipleChoice"),y2.forEach(o),mf.forEach(o),_h=h(t),Je=r(t,"DIV",{class:!0});var Oo=s(Je);b(za.$$.fragment,Oo),Py=h(Oo),Sc=r(Oo,"P",{});var v2=s(Sc);Ay=i(v2,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),v2.forEach(o),Ly=h(Oo),ja=r(Oo,"P",{});var hf=s(ja);Oy=i(hf,"This model inherits from "),Ll=r(hf,"A",{href:!0});var b2=s(Ll);Iy=i(b2,"TFPreTrainedModel"),b2.forEach(o),Dy=i(hf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hf.forEach(o),Ny=h(Oo),Ca=r(Oo,"P",{});var ff=s(Ca);Sy=i(ff,"This model is also a "),qa=r(ff,"A",{href:!0,rel:!0});var T2=s(qa);Wy=i(T2,"tf.keras.Model"),T2.forEach(o),Uy=i(ff,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ff.forEach(o),Qy=h(Oo),b(ar.$$.fragment,Oo),Hy=h(Oo),$o=r(Oo,"DIV",{class:!0});var Hr=s($o);b(Pa.$$.fragment,Hr),Vy=h(Hr),Lt=r(Hr,"P",{});var hd=s(Lt);Ky=i(hd,"The "),Ol=r(hd,"A",{href:!0});var w2=s(Ol);Jy=i(w2,"TFRoFormerForMultipleChoice"),w2.forEach(o),By=i(hd," forward method, overrides the "),Wc=r(hd,"CODE",{});var $2=s(Wc);Gy=i($2,"__call__"),$2.forEach(o),Xy=i(hd," special method."),hd.forEach(o),Yy=h(Hr),b(ir.$$.fragment,Hr),Zy=h(Hr),b(lr.$$.fragment,Hr),Hr.forEach(o),Oo.forEach(o),kh=h(t),Ot=r(t,"H2",{class:!0});var uf=s(Ot);dr=r(uf,"A",{id:!0,class:!0,href:!0});var x2=s(dr);Uc=r(x2,"SPAN",{});var R2=s(Uc);b(Aa.$$.fragment,R2),R2.forEach(o),x2.forEach(o),ev=h(uf),Qc=r(uf,"SPAN",{});var M2=s(Qc);ov=i(M2,"TFRoFormerForTokenClassification"),M2.forEach(o),uf.forEach(o),Fh=h(t),Be=r(t,"DIV",{class:!0});var Io=s(Be);b(La.$$.fragment,Io),tv=h(Io),Hc=r(Io,"P",{});var E2=s(Hc);nv=i(E2,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),E2.forEach(o),rv=h(Io),Oa=r(Io,"P",{});var gf=s(Oa);sv=i(gf,"This model inherits from "),Il=r(gf,"A",{href:!0});var z2=s(Il);av=i(z2,"TFPreTrainedModel"),z2.forEach(o),iv=i(gf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gf.forEach(o),lv=h(Io),Ia=r(Io,"P",{});var _f=s(Ia);dv=i(_f,"This model is also a "),Da=r(_f,"A",{href:!0,rel:!0});var j2=s(Da);cv=i(j2,"tf.keras.Model"),j2.forEach(o),pv=i(_f,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_f.forEach(o),mv=h(Io),b(cr.$$.fragment,Io),hv=h(Io),so=r(Io,"DIV",{class:!0});var st=s(so);b(Na.$$.fragment,st),fv=h(st),It=r(st,"P",{});var fd=s(It);uv=i(fd,"The "),Dl=r(fd,"A",{href:!0});var C2=s(Dl);gv=i(C2,"TFRoFormerForTokenClassification"),C2.forEach(o),_v=i(fd," forward method, overrides the "),Vc=r(fd,"CODE",{});var q2=s(Vc);kv=i(q2,"__call__"),q2.forEach(o),Fv=i(fd," special method."),fd.forEach(o),yv=h(st),b(pr.$$.fragment,st),vv=h(st),b(mr.$$.fragment,st),bv=h(st),b(hr.$$.fragment,st),st.forEach(o),Io.forEach(o),yh=h(t),Dt=r(t,"H2",{class:!0});var kf=s(Dt);fr=r(kf,"A",{id:!0,class:!0,href:!0});var P2=s(fr);Kc=r(P2,"SPAN",{});var A2=s(Kc);b(Sa.$$.fragment,A2),A2.forEach(o),P2.forEach(o),Tv=h(kf),Jc=r(kf,"SPAN",{});var L2=s(Jc);wv=i(L2,"TFRoFormerForQuestionAnswering"),L2.forEach(o),kf.forEach(o),vh=h(t),Ge=r(t,"DIV",{class:!0});var Do=s(Ge);b(Wa.$$.fragment,Do),$v=h(Do),Nt=r(Do,"P",{});var ud=s(Nt);xv=i(ud,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Bc=r(ud,"CODE",{});var O2=s(Bc);Rv=i(O2,"span start logits"),O2.forEach(o),Mv=i(ud," and "),Gc=r(ud,"CODE",{});var I2=s(Gc);Ev=i(I2,"span end logits"),I2.forEach(o),zv=i(ud,")."),ud.forEach(o),jv=h(Do),Ua=r(Do,"P",{});var Ff=s(Ua);Cv=i(Ff,"This model inherits from "),Nl=r(Ff,"A",{href:!0});var D2=s(Nl);qv=i(D2,"TFPreTrainedModel"),D2.forEach(o),Pv=i(Ff,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ff.forEach(o),Av=h(Do),Qa=r(Do,"P",{});var yf=s(Qa);Lv=i(yf,"This model is also a "),Ha=r(yf,"A",{href:!0,rel:!0});var N2=s(Ha);Ov=i(N2,"tf.keras.Model"),N2.forEach(o),Iv=i(yf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yf.forEach(o),Dv=h(Do),b(ur.$$.fragment,Do),Nv=h(Do),ao=r(Do,"DIV",{class:!0});var at=s(ao);b(Va.$$.fragment,at),Sv=h(at),St=r(at,"P",{});var gd=s(St);Wv=i(gd,"The "),Sl=r(gd,"A",{href:!0});var S2=s(Sl);Uv=i(S2,"TFRoFormerForQuestionAnswering"),S2.forEach(o),Qv=i(gd," forward method, overrides the "),Xc=r(gd,"CODE",{});var W2=s(Xc);Hv=i(W2,"__call__"),W2.forEach(o),Vv=i(gd," special method."),gd.forEach(o),Kv=h(at),b(gr.$$.fragment,at),Jv=h(at),b(_r.$$.fragment,at),Bv=h(at),b(kr.$$.fragment,at),at.forEach(o),Do.forEach(o),bh=h(t),Wt=r(t,"H2",{class:!0});var vf=s(Wt);Fr=r(vf,"A",{id:!0,class:!0,href:!0});var U2=s(Fr);Yc=r(U2,"SPAN",{});var Q2=s(Yc);b(Ka.$$.fragment,Q2),Q2.forEach(o),U2.forEach(o),Gv=h(vf),Zc=r(vf,"SPAN",{});var H2=s(Zc);Xv=i(H2,"FlaxRoFormerModel"),H2.forEach(o),vf.forEach(o),Th=h(t),Pe=r(t,"DIV",{class:!0});var co=s(Pe);b(Ja.$$.fragment,co),Yv=h(co),ep=r(co,"P",{});var V2=s(ep);Zv=i(V2,"The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top."),V2.forEach(o),eb=h(co),Ba=r(co,"P",{});var bf=s(Ba);ob=i(bf,"This model inherits from "),Wl=r(bf,"A",{href:!0});var K2=s(Wl);tb=i(K2,"FlaxPreTrainedModel"),K2.forEach(o),nb=i(bf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bf.forEach(o),rb=h(co),Ga=r(co,"P",{});var Tf=s(Ga);sb=i(Tf,"This model is also a Flax Linen "),Xa=r(Tf,"A",{href:!0,rel:!0});var J2=s(Xa);ab=i(J2,"flax.linen.Module"),J2.forEach(o),ib=i(Tf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Tf.forEach(o),lb=h(co),op=r(co,"P",{});var B2=s(op);db=i(B2,"Finally, this model supports inherent JAX features such as:"),B2.forEach(o),cb=h(co),Wo=r(co,"UL",{});var Vr=s(Wo);tp=r(Vr,"LI",{});var G2=s(tp);Ya=r(G2,"A",{href:!0,rel:!0});var X2=s(Ya);pb=i(X2,"Just-In-Time (JIT) compilation"),X2.forEach(o),G2.forEach(o),mb=h(Vr),np=r(Vr,"LI",{});var Y2=s(np);Za=r(Y2,"A",{href:!0,rel:!0});var Z2=s(Za);hb=i(Z2,"Automatic Differentiation"),Z2.forEach(o),Y2.forEach(o),fb=h(Vr),rp=r(Vr,"LI",{});var e0=s(rp);ei=r(e0,"A",{href:!0,rel:!0});var o0=s(ei);ub=i(o0,"Vectorization"),o0.forEach(o),e0.forEach(o),gb=h(Vr),sp=r(Vr,"LI",{});var t0=s(sp);oi=r(t0,"A",{href:!0,rel:!0});var n0=s(oi);_b=i(n0,"Parallelization"),n0.forEach(o),t0.forEach(o),Vr.forEach(o),kb=h(co),xo=r(co,"DIV",{class:!0});var Kr=s(xo);b(ti.$$.fragment,Kr),Fb=h(Kr),Ut=r(Kr,"P",{});var _d=s(Ut);yb=i(_d,"The "),ap=r(_d,"CODE",{});var r0=s(ap);vb=i(r0,"FlaxRoFormerPreTrainedModel"),r0.forEach(o),bb=i(_d," forward method, overrides the "),ip=r(_d,"CODE",{});var s0=s(ip);Tb=i(s0,"__call__"),s0.forEach(o),wb=i(_d," special method."),_d.forEach(o),$b=h(Kr),b(yr.$$.fragment,Kr),xb=h(Kr),b(vr.$$.fragment,Kr),Kr.forEach(o),co.forEach(o),wh=h(t),Qt=r(t,"H2",{class:!0});var wf=s(Qt);br=r(wf,"A",{id:!0,class:!0,href:!0});var a0=s(br);lp=r(a0,"SPAN",{});var i0=s(lp);b(ni.$$.fragment,i0),i0.forEach(o),a0.forEach(o),Rb=h(wf),dp=r(wf,"SPAN",{});var l0=s(dp);Mb=i(l0,"FlaxRoFormerForMaskedLM"),l0.forEach(o),wf.forEach(o),$h=h(t),Ae=r(t,"DIV",{class:!0});var po=s(Ae);b(ri.$$.fragment,po),Eb=h(po),si=r(po,"P",{});var $f=s(si);zb=i($f,"RoFormer Model with a "),cp=r($f,"CODE",{});var d0=s(cp);jb=i(d0,"language modeling"),d0.forEach(o),Cb=i($f," head on top."),$f.forEach(o),qb=h(po),ai=r(po,"P",{});var xf=s(ai);Pb=i(xf,"This model inherits from "),Ul=r(xf,"A",{href:!0});var c0=s(Ul);Ab=i(c0,"FlaxPreTrainedModel"),c0.forEach(o),Lb=i(xf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xf.forEach(o),Ob=h(po),ii=r(po,"P",{});var Rf=s(ii);Ib=i(Rf,"This model is also a Flax Linen "),li=r(Rf,"A",{href:!0,rel:!0});var p0=s(li);Db=i(p0,"flax.linen.Module"),p0.forEach(o),Nb=i(Rf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Rf.forEach(o),Sb=h(po),pp=r(po,"P",{});var m0=s(pp);Wb=i(m0,"Finally, this model supports inherent JAX features such as:"),m0.forEach(o),Ub=h(po),Uo=r(po,"UL",{});var Jr=s(Uo);mp=r(Jr,"LI",{});var h0=s(mp);di=r(h0,"A",{href:!0,rel:!0});var f0=s(di);Qb=i(f0,"Just-In-Time (JIT) compilation"),f0.forEach(o),h0.forEach(o),Hb=h(Jr),hp=r(Jr,"LI",{});var u0=s(hp);ci=r(u0,"A",{href:!0,rel:!0});var g0=s(ci);Vb=i(g0,"Automatic Differentiation"),g0.forEach(o),u0.forEach(o),Kb=h(Jr),fp=r(Jr,"LI",{});var _0=s(fp);pi=r(_0,"A",{href:!0,rel:!0});var k0=s(pi);Jb=i(k0,"Vectorization"),k0.forEach(o),_0.forEach(o),Bb=h(Jr),up=r(Jr,"LI",{});var F0=s(up);mi=r(F0,"A",{href:!0,rel:!0});var y0=s(mi);Gb=i(y0,"Parallelization"),y0.forEach(o),F0.forEach(o),Jr.forEach(o),Xb=h(po),Ro=r(po,"DIV",{class:!0});var Br=s(Ro);b(hi.$$.fragment,Br),Yb=h(Br),Ht=r(Br,"P",{});var kd=s(Ht);Zb=i(kd,"The "),gp=r(kd,"CODE",{});var v0=s(gp);eT=i(v0,"FlaxRoFormerPreTrainedModel"),v0.forEach(o),oT=i(kd," forward method, overrides the "),_p=r(kd,"CODE",{});var b0=s(_p);tT=i(b0,"__call__"),b0.forEach(o),nT=i(kd," special method."),kd.forEach(o),rT=h(Br),b(Tr.$$.fragment,Br),sT=h(Br),b(wr.$$.fragment,Br),Br.forEach(o),po.forEach(o),xh=h(t),Vt=r(t,"H2",{class:!0});var Mf=s(Vt);$r=r(Mf,"A",{id:!0,class:!0,href:!0});var T0=s($r);kp=r(T0,"SPAN",{});var w0=s(kp);b(fi.$$.fragment,w0),w0.forEach(o),T0.forEach(o),aT=h(Mf),Fp=r(Mf,"SPAN",{});var $0=s(Fp);iT=i($0,"FlaxRoFormerForSequenceClassification"),$0.forEach(o),Mf.forEach(o),Rh=h(t),Le=r(t,"DIV",{class:!0});var mo=s(Le);b(ui.$$.fragment,mo),lT=h(mo),yp=r(mo,"P",{});var x0=s(yp);dT=i(x0,`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),x0.forEach(o),cT=h(mo),gi=r(mo,"P",{});var Ef=s(gi);pT=i(Ef,"This model inherits from "),Ql=r(Ef,"A",{href:!0});var R0=s(Ql);mT=i(R0,"FlaxPreTrainedModel"),R0.forEach(o),hT=i(Ef,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ef.forEach(o),fT=h(mo),_i=r(mo,"P",{});var zf=s(_i);uT=i(zf,"This model is also a Flax Linen "),ki=r(zf,"A",{href:!0,rel:!0});var M0=s(ki);gT=i(M0,"flax.linen.Module"),M0.forEach(o),_T=i(zf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zf.forEach(o),kT=h(mo),vp=r(mo,"P",{});var E0=s(vp);FT=i(E0,"Finally, this model supports inherent JAX features such as:"),E0.forEach(o),yT=h(mo),Qo=r(mo,"UL",{});var Gr=s(Qo);bp=r(Gr,"LI",{});var z0=s(bp);Fi=r(z0,"A",{href:!0,rel:!0});var j0=s(Fi);vT=i(j0,"Just-In-Time (JIT) compilation"),j0.forEach(o),z0.forEach(o),bT=h(Gr),Tp=r(Gr,"LI",{});var C0=s(Tp);yi=r(C0,"A",{href:!0,rel:!0});var q0=s(yi);TT=i(q0,"Automatic Differentiation"),q0.forEach(o),C0.forEach(o),wT=h(Gr),wp=r(Gr,"LI",{});var P0=s(wp);vi=r(P0,"A",{href:!0,rel:!0});var A0=s(vi);$T=i(A0,"Vectorization"),A0.forEach(o),P0.forEach(o),xT=h(Gr),$p=r(Gr,"LI",{});var L0=s($p);bi=r(L0,"A",{href:!0,rel:!0});var O0=s(bi);RT=i(O0,"Parallelization"),O0.forEach(o),L0.forEach(o),Gr.forEach(o),MT=h(mo),Mo=r(mo,"DIV",{class:!0});var Xr=s(Mo);b(Ti.$$.fragment,Xr),ET=h(Xr),Kt=r(Xr,"P",{});var Fd=s(Kt);zT=i(Fd,"The "),xp=r(Fd,"CODE",{});var I0=s(xp);jT=i(I0,"FlaxRoFormerPreTrainedModel"),I0.forEach(o),CT=i(Fd," forward method, overrides the "),Rp=r(Fd,"CODE",{});var D0=s(Rp);qT=i(D0,"__call__"),D0.forEach(o),PT=i(Fd," special method."),Fd.forEach(o),AT=h(Xr),b(xr.$$.fragment,Xr),LT=h(Xr),b(Rr.$$.fragment,Xr),Xr.forEach(o),mo.forEach(o),Mh=h(t),Jt=r(t,"H2",{class:!0});var jf=s(Jt);Mr=r(jf,"A",{id:!0,class:!0,href:!0});var N0=s(Mr);Mp=r(N0,"SPAN",{});var S0=s(Mp);b(wi.$$.fragment,S0),S0.forEach(o),N0.forEach(o),OT=h(jf),Ep=r(jf,"SPAN",{});var W0=s(Ep);IT=i(W0,"FlaxRoFormerForMultipleChoice"),W0.forEach(o),jf.forEach(o),Eh=h(t),Oe=r(t,"DIV",{class:!0});var ho=s(Oe);b($i.$$.fragment,ho),DT=h(ho),zp=r(ho,"P",{});var U0=s(zp);NT=i(U0,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),U0.forEach(o),ST=h(ho),xi=r(ho,"P",{});var Cf=s(xi);WT=i(Cf,"This model inherits from "),Hl=r(Cf,"A",{href:!0});var Q0=s(Hl);UT=i(Q0,"FlaxPreTrainedModel"),Q0.forEach(o),QT=i(Cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cf.forEach(o),HT=h(ho),Ri=r(ho,"P",{});var qf=s(Ri);VT=i(qf,"This model is also a Flax Linen "),Mi=r(qf,"A",{href:!0,rel:!0});var H0=s(Mi);KT=i(H0,"flax.linen.Module"),H0.forEach(o),JT=i(qf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qf.forEach(o),BT=h(ho),jp=r(ho,"P",{});var V0=s(jp);GT=i(V0,"Finally, this model supports inherent JAX features such as:"),V0.forEach(o),XT=h(ho),Ho=r(ho,"UL",{});var Yr=s(Ho);Cp=r(Yr,"LI",{});var K0=s(Cp);Ei=r(K0,"A",{href:!0,rel:!0});var J0=s(Ei);YT=i(J0,"Just-In-Time (JIT) compilation"),J0.forEach(o),K0.forEach(o),ZT=h(Yr),qp=r(Yr,"LI",{});var B0=s(qp);zi=r(B0,"A",{href:!0,rel:!0});var G0=s(zi);ew=i(G0,"Automatic Differentiation"),G0.forEach(o),B0.forEach(o),ow=h(Yr),Pp=r(Yr,"LI",{});var X0=s(Pp);ji=r(X0,"A",{href:!0,rel:!0});var Y0=s(ji);tw=i(Y0,"Vectorization"),Y0.forEach(o),X0.forEach(o),nw=h(Yr),Ap=r(Yr,"LI",{});var Z0=s(Ap);Ci=r(Z0,"A",{href:!0,rel:!0});var ex=s(Ci);rw=i(ex,"Parallelization"),ex.forEach(o),Z0.forEach(o),Yr.forEach(o),sw=h(ho),Eo=r(ho,"DIV",{class:!0});var Zr=s(Eo);b(qi.$$.fragment,Zr),aw=h(Zr),Bt=r(Zr,"P",{});var yd=s(Bt);iw=i(yd,"The "),Lp=r(yd,"CODE",{});var ox=s(Lp);lw=i(ox,"FlaxRoFormerPreTrainedModel"),ox.forEach(o),dw=i(yd," forward method, overrides the "),Op=r(yd,"CODE",{});var tx=s(Op);cw=i(tx,"__call__"),tx.forEach(o),pw=i(yd," special method."),yd.forEach(o),mw=h(Zr),b(Er.$$.fragment,Zr),hw=h(Zr),b(zr.$$.fragment,Zr),Zr.forEach(o),ho.forEach(o),zh=h(t),Gt=r(t,"H2",{class:!0});var Pf=s(Gt);jr=r(Pf,"A",{id:!0,class:!0,href:!0});var nx=s(jr);Ip=r(nx,"SPAN",{});var rx=s(Ip);b(Pi.$$.fragment,rx),rx.forEach(o),nx.forEach(o),fw=h(Pf),Dp=r(Pf,"SPAN",{});var sx=s(Dp);uw=i(sx,"FlaxRoFormerForTokenClassification"),sx.forEach(o),Pf.forEach(o),jh=h(t),Ie=r(t,"DIV",{class:!0});var fo=s(Ie);b(Ai.$$.fragment,fo),gw=h(fo),Np=r(fo,"P",{});var ax=s(Np);_w=i(ax,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ax.forEach(o),kw=h(fo),Li=r(fo,"P",{});var Af=s(Li);Fw=i(Af,"This model inherits from "),Vl=r(Af,"A",{href:!0});var ix=s(Vl);yw=i(ix,"FlaxPreTrainedModel"),ix.forEach(o),vw=i(Af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Af.forEach(o),bw=h(fo),Oi=r(fo,"P",{});var Lf=s(Oi);Tw=i(Lf,"This model is also a Flax Linen "),Ii=r(Lf,"A",{href:!0,rel:!0});var lx=s(Ii);ww=i(lx,"flax.linen.Module"),lx.forEach(o),$w=i(Lf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Lf.forEach(o),xw=h(fo),Sp=r(fo,"P",{});var dx=s(Sp);Rw=i(dx,"Finally, this model supports inherent JAX features such as:"),dx.forEach(o),Mw=h(fo),Vo=r(fo,"UL",{});var es=s(Vo);Wp=r(es,"LI",{});var cx=s(Wp);Di=r(cx,"A",{href:!0,rel:!0});var px=s(Di);Ew=i(px,"Just-In-Time (JIT) compilation"),px.forEach(o),cx.forEach(o),zw=h(es),Up=r(es,"LI",{});var mx=s(Up);Ni=r(mx,"A",{href:!0,rel:!0});var hx=s(Ni);jw=i(hx,"Automatic Differentiation"),hx.forEach(o),mx.forEach(o),Cw=h(es),Qp=r(es,"LI",{});var fx=s(Qp);Si=r(fx,"A",{href:!0,rel:!0});var ux=s(Si);qw=i(ux,"Vectorization"),ux.forEach(o),fx.forEach(o),Pw=h(es),Hp=r(es,"LI",{});var gx=s(Hp);Wi=r(gx,"A",{href:!0,rel:!0});var _x=s(Wi);Aw=i(_x,"Parallelization"),_x.forEach(o),gx.forEach(o),es.forEach(o),Lw=h(fo),zo=r(fo,"DIV",{class:!0});var os=s(zo);b(Ui.$$.fragment,os),Ow=h(os),Xt=r(os,"P",{});var vd=s(Xt);Iw=i(vd,"The "),Vp=r(vd,"CODE",{});var kx=s(Vp);Dw=i(kx,"FlaxRoFormerPreTrainedModel"),kx.forEach(o),Nw=i(vd," forward method, overrides the "),Kp=r(vd,"CODE",{});var Fx=s(Kp);Sw=i(Fx,"__call__"),Fx.forEach(o),Ww=i(vd," special method."),vd.forEach(o),Uw=h(os),b(Cr.$$.fragment,os),Qw=h(os),b(qr.$$.fragment,os),os.forEach(o),fo.forEach(o),Ch=h(t),Yt=r(t,"H2",{class:!0});var Of=s(Yt);Pr=r(Of,"A",{id:!0,class:!0,href:!0});var yx=s(Pr);Jp=r(yx,"SPAN",{});var vx=s(Jp);b(Qi.$$.fragment,vx),vx.forEach(o),yx.forEach(o),Hw=h(Of),Bp=r(Of,"SPAN",{});var bx=s(Bp);Vw=i(bx,"FlaxRoFormerForQuestionAnswering"),bx.forEach(o),Of.forEach(o),qh=h(t),De=r(t,"DIV",{class:!0});var uo=s(De);b(Hi.$$.fragment,uo),Kw=h(uo),Zt=r(uo,"P",{});var bd=s(Zt);Jw=i(bd,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gp=r(bd,"CODE",{});var Tx=s(Gp);Bw=i(Tx,"span start logits"),Tx.forEach(o),Gw=i(bd," and "),Xp=r(bd,"CODE",{});var wx=s(Xp);Xw=i(wx,"span end logits"),wx.forEach(o),Yw=i(bd,")."),bd.forEach(o),Zw=h(uo),Vi=r(uo,"P",{});var If=s(Vi);e$=i(If,"This model inherits from "),Kl=r(If,"A",{href:!0});var $x=s(Kl);o$=i($x,"FlaxPreTrainedModel"),$x.forEach(o),t$=i(If,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),If.forEach(o),n$=h(uo),Ki=r(uo,"P",{});var Df=s(Ki);r$=i(Df,"This model is also a Flax Linen "),Ji=r(Df,"A",{href:!0,rel:!0});var xx=s(Ji);s$=i(xx,"flax.linen.Module"),xx.forEach(o),a$=i(Df,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Df.forEach(o),i$=h(uo),Yp=r(uo,"P",{});var Rx=s(Yp);l$=i(Rx,"Finally, this model supports inherent JAX features such as:"),Rx.forEach(o),d$=h(uo),Ko=r(uo,"UL",{});var ts=s(Ko);Zp=r(ts,"LI",{});var Mx=s(Zp);Bi=r(Mx,"A",{href:!0,rel:!0});var Ex=s(Bi);c$=i(Ex,"Just-In-Time (JIT) compilation"),Ex.forEach(o),Mx.forEach(o),p$=h(ts),em=r(ts,"LI",{});var zx=s(em);Gi=r(zx,"A",{href:!0,rel:!0});var jx=s(Gi);m$=i(jx,"Automatic Differentiation"),jx.forEach(o),zx.forEach(o),h$=h(ts),om=r(ts,"LI",{});var Cx=s(om);Xi=r(Cx,"A",{href:!0,rel:!0});var qx=s(Xi);f$=i(qx,"Vectorization"),qx.forEach(o),Cx.forEach(o),u$=h(ts),tm=r(ts,"LI",{});var Px=s(tm);Yi=r(Px,"A",{href:!0,rel:!0});var Ax=s(Yi);g$=i(Ax,"Parallelization"),Ax.forEach(o),Px.forEach(o),ts.forEach(o),_$=h(uo),jo=r(uo,"DIV",{class:!0});var ns=s(jo);b(Zi.$$.fragment,ns),k$=h(ns),en=r(ns,"P",{});var Td=s(en);F$=i(Td,"The "),nm=r(Td,"CODE",{});var Lx=s(nm);y$=i(Lx,"FlaxRoFormerPreTrainedModel"),Lx.forEach(o),v$=i(Td," forward method, overrides the "),rm=r(Td,"CODE",{});var Ox=s(rm);b$=i(Ox,"__call__"),Ox.forEach(o),T$=i(Td," special method."),Td.forEach(o),w$=h(ns),b(Ar.$$.fragment,ns),$$=h(ns),b(Lr.$$.fragment,ns),ns.forEach(o),uo.forEach(o),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(GR)),u(p,"id","roformer"),u(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(p,"href","#roformer"),u(c,"class","relative group"),u(Z,"id","overview"),u(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Z,"href","#overview"),u(z,"class","relative group"),u(oe,"href","https://arxiv.org/pdf/2104.09864v1.pdf"),u(oe,"rel","nofollow"),u(te,"href","https://huggingface.co/junnyu"),u(te,"rel","nofollow"),u(y,"href","https://github.com/ZhuiyiTechnology/roformer"),u(y,"rel","nofollow"),u(P,"id","transformers.RoFormerConfig"),u(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(P,"href","#transformers.RoFormerConfig"),u(be,"class","relative group"),u($e,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerModel"),u(rs,"href","https://huggingface.co/junnyu/roformer_chinese_base"),u(rs,"rel","nofollow"),u(pl,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(ml,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ln,"id","transformers.RoFormerTokenizer"),u(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ln,"href","#transformers.RoFormerTokenizer"),u(lt,"class","relative group"),u(ls,"href","https://pypi.org/project/rjieba/"),u(ls,"rel","nofollow"),u(hl,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(cn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gl,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mn,"id","transformers.RoFormerTokenizerFast"),u(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mn,"href","#transformers.RoFormerTokenizerFast"),u(ct,"class","relative group"),u(_l,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizerFast"),u(kl,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),u(Fl,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(un,"id","transformers.RoFormerModel"),u(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(un,"href","#transformers.RoFormerModel"),u(pt,"class","relative group"),u($s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u($s,"rel","nofollow"),u(Rs,"href","https://arxiv.org/abs/1706.03762"),u(Rs,"rel","nofollow"),u(bl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerModel"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kn,"id","transformers.RoFormerForCausalLM"),u(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(kn,"href","#transformers.RoFormerForCausalLM"),u(ht,"class","relative group"),u(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(js,"rel","nofollow"),u(Tl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForCausalLM"),u(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vn,"id","transformers.RoFormerForMaskedLM"),u(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vn,"href","#transformers.RoFormerForMaskedLM"),u(gt,"class","relative group"),u(As,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(As,"rel","nofollow"),u(wl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForMaskedLM"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($n,"id","transformers.RoFormerForSequenceClassification"),u($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($n,"href","#transformers.RoFormerForSequenceClassification"),u(Ft,"class","relative group"),u(Ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ns,"rel","nofollow"),u($l,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForSequenceClassification"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jn,"id","transformers.RoFormerForMultipleChoice"),u(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jn,"href","#transformers.RoFormerForMultipleChoice"),u(vt,"class","relative group"),u(Hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Hs,"rel","nofollow"),u(xl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForMultipleChoice"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"id","transformers.RoFormerForTokenClassification"),u(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pn,"href","#transformers.RoFormerForTokenClassification"),u(Tt,"class","relative group"),u(Gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Gs,"rel","nofollow"),u(Rl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForTokenClassification"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(In,"id","transformers.RoFormerForQuestionAnswering"),u(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(In,"href","#transformers.RoFormerForQuestionAnswering"),u($t,"class","relative group"),u(oa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(oa,"rel","nofollow"),u(Ml,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForQuestionAnswering"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wn,"id","transformers.TFRoFormerModel"),u(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wn,"href","#transformers.TFRoFormerModel"),u(Mt,"class","relative group"),u(El,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ia,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ia,"rel","nofollow"),u(zl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerModel"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vn,"id","transformers.TFRoFormerForMaskedLM"),u(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vn,"href","#transformers.TFRoFormerForMaskedLM"),u(zt,"class","relative group"),u(jl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(fa,"rel","nofollow"),u(Cl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForMaskedLM"),u(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xn,"id","transformers.TFRoFormerForCausalLM"),u(Xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xn,"href","#transformers.TFRoFormerForCausalLM"),u(Ct,"class","relative group"),u(ql,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(va,"rel","nofollow"),u(Yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.TFRoFormerForSequenceClassification"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.TFRoFormerForSequenceClassification"),u(qt,"class","relative group"),u(Pl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ra,"rel","nofollow"),u(Al,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForSequenceClassification"),u(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sr,"id","transformers.TFRoFormerForMultipleChoice"),u(sr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(sr,"href","#transformers.TFRoFormerForMultipleChoice"),u(At,"class","relative group"),u(Ll,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(qa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(qa,"rel","nofollow"),u(Ol,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForMultipleChoice"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dr,"id","transformers.TFRoFormerForTokenClassification"),u(dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(dr,"href","#transformers.TFRoFormerForTokenClassification"),u(Ot,"class","relative group"),u(Il,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Da,"rel","nofollow"),u(Dl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForTokenClassification"),u(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fr,"id","transformers.TFRoFormerForQuestionAnswering"),u(fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fr,"href","#transformers.TFRoFormerForQuestionAnswering"),u(Dt,"class","relative group"),u(Nl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ha,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ha,"rel","nofollow"),u(Sl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForQuestionAnswering"),u(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fr,"id","transformers.FlaxRoFormerModel"),u(Fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fr,"href","#transformers.FlaxRoFormerModel"),u(Wt,"class","relative group"),u(Wl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Xa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Xa,"rel","nofollow"),u(Ya,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ya,"rel","nofollow"),u(Za,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Za,"rel","nofollow"),u(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ei,"rel","nofollow"),u(oi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(oi,"rel","nofollow"),u(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(br,"id","transformers.FlaxRoFormerForMaskedLM"),u(br,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(br,"href","#transformers.FlaxRoFormerForMaskedLM"),u(Qt,"class","relative group"),u(Ul,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(li,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(li,"rel","nofollow"),u(di,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(di,"rel","nofollow"),u(ci,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ci,"rel","nofollow"),u(pi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(pi,"rel","nofollow"),u(mi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(mi,"rel","nofollow"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($r,"id","transformers.FlaxRoFormerForSequenceClassification"),u($r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($r,"href","#transformers.FlaxRoFormerForSequenceClassification"),u(Vt,"class","relative group"),u(Ql,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ki,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ki,"rel","nofollow"),u(Fi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Fi,"rel","nofollow"),u(yi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(yi,"rel","nofollow"),u(vi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(vi,"rel","nofollow"),u(bi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(bi,"rel","nofollow"),u(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mr,"id","transformers.FlaxRoFormerForMultipleChoice"),u(Mr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Mr,"href","#transformers.FlaxRoFormerForMultipleChoice"),u(Jt,"class","relative group"),u(Hl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Mi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Mi,"rel","nofollow"),u(Ei,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ei,"rel","nofollow"),u(zi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(zi,"rel","nofollow"),u(ji,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ji,"rel","nofollow"),u(Ci,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ci,"rel","nofollow"),u(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jr,"id","transformers.FlaxRoFormerForTokenClassification"),u(jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jr,"href","#transformers.FlaxRoFormerForTokenClassification"),u(Gt,"class","relative group"),u(Vl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ii,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ii,"rel","nofollow"),u(Di,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Di,"rel","nofollow"),u(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ni,"rel","nofollow"),u(Si,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Si,"rel","nofollow"),u(Wi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Wi,"rel","nofollow"),u(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pr,"id","transformers.FlaxRoFormerForQuestionAnswering"),u(Pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pr,"href","#transformers.FlaxRoFormerForQuestionAnswering"),u(Yt,"class","relative group"),u(Kl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ji,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ji,"rel","nofollow"),u(Bi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Bi,"rel","nofollow"),u(Gi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Gi,"rel","nofollow"),u(Xi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Xi,"rel","nofollow"),u(Yi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Yi,"rel","nofollow"),u(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,F){e(document.head,d),k(t,g,F),k(t,c,F),e(c,p),e(p,_),T(l,_,null),e(c,f),e(c,M),e(M,ue),k(t,B,F),k(t,z,F),e(z,Z),e(Z,N),T(ee,N,null),e(z,ge),e(z,S),e(S,_e),k(t,pe,F),k(t,J,F),e(J,L),e(J,oe),e(oe,G),e(J,j),k(t,q,F),k(t,ne,F),e(ne,Q),k(t,me,F),k(t,re,F),e(re,W),e(W,ke),k(t,he,F),k(t,C,F),e(C,Fe),k(t,U,F),k(t,se,F),e(se,ce),e(ce,H),k(t,fe,F),k(t,X,F),e(X,O),e(X,te),e(te,V),e(X,ye),e(X,y),e(y,E),e(X,Y),k(t,Me,F),k(t,be,F),e(be,P),e(P,xe),T(we,xe,null),e(be,je),e(be,A),e(A,K),k(t,Ee,F),k(t,ae,F),T(I,ae,null),e(ae,Ce),e(ae,Te),e(Te,ve),e(Te,$e),e($e,Nf),e(Te,Sf),e(Te,rs),e(rs,Wf),e(Te,Uf),e(ae,Qf),e(ae,it),e(it,Hf),e(it,pl),e(pl,Vf),e(it,Kf),e(it,ml),e(ml,Jf),e(it,Bf),e(ae,Gf),T(an,ae,null),k(t,Qm,F),k(t,lt,F),e(lt,ln),e(ln,wd),T(ss,wd,null),e(lt,Xf),e(lt,$d),e($d,Yf),k(t,Hm,F),k(t,qe,F),T(as,qe,null),e(qe,Zf),e(qe,is),e(is,eu),e(is,ls),e(ls,ou),e(is,tu),e(qe,nu),e(qe,ds),e(ds,ru),e(ds,hl),e(hl,su),e(ds,au),e(qe,iu),T(dn,qe,null),e(qe,lu),e(qe,Go),T(cs,Go,null),e(Go,du),e(Go,xd),e(xd,cu),e(Go,pu),e(Go,ps),e(ps,fl),e(fl,mu),e(fl,Rd),e(Rd,hu),e(ps,fu),e(ps,ul),e(ul,uu),e(ul,Md),e(Md,gu),e(qe,_u),e(qe,cn),T(ms,cn,null),e(cn,ku),e(cn,hs),e(hs,Fu),e(hs,Ed),e(Ed,yu),e(hs,vu),e(qe,bu),e(qe,yo),T(fs,yo,null),e(yo,Tu),e(yo,zd),e(zd,wu),e(yo,$u),T(pn,yo,null),e(yo,xu),e(yo,dt),e(dt,Ru),e(dt,jd),e(jd,Mu),e(dt,Eu),e(dt,Cd),e(Cd,zu),e(dt,ju),e(qe,Cu),e(qe,gl),T(us,gl,null),k(t,Vm,F),k(t,ct,F),e(ct,mn),e(mn,qd),T(gs,qd,null),e(ct,qu),e(ct,Pd),e(Pd,Pu),k(t,Km,F),k(t,We,F),T(_s,We,null),e(We,Au),e(We,ks),e(ks,Lu),e(ks,Ad),e(Ad,Ou),e(ks,Iu),e(We,Du),e(We,hn),e(hn,_l),e(_l,Nu),e(hn,Su),e(hn,kl),e(kl,Wu),e(hn,Uu),e(We,Qu),e(We,Fs),e(Fs,Hu),e(Fs,Fl),e(Fl,Vu),e(Fs,Ku),e(We,Ju),T(fn,We,null),e(We,Bu),e(We,Xo),T(ys,Xo,null),e(Xo,Gu),e(Xo,Ld),e(Ld,Xu),e(Xo,Yu),e(Xo,vs),e(vs,yl),e(yl,Zu),e(yl,Od),e(Od,eg),e(vs,og),e(vs,vl),e(vl,tg),e(vl,Id),e(Id,ng),k(t,Jm,F),k(t,pt,F),e(pt,un),e(un,Dd),T(bs,Dd,null),e(pt,rg),e(pt,Nd),e(Nd,sg),k(t,Bm,F),k(t,Xe,F),T(Ts,Xe,null),e(Xe,ag),e(Xe,ws),e(ws,ig),e(ws,$s),e($s,lg),e(ws,dg),e(Xe,cg),e(Xe,xs),e(xs,pg),e(xs,Rs),e(Rs,mg),e(xs,hg),e(Xe,fg),e(Xe,Ue),e(Ue,ug),e(Ue,Sd),e(Sd,gg),e(Ue,_g),e(Ue,Wd),e(Wd,kg),e(Ue,Fg),e(Ue,Ud),e(Ud,yg),e(Ue,vg),e(Ue,Qd),e(Qd,bg),e(Ue,Tg),e(Ue,Hd),e(Hd,wg),e(Ue,$g),e(Ue,Vd),e(Vd,xg),e(Ue,Rg),e(Xe,Mg),e(Xe,vo),T(Ms,vo,null),e(vo,Eg),e(vo,mt),e(mt,zg),e(mt,bl),e(bl,jg),e(mt,Cg),e(mt,Kd),e(Kd,qg),e(mt,Pg),e(vo,Ag),T(gn,vo,null),e(vo,Lg),T(_n,vo,null),k(t,Gm,F),k(t,ht,F),e(ht,kn),e(kn,Jd),T(Es,Jd,null),e(ht,Og),e(ht,Bd),e(Bd,Ig),k(t,Xm,F),k(t,No,F),T(zs,No,null),e(No,Dg),e(No,ft),e(ft,Ng),e(ft,Gd),e(Gd,Sg),e(ft,Wg),e(ft,js),e(js,Ug),e(ft,Qg),e(No,Hg),e(No,bo),T(Cs,bo,null),e(bo,Vg),e(bo,ut),e(ut,Kg),e(ut,Tl),e(Tl,Jg),e(ut,Bg),e(ut,Xd),e(Xd,Gg),e(ut,Xg),e(bo,Yg),T(Fn,bo,null),e(bo,Zg),T(yn,bo,null),k(t,Ym,F),k(t,gt,F),e(gt,vn),e(vn,Yd),T(qs,Yd,null),e(gt,e_),e(gt,Zd),e(Zd,o_),k(t,Zm,F),k(t,So,F),T(Ps,So,null),e(So,t_),e(So,_t),e(_t,n_),e(_t,ec),e(ec,r_),e(_t,s_),e(_t,As),e(As,a_),e(_t,i_),e(So,l_),e(So,eo),T(Ls,eo,null),e(eo,d_),e(eo,kt),e(kt,c_),e(kt,wl),e(wl,p_),e(kt,m_),e(kt,oc),e(oc,h_),e(kt,f_),e(eo,u_),T(bn,eo,null),e(eo,g_),T(Tn,eo,null),e(eo,__),T(wn,eo,null),k(t,eh,F),k(t,Ft,F),e(Ft,$n),e($n,tc),T(Os,tc,null),e(Ft,k_),e(Ft,nc),e(nc,F_),k(t,oh,F),k(t,go,F),T(Is,go,null),e(go,y_),e(go,rc),e(rc,v_),e(go,b_),e(go,Ds),e(Ds,T_),e(Ds,Ns),e(Ns,w_),e(Ds,$_),e(go,x_),e(go,Se),T(Ss,Se,null),e(Se,R_),e(Se,yt),e(yt,M_),e(yt,$l),e($l,E_),e(yt,z_),e(yt,sc),e(sc,j_),e(yt,C_),e(Se,q_),T(xn,Se,null),e(Se,P_),T(Rn,Se,null),e(Se,A_),T(Mn,Se,null),e(Se,L_),T(En,Se,null),e(Se,O_),T(zn,Se,null),k(t,th,F),k(t,vt,F),e(vt,jn),e(jn,ac),T(Ws,ac,null),e(vt,I_),e(vt,ic),e(ic,D_),k(t,nh,F),k(t,_o,F),T(Us,_o,null),e(_o,N_),e(_o,lc),e(lc,S_),e(_o,W_),e(_o,Qs),e(Qs,U_),e(Qs,Hs),e(Hs,Q_),e(Qs,H_),e(_o,V_),e(_o,To),T(Vs,To,null),e(To,K_),e(To,bt),e(bt,J_),e(bt,xl),e(xl,B_),e(bt,G_),e(bt,dc),e(dc,X_),e(bt,Y_),e(To,Z_),T(Cn,To,null),e(To,ek),T(qn,To,null),k(t,rh,F),k(t,Tt,F),e(Tt,Pn),e(Pn,cc),T(Ks,cc,null),e(Tt,ok),e(Tt,pc),e(pc,tk),k(t,sh,F),k(t,ko,F),T(Js,ko,null),e(ko,nk),e(ko,mc),e(mc,rk),e(ko,sk),e(ko,Bs),e(Bs,ak),e(Bs,Gs),e(Gs,ik),e(Bs,lk),e(ko,dk),e(ko,oo),T(Xs,oo,null),e(oo,ck),e(oo,wt),e(wt,pk),e(wt,Rl),e(Rl,mk),e(wt,hk),e(wt,hc),e(hc,fk),e(wt,uk),e(oo,gk),T(An,oo,null),e(oo,_k),T(Ln,oo,null),e(oo,kk),T(On,oo,null),k(t,ah,F),k(t,$t,F),e($t,In),e(In,fc),T(Ys,fc,null),e($t,Fk),e($t,uc),e(uc,yk),k(t,ih,F),k(t,Fo,F),T(Zs,Fo,null),e(Fo,vk),e(Fo,xt),e(xt,bk),e(xt,gc),e(gc,Tk),e(xt,wk),e(xt,_c),e(_c,$k),e(xt,xk),e(Fo,Rk),e(Fo,ea),e(ea,Mk),e(ea,oa),e(oa,Ek),e(ea,zk),e(Fo,jk),e(Fo,to),T(ta,to,null),e(to,Ck),e(to,Rt),e(Rt,qk),e(Rt,Ml),e(Ml,Pk),e(Rt,Ak),e(Rt,kc),e(kc,Lk),e(Rt,Ok),e(to,Ik),T(Dn,to,null),e(to,Dk),T(Nn,to,null),e(to,Nk),T(Sn,to,null),k(t,lh,F),k(t,Mt,F),e(Mt,Wn),e(Wn,Fc),T(na,Fc,null),e(Mt,Sk),e(Mt,yc),e(yc,Wk),k(t,dh,F),k(t,Qe,F),T(ra,Qe,null),e(Qe,Uk),e(Qe,vc),e(vc,Qk),e(Qe,Hk),e(Qe,sa),e(sa,Vk),e(sa,El),e(El,Kk),e(sa,Jk),e(Qe,Bk),e(Qe,aa),e(aa,Gk),e(aa,ia),e(ia,Xk),e(aa,Yk),e(Qe,Zk),T(Un,Qe,null),e(Qe,eF),e(Qe,wo),T(la,wo,null),e(wo,oF),e(wo,Et),e(Et,tF),e(Et,zl),e(zl,nF),e(Et,rF),e(Et,bc),e(bc,sF),e(Et,aF),e(wo,iF),T(Qn,wo,null),e(wo,lF),T(Hn,wo,null),k(t,ch,F),k(t,zt,F),e(zt,Vn),e(Vn,Tc),T(da,Tc,null),e(zt,dF),e(zt,wc),e(wc,cF),k(t,ph,F),k(t,He,F),T(ca,He,null),e(He,pF),e(He,pa),e(pa,mF),e(pa,$c),e($c,hF),e(pa,fF),e(He,uF),e(He,ma),e(ma,gF),e(ma,jl),e(jl,_F),e(ma,kF),e(He,FF),e(He,ha),e(ha,yF),e(ha,fa),e(fa,vF),e(ha,bF),e(He,TF),T(Kn,He,null),e(He,wF),e(He,no),T(ua,no,null),e(no,$F),e(no,jt),e(jt,xF),e(jt,Cl),e(Cl,RF),e(jt,MF),e(jt,xc),e(xc,EF),e(jt,zF),e(no,jF),T(Jn,no,null),e(no,CF),T(Bn,no,null),e(no,qF),T(Gn,no,null),k(t,mh,F),k(t,Ct,F),e(Ct,Xn),e(Xn,Rc),T(ga,Rc,null),e(Ct,PF),e(Ct,Mc),e(Mc,AF),k(t,hh,F),k(t,Ve,F),T(_a,Ve,null),e(Ve,LF),e(Ve,ka),e(ka,OF),e(ka,Ec),e(Ec,IF),e(ka,DF),e(Ve,NF),e(Ve,Fa),e(Fa,SF),e(Fa,ql),e(ql,WF),e(Fa,UF),e(Ve,QF),e(Ve,ya),e(ya,HF),e(ya,va),e(va,VF),e(ya,KF),e(Ve,JF),T(Yn,Ve,null),e(Ve,BF),e(Ve,Yo),T(ba,Yo,null),e(Yo,GF),e(Yo,Ye),e(Ye,XF),e(Ye,zc),e(zc,YF),e(Ye,ZF),e(Ye,jc),e(jc,ey),e(Ye,oy),e(Ye,Cc),e(Cc,ty),e(Ye,ny),e(Ye,qc),e(qc,ry),e(Ye,sy),e(Ye,Pc),e(Pc,ay),e(Ye,iy),e(Yo,ly),T(Zn,Yo,null),k(t,fh,F),k(t,qt,F),e(qt,er),e(er,Ac),T(Ta,Ac,null),e(qt,dy),e(qt,Lc),e(Lc,cy),k(t,uh,F),k(t,Ke,F),T(wa,Ke,null),e(Ke,py),e(Ke,Oc),e(Oc,my),e(Ke,hy),e(Ke,$a),e($a,fy),e($a,Pl),e(Pl,uy),e($a,gy),e(Ke,_y),e(Ke,xa),e(xa,ky),e(xa,Ra),e(Ra,Fy),e(xa,yy),e(Ke,vy),T(or,Ke,null),e(Ke,by),e(Ke,ro),T(Ma,ro,null),e(ro,Ty),e(ro,Pt),e(Pt,wy),e(Pt,Al),e(Al,$y),e(Pt,xy),e(Pt,Ic),e(Ic,Ry),e(Pt,My),e(ro,Ey),T(tr,ro,null),e(ro,zy),T(nr,ro,null),e(ro,jy),T(rr,ro,null),k(t,gh,F),k(t,At,F),e(At,sr),e(sr,Dc),T(Ea,Dc,null),e(At,Cy),e(At,Nc),e(Nc,qy),k(t,_h,F),k(t,Je,F),T(za,Je,null),e(Je,Py),e(Je,Sc),e(Sc,Ay),e(Je,Ly),e(Je,ja),e(ja,Oy),e(ja,Ll),e(Ll,Iy),e(ja,Dy),e(Je,Ny),e(Je,Ca),e(Ca,Sy),e(Ca,qa),e(qa,Wy),e(Ca,Uy),e(Je,Qy),T(ar,Je,null),e(Je,Hy),e(Je,$o),T(Pa,$o,null),e($o,Vy),e($o,Lt),e(Lt,Ky),e(Lt,Ol),e(Ol,Jy),e(Lt,By),e(Lt,Wc),e(Wc,Gy),e(Lt,Xy),e($o,Yy),T(ir,$o,null),e($o,Zy),T(lr,$o,null),k(t,kh,F),k(t,Ot,F),e(Ot,dr),e(dr,Uc),T(Aa,Uc,null),e(Ot,ev),e(Ot,Qc),e(Qc,ov),k(t,Fh,F),k(t,Be,F),T(La,Be,null),e(Be,tv),e(Be,Hc),e(Hc,nv),e(Be,rv),e(Be,Oa),e(Oa,sv),e(Oa,Il),e(Il,av),e(Oa,iv),e(Be,lv),e(Be,Ia),e(Ia,dv),e(Ia,Da),e(Da,cv),e(Ia,pv),e(Be,mv),T(cr,Be,null),e(Be,hv),e(Be,so),T(Na,so,null),e(so,fv),e(so,It),e(It,uv),e(It,Dl),e(Dl,gv),e(It,_v),e(It,Vc),e(Vc,kv),e(It,Fv),e(so,yv),T(pr,so,null),e(so,vv),T(mr,so,null),e(so,bv),T(hr,so,null),k(t,yh,F),k(t,Dt,F),e(Dt,fr),e(fr,Kc),T(Sa,Kc,null),e(Dt,Tv),e(Dt,Jc),e(Jc,wv),k(t,vh,F),k(t,Ge,F),T(Wa,Ge,null),e(Ge,$v),e(Ge,Nt),e(Nt,xv),e(Nt,Bc),e(Bc,Rv),e(Nt,Mv),e(Nt,Gc),e(Gc,Ev),e(Nt,zv),e(Ge,jv),e(Ge,Ua),e(Ua,Cv),e(Ua,Nl),e(Nl,qv),e(Ua,Pv),e(Ge,Av),e(Ge,Qa),e(Qa,Lv),e(Qa,Ha),e(Ha,Ov),e(Qa,Iv),e(Ge,Dv),T(ur,Ge,null),e(Ge,Nv),e(Ge,ao),T(Va,ao,null),e(ao,Sv),e(ao,St),e(St,Wv),e(St,Sl),e(Sl,Uv),e(St,Qv),e(St,Xc),e(Xc,Hv),e(St,Vv),e(ao,Kv),T(gr,ao,null),e(ao,Jv),T(_r,ao,null),e(ao,Bv),T(kr,ao,null),k(t,bh,F),k(t,Wt,F),e(Wt,Fr),e(Fr,Yc),T(Ka,Yc,null),e(Wt,Gv),e(Wt,Zc),e(Zc,Xv),k(t,Th,F),k(t,Pe,F),T(Ja,Pe,null),e(Pe,Yv),e(Pe,ep),e(ep,Zv),e(Pe,eb),e(Pe,Ba),e(Ba,ob),e(Ba,Wl),e(Wl,tb),e(Ba,nb),e(Pe,rb),e(Pe,Ga),e(Ga,sb),e(Ga,Xa),e(Xa,ab),e(Ga,ib),e(Pe,lb),e(Pe,op),e(op,db),e(Pe,cb),e(Pe,Wo),e(Wo,tp),e(tp,Ya),e(Ya,pb),e(Wo,mb),e(Wo,np),e(np,Za),e(Za,hb),e(Wo,fb),e(Wo,rp),e(rp,ei),e(ei,ub),e(Wo,gb),e(Wo,sp),e(sp,oi),e(oi,_b),e(Pe,kb),e(Pe,xo),T(ti,xo,null),e(xo,Fb),e(xo,Ut),e(Ut,yb),e(Ut,ap),e(ap,vb),e(Ut,bb),e(Ut,ip),e(ip,Tb),e(Ut,wb),e(xo,$b),T(yr,xo,null),e(xo,xb),T(vr,xo,null),k(t,wh,F),k(t,Qt,F),e(Qt,br),e(br,lp),T(ni,lp,null),e(Qt,Rb),e(Qt,dp),e(dp,Mb),k(t,$h,F),k(t,Ae,F),T(ri,Ae,null),e(Ae,Eb),e(Ae,si),e(si,zb),e(si,cp),e(cp,jb),e(si,Cb),e(Ae,qb),e(Ae,ai),e(ai,Pb),e(ai,Ul),e(Ul,Ab),e(ai,Lb),e(Ae,Ob),e(Ae,ii),e(ii,Ib),e(ii,li),e(li,Db),e(ii,Nb),e(Ae,Sb),e(Ae,pp),e(pp,Wb),e(Ae,Ub),e(Ae,Uo),e(Uo,mp),e(mp,di),e(di,Qb),e(Uo,Hb),e(Uo,hp),e(hp,ci),e(ci,Vb),e(Uo,Kb),e(Uo,fp),e(fp,pi),e(pi,Jb),e(Uo,Bb),e(Uo,up),e(up,mi),e(mi,Gb),e(Ae,Xb),e(Ae,Ro),T(hi,Ro,null),e(Ro,Yb),e(Ro,Ht),e(Ht,Zb),e(Ht,gp),e(gp,eT),e(Ht,oT),e(Ht,_p),e(_p,tT),e(Ht,nT),e(Ro,rT),T(Tr,Ro,null),e(Ro,sT),T(wr,Ro,null),k(t,xh,F),k(t,Vt,F),e(Vt,$r),e($r,kp),T(fi,kp,null),e(Vt,aT),e(Vt,Fp),e(Fp,iT),k(t,Rh,F),k(t,Le,F),T(ui,Le,null),e(Le,lT),e(Le,yp),e(yp,dT),e(Le,cT),e(Le,gi),e(gi,pT),e(gi,Ql),e(Ql,mT),e(gi,hT),e(Le,fT),e(Le,_i),e(_i,uT),e(_i,ki),e(ki,gT),e(_i,_T),e(Le,kT),e(Le,vp),e(vp,FT),e(Le,yT),e(Le,Qo),e(Qo,bp),e(bp,Fi),e(Fi,vT),e(Qo,bT),e(Qo,Tp),e(Tp,yi),e(yi,TT),e(Qo,wT),e(Qo,wp),e(wp,vi),e(vi,$T),e(Qo,xT),e(Qo,$p),e($p,bi),e(bi,RT),e(Le,MT),e(Le,Mo),T(Ti,Mo,null),e(Mo,ET),e(Mo,Kt),e(Kt,zT),e(Kt,xp),e(xp,jT),e(Kt,CT),e(Kt,Rp),e(Rp,qT),e(Kt,PT),e(Mo,AT),T(xr,Mo,null),e(Mo,LT),T(Rr,Mo,null),k(t,Mh,F),k(t,Jt,F),e(Jt,Mr),e(Mr,Mp),T(wi,Mp,null),e(Jt,OT),e(Jt,Ep),e(Ep,IT),k(t,Eh,F),k(t,Oe,F),T($i,Oe,null),e(Oe,DT),e(Oe,zp),e(zp,NT),e(Oe,ST),e(Oe,xi),e(xi,WT),e(xi,Hl),e(Hl,UT),e(xi,QT),e(Oe,HT),e(Oe,Ri),e(Ri,VT),e(Ri,Mi),e(Mi,KT),e(Ri,JT),e(Oe,BT),e(Oe,jp),e(jp,GT),e(Oe,XT),e(Oe,Ho),e(Ho,Cp),e(Cp,Ei),e(Ei,YT),e(Ho,ZT),e(Ho,qp),e(qp,zi),e(zi,ew),e(Ho,ow),e(Ho,Pp),e(Pp,ji),e(ji,tw),e(Ho,nw),e(Ho,Ap),e(Ap,Ci),e(Ci,rw),e(Oe,sw),e(Oe,Eo),T(qi,Eo,null),e(Eo,aw),e(Eo,Bt),e(Bt,iw),e(Bt,Lp),e(Lp,lw),e(Bt,dw),e(Bt,Op),e(Op,cw),e(Bt,pw),e(Eo,mw),T(Er,Eo,null),e(Eo,hw),T(zr,Eo,null),k(t,zh,F),k(t,Gt,F),e(Gt,jr),e(jr,Ip),T(Pi,Ip,null),e(Gt,fw),e(Gt,Dp),e(Dp,uw),k(t,jh,F),k(t,Ie,F),T(Ai,Ie,null),e(Ie,gw),e(Ie,Np),e(Np,_w),e(Ie,kw),e(Ie,Li),e(Li,Fw),e(Li,Vl),e(Vl,yw),e(Li,vw),e(Ie,bw),e(Ie,Oi),e(Oi,Tw),e(Oi,Ii),e(Ii,ww),e(Oi,$w),e(Ie,xw),e(Ie,Sp),e(Sp,Rw),e(Ie,Mw),e(Ie,Vo),e(Vo,Wp),e(Wp,Di),e(Di,Ew),e(Vo,zw),e(Vo,Up),e(Up,Ni),e(Ni,jw),e(Vo,Cw),e(Vo,Qp),e(Qp,Si),e(Si,qw),e(Vo,Pw),e(Vo,Hp),e(Hp,Wi),e(Wi,Aw),e(Ie,Lw),e(Ie,zo),T(Ui,zo,null),e(zo,Ow),e(zo,Xt),e(Xt,Iw),e(Xt,Vp),e(Vp,Dw),e(Xt,Nw),e(Xt,Kp),e(Kp,Sw),e(Xt,Ww),e(zo,Uw),T(Cr,zo,null),e(zo,Qw),T(qr,zo,null),k(t,Ch,F),k(t,Yt,F),e(Yt,Pr),e(Pr,Jp),T(Qi,Jp,null),e(Yt,Hw),e(Yt,Bp),e(Bp,Vw),k(t,qh,F),k(t,De,F),T(Hi,De,null),e(De,Kw),e(De,Zt),e(Zt,Jw),e(Zt,Gp),e(Gp,Bw),e(Zt,Gw),e(Zt,Xp),e(Xp,Xw),e(Zt,Yw),e(De,Zw),e(De,Vi),e(Vi,e$),e(Vi,Kl),e(Kl,o$),e(Vi,t$),e(De,n$),e(De,Ki),e(Ki,r$),e(Ki,Ji),e(Ji,s$),e(Ki,a$),e(De,i$),e(De,Yp),e(Yp,l$),e(De,d$),e(De,Ko),e(Ko,Zp),e(Zp,Bi),e(Bi,c$),e(Ko,p$),e(Ko,em),e(em,Gi),e(Gi,m$),e(Ko,h$),e(Ko,om),e(om,Xi),e(Xi,f$),e(Ko,u$),e(Ko,tm),e(tm,Yi),e(Yi,g$),e(De,_$),e(De,jo),T(Zi,jo,null),e(jo,k$),e(jo,en),e(en,F$),e(en,nm),e(nm,y$),e(en,v$),e(en,rm),e(rm,b$),e(en,T$),e(jo,w$),T(Ar,jo,null),e(jo,$$),T(Lr,jo,null),Ph=!0},p(t,[F]){const el={};F&2&&(el.$$scope={dirty:F,ctx:t}),an.$set(el);const sm={};F&2&&(sm.$$scope={dirty:F,ctx:t}),dn.$set(sm);const am={};F&2&&(am.$$scope={dirty:F,ctx:t}),pn.$set(am);const im={};F&2&&(im.$$scope={dirty:F,ctx:t}),fn.$set(im);const ol={};F&2&&(ol.$$scope={dirty:F,ctx:t}),gn.$set(ol);const lm={};F&2&&(lm.$$scope={dirty:F,ctx:t}),_n.$set(lm);const dm={};F&2&&(dm.$$scope={dirty:F,ctx:t}),Fn.$set(dm);const cm={};F&2&&(cm.$$scope={dirty:F,ctx:t}),yn.$set(cm);const tl={};F&2&&(tl.$$scope={dirty:F,ctx:t}),bn.$set(tl);const pm={};F&2&&(pm.$$scope={dirty:F,ctx:t}),Tn.$set(pm);const mm={};F&2&&(mm.$$scope={dirty:F,ctx:t}),wn.$set(mm);const hm={};F&2&&(hm.$$scope={dirty:F,ctx:t}),xn.$set(hm);const fm={};F&2&&(fm.$$scope={dirty:F,ctx:t}),Rn.$set(fm);const um={};F&2&&(um.$$scope={dirty:F,ctx:t}),Mn.$set(um);const gm={};F&2&&(gm.$$scope={dirty:F,ctx:t}),En.$set(gm);const _m={};F&2&&(_m.$$scope={dirty:F,ctx:t}),zn.$set(_m);const on={};F&2&&(on.$$scope={dirty:F,ctx:t}),Cn.$set(on);const km={};F&2&&(km.$$scope={dirty:F,ctx:t}),qn.$set(km);const Fm={};F&2&&(Fm.$$scope={dirty:F,ctx:t}),An.$set(Fm);const nl={};F&2&&(nl.$$scope={dirty:F,ctx:t}),Ln.$set(nl);const ym={};F&2&&(ym.$$scope={dirty:F,ctx:t}),On.$set(ym);const vm={};F&2&&(vm.$$scope={dirty:F,ctx:t}),Dn.$set(vm);const bm={};F&2&&(bm.$$scope={dirty:F,ctx:t}),Nn.$set(bm);const Jo={};F&2&&(Jo.$$scope={dirty:F,ctx:t}),Sn.$set(Jo);const tn={};F&2&&(tn.$$scope={dirty:F,ctx:t}),Un.$set(tn);const Tm={};F&2&&(Tm.$$scope={dirty:F,ctx:t}),Qn.$set(Tm);const wm={};F&2&&(wm.$$scope={dirty:F,ctx:t}),Hn.$set(wm);const nn={};F&2&&(nn.$$scope={dirty:F,ctx:t}),Kn.$set(nn);const $m={};F&2&&($m.$$scope={dirty:F,ctx:t}),Jn.$set($m);const xm={};F&2&&(xm.$$scope={dirty:F,ctx:t}),Bn.$set(xm);const rl={};F&2&&(rl.$$scope={dirty:F,ctx:t}),Gn.$set(rl);const Rm={};F&2&&(Rm.$$scope={dirty:F,ctx:t}),Yn.$set(Rm);const Mm={};F&2&&(Mm.$$scope={dirty:F,ctx:t}),Zn.$set(Mm);const Em={};F&2&&(Em.$$scope={dirty:F,ctx:t}),or.$set(Em);const Ne={};F&2&&(Ne.$$scope={dirty:F,ctx:t}),tr.$set(Ne);const sl={};F&2&&(sl.$$scope={dirty:F,ctx:t}),nr.$set(sl);const zm={};F&2&&(zm.$$scope={dirty:F,ctx:t}),rr.$set(zm);const al={};F&2&&(al.$$scope={dirty:F,ctx:t}),ar.$set(al);const jm={};F&2&&(jm.$$scope={dirty:F,ctx:t}),ir.$set(jm);const rn={};F&2&&(rn.$$scope={dirty:F,ctx:t}),lr.$set(rn);const Cm={};F&2&&(Cm.$$scope={dirty:F,ctx:t}),cr.$set(Cm);const il={};F&2&&(il.$$scope={dirty:F,ctx:t}),pr.$set(il);const Jl={};F&2&&(Jl.$$scope={dirty:F,ctx:t}),mr.$set(Jl);const qm={};F&2&&(qm.$$scope={dirty:F,ctx:t}),hr.$set(qm);const Bl={};F&2&&(Bl.$$scope={dirty:F,ctx:t}),ur.$set(Bl);const Pm={};F&2&&(Pm.$$scope={dirty:F,ctx:t}),gr.$set(Pm);const ll={};F&2&&(ll.$$scope={dirty:F,ctx:t}),_r.$set(ll);const dl={};F&2&&(dl.$$scope={dirty:F,ctx:t}),kr.$set(dl);const Am={};F&2&&(Am.$$scope={dirty:F,ctx:t}),yr.$set(Am);const Bo={};F&2&&(Bo.$$scope={dirty:F,ctx:t}),vr.$set(Bo);const Lm={};F&2&&(Lm.$$scope={dirty:F,ctx:t}),Tr.$set(Lm);const sn={};F&2&&(sn.$$scope={dirty:F,ctx:t}),wr.$set(sn);const Om={};F&2&&(Om.$$scope={dirty:F,ctx:t}),xr.$set(Om);const Im={};F&2&&(Im.$$scope={dirty:F,ctx:t}),Rr.$set(Im);const Dm={};F&2&&(Dm.$$scope={dirty:F,ctx:t}),Er.$set(Dm);const cl={};F&2&&(cl.$$scope={dirty:F,ctx:t}),zr.$set(cl);const Nm={};F&2&&(Nm.$$scope={dirty:F,ctx:t}),Cr.$set(Nm);const Sm={};F&2&&(Sm.$$scope={dirty:F,ctx:t}),qr.$set(Sm);const Wm={};F&2&&(Wm.$$scope={dirty:F,ctx:t}),Ar.$set(Wm);const Ze={};F&2&&(Ze.$$scope={dirty:F,ctx:t}),Lr.$set(Ze)},i(t){Ph||(w(l.$$.fragment,t),w(ee.$$.fragment,t),w(we.$$.fragment,t),w(I.$$.fragment,t),w(an.$$.fragment,t),w(ss.$$.fragment,t),w(as.$$.fragment,t),w(dn.$$.fragment,t),w(cs.$$.fragment,t),w(ms.$$.fragment,t),w(fs.$$.fragment,t),w(pn.$$.fragment,t),w(us.$$.fragment,t),w(gs.$$.fragment,t),w(_s.$$.fragment,t),w(fn.$$.fragment,t),w(ys.$$.fragment,t),w(bs.$$.fragment,t),w(Ts.$$.fragment,t),w(Ms.$$.fragment,t),w(gn.$$.fragment,t),w(_n.$$.fragment,t),w(Es.$$.fragment,t),w(zs.$$.fragment,t),w(Cs.$$.fragment,t),w(Fn.$$.fragment,t),w(yn.$$.fragment,t),w(qs.$$.fragment,t),w(Ps.$$.fragment,t),w(Ls.$$.fragment,t),w(bn.$$.fragment,t),w(Tn.$$.fragment,t),w(wn.$$.fragment,t),w(Os.$$.fragment,t),w(Is.$$.fragment,t),w(Ss.$$.fragment,t),w(xn.$$.fragment,t),w(Rn.$$.fragment,t),w(Mn.$$.fragment,t),w(En.$$.fragment,t),w(zn.$$.fragment,t),w(Ws.$$.fragment,t),w(Us.$$.fragment,t),w(Vs.$$.fragment,t),w(Cn.$$.fragment,t),w(qn.$$.fragment,t),w(Ks.$$.fragment,t),w(Js.$$.fragment,t),w(Xs.$$.fragment,t),w(An.$$.fragment,t),w(Ln.$$.fragment,t),w(On.$$.fragment,t),w(Ys.$$.fragment,t),w(Zs.$$.fragment,t),w(ta.$$.fragment,t),w(Dn.$$.fragment,t),w(Nn.$$.fragment,t),w(Sn.$$.fragment,t),w(na.$$.fragment,t),w(ra.$$.fragment,t),w(Un.$$.fragment,t),w(la.$$.fragment,t),w(Qn.$$.fragment,t),w(Hn.$$.fragment,t),w(da.$$.fragment,t),w(ca.$$.fragment,t),w(Kn.$$.fragment,t),w(ua.$$.fragment,t),w(Jn.$$.fragment,t),w(Bn.$$.fragment,t),w(Gn.$$.fragment,t),w(ga.$$.fragment,t),w(_a.$$.fragment,t),w(Yn.$$.fragment,t),w(ba.$$.fragment,t),w(Zn.$$.fragment,t),w(Ta.$$.fragment,t),w(wa.$$.fragment,t),w(or.$$.fragment,t),w(Ma.$$.fragment,t),w(tr.$$.fragment,t),w(nr.$$.fragment,t),w(rr.$$.fragment,t),w(Ea.$$.fragment,t),w(za.$$.fragment,t),w(ar.$$.fragment,t),w(Pa.$$.fragment,t),w(ir.$$.fragment,t),w(lr.$$.fragment,t),w(Aa.$$.fragment,t),w(La.$$.fragment,t),w(cr.$$.fragment,t),w(Na.$$.fragment,t),w(pr.$$.fragment,t),w(mr.$$.fragment,t),w(hr.$$.fragment,t),w(Sa.$$.fragment,t),w(Wa.$$.fragment,t),w(ur.$$.fragment,t),w(Va.$$.fragment,t),w(gr.$$.fragment,t),w(_r.$$.fragment,t),w(kr.$$.fragment,t),w(Ka.$$.fragment,t),w(Ja.$$.fragment,t),w(ti.$$.fragment,t),w(yr.$$.fragment,t),w(vr.$$.fragment,t),w(ni.$$.fragment,t),w(ri.$$.fragment,t),w(hi.$$.fragment,t),w(Tr.$$.fragment,t),w(wr.$$.fragment,t),w(fi.$$.fragment,t),w(ui.$$.fragment,t),w(Ti.$$.fragment,t),w(xr.$$.fragment,t),w(Rr.$$.fragment,t),w(wi.$$.fragment,t),w($i.$$.fragment,t),w(qi.$$.fragment,t),w(Er.$$.fragment,t),w(zr.$$.fragment,t),w(Pi.$$.fragment,t),w(Ai.$$.fragment,t),w(Ui.$$.fragment,t),w(Cr.$$.fragment,t),w(qr.$$.fragment,t),w(Qi.$$.fragment,t),w(Hi.$$.fragment,t),w(Zi.$$.fragment,t),w(Ar.$$.fragment,t),w(Lr.$$.fragment,t),Ph=!0)},o(t){$(l.$$.fragment,t),$(ee.$$.fragment,t),$(we.$$.fragment,t),$(I.$$.fragment,t),$(an.$$.fragment,t),$(ss.$$.fragment,t),$(as.$$.fragment,t),$(dn.$$.fragment,t),$(cs.$$.fragment,t),$(ms.$$.fragment,t),$(fs.$$.fragment,t),$(pn.$$.fragment,t),$(us.$$.fragment,t),$(gs.$$.fragment,t),$(_s.$$.fragment,t),$(fn.$$.fragment,t),$(ys.$$.fragment,t),$(bs.$$.fragment,t),$(Ts.$$.fragment,t),$(Ms.$$.fragment,t),$(gn.$$.fragment,t),$(_n.$$.fragment,t),$(Es.$$.fragment,t),$(zs.$$.fragment,t),$(Cs.$$.fragment,t),$(Fn.$$.fragment,t),$(yn.$$.fragment,t),$(qs.$$.fragment,t),$(Ps.$$.fragment,t),$(Ls.$$.fragment,t),$(bn.$$.fragment,t),$(Tn.$$.fragment,t),$(wn.$$.fragment,t),$(Os.$$.fragment,t),$(Is.$$.fragment,t),$(Ss.$$.fragment,t),$(xn.$$.fragment,t),$(Rn.$$.fragment,t),$(Mn.$$.fragment,t),$(En.$$.fragment,t),$(zn.$$.fragment,t),$(Ws.$$.fragment,t),$(Us.$$.fragment,t),$(Vs.$$.fragment,t),$(Cn.$$.fragment,t),$(qn.$$.fragment,t),$(Ks.$$.fragment,t),$(Js.$$.fragment,t),$(Xs.$$.fragment,t),$(An.$$.fragment,t),$(Ln.$$.fragment,t),$(On.$$.fragment,t),$(Ys.$$.fragment,t),$(Zs.$$.fragment,t),$(ta.$$.fragment,t),$(Dn.$$.fragment,t),$(Nn.$$.fragment,t),$(Sn.$$.fragment,t),$(na.$$.fragment,t),$(ra.$$.fragment,t),$(Un.$$.fragment,t),$(la.$$.fragment,t),$(Qn.$$.fragment,t),$(Hn.$$.fragment,t),$(da.$$.fragment,t),$(ca.$$.fragment,t),$(Kn.$$.fragment,t),$(ua.$$.fragment,t),$(Jn.$$.fragment,t),$(Bn.$$.fragment,t),$(Gn.$$.fragment,t),$(ga.$$.fragment,t),$(_a.$$.fragment,t),$(Yn.$$.fragment,t),$(ba.$$.fragment,t),$(Zn.$$.fragment,t),$(Ta.$$.fragment,t),$(wa.$$.fragment,t),$(or.$$.fragment,t),$(Ma.$$.fragment,t),$(tr.$$.fragment,t),$(nr.$$.fragment,t),$(rr.$$.fragment,t),$(Ea.$$.fragment,t),$(za.$$.fragment,t),$(ar.$$.fragment,t),$(Pa.$$.fragment,t),$(ir.$$.fragment,t),$(lr.$$.fragment,t),$(Aa.$$.fragment,t),$(La.$$.fragment,t),$(cr.$$.fragment,t),$(Na.$$.fragment,t),$(pr.$$.fragment,t),$(mr.$$.fragment,t),$(hr.$$.fragment,t),$(Sa.$$.fragment,t),$(Wa.$$.fragment,t),$(ur.$$.fragment,t),$(Va.$$.fragment,t),$(gr.$$.fragment,t),$(_r.$$.fragment,t),$(kr.$$.fragment,t),$(Ka.$$.fragment,t),$(Ja.$$.fragment,t),$(ti.$$.fragment,t),$(yr.$$.fragment,t),$(vr.$$.fragment,t),$(ni.$$.fragment,t),$(ri.$$.fragment,t),$(hi.$$.fragment,t),$(Tr.$$.fragment,t),$(wr.$$.fragment,t),$(fi.$$.fragment,t),$(ui.$$.fragment,t),$(Ti.$$.fragment,t),$(xr.$$.fragment,t),$(Rr.$$.fragment,t),$(wi.$$.fragment,t),$($i.$$.fragment,t),$(qi.$$.fragment,t),$(Er.$$.fragment,t),$(zr.$$.fragment,t),$(Pi.$$.fragment,t),$(Ai.$$.fragment,t),$(Ui.$$.fragment,t),$(Cr.$$.fragment,t),$(qr.$$.fragment,t),$(Qi.$$.fragment,t),$(Hi.$$.fragment,t),$(Zi.$$.fragment,t),$(Ar.$$.fragment,t),$(Lr.$$.fragment,t),Ph=!1},d(t){o(d),t&&o(g),t&&o(c),x(l),t&&o(B),t&&o(z),x(ee),t&&o(pe),t&&o(J),t&&o(q),t&&o(ne),t&&o(me),t&&o(re),t&&o(he),t&&o(C),t&&o(U),t&&o(se),t&&o(fe),t&&o(X),t&&o(Me),t&&o(be),x(we),t&&o(Ee),t&&o(ae),x(I),x(an),t&&o(Qm),t&&o(lt),x(ss),t&&o(Hm),t&&o(qe),x(as),x(dn),x(cs),x(ms),x(fs),x(pn),x(us),t&&o(Vm),t&&o(ct),x(gs),t&&o(Km),t&&o(We),x(_s),x(fn),x(ys),t&&o(Jm),t&&o(pt),x(bs),t&&o(Bm),t&&o(Xe),x(Ts),x(Ms),x(gn),x(_n),t&&o(Gm),t&&o(ht),x(Es),t&&o(Xm),t&&o(No),x(zs),x(Cs),x(Fn),x(yn),t&&o(Ym),t&&o(gt),x(qs),t&&o(Zm),t&&o(So),x(Ps),x(Ls),x(bn),x(Tn),x(wn),t&&o(eh),t&&o(Ft),x(Os),t&&o(oh),t&&o(go),x(Is),x(Ss),x(xn),x(Rn),x(Mn),x(En),x(zn),t&&o(th),t&&o(vt),x(Ws),t&&o(nh),t&&o(_o),x(Us),x(Vs),x(Cn),x(qn),t&&o(rh),t&&o(Tt),x(Ks),t&&o(sh),t&&o(ko),x(Js),x(Xs),x(An),x(Ln),x(On),t&&o(ah),t&&o($t),x(Ys),t&&o(ih),t&&o(Fo),x(Zs),x(ta),x(Dn),x(Nn),x(Sn),t&&o(lh),t&&o(Mt),x(na),t&&o(dh),t&&o(Qe),x(ra),x(Un),x(la),x(Qn),x(Hn),t&&o(ch),t&&o(zt),x(da),t&&o(ph),t&&o(He),x(ca),x(Kn),x(ua),x(Jn),x(Bn),x(Gn),t&&o(mh),t&&o(Ct),x(ga),t&&o(hh),t&&o(Ve),x(_a),x(Yn),x(ba),x(Zn),t&&o(fh),t&&o(qt),x(Ta),t&&o(uh),t&&o(Ke),x(wa),x(or),x(Ma),x(tr),x(nr),x(rr),t&&o(gh),t&&o(At),x(Ea),t&&o(_h),t&&o(Je),x(za),x(ar),x(Pa),x(ir),x(lr),t&&o(kh),t&&o(Ot),x(Aa),t&&o(Fh),t&&o(Be),x(La),x(cr),x(Na),x(pr),x(mr),x(hr),t&&o(yh),t&&o(Dt),x(Sa),t&&o(vh),t&&o(Ge),x(Wa),x(ur),x(Va),x(gr),x(_r),x(kr),t&&o(bh),t&&o(Wt),x(Ka),t&&o(Th),t&&o(Pe),x(Ja),x(ti),x(yr),x(vr),t&&o(wh),t&&o(Qt),x(ni),t&&o($h),t&&o(Ae),x(ri),x(hi),x(Tr),x(wr),t&&o(xh),t&&o(Vt),x(fi),t&&o(Rh),t&&o(Le),x(ui),x(Ti),x(xr),x(Rr),t&&o(Mh),t&&o(Jt),x(wi),t&&o(Eh),t&&o(Oe),x($i),x(qi),x(Er),x(zr),t&&o(zh),t&&o(Gt),x(Pi),t&&o(jh),t&&o(Ie),x(Ai),x(Ui),x(Cr),x(qr),t&&o(Ch),t&&o(Yt),x(Qi),t&&o(qh),t&&o(De),x(Hi),x(Zi),x(Ar),x(Lr)}}}const GR={local:"roformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.RoFormerConfig",title:"RoFormerConfig"},{local:"transformers.RoFormerTokenizer",title:"RoFormerTokenizer"},{local:"transformers.RoFormerTokenizerFast",title:"RoFormerTokenizerFast"},{local:"transformers.RoFormerModel",title:"RoFormerModel"},{local:"transformers.RoFormerForCausalLM",title:"RoFormerForCausalLM"},{local:"transformers.RoFormerForMaskedLM",title:"RoFormerForMaskedLM"},{local:"transformers.RoFormerForSequenceClassification",title:"RoFormerForSequenceClassification"},{local:"transformers.RoFormerForMultipleChoice",title:"RoFormerForMultipleChoice"},{local:"transformers.RoFormerForTokenClassification",title:"RoFormerForTokenClassification"},{local:"transformers.RoFormerForQuestionAnswering",title:"RoFormerForQuestionAnswering"},{local:"transformers.TFRoFormerModel",title:"TFRoFormerModel"},{local:"transformers.TFRoFormerForMaskedLM",title:"TFRoFormerForMaskedLM"},{local:"transformers.TFRoFormerForCausalLM",title:"TFRoFormerForCausalLM"},{local:"transformers.TFRoFormerForSequenceClassification",title:"TFRoFormerForSequenceClassification"},{local:"transformers.TFRoFormerForMultipleChoice",title:"TFRoFormerForMultipleChoice"},{local:"transformers.TFRoFormerForTokenClassification",title:"TFRoFormerForTokenClassification"},{local:"transformers.TFRoFormerForQuestionAnswering",title:"TFRoFormerForQuestionAnswering"},{local:"transformers.FlaxRoFormerModel",title:"FlaxRoFormerModel"},{local:"transformers.FlaxRoFormerForMaskedLM",title:"FlaxRoFormerForMaskedLM"},{local:"transformers.FlaxRoFormerForSequenceClassification",title:"FlaxRoFormerForSequenceClassification"},{local:"transformers.FlaxRoFormerForMultipleChoice",title:"FlaxRoFormerForMultipleChoice"},{local:"transformers.FlaxRoFormerForTokenClassification",title:"FlaxRoFormerForTokenClassification"},{local:"transformers.FlaxRoFormerForQuestionAnswering",title:"FlaxRoFormerForQuestionAnswering"}],title:"RoFormer"};function XR(R){return Wx(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class rM extends Ix{constructor(d){super();Dx(this,d,XR,BR,Nx,{})}}export{rM as default,GR as metadata};
