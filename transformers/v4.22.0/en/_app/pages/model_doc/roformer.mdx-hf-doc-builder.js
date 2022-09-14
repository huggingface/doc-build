import{S as D4,i as I4,s as N4,e as r,k as m,w as y,t,M as S4,c as a,d as o,m as h,a as i,x as b,h as n,b as u,G as e,g as _,y as w,q as T,o as $,B as x,v as W4,L as pe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Qe}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as me}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as He}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function U4(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerModel, RoFormerConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function K4(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
tokenizer.tokenize("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>)
<span class="hljs-comment"># [&#x27;\u4ECA&#x27;, &#x27;\u5929&#x27;, &#x27;\u5929&#x27;, &#x27;\u6C14&#x27;, &#x27;\u975E\u5E38&#x27;, &#x27;\u597D&#x27;, &#x27;\u3002&#x27;]</span>`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Q4(E){let d,g,c,f,k;return f=new me({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=t("sequence pair mask has the following format:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"sequence pair mask has the following format:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function H4(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizerFast

tokenizer = RoFormerTokenizerFast.from_pretrained("junnyu/roformer_chinese_base")
tokenizer.tokenize("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizerFast.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>)
<span class="hljs-comment"># [&#x27;\u4ECA&#x27;, &#x27;\u5929&#x27;, &#x27;\u5929&#x27;, &#x27;\u6C14&#x27;, &#x27;\u975E\u5E38&#x27;, &#x27;\u597D&#x27;, &#x27;\u3002&#x27;]</span>`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function V4(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function B4(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, RoFormerModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function J4(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function G4(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, RoFormerForCausalLM, RoFormerConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function X4(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function Y4(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, RoFormerForMaskedLM
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
`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Z4(E){let d,g;return d=new me({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function ex(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function ox(E){let d,g,c,f,k;return f=new me({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=t("Example of single-label classification:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example of single-label classification:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function tx(E){let d,g;return d=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function nx(E){let d,g,c,f,k;return f=new me({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=t("Example of multi-label classification:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example of multi-label classification:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function sx(E){let d,g;return d=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function rx(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function ax(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, RoFormerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function ix(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function lx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, RoFormerForTokenClassification
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
`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function dx(E){let d,g;return d=new me({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function cx(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function px(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, RoFormerForQuestionAnswering
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
`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function mx(E){let d,g;return d=new me({props:{code:`# target is "nice puppet"
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
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function hx(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,H,xe,_e,N,Re,ie,B,Ee,ke,W,Me,ve,U,he,je,te,C,A,Fe,K,fe,ze,V,ne,Ce,q,qe,J,le,Pe,G,ye,re,O,ue,S,Ae,oe,L,be,P,de,Le;return{c(){d=r("p"),g=t("TensorFlow models and layers in "),c=r("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=r("ul"),j=r("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=r("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=r("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r("code"),Ee=t("fit()"),ke=t(" and "),W=r("code"),Me=t("predict()"),ve=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=r("ul"),A=r("li"),Fe=t("a single Tensor with "),K=r("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),V=r("code"),ne=t("model(input_ids)"),Ce=m(),q=r("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=r("code"),ye=t("model([input_ids, attention_mask, token_type_ids])"),re=m(),O=r("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=r("p"),be=t(`Note that when creating models and layers with
`),P=r("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(F){d=a(F,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(F),p=a(F,"UL",{});var se=i(p);j=a(se,"LI",{});var Ve=i(j);Te=n(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(o),ge=h(se),I=a(se,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),se.forEach(o),ee=h(F),R=a(F,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(z,"CODE",{});var Be=i(H);xe=n(Be,"model.fit()"),Be.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a(z,"CODE",{});var Oe=i(B);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ve=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(F),C=a(F,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);Fe=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),V=a(X,"CODE",{});var Xe=i(V);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);ye=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),re=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(F),L=a(F,"P",{});var Z=i(L);be=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(F,M){_(F,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(F,l,M),_(F,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(F,ee,M),_(F,R,M),e(R,$e),e(R,H),e(H,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,B),e(B,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ve),e(R,U),e(U,he),e(R,je),_(F,te,M),_(F,C,M),e(C,A),e(A,Fe),e(A,K),e(K,fe),e(A,ze),e(A,V),e(V,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,ye),e(C,re),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(F,oe,M),_(F,L,M),e(L,be),e(L,P),e(P,de),e(L,Le)},d(F){F&&o(d),F&&o(l),F&&o(p),F&&o(ee),F&&o(R),F&&o(te),F&&o(C),F&&o(oe),F&&o(L)}}}function fx(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function ux(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function gx(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,H,xe,_e,N,Re,ie,B,Ee,ke,W,Me,ve,U,he,je,te,C,A,Fe,K,fe,ze,V,ne,Ce,q,qe,J,le,Pe,G,ye,re,O,ue,S,Ae,oe,L,be,P,de,Le;return{c(){d=r("p"),g=t("TensorFlow models and layers in "),c=r("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=r("ul"),j=r("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=r("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=r("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r("code"),Ee=t("fit()"),ke=t(" and "),W=r("code"),Me=t("predict()"),ve=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=r("ul"),A=r("li"),Fe=t("a single Tensor with "),K=r("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),V=r("code"),ne=t("model(input_ids)"),Ce=m(),q=r("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=r("code"),ye=t("model([input_ids, attention_mask, token_type_ids])"),re=m(),O=r("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=r("p"),be=t(`Note that when creating models and layers with
`),P=r("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(F){d=a(F,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(F),p=a(F,"UL",{});var se=i(p);j=a(se,"LI",{});var Ve=i(j);Te=n(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(o),ge=h(se),I=a(se,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),se.forEach(o),ee=h(F),R=a(F,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(z,"CODE",{});var Be=i(H);xe=n(Be,"model.fit()"),Be.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a(z,"CODE",{});var Oe=i(B);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ve=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(F),C=a(F,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);Fe=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),V=a(X,"CODE",{});var Xe=i(V);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);ye=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),re=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(F),L=a(F,"P",{});var Z=i(L);be=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(F,M){_(F,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(F,l,M),_(F,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(F,ee,M),_(F,R,M),e(R,$e),e(R,H),e(H,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,B),e(B,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ve),e(R,U),e(U,he),e(R,je),_(F,te,M),_(F,C,M),e(C,A),e(A,Fe),e(A,K),e(K,fe),e(A,ze),e(A,V),e(V,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,ye),e(C,re),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(F,oe,M),_(F,L,M),e(L,be),e(L,P),e(P,de),e(L,Le)},d(F){F&&o(d),F&&o(l),F&&o(p),F&&o(ee),F&&o(R),F&&o(te),F&&o(C),F&&o(oe),F&&o(L)}}}function _x(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function kx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForMaskedLM
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
`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function vx(E){let d,g;return d=new me({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function Fx(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,H,xe,_e,N,Re,ie,B,Ee,ke,W,Me,ve,U,he,je,te,C,A,Fe,K,fe,ze,V,ne,Ce,q,qe,J,le,Pe,G,ye,re,O,ue,S,Ae,oe,L,be,P,de,Le;return{c(){d=r("p"),g=t("TensorFlow models and layers in "),c=r("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=r("ul"),j=r("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=r("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=r("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r("code"),Ee=t("fit()"),ke=t(" and "),W=r("code"),Me=t("predict()"),ve=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=r("ul"),A=r("li"),Fe=t("a single Tensor with "),K=r("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),V=r("code"),ne=t("model(input_ids)"),Ce=m(),q=r("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=r("code"),ye=t("model([input_ids, attention_mask, token_type_ids])"),re=m(),O=r("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=r("p"),be=t(`Note that when creating models and layers with
`),P=r("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(F){d=a(F,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(F),p=a(F,"UL",{});var se=i(p);j=a(se,"LI",{});var Ve=i(j);Te=n(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(o),ge=h(se),I=a(se,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),se.forEach(o),ee=h(F),R=a(F,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(z,"CODE",{});var Be=i(H);xe=n(Be,"model.fit()"),Be.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a(z,"CODE",{});var Oe=i(B);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ve=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(F),C=a(F,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);Fe=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),V=a(X,"CODE",{});var Xe=i(V);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);ye=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),re=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(F),L=a(F,"P",{});var Z=i(L);be=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(F,M){_(F,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(F,l,M),_(F,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(F,ee,M),_(F,R,M),e(R,$e),e(R,H),e(H,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,B),e(B,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ve),e(R,U),e(U,he),e(R,je),_(F,te,M),_(F,C,M),e(C,A),e(A,Fe),e(A,K),e(K,fe),e(A,ze),e(A,V),e(V,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,ye),e(C,re),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(F,oe,M),_(F,L,M),e(L,be),e(L,P),e(P,de),e(L,Le)},d(F){F&&o(d),F&&o(l),F&&o(p),F&&o(ee),F&&o(R),F&&o(te),F&&o(C),F&&o(oe),F&&o(L)}}}function yx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function bx(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,H,xe,_e,N,Re,ie,B,Ee,ke,W,Me,ve,U,he,je,te,C,A,Fe,K,fe,ze,V,ne,Ce,q,qe,J,le,Pe,G,ye,re,O,ue,S,Ae,oe,L,be,P,de,Le;return{c(){d=r("p"),g=t("TensorFlow models and layers in "),c=r("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=r("ul"),j=r("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=r("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=r("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r("code"),Ee=t("fit()"),ke=t(" and "),W=r("code"),Me=t("predict()"),ve=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=r("ul"),A=r("li"),Fe=t("a single Tensor with "),K=r("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),V=r("code"),ne=t("model(input_ids)"),Ce=m(),q=r("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=r("code"),ye=t("model([input_ids, attention_mask, token_type_ids])"),re=m(),O=r("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=r("p"),be=t(`Note that when creating models and layers with
`),P=r("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(F){d=a(F,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(F),p=a(F,"UL",{});var se=i(p);j=a(se,"LI",{});var Ve=i(j);Te=n(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(o),ge=h(se),I=a(se,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),se.forEach(o),ee=h(F),R=a(F,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(z,"CODE",{});var Be=i(H);xe=n(Be,"model.fit()"),Be.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a(z,"CODE",{});var Oe=i(B);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ve=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(F),C=a(F,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);Fe=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),V=a(X,"CODE",{});var Xe=i(V);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);ye=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),re=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(F),L=a(F,"P",{});var Z=i(L);be=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(F,M){_(F,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(F,l,M),_(F,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(F,ee,M),_(F,R,M),e(R,$e),e(R,H),e(H,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,B),e(B,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ve),e(R,U),e(U,he),e(R,je),_(F,te,M),_(F,C,M),e(C,A),e(A,Fe),e(A,K),e(K,fe),e(A,ze),e(A,V),e(V,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,ye),e(C,re),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(F,oe,M),_(F,L,M),e(L,be),e(L,P),e(P,de),e(L,Le)},d(F){F&&o(d),F&&o(l),F&&o(p),F&&o(ee),F&&o(R),F&&o(te),F&&o(C),F&&o(oe),F&&o(L)}}}function wx(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function Tx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForSequenceClassification
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
`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function $x(E){let d,g;return d=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function xx(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,H,xe,_e,N,Re,ie,B,Ee,ke,W,Me,ve,U,he,je,te,C,A,Fe,K,fe,ze,V,ne,Ce,q,qe,J,le,Pe,G,ye,re,O,ue,S,Ae,oe,L,be,P,de,Le;return{c(){d=r("p"),g=t("TensorFlow models and layers in "),c=r("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=r("ul"),j=r("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=r("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=r("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r("code"),Ee=t("fit()"),ke=t(" and "),W=r("code"),Me=t("predict()"),ve=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=r("ul"),A=r("li"),Fe=t("a single Tensor with "),K=r("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),V=r("code"),ne=t("model(input_ids)"),Ce=m(),q=r("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=r("code"),ye=t("model([input_ids, attention_mask, token_type_ids])"),re=m(),O=r("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=r("p"),be=t(`Note that when creating models and layers with
`),P=r("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(F){d=a(F,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(F),p=a(F,"UL",{});var se=i(p);j=a(se,"LI",{});var Ve=i(j);Te=n(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(o),ge=h(se),I=a(se,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),se.forEach(o),ee=h(F),R=a(F,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(z,"CODE",{});var Be=i(H);xe=n(Be,"model.fit()"),Be.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a(z,"CODE",{});var Oe=i(B);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ve=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(F),C=a(F,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);Fe=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),V=a(X,"CODE",{});var Xe=i(V);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);ye=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),re=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(F),L=a(F,"P",{});var Z=i(L);be=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(F,M){_(F,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(F,l,M),_(F,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(F,ee,M),_(F,R,M),e(R,$e),e(R,H),e(H,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,B),e(B,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ve),e(R,U),e(U,he),e(R,je),_(F,te,M),_(F,C,M),e(C,A),e(A,Fe),e(A,K),e(K,fe),e(A,ze),e(A,V),e(V,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,ye),e(C,re),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(F,oe,M),_(F,L,M),e(L,be),e(L,P),e(P,de),e(L,Le)},d(F){F&&o(d),F&&o(l),F&&o(p),F&&o(ee),F&&o(R),F&&o(te),F&&o(C),F&&o(oe),F&&o(L)}}}function Rx(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function Ex(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Mx(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,H,xe,_e,N,Re,ie,B,Ee,ke,W,Me,ve,U,he,je,te,C,A,Fe,K,fe,ze,V,ne,Ce,q,qe,J,le,Pe,G,ye,re,O,ue,S,Ae,oe,L,be,P,de,Le;return{c(){d=r("p"),g=t("TensorFlow models and layers in "),c=r("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=r("ul"),j=r("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=r("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=r("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r("code"),Ee=t("fit()"),ke=t(" and "),W=r("code"),Me=t("predict()"),ve=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=r("ul"),A=r("li"),Fe=t("a single Tensor with "),K=r("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),V=r("code"),ne=t("model(input_ids)"),Ce=m(),q=r("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=r("code"),ye=t("model([input_ids, attention_mask, token_type_ids])"),re=m(),O=r("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=r("p"),be=t(`Note that when creating models and layers with
`),P=r("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(F){d=a(F,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(F),p=a(F,"UL",{});var se=i(p);j=a(se,"LI",{});var Ve=i(j);Te=n(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(o),ge=h(se),I=a(se,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),se.forEach(o),ee=h(F),R=a(F,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(z,"CODE",{});var Be=i(H);xe=n(Be,"model.fit()"),Be.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a(z,"CODE",{});var Oe=i(B);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ve=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(F),C=a(F,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);Fe=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),V=a(X,"CODE",{});var Xe=i(V);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);ye=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),re=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(F),L=a(F,"P",{});var Z=i(L);be=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(F,M){_(F,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(F,l,M),_(F,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(F,ee,M),_(F,R,M),e(R,$e),e(R,H),e(H,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,B),e(B,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ve),e(R,U),e(U,he),e(R,je),_(F,te,M),_(F,C,M),e(C,A),e(A,Fe),e(A,K),e(K,fe),e(A,ze),e(A,V),e(V,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,ye),e(C,re),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(F,oe,M),_(F,L,M),e(L,be),e(L,P),e(P,de),e(L,Le)},d(F){F&&o(d),F&&o(l),F&&o(p),F&&o(ee),F&&o(R),F&&o(te),F&&o(C),F&&o(oe),F&&o(L)}}}function jx(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function zx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForTokenClassification
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
`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Cx(E){let d,g;return d=new me({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function qx(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,H,xe,_e,N,Re,ie,B,Ee,ke,W,Me,ve,U,he,je,te,C,A,Fe,K,fe,ze,V,ne,Ce,q,qe,J,le,Pe,G,ye,re,O,ue,S,Ae,oe,L,be,P,de,Le;return{c(){d=r("p"),g=t("TensorFlow models and layers in "),c=r("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=r("ul"),j=r("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=r("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=r("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r("code"),Ee=t("fit()"),ke=t(" and "),W=r("code"),Me=t("predict()"),ve=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=r("ul"),A=r("li"),Fe=t("a single Tensor with "),K=r("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),V=r("code"),ne=t("model(input_ids)"),Ce=m(),q=r("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=r("code"),ye=t("model([input_ids, attention_mask, token_type_ids])"),re=m(),O=r("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=r("p"),be=t(`Note that when creating models and layers with
`),P=r("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(F){d=a(F,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(F),p=a(F,"UL",{});var se=i(p);j=a(se,"LI",{});var Ve=i(j);Te=n(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(o),ge=h(se),I=a(se,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),se.forEach(o),ee=h(F),R=a(F,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(z,"CODE",{});var Be=i(H);xe=n(Be,"model.fit()"),Be.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a(z,"CODE",{});var Oe=i(B);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ve=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(F),C=a(F,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);Fe=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),V=a(X,"CODE",{});var Xe=i(V);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);ye=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),re=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(F),L=a(F,"P",{});var Z=i(L);be=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(F,M){_(F,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(F,l,M),_(F,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(F,ee,M),_(F,R,M),e(R,$e),e(R,H),e(H,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,B),e(B,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ve),e(R,U),e(U,he),e(R,je),_(F,te,M),_(F,C,M),e(C,A),e(A,Fe),e(A,K),e(K,fe),e(A,ze),e(A,V),e(V,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,ye),e(C,re),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(F,oe,M),_(F,L,M),e(L,be),e(L,P),e(P,de),e(L,Le)},d(F){F&&o(d),F&&o(l),F&&o(p),F&&o(ee),F&&o(R),F&&o(te),F&&o(C),F&&o(oe),F&&o(L)}}}function Px(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function Ax(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForQuestionAnswering
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
`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Lx(E){let d,g;return d=new me({props:{code:`# target is "nice puppet"
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
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function Ox(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function Dx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerModel

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerModel.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerModel.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Ix(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function Nx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForMaskedLM

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForMaskedLM.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Sx(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function Wx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForSequenceClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Ux(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function Kx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Qx(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function Hx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForTokenClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForTokenClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Vx(E){let d,g,c,f,k;return{c(){d=r("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function Bx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),g=t("Example:"),c=m(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Jx(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,H,xe,_e,N,Re,ie,B,Ee,ke,W,Me,ve,U,he,je,te,C,A,Fe,K,fe,ze,V,ne,Ce,q,qe,J,le,Pe,G,ye,re,O,ue,S,Ae,oe,L,be,P,de,Le,F,M,Se,se,Ve,Ne,z,Be,Je,Oe,Ge,We,D,X,Ue,Xe,Y,Ye,Ie,we,De,Z,Ke,Fr,Xf,Od,Yf,th,Ze,yr,Zf,br,eu,wr,ou,tu,nu,Tr,su,xl,ru,au,iu,$n,lu,gt,$r,du,Dd,cu,pu,xr,Rl,mu,Id,hu,fu,El,uu,Nd,gu,_u,xn,Rr,ku,Er,vu,Sd,Fu,yu,bu,No,Mr,wu,Wd,Tu,$u,Rn,xu,Rt,Ru,Ud,Eu,Mu,Kd,ju,zu,Cu,Ml,jr,nh,Et,En,Qd,zr,qu,Hd,Pu,sh,lo,Cr,Au,qr,Lu,Vd,Ou,Du,Iu,Mn,jl,Nu,Su,zl,Wu,Uu,Ku,Pr,Qu,Cl,Hu,Vu,Bu,jn,Ju,_t,Ar,Gu,Bd,Xu,Yu,Lr,ql,Zu,Jd,eg,og,Pl,tg,Gd,ng,rh,Mt,zn,Xd,Or,sg,Yd,rg,ah,ko,Dr,ag,Ir,ig,Nr,lg,dg,cg,Sr,pg,Wr,mg,hg,fg,co,ug,Zd,gg,_g,ec,kg,vg,oc,Fg,yg,tc,bg,wg,nc,Tg,$g,sc,xg,Rg,Eg,So,Ur,Mg,jt,jg,Al,zg,Cg,rc,qg,Pg,Ag,Cn,Lg,qn,ih,zt,Pn,ac,Kr,Og,ic,Dg,lh,at,Qr,Ig,Ct,Ng,lc,Sg,Wg,Hr,Ug,Kg,Qg,Wo,Vr,Hg,qt,Vg,Ll,Bg,Jg,dc,Gg,Xg,Yg,An,Zg,Ln,dh,Pt,On,cc,Br,e_,pc,o_,ch,it,Jr,t_,At,n_,mc,s_,r_,Gr,a_,i_,l_,yo,Xr,d_,Lt,c_,Ol,p_,m_,hc,h_,f_,u_,Dn,g_,In,__,Nn,ph,Ot,Sn,fc,Yr,k_,uc,v_,mh,Lo,Zr,F_,gc,y_,b_,ea,w_,oa,T_,$_,x_,io,ta,R_,Dt,E_,Dl,M_,j_,_c,z_,C_,q_,Wn,P_,Un,A_,Kn,L_,Qn,O_,Hn,hh,It,Vn,kc,na,D_,vc,I_,fh,Oo,sa,N_,Fc,S_,W_,ra,U_,aa,K_,Q_,H_,Uo,ia,V_,Nt,B_,Il,J_,G_,yc,X_,Y_,Z_,Bn,ek,Jn,uh,St,Gn,bc,la,ok,wc,tk,gh,Do,da,nk,Tc,sk,rk,ca,ak,pa,ik,lk,dk,bo,ma,ck,Wt,pk,Nl,mk,hk,$c,fk,uk,gk,Xn,_k,Yn,kk,Zn,_h,Ut,es,xc,ha,vk,Rc,Fk,kh,Io,fa,yk,Kt,bk,Ec,wk,Tk,Mc,$k,xk,Rk,ua,Ek,ga,Mk,jk,zk,wo,_a,Ck,Qt,qk,Sl,Pk,Ak,jc,Lk,Ok,Dk,os,Ik,ts,Nk,ns,vh,Ht,ss,zc,ka,Sk,Cc,Wk,Fh,po,va,Uk,qc,Kk,Qk,Fa,Hk,Wl,Vk,Bk,Jk,ya,Gk,ba,Xk,Yk,Zk,rs,ev,Ko,wa,ov,Vt,tv,Ul,nv,sv,Pc,rv,av,iv,as,lv,is,yh,Bt,ls,Ac,Ta,dv,Lc,cv,bh,mo,$a,pv,xa,mv,Oc,hv,fv,uv,Ra,gv,Kl,_v,kv,vv,Ea,Fv,Ma,yv,bv,wv,ds,Tv,To,ja,$v,Jt,xv,Ql,Rv,Ev,Dc,Mv,jv,zv,cs,Cv,ps,qv,ms,wh,Gt,hs,Ic,za,Pv,Nc,Av,Th,ho,Ca,Lv,qa,Ov,Sc,Dv,Iv,Nv,Pa,Sv,Hl,Wv,Uv,Kv,Aa,Qv,La,Hv,Vv,Bv,fs,Jv,kt,Oa,Gv,vo,Xv,Wc,Yv,Zv,Uc,eF,oF,Kc,tF,nF,Qc,sF,rF,Hc,aF,iF,lF,us,$h,Xt,gs,Vc,Da,dF,Bc,cF,xh,fo,Ia,pF,Jc,mF,hF,Na,fF,Vl,uF,gF,_F,Sa,kF,Wa,vF,FF,yF,_s,bF,$o,Ua,wF,Yt,TF,Bl,$F,xF,Gc,RF,EF,MF,ks,jF,vs,zF,Fs,Rh,Zt,ys,Xc,Ka,CF,Yc,qF,Eh,uo,Qa,PF,Zc,AF,LF,Ha,OF,Jl,DF,IF,NF,Va,SF,Ba,WF,UF,KF,bs,QF,Qo,Ja,HF,en,VF,Gl,BF,JF,ep,GF,XF,YF,ws,ZF,Ts,Mh,on,$s,op,Ga,ey,tp,oy,jh,go,Xa,ty,np,ny,sy,Ya,ry,Xl,ay,iy,ly,Za,dy,ei,cy,py,my,xs,hy,xo,oi,fy,tn,uy,Yl,gy,_y,sp,ky,vy,Fy,Rs,yy,Es,by,Ms,zh,nn,js,rp,ti,wy,ap,Ty,Ch,_o,ni,$y,sn,xy,ip,Ry,Ey,lp,My,jy,zy,si,Cy,Zl,qy,Py,Ay,ri,Ly,ai,Oy,Dy,Iy,zs,Ny,Ro,ii,Sy,rn,Wy,ed,Uy,Ky,dp,Qy,Hy,Vy,Cs,By,qs,Jy,Ps,qh,an,As,cp,li,Gy,pp,Xy,Ph,eo,di,Yy,mp,Zy,eb,ci,ob,od,tb,nb,sb,pi,rb,mi,ab,ib,lb,hp,db,cb,lt,fp,hi,pb,mb,up,fi,hb,fb,gp,ui,ub,gb,_p,gi,_b,kb,Ho,_i,vb,ln,Fb,kp,yb,bb,vp,wb,Tb,$b,Ls,xb,Os,Ah,dn,Ds,Fp,ki,Rb,yp,Eb,Lh,oo,vi,Mb,Fi,jb,bp,zb,Cb,qb,yi,Pb,td,Ab,Lb,Ob,bi,Db,wi,Ib,Nb,Sb,wp,Wb,Ub,dt,Tp,Ti,Kb,Qb,$p,$i,Hb,Vb,xp,xi,Bb,Jb,Rp,Ri,Gb,Xb,Vo,Ei,Yb,cn,Zb,Ep,e2,o2,Mp,t2,n2,s2,Is,r2,Ns,Oh,pn,Ss,jp,Mi,a2,zp,i2,Dh,to,ji,l2,Cp,d2,c2,zi,p2,nd,m2,h2,f2,Ci,u2,qi,g2,_2,k2,qp,v2,F2,ct,Pp,Pi,y2,b2,Ap,Ai,w2,T2,Lp,Li,$2,x2,Op,Oi,R2,E2,Bo,Di,M2,mn,j2,Dp,z2,C2,Ip,q2,P2,A2,Ws,L2,Us,Ih,hn,Ks,Np,Ii,O2,Sp,D2,Nh,no,Ni,I2,Wp,N2,S2,Si,W2,sd,U2,K2,Q2,Wi,H2,Ui,V2,B2,J2,Up,G2,X2,pt,Kp,Ki,Y2,Z2,Qp,Qi,ew,ow,Hp,Hi,tw,nw,Vp,Vi,sw,rw,Jo,Bi,aw,fn,iw,Bp,lw,dw,Jp,cw,pw,mw,Qs,hw,Hs,Sh,un,Vs,Gp,Ji,fw,Xp,uw,Wh,so,Gi,gw,Yp,_w,kw,Xi,vw,rd,Fw,yw,bw,Yi,ww,Zi,Tw,$w,xw,Zp,Rw,Ew,mt,em,el,Mw,jw,om,ol,zw,Cw,tm,tl,qw,Pw,nm,nl,Aw,Lw,Go,sl,Ow,gn,Dw,sm,Iw,Nw,rm,Sw,Ww,Uw,Bs,Kw,Js,Uh,_n,Gs,am,rl,Qw,im,Hw,Kh,ro,al,Vw,kn,Bw,lm,Jw,Gw,dm,Xw,Yw,Zw,il,eT,ad,oT,tT,nT,ll,sT,dl,rT,aT,iT,cm,lT,dT,ht,pm,cl,cT,pT,mm,pl,mT,hT,hm,ml,fT,uT,fm,hl,gT,_T,Xo,fl,kT,vn,vT,um,FT,yT,gm,bT,wT,TT,Xs,$T,Ys,Qh;return l=new He({}),R=new He({}),S=new He({}),de=new Q({props:{name:"class transformers.RoFormerConfig",anchor:"transformers.RoFormerConfig",parameters:[{name:"vocab_size",val:" = 50000"},{name:"embedding_size",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1536"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"rotary_value",val:" = False"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50000) &#x2014;
Vocabulary size of the RoFormer model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerModel">RoFormerModel</a> or <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.TFRoFormerModel">TFRoFormerModel</a>.`,name:"vocab_size"},{anchor:"transformers.RoFormerConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerModel">RoFormerModel</a> or <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.TFRoFormerModel">TFRoFormerModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RoFormerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RoFormerConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RoFormerConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.RoFormerConfig.rotary_value",description:`<strong>rotary_value</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not apply rotary position embeddings on value layer.`,name:"rotary_value"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/configuration_roformer.py#L46"}}),Ie=new ce({props:{anchor:"transformers.RoFormerConfig.example",$$slots:{default:[U4]},$$scope:{ctx:E}}}),Fr=new He({}),yr=new Q({props:{name:"class transformers.RoFormerTokenizer",anchor:"transformers.RoFormerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/tokenization_roformer.py#L69"}}),$n=new ce({props:{anchor:"transformers.RoFormerTokenizer.example",$$slots:{default:[K4]},$$scope:{ctx:E}}}),$r=new Q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/tokenization_roformer.py#L235",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rr=new Q({props:{name:"get_special_tokens_mask",anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/tokenization_roformer.py#L260",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Mr=new Q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/tokenization_roformer.py#L288",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rn=new ce({props:{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Q4]},$$scope:{ctx:E}}}),jr=new Q({props:{name:"save_vocabulary",anchor:"transformers.RoFormerTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/tokenization_roformer.py#L317"}}),zr=new He({}),Cr=new Q({props:{name:"class transformers.RoFormerTokenizerFast",anchor:"transformers.RoFormerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/tokenization_roformer_fast.py#L71"}}),jn=new ce({props:{anchor:"transformers.RoFormerTokenizerFast.example",$$slots:{default:[H4]},$$scope:{ctx:E}}}),Ar=new Q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/tokenization_roformer_fast.py#L147",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Or=new He({}),Dr=new Q({props:{name:"class transformers.RoFormerModel",anchor:"transformers.RoFormerModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_roformer.py#L789"}}),Ur=new Q({props:{name:"forward",anchor:"transformers.RoFormerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_roformer.py#L829",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cn=new Qe({props:{$$slots:{default:[V4]},$$scope:{ctx:E}}}),qn=new ce({props:{anchor:"transformers.RoFormerModel.forward.example",$$slots:{default:[B4]},$$scope:{ctx:E}}}),Kr=new He({}),Qr=new Q({props:{name:"class transformers.RoFormerForCausalLM",anchor:"transformers.RoFormerForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_roformer.py#L1057"}}),Vr=new Q({props:{name:"forward",anchor:"transformers.RoFormerForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_roformer.py#L1079",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new Qe({props:{$$slots:{default:[J4]},$$scope:{ctx:E}}}),Ln=new ce({props:{anchor:"transformers.RoFormerForCausalLM.forward.example",$$slots:{default:[G4]},$$scope:{ctx:E}}}),Br=new He({}),Jr=new Q({props:{name:"class transformers.RoFormerForMaskedLM",anchor:"transformers.RoFormerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_roformer.py#L956"}}),Xr=new Q({props:{name:"forward",anchor:"transformers.RoFormerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_roformer.py#L978",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dn=new Qe({props:{$$slots:{default:[X4]},$$scope:{ctx:E}}}),In=new ce({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example",$$slots:{default:[Y4]},$$scope:{ctx:E}}}),Nn=new ce({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example-2",$$slots:{default:[Z4]},$$scope:{ctx:E}}}),Yr=new He({}),Zr=new Q({props:{name:"class transformers.RoFormerForSequenceClassification",anchor:"transformers.RoFormerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_roformer.py#L1230"}}),ta=new Q({props:{name:"forward",anchor:"transformers.RoFormerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_roformer.py#L1240",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wn=new Qe({props:{$$slots:{default:[ex]},$$scope:{ctx:E}}}),Un=new ce({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example",$$slots:{default:[ox]},$$scope:{ctx:E}}}),Kn=new ce({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-2",$$slots:{default:[tx]},$$scope:{ctx:E}}}),Qn=new ce({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-3",$$slots:{default:[nx]},$$scope:{ctx:E}}}),Hn=new ce({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-4",$$slots:{default:[sx]},$$scope:{ctx:E}}}),na=new He({}),sa=new Q({props:{name:"class transformers.RoFormerForMultipleChoice",anchor:"transformers.RoFormerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_roformer.py#L1322"}}),ia=new Q({props:{name:"forward",anchor:"transformers.RoFormerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_roformer.py#L1333",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bn=new Qe({props:{$$slots:{default:[rx]},$$scope:{ctx:E}}}),Jn=new ce({props:{anchor:"transformers.RoFormerForMultipleChoice.forward.example",$$slots:{default:[ax]},$$scope:{ctx:E}}}),la=new He({}),da=new Q({props:{name:"class transformers.RoFormerForTokenClassification",anchor:"transformers.RoFormerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_roformer.py#L1414"}}),ma=new Q({props:{name:"forward",anchor:"transformers.RoFormerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_roformer.py#L1426",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new Qe({props:{$$slots:{default:[ix]},$$scope:{ctx:E}}}),Yn=new ce({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example",$$slots:{default:[lx]},$$scope:{ctx:E}}}),Zn=new ce({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example-2",$$slots:{default:[dx]},$$scope:{ctx:E}}}),ha=new He({}),fa=new Q({props:{name:"class transformers.RoFormerForQuestionAnswering",anchor:"transformers.RoFormerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_roformer.py#L1491"}}),_a=new Q({props:{name:"forward",anchor:"transformers.RoFormerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_roformer.py#L1504",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),os=new Qe({props:{$$slots:{default:[cx]},$$scope:{ctx:E}}}),ts=new ce({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example",$$slots:{default:[px]},$$scope:{ctx:E}}}),ns=new ce({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example-2",$$slots:{default:[mx]},$$scope:{ctx:E}}}),ka=new He({}),va=new Q({props:{name:"class transformers.TFRoFormerModel",anchor:"transformers.TFRoFormerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_tf_roformer.py#L799"}}),rs=new Qe({props:{$$slots:{default:[hx]},$$scope:{ctx:E}}}),wa=new Q({props:{name:"call",anchor:"transformers.TFRoFormerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_tf_roformer.py#L805",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),as=new Qe({props:{$$slots:{default:[fx]},$$scope:{ctx:E}}}),is=new ce({props:{anchor:"transformers.TFRoFormerModel.call.example",$$slots:{default:[ux]},$$scope:{ctx:E}}}),Ta=new He({}),$a=new Q({props:{name:"class transformers.TFRoFormerForMaskedLM",anchor:"transformers.TFRoFormerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_tf_roformer.py#L847"}}),ds=new Qe({props:{$$slots:{default:[gx]},$$scope:{ctx:E}}}),ja=new Q({props:{name:"call",anchor:"transformers.TFRoFormerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_tf_roformer.py#L863",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cs=new Qe({props:{$$slots:{default:[_x]},$$scope:{ctx:E}}}),ps=new ce({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example",$$slots:{default:[kx]},$$scope:{ctx:E}}}),ms=new ce({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example-2",$$slots:{default:[vx]},$$scope:{ctx:E}}}),za=new He({}),Ca=new Q({props:{name:"class transformers.TFRoFormerForCausalLM",anchor:"transformers.TFRoFormerForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_tf_roformer.py#L926"}}),fs=new Qe({props:{$$slots:{default:[Fx]},$$scope:{ctx:E}}}),Oa=new Q({props:{name:"call",anchor:"transformers.TFRoFormerForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_tf_roformer.py#L939",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),us=new ce({props:{anchor:"transformers.TFRoFormerForCausalLM.call.example",$$slots:{default:[yx]},$$scope:{ctx:E}}}),Da=new He({}),Ia=new Q({props:{name:"class transformers.TFRoFormerForSequenceClassification",anchor:"transformers.TFRoFormerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_tf_roformer.py#L1039"}}),_s=new Qe({props:{$$slots:{default:[bx]},$$scope:{ctx:E}}}),Ua=new Q({props:{name:"call",anchor:"transformers.TFRoFormerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_tf_roformer.py#L1048",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ks=new Qe({props:{$$slots:{default:[wx]},$$scope:{ctx:E}}}),vs=new ce({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example",$$slots:{default:[Tx]},$$scope:{ctx:E}}}),Fs=new ce({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example-2",$$slots:{default:[$x]},$$scope:{ctx:E}}}),Ka=new He({}),Qa=new Q({props:{name:"class transformers.TFRoFormerForMultipleChoice",anchor:"transformers.TFRoFormerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_tf_roformer.py#L1115"}}),bs=new Qe({props:{$$slots:{default:[xx]},$$scope:{ctx:E}}}),Ja=new Q({props:{name:"call",anchor:"transformers.TFRoFormerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_tf_roformer.py#L1136",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ws=new Qe({props:{$$slots:{default:[Rx]},$$scope:{ctx:E}}}),Ts=new ce({props:{anchor:"transformers.TFRoFormerForMultipleChoice.call.example",$$slots:{default:[Ex]},$$scope:{ctx:E}}}),Ga=new He({}),Xa=new Q({props:{name:"class transformers.TFRoFormerForTokenClassification",anchor:"transformers.TFRoFormerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_tf_roformer.py#L1239"}}),xs=new Qe({props:{$$slots:{default:[Mx]},$$scope:{ctx:E}}}),oi=new Q({props:{name:"call",anchor:"transformers.TFRoFormerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_tf_roformer.py#L1251",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Rs=new Qe({props:{$$slots:{default:[jx]},$$scope:{ctx:E}}}),Es=new ce({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example",$$slots:{default:[zx]},$$scope:{ctx:E}}}),Ms=new ce({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example-2",$$slots:{default:[Cx]},$$scope:{ctx:E}}}),ti=new He({}),ni=new Q({props:{name:"class transformers.TFRoFormerForQuestionAnswering",anchor:"transformers.TFRoFormerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_tf_roformer.py#L1317"}}),zs=new Qe({props:{$$slots:{default:[qx]},$$scope:{ctx:E}}}),ii=new Q({props:{name:"call",anchor:"transformers.TFRoFormerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_tf_roformer.py#L1328",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Cs=new Qe({props:{$$slots:{default:[Px]},$$scope:{ctx:E}}}),qs=new ce({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example",$$slots:{default:[Ax]},$$scope:{ctx:E}}}),Ps=new ce({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example-2",$$slots:{default:[Lx]},$$scope:{ctx:E}}}),li=new He({}),di=new Q({props:{name:"class transformers.FlaxRoFormerModel",anchor:"transformers.FlaxRoFormerModel",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_flax_roformer.py#L749"}}),_i=new Q({props:{name:"__call__",anchor:"transformers.FlaxRoFormerModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ls=new Qe({props:{$$slots:{default:[Ox]},$$scope:{ctx:E}}}),Os=new ce({props:{anchor:"transformers.FlaxRoFormerModel.__call__.example",$$slots:{default:[Dx]},$$scope:{ctx:E}}}),ki=new He({}),vi=new Q({props:{name:"class transformers.FlaxRoFormerForMaskedLM",anchor:"transformers.FlaxRoFormerForMaskedLM",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_flax_roformer.py#L809"}}),Ei=new Q({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Is=new Qe({props:{$$slots:{default:[Ix]},$$scope:{ctx:E}}}),Ns=new ce({props:{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.example",$$slots:{default:[Nx]},$$scope:{ctx:E}}}),Mi=new He({}),ji=new Q({props:{name:"class transformers.FlaxRoFormerForSequenceClassification",anchor:"transformers.FlaxRoFormerForSequenceClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_flax_roformer.py#L874"}}),Di=new Q({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ws=new Qe({props:{$$slots:{default:[Sx]},$$scope:{ctx:E}}}),Us=new ce({props:{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.example",$$slots:{default:[Wx]},$$scope:{ctx:E}}}),Ii=new He({}),Ni=new Q({props:{name:"class transformers.FlaxRoFormerForMultipleChoice",anchor:"transformers.FlaxRoFormerForMultipleChoice",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_flax_roformer.py#L950"}}),Bi=new Q({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qs=new Qe({props:{$$slots:{default:[Ux]},$$scope:{ctx:E}}}),Hs=new ce({props:{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.example",$$slots:{default:[Kx]},$$scope:{ctx:E}}}),Ji=new He({}),Gi=new Q({props:{name:"class transformers.FlaxRoFormerForTokenClassification",anchor:"transformers.FlaxRoFormerForTokenClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_flax_roformer.py#L1019"}}),sl=new Q({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bs=new Qe({props:{$$slots:{default:[Qx]},$$scope:{ctx:E}}}),Js=new ce({props:{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.example",$$slots:{default:[Hx]},$$scope:{ctx:E}}}),rl=new He({}),al=new Q({props:{name:"class transformers.FlaxRoFormerForQuestionAnswering",anchor:"transformers.FlaxRoFormerForQuestionAnswering",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_flax_roformer.py#L1088"}}),fl=new Q({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xs=new Qe({props:{$$slots:{default:[Vx]},$$scope:{ctx:E}}}),Ys=new ce({props:{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.example",$$slots:{default:[Bx]},$$scope:{ctx:E}}}),{c(){d=r("meta"),g=m(),c=r("h1"),f=r("a"),k=r("span"),y(l.$$.fragment),p=m(),j=r("span"),Te=t("RoFormer"),ge=m(),I=r("h2"),ae=r("a"),ee=r("span"),y(R.$$.fragment),$e=m(),H=r("span"),xe=t("Overview"),_e=m(),N=r("p"),Re=t("The RoFormer model was proposed in "),ie=r("a"),B=t("RoFormer: Enhanced Transformer with Rotary Position Embedding"),Ee=t(" by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu."),ke=m(),W=r("p"),Me=t("The abstract from the paper is the following:"),ve=m(),U=r("p"),he=r("em"),je=t(`Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.`),te=m(),C=r("p"),A=t("Tips:"),Fe=m(),K=r("ul"),fe=r("li"),ze=t(`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`),V=m(),ne=r("p"),Ce=t("This model was contributed by "),q=r("a"),qe=t("junnyu"),J=t(". The original code can be found "),le=r("a"),Pe=t("here"),G=t("."),ye=m(),re=r("h2"),O=r("a"),ue=r("span"),y(S.$$.fragment),Ae=m(),oe=r("span"),L=t("RoFormerConfig"),be=m(),P=r("div"),y(de.$$.fragment),Le=m(),F=r("p"),M=t("This is the configuration class to store the configuration of a "),Se=r("a"),se=t("RoFormerModel"),Ve=t(`. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
`),Ne=r("a"),z=t("junnyu/roformer_chinese_base"),Be=t(" architecture."),Je=m(),Oe=r("p"),Ge=t("Configuration objects inherit from "),We=r("a"),D=t("PretrainedConfig"),X=t(` and can be used to control the model outputs. Read the
documentation from `),Ue=r("a"),Xe=t("PretrainedConfig"),Y=t(" for more information."),Ye=m(),y(Ie.$$.fragment),we=m(),De=r("h2"),Z=r("a"),Ke=r("span"),y(Fr.$$.fragment),Xf=m(),Od=r("span"),Yf=t("RoFormerTokenizer"),th=m(),Ze=r("div"),y(yr.$$.fragment),Zf=m(),br=r("p"),eu=t("Construct a RoFormer tokenizer. Based on "),wr=r("a"),ou=t("Rust Jieba"),tu=t("."),nu=m(),Tr=r("p"),su=t("This tokenizer inherits from "),xl=r("a"),ru=t("PreTrainedTokenizer"),au=t(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),iu=m(),y($n.$$.fragment),lu=m(),gt=r("div"),y($r.$$.fragment),du=m(),Dd=r("p"),cu=t(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),pu=m(),xr=r("ul"),Rl=r("li"),mu=t("single sequence: "),Id=r("code"),hu=t("[CLS] X [SEP]"),fu=m(),El=r("li"),uu=t("pair of sequences: "),Nd=r("code"),gu=t("[CLS] A [SEP] B [SEP]"),_u=m(),xn=r("div"),y(Rr.$$.fragment),ku=m(),Er=r("p"),vu=t(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Sd=r("code"),Fu=t("prepare_for_model"),yu=t(" method."),bu=m(),No=r("div"),y(Mr.$$.fragment),wu=m(),Wd=r("p"),Tu=t("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer"),$u=m(),y(Rn.$$.fragment),xu=m(),Rt=r("p"),Ru=t("If "),Ud=r("code"),Eu=t("token_ids_1"),Mu=t(" is "),Kd=r("code"),ju=t("None"),zu=t(", this method only returns the first portion of the mask (0s)."),Cu=m(),Ml=r("div"),y(jr.$$.fragment),nh=m(),Et=r("h2"),En=r("a"),Qd=r("span"),y(zr.$$.fragment),qu=m(),Hd=r("span"),Pu=t("RoFormerTokenizerFast"),sh=m(),lo=r("div"),y(Cr.$$.fragment),Au=m(),qr=r("p"),Lu=t("Construct a \u201Cfast\u201D RoFormer tokenizer (backed by HuggingFace\u2019s "),Vd=r("em"),Ou=t("tokenizers"),Du=t(" library)."),Iu=m(),Mn=r("p"),jl=r("a"),Nu=t("RoFormerTokenizerFast"),Su=t(" is almost identical to "),zl=r("a"),Wu=t("BertTokenizerFast"),Uu=t(` and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`),Ku=m(),Pr=r("p"),Qu=t("This tokenizer inherits from "),Cl=r("a"),Hu=t("PreTrainedTokenizerFast"),Vu=t(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Bu=m(),y(jn.$$.fragment),Ju=m(),_t=r("div"),y(Ar.$$.fragment),Gu=m(),Bd=r("p"),Xu=t(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Yu=m(),Lr=r("ul"),ql=r("li"),Zu=t("single sequence: "),Jd=r("code"),eg=t("[CLS] X [SEP]"),og=m(),Pl=r("li"),tg=t("pair of sequences: "),Gd=r("code"),ng=t("[CLS] A [SEP] B [SEP]"),rh=m(),Mt=r("h2"),zn=r("a"),Xd=r("span"),y(Or.$$.fragment),sg=m(),Yd=r("span"),rg=t("RoFormerModel"),ah=m(),ko=r("div"),y(Dr.$$.fragment),ag=m(),Ir=r("p"),ig=t(`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Nr=r("a"),lg=t("torch.nn.Module"),dg=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cg=m(),Sr=r("p"),pg=t(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Wr=r("a"),mg=t(`Attention is
all you need`),hg=t(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),fg=m(),co=r("p"),ug=t("To behave as an decoder the model needs to be initialized with the "),Zd=r("code"),gg=t("is_decoder"),_g=t(` argument of the configuration set
to `),ec=r("code"),kg=t("True"),vg=t(". To be used in a Seq2Seq model, the model needs to initialized with both "),oc=r("code"),Fg=t("is_decoder"),yg=t(` argument and
`),tc=r("code"),bg=t("add_cross_attention"),wg=t(" set to "),nc=r("code"),Tg=t("True"),$g=t("; an "),sc=r("code"),xg=t("encoder_hidden_states"),Rg=t(" is then expected as an input to the forward pass."),Eg=m(),So=r("div"),y(Ur.$$.fragment),Mg=m(),jt=r("p"),jg=t("The "),Al=r("a"),zg=t("RoFormerModel"),Cg=t(" forward method, overrides the "),rc=r("code"),qg=t("__call__"),Pg=t(" special method."),Ag=m(),y(Cn.$$.fragment),Lg=m(),y(qn.$$.fragment),ih=m(),zt=r("h2"),Pn=r("a"),ac=r("span"),y(Kr.$$.fragment),Og=m(),ic=r("span"),Dg=t("RoFormerForCausalLM"),lh=m(),at=r("div"),y(Qr.$$.fragment),Ig=m(),Ct=r("p"),Ng=t("RoFormer Model with a "),lc=r("code"),Sg=t("language modeling"),Wg=t(` head on top for CLM fine-tuning.
This model is a PyTorch `),Hr=r("a"),Ug=t("torch.nn.Module"),Kg=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qg=m(),Wo=r("div"),y(Vr.$$.fragment),Hg=m(),qt=r("p"),Vg=t("The "),Ll=r("a"),Bg=t("RoFormerForCausalLM"),Jg=t(" forward method, overrides the "),dc=r("code"),Gg=t("__call__"),Xg=t(" special method."),Yg=m(),y(An.$$.fragment),Zg=m(),y(Ln.$$.fragment),dh=m(),Pt=r("h2"),On=r("a"),cc=r("span"),y(Br.$$.fragment),e_=m(),pc=r("span"),o_=t("RoFormerForMaskedLM"),ch=m(),it=r("div"),y(Jr.$$.fragment),t_=m(),At=r("p"),n_=t("RoFormer Model with a "),mc=r("code"),s_=t("language modeling"),r_=t(` head on top.
This model is a PyTorch `),Gr=r("a"),a_=t("torch.nn.Module"),i_=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),l_=m(),yo=r("div"),y(Xr.$$.fragment),d_=m(),Lt=r("p"),c_=t("The "),Ol=r("a"),p_=t("RoFormerForMaskedLM"),m_=t(" forward method, overrides the "),hc=r("code"),h_=t("__call__"),f_=t(" special method."),u_=m(),y(Dn.$$.fragment),g_=m(),y(In.$$.fragment),__=m(),y(Nn.$$.fragment),ph=m(),Ot=r("h2"),Sn=r("a"),fc=r("span"),y(Yr.$$.fragment),k_=m(),uc=r("span"),v_=t("RoFormerForSequenceClassification"),mh=m(),Lo=r("div"),y(Zr.$$.fragment),F_=m(),gc=r("p"),y_=t(`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),b_=m(),ea=r("p"),w_=t("This model is a PyTorch "),oa=r("a"),T_=t("torch.nn.Module"),$_=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),x_=m(),io=r("div"),y(ta.$$.fragment),R_=m(),Dt=r("p"),E_=t("The "),Dl=r("a"),M_=t("RoFormerForSequenceClassification"),j_=t(" forward method, overrides the "),_c=r("code"),z_=t("__call__"),C_=t(" special method."),q_=m(),y(Wn.$$.fragment),P_=m(),y(Un.$$.fragment),A_=m(),y(Kn.$$.fragment),L_=m(),y(Qn.$$.fragment),O_=m(),y(Hn.$$.fragment),hh=m(),It=r("h2"),Vn=r("a"),kc=r("span"),y(na.$$.fragment),D_=m(),vc=r("span"),I_=t("RoFormerForMultipleChoice"),fh=m(),Oo=r("div"),y(sa.$$.fragment),N_=m(),Fc=r("p"),S_=t(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),W_=m(),ra=r("p"),U_=t("This model is a PyTorch "),aa=r("a"),K_=t("torch.nn.Module"),Q_=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),H_=m(),Uo=r("div"),y(ia.$$.fragment),V_=m(),Nt=r("p"),B_=t("The "),Il=r("a"),J_=t("RoFormerForMultipleChoice"),G_=t(" forward method, overrides the "),yc=r("code"),X_=t("__call__"),Y_=t(" special method."),Z_=m(),y(Bn.$$.fragment),ek=m(),y(Jn.$$.fragment),uh=m(),St=r("h2"),Gn=r("a"),bc=r("span"),y(la.$$.fragment),ok=m(),wc=r("span"),tk=t("RoFormerForTokenClassification"),gh=m(),Do=r("div"),y(da.$$.fragment),nk=m(),Tc=r("p"),sk=t(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),rk=m(),ca=r("p"),ak=t("This model is a PyTorch "),pa=r("a"),ik=t("torch.nn.Module"),lk=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dk=m(),bo=r("div"),y(ma.$$.fragment),ck=m(),Wt=r("p"),pk=t("The "),Nl=r("a"),mk=t("RoFormerForTokenClassification"),hk=t(" forward method, overrides the "),$c=r("code"),fk=t("__call__"),uk=t(" special method."),gk=m(),y(Xn.$$.fragment),_k=m(),y(Yn.$$.fragment),kk=m(),y(Zn.$$.fragment),_h=m(),Ut=r("h2"),es=r("a"),xc=r("span"),y(ha.$$.fragment),vk=m(),Rc=r("span"),Fk=t("RoFormerForQuestionAnswering"),kh=m(),Io=r("div"),y(fa.$$.fragment),yk=m(),Kt=r("p"),bk=t(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ec=r("code"),wk=t("span start logits"),Tk=t(" and "),Mc=r("code"),$k=t("span end logits"),xk=t(")."),Rk=m(),ua=r("p"),Ek=t("This model is a PyTorch "),ga=r("a"),Mk=t("torch.nn.Module"),jk=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zk=m(),wo=r("div"),y(_a.$$.fragment),Ck=m(),Qt=r("p"),qk=t("The "),Sl=r("a"),Pk=t("RoFormerForQuestionAnswering"),Ak=t(" forward method, overrides the "),jc=r("code"),Lk=t("__call__"),Ok=t(" special method."),Dk=m(),y(os.$$.fragment),Ik=m(),y(ts.$$.fragment),Nk=m(),y(ns.$$.fragment),vh=m(),Ht=r("h2"),ss=r("a"),zc=r("span"),y(ka.$$.fragment),Sk=m(),Cc=r("span"),Wk=t("TFRoFormerModel"),Fh=m(),po=r("div"),y(va.$$.fragment),Uk=m(),qc=r("p"),Kk=t("The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top."),Qk=m(),Fa=r("p"),Hk=t("This model inherits from "),Wl=r("a"),Vk=t("TFPreTrainedModel"),Bk=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jk=m(),ya=r("p"),Gk=t("This model is also a "),ba=r("a"),Xk=t("tf.keras.Model"),Yk=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zk=m(),y(rs.$$.fragment),ev=m(),Ko=r("div"),y(wa.$$.fragment),ov=m(),Vt=r("p"),tv=t("The "),Ul=r("a"),nv=t("TFRoFormerModel"),sv=t(" forward method, overrides the "),Pc=r("code"),rv=t("__call__"),av=t(" special method."),iv=m(),y(as.$$.fragment),lv=m(),y(is.$$.fragment),yh=m(),Bt=r("h2"),ls=r("a"),Ac=r("span"),y(Ta.$$.fragment),dv=m(),Lc=r("span"),cv=t("TFRoFormerForMaskedLM"),bh=m(),mo=r("div"),y($a.$$.fragment),pv=m(),xa=r("p"),mv=t("RoFormer Model with a "),Oc=r("code"),hv=t("language modeling"),fv=t(" head on top."),uv=m(),Ra=r("p"),gv=t("This model inherits from "),Kl=r("a"),_v=t("TFPreTrainedModel"),kv=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vv=m(),Ea=r("p"),Fv=t("This model is also a "),Ma=r("a"),yv=t("tf.keras.Model"),bv=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wv=m(),y(ds.$$.fragment),Tv=m(),To=r("div"),y(ja.$$.fragment),$v=m(),Jt=r("p"),xv=t("The "),Ql=r("a"),Rv=t("TFRoFormerForMaskedLM"),Ev=t(" forward method, overrides the "),Dc=r("code"),Mv=t("__call__"),jv=t(" special method."),zv=m(),y(cs.$$.fragment),Cv=m(),y(ps.$$.fragment),qv=m(),y(ms.$$.fragment),wh=m(),Gt=r("h2"),hs=r("a"),Ic=r("span"),y(za.$$.fragment),Pv=m(),Nc=r("span"),Av=t("TFRoFormerForCausalLM"),Th=m(),ho=r("div"),y(Ca.$$.fragment),Lv=m(),qa=r("p"),Ov=t("RoFormer Model with a "),Sc=r("code"),Dv=t("language modeling"),Iv=t(" head on top for CLM fine-tuning."),Nv=m(),Pa=r("p"),Sv=t("This model inherits from "),Hl=r("a"),Wv=t("TFPreTrainedModel"),Uv=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kv=m(),Aa=r("p"),Qv=t("This model is also a "),La=r("a"),Hv=t("tf.keras.Model"),Vv=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bv=m(),y(fs.$$.fragment),Jv=m(),kt=r("div"),y(Oa.$$.fragment),Gv=m(),vo=r("p"),Xv=t("labels ("),Wc=r("code"),Yv=t("tf.Tensor"),Zv=t(" or "),Uc=r("code"),eF=t("np.ndarray"),oF=t(" of shape "),Kc=r("code"),tF=t("(batch_size, sequence_length)"),nF=t(", "),Qc=r("em"),sF=t("optional"),rF=t(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Hc=r("code"),aF=t("[0, ..., config.vocab_size - 1]"),iF=t("."),lF=m(),y(us.$$.fragment),$h=m(),Xt=r("h2"),gs=r("a"),Vc=r("span"),y(Da.$$.fragment),dF=m(),Bc=r("span"),cF=t("TFRoFormerForSequenceClassification"),xh=m(),fo=r("div"),y(Ia.$$.fragment),pF=m(),Jc=r("p"),mF=t("RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),hF=m(),Na=r("p"),fF=t("This model inherits from "),Vl=r("a"),uF=t("TFPreTrainedModel"),gF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_F=m(),Sa=r("p"),kF=t("This model is also a "),Wa=r("a"),vF=t("tf.keras.Model"),FF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yF=m(),y(_s.$$.fragment),bF=m(),$o=r("div"),y(Ua.$$.fragment),wF=m(),Yt=r("p"),TF=t("The "),Bl=r("a"),$F=t("TFRoFormerForSequenceClassification"),xF=t(" forward method, overrides the "),Gc=r("code"),RF=t("__call__"),EF=t(" special method."),MF=m(),y(ks.$$.fragment),jF=m(),y(vs.$$.fragment),zF=m(),y(Fs.$$.fragment),Rh=m(),Zt=r("h2"),ys=r("a"),Xc=r("span"),y(Ka.$$.fragment),CF=m(),Yc=r("span"),qF=t("TFRoFormerForMultipleChoice"),Eh=m(),uo=r("div"),y(Qa.$$.fragment),PF=m(),Zc=r("p"),AF=t(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),LF=m(),Ha=r("p"),OF=t("This model inherits from "),Jl=r("a"),DF=t("TFPreTrainedModel"),IF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),NF=m(),Va=r("p"),SF=t("This model is also a "),Ba=r("a"),WF=t("tf.keras.Model"),UF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),KF=m(),y(bs.$$.fragment),QF=m(),Qo=r("div"),y(Ja.$$.fragment),HF=m(),en=r("p"),VF=t("The "),Gl=r("a"),BF=t("TFRoFormerForMultipleChoice"),JF=t(" forward method, overrides the "),ep=r("code"),GF=t("__call__"),XF=t(" special method."),YF=m(),y(ws.$$.fragment),ZF=m(),y(Ts.$$.fragment),Mh=m(),on=r("h2"),$s=r("a"),op=r("span"),y(Ga.$$.fragment),ey=m(),tp=r("span"),oy=t("TFRoFormerForTokenClassification"),jh=m(),go=r("div"),y(Xa.$$.fragment),ty=m(),np=r("p"),ny=t(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),sy=m(),Ya=r("p"),ry=t("This model inherits from "),Xl=r("a"),ay=t("TFPreTrainedModel"),iy=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ly=m(),Za=r("p"),dy=t("This model is also a "),ei=r("a"),cy=t("tf.keras.Model"),py=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),my=m(),y(xs.$$.fragment),hy=m(),xo=r("div"),y(oi.$$.fragment),fy=m(),tn=r("p"),uy=t("The "),Yl=r("a"),gy=t("TFRoFormerForTokenClassification"),_y=t(" forward method, overrides the "),sp=r("code"),ky=t("__call__"),vy=t(" special method."),Fy=m(),y(Rs.$$.fragment),yy=m(),y(Es.$$.fragment),by=m(),y(Ms.$$.fragment),zh=m(),nn=r("h2"),js=r("a"),rp=r("span"),y(ti.$$.fragment),wy=m(),ap=r("span"),Ty=t("TFRoFormerForQuestionAnswering"),Ch=m(),_o=r("div"),y(ni.$$.fragment),$y=m(),sn=r("p"),xy=t(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ip=r("code"),Ry=t("span start logits"),Ey=t(" and "),lp=r("code"),My=t("span end logits"),jy=t(")."),zy=m(),si=r("p"),Cy=t("This model inherits from "),Zl=r("a"),qy=t("TFPreTrainedModel"),Py=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ay=m(),ri=r("p"),Ly=t("This model is also a "),ai=r("a"),Oy=t("tf.keras.Model"),Dy=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Iy=m(),y(zs.$$.fragment),Ny=m(),Ro=r("div"),y(ii.$$.fragment),Sy=m(),rn=r("p"),Wy=t("The "),ed=r("a"),Uy=t("TFRoFormerForQuestionAnswering"),Ky=t(" forward method, overrides the "),dp=r("code"),Qy=t("__call__"),Hy=t(" special method."),Vy=m(),y(Cs.$$.fragment),By=m(),y(qs.$$.fragment),Jy=m(),y(Ps.$$.fragment),qh=m(),an=r("h2"),As=r("a"),cp=r("span"),y(li.$$.fragment),Gy=m(),pp=r("span"),Xy=t("FlaxRoFormerModel"),Ph=m(),eo=r("div"),y(di.$$.fragment),Yy=m(),mp=r("p"),Zy=t("The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top."),eb=m(),ci=r("p"),ob=t("This model inherits from "),od=r("a"),tb=t("FlaxPreTrainedModel"),nb=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),sb=m(),pi=r("p"),rb=t("This model is also a Flax Linen "),mi=r("a"),ab=t("flax.linen.Module"),ib=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lb=m(),hp=r("p"),db=t("Finally, this model supports inherent JAX features such as:"),cb=m(),lt=r("ul"),fp=r("li"),hi=r("a"),pb=t("Just-In-Time (JIT) compilation"),mb=m(),up=r("li"),fi=r("a"),hb=t("Automatic Differentiation"),fb=m(),gp=r("li"),ui=r("a"),ub=t("Vectorization"),gb=m(),_p=r("li"),gi=r("a"),_b=t("Parallelization"),kb=m(),Ho=r("div"),y(_i.$$.fragment),vb=m(),ln=r("p"),Fb=t("The "),kp=r("code"),yb=t("FlaxRoFormerPreTrainedModel"),bb=t(" forward method, overrides the "),vp=r("code"),wb=t("__call__"),Tb=t(" special method."),$b=m(),y(Ls.$$.fragment),xb=m(),y(Os.$$.fragment),Ah=m(),dn=r("h2"),Ds=r("a"),Fp=r("span"),y(ki.$$.fragment),Rb=m(),yp=r("span"),Eb=t("FlaxRoFormerForMaskedLM"),Lh=m(),oo=r("div"),y(vi.$$.fragment),Mb=m(),Fi=r("p"),jb=t("RoFormer Model with a "),bp=r("code"),zb=t("language modeling"),Cb=t(" head on top."),qb=m(),yi=r("p"),Pb=t("This model inherits from "),td=r("a"),Ab=t("FlaxPreTrainedModel"),Lb=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ob=m(),bi=r("p"),Db=t("This model is also a Flax Linen "),wi=r("a"),Ib=t("flax.linen.Module"),Nb=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Sb=m(),wp=r("p"),Wb=t("Finally, this model supports inherent JAX features such as:"),Ub=m(),dt=r("ul"),Tp=r("li"),Ti=r("a"),Kb=t("Just-In-Time (JIT) compilation"),Qb=m(),$p=r("li"),$i=r("a"),Hb=t("Automatic Differentiation"),Vb=m(),xp=r("li"),xi=r("a"),Bb=t("Vectorization"),Jb=m(),Rp=r("li"),Ri=r("a"),Gb=t("Parallelization"),Xb=m(),Vo=r("div"),y(Ei.$$.fragment),Yb=m(),cn=r("p"),Zb=t("The "),Ep=r("code"),e2=t("FlaxRoFormerPreTrainedModel"),o2=t(" forward method, overrides the "),Mp=r("code"),t2=t("__call__"),n2=t(" special method."),s2=m(),y(Is.$$.fragment),r2=m(),y(Ns.$$.fragment),Oh=m(),pn=r("h2"),Ss=r("a"),jp=r("span"),y(Mi.$$.fragment),a2=m(),zp=r("span"),i2=t("FlaxRoFormerForSequenceClassification"),Dh=m(),to=r("div"),y(ji.$$.fragment),l2=m(),Cp=r("p"),d2=t(`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),c2=m(),zi=r("p"),p2=t("This model inherits from "),nd=r("a"),m2=t("FlaxPreTrainedModel"),h2=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),f2=m(),Ci=r("p"),u2=t("This model is also a Flax Linen "),qi=r("a"),g2=t("flax.linen.Module"),_2=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),k2=m(),qp=r("p"),v2=t("Finally, this model supports inherent JAX features such as:"),F2=m(),ct=r("ul"),Pp=r("li"),Pi=r("a"),y2=t("Just-In-Time (JIT) compilation"),b2=m(),Ap=r("li"),Ai=r("a"),w2=t("Automatic Differentiation"),T2=m(),Lp=r("li"),Li=r("a"),$2=t("Vectorization"),x2=m(),Op=r("li"),Oi=r("a"),R2=t("Parallelization"),E2=m(),Bo=r("div"),y(Di.$$.fragment),M2=m(),mn=r("p"),j2=t("The "),Dp=r("code"),z2=t("FlaxRoFormerPreTrainedModel"),C2=t(" forward method, overrides the "),Ip=r("code"),q2=t("__call__"),P2=t(" special method."),A2=m(),y(Ws.$$.fragment),L2=m(),y(Us.$$.fragment),Ih=m(),hn=r("h2"),Ks=r("a"),Np=r("span"),y(Ii.$$.fragment),O2=m(),Sp=r("span"),D2=t("FlaxRoFormerForMultipleChoice"),Nh=m(),no=r("div"),y(Ni.$$.fragment),I2=m(),Wp=r("p"),N2=t(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),S2=m(),Si=r("p"),W2=t("This model inherits from "),sd=r("a"),U2=t("FlaxPreTrainedModel"),K2=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Q2=m(),Wi=r("p"),H2=t("This model is also a Flax Linen "),Ui=r("a"),V2=t("flax.linen.Module"),B2=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),J2=m(),Up=r("p"),G2=t("Finally, this model supports inherent JAX features such as:"),X2=m(),pt=r("ul"),Kp=r("li"),Ki=r("a"),Y2=t("Just-In-Time (JIT) compilation"),Z2=m(),Qp=r("li"),Qi=r("a"),ew=t("Automatic Differentiation"),ow=m(),Hp=r("li"),Hi=r("a"),tw=t("Vectorization"),nw=m(),Vp=r("li"),Vi=r("a"),sw=t("Parallelization"),rw=m(),Jo=r("div"),y(Bi.$$.fragment),aw=m(),fn=r("p"),iw=t("The "),Bp=r("code"),lw=t("FlaxRoFormerPreTrainedModel"),dw=t(" forward method, overrides the "),Jp=r("code"),cw=t("__call__"),pw=t(" special method."),mw=m(),y(Qs.$$.fragment),hw=m(),y(Hs.$$.fragment),Sh=m(),un=r("h2"),Vs=r("a"),Gp=r("span"),y(Ji.$$.fragment),fw=m(),Xp=r("span"),uw=t("FlaxRoFormerForTokenClassification"),Wh=m(),so=r("div"),y(Gi.$$.fragment),gw=m(),Yp=r("p"),_w=t(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),kw=m(),Xi=r("p"),vw=t("This model inherits from "),rd=r("a"),Fw=t("FlaxPreTrainedModel"),yw=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bw=m(),Yi=r("p"),ww=t("This model is also a Flax Linen "),Zi=r("a"),Tw=t("flax.linen.Module"),$w=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xw=m(),Zp=r("p"),Rw=t("Finally, this model supports inherent JAX features such as:"),Ew=m(),mt=r("ul"),em=r("li"),el=r("a"),Mw=t("Just-In-Time (JIT) compilation"),jw=m(),om=r("li"),ol=r("a"),zw=t("Automatic Differentiation"),Cw=m(),tm=r("li"),tl=r("a"),qw=t("Vectorization"),Pw=m(),nm=r("li"),nl=r("a"),Aw=t("Parallelization"),Lw=m(),Go=r("div"),y(sl.$$.fragment),Ow=m(),gn=r("p"),Dw=t("The "),sm=r("code"),Iw=t("FlaxRoFormerPreTrainedModel"),Nw=t(" forward method, overrides the "),rm=r("code"),Sw=t("__call__"),Ww=t(" special method."),Uw=m(),y(Bs.$$.fragment),Kw=m(),y(Js.$$.fragment),Uh=m(),_n=r("h2"),Gs=r("a"),am=r("span"),y(rl.$$.fragment),Qw=m(),im=r("span"),Hw=t("FlaxRoFormerForQuestionAnswering"),Kh=m(),ro=r("div"),y(al.$$.fragment),Vw=m(),kn=r("p"),Bw=t(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),lm=r("code"),Jw=t("span start logits"),Gw=t(" and "),dm=r("code"),Xw=t("span end logits"),Yw=t(")."),Zw=m(),il=r("p"),eT=t("This model inherits from "),ad=r("a"),oT=t("FlaxPreTrainedModel"),tT=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nT=m(),ll=r("p"),sT=t("This model is also a Flax Linen "),dl=r("a"),rT=t("flax.linen.Module"),aT=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),iT=m(),cm=r("p"),lT=t("Finally, this model supports inherent JAX features such as:"),dT=m(),ht=r("ul"),pm=r("li"),cl=r("a"),cT=t("Just-In-Time (JIT) compilation"),pT=m(),mm=r("li"),pl=r("a"),mT=t("Automatic Differentiation"),hT=m(),hm=r("li"),ml=r("a"),fT=t("Vectorization"),uT=m(),fm=r("li"),hl=r("a"),gT=t("Parallelization"),_T=m(),Xo=r("div"),y(fl.$$.fragment),kT=m(),vn=r("p"),vT=t("The "),um=r("code"),FT=t("FlaxRoFormerPreTrainedModel"),yT=t(" forward method, overrides the "),gm=r("code"),bT=t("__call__"),wT=t(" special method."),TT=m(),y(Xs.$$.fragment),$T=m(),y(Ys.$$.fragment),this.h()},l(s){const v=S4('[data-svelte="svelte-1phssyn"]',document.head);d=a(v,"META",{name:!0,content:!0}),v.forEach(o),g=h(s),c=a(s,"H1",{class:!0});var ul=i(c);f=a(ul,"A",{id:!0,class:!0,href:!0});var _m=i(f);k=a(_m,"SPAN",{});var km=i(k);b(l.$$.fragment,km),km.forEach(o),_m.forEach(o),p=h(ul),j=a(ul,"SPAN",{});var vm=i(j);Te=n(vm,"RoFormer"),vm.forEach(o),ul.forEach(o),ge=h(s),I=a(s,"H2",{class:!0});var gl=i(I);ae=a(gl,"A",{id:!0,class:!0,href:!0});var Fm=i(ae);ee=a(Fm,"SPAN",{});var ym=i(ee);b(R.$$.fragment,ym),ym.forEach(o),Fm.forEach(o),$e=h(gl),H=a(gl,"SPAN",{});var bm=i(H);xe=n(bm,"Overview"),bm.forEach(o),gl.forEach(o),_e=h(s),N=a(s,"P",{});var _l=i(N);Re=n(_l,"The RoFormer model was proposed in "),ie=a(_l,"A",{href:!0,rel:!0});var wm=i(ie);B=n(wm,"RoFormer: Enhanced Transformer with Rotary Position Embedding"),wm.forEach(o),Ee=n(_l," by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu."),_l.forEach(o),ke=h(s),W=a(s,"P",{});var Tm=i(W);Me=n(Tm,"The abstract from the paper is the following:"),Tm.forEach(o),ve=h(s),U=a(s,"P",{});var $m=i(U);he=a($m,"EM",{});var xm=i(he);je=n(xm,`Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.`),xm.forEach(o),$m.forEach(o),te=h(s),C=a(s,"P",{});var Rm=i(C);A=n(Rm,"Tips:"),Rm.forEach(o),Fe=h(s),K=a(s,"UL",{});var Em=i(K);fe=a(Em,"LI",{});var Mm=i(fe);ze=n(Mm,`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`),Mm.forEach(o),Em.forEach(o),V=h(s),ne=a(s,"P",{});var Fn=i(ne);Ce=n(Fn,"This model was contributed by "),q=a(Fn,"A",{href:!0,rel:!0});var jm=i(q);qe=n(jm,"junnyu"),jm.forEach(o),J=n(Fn,". The original code can be found "),le=a(Fn,"A",{href:!0,rel:!0});var zm=i(le);Pe=n(zm,"here"),zm.forEach(o),G=n(Fn,"."),Fn.forEach(o),ye=h(s),re=a(s,"H2",{class:!0});var kl=i(re);O=a(kl,"A",{id:!0,class:!0,href:!0});var Cm=i(O);ue=a(Cm,"SPAN",{});var qm=i(ue);b(S.$$.fragment,qm),qm.forEach(o),Cm.forEach(o),Ae=h(kl),oe=a(kl,"SPAN",{});var Pm=i(oe);L=n(Pm,"RoFormerConfig"),Pm.forEach(o),kl.forEach(o),be=h(s),P=a(s,"DIV",{class:!0});var ft=i(P);b(de.$$.fragment,ft),Le=h(ft),F=a(ft,"P",{});var yn=i(F);M=n(yn,"This is the configuration class to store the configuration of a "),Se=a(yn,"A",{href:!0});var Am=i(Se);se=n(Am,"RoFormerModel"),Am.forEach(o),Ve=n(yn,`. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
`),Ne=a(yn,"A",{href:!0,rel:!0});var Lm=i(Ne);z=n(Lm,"junnyu/roformer_chinese_base"),Lm.forEach(o),Be=n(yn," architecture."),yn.forEach(o),Je=h(ft),Oe=a(ft,"P",{});var bn=i(Oe);Ge=n(bn,"Configuration objects inherit from "),We=a(bn,"A",{href:!0});var Om=i(We);D=n(Om,"PretrainedConfig"),Om.forEach(o),X=n(bn,` and can be used to control the model outputs. Read the
documentation from `),Ue=a(bn,"A",{href:!0});var Dm=i(Ue);Xe=n(Dm,"PretrainedConfig"),Dm.forEach(o),Y=n(bn," for more information."),bn.forEach(o),Ye=h(ft),b(Ie.$$.fragment,ft),ft.forEach(o),we=h(s),De=a(s,"H2",{class:!0});var vl=i(De);Z=a(vl,"A",{id:!0,class:!0,href:!0});var Im=i(Z);Ke=a(Im,"SPAN",{});var Nm=i(Ke);b(Fr.$$.fragment,Nm),Nm.forEach(o),Im.forEach(o),Xf=h(vl),Od=a(vl,"SPAN",{});var Sm=i(Od);Yf=n(Sm,"RoFormerTokenizer"),Sm.forEach(o),vl.forEach(o),th=h(s),Ze=a(s,"DIV",{class:!0});var ao=i(Ze);b(yr.$$.fragment,ao),Zf=h(ao),br=a(ao,"P",{});var Fl=i(br);eu=n(Fl,"Construct a RoFormer tokenizer. Based on "),wr=a(Fl,"A",{href:!0,rel:!0});var Wm=i(wr);ou=n(Wm,"Rust Jieba"),Wm.forEach(o),tu=n(Fl,"."),Fl.forEach(o),nu=h(ao),Tr=a(ao,"P",{});var yl=i(Tr);su=n(yl,"This tokenizer inherits from "),xl=a(yl,"A",{href:!0});var Um=i(xl);ru=n(Um,"PreTrainedTokenizer"),Um.forEach(o),au=n(yl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),yl.forEach(o),iu=h(ao),b($n.$$.fragment,ao),lu=h(ao),gt=a(ao,"DIV",{class:!0});var wn=i(gt);b($r.$$.fragment,wn),du=h(wn),Dd=a(wn,"P",{});var Km=i(Dd);cu=n(Km,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Km.forEach(o),pu=h(wn),xr=a(wn,"UL",{});var bl=i(xr);Rl=a(bl,"LI",{});var id=i(Rl);mu=n(id,"single sequence: "),Id=a(id,"CODE",{});var Qm=i(Id);hu=n(Qm,"[CLS] X [SEP]"),Qm.forEach(o),id.forEach(o),fu=h(bl),El=a(bl,"LI",{});var ld=i(El);uu=n(ld,"pair of sequences: "),Nd=a(ld,"CODE",{});var Hm=i(Nd);gu=n(Hm,"[CLS] A [SEP] B [SEP]"),Hm.forEach(o),ld.forEach(o),bl.forEach(o),wn.forEach(o),_u=h(ao),xn=a(ao,"DIV",{class:!0});var wl=i(xn);b(Rr.$$.fragment,wl),ku=h(wl),Er=a(wl,"P",{});var Tl=i(Er);vu=n(Tl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Sd=a(Tl,"CODE",{});var Vm=i(Sd);Fu=n(Vm,"prepare_for_model"),Vm.forEach(o),yu=n(Tl," method."),Tl.forEach(o),wl.forEach(o),bu=h(ao),No=a(ao,"DIV",{class:!0});var ut=i(No);b(Mr.$$.fragment,ut),wu=h(ut),Wd=a(ut,"P",{});var Bm=i(Wd);Tu=n(Bm,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer"),Bm.forEach(o),$u=h(ut),b(Rn.$$.fragment,ut),xu=h(ut),Rt=a(ut,"P",{});var Tn=i(Rt);Ru=n(Tn,"If "),Ud=a(Tn,"CODE",{});var Jm=i(Ud);Eu=n(Jm,"token_ids_1"),Jm.forEach(o),Mu=n(Tn," is "),Kd=a(Tn,"CODE",{});var Gm=i(Kd);ju=n(Gm,"None"),Gm.forEach(o),zu=n(Tn,", this method only returns the first portion of the mask (0s)."),Tn.forEach(o),ut.forEach(o),Cu=h(ao),Ml=a(ao,"DIV",{class:!0});var Xm=i(Ml);b(jr.$$.fragment,Xm),Xm.forEach(o),ao.forEach(o),nh=h(s),Et=a(s,"H2",{class:!0});var $l=i(Et);En=a($l,"A",{id:!0,class:!0,href:!0});var Ym=i(En);Qd=a(Ym,"SPAN",{});var Zm=i(Qd);b(zr.$$.fragment,Zm),Zm.forEach(o),Ym.forEach(o),qu=h($l),Hd=a($l,"SPAN",{});var eh=i(Hd);Pu=n(eh,"RoFormerTokenizerFast"),eh.forEach(o),$l.forEach(o),sh=h(s),lo=a(s,"DIV",{class:!0});var Fo=i(lo);b(Cr.$$.fragment,Fo),Au=h(Fo),qr=a(Fo,"P",{});var Hh=i(qr);Lu=n(Hh,"Construct a \u201Cfast\u201D RoFormer tokenizer (backed by HuggingFace\u2019s "),Vd=a(Hh,"EM",{});var ET=i(Vd);Ou=n(ET,"tokenizers"),ET.forEach(o),Du=n(Hh," library)."),Hh.forEach(o),Iu=h(Fo),Mn=a(Fo,"P",{});var oh=i(Mn);jl=a(oh,"A",{href:!0});var MT=i(jl);Nu=n(MT,"RoFormerTokenizerFast"),MT.forEach(o),Su=n(oh," is almost identical to "),zl=a(oh,"A",{href:!0});var jT=i(zl);Wu=n(jT,"BertTokenizerFast"),jT.forEach(o),Uu=n(oh,` and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`),oh.forEach(o),Ku=h(Fo),Pr=a(Fo,"P",{});var Vh=i(Pr);Qu=n(Vh,"This tokenizer inherits from "),Cl=a(Vh,"A",{href:!0});var zT=i(Cl);Hu=n(zT,"PreTrainedTokenizerFast"),zT.forEach(o),Vu=n(Vh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vh.forEach(o),Bu=h(Fo),b(jn.$$.fragment,Fo),Ju=h(Fo),_t=a(Fo,"DIV",{class:!0});var dd=i(_t);b(Ar.$$.fragment,dd),Gu=h(dd),Bd=a(dd,"P",{});var CT=i(Bd);Xu=n(CT,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),CT.forEach(o),Yu=h(dd),Lr=a(dd,"UL",{});var Bh=i(Lr);ql=a(Bh,"LI",{});var xT=i(ql);Zu=n(xT,"single sequence: "),Jd=a(xT,"CODE",{});var qT=i(Jd);eg=n(qT,"[CLS] X [SEP]"),qT.forEach(o),xT.forEach(o),og=h(Bh),Pl=a(Bh,"LI",{});var RT=i(Pl);tg=n(RT,"pair of sequences: "),Gd=a(RT,"CODE",{});var PT=i(Gd);ng=n(PT,"[CLS] A [SEP] B [SEP]"),PT.forEach(o),RT.forEach(o),Bh.forEach(o),dd.forEach(o),Fo.forEach(o),rh=h(s),Mt=a(s,"H2",{class:!0});var Jh=i(Mt);zn=a(Jh,"A",{id:!0,class:!0,href:!0});var AT=i(zn);Xd=a(AT,"SPAN",{});var LT=i(Xd);b(Or.$$.fragment,LT),LT.forEach(o),AT.forEach(o),sg=h(Jh),Yd=a(Jh,"SPAN",{});var OT=i(Yd);rg=n(OT,"RoFormerModel"),OT.forEach(o),Jh.forEach(o),ah=h(s),ko=a(s,"DIV",{class:!0});var vt=i(ko);b(Dr.$$.fragment,vt),ag=h(vt),Ir=a(vt,"P",{});var Gh=i(Ir);ig=n(Gh,`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Nr=a(Gh,"A",{href:!0,rel:!0});var DT=i(Nr);lg=n(DT,"torch.nn.Module"),DT.forEach(o),dg=n(Gh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gh.forEach(o),cg=h(vt),Sr=a(vt,"P",{});var Xh=i(Sr);pg=n(Xh,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Wr=a(Xh,"A",{href:!0,rel:!0});var IT=i(Wr);mg=n(IT,`Attention is
all you need`),IT.forEach(o),hg=n(Xh,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Xh.forEach(o),fg=h(vt),co=a(vt,"P",{});var Eo=i(co);ug=n(Eo,"To behave as an decoder the model needs to be initialized with the "),Zd=a(Eo,"CODE",{});var NT=i(Zd);gg=n(NT,"is_decoder"),NT.forEach(o),_g=n(Eo,` argument of the configuration set
to `),ec=a(Eo,"CODE",{});var ST=i(ec);kg=n(ST,"True"),ST.forEach(o),vg=n(Eo,". To be used in a Seq2Seq model, the model needs to initialized with both "),oc=a(Eo,"CODE",{});var WT=i(oc);Fg=n(WT,"is_decoder"),WT.forEach(o),yg=n(Eo,` argument and
`),tc=a(Eo,"CODE",{});var UT=i(tc);bg=n(UT,"add_cross_attention"),UT.forEach(o),wg=n(Eo," set to "),nc=a(Eo,"CODE",{});var KT=i(nc);Tg=n(KT,"True"),KT.forEach(o),$g=n(Eo,"; an "),sc=a(Eo,"CODE",{});var QT=i(sc);xg=n(QT,"encoder_hidden_states"),QT.forEach(o),Rg=n(Eo," is then expected as an input to the forward pass."),Eo.forEach(o),Eg=h(vt),So=a(vt,"DIV",{class:!0});var Zs=i(So);b(Ur.$$.fragment,Zs),Mg=h(Zs),jt=a(Zs,"P",{});var cd=i(jt);jg=n(cd,"The "),Al=a(cd,"A",{href:!0});var HT=i(Al);zg=n(HT,"RoFormerModel"),HT.forEach(o),Cg=n(cd," forward method, overrides the "),rc=a(cd,"CODE",{});var VT=i(rc);qg=n(VT,"__call__"),VT.forEach(o),Pg=n(cd," special method."),cd.forEach(o),Ag=h(Zs),b(Cn.$$.fragment,Zs),Lg=h(Zs),b(qn.$$.fragment,Zs),Zs.forEach(o),vt.forEach(o),ih=h(s),zt=a(s,"H2",{class:!0});var Yh=i(zt);Pn=a(Yh,"A",{id:!0,class:!0,href:!0});var BT=i(Pn);ac=a(BT,"SPAN",{});var JT=i(ac);b(Kr.$$.fragment,JT),JT.forEach(o),BT.forEach(o),Og=h(Yh),ic=a(Yh,"SPAN",{});var GT=i(ic);Dg=n(GT,"RoFormerForCausalLM"),GT.forEach(o),Yh.forEach(o),lh=h(s),at=a(s,"DIV",{class:!0});var pd=i(at);b(Qr.$$.fragment,pd),Ig=h(pd),Ct=a(pd,"P",{});var md=i(Ct);Ng=n(md,"RoFormer Model with a "),lc=a(md,"CODE",{});var XT=i(lc);Sg=n(XT,"language modeling"),XT.forEach(o),Wg=n(md,` head on top for CLM fine-tuning.
This model is a PyTorch `),Hr=a(md,"A",{href:!0,rel:!0});var YT=i(Hr);Ug=n(YT,"torch.nn.Module"),YT.forEach(o),Kg=n(md,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),md.forEach(o),Qg=h(pd),Wo=a(pd,"DIV",{class:!0});var er=i(Wo);b(Vr.$$.fragment,er),Hg=h(er),qt=a(er,"P",{});var hd=i(qt);Vg=n(hd,"The "),Ll=a(hd,"A",{href:!0});var ZT=i(Ll);Bg=n(ZT,"RoFormerForCausalLM"),ZT.forEach(o),Jg=n(hd," forward method, overrides the "),dc=a(hd,"CODE",{});var e$=i(dc);Gg=n(e$,"__call__"),e$.forEach(o),Xg=n(hd," special method."),hd.forEach(o),Yg=h(er),b(An.$$.fragment,er),Zg=h(er),b(Ln.$$.fragment,er),er.forEach(o),pd.forEach(o),dh=h(s),Pt=a(s,"H2",{class:!0});var Zh=i(Pt);On=a(Zh,"A",{id:!0,class:!0,href:!0});var o$=i(On);cc=a(o$,"SPAN",{});var t$=i(cc);b(Br.$$.fragment,t$),t$.forEach(o),o$.forEach(o),e_=h(Zh),pc=a(Zh,"SPAN",{});var n$=i(pc);o_=n(n$,"RoFormerForMaskedLM"),n$.forEach(o),Zh.forEach(o),ch=h(s),it=a(s,"DIV",{class:!0});var fd=i(it);b(Jr.$$.fragment,fd),t_=h(fd),At=a(fd,"P",{});var ud=i(At);n_=n(ud,"RoFormer Model with a "),mc=a(ud,"CODE",{});var s$=i(mc);s_=n(s$,"language modeling"),s$.forEach(o),r_=n(ud,` head on top.
This model is a PyTorch `),Gr=a(ud,"A",{href:!0,rel:!0});var r$=i(Gr);a_=n(r$,"torch.nn.Module"),r$.forEach(o),i_=n(ud,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ud.forEach(o),l_=h(fd),yo=a(fd,"DIV",{class:!0});var Ft=i(yo);b(Xr.$$.fragment,Ft),d_=h(Ft),Lt=a(Ft,"P",{});var gd=i(Lt);c_=n(gd,"The "),Ol=a(gd,"A",{href:!0});var a$=i(Ol);p_=n(a$,"RoFormerForMaskedLM"),a$.forEach(o),m_=n(gd," forward method, overrides the "),hc=a(gd,"CODE",{});var i$=i(hc);h_=n(i$,"__call__"),i$.forEach(o),f_=n(gd," special method."),gd.forEach(o),u_=h(Ft),b(Dn.$$.fragment,Ft),g_=h(Ft),b(In.$$.fragment,Ft),__=h(Ft),b(Nn.$$.fragment,Ft),Ft.forEach(o),fd.forEach(o),ph=h(s),Ot=a(s,"H2",{class:!0});var ef=i(Ot);Sn=a(ef,"A",{id:!0,class:!0,href:!0});var l$=i(Sn);fc=a(l$,"SPAN",{});var d$=i(fc);b(Yr.$$.fragment,d$),d$.forEach(o),l$.forEach(o),k_=h(ef),uc=a(ef,"SPAN",{});var c$=i(uc);v_=n(c$,"RoFormerForSequenceClassification"),c$.forEach(o),ef.forEach(o),mh=h(s),Lo=a(s,"DIV",{class:!0});var or=i(Lo);b(Zr.$$.fragment,or),F_=h(or),gc=a(or,"P",{});var p$=i(gc);y_=n(p$,`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),p$.forEach(o),b_=h(or),ea=a(or,"P",{});var of=i(ea);w_=n(of,"This model is a PyTorch "),oa=a(of,"A",{href:!0,rel:!0});var m$=i(oa);T_=n(m$,"torch.nn.Module"),m$.forEach(o),$_=n(of,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),of.forEach(o),x_=h(or),io=a(or,"DIV",{class:!0});var Mo=i(io);b(ta.$$.fragment,Mo),R_=h(Mo),Dt=a(Mo,"P",{});var _d=i(Dt);E_=n(_d,"The "),Dl=a(_d,"A",{href:!0});var h$=i(Dl);M_=n(h$,"RoFormerForSequenceClassification"),h$.forEach(o),j_=n(_d," forward method, overrides the "),_c=a(_d,"CODE",{});var f$=i(_c);z_=n(f$,"__call__"),f$.forEach(o),C_=n(_d," special method."),_d.forEach(o),q_=h(Mo),b(Wn.$$.fragment,Mo),P_=h(Mo),b(Un.$$.fragment,Mo),A_=h(Mo),b(Kn.$$.fragment,Mo),L_=h(Mo),b(Qn.$$.fragment,Mo),O_=h(Mo),b(Hn.$$.fragment,Mo),Mo.forEach(o),or.forEach(o),hh=h(s),It=a(s,"H2",{class:!0});var tf=i(It);Vn=a(tf,"A",{id:!0,class:!0,href:!0});var u$=i(Vn);kc=a(u$,"SPAN",{});var g$=i(kc);b(na.$$.fragment,g$),g$.forEach(o),u$.forEach(o),D_=h(tf),vc=a(tf,"SPAN",{});var _$=i(vc);I_=n(_$,"RoFormerForMultipleChoice"),_$.forEach(o),tf.forEach(o),fh=h(s),Oo=a(s,"DIV",{class:!0});var tr=i(Oo);b(sa.$$.fragment,tr),N_=h(tr),Fc=a(tr,"P",{});var k$=i(Fc);S_=n(k$,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),k$.forEach(o),W_=h(tr),ra=a(tr,"P",{});var nf=i(ra);U_=n(nf,"This model is a PyTorch "),aa=a(nf,"A",{href:!0,rel:!0});var v$=i(aa);K_=n(v$,"torch.nn.Module"),v$.forEach(o),Q_=n(nf,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nf.forEach(o),H_=h(tr),Uo=a(tr,"DIV",{class:!0});var nr=i(Uo);b(ia.$$.fragment,nr),V_=h(nr),Nt=a(nr,"P",{});var kd=i(Nt);B_=n(kd,"The "),Il=a(kd,"A",{href:!0});var F$=i(Il);J_=n(F$,"RoFormerForMultipleChoice"),F$.forEach(o),G_=n(kd," forward method, overrides the "),yc=a(kd,"CODE",{});var y$=i(yc);X_=n(y$,"__call__"),y$.forEach(o),Y_=n(kd," special method."),kd.forEach(o),Z_=h(nr),b(Bn.$$.fragment,nr),ek=h(nr),b(Jn.$$.fragment,nr),nr.forEach(o),tr.forEach(o),uh=h(s),St=a(s,"H2",{class:!0});var sf=i(St);Gn=a(sf,"A",{id:!0,class:!0,href:!0});var b$=i(Gn);bc=a(b$,"SPAN",{});var w$=i(bc);b(la.$$.fragment,w$),w$.forEach(o),b$.forEach(o),ok=h(sf),wc=a(sf,"SPAN",{});var T$=i(wc);tk=n(T$,"RoFormerForTokenClassification"),T$.forEach(o),sf.forEach(o),gh=h(s),Do=a(s,"DIV",{class:!0});var sr=i(Do);b(da.$$.fragment,sr),nk=h(sr),Tc=a(sr,"P",{});var $$=i(Tc);sk=n($$,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$$.forEach(o),rk=h(sr),ca=a(sr,"P",{});var rf=i(ca);ak=n(rf,"This model is a PyTorch "),pa=a(rf,"A",{href:!0,rel:!0});var x$=i(pa);ik=n(x$,"torch.nn.Module"),x$.forEach(o),lk=n(rf,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),rf.forEach(o),dk=h(sr),bo=a(sr,"DIV",{class:!0});var yt=i(bo);b(ma.$$.fragment,yt),ck=h(yt),Wt=a(yt,"P",{});var vd=i(Wt);pk=n(vd,"The "),Nl=a(vd,"A",{href:!0});var R$=i(Nl);mk=n(R$,"RoFormerForTokenClassification"),R$.forEach(o),hk=n(vd," forward method, overrides the "),$c=a(vd,"CODE",{});var E$=i($c);fk=n(E$,"__call__"),E$.forEach(o),uk=n(vd," special method."),vd.forEach(o),gk=h(yt),b(Xn.$$.fragment,yt),_k=h(yt),b(Yn.$$.fragment,yt),kk=h(yt),b(Zn.$$.fragment,yt),yt.forEach(o),sr.forEach(o),_h=h(s),Ut=a(s,"H2",{class:!0});var af=i(Ut);es=a(af,"A",{id:!0,class:!0,href:!0});var M$=i(es);xc=a(M$,"SPAN",{});var j$=i(xc);b(ha.$$.fragment,j$),j$.forEach(o),M$.forEach(o),vk=h(af),Rc=a(af,"SPAN",{});var z$=i(Rc);Fk=n(z$,"RoFormerForQuestionAnswering"),z$.forEach(o),af.forEach(o),kh=h(s),Io=a(s,"DIV",{class:!0});var rr=i(Io);b(fa.$$.fragment,rr),yk=h(rr),Kt=a(rr,"P",{});var Fd=i(Kt);bk=n(Fd,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ec=a(Fd,"CODE",{});var C$=i(Ec);wk=n(C$,"span start logits"),C$.forEach(o),Tk=n(Fd," and "),Mc=a(Fd,"CODE",{});var q$=i(Mc);$k=n(q$,"span end logits"),q$.forEach(o),xk=n(Fd,")."),Fd.forEach(o),Rk=h(rr),ua=a(rr,"P",{});var lf=i(ua);Ek=n(lf,"This model is a PyTorch "),ga=a(lf,"A",{href:!0,rel:!0});var P$=i(ga);Mk=n(P$,"torch.nn.Module"),P$.forEach(o),jk=n(lf,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lf.forEach(o),zk=h(rr),wo=a(rr,"DIV",{class:!0});var bt=i(wo);b(_a.$$.fragment,bt),Ck=h(bt),Qt=a(bt,"P",{});var yd=i(Qt);qk=n(yd,"The "),Sl=a(yd,"A",{href:!0});var A$=i(Sl);Pk=n(A$,"RoFormerForQuestionAnswering"),A$.forEach(o),Ak=n(yd," forward method, overrides the "),jc=a(yd,"CODE",{});var L$=i(jc);Lk=n(L$,"__call__"),L$.forEach(o),Ok=n(yd," special method."),yd.forEach(o),Dk=h(bt),b(os.$$.fragment,bt),Ik=h(bt),b(ts.$$.fragment,bt),Nk=h(bt),b(ns.$$.fragment,bt),bt.forEach(o),rr.forEach(o),vh=h(s),Ht=a(s,"H2",{class:!0});var df=i(Ht);ss=a(df,"A",{id:!0,class:!0,href:!0});var O$=i(ss);zc=a(O$,"SPAN",{});var D$=i(zc);b(ka.$$.fragment,D$),D$.forEach(o),O$.forEach(o),Sk=h(df),Cc=a(df,"SPAN",{});var I$=i(Cc);Wk=n(I$,"TFRoFormerModel"),I$.forEach(o),df.forEach(o),Fh=h(s),po=a(s,"DIV",{class:!0});var Yo=i(po);b(va.$$.fragment,Yo),Uk=h(Yo),qc=a(Yo,"P",{});var N$=i(qc);Kk=n(N$,"The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top."),N$.forEach(o),Qk=h(Yo),Fa=a(Yo,"P",{});var cf=i(Fa);Hk=n(cf,"This model inherits from "),Wl=a(cf,"A",{href:!0});var S$=i(Wl);Vk=n(S$,"TFPreTrainedModel"),S$.forEach(o),Bk=n(cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cf.forEach(o),Jk=h(Yo),ya=a(Yo,"P",{});var pf=i(ya);Gk=n(pf,"This model is also a "),ba=a(pf,"A",{href:!0,rel:!0});var W$=i(ba);Xk=n(W$,"tf.keras.Model"),W$.forEach(o),Yk=n(pf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pf.forEach(o),Zk=h(Yo),b(rs.$$.fragment,Yo),ev=h(Yo),Ko=a(Yo,"DIV",{class:!0});var ar=i(Ko);b(wa.$$.fragment,ar),ov=h(ar),Vt=a(ar,"P",{});var bd=i(Vt);tv=n(bd,"The "),Ul=a(bd,"A",{href:!0});var U$=i(Ul);nv=n(U$,"TFRoFormerModel"),U$.forEach(o),sv=n(bd," forward method, overrides the "),Pc=a(bd,"CODE",{});var K$=i(Pc);rv=n(K$,"__call__"),K$.forEach(o),av=n(bd," special method."),bd.forEach(o),iv=h(ar),b(as.$$.fragment,ar),lv=h(ar),b(is.$$.fragment,ar),ar.forEach(o),Yo.forEach(o),yh=h(s),Bt=a(s,"H2",{class:!0});var mf=i(Bt);ls=a(mf,"A",{id:!0,class:!0,href:!0});var Q$=i(ls);Ac=a(Q$,"SPAN",{});var H$=i(Ac);b(Ta.$$.fragment,H$),H$.forEach(o),Q$.forEach(o),dv=h(mf),Lc=a(mf,"SPAN",{});var V$=i(Lc);cv=n(V$,"TFRoFormerForMaskedLM"),V$.forEach(o),mf.forEach(o),bh=h(s),mo=a(s,"DIV",{class:!0});var Zo=i(mo);b($a.$$.fragment,Zo),pv=h(Zo),xa=a(Zo,"P",{});var hf=i(xa);mv=n(hf,"RoFormer Model with a "),Oc=a(hf,"CODE",{});var B$=i(Oc);hv=n(B$,"language modeling"),B$.forEach(o),fv=n(hf," head on top."),hf.forEach(o),uv=h(Zo),Ra=a(Zo,"P",{});var ff=i(Ra);gv=n(ff,"This model inherits from "),Kl=a(ff,"A",{href:!0});var J$=i(Kl);_v=n(J$,"TFPreTrainedModel"),J$.forEach(o),kv=n(ff,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ff.forEach(o),vv=h(Zo),Ea=a(Zo,"P",{});var uf=i(Ea);Fv=n(uf,"This model is also a "),Ma=a(uf,"A",{href:!0,rel:!0});var G$=i(Ma);yv=n(G$,"tf.keras.Model"),G$.forEach(o),bv=n(uf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uf.forEach(o),wv=h(Zo),b(ds.$$.fragment,Zo),Tv=h(Zo),To=a(Zo,"DIV",{class:!0});var wt=i(To);b(ja.$$.fragment,wt),$v=h(wt),Jt=a(wt,"P",{});var wd=i(Jt);xv=n(wd,"The "),Ql=a(wd,"A",{href:!0});var X$=i(Ql);Rv=n(X$,"TFRoFormerForMaskedLM"),X$.forEach(o),Ev=n(wd," forward method, overrides the "),Dc=a(wd,"CODE",{});var Y$=i(Dc);Mv=n(Y$,"__call__"),Y$.forEach(o),jv=n(wd," special method."),wd.forEach(o),zv=h(wt),b(cs.$$.fragment,wt),Cv=h(wt),b(ps.$$.fragment,wt),qv=h(wt),b(ms.$$.fragment,wt),wt.forEach(o),Zo.forEach(o),wh=h(s),Gt=a(s,"H2",{class:!0});var gf=i(Gt);hs=a(gf,"A",{id:!0,class:!0,href:!0});var Z$=i(hs);Ic=a(Z$,"SPAN",{});var e1=i(Ic);b(za.$$.fragment,e1),e1.forEach(o),Z$.forEach(o),Pv=h(gf),Nc=a(gf,"SPAN",{});var o1=i(Nc);Av=n(o1,"TFRoFormerForCausalLM"),o1.forEach(o),gf.forEach(o),Th=h(s),ho=a(s,"DIV",{class:!0});var et=i(ho);b(Ca.$$.fragment,et),Lv=h(et),qa=a(et,"P",{});var _f=i(qa);Ov=n(_f,"RoFormer Model with a "),Sc=a(_f,"CODE",{});var t1=i(Sc);Dv=n(t1,"language modeling"),t1.forEach(o),Iv=n(_f," head on top for CLM fine-tuning."),_f.forEach(o),Nv=h(et),Pa=a(et,"P",{});var kf=i(Pa);Sv=n(kf,"This model inherits from "),Hl=a(kf,"A",{href:!0});var n1=i(Hl);Wv=n(n1,"TFPreTrainedModel"),n1.forEach(o),Uv=n(kf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kf.forEach(o),Kv=h(et),Aa=a(et,"P",{});var vf=i(Aa);Qv=n(vf,"This model is also a "),La=a(vf,"A",{href:!0,rel:!0});var s1=i(La);Hv=n(s1,"tf.keras.Model"),s1.forEach(o),Vv=n(vf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vf.forEach(o),Bv=h(et),b(fs.$$.fragment,et),Jv=h(et),kt=a(et,"DIV",{class:!0});var Td=i(kt);b(Oa.$$.fragment,Td),Gv=h(Td),vo=a(Td,"P",{});var ot=i(vo);Xv=n(ot,"labels ("),Wc=a(ot,"CODE",{});var r1=i(Wc);Yv=n(r1,"tf.Tensor"),r1.forEach(o),Zv=n(ot," or "),Uc=a(ot,"CODE",{});var a1=i(Uc);eF=n(a1,"np.ndarray"),a1.forEach(o),oF=n(ot," of shape "),Kc=a(ot,"CODE",{});var i1=i(Kc);tF=n(i1,"(batch_size, sequence_length)"),i1.forEach(o),nF=n(ot,", "),Qc=a(ot,"EM",{});var l1=i(Qc);sF=n(l1,"optional"),l1.forEach(o),rF=n(ot,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Hc=a(ot,"CODE",{});var d1=i(Hc);aF=n(d1,"[0, ..., config.vocab_size - 1]"),d1.forEach(o),iF=n(ot,"."),ot.forEach(o),lF=h(Td),b(us.$$.fragment,Td),Td.forEach(o),et.forEach(o),$h=h(s),Xt=a(s,"H2",{class:!0});var Ff=i(Xt);gs=a(Ff,"A",{id:!0,class:!0,href:!0});var c1=i(gs);Vc=a(c1,"SPAN",{});var p1=i(Vc);b(Da.$$.fragment,p1),p1.forEach(o),c1.forEach(o),dF=h(Ff),Bc=a(Ff,"SPAN",{});var m1=i(Bc);cF=n(m1,"TFRoFormerForSequenceClassification"),m1.forEach(o),Ff.forEach(o),xh=h(s),fo=a(s,"DIV",{class:!0});var tt=i(fo);b(Ia.$$.fragment,tt),pF=h(tt),Jc=a(tt,"P",{});var h1=i(Jc);mF=n(h1,"RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),h1.forEach(o),hF=h(tt),Na=a(tt,"P",{});var yf=i(Na);fF=n(yf,"This model inherits from "),Vl=a(yf,"A",{href:!0});var f1=i(Vl);uF=n(f1,"TFPreTrainedModel"),f1.forEach(o),gF=n(yf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yf.forEach(o),_F=h(tt),Sa=a(tt,"P",{});var bf=i(Sa);kF=n(bf,"This model is also a "),Wa=a(bf,"A",{href:!0,rel:!0});var u1=i(Wa);vF=n(u1,"tf.keras.Model"),u1.forEach(o),FF=n(bf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bf.forEach(o),yF=h(tt),b(_s.$$.fragment,tt),bF=h(tt),$o=a(tt,"DIV",{class:!0});var Tt=i($o);b(Ua.$$.fragment,Tt),wF=h(Tt),Yt=a(Tt,"P",{});var $d=i(Yt);TF=n($d,"The "),Bl=a($d,"A",{href:!0});var g1=i(Bl);$F=n(g1,"TFRoFormerForSequenceClassification"),g1.forEach(o),xF=n($d," forward method, overrides the "),Gc=a($d,"CODE",{});var _1=i(Gc);RF=n(_1,"__call__"),_1.forEach(o),EF=n($d," special method."),$d.forEach(o),MF=h(Tt),b(ks.$$.fragment,Tt),jF=h(Tt),b(vs.$$.fragment,Tt),zF=h(Tt),b(Fs.$$.fragment,Tt),Tt.forEach(o),tt.forEach(o),Rh=h(s),Zt=a(s,"H2",{class:!0});var wf=i(Zt);ys=a(wf,"A",{id:!0,class:!0,href:!0});var k1=i(ys);Xc=a(k1,"SPAN",{});var v1=i(Xc);b(Ka.$$.fragment,v1),v1.forEach(o),k1.forEach(o),CF=h(wf),Yc=a(wf,"SPAN",{});var F1=i(Yc);qF=n(F1,"TFRoFormerForMultipleChoice"),F1.forEach(o),wf.forEach(o),Eh=h(s),uo=a(s,"DIV",{class:!0});var nt=i(uo);b(Qa.$$.fragment,nt),PF=h(nt),Zc=a(nt,"P",{});var y1=i(Zc);AF=n(y1,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),y1.forEach(o),LF=h(nt),Ha=a(nt,"P",{});var Tf=i(Ha);OF=n(Tf,"This model inherits from "),Jl=a(Tf,"A",{href:!0});var b1=i(Jl);DF=n(b1,"TFPreTrainedModel"),b1.forEach(o),IF=n(Tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf.forEach(o),NF=h(nt),Va=a(nt,"P",{});var $f=i(Va);SF=n($f,"This model is also a "),Ba=a($f,"A",{href:!0,rel:!0});var w1=i(Ba);WF=n(w1,"tf.keras.Model"),w1.forEach(o),UF=n($f,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$f.forEach(o),KF=h(nt),b(bs.$$.fragment,nt),QF=h(nt),Qo=a(nt,"DIV",{class:!0});var ir=i(Qo);b(Ja.$$.fragment,ir),HF=h(ir),en=a(ir,"P",{});var xd=i(en);VF=n(xd,"The "),Gl=a(xd,"A",{href:!0});var T1=i(Gl);BF=n(T1,"TFRoFormerForMultipleChoice"),T1.forEach(o),JF=n(xd," forward method, overrides the "),ep=a(xd,"CODE",{});var $1=i(ep);GF=n($1,"__call__"),$1.forEach(o),XF=n(xd," special method."),xd.forEach(o),YF=h(ir),b(ws.$$.fragment,ir),ZF=h(ir),b(Ts.$$.fragment,ir),ir.forEach(o),nt.forEach(o),Mh=h(s),on=a(s,"H2",{class:!0});var xf=i(on);$s=a(xf,"A",{id:!0,class:!0,href:!0});var x1=i($s);op=a(x1,"SPAN",{});var R1=i(op);b(Ga.$$.fragment,R1),R1.forEach(o),x1.forEach(o),ey=h(xf),tp=a(xf,"SPAN",{});var E1=i(tp);oy=n(E1,"TFRoFormerForTokenClassification"),E1.forEach(o),xf.forEach(o),jh=h(s),go=a(s,"DIV",{class:!0});var st=i(go);b(Xa.$$.fragment,st),ty=h(st),np=a(st,"P",{});var M1=i(np);ny=n(M1,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),M1.forEach(o),sy=h(st),Ya=a(st,"P",{});var Rf=i(Ya);ry=n(Rf,"This model inherits from "),Xl=a(Rf,"A",{href:!0});var j1=i(Xl);ay=n(j1,"TFPreTrainedModel"),j1.forEach(o),iy=n(Rf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rf.forEach(o),ly=h(st),Za=a(st,"P",{});var Ef=i(Za);dy=n(Ef,"This model is also a "),ei=a(Ef,"A",{href:!0,rel:!0});var z1=i(ei);cy=n(z1,"tf.keras.Model"),z1.forEach(o),py=n(Ef,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ef.forEach(o),my=h(st),b(xs.$$.fragment,st),hy=h(st),xo=a(st,"DIV",{class:!0});var $t=i(xo);b(oi.$$.fragment,$t),fy=h($t),tn=a($t,"P",{});var Rd=i(tn);uy=n(Rd,"The "),Yl=a(Rd,"A",{href:!0});var C1=i(Yl);gy=n(C1,"TFRoFormerForTokenClassification"),C1.forEach(o),_y=n(Rd," forward method, overrides the "),sp=a(Rd,"CODE",{});var q1=i(sp);ky=n(q1,"__call__"),q1.forEach(o),vy=n(Rd," special method."),Rd.forEach(o),Fy=h($t),b(Rs.$$.fragment,$t),yy=h($t),b(Es.$$.fragment,$t),by=h($t),b(Ms.$$.fragment,$t),$t.forEach(o),st.forEach(o),zh=h(s),nn=a(s,"H2",{class:!0});var Mf=i(nn);js=a(Mf,"A",{id:!0,class:!0,href:!0});var P1=i(js);rp=a(P1,"SPAN",{});var A1=i(rp);b(ti.$$.fragment,A1),A1.forEach(o),P1.forEach(o),wy=h(Mf),ap=a(Mf,"SPAN",{});var L1=i(ap);Ty=n(L1,"TFRoFormerForQuestionAnswering"),L1.forEach(o),Mf.forEach(o),Ch=h(s),_o=a(s,"DIV",{class:!0});var rt=i(_o);b(ni.$$.fragment,rt),$y=h(rt),sn=a(rt,"P",{});var Ed=i(sn);xy=n(Ed,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ip=a(Ed,"CODE",{});var O1=i(ip);Ry=n(O1,"span start logits"),O1.forEach(o),Ey=n(Ed," and "),lp=a(Ed,"CODE",{});var D1=i(lp);My=n(D1,"span end logits"),D1.forEach(o),jy=n(Ed,")."),Ed.forEach(o),zy=h(rt),si=a(rt,"P",{});var jf=i(si);Cy=n(jf,"This model inherits from "),Zl=a(jf,"A",{href:!0});var I1=i(Zl);qy=n(I1,"TFPreTrainedModel"),I1.forEach(o),Py=n(jf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jf.forEach(o),Ay=h(rt),ri=a(rt,"P",{});var zf=i(ri);Ly=n(zf,"This model is also a "),ai=a(zf,"A",{href:!0,rel:!0});var N1=i(ai);Oy=n(N1,"tf.keras.Model"),N1.forEach(o),Dy=n(zf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zf.forEach(o),Iy=h(rt),b(zs.$$.fragment,rt),Ny=h(rt),Ro=a(rt,"DIV",{class:!0});var xt=i(Ro);b(ii.$$.fragment,xt),Sy=h(xt),rn=a(xt,"P",{});var Md=i(rn);Wy=n(Md,"The "),ed=a(Md,"A",{href:!0});var S1=i(ed);Uy=n(S1,"TFRoFormerForQuestionAnswering"),S1.forEach(o),Ky=n(Md," forward method, overrides the "),dp=a(Md,"CODE",{});var W1=i(dp);Qy=n(W1,"__call__"),W1.forEach(o),Hy=n(Md," special method."),Md.forEach(o),Vy=h(xt),b(Cs.$$.fragment,xt),By=h(xt),b(qs.$$.fragment,xt),Jy=h(xt),b(Ps.$$.fragment,xt),xt.forEach(o),rt.forEach(o),qh=h(s),an=a(s,"H2",{class:!0});var Cf=i(an);As=a(Cf,"A",{id:!0,class:!0,href:!0});var U1=i(As);cp=a(U1,"SPAN",{});var K1=i(cp);b(li.$$.fragment,K1),K1.forEach(o),U1.forEach(o),Gy=h(Cf),pp=a(Cf,"SPAN",{});var Q1=i(pp);Xy=n(Q1,"FlaxRoFormerModel"),Q1.forEach(o),Cf.forEach(o),Ph=h(s),eo=a(s,"DIV",{class:!0});var jo=i(eo);b(di.$$.fragment,jo),Yy=h(jo),mp=a(jo,"P",{});var H1=i(mp);Zy=n(H1,"The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top."),H1.forEach(o),eb=h(jo),ci=a(jo,"P",{});var qf=i(ci);ob=n(qf,"This model inherits from "),od=a(qf,"A",{href:!0});var V1=i(od);tb=n(V1,"FlaxPreTrainedModel"),V1.forEach(o),nb=n(qf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),qf.forEach(o),sb=h(jo),pi=a(jo,"P",{});var Pf=i(pi);rb=n(Pf,"This model is also a Flax Linen "),mi=a(Pf,"A",{href:!0,rel:!0});var B1=i(mi);ab=n(B1,"flax.linen.Module"),B1.forEach(o),ib=n(Pf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Pf.forEach(o),lb=h(jo),hp=a(jo,"P",{});var J1=i(hp);db=n(J1,"Finally, this model supports inherent JAX features such as:"),J1.forEach(o),cb=h(jo),lt=a(jo,"UL",{});var lr=i(lt);fp=a(lr,"LI",{});var G1=i(fp);hi=a(G1,"A",{href:!0,rel:!0});var X1=i(hi);pb=n(X1,"Just-In-Time (JIT) compilation"),X1.forEach(o),G1.forEach(o),mb=h(lr),up=a(lr,"LI",{});var Y1=i(up);fi=a(Y1,"A",{href:!0,rel:!0});var Z1=i(fi);hb=n(Z1,"Automatic Differentiation"),Z1.forEach(o),Y1.forEach(o),fb=h(lr),gp=a(lr,"LI",{});var e0=i(gp);ui=a(e0,"A",{href:!0,rel:!0});var o0=i(ui);ub=n(o0,"Vectorization"),o0.forEach(o),e0.forEach(o),gb=h(lr),_p=a(lr,"LI",{});var t0=i(_p);gi=a(t0,"A",{href:!0,rel:!0});var n0=i(gi);_b=n(n0,"Parallelization"),n0.forEach(o),t0.forEach(o),lr.forEach(o),kb=h(jo),Ho=a(jo,"DIV",{class:!0});var dr=i(Ho);b(_i.$$.fragment,dr),vb=h(dr),ln=a(dr,"P",{});var jd=i(ln);Fb=n(jd,"The "),kp=a(jd,"CODE",{});var s0=i(kp);yb=n(s0,"FlaxRoFormerPreTrainedModel"),s0.forEach(o),bb=n(jd," forward method, overrides the "),vp=a(jd,"CODE",{});var r0=i(vp);wb=n(r0,"__call__"),r0.forEach(o),Tb=n(jd," special method."),jd.forEach(o),$b=h(dr),b(Ls.$$.fragment,dr),xb=h(dr),b(Os.$$.fragment,dr),dr.forEach(o),jo.forEach(o),Ah=h(s),dn=a(s,"H2",{class:!0});var Af=i(dn);Ds=a(Af,"A",{id:!0,class:!0,href:!0});var a0=i(Ds);Fp=a(a0,"SPAN",{});var i0=i(Fp);b(ki.$$.fragment,i0),i0.forEach(o),a0.forEach(o),Rb=h(Af),yp=a(Af,"SPAN",{});var l0=i(yp);Eb=n(l0,"FlaxRoFormerForMaskedLM"),l0.forEach(o),Af.forEach(o),Lh=h(s),oo=a(s,"DIV",{class:!0});var zo=i(oo);b(vi.$$.fragment,zo),Mb=h(zo),Fi=a(zo,"P",{});var Lf=i(Fi);jb=n(Lf,"RoFormer Model with a "),bp=a(Lf,"CODE",{});var d0=i(bp);zb=n(d0,"language modeling"),d0.forEach(o),Cb=n(Lf," head on top."),Lf.forEach(o),qb=h(zo),yi=a(zo,"P",{});var Of=i(yi);Pb=n(Of,"This model inherits from "),td=a(Of,"A",{href:!0});var c0=i(td);Ab=n(c0,"FlaxPreTrainedModel"),c0.forEach(o),Lb=n(Of,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Of.forEach(o),Ob=h(zo),bi=a(zo,"P",{});var Df=i(bi);Db=n(Df,"This model is also a Flax Linen "),wi=a(Df,"A",{href:!0,rel:!0});var p0=i(wi);Ib=n(p0,"flax.linen.Module"),p0.forEach(o),Nb=n(Df,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Df.forEach(o),Sb=h(zo),wp=a(zo,"P",{});var m0=i(wp);Wb=n(m0,"Finally, this model supports inherent JAX features such as:"),m0.forEach(o),Ub=h(zo),dt=a(zo,"UL",{});var cr=i(dt);Tp=a(cr,"LI",{});var h0=i(Tp);Ti=a(h0,"A",{href:!0,rel:!0});var f0=i(Ti);Kb=n(f0,"Just-In-Time (JIT) compilation"),f0.forEach(o),h0.forEach(o),Qb=h(cr),$p=a(cr,"LI",{});var u0=i($p);$i=a(u0,"A",{href:!0,rel:!0});var g0=i($i);Hb=n(g0,"Automatic Differentiation"),g0.forEach(o),u0.forEach(o),Vb=h(cr),xp=a(cr,"LI",{});var _0=i(xp);xi=a(_0,"A",{href:!0,rel:!0});var k0=i(xi);Bb=n(k0,"Vectorization"),k0.forEach(o),_0.forEach(o),Jb=h(cr),Rp=a(cr,"LI",{});var v0=i(Rp);Ri=a(v0,"A",{href:!0,rel:!0});var F0=i(Ri);Gb=n(F0,"Parallelization"),F0.forEach(o),v0.forEach(o),cr.forEach(o),Xb=h(zo),Vo=a(zo,"DIV",{class:!0});var pr=i(Vo);b(Ei.$$.fragment,pr),Yb=h(pr),cn=a(pr,"P",{});var zd=i(cn);Zb=n(zd,"The "),Ep=a(zd,"CODE",{});var y0=i(Ep);e2=n(y0,"FlaxRoFormerPreTrainedModel"),y0.forEach(o),o2=n(zd," forward method, overrides the "),Mp=a(zd,"CODE",{});var b0=i(Mp);t2=n(b0,"__call__"),b0.forEach(o),n2=n(zd," special method."),zd.forEach(o),s2=h(pr),b(Is.$$.fragment,pr),r2=h(pr),b(Ns.$$.fragment,pr),pr.forEach(o),zo.forEach(o),Oh=h(s),pn=a(s,"H2",{class:!0});var If=i(pn);Ss=a(If,"A",{id:!0,class:!0,href:!0});var w0=i(Ss);jp=a(w0,"SPAN",{});var T0=i(jp);b(Mi.$$.fragment,T0),T0.forEach(o),w0.forEach(o),a2=h(If),zp=a(If,"SPAN",{});var $0=i(zp);i2=n($0,"FlaxRoFormerForSequenceClassification"),$0.forEach(o),If.forEach(o),Dh=h(s),to=a(s,"DIV",{class:!0});var Co=i(to);b(ji.$$.fragment,Co),l2=h(Co),Cp=a(Co,"P",{});var x0=i(Cp);d2=n(x0,`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),x0.forEach(o),c2=h(Co),zi=a(Co,"P",{});var Nf=i(zi);p2=n(Nf,"This model inherits from "),nd=a(Nf,"A",{href:!0});var R0=i(nd);m2=n(R0,"FlaxPreTrainedModel"),R0.forEach(o),h2=n(Nf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Nf.forEach(o),f2=h(Co),Ci=a(Co,"P",{});var Sf=i(Ci);u2=n(Sf,"This model is also a Flax Linen "),qi=a(Sf,"A",{href:!0,rel:!0});var E0=i(qi);g2=n(E0,"flax.linen.Module"),E0.forEach(o),_2=n(Sf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Sf.forEach(o),k2=h(Co),qp=a(Co,"P",{});var M0=i(qp);v2=n(M0,"Finally, this model supports inherent JAX features such as:"),M0.forEach(o),F2=h(Co),ct=a(Co,"UL",{});var mr=i(ct);Pp=a(mr,"LI",{});var j0=i(Pp);Pi=a(j0,"A",{href:!0,rel:!0});var z0=i(Pi);y2=n(z0,"Just-In-Time (JIT) compilation"),z0.forEach(o),j0.forEach(o),b2=h(mr),Ap=a(mr,"LI",{});var C0=i(Ap);Ai=a(C0,"A",{href:!0,rel:!0});var q0=i(Ai);w2=n(q0,"Automatic Differentiation"),q0.forEach(o),C0.forEach(o),T2=h(mr),Lp=a(mr,"LI",{});var P0=i(Lp);Li=a(P0,"A",{href:!0,rel:!0});var A0=i(Li);$2=n(A0,"Vectorization"),A0.forEach(o),P0.forEach(o),x2=h(mr),Op=a(mr,"LI",{});var L0=i(Op);Oi=a(L0,"A",{href:!0,rel:!0});var O0=i(Oi);R2=n(O0,"Parallelization"),O0.forEach(o),L0.forEach(o),mr.forEach(o),E2=h(Co),Bo=a(Co,"DIV",{class:!0});var hr=i(Bo);b(Di.$$.fragment,hr),M2=h(hr),mn=a(hr,"P",{});var Cd=i(mn);j2=n(Cd,"The "),Dp=a(Cd,"CODE",{});var D0=i(Dp);z2=n(D0,"FlaxRoFormerPreTrainedModel"),D0.forEach(o),C2=n(Cd," forward method, overrides the "),Ip=a(Cd,"CODE",{});var I0=i(Ip);q2=n(I0,"__call__"),I0.forEach(o),P2=n(Cd," special method."),Cd.forEach(o),A2=h(hr),b(Ws.$$.fragment,hr),L2=h(hr),b(Us.$$.fragment,hr),hr.forEach(o),Co.forEach(o),Ih=h(s),hn=a(s,"H2",{class:!0});var Wf=i(hn);Ks=a(Wf,"A",{id:!0,class:!0,href:!0});var N0=i(Ks);Np=a(N0,"SPAN",{});var S0=i(Np);b(Ii.$$.fragment,S0),S0.forEach(o),N0.forEach(o),O2=h(Wf),Sp=a(Wf,"SPAN",{});var W0=i(Sp);D2=n(W0,"FlaxRoFormerForMultipleChoice"),W0.forEach(o),Wf.forEach(o),Nh=h(s),no=a(s,"DIV",{class:!0});var qo=i(no);b(Ni.$$.fragment,qo),I2=h(qo),Wp=a(qo,"P",{});var U0=i(Wp);N2=n(U0,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),U0.forEach(o),S2=h(qo),Si=a(qo,"P",{});var Uf=i(Si);W2=n(Uf,"This model inherits from "),sd=a(Uf,"A",{href:!0});var K0=i(sd);U2=n(K0,"FlaxPreTrainedModel"),K0.forEach(o),K2=n(Uf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uf.forEach(o),Q2=h(qo),Wi=a(qo,"P",{});var Kf=i(Wi);H2=n(Kf,"This model is also a Flax Linen "),Ui=a(Kf,"A",{href:!0,rel:!0});var Q0=i(Ui);V2=n(Q0,"flax.linen.Module"),Q0.forEach(o),B2=n(Kf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Kf.forEach(o),J2=h(qo),Up=a(qo,"P",{});var H0=i(Up);G2=n(H0,"Finally, this model supports inherent JAX features such as:"),H0.forEach(o),X2=h(qo),pt=a(qo,"UL",{});var fr=i(pt);Kp=a(fr,"LI",{});var V0=i(Kp);Ki=a(V0,"A",{href:!0,rel:!0});var B0=i(Ki);Y2=n(B0,"Just-In-Time (JIT) compilation"),B0.forEach(o),V0.forEach(o),Z2=h(fr),Qp=a(fr,"LI",{});var J0=i(Qp);Qi=a(J0,"A",{href:!0,rel:!0});var G0=i(Qi);ew=n(G0,"Automatic Differentiation"),G0.forEach(o),J0.forEach(o),ow=h(fr),Hp=a(fr,"LI",{});var X0=i(Hp);Hi=a(X0,"A",{href:!0,rel:!0});var Y0=i(Hi);tw=n(Y0,"Vectorization"),Y0.forEach(o),X0.forEach(o),nw=h(fr),Vp=a(fr,"LI",{});var Z0=i(Vp);Vi=a(Z0,"A",{href:!0,rel:!0});var e4=i(Vi);sw=n(e4,"Parallelization"),e4.forEach(o),Z0.forEach(o),fr.forEach(o),rw=h(qo),Jo=a(qo,"DIV",{class:!0});var ur=i(Jo);b(Bi.$$.fragment,ur),aw=h(ur),fn=a(ur,"P",{});var qd=i(fn);iw=n(qd,"The "),Bp=a(qd,"CODE",{});var o4=i(Bp);lw=n(o4,"FlaxRoFormerPreTrainedModel"),o4.forEach(o),dw=n(qd," forward method, overrides the "),Jp=a(qd,"CODE",{});var t4=i(Jp);cw=n(t4,"__call__"),t4.forEach(o),pw=n(qd," special method."),qd.forEach(o),mw=h(ur),b(Qs.$$.fragment,ur),hw=h(ur),b(Hs.$$.fragment,ur),ur.forEach(o),qo.forEach(o),Sh=h(s),un=a(s,"H2",{class:!0});var Qf=i(un);Vs=a(Qf,"A",{id:!0,class:!0,href:!0});var n4=i(Vs);Gp=a(n4,"SPAN",{});var s4=i(Gp);b(Ji.$$.fragment,s4),s4.forEach(o),n4.forEach(o),fw=h(Qf),Xp=a(Qf,"SPAN",{});var r4=i(Xp);uw=n(r4,"FlaxRoFormerForTokenClassification"),r4.forEach(o),Qf.forEach(o),Wh=h(s),so=a(s,"DIV",{class:!0});var Po=i(so);b(Gi.$$.fragment,Po),gw=h(Po),Yp=a(Po,"P",{});var a4=i(Yp);_w=n(a4,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),a4.forEach(o),kw=h(Po),Xi=a(Po,"P",{});var Hf=i(Xi);vw=n(Hf,"This model inherits from "),rd=a(Hf,"A",{href:!0});var i4=i(rd);Fw=n(i4,"FlaxPreTrainedModel"),i4.forEach(o),yw=n(Hf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hf.forEach(o),bw=h(Po),Yi=a(Po,"P",{});var Vf=i(Yi);ww=n(Vf,"This model is also a Flax Linen "),Zi=a(Vf,"A",{href:!0,rel:!0});var l4=i(Zi);Tw=n(l4,"flax.linen.Module"),l4.forEach(o),$w=n(Vf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Vf.forEach(o),xw=h(Po),Zp=a(Po,"P",{});var d4=i(Zp);Rw=n(d4,"Finally, this model supports inherent JAX features such as:"),d4.forEach(o),Ew=h(Po),mt=a(Po,"UL",{});var gr=i(mt);em=a(gr,"LI",{});var c4=i(em);el=a(c4,"A",{href:!0,rel:!0});var p4=i(el);Mw=n(p4,"Just-In-Time (JIT) compilation"),p4.forEach(o),c4.forEach(o),jw=h(gr),om=a(gr,"LI",{});var m4=i(om);ol=a(m4,"A",{href:!0,rel:!0});var h4=i(ol);zw=n(h4,"Automatic Differentiation"),h4.forEach(o),m4.forEach(o),Cw=h(gr),tm=a(gr,"LI",{});var f4=i(tm);tl=a(f4,"A",{href:!0,rel:!0});var u4=i(tl);qw=n(u4,"Vectorization"),u4.forEach(o),f4.forEach(o),Pw=h(gr),nm=a(gr,"LI",{});var g4=i(nm);nl=a(g4,"A",{href:!0,rel:!0});var _4=i(nl);Aw=n(_4,"Parallelization"),_4.forEach(o),g4.forEach(o),gr.forEach(o),Lw=h(Po),Go=a(Po,"DIV",{class:!0});var _r=i(Go);b(sl.$$.fragment,_r),Ow=h(_r),gn=a(_r,"P",{});var Pd=i(gn);Dw=n(Pd,"The "),sm=a(Pd,"CODE",{});var k4=i(sm);Iw=n(k4,"FlaxRoFormerPreTrainedModel"),k4.forEach(o),Nw=n(Pd," forward method, overrides the "),rm=a(Pd,"CODE",{});var v4=i(rm);Sw=n(v4,"__call__"),v4.forEach(o),Ww=n(Pd," special method."),Pd.forEach(o),Uw=h(_r),b(Bs.$$.fragment,_r),Kw=h(_r),b(Js.$$.fragment,_r),_r.forEach(o),Po.forEach(o),Uh=h(s),_n=a(s,"H2",{class:!0});var Bf=i(_n);Gs=a(Bf,"A",{id:!0,class:!0,href:!0});var F4=i(Gs);am=a(F4,"SPAN",{});var y4=i(am);b(rl.$$.fragment,y4),y4.forEach(o),F4.forEach(o),Qw=h(Bf),im=a(Bf,"SPAN",{});var b4=i(im);Hw=n(b4,"FlaxRoFormerForQuestionAnswering"),b4.forEach(o),Bf.forEach(o),Kh=h(s),ro=a(s,"DIV",{class:!0});var Ao=i(ro);b(al.$$.fragment,Ao),Vw=h(Ao),kn=a(Ao,"P",{});var Ad=i(kn);Bw=n(Ad,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),lm=a(Ad,"CODE",{});var w4=i(lm);Jw=n(w4,"span start logits"),w4.forEach(o),Gw=n(Ad," and "),dm=a(Ad,"CODE",{});var T4=i(dm);Xw=n(T4,"span end logits"),T4.forEach(o),Yw=n(Ad,")."),Ad.forEach(o),Zw=h(Ao),il=a(Ao,"P",{});var Jf=i(il);eT=n(Jf,"This model inherits from "),ad=a(Jf,"A",{href:!0});var $4=i(ad);oT=n($4,"FlaxPreTrainedModel"),$4.forEach(o),tT=n(Jf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jf.forEach(o),nT=h(Ao),ll=a(Ao,"P",{});var Gf=i(ll);sT=n(Gf,"This model is also a Flax Linen "),dl=a(Gf,"A",{href:!0,rel:!0});var x4=i(dl);rT=n(x4,"flax.linen.Module"),x4.forEach(o),aT=n(Gf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gf.forEach(o),iT=h(Ao),cm=a(Ao,"P",{});var R4=i(cm);lT=n(R4,"Finally, this model supports inherent JAX features such as:"),R4.forEach(o),dT=h(Ao),ht=a(Ao,"UL",{});var kr=i(ht);pm=a(kr,"LI",{});var E4=i(pm);cl=a(E4,"A",{href:!0,rel:!0});var M4=i(cl);cT=n(M4,"Just-In-Time (JIT) compilation"),M4.forEach(o),E4.forEach(o),pT=h(kr),mm=a(kr,"LI",{});var j4=i(mm);pl=a(j4,"A",{href:!0,rel:!0});var z4=i(pl);mT=n(z4,"Automatic Differentiation"),z4.forEach(o),j4.forEach(o),hT=h(kr),hm=a(kr,"LI",{});var C4=i(hm);ml=a(C4,"A",{href:!0,rel:!0});var q4=i(ml);fT=n(q4,"Vectorization"),q4.forEach(o),C4.forEach(o),uT=h(kr),fm=a(kr,"LI",{});var P4=i(fm);hl=a(P4,"A",{href:!0,rel:!0});var A4=i(hl);gT=n(A4,"Parallelization"),A4.forEach(o),P4.forEach(o),kr.forEach(o),_T=h(Ao),Xo=a(Ao,"DIV",{class:!0});var vr=i(Xo);b(fl.$$.fragment,vr),kT=h(vr),vn=a(vr,"P",{});var Ld=i(vn);vT=n(Ld,"The "),um=a(Ld,"CODE",{});var L4=i(um);FT=n(L4,"FlaxRoFormerPreTrainedModel"),L4.forEach(o),yT=n(Ld," forward method, overrides the "),gm=a(Ld,"CODE",{});var O4=i(gm);bT=n(O4,"__call__"),O4.forEach(o),wT=n(Ld," special method."),Ld.forEach(o),TT=h(vr),b(Xs.$$.fragment,vr),$T=h(vr),b(Ys.$$.fragment,vr),vr.forEach(o),Ao.forEach(o),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(Gx)),u(f,"id","roformer"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#roformer"),u(c,"class","relative group"),u(ae,"id","overview"),u(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ae,"href","#overview"),u(I,"class","relative group"),u(ie,"href","https://arxiv.org/pdf/2104.09864v1.pdf"),u(ie,"rel","nofollow"),u(q,"href","https://huggingface.co/junnyu"),u(q,"rel","nofollow"),u(le,"href","https://github.com/ZhuiyiTechnology/roformer"),u(le,"rel","nofollow"),u(O,"id","transformers.RoFormerConfig"),u(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(O,"href","#transformers.RoFormerConfig"),u(re,"class","relative group"),u(Se,"href","/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerModel"),u(Ne,"href","https://huggingface.co/junnyu/roformer_chinese_base"),u(Ne,"rel","nofollow"),u(We,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ue,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Z,"id","transformers.RoFormerTokenizer"),u(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Z,"href","#transformers.RoFormerTokenizer"),u(De,"class","relative group"),u(wr,"href","https://pypi.org/project/rjieba/"),u(wr,"rel","nofollow"),u(xl,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ml,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"id","transformers.RoFormerTokenizerFast"),u(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(En,"href","#transformers.RoFormerTokenizerFast"),u(Et,"class","relative group"),u(jl,"href","/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerTokenizerFast"),u(zl,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizerFast"),u(Cl,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zn,"id","transformers.RoFormerModel"),u(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zn,"href","#transformers.RoFormerModel"),u(Mt,"class","relative group"),u(Nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Nr,"rel","nofollow"),u(Wr,"href","https://arxiv.org/abs/1706.03762"),u(Wr,"rel","nofollow"),u(Al,"href","/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerModel"),u(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"id","transformers.RoFormerForCausalLM"),u(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pn,"href","#transformers.RoFormerForCausalLM"),u(zt,"class","relative group"),u(Hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Hr,"rel","nofollow"),u(Ll,"href","/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerForCausalLM"),u(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(On,"id","transformers.RoFormerForMaskedLM"),u(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(On,"href","#transformers.RoFormerForMaskedLM"),u(Pt,"class","relative group"),u(Gr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Gr,"rel","nofollow"),u(Ol,"href","/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerForMaskedLM"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Sn,"id","transformers.RoFormerForSequenceClassification"),u(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Sn,"href","#transformers.RoFormerForSequenceClassification"),u(Ot,"class","relative group"),u(oa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(oa,"rel","nofollow"),u(Dl,"href","/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerForSequenceClassification"),u(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vn,"id","transformers.RoFormerForMultipleChoice"),u(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vn,"href","#transformers.RoFormerForMultipleChoice"),u(It,"class","relative group"),u(aa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(aa,"rel","nofollow"),u(Il,"href","/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerForMultipleChoice"),u(Uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.RoFormerForTokenClassification"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.RoFormerForTokenClassification"),u(St,"class","relative group"),u(pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(pa,"rel","nofollow"),u(Nl,"href","/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerForTokenClassification"),u(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"id","transformers.RoFormerForQuestionAnswering"),u(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(es,"href","#transformers.RoFormerForQuestionAnswering"),u(Ut,"class","relative group"),u(ga,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ga,"rel","nofollow"),u(Sl,"href","/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.RoFormerForQuestionAnswering"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.TFRoFormerModel"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.TFRoFormerModel"),u(Ht,"class","relative group"),u(Wl,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ba,"rel","nofollow"),u(Ul,"href","/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.TFRoFormerModel"),u(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ls,"id","transformers.TFRoFormerForMaskedLM"),u(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ls,"href","#transformers.TFRoFormerForMaskedLM"),u(Bt,"class","relative group"),u(Kl,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ma,"rel","nofollow"),u(Ql,"href","/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.TFRoFormerForMaskedLM"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(hs,"id","transformers.TFRoFormerForCausalLM"),u(hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(hs,"href","#transformers.TFRoFormerForCausalLM"),u(Gt,"class","relative group"),u(Hl,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(La,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(La,"rel","nofollow"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gs,"id","transformers.TFRoFormerForSequenceClassification"),u(gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(gs,"href","#transformers.TFRoFormerForSequenceClassification"),u(Xt,"class","relative group"),u(Vl,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wa,"rel","nofollow"),u(Bl,"href","/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.TFRoFormerForSequenceClassification"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.TFRoFormerForMultipleChoice"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.TFRoFormerForMultipleChoice"),u(Zt,"class","relative group"),u(Jl,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ba,"rel","nofollow"),u(Gl,"href","/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.TFRoFormerForMultipleChoice"),u(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($s,"id","transformers.TFRoFormerForTokenClassification"),u($s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($s,"href","#transformers.TFRoFormerForTokenClassification"),u(on,"class","relative group"),u(Xl,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(ei,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ei,"rel","nofollow"),u(Yl,"href","/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.TFRoFormerForTokenClassification"),u(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.TFRoFormerForQuestionAnswering"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.TFRoFormerForQuestionAnswering"),u(nn,"class","relative group"),u(Zl,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(ai,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ai,"rel","nofollow"),u(ed,"href","/docs/transformers/v4.22.0/en/model_doc/roformer#transformers.TFRoFormerForQuestionAnswering"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(As,"id","transformers.FlaxRoFormerModel"),u(As,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(As,"href","#transformers.FlaxRoFormerModel"),u(an,"class","relative group"),u(od,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(mi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(mi,"rel","nofollow"),u(hi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(hi,"rel","nofollow"),u(fi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(fi,"rel","nofollow"),u(ui,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ui,"rel","nofollow"),u(gi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(gi,"rel","nofollow"),u(Ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.FlaxRoFormerForMaskedLM"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.FlaxRoFormerForMaskedLM"),u(dn,"class","relative group"),u(td,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(wi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(wi,"rel","nofollow"),u(Ti,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ti,"rel","nofollow"),u($i,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u($i,"rel","nofollow"),u(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(xi,"rel","nofollow"),u(Ri,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ri,"rel","nofollow"),u(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ss,"id","transformers.FlaxRoFormerForSequenceClassification"),u(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ss,"href","#transformers.FlaxRoFormerForSequenceClassification"),u(pn,"class","relative group"),u(nd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(qi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(qi,"rel","nofollow"),u(Pi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Pi,"rel","nofollow"),u(Ai,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ai,"rel","nofollow"),u(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Li,"rel","nofollow"),u(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Oi,"rel","nofollow"),u(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.FlaxRoFormerForMultipleChoice"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.FlaxRoFormerForMultipleChoice"),u(hn,"class","relative group"),u(sd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ui,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ui,"rel","nofollow"),u(Ki,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ki,"rel","nofollow"),u(Qi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Qi,"rel","nofollow"),u(Hi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Hi,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Vi,"rel","nofollow"),u(Jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vs,"id","transformers.FlaxRoFormerForTokenClassification"),u(Vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vs,"href","#transformers.FlaxRoFormerForTokenClassification"),u(un,"class","relative group"),u(rd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Zi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Zi,"rel","nofollow"),u(el,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(el,"rel","nofollow"),u(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ol,"rel","nofollow"),u(tl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(tl,"rel","nofollow"),u(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(nl,"rel","nofollow"),u(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gs,"id","transformers.FlaxRoFormerForQuestionAnswering"),u(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gs,"href","#transformers.FlaxRoFormerForQuestionAnswering"),u(_n,"class","relative group"),u(ad,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(dl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(dl,"rel","nofollow"),u(cl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(cl,"rel","nofollow"),u(pl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(pl,"rel","nofollow"),u(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ml,"rel","nofollow"),u(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(hl,"rel","nofollow"),u(Xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,v){e(document.head,d),_(s,g,v),_(s,c,v),e(c,f),e(f,k),w(l,k,null),e(c,p),e(c,j),e(j,Te),_(s,ge,v),_(s,I,v),e(I,ae),e(ae,ee),w(R,ee,null),e(I,$e),e(I,H),e(H,xe),_(s,_e,v),_(s,N,v),e(N,Re),e(N,ie),e(ie,B),e(N,Ee),_(s,ke,v),_(s,W,v),e(W,Me),_(s,ve,v),_(s,U,v),e(U,he),e(he,je),_(s,te,v),_(s,C,v),e(C,A),_(s,Fe,v),_(s,K,v),e(K,fe),e(fe,ze),_(s,V,v),_(s,ne,v),e(ne,Ce),e(ne,q),e(q,qe),e(ne,J),e(ne,le),e(le,Pe),e(ne,G),_(s,ye,v),_(s,re,v),e(re,O),e(O,ue),w(S,ue,null),e(re,Ae),e(re,oe),e(oe,L),_(s,be,v),_(s,P,v),w(de,P,null),e(P,Le),e(P,F),e(F,M),e(F,Se),e(Se,se),e(F,Ve),e(F,Ne),e(Ne,z),e(F,Be),e(P,Je),e(P,Oe),e(Oe,Ge),e(Oe,We),e(We,D),e(Oe,X),e(Oe,Ue),e(Ue,Xe),e(Oe,Y),e(P,Ye),w(Ie,P,null),_(s,we,v),_(s,De,v),e(De,Z),e(Z,Ke),w(Fr,Ke,null),e(De,Xf),e(De,Od),e(Od,Yf),_(s,th,v),_(s,Ze,v),w(yr,Ze,null),e(Ze,Zf),e(Ze,br),e(br,eu),e(br,wr),e(wr,ou),e(br,tu),e(Ze,nu),e(Ze,Tr),e(Tr,su),e(Tr,xl),e(xl,ru),e(Tr,au),e(Ze,iu),w($n,Ze,null),e(Ze,lu),e(Ze,gt),w($r,gt,null),e(gt,du),e(gt,Dd),e(Dd,cu),e(gt,pu),e(gt,xr),e(xr,Rl),e(Rl,mu),e(Rl,Id),e(Id,hu),e(xr,fu),e(xr,El),e(El,uu),e(El,Nd),e(Nd,gu),e(Ze,_u),e(Ze,xn),w(Rr,xn,null),e(xn,ku),e(xn,Er),e(Er,vu),e(Er,Sd),e(Sd,Fu),e(Er,yu),e(Ze,bu),e(Ze,No),w(Mr,No,null),e(No,wu),e(No,Wd),e(Wd,Tu),e(No,$u),w(Rn,No,null),e(No,xu),e(No,Rt),e(Rt,Ru),e(Rt,Ud),e(Ud,Eu),e(Rt,Mu),e(Rt,Kd),e(Kd,ju),e(Rt,zu),e(Ze,Cu),e(Ze,Ml),w(jr,Ml,null),_(s,nh,v),_(s,Et,v),e(Et,En),e(En,Qd),w(zr,Qd,null),e(Et,qu),e(Et,Hd),e(Hd,Pu),_(s,sh,v),_(s,lo,v),w(Cr,lo,null),e(lo,Au),e(lo,qr),e(qr,Lu),e(qr,Vd),e(Vd,Ou),e(qr,Du),e(lo,Iu),e(lo,Mn),e(Mn,jl),e(jl,Nu),e(Mn,Su),e(Mn,zl),e(zl,Wu),e(Mn,Uu),e(lo,Ku),e(lo,Pr),e(Pr,Qu),e(Pr,Cl),e(Cl,Hu),e(Pr,Vu),e(lo,Bu),w(jn,lo,null),e(lo,Ju),e(lo,_t),w(Ar,_t,null),e(_t,Gu),e(_t,Bd),e(Bd,Xu),e(_t,Yu),e(_t,Lr),e(Lr,ql),e(ql,Zu),e(ql,Jd),e(Jd,eg),e(Lr,og),e(Lr,Pl),e(Pl,tg),e(Pl,Gd),e(Gd,ng),_(s,rh,v),_(s,Mt,v),e(Mt,zn),e(zn,Xd),w(Or,Xd,null),e(Mt,sg),e(Mt,Yd),e(Yd,rg),_(s,ah,v),_(s,ko,v),w(Dr,ko,null),e(ko,ag),e(ko,Ir),e(Ir,ig),e(Ir,Nr),e(Nr,lg),e(Ir,dg),e(ko,cg),e(ko,Sr),e(Sr,pg),e(Sr,Wr),e(Wr,mg),e(Sr,hg),e(ko,fg),e(ko,co),e(co,ug),e(co,Zd),e(Zd,gg),e(co,_g),e(co,ec),e(ec,kg),e(co,vg),e(co,oc),e(oc,Fg),e(co,yg),e(co,tc),e(tc,bg),e(co,wg),e(co,nc),e(nc,Tg),e(co,$g),e(co,sc),e(sc,xg),e(co,Rg),e(ko,Eg),e(ko,So),w(Ur,So,null),e(So,Mg),e(So,jt),e(jt,jg),e(jt,Al),e(Al,zg),e(jt,Cg),e(jt,rc),e(rc,qg),e(jt,Pg),e(So,Ag),w(Cn,So,null),e(So,Lg),w(qn,So,null),_(s,ih,v),_(s,zt,v),e(zt,Pn),e(Pn,ac),w(Kr,ac,null),e(zt,Og),e(zt,ic),e(ic,Dg),_(s,lh,v),_(s,at,v),w(Qr,at,null),e(at,Ig),e(at,Ct),e(Ct,Ng),e(Ct,lc),e(lc,Sg),e(Ct,Wg),e(Ct,Hr),e(Hr,Ug),e(Ct,Kg),e(at,Qg),e(at,Wo),w(Vr,Wo,null),e(Wo,Hg),e(Wo,qt),e(qt,Vg),e(qt,Ll),e(Ll,Bg),e(qt,Jg),e(qt,dc),e(dc,Gg),e(qt,Xg),e(Wo,Yg),w(An,Wo,null),e(Wo,Zg),w(Ln,Wo,null),_(s,dh,v),_(s,Pt,v),e(Pt,On),e(On,cc),w(Br,cc,null),e(Pt,e_),e(Pt,pc),e(pc,o_),_(s,ch,v),_(s,it,v),w(Jr,it,null),e(it,t_),e(it,At),e(At,n_),e(At,mc),e(mc,s_),e(At,r_),e(At,Gr),e(Gr,a_),e(At,i_),e(it,l_),e(it,yo),w(Xr,yo,null),e(yo,d_),e(yo,Lt),e(Lt,c_),e(Lt,Ol),e(Ol,p_),e(Lt,m_),e(Lt,hc),e(hc,h_),e(Lt,f_),e(yo,u_),w(Dn,yo,null),e(yo,g_),w(In,yo,null),e(yo,__),w(Nn,yo,null),_(s,ph,v),_(s,Ot,v),e(Ot,Sn),e(Sn,fc),w(Yr,fc,null),e(Ot,k_),e(Ot,uc),e(uc,v_),_(s,mh,v),_(s,Lo,v),w(Zr,Lo,null),e(Lo,F_),e(Lo,gc),e(gc,y_),e(Lo,b_),e(Lo,ea),e(ea,w_),e(ea,oa),e(oa,T_),e(ea,$_),e(Lo,x_),e(Lo,io),w(ta,io,null),e(io,R_),e(io,Dt),e(Dt,E_),e(Dt,Dl),e(Dl,M_),e(Dt,j_),e(Dt,_c),e(_c,z_),e(Dt,C_),e(io,q_),w(Wn,io,null),e(io,P_),w(Un,io,null),e(io,A_),w(Kn,io,null),e(io,L_),w(Qn,io,null),e(io,O_),w(Hn,io,null),_(s,hh,v),_(s,It,v),e(It,Vn),e(Vn,kc),w(na,kc,null),e(It,D_),e(It,vc),e(vc,I_),_(s,fh,v),_(s,Oo,v),w(sa,Oo,null),e(Oo,N_),e(Oo,Fc),e(Fc,S_),e(Oo,W_),e(Oo,ra),e(ra,U_),e(ra,aa),e(aa,K_),e(ra,Q_),e(Oo,H_),e(Oo,Uo),w(ia,Uo,null),e(Uo,V_),e(Uo,Nt),e(Nt,B_),e(Nt,Il),e(Il,J_),e(Nt,G_),e(Nt,yc),e(yc,X_),e(Nt,Y_),e(Uo,Z_),w(Bn,Uo,null),e(Uo,ek),w(Jn,Uo,null),_(s,uh,v),_(s,St,v),e(St,Gn),e(Gn,bc),w(la,bc,null),e(St,ok),e(St,wc),e(wc,tk),_(s,gh,v),_(s,Do,v),w(da,Do,null),e(Do,nk),e(Do,Tc),e(Tc,sk),e(Do,rk),e(Do,ca),e(ca,ak),e(ca,pa),e(pa,ik),e(ca,lk),e(Do,dk),e(Do,bo),w(ma,bo,null),e(bo,ck),e(bo,Wt),e(Wt,pk),e(Wt,Nl),e(Nl,mk),e(Wt,hk),e(Wt,$c),e($c,fk),e(Wt,uk),e(bo,gk),w(Xn,bo,null),e(bo,_k),w(Yn,bo,null),e(bo,kk),w(Zn,bo,null),_(s,_h,v),_(s,Ut,v),e(Ut,es),e(es,xc),w(ha,xc,null),e(Ut,vk),e(Ut,Rc),e(Rc,Fk),_(s,kh,v),_(s,Io,v),w(fa,Io,null),e(Io,yk),e(Io,Kt),e(Kt,bk),e(Kt,Ec),e(Ec,wk),e(Kt,Tk),e(Kt,Mc),e(Mc,$k),e(Kt,xk),e(Io,Rk),e(Io,ua),e(ua,Ek),e(ua,ga),e(ga,Mk),e(ua,jk),e(Io,zk),e(Io,wo),w(_a,wo,null),e(wo,Ck),e(wo,Qt),e(Qt,qk),e(Qt,Sl),e(Sl,Pk),e(Qt,Ak),e(Qt,jc),e(jc,Lk),e(Qt,Ok),e(wo,Dk),w(os,wo,null),e(wo,Ik),w(ts,wo,null),e(wo,Nk),w(ns,wo,null),_(s,vh,v),_(s,Ht,v),e(Ht,ss),e(ss,zc),w(ka,zc,null),e(Ht,Sk),e(Ht,Cc),e(Cc,Wk),_(s,Fh,v),_(s,po,v),w(va,po,null),e(po,Uk),e(po,qc),e(qc,Kk),e(po,Qk),e(po,Fa),e(Fa,Hk),e(Fa,Wl),e(Wl,Vk),e(Fa,Bk),e(po,Jk),e(po,ya),e(ya,Gk),e(ya,ba),e(ba,Xk),e(ya,Yk),e(po,Zk),w(rs,po,null),e(po,ev),e(po,Ko),w(wa,Ko,null),e(Ko,ov),e(Ko,Vt),e(Vt,tv),e(Vt,Ul),e(Ul,nv),e(Vt,sv),e(Vt,Pc),e(Pc,rv),e(Vt,av),e(Ko,iv),w(as,Ko,null),e(Ko,lv),w(is,Ko,null),_(s,yh,v),_(s,Bt,v),e(Bt,ls),e(ls,Ac),w(Ta,Ac,null),e(Bt,dv),e(Bt,Lc),e(Lc,cv),_(s,bh,v),_(s,mo,v),w($a,mo,null),e(mo,pv),e(mo,xa),e(xa,mv),e(xa,Oc),e(Oc,hv),e(xa,fv),e(mo,uv),e(mo,Ra),e(Ra,gv),e(Ra,Kl),e(Kl,_v),e(Ra,kv),e(mo,vv),e(mo,Ea),e(Ea,Fv),e(Ea,Ma),e(Ma,yv),e(Ea,bv),e(mo,wv),w(ds,mo,null),e(mo,Tv),e(mo,To),w(ja,To,null),e(To,$v),e(To,Jt),e(Jt,xv),e(Jt,Ql),e(Ql,Rv),e(Jt,Ev),e(Jt,Dc),e(Dc,Mv),e(Jt,jv),e(To,zv),w(cs,To,null),e(To,Cv),w(ps,To,null),e(To,qv),w(ms,To,null),_(s,wh,v),_(s,Gt,v),e(Gt,hs),e(hs,Ic),w(za,Ic,null),e(Gt,Pv),e(Gt,Nc),e(Nc,Av),_(s,Th,v),_(s,ho,v),w(Ca,ho,null),e(ho,Lv),e(ho,qa),e(qa,Ov),e(qa,Sc),e(Sc,Dv),e(qa,Iv),e(ho,Nv),e(ho,Pa),e(Pa,Sv),e(Pa,Hl),e(Hl,Wv),e(Pa,Uv),e(ho,Kv),e(ho,Aa),e(Aa,Qv),e(Aa,La),e(La,Hv),e(Aa,Vv),e(ho,Bv),w(fs,ho,null),e(ho,Jv),e(ho,kt),w(Oa,kt,null),e(kt,Gv),e(kt,vo),e(vo,Xv),e(vo,Wc),e(Wc,Yv),e(vo,Zv),e(vo,Uc),e(Uc,eF),e(vo,oF),e(vo,Kc),e(Kc,tF),e(vo,nF),e(vo,Qc),e(Qc,sF),e(vo,rF),e(vo,Hc),e(Hc,aF),e(vo,iF),e(kt,lF),w(us,kt,null),_(s,$h,v),_(s,Xt,v),e(Xt,gs),e(gs,Vc),w(Da,Vc,null),e(Xt,dF),e(Xt,Bc),e(Bc,cF),_(s,xh,v),_(s,fo,v),w(Ia,fo,null),e(fo,pF),e(fo,Jc),e(Jc,mF),e(fo,hF),e(fo,Na),e(Na,fF),e(Na,Vl),e(Vl,uF),e(Na,gF),e(fo,_F),e(fo,Sa),e(Sa,kF),e(Sa,Wa),e(Wa,vF),e(Sa,FF),e(fo,yF),w(_s,fo,null),e(fo,bF),e(fo,$o),w(Ua,$o,null),e($o,wF),e($o,Yt),e(Yt,TF),e(Yt,Bl),e(Bl,$F),e(Yt,xF),e(Yt,Gc),e(Gc,RF),e(Yt,EF),e($o,MF),w(ks,$o,null),e($o,jF),w(vs,$o,null),e($o,zF),w(Fs,$o,null),_(s,Rh,v),_(s,Zt,v),e(Zt,ys),e(ys,Xc),w(Ka,Xc,null),e(Zt,CF),e(Zt,Yc),e(Yc,qF),_(s,Eh,v),_(s,uo,v),w(Qa,uo,null),e(uo,PF),e(uo,Zc),e(Zc,AF),e(uo,LF),e(uo,Ha),e(Ha,OF),e(Ha,Jl),e(Jl,DF),e(Ha,IF),e(uo,NF),e(uo,Va),e(Va,SF),e(Va,Ba),e(Ba,WF),e(Va,UF),e(uo,KF),w(bs,uo,null),e(uo,QF),e(uo,Qo),w(Ja,Qo,null),e(Qo,HF),e(Qo,en),e(en,VF),e(en,Gl),e(Gl,BF),e(en,JF),e(en,ep),e(ep,GF),e(en,XF),e(Qo,YF),w(ws,Qo,null),e(Qo,ZF),w(Ts,Qo,null),_(s,Mh,v),_(s,on,v),e(on,$s),e($s,op),w(Ga,op,null),e(on,ey),e(on,tp),e(tp,oy),_(s,jh,v),_(s,go,v),w(Xa,go,null),e(go,ty),e(go,np),e(np,ny),e(go,sy),e(go,Ya),e(Ya,ry),e(Ya,Xl),e(Xl,ay),e(Ya,iy),e(go,ly),e(go,Za),e(Za,dy),e(Za,ei),e(ei,cy),e(Za,py),e(go,my),w(xs,go,null),e(go,hy),e(go,xo),w(oi,xo,null),e(xo,fy),e(xo,tn),e(tn,uy),e(tn,Yl),e(Yl,gy),e(tn,_y),e(tn,sp),e(sp,ky),e(tn,vy),e(xo,Fy),w(Rs,xo,null),e(xo,yy),w(Es,xo,null),e(xo,by),w(Ms,xo,null),_(s,zh,v),_(s,nn,v),e(nn,js),e(js,rp),w(ti,rp,null),e(nn,wy),e(nn,ap),e(ap,Ty),_(s,Ch,v),_(s,_o,v),w(ni,_o,null),e(_o,$y),e(_o,sn),e(sn,xy),e(sn,ip),e(ip,Ry),e(sn,Ey),e(sn,lp),e(lp,My),e(sn,jy),e(_o,zy),e(_o,si),e(si,Cy),e(si,Zl),e(Zl,qy),e(si,Py),e(_o,Ay),e(_o,ri),e(ri,Ly),e(ri,ai),e(ai,Oy),e(ri,Dy),e(_o,Iy),w(zs,_o,null),e(_o,Ny),e(_o,Ro),w(ii,Ro,null),e(Ro,Sy),e(Ro,rn),e(rn,Wy),e(rn,ed),e(ed,Uy),e(rn,Ky),e(rn,dp),e(dp,Qy),e(rn,Hy),e(Ro,Vy),w(Cs,Ro,null),e(Ro,By),w(qs,Ro,null),e(Ro,Jy),w(Ps,Ro,null),_(s,qh,v),_(s,an,v),e(an,As),e(As,cp),w(li,cp,null),e(an,Gy),e(an,pp),e(pp,Xy),_(s,Ph,v),_(s,eo,v),w(di,eo,null),e(eo,Yy),e(eo,mp),e(mp,Zy),e(eo,eb),e(eo,ci),e(ci,ob),e(ci,od),e(od,tb),e(ci,nb),e(eo,sb),e(eo,pi),e(pi,rb),e(pi,mi),e(mi,ab),e(pi,ib),e(eo,lb),e(eo,hp),e(hp,db),e(eo,cb),e(eo,lt),e(lt,fp),e(fp,hi),e(hi,pb),e(lt,mb),e(lt,up),e(up,fi),e(fi,hb),e(lt,fb),e(lt,gp),e(gp,ui),e(ui,ub),e(lt,gb),e(lt,_p),e(_p,gi),e(gi,_b),e(eo,kb),e(eo,Ho),w(_i,Ho,null),e(Ho,vb),e(Ho,ln),e(ln,Fb),e(ln,kp),e(kp,yb),e(ln,bb),e(ln,vp),e(vp,wb),e(ln,Tb),e(Ho,$b),w(Ls,Ho,null),e(Ho,xb),w(Os,Ho,null),_(s,Ah,v),_(s,dn,v),e(dn,Ds),e(Ds,Fp),w(ki,Fp,null),e(dn,Rb),e(dn,yp),e(yp,Eb),_(s,Lh,v),_(s,oo,v),w(vi,oo,null),e(oo,Mb),e(oo,Fi),e(Fi,jb),e(Fi,bp),e(bp,zb),e(Fi,Cb),e(oo,qb),e(oo,yi),e(yi,Pb),e(yi,td),e(td,Ab),e(yi,Lb),e(oo,Ob),e(oo,bi),e(bi,Db),e(bi,wi),e(wi,Ib),e(bi,Nb),e(oo,Sb),e(oo,wp),e(wp,Wb),e(oo,Ub),e(oo,dt),e(dt,Tp),e(Tp,Ti),e(Ti,Kb),e(dt,Qb),e(dt,$p),e($p,$i),e($i,Hb),e(dt,Vb),e(dt,xp),e(xp,xi),e(xi,Bb),e(dt,Jb),e(dt,Rp),e(Rp,Ri),e(Ri,Gb),e(oo,Xb),e(oo,Vo),w(Ei,Vo,null),e(Vo,Yb),e(Vo,cn),e(cn,Zb),e(cn,Ep),e(Ep,e2),e(cn,o2),e(cn,Mp),e(Mp,t2),e(cn,n2),e(Vo,s2),w(Is,Vo,null),e(Vo,r2),w(Ns,Vo,null),_(s,Oh,v),_(s,pn,v),e(pn,Ss),e(Ss,jp),w(Mi,jp,null),e(pn,a2),e(pn,zp),e(zp,i2),_(s,Dh,v),_(s,to,v),w(ji,to,null),e(to,l2),e(to,Cp),e(Cp,d2),e(to,c2),e(to,zi),e(zi,p2),e(zi,nd),e(nd,m2),e(zi,h2),e(to,f2),e(to,Ci),e(Ci,u2),e(Ci,qi),e(qi,g2),e(Ci,_2),e(to,k2),e(to,qp),e(qp,v2),e(to,F2),e(to,ct),e(ct,Pp),e(Pp,Pi),e(Pi,y2),e(ct,b2),e(ct,Ap),e(Ap,Ai),e(Ai,w2),e(ct,T2),e(ct,Lp),e(Lp,Li),e(Li,$2),e(ct,x2),e(ct,Op),e(Op,Oi),e(Oi,R2),e(to,E2),e(to,Bo),w(Di,Bo,null),e(Bo,M2),e(Bo,mn),e(mn,j2),e(mn,Dp),e(Dp,z2),e(mn,C2),e(mn,Ip),e(Ip,q2),e(mn,P2),e(Bo,A2),w(Ws,Bo,null),e(Bo,L2),w(Us,Bo,null),_(s,Ih,v),_(s,hn,v),e(hn,Ks),e(Ks,Np),w(Ii,Np,null),e(hn,O2),e(hn,Sp),e(Sp,D2),_(s,Nh,v),_(s,no,v),w(Ni,no,null),e(no,I2),e(no,Wp),e(Wp,N2),e(no,S2),e(no,Si),e(Si,W2),e(Si,sd),e(sd,U2),e(Si,K2),e(no,Q2),e(no,Wi),e(Wi,H2),e(Wi,Ui),e(Ui,V2),e(Wi,B2),e(no,J2),e(no,Up),e(Up,G2),e(no,X2),e(no,pt),e(pt,Kp),e(Kp,Ki),e(Ki,Y2),e(pt,Z2),e(pt,Qp),e(Qp,Qi),e(Qi,ew),e(pt,ow),e(pt,Hp),e(Hp,Hi),e(Hi,tw),e(pt,nw),e(pt,Vp),e(Vp,Vi),e(Vi,sw),e(no,rw),e(no,Jo),w(Bi,Jo,null),e(Jo,aw),e(Jo,fn),e(fn,iw),e(fn,Bp),e(Bp,lw),e(fn,dw),e(fn,Jp),e(Jp,cw),e(fn,pw),e(Jo,mw),w(Qs,Jo,null),e(Jo,hw),w(Hs,Jo,null),_(s,Sh,v),_(s,un,v),e(un,Vs),e(Vs,Gp),w(Ji,Gp,null),e(un,fw),e(un,Xp),e(Xp,uw),_(s,Wh,v),_(s,so,v),w(Gi,so,null),e(so,gw),e(so,Yp),e(Yp,_w),e(so,kw),e(so,Xi),e(Xi,vw),e(Xi,rd),e(rd,Fw),e(Xi,yw),e(so,bw),e(so,Yi),e(Yi,ww),e(Yi,Zi),e(Zi,Tw),e(Yi,$w),e(so,xw),e(so,Zp),e(Zp,Rw),e(so,Ew),e(so,mt),e(mt,em),e(em,el),e(el,Mw),e(mt,jw),e(mt,om),e(om,ol),e(ol,zw),e(mt,Cw),e(mt,tm),e(tm,tl),e(tl,qw),e(mt,Pw),e(mt,nm),e(nm,nl),e(nl,Aw),e(so,Lw),e(so,Go),w(sl,Go,null),e(Go,Ow),e(Go,gn),e(gn,Dw),e(gn,sm),e(sm,Iw),e(gn,Nw),e(gn,rm),e(rm,Sw),e(gn,Ww),e(Go,Uw),w(Bs,Go,null),e(Go,Kw),w(Js,Go,null),_(s,Uh,v),_(s,_n,v),e(_n,Gs),e(Gs,am),w(rl,am,null),e(_n,Qw),e(_n,im),e(im,Hw),_(s,Kh,v),_(s,ro,v),w(al,ro,null),e(ro,Vw),e(ro,kn),e(kn,Bw),e(kn,lm),e(lm,Jw),e(kn,Gw),e(kn,dm),e(dm,Xw),e(kn,Yw),e(ro,Zw),e(ro,il),e(il,eT),e(il,ad),e(ad,oT),e(il,tT),e(ro,nT),e(ro,ll),e(ll,sT),e(ll,dl),e(dl,rT),e(ll,aT),e(ro,iT),e(ro,cm),e(cm,lT),e(ro,dT),e(ro,ht),e(ht,pm),e(pm,cl),e(cl,cT),e(ht,pT),e(ht,mm),e(mm,pl),e(pl,mT),e(ht,hT),e(ht,hm),e(hm,ml),e(ml,fT),e(ht,uT),e(ht,fm),e(fm,hl),e(hl,gT),e(ro,_T),e(ro,Xo),w(fl,Xo,null),e(Xo,kT),e(Xo,vn),e(vn,vT),e(vn,um),e(um,FT),e(vn,yT),e(vn,gm),e(gm,bT),e(vn,wT),e(Xo,TT),w(Xs,Xo,null),e(Xo,$T),w(Ys,Xo,null),Qh=!0},p(s,[v]){const ul={};v&2&&(ul.$$scope={dirty:v,ctx:s}),Ie.$set(ul);const _m={};v&2&&(_m.$$scope={dirty:v,ctx:s}),$n.$set(_m);const km={};v&2&&(km.$$scope={dirty:v,ctx:s}),Rn.$set(km);const vm={};v&2&&(vm.$$scope={dirty:v,ctx:s}),jn.$set(vm);const gl={};v&2&&(gl.$$scope={dirty:v,ctx:s}),Cn.$set(gl);const Fm={};v&2&&(Fm.$$scope={dirty:v,ctx:s}),qn.$set(Fm);const ym={};v&2&&(ym.$$scope={dirty:v,ctx:s}),An.$set(ym);const bm={};v&2&&(bm.$$scope={dirty:v,ctx:s}),Ln.$set(bm);const _l={};v&2&&(_l.$$scope={dirty:v,ctx:s}),Dn.$set(_l);const wm={};v&2&&(wm.$$scope={dirty:v,ctx:s}),In.$set(wm);const Tm={};v&2&&(Tm.$$scope={dirty:v,ctx:s}),Nn.$set(Tm);const $m={};v&2&&($m.$$scope={dirty:v,ctx:s}),Wn.$set($m);const xm={};v&2&&(xm.$$scope={dirty:v,ctx:s}),Un.$set(xm);const Rm={};v&2&&(Rm.$$scope={dirty:v,ctx:s}),Kn.$set(Rm);const Em={};v&2&&(Em.$$scope={dirty:v,ctx:s}),Qn.$set(Em);const Mm={};v&2&&(Mm.$$scope={dirty:v,ctx:s}),Hn.$set(Mm);const Fn={};v&2&&(Fn.$$scope={dirty:v,ctx:s}),Bn.$set(Fn);const jm={};v&2&&(jm.$$scope={dirty:v,ctx:s}),Jn.$set(jm);const zm={};v&2&&(zm.$$scope={dirty:v,ctx:s}),Xn.$set(zm);const kl={};v&2&&(kl.$$scope={dirty:v,ctx:s}),Yn.$set(kl);const Cm={};v&2&&(Cm.$$scope={dirty:v,ctx:s}),Zn.$set(Cm);const qm={};v&2&&(qm.$$scope={dirty:v,ctx:s}),os.$set(qm);const Pm={};v&2&&(Pm.$$scope={dirty:v,ctx:s}),ts.$set(Pm);const ft={};v&2&&(ft.$$scope={dirty:v,ctx:s}),ns.$set(ft);const yn={};v&2&&(yn.$$scope={dirty:v,ctx:s}),rs.$set(yn);const Am={};v&2&&(Am.$$scope={dirty:v,ctx:s}),as.$set(Am);const Lm={};v&2&&(Lm.$$scope={dirty:v,ctx:s}),is.$set(Lm);const bn={};v&2&&(bn.$$scope={dirty:v,ctx:s}),ds.$set(bn);const Om={};v&2&&(Om.$$scope={dirty:v,ctx:s}),cs.$set(Om);const Dm={};v&2&&(Dm.$$scope={dirty:v,ctx:s}),ps.$set(Dm);const vl={};v&2&&(vl.$$scope={dirty:v,ctx:s}),ms.$set(vl);const Im={};v&2&&(Im.$$scope={dirty:v,ctx:s}),fs.$set(Im);const Nm={};v&2&&(Nm.$$scope={dirty:v,ctx:s}),us.$set(Nm);const Sm={};v&2&&(Sm.$$scope={dirty:v,ctx:s}),_s.$set(Sm);const ao={};v&2&&(ao.$$scope={dirty:v,ctx:s}),ks.$set(ao);const Fl={};v&2&&(Fl.$$scope={dirty:v,ctx:s}),vs.$set(Fl);const Wm={};v&2&&(Wm.$$scope={dirty:v,ctx:s}),Fs.$set(Wm);const yl={};v&2&&(yl.$$scope={dirty:v,ctx:s}),bs.$set(yl);const Um={};v&2&&(Um.$$scope={dirty:v,ctx:s}),ws.$set(Um);const wn={};v&2&&(wn.$$scope={dirty:v,ctx:s}),Ts.$set(wn);const Km={};v&2&&(Km.$$scope={dirty:v,ctx:s}),xs.$set(Km);const bl={};v&2&&(bl.$$scope={dirty:v,ctx:s}),Rs.$set(bl);const id={};v&2&&(id.$$scope={dirty:v,ctx:s}),Es.$set(id);const Qm={};v&2&&(Qm.$$scope={dirty:v,ctx:s}),Ms.$set(Qm);const ld={};v&2&&(ld.$$scope={dirty:v,ctx:s}),zs.$set(ld);const Hm={};v&2&&(Hm.$$scope={dirty:v,ctx:s}),Cs.$set(Hm);const wl={};v&2&&(wl.$$scope={dirty:v,ctx:s}),qs.$set(wl);const Tl={};v&2&&(Tl.$$scope={dirty:v,ctx:s}),Ps.$set(Tl);const Vm={};v&2&&(Vm.$$scope={dirty:v,ctx:s}),Ls.$set(Vm);const ut={};v&2&&(ut.$$scope={dirty:v,ctx:s}),Os.$set(ut);const Bm={};v&2&&(Bm.$$scope={dirty:v,ctx:s}),Is.$set(Bm);const Tn={};v&2&&(Tn.$$scope={dirty:v,ctx:s}),Ns.$set(Tn);const Jm={};v&2&&(Jm.$$scope={dirty:v,ctx:s}),Ws.$set(Jm);const Gm={};v&2&&(Gm.$$scope={dirty:v,ctx:s}),Us.$set(Gm);const Xm={};v&2&&(Xm.$$scope={dirty:v,ctx:s}),Qs.$set(Xm);const $l={};v&2&&($l.$$scope={dirty:v,ctx:s}),Hs.$set($l);const Ym={};v&2&&(Ym.$$scope={dirty:v,ctx:s}),Bs.$set(Ym);const Zm={};v&2&&(Zm.$$scope={dirty:v,ctx:s}),Js.$set(Zm);const eh={};v&2&&(eh.$$scope={dirty:v,ctx:s}),Xs.$set(eh);const Fo={};v&2&&(Fo.$$scope={dirty:v,ctx:s}),Ys.$set(Fo)},i(s){Qh||(T(l.$$.fragment,s),T(R.$$.fragment,s),T(S.$$.fragment,s),T(de.$$.fragment,s),T(Ie.$$.fragment,s),T(Fr.$$.fragment,s),T(yr.$$.fragment,s),T($n.$$.fragment,s),T($r.$$.fragment,s),T(Rr.$$.fragment,s),T(Mr.$$.fragment,s),T(Rn.$$.fragment,s),T(jr.$$.fragment,s),T(zr.$$.fragment,s),T(Cr.$$.fragment,s),T(jn.$$.fragment,s),T(Ar.$$.fragment,s),T(Or.$$.fragment,s),T(Dr.$$.fragment,s),T(Ur.$$.fragment,s),T(Cn.$$.fragment,s),T(qn.$$.fragment,s),T(Kr.$$.fragment,s),T(Qr.$$.fragment,s),T(Vr.$$.fragment,s),T(An.$$.fragment,s),T(Ln.$$.fragment,s),T(Br.$$.fragment,s),T(Jr.$$.fragment,s),T(Xr.$$.fragment,s),T(Dn.$$.fragment,s),T(In.$$.fragment,s),T(Nn.$$.fragment,s),T(Yr.$$.fragment,s),T(Zr.$$.fragment,s),T(ta.$$.fragment,s),T(Wn.$$.fragment,s),T(Un.$$.fragment,s),T(Kn.$$.fragment,s),T(Qn.$$.fragment,s),T(Hn.$$.fragment,s),T(na.$$.fragment,s),T(sa.$$.fragment,s),T(ia.$$.fragment,s),T(Bn.$$.fragment,s),T(Jn.$$.fragment,s),T(la.$$.fragment,s),T(da.$$.fragment,s),T(ma.$$.fragment,s),T(Xn.$$.fragment,s),T(Yn.$$.fragment,s),T(Zn.$$.fragment,s),T(ha.$$.fragment,s),T(fa.$$.fragment,s),T(_a.$$.fragment,s),T(os.$$.fragment,s),T(ts.$$.fragment,s),T(ns.$$.fragment,s),T(ka.$$.fragment,s),T(va.$$.fragment,s),T(rs.$$.fragment,s),T(wa.$$.fragment,s),T(as.$$.fragment,s),T(is.$$.fragment,s),T(Ta.$$.fragment,s),T($a.$$.fragment,s),T(ds.$$.fragment,s),T(ja.$$.fragment,s),T(cs.$$.fragment,s),T(ps.$$.fragment,s),T(ms.$$.fragment,s),T(za.$$.fragment,s),T(Ca.$$.fragment,s),T(fs.$$.fragment,s),T(Oa.$$.fragment,s),T(us.$$.fragment,s),T(Da.$$.fragment,s),T(Ia.$$.fragment,s),T(_s.$$.fragment,s),T(Ua.$$.fragment,s),T(ks.$$.fragment,s),T(vs.$$.fragment,s),T(Fs.$$.fragment,s),T(Ka.$$.fragment,s),T(Qa.$$.fragment,s),T(bs.$$.fragment,s),T(Ja.$$.fragment,s),T(ws.$$.fragment,s),T(Ts.$$.fragment,s),T(Ga.$$.fragment,s),T(Xa.$$.fragment,s),T(xs.$$.fragment,s),T(oi.$$.fragment,s),T(Rs.$$.fragment,s),T(Es.$$.fragment,s),T(Ms.$$.fragment,s),T(ti.$$.fragment,s),T(ni.$$.fragment,s),T(zs.$$.fragment,s),T(ii.$$.fragment,s),T(Cs.$$.fragment,s),T(qs.$$.fragment,s),T(Ps.$$.fragment,s),T(li.$$.fragment,s),T(di.$$.fragment,s),T(_i.$$.fragment,s),T(Ls.$$.fragment,s),T(Os.$$.fragment,s),T(ki.$$.fragment,s),T(vi.$$.fragment,s),T(Ei.$$.fragment,s),T(Is.$$.fragment,s),T(Ns.$$.fragment,s),T(Mi.$$.fragment,s),T(ji.$$.fragment,s),T(Di.$$.fragment,s),T(Ws.$$.fragment,s),T(Us.$$.fragment,s),T(Ii.$$.fragment,s),T(Ni.$$.fragment,s),T(Bi.$$.fragment,s),T(Qs.$$.fragment,s),T(Hs.$$.fragment,s),T(Ji.$$.fragment,s),T(Gi.$$.fragment,s),T(sl.$$.fragment,s),T(Bs.$$.fragment,s),T(Js.$$.fragment,s),T(rl.$$.fragment,s),T(al.$$.fragment,s),T(fl.$$.fragment,s),T(Xs.$$.fragment,s),T(Ys.$$.fragment,s),Qh=!0)},o(s){$(l.$$.fragment,s),$(R.$$.fragment,s),$(S.$$.fragment,s),$(de.$$.fragment,s),$(Ie.$$.fragment,s),$(Fr.$$.fragment,s),$(yr.$$.fragment,s),$($n.$$.fragment,s),$($r.$$.fragment,s),$(Rr.$$.fragment,s),$(Mr.$$.fragment,s),$(Rn.$$.fragment,s),$(jr.$$.fragment,s),$(zr.$$.fragment,s),$(Cr.$$.fragment,s),$(jn.$$.fragment,s),$(Ar.$$.fragment,s),$(Or.$$.fragment,s),$(Dr.$$.fragment,s),$(Ur.$$.fragment,s),$(Cn.$$.fragment,s),$(qn.$$.fragment,s),$(Kr.$$.fragment,s),$(Qr.$$.fragment,s),$(Vr.$$.fragment,s),$(An.$$.fragment,s),$(Ln.$$.fragment,s),$(Br.$$.fragment,s),$(Jr.$$.fragment,s),$(Xr.$$.fragment,s),$(Dn.$$.fragment,s),$(In.$$.fragment,s),$(Nn.$$.fragment,s),$(Yr.$$.fragment,s),$(Zr.$$.fragment,s),$(ta.$$.fragment,s),$(Wn.$$.fragment,s),$(Un.$$.fragment,s),$(Kn.$$.fragment,s),$(Qn.$$.fragment,s),$(Hn.$$.fragment,s),$(na.$$.fragment,s),$(sa.$$.fragment,s),$(ia.$$.fragment,s),$(Bn.$$.fragment,s),$(Jn.$$.fragment,s),$(la.$$.fragment,s),$(da.$$.fragment,s),$(ma.$$.fragment,s),$(Xn.$$.fragment,s),$(Yn.$$.fragment,s),$(Zn.$$.fragment,s),$(ha.$$.fragment,s),$(fa.$$.fragment,s),$(_a.$$.fragment,s),$(os.$$.fragment,s),$(ts.$$.fragment,s),$(ns.$$.fragment,s),$(ka.$$.fragment,s),$(va.$$.fragment,s),$(rs.$$.fragment,s),$(wa.$$.fragment,s),$(as.$$.fragment,s),$(is.$$.fragment,s),$(Ta.$$.fragment,s),$($a.$$.fragment,s),$(ds.$$.fragment,s),$(ja.$$.fragment,s),$(cs.$$.fragment,s),$(ps.$$.fragment,s),$(ms.$$.fragment,s),$(za.$$.fragment,s),$(Ca.$$.fragment,s),$(fs.$$.fragment,s),$(Oa.$$.fragment,s),$(us.$$.fragment,s),$(Da.$$.fragment,s),$(Ia.$$.fragment,s),$(_s.$$.fragment,s),$(Ua.$$.fragment,s),$(ks.$$.fragment,s),$(vs.$$.fragment,s),$(Fs.$$.fragment,s),$(Ka.$$.fragment,s),$(Qa.$$.fragment,s),$(bs.$$.fragment,s),$(Ja.$$.fragment,s),$(ws.$$.fragment,s),$(Ts.$$.fragment,s),$(Ga.$$.fragment,s),$(Xa.$$.fragment,s),$(xs.$$.fragment,s),$(oi.$$.fragment,s),$(Rs.$$.fragment,s),$(Es.$$.fragment,s),$(Ms.$$.fragment,s),$(ti.$$.fragment,s),$(ni.$$.fragment,s),$(zs.$$.fragment,s),$(ii.$$.fragment,s),$(Cs.$$.fragment,s),$(qs.$$.fragment,s),$(Ps.$$.fragment,s),$(li.$$.fragment,s),$(di.$$.fragment,s),$(_i.$$.fragment,s),$(Ls.$$.fragment,s),$(Os.$$.fragment,s),$(ki.$$.fragment,s),$(vi.$$.fragment,s),$(Ei.$$.fragment,s),$(Is.$$.fragment,s),$(Ns.$$.fragment,s),$(Mi.$$.fragment,s),$(ji.$$.fragment,s),$(Di.$$.fragment,s),$(Ws.$$.fragment,s),$(Us.$$.fragment,s),$(Ii.$$.fragment,s),$(Ni.$$.fragment,s),$(Bi.$$.fragment,s),$(Qs.$$.fragment,s),$(Hs.$$.fragment,s),$(Ji.$$.fragment,s),$(Gi.$$.fragment,s),$(sl.$$.fragment,s),$(Bs.$$.fragment,s),$(Js.$$.fragment,s),$(rl.$$.fragment,s),$(al.$$.fragment,s),$(fl.$$.fragment,s),$(Xs.$$.fragment,s),$(Ys.$$.fragment,s),Qh=!1},d(s){o(d),s&&o(g),s&&o(c),x(l),s&&o(ge),s&&o(I),x(R),s&&o(_e),s&&o(N),s&&o(ke),s&&o(W),s&&o(ve),s&&o(U),s&&o(te),s&&o(C),s&&o(Fe),s&&o(K),s&&o(V),s&&o(ne),s&&o(ye),s&&o(re),x(S),s&&o(be),s&&o(P),x(de),x(Ie),s&&o(we),s&&o(De),x(Fr),s&&o(th),s&&o(Ze),x(yr),x($n),x($r),x(Rr),x(Mr),x(Rn),x(jr),s&&o(nh),s&&o(Et),x(zr),s&&o(sh),s&&o(lo),x(Cr),x(jn),x(Ar),s&&o(rh),s&&o(Mt),x(Or),s&&o(ah),s&&o(ko),x(Dr),x(Ur),x(Cn),x(qn),s&&o(ih),s&&o(zt),x(Kr),s&&o(lh),s&&o(at),x(Qr),x(Vr),x(An),x(Ln),s&&o(dh),s&&o(Pt),x(Br),s&&o(ch),s&&o(it),x(Jr),x(Xr),x(Dn),x(In),x(Nn),s&&o(ph),s&&o(Ot),x(Yr),s&&o(mh),s&&o(Lo),x(Zr),x(ta),x(Wn),x(Un),x(Kn),x(Qn),x(Hn),s&&o(hh),s&&o(It),x(na),s&&o(fh),s&&o(Oo),x(sa),x(ia),x(Bn),x(Jn),s&&o(uh),s&&o(St),x(la),s&&o(gh),s&&o(Do),x(da),x(ma),x(Xn),x(Yn),x(Zn),s&&o(_h),s&&o(Ut),x(ha),s&&o(kh),s&&o(Io),x(fa),x(_a),x(os),x(ts),x(ns),s&&o(vh),s&&o(Ht),x(ka),s&&o(Fh),s&&o(po),x(va),x(rs),x(wa),x(as),x(is),s&&o(yh),s&&o(Bt),x(Ta),s&&o(bh),s&&o(mo),x($a),x(ds),x(ja),x(cs),x(ps),x(ms),s&&o(wh),s&&o(Gt),x(za),s&&o(Th),s&&o(ho),x(Ca),x(fs),x(Oa),x(us),s&&o($h),s&&o(Xt),x(Da),s&&o(xh),s&&o(fo),x(Ia),x(_s),x(Ua),x(ks),x(vs),x(Fs),s&&o(Rh),s&&o(Zt),x(Ka),s&&o(Eh),s&&o(uo),x(Qa),x(bs),x(Ja),x(ws),x(Ts),s&&o(Mh),s&&o(on),x(Ga),s&&o(jh),s&&o(go),x(Xa),x(xs),x(oi),x(Rs),x(Es),x(Ms),s&&o(zh),s&&o(nn),x(ti),s&&o(Ch),s&&o(_o),x(ni),x(zs),x(ii),x(Cs),x(qs),x(Ps),s&&o(qh),s&&o(an),x(li),s&&o(Ph),s&&o(eo),x(di),x(_i),x(Ls),x(Os),s&&o(Ah),s&&o(dn),x(ki),s&&o(Lh),s&&o(oo),x(vi),x(Ei),x(Is),x(Ns),s&&o(Oh),s&&o(pn),x(Mi),s&&o(Dh),s&&o(to),x(ji),x(Di),x(Ws),x(Us),s&&o(Ih),s&&o(hn),x(Ii),s&&o(Nh),s&&o(no),x(Ni),x(Bi),x(Qs),x(Hs),s&&o(Sh),s&&o(un),x(Ji),s&&o(Wh),s&&o(so),x(Gi),x(sl),x(Bs),x(Js),s&&o(Uh),s&&o(_n),x(rl),s&&o(Kh),s&&o(ro),x(al),x(fl),x(Xs),x(Ys)}}}const Gx={local:"roformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.RoFormerConfig",title:"RoFormerConfig"},{local:"transformers.RoFormerTokenizer",title:"RoFormerTokenizer"},{local:"transformers.RoFormerTokenizerFast",title:"RoFormerTokenizerFast"},{local:"transformers.RoFormerModel",title:"RoFormerModel"},{local:"transformers.RoFormerForCausalLM",title:"RoFormerForCausalLM"},{local:"transformers.RoFormerForMaskedLM",title:"RoFormerForMaskedLM"},{local:"transformers.RoFormerForSequenceClassification",title:"RoFormerForSequenceClassification"},{local:"transformers.RoFormerForMultipleChoice",title:"RoFormerForMultipleChoice"},{local:"transformers.RoFormerForTokenClassification",title:"RoFormerForTokenClassification"},{local:"transformers.RoFormerForQuestionAnswering",title:"RoFormerForQuestionAnswering"},{local:"transformers.TFRoFormerModel",title:"TFRoFormerModel"},{local:"transformers.TFRoFormerForMaskedLM",title:"TFRoFormerForMaskedLM"},{local:"transformers.TFRoFormerForCausalLM",title:"TFRoFormerForCausalLM"},{local:"transformers.TFRoFormerForSequenceClassification",title:"TFRoFormerForSequenceClassification"},{local:"transformers.TFRoFormerForMultipleChoice",title:"TFRoFormerForMultipleChoice"},{local:"transformers.TFRoFormerForTokenClassification",title:"TFRoFormerForTokenClassification"},{local:"transformers.TFRoFormerForQuestionAnswering",title:"TFRoFormerForQuestionAnswering"},{local:"transformers.FlaxRoFormerModel",title:"FlaxRoFormerModel"},{local:"transformers.FlaxRoFormerForMaskedLM",title:"FlaxRoFormerForMaskedLM"},{local:"transformers.FlaxRoFormerForSequenceClassification",title:"FlaxRoFormerForSequenceClassification"},{local:"transformers.FlaxRoFormerForMultipleChoice",title:"FlaxRoFormerForMultipleChoice"},{local:"transformers.FlaxRoFormerForTokenClassification",title:"FlaxRoFormerForTokenClassification"},{local:"transformers.FlaxRoFormerForQuestionAnswering",title:"FlaxRoFormerForQuestionAnswering"}],title:"RoFormer"};function Xx(E){return W4(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sR extends D4{constructor(d){super();I4(this,d,Xx,Jx,N4,{})}}export{sR as default,Gx as metadata};
