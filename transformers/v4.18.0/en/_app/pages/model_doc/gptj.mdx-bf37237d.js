import{S as lf,i as df,s as cf,e as a,k as h,w as k,t as n,M as pf,c as r,d as t,m as u,a as i,x as b,h as s,b as f,F as e,g,y as w,q as $,o as P,B as F,v as hf,L as Je}from"../../chunks/vendor-6b77c823.js";import{T as Qe}from"../../chunks/Tip-39098574.js";import{D as ae}from"../../chunks/Docstring-1088f2fb.js";import{C as pe}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as He}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Ee}from"../../chunks/ExampleCodeBlock-5212b321.js";function uf(j){let d,T,c,p,v;return p=new pe({props:{code:`from transformers import GPTJModel, GPTJConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),T=n("Example:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(t),c=u(l),b(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,T),g(l,c,m),w(p,l,m),v=!0},p:Je,i(l){v||($(p.$$.fragment,l),v=!0)},o(l){P(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function mf(j){let d,T,c,p,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var G=i(c);p=s(G,"Module"),G.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,T),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function ff(j){let d,T,c,p,v;return p=new pe({props:{code:`from transformers import GPT2Tokenizer, GPTJModel
import torch

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJModel.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJModel.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),T=n("Example:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(t),c=u(l),b(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,T),g(l,c,m),w(p,l,m),v=!0},p:Je,i(l){v||($(p.$$.fragment,l),v=!0)},o(l){P(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function gf(j){let d,T,c,p,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var G=i(c);p=s(G,"Module"),G.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,T),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function _f(j){let d,T,c,p,v;return p=new pe({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForCausalLM

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJForCausalLM.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),T=n("Example:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(t),c=u(l),b(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,T),g(l,c,m),w(p,l,m),v=!0},p:Je,i(l){v||($(p.$$.fragment,l),v=!0)},o(l){P(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Tf(j){let d,T,c,p,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var G=i(c);p=s(G,"Module"),G.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,T),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function vf(j){let d,T,c,p,v;return p=new pe({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),T=n("Example of single-label classification:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example of single-label classification:"),m.forEach(t),c=u(l),b(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,T),g(l,c,m),w(p,l,m),v=!0},p:Je,i(l){v||($(p.$$.fragment,l),v=!0)},o(l){P(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function yf(j){let d,T;return d=new pe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){w(d,c,p),T=!0},p:Je,i(c){T||($(d.$$.fragment,c),T=!0)},o(c){P(d.$$.fragment,c),T=!1},d(c){F(d,c)}}}function kf(j){let d,T,c,p,v;return p=new pe({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),T=n("Example of multi-label classification:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example of multi-label classification:"),m.forEach(t),c=u(l),b(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,T),g(l,c,m),w(p,l,m),v=!0},p:Je,i(l){v||($(p.$$.fragment,l),v=!0)},o(l){P(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function bf(j){let d,T;return d=new pe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){w(d,c,p),T=!0},p:Je,i(c){T||($(d.$$.fragment,c),T=!0)},o(c){P(d.$$.fragment,c),T=!1},d(c){F(d,c)}}}function wf(j){let d,T,c,p,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var G=i(c);p=s(G,"Module"),G.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,T),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function $f(j){let d,T,c,p,v;return p=new pe({props:{code:`from transformers import GPT2Tokenizer, GPTJForQuestionAnswering
import torch

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJForQuestionAnswering.from_pretrained("EleutherAI/gpt-j-6B")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),T=n("Example:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(t),c=u(l),b(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,T),g(l,c,m),w(p,l,m),v=!0},p:Je,i(l){v||($(p.$$.fragment,l),v=!0)},o(l){P(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Pf(j){let d,T;return d=new pe({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){w(d,c,p),T=!0},p:Je,i(c){T||($(d.$$.fragment,c),T=!0)},o(c){P(d.$$.fragment,c),T=!1},d(c){F(d,c)}}}function Ff(j){let d,T,c,p,v,l,m,G,he,K,E,X,O,Z,ue,W,me,re,L,I,ee,te,J,M,fe,Q,ie,Y,H,oe,ge,q,le,N,_e,de,S,U,Te,C,ve,R,ne;return{c(){d=a("p"),T=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),G=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),E=a("p"),X=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=a("code"),me=n("model(inputs)"),re=n("."),L=h(),I=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=h(),J=a("ul"),M=a("li"),fe=n("a single Tensor with "),Q=a("code"),ie=n("input_ids"),Y=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),ge=h(),q=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),_e=n("model([input_ids, attention_mask])"),de=n(" or "),S=a("code"),U=n("model([input_ids, attention_mask, token_type_ids])"),Te=h(),C=a("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),ne=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=r(y,"P",{});var x=i(d);T=s(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),c=u(y),p=r(y,"UL",{});var V=i(p);v=r(V,"LI",{});var Ce=i(v);l=s(Ce,"having all inputs as keyword arguments (like PyTorch models), or"),Ce.forEach(t),m=u(V),G=r(V,"LI",{});var ze=i(G);he=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),V.forEach(t),K=u(y),E=r(y,"P",{});var z=i(E);X=s(z,"This second option is useful when using "),O=r(z,"CODE",{});var Ae=i(O);Z=s(Ae,"tf.keras.Model.fit"),Ae.forEach(t),ue=s(z,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=r(z,"CODE",{});var Ie=i(W);me=s(Ie,"model(inputs)"),Ie.forEach(t),re=s(z,"."),z.forEach(t),L=u(y),I=r(y,"P",{});var Me=i(I);ee=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(t),te=u(y),J=r(y,"UL",{});var A=i(J);M=r(A,"LI",{});var B=i(M);fe=s(B,"a single Tensor with "),Q=r(B,"CODE",{});var ce=i(Q);ie=s(ce,"input_ids"),ce.forEach(t),Y=s(B," only and nothing else: "),H=r(B,"CODE",{});var Pe=i(H);oe=s(Pe,"model(inputs_ids)"),Pe.forEach(t),B.forEach(t),ge=u(A),q=r(A,"LI",{});var D=i(q);le=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(D,"CODE",{});var Le=i(N);_e=s(Le,"model([input_ids, attention_mask])"),Le.forEach(t),de=s(D," or "),S=r(D,"CODE",{});var ye=i(S);U=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),D.forEach(t),Te=u(A),C=r(A,"LI",{});var ke=i(C);ve=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ke,"CODE",{});var Ne=i(R);ne=s(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(t),ke.forEach(t),A.forEach(t)},m(y,x){g(y,d,x),e(d,T),g(y,c,x),g(y,p,x),e(p,v),e(v,l),e(p,m),e(p,G),e(G,he),g(y,K,x),g(y,E,x),e(E,X),e(E,O),e(O,Z),e(E,ue),e(E,W),e(W,me),e(E,re),g(y,L,x),g(y,I,x),e(I,ee),g(y,te,x),g(y,J,x),e(J,M),e(M,fe),e(M,Q),e(Q,ie),e(M,Y),e(M,H),e(H,oe),e(J,ge),e(J,q),e(q,le),e(q,N),e(N,_e),e(q,de),e(q,S),e(S,U),e(J,Te),e(J,C),e(C,ve),e(C,R),e(R,ne)},d(y){y&&t(d),y&&t(c),y&&t(p),y&&t(K),y&&t(E),y&&t(L),y&&t(I),y&&t(te),y&&t(J)}}}function jf(j){let d,T,c,p,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var G=i(c);p=s(G,"Module"),G.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,T),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Gf(j){let d,T,c,p,v;return p=new pe({props:{code:`from transformers import GPTJTokenizer, TFGPTJModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),T=n("Example:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(t),c=u(l),b(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,T),g(l,c,m),w(p,l,m),v=!0},p:Je,i(l){v||($(p.$$.fragment,l),v=!0)},o(l){P(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function xf(j){let d,T,c,p,v,l,m,G,he,K,E,X,O,Z,ue,W,me,re,L,I,ee,te,J,M,fe,Q,ie,Y,H,oe,ge,q,le,N,_e,de,S,U,Te,C,ve,R,ne;return{c(){d=a("p"),T=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),G=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),E=a("p"),X=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=a("code"),me=n("model(inputs)"),re=n("."),L=h(),I=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=h(),J=a("ul"),M=a("li"),fe=n("a single Tensor with "),Q=a("code"),ie=n("input_ids"),Y=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),ge=h(),q=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),_e=n("model([input_ids, attention_mask])"),de=n(" or "),S=a("code"),U=n("model([input_ids, attention_mask, token_type_ids])"),Te=h(),C=a("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),ne=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=r(y,"P",{});var x=i(d);T=s(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),c=u(y),p=r(y,"UL",{});var V=i(p);v=r(V,"LI",{});var Ce=i(v);l=s(Ce,"having all inputs as keyword arguments (like PyTorch models), or"),Ce.forEach(t),m=u(V),G=r(V,"LI",{});var ze=i(G);he=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),V.forEach(t),K=u(y),E=r(y,"P",{});var z=i(E);X=s(z,"This second option is useful when using "),O=r(z,"CODE",{});var Ae=i(O);Z=s(Ae,"tf.keras.Model.fit"),Ae.forEach(t),ue=s(z,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=r(z,"CODE",{});var Ie=i(W);me=s(Ie,"model(inputs)"),Ie.forEach(t),re=s(z,"."),z.forEach(t),L=u(y),I=r(y,"P",{});var Me=i(I);ee=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(t),te=u(y),J=r(y,"UL",{});var A=i(J);M=r(A,"LI",{});var B=i(M);fe=s(B,"a single Tensor with "),Q=r(B,"CODE",{});var ce=i(Q);ie=s(ce,"input_ids"),ce.forEach(t),Y=s(B," only and nothing else: "),H=r(B,"CODE",{});var Pe=i(H);oe=s(Pe,"model(inputs_ids)"),Pe.forEach(t),B.forEach(t),ge=u(A),q=r(A,"LI",{});var D=i(q);le=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(D,"CODE",{});var Le=i(N);_e=s(Le,"model([input_ids, attention_mask])"),Le.forEach(t),de=s(D," or "),S=r(D,"CODE",{});var ye=i(S);U=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),D.forEach(t),Te=u(A),C=r(A,"LI",{});var ke=i(C);ve=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ke,"CODE",{});var Ne=i(R);ne=s(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(t),ke.forEach(t),A.forEach(t)},m(y,x){g(y,d,x),e(d,T),g(y,c,x),g(y,p,x),e(p,v),e(v,l),e(p,m),e(p,G),e(G,he),g(y,K,x),g(y,E,x),e(E,X),e(E,O),e(O,Z),e(E,ue),e(E,W),e(W,me),e(E,re),g(y,L,x),g(y,I,x),e(I,ee),g(y,te,x),g(y,J,x),e(J,M),e(M,fe),e(M,Q),e(Q,ie),e(M,Y),e(M,H),e(H,oe),e(J,ge),e(J,q),e(q,le),e(q,N),e(N,_e),e(q,de),e(q,S),e(S,U),e(J,Te),e(J,C),e(C,ve),e(C,R),e(R,ne)},d(y){y&&t(d),y&&t(c),y&&t(p),y&&t(K),y&&t(E),y&&t(L),y&&t(I),y&&t(te),y&&t(J)}}}function Ef(j){let d,T,c,p,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var G=i(c);p=s(G,"Module"),G.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,T),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Jf(j){let d,T,c,p,v;return p=new pe({props:{code:`from transformers import GPTJTokenizer, TFGPTJForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),T=n("Example:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(t),c=u(l),b(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,T),g(l,c,m),w(p,l,m),v=!0},p:Je,i(l){v||($(p.$$.fragment,l),v=!0)},o(l){P(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Mf(j){let d,T,c,p,v,l,m,G,he,K,E,X,O,Z,ue,W,me,re,L,I,ee,te,J,M,fe,Q,ie,Y,H,oe,ge,q,le,N,_e,de,S,U,Te,C,ve,R,ne;return{c(){d=a("p"),T=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),G=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),E=a("p"),X=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=a("code"),me=n("model(inputs)"),re=n("."),L=h(),I=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=h(),J=a("ul"),M=a("li"),fe=n("a single Tensor with "),Q=a("code"),ie=n("input_ids"),Y=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),ge=h(),q=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),_e=n("model([input_ids, attention_mask])"),de=n(" or "),S=a("code"),U=n("model([input_ids, attention_mask, token_type_ids])"),Te=h(),C=a("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),ne=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=r(y,"P",{});var x=i(d);T=s(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),c=u(y),p=r(y,"UL",{});var V=i(p);v=r(V,"LI",{});var Ce=i(v);l=s(Ce,"having all inputs as keyword arguments (like PyTorch models), or"),Ce.forEach(t),m=u(V),G=r(V,"LI",{});var ze=i(G);he=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),V.forEach(t),K=u(y),E=r(y,"P",{});var z=i(E);X=s(z,"This second option is useful when using "),O=r(z,"CODE",{});var Ae=i(O);Z=s(Ae,"tf.keras.Model.fit"),Ae.forEach(t),ue=s(z,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=r(z,"CODE",{});var Ie=i(W);me=s(Ie,"model(inputs)"),Ie.forEach(t),re=s(z,"."),z.forEach(t),L=u(y),I=r(y,"P",{});var Me=i(I);ee=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(t),te=u(y),J=r(y,"UL",{});var A=i(J);M=r(A,"LI",{});var B=i(M);fe=s(B,"a single Tensor with "),Q=r(B,"CODE",{});var ce=i(Q);ie=s(ce,"input_ids"),ce.forEach(t),Y=s(B," only and nothing else: "),H=r(B,"CODE",{});var Pe=i(H);oe=s(Pe,"model(inputs_ids)"),Pe.forEach(t),B.forEach(t),ge=u(A),q=r(A,"LI",{});var D=i(q);le=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(D,"CODE",{});var Le=i(N);_e=s(Le,"model([input_ids, attention_mask])"),Le.forEach(t),de=s(D," or "),S=r(D,"CODE",{});var ye=i(S);U=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),D.forEach(t),Te=u(A),C=r(A,"LI",{});var ke=i(C);ve=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ke,"CODE",{});var Ne=i(R);ne=s(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(t),ke.forEach(t),A.forEach(t)},m(y,x){g(y,d,x),e(d,T),g(y,c,x),g(y,p,x),e(p,v),e(v,l),e(p,m),e(p,G),e(G,he),g(y,K,x),g(y,E,x),e(E,X),e(E,O),e(O,Z),e(E,ue),e(E,W),e(W,me),e(E,re),g(y,L,x),g(y,I,x),e(I,ee),g(y,te,x),g(y,J,x),e(J,M),e(M,fe),e(M,Q),e(Q,ie),e(M,Y),e(M,H),e(H,oe),e(J,ge),e(J,q),e(q,le),e(q,N),e(N,_e),e(q,de),e(q,S),e(S,U),e(J,Te),e(J,C),e(C,ve),e(C,R),e(R,ne)},d(y){y&&t(d),y&&t(c),y&&t(p),y&&t(K),y&&t(E),y&&t(L),y&&t(I),y&&t(te),y&&t(J)}}}function qf(j){let d,T,c,p,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var G=i(c);p=s(G,"Module"),G.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,T),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Cf(j){let d,T,c,p,v;return p=new pe({props:{code:`from transformers import GPTJTokenizer, TFGPTJForSequenceClassification
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
`}}),{c(){d=a("p"),T=n("Example:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(t),c=u(l),b(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,T),g(l,c,m),w(p,l,m),v=!0},p:Je,i(l){v||($(p.$$.fragment,l),v=!0)},o(l){P(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function zf(j){let d,T;return d=new pe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){k(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){w(d,c,p),T=!0},p:Je,i(c){T||($(d.$$.fragment,c),T=!0)},o(c){P(d.$$.fragment,c),T=!1},d(c){F(d,c)}}}function Af(j){let d,T,c,p,v,l,m,G,he,K,E,X,O,Z,ue,W,me,re,L,I,ee,te,J,M,fe,Q,ie,Y,H,oe,ge,q,le,N,_e,de,S,U,Te,C,ve,R,ne;return{c(){d=a("p"),T=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),G=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),E=a("p"),X=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=a("code"),me=n("model(inputs)"),re=n("."),L=h(),I=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=h(),J=a("ul"),M=a("li"),fe=n("a single Tensor with "),Q=a("code"),ie=n("input_ids"),Y=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),ge=h(),q=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),_e=n("model([input_ids, attention_mask])"),de=n(" or "),S=a("code"),U=n("model([input_ids, attention_mask, token_type_ids])"),Te=h(),C=a("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),ne=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=r(y,"P",{});var x=i(d);T=s(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),c=u(y),p=r(y,"UL",{});var V=i(p);v=r(V,"LI",{});var Ce=i(v);l=s(Ce,"having all inputs as keyword arguments (like PyTorch models), or"),Ce.forEach(t),m=u(V),G=r(V,"LI",{});var ze=i(G);he=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),V.forEach(t),K=u(y),E=r(y,"P",{});var z=i(E);X=s(z,"This second option is useful when using "),O=r(z,"CODE",{});var Ae=i(O);Z=s(Ae,"tf.keras.Model.fit"),Ae.forEach(t),ue=s(z,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=r(z,"CODE",{});var Ie=i(W);me=s(Ie,"model(inputs)"),Ie.forEach(t),re=s(z,"."),z.forEach(t),L=u(y),I=r(y,"P",{});var Me=i(I);ee=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(t),te=u(y),J=r(y,"UL",{});var A=i(J);M=r(A,"LI",{});var B=i(M);fe=s(B,"a single Tensor with "),Q=r(B,"CODE",{});var ce=i(Q);ie=s(ce,"input_ids"),ce.forEach(t),Y=s(B," only and nothing else: "),H=r(B,"CODE",{});var Pe=i(H);oe=s(Pe,"model(inputs_ids)"),Pe.forEach(t),B.forEach(t),ge=u(A),q=r(A,"LI",{});var D=i(q);le=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(D,"CODE",{});var Le=i(N);_e=s(Le,"model([input_ids, attention_mask])"),Le.forEach(t),de=s(D," or "),S=r(D,"CODE",{});var ye=i(S);U=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),D.forEach(t),Te=u(A),C=r(A,"LI",{});var ke=i(C);ve=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ke,"CODE",{});var Ne=i(R);ne=s(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(t),ke.forEach(t),A.forEach(t)},m(y,x){g(y,d,x),e(d,T),g(y,c,x),g(y,p,x),e(p,v),e(v,l),e(p,m),e(p,G),e(G,he),g(y,K,x),g(y,E,x),e(E,X),e(E,O),e(O,Z),e(E,ue),e(E,W),e(W,me),e(E,re),g(y,L,x),g(y,I,x),e(I,ee),g(y,te,x),g(y,J,x),e(J,M),e(M,fe),e(M,Q),e(Q,ie),e(M,Y),e(M,H),e(H,oe),e(J,ge),e(J,q),e(q,le),e(q,N),e(N,_e),e(q,de),e(q,S),e(S,U),e(J,Te),e(J,C),e(C,ve),e(C,R),e(R,ne)},d(y){y&&t(d),y&&t(c),y&&t(p),y&&t(K),y&&t(E),y&&t(L),y&&t(I),y&&t(te),y&&t(J)}}}function If(j){let d,T,c,p,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var G=i(c);p=s(G,"Module"),G.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,T),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Lf(j){let d,T,c,p,v;return p=new pe({props:{code:`from transformers import GPTJTokenizer, TFGPTJForQuestionAnswering
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
`}}),{c(){d=a("p"),T=n("Example:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(t),c=u(l),b(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,T),g(l,c,m),w(p,l,m),v=!0},p:Je,i(l){v||($(p.$$.fragment,l),v=!0)},o(l){P(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Nf(j){let d,T;return d=new pe({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){w(d,c,p),T=!0},p:Je,i(c){T||($(d.$$.fragment,c),T=!0)},o(c){P(d.$$.fragment,c),T=!1},d(c){F(d,c)}}}function Sf(j){let d,T,c,p,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var G=i(c);p=s(G,"Module"),G.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,T),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Df(j){let d,T,c,p,v;return p=new pe({props:{code:`from transformers import GPTJTokenizer, FlaxGPTJModel

tokenizer = GPTJTokenizer.from_pretrained("gptj")
model = FlaxGPTJModel.from_pretrained("gptj")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, FlaxGPTJModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTJModel.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),T=n("Example:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(t),c=u(l),b(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,T),g(l,c,m),w(p,l,m),v=!0},p:Je,i(l){v||($(p.$$.fragment,l),v=!0)},o(l){P(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Of(j){let d,T,c,p,v;return{c(){d=a("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var G=i(c);p=s(G,"Module"),G.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,T),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Wf(j){let d,T,c,p,v;return p=new pe({props:{code:`from transformers import GPTJTokenizer, FlaxGPTJForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=a("p"),T=n("Example:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(t),c=u(l),b(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,T),g(l,c,m),w(p,l,m),v=!0},p:Je,i(l){v||($(p.$$.fragment,l),v=!0)},o(l){P(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Uf(j){let d,T,c,p,v,l,m,G,he,K,E,X,O,Z,ue,W,me,re,L,I,ee,te,J,M,fe,Q,ie,Y,H,oe,ge,q,le,N,_e,de,S,U,Te,C,ve,R,ne,y,x,V,Ce,ze,z,Ae,Ie,Me,A,B,ce,Pe,D,Le,ye,ke,Ne,ta,ct,Ni,Ro,Si,Di,oa,Oi,Wi,na,Ui,Bi,Ir,bt,Ht,sa,Vo,Qi,aa,Hi,Lr,Rt,Ri,_s,Vi,Ki,Nr,Ko,Sr,Ts,Xi,Dr,Xo,Or,wt,Vt,ra,Yo,Yi,ia,Zi,Wr,pt,Zo,el,Re,tl,vs,ol,nl,en,sl,al,ys,rl,il,ks,ll,dl,cl,Kt,Ur,$t,Xt,la,tn,pl,da,hl,Br,ht,on,ul,nn,ml,sn,fl,gl,_l,et,an,Tl,Pt,vl,bs,yl,kl,ca,bl,wl,$l,Yt,Pl,Zt,Qr,Ft,eo,pa,rn,Fl,ha,jl,Hr,Ve,ln,Gl,ua,xl,El,dn,Jl,cn,Ml,ql,Cl,tt,pn,zl,jt,Al,ws,Il,Ll,ma,Nl,Sl,Dl,to,Ol,oo,Rr,Gt,no,fa,hn,Wl,ga,Ul,Vr,Fe,un,Bl,_a,Ql,Hl,$s,Ps,Rl,Vl,Kl,Ke,Xl,Ta,Yl,Zl,va,ed,td,ya,od,nd,ka,sd,ad,rd,mn,id,fn,ld,dd,cd,$e,gn,pd,xt,hd,Fs,ud,md,ba,fd,gd,_d,so,Td,ao,vd,ro,yd,io,kd,lo,Kr,Et,co,wa,_n,bd,$a,wd,Xr,Xe,Tn,$d,Jt,Pd,Pa,Fd,jd,Fa,Gd,xd,Ed,vn,Jd,yn,Md,qd,Cd,Se,kn,zd,Mt,Ad,js,Id,Ld,ja,Nd,Sd,Dd,po,Od,ho,Wd,uo,Yr,qt,mo,Ga,bn,Ud,xa,Bd,Zr,je,wn,Qd,Ea,Hd,Rd,$n,Vd,Gs,Kd,Xd,Yd,Pn,Zd,Fn,ec,tc,oc,fo,nc,ot,jn,sc,Ct,ac,xs,rc,ic,Ja,lc,dc,cc,go,pc,_o,ei,zt,To,Ma,Gn,hc,qa,uc,ti,Ge,xn,mc,Ca,fc,gc,En,_c,Es,Tc,vc,yc,Jn,kc,Mn,bc,wc,$c,vo,Pc,nt,qn,Fc,At,jc,Js,Gc,xc,za,Ec,Jc,Mc,yo,qc,ko,oi,It,bo,Aa,Cn,Cc,Ia,zc,ni,se,zn,Ac,La,Ic,Lc,Ms,qs,Nc,Sc,Dc,Ye,Oc,Na,Wc,Uc,Sa,Bc,Qc,Da,Hc,Rc,Oa,Vc,Kc,Xc,An,Yc,Cs,Zc,ep,tp,In,op,Ln,np,sp,ap,wo,rp,De,Nn,ip,Lt,lp,zs,dp,cp,Wa,pp,hp,up,$o,mp,Po,fp,Fo,si,Nt,jo,Ua,Sn,gp,Ba,_p,ai,xe,Dn,Tp,St,vp,Qa,yp,kp,Ha,bp,wp,$p,On,Pp,As,Fp,jp,Gp,Wn,xp,Un,Ep,Jp,Mp,Go,qp,Oe,Bn,Cp,Dt,zp,Is,Ap,Ip,Ra,Lp,Np,Sp,xo,Dp,Eo,Op,Jo,ri,Ot,Mo,Va,Qn,Wp,Ka,Up,ii,be,Hn,Bp,Xa,Qp,Hp,Rn,Rp,Ls,Vp,Kp,Xp,Vn,Yp,Kn,Zp,eh,th,Ya,oh,nh,ut,Za,Xn,sh,ah,er,Yn,rh,ih,tr,Zn,lh,dh,or,es,ch,ph,st,ts,hh,Wt,uh,nr,mh,fh,sr,gh,_h,Th,qo,vh,Co,li,Ut,zo,ar,os,yh,rr,kh,di,we,ns,bh,ir,wh,$h,ss,Ph,Ns,Fh,jh,Gh,as,xh,rs,Eh,Jh,Mh,lr,qh,Ch,mt,dr,is,zh,Ah,cr,ls,Ih,Lh,pr,ds,Nh,Sh,hr,cs,Dh,Oh,at,ps,Wh,Bt,Uh,ur,Bh,Qh,mr,Hh,Rh,Vh,Ao,Kh,Io,ci;return l=new He({}),Z=new He({}),A=new pe({props:{code:`from transformers import GPTJForCausalLM
import torch

model = GPTJForCausalLM.from_pretrained(
    "EleutherAI/gpt-j-6B", revision="float16", torch_dtype=torch.float16, low_cpu_mem_usage=True
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, revision=<span class="hljs-string">&quot;float16&quot;</span>, torch_dtype=torch.float16, low_cpu_mem_usage=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)`}}),Vo=new He({}),Ko=new pe({props:{code:`from transformers import AutoModelForCausalLM, AutoTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),Xo=new pe({props:{code:`from transformers import GPTJForCausalLM, AutoTokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),Yo=new He({}),Zo=new ae({props:{name:"class transformers.GPTJConfig",anchor:"transformers.GPTJConfig",parameters:[{name:"vocab_size",val:" = 50400"},{name:"n_positions",val:" = 2048"},{name:"n_embd",val:" = 4096"},{name:"n_layer",val:" = 28"},{name:"n_head",val:" = 16"},{name:"rotary_dim",val:" = 64"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_pdrop",val:" = 0.0"},{name:"embd_pdrop",val:" = 0.0"},{name:"attn_pdrop",val:" = 0.0"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"tie_word_embeddings",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTJConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50400) &#x2014;
Vocabulary size of the GPT-J model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJModel">GPTJModel</a>.`,name:"vocab_size"},{anchor:"transformers.GPTJConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/configuration_gptj.py#L33"}}),Kt=new Ee({props:{anchor:"transformers.GPTJConfig.example",$$slots:{default:[uf]},$$scope:{ctx:j}}}),tn=new He({}),on=new ae({props:{name:"class transformers.GPTJModel",anchor:"transformers.GPTJModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_gptj.py#L460"}}),an=new ae({props:{name:"forward",anchor:"transformers.GPTJModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTJModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_gptj.py#L516",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yt=new Qe({props:{$$slots:{default:[mf]},$$scope:{ctx:j}}}),Zt=new Ee({props:{anchor:"transformers.GPTJModel.forward.example",$$slots:{default:[ff]},$$scope:{ctx:j}}}),rn=new He({}),ln=new ae({props:{name:"class transformers.GPTJForCausalLM",anchor:"transformers.GPTJForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_gptj.py#L700"}}),pn=new ae({props:{name:"forward",anchor:"transformers.GPTJForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTJForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_gptj.py#L769",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new Qe({props:{$$slots:{default:[gf]},$$scope:{ctx:j}}}),oo=new Ee({props:{anchor:"transformers.GPTJForCausalLM.forward.example",$$slots:{default:[_f]},$$scope:{ctx:j}}}),hn=new He({}),un=new ae({props:{name:"class transformers.GPTJForSequenceClassification",anchor:"transformers.GPTJForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_gptj.py#L875"}}),gn=new ae({props:{name:"forward",anchor:"transformers.GPTJForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTJForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_gptj.py#L891",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig"
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
`}}),so=new Qe({props:{$$slots:{default:[Tf]},$$scope:{ctx:j}}}),ao=new Ee({props:{anchor:"transformers.GPTJForSequenceClassification.forward.example",$$slots:{default:[vf]},$$scope:{ctx:j}}}),ro=new Ee({props:{anchor:"transformers.GPTJForSequenceClassification.forward.example-2",$$slots:{default:[yf]},$$scope:{ctx:j}}}),io=new Ee({props:{anchor:"transformers.GPTJForSequenceClassification.forward.example-3",$$slots:{default:[kf]},$$scope:{ctx:j}}}),lo=new Ee({props:{anchor:"transformers.GPTJForSequenceClassification.forward.example-4",$$slots:{default:[bf]},$$scope:{ctx:j}}}),_n=new He({}),Tn=new ae({props:{name:"class transformers.GPTJForQuestionAnswering",anchor:"transformers.GPTJForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_gptj.py#L1001"}}),kn=new ae({props:{name:"forward",anchor:"transformers.GPTJForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTJForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.GPTJForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_gptj.py#L1017",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),po=new Qe({props:{$$slots:{default:[wf]},$$scope:{ctx:j}}}),ho=new Ee({props:{anchor:"transformers.GPTJForQuestionAnswering.forward.example",$$slots:{default:[$f]},$$scope:{ctx:j}}}),uo=new Ee({props:{anchor:"transformers.GPTJForQuestionAnswering.forward.example-2",$$slots:{default:[Pf]},$$scope:{ctx:j}}}),bn=new He({}),wn=new ae({props:{name:"class transformers.TFGPTJModel",anchor:"transformers.TFGPTJModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_tf_gptj.py#L647"}}),fo=new Qe({props:{$$slots:{default:[Ff]},$$scope:{ctx:j}}}),jn=new ae({props:{name:"call",anchor:"transformers.TFGPTJModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPTJModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_tf_gptj.py#L652",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),go=new Qe({props:{$$slots:{default:[jf]},$$scope:{ctx:j}}}),_o=new Ee({props:{anchor:"transformers.TFGPTJModel.call.example",$$slots:{default:[Gf]},$$scope:{ctx:j}}}),Gn=new He({}),xn=new ae({props:{name:"class transformers.TFGPTJForCausalLM",anchor:"transformers.TFGPTJForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_tf_gptj.py#L717"}}),vo=new Qe({props:{$$slots:{default:[xf]},$$scope:{ctx:j}}}),qn=new ae({props:{name:"call",anchor:"transformers.TFGPTJForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPTJForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJForCausalLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJForCausalLM.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_tf_gptj.py#L759",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),yo=new Qe({props:{$$slots:{default:[Ef]},$$scope:{ctx:j}}}),ko=new Ee({props:{anchor:"transformers.TFGPTJForCausalLM.call.example",$$slots:{default:[Jf]},$$scope:{ctx:j}}}),Cn=new He({}),zn=new ae({props:{name:"class transformers.TFGPTJForSequenceClassification",anchor:"transformers.TFGPTJForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPTJForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_tf_gptj.py#L849"}}),wo=new Qe({props:{$$slots:{default:[Mf]},$$scope:{ctx:j}}}),Nn=new ae({props:{name:"call",anchor:"transformers.TFGPTJForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPTJForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_tf_gptj.py#L863",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig"
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
  href="/docs/transformers/v4.18.0/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$o=new Qe({props:{$$slots:{default:[qf]},$$scope:{ctx:j}}}),Po=new Ee({props:{anchor:"transformers.TFGPTJForSequenceClassification.call.example",$$slots:{default:[Cf]},$$scope:{ctx:j}}}),Fo=new Ee({props:{anchor:"transformers.TFGPTJForSequenceClassification.call.example-2",$$slots:{default:[zf]},$$scope:{ctx:j}}}),Sn=new He({}),Dn=new ae({props:{name:"class transformers.TFGPTJForQuestionAnswering",anchor:"transformers.TFGPTJForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPTJForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_tf_gptj.py#L976"}}),Go=new Qe({props:{$$slots:{default:[Af]},$$scope:{ctx:j}}}),Bn=new ae({props:{name:"call",anchor:"transformers.TFGPTJForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPTJForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_tf_gptj.py#L987",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xo=new Qe({props:{$$slots:{default:[If]},$$scope:{ctx:j}}}),Eo=new Ee({props:{anchor:"transformers.TFGPTJForQuestionAnswering.call.example",$$slots:{default:[Lf]},$$scope:{ctx:j}}}),Jo=new Ee({props:{anchor:"transformers.TFGPTJForQuestionAnswering.call.example-2",$$slots:{default:[Nf]},$$scope:{ctx:j}}}),Qn=new He({}),Hn=new ae({props:{name:"class transformers.FlaxGPTJModel",anchor:"transformers.FlaxGPTJModel",parameters:[{name:"config",val:": GPTJConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTJModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_flax_gptj.py#L607"}}),ts=new ae({props:{name:"__call__",anchor:"transformers.FlaxGPTJModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPTJModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_flax_gptj.py#L425",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qo=new Qe({props:{$$slots:{default:[Sf]},$$scope:{ctx:j}}}),Co=new Ee({props:{anchor:"transformers.FlaxGPTJModel.__call__.example",$$slots:{default:[Df]},$$scope:{ctx:j}}}),os=new He({}),ns=new ae({props:{name:"class transformers.FlaxGPTJForCausalLM",anchor:"transformers.FlaxGPTJForCausalLM",parameters:[{name:"config",val:": GPTJConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTJForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_flax_gptj.py#L674"}}),ps=new ae({props:{name:"__call__",anchor:"transformers.FlaxGPTJForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPTJForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/gptj/modeling_flax_gptj.py#L425",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new Qe({props:{$$slots:{default:[Of]},$$scope:{ctx:j}}}),Io=new Ee({props:{anchor:"transformers.FlaxGPTJForCausalLM.__call__.example",$$slots:{default:[Wf]},$$scope:{ctx:j}}}),{c(){d=a("meta"),T=h(),c=a("h1"),p=a("a"),v=a("span"),k(l.$$.fragment),m=h(),G=a("span"),he=n("GPT-J"),K=h(),E=a("h2"),X=a("a"),O=a("span"),k(Z.$$.fragment),ue=h(),W=a("span"),me=n("Overview"),re=h(),L=a("p"),I=n("The GPT-J model was released in the "),ee=a("a"),te=n("kingoflolz/mesh-transformer-jax"),J=n(` repository by Ben Wang and Aran Komatsuzaki. It is a GPT-2-like
causal language model trained on `),M=a("a"),fe=n("the Pile"),Q=n(" dataset."),ie=h(),Y=a("p"),H=n("This model was contributed by "),oe=a("a"),ge=n("Stella Biderman"),q=n("."),le=h(),N=a("p"),_e=n("Tips:"),de=h(),S=a("ul"),U=a("li"),Te=n("To load "),C=a("a"),ve=n("GPT-J"),R=n(` in float32 one would need at least 2x model size CPU
RAM: 1x for initial weights and another 1x to load the checkpoint. So for GPT-J it would take at least 48GB of CPU
RAM to just load the model. To reduce the CPU RAM usage there are a few options. The `),ne=a("code"),y=n("torch_dtype"),x=n(` argument can be
used to initialize the model in half-precision. And the `),V=a("code"),Ce=n("low_cpu_mem_usage"),ze=n(` argument can be used to keep the RAM
usage to 1x. There is also a `),z=a("a"),Ae=n("fp16 branch"),Ie=n(` which stores
the fp16 weights, which could be used to further minimize the RAM usage. Combining all this it should take roughly
12.1GB of CPU RAM to load the model.`),Me=h(),k(A.$$.fragment),B=h(),ce=a("ul"),Pe=a("li"),D=a("p"),Le=n(`The model should fit on 16GB GPU for inference. For training/fine-tuning it would take much more GPU RAM. Adam
optimizer for example makes four copies of the model: model, gradients, average and squared average of the gradients.
So it would need at least 4x model size GPU memory, even with mixed precision as gradient updates are in fp32. This
is not including the activations and data batches, which would again require some more GPU RAM. So one should explore
solutions such as DeepSpeed, to train/fine-tune the model. Another option is to use the original codebase to
train/fine-tune the model on TPU and then convert the model to Transformers format for inference. Instructions for
that could be found `),ye=a("a"),ke=n("here"),Ne=h(),ta=a("li"),ct=a("p"),Ni=n(`Although the embedding matrix has a size of 50400, only 50257 entries are used by the GPT-2 tokenizer. These extra
tokens are added for the sake of efficiency on TPUs. To avoid the mis-match between embedding matrix size and vocab
size, the tokenizer for `),Ro=a("a"),Si=n("GPT-J"),Di=n(` contains 143 extra tokens
`),oa=a("code"),Oi=n("<|extratoken_1|>... <|extratoken_143|>"),Wi=n(", so the "),na=a("code"),Ui=n("vocab_size"),Bi=n(" of tokenizer also becomes 50400."),Ir=h(),bt=a("h3"),Ht=a("a"),sa=a("span"),k(Vo.$$.fragment),Qi=h(),aa=a("span"),Hi=n("Generation"),Lr=h(),Rt=a("p"),Ri=n("The "),_s=a("a"),Vi=n("generate()"),Ki=n(` method can be used to generate text using GPT-J
model.`),Nr=h(),k(Ko.$$.fragment),Sr=h(),Ts=a("p"),Xi=n("\u2026or in float16 precision:"),Dr=h(),k(Xo.$$.fragment),Or=h(),wt=a("h2"),Vt=a("a"),ra=a("span"),k(Yo.$$.fragment),Yi=h(),ia=a("span"),Zi=n("GPTJConfig"),Wr=h(),pt=a("div"),k(Zo.$$.fragment),el=h(),Re=a("p"),tl=n("This is the configuration class to store the configuration of a "),vs=a("a"),ol=n("GPTJModel"),nl=n(`. It is used to instantiate a GPT-J
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the GPT-J
`),en=a("a"),sl=n("gpt-j-6B"),al=n(` architecture. Configuration objects inherit from
`),ys=a("a"),rl=n("PretrainedConfig"),il=n(" and can be used to control the model outputs. Read the documentation from "),ks=a("a"),ll=n("PretrainedConfig"),dl=n(`
for more information.`),cl=h(),k(Kt.$$.fragment),Ur=h(),$t=a("h2"),Xt=a("a"),la=a("span"),k(tn.$$.fragment),pl=h(),da=a("span"),hl=n("GPTJModel"),Br=h(),ht=a("div"),k(on.$$.fragment),ul=h(),nn=a("p"),ml=n(`The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),sn=a("a"),fl=n("torch.nn.Module"),gl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_l=h(),et=a("div"),k(an.$$.fragment),Tl=h(),Pt=a("p"),vl=n("The "),bs=a("a"),yl=n("GPTJModel"),kl=n(" forward method, overrides the "),ca=a("code"),bl=n("__call__"),wl=n(" special method."),$l=h(),k(Yt.$$.fragment),Pl=h(),k(Zt.$$.fragment),Qr=h(),Ft=a("h2"),eo=a("a"),pa=a("span"),k(rn.$$.fragment),Fl=h(),ha=a("span"),jl=n("GPTJForCausalLM"),Hr=h(),Ve=a("div"),k(ln.$$.fragment),Gl=h(),ua=a("p"),xl=n("The GPT-J Model transformer with a language modeling head on top."),El=h(),dn=a("p"),Jl=n("This model is a PyTorch "),cn=a("a"),Ml=n("torch.nn.Module"),ql=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cl=h(),tt=a("div"),k(pn.$$.fragment),zl=h(),jt=a("p"),Al=n("The "),ws=a("a"),Il=n("GPTJForCausalLM"),Ll=n(" forward method, overrides the "),ma=a("code"),Nl=n("__call__"),Sl=n(" special method."),Dl=h(),k(to.$$.fragment),Ol=h(),k(oo.$$.fragment),Rr=h(),Gt=a("h2"),no=a("a"),fa=a("span"),k(hn.$$.fragment),Wl=h(),ga=a("span"),Ul=n("GPTJForSequenceClassification"),Vr=h(),Fe=a("div"),k(un.$$.fragment),Bl=h(),_a=a("p"),Ql=n("The GPT-J Model transformer with a sequence classification head on top (linear layer)."),Hl=h(),$s=a("p"),Ps=a("a"),Rl=n("GPTJForSequenceClassification"),Vl=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),Kl=h(),Ke=a("p"),Xl=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ta=a("code"),Yl=n("pad_token_id"),Zl=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),va=a("code"),ed=n("pad_token_id"),td=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ya=a("code"),od=n("inputs_embeds"),nd=n(" are passed instead of "),ka=a("code"),sd=n("input_ids"),ad=n(`, it does the same (take the last value in
each row of the batch).`),rd=h(),mn=a("p"),id=n("This model is a PyTorch "),fn=a("a"),ld=n("torch.nn.Module"),dd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cd=h(),$e=a("div"),k(gn.$$.fragment),pd=h(),xt=a("p"),hd=n("The "),Fs=a("a"),ud=n("GPTJForSequenceClassification"),md=n(" forward method, overrides the "),ba=a("code"),fd=n("__call__"),gd=n(" special method."),_d=h(),k(so.$$.fragment),Td=h(),k(ao.$$.fragment),vd=h(),k(ro.$$.fragment),yd=h(),k(io.$$.fragment),kd=h(),k(lo.$$.fragment),Kr=h(),Et=a("h2"),co=a("a"),wa=a("span"),k(_n.$$.fragment),bd=h(),$a=a("span"),wd=n("GPTJForQuestionAnswering"),Xr=h(),Xe=a("div"),k(Tn.$$.fragment),$d=h(),Jt=a("p"),Pd=n(`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Pa=a("code"),Fd=n("span start logits"),jd=n(" and "),Fa=a("code"),Gd=n("span end logits"),xd=n(")."),Ed=h(),vn=a("p"),Jd=n("This model is a PyTorch "),yn=a("a"),Md=n("torch.nn.Module"),qd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cd=h(),Se=a("div"),k(kn.$$.fragment),zd=h(),Mt=a("p"),Ad=n("The "),js=a("a"),Id=n("GPTJForQuestionAnswering"),Ld=n(" forward method, overrides the "),ja=a("code"),Nd=n("__call__"),Sd=n(" special method."),Dd=h(),k(po.$$.fragment),Od=h(),k(ho.$$.fragment),Wd=h(),k(uo.$$.fragment),Yr=h(),qt=a("h2"),mo=a("a"),Ga=a("span"),k(bn.$$.fragment),Ud=h(),xa=a("span"),Bd=n("TFGPTJModel"),Zr=h(),je=a("div"),k(wn.$$.fragment),Qd=h(),Ea=a("p"),Hd=n("The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top."),Rd=h(),$n=a("p"),Vd=n("This model inherits from "),Gs=a("a"),Kd=n("TFPreTrainedModel"),Xd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yd=h(),Pn=a("p"),Zd=n("This model is also a "),Fn=a("a"),ec=n("tf.keras.Model"),tc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),oc=h(),k(fo.$$.fragment),nc=h(),ot=a("div"),k(jn.$$.fragment),sc=h(),Ct=a("p"),ac=n("The "),xs=a("a"),rc=n("TFGPTJModel"),ic=n(" forward method, overrides the "),Ja=a("code"),lc=n("__call__"),dc=n(" special method."),cc=h(),k(go.$$.fragment),pc=h(),k(_o.$$.fragment),ei=h(),zt=a("h2"),To=a("a"),Ma=a("span"),k(Gn.$$.fragment),hc=h(),qa=a("span"),uc=n("TFGPTJForCausalLM"),ti=h(),Ge=a("div"),k(xn.$$.fragment),mc=h(),Ca=a("p"),fc=n("The GPT-J Model transformer with a language modeling head on top."),gc=h(),En=a("p"),_c=n("This model inherits from "),Es=a("a"),Tc=n("TFPreTrainedModel"),vc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yc=h(),Jn=a("p"),kc=n("This model is also a "),Mn=a("a"),bc=n("tf.keras.Model"),wc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$c=h(),k(vo.$$.fragment),Pc=h(),nt=a("div"),k(qn.$$.fragment),Fc=h(),At=a("p"),jc=n("The "),Js=a("a"),Gc=n("TFGPTJForCausalLM"),xc=n(" forward method, overrides the "),za=a("code"),Ec=n("__call__"),Jc=n(" special method."),Mc=h(),k(yo.$$.fragment),qc=h(),k(ko.$$.fragment),oi=h(),It=a("h2"),bo=a("a"),Aa=a("span"),k(Cn.$$.fragment),Cc=h(),Ia=a("span"),zc=n("TFGPTJForSequenceClassification"),ni=h(),se=a("div"),k(zn.$$.fragment),Ac=h(),La=a("p"),Ic=n("The GPT-J Model transformer with a sequence classification head on top (linear layer)."),Lc=h(),Ms=a("p"),qs=a("a"),Nc=n("GPTJForSequenceClassification"),Sc=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),Dc=h(),Ye=a("p"),Oc=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Na=a("code"),Wc=n("pad_token_id"),Uc=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Sa=a("code"),Bc=n("pad_token_id"),Qc=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Da=a("code"),Hc=n("inputs_embeds"),Rc=n(" are passed instead of "),Oa=a("code"),Vc=n("input_ids"),Kc=n(`, it does the same (take the last value in
each row of the batch).`),Xc=h(),An=a("p"),Yc=n("This model inherits from "),Cs=a("a"),Zc=n("TFPreTrainedModel"),ep=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tp=h(),In=a("p"),op=n("This model is also a "),Ln=a("a"),np=n("tf.keras.Model"),sp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ap=h(),k(wo.$$.fragment),rp=h(),De=a("div"),k(Nn.$$.fragment),ip=h(),Lt=a("p"),lp=n("The "),zs=a("a"),dp=n("TFGPTJForSequenceClassification"),cp=n(" forward method, overrides the "),Wa=a("code"),pp=n("__call__"),hp=n(" special method."),up=h(),k($o.$$.fragment),mp=h(),k(Po.$$.fragment),fp=h(),k(Fo.$$.fragment),si=h(),Nt=a("h2"),jo=a("a"),Ua=a("span"),k(Sn.$$.fragment),gp=h(),Ba=a("span"),_p=n("TFGPTJForQuestionAnswering"),ai=h(),xe=a("div"),k(Dn.$$.fragment),Tp=h(),St=a("p"),vp=n(`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Qa=a("code"),yp=n("span start logits"),kp=n(" and "),Ha=a("code"),bp=n("span end logits"),wp=n(")."),$p=h(),On=a("p"),Pp=n("This model inherits from "),As=a("a"),Fp=n("TFPreTrainedModel"),jp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gp=h(),Wn=a("p"),xp=n("This model is also a "),Un=a("a"),Ep=n("tf.keras.Model"),Jp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mp=h(),k(Go.$$.fragment),qp=h(),Oe=a("div"),k(Bn.$$.fragment),Cp=h(),Dt=a("p"),zp=n("The "),Is=a("a"),Ap=n("TFGPTJForQuestionAnswering"),Ip=n(" forward method, overrides the "),Ra=a("code"),Lp=n("__call__"),Np=n(" special method."),Sp=h(),k(xo.$$.fragment),Dp=h(),k(Eo.$$.fragment),Op=h(),k(Jo.$$.fragment),ri=h(),Ot=a("h2"),Mo=a("a"),Va=a("span"),k(Qn.$$.fragment),Wp=h(),Ka=a("span"),Up=n("FlaxGPTJModel"),ii=h(),be=a("div"),k(Hn.$$.fragment),Bp=h(),Xa=a("p"),Qp=n("The bare GPTJ Model transformer outputting raw hidden-states without any specific head on top."),Hp=h(),Rn=a("p"),Rp=n("This model inherits from "),Ls=a("a"),Vp=n("FlaxPreTrainedModel"),Kp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xp=h(),Vn=a("p"),Yp=n(`This model is also a Flax Linen
`),Kn=a("a"),Zp=n("flax.nn.Module"),eh=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),th=h(),Ya=a("p"),oh=n("Finally, this model supports inherent JAX features such as:"),nh=h(),ut=a("ul"),Za=a("li"),Xn=a("a"),sh=n("Just-In-Time (JIT) compilation"),ah=h(),er=a("li"),Yn=a("a"),rh=n("Automatic Differentiation"),ih=h(),tr=a("li"),Zn=a("a"),lh=n("Vectorization"),dh=h(),or=a("li"),es=a("a"),ch=n("Parallelization"),ph=h(),st=a("div"),k(ts.$$.fragment),hh=h(),Wt=a("p"),uh=n("The "),nr=a("code"),mh=n("FlaxGPTJPreTrainedModel"),fh=n(" forward method, overrides the "),sr=a("code"),gh=n("__call__"),_h=n(" special method."),Th=h(),k(qo.$$.fragment),vh=h(),k(Co.$$.fragment),li=h(),Ut=a("h2"),zo=a("a"),ar=a("span"),k(os.$$.fragment),yh=h(),rr=a("span"),kh=n("FlaxGPTJForCausalLM"),di=h(),we=a("div"),k(ns.$$.fragment),bh=h(),ir=a("p"),wh=n("The GPTJ Model transformer with a language modeling head on top."),$h=h(),ss=a("p"),Ph=n("This model inherits from "),Ns=a("a"),Fh=n("FlaxPreTrainedModel"),jh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gh=h(),as=a("p"),xh=n(`This model is also a Flax Linen
`),rs=a("a"),Eh=n("flax.nn.Module"),Jh=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mh=h(),lr=a("p"),qh=n("Finally, this model supports inherent JAX features such as:"),Ch=h(),mt=a("ul"),dr=a("li"),is=a("a"),zh=n("Just-In-Time (JIT) compilation"),Ah=h(),cr=a("li"),ls=a("a"),Ih=n("Automatic Differentiation"),Lh=h(),pr=a("li"),ds=a("a"),Nh=n("Vectorization"),Sh=h(),hr=a("li"),cs=a("a"),Dh=n("Parallelization"),Oh=h(),at=a("div"),k(ps.$$.fragment),Wh=h(),Bt=a("p"),Uh=n("The "),ur=a("code"),Bh=n("FlaxGPTJPreTrainedModel"),Qh=n(" forward method, overrides the "),mr=a("code"),Hh=n("__call__"),Rh=n(" special method."),Vh=h(),k(Ao.$$.fragment),Kh=h(),k(Io.$$.fragment),this.h()},l(o){const _=pf('[data-svelte="svelte-1phssyn"]',document.head);d=r(_,"META",{name:!0,content:!0}),_.forEach(t),T=u(o),c=r(o,"H1",{class:!0});var hs=i(c);p=r(hs,"A",{id:!0,class:!0,href:!0});var fr=i(p);v=r(fr,"SPAN",{});var gr=i(v);b(l.$$.fragment,gr),gr.forEach(t),fr.forEach(t),m=u(hs),G=r(hs,"SPAN",{});var _r=i(G);he=s(_r,"GPT-J"),_r.forEach(t),hs.forEach(t),K=u(o),E=r(o,"H2",{class:!0});var us=i(E);X=r(us,"A",{id:!0,class:!0,href:!0});var Tr=i(X);O=r(Tr,"SPAN",{});var vr=i(O);b(Z.$$.fragment,vr),vr.forEach(t),Tr.forEach(t),ue=u(us),W=r(us,"SPAN",{});var yr=i(W);me=s(yr,"Overview"),yr.forEach(t),us.forEach(t),re=u(o),L=r(o,"P",{});var Qt=i(L);I=s(Qt,"The GPT-J model was released in the "),ee=r(Qt,"A",{href:!0,rel:!0});var kr=i(ee);te=s(kr,"kingoflolz/mesh-transformer-jax"),kr.forEach(t),J=s(Qt,` repository by Ben Wang and Aran Komatsuzaki. It is a GPT-2-like
causal language model trained on `),M=r(Qt,"A",{href:!0,rel:!0});var br=i(M);fe=s(br,"the Pile"),br.forEach(t),Q=s(Qt," dataset."),Qt.forEach(t),ie=u(o),Y=r(o,"P",{});var ms=i(Y);H=s(ms,"This model was contributed by "),oe=r(ms,"A",{href:!0,rel:!0});var wr=i(oe);ge=s(wr,"Stella Biderman"),wr.forEach(t),q=s(ms,"."),ms.forEach(t),le=u(o),N=r(o,"P",{});var $r=i(N);_e=s($r,"Tips:"),$r.forEach(t),de=u(o),S=r(o,"UL",{});var Pr=i(S);U=r(Pr,"LI",{});var Ze=i(U);Te=s(Ze,"To load "),C=r(Ze,"A",{href:!0,rel:!0});var Fr=i(C);ve=s(Fr,"GPT-J"),Fr.forEach(t),R=s(Ze,` in float32 one would need at least 2x model size CPU
RAM: 1x for initial weights and another 1x to load the checkpoint. So for GPT-J it would take at least 48GB of CPU
RAM to just load the model. To reduce the CPU RAM usage there are a few options. The `),ne=r(Ze,"CODE",{});var jr=i(ne);y=s(jr,"torch_dtype"),jr.forEach(t),x=s(Ze,` argument can be
used to initialize the model in half-precision. And the `),V=r(Ze,"CODE",{});var Gr=i(V);Ce=s(Gr,"low_cpu_mem_usage"),Gr.forEach(t),ze=s(Ze,` argument can be used to keep the RAM
usage to 1x. There is also a `),z=r(Ze,"A",{href:!0,rel:!0});var xr=i(z);Ae=s(xr,"fp16 branch"),xr.forEach(t),Ie=s(Ze,` which stores
the fp16 weights, which could be used to further minimize the RAM usage. Combining all this it should take roughly
12.1GB of CPU RAM to load the model.`),Ze.forEach(t),Pr.forEach(t),Me=u(o),b(A.$$.fragment,o),B=u(o),ce=r(o,"UL",{});var fs=i(ce);Pe=r(fs,"LI",{});var Er=i(Pe);D=r(Er,"P",{});var Ss=i(D);Le=s(Ss,`The model should fit on 16GB GPU for inference. For training/fine-tuning it would take much more GPU RAM. Adam
optimizer for example makes four copies of the model: model, gradients, average and squared average of the gradients.
So it would need at least 4x model size GPU memory, even with mixed precision as gradient updates are in fp32. This
is not including the activations and data batches, which would again require some more GPU RAM. So one should explore
solutions such as DeepSpeed, to train/fine-tune the model. Another option is to use the original codebase to
train/fine-tune the model on TPU and then convert the model to Transformers format for inference. Instructions for
that could be found `),ye=r(Ss,"A",{href:!0,rel:!0});var Jr=i(ye);ke=s(Jr,"here"),Jr.forEach(t),Ss.forEach(t),Er.forEach(t),Ne=u(fs),ta=r(fs,"LI",{});var Mr=i(ta);ct=r(Mr,"P",{});var ft=i(ct);Ni=s(ft,`Although the embedding matrix has a size of 50400, only 50257 entries are used by the GPT-2 tokenizer. These extra
tokens are added for the sake of efficiency on TPUs. To avoid the mis-match between embedding matrix size and vocab
size, the tokenizer for `),Ro=r(ft,"A",{href:!0,rel:!0});var qr=i(Ro);Si=s(qr,"GPT-J"),qr.forEach(t),Di=s(ft,` contains 143 extra tokens
`),oa=r(ft,"CODE",{});var Cr=i(oa);Oi=s(Cr,"<|extratoken_1|>... <|extratoken_143|>"),Cr.forEach(t),Wi=s(ft,", so the "),na=r(ft,"CODE",{});var zr=i(na);Ui=s(zr,"vocab_size"),zr.forEach(t),Bi=s(ft," of tokenizer also becomes 50400."),ft.forEach(t),Mr.forEach(t),fs.forEach(t),Ir=u(o),bt=r(o,"H3",{class:!0});var gs=i(bt);Ht=r(gs,"A",{id:!0,class:!0,href:!0});var Ar=i(Ht);sa=r(Ar,"SPAN",{});var Zh=i(sa);b(Vo.$$.fragment,Zh),Zh.forEach(t),Ar.forEach(t),Qi=u(gs),aa=r(gs,"SPAN",{});var eu=i(aa);Hi=s(eu,"Generation"),eu.forEach(t),gs.forEach(t),Lr=u(o),Rt=r(o,"P",{});var pi=i(Rt);Ri=s(pi,"The "),_s=r(pi,"A",{href:!0});var tu=i(_s);Vi=s(tu,"generate()"),tu.forEach(t),Ki=s(pi,` method can be used to generate text using GPT-J
model.`),pi.forEach(t),Nr=u(o),b(Ko.$$.fragment,o),Sr=u(o),Ts=r(o,"P",{});var ou=i(Ts);Xi=s(ou,"\u2026or in float16 precision:"),ou.forEach(t),Dr=u(o),b(Xo.$$.fragment,o),Or=u(o),wt=r(o,"H2",{class:!0});var hi=i(wt);Vt=r(hi,"A",{id:!0,class:!0,href:!0});var nu=i(Vt);ra=r(nu,"SPAN",{});var su=i(ra);b(Yo.$$.fragment,su),su.forEach(t),nu.forEach(t),Yi=u(hi),ia=r(hi,"SPAN",{});var au=i(ia);Zi=s(au,"GPTJConfig"),au.forEach(t),hi.forEach(t),Wr=u(o),pt=r(o,"DIV",{class:!0});var Ds=i(pt);b(Zo.$$.fragment,Ds),el=u(Ds),Re=r(Ds,"P",{});var gt=i(Re);tl=s(gt,"This is the configuration class to store the configuration of a "),vs=r(gt,"A",{href:!0});var ru=i(vs);ol=s(ru,"GPTJModel"),ru.forEach(t),nl=s(gt,`. It is used to instantiate a GPT-J
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the GPT-J
`),en=r(gt,"A",{href:!0,rel:!0});var iu=i(en);sl=s(iu,"gpt-j-6B"),iu.forEach(t),al=s(gt,` architecture. Configuration objects inherit from
`),ys=r(gt,"A",{href:!0});var lu=i(ys);rl=s(lu,"PretrainedConfig"),lu.forEach(t),il=s(gt," and can be used to control the model outputs. Read the documentation from "),ks=r(gt,"A",{href:!0});var du=i(ks);ll=s(du,"PretrainedConfig"),du.forEach(t),dl=s(gt,`
for more information.`),gt.forEach(t),cl=u(Ds),b(Kt.$$.fragment,Ds),Ds.forEach(t),Ur=u(o),$t=r(o,"H2",{class:!0});var ui=i($t);Xt=r(ui,"A",{id:!0,class:!0,href:!0});var cu=i(Xt);la=r(cu,"SPAN",{});var pu=i(la);b(tn.$$.fragment,pu),pu.forEach(t),cu.forEach(t),pl=u(ui),da=r(ui,"SPAN",{});var hu=i(da);hl=s(hu,"GPTJModel"),hu.forEach(t),ui.forEach(t),Br=u(o),ht=r(o,"DIV",{class:!0});var Os=i(ht);b(on.$$.fragment,Os),ul=u(Os),nn=r(Os,"P",{});var mi=i(nn);ml=s(mi,`The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),sn=r(mi,"A",{href:!0,rel:!0});var uu=i(sn);fl=s(uu,"torch.nn.Module"),uu.forEach(t),gl=s(mi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mi.forEach(t),_l=u(Os),et=r(Os,"DIV",{class:!0});var Lo=i(et);b(an.$$.fragment,Lo),Tl=u(Lo),Pt=r(Lo,"P",{});var Ws=i(Pt);vl=s(Ws,"The "),bs=r(Ws,"A",{href:!0});var mu=i(bs);yl=s(mu,"GPTJModel"),mu.forEach(t),kl=s(Ws," forward method, overrides the "),ca=r(Ws,"CODE",{});var fu=i(ca);bl=s(fu,"__call__"),fu.forEach(t),wl=s(Ws," special method."),Ws.forEach(t),$l=u(Lo),b(Yt.$$.fragment,Lo),Pl=u(Lo),b(Zt.$$.fragment,Lo),Lo.forEach(t),Os.forEach(t),Qr=u(o),Ft=r(o,"H2",{class:!0});var fi=i(Ft);eo=r(fi,"A",{id:!0,class:!0,href:!0});var gu=i(eo);pa=r(gu,"SPAN",{});var _u=i(pa);b(rn.$$.fragment,_u),_u.forEach(t),gu.forEach(t),Fl=u(fi),ha=r(fi,"SPAN",{});var Tu=i(ha);jl=s(Tu,"GPTJForCausalLM"),Tu.forEach(t),fi.forEach(t),Hr=u(o),Ve=r(o,"DIV",{class:!0});var No=i(Ve);b(ln.$$.fragment,No),Gl=u(No),ua=r(No,"P",{});var vu=i(ua);xl=s(vu,"The GPT-J Model transformer with a language modeling head on top."),vu.forEach(t),El=u(No),dn=r(No,"P",{});var gi=i(dn);Jl=s(gi,"This model is a PyTorch "),cn=r(gi,"A",{href:!0,rel:!0});var yu=i(cn);Ml=s(yu,"torch.nn.Module"),yu.forEach(t),ql=s(gi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gi.forEach(t),Cl=u(No),tt=r(No,"DIV",{class:!0});var So=i(tt);b(pn.$$.fragment,So),zl=u(So),jt=r(So,"P",{});var Us=i(jt);Al=s(Us,"The "),ws=r(Us,"A",{href:!0});var ku=i(ws);Il=s(ku,"GPTJForCausalLM"),ku.forEach(t),Ll=s(Us," forward method, overrides the "),ma=r(Us,"CODE",{});var bu=i(ma);Nl=s(bu,"__call__"),bu.forEach(t),Sl=s(Us," special method."),Us.forEach(t),Dl=u(So),b(to.$$.fragment,So),Ol=u(So),b(oo.$$.fragment,So),So.forEach(t),No.forEach(t),Rr=u(o),Gt=r(o,"H2",{class:!0});var _i=i(Gt);no=r(_i,"A",{id:!0,class:!0,href:!0});var wu=i(no);fa=r(wu,"SPAN",{});var $u=i(fa);b(hn.$$.fragment,$u),$u.forEach(t),wu.forEach(t),Wl=u(_i),ga=r(_i,"SPAN",{});var Pu=i(ga);Ul=s(Pu,"GPTJForSequenceClassification"),Pu.forEach(t),_i.forEach(t),Vr=u(o),Fe=r(o,"DIV",{class:!0});var rt=i(Fe);b(un.$$.fragment,rt),Bl=u(rt),_a=r(rt,"P",{});var Fu=i(_a);Ql=s(Fu,"The GPT-J Model transformer with a sequence classification head on top (linear layer)."),Fu.forEach(t),Hl=u(rt),$s=r(rt,"P",{});var Xh=i($s);Ps=r(Xh,"A",{href:!0});var ju=i(Ps);Rl=s(ju,"GPTJForSequenceClassification"),ju.forEach(t),Vl=s(Xh,` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),Xh.forEach(t),Kl=u(rt),Ke=r(rt,"P",{});var _t=i(Ke);Xl=s(_t,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ta=r(_t,"CODE",{});var Gu=i(Ta);Yl=s(Gu,"pad_token_id"),Gu.forEach(t),Zl=s(_t,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),va=r(_t,"CODE",{});var xu=i(va);ed=s(xu,"pad_token_id"),xu.forEach(t),td=s(_t,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ya=r(_t,"CODE",{});var Eu=i(ya);od=s(Eu,"inputs_embeds"),Eu.forEach(t),nd=s(_t," are passed instead of "),ka=r(_t,"CODE",{});var Ju=i(ka);sd=s(Ju,"input_ids"),Ju.forEach(t),ad=s(_t,`, it does the same (take the last value in
each row of the batch).`),_t.forEach(t),rd=u(rt),mn=r(rt,"P",{});var Ti=i(mn);id=s(Ti,"This model is a PyTorch "),fn=r(Ti,"A",{href:!0,rel:!0});var Mu=i(fn);ld=s(Mu,"torch.nn.Module"),Mu.forEach(t),dd=s(Ti,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ti.forEach(t),cd=u(rt),$e=r(rt,"DIV",{class:!0});var We=i($e);b(gn.$$.fragment,We),pd=u(We),xt=r(We,"P",{});var Bs=i(xt);hd=s(Bs,"The "),Fs=r(Bs,"A",{href:!0});var qu=i(Fs);ud=s(qu,"GPTJForSequenceClassification"),qu.forEach(t),md=s(Bs," forward method, overrides the "),ba=r(Bs,"CODE",{});var Cu=i(ba);fd=s(Cu,"__call__"),Cu.forEach(t),gd=s(Bs," special method."),Bs.forEach(t),_d=u(We),b(so.$$.fragment,We),Td=u(We),b(ao.$$.fragment,We),vd=u(We),b(ro.$$.fragment,We),yd=u(We),b(io.$$.fragment,We),kd=u(We),b(lo.$$.fragment,We),We.forEach(t),rt.forEach(t),Kr=u(o),Et=r(o,"H2",{class:!0});var vi=i(Et);co=r(vi,"A",{id:!0,class:!0,href:!0});var zu=i(co);wa=r(zu,"SPAN",{});var Au=i(wa);b(_n.$$.fragment,Au),Au.forEach(t),zu.forEach(t),bd=u(vi),$a=r(vi,"SPAN",{});var Iu=i($a);wd=s(Iu,"GPTJForQuestionAnswering"),Iu.forEach(t),vi.forEach(t),Xr=u(o),Xe=r(o,"DIV",{class:!0});var Do=i(Xe);b(Tn.$$.fragment,Do),$d=u(Do),Jt=r(Do,"P",{});var Qs=i(Jt);Pd=s(Qs,`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Pa=r(Qs,"CODE",{});var Lu=i(Pa);Fd=s(Lu,"span start logits"),Lu.forEach(t),jd=s(Qs," and "),Fa=r(Qs,"CODE",{});var Nu=i(Fa);Gd=s(Nu,"span end logits"),Nu.forEach(t),xd=s(Qs,")."),Qs.forEach(t),Ed=u(Do),vn=r(Do,"P",{});var yi=i(vn);Jd=s(yi,"This model is a PyTorch "),yn=r(yi,"A",{href:!0,rel:!0});var Su=i(yn);Md=s(Su,"torch.nn.Module"),Su.forEach(t),qd=s(yi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yi.forEach(t),Cd=u(Do),Se=r(Do,"DIV",{class:!0});var Tt=i(Se);b(kn.$$.fragment,Tt),zd=u(Tt),Mt=r(Tt,"P",{});var Hs=i(Mt);Ad=s(Hs,"The "),js=r(Hs,"A",{href:!0});var Du=i(js);Id=s(Du,"GPTJForQuestionAnswering"),Du.forEach(t),Ld=s(Hs," forward method, overrides the "),ja=r(Hs,"CODE",{});var Ou=i(ja);Nd=s(Ou,"__call__"),Ou.forEach(t),Sd=s(Hs," special method."),Hs.forEach(t),Dd=u(Tt),b(po.$$.fragment,Tt),Od=u(Tt),b(ho.$$.fragment,Tt),Wd=u(Tt),b(uo.$$.fragment,Tt),Tt.forEach(t),Do.forEach(t),Yr=u(o),qt=r(o,"H2",{class:!0});var ki=i(qt);mo=r(ki,"A",{id:!0,class:!0,href:!0});var Wu=i(mo);Ga=r(Wu,"SPAN",{});var Uu=i(Ga);b(bn.$$.fragment,Uu),Uu.forEach(t),Wu.forEach(t),Ud=u(ki),xa=r(ki,"SPAN",{});var Bu=i(xa);Bd=s(Bu,"TFGPTJModel"),Bu.forEach(t),ki.forEach(t),Zr=u(o),je=r(o,"DIV",{class:!0});var it=i(je);b(wn.$$.fragment,it),Qd=u(it),Ea=r(it,"P",{});var Qu=i(Ea);Hd=s(Qu,"The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top."),Qu.forEach(t),Rd=u(it),$n=r(it,"P",{});var bi=i($n);Vd=s(bi,"This model inherits from "),Gs=r(bi,"A",{href:!0});var Hu=i(Gs);Kd=s(Hu,"TFPreTrainedModel"),Hu.forEach(t),Xd=s(bi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bi.forEach(t),Yd=u(it),Pn=r(it,"P",{});var wi=i(Pn);Zd=s(wi,"This model is also a "),Fn=r(wi,"A",{href:!0,rel:!0});var Ru=i(Fn);ec=s(Ru,"tf.keras.Model"),Ru.forEach(t),tc=s(wi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wi.forEach(t),oc=u(it),b(fo.$$.fragment,it),nc=u(it),ot=r(it,"DIV",{class:!0});var Oo=i(ot);b(jn.$$.fragment,Oo),sc=u(Oo),Ct=r(Oo,"P",{});var Rs=i(Ct);ac=s(Rs,"The "),xs=r(Rs,"A",{href:!0});var Vu=i(xs);rc=s(Vu,"TFGPTJModel"),Vu.forEach(t),ic=s(Rs," forward method, overrides the "),Ja=r(Rs,"CODE",{});var Ku=i(Ja);lc=s(Ku,"__call__"),Ku.forEach(t),dc=s(Rs," special method."),Rs.forEach(t),cc=u(Oo),b(go.$$.fragment,Oo),pc=u(Oo),b(_o.$$.fragment,Oo),Oo.forEach(t),it.forEach(t),ei=u(o),zt=r(o,"H2",{class:!0});var $i=i(zt);To=r($i,"A",{id:!0,class:!0,href:!0});var Xu=i(To);Ma=r(Xu,"SPAN",{});var Yu=i(Ma);b(Gn.$$.fragment,Yu),Yu.forEach(t),Xu.forEach(t),hc=u($i),qa=r($i,"SPAN",{});var Zu=i(qa);uc=s(Zu,"TFGPTJForCausalLM"),Zu.forEach(t),$i.forEach(t),ti=u(o),Ge=r(o,"DIV",{class:!0});var lt=i(Ge);b(xn.$$.fragment,lt),mc=u(lt),Ca=r(lt,"P",{});var em=i(Ca);fc=s(em,"The GPT-J Model transformer with a language modeling head on top."),em.forEach(t),gc=u(lt),En=r(lt,"P",{});var Pi=i(En);_c=s(Pi,"This model inherits from "),Es=r(Pi,"A",{href:!0});var tm=i(Es);Tc=s(tm,"TFPreTrainedModel"),tm.forEach(t),vc=s(Pi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pi.forEach(t),yc=u(lt),Jn=r(lt,"P",{});var Fi=i(Jn);kc=s(Fi,"This model is also a "),Mn=r(Fi,"A",{href:!0,rel:!0});var om=i(Mn);bc=s(om,"tf.keras.Model"),om.forEach(t),wc=s(Fi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fi.forEach(t),$c=u(lt),b(vo.$$.fragment,lt),Pc=u(lt),nt=r(lt,"DIV",{class:!0});var Wo=i(nt);b(qn.$$.fragment,Wo),Fc=u(Wo),At=r(Wo,"P",{});var Vs=i(At);jc=s(Vs,"The "),Js=r(Vs,"A",{href:!0});var nm=i(Js);Gc=s(nm,"TFGPTJForCausalLM"),nm.forEach(t),xc=s(Vs," forward method, overrides the "),za=r(Vs,"CODE",{});var sm=i(za);Ec=s(sm,"__call__"),sm.forEach(t),Jc=s(Vs," special method."),Vs.forEach(t),Mc=u(Wo),b(yo.$$.fragment,Wo),qc=u(Wo),b(ko.$$.fragment,Wo),Wo.forEach(t),lt.forEach(t),oi=u(o),It=r(o,"H2",{class:!0});var ji=i(It);bo=r(ji,"A",{id:!0,class:!0,href:!0});var am=i(bo);Aa=r(am,"SPAN",{});var rm=i(Aa);b(Cn.$$.fragment,rm),rm.forEach(t),am.forEach(t),Cc=u(ji),Ia=r(ji,"SPAN",{});var im=i(Ia);zc=s(im,"TFGPTJForSequenceClassification"),im.forEach(t),ji.forEach(t),ni=u(o),se=r(o,"DIV",{class:!0});var qe=i(se);b(zn.$$.fragment,qe),Ac=u(qe),La=r(qe,"P",{});var lm=i(La);Ic=s(lm,"The GPT-J Model transformer with a sequence classification head on top (linear layer)."),lm.forEach(t),Lc=u(qe),Ms=r(qe,"P",{});var Yh=i(Ms);qs=r(Yh,"A",{href:!0});var dm=i(qs);Nc=s(dm,"GPTJForSequenceClassification"),dm.forEach(t),Sc=s(Yh,` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),Yh.forEach(t),Dc=u(qe),Ye=r(qe,"P",{});var vt=i(Ye);Oc=s(vt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Na=r(vt,"CODE",{});var cm=i(Na);Wc=s(cm,"pad_token_id"),cm.forEach(t),Uc=s(vt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Sa=r(vt,"CODE",{});var pm=i(Sa);Bc=s(pm,"pad_token_id"),pm.forEach(t),Qc=s(vt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Da=r(vt,"CODE",{});var hm=i(Da);Hc=s(hm,"inputs_embeds"),hm.forEach(t),Rc=s(vt," are passed instead of "),Oa=r(vt,"CODE",{});var um=i(Oa);Vc=s(um,"input_ids"),um.forEach(t),Kc=s(vt,`, it does the same (take the last value in
each row of the batch).`),vt.forEach(t),Xc=u(qe),An=r(qe,"P",{});var Gi=i(An);Yc=s(Gi,"This model inherits from "),Cs=r(Gi,"A",{href:!0});var mm=i(Cs);Zc=s(mm,"TFPreTrainedModel"),mm.forEach(t),ep=s(Gi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gi.forEach(t),tp=u(qe),In=r(qe,"P",{});var xi=i(In);op=s(xi,"This model is also a "),Ln=r(xi,"A",{href:!0,rel:!0});var fm=i(Ln);np=s(fm,"tf.keras.Model"),fm.forEach(t),sp=s(xi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xi.forEach(t),ap=u(qe),b(wo.$$.fragment,qe),rp=u(qe),De=r(qe,"DIV",{class:!0});var yt=i(De);b(Nn.$$.fragment,yt),ip=u(yt),Lt=r(yt,"P",{});var Ks=i(Lt);lp=s(Ks,"The "),zs=r(Ks,"A",{href:!0});var gm=i(zs);dp=s(gm,"TFGPTJForSequenceClassification"),gm.forEach(t),cp=s(Ks," forward method, overrides the "),Wa=r(Ks,"CODE",{});var _m=i(Wa);pp=s(_m,"__call__"),_m.forEach(t),hp=s(Ks," special method."),Ks.forEach(t),up=u(yt),b($o.$$.fragment,yt),mp=u(yt),b(Po.$$.fragment,yt),fp=u(yt),b(Fo.$$.fragment,yt),yt.forEach(t),qe.forEach(t),si=u(o),Nt=r(o,"H2",{class:!0});var Ei=i(Nt);jo=r(Ei,"A",{id:!0,class:!0,href:!0});var Tm=i(jo);Ua=r(Tm,"SPAN",{});var vm=i(Ua);b(Sn.$$.fragment,vm),vm.forEach(t),Tm.forEach(t),gp=u(Ei),Ba=r(Ei,"SPAN",{});var ym=i(Ba);_p=s(ym,"TFGPTJForQuestionAnswering"),ym.forEach(t),Ei.forEach(t),ai=u(o),xe=r(o,"DIV",{class:!0});var dt=i(xe);b(Dn.$$.fragment,dt),Tp=u(dt),St=r(dt,"P",{});var Xs=i(St);vp=s(Xs,`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Qa=r(Xs,"CODE",{});var km=i(Qa);yp=s(km,"span start logits"),km.forEach(t),kp=s(Xs," and "),Ha=r(Xs,"CODE",{});var bm=i(Ha);bp=s(bm,"span end logits"),bm.forEach(t),wp=s(Xs,")."),Xs.forEach(t),$p=u(dt),On=r(dt,"P",{});var Ji=i(On);Pp=s(Ji,"This model inherits from "),As=r(Ji,"A",{href:!0});var wm=i(As);Fp=s(wm,"TFPreTrainedModel"),wm.forEach(t),jp=s(Ji,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ji.forEach(t),Gp=u(dt),Wn=r(dt,"P",{});var Mi=i(Wn);xp=s(Mi,"This model is also a "),Un=r(Mi,"A",{href:!0,rel:!0});var $m=i(Un);Ep=s($m,"tf.keras.Model"),$m.forEach(t),Jp=s(Mi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mi.forEach(t),Mp=u(dt),b(Go.$$.fragment,dt),qp=u(dt),Oe=r(dt,"DIV",{class:!0});var kt=i(Oe);b(Bn.$$.fragment,kt),Cp=u(kt),Dt=r(kt,"P",{});var Ys=i(Dt);zp=s(Ys,"The "),Is=r(Ys,"A",{href:!0});var Pm=i(Is);Ap=s(Pm,"TFGPTJForQuestionAnswering"),Pm.forEach(t),Ip=s(Ys," forward method, overrides the "),Ra=r(Ys,"CODE",{});var Fm=i(Ra);Lp=s(Fm,"__call__"),Fm.forEach(t),Np=s(Ys," special method."),Ys.forEach(t),Sp=u(kt),b(xo.$$.fragment,kt),Dp=u(kt),b(Eo.$$.fragment,kt),Op=u(kt),b(Jo.$$.fragment,kt),kt.forEach(t),dt.forEach(t),ri=u(o),Ot=r(o,"H2",{class:!0});var qi=i(Ot);Mo=r(qi,"A",{id:!0,class:!0,href:!0});var jm=i(Mo);Va=r(jm,"SPAN",{});var Gm=i(Va);b(Qn.$$.fragment,Gm),Gm.forEach(t),jm.forEach(t),Wp=u(qi),Ka=r(qi,"SPAN",{});var xm=i(Ka);Up=s(xm,"FlaxGPTJModel"),xm.forEach(t),qi.forEach(t),ii=u(o),be=r(o,"DIV",{class:!0});var Ue=i(be);b(Hn.$$.fragment,Ue),Bp=u(Ue),Xa=r(Ue,"P",{});var Em=i(Xa);Qp=s(Em,"The bare GPTJ Model transformer outputting raw hidden-states without any specific head on top."),Em.forEach(t),Hp=u(Ue),Rn=r(Ue,"P",{});var Ci=i(Rn);Rp=s(Ci,"This model inherits from "),Ls=r(Ci,"A",{href:!0});var Jm=i(Ls);Vp=s(Jm,"FlaxPreTrainedModel"),Jm.forEach(t),Kp=s(Ci,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ci.forEach(t),Xp=u(Ue),Vn=r(Ue,"P",{});var zi=i(Vn);Yp=s(zi,`This model is also a Flax Linen
`),Kn=r(zi,"A",{href:!0,rel:!0});var Mm=i(Kn);Zp=s(Mm,"flax.nn.Module"),Mm.forEach(t),eh=s(zi,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zi.forEach(t),th=u(Ue),Ya=r(Ue,"P",{});var qm=i(Ya);oh=s(qm,"Finally, this model supports inherent JAX features such as:"),qm.forEach(t),nh=u(Ue),ut=r(Ue,"UL",{});var Uo=i(ut);Za=r(Uo,"LI",{});var Cm=i(Za);Xn=r(Cm,"A",{href:!0,rel:!0});var zm=i(Xn);sh=s(zm,"Just-In-Time (JIT) compilation"),zm.forEach(t),Cm.forEach(t),ah=u(Uo),er=r(Uo,"LI",{});var Am=i(er);Yn=r(Am,"A",{href:!0,rel:!0});var Im=i(Yn);rh=s(Im,"Automatic Differentiation"),Im.forEach(t),Am.forEach(t),ih=u(Uo),tr=r(Uo,"LI",{});var Lm=i(tr);Zn=r(Lm,"A",{href:!0,rel:!0});var Nm=i(Zn);lh=s(Nm,"Vectorization"),Nm.forEach(t),Lm.forEach(t),dh=u(Uo),or=r(Uo,"LI",{});var Sm=i(or);es=r(Sm,"A",{href:!0,rel:!0});var Dm=i(es);ch=s(Dm,"Parallelization"),Dm.forEach(t),Sm.forEach(t),Uo.forEach(t),ph=u(Ue),st=r(Ue,"DIV",{class:!0});var Bo=i(st);b(ts.$$.fragment,Bo),hh=u(Bo),Wt=r(Bo,"P",{});var Zs=i(Wt);uh=s(Zs,"The "),nr=r(Zs,"CODE",{});var Om=i(nr);mh=s(Om,"FlaxGPTJPreTrainedModel"),Om.forEach(t),fh=s(Zs," forward method, overrides the "),sr=r(Zs,"CODE",{});var Wm=i(sr);gh=s(Wm,"__call__"),Wm.forEach(t),_h=s(Zs," special method."),Zs.forEach(t),Th=u(Bo),b(qo.$$.fragment,Bo),vh=u(Bo),b(Co.$$.fragment,Bo),Bo.forEach(t),Ue.forEach(t),li=u(o),Ut=r(o,"H2",{class:!0});var Ai=i(Ut);zo=r(Ai,"A",{id:!0,class:!0,href:!0});var Um=i(zo);ar=r(Um,"SPAN",{});var Bm=i(ar);b(os.$$.fragment,Bm),Bm.forEach(t),Um.forEach(t),yh=u(Ai),rr=r(Ai,"SPAN",{});var Qm=i(rr);kh=s(Qm,"FlaxGPTJForCausalLM"),Qm.forEach(t),Ai.forEach(t),di=u(o),we=r(o,"DIV",{class:!0});var Be=i(we);b(ns.$$.fragment,Be),bh=u(Be),ir=r(Be,"P",{});var Hm=i(ir);wh=s(Hm,"The GPTJ Model transformer with a language modeling head on top."),Hm.forEach(t),$h=u(Be),ss=r(Be,"P",{});var Ii=i(ss);Ph=s(Ii,"This model inherits from "),Ns=r(Ii,"A",{href:!0});var Rm=i(Ns);Fh=s(Rm,"FlaxPreTrainedModel"),Rm.forEach(t),jh=s(Ii,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ii.forEach(t),Gh=u(Be),as=r(Be,"P",{});var Li=i(as);xh=s(Li,`This model is also a Flax Linen
`),rs=r(Li,"A",{href:!0,rel:!0});var Vm=i(rs);Eh=s(Vm,"flax.nn.Module"),Vm.forEach(t),Jh=s(Li,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Li.forEach(t),Mh=u(Be),lr=r(Be,"P",{});var Km=i(lr);qh=s(Km,"Finally, this model supports inherent JAX features such as:"),Km.forEach(t),Ch=u(Be),mt=r(Be,"UL",{});var Qo=i(mt);dr=r(Qo,"LI",{});var Xm=i(dr);is=r(Xm,"A",{href:!0,rel:!0});var Ym=i(is);zh=s(Ym,"Just-In-Time (JIT) compilation"),Ym.forEach(t),Xm.forEach(t),Ah=u(Qo),cr=r(Qo,"LI",{});var Zm=i(cr);ls=r(Zm,"A",{href:!0,rel:!0});var ef=i(ls);Ih=s(ef,"Automatic Differentiation"),ef.forEach(t),Zm.forEach(t),Lh=u(Qo),pr=r(Qo,"LI",{});var tf=i(pr);ds=r(tf,"A",{href:!0,rel:!0});var of=i(ds);Nh=s(of,"Vectorization"),of.forEach(t),tf.forEach(t),Sh=u(Qo),hr=r(Qo,"LI",{});var nf=i(hr);cs=r(nf,"A",{href:!0,rel:!0});var sf=i(cs);Dh=s(sf,"Parallelization"),sf.forEach(t),nf.forEach(t),Qo.forEach(t),Oh=u(Be),at=r(Be,"DIV",{class:!0});var Ho=i(at);b(ps.$$.fragment,Ho),Wh=u(Ho),Bt=r(Ho,"P",{});var ea=i(Bt);Uh=s(ea,"The "),ur=r(ea,"CODE",{});var af=i(ur);Bh=s(af,"FlaxGPTJPreTrainedModel"),af.forEach(t),Qh=s(ea," forward method, overrides the "),mr=r(ea,"CODE",{});var rf=i(mr);Hh=s(rf,"__call__"),rf.forEach(t),Rh=s(ea," special method."),ea.forEach(t),Vh=u(Ho),b(Ao.$$.fragment,Ho),Kh=u(Ho),b(Io.$$.fragment,Ho),Ho.forEach(t),Be.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Bf)),f(p,"id","gptj"),f(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(p,"href","#gptj"),f(c,"class","relative group"),f(X,"id","overview"),f(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(X,"href","#overview"),f(E,"class","relative group"),f(ee,"href","https://github.com/kingoflolz/mesh-transformer-jax"),f(ee,"rel","nofollow"),f(M,"href","https://pile.eleuther.ai/"),f(M,"rel","nofollow"),f(oe,"href","https://huggingface.co/stellaathena"),f(oe,"rel","nofollow"),f(C,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),f(C,"rel","nofollow"),f(z,"href","https://huggingface.co/EleutherAI/gpt-j-6B/tree/float16"),f(z,"rel","nofollow"),f(ye,"href","https://github.com/kingoflolz/mesh-transformer-jax/blob/master/howto_finetune.md"),f(ye,"rel","nofollow"),f(Ro,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),f(Ro,"rel","nofollow"),f(Ht,"id","generation"),f(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ht,"href","#generation"),f(bt,"class","relative group"),f(_s,"href","/docs/transformers/v4.18.0/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),f(Vt,"id","transformers.GPTJConfig"),f(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Vt,"href","#transformers.GPTJConfig"),f(wt,"class","relative group"),f(vs,"href","/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJModel"),f(en,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),f(en,"rel","nofollow"),f(ys,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),f(ks,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xt,"id","transformers.GPTJModel"),f(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Xt,"href","#transformers.GPTJModel"),f($t,"class","relative group"),f(sn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(sn,"rel","nofollow"),f(bs,"href","/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJModel"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(eo,"id","transformers.GPTJForCausalLM"),f(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(eo,"href","#transformers.GPTJForCausalLM"),f(Ft,"class","relative group"),f(cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(cn,"rel","nofollow"),f(ws,"href","/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJForCausalLM"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(no,"id","transformers.GPTJForSequenceClassification"),f(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(no,"href","#transformers.GPTJForSequenceClassification"),f(Gt,"class","relative group"),f(Ps,"href","/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),f(fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(fn,"rel","nofollow"),f(Fs,"href","/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(co,"id","transformers.GPTJForQuestionAnswering"),f(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(co,"href","#transformers.GPTJForQuestionAnswering"),f(Et,"class","relative group"),f(yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(yn,"rel","nofollow"),f(js,"href","/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJForQuestionAnswering"),f(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mo,"id","transformers.TFGPTJModel"),f(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(mo,"href","#transformers.TFGPTJModel"),f(qt,"class","relative group"),f(Gs,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Fn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Fn,"rel","nofollow"),f(xs,"href","/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.TFGPTJModel"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(To,"id","transformers.TFGPTJForCausalLM"),f(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(To,"href","#transformers.TFGPTJForCausalLM"),f(zt,"class","relative group"),f(Es,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Mn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Mn,"rel","nofollow"),f(Js,"href","/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.TFGPTJForCausalLM"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(bo,"id","transformers.TFGPTJForSequenceClassification"),f(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(bo,"href","#transformers.TFGPTJForSequenceClassification"),f(It,"class","relative group"),f(qs,"href","/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),f(Cs,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ln,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ln,"rel","nofollow"),f(zs,"href","/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.TFGPTJForSequenceClassification"),f(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jo,"id","transformers.TFGPTJForQuestionAnswering"),f(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(jo,"href","#transformers.TFGPTJForQuestionAnswering"),f(Nt,"class","relative group"),f(As,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Un,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Un,"rel","nofollow"),f(Is,"href","/docs/transformers/v4.18.0/en/model_doc/gptj#transformers.TFGPTJForQuestionAnswering"),f(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mo,"id","transformers.FlaxGPTJModel"),f(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mo,"href","#transformers.FlaxGPTJModel"),f(Ot,"class","relative group"),f(Ls,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Kn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Kn,"rel","nofollow"),f(Xn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Xn,"rel","nofollow"),f(Yn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Yn,"rel","nofollow"),f(Zn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Zn,"rel","nofollow"),f(es,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(es,"rel","nofollow"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zo,"id","transformers.FlaxGPTJForCausalLM"),f(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(zo,"href","#transformers.FlaxGPTJForCausalLM"),f(Ut,"class","relative group"),f(Ns,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(rs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(rs,"rel","nofollow"),f(is,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(is,"rel","nofollow"),f(ls,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ls,"rel","nofollow"),f(ds,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ds,"rel","nofollow"),f(cs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(cs,"rel","nofollow"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),g(o,T,_),g(o,c,_),e(c,p),e(p,v),w(l,v,null),e(c,m),e(c,G),e(G,he),g(o,K,_),g(o,E,_),e(E,X),e(X,O),w(Z,O,null),e(E,ue),e(E,W),e(W,me),g(o,re,_),g(o,L,_),e(L,I),e(L,ee),e(ee,te),e(L,J),e(L,M),e(M,fe),e(L,Q),g(o,ie,_),g(o,Y,_),e(Y,H),e(Y,oe),e(oe,ge),e(Y,q),g(o,le,_),g(o,N,_),e(N,_e),g(o,de,_),g(o,S,_),e(S,U),e(U,Te),e(U,C),e(C,ve),e(U,R),e(U,ne),e(ne,y),e(U,x),e(U,V),e(V,Ce),e(U,ze),e(U,z),e(z,Ae),e(U,Ie),g(o,Me,_),w(A,o,_),g(o,B,_),g(o,ce,_),e(ce,Pe),e(Pe,D),e(D,Le),e(D,ye),e(ye,ke),e(ce,Ne),e(ce,ta),e(ta,ct),e(ct,Ni),e(ct,Ro),e(Ro,Si),e(ct,Di),e(ct,oa),e(oa,Oi),e(ct,Wi),e(ct,na),e(na,Ui),e(ct,Bi),g(o,Ir,_),g(o,bt,_),e(bt,Ht),e(Ht,sa),w(Vo,sa,null),e(bt,Qi),e(bt,aa),e(aa,Hi),g(o,Lr,_),g(o,Rt,_),e(Rt,Ri),e(Rt,_s),e(_s,Vi),e(Rt,Ki),g(o,Nr,_),w(Ko,o,_),g(o,Sr,_),g(o,Ts,_),e(Ts,Xi),g(o,Dr,_),w(Xo,o,_),g(o,Or,_),g(o,wt,_),e(wt,Vt),e(Vt,ra),w(Yo,ra,null),e(wt,Yi),e(wt,ia),e(ia,Zi),g(o,Wr,_),g(o,pt,_),w(Zo,pt,null),e(pt,el),e(pt,Re),e(Re,tl),e(Re,vs),e(vs,ol),e(Re,nl),e(Re,en),e(en,sl),e(Re,al),e(Re,ys),e(ys,rl),e(Re,il),e(Re,ks),e(ks,ll),e(Re,dl),e(pt,cl),w(Kt,pt,null),g(o,Ur,_),g(o,$t,_),e($t,Xt),e(Xt,la),w(tn,la,null),e($t,pl),e($t,da),e(da,hl),g(o,Br,_),g(o,ht,_),w(on,ht,null),e(ht,ul),e(ht,nn),e(nn,ml),e(nn,sn),e(sn,fl),e(nn,gl),e(ht,_l),e(ht,et),w(an,et,null),e(et,Tl),e(et,Pt),e(Pt,vl),e(Pt,bs),e(bs,yl),e(Pt,kl),e(Pt,ca),e(ca,bl),e(Pt,wl),e(et,$l),w(Yt,et,null),e(et,Pl),w(Zt,et,null),g(o,Qr,_),g(o,Ft,_),e(Ft,eo),e(eo,pa),w(rn,pa,null),e(Ft,Fl),e(Ft,ha),e(ha,jl),g(o,Hr,_),g(o,Ve,_),w(ln,Ve,null),e(Ve,Gl),e(Ve,ua),e(ua,xl),e(Ve,El),e(Ve,dn),e(dn,Jl),e(dn,cn),e(cn,Ml),e(dn,ql),e(Ve,Cl),e(Ve,tt),w(pn,tt,null),e(tt,zl),e(tt,jt),e(jt,Al),e(jt,ws),e(ws,Il),e(jt,Ll),e(jt,ma),e(ma,Nl),e(jt,Sl),e(tt,Dl),w(to,tt,null),e(tt,Ol),w(oo,tt,null),g(o,Rr,_),g(o,Gt,_),e(Gt,no),e(no,fa),w(hn,fa,null),e(Gt,Wl),e(Gt,ga),e(ga,Ul),g(o,Vr,_),g(o,Fe,_),w(un,Fe,null),e(Fe,Bl),e(Fe,_a),e(_a,Ql),e(Fe,Hl),e(Fe,$s),e($s,Ps),e(Ps,Rl),e($s,Vl),e(Fe,Kl),e(Fe,Ke),e(Ke,Xl),e(Ke,Ta),e(Ta,Yl),e(Ke,Zl),e(Ke,va),e(va,ed),e(Ke,td),e(Ke,ya),e(ya,od),e(Ke,nd),e(Ke,ka),e(ka,sd),e(Ke,ad),e(Fe,rd),e(Fe,mn),e(mn,id),e(mn,fn),e(fn,ld),e(mn,dd),e(Fe,cd),e(Fe,$e),w(gn,$e,null),e($e,pd),e($e,xt),e(xt,hd),e(xt,Fs),e(Fs,ud),e(xt,md),e(xt,ba),e(ba,fd),e(xt,gd),e($e,_d),w(so,$e,null),e($e,Td),w(ao,$e,null),e($e,vd),w(ro,$e,null),e($e,yd),w(io,$e,null),e($e,kd),w(lo,$e,null),g(o,Kr,_),g(o,Et,_),e(Et,co),e(co,wa),w(_n,wa,null),e(Et,bd),e(Et,$a),e($a,wd),g(o,Xr,_),g(o,Xe,_),w(Tn,Xe,null),e(Xe,$d),e(Xe,Jt),e(Jt,Pd),e(Jt,Pa),e(Pa,Fd),e(Jt,jd),e(Jt,Fa),e(Fa,Gd),e(Jt,xd),e(Xe,Ed),e(Xe,vn),e(vn,Jd),e(vn,yn),e(yn,Md),e(vn,qd),e(Xe,Cd),e(Xe,Se),w(kn,Se,null),e(Se,zd),e(Se,Mt),e(Mt,Ad),e(Mt,js),e(js,Id),e(Mt,Ld),e(Mt,ja),e(ja,Nd),e(Mt,Sd),e(Se,Dd),w(po,Se,null),e(Se,Od),w(ho,Se,null),e(Se,Wd),w(uo,Se,null),g(o,Yr,_),g(o,qt,_),e(qt,mo),e(mo,Ga),w(bn,Ga,null),e(qt,Ud),e(qt,xa),e(xa,Bd),g(o,Zr,_),g(o,je,_),w(wn,je,null),e(je,Qd),e(je,Ea),e(Ea,Hd),e(je,Rd),e(je,$n),e($n,Vd),e($n,Gs),e(Gs,Kd),e($n,Xd),e(je,Yd),e(je,Pn),e(Pn,Zd),e(Pn,Fn),e(Fn,ec),e(Pn,tc),e(je,oc),w(fo,je,null),e(je,nc),e(je,ot),w(jn,ot,null),e(ot,sc),e(ot,Ct),e(Ct,ac),e(Ct,xs),e(xs,rc),e(Ct,ic),e(Ct,Ja),e(Ja,lc),e(Ct,dc),e(ot,cc),w(go,ot,null),e(ot,pc),w(_o,ot,null),g(o,ei,_),g(o,zt,_),e(zt,To),e(To,Ma),w(Gn,Ma,null),e(zt,hc),e(zt,qa),e(qa,uc),g(o,ti,_),g(o,Ge,_),w(xn,Ge,null),e(Ge,mc),e(Ge,Ca),e(Ca,fc),e(Ge,gc),e(Ge,En),e(En,_c),e(En,Es),e(Es,Tc),e(En,vc),e(Ge,yc),e(Ge,Jn),e(Jn,kc),e(Jn,Mn),e(Mn,bc),e(Jn,wc),e(Ge,$c),w(vo,Ge,null),e(Ge,Pc),e(Ge,nt),w(qn,nt,null),e(nt,Fc),e(nt,At),e(At,jc),e(At,Js),e(Js,Gc),e(At,xc),e(At,za),e(za,Ec),e(At,Jc),e(nt,Mc),w(yo,nt,null),e(nt,qc),w(ko,nt,null),g(o,oi,_),g(o,It,_),e(It,bo),e(bo,Aa),w(Cn,Aa,null),e(It,Cc),e(It,Ia),e(Ia,zc),g(o,ni,_),g(o,se,_),w(zn,se,null),e(se,Ac),e(se,La),e(La,Ic),e(se,Lc),e(se,Ms),e(Ms,qs),e(qs,Nc),e(Ms,Sc),e(se,Dc),e(se,Ye),e(Ye,Oc),e(Ye,Na),e(Na,Wc),e(Ye,Uc),e(Ye,Sa),e(Sa,Bc),e(Ye,Qc),e(Ye,Da),e(Da,Hc),e(Ye,Rc),e(Ye,Oa),e(Oa,Vc),e(Ye,Kc),e(se,Xc),e(se,An),e(An,Yc),e(An,Cs),e(Cs,Zc),e(An,ep),e(se,tp),e(se,In),e(In,op),e(In,Ln),e(Ln,np),e(In,sp),e(se,ap),w(wo,se,null),e(se,rp),e(se,De),w(Nn,De,null),e(De,ip),e(De,Lt),e(Lt,lp),e(Lt,zs),e(zs,dp),e(Lt,cp),e(Lt,Wa),e(Wa,pp),e(Lt,hp),e(De,up),w($o,De,null),e(De,mp),w(Po,De,null),e(De,fp),w(Fo,De,null),g(o,si,_),g(o,Nt,_),e(Nt,jo),e(jo,Ua),w(Sn,Ua,null),e(Nt,gp),e(Nt,Ba),e(Ba,_p),g(o,ai,_),g(o,xe,_),w(Dn,xe,null),e(xe,Tp),e(xe,St),e(St,vp),e(St,Qa),e(Qa,yp),e(St,kp),e(St,Ha),e(Ha,bp),e(St,wp),e(xe,$p),e(xe,On),e(On,Pp),e(On,As),e(As,Fp),e(On,jp),e(xe,Gp),e(xe,Wn),e(Wn,xp),e(Wn,Un),e(Un,Ep),e(Wn,Jp),e(xe,Mp),w(Go,xe,null),e(xe,qp),e(xe,Oe),w(Bn,Oe,null),e(Oe,Cp),e(Oe,Dt),e(Dt,zp),e(Dt,Is),e(Is,Ap),e(Dt,Ip),e(Dt,Ra),e(Ra,Lp),e(Dt,Np),e(Oe,Sp),w(xo,Oe,null),e(Oe,Dp),w(Eo,Oe,null),e(Oe,Op),w(Jo,Oe,null),g(o,ri,_),g(o,Ot,_),e(Ot,Mo),e(Mo,Va),w(Qn,Va,null),e(Ot,Wp),e(Ot,Ka),e(Ka,Up),g(o,ii,_),g(o,be,_),w(Hn,be,null),e(be,Bp),e(be,Xa),e(Xa,Qp),e(be,Hp),e(be,Rn),e(Rn,Rp),e(Rn,Ls),e(Ls,Vp),e(Rn,Kp),e(be,Xp),e(be,Vn),e(Vn,Yp),e(Vn,Kn),e(Kn,Zp),e(Vn,eh),e(be,th),e(be,Ya),e(Ya,oh),e(be,nh),e(be,ut),e(ut,Za),e(Za,Xn),e(Xn,sh),e(ut,ah),e(ut,er),e(er,Yn),e(Yn,rh),e(ut,ih),e(ut,tr),e(tr,Zn),e(Zn,lh),e(ut,dh),e(ut,or),e(or,es),e(es,ch),e(be,ph),e(be,st),w(ts,st,null),e(st,hh),e(st,Wt),e(Wt,uh),e(Wt,nr),e(nr,mh),e(Wt,fh),e(Wt,sr),e(sr,gh),e(Wt,_h),e(st,Th),w(qo,st,null),e(st,vh),w(Co,st,null),g(o,li,_),g(o,Ut,_),e(Ut,zo),e(zo,ar),w(os,ar,null),e(Ut,yh),e(Ut,rr),e(rr,kh),g(o,di,_),g(o,we,_),w(ns,we,null),e(we,bh),e(we,ir),e(ir,wh),e(we,$h),e(we,ss),e(ss,Ph),e(ss,Ns),e(Ns,Fh),e(ss,jh),e(we,Gh),e(we,as),e(as,xh),e(as,rs),e(rs,Eh),e(as,Jh),e(we,Mh),e(we,lr),e(lr,qh),e(we,Ch),e(we,mt),e(mt,dr),e(dr,is),e(is,zh),e(mt,Ah),e(mt,cr),e(cr,ls),e(ls,Ih),e(mt,Lh),e(mt,pr),e(pr,ds),e(ds,Nh),e(mt,Sh),e(mt,hr),e(hr,cs),e(cs,Dh),e(we,Oh),e(we,at),w(ps,at,null),e(at,Wh),e(at,Bt),e(Bt,Uh),e(Bt,ur),e(ur,Bh),e(Bt,Qh),e(Bt,mr),e(mr,Hh),e(Bt,Rh),e(at,Vh),w(Ao,at,null),e(at,Kh),w(Io,at,null),ci=!0},p(o,[_]){const hs={};_&2&&(hs.$$scope={dirty:_,ctx:o}),Kt.$set(hs);const fr={};_&2&&(fr.$$scope={dirty:_,ctx:o}),Yt.$set(fr);const gr={};_&2&&(gr.$$scope={dirty:_,ctx:o}),Zt.$set(gr);const _r={};_&2&&(_r.$$scope={dirty:_,ctx:o}),to.$set(_r);const us={};_&2&&(us.$$scope={dirty:_,ctx:o}),oo.$set(us);const Tr={};_&2&&(Tr.$$scope={dirty:_,ctx:o}),so.$set(Tr);const vr={};_&2&&(vr.$$scope={dirty:_,ctx:o}),ao.$set(vr);const yr={};_&2&&(yr.$$scope={dirty:_,ctx:o}),ro.$set(yr);const Qt={};_&2&&(Qt.$$scope={dirty:_,ctx:o}),io.$set(Qt);const kr={};_&2&&(kr.$$scope={dirty:_,ctx:o}),lo.$set(kr);const br={};_&2&&(br.$$scope={dirty:_,ctx:o}),po.$set(br);const ms={};_&2&&(ms.$$scope={dirty:_,ctx:o}),ho.$set(ms);const wr={};_&2&&(wr.$$scope={dirty:_,ctx:o}),uo.$set(wr);const $r={};_&2&&($r.$$scope={dirty:_,ctx:o}),fo.$set($r);const Pr={};_&2&&(Pr.$$scope={dirty:_,ctx:o}),go.$set(Pr);const Ze={};_&2&&(Ze.$$scope={dirty:_,ctx:o}),_o.$set(Ze);const Fr={};_&2&&(Fr.$$scope={dirty:_,ctx:o}),vo.$set(Fr);const jr={};_&2&&(jr.$$scope={dirty:_,ctx:o}),yo.$set(jr);const Gr={};_&2&&(Gr.$$scope={dirty:_,ctx:o}),ko.$set(Gr);const xr={};_&2&&(xr.$$scope={dirty:_,ctx:o}),wo.$set(xr);const fs={};_&2&&(fs.$$scope={dirty:_,ctx:o}),$o.$set(fs);const Er={};_&2&&(Er.$$scope={dirty:_,ctx:o}),Po.$set(Er);const Ss={};_&2&&(Ss.$$scope={dirty:_,ctx:o}),Fo.$set(Ss);const Jr={};_&2&&(Jr.$$scope={dirty:_,ctx:o}),Go.$set(Jr);const Mr={};_&2&&(Mr.$$scope={dirty:_,ctx:o}),xo.$set(Mr);const ft={};_&2&&(ft.$$scope={dirty:_,ctx:o}),Eo.$set(ft);const qr={};_&2&&(qr.$$scope={dirty:_,ctx:o}),Jo.$set(qr);const Cr={};_&2&&(Cr.$$scope={dirty:_,ctx:o}),qo.$set(Cr);const zr={};_&2&&(zr.$$scope={dirty:_,ctx:o}),Co.$set(zr);const gs={};_&2&&(gs.$$scope={dirty:_,ctx:o}),Ao.$set(gs);const Ar={};_&2&&(Ar.$$scope={dirty:_,ctx:o}),Io.$set(Ar)},i(o){ci||($(l.$$.fragment,o),$(Z.$$.fragment,o),$(A.$$.fragment,o),$(Vo.$$.fragment,o),$(Ko.$$.fragment,o),$(Xo.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),$(Kt.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(an.$$.fragment,o),$(Yt.$$.fragment,o),$(Zt.$$.fragment,o),$(rn.$$.fragment,o),$(ln.$$.fragment,o),$(pn.$$.fragment,o),$(to.$$.fragment,o),$(oo.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),$(gn.$$.fragment,o),$(so.$$.fragment,o),$(ao.$$.fragment,o),$(ro.$$.fragment,o),$(io.$$.fragment,o),$(lo.$$.fragment,o),$(_n.$$.fragment,o),$(Tn.$$.fragment,o),$(kn.$$.fragment,o),$(po.$$.fragment,o),$(ho.$$.fragment,o),$(uo.$$.fragment,o),$(bn.$$.fragment,o),$(wn.$$.fragment,o),$(fo.$$.fragment,o),$(jn.$$.fragment,o),$(go.$$.fragment,o),$(_o.$$.fragment,o),$(Gn.$$.fragment,o),$(xn.$$.fragment,o),$(vo.$$.fragment,o),$(qn.$$.fragment,o),$(yo.$$.fragment,o),$(ko.$$.fragment,o),$(Cn.$$.fragment,o),$(zn.$$.fragment,o),$(wo.$$.fragment,o),$(Nn.$$.fragment,o),$($o.$$.fragment,o),$(Po.$$.fragment,o),$(Fo.$$.fragment,o),$(Sn.$$.fragment,o),$(Dn.$$.fragment,o),$(Go.$$.fragment,o),$(Bn.$$.fragment,o),$(xo.$$.fragment,o),$(Eo.$$.fragment,o),$(Jo.$$.fragment,o),$(Qn.$$.fragment,o),$(Hn.$$.fragment,o),$(ts.$$.fragment,o),$(qo.$$.fragment,o),$(Co.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(ps.$$.fragment,o),$(Ao.$$.fragment,o),$(Io.$$.fragment,o),ci=!0)},o(o){P(l.$$.fragment,o),P(Z.$$.fragment,o),P(A.$$.fragment,o),P(Vo.$$.fragment,o),P(Ko.$$.fragment,o),P(Xo.$$.fragment,o),P(Yo.$$.fragment,o),P(Zo.$$.fragment,o),P(Kt.$$.fragment,o),P(tn.$$.fragment,o),P(on.$$.fragment,o),P(an.$$.fragment,o),P(Yt.$$.fragment,o),P(Zt.$$.fragment,o),P(rn.$$.fragment,o),P(ln.$$.fragment,o),P(pn.$$.fragment,o),P(to.$$.fragment,o),P(oo.$$.fragment,o),P(hn.$$.fragment,o),P(un.$$.fragment,o),P(gn.$$.fragment,o),P(so.$$.fragment,o),P(ao.$$.fragment,o),P(ro.$$.fragment,o),P(io.$$.fragment,o),P(lo.$$.fragment,o),P(_n.$$.fragment,o),P(Tn.$$.fragment,o),P(kn.$$.fragment,o),P(po.$$.fragment,o),P(ho.$$.fragment,o),P(uo.$$.fragment,o),P(bn.$$.fragment,o),P(wn.$$.fragment,o),P(fo.$$.fragment,o),P(jn.$$.fragment,o),P(go.$$.fragment,o),P(_o.$$.fragment,o),P(Gn.$$.fragment,o),P(xn.$$.fragment,o),P(vo.$$.fragment,o),P(qn.$$.fragment,o),P(yo.$$.fragment,o),P(ko.$$.fragment,o),P(Cn.$$.fragment,o),P(zn.$$.fragment,o),P(wo.$$.fragment,o),P(Nn.$$.fragment,o),P($o.$$.fragment,o),P(Po.$$.fragment,o),P(Fo.$$.fragment,o),P(Sn.$$.fragment,o),P(Dn.$$.fragment,o),P(Go.$$.fragment,o),P(Bn.$$.fragment,o),P(xo.$$.fragment,o),P(Eo.$$.fragment,o),P(Jo.$$.fragment,o),P(Qn.$$.fragment,o),P(Hn.$$.fragment,o),P(ts.$$.fragment,o),P(qo.$$.fragment,o),P(Co.$$.fragment,o),P(os.$$.fragment,o),P(ns.$$.fragment,o),P(ps.$$.fragment,o),P(Ao.$$.fragment,o),P(Io.$$.fragment,o),ci=!1},d(o){t(d),o&&t(T),o&&t(c),F(l),o&&t(K),o&&t(E),F(Z),o&&t(re),o&&t(L),o&&t(ie),o&&t(Y),o&&t(le),o&&t(N),o&&t(de),o&&t(S),o&&t(Me),F(A,o),o&&t(B),o&&t(ce),o&&t(Ir),o&&t(bt),F(Vo),o&&t(Lr),o&&t(Rt),o&&t(Nr),F(Ko,o),o&&t(Sr),o&&t(Ts),o&&t(Dr),F(Xo,o),o&&t(Or),o&&t(wt),F(Yo),o&&t(Wr),o&&t(pt),F(Zo),F(Kt),o&&t(Ur),o&&t($t),F(tn),o&&t(Br),o&&t(ht),F(on),F(an),F(Yt),F(Zt),o&&t(Qr),o&&t(Ft),F(rn),o&&t(Hr),o&&t(Ve),F(ln),F(pn),F(to),F(oo),o&&t(Rr),o&&t(Gt),F(hn),o&&t(Vr),o&&t(Fe),F(un),F(gn),F(so),F(ao),F(ro),F(io),F(lo),o&&t(Kr),o&&t(Et),F(_n),o&&t(Xr),o&&t(Xe),F(Tn),F(kn),F(po),F(ho),F(uo),o&&t(Yr),o&&t(qt),F(bn),o&&t(Zr),o&&t(je),F(wn),F(fo),F(jn),F(go),F(_o),o&&t(ei),o&&t(zt),F(Gn),o&&t(ti),o&&t(Ge),F(xn),F(vo),F(qn),F(yo),F(ko),o&&t(oi),o&&t(It),F(Cn),o&&t(ni),o&&t(se),F(zn),F(wo),F(Nn),F($o),F(Po),F(Fo),o&&t(si),o&&t(Nt),F(Sn),o&&t(ai),o&&t(xe),F(Dn),F(Go),F(Bn),F(xo),F(Eo),F(Jo),o&&t(ri),o&&t(Ot),F(Qn),o&&t(ii),o&&t(be),F(Hn),F(ts),F(qo),F(Co),o&&t(li),o&&t(Ut),F(os),o&&t(di),o&&t(we),F(ns),F(ps),F(Ao),F(Io)}}}const Bf={local:"gptj",sections:[{local:"overview",sections:[{local:"generation",title:"Generation"}],title:"Overview"},{local:"transformers.GPTJConfig",title:"GPTJConfig"},{local:"transformers.GPTJModel",title:"GPTJModel"},{local:"transformers.GPTJForCausalLM",title:"GPTJForCausalLM"},{local:"transformers.GPTJForSequenceClassification",title:"GPTJForSequenceClassification"},{local:"transformers.GPTJForQuestionAnswering",title:"GPTJForQuestionAnswering"},{local:"transformers.TFGPTJModel",title:"TFGPTJModel"},{local:"transformers.TFGPTJForCausalLM",title:"TFGPTJForCausalLM"},{local:"transformers.TFGPTJForSequenceClassification",title:"TFGPTJForSequenceClassification"},{local:"transformers.TFGPTJForQuestionAnswering",title:"TFGPTJForQuestionAnswering"},{local:"transformers.FlaxGPTJModel",title:"FlaxGPTJModel"},{local:"transformers.FlaxGPTJForCausalLM",title:"FlaxGPTJForCausalLM"}],title:"GPT-J"};function Qf(j){return hf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zf extends lf{constructor(d){super();df(this,d,Qf,Uf,cf,{})}}export{Zf as default,Bf as metadata};
