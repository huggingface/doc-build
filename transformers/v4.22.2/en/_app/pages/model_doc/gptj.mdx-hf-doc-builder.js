import{S as lm,i as dm,s as cm,e as a,k as h,w,t as n,M as pm,c as r,d as t,m as u,a as i,x as k,h as s,b as m,G as e,g,y as b,q as $,o as P,B as F,v as hm,L as Ke}from"../../chunks/vendor-hf-doc-builder.js";import{T as ht}from"../../chunks/Tip-hf-doc-builder.js";import{D as me}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ke}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ut}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as He}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function um(G){let d,T,c,f,v;return f=new ke({props:{code:`from transformers import GPTJModel, GPTJConfig

# Initializing a GPT-J 6B configuration
configuration = GPTJConfig()

# Initializing a model from the configuration
model = GPTJModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJModel, GPTJConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPT-J 6B configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GPTJConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),T=n("Example:"),c=h(),w(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),c=u(l),k(f.$$.fragment,l)},m(l,p){g(l,d,p),e(d,T),g(l,c,p),b(f,l,p),v=!0},p:Ke,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){P(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function fm(G){let d,T,c,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,T),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function mm(G){let d,T,c,f,v;return f=new ke({props:{code:`from transformers import GPT2Tokenizer, GPTJModel
import torch

tokenizer = GPT2Tokenizer.from_pretrained("hf-internal-testing/tiny-random-gptj")
model = GPTJModel.from_pretrained("hf-internal-testing/tiny-random-gptj")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJModel.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),T=n("Example:"),c=h(),w(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),c=u(l),k(f.$$.fragment,l)},m(l,p){g(l,d,p),e(d,T),g(l,c,p),b(f,l,p),v=!0},p:Ke,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){P(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function gm(G){let d,T,c,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,T),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function _m(G){let d,T,c,f,v;return f=new ke({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForCausalLM

tokenizer = GPT2Tokenizer.from_pretrained("hf-internal-testing/tiny-random-gptj")
model = GPTJForCausalLM.from_pretrained("hf-internal-testing/tiny-random-gptj")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),T=n("Example:"),c=h(),w(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),c=u(l),k(f.$$.fragment,l)},m(l,p){g(l,d,p),e(d,T),g(l,c,p),b(f,l,p),v=!0},p:Ke,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){P(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Tm(G){let d,T,c,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,T),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function ym(G){let d,T,c,f,v;return f=new ke({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("ydshieh/tiny-random-gptj-for-sequence-classification")
model = GPTJForSequenceClassification.from_pretrained("ydshieh/tiny-random-gptj-for-sequence-classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),T=n("Example of single-label classification:"),c=h(),w(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example of single-label classification:"),p.forEach(t),c=u(l),k(f.$$.fragment,l)},m(l,p){g(l,d,p),e(d,T),g(l,c,p),b(f,l,p),v=!0},p:Ke,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){P(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function vm(G){let d,T;return d=new ke({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = GPTJForSequenceClassification.from_pretrained("ydshieh/tiny-random-gptj-for-sequence-classification", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.76</span>`}}),{c(){w(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,f){b(d,c,f),T=!0},p:Ke,i(c){T||($(d.$$.fragment,c),T=!0)},o(c){P(d.$$.fragment,c),T=!1},d(c){F(d,c)}}}function wm(G){let d,T,c,f,v;return f=new ke({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("ydshieh/tiny-random-gptj-for-sequence-classification")
model = GPTJForSequenceClassification.from_pretrained("ydshieh/tiny-random-gptj-for-sequence-classification", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),T=n("Example of multi-label classification:"),c=h(),w(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example of multi-label classification:"),p.forEach(t),c=u(l),k(f.$$.fragment,l)},m(l,p){g(l,d,p),e(d,T),g(l,c,p),b(f,l,p),v=!0},p:Ke,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){P(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function km(G){let d,T;return d=new ke({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GPTJForSequenceClassification.from_pretrained(
    "ydshieh/tiny-random-gptj-for-sequence-classification", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,f){b(d,c,f),T=!0},p:Ke,i(c){T||($(d.$$.fragment,c),T=!0)},o(c){P(d.$$.fragment,c),T=!1},d(c){F(d,c)}}}function bm(G){let d,T,c,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,T),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function $m(G){let d,T,c,f,v;return f=new ke({props:{code:`from transformers import GPT2Tokenizer, GPTJForQuestionAnswering
import torch

tokenizer = GPT2Tokenizer.from_pretrained("ydshieh/tiny-random-gptj-for-question-answering")
model = GPTJForQuestionAnswering.from_pretrained("ydshieh/tiny-random-gptj-for-question-answering")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-question-answering&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-question-answering&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; was Jim Henson?Jim Henson was a n&#x27;</span>`}}),{c(){d=a("p"),T=n("Example:"),c=h(),w(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),c=u(l),k(f.$$.fragment,l)},m(l,p){g(l,d,p),e(d,T),g(l,c,p),b(f,l,p),v=!0},p:Ke,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){P(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Pm(G){let d,T;return d=new ke({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.13</span>`}}),{c(){w(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,f){b(d,c,f),T=!0},p:Ke,i(c){T||($(d.$$.fragment,c),T=!0)},o(c){P(d.$$.fragment,c),T=!1},d(c){F(d,c)}}}function Fm(G){let d,T,c,f,v,l,p,E,be,ge,N,oe,Z,j,$e,U,Pe,_e,O,Fe,se,H,je,ae,K,Ge,Te,W,xe,re,ie,M,q,pe,R,ye,he,A,Ee,le,z,Je,B,Me,qe,Q,Ce,ze,I,Ae,V,ve,X,C,ne,L,ue,Le;return{c(){d=a("p"),T=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),be=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),N=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),j=a("p"),$e=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Pe=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a("code"),Fe=n("model.fit()"),se=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a("code"),je=n("fit()"),ae=n(" and "),K=a("code"),Ge=n("predict()"),Te=n(`, such as when creating your own layers or models with
the Keras `),W=a("code"),xe=n("Functional"),re=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ie=h(),M=a("ul"),q=a("li"),pe=n("a single Tensor with "),R=a("code"),ye=n("input_ids"),he=n(" only and nothing else: "),A=a("code"),Ee=n("model(input_ids)"),le=h(),z=a("li"),Je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),Me=n("model([input_ids, attention_mask])"),qe=n(" or "),Q=a("code"),Ce=n("model([input_ids, attention_mask, token_type_ids])"),ze=h(),I=a("li"),Ae=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),X=h(),C=a("p"),ne=n(`Note that when creating models and layers with
`),L=a("a"),ue=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var x=i(d);T=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var Xe=i(c);f=s(Xe,"transformers"),Xe.forEach(t),v=s(x," accept two formats as input:"),x.forEach(t),l=u(y),p=r(y,"UL",{});var ee=i(p);E=r(ee,"LI",{});var de=i(E);be=s(de,"having all inputs as keyword arguments (like PyTorch models), or"),de.forEach(t),ge=u(ee),N=r(ee,"LI",{});var Ye=i(N);oe=s(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),ee.forEach(t),Z=u(y),j=r(y,"P",{});var J=i(j);$e=s(J,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(J,"CODE",{});var Ze=i(U);Pe=s(Ze,"model.fit()"),Ze.forEach(t),_e=s(J,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r(J,"CODE",{});var et=i(O);Fe=s(et,"model.fit()"),et.forEach(t),se=s(J,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r(J,"CODE",{});var Se=i(H);je=s(Se,"fit()"),Se.forEach(t),ae=s(J," and "),K=r(J,"CODE",{});var tt=i(K);Ge=s(tt,"predict()"),tt.forEach(t),Te=s(J,`, such as when creating your own layers or models with
the Keras `),W=r(J,"CODE",{});var ot=i(W);xe=s(ot,"Functional"),ot.forEach(t),re=s(J,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),J.forEach(t),ie=u(y),M=r(y,"UL",{});var S=i(M);q=r(S,"LI",{});var Y=i(q);pe=s(Y,"a single Tensor with "),R=r(Y,"CODE",{});var nt=i(R);ye=s(nt,"input_ids"),nt.forEach(t),he=s(Y," only and nothing else: "),A=r(Y,"CODE",{});var Re=i(A);Ee=s(Re,"model(input_ids)"),Re.forEach(t),Y.forEach(t),le=u(S),z=r(S,"LI",{});var D=i(z);Je=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(D,"CODE",{});var we=i(B);Me=s(we,"model([input_ids, attention_mask])"),we.forEach(t),qe=s(D," or "),Q=r(D,"CODE",{});var De=i(Q);Ce=s(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),D.forEach(t),ze=u(S),I=r(S,"LI",{});var ce=i(I);Ae=s(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ce,"CODE",{});var st=i(V);ve=s(st,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),st.forEach(t),ce.forEach(t),S.forEach(t),X=u(y),C=r(y,"P",{});var te=i(C);ne=s(te,`Note that when creating models and layers with
`),L=r(te,"A",{href:!0,rel:!0});var at=i(L);ue=s(at,"subclassing"),at.forEach(t),Le=s(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(t),this.h()},h(){m(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(L,"rel","nofollow")},m(y,x){g(y,d,x),e(d,T),e(d,c),e(c,f),e(d,v),g(y,l,x),g(y,p,x),e(p,E),e(E,be),e(p,ge),e(p,N),e(N,oe),g(y,Z,x),g(y,j,x),e(j,$e),e(j,U),e(U,Pe),e(j,_e),e(j,O),e(O,Fe),e(j,se),e(j,H),e(H,je),e(j,ae),e(j,K),e(K,Ge),e(j,Te),e(j,W),e(W,xe),e(j,re),g(y,ie,x),g(y,M,x),e(M,q),e(q,pe),e(q,R),e(R,ye),e(q,he),e(q,A),e(A,Ee),e(M,le),e(M,z),e(z,Je),e(z,B),e(B,Me),e(z,qe),e(z,Q),e(Q,Ce),e(M,ze),e(M,I),e(I,Ae),e(I,V),e(V,ve),g(y,X,x),g(y,C,x),e(C,ne),e(C,L),e(L,ue),e(C,Le)},d(y){y&&t(d),y&&t(l),y&&t(p),y&&t(Z),y&&t(j),y&&t(ie),y&&t(M),y&&t(X),y&&t(C)}}}function jm(G){let d,T,c,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,T),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function Gm(G){let d,T,c,f,v;return f=new ke({props:{code:`from transformers import GPTJTokenizer, TFGPTJModel
import tensorflow as tf

tokenizer = GPTJTokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = TFGPTJModel.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, TFGPTJModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJModel.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),T=n("Example:"),c=h(),w(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),c=u(l),k(f.$$.fragment,l)},m(l,p){g(l,d,p),e(d,T),g(l,c,p),b(f,l,p),v=!0},p:Ke,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){P(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function xm(G){let d,T,c,f,v,l,p,E,be,ge,N,oe,Z,j,$e,U,Pe,_e,O,Fe,se,H,je,ae,K,Ge,Te,W,xe,re,ie,M,q,pe,R,ye,he,A,Ee,le,z,Je,B,Me,qe,Q,Ce,ze,I,Ae,V,ve,X,C,ne,L,ue,Le;return{c(){d=a("p"),T=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),be=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),N=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),j=a("p"),$e=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Pe=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a("code"),Fe=n("model.fit()"),se=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a("code"),je=n("fit()"),ae=n(" and "),K=a("code"),Ge=n("predict()"),Te=n(`, such as when creating your own layers or models with
the Keras `),W=a("code"),xe=n("Functional"),re=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ie=h(),M=a("ul"),q=a("li"),pe=n("a single Tensor with "),R=a("code"),ye=n("input_ids"),he=n(" only and nothing else: "),A=a("code"),Ee=n("model(input_ids)"),le=h(),z=a("li"),Je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),Me=n("model([input_ids, attention_mask])"),qe=n(" or "),Q=a("code"),Ce=n("model([input_ids, attention_mask, token_type_ids])"),ze=h(),I=a("li"),Ae=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),X=h(),C=a("p"),ne=n(`Note that when creating models and layers with
`),L=a("a"),ue=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var x=i(d);T=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var Xe=i(c);f=s(Xe,"transformers"),Xe.forEach(t),v=s(x," accept two formats as input:"),x.forEach(t),l=u(y),p=r(y,"UL",{});var ee=i(p);E=r(ee,"LI",{});var de=i(E);be=s(de,"having all inputs as keyword arguments (like PyTorch models), or"),de.forEach(t),ge=u(ee),N=r(ee,"LI",{});var Ye=i(N);oe=s(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),ee.forEach(t),Z=u(y),j=r(y,"P",{});var J=i(j);$e=s(J,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(J,"CODE",{});var Ze=i(U);Pe=s(Ze,"model.fit()"),Ze.forEach(t),_e=s(J,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r(J,"CODE",{});var et=i(O);Fe=s(et,"model.fit()"),et.forEach(t),se=s(J,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r(J,"CODE",{});var Se=i(H);je=s(Se,"fit()"),Se.forEach(t),ae=s(J," and "),K=r(J,"CODE",{});var tt=i(K);Ge=s(tt,"predict()"),tt.forEach(t),Te=s(J,`, such as when creating your own layers or models with
the Keras `),W=r(J,"CODE",{});var ot=i(W);xe=s(ot,"Functional"),ot.forEach(t),re=s(J,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),J.forEach(t),ie=u(y),M=r(y,"UL",{});var S=i(M);q=r(S,"LI",{});var Y=i(q);pe=s(Y,"a single Tensor with "),R=r(Y,"CODE",{});var nt=i(R);ye=s(nt,"input_ids"),nt.forEach(t),he=s(Y," only and nothing else: "),A=r(Y,"CODE",{});var Re=i(A);Ee=s(Re,"model(input_ids)"),Re.forEach(t),Y.forEach(t),le=u(S),z=r(S,"LI",{});var D=i(z);Je=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(D,"CODE",{});var we=i(B);Me=s(we,"model([input_ids, attention_mask])"),we.forEach(t),qe=s(D," or "),Q=r(D,"CODE",{});var De=i(Q);Ce=s(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),D.forEach(t),ze=u(S),I=r(S,"LI",{});var ce=i(I);Ae=s(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ce,"CODE",{});var st=i(V);ve=s(st,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),st.forEach(t),ce.forEach(t),S.forEach(t),X=u(y),C=r(y,"P",{});var te=i(C);ne=s(te,`Note that when creating models and layers with
`),L=r(te,"A",{href:!0,rel:!0});var at=i(L);ue=s(at,"subclassing"),at.forEach(t),Le=s(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(t),this.h()},h(){m(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(L,"rel","nofollow")},m(y,x){g(y,d,x),e(d,T),e(d,c),e(c,f),e(d,v),g(y,l,x),g(y,p,x),e(p,E),e(E,be),e(p,ge),e(p,N),e(N,oe),g(y,Z,x),g(y,j,x),e(j,$e),e(j,U),e(U,Pe),e(j,_e),e(j,O),e(O,Fe),e(j,se),e(j,H),e(H,je),e(j,ae),e(j,K),e(K,Ge),e(j,Te),e(j,W),e(W,xe),e(j,re),g(y,ie,x),g(y,M,x),e(M,q),e(q,pe),e(q,R),e(R,ye),e(q,he),e(q,A),e(A,Ee),e(M,le),e(M,z),e(z,Je),e(z,B),e(B,Me),e(z,qe),e(z,Q),e(Q,Ce),e(M,ze),e(M,I),e(I,Ae),e(I,V),e(V,ve),g(y,X,x),g(y,C,x),e(C,ne),e(C,L),e(L,ue),e(C,Le)},d(y){y&&t(d),y&&t(l),y&&t(p),y&&t(Z),y&&t(j),y&&t(ie),y&&t(M),y&&t(X),y&&t(C)}}}function Em(G){let d,T,c,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,T),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function Jm(G){let d,T,c,f,v;return f=new ke({props:{code:`from transformers import GPTJTokenizer, TFGPTJForCausalLM
import tensorflow as tf

tokenizer = GPTJTokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = TFGPTJForCausalLM.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, TFGPTJForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),T=n("Example:"),c=h(),w(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),c=u(l),k(f.$$.fragment,l)},m(l,p){g(l,d,p),e(d,T),g(l,c,p),b(f,l,p),v=!0},p:Ke,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){P(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Mm(G){let d,T,c,f,v,l,p,E,be,ge,N,oe,Z,j,$e,U,Pe,_e,O,Fe,se,H,je,ae,K,Ge,Te,W,xe,re,ie,M,q,pe,R,ye,he,A,Ee,le,z,Je,B,Me,qe,Q,Ce,ze,I,Ae,V,ve,X,C,ne,L,ue,Le;return{c(){d=a("p"),T=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),be=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),N=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),j=a("p"),$e=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Pe=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a("code"),Fe=n("model.fit()"),se=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a("code"),je=n("fit()"),ae=n(" and "),K=a("code"),Ge=n("predict()"),Te=n(`, such as when creating your own layers or models with
the Keras `),W=a("code"),xe=n("Functional"),re=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ie=h(),M=a("ul"),q=a("li"),pe=n("a single Tensor with "),R=a("code"),ye=n("input_ids"),he=n(" only and nothing else: "),A=a("code"),Ee=n("model(input_ids)"),le=h(),z=a("li"),Je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),Me=n("model([input_ids, attention_mask])"),qe=n(" or "),Q=a("code"),Ce=n("model([input_ids, attention_mask, token_type_ids])"),ze=h(),I=a("li"),Ae=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),X=h(),C=a("p"),ne=n(`Note that when creating models and layers with
`),L=a("a"),ue=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var x=i(d);T=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var Xe=i(c);f=s(Xe,"transformers"),Xe.forEach(t),v=s(x," accept two formats as input:"),x.forEach(t),l=u(y),p=r(y,"UL",{});var ee=i(p);E=r(ee,"LI",{});var de=i(E);be=s(de,"having all inputs as keyword arguments (like PyTorch models), or"),de.forEach(t),ge=u(ee),N=r(ee,"LI",{});var Ye=i(N);oe=s(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),ee.forEach(t),Z=u(y),j=r(y,"P",{});var J=i(j);$e=s(J,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(J,"CODE",{});var Ze=i(U);Pe=s(Ze,"model.fit()"),Ze.forEach(t),_e=s(J,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r(J,"CODE",{});var et=i(O);Fe=s(et,"model.fit()"),et.forEach(t),se=s(J,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r(J,"CODE",{});var Se=i(H);je=s(Se,"fit()"),Se.forEach(t),ae=s(J," and "),K=r(J,"CODE",{});var tt=i(K);Ge=s(tt,"predict()"),tt.forEach(t),Te=s(J,`, such as when creating your own layers or models with
the Keras `),W=r(J,"CODE",{});var ot=i(W);xe=s(ot,"Functional"),ot.forEach(t),re=s(J,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),J.forEach(t),ie=u(y),M=r(y,"UL",{});var S=i(M);q=r(S,"LI",{});var Y=i(q);pe=s(Y,"a single Tensor with "),R=r(Y,"CODE",{});var nt=i(R);ye=s(nt,"input_ids"),nt.forEach(t),he=s(Y," only and nothing else: "),A=r(Y,"CODE",{});var Re=i(A);Ee=s(Re,"model(input_ids)"),Re.forEach(t),Y.forEach(t),le=u(S),z=r(S,"LI",{});var D=i(z);Je=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(D,"CODE",{});var we=i(B);Me=s(we,"model([input_ids, attention_mask])"),we.forEach(t),qe=s(D," or "),Q=r(D,"CODE",{});var De=i(Q);Ce=s(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),D.forEach(t),ze=u(S),I=r(S,"LI",{});var ce=i(I);Ae=s(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ce,"CODE",{});var st=i(V);ve=s(st,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),st.forEach(t),ce.forEach(t),S.forEach(t),X=u(y),C=r(y,"P",{});var te=i(C);ne=s(te,`Note that when creating models and layers with
`),L=r(te,"A",{href:!0,rel:!0});var at=i(L);ue=s(at,"subclassing"),at.forEach(t),Le=s(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(t),this.h()},h(){m(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(L,"rel","nofollow")},m(y,x){g(y,d,x),e(d,T),e(d,c),e(c,f),e(d,v),g(y,l,x),g(y,p,x),e(p,E),e(E,be),e(p,ge),e(p,N),e(N,oe),g(y,Z,x),g(y,j,x),e(j,$e),e(j,U),e(U,Pe),e(j,_e),e(j,O),e(O,Fe),e(j,se),e(j,H),e(H,je),e(j,ae),e(j,K),e(K,Ge),e(j,Te),e(j,W),e(W,xe),e(j,re),g(y,ie,x),g(y,M,x),e(M,q),e(q,pe),e(q,R),e(R,ye),e(q,he),e(q,A),e(A,Ee),e(M,le),e(M,z),e(z,Je),e(z,B),e(B,Me),e(z,qe),e(z,Q),e(Q,Ce),e(M,ze),e(M,I),e(I,Ae),e(I,V),e(V,ve),g(y,X,x),g(y,C,x),e(C,ne),e(C,L),e(L,ue),e(C,Le)},d(y){y&&t(d),y&&t(l),y&&t(p),y&&t(Z),y&&t(j),y&&t(ie),y&&t(M),y&&t(X),y&&t(C)}}}function qm(G){let d,T,c,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,T),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function Cm(G){let d,T,c,f,v;return f=new ke({props:{code:`from transformers import GPTJTokenizer, TFGPTJForSequenceClassification
import tensorflow as tf

tokenizer = GPTJTokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = TFGPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, TFGPTJForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),T=n("Example:"),c=h(),w(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),c=u(l),k(f.$$.fragment,l)},m(l,p){g(l,d,p),e(d,T),g(l,c,p),b(f,l,p),v=!0},p:Ke,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){P(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function zm(G){let d,T;return d=new ke({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFGPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,f){b(d,c,f),T=!0},p:Ke,i(c){T||($(d.$$.fragment,c),T=!0)},o(c){P(d.$$.fragment,c),T=!1},d(c){F(d,c)}}}function Am(G){let d,T,c,f,v,l,p,E,be,ge,N,oe,Z,j,$e,U,Pe,_e,O,Fe,se,H,je,ae,K,Ge,Te,W,xe,re,ie,M,q,pe,R,ye,he,A,Ee,le,z,Je,B,Me,qe,Q,Ce,ze,I,Ae,V,ve,X,C,ne,L,ue,Le;return{c(){d=a("p"),T=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),be=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),N=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),j=a("p"),$e=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Pe=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a("code"),Fe=n("model.fit()"),se=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a("code"),je=n("fit()"),ae=n(" and "),K=a("code"),Ge=n("predict()"),Te=n(`, such as when creating your own layers or models with
the Keras `),W=a("code"),xe=n("Functional"),re=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ie=h(),M=a("ul"),q=a("li"),pe=n("a single Tensor with "),R=a("code"),ye=n("input_ids"),he=n(" only and nothing else: "),A=a("code"),Ee=n("model(input_ids)"),le=h(),z=a("li"),Je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),Me=n("model([input_ids, attention_mask])"),qe=n(" or "),Q=a("code"),Ce=n("model([input_ids, attention_mask, token_type_ids])"),ze=h(),I=a("li"),Ae=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),X=h(),C=a("p"),ne=n(`Note that when creating models and layers with
`),L=a("a"),ue=n("subclassing"),Le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var x=i(d);T=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var Xe=i(c);f=s(Xe,"transformers"),Xe.forEach(t),v=s(x," accept two formats as input:"),x.forEach(t),l=u(y),p=r(y,"UL",{});var ee=i(p);E=r(ee,"LI",{});var de=i(E);be=s(de,"having all inputs as keyword arguments (like PyTorch models), or"),de.forEach(t),ge=u(ee),N=r(ee,"LI",{});var Ye=i(N);oe=s(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),ee.forEach(t),Z=u(y),j=r(y,"P",{});var J=i(j);$e=s(J,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(J,"CODE",{});var Ze=i(U);Pe=s(Ze,"model.fit()"),Ze.forEach(t),_e=s(J,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r(J,"CODE",{});var et=i(O);Fe=s(et,"model.fit()"),et.forEach(t),se=s(J,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r(J,"CODE",{});var Se=i(H);je=s(Se,"fit()"),Se.forEach(t),ae=s(J," and "),K=r(J,"CODE",{});var tt=i(K);Ge=s(tt,"predict()"),tt.forEach(t),Te=s(J,`, such as when creating your own layers or models with
the Keras `),W=r(J,"CODE",{});var ot=i(W);xe=s(ot,"Functional"),ot.forEach(t),re=s(J,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),J.forEach(t),ie=u(y),M=r(y,"UL",{});var S=i(M);q=r(S,"LI",{});var Y=i(q);pe=s(Y,"a single Tensor with "),R=r(Y,"CODE",{});var nt=i(R);ye=s(nt,"input_ids"),nt.forEach(t),he=s(Y," only and nothing else: "),A=r(Y,"CODE",{});var Re=i(A);Ee=s(Re,"model(input_ids)"),Re.forEach(t),Y.forEach(t),le=u(S),z=r(S,"LI",{});var D=i(z);Je=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(D,"CODE",{});var we=i(B);Me=s(we,"model([input_ids, attention_mask])"),we.forEach(t),qe=s(D," or "),Q=r(D,"CODE",{});var De=i(Q);Ce=s(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),D.forEach(t),ze=u(S),I=r(S,"LI",{});var ce=i(I);Ae=s(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(ce,"CODE",{});var st=i(V);ve=s(st,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),st.forEach(t),ce.forEach(t),S.forEach(t),X=u(y),C=r(y,"P",{});var te=i(C);ne=s(te,`Note that when creating models and layers with
`),L=r(te,"A",{href:!0,rel:!0});var at=i(L);ue=s(at,"subclassing"),at.forEach(t),Le=s(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(t),this.h()},h(){m(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(L,"rel","nofollow")},m(y,x){g(y,d,x),e(d,T),e(d,c),e(c,f),e(d,v),g(y,l,x),g(y,p,x),e(p,E),e(E,be),e(p,ge),e(p,N),e(N,oe),g(y,Z,x),g(y,j,x),e(j,$e),e(j,U),e(U,Pe),e(j,_e),e(j,O),e(O,Fe),e(j,se),e(j,H),e(H,je),e(j,ae),e(j,K),e(K,Ge),e(j,Te),e(j,W),e(W,xe),e(j,re),g(y,ie,x),g(y,M,x),e(M,q),e(q,pe),e(q,R),e(R,ye),e(q,he),e(q,A),e(A,Ee),e(M,le),e(M,z),e(z,Je),e(z,B),e(B,Me),e(z,qe),e(z,Q),e(Q,Ce),e(M,ze),e(M,I),e(I,Ae),e(I,V),e(V,ve),g(y,X,x),g(y,C,x),e(C,ne),e(C,L),e(L,ue),e(C,Le)},d(y){y&&t(d),y&&t(l),y&&t(p),y&&t(Z),y&&t(j),y&&t(ie),y&&t(M),y&&t(X),y&&t(C)}}}function Lm(G){let d,T,c,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,T),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function Im(G){let d,T,c,f,v;return f=new ke({props:{code:`from transformers import GPTJTokenizer, TFGPTJForQuestionAnswering
import tensorflow as tf

tokenizer = GPTJTokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = TFGPTJForQuestionAnswering.from_pretrained("EleutherAI/gpt-j-6B")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, TFGPTJForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),T=n("Example:"),c=h(),w(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),c=u(l),k(f.$$.fragment,l)},m(l,p){g(l,d,p),e(d,T),g(l,c,p),b(f,l,p),v=!0},p:Ke,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){P(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Om(G){let d,T;return d=new ke({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,f){b(d,c,f),T=!0},p:Ke,i(c){T||($(d.$$.fragment,c),T=!0)},o(c){P(d.$$.fragment,c),T=!1},d(c){F(d,c)}}}function Nm(G){let d,T,c,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,T),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function Sm(G){let d,T,c,f,v;return f=new ke({props:{code:`from transformers import GPTJTokenizer, FlaxGPTJModel

tokenizer = GPTJTokenizer.from_pretrained("gptj")
model = FlaxGPTJModel.from_pretrained("gptj")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, FlaxGPTJModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTJModel.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),T=n("Example:"),c=h(),w(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),c=u(l),k(f.$$.fragment,l)},m(l,p){g(l,d,p),e(d,T),g(l,c,p),b(f,l,p),v=!0},p:Ke,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){P(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Dm(G){let d,T,c,f,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,T),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function Wm(G){let d,T,c,f,v;return f=new ke({props:{code:`from transformers import GPTJTokenizer, FlaxGPTJForCausalLM

tokenizer = GPTJTokenizer.from_pretrained("gptj")
model = FlaxGPTJForCausalLM.from_pretrained("gptj")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, FlaxGPTJForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=a("p"),T=n("Example:"),c=h(),w(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),c=u(l),k(f.$$.fragment,l)},m(l,p){g(l,d,p),e(d,T),g(l,c,p),b(f,l,p),v=!0},p:Ke,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){P(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Um(G){let d,T,c,f,v,l,p,E,be,ge,N,oe,Z,j,$e,U,Pe,_e,O,Fe,se,H,je,ae,K,Ge,Te,W,xe,re,ie,M,q,pe,R,ye,he,A,Ee,le,z,Je,B,Me,qe,Q,Ce,ze,I,Ae,V,ve,X,C,ne,L,ue,Le,y,x,Xe,ee,de,Ye,J,Ze,et,Se,tt,ot,S,Y,nt,Re,D,we,De,ce,st,te,at,Hr,ho,Ki,Ms,Ri,Vi,Kr,hn,Rr,qs,Xi,Vr,un,Xr,St,uo,ga,fn,Yi,_a,Zi,Yr,Et,mn,el,ft,tl,Cs,ol,nl,gn,sl,al,zs,rl,il,As,ll,dl,cl,fo,Zr,Dt,mo,Ta,_n,pl,ya,hl,ei,Jt,Tn,ul,yn,fl,vn,ml,gl,_l,vt,wn,Tl,Wt,yl,Ls,vl,wl,va,kl,bl,$l,go,Pl,_o,ti,Ut,To,wa,kn,Fl,ka,jl,oi,mt,bn,Gl,ba,xl,El,$n,Jl,Pn,Ml,ql,Cl,wt,Fn,zl,Bt,Al,Is,Ll,Il,$a,Ol,Nl,Sl,yo,Dl,vo,ni,Qt,wo,Pa,jn,Wl,Fa,Ul,si,We,Gn,Bl,ja,Ql,Hl,Os,Ns,Kl,Rl,Vl,gt,Xl,Ga,Yl,Zl,xa,ed,td,Ea,od,nd,Ja,sd,ad,rd,xn,id,En,ld,dd,cd,Ne,Jn,pd,Ht,hd,Ss,ud,fd,Ma,md,gd,_d,ko,Td,bo,yd,$o,vd,Po,wd,Fo,ai,Kt,jo,qa,Mn,kd,Ca,bd,ri,_t,qn,$d,Rt,Pd,za,Fd,jd,Aa,Gd,xd,Ed,Cn,Jd,zn,Md,qd,Cd,rt,An,zd,Vt,Ad,Ds,Ld,Id,La,Od,Nd,Sd,Go,Dd,xo,Wd,Eo,ii,Xt,Jo,Ia,Ln,Ud,Oa,Bd,li,Ue,In,Qd,Na,Hd,Kd,On,Rd,Ws,Vd,Xd,Yd,Nn,Zd,Sn,ec,tc,oc,Mo,nc,kt,Dn,sc,Yt,ac,Us,rc,ic,Sa,lc,dc,cc,qo,pc,Co,di,Zt,zo,Da,Wn,hc,Wa,uc,ci,Be,Un,fc,Ua,mc,gc,Bn,_c,Bs,Tc,yc,vc,Qn,wc,Hn,kc,bc,$c,Ao,Pc,bt,Kn,Fc,eo,jc,Qs,Gc,xc,Ba,Ec,Jc,Mc,Lo,qc,Io,pi,to,Oo,Qa,Rn,Cc,Ha,zc,hi,fe,Vn,Ac,Ka,Lc,Ic,Hs,Ks,Oc,Nc,Sc,Tt,Dc,Ra,Wc,Uc,Va,Bc,Qc,Xa,Hc,Kc,Ya,Rc,Vc,Xc,Xn,Yc,Rs,Zc,ep,tp,Yn,op,Zn,np,sp,ap,No,rp,it,es,ip,oo,lp,Vs,dp,cp,Za,pp,hp,up,So,fp,Do,mp,Wo,ui,no,Uo,er,ts,gp,tr,_p,fi,Qe,os,Tp,so,yp,or,vp,wp,nr,kp,bp,$p,ns,Pp,Xs,Fp,jp,Gp,ss,xp,as,Ep,Jp,Mp,Bo,qp,lt,rs,Cp,ao,zp,Ys,Ap,Lp,sr,Ip,Op,Np,Qo,Sp,Ho,Dp,Ko,mi,ro,Ro,ar,is,Wp,rr,Up,gi,Ie,ls,Bp,ir,Qp,Hp,ds,Kp,Zs,Rp,Vp,Xp,cs,Yp,ps,Zp,eh,th,lr,oh,nh,Mt,dr,hs,sh,ah,cr,us,rh,ih,pr,fs,lh,dh,hr,ms,ch,ph,$t,gs,hh,io,uh,ur,fh,mh,fr,gh,_h,Th,Vo,yh,Xo,_i,lo,Yo,mr,_s,vh,gr,wh,Ti,Oe,Ts,kh,_r,bh,$h,ys,Ph,ea,Fh,jh,Gh,vs,xh,ws,Eh,Jh,Mh,Tr,qh,Ch,qt,yr,ks,zh,Ah,vr,bs,Lh,Ih,wr,$s,Oh,Nh,kr,Ps,Sh,Dh,Pt,Fs,Wh,co,Uh,br,Bh,Qh,$r,Hh,Kh,Rh,Zo,Vh,en,yi;return l=new ut({}),j=new ut({}),X=new ke({props:{code:`from transformers import GPTJForCausalLM
import torch

model = GPTJForCausalLM.from_pretrained(
    "EleutherAI/gpt-j-6B", revision="float16", torch_dtype=torch.float16, low_cpu_mem_usage=True
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, revision=<span class="hljs-string">&quot;float16&quot;</span>, torch_dtype=torch.float16, low_cpu_mem_usage=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)`}}),ce=new ut({}),hn=new ke({props:{code:`from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("EleutherAI/gpt-j-6B")
tokenizer = AutoTokenizer.from_pretrained("EleutherAI/gpt-j-6B")

prompt = (
    "In a shocking finding, scientists discovered a herd of unicorns living in a remote, "
    "previously unexplored valley, in the Andes Mountains. Even more surprising to the "
    "researchers was the fact that the unicorns spoke perfect English."
)

input_ids = tokenizer(prompt, return_tensors="pt").input_ids

gen_tokens = model.generate(
    input_ids,
    do_sample=True,
    temperature=0.9,
    max_length=100,
)
gen_text = tokenizer.batch_decode(gen_tokens)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForCausalLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;In a shocking finding, scientists discovered a herd of unicorns living in a remote, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;previously unexplored valley, in the Andes Mountains. Even more surprising to the &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;researchers was the fact that the unicorns spoke perfect English.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>    max_length=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),un=new ke({props:{code:`from transformers import GPTJForCausalLM, AutoTokenizer
import torch

model = GPTJForCausalLM.from_pretrained("EleutherAI/gpt-j-6B", torch_dtype=torch.float16)
tokenizer = AutoTokenizer.from_pretrained("EleutherAI/gpt-j-6B")

prompt = (
    "In a shocking finding, scientists discovered a herd of unicorns living in a remote, "
    "previously unexplored valley, in the Andes Mountains. Even more surprising to the "
    "researchers was the fact that the unicorns spoke perfect English."
)

input_ids = tokenizer(prompt, return_tensors="pt").input_ids

gen_tokens = model.generate(
    input_ids,
    do_sample=True,
    temperature=0.9,
    max_length=100,
)
gen_text = tokenizer.batch_decode(gen_tokens)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJForCausalLM, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, torch_dtype=torch.float16)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;In a shocking finding, scientists discovered a herd of unicorns living in a remote, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;previously unexplored valley, in the Andes Mountains. Even more surprising to the &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;researchers was the fact that the unicorns spoke perfect English.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>    max_length=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),fn=new ut({}),mn=new me({props:{name:"class transformers.GPTJConfig",anchor:"transformers.GPTJConfig",parameters:[{name:"vocab_size",val:" = 50400"},{name:"n_positions",val:" = 2048"},{name:"n_embd",val:" = 4096"},{name:"n_layer",val:" = 28"},{name:"n_head",val:" = 16"},{name:"rotary_dim",val:" = 64"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_pdrop",val:" = 0.0"},{name:"embd_pdrop",val:" = 0.0"},{name:"attn_pdrop",val:" = 0.0"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"tie_word_embeddings",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTJConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50400) &#x2014;
Vocabulary size of the GPT-J model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJModel">GPTJModel</a>.`,name:"vocab_size"},{anchor:"transformers.GPTJConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.GPTJConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.GPTJConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 28) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.GPTJConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.GPTJConfig.rotary_dim",description:`<strong>rotary_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Number of dimensions in the embedding that Rotary Position Embedding is applied to.`,name:"rotary_dim"},{anchor:"transformers.GPTJConfig.n_inner",description:`<strong>n_inner</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
Dimensionality of the inner feed-forward layers. <code>None</code> will set it to 4 times n_embd`,name:"n_inner"},{anchor:"transformers.GPTJConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
Activation function, to be selected in the list <code>[&quot;relu&quot;, &quot;silu&quot;, &quot;gelu&quot;, &quot;tanh&quot;, &quot;gelu_new&quot;]</code>.`,name:"activation_function"},{anchor:"transformers.GPTJConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.GPTJConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.GPTJConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.GPTJConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.GPTJConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GPTJConfig.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size).`,name:"scale_attn_weights"},{anchor:"transformers.GPTJConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/configuration_gptj.py#L33"}}),fo=new He({props:{anchor:"transformers.GPTJConfig.example",$$slots:{default:[um]},$$scope:{ctx:G}}}),_n=new ut({}),Tn=new me({props:{name:"class transformers.GPTJModel",anchor:"transformers.GPTJModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_gptj.py#L481"}}),wn=new me({props:{name:"forward",anchor:"transformers.GPTJModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPTJModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_gptj.py#L537",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),go=new ht({props:{$$slots:{default:[fm]},$$scope:{ctx:G}}}),_o=new He({props:{anchor:"transformers.GPTJModel.forward.example",$$slots:{default:[mm]},$$scope:{ctx:G}}}),kn=new ut({}),bn=new me({props:{name:"class transformers.GPTJForCausalLM",anchor:"transformers.GPTJForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_gptj.py#L722"}}),Fn=new me({props:{name:"forward",anchor:"transformers.GPTJForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPTJForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_gptj.py#L791",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new ht({props:{$$slots:{default:[gm]},$$scope:{ctx:G}}}),vo=new He({props:{anchor:"transformers.GPTJForCausalLM.forward.example",$$slots:{default:[_m]},$$scope:{ctx:G}}}),jn=new ut({}),Gn=new me({props:{name:"class transformers.GPTJForSequenceClassification",anchor:"transformers.GPTJForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_gptj.py#L897"}}),Jn=new me({props:{name:"forward",anchor:"transformers.GPTJForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPTJForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_gptj.py#L913",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
`}}),ko=new ht({props:{$$slots:{default:[Tm]},$$scope:{ctx:G}}}),bo=new He({props:{anchor:"transformers.GPTJForSequenceClassification.forward.example",$$slots:{default:[ym]},$$scope:{ctx:G}}}),$o=new He({props:{anchor:"transformers.GPTJForSequenceClassification.forward.example-2",$$slots:{default:[vm]},$$scope:{ctx:G}}}),Po=new He({props:{anchor:"transformers.GPTJForSequenceClassification.forward.example-3",$$slots:{default:[wm]},$$scope:{ctx:G}}}),Fo=new He({props:{anchor:"transformers.GPTJForSequenceClassification.forward.example-4",$$slots:{default:[km]},$$scope:{ctx:G}}}),Mn=new ut({}),qn=new me({props:{name:"class transformers.GPTJForQuestionAnswering",anchor:"transformers.GPTJForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_gptj.py#L1024"}}),An=new me({props:{name:"forward",anchor:"transformers.GPTJForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPTJForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.GPTJForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_gptj.py#L1040",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
`}}),Go=new ht({props:{$$slots:{default:[bm]},$$scope:{ctx:G}}}),xo=new He({props:{anchor:"transformers.GPTJForQuestionAnswering.forward.example",$$slots:{default:[$m]},$$scope:{ctx:G}}}),Eo=new He({props:{anchor:"transformers.GPTJForQuestionAnswering.forward.example-2",$$slots:{default:[Pm]},$$scope:{ctx:G}}}),Ln=new ut({}),In=new me({props:{name:"class transformers.TFGPTJModel",anchor:"transformers.TFGPTJModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_tf_gptj.py#L650"}}),Mo=new ht({props:{$$slots:{default:[Fm]},$$scope:{ctx:G}}}),Dn=new me({props:{name:"call",anchor:"transformers.TFGPTJModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPTJModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPTJModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPTJModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPTJModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPTJModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPTJModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPTJModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPTJModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPTJModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPTJModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_tf_gptj.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),qo=new ht({props:{$$slots:{default:[jm]},$$scope:{ctx:G}}}),Co=new He({props:{anchor:"transformers.TFGPTJModel.call.example",$$slots:{default:[Gm]},$$scope:{ctx:G}}}),Wn=new ut({}),Un=new me({props:{name:"class transformers.TFGPTJForCausalLM",anchor:"transformers.TFGPTJForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_tf_gptj.py#L720"}}),Ao=new ht({props:{$$slots:{default:[xm]},$$scope:{ctx:G}}}),Kn=new me({props:{name:"call",anchor:"transformers.TFGPTJForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPTJForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPTJForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPTJForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPTJForCausalLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPTJForCausalLM.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPTJForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPTJForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPTJForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPTJForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPTJForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJForCausalLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJForCausalLM.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_tf_gptj.py#L759",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Lo=new ht({props:{$$slots:{default:[Em]},$$scope:{ctx:G}}}),Io=new He({props:{anchor:"transformers.TFGPTJForCausalLM.call.example",$$slots:{default:[Jm]},$$scope:{ctx:G}}}),Rn=new ut({}),Vn=new me({props:{name:"class transformers.TFGPTJForSequenceClassification",anchor:"transformers.TFGPTJForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPTJForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_tf_gptj.py#L849"}}),No=new ht({props:{$$slots:{default:[Mm]},$$scope:{ctx:G}}}),es=new me({props:{name:"call",anchor:"transformers.TFGPTJForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPTJForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPTJForSequenceClassification.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPTJForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPTJForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPTJForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPTJForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPTJForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPTJForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPTJForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPTJForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_tf_gptj.py#L863",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.22.2/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),So=new ht({props:{$$slots:{default:[qm]},$$scope:{ctx:G}}}),Do=new He({props:{anchor:"transformers.TFGPTJForSequenceClassification.call.example",$$slots:{default:[Cm]},$$scope:{ctx:G}}}),Wo=new He({props:{anchor:"transformers.TFGPTJForSequenceClassification.call.example-2",$$slots:{default:[zm]},$$scope:{ctx:G}}}),ts=new ut({}),os=new me({props:{name:"class transformers.TFGPTJForQuestionAnswering",anchor:"transformers.TFGPTJForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPTJForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_tf_gptj.py#L975"}}),Bo=new ht({props:{$$slots:{default:[Am]},$$scope:{ctx:G}}}),rs=new me({props:{name:"call",anchor:"transformers.TFGPTJForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPTJForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_tf_gptj.py#L986",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
`}}),Qo=new ht({props:{$$slots:{default:[Lm]},$$scope:{ctx:G}}}),Ho=new He({props:{anchor:"transformers.TFGPTJForQuestionAnswering.call.example",$$slots:{default:[Im]},$$scope:{ctx:G}}}),Ko=new He({props:{anchor:"transformers.TFGPTJForQuestionAnswering.call.example-2",$$slots:{default:[Om]},$$scope:{ctx:G}}}),is=new ut({}),ls=new me({props:{name:"class transformers.FlaxGPTJModel",anchor:"transformers.FlaxGPTJModel",parameters:[{name:"config",val:": GPTJConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTJModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_flax_gptj.py#L619"}}),gs=new me({props:{name:"__call__",anchor:"transformers.FlaxGPTJModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPTJModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPTJModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPTJModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPTJModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPTJModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPTJModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPTJModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_flax_gptj.py#L437",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
`}}),Vo=new ht({props:{$$slots:{default:[Nm]},$$scope:{ctx:G}}}),Xo=new He({props:{anchor:"transformers.FlaxGPTJModel.__call__.example",$$slots:{default:[Sm]},$$scope:{ctx:G}}}),_s=new ut({}),Ts=new me({props:{name:"class transformers.FlaxGPTJForCausalLM",anchor:"transformers.FlaxGPTJForCausalLM",parameters:[{name:"config",val:": GPTJConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTJForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_flax_gptj.py#L686"}}),Fs=new me({props:{name:"__call__",anchor:"transformers.FlaxGPTJForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPTJForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/gptj/modeling_flax_gptj.py#L437",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
`}}),Zo=new ht({props:{$$slots:{default:[Dm]},$$scope:{ctx:G}}}),en=new He({props:{anchor:"transformers.FlaxGPTJForCausalLM.__call__.example",$$slots:{default:[Wm]},$$scope:{ctx:G}}}),{c(){d=a("meta"),T=h(),c=a("h1"),f=a("a"),v=a("span"),w(l.$$.fragment),p=h(),E=a("span"),be=n("GPT-J"),ge=h(),N=a("h2"),oe=a("a"),Z=a("span"),w(j.$$.fragment),$e=h(),U=a("span"),Pe=n("Overview"),_e=h(),O=a("p"),Fe=n("The GPT-J model was released in the "),se=a("a"),H=n("kingoflolz/mesh-transformer-jax"),je=n(` repository by Ben Wang and Aran Komatsuzaki. It is a GPT-2-like
causal language model trained on `),ae=a("a"),K=n("the Pile"),Ge=n(" dataset."),Te=h(),W=a("p"),xe=n("This model was contributed by "),re=a("a"),ie=n("Stella Biderman"),M=n("."),q=h(),pe=a("p"),R=n("Tips:"),ye=h(),he=a("ul"),A=a("li"),Ee=n("To load "),le=a("a"),z=n("GPT-J"),Je=n(` in float32 one would need at least 2x model size CPU
RAM: 1x for initial weights and another 1x to load the checkpoint. So for GPT-J it would take at least 48GB of CPU
RAM to just load the model. To reduce the CPU RAM usage there are a few options. The `),B=a("code"),Me=n("torch_dtype"),qe=n(` argument can be
used to initialize the model in half-precision. And the `),Q=a("code"),Ce=n("low_cpu_mem_usage"),ze=n(` argument can be used to keep the RAM
usage to 1x. There is also a `),I=a("a"),Ae=n("fp16 branch"),V=n(` which stores
the fp16 weights, which could be used to further minimize the RAM usage. Combining all this it should take roughly
12.1GB of CPU RAM to load the model.`),ve=h(),w(X.$$.fragment),C=h(),ne=a("ul"),L=a("li"),ue=a("p"),Le=n(`The model should fit on 16GB GPU for inference. For training/fine-tuning it would take much more GPU RAM. Adam
optimizer for example makes four copies of the model: model, gradients, average and squared average of the gradients.
So it would need at least 4x model size GPU memory, even with mixed precision as gradient updates are in fp32. This
is not including the activations and data batches, which would again require some more GPU RAM. So one should explore
solutions such as DeepSpeed, to train/fine-tune the model. Another option is to use the original codebase to
train/fine-tune the model on TPU and then convert the model to Transformers format for inference. Instructions for
that could be found `),y=a("a"),x=n("here"),Xe=h(),ee=a("li"),de=a("p"),Ye=n(`Although the embedding matrix has a size of 50400, only 50257 entries are used by the GPT-2 tokenizer. These extra
tokens are added for the sake of efficiency on TPUs. To avoid the mis-match between embedding matrix size and vocab
size, the tokenizer for `),J=a("a"),Ze=n("GPT-J"),et=n(` contains 143 extra tokens
`),Se=a("code"),tt=n("<|extratoken_1|>... <|extratoken_143|>"),ot=n(", so the "),S=a("code"),Y=n("vocab_size"),nt=n(" of tokenizer also becomes 50400."),Re=h(),D=a("h3"),we=a("a"),De=a("span"),w(ce.$$.fragment),st=h(),te=a("span"),at=n("Generation"),Hr=h(),ho=a("p"),Ki=n("The "),Ms=a("a"),Ri=n("generate()"),Vi=n(` method can be used to generate text using GPT-J
model.`),Kr=h(),w(hn.$$.fragment),Rr=h(),qs=a("p"),Xi=n("\u2026or in float16 precision:"),Vr=h(),w(un.$$.fragment),Xr=h(),St=a("h2"),uo=a("a"),ga=a("span"),w(fn.$$.fragment),Yi=h(),_a=a("span"),Zi=n("GPTJConfig"),Yr=h(),Et=a("div"),w(mn.$$.fragment),el=h(),ft=a("p"),tl=n("This is the configuration class to store the configuration of a "),Cs=a("a"),ol=n("GPTJModel"),nl=n(`. It is used to instantiate a GPT-J
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the GPT-J
`),gn=a("a"),sl=n("EleutherAI/gpt-j-6B"),al=n(` architecture. Configuration objects inherit from
`),zs=a("a"),rl=n("PretrainedConfig"),il=n(" and can be used to control the model outputs. Read the documentation from "),As=a("a"),ll=n("PretrainedConfig"),dl=n(`
for more information.`),cl=h(),w(fo.$$.fragment),Zr=h(),Dt=a("h2"),mo=a("a"),Ta=a("span"),w(_n.$$.fragment),pl=h(),ya=a("span"),hl=n("GPTJModel"),ei=h(),Jt=a("div"),w(Tn.$$.fragment),ul=h(),yn=a("p"),fl=n(`The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),vn=a("a"),ml=n("torch.nn.Module"),gl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_l=h(),vt=a("div"),w(wn.$$.fragment),Tl=h(),Wt=a("p"),yl=n("The "),Ls=a("a"),vl=n("GPTJModel"),wl=n(" forward method, overrides the "),va=a("code"),kl=n("__call__"),bl=n(" special method."),$l=h(),w(go.$$.fragment),Pl=h(),w(_o.$$.fragment),ti=h(),Ut=a("h2"),To=a("a"),wa=a("span"),w(kn.$$.fragment),Fl=h(),ka=a("span"),jl=n("GPTJForCausalLM"),oi=h(),mt=a("div"),w(bn.$$.fragment),Gl=h(),ba=a("p"),xl=n("The GPT-J Model transformer with a language modeling head on top."),El=h(),$n=a("p"),Jl=n("This model is a PyTorch "),Pn=a("a"),Ml=n("torch.nn.Module"),ql=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cl=h(),wt=a("div"),w(Fn.$$.fragment),zl=h(),Bt=a("p"),Al=n("The "),Is=a("a"),Ll=n("GPTJForCausalLM"),Il=n(" forward method, overrides the "),$a=a("code"),Ol=n("__call__"),Nl=n(" special method."),Sl=h(),w(yo.$$.fragment),Dl=h(),w(vo.$$.fragment),ni=h(),Qt=a("h2"),wo=a("a"),Pa=a("span"),w(jn.$$.fragment),Wl=h(),Fa=a("span"),Ul=n("GPTJForSequenceClassification"),si=h(),We=a("div"),w(Gn.$$.fragment),Bl=h(),ja=a("p"),Ql=n("The GPT-J Model transformer with a sequence classification head on top (linear layer)."),Hl=h(),Os=a("p"),Ns=a("a"),Kl=n("GPTJForSequenceClassification"),Rl=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),Vl=h(),gt=a("p"),Xl=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ga=a("code"),Yl=n("pad_token_id"),Zl=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),xa=a("code"),ed=n("pad_token_id"),td=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ea=a("code"),od=n("inputs_embeds"),nd=n(" are passed instead of "),Ja=a("code"),sd=n("input_ids"),ad=n(`, it does the same (take the last value in
each row of the batch).`),rd=h(),xn=a("p"),id=n("This model is a PyTorch "),En=a("a"),ld=n("torch.nn.Module"),dd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cd=h(),Ne=a("div"),w(Jn.$$.fragment),pd=h(),Ht=a("p"),hd=n("The "),Ss=a("a"),ud=n("GPTJForSequenceClassification"),fd=n(" forward method, overrides the "),Ma=a("code"),md=n("__call__"),gd=n(" special method."),_d=h(),w(ko.$$.fragment),Td=h(),w(bo.$$.fragment),yd=h(),w($o.$$.fragment),vd=h(),w(Po.$$.fragment),wd=h(),w(Fo.$$.fragment),ai=h(),Kt=a("h2"),jo=a("a"),qa=a("span"),w(Mn.$$.fragment),kd=h(),Ca=a("span"),bd=n("GPTJForQuestionAnswering"),ri=h(),_t=a("div"),w(qn.$$.fragment),$d=h(),Rt=a("p"),Pd=n(`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),za=a("code"),Fd=n("span start logits"),jd=n(" and "),Aa=a("code"),Gd=n("span end logits"),xd=n(")."),Ed=h(),Cn=a("p"),Jd=n("This model is a PyTorch "),zn=a("a"),Md=n("torch.nn.Module"),qd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cd=h(),rt=a("div"),w(An.$$.fragment),zd=h(),Vt=a("p"),Ad=n("The "),Ds=a("a"),Ld=n("GPTJForQuestionAnswering"),Id=n(" forward method, overrides the "),La=a("code"),Od=n("__call__"),Nd=n(" special method."),Sd=h(),w(Go.$$.fragment),Dd=h(),w(xo.$$.fragment),Wd=h(),w(Eo.$$.fragment),ii=h(),Xt=a("h2"),Jo=a("a"),Ia=a("span"),w(Ln.$$.fragment),Ud=h(),Oa=a("span"),Bd=n("TFGPTJModel"),li=h(),Ue=a("div"),w(In.$$.fragment),Qd=h(),Na=a("p"),Hd=n("The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top."),Kd=h(),On=a("p"),Rd=n("This model inherits from "),Ws=a("a"),Vd=n("TFPreTrainedModel"),Xd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yd=h(),Nn=a("p"),Zd=n("This model is also a "),Sn=a("a"),ec=n("tf.keras.Model"),tc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),oc=h(),w(Mo.$$.fragment),nc=h(),kt=a("div"),w(Dn.$$.fragment),sc=h(),Yt=a("p"),ac=n("The "),Us=a("a"),rc=n("TFGPTJModel"),ic=n(" forward method, overrides the "),Sa=a("code"),lc=n("__call__"),dc=n(" special method."),cc=h(),w(qo.$$.fragment),pc=h(),w(Co.$$.fragment),di=h(),Zt=a("h2"),zo=a("a"),Da=a("span"),w(Wn.$$.fragment),hc=h(),Wa=a("span"),uc=n("TFGPTJForCausalLM"),ci=h(),Be=a("div"),w(Un.$$.fragment),fc=h(),Ua=a("p"),mc=n("The GPT-J Model transformer with a language modeling head on top."),gc=h(),Bn=a("p"),_c=n("This model inherits from "),Bs=a("a"),Tc=n("TFPreTrainedModel"),yc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vc=h(),Qn=a("p"),wc=n("This model is also a "),Hn=a("a"),kc=n("tf.keras.Model"),bc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$c=h(),w(Ao.$$.fragment),Pc=h(),bt=a("div"),w(Kn.$$.fragment),Fc=h(),eo=a("p"),jc=n("The "),Qs=a("a"),Gc=n("TFGPTJForCausalLM"),xc=n(" forward method, overrides the "),Ba=a("code"),Ec=n("__call__"),Jc=n(" special method."),Mc=h(),w(Lo.$$.fragment),qc=h(),w(Io.$$.fragment),pi=h(),to=a("h2"),Oo=a("a"),Qa=a("span"),w(Rn.$$.fragment),Cc=h(),Ha=a("span"),zc=n("TFGPTJForSequenceClassification"),hi=h(),fe=a("div"),w(Vn.$$.fragment),Ac=h(),Ka=a("p"),Lc=n("The GPT-J Model transformer with a sequence classification head on top (linear layer)."),Ic=h(),Hs=a("p"),Ks=a("a"),Oc=n("GPTJForSequenceClassification"),Nc=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),Sc=h(),Tt=a("p"),Dc=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ra=a("code"),Wc=n("pad_token_id"),Uc=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Va=a("code"),Bc=n("pad_token_id"),Qc=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Xa=a("code"),Hc=n("inputs_embeds"),Kc=n(" are passed instead of "),Ya=a("code"),Rc=n("input_ids"),Vc=n(`, it does the same (take the last value in
each row of the batch).`),Xc=h(),Xn=a("p"),Yc=n("This model inherits from "),Rs=a("a"),Zc=n("TFPreTrainedModel"),ep=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tp=h(),Yn=a("p"),op=n("This model is also a "),Zn=a("a"),np=n("tf.keras.Model"),sp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ap=h(),w(No.$$.fragment),rp=h(),it=a("div"),w(es.$$.fragment),ip=h(),oo=a("p"),lp=n("The "),Vs=a("a"),dp=n("TFGPTJForSequenceClassification"),cp=n(" forward method, overrides the "),Za=a("code"),pp=n("__call__"),hp=n(" special method."),up=h(),w(So.$$.fragment),fp=h(),w(Do.$$.fragment),mp=h(),w(Wo.$$.fragment),ui=h(),no=a("h2"),Uo=a("a"),er=a("span"),w(ts.$$.fragment),gp=h(),tr=a("span"),_p=n("TFGPTJForQuestionAnswering"),fi=h(),Qe=a("div"),w(os.$$.fragment),Tp=h(),so=a("p"),yp=n(`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),or=a("code"),vp=n("span start logits"),wp=n(" and "),nr=a("code"),kp=n("span end logits"),bp=n(")."),$p=h(),ns=a("p"),Pp=n("This model inherits from "),Xs=a("a"),Fp=n("TFPreTrainedModel"),jp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gp=h(),ss=a("p"),xp=n("This model is also a "),as=a("a"),Ep=n("tf.keras.Model"),Jp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mp=h(),w(Bo.$$.fragment),qp=h(),lt=a("div"),w(rs.$$.fragment),Cp=h(),ao=a("p"),zp=n("The "),Ys=a("a"),Ap=n("TFGPTJForQuestionAnswering"),Lp=n(" forward method, overrides the "),sr=a("code"),Ip=n("__call__"),Op=n(" special method."),Np=h(),w(Qo.$$.fragment),Sp=h(),w(Ho.$$.fragment),Dp=h(),w(Ko.$$.fragment),mi=h(),ro=a("h2"),Ro=a("a"),ar=a("span"),w(is.$$.fragment),Wp=h(),rr=a("span"),Up=n("FlaxGPTJModel"),gi=h(),Ie=a("div"),w(ls.$$.fragment),Bp=h(),ir=a("p"),Qp=n("The bare GPTJ Model transformer outputting raw hidden-states without any specific head on top."),Hp=h(),ds=a("p"),Kp=n("This model inherits from "),Zs=a("a"),Rp=n("FlaxPreTrainedModel"),Vp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xp=h(),cs=a("p"),Yp=n(`This model is also a Flax Linen
`),ps=a("a"),Zp=n("flax.nn.Module"),eh=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),th=h(),lr=a("p"),oh=n("Finally, this model supports inherent JAX features such as:"),nh=h(),Mt=a("ul"),dr=a("li"),hs=a("a"),sh=n("Just-In-Time (JIT) compilation"),ah=h(),cr=a("li"),us=a("a"),rh=n("Automatic Differentiation"),ih=h(),pr=a("li"),fs=a("a"),lh=n("Vectorization"),dh=h(),hr=a("li"),ms=a("a"),ch=n("Parallelization"),ph=h(),$t=a("div"),w(gs.$$.fragment),hh=h(),io=a("p"),uh=n("The "),ur=a("code"),fh=n("FlaxGPTJPreTrainedModel"),mh=n(" forward method, overrides the "),fr=a("code"),gh=n("__call__"),_h=n(" special method."),Th=h(),w(Vo.$$.fragment),yh=h(),w(Xo.$$.fragment),_i=h(),lo=a("h2"),Yo=a("a"),mr=a("span"),w(_s.$$.fragment),vh=h(),gr=a("span"),wh=n("FlaxGPTJForCausalLM"),Ti=h(),Oe=a("div"),w(Ts.$$.fragment),kh=h(),_r=a("p"),bh=n("The GPTJ Model transformer with a language modeling head on top."),$h=h(),ys=a("p"),Ph=n("This model inherits from "),ea=a("a"),Fh=n("FlaxPreTrainedModel"),jh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gh=h(),vs=a("p"),xh=n(`This model is also a Flax Linen
`),ws=a("a"),Eh=n("flax.nn.Module"),Jh=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mh=h(),Tr=a("p"),qh=n("Finally, this model supports inherent JAX features such as:"),Ch=h(),qt=a("ul"),yr=a("li"),ks=a("a"),zh=n("Just-In-Time (JIT) compilation"),Ah=h(),vr=a("li"),bs=a("a"),Lh=n("Automatic Differentiation"),Ih=h(),wr=a("li"),$s=a("a"),Oh=n("Vectorization"),Nh=h(),kr=a("li"),Ps=a("a"),Sh=n("Parallelization"),Dh=h(),Pt=a("div"),w(Fs.$$.fragment),Wh=h(),co=a("p"),Uh=n("The "),br=a("code"),Bh=n("FlaxGPTJPreTrainedModel"),Qh=n(" forward method, overrides the "),$r=a("code"),Hh=n("__call__"),Kh=n(" special method."),Rh=h(),w(Zo.$$.fragment),Vh=h(),w(en.$$.fragment),this.h()},l(o){const _=pm('[data-svelte="svelte-1phssyn"]',document.head);d=r(_,"META",{name:!0,content:!0}),_.forEach(t),T=u(o),c=r(o,"H1",{class:!0});var js=i(c);f=r(js,"A",{id:!0,class:!0,href:!0});var Pr=i(f);v=r(Pr,"SPAN",{});var Fr=i(v);k(l.$$.fragment,Fr),Fr.forEach(t),Pr.forEach(t),p=u(js),E=r(js,"SPAN",{});var jr=i(E);be=s(jr,"GPT-J"),jr.forEach(t),js.forEach(t),ge=u(o),N=r(o,"H2",{class:!0});var Gs=i(N);oe=r(Gs,"A",{id:!0,class:!0,href:!0});var Gr=i(oe);Z=r(Gr,"SPAN",{});var xr=i(Z);k(j.$$.fragment,xr),xr.forEach(t),Gr.forEach(t),$e=u(Gs),U=r(Gs,"SPAN",{});var Er=i(U);Pe=s(Er,"Overview"),Er.forEach(t),Gs.forEach(t),_e=u(o),O=r(o,"P",{});var po=i(O);Fe=s(po,"The GPT-J model was released in the "),se=r(po,"A",{href:!0,rel:!0});var Jr=i(se);H=s(Jr,"kingoflolz/mesh-transformer-jax"),Jr.forEach(t),je=s(po,` repository by Ben Wang and Aran Komatsuzaki. It is a GPT-2-like
causal language model trained on `),ae=r(po,"A",{href:!0,rel:!0});var Mr=i(ae);K=s(Mr,"the Pile"),Mr.forEach(t),Ge=s(po," dataset."),po.forEach(t),Te=u(o),W=r(o,"P",{});var xs=i(W);xe=s(xs,"This model was contributed by "),re=r(xs,"A",{href:!0,rel:!0});var qr=i(re);ie=s(qr,"Stella Biderman"),qr.forEach(t),M=s(xs,"."),xs.forEach(t),q=u(o),pe=r(o,"P",{});var Cr=i(pe);R=s(Cr,"Tips:"),Cr.forEach(t),ye=u(o),he=r(o,"UL",{});var zr=i(he);A=r(zr,"LI",{});var yt=i(A);Ee=s(yt,"To load "),le=r(yt,"A",{href:!0,rel:!0});var Ar=i(le);z=s(Ar,"GPT-J"),Ar.forEach(t),Je=s(yt,` in float32 one would need at least 2x model size CPU
RAM: 1x for initial weights and another 1x to load the checkpoint. So for GPT-J it would take at least 48GB of CPU
RAM to just load the model. To reduce the CPU RAM usage there are a few options. The `),B=r(yt,"CODE",{});var Lr=i(B);Me=s(Lr,"torch_dtype"),Lr.forEach(t),qe=s(yt,` argument can be
used to initialize the model in half-precision. And the `),Q=r(yt,"CODE",{});var Ir=i(Q);Ce=s(Ir,"low_cpu_mem_usage"),Ir.forEach(t),ze=s(yt,` argument can be used to keep the RAM
usage to 1x. There is also a `),I=r(yt,"A",{href:!0,rel:!0});var Or=i(I);Ae=s(Or,"fp16 branch"),Or.forEach(t),V=s(yt,` which stores
the fp16 weights, which could be used to further minimize the RAM usage. Combining all this it should take roughly
12.1GB of CPU RAM to load the model.`),yt.forEach(t),zr.forEach(t),ve=u(o),k(X.$$.fragment,o),C=u(o),ne=r(o,"UL",{});var Es=i(ne);L=r(Es,"LI",{});var Nr=i(L);ue=r(Nr,"P",{});var ta=i(ue);Le=s(ta,`The model should fit on 16GB GPU for inference. For training/fine-tuning it would take much more GPU RAM. Adam
optimizer for example makes four copies of the model: model, gradients, average and squared average of the gradients.
So it would need at least 4x model size GPU memory, even with mixed precision as gradient updates are in fp32. This
is not including the activations and data batches, which would again require some more GPU RAM. So one should explore
solutions such as DeepSpeed, to train/fine-tune the model. Another option is to use the original codebase to
train/fine-tune the model on TPU and then convert the model to Transformers format for inference. Instructions for
that could be found `),y=r(ta,"A",{href:!0,rel:!0});var Sr=i(y);x=s(Sr,"here"),Sr.forEach(t),ta.forEach(t),Nr.forEach(t),Xe=u(Es),ee=r(Es,"LI",{});var Dr=i(ee);de=r(Dr,"P",{});var Ct=i(de);Ye=s(Ct,`Although the embedding matrix has a size of 50400, only 50257 entries are used by the GPT-2 tokenizer. These extra
tokens are added for the sake of efficiency on TPUs. To avoid the mis-match between embedding matrix size and vocab
size, the tokenizer for `),J=r(Ct,"A",{href:!0,rel:!0});var Wr=i(J);Ze=s(Wr,"GPT-J"),Wr.forEach(t),et=s(Ct,` contains 143 extra tokens
`),Se=r(Ct,"CODE",{});var Ur=i(Se);tt=s(Ur,"<|extratoken_1|>... <|extratoken_143|>"),Ur.forEach(t),ot=s(Ct,", so the "),S=r(Ct,"CODE",{});var Br=i(S);Y=s(Br,"vocab_size"),Br.forEach(t),nt=s(Ct," of tokenizer also becomes 50400."),Ct.forEach(t),Dr.forEach(t),Es.forEach(t),Re=u(o),D=r(o,"H3",{class:!0});var Js=i(D);we=r(Js,"A",{id:!0,class:!0,href:!0});var Qr=i(we);De=r(Qr,"SPAN",{});var Zh=i(De);k(ce.$$.fragment,Zh),Zh.forEach(t),Qr.forEach(t),st=u(Js),te=r(Js,"SPAN",{});var eu=i(te);at=s(eu,"Generation"),eu.forEach(t),Js.forEach(t),Hr=u(o),ho=r(o,"P",{});var vi=i(ho);Ki=s(vi,"The "),Ms=r(vi,"A",{href:!0});var tu=i(Ms);Ri=s(tu,"generate()"),tu.forEach(t),Vi=s(vi,` method can be used to generate text using GPT-J
model.`),vi.forEach(t),Kr=u(o),k(hn.$$.fragment,o),Rr=u(o),qs=r(o,"P",{});var ou=i(qs);Xi=s(ou,"\u2026or in float16 precision:"),ou.forEach(t),Vr=u(o),k(un.$$.fragment,o),Xr=u(o),St=r(o,"H2",{class:!0});var wi=i(St);uo=r(wi,"A",{id:!0,class:!0,href:!0});var nu=i(uo);ga=r(nu,"SPAN",{});var su=i(ga);k(fn.$$.fragment,su),su.forEach(t),nu.forEach(t),Yi=u(wi),_a=r(wi,"SPAN",{});var au=i(_a);Zi=s(au,"GPTJConfig"),au.forEach(t),wi.forEach(t),Yr=u(o),Et=r(o,"DIV",{class:!0});var oa=i(Et);k(mn.$$.fragment,oa),el=u(oa),ft=r(oa,"P",{});var zt=i(ft);tl=s(zt,"This is the configuration class to store the configuration of a "),Cs=r(zt,"A",{href:!0});var ru=i(Cs);ol=s(ru,"GPTJModel"),ru.forEach(t),nl=s(zt,`. It is used to instantiate a GPT-J
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the GPT-J
`),gn=r(zt,"A",{href:!0,rel:!0});var iu=i(gn);sl=s(iu,"EleutherAI/gpt-j-6B"),iu.forEach(t),al=s(zt,` architecture. Configuration objects inherit from
`),zs=r(zt,"A",{href:!0});var lu=i(zs);rl=s(lu,"PretrainedConfig"),lu.forEach(t),il=s(zt," and can be used to control the model outputs. Read the documentation from "),As=r(zt,"A",{href:!0});var du=i(As);ll=s(du,"PretrainedConfig"),du.forEach(t),dl=s(zt,`
for more information.`),zt.forEach(t),cl=u(oa),k(fo.$$.fragment,oa),oa.forEach(t),Zr=u(o),Dt=r(o,"H2",{class:!0});var ki=i(Dt);mo=r(ki,"A",{id:!0,class:!0,href:!0});var cu=i(mo);Ta=r(cu,"SPAN",{});var pu=i(Ta);k(_n.$$.fragment,pu),pu.forEach(t),cu.forEach(t),pl=u(ki),ya=r(ki,"SPAN",{});var hu=i(ya);hl=s(hu,"GPTJModel"),hu.forEach(t),ki.forEach(t),ei=u(o),Jt=r(o,"DIV",{class:!0});var na=i(Jt);k(Tn.$$.fragment,na),ul=u(na),yn=r(na,"P",{});var bi=i(yn);fl=s(bi,`The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),vn=r(bi,"A",{href:!0,rel:!0});var uu=i(vn);ml=s(uu,"torch.nn.Module"),uu.forEach(t),gl=s(bi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),bi.forEach(t),_l=u(na),vt=r(na,"DIV",{class:!0});var tn=i(vt);k(wn.$$.fragment,tn),Tl=u(tn),Wt=r(tn,"P",{});var sa=i(Wt);yl=s(sa,"The "),Ls=r(sa,"A",{href:!0});var fu=i(Ls);vl=s(fu,"GPTJModel"),fu.forEach(t),wl=s(sa," forward method, overrides the "),va=r(sa,"CODE",{});var mu=i(va);kl=s(mu,"__call__"),mu.forEach(t),bl=s(sa," special method."),sa.forEach(t),$l=u(tn),k(go.$$.fragment,tn),Pl=u(tn),k(_o.$$.fragment,tn),tn.forEach(t),na.forEach(t),ti=u(o),Ut=r(o,"H2",{class:!0});var $i=i(Ut);To=r($i,"A",{id:!0,class:!0,href:!0});var gu=i(To);wa=r(gu,"SPAN",{});var _u=i(wa);k(kn.$$.fragment,_u),_u.forEach(t),gu.forEach(t),Fl=u($i),ka=r($i,"SPAN",{});var Tu=i(ka);jl=s(Tu,"GPTJForCausalLM"),Tu.forEach(t),$i.forEach(t),oi=u(o),mt=r(o,"DIV",{class:!0});var on=i(mt);k(bn.$$.fragment,on),Gl=u(on),ba=r(on,"P",{});var yu=i(ba);xl=s(yu,"The GPT-J Model transformer with a language modeling head on top."),yu.forEach(t),El=u(on),$n=r(on,"P",{});var Pi=i($n);Jl=s(Pi,"This model is a PyTorch "),Pn=r(Pi,"A",{href:!0,rel:!0});var vu=i(Pn);Ml=s(vu,"torch.nn.Module"),vu.forEach(t),ql=s(Pi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pi.forEach(t),Cl=u(on),wt=r(on,"DIV",{class:!0});var nn=i(wt);k(Fn.$$.fragment,nn),zl=u(nn),Bt=r(nn,"P",{});var aa=i(Bt);Al=s(aa,"The "),Is=r(aa,"A",{href:!0});var wu=i(Is);Ll=s(wu,"GPTJForCausalLM"),wu.forEach(t),Il=s(aa," forward method, overrides the "),$a=r(aa,"CODE",{});var ku=i($a);Ol=s(ku,"__call__"),ku.forEach(t),Nl=s(aa," special method."),aa.forEach(t),Sl=u(nn),k(yo.$$.fragment,nn),Dl=u(nn),k(vo.$$.fragment,nn),nn.forEach(t),on.forEach(t),ni=u(o),Qt=r(o,"H2",{class:!0});var Fi=i(Qt);wo=r(Fi,"A",{id:!0,class:!0,href:!0});var bu=i(wo);Pa=r(bu,"SPAN",{});var $u=i(Pa);k(jn.$$.fragment,$u),$u.forEach(t),bu.forEach(t),Wl=u(Fi),Fa=r(Fi,"SPAN",{});var Pu=i(Fa);Ul=s(Pu,"GPTJForSequenceClassification"),Pu.forEach(t),Fi.forEach(t),si=u(o),We=r(o,"DIV",{class:!0});var Ft=i(We);k(Gn.$$.fragment,Ft),Bl=u(Ft),ja=r(Ft,"P",{});var Fu=i(ja);Ql=s(Fu,"The GPT-J Model transformer with a sequence classification head on top (linear layer)."),Fu.forEach(t),Hl=u(Ft),Os=r(Ft,"P",{});var Xh=i(Os);Ns=r(Xh,"A",{href:!0});var ju=i(Ns);Kl=s(ju,"GPTJForSequenceClassification"),ju.forEach(t),Rl=s(Xh,` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),Xh.forEach(t),Vl=u(Ft),gt=r(Ft,"P",{});var At=i(gt);Xl=s(At,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ga=r(At,"CODE",{});var Gu=i(Ga);Yl=s(Gu,"pad_token_id"),Gu.forEach(t),Zl=s(At,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),xa=r(At,"CODE",{});var xu=i(xa);ed=s(xu,"pad_token_id"),xu.forEach(t),td=s(At,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ea=r(At,"CODE",{});var Eu=i(Ea);od=s(Eu,"inputs_embeds"),Eu.forEach(t),nd=s(At," are passed instead of "),Ja=r(At,"CODE",{});var Ju=i(Ja);sd=s(Ju,"input_ids"),Ju.forEach(t),ad=s(At,`, it does the same (take the last value in
each row of the batch).`),At.forEach(t),rd=u(Ft),xn=r(Ft,"P",{});var ji=i(xn);id=s(ji,"This model is a PyTorch "),En=r(ji,"A",{href:!0,rel:!0});var Mu=i(En);ld=s(Mu,"torch.nn.Module"),Mu.forEach(t),dd=s(ji,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ji.forEach(t),cd=u(Ft),Ne=r(Ft,"DIV",{class:!0});var dt=i(Ne);k(Jn.$$.fragment,dt),pd=u(dt),Ht=r(dt,"P",{});var ra=i(Ht);hd=s(ra,"The "),Ss=r(ra,"A",{href:!0});var qu=i(Ss);ud=s(qu,"GPTJForSequenceClassification"),qu.forEach(t),fd=s(ra," forward method, overrides the "),Ma=r(ra,"CODE",{});var Cu=i(Ma);md=s(Cu,"__call__"),Cu.forEach(t),gd=s(ra," special method."),ra.forEach(t),_d=u(dt),k(ko.$$.fragment,dt),Td=u(dt),k(bo.$$.fragment,dt),yd=u(dt),k($o.$$.fragment,dt),vd=u(dt),k(Po.$$.fragment,dt),wd=u(dt),k(Fo.$$.fragment,dt),dt.forEach(t),Ft.forEach(t),ai=u(o),Kt=r(o,"H2",{class:!0});var Gi=i(Kt);jo=r(Gi,"A",{id:!0,class:!0,href:!0});var zu=i(jo);qa=r(zu,"SPAN",{});var Au=i(qa);k(Mn.$$.fragment,Au),Au.forEach(t),zu.forEach(t),kd=u(Gi),Ca=r(Gi,"SPAN",{});var Lu=i(Ca);bd=s(Lu,"GPTJForQuestionAnswering"),Lu.forEach(t),Gi.forEach(t),ri=u(o),_t=r(o,"DIV",{class:!0});var sn=i(_t);k(qn.$$.fragment,sn),$d=u(sn),Rt=r(sn,"P",{});var ia=i(Rt);Pd=s(ia,`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),za=r(ia,"CODE",{});var Iu=i(za);Fd=s(Iu,"span start logits"),Iu.forEach(t),jd=s(ia," and "),Aa=r(ia,"CODE",{});var Ou=i(Aa);Gd=s(Ou,"span end logits"),Ou.forEach(t),xd=s(ia,")."),ia.forEach(t),Ed=u(sn),Cn=r(sn,"P",{});var xi=i(Cn);Jd=s(xi,"This model is a PyTorch "),zn=r(xi,"A",{href:!0,rel:!0});var Nu=i(zn);Md=s(Nu,"torch.nn.Module"),Nu.forEach(t),qd=s(xi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xi.forEach(t),Cd=u(sn),rt=r(sn,"DIV",{class:!0});var Lt=i(rt);k(An.$$.fragment,Lt),zd=u(Lt),Vt=r(Lt,"P",{});var la=i(Vt);Ad=s(la,"The "),Ds=r(la,"A",{href:!0});var Su=i(Ds);Ld=s(Su,"GPTJForQuestionAnswering"),Su.forEach(t),Id=s(la," forward method, overrides the "),La=r(la,"CODE",{});var Du=i(La);Od=s(Du,"__call__"),Du.forEach(t),Nd=s(la," special method."),la.forEach(t),Sd=u(Lt),k(Go.$$.fragment,Lt),Dd=u(Lt),k(xo.$$.fragment,Lt),Wd=u(Lt),k(Eo.$$.fragment,Lt),Lt.forEach(t),sn.forEach(t),ii=u(o),Xt=r(o,"H2",{class:!0});var Ei=i(Xt);Jo=r(Ei,"A",{id:!0,class:!0,href:!0});var Wu=i(Jo);Ia=r(Wu,"SPAN",{});var Uu=i(Ia);k(Ln.$$.fragment,Uu),Uu.forEach(t),Wu.forEach(t),Ud=u(Ei),Oa=r(Ei,"SPAN",{});var Bu=i(Oa);Bd=s(Bu,"TFGPTJModel"),Bu.forEach(t),Ei.forEach(t),li=u(o),Ue=r(o,"DIV",{class:!0});var jt=i(Ue);k(In.$$.fragment,jt),Qd=u(jt),Na=r(jt,"P",{});var Qu=i(Na);Hd=s(Qu,"The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top."),Qu.forEach(t),Kd=u(jt),On=r(jt,"P",{});var Ji=i(On);Rd=s(Ji,"This model inherits from "),Ws=r(Ji,"A",{href:!0});var Hu=i(Ws);Vd=s(Hu,"TFPreTrainedModel"),Hu.forEach(t),Xd=s(Ji,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ji.forEach(t),Yd=u(jt),Nn=r(jt,"P",{});var Mi=i(Nn);Zd=s(Mi,"This model is also a "),Sn=r(Mi,"A",{href:!0,rel:!0});var Ku=i(Sn);ec=s(Ku,"tf.keras.Model"),Ku.forEach(t),tc=s(Mi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mi.forEach(t),oc=u(jt),k(Mo.$$.fragment,jt),nc=u(jt),kt=r(jt,"DIV",{class:!0});var an=i(kt);k(Dn.$$.fragment,an),sc=u(an),Yt=r(an,"P",{});var da=i(Yt);ac=s(da,"The "),Us=r(da,"A",{href:!0});var Ru=i(Us);rc=s(Ru,"TFGPTJModel"),Ru.forEach(t),ic=s(da," forward method, overrides the "),Sa=r(da,"CODE",{});var Vu=i(Sa);lc=s(Vu,"__call__"),Vu.forEach(t),dc=s(da," special method."),da.forEach(t),cc=u(an),k(qo.$$.fragment,an),pc=u(an),k(Co.$$.fragment,an),an.forEach(t),jt.forEach(t),di=u(o),Zt=r(o,"H2",{class:!0});var qi=i(Zt);zo=r(qi,"A",{id:!0,class:!0,href:!0});var Xu=i(zo);Da=r(Xu,"SPAN",{});var Yu=i(Da);k(Wn.$$.fragment,Yu),Yu.forEach(t),Xu.forEach(t),hc=u(qi),Wa=r(qi,"SPAN",{});var Zu=i(Wa);uc=s(Zu,"TFGPTJForCausalLM"),Zu.forEach(t),qi.forEach(t),ci=u(o),Be=r(o,"DIV",{class:!0});var Gt=i(Be);k(Un.$$.fragment,Gt),fc=u(Gt),Ua=r(Gt,"P",{});var ef=i(Ua);mc=s(ef,"The GPT-J Model transformer with a language modeling head on top."),ef.forEach(t),gc=u(Gt),Bn=r(Gt,"P",{});var Ci=i(Bn);_c=s(Ci,"This model inherits from "),Bs=r(Ci,"A",{href:!0});var tf=i(Bs);Tc=s(tf,"TFPreTrainedModel"),tf.forEach(t),yc=s(Ci,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ci.forEach(t),vc=u(Gt),Qn=r(Gt,"P",{});var zi=i(Qn);wc=s(zi,"This model is also a "),Hn=r(zi,"A",{href:!0,rel:!0});var of=i(Hn);kc=s(of,"tf.keras.Model"),of.forEach(t),bc=s(zi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zi.forEach(t),$c=u(Gt),k(Ao.$$.fragment,Gt),Pc=u(Gt),bt=r(Gt,"DIV",{class:!0});var rn=i(bt);k(Kn.$$.fragment,rn),Fc=u(rn),eo=r(rn,"P",{});var ca=i(eo);jc=s(ca,"The "),Qs=r(ca,"A",{href:!0});var nf=i(Qs);Gc=s(nf,"TFGPTJForCausalLM"),nf.forEach(t),xc=s(ca," forward method, overrides the "),Ba=r(ca,"CODE",{});var sf=i(Ba);Ec=s(sf,"__call__"),sf.forEach(t),Jc=s(ca," special method."),ca.forEach(t),Mc=u(rn),k(Lo.$$.fragment,rn),qc=u(rn),k(Io.$$.fragment,rn),rn.forEach(t),Gt.forEach(t),pi=u(o),to=r(o,"H2",{class:!0});var Ai=i(to);Oo=r(Ai,"A",{id:!0,class:!0,href:!0});var af=i(Oo);Qa=r(af,"SPAN",{});var rf=i(Qa);k(Rn.$$.fragment,rf),rf.forEach(t),af.forEach(t),Cc=u(Ai),Ha=r(Ai,"SPAN",{});var lf=i(Ha);zc=s(lf,"TFGPTJForSequenceClassification"),lf.forEach(t),Ai.forEach(t),hi=u(o),fe=r(o,"DIV",{class:!0});var Ve=i(fe);k(Vn.$$.fragment,Ve),Ac=u(Ve),Ka=r(Ve,"P",{});var df=i(Ka);Lc=s(df,"The GPT-J Model transformer with a sequence classification head on top (linear layer)."),df.forEach(t),Ic=u(Ve),Hs=r(Ve,"P",{});var Yh=i(Hs);Ks=r(Yh,"A",{href:!0});var cf=i(Ks);Oc=s(cf,"GPTJForSequenceClassification"),cf.forEach(t),Nc=s(Yh,` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),Yh.forEach(t),Sc=u(Ve),Tt=r(Ve,"P",{});var It=i(Tt);Dc=s(It,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ra=r(It,"CODE",{});var pf=i(Ra);Wc=s(pf,"pad_token_id"),pf.forEach(t),Uc=s(It,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Va=r(It,"CODE",{});var hf=i(Va);Bc=s(hf,"pad_token_id"),hf.forEach(t),Qc=s(It,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Xa=r(It,"CODE",{});var uf=i(Xa);Hc=s(uf,"inputs_embeds"),uf.forEach(t),Kc=s(It," are passed instead of "),Ya=r(It,"CODE",{});var ff=i(Ya);Rc=s(ff,"input_ids"),ff.forEach(t),Vc=s(It,`, it does the same (take the last value in
each row of the batch).`),It.forEach(t),Xc=u(Ve),Xn=r(Ve,"P",{});var Li=i(Xn);Yc=s(Li,"This model inherits from "),Rs=r(Li,"A",{href:!0});var mf=i(Rs);Zc=s(mf,"TFPreTrainedModel"),mf.forEach(t),ep=s(Li,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Li.forEach(t),tp=u(Ve),Yn=r(Ve,"P",{});var Ii=i(Yn);op=s(Ii,"This model is also a "),Zn=r(Ii,"A",{href:!0,rel:!0});var gf=i(Zn);np=s(gf,"tf.keras.Model"),gf.forEach(t),sp=s(Ii,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ii.forEach(t),ap=u(Ve),k(No.$$.fragment,Ve),rp=u(Ve),it=r(Ve,"DIV",{class:!0});var Ot=i(it);k(es.$$.fragment,Ot),ip=u(Ot),oo=r(Ot,"P",{});var pa=i(oo);lp=s(pa,"The "),Vs=r(pa,"A",{href:!0});var _f=i(Vs);dp=s(_f,"TFGPTJForSequenceClassification"),_f.forEach(t),cp=s(pa," forward method, overrides the "),Za=r(pa,"CODE",{});var Tf=i(Za);pp=s(Tf,"__call__"),Tf.forEach(t),hp=s(pa," special method."),pa.forEach(t),up=u(Ot),k(So.$$.fragment,Ot),fp=u(Ot),k(Do.$$.fragment,Ot),mp=u(Ot),k(Wo.$$.fragment,Ot),Ot.forEach(t),Ve.forEach(t),ui=u(o),no=r(o,"H2",{class:!0});var Oi=i(no);Uo=r(Oi,"A",{id:!0,class:!0,href:!0});var yf=i(Uo);er=r(yf,"SPAN",{});var vf=i(er);k(ts.$$.fragment,vf),vf.forEach(t),yf.forEach(t),gp=u(Oi),tr=r(Oi,"SPAN",{});var wf=i(tr);_p=s(wf,"TFGPTJForQuestionAnswering"),wf.forEach(t),Oi.forEach(t),fi=u(o),Qe=r(o,"DIV",{class:!0});var xt=i(Qe);k(os.$$.fragment,xt),Tp=u(xt),so=r(xt,"P",{});var ha=i(so);yp=s(ha,`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),or=r(ha,"CODE",{});var kf=i(or);vp=s(kf,"span start logits"),kf.forEach(t),wp=s(ha," and "),nr=r(ha,"CODE",{});var bf=i(nr);kp=s(bf,"span end logits"),bf.forEach(t),bp=s(ha,")."),ha.forEach(t),$p=u(xt),ns=r(xt,"P",{});var Ni=i(ns);Pp=s(Ni,"This model inherits from "),Xs=r(Ni,"A",{href:!0});var $f=i(Xs);Fp=s($f,"TFPreTrainedModel"),$f.forEach(t),jp=s(Ni,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ni.forEach(t),Gp=u(xt),ss=r(xt,"P",{});var Si=i(ss);xp=s(Si,"This model is also a "),as=r(Si,"A",{href:!0,rel:!0});var Pf=i(as);Ep=s(Pf,"tf.keras.Model"),Pf.forEach(t),Jp=s(Si,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Si.forEach(t),Mp=u(xt),k(Bo.$$.fragment,xt),qp=u(xt),lt=r(xt,"DIV",{class:!0});var Nt=i(lt);k(rs.$$.fragment,Nt),Cp=u(Nt),ao=r(Nt,"P",{});var ua=i(ao);zp=s(ua,"The "),Ys=r(ua,"A",{href:!0});var Ff=i(Ys);Ap=s(Ff,"TFGPTJForQuestionAnswering"),Ff.forEach(t),Lp=s(ua," forward method, overrides the "),sr=r(ua,"CODE",{});var jf=i(sr);Ip=s(jf,"__call__"),jf.forEach(t),Op=s(ua," special method."),ua.forEach(t),Np=u(Nt),k(Qo.$$.fragment,Nt),Sp=u(Nt),k(Ho.$$.fragment,Nt),Dp=u(Nt),k(Ko.$$.fragment,Nt),Nt.forEach(t),xt.forEach(t),mi=u(o),ro=r(o,"H2",{class:!0});var Di=i(ro);Ro=r(Di,"A",{id:!0,class:!0,href:!0});var Gf=i(Ro);ar=r(Gf,"SPAN",{});var xf=i(ar);k(is.$$.fragment,xf),xf.forEach(t),Gf.forEach(t),Wp=u(Di),rr=r(Di,"SPAN",{});var Ef=i(rr);Up=s(Ef,"FlaxGPTJModel"),Ef.forEach(t),Di.forEach(t),gi=u(o),Ie=r(o,"DIV",{class:!0});var ct=i(Ie);k(ls.$$.fragment,ct),Bp=u(ct),ir=r(ct,"P",{});var Jf=i(ir);Qp=s(Jf,"The bare GPTJ Model transformer outputting raw hidden-states without any specific head on top."),Jf.forEach(t),Hp=u(ct),ds=r(ct,"P",{});var Wi=i(ds);Kp=s(Wi,"This model inherits from "),Zs=r(Wi,"A",{href:!0});var Mf=i(Zs);Rp=s(Mf,"FlaxPreTrainedModel"),Mf.forEach(t),Vp=s(Wi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wi.forEach(t),Xp=u(ct),cs=r(ct,"P",{});var Ui=i(cs);Yp=s(Ui,`This model is also a Flax Linen
`),ps=r(Ui,"A",{href:!0,rel:!0});var qf=i(ps);Zp=s(qf,"flax.nn.Module"),qf.forEach(t),eh=s(Ui,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ui.forEach(t),th=u(ct),lr=r(ct,"P",{});var Cf=i(lr);oh=s(Cf,"Finally, this model supports inherent JAX features such as:"),Cf.forEach(t),nh=u(ct),Mt=r(ct,"UL",{});var ln=i(Mt);dr=r(ln,"LI",{});var zf=i(dr);hs=r(zf,"A",{href:!0,rel:!0});var Af=i(hs);sh=s(Af,"Just-In-Time (JIT) compilation"),Af.forEach(t),zf.forEach(t),ah=u(ln),cr=r(ln,"LI",{});var Lf=i(cr);us=r(Lf,"A",{href:!0,rel:!0});var If=i(us);rh=s(If,"Automatic Differentiation"),If.forEach(t),Lf.forEach(t),ih=u(ln),pr=r(ln,"LI",{});var Of=i(pr);fs=r(Of,"A",{href:!0,rel:!0});var Nf=i(fs);lh=s(Nf,"Vectorization"),Nf.forEach(t),Of.forEach(t),dh=u(ln),hr=r(ln,"LI",{});var Sf=i(hr);ms=r(Sf,"A",{href:!0,rel:!0});var Df=i(ms);ch=s(Df,"Parallelization"),Df.forEach(t),Sf.forEach(t),ln.forEach(t),ph=u(ct),$t=r(ct,"DIV",{class:!0});var dn=i($t);k(gs.$$.fragment,dn),hh=u(dn),io=r(dn,"P",{});var fa=i(io);uh=s(fa,"The "),ur=r(fa,"CODE",{});var Wf=i(ur);fh=s(Wf,"FlaxGPTJPreTrainedModel"),Wf.forEach(t),mh=s(fa," forward method, overrides the "),fr=r(fa,"CODE",{});var Uf=i(fr);gh=s(Uf,"__call__"),Uf.forEach(t),_h=s(fa," special method."),fa.forEach(t),Th=u(dn),k(Vo.$$.fragment,dn),yh=u(dn),k(Xo.$$.fragment,dn),dn.forEach(t),ct.forEach(t),_i=u(o),lo=r(o,"H2",{class:!0});var Bi=i(lo);Yo=r(Bi,"A",{id:!0,class:!0,href:!0});var Bf=i(Yo);mr=r(Bf,"SPAN",{});var Qf=i(mr);k(_s.$$.fragment,Qf),Qf.forEach(t),Bf.forEach(t),vh=u(Bi),gr=r(Bi,"SPAN",{});var Hf=i(gr);wh=s(Hf,"FlaxGPTJForCausalLM"),Hf.forEach(t),Bi.forEach(t),Ti=u(o),Oe=r(o,"DIV",{class:!0});var pt=i(Oe);k(Ts.$$.fragment,pt),kh=u(pt),_r=r(pt,"P",{});var Kf=i(_r);bh=s(Kf,"The GPTJ Model transformer with a language modeling head on top."),Kf.forEach(t),$h=u(pt),ys=r(pt,"P",{});var Qi=i(ys);Ph=s(Qi,"This model inherits from "),ea=r(Qi,"A",{href:!0});var Rf=i(ea);Fh=s(Rf,"FlaxPreTrainedModel"),Rf.forEach(t),jh=s(Qi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qi.forEach(t),Gh=u(pt),vs=r(pt,"P",{});var Hi=i(vs);xh=s(Hi,`This model is also a Flax Linen
`),ws=r(Hi,"A",{href:!0,rel:!0});var Vf=i(ws);Eh=s(Vf,"flax.nn.Module"),Vf.forEach(t),Jh=s(Hi,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Hi.forEach(t),Mh=u(pt),Tr=r(pt,"P",{});var Xf=i(Tr);qh=s(Xf,"Finally, this model supports inherent JAX features such as:"),Xf.forEach(t),Ch=u(pt),qt=r(pt,"UL",{});var cn=i(qt);yr=r(cn,"LI",{});var Yf=i(yr);ks=r(Yf,"A",{href:!0,rel:!0});var Zf=i(ks);zh=s(Zf,"Just-In-Time (JIT) compilation"),Zf.forEach(t),Yf.forEach(t),Ah=u(cn),vr=r(cn,"LI",{});var em=i(vr);bs=r(em,"A",{href:!0,rel:!0});var tm=i(bs);Lh=s(tm,"Automatic Differentiation"),tm.forEach(t),em.forEach(t),Ih=u(cn),wr=r(cn,"LI",{});var om=i(wr);$s=r(om,"A",{href:!0,rel:!0});var nm=i($s);Oh=s(nm,"Vectorization"),nm.forEach(t),om.forEach(t),Nh=u(cn),kr=r(cn,"LI",{});var sm=i(kr);Ps=r(sm,"A",{href:!0,rel:!0});var am=i(Ps);Sh=s(am,"Parallelization"),am.forEach(t),sm.forEach(t),cn.forEach(t),Dh=u(pt),Pt=r(pt,"DIV",{class:!0});var pn=i(Pt);k(Fs.$$.fragment,pn),Wh=u(pn),co=r(pn,"P",{});var ma=i(co);Uh=s(ma,"The "),br=r(ma,"CODE",{});var rm=i(br);Bh=s(rm,"FlaxGPTJPreTrainedModel"),rm.forEach(t),Qh=s(ma," forward method, overrides the "),$r=r(ma,"CODE",{});var im=i($r);Hh=s(im,"__call__"),im.forEach(t),Kh=s(ma," special method."),ma.forEach(t),Rh=u(pn),k(Zo.$$.fragment,pn),Vh=u(pn),k(en.$$.fragment,pn),pn.forEach(t),pt.forEach(t),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(Bm)),m(f,"id","gptj"),m(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(f,"href","#gptj"),m(c,"class","relative group"),m(oe,"id","overview"),m(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(oe,"href","#overview"),m(N,"class","relative group"),m(se,"href","https://github.com/kingoflolz/mesh-transformer-jax"),m(se,"rel","nofollow"),m(ae,"href","https://pile.eleuther.ai/"),m(ae,"rel","nofollow"),m(re,"href","https://huggingface.co/stellaathena"),m(re,"rel","nofollow"),m(le,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),m(le,"rel","nofollow"),m(I,"href","https://huggingface.co/EleutherAI/gpt-j-6B/tree/float16"),m(I,"rel","nofollow"),m(y,"href","https://github.com/kingoflolz/mesh-transformer-jax/blob/master/howto_finetune.md"),m(y,"rel","nofollow"),m(J,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),m(J,"rel","nofollow"),m(we,"id","generation"),m(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(we,"href","#generation"),m(D,"class","relative group"),m(Ms,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),m(uo,"id","transformers.GPTJConfig"),m(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(uo,"href","#transformers.GPTJConfig"),m(St,"class","relative group"),m(Cs,"href","/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJModel"),m(gn,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),m(gn,"rel","nofollow"),m(zs,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),m(As,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),m(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mo,"id","transformers.GPTJModel"),m(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(mo,"href","#transformers.GPTJModel"),m(Dt,"class","relative group"),m(vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(vn,"rel","nofollow"),m(Ls,"href","/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJModel"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(To,"id","transformers.GPTJForCausalLM"),m(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(To,"href","#transformers.GPTJForCausalLM"),m(Ut,"class","relative group"),m(Pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Pn,"rel","nofollow"),m(Is,"href","/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJForCausalLM"),m(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(wo,"id","transformers.GPTJForSequenceClassification"),m(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(wo,"href","#transformers.GPTJForSequenceClassification"),m(Qt,"class","relative group"),m(Ns,"href","/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),m(En,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(En,"rel","nofollow"),m(Ss,"href","/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),m(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jo,"id","transformers.GPTJForQuestionAnswering"),m(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jo,"href","#transformers.GPTJForQuestionAnswering"),m(Kt,"class","relative group"),m(zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(zn,"rel","nofollow"),m(Ds,"href","/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJForQuestionAnswering"),m(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Jo,"id","transformers.TFGPTJModel"),m(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Jo,"href","#transformers.TFGPTJModel"),m(Xt,"class","relative group"),m(Ws,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(Sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Sn,"rel","nofollow"),m(Us,"href","/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.TFGPTJModel"),m(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(zo,"id","transformers.TFGPTJForCausalLM"),m(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(zo,"href","#transformers.TFGPTJForCausalLM"),m(Zt,"class","relative group"),m(Bs,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(Hn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Hn,"rel","nofollow"),m(Qs,"href","/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.TFGPTJForCausalLM"),m(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oo,"id","transformers.TFGPTJForSequenceClassification"),m(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Oo,"href","#transformers.TFGPTJForSequenceClassification"),m(to,"class","relative group"),m(Ks,"href","/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),m(Rs,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(Zn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Zn,"rel","nofollow"),m(Vs,"href","/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.TFGPTJForSequenceClassification"),m(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Uo,"id","transformers.TFGPTJForQuestionAnswering"),m(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Uo,"href","#transformers.TFGPTJForQuestionAnswering"),m(no,"class","relative group"),m(Xs,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(as,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(as,"rel","nofollow"),m(Ys,"href","/docs/transformers/v4.22.2/en/model_doc/gptj#transformers.TFGPTJForQuestionAnswering"),m(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ro,"id","transformers.FlaxGPTJModel"),m(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ro,"href","#transformers.FlaxGPTJModel"),m(ro,"class","relative group"),m(Zs,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(ps,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(ps,"rel","nofollow"),m(hs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(hs,"rel","nofollow"),m(us,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(us,"rel","nofollow"),m(fs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(fs,"rel","nofollow"),m(ms,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(ms,"rel","nofollow"),m($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yo,"id","transformers.FlaxGPTJForCausalLM"),m(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Yo,"href","#transformers.FlaxGPTJForCausalLM"),m(lo,"class","relative group"),m(ea,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(ws,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(ws,"rel","nofollow"),m(ks,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(ks,"rel","nofollow"),m(bs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(bs,"rel","nofollow"),m($s,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m($s,"rel","nofollow"),m(Ps,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(Ps,"rel","nofollow"),m(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),g(o,T,_),g(o,c,_),e(c,f),e(f,v),b(l,v,null),e(c,p),e(c,E),e(E,be),g(o,ge,_),g(o,N,_),e(N,oe),e(oe,Z),b(j,Z,null),e(N,$e),e(N,U),e(U,Pe),g(o,_e,_),g(o,O,_),e(O,Fe),e(O,se),e(se,H),e(O,je),e(O,ae),e(ae,K),e(O,Ge),g(o,Te,_),g(o,W,_),e(W,xe),e(W,re),e(re,ie),e(W,M),g(o,q,_),g(o,pe,_),e(pe,R),g(o,ye,_),g(o,he,_),e(he,A),e(A,Ee),e(A,le),e(le,z),e(A,Je),e(A,B),e(B,Me),e(A,qe),e(A,Q),e(Q,Ce),e(A,ze),e(A,I),e(I,Ae),e(A,V),g(o,ve,_),b(X,o,_),g(o,C,_),g(o,ne,_),e(ne,L),e(L,ue),e(ue,Le),e(ue,y),e(y,x),e(ne,Xe),e(ne,ee),e(ee,de),e(de,Ye),e(de,J),e(J,Ze),e(de,et),e(de,Se),e(Se,tt),e(de,ot),e(de,S),e(S,Y),e(de,nt),g(o,Re,_),g(o,D,_),e(D,we),e(we,De),b(ce,De,null),e(D,st),e(D,te),e(te,at),g(o,Hr,_),g(o,ho,_),e(ho,Ki),e(ho,Ms),e(Ms,Ri),e(ho,Vi),g(o,Kr,_),b(hn,o,_),g(o,Rr,_),g(o,qs,_),e(qs,Xi),g(o,Vr,_),b(un,o,_),g(o,Xr,_),g(o,St,_),e(St,uo),e(uo,ga),b(fn,ga,null),e(St,Yi),e(St,_a),e(_a,Zi),g(o,Yr,_),g(o,Et,_),b(mn,Et,null),e(Et,el),e(Et,ft),e(ft,tl),e(ft,Cs),e(Cs,ol),e(ft,nl),e(ft,gn),e(gn,sl),e(ft,al),e(ft,zs),e(zs,rl),e(ft,il),e(ft,As),e(As,ll),e(ft,dl),e(Et,cl),b(fo,Et,null),g(o,Zr,_),g(o,Dt,_),e(Dt,mo),e(mo,Ta),b(_n,Ta,null),e(Dt,pl),e(Dt,ya),e(ya,hl),g(o,ei,_),g(o,Jt,_),b(Tn,Jt,null),e(Jt,ul),e(Jt,yn),e(yn,fl),e(yn,vn),e(vn,ml),e(yn,gl),e(Jt,_l),e(Jt,vt),b(wn,vt,null),e(vt,Tl),e(vt,Wt),e(Wt,yl),e(Wt,Ls),e(Ls,vl),e(Wt,wl),e(Wt,va),e(va,kl),e(Wt,bl),e(vt,$l),b(go,vt,null),e(vt,Pl),b(_o,vt,null),g(o,ti,_),g(o,Ut,_),e(Ut,To),e(To,wa),b(kn,wa,null),e(Ut,Fl),e(Ut,ka),e(ka,jl),g(o,oi,_),g(o,mt,_),b(bn,mt,null),e(mt,Gl),e(mt,ba),e(ba,xl),e(mt,El),e(mt,$n),e($n,Jl),e($n,Pn),e(Pn,Ml),e($n,ql),e(mt,Cl),e(mt,wt),b(Fn,wt,null),e(wt,zl),e(wt,Bt),e(Bt,Al),e(Bt,Is),e(Is,Ll),e(Bt,Il),e(Bt,$a),e($a,Ol),e(Bt,Nl),e(wt,Sl),b(yo,wt,null),e(wt,Dl),b(vo,wt,null),g(o,ni,_),g(o,Qt,_),e(Qt,wo),e(wo,Pa),b(jn,Pa,null),e(Qt,Wl),e(Qt,Fa),e(Fa,Ul),g(o,si,_),g(o,We,_),b(Gn,We,null),e(We,Bl),e(We,ja),e(ja,Ql),e(We,Hl),e(We,Os),e(Os,Ns),e(Ns,Kl),e(Os,Rl),e(We,Vl),e(We,gt),e(gt,Xl),e(gt,Ga),e(Ga,Yl),e(gt,Zl),e(gt,xa),e(xa,ed),e(gt,td),e(gt,Ea),e(Ea,od),e(gt,nd),e(gt,Ja),e(Ja,sd),e(gt,ad),e(We,rd),e(We,xn),e(xn,id),e(xn,En),e(En,ld),e(xn,dd),e(We,cd),e(We,Ne),b(Jn,Ne,null),e(Ne,pd),e(Ne,Ht),e(Ht,hd),e(Ht,Ss),e(Ss,ud),e(Ht,fd),e(Ht,Ma),e(Ma,md),e(Ht,gd),e(Ne,_d),b(ko,Ne,null),e(Ne,Td),b(bo,Ne,null),e(Ne,yd),b($o,Ne,null),e(Ne,vd),b(Po,Ne,null),e(Ne,wd),b(Fo,Ne,null),g(o,ai,_),g(o,Kt,_),e(Kt,jo),e(jo,qa),b(Mn,qa,null),e(Kt,kd),e(Kt,Ca),e(Ca,bd),g(o,ri,_),g(o,_t,_),b(qn,_t,null),e(_t,$d),e(_t,Rt),e(Rt,Pd),e(Rt,za),e(za,Fd),e(Rt,jd),e(Rt,Aa),e(Aa,Gd),e(Rt,xd),e(_t,Ed),e(_t,Cn),e(Cn,Jd),e(Cn,zn),e(zn,Md),e(Cn,qd),e(_t,Cd),e(_t,rt),b(An,rt,null),e(rt,zd),e(rt,Vt),e(Vt,Ad),e(Vt,Ds),e(Ds,Ld),e(Vt,Id),e(Vt,La),e(La,Od),e(Vt,Nd),e(rt,Sd),b(Go,rt,null),e(rt,Dd),b(xo,rt,null),e(rt,Wd),b(Eo,rt,null),g(o,ii,_),g(o,Xt,_),e(Xt,Jo),e(Jo,Ia),b(Ln,Ia,null),e(Xt,Ud),e(Xt,Oa),e(Oa,Bd),g(o,li,_),g(o,Ue,_),b(In,Ue,null),e(Ue,Qd),e(Ue,Na),e(Na,Hd),e(Ue,Kd),e(Ue,On),e(On,Rd),e(On,Ws),e(Ws,Vd),e(On,Xd),e(Ue,Yd),e(Ue,Nn),e(Nn,Zd),e(Nn,Sn),e(Sn,ec),e(Nn,tc),e(Ue,oc),b(Mo,Ue,null),e(Ue,nc),e(Ue,kt),b(Dn,kt,null),e(kt,sc),e(kt,Yt),e(Yt,ac),e(Yt,Us),e(Us,rc),e(Yt,ic),e(Yt,Sa),e(Sa,lc),e(Yt,dc),e(kt,cc),b(qo,kt,null),e(kt,pc),b(Co,kt,null),g(o,di,_),g(o,Zt,_),e(Zt,zo),e(zo,Da),b(Wn,Da,null),e(Zt,hc),e(Zt,Wa),e(Wa,uc),g(o,ci,_),g(o,Be,_),b(Un,Be,null),e(Be,fc),e(Be,Ua),e(Ua,mc),e(Be,gc),e(Be,Bn),e(Bn,_c),e(Bn,Bs),e(Bs,Tc),e(Bn,yc),e(Be,vc),e(Be,Qn),e(Qn,wc),e(Qn,Hn),e(Hn,kc),e(Qn,bc),e(Be,$c),b(Ao,Be,null),e(Be,Pc),e(Be,bt),b(Kn,bt,null),e(bt,Fc),e(bt,eo),e(eo,jc),e(eo,Qs),e(Qs,Gc),e(eo,xc),e(eo,Ba),e(Ba,Ec),e(eo,Jc),e(bt,Mc),b(Lo,bt,null),e(bt,qc),b(Io,bt,null),g(o,pi,_),g(o,to,_),e(to,Oo),e(Oo,Qa),b(Rn,Qa,null),e(to,Cc),e(to,Ha),e(Ha,zc),g(o,hi,_),g(o,fe,_),b(Vn,fe,null),e(fe,Ac),e(fe,Ka),e(Ka,Lc),e(fe,Ic),e(fe,Hs),e(Hs,Ks),e(Ks,Oc),e(Hs,Nc),e(fe,Sc),e(fe,Tt),e(Tt,Dc),e(Tt,Ra),e(Ra,Wc),e(Tt,Uc),e(Tt,Va),e(Va,Bc),e(Tt,Qc),e(Tt,Xa),e(Xa,Hc),e(Tt,Kc),e(Tt,Ya),e(Ya,Rc),e(Tt,Vc),e(fe,Xc),e(fe,Xn),e(Xn,Yc),e(Xn,Rs),e(Rs,Zc),e(Xn,ep),e(fe,tp),e(fe,Yn),e(Yn,op),e(Yn,Zn),e(Zn,np),e(Yn,sp),e(fe,ap),b(No,fe,null),e(fe,rp),e(fe,it),b(es,it,null),e(it,ip),e(it,oo),e(oo,lp),e(oo,Vs),e(Vs,dp),e(oo,cp),e(oo,Za),e(Za,pp),e(oo,hp),e(it,up),b(So,it,null),e(it,fp),b(Do,it,null),e(it,mp),b(Wo,it,null),g(o,ui,_),g(o,no,_),e(no,Uo),e(Uo,er),b(ts,er,null),e(no,gp),e(no,tr),e(tr,_p),g(o,fi,_),g(o,Qe,_),b(os,Qe,null),e(Qe,Tp),e(Qe,so),e(so,yp),e(so,or),e(or,vp),e(so,wp),e(so,nr),e(nr,kp),e(so,bp),e(Qe,$p),e(Qe,ns),e(ns,Pp),e(ns,Xs),e(Xs,Fp),e(ns,jp),e(Qe,Gp),e(Qe,ss),e(ss,xp),e(ss,as),e(as,Ep),e(ss,Jp),e(Qe,Mp),b(Bo,Qe,null),e(Qe,qp),e(Qe,lt),b(rs,lt,null),e(lt,Cp),e(lt,ao),e(ao,zp),e(ao,Ys),e(Ys,Ap),e(ao,Lp),e(ao,sr),e(sr,Ip),e(ao,Op),e(lt,Np),b(Qo,lt,null),e(lt,Sp),b(Ho,lt,null),e(lt,Dp),b(Ko,lt,null),g(o,mi,_),g(o,ro,_),e(ro,Ro),e(Ro,ar),b(is,ar,null),e(ro,Wp),e(ro,rr),e(rr,Up),g(o,gi,_),g(o,Ie,_),b(ls,Ie,null),e(Ie,Bp),e(Ie,ir),e(ir,Qp),e(Ie,Hp),e(Ie,ds),e(ds,Kp),e(ds,Zs),e(Zs,Rp),e(ds,Vp),e(Ie,Xp),e(Ie,cs),e(cs,Yp),e(cs,ps),e(ps,Zp),e(cs,eh),e(Ie,th),e(Ie,lr),e(lr,oh),e(Ie,nh),e(Ie,Mt),e(Mt,dr),e(dr,hs),e(hs,sh),e(Mt,ah),e(Mt,cr),e(cr,us),e(us,rh),e(Mt,ih),e(Mt,pr),e(pr,fs),e(fs,lh),e(Mt,dh),e(Mt,hr),e(hr,ms),e(ms,ch),e(Ie,ph),e(Ie,$t),b(gs,$t,null),e($t,hh),e($t,io),e(io,uh),e(io,ur),e(ur,fh),e(io,mh),e(io,fr),e(fr,gh),e(io,_h),e($t,Th),b(Vo,$t,null),e($t,yh),b(Xo,$t,null),g(o,_i,_),g(o,lo,_),e(lo,Yo),e(Yo,mr),b(_s,mr,null),e(lo,vh),e(lo,gr),e(gr,wh),g(o,Ti,_),g(o,Oe,_),b(Ts,Oe,null),e(Oe,kh),e(Oe,_r),e(_r,bh),e(Oe,$h),e(Oe,ys),e(ys,Ph),e(ys,ea),e(ea,Fh),e(ys,jh),e(Oe,Gh),e(Oe,vs),e(vs,xh),e(vs,ws),e(ws,Eh),e(vs,Jh),e(Oe,Mh),e(Oe,Tr),e(Tr,qh),e(Oe,Ch),e(Oe,qt),e(qt,yr),e(yr,ks),e(ks,zh),e(qt,Ah),e(qt,vr),e(vr,bs),e(bs,Lh),e(qt,Ih),e(qt,wr),e(wr,$s),e($s,Oh),e(qt,Nh),e(qt,kr),e(kr,Ps),e(Ps,Sh),e(Oe,Dh),e(Oe,Pt),b(Fs,Pt,null),e(Pt,Wh),e(Pt,co),e(co,Uh),e(co,br),e(br,Bh),e(co,Qh),e(co,$r),e($r,Hh),e(co,Kh),e(Pt,Rh),b(Zo,Pt,null),e(Pt,Vh),b(en,Pt,null),yi=!0},p(o,[_]){const js={};_&2&&(js.$$scope={dirty:_,ctx:o}),fo.$set(js);const Pr={};_&2&&(Pr.$$scope={dirty:_,ctx:o}),go.$set(Pr);const Fr={};_&2&&(Fr.$$scope={dirty:_,ctx:o}),_o.$set(Fr);const jr={};_&2&&(jr.$$scope={dirty:_,ctx:o}),yo.$set(jr);const Gs={};_&2&&(Gs.$$scope={dirty:_,ctx:o}),vo.$set(Gs);const Gr={};_&2&&(Gr.$$scope={dirty:_,ctx:o}),ko.$set(Gr);const xr={};_&2&&(xr.$$scope={dirty:_,ctx:o}),bo.$set(xr);const Er={};_&2&&(Er.$$scope={dirty:_,ctx:o}),$o.$set(Er);const po={};_&2&&(po.$$scope={dirty:_,ctx:o}),Po.$set(po);const Jr={};_&2&&(Jr.$$scope={dirty:_,ctx:o}),Fo.$set(Jr);const Mr={};_&2&&(Mr.$$scope={dirty:_,ctx:o}),Go.$set(Mr);const xs={};_&2&&(xs.$$scope={dirty:_,ctx:o}),xo.$set(xs);const qr={};_&2&&(qr.$$scope={dirty:_,ctx:o}),Eo.$set(qr);const Cr={};_&2&&(Cr.$$scope={dirty:_,ctx:o}),Mo.$set(Cr);const zr={};_&2&&(zr.$$scope={dirty:_,ctx:o}),qo.$set(zr);const yt={};_&2&&(yt.$$scope={dirty:_,ctx:o}),Co.$set(yt);const Ar={};_&2&&(Ar.$$scope={dirty:_,ctx:o}),Ao.$set(Ar);const Lr={};_&2&&(Lr.$$scope={dirty:_,ctx:o}),Lo.$set(Lr);const Ir={};_&2&&(Ir.$$scope={dirty:_,ctx:o}),Io.$set(Ir);const Or={};_&2&&(Or.$$scope={dirty:_,ctx:o}),No.$set(Or);const Es={};_&2&&(Es.$$scope={dirty:_,ctx:o}),So.$set(Es);const Nr={};_&2&&(Nr.$$scope={dirty:_,ctx:o}),Do.$set(Nr);const ta={};_&2&&(ta.$$scope={dirty:_,ctx:o}),Wo.$set(ta);const Sr={};_&2&&(Sr.$$scope={dirty:_,ctx:o}),Bo.$set(Sr);const Dr={};_&2&&(Dr.$$scope={dirty:_,ctx:o}),Qo.$set(Dr);const Ct={};_&2&&(Ct.$$scope={dirty:_,ctx:o}),Ho.$set(Ct);const Wr={};_&2&&(Wr.$$scope={dirty:_,ctx:o}),Ko.$set(Wr);const Ur={};_&2&&(Ur.$$scope={dirty:_,ctx:o}),Vo.$set(Ur);const Br={};_&2&&(Br.$$scope={dirty:_,ctx:o}),Xo.$set(Br);const Js={};_&2&&(Js.$$scope={dirty:_,ctx:o}),Zo.$set(Js);const Qr={};_&2&&(Qr.$$scope={dirty:_,ctx:o}),en.$set(Qr)},i(o){yi||($(l.$$.fragment,o),$(j.$$.fragment,o),$(X.$$.fragment,o),$(ce.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),$(fn.$$.fragment,o),$(mn.$$.fragment,o),$(fo.$$.fragment,o),$(_n.$$.fragment,o),$(Tn.$$.fragment,o),$(wn.$$.fragment,o),$(go.$$.fragment,o),$(_o.$$.fragment,o),$(kn.$$.fragment,o),$(bn.$$.fragment,o),$(Fn.$$.fragment,o),$(yo.$$.fragment,o),$(vo.$$.fragment,o),$(jn.$$.fragment,o),$(Gn.$$.fragment,o),$(Jn.$$.fragment,o),$(ko.$$.fragment,o),$(bo.$$.fragment,o),$($o.$$.fragment,o),$(Po.$$.fragment,o),$(Fo.$$.fragment,o),$(Mn.$$.fragment,o),$(qn.$$.fragment,o),$(An.$$.fragment,o),$(Go.$$.fragment,o),$(xo.$$.fragment,o),$(Eo.$$.fragment,o),$(Ln.$$.fragment,o),$(In.$$.fragment,o),$(Mo.$$.fragment,o),$(Dn.$$.fragment,o),$(qo.$$.fragment,o),$(Co.$$.fragment,o),$(Wn.$$.fragment,o),$(Un.$$.fragment,o),$(Ao.$$.fragment,o),$(Kn.$$.fragment,o),$(Lo.$$.fragment,o),$(Io.$$.fragment,o),$(Rn.$$.fragment,o),$(Vn.$$.fragment,o),$(No.$$.fragment,o),$(es.$$.fragment,o),$(So.$$.fragment,o),$(Do.$$.fragment,o),$(Wo.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(Bo.$$.fragment,o),$(rs.$$.fragment,o),$(Qo.$$.fragment,o),$(Ho.$$.fragment,o),$(Ko.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(gs.$$.fragment,o),$(Vo.$$.fragment,o),$(Xo.$$.fragment,o),$(_s.$$.fragment,o),$(Ts.$$.fragment,o),$(Fs.$$.fragment,o),$(Zo.$$.fragment,o),$(en.$$.fragment,o),yi=!0)},o(o){P(l.$$.fragment,o),P(j.$$.fragment,o),P(X.$$.fragment,o),P(ce.$$.fragment,o),P(hn.$$.fragment,o),P(un.$$.fragment,o),P(fn.$$.fragment,o),P(mn.$$.fragment,o),P(fo.$$.fragment,o),P(_n.$$.fragment,o),P(Tn.$$.fragment,o),P(wn.$$.fragment,o),P(go.$$.fragment,o),P(_o.$$.fragment,o),P(kn.$$.fragment,o),P(bn.$$.fragment,o),P(Fn.$$.fragment,o),P(yo.$$.fragment,o),P(vo.$$.fragment,o),P(jn.$$.fragment,o),P(Gn.$$.fragment,o),P(Jn.$$.fragment,o),P(ko.$$.fragment,o),P(bo.$$.fragment,o),P($o.$$.fragment,o),P(Po.$$.fragment,o),P(Fo.$$.fragment,o),P(Mn.$$.fragment,o),P(qn.$$.fragment,o),P(An.$$.fragment,o),P(Go.$$.fragment,o),P(xo.$$.fragment,o),P(Eo.$$.fragment,o),P(Ln.$$.fragment,o),P(In.$$.fragment,o),P(Mo.$$.fragment,o),P(Dn.$$.fragment,o),P(qo.$$.fragment,o),P(Co.$$.fragment,o),P(Wn.$$.fragment,o),P(Un.$$.fragment,o),P(Ao.$$.fragment,o),P(Kn.$$.fragment,o),P(Lo.$$.fragment,o),P(Io.$$.fragment,o),P(Rn.$$.fragment,o),P(Vn.$$.fragment,o),P(No.$$.fragment,o),P(es.$$.fragment,o),P(So.$$.fragment,o),P(Do.$$.fragment,o),P(Wo.$$.fragment,o),P(ts.$$.fragment,o),P(os.$$.fragment,o),P(Bo.$$.fragment,o),P(rs.$$.fragment,o),P(Qo.$$.fragment,o),P(Ho.$$.fragment,o),P(Ko.$$.fragment,o),P(is.$$.fragment,o),P(ls.$$.fragment,o),P(gs.$$.fragment,o),P(Vo.$$.fragment,o),P(Xo.$$.fragment,o),P(_s.$$.fragment,o),P(Ts.$$.fragment,o),P(Fs.$$.fragment,o),P(Zo.$$.fragment,o),P(en.$$.fragment,o),yi=!1},d(o){t(d),o&&t(T),o&&t(c),F(l),o&&t(ge),o&&t(N),F(j),o&&t(_e),o&&t(O),o&&t(Te),o&&t(W),o&&t(q),o&&t(pe),o&&t(ye),o&&t(he),o&&t(ve),F(X,o),o&&t(C),o&&t(ne),o&&t(Re),o&&t(D),F(ce),o&&t(Hr),o&&t(ho),o&&t(Kr),F(hn,o),o&&t(Rr),o&&t(qs),o&&t(Vr),F(un,o),o&&t(Xr),o&&t(St),F(fn),o&&t(Yr),o&&t(Et),F(mn),F(fo),o&&t(Zr),o&&t(Dt),F(_n),o&&t(ei),o&&t(Jt),F(Tn),F(wn),F(go),F(_o),o&&t(ti),o&&t(Ut),F(kn),o&&t(oi),o&&t(mt),F(bn),F(Fn),F(yo),F(vo),o&&t(ni),o&&t(Qt),F(jn),o&&t(si),o&&t(We),F(Gn),F(Jn),F(ko),F(bo),F($o),F(Po),F(Fo),o&&t(ai),o&&t(Kt),F(Mn),o&&t(ri),o&&t(_t),F(qn),F(An),F(Go),F(xo),F(Eo),o&&t(ii),o&&t(Xt),F(Ln),o&&t(li),o&&t(Ue),F(In),F(Mo),F(Dn),F(qo),F(Co),o&&t(di),o&&t(Zt),F(Wn),o&&t(ci),o&&t(Be),F(Un),F(Ao),F(Kn),F(Lo),F(Io),o&&t(pi),o&&t(to),F(Rn),o&&t(hi),o&&t(fe),F(Vn),F(No),F(es),F(So),F(Do),F(Wo),o&&t(ui),o&&t(no),F(ts),o&&t(fi),o&&t(Qe),F(os),F(Bo),F(rs),F(Qo),F(Ho),F(Ko),o&&t(mi),o&&t(ro),F(is),o&&t(gi),o&&t(Ie),F(ls),F(gs),F(Vo),F(Xo),o&&t(_i),o&&t(lo),F(_s),o&&t(Ti),o&&t(Oe),F(Ts),F(Fs),F(Zo),F(en)}}}const Bm={local:"gptj",sections:[{local:"overview",sections:[{local:"generation",title:"Generation"}],title:"Overview"},{local:"transformers.GPTJConfig",title:"GPTJConfig"},{local:"transformers.GPTJModel",title:"GPTJModel"},{local:"transformers.GPTJForCausalLM",title:"GPTJForCausalLM"},{local:"transformers.GPTJForSequenceClassification",title:"GPTJForSequenceClassification"},{local:"transformers.GPTJForQuestionAnswering",title:"GPTJForQuestionAnswering"},{local:"transformers.TFGPTJModel",title:"TFGPTJModel"},{local:"transformers.TFGPTJForCausalLM",title:"TFGPTJForCausalLM"},{local:"transformers.TFGPTJForSequenceClassification",title:"TFGPTJForSequenceClassification"},{local:"transformers.TFGPTJForQuestionAnswering",title:"TFGPTJForQuestionAnswering"},{local:"transformers.FlaxGPTJModel",title:"FlaxGPTJModel"},{local:"transformers.FlaxGPTJForCausalLM",title:"FlaxGPTJForCausalLM"}],title:"GPT-J"};function Qm(G){return hm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zm extends lm{constructor(d){super();dm(this,d,Qm,Um,cm,{})}}export{Zm as default,Bm as metadata};
