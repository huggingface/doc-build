import{S as Dx,i as Ix,s as Nx,e as s,k as m,w as b,t,M as Sx,c as a,d as o,m as h,a as i,x as v,h as n,b as u,G as e,g as _,y as w,q as T,o as $,B as x,v as Wx,L as pe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Be}from"../../chunks/Tip-hf-doc-builder.js";import{D as B}from"../../chunks/Docstring-hf-doc-builder.js";import{C as me}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Qe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ux(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerModel, RoFormerConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Kx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
tokenizer.tokenize("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>)
<span class="hljs-comment"># [&#x27;\u4ECA&#x27;, &#x27;\u5929&#x27;, &#x27;\u5929&#x27;, &#x27;\u6C14&#x27;, &#x27;\u975E\u5E38&#x27;, &#x27;\u597D&#x27;, &#x27;\u3002&#x27;]</span>`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Bx(E){let d,g,c,f,k;return f=new me({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=s("p"),g=t("sequence pair mask has the following format:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"sequence pair mask has the following format:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Qx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizerFast

tokenizer = RoFormerTokenizerFast.from_pretrained("junnyu/roformer_chinese_base")
tokenizer.tokenize("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizerFast.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>)
<span class="hljs-comment"># [&#x27;\u4ECA&#x27;, &#x27;\u5929&#x27;, &#x27;\u5929&#x27;, &#x27;\u6C14&#x27;, &#x27;\u975E\u5E38&#x27;, &#x27;\u597D&#x27;, &#x27;\u3002&#x27;]</span>`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Hx(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Jx(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Xx(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Zx(E){let d,g;return d=new me({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function eR(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
`}}),{c(){d=s("p"),g=t("Example of single-label classification:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example of single-label classification:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function tR(E){let d,g;return d=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){d=s("p"),g=t("Example of multi-label classification:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example of multi-label classification:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function rR(E){let d,g;return d=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function sR(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function iR(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function dR(E){let d,g;return d=new me({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function cR(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function mR(E){let d,g;return d=new me({props:{code:`# target is "nice puppet"
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
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function hR(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,Q,xe,_e,N,Re,ie,V,Ee,ke,W,Me,ye,U,he,je,te,C,A,Fe,K,fe,ze,H,ne,Ce,q,qe,J,le,Pe,G,be,se,O,ue,S,Ae,oe,L,ve,P,de,Le;return{c(){d=s("p"),g=t("TensorFlow models and layers in "),c=s("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=s("ul"),j=s("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=s("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=s("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=s("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=s("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=s("code"),Ee=t("fit()"),ke=t(" and "),W=s("code"),Me=t("predict()"),ye=t(`, such as when creating your own layers or models with
the Keras `),U=s("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=s("ul"),A=s("li"),Fe=t("a single Tensor with "),K=s("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),H=s("code"),ne=t("model(input_ids)"),Ce=m(),q=s("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=s("code"),be=t("model([input_ids, attention_mask, token_type_ids])"),se=m(),O=s("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=s("p"),ve=t(`Note that when creating models and layers with
`),P=s("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(F){d=a(F,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(F),p=a(F,"UL",{});var re=i(p);j=a(re,"LI",{});var He=i(j);Te=n(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(o),ge=h(re),I=a(re,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),re.forEach(o),ee=h(F),R=a(F,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(z,"CODE",{});var Ve=i(Q);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ye=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(F),C=a(F,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);Fe=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),H=a(X,"CODE",{});var Xe=i(H);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);be=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),se=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(F),L=a(F,"P",{});var Z=i(L);ve=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(F,M){_(F,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(F,l,M),_(F,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(F,ee,M),_(F,R,M),e(R,$e),e(R,Q),e(Q,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ye),e(R,U),e(U,he),e(R,je),_(F,te,M),_(F,C,M),e(C,A),e(A,Fe),e(A,K),e(K,fe),e(A,ze),e(A,H),e(H,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,be),e(C,se),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(F,oe,M),_(F,L,M),e(L,ve),e(L,P),e(P,de),e(L,Le)},d(F){F&&o(d),F&&o(l),F&&o(p),F&&o(ee),F&&o(R),F&&o(te),F&&o(C),F&&o(oe),F&&o(L)}}}function fR(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function gR(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,Q,xe,_e,N,Re,ie,V,Ee,ke,W,Me,ye,U,he,je,te,C,A,Fe,K,fe,ze,H,ne,Ce,q,qe,J,le,Pe,G,be,se,O,ue,S,Ae,oe,L,ve,P,de,Le;return{c(){d=s("p"),g=t("TensorFlow models and layers in "),c=s("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=s("ul"),j=s("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=s("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=s("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=s("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=s("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=s("code"),Ee=t("fit()"),ke=t(" and "),W=s("code"),Me=t("predict()"),ye=t(`, such as when creating your own layers or models with
the Keras `),U=s("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=s("ul"),A=s("li"),Fe=t("a single Tensor with "),K=s("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),H=s("code"),ne=t("model(input_ids)"),Ce=m(),q=s("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=s("code"),be=t("model([input_ids, attention_mask, token_type_ids])"),se=m(),O=s("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=s("p"),ve=t(`Note that when creating models and layers with
`),P=s("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(F){d=a(F,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(F),p=a(F,"UL",{});var re=i(p);j=a(re,"LI",{});var He=i(j);Te=n(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(o),ge=h(re),I=a(re,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),re.forEach(o),ee=h(F),R=a(F,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(z,"CODE",{});var Ve=i(Q);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ye=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(F),C=a(F,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);Fe=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),H=a(X,"CODE",{});var Xe=i(H);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);be=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),se=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(F),L=a(F,"P",{});var Z=i(L);ve=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(F,M){_(F,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(F,l,M),_(F,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(F,ee,M),_(F,R,M),e(R,$e),e(R,Q),e(Q,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ye),e(R,U),e(U,he),e(R,je),_(F,te,M),_(F,C,M),e(C,A),e(A,Fe),e(A,K),e(K,fe),e(A,ze),e(A,H),e(H,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,be),e(C,se),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(F,oe,M),_(F,L,M),e(L,ve),e(L,P),e(P,de),e(L,Le)},d(F){F&&o(d),F&&o(l),F&&o(p),F&&o(ee),F&&o(R),F&&o(te),F&&o(C),F&&o(oe),F&&o(L)}}}function _R(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function yR(E){let d,g;return d=new me({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function FR(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,Q,xe,_e,N,Re,ie,V,Ee,ke,W,Me,ye,U,he,je,te,C,A,Fe,K,fe,ze,H,ne,Ce,q,qe,J,le,Pe,G,be,se,O,ue,S,Ae,oe,L,ve,P,de,Le;return{c(){d=s("p"),g=t("TensorFlow models and layers in "),c=s("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=s("ul"),j=s("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=s("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=s("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=s("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=s("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=s("code"),Ee=t("fit()"),ke=t(" and "),W=s("code"),Me=t("predict()"),ye=t(`, such as when creating your own layers or models with
the Keras `),U=s("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=s("ul"),A=s("li"),Fe=t("a single Tensor with "),K=s("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),H=s("code"),ne=t("model(input_ids)"),Ce=m(),q=s("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=s("code"),be=t("model([input_ids, attention_mask, token_type_ids])"),se=m(),O=s("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=s("p"),ve=t(`Note that when creating models and layers with
`),P=s("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(F){d=a(F,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(F),p=a(F,"UL",{});var re=i(p);j=a(re,"LI",{});var He=i(j);Te=n(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(o),ge=h(re),I=a(re,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),re.forEach(o),ee=h(F),R=a(F,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(z,"CODE",{});var Ve=i(Q);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ye=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(F),C=a(F,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);Fe=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),H=a(X,"CODE",{});var Xe=i(H);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);be=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),se=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(F),L=a(F,"P",{});var Z=i(L);ve=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(F,M){_(F,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(F,l,M),_(F,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(F,ee,M),_(F,R,M),e(R,$e),e(R,Q),e(Q,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ye),e(R,U),e(U,he),e(R,je),_(F,te,M),_(F,C,M),e(C,A),e(A,Fe),e(A,K),e(K,fe),e(A,ze),e(A,H),e(H,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,be),e(C,se),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(F,oe,M),_(F,L,M),e(L,ve),e(L,P),e(P,de),e(L,Le)},d(F){F&&o(d),F&&o(l),F&&o(p),F&&o(ee),F&&o(R),F&&o(te),F&&o(C),F&&o(oe),F&&o(L)}}}function bR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function vR(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,Q,xe,_e,N,Re,ie,V,Ee,ke,W,Me,ye,U,he,je,te,C,A,Fe,K,fe,ze,H,ne,Ce,q,qe,J,le,Pe,G,be,se,O,ue,S,Ae,oe,L,ve,P,de,Le;return{c(){d=s("p"),g=t("TensorFlow models and layers in "),c=s("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=s("ul"),j=s("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=s("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=s("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=s("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=s("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=s("code"),Ee=t("fit()"),ke=t(" and "),W=s("code"),Me=t("predict()"),ye=t(`, such as when creating your own layers or models with
the Keras `),U=s("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=s("ul"),A=s("li"),Fe=t("a single Tensor with "),K=s("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),H=s("code"),ne=t("model(input_ids)"),Ce=m(),q=s("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=s("code"),be=t("model([input_ids, attention_mask, token_type_ids])"),se=m(),O=s("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=s("p"),ve=t(`Note that when creating models and layers with
`),P=s("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(F){d=a(F,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(F),p=a(F,"UL",{});var re=i(p);j=a(re,"LI",{});var He=i(j);Te=n(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(o),ge=h(re),I=a(re,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),re.forEach(o),ee=h(F),R=a(F,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(z,"CODE",{});var Ve=i(Q);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ye=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(F),C=a(F,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);Fe=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),H=a(X,"CODE",{});var Xe=i(H);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);be=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),se=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(F),L=a(F,"P",{});var Z=i(L);ve=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(F,M){_(F,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(F,l,M),_(F,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(F,ee,M),_(F,R,M),e(R,$e),e(R,Q),e(Q,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ye),e(R,U),e(U,he),e(R,je),_(F,te,M),_(F,C,M),e(C,A),e(A,Fe),e(A,K),e(K,fe),e(A,ze),e(A,H),e(H,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,be),e(C,se),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(F,oe,M),_(F,L,M),e(L,ve),e(L,P),e(P,de),e(L,Le)},d(F){F&&o(d),F&&o(l),F&&o(p),F&&o(ee),F&&o(R),F&&o(te),F&&o(C),F&&o(oe),F&&o(L)}}}function wR(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function $R(E){let d,g;return d=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function xR(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,Q,xe,_e,N,Re,ie,V,Ee,ke,W,Me,ye,U,he,je,te,C,A,Fe,K,fe,ze,H,ne,Ce,q,qe,J,le,Pe,G,be,se,O,ue,S,Ae,oe,L,ve,P,de,Le;return{c(){d=s("p"),g=t("TensorFlow models and layers in "),c=s("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=s("ul"),j=s("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=s("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=s("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=s("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=s("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=s("code"),Ee=t("fit()"),ke=t(" and "),W=s("code"),Me=t("predict()"),ye=t(`, such as when creating your own layers or models with
the Keras `),U=s("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=s("ul"),A=s("li"),Fe=t("a single Tensor with "),K=s("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),H=s("code"),ne=t("model(input_ids)"),Ce=m(),q=s("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=s("code"),be=t("model([input_ids, attention_mask, token_type_ids])"),se=m(),O=s("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=s("p"),ve=t(`Note that when creating models and layers with
`),P=s("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(F){d=a(F,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(F),p=a(F,"UL",{});var re=i(p);j=a(re,"LI",{});var He=i(j);Te=n(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(o),ge=h(re),I=a(re,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),re.forEach(o),ee=h(F),R=a(F,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(z,"CODE",{});var Ve=i(Q);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ye=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(F),C=a(F,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);Fe=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),H=a(X,"CODE",{});var Xe=i(H);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);be=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),se=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(F),L=a(F,"P",{});var Z=i(L);ve=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(F,M){_(F,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(F,l,M),_(F,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(F,ee,M),_(F,R,M),e(R,$e),e(R,Q),e(Q,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ye),e(R,U),e(U,he),e(R,je),_(F,te,M),_(F,C,M),e(C,A),e(A,Fe),e(A,K),e(K,fe),e(A,ze),e(A,H),e(H,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,be),e(C,se),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(F,oe,M),_(F,L,M),e(L,ve),e(L,P),e(P,de),e(L,Le)},d(F){F&&o(d),F&&o(l),F&&o(p),F&&o(ee),F&&o(R),F&&o(te),F&&o(C),F&&o(oe),F&&o(L)}}}function RR(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function MR(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,Q,xe,_e,N,Re,ie,V,Ee,ke,W,Me,ye,U,he,je,te,C,A,Fe,K,fe,ze,H,ne,Ce,q,qe,J,le,Pe,G,be,se,O,ue,S,Ae,oe,L,ve,P,de,Le;return{c(){d=s("p"),g=t("TensorFlow models and layers in "),c=s("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=s("ul"),j=s("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=s("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=s("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=s("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=s("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=s("code"),Ee=t("fit()"),ke=t(" and "),W=s("code"),Me=t("predict()"),ye=t(`, such as when creating your own layers or models with
the Keras `),U=s("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=s("ul"),A=s("li"),Fe=t("a single Tensor with "),K=s("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),H=s("code"),ne=t("model(input_ids)"),Ce=m(),q=s("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=s("code"),be=t("model([input_ids, attention_mask, token_type_ids])"),se=m(),O=s("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=s("p"),ve=t(`Note that when creating models and layers with
`),P=s("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(F){d=a(F,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(F),p=a(F,"UL",{});var re=i(p);j=a(re,"LI",{});var He=i(j);Te=n(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(o),ge=h(re),I=a(re,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),re.forEach(o),ee=h(F),R=a(F,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(z,"CODE",{});var Ve=i(Q);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ye=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(F),C=a(F,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);Fe=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),H=a(X,"CODE",{});var Xe=i(H);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);be=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),se=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(F),L=a(F,"P",{});var Z=i(L);ve=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(F,M){_(F,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(F,l,M),_(F,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(F,ee,M),_(F,R,M),e(R,$e),e(R,Q),e(Q,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ye),e(R,U),e(U,he),e(R,je),_(F,te,M),_(F,C,M),e(C,A),e(A,Fe),e(A,K),e(K,fe),e(A,ze),e(A,H),e(H,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,be),e(C,se),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(F,oe,M),_(F,L,M),e(L,ve),e(L,P),e(P,de),e(L,Le)},d(F){F&&o(d),F&&o(l),F&&o(p),F&&o(ee),F&&o(R),F&&o(te),F&&o(C),F&&o(oe),F&&o(L)}}}function jR(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function CR(E){let d,g;return d=new me({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function qR(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,Q,xe,_e,N,Re,ie,V,Ee,ke,W,Me,ye,U,he,je,te,C,A,Fe,K,fe,ze,H,ne,Ce,q,qe,J,le,Pe,G,be,se,O,ue,S,Ae,oe,L,ve,P,de,Le;return{c(){d=s("p"),g=t("TensorFlow models and layers in "),c=s("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=s("ul"),j=s("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=s("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=s("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=s("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=s("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=s("code"),Ee=t("fit()"),ke=t(" and "),W=s("code"),Me=t("predict()"),ye=t(`, such as when creating your own layers or models with
the Keras `),U=s("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=s("ul"),A=s("li"),Fe=t("a single Tensor with "),K=s("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),H=s("code"),ne=t("model(input_ids)"),Ce=m(),q=s("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=s("code"),be=t("model([input_ids, attention_mask, token_type_ids])"),se=m(),O=s("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=s("p"),ve=t(`Note that when creating models and layers with
`),P=s("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(F){d=a(F,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(F),p=a(F,"UL",{});var re=i(p);j=a(re,"LI",{});var He=i(j);Te=n(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(o),ge=h(re),I=a(re,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),re.forEach(o),ee=h(F),R=a(F,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(z,"CODE",{});var Ve=i(Q);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ye=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(F),C=a(F,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);Fe=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),H=a(X,"CODE",{});var Xe=i(H);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);be=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),se=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(F),L=a(F,"P",{});var Z=i(L);ve=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(F,M){_(F,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(F,l,M),_(F,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(F,ee,M),_(F,R,M),e(R,$e),e(R,Q),e(Q,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ye),e(R,U),e(U,he),e(R,je),_(F,te,M),_(F,C,M),e(C,A),e(A,Fe),e(A,K),e(K,fe),e(A,ze),e(A,H),e(H,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,be),e(C,se),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(F,oe,M),_(F,L,M),e(L,ve),e(L,P),e(P,de),e(L,Le)},d(F){F&&o(d),F&&o(l),F&&o(p),F&&o(ee),F&&o(R),F&&o(te),F&&o(C),F&&o(oe),F&&o(L)}}}function PR(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function LR(E){let d,g;return d=new me({props:{code:`# target is "nice puppet"
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
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function OR(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function IR(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function SR(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function UR(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function BR(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function QR(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForTokenClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForTokenClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function HR(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),b(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),v(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function JR(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,Q,xe,_e,N,Re,ie,V,Ee,ke,W,Me,ye,U,he,je,te,C,A,Fe,K,fe,ze,H,ne,Ce,q,qe,J,le,Pe,G,be,se,O,ue,S,Ae,oe,L,ve,P,de,Le,F,M,Se,re,He,Ne,z,Ve,Je,Oe,Ge,We,D,X,Ue,Xe,Y,Ye,Ie,we,De,Z,Ke,Fs,Xf,Od,Yf,th,Ze,bs,Zf,vs,eu,ws,ou,tu,nu,Ts,ru,xl,su,au,iu,$n,lu,gt,$s,du,Dd,cu,pu,xs,Rl,mu,Id,hu,fu,El,uu,Nd,gu,_u,xn,Rs,ku,Es,yu,Sd,Fu,bu,vu,No,Ms,wu,Wd,Tu,$u,Rn,xu,Rt,Ru,Ud,Eu,Mu,Kd,ju,zu,Cu,Ml,js,nh,Et,En,Bd,zs,qu,Qd,Pu,rh,lo,Cs,Au,qs,Lu,Hd,Ou,Du,Iu,Mn,jl,Nu,Su,zl,Wu,Uu,Ku,Ps,Bu,Cl,Qu,Hu,Vu,jn,Ju,_t,As,Gu,Vd,Xu,Yu,Ls,ql,Zu,Jd,eg,og,Pl,tg,Gd,ng,sh,Mt,zn,Xd,Os,rg,Yd,sg,ah,ko,Ds,ag,Is,ig,Ns,lg,dg,cg,Ss,pg,Ws,mg,hg,fg,co,ug,Zd,gg,_g,ec,kg,yg,oc,Fg,bg,tc,vg,wg,nc,Tg,$g,rc,xg,Rg,Eg,So,Us,Mg,jt,jg,Al,zg,Cg,sc,qg,Pg,Ag,Cn,Lg,qn,ih,zt,Pn,ac,Ks,Og,ic,Dg,lh,at,Bs,Ig,Ct,Ng,lc,Sg,Wg,Qs,Ug,Kg,Bg,Wo,Hs,Qg,qt,Hg,Ll,Vg,Jg,dc,Gg,Xg,Yg,An,Zg,Ln,dh,Pt,On,cc,Vs,e_,pc,o_,ch,it,Js,t_,At,n_,mc,r_,s_,Gs,a_,i_,l_,bo,Xs,d_,Lt,c_,Ol,p_,m_,hc,h_,f_,u_,Dn,g_,In,__,Nn,ph,Ot,Sn,fc,Ys,k_,uc,y_,mh,Lo,Zs,F_,gc,b_,v_,ea,w_,oa,T_,$_,x_,io,ta,R_,Dt,E_,Dl,M_,j_,_c,z_,C_,q_,Wn,P_,Un,A_,Kn,L_,Bn,O_,Qn,hh,It,Hn,kc,na,D_,yc,I_,fh,Oo,ra,N_,Fc,S_,W_,sa,U_,aa,K_,B_,Q_,Uo,ia,H_,Nt,V_,Il,J_,G_,bc,X_,Y_,Z_,Vn,ek,Jn,uh,St,Gn,vc,la,ok,wc,tk,gh,Do,da,nk,Tc,rk,sk,ca,ak,pa,ik,lk,dk,vo,ma,ck,Wt,pk,Nl,mk,hk,$c,fk,uk,gk,Xn,_k,Yn,kk,Zn,_h,Ut,er,xc,ha,yk,Rc,Fk,kh,Io,fa,bk,Kt,vk,Ec,wk,Tk,Mc,$k,xk,Rk,ua,Ek,ga,Mk,jk,zk,wo,_a,Ck,Bt,qk,Sl,Pk,Ak,jc,Lk,Ok,Dk,or,Ik,tr,Nk,nr,yh,Qt,rr,zc,ka,Sk,Cc,Wk,Fh,po,ya,Uk,qc,Kk,Bk,Fa,Qk,Wl,Hk,Vk,Jk,ba,Gk,va,Xk,Yk,Zk,sr,ey,Ko,wa,oy,Ht,ty,Ul,ny,ry,Pc,sy,ay,iy,ar,ly,ir,bh,Vt,lr,Ac,Ta,dy,Lc,cy,vh,mo,$a,py,xa,my,Oc,hy,fy,uy,Ra,gy,Kl,_y,ky,yy,Ea,Fy,Ma,by,vy,wy,dr,Ty,To,ja,$y,Jt,xy,Bl,Ry,Ey,Dc,My,jy,zy,cr,Cy,pr,qy,mr,wh,Gt,hr,Ic,za,Py,Nc,Ay,Th,ho,Ca,Ly,qa,Oy,Sc,Dy,Iy,Ny,Pa,Sy,Ql,Wy,Uy,Ky,Aa,By,La,Qy,Hy,Vy,fr,Jy,kt,Oa,Gy,yo,Xy,Wc,Yy,Zy,Uc,eF,oF,Kc,tF,nF,Bc,rF,sF,Qc,aF,iF,lF,ur,$h,Xt,gr,Hc,Da,dF,Vc,cF,xh,fo,Ia,pF,Jc,mF,hF,Na,fF,Hl,uF,gF,_F,Sa,kF,Wa,yF,FF,bF,_r,vF,$o,Ua,wF,Yt,TF,Vl,$F,xF,Gc,RF,EF,MF,kr,jF,yr,zF,Fr,Rh,Zt,br,Xc,Ka,CF,Yc,qF,Eh,uo,Ba,PF,Zc,AF,LF,Qa,OF,Jl,DF,IF,NF,Ha,SF,Va,WF,UF,KF,vr,BF,Bo,Ja,QF,en,HF,Gl,VF,JF,ep,GF,XF,YF,wr,ZF,Tr,Mh,on,$r,op,Ga,eb,tp,ob,jh,go,Xa,tb,np,nb,rb,Ya,sb,Xl,ab,ib,lb,Za,db,ei,cb,pb,mb,xr,hb,xo,oi,fb,tn,ub,Yl,gb,_b,rp,kb,yb,Fb,Rr,bb,Er,vb,Mr,zh,nn,jr,sp,ti,wb,ap,Tb,Ch,_o,ni,$b,rn,xb,ip,Rb,Eb,lp,Mb,jb,zb,ri,Cb,Zl,qb,Pb,Ab,si,Lb,ai,Ob,Db,Ib,zr,Nb,Ro,ii,Sb,sn,Wb,ed,Ub,Kb,dp,Bb,Qb,Hb,Cr,Vb,qr,Jb,Pr,qh,an,Ar,cp,li,Gb,pp,Xb,Ph,eo,di,Yb,mp,Zb,ev,ci,ov,od,tv,nv,rv,pi,sv,mi,av,iv,lv,hp,dv,cv,lt,fp,hi,pv,mv,up,fi,hv,fv,gp,ui,uv,gv,_p,gi,_v,kv,Qo,_i,yv,ln,Fv,kp,bv,vv,yp,wv,Tv,$v,Lr,xv,Or,Ah,dn,Dr,Fp,ki,Rv,bp,Ev,Lh,oo,yi,Mv,Fi,jv,vp,zv,Cv,qv,bi,Pv,td,Av,Lv,Ov,vi,Dv,wi,Iv,Nv,Sv,wp,Wv,Uv,dt,Tp,Ti,Kv,Bv,$p,$i,Qv,Hv,xp,xi,Vv,Jv,Rp,Ri,Gv,Xv,Ho,Ei,Yv,cn,Zv,Ep,ew,ow,Mp,tw,nw,rw,Ir,sw,Nr,Oh,pn,Sr,jp,Mi,aw,zp,iw,Dh,to,ji,lw,Cp,dw,cw,zi,pw,nd,mw,hw,fw,Ci,uw,qi,gw,_w,kw,qp,yw,Fw,ct,Pp,Pi,bw,vw,Ap,Ai,ww,Tw,Lp,Li,$w,xw,Op,Oi,Rw,Ew,Vo,Di,Mw,mn,jw,Dp,zw,Cw,Ip,qw,Pw,Aw,Wr,Lw,Ur,Ih,hn,Kr,Np,Ii,Ow,Sp,Dw,Nh,no,Ni,Iw,Wp,Nw,Sw,Si,Ww,rd,Uw,Kw,Bw,Wi,Qw,Ui,Hw,Vw,Jw,Up,Gw,Xw,pt,Kp,Ki,Yw,Zw,Bp,Bi,eT,oT,Qp,Qi,tT,nT,Hp,Hi,rT,sT,Jo,Vi,aT,fn,iT,Vp,lT,dT,Jp,cT,pT,mT,Br,hT,Qr,Sh,un,Hr,Gp,Ji,fT,Xp,uT,Wh,ro,Gi,gT,Yp,_T,kT,Xi,yT,sd,FT,bT,vT,Yi,wT,Zi,TT,$T,xT,Zp,RT,ET,mt,em,el,MT,jT,om,ol,zT,CT,tm,tl,qT,PT,nm,nl,AT,LT,Go,rl,OT,gn,DT,rm,IT,NT,sm,ST,WT,UT,Vr,KT,Jr,Uh,_n,Gr,am,sl,BT,im,QT,Kh,so,al,HT,kn,VT,lm,JT,GT,dm,XT,YT,ZT,il,e$,ad,o$,t$,n$,ll,r$,dl,s$,a$,i$,cm,l$,d$,ht,pm,cl,c$,p$,mm,pl,m$,h$,hm,ml,f$,u$,fm,hl,g$,_$,Xo,fl,k$,yn,y$,um,F$,b$,gm,v$,w$,T$,Xr,$$,Yr,Bh;return l=new Qe({}),R=new Qe({}),S=new Qe({}),de=new B({props:{name:"class transformers.RoFormerConfig",anchor:"transformers.RoFormerConfig",parameters:[{name:"vocab_size",val:" = 50000"},{name:"embedding_size",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1536"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"rotary_value",val:" = False"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50000) &#x2014;
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
Whether or not apply rotary position embeddings on value layer.`,name:"rotary_value"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/configuration_roformer.py#L46"}}),Ie=new ce({props:{anchor:"transformers.RoFormerConfig.example",$$slots:{default:[Ux]},$$scope:{ctx:E}}}),Fs=new Qe({}),bs=new B({props:{name:"class transformers.RoFormerTokenizer",anchor:"transformers.RoFormerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L69"}}),$n=new ce({props:{anchor:"transformers.RoFormerTokenizer.example",$$slots:{default:[Kx]},$$scope:{ctx:E}}}),$s=new B({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L235",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rs=new B({props:{name:"get_special_tokens_mask",anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L260",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ms=new B({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L288",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rn=new ce({props:{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Bx]},$$scope:{ctx:E}}}),js=new B({props:{name:"save_vocabulary",anchor:"transformers.RoFormerTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer.py#L317"}}),zs=new Qe({}),Cs=new B({props:{name:"class transformers.RoFormerTokenizerFast",anchor:"transformers.RoFormerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer_fast.py#L71"}}),jn=new ce({props:{anchor:"transformers.RoFormerTokenizerFast.example",$$slots:{default:[Qx]},$$scope:{ctx:E}}}),As=new B({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/tokenization_roformer_fast.py#L147",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Os=new Qe({}),Ds=new B({props:{name:"class transformers.RoFormerModel",anchor:"transformers.RoFormerModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L789"}}),Us=new B({props:{name:"forward",anchor:"transformers.RoFormerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Cn=new Be({props:{$$slots:{default:[Hx]},$$scope:{ctx:E}}}),qn=new ce({props:{anchor:"transformers.RoFormerModel.forward.example",$$slots:{default:[Vx]},$$scope:{ctx:E}}}),Ks=new Qe({}),Bs=new B({props:{name:"class transformers.RoFormerForCausalLM",anchor:"transformers.RoFormerForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1057"}}),Hs=new B({props:{name:"forward",anchor:"transformers.RoFormerForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),An=new Be({props:{$$slots:{default:[Jx]},$$scope:{ctx:E}}}),Ln=new ce({props:{anchor:"transformers.RoFormerForCausalLM.forward.example",$$slots:{default:[Gx]},$$scope:{ctx:E}}}),Vs=new Qe({}),Js=new B({props:{name:"class transformers.RoFormerForMaskedLM",anchor:"transformers.RoFormerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L956"}}),Xs=new B({props:{name:"forward",anchor:"transformers.RoFormerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Dn=new Be({props:{$$slots:{default:[Xx]},$$scope:{ctx:E}}}),In=new ce({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example",$$slots:{default:[Yx]},$$scope:{ctx:E}}}),Nn=new ce({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example-2",$$slots:{default:[Zx]},$$scope:{ctx:E}}}),Ys=new Qe({}),Zs=new B({props:{name:"class transformers.RoFormerForSequenceClassification",anchor:"transformers.RoFormerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1230"}}),ta=new B({props:{name:"forward",anchor:"transformers.RoFormerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Wn=new Be({props:{$$slots:{default:[eR]},$$scope:{ctx:E}}}),Un=new ce({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example",$$slots:{default:[oR]},$$scope:{ctx:E}}}),Kn=new ce({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-2",$$slots:{default:[tR]},$$scope:{ctx:E}}}),Bn=new ce({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-3",$$slots:{default:[nR]},$$scope:{ctx:E}}}),Qn=new ce({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-4",$$slots:{default:[rR]},$$scope:{ctx:E}}}),na=new Qe({}),ra=new B({props:{name:"class transformers.RoFormerForMultipleChoice",anchor:"transformers.RoFormerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1322"}}),ia=new B({props:{name:"forward",anchor:"transformers.RoFormerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Vn=new Be({props:{$$slots:{default:[sR]},$$scope:{ctx:E}}}),Jn=new ce({props:{anchor:"transformers.RoFormerForMultipleChoice.forward.example",$$slots:{default:[aR]},$$scope:{ctx:E}}}),la=new Qe({}),da=new B({props:{name:"class transformers.RoFormerForTokenClassification",anchor:"transformers.RoFormerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1414"}}),ma=new B({props:{name:"forward",anchor:"transformers.RoFormerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Xn=new Be({props:{$$slots:{default:[iR]},$$scope:{ctx:E}}}),Yn=new ce({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example",$$slots:{default:[lR]},$$scope:{ctx:E}}}),Zn=new ce({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example-2",$$slots:{default:[dR]},$$scope:{ctx:E}}}),ha=new Qe({}),fa=new B({props:{name:"class transformers.RoFormerForQuestionAnswering",anchor:"transformers.RoFormerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_roformer.py#L1491"}}),_a=new B({props:{name:"forward",anchor:"transformers.RoFormerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),or=new Be({props:{$$slots:{default:[cR]},$$scope:{ctx:E}}}),tr=new ce({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example",$$slots:{default:[pR]},$$scope:{ctx:E}}}),nr=new ce({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example-2",$$slots:{default:[mR]},$$scope:{ctx:E}}}),ka=new Qe({}),ya=new B({props:{name:"class transformers.TFRoFormerModel",anchor:"transformers.TFRoFormerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L809"}}),sr=new Be({props:{$$slots:{default:[hR]},$$scope:{ctx:E}}}),wa=new B({props:{name:"call",anchor:"transformers.TFRoFormerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L815",returnDescription:`
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
`}}),ar=new Be({props:{$$slots:{default:[fR]},$$scope:{ctx:E}}}),ir=new ce({props:{anchor:"transformers.TFRoFormerModel.call.example",$$slots:{default:[uR]},$$scope:{ctx:E}}}),Ta=new Qe({}),$a=new B({props:{name:"class transformers.TFRoFormerForMaskedLM",anchor:"transformers.TFRoFormerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L857"}}),dr=new Be({props:{$$slots:{default:[gR]},$$scope:{ctx:E}}}),ja=new B({props:{name:"call",anchor:"transformers.TFRoFormerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L873",returnDescription:`
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
`}}),cr=new Be({props:{$$slots:{default:[_R]},$$scope:{ctx:E}}}),pr=new ce({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example",$$slots:{default:[kR]},$$scope:{ctx:E}}}),mr=new ce({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example-2",$$slots:{default:[yR]},$$scope:{ctx:E}}}),za=new Qe({}),Ca=new B({props:{name:"class transformers.TFRoFormerForCausalLM",anchor:"transformers.TFRoFormerForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L936"}}),fr=new Be({props:{$$slots:{default:[FR]},$$scope:{ctx:E}}}),Oa=new B({props:{name:"call",anchor:"transformers.TFRoFormerForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L949",returnDescription:`
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
`}}),ur=new ce({props:{anchor:"transformers.TFRoFormerForCausalLM.call.example",$$slots:{default:[bR]},$$scope:{ctx:E}}}),Da=new Qe({}),Ia=new B({props:{name:"class transformers.TFRoFormerForSequenceClassification",anchor:"transformers.TFRoFormerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1049"}}),_r=new Be({props:{$$slots:{default:[vR]},$$scope:{ctx:E}}}),Ua=new B({props:{name:"call",anchor:"transformers.TFRoFormerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1058",returnDescription:`
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
`}}),kr=new Be({props:{$$slots:{default:[wR]},$$scope:{ctx:E}}}),yr=new ce({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example",$$slots:{default:[TR]},$$scope:{ctx:E}}}),Fr=new ce({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example-2",$$slots:{default:[$R]},$$scope:{ctx:E}}}),Ka=new Qe({}),Ba=new B({props:{name:"class transformers.TFRoFormerForMultipleChoice",anchor:"transformers.TFRoFormerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1125"}}),vr=new Be({props:{$$slots:{default:[xR]},$$scope:{ctx:E}}}),Ja=new B({props:{name:"call",anchor:"transformers.TFRoFormerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1146",returnDescription:`
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
`}}),wr=new Be({props:{$$slots:{default:[RR]},$$scope:{ctx:E}}}),Tr=new ce({props:{anchor:"transformers.TFRoFormerForMultipleChoice.call.example",$$slots:{default:[ER]},$$scope:{ctx:E}}}),Ga=new Qe({}),Xa=new B({props:{name:"class transformers.TFRoFormerForTokenClassification",anchor:"transformers.TFRoFormerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1249"}}),xr=new Be({props:{$$slots:{default:[MR]},$$scope:{ctx:E}}}),oi=new B({props:{name:"call",anchor:"transformers.TFRoFormerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1261",returnDescription:`
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
`}}),Rr=new Be({props:{$$slots:{default:[jR]},$$scope:{ctx:E}}}),Er=new ce({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example",$$slots:{default:[zR]},$$scope:{ctx:E}}}),Mr=new ce({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example-2",$$slots:{default:[CR]},$$scope:{ctx:E}}}),ti=new Qe({}),ni=new B({props:{name:"class transformers.TFRoFormerForQuestionAnswering",anchor:"transformers.TFRoFormerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1327"}}),zr=new Be({props:{$$slots:{default:[qR]},$$scope:{ctx:E}}}),ii=new B({props:{name:"call",anchor:"transformers.TFRoFormerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_tf_roformer.py#L1338",returnDescription:`
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
`}}),Cr=new Be({props:{$$slots:{default:[PR]},$$scope:{ctx:E}}}),qr=new ce({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example",$$slots:{default:[AR]},$$scope:{ctx:E}}}),Pr=new ce({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example-2",$$slots:{default:[LR]},$$scope:{ctx:E}}}),li=new Qe({}),di=new B({props:{name:"class transformers.FlaxRoFormerModel",anchor:"transformers.FlaxRoFormerModel",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L749"}}),_i=new B({props:{name:"__call__",anchor:"transformers.FlaxRoFormerModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Lr=new Be({props:{$$slots:{default:[OR]},$$scope:{ctx:E}}}),Or=new ce({props:{anchor:"transformers.FlaxRoFormerModel.__call__.example",$$slots:{default:[DR]},$$scope:{ctx:E}}}),ki=new Qe({}),yi=new B({props:{name:"class transformers.FlaxRoFormerForMaskedLM",anchor:"transformers.FlaxRoFormerForMaskedLM",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L809"}}),Ei=new B({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Ir=new Be({props:{$$slots:{default:[IR]},$$scope:{ctx:E}}}),Nr=new ce({props:{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.example",$$slots:{default:[NR]},$$scope:{ctx:E}}}),Mi=new Qe({}),ji=new B({props:{name:"class transformers.FlaxRoFormerForSequenceClassification",anchor:"transformers.FlaxRoFormerForSequenceClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L874"}}),Di=new B({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Wr=new Be({props:{$$slots:{default:[SR]},$$scope:{ctx:E}}}),Ur=new ce({props:{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.example",$$slots:{default:[WR]},$$scope:{ctx:E}}}),Ii=new Qe({}),Ni=new B({props:{name:"class transformers.FlaxRoFormerForMultipleChoice",anchor:"transformers.FlaxRoFormerForMultipleChoice",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L950"}}),Vi=new B({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Br=new Be({props:{$$slots:{default:[UR]},$$scope:{ctx:E}}}),Qr=new ce({props:{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.example",$$slots:{default:[KR]},$$scope:{ctx:E}}}),Ji=new Qe({}),Gi=new B({props:{name:"class transformers.FlaxRoFormerForTokenClassification",anchor:"transformers.FlaxRoFormerForTokenClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L1019"}}),rl=new B({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Vr=new Be({props:{$$slots:{default:[BR]},$$scope:{ctx:E}}}),Jr=new ce({props:{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.example",$$slots:{default:[QR]},$$scope:{ctx:E}}}),sl=new Qe({}),al=new B({props:{name:"class transformers.FlaxRoFormerForQuestionAnswering",anchor:"transformers.FlaxRoFormerForQuestionAnswering",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roformer/modeling_flax_roformer.py#L1088"}}),fl=new B({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Xr=new Be({props:{$$slots:{default:[HR]},$$scope:{ctx:E}}}),Yr=new ce({props:{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.example",$$slots:{default:[VR]},$$scope:{ctx:E}}}),{c(){d=s("meta"),g=m(),c=s("h1"),f=s("a"),k=s("span"),b(l.$$.fragment),p=m(),j=s("span"),Te=t("RoFormer"),ge=m(),I=s("h2"),ae=s("a"),ee=s("span"),b(R.$$.fragment),$e=m(),Q=s("span"),xe=t("Overview"),_e=m(),N=s("p"),Re=t("The RoFormer model was proposed in "),ie=s("a"),V=t("RoFormer: Enhanced Transformer with Rotary Position Embedding"),Ee=t(" by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu."),ke=m(),W=s("p"),Me=t("The abstract from the paper is the following:"),ye=m(),U=s("p"),he=s("em"),je=t(`Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.`),te=m(),C=s("p"),A=t("Tips:"),Fe=m(),K=s("ul"),fe=s("li"),ze=t(`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`),H=m(),ne=s("p"),Ce=t("This model was contributed by "),q=s("a"),qe=t("junnyu"),J=t(". The original code can be found "),le=s("a"),Pe=t("here"),G=t("."),be=m(),se=s("h2"),O=s("a"),ue=s("span"),b(S.$$.fragment),Ae=m(),oe=s("span"),L=t("RoFormerConfig"),ve=m(),P=s("div"),b(de.$$.fragment),Le=m(),F=s("p"),M=t("This is the configuration class to store the configuration of a "),Se=s("a"),re=t("RoFormerModel"),He=t(`. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
`),Ne=s("a"),z=t("junnyu/roformer_chinese_base"),Ve=t(" architecture."),Je=m(),Oe=s("p"),Ge=t("Configuration objects inherit from "),We=s("a"),D=t("PretrainedConfig"),X=t(` and can be used to control the model outputs. Read the
documentation from `),Ue=s("a"),Xe=t("PretrainedConfig"),Y=t(" for more information."),Ye=m(),b(Ie.$$.fragment),we=m(),De=s("h2"),Z=s("a"),Ke=s("span"),b(Fs.$$.fragment),Xf=m(),Od=s("span"),Yf=t("RoFormerTokenizer"),th=m(),Ze=s("div"),b(bs.$$.fragment),Zf=m(),vs=s("p"),eu=t("Construct a RoFormer tokenizer. Based on "),ws=s("a"),ou=t("Rust Jieba"),tu=t("."),nu=m(),Ts=s("p"),ru=t("This tokenizer inherits from "),xl=s("a"),su=t("PreTrainedTokenizer"),au=t(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),iu=m(),b($n.$$.fragment),lu=m(),gt=s("div"),b($s.$$.fragment),du=m(),Dd=s("p"),cu=t(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),pu=m(),xs=s("ul"),Rl=s("li"),mu=t("single sequence: "),Id=s("code"),hu=t("[CLS] X [SEP]"),fu=m(),El=s("li"),uu=t("pair of sequences: "),Nd=s("code"),gu=t("[CLS] A [SEP] B [SEP]"),_u=m(),xn=s("div"),b(Rs.$$.fragment),ku=m(),Es=s("p"),yu=t(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Sd=s("code"),Fu=t("prepare_for_model"),bu=t(" method."),vu=m(),No=s("div"),b(Ms.$$.fragment),wu=m(),Wd=s("p"),Tu=t("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer"),$u=m(),b(Rn.$$.fragment),xu=m(),Rt=s("p"),Ru=t("If "),Ud=s("code"),Eu=t("token_ids_1"),Mu=t(" is "),Kd=s("code"),ju=t("None"),zu=t(", this method only returns the first portion of the mask (0s)."),Cu=m(),Ml=s("div"),b(js.$$.fragment),nh=m(),Et=s("h2"),En=s("a"),Bd=s("span"),b(zs.$$.fragment),qu=m(),Qd=s("span"),Pu=t("RoFormerTokenizerFast"),rh=m(),lo=s("div"),b(Cs.$$.fragment),Au=m(),qs=s("p"),Lu=t("Construct a \u201Cfast\u201D RoFormer tokenizer (backed by HuggingFace\u2019s "),Hd=s("em"),Ou=t("tokenizers"),Du=t(" library)."),Iu=m(),Mn=s("p"),jl=s("a"),Nu=t("RoFormerTokenizerFast"),Su=t(" is almost identical to "),zl=s("a"),Wu=t("BertTokenizerFast"),Uu=t(` and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`),Ku=m(),Ps=s("p"),Bu=t("This tokenizer inherits from "),Cl=s("a"),Qu=t("PreTrainedTokenizerFast"),Hu=t(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vu=m(),b(jn.$$.fragment),Ju=m(),_t=s("div"),b(As.$$.fragment),Gu=m(),Vd=s("p"),Xu=t(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Yu=m(),Ls=s("ul"),ql=s("li"),Zu=t("single sequence: "),Jd=s("code"),eg=t("[CLS] X [SEP]"),og=m(),Pl=s("li"),tg=t("pair of sequences: "),Gd=s("code"),ng=t("[CLS] A [SEP] B [SEP]"),sh=m(),Mt=s("h2"),zn=s("a"),Xd=s("span"),b(Os.$$.fragment),rg=m(),Yd=s("span"),sg=t("RoFormerModel"),ah=m(),ko=s("div"),b(Ds.$$.fragment),ag=m(),Is=s("p"),ig=t(`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ns=s("a"),lg=t("torch.nn.Module"),dg=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cg=m(),Ss=s("p"),pg=t(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Ws=s("a"),mg=t(`Attention is
all you need`),hg=t(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),fg=m(),co=s("p"),ug=t("To behave as an decoder the model needs to be initialized with the "),Zd=s("code"),gg=t("is_decoder"),_g=t(` argument of the configuration set
to `),ec=s("code"),kg=t("True"),yg=t(". To be used in a Seq2Seq model, the model needs to initialized with both "),oc=s("code"),Fg=t("is_decoder"),bg=t(` argument and
`),tc=s("code"),vg=t("add_cross_attention"),wg=t(" set to "),nc=s("code"),Tg=t("True"),$g=t("; an "),rc=s("code"),xg=t("encoder_hidden_states"),Rg=t(" is then expected as an input to the forward pass."),Eg=m(),So=s("div"),b(Us.$$.fragment),Mg=m(),jt=s("p"),jg=t("The "),Al=s("a"),zg=t("RoFormerModel"),Cg=t(" forward method, overrides the "),sc=s("code"),qg=t("__call__"),Pg=t(" special method."),Ag=m(),b(Cn.$$.fragment),Lg=m(),b(qn.$$.fragment),ih=m(),zt=s("h2"),Pn=s("a"),ac=s("span"),b(Ks.$$.fragment),Og=m(),ic=s("span"),Dg=t("RoFormerForCausalLM"),lh=m(),at=s("div"),b(Bs.$$.fragment),Ig=m(),Ct=s("p"),Ng=t("RoFormer Model with a "),lc=s("code"),Sg=t("language modeling"),Wg=t(` head on top for CLM fine-tuning.
This model is a PyTorch `),Qs=s("a"),Ug=t("torch.nn.Module"),Kg=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Bg=m(),Wo=s("div"),b(Hs.$$.fragment),Qg=m(),qt=s("p"),Hg=t("The "),Ll=s("a"),Vg=t("RoFormerForCausalLM"),Jg=t(" forward method, overrides the "),dc=s("code"),Gg=t("__call__"),Xg=t(" special method."),Yg=m(),b(An.$$.fragment),Zg=m(),b(Ln.$$.fragment),dh=m(),Pt=s("h2"),On=s("a"),cc=s("span"),b(Vs.$$.fragment),e_=m(),pc=s("span"),o_=t("RoFormerForMaskedLM"),ch=m(),it=s("div"),b(Js.$$.fragment),t_=m(),At=s("p"),n_=t("RoFormer Model with a "),mc=s("code"),r_=t("language modeling"),s_=t(` head on top.
This model is a PyTorch `),Gs=s("a"),a_=t("torch.nn.Module"),i_=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),l_=m(),bo=s("div"),b(Xs.$$.fragment),d_=m(),Lt=s("p"),c_=t("The "),Ol=s("a"),p_=t("RoFormerForMaskedLM"),m_=t(" forward method, overrides the "),hc=s("code"),h_=t("__call__"),f_=t(" special method."),u_=m(),b(Dn.$$.fragment),g_=m(),b(In.$$.fragment),__=m(),b(Nn.$$.fragment),ph=m(),Ot=s("h2"),Sn=s("a"),fc=s("span"),b(Ys.$$.fragment),k_=m(),uc=s("span"),y_=t("RoFormerForSequenceClassification"),mh=m(),Lo=s("div"),b(Zs.$$.fragment),F_=m(),gc=s("p"),b_=t(`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),v_=m(),ea=s("p"),w_=t("This model is a PyTorch "),oa=s("a"),T_=t("torch.nn.Module"),$_=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),x_=m(),io=s("div"),b(ta.$$.fragment),R_=m(),Dt=s("p"),E_=t("The "),Dl=s("a"),M_=t("RoFormerForSequenceClassification"),j_=t(" forward method, overrides the "),_c=s("code"),z_=t("__call__"),C_=t(" special method."),q_=m(),b(Wn.$$.fragment),P_=m(),b(Un.$$.fragment),A_=m(),b(Kn.$$.fragment),L_=m(),b(Bn.$$.fragment),O_=m(),b(Qn.$$.fragment),hh=m(),It=s("h2"),Hn=s("a"),kc=s("span"),b(na.$$.fragment),D_=m(),yc=s("span"),I_=t("RoFormerForMultipleChoice"),fh=m(),Oo=s("div"),b(ra.$$.fragment),N_=m(),Fc=s("p"),S_=t(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),W_=m(),sa=s("p"),U_=t("This model is a PyTorch "),aa=s("a"),K_=t("torch.nn.Module"),B_=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Q_=m(),Uo=s("div"),b(ia.$$.fragment),H_=m(),Nt=s("p"),V_=t("The "),Il=s("a"),J_=t("RoFormerForMultipleChoice"),G_=t(" forward method, overrides the "),bc=s("code"),X_=t("__call__"),Y_=t(" special method."),Z_=m(),b(Vn.$$.fragment),ek=m(),b(Jn.$$.fragment),uh=m(),St=s("h2"),Gn=s("a"),vc=s("span"),b(la.$$.fragment),ok=m(),wc=s("span"),tk=t("RoFormerForTokenClassification"),gh=m(),Do=s("div"),b(da.$$.fragment),nk=m(),Tc=s("p"),rk=t(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),sk=m(),ca=s("p"),ak=t("This model is a PyTorch "),pa=s("a"),ik=t("torch.nn.Module"),lk=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dk=m(),vo=s("div"),b(ma.$$.fragment),ck=m(),Wt=s("p"),pk=t("The "),Nl=s("a"),mk=t("RoFormerForTokenClassification"),hk=t(" forward method, overrides the "),$c=s("code"),fk=t("__call__"),uk=t(" special method."),gk=m(),b(Xn.$$.fragment),_k=m(),b(Yn.$$.fragment),kk=m(),b(Zn.$$.fragment),_h=m(),Ut=s("h2"),er=s("a"),xc=s("span"),b(ha.$$.fragment),yk=m(),Rc=s("span"),Fk=t("RoFormerForQuestionAnswering"),kh=m(),Io=s("div"),b(fa.$$.fragment),bk=m(),Kt=s("p"),vk=t(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ec=s("code"),wk=t("span start logits"),Tk=t(" and "),Mc=s("code"),$k=t("span end logits"),xk=t(")."),Rk=m(),ua=s("p"),Ek=t("This model is a PyTorch "),ga=s("a"),Mk=t("torch.nn.Module"),jk=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zk=m(),wo=s("div"),b(_a.$$.fragment),Ck=m(),Bt=s("p"),qk=t("The "),Sl=s("a"),Pk=t("RoFormerForQuestionAnswering"),Ak=t(" forward method, overrides the "),jc=s("code"),Lk=t("__call__"),Ok=t(" special method."),Dk=m(),b(or.$$.fragment),Ik=m(),b(tr.$$.fragment),Nk=m(),b(nr.$$.fragment),yh=m(),Qt=s("h2"),rr=s("a"),zc=s("span"),b(ka.$$.fragment),Sk=m(),Cc=s("span"),Wk=t("TFRoFormerModel"),Fh=m(),po=s("div"),b(ya.$$.fragment),Uk=m(),qc=s("p"),Kk=t("The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top."),Bk=m(),Fa=s("p"),Qk=t("This model inherits from "),Wl=s("a"),Hk=t("TFPreTrainedModel"),Vk=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jk=m(),ba=s("p"),Gk=t("This model is also a "),va=s("a"),Xk=t("tf.keras.Model"),Yk=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zk=m(),b(sr.$$.fragment),ey=m(),Ko=s("div"),b(wa.$$.fragment),oy=m(),Ht=s("p"),ty=t("The "),Ul=s("a"),ny=t("TFRoFormerModel"),ry=t(" forward method, overrides the "),Pc=s("code"),sy=t("__call__"),ay=t(" special method."),iy=m(),b(ar.$$.fragment),ly=m(),b(ir.$$.fragment),bh=m(),Vt=s("h2"),lr=s("a"),Ac=s("span"),b(Ta.$$.fragment),dy=m(),Lc=s("span"),cy=t("TFRoFormerForMaskedLM"),vh=m(),mo=s("div"),b($a.$$.fragment),py=m(),xa=s("p"),my=t("RoFormer Model with a "),Oc=s("code"),hy=t("language modeling"),fy=t(" head on top."),uy=m(),Ra=s("p"),gy=t("This model inherits from "),Kl=s("a"),_y=t("TFPreTrainedModel"),ky=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yy=m(),Ea=s("p"),Fy=t("This model is also a "),Ma=s("a"),by=t("tf.keras.Model"),vy=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wy=m(),b(dr.$$.fragment),Ty=m(),To=s("div"),b(ja.$$.fragment),$y=m(),Jt=s("p"),xy=t("The "),Bl=s("a"),Ry=t("TFRoFormerForMaskedLM"),Ey=t(" forward method, overrides the "),Dc=s("code"),My=t("__call__"),jy=t(" special method."),zy=m(),b(cr.$$.fragment),Cy=m(),b(pr.$$.fragment),qy=m(),b(mr.$$.fragment),wh=m(),Gt=s("h2"),hr=s("a"),Ic=s("span"),b(za.$$.fragment),Py=m(),Nc=s("span"),Ay=t("TFRoFormerForCausalLM"),Th=m(),ho=s("div"),b(Ca.$$.fragment),Ly=m(),qa=s("p"),Oy=t("RoFormer Model with a "),Sc=s("code"),Dy=t("language modeling"),Iy=t(" head on top for CLM fine-tuning."),Ny=m(),Pa=s("p"),Sy=t("This model inherits from "),Ql=s("a"),Wy=t("TFPreTrainedModel"),Uy=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ky=m(),Aa=s("p"),By=t("This model is also a "),La=s("a"),Qy=t("tf.keras.Model"),Hy=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vy=m(),b(fr.$$.fragment),Jy=m(),kt=s("div"),b(Oa.$$.fragment),Gy=m(),yo=s("p"),Xy=t("labels ("),Wc=s("code"),Yy=t("tf.Tensor"),Zy=t(" or "),Uc=s("code"),eF=t("np.ndarray"),oF=t(" of shape "),Kc=s("code"),tF=t("(batch_size, sequence_length)"),nF=t(", "),Bc=s("em"),rF=t("optional"),sF=t(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Qc=s("code"),aF=t("[0, ..., config.vocab_size - 1]"),iF=t("."),lF=m(),b(ur.$$.fragment),$h=m(),Xt=s("h2"),gr=s("a"),Hc=s("span"),b(Da.$$.fragment),dF=m(),Vc=s("span"),cF=t("TFRoFormerForSequenceClassification"),xh=m(),fo=s("div"),b(Ia.$$.fragment),pF=m(),Jc=s("p"),mF=t("RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),hF=m(),Na=s("p"),fF=t("This model inherits from "),Hl=s("a"),uF=t("TFPreTrainedModel"),gF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_F=m(),Sa=s("p"),kF=t("This model is also a "),Wa=s("a"),yF=t("tf.keras.Model"),FF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bF=m(),b(_r.$$.fragment),vF=m(),$o=s("div"),b(Ua.$$.fragment),wF=m(),Yt=s("p"),TF=t("The "),Vl=s("a"),$F=t("TFRoFormerForSequenceClassification"),xF=t(" forward method, overrides the "),Gc=s("code"),RF=t("__call__"),EF=t(" special method."),MF=m(),b(kr.$$.fragment),jF=m(),b(yr.$$.fragment),zF=m(),b(Fr.$$.fragment),Rh=m(),Zt=s("h2"),br=s("a"),Xc=s("span"),b(Ka.$$.fragment),CF=m(),Yc=s("span"),qF=t("TFRoFormerForMultipleChoice"),Eh=m(),uo=s("div"),b(Ba.$$.fragment),PF=m(),Zc=s("p"),AF=t(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),LF=m(),Qa=s("p"),OF=t("This model inherits from "),Jl=s("a"),DF=t("TFPreTrainedModel"),IF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),NF=m(),Ha=s("p"),SF=t("This model is also a "),Va=s("a"),WF=t("tf.keras.Model"),UF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),KF=m(),b(vr.$$.fragment),BF=m(),Bo=s("div"),b(Ja.$$.fragment),QF=m(),en=s("p"),HF=t("The "),Gl=s("a"),VF=t("TFRoFormerForMultipleChoice"),JF=t(" forward method, overrides the "),ep=s("code"),GF=t("__call__"),XF=t(" special method."),YF=m(),b(wr.$$.fragment),ZF=m(),b(Tr.$$.fragment),Mh=m(),on=s("h2"),$r=s("a"),op=s("span"),b(Ga.$$.fragment),eb=m(),tp=s("span"),ob=t("TFRoFormerForTokenClassification"),jh=m(),go=s("div"),b(Xa.$$.fragment),tb=m(),np=s("p"),nb=t(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),rb=m(),Ya=s("p"),sb=t("This model inherits from "),Xl=s("a"),ab=t("TFPreTrainedModel"),ib=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lb=m(),Za=s("p"),db=t("This model is also a "),ei=s("a"),cb=t("tf.keras.Model"),pb=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mb=m(),b(xr.$$.fragment),hb=m(),xo=s("div"),b(oi.$$.fragment),fb=m(),tn=s("p"),ub=t("The "),Yl=s("a"),gb=t("TFRoFormerForTokenClassification"),_b=t(" forward method, overrides the "),rp=s("code"),kb=t("__call__"),yb=t(" special method."),Fb=m(),b(Rr.$$.fragment),bb=m(),b(Er.$$.fragment),vb=m(),b(Mr.$$.fragment),zh=m(),nn=s("h2"),jr=s("a"),sp=s("span"),b(ti.$$.fragment),wb=m(),ap=s("span"),Tb=t("TFRoFormerForQuestionAnswering"),Ch=m(),_o=s("div"),b(ni.$$.fragment),$b=m(),rn=s("p"),xb=t(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ip=s("code"),Rb=t("span start logits"),Eb=t(" and "),lp=s("code"),Mb=t("span end logits"),jb=t(")."),zb=m(),ri=s("p"),Cb=t("This model inherits from "),Zl=s("a"),qb=t("TFPreTrainedModel"),Pb=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ab=m(),si=s("p"),Lb=t("This model is also a "),ai=s("a"),Ob=t("tf.keras.Model"),Db=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ib=m(),b(zr.$$.fragment),Nb=m(),Ro=s("div"),b(ii.$$.fragment),Sb=m(),sn=s("p"),Wb=t("The "),ed=s("a"),Ub=t("TFRoFormerForQuestionAnswering"),Kb=t(" forward method, overrides the "),dp=s("code"),Bb=t("__call__"),Qb=t(" special method."),Hb=m(),b(Cr.$$.fragment),Vb=m(),b(qr.$$.fragment),Jb=m(),b(Pr.$$.fragment),qh=m(),an=s("h2"),Ar=s("a"),cp=s("span"),b(li.$$.fragment),Gb=m(),pp=s("span"),Xb=t("FlaxRoFormerModel"),Ph=m(),eo=s("div"),b(di.$$.fragment),Yb=m(),mp=s("p"),Zb=t("The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top."),ev=m(),ci=s("p"),ov=t("This model inherits from "),od=s("a"),tv=t("FlaxPreTrainedModel"),nv=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rv=m(),pi=s("p"),sv=t("This model is also a Flax Linen "),mi=s("a"),av=t("flax.linen.Module"),iv=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lv=m(),hp=s("p"),dv=t("Finally, this model supports inherent JAX features such as:"),cv=m(),lt=s("ul"),fp=s("li"),hi=s("a"),pv=t("Just-In-Time (JIT) compilation"),mv=m(),up=s("li"),fi=s("a"),hv=t("Automatic Differentiation"),fv=m(),gp=s("li"),ui=s("a"),uv=t("Vectorization"),gv=m(),_p=s("li"),gi=s("a"),_v=t("Parallelization"),kv=m(),Qo=s("div"),b(_i.$$.fragment),yv=m(),ln=s("p"),Fv=t("The "),kp=s("code"),bv=t("FlaxRoFormerPreTrainedModel"),vv=t(" forward method, overrides the "),yp=s("code"),wv=t("__call__"),Tv=t(" special method."),$v=m(),b(Lr.$$.fragment),xv=m(),b(Or.$$.fragment),Ah=m(),dn=s("h2"),Dr=s("a"),Fp=s("span"),b(ki.$$.fragment),Rv=m(),bp=s("span"),Ev=t("FlaxRoFormerForMaskedLM"),Lh=m(),oo=s("div"),b(yi.$$.fragment),Mv=m(),Fi=s("p"),jv=t("RoFormer Model with a "),vp=s("code"),zv=t("language modeling"),Cv=t(" head on top."),qv=m(),bi=s("p"),Pv=t("This model inherits from "),td=s("a"),Av=t("FlaxPreTrainedModel"),Lv=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ov=m(),vi=s("p"),Dv=t("This model is also a Flax Linen "),wi=s("a"),Iv=t("flax.linen.Module"),Nv=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Sv=m(),wp=s("p"),Wv=t("Finally, this model supports inherent JAX features such as:"),Uv=m(),dt=s("ul"),Tp=s("li"),Ti=s("a"),Kv=t("Just-In-Time (JIT) compilation"),Bv=m(),$p=s("li"),$i=s("a"),Qv=t("Automatic Differentiation"),Hv=m(),xp=s("li"),xi=s("a"),Vv=t("Vectorization"),Jv=m(),Rp=s("li"),Ri=s("a"),Gv=t("Parallelization"),Xv=m(),Ho=s("div"),b(Ei.$$.fragment),Yv=m(),cn=s("p"),Zv=t("The "),Ep=s("code"),ew=t("FlaxRoFormerPreTrainedModel"),ow=t(" forward method, overrides the "),Mp=s("code"),tw=t("__call__"),nw=t(" special method."),rw=m(),b(Ir.$$.fragment),sw=m(),b(Nr.$$.fragment),Oh=m(),pn=s("h2"),Sr=s("a"),jp=s("span"),b(Mi.$$.fragment),aw=m(),zp=s("span"),iw=t("FlaxRoFormerForSequenceClassification"),Dh=m(),to=s("div"),b(ji.$$.fragment),lw=m(),Cp=s("p"),dw=t(`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cw=m(),zi=s("p"),pw=t("This model inherits from "),nd=s("a"),mw=t("FlaxPreTrainedModel"),hw=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fw=m(),Ci=s("p"),uw=t("This model is also a Flax Linen "),qi=s("a"),gw=t("flax.linen.Module"),_w=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),kw=m(),qp=s("p"),yw=t("Finally, this model supports inherent JAX features such as:"),Fw=m(),ct=s("ul"),Pp=s("li"),Pi=s("a"),bw=t("Just-In-Time (JIT) compilation"),vw=m(),Ap=s("li"),Ai=s("a"),ww=t("Automatic Differentiation"),Tw=m(),Lp=s("li"),Li=s("a"),$w=t("Vectorization"),xw=m(),Op=s("li"),Oi=s("a"),Rw=t("Parallelization"),Ew=m(),Vo=s("div"),b(Di.$$.fragment),Mw=m(),mn=s("p"),jw=t("The "),Dp=s("code"),zw=t("FlaxRoFormerPreTrainedModel"),Cw=t(" forward method, overrides the "),Ip=s("code"),qw=t("__call__"),Pw=t(" special method."),Aw=m(),b(Wr.$$.fragment),Lw=m(),b(Ur.$$.fragment),Ih=m(),hn=s("h2"),Kr=s("a"),Np=s("span"),b(Ii.$$.fragment),Ow=m(),Sp=s("span"),Dw=t("FlaxRoFormerForMultipleChoice"),Nh=m(),no=s("div"),b(Ni.$$.fragment),Iw=m(),Wp=s("p"),Nw=t(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Sw=m(),Si=s("p"),Ww=t("This model inherits from "),rd=s("a"),Uw=t("FlaxPreTrainedModel"),Kw=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Bw=m(),Wi=s("p"),Qw=t("This model is also a Flax Linen "),Ui=s("a"),Hw=t("flax.linen.Module"),Vw=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Jw=m(),Up=s("p"),Gw=t("Finally, this model supports inherent JAX features such as:"),Xw=m(),pt=s("ul"),Kp=s("li"),Ki=s("a"),Yw=t("Just-In-Time (JIT) compilation"),Zw=m(),Bp=s("li"),Bi=s("a"),eT=t("Automatic Differentiation"),oT=m(),Qp=s("li"),Qi=s("a"),tT=t("Vectorization"),nT=m(),Hp=s("li"),Hi=s("a"),rT=t("Parallelization"),sT=m(),Jo=s("div"),b(Vi.$$.fragment),aT=m(),fn=s("p"),iT=t("The "),Vp=s("code"),lT=t("FlaxRoFormerPreTrainedModel"),dT=t(" forward method, overrides the "),Jp=s("code"),cT=t("__call__"),pT=t(" special method."),mT=m(),b(Br.$$.fragment),hT=m(),b(Qr.$$.fragment),Sh=m(),un=s("h2"),Hr=s("a"),Gp=s("span"),b(Ji.$$.fragment),fT=m(),Xp=s("span"),uT=t("FlaxRoFormerForTokenClassification"),Wh=m(),ro=s("div"),b(Gi.$$.fragment),gT=m(),Yp=s("p"),_T=t(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),kT=m(),Xi=s("p"),yT=t("This model inherits from "),sd=s("a"),FT=t("FlaxPreTrainedModel"),bT=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vT=m(),Yi=s("p"),wT=t("This model is also a Flax Linen "),Zi=s("a"),TT=t("flax.linen.Module"),$T=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xT=m(),Zp=s("p"),RT=t("Finally, this model supports inherent JAX features such as:"),ET=m(),mt=s("ul"),em=s("li"),el=s("a"),MT=t("Just-In-Time (JIT) compilation"),jT=m(),om=s("li"),ol=s("a"),zT=t("Automatic Differentiation"),CT=m(),tm=s("li"),tl=s("a"),qT=t("Vectorization"),PT=m(),nm=s("li"),nl=s("a"),AT=t("Parallelization"),LT=m(),Go=s("div"),b(rl.$$.fragment),OT=m(),gn=s("p"),DT=t("The "),rm=s("code"),IT=t("FlaxRoFormerPreTrainedModel"),NT=t(" forward method, overrides the "),sm=s("code"),ST=t("__call__"),WT=t(" special method."),UT=m(),b(Vr.$$.fragment),KT=m(),b(Jr.$$.fragment),Uh=m(),_n=s("h2"),Gr=s("a"),am=s("span"),b(sl.$$.fragment),BT=m(),im=s("span"),QT=t("FlaxRoFormerForQuestionAnswering"),Kh=m(),so=s("div"),b(al.$$.fragment),HT=m(),kn=s("p"),VT=t(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),lm=s("code"),JT=t("span start logits"),GT=t(" and "),dm=s("code"),XT=t("span end logits"),YT=t(")."),ZT=m(),il=s("p"),e$=t("This model inherits from "),ad=s("a"),o$=t("FlaxPreTrainedModel"),t$=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),n$=m(),ll=s("p"),r$=t("This model is also a Flax Linen "),dl=s("a"),s$=t("flax.linen.Module"),a$=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),i$=m(),cm=s("p"),l$=t("Finally, this model supports inherent JAX features such as:"),d$=m(),ht=s("ul"),pm=s("li"),cl=s("a"),c$=t("Just-In-Time (JIT) compilation"),p$=m(),mm=s("li"),pl=s("a"),m$=t("Automatic Differentiation"),h$=m(),hm=s("li"),ml=s("a"),f$=t("Vectorization"),u$=m(),fm=s("li"),hl=s("a"),g$=t("Parallelization"),_$=m(),Xo=s("div"),b(fl.$$.fragment),k$=m(),yn=s("p"),y$=t("The "),um=s("code"),F$=t("FlaxRoFormerPreTrainedModel"),b$=t(" forward method, overrides the "),gm=s("code"),v$=t("__call__"),w$=t(" special method."),T$=m(),b(Xr.$$.fragment),$$=m(),b(Yr.$$.fragment),this.h()},l(r){const y=Sx('[data-svelte="svelte-1phssyn"]',document.head);d=a(y,"META",{name:!0,content:!0}),y.forEach(o),g=h(r),c=a(r,"H1",{class:!0});var ul=i(c);f=a(ul,"A",{id:!0,class:!0,href:!0});var _m=i(f);k=a(_m,"SPAN",{});var km=i(k);v(l.$$.fragment,km),km.forEach(o),_m.forEach(o),p=h(ul),j=a(ul,"SPAN",{});var ym=i(j);Te=n(ym,"RoFormer"),ym.forEach(o),ul.forEach(o),ge=h(r),I=a(r,"H2",{class:!0});var gl=i(I);ae=a(gl,"A",{id:!0,class:!0,href:!0});var Fm=i(ae);ee=a(Fm,"SPAN",{});var bm=i(ee);v(R.$$.fragment,bm),bm.forEach(o),Fm.forEach(o),$e=h(gl),Q=a(gl,"SPAN",{});var vm=i(Q);xe=n(vm,"Overview"),vm.forEach(o),gl.forEach(o),_e=h(r),N=a(r,"P",{});var _l=i(N);Re=n(_l,"The RoFormer model was proposed in "),ie=a(_l,"A",{href:!0,rel:!0});var wm=i(ie);V=n(wm,"RoFormer: Enhanced Transformer with Rotary Position Embedding"),wm.forEach(o),Ee=n(_l," by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu."),_l.forEach(o),ke=h(r),W=a(r,"P",{});var Tm=i(W);Me=n(Tm,"The abstract from the paper is the following:"),Tm.forEach(o),ye=h(r),U=a(r,"P",{});var $m=i(U);he=a($m,"EM",{});var xm=i(he);je=n(xm,`Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.`),xm.forEach(o),$m.forEach(o),te=h(r),C=a(r,"P",{});var Rm=i(C);A=n(Rm,"Tips:"),Rm.forEach(o),Fe=h(r),K=a(r,"UL",{});var Em=i(K);fe=a(Em,"LI",{});var Mm=i(fe);ze=n(Mm,`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`),Mm.forEach(o),Em.forEach(o),H=h(r),ne=a(r,"P",{});var Fn=i(ne);Ce=n(Fn,"This model was contributed by "),q=a(Fn,"A",{href:!0,rel:!0});var jm=i(q);qe=n(jm,"junnyu"),jm.forEach(o),J=n(Fn,". The original code can be found "),le=a(Fn,"A",{href:!0,rel:!0});var zm=i(le);Pe=n(zm,"here"),zm.forEach(o),G=n(Fn,"."),Fn.forEach(o),be=h(r),se=a(r,"H2",{class:!0});var kl=i(se);O=a(kl,"A",{id:!0,class:!0,href:!0});var Cm=i(O);ue=a(Cm,"SPAN",{});var qm=i(ue);v(S.$$.fragment,qm),qm.forEach(o),Cm.forEach(o),Ae=h(kl),oe=a(kl,"SPAN",{});var Pm=i(oe);L=n(Pm,"RoFormerConfig"),Pm.forEach(o),kl.forEach(o),ve=h(r),P=a(r,"DIV",{class:!0});var ft=i(P);v(de.$$.fragment,ft),Le=h(ft),F=a(ft,"P",{});var bn=i(F);M=n(bn,"This is the configuration class to store the configuration of a "),Se=a(bn,"A",{href:!0});var Am=i(Se);re=n(Am,"RoFormerModel"),Am.forEach(o),He=n(bn,`. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
`),Ne=a(bn,"A",{href:!0,rel:!0});var Lm=i(Ne);z=n(Lm,"junnyu/roformer_chinese_base"),Lm.forEach(o),Ve=n(bn," architecture."),bn.forEach(o),Je=h(ft),Oe=a(ft,"P",{});var vn=i(Oe);Ge=n(vn,"Configuration objects inherit from "),We=a(vn,"A",{href:!0});var Om=i(We);D=n(Om,"PretrainedConfig"),Om.forEach(o),X=n(vn,` and can be used to control the model outputs. Read the
documentation from `),Ue=a(vn,"A",{href:!0});var Dm=i(Ue);Xe=n(Dm,"PretrainedConfig"),Dm.forEach(o),Y=n(vn," for more information."),vn.forEach(o),Ye=h(ft),v(Ie.$$.fragment,ft),ft.forEach(o),we=h(r),De=a(r,"H2",{class:!0});var yl=i(De);Z=a(yl,"A",{id:!0,class:!0,href:!0});var Im=i(Z);Ke=a(Im,"SPAN",{});var Nm=i(Ke);v(Fs.$$.fragment,Nm),Nm.forEach(o),Im.forEach(o),Xf=h(yl),Od=a(yl,"SPAN",{});var Sm=i(Od);Yf=n(Sm,"RoFormerTokenizer"),Sm.forEach(o),yl.forEach(o),th=h(r),Ze=a(r,"DIV",{class:!0});var ao=i(Ze);v(bs.$$.fragment,ao),Zf=h(ao),vs=a(ao,"P",{});var Fl=i(vs);eu=n(Fl,"Construct a RoFormer tokenizer. Based on "),ws=a(Fl,"A",{href:!0,rel:!0});var Wm=i(ws);ou=n(Wm,"Rust Jieba"),Wm.forEach(o),tu=n(Fl,"."),Fl.forEach(o),nu=h(ao),Ts=a(ao,"P",{});var bl=i(Ts);ru=n(bl,"This tokenizer inherits from "),xl=a(bl,"A",{href:!0});var Um=i(xl);su=n(Um,"PreTrainedTokenizer"),Um.forEach(o),au=n(bl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),bl.forEach(o),iu=h(ao),v($n.$$.fragment,ao),lu=h(ao),gt=a(ao,"DIV",{class:!0});var wn=i(gt);v($s.$$.fragment,wn),du=h(wn),Dd=a(wn,"P",{});var Km=i(Dd);cu=n(Km,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Km.forEach(o),pu=h(wn),xs=a(wn,"UL",{});var vl=i(xs);Rl=a(vl,"LI",{});var id=i(Rl);mu=n(id,"single sequence: "),Id=a(id,"CODE",{});var Bm=i(Id);hu=n(Bm,"[CLS] X [SEP]"),Bm.forEach(o),id.forEach(o),fu=h(vl),El=a(vl,"LI",{});var ld=i(El);uu=n(ld,"pair of sequences: "),Nd=a(ld,"CODE",{});var Qm=i(Nd);gu=n(Qm,"[CLS] A [SEP] B [SEP]"),Qm.forEach(o),ld.forEach(o),vl.forEach(o),wn.forEach(o),_u=h(ao),xn=a(ao,"DIV",{class:!0});var wl=i(xn);v(Rs.$$.fragment,wl),ku=h(wl),Es=a(wl,"P",{});var Tl=i(Es);yu=n(Tl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Sd=a(Tl,"CODE",{});var Hm=i(Sd);Fu=n(Hm,"prepare_for_model"),Hm.forEach(o),bu=n(Tl," method."),Tl.forEach(o),wl.forEach(o),vu=h(ao),No=a(ao,"DIV",{class:!0});var ut=i(No);v(Ms.$$.fragment,ut),wu=h(ut),Wd=a(ut,"P",{});var Vm=i(Wd);Tu=n(Vm,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer"),Vm.forEach(o),$u=h(ut),v(Rn.$$.fragment,ut),xu=h(ut),Rt=a(ut,"P",{});var Tn=i(Rt);Ru=n(Tn,"If "),Ud=a(Tn,"CODE",{});var Jm=i(Ud);Eu=n(Jm,"token_ids_1"),Jm.forEach(o),Mu=n(Tn," is "),Kd=a(Tn,"CODE",{});var Gm=i(Kd);ju=n(Gm,"None"),Gm.forEach(o),zu=n(Tn,", this method only returns the first portion of the mask (0s)."),Tn.forEach(o),ut.forEach(o),Cu=h(ao),Ml=a(ao,"DIV",{class:!0});var Xm=i(Ml);v(js.$$.fragment,Xm),Xm.forEach(o),ao.forEach(o),nh=h(r),Et=a(r,"H2",{class:!0});var $l=i(Et);En=a($l,"A",{id:!0,class:!0,href:!0});var Ym=i(En);Bd=a(Ym,"SPAN",{});var Zm=i(Bd);v(zs.$$.fragment,Zm),Zm.forEach(o),Ym.forEach(o),qu=h($l),Qd=a($l,"SPAN",{});var eh=i(Qd);Pu=n(eh,"RoFormerTokenizerFast"),eh.forEach(o),$l.forEach(o),rh=h(r),lo=a(r,"DIV",{class:!0});var Fo=i(lo);v(Cs.$$.fragment,Fo),Au=h(Fo),qs=a(Fo,"P",{});var Qh=i(qs);Lu=n(Qh,"Construct a \u201Cfast\u201D RoFormer tokenizer (backed by HuggingFace\u2019s "),Hd=a(Qh,"EM",{});var E$=i(Hd);Ou=n(E$,"tokenizers"),E$.forEach(o),Du=n(Qh," library)."),Qh.forEach(o),Iu=h(Fo),Mn=a(Fo,"P",{});var oh=i(Mn);jl=a(oh,"A",{href:!0});var M$=i(jl);Nu=n(M$,"RoFormerTokenizerFast"),M$.forEach(o),Su=n(oh," is almost identical to "),zl=a(oh,"A",{href:!0});var j$=i(zl);Wu=n(j$,"BertTokenizerFast"),j$.forEach(o),Uu=n(oh,` and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`),oh.forEach(o),Ku=h(Fo),Ps=a(Fo,"P",{});var Hh=i(Ps);Bu=n(Hh,"This tokenizer inherits from "),Cl=a(Hh,"A",{href:!0});var z$=i(Cl);Qu=n(z$,"PreTrainedTokenizerFast"),z$.forEach(o),Hu=n(Hh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Hh.forEach(o),Vu=h(Fo),v(jn.$$.fragment,Fo),Ju=h(Fo),_t=a(Fo,"DIV",{class:!0});var dd=i(_t);v(As.$$.fragment,dd),Gu=h(dd),Vd=a(dd,"P",{});var C$=i(Vd);Xu=n(C$,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),C$.forEach(o),Yu=h(dd),Ls=a(dd,"UL",{});var Vh=i(Ls);ql=a(Vh,"LI",{});var x$=i(ql);Zu=n(x$,"single sequence: "),Jd=a(x$,"CODE",{});var q$=i(Jd);eg=n(q$,"[CLS] X [SEP]"),q$.forEach(o),x$.forEach(o),og=h(Vh),Pl=a(Vh,"LI",{});var R$=i(Pl);tg=n(R$,"pair of sequences: "),Gd=a(R$,"CODE",{});var P$=i(Gd);ng=n(P$,"[CLS] A [SEP] B [SEP]"),P$.forEach(o),R$.forEach(o),Vh.forEach(o),dd.forEach(o),Fo.forEach(o),sh=h(r),Mt=a(r,"H2",{class:!0});var Jh=i(Mt);zn=a(Jh,"A",{id:!0,class:!0,href:!0});var A$=i(zn);Xd=a(A$,"SPAN",{});var L$=i(Xd);v(Os.$$.fragment,L$),L$.forEach(o),A$.forEach(o),rg=h(Jh),Yd=a(Jh,"SPAN",{});var O$=i(Yd);sg=n(O$,"RoFormerModel"),O$.forEach(o),Jh.forEach(o),ah=h(r),ko=a(r,"DIV",{class:!0});var yt=i(ko);v(Ds.$$.fragment,yt),ag=h(yt),Is=a(yt,"P",{});var Gh=i(Is);ig=n(Gh,`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ns=a(Gh,"A",{href:!0,rel:!0});var D$=i(Ns);lg=n(D$,"torch.nn.Module"),D$.forEach(o),dg=n(Gh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gh.forEach(o),cg=h(yt),Ss=a(yt,"P",{});var Xh=i(Ss);pg=n(Xh,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Ws=a(Xh,"A",{href:!0,rel:!0});var I$=i(Ws);mg=n(I$,`Attention is
all you need`),I$.forEach(o),hg=n(Xh,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Xh.forEach(o),fg=h(yt),co=a(yt,"P",{});var Eo=i(co);ug=n(Eo,"To behave as an decoder the model needs to be initialized with the "),Zd=a(Eo,"CODE",{});var N$=i(Zd);gg=n(N$,"is_decoder"),N$.forEach(o),_g=n(Eo,` argument of the configuration set
to `),ec=a(Eo,"CODE",{});var S$=i(ec);kg=n(S$,"True"),S$.forEach(o),yg=n(Eo,". To be used in a Seq2Seq model, the model needs to initialized with both "),oc=a(Eo,"CODE",{});var W$=i(oc);Fg=n(W$,"is_decoder"),W$.forEach(o),bg=n(Eo,` argument and
`),tc=a(Eo,"CODE",{});var U$=i(tc);vg=n(U$,"add_cross_attention"),U$.forEach(o),wg=n(Eo," set to "),nc=a(Eo,"CODE",{});var K$=i(nc);Tg=n(K$,"True"),K$.forEach(o),$g=n(Eo,"; an "),rc=a(Eo,"CODE",{});var B$=i(rc);xg=n(B$,"encoder_hidden_states"),B$.forEach(o),Rg=n(Eo," is then expected as an input to the forward pass."),Eo.forEach(o),Eg=h(yt),So=a(yt,"DIV",{class:!0});var Zr=i(So);v(Us.$$.fragment,Zr),Mg=h(Zr),jt=a(Zr,"P",{});var cd=i(jt);jg=n(cd,"The "),Al=a(cd,"A",{href:!0});var Q$=i(Al);zg=n(Q$,"RoFormerModel"),Q$.forEach(o),Cg=n(cd," forward method, overrides the "),sc=a(cd,"CODE",{});var H$=i(sc);qg=n(H$,"__call__"),H$.forEach(o),Pg=n(cd," special method."),cd.forEach(o),Ag=h(Zr),v(Cn.$$.fragment,Zr),Lg=h(Zr),v(qn.$$.fragment,Zr),Zr.forEach(o),yt.forEach(o),ih=h(r),zt=a(r,"H2",{class:!0});var Yh=i(zt);Pn=a(Yh,"A",{id:!0,class:!0,href:!0});var V$=i(Pn);ac=a(V$,"SPAN",{});var J$=i(ac);v(Ks.$$.fragment,J$),J$.forEach(o),V$.forEach(o),Og=h(Yh),ic=a(Yh,"SPAN",{});var G$=i(ic);Dg=n(G$,"RoFormerForCausalLM"),G$.forEach(o),Yh.forEach(o),lh=h(r),at=a(r,"DIV",{class:!0});var pd=i(at);v(Bs.$$.fragment,pd),Ig=h(pd),Ct=a(pd,"P",{});var md=i(Ct);Ng=n(md,"RoFormer Model with a "),lc=a(md,"CODE",{});var X$=i(lc);Sg=n(X$,"language modeling"),X$.forEach(o),Wg=n(md,` head on top for CLM fine-tuning.
This model is a PyTorch `),Qs=a(md,"A",{href:!0,rel:!0});var Y$=i(Qs);Ug=n(Y$,"torch.nn.Module"),Y$.forEach(o),Kg=n(md,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),md.forEach(o),Bg=h(pd),Wo=a(pd,"DIV",{class:!0});var es=i(Wo);v(Hs.$$.fragment,es),Qg=h(es),qt=a(es,"P",{});var hd=i(qt);Hg=n(hd,"The "),Ll=a(hd,"A",{href:!0});var Z$=i(Ll);Vg=n(Z$,"RoFormerForCausalLM"),Z$.forEach(o),Jg=n(hd," forward method, overrides the "),dc=a(hd,"CODE",{});var e1=i(dc);Gg=n(e1,"__call__"),e1.forEach(o),Xg=n(hd," special method."),hd.forEach(o),Yg=h(es),v(An.$$.fragment,es),Zg=h(es),v(Ln.$$.fragment,es),es.forEach(o),pd.forEach(o),dh=h(r),Pt=a(r,"H2",{class:!0});var Zh=i(Pt);On=a(Zh,"A",{id:!0,class:!0,href:!0});var o1=i(On);cc=a(o1,"SPAN",{});var t1=i(cc);v(Vs.$$.fragment,t1),t1.forEach(o),o1.forEach(o),e_=h(Zh),pc=a(Zh,"SPAN",{});var n1=i(pc);o_=n(n1,"RoFormerForMaskedLM"),n1.forEach(o),Zh.forEach(o),ch=h(r),it=a(r,"DIV",{class:!0});var fd=i(it);v(Js.$$.fragment,fd),t_=h(fd),At=a(fd,"P",{});var ud=i(At);n_=n(ud,"RoFormer Model with a "),mc=a(ud,"CODE",{});var r1=i(mc);r_=n(r1,"language modeling"),r1.forEach(o),s_=n(ud,` head on top.
This model is a PyTorch `),Gs=a(ud,"A",{href:!0,rel:!0});var s1=i(Gs);a_=n(s1,"torch.nn.Module"),s1.forEach(o),i_=n(ud,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ud.forEach(o),l_=h(fd),bo=a(fd,"DIV",{class:!0});var Ft=i(bo);v(Xs.$$.fragment,Ft),d_=h(Ft),Lt=a(Ft,"P",{});var gd=i(Lt);c_=n(gd,"The "),Ol=a(gd,"A",{href:!0});var a1=i(Ol);p_=n(a1,"RoFormerForMaskedLM"),a1.forEach(o),m_=n(gd," forward method, overrides the "),hc=a(gd,"CODE",{});var i1=i(hc);h_=n(i1,"__call__"),i1.forEach(o),f_=n(gd," special method."),gd.forEach(o),u_=h(Ft),v(Dn.$$.fragment,Ft),g_=h(Ft),v(In.$$.fragment,Ft),__=h(Ft),v(Nn.$$.fragment,Ft),Ft.forEach(o),fd.forEach(o),ph=h(r),Ot=a(r,"H2",{class:!0});var ef=i(Ot);Sn=a(ef,"A",{id:!0,class:!0,href:!0});var l1=i(Sn);fc=a(l1,"SPAN",{});var d1=i(fc);v(Ys.$$.fragment,d1),d1.forEach(o),l1.forEach(o),k_=h(ef),uc=a(ef,"SPAN",{});var c1=i(uc);y_=n(c1,"RoFormerForSequenceClassification"),c1.forEach(o),ef.forEach(o),mh=h(r),Lo=a(r,"DIV",{class:!0});var os=i(Lo);v(Zs.$$.fragment,os),F_=h(os),gc=a(os,"P",{});var p1=i(gc);b_=n(p1,`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),p1.forEach(o),v_=h(os),ea=a(os,"P",{});var of=i(ea);w_=n(of,"This model is a PyTorch "),oa=a(of,"A",{href:!0,rel:!0});var m1=i(oa);T_=n(m1,"torch.nn.Module"),m1.forEach(o),$_=n(of,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),of.forEach(o),x_=h(os),io=a(os,"DIV",{class:!0});var Mo=i(io);v(ta.$$.fragment,Mo),R_=h(Mo),Dt=a(Mo,"P",{});var _d=i(Dt);E_=n(_d,"The "),Dl=a(_d,"A",{href:!0});var h1=i(Dl);M_=n(h1,"RoFormerForSequenceClassification"),h1.forEach(o),j_=n(_d," forward method, overrides the "),_c=a(_d,"CODE",{});var f1=i(_c);z_=n(f1,"__call__"),f1.forEach(o),C_=n(_d," special method."),_d.forEach(o),q_=h(Mo),v(Wn.$$.fragment,Mo),P_=h(Mo),v(Un.$$.fragment,Mo),A_=h(Mo),v(Kn.$$.fragment,Mo),L_=h(Mo),v(Bn.$$.fragment,Mo),O_=h(Mo),v(Qn.$$.fragment,Mo),Mo.forEach(o),os.forEach(o),hh=h(r),It=a(r,"H2",{class:!0});var tf=i(It);Hn=a(tf,"A",{id:!0,class:!0,href:!0});var u1=i(Hn);kc=a(u1,"SPAN",{});var g1=i(kc);v(na.$$.fragment,g1),g1.forEach(o),u1.forEach(o),D_=h(tf),yc=a(tf,"SPAN",{});var _1=i(yc);I_=n(_1,"RoFormerForMultipleChoice"),_1.forEach(o),tf.forEach(o),fh=h(r),Oo=a(r,"DIV",{class:!0});var ts=i(Oo);v(ra.$$.fragment,ts),N_=h(ts),Fc=a(ts,"P",{});var k1=i(Fc);S_=n(k1,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),k1.forEach(o),W_=h(ts),sa=a(ts,"P",{});var nf=i(sa);U_=n(nf,"This model is a PyTorch "),aa=a(nf,"A",{href:!0,rel:!0});var y1=i(aa);K_=n(y1,"torch.nn.Module"),y1.forEach(o),B_=n(nf,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nf.forEach(o),Q_=h(ts),Uo=a(ts,"DIV",{class:!0});var ns=i(Uo);v(ia.$$.fragment,ns),H_=h(ns),Nt=a(ns,"P",{});var kd=i(Nt);V_=n(kd,"The "),Il=a(kd,"A",{href:!0});var F1=i(Il);J_=n(F1,"RoFormerForMultipleChoice"),F1.forEach(o),G_=n(kd," forward method, overrides the "),bc=a(kd,"CODE",{});var b1=i(bc);X_=n(b1,"__call__"),b1.forEach(o),Y_=n(kd," special method."),kd.forEach(o),Z_=h(ns),v(Vn.$$.fragment,ns),ek=h(ns),v(Jn.$$.fragment,ns),ns.forEach(o),ts.forEach(o),uh=h(r),St=a(r,"H2",{class:!0});var rf=i(St);Gn=a(rf,"A",{id:!0,class:!0,href:!0});var v1=i(Gn);vc=a(v1,"SPAN",{});var w1=i(vc);v(la.$$.fragment,w1),w1.forEach(o),v1.forEach(o),ok=h(rf),wc=a(rf,"SPAN",{});var T1=i(wc);tk=n(T1,"RoFormerForTokenClassification"),T1.forEach(o),rf.forEach(o),gh=h(r),Do=a(r,"DIV",{class:!0});var rs=i(Do);v(da.$$.fragment,rs),nk=h(rs),Tc=a(rs,"P",{});var $1=i(Tc);rk=n($1,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$1.forEach(o),sk=h(rs),ca=a(rs,"P",{});var sf=i(ca);ak=n(sf,"This model is a PyTorch "),pa=a(sf,"A",{href:!0,rel:!0});var x1=i(pa);ik=n(x1,"torch.nn.Module"),x1.forEach(o),lk=n(sf,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sf.forEach(o),dk=h(rs),vo=a(rs,"DIV",{class:!0});var bt=i(vo);v(ma.$$.fragment,bt),ck=h(bt),Wt=a(bt,"P",{});var yd=i(Wt);pk=n(yd,"The "),Nl=a(yd,"A",{href:!0});var R1=i(Nl);mk=n(R1,"RoFormerForTokenClassification"),R1.forEach(o),hk=n(yd," forward method, overrides the "),$c=a(yd,"CODE",{});var E1=i($c);fk=n(E1,"__call__"),E1.forEach(o),uk=n(yd," special method."),yd.forEach(o),gk=h(bt),v(Xn.$$.fragment,bt),_k=h(bt),v(Yn.$$.fragment,bt),kk=h(bt),v(Zn.$$.fragment,bt),bt.forEach(o),rs.forEach(o),_h=h(r),Ut=a(r,"H2",{class:!0});var af=i(Ut);er=a(af,"A",{id:!0,class:!0,href:!0});var M1=i(er);xc=a(M1,"SPAN",{});var j1=i(xc);v(ha.$$.fragment,j1),j1.forEach(o),M1.forEach(o),yk=h(af),Rc=a(af,"SPAN",{});var z1=i(Rc);Fk=n(z1,"RoFormerForQuestionAnswering"),z1.forEach(o),af.forEach(o),kh=h(r),Io=a(r,"DIV",{class:!0});var ss=i(Io);v(fa.$$.fragment,ss),bk=h(ss),Kt=a(ss,"P",{});var Fd=i(Kt);vk=n(Fd,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ec=a(Fd,"CODE",{});var C1=i(Ec);wk=n(C1,"span start logits"),C1.forEach(o),Tk=n(Fd," and "),Mc=a(Fd,"CODE",{});var q1=i(Mc);$k=n(q1,"span end logits"),q1.forEach(o),xk=n(Fd,")."),Fd.forEach(o),Rk=h(ss),ua=a(ss,"P",{});var lf=i(ua);Ek=n(lf,"This model is a PyTorch "),ga=a(lf,"A",{href:!0,rel:!0});var P1=i(ga);Mk=n(P1,"torch.nn.Module"),P1.forEach(o),jk=n(lf,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lf.forEach(o),zk=h(ss),wo=a(ss,"DIV",{class:!0});var vt=i(wo);v(_a.$$.fragment,vt),Ck=h(vt),Bt=a(vt,"P",{});var bd=i(Bt);qk=n(bd,"The "),Sl=a(bd,"A",{href:!0});var A1=i(Sl);Pk=n(A1,"RoFormerForQuestionAnswering"),A1.forEach(o),Ak=n(bd," forward method, overrides the "),jc=a(bd,"CODE",{});var L1=i(jc);Lk=n(L1,"__call__"),L1.forEach(o),Ok=n(bd," special method."),bd.forEach(o),Dk=h(vt),v(or.$$.fragment,vt),Ik=h(vt),v(tr.$$.fragment,vt),Nk=h(vt),v(nr.$$.fragment,vt),vt.forEach(o),ss.forEach(o),yh=h(r),Qt=a(r,"H2",{class:!0});var df=i(Qt);rr=a(df,"A",{id:!0,class:!0,href:!0});var O1=i(rr);zc=a(O1,"SPAN",{});var D1=i(zc);v(ka.$$.fragment,D1),D1.forEach(o),O1.forEach(o),Sk=h(df),Cc=a(df,"SPAN",{});var I1=i(Cc);Wk=n(I1,"TFRoFormerModel"),I1.forEach(o),df.forEach(o),Fh=h(r),po=a(r,"DIV",{class:!0});var Yo=i(po);v(ya.$$.fragment,Yo),Uk=h(Yo),qc=a(Yo,"P",{});var N1=i(qc);Kk=n(N1,"The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top."),N1.forEach(o),Bk=h(Yo),Fa=a(Yo,"P",{});var cf=i(Fa);Qk=n(cf,"This model inherits from "),Wl=a(cf,"A",{href:!0});var S1=i(Wl);Hk=n(S1,"TFPreTrainedModel"),S1.forEach(o),Vk=n(cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cf.forEach(o),Jk=h(Yo),ba=a(Yo,"P",{});var pf=i(ba);Gk=n(pf,"This model is also a "),va=a(pf,"A",{href:!0,rel:!0});var W1=i(va);Xk=n(W1,"tf.keras.Model"),W1.forEach(o),Yk=n(pf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pf.forEach(o),Zk=h(Yo),v(sr.$$.fragment,Yo),ey=h(Yo),Ko=a(Yo,"DIV",{class:!0});var as=i(Ko);v(wa.$$.fragment,as),oy=h(as),Ht=a(as,"P",{});var vd=i(Ht);ty=n(vd,"The "),Ul=a(vd,"A",{href:!0});var U1=i(Ul);ny=n(U1,"TFRoFormerModel"),U1.forEach(o),ry=n(vd," forward method, overrides the "),Pc=a(vd,"CODE",{});var K1=i(Pc);sy=n(K1,"__call__"),K1.forEach(o),ay=n(vd," special method."),vd.forEach(o),iy=h(as),v(ar.$$.fragment,as),ly=h(as),v(ir.$$.fragment,as),as.forEach(o),Yo.forEach(o),bh=h(r),Vt=a(r,"H2",{class:!0});var mf=i(Vt);lr=a(mf,"A",{id:!0,class:!0,href:!0});var B1=i(lr);Ac=a(B1,"SPAN",{});var Q1=i(Ac);v(Ta.$$.fragment,Q1),Q1.forEach(o),B1.forEach(o),dy=h(mf),Lc=a(mf,"SPAN",{});var H1=i(Lc);cy=n(H1,"TFRoFormerForMaskedLM"),H1.forEach(o),mf.forEach(o),vh=h(r),mo=a(r,"DIV",{class:!0});var Zo=i(mo);v($a.$$.fragment,Zo),py=h(Zo),xa=a(Zo,"P",{});var hf=i(xa);my=n(hf,"RoFormer Model with a "),Oc=a(hf,"CODE",{});var V1=i(Oc);hy=n(V1,"language modeling"),V1.forEach(o),fy=n(hf," head on top."),hf.forEach(o),uy=h(Zo),Ra=a(Zo,"P",{});var ff=i(Ra);gy=n(ff,"This model inherits from "),Kl=a(ff,"A",{href:!0});var J1=i(Kl);_y=n(J1,"TFPreTrainedModel"),J1.forEach(o),ky=n(ff,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ff.forEach(o),yy=h(Zo),Ea=a(Zo,"P",{});var uf=i(Ea);Fy=n(uf,"This model is also a "),Ma=a(uf,"A",{href:!0,rel:!0});var G1=i(Ma);by=n(G1,"tf.keras.Model"),G1.forEach(o),vy=n(uf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uf.forEach(o),wy=h(Zo),v(dr.$$.fragment,Zo),Ty=h(Zo),To=a(Zo,"DIV",{class:!0});var wt=i(To);v(ja.$$.fragment,wt),$y=h(wt),Jt=a(wt,"P",{});var wd=i(Jt);xy=n(wd,"The "),Bl=a(wd,"A",{href:!0});var X1=i(Bl);Ry=n(X1,"TFRoFormerForMaskedLM"),X1.forEach(o),Ey=n(wd," forward method, overrides the "),Dc=a(wd,"CODE",{});var Y1=i(Dc);My=n(Y1,"__call__"),Y1.forEach(o),jy=n(wd," special method."),wd.forEach(o),zy=h(wt),v(cr.$$.fragment,wt),Cy=h(wt),v(pr.$$.fragment,wt),qy=h(wt),v(mr.$$.fragment,wt),wt.forEach(o),Zo.forEach(o),wh=h(r),Gt=a(r,"H2",{class:!0});var gf=i(Gt);hr=a(gf,"A",{id:!0,class:!0,href:!0});var Z1=i(hr);Ic=a(Z1,"SPAN",{});var e2=i(Ic);v(za.$$.fragment,e2),e2.forEach(o),Z1.forEach(o),Py=h(gf),Nc=a(gf,"SPAN",{});var o2=i(Nc);Ay=n(o2,"TFRoFormerForCausalLM"),o2.forEach(o),gf.forEach(o),Th=h(r),ho=a(r,"DIV",{class:!0});var et=i(ho);v(Ca.$$.fragment,et),Ly=h(et),qa=a(et,"P",{});var _f=i(qa);Oy=n(_f,"RoFormer Model with a "),Sc=a(_f,"CODE",{});var t2=i(Sc);Dy=n(t2,"language modeling"),t2.forEach(o),Iy=n(_f," head on top for CLM fine-tuning."),_f.forEach(o),Ny=h(et),Pa=a(et,"P",{});var kf=i(Pa);Sy=n(kf,"This model inherits from "),Ql=a(kf,"A",{href:!0});var n2=i(Ql);Wy=n(n2,"TFPreTrainedModel"),n2.forEach(o),Uy=n(kf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kf.forEach(o),Ky=h(et),Aa=a(et,"P",{});var yf=i(Aa);By=n(yf,"This model is also a "),La=a(yf,"A",{href:!0,rel:!0});var r2=i(La);Qy=n(r2,"tf.keras.Model"),r2.forEach(o),Hy=n(yf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yf.forEach(o),Vy=h(et),v(fr.$$.fragment,et),Jy=h(et),kt=a(et,"DIV",{class:!0});var Td=i(kt);v(Oa.$$.fragment,Td),Gy=h(Td),yo=a(Td,"P",{});var ot=i(yo);Xy=n(ot,"labels ("),Wc=a(ot,"CODE",{});var s2=i(Wc);Yy=n(s2,"tf.Tensor"),s2.forEach(o),Zy=n(ot," or "),Uc=a(ot,"CODE",{});var a2=i(Uc);eF=n(a2,"np.ndarray"),a2.forEach(o),oF=n(ot," of shape "),Kc=a(ot,"CODE",{});var i2=i(Kc);tF=n(i2,"(batch_size, sequence_length)"),i2.forEach(o),nF=n(ot,", "),Bc=a(ot,"EM",{});var l2=i(Bc);rF=n(l2,"optional"),l2.forEach(o),sF=n(ot,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Qc=a(ot,"CODE",{});var d2=i(Qc);aF=n(d2,"[0, ..., config.vocab_size - 1]"),d2.forEach(o),iF=n(ot,"."),ot.forEach(o),lF=h(Td),v(ur.$$.fragment,Td),Td.forEach(o),et.forEach(o),$h=h(r),Xt=a(r,"H2",{class:!0});var Ff=i(Xt);gr=a(Ff,"A",{id:!0,class:!0,href:!0});var c2=i(gr);Hc=a(c2,"SPAN",{});var p2=i(Hc);v(Da.$$.fragment,p2),p2.forEach(o),c2.forEach(o),dF=h(Ff),Vc=a(Ff,"SPAN",{});var m2=i(Vc);cF=n(m2,"TFRoFormerForSequenceClassification"),m2.forEach(o),Ff.forEach(o),xh=h(r),fo=a(r,"DIV",{class:!0});var tt=i(fo);v(Ia.$$.fragment,tt),pF=h(tt),Jc=a(tt,"P",{});var h2=i(Jc);mF=n(h2,"RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),h2.forEach(o),hF=h(tt),Na=a(tt,"P",{});var bf=i(Na);fF=n(bf,"This model inherits from "),Hl=a(bf,"A",{href:!0});var f2=i(Hl);uF=n(f2,"TFPreTrainedModel"),f2.forEach(o),gF=n(bf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bf.forEach(o),_F=h(tt),Sa=a(tt,"P",{});var vf=i(Sa);kF=n(vf,"This model is also a "),Wa=a(vf,"A",{href:!0,rel:!0});var u2=i(Wa);yF=n(u2,"tf.keras.Model"),u2.forEach(o),FF=n(vf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vf.forEach(o),bF=h(tt),v(_r.$$.fragment,tt),vF=h(tt),$o=a(tt,"DIV",{class:!0});var Tt=i($o);v(Ua.$$.fragment,Tt),wF=h(Tt),Yt=a(Tt,"P",{});var $d=i(Yt);TF=n($d,"The "),Vl=a($d,"A",{href:!0});var g2=i(Vl);$F=n(g2,"TFRoFormerForSequenceClassification"),g2.forEach(o),xF=n($d," forward method, overrides the "),Gc=a($d,"CODE",{});var _2=i(Gc);RF=n(_2,"__call__"),_2.forEach(o),EF=n($d," special method."),$d.forEach(o),MF=h(Tt),v(kr.$$.fragment,Tt),jF=h(Tt),v(yr.$$.fragment,Tt),zF=h(Tt),v(Fr.$$.fragment,Tt),Tt.forEach(o),tt.forEach(o),Rh=h(r),Zt=a(r,"H2",{class:!0});var wf=i(Zt);br=a(wf,"A",{id:!0,class:!0,href:!0});var k2=i(br);Xc=a(k2,"SPAN",{});var y2=i(Xc);v(Ka.$$.fragment,y2),y2.forEach(o),k2.forEach(o),CF=h(wf),Yc=a(wf,"SPAN",{});var F2=i(Yc);qF=n(F2,"TFRoFormerForMultipleChoice"),F2.forEach(o),wf.forEach(o),Eh=h(r),uo=a(r,"DIV",{class:!0});var nt=i(uo);v(Ba.$$.fragment,nt),PF=h(nt),Zc=a(nt,"P",{});var b2=i(Zc);AF=n(b2,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),b2.forEach(o),LF=h(nt),Qa=a(nt,"P",{});var Tf=i(Qa);OF=n(Tf,"This model inherits from "),Jl=a(Tf,"A",{href:!0});var v2=i(Jl);DF=n(v2,"TFPreTrainedModel"),v2.forEach(o),IF=n(Tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf.forEach(o),NF=h(nt),Ha=a(nt,"P",{});var $f=i(Ha);SF=n($f,"This model is also a "),Va=a($f,"A",{href:!0,rel:!0});var w2=i(Va);WF=n(w2,"tf.keras.Model"),w2.forEach(o),UF=n($f,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$f.forEach(o),KF=h(nt),v(vr.$$.fragment,nt),BF=h(nt),Bo=a(nt,"DIV",{class:!0});var is=i(Bo);v(Ja.$$.fragment,is),QF=h(is),en=a(is,"P",{});var xd=i(en);HF=n(xd,"The "),Gl=a(xd,"A",{href:!0});var T2=i(Gl);VF=n(T2,"TFRoFormerForMultipleChoice"),T2.forEach(o),JF=n(xd," forward method, overrides the "),ep=a(xd,"CODE",{});var $2=i(ep);GF=n($2,"__call__"),$2.forEach(o),XF=n(xd," special method."),xd.forEach(o),YF=h(is),v(wr.$$.fragment,is),ZF=h(is),v(Tr.$$.fragment,is),is.forEach(o),nt.forEach(o),Mh=h(r),on=a(r,"H2",{class:!0});var xf=i(on);$r=a(xf,"A",{id:!0,class:!0,href:!0});var x2=i($r);op=a(x2,"SPAN",{});var R2=i(op);v(Ga.$$.fragment,R2),R2.forEach(o),x2.forEach(o),eb=h(xf),tp=a(xf,"SPAN",{});var E2=i(tp);ob=n(E2,"TFRoFormerForTokenClassification"),E2.forEach(o),xf.forEach(o),jh=h(r),go=a(r,"DIV",{class:!0});var rt=i(go);v(Xa.$$.fragment,rt),tb=h(rt),np=a(rt,"P",{});var M2=i(np);nb=n(M2,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),M2.forEach(o),rb=h(rt),Ya=a(rt,"P",{});var Rf=i(Ya);sb=n(Rf,"This model inherits from "),Xl=a(Rf,"A",{href:!0});var j2=i(Xl);ab=n(j2,"TFPreTrainedModel"),j2.forEach(o),ib=n(Rf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rf.forEach(o),lb=h(rt),Za=a(rt,"P",{});var Ef=i(Za);db=n(Ef,"This model is also a "),ei=a(Ef,"A",{href:!0,rel:!0});var z2=i(ei);cb=n(z2,"tf.keras.Model"),z2.forEach(o),pb=n(Ef,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ef.forEach(o),mb=h(rt),v(xr.$$.fragment,rt),hb=h(rt),xo=a(rt,"DIV",{class:!0});var $t=i(xo);v(oi.$$.fragment,$t),fb=h($t),tn=a($t,"P",{});var Rd=i(tn);ub=n(Rd,"The "),Yl=a(Rd,"A",{href:!0});var C2=i(Yl);gb=n(C2,"TFRoFormerForTokenClassification"),C2.forEach(o),_b=n(Rd," forward method, overrides the "),rp=a(Rd,"CODE",{});var q2=i(rp);kb=n(q2,"__call__"),q2.forEach(o),yb=n(Rd," special method."),Rd.forEach(o),Fb=h($t),v(Rr.$$.fragment,$t),bb=h($t),v(Er.$$.fragment,$t),vb=h($t),v(Mr.$$.fragment,$t),$t.forEach(o),rt.forEach(o),zh=h(r),nn=a(r,"H2",{class:!0});var Mf=i(nn);jr=a(Mf,"A",{id:!0,class:!0,href:!0});var P2=i(jr);sp=a(P2,"SPAN",{});var A2=i(sp);v(ti.$$.fragment,A2),A2.forEach(o),P2.forEach(o),wb=h(Mf),ap=a(Mf,"SPAN",{});var L2=i(ap);Tb=n(L2,"TFRoFormerForQuestionAnswering"),L2.forEach(o),Mf.forEach(o),Ch=h(r),_o=a(r,"DIV",{class:!0});var st=i(_o);v(ni.$$.fragment,st),$b=h(st),rn=a(st,"P",{});var Ed=i(rn);xb=n(Ed,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ip=a(Ed,"CODE",{});var O2=i(ip);Rb=n(O2,"span start logits"),O2.forEach(o),Eb=n(Ed," and "),lp=a(Ed,"CODE",{});var D2=i(lp);Mb=n(D2,"span end logits"),D2.forEach(o),jb=n(Ed,")."),Ed.forEach(o),zb=h(st),ri=a(st,"P",{});var jf=i(ri);Cb=n(jf,"This model inherits from "),Zl=a(jf,"A",{href:!0});var I2=i(Zl);qb=n(I2,"TFPreTrainedModel"),I2.forEach(o),Pb=n(jf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jf.forEach(o),Ab=h(st),si=a(st,"P",{});var zf=i(si);Lb=n(zf,"This model is also a "),ai=a(zf,"A",{href:!0,rel:!0});var N2=i(ai);Ob=n(N2,"tf.keras.Model"),N2.forEach(o),Db=n(zf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zf.forEach(o),Ib=h(st),v(zr.$$.fragment,st),Nb=h(st),Ro=a(st,"DIV",{class:!0});var xt=i(Ro);v(ii.$$.fragment,xt),Sb=h(xt),sn=a(xt,"P",{});var Md=i(sn);Wb=n(Md,"The "),ed=a(Md,"A",{href:!0});var S2=i(ed);Ub=n(S2,"TFRoFormerForQuestionAnswering"),S2.forEach(o),Kb=n(Md," forward method, overrides the "),dp=a(Md,"CODE",{});var W2=i(dp);Bb=n(W2,"__call__"),W2.forEach(o),Qb=n(Md," special method."),Md.forEach(o),Hb=h(xt),v(Cr.$$.fragment,xt),Vb=h(xt),v(qr.$$.fragment,xt),Jb=h(xt),v(Pr.$$.fragment,xt),xt.forEach(o),st.forEach(o),qh=h(r),an=a(r,"H2",{class:!0});var Cf=i(an);Ar=a(Cf,"A",{id:!0,class:!0,href:!0});var U2=i(Ar);cp=a(U2,"SPAN",{});var K2=i(cp);v(li.$$.fragment,K2),K2.forEach(o),U2.forEach(o),Gb=h(Cf),pp=a(Cf,"SPAN",{});var B2=i(pp);Xb=n(B2,"FlaxRoFormerModel"),B2.forEach(o),Cf.forEach(o),Ph=h(r),eo=a(r,"DIV",{class:!0});var jo=i(eo);v(di.$$.fragment,jo),Yb=h(jo),mp=a(jo,"P",{});var Q2=i(mp);Zb=n(Q2,"The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top."),Q2.forEach(o),ev=h(jo),ci=a(jo,"P",{});var qf=i(ci);ov=n(qf,"This model inherits from "),od=a(qf,"A",{href:!0});var H2=i(od);tv=n(H2,"FlaxPreTrainedModel"),H2.forEach(o),nv=n(qf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),qf.forEach(o),rv=h(jo),pi=a(jo,"P",{});var Pf=i(pi);sv=n(Pf,"This model is also a Flax Linen "),mi=a(Pf,"A",{href:!0,rel:!0});var V2=i(mi);av=n(V2,"flax.linen.Module"),V2.forEach(o),iv=n(Pf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Pf.forEach(o),lv=h(jo),hp=a(jo,"P",{});var J2=i(hp);dv=n(J2,"Finally, this model supports inherent JAX features such as:"),J2.forEach(o),cv=h(jo),lt=a(jo,"UL",{});var ls=i(lt);fp=a(ls,"LI",{});var G2=i(fp);hi=a(G2,"A",{href:!0,rel:!0});var X2=i(hi);pv=n(X2,"Just-In-Time (JIT) compilation"),X2.forEach(o),G2.forEach(o),mv=h(ls),up=a(ls,"LI",{});var Y2=i(up);fi=a(Y2,"A",{href:!0,rel:!0});var Z2=i(fi);hv=n(Z2,"Automatic Differentiation"),Z2.forEach(o),Y2.forEach(o),fv=h(ls),gp=a(ls,"LI",{});var e0=i(gp);ui=a(e0,"A",{href:!0,rel:!0});var o0=i(ui);uv=n(o0,"Vectorization"),o0.forEach(o),e0.forEach(o),gv=h(ls),_p=a(ls,"LI",{});var t0=i(_p);gi=a(t0,"A",{href:!0,rel:!0});var n0=i(gi);_v=n(n0,"Parallelization"),n0.forEach(o),t0.forEach(o),ls.forEach(o),kv=h(jo),Qo=a(jo,"DIV",{class:!0});var ds=i(Qo);v(_i.$$.fragment,ds),yv=h(ds),ln=a(ds,"P",{});var jd=i(ln);Fv=n(jd,"The "),kp=a(jd,"CODE",{});var r0=i(kp);bv=n(r0,"FlaxRoFormerPreTrainedModel"),r0.forEach(o),vv=n(jd," forward method, overrides the "),yp=a(jd,"CODE",{});var s0=i(yp);wv=n(s0,"__call__"),s0.forEach(o),Tv=n(jd," special method."),jd.forEach(o),$v=h(ds),v(Lr.$$.fragment,ds),xv=h(ds),v(Or.$$.fragment,ds),ds.forEach(o),jo.forEach(o),Ah=h(r),dn=a(r,"H2",{class:!0});var Af=i(dn);Dr=a(Af,"A",{id:!0,class:!0,href:!0});var a0=i(Dr);Fp=a(a0,"SPAN",{});var i0=i(Fp);v(ki.$$.fragment,i0),i0.forEach(o),a0.forEach(o),Rv=h(Af),bp=a(Af,"SPAN",{});var l0=i(bp);Ev=n(l0,"FlaxRoFormerForMaskedLM"),l0.forEach(o),Af.forEach(o),Lh=h(r),oo=a(r,"DIV",{class:!0});var zo=i(oo);v(yi.$$.fragment,zo),Mv=h(zo),Fi=a(zo,"P",{});var Lf=i(Fi);jv=n(Lf,"RoFormer Model with a "),vp=a(Lf,"CODE",{});var d0=i(vp);zv=n(d0,"language modeling"),d0.forEach(o),Cv=n(Lf," head on top."),Lf.forEach(o),qv=h(zo),bi=a(zo,"P",{});var Of=i(bi);Pv=n(Of,"This model inherits from "),td=a(Of,"A",{href:!0});var c0=i(td);Av=n(c0,"FlaxPreTrainedModel"),c0.forEach(o),Lv=n(Of,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Of.forEach(o),Ov=h(zo),vi=a(zo,"P",{});var Df=i(vi);Dv=n(Df,"This model is also a Flax Linen "),wi=a(Df,"A",{href:!0,rel:!0});var p0=i(wi);Iv=n(p0,"flax.linen.Module"),p0.forEach(o),Nv=n(Df,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Df.forEach(o),Sv=h(zo),wp=a(zo,"P",{});var m0=i(wp);Wv=n(m0,"Finally, this model supports inherent JAX features such as:"),m0.forEach(o),Uv=h(zo),dt=a(zo,"UL",{});var cs=i(dt);Tp=a(cs,"LI",{});var h0=i(Tp);Ti=a(h0,"A",{href:!0,rel:!0});var f0=i(Ti);Kv=n(f0,"Just-In-Time (JIT) compilation"),f0.forEach(o),h0.forEach(o),Bv=h(cs),$p=a(cs,"LI",{});var u0=i($p);$i=a(u0,"A",{href:!0,rel:!0});var g0=i($i);Qv=n(g0,"Automatic Differentiation"),g0.forEach(o),u0.forEach(o),Hv=h(cs),xp=a(cs,"LI",{});var _0=i(xp);xi=a(_0,"A",{href:!0,rel:!0});var k0=i(xi);Vv=n(k0,"Vectorization"),k0.forEach(o),_0.forEach(o),Jv=h(cs),Rp=a(cs,"LI",{});var y0=i(Rp);Ri=a(y0,"A",{href:!0,rel:!0});var F0=i(Ri);Gv=n(F0,"Parallelization"),F0.forEach(o),y0.forEach(o),cs.forEach(o),Xv=h(zo),Ho=a(zo,"DIV",{class:!0});var ps=i(Ho);v(Ei.$$.fragment,ps),Yv=h(ps),cn=a(ps,"P",{});var zd=i(cn);Zv=n(zd,"The "),Ep=a(zd,"CODE",{});var b0=i(Ep);ew=n(b0,"FlaxRoFormerPreTrainedModel"),b0.forEach(o),ow=n(zd," forward method, overrides the "),Mp=a(zd,"CODE",{});var v0=i(Mp);tw=n(v0,"__call__"),v0.forEach(o),nw=n(zd," special method."),zd.forEach(o),rw=h(ps),v(Ir.$$.fragment,ps),sw=h(ps),v(Nr.$$.fragment,ps),ps.forEach(o),zo.forEach(o),Oh=h(r),pn=a(r,"H2",{class:!0});var If=i(pn);Sr=a(If,"A",{id:!0,class:!0,href:!0});var w0=i(Sr);jp=a(w0,"SPAN",{});var T0=i(jp);v(Mi.$$.fragment,T0),T0.forEach(o),w0.forEach(o),aw=h(If),zp=a(If,"SPAN",{});var $0=i(zp);iw=n($0,"FlaxRoFormerForSequenceClassification"),$0.forEach(o),If.forEach(o),Dh=h(r),to=a(r,"DIV",{class:!0});var Co=i(to);v(ji.$$.fragment,Co),lw=h(Co),Cp=a(Co,"P",{});var x0=i(Cp);dw=n(x0,`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),x0.forEach(o),cw=h(Co),zi=a(Co,"P",{});var Nf=i(zi);pw=n(Nf,"This model inherits from "),nd=a(Nf,"A",{href:!0});var R0=i(nd);mw=n(R0,"FlaxPreTrainedModel"),R0.forEach(o),hw=n(Nf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Nf.forEach(o),fw=h(Co),Ci=a(Co,"P",{});var Sf=i(Ci);uw=n(Sf,"This model is also a Flax Linen "),qi=a(Sf,"A",{href:!0,rel:!0});var E0=i(qi);gw=n(E0,"flax.linen.Module"),E0.forEach(o),_w=n(Sf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Sf.forEach(o),kw=h(Co),qp=a(Co,"P",{});var M0=i(qp);yw=n(M0,"Finally, this model supports inherent JAX features such as:"),M0.forEach(o),Fw=h(Co),ct=a(Co,"UL",{});var ms=i(ct);Pp=a(ms,"LI",{});var j0=i(Pp);Pi=a(j0,"A",{href:!0,rel:!0});var z0=i(Pi);bw=n(z0,"Just-In-Time (JIT) compilation"),z0.forEach(o),j0.forEach(o),vw=h(ms),Ap=a(ms,"LI",{});var C0=i(Ap);Ai=a(C0,"A",{href:!0,rel:!0});var q0=i(Ai);ww=n(q0,"Automatic Differentiation"),q0.forEach(o),C0.forEach(o),Tw=h(ms),Lp=a(ms,"LI",{});var P0=i(Lp);Li=a(P0,"A",{href:!0,rel:!0});var A0=i(Li);$w=n(A0,"Vectorization"),A0.forEach(o),P0.forEach(o),xw=h(ms),Op=a(ms,"LI",{});var L0=i(Op);Oi=a(L0,"A",{href:!0,rel:!0});var O0=i(Oi);Rw=n(O0,"Parallelization"),O0.forEach(o),L0.forEach(o),ms.forEach(o),Ew=h(Co),Vo=a(Co,"DIV",{class:!0});var hs=i(Vo);v(Di.$$.fragment,hs),Mw=h(hs),mn=a(hs,"P",{});var Cd=i(mn);jw=n(Cd,"The "),Dp=a(Cd,"CODE",{});var D0=i(Dp);zw=n(D0,"FlaxRoFormerPreTrainedModel"),D0.forEach(o),Cw=n(Cd," forward method, overrides the "),Ip=a(Cd,"CODE",{});var I0=i(Ip);qw=n(I0,"__call__"),I0.forEach(o),Pw=n(Cd," special method."),Cd.forEach(o),Aw=h(hs),v(Wr.$$.fragment,hs),Lw=h(hs),v(Ur.$$.fragment,hs),hs.forEach(o),Co.forEach(o),Ih=h(r),hn=a(r,"H2",{class:!0});var Wf=i(hn);Kr=a(Wf,"A",{id:!0,class:!0,href:!0});var N0=i(Kr);Np=a(N0,"SPAN",{});var S0=i(Np);v(Ii.$$.fragment,S0),S0.forEach(o),N0.forEach(o),Ow=h(Wf),Sp=a(Wf,"SPAN",{});var W0=i(Sp);Dw=n(W0,"FlaxRoFormerForMultipleChoice"),W0.forEach(o),Wf.forEach(o),Nh=h(r),no=a(r,"DIV",{class:!0});var qo=i(no);v(Ni.$$.fragment,qo),Iw=h(qo),Wp=a(qo,"P",{});var U0=i(Wp);Nw=n(U0,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),U0.forEach(o),Sw=h(qo),Si=a(qo,"P",{});var Uf=i(Si);Ww=n(Uf,"This model inherits from "),rd=a(Uf,"A",{href:!0});var K0=i(rd);Uw=n(K0,"FlaxPreTrainedModel"),K0.forEach(o),Kw=n(Uf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uf.forEach(o),Bw=h(qo),Wi=a(qo,"P",{});var Kf=i(Wi);Qw=n(Kf,"This model is also a Flax Linen "),Ui=a(Kf,"A",{href:!0,rel:!0});var B0=i(Ui);Hw=n(B0,"flax.linen.Module"),B0.forEach(o),Vw=n(Kf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Kf.forEach(o),Jw=h(qo),Up=a(qo,"P",{});var Q0=i(Up);Gw=n(Q0,"Finally, this model supports inherent JAX features such as:"),Q0.forEach(o),Xw=h(qo),pt=a(qo,"UL",{});var fs=i(pt);Kp=a(fs,"LI",{});var H0=i(Kp);Ki=a(H0,"A",{href:!0,rel:!0});var V0=i(Ki);Yw=n(V0,"Just-In-Time (JIT) compilation"),V0.forEach(o),H0.forEach(o),Zw=h(fs),Bp=a(fs,"LI",{});var J0=i(Bp);Bi=a(J0,"A",{href:!0,rel:!0});var G0=i(Bi);eT=n(G0,"Automatic Differentiation"),G0.forEach(o),J0.forEach(o),oT=h(fs),Qp=a(fs,"LI",{});var X0=i(Qp);Qi=a(X0,"A",{href:!0,rel:!0});var Y0=i(Qi);tT=n(Y0,"Vectorization"),Y0.forEach(o),X0.forEach(o),nT=h(fs),Hp=a(fs,"LI",{});var Z0=i(Hp);Hi=a(Z0,"A",{href:!0,rel:!0});var ex=i(Hi);rT=n(ex,"Parallelization"),ex.forEach(o),Z0.forEach(o),fs.forEach(o),sT=h(qo),Jo=a(qo,"DIV",{class:!0});var us=i(Jo);v(Vi.$$.fragment,us),aT=h(us),fn=a(us,"P",{});var qd=i(fn);iT=n(qd,"The "),Vp=a(qd,"CODE",{});var ox=i(Vp);lT=n(ox,"FlaxRoFormerPreTrainedModel"),ox.forEach(o),dT=n(qd," forward method, overrides the "),Jp=a(qd,"CODE",{});var tx=i(Jp);cT=n(tx,"__call__"),tx.forEach(o),pT=n(qd," special method."),qd.forEach(o),mT=h(us),v(Br.$$.fragment,us),hT=h(us),v(Qr.$$.fragment,us),us.forEach(o),qo.forEach(o),Sh=h(r),un=a(r,"H2",{class:!0});var Bf=i(un);Hr=a(Bf,"A",{id:!0,class:!0,href:!0});var nx=i(Hr);Gp=a(nx,"SPAN",{});var rx=i(Gp);v(Ji.$$.fragment,rx),rx.forEach(o),nx.forEach(o),fT=h(Bf),Xp=a(Bf,"SPAN",{});var sx=i(Xp);uT=n(sx,"FlaxRoFormerForTokenClassification"),sx.forEach(o),Bf.forEach(o),Wh=h(r),ro=a(r,"DIV",{class:!0});var Po=i(ro);v(Gi.$$.fragment,Po),gT=h(Po),Yp=a(Po,"P",{});var ax=i(Yp);_T=n(ax,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ax.forEach(o),kT=h(Po),Xi=a(Po,"P",{});var Qf=i(Xi);yT=n(Qf,"This model inherits from "),sd=a(Qf,"A",{href:!0});var ix=i(sd);FT=n(ix,"FlaxPreTrainedModel"),ix.forEach(o),bT=n(Qf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qf.forEach(o),vT=h(Po),Yi=a(Po,"P",{});var Hf=i(Yi);wT=n(Hf,"This model is also a Flax Linen "),Zi=a(Hf,"A",{href:!0,rel:!0});var lx=i(Zi);TT=n(lx,"flax.linen.Module"),lx.forEach(o),$T=n(Hf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Hf.forEach(o),xT=h(Po),Zp=a(Po,"P",{});var dx=i(Zp);RT=n(dx,"Finally, this model supports inherent JAX features such as:"),dx.forEach(o),ET=h(Po),mt=a(Po,"UL",{});var gs=i(mt);em=a(gs,"LI",{});var cx=i(em);el=a(cx,"A",{href:!0,rel:!0});var px=i(el);MT=n(px,"Just-In-Time (JIT) compilation"),px.forEach(o),cx.forEach(o),jT=h(gs),om=a(gs,"LI",{});var mx=i(om);ol=a(mx,"A",{href:!0,rel:!0});var hx=i(ol);zT=n(hx,"Automatic Differentiation"),hx.forEach(o),mx.forEach(o),CT=h(gs),tm=a(gs,"LI",{});var fx=i(tm);tl=a(fx,"A",{href:!0,rel:!0});var ux=i(tl);qT=n(ux,"Vectorization"),ux.forEach(o),fx.forEach(o),PT=h(gs),nm=a(gs,"LI",{});var gx=i(nm);nl=a(gx,"A",{href:!0,rel:!0});var _x=i(nl);AT=n(_x,"Parallelization"),_x.forEach(o),gx.forEach(o),gs.forEach(o),LT=h(Po),Go=a(Po,"DIV",{class:!0});var _s=i(Go);v(rl.$$.fragment,_s),OT=h(_s),gn=a(_s,"P",{});var Pd=i(gn);DT=n(Pd,"The "),rm=a(Pd,"CODE",{});var kx=i(rm);IT=n(kx,"FlaxRoFormerPreTrainedModel"),kx.forEach(o),NT=n(Pd," forward method, overrides the "),sm=a(Pd,"CODE",{});var yx=i(sm);ST=n(yx,"__call__"),yx.forEach(o),WT=n(Pd," special method."),Pd.forEach(o),UT=h(_s),v(Vr.$$.fragment,_s),KT=h(_s),v(Jr.$$.fragment,_s),_s.forEach(o),Po.forEach(o),Uh=h(r),_n=a(r,"H2",{class:!0});var Vf=i(_n);Gr=a(Vf,"A",{id:!0,class:!0,href:!0});var Fx=i(Gr);am=a(Fx,"SPAN",{});var bx=i(am);v(sl.$$.fragment,bx),bx.forEach(o),Fx.forEach(o),BT=h(Vf),im=a(Vf,"SPAN",{});var vx=i(im);QT=n(vx,"FlaxRoFormerForQuestionAnswering"),vx.forEach(o),Vf.forEach(o),Kh=h(r),so=a(r,"DIV",{class:!0});var Ao=i(so);v(al.$$.fragment,Ao),HT=h(Ao),kn=a(Ao,"P",{});var Ad=i(kn);VT=n(Ad,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),lm=a(Ad,"CODE",{});var wx=i(lm);JT=n(wx,"span start logits"),wx.forEach(o),GT=n(Ad," and "),dm=a(Ad,"CODE",{});var Tx=i(dm);XT=n(Tx,"span end logits"),Tx.forEach(o),YT=n(Ad,")."),Ad.forEach(o),ZT=h(Ao),il=a(Ao,"P",{});var Jf=i(il);e$=n(Jf,"This model inherits from "),ad=a(Jf,"A",{href:!0});var $x=i(ad);o$=n($x,"FlaxPreTrainedModel"),$x.forEach(o),t$=n(Jf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jf.forEach(o),n$=h(Ao),ll=a(Ao,"P",{});var Gf=i(ll);r$=n(Gf,"This model is also a Flax Linen "),dl=a(Gf,"A",{href:!0,rel:!0});var xx=i(dl);s$=n(xx,"flax.linen.Module"),xx.forEach(o),a$=n(Gf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gf.forEach(o),i$=h(Ao),cm=a(Ao,"P",{});var Rx=i(cm);l$=n(Rx,"Finally, this model supports inherent JAX features such as:"),Rx.forEach(o),d$=h(Ao),ht=a(Ao,"UL",{});var ks=i(ht);pm=a(ks,"LI",{});var Ex=i(pm);cl=a(Ex,"A",{href:!0,rel:!0});var Mx=i(cl);c$=n(Mx,"Just-In-Time (JIT) compilation"),Mx.forEach(o),Ex.forEach(o),p$=h(ks),mm=a(ks,"LI",{});var jx=i(mm);pl=a(jx,"A",{href:!0,rel:!0});var zx=i(pl);m$=n(zx,"Automatic Differentiation"),zx.forEach(o),jx.forEach(o),h$=h(ks),hm=a(ks,"LI",{});var Cx=i(hm);ml=a(Cx,"A",{href:!0,rel:!0});var qx=i(ml);f$=n(qx,"Vectorization"),qx.forEach(o),Cx.forEach(o),u$=h(ks),fm=a(ks,"LI",{});var Px=i(fm);hl=a(Px,"A",{href:!0,rel:!0});var Ax=i(hl);g$=n(Ax,"Parallelization"),Ax.forEach(o),Px.forEach(o),ks.forEach(o),_$=h(Ao),Xo=a(Ao,"DIV",{class:!0});var ys=i(Xo);v(fl.$$.fragment,ys),k$=h(ys),yn=a(ys,"P",{});var Ld=i(yn);y$=n(Ld,"The "),um=a(Ld,"CODE",{});var Lx=i(um);F$=n(Lx,"FlaxRoFormerPreTrainedModel"),Lx.forEach(o),b$=n(Ld," forward method, overrides the "),gm=a(Ld,"CODE",{});var Ox=i(gm);v$=n(Ox,"__call__"),Ox.forEach(o),w$=n(Ld," special method."),Ld.forEach(o),T$=h(ys),v(Xr.$$.fragment,ys),$$=h(ys),v(Yr.$$.fragment,ys),ys.forEach(o),Ao.forEach(o),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(GR)),u(f,"id","roformer"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#roformer"),u(c,"class","relative group"),u(ae,"id","overview"),u(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ae,"href","#overview"),u(I,"class","relative group"),u(ie,"href","https://arxiv.org/pdf/2104.09864v1.pdf"),u(ie,"rel","nofollow"),u(q,"href","https://huggingface.co/junnyu"),u(q,"rel","nofollow"),u(le,"href","https://github.com/ZhuiyiTechnology/roformer"),u(le,"rel","nofollow"),u(O,"id","transformers.RoFormerConfig"),u(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(O,"href","#transformers.RoFormerConfig"),u(se,"class","relative group"),u(Se,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerModel"),u(Ne,"href","https://huggingface.co/junnyu/roformer_chinese_base"),u(Ne,"rel","nofollow"),u(We,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ue,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Z,"id","transformers.RoFormerTokenizer"),u(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Z,"href","#transformers.RoFormerTokenizer"),u(De,"class","relative group"),u(ws,"href","https://pypi.org/project/rjieba/"),u(ws,"rel","nofollow"),u(xl,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ml,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"id","transformers.RoFormerTokenizerFast"),u(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(En,"href","#transformers.RoFormerTokenizerFast"),u(Et,"class","relative group"),u(jl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerTokenizerFast"),u(zl,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),u(Cl,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zn,"id","transformers.RoFormerModel"),u(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zn,"href","#transformers.RoFormerModel"),u(Mt,"class","relative group"),u(Ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ns,"rel","nofollow"),u(Ws,"href","https://arxiv.org/abs/1706.03762"),u(Ws,"rel","nofollow"),u(Al,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerModel"),u(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"id","transformers.RoFormerForCausalLM"),u(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pn,"href","#transformers.RoFormerForCausalLM"),u(zt,"class","relative group"),u(Qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Qs,"rel","nofollow"),u(Ll,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForCausalLM"),u(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(On,"id","transformers.RoFormerForMaskedLM"),u(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(On,"href","#transformers.RoFormerForMaskedLM"),u(Pt,"class","relative group"),u(Gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Gs,"rel","nofollow"),u(Ol,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForMaskedLM"),u(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Sn,"id","transformers.RoFormerForSequenceClassification"),u(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Sn,"href","#transformers.RoFormerForSequenceClassification"),u(Ot,"class","relative group"),u(oa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(oa,"rel","nofollow"),u(Dl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForSequenceClassification"),u(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hn,"id","transformers.RoFormerForMultipleChoice"),u(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hn,"href","#transformers.RoFormerForMultipleChoice"),u(It,"class","relative group"),u(aa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(aa,"rel","nofollow"),u(Il,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForMultipleChoice"),u(Uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.RoFormerForTokenClassification"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.RoFormerForTokenClassification"),u(St,"class","relative group"),u(pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(pa,"rel","nofollow"),u(Nl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForTokenClassification"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.RoFormerForQuestionAnswering"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.RoFormerForQuestionAnswering"),u(Ut,"class","relative group"),u(ga,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ga,"rel","nofollow"),u(Sl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.RoFormerForQuestionAnswering"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rr,"id","transformers.TFRoFormerModel"),u(rr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(rr,"href","#transformers.TFRoFormerModel"),u(Qt,"class","relative group"),u(Wl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(va,"rel","nofollow"),u(Ul,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerModel"),u(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lr,"id","transformers.TFRoFormerForMaskedLM"),u(lr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(lr,"href","#transformers.TFRoFormerForMaskedLM"),u(Vt,"class","relative group"),u(Kl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ma,"rel","nofollow"),u(Bl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForMaskedLM"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(hr,"id","transformers.TFRoFormerForCausalLM"),u(hr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(hr,"href","#transformers.TFRoFormerForCausalLM"),u(Gt,"class","relative group"),u(Ql,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(La,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(La,"rel","nofollow"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gr,"id","transformers.TFRoFormerForSequenceClassification"),u(gr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(gr,"href","#transformers.TFRoFormerForSequenceClassification"),u(Xt,"class","relative group"),u(Hl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wa,"rel","nofollow"),u(Vl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForSequenceClassification"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(br,"id","transformers.TFRoFormerForMultipleChoice"),u(br,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(br,"href","#transformers.TFRoFormerForMultipleChoice"),u(Zt,"class","relative group"),u(Jl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Va,"rel","nofollow"),u(Gl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForMultipleChoice"),u(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($r,"id","transformers.TFRoFormerForTokenClassification"),u($r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($r,"href","#transformers.TFRoFormerForTokenClassification"),u(on,"class","relative group"),u(Xl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ei,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ei,"rel","nofollow"),u(Yl,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForTokenClassification"),u(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jr,"id","transformers.TFRoFormerForQuestionAnswering"),u(jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jr,"href","#transformers.TFRoFormerForQuestionAnswering"),u(nn,"class","relative group"),u(Zl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ai,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ai,"rel","nofollow"),u(ed,"href","/docs/transformers/main/en/model_doc/roformer#transformers.TFRoFormerForQuestionAnswering"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ar,"id","transformers.FlaxRoFormerModel"),u(Ar,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ar,"href","#transformers.FlaxRoFormerModel"),u(an,"class","relative group"),u(od,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(mi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(mi,"rel","nofollow"),u(hi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(hi,"rel","nofollow"),u(fi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(fi,"rel","nofollow"),u(ui,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ui,"rel","nofollow"),u(gi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(gi,"rel","nofollow"),u(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dr,"id","transformers.FlaxRoFormerForMaskedLM"),u(Dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dr,"href","#transformers.FlaxRoFormerForMaskedLM"),u(dn,"class","relative group"),u(td,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(wi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(wi,"rel","nofollow"),u(Ti,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ti,"rel","nofollow"),u($i,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u($i,"rel","nofollow"),u(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(xi,"rel","nofollow"),u(Ri,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ri,"rel","nofollow"),u(Ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Sr,"id","transformers.FlaxRoFormerForSequenceClassification"),u(Sr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Sr,"href","#transformers.FlaxRoFormerForSequenceClassification"),u(pn,"class","relative group"),u(nd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(qi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(qi,"rel","nofollow"),u(Pi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Pi,"rel","nofollow"),u(Ai,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ai,"rel","nofollow"),u(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Li,"rel","nofollow"),u(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Oi,"rel","nofollow"),u(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Kr,"id","transformers.FlaxRoFormerForMultipleChoice"),u(Kr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Kr,"href","#transformers.FlaxRoFormerForMultipleChoice"),u(hn,"class","relative group"),u(rd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ui,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ui,"rel","nofollow"),u(Ki,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ki,"rel","nofollow"),u(Bi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Bi,"rel","nofollow"),u(Qi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Qi,"rel","nofollow"),u(Hi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Hi,"rel","nofollow"),u(Jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hr,"id","transformers.FlaxRoFormerForTokenClassification"),u(Hr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hr,"href","#transformers.FlaxRoFormerForTokenClassification"),u(un,"class","relative group"),u(sd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Zi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Zi,"rel","nofollow"),u(el,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(el,"rel","nofollow"),u(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ol,"rel","nofollow"),u(tl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(tl,"rel","nofollow"),u(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(nl,"rel","nofollow"),u(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gr,"id","transformers.FlaxRoFormerForQuestionAnswering"),u(Gr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gr,"href","#transformers.FlaxRoFormerForQuestionAnswering"),u(_n,"class","relative group"),u(ad,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(dl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(dl,"rel","nofollow"),u(cl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(cl,"rel","nofollow"),u(pl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(pl,"rel","nofollow"),u(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ml,"rel","nofollow"),u(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(hl,"rel","nofollow"),u(Xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(r,y){e(document.head,d),_(r,g,y),_(r,c,y),e(c,f),e(f,k),w(l,k,null),e(c,p),e(c,j),e(j,Te),_(r,ge,y),_(r,I,y),e(I,ae),e(ae,ee),w(R,ee,null),e(I,$e),e(I,Q),e(Q,xe),_(r,_e,y),_(r,N,y),e(N,Re),e(N,ie),e(ie,V),e(N,Ee),_(r,ke,y),_(r,W,y),e(W,Me),_(r,ye,y),_(r,U,y),e(U,he),e(he,je),_(r,te,y),_(r,C,y),e(C,A),_(r,Fe,y),_(r,K,y),e(K,fe),e(fe,ze),_(r,H,y),_(r,ne,y),e(ne,Ce),e(ne,q),e(q,qe),e(ne,J),e(ne,le),e(le,Pe),e(ne,G),_(r,be,y),_(r,se,y),e(se,O),e(O,ue),w(S,ue,null),e(se,Ae),e(se,oe),e(oe,L),_(r,ve,y),_(r,P,y),w(de,P,null),e(P,Le),e(P,F),e(F,M),e(F,Se),e(Se,re),e(F,He),e(F,Ne),e(Ne,z),e(F,Ve),e(P,Je),e(P,Oe),e(Oe,Ge),e(Oe,We),e(We,D),e(Oe,X),e(Oe,Ue),e(Ue,Xe),e(Oe,Y),e(P,Ye),w(Ie,P,null),_(r,we,y),_(r,De,y),e(De,Z),e(Z,Ke),w(Fs,Ke,null),e(De,Xf),e(De,Od),e(Od,Yf),_(r,th,y),_(r,Ze,y),w(bs,Ze,null),e(Ze,Zf),e(Ze,vs),e(vs,eu),e(vs,ws),e(ws,ou),e(vs,tu),e(Ze,nu),e(Ze,Ts),e(Ts,ru),e(Ts,xl),e(xl,su),e(Ts,au),e(Ze,iu),w($n,Ze,null),e(Ze,lu),e(Ze,gt),w($s,gt,null),e(gt,du),e(gt,Dd),e(Dd,cu),e(gt,pu),e(gt,xs),e(xs,Rl),e(Rl,mu),e(Rl,Id),e(Id,hu),e(xs,fu),e(xs,El),e(El,uu),e(El,Nd),e(Nd,gu),e(Ze,_u),e(Ze,xn),w(Rs,xn,null),e(xn,ku),e(xn,Es),e(Es,yu),e(Es,Sd),e(Sd,Fu),e(Es,bu),e(Ze,vu),e(Ze,No),w(Ms,No,null),e(No,wu),e(No,Wd),e(Wd,Tu),e(No,$u),w(Rn,No,null),e(No,xu),e(No,Rt),e(Rt,Ru),e(Rt,Ud),e(Ud,Eu),e(Rt,Mu),e(Rt,Kd),e(Kd,ju),e(Rt,zu),e(Ze,Cu),e(Ze,Ml),w(js,Ml,null),_(r,nh,y),_(r,Et,y),e(Et,En),e(En,Bd),w(zs,Bd,null),e(Et,qu),e(Et,Qd),e(Qd,Pu),_(r,rh,y),_(r,lo,y),w(Cs,lo,null),e(lo,Au),e(lo,qs),e(qs,Lu),e(qs,Hd),e(Hd,Ou),e(qs,Du),e(lo,Iu),e(lo,Mn),e(Mn,jl),e(jl,Nu),e(Mn,Su),e(Mn,zl),e(zl,Wu),e(Mn,Uu),e(lo,Ku),e(lo,Ps),e(Ps,Bu),e(Ps,Cl),e(Cl,Qu),e(Ps,Hu),e(lo,Vu),w(jn,lo,null),e(lo,Ju),e(lo,_t),w(As,_t,null),e(_t,Gu),e(_t,Vd),e(Vd,Xu),e(_t,Yu),e(_t,Ls),e(Ls,ql),e(ql,Zu),e(ql,Jd),e(Jd,eg),e(Ls,og),e(Ls,Pl),e(Pl,tg),e(Pl,Gd),e(Gd,ng),_(r,sh,y),_(r,Mt,y),e(Mt,zn),e(zn,Xd),w(Os,Xd,null),e(Mt,rg),e(Mt,Yd),e(Yd,sg),_(r,ah,y),_(r,ko,y),w(Ds,ko,null),e(ko,ag),e(ko,Is),e(Is,ig),e(Is,Ns),e(Ns,lg),e(Is,dg),e(ko,cg),e(ko,Ss),e(Ss,pg),e(Ss,Ws),e(Ws,mg),e(Ss,hg),e(ko,fg),e(ko,co),e(co,ug),e(co,Zd),e(Zd,gg),e(co,_g),e(co,ec),e(ec,kg),e(co,yg),e(co,oc),e(oc,Fg),e(co,bg),e(co,tc),e(tc,vg),e(co,wg),e(co,nc),e(nc,Tg),e(co,$g),e(co,rc),e(rc,xg),e(co,Rg),e(ko,Eg),e(ko,So),w(Us,So,null),e(So,Mg),e(So,jt),e(jt,jg),e(jt,Al),e(Al,zg),e(jt,Cg),e(jt,sc),e(sc,qg),e(jt,Pg),e(So,Ag),w(Cn,So,null),e(So,Lg),w(qn,So,null),_(r,ih,y),_(r,zt,y),e(zt,Pn),e(Pn,ac),w(Ks,ac,null),e(zt,Og),e(zt,ic),e(ic,Dg),_(r,lh,y),_(r,at,y),w(Bs,at,null),e(at,Ig),e(at,Ct),e(Ct,Ng),e(Ct,lc),e(lc,Sg),e(Ct,Wg),e(Ct,Qs),e(Qs,Ug),e(Ct,Kg),e(at,Bg),e(at,Wo),w(Hs,Wo,null),e(Wo,Qg),e(Wo,qt),e(qt,Hg),e(qt,Ll),e(Ll,Vg),e(qt,Jg),e(qt,dc),e(dc,Gg),e(qt,Xg),e(Wo,Yg),w(An,Wo,null),e(Wo,Zg),w(Ln,Wo,null),_(r,dh,y),_(r,Pt,y),e(Pt,On),e(On,cc),w(Vs,cc,null),e(Pt,e_),e(Pt,pc),e(pc,o_),_(r,ch,y),_(r,it,y),w(Js,it,null),e(it,t_),e(it,At),e(At,n_),e(At,mc),e(mc,r_),e(At,s_),e(At,Gs),e(Gs,a_),e(At,i_),e(it,l_),e(it,bo),w(Xs,bo,null),e(bo,d_),e(bo,Lt),e(Lt,c_),e(Lt,Ol),e(Ol,p_),e(Lt,m_),e(Lt,hc),e(hc,h_),e(Lt,f_),e(bo,u_),w(Dn,bo,null),e(bo,g_),w(In,bo,null),e(bo,__),w(Nn,bo,null),_(r,ph,y),_(r,Ot,y),e(Ot,Sn),e(Sn,fc),w(Ys,fc,null),e(Ot,k_),e(Ot,uc),e(uc,y_),_(r,mh,y),_(r,Lo,y),w(Zs,Lo,null),e(Lo,F_),e(Lo,gc),e(gc,b_),e(Lo,v_),e(Lo,ea),e(ea,w_),e(ea,oa),e(oa,T_),e(ea,$_),e(Lo,x_),e(Lo,io),w(ta,io,null),e(io,R_),e(io,Dt),e(Dt,E_),e(Dt,Dl),e(Dl,M_),e(Dt,j_),e(Dt,_c),e(_c,z_),e(Dt,C_),e(io,q_),w(Wn,io,null),e(io,P_),w(Un,io,null),e(io,A_),w(Kn,io,null),e(io,L_),w(Bn,io,null),e(io,O_),w(Qn,io,null),_(r,hh,y),_(r,It,y),e(It,Hn),e(Hn,kc),w(na,kc,null),e(It,D_),e(It,yc),e(yc,I_),_(r,fh,y),_(r,Oo,y),w(ra,Oo,null),e(Oo,N_),e(Oo,Fc),e(Fc,S_),e(Oo,W_),e(Oo,sa),e(sa,U_),e(sa,aa),e(aa,K_),e(sa,B_),e(Oo,Q_),e(Oo,Uo),w(ia,Uo,null),e(Uo,H_),e(Uo,Nt),e(Nt,V_),e(Nt,Il),e(Il,J_),e(Nt,G_),e(Nt,bc),e(bc,X_),e(Nt,Y_),e(Uo,Z_),w(Vn,Uo,null),e(Uo,ek),w(Jn,Uo,null),_(r,uh,y),_(r,St,y),e(St,Gn),e(Gn,vc),w(la,vc,null),e(St,ok),e(St,wc),e(wc,tk),_(r,gh,y),_(r,Do,y),w(da,Do,null),e(Do,nk),e(Do,Tc),e(Tc,rk),e(Do,sk),e(Do,ca),e(ca,ak),e(ca,pa),e(pa,ik),e(ca,lk),e(Do,dk),e(Do,vo),w(ma,vo,null),e(vo,ck),e(vo,Wt),e(Wt,pk),e(Wt,Nl),e(Nl,mk),e(Wt,hk),e(Wt,$c),e($c,fk),e(Wt,uk),e(vo,gk),w(Xn,vo,null),e(vo,_k),w(Yn,vo,null),e(vo,kk),w(Zn,vo,null),_(r,_h,y),_(r,Ut,y),e(Ut,er),e(er,xc),w(ha,xc,null),e(Ut,yk),e(Ut,Rc),e(Rc,Fk),_(r,kh,y),_(r,Io,y),w(fa,Io,null),e(Io,bk),e(Io,Kt),e(Kt,vk),e(Kt,Ec),e(Ec,wk),e(Kt,Tk),e(Kt,Mc),e(Mc,$k),e(Kt,xk),e(Io,Rk),e(Io,ua),e(ua,Ek),e(ua,ga),e(ga,Mk),e(ua,jk),e(Io,zk),e(Io,wo),w(_a,wo,null),e(wo,Ck),e(wo,Bt),e(Bt,qk),e(Bt,Sl),e(Sl,Pk),e(Bt,Ak),e(Bt,jc),e(jc,Lk),e(Bt,Ok),e(wo,Dk),w(or,wo,null),e(wo,Ik),w(tr,wo,null),e(wo,Nk),w(nr,wo,null),_(r,yh,y),_(r,Qt,y),e(Qt,rr),e(rr,zc),w(ka,zc,null),e(Qt,Sk),e(Qt,Cc),e(Cc,Wk),_(r,Fh,y),_(r,po,y),w(ya,po,null),e(po,Uk),e(po,qc),e(qc,Kk),e(po,Bk),e(po,Fa),e(Fa,Qk),e(Fa,Wl),e(Wl,Hk),e(Fa,Vk),e(po,Jk),e(po,ba),e(ba,Gk),e(ba,va),e(va,Xk),e(ba,Yk),e(po,Zk),w(sr,po,null),e(po,ey),e(po,Ko),w(wa,Ko,null),e(Ko,oy),e(Ko,Ht),e(Ht,ty),e(Ht,Ul),e(Ul,ny),e(Ht,ry),e(Ht,Pc),e(Pc,sy),e(Ht,ay),e(Ko,iy),w(ar,Ko,null),e(Ko,ly),w(ir,Ko,null),_(r,bh,y),_(r,Vt,y),e(Vt,lr),e(lr,Ac),w(Ta,Ac,null),e(Vt,dy),e(Vt,Lc),e(Lc,cy),_(r,vh,y),_(r,mo,y),w($a,mo,null),e(mo,py),e(mo,xa),e(xa,my),e(xa,Oc),e(Oc,hy),e(xa,fy),e(mo,uy),e(mo,Ra),e(Ra,gy),e(Ra,Kl),e(Kl,_y),e(Ra,ky),e(mo,yy),e(mo,Ea),e(Ea,Fy),e(Ea,Ma),e(Ma,by),e(Ea,vy),e(mo,wy),w(dr,mo,null),e(mo,Ty),e(mo,To),w(ja,To,null),e(To,$y),e(To,Jt),e(Jt,xy),e(Jt,Bl),e(Bl,Ry),e(Jt,Ey),e(Jt,Dc),e(Dc,My),e(Jt,jy),e(To,zy),w(cr,To,null),e(To,Cy),w(pr,To,null),e(To,qy),w(mr,To,null),_(r,wh,y),_(r,Gt,y),e(Gt,hr),e(hr,Ic),w(za,Ic,null),e(Gt,Py),e(Gt,Nc),e(Nc,Ay),_(r,Th,y),_(r,ho,y),w(Ca,ho,null),e(ho,Ly),e(ho,qa),e(qa,Oy),e(qa,Sc),e(Sc,Dy),e(qa,Iy),e(ho,Ny),e(ho,Pa),e(Pa,Sy),e(Pa,Ql),e(Ql,Wy),e(Pa,Uy),e(ho,Ky),e(ho,Aa),e(Aa,By),e(Aa,La),e(La,Qy),e(Aa,Hy),e(ho,Vy),w(fr,ho,null),e(ho,Jy),e(ho,kt),w(Oa,kt,null),e(kt,Gy),e(kt,yo),e(yo,Xy),e(yo,Wc),e(Wc,Yy),e(yo,Zy),e(yo,Uc),e(Uc,eF),e(yo,oF),e(yo,Kc),e(Kc,tF),e(yo,nF),e(yo,Bc),e(Bc,rF),e(yo,sF),e(yo,Qc),e(Qc,aF),e(yo,iF),e(kt,lF),w(ur,kt,null),_(r,$h,y),_(r,Xt,y),e(Xt,gr),e(gr,Hc),w(Da,Hc,null),e(Xt,dF),e(Xt,Vc),e(Vc,cF),_(r,xh,y),_(r,fo,y),w(Ia,fo,null),e(fo,pF),e(fo,Jc),e(Jc,mF),e(fo,hF),e(fo,Na),e(Na,fF),e(Na,Hl),e(Hl,uF),e(Na,gF),e(fo,_F),e(fo,Sa),e(Sa,kF),e(Sa,Wa),e(Wa,yF),e(Sa,FF),e(fo,bF),w(_r,fo,null),e(fo,vF),e(fo,$o),w(Ua,$o,null),e($o,wF),e($o,Yt),e(Yt,TF),e(Yt,Vl),e(Vl,$F),e(Yt,xF),e(Yt,Gc),e(Gc,RF),e(Yt,EF),e($o,MF),w(kr,$o,null),e($o,jF),w(yr,$o,null),e($o,zF),w(Fr,$o,null),_(r,Rh,y),_(r,Zt,y),e(Zt,br),e(br,Xc),w(Ka,Xc,null),e(Zt,CF),e(Zt,Yc),e(Yc,qF),_(r,Eh,y),_(r,uo,y),w(Ba,uo,null),e(uo,PF),e(uo,Zc),e(Zc,AF),e(uo,LF),e(uo,Qa),e(Qa,OF),e(Qa,Jl),e(Jl,DF),e(Qa,IF),e(uo,NF),e(uo,Ha),e(Ha,SF),e(Ha,Va),e(Va,WF),e(Ha,UF),e(uo,KF),w(vr,uo,null),e(uo,BF),e(uo,Bo),w(Ja,Bo,null),e(Bo,QF),e(Bo,en),e(en,HF),e(en,Gl),e(Gl,VF),e(en,JF),e(en,ep),e(ep,GF),e(en,XF),e(Bo,YF),w(wr,Bo,null),e(Bo,ZF),w(Tr,Bo,null),_(r,Mh,y),_(r,on,y),e(on,$r),e($r,op),w(Ga,op,null),e(on,eb),e(on,tp),e(tp,ob),_(r,jh,y),_(r,go,y),w(Xa,go,null),e(go,tb),e(go,np),e(np,nb),e(go,rb),e(go,Ya),e(Ya,sb),e(Ya,Xl),e(Xl,ab),e(Ya,ib),e(go,lb),e(go,Za),e(Za,db),e(Za,ei),e(ei,cb),e(Za,pb),e(go,mb),w(xr,go,null),e(go,hb),e(go,xo),w(oi,xo,null),e(xo,fb),e(xo,tn),e(tn,ub),e(tn,Yl),e(Yl,gb),e(tn,_b),e(tn,rp),e(rp,kb),e(tn,yb),e(xo,Fb),w(Rr,xo,null),e(xo,bb),w(Er,xo,null),e(xo,vb),w(Mr,xo,null),_(r,zh,y),_(r,nn,y),e(nn,jr),e(jr,sp),w(ti,sp,null),e(nn,wb),e(nn,ap),e(ap,Tb),_(r,Ch,y),_(r,_o,y),w(ni,_o,null),e(_o,$b),e(_o,rn),e(rn,xb),e(rn,ip),e(ip,Rb),e(rn,Eb),e(rn,lp),e(lp,Mb),e(rn,jb),e(_o,zb),e(_o,ri),e(ri,Cb),e(ri,Zl),e(Zl,qb),e(ri,Pb),e(_o,Ab),e(_o,si),e(si,Lb),e(si,ai),e(ai,Ob),e(si,Db),e(_o,Ib),w(zr,_o,null),e(_o,Nb),e(_o,Ro),w(ii,Ro,null),e(Ro,Sb),e(Ro,sn),e(sn,Wb),e(sn,ed),e(ed,Ub),e(sn,Kb),e(sn,dp),e(dp,Bb),e(sn,Qb),e(Ro,Hb),w(Cr,Ro,null),e(Ro,Vb),w(qr,Ro,null),e(Ro,Jb),w(Pr,Ro,null),_(r,qh,y),_(r,an,y),e(an,Ar),e(Ar,cp),w(li,cp,null),e(an,Gb),e(an,pp),e(pp,Xb),_(r,Ph,y),_(r,eo,y),w(di,eo,null),e(eo,Yb),e(eo,mp),e(mp,Zb),e(eo,ev),e(eo,ci),e(ci,ov),e(ci,od),e(od,tv),e(ci,nv),e(eo,rv),e(eo,pi),e(pi,sv),e(pi,mi),e(mi,av),e(pi,iv),e(eo,lv),e(eo,hp),e(hp,dv),e(eo,cv),e(eo,lt),e(lt,fp),e(fp,hi),e(hi,pv),e(lt,mv),e(lt,up),e(up,fi),e(fi,hv),e(lt,fv),e(lt,gp),e(gp,ui),e(ui,uv),e(lt,gv),e(lt,_p),e(_p,gi),e(gi,_v),e(eo,kv),e(eo,Qo),w(_i,Qo,null),e(Qo,yv),e(Qo,ln),e(ln,Fv),e(ln,kp),e(kp,bv),e(ln,vv),e(ln,yp),e(yp,wv),e(ln,Tv),e(Qo,$v),w(Lr,Qo,null),e(Qo,xv),w(Or,Qo,null),_(r,Ah,y),_(r,dn,y),e(dn,Dr),e(Dr,Fp),w(ki,Fp,null),e(dn,Rv),e(dn,bp),e(bp,Ev),_(r,Lh,y),_(r,oo,y),w(yi,oo,null),e(oo,Mv),e(oo,Fi),e(Fi,jv),e(Fi,vp),e(vp,zv),e(Fi,Cv),e(oo,qv),e(oo,bi),e(bi,Pv),e(bi,td),e(td,Av),e(bi,Lv),e(oo,Ov),e(oo,vi),e(vi,Dv),e(vi,wi),e(wi,Iv),e(vi,Nv),e(oo,Sv),e(oo,wp),e(wp,Wv),e(oo,Uv),e(oo,dt),e(dt,Tp),e(Tp,Ti),e(Ti,Kv),e(dt,Bv),e(dt,$p),e($p,$i),e($i,Qv),e(dt,Hv),e(dt,xp),e(xp,xi),e(xi,Vv),e(dt,Jv),e(dt,Rp),e(Rp,Ri),e(Ri,Gv),e(oo,Xv),e(oo,Ho),w(Ei,Ho,null),e(Ho,Yv),e(Ho,cn),e(cn,Zv),e(cn,Ep),e(Ep,ew),e(cn,ow),e(cn,Mp),e(Mp,tw),e(cn,nw),e(Ho,rw),w(Ir,Ho,null),e(Ho,sw),w(Nr,Ho,null),_(r,Oh,y),_(r,pn,y),e(pn,Sr),e(Sr,jp),w(Mi,jp,null),e(pn,aw),e(pn,zp),e(zp,iw),_(r,Dh,y),_(r,to,y),w(ji,to,null),e(to,lw),e(to,Cp),e(Cp,dw),e(to,cw),e(to,zi),e(zi,pw),e(zi,nd),e(nd,mw),e(zi,hw),e(to,fw),e(to,Ci),e(Ci,uw),e(Ci,qi),e(qi,gw),e(Ci,_w),e(to,kw),e(to,qp),e(qp,yw),e(to,Fw),e(to,ct),e(ct,Pp),e(Pp,Pi),e(Pi,bw),e(ct,vw),e(ct,Ap),e(Ap,Ai),e(Ai,ww),e(ct,Tw),e(ct,Lp),e(Lp,Li),e(Li,$w),e(ct,xw),e(ct,Op),e(Op,Oi),e(Oi,Rw),e(to,Ew),e(to,Vo),w(Di,Vo,null),e(Vo,Mw),e(Vo,mn),e(mn,jw),e(mn,Dp),e(Dp,zw),e(mn,Cw),e(mn,Ip),e(Ip,qw),e(mn,Pw),e(Vo,Aw),w(Wr,Vo,null),e(Vo,Lw),w(Ur,Vo,null),_(r,Ih,y),_(r,hn,y),e(hn,Kr),e(Kr,Np),w(Ii,Np,null),e(hn,Ow),e(hn,Sp),e(Sp,Dw),_(r,Nh,y),_(r,no,y),w(Ni,no,null),e(no,Iw),e(no,Wp),e(Wp,Nw),e(no,Sw),e(no,Si),e(Si,Ww),e(Si,rd),e(rd,Uw),e(Si,Kw),e(no,Bw),e(no,Wi),e(Wi,Qw),e(Wi,Ui),e(Ui,Hw),e(Wi,Vw),e(no,Jw),e(no,Up),e(Up,Gw),e(no,Xw),e(no,pt),e(pt,Kp),e(Kp,Ki),e(Ki,Yw),e(pt,Zw),e(pt,Bp),e(Bp,Bi),e(Bi,eT),e(pt,oT),e(pt,Qp),e(Qp,Qi),e(Qi,tT),e(pt,nT),e(pt,Hp),e(Hp,Hi),e(Hi,rT),e(no,sT),e(no,Jo),w(Vi,Jo,null),e(Jo,aT),e(Jo,fn),e(fn,iT),e(fn,Vp),e(Vp,lT),e(fn,dT),e(fn,Jp),e(Jp,cT),e(fn,pT),e(Jo,mT),w(Br,Jo,null),e(Jo,hT),w(Qr,Jo,null),_(r,Sh,y),_(r,un,y),e(un,Hr),e(Hr,Gp),w(Ji,Gp,null),e(un,fT),e(un,Xp),e(Xp,uT),_(r,Wh,y),_(r,ro,y),w(Gi,ro,null),e(ro,gT),e(ro,Yp),e(Yp,_T),e(ro,kT),e(ro,Xi),e(Xi,yT),e(Xi,sd),e(sd,FT),e(Xi,bT),e(ro,vT),e(ro,Yi),e(Yi,wT),e(Yi,Zi),e(Zi,TT),e(Yi,$T),e(ro,xT),e(ro,Zp),e(Zp,RT),e(ro,ET),e(ro,mt),e(mt,em),e(em,el),e(el,MT),e(mt,jT),e(mt,om),e(om,ol),e(ol,zT),e(mt,CT),e(mt,tm),e(tm,tl),e(tl,qT),e(mt,PT),e(mt,nm),e(nm,nl),e(nl,AT),e(ro,LT),e(ro,Go),w(rl,Go,null),e(Go,OT),e(Go,gn),e(gn,DT),e(gn,rm),e(rm,IT),e(gn,NT),e(gn,sm),e(sm,ST),e(gn,WT),e(Go,UT),w(Vr,Go,null),e(Go,KT),w(Jr,Go,null),_(r,Uh,y),_(r,_n,y),e(_n,Gr),e(Gr,am),w(sl,am,null),e(_n,BT),e(_n,im),e(im,QT),_(r,Kh,y),_(r,so,y),w(al,so,null),e(so,HT),e(so,kn),e(kn,VT),e(kn,lm),e(lm,JT),e(kn,GT),e(kn,dm),e(dm,XT),e(kn,YT),e(so,ZT),e(so,il),e(il,e$),e(il,ad),e(ad,o$),e(il,t$),e(so,n$),e(so,ll),e(ll,r$),e(ll,dl),e(dl,s$),e(ll,a$),e(so,i$),e(so,cm),e(cm,l$),e(so,d$),e(so,ht),e(ht,pm),e(pm,cl),e(cl,c$),e(ht,p$),e(ht,mm),e(mm,pl),e(pl,m$),e(ht,h$),e(ht,hm),e(hm,ml),e(ml,f$),e(ht,u$),e(ht,fm),e(fm,hl),e(hl,g$),e(so,_$),e(so,Xo),w(fl,Xo,null),e(Xo,k$),e(Xo,yn),e(yn,y$),e(yn,um),e(um,F$),e(yn,b$),e(yn,gm),e(gm,v$),e(yn,w$),e(Xo,T$),w(Xr,Xo,null),e(Xo,$$),w(Yr,Xo,null),Bh=!0},p(r,[y]){const ul={};y&2&&(ul.$$scope={dirty:y,ctx:r}),Ie.$set(ul);const _m={};y&2&&(_m.$$scope={dirty:y,ctx:r}),$n.$set(_m);const km={};y&2&&(km.$$scope={dirty:y,ctx:r}),Rn.$set(km);const ym={};y&2&&(ym.$$scope={dirty:y,ctx:r}),jn.$set(ym);const gl={};y&2&&(gl.$$scope={dirty:y,ctx:r}),Cn.$set(gl);const Fm={};y&2&&(Fm.$$scope={dirty:y,ctx:r}),qn.$set(Fm);const bm={};y&2&&(bm.$$scope={dirty:y,ctx:r}),An.$set(bm);const vm={};y&2&&(vm.$$scope={dirty:y,ctx:r}),Ln.$set(vm);const _l={};y&2&&(_l.$$scope={dirty:y,ctx:r}),Dn.$set(_l);const wm={};y&2&&(wm.$$scope={dirty:y,ctx:r}),In.$set(wm);const Tm={};y&2&&(Tm.$$scope={dirty:y,ctx:r}),Nn.$set(Tm);const $m={};y&2&&($m.$$scope={dirty:y,ctx:r}),Wn.$set($m);const xm={};y&2&&(xm.$$scope={dirty:y,ctx:r}),Un.$set(xm);const Rm={};y&2&&(Rm.$$scope={dirty:y,ctx:r}),Kn.$set(Rm);const Em={};y&2&&(Em.$$scope={dirty:y,ctx:r}),Bn.$set(Em);const Mm={};y&2&&(Mm.$$scope={dirty:y,ctx:r}),Qn.$set(Mm);const Fn={};y&2&&(Fn.$$scope={dirty:y,ctx:r}),Vn.$set(Fn);const jm={};y&2&&(jm.$$scope={dirty:y,ctx:r}),Jn.$set(jm);const zm={};y&2&&(zm.$$scope={dirty:y,ctx:r}),Xn.$set(zm);const kl={};y&2&&(kl.$$scope={dirty:y,ctx:r}),Yn.$set(kl);const Cm={};y&2&&(Cm.$$scope={dirty:y,ctx:r}),Zn.$set(Cm);const qm={};y&2&&(qm.$$scope={dirty:y,ctx:r}),or.$set(qm);const Pm={};y&2&&(Pm.$$scope={dirty:y,ctx:r}),tr.$set(Pm);const ft={};y&2&&(ft.$$scope={dirty:y,ctx:r}),nr.$set(ft);const bn={};y&2&&(bn.$$scope={dirty:y,ctx:r}),sr.$set(bn);const Am={};y&2&&(Am.$$scope={dirty:y,ctx:r}),ar.$set(Am);const Lm={};y&2&&(Lm.$$scope={dirty:y,ctx:r}),ir.$set(Lm);const vn={};y&2&&(vn.$$scope={dirty:y,ctx:r}),dr.$set(vn);const Om={};y&2&&(Om.$$scope={dirty:y,ctx:r}),cr.$set(Om);const Dm={};y&2&&(Dm.$$scope={dirty:y,ctx:r}),pr.$set(Dm);const yl={};y&2&&(yl.$$scope={dirty:y,ctx:r}),mr.$set(yl);const Im={};y&2&&(Im.$$scope={dirty:y,ctx:r}),fr.$set(Im);const Nm={};y&2&&(Nm.$$scope={dirty:y,ctx:r}),ur.$set(Nm);const Sm={};y&2&&(Sm.$$scope={dirty:y,ctx:r}),_r.$set(Sm);const ao={};y&2&&(ao.$$scope={dirty:y,ctx:r}),kr.$set(ao);const Fl={};y&2&&(Fl.$$scope={dirty:y,ctx:r}),yr.$set(Fl);const Wm={};y&2&&(Wm.$$scope={dirty:y,ctx:r}),Fr.$set(Wm);const bl={};y&2&&(bl.$$scope={dirty:y,ctx:r}),vr.$set(bl);const Um={};y&2&&(Um.$$scope={dirty:y,ctx:r}),wr.$set(Um);const wn={};y&2&&(wn.$$scope={dirty:y,ctx:r}),Tr.$set(wn);const Km={};y&2&&(Km.$$scope={dirty:y,ctx:r}),xr.$set(Km);const vl={};y&2&&(vl.$$scope={dirty:y,ctx:r}),Rr.$set(vl);const id={};y&2&&(id.$$scope={dirty:y,ctx:r}),Er.$set(id);const Bm={};y&2&&(Bm.$$scope={dirty:y,ctx:r}),Mr.$set(Bm);const ld={};y&2&&(ld.$$scope={dirty:y,ctx:r}),zr.$set(ld);const Qm={};y&2&&(Qm.$$scope={dirty:y,ctx:r}),Cr.$set(Qm);const wl={};y&2&&(wl.$$scope={dirty:y,ctx:r}),qr.$set(wl);const Tl={};y&2&&(Tl.$$scope={dirty:y,ctx:r}),Pr.$set(Tl);const Hm={};y&2&&(Hm.$$scope={dirty:y,ctx:r}),Lr.$set(Hm);const ut={};y&2&&(ut.$$scope={dirty:y,ctx:r}),Or.$set(ut);const Vm={};y&2&&(Vm.$$scope={dirty:y,ctx:r}),Ir.$set(Vm);const Tn={};y&2&&(Tn.$$scope={dirty:y,ctx:r}),Nr.$set(Tn);const Jm={};y&2&&(Jm.$$scope={dirty:y,ctx:r}),Wr.$set(Jm);const Gm={};y&2&&(Gm.$$scope={dirty:y,ctx:r}),Ur.$set(Gm);const Xm={};y&2&&(Xm.$$scope={dirty:y,ctx:r}),Br.$set(Xm);const $l={};y&2&&($l.$$scope={dirty:y,ctx:r}),Qr.$set($l);const Ym={};y&2&&(Ym.$$scope={dirty:y,ctx:r}),Vr.$set(Ym);const Zm={};y&2&&(Zm.$$scope={dirty:y,ctx:r}),Jr.$set(Zm);const eh={};y&2&&(eh.$$scope={dirty:y,ctx:r}),Xr.$set(eh);const Fo={};y&2&&(Fo.$$scope={dirty:y,ctx:r}),Yr.$set(Fo)},i(r){Bh||(T(l.$$.fragment,r),T(R.$$.fragment,r),T(S.$$.fragment,r),T(de.$$.fragment,r),T(Ie.$$.fragment,r),T(Fs.$$.fragment,r),T(bs.$$.fragment,r),T($n.$$.fragment,r),T($s.$$.fragment,r),T(Rs.$$.fragment,r),T(Ms.$$.fragment,r),T(Rn.$$.fragment,r),T(js.$$.fragment,r),T(zs.$$.fragment,r),T(Cs.$$.fragment,r),T(jn.$$.fragment,r),T(As.$$.fragment,r),T(Os.$$.fragment,r),T(Ds.$$.fragment,r),T(Us.$$.fragment,r),T(Cn.$$.fragment,r),T(qn.$$.fragment,r),T(Ks.$$.fragment,r),T(Bs.$$.fragment,r),T(Hs.$$.fragment,r),T(An.$$.fragment,r),T(Ln.$$.fragment,r),T(Vs.$$.fragment,r),T(Js.$$.fragment,r),T(Xs.$$.fragment,r),T(Dn.$$.fragment,r),T(In.$$.fragment,r),T(Nn.$$.fragment,r),T(Ys.$$.fragment,r),T(Zs.$$.fragment,r),T(ta.$$.fragment,r),T(Wn.$$.fragment,r),T(Un.$$.fragment,r),T(Kn.$$.fragment,r),T(Bn.$$.fragment,r),T(Qn.$$.fragment,r),T(na.$$.fragment,r),T(ra.$$.fragment,r),T(ia.$$.fragment,r),T(Vn.$$.fragment,r),T(Jn.$$.fragment,r),T(la.$$.fragment,r),T(da.$$.fragment,r),T(ma.$$.fragment,r),T(Xn.$$.fragment,r),T(Yn.$$.fragment,r),T(Zn.$$.fragment,r),T(ha.$$.fragment,r),T(fa.$$.fragment,r),T(_a.$$.fragment,r),T(or.$$.fragment,r),T(tr.$$.fragment,r),T(nr.$$.fragment,r),T(ka.$$.fragment,r),T(ya.$$.fragment,r),T(sr.$$.fragment,r),T(wa.$$.fragment,r),T(ar.$$.fragment,r),T(ir.$$.fragment,r),T(Ta.$$.fragment,r),T($a.$$.fragment,r),T(dr.$$.fragment,r),T(ja.$$.fragment,r),T(cr.$$.fragment,r),T(pr.$$.fragment,r),T(mr.$$.fragment,r),T(za.$$.fragment,r),T(Ca.$$.fragment,r),T(fr.$$.fragment,r),T(Oa.$$.fragment,r),T(ur.$$.fragment,r),T(Da.$$.fragment,r),T(Ia.$$.fragment,r),T(_r.$$.fragment,r),T(Ua.$$.fragment,r),T(kr.$$.fragment,r),T(yr.$$.fragment,r),T(Fr.$$.fragment,r),T(Ka.$$.fragment,r),T(Ba.$$.fragment,r),T(vr.$$.fragment,r),T(Ja.$$.fragment,r),T(wr.$$.fragment,r),T(Tr.$$.fragment,r),T(Ga.$$.fragment,r),T(Xa.$$.fragment,r),T(xr.$$.fragment,r),T(oi.$$.fragment,r),T(Rr.$$.fragment,r),T(Er.$$.fragment,r),T(Mr.$$.fragment,r),T(ti.$$.fragment,r),T(ni.$$.fragment,r),T(zr.$$.fragment,r),T(ii.$$.fragment,r),T(Cr.$$.fragment,r),T(qr.$$.fragment,r),T(Pr.$$.fragment,r),T(li.$$.fragment,r),T(di.$$.fragment,r),T(_i.$$.fragment,r),T(Lr.$$.fragment,r),T(Or.$$.fragment,r),T(ki.$$.fragment,r),T(yi.$$.fragment,r),T(Ei.$$.fragment,r),T(Ir.$$.fragment,r),T(Nr.$$.fragment,r),T(Mi.$$.fragment,r),T(ji.$$.fragment,r),T(Di.$$.fragment,r),T(Wr.$$.fragment,r),T(Ur.$$.fragment,r),T(Ii.$$.fragment,r),T(Ni.$$.fragment,r),T(Vi.$$.fragment,r),T(Br.$$.fragment,r),T(Qr.$$.fragment,r),T(Ji.$$.fragment,r),T(Gi.$$.fragment,r),T(rl.$$.fragment,r),T(Vr.$$.fragment,r),T(Jr.$$.fragment,r),T(sl.$$.fragment,r),T(al.$$.fragment,r),T(fl.$$.fragment,r),T(Xr.$$.fragment,r),T(Yr.$$.fragment,r),Bh=!0)},o(r){$(l.$$.fragment,r),$(R.$$.fragment,r),$(S.$$.fragment,r),$(de.$$.fragment,r),$(Ie.$$.fragment,r),$(Fs.$$.fragment,r),$(bs.$$.fragment,r),$($n.$$.fragment,r),$($s.$$.fragment,r),$(Rs.$$.fragment,r),$(Ms.$$.fragment,r),$(Rn.$$.fragment,r),$(js.$$.fragment,r),$(zs.$$.fragment,r),$(Cs.$$.fragment,r),$(jn.$$.fragment,r),$(As.$$.fragment,r),$(Os.$$.fragment,r),$(Ds.$$.fragment,r),$(Us.$$.fragment,r),$(Cn.$$.fragment,r),$(qn.$$.fragment,r),$(Ks.$$.fragment,r),$(Bs.$$.fragment,r),$(Hs.$$.fragment,r),$(An.$$.fragment,r),$(Ln.$$.fragment,r),$(Vs.$$.fragment,r),$(Js.$$.fragment,r),$(Xs.$$.fragment,r),$(Dn.$$.fragment,r),$(In.$$.fragment,r),$(Nn.$$.fragment,r),$(Ys.$$.fragment,r),$(Zs.$$.fragment,r),$(ta.$$.fragment,r),$(Wn.$$.fragment,r),$(Un.$$.fragment,r),$(Kn.$$.fragment,r),$(Bn.$$.fragment,r),$(Qn.$$.fragment,r),$(na.$$.fragment,r),$(ra.$$.fragment,r),$(ia.$$.fragment,r),$(Vn.$$.fragment,r),$(Jn.$$.fragment,r),$(la.$$.fragment,r),$(da.$$.fragment,r),$(ma.$$.fragment,r),$(Xn.$$.fragment,r),$(Yn.$$.fragment,r),$(Zn.$$.fragment,r),$(ha.$$.fragment,r),$(fa.$$.fragment,r),$(_a.$$.fragment,r),$(or.$$.fragment,r),$(tr.$$.fragment,r),$(nr.$$.fragment,r),$(ka.$$.fragment,r),$(ya.$$.fragment,r),$(sr.$$.fragment,r),$(wa.$$.fragment,r),$(ar.$$.fragment,r),$(ir.$$.fragment,r),$(Ta.$$.fragment,r),$($a.$$.fragment,r),$(dr.$$.fragment,r),$(ja.$$.fragment,r),$(cr.$$.fragment,r),$(pr.$$.fragment,r),$(mr.$$.fragment,r),$(za.$$.fragment,r),$(Ca.$$.fragment,r),$(fr.$$.fragment,r),$(Oa.$$.fragment,r),$(ur.$$.fragment,r),$(Da.$$.fragment,r),$(Ia.$$.fragment,r),$(_r.$$.fragment,r),$(Ua.$$.fragment,r),$(kr.$$.fragment,r),$(yr.$$.fragment,r),$(Fr.$$.fragment,r),$(Ka.$$.fragment,r),$(Ba.$$.fragment,r),$(vr.$$.fragment,r),$(Ja.$$.fragment,r),$(wr.$$.fragment,r),$(Tr.$$.fragment,r),$(Ga.$$.fragment,r),$(Xa.$$.fragment,r),$(xr.$$.fragment,r),$(oi.$$.fragment,r),$(Rr.$$.fragment,r),$(Er.$$.fragment,r),$(Mr.$$.fragment,r),$(ti.$$.fragment,r),$(ni.$$.fragment,r),$(zr.$$.fragment,r),$(ii.$$.fragment,r),$(Cr.$$.fragment,r),$(qr.$$.fragment,r),$(Pr.$$.fragment,r),$(li.$$.fragment,r),$(di.$$.fragment,r),$(_i.$$.fragment,r),$(Lr.$$.fragment,r),$(Or.$$.fragment,r),$(ki.$$.fragment,r),$(yi.$$.fragment,r),$(Ei.$$.fragment,r),$(Ir.$$.fragment,r),$(Nr.$$.fragment,r),$(Mi.$$.fragment,r),$(ji.$$.fragment,r),$(Di.$$.fragment,r),$(Wr.$$.fragment,r),$(Ur.$$.fragment,r),$(Ii.$$.fragment,r),$(Ni.$$.fragment,r),$(Vi.$$.fragment,r),$(Br.$$.fragment,r),$(Qr.$$.fragment,r),$(Ji.$$.fragment,r),$(Gi.$$.fragment,r),$(rl.$$.fragment,r),$(Vr.$$.fragment,r),$(Jr.$$.fragment,r),$(sl.$$.fragment,r),$(al.$$.fragment,r),$(fl.$$.fragment,r),$(Xr.$$.fragment,r),$(Yr.$$.fragment,r),Bh=!1},d(r){o(d),r&&o(g),r&&o(c),x(l),r&&o(ge),r&&o(I),x(R),r&&o(_e),r&&o(N),r&&o(ke),r&&o(W),r&&o(ye),r&&o(U),r&&o(te),r&&o(C),r&&o(Fe),r&&o(K),r&&o(H),r&&o(ne),r&&o(be),r&&o(se),x(S),r&&o(ve),r&&o(P),x(de),x(Ie),r&&o(we),r&&o(De),x(Fs),r&&o(th),r&&o(Ze),x(bs),x($n),x($s),x(Rs),x(Ms),x(Rn),x(js),r&&o(nh),r&&o(Et),x(zs),r&&o(rh),r&&o(lo),x(Cs),x(jn),x(As),r&&o(sh),r&&o(Mt),x(Os),r&&o(ah),r&&o(ko),x(Ds),x(Us),x(Cn),x(qn),r&&o(ih),r&&o(zt),x(Ks),r&&o(lh),r&&o(at),x(Bs),x(Hs),x(An),x(Ln),r&&o(dh),r&&o(Pt),x(Vs),r&&o(ch),r&&o(it),x(Js),x(Xs),x(Dn),x(In),x(Nn),r&&o(ph),r&&o(Ot),x(Ys),r&&o(mh),r&&o(Lo),x(Zs),x(ta),x(Wn),x(Un),x(Kn),x(Bn),x(Qn),r&&o(hh),r&&o(It),x(na),r&&o(fh),r&&o(Oo),x(ra),x(ia),x(Vn),x(Jn),r&&o(uh),r&&o(St),x(la),r&&o(gh),r&&o(Do),x(da),x(ma),x(Xn),x(Yn),x(Zn),r&&o(_h),r&&o(Ut),x(ha),r&&o(kh),r&&o(Io),x(fa),x(_a),x(or),x(tr),x(nr),r&&o(yh),r&&o(Qt),x(ka),r&&o(Fh),r&&o(po),x(ya),x(sr),x(wa),x(ar),x(ir),r&&o(bh),r&&o(Vt),x(Ta),r&&o(vh),r&&o(mo),x($a),x(dr),x(ja),x(cr),x(pr),x(mr),r&&o(wh),r&&o(Gt),x(za),r&&o(Th),r&&o(ho),x(Ca),x(fr),x(Oa),x(ur),r&&o($h),r&&o(Xt),x(Da),r&&o(xh),r&&o(fo),x(Ia),x(_r),x(Ua),x(kr),x(yr),x(Fr),r&&o(Rh),r&&o(Zt),x(Ka),r&&o(Eh),r&&o(uo),x(Ba),x(vr),x(Ja),x(wr),x(Tr),r&&o(Mh),r&&o(on),x(Ga),r&&o(jh),r&&o(go),x(Xa),x(xr),x(oi),x(Rr),x(Er),x(Mr),r&&o(zh),r&&o(nn),x(ti),r&&o(Ch),r&&o(_o),x(ni),x(zr),x(ii),x(Cr),x(qr),x(Pr),r&&o(qh),r&&o(an),x(li),r&&o(Ph),r&&o(eo),x(di),x(_i),x(Lr),x(Or),r&&o(Ah),r&&o(dn),x(ki),r&&o(Lh),r&&o(oo),x(yi),x(Ei),x(Ir),x(Nr),r&&o(Oh),r&&o(pn),x(Mi),r&&o(Dh),r&&o(to),x(ji),x(Di),x(Wr),x(Ur),r&&o(Ih),r&&o(hn),x(Ii),r&&o(Nh),r&&o(no),x(Ni),x(Vi),x(Br),x(Qr),r&&o(Sh),r&&o(un),x(Ji),r&&o(Wh),r&&o(ro),x(Gi),x(rl),x(Vr),x(Jr),r&&o(Uh),r&&o(_n),x(sl),r&&o(Kh),r&&o(so),x(al),x(fl),x(Xr),x(Yr)}}}const GR={local:"roformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.RoFormerConfig",title:"RoFormerConfig"},{local:"transformers.RoFormerTokenizer",title:"RoFormerTokenizer"},{local:"transformers.RoFormerTokenizerFast",title:"RoFormerTokenizerFast"},{local:"transformers.RoFormerModel",title:"RoFormerModel"},{local:"transformers.RoFormerForCausalLM",title:"RoFormerForCausalLM"},{local:"transformers.RoFormerForMaskedLM",title:"RoFormerForMaskedLM"},{local:"transformers.RoFormerForSequenceClassification",title:"RoFormerForSequenceClassification"},{local:"transformers.RoFormerForMultipleChoice",title:"RoFormerForMultipleChoice"},{local:"transformers.RoFormerForTokenClassification",title:"RoFormerForTokenClassification"},{local:"transformers.RoFormerForQuestionAnswering",title:"RoFormerForQuestionAnswering"},{local:"transformers.TFRoFormerModel",title:"TFRoFormerModel"},{local:"transformers.TFRoFormerForMaskedLM",title:"TFRoFormerForMaskedLM"},{local:"transformers.TFRoFormerForCausalLM",title:"TFRoFormerForCausalLM"},{local:"transformers.TFRoFormerForSequenceClassification",title:"TFRoFormerForSequenceClassification"},{local:"transformers.TFRoFormerForMultipleChoice",title:"TFRoFormerForMultipleChoice"},{local:"transformers.TFRoFormerForTokenClassification",title:"TFRoFormerForTokenClassification"},{local:"transformers.TFRoFormerForQuestionAnswering",title:"TFRoFormerForQuestionAnswering"},{local:"transformers.FlaxRoFormerModel",title:"FlaxRoFormerModel"},{local:"transformers.FlaxRoFormerForMaskedLM",title:"FlaxRoFormerForMaskedLM"},{local:"transformers.FlaxRoFormerForSequenceClassification",title:"FlaxRoFormerForSequenceClassification"},{local:"transformers.FlaxRoFormerForMultipleChoice",title:"FlaxRoFormerForMultipleChoice"},{local:"transformers.FlaxRoFormerForTokenClassification",title:"FlaxRoFormerForTokenClassification"},{local:"transformers.FlaxRoFormerForQuestionAnswering",title:"FlaxRoFormerForQuestionAnswering"}],title:"RoFormer"};function XR(E){return Wx(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class rE extends Dx{constructor(d){super();Ix(this,d,XR,JR,Nx,{})}}export{rE as default,GR as metadata};
