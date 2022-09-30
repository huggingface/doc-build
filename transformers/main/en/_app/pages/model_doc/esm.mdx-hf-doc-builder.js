import{S as Yi,i as Qi,s as Xi,e as n,k as m,w as v,t as r,M as el,c as s,d as o,m as p,a,x as $,h as i,b as f,G as e,g as b,y as w,q as E,o as y,B as T,v as tl,L as Q}from"../../chunks/vendor-hf-doc-builder.js";import{T as Dn}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as X}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Y}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ol(M){let d,_,c,h,k;return h=new X({props:{code:`from transformers import EsmModel, EsmConfig

# Initializing a ESM esm-base-uncased style configuration >>> configuration = EsmConfig()

# Initializing a model from the configuration >>> model = ESMModel(configuration)

# Accessing the model configuration >>> configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmModel, EsmConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ESM esm-base-uncased style configuration &gt;&gt;&gt; configuration = EsmConfig()</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration &gt;&gt;&gt; model = ESMModel(configuration)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration &gt;&gt;&gt; configuration = model.config</span>`}}),{c(){d=n("p"),_=r("Examples:"),c=m(),v(h.$$.fragment)},l(l){d=s(l,"P",{});var g=a(d);_=i(g,"Examples:"),g.forEach(o),c=p(l),$(h.$$.fragment,l)},m(l,g){b(l,d,g),e(d,_),b(l,c,g),w(h,l,g),k=!0},p:Q,i(l){k||(E(h.$$.fragment,l),k=!0)},o(l){y(h.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),T(h,l)}}}function nl(M){let d,_,c,h,k;return{c(){d=n("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),h=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=a(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(g,"CODE",{});var x=a(c);h=i(x,"Module"),x.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(l,g){b(l,d,g),e(d,_),e(d,c),e(c,h),e(d,k)},d(l){l&&o(d)}}}function sl(M){let d,_,c,h,k;return h=new X({props:{code:`from transformers import EsmTokenizer, EsmModel
import torch

tokenizer = EsmTokenizer.from_pretrained("facebook/esm-1b")
model = EsmModel.from_pretrained("facebook/esm-1b")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmTokenizer, EsmModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = EsmTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm-1b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmModel.from_pretrained(<span class="hljs-string">&quot;facebook/esm-1b&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=r("Example:"),c=m(),v(h.$$.fragment)},l(l){d=s(l,"P",{});var g=a(d);_=i(g,"Example:"),g.forEach(o),c=p(l),$(h.$$.fragment,l)},m(l,g){b(l,d,g),e(d,_),b(l,c,g),w(h,l,g),k=!0},p:Q,i(l){k||(E(h.$$.fragment,l),k=!0)},o(l){y(h.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),T(h,l)}}}function al(M){let d,_,c,h,k;return{c(){d=n("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),h=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=a(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(g,"CODE",{});var x=a(c);h=i(x,"Module"),x.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(l,g){b(l,d,g),e(d,_),e(d,c),e(c,h),e(d,k)},d(l){l&&o(d)}}}function rl(M){let d,_,c,h,k;return h=new X({props:{code:`from transformers import EsmTokenizer, EsmForMaskedLM
import torch

tokenizer = EsmTokenizer.from_pretrained("facebook/esm-1b")
model = EsmForMaskedLM.from_pretrained("facebook/esm-1b")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmTokenizer, EsmForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = EsmTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm-1b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForMaskedLM.from_pretrained(<span class="hljs-string">&quot;facebook/esm-1b&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=n("p"),_=r("Example:"),c=m(),v(h.$$.fragment)},l(l){d=s(l,"P",{});var g=a(d);_=i(g,"Example:"),g.forEach(o),c=p(l),$(h.$$.fragment,l)},m(l,g){b(l,d,g),e(d,_),b(l,c,g),w(h,l,g),k=!0},p:Q,i(l){k||(E(h.$$.fragment,l),k=!0)},o(l){y(h.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),T(h,l)}}}function il(M){let d,_;return d=new X({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,h){w(d,c,h),_=!0},p:Q,i(c){_||(E(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){T(d,c)}}}function ll(M){let d,_,c,h,k;return{c(){d=n("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),h=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=a(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(g,"CODE",{});var x=a(c);h=i(x,"Module"),x.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(l,g){b(l,d,g),e(d,_),e(d,c),e(c,h),e(d,k)},d(l){l&&o(d)}}}function dl(M){let d,_,c,h,k;return h=new X({props:{code:`import torch
from transformers import EsmTokenizer, EsmForSequenceClassification

tokenizer = EsmTokenizer.from_pretrained("facebook/esm-1b")
model = EsmForSequenceClassification.from_pretrained("facebook/esm-1b")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmTokenizer, EsmForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = EsmTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm-1b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm-1b&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),_=r("Example of single-label classification:"),c=m(),v(h.$$.fragment)},l(l){d=s(l,"P",{});var g=a(d);_=i(g,"Example of single-label classification:"),g.forEach(o),c=p(l),$(h.$$.fragment,l)},m(l,g){b(l,d,g),e(d,_),b(l,c,g),w(h,l,g),k=!0},p:Q,i(l){k||(E(h.$$.fragment,l),k=!0)},o(l){y(h.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),T(h,l)}}}function cl(M){let d,_;return d=new X({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = EsmForSequenceClassification.from_pretrained("facebook/esm-1b", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm-1b&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,h){w(d,c,h),_=!0},p:Q,i(c){_||(E(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){T(d,c)}}}function ml(M){let d,_,c,h,k;return h=new X({props:{code:`import torch
from transformers import EsmTokenizer, EsmForSequenceClassification

tokenizer = EsmTokenizer.from_pretrained("facebook/esm-1b")
model = EsmForSequenceClassification.from_pretrained("facebook/esm-1b", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EsmTokenizer, EsmForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = EsmTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm-1b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm-1b&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),_=r("Example of multi-label classification:"),c=m(),v(h.$$.fragment)},l(l){d=s(l,"P",{});var g=a(d);_=i(g,"Example of multi-label classification:"),g.forEach(o),c=p(l),$(h.$$.fragment,l)},m(l,g){b(l,d,g),e(d,_),b(l,c,g),w(h,l,g),k=!0},p:Q,i(l){k||(E(h.$$.fragment,l),k=!0)},o(l){y(h.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),T(h,l)}}}function pl(M){let d,_;return d=new X({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = EsmForSequenceClassification.from_pretrained(
    "facebook/esm-1b", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/esm-1b&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,h){w(d,c,h),_=!0},p:Q,i(c){_||(E(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){T(d,c)}}}function hl(M){let d,_,c,h,k;return{c(){d=n("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),h=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=a(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(g,"CODE",{});var x=a(c);h=i(x,"Module"),x.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(l,g){b(l,d,g),e(d,_),e(d,c),e(c,h),e(d,k)},d(l){l&&o(d)}}}function fl(M){let d,_,c,h,k;return h=new X({props:{code:`from transformers import EsmTokenizer, EsmForTokenClassification
import torch

tokenizer = EsmTokenizer.from_pretrained("facebook/esm-1b")
model = EsmForTokenClassification.from_pretrained("facebook/esm-1b")

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = EsmTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/esm-1b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EsmForTokenClassification.from_pretrained(<span class="hljs-string">&quot;facebook/esm-1b&quot;</span>)

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
`}}),{c(){d=n("p"),_=r("Example:"),c=m(),v(h.$$.fragment)},l(l){d=s(l,"P",{});var g=a(d);_=i(g,"Example:"),g.forEach(o),c=p(l),$(h.$$.fragment,l)},m(l,g){b(l,d,g),e(d,_),b(l,c,g),w(h,l,g),k=!0},p:Q,i(l){k||(E(h.$$.fragment,l),k=!0)},o(l){y(h.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),T(h,l)}}}function ul(M){let d,_;return d=new X({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,h){w(d,c,h),_=!0},p:Q,i(c){_||(E(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){T(d,c)}}}function gl(M){let d,_,c,h,k,l,g,x,On,Xo,ee,fe,ao,We,Wn,ro,Rn,en,ue,Hn,Re,Bn,Vn,tn,Ft,Un,on,jt,io,Zn,nn,St,Jn,sn,Pt,lo,Gn,an,Lt,Kn,rn,At,co,Yn,ln,R,Qn,He,Xn,es,Be,ts,os,Ve,ns,ss,dn,te,ge,mo,Ue,as,po,rs,cn,W,Ze,is,oe,ls,ho,ds,cs,Je,ms,ps,hs,ne,fs,It,us,gs,Nt,_s,bs,ks,_e,mn,se,be,fo,Ge,vs,uo,$s,pn,C,Ke,ws,go,Es,ys,Dt,Ye,Ts,ke,Qe,Ms,ae,qs,_o,zs,xs,bo,Cs,Fs,js,V,Xe,Ss,Ot,Ps,Wt,Ls,As,ko,Is,Ns,Rt,et,hn,re,ve,vo,tt,Ds,$o,Os,fn,q,ot,Ws,wo,Rs,Hs,nt,Bs,Ht,Vs,Us,Zs,st,Js,at,Gs,Ks,Ys,rt,Qs,it,Xs,ea,ta,F,oa,Eo,na,sa,yo,aa,ra,To,ia,la,Mo,da,ca,qo,ma,pa,zo,ha,fa,ua,H,lt,ga,ie,_a,Bt,ba,ka,xo,va,$a,wa,$e,Ea,we,un,le,Ee,Co,dt,ya,Fo,Ta,gn,j,ct,Ma,mt,qa,jo,za,xa,Ca,pt,Fa,Vt,ja,Sa,Pa,ht,La,ft,Aa,Ia,Na,L,ut,Da,de,Oa,Ut,Wa,Ra,So,Ha,Ba,Va,ye,Ua,Te,Za,Me,_n,ce,qe,Po,gt,Ja,Lo,Ga,bn,S,_t,Ka,Ao,Ya,Qa,bt,Xa,Zt,er,tr,or,kt,nr,vt,sr,ar,rr,z,$t,ir,me,lr,Jt,dr,cr,Io,mr,pr,hr,ze,fr,xe,ur,Ce,gr,Fe,_r,je,kn,pe,Se,No,wt,br,Do,kr,vn,P,Et,vr,Oo,$r,wr,yt,Er,Gt,yr,Tr,Mr,Tt,qr,Mt,zr,xr,Cr,A,qt,Fr,he,jr,Kt,Sr,Pr,Wo,Lr,Ar,Ir,Pe,Nr,Le,Dr,Ae,$n;return l=new Oe({}),We=new Oe({}),Ue=new Oe({}),Ze=new O({props:{name:"class transformers.EsmConfig",anchor:"transformers.EsmConfig",parameters:[{name:"vocab_size",val:" = None"},{name:"mask_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1026"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"emb_layer_norm_before",val:" = None"},{name:"token_dropout",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EsmConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
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
When this is enabled, masked tokens are treated as if they had been dropped out by input dropout.`,name:"token_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/configuration_esm.py#L29"}}),_e=new Y({props:{anchor:"transformers.EsmConfig.example",$$slots:{default:[ol]},$$scope:{ctx:M}}}),Ge=new Oe({}),Ke=new O({props:{name:"class transformers.EsmTokenizer",anchor:"transformers.EsmTokenizer",parameters:[{name:"vocab_file",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L45"}}),Ye=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.EsmTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L86"}}),Qe=new O({props:{name:"get_special_tokens_mask",anchor:"transformers.EsmTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.EsmTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.EsmTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.EsmTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils.py#L845",returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),Xe=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.EsmTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.EsmTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.EsmTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2983",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),et=new O({props:{name:"save_vocabulary",anchor:"transformers.EsmTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:""},{name:"filename_prefix",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/tokenization_esm.py#L95"}}),tt=new Oe({}),ot=new O({props:{name:"class transformers.EsmModel",anchor:"transformers.EsmModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.EsmModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L733"}}),lt=new O({props:{name:"forward",anchor:"transformers.EsmModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.EsmModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>((batch_size, sequence_length))</code>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L780",returnDescription:`
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
`}}),$e=new Dn({props:{$$slots:{default:[nl]},$$scope:{ctx:M}}}),we=new Y({props:{anchor:"transformers.EsmModel.forward.example",$$slots:{default:[sl]},$$scope:{ctx:M}}}),dt=new Oe({}),ct=new O({props:{name:"class transformers.EsmForMaskedLM",anchor:"transformers.EsmForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L909"}}),ut=new O({props:{name:"forward",anchor:"transformers.EsmForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.EsmForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L937",returnDescription:`
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
`}}),ye=new Dn({props:{$$slots:{default:[al]},$$scope:{ctx:M}}}),Te=new Y({props:{anchor:"transformers.EsmForMaskedLM.forward.example",$$slots:{default:[rl]},$$scope:{ctx:M}}}),Me=new Y({props:{anchor:"transformers.EsmForMaskedLM.forward.example-2",$$slots:{default:[il]},$$scope:{ctx:M}}}),gt=new Oe({}),_t=new O({props:{name:"class transformers.EsmForSequenceClassification",anchor:"transformers.EsmForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1033"}}),$t=new O({props:{name:"forward",anchor:"transformers.EsmForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.EsmForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1046",returnDescription:`
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
`}}),ze=new Dn({props:{$$slots:{default:[ll]},$$scope:{ctx:M}}}),xe=new Y({props:{anchor:"transformers.EsmForSequenceClassification.forward.example",$$slots:{default:[dl]},$$scope:{ctx:M}}}),Ce=new Y({props:{anchor:"transformers.EsmForSequenceClassification.forward.example-2",$$slots:{default:[cl]},$$scope:{ctx:M}}}),Fe=new Y({props:{anchor:"transformers.EsmForSequenceClassification.forward.example-3",$$slots:{default:[ml]},$$scope:{ctx:M}}}),je=new Y({props:{anchor:"transformers.EsmForSequenceClassification.forward.example-4",$$slots:{default:[pl]},$$scope:{ctx:M}}}),wt=new Oe({}),Et=new O({props:{name:"class transformers.EsmForTokenClassification",anchor:"transformers.EsmForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.EsmForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/esm#transformers.EsmConfig">EsmConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1128"}}),qt=new O({props:{name:"forward",anchor:"transformers.EsmForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.EsmForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/esm/modeling_esm.py#L1142",returnDescription:`
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
`}}),Pe=new Dn({props:{$$slots:{default:[hl]},$$scope:{ctx:M}}}),Le=new Y({props:{anchor:"transformers.EsmForTokenClassification.forward.example",$$slots:{default:[fl]},$$scope:{ctx:M}}}),Ae=new Y({props:{anchor:"transformers.EsmForTokenClassification.forward.example-2",$$slots:{default:[ul]},$$scope:{ctx:M}}}),{c(){d=n("meta"),_=m(),c=n("h1"),h=n("a"),k=n("span"),v(l.$$.fragment),g=m(),x=n("span"),On=r("ESM"),Xo=m(),ee=n("h2"),fe=n("a"),ao=n("span"),v(We.$$.fragment),Wn=m(),ro=n("span"),Rn=r("Overview"),en=r(`

This page provides code and pre-trained weights for Transformer protein language models from Meta AI's Fundamental 
AI Research Team, providing the state-of-the-art ESM-2, and the previously released ESM-1b and ESM-1v. Transformer 
protein language models were introduced in the paper [Biological structure and function emerge from scaling 
unsupervised learning to 250 million protein sequences](https://www.pnas.org/content/118/15/e2016239118) by 
Alexander Rives, Joshua Meier, Tom Sercu, Siddharth Goyal, Zeming Lin, Jason Liu, Demi Guo, Myle Ott, 
C. Lawrence Zitnick, Jerry Ma, and Rob Fergus.
The first version of this paper was [preprinted in 2019](https://www.biorxiv.org/content/10.1101/622803v1?versioned=true).
`),ue=n("p"),Hn=r(`ESM-2 outperforms all tested single-sequence protein language models across a range of structure prediction tasks,
and enables atomic resolution structure prediction.
It was released with the paper `),Re=n("a"),Bn=r(`Language models of protein sequences at the scale of evolution enable accurate
structure prediction`),Vn=r(` by Zeming Lin, Halil Akin, Roshan Rao, Brian Hie,
Zhongkai Zhu, Wenting Lu, Allan dos Santos Costa, Maryam Fazel-Zarandi, Tom Sercu, Sal Candido and Alexander Rives.`),tn=m(),Ft=n("p"),Un=r(`The abstract from
\u201CBiological structure and function emerge from scaling unsupervised learning to 250
million protein sequences\u201D is`),on=m(),jt=n("p"),io=n("em"),Zn=r(`In the field of artificial intelligence, a combination of scale in data and model capacity enabled by unsupervised
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
improving state-of-the-art features for long-range contact prediction.`),nn=m(),St=n("p"),Jn=r(`The abstract from
\u201CLanguage models of protein sequences at the scale of evolution enable accurate structure prediction\u201D is`),sn=m(),Pt=n("p"),lo=n("em"),Gn=r(`Large language models have recently been shown to develop emergent capabilities with scale, going beyond
simple pattern matching to perform higher level reasoning and generate lifelike images and text. While
language models trained on protein sequences have been studied at a smaller scale, little is known about
what they learn about biology as they are scaled up. In this work we train models up to 15 billion parameters,
the largest language models of proteins to be evaluated to date. We find that as models are scaled they learn
information enabling the prediction of the three-dimensional structure of a protein at the resolution of
individual atoms. We present ESMFold for high accuracy end-to-end atomic level structure prediction directly
from the individual sequence of a protein. ESMFold has similar accuracy to AlphaFold2 and RoseTTAFold for
sequences with low perplexity that are well understood by the language model. ESMFold inference is an
order of magnitude faster than AlphaFold2, enabling exploration of the structural space of metagenomic
proteins in practical timescales.`),an=m(),Lt=n("p"),Kn=r("Tips:"),rn=m(),At=n("ul"),co=n("li"),Yn=r("ESM models are trained with a masked language modeling (MLM) objective."),ln=m(),R=n("p"),Qn=r("The original code can be found "),He=n("a"),Xn=r("here"),es=r(` and was
was developed by the Fundamental AI Research team at Meta AI.
This model was contributed to huggingface by `),Be=n("a"),ts=r("jasonliu"),os=r(`
and `),Ve=n("a"),ns=r("Matt"),ss=r("."),dn=m(),te=n("h2"),ge=n("a"),mo=n("span"),v(Ue.$$.fragment),as=m(),po=n("span"),rs=r("EsmConfig"),cn=m(),W=n("div"),v(Ze.$$.fragment),is=m(),oe=n("p"),ls=r("This is the configuration class to store the configuration of a "),ho=n("code"),ds=r("ESMModel"),cs=r(`. It is used to instantiate a ESM model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ESM
`),Je=n("a"),ms=r("esm-base-uncased"),ps=r(" architecture."),hs=m(),ne=n("p"),fs=r("Configuration objects inherit from "),It=n("a"),us=r("PretrainedConfig"),gs=r(` and can be used to control the model outputs. Read the
documentation from `),Nt=n("a"),_s=r("PretrainedConfig"),bs=r(" for more information."),ks=m(),v(_e.$$.fragment),mn=m(),se=n("h2"),be=n("a"),fo=n("span"),v(Ge.$$.fragment),vs=m(),uo=n("span"),$s=r("EsmTokenizer"),pn=m(),C=n("div"),v(Ke.$$.fragment),ws=m(),go=n("p"),Es=r("Constructs an ESM tokenizer."),ys=m(),Dt=n("div"),v(Ye.$$.fragment),Ts=m(),ke=n("div"),v(Qe.$$.fragment),Ms=m(),ae=n("p"),qs=r(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_o=n("code"),zs=r("prepare_for_model"),xs=r(" or "),bo=n("code"),Cs=r("encode_plus"),Fs=r(" methods."),js=m(),V=n("div"),v(Xe.$$.fragment),Ss=m(),Ot=n("p"),Ps=r("Create the token type IDs corresponding to the sequences passed. "),Wt=n("a"),Ls=r(`What are token type
IDs?`),As=m(),ko=n("p"),Is=r("Should be overridden in a subclass if the model has a special way of building those."),Ns=m(),Rt=n("div"),v(et.$$.fragment),hn=m(),re=n("h2"),ve=n("a"),vo=n("span"),v(tt.$$.fragment),Ds=m(),$o=n("span"),Os=r("EsmModel"),fn=m(),q=n("div"),v(ot.$$.fragment),Ws=m(),wo=n("p"),Rs=r("The bare ESM Model transformer outputting raw hidden-states without any specific head on top."),Hs=m(),nt=n("p"),Bs=r("This model inherits from "),Ht=n("a"),Vs=r("PreTrainedModel"),Us=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zs=m(),st=n("p"),Js=r("This model is also a PyTorch "),at=n("a"),Gs=r("torch.nn.Module"),Ks=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ys=m(),rt=n("p"),Qs=r(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),it=n("a"),Xs=r(`Attention is
all you need`),ea=r(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),ta=m(),F=n("p"),oa=r("To behave as an decoder the model needs to be initialized with the "),Eo=n("code"),na=r("is_decoder"),sa=r(` argument of the configuration set
to `),yo=n("code"),aa=r("True"),ra=r(". To be used in a Seq2Seq model, the model needs to initialized with both "),To=n("code"),ia=r("is_decoder"),la=r(` argument and
`),Mo=n("code"),da=r("add_cross_attention"),ca=r(" set to "),qo=n("code"),ma=r("True"),pa=r("; an "),zo=n("code"),ha=r("encoder_hidden_states"),fa=r(" is then expected as an input to the forward pass."),ua=m(),H=n("div"),v(lt.$$.fragment),ga=m(),ie=n("p"),_a=r("The "),Bt=n("a"),ba=r("EsmModel"),ka=r(" forward method, overrides the "),xo=n("code"),va=r("__call__"),$a=r(" special method."),wa=m(),v($e.$$.fragment),Ea=m(),v(we.$$.fragment),un=m(),le=n("h2"),Ee=n("a"),Co=n("span"),v(dt.$$.fragment),ya=m(),Fo=n("span"),Ta=r("EsmForMaskedLM"),gn=m(),j=n("div"),v(ct.$$.fragment),Ma=m(),mt=n("p"),qa=r("ESM Model with a "),jo=n("code"),za=r("language modeling"),xa=r(" head on top."),Ca=m(),pt=n("p"),Fa=r("This model inherits from "),Vt=n("a"),ja=r("PreTrainedModel"),Sa=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pa=m(),ht=n("p"),La=r("This model is also a PyTorch "),ft=n("a"),Aa=r("torch.nn.Module"),Ia=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Na=m(),L=n("div"),v(ut.$$.fragment),Da=m(),de=n("p"),Oa=r("The "),Ut=n("a"),Wa=r("EsmForMaskedLM"),Ra=r(" forward method, overrides the "),So=n("code"),Ha=r("__call__"),Ba=r(" special method."),Va=m(),v(ye.$$.fragment),Ua=m(),v(Te.$$.fragment),Za=m(),v(Me.$$.fragment),_n=m(),ce=n("h2"),qe=n("a"),Po=n("span"),v(gt.$$.fragment),Ja=m(),Lo=n("span"),Ga=r("EsmForSequenceClassification"),bn=m(),S=n("div"),v(_t.$$.fragment),Ka=m(),Ao=n("p"),Ya=r(`ESM Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Qa=m(),bt=n("p"),Xa=r("This model inherits from "),Zt=n("a"),er=r("PreTrainedModel"),tr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),or=m(),kt=n("p"),nr=r("This model is also a PyTorch "),vt=n("a"),sr=r("torch.nn.Module"),ar=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rr=m(),z=n("div"),v($t.$$.fragment),ir=m(),me=n("p"),lr=r("The "),Jt=n("a"),dr=r("EsmForSequenceClassification"),cr=r(" forward method, overrides the "),Io=n("code"),mr=r("__call__"),pr=r(" special method."),hr=m(),v(ze.$$.fragment),fr=m(),v(xe.$$.fragment),ur=m(),v(Ce.$$.fragment),gr=m(),v(Fe.$$.fragment),_r=m(),v(je.$$.fragment),kn=m(),pe=n("h2"),Se=n("a"),No=n("span"),v(wt.$$.fragment),br=m(),Do=n("span"),kr=r("EsmForTokenClassification"),vn=m(),P=n("div"),v(Et.$$.fragment),vr=m(),Oo=n("p"),$r=r(`ESM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),wr=m(),yt=n("p"),Er=r("This model inherits from "),Gt=n("a"),yr=r("PreTrainedModel"),Tr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mr=m(),Tt=n("p"),qr=r("This model is also a PyTorch "),Mt=n("a"),zr=r("torch.nn.Module"),xr=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cr=m(),A=n("div"),v(qt.$$.fragment),Fr=m(),he=n("p"),jr=r("The "),Kt=n("a"),Sr=r("EsmForTokenClassification"),Pr=r(" forward method, overrides the "),Wo=n("code"),Lr=r("__call__"),Ar=r(" special method."),Ir=m(),v(Pe.$$.fragment),Nr=m(),v(Le.$$.fragment),Dr=m(),v(Ae.$$.fragment),this.h()},l(t){const u=el('[data-svelte="svelte-1phssyn"]',document.head);d=s(u,"META",{name:!0,content:!0}),u.forEach(o),_=p(t),c=s(t,"H1",{class:!0});var zt=a(c);h=s(zt,"A",{id:!0,class:!0,href:!0});var Ro=a(h);k=s(Ro,"SPAN",{});var Ho=a(k);$(l.$$.fragment,Ho),Ho.forEach(o),Ro.forEach(o),g=p(zt),x=s(zt,"SPAN",{});var Bo=a(x);On=i(Bo,"ESM"),Bo.forEach(o),zt.forEach(o),Xo=p(t),ee=s(t,"H2",{class:!0});var xt=a(ee);fe=s(xt,"A",{id:!0,class:!0,href:!0});var Vo=a(fe);ao=s(Vo,"SPAN",{});var Uo=a(ao);$(We.$$.fragment,Uo),Uo.forEach(o),Vo.forEach(o),Wn=p(xt),ro=s(xt,"SPAN",{});var Zo=a(ro);Rn=i(Zo,"Overview"),Zo.forEach(o),xt.forEach(o),en=i(t,`

This page provides code and pre-trained weights for Transformer protein language models from Meta AI's Fundamental 
AI Research Team, providing the state-of-the-art ESM-2, and the previously released ESM-1b and ESM-1v. Transformer 
protein language models were introduced in the paper [Biological structure and function emerge from scaling 
unsupervised learning to 250 million protein sequences](https://www.pnas.org/content/118/15/e2016239118) by 
Alexander Rives, Joshua Meier, Tom Sercu, Siddharth Goyal, Zeming Lin, Jason Liu, Demi Guo, Myle Ott, 
C. Lawrence Zitnick, Jerry Ma, and Rob Fergus.
The first version of this paper was [preprinted in 2019](https://www.biorxiv.org/content/10.1101/622803v1?versioned=true).
`),ue=s(t,"P",{});var Ct=a(ue);Hn=i(Ct,`ESM-2 outperforms all tested single-sequence protein language models across a range of structure prediction tasks,
and enables atomic resolution structure prediction.
It was released with the paper `),Re=s(Ct,"A",{href:!0,rel:!0});var Jo=a(Re);Bn=i(Jo,`Language models of protein sequences at the scale of evolution enable accurate
structure prediction`),Jo.forEach(o),Vn=i(Ct,` by Zeming Lin, Halil Akin, Roshan Rao, Brian Hie,
Zhongkai Zhu, Wenting Lu, Allan dos Santos Costa, Maryam Fazel-Zarandi, Tom Sercu, Sal Candido and Alexander Rives.`),Ct.forEach(o),tn=p(t),Ft=s(t,"P",{});var Go=a(Ft);Un=i(Go,`The abstract from
\u201CBiological structure and function emerge from scaling unsupervised learning to 250
million protein sequences\u201D is`),Go.forEach(o),on=p(t),jt=s(t,"P",{});var Ko=a(jt);io=s(Ko,"EM",{});var Yo=a(io);Zn=i(Yo,`In the field of artificial intelligence, a combination of scale in data and model capacity enabled by unsupervised
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
improving state-of-the-art features for long-range contact prediction.`),Yo.forEach(o),Ko.forEach(o),nn=p(t),St=s(t,"P",{});var Qo=a(St);Jn=i(Qo,`The abstract from
\u201CLanguage models of protein sequences at the scale of evolution enable accurate structure prediction\u201D is`),Qo.forEach(o),sn=p(t),Pt=s(t,"P",{});var Wr=a(Pt);lo=s(Wr,"EM",{});var Rr=a(lo);Gn=i(Rr,`Large language models have recently been shown to develop emergent capabilities with scale, going beyond
simple pattern matching to perform higher level reasoning and generate lifelike images and text. While
language models trained on protein sequences have been studied at a smaller scale, little is known about
what they learn about biology as they are scaled up. In this work we train models up to 15 billion parameters,
the largest language models of proteins to be evaluated to date. We find that as models are scaled they learn
information enabling the prediction of the three-dimensional structure of a protein at the resolution of
individual atoms. We present ESMFold for high accuracy end-to-end atomic level structure prediction directly
from the individual sequence of a protein. ESMFold has similar accuracy to AlphaFold2 and RoseTTAFold for
sequences with low perplexity that are well understood by the language model. ESMFold inference is an
order of magnitude faster than AlphaFold2, enabling exploration of the structural space of metagenomic
proteins in practical timescales.`),Rr.forEach(o),Wr.forEach(o),an=p(t),Lt=s(t,"P",{});var Hr=a(Lt);Kn=i(Hr,"Tips:"),Hr.forEach(o),rn=p(t),At=s(t,"UL",{});var Br=a(At);co=s(Br,"LI",{});var Vr=a(co);Yn=i(Vr,"ESM models are trained with a masked language modeling (MLM) objective."),Vr.forEach(o),Br.forEach(o),ln=p(t),R=s(t,"P",{});var Ie=a(R);Qn=i(Ie,"The original code can be found "),He=s(Ie,"A",{href:!0,rel:!0});var Ur=a(He);Xn=i(Ur,"here"),Ur.forEach(o),es=i(Ie,` and was
was developed by the Fundamental AI Research team at Meta AI.
This model was contributed to huggingface by `),Be=s(Ie,"A",{href:!0,rel:!0});var Zr=a(Be);ts=i(Zr,"jasonliu"),Zr.forEach(o),os=i(Ie,`
and `),Ve=s(Ie,"A",{href:!0,rel:!0});var Jr=a(Ve);ns=i(Jr,"Matt"),Jr.forEach(o),ss=i(Ie,"."),Ie.forEach(o),dn=p(t),te=s(t,"H2",{class:!0});var wn=a(te);ge=s(wn,"A",{id:!0,class:!0,href:!0});var Gr=a(ge);mo=s(Gr,"SPAN",{});var Kr=a(mo);$(Ue.$$.fragment,Kr),Kr.forEach(o),Gr.forEach(o),as=p(wn),po=s(wn,"SPAN",{});var Yr=a(po);rs=i(Yr,"EsmConfig"),Yr.forEach(o),wn.forEach(o),cn=p(t),W=s(t,"DIV",{class:!0});var Ne=a(W);$(Ze.$$.fragment,Ne),is=p(Ne),oe=s(Ne,"P",{});var Yt=a(oe);ls=i(Yt,"This is the configuration class to store the configuration of a "),ho=s(Yt,"CODE",{});var Qr=a(ho);ds=i(Qr,"ESMModel"),Qr.forEach(o),cs=i(Yt,`. It is used to instantiate a ESM model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ESM
`),Je=s(Yt,"A",{href:!0,rel:!0});var Xr=a(Je);ms=i(Xr,"esm-base-uncased"),Xr.forEach(o),ps=i(Yt," architecture."),Yt.forEach(o),hs=p(Ne),ne=s(Ne,"P",{});var Qt=a(ne);fs=i(Qt,"Configuration objects inherit from "),It=s(Qt,"A",{href:!0});var ei=a(It);us=i(ei,"PretrainedConfig"),ei.forEach(o),gs=i(Qt,` and can be used to control the model outputs. Read the
documentation from `),Nt=s(Qt,"A",{href:!0});var ti=a(Nt);_s=i(ti,"PretrainedConfig"),ti.forEach(o),bs=i(Qt," for more information."),Qt.forEach(o),ks=p(Ne),$(_e.$$.fragment,Ne),Ne.forEach(o),mn=p(t),se=s(t,"H2",{class:!0});var En=a(se);be=s(En,"A",{id:!0,class:!0,href:!0});var oi=a(be);fo=s(oi,"SPAN",{});var ni=a(fo);$(Ge.$$.fragment,ni),ni.forEach(o),oi.forEach(o),vs=p(En),uo=s(En,"SPAN",{});var si=a(uo);$s=i(si,"EsmTokenizer"),si.forEach(o),En.forEach(o),pn=p(t),C=s(t,"DIV",{class:!0});var B=a(C);$(Ke.$$.fragment,B),ws=p(B),go=s(B,"P",{});var ai=a(go);Es=i(ai,"Constructs an ESM tokenizer."),ai.forEach(o),ys=p(B),Dt=s(B,"DIV",{class:!0});var ri=a(Dt);$(Ye.$$.fragment,ri),ri.forEach(o),Ts=p(B),ke=s(B,"DIV",{class:!0});var yn=a(ke);$(Qe.$$.fragment,yn),Ms=p(yn),ae=s(yn,"P",{});var Xt=a(ae);qs=i(Xt,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_o=s(Xt,"CODE",{});var ii=a(_o);zs=i(ii,"prepare_for_model"),ii.forEach(o),xs=i(Xt," or "),bo=s(Xt,"CODE",{});var li=a(bo);Cs=i(li,"encode_plus"),li.forEach(o),Fs=i(Xt," methods."),Xt.forEach(o),yn.forEach(o),js=p(B),V=s(B,"DIV",{class:!0});var eo=a(V);$(Xe.$$.fragment,eo),Ss=p(eo),Ot=s(eo,"P",{});var Or=a(Ot);Ps=i(Or,"Create the token type IDs corresponding to the sequences passed. "),Wt=s(Or,"A",{href:!0});var di=a(Wt);Ls=i(di,`What are token type
IDs?`),di.forEach(o),Or.forEach(o),As=p(eo),ko=s(eo,"P",{});var ci=a(ko);Is=i(ci,"Should be overridden in a subclass if the model has a special way of building those."),ci.forEach(o),eo.forEach(o),Ns=p(B),Rt=s(B,"DIV",{class:!0});var mi=a(Rt);$(et.$$.fragment,mi),mi.forEach(o),B.forEach(o),hn=p(t),re=s(t,"H2",{class:!0});var Tn=a(re);ve=s(Tn,"A",{id:!0,class:!0,href:!0});var pi=a(ve);vo=s(pi,"SPAN",{});var hi=a(vo);$(tt.$$.fragment,hi),hi.forEach(o),pi.forEach(o),Ds=p(Tn),$o=s(Tn,"SPAN",{});var fi=a($o);Os=i(fi,"EsmModel"),fi.forEach(o),Tn.forEach(o),fn=p(t),q=s(t,"DIV",{class:!0});var I=a(q);$(ot.$$.fragment,I),Ws=p(I),wo=s(I,"P",{});var ui=a(wo);Rs=i(ui,"The bare ESM Model transformer outputting raw hidden-states without any specific head on top."),ui.forEach(o),Hs=p(I),nt=s(I,"P",{});var Mn=a(nt);Bs=i(Mn,"This model inherits from "),Ht=s(Mn,"A",{href:!0});var gi=a(Ht);Vs=i(gi,"PreTrainedModel"),gi.forEach(o),Us=i(Mn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mn.forEach(o),Zs=p(I),st=s(I,"P",{});var qn=a(st);Js=i(qn,"This model is also a PyTorch "),at=s(qn,"A",{href:!0,rel:!0});var _i=a(at);Gs=i(_i,"torch.nn.Module"),_i.forEach(o),Ks=i(qn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qn.forEach(o),Ys=p(I),rt=s(I,"P",{});var zn=a(rt);Qs=i(zn,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),it=s(zn,"A",{href:!0,rel:!0});var bi=a(it);Xs=i(bi,`Attention is
all you need`),bi.forEach(o),ea=i(zn,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),zn.forEach(o),ta=p(I),F=s(I,"P",{});var N=a(F);oa=i(N,"To behave as an decoder the model needs to be initialized with the "),Eo=s(N,"CODE",{});var ki=a(Eo);na=i(ki,"is_decoder"),ki.forEach(o),sa=i(N,` argument of the configuration set
to `),yo=s(N,"CODE",{});var vi=a(yo);aa=i(vi,"True"),vi.forEach(o),ra=i(N,". To be used in a Seq2Seq model, the model needs to initialized with both "),To=s(N,"CODE",{});var $i=a(To);ia=i($i,"is_decoder"),$i.forEach(o),la=i(N,` argument and
`),Mo=s(N,"CODE",{});var wi=a(Mo);da=i(wi,"add_cross_attention"),wi.forEach(o),ca=i(N," set to "),qo=s(N,"CODE",{});var Ei=a(qo);ma=i(Ei,"True"),Ei.forEach(o),pa=i(N,"; an "),zo=s(N,"CODE",{});var yi=a(zo);ha=i(yi,"encoder_hidden_states"),yi.forEach(o),fa=i(N," is then expected as an input to the forward pass."),N.forEach(o),ua=p(I),H=s(I,"DIV",{class:!0});var De=a(H);$(lt.$$.fragment,De),ga=p(De),ie=s(De,"P",{});var to=a(ie);_a=i(to,"The "),Bt=s(to,"A",{href:!0});var Ti=a(Bt);ba=i(Ti,"EsmModel"),Ti.forEach(o),ka=i(to," forward method, overrides the "),xo=s(to,"CODE",{});var Mi=a(xo);va=i(Mi,"__call__"),Mi.forEach(o),$a=i(to," special method."),to.forEach(o),wa=p(De),$($e.$$.fragment,De),Ea=p(De),$(we.$$.fragment,De),De.forEach(o),I.forEach(o),un=p(t),le=s(t,"H2",{class:!0});var xn=a(le);Ee=s(xn,"A",{id:!0,class:!0,href:!0});var qi=a(Ee);Co=s(qi,"SPAN",{});var zi=a(Co);$(dt.$$.fragment,zi),zi.forEach(o),qi.forEach(o),ya=p(xn),Fo=s(xn,"SPAN",{});var xi=a(Fo);Ta=i(xi,"EsmForMaskedLM"),xi.forEach(o),xn.forEach(o),gn=p(t),j=s(t,"DIV",{class:!0});var U=a(j);$(ct.$$.fragment,U),Ma=p(U),mt=s(U,"P",{});var Cn=a(mt);qa=i(Cn,"ESM Model with a "),jo=s(Cn,"CODE",{});var Ci=a(jo);za=i(Ci,"language modeling"),Ci.forEach(o),xa=i(Cn," head on top."),Cn.forEach(o),Ca=p(U),pt=s(U,"P",{});var Fn=a(pt);Fa=i(Fn,"This model inherits from "),Vt=s(Fn,"A",{href:!0});var Fi=a(Vt);ja=i(Fi,"PreTrainedModel"),Fi.forEach(o),Sa=i(Fn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fn.forEach(o),Pa=p(U),ht=s(U,"P",{});var jn=a(ht);La=i(jn,"This model is also a PyTorch "),ft=s(jn,"A",{href:!0,rel:!0});var ji=a(ft);Aa=i(ji,"torch.nn.Module"),ji.forEach(o),Ia=i(jn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jn.forEach(o),Na=p(U),L=s(U,"DIV",{class:!0});var Z=a(L);$(ut.$$.fragment,Z),Da=p(Z),de=s(Z,"P",{});var oo=a(de);Oa=i(oo,"The "),Ut=s(oo,"A",{href:!0});var Si=a(Ut);Wa=i(Si,"EsmForMaskedLM"),Si.forEach(o),Ra=i(oo," forward method, overrides the "),So=s(oo,"CODE",{});var Pi=a(So);Ha=i(Pi,"__call__"),Pi.forEach(o),Ba=i(oo," special method."),oo.forEach(o),Va=p(Z),$(ye.$$.fragment,Z),Ua=p(Z),$(Te.$$.fragment,Z),Za=p(Z),$(Me.$$.fragment,Z),Z.forEach(o),U.forEach(o),_n=p(t),ce=s(t,"H2",{class:!0});var Sn=a(ce);qe=s(Sn,"A",{id:!0,class:!0,href:!0});var Li=a(qe);Po=s(Li,"SPAN",{});var Ai=a(Po);$(gt.$$.fragment,Ai),Ai.forEach(o),Li.forEach(o),Ja=p(Sn),Lo=s(Sn,"SPAN",{});var Ii=a(Lo);Ga=i(Ii,"EsmForSequenceClassification"),Ii.forEach(o),Sn.forEach(o),bn=p(t),S=s(t,"DIV",{class:!0});var J=a(S);$(_t.$$.fragment,J),Ka=p(J),Ao=s(J,"P",{});var Ni=a(Ao);Ya=i(Ni,`ESM Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Ni.forEach(o),Qa=p(J),bt=s(J,"P",{});var Pn=a(bt);Xa=i(Pn,"This model inherits from "),Zt=s(Pn,"A",{href:!0});var Di=a(Zt);er=i(Di,"PreTrainedModel"),Di.forEach(o),tr=i(Pn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pn.forEach(o),or=p(J),kt=s(J,"P",{});var Ln=a(kt);nr=i(Ln,"This model is also a PyTorch "),vt=s(Ln,"A",{href:!0,rel:!0});var Oi=a(vt);sr=i(Oi,"torch.nn.Module"),Oi.forEach(o),ar=i(Ln,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ln.forEach(o),rr=p(J),z=s(J,"DIV",{class:!0});var D=a(z);$($t.$$.fragment,D),ir=p(D),me=s(D,"P",{});var no=a(me);lr=i(no,"The "),Jt=s(no,"A",{href:!0});var Wi=a(Jt);dr=i(Wi,"EsmForSequenceClassification"),Wi.forEach(o),cr=i(no," forward method, overrides the "),Io=s(no,"CODE",{});var Ri=a(Io);mr=i(Ri,"__call__"),Ri.forEach(o),pr=i(no," special method."),no.forEach(o),hr=p(D),$(ze.$$.fragment,D),fr=p(D),$(xe.$$.fragment,D),ur=p(D),$(Ce.$$.fragment,D),gr=p(D),$(Fe.$$.fragment,D),_r=p(D),$(je.$$.fragment,D),D.forEach(o),J.forEach(o),kn=p(t),pe=s(t,"H2",{class:!0});var An=a(pe);Se=s(An,"A",{id:!0,class:!0,href:!0});var Hi=a(Se);No=s(Hi,"SPAN",{});var Bi=a(No);$(wt.$$.fragment,Bi),Bi.forEach(o),Hi.forEach(o),br=p(An),Do=s(An,"SPAN",{});var Vi=a(Do);kr=i(Vi,"EsmForTokenClassification"),Vi.forEach(o),An.forEach(o),vn=p(t),P=s(t,"DIV",{class:!0});var G=a(P);$(Et.$$.fragment,G),vr=p(G),Oo=s(G,"P",{});var Ui=a(Oo);$r=i(Ui,`ESM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ui.forEach(o),wr=p(G),yt=s(G,"P",{});var In=a(yt);Er=i(In,"This model inherits from "),Gt=s(In,"A",{href:!0});var Zi=a(Gt);yr=i(Zi,"PreTrainedModel"),Zi.forEach(o),Tr=i(In,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),In.forEach(o),Mr=p(G),Tt=s(G,"P",{});var Nn=a(Tt);qr=i(Nn,"This model is also a PyTorch "),Mt=s(Nn,"A",{href:!0,rel:!0});var Ji=a(Mt);zr=i(Ji,"torch.nn.Module"),Ji.forEach(o),xr=i(Nn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nn.forEach(o),Cr=p(G),A=s(G,"DIV",{class:!0});var K=a(A);$(qt.$$.fragment,K),Fr=p(K),he=s(K,"P",{});var so=a(he);jr=i(so,"The "),Kt=s(so,"A",{href:!0});var Gi=a(Kt);Sr=i(Gi,"EsmForTokenClassification"),Gi.forEach(o),Pr=i(so," forward method, overrides the "),Wo=s(so,"CODE",{});var Ki=a(Wo);Lr=i(Ki,"__call__"),Ki.forEach(o),Ar=i(so," special method."),so.forEach(o),Ir=p(K),$(Pe.$$.fragment,K),Nr=p(K),$(Le.$$.fragment,K),Dr=p(K),$(Ae.$$.fragment,K),K.forEach(o),G.forEach(o),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(_l)),f(h,"id","esm"),f(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(h,"href","#esm"),f(c,"class","relative group"),f(fe,"id","overview"),f(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fe,"href","#overview"),f(ee,"class","relative group"),f(Re,"href","https://doi.org/10.1101/2022.07.20.500902"),f(Re,"rel","nofollow"),f(He,"href","https://github.com/facebookresearch/esm"),f(He,"rel","nofollow"),f(Be,"href","https://huggingface.co/jasonliu"),f(Be,"rel","nofollow"),f(Ve,"href","https://huggingface.co/Rocketknight1"),f(Ve,"rel","nofollow"),f(ge,"id","transformers.EsmConfig"),f(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ge,"href","#transformers.EsmConfig"),f(te,"class","relative group"),f(Je,"href","https://huggingface.co/esm-base-uncased"),f(Je,"rel","nofollow"),f(It,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Nt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(be,"id","transformers.EsmTokenizer"),f(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(be,"href","#transformers.EsmTokenizer"),f(se,"class","relative group"),f(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wt,"href","../glossary#token-type-ids"),f(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ve,"id","transformers.EsmModel"),f(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ve,"href","#transformers.EsmModel"),f(re,"class","relative group"),f(Ht,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(at,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(at,"rel","nofollow"),f(it,"href","https://arxiv.org/abs/1706.03762"),f(it,"rel","nofollow"),f(Bt,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmModel"),f(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ee,"id","transformers.EsmForMaskedLM"),f(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ee,"href","#transformers.EsmForMaskedLM"),f(le,"class","relative group"),f(Vt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ft,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ft,"rel","nofollow"),f(Ut,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmForMaskedLM"),f(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qe,"id","transformers.EsmForSequenceClassification"),f(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(qe,"href","#transformers.EsmForSequenceClassification"),f(ce,"class","relative group"),f(Zt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(vt,"rel","nofollow"),f(Jt,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmForSequenceClassification"),f(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Se,"id","transformers.EsmForTokenClassification"),f(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Se,"href","#transformers.EsmForTokenClassification"),f(pe,"class","relative group"),f(Gt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Mt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Mt,"rel","nofollow"),f(Kt,"href","/docs/transformers/main/en/model_doc/esm#transformers.EsmForTokenClassification"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),b(t,_,u),b(t,c,u),e(c,h),e(h,k),w(l,k,null),e(c,g),e(c,x),e(x,On),b(t,Xo,u),b(t,ee,u),e(ee,fe),e(fe,ao),w(We,ao,null),e(ee,Wn),e(ee,ro),e(ro,Rn),b(t,en,u),b(t,ue,u),e(ue,Hn),e(ue,Re),e(Re,Bn),e(ue,Vn),b(t,tn,u),b(t,Ft,u),e(Ft,Un),b(t,on,u),b(t,jt,u),e(jt,io),e(io,Zn),b(t,nn,u),b(t,St,u),e(St,Jn),b(t,sn,u),b(t,Pt,u),e(Pt,lo),e(lo,Gn),b(t,an,u),b(t,Lt,u),e(Lt,Kn),b(t,rn,u),b(t,At,u),e(At,co),e(co,Yn),b(t,ln,u),b(t,R,u),e(R,Qn),e(R,He),e(He,Xn),e(R,es),e(R,Be),e(Be,ts),e(R,os),e(R,Ve),e(Ve,ns),e(R,ss),b(t,dn,u),b(t,te,u),e(te,ge),e(ge,mo),w(Ue,mo,null),e(te,as),e(te,po),e(po,rs),b(t,cn,u),b(t,W,u),w(Ze,W,null),e(W,is),e(W,oe),e(oe,ls),e(oe,ho),e(ho,ds),e(oe,cs),e(oe,Je),e(Je,ms),e(oe,ps),e(W,hs),e(W,ne),e(ne,fs),e(ne,It),e(It,us),e(ne,gs),e(ne,Nt),e(Nt,_s),e(ne,bs),e(W,ks),w(_e,W,null),b(t,mn,u),b(t,se,u),e(se,be),e(be,fo),w(Ge,fo,null),e(se,vs),e(se,uo),e(uo,$s),b(t,pn,u),b(t,C,u),w(Ke,C,null),e(C,ws),e(C,go),e(go,Es),e(C,ys),e(C,Dt),w(Ye,Dt,null),e(C,Ts),e(C,ke),w(Qe,ke,null),e(ke,Ms),e(ke,ae),e(ae,qs),e(ae,_o),e(_o,zs),e(ae,xs),e(ae,bo),e(bo,Cs),e(ae,Fs),e(C,js),e(C,V),w(Xe,V,null),e(V,Ss),e(V,Ot),e(Ot,Ps),e(Ot,Wt),e(Wt,Ls),e(V,As),e(V,ko),e(ko,Is),e(C,Ns),e(C,Rt),w(et,Rt,null),b(t,hn,u),b(t,re,u),e(re,ve),e(ve,vo),w(tt,vo,null),e(re,Ds),e(re,$o),e($o,Os),b(t,fn,u),b(t,q,u),w(ot,q,null),e(q,Ws),e(q,wo),e(wo,Rs),e(q,Hs),e(q,nt),e(nt,Bs),e(nt,Ht),e(Ht,Vs),e(nt,Us),e(q,Zs),e(q,st),e(st,Js),e(st,at),e(at,Gs),e(st,Ks),e(q,Ys),e(q,rt),e(rt,Qs),e(rt,it),e(it,Xs),e(rt,ea),e(q,ta),e(q,F),e(F,oa),e(F,Eo),e(Eo,na),e(F,sa),e(F,yo),e(yo,aa),e(F,ra),e(F,To),e(To,ia),e(F,la),e(F,Mo),e(Mo,da),e(F,ca),e(F,qo),e(qo,ma),e(F,pa),e(F,zo),e(zo,ha),e(F,fa),e(q,ua),e(q,H),w(lt,H,null),e(H,ga),e(H,ie),e(ie,_a),e(ie,Bt),e(Bt,ba),e(ie,ka),e(ie,xo),e(xo,va),e(ie,$a),e(H,wa),w($e,H,null),e(H,Ea),w(we,H,null),b(t,un,u),b(t,le,u),e(le,Ee),e(Ee,Co),w(dt,Co,null),e(le,ya),e(le,Fo),e(Fo,Ta),b(t,gn,u),b(t,j,u),w(ct,j,null),e(j,Ma),e(j,mt),e(mt,qa),e(mt,jo),e(jo,za),e(mt,xa),e(j,Ca),e(j,pt),e(pt,Fa),e(pt,Vt),e(Vt,ja),e(pt,Sa),e(j,Pa),e(j,ht),e(ht,La),e(ht,ft),e(ft,Aa),e(ht,Ia),e(j,Na),e(j,L),w(ut,L,null),e(L,Da),e(L,de),e(de,Oa),e(de,Ut),e(Ut,Wa),e(de,Ra),e(de,So),e(So,Ha),e(de,Ba),e(L,Va),w(ye,L,null),e(L,Ua),w(Te,L,null),e(L,Za),w(Me,L,null),b(t,_n,u),b(t,ce,u),e(ce,qe),e(qe,Po),w(gt,Po,null),e(ce,Ja),e(ce,Lo),e(Lo,Ga),b(t,bn,u),b(t,S,u),w(_t,S,null),e(S,Ka),e(S,Ao),e(Ao,Ya),e(S,Qa),e(S,bt),e(bt,Xa),e(bt,Zt),e(Zt,er),e(bt,tr),e(S,or),e(S,kt),e(kt,nr),e(kt,vt),e(vt,sr),e(kt,ar),e(S,rr),e(S,z),w($t,z,null),e(z,ir),e(z,me),e(me,lr),e(me,Jt),e(Jt,dr),e(me,cr),e(me,Io),e(Io,mr),e(me,pr),e(z,hr),w(ze,z,null),e(z,fr),w(xe,z,null),e(z,ur),w(Ce,z,null),e(z,gr),w(Fe,z,null),e(z,_r),w(je,z,null),b(t,kn,u),b(t,pe,u),e(pe,Se),e(Se,No),w(wt,No,null),e(pe,br),e(pe,Do),e(Do,kr),b(t,vn,u),b(t,P,u),w(Et,P,null),e(P,vr),e(P,Oo),e(Oo,$r),e(P,wr),e(P,yt),e(yt,Er),e(yt,Gt),e(Gt,yr),e(yt,Tr),e(P,Mr),e(P,Tt),e(Tt,qr),e(Tt,Mt),e(Mt,zr),e(Tt,xr),e(P,Cr),e(P,A),w(qt,A,null),e(A,Fr),e(A,he),e(he,jr),e(he,Kt),e(Kt,Sr),e(he,Pr),e(he,Wo),e(Wo,Lr),e(he,Ar),e(A,Ir),w(Pe,A,null),e(A,Nr),w(Le,A,null),e(A,Dr),w(Ae,A,null),$n=!0},p(t,[u]){const zt={};u&2&&(zt.$$scope={dirty:u,ctx:t}),_e.$set(zt);const Ro={};u&2&&(Ro.$$scope={dirty:u,ctx:t}),$e.$set(Ro);const Ho={};u&2&&(Ho.$$scope={dirty:u,ctx:t}),we.$set(Ho);const Bo={};u&2&&(Bo.$$scope={dirty:u,ctx:t}),ye.$set(Bo);const xt={};u&2&&(xt.$$scope={dirty:u,ctx:t}),Te.$set(xt);const Vo={};u&2&&(Vo.$$scope={dirty:u,ctx:t}),Me.$set(Vo);const Uo={};u&2&&(Uo.$$scope={dirty:u,ctx:t}),ze.$set(Uo);const Zo={};u&2&&(Zo.$$scope={dirty:u,ctx:t}),xe.$set(Zo);const Ct={};u&2&&(Ct.$$scope={dirty:u,ctx:t}),Ce.$set(Ct);const Jo={};u&2&&(Jo.$$scope={dirty:u,ctx:t}),Fe.$set(Jo);const Go={};u&2&&(Go.$$scope={dirty:u,ctx:t}),je.$set(Go);const Ko={};u&2&&(Ko.$$scope={dirty:u,ctx:t}),Pe.$set(Ko);const Yo={};u&2&&(Yo.$$scope={dirty:u,ctx:t}),Le.$set(Yo);const Qo={};u&2&&(Qo.$$scope={dirty:u,ctx:t}),Ae.$set(Qo)},i(t){$n||(E(l.$$.fragment,t),E(We.$$.fragment,t),E(Ue.$$.fragment,t),E(Ze.$$.fragment,t),E(_e.$$.fragment,t),E(Ge.$$.fragment,t),E(Ke.$$.fragment,t),E(Ye.$$.fragment,t),E(Qe.$$.fragment,t),E(Xe.$$.fragment,t),E(et.$$.fragment,t),E(tt.$$.fragment,t),E(ot.$$.fragment,t),E(lt.$$.fragment,t),E($e.$$.fragment,t),E(we.$$.fragment,t),E(dt.$$.fragment,t),E(ct.$$.fragment,t),E(ut.$$.fragment,t),E(ye.$$.fragment,t),E(Te.$$.fragment,t),E(Me.$$.fragment,t),E(gt.$$.fragment,t),E(_t.$$.fragment,t),E($t.$$.fragment,t),E(ze.$$.fragment,t),E(xe.$$.fragment,t),E(Ce.$$.fragment,t),E(Fe.$$.fragment,t),E(je.$$.fragment,t),E(wt.$$.fragment,t),E(Et.$$.fragment,t),E(qt.$$.fragment,t),E(Pe.$$.fragment,t),E(Le.$$.fragment,t),E(Ae.$$.fragment,t),$n=!0)},o(t){y(l.$$.fragment,t),y(We.$$.fragment,t),y(Ue.$$.fragment,t),y(Ze.$$.fragment,t),y(_e.$$.fragment,t),y(Ge.$$.fragment,t),y(Ke.$$.fragment,t),y(Ye.$$.fragment,t),y(Qe.$$.fragment,t),y(Xe.$$.fragment,t),y(et.$$.fragment,t),y(tt.$$.fragment,t),y(ot.$$.fragment,t),y(lt.$$.fragment,t),y($e.$$.fragment,t),y(we.$$.fragment,t),y(dt.$$.fragment,t),y(ct.$$.fragment,t),y(ut.$$.fragment,t),y(ye.$$.fragment,t),y(Te.$$.fragment,t),y(Me.$$.fragment,t),y(gt.$$.fragment,t),y(_t.$$.fragment,t),y($t.$$.fragment,t),y(ze.$$.fragment,t),y(xe.$$.fragment,t),y(Ce.$$.fragment,t),y(Fe.$$.fragment,t),y(je.$$.fragment,t),y(wt.$$.fragment,t),y(Et.$$.fragment,t),y(qt.$$.fragment,t),y(Pe.$$.fragment,t),y(Le.$$.fragment,t),y(Ae.$$.fragment,t),$n=!1},d(t){o(d),t&&o(_),t&&o(c),T(l),t&&o(Xo),t&&o(ee),T(We),t&&o(en),t&&o(ue),t&&o(tn),t&&o(Ft),t&&o(on),t&&o(jt),t&&o(nn),t&&o(St),t&&o(sn),t&&o(Pt),t&&o(an),t&&o(Lt),t&&o(rn),t&&o(At),t&&o(ln),t&&o(R),t&&o(dn),t&&o(te),T(Ue),t&&o(cn),t&&o(W),T(Ze),T(_e),t&&o(mn),t&&o(se),T(Ge),t&&o(pn),t&&o(C),T(Ke),T(Ye),T(Qe),T(Xe),T(et),t&&o(hn),t&&o(re),T(tt),t&&o(fn),t&&o(q),T(ot),T(lt),T($e),T(we),t&&o(un),t&&o(le),T(dt),t&&o(gn),t&&o(j),T(ct),T(ut),T(ye),T(Te),T(Me),t&&o(_n),t&&o(ce),T(gt),t&&o(bn),t&&o(S),T(_t),T($t),T(ze),T(xe),T(Ce),T(Fe),T(je),t&&o(kn),t&&o(pe),T(wt),t&&o(vn),t&&o(P),T(Et),T(qt),T(Pe),T(Le),T(Ae)}}}const _l={local:"esm",sections:[{local:"overview",title:"Overview"},{local:"transformers.EsmConfig",title:"EsmConfig"},{local:"transformers.EsmTokenizer",title:"EsmTokenizer"},{local:"transformers.EsmModel",title:"EsmModel"},{local:"transformers.EsmForMaskedLM",title:"EsmForMaskedLM"},{local:"transformers.EsmForSequenceClassification",title:"EsmForSequenceClassification"},{local:"transformers.EsmForTokenClassification",title:"EsmForTokenClassification"}],title:"ESM"};function bl(M){return tl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Tl extends Yi{constructor(d){super();Qi(this,d,bl,gl,Xi,{})}}export{Tl as default,_l as metadata};
