import{S as Hd,i as Qd,s as Ud,e as n,k as p,w as k,t as r,M as Vd,c as s,d as t,m as h,a,x as y,h as l,b as m,G as e,g as b,y as w,q as $,o as T,B,v as Rd,L as ae}from"../../chunks/vendor-hf-doc-builder.js";import{T as St}from"../../chunks/Tip-hf-doc-builder.js";import{D as R}from"../../chunks/Docstring-hf-doc-builder.js";import{C as re}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ne}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as se}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";import{P as Gd}from"../../chunks/PipelineTag-hf-doc-builder.js";function Yd(F){let d,_,c,u,v;return u=new re({props:{code:`from transformers import BloomConfig, BloomModel

# Initializing a Bloom configuration
configuration = BloomConfig()

# Initializing a model (with random weights) from the configuration
model = BloomModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomConfig, BloomModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Bloom configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BloomConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),_=r("Example:"),c=p(),k(u.$$.fragment)},l(i){d=s(i,"P",{});var f=a(d);_=l(f,"Example:"),f.forEach(t),c=h(i),y(u.$$.fragment,i)},m(i,f){b(i,d,f),e(d,_),b(i,c,f),w(u,i,f),v=!0},p:ae,i(i){v||($(u.$$.fragment,i),v=!0)},o(i){T(u.$$.fragment,i),v=!1},d(i){i&&t(d),i&&t(c),B(u,i)}}}function Jd(F){let d,_,c,u,v;return{c(){d=n("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){d=s(i,"P",{});var f=a(d);_=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var C=a(c);u=l(C,"Module"),C.forEach(t),v=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){b(i,d,f),e(d,_),e(d,c),e(c,u),e(d,v)},d(i){i&&t(d)}}}function Kd(F){let d,_,c,u,v;return u=new re({props:{code:`from transformers import BloomTokenizerFast, BloomModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=r("Example:"),c=p(),k(u.$$.fragment)},l(i){d=s(i,"P",{});var f=a(d);_=l(f,"Example:"),f.forEach(t),c=h(i),y(u.$$.fragment,i)},m(i,f){b(i,d,f),e(d,_),b(i,c,f),w(u,i,f),v=!0},p:ae,i(i){v||($(u.$$.fragment,i),v=!0)},o(i){T(u.$$.fragment,i),v=!1},d(i){i&&t(d),i&&t(c),B(u,i)}}}function Xd(F){let d,_,c,u,v;return u=new re({props:{code:`from transformers import BloomTokenizerFast
tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=n("p"),_=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=p(),k(u.$$.fragment)},l(i){d=s(i,"P",{});var f=a(d);_=l(f,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f.forEach(t),c=h(i),y(u.$$.fragment,i)},m(i,f){b(i,d,f),e(d,_),b(i,c,f),w(u,i,f),v=!0},p:ae,i(i){v||($(u.$$.fragment,i),v=!0)},o(i){T(u.$$.fragment,i),v=!1},d(i){i&&t(d),i&&t(c),B(u,i)}}}function Zd(F){let d,_,c,u,v,i,f,C;return{c(){d=n("p"),_=r("When used with "),c=n("code"),u=r("is_split_into_words=True"),v=r(", this tokenizer needs to be instantiated with "),i=n("code"),f=r("add_prefix_space=True"),C=r(".")},l(le){d=s(le,"P",{});var D=a(d);_=l(D,"When used with "),c=s(D,"CODE",{});var Q=a(c);u=l(Q,"is_split_into_words=True"),Q.forEach(t),v=l(D,", this tokenizer needs to be instantiated with "),i=s(D,"CODE",{});var G=a(i);f=l(G,"add_prefix_space=True"),G.forEach(t),C=l(D,"."),D.forEach(t)},m(le,D){b(le,d,D),e(d,_),e(d,c),e(c,u),e(d,v),e(d,i),e(i,f),e(d,C)},d(le){le&&t(d)}}}function ec(F){let d,_,c,u,v;return{c(){d=n("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){d=s(i,"P",{});var f=a(d);_=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var C=a(c);u=l(C,"Module"),C.forEach(t),v=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){b(i,d,f),e(d,_),e(d,c),e(c,u),e(d,v)},d(i){i&&t(d)}}}function oc(F){let d,_,c,u,v;return u=new re({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=r("Example:"),c=p(),k(u.$$.fragment)},l(i){d=s(i,"P",{});var f=a(d);_=l(f,"Example:"),f.forEach(t),c=h(i),y(u.$$.fragment,i)},m(i,f){b(i,d,f),e(d,_),b(i,c,f),w(u,i,f),v=!0},p:ae,i(i){v||($(u.$$.fragment,i),v=!0)},o(i){T(u.$$.fragment,i),v=!1},d(i){i&&t(d),i&&t(c),B(u,i)}}}function tc(F){let d,_,c,u,v;return{c(){d=n("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){d=s(i,"P",{});var f=a(d);_=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var C=a(c);u=l(C,"Module"),C.forEach(t),v=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){b(i,d,f),e(d,_),e(d,c),e(c,u),e(d,v)},d(i){i&&t(d)}}}function nc(F){let d,_,c,u,v;return u=new re({props:{code:`import torch
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
`}}),{c(){d=n("p"),_=r("Example of single-label classification:"),c=p(),k(u.$$.fragment)},l(i){d=s(i,"P",{});var f=a(d);_=l(f,"Example of single-label classification:"),f.forEach(t),c=h(i),y(u.$$.fragment,i)},m(i,f){b(i,d,f),e(d,_),b(i,c,f),w(u,i,f),v=!0},p:ae,i(i){v||($(u.$$.fragment,i),v=!0)},o(i){T(u.$$.fragment,i),v=!1},d(i){i&&t(d),i&&t(c),B(u,i)}}}function sc(F){let d,_;return d=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){k(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,u){w(d,c,u),_=!0},p:ae,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){B(d,c)}}}function ac(F){let d,_,c,u,v;return u=new re({props:{code:`import torch
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
`}}),{c(){d=n("p"),_=r("Example of multi-label classification:"),c=p(),k(u.$$.fragment)},l(i){d=s(i,"P",{});var f=a(d);_=l(f,"Example of multi-label classification:"),f.forEach(t),c=h(i),y(u.$$.fragment,i)},m(i,f){b(i,d,f),e(d,_),b(i,c,f),w(u,i,f),v=!0},p:ae,i(i){v||($(u.$$.fragment,i),v=!0)},o(i){T(u.$$.fragment,i),v=!1},d(i){i&&t(d),i&&t(c),B(u,i)}}}function rc(F){let d,_;return d=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,u){w(d,c,u),_=!0},p:ae,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){B(d,c)}}}function lc(F){let d,_,c,u,v;return{c(){d=n("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){d=s(i,"P",{});var f=a(d);_=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var C=a(c);u=l(C,"Module"),C.forEach(t),v=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){b(i,d,f),e(d,_),e(d,c),e(c,u),e(d,v)},d(i){i&&t(d)}}}function ic(F){let d,_,c,u,v;return u=new re({props:{code:`from transformers import BloomTokenizerFast, BloomForTokenClassification
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
`}}),{c(){d=n("p"),_=r("Example:"),c=p(),k(u.$$.fragment)},l(i){d=s(i,"P",{});var f=a(d);_=l(f,"Example:"),f.forEach(t),c=h(i),y(u.$$.fragment,i)},m(i,f){b(i,d,f),e(d,_),b(i,c,f),w(u,i,f),v=!0},p:ae,i(i){v||($(u.$$.fragment,i),v=!0)},o(i){T(u.$$.fragment,i),v=!1},d(i){i&&t(d),i&&t(c),B(u,i)}}}function dc(F){let d,_;return d=new re({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,u){w(d,c,u),_=!0},p:ae,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){B(d,c)}}}function cc(F){let d,_,c,u,v;return{c(){d=n("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){d=s(i,"P",{});var f=a(d);_=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var C=a(c);u=l(C,"Module"),C.forEach(t),v=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){b(i,d,f),e(d,_),e(d,c),e(c,u),e(d,v)},d(i){i&&t(d)}}}function mc(F){let d,_,c,u,v,i,f,C,le,D,Q,G,Nt,Ze,As,It,Os,Nn,Te,Ls,eo,Ss,Ns,In,x,Dt,oo,Is,Ds,Wt,to,Ws,Hs,Ht,no,Qs,Us,Qt,so,Vs,Rs,Ut,ao,Gs,Ys,rt,ro,Js,Ks,Dn,ie,Be,Vt,lo,Xs,Rt,Zs,Wn,lt,ea,Hn,io,Qn,it,Y,dt,oa,ta,co,na,sa,mo,aa,ra,Un,ct,la,Vn,Fe,po,ia,ho,da,ca,ma,uo,pa,fo,ha,ua,Rn,mt,fa,Gn,pt,go,ga,_o,_a,ba,Yn,de,Ce,Gt,bo,va,Yt,ka,Jn,W,vo,ya,ce,wa,ht,$a,Ta,ko,Ba,Fa,Ca,me,za,ut,Ea,Ma,ft,xa,qa,Pa,ze,Kn,pe,Ee,Jt,yo,ja,Kt,Aa,Xn,q,wo,Oa,Xt,La,Sa,$o,Na,gt,Ia,Da,Wa,To,Ha,Bo,Qa,Ua,Va,U,Fo,Ra,he,Ga,_t,Ya,Ja,Zt,Ka,Xa,Za,Me,er,xe,Zn,ue,qe,en,Co,or,on,tr,es,z,zo,nr,Eo,sr,tn,ar,rr,lr,nn,ir,dr,Pe,cr,Mo,mr,sn,pr,hr,ur,je,fr,xo,gr,bt,_r,br,os,fe,Ae,an,qo,vr,rn,kr,ts,P,Po,yr,ln,wr,$r,jo,Tr,vt,Br,Fr,Cr,Ao,zr,Oo,Er,Mr,xr,V,Lo,qr,ge,Pr,kt,jr,Ar,dn,Or,Lr,Sr,Oe,Nr,Le,ns,_e,Se,cn,So,Ir,mn,Dr,ss,E,No,Wr,pn,Hr,Qr,yt,wt,Ur,Vr,Rr,H,Gr,hn,Yr,Jr,un,Kr,Xr,fn,Zr,el,gn,ol,tl,nl,Io,sl,$t,al,rl,ll,Do,il,Wo,dl,cl,ml,M,Ho,pl,be,hl,Tt,ul,fl,_n,gl,_l,bl,Ne,vl,Ie,kl,De,yl,We,wl,He,as,ve,Qe,bn,Qo,$l,vn,Tl,rs,j,Uo,Bl,kn,Fl,Cl,Vo,zl,Bt,El,Ml,xl,Ro,ql,Go,Pl,jl,Al,L,Yo,Ol,ke,Ll,Ft,Sl,Nl,yn,Il,Dl,Wl,Ue,Hl,Ve,Ql,Re,ls,ye,Ge,wn,Jo,Ul,$n,Vl,is,A,Ko,Rl,we,Gl,Tn,Yl,Jl,Bn,Kl,Xl,Zl,Xo,ei,Ct,oi,ti,ni,Zo,si,et,ai,ri,li,J,ot,ii,$e,di,zt,ci,mi,Fn,pi,hi,ui,Ye,ds;return i=new ne({}),Ze=new ne({}),lo=new ne({}),io=new Gd({props:{pipeline:"text-generation"}}),bo=new ne({}),vo=new R({props:{name:"class transformers.BloomConfig",anchor:"transformers.BloomConfig",parameters:[{name:"vocab_size",val:" = 250880"},{name:"hidden_size",val:" = 64"},{name:"n_layer",val:" = 2"},{name:"n_head",val:" = 8"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"apply_residual_connection_post_layernorm",val:" = False"},{name:"hidden_dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"pretraining_tp",val:" = 1"},{name:"slow_but_exact",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 250880) &#x2014;
Vocabulary size of the Bloom model. Defines the maximum number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomModel">BloomModel</a>. Check <a href="https://huggingface.co/bigscience/bloom/discussions/120#633d28389addb8530b406c2a" rel="nofollow">this
discussion</a> on how the
<code>vocab_size</code> has been defined.`,name:"vocab_size"},{anchor:"transformers.BloomConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"hidden_size"},{anchor:"transformers.BloomConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.BloomConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
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
resolved in the future once the main model has been fine-tuned with TP_rank=1.`,name:"slow_but_exact"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/configuration_bloom.py#L44"}}),ze=new se({props:{anchor:"transformers.BloomConfig.example",$$slots:{default:[Yd]},$$scope:{ctx:F}}}),yo=new ne({}),wo=new R({props:{name:"class transformers.BloomModel",anchor:"transformers.BloomModel",parameters:[{name:"config",val:": BloomConfig"}],parametersDescription:[{anchor:"transformers.BloomModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L584"}}),Fo=new R({props:{name:"forward",anchor:"transformers.BloomModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[torch.Tensor, torch.Tensor], ...], NoneType] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**deprecated_arguments",val:""}],parametersDescription:[{anchor:"transformers.BloomModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
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
`}}),Me=new St({props:{$$slots:{default:[Jd]},$$scope:{ctx:F}}}),xe=new se({props:{anchor:"transformers.BloomModel.forward.example",$$slots:{default:[Kd]},$$scope:{ctx:F}}}),Co=new ne({}),zo=new R({props:{name:"class transformers.BloomTokenizerFast",anchor:"transformers.BloomTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/tokenization_bloom_fast.py#L49"}}),Pe=new se({props:{anchor:"transformers.BloomTokenizerFast.example",$$slots:{default:[Xd]},$$scope:{ctx:F}}}),je=new St({props:{$$slots:{default:[Zd]},$$scope:{ctx:F}}}),qo=new ne({}),Po=new R({props:{name:"class transformers.BloomForCausalLM",anchor:"transformers.BloomForCausalLM",parameters:[{name:"config",val:": BloomConfig"}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L786"}}),Lo=new R({props:{name:"forward",anchor:"transformers.BloomForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[torch.Tensor, torch.Tensor], ...], NoneType] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**deprecated_arguments",val:""}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
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
`}}),Oe=new St({props:{$$slots:{default:[ec]},$$scope:{ctx:F}}}),Le=new se({props:{anchor:"transformers.BloomForCausalLM.forward.example",$$slots:{default:[oc]},$$scope:{ctx:F}}}),So=new ne({}),No=new R({props:{name:"class transformers.BloomForSequenceClassification",anchor:"transformers.BloomForSequenceClassification",parameters:[{name:"config",val:": BloomConfig"}],parametersDescription:[{anchor:"transformers.BloomForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L949"}}),Ho=new R({props:{name:"forward",anchor:"transformers.BloomForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[torch.Tensor, torch.Tensor], ...], NoneType] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**deprecated_arguments",val:""}],parametersDescription:[{anchor:"transformers.BloomForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
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
`}}),Ne=new St({props:{$$slots:{default:[tc]},$$scope:{ctx:F}}}),Ie=new se({props:{anchor:"transformers.BloomForSequenceClassification.forward.example",$$slots:{default:[nc]},$$scope:{ctx:F}}}),De=new se({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-2",$$slots:{default:[sc]},$$scope:{ctx:F}}}),We=new se({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-3",$$slots:{default:[ac]},$$scope:{ctx:F}}}),He=new se({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-4",$$slots:{default:[rc]},$$scope:{ctx:F}}}),Qo=new ne({}),Uo=new R({props:{name:"class transformers.BloomForTokenClassification",anchor:"transformers.BloomForTokenClassification",parameters:[{name:"config",val:": BloomConfig"}],parametersDescription:[{anchor:"transformers.BloomForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L1078"}}),Yo=new R({props:{name:"forward",anchor:"transformers.BloomForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[torch.Tensor, torch.Tensor], ...], NoneType] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**deprecated_arguments",val:""}],parametersDescription:[{anchor:"transformers.BloomForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
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
`}}),Ue=new St({props:{$$slots:{default:[lc]},$$scope:{ctx:F}}}),Ve=new se({props:{anchor:"transformers.BloomForTokenClassification.forward.example",$$slots:{default:[ic]},$$scope:{ctx:F}}}),Re=new se({props:{anchor:"transformers.BloomForTokenClassification.forward.example-2",$$slots:{default:[dc]},$$scope:{ctx:F}}}),Jo=new ne({}),Ko=new R({props:{name:"class transformers.BloomForQuestionAnswering",anchor:"transformers.BloomForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L1180"}}),ot=new R({props:{name:"forward",anchor:"transformers.BloomForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BloomForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L1191"}}),Ye=new St({props:{$$slots:{default:[cc]},$$scope:{ctx:F}}}),{c(){d=n("meta"),_=p(),c=n("h1"),u=n("a"),v=n("span"),k(i.$$.fragment),f=p(),C=n("span"),le=r("BLOOM"),D=p(),Q=n("h2"),G=n("a"),Nt=n("span"),k(Ze.$$.fragment),As=p(),It=n("span"),Os=r("Overview"),Nn=p(),Te=n("p"),Ls=r("The BLOOM model has been proposed with its various versions through the "),eo=n("a"),Ss=r("BigScience Workshop"),Ns=r(`. BigScience is inspired by other open science initiatives where researchers have pooled their time and resources to collectively achieve a higher impact.
The architecture of BLOOM is essentially similar to GPT3 (auto-regressive model for next token prediction), but has been trained on 46 different languages and 13 programming languages.
Several smaller versions of the models have been trained on the same dataset. BLOOM is available in the following versions:`),In=p(),x=n("ul"),Dt=n("li"),oo=n("a"),Is=r("bloom-560m"),Ds=p(),Wt=n("li"),to=n("a"),Ws=r("bloom-1b1"),Hs=p(),Ht=n("li"),no=n("a"),Qs=r("bloom-1b7"),Us=p(),Qt=n("li"),so=n("a"),Vs=r("bloom-3b"),Rs=p(),Ut=n("li"),ao=n("a"),Gs=r("bloom-7b1"),Ys=p(),rt=n("li"),ro=n("a"),Js=r("bloom"),Ks=r(" (176B parameters)"),Dn=p(),ie=n("h2"),Be=n("a"),Vt=n("span"),k(lo.$$.fragment),Xs=p(),Rt=n("span"),Zs=r("Resources"),Wn=p(),lt=n("p"),ea=r("A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with BLOOM. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),Hn=p(),k(io.$$.fragment),Qn=p(),it=n("ul"),Y=n("li"),dt=n("a"),oa=r("BloomForCausalLM"),ta=r(" is supported by this "),co=n("a"),na=r("causal language modeling example script"),sa=r(" and "),mo=n("a"),aa=r("notebook"),ra=r("."),Un=p(),ct=n("p"),la=r("\u26A1\uFE0F Inference"),Vn=p(),Fe=n("ul"),po=n("li"),ia=r("A blog on "),ho=n("a"),da=r("Optimization story: Bloom inference"),ca=r("."),ma=p(),uo=n("li"),pa=r("A blog on "),fo=n("a"),ha=r("Incredibly Fast BLOOM Inference with DeepSpeed and Accelerate"),ua=r("."),Rn=p(),mt=n("p"),fa=r("\u2699\uFE0F Training"),Gn=p(),pt=n("ul"),go=n("li"),ga=r("A blog on "),_o=n("a"),_a=r("The Technology Behind BLOOM Training"),ba=r("."),Yn=p(),de=n("h2"),Ce=n("a"),Gt=n("span"),k(bo.$$.fragment),va=p(),Yt=n("span"),ka=r("BloomConfig"),Jn=p(),W=n("div"),k(vo.$$.fragment),ya=p(),ce=n("p"),wa=r("This is the configuration class to store the configuration of a "),ht=n("a"),$a=r("BloomModel"),Ta=r(`. It is used to instantiate a Bloom
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
`),ko=n("a"),Ba=r("bigscience/bloom"),Fa=r("."),Ca=p(),me=n("p"),za=r("Configuration objects inherit from "),ut=n("a"),Ea=r("PretrainedConfig"),Ma=r(` and can be used to control the model outputs. Read the
documentation from `),ft=n("a"),xa=r("PretrainedConfig"),qa=r(" for more information."),Pa=p(),k(ze.$$.fragment),Kn=p(),pe=n("h2"),Ee=n("a"),Jt=n("span"),k(yo.$$.fragment),ja=p(),Kt=n("span"),Aa=r("BloomModel"),Xn=p(),q=n("div"),k(wo.$$.fragment),Oa=p(),Xt=n("p"),La=r("The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),Sa=p(),$o=n("p"),Na=r("This model inherits from "),gt=n("a"),Ia=r("PreTrainedModel"),Da=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Wa=p(),To=n("p"),Ha=r("This model is also a PyTorch "),Bo=n("a"),Qa=r("torch.nn.Module"),Ua=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Va=p(),U=n("div"),k(Fo.$$.fragment),Ra=p(),he=n("p"),Ga=r("The "),_t=n("a"),Ya=r("BloomModel"),Ja=r(" forward method, overrides the "),Zt=n("code"),Ka=r("__call__"),Xa=r(" special method."),Za=p(),k(Me.$$.fragment),er=p(),k(xe.$$.fragment),Zn=p(),ue=n("h2"),qe=n("a"),en=n("span"),k(Co.$$.fragment),or=p(),on=n("span"),tr=r("BloomTokenizerFast"),es=p(),z=n("div"),k(zo.$$.fragment),nr=p(),Eo=n("p"),sr=r("Construct a \u201Cfast\u201D Bloom tokenizer (backed by HuggingFace\u2019s "),tn=n("em"),ar=r("tokenizers"),rr=r(` library). Based on byte-level
Byte-Pair-Encoding.`),lr=p(),nn=n("p"),ir=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),dr=p(),k(Pe.$$.fragment),cr=p(),Mo=n("p"),mr=r("You can get around that behavior by passing "),sn=n("code"),pr=r("add_prefix_space=True"),hr=r(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),ur=p(),k(je.$$.fragment),fr=p(),xo=n("p"),gr=r("This tokenizer inherits from "),bt=n("a"),_r=r("PreTrainedTokenizerFast"),br=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),os=p(),fe=n("h2"),Ae=n("a"),an=n("span"),k(qo.$$.fragment),vr=p(),rn=n("span"),kr=r("BloomForCausalLM"),ts=p(),P=n("div"),k(Po.$$.fragment),yr=p(),ln=n("p"),wr=r(`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),$r=p(),jo=n("p"),Tr=r("This model inherits from "),vt=n("a"),Br=r("PreTrainedModel"),Fr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Cr=p(),Ao=n("p"),zr=r("This model is also a PyTorch "),Oo=n("a"),Er=r("torch.nn.Module"),Mr=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xr=p(),V=n("div"),k(Lo.$$.fragment),qr=p(),ge=n("p"),Pr=r("The "),kt=n("a"),jr=r("BloomForCausalLM"),Ar=r(" forward method, overrides the "),dn=n("code"),Or=r("__call__"),Lr=r(" special method."),Sr=p(),k(Oe.$$.fragment),Nr=p(),k(Le.$$.fragment),ns=p(),_e=n("h2"),Se=n("a"),cn=n("span"),k(So.$$.fragment),Ir=p(),mn=n("span"),Dr=r("BloomForSequenceClassification"),ss=p(),E=n("div"),k(No.$$.fragment),Wr=p(),pn=n("p"),Hr=r("The Bloom Model transformer with a sequence classification head on top (linear layer)."),Qr=p(),yt=n("p"),wt=n("a"),Ur=r("BloomForSequenceClassification"),Vr=r(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),Rr=p(),H=n("p"),Gr=r(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),hn=n("code"),Yr=r("pad_token_id"),Jr=r(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),un=n("code"),Kr=r("pad_token_id"),Xr=r(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),fn=n("code"),Zr=r("inputs_embeds"),el=r(" are passed instead of "),gn=n("code"),ol=r("input_ids"),tl=r(`, it does the same (take the last value in
each row of the batch).`),nl=p(),Io=n("p"),sl=r("This model inherits from "),$t=n("a"),al=r("PreTrainedModel"),rl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),ll=p(),Do=n("p"),il=r("This model is also a PyTorch "),Wo=n("a"),dl=r("torch.nn.Module"),cl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ml=p(),M=n("div"),k(Ho.$$.fragment),pl=p(),be=n("p"),hl=r("The "),Tt=n("a"),ul=r("BloomForSequenceClassification"),fl=r(" forward method, overrides the "),_n=n("code"),gl=r("__call__"),_l=r(" special method."),bl=p(),k(Ne.$$.fragment),vl=p(),k(Ie.$$.fragment),kl=p(),k(De.$$.fragment),yl=p(),k(We.$$.fragment),wl=p(),k(He.$$.fragment),as=p(),ve=n("h2"),Qe=n("a"),bn=n("span"),k(Qo.$$.fragment),$l=p(),vn=n("span"),Tl=r("BloomForTokenClassification"),rs=p(),j=n("div"),k(Uo.$$.fragment),Bl=p(),kn=n("p"),Fl=r(`Bloom Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Cl=p(),Vo=n("p"),zl=r("This model inherits from "),Bt=n("a"),El=r("PreTrainedModel"),Ml=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),xl=p(),Ro=n("p"),ql=r("This model is also a PyTorch "),Go=n("a"),Pl=r("torch.nn.Module"),jl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Al=p(),L=n("div"),k(Yo.$$.fragment),Ol=p(),ke=n("p"),Ll=r("The "),Ft=n("a"),Sl=r("BloomForTokenClassification"),Nl=r(" forward method, overrides the "),yn=n("code"),Il=r("__call__"),Dl=r(" special method."),Wl=p(),k(Ue.$$.fragment),Hl=p(),k(Ve.$$.fragment),Ql=p(),k(Re.$$.fragment),ls=p(),ye=n("h2"),Ge=n("a"),wn=n("span"),k(Jo.$$.fragment),Ul=p(),$n=n("span"),Vl=r("BloomForQuestionAnswering"),is=p(),A=n("div"),k(Ko.$$.fragment),Rl=p(),we=n("p"),Gl=r(`The BLOOM Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Tn=n("code"),Yl=r("span start logits"),Jl=r(" and "),Bn=n("code"),Kl=r("span end logits"),Xl=r(")."),Zl=p(),Xo=n("p"),ei=r("This model inherits from "),Ct=n("a"),oi=r("PreTrainedModel"),ti=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),ni=p(),Zo=n("p"),si=r("This model is also a PyTorch "),et=n("a"),ai=r("torch.nn.Module"),ri=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),li=p(),J=n("div"),k(ot.$$.fragment),ii=p(),$e=n("p"),di=r("The "),zt=n("a"),ci=r("BloomForQuestionAnswering"),mi=r(" forward method, overrides the "),Fn=n("code"),pi=r("__call__"),hi=r(" special method."),ui=p(),k(Ye.$$.fragment),this.h()},l(o){const g=Vd('[data-svelte="svelte-1phssyn"]',document.head);d=s(g,"META",{name:!0,content:!0}),g.forEach(t),_=h(o),c=s(o,"H1",{class:!0});var tt=a(c);u=s(tt,"A",{id:!0,class:!0,href:!0});var Cn=a(u);v=s(Cn,"SPAN",{});var zn=a(v);y(i.$$.fragment,zn),zn.forEach(t),Cn.forEach(t),f=h(tt),C=s(tt,"SPAN",{});var En=a(C);le=l(En,"BLOOM"),En.forEach(t),tt.forEach(t),D=h(o),Q=s(o,"H2",{class:!0});var nt=a(Q);G=s(nt,"A",{id:!0,class:!0,href:!0});var Mn=a(G);Nt=s(Mn,"SPAN",{});var xn=a(Nt);y(Ze.$$.fragment,xn),xn.forEach(t),Mn.forEach(t),As=h(nt),It=s(nt,"SPAN",{});var qn=a(It);Os=l(qn,"Overview"),qn.forEach(t),nt.forEach(t),Nn=h(o),Te=s(o,"P",{});var st=a(Te);Ls=l(st,"The BLOOM model has been proposed with its various versions through the "),eo=s(st,"A",{href:!0,rel:!0});var Pn=a(eo);Ss=l(Pn,"BigScience Workshop"),Pn.forEach(t),Ns=l(st,`. BigScience is inspired by other open science initiatives where researchers have pooled their time and resources to collectively achieve a higher impact.
The architecture of BLOOM is essentially similar to GPT3 (auto-regressive model for next token prediction), but has been trained on 46 different languages and 13 programming languages.
Several smaller versions of the models have been trained on the same dataset. BLOOM is available in the following versions:`),st.forEach(t),In=h(o),x=s(o,"UL",{});var O=a(x);Dt=s(O,"LI",{});var jn=a(Dt);oo=s(jn,"A",{href:!0,rel:!0});var An=a(oo);Is=l(An,"bloom-560m"),An.forEach(t),jn.forEach(t),Ds=h(O),Wt=s(O,"LI",{});var On=a(Wt);to=s(On,"A",{href:!0,rel:!0});var Ln=a(to);Ws=l(Ln,"bloom-1b1"),Ln.forEach(t),On.forEach(t),Hs=h(O),Ht=s(O,"LI",{});var Sn=a(Ht);no=s(Sn,"A",{href:!0,rel:!0});var _i=a(no);Qs=l(_i,"bloom-1b7"),_i.forEach(t),Sn.forEach(t),Us=h(O),Qt=s(O,"LI",{});var bi=a(Qt);so=s(bi,"A",{href:!0,rel:!0});var vi=a(so);Vs=l(vi,"bloom-3b"),vi.forEach(t),bi.forEach(t),Rs=h(O),Ut=s(O,"LI",{});var ki=a(Ut);ao=s(ki,"A",{href:!0,rel:!0});var yi=a(ao);Gs=l(yi,"bloom-7b1"),yi.forEach(t),ki.forEach(t),Ys=h(O),rt=s(O,"LI",{});var fi=a(rt);ro=s(fi,"A",{href:!0,rel:!0});var wi=a(ro);Js=l(wi,"bloom"),wi.forEach(t),Ks=l(fi," (176B parameters)"),fi.forEach(t),O.forEach(t),Dn=h(o),ie=s(o,"H2",{class:!0});var cs=a(ie);Be=s(cs,"A",{id:!0,class:!0,href:!0});var $i=a(Be);Vt=s($i,"SPAN",{});var Ti=a(Vt);y(lo.$$.fragment,Ti),Ti.forEach(t),$i.forEach(t),Xs=h(cs),Rt=s(cs,"SPAN",{});var Bi=a(Rt);Zs=l(Bi,"Resources"),Bi.forEach(t),cs.forEach(t),Wn=h(o),lt=s(o,"P",{});var Fi=a(lt);ea=l(Fi,"A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with BLOOM. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),Fi.forEach(t),Hn=h(o),y(io.$$.fragment,o),Qn=h(o),it=s(o,"UL",{});var Ci=a(it);Y=s(Ci,"LI",{});var at=a(Y);dt=s(at,"A",{href:!0});var zi=a(dt);oa=l(zi,"BloomForCausalLM"),zi.forEach(t),ta=l(at," is supported by this "),co=s(at,"A",{href:!0,rel:!0});var Ei=a(co);na=l(Ei,"causal language modeling example script"),Ei.forEach(t),sa=l(at," and "),mo=s(at,"A",{href:!0,rel:!0});var Mi=a(mo);aa=l(Mi,"notebook"),Mi.forEach(t),ra=l(at,"."),at.forEach(t),Ci.forEach(t),Un=h(o),ct=s(o,"P",{});var xi=a(ct);la=l(xi,"\u26A1\uFE0F Inference"),xi.forEach(t),Vn=h(o),Fe=s(o,"UL",{});var ms=a(Fe);po=s(ms,"LI",{});var ps=a(po);ia=l(ps,"A blog on "),ho=s(ps,"A",{href:!0,rel:!0});var qi=a(ho);da=l(qi,"Optimization story: Bloom inference"),qi.forEach(t),ca=l(ps,"."),ps.forEach(t),ma=h(ms),uo=s(ms,"LI",{});var hs=a(uo);pa=l(hs,"A blog on "),fo=s(hs,"A",{href:!0,rel:!0});var Pi=a(fo);ha=l(Pi,"Incredibly Fast BLOOM Inference with DeepSpeed and Accelerate"),Pi.forEach(t),ua=l(hs,"."),hs.forEach(t),ms.forEach(t),Rn=h(o),mt=s(o,"P",{});var ji=a(mt);fa=l(ji,"\u2699\uFE0F Training"),ji.forEach(t),Gn=h(o),pt=s(o,"UL",{});var Ai=a(pt);go=s(Ai,"LI",{});var us=a(go);ga=l(us,"A blog on "),_o=s(us,"A",{href:!0,rel:!0});var Oi=a(_o);_a=l(Oi,"The Technology Behind BLOOM Training"),Oi.forEach(t),ba=l(us,"."),us.forEach(t),Ai.forEach(t),Yn=h(o),de=s(o,"H2",{class:!0});var fs=a(de);Ce=s(fs,"A",{id:!0,class:!0,href:!0});var Li=a(Ce);Gt=s(Li,"SPAN",{});var Si=a(Gt);y(bo.$$.fragment,Si),Si.forEach(t),Li.forEach(t),va=h(fs),Yt=s(fs,"SPAN",{});var Ni=a(Yt);ka=l(Ni,"BloomConfig"),Ni.forEach(t),fs.forEach(t),Jn=h(o),W=s(o,"DIV",{class:!0});var Je=a(W);y(vo.$$.fragment,Je),ya=h(Je),ce=s(Je,"P",{});var Et=a(ce);wa=l(Et,"This is the configuration class to store the configuration of a "),ht=s(Et,"A",{href:!0});var Ii=a(ht);$a=l(Ii,"BloomModel"),Ii.forEach(t),Ta=l(Et,`. It is used to instantiate a Bloom
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
`),ko=s(Et,"A",{href:!0,rel:!0});var Di=a(ko);Ba=l(Di,"bigscience/bloom"),Di.forEach(t),Fa=l(Et,"."),Et.forEach(t),Ca=h(Je),me=s(Je,"P",{});var Mt=a(me);za=l(Mt,"Configuration objects inherit from "),ut=s(Mt,"A",{href:!0});var Wi=a(ut);Ea=l(Wi,"PretrainedConfig"),Wi.forEach(t),Ma=l(Mt,` and can be used to control the model outputs. Read the
documentation from `),ft=s(Mt,"A",{href:!0});var Hi=a(ft);xa=l(Hi,"PretrainedConfig"),Hi.forEach(t),qa=l(Mt," for more information."),Mt.forEach(t),Pa=h(Je),y(ze.$$.fragment,Je),Je.forEach(t),Kn=h(o),pe=s(o,"H2",{class:!0});var gs=a(pe);Ee=s(gs,"A",{id:!0,class:!0,href:!0});var Qi=a(Ee);Jt=s(Qi,"SPAN",{});var Ui=a(Jt);y(yo.$$.fragment,Ui),Ui.forEach(t),Qi.forEach(t),ja=h(gs),Kt=s(gs,"SPAN",{});var Vi=a(Kt);Aa=l(Vi,"BloomModel"),Vi.forEach(t),gs.forEach(t),Xn=h(o),q=s(o,"DIV",{class:!0});var K=a(q);y(wo.$$.fragment,K),Oa=h(K),Xt=s(K,"P",{});var Ri=a(Xt);La=l(Ri,"The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),Ri.forEach(t),Sa=h(K),$o=s(K,"P",{});var _s=a($o);Na=l(_s,"This model inherits from "),gt=s(_s,"A",{href:!0});var Gi=a(gt);Ia=l(Gi,"PreTrainedModel"),Gi.forEach(t),Da=l(_s,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),_s.forEach(t),Wa=h(K),To=s(K,"P",{});var bs=a(To);Ha=l(bs,"This model is also a PyTorch "),Bo=s(bs,"A",{href:!0,rel:!0});var Yi=a(Bo);Qa=l(Yi,"torch.nn.Module"),Yi.forEach(t),Ua=l(bs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bs.forEach(t),Va=h(K),U=s(K,"DIV",{class:!0});var Ke=a(U);y(Fo.$$.fragment,Ke),Ra=h(Ke),he=s(Ke,"P",{});var xt=a(he);Ga=l(xt,"The "),_t=s(xt,"A",{href:!0});var Ji=a(_t);Ya=l(Ji,"BloomModel"),Ji.forEach(t),Ja=l(xt," forward method, overrides the "),Zt=s(xt,"CODE",{});var Ki=a(Zt);Ka=l(Ki,"__call__"),Ki.forEach(t),Xa=l(xt," special method."),xt.forEach(t),Za=h(Ke),y(Me.$$.fragment,Ke),er=h(Ke),y(xe.$$.fragment,Ke),Ke.forEach(t),K.forEach(t),Zn=h(o),ue=s(o,"H2",{class:!0});var vs=a(ue);qe=s(vs,"A",{id:!0,class:!0,href:!0});var Xi=a(qe);en=s(Xi,"SPAN",{});var Zi=a(en);y(Co.$$.fragment,Zi),Zi.forEach(t),Xi.forEach(t),or=h(vs),on=s(vs,"SPAN",{});var ed=a(on);tr=l(ed,"BloomTokenizerFast"),ed.forEach(t),vs.forEach(t),es=h(o),z=s(o,"DIV",{class:!0});var S=a(z);y(zo.$$.fragment,S),nr=h(S),Eo=s(S,"P",{});var ks=a(Eo);sr=l(ks,"Construct a \u201Cfast\u201D Bloom tokenizer (backed by HuggingFace\u2019s "),tn=s(ks,"EM",{});var od=a(tn);ar=l(od,"tokenizers"),od.forEach(t),rr=l(ks,` library). Based on byte-level
Byte-Pair-Encoding.`),ks.forEach(t),lr=h(S),nn=s(S,"P",{});var td=a(nn);ir=l(td,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),td.forEach(t),dr=h(S),y(Pe.$$.fragment,S),cr=h(S),Mo=s(S,"P",{});var ys=a(Mo);mr=l(ys,"You can get around that behavior by passing "),sn=s(ys,"CODE",{});var nd=a(sn);pr=l(nd,"add_prefix_space=True"),nd.forEach(t),hr=l(ys,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),ys.forEach(t),ur=h(S),y(je.$$.fragment,S),fr=h(S),xo=s(S,"P",{});var ws=a(xo);gr=l(ws,"This tokenizer inherits from "),bt=s(ws,"A",{href:!0});var sd=a(bt);_r=l(sd,"PreTrainedTokenizerFast"),sd.forEach(t),br=l(ws,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ws.forEach(t),S.forEach(t),os=h(o),fe=s(o,"H2",{class:!0});var $s=a(fe);Ae=s($s,"A",{id:!0,class:!0,href:!0});var ad=a(Ae);an=s(ad,"SPAN",{});var rd=a(an);y(qo.$$.fragment,rd),rd.forEach(t),ad.forEach(t),vr=h($s),rn=s($s,"SPAN",{});var ld=a(rn);kr=l(ld,"BloomForCausalLM"),ld.forEach(t),$s.forEach(t),ts=h(o),P=s(o,"DIV",{class:!0});var X=a(P);y(Po.$$.fragment,X),yr=h(X),ln=s(X,"P",{});var id=a(ln);wr=l(id,`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),id.forEach(t),$r=h(X),jo=s(X,"P",{});var Ts=a(jo);Tr=l(Ts,"This model inherits from "),vt=s(Ts,"A",{href:!0});var dd=a(vt);Br=l(dd,"PreTrainedModel"),dd.forEach(t),Fr=l(Ts,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Ts.forEach(t),Cr=h(X),Ao=s(X,"P",{});var Bs=a(Ao);zr=l(Bs,"This model is also a PyTorch "),Oo=s(Bs,"A",{href:!0,rel:!0});var cd=a(Oo);Er=l(cd,"torch.nn.Module"),cd.forEach(t),Mr=l(Bs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bs.forEach(t),xr=h(X),V=s(X,"DIV",{class:!0});var Xe=a(V);y(Lo.$$.fragment,Xe),qr=h(Xe),ge=s(Xe,"P",{});var qt=a(ge);Pr=l(qt,"The "),kt=s(qt,"A",{href:!0});var md=a(kt);jr=l(md,"BloomForCausalLM"),md.forEach(t),Ar=l(qt," forward method, overrides the "),dn=s(qt,"CODE",{});var pd=a(dn);Or=l(pd,"__call__"),pd.forEach(t),Lr=l(qt," special method."),qt.forEach(t),Sr=h(Xe),y(Oe.$$.fragment,Xe),Nr=h(Xe),y(Le.$$.fragment,Xe),Xe.forEach(t),X.forEach(t),ns=h(o),_e=s(o,"H2",{class:!0});var Fs=a(_e);Se=s(Fs,"A",{id:!0,class:!0,href:!0});var hd=a(Se);cn=s(hd,"SPAN",{});var ud=a(cn);y(So.$$.fragment,ud),ud.forEach(t),hd.forEach(t),Ir=h(Fs),mn=s(Fs,"SPAN",{});var fd=a(mn);Dr=l(fd,"BloomForSequenceClassification"),fd.forEach(t),Fs.forEach(t),ss=h(o),E=s(o,"DIV",{class:!0});var N=a(E);y(No.$$.fragment,N),Wr=h(N),pn=s(N,"P",{});var gd=a(pn);Hr=l(gd,"The Bloom Model transformer with a sequence classification head on top (linear layer)."),gd.forEach(t),Qr=h(N),yt=s(N,"P",{});var gi=a(yt);wt=s(gi,"A",{href:!0});var _d=a(wt);Ur=l(_d,"BloomForSequenceClassification"),_d.forEach(t),Vr=l(gi,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),gi.forEach(t),Rr=h(N),H=s(N,"P",{});var Z=a(H);Gr=l(Z,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),hn=s(Z,"CODE",{});var bd=a(hn);Yr=l(bd,"pad_token_id"),bd.forEach(t),Jr=l(Z,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),un=s(Z,"CODE",{});var vd=a(un);Kr=l(vd,"pad_token_id"),vd.forEach(t),Xr=l(Z,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),fn=s(Z,"CODE",{});var kd=a(fn);Zr=l(kd,"inputs_embeds"),kd.forEach(t),el=l(Z," are passed instead of "),gn=s(Z,"CODE",{});var yd=a(gn);ol=l(yd,"input_ids"),yd.forEach(t),tl=l(Z,`, it does the same (take the last value in
each row of the batch).`),Z.forEach(t),nl=h(N),Io=s(N,"P",{});var Cs=a(Io);sl=l(Cs,"This model inherits from "),$t=s(Cs,"A",{href:!0});var wd=a($t);al=l(wd,"PreTrainedModel"),wd.forEach(t),rl=l(Cs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Cs.forEach(t),ll=h(N),Do=s(N,"P",{});var zs=a(Do);il=l(zs,"This model is also a PyTorch "),Wo=s(zs,"A",{href:!0,rel:!0});var $d=a(Wo);dl=l($d,"torch.nn.Module"),$d.forEach(t),cl=l(zs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zs.forEach(t),ml=h(N),M=s(N,"DIV",{class:!0});var I=a(M);y(Ho.$$.fragment,I),pl=h(I),be=s(I,"P",{});var Pt=a(be);hl=l(Pt,"The "),Tt=s(Pt,"A",{href:!0});var Td=a(Tt);ul=l(Td,"BloomForSequenceClassification"),Td.forEach(t),fl=l(Pt," forward method, overrides the "),_n=s(Pt,"CODE",{});var Bd=a(_n);gl=l(Bd,"__call__"),Bd.forEach(t),_l=l(Pt," special method."),Pt.forEach(t),bl=h(I),y(Ne.$$.fragment,I),vl=h(I),y(Ie.$$.fragment,I),kl=h(I),y(De.$$.fragment,I),yl=h(I),y(We.$$.fragment,I),wl=h(I),y(He.$$.fragment,I),I.forEach(t),N.forEach(t),as=h(o),ve=s(o,"H2",{class:!0});var Es=a(ve);Qe=s(Es,"A",{id:!0,class:!0,href:!0});var Fd=a(Qe);bn=s(Fd,"SPAN",{});var Cd=a(bn);y(Qo.$$.fragment,Cd),Cd.forEach(t),Fd.forEach(t),$l=h(Es),vn=s(Es,"SPAN",{});var zd=a(vn);Tl=l(zd,"BloomForTokenClassification"),zd.forEach(t),Es.forEach(t),rs=h(o),j=s(o,"DIV",{class:!0});var ee=a(j);y(Uo.$$.fragment,ee),Bl=h(ee),kn=s(ee,"P",{});var Ed=a(kn);Fl=l(Ed,`Bloom Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ed.forEach(t),Cl=h(ee),Vo=s(ee,"P",{});var Ms=a(Vo);zl=l(Ms,"This model inherits from "),Bt=s(Ms,"A",{href:!0});var Md=a(Bt);El=l(Md,"PreTrainedModel"),Md.forEach(t),Ml=l(Ms,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Ms.forEach(t),xl=h(ee),Ro=s(ee,"P",{});var xs=a(Ro);ql=l(xs,"This model is also a PyTorch "),Go=s(xs,"A",{href:!0,rel:!0});var xd=a(Go);Pl=l(xd,"torch.nn.Module"),xd.forEach(t),jl=l(xs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xs.forEach(t),Al=h(ee),L=s(ee,"DIV",{class:!0});var oe=a(L);y(Yo.$$.fragment,oe),Ol=h(oe),ke=s(oe,"P",{});var jt=a(ke);Ll=l(jt,"The "),Ft=s(jt,"A",{href:!0});var qd=a(Ft);Sl=l(qd,"BloomForTokenClassification"),qd.forEach(t),Nl=l(jt," forward method, overrides the "),yn=s(jt,"CODE",{});var Pd=a(yn);Il=l(Pd,"__call__"),Pd.forEach(t),Dl=l(jt," special method."),jt.forEach(t),Wl=h(oe),y(Ue.$$.fragment,oe),Hl=h(oe),y(Ve.$$.fragment,oe),Ql=h(oe),y(Re.$$.fragment,oe),oe.forEach(t),ee.forEach(t),ls=h(o),ye=s(o,"H2",{class:!0});var qs=a(ye);Ge=s(qs,"A",{id:!0,class:!0,href:!0});var jd=a(Ge);wn=s(jd,"SPAN",{});var Ad=a(wn);y(Jo.$$.fragment,Ad),Ad.forEach(t),jd.forEach(t),Ul=h(qs),$n=s(qs,"SPAN",{});var Od=a($n);Vl=l(Od,"BloomForQuestionAnswering"),Od.forEach(t),qs.forEach(t),is=h(o),A=s(o,"DIV",{class:!0});var te=a(A);y(Ko.$$.fragment,te),Rl=h(te),we=s(te,"P",{});var At=a(we);Gl=l(At,`The BLOOM Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Tn=s(At,"CODE",{});var Ld=a(Tn);Yl=l(Ld,"span start logits"),Ld.forEach(t),Jl=l(At," and "),Bn=s(At,"CODE",{});var Sd=a(Bn);Kl=l(Sd,"span end logits"),Sd.forEach(t),Xl=l(At,")."),At.forEach(t),Zl=h(te),Xo=s(te,"P",{});var Ps=a(Xo);ei=l(Ps,"This model inherits from "),Ct=s(Ps,"A",{href:!0});var Nd=a(Ct);oi=l(Nd,"PreTrainedModel"),Nd.forEach(t),ti=l(Ps,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Ps.forEach(t),ni=h(te),Zo=s(te,"P",{});var js=a(Zo);si=l(js,"This model is also a PyTorch "),et=s(js,"A",{href:!0,rel:!0});var Id=a(et);ai=l(Id,"torch.nn.Module"),Id.forEach(t),ri=l(js,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),js.forEach(t),li=h(te),J=s(te,"DIV",{class:!0});var Ot=a(J);y(ot.$$.fragment,Ot),ii=h(Ot),$e=s(Ot,"P",{});var Lt=a($e);di=l(Lt,"The "),zt=s(Lt,"A",{href:!0});var Dd=a(zt);ci=l(Dd,"BloomForQuestionAnswering"),Dd.forEach(t),mi=l(Lt," forward method, overrides the "),Fn=s(Lt,"CODE",{});var Wd=a(Fn);pi=l(Wd,"__call__"),Wd.forEach(t),hi=l(Lt," special method."),Lt.forEach(t),ui=h(Ot),y(Ye.$$.fragment,Ot),Ot.forEach(t),te.forEach(t),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(pc)),m(u,"id","bloom"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#bloom"),m(c,"class","relative group"),m(G,"id","overview"),m(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(G,"href","#overview"),m(Q,"class","relative group"),m(eo,"href","https://bigscience.huggingface.co/"),m(eo,"rel","nofollow"),m(oo,"href","https://huggingface.co/bigscience/bloom-560m"),m(oo,"rel","nofollow"),m(to,"href","https://huggingface.co/bigscience/bloom-1b1"),m(to,"rel","nofollow"),m(no,"href","https://huggingface.co/bigscience/bloom-1b7"),m(no,"rel","nofollow"),m(so,"href","https://huggingface.co/bigscience/bloom-3b"),m(so,"rel","nofollow"),m(ao,"href","https://huggingface.co/bigscience/bloom-7b1"),m(ao,"rel","nofollow"),m(ro,"href","https://huggingface.co/bigscience/bloom"),m(ro,"rel","nofollow"),m(Be,"id","resources"),m(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Be,"href","#resources"),m(ie,"class","relative group"),m(dt,"href","/docs/transformers/main/en/model_doc/bloom#transformers.BloomForCausalLM"),m(co,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling#gpt-2gpt-and-causal-language-modeling"),m(co,"rel","nofollow"),m(mo,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling.ipynb"),m(mo,"rel","nofollow"),m(ho,"href","https://huggingface.co/blog/bloom-inference-optimization"),m(ho,"rel","nofollow"),m(fo,"href","https://huggingface.co/blog/bloom-inference-pytorch-scripts"),m(fo,"rel","nofollow"),m(_o,"href","https://huggingface.co/blog/bloom-megatron-deepspeed"),m(_o,"rel","nofollow"),m(Ce,"id","transformers.BloomConfig"),m(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ce,"href","#transformers.BloomConfig"),m(de,"class","relative group"),m(ht,"href","/docs/transformers/main/en/model_doc/bloom#transformers.BloomModel"),m(ko,"href","https://huggingface.co/bigscience/bloom"),m(ko,"rel","nofollow"),m(ut,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(ft,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ee,"id","transformers.BloomModel"),m(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ee,"href","#transformers.BloomModel"),m(pe,"class","relative group"),m(gt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Bo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Bo,"rel","nofollow"),m(_t,"href","/docs/transformers/main/en/model_doc/bloom#transformers.BloomModel"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qe,"id","transformers.BloomTokenizerFast"),m(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qe,"href","#transformers.BloomTokenizerFast"),m(ue,"class","relative group"),m(bt,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ae,"id","transformers.BloomForCausalLM"),m(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ae,"href","#transformers.BloomForCausalLM"),m(fe,"class","relative group"),m(vt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Oo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Oo,"rel","nofollow"),m(kt,"href","/docs/transformers/main/en/model_doc/bloom#transformers.BloomForCausalLM"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Se,"id","transformers.BloomForSequenceClassification"),m(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Se,"href","#transformers.BloomForSequenceClassification"),m(_e,"class","relative group"),m(wt,"href","/docs/transformers/main/en/model_doc/bloom#transformers.BloomForSequenceClassification"),m($t,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Wo,"rel","nofollow"),m(Tt,"href","/docs/transformers/main/en/model_doc/bloom#transformers.BloomForSequenceClassification"),m(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qe,"id","transformers.BloomForTokenClassification"),m(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qe,"href","#transformers.BloomForTokenClassification"),m(ve,"class","relative group"),m(Bt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Go,"rel","nofollow"),m(Ft,"href","/docs/transformers/main/en/model_doc/bloom#transformers.BloomForTokenClassification"),m(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ge,"id","transformers.BloomForQuestionAnswering"),m(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ge,"href","#transformers.BloomForQuestionAnswering"),m(ye,"class","relative group"),m(Ct,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(et,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(et,"rel","nofollow"),m(zt,"href","/docs/transformers/main/en/model_doc/bloom#transformers.BloomForQuestionAnswering"),m(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),b(o,_,g),b(o,c,g),e(c,u),e(u,v),w(i,v,null),e(c,f),e(c,C),e(C,le),b(o,D,g),b(o,Q,g),e(Q,G),e(G,Nt),w(Ze,Nt,null),e(Q,As),e(Q,It),e(It,Os),b(o,Nn,g),b(o,Te,g),e(Te,Ls),e(Te,eo),e(eo,Ss),e(Te,Ns),b(o,In,g),b(o,x,g),e(x,Dt),e(Dt,oo),e(oo,Is),e(x,Ds),e(x,Wt),e(Wt,to),e(to,Ws),e(x,Hs),e(x,Ht),e(Ht,no),e(no,Qs),e(x,Us),e(x,Qt),e(Qt,so),e(so,Vs),e(x,Rs),e(x,Ut),e(Ut,ao),e(ao,Gs),e(x,Ys),e(x,rt),e(rt,ro),e(ro,Js),e(rt,Ks),b(o,Dn,g),b(o,ie,g),e(ie,Be),e(Be,Vt),w(lo,Vt,null),e(ie,Xs),e(ie,Rt),e(Rt,Zs),b(o,Wn,g),b(o,lt,g),e(lt,ea),b(o,Hn,g),w(io,o,g),b(o,Qn,g),b(o,it,g),e(it,Y),e(Y,dt),e(dt,oa),e(Y,ta),e(Y,co),e(co,na),e(Y,sa),e(Y,mo),e(mo,aa),e(Y,ra),b(o,Un,g),b(o,ct,g),e(ct,la),b(o,Vn,g),b(o,Fe,g),e(Fe,po),e(po,ia),e(po,ho),e(ho,da),e(po,ca),e(Fe,ma),e(Fe,uo),e(uo,pa),e(uo,fo),e(fo,ha),e(uo,ua),b(o,Rn,g),b(o,mt,g),e(mt,fa),b(o,Gn,g),b(o,pt,g),e(pt,go),e(go,ga),e(go,_o),e(_o,_a),e(go,ba),b(o,Yn,g),b(o,de,g),e(de,Ce),e(Ce,Gt),w(bo,Gt,null),e(de,va),e(de,Yt),e(Yt,ka),b(o,Jn,g),b(o,W,g),w(vo,W,null),e(W,ya),e(W,ce),e(ce,wa),e(ce,ht),e(ht,$a),e(ce,Ta),e(ce,ko),e(ko,Ba),e(ce,Fa),e(W,Ca),e(W,me),e(me,za),e(me,ut),e(ut,Ea),e(me,Ma),e(me,ft),e(ft,xa),e(me,qa),e(W,Pa),w(ze,W,null),b(o,Kn,g),b(o,pe,g),e(pe,Ee),e(Ee,Jt),w(yo,Jt,null),e(pe,ja),e(pe,Kt),e(Kt,Aa),b(o,Xn,g),b(o,q,g),w(wo,q,null),e(q,Oa),e(q,Xt),e(Xt,La),e(q,Sa),e(q,$o),e($o,Na),e($o,gt),e(gt,Ia),e($o,Da),e(q,Wa),e(q,To),e(To,Ha),e(To,Bo),e(Bo,Qa),e(To,Ua),e(q,Va),e(q,U),w(Fo,U,null),e(U,Ra),e(U,he),e(he,Ga),e(he,_t),e(_t,Ya),e(he,Ja),e(he,Zt),e(Zt,Ka),e(he,Xa),e(U,Za),w(Me,U,null),e(U,er),w(xe,U,null),b(o,Zn,g),b(o,ue,g),e(ue,qe),e(qe,en),w(Co,en,null),e(ue,or),e(ue,on),e(on,tr),b(o,es,g),b(o,z,g),w(zo,z,null),e(z,nr),e(z,Eo),e(Eo,sr),e(Eo,tn),e(tn,ar),e(Eo,rr),e(z,lr),e(z,nn),e(nn,ir),e(z,dr),w(Pe,z,null),e(z,cr),e(z,Mo),e(Mo,mr),e(Mo,sn),e(sn,pr),e(Mo,hr),e(z,ur),w(je,z,null),e(z,fr),e(z,xo),e(xo,gr),e(xo,bt),e(bt,_r),e(xo,br),b(o,os,g),b(o,fe,g),e(fe,Ae),e(Ae,an),w(qo,an,null),e(fe,vr),e(fe,rn),e(rn,kr),b(o,ts,g),b(o,P,g),w(Po,P,null),e(P,yr),e(P,ln),e(ln,wr),e(P,$r),e(P,jo),e(jo,Tr),e(jo,vt),e(vt,Br),e(jo,Fr),e(P,Cr),e(P,Ao),e(Ao,zr),e(Ao,Oo),e(Oo,Er),e(Ao,Mr),e(P,xr),e(P,V),w(Lo,V,null),e(V,qr),e(V,ge),e(ge,Pr),e(ge,kt),e(kt,jr),e(ge,Ar),e(ge,dn),e(dn,Or),e(ge,Lr),e(V,Sr),w(Oe,V,null),e(V,Nr),w(Le,V,null),b(o,ns,g),b(o,_e,g),e(_e,Se),e(Se,cn),w(So,cn,null),e(_e,Ir),e(_e,mn),e(mn,Dr),b(o,ss,g),b(o,E,g),w(No,E,null),e(E,Wr),e(E,pn),e(pn,Hr),e(E,Qr),e(E,yt),e(yt,wt),e(wt,Ur),e(yt,Vr),e(E,Rr),e(E,H),e(H,Gr),e(H,hn),e(hn,Yr),e(H,Jr),e(H,un),e(un,Kr),e(H,Xr),e(H,fn),e(fn,Zr),e(H,el),e(H,gn),e(gn,ol),e(H,tl),e(E,nl),e(E,Io),e(Io,sl),e(Io,$t),e($t,al),e(Io,rl),e(E,ll),e(E,Do),e(Do,il),e(Do,Wo),e(Wo,dl),e(Do,cl),e(E,ml),e(E,M),w(Ho,M,null),e(M,pl),e(M,be),e(be,hl),e(be,Tt),e(Tt,ul),e(be,fl),e(be,_n),e(_n,gl),e(be,_l),e(M,bl),w(Ne,M,null),e(M,vl),w(Ie,M,null),e(M,kl),w(De,M,null),e(M,yl),w(We,M,null),e(M,wl),w(He,M,null),b(o,as,g),b(o,ve,g),e(ve,Qe),e(Qe,bn),w(Qo,bn,null),e(ve,$l),e(ve,vn),e(vn,Tl),b(o,rs,g),b(o,j,g),w(Uo,j,null),e(j,Bl),e(j,kn),e(kn,Fl),e(j,Cl),e(j,Vo),e(Vo,zl),e(Vo,Bt),e(Bt,El),e(Vo,Ml),e(j,xl),e(j,Ro),e(Ro,ql),e(Ro,Go),e(Go,Pl),e(Ro,jl),e(j,Al),e(j,L),w(Yo,L,null),e(L,Ol),e(L,ke),e(ke,Ll),e(ke,Ft),e(Ft,Sl),e(ke,Nl),e(ke,yn),e(yn,Il),e(ke,Dl),e(L,Wl),w(Ue,L,null),e(L,Hl),w(Ve,L,null),e(L,Ql),w(Re,L,null),b(o,ls,g),b(o,ye,g),e(ye,Ge),e(Ge,wn),w(Jo,wn,null),e(ye,Ul),e(ye,$n),e($n,Vl),b(o,is,g),b(o,A,g),w(Ko,A,null),e(A,Rl),e(A,we),e(we,Gl),e(we,Tn),e(Tn,Yl),e(we,Jl),e(we,Bn),e(Bn,Kl),e(we,Xl),e(A,Zl),e(A,Xo),e(Xo,ei),e(Xo,Ct),e(Ct,oi),e(Xo,ti),e(A,ni),e(A,Zo),e(Zo,si),e(Zo,et),e(et,ai),e(Zo,ri),e(A,li),e(A,J),w(ot,J,null),e(J,ii),e(J,$e),e($e,di),e($e,zt),e(zt,ci),e($e,mi),e($e,Fn),e(Fn,pi),e($e,hi),e(J,ui),w(Ye,J,null),ds=!0},p(o,[g]){const tt={};g&2&&(tt.$$scope={dirty:g,ctx:o}),ze.$set(tt);const Cn={};g&2&&(Cn.$$scope={dirty:g,ctx:o}),Me.$set(Cn);const zn={};g&2&&(zn.$$scope={dirty:g,ctx:o}),xe.$set(zn);const En={};g&2&&(En.$$scope={dirty:g,ctx:o}),Pe.$set(En);const nt={};g&2&&(nt.$$scope={dirty:g,ctx:o}),je.$set(nt);const Mn={};g&2&&(Mn.$$scope={dirty:g,ctx:o}),Oe.$set(Mn);const xn={};g&2&&(xn.$$scope={dirty:g,ctx:o}),Le.$set(xn);const qn={};g&2&&(qn.$$scope={dirty:g,ctx:o}),Ne.$set(qn);const st={};g&2&&(st.$$scope={dirty:g,ctx:o}),Ie.$set(st);const Pn={};g&2&&(Pn.$$scope={dirty:g,ctx:o}),De.$set(Pn);const O={};g&2&&(O.$$scope={dirty:g,ctx:o}),We.$set(O);const jn={};g&2&&(jn.$$scope={dirty:g,ctx:o}),He.$set(jn);const An={};g&2&&(An.$$scope={dirty:g,ctx:o}),Ue.$set(An);const On={};g&2&&(On.$$scope={dirty:g,ctx:o}),Ve.$set(On);const Ln={};g&2&&(Ln.$$scope={dirty:g,ctx:o}),Re.$set(Ln);const Sn={};g&2&&(Sn.$$scope={dirty:g,ctx:o}),Ye.$set(Sn)},i(o){ds||($(i.$$.fragment,o),$(Ze.$$.fragment,o),$(lo.$$.fragment,o),$(io.$$.fragment,o),$(bo.$$.fragment,o),$(vo.$$.fragment,o),$(ze.$$.fragment,o),$(yo.$$.fragment,o),$(wo.$$.fragment,o),$(Fo.$$.fragment,o),$(Me.$$.fragment,o),$(xe.$$.fragment,o),$(Co.$$.fragment,o),$(zo.$$.fragment,o),$(Pe.$$.fragment,o),$(je.$$.fragment,o),$(qo.$$.fragment,o),$(Po.$$.fragment,o),$(Lo.$$.fragment,o),$(Oe.$$.fragment,o),$(Le.$$.fragment,o),$(So.$$.fragment,o),$(No.$$.fragment,o),$(Ho.$$.fragment,o),$(Ne.$$.fragment,o),$(Ie.$$.fragment,o),$(De.$$.fragment,o),$(We.$$.fragment,o),$(He.$$.fragment,o),$(Qo.$$.fragment,o),$(Uo.$$.fragment,o),$(Yo.$$.fragment,o),$(Ue.$$.fragment,o),$(Ve.$$.fragment,o),$(Re.$$.fragment,o),$(Jo.$$.fragment,o),$(Ko.$$.fragment,o),$(ot.$$.fragment,o),$(Ye.$$.fragment,o),ds=!0)},o(o){T(i.$$.fragment,o),T(Ze.$$.fragment,o),T(lo.$$.fragment,o),T(io.$$.fragment,o),T(bo.$$.fragment,o),T(vo.$$.fragment,o),T(ze.$$.fragment,o),T(yo.$$.fragment,o),T(wo.$$.fragment,o),T(Fo.$$.fragment,o),T(Me.$$.fragment,o),T(xe.$$.fragment,o),T(Co.$$.fragment,o),T(zo.$$.fragment,o),T(Pe.$$.fragment,o),T(je.$$.fragment,o),T(qo.$$.fragment,o),T(Po.$$.fragment,o),T(Lo.$$.fragment,o),T(Oe.$$.fragment,o),T(Le.$$.fragment,o),T(So.$$.fragment,o),T(No.$$.fragment,o),T(Ho.$$.fragment,o),T(Ne.$$.fragment,o),T(Ie.$$.fragment,o),T(De.$$.fragment,o),T(We.$$.fragment,o),T(He.$$.fragment,o),T(Qo.$$.fragment,o),T(Uo.$$.fragment,o),T(Yo.$$.fragment,o),T(Ue.$$.fragment,o),T(Ve.$$.fragment,o),T(Re.$$.fragment,o),T(Jo.$$.fragment,o),T(Ko.$$.fragment,o),T(ot.$$.fragment,o),T(Ye.$$.fragment,o),ds=!1},d(o){t(d),o&&t(_),o&&t(c),B(i),o&&t(D),o&&t(Q),B(Ze),o&&t(Nn),o&&t(Te),o&&t(In),o&&t(x),o&&t(Dn),o&&t(ie),B(lo),o&&t(Wn),o&&t(lt),o&&t(Hn),B(io,o),o&&t(Qn),o&&t(it),o&&t(Un),o&&t(ct),o&&t(Vn),o&&t(Fe),o&&t(Rn),o&&t(mt),o&&t(Gn),o&&t(pt),o&&t(Yn),o&&t(de),B(bo),o&&t(Jn),o&&t(W),B(vo),B(ze),o&&t(Kn),o&&t(pe),B(yo),o&&t(Xn),o&&t(q),B(wo),B(Fo),B(Me),B(xe),o&&t(Zn),o&&t(ue),B(Co),o&&t(es),o&&t(z),B(zo),B(Pe),B(je),o&&t(os),o&&t(fe),B(qo),o&&t(ts),o&&t(P),B(Po),B(Lo),B(Oe),B(Le),o&&t(ns),o&&t(_e),B(So),o&&t(ss),o&&t(E),B(No),B(Ho),B(Ne),B(Ie),B(De),B(We),B(He),o&&t(as),o&&t(ve),B(Qo),o&&t(rs),o&&t(j),B(Uo),B(Yo),B(Ue),B(Ve),B(Re),o&&t(ls),o&&t(ye),B(Jo),o&&t(is),o&&t(A),B(Ko),B(ot),B(Ye)}}}const pc={local:"bloom",sections:[{local:"overview",title:"Overview"},{local:"resources",title:"Resources"},{local:"transformers.BloomConfig",title:"BloomConfig"},{local:"transformers.BloomModel",title:"BloomModel"},{local:"transformers.BloomTokenizerFast",title:"BloomTokenizerFast"},{local:"transformers.BloomForCausalLM",title:"BloomForCausalLM"},{local:"transformers.BloomForSequenceClassification",title:"BloomForSequenceClassification"},{local:"transformers.BloomForTokenClassification",title:"BloomForTokenClassification"},{local:"transformers.BloomForQuestionAnswering",title:"BloomForQuestionAnswering"}],title:"BLOOM"};function hc(F){return Rd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class yc extends Hd{constructor(d){super();Qd(this,d,hc,mc,Ud,{})}}export{yc as default,pc as metadata};
