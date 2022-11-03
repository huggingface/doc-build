import{S as lf,i as df,s as cf,e as r,k as p,w as T,t as s,M as mf,c as i,d as o,m as h,a as l,x as y,h as a,b as u,G as e,g as k,y as v,q as $,o as w,B as E,v as pf,L as j}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ze}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as P}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as X}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as C}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function hf(F){let d,_,c,m,b;return m=new P({props:{code:`from transformers import EsmModel, EsmConfig

# Initializing a ESM facebook/esm-1b style configuration >>> configuration = EsmConfig()

# Initializing a model from the configuration >>> model = ESMModel(configuration)

# Accessing the model configuration >>> configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmModel, EsmConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ESM facebook/esm-1b style configuration &gt;&gt;&gt; configuration = EsmConfig()</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration &gt;&gt;&gt; model = ESMModel(configuration)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration &gt;&gt;&gt; configuration = model.config</span>`}}),{c(){d=r("p"),_=s("Examples:"),c=p(),T(m.$$.fragment)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Examples:"),f.forEach(o),c=h(n),y(m.$$.fragment,n)},m(n,f){k(n,d,f),e(d,_),k(n,c,f),v(m,n,f),b=!0},p:j,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){w(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),E(m,n)}}}function ff(F){let d,_,c,m,b;return{c(){d=r("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(f,"CODE",{});var M=l(c);m=a(M,"Module"),M.forEach(o),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){k(n,d,f),e(d,_),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function uf(F){let d,_,c,m,b;return m=new P({props:{code:`from transformers import EsmTokenizer, EsmModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=s("Example:"),c=p(),T(m.$$.fragment)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Example:"),f.forEach(o),c=h(n),y(m.$$.fragment,n)},m(n,f){k(n,d,f),e(d,_),k(n,c,f),v(m,n,f),b=!0},p:j,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){w(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),E(m,n)}}}function gf(F){let d,_,c,m,b;return{c(){d=r("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(f,"CODE",{});var M=l(c);m=a(M,"Module"),M.forEach(o),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){k(n,d,f),e(d,_),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function _f(F){let d,_,c,m,b;return m=new P({props:{code:`from transformers import EsmTokenizer, EsmForMaskedLM
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
`}}),{c(){d=r("p"),_=s("Example:"),c=p(),T(m.$$.fragment)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Example:"),f.forEach(o),c=h(n),y(m.$$.fragment,n)},m(n,f){k(n,d,f),e(d,_),k(n,c,f),v(m,n,f),b=!0},p:j,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){w(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),E(m,n)}}}function kf(F){let d,_;return d=new P({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){v(d,c,m),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){w(d.$$.fragment,c),_=!1},d(c){E(d,c)}}}function bf(F){let d,_,c,m,b;return{c(){d=r("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(f,"CODE",{});var M=l(c);m=a(M,"Module"),M.forEach(o),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){k(n,d,f),e(d,_),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function Tf(F){let d,_,c,m,b;return m=new P({props:{code:`import torch
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
`}}),{c(){d=r("p"),_=s("Example of single-label classification:"),c=p(),T(m.$$.fragment)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Example of single-label classification:"),f.forEach(o),c=h(n),y(m.$$.fragment,n)},m(n,f){k(n,d,f),e(d,_),k(n,c,f),v(m,n,f),b=!0},p:j,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){w(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),E(m,n)}}}function yf(F){let d,_;return d=new P({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){v(d,c,m),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){w(d.$$.fragment,c),_=!1},d(c){E(d,c)}}}function vf(F){let d,_,c,m,b;return m=new P({props:{code:`import torch
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
`}}),{c(){d=r("p"),_=s("Example of multi-label classification:"),c=p(),T(m.$$.fragment)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Example of multi-label classification:"),f.forEach(o),c=h(n),y(m.$$.fragment,n)},m(n,f){k(n,d,f),e(d,_),k(n,c,f),v(m,n,f),b=!0},p:j,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){w(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),E(m,n)}}}function $f(F){let d,_;return d=new P({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){v(d,c,m),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){w(d.$$.fragment,c),_=!1},d(c){E(d,c)}}}function wf(F){let d,_,c,m,b;return{c(){d=r("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(f,"CODE",{});var M=l(c);m=a(M,"Module"),M.forEach(o),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){k(n,d,f),e(d,_),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function Ef(F){let d,_,c,m,b;return m=new P({props:{code:`from transformers import EsmTokenizer, EsmForTokenClassification
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
`}}),{c(){d=r("p"),_=s("Example:"),c=p(),T(m.$$.fragment)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Example:"),f.forEach(o),c=h(n),y(m.$$.fragment,n)},m(n,f){k(n,d,f),e(d,_),k(n,c,f),v(m,n,f),b=!0},p:j,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){w(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),E(m,n)}}}function Ff(F){let d,_;return d=new P({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){v(d,c,m),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){w(d.$$.fragment,c),_=!1},d(c){E(d,c)}}}function Mf(F){let d,_,c,m,b;return{c(){d=r("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(f,"CODE",{});var M=l(c);m=a(M,"Module"),M.forEach(o),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){k(n,d,f),e(d,_),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function zf(F){let d,_,c,m,b;return m=new P({props:{code:`from transformers import AutoTokenizer, EsmForProteinFolding

model = EsmForProteinFolding.from_pretrained("facebook/esmfold_v1")
tokenizer = AutoTokenizer.from_pretrained("facebook/esmfold_v1")
inputs = tokenizer(["MLKNVQVQLV"], return_tensors="pt", add_special_tokens=False)  # A tiny random peptide
outputs = model(**inputs)
folded_positions = outputs.positions`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, EsmForProteinFolding

<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForProteinFolding.from_pretrained(<span class="hljs-string">&quot;facebook/esmfold_v1&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esmfold_v1&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;MLKNVQVQLV&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>)  <span class="hljs-comment"># A tiny random peptide</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>folded_positions = outputs.positions`}}),{c(){d=r("p"),_=s("Example:"),c=p(),T(m.$$.fragment)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Example:"),f.forEach(o),c=h(n),y(m.$$.fragment,n)},m(n,f){k(n,d,f),e(d,_),k(n,c,f),v(m,n,f),b=!0},p:j,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){w(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),E(m,n)}}}function qf(F){let d,_,c,m,b;return{c(){d=r("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(f,"CODE",{});var M=l(c);m=a(M,"Module"),M.forEach(o),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){k(n,d,f),e(d,_),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function xf(F){let d,_,c,m,b;return m=new P({props:{code:`from transformers import EsmTokenizer, TFEsmModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=s("Example:"),c=p(),T(m.$$.fragment)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Example:"),f.forEach(o),c=h(n),y(m.$$.fragment,n)},m(n,f){k(n,d,f),e(d,_),k(n,c,f),v(m,n,f),b=!0},p:j,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){w(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),E(m,n)}}}function Cf(F){let d,_,c,m,b;return{c(){d=r("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(f,"CODE",{});var M=l(c);m=a(M,"Module"),M.forEach(o),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){k(n,d,f),e(d,_),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function jf(F){let d,_,c,m,b;return m=new P({props:{code:`from transformers import EsmTokenizer, TFEsmForMaskedLM
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
`}}),{c(){d=r("p"),_=s("Example:"),c=p(),T(m.$$.fragment)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Example:"),f.forEach(o),c=h(n),y(m.$$.fragment,n)},m(n,f){k(n,d,f),e(d,_),k(n,c,f),v(m,n,f),b=!0},p:j,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){w(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),E(m,n)}}}function Pf(F){let d,_;return d=new P({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){v(d,c,m),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){w(d.$$.fragment,c),_=!1},d(c){E(d,c)}}}function Sf(F){let d,_,c,m,b;return{c(){d=r("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(f,"CODE",{});var M=l(c);m=a(M,"Module"),M.forEach(o),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){k(n,d,f),e(d,_),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function Lf(F){let d,_,c,m,b;return m=new P({props:{code:`from transformers import EsmTokenizer, TFEsmForSequenceClassification
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
`}}),{c(){d=r("p"),_=s("Example:"),c=p(),T(m.$$.fragment)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Example:"),f.forEach(o),c=h(n),y(m.$$.fragment,n)},m(n,f){k(n,d,f),e(d,_),k(n,c,f),v(m,n,f),b=!0},p:j,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){w(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),E(m,n)}}}function Nf(F){let d,_;return d=new P({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){v(d,c,m),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){w(d.$$.fragment,c),_=!1},d(c){E(d,c)}}}function Af(F){let d,_,c,m,b;return{c(){d=r("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(f,"CODE",{});var M=l(c);m=a(M,"Module"),M.forEach(o),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){k(n,d,f),e(d,_),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function Df(F){let d,_,c,m,b;return m=new P({props:{code:`from transformers import EsmTokenizer, TFEsmForTokenClassification
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
`}}),{c(){d=r("p"),_=s("Example:"),c=p(),T(m.$$.fragment)},l(n){d=i(n,"P",{});var f=l(d);_=a(f,"Example:"),f.forEach(o),c=h(n),y(m.$$.fragment,n)},m(n,f){k(n,d,f),e(d,_),k(n,c,f),v(m,n,f),b=!0},p:j,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){w(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),E(m,n)}}}function Of(F){let d,_;return d=new P({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){v(d,c,m),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){w(d.$$.fragment,c),_=!1},d(c){E(d,c)}}}function If(F){let d,_,c,m,b,n,f,M,Zr,ja,$e,Ge,ls,Ut,Gr,ds,Jr,Pa,Je,Qr,Rt,Yr,Xr,Sa,Qe,ei,Wt,ti,oi,La,_n,ni,Na,kn,cs,si,Aa,bn,ai,Da,Tn,ms,ri,Oa,yn,ii,Ia,vn,ps,li,Ua,ee,di,Ht,ci,mi,Kt,pi,hi,Bt,fi,ui,Ra,re,gi,Vt,_i,ki,Zt,bi,Ti,Wa,ie,yi,Gt,vi,$i,hs,wi,Ei,Ha,we,Ye,fs,Jt,Fi,us,Mi,Ka,N,Qt,zi,Ee,qi,gs,xi,Ci,Yt,ji,Pi,Si,Fe,Li,$n,Ni,Ai,wn,Di,Oi,Ii,Xe,Ui,et,Xt,Ri,eo,Wi,En,Hi,Ki,Ba,Me,tt,_s,to,Bi,ks,Vi,Va,S,oo,Zi,bs,Gi,Ji,Fn,no,Qi,ot,so,Yi,ze,Xi,Ts,el,tl,ys,ol,nl,sl,le,ao,al,Mn,rl,zn,il,ll,vs,dl,cl,qn,ro,Za,qe,nt,$s,io,ml,ws,pl,Ga,q,lo,hl,Es,fl,ul,co,gl,xn,_l,kl,bl,mo,Tl,po,yl,vl,$l,ho,wl,fo,El,Fl,Ml,L,zl,Fs,ql,xl,Ms,Cl,jl,zs,Pl,Sl,qs,Ll,Nl,xs,Al,Dl,Cs,Ol,Il,Ul,te,uo,Rl,xe,Wl,Cn,Hl,Kl,js,Bl,Vl,Zl,st,Gl,at,Ja,Ce,rt,Ps,go,Jl,Ss,Ql,Qa,A,_o,Yl,ko,Xl,Ls,ed,td,od,bo,nd,jn,sd,ad,rd,To,id,yo,ld,dd,cd,K,vo,md,je,pd,Pn,hd,fd,Ns,ud,gd,_d,it,kd,lt,bd,dt,Ya,Pe,ct,As,$o,Td,Ds,yd,Xa,D,wo,vd,Os,$d,wd,Eo,Ed,Sn,Fd,Md,zd,Fo,qd,Mo,xd,Cd,jd,x,zo,Pd,Se,Sd,Ln,Ld,Nd,Is,Ad,Dd,Od,mt,Id,pt,Ud,ht,Rd,ft,Wd,ut,er,Le,gt,Us,qo,Hd,Rs,Kd,tr,O,xo,Bd,Ws,Vd,Zd,Co,Gd,Nn,Jd,Qd,Yd,jo,Xd,Po,ec,tc,oc,B,So,nc,Ne,sc,An,ac,rc,Hs,ic,lc,dc,_t,cc,kt,mc,bt,or,Ae,Tt,Ks,Lo,pc,Bs,hc,nr,I,No,fc,Vs,uc,gc,Ao,_c,Dn,kc,bc,Tc,Do,yc,Oo,vc,$c,wc,oe,Io,Ec,De,Fc,On,Mc,zc,Zs,qc,xc,Cc,yt,jc,vt,sr,Oe,$t,Gs,Uo,Pc,Js,Sc,ar,U,Ro,Lc,Qs,Nc,Ac,Wo,Dc,In,Oc,Ic,Uc,Ho,Rc,Ko,Wc,Hc,Kc,ne,Bo,Bc,Ie,Vc,Un,Zc,Gc,Ys,Jc,Qc,Yc,wt,Xc,Et,rr,Ue,Ft,Xs,Vo,em,ea,tm,ir,R,Zo,om,Go,nm,ta,sm,am,rm,Jo,im,Rn,lm,dm,cm,Qo,mm,Yo,pm,hm,fm,V,Xo,um,Re,gm,Wn,_m,km,oa,bm,Tm,ym,Mt,vm,zt,$m,qt,lr,We,xt,na,en,wm,sa,Em,dr,W,tn,Fm,aa,Mm,zm,on,qm,Hn,xm,Cm,jm,nn,Pm,sn,Sm,Lm,Nm,Z,an,Am,He,Dm,Kn,Om,Im,ra,Um,Rm,Wm,Ct,Hm,jt,Km,Pt,cr,Ke,St,ia,rn,Bm,la,Vm,mr,H,ln,Zm,da,Gm,Jm,dn,Qm,Bn,Ym,Xm,ep,cn,tp,mn,op,np,sp,G,pn,ap,Be,rp,Vn,ip,lp,ca,dp,cp,mp,Lt,pp,Nt,hp,At,pr;return n=new X({}),Ut=new X({}),Jt=new X({}),Qt=new z({props:{name:"class transformers.EsmConfig",anchor:"transformers.EsmConfig",parameters:[{name:"vocab_size",val:" = None"},{name:"mask_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1026"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"emb_layer_norm_before",val:" = None"},{name:"token_dropout",val:" = False"},{name:"is_folding_model",val:" = False"},{name:"esmfold_config",val:" = None"},{name:"vocab_list",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EsmConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
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
When this is enabled, masked tokens are treated as if they had been dropped out by input dropout.`,name:"token_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/configuration_esm.py#L33"}}),Xe=new C({props:{anchor:"transformers.EsmConfig.example",$$slots:{default:[hf]},$$scope:{ctx:F}}}),Xt=new z({props:{name:"to_dict",anchor:"transformers.EsmConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/configuration_esm.py#L167",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),to=new X({}),oo=new z({props:{name:"class transformers.EsmTokenizer",anchor:"transformers.EsmTokenizer",parameters:[{name:"vocab_file",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L47"}}),no=new z({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.EsmTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L91"}}),so=new z({props:{name:"get_special_tokens_mask",anchor:"transformers.EsmTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.EsmTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.EsmTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.EsmTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L100",returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),ao=new z({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.EsmTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.EsmTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.EsmTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2987",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ro=new z({props:{name:"save_vocabulary",anchor:"transformers.EsmTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:""},{name:"filename_prefix",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L131"}}),io=new X({}),lo=new z({props:{name:"class transformers.EsmModel",anchor:"transformers.EsmModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.EsmModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L722"}}),uo=new z({props:{name:"forward",anchor:"transformers.EsmModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.EsmModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>((batch_size, sequence_length))</code>) &#x2014;
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
`}}),st=new Ze({props:{$$slots:{default:[ff]},$$scope:{ctx:F}}}),at=new C({props:{anchor:"transformers.EsmModel.forward.example",$$slots:{default:[uf]},$$scope:{ctx:F}}}),go=new X({}),_o=new z({props:{name:"class transformers.EsmForMaskedLM",anchor:"transformers.EsmForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L898"}}),vo=new z({props:{name:"forward",anchor:"transformers.EsmForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.EsmForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),it=new Ze({props:{$$slots:{default:[gf]},$$scope:{ctx:F}}}),lt=new C({props:{anchor:"transformers.EsmForMaskedLM.forward.example",$$slots:{default:[_f]},$$scope:{ctx:F}}}),dt=new C({props:{anchor:"transformers.EsmForMaskedLM.forward.example-2",$$slots:{default:[kf]},$$scope:{ctx:F}}}),$o=new X({}),wo=new z({props:{name:"class transformers.EsmForSequenceClassification",anchor:"transformers.EsmForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1014"}}),zo=new z({props:{name:"forward",anchor:"transformers.EsmForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.EsmForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),mt=new Ze({props:{$$slots:{default:[bf]},$$scope:{ctx:F}}}),pt=new C({props:{anchor:"transformers.EsmForSequenceClassification.forward.example",$$slots:{default:[Tf]},$$scope:{ctx:F}}}),ht=new C({props:{anchor:"transformers.EsmForSequenceClassification.forward.example-2",$$slots:{default:[yf]},$$scope:{ctx:F}}}),ft=new C({props:{anchor:"transformers.EsmForSequenceClassification.forward.example-3",$$slots:{default:[vf]},$$scope:{ctx:F}}}),ut=new C({props:{anchor:"transformers.EsmForSequenceClassification.forward.example-4",$$slots:{default:[$f]},$$scope:{ctx:F}}}),qo=new X({}),xo=new z({props:{name:"class transformers.EsmForTokenClassification",anchor:"transformers.EsmForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1109"}}),So=new z({props:{name:"forward",anchor:"transformers.EsmForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.EsmForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),_t=new Ze({props:{$$slots:{default:[wf]},$$scope:{ctx:F}}}),kt=new C({props:{anchor:"transformers.EsmForTokenClassification.forward.example",$$slots:{default:[Ef]},$$scope:{ctx:F}}}),bt=new C({props:{anchor:"transformers.EsmForTokenClassification.forward.example-2",$$slots:{default:[Ff]},$$scope:{ctx:F}}}),Lo=new X({}),No=new z({props:{name:"class transformers.EsmForProteinFolding",anchor:"transformers.EsmForProteinFolding",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForProteinFolding.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esmfold.py#L2021"}}),Io=new z({props:{name:"forward",anchor:"transformers.EsmForProteinFolding.forward",parameters:[{name:"input_ids",val:": Tensor"},{name:"attention_mask",val:": Tensor = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"masking_pattern",val:": typing.Optional[torch.Tensor] = None"},{name:"num_recycles",val:": typing.Optional[int] = None"}],parametersDescription:[{anchor:"transformers.EsmForProteinFolding.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
used.`,name:"num_recycles"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esmfold.py#L2083",returnDescription:`
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
`}}),yt=new Ze({props:{$$slots:{default:[Mf]},$$scope:{ctx:F}}}),vt=new C({props:{anchor:"transformers.EsmForProteinFolding.forward.example",$$slots:{default:[zf]},$$scope:{ctx:F}}}),Uo=new X({}),Ro=new z({props:{name:"class transformers.TFEsmModel",anchor:"transformers.TFEsmModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEsmModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L914"}}),Bo=new z({props:{name:"call",anchor:"transformers.TFEsmModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFEsmModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),wt=new Ze({props:{$$slots:{default:[qf]},$$scope:{ctx:F}}}),Et=new C({props:{anchor:"transformers.TFEsmModel.call.example",$$slots:{default:[xf]},$$scope:{ctx:F}}}),Vo=new X({}),Zo=new z({props:{name:"class transformers.TFEsmForMaskedLM",anchor:"transformers.TFEsmForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEsmForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1016"}}),Xo=new z({props:{name:"call",anchor:"transformers.TFEsmForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFEsmForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Mt=new Ze({props:{$$slots:{default:[Cf]},$$scope:{ctx:F}}}),zt=new C({props:{anchor:"transformers.TFEsmForMaskedLM.call.example",$$slots:{default:[jf]},$$scope:{ctx:F}}}),qt=new C({props:{anchor:"transformers.TFEsmForMaskedLM.call.example-2",$$slots:{default:[Pf]},$$scope:{ctx:F}}}),en=new X({}),tn=new z({props:{name:"class transformers.TFEsmForSequenceClassification",anchor:"transformers.TFEsmForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEsmForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1173"}}),an=new z({props:{name:"call",anchor:"transformers.TFEsmForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFEsmForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ct=new Ze({props:{$$slots:{default:[Sf]},$$scope:{ctx:F}}}),jt=new C({props:{anchor:"transformers.TFEsmForSequenceClassification.call.example",$$slots:{default:[Lf]},$$scope:{ctx:F}}}),Pt=new C({props:{anchor:"transformers.TFEsmForSequenceClassification.call.example-2",$$slots:{default:[Nf]},$$scope:{ctx:F}}}),rn=new X({}),ln=new z({props:{name:"class transformers.TFEsmForTokenClassification",anchor:"transformers.TFEsmForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEsmForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1268"}}),pn=new z({props:{name:"call",anchor:"transformers.TFEsmForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFEsmForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Lt=new Ze({props:{$$slots:{default:[Af]},$$scope:{ctx:F}}}),Nt=new C({props:{anchor:"transformers.TFEsmForTokenClassification.call.example",$$slots:{default:[Df]},$$scope:{ctx:F}}}),At=new C({props:{anchor:"transformers.TFEsmForTokenClassification.call.example-2",$$slots:{default:[Of]},$$scope:{ctx:F}}}),{c(){d=r("meta"),_=p(),c=r("h1"),m=r("a"),b=r("span"),T(n.$$.fragment),f=p(),M=r("span"),Zr=s("ESM"),ja=p(),$e=r("h2"),Ge=r("a"),ls=r("span"),T(Ut.$$.fragment),Gr=p(),ds=r("span"),Jr=s("Overview"),Pa=s(`

This page provides code and pre-trained weights for Transformer protein language models from Meta AI's Fundamental 
AI Research Team, providing the state-of-the-art ESMFold and ESM-2, and the previously released ESM-1b and ESM-1v.
Transformer protein language models were introduced in the paper [Biological structure and function emerge from scaling
unsupervised learning to 250 million protein sequences](https://www.pnas.org/content/118/15/e2016239118) by 
Alexander Rives, Joshua Meier, Tom Sercu, Siddharth Goyal, Zeming Lin, Jason Liu, Demi Guo, Myle Ott, 
C. Lawrence Zitnick, Jerry Ma, and Rob Fergus.
The first version of this paper was [preprinted in 2019](https://www.biorxiv.org/content/10.1101/622803v1?versioned=true).
`),Je=r("p"),Qr=s(`ESM-2 outperforms all tested single-sequence protein language models across a range of structure prediction tasks,
and enables atomic resolution structure prediction.
It was released with the paper `),Rt=r("a"),Yr=s(`Language models of protein sequences at the scale of evolution enable accurate
structure prediction`),Xr=s(` by Zeming Lin, Halil Akin, Roshan Rao, Brian Hie,
Zhongkai Zhu, Wenting Lu, Allan dos Santos Costa, Maryam Fazel-Zarandi, Tom Sercu, Sal Candido and Alexander Rives.`),Sa=p(),Qe=r("p"),ei=s(`Also introduced in this paper was ESMFold. It uses an ESM-2 stem with a head that can predict folded protein
structures with state-of-the-art accuracy. Unlike `),Wt=r("a"),ti=s("AlphaFold2"),oi=s(`,
it relies on the token embeddings from the large pre-trained protein language model stem and does not perform a multiple
sequence alignment (MSA) step at inference time, which means that ESMFold checkpoints are fully \u201Cstandalone\u201D -
they do not require a database of known protein sequences and structures with associated external query tools
to make predictions, and are much faster as a result.`),La=p(),_n=r("p"),ni=s(`The abstract from
\u201CBiological structure and function emerge from scaling unsupervised learning to 250
million protein sequences\u201D is`),Na=p(),kn=r("p"),cs=r("em"),si=s(`In the field of artificial intelligence, a combination of scale in data and model capacity enabled by unsupervised
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
improving state-of-the-art features for long-range contact prediction.`),Aa=p(),bn=r("p"),ai=s(`The abstract from
\u201CLanguage models of protein sequences at the scale of evolution enable accurate structure prediction\u201D is`),Da=p(),Tn=r("p"),ms=r("em"),ri=s(`Large language models have recently been shown to develop emergent capabilities with scale, going beyond
simple pattern matching to perform higher level reasoning and generate lifelike images and text. While
language models trained on protein sequences have been studied at a smaller scale, little is known about
what they learn about biology as they are scaled up. In this work we train models up to 15 billion parameters,
the largest language models of proteins to be evaluated to date. We find that as models are scaled they learn
information enabling the prediction of the three-dimensional structure of a protein at the resolution of
individual atoms. We present ESMFold for high accuracy end-to-end atomic level structure prediction directly
from the individual sequence of a protein. ESMFold has similar accuracy to AlphaFold2 and RoseTTAFold for
sequences with low perplexity that are well understood by the language model. ESMFold inference is an
order of magnitude faster than AlphaFold2, enabling exploration of the structural space of metagenomic
proteins in practical timescales.`),Oa=p(),yn=r("p"),ii=s("Tips:"),Ia=p(),vn=r("ul"),ps=r("li"),li=s("ESM models are trained with a masked language modeling (MLM) objective."),Ua=p(),ee=r("p"),di=s("The original code can be found "),Ht=r("a"),ci=s("here"),mi=s(` and was
was developed by the Fundamental AI Research team at Meta AI.
ESM-1b, ESM-1v and ESM-2 were contributed to huggingface by `),Kt=r("a"),pi=s("jasonliu"),hi=s(`
and `),Bt=r("a"),fi=s("Matt"),ui=s("."),Ra=p(),re=r("p"),gi=s("ESMFold was contributed to huggingface by "),Vt=r("a"),_i=s("Matt"),ki=s(` and
`),Zt=r("a"),bi=s("Sylvain"),Ti=s(`, with a big thank you to Nikita Smetanin, Roshan Rao and Tom Sercu for their
help throughout the process!`),Wa=p(),ie=r("p"),yi=s("The HuggingFace port of ESMFold uses portions of the "),Gt=r("a"),vi=s("openfold"),$i=s(` library.
The `),hs=r("code"),wi=s("openfold"),Ei=s(" library is licensed under the Apache License 2.0."),Ha=p(),we=r("h2"),Ye=r("a"),fs=r("span"),T(Jt.$$.fragment),Fi=p(),us=r("span"),Mi=s("EsmConfig"),Ka=p(),N=r("div"),T(Qt.$$.fragment),zi=p(),Ee=r("p"),qi=s("This is the configuration class to store the configuration of a "),gs=r("code"),xi=s("ESMModel"),Ci=s(`. It is used to instantiate a ESM model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ESM
`),Yt=r("a"),ji=s("facebook/esm-1b"),Pi=s(" architecture."),Si=p(),Fe=r("p"),Li=s("Configuration objects inherit from "),$n=r("a"),Ni=s("PretrainedConfig"),Ai=s(` and can be used to control the model outputs. Read the
documentation from `),wn=r("a"),Di=s("PretrainedConfig"),Oi=s(" for more information."),Ii=p(),T(Xe.$$.fragment),Ui=p(),et=r("div"),T(Xt.$$.fragment),Ri=p(),eo=r("p"),Wi=s("Serializes this instance to a Python dictionary. Override the default "),En=r("a"),Hi=s("to_dict()"),Ki=s("."),Ba=p(),Me=r("h2"),tt=r("a"),_s=r("span"),T(to.$$.fragment),Bi=p(),ks=r("span"),Vi=s("EsmTokenizer"),Va=p(),S=r("div"),T(oo.$$.fragment),Zi=p(),bs=r("p"),Gi=s("Constructs an ESM tokenizer."),Ji=p(),Fn=r("div"),T(no.$$.fragment),Qi=p(),ot=r("div"),T(so.$$.fragment),Yi=p(),ze=r("p"),Xi=s(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ts=r("code"),el=s("prepare_for_model"),tl=s(" or "),ys=r("code"),ol=s("encode_plus"),nl=s(" methods."),sl=p(),le=r("div"),T(ao.$$.fragment),al=p(),Mn=r("p"),rl=s("Create the token type IDs corresponding to the sequences passed. "),zn=r("a"),il=s(`What are token type
IDs?`),ll=p(),vs=r("p"),dl=s("Should be overridden in a subclass if the model has a special way of building those."),cl=p(),qn=r("div"),T(ro.$$.fragment),Za=p(),qe=r("h2"),nt=r("a"),$s=r("span"),T(io.$$.fragment),ml=p(),ws=r("span"),pl=s("EsmModel"),Ga=p(),q=r("div"),T(lo.$$.fragment),hl=p(),Es=r("p"),fl=s("The bare ESM Model transformer outputting raw hidden-states without any specific head on top."),ul=p(),co=r("p"),gl=s("This model inherits from "),xn=r("a"),_l=s("PreTrainedModel"),kl=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bl=p(),mo=r("p"),Tl=s("This model is also a PyTorch "),po=r("a"),yl=s("torch.nn.Module"),vl=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$l=p(),ho=r("p"),wl=s(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),fo=r("a"),El=s(`Attention is
all you need`),Fl=s(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ml=p(),L=r("p"),zl=s("To behave as an decoder the model needs to be initialized with the "),Fs=r("code"),ql=s("is_decoder"),xl=s(` argument of the configuration set
to `),Ms=r("code"),Cl=s("True"),jl=s(". To be used in a Seq2Seq model, the model needs to initialized with both "),zs=r("code"),Pl=s("is_decoder"),Sl=s(` argument and
`),qs=r("code"),Ll=s("add_cross_attention"),Nl=s(" set to "),xs=r("code"),Al=s("True"),Dl=s("; an "),Cs=r("code"),Ol=s("encoder_hidden_states"),Il=s(" is then expected as an input to the forward pass."),Ul=p(),te=r("div"),T(uo.$$.fragment),Rl=p(),xe=r("p"),Wl=s("The "),Cn=r("a"),Hl=s("EsmModel"),Kl=s(" forward method, overrides the "),js=r("code"),Bl=s("__call__"),Vl=s(" special method."),Zl=p(),T(st.$$.fragment),Gl=p(),T(at.$$.fragment),Ja=p(),Ce=r("h2"),rt=r("a"),Ps=r("span"),T(go.$$.fragment),Jl=p(),Ss=r("span"),Ql=s("EsmForMaskedLM"),Qa=p(),A=r("div"),T(_o.$$.fragment),Yl=p(),ko=r("p"),Xl=s("ESM Model with a "),Ls=r("code"),ed=s("language modeling"),td=s(" head on top."),od=p(),bo=r("p"),nd=s("This model inherits from "),jn=r("a"),sd=s("PreTrainedModel"),ad=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rd=p(),To=r("p"),id=s("This model is also a PyTorch "),yo=r("a"),ld=s("torch.nn.Module"),dd=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cd=p(),K=r("div"),T(vo.$$.fragment),md=p(),je=r("p"),pd=s("The "),Pn=r("a"),hd=s("EsmForMaskedLM"),fd=s(" forward method, overrides the "),Ns=r("code"),ud=s("__call__"),gd=s(" special method."),_d=p(),T(it.$$.fragment),kd=p(),T(lt.$$.fragment),bd=p(),T(dt.$$.fragment),Ya=p(),Pe=r("h2"),ct=r("a"),As=r("span"),T($o.$$.fragment),Td=p(),Ds=r("span"),yd=s("EsmForSequenceClassification"),Xa=p(),D=r("div"),T(wo.$$.fragment),vd=p(),Os=r("p"),$d=s(`ESM Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),wd=p(),Eo=r("p"),Ed=s("This model inherits from "),Sn=r("a"),Fd=s("PreTrainedModel"),Md=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zd=p(),Fo=r("p"),qd=s("This model is also a PyTorch "),Mo=r("a"),xd=s("torch.nn.Module"),Cd=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jd=p(),x=r("div"),T(zo.$$.fragment),Pd=p(),Se=r("p"),Sd=s("The "),Ln=r("a"),Ld=s("EsmForSequenceClassification"),Nd=s(" forward method, overrides the "),Is=r("code"),Ad=s("__call__"),Dd=s(" special method."),Od=p(),T(mt.$$.fragment),Id=p(),T(pt.$$.fragment),Ud=p(),T(ht.$$.fragment),Rd=p(),T(ft.$$.fragment),Wd=p(),T(ut.$$.fragment),er=p(),Le=r("h2"),gt=r("a"),Us=r("span"),T(qo.$$.fragment),Hd=p(),Rs=r("span"),Kd=s("EsmForTokenClassification"),tr=p(),O=r("div"),T(xo.$$.fragment),Bd=p(),Ws=r("p"),Vd=s(`ESM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Zd=p(),Co=r("p"),Gd=s("This model inherits from "),Nn=r("a"),Jd=s("PreTrainedModel"),Qd=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yd=p(),jo=r("p"),Xd=s("This model is also a PyTorch "),Po=r("a"),ec=s("torch.nn.Module"),tc=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oc=p(),B=r("div"),T(So.$$.fragment),nc=p(),Ne=r("p"),sc=s("The "),An=r("a"),ac=s("EsmForTokenClassification"),rc=s(" forward method, overrides the "),Hs=r("code"),ic=s("__call__"),lc=s(" special method."),dc=p(),T(_t.$$.fragment),cc=p(),T(kt.$$.fragment),mc=p(),T(bt.$$.fragment),or=p(),Ae=r("h2"),Tt=r("a"),Ks=r("span"),T(Lo.$$.fragment),pc=p(),Bs=r("span"),hc=s("EsmForProteinFolding"),nr=p(),I=r("div"),T(No.$$.fragment),fc=p(),Vs=r("p"),uc=s(`ESMForProteinFolding is the HuggingFace port of the original ESMFold model. It consists of an ESM-2 \u201Cstem\u201D followed
by a protein folding \u201Chead\u201D, although unlike most other output heads, this \u201Chead\u201D is similar in size and runtime to
the rest of the model combined! It outputs a dictionary containing predicted structural information about the input
protein(s).`),gc=p(),Ao=r("p"),_c=s("This model inherits from "),Dn=r("a"),kc=s("PreTrainedModel"),bc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tc=p(),Do=r("p"),yc=s("This model is also a PyTorch "),Oo=r("a"),vc=s("torch.nn.Module"),$c=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wc=p(),oe=r("div"),T(Io.$$.fragment),Ec=p(),De=r("p"),Fc=s("The "),On=r("a"),Mc=s("EsmForProteinFolding"),zc=s(" forward method, overrides the "),Zs=r("code"),qc=s("__call__"),xc=s(" special method."),Cc=p(),T(yt.$$.fragment),jc=p(),T(vt.$$.fragment),sr=p(),Oe=r("h2"),$t=r("a"),Gs=r("span"),T(Uo.$$.fragment),Pc=p(),Js=r("span"),Sc=s("TFEsmModel"),ar=p(),U=r("div"),T(Ro.$$.fragment),Lc=p(),Qs=r("p"),Nc=s("The bare ESM Model transformer outputting raw hidden-states without any specific head on top."),Ac=p(),Wo=r("p"),Dc=s("This model inherits from "),In=r("a"),Oc=s("TFPreTrainedModel"),Ic=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uc=p(),Ho=r("p"),Rc=s("This model is also a Keras "),Ko=r("a"),Wc=s("Model"),Hc=s(` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Kc=p(),ne=r("div"),T(Bo.$$.fragment),Bc=p(),Ie=r("p"),Vc=s("The "),Un=r("a"),Zc=s("TFEsmModel"),Gc=s(" forward method, overrides the "),Ys=r("code"),Jc=s("__call__"),Qc=s(" special method."),Yc=p(),T(wt.$$.fragment),Xc=p(),T(Et.$$.fragment),rr=p(),Ue=r("h2"),Ft=r("a"),Xs=r("span"),T(Vo.$$.fragment),em=p(),ea=r("span"),tm=s("TFEsmForMaskedLM"),ir=p(),R=r("div"),T(Zo.$$.fragment),om=p(),Go=r("p"),nm=s("ESM Model with a "),ta=r("code"),sm=s("language modeling"),am=s(" head on top."),rm=p(),Jo=r("p"),im=s("This model inherits from "),Rn=r("a"),lm=s("TFPreTrainedModel"),dm=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cm=p(),Qo=r("p"),mm=s("This model is also a Keras "),Yo=r("a"),pm=s("Model"),hm=s(` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),fm=p(),V=r("div"),T(Xo.$$.fragment),um=p(),Re=r("p"),gm=s("The "),Wn=r("a"),_m=s("TFEsmForMaskedLM"),km=s(" forward method, overrides the "),oa=r("code"),bm=s("__call__"),Tm=s(" special method."),ym=p(),T(Mt.$$.fragment),vm=p(),T(zt.$$.fragment),$m=p(),T(qt.$$.fragment),lr=p(),We=r("h2"),xt=r("a"),na=r("span"),T(en.$$.fragment),wm=p(),sa=r("span"),Em=s("TFEsmForSequenceClassification"),dr=p(),W=r("div"),T(tn.$$.fragment),Fm=p(),aa=r("p"),Mm=s(`ESM Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),zm=p(),on=r("p"),qm=s("This model inherits from "),Hn=r("a"),xm=s("TFPreTrainedModel"),Cm=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jm=p(),nn=r("p"),Pm=s("This model is also a Keras "),sn=r("a"),Sm=s("Model"),Lm=s(` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Nm=p(),Z=r("div"),T(an.$$.fragment),Am=p(),He=r("p"),Dm=s("The "),Kn=r("a"),Om=s("TFEsmForSequenceClassification"),Im=s(" forward method, overrides the "),ra=r("code"),Um=s("__call__"),Rm=s(" special method."),Wm=p(),T(Ct.$$.fragment),Hm=p(),T(jt.$$.fragment),Km=p(),T(Pt.$$.fragment),cr=p(),Ke=r("h2"),St=r("a"),ia=r("span"),T(rn.$$.fragment),Bm=p(),la=r("span"),Vm=s("TFEsmForTokenClassification"),mr=p(),H=r("div"),T(ln.$$.fragment),Zm=p(),da=r("p"),Gm=s(`ESM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Jm=p(),dn=r("p"),Qm=s("This model inherits from "),Bn=r("a"),Ym=s("TFPreTrainedModel"),Xm=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep=p(),cn=r("p"),tp=s("This model is also a Keras "),mn=r("a"),op=s("Model"),np=s(` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),sp=p(),G=r("div"),T(pn.$$.fragment),ap=p(),Be=r("p"),rp=s("The "),Vn=r("a"),ip=s("TFEsmForTokenClassification"),lp=s(" forward method, overrides the "),ca=r("code"),dp=s("__call__"),cp=s(" special method."),mp=p(),T(Lt.$$.fragment),pp=p(),T(Nt.$$.fragment),hp=p(),T(At.$$.fragment),this.h()},l(t){const g=mf('[data-svelte="svelte-1phssyn"]',document.head);d=i(g,"META",{name:!0,content:!0}),g.forEach(o),_=h(t),c=i(t,"H1",{class:!0});var hn=l(c);m=i(hn,"A",{id:!0,class:!0,href:!0});var ma=l(m);b=i(ma,"SPAN",{});var pa=l(b);y(n.$$.fragment,pa),pa.forEach(o),ma.forEach(o),f=h(hn),M=i(hn,"SPAN",{});var ha=l(M);Zr=a(ha,"ESM"),ha.forEach(o),hn.forEach(o),ja=h(t),$e=i(t,"H2",{class:!0});var fn=l($e);Ge=i(fn,"A",{id:!0,class:!0,href:!0});var fa=l(Ge);ls=i(fa,"SPAN",{});var ua=l(ls);y(Ut.$$.fragment,ua),ua.forEach(o),fa.forEach(o),Gr=h(fn),ds=i(fn,"SPAN",{});var ga=l(ds);Jr=a(ga,"Overview"),ga.forEach(o),fn.forEach(o),Pa=a(t,`

This page provides code and pre-trained weights for Transformer protein language models from Meta AI's Fundamental 
AI Research Team, providing the state-of-the-art ESMFold and ESM-2, and the previously released ESM-1b and ESM-1v.
Transformer protein language models were introduced in the paper [Biological structure and function emerge from scaling
unsupervised learning to 250 million protein sequences](https://www.pnas.org/content/118/15/e2016239118) by 
Alexander Rives, Joshua Meier, Tom Sercu, Siddharth Goyal, Zeming Lin, Jason Liu, Demi Guo, Myle Ott, 
C. Lawrence Zitnick, Jerry Ma, and Rob Fergus.
The first version of this paper was [preprinted in 2019](https://www.biorxiv.org/content/10.1101/622803v1?versioned=true).
`),Je=i(t,"P",{});var un=l(Je);Qr=a(un,`ESM-2 outperforms all tested single-sequence protein language models across a range of structure prediction tasks,
and enables atomic resolution structure prediction.
It was released with the paper `),Rt=i(un,"A",{href:!0,rel:!0});var _a=l(Rt);Yr=a(_a,`Language models of protein sequences at the scale of evolution enable accurate
structure prediction`),_a.forEach(o),Xr=a(un,` by Zeming Lin, Halil Akin, Roshan Rao, Brian Hie,
Zhongkai Zhu, Wenting Lu, Allan dos Santos Costa, Maryam Fazel-Zarandi, Tom Sercu, Sal Candido and Alexander Rives.`),un.forEach(o),Sa=h(t),Qe=i(t,"P",{});var gn=l(Qe);ei=a(gn,`Also introduced in this paper was ESMFold. It uses an ESM-2 stem with a head that can predict folded protein
structures with state-of-the-art accuracy. Unlike `),Wt=i(gn,"A",{href:!0,rel:!0});var ka=l(Wt);ti=a(ka,"AlphaFold2"),ka.forEach(o),oi=a(gn,`,
it relies on the token embeddings from the large pre-trained protein language model stem and does not perform a multiple
sequence alignment (MSA) step at inference time, which means that ESMFold checkpoints are fully \u201Cstandalone\u201D -
they do not require a database of known protein sequences and structures with associated external query tools
to make predictions, and are much faster as a result.`),gn.forEach(o),La=h(t),_n=i(t,"P",{});var ba=l(_n);ni=a(ba,`The abstract from
\u201CBiological structure and function emerge from scaling unsupervised learning to 250
million protein sequences\u201D is`),ba.forEach(o),Na=h(t),kn=i(t,"P",{});var Ta=l(kn);cs=i(Ta,"EM",{});var ya=l(cs);si=a(ya,`In the field of artificial intelligence, a combination of scale in data and model capacity enabled by unsupervised
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
improving state-of-the-art features for long-range contact prediction.`),ya.forEach(o),Ta.forEach(o),Aa=h(t),bn=i(t,"P",{});var va=l(bn);ai=a(va,`The abstract from
\u201CLanguage models of protein sequences at the scale of evolution enable accurate structure prediction\u201D is`),va.forEach(o),Da=h(t),Tn=i(t,"P",{});var $a=l(Tn);ms=i($a,"EM",{});var wa=l(ms);ri=a(wa,`Large language models have recently been shown to develop emergent capabilities with scale, going beyond
simple pattern matching to perform higher level reasoning and generate lifelike images and text. While
language models trained on protein sequences have been studied at a smaller scale, little is known about
what they learn about biology as they are scaled up. In this work we train models up to 15 billion parameters,
the largest language models of proteins to be evaluated to date. We find that as models are scaled they learn
information enabling the prediction of the three-dimensional structure of a protein at the resolution of
individual atoms. We present ESMFold for high accuracy end-to-end atomic level structure prediction directly
from the individual sequence of a protein. ESMFold has similar accuracy to AlphaFold2 and RoseTTAFold for
sequences with low perplexity that are well understood by the language model. ESMFold inference is an
order of magnitude faster than AlphaFold2, enabling exploration of the structural space of metagenomic
proteins in practical timescales.`),wa.forEach(o),$a.forEach(o),Oa=h(t),yn=i(t,"P",{});var Ea=l(yn);ii=a(Ea,"Tips:"),Ea.forEach(o),Ia=h(t),vn=i(t,"UL",{});var Fa=l(vn);ps=i(Fa,"LI",{});var Ma=l(ps);li=a(Ma,"ESM models are trained with a masked language modeling (MLM) objective."),Ma.forEach(o),Fa.forEach(o),Ua=h(t),ee=i(t,"P",{});var ae=l(ee);di=a(ae,"The original code can be found "),Ht=i(ae,"A",{href:!0,rel:!0});var za=l(Ht);ci=a(za,"here"),za.forEach(o),mi=a(ae,` and was
was developed by the Fundamental AI Research team at Meta AI.
ESM-1b, ESM-1v and ESM-2 were contributed to huggingface by `),Kt=i(ae,"A",{href:!0,rel:!0});var qa=l(Kt);pi=a(qa,"jasonliu"),qa.forEach(o),hi=a(ae,`
and `),Bt=i(ae,"A",{href:!0,rel:!0});var xa=l(Bt);fi=a(xa,"Matt"),xa.forEach(o),ui=a(ae,"."),ae.forEach(o),Ra=h(t),re=i(t,"P",{});var Ve=l(re);gi=a(Ve,"ESMFold was contributed to huggingface by "),Vt=i(Ve,"A",{href:!0,rel:!0});var Ca=l(Vt);_i=a(Ca,"Matt"),Ca.forEach(o),ki=a(Ve,` and
`),Zt=i(Ve,"A",{href:!0,rel:!0});var up=l(Zt);bi=a(up,"Sylvain"),up.forEach(o),Ti=a(Ve,`, with a big thank you to Nikita Smetanin, Roshan Rao and Tom Sercu for their
help throughout the process!`),Ve.forEach(o),Wa=h(t),ie=i(t,"P",{});var Zn=l(ie);yi=a(Zn,"The HuggingFace port of ESMFold uses portions of the "),Gt=i(Zn,"A",{href:!0,rel:!0});var gp=l(Gt);vi=a(gp,"openfold"),gp.forEach(o),$i=a(Zn,` library.
The `),hs=i(Zn,"CODE",{});var _p=l(hs);wi=a(_p,"openfold"),_p.forEach(o),Ei=a(Zn," library is licensed under the Apache License 2.0."),Zn.forEach(o),Ha=h(t),we=i(t,"H2",{class:!0});var hr=l(we);Ye=i(hr,"A",{id:!0,class:!0,href:!0});var kp=l(Ye);fs=i(kp,"SPAN",{});var bp=l(fs);y(Jt.$$.fragment,bp),bp.forEach(o),kp.forEach(o),Fi=h(hr),us=i(hr,"SPAN",{});var Tp=l(us);Mi=a(Tp,"EsmConfig"),Tp.forEach(o),hr.forEach(o),Ka=h(t),N=i(t,"DIV",{class:!0});var de=l(N);y(Qt.$$.fragment,de),zi=h(de),Ee=i(de,"P",{});var Gn=l(Ee);qi=a(Gn,"This is the configuration class to store the configuration of a "),gs=i(Gn,"CODE",{});var yp=l(gs);xi=a(yp,"ESMModel"),yp.forEach(o),Ci=a(Gn,`. It is used to instantiate a ESM model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ESM
`),Yt=i(Gn,"A",{href:!0,rel:!0});var vp=l(Yt);ji=a(vp,"facebook/esm-1b"),vp.forEach(o),Pi=a(Gn," architecture."),Gn.forEach(o),Si=h(de),Fe=i(de,"P",{});var Jn=l(Fe);Li=a(Jn,"Configuration objects inherit from "),$n=i(Jn,"A",{href:!0});var $p=l($n);Ni=a($p,"PretrainedConfig"),$p.forEach(o),Ai=a(Jn,` and can be used to control the model outputs. Read the
documentation from `),wn=i(Jn,"A",{href:!0});var wp=l(wn);Di=a(wp,"PretrainedConfig"),wp.forEach(o),Oi=a(Jn," for more information."),Jn.forEach(o),Ii=h(de),y(Xe.$$.fragment,de),Ui=h(de),et=i(de,"DIV",{class:!0});var fr=l(et);y(Xt.$$.fragment,fr),Ri=h(fr),eo=i(fr,"P",{});var ur=l(eo);Wi=a(ur,"Serializes this instance to a Python dictionary. Override the default "),En=i(ur,"A",{href:!0});var Ep=l(En);Hi=a(Ep,"to_dict()"),Ep.forEach(o),Ki=a(ur,"."),ur.forEach(o),fr.forEach(o),de.forEach(o),Ba=h(t),Me=i(t,"H2",{class:!0});var gr=l(Me);tt=i(gr,"A",{id:!0,class:!0,href:!0});var Fp=l(tt);_s=i(Fp,"SPAN",{});var Mp=l(_s);y(to.$$.fragment,Mp),Mp.forEach(o),Fp.forEach(o),Bi=h(gr),ks=i(gr,"SPAN",{});var zp=l(ks);Vi=a(zp,"EsmTokenizer"),zp.forEach(o),gr.forEach(o),Va=h(t),S=i(t,"DIV",{class:!0});var se=l(S);y(oo.$$.fragment,se),Zi=h(se),bs=i(se,"P",{});var qp=l(bs);Gi=a(qp,"Constructs an ESM tokenizer."),qp.forEach(o),Ji=h(se),Fn=i(se,"DIV",{class:!0});var xp=l(Fn);y(no.$$.fragment,xp),xp.forEach(o),Qi=h(se),ot=i(se,"DIV",{class:!0});var _r=l(ot);y(so.$$.fragment,_r),Yi=h(_r),ze=i(_r,"P",{});var Qn=l(ze);Xi=a(Qn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ts=i(Qn,"CODE",{});var Cp=l(Ts);el=a(Cp,"prepare_for_model"),Cp.forEach(o),tl=a(Qn," or "),ys=i(Qn,"CODE",{});var jp=l(ys);ol=a(jp,"encode_plus"),jp.forEach(o),nl=a(Qn," methods."),Qn.forEach(o),_r.forEach(o),sl=h(se),le=i(se,"DIV",{class:!0});var Yn=l(le);y(ao.$$.fragment,Yn),al=h(Yn),Mn=i(Yn,"P",{});var fp=l(Mn);rl=a(fp,"Create the token type IDs corresponding to the sequences passed. "),zn=i(fp,"A",{href:!0});var Pp=l(zn);il=a(Pp,`What are token type
IDs?`),Pp.forEach(o),fp.forEach(o),ll=h(Yn),vs=i(Yn,"P",{});var Sp=l(vs);dl=a(Sp,"Should be overridden in a subclass if the model has a special way of building those."),Sp.forEach(o),Yn.forEach(o),cl=h(se),qn=i(se,"DIV",{class:!0});var Lp=l(qn);y(ro.$$.fragment,Lp),Lp.forEach(o),se.forEach(o),Za=h(t),qe=i(t,"H2",{class:!0});var kr=l(qe);nt=i(kr,"A",{id:!0,class:!0,href:!0});var Np=l(nt);$s=i(Np,"SPAN",{});var Ap=l($s);y(io.$$.fragment,Ap),Ap.forEach(o),Np.forEach(o),ml=h(kr),ws=i(kr,"SPAN",{});var Dp=l(ws);pl=a(Dp,"EsmModel"),Dp.forEach(o),kr.forEach(o),Ga=h(t),q=i(t,"DIV",{class:!0});var J=l(q);y(lo.$$.fragment,J),hl=h(J),Es=i(J,"P",{});var Op=l(Es);fl=a(Op,"The bare ESM Model transformer outputting raw hidden-states without any specific head on top."),Op.forEach(o),ul=h(J),co=i(J,"P",{});var br=l(co);gl=a(br,"This model inherits from "),xn=i(br,"A",{href:!0});var Ip=l(xn);_l=a(Ip,"PreTrainedModel"),Ip.forEach(o),kl=a(br,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),br.forEach(o),bl=h(J),mo=i(J,"P",{});var Tr=l(mo);Tl=a(Tr,"This model is also a PyTorch "),po=i(Tr,"A",{href:!0,rel:!0});var Up=l(po);yl=a(Up,"torch.nn.Module"),Up.forEach(o),vl=a(Tr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tr.forEach(o),$l=h(J),ho=i(J,"P",{});var yr=l(ho);wl=a(yr,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),fo=i(yr,"A",{href:!0,rel:!0});var Rp=l(fo);El=a(Rp,`Attention is
all you need`),Rp.forEach(o),Fl=a(yr,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),yr.forEach(o),Ml=h(J),L=i(J,"P",{});var Q=l(L);zl=a(Q,"To behave as an decoder the model needs to be initialized with the "),Fs=i(Q,"CODE",{});var Wp=l(Fs);ql=a(Wp,"is_decoder"),Wp.forEach(o),xl=a(Q,` argument of the configuration set
to `),Ms=i(Q,"CODE",{});var Hp=l(Ms);Cl=a(Hp,"True"),Hp.forEach(o),jl=a(Q,". To be used in a Seq2Seq model, the model needs to initialized with both "),zs=i(Q,"CODE",{});var Kp=l(zs);Pl=a(Kp,"is_decoder"),Kp.forEach(o),Sl=a(Q,` argument and
`),qs=i(Q,"CODE",{});var Bp=l(qs);Ll=a(Bp,"add_cross_attention"),Bp.forEach(o),Nl=a(Q," set to "),xs=i(Q,"CODE",{});var Vp=l(xs);Al=a(Vp,"True"),Vp.forEach(o),Dl=a(Q,"; an "),Cs=i(Q,"CODE",{});var Zp=l(Cs);Ol=a(Zp,"encoder_hidden_states"),Zp.forEach(o),Il=a(Q," is then expected as an input to the forward pass."),Q.forEach(o),Ul=h(J),te=i(J,"DIV",{class:!0});var Dt=l(te);y(uo.$$.fragment,Dt),Rl=h(Dt),xe=i(Dt,"P",{});var Xn=l(xe);Wl=a(Xn,"The "),Cn=i(Xn,"A",{href:!0});var Gp=l(Cn);Hl=a(Gp,"EsmModel"),Gp.forEach(o),Kl=a(Xn," forward method, overrides the "),js=i(Xn,"CODE",{});var Jp=l(js);Bl=a(Jp,"__call__"),Jp.forEach(o),Vl=a(Xn," special method."),Xn.forEach(o),Zl=h(Dt),y(st.$$.fragment,Dt),Gl=h(Dt),y(at.$$.fragment,Dt),Dt.forEach(o),J.forEach(o),Ja=h(t),Ce=i(t,"H2",{class:!0});var vr=l(Ce);rt=i(vr,"A",{id:!0,class:!0,href:!0});var Qp=l(rt);Ps=i(Qp,"SPAN",{});var Yp=l(Ps);y(go.$$.fragment,Yp),Yp.forEach(o),Qp.forEach(o),Jl=h(vr),Ss=i(vr,"SPAN",{});var Xp=l(Ss);Ql=a(Xp,"EsmForMaskedLM"),Xp.forEach(o),vr.forEach(o),Qa=h(t),A=i(t,"DIV",{class:!0});var ce=l(A);y(_o.$$.fragment,ce),Yl=h(ce),ko=i(ce,"P",{});var $r=l(ko);Xl=a($r,"ESM Model with a "),Ls=i($r,"CODE",{});var eh=l(Ls);ed=a(eh,"language modeling"),eh.forEach(o),td=a($r," head on top."),$r.forEach(o),od=h(ce),bo=i(ce,"P",{});var wr=l(bo);nd=a(wr,"This model inherits from "),jn=i(wr,"A",{href:!0});var th=l(jn);sd=a(th,"PreTrainedModel"),th.forEach(o),ad=a(wr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wr.forEach(o),rd=h(ce),To=i(ce,"P",{});var Er=l(To);id=a(Er,"This model is also a PyTorch "),yo=i(Er,"A",{href:!0,rel:!0});var oh=l(yo);ld=a(oh,"torch.nn.Module"),oh.forEach(o),dd=a(Er,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Er.forEach(o),cd=h(ce),K=i(ce,"DIV",{class:!0});var me=l(K);y(vo.$$.fragment,me),md=h(me),je=i(me,"P",{});var es=l(je);pd=a(es,"The "),Pn=i(es,"A",{href:!0});var nh=l(Pn);hd=a(nh,"EsmForMaskedLM"),nh.forEach(o),fd=a(es," forward method, overrides the "),Ns=i(es,"CODE",{});var sh=l(Ns);ud=a(sh,"__call__"),sh.forEach(o),gd=a(es," special method."),es.forEach(o),_d=h(me),y(it.$$.fragment,me),kd=h(me),y(lt.$$.fragment,me),bd=h(me),y(dt.$$.fragment,me),me.forEach(o),ce.forEach(o),Ya=h(t),Pe=i(t,"H2",{class:!0});var Fr=l(Pe);ct=i(Fr,"A",{id:!0,class:!0,href:!0});var ah=l(ct);As=i(ah,"SPAN",{});var rh=l(As);y($o.$$.fragment,rh),rh.forEach(o),ah.forEach(o),Td=h(Fr),Ds=i(Fr,"SPAN",{});var ih=l(Ds);yd=a(ih,"EsmForSequenceClassification"),ih.forEach(o),Fr.forEach(o),Xa=h(t),D=i(t,"DIV",{class:!0});var pe=l(D);y(wo.$$.fragment,pe),vd=h(pe),Os=i(pe,"P",{});var lh=l(Os);$d=a(lh,`ESM Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),lh.forEach(o),wd=h(pe),Eo=i(pe,"P",{});var Mr=l(Eo);Ed=a(Mr,"This model inherits from "),Sn=i(Mr,"A",{href:!0});var dh=l(Sn);Fd=a(dh,"PreTrainedModel"),dh.forEach(o),Md=a(Mr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mr.forEach(o),zd=h(pe),Fo=i(pe,"P",{});var zr=l(Fo);qd=a(zr,"This model is also a PyTorch "),Mo=i(zr,"A",{href:!0,rel:!0});var ch=l(Mo);xd=a(ch,"torch.nn.Module"),ch.forEach(o),Cd=a(zr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zr.forEach(o),jd=h(pe),x=i(pe,"DIV",{class:!0});var Y=l(x);y(zo.$$.fragment,Y),Pd=h(Y),Se=i(Y,"P",{});var ts=l(Se);Sd=a(ts,"The "),Ln=i(ts,"A",{href:!0});var mh=l(Ln);Ld=a(mh,"EsmForSequenceClassification"),mh.forEach(o),Nd=a(ts," forward method, overrides the "),Is=i(ts,"CODE",{});var ph=l(Is);Ad=a(ph,"__call__"),ph.forEach(o),Dd=a(ts," special method."),ts.forEach(o),Od=h(Y),y(mt.$$.fragment,Y),Id=h(Y),y(pt.$$.fragment,Y),Ud=h(Y),y(ht.$$.fragment,Y),Rd=h(Y),y(ft.$$.fragment,Y),Wd=h(Y),y(ut.$$.fragment,Y),Y.forEach(o),pe.forEach(o),er=h(t),Le=i(t,"H2",{class:!0});var qr=l(Le);gt=i(qr,"A",{id:!0,class:!0,href:!0});var hh=l(gt);Us=i(hh,"SPAN",{});var fh=l(Us);y(qo.$$.fragment,fh),fh.forEach(o),hh.forEach(o),Hd=h(qr),Rs=i(qr,"SPAN",{});var uh=l(Rs);Kd=a(uh,"EsmForTokenClassification"),uh.forEach(o),qr.forEach(o),tr=h(t),O=i(t,"DIV",{class:!0});var he=l(O);y(xo.$$.fragment,he),Bd=h(he),Ws=i(he,"P",{});var gh=l(Ws);Vd=a(gh,`ESM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),gh.forEach(o),Zd=h(he),Co=i(he,"P",{});var xr=l(Co);Gd=a(xr,"This model inherits from "),Nn=i(xr,"A",{href:!0});var _h=l(Nn);Jd=a(_h,"PreTrainedModel"),_h.forEach(o),Qd=a(xr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xr.forEach(o),Yd=h(he),jo=i(he,"P",{});var Cr=l(jo);Xd=a(Cr,"This model is also a PyTorch "),Po=i(Cr,"A",{href:!0,rel:!0});var kh=l(Po);ec=a(kh,"torch.nn.Module"),kh.forEach(o),tc=a(Cr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cr.forEach(o),oc=h(he),B=i(he,"DIV",{class:!0});var fe=l(B);y(So.$$.fragment,fe),nc=h(fe),Ne=i(fe,"P",{});var os=l(Ne);sc=a(os,"The "),An=i(os,"A",{href:!0});var bh=l(An);ac=a(bh,"EsmForTokenClassification"),bh.forEach(o),rc=a(os," forward method, overrides the "),Hs=i(os,"CODE",{});var Th=l(Hs);ic=a(Th,"__call__"),Th.forEach(o),lc=a(os," special method."),os.forEach(o),dc=h(fe),y(_t.$$.fragment,fe),cc=h(fe),y(kt.$$.fragment,fe),mc=h(fe),y(bt.$$.fragment,fe),fe.forEach(o),he.forEach(o),or=h(t),Ae=i(t,"H2",{class:!0});var jr=l(Ae);Tt=i(jr,"A",{id:!0,class:!0,href:!0});var yh=l(Tt);Ks=i(yh,"SPAN",{});var vh=l(Ks);y(Lo.$$.fragment,vh),vh.forEach(o),yh.forEach(o),pc=h(jr),Bs=i(jr,"SPAN",{});var $h=l(Bs);hc=a($h,"EsmForProteinFolding"),$h.forEach(o),jr.forEach(o),nr=h(t),I=i(t,"DIV",{class:!0});var ue=l(I);y(No.$$.fragment,ue),fc=h(ue),Vs=i(ue,"P",{});var wh=l(Vs);uc=a(wh,`ESMForProteinFolding is the HuggingFace port of the original ESMFold model. It consists of an ESM-2 \u201Cstem\u201D followed
by a protein folding \u201Chead\u201D, although unlike most other output heads, this \u201Chead\u201D is similar in size and runtime to
the rest of the model combined! It outputs a dictionary containing predicted structural information about the input
protein(s).`),wh.forEach(o),gc=h(ue),Ao=i(ue,"P",{});var Pr=l(Ao);_c=a(Pr,"This model inherits from "),Dn=i(Pr,"A",{href:!0});var Eh=l(Dn);kc=a(Eh,"PreTrainedModel"),Eh.forEach(o),bc=a(Pr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pr.forEach(o),Tc=h(ue),Do=i(ue,"P",{});var Sr=l(Do);yc=a(Sr,"This model is also a PyTorch "),Oo=i(Sr,"A",{href:!0,rel:!0});var Fh=l(Oo);vc=a(Fh,"torch.nn.Module"),Fh.forEach(o),$c=a(Sr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sr.forEach(o),wc=h(ue),oe=i(ue,"DIV",{class:!0});var Ot=l(oe);y(Io.$$.fragment,Ot),Ec=h(Ot),De=i(Ot,"P",{});var ns=l(De);Fc=a(ns,"The "),On=i(ns,"A",{href:!0});var Mh=l(On);Mc=a(Mh,"EsmForProteinFolding"),Mh.forEach(o),zc=a(ns," forward method, overrides the "),Zs=i(ns,"CODE",{});var zh=l(Zs);qc=a(zh,"__call__"),zh.forEach(o),xc=a(ns," special method."),ns.forEach(o),Cc=h(Ot),y(yt.$$.fragment,Ot),jc=h(Ot),y(vt.$$.fragment,Ot),Ot.forEach(o),ue.forEach(o),sr=h(t),Oe=i(t,"H2",{class:!0});var Lr=l(Oe);$t=i(Lr,"A",{id:!0,class:!0,href:!0});var qh=l($t);Gs=i(qh,"SPAN",{});var xh=l(Gs);y(Uo.$$.fragment,xh),xh.forEach(o),qh.forEach(o),Pc=h(Lr),Js=i(Lr,"SPAN",{});var Ch=l(Js);Sc=a(Ch,"TFEsmModel"),Ch.forEach(o),Lr.forEach(o),ar=h(t),U=i(t,"DIV",{class:!0});var ge=l(U);y(Ro.$$.fragment,ge),Lc=h(ge),Qs=i(ge,"P",{});var jh=l(Qs);Nc=a(jh,"The bare ESM Model transformer outputting raw hidden-states without any specific head on top."),jh.forEach(o),Ac=h(ge),Wo=i(ge,"P",{});var Nr=l(Wo);Dc=a(Nr,"This model inherits from "),In=i(Nr,"A",{href:!0});var Ph=l(In);Oc=a(Ph,"TFPreTrainedModel"),Ph.forEach(o),Ic=a(Nr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nr.forEach(o),Uc=h(ge),Ho=i(ge,"P",{});var Ar=l(Ho);Rc=a(Ar,"This model is also a Keras "),Ko=i(Ar,"A",{href:!0,rel:!0});var Sh=l(Ko);Wc=a(Sh,"Model"),Sh.forEach(o),Hc=a(Ar,` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Ar.forEach(o),Kc=h(ge),ne=i(ge,"DIV",{class:!0});var It=l(ne);y(Bo.$$.fragment,It),Bc=h(It),Ie=i(It,"P",{});var ss=l(Ie);Vc=a(ss,"The "),Un=i(ss,"A",{href:!0});var Lh=l(Un);Zc=a(Lh,"TFEsmModel"),Lh.forEach(o),Gc=a(ss," forward method, overrides the "),Ys=i(ss,"CODE",{});var Nh=l(Ys);Jc=a(Nh,"__call__"),Nh.forEach(o),Qc=a(ss," special method."),ss.forEach(o),Yc=h(It),y(wt.$$.fragment,It),Xc=h(It),y(Et.$$.fragment,It),It.forEach(o),ge.forEach(o),rr=h(t),Ue=i(t,"H2",{class:!0});var Dr=l(Ue);Ft=i(Dr,"A",{id:!0,class:!0,href:!0});var Ah=l(Ft);Xs=i(Ah,"SPAN",{});var Dh=l(Xs);y(Vo.$$.fragment,Dh),Dh.forEach(o),Ah.forEach(o),em=h(Dr),ea=i(Dr,"SPAN",{});var Oh=l(ea);tm=a(Oh,"TFEsmForMaskedLM"),Oh.forEach(o),Dr.forEach(o),ir=h(t),R=i(t,"DIV",{class:!0});var _e=l(R);y(Zo.$$.fragment,_e),om=h(_e),Go=i(_e,"P",{});var Or=l(Go);nm=a(Or,"ESM Model with a "),ta=i(Or,"CODE",{});var Ih=l(ta);sm=a(Ih,"language modeling"),Ih.forEach(o),am=a(Or," head on top."),Or.forEach(o),rm=h(_e),Jo=i(_e,"P",{});var Ir=l(Jo);im=a(Ir,"This model inherits from "),Rn=i(Ir,"A",{href:!0});var Uh=l(Rn);lm=a(Uh,"TFPreTrainedModel"),Uh.forEach(o),dm=a(Ir,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ir.forEach(o),cm=h(_e),Qo=i(_e,"P",{});var Ur=l(Qo);mm=a(Ur,"This model is also a Keras "),Yo=i(Ur,"A",{href:!0,rel:!0});var Rh=l(Yo);pm=a(Rh,"Model"),Rh.forEach(o),hm=a(Ur,` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Ur.forEach(o),fm=h(_e),V=i(_e,"DIV",{class:!0});var ke=l(V);y(Xo.$$.fragment,ke),um=h(ke),Re=i(ke,"P",{});var as=l(Re);gm=a(as,"The "),Wn=i(as,"A",{href:!0});var Wh=l(Wn);_m=a(Wh,"TFEsmForMaskedLM"),Wh.forEach(o),km=a(as," forward method, overrides the "),oa=i(as,"CODE",{});var Hh=l(oa);bm=a(Hh,"__call__"),Hh.forEach(o),Tm=a(as," special method."),as.forEach(o),ym=h(ke),y(Mt.$$.fragment,ke),vm=h(ke),y(zt.$$.fragment,ke),$m=h(ke),y(qt.$$.fragment,ke),ke.forEach(o),_e.forEach(o),lr=h(t),We=i(t,"H2",{class:!0});var Rr=l(We);xt=i(Rr,"A",{id:!0,class:!0,href:!0});var Kh=l(xt);na=i(Kh,"SPAN",{});var Bh=l(na);y(en.$$.fragment,Bh),Bh.forEach(o),Kh.forEach(o),wm=h(Rr),sa=i(Rr,"SPAN",{});var Vh=l(sa);Em=a(Vh,"TFEsmForSequenceClassification"),Vh.forEach(o),Rr.forEach(o),dr=h(t),W=i(t,"DIV",{class:!0});var be=l(W);y(tn.$$.fragment,be),Fm=h(be),aa=i(be,"P",{});var Zh=l(aa);Mm=a(Zh,`ESM Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Zh.forEach(o),zm=h(be),on=i(be,"P",{});var Wr=l(on);qm=a(Wr,"This model inherits from "),Hn=i(Wr,"A",{href:!0});var Gh=l(Hn);xm=a(Gh,"TFPreTrainedModel"),Gh.forEach(o),Cm=a(Wr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wr.forEach(o),jm=h(be),nn=i(be,"P",{});var Hr=l(nn);Pm=a(Hr,"This model is also a Keras "),sn=i(Hr,"A",{href:!0,rel:!0});var Jh=l(sn);Sm=a(Jh,"Model"),Jh.forEach(o),Lm=a(Hr,` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Hr.forEach(o),Nm=h(be),Z=i(be,"DIV",{class:!0});var Te=l(Z);y(an.$$.fragment,Te),Am=h(Te),He=i(Te,"P",{});var rs=l(He);Dm=a(rs,"The "),Kn=i(rs,"A",{href:!0});var Qh=l(Kn);Om=a(Qh,"TFEsmForSequenceClassification"),Qh.forEach(o),Im=a(rs," forward method, overrides the "),ra=i(rs,"CODE",{});var Yh=l(ra);Um=a(Yh,"__call__"),Yh.forEach(o),Rm=a(rs," special method."),rs.forEach(o),Wm=h(Te),y(Ct.$$.fragment,Te),Hm=h(Te),y(jt.$$.fragment,Te),Km=h(Te),y(Pt.$$.fragment,Te),Te.forEach(o),be.forEach(o),cr=h(t),Ke=i(t,"H2",{class:!0});var Kr=l(Ke);St=i(Kr,"A",{id:!0,class:!0,href:!0});var Xh=l(St);ia=i(Xh,"SPAN",{});var ef=l(ia);y(rn.$$.fragment,ef),ef.forEach(o),Xh.forEach(o),Bm=h(Kr),la=i(Kr,"SPAN",{});var tf=l(la);Vm=a(tf,"TFEsmForTokenClassification"),tf.forEach(o),Kr.forEach(o),mr=h(t),H=i(t,"DIV",{class:!0});var ye=l(H);y(ln.$$.fragment,ye),Zm=h(ye),da=i(ye,"P",{});var of=l(da);Gm=a(of,`ESM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),of.forEach(o),Jm=h(ye),dn=i(ye,"P",{});var Br=l(dn);Qm=a(Br,"This model inherits from "),Bn=i(Br,"A",{href:!0});var nf=l(Bn);Ym=a(nf,"TFPreTrainedModel"),nf.forEach(o),Xm=a(Br,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Br.forEach(o),ep=h(ye),cn=i(ye,"P",{});var Vr=l(cn);tp=a(Vr,"This model is also a Keras "),mn=i(Vr,"A",{href:!0,rel:!0});var sf=l(mn);op=a(sf,"Model"),sf.forEach(o),np=a(Vr,` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Vr.forEach(o),sp=h(ye),G=i(ye,"DIV",{class:!0});var ve=l(G);y(pn.$$.fragment,ve),ap=h(ve),Be=i(ve,"P",{});var is=l(Be);rp=a(is,"The "),Vn=i(is,"A",{href:!0});var af=l(Vn);ip=a(af,"TFEsmForTokenClassification"),af.forEach(o),lp=a(is," forward method, overrides the "),ca=i(is,"CODE",{});var rf=l(ca);dp=a(rf,"__call__"),rf.forEach(o),cp=a(is," special method."),is.forEach(o),mp=h(ve),y(Lt.$$.fragment,ve),pp=h(ve),y(Nt.$$.fragment,ve),hp=h(ve),y(At.$$.fragment,ve),ve.forEach(o),ye.forEach(o),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(Uf)),u(m,"id","esm"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#esm"),u(c,"class","relative group"),u(Ge,"id","overview"),u(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ge,"href","#overview"),u($e,"class","relative group"),u(Rt,"href","https://doi.org/10.1101/2022.07.20.500902"),u(Rt,"rel","nofollow"),u(Wt,"href","https://www.nature.com/articles/s41586-021-03819-2"),u(Wt,"rel","nofollow"),u(Ht,"href","https://github.com/facebookresearch/esm"),u(Ht,"rel","nofollow"),u(Kt,"href","https://huggingface.co/jasonliu"),u(Kt,"rel","nofollow"),u(Bt,"href","https://huggingface.co/Rocketknight1"),u(Bt,"rel","nofollow"),u(Vt,"href","https://huggingface.co/Rocketknight1"),u(Vt,"rel","nofollow"),u(Zt,"href","https://huggingface.co/sgugger"),u(Zt,"rel","nofollow"),u(Gt,"href","https://github.com/aqlaboratory/openfold"),u(Gt,"rel","nofollow"),u(Ye,"id","transformers.EsmConfig"),u(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ye,"href","#transformers.EsmConfig"),u(we,"class","relative group"),u(Yt,"href","https://huggingface.co/facebook/esm-1b"),u(Yt,"rel","nofollow"),u($n,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(wn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(En,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig.to_dict"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"id","transformers.EsmTokenizer"),u(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(tt,"href","#transformers.EsmTokenizer"),u(Me,"class","relative group"),u(Fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zn,"href","../glossary#token-type-ids"),u(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"id","transformers.EsmModel"),u(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(nt,"href","#transformers.EsmModel"),u(qe,"class","relative group"),u(xn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(po,"rel","nofollow"),u(fo,"href","https://arxiv.org/abs/1706.03762"),u(fo,"rel","nofollow"),u(Cn,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmModel"),u(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"id","transformers.EsmForMaskedLM"),u(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(rt,"href","#transformers.EsmForMaskedLM"),u(Ce,"class","relative group"),u(jn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(yo,"rel","nofollow"),u(Pn,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmForMaskedLM"),u(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"id","transformers.EsmForSequenceClassification"),u(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ct,"href","#transformers.EsmForSequenceClassification"),u(Pe,"class","relative group"),u(Sn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Mo,"rel","nofollow"),u(Ln,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmForSequenceClassification"),u(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gt,"id","transformers.EsmForTokenClassification"),u(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(gt,"href","#transformers.EsmForTokenClassification"),u(Le,"class","relative group"),u(Nn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Po,"rel","nofollow"),u(An,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmForTokenClassification"),u(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"id","transformers.EsmForProteinFolding"),u(Tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Tt,"href","#transformers.EsmForProteinFolding"),u(Ae,"class","relative group"),u(Dn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Oo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Oo,"rel","nofollow"),u(On,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmForProteinFolding"),u(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($t,"id","transformers.TFEsmModel"),u($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($t,"href","#transformers.TFEsmModel"),u(Oe,"class","relative group"),u(In,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ko,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ko,"rel","nofollow"),u(Un,"href","/docs/transformers/main/en/model_doc/esm#transformers.TFEsmModel"),u(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ft,"id","transformers.TFEsmForMaskedLM"),u(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ft,"href","#transformers.TFEsmForMaskedLM"),u(Ue,"class","relative group"),u(Rn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Yo,"rel","nofollow"),u(Wn,"href","/docs/transformers/main/en/model_doc/esm#transformers.TFEsmForMaskedLM"),u(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xt,"id","transformers.TFEsmForSequenceClassification"),u(xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xt,"href","#transformers.TFEsmForSequenceClassification"),u(We,"class","relative group"),u(Hn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(sn,"rel","nofollow"),u(Kn,"href","/docs/transformers/main/en/model_doc/esm#transformers.TFEsmForSequenceClassification"),u(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(St,"id","transformers.TFEsmForTokenClassification"),u(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(St,"href","#transformers.TFEsmForTokenClassification"),u(Ke,"class","relative group"),u(Bn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(mn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(mn,"rel","nofollow"),u(Vn,"href","/docs/transformers/main/en/model_doc/esm#transformers.TFEsmForTokenClassification"),u(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),k(t,_,g),k(t,c,g),e(c,m),e(m,b),v(n,b,null),e(c,f),e(c,M),e(M,Zr),k(t,ja,g),k(t,$e,g),e($e,Ge),e(Ge,ls),v(Ut,ls,null),e($e,Gr),e($e,ds),e(ds,Jr),k(t,Pa,g),k(t,Je,g),e(Je,Qr),e(Je,Rt),e(Rt,Yr),e(Je,Xr),k(t,Sa,g),k(t,Qe,g),e(Qe,ei),e(Qe,Wt),e(Wt,ti),e(Qe,oi),k(t,La,g),k(t,_n,g),e(_n,ni),k(t,Na,g),k(t,kn,g),e(kn,cs),e(cs,si),k(t,Aa,g),k(t,bn,g),e(bn,ai),k(t,Da,g),k(t,Tn,g),e(Tn,ms),e(ms,ri),k(t,Oa,g),k(t,yn,g),e(yn,ii),k(t,Ia,g),k(t,vn,g),e(vn,ps),e(ps,li),k(t,Ua,g),k(t,ee,g),e(ee,di),e(ee,Ht),e(Ht,ci),e(ee,mi),e(ee,Kt),e(Kt,pi),e(ee,hi),e(ee,Bt),e(Bt,fi),e(ee,ui),k(t,Ra,g),k(t,re,g),e(re,gi),e(re,Vt),e(Vt,_i),e(re,ki),e(re,Zt),e(Zt,bi),e(re,Ti),k(t,Wa,g),k(t,ie,g),e(ie,yi),e(ie,Gt),e(Gt,vi),e(ie,$i),e(ie,hs),e(hs,wi),e(ie,Ei),k(t,Ha,g),k(t,we,g),e(we,Ye),e(Ye,fs),v(Jt,fs,null),e(we,Fi),e(we,us),e(us,Mi),k(t,Ka,g),k(t,N,g),v(Qt,N,null),e(N,zi),e(N,Ee),e(Ee,qi),e(Ee,gs),e(gs,xi),e(Ee,Ci),e(Ee,Yt),e(Yt,ji),e(Ee,Pi),e(N,Si),e(N,Fe),e(Fe,Li),e(Fe,$n),e($n,Ni),e(Fe,Ai),e(Fe,wn),e(wn,Di),e(Fe,Oi),e(N,Ii),v(Xe,N,null),e(N,Ui),e(N,et),v(Xt,et,null),e(et,Ri),e(et,eo),e(eo,Wi),e(eo,En),e(En,Hi),e(eo,Ki),k(t,Ba,g),k(t,Me,g),e(Me,tt),e(tt,_s),v(to,_s,null),e(Me,Bi),e(Me,ks),e(ks,Vi),k(t,Va,g),k(t,S,g),v(oo,S,null),e(S,Zi),e(S,bs),e(bs,Gi),e(S,Ji),e(S,Fn),v(no,Fn,null),e(S,Qi),e(S,ot),v(so,ot,null),e(ot,Yi),e(ot,ze),e(ze,Xi),e(ze,Ts),e(Ts,el),e(ze,tl),e(ze,ys),e(ys,ol),e(ze,nl),e(S,sl),e(S,le),v(ao,le,null),e(le,al),e(le,Mn),e(Mn,rl),e(Mn,zn),e(zn,il),e(le,ll),e(le,vs),e(vs,dl),e(S,cl),e(S,qn),v(ro,qn,null),k(t,Za,g),k(t,qe,g),e(qe,nt),e(nt,$s),v(io,$s,null),e(qe,ml),e(qe,ws),e(ws,pl),k(t,Ga,g),k(t,q,g),v(lo,q,null),e(q,hl),e(q,Es),e(Es,fl),e(q,ul),e(q,co),e(co,gl),e(co,xn),e(xn,_l),e(co,kl),e(q,bl),e(q,mo),e(mo,Tl),e(mo,po),e(po,yl),e(mo,vl),e(q,$l),e(q,ho),e(ho,wl),e(ho,fo),e(fo,El),e(ho,Fl),e(q,Ml),e(q,L),e(L,zl),e(L,Fs),e(Fs,ql),e(L,xl),e(L,Ms),e(Ms,Cl),e(L,jl),e(L,zs),e(zs,Pl),e(L,Sl),e(L,qs),e(qs,Ll),e(L,Nl),e(L,xs),e(xs,Al),e(L,Dl),e(L,Cs),e(Cs,Ol),e(L,Il),e(q,Ul),e(q,te),v(uo,te,null),e(te,Rl),e(te,xe),e(xe,Wl),e(xe,Cn),e(Cn,Hl),e(xe,Kl),e(xe,js),e(js,Bl),e(xe,Vl),e(te,Zl),v(st,te,null),e(te,Gl),v(at,te,null),k(t,Ja,g),k(t,Ce,g),e(Ce,rt),e(rt,Ps),v(go,Ps,null),e(Ce,Jl),e(Ce,Ss),e(Ss,Ql),k(t,Qa,g),k(t,A,g),v(_o,A,null),e(A,Yl),e(A,ko),e(ko,Xl),e(ko,Ls),e(Ls,ed),e(ko,td),e(A,od),e(A,bo),e(bo,nd),e(bo,jn),e(jn,sd),e(bo,ad),e(A,rd),e(A,To),e(To,id),e(To,yo),e(yo,ld),e(To,dd),e(A,cd),e(A,K),v(vo,K,null),e(K,md),e(K,je),e(je,pd),e(je,Pn),e(Pn,hd),e(je,fd),e(je,Ns),e(Ns,ud),e(je,gd),e(K,_d),v(it,K,null),e(K,kd),v(lt,K,null),e(K,bd),v(dt,K,null),k(t,Ya,g),k(t,Pe,g),e(Pe,ct),e(ct,As),v($o,As,null),e(Pe,Td),e(Pe,Ds),e(Ds,yd),k(t,Xa,g),k(t,D,g),v(wo,D,null),e(D,vd),e(D,Os),e(Os,$d),e(D,wd),e(D,Eo),e(Eo,Ed),e(Eo,Sn),e(Sn,Fd),e(Eo,Md),e(D,zd),e(D,Fo),e(Fo,qd),e(Fo,Mo),e(Mo,xd),e(Fo,Cd),e(D,jd),e(D,x),v(zo,x,null),e(x,Pd),e(x,Se),e(Se,Sd),e(Se,Ln),e(Ln,Ld),e(Se,Nd),e(Se,Is),e(Is,Ad),e(Se,Dd),e(x,Od),v(mt,x,null),e(x,Id),v(pt,x,null),e(x,Ud),v(ht,x,null),e(x,Rd),v(ft,x,null),e(x,Wd),v(ut,x,null),k(t,er,g),k(t,Le,g),e(Le,gt),e(gt,Us),v(qo,Us,null),e(Le,Hd),e(Le,Rs),e(Rs,Kd),k(t,tr,g),k(t,O,g),v(xo,O,null),e(O,Bd),e(O,Ws),e(Ws,Vd),e(O,Zd),e(O,Co),e(Co,Gd),e(Co,Nn),e(Nn,Jd),e(Co,Qd),e(O,Yd),e(O,jo),e(jo,Xd),e(jo,Po),e(Po,ec),e(jo,tc),e(O,oc),e(O,B),v(So,B,null),e(B,nc),e(B,Ne),e(Ne,sc),e(Ne,An),e(An,ac),e(Ne,rc),e(Ne,Hs),e(Hs,ic),e(Ne,lc),e(B,dc),v(_t,B,null),e(B,cc),v(kt,B,null),e(B,mc),v(bt,B,null),k(t,or,g),k(t,Ae,g),e(Ae,Tt),e(Tt,Ks),v(Lo,Ks,null),e(Ae,pc),e(Ae,Bs),e(Bs,hc),k(t,nr,g),k(t,I,g),v(No,I,null),e(I,fc),e(I,Vs),e(Vs,uc),e(I,gc),e(I,Ao),e(Ao,_c),e(Ao,Dn),e(Dn,kc),e(Ao,bc),e(I,Tc),e(I,Do),e(Do,yc),e(Do,Oo),e(Oo,vc),e(Do,$c),e(I,wc),e(I,oe),v(Io,oe,null),e(oe,Ec),e(oe,De),e(De,Fc),e(De,On),e(On,Mc),e(De,zc),e(De,Zs),e(Zs,qc),e(De,xc),e(oe,Cc),v(yt,oe,null),e(oe,jc),v(vt,oe,null),k(t,sr,g),k(t,Oe,g),e(Oe,$t),e($t,Gs),v(Uo,Gs,null),e(Oe,Pc),e(Oe,Js),e(Js,Sc),k(t,ar,g),k(t,U,g),v(Ro,U,null),e(U,Lc),e(U,Qs),e(Qs,Nc),e(U,Ac),e(U,Wo),e(Wo,Dc),e(Wo,In),e(In,Oc),e(Wo,Ic),e(U,Uc),e(U,Ho),e(Ho,Rc),e(Ho,Ko),e(Ko,Wc),e(Ho,Hc),e(U,Kc),e(U,ne),v(Bo,ne,null),e(ne,Bc),e(ne,Ie),e(Ie,Vc),e(Ie,Un),e(Un,Zc),e(Ie,Gc),e(Ie,Ys),e(Ys,Jc),e(Ie,Qc),e(ne,Yc),v(wt,ne,null),e(ne,Xc),v(Et,ne,null),k(t,rr,g),k(t,Ue,g),e(Ue,Ft),e(Ft,Xs),v(Vo,Xs,null),e(Ue,em),e(Ue,ea),e(ea,tm),k(t,ir,g),k(t,R,g),v(Zo,R,null),e(R,om),e(R,Go),e(Go,nm),e(Go,ta),e(ta,sm),e(Go,am),e(R,rm),e(R,Jo),e(Jo,im),e(Jo,Rn),e(Rn,lm),e(Jo,dm),e(R,cm),e(R,Qo),e(Qo,mm),e(Qo,Yo),e(Yo,pm),e(Qo,hm),e(R,fm),e(R,V),v(Xo,V,null),e(V,um),e(V,Re),e(Re,gm),e(Re,Wn),e(Wn,_m),e(Re,km),e(Re,oa),e(oa,bm),e(Re,Tm),e(V,ym),v(Mt,V,null),e(V,vm),v(zt,V,null),e(V,$m),v(qt,V,null),k(t,lr,g),k(t,We,g),e(We,xt),e(xt,na),v(en,na,null),e(We,wm),e(We,sa),e(sa,Em),k(t,dr,g),k(t,W,g),v(tn,W,null),e(W,Fm),e(W,aa),e(aa,Mm),e(W,zm),e(W,on),e(on,qm),e(on,Hn),e(Hn,xm),e(on,Cm),e(W,jm),e(W,nn),e(nn,Pm),e(nn,sn),e(sn,Sm),e(nn,Lm),e(W,Nm),e(W,Z),v(an,Z,null),e(Z,Am),e(Z,He),e(He,Dm),e(He,Kn),e(Kn,Om),e(He,Im),e(He,ra),e(ra,Um),e(He,Rm),e(Z,Wm),v(Ct,Z,null),e(Z,Hm),v(jt,Z,null),e(Z,Km),v(Pt,Z,null),k(t,cr,g),k(t,Ke,g),e(Ke,St),e(St,ia),v(rn,ia,null),e(Ke,Bm),e(Ke,la),e(la,Vm),k(t,mr,g),k(t,H,g),v(ln,H,null),e(H,Zm),e(H,da),e(da,Gm),e(H,Jm),e(H,dn),e(dn,Qm),e(dn,Bn),e(Bn,Ym),e(dn,Xm),e(H,ep),e(H,cn),e(cn,tp),e(cn,mn),e(mn,op),e(cn,np),e(H,sp),e(H,G),v(pn,G,null),e(G,ap),e(G,Be),e(Be,rp),e(Be,Vn),e(Vn,ip),e(Be,lp),e(Be,ca),e(ca,dp),e(Be,cp),e(G,mp),v(Lt,G,null),e(G,pp),v(Nt,G,null),e(G,hp),v(At,G,null),pr=!0},p(t,[g]){const hn={};g&2&&(hn.$$scope={dirty:g,ctx:t}),Xe.$set(hn);const ma={};g&2&&(ma.$$scope={dirty:g,ctx:t}),st.$set(ma);const pa={};g&2&&(pa.$$scope={dirty:g,ctx:t}),at.$set(pa);const ha={};g&2&&(ha.$$scope={dirty:g,ctx:t}),it.$set(ha);const fn={};g&2&&(fn.$$scope={dirty:g,ctx:t}),lt.$set(fn);const fa={};g&2&&(fa.$$scope={dirty:g,ctx:t}),dt.$set(fa);const ua={};g&2&&(ua.$$scope={dirty:g,ctx:t}),mt.$set(ua);const ga={};g&2&&(ga.$$scope={dirty:g,ctx:t}),pt.$set(ga);const un={};g&2&&(un.$$scope={dirty:g,ctx:t}),ht.$set(un);const _a={};g&2&&(_a.$$scope={dirty:g,ctx:t}),ft.$set(_a);const gn={};g&2&&(gn.$$scope={dirty:g,ctx:t}),ut.$set(gn);const ka={};g&2&&(ka.$$scope={dirty:g,ctx:t}),_t.$set(ka);const ba={};g&2&&(ba.$$scope={dirty:g,ctx:t}),kt.$set(ba);const Ta={};g&2&&(Ta.$$scope={dirty:g,ctx:t}),bt.$set(Ta);const ya={};g&2&&(ya.$$scope={dirty:g,ctx:t}),yt.$set(ya);const va={};g&2&&(va.$$scope={dirty:g,ctx:t}),vt.$set(va);const $a={};g&2&&($a.$$scope={dirty:g,ctx:t}),wt.$set($a);const wa={};g&2&&(wa.$$scope={dirty:g,ctx:t}),Et.$set(wa);const Ea={};g&2&&(Ea.$$scope={dirty:g,ctx:t}),Mt.$set(Ea);const Fa={};g&2&&(Fa.$$scope={dirty:g,ctx:t}),zt.$set(Fa);const Ma={};g&2&&(Ma.$$scope={dirty:g,ctx:t}),qt.$set(Ma);const ae={};g&2&&(ae.$$scope={dirty:g,ctx:t}),Ct.$set(ae);const za={};g&2&&(za.$$scope={dirty:g,ctx:t}),jt.$set(za);const qa={};g&2&&(qa.$$scope={dirty:g,ctx:t}),Pt.$set(qa);const xa={};g&2&&(xa.$$scope={dirty:g,ctx:t}),Lt.$set(xa);const Ve={};g&2&&(Ve.$$scope={dirty:g,ctx:t}),Nt.$set(Ve);const Ca={};g&2&&(Ca.$$scope={dirty:g,ctx:t}),At.$set(Ca)},i(t){pr||($(n.$$.fragment,t),$(Ut.$$.fragment,t),$(Jt.$$.fragment,t),$(Qt.$$.fragment,t),$(Xe.$$.fragment,t),$(Xt.$$.fragment,t),$(to.$$.fragment,t),$(oo.$$.fragment,t),$(no.$$.fragment,t),$(so.$$.fragment,t),$(ao.$$.fragment,t),$(ro.$$.fragment,t),$(io.$$.fragment,t),$(lo.$$.fragment,t),$(uo.$$.fragment,t),$(st.$$.fragment,t),$(at.$$.fragment,t),$(go.$$.fragment,t),$(_o.$$.fragment,t),$(vo.$$.fragment,t),$(it.$$.fragment,t),$(lt.$$.fragment,t),$(dt.$$.fragment,t),$($o.$$.fragment,t),$(wo.$$.fragment,t),$(zo.$$.fragment,t),$(mt.$$.fragment,t),$(pt.$$.fragment,t),$(ht.$$.fragment,t),$(ft.$$.fragment,t),$(ut.$$.fragment,t),$(qo.$$.fragment,t),$(xo.$$.fragment,t),$(So.$$.fragment,t),$(_t.$$.fragment,t),$(kt.$$.fragment,t),$(bt.$$.fragment,t),$(Lo.$$.fragment,t),$(No.$$.fragment,t),$(Io.$$.fragment,t),$(yt.$$.fragment,t),$(vt.$$.fragment,t),$(Uo.$$.fragment,t),$(Ro.$$.fragment,t),$(Bo.$$.fragment,t),$(wt.$$.fragment,t),$(Et.$$.fragment,t),$(Vo.$$.fragment,t),$(Zo.$$.fragment,t),$(Xo.$$.fragment,t),$(Mt.$$.fragment,t),$(zt.$$.fragment,t),$(qt.$$.fragment,t),$(en.$$.fragment,t),$(tn.$$.fragment,t),$(an.$$.fragment,t),$(Ct.$$.fragment,t),$(jt.$$.fragment,t),$(Pt.$$.fragment,t),$(rn.$$.fragment,t),$(ln.$$.fragment,t),$(pn.$$.fragment,t),$(Lt.$$.fragment,t),$(Nt.$$.fragment,t),$(At.$$.fragment,t),pr=!0)},o(t){w(n.$$.fragment,t),w(Ut.$$.fragment,t),w(Jt.$$.fragment,t),w(Qt.$$.fragment,t),w(Xe.$$.fragment,t),w(Xt.$$.fragment,t),w(to.$$.fragment,t),w(oo.$$.fragment,t),w(no.$$.fragment,t),w(so.$$.fragment,t),w(ao.$$.fragment,t),w(ro.$$.fragment,t),w(io.$$.fragment,t),w(lo.$$.fragment,t),w(uo.$$.fragment,t),w(st.$$.fragment,t),w(at.$$.fragment,t),w(go.$$.fragment,t),w(_o.$$.fragment,t),w(vo.$$.fragment,t),w(it.$$.fragment,t),w(lt.$$.fragment,t),w(dt.$$.fragment,t),w($o.$$.fragment,t),w(wo.$$.fragment,t),w(zo.$$.fragment,t),w(mt.$$.fragment,t),w(pt.$$.fragment,t),w(ht.$$.fragment,t),w(ft.$$.fragment,t),w(ut.$$.fragment,t),w(qo.$$.fragment,t),w(xo.$$.fragment,t),w(So.$$.fragment,t),w(_t.$$.fragment,t),w(kt.$$.fragment,t),w(bt.$$.fragment,t),w(Lo.$$.fragment,t),w(No.$$.fragment,t),w(Io.$$.fragment,t),w(yt.$$.fragment,t),w(vt.$$.fragment,t),w(Uo.$$.fragment,t),w(Ro.$$.fragment,t),w(Bo.$$.fragment,t),w(wt.$$.fragment,t),w(Et.$$.fragment,t),w(Vo.$$.fragment,t),w(Zo.$$.fragment,t),w(Xo.$$.fragment,t),w(Mt.$$.fragment,t),w(zt.$$.fragment,t),w(qt.$$.fragment,t),w(en.$$.fragment,t),w(tn.$$.fragment,t),w(an.$$.fragment,t),w(Ct.$$.fragment,t),w(jt.$$.fragment,t),w(Pt.$$.fragment,t),w(rn.$$.fragment,t),w(ln.$$.fragment,t),w(pn.$$.fragment,t),w(Lt.$$.fragment,t),w(Nt.$$.fragment,t),w(At.$$.fragment,t),pr=!1},d(t){o(d),t&&o(_),t&&o(c),E(n),t&&o(ja),t&&o($e),E(Ut),t&&o(Pa),t&&o(Je),t&&o(Sa),t&&o(Qe),t&&o(La),t&&o(_n),t&&o(Na),t&&o(kn),t&&o(Aa),t&&o(bn),t&&o(Da),t&&o(Tn),t&&o(Oa),t&&o(yn),t&&o(Ia),t&&o(vn),t&&o(Ua),t&&o(ee),t&&o(Ra),t&&o(re),t&&o(Wa),t&&o(ie),t&&o(Ha),t&&o(we),E(Jt),t&&o(Ka),t&&o(N),E(Qt),E(Xe),E(Xt),t&&o(Ba),t&&o(Me),E(to),t&&o(Va),t&&o(S),E(oo),E(no),E(so),E(ao),E(ro),t&&o(Za),t&&o(qe),E(io),t&&o(Ga),t&&o(q),E(lo),E(uo),E(st),E(at),t&&o(Ja),t&&o(Ce),E(go),t&&o(Qa),t&&o(A),E(_o),E(vo),E(it),E(lt),E(dt),t&&o(Ya),t&&o(Pe),E($o),t&&o(Xa),t&&o(D),E(wo),E(zo),E(mt),E(pt),E(ht),E(ft),E(ut),t&&o(er),t&&o(Le),E(qo),t&&o(tr),t&&o(O),E(xo),E(So),E(_t),E(kt),E(bt),t&&o(or),t&&o(Ae),E(Lo),t&&o(nr),t&&o(I),E(No),E(Io),E(yt),E(vt),t&&o(sr),t&&o(Oe),E(Uo),t&&o(ar),t&&o(U),E(Ro),E(Bo),E(wt),E(Et),t&&o(rr),t&&o(Ue),E(Vo),t&&o(ir),t&&o(R),E(Zo),E(Xo),E(Mt),E(zt),E(qt),t&&o(lr),t&&o(We),E(en),t&&o(dr),t&&o(W),E(tn),E(an),E(Ct),E(jt),E(Pt),t&&o(cr),t&&o(Ke),E(rn),t&&o(mr),t&&o(H),E(ln),E(pn),E(Lt),E(Nt),E(At)}}}const Uf={local:"esm",sections:[{local:"overview",title:"Overview"},{local:"transformers.EsmConfig",title:"EsmConfig"},{local:"transformers.EsmTokenizer",title:"EsmTokenizer"},{local:"transformers.EsmModel",title:"EsmModel"},{local:"transformers.EsmForMaskedLM",title:"EsmForMaskedLM"},{local:"transformers.EsmForSequenceClassification",title:"EsmForSequenceClassification"},{local:"transformers.EsmForTokenClassification",title:"EsmForTokenClassification"},{local:"transformers.EsmForProteinFolding",title:"EsmForProteinFolding"},{local:"transformers.TFEsmModel",title:"TFEsmModel"},{local:"transformers.TFEsmForMaskedLM",title:"TFEsmForMaskedLM"},{local:"transformers.TFEsmForSequenceClassification",title:"TFEsmForSequenceClassification"},{local:"transformers.TFEsmForTokenClassification",title:"TFEsmForTokenClassification"}],title:"ESM"};function Rf(F){return pf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gf extends lf{constructor(d){super();df(this,d,Rf,If,cf,{})}}export{Gf as default,Uf as metadata};
