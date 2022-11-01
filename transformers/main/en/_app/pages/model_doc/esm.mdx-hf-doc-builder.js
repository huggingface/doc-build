import{S as ff,i as uf,s as gf,e as a,k as m,w as T,t as n,M as _f,c as r,d as o,m as p,a as i,x as y,h as s,b as h,G as e,g as k,y as v,q as w,o as $,B as E,v as kf,L as S}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ge}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as L}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ee}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as P}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function bf(F){let d,_,c,f,b;return f=new L({props:{code:`from transformers import EsmModel, EsmConfig

# Initializing a ESM facebook/esm-1b style configuration >>> configuration = EsmConfig()

# Initializing a model from the configuration >>> model = ESMModel(configuration)

# Accessing the model configuration >>> configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmModel, EsmConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ESM facebook/esm-1b style configuration &gt;&gt;&gt; configuration = EsmConfig()</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration &gt;&gt;&gt; model = ESMModel(configuration)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration &gt;&gt;&gt; configuration = model.config</span>`}}),{c(){d=a("p"),_=n("Examples:"),c=m(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Examples:"),u.forEach(o),c=p(l),y(f.$$.fragment,l)},m(l,u){k(l,d,u),e(d,_),k(l,c,u),v(f,l,u),b=!0},p:S,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(c),E(f,l)}}}function Tf(F){let d,_,c,f,b;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){k(l,d,u),e(d,_),e(d,c),e(c,f),e(d,b)},d(l){l&&o(d)}}}function yf(F){let d,_,c,f,b;return f=new L({props:{code:`from transformers import EsmTokenizer, EsmModel
import torch

tokenizer = EsmTokenizer.from_pretrained("facebook/esm2_t6_8M_UR50D")
model = EsmModel.from_pretrained("facebook/esm2_t6_8M_UR50D")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmTokenizer, EsmModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = EsmTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmModel.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=n("Example:"),c=m(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=p(l),y(f.$$.fragment,l)},m(l,u){k(l,d,u),e(d,_),k(l,c,u),v(f,l,u),b=!0},p:S,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(c),E(f,l)}}}function vf(F){let d,_,c,f,b;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){k(l,d,u),e(d,_),e(d,c),e(c,f),e(d,b)},d(l){l&&o(d)}}}function wf(F){let d,_,c,f,b;return f=new L({props:{code:`from transformers import EsmTokenizer, EsmForMaskedLM
import torch

tokenizer = EsmTokenizer.from_pretrained("facebook/esm2_t6_8M_UR50D")
model = EsmForMaskedLM.from_pretrained("facebook/esm2_t6_8M_UR50D")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmTokenizer, EsmForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = EsmTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForMaskedLM.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=a("p"),_=n("Example:"),c=m(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=p(l),y(f.$$.fragment,l)},m(l,u){k(l,d,u),e(d,_),k(l,c,u),v(f,l,u),b=!0},p:S,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(c),E(f,l)}}}function $f(F){let d,_;return d=new L({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){v(d,c,f),_=!0},p:S,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){E(d,c)}}}function Ef(F){let d,_,c,f,b;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){k(l,d,u),e(d,_),e(d,c),e(c,f),e(d,b)},d(l){l&&o(d)}}}function Ff(F){let d,_,c,f,b;return f=new L({props:{code:`import torch
from transformers import EsmTokenizer, EsmForSequenceClassification

tokenizer = EsmTokenizer.from_pretrained("facebook/esm2_t6_8M_UR50D")
model = EsmForSequenceClassification.from_pretrained("facebook/esm2_t6_8M_UR50D")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmTokenizer, EsmForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = EsmTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),_=n("Example of single-label classification:"),c=m(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example of single-label classification:"),u.forEach(o),c=p(l),y(f.$$.fragment,l)},m(l,u){k(l,d,u),e(d,_),k(l,c,u),v(f,l,u),b=!0},p:S,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(c),E(f,l)}}}function Mf(F){let d,_;return d=new L({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = EsmForSequenceClassification.from_pretrained("facebook/esm2_t6_8M_UR50D", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){v(d,c,f),_=!0},p:S,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){E(d,c)}}}function zf(F){let d,_,c,f,b;return f=new L({props:{code:`import torch
from transformers import EsmTokenizer, EsmForSequenceClassification

tokenizer = EsmTokenizer.from_pretrained("facebook/esm2_t6_8M_UR50D")
model = EsmForSequenceClassification.from_pretrained("facebook/esm2_t6_8M_UR50D", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmTokenizer, EsmForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = EsmTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),_=n("Example of multi-label classification:"),c=m(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example of multi-label classification:"),u.forEach(o),c=p(l),y(f.$$.fragment,l)},m(l,u){k(l,d,u),e(d,_),k(l,c,u),v(f,l,u),b=!0},p:S,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(c),E(f,l)}}}function qf(F){let d,_;return d=new L({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = EsmForSequenceClassification.from_pretrained(
    "facebook/esm2_t6_8M_UR50D", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){v(d,c,f),_=!0},p:S,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){E(d,c)}}}function xf(F){let d,_,c,f,b;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){k(l,d,u),e(d,_),e(d,c),e(c,f),e(d,b)},d(l){l&&o(d)}}}function Cf(F){let d,_,c,f,b;return f=new L({props:{code:`from transformers import EsmTokenizer, EsmForTokenClassification
import torch

tokenizer = EsmTokenizer.from_pretrained("facebook/esm2_t6_8M_UR50D")
model = EsmForTokenClassification.from_pretrained("facebook/esm2_t6_8M_UR50D")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmTokenizer, EsmForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = EsmTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForTokenClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)

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
`}}),{c(){d=a("p"),_=n("Example:"),c=m(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=p(l),y(f.$$.fragment,l)},m(l,u){k(l,d,u),e(d,_),k(l,c,u),v(f,l,u),b=!0},p:S,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(c),E(f,l)}}}function jf(F){let d,_;return d=new L({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){v(d,c,f),_=!0},p:S,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){E(d,c)}}}function Pf(F){let d,_,c,f,b;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){k(l,d,u),e(d,_),e(d,c),e(c,f),e(d,b)},d(l){l&&o(d)}}}function Sf(F){let d,_,c,f,b;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){k(l,d,u),e(d,_),e(d,c),e(c,f),e(d,b)},d(l){l&&o(d)}}}function Lf(F){let d,_,c,f,b;return f=new L({props:{code:`from transformers import EsmTokenizer, TFEsmModel
import tensorflow as tf

tokenizer = EsmTokenizer.from_pretrained("facebook/esm2_t6_8M_UR50D")
model = TFEsmModel.from_pretrained("facebook/esm2_t6_8M_UR50D")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmTokenizer, TFEsmModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = EsmTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEsmModel.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=n("Example:"),c=m(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=p(l),y(f.$$.fragment,l)},m(l,u){k(l,d,u),e(d,_),k(l,c,u),v(f,l,u),b=!0},p:S,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(c),E(f,l)}}}function Df(F){let d,_,c,f,b;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){k(l,d,u),e(d,_),e(d,c),e(c,f),e(d,b)},d(l){l&&o(d)}}}function Nf(F){let d,_,c,f,b;return f=new L({props:{code:`from transformers import EsmTokenizer, TFEsmForMaskedLM
import tensorflow as tf

tokenizer = EsmTokenizer.from_pretrained("facebook/esm2_t6_8M_UR50D")
model = TFEsmForMaskedLM.from_pretrained("facebook/esm2_t6_8M_UR50D")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmTokenizer, TFEsmForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = EsmTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEsmForMaskedLM.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=a("p"),_=n("Example:"),c=m(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=p(l),y(f.$$.fragment,l)},m(l,u){k(l,d,u),e(d,_),k(l,c,u),v(f,l,u),b=!0},p:S,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(c),E(f,l)}}}function Af(F){let d,_;return d=new L({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){v(d,c,f),_=!0},p:S,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){E(d,c)}}}function Of(F){let d,_,c,f,b;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){k(l,d,u),e(d,_),e(d,c),e(c,f),e(d,b)},d(l){l&&o(d)}}}function If(F){let d,_,c,f,b;return f=new L({props:{code:`from transformers import EsmTokenizer, TFEsmForSequenceClassification
import tensorflow as tf

tokenizer = EsmTokenizer.from_pretrained("facebook/esm2_t6_8M_UR50D")
model = TFEsmForSequenceClassification.from_pretrained("facebook/esm2_t6_8M_UR50D")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmTokenizer, TFEsmForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = EsmTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEsmForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),_=n("Example:"),c=m(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=p(l),y(f.$$.fragment,l)},m(l,u){k(l,d,u),e(d,_),k(l,c,u),v(f,l,u),b=!0},p:S,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(c),E(f,l)}}}function Uf(F){let d,_;return d=new L({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFEsmForSequenceClassification.from_pretrained("facebook/esm2_t6_8M_UR50D", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEsmForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){v(d,c,f),_=!0},p:S,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){E(d,c)}}}function Rf(F){let d,_,c,f,b;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){k(l,d,u),e(d,_),e(d,c),e(c,f),e(d,b)},d(l){l&&o(d)}}}function Wf(F){let d,_,c,f,b;return f=new L({props:{code:`from transformers import EsmTokenizer, TFEsmForTokenClassification
import tensorflow as tf

tokenizer = EsmTokenizer.from_pretrained("facebook/esm2_t6_8M_UR50D")
model = TFEsmForTokenClassification.from_pretrained("facebook/esm2_t6_8M_UR50D")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmTokenizer, TFEsmForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = EsmTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEsmForTokenClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm2_t6_8M_UR50D&quot;</span>)

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
`}}),{c(){d=a("p"),_=n("Example:"),c=m(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=p(l),y(f.$$.fragment,l)},m(l,u){k(l,d,u),e(d,_),k(l,c,u),v(f,l,u),b=!0},p:S,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(c),E(f,l)}}}function Hf(F){let d,_;return d=new L({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){v(d,c,f),_=!0},p:S,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){E(d,c)}}}function Kf(F){let d,_,c,f,b,l,u,M,Zr,ja,$e,Je,is,It,Gr,ls,Jr,Pa,Ye,Yr,Ut,Qr,Xr,Sa,Qe,ei,Rt,ti,oi,La,gn,ni,Da,_n,ds,si,Na,kn,ai,Aa,bn,cs,ri,Oa,Tn,ii,Ia,yn,ms,li,Ua,te,di,Wt,ci,mi,Ht,pi,hi,Kt,fi,ui,Ra,re,gi,Bt,_i,ki,Vt,bi,Ti,Wa,ie,yi,Zt,vi,wi,ps,$i,Ei,Ha,Ee,Xe,hs,Gt,Fi,fs,Mi,Ka,D,Jt,zi,Fe,qi,us,xi,Ci,Yt,ji,Pi,Si,Me,Li,vn,Di,Ni,wn,Ai,Oi,Ii,et,Ui,tt,Qt,Ri,Xt,Wi,$n,Hi,Ki,Ba,ze,ot,gs,eo,Bi,_s,Vi,Va,C,to,Zi,ks,Gi,Ji,En,oo,Yi,nt,no,Qi,qe,Xi,bs,el,tl,Ts,ol,nl,sl,le,so,al,Fn,rl,Mn,il,ll,ys,dl,cl,zn,ao,Za,xe,st,vs,ro,ml,ws,pl,Ga,q,io,hl,$s,fl,ul,lo,gl,qn,_l,kl,bl,co,Tl,mo,yl,vl,wl,po,$l,ho,El,Fl,Ml,j,zl,Es,ql,xl,Fs,Cl,jl,Ms,Pl,Sl,zs,Ll,Dl,qs,Nl,Al,xs,Ol,Il,Ul,oe,fo,Rl,Ce,Wl,xn,Hl,Kl,Cs,Bl,Vl,Zl,at,Gl,rt,Ja,je,it,js,uo,Jl,Ps,Yl,Ya,N,go,Ql,_o,Xl,Ss,ed,td,od,ko,nd,Cn,sd,ad,rd,bo,id,To,ld,dd,cd,K,yo,md,Pe,pd,jn,hd,fd,Ls,ud,gd,_d,lt,kd,dt,bd,ct,Qa,Se,mt,Ds,vo,Td,Ns,yd,Xa,A,wo,vd,As,wd,$d,$o,Ed,Pn,Fd,Md,zd,Eo,qd,Fo,xd,Cd,jd,x,Mo,Pd,Le,Sd,Sn,Ld,Dd,Os,Nd,Ad,Od,pt,Id,ht,Ud,ft,Rd,ut,Wd,gt,er,De,_t,Is,zo,Hd,Us,Kd,tr,O,qo,Bd,Rs,Vd,Zd,xo,Gd,Ln,Jd,Yd,Qd,Co,Xd,jo,ec,tc,oc,B,Po,nc,Ne,sc,Dn,ac,rc,Ws,ic,lc,dc,kt,cc,bt,mc,Tt,or,Ae,yt,Hs,So,pc,Ks,hc,nr,I,Lo,fc,Bs,uc,gc,Do,_c,Nn,kc,bc,Tc,No,yc,Ao,vc,wc,$c,V,Oo,Ec,Oe,Fc,An,Mc,zc,Vs,qc,xc,Cc,vt,jc,Zs,Pc,Sc,Gs,Lc,sr,Ie,wt,Js,Io,Dc,Ys,Nc,ar,U,Uo,Ac,Qs,Oc,Ic,Ro,Uc,On,Rc,Wc,Hc,Wo,Kc,Ho,Bc,Vc,Zc,ne,Ko,Gc,Ue,Jc,In,Yc,Qc,Xs,Xc,em,tm,$t,om,Et,rr,Re,Ft,ea,Bo,nm,ta,sm,ir,R,Vo,am,Zo,rm,oa,im,lm,dm,Go,cm,Un,mm,pm,hm,Jo,fm,Yo,um,gm,_m,Z,Qo,km,We,bm,Rn,Tm,ym,na,vm,wm,$m,Mt,Em,zt,Fm,qt,lr,He,xt,sa,Xo,Mm,aa,zm,dr,W,en,qm,ra,xm,Cm,tn,jm,Wn,Pm,Sm,Lm,on,Dm,nn,Nm,Am,Om,G,sn,Im,Ke,Um,Hn,Rm,Wm,ia,Hm,Km,Bm,Ct,Vm,jt,Zm,Pt,cr,Be,St,la,an,Gm,da,Jm,mr,H,rn,Ym,ca,Qm,Xm,ln,ep,Kn,tp,op,np,dn,sp,cn,ap,rp,ip,J,mn,lp,Ve,dp,Bn,cp,mp,ma,pp,hp,fp,Lt,up,Dt,gp,Nt,pr;return l=new ee({}),It=new ee({}),Gt=new ee({}),Jt=new z({props:{name:"class transformers.EsmConfig",anchor:"transformers.EsmConfig",parameters:[{name:"vocab_size",val:" = None"},{name:"mask_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1026"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"emb_layer_norm_before",val:" = None"},{name:"token_dropout",val:" = False"},{name:"is_folding_model",val:" = False"},{name:"esmfold_config",val:" = None"},{name:"vocab_list",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EsmConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Vocabulary size of the ESM model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <code>ESMModel</code>.`,name:"vocab_size"},{anchor:"transformers.EsmConfig.mask_token_id",description:`<strong>mask_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The index of the mask token in the vocabulary. This must be included in the config because of the
&#x201C;mask-dropout&#x201D; scaling trick, which will scale the inputs depending on the number of masked tokens.`,name:"mask_token_id"},{anchor:"transformers.EsmConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The index of the padding token in the vocabulary. This must be included in the config because certain parts
of the ESM code use this instead of the attention mask.`,name:"pad_token_id"},{anchor:"transformers.EsmConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.EsmConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.EsmConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.EsmConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.EsmConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.EsmConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.EsmConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.EsmConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1026) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.EsmConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.EsmConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.EsmConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;, &quot;rotary&quot;</code>.
For positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.EsmConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.EsmConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"},{anchor:"transformers.EsmConfig.emb_layer_norm_before",description:`<strong>emb_layer_norm_before</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to apply layer normalization after embeddings but before the main stem of the network.`,name:"emb_layer_norm_before"},{anchor:"transformers.EsmConfig.token_dropout",description:`<strong>token_dropout</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
When this is enabled, masked tokens are treated as if they had been dropped out by input dropout.`,name:"token_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/configuration_esm.py#L33"}}),et=new P({props:{anchor:"transformers.EsmConfig.example",$$slots:{default:[bf]},$$scope:{ctx:F}}}),Qt=new z({props:{name:"to_dict",anchor:"transformers.EsmConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/configuration_esm.py#L167",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),eo=new ee({}),to=new z({props:{name:"class transformers.EsmTokenizer",anchor:"transformers.EsmTokenizer",parameters:[{name:"vocab_file",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L47"}}),oo=new z({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.EsmTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L91"}}),no=new z({props:{name:"get_special_tokens_mask",anchor:"transformers.EsmTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.EsmTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.EsmTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.EsmTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L100",returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),so=new z({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.EsmTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.EsmTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.EsmTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2987",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ao=new z({props:{name:"save_vocabulary",anchor:"transformers.EsmTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:""},{name:"filename_prefix",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L131"}}),ro=new ee({}),io=new z({props:{name:"class transformers.EsmModel",anchor:"transformers.EsmModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.EsmModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L722"}}),fo=new z({props:{name:"forward",anchor:"transformers.EsmModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.EsmModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>((batch_size, sequence_length))</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EsmModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>((batch_size, sequence_length))</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EsmModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>((batch_size, sequence_length))</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.EsmModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.EsmModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>((batch_size, sequence_length), hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.EsmModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.EsmModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.EsmModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.EsmModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.EsmModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.EsmModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.EsmModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L769",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig"
>EsmConfig</a>) and inputs.</p>
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
`}}),at=new Ge({props:{$$slots:{default:[Tf]},$$scope:{ctx:F}}}),rt=new P({props:{anchor:"transformers.EsmModel.forward.example",$$slots:{default:[yf]},$$scope:{ctx:F}}}),uo=new ee({}),go=new z({props:{name:"class transformers.EsmForMaskedLM",anchor:"transformers.EsmForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L898"}}),yo=new z({props:{name:"forward",anchor:"transformers.EsmForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.EsmForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EsmForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EsmForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.EsmForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.EsmForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.EsmForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.EsmForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.EsmForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.EsmForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.EsmForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L922",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig"
>EsmConfig</a>) and inputs.</p>
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
`}}),lt=new Ge({props:{$$slots:{default:[vf]},$$scope:{ctx:F}}}),dt=new P({props:{anchor:"transformers.EsmForMaskedLM.forward.example",$$slots:{default:[wf]},$$scope:{ctx:F}}}),ct=new P({props:{anchor:"transformers.EsmForMaskedLM.forward.example-2",$$slots:{default:[$f]},$$scope:{ctx:F}}}),vo=new ee({}),wo=new z({props:{name:"class transformers.EsmForSequenceClassification",anchor:"transformers.EsmForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1014"}}),Mo=new z({props:{name:"forward",anchor:"transformers.EsmForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.EsmForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EsmForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EsmForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.EsmForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.EsmForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.EsmForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.EsmForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.EsmForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.EsmForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1027",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig"
>EsmConfig</a>) and inputs.</p>
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
`}}),pt=new Ge({props:{$$slots:{default:[Ef]},$$scope:{ctx:F}}}),ht=new P({props:{anchor:"transformers.EsmForSequenceClassification.forward.example",$$slots:{default:[Ff]},$$scope:{ctx:F}}}),ft=new P({props:{anchor:"transformers.EsmForSequenceClassification.forward.example-2",$$slots:{default:[Mf]},$$scope:{ctx:F}}}),ut=new P({props:{anchor:"transformers.EsmForSequenceClassification.forward.example-3",$$slots:{default:[zf]},$$scope:{ctx:F}}}),gt=new P({props:{anchor:"transformers.EsmForSequenceClassification.forward.example-4",$$slots:{default:[qf]},$$scope:{ctx:F}}}),zo=new ee({}),qo=new z({props:{name:"class transformers.EsmForTokenClassification",anchor:"transformers.EsmForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1109"}}),Po=new z({props:{name:"forward",anchor:"transformers.EsmForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.EsmForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EsmForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EsmForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.EsmForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.EsmForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.EsmForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.EsmForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.EsmForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.EsmForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1123",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig"
>EsmConfig</a>) and inputs.</p>
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
`}}),kt=new Ge({props:{$$slots:{default:[xf]},$$scope:{ctx:F}}}),bt=new P({props:{anchor:"transformers.EsmForTokenClassification.forward.example",$$slots:{default:[Cf]},$$scope:{ctx:F}}}),Tt=new P({props:{anchor:"transformers.EsmForTokenClassification.forward.example-2",$$slots:{default:[jf]},$$scope:{ctx:F}}}),So=new ee({}),Lo=new z({props:{name:"class transformers.EsmForProteinFolding",anchor:"transformers.EsmForProteinFolding",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForProteinFolding.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esmfold.py#L2018"}}),Oo=new z({props:{name:"forward",anchor:"transformers.EsmForProteinFolding.forward",parameters:[{name:"input_ids",val:": Tensor"},{name:"attention_mask",val:": Tensor = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"masking_pattern",val:": typing.Optional[torch.Tensor] = None"},{name:"num_recycles",val:": typing.Optional[int] = None"}],parametersDescription:[{anchor:"transformers.EsmForProteinFolding.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EsmForProteinFolding.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EsmForProteinFolding.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.EsmForProteinFolding.forward.masking_pattern",description:`<strong>masking_pattern</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Locations of tokens to mask during training as a form of regularization. Mask values selected in <code>[0, 1]</code>.`,name:"masking_pattern"},{anchor:"transformers.EsmForProteinFolding.forward.num_recycles",description:`<strong>num_recycles</strong> (<code>int</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Number of times to recycle the input sequence. If <code>None</code>, defaults to <code>config.num_recycles</code>. &#x201C;Recycling&#x201D;
consists of passing the output of the folding trunk back in as input to the trunk. During training, the
number of recycles should vary with each batch, to ensure that the model learns to output valid predictions
after each recycle. During inference, num_recycles should be set to the highest value that the model was
trained with for maximum accuracy. Accordingly, when this value is set to <code>None</code>, config.max_recycles is
used.`,name:"num_recycles"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esmfold.py#L2080",returnDescription:`
<p>A <code>transformers.models.esm.modeling_esmfold.EsmForProteinFoldingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.esm.configuration_esm.EsmConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>frames</strong> (<code>torch.FloatTensor</code>) \u2014 Output frames.</li>
<li><strong>sidechain_frames</strong> (<code>torch.FloatTensor</code>) \u2014 Output sidechain frames.</li>
<li><strong>unnormalized_angles</strong> (<code>torch.FloatTensor</code>) \u2014 Predicted unnormalized backbone and side chain torsion angles.</li>
<li><strong>angles</strong> (<code>torch.FloatTensor</code>) \u2014 Predicted backbone and side chain torsion angles.</li>
<li><strong>positions</strong> (<code>torch.FloatTensor</code>) \u2014 Predicted positions of the backbone and side chain atoms.</li>
<li><strong>states</strong> (<code>torch.FloatTensor</code>) \u2014 Hidden states from the protein folding trunk.</li>
<li><strong>s_s</strong> (<code>torch.FloatTensor</code>) \u2014 Per-residue embeddings derived by concatenating the hidden states of each layer of the ESM-2 LM stem.</li>
<li><strong>s_z</strong> (<code>torch.FloatTensor</code>) \u2014 Pairwise residue embeddings.</li>
<li><strong>distogram_logits</strong> (<code>torch.FloatTensor</code>) \u2014 Input logits to the distogram used to compute residue distances.</li>
<li><strong>lm_logits</strong> (<code>torch.FloatTensor</code>) \u2014 Logits output by the ESM-2 protein language model stem.</li>
<li><strong>aatype</strong> (<code>torch.FloatTensor</code>) \u2014 Input amino acids (AlphaFold2 indices).</li>
<li><strong>atom14_atom_exists</strong> (<code>torch.FloatTensor</code>) \u2014 Whether each atom exists in the atom14 representation.</li>
<li><strong>residx_atom14_to_atom37</strong> (<code>torch.FloatTensor</code>) \u2014 Mapping between atoms in the atom14 and atom37 representations.</li>
<li><strong>residx_atom37_to_atom14</strong> (<code>torch.FloatTensor</code>) \u2014 Mapping between atoms in the atom37 and atom14 representations.</li>
<li><strong>atom37_atom_exists</strong> (<code>torch.FloatTensor</code>) \u2014 Whether each atom exists in the atom37 representation.</li>
<li><strong>residue_index</strong> (<code>torch.FloatTensor</code>) \u2014 The index of each residue in the protein chain. Unless internal padding tokens are used, this will just be
a sequence of integers from 0 to <code>sequence_length</code>.</li>
<li><strong>lddt_head</strong> (<code>torch.FloatTensor</code>) \u2014 Raw outputs from the lddt head used to compute plddt.</li>
<li><strong>plddt</strong> (<code>torch.FloatTensor</code>) \u2014 Per-residue confidence scores. Regions of low confidence may indicate areas where the model\u2019s prediction is
uncertain, or where the protein structure is disordered.</li>
<li><strong>ptm_logits</strong> (<code>torch.FloatTensor</code>) \u2014 Raw logits used for computing ptm.</li>
<li><strong>ptm</strong> (<code>torch.FloatTensor</code>) \u2014 TM-score output representing the model\u2019s high-level confidence in the overall structure.</li>
<li><strong>aligned_confidence_probs</strong> (<code>torch.FloatTensor</code>) \u2014 Per-residue confidence scores for the aligned structure.</li>
<li><strong>predicted_aligned_error</strong> (<code>torch.FloatTensor</code>) \u2014 Predicted error between the model\u2019s prediction and the ground truth.</li>
<li><strong>max_predicted_aligned_error</strong> (<code>torch.FloatTensor</code>) \u2014 Per-sample maximum predicted error.</li>
</ul>
`,returnType:`
<p><code>transformers.models.esm.modeling_esmfold.EsmForProteinFoldingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vt=new Ge({props:{$$slots:{default:[Pf]},$$scope:{ctx:F}}}),Io=new ee({}),Uo=new z({props:{name:"class transformers.TFEsmModel",anchor:"transformers.TFEsmModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEsmModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L914"}}),Ko=new z({props:{name:"call",anchor:"transformers.TFEsmModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFEsmModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEsmModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEsmModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFEsmModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFEsmModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFEsmModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFEsmModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFEsmModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFEsmModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFEsmModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFEsmModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFEsmModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L920",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig"
>EsmConfig</a>) and inputs.</p>
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
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$t=new Ge({props:{$$slots:{default:[Sf]},$$scope:{ctx:F}}}),Et=new P({props:{anchor:"transformers.TFEsmModel.call.example",$$slots:{default:[Lf]},$$scope:{ctx:F}}}),Bo=new ee({}),Vo=new z({props:{name:"class transformers.TFEsmForMaskedLM",anchor:"transformers.TFEsmForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEsmForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1016"}}),Qo=new z({props:{name:"call",anchor:"transformers.TFEsmForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFEsmForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEsmForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEsmForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFEsmForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFEsmForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFEsmForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFEsmForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFEsmForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFEsmForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFEsmForMaskedLM.call.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1041",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig"
>EsmConfig</a>) and inputs.</p>
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
`}}),Mt=new Ge({props:{$$slots:{default:[Df]},$$scope:{ctx:F}}}),zt=new P({props:{anchor:"transformers.TFEsmForMaskedLM.call.example",$$slots:{default:[Nf]},$$scope:{ctx:F}}}),qt=new P({props:{anchor:"transformers.TFEsmForMaskedLM.call.example-2",$$slots:{default:[Af]},$$scope:{ctx:F}}}),Xo=new ee({}),en=new z({props:{name:"class transformers.TFEsmForSequenceClassification",anchor:"transformers.TFEsmForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEsmForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1173"}}),sn=new z({props:{name:"call",anchor:"transformers.TFEsmForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFEsmForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEsmForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEsmForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFEsmForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFEsmForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFEsmForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFEsmForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFEsmForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFEsmForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1184",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig"
>EsmConfig</a>) and inputs.</p>
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
`}}),Ct=new Ge({props:{$$slots:{default:[Of]},$$scope:{ctx:F}}}),jt=new P({props:{anchor:"transformers.TFEsmForSequenceClassification.call.example",$$slots:{default:[If]},$$scope:{ctx:F}}}),Pt=new P({props:{anchor:"transformers.TFEsmForSequenceClassification.call.example-2",$$slots:{default:[Uf]},$$scope:{ctx:F}}}),an=new ee({}),rn=new z({props:{name:"class transformers.TFEsmForTokenClassification",anchor:"transformers.TFEsmForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEsmForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1268"}}),mn=new z({props:{name:"call",anchor:"transformers.TFEsmForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFEsmForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEsmForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEsmForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFEsmForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFEsmForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFEsmForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFEsmForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFEsmForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFEsmForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1280",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig"
>EsmConfig</a>) and inputs.</p>
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
`}}),Lt=new Ge({props:{$$slots:{default:[Rf]},$$scope:{ctx:F}}}),Dt=new P({props:{anchor:"transformers.TFEsmForTokenClassification.call.example",$$slots:{default:[Wf]},$$scope:{ctx:F}}}),Nt=new P({props:{anchor:"transformers.TFEsmForTokenClassification.call.example-2",$$slots:{default:[Hf]},$$scope:{ctx:F}}}),{c(){d=a("meta"),_=m(),c=a("h1"),f=a("a"),b=a("span"),T(l.$$.fragment),u=m(),M=a("span"),Zr=n("ESM"),ja=m(),$e=a("h2"),Je=a("a"),is=a("span"),T(It.$$.fragment),Gr=m(),ls=a("span"),Jr=n("Overview"),Pa=n(`

This page provides code and pre-trained weights for Transformer protein language models from Meta AI's Fundamental 
AI Research Team, providing the state-of-the-art ESMFold and ESM-2, and the previously released ESM-1b and ESM-1v.
Transformer protein language models were introduced in the paper [Biological structure and function emerge from scaling
unsupervised learning to 250 million protein sequences](https://www.pnas.org/content/118/15/e2016239118) by 
Alexander Rives, Joshua Meier, Tom Sercu, Siddharth Goyal, Zeming Lin, Jason Liu, Demi Guo, Myle Ott, 
C. Lawrence Zitnick, Jerry Ma, and Rob Fergus.
The first version of this paper was [preprinted in 2019](https://www.biorxiv.org/content/10.1101/622803v1?versioned=true).
`),Ye=a("p"),Yr=n(`ESM-2 outperforms all tested single-sequence protein language models across a range of structure prediction tasks,
and enables atomic resolution structure prediction.
It was released with the paper `),Ut=a("a"),Qr=n(`Language models of protein sequences at the scale of evolution enable accurate
structure prediction`),Xr=n(` by Zeming Lin, Halil Akin, Roshan Rao, Brian Hie,
Zhongkai Zhu, Wenting Lu, Allan dos Santos Costa, Maryam Fazel-Zarandi, Tom Sercu, Sal Candido and Alexander Rives.`),Sa=m(),Qe=a("p"),ei=n(`Also introduced in this paper was ESMFold. It uses an ESM-2 stem with a head that can predict folded protein
structures with state-of-the-art accuracy. Unlike `),Rt=a("a"),ti=n("AlphaFold2"),oi=n(`,
it relies on the token embeddings from the large pre-trained protein language model stem and does not perform a multiple
sequence alignment (MSA) step at inference time, which means that ESMFold checkpoints are fully \u201Cstandalone\u201D -
they do not require a database of known protein sequences and structures with associated external query tools
to make predictions, and are much faster as a result.`),La=m(),gn=a("p"),ni=n(`The abstract from
\u201CBiological structure and function emerge from scaling unsupervised learning to 250
million protein sequences\u201D is`),Da=m(),_n=a("p"),ds=a("em"),si=n(`In the field of artificial intelligence, a combination of scale in data and model capacity enabled by unsupervised
learning has led to major advances in representation learning and statistical generation. In the life sciences, the
anticipated growth of sequencing promises unprecedented data on natural sequence diversity. Protein language modeling
at the scale of evolution is a logical step toward predictive and generative artificial intelligence for biology. To
this end, we use unsupervised learning to train a deep contextual language model on 86 billion amino acids across 250
million protein sequences spanning evolutionary diversity. The resulting model contains information about biological
properties in its representations. The representations are learned from sequence data alone. The learned representation
space has a multiscale organization reflecting structure from the level of biochemical properties of amino acids to
remote homology of proteins. Information about secondary and tertiary structure is encoded in the representations and
can be identified by linear projections. Representation learning produces features that generalize across a range of
applications, enabling state-of-the-art supervised prediction of mutational effect and secondary structure and
improving state-of-the-art features for long-range contact prediction.`),Na=m(),kn=a("p"),ai=n(`The abstract from
\u201CLanguage models of protein sequences at the scale of evolution enable accurate structure prediction\u201D is`),Aa=m(),bn=a("p"),cs=a("em"),ri=n(`Large language models have recently been shown to develop emergent capabilities with scale, going beyond
simple pattern matching to perform higher level reasoning and generate lifelike images and text. While
language models trained on protein sequences have been studied at a smaller scale, little is known about
what they learn about biology as they are scaled up. In this work we train models up to 15 billion parameters,
the largest language models of proteins to be evaluated to date. We find that as models are scaled they learn
information enabling the prediction of the three-dimensional structure of a protein at the resolution of
individual atoms. We present ESMFold for high accuracy end-to-end atomic level structure prediction directly
from the individual sequence of a protein. ESMFold has similar accuracy to AlphaFold2 and RoseTTAFold for
sequences with low perplexity that are well understood by the language model. ESMFold inference is an
order of magnitude faster than AlphaFold2, enabling exploration of the structural space of metagenomic
proteins in practical timescales.`),Oa=m(),Tn=a("p"),ii=n("Tips:"),Ia=m(),yn=a("ul"),ms=a("li"),li=n("ESM models are trained with a masked language modeling (MLM) objective."),Ua=m(),te=a("p"),di=n("The original code can be found "),Wt=a("a"),ci=n("here"),mi=n(` and was
was developed by the Fundamental AI Research team at Meta AI.
ESM-1b, ESM-1v and ESM-2 were contributed to huggingface by `),Ht=a("a"),pi=n("jasonliu"),hi=n(`
and `),Kt=a("a"),fi=n("Matt"),ui=n("."),Ra=m(),re=a("p"),gi=n("ESMFold was contributed to huggingface by "),Bt=a("a"),_i=n("Matt"),ki=n(` and
`),Vt=a("a"),bi=n("Sylvain"),Ti=n(`, with a big thank you to Nikita Smetanin, Roshan Rao and Tom Sercu for their
help throughout the process!`),Wa=m(),ie=a("p"),yi=n("The HuggingFace port of ESMFold uses portions of the "),Zt=a("a"),vi=n("openfold"),wi=n(` library.
The `),ps=a("code"),$i=n("openfold"),Ei=n(" library is licensed under the Apache License 2.0."),Ha=m(),Ee=a("h2"),Xe=a("a"),hs=a("span"),T(Gt.$$.fragment),Fi=m(),fs=a("span"),Mi=n("EsmConfig"),Ka=m(),D=a("div"),T(Jt.$$.fragment),zi=m(),Fe=a("p"),qi=n("This is the configuration class to store the configuration of a "),us=a("code"),xi=n("ESMModel"),Ci=n(`. It is used to instantiate a ESM model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ESM
`),Yt=a("a"),ji=n("facebook/esm-1b"),Pi=n(" architecture."),Si=m(),Me=a("p"),Li=n("Configuration objects inherit from "),vn=a("a"),Di=n("PretrainedConfig"),Ni=n(` and can be used to control the model outputs. Read the
documentation from `),wn=a("a"),Ai=n("PretrainedConfig"),Oi=n(" for more information."),Ii=m(),T(et.$$.fragment),Ui=m(),tt=a("div"),T(Qt.$$.fragment),Ri=m(),Xt=a("p"),Wi=n("Serializes this instance to a Python dictionary. Override the default "),$n=a("a"),Hi=n("to_dict()"),Ki=n("."),Ba=m(),ze=a("h2"),ot=a("a"),gs=a("span"),T(eo.$$.fragment),Bi=m(),_s=a("span"),Vi=n("EsmTokenizer"),Va=m(),C=a("div"),T(to.$$.fragment),Zi=m(),ks=a("p"),Gi=n("Constructs an ESM tokenizer."),Ji=m(),En=a("div"),T(oo.$$.fragment),Yi=m(),nt=a("div"),T(no.$$.fragment),Qi=m(),qe=a("p"),Xi=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),bs=a("code"),el=n("prepare_for_model"),tl=n(" or "),Ts=a("code"),ol=n("encode_plus"),nl=n(" methods."),sl=m(),le=a("div"),T(so.$$.fragment),al=m(),Fn=a("p"),rl=n("Create the token type IDs corresponding to the sequences passed. "),Mn=a("a"),il=n(`What are token type
IDs?`),ll=m(),ys=a("p"),dl=n("Should be overridden in a subclass if the model has a special way of building those."),cl=m(),zn=a("div"),T(ao.$$.fragment),Za=m(),xe=a("h2"),st=a("a"),vs=a("span"),T(ro.$$.fragment),ml=m(),ws=a("span"),pl=n("EsmModel"),Ga=m(),q=a("div"),T(io.$$.fragment),hl=m(),$s=a("p"),fl=n("The bare ESM Model transformer outputting raw hidden-states without any specific head on top."),ul=m(),lo=a("p"),gl=n("This model inherits from "),qn=a("a"),_l=n("PreTrainedModel"),kl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bl=m(),co=a("p"),Tl=n("This model is also a PyTorch "),mo=a("a"),yl=n("torch.nn.Module"),vl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wl=m(),po=a("p"),$l=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),ho=a("a"),El=n(`Attention is
all you need`),Fl=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ml=m(),j=a("p"),zl=n("To behave as an decoder the model needs to be initialized with the "),Es=a("code"),ql=n("is_decoder"),xl=n(` argument of the configuration set
to `),Fs=a("code"),Cl=n("True"),jl=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),Ms=a("code"),Pl=n("is_decoder"),Sl=n(` argument and
`),zs=a("code"),Ll=n("add_cross_attention"),Dl=n(" set to "),qs=a("code"),Nl=n("True"),Al=n("; an "),xs=a("code"),Ol=n("encoder_hidden_states"),Il=n(" is then expected as an input to the forward pass."),Ul=m(),oe=a("div"),T(fo.$$.fragment),Rl=m(),Ce=a("p"),Wl=n("The "),xn=a("a"),Hl=n("EsmModel"),Kl=n(" forward method, overrides the "),Cs=a("code"),Bl=n("__call__"),Vl=n(" special method."),Zl=m(),T(at.$$.fragment),Gl=m(),T(rt.$$.fragment),Ja=m(),je=a("h2"),it=a("a"),js=a("span"),T(uo.$$.fragment),Jl=m(),Ps=a("span"),Yl=n("EsmForMaskedLM"),Ya=m(),N=a("div"),T(go.$$.fragment),Ql=m(),_o=a("p"),Xl=n("ESM Model with a "),Ss=a("code"),ed=n("language modeling"),td=n(" head on top."),od=m(),ko=a("p"),nd=n("This model inherits from "),Cn=a("a"),sd=n("PreTrainedModel"),ad=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rd=m(),bo=a("p"),id=n("This model is also a PyTorch "),To=a("a"),ld=n("torch.nn.Module"),dd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cd=m(),K=a("div"),T(yo.$$.fragment),md=m(),Pe=a("p"),pd=n("The "),jn=a("a"),hd=n("EsmForMaskedLM"),fd=n(" forward method, overrides the "),Ls=a("code"),ud=n("__call__"),gd=n(" special method."),_d=m(),T(lt.$$.fragment),kd=m(),T(dt.$$.fragment),bd=m(),T(ct.$$.fragment),Qa=m(),Se=a("h2"),mt=a("a"),Ds=a("span"),T(vo.$$.fragment),Td=m(),Ns=a("span"),yd=n("EsmForSequenceClassification"),Xa=m(),A=a("div"),T(wo.$$.fragment),vd=m(),As=a("p"),wd=n(`ESM Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$d=m(),$o=a("p"),Ed=n("This model inherits from "),Pn=a("a"),Fd=n("PreTrainedModel"),Md=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zd=m(),Eo=a("p"),qd=n("This model is also a PyTorch "),Fo=a("a"),xd=n("torch.nn.Module"),Cd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jd=m(),x=a("div"),T(Mo.$$.fragment),Pd=m(),Le=a("p"),Sd=n("The "),Sn=a("a"),Ld=n("EsmForSequenceClassification"),Dd=n(" forward method, overrides the "),Os=a("code"),Nd=n("__call__"),Ad=n(" special method."),Od=m(),T(pt.$$.fragment),Id=m(),T(ht.$$.fragment),Ud=m(),T(ft.$$.fragment),Rd=m(),T(ut.$$.fragment),Wd=m(),T(gt.$$.fragment),er=m(),De=a("h2"),_t=a("a"),Is=a("span"),T(zo.$$.fragment),Hd=m(),Us=a("span"),Kd=n("EsmForTokenClassification"),tr=m(),O=a("div"),T(qo.$$.fragment),Bd=m(),Rs=a("p"),Vd=n(`ESM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Zd=m(),xo=a("p"),Gd=n("This model inherits from "),Ln=a("a"),Jd=n("PreTrainedModel"),Yd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qd=m(),Co=a("p"),Xd=n("This model is also a PyTorch "),jo=a("a"),ec=n("torch.nn.Module"),tc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oc=m(),B=a("div"),T(Po.$$.fragment),nc=m(),Ne=a("p"),sc=n("The "),Dn=a("a"),ac=n("EsmForTokenClassification"),rc=n(" forward method, overrides the "),Ws=a("code"),ic=n("__call__"),lc=n(" special method."),dc=m(),T(kt.$$.fragment),cc=m(),T(bt.$$.fragment),mc=m(),T(Tt.$$.fragment),or=m(),Ae=a("h2"),yt=a("a"),Hs=a("span"),T(So.$$.fragment),pc=m(),Ks=a("span"),hc=n("EsmForProteinFolding"),nr=m(),I=a("div"),T(Lo.$$.fragment),fc=m(),Bs=a("p"),uc=n(`ESMForProteinFolding is the HuggingFace port of the original ESMFold model. It consists of an ESM-2 \u201Cstem\u201D followed
by a protein folding \u201Chead\u201D, although unlike most other output heads, this \u201Chead\u201D is similar in size and runtime to
the rest of the model combined! It outputs a dictionary containing predicted structural information about the input
protein(s).`),gc=m(),Do=a("p"),_c=n("This model inherits from "),Nn=a("a"),kc=n("PreTrainedModel"),bc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tc=m(),No=a("p"),yc=n("This model is also a PyTorch "),Ao=a("a"),vc=n("torch.nn.Module"),wc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$c=m(),V=a("div"),T(Oo.$$.fragment),Ec=m(),Oe=a("p"),Fc=n("The "),An=a("a"),Mc=n("EsmForProteinFolding"),zc=n(" forward method, overrides the "),Vs=a("code"),qc=n("__call__"),xc=n(" special method."),Cc=m(),T(vt.$$.fragment),jc=m(),Zs=a("p"),Pc=n("Example:"),Sc=m(),Gs=a("p"),Lc=n("TODO Matt"),sr=m(),Ie=a("h2"),wt=a("a"),Js=a("span"),T(Io.$$.fragment),Dc=m(),Ys=a("span"),Nc=n("TFEsmModel"),ar=m(),U=a("div"),T(Uo.$$.fragment),Ac=m(),Qs=a("p"),Oc=n("The bare ESM Model transformer outputting raw hidden-states without any specific head on top."),Ic=m(),Ro=a("p"),Uc=n("This model inherits from "),On=a("a"),Rc=n("TFPreTrainedModel"),Wc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hc=m(),Wo=a("p"),Kc=n("This model is also a Keras "),Ho=a("a"),Bc=n("Model"),Vc=n(` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Zc=m(),ne=a("div"),T(Ko.$$.fragment),Gc=m(),Ue=a("p"),Jc=n("The "),In=a("a"),Yc=n("TFEsmModel"),Qc=n(" forward method, overrides the "),Xs=a("code"),Xc=n("__call__"),em=n(" special method."),tm=m(),T($t.$$.fragment),om=m(),T(Et.$$.fragment),rr=m(),Re=a("h2"),Ft=a("a"),ea=a("span"),T(Bo.$$.fragment),nm=m(),ta=a("span"),sm=n("TFEsmForMaskedLM"),ir=m(),R=a("div"),T(Vo.$$.fragment),am=m(),Zo=a("p"),rm=n("ESM Model with a "),oa=a("code"),im=n("language modeling"),lm=n(" head on top."),dm=m(),Go=a("p"),cm=n("This model inherits from "),Un=a("a"),mm=n("TFPreTrainedModel"),pm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hm=m(),Jo=a("p"),fm=n("This model is also a Keras "),Yo=a("a"),um=n("Model"),gm=n(` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),_m=m(),Z=a("div"),T(Qo.$$.fragment),km=m(),We=a("p"),bm=n("The "),Rn=a("a"),Tm=n("TFEsmForMaskedLM"),ym=n(" forward method, overrides the "),na=a("code"),vm=n("__call__"),wm=n(" special method."),$m=m(),T(Mt.$$.fragment),Em=m(),T(zt.$$.fragment),Fm=m(),T(qt.$$.fragment),lr=m(),He=a("h2"),xt=a("a"),sa=a("span"),T(Xo.$$.fragment),Mm=m(),aa=a("span"),zm=n("TFEsmForSequenceClassification"),dr=m(),W=a("div"),T(en.$$.fragment),qm=m(),ra=a("p"),xm=n(`ESM Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Cm=m(),tn=a("p"),jm=n("This model inherits from "),Wn=a("a"),Pm=n("TFPreTrainedModel"),Sm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lm=m(),on=a("p"),Dm=n("This model is also a Keras "),nn=a("a"),Nm=n("Model"),Am=n(` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Om=m(),G=a("div"),T(sn.$$.fragment),Im=m(),Ke=a("p"),Um=n("The "),Hn=a("a"),Rm=n("TFEsmForSequenceClassification"),Wm=n(" forward method, overrides the "),ia=a("code"),Hm=n("__call__"),Km=n(" special method."),Bm=m(),T(Ct.$$.fragment),Vm=m(),T(jt.$$.fragment),Zm=m(),T(Pt.$$.fragment),cr=m(),Be=a("h2"),St=a("a"),la=a("span"),T(an.$$.fragment),Gm=m(),da=a("span"),Jm=n("TFEsmForTokenClassification"),mr=m(),H=a("div"),T(rn.$$.fragment),Ym=m(),ca=a("p"),Qm=n(`ESM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Xm=m(),ln=a("p"),ep=n("This model inherits from "),Kn=a("a"),tp=n("TFPreTrainedModel"),op=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),np=m(),dn=a("p"),sp=n("This model is also a Keras "),cn=a("a"),ap=n("Model"),rp=n(` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),ip=m(),J=a("div"),T(mn.$$.fragment),lp=m(),Ve=a("p"),dp=n("The "),Bn=a("a"),cp=n("TFEsmForTokenClassification"),mp=n(" forward method, overrides the "),ma=a("code"),pp=n("__call__"),hp=n(" special method."),fp=m(),T(Lt.$$.fragment),up=m(),T(Dt.$$.fragment),gp=m(),T(Nt.$$.fragment),this.h()},l(t){const g=_f('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(o),_=p(t),c=r(t,"H1",{class:!0});var pn=i(c);f=r(pn,"A",{id:!0,class:!0,href:!0});var pa=i(f);b=r(pa,"SPAN",{});var ha=i(b);y(l.$$.fragment,ha),ha.forEach(o),pa.forEach(o),u=p(pn),M=r(pn,"SPAN",{});var fa=i(M);Zr=s(fa,"ESM"),fa.forEach(o),pn.forEach(o),ja=p(t),$e=r(t,"H2",{class:!0});var hn=i($e);Je=r(hn,"A",{id:!0,class:!0,href:!0});var ua=i(Je);is=r(ua,"SPAN",{});var ga=i(is);y(It.$$.fragment,ga),ga.forEach(o),ua.forEach(o),Gr=p(hn),ls=r(hn,"SPAN",{});var _a=i(ls);Jr=s(_a,"Overview"),_a.forEach(o),hn.forEach(o),Pa=s(t,`

This page provides code and pre-trained weights for Transformer protein language models from Meta AI's Fundamental 
AI Research Team, providing the state-of-the-art ESMFold and ESM-2, and the previously released ESM-1b and ESM-1v.
Transformer protein language models were introduced in the paper [Biological structure and function emerge from scaling
unsupervised learning to 250 million protein sequences](https://www.pnas.org/content/118/15/e2016239118) by 
Alexander Rives, Joshua Meier, Tom Sercu, Siddharth Goyal, Zeming Lin, Jason Liu, Demi Guo, Myle Ott, 
C. Lawrence Zitnick, Jerry Ma, and Rob Fergus.
The first version of this paper was [preprinted in 2019](https://www.biorxiv.org/content/10.1101/622803v1?versioned=true).
`),Ye=r(t,"P",{});var fn=i(Ye);Yr=s(fn,`ESM-2 outperforms all tested single-sequence protein language models across a range of structure prediction tasks,
and enables atomic resolution structure prediction.
It was released with the paper `),Ut=r(fn,"A",{href:!0,rel:!0});var ka=i(Ut);Qr=s(ka,`Language models of protein sequences at the scale of evolution enable accurate
structure prediction`),ka.forEach(o),Xr=s(fn,` by Zeming Lin, Halil Akin, Roshan Rao, Brian Hie,
Zhongkai Zhu, Wenting Lu, Allan dos Santos Costa, Maryam Fazel-Zarandi, Tom Sercu, Sal Candido and Alexander Rives.`),fn.forEach(o),Sa=p(t),Qe=r(t,"P",{});var un=i(Qe);ei=s(un,`Also introduced in this paper was ESMFold. It uses an ESM-2 stem with a head that can predict folded protein
structures with state-of-the-art accuracy. Unlike `),Rt=r(un,"A",{href:!0,rel:!0});var ba=i(Rt);ti=s(ba,"AlphaFold2"),ba.forEach(o),oi=s(un,`,
it relies on the token embeddings from the large pre-trained protein language model stem and does not perform a multiple
sequence alignment (MSA) step at inference time, which means that ESMFold checkpoints are fully \u201Cstandalone\u201D -
they do not require a database of known protein sequences and structures with associated external query tools
to make predictions, and are much faster as a result.`),un.forEach(o),La=p(t),gn=r(t,"P",{});var Ta=i(gn);ni=s(Ta,`The abstract from
\u201CBiological structure and function emerge from scaling unsupervised learning to 250
million protein sequences\u201D is`),Ta.forEach(o),Da=p(t),_n=r(t,"P",{});var ya=i(_n);ds=r(ya,"EM",{});var va=i(ds);si=s(va,`In the field of artificial intelligence, a combination of scale in data and model capacity enabled by unsupervised
learning has led to major advances in representation learning and statistical generation. In the life sciences, the
anticipated growth of sequencing promises unprecedented data on natural sequence diversity. Protein language modeling
at the scale of evolution is a logical step toward predictive and generative artificial intelligence for biology. To
this end, we use unsupervised learning to train a deep contextual language model on 86 billion amino acids across 250
million protein sequences spanning evolutionary diversity. The resulting model contains information about biological
properties in its representations. The representations are learned from sequence data alone. The learned representation
space has a multiscale organization reflecting structure from the level of biochemical properties of amino acids to
remote homology of proteins. Information about secondary and tertiary structure is encoded in the representations and
can be identified by linear projections. Representation learning produces features that generalize across a range of
applications, enabling state-of-the-art supervised prediction of mutational effect and secondary structure and
improving state-of-the-art features for long-range contact prediction.`),va.forEach(o),ya.forEach(o),Na=p(t),kn=r(t,"P",{});var wa=i(kn);ai=s(wa,`The abstract from
\u201CLanguage models of protein sequences at the scale of evolution enable accurate structure prediction\u201D is`),wa.forEach(o),Aa=p(t),bn=r(t,"P",{});var $a=i(bn);cs=r($a,"EM",{});var Ea=i(cs);ri=s(Ea,`Large language models have recently been shown to develop emergent capabilities with scale, going beyond
simple pattern matching to perform higher level reasoning and generate lifelike images and text. While
language models trained on protein sequences have been studied at a smaller scale, little is known about
what they learn about biology as they are scaled up. In this work we train models up to 15 billion parameters,
the largest language models of proteins to be evaluated to date. We find that as models are scaled they learn
information enabling the prediction of the three-dimensional structure of a protein at the resolution of
individual atoms. We present ESMFold for high accuracy end-to-end atomic level structure prediction directly
from the individual sequence of a protein. ESMFold has similar accuracy to AlphaFold2 and RoseTTAFold for
sequences with low perplexity that are well understood by the language model. ESMFold inference is an
order of magnitude faster than AlphaFold2, enabling exploration of the structural space of metagenomic
proteins in practical timescales.`),Ea.forEach(o),$a.forEach(o),Oa=p(t),Tn=r(t,"P",{});var Fa=i(Tn);ii=s(Fa,"Tips:"),Fa.forEach(o),Ia=p(t),yn=r(t,"UL",{});var Ma=i(yn);ms=r(Ma,"LI",{});var za=i(ms);li=s(za,"ESM models are trained with a masked language modeling (MLM) objective."),za.forEach(o),Ma.forEach(o),Ua=p(t),te=r(t,"P",{});var ae=i(te);di=s(ae,"The original code can be found "),Wt=r(ae,"A",{href:!0,rel:!0});var qa=i(Wt);ci=s(qa,"here"),qa.forEach(o),mi=s(ae,` and was
was developed by the Fundamental AI Research team at Meta AI.
ESM-1b, ESM-1v and ESM-2 were contributed to huggingface by `),Ht=r(ae,"A",{href:!0,rel:!0});var xa=i(Ht);pi=s(xa,"jasonliu"),xa.forEach(o),hi=s(ae,`
and `),Kt=r(ae,"A",{href:!0,rel:!0});var Ca=i(Kt);fi=s(Ca,"Matt"),Ca.forEach(o),ui=s(ae,"."),ae.forEach(o),Ra=p(t),re=r(t,"P",{});var Ze=i(re);gi=s(Ze,"ESMFold was contributed to huggingface by "),Bt=r(Ze,"A",{href:!0,rel:!0});var kp=i(Bt);_i=s(kp,"Matt"),kp.forEach(o),ki=s(Ze,` and
`),Vt=r(Ze,"A",{href:!0,rel:!0});var bp=i(Vt);bi=s(bp,"Sylvain"),bp.forEach(o),Ti=s(Ze,`, with a big thank you to Nikita Smetanin, Roshan Rao and Tom Sercu for their
help throughout the process!`),Ze.forEach(o),Wa=p(t),ie=r(t,"P",{});var Vn=i(ie);yi=s(Vn,"The HuggingFace port of ESMFold uses portions of the "),Zt=r(Vn,"A",{href:!0,rel:!0});var Tp=i(Zt);vi=s(Tp,"openfold"),Tp.forEach(o),wi=s(Vn,` library.
The `),ps=r(Vn,"CODE",{});var yp=i(ps);$i=s(yp,"openfold"),yp.forEach(o),Ei=s(Vn," library is licensed under the Apache License 2.0."),Vn.forEach(o),Ha=p(t),Ee=r(t,"H2",{class:!0});var hr=i(Ee);Xe=r(hr,"A",{id:!0,class:!0,href:!0});var vp=i(Xe);hs=r(vp,"SPAN",{});var wp=i(hs);y(Gt.$$.fragment,wp),wp.forEach(o),vp.forEach(o),Fi=p(hr),fs=r(hr,"SPAN",{});var $p=i(fs);Mi=s($p,"EsmConfig"),$p.forEach(o),hr.forEach(o),Ka=p(t),D=r(t,"DIV",{class:!0});var de=i(D);y(Jt.$$.fragment,de),zi=p(de),Fe=r(de,"P",{});var Zn=i(Fe);qi=s(Zn,"This is the configuration class to store the configuration of a "),us=r(Zn,"CODE",{});var Ep=i(us);xi=s(Ep,"ESMModel"),Ep.forEach(o),Ci=s(Zn,`. It is used to instantiate a ESM model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ESM
`),Yt=r(Zn,"A",{href:!0,rel:!0});var Fp=i(Yt);ji=s(Fp,"facebook/esm-1b"),Fp.forEach(o),Pi=s(Zn," architecture."),Zn.forEach(o),Si=p(de),Me=r(de,"P",{});var Gn=i(Me);Li=s(Gn,"Configuration objects inherit from "),vn=r(Gn,"A",{href:!0});var Mp=i(vn);Di=s(Mp,"PretrainedConfig"),Mp.forEach(o),Ni=s(Gn,` and can be used to control the model outputs. Read the
documentation from `),wn=r(Gn,"A",{href:!0});var zp=i(wn);Ai=s(zp,"PretrainedConfig"),zp.forEach(o),Oi=s(Gn," for more information."),Gn.forEach(o),Ii=p(de),y(et.$$.fragment,de),Ui=p(de),tt=r(de,"DIV",{class:!0});var fr=i(tt);y(Qt.$$.fragment,fr),Ri=p(fr),Xt=r(fr,"P",{});var ur=i(Xt);Wi=s(ur,"Serializes this instance to a Python dictionary. Override the default "),$n=r(ur,"A",{href:!0});var qp=i($n);Hi=s(qp,"to_dict()"),qp.forEach(o),Ki=s(ur,"."),ur.forEach(o),fr.forEach(o),de.forEach(o),Ba=p(t),ze=r(t,"H2",{class:!0});var gr=i(ze);ot=r(gr,"A",{id:!0,class:!0,href:!0});var xp=i(ot);gs=r(xp,"SPAN",{});var Cp=i(gs);y(eo.$$.fragment,Cp),Cp.forEach(o),xp.forEach(o),Bi=p(gr),_s=r(gr,"SPAN",{});var jp=i(_s);Vi=s(jp,"EsmTokenizer"),jp.forEach(o),gr.forEach(o),Va=p(t),C=r(t,"DIV",{class:!0});var se=i(C);y(to.$$.fragment,se),Zi=p(se),ks=r(se,"P",{});var Pp=i(ks);Gi=s(Pp,"Constructs an ESM tokenizer."),Pp.forEach(o),Ji=p(se),En=r(se,"DIV",{class:!0});var Sp=i(En);y(oo.$$.fragment,Sp),Sp.forEach(o),Yi=p(se),nt=r(se,"DIV",{class:!0});var _r=i(nt);y(no.$$.fragment,_r),Qi=p(_r),qe=r(_r,"P",{});var Jn=i(qe);Xi=s(Jn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),bs=r(Jn,"CODE",{});var Lp=i(bs);el=s(Lp,"prepare_for_model"),Lp.forEach(o),tl=s(Jn," or "),Ts=r(Jn,"CODE",{});var Dp=i(Ts);ol=s(Dp,"encode_plus"),Dp.forEach(o),nl=s(Jn," methods."),Jn.forEach(o),_r.forEach(o),sl=p(se),le=r(se,"DIV",{class:!0});var Yn=i(le);y(so.$$.fragment,Yn),al=p(Yn),Fn=r(Yn,"P",{});var _p=i(Fn);rl=s(_p,"Create the token type IDs corresponding to the sequences passed. "),Mn=r(_p,"A",{href:!0});var Np=i(Mn);il=s(Np,`What are token type
IDs?`),Np.forEach(o),_p.forEach(o),ll=p(Yn),ys=r(Yn,"P",{});var Ap=i(ys);dl=s(Ap,"Should be overridden in a subclass if the model has a special way of building those."),Ap.forEach(o),Yn.forEach(o),cl=p(se),zn=r(se,"DIV",{class:!0});var Op=i(zn);y(ao.$$.fragment,Op),Op.forEach(o),se.forEach(o),Za=p(t),xe=r(t,"H2",{class:!0});var kr=i(xe);st=r(kr,"A",{id:!0,class:!0,href:!0});var Ip=i(st);vs=r(Ip,"SPAN",{});var Up=i(vs);y(ro.$$.fragment,Up),Up.forEach(o),Ip.forEach(o),ml=p(kr),ws=r(kr,"SPAN",{});var Rp=i(ws);pl=s(Rp,"EsmModel"),Rp.forEach(o),kr.forEach(o),Ga=p(t),q=r(t,"DIV",{class:!0});var Y=i(q);y(io.$$.fragment,Y),hl=p(Y),$s=r(Y,"P",{});var Wp=i($s);fl=s(Wp,"The bare ESM Model transformer outputting raw hidden-states without any specific head on top."),Wp.forEach(o),ul=p(Y),lo=r(Y,"P",{});var br=i(lo);gl=s(br,"This model inherits from "),qn=r(br,"A",{href:!0});var Hp=i(qn);_l=s(Hp,"PreTrainedModel"),Hp.forEach(o),kl=s(br,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),br.forEach(o),bl=p(Y),co=r(Y,"P",{});var Tr=i(co);Tl=s(Tr,"This model is also a PyTorch "),mo=r(Tr,"A",{href:!0,rel:!0});var Kp=i(mo);yl=s(Kp,"torch.nn.Module"),Kp.forEach(o),vl=s(Tr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tr.forEach(o),wl=p(Y),po=r(Y,"P",{});var yr=i(po);$l=s(yr,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),ho=r(yr,"A",{href:!0,rel:!0});var Bp=i(ho);El=s(Bp,`Attention is
all you need`),Bp.forEach(o),Fl=s(yr,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),yr.forEach(o),Ml=p(Y),j=r(Y,"P",{});var Q=i(j);zl=s(Q,"To behave as an decoder the model needs to be initialized with the "),Es=r(Q,"CODE",{});var Vp=i(Es);ql=s(Vp,"is_decoder"),Vp.forEach(o),xl=s(Q,` argument of the configuration set
to `),Fs=r(Q,"CODE",{});var Zp=i(Fs);Cl=s(Zp,"True"),Zp.forEach(o),jl=s(Q,". To be used in a Seq2Seq model, the model needs to initialized with both "),Ms=r(Q,"CODE",{});var Gp=i(Ms);Pl=s(Gp,"is_decoder"),Gp.forEach(o),Sl=s(Q,` argument and
`),zs=r(Q,"CODE",{});var Jp=i(zs);Ll=s(Jp,"add_cross_attention"),Jp.forEach(o),Dl=s(Q," set to "),qs=r(Q,"CODE",{});var Yp=i(qs);Nl=s(Yp,"True"),Yp.forEach(o),Al=s(Q,"; an "),xs=r(Q,"CODE",{});var Qp=i(xs);Ol=s(Qp,"encoder_hidden_states"),Qp.forEach(o),Il=s(Q," is then expected as an input to the forward pass."),Q.forEach(o),Ul=p(Y),oe=r(Y,"DIV",{class:!0});var At=i(oe);y(fo.$$.fragment,At),Rl=p(At),Ce=r(At,"P",{});var Qn=i(Ce);Wl=s(Qn,"The "),xn=r(Qn,"A",{href:!0});var Xp=i(xn);Hl=s(Xp,"EsmModel"),Xp.forEach(o),Kl=s(Qn," forward method, overrides the "),Cs=r(Qn,"CODE",{});var eh=i(Cs);Bl=s(eh,"__call__"),eh.forEach(o),Vl=s(Qn," special method."),Qn.forEach(o),Zl=p(At),y(at.$$.fragment,At),Gl=p(At),y(rt.$$.fragment,At),At.forEach(o),Y.forEach(o),Ja=p(t),je=r(t,"H2",{class:!0});var vr=i(je);it=r(vr,"A",{id:!0,class:!0,href:!0});var th=i(it);js=r(th,"SPAN",{});var oh=i(js);y(uo.$$.fragment,oh),oh.forEach(o),th.forEach(o),Jl=p(vr),Ps=r(vr,"SPAN",{});var nh=i(Ps);Yl=s(nh,"EsmForMaskedLM"),nh.forEach(o),vr.forEach(o),Ya=p(t),N=r(t,"DIV",{class:!0});var ce=i(N);y(go.$$.fragment,ce),Ql=p(ce),_o=r(ce,"P",{});var wr=i(_o);Xl=s(wr,"ESM Model with a "),Ss=r(wr,"CODE",{});var sh=i(Ss);ed=s(sh,"language modeling"),sh.forEach(o),td=s(wr," head on top."),wr.forEach(o),od=p(ce),ko=r(ce,"P",{});var $r=i(ko);nd=s($r,"This model inherits from "),Cn=r($r,"A",{href:!0});var ah=i(Cn);sd=s(ah,"PreTrainedModel"),ah.forEach(o),ad=s($r,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$r.forEach(o),rd=p(ce),bo=r(ce,"P",{});var Er=i(bo);id=s(Er,"This model is also a PyTorch "),To=r(Er,"A",{href:!0,rel:!0});var rh=i(To);ld=s(rh,"torch.nn.Module"),rh.forEach(o),dd=s(Er,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Er.forEach(o),cd=p(ce),K=r(ce,"DIV",{class:!0});var me=i(K);y(yo.$$.fragment,me),md=p(me),Pe=r(me,"P",{});var Xn=i(Pe);pd=s(Xn,"The "),jn=r(Xn,"A",{href:!0});var ih=i(jn);hd=s(ih,"EsmForMaskedLM"),ih.forEach(o),fd=s(Xn," forward method, overrides the "),Ls=r(Xn,"CODE",{});var lh=i(Ls);ud=s(lh,"__call__"),lh.forEach(o),gd=s(Xn," special method."),Xn.forEach(o),_d=p(me),y(lt.$$.fragment,me),kd=p(me),y(dt.$$.fragment,me),bd=p(me),y(ct.$$.fragment,me),me.forEach(o),ce.forEach(o),Qa=p(t),Se=r(t,"H2",{class:!0});var Fr=i(Se);mt=r(Fr,"A",{id:!0,class:!0,href:!0});var dh=i(mt);Ds=r(dh,"SPAN",{});var ch=i(Ds);y(vo.$$.fragment,ch),ch.forEach(o),dh.forEach(o),Td=p(Fr),Ns=r(Fr,"SPAN",{});var mh=i(Ns);yd=s(mh,"EsmForSequenceClassification"),mh.forEach(o),Fr.forEach(o),Xa=p(t),A=r(t,"DIV",{class:!0});var pe=i(A);y(wo.$$.fragment,pe),vd=p(pe),As=r(pe,"P",{});var ph=i(As);wd=s(ph,`ESM Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),ph.forEach(o),$d=p(pe),$o=r(pe,"P",{});var Mr=i($o);Ed=s(Mr,"This model inherits from "),Pn=r(Mr,"A",{href:!0});var hh=i(Pn);Fd=s(hh,"PreTrainedModel"),hh.forEach(o),Md=s(Mr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mr.forEach(o),zd=p(pe),Eo=r(pe,"P",{});var zr=i(Eo);qd=s(zr,"This model is also a PyTorch "),Fo=r(zr,"A",{href:!0,rel:!0});var fh=i(Fo);xd=s(fh,"torch.nn.Module"),fh.forEach(o),Cd=s(zr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zr.forEach(o),jd=p(pe),x=r(pe,"DIV",{class:!0});var X=i(x);y(Mo.$$.fragment,X),Pd=p(X),Le=r(X,"P",{});var es=i(Le);Sd=s(es,"The "),Sn=r(es,"A",{href:!0});var uh=i(Sn);Ld=s(uh,"EsmForSequenceClassification"),uh.forEach(o),Dd=s(es," forward method, overrides the "),Os=r(es,"CODE",{});var gh=i(Os);Nd=s(gh,"__call__"),gh.forEach(o),Ad=s(es," special method."),es.forEach(o),Od=p(X),y(pt.$$.fragment,X),Id=p(X),y(ht.$$.fragment,X),Ud=p(X),y(ft.$$.fragment,X),Rd=p(X),y(ut.$$.fragment,X),Wd=p(X),y(gt.$$.fragment,X),X.forEach(o),pe.forEach(o),er=p(t),De=r(t,"H2",{class:!0});var qr=i(De);_t=r(qr,"A",{id:!0,class:!0,href:!0});var _h=i(_t);Is=r(_h,"SPAN",{});var kh=i(Is);y(zo.$$.fragment,kh),kh.forEach(o),_h.forEach(o),Hd=p(qr),Us=r(qr,"SPAN",{});var bh=i(Us);Kd=s(bh,"EsmForTokenClassification"),bh.forEach(o),qr.forEach(o),tr=p(t),O=r(t,"DIV",{class:!0});var he=i(O);y(qo.$$.fragment,he),Bd=p(he),Rs=r(he,"P",{});var Th=i(Rs);Vd=s(Th,`ESM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Th.forEach(o),Zd=p(he),xo=r(he,"P",{});var xr=i(xo);Gd=s(xr,"This model inherits from "),Ln=r(xr,"A",{href:!0});var yh=i(Ln);Jd=s(yh,"PreTrainedModel"),yh.forEach(o),Yd=s(xr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xr.forEach(o),Qd=p(he),Co=r(he,"P",{});var Cr=i(Co);Xd=s(Cr,"This model is also a PyTorch "),jo=r(Cr,"A",{href:!0,rel:!0});var vh=i(jo);ec=s(vh,"torch.nn.Module"),vh.forEach(o),tc=s(Cr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cr.forEach(o),oc=p(he),B=r(he,"DIV",{class:!0});var fe=i(B);y(Po.$$.fragment,fe),nc=p(fe),Ne=r(fe,"P",{});var ts=i(Ne);sc=s(ts,"The "),Dn=r(ts,"A",{href:!0});var wh=i(Dn);ac=s(wh,"EsmForTokenClassification"),wh.forEach(o),rc=s(ts," forward method, overrides the "),Ws=r(ts,"CODE",{});var $h=i(Ws);ic=s($h,"__call__"),$h.forEach(o),lc=s(ts," special method."),ts.forEach(o),dc=p(fe),y(kt.$$.fragment,fe),cc=p(fe),y(bt.$$.fragment,fe),mc=p(fe),y(Tt.$$.fragment,fe),fe.forEach(o),he.forEach(o),or=p(t),Ae=r(t,"H2",{class:!0});var jr=i(Ae);yt=r(jr,"A",{id:!0,class:!0,href:!0});var Eh=i(yt);Hs=r(Eh,"SPAN",{});var Fh=i(Hs);y(So.$$.fragment,Fh),Fh.forEach(o),Eh.forEach(o),pc=p(jr),Ks=r(jr,"SPAN",{});var Mh=i(Ks);hc=s(Mh,"EsmForProteinFolding"),Mh.forEach(o),jr.forEach(o),nr=p(t),I=r(t,"DIV",{class:!0});var ue=i(I);y(Lo.$$.fragment,ue),fc=p(ue),Bs=r(ue,"P",{});var zh=i(Bs);uc=s(zh,`ESMForProteinFolding is the HuggingFace port of the original ESMFold model. It consists of an ESM-2 \u201Cstem\u201D followed
by a protein folding \u201Chead\u201D, although unlike most other output heads, this \u201Chead\u201D is similar in size and runtime to
the rest of the model combined! It outputs a dictionary containing predicted structural information about the input
protein(s).`),zh.forEach(o),gc=p(ue),Do=r(ue,"P",{});var Pr=i(Do);_c=s(Pr,"This model inherits from "),Nn=r(Pr,"A",{href:!0});var qh=i(Nn);kc=s(qh,"PreTrainedModel"),qh.forEach(o),bc=s(Pr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pr.forEach(o),Tc=p(ue),No=r(ue,"P",{});var Sr=i(No);yc=s(Sr,"This model is also a PyTorch "),Ao=r(Sr,"A",{href:!0,rel:!0});var xh=i(Ao);vc=s(xh,"torch.nn.Module"),xh.forEach(o),wc=s(Sr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sr.forEach(o),$c=p(ue),V=r(ue,"DIV",{class:!0});var ge=i(V);y(Oo.$$.fragment,ge),Ec=p(ge),Oe=r(ge,"P",{});var os=i(Oe);Fc=s(os,"The "),An=r(os,"A",{href:!0});var Ch=i(An);Mc=s(Ch,"EsmForProteinFolding"),Ch.forEach(o),zc=s(os," forward method, overrides the "),Vs=r(os,"CODE",{});var jh=i(Vs);qc=s(jh,"__call__"),jh.forEach(o),xc=s(os," special method."),os.forEach(o),Cc=p(ge),y(vt.$$.fragment,ge),jc=p(ge),Zs=r(ge,"P",{});var Ph=i(Zs);Pc=s(Ph,"Example:"),Ph.forEach(o),Sc=p(ge),Gs=r(ge,"P",{});var Sh=i(Gs);Lc=s(Sh,"TODO Matt"),Sh.forEach(o),ge.forEach(o),ue.forEach(o),sr=p(t),Ie=r(t,"H2",{class:!0});var Lr=i(Ie);wt=r(Lr,"A",{id:!0,class:!0,href:!0});var Lh=i(wt);Js=r(Lh,"SPAN",{});var Dh=i(Js);y(Io.$$.fragment,Dh),Dh.forEach(o),Lh.forEach(o),Dc=p(Lr),Ys=r(Lr,"SPAN",{});var Nh=i(Ys);Nc=s(Nh,"TFEsmModel"),Nh.forEach(o),Lr.forEach(o),ar=p(t),U=r(t,"DIV",{class:!0});var _e=i(U);y(Uo.$$.fragment,_e),Ac=p(_e),Qs=r(_e,"P",{});var Ah=i(Qs);Oc=s(Ah,"The bare ESM Model transformer outputting raw hidden-states without any specific head on top."),Ah.forEach(o),Ic=p(_e),Ro=r(_e,"P",{});var Dr=i(Ro);Uc=s(Dr,"This model inherits from "),On=r(Dr,"A",{href:!0});var Oh=i(On);Rc=s(Oh,"TFPreTrainedModel"),Oh.forEach(o),Wc=s(Dr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dr.forEach(o),Hc=p(_e),Wo=r(_e,"P",{});var Nr=i(Wo);Kc=s(Nr,"This model is also a Keras "),Ho=r(Nr,"A",{href:!0,rel:!0});var Ih=i(Ho);Bc=s(Ih,"Model"),Ih.forEach(o),Vc=s(Nr,` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Nr.forEach(o),Zc=p(_e),ne=r(_e,"DIV",{class:!0});var Ot=i(ne);y(Ko.$$.fragment,Ot),Gc=p(Ot),Ue=r(Ot,"P",{});var ns=i(Ue);Jc=s(ns,"The "),In=r(ns,"A",{href:!0});var Uh=i(In);Yc=s(Uh,"TFEsmModel"),Uh.forEach(o),Qc=s(ns," forward method, overrides the "),Xs=r(ns,"CODE",{});var Rh=i(Xs);Xc=s(Rh,"__call__"),Rh.forEach(o),em=s(ns," special method."),ns.forEach(o),tm=p(Ot),y($t.$$.fragment,Ot),om=p(Ot),y(Et.$$.fragment,Ot),Ot.forEach(o),_e.forEach(o),rr=p(t),Re=r(t,"H2",{class:!0});var Ar=i(Re);Ft=r(Ar,"A",{id:!0,class:!0,href:!0});var Wh=i(Ft);ea=r(Wh,"SPAN",{});var Hh=i(ea);y(Bo.$$.fragment,Hh),Hh.forEach(o),Wh.forEach(o),nm=p(Ar),ta=r(Ar,"SPAN",{});var Kh=i(ta);sm=s(Kh,"TFEsmForMaskedLM"),Kh.forEach(o),Ar.forEach(o),ir=p(t),R=r(t,"DIV",{class:!0});var ke=i(R);y(Vo.$$.fragment,ke),am=p(ke),Zo=r(ke,"P",{});var Or=i(Zo);rm=s(Or,"ESM Model with a "),oa=r(Or,"CODE",{});var Bh=i(oa);im=s(Bh,"language modeling"),Bh.forEach(o),lm=s(Or," head on top."),Or.forEach(o),dm=p(ke),Go=r(ke,"P",{});var Ir=i(Go);cm=s(Ir,"This model inherits from "),Un=r(Ir,"A",{href:!0});var Vh=i(Un);mm=s(Vh,"TFPreTrainedModel"),Vh.forEach(o),pm=s(Ir,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ir.forEach(o),hm=p(ke),Jo=r(ke,"P",{});var Ur=i(Jo);fm=s(Ur,"This model is also a Keras "),Yo=r(Ur,"A",{href:!0,rel:!0});var Zh=i(Yo);um=s(Zh,"Model"),Zh.forEach(o),gm=s(Ur,` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Ur.forEach(o),_m=p(ke),Z=r(ke,"DIV",{class:!0});var be=i(Z);y(Qo.$$.fragment,be),km=p(be),We=r(be,"P",{});var ss=i(We);bm=s(ss,"The "),Rn=r(ss,"A",{href:!0});var Gh=i(Rn);Tm=s(Gh,"TFEsmForMaskedLM"),Gh.forEach(o),ym=s(ss," forward method, overrides the "),na=r(ss,"CODE",{});var Jh=i(na);vm=s(Jh,"__call__"),Jh.forEach(o),wm=s(ss," special method."),ss.forEach(o),$m=p(be),y(Mt.$$.fragment,be),Em=p(be),y(zt.$$.fragment,be),Fm=p(be),y(qt.$$.fragment,be),be.forEach(o),ke.forEach(o),lr=p(t),He=r(t,"H2",{class:!0});var Rr=i(He);xt=r(Rr,"A",{id:!0,class:!0,href:!0});var Yh=i(xt);sa=r(Yh,"SPAN",{});var Qh=i(sa);y(Xo.$$.fragment,Qh),Qh.forEach(o),Yh.forEach(o),Mm=p(Rr),aa=r(Rr,"SPAN",{});var Xh=i(aa);zm=s(Xh,"TFEsmForSequenceClassification"),Xh.forEach(o),Rr.forEach(o),dr=p(t),W=r(t,"DIV",{class:!0});var Te=i(W);y(en.$$.fragment,Te),qm=p(Te),ra=r(Te,"P",{});var ef=i(ra);xm=s(ef,`ESM Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),ef.forEach(o),Cm=p(Te),tn=r(Te,"P",{});var Wr=i(tn);jm=s(Wr,"This model inherits from "),Wn=r(Wr,"A",{href:!0});var tf=i(Wn);Pm=s(tf,"TFPreTrainedModel"),tf.forEach(o),Sm=s(Wr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wr.forEach(o),Lm=p(Te),on=r(Te,"P",{});var Hr=i(on);Dm=s(Hr,"This model is also a Keras "),nn=r(Hr,"A",{href:!0,rel:!0});var of=i(nn);Nm=s(of,"Model"),of.forEach(o),Am=s(Hr,` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Hr.forEach(o),Om=p(Te),G=r(Te,"DIV",{class:!0});var ye=i(G);y(sn.$$.fragment,ye),Im=p(ye),Ke=r(ye,"P",{});var as=i(Ke);Um=s(as,"The "),Hn=r(as,"A",{href:!0});var nf=i(Hn);Rm=s(nf,"TFEsmForSequenceClassification"),nf.forEach(o),Wm=s(as," forward method, overrides the "),ia=r(as,"CODE",{});var sf=i(ia);Hm=s(sf,"__call__"),sf.forEach(o),Km=s(as," special method."),as.forEach(o),Bm=p(ye),y(Ct.$$.fragment,ye),Vm=p(ye),y(jt.$$.fragment,ye),Zm=p(ye),y(Pt.$$.fragment,ye),ye.forEach(o),Te.forEach(o),cr=p(t),Be=r(t,"H2",{class:!0});var Kr=i(Be);St=r(Kr,"A",{id:!0,class:!0,href:!0});var af=i(St);la=r(af,"SPAN",{});var rf=i(la);y(an.$$.fragment,rf),rf.forEach(o),af.forEach(o),Gm=p(Kr),da=r(Kr,"SPAN",{});var lf=i(da);Jm=s(lf,"TFEsmForTokenClassification"),lf.forEach(o),Kr.forEach(o),mr=p(t),H=r(t,"DIV",{class:!0});var ve=i(H);y(rn.$$.fragment,ve),Ym=p(ve),ca=r(ve,"P",{});var df=i(ca);Qm=s(df,`ESM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),df.forEach(o),Xm=p(ve),ln=r(ve,"P",{});var Br=i(ln);ep=s(Br,"This model inherits from "),Kn=r(Br,"A",{href:!0});var cf=i(Kn);tp=s(cf,"TFPreTrainedModel"),cf.forEach(o),op=s(Br,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Br.forEach(o),np=p(ve),dn=r(ve,"P",{});var Vr=i(dn);sp=s(Vr,"This model is also a Keras "),cn=r(Vr,"A",{href:!0,rel:!0});var mf=i(cn);ap=s(mf,"Model"),mf.forEach(o),rp=s(Vr,` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Vr.forEach(o),ip=p(ve),J=r(ve,"DIV",{class:!0});var we=i(J);y(mn.$$.fragment,we),lp=p(we),Ve=r(we,"P",{});var rs=i(Ve);dp=s(rs,"The "),Bn=r(rs,"A",{href:!0});var pf=i(Bn);cp=s(pf,"TFEsmForTokenClassification"),pf.forEach(o),mp=s(rs," forward method, overrides the "),ma=r(rs,"CODE",{});var hf=i(ma);pp=s(hf,"__call__"),hf.forEach(o),hp=s(rs," special method."),rs.forEach(o),fp=p(we),y(Lt.$$.fragment,we),up=p(we),y(Dt.$$.fragment,we),gp=p(we),y(Nt.$$.fragment,we),we.forEach(o),ve.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Bf)),h(f,"id","esm"),h(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(f,"href","#esm"),h(c,"class","relative group"),h(Je,"id","overview"),h(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Je,"href","#overview"),h($e,"class","relative group"),h(Ut,"href","https://doi.org/10.1101/2022.07.20.500902"),h(Ut,"rel","nofollow"),h(Rt,"href","https://www.nature.com/articles/s41586-021-03819-2"),h(Rt,"rel","nofollow"),h(Wt,"href","https://github.com/facebookresearch/esm"),h(Wt,"rel","nofollow"),h(Ht,"href","https://huggingface.co/jasonliu"),h(Ht,"rel","nofollow"),h(Kt,"href","https://huggingface.co/Rocketknight1"),h(Kt,"rel","nofollow"),h(Bt,"href","https://huggingface.co/Rocketknight1"),h(Bt,"rel","nofollow"),h(Vt,"href","https://huggingface.co/sgugger"),h(Vt,"rel","nofollow"),h(Zt,"href","https://github.com/aqlaboratory/openfold"),h(Zt,"rel","nofollow"),h(Xe,"id","transformers.EsmConfig"),h(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xe,"href","#transformers.EsmConfig"),h(Ee,"class","relative group"),h(Yt,"href","https://huggingface.co/facebook/esm-1b"),h(Yt,"rel","nofollow"),h(vn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(wn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h($n,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig.to_dict"),h(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ot,"id","transformers.EsmTokenizer"),h(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ot,"href","#transformers.EsmTokenizer"),h(ze,"class","relative group"),h(En,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mn,"href","../glossary#token-type-ids"),h(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(zn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(st,"id","transformers.EsmModel"),h(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(st,"href","#transformers.EsmModel"),h(xe,"class","relative group"),h(qn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(mo,"rel","nofollow"),h(ho,"href","https://arxiv.org/abs/1706.03762"),h(ho,"rel","nofollow"),h(xn,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmModel"),h(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(it,"id","transformers.EsmForMaskedLM"),h(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(it,"href","#transformers.EsmForMaskedLM"),h(je,"class","relative group"),h(Cn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(To,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(To,"rel","nofollow"),h(jn,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmForMaskedLM"),h(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(mt,"id","transformers.EsmForSequenceClassification"),h(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(mt,"href","#transformers.EsmForSequenceClassification"),h(Se,"class","relative group"),h(Pn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Fo,"rel","nofollow"),h(Sn,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmForSequenceClassification"),h(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_t,"id","transformers.EsmForTokenClassification"),h(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_t,"href","#transformers.EsmForTokenClassification"),h(De,"class","relative group"),h(Ln,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(jo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(jo,"rel","nofollow"),h(Dn,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmForTokenClassification"),h(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(yt,"id","transformers.EsmForProteinFolding"),h(yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yt,"href","#transformers.EsmForProteinFolding"),h(Ae,"class","relative group"),h(Nn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ao,"rel","nofollow"),h(An,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmForProteinFolding"),h(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(wt,"id","transformers.TFEsmModel"),h(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wt,"href","#transformers.TFEsmModel"),h(Ie,"class","relative group"),h(On,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ho,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ho,"rel","nofollow"),h(In,"href","/docs/transformers/main/en/model_doc/esm#transformers.TFEsmModel"),h(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ft,"id","transformers.TFEsmForMaskedLM"),h(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ft,"href","#transformers.TFEsmForMaskedLM"),h(Re,"class","relative group"),h(Un,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Yo,"rel","nofollow"),h(Rn,"href","/docs/transformers/main/en/model_doc/esm#transformers.TFEsmForMaskedLM"),h(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xt,"id","transformers.TFEsmForSequenceClassification"),h(xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xt,"href","#transformers.TFEsmForSequenceClassification"),h(He,"class","relative group"),h(Wn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(nn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(nn,"rel","nofollow"),h(Hn,"href","/docs/transformers/main/en/model_doc/esm#transformers.TFEsmForSequenceClassification"),h(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(St,"id","transformers.TFEsmForTokenClassification"),h(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(St,"href","#transformers.TFEsmForTokenClassification"),h(Be,"class","relative group"),h(Kn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(cn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(cn,"rel","nofollow"),h(Bn,"href","/docs/transformers/main/en/model_doc/esm#transformers.TFEsmForTokenClassification"),h(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),k(t,_,g),k(t,c,g),e(c,f),e(f,b),v(l,b,null),e(c,u),e(c,M),e(M,Zr),k(t,ja,g),k(t,$e,g),e($e,Je),e(Je,is),v(It,is,null),e($e,Gr),e($e,ls),e(ls,Jr),k(t,Pa,g),k(t,Ye,g),e(Ye,Yr),e(Ye,Ut),e(Ut,Qr),e(Ye,Xr),k(t,Sa,g),k(t,Qe,g),e(Qe,ei),e(Qe,Rt),e(Rt,ti),e(Qe,oi),k(t,La,g),k(t,gn,g),e(gn,ni),k(t,Da,g),k(t,_n,g),e(_n,ds),e(ds,si),k(t,Na,g),k(t,kn,g),e(kn,ai),k(t,Aa,g),k(t,bn,g),e(bn,cs),e(cs,ri),k(t,Oa,g),k(t,Tn,g),e(Tn,ii),k(t,Ia,g),k(t,yn,g),e(yn,ms),e(ms,li),k(t,Ua,g),k(t,te,g),e(te,di),e(te,Wt),e(Wt,ci),e(te,mi),e(te,Ht),e(Ht,pi),e(te,hi),e(te,Kt),e(Kt,fi),e(te,ui),k(t,Ra,g),k(t,re,g),e(re,gi),e(re,Bt),e(Bt,_i),e(re,ki),e(re,Vt),e(Vt,bi),e(re,Ti),k(t,Wa,g),k(t,ie,g),e(ie,yi),e(ie,Zt),e(Zt,vi),e(ie,wi),e(ie,ps),e(ps,$i),e(ie,Ei),k(t,Ha,g),k(t,Ee,g),e(Ee,Xe),e(Xe,hs),v(Gt,hs,null),e(Ee,Fi),e(Ee,fs),e(fs,Mi),k(t,Ka,g),k(t,D,g),v(Jt,D,null),e(D,zi),e(D,Fe),e(Fe,qi),e(Fe,us),e(us,xi),e(Fe,Ci),e(Fe,Yt),e(Yt,ji),e(Fe,Pi),e(D,Si),e(D,Me),e(Me,Li),e(Me,vn),e(vn,Di),e(Me,Ni),e(Me,wn),e(wn,Ai),e(Me,Oi),e(D,Ii),v(et,D,null),e(D,Ui),e(D,tt),v(Qt,tt,null),e(tt,Ri),e(tt,Xt),e(Xt,Wi),e(Xt,$n),e($n,Hi),e(Xt,Ki),k(t,Ba,g),k(t,ze,g),e(ze,ot),e(ot,gs),v(eo,gs,null),e(ze,Bi),e(ze,_s),e(_s,Vi),k(t,Va,g),k(t,C,g),v(to,C,null),e(C,Zi),e(C,ks),e(ks,Gi),e(C,Ji),e(C,En),v(oo,En,null),e(C,Yi),e(C,nt),v(no,nt,null),e(nt,Qi),e(nt,qe),e(qe,Xi),e(qe,bs),e(bs,el),e(qe,tl),e(qe,Ts),e(Ts,ol),e(qe,nl),e(C,sl),e(C,le),v(so,le,null),e(le,al),e(le,Fn),e(Fn,rl),e(Fn,Mn),e(Mn,il),e(le,ll),e(le,ys),e(ys,dl),e(C,cl),e(C,zn),v(ao,zn,null),k(t,Za,g),k(t,xe,g),e(xe,st),e(st,vs),v(ro,vs,null),e(xe,ml),e(xe,ws),e(ws,pl),k(t,Ga,g),k(t,q,g),v(io,q,null),e(q,hl),e(q,$s),e($s,fl),e(q,ul),e(q,lo),e(lo,gl),e(lo,qn),e(qn,_l),e(lo,kl),e(q,bl),e(q,co),e(co,Tl),e(co,mo),e(mo,yl),e(co,vl),e(q,wl),e(q,po),e(po,$l),e(po,ho),e(ho,El),e(po,Fl),e(q,Ml),e(q,j),e(j,zl),e(j,Es),e(Es,ql),e(j,xl),e(j,Fs),e(Fs,Cl),e(j,jl),e(j,Ms),e(Ms,Pl),e(j,Sl),e(j,zs),e(zs,Ll),e(j,Dl),e(j,qs),e(qs,Nl),e(j,Al),e(j,xs),e(xs,Ol),e(j,Il),e(q,Ul),e(q,oe),v(fo,oe,null),e(oe,Rl),e(oe,Ce),e(Ce,Wl),e(Ce,xn),e(xn,Hl),e(Ce,Kl),e(Ce,Cs),e(Cs,Bl),e(Ce,Vl),e(oe,Zl),v(at,oe,null),e(oe,Gl),v(rt,oe,null),k(t,Ja,g),k(t,je,g),e(je,it),e(it,js),v(uo,js,null),e(je,Jl),e(je,Ps),e(Ps,Yl),k(t,Ya,g),k(t,N,g),v(go,N,null),e(N,Ql),e(N,_o),e(_o,Xl),e(_o,Ss),e(Ss,ed),e(_o,td),e(N,od),e(N,ko),e(ko,nd),e(ko,Cn),e(Cn,sd),e(ko,ad),e(N,rd),e(N,bo),e(bo,id),e(bo,To),e(To,ld),e(bo,dd),e(N,cd),e(N,K),v(yo,K,null),e(K,md),e(K,Pe),e(Pe,pd),e(Pe,jn),e(jn,hd),e(Pe,fd),e(Pe,Ls),e(Ls,ud),e(Pe,gd),e(K,_d),v(lt,K,null),e(K,kd),v(dt,K,null),e(K,bd),v(ct,K,null),k(t,Qa,g),k(t,Se,g),e(Se,mt),e(mt,Ds),v(vo,Ds,null),e(Se,Td),e(Se,Ns),e(Ns,yd),k(t,Xa,g),k(t,A,g),v(wo,A,null),e(A,vd),e(A,As),e(As,wd),e(A,$d),e(A,$o),e($o,Ed),e($o,Pn),e(Pn,Fd),e($o,Md),e(A,zd),e(A,Eo),e(Eo,qd),e(Eo,Fo),e(Fo,xd),e(Eo,Cd),e(A,jd),e(A,x),v(Mo,x,null),e(x,Pd),e(x,Le),e(Le,Sd),e(Le,Sn),e(Sn,Ld),e(Le,Dd),e(Le,Os),e(Os,Nd),e(Le,Ad),e(x,Od),v(pt,x,null),e(x,Id),v(ht,x,null),e(x,Ud),v(ft,x,null),e(x,Rd),v(ut,x,null),e(x,Wd),v(gt,x,null),k(t,er,g),k(t,De,g),e(De,_t),e(_t,Is),v(zo,Is,null),e(De,Hd),e(De,Us),e(Us,Kd),k(t,tr,g),k(t,O,g),v(qo,O,null),e(O,Bd),e(O,Rs),e(Rs,Vd),e(O,Zd),e(O,xo),e(xo,Gd),e(xo,Ln),e(Ln,Jd),e(xo,Yd),e(O,Qd),e(O,Co),e(Co,Xd),e(Co,jo),e(jo,ec),e(Co,tc),e(O,oc),e(O,B),v(Po,B,null),e(B,nc),e(B,Ne),e(Ne,sc),e(Ne,Dn),e(Dn,ac),e(Ne,rc),e(Ne,Ws),e(Ws,ic),e(Ne,lc),e(B,dc),v(kt,B,null),e(B,cc),v(bt,B,null),e(B,mc),v(Tt,B,null),k(t,or,g),k(t,Ae,g),e(Ae,yt),e(yt,Hs),v(So,Hs,null),e(Ae,pc),e(Ae,Ks),e(Ks,hc),k(t,nr,g),k(t,I,g),v(Lo,I,null),e(I,fc),e(I,Bs),e(Bs,uc),e(I,gc),e(I,Do),e(Do,_c),e(Do,Nn),e(Nn,kc),e(Do,bc),e(I,Tc),e(I,No),e(No,yc),e(No,Ao),e(Ao,vc),e(No,wc),e(I,$c),e(I,V),v(Oo,V,null),e(V,Ec),e(V,Oe),e(Oe,Fc),e(Oe,An),e(An,Mc),e(Oe,zc),e(Oe,Vs),e(Vs,qc),e(Oe,xc),e(V,Cc),v(vt,V,null),e(V,jc),e(V,Zs),e(Zs,Pc),e(V,Sc),e(V,Gs),e(Gs,Lc),k(t,sr,g),k(t,Ie,g),e(Ie,wt),e(wt,Js),v(Io,Js,null),e(Ie,Dc),e(Ie,Ys),e(Ys,Nc),k(t,ar,g),k(t,U,g),v(Uo,U,null),e(U,Ac),e(U,Qs),e(Qs,Oc),e(U,Ic),e(U,Ro),e(Ro,Uc),e(Ro,On),e(On,Rc),e(Ro,Wc),e(U,Hc),e(U,Wo),e(Wo,Kc),e(Wo,Ho),e(Ho,Bc),e(Wo,Vc),e(U,Zc),e(U,ne),v(Ko,ne,null),e(ne,Gc),e(ne,Ue),e(Ue,Jc),e(Ue,In),e(In,Yc),e(Ue,Qc),e(Ue,Xs),e(Xs,Xc),e(Ue,em),e(ne,tm),v($t,ne,null),e(ne,om),v(Et,ne,null),k(t,rr,g),k(t,Re,g),e(Re,Ft),e(Ft,ea),v(Bo,ea,null),e(Re,nm),e(Re,ta),e(ta,sm),k(t,ir,g),k(t,R,g),v(Vo,R,null),e(R,am),e(R,Zo),e(Zo,rm),e(Zo,oa),e(oa,im),e(Zo,lm),e(R,dm),e(R,Go),e(Go,cm),e(Go,Un),e(Un,mm),e(Go,pm),e(R,hm),e(R,Jo),e(Jo,fm),e(Jo,Yo),e(Yo,um),e(Jo,gm),e(R,_m),e(R,Z),v(Qo,Z,null),e(Z,km),e(Z,We),e(We,bm),e(We,Rn),e(Rn,Tm),e(We,ym),e(We,na),e(na,vm),e(We,wm),e(Z,$m),v(Mt,Z,null),e(Z,Em),v(zt,Z,null),e(Z,Fm),v(qt,Z,null),k(t,lr,g),k(t,He,g),e(He,xt),e(xt,sa),v(Xo,sa,null),e(He,Mm),e(He,aa),e(aa,zm),k(t,dr,g),k(t,W,g),v(en,W,null),e(W,qm),e(W,ra),e(ra,xm),e(W,Cm),e(W,tn),e(tn,jm),e(tn,Wn),e(Wn,Pm),e(tn,Sm),e(W,Lm),e(W,on),e(on,Dm),e(on,nn),e(nn,Nm),e(on,Am),e(W,Om),e(W,G),v(sn,G,null),e(G,Im),e(G,Ke),e(Ke,Um),e(Ke,Hn),e(Hn,Rm),e(Ke,Wm),e(Ke,ia),e(ia,Hm),e(Ke,Km),e(G,Bm),v(Ct,G,null),e(G,Vm),v(jt,G,null),e(G,Zm),v(Pt,G,null),k(t,cr,g),k(t,Be,g),e(Be,St),e(St,la),v(an,la,null),e(Be,Gm),e(Be,da),e(da,Jm),k(t,mr,g),k(t,H,g),v(rn,H,null),e(H,Ym),e(H,ca),e(ca,Qm),e(H,Xm),e(H,ln),e(ln,ep),e(ln,Kn),e(Kn,tp),e(ln,op),e(H,np),e(H,dn),e(dn,sp),e(dn,cn),e(cn,ap),e(dn,rp),e(H,ip),e(H,J),v(mn,J,null),e(J,lp),e(J,Ve),e(Ve,dp),e(Ve,Bn),e(Bn,cp),e(Ve,mp),e(Ve,ma),e(ma,pp),e(Ve,hp),e(J,fp),v(Lt,J,null),e(J,up),v(Dt,J,null),e(J,gp),v(Nt,J,null),pr=!0},p(t,[g]){const pn={};g&2&&(pn.$$scope={dirty:g,ctx:t}),et.$set(pn);const pa={};g&2&&(pa.$$scope={dirty:g,ctx:t}),at.$set(pa);const ha={};g&2&&(ha.$$scope={dirty:g,ctx:t}),rt.$set(ha);const fa={};g&2&&(fa.$$scope={dirty:g,ctx:t}),lt.$set(fa);const hn={};g&2&&(hn.$$scope={dirty:g,ctx:t}),dt.$set(hn);const ua={};g&2&&(ua.$$scope={dirty:g,ctx:t}),ct.$set(ua);const ga={};g&2&&(ga.$$scope={dirty:g,ctx:t}),pt.$set(ga);const _a={};g&2&&(_a.$$scope={dirty:g,ctx:t}),ht.$set(_a);const fn={};g&2&&(fn.$$scope={dirty:g,ctx:t}),ft.$set(fn);const ka={};g&2&&(ka.$$scope={dirty:g,ctx:t}),ut.$set(ka);const un={};g&2&&(un.$$scope={dirty:g,ctx:t}),gt.$set(un);const ba={};g&2&&(ba.$$scope={dirty:g,ctx:t}),kt.$set(ba);const Ta={};g&2&&(Ta.$$scope={dirty:g,ctx:t}),bt.$set(Ta);const ya={};g&2&&(ya.$$scope={dirty:g,ctx:t}),Tt.$set(ya);const va={};g&2&&(va.$$scope={dirty:g,ctx:t}),vt.$set(va);const wa={};g&2&&(wa.$$scope={dirty:g,ctx:t}),$t.$set(wa);const $a={};g&2&&($a.$$scope={dirty:g,ctx:t}),Et.$set($a);const Ea={};g&2&&(Ea.$$scope={dirty:g,ctx:t}),Mt.$set(Ea);const Fa={};g&2&&(Fa.$$scope={dirty:g,ctx:t}),zt.$set(Fa);const Ma={};g&2&&(Ma.$$scope={dirty:g,ctx:t}),qt.$set(Ma);const za={};g&2&&(za.$$scope={dirty:g,ctx:t}),Ct.$set(za);const ae={};g&2&&(ae.$$scope={dirty:g,ctx:t}),jt.$set(ae);const qa={};g&2&&(qa.$$scope={dirty:g,ctx:t}),Pt.$set(qa);const xa={};g&2&&(xa.$$scope={dirty:g,ctx:t}),Lt.$set(xa);const Ca={};g&2&&(Ca.$$scope={dirty:g,ctx:t}),Dt.$set(Ca);const Ze={};g&2&&(Ze.$$scope={dirty:g,ctx:t}),Nt.$set(Ze)},i(t){pr||(w(l.$$.fragment,t),w(It.$$.fragment,t),w(Gt.$$.fragment,t),w(Jt.$$.fragment,t),w(et.$$.fragment,t),w(Qt.$$.fragment,t),w(eo.$$.fragment,t),w(to.$$.fragment,t),w(oo.$$.fragment,t),w(no.$$.fragment,t),w(so.$$.fragment,t),w(ao.$$.fragment,t),w(ro.$$.fragment,t),w(io.$$.fragment,t),w(fo.$$.fragment,t),w(at.$$.fragment,t),w(rt.$$.fragment,t),w(uo.$$.fragment,t),w(go.$$.fragment,t),w(yo.$$.fragment,t),w(lt.$$.fragment,t),w(dt.$$.fragment,t),w(ct.$$.fragment,t),w(vo.$$.fragment,t),w(wo.$$.fragment,t),w(Mo.$$.fragment,t),w(pt.$$.fragment,t),w(ht.$$.fragment,t),w(ft.$$.fragment,t),w(ut.$$.fragment,t),w(gt.$$.fragment,t),w(zo.$$.fragment,t),w(qo.$$.fragment,t),w(Po.$$.fragment,t),w(kt.$$.fragment,t),w(bt.$$.fragment,t),w(Tt.$$.fragment,t),w(So.$$.fragment,t),w(Lo.$$.fragment,t),w(Oo.$$.fragment,t),w(vt.$$.fragment,t),w(Io.$$.fragment,t),w(Uo.$$.fragment,t),w(Ko.$$.fragment,t),w($t.$$.fragment,t),w(Et.$$.fragment,t),w(Bo.$$.fragment,t),w(Vo.$$.fragment,t),w(Qo.$$.fragment,t),w(Mt.$$.fragment,t),w(zt.$$.fragment,t),w(qt.$$.fragment,t),w(Xo.$$.fragment,t),w(en.$$.fragment,t),w(sn.$$.fragment,t),w(Ct.$$.fragment,t),w(jt.$$.fragment,t),w(Pt.$$.fragment,t),w(an.$$.fragment,t),w(rn.$$.fragment,t),w(mn.$$.fragment,t),w(Lt.$$.fragment,t),w(Dt.$$.fragment,t),w(Nt.$$.fragment,t),pr=!0)},o(t){$(l.$$.fragment,t),$(It.$$.fragment,t),$(Gt.$$.fragment,t),$(Jt.$$.fragment,t),$(et.$$.fragment,t),$(Qt.$$.fragment,t),$(eo.$$.fragment,t),$(to.$$.fragment,t),$(oo.$$.fragment,t),$(no.$$.fragment,t),$(so.$$.fragment,t),$(ao.$$.fragment,t),$(ro.$$.fragment,t),$(io.$$.fragment,t),$(fo.$$.fragment,t),$(at.$$.fragment,t),$(rt.$$.fragment,t),$(uo.$$.fragment,t),$(go.$$.fragment,t),$(yo.$$.fragment,t),$(lt.$$.fragment,t),$(dt.$$.fragment,t),$(ct.$$.fragment,t),$(vo.$$.fragment,t),$(wo.$$.fragment,t),$(Mo.$$.fragment,t),$(pt.$$.fragment,t),$(ht.$$.fragment,t),$(ft.$$.fragment,t),$(ut.$$.fragment,t),$(gt.$$.fragment,t),$(zo.$$.fragment,t),$(qo.$$.fragment,t),$(Po.$$.fragment,t),$(kt.$$.fragment,t),$(bt.$$.fragment,t),$(Tt.$$.fragment,t),$(So.$$.fragment,t),$(Lo.$$.fragment,t),$(Oo.$$.fragment,t),$(vt.$$.fragment,t),$(Io.$$.fragment,t),$(Uo.$$.fragment,t),$(Ko.$$.fragment,t),$($t.$$.fragment,t),$(Et.$$.fragment,t),$(Bo.$$.fragment,t),$(Vo.$$.fragment,t),$(Qo.$$.fragment,t),$(Mt.$$.fragment,t),$(zt.$$.fragment,t),$(qt.$$.fragment,t),$(Xo.$$.fragment,t),$(en.$$.fragment,t),$(sn.$$.fragment,t),$(Ct.$$.fragment,t),$(jt.$$.fragment,t),$(Pt.$$.fragment,t),$(an.$$.fragment,t),$(rn.$$.fragment,t),$(mn.$$.fragment,t),$(Lt.$$.fragment,t),$(Dt.$$.fragment,t),$(Nt.$$.fragment,t),pr=!1},d(t){o(d),t&&o(_),t&&o(c),E(l),t&&o(ja),t&&o($e),E(It),t&&o(Pa),t&&o(Ye),t&&o(Sa),t&&o(Qe),t&&o(La),t&&o(gn),t&&o(Da),t&&o(_n),t&&o(Na),t&&o(kn),t&&o(Aa),t&&o(bn),t&&o(Oa),t&&o(Tn),t&&o(Ia),t&&o(yn),t&&o(Ua),t&&o(te),t&&o(Ra),t&&o(re),t&&o(Wa),t&&o(ie),t&&o(Ha),t&&o(Ee),E(Gt),t&&o(Ka),t&&o(D),E(Jt),E(et),E(Qt),t&&o(Ba),t&&o(ze),E(eo),t&&o(Va),t&&o(C),E(to),E(oo),E(no),E(so),E(ao),t&&o(Za),t&&o(xe),E(ro),t&&o(Ga),t&&o(q),E(io),E(fo),E(at),E(rt),t&&o(Ja),t&&o(je),E(uo),t&&o(Ya),t&&o(N),E(go),E(yo),E(lt),E(dt),E(ct),t&&o(Qa),t&&o(Se),E(vo),t&&o(Xa),t&&o(A),E(wo),E(Mo),E(pt),E(ht),E(ft),E(ut),E(gt),t&&o(er),t&&o(De),E(zo),t&&o(tr),t&&o(O),E(qo),E(Po),E(kt),E(bt),E(Tt),t&&o(or),t&&o(Ae),E(So),t&&o(nr),t&&o(I),E(Lo),E(Oo),E(vt),t&&o(sr),t&&o(Ie),E(Io),t&&o(ar),t&&o(U),E(Uo),E(Ko),E($t),E(Et),t&&o(rr),t&&o(Re),E(Bo),t&&o(ir),t&&o(R),E(Vo),E(Qo),E(Mt),E(zt),E(qt),t&&o(lr),t&&o(He),E(Xo),t&&o(dr),t&&o(W),E(en),E(sn),E(Ct),E(jt),E(Pt),t&&o(cr),t&&o(Be),E(an),t&&o(mr),t&&o(H),E(rn),E(mn),E(Lt),E(Dt),E(Nt)}}}const Bf={local:"esm",sections:[{local:"overview",title:"Overview"},{local:"transformers.EsmConfig",title:"EsmConfig"},{local:"transformers.EsmTokenizer",title:"EsmTokenizer"},{local:"transformers.EsmModel",title:"EsmModel"},{local:"transformers.EsmForMaskedLM",title:"EsmForMaskedLM"},{local:"transformers.EsmForSequenceClassification",title:"EsmForSequenceClassification"},{local:"transformers.EsmForTokenClassification",title:"EsmForTokenClassification"},{local:"transformers.EsmForProteinFolding",title:"EsmForProteinFolding"},{local:"transformers.TFEsmModel",title:"TFEsmModel"},{local:"transformers.TFEsmForMaskedLM",title:"TFEsmForMaskedLM"},{local:"transformers.TFEsmForSequenceClassification",title:"TFEsmForSequenceClassification"},{local:"transformers.TFEsmForTokenClassification",title:"TFEsmForTokenClassification"}],title:"ESM"};function Vf(F){return kf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class eu extends ff{constructor(d){super();uf(this,d,Vf,Kf,gf,{})}}export{eu as default,Bf as metadata};
