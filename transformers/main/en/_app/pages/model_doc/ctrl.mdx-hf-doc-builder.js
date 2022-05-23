import{S as _c,i as Tc,s as vc,e as a,k as h,w as k,t as n,M as bc,c as r,d as t,m,a as i,x as y,h as s,b as f,G as e,g,y as C,q as w,o as $,B as L,v as kc,L as Ye}from"../../chunks/vendor-316217a5.js";import{T as wt}from"../../chunks/Tip-27e9fea0.js";import{D as Re}from"../../chunks/Docstring-1fe4a33a.js";import{C as Ze}from"../../chunks/CodeBlock-8418a95e.js";import{I as it}from"../../chunks/IconCopyLink-40460835.js";import{E as Qe}from"../../chunks/ExampleCodeBlock-32fc0037.js";function yc(M){let d,v,c,p,b;return p=new Ze({props:{code:`from transformers import CTRLModel, CTRLConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),v=n("Examples:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);v=s(u,"Examples:"),u.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,v),g(l,c,u),C(p,l,u),b=!0},p:Ye,i(l){b||(w(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Cc(M){let d,v,c,p,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);v=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var E=i(c);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,v),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function wc(M){let d,v,c,p,b;return p=new Ze({props:{code:`from transformers import CTRLTokenizer, CTRLModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1280</span>]`}}),{c(){d=a("p"),v=n("Example:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);v=s(u,"Example:"),u.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,v),g(l,c,u),C(p,l,u),b=!0},p:Ye,i(l){b||(w(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function $c(M){let d,v,c,p,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);v=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var E=i(c);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,v),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Lc(M){let d,v,c,p,b;return p=new Ze({props:{code:`import torch
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
[<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">246534</span>]`}}),{c(){d=a("p"),v=n("Example:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);v=s(u,"Example:"),u.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,v),g(l,c,u),C(p,l,u),b=!0},p:Ye,i(l){b||(w(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Rc(M){let d,v,c,p,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);v=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var E=i(c);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,v),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Mc(M){let d,v,c,p,b;return p=new Ze({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),v=n("Example of single-label classification:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);v=s(u,"Example of single-label classification:"),u.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,v),g(l,c,u),C(p,l,u),b=!0},p:Ye,i(l){b||(w(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Fc(M){let d,v;return d=new Ze({props:{code:`import torch

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
<span class="hljs-number">0.35</span>`}}),{c(){k(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){C(d,c,p),v=!0},p:Ye,i(c){v||(w(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){L(d,c)}}}function Ec(M){let d,v,c,p,b;return p=new Ze({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),v=n("Example of multi-label classification:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);v=s(u,"Example of multi-label classification:"),u.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,v),g(l,c,u),C(p,l,u),b=!0},p:Ye,i(l){b||(w(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function qc(M){let d,v;return d=new Ze({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){C(d,c,p),v=!0},p:Ye,i(c){v||(w(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){L(d,c)}}}function zc(M){let d,v,c,p,b,l,u,E,fe,Q,F,J,A,Y,ge,H,_e,ce,P,S,Z,oe,q,z,Te,U,pe,ne,V,he,se,x,ve,W,ae,be,B,I,ee,O,te,G,ke;return{c(){d=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),E=a("li"),fe=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=h(),F=a("p"),J=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),ge=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),_e=n("model(inputs)"),ce=n("."),P=h(),S=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=h(),q=a("ul"),z=a("li"),Te=n("a single Tensor with "),U=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),V=a("code"),he=n("model(inputs_ids)"),se=h(),x=a("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),ae=n("model([input_ids, attention_mask])"),be=n(" or "),B=a("code"),I=n("model([input_ids, attention_mask, token_type_ids])"),ee=h(),O=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(_){d=r(_,"P",{});var R=i(d);v=s(R,"TF 2.0 models accepts two formats as inputs:"),R.forEach(t),c=m(_),p=r(_,"UL",{});var re=i(p);b=r(re,"LI",{});var Se=i(b);l=s(Se,"having all inputs as keyword arguments (like PyTorch models), or"),Se.forEach(t),u=m(re),E=r(re,"LI",{});var me=i(E);fe=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),re.forEach(t),Q=m(_),F=r(_,"P",{});var N=i(F);J=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Me=i(A);Y=s(Me,"tf.keras.Model.fit"),Me.forEach(t),ge=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(N,"CODE",{});var Ie=i(H);_e=s(Ie,"model(inputs)"),Ie.forEach(t),ce=s(N,"."),N.forEach(t),P=m(_),S=r(_,"P",{});var Oe=i(S);Z=s(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),oe=m(_),q=r(_,"UL",{});var D=i(q);z=r(D,"LI",{});var j=i(z);Te=s(j,"a single Tensor with "),U=r(j,"CODE",{});var Ne=i(U);pe=s(Ne,"input_ids"),Ne.forEach(t),ne=s(j," only and nothing else: "),V=r(j,"CODE",{});var Fe=i(V);he=s(Fe,"model(inputs_ids)"),Fe.forEach(t),j.forEach(t),se=m(D),x=r(D,"LI",{});var K=i(x);ve=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(K,"CODE",{});var De=i(W);ae=s(De,"model([input_ids, attention_mask])"),De.forEach(t),be=s(K," or "),B=r(K,"CODE",{});var Ee=i(B);I=s(Ee,"model([input_ids, attention_mask, token_type_ids])"),Ee.forEach(t),K.forEach(t),ee=m(D),O=r(D,"LI",{});var ye=i(O);te=s(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(ye,"CODE",{});var Ae=i(G);ke=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),ye.forEach(t),D.forEach(t)},m(_,R){g(_,d,R),e(d,v),g(_,c,R),g(_,p,R),e(p,b),e(b,l),e(p,u),e(p,E),e(E,fe),g(_,Q,R),g(_,F,R),e(F,J),e(F,A),e(A,Y),e(F,ge),e(F,H),e(H,_e),e(F,ce),g(_,P,R),g(_,S,R),e(S,Z),g(_,oe,R),g(_,q,R),e(q,z),e(z,Te),e(z,U),e(U,pe),e(z,ne),e(z,V),e(V,he),e(q,se),e(q,x),e(x,ve),e(x,W),e(W,ae),e(x,be),e(x,B),e(B,I),e(q,ee),e(q,O),e(O,te),e(O,G),e(G,ke)},d(_){_&&t(d),_&&t(c),_&&t(p),_&&t(Q),_&&t(F),_&&t(P),_&&t(S),_&&t(oe),_&&t(q)}}}function xc(M){let d,v,c,p,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);v=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var E=i(c);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,v),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function jc(M){let d,v,c,p,b;return p=new Ze({props:{code:`from transformers import CTRLTokenizer, TFCTRLModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),v=n("Example:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);v=s(u,"Example:"),u.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,v),g(l,c,u),C(p,l,u),b=!0},p:Ye,i(l){b||(w(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Pc(M){let d,v,c,p,b,l,u,E,fe,Q,F,J,A,Y,ge,H,_e,ce,P,S,Z,oe,q,z,Te,U,pe,ne,V,he,se,x,ve,W,ae,be,B,I,ee,O,te,G,ke;return{c(){d=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),E=a("li"),fe=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=h(),F=a("p"),J=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),ge=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),_e=n("model(inputs)"),ce=n("."),P=h(),S=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=h(),q=a("ul"),z=a("li"),Te=n("a single Tensor with "),U=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),V=a("code"),he=n("model(inputs_ids)"),se=h(),x=a("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),ae=n("model([input_ids, attention_mask])"),be=n(" or "),B=a("code"),I=n("model([input_ids, attention_mask, token_type_ids])"),ee=h(),O=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(_){d=r(_,"P",{});var R=i(d);v=s(R,"TF 2.0 models accepts two formats as inputs:"),R.forEach(t),c=m(_),p=r(_,"UL",{});var re=i(p);b=r(re,"LI",{});var Se=i(b);l=s(Se,"having all inputs as keyword arguments (like PyTorch models), or"),Se.forEach(t),u=m(re),E=r(re,"LI",{});var me=i(E);fe=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),re.forEach(t),Q=m(_),F=r(_,"P",{});var N=i(F);J=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Me=i(A);Y=s(Me,"tf.keras.Model.fit"),Me.forEach(t),ge=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(N,"CODE",{});var Ie=i(H);_e=s(Ie,"model(inputs)"),Ie.forEach(t),ce=s(N,"."),N.forEach(t),P=m(_),S=r(_,"P",{});var Oe=i(S);Z=s(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),oe=m(_),q=r(_,"UL",{});var D=i(q);z=r(D,"LI",{});var j=i(z);Te=s(j,"a single Tensor with "),U=r(j,"CODE",{});var Ne=i(U);pe=s(Ne,"input_ids"),Ne.forEach(t),ne=s(j," only and nothing else: "),V=r(j,"CODE",{});var Fe=i(V);he=s(Fe,"model(inputs_ids)"),Fe.forEach(t),j.forEach(t),se=m(D),x=r(D,"LI",{});var K=i(x);ve=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(K,"CODE",{});var De=i(W);ae=s(De,"model([input_ids, attention_mask])"),De.forEach(t),be=s(K," or "),B=r(K,"CODE",{});var Ee=i(B);I=s(Ee,"model([input_ids, attention_mask, token_type_ids])"),Ee.forEach(t),K.forEach(t),ee=m(D),O=r(D,"LI",{});var ye=i(O);te=s(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(ye,"CODE",{});var Ae=i(G);ke=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),ye.forEach(t),D.forEach(t)},m(_,R){g(_,d,R),e(d,v),g(_,c,R),g(_,p,R),e(p,b),e(b,l),e(p,u),e(p,E),e(E,fe),g(_,Q,R),g(_,F,R),e(F,J),e(F,A),e(A,Y),e(F,ge),e(F,H),e(H,_e),e(F,ce),g(_,P,R),g(_,S,R),e(S,Z),g(_,oe,R),g(_,q,R),e(q,z),e(z,Te),e(z,U),e(U,pe),e(z,ne),e(z,V),e(V,he),e(q,se),e(q,x),e(x,ve),e(x,W),e(W,ae),e(x,be),e(x,B),e(B,I),e(q,ee),e(q,O),e(O,te),e(O,G),e(G,ke)},d(_){_&&t(d),_&&t(c),_&&t(p),_&&t(Q),_&&t(F),_&&t(P),_&&t(S),_&&t(oe),_&&t(q)}}}function Sc(M){let d,v,c,p,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);v=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var E=i(c);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,v),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Ic(M){let d,v,c,p,b;return p=new Ze({props:{code:`from transformers import CTRLTokenizer, TFCTRLLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),v=n("Example:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);v=s(u,"Example:"),u.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,v),g(l,c,u),C(p,l,u),b=!0},p:Ye,i(l){b||(w(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Oc(M){let d,v,c,p,b,l,u,E,fe,Q,F,J,A,Y,ge,H,_e,ce,P,S,Z,oe,q,z,Te,U,pe,ne,V,he,se,x,ve,W,ae,be,B,I,ee,O,te,G,ke;return{c(){d=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),E=a("li"),fe=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=h(),F=a("p"),J=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),ge=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),_e=n("model(inputs)"),ce=n("."),P=h(),S=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=h(),q=a("ul"),z=a("li"),Te=n("a single Tensor with "),U=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),V=a("code"),he=n("model(inputs_ids)"),se=h(),x=a("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),ae=n("model([input_ids, attention_mask])"),be=n(" or "),B=a("code"),I=n("model([input_ids, attention_mask, token_type_ids])"),ee=h(),O=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(_){d=r(_,"P",{});var R=i(d);v=s(R,"TF 2.0 models accepts two formats as inputs:"),R.forEach(t),c=m(_),p=r(_,"UL",{});var re=i(p);b=r(re,"LI",{});var Se=i(b);l=s(Se,"having all inputs as keyword arguments (like PyTorch models), or"),Se.forEach(t),u=m(re),E=r(re,"LI",{});var me=i(E);fe=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),re.forEach(t),Q=m(_),F=r(_,"P",{});var N=i(F);J=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Me=i(A);Y=s(Me,"tf.keras.Model.fit"),Me.forEach(t),ge=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(N,"CODE",{});var Ie=i(H);_e=s(Ie,"model(inputs)"),Ie.forEach(t),ce=s(N,"."),N.forEach(t),P=m(_),S=r(_,"P",{});var Oe=i(S);Z=s(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),oe=m(_),q=r(_,"UL",{});var D=i(q);z=r(D,"LI",{});var j=i(z);Te=s(j,"a single Tensor with "),U=r(j,"CODE",{});var Ne=i(U);pe=s(Ne,"input_ids"),Ne.forEach(t),ne=s(j," only and nothing else: "),V=r(j,"CODE",{});var Fe=i(V);he=s(Fe,"model(inputs_ids)"),Fe.forEach(t),j.forEach(t),se=m(D),x=r(D,"LI",{});var K=i(x);ve=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(K,"CODE",{});var De=i(W);ae=s(De,"model([input_ids, attention_mask])"),De.forEach(t),be=s(K," or "),B=r(K,"CODE",{});var Ee=i(B);I=s(Ee,"model([input_ids, attention_mask, token_type_ids])"),Ee.forEach(t),K.forEach(t),ee=m(D),O=r(D,"LI",{});var ye=i(O);te=s(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(ye,"CODE",{});var Ae=i(G);ke=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),ye.forEach(t),D.forEach(t)},m(_,R){g(_,d,R),e(d,v),g(_,c,R),g(_,p,R),e(p,b),e(b,l),e(p,u),e(p,E),e(E,fe),g(_,Q,R),g(_,F,R),e(F,J),e(F,A),e(A,Y),e(F,ge),e(F,H),e(H,_e),e(F,ce),g(_,P,R),g(_,S,R),e(S,Z),g(_,oe,R),g(_,q,R),e(q,z),e(z,Te),e(z,U),e(U,pe),e(z,ne),e(z,V),e(V,he),e(q,se),e(q,x),e(x,ve),e(x,W),e(W,ae),e(x,be),e(x,B),e(B,I),e(q,ee),e(q,O),e(O,te),e(O,G),e(G,ke)},d(_){_&&t(d),_&&t(c),_&&t(p),_&&t(Q),_&&t(F),_&&t(P),_&&t(S),_&&t(oe),_&&t(q)}}}function Nc(M){let d,v,c,p,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);v=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var E=i(c);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,v),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Dc(M){let d,v,c,p,b;return p=new Ze({props:{code:`from transformers import CTRLTokenizer, TFCTRLForSequenceClassification
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
`}}),{c(){d=a("p"),v=n("Example:"),c=h(),k(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);v=s(u,"Example:"),u.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,v),g(l,c,u),C(p,l,u),b=!0},p:Ye,i(l){b||(w(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Ac(M){let d,v;return d=new Ze({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){k(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){C(d,c,p),v=!0},p:Ye,i(c){v||(w(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){L(d,c)}}}function Hc(M){let d,v,c,p,b,l,u,E,fe,Q,F,J,A,Y,ge,H,_e,ce,P,S,Z,oe,q,z,Te,U,pe,ne,V,he,se,x,ve,W,ae,be,B,I,ee,O,te,G,ke,_,R,re,Se,me,N,Me,Ie,Oe,D,j,Ne,Fe,K,De,Ee,ye,Ae,xn,ga,_a,on,jn,Ta,va,qs,et,ba,ro,ka,ya,io,Ca,wa,zs,lt,$t,Pn,lo,$a,Sn,La,xs,xe,co,Ra,Xe,Ma,nn,Fa,Ea,sn,qa,za,po,xa,ja,Pa,dt,Sa,an,Ia,Oa,rn,Na,Da,Aa,Lt,js,ct,Rt,In,ho,Ha,On,Wa,Ps,je,mo,Ba,Nn,Ua,Va,uo,Ga,ln,Ka,Xa,Ja,dn,fo,Ss,pt,Mt,Dn,go,Qa,An,Ya,Is,Ce,_o,Za,Hn,er,tr,To,or,cn,nr,sr,ar,vo,rr,bo,ir,lr,dr,He,ko,cr,ht,pr,pn,hr,mr,Wn,ur,fr,gr,Ft,_r,Et,Os,mt,qt,Bn,yo,Tr,Un,vr,Ns,we,Co,br,Vn,kr,yr,wo,Cr,hn,wr,$r,Lr,$o,Rr,Lo,Mr,Fr,Er,We,Ro,qr,ut,zr,mn,xr,jr,Gn,Pr,Sr,Ir,zt,Or,xt,Ds,ft,jt,Kn,Mo,Nr,Xn,Dr,As,$e,Fo,Ar,Le,Hr,un,Wr,Br,Jn,Ur,Vr,Qn,Gr,Kr,Yn,Xr,Jr,Zn,Qr,Yr,Zr,Eo,ei,fn,ti,oi,ni,qo,si,zo,ai,ri,ii,ie,xo,li,gt,di,gn,ci,pi,es,hi,mi,ui,Pt,fi,St,gi,It,_i,Ot,Ti,Nt,Hs,_t,Dt,ts,jo,vi,os,bi,Ws,le,Po,ki,ns,yi,Ci,So,wi,_n,$i,Li,Ri,Io,Mi,Oo,Fi,Ei,qi,At,zi,Be,No,xi,Tt,ji,Tn,Pi,Si,ss,Ii,Oi,Ni,Ht,Di,Wt,Bs,vt,Bt,as,Do,Ai,rs,Hi,Us,de,Ao,Wi,is,Bi,Ui,Ho,Vi,vn,Gi,Ki,Xi,Wo,Ji,Bo,Qi,Yi,Zi,Ut,el,Ue,Uo,tl,bt,ol,bn,nl,sl,ls,al,rl,il,Vt,ll,Gt,Vs,kt,Kt,ds,Vo,dl,cs,cl,Gs,X,Go,pl,ps,hl,ml,kn,yn,ul,fl,gl,Pe,_l,hs,Tl,vl,ms,bl,kl,us,yl,Cl,fs,wl,$l,Ll,Ko,Rl,Cn,Ml,Fl,El,Xo,ql,Jo,zl,xl,jl,Xt,Pl,qe,Qo,Sl,yt,Il,wn,Ol,Nl,gs,Dl,Al,Hl,Jt,Wl,Qt,Bl,Yt,Ks;return l=new it({}),Y=new it({}),lo=new it({}),co=new Re({props:{name:"class transformers.CTRLConfig",anchor:"transformers.CTRLConfig",parameters:[{name:"vocab_size",val:" = 246534"},{name:"n_positions",val:" = 256"},{name:"n_embd",val:" = 1280"},{name:"dff",val:" = 8192"},{name:"n_layer",val:" = 48"},{name:"n_head",val:" = 16"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CTRLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 246534) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/configuration_ctrl.py#L26"}}),Lt=new Qe({props:{anchor:"transformers.CTRLConfig.example",$$slots:{default:[yc]},$$scope:{ctx:M}}}),ho=new it({}),mo=new Re({props:{name:"class transformers.CTRLTokenizer",anchor:"transformers.CTRLTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CTRLTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CTRLTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CTRLTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/tokenization_ctrl.py#L119"}}),fo=new Re({props:{name:"save_vocabulary",anchor:"transformers.CTRLTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/tokenization_ctrl.py#L227"}}),go=new it({}),_o=new Re({props:{name:"class transformers.CTRLModel",anchor:"transformers.CTRLModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L319"}}),ko=new Re({props:{name:"forward",anchor:"transformers.CTRLModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CTRLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ft=new wt({props:{$$slots:{default:[Cc]},$$scope:{ctx:M}}}),Et=new Qe({props:{anchor:"transformers.CTRLModel.forward.example",$$slots:{default:[wc]},$$scope:{ctx:M}}}),yo=new it({}),Co=new Re({props:{name:"class transformers.CTRLLMHeadModel",anchor:"transformers.CTRLLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L509"}}),Ro=new Re({props:{name:"forward",anchor:"transformers.CTRLLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),zt=new wt({props:{$$slots:{default:[$c]},$$scope:{ctx:M}}}),xt=new Qe({props:{anchor:"transformers.CTRLLMHeadModel.forward.example",$$slots:{default:[Lc]},$$scope:{ctx:M}}}),Mo=new it({}),Fo=new Re({props:{name:"class transformers.CTRLForSequenceClassification",anchor:"transformers.CTRLForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L647"}}),xo=new Re({props:{name:"forward",anchor:"transformers.CTRLForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Pt=new wt({props:{$$slots:{default:[Rc]},$$scope:{ctx:M}}}),St=new Qe({props:{anchor:"transformers.CTRLForSequenceClassification.forward.example",$$slots:{default:[Mc]},$$scope:{ctx:M}}}),It=new Qe({props:{anchor:"transformers.CTRLForSequenceClassification.forward.example-2",$$slots:{default:[Fc]},$$scope:{ctx:M}}}),Ot=new Qe({props:{anchor:"transformers.CTRLForSequenceClassification.forward.example-3",$$slots:{default:[Ec]},$$scope:{ctx:M}}}),Nt=new Qe({props:{anchor:"transformers.CTRLForSequenceClassification.forward.example-4",$$slots:{default:[qc]},$$scope:{ctx:M}}}),jo=new it({}),Po=new Re({props:{name:"class transformers.TFCTRLModel",anchor:"transformers.TFCTRLModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L516"}}),At=new wt({props:{$$slots:{default:[zc]},$$scope:{ctx:M}}}),No=new Re({props:{name:"call",anchor:"transformers.TFCTRLModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFCTRLModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L521",returnDescription:`
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
`}}),Ht=new wt({props:{$$slots:{default:[xc]},$$scope:{ctx:M}}}),Wt=new Qe({props:{anchor:"transformers.TFCTRLModel.call.example",$$slots:{default:[jc]},$$scope:{ctx:M}}}),Do=new it({}),Ao=new Re({props:{name:"class transformers.TFCTRLLMHeadModel",anchor:"transformers.TFCTRLLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L610"}}),Ut=new wt({props:{$$slots:{default:[Pc]},$$scope:{ctx:M}}}),Uo=new Re({props:{name:"call",anchor:"transformers.TFCTRLLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L631",returnDescription:`
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
`}}),Vt=new wt({props:{$$slots:{default:[Sc]},$$scope:{ctx:M}}}),Gt=new Qe({props:{anchor:"transformers.TFCTRLLMHeadModel.call.example",$$slots:{default:[Ic]},$$scope:{ctx:M}}}),Vo=new it({}),Go=new Re({props:{name:"class transformers.TFCTRLForSequenceClassification",anchor:"transformers.TFCTRLForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L727"}}),Xt=new wt({props:{$$slots:{default:[Oc]},$$scope:{ctx:M}}}),Qo=new Re({props:{name:"call",anchor:"transformers.TFCTRLForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L742",returnDescription:`
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
`}}),Jt=new wt({props:{$$slots:{default:[Nc]},$$scope:{ctx:M}}}),Qt=new Qe({props:{anchor:"transformers.TFCTRLForSequenceClassification.call.example",$$slots:{default:[Dc]},$$scope:{ctx:M}}}),Yt=new Qe({props:{anchor:"transformers.TFCTRLForSequenceClassification.call.example-2",$$slots:{default:[Ac]},$$scope:{ctx:M}}}),{c(){d=a("meta"),v=h(),c=a("h1"),p=a("a"),b=a("span"),k(l.$$.fragment),u=h(),E=a("span"),fe=n("CTRL"),Q=h(),F=a("h2"),J=a("a"),A=a("span"),k(Y.$$.fragment),ge=h(),H=a("span"),_e=n("Overview"),ce=h(),P=a("p"),S=n("CTRL model was proposed in "),Z=a("a"),oe=n("CTRL: A Conditional Transformer Language Model for Controllable Generation"),q=n(" by Nitish Shirish Keskar"),z=a("em"),Te=n(", Bryan McCann"),U=n(`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),pe=h(),ne=a("p"),V=n("The abstract from the paper is the following:"),he=h(),se=a("p"),x=a("em"),ve=n(`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),W=h(),ae=a("p"),be=n("Tips:"),B=h(),I=a("ul"),ee=a("li"),O=n(`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),te=a("a"),G=n("original implementation"),ke=n(` for
more information.`),_=h(),R=a("li"),re=n(`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Se=h(),me=a("li"),N=n(`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),Me=a("em"),Ie=n("run_generation.py"),Oe=n(" example script."),D=h(),j=a("li"),Ne=n("The PyTorch models can take the "),Fe=a("code"),K=n("past_key_values"),De=n(` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),Ee=a("code"),ye=n("past"),Ae=n(" as input. Using the "),xn=a("code"),ga=n("past_key_values"),_a=n(` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),on=a("a"),jn=a("code"),Ta=n("forward"),va=n(`
method for more information on the usage of this argument.`),qs=h(),et=a("p"),ba=n("This model was contributed by "),ro=a("a"),ka=n("keskarnitishr"),ya=n(`. The original code can be found
`),io=a("a"),Ca=n("here"),wa=n("."),zs=h(),lt=a("h2"),$t=a("a"),Pn=a("span"),k(lo.$$.fragment),$a=h(),Sn=a("span"),La=n("CTRLConfig"),xs=h(),xe=a("div"),k(co.$$.fragment),Ra=h(),Xe=a("p"),Ma=n("This is the configuration class to store the configuration of a "),nn=a("a"),Fa=n("CTRLModel"),Ea=n(" or a "),sn=a("a"),qa=n("TFCTRLModel"),za=n(`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),po=a("a"),xa=n("ctrl"),ja=n(" architecture from SalesForce."),Pa=h(),dt=a("p"),Sa=n("Configuration objects inherit from "),an=a("a"),Ia=n("PretrainedConfig"),Oa=n(` and can be used to control the model outputs. Read the
documentation from `),rn=a("a"),Na=n("PretrainedConfig"),Da=n(" for more information."),Aa=h(),k(Lt.$$.fragment),js=h(),ct=a("h2"),Rt=a("a"),In=a("span"),k(ho.$$.fragment),Ha=h(),On=a("span"),Wa=n("CTRLTokenizer"),Ps=h(),je=a("div"),k(mo.$$.fragment),Ba=h(),Nn=a("p"),Ua=n("Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Va=h(),uo=a("p"),Ga=n("This tokenizer inherits from "),ln=a("a"),Ka=n("PreTrainedTokenizer"),Xa=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ja=h(),dn=a("div"),k(fo.$$.fragment),Ss=h(),pt=a("h2"),Mt=a("a"),Dn=a("span"),k(go.$$.fragment),Qa=h(),An=a("span"),Ya=n("CTRLModel"),Is=h(),Ce=a("div"),k(_o.$$.fragment),Za=h(),Hn=a("p"),er=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),tr=h(),To=a("p"),or=n("This model inherits from "),cn=a("a"),nr=n("PreTrainedModel"),sr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ar=h(),vo=a("p"),rr=n("This model is also a PyTorch "),bo=a("a"),ir=n("torch.nn.Module"),lr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dr=h(),He=a("div"),k(ko.$$.fragment),cr=h(),ht=a("p"),pr=n("The "),pn=a("a"),hr=n("CTRLModel"),mr=n(" forward method, overrides the "),Wn=a("code"),ur=n("__call__"),fr=n(" special method."),gr=h(),k(Ft.$$.fragment),_r=h(),k(Et.$$.fragment),Os=h(),mt=a("h2"),qt=a("a"),Bn=a("span"),k(yo.$$.fragment),Tr=h(),Un=a("span"),vr=n("CTRLLMHeadModel"),Ns=h(),we=a("div"),k(Co.$$.fragment),br=h(),Vn=a("p"),kr=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),yr=h(),wo=a("p"),Cr=n("This model inherits from "),hn=a("a"),wr=n("PreTrainedModel"),$r=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lr=h(),$o=a("p"),Rr=n("This model is also a PyTorch "),Lo=a("a"),Mr=n("torch.nn.Module"),Fr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Er=h(),We=a("div"),k(Ro.$$.fragment),qr=h(),ut=a("p"),zr=n("The "),mn=a("a"),xr=n("CTRLLMHeadModel"),jr=n(" forward method, overrides the "),Gn=a("code"),Pr=n("__call__"),Sr=n(" special method."),Ir=h(),k(zt.$$.fragment),Or=h(),k(xt.$$.fragment),Ds=h(),ft=a("h2"),jt=a("a"),Kn=a("span"),k(Mo.$$.fragment),Nr=h(),Xn=a("span"),Dr=n("CTRLForSequenceClassification"),As=h(),$e=a("div"),k(Fo.$$.fragment),Ar=h(),Le=a("p"),Hr=n(`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),un=a("a"),Wr=n("CTRLForSequenceClassification"),Br=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Jn=a("code"),Ur=n("pad_token_id"),Vr=n(` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Qn=a("code"),Gr=n("pad_token_id"),Kr=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Yn=a("code"),Xr=n("inputs_embeds"),Jr=n(" are passed instead of "),Zn=a("code"),Qr=n("input_ids"),Yr=n(`, it does the same (take the last
value in each row of the batch).`),Zr=h(),Eo=a("p"),ei=n("This model inherits from "),fn=a("a"),ti=n("PreTrainedModel"),oi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni=h(),qo=a("p"),si=n("This model is also a PyTorch "),zo=a("a"),ai=n("torch.nn.Module"),ri=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ii=h(),ie=a("div"),k(xo.$$.fragment),li=h(),gt=a("p"),di=n("The "),gn=a("a"),ci=n("CTRLForSequenceClassification"),pi=n(" forward method, overrides the "),es=a("code"),hi=n("__call__"),mi=n(" special method."),ui=h(),k(Pt.$$.fragment),fi=h(),k(St.$$.fragment),gi=h(),k(It.$$.fragment),_i=h(),k(Ot.$$.fragment),Ti=h(),k(Nt.$$.fragment),Hs=h(),_t=a("h2"),Dt=a("a"),ts=a("span"),k(jo.$$.fragment),vi=h(),os=a("span"),bi=n("TFCTRLModel"),Ws=h(),le=a("div"),k(Po.$$.fragment),ki=h(),ns=a("p"),yi=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Ci=h(),So=a("p"),wi=n("This model inherits from "),_n=a("a"),$i=n("TFPreTrainedModel"),Li=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ri=h(),Io=a("p"),Mi=n("This model is also a "),Oo=a("a"),Fi=n("tf.keras.Model"),Ei=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qi=h(),k(At.$$.fragment),zi=h(),Be=a("div"),k(No.$$.fragment),xi=h(),Tt=a("p"),ji=n("The "),Tn=a("a"),Pi=n("TFCTRLModel"),Si=n(" forward method, overrides the "),ss=a("code"),Ii=n("__call__"),Oi=n(" special method."),Ni=h(),k(Ht.$$.fragment),Di=h(),k(Wt.$$.fragment),Bs=h(),vt=a("h2"),Bt=a("a"),as=a("span"),k(Do.$$.fragment),Ai=h(),rs=a("span"),Hi=n("TFCTRLLMHeadModel"),Us=h(),de=a("div"),k(Ao.$$.fragment),Wi=h(),is=a("p"),Bi=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ui=h(),Ho=a("p"),Vi=n("This model inherits from "),vn=a("a"),Gi=n("TFPreTrainedModel"),Ki=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xi=h(),Wo=a("p"),Ji=n("This model is also a "),Bo=a("a"),Qi=n("tf.keras.Model"),Yi=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zi=h(),k(Ut.$$.fragment),el=h(),Ue=a("div"),k(Uo.$$.fragment),tl=h(),bt=a("p"),ol=n("The "),bn=a("a"),nl=n("TFCTRLLMHeadModel"),sl=n(" forward method, overrides the "),ls=a("code"),al=n("__call__"),rl=n(" special method."),il=h(),k(Vt.$$.fragment),ll=h(),k(Gt.$$.fragment),Vs=h(),kt=a("h2"),Kt=a("a"),ds=a("span"),k(Vo.$$.fragment),dl=h(),cs=a("span"),cl=n("TFCTRLForSequenceClassification"),Gs=h(),X=a("div"),k(Go.$$.fragment),pl=h(),ps=a("p"),hl=n("The CTRL Model transformer with a sequence classification head on top (linear layer)."),ml=h(),kn=a("p"),yn=a("a"),ul=n("TFCTRLForSequenceClassification"),fl=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),gl=h(),Pe=a("p"),_l=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),hs=a("code"),Tl=n("pad_token_id"),vl=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),ms=a("code"),bl=n("pad_token_id"),kl=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),us=a("code"),yl=n("inputs_embeds"),Cl=n(" are passed instead of "),fs=a("code"),wl=n("input_ids"),$l=n(`, it does the same (take the last value in
each row of the batch).`),Ll=h(),Ko=a("p"),Rl=n("This model inherits from "),Cn=a("a"),Ml=n("TFPreTrainedModel"),Fl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),El=h(),Xo=a("p"),ql=n("This model is also a "),Jo=a("a"),zl=n("tf.keras.Model"),xl=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jl=h(),k(Xt.$$.fragment),Pl=h(),qe=a("div"),k(Qo.$$.fragment),Sl=h(),yt=a("p"),Il=n("The "),wn=a("a"),Ol=n("TFCTRLForSequenceClassification"),Nl=n(" forward method, overrides the "),gs=a("code"),Dl=n("__call__"),Al=n(" special method."),Hl=h(),k(Jt.$$.fragment),Wl=h(),k(Qt.$$.fragment),Bl=h(),k(Yt.$$.fragment),this.h()},l(o){const T=bc('[data-svelte="svelte-1phssyn"]',document.head);d=r(T,"META",{name:!0,content:!0}),T.forEach(t),v=m(o),c=r(o,"H1",{class:!0});var Yo=i(c);p=r(Yo,"A",{id:!0,class:!0,href:!0});var _s=i(p);b=r(_s,"SPAN",{});var Ts=i(b);y(l.$$.fragment,Ts),Ts.forEach(t),_s.forEach(t),u=m(Yo),E=r(Yo,"SPAN",{});var vs=i(E);fe=s(vs,"CTRL"),vs.forEach(t),Yo.forEach(t),Q=m(o),F=r(o,"H2",{class:!0});var Zo=i(F);J=r(Zo,"A",{id:!0,class:!0,href:!0});var bs=i(J);A=r(bs,"SPAN",{});var ks=i(A);y(Y.$$.fragment,ks),ks.forEach(t),bs.forEach(t),ge=m(Zo),H=r(Zo,"SPAN",{});var ys=i(H);_e=s(ys,"Overview"),ys.forEach(t),Zo.forEach(t),ce=m(o),P=r(o,"P",{});var Ct=i(P);S=s(Ct,"CTRL model was proposed in "),Z=r(Ct,"A",{href:!0,rel:!0});var Cs=i(Z);oe=s(Cs,"CTRL: A Conditional Transformer Language Model for Controllable Generation"),Cs.forEach(t),q=s(Ct," by Nitish Shirish Keskar"),z=r(Ct,"EM",{});var ws=i(z);Te=s(ws,", Bryan McCann"),ws.forEach(t),U=s(Ct,`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),Ct.forEach(t),pe=m(o),ne=r(o,"P",{});var $s=i(ne);V=s($s,"The abstract from the paper is the following:"),$s.forEach(t),he=m(o),se=r(o,"P",{});var Ls=i(se);x=r(Ls,"EM",{});var Rs=i(x);ve=s(Rs,`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),Rs.forEach(t),Ls.forEach(t),W=m(o),ae=r(o,"P",{});var Ms=i(ae);be=s(Ms,"Tips:"),Ms.forEach(t),B=m(o),I=r(o,"UL",{});var Je=i(I);ee=r(Je,"LI",{});var en=i(ee);O=s(en,`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),te=r(en,"A",{href:!0,rel:!0});var Fs=i(te);G=s(Fs,"original implementation"),Fs.forEach(t),ke=s(en,` for
more information.`),en.forEach(t),_=m(Je),R=r(Je,"LI",{});var Es=i(R);re=s(Es,`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Es.forEach(t),Se=m(Je),me=r(Je,"LI",{});var tn=i(me);N=s(tn,`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),Me=r(tn,"EM",{});var Vl=i(Me);Ie=s(Vl,"run_generation.py"),Vl.forEach(t),Oe=s(tn," example script."),tn.forEach(t),D=m(Je),j=r(Je,"LI",{});var tt=i(j);Ne=s(tt,"The PyTorch models can take the "),Fe=r(tt,"CODE",{});var Gl=i(Fe);K=s(Gl,"past_key_values"),Gl.forEach(t),De=s(tt,` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),Ee=r(tt,"CODE",{});var Kl=i(Ee);ye=s(Kl,"past"),Kl.forEach(t),Ae=s(tt," as input. Using the "),xn=r(tt,"CODE",{});var Xl=i(xn);ga=s(Xl,"past_key_values"),Xl.forEach(t),_a=s(tt,` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),on=r(tt,"A",{href:!0});var Jl=i(on);jn=r(Jl,"CODE",{});var Ql=i(jn);Ta=s(Ql,"forward"),Ql.forEach(t),Jl.forEach(t),va=s(tt,`
method for more information on the usage of this argument.`),tt.forEach(t),Je.forEach(t),qs=m(o),et=r(o,"P",{});var $n=i(et);ba=s($n,"This model was contributed by "),ro=r($n,"A",{href:!0,rel:!0});var Yl=i(ro);ka=s(Yl,"keskarnitishr"),Yl.forEach(t),ya=s($n,`. The original code can be found
`),io=r($n,"A",{href:!0,rel:!0});var Zl=i(io);Ca=s(Zl,"here"),Zl.forEach(t),wa=s($n,"."),$n.forEach(t),zs=m(o),lt=r(o,"H2",{class:!0});var Xs=i(lt);$t=r(Xs,"A",{id:!0,class:!0,href:!0});var ed=i($t);Pn=r(ed,"SPAN",{});var td=i(Pn);y(lo.$$.fragment,td),td.forEach(t),ed.forEach(t),$a=m(Xs),Sn=r(Xs,"SPAN",{});var od=i(Sn);La=s(od,"CTRLConfig"),od.forEach(t),Xs.forEach(t),xs=m(o),xe=r(o,"DIV",{class:!0});var Zt=i(xe);y(co.$$.fragment,Zt),Ra=m(Zt),Xe=r(Zt,"P",{});var eo=i(Xe);Ma=s(eo,"This is the configuration class to store the configuration of a "),nn=r(eo,"A",{href:!0});var nd=i(nn);Fa=s(nd,"CTRLModel"),nd.forEach(t),Ea=s(eo," or a "),sn=r(eo,"A",{href:!0});var sd=i(sn);qa=s(sd,"TFCTRLModel"),sd.forEach(t),za=s(eo,`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),po=r(eo,"A",{href:!0,rel:!0});var ad=i(po);xa=s(ad,"ctrl"),ad.forEach(t),ja=s(eo," architecture from SalesForce."),eo.forEach(t),Pa=m(Zt),dt=r(Zt,"P",{});var Ln=i(dt);Sa=s(Ln,"Configuration objects inherit from "),an=r(Ln,"A",{href:!0});var rd=i(an);Ia=s(rd,"PretrainedConfig"),rd.forEach(t),Oa=s(Ln,` and can be used to control the model outputs. Read the
documentation from `),rn=r(Ln,"A",{href:!0});var id=i(rn);Na=s(id,"PretrainedConfig"),id.forEach(t),Da=s(Ln," for more information."),Ln.forEach(t),Aa=m(Zt),y(Lt.$$.fragment,Zt),Zt.forEach(t),js=m(o),ct=r(o,"H2",{class:!0});var Js=i(ct);Rt=r(Js,"A",{id:!0,class:!0,href:!0});var ld=i(Rt);In=r(ld,"SPAN",{});var dd=i(In);y(ho.$$.fragment,dd),dd.forEach(t),ld.forEach(t),Ha=m(Js),On=r(Js,"SPAN",{});var cd=i(On);Wa=s(cd,"CTRLTokenizer"),cd.forEach(t),Js.forEach(t),Ps=m(o),je=r(o,"DIV",{class:!0});var to=i(je);y(mo.$$.fragment,to),Ba=m(to),Nn=r(to,"P",{});var pd=i(Nn);Ua=s(pd,"Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),pd.forEach(t),Va=m(to),uo=r(to,"P",{});var Qs=i(uo);Ga=s(Qs,"This tokenizer inherits from "),ln=r(Qs,"A",{href:!0});var hd=i(ln);Ka=s(hd,"PreTrainedTokenizer"),hd.forEach(t),Xa=s(Qs,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Qs.forEach(t),Ja=m(to),dn=r(to,"DIV",{class:!0});var md=i(dn);y(fo.$$.fragment,md),md.forEach(t),to.forEach(t),Ss=m(o),pt=r(o,"H2",{class:!0});var Ys=i(pt);Mt=r(Ys,"A",{id:!0,class:!0,href:!0});var ud=i(Mt);Dn=r(ud,"SPAN",{});var fd=i(Dn);y(go.$$.fragment,fd),fd.forEach(t),ud.forEach(t),Qa=m(Ys),An=r(Ys,"SPAN",{});var gd=i(An);Ya=s(gd,"CTRLModel"),gd.forEach(t),Ys.forEach(t),Is=m(o),Ce=r(o,"DIV",{class:!0});var ot=i(Ce);y(_o.$$.fragment,ot),Za=m(ot),Hn=r(ot,"P",{});var _d=i(Hn);er=s(_d,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),_d.forEach(t),tr=m(ot),To=r(ot,"P",{});var Zs=i(To);or=s(Zs,"This model inherits from "),cn=r(Zs,"A",{href:!0});var Td=i(cn);nr=s(Td,"PreTrainedModel"),Td.forEach(t),sr=s(Zs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zs.forEach(t),ar=m(ot),vo=r(ot,"P",{});var ea=i(vo);rr=s(ea,"This model is also a PyTorch "),bo=r(ea,"A",{href:!0,rel:!0});var vd=i(bo);ir=s(vd,"torch.nn.Module"),vd.forEach(t),lr=s(ea,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ea.forEach(t),dr=m(ot),He=r(ot,"DIV",{class:!0});var oo=i(He);y(ko.$$.fragment,oo),cr=m(oo),ht=r(oo,"P",{});var Rn=i(ht);pr=s(Rn,"The "),pn=r(Rn,"A",{href:!0});var bd=i(pn);hr=s(bd,"CTRLModel"),bd.forEach(t),mr=s(Rn," forward method, overrides the "),Wn=r(Rn,"CODE",{});var kd=i(Wn);ur=s(kd,"__call__"),kd.forEach(t),fr=s(Rn," special method."),Rn.forEach(t),gr=m(oo),y(Ft.$$.fragment,oo),_r=m(oo),y(Et.$$.fragment,oo),oo.forEach(t),ot.forEach(t),Os=m(o),mt=r(o,"H2",{class:!0});var ta=i(mt);qt=r(ta,"A",{id:!0,class:!0,href:!0});var yd=i(qt);Bn=r(yd,"SPAN",{});var Cd=i(Bn);y(yo.$$.fragment,Cd),Cd.forEach(t),yd.forEach(t),Tr=m(ta),Un=r(ta,"SPAN",{});var wd=i(Un);vr=s(wd,"CTRLLMHeadModel"),wd.forEach(t),ta.forEach(t),Ns=m(o),we=r(o,"DIV",{class:!0});var nt=i(we);y(Co.$$.fragment,nt),br=m(nt),Vn=r(nt,"P",{});var $d=i(Vn);kr=s($d,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),$d.forEach(t),yr=m(nt),wo=r(nt,"P",{});var oa=i(wo);Cr=s(oa,"This model inherits from "),hn=r(oa,"A",{href:!0});var Ld=i(hn);wr=s(Ld,"PreTrainedModel"),Ld.forEach(t),$r=s(oa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oa.forEach(t),Lr=m(nt),$o=r(nt,"P",{});var na=i($o);Rr=s(na,"This model is also a PyTorch "),Lo=r(na,"A",{href:!0,rel:!0});var Rd=i(Lo);Mr=s(Rd,"torch.nn.Module"),Rd.forEach(t),Fr=s(na,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),na.forEach(t),Er=m(nt),We=r(nt,"DIV",{class:!0});var no=i(We);y(Ro.$$.fragment,no),qr=m(no),ut=r(no,"P",{});var Mn=i(ut);zr=s(Mn,"The "),mn=r(Mn,"A",{href:!0});var Md=i(mn);xr=s(Md,"CTRLLMHeadModel"),Md.forEach(t),jr=s(Mn," forward method, overrides the "),Gn=r(Mn,"CODE",{});var Fd=i(Gn);Pr=s(Fd,"__call__"),Fd.forEach(t),Sr=s(Mn," special method."),Mn.forEach(t),Ir=m(no),y(zt.$$.fragment,no),Or=m(no),y(xt.$$.fragment,no),no.forEach(t),nt.forEach(t),Ds=m(o),ft=r(o,"H2",{class:!0});var sa=i(ft);jt=r(sa,"A",{id:!0,class:!0,href:!0});var Ed=i(jt);Kn=r(Ed,"SPAN",{});var qd=i(Kn);y(Mo.$$.fragment,qd),qd.forEach(t),Ed.forEach(t),Nr=m(sa),Xn=r(sa,"SPAN",{});var zd=i(Xn);Dr=s(zd,"CTRLForSequenceClassification"),zd.forEach(t),sa.forEach(t),As=m(o),$e=r(o,"DIV",{class:!0});var st=i($e);y(Fo.$$.fragment,st),Ar=m(st),Le=r(st,"P",{});var Ve=i(Le);Hr=s(Ve,`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),un=r(Ve,"A",{href:!0});var xd=i(un);Wr=s(xd,"CTRLForSequenceClassification"),xd.forEach(t),Br=s(Ve,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Jn=r(Ve,"CODE",{});var jd=i(Jn);Ur=s(jd,"pad_token_id"),jd.forEach(t),Vr=s(Ve,` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Qn=r(Ve,"CODE",{});var Pd=i(Qn);Gr=s(Pd,"pad_token_id"),Pd.forEach(t),Kr=s(Ve,` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Yn=r(Ve,"CODE",{});var Sd=i(Yn);Xr=s(Sd,"inputs_embeds"),Sd.forEach(t),Jr=s(Ve," are passed instead of "),Zn=r(Ve,"CODE",{});var Id=i(Zn);Qr=s(Id,"input_ids"),Id.forEach(t),Yr=s(Ve,`, it does the same (take the last
value in each row of the batch).`),Ve.forEach(t),Zr=m(st),Eo=r(st,"P",{});var aa=i(Eo);ei=s(aa,"This model inherits from "),fn=r(aa,"A",{href:!0});var Od=i(fn);ti=s(Od,"PreTrainedModel"),Od.forEach(t),oi=s(aa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aa.forEach(t),ni=m(st),qo=r(st,"P",{});var ra=i(qo);si=s(ra,"This model is also a PyTorch "),zo=r(ra,"A",{href:!0,rel:!0});var Nd=i(zo);ai=s(Nd,"torch.nn.Module"),Nd.forEach(t),ri=s(ra,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ra.forEach(t),ii=m(st),ie=r(st,"DIV",{class:!0});var ze=i(ie);y(xo.$$.fragment,ze),li=m(ze),gt=r(ze,"P",{});var Fn=i(gt);di=s(Fn,"The "),gn=r(Fn,"A",{href:!0});var Dd=i(gn);ci=s(Dd,"CTRLForSequenceClassification"),Dd.forEach(t),pi=s(Fn," forward method, overrides the "),es=r(Fn,"CODE",{});var Ad=i(es);hi=s(Ad,"__call__"),Ad.forEach(t),mi=s(Fn," special method."),Fn.forEach(t),ui=m(ze),y(Pt.$$.fragment,ze),fi=m(ze),y(St.$$.fragment,ze),gi=m(ze),y(It.$$.fragment,ze),_i=m(ze),y(Ot.$$.fragment,ze),Ti=m(ze),y(Nt.$$.fragment,ze),ze.forEach(t),st.forEach(t),Hs=m(o),_t=r(o,"H2",{class:!0});var ia=i(_t);Dt=r(ia,"A",{id:!0,class:!0,href:!0});var Hd=i(Dt);ts=r(Hd,"SPAN",{});var Wd=i(ts);y(jo.$$.fragment,Wd),Wd.forEach(t),Hd.forEach(t),vi=m(ia),os=r(ia,"SPAN",{});var Bd=i(os);bi=s(Bd,"TFCTRLModel"),Bd.forEach(t),ia.forEach(t),Ws=m(o),le=r(o,"DIV",{class:!0});var Ge=i(le);y(Po.$$.fragment,Ge),ki=m(Ge),ns=r(Ge,"P",{});var Ud=i(ns);yi=s(Ud,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Ud.forEach(t),Ci=m(Ge),So=r(Ge,"P",{});var la=i(So);wi=s(la,"This model inherits from "),_n=r(la,"A",{href:!0});var Vd=i(_n);$i=s(Vd,"TFPreTrainedModel"),Vd.forEach(t),Li=s(la,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),la.forEach(t),Ri=m(Ge),Io=r(Ge,"P",{});var da=i(Io);Mi=s(da,"This model is also a "),Oo=r(da,"A",{href:!0,rel:!0});var Gd=i(Oo);Fi=s(Gd,"tf.keras.Model"),Gd.forEach(t),Ei=s(da,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),da.forEach(t),qi=m(Ge),y(At.$$.fragment,Ge),zi=m(Ge),Be=r(Ge,"DIV",{class:!0});var so=i(Be);y(No.$$.fragment,so),xi=m(so),Tt=r(so,"P",{});var En=i(Tt);ji=s(En,"The "),Tn=r(En,"A",{href:!0});var Kd=i(Tn);Pi=s(Kd,"TFCTRLModel"),Kd.forEach(t),Si=s(En," forward method, overrides the "),ss=r(En,"CODE",{});var Xd=i(ss);Ii=s(Xd,"__call__"),Xd.forEach(t),Oi=s(En," special method."),En.forEach(t),Ni=m(so),y(Ht.$$.fragment,so),Di=m(so),y(Wt.$$.fragment,so),so.forEach(t),Ge.forEach(t),Bs=m(o),vt=r(o,"H2",{class:!0});var ca=i(vt);Bt=r(ca,"A",{id:!0,class:!0,href:!0});var Jd=i(Bt);as=r(Jd,"SPAN",{});var Qd=i(as);y(Do.$$.fragment,Qd),Qd.forEach(t),Jd.forEach(t),Ai=m(ca),rs=r(ca,"SPAN",{});var Yd=i(rs);Hi=s(Yd,"TFCTRLLMHeadModel"),Yd.forEach(t),ca.forEach(t),Us=m(o),de=r(o,"DIV",{class:!0});var Ke=i(de);y(Ao.$$.fragment,Ke),Wi=m(Ke),is=r(Ke,"P",{});var Zd=i(is);Bi=s(Zd,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Zd.forEach(t),Ui=m(Ke),Ho=r(Ke,"P",{});var pa=i(Ho);Vi=s(pa,"This model inherits from "),vn=r(pa,"A",{href:!0});var ec=i(vn);Gi=s(ec,"TFPreTrainedModel"),ec.forEach(t),Ki=s(pa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pa.forEach(t),Xi=m(Ke),Wo=r(Ke,"P",{});var ha=i(Wo);Ji=s(ha,"This model is also a "),Bo=r(ha,"A",{href:!0,rel:!0});var tc=i(Bo);Qi=s(tc,"tf.keras.Model"),tc.forEach(t),Yi=s(ha,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ha.forEach(t),Zi=m(Ke),y(Ut.$$.fragment,Ke),el=m(Ke),Ue=r(Ke,"DIV",{class:!0});var ao=i(Ue);y(Uo.$$.fragment,ao),tl=m(ao),bt=r(ao,"P",{});var qn=i(bt);ol=s(qn,"The "),bn=r(qn,"A",{href:!0});var oc=i(bn);nl=s(oc,"TFCTRLLMHeadModel"),oc.forEach(t),sl=s(qn," forward method, overrides the "),ls=r(qn,"CODE",{});var nc=i(ls);al=s(nc,"__call__"),nc.forEach(t),rl=s(qn," special method."),qn.forEach(t),il=m(ao),y(Vt.$$.fragment,ao),ll=m(ao),y(Gt.$$.fragment,ao),ao.forEach(t),Ke.forEach(t),Vs=m(o),kt=r(o,"H2",{class:!0});var ma=i(kt);Kt=r(ma,"A",{id:!0,class:!0,href:!0});var sc=i(Kt);ds=r(sc,"SPAN",{});var ac=i(ds);y(Vo.$$.fragment,ac),ac.forEach(t),sc.forEach(t),dl=m(ma),cs=r(ma,"SPAN",{});var rc=i(cs);cl=s(rc,"TFCTRLForSequenceClassification"),rc.forEach(t),ma.forEach(t),Gs=m(o),X=r(o,"DIV",{class:!0});var ue=i(X);y(Go.$$.fragment,ue),pl=m(ue),ps=r(ue,"P",{});var ic=i(ps);hl=s(ic,"The CTRL Model transformer with a sequence classification head on top (linear layer)."),ic.forEach(t),ml=m(ue),kn=r(ue,"P",{});var Ul=i(kn);yn=r(Ul,"A",{href:!0});var lc=i(yn);ul=s(lc,"TFCTRLForSequenceClassification"),lc.forEach(t),fl=s(Ul,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),Ul.forEach(t),gl=m(ue),Pe=r(ue,"P",{});var at=i(Pe);_l=s(at,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),hs=r(at,"CODE",{});var dc=i(hs);Tl=s(dc,"pad_token_id"),dc.forEach(t),vl=s(at,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),ms=r(at,"CODE",{});var cc=i(ms);bl=s(cc,"pad_token_id"),cc.forEach(t),kl=s(at,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),us=r(at,"CODE",{});var pc=i(us);yl=s(pc,"inputs_embeds"),pc.forEach(t),Cl=s(at," are passed instead of "),fs=r(at,"CODE",{});var hc=i(fs);wl=s(hc,"input_ids"),hc.forEach(t),$l=s(at,`, it does the same (take the last value in
each row of the batch).`),at.forEach(t),Ll=m(ue),Ko=r(ue,"P",{});var ua=i(Ko);Rl=s(ua,"This model inherits from "),Cn=r(ua,"A",{href:!0});var mc=i(Cn);Ml=s(mc,"TFPreTrainedModel"),mc.forEach(t),Fl=s(ua,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ua.forEach(t),El=m(ue),Xo=r(ue,"P",{});var fa=i(Xo);ql=s(fa,"This model is also a "),Jo=r(fa,"A",{href:!0,rel:!0});var uc=i(Jo);zl=s(uc,"tf.keras.Model"),uc.forEach(t),xl=s(fa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fa.forEach(t),jl=m(ue),y(Xt.$$.fragment,ue),Pl=m(ue),qe=r(ue,"DIV",{class:!0});var rt=i(qe);y(Qo.$$.fragment,rt),Sl=m(rt),yt=r(rt,"P",{});var zn=i(yt);Il=s(zn,"The "),wn=r(zn,"A",{href:!0});var fc=i(wn);Ol=s(fc,"TFCTRLForSequenceClassification"),fc.forEach(t),Nl=s(zn," forward method, overrides the "),gs=r(zn,"CODE",{});var gc=i(gs);Dl=s(gc,"__call__"),gc.forEach(t),Al=s(zn," special method."),zn.forEach(t),Hl=m(rt),y(Jt.$$.fragment,rt),Wl=m(rt),y(Qt.$$.fragment,rt),Bl=m(rt),y(Yt.$$.fragment,rt),rt.forEach(t),ue.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Wc)),f(p,"id","ctrl"),f(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(p,"href","#ctrl"),f(c,"class","relative group"),f(J,"id","overview"),f(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(J,"href","#overview"),f(F,"class","relative group"),f(Z,"href","https://arxiv.org/abs/1909.05858"),f(Z,"rel","nofollow"),f(te,"href","https://github.com/salesforce/ctrl"),f(te,"rel","nofollow"),f(on,"href","model_doc/ctrl#transformers.CTRLModel.forward"),f(ro,"href","https://huggingface.co/keskarnitishr"),f(ro,"rel","nofollow"),f(io,"href","https://github.com/salesforce/ctrl"),f(io,"rel","nofollow"),f($t,"id","transformers.CTRLConfig"),f($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($t,"href","#transformers.CTRLConfig"),f(lt,"class","relative group"),f(nn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLModel"),f(sn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLModel"),f(po,"href","https://huggingface.co/ctrl"),f(po,"rel","nofollow"),f(an,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(rn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Rt,"id","transformers.CTRLTokenizer"),f(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Rt,"href","#transformers.CTRLTokenizer"),f(ct,"class","relative group"),f(ln,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mt,"id","transformers.CTRLModel"),f(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mt,"href","#transformers.CTRLModel"),f(pt,"class","relative group"),f(cn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(bo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(bo,"rel","nofollow"),f(pn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLModel"),f(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qt,"id","transformers.CTRLLMHeadModel"),f(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(qt,"href","#transformers.CTRLLMHeadModel"),f(mt,"class","relative group"),f(hn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Lo,"rel","nofollow"),f(mn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLLMHeadModel"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jt,"id","transformers.CTRLForSequenceClassification"),f(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(jt,"href","#transformers.CTRLForSequenceClassification"),f(ft,"class","relative group"),f(un,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),f(fn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(zo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(zo,"rel","nofollow"),f(gn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),f(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Dt,"id","transformers.TFCTRLModel"),f(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Dt,"href","#transformers.TFCTRLModel"),f(_t,"class","relative group"),f(_n,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Oo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Oo,"rel","nofollow"),f(Tn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLModel"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bt,"id","transformers.TFCTRLLMHeadModel"),f(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Bt,"href","#transformers.TFCTRLLMHeadModel"),f(vt,"class","relative group"),f(vn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Bo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Bo,"rel","nofollow"),f(bn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLLMHeadModel"),f(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Kt,"id","transformers.TFCTRLForSequenceClassification"),f(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Kt,"href","#transformers.TFCTRLForSequenceClassification"),f(kt,"class","relative group"),f(yn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),f(Cn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Jo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Jo,"rel","nofollow"),f(wn,"href","/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),f(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,T){e(document.head,d),g(o,v,T),g(o,c,T),e(c,p),e(p,b),C(l,b,null),e(c,u),e(c,E),e(E,fe),g(o,Q,T),g(o,F,T),e(F,J),e(J,A),C(Y,A,null),e(F,ge),e(F,H),e(H,_e),g(o,ce,T),g(o,P,T),e(P,S),e(P,Z),e(Z,oe),e(P,q),e(P,z),e(z,Te),e(P,U),g(o,pe,T),g(o,ne,T),e(ne,V),g(o,he,T),g(o,se,T),e(se,x),e(x,ve),g(o,W,T),g(o,ae,T),e(ae,be),g(o,B,T),g(o,I,T),e(I,ee),e(ee,O),e(ee,te),e(te,G),e(ee,ke),e(I,_),e(I,R),e(R,re),e(I,Se),e(I,me),e(me,N),e(me,Me),e(Me,Ie),e(me,Oe),e(I,D),e(I,j),e(j,Ne),e(j,Fe),e(Fe,K),e(j,De),e(j,Ee),e(Ee,ye),e(j,Ae),e(j,xn),e(xn,ga),e(j,_a),e(j,on),e(on,jn),e(jn,Ta),e(j,va),g(o,qs,T),g(o,et,T),e(et,ba),e(et,ro),e(ro,ka),e(et,ya),e(et,io),e(io,Ca),e(et,wa),g(o,zs,T),g(o,lt,T),e(lt,$t),e($t,Pn),C(lo,Pn,null),e(lt,$a),e(lt,Sn),e(Sn,La),g(o,xs,T),g(o,xe,T),C(co,xe,null),e(xe,Ra),e(xe,Xe),e(Xe,Ma),e(Xe,nn),e(nn,Fa),e(Xe,Ea),e(Xe,sn),e(sn,qa),e(Xe,za),e(Xe,po),e(po,xa),e(Xe,ja),e(xe,Pa),e(xe,dt),e(dt,Sa),e(dt,an),e(an,Ia),e(dt,Oa),e(dt,rn),e(rn,Na),e(dt,Da),e(xe,Aa),C(Lt,xe,null),g(o,js,T),g(o,ct,T),e(ct,Rt),e(Rt,In),C(ho,In,null),e(ct,Ha),e(ct,On),e(On,Wa),g(o,Ps,T),g(o,je,T),C(mo,je,null),e(je,Ba),e(je,Nn),e(Nn,Ua),e(je,Va),e(je,uo),e(uo,Ga),e(uo,ln),e(ln,Ka),e(uo,Xa),e(je,Ja),e(je,dn),C(fo,dn,null),g(o,Ss,T),g(o,pt,T),e(pt,Mt),e(Mt,Dn),C(go,Dn,null),e(pt,Qa),e(pt,An),e(An,Ya),g(o,Is,T),g(o,Ce,T),C(_o,Ce,null),e(Ce,Za),e(Ce,Hn),e(Hn,er),e(Ce,tr),e(Ce,To),e(To,or),e(To,cn),e(cn,nr),e(To,sr),e(Ce,ar),e(Ce,vo),e(vo,rr),e(vo,bo),e(bo,ir),e(vo,lr),e(Ce,dr),e(Ce,He),C(ko,He,null),e(He,cr),e(He,ht),e(ht,pr),e(ht,pn),e(pn,hr),e(ht,mr),e(ht,Wn),e(Wn,ur),e(ht,fr),e(He,gr),C(Ft,He,null),e(He,_r),C(Et,He,null),g(o,Os,T),g(o,mt,T),e(mt,qt),e(qt,Bn),C(yo,Bn,null),e(mt,Tr),e(mt,Un),e(Un,vr),g(o,Ns,T),g(o,we,T),C(Co,we,null),e(we,br),e(we,Vn),e(Vn,kr),e(we,yr),e(we,wo),e(wo,Cr),e(wo,hn),e(hn,wr),e(wo,$r),e(we,Lr),e(we,$o),e($o,Rr),e($o,Lo),e(Lo,Mr),e($o,Fr),e(we,Er),e(we,We),C(Ro,We,null),e(We,qr),e(We,ut),e(ut,zr),e(ut,mn),e(mn,xr),e(ut,jr),e(ut,Gn),e(Gn,Pr),e(ut,Sr),e(We,Ir),C(zt,We,null),e(We,Or),C(xt,We,null),g(o,Ds,T),g(o,ft,T),e(ft,jt),e(jt,Kn),C(Mo,Kn,null),e(ft,Nr),e(ft,Xn),e(Xn,Dr),g(o,As,T),g(o,$e,T),C(Fo,$e,null),e($e,Ar),e($e,Le),e(Le,Hr),e(Le,un),e(un,Wr),e(Le,Br),e(Le,Jn),e(Jn,Ur),e(Le,Vr),e(Le,Qn),e(Qn,Gr),e(Le,Kr),e(Le,Yn),e(Yn,Xr),e(Le,Jr),e(Le,Zn),e(Zn,Qr),e(Le,Yr),e($e,Zr),e($e,Eo),e(Eo,ei),e(Eo,fn),e(fn,ti),e(Eo,oi),e($e,ni),e($e,qo),e(qo,si),e(qo,zo),e(zo,ai),e(qo,ri),e($e,ii),e($e,ie),C(xo,ie,null),e(ie,li),e(ie,gt),e(gt,di),e(gt,gn),e(gn,ci),e(gt,pi),e(gt,es),e(es,hi),e(gt,mi),e(ie,ui),C(Pt,ie,null),e(ie,fi),C(St,ie,null),e(ie,gi),C(It,ie,null),e(ie,_i),C(Ot,ie,null),e(ie,Ti),C(Nt,ie,null),g(o,Hs,T),g(o,_t,T),e(_t,Dt),e(Dt,ts),C(jo,ts,null),e(_t,vi),e(_t,os),e(os,bi),g(o,Ws,T),g(o,le,T),C(Po,le,null),e(le,ki),e(le,ns),e(ns,yi),e(le,Ci),e(le,So),e(So,wi),e(So,_n),e(_n,$i),e(So,Li),e(le,Ri),e(le,Io),e(Io,Mi),e(Io,Oo),e(Oo,Fi),e(Io,Ei),e(le,qi),C(At,le,null),e(le,zi),e(le,Be),C(No,Be,null),e(Be,xi),e(Be,Tt),e(Tt,ji),e(Tt,Tn),e(Tn,Pi),e(Tt,Si),e(Tt,ss),e(ss,Ii),e(Tt,Oi),e(Be,Ni),C(Ht,Be,null),e(Be,Di),C(Wt,Be,null),g(o,Bs,T),g(o,vt,T),e(vt,Bt),e(Bt,as),C(Do,as,null),e(vt,Ai),e(vt,rs),e(rs,Hi),g(o,Us,T),g(o,de,T),C(Ao,de,null),e(de,Wi),e(de,is),e(is,Bi),e(de,Ui),e(de,Ho),e(Ho,Vi),e(Ho,vn),e(vn,Gi),e(Ho,Ki),e(de,Xi),e(de,Wo),e(Wo,Ji),e(Wo,Bo),e(Bo,Qi),e(Wo,Yi),e(de,Zi),C(Ut,de,null),e(de,el),e(de,Ue),C(Uo,Ue,null),e(Ue,tl),e(Ue,bt),e(bt,ol),e(bt,bn),e(bn,nl),e(bt,sl),e(bt,ls),e(ls,al),e(bt,rl),e(Ue,il),C(Vt,Ue,null),e(Ue,ll),C(Gt,Ue,null),g(o,Vs,T),g(o,kt,T),e(kt,Kt),e(Kt,ds),C(Vo,ds,null),e(kt,dl),e(kt,cs),e(cs,cl),g(o,Gs,T),g(o,X,T),C(Go,X,null),e(X,pl),e(X,ps),e(ps,hl),e(X,ml),e(X,kn),e(kn,yn),e(yn,ul),e(kn,fl),e(X,gl),e(X,Pe),e(Pe,_l),e(Pe,hs),e(hs,Tl),e(Pe,vl),e(Pe,ms),e(ms,bl),e(Pe,kl),e(Pe,us),e(us,yl),e(Pe,Cl),e(Pe,fs),e(fs,wl),e(Pe,$l),e(X,Ll),e(X,Ko),e(Ko,Rl),e(Ko,Cn),e(Cn,Ml),e(Ko,Fl),e(X,El),e(X,Xo),e(Xo,ql),e(Xo,Jo),e(Jo,zl),e(Xo,xl),e(X,jl),C(Xt,X,null),e(X,Pl),e(X,qe),C(Qo,qe,null),e(qe,Sl),e(qe,yt),e(yt,Il),e(yt,wn),e(wn,Ol),e(yt,Nl),e(yt,gs),e(gs,Dl),e(yt,Al),e(qe,Hl),C(Jt,qe,null),e(qe,Wl),C(Qt,qe,null),e(qe,Bl),C(Yt,qe,null),Ks=!0},p(o,[T]){const Yo={};T&2&&(Yo.$$scope={dirty:T,ctx:o}),Lt.$set(Yo);const _s={};T&2&&(_s.$$scope={dirty:T,ctx:o}),Ft.$set(_s);const Ts={};T&2&&(Ts.$$scope={dirty:T,ctx:o}),Et.$set(Ts);const vs={};T&2&&(vs.$$scope={dirty:T,ctx:o}),zt.$set(vs);const Zo={};T&2&&(Zo.$$scope={dirty:T,ctx:o}),xt.$set(Zo);const bs={};T&2&&(bs.$$scope={dirty:T,ctx:o}),Pt.$set(bs);const ks={};T&2&&(ks.$$scope={dirty:T,ctx:o}),St.$set(ks);const ys={};T&2&&(ys.$$scope={dirty:T,ctx:o}),It.$set(ys);const Ct={};T&2&&(Ct.$$scope={dirty:T,ctx:o}),Ot.$set(Ct);const Cs={};T&2&&(Cs.$$scope={dirty:T,ctx:o}),Nt.$set(Cs);const ws={};T&2&&(ws.$$scope={dirty:T,ctx:o}),At.$set(ws);const $s={};T&2&&($s.$$scope={dirty:T,ctx:o}),Ht.$set($s);const Ls={};T&2&&(Ls.$$scope={dirty:T,ctx:o}),Wt.$set(Ls);const Rs={};T&2&&(Rs.$$scope={dirty:T,ctx:o}),Ut.$set(Rs);const Ms={};T&2&&(Ms.$$scope={dirty:T,ctx:o}),Vt.$set(Ms);const Je={};T&2&&(Je.$$scope={dirty:T,ctx:o}),Gt.$set(Je);const en={};T&2&&(en.$$scope={dirty:T,ctx:o}),Xt.$set(en);const Fs={};T&2&&(Fs.$$scope={dirty:T,ctx:o}),Jt.$set(Fs);const Es={};T&2&&(Es.$$scope={dirty:T,ctx:o}),Qt.$set(Es);const tn={};T&2&&(tn.$$scope={dirty:T,ctx:o}),Yt.$set(tn)},i(o){Ks||(w(l.$$.fragment,o),w(Y.$$.fragment,o),w(lo.$$.fragment,o),w(co.$$.fragment,o),w(Lt.$$.fragment,o),w(ho.$$.fragment,o),w(mo.$$.fragment,o),w(fo.$$.fragment,o),w(go.$$.fragment,o),w(_o.$$.fragment,o),w(ko.$$.fragment,o),w(Ft.$$.fragment,o),w(Et.$$.fragment,o),w(yo.$$.fragment,o),w(Co.$$.fragment,o),w(Ro.$$.fragment,o),w(zt.$$.fragment,o),w(xt.$$.fragment,o),w(Mo.$$.fragment,o),w(Fo.$$.fragment,o),w(xo.$$.fragment,o),w(Pt.$$.fragment,o),w(St.$$.fragment,o),w(It.$$.fragment,o),w(Ot.$$.fragment,o),w(Nt.$$.fragment,o),w(jo.$$.fragment,o),w(Po.$$.fragment,o),w(At.$$.fragment,o),w(No.$$.fragment,o),w(Ht.$$.fragment,o),w(Wt.$$.fragment,o),w(Do.$$.fragment,o),w(Ao.$$.fragment,o),w(Ut.$$.fragment,o),w(Uo.$$.fragment,o),w(Vt.$$.fragment,o),w(Gt.$$.fragment,o),w(Vo.$$.fragment,o),w(Go.$$.fragment,o),w(Xt.$$.fragment,o),w(Qo.$$.fragment,o),w(Jt.$$.fragment,o),w(Qt.$$.fragment,o),w(Yt.$$.fragment,o),Ks=!0)},o(o){$(l.$$.fragment,o),$(Y.$$.fragment,o),$(lo.$$.fragment,o),$(co.$$.fragment,o),$(Lt.$$.fragment,o),$(ho.$$.fragment,o),$(mo.$$.fragment,o),$(fo.$$.fragment,o),$(go.$$.fragment,o),$(_o.$$.fragment,o),$(ko.$$.fragment,o),$(Ft.$$.fragment,o),$(Et.$$.fragment,o),$(yo.$$.fragment,o),$(Co.$$.fragment,o),$(Ro.$$.fragment,o),$(zt.$$.fragment,o),$(xt.$$.fragment,o),$(Mo.$$.fragment,o),$(Fo.$$.fragment,o),$(xo.$$.fragment,o),$(Pt.$$.fragment,o),$(St.$$.fragment,o),$(It.$$.fragment,o),$(Ot.$$.fragment,o),$(Nt.$$.fragment,o),$(jo.$$.fragment,o),$(Po.$$.fragment,o),$(At.$$.fragment,o),$(No.$$.fragment,o),$(Ht.$$.fragment,o),$(Wt.$$.fragment,o),$(Do.$$.fragment,o),$(Ao.$$.fragment,o),$(Ut.$$.fragment,o),$(Uo.$$.fragment,o),$(Vt.$$.fragment,o),$(Gt.$$.fragment,o),$(Vo.$$.fragment,o),$(Go.$$.fragment,o),$(Xt.$$.fragment,o),$(Qo.$$.fragment,o),$(Jt.$$.fragment,o),$(Qt.$$.fragment,o),$(Yt.$$.fragment,o),Ks=!1},d(o){t(d),o&&t(v),o&&t(c),L(l),o&&t(Q),o&&t(F),L(Y),o&&t(ce),o&&t(P),o&&t(pe),o&&t(ne),o&&t(he),o&&t(se),o&&t(W),o&&t(ae),o&&t(B),o&&t(I),o&&t(qs),o&&t(et),o&&t(zs),o&&t(lt),L(lo),o&&t(xs),o&&t(xe),L(co),L(Lt),o&&t(js),o&&t(ct),L(ho),o&&t(Ps),o&&t(je),L(mo),L(fo),o&&t(Ss),o&&t(pt),L(go),o&&t(Is),o&&t(Ce),L(_o),L(ko),L(Ft),L(Et),o&&t(Os),o&&t(mt),L(yo),o&&t(Ns),o&&t(we),L(Co),L(Ro),L(zt),L(xt),o&&t(Ds),o&&t(ft),L(Mo),o&&t(As),o&&t($e),L(Fo),L(xo),L(Pt),L(St),L(It),L(Ot),L(Nt),o&&t(Hs),o&&t(_t),L(jo),o&&t(Ws),o&&t(le),L(Po),L(At),L(No),L(Ht),L(Wt),o&&t(Bs),o&&t(vt),L(Do),o&&t(Us),o&&t(de),L(Ao),L(Ut),L(Uo),L(Vt),L(Gt),o&&t(Vs),o&&t(kt),L(Vo),o&&t(Gs),o&&t(X),L(Go),L(Xt),L(Qo),L(Jt),L(Qt),L(Yt)}}}const Wc={local:"ctrl",sections:[{local:"overview",title:"Overview"},{local:"transformers.CTRLConfig",title:"CTRLConfig"},{local:"transformers.CTRLTokenizer",title:"CTRLTokenizer"},{local:"transformers.CTRLModel",title:"CTRLModel"},{local:"transformers.CTRLLMHeadModel",title:"CTRLLMHeadModel"},{local:"transformers.CTRLForSequenceClassification",title:"CTRLForSequenceClassification"},{local:"transformers.TFCTRLModel",title:"TFCTRLModel"},{local:"transformers.TFCTRLLMHeadModel",title:"TFCTRLLMHeadModel"},{local:"transformers.TFCTRLForSequenceClassification",title:"TFCTRLForSequenceClassification"}],title:"CTRL"};function Bc(M){return kc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qc extends _c{constructor(d){super();Tc(this,d,Bc,Hc,vc,{})}}export{Qc as default,Wc as metadata};
