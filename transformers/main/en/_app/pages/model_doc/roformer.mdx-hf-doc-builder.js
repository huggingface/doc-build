import{S as Dx,i as Ix,s as Nx,e as r,k as m,w as b,t,M as Sx,c as a,d as o,m as h,a as i,x as v,h as n,b as u,G as e,g as _,y as w,q as T,o as $,B as x,v as Wx,L as pe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Qe}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as me}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as He}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ux(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerModel, RoFormerConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Kx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
tokenizer.tokenize("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>)
<span class="hljs-comment"># [&#x27;\u4ECA&#x27;, &#x27;\u5929&#x27;, &#x27;\u5929&#x27;, &#x27;\u6C14&#x27;, &#x27;\u975E\u5E38&#x27;, &#x27;\u597D&#x27;, &#x27;\u3002&#x27;]</span>`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Qx(E){let d,g,c,f,k;return f=new me({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=t("sequence pair mask has the following format:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"sequence pair mask has the following format:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Hx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizerFast

tokenizer = RoFormerTokenizerFast.from_pretrained("junnyu/roformer_chinese_base")
tokenizer.tokenize("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizerFast.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>)
<span class="hljs-comment"># [&#x27;\u4ECA&#x27;, &#x27;\u5929&#x27;, &#x27;\u5929&#x27;, &#x27;\u6C14&#x27;, &#x27;\u975E\u5E38&#x27;, &#x27;\u597D&#x27;, &#x27;\u3002&#x27;]</span>`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Bx(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function Vx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, RoFormerModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Jx(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function Gx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, RoFormerForCausalLM, RoFormerConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Xx(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function Yx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, RoFormerForMaskedLM
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
`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Zx(E){let d,g;return d=new me({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function eR(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function oR(E){let d,g,c,f,k;return f=new me({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=t("Example of single-label classification:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example of single-label classification:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function tR(E){let d,g;return d=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function nR(E){let d,g,c,f,k;return f=new me({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=t("Example of multi-label classification:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example of multi-label classification:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function sR(E){let d,g;return d=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function rR(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function aR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, RoFormerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function iR(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function lR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, RoFormerForTokenClassification
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
`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function dR(E){let d,g;return d=new me({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function cR(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function pR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, RoFormerForQuestionAnswering
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
`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function mR(E){let d,g;return d=new me({props:{code:`# target is "nice puppet"
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
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function hR(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,H,xe,_e,N,Re,ie,V,Ee,ke,W,Me,Fe,U,he,je,te,C,A,ye,K,fe,ze,B,ne,Ce,q,qe,J,le,Pe,G,be,re,O,ue,S,Ae,oe,L,ve,P,de,Le;return{c(){d=r("p"),g=t("TensorFlow models and layers in "),c=r("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=r("ul"),j=r("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=r("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=r("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),Ee=t("fit()"),ke=t(" and "),W=r("code"),Me=t("predict()"),Fe=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=r("ul"),A=r("li"),ye=t("a single Tensor with "),K=r("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),B=r("code"),ne=t("model(input_ids)"),Ce=m(),q=r("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=r("code"),be=t("model([input_ids, attention_mask, token_type_ids])"),re=m(),O=r("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=r("p"),ve=t(`Note that when creating models and layers with
`),P=r("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(y),p=a(y,"UL",{});var se=i(p);j=a(se,"LI",{});var Be=i(j);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(o),ge=h(se),I=a(se,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),se.forEach(o),ee=h(y),R=a(y,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(z,"CODE",{});var Ve=i(H);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),Fe=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(y),C=a(y,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);ye=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),B=a(X,"CODE",{});var Xe=i(B);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);be=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),re=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(y),L=a(y,"P",{});var Z=i(L);ve=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,M),_(y,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(y,ee,M),_(y,R,M),e(R,$e),e(R,H),e(H,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,Fe),e(R,U),e(U,he),e(R,je),_(y,te,M),_(y,C,M),e(C,A),e(A,ye),e(A,K),e(K,fe),e(A,ze),e(A,B),e(B,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,be),e(C,re),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(y,oe,M),_(y,L,M),e(L,ve),e(L,P),e(P,de),e(L,Le)},d(y){y&&o(d),y&&o(l),y&&o(p),y&&o(ee),y&&o(R),y&&o(te),y&&o(C),y&&o(oe),y&&o(L)}}}function fR(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function uR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function gR(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,H,xe,_e,N,Re,ie,V,Ee,ke,W,Me,Fe,U,he,je,te,C,A,ye,K,fe,ze,B,ne,Ce,q,qe,J,le,Pe,G,be,re,O,ue,S,Ae,oe,L,ve,P,de,Le;return{c(){d=r("p"),g=t("TensorFlow models and layers in "),c=r("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=r("ul"),j=r("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=r("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=r("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),Ee=t("fit()"),ke=t(" and "),W=r("code"),Me=t("predict()"),Fe=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=r("ul"),A=r("li"),ye=t("a single Tensor with "),K=r("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),B=r("code"),ne=t("model(input_ids)"),Ce=m(),q=r("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=r("code"),be=t("model([input_ids, attention_mask, token_type_ids])"),re=m(),O=r("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=r("p"),ve=t(`Note that when creating models and layers with
`),P=r("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(y),p=a(y,"UL",{});var se=i(p);j=a(se,"LI",{});var Be=i(j);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(o),ge=h(se),I=a(se,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),se.forEach(o),ee=h(y),R=a(y,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(z,"CODE",{});var Ve=i(H);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),Fe=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(y),C=a(y,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);ye=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),B=a(X,"CODE",{});var Xe=i(B);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);be=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),re=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(y),L=a(y,"P",{});var Z=i(L);ve=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,M),_(y,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(y,ee,M),_(y,R,M),e(R,$e),e(R,H),e(H,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,Fe),e(R,U),e(U,he),e(R,je),_(y,te,M),_(y,C,M),e(C,A),e(A,ye),e(A,K),e(K,fe),e(A,ze),e(A,B),e(B,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,be),e(C,re),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(y,oe,M),_(y,L,M),e(L,ve),e(L,P),e(P,de),e(L,Le)},d(y){y&&o(d),y&&o(l),y&&o(p),y&&o(ee),y&&o(R),y&&o(te),y&&o(C),y&&o(oe),y&&o(L)}}}function _R(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function kR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForMaskedLM
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
`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function FR(E){let d,g;return d=new me({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function yR(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,H,xe,_e,N,Re,ie,V,Ee,ke,W,Me,Fe,U,he,je,te,C,A,ye,K,fe,ze,B,ne,Ce,q,qe,J,le,Pe,G,be,re,O,ue,S,Ae,oe,L,ve,P,de,Le;return{c(){d=r("p"),g=t("TensorFlow models and layers in "),c=r("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=r("ul"),j=r("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=r("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=r("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),Ee=t("fit()"),ke=t(" and "),W=r("code"),Me=t("predict()"),Fe=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=r("ul"),A=r("li"),ye=t("a single Tensor with "),K=r("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),B=r("code"),ne=t("model(input_ids)"),Ce=m(),q=r("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=r("code"),be=t("model([input_ids, attention_mask, token_type_ids])"),re=m(),O=r("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=r("p"),ve=t(`Note that when creating models and layers with
`),P=r("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(y),p=a(y,"UL",{});var se=i(p);j=a(se,"LI",{});var Be=i(j);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(o),ge=h(se),I=a(se,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),se.forEach(o),ee=h(y),R=a(y,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(z,"CODE",{});var Ve=i(H);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),Fe=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(y),C=a(y,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);ye=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),B=a(X,"CODE",{});var Xe=i(B);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);be=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),re=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(y),L=a(y,"P",{});var Z=i(L);ve=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,M),_(y,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(y,ee,M),_(y,R,M),e(R,$e),e(R,H),e(H,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,Fe),e(R,U),e(U,he),e(R,je),_(y,te,M),_(y,C,M),e(C,A),e(A,ye),e(A,K),e(K,fe),e(A,ze),e(A,B),e(B,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,be),e(C,re),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(y,oe,M),_(y,L,M),e(L,ve),e(L,P),e(P,de),e(L,Le)},d(y){y&&o(d),y&&o(l),y&&o(p),y&&o(ee),y&&o(R),y&&o(te),y&&o(C),y&&o(oe),y&&o(L)}}}function bR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function vR(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,H,xe,_e,N,Re,ie,V,Ee,ke,W,Me,Fe,U,he,je,te,C,A,ye,K,fe,ze,B,ne,Ce,q,qe,J,le,Pe,G,be,re,O,ue,S,Ae,oe,L,ve,P,de,Le;return{c(){d=r("p"),g=t("TensorFlow models and layers in "),c=r("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=r("ul"),j=r("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=r("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=r("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),Ee=t("fit()"),ke=t(" and "),W=r("code"),Me=t("predict()"),Fe=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=r("ul"),A=r("li"),ye=t("a single Tensor with "),K=r("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),B=r("code"),ne=t("model(input_ids)"),Ce=m(),q=r("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=r("code"),be=t("model([input_ids, attention_mask, token_type_ids])"),re=m(),O=r("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=r("p"),ve=t(`Note that when creating models and layers with
`),P=r("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(y),p=a(y,"UL",{});var se=i(p);j=a(se,"LI",{});var Be=i(j);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(o),ge=h(se),I=a(se,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),se.forEach(o),ee=h(y),R=a(y,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(z,"CODE",{});var Ve=i(H);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),Fe=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(y),C=a(y,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);ye=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),B=a(X,"CODE",{});var Xe=i(B);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);be=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),re=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(y),L=a(y,"P",{});var Z=i(L);ve=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,M),_(y,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(y,ee,M),_(y,R,M),e(R,$e),e(R,H),e(H,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,Fe),e(R,U),e(U,he),e(R,je),_(y,te,M),_(y,C,M),e(C,A),e(A,ye),e(A,K),e(K,fe),e(A,ze),e(A,B),e(B,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,be),e(C,re),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(y,oe,M),_(y,L,M),e(L,ve),e(L,P),e(P,de),e(L,Le)},d(y){y&&o(d),y&&o(l),y&&o(p),y&&o(ee),y&&o(R),y&&o(te),y&&o(C),y&&o(oe),y&&o(L)}}}function wR(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function TR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForSequenceClassification
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
`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function $R(E){let d,g;return d=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function xR(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,H,xe,_e,N,Re,ie,V,Ee,ke,W,Me,Fe,U,he,je,te,C,A,ye,K,fe,ze,B,ne,Ce,q,qe,J,le,Pe,G,be,re,O,ue,S,Ae,oe,L,ve,P,de,Le;return{c(){d=r("p"),g=t("TensorFlow models and layers in "),c=r("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=r("ul"),j=r("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=r("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=r("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),Ee=t("fit()"),ke=t(" and "),W=r("code"),Me=t("predict()"),Fe=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=r("ul"),A=r("li"),ye=t("a single Tensor with "),K=r("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),B=r("code"),ne=t("model(input_ids)"),Ce=m(),q=r("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=r("code"),be=t("model([input_ids, attention_mask, token_type_ids])"),re=m(),O=r("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=r("p"),ve=t(`Note that when creating models and layers with
`),P=r("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(y),p=a(y,"UL",{});var se=i(p);j=a(se,"LI",{});var Be=i(j);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(o),ge=h(se),I=a(se,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),se.forEach(o),ee=h(y),R=a(y,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(z,"CODE",{});var Ve=i(H);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),Fe=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(y),C=a(y,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);ye=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),B=a(X,"CODE",{});var Xe=i(B);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);be=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),re=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(y),L=a(y,"P",{});var Z=i(L);ve=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,M),_(y,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(y,ee,M),_(y,R,M),e(R,$e),e(R,H),e(H,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,Fe),e(R,U),e(U,he),e(R,je),_(y,te,M),_(y,C,M),e(C,A),e(A,ye),e(A,K),e(K,fe),e(A,ze),e(A,B),e(B,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,be),e(C,re),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(y,oe,M),_(y,L,M),e(L,ve),e(L,P),e(P,de),e(L,Le)},d(y){y&&o(d),y&&o(l),y&&o(p),y&&o(ee),y&&o(R),y&&o(te),y&&o(C),y&&o(oe),y&&o(L)}}}function RR(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function ER(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function MR(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,H,xe,_e,N,Re,ie,V,Ee,ke,W,Me,Fe,U,he,je,te,C,A,ye,K,fe,ze,B,ne,Ce,q,qe,J,le,Pe,G,be,re,O,ue,S,Ae,oe,L,ve,P,de,Le;return{c(){d=r("p"),g=t("TensorFlow models and layers in "),c=r("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=r("ul"),j=r("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=r("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=r("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),Ee=t("fit()"),ke=t(" and "),W=r("code"),Me=t("predict()"),Fe=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=r("ul"),A=r("li"),ye=t("a single Tensor with "),K=r("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),B=r("code"),ne=t("model(input_ids)"),Ce=m(),q=r("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=r("code"),be=t("model([input_ids, attention_mask, token_type_ids])"),re=m(),O=r("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=r("p"),ve=t(`Note that when creating models and layers with
`),P=r("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(y),p=a(y,"UL",{});var se=i(p);j=a(se,"LI",{});var Be=i(j);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(o),ge=h(se),I=a(se,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),se.forEach(o),ee=h(y),R=a(y,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(z,"CODE",{});var Ve=i(H);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),Fe=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(y),C=a(y,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);ye=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),B=a(X,"CODE",{});var Xe=i(B);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);be=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),re=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(y),L=a(y,"P",{});var Z=i(L);ve=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,M),_(y,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(y,ee,M),_(y,R,M),e(R,$e),e(R,H),e(H,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,Fe),e(R,U),e(U,he),e(R,je),_(y,te,M),_(y,C,M),e(C,A),e(A,ye),e(A,K),e(K,fe),e(A,ze),e(A,B),e(B,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,be),e(C,re),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(y,oe,M),_(y,L,M),e(L,ve),e(L,P),e(P,de),e(L,Le)},d(y){y&&o(d),y&&o(l),y&&o(p),y&&o(ee),y&&o(R),y&&o(te),y&&o(C),y&&o(oe),y&&o(L)}}}function jR(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function zR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForTokenClassification
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
`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function CR(E){let d,g;return d=new me({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function qR(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,H,xe,_e,N,Re,ie,V,Ee,ke,W,Me,Fe,U,he,je,te,C,A,ye,K,fe,ze,B,ne,Ce,q,qe,J,le,Pe,G,be,re,O,ue,S,Ae,oe,L,ve,P,de,Le;return{c(){d=r("p"),g=t("TensorFlow models and layers in "),c=r("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=r("ul"),j=r("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=r("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=r("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),Ee=t("fit()"),ke=t(" and "),W=r("code"),Me=t("predict()"),Fe=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=r("ul"),A=r("li"),ye=t("a single Tensor with "),K=r("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),B=r("code"),ne=t("model(input_ids)"),Ce=m(),q=r("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=r("code"),be=t("model([input_ids, attention_mask, token_type_ids])"),re=m(),O=r("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=r("p"),ve=t(`Note that when creating models and layers with
`),P=r("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(y),p=a(y,"UL",{});var se=i(p);j=a(se,"LI",{});var Be=i(j);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(o),ge=h(se),I=a(se,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),se.forEach(o),ee=h(y),R=a(y,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(z,"CODE",{});var Ve=i(H);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),Fe=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(y),C=a(y,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);ye=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),B=a(X,"CODE",{});var Xe=i(B);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);be=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),re=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(y),L=a(y,"P",{});var Z=i(L);ve=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,M),_(y,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(y,ee,M),_(y,R,M),e(R,$e),e(R,H),e(H,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,Fe),e(R,U),e(U,he),e(R,je),_(y,te,M),_(y,C,M),e(C,A),e(A,ye),e(A,K),e(K,fe),e(A,ze),e(A,B),e(B,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,be),e(C,re),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(y,oe,M),_(y,L,M),e(L,ve),e(L,P),e(P,de),e(L,Le)},d(y){y&&o(d),y&&o(l),y&&o(p),y&&o(ee),y&&o(R),y&&o(te),y&&o(C),y&&o(oe),y&&o(L)}}}function PR(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function AR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForQuestionAnswering
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
`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function LR(E){let d,g;return d=new me({props:{code:`# target is "nice puppet"
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
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function OR(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function DR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerModel

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerModel.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerModel.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function IR(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function NR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForMaskedLM

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForMaskedLM.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function SR(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function WR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForSequenceClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function UR(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function KR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function QR(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function HR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForTokenClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForTokenClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function BR(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function VR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function JR(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,H,xe,_e,N,Re,ie,V,Ee,ke,W,Me,Fe,U,he,je,te,C,A,ye,K,fe,ze,B,ne,Ce,q,qe,J,le,Pe,G,be,re,O,ue,S,Ae,oe,L,ve,P,de,Le,y,M,Se,se,Be,Ne,z,Ve,Je,Oe,Ge,We,D,X,Ue,Xe,Y,Ye,Ie,we,De,Z,Ke,yr,Xf,Od,Yf,th,Ze,br,Zf,vr,eu,wr,ou,tu,nu,Tr,su,xl,ru,au,iu,$n,lu,gt,$r,du,Dd,cu,pu,xr,Rl,mu,Id,hu,fu,El,uu,Nd,gu,_u,xn,Rr,ku,Er,Fu,Sd,yu,bu,vu,No,Mr,wu,Wd,Tu,$u,Rn,xu,Rt,Ru,Ud,Eu,Mu,Kd,ju,zu,Cu,Ml,jr,nh,Et,En,Qd,zr,qu,Hd,Pu,sh,lo,Cr,Au,qr,Lu,Bd,Ou,Du,Iu,Mn,jl,Nu,Su,zl,Wu,Uu,Ku,Pr,Qu,Cl,Hu,Bu,Vu,jn,Ju,_t,Ar,Gu,Vd,Xu,Yu,Lr,ql,Zu,Jd,eg,og,Pl,tg,Gd,ng,rh,Mt,zn,Xd,Or,sg,Yd,rg,ah,ko,Dr,ag,Ir,ig,Nr,lg,dg,cg,Sr,pg,Wr,mg,hg,fg,co,ug,Zd,gg,_g,ec,kg,Fg,oc,yg,bg,tc,vg,wg,nc,Tg,$g,sc,xg,Rg,Eg,So,Ur,Mg,jt,jg,Al,zg,Cg,rc,qg,Pg,Ag,Cn,Lg,qn,ih,zt,Pn,ac,Kr,Og,ic,Dg,lh,at,Qr,Ig,Ct,Ng,lc,Sg,Wg,Hr,Ug,Kg,Qg,Wo,Br,Hg,qt,Bg,Ll,Vg,Jg,dc,Gg,Xg,Yg,An,Zg,Ln,dh,Pt,On,cc,Vr,e_,pc,o_,ch,it,Jr,t_,At,n_,mc,s_,r_,Gr,a_,i_,l_,bo,Xr,d_,Lt,c_,Ol,p_,m_,hc,h_,f_,u_,Dn,g_,In,__,Nn,ph,Ot,Sn,fc,Yr,k_,uc,F_,mh,Lo,Zr,y_,gc,b_,v_,ea,w_,oa,T_,$_,x_,io,ta,R_,Dt,E_,Dl,M_,j_,_c,z_,C_,q_,Wn,P_,Un,A_,Kn,L_,Qn,O_,Hn,hh,It,Bn,kc,na,D_,Fc,I_,fh,Oo,sa,N_,yc,S_,W_,ra,U_,aa,K_,Q_,H_,Uo,ia,B_,Nt,V_,Il,J_,G_,bc,X_,Y_,Z_,Vn,ek,Jn,uh,St,Gn,vc,la,ok,wc,tk,gh,Do,da,nk,Tc,sk,rk,ca,ak,pa,ik,lk,dk,vo,ma,ck,Wt,pk,Nl,mk,hk,$c,fk,uk,gk,Xn,_k,Yn,kk,Zn,_h,Ut,es,xc,ha,Fk,Rc,yk,kh,Io,fa,bk,Kt,vk,Ec,wk,Tk,Mc,$k,xk,Rk,ua,Ek,ga,Mk,jk,zk,wo,_a,Ck,Qt,qk,Sl,Pk,Ak,jc,Lk,Ok,Dk,os,Ik,ts,Nk,ns,Fh,Ht,ss,zc,ka,Sk,Cc,Wk,yh,po,Fa,Uk,qc,Kk,Qk,ya,Hk,Wl,Bk,Vk,Jk,ba,Gk,va,Xk,Yk,Zk,rs,eF,Ko,wa,oF,Bt,tF,Ul,nF,sF,Pc,rF,aF,iF,as,lF,is,bh,Vt,ls,Ac,Ta,dF,Lc,cF,vh,mo,$a,pF,xa,mF,Oc,hF,fF,uF,Ra,gF,Kl,_F,kF,FF,Ea,yF,Ma,bF,vF,wF,ds,TF,To,ja,$F,Jt,xF,Ql,RF,EF,Dc,MF,jF,zF,cs,CF,ps,qF,ms,wh,Gt,hs,Ic,za,PF,Nc,AF,Th,ho,Ca,LF,qa,OF,Sc,DF,IF,NF,Pa,SF,Hl,WF,UF,KF,Aa,QF,La,HF,BF,VF,fs,JF,kt,Oa,GF,Fo,XF,Wc,YF,ZF,Uc,ey,oy,Kc,ty,ny,Qc,sy,ry,Hc,ay,iy,ly,us,$h,Xt,gs,Bc,Da,dy,Vc,cy,xh,fo,Ia,py,Jc,my,hy,Na,fy,Bl,uy,gy,_y,Sa,ky,Wa,Fy,yy,by,_s,vy,$o,Ua,wy,Yt,Ty,Vl,$y,xy,Gc,Ry,Ey,My,ks,jy,Fs,zy,ys,Rh,Zt,bs,Xc,Ka,Cy,Yc,qy,Eh,uo,Qa,Py,Zc,Ay,Ly,Ha,Oy,Jl,Dy,Iy,Ny,Ba,Sy,Va,Wy,Uy,Ky,vs,Qy,Qo,Ja,Hy,en,By,Gl,Vy,Jy,ep,Gy,Xy,Yy,ws,Zy,Ts,Mh,on,$s,op,Ga,eb,tp,ob,jh,go,Xa,tb,np,nb,sb,Ya,rb,Xl,ab,ib,lb,Za,db,ei,cb,pb,mb,xs,hb,xo,oi,fb,tn,ub,Yl,gb,_b,sp,kb,Fb,yb,Rs,bb,Es,vb,Ms,zh,nn,js,rp,ti,wb,ap,Tb,Ch,_o,ni,$b,sn,xb,ip,Rb,Eb,lp,Mb,jb,zb,si,Cb,Zl,qb,Pb,Ab,ri,Lb,ai,Ob,Db,Ib,zs,Nb,Ro,ii,Sb,rn,Wb,ed,Ub,Kb,dp,Qb,Hb,Bb,Cs,Vb,qs,Jb,Ps,qh,an,As,cp,li,Gb,pp,Xb,Ph,eo,di,Yb,mp,Zb,ev,ci,ov,od,tv,nv,sv,pi,rv,mi,av,iv,lv,hp,dv,cv,lt,fp,hi,pv,mv,up,fi,hv,fv,gp,ui,uv,gv,_p,gi,_v,kv,Ho,_i,Fv,ln,yv,kp,bv,vv,Fp,wv,Tv,$v,Ls,xv,Os,Ah,dn,Ds,yp,ki,Rv,bp,Ev,Lh,oo,Fi,Mv,yi,jv,vp,zv,Cv,qv,bi,Pv,td,Av,Lv,Ov,vi,Dv,wi,Iv,Nv,Sv,wp,Wv,Uv,dt,Tp,Ti,Kv,Qv,$p,$i,Hv,Bv,xp,xi,Vv,Jv,Rp,Ri,Gv,Xv,Bo,Ei,Yv,cn,Zv,Ep,ew,ow,Mp,tw,nw,sw,Is,rw,Ns,Oh,pn,Ss,jp,Mi,aw,zp,iw,Dh,to,ji,lw,Cp,dw,cw,zi,pw,nd,mw,hw,fw,Ci,uw,qi,gw,_w,kw,qp,Fw,yw,ct,Pp,Pi,bw,vw,Ap,Ai,ww,Tw,Lp,Li,$w,xw,Op,Oi,Rw,Ew,Vo,Di,Mw,mn,jw,Dp,zw,Cw,Ip,qw,Pw,Aw,Ws,Lw,Us,Ih,hn,Ks,Np,Ii,Ow,Sp,Dw,Nh,no,Ni,Iw,Wp,Nw,Sw,Si,Ww,sd,Uw,Kw,Qw,Wi,Hw,Ui,Bw,Vw,Jw,Up,Gw,Xw,pt,Kp,Ki,Yw,Zw,Qp,Qi,eT,oT,Hp,Hi,tT,nT,Bp,Bi,sT,rT,Jo,Vi,aT,fn,iT,Vp,lT,dT,Jp,cT,pT,mT,Qs,hT,Hs,Sh,un,Bs,Gp,Ji,fT,Xp,uT,Wh,so,Gi,gT,Yp,_T,kT,Xi,FT,rd,yT,bT,vT,Yi,wT,Zi,TT,$T,xT,Zp,RT,ET,mt,em,el,MT,jT,om,ol,zT,CT,tm,tl,qT,PT,nm,nl,AT,LT,Go,sl,OT,gn,DT,sm,IT,NT,rm,ST,WT,UT,Vs,KT,Js,Uh,_n,Gs,am,rl,QT,im,HT,Kh,ro,al,BT,kn,VT,lm,JT,GT,dm,XT,YT,ZT,il,e$,ad,o$,t$,n$,ll,s$,dl,r$,a$,i$,cm,l$,d$,ht,pm,cl,c$,p$,mm,pl,m$,h$,hm,ml,f$,u$,fm,hl,g$,_$,Xo,fl,k$,Fn,F$,um,y$,b$,gm,v$,w$,T$,Xs,$$,Ys,Qh;return l=new He({}),R=new He({}),S=new He({}),de=new Q({props:{name:"class transformers.RoFormerConfig",anchor:"transformers.RoFormerConfig",parameters:[{name:"vocab_size",val:" = 50000"},{name:"embedding_size",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1536"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"rotary_value",val:" = False"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50000) &#x2014;
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
Whether or not apply rotary position embeddings on value layer.`,name:"rotary_value"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/configuration_roformer.py#L46"}}),Ie=new ce({props:{anchor:"transformers.RoFormerConfig.example",$$slots:{default:[Ux]},$$scope:{ctx:E}}}),yr=new He({}),br=new Q({props:{name:"class transformers.RoFormerTokenizer",anchor:"transformers.RoFormerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.RoFormerTokenizer.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L69"}}),$n=new ce({props:{anchor:"transformers.RoFormerTokenizer.example",$$slots:{default:[Kx]},$$scope:{ctx:E}}}),$r=new Q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L235",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rr=new Q({props:{name:"get_special_tokens_mask",anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L260",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Mr=new Q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L288",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rn=new ce({props:{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Qx]},$$scope:{ctx:E}}}),jr=new Q({props:{name:"save_vocabulary",anchor:"transformers.RoFormerTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L317"}}),zr=new He({}),Cr=new Q({props:{name:"class transformers.RoFormerTokenizerFast",anchor:"transformers.RoFormerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer_fast.py#L71"}}),jn=new ce({props:{anchor:"transformers.RoFormerTokenizerFast.example",$$slots:{default:[Hx]},$$scope:{ctx:E}}}),Ar=new Q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer_fast.py#L147",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Or=new He({}),Dr=new Q({props:{name:"class transformers.RoFormerModel",anchor:"transformers.RoFormerModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L789"}}),Ur=new Q({props:{name:"forward",anchor:"transformers.RoFormerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Cn=new Qe({props:{$$slots:{default:[Bx]},$$scope:{ctx:E}}}),qn=new ce({props:{anchor:"transformers.RoFormerModel.forward.example",$$slots:{default:[Vx]},$$scope:{ctx:E}}}),Kr=new He({}),Qr=new Q({props:{name:"class transformers.RoFormerForCausalLM",anchor:"transformers.RoFormerForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1057"}}),Br=new Q({props:{name:"forward",anchor:"transformers.RoFormerForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),An=new Qe({props:{$$slots:{default:[Jx]},$$scope:{ctx:E}}}),Ln=new ce({props:{anchor:"transformers.RoFormerForCausalLM.forward.example",$$slots:{default:[Gx]},$$scope:{ctx:E}}}),Vr=new He({}),Jr=new Q({props:{name:"class transformers.RoFormerForMaskedLM",anchor:"transformers.RoFormerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L956"}}),Xr=new Q({props:{name:"forward",anchor:"transformers.RoFormerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Dn=new Qe({props:{$$slots:{default:[Xx]},$$scope:{ctx:E}}}),In=new ce({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example",$$slots:{default:[Yx]},$$scope:{ctx:E}}}),Nn=new ce({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example-2",$$slots:{default:[Zx]},$$scope:{ctx:E}}}),Yr=new He({}),Zr=new Q({props:{name:"class transformers.RoFormerForSequenceClassification",anchor:"transformers.RoFormerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1230"}}),ta=new Q({props:{name:"forward",anchor:"transformers.RoFormerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Wn=new Qe({props:{$$slots:{default:[eR]},$$scope:{ctx:E}}}),Un=new ce({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example",$$slots:{default:[oR]},$$scope:{ctx:E}}}),Kn=new ce({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-2",$$slots:{default:[tR]},$$scope:{ctx:E}}}),Qn=new ce({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-3",$$slots:{default:[nR]},$$scope:{ctx:E}}}),Hn=new ce({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-4",$$slots:{default:[sR]},$$scope:{ctx:E}}}),na=new He({}),sa=new Q({props:{name:"class transformers.RoFormerForMultipleChoice",anchor:"transformers.RoFormerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1322"}}),ia=new Q({props:{name:"forward",anchor:"transformers.RoFormerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Vn=new Qe({props:{$$slots:{default:[rR]},$$scope:{ctx:E}}}),Jn=new ce({props:{anchor:"transformers.RoFormerForMultipleChoice.forward.example",$$slots:{default:[aR]},$$scope:{ctx:E}}}),la=new He({}),da=new Q({props:{name:"class transformers.RoFormerForTokenClassification",anchor:"transformers.RoFormerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1414"}}),ma=new Q({props:{name:"forward",anchor:"transformers.RoFormerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Xn=new Qe({props:{$$slots:{default:[iR]},$$scope:{ctx:E}}}),Yn=new ce({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example",$$slots:{default:[lR]},$$scope:{ctx:E}}}),Zn=new ce({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example-2",$$slots:{default:[dR]},$$scope:{ctx:E}}}),ha=new He({}),fa=new Q({props:{name:"class transformers.RoFormerForQuestionAnswering",anchor:"transformers.RoFormerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1491"}}),_a=new Q({props:{name:"forward",anchor:"transformers.RoFormerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),os=new Qe({props:{$$slots:{default:[cR]},$$scope:{ctx:E}}}),ts=new ce({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example",$$slots:{default:[pR]},$$scope:{ctx:E}}}),ns=new ce({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example-2",$$slots:{default:[mR]},$$scope:{ctx:E}}}),ka=new He({}),Fa=new Q({props:{name:"class transformers.TFRoFormerModel",anchor:"transformers.TFRoFormerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L799"}}),rs=new Qe({props:{$$slots:{default:[hR]},$$scope:{ctx:E}}}),wa=new Q({props:{name:"call",anchor:"transformers.TFRoFormerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L805",returnDescription:`
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
`}}),as=new Qe({props:{$$slots:{default:[fR]},$$scope:{ctx:E}}}),is=new ce({props:{anchor:"transformers.TFRoFormerModel.call.example",$$slots:{default:[uR]},$$scope:{ctx:E}}}),Ta=new He({}),$a=new Q({props:{name:"class transformers.TFRoFormerForMaskedLM",anchor:"transformers.TFRoFormerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L847"}}),ds=new Qe({props:{$$slots:{default:[gR]},$$scope:{ctx:E}}}),ja=new Q({props:{name:"call",anchor:"transformers.TFRoFormerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L863",returnDescription:`
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
`}}),cs=new Qe({props:{$$slots:{default:[_R]},$$scope:{ctx:E}}}),ps=new ce({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example",$$slots:{default:[kR]},$$scope:{ctx:E}}}),ms=new ce({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example-2",$$slots:{default:[FR]},$$scope:{ctx:E}}}),za=new He({}),Ca=new Q({props:{name:"class transformers.TFRoFormerForCausalLM",anchor:"transformers.TFRoFormerForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L926"}}),fs=new Qe({props:{$$slots:{default:[yR]},$$scope:{ctx:E}}}),Oa=new Q({props:{name:"call",anchor:"transformers.TFRoFormerForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L939",returnDescription:`
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
`}}),us=new ce({props:{anchor:"transformers.TFRoFormerForCausalLM.call.example",$$slots:{default:[bR]},$$scope:{ctx:E}}}),Da=new He({}),Ia=new Q({props:{name:"class transformers.TFRoFormerForSequenceClassification",anchor:"transformers.TFRoFormerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1039"}}),_s=new Qe({props:{$$slots:{default:[vR]},$$scope:{ctx:E}}}),Ua=new Q({props:{name:"call",anchor:"transformers.TFRoFormerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1048",returnDescription:`
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
`}}),ks=new Qe({props:{$$slots:{default:[wR]},$$scope:{ctx:E}}}),Fs=new ce({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example",$$slots:{default:[TR]},$$scope:{ctx:E}}}),ys=new ce({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example-2",$$slots:{default:[$R]},$$scope:{ctx:E}}}),Ka=new He({}),Qa=new Q({props:{name:"class transformers.TFRoFormerForMultipleChoice",anchor:"transformers.TFRoFormerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1115"}}),vs=new Qe({props:{$$slots:{default:[xR]},$$scope:{ctx:E}}}),Ja=new Q({props:{name:"call",anchor:"transformers.TFRoFormerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1136",returnDescription:`
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
`}}),ws=new Qe({props:{$$slots:{default:[RR]},$$scope:{ctx:E}}}),Ts=new ce({props:{anchor:"transformers.TFRoFormerForMultipleChoice.call.example",$$slots:{default:[ER]},$$scope:{ctx:E}}}),Ga=new He({}),Xa=new Q({props:{name:"class transformers.TFRoFormerForTokenClassification",anchor:"transformers.TFRoFormerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1239"}}),xs=new Qe({props:{$$slots:{default:[MR]},$$scope:{ctx:E}}}),oi=new Q({props:{name:"call",anchor:"transformers.TFRoFormerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1251",returnDescription:`
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
`}}),Rs=new Qe({props:{$$slots:{default:[jR]},$$scope:{ctx:E}}}),Es=new ce({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example",$$slots:{default:[zR]},$$scope:{ctx:E}}}),Ms=new ce({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example-2",$$slots:{default:[CR]},$$scope:{ctx:E}}}),ti=new He({}),ni=new Q({props:{name:"class transformers.TFRoFormerForQuestionAnswering",anchor:"transformers.TFRoFormerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1317"}}),zs=new Qe({props:{$$slots:{default:[qR]},$$scope:{ctx:E}}}),ii=new Q({props:{name:"call",anchor:"transformers.TFRoFormerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1328",returnDescription:`
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
`}}),Cs=new Qe({props:{$$slots:{default:[PR]},$$scope:{ctx:E}}}),qs=new ce({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example",$$slots:{default:[AR]},$$scope:{ctx:E}}}),Ps=new ce({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example-2",$$slots:{default:[LR]},$$scope:{ctx:E}}}),li=new He({}),di=new Q({props:{name:"class transformers.FlaxRoFormerModel",anchor:"transformers.FlaxRoFormerModel",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L749"}}),_i=new Q({props:{name:"__call__",anchor:"transformers.FlaxRoFormerModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Ls=new Qe({props:{$$slots:{default:[OR]},$$scope:{ctx:E}}}),Os=new ce({props:{anchor:"transformers.FlaxRoFormerModel.__call__.example",$$slots:{default:[DR]},$$scope:{ctx:E}}}),ki=new He({}),Fi=new Q({props:{name:"class transformers.FlaxRoFormerForMaskedLM",anchor:"transformers.FlaxRoFormerForMaskedLM",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L809"}}),Ei=new Q({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Is=new Qe({props:{$$slots:{default:[IR]},$$scope:{ctx:E}}}),Ns=new ce({props:{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.example",$$slots:{default:[NR]},$$scope:{ctx:E}}}),Mi=new He({}),ji=new Q({props:{name:"class transformers.FlaxRoFormerForSequenceClassification",anchor:"transformers.FlaxRoFormerForSequenceClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L874"}}),Di=new Q({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Ws=new Qe({props:{$$slots:{default:[SR]},$$scope:{ctx:E}}}),Us=new ce({props:{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.example",$$slots:{default:[WR]},$$scope:{ctx:E}}}),Ii=new He({}),Ni=new Q({props:{name:"class transformers.FlaxRoFormerForMultipleChoice",anchor:"transformers.FlaxRoFormerForMultipleChoice",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L950"}}),Vi=new Q({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Qs=new Qe({props:{$$slots:{default:[UR]},$$scope:{ctx:E}}}),Hs=new ce({props:{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.example",$$slots:{default:[KR]},$$scope:{ctx:E}}}),Ji=new He({}),Gi=new Q({props:{name:"class transformers.FlaxRoFormerForTokenClassification",anchor:"transformers.FlaxRoFormerForTokenClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L1019"}}),sl=new Q({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Vs=new Qe({props:{$$slots:{default:[QR]},$$scope:{ctx:E}}}),Js=new ce({props:{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.example",$$slots:{default:[HR]},$$scope:{ctx:E}}}),rl=new He({}),al=new Q({props:{name:"class transformers.FlaxRoFormerForQuestionAnswering",anchor:"transformers.FlaxRoFormerForQuestionAnswering",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L1088"}}),fl=new Q({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Xs=new Qe({props:{$$slots:{default:[BR]},$$scope:{ctx:E}}}),Ys=new ce({props:{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.example",$$slots:{default:[VR]},$$scope:{ctx:E}}}),{c(){d=r("meta"),g=m(),c=r("h1"),f=r("a"),k=r("span"),b(l.$$.fragment),p=m(),j=r("span"),Te=t("RoFormer"),ge=m(),I=r("h2"),ae=r("a"),ee=r("span"),b(R.$$.fragment),$e=m(),H=r("span"),xe=t("Overview"),_e=m(),N=r("p"),Re=t("The RoFormer model was proposed in "),ie=r("a"),V=t("RoFormer: Enhanced Transformer with Rotary Position Embedding"),Ee=t(" by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu."),ke=m(),W=r("p"),Me=t("The abstract from the paper is the following:"),Fe=m(),U=r("p"),he=r("em"),je=t(`Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.`),te=m(),C=r("p"),A=t("Tips:"),ye=m(),K=r("ul"),fe=r("li"),ze=t(`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`),B=m(),ne=r("p"),Ce=t("This model was contributed by "),q=r("a"),qe=t("junnyu"),J=t(". The original code can be found "),le=r("a"),Pe=t("here"),G=t("."),be=m(),re=r("h2"),O=r("a"),ue=r("span"),b(S.$$.fragment),Ae=m(),oe=r("span"),L=t("RoFormerConfig"),ve=m(),P=r("div"),b(de.$$.fragment),Le=m(),y=r("p"),M=t("This is the configuration class to store the configuration of a "),Se=r("a"),se=t("RoFormerModel"),Be=t(`. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
`),Ne=r("a"),z=t("junnyu/roformer_chinese_base"),Ve=t(" architecture."),Je=m(),Oe=r("p"),Ge=t("Configuration objects inherit from "),We=r("a"),D=t("PretrainedConfig"),X=t(` and can be used to control the model outputs. Read the
documentation from `),Ue=r("a"),Xe=t("PretrainedConfig"),Y=t(" for more information."),Ye=m(),b(Ie.$$.fragment),we=m(),De=r("h2"),Z=r("a"),Ke=r("span"),b(yr.$$.fragment),Xf=m(),Od=r("span"),Yf=t("RoFormerTokenizer"),th=m(),Ze=r("div"),b(br.$$.fragment),Zf=m(),vr=r("p"),eu=t("Construct a RoFormer tokenizer. Based on "),wr=r("a"),ou=t("Rust Jieba"),tu=t("."),nu=m(),Tr=r("p"),su=t("This tokenizer inherits from "),xl=r("a"),ru=t("PreTrainedTokenizer"),au=t(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),iu=m(),b($n.$$.fragment),lu=m(),gt=r("div"),b($r.$$.fragment),du=m(),Dd=r("p"),cu=t(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),pu=m(),xr=r("ul"),Rl=r("li"),mu=t("single sequence: "),Id=r("code"),hu=t("[CLS] X [SEP]"),fu=m(),El=r("li"),uu=t("pair of sequences: "),Nd=r("code"),gu=t("[CLS] A [SEP] B [SEP]"),_u=m(),xn=r("div"),b(Rr.$$.fragment),ku=m(),Er=r("p"),Fu=t(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Sd=r("code"),yu=t("prepare_for_model"),bu=t(" method."),vu=m(),No=r("div"),b(Mr.$$.fragment),wu=m(),Wd=r("p"),Tu=t("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer"),$u=m(),b(Rn.$$.fragment),xu=m(),Rt=r("p"),Ru=t("If "),Ud=r("code"),Eu=t("token_ids_1"),Mu=t(" is "),Kd=r("code"),ju=t("None"),zu=t(", this method only returns the first portion of the mask (0s)."),Cu=m(),Ml=r("div"),b(jr.$$.fragment),nh=m(),Et=r("h2"),En=r("a"),Qd=r("span"),b(zr.$$.fragment),qu=m(),Hd=r("span"),Pu=t("RoFormerTokenizerFast"),sh=m(),lo=r("div"),b(Cr.$$.fragment),Au=m(),qr=r("p"),Lu=t("Construct a \u201Cfast\u201D RoFormer tokenizer (backed by HuggingFace\u2019s "),Bd=r("em"),Ou=t("tokenizers"),Du=t(" library)."),Iu=m(),Mn=r("p"),jl=r("a"),Nu=t("RoFormerTokenizerFast"),Su=t(" is almost identical to "),zl=r("a"),Wu=t("BertTokenizerFast"),Uu=t(` and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`),Ku=m(),Pr=r("p"),Qu=t("This tokenizer inherits from "),Cl=r("a"),Hu=t("PreTrainedTokenizerFast"),Bu=t(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vu=m(),b(jn.$$.fragment),Ju=m(),_t=r("div"),b(Ar.$$.fragment),Gu=m(),Vd=r("p"),Xu=t(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Yu=m(),Lr=r("ul"),ql=r("li"),Zu=t("single sequence: "),Jd=r("code"),eg=t("[CLS] X [SEP]"),og=m(),Pl=r("li"),tg=t("pair of sequences: "),Gd=r("code"),ng=t("[CLS] A [SEP] B [SEP]"),rh=m(),Mt=r("h2"),zn=r("a"),Xd=r("span"),b(Or.$$.fragment),sg=m(),Yd=r("span"),rg=t("RoFormerModel"),ah=m(),ko=r("div"),b(Dr.$$.fragment),ag=m(),Ir=r("p"),ig=t(`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Nr=r("a"),lg=t("torch.nn.Module"),dg=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cg=m(),Sr=r("p"),pg=t(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Wr=r("a"),mg=t(`Attention is
all you need`),hg=t(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),fg=m(),co=r("p"),ug=t("To behave as an decoder the model needs to be initialized with the "),Zd=r("code"),gg=t("is_decoder"),_g=t(` argument of the configuration set
to `),ec=r("code"),kg=t("True"),Fg=t(". To be used in a Seq2Seq model, the model needs to initialized with both "),oc=r("code"),yg=t("is_decoder"),bg=t(` argument and
`),tc=r("code"),vg=t("add_cross_attention"),wg=t(" set to "),nc=r("code"),Tg=t("True"),$g=t("; an "),sc=r("code"),xg=t("encoder_hidden_states"),Rg=t(" is then expected as an input to the forward pass."),Eg=m(),So=r("div"),b(Ur.$$.fragment),Mg=m(),jt=r("p"),jg=t("The "),Al=r("a"),zg=t("RoFormerModel"),Cg=t(" forward method, overrides the "),rc=r("code"),qg=t("__call__"),Pg=t(" special method."),Ag=m(),b(Cn.$$.fragment),Lg=m(),b(qn.$$.fragment),ih=m(),zt=r("h2"),Pn=r("a"),ac=r("span"),b(Kr.$$.fragment),Og=m(),ic=r("span"),Dg=t("RoFormerForCausalLM"),lh=m(),at=r("div"),b(Qr.$$.fragment),Ig=m(),Ct=r("p"),Ng=t("RoFormer Model with a "),lc=r("code"),Sg=t("language modeling"),Wg=t(` head on top for CLM fine-tuning.
This model is a PyTorch `),Hr=r("a"),Ug=t("torch.nn.Module"),Kg=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qg=m(),Wo=r("div"),b(Br.$$.fragment),Hg=m(),qt=r("p"),Bg=t("The "),Ll=r("a"),Vg=t("RoFormerForCausalLM"),Jg=t(" forward method, overrides the "),dc=r("code"),Gg=t("__call__"),Xg=t(" special method."),Yg=m(),b(An.$$.fragment),Zg=m(),b(Ln.$$.fragment),dh=m(),Pt=r("h2"),On=r("a"),cc=r("span"),b(Vr.$$.fragment),e_=m(),pc=r("span"),o_=t("RoFormerForMaskedLM"),ch=m(),it=r("div"),b(Jr.$$.fragment),t_=m(),At=r("p"),n_=t("RoFormer Model with a "),mc=r("code"),s_=t("language modeling"),r_=t(` head on top.
This model is a PyTorch `),Gr=r("a"),a_=t("torch.nn.Module"),i_=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),l_=m(),bo=r("div"),b(Xr.$$.fragment),d_=m(),Lt=r("p"),c_=t("The "),Ol=r("a"),p_=t("RoFormerForMaskedLM"),m_=t(" forward method, overrides the "),hc=r("code"),h_=t("__call__"),f_=t(" special method."),u_=m(),b(Dn.$$.fragment),g_=m(),b(In.$$.fragment),__=m(),b(Nn.$$.fragment),ph=m(),Ot=r("h2"),Sn=r("a"),fc=r("span"),b(Yr.$$.fragment),k_=m(),uc=r("span"),F_=t("RoFormerForSequenceClassification"),mh=m(),Lo=r("div"),b(Zr.$$.fragment),y_=m(),gc=r("p"),b_=t(`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),v_=m(),ea=r("p"),w_=t("This model is a PyTorch "),oa=r("a"),T_=t("torch.nn.Module"),$_=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),x_=m(),io=r("div"),b(ta.$$.fragment),R_=m(),Dt=r("p"),E_=t("The "),Dl=r("a"),M_=t("RoFormerForSequenceClassification"),j_=t(" forward method, overrides the "),_c=r("code"),z_=t("__call__"),C_=t(" special method."),q_=m(),b(Wn.$$.fragment),P_=m(),b(Un.$$.fragment),A_=m(),b(Kn.$$.fragment),L_=m(),b(Qn.$$.fragment),O_=m(),b(Hn.$$.fragment),hh=m(),It=r("h2"),Bn=r("a"),kc=r("span"),b(na.$$.fragment),D_=m(),Fc=r("span"),I_=t("RoFormerForMultipleChoice"),fh=m(),Oo=r("div"),b(sa.$$.fragment),N_=m(),yc=r("p"),S_=t(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),W_=m(),ra=r("p"),U_=t("This model is a PyTorch "),aa=r("a"),K_=t("torch.nn.Module"),Q_=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),H_=m(),Uo=r("div"),b(ia.$$.fragment),B_=m(),Nt=r("p"),V_=t("The "),Il=r("a"),J_=t("RoFormerForMultipleChoice"),G_=t(" forward method, overrides the "),bc=r("code"),X_=t("__call__"),Y_=t(" special method."),Z_=m(),b(Vn.$$.fragment),ek=m(),b(Jn.$$.fragment),uh=m(),St=r("h2"),Gn=r("a"),vc=r("span"),b(la.$$.fragment),ok=m(),wc=r("span"),tk=t("RoFormerForTokenClassification"),gh=m(),Do=r("div"),b(da.$$.fragment),nk=m(),Tc=r("p"),sk=t(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),rk=m(),ca=r("p"),ak=t("This model is a PyTorch "),pa=r("a"),ik=t("torch.nn.Module"),lk=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dk=m(),vo=r("div"),b(ma.$$.fragment),ck=m(),Wt=r("p"),pk=t("The "),Nl=r("a"),mk=t("RoFormerForTokenClassification"),hk=t(" forward method, overrides the "),$c=r("code"),fk=t("__call__"),uk=t(" special method."),gk=m(),b(Xn.$$.fragment),_k=m(),b(Yn.$$.fragment),kk=m(),b(Zn.$$.fragment),_h=m(),Ut=r("h2"),es=r("a"),xc=r("span"),b(ha.$$.fragment),Fk=m(),Rc=r("span"),yk=t("RoFormerForQuestionAnswering"),kh=m(),Io=r("div"),b(fa.$$.fragment),bk=m(),Kt=r("p"),vk=t(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ec=r("code"),wk=t("span start logits"),Tk=t(" and "),Mc=r("code"),$k=t("span end logits"),xk=t(")."),Rk=m(),ua=r("p"),Ek=t("This model is a PyTorch "),ga=r("a"),Mk=t("torch.nn.Module"),jk=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zk=m(),wo=r("div"),b(_a.$$.fragment),Ck=m(),Qt=r("p"),qk=t("The "),Sl=r("a"),Pk=t("RoFormerForQuestionAnswering"),Ak=t(" forward method, overrides the "),jc=r("code"),Lk=t("__call__"),Ok=t(" special method."),Dk=m(),b(os.$$.fragment),Ik=m(),b(ts.$$.fragment),Nk=m(),b(ns.$$.fragment),Fh=m(),Ht=r("h2"),ss=r("a"),zc=r("span"),b(ka.$$.fragment),Sk=m(),Cc=r("span"),Wk=t("TFRoFormerModel"),yh=m(),po=r("div"),b(Fa.$$.fragment),Uk=m(),qc=r("p"),Kk=t("The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top."),Qk=m(),ya=r("p"),Hk=t("This model inherits from "),Wl=r("a"),Bk=t("TFPreTrainedModel"),Vk=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jk=m(),ba=r("p"),Gk=t("This model is also a "),va=r("a"),Xk=t("tf.keras.Model"),Yk=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zk=m(),b(rs.$$.fragment),eF=m(),Ko=r("div"),b(wa.$$.fragment),oF=m(),Bt=r("p"),tF=t("The "),Ul=r("a"),nF=t("TFRoFormerModel"),sF=t(" forward method, overrides the "),Pc=r("code"),rF=t("__call__"),aF=t(" special method."),iF=m(),b(as.$$.fragment),lF=m(),b(is.$$.fragment),bh=m(),Vt=r("h2"),ls=r("a"),Ac=r("span"),b(Ta.$$.fragment),dF=m(),Lc=r("span"),cF=t("TFRoFormerForMaskedLM"),vh=m(),mo=r("div"),b($a.$$.fragment),pF=m(),xa=r("p"),mF=t("RoFormer Model with a "),Oc=r("code"),hF=t("language modeling"),fF=t(" head on top."),uF=m(),Ra=r("p"),gF=t("This model inherits from "),Kl=r("a"),_F=t("TFPreTrainedModel"),kF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),FF=m(),Ea=r("p"),yF=t("This model is also a "),Ma=r("a"),bF=t("tf.keras.Model"),vF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wF=m(),b(ds.$$.fragment),TF=m(),To=r("div"),b(ja.$$.fragment),$F=m(),Jt=r("p"),xF=t("The "),Ql=r("a"),RF=t("TFRoFormerForMaskedLM"),EF=t(" forward method, overrides the "),Dc=r("code"),MF=t("__call__"),jF=t(" special method."),zF=m(),b(cs.$$.fragment),CF=m(),b(ps.$$.fragment),qF=m(),b(ms.$$.fragment),wh=m(),Gt=r("h2"),hs=r("a"),Ic=r("span"),b(za.$$.fragment),PF=m(),Nc=r("span"),AF=t("TFRoFormerForCausalLM"),Th=m(),ho=r("div"),b(Ca.$$.fragment),LF=m(),qa=r("p"),OF=t("RoFormer Model with a "),Sc=r("code"),DF=t("language modeling"),IF=t(" head on top for CLM fine-tuning."),NF=m(),Pa=r("p"),SF=t("This model inherits from "),Hl=r("a"),WF=t("TFPreTrainedModel"),UF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),KF=m(),Aa=r("p"),QF=t("This model is also a "),La=r("a"),HF=t("tf.keras.Model"),BF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),VF=m(),b(fs.$$.fragment),JF=m(),kt=r("div"),b(Oa.$$.fragment),GF=m(),Fo=r("p"),XF=t("labels ("),Wc=r("code"),YF=t("tf.Tensor"),ZF=t(" or "),Uc=r("code"),ey=t("np.ndarray"),oy=t(" of shape "),Kc=r("code"),ty=t("(batch_size, sequence_length)"),ny=t(", "),Qc=r("em"),sy=t("optional"),ry=t(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Hc=r("code"),ay=t("[0, ..., config.vocab_size - 1]"),iy=t("."),ly=m(),b(us.$$.fragment),$h=m(),Xt=r("h2"),gs=r("a"),Bc=r("span"),b(Da.$$.fragment),dy=m(),Vc=r("span"),cy=t("TFRoFormerForSequenceClassification"),xh=m(),fo=r("div"),b(Ia.$$.fragment),py=m(),Jc=r("p"),my=t("RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),hy=m(),Na=r("p"),fy=t("This model inherits from "),Bl=r("a"),uy=t("TFPreTrainedModel"),gy=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_y=m(),Sa=r("p"),ky=t("This model is also a "),Wa=r("a"),Fy=t("tf.keras.Model"),yy=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),by=m(),b(_s.$$.fragment),vy=m(),$o=r("div"),b(Ua.$$.fragment),wy=m(),Yt=r("p"),Ty=t("The "),Vl=r("a"),$y=t("TFRoFormerForSequenceClassification"),xy=t(" forward method, overrides the "),Gc=r("code"),Ry=t("__call__"),Ey=t(" special method."),My=m(),b(ks.$$.fragment),jy=m(),b(Fs.$$.fragment),zy=m(),b(ys.$$.fragment),Rh=m(),Zt=r("h2"),bs=r("a"),Xc=r("span"),b(Ka.$$.fragment),Cy=m(),Yc=r("span"),qy=t("TFRoFormerForMultipleChoice"),Eh=m(),uo=r("div"),b(Qa.$$.fragment),Py=m(),Zc=r("p"),Ay=t(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Ly=m(),Ha=r("p"),Oy=t("This model inherits from "),Jl=r("a"),Dy=t("TFPreTrainedModel"),Iy=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ny=m(),Ba=r("p"),Sy=t("This model is also a "),Va=r("a"),Wy=t("tf.keras.Model"),Uy=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ky=m(),b(vs.$$.fragment),Qy=m(),Qo=r("div"),b(Ja.$$.fragment),Hy=m(),en=r("p"),By=t("The "),Gl=r("a"),Vy=t("TFRoFormerForMultipleChoice"),Jy=t(" forward method, overrides the "),ep=r("code"),Gy=t("__call__"),Xy=t(" special method."),Yy=m(),b(ws.$$.fragment),Zy=m(),b(Ts.$$.fragment),Mh=m(),on=r("h2"),$s=r("a"),op=r("span"),b(Ga.$$.fragment),eb=m(),tp=r("span"),ob=t("TFRoFormerForTokenClassification"),jh=m(),go=r("div"),b(Xa.$$.fragment),tb=m(),np=r("p"),nb=t(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),sb=m(),Ya=r("p"),rb=t("This model inherits from "),Xl=r("a"),ab=t("TFPreTrainedModel"),ib=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lb=m(),Za=r("p"),db=t("This model is also a "),ei=r("a"),cb=t("tf.keras.Model"),pb=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mb=m(),b(xs.$$.fragment),hb=m(),xo=r("div"),b(oi.$$.fragment),fb=m(),tn=r("p"),ub=t("The "),Yl=r("a"),gb=t("TFRoFormerForTokenClassification"),_b=t(" forward method, overrides the "),sp=r("code"),kb=t("__call__"),Fb=t(" special method."),yb=m(),b(Rs.$$.fragment),bb=m(),b(Es.$$.fragment),vb=m(),b(Ms.$$.fragment),zh=m(),nn=r("h2"),js=r("a"),rp=r("span"),b(ti.$$.fragment),wb=m(),ap=r("span"),Tb=t("TFRoFormerForQuestionAnswering"),Ch=m(),_o=r("div"),b(ni.$$.fragment),$b=m(),sn=r("p"),xb=t(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ip=r("code"),Rb=t("span start logits"),Eb=t(" and "),lp=r("code"),Mb=t("span end logits"),jb=t(")."),zb=m(),si=r("p"),Cb=t("This model inherits from "),Zl=r("a"),qb=t("TFPreTrainedModel"),Pb=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ab=m(),ri=r("p"),Lb=t("This model is also a "),ai=r("a"),Ob=t("tf.keras.Model"),Db=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ib=m(),b(zs.$$.fragment),Nb=m(),Ro=r("div"),b(ii.$$.fragment),Sb=m(),rn=r("p"),Wb=t("The "),ed=r("a"),Ub=t("TFRoFormerForQuestionAnswering"),Kb=t(" forward method, overrides the "),dp=r("code"),Qb=t("__call__"),Hb=t(" special method."),Bb=m(),b(Cs.$$.fragment),Vb=m(),b(qs.$$.fragment),Jb=m(),b(Ps.$$.fragment),qh=m(),an=r("h2"),As=r("a"),cp=r("span"),b(li.$$.fragment),Gb=m(),pp=r("span"),Xb=t("FlaxRoFormerModel"),Ph=m(),eo=r("div"),b(di.$$.fragment),Yb=m(),mp=r("p"),Zb=t("The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top."),ev=m(),ci=r("p"),ov=t("This model inherits from "),od=r("a"),tv=t("FlaxPreTrainedModel"),nv=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),sv=m(),pi=r("p"),rv=t("This model is also a Flax Linen "),mi=r("a"),av=t("flax.linen.Module"),iv=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lv=m(),hp=r("p"),dv=t("Finally, this model supports inherent JAX features such as:"),cv=m(),lt=r("ul"),fp=r("li"),hi=r("a"),pv=t("Just-In-Time (JIT) compilation"),mv=m(),up=r("li"),fi=r("a"),hv=t("Automatic Differentiation"),fv=m(),gp=r("li"),ui=r("a"),uv=t("Vectorization"),gv=m(),_p=r("li"),gi=r("a"),_v=t("Parallelization"),kv=m(),Ho=r("div"),b(_i.$$.fragment),Fv=m(),ln=r("p"),yv=t("The "),kp=r("code"),bv=t("FlaxRoFormerPreTrainedModel"),vv=t(" forward method, overrides the "),Fp=r("code"),wv=t("__call__"),Tv=t(" special method."),$v=m(),b(Ls.$$.fragment),xv=m(),b(Os.$$.fragment),Ah=m(),dn=r("h2"),Ds=r("a"),yp=r("span"),b(ki.$$.fragment),Rv=m(),bp=r("span"),Ev=t("FlaxRoFormerForMaskedLM"),Lh=m(),oo=r("div"),b(Fi.$$.fragment),Mv=m(),yi=r("p"),jv=t("RoFormer Model with a "),vp=r("code"),zv=t("language modeling"),Cv=t(" head on top."),qv=m(),bi=r("p"),Pv=t("This model inherits from "),td=r("a"),Av=t("FlaxPreTrainedModel"),Lv=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ov=m(),vi=r("p"),Dv=t("This model is also a Flax Linen "),wi=r("a"),Iv=t("flax.linen.Module"),Nv=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Sv=m(),wp=r("p"),Wv=t("Finally, this model supports inherent JAX features such as:"),Uv=m(),dt=r("ul"),Tp=r("li"),Ti=r("a"),Kv=t("Just-In-Time (JIT) compilation"),Qv=m(),$p=r("li"),$i=r("a"),Hv=t("Automatic Differentiation"),Bv=m(),xp=r("li"),xi=r("a"),Vv=t("Vectorization"),Jv=m(),Rp=r("li"),Ri=r("a"),Gv=t("Parallelization"),Xv=m(),Bo=r("div"),b(Ei.$$.fragment),Yv=m(),cn=r("p"),Zv=t("The "),Ep=r("code"),ew=t("FlaxRoFormerPreTrainedModel"),ow=t(" forward method, overrides the "),Mp=r("code"),tw=t("__call__"),nw=t(" special method."),sw=m(),b(Is.$$.fragment),rw=m(),b(Ns.$$.fragment),Oh=m(),pn=r("h2"),Ss=r("a"),jp=r("span"),b(Mi.$$.fragment),aw=m(),zp=r("span"),iw=t("FlaxRoFormerForSequenceClassification"),Dh=m(),to=r("div"),b(ji.$$.fragment),lw=m(),Cp=r("p"),dw=t(`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cw=m(),zi=r("p"),pw=t("This model inherits from "),nd=r("a"),mw=t("FlaxPreTrainedModel"),hw=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fw=m(),Ci=r("p"),uw=t("This model is also a Flax Linen "),qi=r("a"),gw=t("flax.linen.Module"),_w=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),kw=m(),qp=r("p"),Fw=t("Finally, this model supports inherent JAX features such as:"),yw=m(),ct=r("ul"),Pp=r("li"),Pi=r("a"),bw=t("Just-In-Time (JIT) compilation"),vw=m(),Ap=r("li"),Ai=r("a"),ww=t("Automatic Differentiation"),Tw=m(),Lp=r("li"),Li=r("a"),$w=t("Vectorization"),xw=m(),Op=r("li"),Oi=r("a"),Rw=t("Parallelization"),Ew=m(),Vo=r("div"),b(Di.$$.fragment),Mw=m(),mn=r("p"),jw=t("The "),Dp=r("code"),zw=t("FlaxRoFormerPreTrainedModel"),Cw=t(" forward method, overrides the "),Ip=r("code"),qw=t("__call__"),Pw=t(" special method."),Aw=m(),b(Ws.$$.fragment),Lw=m(),b(Us.$$.fragment),Ih=m(),hn=r("h2"),Ks=r("a"),Np=r("span"),b(Ii.$$.fragment),Ow=m(),Sp=r("span"),Dw=t("FlaxRoFormerForMultipleChoice"),Nh=m(),no=r("div"),b(Ni.$$.fragment),Iw=m(),Wp=r("p"),Nw=t(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Sw=m(),Si=r("p"),Ww=t("This model inherits from "),sd=r("a"),Uw=t("FlaxPreTrainedModel"),Kw=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qw=m(),Wi=r("p"),Hw=t("This model is also a Flax Linen "),Ui=r("a"),Bw=t("flax.linen.Module"),Vw=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Jw=m(),Up=r("p"),Gw=t("Finally, this model supports inherent JAX features such as:"),Xw=m(),pt=r("ul"),Kp=r("li"),Ki=r("a"),Yw=t("Just-In-Time (JIT) compilation"),Zw=m(),Qp=r("li"),Qi=r("a"),eT=t("Automatic Differentiation"),oT=m(),Hp=r("li"),Hi=r("a"),tT=t("Vectorization"),nT=m(),Bp=r("li"),Bi=r("a"),sT=t("Parallelization"),rT=m(),Jo=r("div"),b(Vi.$$.fragment),aT=m(),fn=r("p"),iT=t("The "),Vp=r("code"),lT=t("FlaxRoFormerPreTrainedModel"),dT=t(" forward method, overrides the "),Jp=r("code"),cT=t("__call__"),pT=t(" special method."),mT=m(),b(Qs.$$.fragment),hT=m(),b(Hs.$$.fragment),Sh=m(),un=r("h2"),Bs=r("a"),Gp=r("span"),b(Ji.$$.fragment),fT=m(),Xp=r("span"),uT=t("FlaxRoFormerForTokenClassification"),Wh=m(),so=r("div"),b(Gi.$$.fragment),gT=m(),Yp=r("p"),_T=t(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),kT=m(),Xi=r("p"),FT=t("This model inherits from "),rd=r("a"),yT=t("FlaxPreTrainedModel"),bT=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vT=m(),Yi=r("p"),wT=t("This model is also a Flax Linen "),Zi=r("a"),TT=t("flax.linen.Module"),$T=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xT=m(),Zp=r("p"),RT=t("Finally, this model supports inherent JAX features such as:"),ET=m(),mt=r("ul"),em=r("li"),el=r("a"),MT=t("Just-In-Time (JIT) compilation"),jT=m(),om=r("li"),ol=r("a"),zT=t("Automatic Differentiation"),CT=m(),tm=r("li"),tl=r("a"),qT=t("Vectorization"),PT=m(),nm=r("li"),nl=r("a"),AT=t("Parallelization"),LT=m(),Go=r("div"),b(sl.$$.fragment),OT=m(),gn=r("p"),DT=t("The "),sm=r("code"),IT=t("FlaxRoFormerPreTrainedModel"),NT=t(" forward method, overrides the "),rm=r("code"),ST=t("__call__"),WT=t(" special method."),UT=m(),b(Vs.$$.fragment),KT=m(),b(Js.$$.fragment),Uh=m(),_n=r("h2"),Gs=r("a"),am=r("span"),b(rl.$$.fragment),QT=m(),im=r("span"),HT=t("FlaxRoFormerForQuestionAnswering"),Kh=m(),ro=r("div"),b(al.$$.fragment),BT=m(),kn=r("p"),VT=t(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),lm=r("code"),JT=t("span start logits"),GT=t(" and "),dm=r("code"),XT=t("span end logits"),YT=t(")."),ZT=m(),il=r("p"),e$=t("This model inherits from "),ad=r("a"),o$=t("FlaxPreTrainedModel"),t$=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),n$=m(),ll=r("p"),s$=t("This model is also a Flax Linen "),dl=r("a"),r$=t("flax.linen.Module"),a$=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),i$=m(),cm=r("p"),l$=t("Finally, this model supports inherent JAX features such as:"),d$=m(),ht=r("ul"),pm=r("li"),cl=r("a"),c$=t("Just-In-Time (JIT) compilation"),p$=m(),mm=r("li"),pl=r("a"),m$=t("Automatic Differentiation"),h$=m(),hm=r("li"),ml=r("a"),f$=t("Vectorization"),u$=m(),fm=r("li"),hl=r("a"),g$=t("Parallelization"),_$=m(),Xo=r("div"),b(fl.$$.fragment),k$=m(),Fn=r("p"),F$=t("The "),um=r("code"),y$=t("FlaxRoFormerPreTrainedModel"),b$=t(" forward method, overrides the "),gm=r("code"),v$=t("__call__"),w$=t(" special method."),T$=m(),b(Xs.$$.fragment),$$=m(),b(Ys.$$.fragment),this.h()},l(s){const F=Sx('[data-svelte="svelte-1phssyn"]',document.head);d=a(F,"META",{name:!0,content:!0}),F.forEach(o),g=h(s),c=a(s,"H1",{class:!0});var ul=i(c);f=a(ul,"A",{id:!0,class:!0,href:!0});var _m=i(f);k=a(_m,"SPAN",{});var km=i(k);v(l.$$.fragment,km),km.forEach(o),_m.forEach(o),p=h(ul),j=a(ul,"SPAN",{});var Fm=i(j);Te=n(Fm,"RoFormer"),Fm.forEach(o),ul.forEach(o),ge=h(s),I=a(s,"H2",{class:!0});var gl=i(I);ae=a(gl,"A",{id:!0,class:!0,href:!0});var ym=i(ae);ee=a(ym,"SPAN",{});var bm=i(ee);v(R.$$.fragment,bm),bm.forEach(o),ym.forEach(o),$e=h(gl),H=a(gl,"SPAN",{});var vm=i(H);xe=n(vm,"Overview"),vm.forEach(o),gl.forEach(o),_e=h(s),N=a(s,"P",{});var _l=i(N);Re=n(_l,"The RoFormer model was proposed in "),ie=a(_l,"A",{href:!0,rel:!0});var wm=i(ie);V=n(wm,"RoFormer: Enhanced Transformer with Rotary Position Embedding"),wm.forEach(o),Ee=n(_l," by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu."),_l.forEach(o),ke=h(s),W=a(s,"P",{});var Tm=i(W);Me=n(Tm,"The abstract from the paper is the following:"),Tm.forEach(o),Fe=h(s),U=a(s,"P",{});var $m=i(U);he=a($m,"EM",{});var xm=i(he);je=n(xm,`Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.`),xm.forEach(o),$m.forEach(o),te=h(s),C=a(s,"P",{});var Rm=i(C);A=n(Rm,"Tips:"),Rm.forEach(o),ye=h(s),K=a(s,"UL",{});var Em=i(K);fe=a(Em,"LI",{});var Mm=i(fe);ze=n(Mm,`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`),Mm.forEach(o),Em.forEach(o),B=h(s),ne=a(s,"P",{});var yn=i(ne);Ce=n(yn,"This model was contributed by "),q=a(yn,"A",{href:!0,rel:!0});var jm=i(q);qe=n(jm,"junnyu"),jm.forEach(o),J=n(yn,". The original code can be found "),le=a(yn,"A",{href:!0,rel:!0});var zm=i(le);Pe=n(zm,"here"),zm.forEach(o),G=n(yn,"."),yn.forEach(o),be=h(s),re=a(s,"H2",{class:!0});var kl=i(re);O=a(kl,"A",{id:!0,class:!0,href:!0});var Cm=i(O);ue=a(Cm,"SPAN",{});var qm=i(ue);v(S.$$.fragment,qm),qm.forEach(o),Cm.forEach(o),Ae=h(kl),oe=a(kl,"SPAN",{});var Pm=i(oe);L=n(Pm,"RoFormerConfig"),Pm.forEach(o),kl.forEach(o),ve=h(s),P=a(s,"DIV",{class:!0});var ft=i(P);v(de.$$.fragment,ft),Le=h(ft),y=a(ft,"P",{});var bn=i(y);M=n(bn,"This is the configuration class to store the configuration of a "),Se=a(bn,"A",{href:!0});var Am=i(Se);se=n(Am,"RoFormerModel"),Am.forEach(o),Be=n(bn,`. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
`),Ne=a(bn,"A",{href:!0,rel:!0});var Lm=i(Ne);z=n(Lm,"junnyu/roformer_chinese_base"),Lm.forEach(o),Ve=n(bn," architecture."),bn.forEach(o),Je=h(ft),Oe=a(ft,"P",{});var vn=i(Oe);Ge=n(vn,"Configuration objects inherit from "),We=a(vn,"A",{href:!0});var Om=i(We);D=n(Om,"PretrainedConfig"),Om.forEach(o),X=n(vn,` and can be used to control the model outputs. Read the
documentation from `),Ue=a(vn,"A",{href:!0});var Dm=i(Ue);Xe=n(Dm,"PretrainedConfig"),Dm.forEach(o),Y=n(vn," for more information."),vn.forEach(o),Ye=h(ft),v(Ie.$$.fragment,ft),ft.forEach(o),we=h(s),De=a(s,"H2",{class:!0});var Fl=i(De);Z=a(Fl,"A",{id:!0,class:!0,href:!0});var Im=i(Z);Ke=a(Im,"SPAN",{});var Nm=i(Ke);v(yr.$$.fragment,Nm),Nm.forEach(o),Im.forEach(o),Xf=h(Fl),Od=a(Fl,"SPAN",{});var Sm=i(Od);Yf=n(Sm,"RoFormerTokenizer"),Sm.forEach(o),Fl.forEach(o),th=h(s),Ze=a(s,"DIV",{class:!0});var ao=i(Ze);v(br.$$.fragment,ao),Zf=h(ao),vr=a(ao,"P",{});var yl=i(vr);eu=n(yl,"Construct a RoFormer tokenizer. Based on "),wr=a(yl,"A",{href:!0,rel:!0});var Wm=i(wr);ou=n(Wm,"Rust Jieba"),Wm.forEach(o),tu=n(yl,"."),yl.forEach(o),nu=h(ao),Tr=a(ao,"P",{});var bl=i(Tr);su=n(bl,"This tokenizer inherits from "),xl=a(bl,"A",{href:!0});var Um=i(xl);ru=n(Um,"PreTrainedTokenizer"),Um.forEach(o),au=n(bl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),bl.forEach(o),iu=h(ao),v($n.$$.fragment,ao),lu=h(ao),gt=a(ao,"DIV",{class:!0});var wn=i(gt);v($r.$$.fragment,wn),du=h(wn),Dd=a(wn,"P",{});var Km=i(Dd);cu=n(Km,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Km.forEach(o),pu=h(wn),xr=a(wn,"UL",{});var vl=i(xr);Rl=a(vl,"LI",{});var id=i(Rl);mu=n(id,"single sequence: "),Id=a(id,"CODE",{});var Qm=i(Id);hu=n(Qm,"[CLS] X [SEP]"),Qm.forEach(o),id.forEach(o),fu=h(vl),El=a(vl,"LI",{});var ld=i(El);uu=n(ld,"pair of sequences: "),Nd=a(ld,"CODE",{});var Hm=i(Nd);gu=n(Hm,"[CLS] A [SEP] B [SEP]"),Hm.forEach(o),ld.forEach(o),vl.forEach(o),wn.forEach(o),_u=h(ao),xn=a(ao,"DIV",{class:!0});var wl=i(xn);v(Rr.$$.fragment,wl),ku=h(wl),Er=a(wl,"P",{});var Tl=i(Er);Fu=n(Tl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Sd=a(Tl,"CODE",{});var Bm=i(Sd);yu=n(Bm,"prepare_for_model"),Bm.forEach(o),bu=n(Tl," method."),Tl.forEach(o),wl.forEach(o),vu=h(ao),No=a(ao,"DIV",{class:!0});var ut=i(No);v(Mr.$$.fragment,ut),wu=h(ut),Wd=a(ut,"P",{});var Vm=i(Wd);Tu=n(Vm,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer"),Vm.forEach(o),$u=h(ut),v(Rn.$$.fragment,ut),xu=h(ut),Rt=a(ut,"P",{});var Tn=i(Rt);Ru=n(Tn,"If "),Ud=a(Tn,"CODE",{});var Jm=i(Ud);Eu=n(Jm,"token_ids_1"),Jm.forEach(o),Mu=n(Tn," is "),Kd=a(Tn,"CODE",{});var Gm=i(Kd);ju=n(Gm,"None"),Gm.forEach(o),zu=n(Tn,", this method only returns the first portion of the mask (0s)."),Tn.forEach(o),ut.forEach(o),Cu=h(ao),Ml=a(ao,"DIV",{class:!0});var Xm=i(Ml);v(jr.$$.fragment,Xm),Xm.forEach(o),ao.forEach(o),nh=h(s),Et=a(s,"H2",{class:!0});var $l=i(Et);En=a($l,"A",{id:!0,class:!0,href:!0});var Ym=i(En);Qd=a(Ym,"SPAN",{});var Zm=i(Qd);v(zr.$$.fragment,Zm),Zm.forEach(o),Ym.forEach(o),qu=h($l),Hd=a($l,"SPAN",{});var eh=i(Hd);Pu=n(eh,"RoFormerTokenizerFast"),eh.forEach(o),$l.forEach(o),sh=h(s),lo=a(s,"DIV",{class:!0});var yo=i(lo);v(Cr.$$.fragment,yo),Au=h(yo),qr=a(yo,"P",{});var Hh=i(qr);Lu=n(Hh,"Construct a \u201Cfast\u201D RoFormer tokenizer (backed by HuggingFace\u2019s "),Bd=a(Hh,"EM",{});var E$=i(Bd);Ou=n(E$,"tokenizers"),E$.forEach(o),Du=n(Hh," library)."),Hh.forEach(o),Iu=h(yo),Mn=a(yo,"P",{});var oh=i(Mn);jl=a(oh,"A",{href:!0});var M$=i(jl);Nu=n(M$,"RoFormerTokenizerFast"),M$.forEach(o),Su=n(oh," is almost identical to "),zl=a(oh,"A",{href:!0});var j$=i(zl);Wu=n(j$,"BertTokenizerFast"),j$.forEach(o),Uu=n(oh,` and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`),oh.forEach(o),Ku=h(yo),Pr=a(yo,"P",{});var Bh=i(Pr);Qu=n(Bh,"This tokenizer inherits from "),Cl=a(Bh,"A",{href:!0});var z$=i(Cl);Hu=n(z$,"PreTrainedTokenizerFast"),z$.forEach(o),Bu=n(Bh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Bh.forEach(o),Vu=h(yo),v(jn.$$.fragment,yo),Ju=h(yo),_t=a(yo,"DIV",{class:!0});var dd=i(_t);v(Ar.$$.fragment,dd),Gu=h(dd),Vd=a(dd,"P",{});var C$=i(Vd);Xu=n(C$,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),C$.forEach(o),Yu=h(dd),Lr=a(dd,"UL",{});var Vh=i(Lr);ql=a(Vh,"LI",{});var x$=i(ql);Zu=n(x$,"single sequence: "),Jd=a(x$,"CODE",{});var q$=i(Jd);eg=n(q$,"[CLS] X [SEP]"),q$.forEach(o),x$.forEach(o),og=h(Vh),Pl=a(Vh,"LI",{});var R$=i(Pl);tg=n(R$,"pair of sequences: "),Gd=a(R$,"CODE",{});var P$=i(Gd);ng=n(P$,"[CLS] A [SEP] B [SEP]"),P$.forEach(o),R$.forEach(o),Vh.forEach(o),dd.forEach(o),yo.forEach(o),rh=h(s),Mt=a(s,"H2",{class:!0});var Jh=i(Mt);zn=a(Jh,"A",{id:!0,class:!0,href:!0});var A$=i(zn);Xd=a(A$,"SPAN",{});var L$=i(Xd);v(Or.$$.fragment,L$),L$.forEach(o),A$.forEach(o),sg=h(Jh),Yd=a(Jh,"SPAN",{});var O$=i(Yd);rg=n(O$,"RoFormerModel"),O$.forEach(o),Jh.forEach(o),ah=h(s),ko=a(s,"DIV",{class:!0});var Ft=i(ko);v(Dr.$$.fragment,Ft),ag=h(Ft),Ir=a(Ft,"P",{});var Gh=i(Ir);ig=n(Gh,`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Nr=a(Gh,"A",{href:!0,rel:!0});var D$=i(Nr);lg=n(D$,"torch.nn.Module"),D$.forEach(o),dg=n(Gh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gh.forEach(o),cg=h(Ft),Sr=a(Ft,"P",{});var Xh=i(Sr);pg=n(Xh,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Wr=a(Xh,"A",{href:!0,rel:!0});var I$=i(Wr);mg=n(I$,`Attention is
all you need`),I$.forEach(o),hg=n(Xh,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Xh.forEach(o),fg=h(Ft),co=a(Ft,"P",{});var Eo=i(co);ug=n(Eo,"To behave as an decoder the model needs to be initialized with the "),Zd=a(Eo,"CODE",{});var N$=i(Zd);gg=n(N$,"is_decoder"),N$.forEach(o),_g=n(Eo,` argument of the configuration set
to `),ec=a(Eo,"CODE",{});var S$=i(ec);kg=n(S$,"True"),S$.forEach(o),Fg=n(Eo,". To be used in a Seq2Seq model, the model needs to initialized with both "),oc=a(Eo,"CODE",{});var W$=i(oc);yg=n(W$,"is_decoder"),W$.forEach(o),bg=n(Eo,` argument and
`),tc=a(Eo,"CODE",{});var U$=i(tc);vg=n(U$,"add_cross_attention"),U$.forEach(o),wg=n(Eo," set to "),nc=a(Eo,"CODE",{});var K$=i(nc);Tg=n(K$,"True"),K$.forEach(o),$g=n(Eo,"; an "),sc=a(Eo,"CODE",{});var Q$=i(sc);xg=n(Q$,"encoder_hidden_states"),Q$.forEach(o),Rg=n(Eo," is then expected as an input to the forward pass."),Eo.forEach(o),Eg=h(Ft),So=a(Ft,"DIV",{class:!0});var Zs=i(So);v(Ur.$$.fragment,Zs),Mg=h(Zs),jt=a(Zs,"P",{});var cd=i(jt);jg=n(cd,"The "),Al=a(cd,"A",{href:!0});var H$=i(Al);zg=n(H$,"RoFormerModel"),H$.forEach(o),Cg=n(cd," forward method, overrides the "),rc=a(cd,"CODE",{});var B$=i(rc);qg=n(B$,"__call__"),B$.forEach(o),Pg=n(cd," special method."),cd.forEach(o),Ag=h(Zs),v(Cn.$$.fragment,Zs),Lg=h(Zs),v(qn.$$.fragment,Zs),Zs.forEach(o),Ft.forEach(o),ih=h(s),zt=a(s,"H2",{class:!0});var Yh=i(zt);Pn=a(Yh,"A",{id:!0,class:!0,href:!0});var V$=i(Pn);ac=a(V$,"SPAN",{});var J$=i(ac);v(Kr.$$.fragment,J$),J$.forEach(o),V$.forEach(o),Og=h(Yh),ic=a(Yh,"SPAN",{});var G$=i(ic);Dg=n(G$,"RoFormerForCausalLM"),G$.forEach(o),Yh.forEach(o),lh=h(s),at=a(s,"DIV",{class:!0});var pd=i(at);v(Qr.$$.fragment,pd),Ig=h(pd),Ct=a(pd,"P",{});var md=i(Ct);Ng=n(md,"RoFormer Model with a "),lc=a(md,"CODE",{});var X$=i(lc);Sg=n(X$,"language modeling"),X$.forEach(o),Wg=n(md,` head on top for CLM fine-tuning.
This model is a PyTorch `),Hr=a(md,"A",{href:!0,rel:!0});var Y$=i(Hr);Ug=n(Y$,"torch.nn.Module"),Y$.forEach(o),Kg=n(md,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),md.forEach(o),Qg=h(pd),Wo=a(pd,"DIV",{class:!0});var er=i(Wo);v(Br.$$.fragment,er),Hg=h(er),qt=a(er,"P",{});var hd=i(qt);Bg=n(hd,"The "),Ll=a(hd,"A",{href:!0});var Z$=i(Ll);Vg=n(Z$,"RoFormerForCausalLM"),Z$.forEach(o),Jg=n(hd," forward method, overrides the "),dc=a(hd,"CODE",{});var e1=i(dc);Gg=n(e1,"__call__"),e1.forEach(o),Xg=n(hd," special method."),hd.forEach(o),Yg=h(er),v(An.$$.fragment,er),Zg=h(er),v(Ln.$$.fragment,er),er.forEach(o),pd.forEach(o),dh=h(s),Pt=a(s,"H2",{class:!0});var Zh=i(Pt);On=a(Zh,"A",{id:!0,class:!0,href:!0});var o1=i(On);cc=a(o1,"SPAN",{});var t1=i(cc);v(Vr.$$.fragment,t1),t1.forEach(o),o1.forEach(o),e_=h(Zh),pc=a(Zh,"SPAN",{});var n1=i(pc);o_=n(n1,"RoFormerForMaskedLM"),n1.forEach(o),Zh.forEach(o),ch=h(s),it=a(s,"DIV",{class:!0});var fd=i(it);v(Jr.$$.fragment,fd),t_=h(fd),At=a(fd,"P",{});var ud=i(At);n_=n(ud,"RoFormer Model with a "),mc=a(ud,"CODE",{});var s1=i(mc);s_=n(s1,"language modeling"),s1.forEach(o),r_=n(ud,` head on top.
This model is a PyTorch `),Gr=a(ud,"A",{href:!0,rel:!0});var r1=i(Gr);a_=n(r1,"torch.nn.Module"),r1.forEach(o),i_=n(ud,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ud.forEach(o),l_=h(fd),bo=a(fd,"DIV",{class:!0});var yt=i(bo);v(Xr.$$.fragment,yt),d_=h(yt),Lt=a(yt,"P",{});var gd=i(Lt);c_=n(gd,"The "),Ol=a(gd,"A",{href:!0});var a1=i(Ol);p_=n(a1,"RoFormerForMaskedLM"),a1.forEach(o),m_=n(gd," forward method, overrides the "),hc=a(gd,"CODE",{});var i1=i(hc);h_=n(i1,"__call__"),i1.forEach(o),f_=n(gd," special method."),gd.forEach(o),u_=h(yt),v(Dn.$$.fragment,yt),g_=h(yt),v(In.$$.fragment,yt),__=h(yt),v(Nn.$$.fragment,yt),yt.forEach(o),fd.forEach(o),ph=h(s),Ot=a(s,"H2",{class:!0});var ef=i(Ot);Sn=a(ef,"A",{id:!0,class:!0,href:!0});var l1=i(Sn);fc=a(l1,"SPAN",{});var d1=i(fc);v(Yr.$$.fragment,d1),d1.forEach(o),l1.forEach(o),k_=h(ef),uc=a(ef,"SPAN",{});var c1=i(uc);F_=n(c1,"RoFormerForSequenceClassification"),c1.forEach(o),ef.forEach(o),mh=h(s),Lo=a(s,"DIV",{class:!0});var or=i(Lo);v(Zr.$$.fragment,or),y_=h(or),gc=a(or,"P",{});var p1=i(gc);b_=n(p1,`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),p1.forEach(o),v_=h(or),ea=a(or,"P",{});var of=i(ea);w_=n(of,"This model is a PyTorch "),oa=a(of,"A",{href:!0,rel:!0});var m1=i(oa);T_=n(m1,"torch.nn.Module"),m1.forEach(o),$_=n(of,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),of.forEach(o),x_=h(or),io=a(or,"DIV",{class:!0});var Mo=i(io);v(ta.$$.fragment,Mo),R_=h(Mo),Dt=a(Mo,"P",{});var _d=i(Dt);E_=n(_d,"The "),Dl=a(_d,"A",{href:!0});var h1=i(Dl);M_=n(h1,"RoFormerForSequenceClassification"),h1.forEach(o),j_=n(_d," forward method, overrides the "),_c=a(_d,"CODE",{});var f1=i(_c);z_=n(f1,"__call__"),f1.forEach(o),C_=n(_d," special method."),_d.forEach(o),q_=h(Mo),v(Wn.$$.fragment,Mo),P_=h(Mo),v(Un.$$.fragment,Mo),A_=h(Mo),v(Kn.$$.fragment,Mo),L_=h(Mo),v(Qn.$$.fragment,Mo),O_=h(Mo),v(Hn.$$.fragment,Mo),Mo.forEach(o),or.forEach(o),hh=h(s),It=a(s,"H2",{class:!0});var tf=i(It);Bn=a(tf,"A",{id:!0,class:!0,href:!0});var u1=i(Bn);kc=a(u1,"SPAN",{});var g1=i(kc);v(na.$$.fragment,g1),g1.forEach(o),u1.forEach(o),D_=h(tf),Fc=a(tf,"SPAN",{});var _1=i(Fc);I_=n(_1,"RoFormerForMultipleChoice"),_1.forEach(o),tf.forEach(o),fh=h(s),Oo=a(s,"DIV",{class:!0});var tr=i(Oo);v(sa.$$.fragment,tr),N_=h(tr),yc=a(tr,"P",{});var k1=i(yc);S_=n(k1,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),k1.forEach(o),W_=h(tr),ra=a(tr,"P",{});var nf=i(ra);U_=n(nf,"This model is a PyTorch "),aa=a(nf,"A",{href:!0,rel:!0});var F1=i(aa);K_=n(F1,"torch.nn.Module"),F1.forEach(o),Q_=n(nf,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nf.forEach(o),H_=h(tr),Uo=a(tr,"DIV",{class:!0});var nr=i(Uo);v(ia.$$.fragment,nr),B_=h(nr),Nt=a(nr,"P",{});var kd=i(Nt);V_=n(kd,"The "),Il=a(kd,"A",{href:!0});var y1=i(Il);J_=n(y1,"RoFormerForMultipleChoice"),y1.forEach(o),G_=n(kd," forward method, overrides the "),bc=a(kd,"CODE",{});var b1=i(bc);X_=n(b1,"__call__"),b1.forEach(o),Y_=n(kd," special method."),kd.forEach(o),Z_=h(nr),v(Vn.$$.fragment,nr),ek=h(nr),v(Jn.$$.fragment,nr),nr.forEach(o),tr.forEach(o),uh=h(s),St=a(s,"H2",{class:!0});var sf=i(St);Gn=a(sf,"A",{id:!0,class:!0,href:!0});var v1=i(Gn);vc=a(v1,"SPAN",{});var w1=i(vc);v(la.$$.fragment,w1),w1.forEach(o),v1.forEach(o),ok=h(sf),wc=a(sf,"SPAN",{});var T1=i(wc);tk=n(T1,"RoFormerForTokenClassification"),T1.forEach(o),sf.forEach(o),gh=h(s),Do=a(s,"DIV",{class:!0});var sr=i(Do);v(da.$$.fragment,sr),nk=h(sr),Tc=a(sr,"P",{});var $1=i(Tc);sk=n($1,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$1.forEach(o),rk=h(sr),ca=a(sr,"P",{});var rf=i(ca);ak=n(rf,"This model is a PyTorch "),pa=a(rf,"A",{href:!0,rel:!0});var x1=i(pa);ik=n(x1,"torch.nn.Module"),x1.forEach(o),lk=n(rf,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),rf.forEach(o),dk=h(sr),vo=a(sr,"DIV",{class:!0});var bt=i(vo);v(ma.$$.fragment,bt),ck=h(bt),Wt=a(bt,"P",{});var Fd=i(Wt);pk=n(Fd,"The "),Nl=a(Fd,"A",{href:!0});var R1=i(Nl);mk=n(R1,"RoFormerForTokenClassification"),R1.forEach(o),hk=n(Fd," forward method, overrides the "),$c=a(Fd,"CODE",{});var E1=i($c);fk=n(E1,"__call__"),E1.forEach(o),uk=n(Fd," special method."),Fd.forEach(o),gk=h(bt),v(Xn.$$.fragment,bt),_k=h(bt),v(Yn.$$.fragment,bt),kk=h(bt),v(Zn.$$.fragment,bt),bt.forEach(o),sr.forEach(o),_h=h(s),Ut=a(s,"H2",{class:!0});var af=i(Ut);es=a(af,"A",{id:!0,class:!0,href:!0});var M1=i(es);xc=a(M1,"SPAN",{});var j1=i(xc);v(ha.$$.fragment,j1),j1.forEach(o),M1.forEach(o),Fk=h(af),Rc=a(af,"SPAN",{});var z1=i(Rc);yk=n(z1,"RoFormerForQuestionAnswering"),z1.forEach(o),af.forEach(o),kh=h(s),Io=a(s,"DIV",{class:!0});var rr=i(Io);v(fa.$$.fragment,rr),bk=h(rr),Kt=a(rr,"P",{});var yd=i(Kt);vk=n(yd,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ec=a(yd,"CODE",{});var C1=i(Ec);wk=n(C1,"span start logits"),C1.forEach(o),Tk=n(yd," and "),Mc=a(yd,"CODE",{});var q1=i(Mc);$k=n(q1,"span end logits"),q1.forEach(o),xk=n(yd,")."),yd.forEach(o),Rk=h(rr),ua=a(rr,"P",{});var lf=i(ua);Ek=n(lf,"This model is a PyTorch "),ga=a(lf,"A",{href:!0,rel:!0});var P1=i(ga);Mk=n(P1,"torch.nn.Module"),P1.forEach(o),jk=n(lf,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lf.forEach(o),zk=h(rr),wo=a(rr,"DIV",{class:!0});var vt=i(wo);v(_a.$$.fragment,vt),Ck=h(vt),Qt=a(vt,"P",{});var bd=i(Qt);qk=n(bd,"The "),Sl=a(bd,"A",{href:!0});var A1=i(Sl);Pk=n(A1,"RoFormerForQuestionAnswering"),A1.forEach(o),Ak=n(bd," forward method, overrides the "),jc=a(bd,"CODE",{});var L1=i(jc);Lk=n(L1,"__call__"),L1.forEach(o),Ok=n(bd," special method."),bd.forEach(o),Dk=h(vt),v(os.$$.fragment,vt),Ik=h(vt),v(ts.$$.fragment,vt),Nk=h(vt),v(ns.$$.fragment,vt),vt.forEach(o),rr.forEach(o),Fh=h(s),Ht=a(s,"H2",{class:!0});var df=i(Ht);ss=a(df,"A",{id:!0,class:!0,href:!0});var O1=i(ss);zc=a(O1,"SPAN",{});var D1=i(zc);v(ka.$$.fragment,D1),D1.forEach(o),O1.forEach(o),Sk=h(df),Cc=a(df,"SPAN",{});var I1=i(Cc);Wk=n(I1,"TFRoFormerModel"),I1.forEach(o),df.forEach(o),yh=h(s),po=a(s,"DIV",{class:!0});var Yo=i(po);v(Fa.$$.fragment,Yo),Uk=h(Yo),qc=a(Yo,"P",{});var N1=i(qc);Kk=n(N1,"The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top."),N1.forEach(o),Qk=h(Yo),ya=a(Yo,"P",{});var cf=i(ya);Hk=n(cf,"This model inherits from "),Wl=a(cf,"A",{href:!0});var S1=i(Wl);Bk=n(S1,"TFPreTrainedModel"),S1.forEach(o),Vk=n(cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cf.forEach(o),Jk=h(Yo),ba=a(Yo,"P",{});var pf=i(ba);Gk=n(pf,"This model is also a "),va=a(pf,"A",{href:!0,rel:!0});var W1=i(va);Xk=n(W1,"tf.keras.Model"),W1.forEach(o),Yk=n(pf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pf.forEach(o),Zk=h(Yo),v(rs.$$.fragment,Yo),eF=h(Yo),Ko=a(Yo,"DIV",{class:!0});var ar=i(Ko);v(wa.$$.fragment,ar),oF=h(ar),Bt=a(ar,"P",{});var vd=i(Bt);tF=n(vd,"The "),Ul=a(vd,"A",{href:!0});var U1=i(Ul);nF=n(U1,"TFRoFormerModel"),U1.forEach(o),sF=n(vd," forward method, overrides the "),Pc=a(vd,"CODE",{});var K1=i(Pc);rF=n(K1,"__call__"),K1.forEach(o),aF=n(vd," special method."),vd.forEach(o),iF=h(ar),v(as.$$.fragment,ar),lF=h(ar),v(is.$$.fragment,ar),ar.forEach(o),Yo.forEach(o),bh=h(s),Vt=a(s,"H2",{class:!0});var mf=i(Vt);ls=a(mf,"A",{id:!0,class:!0,href:!0});var Q1=i(ls);Ac=a(Q1,"SPAN",{});var H1=i(Ac);v(Ta.$$.fragment,H1),H1.forEach(o),Q1.forEach(o),dF=h(mf),Lc=a(mf,"SPAN",{});var B1=i(Lc);cF=n(B1,"TFRoFormerForMaskedLM"),B1.forEach(o),mf.forEach(o),vh=h(s),mo=a(s,"DIV",{class:!0});var Zo=i(mo);v($a.$$.fragment,Zo),pF=h(Zo),xa=a(Zo,"P",{});var hf=i(xa);mF=n(hf,"RoFormer Model with a "),Oc=a(hf,"CODE",{});var V1=i(Oc);hF=n(V1,"language modeling"),V1.forEach(o),fF=n(hf," head on top."),hf.forEach(o),uF=h(Zo),Ra=a(Zo,"P",{});var ff=i(Ra);gF=n(ff,"This model inherits from "),Kl=a(ff,"A",{href:!0});var J1=i(Kl);_F=n(J1,"TFPreTrainedModel"),J1.forEach(o),kF=n(ff,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ff.forEach(o),FF=h(Zo),Ea=a(Zo,"P",{});var uf=i(Ea);yF=n(uf,"This model is also a "),Ma=a(uf,"A",{href:!0,rel:!0});var G1=i(Ma);bF=n(G1,"tf.keras.Model"),G1.forEach(o),vF=n(uf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uf.forEach(o),wF=h(Zo),v(ds.$$.fragment,Zo),TF=h(Zo),To=a(Zo,"DIV",{class:!0});var wt=i(To);v(ja.$$.fragment,wt),$F=h(wt),Jt=a(wt,"P",{});var wd=i(Jt);xF=n(wd,"The "),Ql=a(wd,"A",{href:!0});var X1=i(Ql);RF=n(X1,"TFRoFormerForMaskedLM"),X1.forEach(o),EF=n(wd," forward method, overrides the "),Dc=a(wd,"CODE",{});var Y1=i(Dc);MF=n(Y1,"__call__"),Y1.forEach(o),jF=n(wd," special method."),wd.forEach(o),zF=h(wt),v(cs.$$.fragment,wt),CF=h(wt),v(ps.$$.fragment,wt),qF=h(wt),v(ms.$$.fragment,wt),wt.forEach(o),Zo.forEach(o),wh=h(s),Gt=a(s,"H2",{class:!0});var gf=i(Gt);hs=a(gf,"A",{id:!0,class:!0,href:!0});var Z1=i(hs);Ic=a(Z1,"SPAN",{});var e2=i(Ic);v(za.$$.fragment,e2),e2.forEach(o),Z1.forEach(o),PF=h(gf),Nc=a(gf,"SPAN",{});var o2=i(Nc);AF=n(o2,"TFRoFormerForCausalLM"),o2.forEach(o),gf.forEach(o),Th=h(s),ho=a(s,"DIV",{class:!0});var et=i(ho);v(Ca.$$.fragment,et),LF=h(et),qa=a(et,"P",{});var _f=i(qa);OF=n(_f,"RoFormer Model with a "),Sc=a(_f,"CODE",{});var t2=i(Sc);DF=n(t2,"language modeling"),t2.forEach(o),IF=n(_f," head on top for CLM fine-tuning."),_f.forEach(o),NF=h(et),Pa=a(et,"P",{});var kf=i(Pa);SF=n(kf,"This model inherits from "),Hl=a(kf,"A",{href:!0});var n2=i(Hl);WF=n(n2,"TFPreTrainedModel"),n2.forEach(o),UF=n(kf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kf.forEach(o),KF=h(et),Aa=a(et,"P",{});var Ff=i(Aa);QF=n(Ff,"This model is also a "),La=a(Ff,"A",{href:!0,rel:!0});var s2=i(La);HF=n(s2,"tf.keras.Model"),s2.forEach(o),BF=n(Ff,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ff.forEach(o),VF=h(et),v(fs.$$.fragment,et),JF=h(et),kt=a(et,"DIV",{class:!0});var Td=i(kt);v(Oa.$$.fragment,Td),GF=h(Td),Fo=a(Td,"P",{});var ot=i(Fo);XF=n(ot,"labels ("),Wc=a(ot,"CODE",{});var r2=i(Wc);YF=n(r2,"tf.Tensor"),r2.forEach(o),ZF=n(ot," or "),Uc=a(ot,"CODE",{});var a2=i(Uc);ey=n(a2,"np.ndarray"),a2.forEach(o),oy=n(ot," of shape "),Kc=a(ot,"CODE",{});var i2=i(Kc);ty=n(i2,"(batch_size, sequence_length)"),i2.forEach(o),ny=n(ot,", "),Qc=a(ot,"EM",{});var l2=i(Qc);sy=n(l2,"optional"),l2.forEach(o),ry=n(ot,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Hc=a(ot,"CODE",{});var d2=i(Hc);ay=n(d2,"[0, ..., config.vocab_size - 1]"),d2.forEach(o),iy=n(ot,"."),ot.forEach(o),ly=h(Td),v(us.$$.fragment,Td),Td.forEach(o),et.forEach(o),$h=h(s),Xt=a(s,"H2",{class:!0});var yf=i(Xt);gs=a(yf,"A",{id:!0,class:!0,href:!0});var c2=i(gs);Bc=a(c2,"SPAN",{});var p2=i(Bc);v(Da.$$.fragment,p2),p2.forEach(o),c2.forEach(o),dy=h(yf),Vc=a(yf,"SPAN",{});var m2=i(Vc);cy=n(m2,"TFRoFormerForSequenceClassification"),m2.forEach(o),yf.forEach(o),xh=h(s),fo=a(s,"DIV",{class:!0});var tt=i(fo);v(Ia.$$.fragment,tt),py=h(tt),Jc=a(tt,"P",{});var h2=i(Jc);my=n(h2,"RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),h2.forEach(o),hy=h(tt),Na=a(tt,"P",{});var bf=i(Na);fy=n(bf,"This model inherits from "),Bl=a(bf,"A",{href:!0});var f2=i(Bl);uy=n(f2,"TFPreTrainedModel"),f2.forEach(o),gy=n(bf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bf.forEach(o),_y=h(tt),Sa=a(tt,"P",{});var vf=i(Sa);ky=n(vf,"This model is also a "),Wa=a(vf,"A",{href:!0,rel:!0});var u2=i(Wa);Fy=n(u2,"tf.keras.Model"),u2.forEach(o),yy=n(vf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vf.forEach(o),by=h(tt),v(_s.$$.fragment,tt),vy=h(tt),$o=a(tt,"DIV",{class:!0});var Tt=i($o);v(Ua.$$.fragment,Tt),wy=h(Tt),Yt=a(Tt,"P",{});var $d=i(Yt);Ty=n($d,"The "),Vl=a($d,"A",{href:!0});var g2=i(Vl);$y=n(g2,"TFRoFormerForSequenceClassification"),g2.forEach(o),xy=n($d," forward method, overrides the "),Gc=a($d,"CODE",{});var _2=i(Gc);Ry=n(_2,"__call__"),_2.forEach(o),Ey=n($d," special method."),$d.forEach(o),My=h(Tt),v(ks.$$.fragment,Tt),jy=h(Tt),v(Fs.$$.fragment,Tt),zy=h(Tt),v(ys.$$.fragment,Tt),Tt.forEach(o),tt.forEach(o),Rh=h(s),Zt=a(s,"H2",{class:!0});var wf=i(Zt);bs=a(wf,"A",{id:!0,class:!0,href:!0});var k2=i(bs);Xc=a(k2,"SPAN",{});var F2=i(Xc);v(Ka.$$.fragment,F2),F2.forEach(o),k2.forEach(o),Cy=h(wf),Yc=a(wf,"SPAN",{});var y2=i(Yc);qy=n(y2,"TFRoFormerForMultipleChoice"),y2.forEach(o),wf.forEach(o),Eh=h(s),uo=a(s,"DIV",{class:!0});var nt=i(uo);v(Qa.$$.fragment,nt),Py=h(nt),Zc=a(nt,"P",{});var b2=i(Zc);Ay=n(b2,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),b2.forEach(o),Ly=h(nt),Ha=a(nt,"P",{});var Tf=i(Ha);Oy=n(Tf,"This model inherits from "),Jl=a(Tf,"A",{href:!0});var v2=i(Jl);Dy=n(v2,"TFPreTrainedModel"),v2.forEach(o),Iy=n(Tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf.forEach(o),Ny=h(nt),Ba=a(nt,"P",{});var $f=i(Ba);Sy=n($f,"This model is also a "),Va=a($f,"A",{href:!0,rel:!0});var w2=i(Va);Wy=n(w2,"tf.keras.Model"),w2.forEach(o),Uy=n($f,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$f.forEach(o),Ky=h(nt),v(vs.$$.fragment,nt),Qy=h(nt),Qo=a(nt,"DIV",{class:!0});var ir=i(Qo);v(Ja.$$.fragment,ir),Hy=h(ir),en=a(ir,"P",{});var xd=i(en);By=n(xd,"The "),Gl=a(xd,"A",{href:!0});var T2=i(Gl);Vy=n(T2,"TFRoFormerForMultipleChoice"),T2.forEach(o),Jy=n(xd," forward method, overrides the "),ep=a(xd,"CODE",{});var $2=i(ep);Gy=n($2,"__call__"),$2.forEach(o),Xy=n(xd," special method."),xd.forEach(o),Yy=h(ir),v(ws.$$.fragment,ir),Zy=h(ir),v(Ts.$$.fragment,ir),ir.forEach(o),nt.forEach(o),Mh=h(s),on=a(s,"H2",{class:!0});var xf=i(on);$s=a(xf,"A",{id:!0,class:!0,href:!0});var x2=i($s);op=a(x2,"SPAN",{});var R2=i(op);v(Ga.$$.fragment,R2),R2.forEach(o),x2.forEach(o),eb=h(xf),tp=a(xf,"SPAN",{});var E2=i(tp);ob=n(E2,"TFRoFormerForTokenClassification"),E2.forEach(o),xf.forEach(o),jh=h(s),go=a(s,"DIV",{class:!0});var st=i(go);v(Xa.$$.fragment,st),tb=h(st),np=a(st,"P",{});var M2=i(np);nb=n(M2,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),M2.forEach(o),sb=h(st),Ya=a(st,"P",{});var Rf=i(Ya);rb=n(Rf,"This model inherits from "),Xl=a(Rf,"A",{href:!0});var j2=i(Xl);ab=n(j2,"TFPreTrainedModel"),j2.forEach(o),ib=n(Rf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rf.forEach(o),lb=h(st),Za=a(st,"P",{});var Ef=i(Za);db=n(Ef,"This model is also a "),ei=a(Ef,"A",{href:!0,rel:!0});var z2=i(ei);cb=n(z2,"tf.keras.Model"),z2.forEach(o),pb=n(Ef,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ef.forEach(o),mb=h(st),v(xs.$$.fragment,st),hb=h(st),xo=a(st,"DIV",{class:!0});var $t=i(xo);v(oi.$$.fragment,$t),fb=h($t),tn=a($t,"P",{});var Rd=i(tn);ub=n(Rd,"The "),Yl=a(Rd,"A",{href:!0});var C2=i(Yl);gb=n(C2,"TFRoFormerForTokenClassification"),C2.forEach(o),_b=n(Rd," forward method, overrides the "),sp=a(Rd,"CODE",{});var q2=i(sp);kb=n(q2,"__call__"),q2.forEach(o),Fb=n(Rd," special method."),Rd.forEach(o),yb=h($t),v(Rs.$$.fragment,$t),bb=h($t),v(Es.$$.fragment,$t),vb=h($t),v(Ms.$$.fragment,$t),$t.forEach(o),st.forEach(o),zh=h(s),nn=a(s,"H2",{class:!0});var Mf=i(nn);js=a(Mf,"A",{id:!0,class:!0,href:!0});var P2=i(js);rp=a(P2,"SPAN",{});var A2=i(rp);v(ti.$$.fragment,A2),A2.forEach(o),P2.forEach(o),wb=h(Mf),ap=a(Mf,"SPAN",{});var L2=i(ap);Tb=n(L2,"TFRoFormerForQuestionAnswering"),L2.forEach(o),Mf.forEach(o),Ch=h(s),_o=a(s,"DIV",{class:!0});var rt=i(_o);v(ni.$$.fragment,rt),$b=h(rt),sn=a(rt,"P",{});var Ed=i(sn);xb=n(Ed,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ip=a(Ed,"CODE",{});var O2=i(ip);Rb=n(O2,"span start logits"),O2.forEach(o),Eb=n(Ed," and "),lp=a(Ed,"CODE",{});var D2=i(lp);Mb=n(D2,"span end logits"),D2.forEach(o),jb=n(Ed,")."),Ed.forEach(o),zb=h(rt),si=a(rt,"P",{});var jf=i(si);Cb=n(jf,"This model inherits from "),Zl=a(jf,"A",{href:!0});var I2=i(Zl);qb=n(I2,"TFPreTrainedModel"),I2.forEach(o),Pb=n(jf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jf.forEach(o),Ab=h(rt),ri=a(rt,"P",{});var zf=i(ri);Lb=n(zf,"This model is also a "),ai=a(zf,"A",{href:!0,rel:!0});var N2=i(ai);Ob=n(N2,"tf.keras.Model"),N2.forEach(o),Db=n(zf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zf.forEach(o),Ib=h(rt),v(zs.$$.fragment,rt),Nb=h(rt),Ro=a(rt,"DIV",{class:!0});var xt=i(Ro);v(ii.$$.fragment,xt),Sb=h(xt),rn=a(xt,"P",{});var Md=i(rn);Wb=n(Md,"The "),ed=a(Md,"A",{href:!0});var S2=i(ed);Ub=n(S2,"TFRoFormerForQuestionAnswering"),S2.forEach(o),Kb=n(Md," forward method, overrides the "),dp=a(Md,"CODE",{});var W2=i(dp);Qb=n(W2,"__call__"),W2.forEach(o),Hb=n(Md," special method."),Md.forEach(o),Bb=h(xt),v(Cs.$$.fragment,xt),Vb=h(xt),v(qs.$$.fragment,xt),Jb=h(xt),v(Ps.$$.fragment,xt),xt.forEach(o),rt.forEach(o),qh=h(s),an=a(s,"H2",{class:!0});var Cf=i(an);As=a(Cf,"A",{id:!0,class:!0,href:!0});var U2=i(As);cp=a(U2,"SPAN",{});var K2=i(cp);v(li.$$.fragment,K2),K2.forEach(o),U2.forEach(o),Gb=h(Cf),pp=a(Cf,"SPAN",{});var Q2=i(pp);Xb=n(Q2,"FlaxRoFormerModel"),Q2.forEach(o),Cf.forEach(o),Ph=h(s),eo=a(s,"DIV",{class:!0});var jo=i(eo);v(di.$$.fragment,jo),Yb=h(jo),mp=a(jo,"P",{});var H2=i(mp);Zb=n(H2,"The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top."),H2.forEach(o),ev=h(jo),ci=a(jo,"P",{});var qf=i(ci);ov=n(qf,"This model inherits from "),od=a(qf,"A",{href:!0});var B2=i(od);tv=n(B2,"FlaxPreTrainedModel"),B2.forEach(o),nv=n(qf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),qf.forEach(o),sv=h(jo),pi=a(jo,"P",{});var Pf=i(pi);rv=n(Pf,"This model is also a Flax Linen "),mi=a(Pf,"A",{href:!0,rel:!0});var V2=i(mi);av=n(V2,"flax.linen.Module"),V2.forEach(o),iv=n(Pf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Pf.forEach(o),lv=h(jo),hp=a(jo,"P",{});var J2=i(hp);dv=n(J2,"Finally, this model supports inherent JAX features such as:"),J2.forEach(o),cv=h(jo),lt=a(jo,"UL",{});var lr=i(lt);fp=a(lr,"LI",{});var G2=i(fp);hi=a(G2,"A",{href:!0,rel:!0});var X2=i(hi);pv=n(X2,"Just-In-Time (JIT) compilation"),X2.forEach(o),G2.forEach(o),mv=h(lr),up=a(lr,"LI",{});var Y2=i(up);fi=a(Y2,"A",{href:!0,rel:!0});var Z2=i(fi);hv=n(Z2,"Automatic Differentiation"),Z2.forEach(o),Y2.forEach(o),fv=h(lr),gp=a(lr,"LI",{});var e0=i(gp);ui=a(e0,"A",{href:!0,rel:!0});var o0=i(ui);uv=n(o0,"Vectorization"),o0.forEach(o),e0.forEach(o),gv=h(lr),_p=a(lr,"LI",{});var t0=i(_p);gi=a(t0,"A",{href:!0,rel:!0});var n0=i(gi);_v=n(n0,"Parallelization"),n0.forEach(o),t0.forEach(o),lr.forEach(o),kv=h(jo),Ho=a(jo,"DIV",{class:!0});var dr=i(Ho);v(_i.$$.fragment,dr),Fv=h(dr),ln=a(dr,"P",{});var jd=i(ln);yv=n(jd,"The "),kp=a(jd,"CODE",{});var s0=i(kp);bv=n(s0,"FlaxRoFormerPreTrainedModel"),s0.forEach(o),vv=n(jd," forward method, overrides the "),Fp=a(jd,"CODE",{});var r0=i(Fp);wv=n(r0,"__call__"),r0.forEach(o),Tv=n(jd," special method."),jd.forEach(o),$v=h(dr),v(Ls.$$.fragment,dr),xv=h(dr),v(Os.$$.fragment,dr),dr.forEach(o),jo.forEach(o),Ah=h(s),dn=a(s,"H2",{class:!0});var Af=i(dn);Ds=a(Af,"A",{id:!0,class:!0,href:!0});var a0=i(Ds);yp=a(a0,"SPAN",{});var i0=i(yp);v(ki.$$.fragment,i0),i0.forEach(o),a0.forEach(o),Rv=h(Af),bp=a(Af,"SPAN",{});var l0=i(bp);Ev=n(l0,"FlaxRoFormerForMaskedLM"),l0.forEach(o),Af.forEach(o),Lh=h(s),oo=a(s,"DIV",{class:!0});var zo=i(oo);v(Fi.$$.fragment,zo),Mv=h(zo),yi=a(zo,"P",{});var Lf=i(yi);jv=n(Lf,"RoFormer Model with a "),vp=a(Lf,"CODE",{});var d0=i(vp);zv=n(d0,"language modeling"),d0.forEach(o),Cv=n(Lf," head on top."),Lf.forEach(o),qv=h(zo),bi=a(zo,"P",{});var Of=i(bi);Pv=n(Of,"This model inherits from "),td=a(Of,"A",{href:!0});var c0=i(td);Av=n(c0,"FlaxPreTrainedModel"),c0.forEach(o),Lv=n(Of,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Of.forEach(o),Ov=h(zo),vi=a(zo,"P",{});var Df=i(vi);Dv=n(Df,"This model is also a Flax Linen "),wi=a(Df,"A",{href:!0,rel:!0});var p0=i(wi);Iv=n(p0,"flax.linen.Module"),p0.forEach(o),Nv=n(Df,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Df.forEach(o),Sv=h(zo),wp=a(zo,"P",{});var m0=i(wp);Wv=n(m0,"Finally, this model supports inherent JAX features such as:"),m0.forEach(o),Uv=h(zo),dt=a(zo,"UL",{});var cr=i(dt);Tp=a(cr,"LI",{});var h0=i(Tp);Ti=a(h0,"A",{href:!0,rel:!0});var f0=i(Ti);Kv=n(f0,"Just-In-Time (JIT) compilation"),f0.forEach(o),h0.forEach(o),Qv=h(cr),$p=a(cr,"LI",{});var u0=i($p);$i=a(u0,"A",{href:!0,rel:!0});var g0=i($i);Hv=n(g0,"Automatic Differentiation"),g0.forEach(o),u0.forEach(o),Bv=h(cr),xp=a(cr,"LI",{});var _0=i(xp);xi=a(_0,"A",{href:!0,rel:!0});var k0=i(xi);Vv=n(k0,"Vectorization"),k0.forEach(o),_0.forEach(o),Jv=h(cr),Rp=a(cr,"LI",{});var F0=i(Rp);Ri=a(F0,"A",{href:!0,rel:!0});var y0=i(Ri);Gv=n(y0,"Parallelization"),y0.forEach(o),F0.forEach(o),cr.forEach(o),Xv=h(zo),Bo=a(zo,"DIV",{class:!0});var pr=i(Bo);v(Ei.$$.fragment,pr),Yv=h(pr),cn=a(pr,"P",{});var zd=i(cn);Zv=n(zd,"The "),Ep=a(zd,"CODE",{});var b0=i(Ep);ew=n(b0,"FlaxRoFormerPreTrainedModel"),b0.forEach(o),ow=n(zd," forward method, overrides the "),Mp=a(zd,"CODE",{});var v0=i(Mp);tw=n(v0,"__call__"),v0.forEach(o),nw=n(zd," special method."),zd.forEach(o),sw=h(pr),v(Is.$$.fragment,pr),rw=h(pr),v(Ns.$$.fragment,pr),pr.forEach(o),zo.forEach(o),Oh=h(s),pn=a(s,"H2",{class:!0});var If=i(pn);Ss=a(If,"A",{id:!0,class:!0,href:!0});var w0=i(Ss);jp=a(w0,"SPAN",{});var T0=i(jp);v(Mi.$$.fragment,T0),T0.forEach(o),w0.forEach(o),aw=h(If),zp=a(If,"SPAN",{});var $0=i(zp);iw=n($0,"FlaxRoFormerForSequenceClassification"),$0.forEach(o),If.forEach(o),Dh=h(s),to=a(s,"DIV",{class:!0});var Co=i(to);v(ji.$$.fragment,Co),lw=h(Co),Cp=a(Co,"P",{});var x0=i(Cp);dw=n(x0,`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),x0.forEach(o),cw=h(Co),zi=a(Co,"P",{});var Nf=i(zi);pw=n(Nf,"This model inherits from "),nd=a(Nf,"A",{href:!0});var R0=i(nd);mw=n(R0,"FlaxPreTrainedModel"),R0.forEach(o),hw=n(Nf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Nf.forEach(o),fw=h(Co),Ci=a(Co,"P",{});var Sf=i(Ci);uw=n(Sf,"This model is also a Flax Linen "),qi=a(Sf,"A",{href:!0,rel:!0});var E0=i(qi);gw=n(E0,"flax.linen.Module"),E0.forEach(o),_w=n(Sf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Sf.forEach(o),kw=h(Co),qp=a(Co,"P",{});var M0=i(qp);Fw=n(M0,"Finally, this model supports inherent JAX features such as:"),M0.forEach(o),yw=h(Co),ct=a(Co,"UL",{});var mr=i(ct);Pp=a(mr,"LI",{});var j0=i(Pp);Pi=a(j0,"A",{href:!0,rel:!0});var z0=i(Pi);bw=n(z0,"Just-In-Time (JIT) compilation"),z0.forEach(o),j0.forEach(o),vw=h(mr),Ap=a(mr,"LI",{});var C0=i(Ap);Ai=a(C0,"A",{href:!0,rel:!0});var q0=i(Ai);ww=n(q0,"Automatic Differentiation"),q0.forEach(o),C0.forEach(o),Tw=h(mr),Lp=a(mr,"LI",{});var P0=i(Lp);Li=a(P0,"A",{href:!0,rel:!0});var A0=i(Li);$w=n(A0,"Vectorization"),A0.forEach(o),P0.forEach(o),xw=h(mr),Op=a(mr,"LI",{});var L0=i(Op);Oi=a(L0,"A",{href:!0,rel:!0});var O0=i(Oi);Rw=n(O0,"Parallelization"),O0.forEach(o),L0.forEach(o),mr.forEach(o),Ew=h(Co),Vo=a(Co,"DIV",{class:!0});var hr=i(Vo);v(Di.$$.fragment,hr),Mw=h(hr),mn=a(hr,"P",{});var Cd=i(mn);jw=n(Cd,"The "),Dp=a(Cd,"CODE",{});var D0=i(Dp);zw=n(D0,"FlaxRoFormerPreTrainedModel"),D0.forEach(o),Cw=n(Cd," forward method, overrides the "),Ip=a(Cd,"CODE",{});var I0=i(Ip);qw=n(I0,"__call__"),I0.forEach(o),Pw=n(Cd," special method."),Cd.forEach(o),Aw=h(hr),v(Ws.$$.fragment,hr),Lw=h(hr),v(Us.$$.fragment,hr),hr.forEach(o),Co.forEach(o),Ih=h(s),hn=a(s,"H2",{class:!0});var Wf=i(hn);Ks=a(Wf,"A",{id:!0,class:!0,href:!0});var N0=i(Ks);Np=a(N0,"SPAN",{});var S0=i(Np);v(Ii.$$.fragment,S0),S0.forEach(o),N0.forEach(o),Ow=h(Wf),Sp=a(Wf,"SPAN",{});var W0=i(Sp);Dw=n(W0,"FlaxRoFormerForMultipleChoice"),W0.forEach(o),Wf.forEach(o),Nh=h(s),no=a(s,"DIV",{class:!0});var qo=i(no);v(Ni.$$.fragment,qo),Iw=h(qo),Wp=a(qo,"P",{});var U0=i(Wp);Nw=n(U0,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),U0.forEach(o),Sw=h(qo),Si=a(qo,"P",{});var Uf=i(Si);Ww=n(Uf,"This model inherits from "),sd=a(Uf,"A",{href:!0});var K0=i(sd);Uw=n(K0,"FlaxPreTrainedModel"),K0.forEach(o),Kw=n(Uf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uf.forEach(o),Qw=h(qo),Wi=a(qo,"P",{});var Kf=i(Wi);Hw=n(Kf,"This model is also a Flax Linen "),Ui=a(Kf,"A",{href:!0,rel:!0});var Q0=i(Ui);Bw=n(Q0,"flax.linen.Module"),Q0.forEach(o),Vw=n(Kf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Kf.forEach(o),Jw=h(qo),Up=a(qo,"P",{});var H0=i(Up);Gw=n(H0,"Finally, this model supports inherent JAX features such as:"),H0.forEach(o),Xw=h(qo),pt=a(qo,"UL",{});var fr=i(pt);Kp=a(fr,"LI",{});var B0=i(Kp);Ki=a(B0,"A",{href:!0,rel:!0});var V0=i(Ki);Yw=n(V0,"Just-In-Time (JIT) compilation"),V0.forEach(o),B0.forEach(o),Zw=h(fr),Qp=a(fr,"LI",{});var J0=i(Qp);Qi=a(J0,"A",{href:!0,rel:!0});var G0=i(Qi);eT=n(G0,"Automatic Differentiation"),G0.forEach(o),J0.forEach(o),oT=h(fr),Hp=a(fr,"LI",{});var X0=i(Hp);Hi=a(X0,"A",{href:!0,rel:!0});var Y0=i(Hi);tT=n(Y0,"Vectorization"),Y0.forEach(o),X0.forEach(o),nT=h(fr),Bp=a(fr,"LI",{});var Z0=i(Bp);Bi=a(Z0,"A",{href:!0,rel:!0});var ex=i(Bi);sT=n(ex,"Parallelization"),ex.forEach(o),Z0.forEach(o),fr.forEach(o),rT=h(qo),Jo=a(qo,"DIV",{class:!0});var ur=i(Jo);v(Vi.$$.fragment,ur),aT=h(ur),fn=a(ur,"P",{});var qd=i(fn);iT=n(qd,"The "),Vp=a(qd,"CODE",{});var ox=i(Vp);lT=n(ox,"FlaxRoFormerPreTrainedModel"),ox.forEach(o),dT=n(qd," forward method, overrides the "),Jp=a(qd,"CODE",{});var tx=i(Jp);cT=n(tx,"__call__"),tx.forEach(o),pT=n(qd," special method."),qd.forEach(o),mT=h(ur),v(Qs.$$.fragment,ur),hT=h(ur),v(Hs.$$.fragment,ur),ur.forEach(o),qo.forEach(o),Sh=h(s),un=a(s,"H2",{class:!0});var Qf=i(un);Bs=a(Qf,"A",{id:!0,class:!0,href:!0});var nx=i(Bs);Gp=a(nx,"SPAN",{});var sx=i(Gp);v(Ji.$$.fragment,sx),sx.forEach(o),nx.forEach(o),fT=h(Qf),Xp=a(Qf,"SPAN",{});var rx=i(Xp);uT=n(rx,"FlaxRoFormerForTokenClassification"),rx.forEach(o),Qf.forEach(o),Wh=h(s),so=a(s,"DIV",{class:!0});var Po=i(so);v(Gi.$$.fragment,Po),gT=h(Po),Yp=a(Po,"P",{});var ax=i(Yp);_T=n(ax,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ax.forEach(o),kT=h(Po),Xi=a(Po,"P",{});var Hf=i(Xi);FT=n(Hf,"This model inherits from "),rd=a(Hf,"A",{href:!0});var ix=i(rd);yT=n(ix,"FlaxPreTrainedModel"),ix.forEach(o),bT=n(Hf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hf.forEach(o),vT=h(Po),Yi=a(Po,"P",{});var Bf=i(Yi);wT=n(Bf,"This model is also a Flax Linen "),Zi=a(Bf,"A",{href:!0,rel:!0});var lx=i(Zi);TT=n(lx,"flax.linen.Module"),lx.forEach(o),$T=n(Bf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Bf.forEach(o),xT=h(Po),Zp=a(Po,"P",{});var dx=i(Zp);RT=n(dx,"Finally, this model supports inherent JAX features such as:"),dx.forEach(o),ET=h(Po),mt=a(Po,"UL",{});var gr=i(mt);em=a(gr,"LI",{});var cx=i(em);el=a(cx,"A",{href:!0,rel:!0});var px=i(el);MT=n(px,"Just-In-Time (JIT) compilation"),px.forEach(o),cx.forEach(o),jT=h(gr),om=a(gr,"LI",{});var mx=i(om);ol=a(mx,"A",{href:!0,rel:!0});var hx=i(ol);zT=n(hx,"Automatic Differentiation"),hx.forEach(o),mx.forEach(o),CT=h(gr),tm=a(gr,"LI",{});var fx=i(tm);tl=a(fx,"A",{href:!0,rel:!0});var ux=i(tl);qT=n(ux,"Vectorization"),ux.forEach(o),fx.forEach(o),PT=h(gr),nm=a(gr,"LI",{});var gx=i(nm);nl=a(gx,"A",{href:!0,rel:!0});var _x=i(nl);AT=n(_x,"Parallelization"),_x.forEach(o),gx.forEach(o),gr.forEach(o),LT=h(Po),Go=a(Po,"DIV",{class:!0});var _r=i(Go);v(sl.$$.fragment,_r),OT=h(_r),gn=a(_r,"P",{});var Pd=i(gn);DT=n(Pd,"The "),sm=a(Pd,"CODE",{});var kx=i(sm);IT=n(kx,"FlaxRoFormerPreTrainedModel"),kx.forEach(o),NT=n(Pd," forward method, overrides the "),rm=a(Pd,"CODE",{});var Fx=i(rm);ST=n(Fx,"__call__"),Fx.forEach(o),WT=n(Pd," special method."),Pd.forEach(o),UT=h(_r),v(Vs.$$.fragment,_r),KT=h(_r),v(Js.$$.fragment,_r),_r.forEach(o),Po.forEach(o),Uh=h(s),_n=a(s,"H2",{class:!0});var Vf=i(_n);Gs=a(Vf,"A",{id:!0,class:!0,href:!0});var yx=i(Gs);am=a(yx,"SPAN",{});var bx=i(am);v(rl.$$.fragment,bx),bx.forEach(o),yx.forEach(o),QT=h(Vf),im=a(Vf,"SPAN",{});var vx=i(im);HT=n(vx,"FlaxRoFormerForQuestionAnswering"),vx.forEach(o),Vf.forEach(o),Kh=h(s),ro=a(s,"DIV",{class:!0});var Ao=i(ro);v(al.$$.fragment,Ao),BT=h(Ao),kn=a(Ao,"P",{});var Ad=i(kn);VT=n(Ad,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),lm=a(Ad,"CODE",{});var wx=i(lm);JT=n(wx,"span start logits"),wx.forEach(o),GT=n(Ad," and "),dm=a(Ad,"CODE",{});var Tx=i(dm);XT=n(Tx,"span end logits"),Tx.forEach(o),YT=n(Ad,")."),Ad.forEach(o),ZT=h(Ao),il=a(Ao,"P",{});var Jf=i(il);e$=n(Jf,"This model inherits from "),ad=a(Jf,"A",{href:!0});var $x=i(ad);o$=n($x,"FlaxPreTrainedModel"),$x.forEach(o),t$=n(Jf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jf.forEach(o),n$=h(Ao),ll=a(Ao,"P",{});var Gf=i(ll);s$=n(Gf,"This model is also a Flax Linen "),dl=a(Gf,"A",{href:!0,rel:!0});var xx=i(dl);r$=n(xx,"flax.linen.Module"),xx.forEach(o),a$=n(Gf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gf.forEach(o),i$=h(Ao),cm=a(Ao,"P",{});var Rx=i(cm);l$=n(Rx,"Finally, this model supports inherent JAX features such as:"),Rx.forEach(o),d$=h(Ao),ht=a(Ao,"UL",{});var kr=i(ht);pm=a(kr,"LI",{});var Ex=i(pm);cl=a(Ex,"A",{href:!0,rel:!0});var Mx=i(cl);c$=n(Mx,"Just-In-Time (JIT) compilation"),Mx.forEach(o),Ex.forEach(o),p$=h(kr),mm=a(kr,"LI",{});var jx=i(mm);pl=a(jx,"A",{href:!0,rel:!0});var zx=i(pl);m$=n(zx,"Automatic Differentiation"),zx.forEach(o),jx.forEach(o),h$=h(kr),hm=a(kr,"LI",{});var Cx=i(hm);ml=a(Cx,"A",{href:!0,rel:!0});var qx=i(ml);f$=n(qx,"Vectorization"),qx.forEach(o),Cx.forEach(o),u$=h(kr),fm=a(kr,"LI",{});var Px=i(fm);hl=a(Px,"A",{href:!0,rel:!0});var Ax=i(hl);g$=n(Ax,"Parallelization"),Ax.forEach(o),Px.forEach(o),kr.forEach(o),_$=h(Ao),Xo=a(Ao,"DIV",{class:!0});var Fr=i(Xo);v(fl.$$.fragment,Fr),k$=h(Fr),Fn=a(Fr,"P",{});var Ld=i(Fn);F$=n(Ld,"The "),um=a(Ld,"CODE",{});var Lx=i(um);y$=n(Lx,"FlaxRoFormerPreTrainedModel"),Lx.forEach(o),b$=n(Ld," forward method, overrides the "),gm=a(Ld,"CODE",{});var Ox=i(gm);v$=n(Ox,"__call__"),Ox.forEach(o),w$=n(Ld," special method."),Ld.forEach(o),T$=h(Fr),v(Xs.$$.fragment,Fr),$$=h(Fr),v(Ys.$$.fragment,Fr),Fr.forEach(o),Ao.forEach(o),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(GR)),u(f,"id","roformer"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#roformer"),u(c,"class","relative group"),u(ae,"id","overview"),u(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ae,"href","#overview"),u(I,"class","relative group"),u(ie,"href","https://arxiv.org/pdf/2104.09864v1.pdf"),u(ie,"rel","nofollow"),u(q,"href","https://huggingface.co/junnyu"),u(q,"rel","nofollow"),u(le,"href","https://github.com/ZhuiyiTechnology/roformer"),u(le,"rel","nofollow"),u(O,"id","transformers.RoFormerConfig"),u(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(O,"href","#transformers.RoFormerConfig"),u(re,"class","relative group"),u(Se,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerModel"),u(Ne,"href","https://huggingface.co/junnyu/roformer_chinese_base"),u(Ne,"rel","nofollow"),u(We,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ue,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Z,"id","transformers.RoFormerTokenizer"),u(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Z,"href","#transformers.RoFormerTokenizer"),u(De,"class","relative group"),u(wr,"href","https://pypi.org/project/rjieba/"),u(wr,"rel","nofollow"),u(xl,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ml,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"id","transformers.RoFormerTokenizerFast"),u(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(En,"href","#transformers.RoFormerTokenizerFast"),u(Et,"class","relative group"),u(jl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizerFast"),u(zl,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),u(Cl,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zn,"id","transformers.RoFormerModel"),u(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zn,"href","#transformers.RoFormerModel"),u(Mt,"class","relative group"),u(Nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Nr,"rel","nofollow"),u(Wr,"href","https://arxiv.org/abs/1706.03762"),u(Wr,"rel","nofollow"),u(Al,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerModel"),u(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"id","transformers.RoFormerForCausalLM"),u(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pn,"href","#transformers.RoFormerForCausalLM"),u(zt,"class","relative group"),u(Hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Hr,"rel","nofollow"),u(Ll,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForCausalLM"),u(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(On,"id","transformers.RoFormerForMaskedLM"),u(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(On,"href","#transformers.RoFormerForMaskedLM"),u(Pt,"class","relative group"),u(Gr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Gr,"rel","nofollow"),u(Ol,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForMaskedLM"),u(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Sn,"id","transformers.RoFormerForSequenceClassification"),u(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Sn,"href","#transformers.RoFormerForSequenceClassification"),u(Ot,"class","relative group"),u(oa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(oa,"rel","nofollow"),u(Dl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForSequenceClassification"),u(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bn,"id","transformers.RoFormerForMultipleChoice"),u(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bn,"href","#transformers.RoFormerForMultipleChoice"),u(It,"class","relative group"),u(aa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(aa,"rel","nofollow"),u(Il,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForMultipleChoice"),u(Uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.RoFormerForTokenClassification"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.RoFormerForTokenClassification"),u(St,"class","relative group"),u(pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(pa,"rel","nofollow"),u(Nl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForTokenClassification"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"id","transformers.RoFormerForQuestionAnswering"),u(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(es,"href","#transformers.RoFormerForQuestionAnswering"),u(Ut,"class","relative group"),u(ga,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ga,"rel","nofollow"),u(Sl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForQuestionAnswering"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.TFRoFormerModel"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.TFRoFormerModel"),u(Ht,"class","relative group"),u(Wl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(va,"rel","nofollow"),u(Ul,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerModel"),u(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ls,"id","transformers.TFRoFormerForMaskedLM"),u(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ls,"href","#transformers.TFRoFormerForMaskedLM"),u(Vt,"class","relative group"),u(Kl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ma,"rel","nofollow"),u(Ql,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForMaskedLM"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(hs,"id","transformers.TFRoFormerForCausalLM"),u(hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(hs,"href","#transformers.TFRoFormerForCausalLM"),u(Gt,"class","relative group"),u(Hl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(La,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(La,"rel","nofollow"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gs,"id","transformers.TFRoFormerForSequenceClassification"),u(gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(gs,"href","#transformers.TFRoFormerForSequenceClassification"),u(Xt,"class","relative group"),u(Bl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wa,"rel","nofollow"),u(Vl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForSequenceClassification"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bs,"id","transformers.TFRoFormerForMultipleChoice"),u(bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bs,"href","#transformers.TFRoFormerForMultipleChoice"),u(Zt,"class","relative group"),u(Jl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Va,"rel","nofollow"),u(Gl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForMultipleChoice"),u(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($s,"id","transformers.TFRoFormerForTokenClassification"),u($s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($s,"href","#transformers.TFRoFormerForTokenClassification"),u(on,"class","relative group"),u(Xl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ei,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ei,"rel","nofollow"),u(Yl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForTokenClassification"),u(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.TFRoFormerForQuestionAnswering"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.TFRoFormerForQuestionAnswering"),u(nn,"class","relative group"),u(Zl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ai,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ai,"rel","nofollow"),u(ed,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForQuestionAnswering"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(As,"id","transformers.FlaxRoFormerModel"),u(As,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(As,"href","#transformers.FlaxRoFormerModel"),u(an,"class","relative group"),u(od,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(mi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(mi,"rel","nofollow"),u(hi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(hi,"rel","nofollow"),u(fi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(fi,"rel","nofollow"),u(ui,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ui,"rel","nofollow"),u(gi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(gi,"rel","nofollow"),u(Ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.FlaxRoFormerForMaskedLM"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.FlaxRoFormerForMaskedLM"),u(dn,"class","relative group"),u(td,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(wi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(wi,"rel","nofollow"),u(Ti,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ti,"rel","nofollow"),u($i,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u($i,"rel","nofollow"),u(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(xi,"rel","nofollow"),u(Ri,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ri,"rel","nofollow"),u(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ss,"id","transformers.FlaxRoFormerForSequenceClassification"),u(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ss,"href","#transformers.FlaxRoFormerForSequenceClassification"),u(pn,"class","relative group"),u(nd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(qi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(qi,"rel","nofollow"),u(Pi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Pi,"rel","nofollow"),u(Ai,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ai,"rel","nofollow"),u(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Li,"rel","nofollow"),u(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Oi,"rel","nofollow"),u(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.FlaxRoFormerForMultipleChoice"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.FlaxRoFormerForMultipleChoice"),u(hn,"class","relative group"),u(sd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ui,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ui,"rel","nofollow"),u(Ki,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ki,"rel","nofollow"),u(Qi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Qi,"rel","nofollow"),u(Hi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Hi,"rel","nofollow"),u(Bi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Bi,"rel","nofollow"),u(Jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bs,"id","transformers.FlaxRoFormerForTokenClassification"),u(Bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bs,"href","#transformers.FlaxRoFormerForTokenClassification"),u(un,"class","relative group"),u(rd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Zi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Zi,"rel","nofollow"),u(el,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(el,"rel","nofollow"),u(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ol,"rel","nofollow"),u(tl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(tl,"rel","nofollow"),u(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(nl,"rel","nofollow"),u(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gs,"id","transformers.FlaxRoFormerForQuestionAnswering"),u(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gs,"href","#transformers.FlaxRoFormerForQuestionAnswering"),u(_n,"class","relative group"),u(ad,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(dl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(dl,"rel","nofollow"),u(cl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(cl,"rel","nofollow"),u(pl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(pl,"rel","nofollow"),u(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ml,"rel","nofollow"),u(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(hl,"rel","nofollow"),u(Xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,F){e(document.head,d),_(s,g,F),_(s,c,F),e(c,f),e(f,k),w(l,k,null),e(c,p),e(c,j),e(j,Te),_(s,ge,F),_(s,I,F),e(I,ae),e(ae,ee),w(R,ee,null),e(I,$e),e(I,H),e(H,xe),_(s,_e,F),_(s,N,F),e(N,Re),e(N,ie),e(ie,V),e(N,Ee),_(s,ke,F),_(s,W,F),e(W,Me),_(s,Fe,F),_(s,U,F),e(U,he),e(he,je),_(s,te,F),_(s,C,F),e(C,A),_(s,ye,F),_(s,K,F),e(K,fe),e(fe,ze),_(s,B,F),_(s,ne,F),e(ne,Ce),e(ne,q),e(q,qe),e(ne,J),e(ne,le),e(le,Pe),e(ne,G),_(s,be,F),_(s,re,F),e(re,O),e(O,ue),w(S,ue,null),e(re,Ae),e(re,oe),e(oe,L),_(s,ve,F),_(s,P,F),w(de,P,null),e(P,Le),e(P,y),e(y,M),e(y,Se),e(Se,se),e(y,Be),e(y,Ne),e(Ne,z),e(y,Ve),e(P,Je),e(P,Oe),e(Oe,Ge),e(Oe,We),e(We,D),e(Oe,X),e(Oe,Ue),e(Ue,Xe),e(Oe,Y),e(P,Ye),w(Ie,P,null),_(s,we,F),_(s,De,F),e(De,Z),e(Z,Ke),w(yr,Ke,null),e(De,Xf),e(De,Od),e(Od,Yf),_(s,th,F),_(s,Ze,F),w(br,Ze,null),e(Ze,Zf),e(Ze,vr),e(vr,eu),e(vr,wr),e(wr,ou),e(vr,tu),e(Ze,nu),e(Ze,Tr),e(Tr,su),e(Tr,xl),e(xl,ru),e(Tr,au),e(Ze,iu),w($n,Ze,null),e(Ze,lu),e(Ze,gt),w($r,gt,null),e(gt,du),e(gt,Dd),e(Dd,cu),e(gt,pu),e(gt,xr),e(xr,Rl),e(Rl,mu),e(Rl,Id),e(Id,hu),e(xr,fu),e(xr,El),e(El,uu),e(El,Nd),e(Nd,gu),e(Ze,_u),e(Ze,xn),w(Rr,xn,null),e(xn,ku),e(xn,Er),e(Er,Fu),e(Er,Sd),e(Sd,yu),e(Er,bu),e(Ze,vu),e(Ze,No),w(Mr,No,null),e(No,wu),e(No,Wd),e(Wd,Tu),e(No,$u),w(Rn,No,null),e(No,xu),e(No,Rt),e(Rt,Ru),e(Rt,Ud),e(Ud,Eu),e(Rt,Mu),e(Rt,Kd),e(Kd,ju),e(Rt,zu),e(Ze,Cu),e(Ze,Ml),w(jr,Ml,null),_(s,nh,F),_(s,Et,F),e(Et,En),e(En,Qd),w(zr,Qd,null),e(Et,qu),e(Et,Hd),e(Hd,Pu),_(s,sh,F),_(s,lo,F),w(Cr,lo,null),e(lo,Au),e(lo,qr),e(qr,Lu),e(qr,Bd),e(Bd,Ou),e(qr,Du),e(lo,Iu),e(lo,Mn),e(Mn,jl),e(jl,Nu),e(Mn,Su),e(Mn,zl),e(zl,Wu),e(Mn,Uu),e(lo,Ku),e(lo,Pr),e(Pr,Qu),e(Pr,Cl),e(Cl,Hu),e(Pr,Bu),e(lo,Vu),w(jn,lo,null),e(lo,Ju),e(lo,_t),w(Ar,_t,null),e(_t,Gu),e(_t,Vd),e(Vd,Xu),e(_t,Yu),e(_t,Lr),e(Lr,ql),e(ql,Zu),e(ql,Jd),e(Jd,eg),e(Lr,og),e(Lr,Pl),e(Pl,tg),e(Pl,Gd),e(Gd,ng),_(s,rh,F),_(s,Mt,F),e(Mt,zn),e(zn,Xd),w(Or,Xd,null),e(Mt,sg),e(Mt,Yd),e(Yd,rg),_(s,ah,F),_(s,ko,F),w(Dr,ko,null),e(ko,ag),e(ko,Ir),e(Ir,ig),e(Ir,Nr),e(Nr,lg),e(Ir,dg),e(ko,cg),e(ko,Sr),e(Sr,pg),e(Sr,Wr),e(Wr,mg),e(Sr,hg),e(ko,fg),e(ko,co),e(co,ug),e(co,Zd),e(Zd,gg),e(co,_g),e(co,ec),e(ec,kg),e(co,Fg),e(co,oc),e(oc,yg),e(co,bg),e(co,tc),e(tc,vg),e(co,wg),e(co,nc),e(nc,Tg),e(co,$g),e(co,sc),e(sc,xg),e(co,Rg),e(ko,Eg),e(ko,So),w(Ur,So,null),e(So,Mg),e(So,jt),e(jt,jg),e(jt,Al),e(Al,zg),e(jt,Cg),e(jt,rc),e(rc,qg),e(jt,Pg),e(So,Ag),w(Cn,So,null),e(So,Lg),w(qn,So,null),_(s,ih,F),_(s,zt,F),e(zt,Pn),e(Pn,ac),w(Kr,ac,null),e(zt,Og),e(zt,ic),e(ic,Dg),_(s,lh,F),_(s,at,F),w(Qr,at,null),e(at,Ig),e(at,Ct),e(Ct,Ng),e(Ct,lc),e(lc,Sg),e(Ct,Wg),e(Ct,Hr),e(Hr,Ug),e(Ct,Kg),e(at,Qg),e(at,Wo),w(Br,Wo,null),e(Wo,Hg),e(Wo,qt),e(qt,Bg),e(qt,Ll),e(Ll,Vg),e(qt,Jg),e(qt,dc),e(dc,Gg),e(qt,Xg),e(Wo,Yg),w(An,Wo,null),e(Wo,Zg),w(Ln,Wo,null),_(s,dh,F),_(s,Pt,F),e(Pt,On),e(On,cc),w(Vr,cc,null),e(Pt,e_),e(Pt,pc),e(pc,o_),_(s,ch,F),_(s,it,F),w(Jr,it,null),e(it,t_),e(it,At),e(At,n_),e(At,mc),e(mc,s_),e(At,r_),e(At,Gr),e(Gr,a_),e(At,i_),e(it,l_),e(it,bo),w(Xr,bo,null),e(bo,d_),e(bo,Lt),e(Lt,c_),e(Lt,Ol),e(Ol,p_),e(Lt,m_),e(Lt,hc),e(hc,h_),e(Lt,f_),e(bo,u_),w(Dn,bo,null),e(bo,g_),w(In,bo,null),e(bo,__),w(Nn,bo,null),_(s,ph,F),_(s,Ot,F),e(Ot,Sn),e(Sn,fc),w(Yr,fc,null),e(Ot,k_),e(Ot,uc),e(uc,F_),_(s,mh,F),_(s,Lo,F),w(Zr,Lo,null),e(Lo,y_),e(Lo,gc),e(gc,b_),e(Lo,v_),e(Lo,ea),e(ea,w_),e(ea,oa),e(oa,T_),e(ea,$_),e(Lo,x_),e(Lo,io),w(ta,io,null),e(io,R_),e(io,Dt),e(Dt,E_),e(Dt,Dl),e(Dl,M_),e(Dt,j_),e(Dt,_c),e(_c,z_),e(Dt,C_),e(io,q_),w(Wn,io,null),e(io,P_),w(Un,io,null),e(io,A_),w(Kn,io,null),e(io,L_),w(Qn,io,null),e(io,O_),w(Hn,io,null),_(s,hh,F),_(s,It,F),e(It,Bn),e(Bn,kc),w(na,kc,null),e(It,D_),e(It,Fc),e(Fc,I_),_(s,fh,F),_(s,Oo,F),w(sa,Oo,null),e(Oo,N_),e(Oo,yc),e(yc,S_),e(Oo,W_),e(Oo,ra),e(ra,U_),e(ra,aa),e(aa,K_),e(ra,Q_),e(Oo,H_),e(Oo,Uo),w(ia,Uo,null),e(Uo,B_),e(Uo,Nt),e(Nt,V_),e(Nt,Il),e(Il,J_),e(Nt,G_),e(Nt,bc),e(bc,X_),e(Nt,Y_),e(Uo,Z_),w(Vn,Uo,null),e(Uo,ek),w(Jn,Uo,null),_(s,uh,F),_(s,St,F),e(St,Gn),e(Gn,vc),w(la,vc,null),e(St,ok),e(St,wc),e(wc,tk),_(s,gh,F),_(s,Do,F),w(da,Do,null),e(Do,nk),e(Do,Tc),e(Tc,sk),e(Do,rk),e(Do,ca),e(ca,ak),e(ca,pa),e(pa,ik),e(ca,lk),e(Do,dk),e(Do,vo),w(ma,vo,null),e(vo,ck),e(vo,Wt),e(Wt,pk),e(Wt,Nl),e(Nl,mk),e(Wt,hk),e(Wt,$c),e($c,fk),e(Wt,uk),e(vo,gk),w(Xn,vo,null),e(vo,_k),w(Yn,vo,null),e(vo,kk),w(Zn,vo,null),_(s,_h,F),_(s,Ut,F),e(Ut,es),e(es,xc),w(ha,xc,null),e(Ut,Fk),e(Ut,Rc),e(Rc,yk),_(s,kh,F),_(s,Io,F),w(fa,Io,null),e(Io,bk),e(Io,Kt),e(Kt,vk),e(Kt,Ec),e(Ec,wk),e(Kt,Tk),e(Kt,Mc),e(Mc,$k),e(Kt,xk),e(Io,Rk),e(Io,ua),e(ua,Ek),e(ua,ga),e(ga,Mk),e(ua,jk),e(Io,zk),e(Io,wo),w(_a,wo,null),e(wo,Ck),e(wo,Qt),e(Qt,qk),e(Qt,Sl),e(Sl,Pk),e(Qt,Ak),e(Qt,jc),e(jc,Lk),e(Qt,Ok),e(wo,Dk),w(os,wo,null),e(wo,Ik),w(ts,wo,null),e(wo,Nk),w(ns,wo,null),_(s,Fh,F),_(s,Ht,F),e(Ht,ss),e(ss,zc),w(ka,zc,null),e(Ht,Sk),e(Ht,Cc),e(Cc,Wk),_(s,yh,F),_(s,po,F),w(Fa,po,null),e(po,Uk),e(po,qc),e(qc,Kk),e(po,Qk),e(po,ya),e(ya,Hk),e(ya,Wl),e(Wl,Bk),e(ya,Vk),e(po,Jk),e(po,ba),e(ba,Gk),e(ba,va),e(va,Xk),e(ba,Yk),e(po,Zk),w(rs,po,null),e(po,eF),e(po,Ko),w(wa,Ko,null),e(Ko,oF),e(Ko,Bt),e(Bt,tF),e(Bt,Ul),e(Ul,nF),e(Bt,sF),e(Bt,Pc),e(Pc,rF),e(Bt,aF),e(Ko,iF),w(as,Ko,null),e(Ko,lF),w(is,Ko,null),_(s,bh,F),_(s,Vt,F),e(Vt,ls),e(ls,Ac),w(Ta,Ac,null),e(Vt,dF),e(Vt,Lc),e(Lc,cF),_(s,vh,F),_(s,mo,F),w($a,mo,null),e(mo,pF),e(mo,xa),e(xa,mF),e(xa,Oc),e(Oc,hF),e(xa,fF),e(mo,uF),e(mo,Ra),e(Ra,gF),e(Ra,Kl),e(Kl,_F),e(Ra,kF),e(mo,FF),e(mo,Ea),e(Ea,yF),e(Ea,Ma),e(Ma,bF),e(Ea,vF),e(mo,wF),w(ds,mo,null),e(mo,TF),e(mo,To),w(ja,To,null),e(To,$F),e(To,Jt),e(Jt,xF),e(Jt,Ql),e(Ql,RF),e(Jt,EF),e(Jt,Dc),e(Dc,MF),e(Jt,jF),e(To,zF),w(cs,To,null),e(To,CF),w(ps,To,null),e(To,qF),w(ms,To,null),_(s,wh,F),_(s,Gt,F),e(Gt,hs),e(hs,Ic),w(za,Ic,null),e(Gt,PF),e(Gt,Nc),e(Nc,AF),_(s,Th,F),_(s,ho,F),w(Ca,ho,null),e(ho,LF),e(ho,qa),e(qa,OF),e(qa,Sc),e(Sc,DF),e(qa,IF),e(ho,NF),e(ho,Pa),e(Pa,SF),e(Pa,Hl),e(Hl,WF),e(Pa,UF),e(ho,KF),e(ho,Aa),e(Aa,QF),e(Aa,La),e(La,HF),e(Aa,BF),e(ho,VF),w(fs,ho,null),e(ho,JF),e(ho,kt),w(Oa,kt,null),e(kt,GF),e(kt,Fo),e(Fo,XF),e(Fo,Wc),e(Wc,YF),e(Fo,ZF),e(Fo,Uc),e(Uc,ey),e(Fo,oy),e(Fo,Kc),e(Kc,ty),e(Fo,ny),e(Fo,Qc),e(Qc,sy),e(Fo,ry),e(Fo,Hc),e(Hc,ay),e(Fo,iy),e(kt,ly),w(us,kt,null),_(s,$h,F),_(s,Xt,F),e(Xt,gs),e(gs,Bc),w(Da,Bc,null),e(Xt,dy),e(Xt,Vc),e(Vc,cy),_(s,xh,F),_(s,fo,F),w(Ia,fo,null),e(fo,py),e(fo,Jc),e(Jc,my),e(fo,hy),e(fo,Na),e(Na,fy),e(Na,Bl),e(Bl,uy),e(Na,gy),e(fo,_y),e(fo,Sa),e(Sa,ky),e(Sa,Wa),e(Wa,Fy),e(Sa,yy),e(fo,by),w(_s,fo,null),e(fo,vy),e(fo,$o),w(Ua,$o,null),e($o,wy),e($o,Yt),e(Yt,Ty),e(Yt,Vl),e(Vl,$y),e(Yt,xy),e(Yt,Gc),e(Gc,Ry),e(Yt,Ey),e($o,My),w(ks,$o,null),e($o,jy),w(Fs,$o,null),e($o,zy),w(ys,$o,null),_(s,Rh,F),_(s,Zt,F),e(Zt,bs),e(bs,Xc),w(Ka,Xc,null),e(Zt,Cy),e(Zt,Yc),e(Yc,qy),_(s,Eh,F),_(s,uo,F),w(Qa,uo,null),e(uo,Py),e(uo,Zc),e(Zc,Ay),e(uo,Ly),e(uo,Ha),e(Ha,Oy),e(Ha,Jl),e(Jl,Dy),e(Ha,Iy),e(uo,Ny),e(uo,Ba),e(Ba,Sy),e(Ba,Va),e(Va,Wy),e(Ba,Uy),e(uo,Ky),w(vs,uo,null),e(uo,Qy),e(uo,Qo),w(Ja,Qo,null),e(Qo,Hy),e(Qo,en),e(en,By),e(en,Gl),e(Gl,Vy),e(en,Jy),e(en,ep),e(ep,Gy),e(en,Xy),e(Qo,Yy),w(ws,Qo,null),e(Qo,Zy),w(Ts,Qo,null),_(s,Mh,F),_(s,on,F),e(on,$s),e($s,op),w(Ga,op,null),e(on,eb),e(on,tp),e(tp,ob),_(s,jh,F),_(s,go,F),w(Xa,go,null),e(go,tb),e(go,np),e(np,nb),e(go,sb),e(go,Ya),e(Ya,rb),e(Ya,Xl),e(Xl,ab),e(Ya,ib),e(go,lb),e(go,Za),e(Za,db),e(Za,ei),e(ei,cb),e(Za,pb),e(go,mb),w(xs,go,null),e(go,hb),e(go,xo),w(oi,xo,null),e(xo,fb),e(xo,tn),e(tn,ub),e(tn,Yl),e(Yl,gb),e(tn,_b),e(tn,sp),e(sp,kb),e(tn,Fb),e(xo,yb),w(Rs,xo,null),e(xo,bb),w(Es,xo,null),e(xo,vb),w(Ms,xo,null),_(s,zh,F),_(s,nn,F),e(nn,js),e(js,rp),w(ti,rp,null),e(nn,wb),e(nn,ap),e(ap,Tb),_(s,Ch,F),_(s,_o,F),w(ni,_o,null),e(_o,$b),e(_o,sn),e(sn,xb),e(sn,ip),e(ip,Rb),e(sn,Eb),e(sn,lp),e(lp,Mb),e(sn,jb),e(_o,zb),e(_o,si),e(si,Cb),e(si,Zl),e(Zl,qb),e(si,Pb),e(_o,Ab),e(_o,ri),e(ri,Lb),e(ri,ai),e(ai,Ob),e(ri,Db),e(_o,Ib),w(zs,_o,null),e(_o,Nb),e(_o,Ro),w(ii,Ro,null),e(Ro,Sb),e(Ro,rn),e(rn,Wb),e(rn,ed),e(ed,Ub),e(rn,Kb),e(rn,dp),e(dp,Qb),e(rn,Hb),e(Ro,Bb),w(Cs,Ro,null),e(Ro,Vb),w(qs,Ro,null),e(Ro,Jb),w(Ps,Ro,null),_(s,qh,F),_(s,an,F),e(an,As),e(As,cp),w(li,cp,null),e(an,Gb),e(an,pp),e(pp,Xb),_(s,Ph,F),_(s,eo,F),w(di,eo,null),e(eo,Yb),e(eo,mp),e(mp,Zb),e(eo,ev),e(eo,ci),e(ci,ov),e(ci,od),e(od,tv),e(ci,nv),e(eo,sv),e(eo,pi),e(pi,rv),e(pi,mi),e(mi,av),e(pi,iv),e(eo,lv),e(eo,hp),e(hp,dv),e(eo,cv),e(eo,lt),e(lt,fp),e(fp,hi),e(hi,pv),e(lt,mv),e(lt,up),e(up,fi),e(fi,hv),e(lt,fv),e(lt,gp),e(gp,ui),e(ui,uv),e(lt,gv),e(lt,_p),e(_p,gi),e(gi,_v),e(eo,kv),e(eo,Ho),w(_i,Ho,null),e(Ho,Fv),e(Ho,ln),e(ln,yv),e(ln,kp),e(kp,bv),e(ln,vv),e(ln,Fp),e(Fp,wv),e(ln,Tv),e(Ho,$v),w(Ls,Ho,null),e(Ho,xv),w(Os,Ho,null),_(s,Ah,F),_(s,dn,F),e(dn,Ds),e(Ds,yp),w(ki,yp,null),e(dn,Rv),e(dn,bp),e(bp,Ev),_(s,Lh,F),_(s,oo,F),w(Fi,oo,null),e(oo,Mv),e(oo,yi),e(yi,jv),e(yi,vp),e(vp,zv),e(yi,Cv),e(oo,qv),e(oo,bi),e(bi,Pv),e(bi,td),e(td,Av),e(bi,Lv),e(oo,Ov),e(oo,vi),e(vi,Dv),e(vi,wi),e(wi,Iv),e(vi,Nv),e(oo,Sv),e(oo,wp),e(wp,Wv),e(oo,Uv),e(oo,dt),e(dt,Tp),e(Tp,Ti),e(Ti,Kv),e(dt,Qv),e(dt,$p),e($p,$i),e($i,Hv),e(dt,Bv),e(dt,xp),e(xp,xi),e(xi,Vv),e(dt,Jv),e(dt,Rp),e(Rp,Ri),e(Ri,Gv),e(oo,Xv),e(oo,Bo),w(Ei,Bo,null),e(Bo,Yv),e(Bo,cn),e(cn,Zv),e(cn,Ep),e(Ep,ew),e(cn,ow),e(cn,Mp),e(Mp,tw),e(cn,nw),e(Bo,sw),w(Is,Bo,null),e(Bo,rw),w(Ns,Bo,null),_(s,Oh,F),_(s,pn,F),e(pn,Ss),e(Ss,jp),w(Mi,jp,null),e(pn,aw),e(pn,zp),e(zp,iw),_(s,Dh,F),_(s,to,F),w(ji,to,null),e(to,lw),e(to,Cp),e(Cp,dw),e(to,cw),e(to,zi),e(zi,pw),e(zi,nd),e(nd,mw),e(zi,hw),e(to,fw),e(to,Ci),e(Ci,uw),e(Ci,qi),e(qi,gw),e(Ci,_w),e(to,kw),e(to,qp),e(qp,Fw),e(to,yw),e(to,ct),e(ct,Pp),e(Pp,Pi),e(Pi,bw),e(ct,vw),e(ct,Ap),e(Ap,Ai),e(Ai,ww),e(ct,Tw),e(ct,Lp),e(Lp,Li),e(Li,$w),e(ct,xw),e(ct,Op),e(Op,Oi),e(Oi,Rw),e(to,Ew),e(to,Vo),w(Di,Vo,null),e(Vo,Mw),e(Vo,mn),e(mn,jw),e(mn,Dp),e(Dp,zw),e(mn,Cw),e(mn,Ip),e(Ip,qw),e(mn,Pw),e(Vo,Aw),w(Ws,Vo,null),e(Vo,Lw),w(Us,Vo,null),_(s,Ih,F),_(s,hn,F),e(hn,Ks),e(Ks,Np),w(Ii,Np,null),e(hn,Ow),e(hn,Sp),e(Sp,Dw),_(s,Nh,F),_(s,no,F),w(Ni,no,null),e(no,Iw),e(no,Wp),e(Wp,Nw),e(no,Sw),e(no,Si),e(Si,Ww),e(Si,sd),e(sd,Uw),e(Si,Kw),e(no,Qw),e(no,Wi),e(Wi,Hw),e(Wi,Ui),e(Ui,Bw),e(Wi,Vw),e(no,Jw),e(no,Up),e(Up,Gw),e(no,Xw),e(no,pt),e(pt,Kp),e(Kp,Ki),e(Ki,Yw),e(pt,Zw),e(pt,Qp),e(Qp,Qi),e(Qi,eT),e(pt,oT),e(pt,Hp),e(Hp,Hi),e(Hi,tT),e(pt,nT),e(pt,Bp),e(Bp,Bi),e(Bi,sT),e(no,rT),e(no,Jo),w(Vi,Jo,null),e(Jo,aT),e(Jo,fn),e(fn,iT),e(fn,Vp),e(Vp,lT),e(fn,dT),e(fn,Jp),e(Jp,cT),e(fn,pT),e(Jo,mT),w(Qs,Jo,null),e(Jo,hT),w(Hs,Jo,null),_(s,Sh,F),_(s,un,F),e(un,Bs),e(Bs,Gp),w(Ji,Gp,null),e(un,fT),e(un,Xp),e(Xp,uT),_(s,Wh,F),_(s,so,F),w(Gi,so,null),e(so,gT),e(so,Yp),e(Yp,_T),e(so,kT),e(so,Xi),e(Xi,FT),e(Xi,rd),e(rd,yT),e(Xi,bT),e(so,vT),e(so,Yi),e(Yi,wT),e(Yi,Zi),e(Zi,TT),e(Yi,$T),e(so,xT),e(so,Zp),e(Zp,RT),e(so,ET),e(so,mt),e(mt,em),e(em,el),e(el,MT),e(mt,jT),e(mt,om),e(om,ol),e(ol,zT),e(mt,CT),e(mt,tm),e(tm,tl),e(tl,qT),e(mt,PT),e(mt,nm),e(nm,nl),e(nl,AT),e(so,LT),e(so,Go),w(sl,Go,null),e(Go,OT),e(Go,gn),e(gn,DT),e(gn,sm),e(sm,IT),e(gn,NT),e(gn,rm),e(rm,ST),e(gn,WT),e(Go,UT),w(Vs,Go,null),e(Go,KT),w(Js,Go,null),_(s,Uh,F),_(s,_n,F),e(_n,Gs),e(Gs,am),w(rl,am,null),e(_n,QT),e(_n,im),e(im,HT),_(s,Kh,F),_(s,ro,F),w(al,ro,null),e(ro,BT),e(ro,kn),e(kn,VT),e(kn,lm),e(lm,JT),e(kn,GT),e(kn,dm),e(dm,XT),e(kn,YT),e(ro,ZT),e(ro,il),e(il,e$),e(il,ad),e(ad,o$),e(il,t$),e(ro,n$),e(ro,ll),e(ll,s$),e(ll,dl),e(dl,r$),e(ll,a$),e(ro,i$),e(ro,cm),e(cm,l$),e(ro,d$),e(ro,ht),e(ht,pm),e(pm,cl),e(cl,c$),e(ht,p$),e(ht,mm),e(mm,pl),e(pl,m$),e(ht,h$),e(ht,hm),e(hm,ml),e(ml,f$),e(ht,u$),e(ht,fm),e(fm,hl),e(hl,g$),e(ro,_$),e(ro,Xo),w(fl,Xo,null),e(Xo,k$),e(Xo,Fn),e(Fn,F$),e(Fn,um),e(um,y$),e(Fn,b$),e(Fn,gm),e(gm,v$),e(Fn,w$),e(Xo,T$),w(Xs,Xo,null),e(Xo,$$),w(Ys,Xo,null),Qh=!0},p(s,[F]){const ul={};F&2&&(ul.$$scope={dirty:F,ctx:s}),Ie.$set(ul);const _m={};F&2&&(_m.$$scope={dirty:F,ctx:s}),$n.$set(_m);const km={};F&2&&(km.$$scope={dirty:F,ctx:s}),Rn.$set(km);const Fm={};F&2&&(Fm.$$scope={dirty:F,ctx:s}),jn.$set(Fm);const gl={};F&2&&(gl.$$scope={dirty:F,ctx:s}),Cn.$set(gl);const ym={};F&2&&(ym.$$scope={dirty:F,ctx:s}),qn.$set(ym);const bm={};F&2&&(bm.$$scope={dirty:F,ctx:s}),An.$set(bm);const vm={};F&2&&(vm.$$scope={dirty:F,ctx:s}),Ln.$set(vm);const _l={};F&2&&(_l.$$scope={dirty:F,ctx:s}),Dn.$set(_l);const wm={};F&2&&(wm.$$scope={dirty:F,ctx:s}),In.$set(wm);const Tm={};F&2&&(Tm.$$scope={dirty:F,ctx:s}),Nn.$set(Tm);const $m={};F&2&&($m.$$scope={dirty:F,ctx:s}),Wn.$set($m);const xm={};F&2&&(xm.$$scope={dirty:F,ctx:s}),Un.$set(xm);const Rm={};F&2&&(Rm.$$scope={dirty:F,ctx:s}),Kn.$set(Rm);const Em={};F&2&&(Em.$$scope={dirty:F,ctx:s}),Qn.$set(Em);const Mm={};F&2&&(Mm.$$scope={dirty:F,ctx:s}),Hn.$set(Mm);const yn={};F&2&&(yn.$$scope={dirty:F,ctx:s}),Vn.$set(yn);const jm={};F&2&&(jm.$$scope={dirty:F,ctx:s}),Jn.$set(jm);const zm={};F&2&&(zm.$$scope={dirty:F,ctx:s}),Xn.$set(zm);const kl={};F&2&&(kl.$$scope={dirty:F,ctx:s}),Yn.$set(kl);const Cm={};F&2&&(Cm.$$scope={dirty:F,ctx:s}),Zn.$set(Cm);const qm={};F&2&&(qm.$$scope={dirty:F,ctx:s}),os.$set(qm);const Pm={};F&2&&(Pm.$$scope={dirty:F,ctx:s}),ts.$set(Pm);const ft={};F&2&&(ft.$$scope={dirty:F,ctx:s}),ns.$set(ft);const bn={};F&2&&(bn.$$scope={dirty:F,ctx:s}),rs.$set(bn);const Am={};F&2&&(Am.$$scope={dirty:F,ctx:s}),as.$set(Am);const Lm={};F&2&&(Lm.$$scope={dirty:F,ctx:s}),is.$set(Lm);const vn={};F&2&&(vn.$$scope={dirty:F,ctx:s}),ds.$set(vn);const Om={};F&2&&(Om.$$scope={dirty:F,ctx:s}),cs.$set(Om);const Dm={};F&2&&(Dm.$$scope={dirty:F,ctx:s}),ps.$set(Dm);const Fl={};F&2&&(Fl.$$scope={dirty:F,ctx:s}),ms.$set(Fl);const Im={};F&2&&(Im.$$scope={dirty:F,ctx:s}),fs.$set(Im);const Nm={};F&2&&(Nm.$$scope={dirty:F,ctx:s}),us.$set(Nm);const Sm={};F&2&&(Sm.$$scope={dirty:F,ctx:s}),_s.$set(Sm);const ao={};F&2&&(ao.$$scope={dirty:F,ctx:s}),ks.$set(ao);const yl={};F&2&&(yl.$$scope={dirty:F,ctx:s}),Fs.$set(yl);const Wm={};F&2&&(Wm.$$scope={dirty:F,ctx:s}),ys.$set(Wm);const bl={};F&2&&(bl.$$scope={dirty:F,ctx:s}),vs.$set(bl);const Um={};F&2&&(Um.$$scope={dirty:F,ctx:s}),ws.$set(Um);const wn={};F&2&&(wn.$$scope={dirty:F,ctx:s}),Ts.$set(wn);const Km={};F&2&&(Km.$$scope={dirty:F,ctx:s}),xs.$set(Km);const vl={};F&2&&(vl.$$scope={dirty:F,ctx:s}),Rs.$set(vl);const id={};F&2&&(id.$$scope={dirty:F,ctx:s}),Es.$set(id);const Qm={};F&2&&(Qm.$$scope={dirty:F,ctx:s}),Ms.$set(Qm);const ld={};F&2&&(ld.$$scope={dirty:F,ctx:s}),zs.$set(ld);const Hm={};F&2&&(Hm.$$scope={dirty:F,ctx:s}),Cs.$set(Hm);const wl={};F&2&&(wl.$$scope={dirty:F,ctx:s}),qs.$set(wl);const Tl={};F&2&&(Tl.$$scope={dirty:F,ctx:s}),Ps.$set(Tl);const Bm={};F&2&&(Bm.$$scope={dirty:F,ctx:s}),Ls.$set(Bm);const ut={};F&2&&(ut.$$scope={dirty:F,ctx:s}),Os.$set(ut);const Vm={};F&2&&(Vm.$$scope={dirty:F,ctx:s}),Is.$set(Vm);const Tn={};F&2&&(Tn.$$scope={dirty:F,ctx:s}),Ns.$set(Tn);const Jm={};F&2&&(Jm.$$scope={dirty:F,ctx:s}),Ws.$set(Jm);const Gm={};F&2&&(Gm.$$scope={dirty:F,ctx:s}),Us.$set(Gm);const Xm={};F&2&&(Xm.$$scope={dirty:F,ctx:s}),Qs.$set(Xm);const $l={};F&2&&($l.$$scope={dirty:F,ctx:s}),Hs.$set($l);const Ym={};F&2&&(Ym.$$scope={dirty:F,ctx:s}),Vs.$set(Ym);const Zm={};F&2&&(Zm.$$scope={dirty:F,ctx:s}),Js.$set(Zm);const eh={};F&2&&(eh.$$scope={dirty:F,ctx:s}),Xs.$set(eh);const yo={};F&2&&(yo.$$scope={dirty:F,ctx:s}),Ys.$set(yo)},i(s){Qh||(T(l.$$.fragment,s),T(R.$$.fragment,s),T(S.$$.fragment,s),T(de.$$.fragment,s),T(Ie.$$.fragment,s),T(yr.$$.fragment,s),T(br.$$.fragment,s),T($n.$$.fragment,s),T($r.$$.fragment,s),T(Rr.$$.fragment,s),T(Mr.$$.fragment,s),T(Rn.$$.fragment,s),T(jr.$$.fragment,s),T(zr.$$.fragment,s),T(Cr.$$.fragment,s),T(jn.$$.fragment,s),T(Ar.$$.fragment,s),T(Or.$$.fragment,s),T(Dr.$$.fragment,s),T(Ur.$$.fragment,s),T(Cn.$$.fragment,s),T(qn.$$.fragment,s),T(Kr.$$.fragment,s),T(Qr.$$.fragment,s),T(Br.$$.fragment,s),T(An.$$.fragment,s),T(Ln.$$.fragment,s),T(Vr.$$.fragment,s),T(Jr.$$.fragment,s),T(Xr.$$.fragment,s),T(Dn.$$.fragment,s),T(In.$$.fragment,s),T(Nn.$$.fragment,s),T(Yr.$$.fragment,s),T(Zr.$$.fragment,s),T(ta.$$.fragment,s),T(Wn.$$.fragment,s),T(Un.$$.fragment,s),T(Kn.$$.fragment,s),T(Qn.$$.fragment,s),T(Hn.$$.fragment,s),T(na.$$.fragment,s),T(sa.$$.fragment,s),T(ia.$$.fragment,s),T(Vn.$$.fragment,s),T(Jn.$$.fragment,s),T(la.$$.fragment,s),T(da.$$.fragment,s),T(ma.$$.fragment,s),T(Xn.$$.fragment,s),T(Yn.$$.fragment,s),T(Zn.$$.fragment,s),T(ha.$$.fragment,s),T(fa.$$.fragment,s),T(_a.$$.fragment,s),T(os.$$.fragment,s),T(ts.$$.fragment,s),T(ns.$$.fragment,s),T(ka.$$.fragment,s),T(Fa.$$.fragment,s),T(rs.$$.fragment,s),T(wa.$$.fragment,s),T(as.$$.fragment,s),T(is.$$.fragment,s),T(Ta.$$.fragment,s),T($a.$$.fragment,s),T(ds.$$.fragment,s),T(ja.$$.fragment,s),T(cs.$$.fragment,s),T(ps.$$.fragment,s),T(ms.$$.fragment,s),T(za.$$.fragment,s),T(Ca.$$.fragment,s),T(fs.$$.fragment,s),T(Oa.$$.fragment,s),T(us.$$.fragment,s),T(Da.$$.fragment,s),T(Ia.$$.fragment,s),T(_s.$$.fragment,s),T(Ua.$$.fragment,s),T(ks.$$.fragment,s),T(Fs.$$.fragment,s),T(ys.$$.fragment,s),T(Ka.$$.fragment,s),T(Qa.$$.fragment,s),T(vs.$$.fragment,s),T(Ja.$$.fragment,s),T(ws.$$.fragment,s),T(Ts.$$.fragment,s),T(Ga.$$.fragment,s),T(Xa.$$.fragment,s),T(xs.$$.fragment,s),T(oi.$$.fragment,s),T(Rs.$$.fragment,s),T(Es.$$.fragment,s),T(Ms.$$.fragment,s),T(ti.$$.fragment,s),T(ni.$$.fragment,s),T(zs.$$.fragment,s),T(ii.$$.fragment,s),T(Cs.$$.fragment,s),T(qs.$$.fragment,s),T(Ps.$$.fragment,s),T(li.$$.fragment,s),T(di.$$.fragment,s),T(_i.$$.fragment,s),T(Ls.$$.fragment,s),T(Os.$$.fragment,s),T(ki.$$.fragment,s),T(Fi.$$.fragment,s),T(Ei.$$.fragment,s),T(Is.$$.fragment,s),T(Ns.$$.fragment,s),T(Mi.$$.fragment,s),T(ji.$$.fragment,s),T(Di.$$.fragment,s),T(Ws.$$.fragment,s),T(Us.$$.fragment,s),T(Ii.$$.fragment,s),T(Ni.$$.fragment,s),T(Vi.$$.fragment,s),T(Qs.$$.fragment,s),T(Hs.$$.fragment,s),T(Ji.$$.fragment,s),T(Gi.$$.fragment,s),T(sl.$$.fragment,s),T(Vs.$$.fragment,s),T(Js.$$.fragment,s),T(rl.$$.fragment,s),T(al.$$.fragment,s),T(fl.$$.fragment,s),T(Xs.$$.fragment,s),T(Ys.$$.fragment,s),Qh=!0)},o(s){$(l.$$.fragment,s),$(R.$$.fragment,s),$(S.$$.fragment,s),$(de.$$.fragment,s),$(Ie.$$.fragment,s),$(yr.$$.fragment,s),$(br.$$.fragment,s),$($n.$$.fragment,s),$($r.$$.fragment,s),$(Rr.$$.fragment,s),$(Mr.$$.fragment,s),$(Rn.$$.fragment,s),$(jr.$$.fragment,s),$(zr.$$.fragment,s),$(Cr.$$.fragment,s),$(jn.$$.fragment,s),$(Ar.$$.fragment,s),$(Or.$$.fragment,s),$(Dr.$$.fragment,s),$(Ur.$$.fragment,s),$(Cn.$$.fragment,s),$(qn.$$.fragment,s),$(Kr.$$.fragment,s),$(Qr.$$.fragment,s),$(Br.$$.fragment,s),$(An.$$.fragment,s),$(Ln.$$.fragment,s),$(Vr.$$.fragment,s),$(Jr.$$.fragment,s),$(Xr.$$.fragment,s),$(Dn.$$.fragment,s),$(In.$$.fragment,s),$(Nn.$$.fragment,s),$(Yr.$$.fragment,s),$(Zr.$$.fragment,s),$(ta.$$.fragment,s),$(Wn.$$.fragment,s),$(Un.$$.fragment,s),$(Kn.$$.fragment,s),$(Qn.$$.fragment,s),$(Hn.$$.fragment,s),$(na.$$.fragment,s),$(sa.$$.fragment,s),$(ia.$$.fragment,s),$(Vn.$$.fragment,s),$(Jn.$$.fragment,s),$(la.$$.fragment,s),$(da.$$.fragment,s),$(ma.$$.fragment,s),$(Xn.$$.fragment,s),$(Yn.$$.fragment,s),$(Zn.$$.fragment,s),$(ha.$$.fragment,s),$(fa.$$.fragment,s),$(_a.$$.fragment,s),$(os.$$.fragment,s),$(ts.$$.fragment,s),$(ns.$$.fragment,s),$(ka.$$.fragment,s),$(Fa.$$.fragment,s),$(rs.$$.fragment,s),$(wa.$$.fragment,s),$(as.$$.fragment,s),$(is.$$.fragment,s),$(Ta.$$.fragment,s),$($a.$$.fragment,s),$(ds.$$.fragment,s),$(ja.$$.fragment,s),$(cs.$$.fragment,s),$(ps.$$.fragment,s),$(ms.$$.fragment,s),$(za.$$.fragment,s),$(Ca.$$.fragment,s),$(fs.$$.fragment,s),$(Oa.$$.fragment,s),$(us.$$.fragment,s),$(Da.$$.fragment,s),$(Ia.$$.fragment,s),$(_s.$$.fragment,s),$(Ua.$$.fragment,s),$(ks.$$.fragment,s),$(Fs.$$.fragment,s),$(ys.$$.fragment,s),$(Ka.$$.fragment,s),$(Qa.$$.fragment,s),$(vs.$$.fragment,s),$(Ja.$$.fragment,s),$(ws.$$.fragment,s),$(Ts.$$.fragment,s),$(Ga.$$.fragment,s),$(Xa.$$.fragment,s),$(xs.$$.fragment,s),$(oi.$$.fragment,s),$(Rs.$$.fragment,s),$(Es.$$.fragment,s),$(Ms.$$.fragment,s),$(ti.$$.fragment,s),$(ni.$$.fragment,s),$(zs.$$.fragment,s),$(ii.$$.fragment,s),$(Cs.$$.fragment,s),$(qs.$$.fragment,s),$(Ps.$$.fragment,s),$(li.$$.fragment,s),$(di.$$.fragment,s),$(_i.$$.fragment,s),$(Ls.$$.fragment,s),$(Os.$$.fragment,s),$(ki.$$.fragment,s),$(Fi.$$.fragment,s),$(Ei.$$.fragment,s),$(Is.$$.fragment,s),$(Ns.$$.fragment,s),$(Mi.$$.fragment,s),$(ji.$$.fragment,s),$(Di.$$.fragment,s),$(Ws.$$.fragment,s),$(Us.$$.fragment,s),$(Ii.$$.fragment,s),$(Ni.$$.fragment,s),$(Vi.$$.fragment,s),$(Qs.$$.fragment,s),$(Hs.$$.fragment,s),$(Ji.$$.fragment,s),$(Gi.$$.fragment,s),$(sl.$$.fragment,s),$(Vs.$$.fragment,s),$(Js.$$.fragment,s),$(rl.$$.fragment,s),$(al.$$.fragment,s),$(fl.$$.fragment,s),$(Xs.$$.fragment,s),$(Ys.$$.fragment,s),Qh=!1},d(s){o(d),s&&o(g),s&&o(c),x(l),s&&o(ge),s&&o(I),x(R),s&&o(_e),s&&o(N),s&&o(ke),s&&o(W),s&&o(Fe),s&&o(U),s&&o(te),s&&o(C),s&&o(ye),s&&o(K),s&&o(B),s&&o(ne),s&&o(be),s&&o(re),x(S),s&&o(ve),s&&o(P),x(de),x(Ie),s&&o(we),s&&o(De),x(yr),s&&o(th),s&&o(Ze),x(br),x($n),x($r),x(Rr),x(Mr),x(Rn),x(jr),s&&o(nh),s&&o(Et),x(zr),s&&o(sh),s&&o(lo),x(Cr),x(jn),x(Ar),s&&o(rh),s&&o(Mt),x(Or),s&&o(ah),s&&o(ko),x(Dr),x(Ur),x(Cn),x(qn),s&&o(ih),s&&o(zt),x(Kr),s&&o(lh),s&&o(at),x(Qr),x(Br),x(An),x(Ln),s&&o(dh),s&&o(Pt),x(Vr),s&&o(ch),s&&o(it),x(Jr),x(Xr),x(Dn),x(In),x(Nn),s&&o(ph),s&&o(Ot),x(Yr),s&&o(mh),s&&o(Lo),x(Zr),x(ta),x(Wn),x(Un),x(Kn),x(Qn),x(Hn),s&&o(hh),s&&o(It),x(na),s&&o(fh),s&&o(Oo),x(sa),x(ia),x(Vn),x(Jn),s&&o(uh),s&&o(St),x(la),s&&o(gh),s&&o(Do),x(da),x(ma),x(Xn),x(Yn),x(Zn),s&&o(_h),s&&o(Ut),x(ha),s&&o(kh),s&&o(Io),x(fa),x(_a),x(os),x(ts),x(ns),s&&o(Fh),s&&o(Ht),x(ka),s&&o(yh),s&&o(po),x(Fa),x(rs),x(wa),x(as),x(is),s&&o(bh),s&&o(Vt),x(Ta),s&&o(vh),s&&o(mo),x($a),x(ds),x(ja),x(cs),x(ps),x(ms),s&&o(wh),s&&o(Gt),x(za),s&&o(Th),s&&o(ho),x(Ca),x(fs),x(Oa),x(us),s&&o($h),s&&o(Xt),x(Da),s&&o(xh),s&&o(fo),x(Ia),x(_s),x(Ua),x(ks),x(Fs),x(ys),s&&o(Rh),s&&o(Zt),x(Ka),s&&o(Eh),s&&o(uo),x(Qa),x(vs),x(Ja),x(ws),x(Ts),s&&o(Mh),s&&o(on),x(Ga),s&&o(jh),s&&o(go),x(Xa),x(xs),x(oi),x(Rs),x(Es),x(Ms),s&&o(zh),s&&o(nn),x(ti),s&&o(Ch),s&&o(_o),x(ni),x(zs),x(ii),x(Cs),x(qs),x(Ps),s&&o(qh),s&&o(an),x(li),s&&o(Ph),s&&o(eo),x(di),x(_i),x(Ls),x(Os),s&&o(Ah),s&&o(dn),x(ki),s&&o(Lh),s&&o(oo),x(Fi),x(Ei),x(Is),x(Ns),s&&o(Oh),s&&o(pn),x(Mi),s&&o(Dh),s&&o(to),x(ji),x(Di),x(Ws),x(Us),s&&o(Ih),s&&o(hn),x(Ii),s&&o(Nh),s&&o(no),x(Ni),x(Vi),x(Qs),x(Hs),s&&o(Sh),s&&o(un),x(Ji),s&&o(Wh),s&&o(so),x(Gi),x(sl),x(Vs),x(Js),s&&o(Uh),s&&o(_n),x(rl),s&&o(Kh),s&&o(ro),x(al),x(fl),x(Xs),x(Ys)}}}const GR={local:"roformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.RoFormerConfig",title:"RoFormerConfig"},{local:"transformers.RoFormerTokenizer",title:"RoFormerTokenizer"},{local:"transformers.RoFormerTokenizerFast",title:"RoFormerTokenizerFast"},{local:"transformers.RoFormerModel",title:"RoFormerModel"},{local:"transformers.RoFormerForCausalLM",title:"RoFormerForCausalLM"},{local:"transformers.RoFormerForMaskedLM",title:"RoFormerForMaskedLM"},{local:"transformers.RoFormerForSequenceClassification",title:"RoFormerForSequenceClassification"},{local:"transformers.RoFormerForMultipleChoice",title:"RoFormerForMultipleChoice"},{local:"transformers.RoFormerForTokenClassification",title:"RoFormerForTokenClassification"},{local:"transformers.RoFormerForQuestionAnswering",title:"RoFormerForQuestionAnswering"},{local:"transformers.TFRoFormerModel",title:"TFRoFormerModel"},{local:"transformers.TFRoFormerForMaskedLM",title:"TFRoFormerForMaskedLM"},{local:"transformers.TFRoFormerForCausalLM",title:"TFRoFormerForCausalLM"},{local:"transformers.TFRoFormerForSequenceClassification",title:"TFRoFormerForSequenceClassification"},{local:"transformers.TFRoFormerForMultipleChoice",title:"TFRoFormerForMultipleChoice"},{local:"transformers.TFRoFormerForTokenClassification",title:"TFRoFormerForTokenClassification"},{local:"transformers.TFRoFormerForQuestionAnswering",title:"TFRoFormerForQuestionAnswering"},{local:"transformers.FlaxRoFormerModel",title:"FlaxRoFormerModel"},{local:"transformers.FlaxRoFormerForMaskedLM",title:"FlaxRoFormerForMaskedLM"},{local:"transformers.FlaxRoFormerForSequenceClassification",title:"FlaxRoFormerForSequenceClassification"},{local:"transformers.FlaxRoFormerForMultipleChoice",title:"FlaxRoFormerForMultipleChoice"},{local:"transformers.FlaxRoFormerForTokenClassification",title:"FlaxRoFormerForTokenClassification"},{local:"transformers.FlaxRoFormerForQuestionAnswering",title:"FlaxRoFormerForQuestionAnswering"}],title:"RoFormer"};function XR(E){return Wx(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sE extends Dx{constructor(d){super();Ix(this,d,XR,JR,Nx,{})}}export{sE as default,GR as metadata};
