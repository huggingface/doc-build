import{S as Fl,i as Cl,s as zl,e as s,k as u,w as k,t as i,M as El,c as a,d as t,m as f,a as r,x as y,h as l,b as h,G as e,g as v,y as w,q as $,o as T,B,v as Ml,L as ne}from"../../chunks/vendor-hf-doc-builder.js";import{T as _t}from"../../chunks/Tip-hf-doc-builder.js";import{D as R}from"../../chunks/Docstring-hf-doc-builder.js";import{C as se}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ye}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as te}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function xl(F){let d,_,c,m,b;return m=new se({props:{code:`from transformers import BloomModel, BloomConfig

# Initializing a Bloom configuration
configuration = BloomConfig()

# Initializing a model from the configuration
model = BloomModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomModel, BloomConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Bloom configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BloomConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),_=i("Example:"),c=u(),k(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);_=l(p,"Example:"),p.forEach(t),c=f(n),y(m.$$.fragment,n)},m(n,p){v(n,d,p),e(d,_),v(n,c,p),w(m,n,p),b=!0},p:ne,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){T(m.$$.fragment,n),b=!1},d(n){n&&t(d),n&&t(c),B(m,n)}}}function ql(F){let d,_,c,m,b;return{c(){d=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var p=r(d);_=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=r(c);m=l(C,"Module"),C.forEach(t),b=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){v(n,d,p),e(d,_),e(d,c),e(c,m),e(d,b)},d(n){n&&t(d)}}}function Pl(F){let d,_,c,m,b;return m=new se({props:{code:`from transformers import BloomTokenizerFast, BloomModel
import torch

tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom-560m")
model = BloomModel.from_pretrained("bigscience/bloom-560m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast, BloomModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomModel.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),_=i("Example:"),c=u(),k(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);_=l(p,"Example:"),p.forEach(t),c=f(n),y(m.$$.fragment,n)},m(n,p){v(n,d,p),e(d,_),v(n,c,p),w(m,n,p),b=!0},p:ne,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){T(m.$$.fragment,n),b=!1},d(n){n&&t(d),n&&t(c),B(m,n)}}}function jl(F){let d,_,c,m,b;return m=new se({props:{code:`from transformers import BloomTokenizerFast
tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=s("p"),_=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=u(),k(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);_=l(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),c=f(n),y(m.$$.fragment,n)},m(n,p){v(n,d,p),e(d,_),v(n,c,p),w(m,n,p),b=!0},p:ne,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){T(m.$$.fragment,n),b=!1},d(n){n&&t(d),n&&t(c),B(m,n)}}}function Ol(F){let d,_,c,m,b,n,p,C;return{c(){d=s("p"),_=i("When used with "),c=s("code"),m=i("is_split_into_words=True"),b=i(", this tokenizer needs to be instantiated with "),n=s("code"),p=i("add_prefix_space=True"),C=i(".")},l(ae){d=a(ae,"P",{});var D=r(d);_=l(D,"When used with "),c=a(D,"CODE",{});var Q=r(c);m=l(Q,"is_split_into_words=True"),Q.forEach(t),b=l(D,", this tokenizer needs to be instantiated with "),n=a(D,"CODE",{});var G=r(n);p=l(G,"add_prefix_space=True"),G.forEach(t),C=l(D,"."),D.forEach(t)},m(ae,D){v(ae,d,D),e(d,_),e(d,c),e(c,m),e(d,b),e(d,n),e(n,p),e(d,C)},d(ae){ae&&t(d)}}}function Al(F){let d,_,c,m,b;return{c(){d=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var p=r(d);_=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=r(c);m=l(C,"Module"),C.forEach(t),b=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){v(n,d,p),e(d,_),e(d,c),e(c,m),e(d,b)},d(n){n&&t(d)}}}function Sl(F){let d,_,c,m,b;return m=new se({props:{code:`import torch
from transformers import BloomTokenizerFast, BloomForCausalLM

tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom-560m")
model = BloomForCausalLM.from_pretrained("bigscience/bloom-560m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast, BloomForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForCausalLM.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),_=i("Example:"),c=u(),k(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);_=l(p,"Example:"),p.forEach(t),c=f(n),y(m.$$.fragment,n)},m(n,p){v(n,d,p),e(d,_),v(n,c,p),w(m,n,p),b=!0},p:ne,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){T(m.$$.fragment,n),b=!1},d(n){n&&t(d),n&&t(c),B(m,n)}}}function Nl(F){let d,_,c,m,b;return{c(){d=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var p=r(d);_=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=r(c);m=l(C,"Module"),C.forEach(t),b=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){v(n,d,p),e(d,_),e(d,c),e(c,m),e(d,b)},d(n){n&&t(d)}}}function Ll(F){let d,_,c,m,b;return m=new se({props:{code:`import torch
from transformers import BloomTokenizerFast, BloomForSequenceClassification

tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom-560m")
model = BloomForSequenceClassification.from_pretrained("bigscience/bloom-560m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast, BloomForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=s("p"),_=i("Example of single-label classification:"),c=u(),k(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);_=l(p,"Example of single-label classification:"),p.forEach(t),c=f(n),y(m.$$.fragment,n)},m(n,p){v(n,d,p),e(d,_),v(n,c,p),w(m,n,p),b=!0},p:ne,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){T(m.$$.fragment,n),b=!1},d(n){n&&t(d),n&&t(c),B(m,n)}}}function Il(F){let d,_;return d=new se({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BloomForSequenceClassification.from_pretrained("bigscience/bloom-560m", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:ne,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){B(d,c)}}}function Dl(F){let d,_,c,m,b;return m=new se({props:{code:`import torch
from transformers import BloomTokenizerFast, BloomForSequenceClassification

tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom-560m")
model = BloomForSequenceClassification.from_pretrained("bigscience/bloom-560m", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast, BloomForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=s("p"),_=i("Example of multi-label classification:"),c=u(),k(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);_=l(p,"Example of multi-label classification:"),p.forEach(t),c=f(n),y(m.$$.fragment,n)},m(n,p){v(n,d,p),e(d,_),v(n,c,p),w(m,n,p),b=!0},p:ne,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){T(m.$$.fragment,n),b=!1},d(n){n&&t(d),n&&t(c),B(m,n)}}}function Wl(F){let d,_;return d=new se({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BloomForSequenceClassification.from_pretrained(
    "bigscience/bloom-560m", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:ne,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){B(d,c)}}}function Hl(F){let d,_,c,m,b;return{c(){d=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var p=r(d);_=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=r(c);m=l(C,"Module"),C.forEach(t),b=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){v(n,d,p),e(d,_),e(d,c),e(c,m),e(d,b)},d(n){n&&t(d)}}}function Ql(F){let d,_,c,m,b;return m=new se({props:{code:`from transformers import BloomTokenizerFast, BloomForTokenClassification
import torch

tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom-560m")
model = BloomForTokenClassification.from_pretrained("bigscience/bloom-560m")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast, BloomForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)

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
`}}),{c(){d=s("p"),_=i("Example:"),c=u(),k(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);_=l(p,"Example:"),p.forEach(t),c=f(n),y(m.$$.fragment,n)},m(n,p){v(n,d,p),e(d,_),v(n,c,p),w(m,n,p),b=!0},p:ne,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){T(m.$$.fragment,n),b=!1},d(n){n&&t(d),n&&t(c),B(m,n)}}}function Ul(F){let d,_;return d=new se({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:ne,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){B(d,c)}}}function Vl(F){let d,_,c,m,b;return{c(){d=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var p=r(d);_=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=r(c);m=l(C,"Module"),C.forEach(t),b=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){v(n,d,p),e(d,_),e(d,c),e(c,m),e(d,b)},d(n){n&&t(d)}}}function Rl(F){let d,_,c,m,b,n,p,C,ae,D,Q,G,bt,Ye,Zn,vt,es,gn,we,os,Je,ts,ns,_n,x,kt,Ke,ss,as,yt,Xe,rs,is,wt,Ze,ls,ds,$t,eo,cs,ms,Tt,oo,ps,hs,Uo,to,us,fs,bn,re,$e,Bt,no,gs,Ft,_s,vn,W,so,bs,ie,vs,Vo,ks,ys,ao,ws,$s,Ts,le,Bs,Ro,Fs,Cs,Go,zs,Es,Ms,Te,kn,de,Be,Ct,ro,xs,zt,qs,yn,q,io,Ps,Et,js,Os,lo,As,Yo,Ss,Ns,Ls,co,Is,mo,Ds,Ws,Hs,U,po,Qs,ce,Us,Jo,Vs,Rs,Mt,Gs,Ys,Js,Fe,Ks,Ce,wn,me,ze,xt,ho,Xs,qt,Zs,$n,z,uo,ea,fo,oa,Pt,ta,na,sa,jt,aa,ra,Ee,ia,go,la,Ot,da,ca,ma,Me,pa,_o,ha,Ko,ua,fa,Tn,pe,xe,At,bo,ga,St,_a,Bn,P,vo,ba,Nt,va,ka,ko,ya,Xo,wa,$a,Ta,yo,Ba,wo,Fa,Ca,za,V,$o,Ea,he,Ma,Zo,xa,qa,Lt,Pa,ja,Oa,qe,Aa,Pe,Fn,ue,je,It,To,Sa,Dt,Na,Cn,E,Bo,La,Wt,Ia,Da,et,ot,Wa,Ha,Qa,H,Ua,Ht,Va,Ra,Qt,Ga,Ya,Ut,Ja,Ka,Vt,Xa,Za,er,Fo,or,tt,tr,nr,sr,Co,ar,zo,rr,ir,lr,M,Eo,dr,fe,cr,nt,mr,pr,Rt,hr,ur,fr,Oe,gr,Ae,_r,Se,br,Ne,vr,Le,zn,ge,Ie,Gt,Mo,kr,Yt,yr,En,j,xo,wr,Jt,$r,Tr,qo,Br,st,Fr,Cr,zr,Po,Er,jo,Mr,xr,qr,S,Oo,Pr,_e,jr,at,Or,Ar,Kt,Sr,Nr,Lr,De,Ir,We,Dr,He,Mn,be,Qe,Xt,Ao,Wr,Zt,Hr,xn,O,So,Qr,ve,Ur,en,Vr,Rr,on,Gr,Yr,Jr,No,Kr,rt,Xr,Zr,ei,Lo,oi,Io,ti,ni,si,Y,Do,ai,ke,ri,it,ii,li,tn,di,ci,mi,Ue,qn;return n=new ye({}),Ye=new ye({}),no=new ye({}),so=new R({props:{name:"class transformers.BloomConfig",anchor:"transformers.BloomConfig",parameters:[{name:"vocab_size",val:" = 250880"},{name:"hidden_size",val:" = 64"},{name:"n_layer",val:" = 2"},{name:"n_head",val:" = 8"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"apply_residual_connection_post_layernorm",val:" = False"},{name:"hidden_dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"pretraining_tp",val:" = 1"},{name:"slow_but_exact",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the Bloom model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomModel">BloomModel</a>.`,name:"vocab_size"},{anchor:"transformers.BloomConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"hidden_size"},{anchor:"transformers.BloomConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.BloomConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.BloomConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.BloomConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BloomConfig.apply_residual_connection_post_layernorm",description:`<strong>apply_residual_connection_post_layernorm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If enabled, use the layer norm of the hidden states as the residual in the transformer blocks`,name:"apply_residual_connection_post_layernorm"},{anchor:"transformers.BloomConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Dropout rate of the dropout function on the bias dropout.`,name:"hidden_dropout"},{anchor:"transformers.BloomConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Dropout rate applied to the attention probs`,name:"attention_dropout"},{anchor:"transformers.BloomConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.BloomConfig.pretraining_tp",description:`<strong>pretraining_tp</strong> (<code>int</code>, <em>optional</em>, defaults to <code>1</code>) &#x2014;
Experimental feature. Tensor parallelism rank used during pretraining with Megatron. Please refer to <a href="https://huggingface.co/docs/transformers/parallelism" rel="nofollow">this
document</a> to understand more about it. This value is
necessary to ensure exact reproducibility of the pretraining results. Please refer to <a href="https://github.com/pytorch/pytorch/issues/76232" rel="nofollow">this
issue</a>. Note also that this is enabled only when
<code>slow_but_exact=True</code>.`,name:"pretraining_tp"},{anchor:"transformers.BloomConfig.slow_but_exact",description:`<strong>slow_but_exact</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Experimental feature. Whether to use slow but exact implementation of the attention mechanism. While
merging the TP rank tensors, due to slicing operations the results may be slightly different between the
model trained on Megatron and our model. Please refer to <a href="https://github.com/pytorch/pytorch/issues/76232" rel="nofollow">this
issue</a>. A solution to obtain more accurate results is to
enable this feature. Enabling this will hurt the computational time of the inference. Will be probably
resolved in the future once the main model has been fine-tuned with TP_rank=1.`,name:"slow_but_exact"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/configuration_bloom.py#L44"}}),Te=new te({props:{anchor:"transformers.BloomConfig.example",$$slots:{default:[xl]},$$scope:{ctx:F}}}),ro=new ye({}),io=new R({props:{name:"class transformers.BloomModel",anchor:"transformers.BloomModel",parameters:[{name:"config",val:": BloomConfig"}],parametersDescription:[{anchor:"transformers.BloomModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L584"}}),po=new R({props:{name:"forward",anchor:"transformers.BloomModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[torch.Tensor, torch.Tensor], ...], NoneType] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**deprecated_arguments",val:""}],parametersDescription:[{anchor:"transformers.BloomModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomTokenizerFast">BloomTokenizerFast</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.BloomModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L634",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
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
`}}),Fe=new _t({props:{$$slots:{default:[ql]},$$scope:{ctx:F}}}),Ce=new te({props:{anchor:"transformers.BloomModel.forward.example",$$slots:{default:[Pl]},$$scope:{ctx:F}}}),ho=new ye({}),uo=new R({props:{name:"class transformers.BloomTokenizerFast",anchor:"transformers.BloomTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BloomTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BloomTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BloomTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BloomTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.BloomTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.BloomTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (Bloom tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.BloomTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/tokenization_bloom_fast.py#L49"}}),Ee=new te({props:{anchor:"transformers.BloomTokenizerFast.example",$$slots:{default:[jl]},$$scope:{ctx:F}}}),Me=new _t({props:{$$slots:{default:[Ol]},$$scope:{ctx:F}}}),bo=new ye({}),vo=new R({props:{name:"class transformers.BloomForCausalLM",anchor:"transformers.BloomForCausalLM",parameters:[{name:"config",val:": BloomConfig"}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L786"}}),$o=new R({props:{name:"forward",anchor:"transformers.BloomForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[torch.Tensor, torch.Tensor], ...], NoneType] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**deprecated_arguments",val:""}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomTokenizerFast">BloomTokenizerFast</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.BloomForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L821",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
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
`}}),qe=new _t({props:{$$slots:{default:[Al]},$$scope:{ctx:F}}}),Pe=new te({props:{anchor:"transformers.BloomForCausalLM.forward.example",$$slots:{default:[Sl]},$$scope:{ctx:F}}}),To=new ye({}),Bo=new R({props:{name:"class transformers.BloomForSequenceClassification",anchor:"transformers.BloomForSequenceClassification",parameters:[{name:"config",val:": BloomConfig"}],parametersDescription:[{anchor:"transformers.BloomForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L949"}}),Eo=new R({props:{name:"forward",anchor:"transformers.BloomForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[torch.Tensor, torch.Tensor], ...], NoneType] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**deprecated_arguments",val:""}],parametersDescription:[{anchor:"transformers.BloomForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomTokenizerFast">BloomTokenizerFast</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.BloomForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L961",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
<p><code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oe=new _t({props:{$$slots:{default:[Nl]},$$scope:{ctx:F}}}),Ae=new te({props:{anchor:"transformers.BloomForSequenceClassification.forward.example",$$slots:{default:[Ll]},$$scope:{ctx:F}}}),Se=new te({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-2",$$slots:{default:[Il]},$$scope:{ctx:F}}}),Ne=new te({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-3",$$slots:{default:[Dl]},$$scope:{ctx:F}}}),Le=new te({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-4",$$slots:{default:[Wl]},$$scope:{ctx:F}}}),Mo=new ye({}),xo=new R({props:{name:"class transformers.BloomForTokenClassification",anchor:"transformers.BloomForTokenClassification",parameters:[{name:"config",val:": BloomConfig"}],parametersDescription:[{anchor:"transformers.BloomForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L1078"}}),Oo=new R({props:{name:"forward",anchor:"transformers.BloomForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[torch.Tensor, torch.Tensor], ...], NoneType] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**deprecated_arguments",val:""}],parametersDescription:[{anchor:"transformers.BloomForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomTokenizerFast">BloomTokenizerFast</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.BloomForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForTokenClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L1098",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
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
`}}),De=new _t({props:{$$slots:{default:[Hl]},$$scope:{ctx:F}}}),We=new te({props:{anchor:"transformers.BloomForTokenClassification.forward.example",$$slots:{default:[Ql]},$$scope:{ctx:F}}}),He=new te({props:{anchor:"transformers.BloomForTokenClassification.forward.example-2",$$slots:{default:[Ul]},$$scope:{ctx:F}}}),Ao=new ye({}),So=new R({props:{name:"class transformers.BloomForQuestionAnswering",anchor:"transformers.BloomForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L1180"}}),Do=new R({props:{name:"forward",anchor:"transformers.BloomForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BloomForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomTokenizerFast">BloomTokenizerFast</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.BloomForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BloomForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L1191"}}),Ue=new _t({props:{$$slots:{default:[Vl]},$$scope:{ctx:F}}}),{c(){d=s("meta"),_=u(),c=s("h1"),m=s("a"),b=s("span"),k(n.$$.fragment),p=u(),C=s("span"),ae=i("BLOOM"),D=u(),Q=s("h2"),G=s("a"),bt=s("span"),k(Ye.$$.fragment),Zn=u(),vt=s("span"),es=i("Overview"),gn=u(),we=s("p"),os=i("The BLOOM model has been proposed with its various versions through the "),Je=s("a"),ts=i("BigScience Workshop"),ns=i(`. BigScience is inspired by other open science initiatives where researchers have pooled their time and resources to collectively achieve a higher impact.
The architecture of BLOOM is essentially similar to GPT3 (auto-regressive model for next token prediction), but has been trained on 46 different languages and 13 programming languages.
Several smaller versions of the models have been trained on the same dataset. BLOOM is available in the following versions:`),_n=u(),x=s("ul"),kt=s("li"),Ke=s("a"),ss=i("bloom-560m"),as=u(),yt=s("li"),Xe=s("a"),rs=i("bloom-1b1"),is=u(),wt=s("li"),Ze=s("a"),ls=i("bloom-1b7"),ds=u(),$t=s("li"),eo=s("a"),cs=i("bloom-3b"),ms=u(),Tt=s("li"),oo=s("a"),ps=i("bloom-7b1"),hs=u(),Uo=s("li"),to=s("a"),us=i("bloom"),fs=i(" (176B parameters)"),bn=u(),re=s("h2"),$e=s("a"),Bt=s("span"),k(no.$$.fragment),gs=u(),Ft=s("span"),_s=i("BloomConfig"),vn=u(),W=s("div"),k(so.$$.fragment),bs=u(),ie=s("p"),vs=i("This is the configuration class to store the configuration of a "),Vo=s("a"),ks=i("BloomModel"),ys=i(`. It is used to instantiate a Bloom
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
`),ao=s("a"),ws=i("bigscience/bloom"),$s=i("."),Ts=u(),le=s("p"),Bs=i("Configuration objects inherit from "),Ro=s("a"),Fs=i("PretrainedConfig"),Cs=i(` and can be used to control the model outputs. Read the
documentation from `),Go=s("a"),zs=i("PretrainedConfig"),Es=i(" for more information."),Ms=u(),k(Te.$$.fragment),kn=u(),de=s("h2"),Be=s("a"),Ct=s("span"),k(ro.$$.fragment),xs=u(),zt=s("span"),qs=i("BloomModel"),yn=u(),q=s("div"),k(io.$$.fragment),Ps=u(),Et=s("p"),js=i("The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),Os=u(),lo=s("p"),As=i("This model inherits from "),Yo=s("a"),Ss=i("PreTrainedModel"),Ns=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Ls=u(),co=s("p"),Is=i("This model is also a PyTorch "),mo=s("a"),Ds=i("torch.nn.Module"),Ws=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hs=u(),U=s("div"),k(po.$$.fragment),Qs=u(),ce=s("p"),Us=i("The "),Jo=s("a"),Vs=i("BloomModel"),Rs=i(" forward method, overrides the "),Mt=s("code"),Gs=i("__call__"),Ys=i(" special method."),Js=u(),k(Fe.$$.fragment),Ks=u(),k(Ce.$$.fragment),wn=u(),me=s("h2"),ze=s("a"),xt=s("span"),k(ho.$$.fragment),Xs=u(),qt=s("span"),Zs=i("BloomTokenizerFast"),$n=u(),z=s("div"),k(uo.$$.fragment),ea=u(),fo=s("p"),oa=i("Construct a \u201Cfast\u201D Bloom tokenizer (backed by HuggingFace\u2019s "),Pt=s("em"),ta=i("tokenizers"),na=i(` library). Based on byte-level
Byte-Pair-Encoding.`),sa=u(),jt=s("p"),aa=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),ra=u(),k(Ee.$$.fragment),ia=u(),go=s("p"),la=i("You can get around that behavior by passing "),Ot=s("code"),da=i("add_prefix_space=True"),ca=i(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),ma=u(),k(Me.$$.fragment),pa=u(),_o=s("p"),ha=i("This tokenizer inherits from "),Ko=s("a"),ua=i("PreTrainedTokenizerFast"),fa=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Tn=u(),pe=s("h2"),xe=s("a"),At=s("span"),k(bo.$$.fragment),ga=u(),St=s("span"),_a=i("BloomForCausalLM"),Bn=u(),P=s("div"),k(vo.$$.fragment),ba=u(),Nt=s("p"),va=i(`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),ka=u(),ko=s("p"),ya=i("This model inherits from "),Xo=s("a"),wa=i("PreTrainedModel"),$a=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Ta=u(),yo=s("p"),Ba=i("This model is also a PyTorch "),wo=s("a"),Fa=i("torch.nn.Module"),Ca=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),za=u(),V=s("div"),k($o.$$.fragment),Ea=u(),he=s("p"),Ma=i("The "),Zo=s("a"),xa=i("BloomForCausalLM"),qa=i(" forward method, overrides the "),Lt=s("code"),Pa=i("__call__"),ja=i(" special method."),Oa=u(),k(qe.$$.fragment),Aa=u(),k(Pe.$$.fragment),Fn=u(),ue=s("h2"),je=s("a"),It=s("span"),k(To.$$.fragment),Sa=u(),Dt=s("span"),Na=i("BloomForSequenceClassification"),Cn=u(),E=s("div"),k(Bo.$$.fragment),La=u(),Wt=s("p"),Ia=i("The Bloom Model transformer with a sequence classification head on top (linear layer)."),Da=u(),et=s("p"),ot=s("a"),Wa=i("BloomForSequenceClassification"),Ha=i(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),Qa=u(),H=s("p"),Ua=i(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ht=s("code"),Va=i("pad_token_id"),Ra=i(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Qt=s("code"),Ga=i("pad_token_id"),Ya=i(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ut=s("code"),Ja=i("inputs_embeds"),Ka=i(" are passed instead of "),Vt=s("code"),Xa=i("input_ids"),Za=i(`, it does the same (take the last value in
each row of the batch).`),er=u(),Fo=s("p"),or=i("This model inherits from "),tt=s("a"),tr=i("PreTrainedModel"),nr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),sr=u(),Co=s("p"),ar=i("This model is also a PyTorch "),zo=s("a"),rr=i("torch.nn.Module"),ir=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lr=u(),M=s("div"),k(Eo.$$.fragment),dr=u(),fe=s("p"),cr=i("The "),nt=s("a"),mr=i("BloomForSequenceClassification"),pr=i(" forward method, overrides the "),Rt=s("code"),hr=i("__call__"),ur=i(" special method."),fr=u(),k(Oe.$$.fragment),gr=u(),k(Ae.$$.fragment),_r=u(),k(Se.$$.fragment),br=u(),k(Ne.$$.fragment),vr=u(),k(Le.$$.fragment),zn=u(),ge=s("h2"),Ie=s("a"),Gt=s("span"),k(Mo.$$.fragment),kr=u(),Yt=s("span"),yr=i("BloomForTokenClassification"),En=u(),j=s("div"),k(xo.$$.fragment),wr=u(),Jt=s("p"),$r=i(`Bloom Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Tr=u(),qo=s("p"),Br=i("This model inherits from "),st=s("a"),Fr=i("PreTrainedModel"),Cr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),zr=u(),Po=s("p"),Er=i("This model is also a PyTorch "),jo=s("a"),Mr=i("torch.nn.Module"),xr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qr=u(),S=s("div"),k(Oo.$$.fragment),Pr=u(),_e=s("p"),jr=i("The "),at=s("a"),Or=i("BloomForTokenClassification"),Ar=i(" forward method, overrides the "),Kt=s("code"),Sr=i("__call__"),Nr=i(" special method."),Lr=u(),k(De.$$.fragment),Ir=u(),k(We.$$.fragment),Dr=u(),k(He.$$.fragment),Mn=u(),be=s("h2"),Qe=s("a"),Xt=s("span"),k(Ao.$$.fragment),Wr=u(),Zt=s("span"),Hr=i("BloomForQuestionAnswering"),xn=u(),O=s("div"),k(So.$$.fragment),Qr=u(),ve=s("p"),Ur=i(`The BLOOM Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),en=s("code"),Vr=i("span start logits"),Rr=i(" and "),on=s("code"),Gr=i("span end logits"),Yr=i(")."),Jr=u(),No=s("p"),Kr=i("This model inherits from "),rt=s("a"),Xr=i("PreTrainedModel"),Zr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),ei=u(),Lo=s("p"),oi=i("This model is also a PyTorch "),Io=s("a"),ti=i("torch.nn.Module"),ni=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),si=u(),Y=s("div"),k(Do.$$.fragment),ai=u(),ke=s("p"),ri=i("The "),it=s("a"),ii=i("BloomForQuestionAnswering"),li=i(" forward method, overrides the "),tn=s("code"),di=i("__call__"),ci=i(" special method."),mi=u(),k(Ue.$$.fragment),this.h()},l(o){const g=El('[data-svelte="svelte-1phssyn"]',document.head);d=a(g,"META",{name:!0,content:!0}),g.forEach(t),_=f(o),c=a(o,"H1",{class:!0});var Wo=r(c);m=a(Wo,"A",{id:!0,class:!0,href:!0});var nn=r(m);b=a(nn,"SPAN",{});var sn=r(b);y(n.$$.fragment,sn),sn.forEach(t),nn.forEach(t),p=f(Wo),C=a(Wo,"SPAN",{});var an=r(C);ae=l(an,"BLOOM"),an.forEach(t),Wo.forEach(t),D=f(o),Q=a(o,"H2",{class:!0});var Ho=r(Q);G=a(Ho,"A",{id:!0,class:!0,href:!0});var rn=r(G);bt=a(rn,"SPAN",{});var ln=r(bt);y(Ye.$$.fragment,ln),ln.forEach(t),rn.forEach(t),Zn=f(Ho),vt=a(Ho,"SPAN",{});var dn=r(vt);es=l(dn,"Overview"),dn.forEach(t),Ho.forEach(t),gn=f(o),we=a(o,"P",{});var Qo=r(we);os=l(Qo,"The BLOOM model has been proposed with its various versions through the "),Je=a(Qo,"A",{href:!0,rel:!0});var cn=r(Je);ts=l(cn,"BigScience Workshop"),cn.forEach(t),ns=l(Qo,`. BigScience is inspired by other open science initiatives where researchers have pooled their time and resources to collectively achieve a higher impact.
The architecture of BLOOM is essentially similar to GPT3 (auto-regressive model for next token prediction), but has been trained on 46 different languages and 13 programming languages.
Several smaller versions of the models have been trained on the same dataset. BLOOM is available in the following versions:`),Qo.forEach(t),_n=f(o),x=a(o,"UL",{});var A=r(x);kt=a(A,"LI",{});var mn=r(kt);Ke=a(mn,"A",{href:!0,rel:!0});var pn=r(Ke);ss=l(pn,"bloom-560m"),pn.forEach(t),mn.forEach(t),as=f(A),yt=a(A,"LI",{});var hn=r(yt);Xe=a(hn,"A",{href:!0,rel:!0});var un=r(Xe);rs=l(un,"bloom-1b1"),un.forEach(t),hn.forEach(t),is=f(A),wt=a(A,"LI",{});var fn=r(wt);Ze=a(fn,"A",{href:!0,rel:!0});var ui=r(Ze);ls=l(ui,"bloom-1b7"),ui.forEach(t),fn.forEach(t),ds=f(A),$t=a(A,"LI",{});var fi=r($t);eo=a(fi,"A",{href:!0,rel:!0});var gi=r(eo);cs=l(gi,"bloom-3b"),gi.forEach(t),fi.forEach(t),ms=f(A),Tt=a(A,"LI",{});var _i=r(Tt);oo=a(_i,"A",{href:!0,rel:!0});var bi=r(oo);ps=l(bi,"bloom-7b1"),bi.forEach(t),_i.forEach(t),hs=f(A),Uo=a(A,"LI",{});var pi=r(Uo);to=a(pi,"A",{href:!0,rel:!0});var vi=r(to);us=l(vi,"bloom"),vi.forEach(t),fs=l(pi," (176B parameters)"),pi.forEach(t),A.forEach(t),bn=f(o),re=a(o,"H2",{class:!0});var Pn=r(re);$e=a(Pn,"A",{id:!0,class:!0,href:!0});var ki=r($e);Bt=a(ki,"SPAN",{});var yi=r(Bt);y(no.$$.fragment,yi),yi.forEach(t),ki.forEach(t),gs=f(Pn),Ft=a(Pn,"SPAN",{});var wi=r(Ft);_s=l(wi,"BloomConfig"),wi.forEach(t),Pn.forEach(t),vn=f(o),W=a(o,"DIV",{class:!0});var Ve=r(W);y(so.$$.fragment,Ve),bs=f(Ve),ie=a(Ve,"P",{});var lt=r(ie);vs=l(lt,"This is the configuration class to store the configuration of a "),Vo=a(lt,"A",{href:!0});var $i=r(Vo);ks=l($i,"BloomModel"),$i.forEach(t),ys=l(lt,`. It is used to instantiate a Bloom
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
`),ao=a(lt,"A",{href:!0,rel:!0});var Ti=r(ao);ws=l(Ti,"bigscience/bloom"),Ti.forEach(t),$s=l(lt,"."),lt.forEach(t),Ts=f(Ve),le=a(Ve,"P",{});var dt=r(le);Bs=l(dt,"Configuration objects inherit from "),Ro=a(dt,"A",{href:!0});var Bi=r(Ro);Fs=l(Bi,"PretrainedConfig"),Bi.forEach(t),Cs=l(dt,` and can be used to control the model outputs. Read the
documentation from `),Go=a(dt,"A",{href:!0});var Fi=r(Go);zs=l(Fi,"PretrainedConfig"),Fi.forEach(t),Es=l(dt," for more information."),dt.forEach(t),Ms=f(Ve),y(Te.$$.fragment,Ve),Ve.forEach(t),kn=f(o),de=a(o,"H2",{class:!0});var jn=r(de);Be=a(jn,"A",{id:!0,class:!0,href:!0});var Ci=r(Be);Ct=a(Ci,"SPAN",{});var zi=r(Ct);y(ro.$$.fragment,zi),zi.forEach(t),Ci.forEach(t),xs=f(jn),zt=a(jn,"SPAN",{});var Ei=r(zt);qs=l(Ei,"BloomModel"),Ei.forEach(t),jn.forEach(t),yn=f(o),q=a(o,"DIV",{class:!0});var J=r(q);y(io.$$.fragment,J),Ps=f(J),Et=a(J,"P",{});var Mi=r(Et);js=l(Mi,"The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),Mi.forEach(t),Os=f(J),lo=a(J,"P",{});var On=r(lo);As=l(On,"This model inherits from "),Yo=a(On,"A",{href:!0});var xi=r(Yo);Ss=l(xi,"PreTrainedModel"),xi.forEach(t),Ns=l(On,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),On.forEach(t),Ls=f(J),co=a(J,"P",{});var An=r(co);Is=l(An,"This model is also a PyTorch "),mo=a(An,"A",{href:!0,rel:!0});var qi=r(mo);Ds=l(qi,"torch.nn.Module"),qi.forEach(t),Ws=l(An,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),An.forEach(t),Hs=f(J),U=a(J,"DIV",{class:!0});var Re=r(U);y(po.$$.fragment,Re),Qs=f(Re),ce=a(Re,"P",{});var ct=r(ce);Us=l(ct,"The "),Jo=a(ct,"A",{href:!0});var Pi=r(Jo);Vs=l(Pi,"BloomModel"),Pi.forEach(t),Rs=l(ct," forward method, overrides the "),Mt=a(ct,"CODE",{});var ji=r(Mt);Gs=l(ji,"__call__"),ji.forEach(t),Ys=l(ct," special method."),ct.forEach(t),Js=f(Re),y(Fe.$$.fragment,Re),Ks=f(Re),y(Ce.$$.fragment,Re),Re.forEach(t),J.forEach(t),wn=f(o),me=a(o,"H2",{class:!0});var Sn=r(me);ze=a(Sn,"A",{id:!0,class:!0,href:!0});var Oi=r(ze);xt=a(Oi,"SPAN",{});var Ai=r(xt);y(ho.$$.fragment,Ai),Ai.forEach(t),Oi.forEach(t),Xs=f(Sn),qt=a(Sn,"SPAN",{});var Si=r(qt);Zs=l(Si,"BloomTokenizerFast"),Si.forEach(t),Sn.forEach(t),$n=f(o),z=a(o,"DIV",{class:!0});var N=r(z);y(uo.$$.fragment,N),ea=f(N),fo=a(N,"P",{});var Nn=r(fo);oa=l(Nn,"Construct a \u201Cfast\u201D Bloom tokenizer (backed by HuggingFace\u2019s "),Pt=a(Nn,"EM",{});var Ni=r(Pt);ta=l(Ni,"tokenizers"),Ni.forEach(t),na=l(Nn,` library). Based on byte-level
Byte-Pair-Encoding.`),Nn.forEach(t),sa=f(N),jt=a(N,"P",{});var Li=r(jt);aa=l(Li,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Li.forEach(t),ra=f(N),y(Ee.$$.fragment,N),ia=f(N),go=a(N,"P",{});var Ln=r(go);la=l(Ln,"You can get around that behavior by passing "),Ot=a(Ln,"CODE",{});var Ii=r(Ot);da=l(Ii,"add_prefix_space=True"),Ii.forEach(t),ca=l(Ln,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Ln.forEach(t),ma=f(N),y(Me.$$.fragment,N),pa=f(N),_o=a(N,"P",{});var In=r(_o);ha=l(In,"This tokenizer inherits from "),Ko=a(In,"A",{href:!0});var Di=r(Ko);ua=l(Di,"PreTrainedTokenizerFast"),Di.forEach(t),fa=l(In,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),In.forEach(t),N.forEach(t),Tn=f(o),pe=a(o,"H2",{class:!0});var Dn=r(pe);xe=a(Dn,"A",{id:!0,class:!0,href:!0});var Wi=r(xe);At=a(Wi,"SPAN",{});var Hi=r(At);y(bo.$$.fragment,Hi),Hi.forEach(t),Wi.forEach(t),ga=f(Dn),St=a(Dn,"SPAN",{});var Qi=r(St);_a=l(Qi,"BloomForCausalLM"),Qi.forEach(t),Dn.forEach(t),Bn=f(o),P=a(o,"DIV",{class:!0});var K=r(P);y(vo.$$.fragment,K),ba=f(K),Nt=a(K,"P",{});var Ui=r(Nt);va=l(Ui,`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ui.forEach(t),ka=f(K),ko=a(K,"P",{});var Wn=r(ko);ya=l(Wn,"This model inherits from "),Xo=a(Wn,"A",{href:!0});var Vi=r(Xo);wa=l(Vi,"PreTrainedModel"),Vi.forEach(t),$a=l(Wn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Wn.forEach(t),Ta=f(K),yo=a(K,"P",{});var Hn=r(yo);Ba=l(Hn,"This model is also a PyTorch "),wo=a(Hn,"A",{href:!0,rel:!0});var Ri=r(wo);Fa=l(Ri,"torch.nn.Module"),Ri.forEach(t),Ca=l(Hn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hn.forEach(t),za=f(K),V=a(K,"DIV",{class:!0});var Ge=r(V);y($o.$$.fragment,Ge),Ea=f(Ge),he=a(Ge,"P",{});var mt=r(he);Ma=l(mt,"The "),Zo=a(mt,"A",{href:!0});var Gi=r(Zo);xa=l(Gi,"BloomForCausalLM"),Gi.forEach(t),qa=l(mt," forward method, overrides the "),Lt=a(mt,"CODE",{});var Yi=r(Lt);Pa=l(Yi,"__call__"),Yi.forEach(t),ja=l(mt," special method."),mt.forEach(t),Oa=f(Ge),y(qe.$$.fragment,Ge),Aa=f(Ge),y(Pe.$$.fragment,Ge),Ge.forEach(t),K.forEach(t),Fn=f(o),ue=a(o,"H2",{class:!0});var Qn=r(ue);je=a(Qn,"A",{id:!0,class:!0,href:!0});var Ji=r(je);It=a(Ji,"SPAN",{});var Ki=r(It);y(To.$$.fragment,Ki),Ki.forEach(t),Ji.forEach(t),Sa=f(Qn),Dt=a(Qn,"SPAN",{});var Xi=r(Dt);Na=l(Xi,"BloomForSequenceClassification"),Xi.forEach(t),Qn.forEach(t),Cn=f(o),E=a(o,"DIV",{class:!0});var L=r(E);y(Bo.$$.fragment,L),La=f(L),Wt=a(L,"P",{});var Zi=r(Wt);Ia=l(Zi,"The Bloom Model transformer with a sequence classification head on top (linear layer)."),Zi.forEach(t),Da=f(L),et=a(L,"P",{});var hi=r(et);ot=a(hi,"A",{href:!0});var el=r(ot);Wa=l(el,"BloomForSequenceClassification"),el.forEach(t),Ha=l(hi,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),hi.forEach(t),Qa=f(L),H=a(L,"P",{});var X=r(H);Ua=l(X,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ht=a(X,"CODE",{});var ol=r(Ht);Va=l(ol,"pad_token_id"),ol.forEach(t),Ra=l(X,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Qt=a(X,"CODE",{});var tl=r(Qt);Ga=l(tl,"pad_token_id"),tl.forEach(t),Ya=l(X,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ut=a(X,"CODE",{});var nl=r(Ut);Ja=l(nl,"inputs_embeds"),nl.forEach(t),Ka=l(X," are passed instead of "),Vt=a(X,"CODE",{});var sl=r(Vt);Xa=l(sl,"input_ids"),sl.forEach(t),Za=l(X,`, it does the same (take the last value in
each row of the batch).`),X.forEach(t),er=f(L),Fo=a(L,"P",{});var Un=r(Fo);or=l(Un,"This model inherits from "),tt=a(Un,"A",{href:!0});var al=r(tt);tr=l(al,"PreTrainedModel"),al.forEach(t),nr=l(Un,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Un.forEach(t),sr=f(L),Co=a(L,"P",{});var Vn=r(Co);ar=l(Vn,"This model is also a PyTorch "),zo=a(Vn,"A",{href:!0,rel:!0});var rl=r(zo);rr=l(rl,"torch.nn.Module"),rl.forEach(t),ir=l(Vn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vn.forEach(t),lr=f(L),M=a(L,"DIV",{class:!0});var I=r(M);y(Eo.$$.fragment,I),dr=f(I),fe=a(I,"P",{});var pt=r(fe);cr=l(pt,"The "),nt=a(pt,"A",{href:!0});var il=r(nt);mr=l(il,"BloomForSequenceClassification"),il.forEach(t),pr=l(pt," forward method, overrides the "),Rt=a(pt,"CODE",{});var ll=r(Rt);hr=l(ll,"__call__"),ll.forEach(t),ur=l(pt," special method."),pt.forEach(t),fr=f(I),y(Oe.$$.fragment,I),gr=f(I),y(Ae.$$.fragment,I),_r=f(I),y(Se.$$.fragment,I),br=f(I),y(Ne.$$.fragment,I),vr=f(I),y(Le.$$.fragment,I),I.forEach(t),L.forEach(t),zn=f(o),ge=a(o,"H2",{class:!0});var Rn=r(ge);Ie=a(Rn,"A",{id:!0,class:!0,href:!0});var dl=r(Ie);Gt=a(dl,"SPAN",{});var cl=r(Gt);y(Mo.$$.fragment,cl),cl.forEach(t),dl.forEach(t),kr=f(Rn),Yt=a(Rn,"SPAN",{});var ml=r(Yt);yr=l(ml,"BloomForTokenClassification"),ml.forEach(t),Rn.forEach(t),En=f(o),j=a(o,"DIV",{class:!0});var Z=r(j);y(xo.$$.fragment,Z),wr=f(Z),Jt=a(Z,"P",{});var pl=r(Jt);$r=l(pl,`Bloom Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pl.forEach(t),Tr=f(Z),qo=a(Z,"P",{});var Gn=r(qo);Br=l(Gn,"This model inherits from "),st=a(Gn,"A",{href:!0});var hl=r(st);Fr=l(hl,"PreTrainedModel"),hl.forEach(t),Cr=l(Gn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Gn.forEach(t),zr=f(Z),Po=a(Z,"P",{});var Yn=r(Po);Er=l(Yn,"This model is also a PyTorch "),jo=a(Yn,"A",{href:!0,rel:!0});var ul=r(jo);Mr=l(ul,"torch.nn.Module"),ul.forEach(t),xr=l(Yn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yn.forEach(t),qr=f(Z),S=a(Z,"DIV",{class:!0});var ee=r(S);y(Oo.$$.fragment,ee),Pr=f(ee),_e=a(ee,"P",{});var ht=r(_e);jr=l(ht,"The "),at=a(ht,"A",{href:!0});var fl=r(at);Or=l(fl,"BloomForTokenClassification"),fl.forEach(t),Ar=l(ht," forward method, overrides the "),Kt=a(ht,"CODE",{});var gl=r(Kt);Sr=l(gl,"__call__"),gl.forEach(t),Nr=l(ht," special method."),ht.forEach(t),Lr=f(ee),y(De.$$.fragment,ee),Ir=f(ee),y(We.$$.fragment,ee),Dr=f(ee),y(He.$$.fragment,ee),ee.forEach(t),Z.forEach(t),Mn=f(o),be=a(o,"H2",{class:!0});var Jn=r(be);Qe=a(Jn,"A",{id:!0,class:!0,href:!0});var _l=r(Qe);Xt=a(_l,"SPAN",{});var bl=r(Xt);y(Ao.$$.fragment,bl),bl.forEach(t),_l.forEach(t),Wr=f(Jn),Zt=a(Jn,"SPAN",{});var vl=r(Zt);Hr=l(vl,"BloomForQuestionAnswering"),vl.forEach(t),Jn.forEach(t),xn=f(o),O=a(o,"DIV",{class:!0});var oe=r(O);y(So.$$.fragment,oe),Qr=f(oe),ve=a(oe,"P",{});var ut=r(ve);Ur=l(ut,`The BLOOM Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),en=a(ut,"CODE",{});var kl=r(en);Vr=l(kl,"span start logits"),kl.forEach(t),Rr=l(ut," and "),on=a(ut,"CODE",{});var yl=r(on);Gr=l(yl,"span end logits"),yl.forEach(t),Yr=l(ut,")."),ut.forEach(t),Jr=f(oe),No=a(oe,"P",{});var Kn=r(No);Kr=l(Kn,"This model inherits from "),rt=a(Kn,"A",{href:!0});var wl=r(rt);Xr=l(wl,"PreTrainedModel"),wl.forEach(t),Zr=l(Kn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Kn.forEach(t),ei=f(oe),Lo=a(oe,"P",{});var Xn=r(Lo);oi=l(Xn,"This model is also a PyTorch "),Io=a(Xn,"A",{href:!0,rel:!0});var $l=r(Io);ti=l($l,"torch.nn.Module"),$l.forEach(t),ni=l(Xn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xn.forEach(t),si=f(oe),Y=a(oe,"DIV",{class:!0});var ft=r(Y);y(Do.$$.fragment,ft),ai=f(ft),ke=a(ft,"P",{});var gt=r(ke);ri=l(gt,"The "),it=a(gt,"A",{href:!0});var Tl=r(it);ii=l(Tl,"BloomForQuestionAnswering"),Tl.forEach(t),li=l(gt," forward method, overrides the "),tn=a(gt,"CODE",{});var Bl=r(tn);di=l(Bl,"__call__"),Bl.forEach(t),ci=l(gt," special method."),gt.forEach(t),mi=f(ft),y(Ue.$$.fragment,ft),ft.forEach(t),oe.forEach(t),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Gl)),h(m,"id","bloom"),h(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(m,"href","#bloom"),h(c,"class","relative group"),h(G,"id","overview"),h(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(G,"href","#overview"),h(Q,"class","relative group"),h(Je,"href","https://bigscience.huggingface.co/"),h(Je,"rel","nofollow"),h(Ke,"href","https://huggingface.co/bigscience/bloom-560m"),h(Ke,"rel","nofollow"),h(Xe,"href","https://huggingface.co/bigscience/bloom-1b1"),h(Xe,"rel","nofollow"),h(Ze,"href","https://huggingface.co/bigscience/bloom-1b7"),h(Ze,"rel","nofollow"),h(eo,"href","https://huggingface.co/bigscience/bloom-3b"),h(eo,"rel","nofollow"),h(oo,"href","https://huggingface.co/bigscience/bloom-7b1"),h(oo,"rel","nofollow"),h(to,"href","https://huggingface.co/bigscience/bloom"),h(to,"rel","nofollow"),h($e,"id","transformers.BloomConfig"),h($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($e,"href","#transformers.BloomConfig"),h(re,"class","relative group"),h(Vo,"href","/docs/transformers/main/en/model_doc/bloom#transformers.BloomModel"),h(ao,"href","https://huggingface.co/bigscience/bloom"),h(ao,"rel","nofollow"),h(Ro,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Go,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Be,"id","transformers.BloomModel"),h(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Be,"href","#transformers.BloomModel"),h(de,"class","relative group"),h(Yo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(mo,"rel","nofollow"),h(Jo,"href","/docs/transformers/main/en/model_doc/bloom#transformers.BloomModel"),h(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ze,"id","transformers.BloomTokenizerFast"),h(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ze,"href","#transformers.BloomTokenizerFast"),h(me,"class","relative group"),h(Ko,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xe,"id","transformers.BloomForCausalLM"),h(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xe,"href","#transformers.BloomForCausalLM"),h(pe,"class","relative group"),h(Xo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(wo,"rel","nofollow"),h(Zo,"href","/docs/transformers/main/en/model_doc/bloom#transformers.BloomForCausalLM"),h(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(je,"id","transformers.BloomForSequenceClassification"),h(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(je,"href","#transformers.BloomForSequenceClassification"),h(ue,"class","relative group"),h(ot,"href","/docs/transformers/main/en/model_doc/bloom#transformers.BloomForSequenceClassification"),h(tt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(zo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(zo,"rel","nofollow"),h(nt,"href","/docs/transformers/main/en/model_doc/bloom#transformers.BloomForSequenceClassification"),h(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ie,"id","transformers.BloomForTokenClassification"),h(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ie,"href","#transformers.BloomForTokenClassification"),h(ge,"class","relative group"),h(st,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(jo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(jo,"rel","nofollow"),h(at,"href","/docs/transformers/main/en/model_doc/bloom#transformers.BloomForTokenClassification"),h(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Qe,"id","transformers.BloomForQuestionAnswering"),h(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Qe,"href","#transformers.BloomForQuestionAnswering"),h(be,"class","relative group"),h(rt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Io,"rel","nofollow"),h(it,"href","/docs/transformers/main/en/model_doc/bloom#transformers.BloomForQuestionAnswering"),h(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),v(o,_,g),v(o,c,g),e(c,m),e(m,b),w(n,b,null),e(c,p),e(c,C),e(C,ae),v(o,D,g),v(o,Q,g),e(Q,G),e(G,bt),w(Ye,bt,null),e(Q,Zn),e(Q,vt),e(vt,es),v(o,gn,g),v(o,we,g),e(we,os),e(we,Je),e(Je,ts),e(we,ns),v(o,_n,g),v(o,x,g),e(x,kt),e(kt,Ke),e(Ke,ss),e(x,as),e(x,yt),e(yt,Xe),e(Xe,rs),e(x,is),e(x,wt),e(wt,Ze),e(Ze,ls),e(x,ds),e(x,$t),e($t,eo),e(eo,cs),e(x,ms),e(x,Tt),e(Tt,oo),e(oo,ps),e(x,hs),e(x,Uo),e(Uo,to),e(to,us),e(Uo,fs),v(o,bn,g),v(o,re,g),e(re,$e),e($e,Bt),w(no,Bt,null),e(re,gs),e(re,Ft),e(Ft,_s),v(o,vn,g),v(o,W,g),w(so,W,null),e(W,bs),e(W,ie),e(ie,vs),e(ie,Vo),e(Vo,ks),e(ie,ys),e(ie,ao),e(ao,ws),e(ie,$s),e(W,Ts),e(W,le),e(le,Bs),e(le,Ro),e(Ro,Fs),e(le,Cs),e(le,Go),e(Go,zs),e(le,Es),e(W,Ms),w(Te,W,null),v(o,kn,g),v(o,de,g),e(de,Be),e(Be,Ct),w(ro,Ct,null),e(de,xs),e(de,zt),e(zt,qs),v(o,yn,g),v(o,q,g),w(io,q,null),e(q,Ps),e(q,Et),e(Et,js),e(q,Os),e(q,lo),e(lo,As),e(lo,Yo),e(Yo,Ss),e(lo,Ns),e(q,Ls),e(q,co),e(co,Is),e(co,mo),e(mo,Ds),e(co,Ws),e(q,Hs),e(q,U),w(po,U,null),e(U,Qs),e(U,ce),e(ce,Us),e(ce,Jo),e(Jo,Vs),e(ce,Rs),e(ce,Mt),e(Mt,Gs),e(ce,Ys),e(U,Js),w(Fe,U,null),e(U,Ks),w(Ce,U,null),v(o,wn,g),v(o,me,g),e(me,ze),e(ze,xt),w(ho,xt,null),e(me,Xs),e(me,qt),e(qt,Zs),v(o,$n,g),v(o,z,g),w(uo,z,null),e(z,ea),e(z,fo),e(fo,oa),e(fo,Pt),e(Pt,ta),e(fo,na),e(z,sa),e(z,jt),e(jt,aa),e(z,ra),w(Ee,z,null),e(z,ia),e(z,go),e(go,la),e(go,Ot),e(Ot,da),e(go,ca),e(z,ma),w(Me,z,null),e(z,pa),e(z,_o),e(_o,ha),e(_o,Ko),e(Ko,ua),e(_o,fa),v(o,Tn,g),v(o,pe,g),e(pe,xe),e(xe,At),w(bo,At,null),e(pe,ga),e(pe,St),e(St,_a),v(o,Bn,g),v(o,P,g),w(vo,P,null),e(P,ba),e(P,Nt),e(Nt,va),e(P,ka),e(P,ko),e(ko,ya),e(ko,Xo),e(Xo,wa),e(ko,$a),e(P,Ta),e(P,yo),e(yo,Ba),e(yo,wo),e(wo,Fa),e(yo,Ca),e(P,za),e(P,V),w($o,V,null),e(V,Ea),e(V,he),e(he,Ma),e(he,Zo),e(Zo,xa),e(he,qa),e(he,Lt),e(Lt,Pa),e(he,ja),e(V,Oa),w(qe,V,null),e(V,Aa),w(Pe,V,null),v(o,Fn,g),v(o,ue,g),e(ue,je),e(je,It),w(To,It,null),e(ue,Sa),e(ue,Dt),e(Dt,Na),v(o,Cn,g),v(o,E,g),w(Bo,E,null),e(E,La),e(E,Wt),e(Wt,Ia),e(E,Da),e(E,et),e(et,ot),e(ot,Wa),e(et,Ha),e(E,Qa),e(E,H),e(H,Ua),e(H,Ht),e(Ht,Va),e(H,Ra),e(H,Qt),e(Qt,Ga),e(H,Ya),e(H,Ut),e(Ut,Ja),e(H,Ka),e(H,Vt),e(Vt,Xa),e(H,Za),e(E,er),e(E,Fo),e(Fo,or),e(Fo,tt),e(tt,tr),e(Fo,nr),e(E,sr),e(E,Co),e(Co,ar),e(Co,zo),e(zo,rr),e(Co,ir),e(E,lr),e(E,M),w(Eo,M,null),e(M,dr),e(M,fe),e(fe,cr),e(fe,nt),e(nt,mr),e(fe,pr),e(fe,Rt),e(Rt,hr),e(fe,ur),e(M,fr),w(Oe,M,null),e(M,gr),w(Ae,M,null),e(M,_r),w(Se,M,null),e(M,br),w(Ne,M,null),e(M,vr),w(Le,M,null),v(o,zn,g),v(o,ge,g),e(ge,Ie),e(Ie,Gt),w(Mo,Gt,null),e(ge,kr),e(ge,Yt),e(Yt,yr),v(o,En,g),v(o,j,g),w(xo,j,null),e(j,wr),e(j,Jt),e(Jt,$r),e(j,Tr),e(j,qo),e(qo,Br),e(qo,st),e(st,Fr),e(qo,Cr),e(j,zr),e(j,Po),e(Po,Er),e(Po,jo),e(jo,Mr),e(Po,xr),e(j,qr),e(j,S),w(Oo,S,null),e(S,Pr),e(S,_e),e(_e,jr),e(_e,at),e(at,Or),e(_e,Ar),e(_e,Kt),e(Kt,Sr),e(_e,Nr),e(S,Lr),w(De,S,null),e(S,Ir),w(We,S,null),e(S,Dr),w(He,S,null),v(o,Mn,g),v(o,be,g),e(be,Qe),e(Qe,Xt),w(Ao,Xt,null),e(be,Wr),e(be,Zt),e(Zt,Hr),v(o,xn,g),v(o,O,g),w(So,O,null),e(O,Qr),e(O,ve),e(ve,Ur),e(ve,en),e(en,Vr),e(ve,Rr),e(ve,on),e(on,Gr),e(ve,Yr),e(O,Jr),e(O,No),e(No,Kr),e(No,rt),e(rt,Xr),e(No,Zr),e(O,ei),e(O,Lo),e(Lo,oi),e(Lo,Io),e(Io,ti),e(Lo,ni),e(O,si),e(O,Y),w(Do,Y,null),e(Y,ai),e(Y,ke),e(ke,ri),e(ke,it),e(it,ii),e(ke,li),e(ke,tn),e(tn,di),e(ke,ci),e(Y,mi),w(Ue,Y,null),qn=!0},p(o,[g]){const Wo={};g&2&&(Wo.$$scope={dirty:g,ctx:o}),Te.$set(Wo);const nn={};g&2&&(nn.$$scope={dirty:g,ctx:o}),Fe.$set(nn);const sn={};g&2&&(sn.$$scope={dirty:g,ctx:o}),Ce.$set(sn);const an={};g&2&&(an.$$scope={dirty:g,ctx:o}),Ee.$set(an);const Ho={};g&2&&(Ho.$$scope={dirty:g,ctx:o}),Me.$set(Ho);const rn={};g&2&&(rn.$$scope={dirty:g,ctx:o}),qe.$set(rn);const ln={};g&2&&(ln.$$scope={dirty:g,ctx:o}),Pe.$set(ln);const dn={};g&2&&(dn.$$scope={dirty:g,ctx:o}),Oe.$set(dn);const Qo={};g&2&&(Qo.$$scope={dirty:g,ctx:o}),Ae.$set(Qo);const cn={};g&2&&(cn.$$scope={dirty:g,ctx:o}),Se.$set(cn);const A={};g&2&&(A.$$scope={dirty:g,ctx:o}),Ne.$set(A);const mn={};g&2&&(mn.$$scope={dirty:g,ctx:o}),Le.$set(mn);const pn={};g&2&&(pn.$$scope={dirty:g,ctx:o}),De.$set(pn);const hn={};g&2&&(hn.$$scope={dirty:g,ctx:o}),We.$set(hn);const un={};g&2&&(un.$$scope={dirty:g,ctx:o}),He.$set(un);const fn={};g&2&&(fn.$$scope={dirty:g,ctx:o}),Ue.$set(fn)},i(o){qn||($(n.$$.fragment,o),$(Ye.$$.fragment,o),$(no.$$.fragment,o),$(so.$$.fragment,o),$(Te.$$.fragment,o),$(ro.$$.fragment,o),$(io.$$.fragment,o),$(po.$$.fragment,o),$(Fe.$$.fragment,o),$(Ce.$$.fragment,o),$(ho.$$.fragment,o),$(uo.$$.fragment,o),$(Ee.$$.fragment,o),$(Me.$$.fragment,o),$(bo.$$.fragment,o),$(vo.$$.fragment,o),$($o.$$.fragment,o),$(qe.$$.fragment,o),$(Pe.$$.fragment,o),$(To.$$.fragment,o),$(Bo.$$.fragment,o),$(Eo.$$.fragment,o),$(Oe.$$.fragment,o),$(Ae.$$.fragment,o),$(Se.$$.fragment,o),$(Ne.$$.fragment,o),$(Le.$$.fragment,o),$(Mo.$$.fragment,o),$(xo.$$.fragment,o),$(Oo.$$.fragment,o),$(De.$$.fragment,o),$(We.$$.fragment,o),$(He.$$.fragment,o),$(Ao.$$.fragment,o),$(So.$$.fragment,o),$(Do.$$.fragment,o),$(Ue.$$.fragment,o),qn=!0)},o(o){T(n.$$.fragment,o),T(Ye.$$.fragment,o),T(no.$$.fragment,o),T(so.$$.fragment,o),T(Te.$$.fragment,o),T(ro.$$.fragment,o),T(io.$$.fragment,o),T(po.$$.fragment,o),T(Fe.$$.fragment,o),T(Ce.$$.fragment,o),T(ho.$$.fragment,o),T(uo.$$.fragment,o),T(Ee.$$.fragment,o),T(Me.$$.fragment,o),T(bo.$$.fragment,o),T(vo.$$.fragment,o),T($o.$$.fragment,o),T(qe.$$.fragment,o),T(Pe.$$.fragment,o),T(To.$$.fragment,o),T(Bo.$$.fragment,o),T(Eo.$$.fragment,o),T(Oe.$$.fragment,o),T(Ae.$$.fragment,o),T(Se.$$.fragment,o),T(Ne.$$.fragment,o),T(Le.$$.fragment,o),T(Mo.$$.fragment,o),T(xo.$$.fragment,o),T(Oo.$$.fragment,o),T(De.$$.fragment,o),T(We.$$.fragment,o),T(He.$$.fragment,o),T(Ao.$$.fragment,o),T(So.$$.fragment,o),T(Do.$$.fragment,o),T(Ue.$$.fragment,o),qn=!1},d(o){t(d),o&&t(_),o&&t(c),B(n),o&&t(D),o&&t(Q),B(Ye),o&&t(gn),o&&t(we),o&&t(_n),o&&t(x),o&&t(bn),o&&t(re),B(no),o&&t(vn),o&&t(W),B(so),B(Te),o&&t(kn),o&&t(de),B(ro),o&&t(yn),o&&t(q),B(io),B(po),B(Fe),B(Ce),o&&t(wn),o&&t(me),B(ho),o&&t($n),o&&t(z),B(uo),B(Ee),B(Me),o&&t(Tn),o&&t(pe),B(bo),o&&t(Bn),o&&t(P),B(vo),B($o),B(qe),B(Pe),o&&t(Fn),o&&t(ue),B(To),o&&t(Cn),o&&t(E),B(Bo),B(Eo),B(Oe),B(Ae),B(Se),B(Ne),B(Le),o&&t(zn),o&&t(ge),B(Mo),o&&t(En),o&&t(j),B(xo),B(Oo),B(De),B(We),B(He),o&&t(Mn),o&&t(be),B(Ao),o&&t(xn),o&&t(O),B(So),B(Do),B(Ue)}}}const Gl={local:"bloom",sections:[{local:"overview",title:"Overview"},{local:"transformers.BloomConfig",title:"BloomConfig"},{local:"transformers.BloomModel",title:"BloomModel"},{local:"transformers.BloomTokenizerFast",title:"BloomTokenizerFast"},{local:"transformers.BloomForCausalLM",title:"BloomForCausalLM"},{local:"transformers.BloomForSequenceClassification",title:"BloomForSequenceClassification"},{local:"transformers.BloomForTokenClassification",title:"BloomForTokenClassification"},{local:"transformers.BloomForQuestionAnswering",title:"BloomForQuestionAnswering"}],title:"BLOOM"};function Yl(F){return Ml(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class td extends Fl{constructor(d){super();Cl(this,d,Yl,Rl,zl,{})}}export{td as default,Gl as metadata};
