import{S as D4,i as I4,s as N4,e as s,k as m,w as F,t,M as S4,c as a,d as o,m as h,a as i,x as b,h as n,b as u,G as e,g as _,y as w,q as T,o as $,B as x,v as W4,L as pe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Be}from"../../chunks/Tip-hf-doc-builder.js";import{D as B}from"../../chunks/Docstring-hf-doc-builder.js";import{C as me}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Qe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function U4(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerModel, RoFormerConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function K4(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
tokenizer.tokenize("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>)
<span class="hljs-comment"># [&#x27;\u4ECA&#x27;, &#x27;\u5929&#x27;, &#x27;\u5929&#x27;, &#x27;\u6C14&#x27;, &#x27;\u975E\u5E38&#x27;, &#x27;\u597D&#x27;, &#x27;\u3002&#x27;]</span>`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function B4(E){let d,g,c,f,k;return f=new me({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=s("p"),g=t("sequence pair mask has the following format:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"sequence pair mask has the following format:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Q4(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizerFast

tokenizer = RoFormerTokenizerFast.from_pretrained("junnyu/roformer_chinese_base")
tokenizer.tokenize("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizerFast.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>)
<span class="hljs-comment"># [&#x27;\u4ECA&#x27;, &#x27;\u5929&#x27;, &#x27;\u5929&#x27;, &#x27;\u6C14&#x27;, &#x27;\u975E\u5E38&#x27;, &#x27;\u597D&#x27;, &#x27;\u3002&#x27;]</span>`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function H4(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function V4(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, RoFormerModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function J4(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function X4(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Z4(E){let d,g;return d=new me({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function ex(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
`}}),{c(){d=s("p"),g=t("Example of single-label classification:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example of single-label classification:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function tx(E){let d,g;return d=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function nx(E){let d,g,c,f,k;return f=new me({props:{code:`import torch
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
`}}),{c(){d=s("p"),g=t("Example of multi-label classification:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example of multi-label classification:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function rx(E){let d,g;return d=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function sx(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function ix(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function dx(E){let d,g;return d=new me({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function cx(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function mx(E){let d,g;return d=new me({props:{code:`# target is "nice puppet"
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
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function hx(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,Q,xe,_e,N,Re,ie,V,Ee,ke,W,Me,ve,U,he,je,te,C,A,ye,K,fe,ze,H,ne,Ce,q,qe,J,le,Pe,G,Fe,se,O,ue,S,Ae,oe,L,be,P,de,Le;return{c(){d=s("p"),g=t("TensorFlow models and layers in "),c=s("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=s("ul"),j=s("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=s("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=s("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=s("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=s("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=s("code"),Ee=t("fit()"),ke=t(" and "),W=s("code"),Me=t("predict()"),ve=t(`, such as when creating your own layers or models with
the Keras `),U=s("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=s("ul"),A=s("li"),ye=t("a single Tensor with "),K=s("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),H=s("code"),ne=t("model(input_ids)"),Ce=m(),q=s("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=s("code"),Fe=t("model([input_ids, attention_mask, token_type_ids])"),se=m(),O=s("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=s("p"),be=t(`Note that when creating models and layers with
`),P=s("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(y),p=a(y,"UL",{});var re=i(p);j=a(re,"LI",{});var He=i(j);Te=n(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(o),ge=h(re),I=a(re,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),re.forEach(o),ee=h(y),R=a(y,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(z,"CODE",{});var Ve=i(Q);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ve=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(y),C=a(y,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);ye=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),H=a(X,"CODE",{});var Xe=i(H);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);Fe=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),se=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(y),L=a(y,"P",{});var Z=i(L);be=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,M),_(y,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(y,ee,M),_(y,R,M),e(R,$e),e(R,Q),e(Q,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ve),e(R,U),e(U,he),e(R,je),_(y,te,M),_(y,C,M),e(C,A),e(A,ye),e(A,K),e(K,fe),e(A,ze),e(A,H),e(H,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,Fe),e(C,se),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(y,oe,M),_(y,L,M),e(L,be),e(L,P),e(P,de),e(L,Le)},d(y){y&&o(d),y&&o(l),y&&o(p),y&&o(ee),y&&o(R),y&&o(te),y&&o(C),y&&o(oe),y&&o(L)}}}function fx(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function gx(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,Q,xe,_e,N,Re,ie,V,Ee,ke,W,Me,ve,U,he,je,te,C,A,ye,K,fe,ze,H,ne,Ce,q,qe,J,le,Pe,G,Fe,se,O,ue,S,Ae,oe,L,be,P,de,Le;return{c(){d=s("p"),g=t("TensorFlow models and layers in "),c=s("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=s("ul"),j=s("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=s("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=s("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=s("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=s("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=s("code"),Ee=t("fit()"),ke=t(" and "),W=s("code"),Me=t("predict()"),ve=t(`, such as when creating your own layers or models with
the Keras `),U=s("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=s("ul"),A=s("li"),ye=t("a single Tensor with "),K=s("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),H=s("code"),ne=t("model(input_ids)"),Ce=m(),q=s("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=s("code"),Fe=t("model([input_ids, attention_mask, token_type_ids])"),se=m(),O=s("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=s("p"),be=t(`Note that when creating models and layers with
`),P=s("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(y),p=a(y,"UL",{});var re=i(p);j=a(re,"LI",{});var He=i(j);Te=n(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(o),ge=h(re),I=a(re,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),re.forEach(o),ee=h(y),R=a(y,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(z,"CODE",{});var Ve=i(Q);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ve=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(y),C=a(y,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);ye=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),H=a(X,"CODE",{});var Xe=i(H);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);Fe=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),se=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(y),L=a(y,"P",{});var Z=i(L);be=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,M),_(y,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(y,ee,M),_(y,R,M),e(R,$e),e(R,Q),e(Q,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ve),e(R,U),e(U,he),e(R,je),_(y,te,M),_(y,C,M),e(C,A),e(A,ye),e(A,K),e(K,fe),e(A,ze),e(A,H),e(H,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,Fe),e(C,se),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(y,oe,M),_(y,L,M),e(L,be),e(L,P),e(P,de),e(L,Le)},d(y){y&&o(d),y&&o(l),y&&o(p),y&&o(ee),y&&o(R),y&&o(te),y&&o(C),y&&o(oe),y&&o(L)}}}function _x(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function vx(E){let d,g;return d=new me({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function yx(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,Q,xe,_e,N,Re,ie,V,Ee,ke,W,Me,ve,U,he,je,te,C,A,ye,K,fe,ze,H,ne,Ce,q,qe,J,le,Pe,G,Fe,se,O,ue,S,Ae,oe,L,be,P,de,Le;return{c(){d=s("p"),g=t("TensorFlow models and layers in "),c=s("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=s("ul"),j=s("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=s("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=s("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=s("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=s("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=s("code"),Ee=t("fit()"),ke=t(" and "),W=s("code"),Me=t("predict()"),ve=t(`, such as when creating your own layers or models with
the Keras `),U=s("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=s("ul"),A=s("li"),ye=t("a single Tensor with "),K=s("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),H=s("code"),ne=t("model(input_ids)"),Ce=m(),q=s("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=s("code"),Fe=t("model([input_ids, attention_mask, token_type_ids])"),se=m(),O=s("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=s("p"),be=t(`Note that when creating models and layers with
`),P=s("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(y),p=a(y,"UL",{});var re=i(p);j=a(re,"LI",{});var He=i(j);Te=n(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(o),ge=h(re),I=a(re,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),re.forEach(o),ee=h(y),R=a(y,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(z,"CODE",{});var Ve=i(Q);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ve=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(y),C=a(y,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);ye=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),H=a(X,"CODE",{});var Xe=i(H);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);Fe=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),se=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(y),L=a(y,"P",{});var Z=i(L);be=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,M),_(y,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(y,ee,M),_(y,R,M),e(R,$e),e(R,Q),e(Q,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ve),e(R,U),e(U,he),e(R,je),_(y,te,M),_(y,C,M),e(C,A),e(A,ye),e(A,K),e(K,fe),e(A,ze),e(A,H),e(H,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,Fe),e(C,se),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(y,oe,M),_(y,L,M),e(L,be),e(L,P),e(P,de),e(L,Le)},d(y){y&&o(d),y&&o(l),y&&o(p),y&&o(ee),y&&o(R),y&&o(te),y&&o(C),y&&o(oe),y&&o(L)}}}function Fx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function bx(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,Q,xe,_e,N,Re,ie,V,Ee,ke,W,Me,ve,U,he,je,te,C,A,ye,K,fe,ze,H,ne,Ce,q,qe,J,le,Pe,G,Fe,se,O,ue,S,Ae,oe,L,be,P,de,Le;return{c(){d=s("p"),g=t("TensorFlow models and layers in "),c=s("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=s("ul"),j=s("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=s("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=s("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=s("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=s("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=s("code"),Ee=t("fit()"),ke=t(" and "),W=s("code"),Me=t("predict()"),ve=t(`, such as when creating your own layers or models with
the Keras `),U=s("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=s("ul"),A=s("li"),ye=t("a single Tensor with "),K=s("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),H=s("code"),ne=t("model(input_ids)"),Ce=m(),q=s("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=s("code"),Fe=t("model([input_ids, attention_mask, token_type_ids])"),se=m(),O=s("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=s("p"),be=t(`Note that when creating models and layers with
`),P=s("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(y),p=a(y,"UL",{});var re=i(p);j=a(re,"LI",{});var He=i(j);Te=n(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(o),ge=h(re),I=a(re,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),re.forEach(o),ee=h(y),R=a(y,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(z,"CODE",{});var Ve=i(Q);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ve=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(y),C=a(y,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);ye=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),H=a(X,"CODE",{});var Xe=i(H);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);Fe=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),se=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(y),L=a(y,"P",{});var Z=i(L);be=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,M),_(y,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(y,ee,M),_(y,R,M),e(R,$e),e(R,Q),e(Q,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ve),e(R,U),e(U,he),e(R,je),_(y,te,M),_(y,C,M),e(C,A),e(A,ye),e(A,K),e(K,fe),e(A,ze),e(A,H),e(H,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,Fe),e(C,se),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(y,oe,M),_(y,L,M),e(L,be),e(L,P),e(P,de),e(L,Le)},d(y){y&&o(d),y&&o(l),y&&o(p),y&&o(ee),y&&o(R),y&&o(te),y&&o(C),y&&o(oe),y&&o(L)}}}function wx(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function $x(E){let d,g;return d=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function xx(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,Q,xe,_e,N,Re,ie,V,Ee,ke,W,Me,ve,U,he,je,te,C,A,ye,K,fe,ze,H,ne,Ce,q,qe,J,le,Pe,G,Fe,se,O,ue,S,Ae,oe,L,be,P,de,Le;return{c(){d=s("p"),g=t("TensorFlow models and layers in "),c=s("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=s("ul"),j=s("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=s("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=s("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=s("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=s("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=s("code"),Ee=t("fit()"),ke=t(" and "),W=s("code"),Me=t("predict()"),ve=t(`, such as when creating your own layers or models with
the Keras `),U=s("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=s("ul"),A=s("li"),ye=t("a single Tensor with "),K=s("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),H=s("code"),ne=t("model(input_ids)"),Ce=m(),q=s("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=s("code"),Fe=t("model([input_ids, attention_mask, token_type_ids])"),se=m(),O=s("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=s("p"),be=t(`Note that when creating models and layers with
`),P=s("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(y),p=a(y,"UL",{});var re=i(p);j=a(re,"LI",{});var He=i(j);Te=n(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(o),ge=h(re),I=a(re,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),re.forEach(o),ee=h(y),R=a(y,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(z,"CODE",{});var Ve=i(Q);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ve=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(y),C=a(y,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);ye=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),H=a(X,"CODE",{});var Xe=i(H);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);Fe=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),se=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(y),L=a(y,"P",{});var Z=i(L);be=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,M),_(y,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(y,ee,M),_(y,R,M),e(R,$e),e(R,Q),e(Q,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ve),e(R,U),e(U,he),e(R,je),_(y,te,M),_(y,C,M),e(C,A),e(A,ye),e(A,K),e(K,fe),e(A,ze),e(A,H),e(H,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,Fe),e(C,se),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(y,oe,M),_(y,L,M),e(L,be),e(L,P),e(P,de),e(L,Le)},d(y){y&&o(d),y&&o(l),y&&o(p),y&&o(ee),y&&o(R),y&&o(te),y&&o(C),y&&o(oe),y&&o(L)}}}function Rx(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Mx(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,Q,xe,_e,N,Re,ie,V,Ee,ke,W,Me,ve,U,he,je,te,C,A,ye,K,fe,ze,H,ne,Ce,q,qe,J,le,Pe,G,Fe,se,O,ue,S,Ae,oe,L,be,P,de,Le;return{c(){d=s("p"),g=t("TensorFlow models and layers in "),c=s("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=s("ul"),j=s("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=s("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=s("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=s("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=s("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=s("code"),Ee=t("fit()"),ke=t(" and "),W=s("code"),Me=t("predict()"),ve=t(`, such as when creating your own layers or models with
the Keras `),U=s("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=s("ul"),A=s("li"),ye=t("a single Tensor with "),K=s("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),H=s("code"),ne=t("model(input_ids)"),Ce=m(),q=s("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=s("code"),Fe=t("model([input_ids, attention_mask, token_type_ids])"),se=m(),O=s("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=s("p"),be=t(`Note that when creating models and layers with
`),P=s("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(y),p=a(y,"UL",{});var re=i(p);j=a(re,"LI",{});var He=i(j);Te=n(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(o),ge=h(re),I=a(re,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),re.forEach(o),ee=h(y),R=a(y,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(z,"CODE",{});var Ve=i(Q);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ve=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(y),C=a(y,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);ye=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),H=a(X,"CODE",{});var Xe=i(H);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);Fe=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),se=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(y),L=a(y,"P",{});var Z=i(L);be=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,M),_(y,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(y,ee,M),_(y,R,M),e(R,$e),e(R,Q),e(Q,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ve),e(R,U),e(U,he),e(R,je),_(y,te,M),_(y,C,M),e(C,A),e(A,ye),e(A,K),e(K,fe),e(A,ze),e(A,H),e(H,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,Fe),e(C,se),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(y,oe,M),_(y,L,M),e(L,be),e(L,P),e(P,de),e(L,Le)},d(y){y&&o(d),y&&o(l),y&&o(p),y&&o(ee),y&&o(R),y&&o(te),y&&o(C),y&&o(oe),y&&o(L)}}}function jx(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Cx(E){let d,g;return d=new me({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function qx(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,Q,xe,_e,N,Re,ie,V,Ee,ke,W,Me,ve,U,he,je,te,C,A,ye,K,fe,ze,H,ne,Ce,q,qe,J,le,Pe,G,Fe,se,O,ue,S,Ae,oe,L,be,P,de,Le;return{c(){d=s("p"),g=t("TensorFlow models and layers in "),c=s("code"),f=t("transformers"),k=t(" accept two formats as input:"),l=m(),p=s("ul"),j=s("li"),Te=t("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),I=s("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=m(),R=s("p"),$e=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=s("code"),xe=t("model.fit()"),_e=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=s("code"),Re=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=s("code"),Ee=t("fit()"),ke=t(" and "),W=s("code"),Me=t("predict()"),ve=t(`, such as when creating your own layers or models with
the Keras `),U=s("code"),he=t("Functional"),je=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),C=s("ul"),A=s("li"),ye=t("a single Tensor with "),K=s("code"),fe=t("input_ids"),ze=t(" only and nothing else: "),H=s("code"),ne=t("model(input_ids)"),Ce=m(),q=s("li"),qe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s("code"),le=t("model([input_ids, attention_mask])"),Pe=t(" or "),G=s("code"),Fe=t("model([input_ids, attention_mask, token_type_ids])"),se=m(),O=s("li"),ue=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s("code"),Ae=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=m(),L=s("p"),be=t(`Note that when creating models and layers with
`),P=s("a"),de=t("subclassing"),Le=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var M=i(d);g=n(M,"TensorFlow models and layers in "),c=a(M,"CODE",{});var Se=i(c);f=n(Se,"transformers"),Se.forEach(o),k=n(M," accept two formats as input:"),M.forEach(o),l=h(y),p=a(y,"UL",{});var re=i(p);j=a(re,"LI",{});var He=i(j);Te=n(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(o),ge=h(re),I=a(re,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(o),re.forEach(o),ee=h(y),R=a(y,"P",{});var z=i(R);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(z,"CODE",{});var Ve=i(Q);xe=n(Ve,"model.fit()"),Ve.forEach(o),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a(z,"CODE",{});var Je=i(N);Re=n(Je,"model.fit()"),Je.forEach(o),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(z,"CODE",{});var Oe=i(V);Ee=n(Oe,"fit()"),Oe.forEach(o),ke=n(z," and "),W=a(z,"CODE",{});var Ge=i(W);Me=n(Ge,"predict()"),Ge.forEach(o),ve=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var We=i(U);he=n(We,"Functional"),We.forEach(o),je=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(o),te=h(y),C=a(y,"UL",{});var D=i(C);A=a(D,"LI",{});var X=i(A);ye=n(X,"a single Tensor with "),K=a(X,"CODE",{});var Ue=i(K);fe=n(Ue,"input_ids"),Ue.forEach(o),ze=n(X," only and nothing else: "),H=a(X,"CODE",{});var Xe=i(H);ne=n(Xe,"model(input_ids)"),Xe.forEach(o),X.forEach(o),Ce=h(D),q=a(D,"LI",{});var Y=i(q);qe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(Y,"CODE",{});var Ye=i(J);le=n(Ye,"model([input_ids, attention_mask])"),Ye.forEach(o),Pe=n(Y," or "),G=a(Y,"CODE",{});var Ie=i(G);Fe=n(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(o),Y.forEach(o),se=h(D),O=a(D,"LI",{});var we=i(O);ue=n(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a(we,"CODE",{});var De=i(S);Ae=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(o),we.forEach(o),D.forEach(o),oe=h(y),L=a(y,"P",{});var Z=i(L);be=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ke=i(P);de=n(Ke,"subclassing"),Ke.forEach(o),Le=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(o),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,M),_(y,p,M),e(p,j),e(j,Te),e(p,ge),e(p,I),e(I,ae),_(y,ee,M),_(y,R,M),e(R,$e),e(R,Q),e(Q,xe),e(R,_e),e(R,N),e(N,Re),e(R,ie),e(R,V),e(V,Ee),e(R,ke),e(R,W),e(W,Me),e(R,ve),e(R,U),e(U,he),e(R,je),_(y,te,M),_(y,C,M),e(C,A),e(A,ye),e(A,K),e(K,fe),e(A,ze),e(A,H),e(H,ne),e(C,Ce),e(C,q),e(q,qe),e(q,J),e(J,le),e(q,Pe),e(q,G),e(G,Fe),e(C,se),e(C,O),e(O,ue),e(O,S),e(S,Ae),_(y,oe,M),_(y,L,M),e(L,be),e(L,P),e(P,de),e(L,Le)},d(y){y&&o(d),y&&o(l),y&&o(p),y&&o(ee),y&&o(R),y&&o(te),y&&o(C),y&&o(oe),y&&o(L)}}}function Px(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Lx(E){let d,g;return d=new me({props:{code:`# target is "nice puppet"
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
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function Ox(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Ix(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Sx(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Ux(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Bx(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function Qx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForTokenClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForTokenClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Hx(E){let d,g,c,f,k;return{c(){d=s("p"),g=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=t("Module"),k=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);f=n(j,"Module"),j.forEach(o),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&o(d)}}}function Vx(E){let d,g,c,f,k;return f=new me({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=s("p"),g=t("Example:"),c=m(),F(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(o),c=h(l),b(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),w(f,l,p),k=!0},p:pe,i(l){k||(T(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),x(f,l)}}}function Jx(E){let d,g,c,f,k,l,p,j,Te,ge,I,ae,ee,R,$e,Q,xe,_e,N,Re,ie,V,Ee,ke,W,Me,ve,U,he,je,te,C,A,ye,K,fe,ze,H,ne,Ce,q,qe,J,le,Pe,G,Fe,se,O,ue,S,Ae,oe,L,be,P,de,Le,y,M,Se,re,He,Ne,z,Ve,Je,Oe,Ge,We,D,X,Ue,Xe,Y,Ye,Ie,we,De,Z,Ke,ys,Xf,Od,Yf,th,Ze,Fs,Zf,bs,eu,ws,ou,tu,nu,Ts,ru,xl,su,au,iu,$n,lu,gt,$s,du,Dd,cu,pu,xs,Rl,mu,Id,hu,fu,El,uu,Nd,gu,_u,xn,Rs,ku,Es,vu,Sd,yu,Fu,bu,No,Ms,wu,Wd,Tu,$u,Rn,xu,Rt,Ru,Ud,Eu,Mu,Kd,ju,zu,Cu,Ml,js,nh,Et,En,Bd,zs,qu,Qd,Pu,rh,lo,Cs,Au,qs,Lu,Hd,Ou,Du,Iu,Mn,jl,Nu,Su,zl,Wu,Uu,Ku,Ps,Bu,Cl,Qu,Hu,Vu,jn,Ju,_t,As,Gu,Vd,Xu,Yu,Ls,ql,Zu,Jd,eg,og,Pl,tg,Gd,ng,sh,Mt,zn,Xd,Os,rg,Yd,sg,ah,ko,Ds,ag,Is,ig,Ns,lg,dg,cg,Ss,pg,Ws,mg,hg,fg,co,ug,Zd,gg,_g,ec,kg,vg,oc,yg,Fg,tc,bg,wg,nc,Tg,$g,rc,xg,Rg,Eg,So,Us,Mg,jt,jg,Al,zg,Cg,sc,qg,Pg,Ag,Cn,Lg,qn,ih,zt,Pn,ac,Ks,Og,ic,Dg,lh,at,Bs,Ig,Ct,Ng,lc,Sg,Wg,Qs,Ug,Kg,Bg,Wo,Hs,Qg,qt,Hg,Ll,Vg,Jg,dc,Gg,Xg,Yg,An,Zg,Ln,dh,Pt,On,cc,Vs,e_,pc,o_,ch,it,Js,t_,At,n_,mc,r_,s_,Gs,a_,i_,l_,Fo,Xs,d_,Lt,c_,Ol,p_,m_,hc,h_,f_,u_,Dn,g_,In,__,Nn,ph,Ot,Sn,fc,Ys,k_,uc,v_,mh,Lo,Zs,y_,gc,F_,b_,ea,w_,oa,T_,$_,x_,io,ta,R_,Dt,E_,Dl,M_,j_,_c,z_,C_,q_,Wn,P_,Un,A_,Kn,L_,Bn,O_,Qn,hh,It,Hn,kc,na,D_,vc,I_,fh,Oo,ra,N_,yc,S_,W_,sa,U_,aa,K_,B_,Q_,Uo,ia,H_,Nt,V_,Il,J_,G_,Fc,X_,Y_,Z_,Vn,ek,Jn,uh,St,Gn,bc,la,ok,wc,tk,gh,Do,da,nk,Tc,rk,sk,ca,ak,pa,ik,lk,dk,bo,ma,ck,Wt,pk,Nl,mk,hk,$c,fk,uk,gk,Xn,_k,Yn,kk,Zn,_h,Ut,er,xc,ha,vk,Rc,yk,kh,Io,fa,Fk,Kt,bk,Ec,wk,Tk,Mc,$k,xk,Rk,ua,Ek,ga,Mk,jk,zk,wo,_a,Ck,Bt,qk,Sl,Pk,Ak,jc,Lk,Ok,Dk,or,Ik,tr,Nk,nr,vh,Qt,rr,zc,ka,Sk,Cc,Wk,yh,po,va,Uk,qc,Kk,Bk,ya,Qk,Wl,Hk,Vk,Jk,Fa,Gk,ba,Xk,Yk,Zk,sr,ev,Ko,wa,ov,Ht,tv,Ul,nv,rv,Pc,sv,av,iv,ar,lv,ir,Fh,Vt,lr,Ac,Ta,dv,Lc,cv,bh,mo,$a,pv,xa,mv,Oc,hv,fv,uv,Ra,gv,Kl,_v,kv,vv,Ea,yv,Ma,Fv,bv,wv,dr,Tv,To,ja,$v,Jt,xv,Bl,Rv,Ev,Dc,Mv,jv,zv,cr,Cv,pr,qv,mr,wh,Gt,hr,Ic,za,Pv,Nc,Av,Th,ho,Ca,Lv,qa,Ov,Sc,Dv,Iv,Nv,Pa,Sv,Ql,Wv,Uv,Kv,Aa,Bv,La,Qv,Hv,Vv,fr,Jv,kt,Oa,Gv,vo,Xv,Wc,Yv,Zv,Uc,ey,oy,Kc,ty,ny,Bc,ry,sy,Qc,ay,iy,ly,ur,$h,Xt,gr,Hc,Da,dy,Vc,cy,xh,fo,Ia,py,Jc,my,hy,Na,fy,Hl,uy,gy,_y,Sa,ky,Wa,vy,yy,Fy,_r,by,$o,Ua,wy,Yt,Ty,Vl,$y,xy,Gc,Ry,Ey,My,kr,jy,vr,zy,yr,Rh,Zt,Fr,Xc,Ka,Cy,Yc,qy,Eh,uo,Ba,Py,Zc,Ay,Ly,Qa,Oy,Jl,Dy,Iy,Ny,Ha,Sy,Va,Wy,Uy,Ky,br,By,Bo,Ja,Qy,en,Hy,Gl,Vy,Jy,ep,Gy,Xy,Yy,wr,Zy,Tr,Mh,on,$r,op,Ga,eF,tp,oF,jh,go,Xa,tF,np,nF,rF,Ya,sF,Xl,aF,iF,lF,Za,dF,ei,cF,pF,mF,xr,hF,xo,oi,fF,tn,uF,Yl,gF,_F,rp,kF,vF,yF,Rr,FF,Er,bF,Mr,zh,nn,jr,sp,ti,wF,ap,TF,Ch,_o,ni,$F,rn,xF,ip,RF,EF,lp,MF,jF,zF,ri,CF,Zl,qF,PF,AF,si,LF,ai,OF,DF,IF,zr,NF,Ro,ii,SF,sn,WF,ed,UF,KF,dp,BF,QF,HF,Cr,VF,qr,JF,Pr,qh,an,Ar,cp,li,GF,pp,XF,Ph,eo,di,YF,mp,ZF,e2,ci,o2,od,t2,n2,r2,pi,s2,mi,a2,i2,l2,hp,d2,c2,lt,fp,hi,p2,m2,up,fi,h2,f2,gp,ui,u2,g2,_p,gi,_2,k2,Qo,_i,v2,ln,y2,kp,F2,b2,vp,w2,T2,$2,Lr,x2,Or,Ah,dn,Dr,yp,ki,R2,Fp,E2,Lh,oo,vi,M2,yi,j2,bp,z2,C2,q2,Fi,P2,td,A2,L2,O2,bi,D2,wi,I2,N2,S2,wp,W2,U2,dt,Tp,Ti,K2,B2,$p,$i,Q2,H2,xp,xi,V2,J2,Rp,Ri,G2,X2,Ho,Ei,Y2,cn,Z2,Ep,eb,ob,Mp,tb,nb,rb,Ir,sb,Nr,Oh,pn,Sr,jp,Mi,ab,zp,ib,Dh,to,ji,lb,Cp,db,cb,zi,pb,nd,mb,hb,fb,Ci,ub,qi,gb,_b,kb,qp,vb,yb,ct,Pp,Pi,Fb,bb,Ap,Ai,wb,Tb,Lp,Li,$b,xb,Op,Oi,Rb,Eb,Vo,Di,Mb,mn,jb,Dp,zb,Cb,Ip,qb,Pb,Ab,Wr,Lb,Ur,Ih,hn,Kr,Np,Ii,Ob,Sp,Db,Nh,no,Ni,Ib,Wp,Nb,Sb,Si,Wb,rd,Ub,Kb,Bb,Wi,Qb,Ui,Hb,Vb,Jb,Up,Gb,Xb,pt,Kp,Ki,Yb,Zb,Bp,Bi,ew,ow,Qp,Qi,tw,nw,Hp,Hi,rw,sw,Jo,Vi,aw,fn,iw,Vp,lw,dw,Jp,cw,pw,mw,Br,hw,Qr,Sh,un,Hr,Gp,Ji,fw,Xp,uw,Wh,ro,Gi,gw,Yp,_w,kw,Xi,vw,sd,yw,Fw,bw,Yi,ww,Zi,Tw,$w,xw,Zp,Rw,Ew,mt,em,el,Mw,jw,om,ol,zw,Cw,tm,tl,qw,Pw,nm,nl,Aw,Lw,Go,rl,Ow,gn,Dw,rm,Iw,Nw,sm,Sw,Ww,Uw,Vr,Kw,Jr,Uh,_n,Gr,am,sl,Bw,im,Qw,Kh,so,al,Hw,kn,Vw,lm,Jw,Gw,dm,Xw,Yw,Zw,il,eT,ad,oT,tT,nT,ll,rT,dl,sT,aT,iT,cm,lT,dT,ht,pm,cl,cT,pT,mm,pl,mT,hT,hm,ml,fT,uT,fm,hl,gT,_T,Xo,fl,kT,vn,vT,um,yT,FT,gm,bT,wT,TT,Xr,$T,Yr,Bh;return l=new Qe({}),R=new Qe({}),S=new Qe({}),de=new B({props:{name:"class transformers.RoFormerConfig",anchor:"transformers.RoFormerConfig",parameters:[{name:"vocab_size",val:" = 50000"},{name:"embedding_size",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1536"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"rotary_value",val:" = False"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50000) &#x2014;
Vocabulary size of the RoFormer model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerModel">RoFormerModel</a> or <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.TFRoFormerModel">TFRoFormerModel</a>.`,name:"vocab_size"},{anchor:"transformers.RoFormerConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerModel">RoFormerModel</a> or <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.TFRoFormerModel">TFRoFormerModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RoFormerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RoFormerConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RoFormerConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.RoFormerConfig.rotary_value",description:`<strong>rotary_value</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not apply rotary position embeddings on value layer.`,name:"rotary_value"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/configuration_roformer.py#L46"}}),Ie=new ce({props:{anchor:"transformers.RoFormerConfig.example",$$slots:{default:[U4]},$$scope:{ctx:E}}}),ys=new Qe({}),Fs=new B({props:{name:"class transformers.RoFormerTokenizer",anchor:"transformers.RoFormerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/tokenization_roformer.py#L69"}}),$n=new ce({props:{anchor:"transformers.RoFormerTokenizer.example",$$slots:{default:[K4]},$$scope:{ctx:E}}}),$s=new B({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/tokenization_roformer.py#L235",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rs=new B({props:{name:"get_special_tokens_mask",anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/tokenization_roformer.py#L260",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ms=new B({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/tokenization_roformer.py#L288",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rn=new ce({props:{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[B4]},$$scope:{ctx:E}}}),js=new B({props:{name:"save_vocabulary",anchor:"transformers.RoFormerTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/tokenization_roformer.py#L317"}}),zs=new Qe({}),Cs=new B({props:{name:"class transformers.RoFormerTokenizerFast",anchor:"transformers.RoFormerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/tokenization_roformer_fast.py#L71"}}),jn=new ce({props:{anchor:"transformers.RoFormerTokenizerFast.example",$$slots:{default:[Q4]},$$scope:{ctx:E}}}),As=new B({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/tokenization_roformer_fast.py#L147",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Os=new Qe({}),Ds=new B({props:{name:"class transformers.RoFormerModel",anchor:"transformers.RoFormerModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_roformer.py#L789"}}),Us=new B({props:{name:"forward",anchor:"transformers.RoFormerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_roformer.py#L829",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cn=new Be({props:{$$slots:{default:[H4]},$$scope:{ctx:E}}}),qn=new ce({props:{anchor:"transformers.RoFormerModel.forward.example",$$slots:{default:[V4]},$$scope:{ctx:E}}}),Ks=new Qe({}),Bs=new B({props:{name:"class transformers.RoFormerForCausalLM",anchor:"transformers.RoFormerForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_roformer.py#L1057"}}),Hs=new B({props:{name:"forward",anchor:"transformers.RoFormerForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_roformer.py#L1079",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new Be({props:{$$slots:{default:[J4]},$$scope:{ctx:E}}}),Ln=new ce({props:{anchor:"transformers.RoFormerForCausalLM.forward.example",$$slots:{default:[G4]},$$scope:{ctx:E}}}),Vs=new Qe({}),Js=new B({props:{name:"class transformers.RoFormerForMaskedLM",anchor:"transformers.RoFormerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_roformer.py#L956"}}),Xs=new B({props:{name:"forward",anchor:"transformers.RoFormerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_roformer.py#L978",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dn=new Be({props:{$$slots:{default:[X4]},$$scope:{ctx:E}}}),In=new ce({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example",$$slots:{default:[Y4]},$$scope:{ctx:E}}}),Nn=new ce({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example-2",$$slots:{default:[Z4]},$$scope:{ctx:E}}}),Ys=new Qe({}),Zs=new B({props:{name:"class transformers.RoFormerForSequenceClassification",anchor:"transformers.RoFormerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_roformer.py#L1230"}}),ta=new B({props:{name:"forward",anchor:"transformers.RoFormerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_roformer.py#L1240",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wn=new Be({props:{$$slots:{default:[ex]},$$scope:{ctx:E}}}),Un=new ce({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example",$$slots:{default:[ox]},$$scope:{ctx:E}}}),Kn=new ce({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-2",$$slots:{default:[tx]},$$scope:{ctx:E}}}),Bn=new ce({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-3",$$slots:{default:[nx]},$$scope:{ctx:E}}}),Qn=new ce({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-4",$$slots:{default:[rx]},$$scope:{ctx:E}}}),na=new Qe({}),ra=new B({props:{name:"class transformers.RoFormerForMultipleChoice",anchor:"transformers.RoFormerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_roformer.py#L1322"}}),ia=new B({props:{name:"forward",anchor:"transformers.RoFormerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_roformer.py#L1333",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vn=new Be({props:{$$slots:{default:[sx]},$$scope:{ctx:E}}}),Jn=new ce({props:{anchor:"transformers.RoFormerForMultipleChoice.forward.example",$$slots:{default:[ax]},$$scope:{ctx:E}}}),la=new Qe({}),da=new B({props:{name:"class transformers.RoFormerForTokenClassification",anchor:"transformers.RoFormerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_roformer.py#L1414"}}),ma=new B({props:{name:"forward",anchor:"transformers.RoFormerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_roformer.py#L1426",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new Be({props:{$$slots:{default:[ix]},$$scope:{ctx:E}}}),Yn=new ce({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example",$$slots:{default:[lx]},$$scope:{ctx:E}}}),Zn=new ce({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example-2",$$slots:{default:[dx]},$$scope:{ctx:E}}}),ha=new Qe({}),fa=new B({props:{name:"class transformers.RoFormerForQuestionAnswering",anchor:"transformers.RoFormerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_roformer.py#L1491"}}),_a=new B({props:{name:"forward",anchor:"transformers.RoFormerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_roformer.py#L1504",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),or=new Be({props:{$$slots:{default:[cx]},$$scope:{ctx:E}}}),tr=new ce({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example",$$slots:{default:[px]},$$scope:{ctx:E}}}),nr=new ce({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example-2",$$slots:{default:[mx]},$$scope:{ctx:E}}}),ka=new Qe({}),va=new B({props:{name:"class transformers.TFRoFormerModel",anchor:"transformers.TFRoFormerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_tf_roformer.py#L799"}}),sr=new Be({props:{$$slots:{default:[hx]},$$scope:{ctx:E}}}),wa=new B({props:{name:"call",anchor:"transformers.TFRoFormerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_tf_roformer.py#L805",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ar=new Be({props:{$$slots:{default:[fx]},$$scope:{ctx:E}}}),ir=new ce({props:{anchor:"transformers.TFRoFormerModel.call.example",$$slots:{default:[ux]},$$scope:{ctx:E}}}),Ta=new Qe({}),$a=new B({props:{name:"class transformers.TFRoFormerForMaskedLM",anchor:"transformers.TFRoFormerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_tf_roformer.py#L847"}}),dr=new Be({props:{$$slots:{default:[gx]},$$scope:{ctx:E}}}),ja=new B({props:{name:"call",anchor:"transformers.TFRoFormerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_tf_roformer.py#L863",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cr=new Be({props:{$$slots:{default:[_x]},$$scope:{ctx:E}}}),pr=new ce({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example",$$slots:{default:[kx]},$$scope:{ctx:E}}}),mr=new ce({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example-2",$$slots:{default:[vx]},$$scope:{ctx:E}}}),za=new Qe({}),Ca=new B({props:{name:"class transformers.TFRoFormerForCausalLM",anchor:"transformers.TFRoFormerForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_tf_roformer.py#L926"}}),fr=new Be({props:{$$slots:{default:[yx]},$$scope:{ctx:E}}}),Oa=new B({props:{name:"call",anchor:"transformers.TFRoFormerForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_tf_roformer.py#L939",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ur=new ce({props:{anchor:"transformers.TFRoFormerForCausalLM.call.example",$$slots:{default:[Fx]},$$scope:{ctx:E}}}),Da=new Qe({}),Ia=new B({props:{name:"class transformers.TFRoFormerForSequenceClassification",anchor:"transformers.TFRoFormerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_tf_roformer.py#L1039"}}),_r=new Be({props:{$$slots:{default:[bx]},$$scope:{ctx:E}}}),Ua=new B({props:{name:"call",anchor:"transformers.TFRoFormerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_tf_roformer.py#L1048",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),kr=new Be({props:{$$slots:{default:[wx]},$$scope:{ctx:E}}}),vr=new ce({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example",$$slots:{default:[Tx]},$$scope:{ctx:E}}}),yr=new ce({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example-2",$$slots:{default:[$x]},$$scope:{ctx:E}}}),Ka=new Qe({}),Ba=new B({props:{name:"class transformers.TFRoFormerForMultipleChoice",anchor:"transformers.TFRoFormerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_tf_roformer.py#L1115"}}),br=new Be({props:{$$slots:{default:[xx]},$$scope:{ctx:E}}}),Ja=new B({props:{name:"call",anchor:"transformers.TFRoFormerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_tf_roformer.py#L1136",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),wr=new Be({props:{$$slots:{default:[Rx]},$$scope:{ctx:E}}}),Tr=new ce({props:{anchor:"transformers.TFRoFormerForMultipleChoice.call.example",$$slots:{default:[Ex]},$$scope:{ctx:E}}}),Ga=new Qe({}),Xa=new B({props:{name:"class transformers.TFRoFormerForTokenClassification",anchor:"transformers.TFRoFormerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_tf_roformer.py#L1239"}}),xr=new Be({props:{$$slots:{default:[Mx]},$$scope:{ctx:E}}}),oi=new B({props:{name:"call",anchor:"transformers.TFRoFormerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_tf_roformer.py#L1251",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Rr=new Be({props:{$$slots:{default:[jx]},$$scope:{ctx:E}}}),Er=new ce({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example",$$slots:{default:[zx]},$$scope:{ctx:E}}}),Mr=new ce({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example-2",$$slots:{default:[Cx]},$$scope:{ctx:E}}}),ti=new Qe({}),ni=new B({props:{name:"class transformers.TFRoFormerForQuestionAnswering",anchor:"transformers.TFRoFormerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_tf_roformer.py#L1317"}}),zr=new Be({props:{$$slots:{default:[qx]},$$scope:{ctx:E}}}),ii=new B({props:{name:"call",anchor:"transformers.TFRoFormerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_tf_roformer.py#L1328",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Cr=new Be({props:{$$slots:{default:[Px]},$$scope:{ctx:E}}}),qr=new ce({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example",$$slots:{default:[Ax]},$$scope:{ctx:E}}}),Pr=new ce({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example-2",$$slots:{default:[Lx]},$$scope:{ctx:E}}}),li=new Qe({}),di=new B({props:{name:"class transformers.FlaxRoFormerModel",anchor:"transformers.FlaxRoFormerModel",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_flax_roformer.py#L749"}}),_i=new B({props:{name:"__call__",anchor:"transformers.FlaxRoFormerModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lr=new Be({props:{$$slots:{default:[Ox]},$$scope:{ctx:E}}}),Or=new ce({props:{anchor:"transformers.FlaxRoFormerModel.__call__.example",$$slots:{default:[Dx]},$$scope:{ctx:E}}}),ki=new Qe({}),vi=new B({props:{name:"class transformers.FlaxRoFormerForMaskedLM",anchor:"transformers.FlaxRoFormerForMaskedLM",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_flax_roformer.py#L809"}}),Ei=new B({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ir=new Be({props:{$$slots:{default:[Ix]},$$scope:{ctx:E}}}),Nr=new ce({props:{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.example",$$slots:{default:[Nx]},$$scope:{ctx:E}}}),Mi=new Qe({}),ji=new B({props:{name:"class transformers.FlaxRoFormerForSequenceClassification",anchor:"transformers.FlaxRoFormerForSequenceClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_flax_roformer.py#L874"}}),Di=new B({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wr=new Be({props:{$$slots:{default:[Sx]},$$scope:{ctx:E}}}),Ur=new ce({props:{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.example",$$slots:{default:[Wx]},$$scope:{ctx:E}}}),Ii=new Qe({}),Ni=new B({props:{name:"class transformers.FlaxRoFormerForMultipleChoice",anchor:"transformers.FlaxRoFormerForMultipleChoice",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_flax_roformer.py#L950"}}),Vi=new B({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Br=new Be({props:{$$slots:{default:[Ux]},$$scope:{ctx:E}}}),Qr=new ce({props:{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.example",$$slots:{default:[Kx]},$$scope:{ctx:E}}}),Ji=new Qe({}),Gi=new B({props:{name:"class transformers.FlaxRoFormerForTokenClassification",anchor:"transformers.FlaxRoFormerForTokenClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_flax_roformer.py#L1019"}}),rl=new B({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vr=new Be({props:{$$slots:{default:[Bx]},$$scope:{ctx:E}}}),Jr=new ce({props:{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.example",$$slots:{default:[Qx]},$$scope:{ctx:E}}}),sl=new Qe({}),al=new B({props:{name:"class transformers.FlaxRoFormerForQuestionAnswering",anchor:"transformers.FlaxRoFormerForQuestionAnswering",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_flax_roformer.py#L1088"}}),fl=new B({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xr=new Be({props:{$$slots:{default:[Hx]},$$scope:{ctx:E}}}),Yr=new ce({props:{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.example",$$slots:{default:[Vx]},$$scope:{ctx:E}}}),{c(){d=s("meta"),g=m(),c=s("h1"),f=s("a"),k=s("span"),F(l.$$.fragment),p=m(),j=s("span"),Te=t("RoFormer"),ge=m(),I=s("h2"),ae=s("a"),ee=s("span"),F(R.$$.fragment),$e=m(),Q=s("span"),xe=t("Overview"),_e=m(),N=s("p"),Re=t("The RoFormer model was proposed in "),ie=s("a"),V=t("RoFormer: Enhanced Transformer with Rotary Position Embedding"),Ee=t(" by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu."),ke=m(),W=s("p"),Me=t("The abstract from the paper is the following:"),ve=m(),U=s("p"),he=s("em"),je=t(`Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.`),te=m(),C=s("p"),A=t("Tips:"),ye=m(),K=s("ul"),fe=s("li"),ze=t(`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`),H=m(),ne=s("p"),Ce=t("This model was contributed by "),q=s("a"),qe=t("junnyu"),J=t(". The original code can be found "),le=s("a"),Pe=t("here"),G=t("."),Fe=m(),se=s("h2"),O=s("a"),ue=s("span"),F(S.$$.fragment),Ae=m(),oe=s("span"),L=t("RoFormerConfig"),be=m(),P=s("div"),F(de.$$.fragment),Le=m(),y=s("p"),M=t("This is the configuration class to store the configuration of a "),Se=s("a"),re=t("RoFormerModel"),He=t(`. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
`),Ne=s("a"),z=t("junnyu/roformer_chinese_base"),Ve=t(" architecture."),Je=m(),Oe=s("p"),Ge=t("Configuration objects inherit from "),We=s("a"),D=t("PretrainedConfig"),X=t(` and can be used to control the model outputs. Read the
documentation from `),Ue=s("a"),Xe=t("PretrainedConfig"),Y=t(" for more information."),Ye=m(),F(Ie.$$.fragment),we=m(),De=s("h2"),Z=s("a"),Ke=s("span"),F(ys.$$.fragment),Xf=m(),Od=s("span"),Yf=t("RoFormerTokenizer"),th=m(),Ze=s("div"),F(Fs.$$.fragment),Zf=m(),bs=s("p"),eu=t("Construct a RoFormer tokenizer. Based on "),ws=s("a"),ou=t("Rust Jieba"),tu=t("."),nu=m(),Ts=s("p"),ru=t("This tokenizer inherits from "),xl=s("a"),su=t("PreTrainedTokenizer"),au=t(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),iu=m(),F($n.$$.fragment),lu=m(),gt=s("div"),F($s.$$.fragment),du=m(),Dd=s("p"),cu=t(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),pu=m(),xs=s("ul"),Rl=s("li"),mu=t("single sequence: "),Id=s("code"),hu=t("[CLS] X [SEP]"),fu=m(),El=s("li"),uu=t("pair of sequences: "),Nd=s("code"),gu=t("[CLS] A [SEP] B [SEP]"),_u=m(),xn=s("div"),F(Rs.$$.fragment),ku=m(),Es=s("p"),vu=t(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Sd=s("code"),yu=t("prepare_for_model"),Fu=t(" method."),bu=m(),No=s("div"),F(Ms.$$.fragment),wu=m(),Wd=s("p"),Tu=t("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer"),$u=m(),F(Rn.$$.fragment),xu=m(),Rt=s("p"),Ru=t("If "),Ud=s("code"),Eu=t("token_ids_1"),Mu=t(" is "),Kd=s("code"),ju=t("None"),zu=t(", this method only returns the first portion of the mask (0s)."),Cu=m(),Ml=s("div"),F(js.$$.fragment),nh=m(),Et=s("h2"),En=s("a"),Bd=s("span"),F(zs.$$.fragment),qu=m(),Qd=s("span"),Pu=t("RoFormerTokenizerFast"),rh=m(),lo=s("div"),F(Cs.$$.fragment),Au=m(),qs=s("p"),Lu=t("Construct a \u201Cfast\u201D RoFormer tokenizer (backed by HuggingFace\u2019s "),Hd=s("em"),Ou=t("tokenizers"),Du=t(" library)."),Iu=m(),Mn=s("p"),jl=s("a"),Nu=t("RoFormerTokenizerFast"),Su=t(" is almost identical to "),zl=s("a"),Wu=t("BertTokenizerFast"),Uu=t(` and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`),Ku=m(),Ps=s("p"),Bu=t("This tokenizer inherits from "),Cl=s("a"),Qu=t("PreTrainedTokenizerFast"),Hu=t(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vu=m(),F(jn.$$.fragment),Ju=m(),_t=s("div"),F(As.$$.fragment),Gu=m(),Vd=s("p"),Xu=t(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Yu=m(),Ls=s("ul"),ql=s("li"),Zu=t("single sequence: "),Jd=s("code"),eg=t("[CLS] X [SEP]"),og=m(),Pl=s("li"),tg=t("pair of sequences: "),Gd=s("code"),ng=t("[CLS] A [SEP] B [SEP]"),sh=m(),Mt=s("h2"),zn=s("a"),Xd=s("span"),F(Os.$$.fragment),rg=m(),Yd=s("span"),sg=t("RoFormerModel"),ah=m(),ko=s("div"),F(Ds.$$.fragment),ag=m(),Is=s("p"),ig=t(`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ns=s("a"),lg=t("torch.nn.Module"),dg=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cg=m(),Ss=s("p"),pg=t(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Ws=s("a"),mg=t(`Attention is
all you need`),hg=t(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),fg=m(),co=s("p"),ug=t("To behave as an decoder the model needs to be initialized with the "),Zd=s("code"),gg=t("is_decoder"),_g=t(` argument of the configuration set
to `),ec=s("code"),kg=t("True"),vg=t(". To be used in a Seq2Seq model, the model needs to initialized with both "),oc=s("code"),yg=t("is_decoder"),Fg=t(` argument and
`),tc=s("code"),bg=t("add_cross_attention"),wg=t(" set to "),nc=s("code"),Tg=t("True"),$g=t("; an "),rc=s("code"),xg=t("encoder_hidden_states"),Rg=t(" is then expected as an input to the forward pass."),Eg=m(),So=s("div"),F(Us.$$.fragment),Mg=m(),jt=s("p"),jg=t("The "),Al=s("a"),zg=t("RoFormerModel"),Cg=t(" forward method, overrides the "),sc=s("code"),qg=t("__call__"),Pg=t(" special method."),Ag=m(),F(Cn.$$.fragment),Lg=m(),F(qn.$$.fragment),ih=m(),zt=s("h2"),Pn=s("a"),ac=s("span"),F(Ks.$$.fragment),Og=m(),ic=s("span"),Dg=t("RoFormerForCausalLM"),lh=m(),at=s("div"),F(Bs.$$.fragment),Ig=m(),Ct=s("p"),Ng=t("RoFormer Model with a "),lc=s("code"),Sg=t("language modeling"),Wg=t(` head on top for CLM fine-tuning.
This model is a PyTorch `),Qs=s("a"),Ug=t("torch.nn.Module"),Kg=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Bg=m(),Wo=s("div"),F(Hs.$$.fragment),Qg=m(),qt=s("p"),Hg=t("The "),Ll=s("a"),Vg=t("RoFormerForCausalLM"),Jg=t(" forward method, overrides the "),dc=s("code"),Gg=t("__call__"),Xg=t(" special method."),Yg=m(),F(An.$$.fragment),Zg=m(),F(Ln.$$.fragment),dh=m(),Pt=s("h2"),On=s("a"),cc=s("span"),F(Vs.$$.fragment),e_=m(),pc=s("span"),o_=t("RoFormerForMaskedLM"),ch=m(),it=s("div"),F(Js.$$.fragment),t_=m(),At=s("p"),n_=t("RoFormer Model with a "),mc=s("code"),r_=t("language modeling"),s_=t(` head on top.
This model is a PyTorch `),Gs=s("a"),a_=t("torch.nn.Module"),i_=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),l_=m(),Fo=s("div"),F(Xs.$$.fragment),d_=m(),Lt=s("p"),c_=t("The "),Ol=s("a"),p_=t("RoFormerForMaskedLM"),m_=t(" forward method, overrides the "),hc=s("code"),h_=t("__call__"),f_=t(" special method."),u_=m(),F(Dn.$$.fragment),g_=m(),F(In.$$.fragment),__=m(),F(Nn.$$.fragment),ph=m(),Ot=s("h2"),Sn=s("a"),fc=s("span"),F(Ys.$$.fragment),k_=m(),uc=s("span"),v_=t("RoFormerForSequenceClassification"),mh=m(),Lo=s("div"),F(Zs.$$.fragment),y_=m(),gc=s("p"),F_=t(`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),b_=m(),ea=s("p"),w_=t("This model is a PyTorch "),oa=s("a"),T_=t("torch.nn.Module"),$_=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),x_=m(),io=s("div"),F(ta.$$.fragment),R_=m(),Dt=s("p"),E_=t("The "),Dl=s("a"),M_=t("RoFormerForSequenceClassification"),j_=t(" forward method, overrides the "),_c=s("code"),z_=t("__call__"),C_=t(" special method."),q_=m(),F(Wn.$$.fragment),P_=m(),F(Un.$$.fragment),A_=m(),F(Kn.$$.fragment),L_=m(),F(Bn.$$.fragment),O_=m(),F(Qn.$$.fragment),hh=m(),It=s("h2"),Hn=s("a"),kc=s("span"),F(na.$$.fragment),D_=m(),vc=s("span"),I_=t("RoFormerForMultipleChoice"),fh=m(),Oo=s("div"),F(ra.$$.fragment),N_=m(),yc=s("p"),S_=t(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),W_=m(),sa=s("p"),U_=t("This model is a PyTorch "),aa=s("a"),K_=t("torch.nn.Module"),B_=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Q_=m(),Uo=s("div"),F(ia.$$.fragment),H_=m(),Nt=s("p"),V_=t("The "),Il=s("a"),J_=t("RoFormerForMultipleChoice"),G_=t(" forward method, overrides the "),Fc=s("code"),X_=t("__call__"),Y_=t(" special method."),Z_=m(),F(Vn.$$.fragment),ek=m(),F(Jn.$$.fragment),uh=m(),St=s("h2"),Gn=s("a"),bc=s("span"),F(la.$$.fragment),ok=m(),wc=s("span"),tk=t("RoFormerForTokenClassification"),gh=m(),Do=s("div"),F(da.$$.fragment),nk=m(),Tc=s("p"),rk=t(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),sk=m(),ca=s("p"),ak=t("This model is a PyTorch "),pa=s("a"),ik=t("torch.nn.Module"),lk=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dk=m(),bo=s("div"),F(ma.$$.fragment),ck=m(),Wt=s("p"),pk=t("The "),Nl=s("a"),mk=t("RoFormerForTokenClassification"),hk=t(" forward method, overrides the "),$c=s("code"),fk=t("__call__"),uk=t(" special method."),gk=m(),F(Xn.$$.fragment),_k=m(),F(Yn.$$.fragment),kk=m(),F(Zn.$$.fragment),_h=m(),Ut=s("h2"),er=s("a"),xc=s("span"),F(ha.$$.fragment),vk=m(),Rc=s("span"),yk=t("RoFormerForQuestionAnswering"),kh=m(),Io=s("div"),F(fa.$$.fragment),Fk=m(),Kt=s("p"),bk=t(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ec=s("code"),wk=t("span start logits"),Tk=t(" and "),Mc=s("code"),$k=t("span end logits"),xk=t(")."),Rk=m(),ua=s("p"),Ek=t("This model is a PyTorch "),ga=s("a"),Mk=t("torch.nn.Module"),jk=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zk=m(),wo=s("div"),F(_a.$$.fragment),Ck=m(),Bt=s("p"),qk=t("The "),Sl=s("a"),Pk=t("RoFormerForQuestionAnswering"),Ak=t(" forward method, overrides the "),jc=s("code"),Lk=t("__call__"),Ok=t(" special method."),Dk=m(),F(or.$$.fragment),Ik=m(),F(tr.$$.fragment),Nk=m(),F(nr.$$.fragment),vh=m(),Qt=s("h2"),rr=s("a"),zc=s("span"),F(ka.$$.fragment),Sk=m(),Cc=s("span"),Wk=t("TFRoFormerModel"),yh=m(),po=s("div"),F(va.$$.fragment),Uk=m(),qc=s("p"),Kk=t("The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top."),Bk=m(),ya=s("p"),Qk=t("This model inherits from "),Wl=s("a"),Hk=t("TFPreTrainedModel"),Vk=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jk=m(),Fa=s("p"),Gk=t("This model is also a "),ba=s("a"),Xk=t("tf.keras.Model"),Yk=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zk=m(),F(sr.$$.fragment),ev=m(),Ko=s("div"),F(wa.$$.fragment),ov=m(),Ht=s("p"),tv=t("The "),Ul=s("a"),nv=t("TFRoFormerModel"),rv=t(" forward method, overrides the "),Pc=s("code"),sv=t("__call__"),av=t(" special method."),iv=m(),F(ar.$$.fragment),lv=m(),F(ir.$$.fragment),Fh=m(),Vt=s("h2"),lr=s("a"),Ac=s("span"),F(Ta.$$.fragment),dv=m(),Lc=s("span"),cv=t("TFRoFormerForMaskedLM"),bh=m(),mo=s("div"),F($a.$$.fragment),pv=m(),xa=s("p"),mv=t("RoFormer Model with a "),Oc=s("code"),hv=t("language modeling"),fv=t(" head on top."),uv=m(),Ra=s("p"),gv=t("This model inherits from "),Kl=s("a"),_v=t("TFPreTrainedModel"),kv=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vv=m(),Ea=s("p"),yv=t("This model is also a "),Ma=s("a"),Fv=t("tf.keras.Model"),bv=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wv=m(),F(dr.$$.fragment),Tv=m(),To=s("div"),F(ja.$$.fragment),$v=m(),Jt=s("p"),xv=t("The "),Bl=s("a"),Rv=t("TFRoFormerForMaskedLM"),Ev=t(" forward method, overrides the "),Dc=s("code"),Mv=t("__call__"),jv=t(" special method."),zv=m(),F(cr.$$.fragment),Cv=m(),F(pr.$$.fragment),qv=m(),F(mr.$$.fragment),wh=m(),Gt=s("h2"),hr=s("a"),Ic=s("span"),F(za.$$.fragment),Pv=m(),Nc=s("span"),Av=t("TFRoFormerForCausalLM"),Th=m(),ho=s("div"),F(Ca.$$.fragment),Lv=m(),qa=s("p"),Ov=t("RoFormer Model with a "),Sc=s("code"),Dv=t("language modeling"),Iv=t(" head on top for CLM fine-tuning."),Nv=m(),Pa=s("p"),Sv=t("This model inherits from "),Ql=s("a"),Wv=t("TFPreTrainedModel"),Uv=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kv=m(),Aa=s("p"),Bv=t("This model is also a "),La=s("a"),Qv=t("tf.keras.Model"),Hv=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vv=m(),F(fr.$$.fragment),Jv=m(),kt=s("div"),F(Oa.$$.fragment),Gv=m(),vo=s("p"),Xv=t("labels ("),Wc=s("code"),Yv=t("tf.Tensor"),Zv=t(" or "),Uc=s("code"),ey=t("np.ndarray"),oy=t(" of shape "),Kc=s("code"),ty=t("(batch_size, sequence_length)"),ny=t(", "),Bc=s("em"),ry=t("optional"),sy=t(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Qc=s("code"),ay=t("[0, ..., config.vocab_size - 1]"),iy=t("."),ly=m(),F(ur.$$.fragment),$h=m(),Xt=s("h2"),gr=s("a"),Hc=s("span"),F(Da.$$.fragment),dy=m(),Vc=s("span"),cy=t("TFRoFormerForSequenceClassification"),xh=m(),fo=s("div"),F(Ia.$$.fragment),py=m(),Jc=s("p"),my=t("RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),hy=m(),Na=s("p"),fy=t("This model inherits from "),Hl=s("a"),uy=t("TFPreTrainedModel"),gy=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_y=m(),Sa=s("p"),ky=t("This model is also a "),Wa=s("a"),vy=t("tf.keras.Model"),yy=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fy=m(),F(_r.$$.fragment),by=m(),$o=s("div"),F(Ua.$$.fragment),wy=m(),Yt=s("p"),Ty=t("The "),Vl=s("a"),$y=t("TFRoFormerForSequenceClassification"),xy=t(" forward method, overrides the "),Gc=s("code"),Ry=t("__call__"),Ey=t(" special method."),My=m(),F(kr.$$.fragment),jy=m(),F(vr.$$.fragment),zy=m(),F(yr.$$.fragment),Rh=m(),Zt=s("h2"),Fr=s("a"),Xc=s("span"),F(Ka.$$.fragment),Cy=m(),Yc=s("span"),qy=t("TFRoFormerForMultipleChoice"),Eh=m(),uo=s("div"),F(Ba.$$.fragment),Py=m(),Zc=s("p"),Ay=t(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Ly=m(),Qa=s("p"),Oy=t("This model inherits from "),Jl=s("a"),Dy=t("TFPreTrainedModel"),Iy=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ny=m(),Ha=s("p"),Sy=t("This model is also a "),Va=s("a"),Wy=t("tf.keras.Model"),Uy=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ky=m(),F(br.$$.fragment),By=m(),Bo=s("div"),F(Ja.$$.fragment),Qy=m(),en=s("p"),Hy=t("The "),Gl=s("a"),Vy=t("TFRoFormerForMultipleChoice"),Jy=t(" forward method, overrides the "),ep=s("code"),Gy=t("__call__"),Xy=t(" special method."),Yy=m(),F(wr.$$.fragment),Zy=m(),F(Tr.$$.fragment),Mh=m(),on=s("h2"),$r=s("a"),op=s("span"),F(Ga.$$.fragment),eF=m(),tp=s("span"),oF=t("TFRoFormerForTokenClassification"),jh=m(),go=s("div"),F(Xa.$$.fragment),tF=m(),np=s("p"),nF=t(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),rF=m(),Ya=s("p"),sF=t("This model inherits from "),Xl=s("a"),aF=t("TFPreTrainedModel"),iF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lF=m(),Za=s("p"),dF=t("This model is also a "),ei=s("a"),cF=t("tf.keras.Model"),pF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mF=m(),F(xr.$$.fragment),hF=m(),xo=s("div"),F(oi.$$.fragment),fF=m(),tn=s("p"),uF=t("The "),Yl=s("a"),gF=t("TFRoFormerForTokenClassification"),_F=t(" forward method, overrides the "),rp=s("code"),kF=t("__call__"),vF=t(" special method."),yF=m(),F(Rr.$$.fragment),FF=m(),F(Er.$$.fragment),bF=m(),F(Mr.$$.fragment),zh=m(),nn=s("h2"),jr=s("a"),sp=s("span"),F(ti.$$.fragment),wF=m(),ap=s("span"),TF=t("TFRoFormerForQuestionAnswering"),Ch=m(),_o=s("div"),F(ni.$$.fragment),$F=m(),rn=s("p"),xF=t(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ip=s("code"),RF=t("span start logits"),EF=t(" and "),lp=s("code"),MF=t("span end logits"),jF=t(")."),zF=m(),ri=s("p"),CF=t("This model inherits from "),Zl=s("a"),qF=t("TFPreTrainedModel"),PF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),AF=m(),si=s("p"),LF=t("This model is also a "),ai=s("a"),OF=t("tf.keras.Model"),DF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),IF=m(),F(zr.$$.fragment),NF=m(),Ro=s("div"),F(ii.$$.fragment),SF=m(),sn=s("p"),WF=t("The "),ed=s("a"),UF=t("TFRoFormerForQuestionAnswering"),KF=t(" forward method, overrides the "),dp=s("code"),BF=t("__call__"),QF=t(" special method."),HF=m(),F(Cr.$$.fragment),VF=m(),F(qr.$$.fragment),JF=m(),F(Pr.$$.fragment),qh=m(),an=s("h2"),Ar=s("a"),cp=s("span"),F(li.$$.fragment),GF=m(),pp=s("span"),XF=t("FlaxRoFormerModel"),Ph=m(),eo=s("div"),F(di.$$.fragment),YF=m(),mp=s("p"),ZF=t("The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top."),e2=m(),ci=s("p"),o2=t("This model inherits from "),od=s("a"),t2=t("FlaxPreTrainedModel"),n2=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),r2=m(),pi=s("p"),s2=t("This model is also a Flax Linen "),mi=s("a"),a2=t("flax.linen.Module"),i2=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),l2=m(),hp=s("p"),d2=t("Finally, this model supports inherent JAX features such as:"),c2=m(),lt=s("ul"),fp=s("li"),hi=s("a"),p2=t("Just-In-Time (JIT) compilation"),m2=m(),up=s("li"),fi=s("a"),h2=t("Automatic Differentiation"),f2=m(),gp=s("li"),ui=s("a"),u2=t("Vectorization"),g2=m(),_p=s("li"),gi=s("a"),_2=t("Parallelization"),k2=m(),Qo=s("div"),F(_i.$$.fragment),v2=m(),ln=s("p"),y2=t("The "),kp=s("code"),F2=t("FlaxRoFormerPreTrainedModel"),b2=t(" forward method, overrides the "),vp=s("code"),w2=t("__call__"),T2=t(" special method."),$2=m(),F(Lr.$$.fragment),x2=m(),F(Or.$$.fragment),Ah=m(),dn=s("h2"),Dr=s("a"),yp=s("span"),F(ki.$$.fragment),R2=m(),Fp=s("span"),E2=t("FlaxRoFormerForMaskedLM"),Lh=m(),oo=s("div"),F(vi.$$.fragment),M2=m(),yi=s("p"),j2=t("RoFormer Model with a "),bp=s("code"),z2=t("language modeling"),C2=t(" head on top."),q2=m(),Fi=s("p"),P2=t("This model inherits from "),td=s("a"),A2=t("FlaxPreTrainedModel"),L2=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),O2=m(),bi=s("p"),D2=t("This model is also a Flax Linen "),wi=s("a"),I2=t("flax.linen.Module"),N2=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),S2=m(),wp=s("p"),W2=t("Finally, this model supports inherent JAX features such as:"),U2=m(),dt=s("ul"),Tp=s("li"),Ti=s("a"),K2=t("Just-In-Time (JIT) compilation"),B2=m(),$p=s("li"),$i=s("a"),Q2=t("Automatic Differentiation"),H2=m(),xp=s("li"),xi=s("a"),V2=t("Vectorization"),J2=m(),Rp=s("li"),Ri=s("a"),G2=t("Parallelization"),X2=m(),Ho=s("div"),F(Ei.$$.fragment),Y2=m(),cn=s("p"),Z2=t("The "),Ep=s("code"),eb=t("FlaxRoFormerPreTrainedModel"),ob=t(" forward method, overrides the "),Mp=s("code"),tb=t("__call__"),nb=t(" special method."),rb=m(),F(Ir.$$.fragment),sb=m(),F(Nr.$$.fragment),Oh=m(),pn=s("h2"),Sr=s("a"),jp=s("span"),F(Mi.$$.fragment),ab=m(),zp=s("span"),ib=t("FlaxRoFormerForSequenceClassification"),Dh=m(),to=s("div"),F(ji.$$.fragment),lb=m(),Cp=s("p"),db=t(`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cb=m(),zi=s("p"),pb=t("This model inherits from "),nd=s("a"),mb=t("FlaxPreTrainedModel"),hb=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fb=m(),Ci=s("p"),ub=t("This model is also a Flax Linen "),qi=s("a"),gb=t("flax.linen.Module"),_b=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),kb=m(),qp=s("p"),vb=t("Finally, this model supports inherent JAX features such as:"),yb=m(),ct=s("ul"),Pp=s("li"),Pi=s("a"),Fb=t("Just-In-Time (JIT) compilation"),bb=m(),Ap=s("li"),Ai=s("a"),wb=t("Automatic Differentiation"),Tb=m(),Lp=s("li"),Li=s("a"),$b=t("Vectorization"),xb=m(),Op=s("li"),Oi=s("a"),Rb=t("Parallelization"),Eb=m(),Vo=s("div"),F(Di.$$.fragment),Mb=m(),mn=s("p"),jb=t("The "),Dp=s("code"),zb=t("FlaxRoFormerPreTrainedModel"),Cb=t(" forward method, overrides the "),Ip=s("code"),qb=t("__call__"),Pb=t(" special method."),Ab=m(),F(Wr.$$.fragment),Lb=m(),F(Ur.$$.fragment),Ih=m(),hn=s("h2"),Kr=s("a"),Np=s("span"),F(Ii.$$.fragment),Ob=m(),Sp=s("span"),Db=t("FlaxRoFormerForMultipleChoice"),Nh=m(),no=s("div"),F(Ni.$$.fragment),Ib=m(),Wp=s("p"),Nb=t(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Sb=m(),Si=s("p"),Wb=t("This model inherits from "),rd=s("a"),Ub=t("FlaxPreTrainedModel"),Kb=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Bb=m(),Wi=s("p"),Qb=t("This model is also a Flax Linen "),Ui=s("a"),Hb=t("flax.linen.Module"),Vb=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Jb=m(),Up=s("p"),Gb=t("Finally, this model supports inherent JAX features such as:"),Xb=m(),pt=s("ul"),Kp=s("li"),Ki=s("a"),Yb=t("Just-In-Time (JIT) compilation"),Zb=m(),Bp=s("li"),Bi=s("a"),ew=t("Automatic Differentiation"),ow=m(),Qp=s("li"),Qi=s("a"),tw=t("Vectorization"),nw=m(),Hp=s("li"),Hi=s("a"),rw=t("Parallelization"),sw=m(),Jo=s("div"),F(Vi.$$.fragment),aw=m(),fn=s("p"),iw=t("The "),Vp=s("code"),lw=t("FlaxRoFormerPreTrainedModel"),dw=t(" forward method, overrides the "),Jp=s("code"),cw=t("__call__"),pw=t(" special method."),mw=m(),F(Br.$$.fragment),hw=m(),F(Qr.$$.fragment),Sh=m(),un=s("h2"),Hr=s("a"),Gp=s("span"),F(Ji.$$.fragment),fw=m(),Xp=s("span"),uw=t("FlaxRoFormerForTokenClassification"),Wh=m(),ro=s("div"),F(Gi.$$.fragment),gw=m(),Yp=s("p"),_w=t(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),kw=m(),Xi=s("p"),vw=t("This model inherits from "),sd=s("a"),yw=t("FlaxPreTrainedModel"),Fw=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bw=m(),Yi=s("p"),ww=t("This model is also a Flax Linen "),Zi=s("a"),Tw=t("flax.linen.Module"),$w=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xw=m(),Zp=s("p"),Rw=t("Finally, this model supports inherent JAX features such as:"),Ew=m(),mt=s("ul"),em=s("li"),el=s("a"),Mw=t("Just-In-Time (JIT) compilation"),jw=m(),om=s("li"),ol=s("a"),zw=t("Automatic Differentiation"),Cw=m(),tm=s("li"),tl=s("a"),qw=t("Vectorization"),Pw=m(),nm=s("li"),nl=s("a"),Aw=t("Parallelization"),Lw=m(),Go=s("div"),F(rl.$$.fragment),Ow=m(),gn=s("p"),Dw=t("The "),rm=s("code"),Iw=t("FlaxRoFormerPreTrainedModel"),Nw=t(" forward method, overrides the "),sm=s("code"),Sw=t("__call__"),Ww=t(" special method."),Uw=m(),F(Vr.$$.fragment),Kw=m(),F(Jr.$$.fragment),Uh=m(),_n=s("h2"),Gr=s("a"),am=s("span"),F(sl.$$.fragment),Bw=m(),im=s("span"),Qw=t("FlaxRoFormerForQuestionAnswering"),Kh=m(),so=s("div"),F(al.$$.fragment),Hw=m(),kn=s("p"),Vw=t(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),lm=s("code"),Jw=t("span start logits"),Gw=t(" and "),dm=s("code"),Xw=t("span end logits"),Yw=t(")."),Zw=m(),il=s("p"),eT=t("This model inherits from "),ad=s("a"),oT=t("FlaxPreTrainedModel"),tT=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nT=m(),ll=s("p"),rT=t("This model is also a Flax Linen "),dl=s("a"),sT=t("flax.linen.Module"),aT=t(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),iT=m(),cm=s("p"),lT=t("Finally, this model supports inherent JAX features such as:"),dT=m(),ht=s("ul"),pm=s("li"),cl=s("a"),cT=t("Just-In-Time (JIT) compilation"),pT=m(),mm=s("li"),pl=s("a"),mT=t("Automatic Differentiation"),hT=m(),hm=s("li"),ml=s("a"),fT=t("Vectorization"),uT=m(),fm=s("li"),hl=s("a"),gT=t("Parallelization"),_T=m(),Xo=s("div"),F(fl.$$.fragment),kT=m(),vn=s("p"),vT=t("The "),um=s("code"),yT=t("FlaxRoFormerPreTrainedModel"),FT=t(" forward method, overrides the "),gm=s("code"),bT=t("__call__"),wT=t(" special method."),TT=m(),F(Xr.$$.fragment),$T=m(),F(Yr.$$.fragment),this.h()},l(r){const v=S4('[data-svelte="svelte-1phssyn"]',document.head);d=a(v,"META",{name:!0,content:!0}),v.forEach(o),g=h(r),c=a(r,"H1",{class:!0});var ul=i(c);f=a(ul,"A",{id:!0,class:!0,href:!0});var _m=i(f);k=a(_m,"SPAN",{});var km=i(k);b(l.$$.fragment,km),km.forEach(o),_m.forEach(o),p=h(ul),j=a(ul,"SPAN",{});var vm=i(j);Te=n(vm,"RoFormer"),vm.forEach(o),ul.forEach(o),ge=h(r),I=a(r,"H2",{class:!0});var gl=i(I);ae=a(gl,"A",{id:!0,class:!0,href:!0});var ym=i(ae);ee=a(ym,"SPAN",{});var Fm=i(ee);b(R.$$.fragment,Fm),Fm.forEach(o),ym.forEach(o),$e=h(gl),Q=a(gl,"SPAN",{});var bm=i(Q);xe=n(bm,"Overview"),bm.forEach(o),gl.forEach(o),_e=h(r),N=a(r,"P",{});var _l=i(N);Re=n(_l,"The RoFormer model was proposed in "),ie=a(_l,"A",{href:!0,rel:!0});var wm=i(ie);V=n(wm,"RoFormer: Enhanced Transformer with Rotary Position Embedding"),wm.forEach(o),Ee=n(_l," by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu."),_l.forEach(o),ke=h(r),W=a(r,"P",{});var Tm=i(W);Me=n(Tm,"The abstract from the paper is the following:"),Tm.forEach(o),ve=h(r),U=a(r,"P",{});var $m=i(U);he=a($m,"EM",{});var xm=i(he);je=n(xm,`Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.`),xm.forEach(o),$m.forEach(o),te=h(r),C=a(r,"P",{});var Rm=i(C);A=n(Rm,"Tips:"),Rm.forEach(o),ye=h(r),K=a(r,"UL",{});var Em=i(K);fe=a(Em,"LI",{});var Mm=i(fe);ze=n(Mm,`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`),Mm.forEach(o),Em.forEach(o),H=h(r),ne=a(r,"P",{});var yn=i(ne);Ce=n(yn,"This model was contributed by "),q=a(yn,"A",{href:!0,rel:!0});var jm=i(q);qe=n(jm,"junnyu"),jm.forEach(o),J=n(yn,". The original code can be found "),le=a(yn,"A",{href:!0,rel:!0});var zm=i(le);Pe=n(zm,"here"),zm.forEach(o),G=n(yn,"."),yn.forEach(o),Fe=h(r),se=a(r,"H2",{class:!0});var kl=i(se);O=a(kl,"A",{id:!0,class:!0,href:!0});var Cm=i(O);ue=a(Cm,"SPAN",{});var qm=i(ue);b(S.$$.fragment,qm),qm.forEach(o),Cm.forEach(o),Ae=h(kl),oe=a(kl,"SPAN",{});var Pm=i(oe);L=n(Pm,"RoFormerConfig"),Pm.forEach(o),kl.forEach(o),be=h(r),P=a(r,"DIV",{class:!0});var ft=i(P);b(de.$$.fragment,ft),Le=h(ft),y=a(ft,"P",{});var Fn=i(y);M=n(Fn,"This is the configuration class to store the configuration of a "),Se=a(Fn,"A",{href:!0});var Am=i(Se);re=n(Am,"RoFormerModel"),Am.forEach(o),He=n(Fn,`. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
`),Ne=a(Fn,"A",{href:!0,rel:!0});var Lm=i(Ne);z=n(Lm,"junnyu/roformer_chinese_base"),Lm.forEach(o),Ve=n(Fn," architecture."),Fn.forEach(o),Je=h(ft),Oe=a(ft,"P",{});var bn=i(Oe);Ge=n(bn,"Configuration objects inherit from "),We=a(bn,"A",{href:!0});var Om=i(We);D=n(Om,"PretrainedConfig"),Om.forEach(o),X=n(bn,` and can be used to control the model outputs. Read the
documentation from `),Ue=a(bn,"A",{href:!0});var Dm=i(Ue);Xe=n(Dm,"PretrainedConfig"),Dm.forEach(o),Y=n(bn," for more information."),bn.forEach(o),Ye=h(ft),b(Ie.$$.fragment,ft),ft.forEach(o),we=h(r),De=a(r,"H2",{class:!0});var vl=i(De);Z=a(vl,"A",{id:!0,class:!0,href:!0});var Im=i(Z);Ke=a(Im,"SPAN",{});var Nm=i(Ke);b(ys.$$.fragment,Nm),Nm.forEach(o),Im.forEach(o),Xf=h(vl),Od=a(vl,"SPAN",{});var Sm=i(Od);Yf=n(Sm,"RoFormerTokenizer"),Sm.forEach(o),vl.forEach(o),th=h(r),Ze=a(r,"DIV",{class:!0});var ao=i(Ze);b(Fs.$$.fragment,ao),Zf=h(ao),bs=a(ao,"P",{});var yl=i(bs);eu=n(yl,"Construct a RoFormer tokenizer. Based on "),ws=a(yl,"A",{href:!0,rel:!0});var Wm=i(ws);ou=n(Wm,"Rust Jieba"),Wm.forEach(o),tu=n(yl,"."),yl.forEach(o),nu=h(ao),Ts=a(ao,"P",{});var Fl=i(Ts);ru=n(Fl,"This tokenizer inherits from "),xl=a(Fl,"A",{href:!0});var Um=i(xl);su=n(Um,"PreTrainedTokenizer"),Um.forEach(o),au=n(Fl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Fl.forEach(o),iu=h(ao),b($n.$$.fragment,ao),lu=h(ao),gt=a(ao,"DIV",{class:!0});var wn=i(gt);b($s.$$.fragment,wn),du=h(wn),Dd=a(wn,"P",{});var Km=i(Dd);cu=n(Km,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Km.forEach(o),pu=h(wn),xs=a(wn,"UL",{});var bl=i(xs);Rl=a(bl,"LI",{});var id=i(Rl);mu=n(id,"single sequence: "),Id=a(id,"CODE",{});var Bm=i(Id);hu=n(Bm,"[CLS] X [SEP]"),Bm.forEach(o),id.forEach(o),fu=h(bl),El=a(bl,"LI",{});var ld=i(El);uu=n(ld,"pair of sequences: "),Nd=a(ld,"CODE",{});var Qm=i(Nd);gu=n(Qm,"[CLS] A [SEP] B [SEP]"),Qm.forEach(o),ld.forEach(o),bl.forEach(o),wn.forEach(o),_u=h(ao),xn=a(ao,"DIV",{class:!0});var wl=i(xn);b(Rs.$$.fragment,wl),ku=h(wl),Es=a(wl,"P",{});var Tl=i(Es);vu=n(Tl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Sd=a(Tl,"CODE",{});var Hm=i(Sd);yu=n(Hm,"prepare_for_model"),Hm.forEach(o),Fu=n(Tl," method."),Tl.forEach(o),wl.forEach(o),bu=h(ao),No=a(ao,"DIV",{class:!0});var ut=i(No);b(Ms.$$.fragment,ut),wu=h(ut),Wd=a(ut,"P",{});var Vm=i(Wd);Tu=n(Vm,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer"),Vm.forEach(o),$u=h(ut),b(Rn.$$.fragment,ut),xu=h(ut),Rt=a(ut,"P",{});var Tn=i(Rt);Ru=n(Tn,"If "),Ud=a(Tn,"CODE",{});var Jm=i(Ud);Eu=n(Jm,"token_ids_1"),Jm.forEach(o),Mu=n(Tn," is "),Kd=a(Tn,"CODE",{});var Gm=i(Kd);ju=n(Gm,"None"),Gm.forEach(o),zu=n(Tn,", this method only returns the first portion of the mask (0s)."),Tn.forEach(o),ut.forEach(o),Cu=h(ao),Ml=a(ao,"DIV",{class:!0});var Xm=i(Ml);b(js.$$.fragment,Xm),Xm.forEach(o),ao.forEach(o),nh=h(r),Et=a(r,"H2",{class:!0});var $l=i(Et);En=a($l,"A",{id:!0,class:!0,href:!0});var Ym=i(En);Bd=a(Ym,"SPAN",{});var Zm=i(Bd);b(zs.$$.fragment,Zm),Zm.forEach(o),Ym.forEach(o),qu=h($l),Qd=a($l,"SPAN",{});var eh=i(Qd);Pu=n(eh,"RoFormerTokenizerFast"),eh.forEach(o),$l.forEach(o),rh=h(r),lo=a(r,"DIV",{class:!0});var yo=i(lo);b(Cs.$$.fragment,yo),Au=h(yo),qs=a(yo,"P",{});var Qh=i(qs);Lu=n(Qh,"Construct a \u201Cfast\u201D RoFormer tokenizer (backed by HuggingFace\u2019s "),Hd=a(Qh,"EM",{});var ET=i(Hd);Ou=n(ET,"tokenizers"),ET.forEach(o),Du=n(Qh," library)."),Qh.forEach(o),Iu=h(yo),Mn=a(yo,"P",{});var oh=i(Mn);jl=a(oh,"A",{href:!0});var MT=i(jl);Nu=n(MT,"RoFormerTokenizerFast"),MT.forEach(o),Su=n(oh," is almost identical to "),zl=a(oh,"A",{href:!0});var jT=i(zl);Wu=n(jT,"BertTokenizerFast"),jT.forEach(o),Uu=n(oh,` and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`),oh.forEach(o),Ku=h(yo),Ps=a(yo,"P",{});var Hh=i(Ps);Bu=n(Hh,"This tokenizer inherits from "),Cl=a(Hh,"A",{href:!0});var zT=i(Cl);Qu=n(zT,"PreTrainedTokenizerFast"),zT.forEach(o),Hu=n(Hh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Hh.forEach(o),Vu=h(yo),b(jn.$$.fragment,yo),Ju=h(yo),_t=a(yo,"DIV",{class:!0});var dd=i(_t);b(As.$$.fragment,dd),Gu=h(dd),Vd=a(dd,"P",{});var CT=i(Vd);Xu=n(CT,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),CT.forEach(o),Yu=h(dd),Ls=a(dd,"UL",{});var Vh=i(Ls);ql=a(Vh,"LI",{});var xT=i(ql);Zu=n(xT,"single sequence: "),Jd=a(xT,"CODE",{});var qT=i(Jd);eg=n(qT,"[CLS] X [SEP]"),qT.forEach(o),xT.forEach(o),og=h(Vh),Pl=a(Vh,"LI",{});var RT=i(Pl);tg=n(RT,"pair of sequences: "),Gd=a(RT,"CODE",{});var PT=i(Gd);ng=n(PT,"[CLS] A [SEP] B [SEP]"),PT.forEach(o),RT.forEach(o),Vh.forEach(o),dd.forEach(o),yo.forEach(o),sh=h(r),Mt=a(r,"H2",{class:!0});var Jh=i(Mt);zn=a(Jh,"A",{id:!0,class:!0,href:!0});var AT=i(zn);Xd=a(AT,"SPAN",{});var LT=i(Xd);b(Os.$$.fragment,LT),LT.forEach(o),AT.forEach(o),rg=h(Jh),Yd=a(Jh,"SPAN",{});var OT=i(Yd);sg=n(OT,"RoFormerModel"),OT.forEach(o),Jh.forEach(o),ah=h(r),ko=a(r,"DIV",{class:!0});var vt=i(ko);b(Ds.$$.fragment,vt),ag=h(vt),Is=a(vt,"P",{});var Gh=i(Is);ig=n(Gh,`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ns=a(Gh,"A",{href:!0,rel:!0});var DT=i(Ns);lg=n(DT,"torch.nn.Module"),DT.forEach(o),dg=n(Gh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gh.forEach(o),cg=h(vt),Ss=a(vt,"P",{});var Xh=i(Ss);pg=n(Xh,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Ws=a(Xh,"A",{href:!0,rel:!0});var IT=i(Ws);mg=n(IT,`Attention is
all you need`),IT.forEach(o),hg=n(Xh,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Xh.forEach(o),fg=h(vt),co=a(vt,"P",{});var Eo=i(co);ug=n(Eo,"To behave as an decoder the model needs to be initialized with the "),Zd=a(Eo,"CODE",{});var NT=i(Zd);gg=n(NT,"is_decoder"),NT.forEach(o),_g=n(Eo,` argument of the configuration set
to `),ec=a(Eo,"CODE",{});var ST=i(ec);kg=n(ST,"True"),ST.forEach(o),vg=n(Eo,". To be used in a Seq2Seq model, the model needs to initialized with both "),oc=a(Eo,"CODE",{});var WT=i(oc);yg=n(WT,"is_decoder"),WT.forEach(o),Fg=n(Eo,` argument and
`),tc=a(Eo,"CODE",{});var UT=i(tc);bg=n(UT,"add_cross_attention"),UT.forEach(o),wg=n(Eo," set to "),nc=a(Eo,"CODE",{});var KT=i(nc);Tg=n(KT,"True"),KT.forEach(o),$g=n(Eo,"; an "),rc=a(Eo,"CODE",{});var BT=i(rc);xg=n(BT,"encoder_hidden_states"),BT.forEach(o),Rg=n(Eo," is then expected as an input to the forward pass."),Eo.forEach(o),Eg=h(vt),So=a(vt,"DIV",{class:!0});var Zr=i(So);b(Us.$$.fragment,Zr),Mg=h(Zr),jt=a(Zr,"P",{});var cd=i(jt);jg=n(cd,"The "),Al=a(cd,"A",{href:!0});var QT=i(Al);zg=n(QT,"RoFormerModel"),QT.forEach(o),Cg=n(cd," forward method, overrides the "),sc=a(cd,"CODE",{});var HT=i(sc);qg=n(HT,"__call__"),HT.forEach(o),Pg=n(cd," special method."),cd.forEach(o),Ag=h(Zr),b(Cn.$$.fragment,Zr),Lg=h(Zr),b(qn.$$.fragment,Zr),Zr.forEach(o),vt.forEach(o),ih=h(r),zt=a(r,"H2",{class:!0});var Yh=i(zt);Pn=a(Yh,"A",{id:!0,class:!0,href:!0});var VT=i(Pn);ac=a(VT,"SPAN",{});var JT=i(ac);b(Ks.$$.fragment,JT),JT.forEach(o),VT.forEach(o),Og=h(Yh),ic=a(Yh,"SPAN",{});var GT=i(ic);Dg=n(GT,"RoFormerForCausalLM"),GT.forEach(o),Yh.forEach(o),lh=h(r),at=a(r,"DIV",{class:!0});var pd=i(at);b(Bs.$$.fragment,pd),Ig=h(pd),Ct=a(pd,"P",{});var md=i(Ct);Ng=n(md,"RoFormer Model with a "),lc=a(md,"CODE",{});var XT=i(lc);Sg=n(XT,"language modeling"),XT.forEach(o),Wg=n(md,` head on top for CLM fine-tuning.
This model is a PyTorch `),Qs=a(md,"A",{href:!0,rel:!0});var YT=i(Qs);Ug=n(YT,"torch.nn.Module"),YT.forEach(o),Kg=n(md,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),md.forEach(o),Bg=h(pd),Wo=a(pd,"DIV",{class:!0});var es=i(Wo);b(Hs.$$.fragment,es),Qg=h(es),qt=a(es,"P",{});var hd=i(qt);Hg=n(hd,"The "),Ll=a(hd,"A",{href:!0});var ZT=i(Ll);Vg=n(ZT,"RoFormerForCausalLM"),ZT.forEach(o),Jg=n(hd," forward method, overrides the "),dc=a(hd,"CODE",{});var e$=i(dc);Gg=n(e$,"__call__"),e$.forEach(o),Xg=n(hd," special method."),hd.forEach(o),Yg=h(es),b(An.$$.fragment,es),Zg=h(es),b(Ln.$$.fragment,es),es.forEach(o),pd.forEach(o),dh=h(r),Pt=a(r,"H2",{class:!0});var Zh=i(Pt);On=a(Zh,"A",{id:!0,class:!0,href:!0});var o$=i(On);cc=a(o$,"SPAN",{});var t$=i(cc);b(Vs.$$.fragment,t$),t$.forEach(o),o$.forEach(o),e_=h(Zh),pc=a(Zh,"SPAN",{});var n$=i(pc);o_=n(n$,"RoFormerForMaskedLM"),n$.forEach(o),Zh.forEach(o),ch=h(r),it=a(r,"DIV",{class:!0});var fd=i(it);b(Js.$$.fragment,fd),t_=h(fd),At=a(fd,"P",{});var ud=i(At);n_=n(ud,"RoFormer Model with a "),mc=a(ud,"CODE",{});var r$=i(mc);r_=n(r$,"language modeling"),r$.forEach(o),s_=n(ud,` head on top.
This model is a PyTorch `),Gs=a(ud,"A",{href:!0,rel:!0});var s$=i(Gs);a_=n(s$,"torch.nn.Module"),s$.forEach(o),i_=n(ud,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ud.forEach(o),l_=h(fd),Fo=a(fd,"DIV",{class:!0});var yt=i(Fo);b(Xs.$$.fragment,yt),d_=h(yt),Lt=a(yt,"P",{});var gd=i(Lt);c_=n(gd,"The "),Ol=a(gd,"A",{href:!0});var a$=i(Ol);p_=n(a$,"RoFormerForMaskedLM"),a$.forEach(o),m_=n(gd," forward method, overrides the "),hc=a(gd,"CODE",{});var i$=i(hc);h_=n(i$,"__call__"),i$.forEach(o),f_=n(gd," special method."),gd.forEach(o),u_=h(yt),b(Dn.$$.fragment,yt),g_=h(yt),b(In.$$.fragment,yt),__=h(yt),b(Nn.$$.fragment,yt),yt.forEach(o),fd.forEach(o),ph=h(r),Ot=a(r,"H2",{class:!0});var ef=i(Ot);Sn=a(ef,"A",{id:!0,class:!0,href:!0});var l$=i(Sn);fc=a(l$,"SPAN",{});var d$=i(fc);b(Ys.$$.fragment,d$),d$.forEach(o),l$.forEach(o),k_=h(ef),uc=a(ef,"SPAN",{});var c$=i(uc);v_=n(c$,"RoFormerForSequenceClassification"),c$.forEach(o),ef.forEach(o),mh=h(r),Lo=a(r,"DIV",{class:!0});var os=i(Lo);b(Zs.$$.fragment,os),y_=h(os),gc=a(os,"P",{});var p$=i(gc);F_=n(p$,`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),p$.forEach(o),b_=h(os),ea=a(os,"P",{});var of=i(ea);w_=n(of,"This model is a PyTorch "),oa=a(of,"A",{href:!0,rel:!0});var m$=i(oa);T_=n(m$,"torch.nn.Module"),m$.forEach(o),$_=n(of,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),of.forEach(o),x_=h(os),io=a(os,"DIV",{class:!0});var Mo=i(io);b(ta.$$.fragment,Mo),R_=h(Mo),Dt=a(Mo,"P",{});var _d=i(Dt);E_=n(_d,"The "),Dl=a(_d,"A",{href:!0});var h$=i(Dl);M_=n(h$,"RoFormerForSequenceClassification"),h$.forEach(o),j_=n(_d," forward method, overrides the "),_c=a(_d,"CODE",{});var f$=i(_c);z_=n(f$,"__call__"),f$.forEach(o),C_=n(_d," special method."),_d.forEach(o),q_=h(Mo),b(Wn.$$.fragment,Mo),P_=h(Mo),b(Un.$$.fragment,Mo),A_=h(Mo),b(Kn.$$.fragment,Mo),L_=h(Mo),b(Bn.$$.fragment,Mo),O_=h(Mo),b(Qn.$$.fragment,Mo),Mo.forEach(o),os.forEach(o),hh=h(r),It=a(r,"H2",{class:!0});var tf=i(It);Hn=a(tf,"A",{id:!0,class:!0,href:!0});var u$=i(Hn);kc=a(u$,"SPAN",{});var g$=i(kc);b(na.$$.fragment,g$),g$.forEach(o),u$.forEach(o),D_=h(tf),vc=a(tf,"SPAN",{});var _$=i(vc);I_=n(_$,"RoFormerForMultipleChoice"),_$.forEach(o),tf.forEach(o),fh=h(r),Oo=a(r,"DIV",{class:!0});var ts=i(Oo);b(ra.$$.fragment,ts),N_=h(ts),yc=a(ts,"P",{});var k$=i(yc);S_=n(k$,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),k$.forEach(o),W_=h(ts),sa=a(ts,"P",{});var nf=i(sa);U_=n(nf,"This model is a PyTorch "),aa=a(nf,"A",{href:!0,rel:!0});var v$=i(aa);K_=n(v$,"torch.nn.Module"),v$.forEach(o),B_=n(nf,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nf.forEach(o),Q_=h(ts),Uo=a(ts,"DIV",{class:!0});var ns=i(Uo);b(ia.$$.fragment,ns),H_=h(ns),Nt=a(ns,"P",{});var kd=i(Nt);V_=n(kd,"The "),Il=a(kd,"A",{href:!0});var y$=i(Il);J_=n(y$,"RoFormerForMultipleChoice"),y$.forEach(o),G_=n(kd," forward method, overrides the "),Fc=a(kd,"CODE",{});var F$=i(Fc);X_=n(F$,"__call__"),F$.forEach(o),Y_=n(kd," special method."),kd.forEach(o),Z_=h(ns),b(Vn.$$.fragment,ns),ek=h(ns),b(Jn.$$.fragment,ns),ns.forEach(o),ts.forEach(o),uh=h(r),St=a(r,"H2",{class:!0});var rf=i(St);Gn=a(rf,"A",{id:!0,class:!0,href:!0});var b$=i(Gn);bc=a(b$,"SPAN",{});var w$=i(bc);b(la.$$.fragment,w$),w$.forEach(o),b$.forEach(o),ok=h(rf),wc=a(rf,"SPAN",{});var T$=i(wc);tk=n(T$,"RoFormerForTokenClassification"),T$.forEach(o),rf.forEach(o),gh=h(r),Do=a(r,"DIV",{class:!0});var rs=i(Do);b(da.$$.fragment,rs),nk=h(rs),Tc=a(rs,"P",{});var $$=i(Tc);rk=n($$,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$$.forEach(o),sk=h(rs),ca=a(rs,"P",{});var sf=i(ca);ak=n(sf,"This model is a PyTorch "),pa=a(sf,"A",{href:!0,rel:!0});var x$=i(pa);ik=n(x$,"torch.nn.Module"),x$.forEach(o),lk=n(sf,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sf.forEach(o),dk=h(rs),bo=a(rs,"DIV",{class:!0});var Ft=i(bo);b(ma.$$.fragment,Ft),ck=h(Ft),Wt=a(Ft,"P",{});var vd=i(Wt);pk=n(vd,"The "),Nl=a(vd,"A",{href:!0});var R$=i(Nl);mk=n(R$,"RoFormerForTokenClassification"),R$.forEach(o),hk=n(vd," forward method, overrides the "),$c=a(vd,"CODE",{});var E$=i($c);fk=n(E$,"__call__"),E$.forEach(o),uk=n(vd," special method."),vd.forEach(o),gk=h(Ft),b(Xn.$$.fragment,Ft),_k=h(Ft),b(Yn.$$.fragment,Ft),kk=h(Ft),b(Zn.$$.fragment,Ft),Ft.forEach(o),rs.forEach(o),_h=h(r),Ut=a(r,"H2",{class:!0});var af=i(Ut);er=a(af,"A",{id:!0,class:!0,href:!0});var M$=i(er);xc=a(M$,"SPAN",{});var j$=i(xc);b(ha.$$.fragment,j$),j$.forEach(o),M$.forEach(o),vk=h(af),Rc=a(af,"SPAN",{});var z$=i(Rc);yk=n(z$,"RoFormerForQuestionAnswering"),z$.forEach(o),af.forEach(o),kh=h(r),Io=a(r,"DIV",{class:!0});var ss=i(Io);b(fa.$$.fragment,ss),Fk=h(ss),Kt=a(ss,"P",{});var yd=i(Kt);bk=n(yd,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ec=a(yd,"CODE",{});var C$=i(Ec);wk=n(C$,"span start logits"),C$.forEach(o),Tk=n(yd," and "),Mc=a(yd,"CODE",{});var q$=i(Mc);$k=n(q$,"span end logits"),q$.forEach(o),xk=n(yd,")."),yd.forEach(o),Rk=h(ss),ua=a(ss,"P",{});var lf=i(ua);Ek=n(lf,"This model is a PyTorch "),ga=a(lf,"A",{href:!0,rel:!0});var P$=i(ga);Mk=n(P$,"torch.nn.Module"),P$.forEach(o),jk=n(lf,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lf.forEach(o),zk=h(ss),wo=a(ss,"DIV",{class:!0});var bt=i(wo);b(_a.$$.fragment,bt),Ck=h(bt),Bt=a(bt,"P",{});var Fd=i(Bt);qk=n(Fd,"The "),Sl=a(Fd,"A",{href:!0});var A$=i(Sl);Pk=n(A$,"RoFormerForQuestionAnswering"),A$.forEach(o),Ak=n(Fd," forward method, overrides the "),jc=a(Fd,"CODE",{});var L$=i(jc);Lk=n(L$,"__call__"),L$.forEach(o),Ok=n(Fd," special method."),Fd.forEach(o),Dk=h(bt),b(or.$$.fragment,bt),Ik=h(bt),b(tr.$$.fragment,bt),Nk=h(bt),b(nr.$$.fragment,bt),bt.forEach(o),ss.forEach(o),vh=h(r),Qt=a(r,"H2",{class:!0});var df=i(Qt);rr=a(df,"A",{id:!0,class:!0,href:!0});var O$=i(rr);zc=a(O$,"SPAN",{});var D$=i(zc);b(ka.$$.fragment,D$),D$.forEach(o),O$.forEach(o),Sk=h(df),Cc=a(df,"SPAN",{});var I$=i(Cc);Wk=n(I$,"TFRoFormerModel"),I$.forEach(o),df.forEach(o),yh=h(r),po=a(r,"DIV",{class:!0});var Yo=i(po);b(va.$$.fragment,Yo),Uk=h(Yo),qc=a(Yo,"P",{});var N$=i(qc);Kk=n(N$,"The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top."),N$.forEach(o),Bk=h(Yo),ya=a(Yo,"P",{});var cf=i(ya);Qk=n(cf,"This model inherits from "),Wl=a(cf,"A",{href:!0});var S$=i(Wl);Hk=n(S$,"TFPreTrainedModel"),S$.forEach(o),Vk=n(cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cf.forEach(o),Jk=h(Yo),Fa=a(Yo,"P",{});var pf=i(Fa);Gk=n(pf,"This model is also a "),ba=a(pf,"A",{href:!0,rel:!0});var W$=i(ba);Xk=n(W$,"tf.keras.Model"),W$.forEach(o),Yk=n(pf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pf.forEach(o),Zk=h(Yo),b(sr.$$.fragment,Yo),ev=h(Yo),Ko=a(Yo,"DIV",{class:!0});var as=i(Ko);b(wa.$$.fragment,as),ov=h(as),Ht=a(as,"P",{});var bd=i(Ht);tv=n(bd,"The "),Ul=a(bd,"A",{href:!0});var U$=i(Ul);nv=n(U$,"TFRoFormerModel"),U$.forEach(o),rv=n(bd," forward method, overrides the "),Pc=a(bd,"CODE",{});var K$=i(Pc);sv=n(K$,"__call__"),K$.forEach(o),av=n(bd," special method."),bd.forEach(o),iv=h(as),b(ar.$$.fragment,as),lv=h(as),b(ir.$$.fragment,as),as.forEach(o),Yo.forEach(o),Fh=h(r),Vt=a(r,"H2",{class:!0});var mf=i(Vt);lr=a(mf,"A",{id:!0,class:!0,href:!0});var B$=i(lr);Ac=a(B$,"SPAN",{});var Q$=i(Ac);b(Ta.$$.fragment,Q$),Q$.forEach(o),B$.forEach(o),dv=h(mf),Lc=a(mf,"SPAN",{});var H$=i(Lc);cv=n(H$,"TFRoFormerForMaskedLM"),H$.forEach(o),mf.forEach(o),bh=h(r),mo=a(r,"DIV",{class:!0});var Zo=i(mo);b($a.$$.fragment,Zo),pv=h(Zo),xa=a(Zo,"P",{});var hf=i(xa);mv=n(hf,"RoFormer Model with a "),Oc=a(hf,"CODE",{});var V$=i(Oc);hv=n(V$,"language modeling"),V$.forEach(o),fv=n(hf," head on top."),hf.forEach(o),uv=h(Zo),Ra=a(Zo,"P",{});var ff=i(Ra);gv=n(ff,"This model inherits from "),Kl=a(ff,"A",{href:!0});var J$=i(Kl);_v=n(J$,"TFPreTrainedModel"),J$.forEach(o),kv=n(ff,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ff.forEach(o),vv=h(Zo),Ea=a(Zo,"P",{});var uf=i(Ea);yv=n(uf,"This model is also a "),Ma=a(uf,"A",{href:!0,rel:!0});var G$=i(Ma);Fv=n(G$,"tf.keras.Model"),G$.forEach(o),bv=n(uf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uf.forEach(o),wv=h(Zo),b(dr.$$.fragment,Zo),Tv=h(Zo),To=a(Zo,"DIV",{class:!0});var wt=i(To);b(ja.$$.fragment,wt),$v=h(wt),Jt=a(wt,"P",{});var wd=i(Jt);xv=n(wd,"The "),Bl=a(wd,"A",{href:!0});var X$=i(Bl);Rv=n(X$,"TFRoFormerForMaskedLM"),X$.forEach(o),Ev=n(wd," forward method, overrides the "),Dc=a(wd,"CODE",{});var Y$=i(Dc);Mv=n(Y$,"__call__"),Y$.forEach(o),jv=n(wd," special method."),wd.forEach(o),zv=h(wt),b(cr.$$.fragment,wt),Cv=h(wt),b(pr.$$.fragment,wt),qv=h(wt),b(mr.$$.fragment,wt),wt.forEach(o),Zo.forEach(o),wh=h(r),Gt=a(r,"H2",{class:!0});var gf=i(Gt);hr=a(gf,"A",{id:!0,class:!0,href:!0});var Z$=i(hr);Ic=a(Z$,"SPAN",{});var e1=i(Ic);b(za.$$.fragment,e1),e1.forEach(o),Z$.forEach(o),Pv=h(gf),Nc=a(gf,"SPAN",{});var o1=i(Nc);Av=n(o1,"TFRoFormerForCausalLM"),o1.forEach(o),gf.forEach(o),Th=h(r),ho=a(r,"DIV",{class:!0});var et=i(ho);b(Ca.$$.fragment,et),Lv=h(et),qa=a(et,"P",{});var _f=i(qa);Ov=n(_f,"RoFormer Model with a "),Sc=a(_f,"CODE",{});var t1=i(Sc);Dv=n(t1,"language modeling"),t1.forEach(o),Iv=n(_f," head on top for CLM fine-tuning."),_f.forEach(o),Nv=h(et),Pa=a(et,"P",{});var kf=i(Pa);Sv=n(kf,"This model inherits from "),Ql=a(kf,"A",{href:!0});var n1=i(Ql);Wv=n(n1,"TFPreTrainedModel"),n1.forEach(o),Uv=n(kf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kf.forEach(o),Kv=h(et),Aa=a(et,"P",{});var vf=i(Aa);Bv=n(vf,"This model is also a "),La=a(vf,"A",{href:!0,rel:!0});var r1=i(La);Qv=n(r1,"tf.keras.Model"),r1.forEach(o),Hv=n(vf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vf.forEach(o),Vv=h(et),b(fr.$$.fragment,et),Jv=h(et),kt=a(et,"DIV",{class:!0});var Td=i(kt);b(Oa.$$.fragment,Td),Gv=h(Td),vo=a(Td,"P",{});var ot=i(vo);Xv=n(ot,"labels ("),Wc=a(ot,"CODE",{});var s1=i(Wc);Yv=n(s1,"tf.Tensor"),s1.forEach(o),Zv=n(ot," or "),Uc=a(ot,"CODE",{});var a1=i(Uc);ey=n(a1,"np.ndarray"),a1.forEach(o),oy=n(ot," of shape "),Kc=a(ot,"CODE",{});var i1=i(Kc);ty=n(i1,"(batch_size, sequence_length)"),i1.forEach(o),ny=n(ot,", "),Bc=a(ot,"EM",{});var l1=i(Bc);ry=n(l1,"optional"),l1.forEach(o),sy=n(ot,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Qc=a(ot,"CODE",{});var d1=i(Qc);ay=n(d1,"[0, ..., config.vocab_size - 1]"),d1.forEach(o),iy=n(ot,"."),ot.forEach(o),ly=h(Td),b(ur.$$.fragment,Td),Td.forEach(o),et.forEach(o),$h=h(r),Xt=a(r,"H2",{class:!0});var yf=i(Xt);gr=a(yf,"A",{id:!0,class:!0,href:!0});var c1=i(gr);Hc=a(c1,"SPAN",{});var p1=i(Hc);b(Da.$$.fragment,p1),p1.forEach(o),c1.forEach(o),dy=h(yf),Vc=a(yf,"SPAN",{});var m1=i(Vc);cy=n(m1,"TFRoFormerForSequenceClassification"),m1.forEach(o),yf.forEach(o),xh=h(r),fo=a(r,"DIV",{class:!0});var tt=i(fo);b(Ia.$$.fragment,tt),py=h(tt),Jc=a(tt,"P",{});var h1=i(Jc);my=n(h1,"RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),h1.forEach(o),hy=h(tt),Na=a(tt,"P",{});var Ff=i(Na);fy=n(Ff,"This model inherits from "),Hl=a(Ff,"A",{href:!0});var f1=i(Hl);uy=n(f1,"TFPreTrainedModel"),f1.forEach(o),gy=n(Ff,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ff.forEach(o),_y=h(tt),Sa=a(tt,"P",{});var bf=i(Sa);ky=n(bf,"This model is also a "),Wa=a(bf,"A",{href:!0,rel:!0});var u1=i(Wa);vy=n(u1,"tf.keras.Model"),u1.forEach(o),yy=n(bf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bf.forEach(o),Fy=h(tt),b(_r.$$.fragment,tt),by=h(tt),$o=a(tt,"DIV",{class:!0});var Tt=i($o);b(Ua.$$.fragment,Tt),wy=h(Tt),Yt=a(Tt,"P",{});var $d=i(Yt);Ty=n($d,"The "),Vl=a($d,"A",{href:!0});var g1=i(Vl);$y=n(g1,"TFRoFormerForSequenceClassification"),g1.forEach(o),xy=n($d," forward method, overrides the "),Gc=a($d,"CODE",{});var _1=i(Gc);Ry=n(_1,"__call__"),_1.forEach(o),Ey=n($d," special method."),$d.forEach(o),My=h(Tt),b(kr.$$.fragment,Tt),jy=h(Tt),b(vr.$$.fragment,Tt),zy=h(Tt),b(yr.$$.fragment,Tt),Tt.forEach(o),tt.forEach(o),Rh=h(r),Zt=a(r,"H2",{class:!0});var wf=i(Zt);Fr=a(wf,"A",{id:!0,class:!0,href:!0});var k1=i(Fr);Xc=a(k1,"SPAN",{});var v1=i(Xc);b(Ka.$$.fragment,v1),v1.forEach(o),k1.forEach(o),Cy=h(wf),Yc=a(wf,"SPAN",{});var y1=i(Yc);qy=n(y1,"TFRoFormerForMultipleChoice"),y1.forEach(o),wf.forEach(o),Eh=h(r),uo=a(r,"DIV",{class:!0});var nt=i(uo);b(Ba.$$.fragment,nt),Py=h(nt),Zc=a(nt,"P",{});var F1=i(Zc);Ay=n(F1,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),F1.forEach(o),Ly=h(nt),Qa=a(nt,"P",{});var Tf=i(Qa);Oy=n(Tf,"This model inherits from "),Jl=a(Tf,"A",{href:!0});var b1=i(Jl);Dy=n(b1,"TFPreTrainedModel"),b1.forEach(o),Iy=n(Tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf.forEach(o),Ny=h(nt),Ha=a(nt,"P",{});var $f=i(Ha);Sy=n($f,"This model is also a "),Va=a($f,"A",{href:!0,rel:!0});var w1=i(Va);Wy=n(w1,"tf.keras.Model"),w1.forEach(o),Uy=n($f,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$f.forEach(o),Ky=h(nt),b(br.$$.fragment,nt),By=h(nt),Bo=a(nt,"DIV",{class:!0});var is=i(Bo);b(Ja.$$.fragment,is),Qy=h(is),en=a(is,"P",{});var xd=i(en);Hy=n(xd,"The "),Gl=a(xd,"A",{href:!0});var T1=i(Gl);Vy=n(T1,"TFRoFormerForMultipleChoice"),T1.forEach(o),Jy=n(xd," forward method, overrides the "),ep=a(xd,"CODE",{});var $1=i(ep);Gy=n($1,"__call__"),$1.forEach(o),Xy=n(xd," special method."),xd.forEach(o),Yy=h(is),b(wr.$$.fragment,is),Zy=h(is),b(Tr.$$.fragment,is),is.forEach(o),nt.forEach(o),Mh=h(r),on=a(r,"H2",{class:!0});var xf=i(on);$r=a(xf,"A",{id:!0,class:!0,href:!0});var x1=i($r);op=a(x1,"SPAN",{});var R1=i(op);b(Ga.$$.fragment,R1),R1.forEach(o),x1.forEach(o),eF=h(xf),tp=a(xf,"SPAN",{});var E1=i(tp);oF=n(E1,"TFRoFormerForTokenClassification"),E1.forEach(o),xf.forEach(o),jh=h(r),go=a(r,"DIV",{class:!0});var rt=i(go);b(Xa.$$.fragment,rt),tF=h(rt),np=a(rt,"P",{});var M1=i(np);nF=n(M1,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),M1.forEach(o),rF=h(rt),Ya=a(rt,"P",{});var Rf=i(Ya);sF=n(Rf,"This model inherits from "),Xl=a(Rf,"A",{href:!0});var j1=i(Xl);aF=n(j1,"TFPreTrainedModel"),j1.forEach(o),iF=n(Rf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rf.forEach(o),lF=h(rt),Za=a(rt,"P",{});var Ef=i(Za);dF=n(Ef,"This model is also a "),ei=a(Ef,"A",{href:!0,rel:!0});var z1=i(ei);cF=n(z1,"tf.keras.Model"),z1.forEach(o),pF=n(Ef,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ef.forEach(o),mF=h(rt),b(xr.$$.fragment,rt),hF=h(rt),xo=a(rt,"DIV",{class:!0});var $t=i(xo);b(oi.$$.fragment,$t),fF=h($t),tn=a($t,"P",{});var Rd=i(tn);uF=n(Rd,"The "),Yl=a(Rd,"A",{href:!0});var C1=i(Yl);gF=n(C1,"TFRoFormerForTokenClassification"),C1.forEach(o),_F=n(Rd," forward method, overrides the "),rp=a(Rd,"CODE",{});var q1=i(rp);kF=n(q1,"__call__"),q1.forEach(o),vF=n(Rd," special method."),Rd.forEach(o),yF=h($t),b(Rr.$$.fragment,$t),FF=h($t),b(Er.$$.fragment,$t),bF=h($t),b(Mr.$$.fragment,$t),$t.forEach(o),rt.forEach(o),zh=h(r),nn=a(r,"H2",{class:!0});var Mf=i(nn);jr=a(Mf,"A",{id:!0,class:!0,href:!0});var P1=i(jr);sp=a(P1,"SPAN",{});var A1=i(sp);b(ti.$$.fragment,A1),A1.forEach(o),P1.forEach(o),wF=h(Mf),ap=a(Mf,"SPAN",{});var L1=i(ap);TF=n(L1,"TFRoFormerForQuestionAnswering"),L1.forEach(o),Mf.forEach(o),Ch=h(r),_o=a(r,"DIV",{class:!0});var st=i(_o);b(ni.$$.fragment,st),$F=h(st),rn=a(st,"P",{});var Ed=i(rn);xF=n(Ed,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ip=a(Ed,"CODE",{});var O1=i(ip);RF=n(O1,"span start logits"),O1.forEach(o),EF=n(Ed," and "),lp=a(Ed,"CODE",{});var D1=i(lp);MF=n(D1,"span end logits"),D1.forEach(o),jF=n(Ed,")."),Ed.forEach(o),zF=h(st),ri=a(st,"P",{});var jf=i(ri);CF=n(jf,"This model inherits from "),Zl=a(jf,"A",{href:!0});var I1=i(Zl);qF=n(I1,"TFPreTrainedModel"),I1.forEach(o),PF=n(jf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jf.forEach(o),AF=h(st),si=a(st,"P",{});var zf=i(si);LF=n(zf,"This model is also a "),ai=a(zf,"A",{href:!0,rel:!0});var N1=i(ai);OF=n(N1,"tf.keras.Model"),N1.forEach(o),DF=n(zf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zf.forEach(o),IF=h(st),b(zr.$$.fragment,st),NF=h(st),Ro=a(st,"DIV",{class:!0});var xt=i(Ro);b(ii.$$.fragment,xt),SF=h(xt),sn=a(xt,"P",{});var Md=i(sn);WF=n(Md,"The "),ed=a(Md,"A",{href:!0});var S1=i(ed);UF=n(S1,"TFRoFormerForQuestionAnswering"),S1.forEach(o),KF=n(Md," forward method, overrides the "),dp=a(Md,"CODE",{});var W1=i(dp);BF=n(W1,"__call__"),W1.forEach(o),QF=n(Md," special method."),Md.forEach(o),HF=h(xt),b(Cr.$$.fragment,xt),VF=h(xt),b(qr.$$.fragment,xt),JF=h(xt),b(Pr.$$.fragment,xt),xt.forEach(o),st.forEach(o),qh=h(r),an=a(r,"H2",{class:!0});var Cf=i(an);Ar=a(Cf,"A",{id:!0,class:!0,href:!0});var U1=i(Ar);cp=a(U1,"SPAN",{});var K1=i(cp);b(li.$$.fragment,K1),K1.forEach(o),U1.forEach(o),GF=h(Cf),pp=a(Cf,"SPAN",{});var B1=i(pp);XF=n(B1,"FlaxRoFormerModel"),B1.forEach(o),Cf.forEach(o),Ph=h(r),eo=a(r,"DIV",{class:!0});var jo=i(eo);b(di.$$.fragment,jo),YF=h(jo),mp=a(jo,"P",{});var Q1=i(mp);ZF=n(Q1,"The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top."),Q1.forEach(o),e2=h(jo),ci=a(jo,"P",{});var qf=i(ci);o2=n(qf,"This model inherits from "),od=a(qf,"A",{href:!0});var H1=i(od);t2=n(H1,"FlaxPreTrainedModel"),H1.forEach(o),n2=n(qf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),qf.forEach(o),r2=h(jo),pi=a(jo,"P",{});var Pf=i(pi);s2=n(Pf,"This model is also a Flax Linen "),mi=a(Pf,"A",{href:!0,rel:!0});var V1=i(mi);a2=n(V1,"flax.linen.Module"),V1.forEach(o),i2=n(Pf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Pf.forEach(o),l2=h(jo),hp=a(jo,"P",{});var J1=i(hp);d2=n(J1,"Finally, this model supports inherent JAX features such as:"),J1.forEach(o),c2=h(jo),lt=a(jo,"UL",{});var ls=i(lt);fp=a(ls,"LI",{});var G1=i(fp);hi=a(G1,"A",{href:!0,rel:!0});var X1=i(hi);p2=n(X1,"Just-In-Time (JIT) compilation"),X1.forEach(o),G1.forEach(o),m2=h(ls),up=a(ls,"LI",{});var Y1=i(up);fi=a(Y1,"A",{href:!0,rel:!0});var Z1=i(fi);h2=n(Z1,"Automatic Differentiation"),Z1.forEach(o),Y1.forEach(o),f2=h(ls),gp=a(ls,"LI",{});var e0=i(gp);ui=a(e0,"A",{href:!0,rel:!0});var o0=i(ui);u2=n(o0,"Vectorization"),o0.forEach(o),e0.forEach(o),g2=h(ls),_p=a(ls,"LI",{});var t0=i(_p);gi=a(t0,"A",{href:!0,rel:!0});var n0=i(gi);_2=n(n0,"Parallelization"),n0.forEach(o),t0.forEach(o),ls.forEach(o),k2=h(jo),Qo=a(jo,"DIV",{class:!0});var ds=i(Qo);b(_i.$$.fragment,ds),v2=h(ds),ln=a(ds,"P",{});var jd=i(ln);y2=n(jd,"The "),kp=a(jd,"CODE",{});var r0=i(kp);F2=n(r0,"FlaxRoFormerPreTrainedModel"),r0.forEach(o),b2=n(jd," forward method, overrides the "),vp=a(jd,"CODE",{});var s0=i(vp);w2=n(s0,"__call__"),s0.forEach(o),T2=n(jd," special method."),jd.forEach(o),$2=h(ds),b(Lr.$$.fragment,ds),x2=h(ds),b(Or.$$.fragment,ds),ds.forEach(o),jo.forEach(o),Ah=h(r),dn=a(r,"H2",{class:!0});var Af=i(dn);Dr=a(Af,"A",{id:!0,class:!0,href:!0});var a0=i(Dr);yp=a(a0,"SPAN",{});var i0=i(yp);b(ki.$$.fragment,i0),i0.forEach(o),a0.forEach(o),R2=h(Af),Fp=a(Af,"SPAN",{});var l0=i(Fp);E2=n(l0,"FlaxRoFormerForMaskedLM"),l0.forEach(o),Af.forEach(o),Lh=h(r),oo=a(r,"DIV",{class:!0});var zo=i(oo);b(vi.$$.fragment,zo),M2=h(zo),yi=a(zo,"P",{});var Lf=i(yi);j2=n(Lf,"RoFormer Model with a "),bp=a(Lf,"CODE",{});var d0=i(bp);z2=n(d0,"language modeling"),d0.forEach(o),C2=n(Lf," head on top."),Lf.forEach(o),q2=h(zo),Fi=a(zo,"P",{});var Of=i(Fi);P2=n(Of,"This model inherits from "),td=a(Of,"A",{href:!0});var c0=i(td);A2=n(c0,"FlaxPreTrainedModel"),c0.forEach(o),L2=n(Of,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Of.forEach(o),O2=h(zo),bi=a(zo,"P",{});var Df=i(bi);D2=n(Df,"This model is also a Flax Linen "),wi=a(Df,"A",{href:!0,rel:!0});var p0=i(wi);I2=n(p0,"flax.linen.Module"),p0.forEach(o),N2=n(Df,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Df.forEach(o),S2=h(zo),wp=a(zo,"P",{});var m0=i(wp);W2=n(m0,"Finally, this model supports inherent JAX features such as:"),m0.forEach(o),U2=h(zo),dt=a(zo,"UL",{});var cs=i(dt);Tp=a(cs,"LI",{});var h0=i(Tp);Ti=a(h0,"A",{href:!0,rel:!0});var f0=i(Ti);K2=n(f0,"Just-In-Time (JIT) compilation"),f0.forEach(o),h0.forEach(o),B2=h(cs),$p=a(cs,"LI",{});var u0=i($p);$i=a(u0,"A",{href:!0,rel:!0});var g0=i($i);Q2=n(g0,"Automatic Differentiation"),g0.forEach(o),u0.forEach(o),H2=h(cs),xp=a(cs,"LI",{});var _0=i(xp);xi=a(_0,"A",{href:!0,rel:!0});var k0=i(xi);V2=n(k0,"Vectorization"),k0.forEach(o),_0.forEach(o),J2=h(cs),Rp=a(cs,"LI",{});var v0=i(Rp);Ri=a(v0,"A",{href:!0,rel:!0});var y0=i(Ri);G2=n(y0,"Parallelization"),y0.forEach(o),v0.forEach(o),cs.forEach(o),X2=h(zo),Ho=a(zo,"DIV",{class:!0});var ps=i(Ho);b(Ei.$$.fragment,ps),Y2=h(ps),cn=a(ps,"P",{});var zd=i(cn);Z2=n(zd,"The "),Ep=a(zd,"CODE",{});var F0=i(Ep);eb=n(F0,"FlaxRoFormerPreTrainedModel"),F0.forEach(o),ob=n(zd," forward method, overrides the "),Mp=a(zd,"CODE",{});var b0=i(Mp);tb=n(b0,"__call__"),b0.forEach(o),nb=n(zd," special method."),zd.forEach(o),rb=h(ps),b(Ir.$$.fragment,ps),sb=h(ps),b(Nr.$$.fragment,ps),ps.forEach(o),zo.forEach(o),Oh=h(r),pn=a(r,"H2",{class:!0});var If=i(pn);Sr=a(If,"A",{id:!0,class:!0,href:!0});var w0=i(Sr);jp=a(w0,"SPAN",{});var T0=i(jp);b(Mi.$$.fragment,T0),T0.forEach(o),w0.forEach(o),ab=h(If),zp=a(If,"SPAN",{});var $0=i(zp);ib=n($0,"FlaxRoFormerForSequenceClassification"),$0.forEach(o),If.forEach(o),Dh=h(r),to=a(r,"DIV",{class:!0});var Co=i(to);b(ji.$$.fragment,Co),lb=h(Co),Cp=a(Co,"P",{});var x0=i(Cp);db=n(x0,`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),x0.forEach(o),cb=h(Co),zi=a(Co,"P",{});var Nf=i(zi);pb=n(Nf,"This model inherits from "),nd=a(Nf,"A",{href:!0});var R0=i(nd);mb=n(R0,"FlaxPreTrainedModel"),R0.forEach(o),hb=n(Nf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Nf.forEach(o),fb=h(Co),Ci=a(Co,"P",{});var Sf=i(Ci);ub=n(Sf,"This model is also a Flax Linen "),qi=a(Sf,"A",{href:!0,rel:!0});var E0=i(qi);gb=n(E0,"flax.linen.Module"),E0.forEach(o),_b=n(Sf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Sf.forEach(o),kb=h(Co),qp=a(Co,"P",{});var M0=i(qp);vb=n(M0,"Finally, this model supports inherent JAX features such as:"),M0.forEach(o),yb=h(Co),ct=a(Co,"UL",{});var ms=i(ct);Pp=a(ms,"LI",{});var j0=i(Pp);Pi=a(j0,"A",{href:!0,rel:!0});var z0=i(Pi);Fb=n(z0,"Just-In-Time (JIT) compilation"),z0.forEach(o),j0.forEach(o),bb=h(ms),Ap=a(ms,"LI",{});var C0=i(Ap);Ai=a(C0,"A",{href:!0,rel:!0});var q0=i(Ai);wb=n(q0,"Automatic Differentiation"),q0.forEach(o),C0.forEach(o),Tb=h(ms),Lp=a(ms,"LI",{});var P0=i(Lp);Li=a(P0,"A",{href:!0,rel:!0});var A0=i(Li);$b=n(A0,"Vectorization"),A0.forEach(o),P0.forEach(o),xb=h(ms),Op=a(ms,"LI",{});var L0=i(Op);Oi=a(L0,"A",{href:!0,rel:!0});var O0=i(Oi);Rb=n(O0,"Parallelization"),O0.forEach(o),L0.forEach(o),ms.forEach(o),Eb=h(Co),Vo=a(Co,"DIV",{class:!0});var hs=i(Vo);b(Di.$$.fragment,hs),Mb=h(hs),mn=a(hs,"P",{});var Cd=i(mn);jb=n(Cd,"The "),Dp=a(Cd,"CODE",{});var D0=i(Dp);zb=n(D0,"FlaxRoFormerPreTrainedModel"),D0.forEach(o),Cb=n(Cd," forward method, overrides the "),Ip=a(Cd,"CODE",{});var I0=i(Ip);qb=n(I0,"__call__"),I0.forEach(o),Pb=n(Cd," special method."),Cd.forEach(o),Ab=h(hs),b(Wr.$$.fragment,hs),Lb=h(hs),b(Ur.$$.fragment,hs),hs.forEach(o),Co.forEach(o),Ih=h(r),hn=a(r,"H2",{class:!0});var Wf=i(hn);Kr=a(Wf,"A",{id:!0,class:!0,href:!0});var N0=i(Kr);Np=a(N0,"SPAN",{});var S0=i(Np);b(Ii.$$.fragment,S0),S0.forEach(o),N0.forEach(o),Ob=h(Wf),Sp=a(Wf,"SPAN",{});var W0=i(Sp);Db=n(W0,"FlaxRoFormerForMultipleChoice"),W0.forEach(o),Wf.forEach(o),Nh=h(r),no=a(r,"DIV",{class:!0});var qo=i(no);b(Ni.$$.fragment,qo),Ib=h(qo),Wp=a(qo,"P",{});var U0=i(Wp);Nb=n(U0,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),U0.forEach(o),Sb=h(qo),Si=a(qo,"P",{});var Uf=i(Si);Wb=n(Uf,"This model inherits from "),rd=a(Uf,"A",{href:!0});var K0=i(rd);Ub=n(K0,"FlaxPreTrainedModel"),K0.forEach(o),Kb=n(Uf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uf.forEach(o),Bb=h(qo),Wi=a(qo,"P",{});var Kf=i(Wi);Qb=n(Kf,"This model is also a Flax Linen "),Ui=a(Kf,"A",{href:!0,rel:!0});var B0=i(Ui);Hb=n(B0,"flax.linen.Module"),B0.forEach(o),Vb=n(Kf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Kf.forEach(o),Jb=h(qo),Up=a(qo,"P",{});var Q0=i(Up);Gb=n(Q0,"Finally, this model supports inherent JAX features such as:"),Q0.forEach(o),Xb=h(qo),pt=a(qo,"UL",{});var fs=i(pt);Kp=a(fs,"LI",{});var H0=i(Kp);Ki=a(H0,"A",{href:!0,rel:!0});var V0=i(Ki);Yb=n(V0,"Just-In-Time (JIT) compilation"),V0.forEach(o),H0.forEach(o),Zb=h(fs),Bp=a(fs,"LI",{});var J0=i(Bp);Bi=a(J0,"A",{href:!0,rel:!0});var G0=i(Bi);ew=n(G0,"Automatic Differentiation"),G0.forEach(o),J0.forEach(o),ow=h(fs),Qp=a(fs,"LI",{});var X0=i(Qp);Qi=a(X0,"A",{href:!0,rel:!0});var Y0=i(Qi);tw=n(Y0,"Vectorization"),Y0.forEach(o),X0.forEach(o),nw=h(fs),Hp=a(fs,"LI",{});var Z0=i(Hp);Hi=a(Z0,"A",{href:!0,rel:!0});var e4=i(Hi);rw=n(e4,"Parallelization"),e4.forEach(o),Z0.forEach(o),fs.forEach(o),sw=h(qo),Jo=a(qo,"DIV",{class:!0});var us=i(Jo);b(Vi.$$.fragment,us),aw=h(us),fn=a(us,"P",{});var qd=i(fn);iw=n(qd,"The "),Vp=a(qd,"CODE",{});var o4=i(Vp);lw=n(o4,"FlaxRoFormerPreTrainedModel"),o4.forEach(o),dw=n(qd," forward method, overrides the "),Jp=a(qd,"CODE",{});var t4=i(Jp);cw=n(t4,"__call__"),t4.forEach(o),pw=n(qd," special method."),qd.forEach(o),mw=h(us),b(Br.$$.fragment,us),hw=h(us),b(Qr.$$.fragment,us),us.forEach(o),qo.forEach(o),Sh=h(r),un=a(r,"H2",{class:!0});var Bf=i(un);Hr=a(Bf,"A",{id:!0,class:!0,href:!0});var n4=i(Hr);Gp=a(n4,"SPAN",{});var r4=i(Gp);b(Ji.$$.fragment,r4),r4.forEach(o),n4.forEach(o),fw=h(Bf),Xp=a(Bf,"SPAN",{});var s4=i(Xp);uw=n(s4,"FlaxRoFormerForTokenClassification"),s4.forEach(o),Bf.forEach(o),Wh=h(r),ro=a(r,"DIV",{class:!0});var Po=i(ro);b(Gi.$$.fragment,Po),gw=h(Po),Yp=a(Po,"P",{});var a4=i(Yp);_w=n(a4,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),a4.forEach(o),kw=h(Po),Xi=a(Po,"P",{});var Qf=i(Xi);vw=n(Qf,"This model inherits from "),sd=a(Qf,"A",{href:!0});var i4=i(sd);yw=n(i4,"FlaxPreTrainedModel"),i4.forEach(o),Fw=n(Qf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qf.forEach(o),bw=h(Po),Yi=a(Po,"P",{});var Hf=i(Yi);ww=n(Hf,"This model is also a Flax Linen "),Zi=a(Hf,"A",{href:!0,rel:!0});var l4=i(Zi);Tw=n(l4,"flax.linen.Module"),l4.forEach(o),$w=n(Hf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Hf.forEach(o),xw=h(Po),Zp=a(Po,"P",{});var d4=i(Zp);Rw=n(d4,"Finally, this model supports inherent JAX features such as:"),d4.forEach(o),Ew=h(Po),mt=a(Po,"UL",{});var gs=i(mt);em=a(gs,"LI",{});var c4=i(em);el=a(c4,"A",{href:!0,rel:!0});var p4=i(el);Mw=n(p4,"Just-In-Time (JIT) compilation"),p4.forEach(o),c4.forEach(o),jw=h(gs),om=a(gs,"LI",{});var m4=i(om);ol=a(m4,"A",{href:!0,rel:!0});var h4=i(ol);zw=n(h4,"Automatic Differentiation"),h4.forEach(o),m4.forEach(o),Cw=h(gs),tm=a(gs,"LI",{});var f4=i(tm);tl=a(f4,"A",{href:!0,rel:!0});var u4=i(tl);qw=n(u4,"Vectorization"),u4.forEach(o),f4.forEach(o),Pw=h(gs),nm=a(gs,"LI",{});var g4=i(nm);nl=a(g4,"A",{href:!0,rel:!0});var _4=i(nl);Aw=n(_4,"Parallelization"),_4.forEach(o),g4.forEach(o),gs.forEach(o),Lw=h(Po),Go=a(Po,"DIV",{class:!0});var _s=i(Go);b(rl.$$.fragment,_s),Ow=h(_s),gn=a(_s,"P",{});var Pd=i(gn);Dw=n(Pd,"The "),rm=a(Pd,"CODE",{});var k4=i(rm);Iw=n(k4,"FlaxRoFormerPreTrainedModel"),k4.forEach(o),Nw=n(Pd," forward method, overrides the "),sm=a(Pd,"CODE",{});var v4=i(sm);Sw=n(v4,"__call__"),v4.forEach(o),Ww=n(Pd," special method."),Pd.forEach(o),Uw=h(_s),b(Vr.$$.fragment,_s),Kw=h(_s),b(Jr.$$.fragment,_s),_s.forEach(o),Po.forEach(o),Uh=h(r),_n=a(r,"H2",{class:!0});var Vf=i(_n);Gr=a(Vf,"A",{id:!0,class:!0,href:!0});var y4=i(Gr);am=a(y4,"SPAN",{});var F4=i(am);b(sl.$$.fragment,F4),F4.forEach(o),y4.forEach(o),Bw=h(Vf),im=a(Vf,"SPAN",{});var b4=i(im);Qw=n(b4,"FlaxRoFormerForQuestionAnswering"),b4.forEach(o),Vf.forEach(o),Kh=h(r),so=a(r,"DIV",{class:!0});var Ao=i(so);b(al.$$.fragment,Ao),Hw=h(Ao),kn=a(Ao,"P",{});var Ad=i(kn);Vw=n(Ad,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),lm=a(Ad,"CODE",{});var w4=i(lm);Jw=n(w4,"span start logits"),w4.forEach(o),Gw=n(Ad," and "),dm=a(Ad,"CODE",{});var T4=i(dm);Xw=n(T4,"span end logits"),T4.forEach(o),Yw=n(Ad,")."),Ad.forEach(o),Zw=h(Ao),il=a(Ao,"P",{});var Jf=i(il);eT=n(Jf,"This model inherits from "),ad=a(Jf,"A",{href:!0});var $4=i(ad);oT=n($4,"FlaxPreTrainedModel"),$4.forEach(o),tT=n(Jf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jf.forEach(o),nT=h(Ao),ll=a(Ao,"P",{});var Gf=i(ll);rT=n(Gf,"This model is also a Flax Linen "),dl=a(Gf,"A",{href:!0,rel:!0});var x4=i(dl);sT=n(x4,"flax.linen.Module"),x4.forEach(o),aT=n(Gf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gf.forEach(o),iT=h(Ao),cm=a(Ao,"P",{});var R4=i(cm);lT=n(R4,"Finally, this model supports inherent JAX features such as:"),R4.forEach(o),dT=h(Ao),ht=a(Ao,"UL",{});var ks=i(ht);pm=a(ks,"LI",{});var E4=i(pm);cl=a(E4,"A",{href:!0,rel:!0});var M4=i(cl);cT=n(M4,"Just-In-Time (JIT) compilation"),M4.forEach(o),E4.forEach(o),pT=h(ks),mm=a(ks,"LI",{});var j4=i(mm);pl=a(j4,"A",{href:!0,rel:!0});var z4=i(pl);mT=n(z4,"Automatic Differentiation"),z4.forEach(o),j4.forEach(o),hT=h(ks),hm=a(ks,"LI",{});var C4=i(hm);ml=a(C4,"A",{href:!0,rel:!0});var q4=i(ml);fT=n(q4,"Vectorization"),q4.forEach(o),C4.forEach(o),uT=h(ks),fm=a(ks,"LI",{});var P4=i(fm);hl=a(P4,"A",{href:!0,rel:!0});var A4=i(hl);gT=n(A4,"Parallelization"),A4.forEach(o),P4.forEach(o),ks.forEach(o),_T=h(Ao),Xo=a(Ao,"DIV",{class:!0});var vs=i(Xo);b(fl.$$.fragment,vs),kT=h(vs),vn=a(vs,"P",{});var Ld=i(vn);vT=n(Ld,"The "),um=a(Ld,"CODE",{});var L4=i(um);yT=n(L4,"FlaxRoFormerPreTrainedModel"),L4.forEach(o),FT=n(Ld," forward method, overrides the "),gm=a(Ld,"CODE",{});var O4=i(gm);bT=n(O4,"__call__"),O4.forEach(o),wT=n(Ld," special method."),Ld.forEach(o),TT=h(vs),b(Xr.$$.fragment,vs),$T=h(vs),b(Yr.$$.fragment,vs),vs.forEach(o),Ao.forEach(o),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(Gx)),u(f,"id","roformer"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#roformer"),u(c,"class","relative group"),u(ae,"id","overview"),u(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ae,"href","#overview"),u(I,"class","relative group"),u(ie,"href","https://arxiv.org/pdf/2104.09864v1.pdf"),u(ie,"rel","nofollow"),u(q,"href","https://huggingface.co/junnyu"),u(q,"rel","nofollow"),u(le,"href","https://github.com/ZhuiyiTechnology/roformer"),u(le,"rel","nofollow"),u(O,"id","transformers.RoFormerConfig"),u(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(O,"href","#transformers.RoFormerConfig"),u(se,"class","relative group"),u(Se,"href","/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerModel"),u(Ne,"href","https://huggingface.co/junnyu/roformer_chinese_base"),u(Ne,"rel","nofollow"),u(We,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ue,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),u(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Z,"id","transformers.RoFormerTokenizer"),u(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Z,"href","#transformers.RoFormerTokenizer"),u(De,"class","relative group"),u(ws,"href","https://pypi.org/project/rjieba/"),u(ws,"rel","nofollow"),u(xl,"href","/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ml,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"id","transformers.RoFormerTokenizerFast"),u(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(En,"href","#transformers.RoFormerTokenizerFast"),u(Et,"class","relative group"),u(jl,"href","/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerTokenizerFast"),u(zl,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizerFast"),u(Cl,"href","/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zn,"id","transformers.RoFormerModel"),u(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zn,"href","#transformers.RoFormerModel"),u(Mt,"class","relative group"),u(Ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ns,"rel","nofollow"),u(Ws,"href","https://arxiv.org/abs/1706.03762"),u(Ws,"rel","nofollow"),u(Al,"href","/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerModel"),u(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"id","transformers.RoFormerForCausalLM"),u(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pn,"href","#transformers.RoFormerForCausalLM"),u(zt,"class","relative group"),u(Qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Qs,"rel","nofollow"),u(Ll,"href","/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerForCausalLM"),u(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(On,"id","transformers.RoFormerForMaskedLM"),u(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(On,"href","#transformers.RoFormerForMaskedLM"),u(Pt,"class","relative group"),u(Gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Gs,"rel","nofollow"),u(Ol,"href","/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerForMaskedLM"),u(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Sn,"id","transformers.RoFormerForSequenceClassification"),u(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Sn,"href","#transformers.RoFormerForSequenceClassification"),u(Ot,"class","relative group"),u(oa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(oa,"rel","nofollow"),u(Dl,"href","/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerForSequenceClassification"),u(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hn,"id","transformers.RoFormerForMultipleChoice"),u(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hn,"href","#transformers.RoFormerForMultipleChoice"),u(It,"class","relative group"),u(aa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(aa,"rel","nofollow"),u(Il,"href","/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerForMultipleChoice"),u(Uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.RoFormerForTokenClassification"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.RoFormerForTokenClassification"),u(St,"class","relative group"),u(pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(pa,"rel","nofollow"),u(Nl,"href","/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerForTokenClassification"),u(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.RoFormerForQuestionAnswering"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.RoFormerForQuestionAnswering"),u(Ut,"class","relative group"),u(ga,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ga,"rel","nofollow"),u(Sl,"href","/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.RoFormerForQuestionAnswering"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rr,"id","transformers.TFRoFormerModel"),u(rr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(rr,"href","#transformers.TFRoFormerModel"),u(Qt,"class","relative group"),u(Wl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ba,"rel","nofollow"),u(Ul,"href","/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.TFRoFormerModel"),u(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lr,"id","transformers.TFRoFormerForMaskedLM"),u(lr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(lr,"href","#transformers.TFRoFormerForMaskedLM"),u(Vt,"class","relative group"),u(Kl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ma,"rel","nofollow"),u(Bl,"href","/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.TFRoFormerForMaskedLM"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(hr,"id","transformers.TFRoFormerForCausalLM"),u(hr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(hr,"href","#transformers.TFRoFormerForCausalLM"),u(Gt,"class","relative group"),u(Ql,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(La,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(La,"rel","nofollow"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gr,"id","transformers.TFRoFormerForSequenceClassification"),u(gr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(gr,"href","#transformers.TFRoFormerForSequenceClassification"),u(Xt,"class","relative group"),u(Hl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wa,"rel","nofollow"),u(Vl,"href","/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.TFRoFormerForSequenceClassification"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fr,"id","transformers.TFRoFormerForMultipleChoice"),u(Fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fr,"href","#transformers.TFRoFormerForMultipleChoice"),u(Zt,"class","relative group"),u(Jl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(Va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Va,"rel","nofollow"),u(Gl,"href","/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.TFRoFormerForMultipleChoice"),u(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($r,"id","transformers.TFRoFormerForTokenClassification"),u($r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($r,"href","#transformers.TFRoFormerForTokenClassification"),u(on,"class","relative group"),u(Xl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(ei,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ei,"rel","nofollow"),u(Yl,"href","/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.TFRoFormerForTokenClassification"),u(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jr,"id","transformers.TFRoFormerForQuestionAnswering"),u(jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jr,"href","#transformers.TFRoFormerForQuestionAnswering"),u(nn,"class","relative group"),u(Zl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(ai,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ai,"rel","nofollow"),u(ed,"href","/docs/transformers/v4.22.2/en/model_doc/roformer#transformers.TFRoFormerForQuestionAnswering"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ar,"id","transformers.FlaxRoFormerModel"),u(Ar,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ar,"href","#transformers.FlaxRoFormerModel"),u(an,"class","relative group"),u(od,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(mi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(mi,"rel","nofollow"),u(hi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(hi,"rel","nofollow"),u(fi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(fi,"rel","nofollow"),u(ui,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ui,"rel","nofollow"),u(gi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(gi,"rel","nofollow"),u(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dr,"id","transformers.FlaxRoFormerForMaskedLM"),u(Dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dr,"href","#transformers.FlaxRoFormerForMaskedLM"),u(dn,"class","relative group"),u(td,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(wi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(wi,"rel","nofollow"),u(Ti,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ti,"rel","nofollow"),u($i,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u($i,"rel","nofollow"),u(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(xi,"rel","nofollow"),u(Ri,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ri,"rel","nofollow"),u(Ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Sr,"id","transformers.FlaxRoFormerForSequenceClassification"),u(Sr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Sr,"href","#transformers.FlaxRoFormerForSequenceClassification"),u(pn,"class","relative group"),u(nd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(qi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(qi,"rel","nofollow"),u(Pi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Pi,"rel","nofollow"),u(Ai,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ai,"rel","nofollow"),u(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Li,"rel","nofollow"),u(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Oi,"rel","nofollow"),u(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Kr,"id","transformers.FlaxRoFormerForMultipleChoice"),u(Kr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Kr,"href","#transformers.FlaxRoFormerForMultipleChoice"),u(hn,"class","relative group"),u(rd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ui,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ui,"rel","nofollow"),u(Ki,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ki,"rel","nofollow"),u(Bi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Bi,"rel","nofollow"),u(Qi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Qi,"rel","nofollow"),u(Hi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Hi,"rel","nofollow"),u(Jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hr,"id","transformers.FlaxRoFormerForTokenClassification"),u(Hr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hr,"href","#transformers.FlaxRoFormerForTokenClassification"),u(un,"class","relative group"),u(sd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Zi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Zi,"rel","nofollow"),u(el,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(el,"rel","nofollow"),u(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ol,"rel","nofollow"),u(tl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(tl,"rel","nofollow"),u(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(nl,"rel","nofollow"),u(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gr,"id","transformers.FlaxRoFormerForQuestionAnswering"),u(Gr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gr,"href","#transformers.FlaxRoFormerForQuestionAnswering"),u(_n,"class","relative group"),u(ad,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(dl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(dl,"rel","nofollow"),u(cl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(cl,"rel","nofollow"),u(pl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(pl,"rel","nofollow"),u(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ml,"rel","nofollow"),u(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(hl,"rel","nofollow"),u(Xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(r,v){e(document.head,d),_(r,g,v),_(r,c,v),e(c,f),e(f,k),w(l,k,null),e(c,p),e(c,j),e(j,Te),_(r,ge,v),_(r,I,v),e(I,ae),e(ae,ee),w(R,ee,null),e(I,$e),e(I,Q),e(Q,xe),_(r,_e,v),_(r,N,v),e(N,Re),e(N,ie),e(ie,V),e(N,Ee),_(r,ke,v),_(r,W,v),e(W,Me),_(r,ve,v),_(r,U,v),e(U,he),e(he,je),_(r,te,v),_(r,C,v),e(C,A),_(r,ye,v),_(r,K,v),e(K,fe),e(fe,ze),_(r,H,v),_(r,ne,v),e(ne,Ce),e(ne,q),e(q,qe),e(ne,J),e(ne,le),e(le,Pe),e(ne,G),_(r,Fe,v),_(r,se,v),e(se,O),e(O,ue),w(S,ue,null),e(se,Ae),e(se,oe),e(oe,L),_(r,be,v),_(r,P,v),w(de,P,null),e(P,Le),e(P,y),e(y,M),e(y,Se),e(Se,re),e(y,He),e(y,Ne),e(Ne,z),e(y,Ve),e(P,Je),e(P,Oe),e(Oe,Ge),e(Oe,We),e(We,D),e(Oe,X),e(Oe,Ue),e(Ue,Xe),e(Oe,Y),e(P,Ye),w(Ie,P,null),_(r,we,v),_(r,De,v),e(De,Z),e(Z,Ke),w(ys,Ke,null),e(De,Xf),e(De,Od),e(Od,Yf),_(r,th,v),_(r,Ze,v),w(Fs,Ze,null),e(Ze,Zf),e(Ze,bs),e(bs,eu),e(bs,ws),e(ws,ou),e(bs,tu),e(Ze,nu),e(Ze,Ts),e(Ts,ru),e(Ts,xl),e(xl,su),e(Ts,au),e(Ze,iu),w($n,Ze,null),e(Ze,lu),e(Ze,gt),w($s,gt,null),e(gt,du),e(gt,Dd),e(Dd,cu),e(gt,pu),e(gt,xs),e(xs,Rl),e(Rl,mu),e(Rl,Id),e(Id,hu),e(xs,fu),e(xs,El),e(El,uu),e(El,Nd),e(Nd,gu),e(Ze,_u),e(Ze,xn),w(Rs,xn,null),e(xn,ku),e(xn,Es),e(Es,vu),e(Es,Sd),e(Sd,yu),e(Es,Fu),e(Ze,bu),e(Ze,No),w(Ms,No,null),e(No,wu),e(No,Wd),e(Wd,Tu),e(No,$u),w(Rn,No,null),e(No,xu),e(No,Rt),e(Rt,Ru),e(Rt,Ud),e(Ud,Eu),e(Rt,Mu),e(Rt,Kd),e(Kd,ju),e(Rt,zu),e(Ze,Cu),e(Ze,Ml),w(js,Ml,null),_(r,nh,v),_(r,Et,v),e(Et,En),e(En,Bd),w(zs,Bd,null),e(Et,qu),e(Et,Qd),e(Qd,Pu),_(r,rh,v),_(r,lo,v),w(Cs,lo,null),e(lo,Au),e(lo,qs),e(qs,Lu),e(qs,Hd),e(Hd,Ou),e(qs,Du),e(lo,Iu),e(lo,Mn),e(Mn,jl),e(jl,Nu),e(Mn,Su),e(Mn,zl),e(zl,Wu),e(Mn,Uu),e(lo,Ku),e(lo,Ps),e(Ps,Bu),e(Ps,Cl),e(Cl,Qu),e(Ps,Hu),e(lo,Vu),w(jn,lo,null),e(lo,Ju),e(lo,_t),w(As,_t,null),e(_t,Gu),e(_t,Vd),e(Vd,Xu),e(_t,Yu),e(_t,Ls),e(Ls,ql),e(ql,Zu),e(ql,Jd),e(Jd,eg),e(Ls,og),e(Ls,Pl),e(Pl,tg),e(Pl,Gd),e(Gd,ng),_(r,sh,v),_(r,Mt,v),e(Mt,zn),e(zn,Xd),w(Os,Xd,null),e(Mt,rg),e(Mt,Yd),e(Yd,sg),_(r,ah,v),_(r,ko,v),w(Ds,ko,null),e(ko,ag),e(ko,Is),e(Is,ig),e(Is,Ns),e(Ns,lg),e(Is,dg),e(ko,cg),e(ko,Ss),e(Ss,pg),e(Ss,Ws),e(Ws,mg),e(Ss,hg),e(ko,fg),e(ko,co),e(co,ug),e(co,Zd),e(Zd,gg),e(co,_g),e(co,ec),e(ec,kg),e(co,vg),e(co,oc),e(oc,yg),e(co,Fg),e(co,tc),e(tc,bg),e(co,wg),e(co,nc),e(nc,Tg),e(co,$g),e(co,rc),e(rc,xg),e(co,Rg),e(ko,Eg),e(ko,So),w(Us,So,null),e(So,Mg),e(So,jt),e(jt,jg),e(jt,Al),e(Al,zg),e(jt,Cg),e(jt,sc),e(sc,qg),e(jt,Pg),e(So,Ag),w(Cn,So,null),e(So,Lg),w(qn,So,null),_(r,ih,v),_(r,zt,v),e(zt,Pn),e(Pn,ac),w(Ks,ac,null),e(zt,Og),e(zt,ic),e(ic,Dg),_(r,lh,v),_(r,at,v),w(Bs,at,null),e(at,Ig),e(at,Ct),e(Ct,Ng),e(Ct,lc),e(lc,Sg),e(Ct,Wg),e(Ct,Qs),e(Qs,Ug),e(Ct,Kg),e(at,Bg),e(at,Wo),w(Hs,Wo,null),e(Wo,Qg),e(Wo,qt),e(qt,Hg),e(qt,Ll),e(Ll,Vg),e(qt,Jg),e(qt,dc),e(dc,Gg),e(qt,Xg),e(Wo,Yg),w(An,Wo,null),e(Wo,Zg),w(Ln,Wo,null),_(r,dh,v),_(r,Pt,v),e(Pt,On),e(On,cc),w(Vs,cc,null),e(Pt,e_),e(Pt,pc),e(pc,o_),_(r,ch,v),_(r,it,v),w(Js,it,null),e(it,t_),e(it,At),e(At,n_),e(At,mc),e(mc,r_),e(At,s_),e(At,Gs),e(Gs,a_),e(At,i_),e(it,l_),e(it,Fo),w(Xs,Fo,null),e(Fo,d_),e(Fo,Lt),e(Lt,c_),e(Lt,Ol),e(Ol,p_),e(Lt,m_),e(Lt,hc),e(hc,h_),e(Lt,f_),e(Fo,u_),w(Dn,Fo,null),e(Fo,g_),w(In,Fo,null),e(Fo,__),w(Nn,Fo,null),_(r,ph,v),_(r,Ot,v),e(Ot,Sn),e(Sn,fc),w(Ys,fc,null),e(Ot,k_),e(Ot,uc),e(uc,v_),_(r,mh,v),_(r,Lo,v),w(Zs,Lo,null),e(Lo,y_),e(Lo,gc),e(gc,F_),e(Lo,b_),e(Lo,ea),e(ea,w_),e(ea,oa),e(oa,T_),e(ea,$_),e(Lo,x_),e(Lo,io),w(ta,io,null),e(io,R_),e(io,Dt),e(Dt,E_),e(Dt,Dl),e(Dl,M_),e(Dt,j_),e(Dt,_c),e(_c,z_),e(Dt,C_),e(io,q_),w(Wn,io,null),e(io,P_),w(Un,io,null),e(io,A_),w(Kn,io,null),e(io,L_),w(Bn,io,null),e(io,O_),w(Qn,io,null),_(r,hh,v),_(r,It,v),e(It,Hn),e(Hn,kc),w(na,kc,null),e(It,D_),e(It,vc),e(vc,I_),_(r,fh,v),_(r,Oo,v),w(ra,Oo,null),e(Oo,N_),e(Oo,yc),e(yc,S_),e(Oo,W_),e(Oo,sa),e(sa,U_),e(sa,aa),e(aa,K_),e(sa,B_),e(Oo,Q_),e(Oo,Uo),w(ia,Uo,null),e(Uo,H_),e(Uo,Nt),e(Nt,V_),e(Nt,Il),e(Il,J_),e(Nt,G_),e(Nt,Fc),e(Fc,X_),e(Nt,Y_),e(Uo,Z_),w(Vn,Uo,null),e(Uo,ek),w(Jn,Uo,null),_(r,uh,v),_(r,St,v),e(St,Gn),e(Gn,bc),w(la,bc,null),e(St,ok),e(St,wc),e(wc,tk),_(r,gh,v),_(r,Do,v),w(da,Do,null),e(Do,nk),e(Do,Tc),e(Tc,rk),e(Do,sk),e(Do,ca),e(ca,ak),e(ca,pa),e(pa,ik),e(ca,lk),e(Do,dk),e(Do,bo),w(ma,bo,null),e(bo,ck),e(bo,Wt),e(Wt,pk),e(Wt,Nl),e(Nl,mk),e(Wt,hk),e(Wt,$c),e($c,fk),e(Wt,uk),e(bo,gk),w(Xn,bo,null),e(bo,_k),w(Yn,bo,null),e(bo,kk),w(Zn,bo,null),_(r,_h,v),_(r,Ut,v),e(Ut,er),e(er,xc),w(ha,xc,null),e(Ut,vk),e(Ut,Rc),e(Rc,yk),_(r,kh,v),_(r,Io,v),w(fa,Io,null),e(Io,Fk),e(Io,Kt),e(Kt,bk),e(Kt,Ec),e(Ec,wk),e(Kt,Tk),e(Kt,Mc),e(Mc,$k),e(Kt,xk),e(Io,Rk),e(Io,ua),e(ua,Ek),e(ua,ga),e(ga,Mk),e(ua,jk),e(Io,zk),e(Io,wo),w(_a,wo,null),e(wo,Ck),e(wo,Bt),e(Bt,qk),e(Bt,Sl),e(Sl,Pk),e(Bt,Ak),e(Bt,jc),e(jc,Lk),e(Bt,Ok),e(wo,Dk),w(or,wo,null),e(wo,Ik),w(tr,wo,null),e(wo,Nk),w(nr,wo,null),_(r,vh,v),_(r,Qt,v),e(Qt,rr),e(rr,zc),w(ka,zc,null),e(Qt,Sk),e(Qt,Cc),e(Cc,Wk),_(r,yh,v),_(r,po,v),w(va,po,null),e(po,Uk),e(po,qc),e(qc,Kk),e(po,Bk),e(po,ya),e(ya,Qk),e(ya,Wl),e(Wl,Hk),e(ya,Vk),e(po,Jk),e(po,Fa),e(Fa,Gk),e(Fa,ba),e(ba,Xk),e(Fa,Yk),e(po,Zk),w(sr,po,null),e(po,ev),e(po,Ko),w(wa,Ko,null),e(Ko,ov),e(Ko,Ht),e(Ht,tv),e(Ht,Ul),e(Ul,nv),e(Ht,rv),e(Ht,Pc),e(Pc,sv),e(Ht,av),e(Ko,iv),w(ar,Ko,null),e(Ko,lv),w(ir,Ko,null),_(r,Fh,v),_(r,Vt,v),e(Vt,lr),e(lr,Ac),w(Ta,Ac,null),e(Vt,dv),e(Vt,Lc),e(Lc,cv),_(r,bh,v),_(r,mo,v),w($a,mo,null),e(mo,pv),e(mo,xa),e(xa,mv),e(xa,Oc),e(Oc,hv),e(xa,fv),e(mo,uv),e(mo,Ra),e(Ra,gv),e(Ra,Kl),e(Kl,_v),e(Ra,kv),e(mo,vv),e(mo,Ea),e(Ea,yv),e(Ea,Ma),e(Ma,Fv),e(Ea,bv),e(mo,wv),w(dr,mo,null),e(mo,Tv),e(mo,To),w(ja,To,null),e(To,$v),e(To,Jt),e(Jt,xv),e(Jt,Bl),e(Bl,Rv),e(Jt,Ev),e(Jt,Dc),e(Dc,Mv),e(Jt,jv),e(To,zv),w(cr,To,null),e(To,Cv),w(pr,To,null),e(To,qv),w(mr,To,null),_(r,wh,v),_(r,Gt,v),e(Gt,hr),e(hr,Ic),w(za,Ic,null),e(Gt,Pv),e(Gt,Nc),e(Nc,Av),_(r,Th,v),_(r,ho,v),w(Ca,ho,null),e(ho,Lv),e(ho,qa),e(qa,Ov),e(qa,Sc),e(Sc,Dv),e(qa,Iv),e(ho,Nv),e(ho,Pa),e(Pa,Sv),e(Pa,Ql),e(Ql,Wv),e(Pa,Uv),e(ho,Kv),e(ho,Aa),e(Aa,Bv),e(Aa,La),e(La,Qv),e(Aa,Hv),e(ho,Vv),w(fr,ho,null),e(ho,Jv),e(ho,kt),w(Oa,kt,null),e(kt,Gv),e(kt,vo),e(vo,Xv),e(vo,Wc),e(Wc,Yv),e(vo,Zv),e(vo,Uc),e(Uc,ey),e(vo,oy),e(vo,Kc),e(Kc,ty),e(vo,ny),e(vo,Bc),e(Bc,ry),e(vo,sy),e(vo,Qc),e(Qc,ay),e(vo,iy),e(kt,ly),w(ur,kt,null),_(r,$h,v),_(r,Xt,v),e(Xt,gr),e(gr,Hc),w(Da,Hc,null),e(Xt,dy),e(Xt,Vc),e(Vc,cy),_(r,xh,v),_(r,fo,v),w(Ia,fo,null),e(fo,py),e(fo,Jc),e(Jc,my),e(fo,hy),e(fo,Na),e(Na,fy),e(Na,Hl),e(Hl,uy),e(Na,gy),e(fo,_y),e(fo,Sa),e(Sa,ky),e(Sa,Wa),e(Wa,vy),e(Sa,yy),e(fo,Fy),w(_r,fo,null),e(fo,by),e(fo,$o),w(Ua,$o,null),e($o,wy),e($o,Yt),e(Yt,Ty),e(Yt,Vl),e(Vl,$y),e(Yt,xy),e(Yt,Gc),e(Gc,Ry),e(Yt,Ey),e($o,My),w(kr,$o,null),e($o,jy),w(vr,$o,null),e($o,zy),w(yr,$o,null),_(r,Rh,v),_(r,Zt,v),e(Zt,Fr),e(Fr,Xc),w(Ka,Xc,null),e(Zt,Cy),e(Zt,Yc),e(Yc,qy),_(r,Eh,v),_(r,uo,v),w(Ba,uo,null),e(uo,Py),e(uo,Zc),e(Zc,Ay),e(uo,Ly),e(uo,Qa),e(Qa,Oy),e(Qa,Jl),e(Jl,Dy),e(Qa,Iy),e(uo,Ny),e(uo,Ha),e(Ha,Sy),e(Ha,Va),e(Va,Wy),e(Ha,Uy),e(uo,Ky),w(br,uo,null),e(uo,By),e(uo,Bo),w(Ja,Bo,null),e(Bo,Qy),e(Bo,en),e(en,Hy),e(en,Gl),e(Gl,Vy),e(en,Jy),e(en,ep),e(ep,Gy),e(en,Xy),e(Bo,Yy),w(wr,Bo,null),e(Bo,Zy),w(Tr,Bo,null),_(r,Mh,v),_(r,on,v),e(on,$r),e($r,op),w(Ga,op,null),e(on,eF),e(on,tp),e(tp,oF),_(r,jh,v),_(r,go,v),w(Xa,go,null),e(go,tF),e(go,np),e(np,nF),e(go,rF),e(go,Ya),e(Ya,sF),e(Ya,Xl),e(Xl,aF),e(Ya,iF),e(go,lF),e(go,Za),e(Za,dF),e(Za,ei),e(ei,cF),e(Za,pF),e(go,mF),w(xr,go,null),e(go,hF),e(go,xo),w(oi,xo,null),e(xo,fF),e(xo,tn),e(tn,uF),e(tn,Yl),e(Yl,gF),e(tn,_F),e(tn,rp),e(rp,kF),e(tn,vF),e(xo,yF),w(Rr,xo,null),e(xo,FF),w(Er,xo,null),e(xo,bF),w(Mr,xo,null),_(r,zh,v),_(r,nn,v),e(nn,jr),e(jr,sp),w(ti,sp,null),e(nn,wF),e(nn,ap),e(ap,TF),_(r,Ch,v),_(r,_o,v),w(ni,_o,null),e(_o,$F),e(_o,rn),e(rn,xF),e(rn,ip),e(ip,RF),e(rn,EF),e(rn,lp),e(lp,MF),e(rn,jF),e(_o,zF),e(_o,ri),e(ri,CF),e(ri,Zl),e(Zl,qF),e(ri,PF),e(_o,AF),e(_o,si),e(si,LF),e(si,ai),e(ai,OF),e(si,DF),e(_o,IF),w(zr,_o,null),e(_o,NF),e(_o,Ro),w(ii,Ro,null),e(Ro,SF),e(Ro,sn),e(sn,WF),e(sn,ed),e(ed,UF),e(sn,KF),e(sn,dp),e(dp,BF),e(sn,QF),e(Ro,HF),w(Cr,Ro,null),e(Ro,VF),w(qr,Ro,null),e(Ro,JF),w(Pr,Ro,null),_(r,qh,v),_(r,an,v),e(an,Ar),e(Ar,cp),w(li,cp,null),e(an,GF),e(an,pp),e(pp,XF),_(r,Ph,v),_(r,eo,v),w(di,eo,null),e(eo,YF),e(eo,mp),e(mp,ZF),e(eo,e2),e(eo,ci),e(ci,o2),e(ci,od),e(od,t2),e(ci,n2),e(eo,r2),e(eo,pi),e(pi,s2),e(pi,mi),e(mi,a2),e(pi,i2),e(eo,l2),e(eo,hp),e(hp,d2),e(eo,c2),e(eo,lt),e(lt,fp),e(fp,hi),e(hi,p2),e(lt,m2),e(lt,up),e(up,fi),e(fi,h2),e(lt,f2),e(lt,gp),e(gp,ui),e(ui,u2),e(lt,g2),e(lt,_p),e(_p,gi),e(gi,_2),e(eo,k2),e(eo,Qo),w(_i,Qo,null),e(Qo,v2),e(Qo,ln),e(ln,y2),e(ln,kp),e(kp,F2),e(ln,b2),e(ln,vp),e(vp,w2),e(ln,T2),e(Qo,$2),w(Lr,Qo,null),e(Qo,x2),w(Or,Qo,null),_(r,Ah,v),_(r,dn,v),e(dn,Dr),e(Dr,yp),w(ki,yp,null),e(dn,R2),e(dn,Fp),e(Fp,E2),_(r,Lh,v),_(r,oo,v),w(vi,oo,null),e(oo,M2),e(oo,yi),e(yi,j2),e(yi,bp),e(bp,z2),e(yi,C2),e(oo,q2),e(oo,Fi),e(Fi,P2),e(Fi,td),e(td,A2),e(Fi,L2),e(oo,O2),e(oo,bi),e(bi,D2),e(bi,wi),e(wi,I2),e(bi,N2),e(oo,S2),e(oo,wp),e(wp,W2),e(oo,U2),e(oo,dt),e(dt,Tp),e(Tp,Ti),e(Ti,K2),e(dt,B2),e(dt,$p),e($p,$i),e($i,Q2),e(dt,H2),e(dt,xp),e(xp,xi),e(xi,V2),e(dt,J2),e(dt,Rp),e(Rp,Ri),e(Ri,G2),e(oo,X2),e(oo,Ho),w(Ei,Ho,null),e(Ho,Y2),e(Ho,cn),e(cn,Z2),e(cn,Ep),e(Ep,eb),e(cn,ob),e(cn,Mp),e(Mp,tb),e(cn,nb),e(Ho,rb),w(Ir,Ho,null),e(Ho,sb),w(Nr,Ho,null),_(r,Oh,v),_(r,pn,v),e(pn,Sr),e(Sr,jp),w(Mi,jp,null),e(pn,ab),e(pn,zp),e(zp,ib),_(r,Dh,v),_(r,to,v),w(ji,to,null),e(to,lb),e(to,Cp),e(Cp,db),e(to,cb),e(to,zi),e(zi,pb),e(zi,nd),e(nd,mb),e(zi,hb),e(to,fb),e(to,Ci),e(Ci,ub),e(Ci,qi),e(qi,gb),e(Ci,_b),e(to,kb),e(to,qp),e(qp,vb),e(to,yb),e(to,ct),e(ct,Pp),e(Pp,Pi),e(Pi,Fb),e(ct,bb),e(ct,Ap),e(Ap,Ai),e(Ai,wb),e(ct,Tb),e(ct,Lp),e(Lp,Li),e(Li,$b),e(ct,xb),e(ct,Op),e(Op,Oi),e(Oi,Rb),e(to,Eb),e(to,Vo),w(Di,Vo,null),e(Vo,Mb),e(Vo,mn),e(mn,jb),e(mn,Dp),e(Dp,zb),e(mn,Cb),e(mn,Ip),e(Ip,qb),e(mn,Pb),e(Vo,Ab),w(Wr,Vo,null),e(Vo,Lb),w(Ur,Vo,null),_(r,Ih,v),_(r,hn,v),e(hn,Kr),e(Kr,Np),w(Ii,Np,null),e(hn,Ob),e(hn,Sp),e(Sp,Db),_(r,Nh,v),_(r,no,v),w(Ni,no,null),e(no,Ib),e(no,Wp),e(Wp,Nb),e(no,Sb),e(no,Si),e(Si,Wb),e(Si,rd),e(rd,Ub),e(Si,Kb),e(no,Bb),e(no,Wi),e(Wi,Qb),e(Wi,Ui),e(Ui,Hb),e(Wi,Vb),e(no,Jb),e(no,Up),e(Up,Gb),e(no,Xb),e(no,pt),e(pt,Kp),e(Kp,Ki),e(Ki,Yb),e(pt,Zb),e(pt,Bp),e(Bp,Bi),e(Bi,ew),e(pt,ow),e(pt,Qp),e(Qp,Qi),e(Qi,tw),e(pt,nw),e(pt,Hp),e(Hp,Hi),e(Hi,rw),e(no,sw),e(no,Jo),w(Vi,Jo,null),e(Jo,aw),e(Jo,fn),e(fn,iw),e(fn,Vp),e(Vp,lw),e(fn,dw),e(fn,Jp),e(Jp,cw),e(fn,pw),e(Jo,mw),w(Br,Jo,null),e(Jo,hw),w(Qr,Jo,null),_(r,Sh,v),_(r,un,v),e(un,Hr),e(Hr,Gp),w(Ji,Gp,null),e(un,fw),e(un,Xp),e(Xp,uw),_(r,Wh,v),_(r,ro,v),w(Gi,ro,null),e(ro,gw),e(ro,Yp),e(Yp,_w),e(ro,kw),e(ro,Xi),e(Xi,vw),e(Xi,sd),e(sd,yw),e(Xi,Fw),e(ro,bw),e(ro,Yi),e(Yi,ww),e(Yi,Zi),e(Zi,Tw),e(Yi,$w),e(ro,xw),e(ro,Zp),e(Zp,Rw),e(ro,Ew),e(ro,mt),e(mt,em),e(em,el),e(el,Mw),e(mt,jw),e(mt,om),e(om,ol),e(ol,zw),e(mt,Cw),e(mt,tm),e(tm,tl),e(tl,qw),e(mt,Pw),e(mt,nm),e(nm,nl),e(nl,Aw),e(ro,Lw),e(ro,Go),w(rl,Go,null),e(Go,Ow),e(Go,gn),e(gn,Dw),e(gn,rm),e(rm,Iw),e(gn,Nw),e(gn,sm),e(sm,Sw),e(gn,Ww),e(Go,Uw),w(Vr,Go,null),e(Go,Kw),w(Jr,Go,null),_(r,Uh,v),_(r,_n,v),e(_n,Gr),e(Gr,am),w(sl,am,null),e(_n,Bw),e(_n,im),e(im,Qw),_(r,Kh,v),_(r,so,v),w(al,so,null),e(so,Hw),e(so,kn),e(kn,Vw),e(kn,lm),e(lm,Jw),e(kn,Gw),e(kn,dm),e(dm,Xw),e(kn,Yw),e(so,Zw),e(so,il),e(il,eT),e(il,ad),e(ad,oT),e(il,tT),e(so,nT),e(so,ll),e(ll,rT),e(ll,dl),e(dl,sT),e(ll,aT),e(so,iT),e(so,cm),e(cm,lT),e(so,dT),e(so,ht),e(ht,pm),e(pm,cl),e(cl,cT),e(ht,pT),e(ht,mm),e(mm,pl),e(pl,mT),e(ht,hT),e(ht,hm),e(hm,ml),e(ml,fT),e(ht,uT),e(ht,fm),e(fm,hl),e(hl,gT),e(so,_T),e(so,Xo),w(fl,Xo,null),e(Xo,kT),e(Xo,vn),e(vn,vT),e(vn,um),e(um,yT),e(vn,FT),e(vn,gm),e(gm,bT),e(vn,wT),e(Xo,TT),w(Xr,Xo,null),e(Xo,$T),w(Yr,Xo,null),Bh=!0},p(r,[v]){const ul={};v&2&&(ul.$$scope={dirty:v,ctx:r}),Ie.$set(ul);const _m={};v&2&&(_m.$$scope={dirty:v,ctx:r}),$n.$set(_m);const km={};v&2&&(km.$$scope={dirty:v,ctx:r}),Rn.$set(km);const vm={};v&2&&(vm.$$scope={dirty:v,ctx:r}),jn.$set(vm);const gl={};v&2&&(gl.$$scope={dirty:v,ctx:r}),Cn.$set(gl);const ym={};v&2&&(ym.$$scope={dirty:v,ctx:r}),qn.$set(ym);const Fm={};v&2&&(Fm.$$scope={dirty:v,ctx:r}),An.$set(Fm);const bm={};v&2&&(bm.$$scope={dirty:v,ctx:r}),Ln.$set(bm);const _l={};v&2&&(_l.$$scope={dirty:v,ctx:r}),Dn.$set(_l);const wm={};v&2&&(wm.$$scope={dirty:v,ctx:r}),In.$set(wm);const Tm={};v&2&&(Tm.$$scope={dirty:v,ctx:r}),Nn.$set(Tm);const $m={};v&2&&($m.$$scope={dirty:v,ctx:r}),Wn.$set($m);const xm={};v&2&&(xm.$$scope={dirty:v,ctx:r}),Un.$set(xm);const Rm={};v&2&&(Rm.$$scope={dirty:v,ctx:r}),Kn.$set(Rm);const Em={};v&2&&(Em.$$scope={dirty:v,ctx:r}),Bn.$set(Em);const Mm={};v&2&&(Mm.$$scope={dirty:v,ctx:r}),Qn.$set(Mm);const yn={};v&2&&(yn.$$scope={dirty:v,ctx:r}),Vn.$set(yn);const jm={};v&2&&(jm.$$scope={dirty:v,ctx:r}),Jn.$set(jm);const zm={};v&2&&(zm.$$scope={dirty:v,ctx:r}),Xn.$set(zm);const kl={};v&2&&(kl.$$scope={dirty:v,ctx:r}),Yn.$set(kl);const Cm={};v&2&&(Cm.$$scope={dirty:v,ctx:r}),Zn.$set(Cm);const qm={};v&2&&(qm.$$scope={dirty:v,ctx:r}),or.$set(qm);const Pm={};v&2&&(Pm.$$scope={dirty:v,ctx:r}),tr.$set(Pm);const ft={};v&2&&(ft.$$scope={dirty:v,ctx:r}),nr.$set(ft);const Fn={};v&2&&(Fn.$$scope={dirty:v,ctx:r}),sr.$set(Fn);const Am={};v&2&&(Am.$$scope={dirty:v,ctx:r}),ar.$set(Am);const Lm={};v&2&&(Lm.$$scope={dirty:v,ctx:r}),ir.$set(Lm);const bn={};v&2&&(bn.$$scope={dirty:v,ctx:r}),dr.$set(bn);const Om={};v&2&&(Om.$$scope={dirty:v,ctx:r}),cr.$set(Om);const Dm={};v&2&&(Dm.$$scope={dirty:v,ctx:r}),pr.$set(Dm);const vl={};v&2&&(vl.$$scope={dirty:v,ctx:r}),mr.$set(vl);const Im={};v&2&&(Im.$$scope={dirty:v,ctx:r}),fr.$set(Im);const Nm={};v&2&&(Nm.$$scope={dirty:v,ctx:r}),ur.$set(Nm);const Sm={};v&2&&(Sm.$$scope={dirty:v,ctx:r}),_r.$set(Sm);const ao={};v&2&&(ao.$$scope={dirty:v,ctx:r}),kr.$set(ao);const yl={};v&2&&(yl.$$scope={dirty:v,ctx:r}),vr.$set(yl);const Wm={};v&2&&(Wm.$$scope={dirty:v,ctx:r}),yr.$set(Wm);const Fl={};v&2&&(Fl.$$scope={dirty:v,ctx:r}),br.$set(Fl);const Um={};v&2&&(Um.$$scope={dirty:v,ctx:r}),wr.$set(Um);const wn={};v&2&&(wn.$$scope={dirty:v,ctx:r}),Tr.$set(wn);const Km={};v&2&&(Km.$$scope={dirty:v,ctx:r}),xr.$set(Km);const bl={};v&2&&(bl.$$scope={dirty:v,ctx:r}),Rr.$set(bl);const id={};v&2&&(id.$$scope={dirty:v,ctx:r}),Er.$set(id);const Bm={};v&2&&(Bm.$$scope={dirty:v,ctx:r}),Mr.$set(Bm);const ld={};v&2&&(ld.$$scope={dirty:v,ctx:r}),zr.$set(ld);const Qm={};v&2&&(Qm.$$scope={dirty:v,ctx:r}),Cr.$set(Qm);const wl={};v&2&&(wl.$$scope={dirty:v,ctx:r}),qr.$set(wl);const Tl={};v&2&&(Tl.$$scope={dirty:v,ctx:r}),Pr.$set(Tl);const Hm={};v&2&&(Hm.$$scope={dirty:v,ctx:r}),Lr.$set(Hm);const ut={};v&2&&(ut.$$scope={dirty:v,ctx:r}),Or.$set(ut);const Vm={};v&2&&(Vm.$$scope={dirty:v,ctx:r}),Ir.$set(Vm);const Tn={};v&2&&(Tn.$$scope={dirty:v,ctx:r}),Nr.$set(Tn);const Jm={};v&2&&(Jm.$$scope={dirty:v,ctx:r}),Wr.$set(Jm);const Gm={};v&2&&(Gm.$$scope={dirty:v,ctx:r}),Ur.$set(Gm);const Xm={};v&2&&(Xm.$$scope={dirty:v,ctx:r}),Br.$set(Xm);const $l={};v&2&&($l.$$scope={dirty:v,ctx:r}),Qr.$set($l);const Ym={};v&2&&(Ym.$$scope={dirty:v,ctx:r}),Vr.$set(Ym);const Zm={};v&2&&(Zm.$$scope={dirty:v,ctx:r}),Jr.$set(Zm);const eh={};v&2&&(eh.$$scope={dirty:v,ctx:r}),Xr.$set(eh);const yo={};v&2&&(yo.$$scope={dirty:v,ctx:r}),Yr.$set(yo)},i(r){Bh||(T(l.$$.fragment,r),T(R.$$.fragment,r),T(S.$$.fragment,r),T(de.$$.fragment,r),T(Ie.$$.fragment,r),T(ys.$$.fragment,r),T(Fs.$$.fragment,r),T($n.$$.fragment,r),T($s.$$.fragment,r),T(Rs.$$.fragment,r),T(Ms.$$.fragment,r),T(Rn.$$.fragment,r),T(js.$$.fragment,r),T(zs.$$.fragment,r),T(Cs.$$.fragment,r),T(jn.$$.fragment,r),T(As.$$.fragment,r),T(Os.$$.fragment,r),T(Ds.$$.fragment,r),T(Us.$$.fragment,r),T(Cn.$$.fragment,r),T(qn.$$.fragment,r),T(Ks.$$.fragment,r),T(Bs.$$.fragment,r),T(Hs.$$.fragment,r),T(An.$$.fragment,r),T(Ln.$$.fragment,r),T(Vs.$$.fragment,r),T(Js.$$.fragment,r),T(Xs.$$.fragment,r),T(Dn.$$.fragment,r),T(In.$$.fragment,r),T(Nn.$$.fragment,r),T(Ys.$$.fragment,r),T(Zs.$$.fragment,r),T(ta.$$.fragment,r),T(Wn.$$.fragment,r),T(Un.$$.fragment,r),T(Kn.$$.fragment,r),T(Bn.$$.fragment,r),T(Qn.$$.fragment,r),T(na.$$.fragment,r),T(ra.$$.fragment,r),T(ia.$$.fragment,r),T(Vn.$$.fragment,r),T(Jn.$$.fragment,r),T(la.$$.fragment,r),T(da.$$.fragment,r),T(ma.$$.fragment,r),T(Xn.$$.fragment,r),T(Yn.$$.fragment,r),T(Zn.$$.fragment,r),T(ha.$$.fragment,r),T(fa.$$.fragment,r),T(_a.$$.fragment,r),T(or.$$.fragment,r),T(tr.$$.fragment,r),T(nr.$$.fragment,r),T(ka.$$.fragment,r),T(va.$$.fragment,r),T(sr.$$.fragment,r),T(wa.$$.fragment,r),T(ar.$$.fragment,r),T(ir.$$.fragment,r),T(Ta.$$.fragment,r),T($a.$$.fragment,r),T(dr.$$.fragment,r),T(ja.$$.fragment,r),T(cr.$$.fragment,r),T(pr.$$.fragment,r),T(mr.$$.fragment,r),T(za.$$.fragment,r),T(Ca.$$.fragment,r),T(fr.$$.fragment,r),T(Oa.$$.fragment,r),T(ur.$$.fragment,r),T(Da.$$.fragment,r),T(Ia.$$.fragment,r),T(_r.$$.fragment,r),T(Ua.$$.fragment,r),T(kr.$$.fragment,r),T(vr.$$.fragment,r),T(yr.$$.fragment,r),T(Ka.$$.fragment,r),T(Ba.$$.fragment,r),T(br.$$.fragment,r),T(Ja.$$.fragment,r),T(wr.$$.fragment,r),T(Tr.$$.fragment,r),T(Ga.$$.fragment,r),T(Xa.$$.fragment,r),T(xr.$$.fragment,r),T(oi.$$.fragment,r),T(Rr.$$.fragment,r),T(Er.$$.fragment,r),T(Mr.$$.fragment,r),T(ti.$$.fragment,r),T(ni.$$.fragment,r),T(zr.$$.fragment,r),T(ii.$$.fragment,r),T(Cr.$$.fragment,r),T(qr.$$.fragment,r),T(Pr.$$.fragment,r),T(li.$$.fragment,r),T(di.$$.fragment,r),T(_i.$$.fragment,r),T(Lr.$$.fragment,r),T(Or.$$.fragment,r),T(ki.$$.fragment,r),T(vi.$$.fragment,r),T(Ei.$$.fragment,r),T(Ir.$$.fragment,r),T(Nr.$$.fragment,r),T(Mi.$$.fragment,r),T(ji.$$.fragment,r),T(Di.$$.fragment,r),T(Wr.$$.fragment,r),T(Ur.$$.fragment,r),T(Ii.$$.fragment,r),T(Ni.$$.fragment,r),T(Vi.$$.fragment,r),T(Br.$$.fragment,r),T(Qr.$$.fragment,r),T(Ji.$$.fragment,r),T(Gi.$$.fragment,r),T(rl.$$.fragment,r),T(Vr.$$.fragment,r),T(Jr.$$.fragment,r),T(sl.$$.fragment,r),T(al.$$.fragment,r),T(fl.$$.fragment,r),T(Xr.$$.fragment,r),T(Yr.$$.fragment,r),Bh=!0)},o(r){$(l.$$.fragment,r),$(R.$$.fragment,r),$(S.$$.fragment,r),$(de.$$.fragment,r),$(Ie.$$.fragment,r),$(ys.$$.fragment,r),$(Fs.$$.fragment,r),$($n.$$.fragment,r),$($s.$$.fragment,r),$(Rs.$$.fragment,r),$(Ms.$$.fragment,r),$(Rn.$$.fragment,r),$(js.$$.fragment,r),$(zs.$$.fragment,r),$(Cs.$$.fragment,r),$(jn.$$.fragment,r),$(As.$$.fragment,r),$(Os.$$.fragment,r),$(Ds.$$.fragment,r),$(Us.$$.fragment,r),$(Cn.$$.fragment,r),$(qn.$$.fragment,r),$(Ks.$$.fragment,r),$(Bs.$$.fragment,r),$(Hs.$$.fragment,r),$(An.$$.fragment,r),$(Ln.$$.fragment,r),$(Vs.$$.fragment,r),$(Js.$$.fragment,r),$(Xs.$$.fragment,r),$(Dn.$$.fragment,r),$(In.$$.fragment,r),$(Nn.$$.fragment,r),$(Ys.$$.fragment,r),$(Zs.$$.fragment,r),$(ta.$$.fragment,r),$(Wn.$$.fragment,r),$(Un.$$.fragment,r),$(Kn.$$.fragment,r),$(Bn.$$.fragment,r),$(Qn.$$.fragment,r),$(na.$$.fragment,r),$(ra.$$.fragment,r),$(ia.$$.fragment,r),$(Vn.$$.fragment,r),$(Jn.$$.fragment,r),$(la.$$.fragment,r),$(da.$$.fragment,r),$(ma.$$.fragment,r),$(Xn.$$.fragment,r),$(Yn.$$.fragment,r),$(Zn.$$.fragment,r),$(ha.$$.fragment,r),$(fa.$$.fragment,r),$(_a.$$.fragment,r),$(or.$$.fragment,r),$(tr.$$.fragment,r),$(nr.$$.fragment,r),$(ka.$$.fragment,r),$(va.$$.fragment,r),$(sr.$$.fragment,r),$(wa.$$.fragment,r),$(ar.$$.fragment,r),$(ir.$$.fragment,r),$(Ta.$$.fragment,r),$($a.$$.fragment,r),$(dr.$$.fragment,r),$(ja.$$.fragment,r),$(cr.$$.fragment,r),$(pr.$$.fragment,r),$(mr.$$.fragment,r),$(za.$$.fragment,r),$(Ca.$$.fragment,r),$(fr.$$.fragment,r),$(Oa.$$.fragment,r),$(ur.$$.fragment,r),$(Da.$$.fragment,r),$(Ia.$$.fragment,r),$(_r.$$.fragment,r),$(Ua.$$.fragment,r),$(kr.$$.fragment,r),$(vr.$$.fragment,r),$(yr.$$.fragment,r),$(Ka.$$.fragment,r),$(Ba.$$.fragment,r),$(br.$$.fragment,r),$(Ja.$$.fragment,r),$(wr.$$.fragment,r),$(Tr.$$.fragment,r),$(Ga.$$.fragment,r),$(Xa.$$.fragment,r),$(xr.$$.fragment,r),$(oi.$$.fragment,r),$(Rr.$$.fragment,r),$(Er.$$.fragment,r),$(Mr.$$.fragment,r),$(ti.$$.fragment,r),$(ni.$$.fragment,r),$(zr.$$.fragment,r),$(ii.$$.fragment,r),$(Cr.$$.fragment,r),$(qr.$$.fragment,r),$(Pr.$$.fragment,r),$(li.$$.fragment,r),$(di.$$.fragment,r),$(_i.$$.fragment,r),$(Lr.$$.fragment,r),$(Or.$$.fragment,r),$(ki.$$.fragment,r),$(vi.$$.fragment,r),$(Ei.$$.fragment,r),$(Ir.$$.fragment,r),$(Nr.$$.fragment,r),$(Mi.$$.fragment,r),$(ji.$$.fragment,r),$(Di.$$.fragment,r),$(Wr.$$.fragment,r),$(Ur.$$.fragment,r),$(Ii.$$.fragment,r),$(Ni.$$.fragment,r),$(Vi.$$.fragment,r),$(Br.$$.fragment,r),$(Qr.$$.fragment,r),$(Ji.$$.fragment,r),$(Gi.$$.fragment,r),$(rl.$$.fragment,r),$(Vr.$$.fragment,r),$(Jr.$$.fragment,r),$(sl.$$.fragment,r),$(al.$$.fragment,r),$(fl.$$.fragment,r),$(Xr.$$.fragment,r),$(Yr.$$.fragment,r),Bh=!1},d(r){o(d),r&&o(g),r&&o(c),x(l),r&&o(ge),r&&o(I),x(R),r&&o(_e),r&&o(N),r&&o(ke),r&&o(W),r&&o(ve),r&&o(U),r&&o(te),r&&o(C),r&&o(ye),r&&o(K),r&&o(H),r&&o(ne),r&&o(Fe),r&&o(se),x(S),r&&o(be),r&&o(P),x(de),x(Ie),r&&o(we),r&&o(De),x(ys),r&&o(th),r&&o(Ze),x(Fs),x($n),x($s),x(Rs),x(Ms),x(Rn),x(js),r&&o(nh),r&&o(Et),x(zs),r&&o(rh),r&&o(lo),x(Cs),x(jn),x(As),r&&o(sh),r&&o(Mt),x(Os),r&&o(ah),r&&o(ko),x(Ds),x(Us),x(Cn),x(qn),r&&o(ih),r&&o(zt),x(Ks),r&&o(lh),r&&o(at),x(Bs),x(Hs),x(An),x(Ln),r&&o(dh),r&&o(Pt),x(Vs),r&&o(ch),r&&o(it),x(Js),x(Xs),x(Dn),x(In),x(Nn),r&&o(ph),r&&o(Ot),x(Ys),r&&o(mh),r&&o(Lo),x(Zs),x(ta),x(Wn),x(Un),x(Kn),x(Bn),x(Qn),r&&o(hh),r&&o(It),x(na),r&&o(fh),r&&o(Oo),x(ra),x(ia),x(Vn),x(Jn),r&&o(uh),r&&o(St),x(la),r&&o(gh),r&&o(Do),x(da),x(ma),x(Xn),x(Yn),x(Zn),r&&o(_h),r&&o(Ut),x(ha),r&&o(kh),r&&o(Io),x(fa),x(_a),x(or),x(tr),x(nr),r&&o(vh),r&&o(Qt),x(ka),r&&o(yh),r&&o(po),x(va),x(sr),x(wa),x(ar),x(ir),r&&o(Fh),r&&o(Vt),x(Ta),r&&o(bh),r&&o(mo),x($a),x(dr),x(ja),x(cr),x(pr),x(mr),r&&o(wh),r&&o(Gt),x(za),r&&o(Th),r&&o(ho),x(Ca),x(fr),x(Oa),x(ur),r&&o($h),r&&o(Xt),x(Da),r&&o(xh),r&&o(fo),x(Ia),x(_r),x(Ua),x(kr),x(vr),x(yr),r&&o(Rh),r&&o(Zt),x(Ka),r&&o(Eh),r&&o(uo),x(Ba),x(br),x(Ja),x(wr),x(Tr),r&&o(Mh),r&&o(on),x(Ga),r&&o(jh),r&&o(go),x(Xa),x(xr),x(oi),x(Rr),x(Er),x(Mr),r&&o(zh),r&&o(nn),x(ti),r&&o(Ch),r&&o(_o),x(ni),x(zr),x(ii),x(Cr),x(qr),x(Pr),r&&o(qh),r&&o(an),x(li),r&&o(Ph),r&&o(eo),x(di),x(_i),x(Lr),x(Or),r&&o(Ah),r&&o(dn),x(ki),r&&o(Lh),r&&o(oo),x(vi),x(Ei),x(Ir),x(Nr),r&&o(Oh),r&&o(pn),x(Mi),r&&o(Dh),r&&o(to),x(ji),x(Di),x(Wr),x(Ur),r&&o(Ih),r&&o(hn),x(Ii),r&&o(Nh),r&&o(no),x(Ni),x(Vi),x(Br),x(Qr),r&&o(Sh),r&&o(un),x(Ji),r&&o(Wh),r&&o(ro),x(Gi),x(rl),x(Vr),x(Jr),r&&o(Uh),r&&o(_n),x(sl),r&&o(Kh),r&&o(so),x(al),x(fl),x(Xr),x(Yr)}}}const Gx={local:"roformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.RoFormerConfig",title:"RoFormerConfig"},{local:"transformers.RoFormerTokenizer",title:"RoFormerTokenizer"},{local:"transformers.RoFormerTokenizerFast",title:"RoFormerTokenizerFast"},{local:"transformers.RoFormerModel",title:"RoFormerModel"},{local:"transformers.RoFormerForCausalLM",title:"RoFormerForCausalLM"},{local:"transformers.RoFormerForMaskedLM",title:"RoFormerForMaskedLM"},{local:"transformers.RoFormerForSequenceClassification",title:"RoFormerForSequenceClassification"},{local:"transformers.RoFormerForMultipleChoice",title:"RoFormerForMultipleChoice"},{local:"transformers.RoFormerForTokenClassification",title:"RoFormerForTokenClassification"},{local:"transformers.RoFormerForQuestionAnswering",title:"RoFormerForQuestionAnswering"},{local:"transformers.TFRoFormerModel",title:"TFRoFormerModel"},{local:"transformers.TFRoFormerForMaskedLM",title:"TFRoFormerForMaskedLM"},{local:"transformers.TFRoFormerForCausalLM",title:"TFRoFormerForCausalLM"},{local:"transformers.TFRoFormerForSequenceClassification",title:"TFRoFormerForSequenceClassification"},{local:"transformers.TFRoFormerForMultipleChoice",title:"TFRoFormerForMultipleChoice"},{local:"transformers.TFRoFormerForTokenClassification",title:"TFRoFormerForTokenClassification"},{local:"transformers.TFRoFormerForQuestionAnswering",title:"TFRoFormerForQuestionAnswering"},{local:"transformers.FlaxRoFormerModel",title:"FlaxRoFormerModel"},{local:"transformers.FlaxRoFormerForMaskedLM",title:"FlaxRoFormerForMaskedLM"},{local:"transformers.FlaxRoFormerForSequenceClassification",title:"FlaxRoFormerForSequenceClassification"},{local:"transformers.FlaxRoFormerForMultipleChoice",title:"FlaxRoFormerForMultipleChoice"},{local:"transformers.FlaxRoFormerForTokenClassification",title:"FlaxRoFormerForTokenClassification"},{local:"transformers.FlaxRoFormerForQuestionAnswering",title:"FlaxRoFormerForQuestionAnswering"}],title:"RoFormer"};function Xx(E){return W4(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class rR extends D4{constructor(d){super();I4(this,d,Xx,Jx,N4,{})}}export{rR as default,Gx as metadata};
