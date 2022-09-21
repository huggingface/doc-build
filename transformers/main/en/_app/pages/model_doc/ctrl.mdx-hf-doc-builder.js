import{S as _c,i as Tc,s as yc,e as a,k as h,w as k,t as o,M as vc,c as r,d as t,m as u,a as i,x as w,h as n,b as f,G as e,g,y as C,q as $,o as L,B as R,v as bc,L as Tt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ht}from"../../chunks/Tip-hf-doc-builder.js";import{D as Ue}from"../../chunks/Docstring-hf-doc-builder.js";import{C as yt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Lt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as _t}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function kc(F){let d,y,c,m,v;return m=new yt({props:{code:`from transformers import CTRLModel, CTRLConfig

# Initializing a CTRL configuration
configuration = CTRLConfig()

# Initializing a model from the configuration
model = CTRLModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLModel, CTRLConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CTRL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CTRLConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),y=o("Examples:"),c=h(),k(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);y=n(p,"Examples:"),p.forEach(t),c=u(l),w(m.$$.fragment,l)},m(l,p){g(l,d,p),e(d,y),g(l,c,p),C(m,l,p),v=!0},p:Tt,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){L(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(m,l)}}}function wc(F){let d,y,c,m,v;return{c(){d=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);y=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,y),e(d,c),e(c,m),e(d,v)},d(l){l&&t(d)}}}function Cc(F){let d,y,c,m,v;return m=new yt({props:{code:`from transformers import CTRLTokenizer, CTRLModel
import torch

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLModel.from_pretrained("ctrl")

# CTRL was trained with control codes as the first token
inputs = tokenizer("Opinion My dog is cute", return_tensors="pt")
assert inputs["input_ids"][0, 0].item() in tokenizer.control_codes.values()

outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># CTRL was trained with control codes as the first token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Opinion My dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>, <span class="hljs-number">0</span>].item() <span class="hljs-keyword">in</span> tokenizer.control_codes.values()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1280</span>]`}}),{c(){d=a("p"),y=o("Example:"),c=h(),k(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);y=n(p,"Example:"),p.forEach(t),c=u(l),w(m.$$.fragment,l)},m(l,p){g(l,d,p),e(d,y),g(l,c,p),C(m,l,p),v=!0},p:Tt,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){L(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(m,l)}}}function $c(F){let d,y,c,m,v;return{c(){d=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);y=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,y),e(d,c),e(c,m),e(d,v)},d(l){l&&t(d)}}}function Lc(F){let d,y,c,m,v;return m=new yt({props:{code:`import torch
from transformers import CTRLTokenizer, CTRLLMHeadModel

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLLMHeadModel.from_pretrained("ctrl")

# CTRL was trained with control codes as the first token
inputs = tokenizer("Wikipedia The llama is", return_tensors="pt")
assert inputs["input_ids"][0, 0].item() in tokenizer.control_codes.values()

sequence_ids = model.generate(inputs["input_ids"])
sequences = tokenizer.batch_decode(sequence_ids)
sequences

outputs = model(**inputs, labels=inputs["input_ids"])
round(outputs.loss.item(), 2)

list(outputs.logits.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLLMHeadModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># CTRL was trained with control codes as the first token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Wikipedia The llama is&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>, <span class="hljs-number">0</span>].item() <span class="hljs-keyword">in</span> tokenizer.control_codes.values()

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = tokenizer.batch_decode(sequence_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences
[<span class="hljs-string">&#x27;Wikipedia The llama is a member of the family Bovidae. It is native to the Andes of Peru,&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">9.21</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(outputs.logits.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">246534</span>]`}}),{c(){d=a("p"),y=o("Example:"),c=h(),k(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);y=n(p,"Example:"),p.forEach(t),c=u(l),w(m.$$.fragment,l)},m(l,p){g(l,d,p),e(d,y),g(l,c,p),C(m,l,p),v=!0},p:Tt,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){L(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(m,l)}}}function Rc(F){let d,y,c,m,v;return{c(){d=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);y=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,y),e(d,c),e(c,m),e(d,v)},d(l){l&&t(d)}}}function Mc(F){let d,y,c,m,v;return m=new yt({props:{code:`import torch
from transformers import CTRLTokenizer, CTRLForSequenceClassification

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLForSequenceClassification.from_pretrained("ctrl")

# CTRL was trained with control codes as the first token
inputs = tokenizer("Opinion My dog is cute", return_tensors="pt")
assert inputs["input_ids"][0, 0].item() in tokenizer.control_codes.values()

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># CTRL was trained with control codes as the first token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Opinion My dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>, <span class="hljs-number">0</span>].item() <span class="hljs-keyword">in</span> tokenizer.control_codes.values()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),y=o("Example of single-label classification:"),c=h(),k(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);y=n(p,"Example of single-label classification:"),p.forEach(t),c=u(l),w(m.$$.fragment,l)},m(l,p){g(l,d,p),e(d,y),g(l,c,p),C(m,l,p),v=!0},p:Tt,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){L(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(m,l)}}}function Ec(F){let d,y;return d=new yt({props:{code:`import torch

torch.manual_seed(42)
# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = CTRLForSequenceClassification.from_pretrained("ctrl", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">42</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.35</span>`}}),{c(){k(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){C(d,c,m),y=!0},p:Tt,i(c){y||($(d.$$.fragment,c),y=!0)},o(c){L(d.$$.fragment,c),y=!1},d(c){R(d,c)}}}function Fc(F){let d,y,c,m,v;return m=new yt({props:{code:`import torch
from transformers import CTRLTokenizer, CTRLForSequenceClassification

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLForSequenceClassification.from_pretrained("ctrl", problem_type="multi_label_classification")

# CTRL was trained with control codes as the first token
inputs = tokenizer("Opinion My dog is cute", return_tensors="pt")
assert inputs["input_ids"][0, 0].item() in tokenizer.control_codes.values()

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># CTRL was trained with control codes as the first token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Opinion My dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>, <span class="hljs-number">0</span>].item() <span class="hljs-keyword">in</span> tokenizer.control_codes.values()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),y=o("Example of multi-label classification:"),c=h(),k(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);y=n(p,"Example of multi-label classification:"),p.forEach(t),c=u(l),w(m.$$.fragment,l)},m(l,p){g(l,d,p),e(d,y),g(l,c,p),C(m,l,p),v=!0},p:Tt,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){L(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(m,l)}}}function qc(F){let d,y;return d=new yt({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = CTRLForSequenceClassification.from_pretrained("ctrl", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){C(d,c,m),y=!0},p:Tt,i(c){y||($(d.$$.fragment,c),y=!0)},o(c){L(d.$$.fragment,c),y=!1},d(c){R(d,c)}}}function zc(F){let d,y,c,m,v,l,p,q,Ce,ge,I,te,oe,b,$e,K,Le,_e,N,Re,se,G,Me,pe,X,Ee,Te,H,Fe,ye,J,j,P,ve,W,qe,be,O,ae,ze,x,je,Q,xe,he,Y,Pe,re,U,ue,Z,Oe,le,z,Se,S,Ne,Ie;return{c(){d=a("p"),y=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),v=o(" accept two formats as input:"),l=h(),p=a("ul"),q=a("li"),Ce=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),b=a("p"),$e=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Le=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a("code"),Re=o("model.fit()"),se=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),Me=o("fit()"),pe=o(" and "),X=a("code"),Ee=o("predict()"),Te=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Fe=o("Functional"),ye=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),J=h(),j=a("ul"),P=a("li"),ve=o("a single Tensor with "),W=a("code"),qe=o("input_ids"),be=o(" only and nothing else: "),O=a("code"),ae=o("model(input_ids)"),ze=h(),x=a("li"),je=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),xe=o("model([input_ids, attention_mask])"),he=o(" or "),Y=a("code"),Pe=o("model([input_ids, attention_mask, token_type_ids])"),re=h(),U=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),Oe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),le=h(),z=a("p"),Se=o(`Note that when creating models and layers with
`),S=a("a"),Ne=o("subclassing"),Ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var M=i(d);y=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Ze=i(c);m=n(Ze,"transformers"),Ze.forEach(t),v=n(M," accept two formats as input:"),M.forEach(t),l=u(_),p=r(_,"UL",{});var ne=i(p);q=r(ne,"LI",{});var et=i(q);Ce=n(et,"having all inputs as keyword arguments (like PyTorch models), or"),et.forEach(t),ge=u(ne),I=r(ne,"LI",{});var tt=i(I);te=n(tt,"having all inputs as a list, tuple or dict in the first positional argument."),tt.forEach(t),ne.forEach(t),oe=u(_),b=r(_,"P",{});var E=i(b);$e=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(E,"CODE",{});var Be=i(K);Le=n(Be,"model.fit()"),Be.forEach(t),_e=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r(E,"CODE",{});var ot=i(N);Re=n(ot,"model.fit()"),ot.forEach(t),se=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(E,"CODE",{});var nt=i(G);Me=n(nt,"fit()"),nt.forEach(t),pe=n(E," and "),X=r(E,"CODE",{});var Xe=i(X);Ee=n(Xe,"predict()"),Xe.forEach(t),Te=n(E,`, such as when creating your own layers or models with
the Keras `),H=r(E,"CODE",{});var ie=i(H);Fe=n(ie,"Functional"),ie.forEach(t),ye=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),J=u(_),j=r(_,"UL",{});var B=i(j);P=r(B,"LI",{});var D=i(P);ve=n(D,"a single Tensor with "),W=r(D,"CODE",{});var st=i(W);qe=n(st,"input_ids"),st.forEach(t),be=n(D," only and nothing else: "),O=r(D,"CODE",{});var at=i(O);ae=n(at,"model(input_ids)"),at.forEach(t),D.forEach(t),ze=u(B),x=r(B,"LI",{});var A=i(x);je=n(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(A,"CODE",{});var rt=i(Q);xe=n(rt,"model([input_ids, attention_mask])"),rt.forEach(t),he=n(A," or "),Y=r(A,"CODE",{});var it=i(Y);Pe=n(it,"model([input_ids, attention_mask, token_type_ids])"),it.forEach(t),A.forEach(t),re=u(B),U=r(B,"LI",{});var ke=i(U);ue=n(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(ke,"CODE",{});var de=i(Z);Oe=n(de,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),de.forEach(t),ke.forEach(t),B.forEach(t),le=u(_),z=r(_,"P",{});var V=i(z);Se=n(V,`Note that when creating models and layers with
`),S=r(V,"A",{href:!0,rel:!0});var Ke=i(S);Ne=n(Ke,"subclassing"),Ke.forEach(t),Ie=n(V,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),V.forEach(t),this.h()},h(){f(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(S,"rel","nofollow")},m(_,M){g(_,d,M),e(d,y),e(d,c),e(c,m),e(d,v),g(_,l,M),g(_,p,M),e(p,q),e(q,Ce),e(p,ge),e(p,I),e(I,te),g(_,oe,M),g(_,b,M),e(b,$e),e(b,K),e(K,Le),e(b,_e),e(b,N),e(N,Re),e(b,se),e(b,G),e(G,Me),e(b,pe),e(b,X),e(X,Ee),e(b,Te),e(b,H),e(H,Fe),e(b,ye),g(_,J,M),g(_,j,M),e(j,P),e(P,ve),e(P,W),e(W,qe),e(P,be),e(P,O),e(O,ae),e(j,ze),e(j,x),e(x,je),e(x,Q),e(Q,xe),e(x,he),e(x,Y),e(Y,Pe),e(j,re),e(j,U),e(U,ue),e(U,Z),e(Z,Oe),g(_,le,M),g(_,z,M),e(z,Se),e(z,S),e(S,Ne),e(z,Ie)},d(_){_&&t(d),_&&t(l),_&&t(p),_&&t(oe),_&&t(b),_&&t(J),_&&t(j),_&&t(le),_&&t(z)}}}function jc(F){let d,y,c,m,v;return{c(){d=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);y=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,y),e(d,c),e(c,m),e(d,v)},d(l){l&&t(d)}}}function xc(F){let d,y,c,m,v;return m=new yt({props:{code:`from transformers import CTRLTokenizer, TFCTRLModel
import tensorflow as tf

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = TFCTRLModel.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, TFCTRLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),y=o("Example:"),c=h(),k(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);y=n(p,"Example:"),p.forEach(t),c=u(l),w(m.$$.fragment,l)},m(l,p){g(l,d,p),e(d,y),g(l,c,p),C(m,l,p),v=!0},p:Tt,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){L(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(m,l)}}}function Pc(F){let d,y,c,m,v,l,p,q,Ce,ge,I,te,oe,b,$e,K,Le,_e,N,Re,se,G,Me,pe,X,Ee,Te,H,Fe,ye,J,j,P,ve,W,qe,be,O,ae,ze,x,je,Q,xe,he,Y,Pe,re,U,ue,Z,Oe,le,z,Se,S,Ne,Ie;return{c(){d=a("p"),y=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),v=o(" accept two formats as input:"),l=h(),p=a("ul"),q=a("li"),Ce=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),b=a("p"),$e=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Le=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a("code"),Re=o("model.fit()"),se=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),Me=o("fit()"),pe=o(" and "),X=a("code"),Ee=o("predict()"),Te=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Fe=o("Functional"),ye=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),J=h(),j=a("ul"),P=a("li"),ve=o("a single Tensor with "),W=a("code"),qe=o("input_ids"),be=o(" only and nothing else: "),O=a("code"),ae=o("model(input_ids)"),ze=h(),x=a("li"),je=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),xe=o("model([input_ids, attention_mask])"),he=o(" or "),Y=a("code"),Pe=o("model([input_ids, attention_mask, token_type_ids])"),re=h(),U=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),Oe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),le=h(),z=a("p"),Se=o(`Note that when creating models and layers with
`),S=a("a"),Ne=o("subclassing"),Ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var M=i(d);y=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Ze=i(c);m=n(Ze,"transformers"),Ze.forEach(t),v=n(M," accept two formats as input:"),M.forEach(t),l=u(_),p=r(_,"UL",{});var ne=i(p);q=r(ne,"LI",{});var et=i(q);Ce=n(et,"having all inputs as keyword arguments (like PyTorch models), or"),et.forEach(t),ge=u(ne),I=r(ne,"LI",{});var tt=i(I);te=n(tt,"having all inputs as a list, tuple or dict in the first positional argument."),tt.forEach(t),ne.forEach(t),oe=u(_),b=r(_,"P",{});var E=i(b);$e=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(E,"CODE",{});var Be=i(K);Le=n(Be,"model.fit()"),Be.forEach(t),_e=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r(E,"CODE",{});var ot=i(N);Re=n(ot,"model.fit()"),ot.forEach(t),se=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(E,"CODE",{});var nt=i(G);Me=n(nt,"fit()"),nt.forEach(t),pe=n(E," and "),X=r(E,"CODE",{});var Xe=i(X);Ee=n(Xe,"predict()"),Xe.forEach(t),Te=n(E,`, such as when creating your own layers or models with
the Keras `),H=r(E,"CODE",{});var ie=i(H);Fe=n(ie,"Functional"),ie.forEach(t),ye=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),J=u(_),j=r(_,"UL",{});var B=i(j);P=r(B,"LI",{});var D=i(P);ve=n(D,"a single Tensor with "),W=r(D,"CODE",{});var st=i(W);qe=n(st,"input_ids"),st.forEach(t),be=n(D," only and nothing else: "),O=r(D,"CODE",{});var at=i(O);ae=n(at,"model(input_ids)"),at.forEach(t),D.forEach(t),ze=u(B),x=r(B,"LI",{});var A=i(x);je=n(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(A,"CODE",{});var rt=i(Q);xe=n(rt,"model([input_ids, attention_mask])"),rt.forEach(t),he=n(A," or "),Y=r(A,"CODE",{});var it=i(Y);Pe=n(it,"model([input_ids, attention_mask, token_type_ids])"),it.forEach(t),A.forEach(t),re=u(B),U=r(B,"LI",{});var ke=i(U);ue=n(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(ke,"CODE",{});var de=i(Z);Oe=n(de,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),de.forEach(t),ke.forEach(t),B.forEach(t),le=u(_),z=r(_,"P",{});var V=i(z);Se=n(V,`Note that when creating models and layers with
`),S=r(V,"A",{href:!0,rel:!0});var Ke=i(S);Ne=n(Ke,"subclassing"),Ke.forEach(t),Ie=n(V,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),V.forEach(t),this.h()},h(){f(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(S,"rel","nofollow")},m(_,M){g(_,d,M),e(d,y),e(d,c),e(c,m),e(d,v),g(_,l,M),g(_,p,M),e(p,q),e(q,Ce),e(p,ge),e(p,I),e(I,te),g(_,oe,M),g(_,b,M),e(b,$e),e(b,K),e(K,Le),e(b,_e),e(b,N),e(N,Re),e(b,se),e(b,G),e(G,Me),e(b,pe),e(b,X),e(X,Ee),e(b,Te),e(b,H),e(H,Fe),e(b,ye),g(_,J,M),g(_,j,M),e(j,P),e(P,ve),e(P,W),e(W,qe),e(P,be),e(P,O),e(O,ae),e(j,ze),e(j,x),e(x,je),e(x,Q),e(Q,xe),e(x,he),e(x,Y),e(Y,Pe),e(j,re),e(j,U),e(U,ue),e(U,Z),e(Z,Oe),g(_,le,M),g(_,z,M),e(z,Se),e(z,S),e(S,Ne),e(z,Ie)},d(_){_&&t(d),_&&t(l),_&&t(p),_&&t(oe),_&&t(b),_&&t(J),_&&t(j),_&&t(le),_&&t(z)}}}function Oc(F){let d,y,c,m,v;return{c(){d=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);y=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,y),e(d,c),e(c,m),e(d,v)},d(l){l&&t(d)}}}function Sc(F){let d,y,c,m,v;return m=new yt({props:{code:`from transformers import CTRLTokenizer, TFCTRLLMHeadModel
import tensorflow as tf

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = TFCTRLLMHeadModel.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, TFCTRLLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLLMHeadModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),y=o("Example:"),c=h(),k(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);y=n(p,"Example:"),p.forEach(t),c=u(l),w(m.$$.fragment,l)},m(l,p){g(l,d,p),e(d,y),g(l,c,p),C(m,l,p),v=!0},p:Tt,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){L(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(m,l)}}}function Nc(F){let d,y,c,m,v,l,p,q,Ce,ge,I,te,oe,b,$e,K,Le,_e,N,Re,se,G,Me,pe,X,Ee,Te,H,Fe,ye,J,j,P,ve,W,qe,be,O,ae,ze,x,je,Q,xe,he,Y,Pe,re,U,ue,Z,Oe,le,z,Se,S,Ne,Ie;return{c(){d=a("p"),y=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),v=o(" accept two formats as input:"),l=h(),p=a("ul"),q=a("li"),Ce=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),b=a("p"),$e=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Le=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=a("code"),Re=o("model.fit()"),se=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),Me=o("fit()"),pe=o(" and "),X=a("code"),Ee=o("predict()"),Te=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Fe=o("Functional"),ye=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),J=h(),j=a("ul"),P=a("li"),ve=o("a single Tensor with "),W=a("code"),qe=o("input_ids"),be=o(" only and nothing else: "),O=a("code"),ae=o("model(input_ids)"),ze=h(),x=a("li"),je=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),xe=o("model([input_ids, attention_mask])"),he=o(" or "),Y=a("code"),Pe=o("model([input_ids, attention_mask, token_type_ids])"),re=h(),U=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),Oe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),le=h(),z=a("p"),Se=o(`Note that when creating models and layers with
`),S=a("a"),Ne=o("subclassing"),Ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var M=i(d);y=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Ze=i(c);m=n(Ze,"transformers"),Ze.forEach(t),v=n(M," accept two formats as input:"),M.forEach(t),l=u(_),p=r(_,"UL",{});var ne=i(p);q=r(ne,"LI",{});var et=i(q);Ce=n(et,"having all inputs as keyword arguments (like PyTorch models), or"),et.forEach(t),ge=u(ne),I=r(ne,"LI",{});var tt=i(I);te=n(tt,"having all inputs as a list, tuple or dict in the first positional argument."),tt.forEach(t),ne.forEach(t),oe=u(_),b=r(_,"P",{});var E=i(b);$e=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(E,"CODE",{});var Be=i(K);Le=n(Be,"model.fit()"),Be.forEach(t),_e=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=r(E,"CODE",{});var ot=i(N);Re=n(ot,"model.fit()"),ot.forEach(t),se=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(E,"CODE",{});var nt=i(G);Me=n(nt,"fit()"),nt.forEach(t),pe=n(E," and "),X=r(E,"CODE",{});var Xe=i(X);Ee=n(Xe,"predict()"),Xe.forEach(t),Te=n(E,`, such as when creating your own layers or models with
the Keras `),H=r(E,"CODE",{});var ie=i(H);Fe=n(ie,"Functional"),ie.forEach(t),ye=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),J=u(_),j=r(_,"UL",{});var B=i(j);P=r(B,"LI",{});var D=i(P);ve=n(D,"a single Tensor with "),W=r(D,"CODE",{});var st=i(W);qe=n(st,"input_ids"),st.forEach(t),be=n(D," only and nothing else: "),O=r(D,"CODE",{});var at=i(O);ae=n(at,"model(input_ids)"),at.forEach(t),D.forEach(t),ze=u(B),x=r(B,"LI",{});var A=i(x);je=n(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(A,"CODE",{});var rt=i(Q);xe=n(rt,"model([input_ids, attention_mask])"),rt.forEach(t),he=n(A," or "),Y=r(A,"CODE",{});var it=i(Y);Pe=n(it,"model([input_ids, attention_mask, token_type_ids])"),it.forEach(t),A.forEach(t),re=u(B),U=r(B,"LI",{});var ke=i(U);ue=n(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(ke,"CODE",{});var de=i(Z);Oe=n(de,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),de.forEach(t),ke.forEach(t),B.forEach(t),le=u(_),z=r(_,"P",{});var V=i(z);Se=n(V,`Note that when creating models and layers with
`),S=r(V,"A",{href:!0,rel:!0});var Ke=i(S);Ne=n(Ke,"subclassing"),Ke.forEach(t),Ie=n(V,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),V.forEach(t),this.h()},h(){f(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(S,"rel","nofollow")},m(_,M){g(_,d,M),e(d,y),e(d,c),e(c,m),e(d,v),g(_,l,M),g(_,p,M),e(p,q),e(q,Ce),e(p,ge),e(p,I),e(I,te),g(_,oe,M),g(_,b,M),e(b,$e),e(b,K),e(K,Le),e(b,_e),e(b,N),e(N,Re),e(b,se),e(b,G),e(G,Me),e(b,pe),e(b,X),e(X,Ee),e(b,Te),e(b,H),e(H,Fe),e(b,ye),g(_,J,M),g(_,j,M),e(j,P),e(P,ve),e(P,W),e(W,qe),e(P,be),e(P,O),e(O,ae),e(j,ze),e(j,x),e(x,je),e(x,Q),e(Q,xe),e(x,he),e(x,Y),e(Y,Pe),e(j,re),e(j,U),e(U,ue),e(U,Z),e(Z,Oe),g(_,le,M),g(_,z,M),e(z,Se),e(z,S),e(S,Ne),e(z,Ie)},d(_){_&&t(d),_&&t(l),_&&t(p),_&&t(oe),_&&t(b),_&&t(J),_&&t(j),_&&t(le),_&&t(z)}}}function Ic(F){let d,y,c,m,v;return{c(){d=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);y=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,y),e(d,c),e(c,m),e(d,v)},d(l){l&&t(d)}}}function Dc(F){let d,y,c,m,v;return m=new yt({props:{code:`from transformers import CTRLTokenizer, TFCTRLForSequenceClassification
import tensorflow as tf

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = TFCTRLForSequenceClassification.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, TFCTRLForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),y=o("Example:"),c=h(),k(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);y=n(p,"Example:"),p.forEach(t),c=u(l),w(m.$$.fragment,l)},m(l,p){g(l,d,p),e(d,y),g(l,c,p),C(m,l,p),v=!0},p:Tt,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){L(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(m,l)}}}function Ac(F){let d,y;return d=new yt({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFCTRLForSequenceClassification.from_pretrained("ctrl", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){C(d,c,m),y=!0},p:Tt,i(c){y||($(d.$$.fragment,c),y=!0)},o(c){L(d.$$.fragment,c),y=!1},d(c){R(d,c)}}}function Hc(F){let d,y,c,m,v,l,p,q,Ce,ge,I,te,oe,b,$e,K,Le,_e,N,Re,se,G,Me,pe,X,Ee,Te,H,Fe,ye,J,j,P,ve,W,qe,be,O,ae,ze,x,je,Q,xe,he,Y,Pe,re,U,ue,Z,Oe,le,z,Se,S,Ne,Ie,_,M,Ze,ne,et,tt,E,Be,ot,nt,Xe,ie,B,D,st,at,A,rt,it,ke,de,V,Ke,Co,$a,Vn,La,Hs,Je,$o,Ra,ft,Ma,Tn,Ea,Fa,yn,qa,za,Lo,ja,xa,Pa,Rt,Oa,vn,Sa,Na,bn,Ia,Da,Aa,Wt,Ws,Mt,Ut,Gn,Ro,Ha,Xn,Wa,Us,Qe,Mo,Ua,Jn,Ba,Ka,Eo,Va,kn,Ga,Xa,Ja,wn,Fo,Bs,Et,Bt,Qn,qo,Qa,Yn,Ya,Ks,De,zo,Za,Zn,er,tr,jo,or,Cn,nr,sr,ar,xo,rr,Po,ir,lr,dr,lt,Oo,cr,Ft,pr,$n,hr,ur,es,mr,fr,gr,Kt,_r,Vt,Vs,qt,Gt,ts,So,Tr,os,yr,Gs,Ae,No,vr,ns,br,kr,Io,wr,Ln,Cr,$r,Lr,Do,Rr,Ao,Mr,Er,Fr,dt,Ho,qr,zt,zr,Rn,jr,xr,ss,Pr,Or,Sr,Xt,Nr,Jt,Xs,jt,Qt,as,Wo,Ir,rs,Dr,Js,He,Uo,Ar,We,Hr,Mn,Wr,Ur,is,Br,Kr,ls,Vr,Gr,ds,Xr,Jr,cs,Qr,Yr,Zr,Bo,ei,En,ti,oi,ni,Ko,si,Vo,ai,ri,ii,ce,Go,li,xt,di,Fn,ci,pi,ps,hi,ui,mi,Yt,fi,Zt,gi,eo,_i,to,Ti,oo,Qs,Pt,no,hs,Xo,yi,us,vi,Ys,me,Jo,bi,ms,ki,wi,Qo,Ci,qn,$i,Li,Ri,Yo,Mi,Zo,Ei,Fi,qi,so,zi,ct,en,ji,Ot,xi,zn,Pi,Oi,fs,Si,Ni,Ii,ao,Di,ro,Zs,St,io,gs,tn,Ai,_s,Hi,ea,fe,on,Wi,Ts,Ui,Bi,nn,Ki,jn,Vi,Gi,Xi,sn,Ji,an,Qi,Yi,Zi,lo,el,pt,rn,tl,Nt,ol,xn,nl,sl,ys,al,rl,il,co,ll,po,ta,It,ho,vs,ln,dl,bs,cl,oa,ee,dn,pl,ks,hl,ul,Pn,On,ml,fl,gl,Ye,_l,ws,Tl,yl,Cs,vl,bl,$s,kl,wl,Ls,Cl,$l,Ll,cn,Rl,Sn,Ml,El,Fl,pn,ql,hn,zl,jl,xl,uo,Pl,Ve,un,Ol,Dt,Sl,Nn,Nl,Il,Rs,Dl,Al,Hl,mo,Wl,fo,Ul,go,na;return l=new Lt({}),b=new Lt({}),Co=new Lt({}),$o=new Ue({props:{name:"class transformers.CTRLConfig",anchor:"transformers.CTRLConfig",parameters:[{name:"vocab_size",val:" = 246534"},{name:"n_positions",val:" = 256"},{name:"n_embd",val:" = 1280"},{name:"dff",val:" = 8192"},{name:"n_layer",val:" = 48"},{name:"n_head",val:" = 16"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CTRLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 246534) &#x2014;
Vocabulary size of the CTRL model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLModel">CTRLModel</a> or <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLModel">TFCTRLModel</a>.`,name:"vocab_size"},{anchor:"transformers.CTRLConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.CTRLConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 1280) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.CTRLConfig.dff",description:`<strong>dff</strong> (<code>int</code>, <em>optional</em>, defaults to 8192) &#x2014;
Dimensionality of the inner dimension of the feed forward networks (FFN).`,name:"dff"},{anchor:"transformers.CTRLConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 48) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.CTRLConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.CTRLConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.CTRLConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.CTRLConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.CTRLConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon to use in the layer normalization layers`,name:"layer_norm_epsilon"},{anchor:"transformers.CTRLConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CTRLConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/configuration_ctrl.py#L26"}}),Wt=new _t({props:{anchor:"transformers.CTRLConfig.example",$$slots:{default:[kc]},$$scope:{ctx:F}}}),Ro=new Lt({}),Mo=new Ue({props:{name:"class transformers.CTRLTokenizer",anchor:"transformers.CTRLTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CTRLTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CTRLTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CTRLTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/tokenization_ctrl.py#L119"}}),Fo=new Ue({props:{name:"save_vocabulary",anchor:"transformers.CTRLTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/tokenization_ctrl.py#L227"}}),qo=new Lt({}),zo=new Ue({props:{name:"class transformers.CTRLModel",anchor:"transformers.CTRLModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L319"}}),Oo=new Ue({props:{name:"forward",anchor:"transformers.CTRLModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CTRLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CTRLModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.FloatTensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.CTRLModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CTRLModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CTRLModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CTRLModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CTRLModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CTRLModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.CTRLModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CTRLModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CTRLModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L352",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kt=new Ht({props:{$$slots:{default:[wc]},$$scope:{ctx:F}}}),Vt=new _t({props:{anchor:"transformers.CTRLModel.forward.example",$$slots:{default:[Cc]},$$scope:{ctx:F}}}),So=new Lt({}),No=new Ue({props:{name:"class transformers.CTRLLMHeadModel",anchor:"transformers.CTRLLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L509"}}),Ho=new Ue({props:{name:"forward",anchor:"transformers.CTRLLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CTRLLMHeadModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.FloatTensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.CTRLLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CTRLLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CTRLLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CTRLLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CTRLLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CTRLLMHeadModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.CTRLLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CTRLLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CTRLLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L531",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xt=new Ht({props:{$$slots:{default:[$c]},$$scope:{ctx:F}}}),Jt=new _t({props:{anchor:"transformers.CTRLLMHeadModel.forward.example",$$slots:{default:[Lc]},$$scope:{ctx:F}}}),Wo=new Lt({}),Uo=new Ue({props:{name:"class transformers.CTRLForSequenceClassification",anchor:"transformers.CTRLForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L647"}}),Go=new Ue({props:{name:"forward",anchor:"transformers.CTRLForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CTRLForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.FloatTensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.CTRLForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CTRLForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CTRLForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CTRLForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CTRLForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CTRLForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.CTRLForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CTRLForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CTRLForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L657",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
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
`}}),Yt=new Ht({props:{$$slots:{default:[Rc]},$$scope:{ctx:F}}}),Zt=new _t({props:{anchor:"transformers.CTRLForSequenceClassification.forward.example",$$slots:{default:[Mc]},$$scope:{ctx:F}}}),eo=new _t({props:{anchor:"transformers.CTRLForSequenceClassification.forward.example-2",$$slots:{default:[Ec]},$$scope:{ctx:F}}}),to=new _t({props:{anchor:"transformers.CTRLForSequenceClassification.forward.example-3",$$slots:{default:[Fc]},$$scope:{ctx:F}}}),oo=new _t({props:{anchor:"transformers.CTRLForSequenceClassification.forward.example-4",$$slots:{default:[qc]},$$scope:{ctx:F}}}),Xo=new Lt({}),Jo=new Ue({props:{name:"class transformers.TFCTRLModel",anchor:"transformers.TFCTRLModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L522"}}),so=new Ht({props:{$$slots:{default:[zc]},$$scope:{ctx:F}}}),en=new Ue({props:{name:"call",anchor:"transformers.TFCTRLModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCTRLModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCTRLModel.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFCTRLModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCTRLModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCTRLModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCTRLModel.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCTRLModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCTRLModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past</code> key value states are returned and can be used to speed up decoding (see <code>past</code>).`,name:"use_cache"},{anchor:"transformers.TFCTRLModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCTRLModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCTRLModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L527",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ao=new Ht({props:{$$slots:{default:[jc]},$$scope:{ctx:F}}}),ro=new _t({props:{anchor:"transformers.TFCTRLModel.call.example",$$slots:{default:[xc]},$$scope:{ctx:F}}}),tn=new Lt({}),on=new Ue({props:{name:"class transformers.TFCTRLLMHeadModel",anchor:"transformers.TFCTRLLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L618"}}),lo=new Ht({props:{$$slots:{default:[Pc]},$$scope:{ctx:F}}}),rn=new Ue({props:{name:"call",anchor:"transformers.TFCTRLLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCTRLLMHeadModel.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFCTRLLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCTRLLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCTRLLMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCTRLLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCTRLLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCTRLLMHeadModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past</code> key value states are returned and can be used to speed up decoding (see <code>past</code>).`,name:"use_cache"},{anchor:"transformers.TFCTRLLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCTRLLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCTRLLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L641",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new Ht({props:{$$slots:{default:[Oc]},$$scope:{ctx:F}}}),po=new _t({props:{anchor:"transformers.TFCTRLLMHeadModel.call.example",$$slots:{default:[Sc]},$$scope:{ctx:F}}}),ln=new Lt({}),dn=new Ue({props:{name:"class transformers.TFCTRLForSequenceClassification",anchor:"transformers.TFCTRLForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L737"}}),uo=new Ht({props:{$$slots:{default:[Nc]},$$scope:{ctx:F}}}),un=new Ue({props:{name:"call",anchor:"transformers.TFCTRLForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCTRLForSequenceClassification.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFCTRLForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCTRLForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCTRLForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCTRLForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCTRLForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCTRLForSequenceClassification.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past</code> key value states are returned and can be used to speed up decoding (see <code>past</code>).`,name:"use_cache"},{anchor:"transformers.TFCTRLForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCTRLForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCTRLForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L752",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
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
`}}),mo=new Ht({props:{$$slots:{default:[Ic]},$$scope:{ctx:F}}}),fo=new _t({props:{anchor:"transformers.TFCTRLForSequenceClassification.call.example",$$slots:{default:[Dc]},$$scope:{ctx:F}}}),go=new _t({props:{anchor:"transformers.TFCTRLForSequenceClassification.call.example-2",$$slots:{default:[Ac]},$$scope:{ctx:F}}}),{c(){d=a("meta"),y=h(),c=a("h1"),m=a("a"),v=a("span"),k(l.$$.fragment),p=h(),q=a("span"),Ce=o("CTRL"),ge=h(),I=a("h2"),te=a("a"),oe=a("span"),k(b.$$.fragment),$e=h(),K=a("span"),Le=o("Overview"),_e=h(),N=a("p"),Re=o("CTRL model was proposed in "),se=a("a"),G=o("CTRL: A Conditional Transformer Language Model for Controllable Generation"),Me=o(" by Nitish Shirish Keskar"),pe=a("em"),X=o(", Bryan McCann"),Ee=o(`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),Te=h(),H=a("p"),Fe=o("The abstract from the paper is the following:"),ye=h(),J=a("p"),j=a("em"),P=o(`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),ve=h(),W=a("p"),qe=o("Tips:"),be=h(),O=a("ul"),ae=a("li"),ze=o(`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),x=a("a"),je=o("original implementation"),Q=o(` for
more information.`),xe=h(),he=a("li"),Y=o(`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Pe=h(),re=a("li"),U=o(`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),ue=a("em"),Z=o("run_generation.py"),Oe=o(" example script."),le=h(),z=a("li"),Se=o("The PyTorch models can take the "),S=a("code"),Ne=o("past_key_values"),Ie=o(` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),_=a("code"),M=o("past"),Ze=o(" as input. Using the "),ne=a("code"),et=o("past_key_values"),tt=o(` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),E=a("a"),Be=a("code"),ot=o("forward"),nt=o(`
method for more information on the usage of this argument.`),Xe=h(),ie=a("p"),B=o("This model was contributed by "),D=a("a"),st=o("keskarnitishr"),at=o(`. The original code can be found
`),A=a("a"),rt=o("here"),it=o("."),ke=h(),de=a("h2"),V=a("a"),Ke=a("span"),k(Co.$$.fragment),$a=h(),Vn=a("span"),La=o("CTRLConfig"),Hs=h(),Je=a("div"),k($o.$$.fragment),Ra=h(),ft=a("p"),Ma=o("This is the configuration class to store the configuration of a "),Tn=a("a"),Ea=o("CTRLModel"),Fa=o(" or a "),yn=a("a"),qa=o("TFCTRLModel"),za=o(`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Lo=a("a"),ja=o("ctrl"),xa=o(" architecture from SalesForce."),Pa=h(),Rt=a("p"),Oa=o("Configuration objects inherit from "),vn=a("a"),Sa=o("PretrainedConfig"),Na=o(` and can be used to control the model outputs. Read the
documentation from `),bn=a("a"),Ia=o("PretrainedConfig"),Da=o(" for more information."),Aa=h(),k(Wt.$$.fragment),Ws=h(),Mt=a("h2"),Ut=a("a"),Gn=a("span"),k(Ro.$$.fragment),Ha=h(),Xn=a("span"),Wa=o("CTRLTokenizer"),Us=h(),Qe=a("div"),k(Mo.$$.fragment),Ua=h(),Jn=a("p"),Ba=o("Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Ka=h(),Eo=a("p"),Va=o("This tokenizer inherits from "),kn=a("a"),Ga=o("PreTrainedTokenizer"),Xa=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ja=h(),wn=a("div"),k(Fo.$$.fragment),Bs=h(),Et=a("h2"),Bt=a("a"),Qn=a("span"),k(qo.$$.fragment),Qa=h(),Yn=a("span"),Ya=o("CTRLModel"),Ks=h(),De=a("div"),k(zo.$$.fragment),Za=h(),Zn=a("p"),er=o("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),tr=h(),jo=a("p"),or=o("This model inherits from "),Cn=a("a"),nr=o("PreTrainedModel"),sr=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ar=h(),xo=a("p"),rr=o("This model is also a PyTorch "),Po=a("a"),ir=o("torch.nn.Module"),lr=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dr=h(),lt=a("div"),k(Oo.$$.fragment),cr=h(),Ft=a("p"),pr=o("The "),$n=a("a"),hr=o("CTRLModel"),ur=o(" forward method, overrides the "),es=a("code"),mr=o("__call__"),fr=o(" special method."),gr=h(),k(Kt.$$.fragment),_r=h(),k(Vt.$$.fragment),Vs=h(),qt=a("h2"),Gt=a("a"),ts=a("span"),k(So.$$.fragment),Tr=h(),os=a("span"),yr=o("CTRLLMHeadModel"),Gs=h(),Ae=a("div"),k(No.$$.fragment),vr=h(),ns=a("p"),br=o(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),kr=h(),Io=a("p"),wr=o("This model inherits from "),Ln=a("a"),Cr=o("PreTrainedModel"),$r=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lr=h(),Do=a("p"),Rr=o("This model is also a PyTorch "),Ao=a("a"),Mr=o("torch.nn.Module"),Er=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fr=h(),dt=a("div"),k(Ho.$$.fragment),qr=h(),zt=a("p"),zr=o("The "),Rn=a("a"),jr=o("CTRLLMHeadModel"),xr=o(" forward method, overrides the "),ss=a("code"),Pr=o("__call__"),Or=o(" special method."),Sr=h(),k(Xt.$$.fragment),Nr=h(),k(Jt.$$.fragment),Xs=h(),jt=a("h2"),Qt=a("a"),as=a("span"),k(Wo.$$.fragment),Ir=h(),rs=a("span"),Dr=o("CTRLForSequenceClassification"),Js=h(),He=a("div"),k(Uo.$$.fragment),Ar=h(),We=a("p"),Hr=o(`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),Mn=a("a"),Wr=o("CTRLForSequenceClassification"),Ur=o(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),is=a("code"),Br=o("pad_token_id"),Kr=o(` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),ls=a("code"),Vr=o("pad_token_id"),Gr=o(` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),ds=a("code"),Xr=o("inputs_embeds"),Jr=o(" are passed instead of "),cs=a("code"),Qr=o("input_ids"),Yr=o(`, it does the same (take the last
value in each row of the batch).`),Zr=h(),Bo=a("p"),ei=o("This model inherits from "),En=a("a"),ti=o("PreTrainedModel"),oi=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni=h(),Ko=a("p"),si=o("This model is also a PyTorch "),Vo=a("a"),ai=o("torch.nn.Module"),ri=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ii=h(),ce=a("div"),k(Go.$$.fragment),li=h(),xt=a("p"),di=o("The "),Fn=a("a"),ci=o("CTRLForSequenceClassification"),pi=o(" forward method, overrides the "),ps=a("code"),hi=o("__call__"),ui=o(" special method."),mi=h(),k(Yt.$$.fragment),fi=h(),k(Zt.$$.fragment),gi=h(),k(eo.$$.fragment),_i=h(),k(to.$$.fragment),Ti=h(),k(oo.$$.fragment),Qs=h(),Pt=a("h2"),no=a("a"),hs=a("span"),k(Xo.$$.fragment),yi=h(),us=a("span"),vi=o("TFCTRLModel"),Ys=h(),me=a("div"),k(Jo.$$.fragment),bi=h(),ms=a("p"),ki=o("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),wi=h(),Qo=a("p"),Ci=o("This model inherits from "),qn=a("a"),$i=o("TFPreTrainedModel"),Li=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ri=h(),Yo=a("p"),Mi=o("This model is also a "),Zo=a("a"),Ei=o("tf.keras.Model"),Fi=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qi=h(),k(so.$$.fragment),zi=h(),ct=a("div"),k(en.$$.fragment),ji=h(),Ot=a("p"),xi=o("The "),zn=a("a"),Pi=o("TFCTRLModel"),Oi=o(" forward method, overrides the "),fs=a("code"),Si=o("__call__"),Ni=o(" special method."),Ii=h(),k(ao.$$.fragment),Di=h(),k(ro.$$.fragment),Zs=h(),St=a("h2"),io=a("a"),gs=a("span"),k(tn.$$.fragment),Ai=h(),_s=a("span"),Hi=o("TFCTRLLMHeadModel"),ea=h(),fe=a("div"),k(on.$$.fragment),Wi=h(),Ts=a("p"),Ui=o(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Bi=h(),nn=a("p"),Ki=o("This model inherits from "),jn=a("a"),Vi=o("TFPreTrainedModel"),Gi=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xi=h(),sn=a("p"),Ji=o("This model is also a "),an=a("a"),Qi=o("tf.keras.Model"),Yi=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zi=h(),k(lo.$$.fragment),el=h(),pt=a("div"),k(rn.$$.fragment),tl=h(),Nt=a("p"),ol=o("The "),xn=a("a"),nl=o("TFCTRLLMHeadModel"),sl=o(" forward method, overrides the "),ys=a("code"),al=o("__call__"),rl=o(" special method."),il=h(),k(co.$$.fragment),ll=h(),k(po.$$.fragment),ta=h(),It=a("h2"),ho=a("a"),vs=a("span"),k(ln.$$.fragment),dl=h(),bs=a("span"),cl=o("TFCTRLForSequenceClassification"),oa=h(),ee=a("div"),k(dn.$$.fragment),pl=h(),ks=a("p"),hl=o("The CTRL Model transformer with a sequence classification head on top (linear layer)."),ul=h(),Pn=a("p"),On=a("a"),ml=o("TFCTRLForSequenceClassification"),fl=o(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),gl=h(),Ye=a("p"),_l=o(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ws=a("code"),Tl=o("pad_token_id"),yl=o(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Cs=a("code"),vl=o("pad_token_id"),bl=o(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),$s=a("code"),kl=o("inputs_embeds"),wl=o(" are passed instead of "),Ls=a("code"),Cl=o("input_ids"),$l=o(`, it does the same (take the last value in
each row of the batch).`),Ll=h(),cn=a("p"),Rl=o("This model inherits from "),Sn=a("a"),Ml=o("TFPreTrainedModel"),El=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fl=h(),pn=a("p"),ql=o("This model is also a "),hn=a("a"),zl=o("tf.keras.Model"),jl=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xl=h(),k(uo.$$.fragment),Pl=h(),Ve=a("div"),k(un.$$.fragment),Ol=h(),Dt=a("p"),Sl=o("The "),Nn=a("a"),Nl=o("TFCTRLForSequenceClassification"),Il=o(" forward method, overrides the "),Rs=a("code"),Dl=o("__call__"),Al=o(" special method."),Hl=h(),k(mo.$$.fragment),Wl=h(),k(fo.$$.fragment),Ul=h(),k(go.$$.fragment),this.h()},l(s){const T=vc('[data-svelte="svelte-1phssyn"]',document.head);d=r(T,"META",{name:!0,content:!0}),T.forEach(t),y=u(s),c=r(s,"H1",{class:!0});var mn=i(c);m=r(mn,"A",{id:!0,class:!0,href:!0});var Ms=i(m);v=r(Ms,"SPAN",{});var Es=i(v);w(l.$$.fragment,Es),Es.forEach(t),Ms.forEach(t),p=u(mn),q=r(mn,"SPAN",{});var Fs=i(q);Ce=n(Fs,"CTRL"),Fs.forEach(t),mn.forEach(t),ge=u(s),I=r(s,"H2",{class:!0});var fn=i(I);te=r(fn,"A",{id:!0,class:!0,href:!0});var qs=i(te);oe=r(qs,"SPAN",{});var zs=i(oe);w(b.$$.fragment,zs),zs.forEach(t),qs.forEach(t),$e=u(fn),K=r(fn,"SPAN",{});var js=i(K);Le=n(js,"Overview"),js.forEach(t),fn.forEach(t),_e=u(s),N=r(s,"P",{});var At=i(N);Re=n(At,"CTRL model was proposed in "),se=r(At,"A",{href:!0,rel:!0});var xs=i(se);G=n(xs,"CTRL: A Conditional Transformer Language Model for Controllable Generation"),xs.forEach(t),Me=n(At," by Nitish Shirish Keskar"),pe=r(At,"EM",{});var Ps=i(pe);X=n(Ps,", Bryan McCann"),Ps.forEach(t),Ee=n(At,`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),At.forEach(t),Te=u(s),H=r(s,"P",{});var Os=i(H);Fe=n(Os,"The abstract from the paper is the following:"),Os.forEach(t),ye=u(s),J=r(s,"P",{});var Ss=i(J);j=r(Ss,"EM",{});var Ns=i(j);P=n(Ns,`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),Ns.forEach(t),Ss.forEach(t),ve=u(s),W=r(s,"P",{});var Is=i(W);qe=n(Is,"Tips:"),Is.forEach(t),be=u(s),O=r(s,"UL",{});var gt=i(O);ae=r(gt,"LI",{});var gn=i(ae);ze=n(gn,`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),x=r(gn,"A",{href:!0,rel:!0});var Ds=i(x);je=n(Ds,"original implementation"),Ds.forEach(t),Q=n(gn,` for
more information.`),gn.forEach(t),xe=u(gt),he=r(gt,"LI",{});var As=i(he);Y=n(As,`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),As.forEach(t),Pe=u(gt),re=r(gt,"LI",{});var _n=i(re);U=n(_n,`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),ue=r(_n,"EM",{});var Kl=i(ue);Z=n(Kl,"run_generation.py"),Kl.forEach(t),Oe=n(_n," example script."),_n.forEach(t),le=u(gt),z=r(gt,"LI",{});var vt=i(z);Se=n(vt,"The PyTorch models can take the "),S=r(vt,"CODE",{});var Vl=i(S);Ne=n(Vl,"past_key_values"),Vl.forEach(t),Ie=n(vt,` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),_=r(vt,"CODE",{});var Gl=i(_);M=n(Gl,"past"),Gl.forEach(t),Ze=n(vt," as input. Using the "),ne=r(vt,"CODE",{});var Xl=i(ne);et=n(Xl,"past_key_values"),Xl.forEach(t),tt=n(vt,` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),E=r(vt,"A",{href:!0});var Jl=i(E);Be=r(Jl,"CODE",{});var Ql=i(Be);ot=n(Ql,"forward"),Ql.forEach(t),Jl.forEach(t),nt=n(vt,`
method for more information on the usage of this argument.`),vt.forEach(t),gt.forEach(t),Xe=u(s),ie=r(s,"P",{});var In=i(ie);B=n(In,"This model was contributed by "),D=r(In,"A",{href:!0,rel:!0});var Yl=i(D);st=n(Yl,"keskarnitishr"),Yl.forEach(t),at=n(In,`. The original code can be found
`),A=r(In,"A",{href:!0,rel:!0});var Zl=i(A);rt=n(Zl,"here"),Zl.forEach(t),it=n(In,"."),In.forEach(t),ke=u(s),de=r(s,"H2",{class:!0});var sa=i(de);V=r(sa,"A",{id:!0,class:!0,href:!0});var ed=i(V);Ke=r(ed,"SPAN",{});var td=i(Ke);w(Co.$$.fragment,td),td.forEach(t),ed.forEach(t),$a=u(sa),Vn=r(sa,"SPAN",{});var od=i(Vn);La=n(od,"CTRLConfig"),od.forEach(t),sa.forEach(t),Hs=u(s),Je=r(s,"DIV",{class:!0});var _o=i(Je);w($o.$$.fragment,_o),Ra=u(_o),ft=r(_o,"P",{});var To=i(ft);Ma=n(To,"This is the configuration class to store the configuration of a "),Tn=r(To,"A",{href:!0});var nd=i(Tn);Ea=n(nd,"CTRLModel"),nd.forEach(t),Fa=n(To," or a "),yn=r(To,"A",{href:!0});var sd=i(yn);qa=n(sd,"TFCTRLModel"),sd.forEach(t),za=n(To,`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Lo=r(To,"A",{href:!0,rel:!0});var ad=i(Lo);ja=n(ad,"ctrl"),ad.forEach(t),xa=n(To," architecture from SalesForce."),To.forEach(t),Pa=u(_o),Rt=r(_o,"P",{});var Dn=i(Rt);Oa=n(Dn,"Configuration objects inherit from "),vn=r(Dn,"A",{href:!0});var rd=i(vn);Sa=n(rd,"PretrainedConfig"),rd.forEach(t),Na=n(Dn,` and can be used to control the model outputs. Read the
documentation from `),bn=r(Dn,"A",{href:!0});var id=i(bn);Ia=n(id,"PretrainedConfig"),id.forEach(t),Da=n(Dn," for more information."),Dn.forEach(t),Aa=u(_o),w(Wt.$$.fragment,_o),_o.forEach(t),Ws=u(s),Mt=r(s,"H2",{class:!0});var aa=i(Mt);Ut=r(aa,"A",{id:!0,class:!0,href:!0});var ld=i(Ut);Gn=r(ld,"SPAN",{});var dd=i(Gn);w(Ro.$$.fragment,dd),dd.forEach(t),ld.forEach(t),Ha=u(aa),Xn=r(aa,"SPAN",{});var cd=i(Xn);Wa=n(cd,"CTRLTokenizer"),cd.forEach(t),aa.forEach(t),Us=u(s),Qe=r(s,"DIV",{class:!0});var yo=i(Qe);w(Mo.$$.fragment,yo),Ua=u(yo),Jn=r(yo,"P",{});var pd=i(Jn);Ba=n(pd,"Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),pd.forEach(t),Ka=u(yo),Eo=r(yo,"P",{});var ra=i(Eo);Va=n(ra,"This tokenizer inherits from "),kn=r(ra,"A",{href:!0});var hd=i(kn);Ga=n(hd,"PreTrainedTokenizer"),hd.forEach(t),Xa=n(ra,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ra.forEach(t),Ja=u(yo),wn=r(yo,"DIV",{class:!0});var ud=i(wn);w(Fo.$$.fragment,ud),ud.forEach(t),yo.forEach(t),Bs=u(s),Et=r(s,"H2",{class:!0});var ia=i(Et);Bt=r(ia,"A",{id:!0,class:!0,href:!0});var md=i(Bt);Qn=r(md,"SPAN",{});var fd=i(Qn);w(qo.$$.fragment,fd),fd.forEach(t),md.forEach(t),Qa=u(ia),Yn=r(ia,"SPAN",{});var gd=i(Yn);Ya=n(gd,"CTRLModel"),gd.forEach(t),ia.forEach(t),Ks=u(s),De=r(s,"DIV",{class:!0});var bt=i(De);w(zo.$$.fragment,bt),Za=u(bt),Zn=r(bt,"P",{});var _d=i(Zn);er=n(_d,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),_d.forEach(t),tr=u(bt),jo=r(bt,"P",{});var la=i(jo);or=n(la,"This model inherits from "),Cn=r(la,"A",{href:!0});var Td=i(Cn);nr=n(Td,"PreTrainedModel"),Td.forEach(t),sr=n(la,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),la.forEach(t),ar=u(bt),xo=r(bt,"P",{});var da=i(xo);rr=n(da,"This model is also a PyTorch "),Po=r(da,"A",{href:!0,rel:!0});var yd=i(Po);ir=n(yd,"torch.nn.Module"),yd.forEach(t),lr=n(da,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),da.forEach(t),dr=u(bt),lt=r(bt,"DIV",{class:!0});var vo=i(lt);w(Oo.$$.fragment,vo),cr=u(vo),Ft=r(vo,"P",{});var An=i(Ft);pr=n(An,"The "),$n=r(An,"A",{href:!0});var vd=i($n);hr=n(vd,"CTRLModel"),vd.forEach(t),ur=n(An," forward method, overrides the "),es=r(An,"CODE",{});var bd=i(es);mr=n(bd,"__call__"),bd.forEach(t),fr=n(An," special method."),An.forEach(t),gr=u(vo),w(Kt.$$.fragment,vo),_r=u(vo),w(Vt.$$.fragment,vo),vo.forEach(t),bt.forEach(t),Vs=u(s),qt=r(s,"H2",{class:!0});var ca=i(qt);Gt=r(ca,"A",{id:!0,class:!0,href:!0});var kd=i(Gt);ts=r(kd,"SPAN",{});var wd=i(ts);w(So.$$.fragment,wd),wd.forEach(t),kd.forEach(t),Tr=u(ca),os=r(ca,"SPAN",{});var Cd=i(os);yr=n(Cd,"CTRLLMHeadModel"),Cd.forEach(t),ca.forEach(t),Gs=u(s),Ae=r(s,"DIV",{class:!0});var kt=i(Ae);w(No.$$.fragment,kt),vr=u(kt),ns=r(kt,"P",{});var $d=i(ns);br=n($d,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),$d.forEach(t),kr=u(kt),Io=r(kt,"P",{});var pa=i(Io);wr=n(pa,"This model inherits from "),Ln=r(pa,"A",{href:!0});var Ld=i(Ln);Cr=n(Ld,"PreTrainedModel"),Ld.forEach(t),$r=n(pa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pa.forEach(t),Lr=u(kt),Do=r(kt,"P",{});var ha=i(Do);Rr=n(ha,"This model is also a PyTorch "),Ao=r(ha,"A",{href:!0,rel:!0});var Rd=i(Ao);Mr=n(Rd,"torch.nn.Module"),Rd.forEach(t),Er=n(ha,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ha.forEach(t),Fr=u(kt),dt=r(kt,"DIV",{class:!0});var bo=i(dt);w(Ho.$$.fragment,bo),qr=u(bo),zt=r(bo,"P",{});var Hn=i(zt);zr=n(Hn,"The "),Rn=r(Hn,"A",{href:!0});var Md=i(Rn);jr=n(Md,"CTRLLMHeadModel"),Md.forEach(t),xr=n(Hn," forward method, overrides the "),ss=r(Hn,"CODE",{});var Ed=i(ss);Pr=n(Ed,"__call__"),Ed.forEach(t),Or=n(Hn," special method."),Hn.forEach(t),Sr=u(bo),w(Xt.$$.fragment,bo),Nr=u(bo),w(Jt.$$.fragment,bo),bo.forEach(t),kt.forEach(t),Xs=u(s),jt=r(s,"H2",{class:!0});var ua=i(jt);Qt=r(ua,"A",{id:!0,class:!0,href:!0});var Fd=i(Qt);as=r(Fd,"SPAN",{});var qd=i(as);w(Wo.$$.fragment,qd),qd.forEach(t),Fd.forEach(t),Ir=u(ua),rs=r(ua,"SPAN",{});var zd=i(rs);Dr=n(zd,"CTRLForSequenceClassification"),zd.forEach(t),ua.forEach(t),Js=u(s),He=r(s,"DIV",{class:!0});var wt=i(He);w(Uo.$$.fragment,wt),Ar=u(wt),We=r(wt,"P",{});var ht=i(We);Hr=n(ht,`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),Mn=r(ht,"A",{href:!0});var jd=i(Mn);Wr=n(jd,"CTRLForSequenceClassification"),jd.forEach(t),Ur=n(ht,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),is=r(ht,"CODE",{});var xd=i(is);Br=n(xd,"pad_token_id"),xd.forEach(t),Kr=n(ht,` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),ls=r(ht,"CODE",{});var Pd=i(ls);Vr=n(Pd,"pad_token_id"),Pd.forEach(t),Gr=n(ht,` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),ds=r(ht,"CODE",{});var Od=i(ds);Xr=n(Od,"inputs_embeds"),Od.forEach(t),Jr=n(ht," are passed instead of "),cs=r(ht,"CODE",{});var Sd=i(cs);Qr=n(Sd,"input_ids"),Sd.forEach(t),Yr=n(ht,`, it does the same (take the last
value in each row of the batch).`),ht.forEach(t),Zr=u(wt),Bo=r(wt,"P",{});var ma=i(Bo);ei=n(ma,"This model inherits from "),En=r(ma,"A",{href:!0});var Nd=i(En);ti=n(Nd,"PreTrainedModel"),Nd.forEach(t),oi=n(ma,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ma.forEach(t),ni=u(wt),Ko=r(wt,"P",{});var fa=i(Ko);si=n(fa,"This model is also a PyTorch "),Vo=r(fa,"A",{href:!0,rel:!0});var Id=i(Vo);ai=n(Id,"torch.nn.Module"),Id.forEach(t),ri=n(fa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fa.forEach(t),ii=u(wt),ce=r(wt,"DIV",{class:!0});var Ge=i(ce);w(Go.$$.fragment,Ge),li=u(Ge),xt=r(Ge,"P",{});var Wn=i(xt);di=n(Wn,"The "),Fn=r(Wn,"A",{href:!0});var Dd=i(Fn);ci=n(Dd,"CTRLForSequenceClassification"),Dd.forEach(t),pi=n(Wn," forward method, overrides the "),ps=r(Wn,"CODE",{});var Ad=i(ps);hi=n(Ad,"__call__"),Ad.forEach(t),ui=n(Wn," special method."),Wn.forEach(t),mi=u(Ge),w(Yt.$$.fragment,Ge),fi=u(Ge),w(Zt.$$.fragment,Ge),gi=u(Ge),w(eo.$$.fragment,Ge),_i=u(Ge),w(to.$$.fragment,Ge),Ti=u(Ge),w(oo.$$.fragment,Ge),Ge.forEach(t),wt.forEach(t),Qs=u(s),Pt=r(s,"H2",{class:!0});var ga=i(Pt);no=r(ga,"A",{id:!0,class:!0,href:!0});var Hd=i(no);hs=r(Hd,"SPAN",{});var Wd=i(hs);w(Xo.$$.fragment,Wd),Wd.forEach(t),Hd.forEach(t),yi=u(ga),us=r(ga,"SPAN",{});var Ud=i(us);vi=n(Ud,"TFCTRLModel"),Ud.forEach(t),ga.forEach(t),Ys=u(s),me=r(s,"DIV",{class:!0});var ut=i(me);w(Jo.$$.fragment,ut),bi=u(ut),ms=r(ut,"P",{});var Bd=i(ms);ki=n(Bd,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Bd.forEach(t),wi=u(ut),Qo=r(ut,"P",{});var _a=i(Qo);Ci=n(_a,"This model inherits from "),qn=r(_a,"A",{href:!0});var Kd=i(qn);$i=n(Kd,"TFPreTrainedModel"),Kd.forEach(t),Li=n(_a,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_a.forEach(t),Ri=u(ut),Yo=r(ut,"P",{});var Ta=i(Yo);Mi=n(Ta,"This model is also a "),Zo=r(Ta,"A",{href:!0,rel:!0});var Vd=i(Zo);Ei=n(Vd,"tf.keras.Model"),Vd.forEach(t),Fi=n(Ta,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ta.forEach(t),qi=u(ut),w(so.$$.fragment,ut),zi=u(ut),ct=r(ut,"DIV",{class:!0});var ko=i(ct);w(en.$$.fragment,ko),ji=u(ko),Ot=r(ko,"P",{});var Un=i(Ot);xi=n(Un,"The "),zn=r(Un,"A",{href:!0});var Gd=i(zn);Pi=n(Gd,"TFCTRLModel"),Gd.forEach(t),Oi=n(Un," forward method, overrides the "),fs=r(Un,"CODE",{});var Xd=i(fs);Si=n(Xd,"__call__"),Xd.forEach(t),Ni=n(Un," special method."),Un.forEach(t),Ii=u(ko),w(ao.$$.fragment,ko),Di=u(ko),w(ro.$$.fragment,ko),ko.forEach(t),ut.forEach(t),Zs=u(s),St=r(s,"H2",{class:!0});var ya=i(St);io=r(ya,"A",{id:!0,class:!0,href:!0});var Jd=i(io);gs=r(Jd,"SPAN",{});var Qd=i(gs);w(tn.$$.fragment,Qd),Qd.forEach(t),Jd.forEach(t),Ai=u(ya),_s=r(ya,"SPAN",{});var Yd=i(_s);Hi=n(Yd,"TFCTRLLMHeadModel"),Yd.forEach(t),ya.forEach(t),ea=u(s),fe=r(s,"DIV",{class:!0});var mt=i(fe);w(on.$$.fragment,mt),Wi=u(mt),Ts=r(mt,"P",{});var Zd=i(Ts);Ui=n(Zd,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Zd.forEach(t),Bi=u(mt),nn=r(mt,"P",{});var va=i(nn);Ki=n(va,"This model inherits from "),jn=r(va,"A",{href:!0});var ec=i(jn);Vi=n(ec,"TFPreTrainedModel"),ec.forEach(t),Gi=n(va,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),va.forEach(t),Xi=u(mt),sn=r(mt,"P",{});var ba=i(sn);Ji=n(ba,"This model is also a "),an=r(ba,"A",{href:!0,rel:!0});var tc=i(an);Qi=n(tc,"tf.keras.Model"),tc.forEach(t),Yi=n(ba,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ba.forEach(t),Zi=u(mt),w(lo.$$.fragment,mt),el=u(mt),pt=r(mt,"DIV",{class:!0});var wo=i(pt);w(rn.$$.fragment,wo),tl=u(wo),Nt=r(wo,"P",{});var Bn=i(Nt);ol=n(Bn,"The "),xn=r(Bn,"A",{href:!0});var oc=i(xn);nl=n(oc,"TFCTRLLMHeadModel"),oc.forEach(t),sl=n(Bn," forward method, overrides the "),ys=r(Bn,"CODE",{});var nc=i(ys);al=n(nc,"__call__"),nc.forEach(t),rl=n(Bn," special method."),Bn.forEach(t),il=u(wo),w(co.$$.fragment,wo),ll=u(wo),w(po.$$.fragment,wo),wo.forEach(t),mt.forEach(t),ta=u(s),It=r(s,"H2",{class:!0});var ka=i(It);ho=r(ka,"A",{id:!0,class:!0,href:!0});var sc=i(ho);vs=r(sc,"SPAN",{});var ac=i(vs);w(ln.$$.fragment,ac),ac.forEach(t),sc.forEach(t),dl=u(ka),bs=r(ka,"SPAN",{});var rc=i(bs);cl=n(rc,"TFCTRLForSequenceClassification"),rc.forEach(t),ka.forEach(t),oa=u(s),ee=r(s,"DIV",{class:!0});var we=i(ee);w(dn.$$.fragment,we),pl=u(we),ks=r(we,"P",{});var ic=i(ks);hl=n(ic,"The CTRL Model transformer with a sequence classification head on top (linear layer)."),ic.forEach(t),ul=u(we),Pn=r(we,"P",{});var Bl=i(Pn);On=r(Bl,"A",{href:!0});var lc=i(On);ml=n(lc,"TFCTRLForSequenceClassification"),lc.forEach(t),fl=n(Bl,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),Bl.forEach(t),gl=u(we),Ye=r(we,"P",{});var Ct=i(Ye);_l=n(Ct,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ws=r(Ct,"CODE",{});var dc=i(ws);Tl=n(dc,"pad_token_id"),dc.forEach(t),yl=n(Ct,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Cs=r(Ct,"CODE",{});var cc=i(Cs);vl=n(cc,"pad_token_id"),cc.forEach(t),bl=n(Ct,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),$s=r(Ct,"CODE",{});var pc=i($s);kl=n(pc,"inputs_embeds"),pc.forEach(t),wl=n(Ct," are passed instead of "),Ls=r(Ct,"CODE",{});var hc=i(Ls);Cl=n(hc,"input_ids"),hc.forEach(t),$l=n(Ct,`, it does the same (take the last value in
each row of the batch).`),Ct.forEach(t),Ll=u(we),cn=r(we,"P",{});var wa=i(cn);Rl=n(wa,"This model inherits from "),Sn=r(wa,"A",{href:!0});var uc=i(Sn);Ml=n(uc,"TFPreTrainedModel"),uc.forEach(t),El=n(wa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wa.forEach(t),Fl=u(we),pn=r(we,"P",{});var Ca=i(pn);ql=n(Ca,"This model is also a "),hn=r(Ca,"A",{href:!0,rel:!0});var mc=i(hn);zl=n(mc,"tf.keras.Model"),mc.forEach(t),jl=n(Ca,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ca.forEach(t),xl=u(we),w(uo.$$.fragment,we),Pl=u(we),Ve=r(we,"DIV",{class:!0});var $t=i(Ve);w(un.$$.fragment,$t),Ol=u($t),Dt=r($t,"P",{});var Kn=i(Dt);Sl=n(Kn,"The "),Nn=r(Kn,"A",{href:!0});var fc=i(Nn);Nl=n(fc,"TFCTRLForSequenceClassification"),fc.forEach(t),Il=n(Kn," forward method, overrides the "),Rs=r(Kn,"CODE",{});var gc=i(Rs);Dl=n(gc,"__call__"),gc.forEach(t),Al=n(Kn," special method."),Kn.forEach(t),Hl=u($t),w(mo.$$.fragment,$t),Wl=u($t),w(fo.$$.fragment,$t),Ul=u($t),w(go.$$.fragment,$t),$t.forEach(t),we.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Wc)),f(m,"id","ctrl"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#ctrl"),f(c,"class","relative group"),f(te,"id","overview"),f(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(te,"href","#overview"),f(I,"class","relative group"),f(se,"href","https://arxiv.org/abs/1909.05858"),f(se,"rel","nofollow"),f(x,"href","https://github.com/salesforce/ctrl"),f(x,"rel","nofollow"),f(E,"href","model_doc/ctrl#transformers.CTRLModel.forward"),f(D,"href","https://huggingface.co/keskarnitishr"),f(D,"rel","nofollow"),f(A,"href","https://github.com/salesforce/ctrl"),f(A,"rel","nofollow"),f(V,"id","transformers.CTRLConfig"),f(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(V,"href","#transformers.CTRLConfig"),f(de,"class","relative group"),f(Tn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLModel"),f(yn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLModel"),f(Lo,"href","https://huggingface.co/ctrl"),f(Lo,"rel","nofollow"),f(vn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(bn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ut,"id","transformers.CTRLTokenizer"),f(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ut,"href","#transformers.CTRLTokenizer"),f(Mt,"class","relative group"),f(kn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bt,"id","transformers.CTRLModel"),f(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Bt,"href","#transformers.CTRLModel"),f(Et,"class","relative group"),f(Cn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Po,"rel","nofollow"),f($n,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLModel"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gt,"id","transformers.CTRLLMHeadModel"),f(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Gt,"href","#transformers.CTRLLMHeadModel"),f(qt,"class","relative group"),f(Ln,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ao,"rel","nofollow"),f(Rn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLLMHeadModel"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qt,"id","transformers.CTRLForSequenceClassification"),f(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qt,"href","#transformers.CTRLForSequenceClassification"),f(jt,"class","relative group"),f(Mn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),f(En,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Vo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Vo,"rel","nofollow"),f(Fn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),f(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(no,"id","transformers.TFCTRLModel"),f(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(no,"href","#transformers.TFCTRLModel"),f(Pt,"class","relative group"),f(qn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Zo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Zo,"rel","nofollow"),f(zn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLModel"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(io,"id","transformers.TFCTRLLMHeadModel"),f(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(io,"href","#transformers.TFCTRLLMHeadModel"),f(St,"class","relative group"),f(jn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(an,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(an,"rel","nofollow"),f(xn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLLMHeadModel"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ho,"id","transformers.TFCTRLForSequenceClassification"),f(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ho,"href","#transformers.TFCTRLForSequenceClassification"),f(It,"class","relative group"),f(On,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),f(Sn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(hn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(hn,"rel","nofollow"),f(Nn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),f(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,T){e(document.head,d),g(s,y,T),g(s,c,T),e(c,m),e(m,v),C(l,v,null),e(c,p),e(c,q),e(q,Ce),g(s,ge,T),g(s,I,T),e(I,te),e(te,oe),C(b,oe,null),e(I,$e),e(I,K),e(K,Le),g(s,_e,T),g(s,N,T),e(N,Re),e(N,se),e(se,G),e(N,Me),e(N,pe),e(pe,X),e(N,Ee),g(s,Te,T),g(s,H,T),e(H,Fe),g(s,ye,T),g(s,J,T),e(J,j),e(j,P),g(s,ve,T),g(s,W,T),e(W,qe),g(s,be,T),g(s,O,T),e(O,ae),e(ae,ze),e(ae,x),e(x,je),e(ae,Q),e(O,xe),e(O,he),e(he,Y),e(O,Pe),e(O,re),e(re,U),e(re,ue),e(ue,Z),e(re,Oe),e(O,le),e(O,z),e(z,Se),e(z,S),e(S,Ne),e(z,Ie),e(z,_),e(_,M),e(z,Ze),e(z,ne),e(ne,et),e(z,tt),e(z,E),e(E,Be),e(Be,ot),e(z,nt),g(s,Xe,T),g(s,ie,T),e(ie,B),e(ie,D),e(D,st),e(ie,at),e(ie,A),e(A,rt),e(ie,it),g(s,ke,T),g(s,de,T),e(de,V),e(V,Ke),C(Co,Ke,null),e(de,$a),e(de,Vn),e(Vn,La),g(s,Hs,T),g(s,Je,T),C($o,Je,null),e(Je,Ra),e(Je,ft),e(ft,Ma),e(ft,Tn),e(Tn,Ea),e(ft,Fa),e(ft,yn),e(yn,qa),e(ft,za),e(ft,Lo),e(Lo,ja),e(ft,xa),e(Je,Pa),e(Je,Rt),e(Rt,Oa),e(Rt,vn),e(vn,Sa),e(Rt,Na),e(Rt,bn),e(bn,Ia),e(Rt,Da),e(Je,Aa),C(Wt,Je,null),g(s,Ws,T),g(s,Mt,T),e(Mt,Ut),e(Ut,Gn),C(Ro,Gn,null),e(Mt,Ha),e(Mt,Xn),e(Xn,Wa),g(s,Us,T),g(s,Qe,T),C(Mo,Qe,null),e(Qe,Ua),e(Qe,Jn),e(Jn,Ba),e(Qe,Ka),e(Qe,Eo),e(Eo,Va),e(Eo,kn),e(kn,Ga),e(Eo,Xa),e(Qe,Ja),e(Qe,wn),C(Fo,wn,null),g(s,Bs,T),g(s,Et,T),e(Et,Bt),e(Bt,Qn),C(qo,Qn,null),e(Et,Qa),e(Et,Yn),e(Yn,Ya),g(s,Ks,T),g(s,De,T),C(zo,De,null),e(De,Za),e(De,Zn),e(Zn,er),e(De,tr),e(De,jo),e(jo,or),e(jo,Cn),e(Cn,nr),e(jo,sr),e(De,ar),e(De,xo),e(xo,rr),e(xo,Po),e(Po,ir),e(xo,lr),e(De,dr),e(De,lt),C(Oo,lt,null),e(lt,cr),e(lt,Ft),e(Ft,pr),e(Ft,$n),e($n,hr),e(Ft,ur),e(Ft,es),e(es,mr),e(Ft,fr),e(lt,gr),C(Kt,lt,null),e(lt,_r),C(Vt,lt,null),g(s,Vs,T),g(s,qt,T),e(qt,Gt),e(Gt,ts),C(So,ts,null),e(qt,Tr),e(qt,os),e(os,yr),g(s,Gs,T),g(s,Ae,T),C(No,Ae,null),e(Ae,vr),e(Ae,ns),e(ns,br),e(Ae,kr),e(Ae,Io),e(Io,wr),e(Io,Ln),e(Ln,Cr),e(Io,$r),e(Ae,Lr),e(Ae,Do),e(Do,Rr),e(Do,Ao),e(Ao,Mr),e(Do,Er),e(Ae,Fr),e(Ae,dt),C(Ho,dt,null),e(dt,qr),e(dt,zt),e(zt,zr),e(zt,Rn),e(Rn,jr),e(zt,xr),e(zt,ss),e(ss,Pr),e(zt,Or),e(dt,Sr),C(Xt,dt,null),e(dt,Nr),C(Jt,dt,null),g(s,Xs,T),g(s,jt,T),e(jt,Qt),e(Qt,as),C(Wo,as,null),e(jt,Ir),e(jt,rs),e(rs,Dr),g(s,Js,T),g(s,He,T),C(Uo,He,null),e(He,Ar),e(He,We),e(We,Hr),e(We,Mn),e(Mn,Wr),e(We,Ur),e(We,is),e(is,Br),e(We,Kr),e(We,ls),e(ls,Vr),e(We,Gr),e(We,ds),e(ds,Xr),e(We,Jr),e(We,cs),e(cs,Qr),e(We,Yr),e(He,Zr),e(He,Bo),e(Bo,ei),e(Bo,En),e(En,ti),e(Bo,oi),e(He,ni),e(He,Ko),e(Ko,si),e(Ko,Vo),e(Vo,ai),e(Ko,ri),e(He,ii),e(He,ce),C(Go,ce,null),e(ce,li),e(ce,xt),e(xt,di),e(xt,Fn),e(Fn,ci),e(xt,pi),e(xt,ps),e(ps,hi),e(xt,ui),e(ce,mi),C(Yt,ce,null),e(ce,fi),C(Zt,ce,null),e(ce,gi),C(eo,ce,null),e(ce,_i),C(to,ce,null),e(ce,Ti),C(oo,ce,null),g(s,Qs,T),g(s,Pt,T),e(Pt,no),e(no,hs),C(Xo,hs,null),e(Pt,yi),e(Pt,us),e(us,vi),g(s,Ys,T),g(s,me,T),C(Jo,me,null),e(me,bi),e(me,ms),e(ms,ki),e(me,wi),e(me,Qo),e(Qo,Ci),e(Qo,qn),e(qn,$i),e(Qo,Li),e(me,Ri),e(me,Yo),e(Yo,Mi),e(Yo,Zo),e(Zo,Ei),e(Yo,Fi),e(me,qi),C(so,me,null),e(me,zi),e(me,ct),C(en,ct,null),e(ct,ji),e(ct,Ot),e(Ot,xi),e(Ot,zn),e(zn,Pi),e(Ot,Oi),e(Ot,fs),e(fs,Si),e(Ot,Ni),e(ct,Ii),C(ao,ct,null),e(ct,Di),C(ro,ct,null),g(s,Zs,T),g(s,St,T),e(St,io),e(io,gs),C(tn,gs,null),e(St,Ai),e(St,_s),e(_s,Hi),g(s,ea,T),g(s,fe,T),C(on,fe,null),e(fe,Wi),e(fe,Ts),e(Ts,Ui),e(fe,Bi),e(fe,nn),e(nn,Ki),e(nn,jn),e(jn,Vi),e(nn,Gi),e(fe,Xi),e(fe,sn),e(sn,Ji),e(sn,an),e(an,Qi),e(sn,Yi),e(fe,Zi),C(lo,fe,null),e(fe,el),e(fe,pt),C(rn,pt,null),e(pt,tl),e(pt,Nt),e(Nt,ol),e(Nt,xn),e(xn,nl),e(Nt,sl),e(Nt,ys),e(ys,al),e(Nt,rl),e(pt,il),C(co,pt,null),e(pt,ll),C(po,pt,null),g(s,ta,T),g(s,It,T),e(It,ho),e(ho,vs),C(ln,vs,null),e(It,dl),e(It,bs),e(bs,cl),g(s,oa,T),g(s,ee,T),C(dn,ee,null),e(ee,pl),e(ee,ks),e(ks,hl),e(ee,ul),e(ee,Pn),e(Pn,On),e(On,ml),e(Pn,fl),e(ee,gl),e(ee,Ye),e(Ye,_l),e(Ye,ws),e(ws,Tl),e(Ye,yl),e(Ye,Cs),e(Cs,vl),e(Ye,bl),e(Ye,$s),e($s,kl),e(Ye,wl),e(Ye,Ls),e(Ls,Cl),e(Ye,$l),e(ee,Ll),e(ee,cn),e(cn,Rl),e(cn,Sn),e(Sn,Ml),e(cn,El),e(ee,Fl),e(ee,pn),e(pn,ql),e(pn,hn),e(hn,zl),e(pn,jl),e(ee,xl),C(uo,ee,null),e(ee,Pl),e(ee,Ve),C(un,Ve,null),e(Ve,Ol),e(Ve,Dt),e(Dt,Sl),e(Dt,Nn),e(Nn,Nl),e(Dt,Il),e(Dt,Rs),e(Rs,Dl),e(Dt,Al),e(Ve,Hl),C(mo,Ve,null),e(Ve,Wl),C(fo,Ve,null),e(Ve,Ul),C(go,Ve,null),na=!0},p(s,[T]){const mn={};T&2&&(mn.$$scope={dirty:T,ctx:s}),Wt.$set(mn);const Ms={};T&2&&(Ms.$$scope={dirty:T,ctx:s}),Kt.$set(Ms);const Es={};T&2&&(Es.$$scope={dirty:T,ctx:s}),Vt.$set(Es);const Fs={};T&2&&(Fs.$$scope={dirty:T,ctx:s}),Xt.$set(Fs);const fn={};T&2&&(fn.$$scope={dirty:T,ctx:s}),Jt.$set(fn);const qs={};T&2&&(qs.$$scope={dirty:T,ctx:s}),Yt.$set(qs);const zs={};T&2&&(zs.$$scope={dirty:T,ctx:s}),Zt.$set(zs);const js={};T&2&&(js.$$scope={dirty:T,ctx:s}),eo.$set(js);const At={};T&2&&(At.$$scope={dirty:T,ctx:s}),to.$set(At);const xs={};T&2&&(xs.$$scope={dirty:T,ctx:s}),oo.$set(xs);const Ps={};T&2&&(Ps.$$scope={dirty:T,ctx:s}),so.$set(Ps);const Os={};T&2&&(Os.$$scope={dirty:T,ctx:s}),ao.$set(Os);const Ss={};T&2&&(Ss.$$scope={dirty:T,ctx:s}),ro.$set(Ss);const Ns={};T&2&&(Ns.$$scope={dirty:T,ctx:s}),lo.$set(Ns);const Is={};T&2&&(Is.$$scope={dirty:T,ctx:s}),co.$set(Is);const gt={};T&2&&(gt.$$scope={dirty:T,ctx:s}),po.$set(gt);const gn={};T&2&&(gn.$$scope={dirty:T,ctx:s}),uo.$set(gn);const Ds={};T&2&&(Ds.$$scope={dirty:T,ctx:s}),mo.$set(Ds);const As={};T&2&&(As.$$scope={dirty:T,ctx:s}),fo.$set(As);const _n={};T&2&&(_n.$$scope={dirty:T,ctx:s}),go.$set(_n)},i(s){na||($(l.$$.fragment,s),$(b.$$.fragment,s),$(Co.$$.fragment,s),$($o.$$.fragment,s),$(Wt.$$.fragment,s),$(Ro.$$.fragment,s),$(Mo.$$.fragment,s),$(Fo.$$.fragment,s),$(qo.$$.fragment,s),$(zo.$$.fragment,s),$(Oo.$$.fragment,s),$(Kt.$$.fragment,s),$(Vt.$$.fragment,s),$(So.$$.fragment,s),$(No.$$.fragment,s),$(Ho.$$.fragment,s),$(Xt.$$.fragment,s),$(Jt.$$.fragment,s),$(Wo.$$.fragment,s),$(Uo.$$.fragment,s),$(Go.$$.fragment,s),$(Yt.$$.fragment,s),$(Zt.$$.fragment,s),$(eo.$$.fragment,s),$(to.$$.fragment,s),$(oo.$$.fragment,s),$(Xo.$$.fragment,s),$(Jo.$$.fragment,s),$(so.$$.fragment,s),$(en.$$.fragment,s),$(ao.$$.fragment,s),$(ro.$$.fragment,s),$(tn.$$.fragment,s),$(on.$$.fragment,s),$(lo.$$.fragment,s),$(rn.$$.fragment,s),$(co.$$.fragment,s),$(po.$$.fragment,s),$(ln.$$.fragment,s),$(dn.$$.fragment,s),$(uo.$$.fragment,s),$(un.$$.fragment,s),$(mo.$$.fragment,s),$(fo.$$.fragment,s),$(go.$$.fragment,s),na=!0)},o(s){L(l.$$.fragment,s),L(b.$$.fragment,s),L(Co.$$.fragment,s),L($o.$$.fragment,s),L(Wt.$$.fragment,s),L(Ro.$$.fragment,s),L(Mo.$$.fragment,s),L(Fo.$$.fragment,s),L(qo.$$.fragment,s),L(zo.$$.fragment,s),L(Oo.$$.fragment,s),L(Kt.$$.fragment,s),L(Vt.$$.fragment,s),L(So.$$.fragment,s),L(No.$$.fragment,s),L(Ho.$$.fragment,s),L(Xt.$$.fragment,s),L(Jt.$$.fragment,s),L(Wo.$$.fragment,s),L(Uo.$$.fragment,s),L(Go.$$.fragment,s),L(Yt.$$.fragment,s),L(Zt.$$.fragment,s),L(eo.$$.fragment,s),L(to.$$.fragment,s),L(oo.$$.fragment,s),L(Xo.$$.fragment,s),L(Jo.$$.fragment,s),L(so.$$.fragment,s),L(en.$$.fragment,s),L(ao.$$.fragment,s),L(ro.$$.fragment,s),L(tn.$$.fragment,s),L(on.$$.fragment,s),L(lo.$$.fragment,s),L(rn.$$.fragment,s),L(co.$$.fragment,s),L(po.$$.fragment,s),L(ln.$$.fragment,s),L(dn.$$.fragment,s),L(uo.$$.fragment,s),L(un.$$.fragment,s),L(mo.$$.fragment,s),L(fo.$$.fragment,s),L(go.$$.fragment,s),na=!1},d(s){t(d),s&&t(y),s&&t(c),R(l),s&&t(ge),s&&t(I),R(b),s&&t(_e),s&&t(N),s&&t(Te),s&&t(H),s&&t(ye),s&&t(J),s&&t(ve),s&&t(W),s&&t(be),s&&t(O),s&&t(Xe),s&&t(ie),s&&t(ke),s&&t(de),R(Co),s&&t(Hs),s&&t(Je),R($o),R(Wt),s&&t(Ws),s&&t(Mt),R(Ro),s&&t(Us),s&&t(Qe),R(Mo),R(Fo),s&&t(Bs),s&&t(Et),R(qo),s&&t(Ks),s&&t(De),R(zo),R(Oo),R(Kt),R(Vt),s&&t(Vs),s&&t(qt),R(So),s&&t(Gs),s&&t(Ae),R(No),R(Ho),R(Xt),R(Jt),s&&t(Xs),s&&t(jt),R(Wo),s&&t(Js),s&&t(He),R(Uo),R(Go),R(Yt),R(Zt),R(eo),R(to),R(oo),s&&t(Qs),s&&t(Pt),R(Xo),s&&t(Ys),s&&t(me),R(Jo),R(so),R(en),R(ao),R(ro),s&&t(Zs),s&&t(St),R(tn),s&&t(ea),s&&t(fe),R(on),R(lo),R(rn),R(co),R(po),s&&t(ta),s&&t(It),R(ln),s&&t(oa),s&&t(ee),R(dn),R(uo),R(un),R(mo),R(fo),R(go)}}}const Wc={local:"ctrl",sections:[{local:"overview",title:"Overview"},{local:"transformers.CTRLConfig",title:"CTRLConfig"},{local:"transformers.CTRLTokenizer",title:"CTRLTokenizer"},{local:"transformers.CTRLModel",title:"CTRLModel"},{local:"transformers.CTRLLMHeadModel",title:"CTRLLMHeadModel"},{local:"transformers.CTRLForSequenceClassification",title:"CTRLForSequenceClassification"},{local:"transformers.TFCTRLModel",title:"TFCTRLModel"},{local:"transformers.TFCTRLLMHeadModel",title:"TFCTRLLMHeadModel"},{local:"transformers.TFCTRLForSequenceClassification",title:"TFCTRLForSequenceClassification"}],title:"CTRL"};function Uc(F){return bc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qc extends _c{constructor(d){super();Tc(this,d,Uc,Hc,yc,{})}}export{Qc as default,Wc as metadata};
