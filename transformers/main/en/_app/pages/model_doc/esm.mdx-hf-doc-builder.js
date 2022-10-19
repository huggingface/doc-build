import{S as up,i as gp,s as _p,e as a,k as h,w as T,t as l,M as kp,c as r,d as o,m as f,a as i,x as y,h as d,b as u,G as e,g as k,y as v,q as $,o as w,B as E,v as bp,L as P}from"../../chunks/vendor-hf-doc-builder.js";import{T as Mt}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as L}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as S}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Tp(M){let n,_,c,m,b;return m=new L({props:{code:`from transformers import EsmModel, EsmConfig

# Initializing a ESM esm-base-uncased style configuration >>> configuration = EsmConfig()

# Initializing a model from the configuration >>> model = ESMModel(configuration)

# Accessing the model configuration >>> configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmModel, EsmConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ESM esm-base-uncased style configuration &gt;&gt;&gt; configuration = EsmConfig()</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration &gt;&gt;&gt; model = ESMModel(configuration)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration &gt;&gt;&gt; configuration = model.config</span>`}}),{c(){n=a("p"),_=l("Examples:"),c=h(),T(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Examples:"),p.forEach(o),c=f(s),y(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,_),k(s,c,p),v(m,s,p),b=!0},p:P,i(s){b||($(m.$$.fragment,s),b=!0)},o(s){w(m.$$.fragment,s),b=!1},d(s){s&&o(n),s&&o(c),E(m,s)}}}function yp(M){let n,_,c,m,b;return{c(){n=a("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var F=i(c);m=d(F,"Module"),F.forEach(o),b=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(s,p){k(s,n,p),e(n,_),e(n,c),e(c,m),e(n,b)},d(s){s&&o(n)}}}function vp(M){let n,_,c,m,b;return m=new L({props:{code:`from transformers import EsmTokenizer, EsmModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){n=a("p"),_=l("Example:"),c=h(),T(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Example:"),p.forEach(o),c=f(s),y(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,_),k(s,c,p),v(m,s,p),b=!0},p:P,i(s){b||($(m.$$.fragment,s),b=!0)},o(s){w(m.$$.fragment,s),b=!1},d(s){s&&o(n),s&&o(c),E(m,s)}}}function $p(M){let n,_,c,m,b;return{c(){n=a("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var F=i(c);m=d(F,"Module"),F.forEach(o),b=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(s,p){k(s,n,p),e(n,_),e(n,c),e(c,m),e(n,b)},d(s){s&&o(n)}}}function wp(M){let n,_,c,m,b;return m=new L({props:{code:`from transformers import EsmTokenizer, EsmForMaskedLM
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
`}}),{c(){n=a("p"),_=l("Example:"),c=h(),T(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Example:"),p.forEach(o),c=f(s),y(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,_),k(s,c,p),v(m,s,p),b=!0},p:P,i(s){b||($(m.$$.fragment,s),b=!0)},o(s){w(m.$$.fragment,s),b=!1},d(s){s&&o(n),s&&o(c),E(m,s)}}}function Ep(M){let n,_;return n=new L({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(n.$$.fragment)},l(c){y(n.$$.fragment,c)},m(c,m){v(n,c,m),_=!0},p:P,i(c){_||($(n.$$.fragment,c),_=!0)},o(c){w(n.$$.fragment,c),_=!1},d(c){E(n,c)}}}function Mp(M){let n,_,c,m,b;return{c(){n=a("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var F=i(c);m=d(F,"Module"),F.forEach(o),b=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(s,p){k(s,n,p),e(n,_),e(n,c),e(c,m),e(n,b)},d(s){s&&o(n)}}}function Fp(M){let n,_,c,m,b;return m=new L({props:{code:`import torch
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
`}}),{c(){n=a("p"),_=l("Example of single-label classification:"),c=h(),T(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Example of single-label classification:"),p.forEach(o),c=f(s),y(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,_),k(s,c,p),v(m,s,p),b=!0},p:P,i(s){b||($(m.$$.fragment,s),b=!0)},o(s){w(m.$$.fragment,s),b=!1},d(s){s&&o(n),s&&o(c),E(m,s)}}}function zp(M){let n,_;return n=new L({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(n.$$.fragment)},l(c){y(n.$$.fragment,c)},m(c,m){v(n,c,m),_=!0},p:P,i(c){_||($(n.$$.fragment,c),_=!0)},o(c){w(n.$$.fragment,c),_=!1},d(c){E(n,c)}}}function qp(M){let n,_,c,m,b;return m=new L({props:{code:`import torch
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
`}}),{c(){n=a("p"),_=l("Example of multi-label classification:"),c=h(),T(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Example of multi-label classification:"),p.forEach(o),c=f(s),y(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,_),k(s,c,p),v(m,s,p),b=!0},p:P,i(s){b||($(m.$$.fragment,s),b=!0)},o(s){w(m.$$.fragment,s),b=!1},d(s){s&&o(n),s&&o(c),E(m,s)}}}function xp(M){let n,_;return n=new L({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(n.$$.fragment)},l(c){y(n.$$.fragment,c)},m(c,m){v(n,c,m),_=!0},p:P,i(c){_||($(n.$$.fragment,c),_=!0)},o(c){w(n.$$.fragment,c),_=!1},d(c){E(n,c)}}}function Cp(M){let n,_,c,m,b;return{c(){n=a("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var F=i(c);m=d(F,"Module"),F.forEach(o),b=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(s,p){k(s,n,p),e(n,_),e(n,c),e(c,m),e(n,b)},d(s){s&&o(n)}}}function jp(M){let n,_,c,m,b;return m=new L({props:{code:`from transformers import EsmTokenizer, EsmForTokenClassification
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
`}}),{c(){n=a("p"),_=l("Example:"),c=h(),T(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Example:"),p.forEach(o),c=f(s),y(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,_),k(s,c,p),v(m,s,p),b=!0},p:P,i(s){b||($(m.$$.fragment,s),b=!0)},o(s){w(m.$$.fragment,s),b=!1},d(s){s&&o(n),s&&o(c),E(m,s)}}}function Sp(M){let n,_;return n=new L({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(n.$$.fragment)},l(c){y(n.$$.fragment,c)},m(c,m){v(n,c,m),_=!0},p:P,i(c){_||($(n.$$.fragment,c),_=!0)},o(c){w(n.$$.fragment,c),_=!1},d(c){E(n,c)}}}function Pp(M){let n,_,c,m,b;return{c(){n=a("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var F=i(c);m=d(F,"Module"),F.forEach(o),b=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(s,p){k(s,n,p),e(n,_),e(n,c),e(c,m),e(n,b)},d(s){s&&o(n)}}}function Lp(M){let n,_,c,m,b;return m=new L({props:{code:`from transformers import EsmTokenizer, TFEsmModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){n=a("p"),_=l("Example:"),c=h(),T(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Example:"),p.forEach(o),c=f(s),y(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,_),k(s,c,p),v(m,s,p),b=!0},p:P,i(s){b||($(m.$$.fragment,s),b=!0)},o(s){w(m.$$.fragment,s),b=!1},d(s){s&&o(n),s&&o(c),E(m,s)}}}function Np(M){let n,_,c,m,b;return{c(){n=a("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var F=i(c);m=d(F,"Module"),F.forEach(o),b=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(s,p){k(s,n,p),e(n,_),e(n,c),e(c,m),e(n,b)},d(s){s&&o(n)}}}function Dp(M){let n,_,c,m,b;return m=new L({props:{code:`from transformers import EsmTokenizer, TFEsmForMaskedLM
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
`}}),{c(){n=a("p"),_=l("Example:"),c=h(),T(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Example:"),p.forEach(o),c=f(s),y(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,_),k(s,c,p),v(m,s,p),b=!0},p:P,i(s){b||($(m.$$.fragment,s),b=!0)},o(s){w(m.$$.fragment,s),b=!1},d(s){s&&o(n),s&&o(c),E(m,s)}}}function Ap(M){let n,_;return n=new L({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(n.$$.fragment)},l(c){y(n.$$.fragment,c)},m(c,m){v(n,c,m),_=!0},p:P,i(c){_||($(n.$$.fragment,c),_=!0)},o(c){w(n.$$.fragment,c),_=!1},d(c){E(n,c)}}}function Op(M){let n,_,c,m,b;return{c(){n=a("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var F=i(c);m=d(F,"Module"),F.forEach(o),b=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(s,p){k(s,n,p),e(n,_),e(n,c),e(c,m),e(n,b)},d(s){s&&o(n)}}}function Ip(M){let n,_,c,m,b;return m=new L({props:{code:`from transformers import EsmTokenizer, TFEsmForSequenceClassification
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
`}}),{c(){n=a("p"),_=l("Example:"),c=h(),T(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Example:"),p.forEach(o),c=f(s),y(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,_),k(s,c,p),v(m,s,p),b=!0},p:P,i(s){b||($(m.$$.fragment,s),b=!0)},o(s){w(m.$$.fragment,s),b=!1},d(s){s&&o(n),s&&o(c),E(m,s)}}}function Up(M){let n,_;return n=new L({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(n.$$.fragment)},l(c){y(n.$$.fragment,c)},m(c,m){v(n,c,m),_=!0},p:P,i(c){_||($(n.$$.fragment,c),_=!0)},o(c){w(n.$$.fragment,c),_=!1},d(c){E(n,c)}}}function Rp(M){let n,_,c,m,b;return{c(){n=a("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var F=i(c);m=d(F,"Module"),F.forEach(o),b=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(s,p){k(s,n,p),e(n,_),e(n,c),e(c,m),e(n,b)},d(s){s&&o(n)}}}function Wp(M){let n,_,c,m,b;return m=new L({props:{code:`from transformers import EsmTokenizer, TFEsmForTokenClassification
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
`}}),{c(){n=a("p"),_=l("Example:"),c=h(),T(m.$$.fragment)},l(s){n=r(s,"P",{});var p=i(n);_=d(p,"Example:"),p.forEach(o),c=f(s),y(m.$$.fragment,s)},m(s,p){k(s,n,p),e(n,_),k(s,c,p),v(m,s,p),b=!0},p:P,i(s){b||($(m.$$.fragment,s),b=!0)},o(s){w(m.$$.fragment,s),b=!1},d(s){s&&o(n),s&&o(c),E(m,s)}}}function Hp(M){let n,_;return n=new L({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(n.$$.fragment)},l(c){y(n.$$.fragment,c)},m(c,m){v(n,c,m),_=!0},p:P,i(c){_||($(n.$$.fragment,c),_=!0)},o(c){w(n.$$.fragment,c),_=!1},d(c){E(n,c)}}}function Kp(M){let n,_,c,m,b,s,p,F,er,Gn,_e,Oe,xs,Ft,tr,Cs,or,Jn,Ie,sr,zt,nr,ar,Yn,Ho,rr,Qn,Ko,js,ir,Xn,Vo,lr,ea,Bo,Ss,dr,ta,Zo,cr,oa,Go,Ps,mr,sa,Q,pr,qt,hr,fr,xt,ur,gr,Ct,_r,kr,na,ke,Ue,Ls,jt,br,Ns,Tr,aa,Y,St,yr,be,vr,Ds,$r,wr,Pt,Er,Mr,Fr,Te,zr,Jo,qr,xr,Yo,Cr,jr,Sr,Re,ra,ye,We,As,Lt,Pr,Os,Lr,ia,C,Nt,Nr,Is,Dr,Ar,Qo,Dt,Or,He,At,Ir,ve,Ur,Us,Rr,Wr,Rs,Hr,Kr,Vr,ne,Ot,Br,Xo,Zr,es,Gr,Jr,Ws,Yr,Qr,ts,It,la,$e,Ke,Hs,Ut,Xr,Ks,ei,da,q,Rt,ti,Vs,oi,si,Wt,ni,os,ai,ri,ii,Ht,li,Kt,di,ci,mi,Vt,pi,Bt,hi,fi,ui,j,gi,Bs,_i,ki,Zs,bi,Ti,Gs,yi,vi,Js,$i,wi,Ys,Ei,Mi,Qs,Fi,zi,qi,X,Zt,xi,we,Ci,ss,ji,Si,Xs,Pi,Li,Ni,Ve,Di,Be,ca,Ee,Ze,en,Gt,Ai,tn,Oi,ma,N,Jt,Ii,Yt,Ui,on,Ri,Wi,Hi,Qt,Ki,ns,Vi,Bi,Zi,Xt,Gi,eo,Ji,Yi,Qi,W,to,Xi,Me,el,as,tl,ol,sn,sl,nl,al,Ge,rl,Je,il,Ye,pa,Fe,Qe,nn,oo,ll,an,dl,ha,D,so,cl,rn,ml,pl,no,hl,rs,fl,ul,gl,ao,_l,ro,kl,bl,Tl,x,io,yl,ze,vl,is,$l,wl,ln,El,Ml,Fl,Xe,zl,et,ql,tt,xl,ot,Cl,st,fa,qe,nt,dn,lo,jl,cn,Sl,ua,A,co,Pl,mn,Ll,Nl,mo,Dl,ls,Al,Ol,Il,po,Ul,ho,Rl,Wl,Hl,H,fo,Kl,xe,Vl,ds,Bl,Zl,pn,Gl,Jl,Yl,at,Ql,rt,Xl,it,ga,Ce,lt,hn,uo,ed,fn,td,_a,O,go,od,un,sd,nd,_o,ad,cs,rd,id,ld,ko,dd,bo,cd,md,pd,ee,To,hd,je,fd,ms,ud,gd,gn,_d,kd,bd,dt,Td,ct,ka,Se,mt,_n,yo,yd,kn,vd,ba,I,vo,$d,$o,wd,bn,Ed,Md,Fd,wo,zd,ps,qd,xd,Cd,Eo,jd,Mo,Sd,Pd,Ld,K,Fo,Nd,Pe,Dd,hs,Ad,Od,Tn,Id,Ud,Rd,pt,Wd,ht,Hd,ft,Ta,Le,ut,yn,zo,Kd,vn,Vd,ya,U,qo,Bd,$n,Zd,Gd,xo,Jd,fs,Yd,Qd,Xd,Co,ec,jo,tc,oc,sc,V,So,nc,Ne,ac,us,rc,ic,wn,lc,dc,cc,gt,mc,_t,pc,kt,va,De,bt,En,Po,hc,Mn,fc,$a,R,Lo,uc,Fn,gc,_c,No,kc,gs,bc,Tc,yc,Do,vc,Ao,$c,wc,Ec,B,Oo,Mc,Ae,Fc,_s,zc,qc,zn,xc,Cc,jc,Tt,Sc,yt,Pc,vt,wa;return s=new oe({}),Ft=new oe({}),jt=new oe({}),St=new z({props:{name:"class transformers.EsmConfig",anchor:"transformers.EsmConfig",parameters:[{name:"vocab_size",val:" = None"},{name:"mask_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1026"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"emb_layer_norm_before",val:" = None"},{name:"token_dropout",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EsmConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
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
When this is enabled, masked tokens are treated as if they had been dropped out by input dropout.`,name:"token_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/configuration_esm.py#L29"}}),Re=new S({props:{anchor:"transformers.EsmConfig.example",$$slots:{default:[Tp]},$$scope:{ctx:M}}}),Lt=new oe({}),Nt=new z({props:{name:"class transformers.EsmTokenizer",anchor:"transformers.EsmTokenizer",parameters:[{name:"vocab_file",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L47"}}),Dt=new z({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.EsmTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L91"}}),At=new z({props:{name:"get_special_tokens_mask",anchor:"transformers.EsmTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.EsmTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.EsmTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.EsmTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L100",returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),Ot=new z({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.EsmTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.EsmTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.EsmTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2986",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),It=new z({props:{name:"save_vocabulary",anchor:"transformers.EsmTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:""},{name:"filename_prefix",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L131"}}),Ut=new oe({}),Rt=new z({props:{name:"class transformers.EsmModel",anchor:"transformers.EsmModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.EsmModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L725"}}),Zt=new z({props:{name:"forward",anchor:"transformers.EsmModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.EsmModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>((batch_size, sequence_length))</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L772",returnDescription:`
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
`}}),Ve=new Mt({props:{$$slots:{default:[yp]},$$scope:{ctx:M}}}),Be=new S({props:{anchor:"transformers.EsmModel.forward.example",$$slots:{default:[vp]},$$scope:{ctx:M}}}),Gt=new oe({}),Jt=new z({props:{name:"class transformers.EsmForMaskedLM",anchor:"transformers.EsmForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L901"}}),to=new z({props:{name:"forward",anchor:"transformers.EsmForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.EsmForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L925",returnDescription:`
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
`}}),Ge=new Mt({props:{$$slots:{default:[$p]},$$scope:{ctx:M}}}),Je=new S({props:{anchor:"transformers.EsmForMaskedLM.forward.example",$$slots:{default:[wp]},$$scope:{ctx:M}}}),Ye=new S({props:{anchor:"transformers.EsmForMaskedLM.forward.example-2",$$slots:{default:[Ep]},$$scope:{ctx:M}}}),oo=new oe({}),so=new z({props:{name:"class transformers.EsmForSequenceClassification",anchor:"transformers.EsmForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1017"}}),io=new z({props:{name:"forward",anchor:"transformers.EsmForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.EsmForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1030",returnDescription:`
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
`}}),Xe=new Mt({props:{$$slots:{default:[Mp]},$$scope:{ctx:M}}}),et=new S({props:{anchor:"transformers.EsmForSequenceClassification.forward.example",$$slots:{default:[Fp]},$$scope:{ctx:M}}}),tt=new S({props:{anchor:"transformers.EsmForSequenceClassification.forward.example-2",$$slots:{default:[zp]},$$scope:{ctx:M}}}),ot=new S({props:{anchor:"transformers.EsmForSequenceClassification.forward.example-3",$$slots:{default:[qp]},$$scope:{ctx:M}}}),st=new S({props:{anchor:"transformers.EsmForSequenceClassification.forward.example-4",$$slots:{default:[xp]},$$scope:{ctx:M}}}),lo=new oe({}),co=new z({props:{name:"class transformers.EsmForTokenClassification",anchor:"transformers.EsmForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1112"}}),fo=new z({props:{name:"forward",anchor:"transformers.EsmForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.EsmForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1126",returnDescription:`
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
`}}),at=new Mt({props:{$$slots:{default:[Cp]},$$scope:{ctx:M}}}),rt=new S({props:{anchor:"transformers.EsmForTokenClassification.forward.example",$$slots:{default:[jp]},$$scope:{ctx:M}}}),it=new S({props:{anchor:"transformers.EsmForTokenClassification.forward.example-2",$$slots:{default:[Sp]},$$scope:{ctx:M}}}),uo=new oe({}),go=new z({props:{name:"class transformers.TFEsmModel",anchor:"transformers.TFEsmModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEsmModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L914"}}),To=new z({props:{name:"call",anchor:"transformers.TFEsmModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFEsmModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),dt=new Mt({props:{$$slots:{default:[Pp]},$$scope:{ctx:M}}}),ct=new S({props:{anchor:"transformers.TFEsmModel.call.example",$$slots:{default:[Lp]},$$scope:{ctx:M}}}),yo=new oe({}),vo=new z({props:{name:"class transformers.TFEsmForMaskedLM",anchor:"transformers.TFEsmForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEsmForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1016"}}),Fo=new z({props:{name:"call",anchor:"transformers.TFEsmForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFEsmForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),pt=new Mt({props:{$$slots:{default:[Np]},$$scope:{ctx:M}}}),ht=new S({props:{anchor:"transformers.TFEsmForMaskedLM.call.example",$$slots:{default:[Dp]},$$scope:{ctx:M}}}),ft=new S({props:{anchor:"transformers.TFEsmForMaskedLM.call.example-2",$$slots:{default:[Ap]},$$scope:{ctx:M}}}),zo=new oe({}),qo=new z({props:{name:"class transformers.TFEsmForSequenceClassification",anchor:"transformers.TFEsmForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEsmForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1173"}}),So=new z({props:{name:"call",anchor:"transformers.TFEsmForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFEsmForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),gt=new Mt({props:{$$slots:{default:[Op]},$$scope:{ctx:M}}}),_t=new S({props:{anchor:"transformers.TFEsmForSequenceClassification.call.example",$$slots:{default:[Ip]},$$scope:{ctx:M}}}),kt=new S({props:{anchor:"transformers.TFEsmForSequenceClassification.call.example-2",$$slots:{default:[Up]},$$scope:{ctx:M}}}),Po=new oe({}),Lo=new z({props:{name:"class transformers.TFEsmForTokenClassification",anchor:"transformers.TFEsmForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEsmForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_tf_esm.py#L1268"}}),Oo=new z({props:{name:"call",anchor:"transformers.TFEsmForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFEsmForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmTokenizer">EsmTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Tt=new Mt({props:{$$slots:{default:[Rp]},$$scope:{ctx:M}}}),yt=new S({props:{anchor:"transformers.TFEsmForTokenClassification.call.example",$$slots:{default:[Wp]},$$scope:{ctx:M}}}),vt=new S({props:{anchor:"transformers.TFEsmForTokenClassification.call.example-2",$$slots:{default:[Hp]},$$scope:{ctx:M}}}),{c(){n=a("meta"),_=h(),c=a("h1"),m=a("a"),b=a("span"),T(s.$$.fragment),p=h(),F=a("span"),er=l("ESM"),Gn=h(),_e=a("h2"),Oe=a("a"),xs=a("span"),T(Ft.$$.fragment),tr=h(),Cs=a("span"),or=l("Overview"),Jn=l(`

This page provides code and pre-trained weights for Transformer protein language models from Meta AI's Fundamental 
AI Research Team, providing the state-of-the-art ESM-2, and the previously released ESM-1b and ESM-1v. Transformer 
protein language models were introduced in the paper [Biological structure and function emerge from scaling 
unsupervised learning to 250 million protein sequences](https://www.pnas.org/content/118/15/e2016239118) by 
Alexander Rives, Joshua Meier, Tom Sercu, Siddharth Goyal, Zeming Lin, Jason Liu, Demi Guo, Myle Ott, 
C. Lawrence Zitnick, Jerry Ma, and Rob Fergus.
The first version of this paper was [preprinted in 2019](https://www.biorxiv.org/content/10.1101/622803v1?versioned=true).
`),Ie=a("p"),sr=l(`ESM-2 outperforms all tested single-sequence protein language models across a range of structure prediction tasks,
and enables atomic resolution structure prediction.
It was released with the paper `),zt=a("a"),nr=l(`Language models of protein sequences at the scale of evolution enable accurate
structure prediction`),ar=l(` by Zeming Lin, Halil Akin, Roshan Rao, Brian Hie,
Zhongkai Zhu, Wenting Lu, Allan dos Santos Costa, Maryam Fazel-Zarandi, Tom Sercu, Sal Candido and Alexander Rives.`),Yn=h(),Ho=a("p"),rr=l(`The abstract from
\u201CBiological structure and function emerge from scaling unsupervised learning to 250
million protein sequences\u201D is`),Qn=h(),Ko=a("p"),js=a("em"),ir=l(`In the field of artificial intelligence, a combination of scale in data and model capacity enabled by unsupervised
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
improving state-of-the-art features for long-range contact prediction.`),Xn=h(),Vo=a("p"),lr=l(`The abstract from
\u201CLanguage models of protein sequences at the scale of evolution enable accurate structure prediction\u201D is`),ea=h(),Bo=a("p"),Ss=a("em"),dr=l(`Large language models have recently been shown to develop emergent capabilities with scale, going beyond
simple pattern matching to perform higher level reasoning and generate lifelike images and text. While
language models trained on protein sequences have been studied at a smaller scale, little is known about
what they learn about biology as they are scaled up. In this work we train models up to 15 billion parameters,
the largest language models of proteins to be evaluated to date. We find that as models are scaled they learn
information enabling the prediction of the three-dimensional structure of a protein at the resolution of
individual atoms. We present ESMFold for high accuracy end-to-end atomic level structure prediction directly
from the individual sequence of a protein. ESMFold has similar accuracy to AlphaFold2 and RoseTTAFold for
sequences with low perplexity that are well understood by the language model. ESMFold inference is an
order of magnitude faster than AlphaFold2, enabling exploration of the structural space of metagenomic
proteins in practical timescales.`),ta=h(),Zo=a("p"),cr=l("Tips:"),oa=h(),Go=a("ul"),Ps=a("li"),mr=l("ESM models are trained with a masked language modeling (MLM) objective."),sa=h(),Q=a("p"),pr=l("The original code can be found "),qt=a("a"),hr=l("here"),fr=l(` and was
was developed by the Fundamental AI Research team at Meta AI.
This model was contributed to huggingface by `),xt=a("a"),ur=l("jasonliu"),gr=l(`
and `),Ct=a("a"),_r=l("Matt"),kr=l("."),na=h(),ke=a("h2"),Ue=a("a"),Ls=a("span"),T(jt.$$.fragment),br=h(),Ns=a("span"),Tr=l("EsmConfig"),aa=h(),Y=a("div"),T(St.$$.fragment),yr=h(),be=a("p"),vr=l("This is the configuration class to store the configuration of a "),Ds=a("code"),$r=l("ESMModel"),wr=l(`. It is used to instantiate a ESM model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ESM
`),Pt=a("a"),Er=l("esm-base-uncased"),Mr=l(" architecture."),Fr=h(),Te=a("p"),zr=l("Configuration objects inherit from "),Jo=a("a"),qr=l("PretrainedConfig"),xr=l(` and can be used to control the model outputs. Read the
documentation from `),Yo=a("a"),Cr=l("PretrainedConfig"),jr=l(" for more information."),Sr=h(),T(Re.$$.fragment),ra=h(),ye=a("h2"),We=a("a"),As=a("span"),T(Lt.$$.fragment),Pr=h(),Os=a("span"),Lr=l("EsmTokenizer"),ia=h(),C=a("div"),T(Nt.$$.fragment),Nr=h(),Is=a("p"),Dr=l("Constructs an ESM tokenizer."),Ar=h(),Qo=a("div"),T(Dt.$$.fragment),Or=h(),He=a("div"),T(At.$$.fragment),Ir=h(),ve=a("p"),Ur=l(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Us=a("code"),Rr=l("prepare_for_model"),Wr=l(" or "),Rs=a("code"),Hr=l("encode_plus"),Kr=l(" methods."),Vr=h(),ne=a("div"),T(Ot.$$.fragment),Br=h(),Xo=a("p"),Zr=l("Create the token type IDs corresponding to the sequences passed. "),es=a("a"),Gr=l(`What are token type
IDs?`),Jr=h(),Ws=a("p"),Yr=l("Should be overridden in a subclass if the model has a special way of building those."),Qr=h(),ts=a("div"),T(It.$$.fragment),la=h(),$e=a("h2"),Ke=a("a"),Hs=a("span"),T(Ut.$$.fragment),Xr=h(),Ks=a("span"),ei=l("EsmModel"),da=h(),q=a("div"),T(Rt.$$.fragment),ti=h(),Vs=a("p"),oi=l("The bare ESM Model transformer outputting raw hidden-states without any specific head on top."),si=h(),Wt=a("p"),ni=l("This model inherits from "),os=a("a"),ai=l("PreTrainedModel"),ri=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ii=h(),Ht=a("p"),li=l("This model is also a PyTorch "),Kt=a("a"),di=l("torch.nn.Module"),ci=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mi=h(),Vt=a("p"),pi=l(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Bt=a("a"),hi=l(`Attention is
all you need`),fi=l(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),ui=h(),j=a("p"),gi=l("To behave as an decoder the model needs to be initialized with the "),Bs=a("code"),_i=l("is_decoder"),ki=l(` argument of the configuration set
to `),Zs=a("code"),bi=l("True"),Ti=l(". To be used in a Seq2Seq model, the model needs to initialized with both "),Gs=a("code"),yi=l("is_decoder"),vi=l(` argument and
`),Js=a("code"),$i=l("add_cross_attention"),wi=l(" set to "),Ys=a("code"),Ei=l("True"),Mi=l("; an "),Qs=a("code"),Fi=l("encoder_hidden_states"),zi=l(" is then expected as an input to the forward pass."),qi=h(),X=a("div"),T(Zt.$$.fragment),xi=h(),we=a("p"),Ci=l("The "),ss=a("a"),ji=l("EsmModel"),Si=l(" forward method, overrides the "),Xs=a("code"),Pi=l("__call__"),Li=l(" special method."),Ni=h(),T(Ve.$$.fragment),Di=h(),T(Be.$$.fragment),ca=h(),Ee=a("h2"),Ze=a("a"),en=a("span"),T(Gt.$$.fragment),Ai=h(),tn=a("span"),Oi=l("EsmForMaskedLM"),ma=h(),N=a("div"),T(Jt.$$.fragment),Ii=h(),Yt=a("p"),Ui=l("ESM Model with a "),on=a("code"),Ri=l("language modeling"),Wi=l(" head on top."),Hi=h(),Qt=a("p"),Ki=l("This model inherits from "),ns=a("a"),Vi=l("PreTrainedModel"),Bi=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zi=h(),Xt=a("p"),Gi=l("This model is also a PyTorch "),eo=a("a"),Ji=l("torch.nn.Module"),Yi=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qi=h(),W=a("div"),T(to.$$.fragment),Xi=h(),Me=a("p"),el=l("The "),as=a("a"),tl=l("EsmForMaskedLM"),ol=l(" forward method, overrides the "),sn=a("code"),sl=l("__call__"),nl=l(" special method."),al=h(),T(Ge.$$.fragment),rl=h(),T(Je.$$.fragment),il=h(),T(Ye.$$.fragment),pa=h(),Fe=a("h2"),Qe=a("a"),nn=a("span"),T(oo.$$.fragment),ll=h(),an=a("span"),dl=l("EsmForSequenceClassification"),ha=h(),D=a("div"),T(so.$$.fragment),cl=h(),rn=a("p"),ml=l(`ESM Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),pl=h(),no=a("p"),hl=l("This model inherits from "),rs=a("a"),fl=l("PreTrainedModel"),ul=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gl=h(),ao=a("p"),_l=l("This model is also a PyTorch "),ro=a("a"),kl=l("torch.nn.Module"),bl=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tl=h(),x=a("div"),T(io.$$.fragment),yl=h(),ze=a("p"),vl=l("The "),is=a("a"),$l=l("EsmForSequenceClassification"),wl=l(" forward method, overrides the "),ln=a("code"),El=l("__call__"),Ml=l(" special method."),Fl=h(),T(Xe.$$.fragment),zl=h(),T(et.$$.fragment),ql=h(),T(tt.$$.fragment),xl=h(),T(ot.$$.fragment),Cl=h(),T(st.$$.fragment),fa=h(),qe=a("h2"),nt=a("a"),dn=a("span"),T(lo.$$.fragment),jl=h(),cn=a("span"),Sl=l("EsmForTokenClassification"),ua=h(),A=a("div"),T(co.$$.fragment),Pl=h(),mn=a("p"),Ll=l(`ESM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Nl=h(),mo=a("p"),Dl=l("This model inherits from "),ls=a("a"),Al=l("PreTrainedModel"),Ol=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Il=h(),po=a("p"),Ul=l("This model is also a PyTorch "),ho=a("a"),Rl=l("torch.nn.Module"),Wl=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hl=h(),H=a("div"),T(fo.$$.fragment),Kl=h(),xe=a("p"),Vl=l("The "),ds=a("a"),Bl=l("EsmForTokenClassification"),Zl=l(" forward method, overrides the "),pn=a("code"),Gl=l("__call__"),Jl=l(" special method."),Yl=h(),T(at.$$.fragment),Ql=h(),T(rt.$$.fragment),Xl=h(),T(it.$$.fragment),ga=h(),Ce=a("h2"),lt=a("a"),hn=a("span"),T(uo.$$.fragment),ed=h(),fn=a("span"),td=l("TFEsmModel"),_a=h(),O=a("div"),T(go.$$.fragment),od=h(),un=a("p"),sd=l("The bare ESM Model transformer outputting raw hidden-states without any specific head on top."),nd=h(),_o=a("p"),ad=l("This model inherits from "),cs=a("a"),rd=l("TFPreTrainedModel"),id=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ld=h(),ko=a("p"),dd=l("This model is also a Keras "),bo=a("a"),cd=l("Model"),md=l(` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),pd=h(),ee=a("div"),T(To.$$.fragment),hd=h(),je=a("p"),fd=l("The "),ms=a("a"),ud=l("TFEsmModel"),gd=l(" forward method, overrides the "),gn=a("code"),_d=l("__call__"),kd=l(" special method."),bd=h(),T(dt.$$.fragment),Td=h(),T(ct.$$.fragment),ka=h(),Se=a("h2"),mt=a("a"),_n=a("span"),T(yo.$$.fragment),yd=h(),kn=a("span"),vd=l("TFEsmForMaskedLM"),ba=h(),I=a("div"),T(vo.$$.fragment),$d=h(),$o=a("p"),wd=l("ESM Model with a "),bn=a("code"),Ed=l("language modeling"),Md=l(" head on top."),Fd=h(),wo=a("p"),zd=l("This model inherits from "),ps=a("a"),qd=l("TFPreTrainedModel"),xd=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cd=h(),Eo=a("p"),jd=l("This model is also a Keras "),Mo=a("a"),Sd=l("Model"),Pd=l(` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Ld=h(),K=a("div"),T(Fo.$$.fragment),Nd=h(),Pe=a("p"),Dd=l("The "),hs=a("a"),Ad=l("TFEsmForMaskedLM"),Od=l(" forward method, overrides the "),Tn=a("code"),Id=l("__call__"),Ud=l(" special method."),Rd=h(),T(pt.$$.fragment),Wd=h(),T(ht.$$.fragment),Hd=h(),T(ft.$$.fragment),Ta=h(),Le=a("h2"),ut=a("a"),yn=a("span"),T(zo.$$.fragment),Kd=h(),vn=a("span"),Vd=l("TFEsmForSequenceClassification"),ya=h(),U=a("div"),T(qo.$$.fragment),Bd=h(),$n=a("p"),Zd=l(`ESM Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Gd=h(),xo=a("p"),Jd=l("This model inherits from "),fs=a("a"),Yd=l("TFPreTrainedModel"),Qd=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xd=h(),Co=a("p"),ec=l("This model is also a Keras "),jo=a("a"),tc=l("Model"),oc=l(` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),sc=h(),V=a("div"),T(So.$$.fragment),nc=h(),Ne=a("p"),ac=l("The "),us=a("a"),rc=l("TFEsmForSequenceClassification"),ic=l(" forward method, overrides the "),wn=a("code"),lc=l("__call__"),dc=l(" special method."),cc=h(),T(gt.$$.fragment),mc=h(),T(_t.$$.fragment),pc=h(),T(kt.$$.fragment),va=h(),De=a("h2"),bt=a("a"),En=a("span"),T(Po.$$.fragment),hc=h(),Mn=a("span"),fc=l("TFEsmForTokenClassification"),$a=h(),R=a("div"),T(Lo.$$.fragment),uc=h(),Fn=a("p"),gc=l(`ESM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),_c=h(),No=a("p"),kc=l("This model inherits from "),gs=a("a"),bc=l("TFPreTrainedModel"),Tc=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yc=h(),Do=a("p"),vc=l("This model is also a Keras "),Ao=a("a"),$c=l("Model"),wc=l(` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Ec=h(),B=a("div"),T(Oo.$$.fragment),Mc=h(),Ae=a("p"),Fc=l("The "),_s=a("a"),zc=l("TFEsmForTokenClassification"),qc=l(" forward method, overrides the "),zn=a("code"),xc=l("__call__"),Cc=l(" special method."),jc=h(),T(Tt.$$.fragment),Sc=h(),T(yt.$$.fragment),Pc=h(),T(vt.$$.fragment),this.h()},l(t){const g=kp('[data-svelte="svelte-1phssyn"]',document.head);n=r(g,"META",{name:!0,content:!0}),g.forEach(o),_=f(t),c=r(t,"H1",{class:!0});var Io=i(c);m=r(Io,"A",{id:!0,class:!0,href:!0});var qn=i(m);b=r(qn,"SPAN",{});var xn=i(b);y(s.$$.fragment,xn),xn.forEach(o),qn.forEach(o),p=f(Io),F=r(Io,"SPAN",{});var Cn=i(F);er=d(Cn,"ESM"),Cn.forEach(o),Io.forEach(o),Gn=f(t),_e=r(t,"H2",{class:!0});var Uo=i(_e);Oe=r(Uo,"A",{id:!0,class:!0,href:!0});var jn=i(Oe);xs=r(jn,"SPAN",{});var Sn=i(xs);y(Ft.$$.fragment,Sn),Sn.forEach(o),jn.forEach(o),tr=f(Uo),Cs=r(Uo,"SPAN",{});var Pn=i(Cs);or=d(Pn,"Overview"),Pn.forEach(o),Uo.forEach(o),Jn=d(t,`

This page provides code and pre-trained weights for Transformer protein language models from Meta AI's Fundamental 
AI Research Team, providing the state-of-the-art ESM-2, and the previously released ESM-1b and ESM-1v. Transformer 
protein language models were introduced in the paper [Biological structure and function emerge from scaling 
unsupervised learning to 250 million protein sequences](https://www.pnas.org/content/118/15/e2016239118) by 
Alexander Rives, Joshua Meier, Tom Sercu, Siddharth Goyal, Zeming Lin, Jason Liu, Demi Guo, Myle Ott, 
C. Lawrence Zitnick, Jerry Ma, and Rob Fergus.
The first version of this paper was [preprinted in 2019](https://www.biorxiv.org/content/10.1101/622803v1?versioned=true).
`),Ie=r(t,"P",{});var Ro=i(Ie);sr=d(Ro,`ESM-2 outperforms all tested single-sequence protein language models across a range of structure prediction tasks,
and enables atomic resolution structure prediction.
It was released with the paper `),zt=r(Ro,"A",{href:!0,rel:!0});var Ln=i(zt);nr=d(Ln,`Language models of protein sequences at the scale of evolution enable accurate
structure prediction`),Ln.forEach(o),ar=d(Ro,` by Zeming Lin, Halil Akin, Roshan Rao, Brian Hie,
Zhongkai Zhu, Wenting Lu, Allan dos Santos Costa, Maryam Fazel-Zarandi, Tom Sercu, Sal Candido and Alexander Rives.`),Ro.forEach(o),Yn=f(t),Ho=r(t,"P",{});var Nn=i(Ho);rr=d(Nn,`The abstract from
\u201CBiological structure and function emerge from scaling unsupervised learning to 250
million protein sequences\u201D is`),Nn.forEach(o),Qn=f(t),Ko=r(t,"P",{});var Dn=i(Ko);js=r(Dn,"EM",{});var An=i(js);ir=d(An,`In the field of artificial intelligence, a combination of scale in data and model capacity enabled by unsupervised
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
improving state-of-the-art features for long-range contact prediction.`),An.forEach(o),Dn.forEach(o),Xn=f(t),Vo=r(t,"P",{});var On=i(Vo);lr=d(On,`The abstract from
\u201CLanguage models of protein sequences at the scale of evolution enable accurate structure prediction\u201D is`),On.forEach(o),ea=f(t),Bo=r(t,"P",{});var In=i(Bo);Ss=r(In,"EM",{});var Un=i(Ss);dr=d(Un,`Large language models have recently been shown to develop emergent capabilities with scale, going beyond
simple pattern matching to perform higher level reasoning and generate lifelike images and text. While
language models trained on protein sequences have been studied at a smaller scale, little is known about
what they learn about biology as they are scaled up. In this work we train models up to 15 billion parameters,
the largest language models of proteins to be evaluated to date. We find that as models are scaled they learn
information enabling the prediction of the three-dimensional structure of a protein at the resolution of
individual atoms. We present ESMFold for high accuracy end-to-end atomic level structure prediction directly
from the individual sequence of a protein. ESMFold has similar accuracy to AlphaFold2 and RoseTTAFold for
sequences with low perplexity that are well understood by the language model. ESMFold inference is an
order of magnitude faster than AlphaFold2, enabling exploration of the structural space of metagenomic
proteins in practical timescales.`),Un.forEach(o),In.forEach(o),ta=f(t),Zo=r(t,"P",{});var Rn=i(Zo);cr=d(Rn,"Tips:"),Rn.forEach(o),oa=f(t),Go=r(t,"UL",{});var Wn=i(Go);Ps=r(Wn,"LI",{});var Hn=i(Ps);mr=d(Hn,"ESM models are trained with a masked language modeling (MLM) objective."),Hn.forEach(o),Wn.forEach(o),sa=f(t),Q=r(t,"P",{});var se=i(Q);pr=d(se,"The original code can be found "),qt=r(se,"A",{href:!0,rel:!0});var Kn=i(qt);hr=d(Kn,"here"),Kn.forEach(o),fr=d(se,` and was
was developed by the Fundamental AI Research team at Meta AI.
This model was contributed to huggingface by `),xt=r(se,"A",{href:!0,rel:!0});var Vn=i(xt);ur=d(Vn,"jasonliu"),Vn.forEach(o),gr=d(se,`
and `),Ct=r(se,"A",{href:!0,rel:!0});var Bn=i(Ct);_r=d(Bn,"Matt"),Bn.forEach(o),kr=d(se,"."),se.forEach(o),na=f(t),ke=r(t,"H2",{class:!0});var Wo=i(ke);Ue=r(Wo,"A",{id:!0,class:!0,href:!0});var Zn=i(Ue);Ls=r(Zn,"SPAN",{});var Nc=i(Ls);y(jt.$$.fragment,Nc),Nc.forEach(o),Zn.forEach(o),br=f(Wo),Ns=r(Wo,"SPAN",{});var Dc=i(Ns);Tr=d(Dc,"EsmConfig"),Dc.forEach(o),Wo.forEach(o),aa=f(t),Y=r(t,"DIV",{class:!0});var $t=i(Y);y(St.$$.fragment,$t),yr=f($t),be=r($t,"P",{});var ks=i(be);vr=d(ks,"This is the configuration class to store the configuration of a "),Ds=r(ks,"CODE",{});var Ac=i(Ds);$r=d(Ac,"ESMModel"),Ac.forEach(o),wr=d(ks,`. It is used to instantiate a ESM model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ESM
`),Pt=r(ks,"A",{href:!0,rel:!0});var Oc=i(Pt);Er=d(Oc,"esm-base-uncased"),Oc.forEach(o),Mr=d(ks," architecture."),ks.forEach(o),Fr=f($t),Te=r($t,"P",{});var bs=i(Te);zr=d(bs,"Configuration objects inherit from "),Jo=r(bs,"A",{href:!0});var Ic=i(Jo);qr=d(Ic,"PretrainedConfig"),Ic.forEach(o),xr=d(bs,` and can be used to control the model outputs. Read the
documentation from `),Yo=r(bs,"A",{href:!0});var Uc=i(Yo);Cr=d(Uc,"PretrainedConfig"),Uc.forEach(o),jr=d(bs," for more information."),bs.forEach(o),Sr=f($t),y(Re.$$.fragment,$t),$t.forEach(o),ra=f(t),ye=r(t,"H2",{class:!0});var Ea=i(ye);We=r(Ea,"A",{id:!0,class:!0,href:!0});var Rc=i(We);As=r(Rc,"SPAN",{});var Wc=i(As);y(Lt.$$.fragment,Wc),Wc.forEach(o),Rc.forEach(o),Pr=f(Ea),Os=r(Ea,"SPAN",{});var Hc=i(Os);Lr=d(Hc,"EsmTokenizer"),Hc.forEach(o),Ea.forEach(o),ia=f(t),C=r(t,"DIV",{class:!0});var te=i(C);y(Nt.$$.fragment,te),Nr=f(te),Is=r(te,"P",{});var Kc=i(Is);Dr=d(Kc,"Constructs an ESM tokenizer."),Kc.forEach(o),Ar=f(te),Qo=r(te,"DIV",{class:!0});var Vc=i(Qo);y(Dt.$$.fragment,Vc),Vc.forEach(o),Or=f(te),He=r(te,"DIV",{class:!0});var Ma=i(He);y(At.$$.fragment,Ma),Ir=f(Ma),ve=r(Ma,"P",{});var Ts=i(ve);Ur=d(Ts,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Us=r(Ts,"CODE",{});var Bc=i(Us);Rr=d(Bc,"prepare_for_model"),Bc.forEach(o),Wr=d(Ts," or "),Rs=r(Ts,"CODE",{});var Zc=i(Rs);Hr=d(Zc,"encode_plus"),Zc.forEach(o),Kr=d(Ts," methods."),Ts.forEach(o),Ma.forEach(o),Vr=f(te),ne=r(te,"DIV",{class:!0});var ys=i(ne);y(Ot.$$.fragment,ys),Br=f(ys),Xo=r(ys,"P",{});var Lc=i(Xo);Zr=d(Lc,"Create the token type IDs corresponding to the sequences passed. "),es=r(Lc,"A",{href:!0});var Gc=i(es);Gr=d(Gc,`What are token type
IDs?`),Gc.forEach(o),Lc.forEach(o),Jr=f(ys),Ws=r(ys,"P",{});var Jc=i(Ws);Yr=d(Jc,"Should be overridden in a subclass if the model has a special way of building those."),Jc.forEach(o),ys.forEach(o),Qr=f(te),ts=r(te,"DIV",{class:!0});var Yc=i(ts);y(It.$$.fragment,Yc),Yc.forEach(o),te.forEach(o),la=f(t),$e=r(t,"H2",{class:!0});var Fa=i($e);Ke=r(Fa,"A",{id:!0,class:!0,href:!0});var Qc=i(Ke);Hs=r(Qc,"SPAN",{});var Xc=i(Hs);y(Ut.$$.fragment,Xc),Xc.forEach(o),Qc.forEach(o),Xr=f(Fa),Ks=r(Fa,"SPAN",{});var em=i(Ks);ei=d(em,"EsmModel"),em.forEach(o),Fa.forEach(o),da=f(t),q=r(t,"DIV",{class:!0});var Z=i(q);y(Rt.$$.fragment,Z),ti=f(Z),Vs=r(Z,"P",{});var tm=i(Vs);oi=d(tm,"The bare ESM Model transformer outputting raw hidden-states without any specific head on top."),tm.forEach(o),si=f(Z),Wt=r(Z,"P",{});var za=i(Wt);ni=d(za,"This model inherits from "),os=r(za,"A",{href:!0});var om=i(os);ai=d(om,"PreTrainedModel"),om.forEach(o),ri=d(za,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),za.forEach(o),ii=f(Z),Ht=r(Z,"P",{});var qa=i(Ht);li=d(qa,"This model is also a PyTorch "),Kt=r(qa,"A",{href:!0,rel:!0});var sm=i(Kt);di=d(sm,"torch.nn.Module"),sm.forEach(o),ci=d(qa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qa.forEach(o),mi=f(Z),Vt=r(Z,"P",{});var xa=i(Vt);pi=d(xa,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Bt=r(xa,"A",{href:!0,rel:!0});var nm=i(Bt);hi=d(nm,`Attention is
all you need`),nm.forEach(o),fi=d(xa,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),xa.forEach(o),ui=f(Z),j=r(Z,"P",{});var G=i(j);gi=d(G,"To behave as an decoder the model needs to be initialized with the "),Bs=r(G,"CODE",{});var am=i(Bs);_i=d(am,"is_decoder"),am.forEach(o),ki=d(G,` argument of the configuration set
to `),Zs=r(G,"CODE",{});var rm=i(Zs);bi=d(rm,"True"),rm.forEach(o),Ti=d(G,". To be used in a Seq2Seq model, the model needs to initialized with both "),Gs=r(G,"CODE",{});var im=i(Gs);yi=d(im,"is_decoder"),im.forEach(o),vi=d(G,` argument and
`),Js=r(G,"CODE",{});var lm=i(Js);$i=d(lm,"add_cross_attention"),lm.forEach(o),wi=d(G," set to "),Ys=r(G,"CODE",{});var dm=i(Ys);Ei=d(dm,"True"),dm.forEach(o),Mi=d(G,"; an "),Qs=r(G,"CODE",{});var cm=i(Qs);Fi=d(cm,"encoder_hidden_states"),cm.forEach(o),zi=d(G," is then expected as an input to the forward pass."),G.forEach(o),qi=f(Z),X=r(Z,"DIV",{class:!0});var wt=i(X);y(Zt.$$.fragment,wt),xi=f(wt),we=r(wt,"P",{});var vs=i(we);Ci=d(vs,"The "),ss=r(vs,"A",{href:!0});var mm=i(ss);ji=d(mm,"EsmModel"),mm.forEach(o),Si=d(vs," forward method, overrides the "),Xs=r(vs,"CODE",{});var pm=i(Xs);Pi=d(pm,"__call__"),pm.forEach(o),Li=d(vs," special method."),vs.forEach(o),Ni=f(wt),y(Ve.$$.fragment,wt),Di=f(wt),y(Be.$$.fragment,wt),wt.forEach(o),Z.forEach(o),ca=f(t),Ee=r(t,"H2",{class:!0});var Ca=i(Ee);Ze=r(Ca,"A",{id:!0,class:!0,href:!0});var hm=i(Ze);en=r(hm,"SPAN",{});var fm=i(en);y(Gt.$$.fragment,fm),fm.forEach(o),hm.forEach(o),Ai=f(Ca),tn=r(Ca,"SPAN",{});var um=i(tn);Oi=d(um,"EsmForMaskedLM"),um.forEach(o),Ca.forEach(o),ma=f(t),N=r(t,"DIV",{class:!0});var ae=i(N);y(Jt.$$.fragment,ae),Ii=f(ae),Yt=r(ae,"P",{});var ja=i(Yt);Ui=d(ja,"ESM Model with a "),on=r(ja,"CODE",{});var gm=i(on);Ri=d(gm,"language modeling"),gm.forEach(o),Wi=d(ja," head on top."),ja.forEach(o),Hi=f(ae),Qt=r(ae,"P",{});var Sa=i(Qt);Ki=d(Sa,"This model inherits from "),ns=r(Sa,"A",{href:!0});var _m=i(ns);Vi=d(_m,"PreTrainedModel"),_m.forEach(o),Bi=d(Sa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sa.forEach(o),Zi=f(ae),Xt=r(ae,"P",{});var Pa=i(Xt);Gi=d(Pa,"This model is also a PyTorch "),eo=r(Pa,"A",{href:!0,rel:!0});var km=i(eo);Ji=d(km,"torch.nn.Module"),km.forEach(o),Yi=d(Pa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pa.forEach(o),Qi=f(ae),W=r(ae,"DIV",{class:!0});var re=i(W);y(to.$$.fragment,re),Xi=f(re),Me=r(re,"P",{});var $s=i(Me);el=d($s,"The "),as=r($s,"A",{href:!0});var bm=i(as);tl=d(bm,"EsmForMaskedLM"),bm.forEach(o),ol=d($s," forward method, overrides the "),sn=r($s,"CODE",{});var Tm=i(sn);sl=d(Tm,"__call__"),Tm.forEach(o),nl=d($s," special method."),$s.forEach(o),al=f(re),y(Ge.$$.fragment,re),rl=f(re),y(Je.$$.fragment,re),il=f(re),y(Ye.$$.fragment,re),re.forEach(o),ae.forEach(o),pa=f(t),Fe=r(t,"H2",{class:!0});var La=i(Fe);Qe=r(La,"A",{id:!0,class:!0,href:!0});var ym=i(Qe);nn=r(ym,"SPAN",{});var vm=i(nn);y(oo.$$.fragment,vm),vm.forEach(o),ym.forEach(o),ll=f(La),an=r(La,"SPAN",{});var $m=i(an);dl=d($m,"EsmForSequenceClassification"),$m.forEach(o),La.forEach(o),ha=f(t),D=r(t,"DIV",{class:!0});var ie=i(D);y(so.$$.fragment,ie),cl=f(ie),rn=r(ie,"P",{});var wm=i(rn);ml=d(wm,`ESM Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),wm.forEach(o),pl=f(ie),no=r(ie,"P",{});var Na=i(no);hl=d(Na,"This model inherits from "),rs=r(Na,"A",{href:!0});var Em=i(rs);fl=d(Em,"PreTrainedModel"),Em.forEach(o),ul=d(Na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Na.forEach(o),gl=f(ie),ao=r(ie,"P",{});var Da=i(ao);_l=d(Da,"This model is also a PyTorch "),ro=r(Da,"A",{href:!0,rel:!0});var Mm=i(ro);kl=d(Mm,"torch.nn.Module"),Mm.forEach(o),bl=d(Da,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Da.forEach(o),Tl=f(ie),x=r(ie,"DIV",{class:!0});var J=i(x);y(io.$$.fragment,J),yl=f(J),ze=r(J,"P",{});var ws=i(ze);vl=d(ws,"The "),is=r(ws,"A",{href:!0});var Fm=i(is);$l=d(Fm,"EsmForSequenceClassification"),Fm.forEach(o),wl=d(ws," forward method, overrides the "),ln=r(ws,"CODE",{});var zm=i(ln);El=d(zm,"__call__"),zm.forEach(o),Ml=d(ws," special method."),ws.forEach(o),Fl=f(J),y(Xe.$$.fragment,J),zl=f(J),y(et.$$.fragment,J),ql=f(J),y(tt.$$.fragment,J),xl=f(J),y(ot.$$.fragment,J),Cl=f(J),y(st.$$.fragment,J),J.forEach(o),ie.forEach(o),fa=f(t),qe=r(t,"H2",{class:!0});var Aa=i(qe);nt=r(Aa,"A",{id:!0,class:!0,href:!0});var qm=i(nt);dn=r(qm,"SPAN",{});var xm=i(dn);y(lo.$$.fragment,xm),xm.forEach(o),qm.forEach(o),jl=f(Aa),cn=r(Aa,"SPAN",{});var Cm=i(cn);Sl=d(Cm,"EsmForTokenClassification"),Cm.forEach(o),Aa.forEach(o),ua=f(t),A=r(t,"DIV",{class:!0});var le=i(A);y(co.$$.fragment,le),Pl=f(le),mn=r(le,"P",{});var jm=i(mn);Ll=d(jm,`ESM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),jm.forEach(o),Nl=f(le),mo=r(le,"P",{});var Oa=i(mo);Dl=d(Oa,"This model inherits from "),ls=r(Oa,"A",{href:!0});var Sm=i(ls);Al=d(Sm,"PreTrainedModel"),Sm.forEach(o),Ol=d(Oa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oa.forEach(o),Il=f(le),po=r(le,"P",{});var Ia=i(po);Ul=d(Ia,"This model is also a PyTorch "),ho=r(Ia,"A",{href:!0,rel:!0});var Pm=i(ho);Rl=d(Pm,"torch.nn.Module"),Pm.forEach(o),Wl=d(Ia,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ia.forEach(o),Hl=f(le),H=r(le,"DIV",{class:!0});var de=i(H);y(fo.$$.fragment,de),Kl=f(de),xe=r(de,"P",{});var Es=i(xe);Vl=d(Es,"The "),ds=r(Es,"A",{href:!0});var Lm=i(ds);Bl=d(Lm,"EsmForTokenClassification"),Lm.forEach(o),Zl=d(Es," forward method, overrides the "),pn=r(Es,"CODE",{});var Nm=i(pn);Gl=d(Nm,"__call__"),Nm.forEach(o),Jl=d(Es," special method."),Es.forEach(o),Yl=f(de),y(at.$$.fragment,de),Ql=f(de),y(rt.$$.fragment,de),Xl=f(de),y(it.$$.fragment,de),de.forEach(o),le.forEach(o),ga=f(t),Ce=r(t,"H2",{class:!0});var Ua=i(Ce);lt=r(Ua,"A",{id:!0,class:!0,href:!0});var Dm=i(lt);hn=r(Dm,"SPAN",{});var Am=i(hn);y(uo.$$.fragment,Am),Am.forEach(o),Dm.forEach(o),ed=f(Ua),fn=r(Ua,"SPAN",{});var Om=i(fn);td=d(Om,"TFEsmModel"),Om.forEach(o),Ua.forEach(o),_a=f(t),O=r(t,"DIV",{class:!0});var ce=i(O);y(go.$$.fragment,ce),od=f(ce),un=r(ce,"P",{});var Im=i(un);sd=d(Im,"The bare ESM Model transformer outputting raw hidden-states without any specific head on top."),Im.forEach(o),nd=f(ce),_o=r(ce,"P",{});var Ra=i(_o);ad=d(Ra,"This model inherits from "),cs=r(Ra,"A",{href:!0});var Um=i(cs);rd=d(Um,"TFPreTrainedModel"),Um.forEach(o),id=d(Ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ra.forEach(o),ld=f(ce),ko=r(ce,"P",{});var Wa=i(ko);dd=d(Wa,"This model is also a Keras "),bo=r(Wa,"A",{href:!0,rel:!0});var Rm=i(bo);cd=d(Rm,"Model"),Rm.forEach(o),md=d(Wa,` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Wa.forEach(o),pd=f(ce),ee=r(ce,"DIV",{class:!0});var Et=i(ee);y(To.$$.fragment,Et),hd=f(Et),je=r(Et,"P",{});var Ms=i(je);fd=d(Ms,"The "),ms=r(Ms,"A",{href:!0});var Wm=i(ms);ud=d(Wm,"TFEsmModel"),Wm.forEach(o),gd=d(Ms," forward method, overrides the "),gn=r(Ms,"CODE",{});var Hm=i(gn);_d=d(Hm,"__call__"),Hm.forEach(o),kd=d(Ms," special method."),Ms.forEach(o),bd=f(Et),y(dt.$$.fragment,Et),Td=f(Et),y(ct.$$.fragment,Et),Et.forEach(o),ce.forEach(o),ka=f(t),Se=r(t,"H2",{class:!0});var Ha=i(Se);mt=r(Ha,"A",{id:!0,class:!0,href:!0});var Km=i(mt);_n=r(Km,"SPAN",{});var Vm=i(_n);y(yo.$$.fragment,Vm),Vm.forEach(o),Km.forEach(o),yd=f(Ha),kn=r(Ha,"SPAN",{});var Bm=i(kn);vd=d(Bm,"TFEsmForMaskedLM"),Bm.forEach(o),Ha.forEach(o),ba=f(t),I=r(t,"DIV",{class:!0});var me=i(I);y(vo.$$.fragment,me),$d=f(me),$o=r(me,"P",{});var Ka=i($o);wd=d(Ka,"ESM Model with a "),bn=r(Ka,"CODE",{});var Zm=i(bn);Ed=d(Zm,"language modeling"),Zm.forEach(o),Md=d(Ka," head on top."),Ka.forEach(o),Fd=f(me),wo=r(me,"P",{});var Va=i(wo);zd=d(Va,"This model inherits from "),ps=r(Va,"A",{href:!0});var Gm=i(ps);qd=d(Gm,"TFPreTrainedModel"),Gm.forEach(o),xd=d(Va,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Va.forEach(o),Cd=f(me),Eo=r(me,"P",{});var Ba=i(Eo);jd=d(Ba,"This model is also a Keras "),Mo=r(Ba,"A",{href:!0,rel:!0});var Jm=i(Mo);Sd=d(Jm,"Model"),Jm.forEach(o),Pd=d(Ba,` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Ba.forEach(o),Ld=f(me),K=r(me,"DIV",{class:!0});var pe=i(K);y(Fo.$$.fragment,pe),Nd=f(pe),Pe=r(pe,"P",{});var Fs=i(Pe);Dd=d(Fs,"The "),hs=r(Fs,"A",{href:!0});var Ym=i(hs);Ad=d(Ym,"TFEsmForMaskedLM"),Ym.forEach(o),Od=d(Fs," forward method, overrides the "),Tn=r(Fs,"CODE",{});var Qm=i(Tn);Id=d(Qm,"__call__"),Qm.forEach(o),Ud=d(Fs," special method."),Fs.forEach(o),Rd=f(pe),y(pt.$$.fragment,pe),Wd=f(pe),y(ht.$$.fragment,pe),Hd=f(pe),y(ft.$$.fragment,pe),pe.forEach(o),me.forEach(o),Ta=f(t),Le=r(t,"H2",{class:!0});var Za=i(Le);ut=r(Za,"A",{id:!0,class:!0,href:!0});var Xm=i(ut);yn=r(Xm,"SPAN",{});var ep=i(yn);y(zo.$$.fragment,ep),ep.forEach(o),Xm.forEach(o),Kd=f(Za),vn=r(Za,"SPAN",{});var tp=i(vn);Vd=d(tp,"TFEsmForSequenceClassification"),tp.forEach(o),Za.forEach(o),ya=f(t),U=r(t,"DIV",{class:!0});var he=i(U);y(qo.$$.fragment,he),Bd=f(he),$n=r(he,"P",{});var op=i($n);Zd=d(op,`ESM Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),op.forEach(o),Gd=f(he),xo=r(he,"P",{});var Ga=i(xo);Jd=d(Ga,"This model inherits from "),fs=r(Ga,"A",{href:!0});var sp=i(fs);Yd=d(sp,"TFPreTrainedModel"),sp.forEach(o),Qd=d(Ga,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ga.forEach(o),Xd=f(he),Co=r(he,"P",{});var Ja=i(Co);ec=d(Ja,"This model is also a Keras "),jo=r(Ja,"A",{href:!0,rel:!0});var np=i(jo);tc=d(np,"Model"),np.forEach(o),oc=d(Ja,` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Ja.forEach(o),sc=f(he),V=r(he,"DIV",{class:!0});var fe=i(V);y(So.$$.fragment,fe),nc=f(fe),Ne=r(fe,"P",{});var zs=i(Ne);ac=d(zs,"The "),us=r(zs,"A",{href:!0});var ap=i(us);rc=d(ap,"TFEsmForSequenceClassification"),ap.forEach(o),ic=d(zs," forward method, overrides the "),wn=r(zs,"CODE",{});var rp=i(wn);lc=d(rp,"__call__"),rp.forEach(o),dc=d(zs," special method."),zs.forEach(o),cc=f(fe),y(gt.$$.fragment,fe),mc=f(fe),y(_t.$$.fragment,fe),pc=f(fe),y(kt.$$.fragment,fe),fe.forEach(o),he.forEach(o),va=f(t),De=r(t,"H2",{class:!0});var Ya=i(De);bt=r(Ya,"A",{id:!0,class:!0,href:!0});var ip=i(bt);En=r(ip,"SPAN",{});var lp=i(En);y(Po.$$.fragment,lp),lp.forEach(o),ip.forEach(o),hc=f(Ya),Mn=r(Ya,"SPAN",{});var dp=i(Mn);fc=d(dp,"TFEsmForTokenClassification"),dp.forEach(o),Ya.forEach(o),$a=f(t),R=r(t,"DIV",{class:!0});var ue=i(R);y(Lo.$$.fragment,ue),uc=f(ue),Fn=r(ue,"P",{});var cp=i(Fn);gc=d(cp,`ESM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),cp.forEach(o),_c=f(ue),No=r(ue,"P",{});var Qa=i(No);kc=d(Qa,"This model inherits from "),gs=r(Qa,"A",{href:!0});var mp=i(gs);bc=d(mp,"TFPreTrainedModel"),mp.forEach(o),Tc=d(Qa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qa.forEach(o),yc=f(ue),Do=r(ue,"P",{});var Xa=i(Do);vc=d(Xa,"This model is also a Keras "),Ao=r(Xa,"A",{href:!0,rel:!0});var pp=i(Ao);$c=d(pp,"Model"),pp.forEach(o),wc=d(Xa,` subclass. Use it as a
regular Keras model and refer to the TF/Keras documentation for all matters related to general usage and behavior.`),Xa.forEach(o),Ec=f(ue),B=r(ue,"DIV",{class:!0});var ge=i(B);y(Oo.$$.fragment,ge),Mc=f(ge),Ae=r(ge,"P",{});var qs=i(Ae);Fc=d(qs,"The "),_s=r(qs,"A",{href:!0});var hp=i(_s);zc=d(hp,"TFEsmForTokenClassification"),hp.forEach(o),qc=d(qs," forward method, overrides the "),zn=r(qs,"CODE",{});var fp=i(zn);xc=d(fp,"__call__"),fp.forEach(o),Cc=d(qs," special method."),qs.forEach(o),jc=f(ge),y(Tt.$$.fragment,ge),Sc=f(ge),y(yt.$$.fragment,ge),Pc=f(ge),y(vt.$$.fragment,ge),ge.forEach(o),ue.forEach(o),this.h()},h(){u(n,"name","hf:doc:metadata"),u(n,"content",JSON.stringify(Vp)),u(m,"id","esm"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#esm"),u(c,"class","relative group"),u(Oe,"id","overview"),u(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Oe,"href","#overview"),u(_e,"class","relative group"),u(zt,"href","https://doi.org/10.1101/2022.07.20.500902"),u(zt,"rel","nofollow"),u(qt,"href","https://github.com/facebookresearch/esm"),u(qt,"rel","nofollow"),u(xt,"href","https://huggingface.co/jasonliu"),u(xt,"rel","nofollow"),u(Ct,"href","https://huggingface.co/Rocketknight1"),u(Ct,"rel","nofollow"),u(Ue,"id","transformers.EsmConfig"),u(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ue,"href","#transformers.EsmConfig"),u(ke,"class","relative group"),u(Pt,"href","https://huggingface.co/esm-base-uncased"),u(Pt,"rel","nofollow"),u(Jo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Yo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"id","transformers.EsmTokenizer"),u(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(We,"href","#transformers.EsmTokenizer"),u(ye,"class","relative group"),u(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"href","../glossary#token-type-ids"),u(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ts,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"id","transformers.EsmModel"),u(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ke,"href","#transformers.EsmModel"),u($e,"class","relative group"),u(os,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Kt,"rel","nofollow"),u(Bt,"href","https://arxiv.org/abs/1706.03762"),u(Bt,"rel","nofollow"),u(ss,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmModel"),u(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"id","transformers.EsmForMaskedLM"),u(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ze,"href","#transformers.EsmForMaskedLM"),u(Ee,"class","relative group"),u(ns,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(eo,"rel","nofollow"),u(as,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmForMaskedLM"),u(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"id","transformers.EsmForSequenceClassification"),u(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qe,"href","#transformers.EsmForSequenceClassification"),u(Fe,"class","relative group"),u(rs,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ro,"rel","nofollow"),u(is,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmForSequenceClassification"),u(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"id","transformers.EsmForTokenClassification"),u(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(nt,"href","#transformers.EsmForTokenClassification"),u(qe,"class","relative group"),u(ls,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ho,"rel","nofollow"),u(ds,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmForTokenClassification"),u(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"id","transformers.TFEsmModel"),u(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(lt,"href","#transformers.TFEsmModel"),u(Ce,"class","relative group"),u(cs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(bo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(bo,"rel","nofollow"),u(ms,"href","/docs/transformers/main/en/model_doc/esm#transformers.TFEsmModel"),u(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"id","transformers.TFEsmForMaskedLM"),u(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mt,"href","#transformers.TFEsmForMaskedLM"),u(Se,"class","relative group"),u(ps,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Mo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Mo,"rel","nofollow"),u(hs,"href","/docs/transformers/main/en/model_doc/esm#transformers.TFEsmForMaskedLM"),u(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ut,"id","transformers.TFEsmForSequenceClassification"),u(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ut,"href","#transformers.TFEsmForSequenceClassification"),u(Le,"class","relative group"),u(fs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(jo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(jo,"rel","nofollow"),u(us,"href","/docs/transformers/main/en/model_doc/esm#transformers.TFEsmForSequenceClassification"),u(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"id","transformers.TFEsmForTokenClassification"),u(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bt,"href","#transformers.TFEsmForTokenClassification"),u(De,"class","relative group"),u(gs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ao,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ao,"rel","nofollow"),u(_s,"href","/docs/transformers/main/en/model_doc/esm#transformers.TFEsmForTokenClassification"),u(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,n),k(t,_,g),k(t,c,g),e(c,m),e(m,b),v(s,b,null),e(c,p),e(c,F),e(F,er),k(t,Gn,g),k(t,_e,g),e(_e,Oe),e(Oe,xs),v(Ft,xs,null),e(_e,tr),e(_e,Cs),e(Cs,or),k(t,Jn,g),k(t,Ie,g),e(Ie,sr),e(Ie,zt),e(zt,nr),e(Ie,ar),k(t,Yn,g),k(t,Ho,g),e(Ho,rr),k(t,Qn,g),k(t,Ko,g),e(Ko,js),e(js,ir),k(t,Xn,g),k(t,Vo,g),e(Vo,lr),k(t,ea,g),k(t,Bo,g),e(Bo,Ss),e(Ss,dr),k(t,ta,g),k(t,Zo,g),e(Zo,cr),k(t,oa,g),k(t,Go,g),e(Go,Ps),e(Ps,mr),k(t,sa,g),k(t,Q,g),e(Q,pr),e(Q,qt),e(qt,hr),e(Q,fr),e(Q,xt),e(xt,ur),e(Q,gr),e(Q,Ct),e(Ct,_r),e(Q,kr),k(t,na,g),k(t,ke,g),e(ke,Ue),e(Ue,Ls),v(jt,Ls,null),e(ke,br),e(ke,Ns),e(Ns,Tr),k(t,aa,g),k(t,Y,g),v(St,Y,null),e(Y,yr),e(Y,be),e(be,vr),e(be,Ds),e(Ds,$r),e(be,wr),e(be,Pt),e(Pt,Er),e(be,Mr),e(Y,Fr),e(Y,Te),e(Te,zr),e(Te,Jo),e(Jo,qr),e(Te,xr),e(Te,Yo),e(Yo,Cr),e(Te,jr),e(Y,Sr),v(Re,Y,null),k(t,ra,g),k(t,ye,g),e(ye,We),e(We,As),v(Lt,As,null),e(ye,Pr),e(ye,Os),e(Os,Lr),k(t,ia,g),k(t,C,g),v(Nt,C,null),e(C,Nr),e(C,Is),e(Is,Dr),e(C,Ar),e(C,Qo),v(Dt,Qo,null),e(C,Or),e(C,He),v(At,He,null),e(He,Ir),e(He,ve),e(ve,Ur),e(ve,Us),e(Us,Rr),e(ve,Wr),e(ve,Rs),e(Rs,Hr),e(ve,Kr),e(C,Vr),e(C,ne),v(Ot,ne,null),e(ne,Br),e(ne,Xo),e(Xo,Zr),e(Xo,es),e(es,Gr),e(ne,Jr),e(ne,Ws),e(Ws,Yr),e(C,Qr),e(C,ts),v(It,ts,null),k(t,la,g),k(t,$e,g),e($e,Ke),e(Ke,Hs),v(Ut,Hs,null),e($e,Xr),e($e,Ks),e(Ks,ei),k(t,da,g),k(t,q,g),v(Rt,q,null),e(q,ti),e(q,Vs),e(Vs,oi),e(q,si),e(q,Wt),e(Wt,ni),e(Wt,os),e(os,ai),e(Wt,ri),e(q,ii),e(q,Ht),e(Ht,li),e(Ht,Kt),e(Kt,di),e(Ht,ci),e(q,mi),e(q,Vt),e(Vt,pi),e(Vt,Bt),e(Bt,hi),e(Vt,fi),e(q,ui),e(q,j),e(j,gi),e(j,Bs),e(Bs,_i),e(j,ki),e(j,Zs),e(Zs,bi),e(j,Ti),e(j,Gs),e(Gs,yi),e(j,vi),e(j,Js),e(Js,$i),e(j,wi),e(j,Ys),e(Ys,Ei),e(j,Mi),e(j,Qs),e(Qs,Fi),e(j,zi),e(q,qi),e(q,X),v(Zt,X,null),e(X,xi),e(X,we),e(we,Ci),e(we,ss),e(ss,ji),e(we,Si),e(we,Xs),e(Xs,Pi),e(we,Li),e(X,Ni),v(Ve,X,null),e(X,Di),v(Be,X,null),k(t,ca,g),k(t,Ee,g),e(Ee,Ze),e(Ze,en),v(Gt,en,null),e(Ee,Ai),e(Ee,tn),e(tn,Oi),k(t,ma,g),k(t,N,g),v(Jt,N,null),e(N,Ii),e(N,Yt),e(Yt,Ui),e(Yt,on),e(on,Ri),e(Yt,Wi),e(N,Hi),e(N,Qt),e(Qt,Ki),e(Qt,ns),e(ns,Vi),e(Qt,Bi),e(N,Zi),e(N,Xt),e(Xt,Gi),e(Xt,eo),e(eo,Ji),e(Xt,Yi),e(N,Qi),e(N,W),v(to,W,null),e(W,Xi),e(W,Me),e(Me,el),e(Me,as),e(as,tl),e(Me,ol),e(Me,sn),e(sn,sl),e(Me,nl),e(W,al),v(Ge,W,null),e(W,rl),v(Je,W,null),e(W,il),v(Ye,W,null),k(t,pa,g),k(t,Fe,g),e(Fe,Qe),e(Qe,nn),v(oo,nn,null),e(Fe,ll),e(Fe,an),e(an,dl),k(t,ha,g),k(t,D,g),v(so,D,null),e(D,cl),e(D,rn),e(rn,ml),e(D,pl),e(D,no),e(no,hl),e(no,rs),e(rs,fl),e(no,ul),e(D,gl),e(D,ao),e(ao,_l),e(ao,ro),e(ro,kl),e(ao,bl),e(D,Tl),e(D,x),v(io,x,null),e(x,yl),e(x,ze),e(ze,vl),e(ze,is),e(is,$l),e(ze,wl),e(ze,ln),e(ln,El),e(ze,Ml),e(x,Fl),v(Xe,x,null),e(x,zl),v(et,x,null),e(x,ql),v(tt,x,null),e(x,xl),v(ot,x,null),e(x,Cl),v(st,x,null),k(t,fa,g),k(t,qe,g),e(qe,nt),e(nt,dn),v(lo,dn,null),e(qe,jl),e(qe,cn),e(cn,Sl),k(t,ua,g),k(t,A,g),v(co,A,null),e(A,Pl),e(A,mn),e(mn,Ll),e(A,Nl),e(A,mo),e(mo,Dl),e(mo,ls),e(ls,Al),e(mo,Ol),e(A,Il),e(A,po),e(po,Ul),e(po,ho),e(ho,Rl),e(po,Wl),e(A,Hl),e(A,H),v(fo,H,null),e(H,Kl),e(H,xe),e(xe,Vl),e(xe,ds),e(ds,Bl),e(xe,Zl),e(xe,pn),e(pn,Gl),e(xe,Jl),e(H,Yl),v(at,H,null),e(H,Ql),v(rt,H,null),e(H,Xl),v(it,H,null),k(t,ga,g),k(t,Ce,g),e(Ce,lt),e(lt,hn),v(uo,hn,null),e(Ce,ed),e(Ce,fn),e(fn,td),k(t,_a,g),k(t,O,g),v(go,O,null),e(O,od),e(O,un),e(un,sd),e(O,nd),e(O,_o),e(_o,ad),e(_o,cs),e(cs,rd),e(_o,id),e(O,ld),e(O,ko),e(ko,dd),e(ko,bo),e(bo,cd),e(ko,md),e(O,pd),e(O,ee),v(To,ee,null),e(ee,hd),e(ee,je),e(je,fd),e(je,ms),e(ms,ud),e(je,gd),e(je,gn),e(gn,_d),e(je,kd),e(ee,bd),v(dt,ee,null),e(ee,Td),v(ct,ee,null),k(t,ka,g),k(t,Se,g),e(Se,mt),e(mt,_n),v(yo,_n,null),e(Se,yd),e(Se,kn),e(kn,vd),k(t,ba,g),k(t,I,g),v(vo,I,null),e(I,$d),e(I,$o),e($o,wd),e($o,bn),e(bn,Ed),e($o,Md),e(I,Fd),e(I,wo),e(wo,zd),e(wo,ps),e(ps,qd),e(wo,xd),e(I,Cd),e(I,Eo),e(Eo,jd),e(Eo,Mo),e(Mo,Sd),e(Eo,Pd),e(I,Ld),e(I,K),v(Fo,K,null),e(K,Nd),e(K,Pe),e(Pe,Dd),e(Pe,hs),e(hs,Ad),e(Pe,Od),e(Pe,Tn),e(Tn,Id),e(Pe,Ud),e(K,Rd),v(pt,K,null),e(K,Wd),v(ht,K,null),e(K,Hd),v(ft,K,null),k(t,Ta,g),k(t,Le,g),e(Le,ut),e(ut,yn),v(zo,yn,null),e(Le,Kd),e(Le,vn),e(vn,Vd),k(t,ya,g),k(t,U,g),v(qo,U,null),e(U,Bd),e(U,$n),e($n,Zd),e(U,Gd),e(U,xo),e(xo,Jd),e(xo,fs),e(fs,Yd),e(xo,Qd),e(U,Xd),e(U,Co),e(Co,ec),e(Co,jo),e(jo,tc),e(Co,oc),e(U,sc),e(U,V),v(So,V,null),e(V,nc),e(V,Ne),e(Ne,ac),e(Ne,us),e(us,rc),e(Ne,ic),e(Ne,wn),e(wn,lc),e(Ne,dc),e(V,cc),v(gt,V,null),e(V,mc),v(_t,V,null),e(V,pc),v(kt,V,null),k(t,va,g),k(t,De,g),e(De,bt),e(bt,En),v(Po,En,null),e(De,hc),e(De,Mn),e(Mn,fc),k(t,$a,g),k(t,R,g),v(Lo,R,null),e(R,uc),e(R,Fn),e(Fn,gc),e(R,_c),e(R,No),e(No,kc),e(No,gs),e(gs,bc),e(No,Tc),e(R,yc),e(R,Do),e(Do,vc),e(Do,Ao),e(Ao,$c),e(Do,wc),e(R,Ec),e(R,B),v(Oo,B,null),e(B,Mc),e(B,Ae),e(Ae,Fc),e(Ae,_s),e(_s,zc),e(Ae,qc),e(Ae,zn),e(zn,xc),e(Ae,Cc),e(B,jc),v(Tt,B,null),e(B,Sc),v(yt,B,null),e(B,Pc),v(vt,B,null),wa=!0},p(t,[g]){const Io={};g&2&&(Io.$$scope={dirty:g,ctx:t}),Re.$set(Io);const qn={};g&2&&(qn.$$scope={dirty:g,ctx:t}),Ve.$set(qn);const xn={};g&2&&(xn.$$scope={dirty:g,ctx:t}),Be.$set(xn);const Cn={};g&2&&(Cn.$$scope={dirty:g,ctx:t}),Ge.$set(Cn);const Uo={};g&2&&(Uo.$$scope={dirty:g,ctx:t}),Je.$set(Uo);const jn={};g&2&&(jn.$$scope={dirty:g,ctx:t}),Ye.$set(jn);const Sn={};g&2&&(Sn.$$scope={dirty:g,ctx:t}),Xe.$set(Sn);const Pn={};g&2&&(Pn.$$scope={dirty:g,ctx:t}),et.$set(Pn);const Ro={};g&2&&(Ro.$$scope={dirty:g,ctx:t}),tt.$set(Ro);const Ln={};g&2&&(Ln.$$scope={dirty:g,ctx:t}),ot.$set(Ln);const Nn={};g&2&&(Nn.$$scope={dirty:g,ctx:t}),st.$set(Nn);const Dn={};g&2&&(Dn.$$scope={dirty:g,ctx:t}),at.$set(Dn);const An={};g&2&&(An.$$scope={dirty:g,ctx:t}),rt.$set(An);const On={};g&2&&(On.$$scope={dirty:g,ctx:t}),it.$set(On);const In={};g&2&&(In.$$scope={dirty:g,ctx:t}),dt.$set(In);const Un={};g&2&&(Un.$$scope={dirty:g,ctx:t}),ct.$set(Un);const Rn={};g&2&&(Rn.$$scope={dirty:g,ctx:t}),pt.$set(Rn);const Wn={};g&2&&(Wn.$$scope={dirty:g,ctx:t}),ht.$set(Wn);const Hn={};g&2&&(Hn.$$scope={dirty:g,ctx:t}),ft.$set(Hn);const se={};g&2&&(se.$$scope={dirty:g,ctx:t}),gt.$set(se);const Kn={};g&2&&(Kn.$$scope={dirty:g,ctx:t}),_t.$set(Kn);const Vn={};g&2&&(Vn.$$scope={dirty:g,ctx:t}),kt.$set(Vn);const Bn={};g&2&&(Bn.$$scope={dirty:g,ctx:t}),Tt.$set(Bn);const Wo={};g&2&&(Wo.$$scope={dirty:g,ctx:t}),yt.$set(Wo);const Zn={};g&2&&(Zn.$$scope={dirty:g,ctx:t}),vt.$set(Zn)},i(t){wa||($(s.$$.fragment,t),$(Ft.$$.fragment,t),$(jt.$$.fragment,t),$(St.$$.fragment,t),$(Re.$$.fragment,t),$(Lt.$$.fragment,t),$(Nt.$$.fragment,t),$(Dt.$$.fragment,t),$(At.$$.fragment,t),$(Ot.$$.fragment,t),$(It.$$.fragment,t),$(Ut.$$.fragment,t),$(Rt.$$.fragment,t),$(Zt.$$.fragment,t),$(Ve.$$.fragment,t),$(Be.$$.fragment,t),$(Gt.$$.fragment,t),$(Jt.$$.fragment,t),$(to.$$.fragment,t),$(Ge.$$.fragment,t),$(Je.$$.fragment,t),$(Ye.$$.fragment,t),$(oo.$$.fragment,t),$(so.$$.fragment,t),$(io.$$.fragment,t),$(Xe.$$.fragment,t),$(et.$$.fragment,t),$(tt.$$.fragment,t),$(ot.$$.fragment,t),$(st.$$.fragment,t),$(lo.$$.fragment,t),$(co.$$.fragment,t),$(fo.$$.fragment,t),$(at.$$.fragment,t),$(rt.$$.fragment,t),$(it.$$.fragment,t),$(uo.$$.fragment,t),$(go.$$.fragment,t),$(To.$$.fragment,t),$(dt.$$.fragment,t),$(ct.$$.fragment,t),$(yo.$$.fragment,t),$(vo.$$.fragment,t),$(Fo.$$.fragment,t),$(pt.$$.fragment,t),$(ht.$$.fragment,t),$(ft.$$.fragment,t),$(zo.$$.fragment,t),$(qo.$$.fragment,t),$(So.$$.fragment,t),$(gt.$$.fragment,t),$(_t.$$.fragment,t),$(kt.$$.fragment,t),$(Po.$$.fragment,t),$(Lo.$$.fragment,t),$(Oo.$$.fragment,t),$(Tt.$$.fragment,t),$(yt.$$.fragment,t),$(vt.$$.fragment,t),wa=!0)},o(t){w(s.$$.fragment,t),w(Ft.$$.fragment,t),w(jt.$$.fragment,t),w(St.$$.fragment,t),w(Re.$$.fragment,t),w(Lt.$$.fragment,t),w(Nt.$$.fragment,t),w(Dt.$$.fragment,t),w(At.$$.fragment,t),w(Ot.$$.fragment,t),w(It.$$.fragment,t),w(Ut.$$.fragment,t),w(Rt.$$.fragment,t),w(Zt.$$.fragment,t),w(Ve.$$.fragment,t),w(Be.$$.fragment,t),w(Gt.$$.fragment,t),w(Jt.$$.fragment,t),w(to.$$.fragment,t),w(Ge.$$.fragment,t),w(Je.$$.fragment,t),w(Ye.$$.fragment,t),w(oo.$$.fragment,t),w(so.$$.fragment,t),w(io.$$.fragment,t),w(Xe.$$.fragment,t),w(et.$$.fragment,t),w(tt.$$.fragment,t),w(ot.$$.fragment,t),w(st.$$.fragment,t),w(lo.$$.fragment,t),w(co.$$.fragment,t),w(fo.$$.fragment,t),w(at.$$.fragment,t),w(rt.$$.fragment,t),w(it.$$.fragment,t),w(uo.$$.fragment,t),w(go.$$.fragment,t),w(To.$$.fragment,t),w(dt.$$.fragment,t),w(ct.$$.fragment,t),w(yo.$$.fragment,t),w(vo.$$.fragment,t),w(Fo.$$.fragment,t),w(pt.$$.fragment,t),w(ht.$$.fragment,t),w(ft.$$.fragment,t),w(zo.$$.fragment,t),w(qo.$$.fragment,t),w(So.$$.fragment,t),w(gt.$$.fragment,t),w(_t.$$.fragment,t),w(kt.$$.fragment,t),w(Po.$$.fragment,t),w(Lo.$$.fragment,t),w(Oo.$$.fragment,t),w(Tt.$$.fragment,t),w(yt.$$.fragment,t),w(vt.$$.fragment,t),wa=!1},d(t){o(n),t&&o(_),t&&o(c),E(s),t&&o(Gn),t&&o(_e),E(Ft),t&&o(Jn),t&&o(Ie),t&&o(Yn),t&&o(Ho),t&&o(Qn),t&&o(Ko),t&&o(Xn),t&&o(Vo),t&&o(ea),t&&o(Bo),t&&o(ta),t&&o(Zo),t&&o(oa),t&&o(Go),t&&o(sa),t&&o(Q),t&&o(na),t&&o(ke),E(jt),t&&o(aa),t&&o(Y),E(St),E(Re),t&&o(ra),t&&o(ye),E(Lt),t&&o(ia),t&&o(C),E(Nt),E(Dt),E(At),E(Ot),E(It),t&&o(la),t&&o($e),E(Ut),t&&o(da),t&&o(q),E(Rt),E(Zt),E(Ve),E(Be),t&&o(ca),t&&o(Ee),E(Gt),t&&o(ma),t&&o(N),E(Jt),E(to),E(Ge),E(Je),E(Ye),t&&o(pa),t&&o(Fe),E(oo),t&&o(ha),t&&o(D),E(so),E(io),E(Xe),E(et),E(tt),E(ot),E(st),t&&o(fa),t&&o(qe),E(lo),t&&o(ua),t&&o(A),E(co),E(fo),E(at),E(rt),E(it),t&&o(ga),t&&o(Ce),E(uo),t&&o(_a),t&&o(O),E(go),E(To),E(dt),E(ct),t&&o(ka),t&&o(Se),E(yo),t&&o(ba),t&&o(I),E(vo),E(Fo),E(pt),E(ht),E(ft),t&&o(Ta),t&&o(Le),E(zo),t&&o(ya),t&&o(U),E(qo),E(So),E(gt),E(_t),E(kt),t&&o(va),t&&o(De),E(Po),t&&o($a),t&&o(R),E(Lo),E(Oo),E(Tt),E(yt),E(vt)}}}const Vp={local:"esm",sections:[{local:"overview",title:"Overview"},{local:"transformers.EsmConfig",title:"EsmConfig"},{local:"transformers.EsmTokenizer",title:"EsmTokenizer"},{local:"transformers.EsmModel",title:"EsmModel"},{local:"transformers.EsmForMaskedLM",title:"EsmForMaskedLM"},{local:"transformers.EsmForSequenceClassification",title:"EsmForSequenceClassification"},{local:"transformers.EsmForTokenClassification",title:"EsmForTokenClassification"},{local:"transformers.TFEsmModel",title:"TFEsmModel"},{local:"transformers.TFEsmForMaskedLM",title:"TFEsmForMaskedLM"},{local:"transformers.TFEsmForSequenceClassification",title:"TFEsmForSequenceClassification"},{local:"transformers.TFEsmForTokenClassification",title:"TFEsmForTokenClassification"}],title:"ESM"};function Bp(M){return bp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class eh extends up{constructor(n){super();gp(this,n,Bp,Kp,_p,{})}}export{eh as default,Vp as metadata};
