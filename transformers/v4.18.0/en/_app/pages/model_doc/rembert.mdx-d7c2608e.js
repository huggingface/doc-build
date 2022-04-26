import{S as Sy,i as Iy,s as Wy,e as r,k as m,w as T,t as n,M as Uy,c as a,d as t,m as h,a as i,x as y,h as s,b,F as e,g as _,y as w,q as $,o as F,B as R,v as Hy,L as $e}from"../../chunks/vendor-6b77c823.js";import{T as je}from"../../chunks/Tip-39098574.js";import{D as Y}from"../../chunks/Docstring-1088f2fb.js";import{C as Fe}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as xe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as we}from"../../chunks/ExampleCodeBlock-5212b321.js";function Qy(E){let d,g,c,p,k;return p=new Fe({props:{code:"",highlighted:""}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Ky(E){let d,g,c,p,k;return p=new Fe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("sequence pair mask has the following format:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"sequence pair mask has the following format:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Vy(E){let d,g,c,p,k;return p=new Fe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("sequence pair mask has the following format:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"sequence pair mask has the following format:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Jy(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Gy(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertModel
import torch

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = RemBertModel.from_pretrained("rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertModel.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Xy(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Yy(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForCausalLM, RemBertConfig
import torch

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
config = RemBertConfig.from_pretrained("google/rembert")
config.is_decoder = True
model = RemBertForCausalLM.from_pretrained("google/rembert", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForCausalLM, RemBertConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = RemBertConfig.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Zy(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function e1(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForMaskedLM
import torch

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = RemBertForMaskedLM.from_pretrained("rembert")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function t1(E){let d,g;return d=new Fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function o1(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function n1(E){let d,g,c,p,k;return p=new Fe({props:{code:`import torch
from transformers import RemBertTokenizer, RemBertForSequenceClassification

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = RemBertForSequenceClassification.from_pretrained("rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example of single-label classification:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example of single-label classification:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function s1(E){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RemBertForSequenceClassification.from_pretrained("rembert", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function r1(E){let d,g,c,p,k;return p=new Fe({props:{code:`import torch
from transformers import RemBertTokenizer, RemBertForSequenceClassification

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = RemBertForSequenceClassification.from_pretrained("rembert", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example of multi-label classification:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example of multi-label classification:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function a1(E){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RemBertForSequenceClassification.from_pretrained("rembert", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function i1(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function l1(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForMultipleChoice
import torch

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = RemBertForMultipleChoice.from_pretrained("rembert")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function d1(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function c1(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForTokenClassification
import torch

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = RemBertForTokenClassification.from_pretrained("rembert")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

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
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function p1(E){let d,g;return d=new Fe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function m1(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function h1(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForQuestionAnswering
import torch

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = RemBertForQuestionAnswering.from_pretrained("rembert")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function u1(E){let d,g;return d=new Fe({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function f1(E){let d,g,c,p,k,l,u,M,ue,X,q,te,N,ne,fe,S,ge,pe,J,O,se,Z,z,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),q=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),z=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(f),p=a(f,"UL",{});var P=i(p);k=a(P,"LI",{});var Te=i(k);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=h(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=h(f),q=a(f,"P",{});var j=i(q);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=h(f),z=a(f,"UL",{});var D=i(z);x=a(D,"LI",{});var K=i(x);ae=s(K,"a single Tensor with "),H=a(K,"CODE",{});var ve=i(H);me=s(ve,"input_ids"),ve.forEach(t),ie=s(K," only and nothing else: "),I=a(K,"CODE",{});var Me=i(I);_e=s(Me,"model(inputs_ids)"),Me.forEach(t),K.forEach(t),he=h(D),C=a(D,"LI",{});var A=i(C);ke=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var qe=i(W);le=s(qe,"model([input_ids, attention_mask])"),qe.forEach(t),be=s(A," or "),U=a(A,"CODE",{});var ze=i(U);ee=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),A.forEach(t),oe=h(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,d,B),e(d,g),_(f,c,B),_(f,p,B),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,q,B),e(q,te),e(q,N),e(N,ne),e(q,fe),e(q,S),e(S,ge),e(q,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,z,B),e(z,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(z,he),e(z,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(z,oe),e(z,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(q),f&&t(J),f&&t(O),f&&t(Z),f&&t(z)}}}function g1(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function _1(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertModel
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = TFRemBertModel.from_pretrained("rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertModel.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function k1(E){let d,g,c,p,k,l,u,M,ue,X,q,te,N,ne,fe,S,ge,pe,J,O,se,Z,z,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),q=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),z=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(f),p=a(f,"UL",{});var P=i(p);k=a(P,"LI",{});var Te=i(k);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=h(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=h(f),q=a(f,"P",{});var j=i(q);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=h(f),z=a(f,"UL",{});var D=i(z);x=a(D,"LI",{});var K=i(x);ae=s(K,"a single Tensor with "),H=a(K,"CODE",{});var ve=i(H);me=s(ve,"input_ids"),ve.forEach(t),ie=s(K," only and nothing else: "),I=a(K,"CODE",{});var Me=i(I);_e=s(Me,"model(inputs_ids)"),Me.forEach(t),K.forEach(t),he=h(D),C=a(D,"LI",{});var A=i(C);ke=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var qe=i(W);le=s(qe,"model([input_ids, attention_mask])"),qe.forEach(t),be=s(A," or "),U=a(A,"CODE",{});var ze=i(U);ee=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),A.forEach(t),oe=h(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,d,B),e(d,g),_(f,c,B),_(f,p,B),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,q,B),e(q,te),e(q,N),e(N,ne),e(q,fe),e(q,S),e(S,ge),e(q,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,z,B),e(z,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(z,he),e(z,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(z,oe),e(z,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(q),f&&t(J),f&&t(O),f&&t(Z),f&&t(z)}}}function b1(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function v1(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForMaskedLM
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = TFRemBertForMaskedLM.from_pretrained("rembert")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function T1(E){let d,g;return d=new Fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function y1(E){let d,g,c,p,k,l,u,M,ue,X,q,te,N,ne,fe,S,ge,pe,J,O,se,Z,z,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),q=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),z=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(f),p=a(f,"UL",{});var P=i(p);k=a(P,"LI",{});var Te=i(k);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=h(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=h(f),q=a(f,"P",{});var j=i(q);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=h(f),z=a(f,"UL",{});var D=i(z);x=a(D,"LI",{});var K=i(x);ae=s(K,"a single Tensor with "),H=a(K,"CODE",{});var ve=i(H);me=s(ve,"input_ids"),ve.forEach(t),ie=s(K," only and nothing else: "),I=a(K,"CODE",{});var Me=i(I);_e=s(Me,"model(inputs_ids)"),Me.forEach(t),K.forEach(t),he=h(D),C=a(D,"LI",{});var A=i(C);ke=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var qe=i(W);le=s(qe,"model([input_ids, attention_mask])"),qe.forEach(t),be=s(A," or "),U=a(A,"CODE",{});var ze=i(U);ee=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),A.forEach(t),oe=h(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,d,B),e(d,g),_(f,c,B),_(f,p,B),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,q,B),e(q,te),e(q,N),e(N,ne),e(q,fe),e(q,S),e(S,ge),e(q,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,z,B),e(z,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(z,he),e(z,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(z,oe),e(z,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(q),f&&t(J),f&&t(O),f&&t(Z),f&&t(z)}}}function w1(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForCausalLM
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = TFRemBertForCausalLM.from_pretrained("rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForCausalLM.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function $1(E){let d,g,c,p,k,l,u,M,ue,X,q,te,N,ne,fe,S,ge,pe,J,O,se,Z,z,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),q=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),z=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(f),p=a(f,"UL",{});var P=i(p);k=a(P,"LI",{});var Te=i(k);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=h(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=h(f),q=a(f,"P",{});var j=i(q);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=h(f),z=a(f,"UL",{});var D=i(z);x=a(D,"LI",{});var K=i(x);ae=s(K,"a single Tensor with "),H=a(K,"CODE",{});var ve=i(H);me=s(ve,"input_ids"),ve.forEach(t),ie=s(K," only and nothing else: "),I=a(K,"CODE",{});var Me=i(I);_e=s(Me,"model(inputs_ids)"),Me.forEach(t),K.forEach(t),he=h(D),C=a(D,"LI",{});var A=i(C);ke=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var qe=i(W);le=s(qe,"model([input_ids, attention_mask])"),qe.forEach(t),be=s(A," or "),U=a(A,"CODE",{});var ze=i(U);ee=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),A.forEach(t),oe=h(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,d,B),e(d,g),_(f,c,B),_(f,p,B),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,q,B),e(q,te),e(q,N),e(N,ne),e(q,fe),e(q,S),e(S,ge),e(q,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,z,B),e(z,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(z,he),e(z,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(z,oe),e(z,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(q),f&&t(J),f&&t(O),f&&t(Z),f&&t(z)}}}function F1(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function R1(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForSequenceClassification
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = TFRemBertForSequenceClassification.from_pretrained("rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function E1(E){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFRemBertForSequenceClassification.from_pretrained("rembert", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function B1(E){let d,g,c,p,k,l,u,M,ue,X,q,te,N,ne,fe,S,ge,pe,J,O,se,Z,z,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),q=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),z=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(f),p=a(f,"UL",{});var P=i(p);k=a(P,"LI",{});var Te=i(k);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=h(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=h(f),q=a(f,"P",{});var j=i(q);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=h(f),z=a(f,"UL",{});var D=i(z);x=a(D,"LI",{});var K=i(x);ae=s(K,"a single Tensor with "),H=a(K,"CODE",{});var ve=i(H);me=s(ve,"input_ids"),ve.forEach(t),ie=s(K," only and nothing else: "),I=a(K,"CODE",{});var Me=i(I);_e=s(Me,"model(inputs_ids)"),Me.forEach(t),K.forEach(t),he=h(D),C=a(D,"LI",{});var A=i(C);ke=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var qe=i(W);le=s(qe,"model([input_ids, attention_mask])"),qe.forEach(t),be=s(A," or "),U=a(A,"CODE",{});var ze=i(U);ee=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),A.forEach(t),oe=h(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,d,B),e(d,g),_(f,c,B),_(f,p,B),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,q,B),e(q,te),e(q,N),e(N,ne),e(q,fe),e(q,S),e(S,ge),e(q,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,z,B),e(z,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(z,he),e(z,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(z,oe),e(z,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(q),f&&t(J),f&&t(O),f&&t(Z),f&&t(z)}}}function M1(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function q1(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForMultipleChoice
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = TFRemBertForMultipleChoice.from_pretrained("rembert")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function z1(E){let d,g,c,p,k,l,u,M,ue,X,q,te,N,ne,fe,S,ge,pe,J,O,se,Z,z,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),q=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),z=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(f),p=a(f,"UL",{});var P=i(p);k=a(P,"LI",{});var Te=i(k);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=h(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=h(f),q=a(f,"P",{});var j=i(q);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=h(f),z=a(f,"UL",{});var D=i(z);x=a(D,"LI",{});var K=i(x);ae=s(K,"a single Tensor with "),H=a(K,"CODE",{});var ve=i(H);me=s(ve,"input_ids"),ve.forEach(t),ie=s(K," only and nothing else: "),I=a(K,"CODE",{});var Me=i(I);_e=s(Me,"model(inputs_ids)"),Me.forEach(t),K.forEach(t),he=h(D),C=a(D,"LI",{});var A=i(C);ke=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var qe=i(W);le=s(qe,"model([input_ids, attention_mask])"),qe.forEach(t),be=s(A," or "),U=a(A,"CODE",{});var ze=i(U);ee=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),A.forEach(t),oe=h(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,d,B),e(d,g),_(f,c,B),_(f,p,B),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,q,B),e(q,te),e(q,N),e(N,ne),e(q,fe),e(q,S),e(S,ge),e(q,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,z,B),e(z,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(z,he),e(z,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(z,oe),e(z,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(q),f&&t(J),f&&t(O),f&&t(Z),f&&t(z)}}}function C1(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function x1(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForTokenClassification
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = TFRemBertForTokenClassification.from_pretrained("rembert")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

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
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function j1(E){let d,g;return d=new Fe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function L1(E){let d,g,c,p,k,l,u,M,ue,X,q,te,N,ne,fe,S,ge,pe,J,O,se,Z,z,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),q=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),z=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(f),p=a(f,"UL",{});var P=i(p);k=a(P,"LI",{});var Te=i(k);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=h(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=h(f),q=a(f,"P",{});var j=i(q);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=h(f),z=a(f,"UL",{});var D=i(z);x=a(D,"LI",{});var K=i(x);ae=s(K,"a single Tensor with "),H=a(K,"CODE",{});var ve=i(H);me=s(ve,"input_ids"),ve.forEach(t),ie=s(K," only and nothing else: "),I=a(K,"CODE",{});var Me=i(I);_e=s(Me,"model(inputs_ids)"),Me.forEach(t),K.forEach(t),he=h(D),C=a(D,"LI",{});var A=i(C);ke=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var qe=i(W);le=s(qe,"model([input_ids, attention_mask])"),qe.forEach(t),be=s(A," or "),U=a(A,"CODE",{});var ze=i(U);ee=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),A.forEach(t),oe=h(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,d,B),e(d,g),_(f,c,B),_(f,p,B),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,q,B),e(q,te),e(q,N),e(N,ne),e(q,fe),e(q,S),e(S,ge),e(q,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,z,B),e(z,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(z,he),e(z,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(z,oe),e(z,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(q),f&&t(J),f&&t(O),f&&t(Z),f&&t(z)}}}function P1(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function O1(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForQuestionAnswering
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = TFRemBertForQuestionAnswering.from_pretrained("rembert")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function D1(E){let d,g;return d=new Fe({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function A1(E){let d,g,c,p,k,l,u,M,ue,X,q,te,N,ne,fe,S,ge,pe,J,O,se,Z,z,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce,f,B,P,Te,Re,j,Ee,ye,Be,D,K,ve,Me,A,qe,ze,de,Ce,Tp,yp,yo,wp,Ga,Xa,Ya,Za,$p,Fp,ei,ti,oi,wo,$o,ni,Gn,Rp,si,Ep,Bp,ri,ai,ii,Fo,Ro,li,Xn,Mp,di,qp,Vd,Nt,Eo,ci,Yn,zp,pi,Cp,Jd,Le,Zn,xp,es,jp,ts,Lp,Pp,Op,os,Dp,ea,Ap,Np,Sp,Mt,ns,Ip,mi,Wp,Up,ss,ta,Hp,hi,Qp,Kp,oa,Vp,ui,Jp,Gp,Bo,rs,Xp,as,Yp,fi,Zp,em,tm,pt,is,om,gi,nm,sm,Mo,rm,St,am,_i,im,lm,ki,dm,cm,pm,na,ls,Gd,It,qo,bi,ds,mm,vi,hm,Xd,De,cs,um,Rt,fm,Ti,gm,_m,ps,km,bm,sa,vm,Tm,ym,qt,ms,wm,yi,$m,Fm,hs,ra,Rm,wi,Em,Bm,aa,Mm,$i,qm,zm,zo,us,Cm,fs,xm,Fi,jm,Lm,Pm,mt,gs,Om,Ri,Dm,Am,Co,Nm,Ei,Sm,Im,ia,_s,Yd,Wt,xo,Bi,ks,Wm,Mi,Um,Zd,Je,bs,Hm,vs,Qm,Ts,Km,Vm,Jm,ys,Gm,ws,Xm,Ym,Zm,Ae,eh,qi,th,oh,zi,nh,sh,Ci,rh,ah,xi,ih,lh,ji,dh,ch,Li,ph,mh,hh,ht,$s,uh,Ut,fh,la,gh,_h,Pi,kh,bh,vh,jo,Th,Lo,ec,Ht,Po,Oi,Fs,yh,Di,wh,tc,Et,Rs,$h,Qt,Fh,Ai,Rh,Eh,Es,Bh,Mh,qh,ut,Bs,zh,Kt,Ch,da,xh,jh,Ni,Lh,Ph,Oh,Oo,Dh,Do,oc,Vt,Ao,Si,Ms,Ah,Ii,Nh,nc,Bt,qs,Sh,Jt,Ih,Wi,Wh,Uh,zs,Hh,Qh,Kh,Ge,Cs,Vh,Gt,Jh,ca,Gh,Xh,Ui,Yh,Zh,eu,No,tu,So,ou,Io,sc,Xt,Wo,Hi,xs,nu,Qi,su,rc,it,js,ru,Ki,au,iu,Ls,lu,Ps,du,cu,pu,Oe,Os,mu,Yt,hu,pa,uu,fu,Vi,gu,_u,ku,Uo,bu,Ho,vu,Qo,Tu,Ko,yu,Vo,ac,Zt,Jo,Ji,Ds,wu,Gi,$u,ic,lt,As,Fu,Xi,Ru,Eu,Ns,Bu,Ss,Mu,qu,zu,ft,Is,Cu,eo,xu,ma,ju,Lu,Yi,Pu,Ou,Du,Go,Au,Xo,lc,to,Yo,Zi,Ws,Nu,el,Su,dc,dt,Us,Iu,tl,Wu,Uu,Hs,Hu,Qs,Qu,Ku,Vu,Xe,Ks,Ju,oo,Gu,ha,Xu,Yu,ol,Zu,ef,tf,Zo,of,en,nf,tn,cc,no,on,nl,Vs,sf,sl,rf,pc,ct,Js,af,so,lf,rl,df,cf,al,pf,mf,hf,Gs,uf,Xs,ff,gf,_f,Ye,Ys,kf,ro,bf,ua,vf,Tf,il,yf,wf,$f,nn,Ff,sn,Rf,rn,mc,ao,an,ll,Zs,Ef,dl,Bf,hc,Ne,er,Mf,cl,qf,zf,tr,Cf,fa,xf,jf,Lf,or,Pf,nr,Of,Df,Af,ln,Nf,gt,sr,Sf,io,If,ga,Wf,Uf,pl,Hf,Qf,Kf,dn,Vf,cn,uc,lo,pn,ml,rr,Jf,hl,Gf,fc,Se,ar,Xf,ir,Yf,ul,Zf,eg,tg,lr,og,_a,ng,sg,rg,dr,ag,cr,ig,lg,dg,mn,cg,Ze,pr,pg,co,mg,ka,hg,ug,fl,fg,gg,_g,hn,kg,un,bg,fn,gc,po,gn,gl,mr,vg,_l,Tg,_c,Ie,hr,yg,ur,wg,kl,$g,Fg,Rg,fr,Eg,ba,Bg,Mg,qg,gr,zg,_r,Cg,xg,jg,_n,Lg,et,kr,Pg,Pe,Og,bl,Dg,Ag,vl,Ng,Sg,Tl,Ig,Wg,yl,Ug,Hg,wl,Qg,Kg,$l,Vg,Jg,Fl,Gg,Xg,Yg,br,vr,Zg,Rl,e_,t_,o_,Tr,n_,El,s_,r_,a_,V,i_,Bl,l_,d_,Ml,c_,p_,ql,m_,h_,zl,u_,f_,Cl,g_,__,xl,k_,b_,jl,v_,T_,Ll,y_,w_,Pl,$_,F_,Ol,R_,E_,Dl,B_,M_,Al,q_,z_,Nl,C_,x_,Sl,j_,L_,Il,P_,O_,Wl,D_,A_,Ul,N_,S_,Hl,I_,W_,Ql,U_,H_,Kl,Q_,K_,V_,kn,kc,mo,bn,Vl,yr,J_,Jl,G_,bc,We,wr,X_,Gl,Y_,Z_,$r,ek,va,tk,ok,nk,Fr,sk,Rr,rk,ak,ik,vn,lk,tt,Er,dk,ho,ck,Ta,pk,mk,Xl,hk,uk,fk,Tn,gk,yn,_k,wn,vc,uo,$n,Yl,Br,kk,Zl,bk,Tc,Ue,Mr,vk,ed,Tk,yk,qr,wk,ya,$k,Fk,Rk,zr,Ek,Cr,Bk,Mk,qk,Fn,zk,_t,xr,Ck,fo,xk,wa,jk,Lk,td,Pk,Ok,Dk,Rn,Ak,En,yc,go,Bn,od,jr,Nk,nd,Sk,wc,He,Lr,Ik,sd,Wk,Uk,Pr,Hk,$a,Qk,Kk,Vk,Or,Jk,Dr,Gk,Xk,Yk,Mn,Zk,ot,Ar,eb,_o,tb,Fa,ob,nb,rd,sb,rb,ab,qn,ib,zn,lb,Cn,$c,ko,xn,ad,Nr,db,id,cb,Fc,Qe,Sr,pb,bo,mb,ld,hb,ub,dd,fb,gb,_b,Ir,kb,Ra,bb,vb,Tb,Wr,yb,Ur,wb,$b,Fb,jn,Rb,nt,Hr,Eb,vo,Bb,Ea,Mb,qb,cd,zb,Cb,xb,Ln,jb,Pn,Lb,On,Rc;return l=new xe({}),ne=new xe({}),re=new xe({}),Te=new Y({props:{name:"class transformers.RemBertConfig",anchor:"transformers.RemBertConfig",parameters:[{name:"vocab_size",val:" = 250300"},{name:"hidden_size",val:" = 1152"},{name:"num_hidden_layers",val:" = 32"},{name:"num_attention_heads",val:" = 18"},{name:"input_embedding_size",val:" = 256"},{name:"output_embedding_size",val:" = 1664"},{name:"intermediate_size",val:" = 4608"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 312"},{name:"eos_token_id",val:" = 313"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RemBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 250300) &#x2014;
Vocabulary size of the RemBERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertModel">RemBertModel</a> or <a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.TFRemBertModel">TFRemBertModel</a>. Vocabulary size of the model.
Defines the different tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of
<a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertModel">RemBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.RemBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1152) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.RemBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.RemBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 18) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.RemBertConfig.input_embedding_size",description:`<strong>input_embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the input embeddings.`,name:"input_embedding_size"},{anchor:"transformers.RemBertConfig.output_embedding_size",description:`<strong>output_embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1664) &#x2014;
Dimensionality of the output embeddings.`,name:"output_embedding_size"},{anchor:"transformers.RemBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4608) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.RemBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.RemBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.RemBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.RemBertConfig.classifier_dropout_prob",description:`<strong>classifier_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the classifier layer when fine-tuning.`,name:"classifier_dropout_prob"},{anchor:"transformers.RemBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.RemBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertModel">RemBertModel</a> or <a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.TFRemBertModel">TFRemBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RemBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RemBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RemBertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/configuration_rembert.py#L29"}}),yo=new we({props:{anchor:"transformers.RemBertConfig.example",$$slots:{default:[Qy]},$$scope:{ctx:E}}}),Gn=new xe({}),Xn=new xe({}),Yn=new xe({}),Zn=new Y({props:{name:"class transformers.RemBertTokenizer",anchor:"transformers.RemBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = True"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.RemBertTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.RemBertTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.RemBertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.RemBertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.RemBertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.RemBertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.RemBertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.RemBertTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/tokenization_rembert.py#L43"}}),ns=new Y({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RemBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/tokenization_rembert.py#L172",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),rs=new Y({props:{name:"get_special_tokens_mask",anchor:"transformers.RemBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RemBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/tokenization_rembert.py#L197",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),is=new Y({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/tokenization_rembert.py#L228",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Mo=new we({props:{anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Ky]},$$scope:{ctx:E}}}),ls=new Y({props:{name:"save_vocabulary",anchor:"transformers.RemBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/tokenization_rembert.py#L258"}}),ds=new xe({}),cs=new Y({props:{name:"class transformers.RemBertTokenizerFast",anchor:"transformers.RemBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.RemBertTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.RemBertTokenizerFast.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.RemBertTokenizerFast.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.RemBertTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.RemBertTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token. .. note:: When building a sequence using special tokens, this is not the token
that is used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.RemBertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.RemBertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.RemBertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.RemBertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.RemBertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/tokenization_rembert_fast.py#L51"}}),ms=new Y({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RemBertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/tokenization_rembert_fast.py#L143",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),us=new Y({props:{name:"get_special_tokens_mask",anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/tokenization_rembert_fast.py#L168",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),gs=new Y({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/tokenization_rembert_fast.py#L199",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Co=new we({props:{anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[Vy]},$$scope:{ctx:E}}}),_s=new Y({props:{name:"save_vocabulary",anchor:"transformers.RemBertTokenizerFast.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/tokenization_rembert_fast.py#L229"}}),ks=new xe({}),bs=new Y({props:{name:"class transformers.RemBertModel",anchor:"transformers.RemBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RemBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_rembert.py#L750"}}),$s=new Y({props:{name:"forward",anchor:"transformers.RemBertModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RemBertModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RemBertModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RemBertModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_rembert.py#L789",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jo=new je({props:{$$slots:{default:[Jy]},$$scope:{ctx:E}}}),Lo=new we({props:{anchor:"transformers.RemBertModel.forward.example",$$slots:{default:[Gy]},$$scope:{ctx:E}}}),Fs=new xe({}),Rs=new Y({props:{name:"class transformers.RemBertForCausalLM",anchor:"transformers.RemBertForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_rembert.py#L1023"}}),Bs=new Y({props:{name:"forward",anchor:"transformers.RemBertForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RemBertForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RemBertForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RemBertForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.RemBertForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_rembert.py#L1045",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new je({props:{$$slots:{default:[Xy]},$$scope:{ctx:E}}}),Do=new we({props:{anchor:"transformers.RemBertForCausalLM.forward.example",$$slots:{default:[Yy]},$$scope:{ctx:E}}}),Ms=new xe({}),qs=new Y({props:{name:"class transformers.RemBertForMaskedLM",anchor:"transformers.RemBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_rembert.py#L920"}}),Cs=new Y({props:{name:"forward",anchor:"transformers.RemBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_rembert.py#L942",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new je({props:{$$slots:{default:[Zy]},$$scope:{ctx:E}}}),So=new we({props:{anchor:"transformers.RemBertForMaskedLM.forward.example",$$slots:{default:[e1]},$$scope:{ctx:E}}}),Io=new we({props:{anchor:"transformers.RemBertForMaskedLM.forward.example-2",$$slots:{default:[t1]},$$scope:{ctx:E}}}),xs=new xe({}),js=new Y({props:{name:"class transformers.RemBertForSequenceClassification",anchor:"transformers.RemBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_rembert.py#L1176"}}),Os=new Y({props:{name:"forward",anchor:"transformers.RemBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_rembert.py#L1187",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Uo=new je({props:{$$slots:{default:[o1]},$$scope:{ctx:E}}}),Ho=new we({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example",$$slots:{default:[n1]},$$scope:{ctx:E}}}),Qo=new we({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example-2",$$slots:{default:[s1]},$$scope:{ctx:E}}}),Ko=new we({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example-3",$$slots:{default:[r1]},$$scope:{ctx:E}}}),Vo=new we({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example-4",$$slots:{default:[a1]},$$scope:{ctx:E}}}),Ds=new xe({}),As=new Y({props:{name:"class transformers.RemBertForMultipleChoice",anchor:"transformers.RemBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_rembert.py#L1273"}}),Is=new Y({props:{name:"forward",anchor:"transformers.RemBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_rembert.py#L1284",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Go=new je({props:{$$slots:{default:[i1]},$$scope:{ctx:E}}}),Xo=new we({props:{anchor:"transformers.RemBertForMultipleChoice.forward.example",$$slots:{default:[l1]},$$scope:{ctx:E}}}),Ws=new xe({}),Us=new Y({props:{name:"class transformers.RemBertForTokenClassification",anchor:"transformers.RemBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_rembert.py#L1365"}}),Ks=new Y({props:{name:"forward",anchor:"transformers.RemBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_rembert.py#L1377",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zo=new je({props:{$$slots:{default:[d1]},$$scope:{ctx:E}}}),en=new we({props:{anchor:"transformers.RemBertForTokenClassification.forward.example",$$slots:{default:[c1]},$$scope:{ctx:E}}}),tn=new we({props:{anchor:"transformers.RemBertForTokenClassification.forward.example-2",$$slots:{default:[p1]},$$scope:{ctx:E}}}),Vs=new xe({}),Js=new Y({props:{name:"class transformers.RemBertForQuestionAnswering",anchor:"transformers.RemBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_rembert.py#L1444"}}),Ys=new Y({props:{name:"forward",anchor:"transformers.RemBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RemBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_rembert.py#L1456",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
`}}),nn=new je({props:{$$slots:{default:[m1]},$$scope:{ctx:E}}}),sn=new we({props:{anchor:"transformers.RemBertForQuestionAnswering.forward.example",$$slots:{default:[h1]},$$scope:{ctx:E}}}),rn=new we({props:{anchor:"transformers.RemBertForQuestionAnswering.forward.example-2",$$slots:{default:[u1]},$$scope:{ctx:E}}}),Zs=new xe({}),er=new Y({props:{name:"class transformers.TFRemBertModel",anchor:"transformers.TFRemBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_tf_rembert.py#L931"}}),ln=new je({props:{$$slots:{default:[f1]},$$scope:{ctx:E}}}),sr=new Y({props:{name:"call",anchor:"transformers.TFRemBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFRemBertModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFRemBertModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFRemBertModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_tf_rembert.py#L937",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),dn=new je({props:{$$slots:{default:[g1]},$$scope:{ctx:E}}}),cn=new we({props:{anchor:"transformers.TFRemBertModel.call.example",$$slots:{default:[_1]},$$scope:{ctx:E}}}),rr=new xe({}),ar=new Y({props:{name:"class transformers.TFRemBertForMaskedLM",anchor:"transformers.TFRemBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_tf_rembert.py#L1024"}}),mn=new je({props:{$$slots:{default:[k1]},$$scope:{ctx:E}}}),pr=new Y({props:{name:"call",anchor:"transformers.TFRemBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_tf_rembert.py#L1040",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),hn=new je({props:{$$slots:{default:[b1]},$$scope:{ctx:E}}}),un=new we({props:{anchor:"transformers.TFRemBertForMaskedLM.call.example",$$slots:{default:[v1]},$$scope:{ctx:E}}}),fn=new we({props:{anchor:"transformers.TFRemBertForMaskedLM.call.example-2",$$slots:{default:[T1]},$$scope:{ctx:E}}}),mr=new xe({}),hr=new Y({props:{name:"class transformers.TFRemBertForCausalLM",anchor:"transformers.TFRemBertForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_tf_rembert.py#L1105"}}),_n=new je({props:{$$slots:{default:[y1]},$$scope:{ctx:E}}}),kr=new Y({props:{name:"call",anchor:"transformers.TFRemBertForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_tf_rembert.py#L1131",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),kn=new we({props:{anchor:"transformers.TFRemBertForCausalLM.call.example",$$slots:{default:[w1]},$$scope:{ctx:E}}}),yr=new xe({}),wr=new Y({props:{name:"class transformers.TFRemBertForSequenceClassification",anchor:"transformers.TFRemBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_tf_rembert.py#L1247"}}),vn=new je({props:{$$slots:{default:[$1]},$$scope:{ctx:E}}}),Er=new Y({props:{name:"call",anchor:"transformers.TFRemBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_tf_rembert.py#L1261",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tn=new je({props:{$$slots:{default:[F1]},$$scope:{ctx:E}}}),yn=new we({props:{anchor:"transformers.TFRemBertForSequenceClassification.call.example",$$slots:{default:[R1]},$$scope:{ctx:E}}}),wn=new we({props:{anchor:"transformers.TFRemBertForSequenceClassification.call.example-2",$$slots:{default:[E1]},$$scope:{ctx:E}}}),Br=new xe({}),Mr=new Y({props:{name:"class transformers.TFRemBertForMultipleChoice",anchor:"transformers.TFRemBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_tf_rembert.py#L1331"}}),Fn=new je({props:{$$slots:{default:[B1]},$$scope:{ctx:E}}}),xr=new Y({props:{name:"call",anchor:"transformers.TFRemBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_tf_rembert.py#L1351",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, )</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Rn=new je({props:{$$slots:{default:[M1]},$$scope:{ctx:E}}}),En=new we({props:{anchor:"transformers.TFRemBertForMultipleChoice.call.example",$$slots:{default:[q1]},$$scope:{ctx:E}}}),jr=new xe({}),Lr=new Y({props:{name:"class transformers.TFRemBertForTokenClassification",anchor:"transformers.TFRemBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_tf_rembert.py#L1458"}}),Mn=new je({props:{$$slots:{default:[z1]},$$scope:{ctx:E}}}),Ar=new Y({props:{name:"call",anchor:"transformers.TFRemBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_tf_rembert.py#L1470",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),qn=new je({props:{$$slots:{default:[C1]},$$scope:{ctx:E}}}),zn=new we({props:{anchor:"transformers.TFRemBertForTokenClassification.call.example",$$slots:{default:[x1]},$$scope:{ctx:E}}}),Cn=new we({props:{anchor:"transformers.TFRemBertForTokenClassification.call.example-2",$$slots:{default:[j1]},$$scope:{ctx:E}}}),Nr=new xe({}),Sr=new Y({props:{name:"class transformers.TFRemBertForQuestionAnswering",anchor:"transformers.TFRemBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_tf_rembert.py#L1538"}}),jn=new je({props:{$$slots:{default:[L1]},$$scope:{ctx:E}}}),Hr=new Y({props:{name:"call",anchor:"transformers.TFRemBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/rembert/modeling_tf_rembert.py#L1549",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
`}}),Ln=new je({props:{$$slots:{default:[P1]},$$scope:{ctx:E}}}),Pn=new we({props:{anchor:"transformers.TFRemBertForQuestionAnswering.call.example",$$slots:{default:[O1]},$$scope:{ctx:E}}}),On=new we({props:{anchor:"transformers.TFRemBertForQuestionAnswering.call.example-2",$$slots:{default:[D1]},$$scope:{ctx:E}}}),{c(){d=r("meta"),g=m(),c=r("h1"),p=r("a"),k=r("span"),T(l.$$.fragment),u=m(),M=r("span"),ue=n("RemBERT"),X=m(),q=r("h2"),te=r("a"),N=r("span"),T(ne.$$.fragment),fe=m(),S=r("span"),ge=n("Overview"),pe=m(),J=r("p"),O=n("The RemBERT model was proposed in "),se=r("a"),Z=n("Rethinking Embedding Coupling in Pre-trained Language Models"),z=n(" by Hyung Won Chung, Thibault F\xE9vry, Henry Tsai, Melvin Johnson, Sebastian Ruder."),x=m(),ae=r("p"),H=n("The abstract from the paper is the following:"),me=m(),ie=r("p"),I=r("em"),_e=n(`We re-evaluate the standard practice of sharing weights between input and output embeddings in state-of-the-art
pre-trained language models. We show that decoupled embeddings provide increased modeling flexibility, allowing us to
significantly improve the efficiency of parameter allocation in the input embedding of multilingual models. By
reallocating the input embedding parameters in the Transformer layers, we achieve dramatically better performance on
standard natural language understanding tasks with the same number of parameters during fine-tuning. We also show that
allocating additional capacity to the output embedding provides benefits to the model that persist through the
fine-tuning stage even though the output embedding is discarded after pre-training. Our analysis shows that larger
output embeddings prevent the model\u2019s last layers from overspecializing to the pre-training task and encourage
Transformer representations to be more general and more transferable to other tasks and languages. Harnessing these
findings, we are able to train models that achieve strong performance on the XTREME benchmark without increasing the
number of parameters at the fine-tuning stage.`),he=m(),C=r("p"),ke=n("Tips:"),W=m(),le=r("p"),be=n(`For fine-tuning, RemBERT can be thought of as a bigger version of mBERT with an ALBERT-like factorization of the
embedding layer. The embeddings are not tied in pre-training, in contrast with BERT, which enables smaller input
embeddings (preserved during fine-tuning) and bigger output embeddings (discarded at fine-tuning). The tokenizer is
also similar to the Albert one rather than the BERT one.`),U=m(),ee=r("h2"),oe=r("a"),L=r("span"),T(re.$$.fragment),Q=m(),ce=r("span"),f=n("RemBertConfig"),B=m(),P=r("div"),T(Te.$$.fragment),Re=m(),j=r("p"),Ee=n("This is the configuration class to store the configuration of a "),ye=r("a"),Be=n("RemBertModel"),D=n(`. It is used to instantiate an
RemBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the remert-large architecture.`),K=m(),ve=r("p"),Me=n("Configuration objects inherit from "),A=r("a"),qe=n("PretrainedConfig"),ze=n(` and can be used to control the model outputs. Read the
documentation from `),de=r("a"),Ce=n("PretrainedConfig"),Tp=n(" for more information."),yp=m(),T(yo.$$.fragment),wp=m(),Ga=r("blockquote"),Xa=r("blockquote"),Ya=r("blockquote"),Za=r("p"),$p=n(`from transformers import RemBertModel, RemBertConfig >>> # Initializing a RemBERT rembert style
configuration >>> configuration = RemBertConfig()`),Fp=m(),ei=r("blockquote"),ti=r("blockquote"),oi=r("blockquote"),wo=r("h1"),$o=r("a"),ni=r("span"),T(Gn.$$.fragment),Rp=m(),si=r("span"),Ep=n("Initializing a model from the rembert style configuration >>> model = RemBertModel(configuration)"),Bp=m(),ri=r("blockquote"),ai=r("blockquote"),ii=r("blockquote"),Fo=r("h1"),Ro=r("a"),li=r("span"),T(Xn.$$.fragment),Mp=m(),di=r("span"),qp=n("Accessing the model configuration >>> configuration = model.config"),Vd=m(),Nt=r("h2"),Eo=r("a"),ci=r("span"),T(Yn.$$.fragment),zp=m(),pi=r("span"),Cp=n("RemBertTokenizer"),Jd=m(),Le=r("div"),T(Zn.$$.fragment),xp=m(),es=r("p"),jp=n("Construct a RemBERT tokenizer. Based on "),ts=r("a"),Lp=n("SentencePiece"),Pp=n("."),Op=m(),os=r("p"),Dp=n("This tokenizer inherits from "),ea=r("a"),Ap=n("PreTrainedTokenizer"),Np=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Sp=m(),Mt=r("div"),T(ns.$$.fragment),Ip=m(),mi=r("p"),Wp=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A REMBERT sequence has the following format:`),Up=m(),ss=r("ul"),ta=r("li"),Hp=n("single sequence: "),hi=r("code"),Qp=n("[CLS] X [SEP]"),Kp=m(),oa=r("li"),Vp=n("pair of sequences: "),ui=r("code"),Jp=n("[CLS] A [SEP] B [SEP]"),Gp=m(),Bo=r("div"),T(rs.$$.fragment),Xp=m(),as=r("p"),Yp=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fi=r("code"),Zp=n("prepare_for_model"),em=n(" method."),tm=m(),pt=r("div"),T(is.$$.fragment),om=m(),gi=r("p"),nm=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT"),sm=m(),T(Mo.$$.fragment),rm=m(),St=r("p"),am=n("If "),_i=r("code"),im=n("token_ids_1"),lm=n(" is "),ki=r("code"),dm=n("None"),cm=n(", this method only returns the first portion of the mask (0s)."),pm=m(),na=r("div"),T(ls.$$.fragment),Gd=m(),It=r("h2"),qo=r("a"),bi=r("span"),T(ds.$$.fragment),mm=m(),vi=r("span"),hm=n("RemBertTokenizerFast"),Xd=m(),De=r("div"),T(cs.$$.fragment),um=m(),Rt=r("p"),fm=n("Construct a \u201Cfast\u201D RemBert tokenizer (backed by HuggingFace\u2019s "),Ti=r("em"),gm=n("tokenizers"),_m=n(` library). Based on
`),ps=r("a"),km=n("Unigram"),bm=n(`. This
tokenizer inherits from `),sa=r("a"),vm=n("PreTrainedTokenizerFast"),Tm=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),ym=m(),qt=r("div"),T(ms.$$.fragment),wm=m(),yi=r("p"),$m=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RemBERT sequence has the following format:`),Fm=m(),hs=r("ul"),ra=r("li"),Rm=n("single sequence: "),wi=r("code"),Em=n("[CLS] X [SEP]"),Bm=m(),aa=r("li"),Mm=n("pair of sequences: "),$i=r("code"),qm=n("[CLS] A [SEP] B [SEP]"),zm=m(),zo=r("div"),T(us.$$.fragment),Cm=m(),fs=r("p"),xm=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Fi=r("code"),jm=n("prepare_for_model"),Lm=n(" method."),Pm=m(),mt=r("div"),T(gs.$$.fragment),Om=m(),Ri=r("p"),Dm=n("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT"),Am=m(),T(Co.$$.fragment),Nm=m(),Ei=r("p"),Sm=n("if token_ids_1 is None, only returns the first portion of the mask (0s)."),Im=m(),ia=r("div"),T(_s.$$.fragment),Yd=m(),Wt=r("h2"),xo=r("a"),Bi=r("span"),T(ks.$$.fragment),Wm=m(),Mi=r("span"),Um=n("RemBertModel"),Zd=m(),Je=r("div"),T(bs.$$.fragment),Hm=m(),vs=r("p"),Qm=n(`The bare RemBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ts=r("a"),Km=n("torch.nn.Module"),Vm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jm=m(),ys=r("p"),Gm=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),ws=r("a"),Xm=n(`Attention is
all you need`),Ym=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Zm=m(),Ae=r("p"),eh=n("To behave as an decoder the model needs to be initialized with the "),qi=r("code"),th=n("is_decoder"),oh=n(` argument of the configuration set
to `),zi=r("code"),nh=n("True"),sh=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),Ci=r("code"),rh=n("is_decoder"),ah=n(` argument and
`),xi=r("code"),ih=n("add_cross_attention"),lh=n(" set to "),ji=r("code"),dh=n("True"),ch=n("; an "),Li=r("code"),ph=n("encoder_hidden_states"),mh=n(" is then expected as an input to the forward pass."),hh=m(),ht=r("div"),T($s.$$.fragment),uh=m(),Ut=r("p"),fh=n("The "),la=r("a"),gh=n("RemBertModel"),_h=n(" forward method, overrides the "),Pi=r("code"),kh=n("__call__"),bh=n(" special method."),vh=m(),T(jo.$$.fragment),Th=m(),T(Lo.$$.fragment),ec=m(),Ht=r("h2"),Po=r("a"),Oi=r("span"),T(Fs.$$.fragment),yh=m(),Di=r("span"),wh=n("RemBertForCausalLM"),tc=m(),Et=r("div"),T(Rs.$$.fragment),$h=m(),Qt=r("p"),Fh=n("RemBERT Model with a "),Ai=r("code"),Rh=n("language modeling"),Eh=n(` head on top for CLM fine-tuning.
This model is a PyTorch `),Es=r("a"),Bh=n("torch.nn.Module"),Mh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qh=m(),ut=r("div"),T(Bs.$$.fragment),zh=m(),Kt=r("p"),Ch=n("The "),da=r("a"),xh=n("RemBertForCausalLM"),jh=n(" forward method, overrides the "),Ni=r("code"),Lh=n("__call__"),Ph=n(" special method."),Oh=m(),T(Oo.$$.fragment),Dh=m(),T(Do.$$.fragment),oc=m(),Vt=r("h2"),Ao=r("a"),Si=r("span"),T(Ms.$$.fragment),Ah=m(),Ii=r("span"),Nh=n("RemBertForMaskedLM"),nc=m(),Bt=r("div"),T(qs.$$.fragment),Sh=m(),Jt=r("p"),Ih=n("RemBERT Model with a "),Wi=r("code"),Wh=n("language modeling"),Uh=n(` head on top.
This model is a PyTorch `),zs=r("a"),Hh=n("torch.nn.Module"),Qh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kh=m(),Ge=r("div"),T(Cs.$$.fragment),Vh=m(),Gt=r("p"),Jh=n("The "),ca=r("a"),Gh=n("RemBertForMaskedLM"),Xh=n(" forward method, overrides the "),Ui=r("code"),Yh=n("__call__"),Zh=n(" special method."),eu=m(),T(No.$$.fragment),tu=m(),T(So.$$.fragment),ou=m(),T(Io.$$.fragment),sc=m(),Xt=r("h2"),Wo=r("a"),Hi=r("span"),T(xs.$$.fragment),nu=m(),Qi=r("span"),su=n("RemBertForSequenceClassification"),rc=m(),it=r("div"),T(js.$$.fragment),ru=m(),Ki=r("p"),au=n(`RemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),iu=m(),Ls=r("p"),lu=n("This model is a PyTorch "),Ps=r("a"),du=n("torch.nn.Module"),cu=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pu=m(),Oe=r("div"),T(Os.$$.fragment),mu=m(),Yt=r("p"),hu=n("The "),pa=r("a"),uu=n("RemBertForSequenceClassification"),fu=n(" forward method, overrides the "),Vi=r("code"),gu=n("__call__"),_u=n(" special method."),ku=m(),T(Uo.$$.fragment),bu=m(),T(Ho.$$.fragment),vu=m(),T(Qo.$$.fragment),Tu=m(),T(Ko.$$.fragment),yu=m(),T(Vo.$$.fragment),ac=m(),Zt=r("h2"),Jo=r("a"),Ji=r("span"),T(Ds.$$.fragment),wu=m(),Gi=r("span"),$u=n("RemBertForMultipleChoice"),ic=m(),lt=r("div"),T(As.$$.fragment),Fu=m(),Xi=r("p"),Ru=n(`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Eu=m(),Ns=r("p"),Bu=n("This model is a PyTorch "),Ss=r("a"),Mu=n("torch.nn.Module"),qu=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zu=m(),ft=r("div"),T(Is.$$.fragment),Cu=m(),eo=r("p"),xu=n("The "),ma=r("a"),ju=n("RemBertForMultipleChoice"),Lu=n(" forward method, overrides the "),Yi=r("code"),Pu=n("__call__"),Ou=n(" special method."),Du=m(),T(Go.$$.fragment),Au=m(),T(Xo.$$.fragment),lc=m(),to=r("h2"),Yo=r("a"),Zi=r("span"),T(Ws.$$.fragment),Nu=m(),el=r("span"),Su=n("RemBertForTokenClassification"),dc=m(),dt=r("div"),T(Us.$$.fragment),Iu=m(),tl=r("p"),Wu=n(`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Uu=m(),Hs=r("p"),Hu=n("This model is a PyTorch "),Qs=r("a"),Qu=n("torch.nn.Module"),Ku=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vu=m(),Xe=r("div"),T(Ks.$$.fragment),Ju=m(),oo=r("p"),Gu=n("The "),ha=r("a"),Xu=n("RemBertForTokenClassification"),Yu=n(" forward method, overrides the "),ol=r("code"),Zu=n("__call__"),ef=n(" special method."),tf=m(),T(Zo.$$.fragment),of=m(),T(en.$$.fragment),nf=m(),T(tn.$$.fragment),cc=m(),no=r("h2"),on=r("a"),nl=r("span"),T(Vs.$$.fragment),sf=m(),sl=r("span"),rf=n("RemBertForQuestionAnswering"),pc=m(),ct=r("div"),T(Js.$$.fragment),af=m(),so=r("p"),lf=n(`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rl=r("code"),df=n("span start logits"),cf=n(" and "),al=r("code"),pf=n("span end logits"),mf=n(")."),hf=m(),Gs=r("p"),uf=n("This model is a PyTorch "),Xs=r("a"),ff=n("torch.nn.Module"),gf=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_f=m(),Ye=r("div"),T(Ys.$$.fragment),kf=m(),ro=r("p"),bf=n("The "),ua=r("a"),vf=n("RemBertForQuestionAnswering"),Tf=n(" forward method, overrides the "),il=r("code"),yf=n("__call__"),wf=n(" special method."),$f=m(),T(nn.$$.fragment),Ff=m(),T(sn.$$.fragment),Rf=m(),T(rn.$$.fragment),mc=m(),ao=r("h2"),an=r("a"),ll=r("span"),T(Zs.$$.fragment),Ef=m(),dl=r("span"),Bf=n("TFRemBertModel"),hc=m(),Ne=r("div"),T(er.$$.fragment),Mf=m(),cl=r("p"),qf=n("The bare RemBERT Model transformer outputing raw hidden-states without any specific head on top."),zf=m(),tr=r("p"),Cf=n("This model inherits from "),fa=r("a"),xf=n("TFPreTrainedModel"),jf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lf=m(),or=r("p"),Pf=n("This model is also a "),nr=r("a"),Of=n("tf.keras.Model"),Df=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Af=m(),T(ln.$$.fragment),Nf=m(),gt=r("div"),T(sr.$$.fragment),Sf=m(),io=r("p"),If=n("The "),ga=r("a"),Wf=n("TFRemBertModel"),Uf=n(" forward method, overrides the "),pl=r("code"),Hf=n("__call__"),Qf=n(" special method."),Kf=m(),T(dn.$$.fragment),Vf=m(),T(cn.$$.fragment),uc=m(),lo=r("h2"),pn=r("a"),ml=r("span"),T(rr.$$.fragment),Jf=m(),hl=r("span"),Gf=n("TFRemBertForMaskedLM"),fc=m(),Se=r("div"),T(ar.$$.fragment),Xf=m(),ir=r("p"),Yf=n("RemBERT Model with a "),ul=r("code"),Zf=n("language modeling"),eg=n(" head on top."),tg=m(),lr=r("p"),og=n("This model inherits from "),_a=r("a"),ng=n("TFPreTrainedModel"),sg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rg=m(),dr=r("p"),ag=n("This model is also a "),cr=r("a"),ig=n("tf.keras.Model"),lg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dg=m(),T(mn.$$.fragment),cg=m(),Ze=r("div"),T(pr.$$.fragment),pg=m(),co=r("p"),mg=n("The "),ka=r("a"),hg=n("TFRemBertForMaskedLM"),ug=n(" forward method, overrides the "),fl=r("code"),fg=n("__call__"),gg=n(" special method."),_g=m(),T(hn.$$.fragment),kg=m(),T(un.$$.fragment),bg=m(),T(fn.$$.fragment),gc=m(),po=r("h2"),gn=r("a"),gl=r("span"),T(mr.$$.fragment),vg=m(),_l=r("span"),Tg=n("TFRemBertForCausalLM"),_c=m(),Ie=r("div"),T(hr.$$.fragment),yg=m(),ur=r("p"),wg=n("RemBERT Model with a "),kl=r("code"),$g=n("language modeling"),Fg=n(" head on top for CLM fine-tuning."),Rg=m(),fr=r("p"),Eg=n("This model inherits from "),ba=r("a"),Bg=n("TFPreTrainedModel"),Mg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qg=m(),gr=r("p"),zg=n("This model is also a "),_r=r("a"),Cg=n("tf.keras.Model"),xg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jg=m(),T(_n.$$.fragment),Lg=m(),et=r("div"),T(kr.$$.fragment),Pg=m(),Pe=r("p"),Og=n("encoder_hidden_states  ("),bl=r("code"),Dg=n("tf.Tensor"),Ag=n(" of shape "),vl=r("code"),Ng=n("(batch_size, sequence_length, hidden_size)"),Sg=n(", "),Tl=r("em"),Ig=n("optional"),Wg=n(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),yl=r("code"),Ug=n("tf.Tensor"),Hg=n(" of shape "),wl=r("code"),Qg=n("(batch_size, sequence_length)"),Kg=n(", "),$l=r("em"),Vg=n("optional"),Jg=n(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),Fl=r("code"),Gg=n("[0, 1]"),Xg=n(":"),Yg=m(),br=r("ul"),vr=r("li"),Zg=n("1 for tokens that are "),Rl=r("strong"),e_=n("not masked"),t_=n(","),o_=m(),Tr=r("li"),n_=n("0 for tokens that are "),El=r("strong"),s_=n("masked"),r_=n("."),a_=m(),V=r("p"),i_=n("past_key_values ("),Bl=r("code"),l_=n("Tuple[Tuple[tf.Tensor]]"),d_=n(" of length "),Ml=r("code"),c_=n("config.n_layers"),p_=n(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),ql=r("code"),m_=n("past_key_values"),h_=n(" are used, the user can optionally input only the last "),zl=r("code"),u_=n("decoder_input_ids"),f_=n(` (those that
don\u2019t have their past key value states given to this model) of shape `),Cl=r("code"),g_=n("(batch_size, 1)"),__=n(` instead of all
`),xl=r("code"),k_=n("decoder_input_ids"),b_=n(" of shape "),jl=r("code"),v_=n("(batch_size, sequence_length)"),T_=n(`.
use_cache (`),Ll=r("code"),y_=n("bool"),w_=n(", "),Pl=r("em"),$_=n("optional"),F_=n(", defaults to "),Ol=r("code"),R_=n("True"),E_=n(`):
If set to `),Dl=r("code"),B_=n("True"),M_=n(", "),Al=r("code"),q_=n("past_key_values"),z_=n(` key value states are returned and can be used to speed up decoding (see
`),Nl=r("code"),C_=n("past_key_values"),x_=n("). Set to "),Sl=r("code"),j_=n("False"),L_=n(" during training, "),Il=r("code"),P_=n("True"),O_=n(` during generation
labels (`),Wl=r("code"),D_=n("tf.Tensor"),A_=n(" or "),Ul=r("code"),N_=n("np.ndarray"),S_=n(" of shape "),Hl=r("code"),I_=n("(batch_size, sequence_length)"),W_=n(", "),Ql=r("em"),U_=n("optional"),H_=n(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Kl=r("code"),Q_=n("[0, ..., config.vocab_size - 1]"),K_=n("."),V_=m(),T(kn.$$.fragment),kc=m(),mo=r("h2"),bn=r("a"),Vl=r("span"),T(yr.$$.fragment),J_=m(),Jl=r("span"),G_=n("TFRemBertForSequenceClassification"),bc=m(),We=r("div"),T(wr.$$.fragment),X_=m(),Gl=r("p"),Y_=n("RemBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),Z_=m(),$r=r("p"),ek=n("This model inherits from "),va=r("a"),tk=n("TFPreTrainedModel"),ok=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nk=m(),Fr=r("p"),sk=n("This model is also a "),Rr=r("a"),rk=n("tf.keras.Model"),ak=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ik=m(),T(vn.$$.fragment),lk=m(),tt=r("div"),T(Er.$$.fragment),dk=m(),ho=r("p"),ck=n("The "),Ta=r("a"),pk=n("TFRemBertForSequenceClassification"),mk=n(" forward method, overrides the "),Xl=r("code"),hk=n("__call__"),uk=n(" special method."),fk=m(),T(Tn.$$.fragment),gk=m(),T(yn.$$.fragment),_k=m(),T(wn.$$.fragment),vc=m(),uo=r("h2"),$n=r("a"),Yl=r("span"),T(Br.$$.fragment),kk=m(),Zl=r("span"),bk=n("TFRemBertForMultipleChoice"),Tc=m(),Ue=r("div"),T(Mr.$$.fragment),vk=m(),ed=r("p"),Tk=n(`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),yk=m(),qr=r("p"),wk=n("This model inherits from "),ya=r("a"),$k=n("TFPreTrainedModel"),Fk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rk=m(),zr=r("p"),Ek=n("This model is also a "),Cr=r("a"),Bk=n("tf.keras.Model"),Mk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qk=m(),T(Fn.$$.fragment),zk=m(),_t=r("div"),T(xr.$$.fragment),Ck=m(),fo=r("p"),xk=n("The "),wa=r("a"),jk=n("TFRemBertForMultipleChoice"),Lk=n(" forward method, overrides the "),td=r("code"),Pk=n("__call__"),Ok=n(" special method."),Dk=m(),T(Rn.$$.fragment),Ak=m(),T(En.$$.fragment),yc=m(),go=r("h2"),Bn=r("a"),od=r("span"),T(jr.$$.fragment),Nk=m(),nd=r("span"),Sk=n("TFRemBertForTokenClassification"),wc=m(),He=r("div"),T(Lr.$$.fragment),Ik=m(),sd=r("p"),Wk=n(`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Uk=m(),Pr=r("p"),Hk=n("This model inherits from "),$a=r("a"),Qk=n("TFPreTrainedModel"),Kk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vk=m(),Or=r("p"),Jk=n("This model is also a "),Dr=r("a"),Gk=n("tf.keras.Model"),Xk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yk=m(),T(Mn.$$.fragment),Zk=m(),ot=r("div"),T(Ar.$$.fragment),eb=m(),_o=r("p"),tb=n("The "),Fa=r("a"),ob=n("TFRemBertForTokenClassification"),nb=n(" forward method, overrides the "),rd=r("code"),sb=n("__call__"),rb=n(" special method."),ab=m(),T(qn.$$.fragment),ib=m(),T(zn.$$.fragment),lb=m(),T(Cn.$$.fragment),$c=m(),ko=r("h2"),xn=r("a"),ad=r("span"),T(Nr.$$.fragment),db=m(),id=r("span"),cb=n("TFRemBertForQuestionAnswering"),Fc=m(),Qe=r("div"),T(Sr.$$.fragment),pb=m(),bo=r("p"),mb=n(`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ld=r("code"),hb=n("span start logits"),ub=n(" and "),dd=r("code"),fb=n("span end logits"),gb=n(")."),_b=m(),Ir=r("p"),kb=n("This model inherits from "),Ra=r("a"),bb=n("TFPreTrainedModel"),vb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tb=m(),Wr=r("p"),yb=n("This model is also a "),Ur=r("a"),wb=n("tf.keras.Model"),$b=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fb=m(),T(jn.$$.fragment),Rb=m(),nt=r("div"),T(Hr.$$.fragment),Eb=m(),vo=r("p"),Bb=n("The "),Ea=r("a"),Mb=n("TFRemBertForQuestionAnswering"),qb=n(" forward method, overrides the "),cd=r("code"),zb=n("__call__"),Cb=n(" special method."),xb=m(),T(Ln.$$.fragment),jb=m(),T(Pn.$$.fragment),Lb=m(),T(On.$$.fragment),this.h()},l(o){const v=Uy('[data-svelte="svelte-1phssyn"]',document.head);d=a(v,"META",{name:!0,content:!0}),v.forEach(t),g=h(o),c=a(o,"H1",{class:!0});var Qr=i(c);p=a(Qr,"A",{id:!0,class:!0,href:!0});var pd=i(p);k=a(pd,"SPAN",{});var md=i(k);y(l.$$.fragment,md),md.forEach(t),pd.forEach(t),u=h(Qr),M=a(Qr,"SPAN",{});var hd=i(M);ue=s(hd,"RemBERT"),hd.forEach(t),Qr.forEach(t),X=h(o),q=a(o,"H2",{class:!0});var Kr=i(q);te=a(Kr,"A",{id:!0,class:!0,href:!0});var ud=i(te);N=a(ud,"SPAN",{});var fd=i(N);y(ne.$$.fragment,fd),fd.forEach(t),ud.forEach(t),fe=h(Kr),S=a(Kr,"SPAN",{});var gd=i(S);ge=s(gd,"Overview"),gd.forEach(t),Kr.forEach(t),pe=h(o),J=a(o,"P",{});var Vr=i(J);O=s(Vr,"The RemBERT model was proposed in "),se=a(Vr,"A",{href:!0,rel:!0});var _d=i(se);Z=s(_d,"Rethinking Embedding Coupling in Pre-trained Language Models"),_d.forEach(t),z=s(Vr," by Hyung Won Chung, Thibault F\xE9vry, Henry Tsai, Melvin Johnson, Sebastian Ruder."),Vr.forEach(t),x=h(o),ae=a(o,"P",{});var kd=i(ae);H=s(kd,"The abstract from the paper is the following:"),kd.forEach(t),me=h(o),ie=a(o,"P",{});var bd=i(ie);I=a(bd,"EM",{});var vd=i(I);_e=s(vd,`We re-evaluate the standard practice of sharing weights between input and output embeddings in state-of-the-art
pre-trained language models. We show that decoupled embeddings provide increased modeling flexibility, allowing us to
significantly improve the efficiency of parameter allocation in the input embedding of multilingual models. By
reallocating the input embedding parameters in the Transformer layers, we achieve dramatically better performance on
standard natural language understanding tasks with the same number of parameters during fine-tuning. We also show that
allocating additional capacity to the output embedding provides benefits to the model that persist through the
fine-tuning stage even though the output embedding is discarded after pre-training. Our analysis shows that larger
output embeddings prevent the model\u2019s last layers from overspecializing to the pre-training task and encourage
Transformer representations to be more general and more transferable to other tasks and languages. Harnessing these
findings, we are able to train models that achieve strong performance on the XTREME benchmark without increasing the
number of parameters at the fine-tuning stage.`),vd.forEach(t),bd.forEach(t),he=h(o),C=a(o,"P",{});var Td=i(C);ke=s(Td,"Tips:"),Td.forEach(t),W=h(o),le=a(o,"P",{});var yd=i(le);be=s(yd,`For fine-tuning, RemBERT can be thought of as a bigger version of mBERT with an ALBERT-like factorization of the
embedding layer. The embeddings are not tied in pre-training, in contrast with BERT, which enables smaller input
embeddings (preserved during fine-tuning) and bigger output embeddings (discarded at fine-tuning). The tokenizer is
also similar to the Albert one rather than the BERT one.`),yd.forEach(t),U=h(o),ee=a(o,"H2",{class:!0});var Jr=i(ee);oe=a(Jr,"A",{id:!0,class:!0,href:!0});var wd=i(oe);L=a(wd,"SPAN",{});var $d=i(L);y(re.$$.fragment,$d),$d.forEach(t),wd.forEach(t),Q=h(Jr),ce=a(Jr,"SPAN",{});var Fd=i(ce);f=s(Fd,"RemBertConfig"),Fd.forEach(t),Jr.forEach(t),B=h(o),P=a(o,"DIV",{class:!0});var Ke=i(P);y(Te.$$.fragment,Ke),Re=h(Ke),j=a(Ke,"P",{});var Gr=i(j);Ee=s(Gr,"This is the configuration class to store the configuration of a "),ye=a(Gr,"A",{href:!0});var Rd=i(ye);Be=s(Rd,"RemBertModel"),Rd.forEach(t),D=s(Gr,`. It is used to instantiate an
RemBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the remert-large architecture.`),Gr.forEach(t),K=h(Ke),ve=a(Ke,"P",{});var To=i(ve);Me=s(To,"Configuration objects inherit from "),A=a(To,"A",{href:!0});var Ed=i(A);qe=s(Ed,"PretrainedConfig"),Ed.forEach(t),ze=s(To,` and can be used to control the model outputs. Read the
documentation from `),de=a(To,"A",{href:!0});var Bd=i(de);Ce=s(Bd,"PretrainedConfig"),Bd.forEach(t),Tp=s(To," for more information."),To.forEach(t),yp=h(Ke),y(yo.$$.fragment,Ke),wp=h(Ke),Ga=a(Ke,"BLOCKQUOTE",{});var Md=i(Ga);Xa=a(Md,"BLOCKQUOTE",{});var qd=i(Xa);Ya=a(qd,"BLOCKQUOTE",{});var zd=i(Ya);Za=a(zd,"P",{});var Cd=i(Za);$p=s(Cd,`from transformers import RemBertModel, RemBertConfig >>> # Initializing a RemBERT rembert style
configuration >>> configuration = RemBertConfig()`),Cd.forEach(t),zd.forEach(t),qd.forEach(t),Md.forEach(t),Fp=h(Ke),ei=a(Ke,"BLOCKQUOTE",{});var xd=i(ei);ti=a(xd,"BLOCKQUOTE",{});var jd=i(ti);oi=a(jd,"BLOCKQUOTE",{});var Ld=i(oi);wo=a(Ld,"H1",{class:!0});var Xr=i(wo);$o=a(Xr,"A",{id:!0,class:!0,href:!0});var Pd=i($o);ni=a(Pd,"SPAN",{});var Od=i(ni);y(Gn.$$.fragment,Od),Od.forEach(t),Pd.forEach(t),Rp=h(Xr),si=a(Xr,"SPAN",{});var Dd=i(si);Ep=s(Dd,"Initializing a model from the rembert style configuration >>> model = RemBertModel(configuration)"),Dd.forEach(t),Xr.forEach(t),Ld.forEach(t),jd.forEach(t),xd.forEach(t),Bp=h(Ke),ri=a(Ke,"BLOCKQUOTE",{});var Ad=i(ri);ai=a(Ad,"BLOCKQUOTE",{});var Nd=i(ai);ii=a(Nd,"BLOCKQUOTE",{});var Sd=i(ii);Fo=a(Sd,"H1",{class:!0});var Yr=i(Fo);Ro=a(Yr,"A",{id:!0,class:!0,href:!0});var Id=i(Ro);li=a(Id,"SPAN",{});var Wd=i(li);y(Xn.$$.fragment,Wd),Wd.forEach(t),Id.forEach(t),Mp=h(Yr),di=a(Yr,"SPAN",{});var Ud=i(di);qp=s(Ud,"Accessing the model configuration >>> configuration = model.config"),Ud.forEach(t),Yr.forEach(t),Sd.forEach(t),Nd.forEach(t),Ad.forEach(t),Ke.forEach(t),Vd=h(o),Nt=a(o,"H2",{class:!0});var Zr=i(Nt);Eo=a(Zr,"A",{id:!0,class:!0,href:!0});var Hd=i(Eo);ci=a(Hd,"SPAN",{});var Qd=i(ci);y(Yn.$$.fragment,Qd),Qd.forEach(t),Hd.forEach(t),zp=h(Zr),pi=a(Zr,"SPAN",{});var Kd=i(pi);Cp=s(Kd,"RemBertTokenizer"),Kd.forEach(t),Zr.forEach(t),Jd=h(o),Le=a(o,"DIV",{class:!0});var st=i(Le);y(Zn.$$.fragment,st),xp=h(st),es=a(st,"P",{});var Ec=i(es);jp=s(Ec,"Construct a RemBERT tokenizer. Based on "),ts=a(Ec,"A",{href:!0,rel:!0});var Nb=i(ts);Lp=s(Nb,"SentencePiece"),Nb.forEach(t),Pp=s(Ec,"."),Ec.forEach(t),Op=h(st),os=a(st,"P",{});var Bc=i(os);Dp=s(Bc,"This tokenizer inherits from "),ea=a(Bc,"A",{href:!0});var Sb=i(ea);Ap=s(Sb,"PreTrainedTokenizer"),Sb.forEach(t),Np=s(Bc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Bc.forEach(t),Sp=h(st),Mt=a(st,"DIV",{class:!0});var Ba=i(Mt);y(ns.$$.fragment,Ba),Ip=h(Ba),mi=a(Ba,"P",{});var Ib=i(mi);Wp=s(Ib,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A REMBERT sequence has the following format:`),Ib.forEach(t),Up=h(Ba),ss=a(Ba,"UL",{});var Mc=i(ss);ta=a(Mc,"LI",{});var Pb=i(ta);Hp=s(Pb,"single sequence: "),hi=a(Pb,"CODE",{});var Wb=i(hi);Qp=s(Wb,"[CLS] X [SEP]"),Wb.forEach(t),Pb.forEach(t),Kp=h(Mc),oa=a(Mc,"LI",{});var Ob=i(oa);Vp=s(Ob,"pair of sequences: "),ui=a(Ob,"CODE",{});var Ub=i(ui);Jp=s(Ub,"[CLS] A [SEP] B [SEP]"),Ub.forEach(t),Ob.forEach(t),Mc.forEach(t),Ba.forEach(t),Gp=h(st),Bo=a(st,"DIV",{class:!0});var qc=i(Bo);y(rs.$$.fragment,qc),Xp=h(qc),as=a(qc,"P",{});var zc=i(as);Yp=s(zc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fi=a(zc,"CODE",{});var Hb=i(fi);Zp=s(Hb,"prepare_for_model"),Hb.forEach(t),em=s(zc," method."),zc.forEach(t),qc.forEach(t),tm=h(st),pt=a(st,"DIV",{class:!0});var Dn=i(pt);y(is.$$.fragment,Dn),om=h(Dn),gi=a(Dn,"P",{});var Qb=i(gi);nm=s(Qb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT"),Qb.forEach(t),sm=h(Dn),y(Mo.$$.fragment,Dn),rm=h(Dn),St=a(Dn,"P",{});var Ma=i(St);am=s(Ma,"If "),_i=a(Ma,"CODE",{});var Kb=i(_i);im=s(Kb,"token_ids_1"),Kb.forEach(t),lm=s(Ma," is "),ki=a(Ma,"CODE",{});var Vb=i(ki);dm=s(Vb,"None"),Vb.forEach(t),cm=s(Ma,", this method only returns the first portion of the mask (0s)."),Ma.forEach(t),Dn.forEach(t),pm=h(st),na=a(st,"DIV",{class:!0});var Jb=i(na);y(ls.$$.fragment,Jb),Jb.forEach(t),st.forEach(t),Gd=h(o),It=a(o,"H2",{class:!0});var Cc=i(It);qo=a(Cc,"A",{id:!0,class:!0,href:!0});var Gb=i(qo);bi=a(Gb,"SPAN",{});var Xb=i(bi);y(ds.$$.fragment,Xb),Xb.forEach(t),Gb.forEach(t),mm=h(Cc),vi=a(Cc,"SPAN",{});var Yb=i(vi);hm=s(Yb,"RemBertTokenizerFast"),Yb.forEach(t),Cc.forEach(t),Xd=h(o),De=a(o,"DIV",{class:!0});var kt=i(De);y(cs.$$.fragment,kt),um=h(kt),Rt=a(kt,"P",{});var An=i(Rt);fm=s(An,"Construct a \u201Cfast\u201D RemBert tokenizer (backed by HuggingFace\u2019s "),Ti=a(An,"EM",{});var Zb=i(Ti);gm=s(Zb,"tokenizers"),Zb.forEach(t),_m=s(An,` library). Based on
`),ps=a(An,"A",{href:!0,rel:!0});var ev=i(ps);km=s(ev,"Unigram"),ev.forEach(t),bm=s(An,`. This
tokenizer inherits from `),sa=a(An,"A",{href:!0});var tv=i(sa);vm=s(tv,"PreTrainedTokenizerFast"),tv.forEach(t),Tm=s(An,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),An.forEach(t),ym=h(kt),qt=a(kt,"DIV",{class:!0});var qa=i(qt);y(ms.$$.fragment,qa),wm=h(qa),yi=a(qa,"P",{});var ov=i(yi);$m=s(ov,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RemBERT sequence has the following format:`),ov.forEach(t),Fm=h(qa),hs=a(qa,"UL",{});var xc=i(hs);ra=a(xc,"LI",{});var Db=i(ra);Rm=s(Db,"single sequence: "),wi=a(Db,"CODE",{});var nv=i(wi);Em=s(nv,"[CLS] X [SEP]"),nv.forEach(t),Db.forEach(t),Bm=h(xc),aa=a(xc,"LI",{});var Ab=i(aa);Mm=s(Ab,"pair of sequences: "),$i=a(Ab,"CODE",{});var sv=i($i);qm=s(sv,"[CLS] A [SEP] B [SEP]"),sv.forEach(t),Ab.forEach(t),xc.forEach(t),qa.forEach(t),zm=h(kt),zo=a(kt,"DIV",{class:!0});var jc=i(zo);y(us.$$.fragment,jc),Cm=h(jc),fs=a(jc,"P",{});var Lc=i(fs);xm=s(Lc,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Fi=a(Lc,"CODE",{});var rv=i(Fi);jm=s(rv,"prepare_for_model"),rv.forEach(t),Lm=s(Lc," method."),Lc.forEach(t),jc.forEach(t),Pm=h(kt),mt=a(kt,"DIV",{class:!0});var Nn=i(mt);y(gs.$$.fragment,Nn),Om=h(Nn),Ri=a(Nn,"P",{});var av=i(Ri);Dm=s(av,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT"),av.forEach(t),Am=h(Nn),y(Co.$$.fragment,Nn),Nm=h(Nn),Ei=a(Nn,"P",{});var iv=i(Ei);Sm=s(iv,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),iv.forEach(t),Nn.forEach(t),Im=h(kt),ia=a(kt,"DIV",{class:!0});var lv=i(ia);y(_s.$$.fragment,lv),lv.forEach(t),kt.forEach(t),Yd=h(o),Wt=a(o,"H2",{class:!0});var Pc=i(Wt);xo=a(Pc,"A",{id:!0,class:!0,href:!0});var dv=i(xo);Bi=a(dv,"SPAN",{});var cv=i(Bi);y(ks.$$.fragment,cv),cv.forEach(t),dv.forEach(t),Wm=h(Pc),Mi=a(Pc,"SPAN",{});var pv=i(Mi);Um=s(pv,"RemBertModel"),pv.forEach(t),Pc.forEach(t),Zd=h(o),Je=a(o,"DIV",{class:!0});var zt=i(Je);y(bs.$$.fragment,zt),Hm=h(zt),vs=a(zt,"P",{});var Oc=i(vs);Qm=s(Oc,`The bare RemBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ts=a(Oc,"A",{href:!0,rel:!0});var mv=i(Ts);Km=s(mv,"torch.nn.Module"),mv.forEach(t),Vm=s(Oc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Oc.forEach(t),Jm=h(zt),ys=a(zt,"P",{});var Dc=i(ys);Gm=s(Dc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),ws=a(Dc,"A",{href:!0,rel:!0});var hv=i(ws);Xm=s(hv,`Attention is
all you need`),hv.forEach(t),Ym=s(Dc,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Dc.forEach(t),Zm=h(zt),Ae=a(zt,"P",{});var rt=i(Ae);eh=s(rt,"To behave as an decoder the model needs to be initialized with the "),qi=a(rt,"CODE",{});var uv=i(qi);th=s(uv,"is_decoder"),uv.forEach(t),oh=s(rt,` argument of the configuration set
to `),zi=a(rt,"CODE",{});var fv=i(zi);nh=s(fv,"True"),fv.forEach(t),sh=s(rt,". To be used in a Seq2Seq model, the model needs to initialized with both "),Ci=a(rt,"CODE",{});var gv=i(Ci);rh=s(gv,"is_decoder"),gv.forEach(t),ah=s(rt,` argument and
`),xi=a(rt,"CODE",{});var _v=i(xi);ih=s(_v,"add_cross_attention"),_v.forEach(t),lh=s(rt," set to "),ji=a(rt,"CODE",{});var kv=i(ji);dh=s(kv,"True"),kv.forEach(t),ch=s(rt,"; an "),Li=a(rt,"CODE",{});var bv=i(Li);ph=s(bv,"encoder_hidden_states"),bv.forEach(t),mh=s(rt," is then expected as an input to the forward pass."),rt.forEach(t),hh=h(zt),ht=a(zt,"DIV",{class:!0});var Sn=i(ht);y($s.$$.fragment,Sn),uh=h(Sn),Ut=a(Sn,"P",{});var za=i(Ut);fh=s(za,"The "),la=a(za,"A",{href:!0});var vv=i(la);gh=s(vv,"RemBertModel"),vv.forEach(t),_h=s(za," forward method, overrides the "),Pi=a(za,"CODE",{});var Tv=i(Pi);kh=s(Tv,"__call__"),Tv.forEach(t),bh=s(za," special method."),za.forEach(t),vh=h(Sn),y(jo.$$.fragment,Sn),Th=h(Sn),y(Lo.$$.fragment,Sn),Sn.forEach(t),zt.forEach(t),ec=h(o),Ht=a(o,"H2",{class:!0});var Ac=i(Ht);Po=a(Ac,"A",{id:!0,class:!0,href:!0});var yv=i(Po);Oi=a(yv,"SPAN",{});var wv=i(Oi);y(Fs.$$.fragment,wv),wv.forEach(t),yv.forEach(t),yh=h(Ac),Di=a(Ac,"SPAN",{});var $v=i(Di);wh=s($v,"RemBertForCausalLM"),$v.forEach(t),Ac.forEach(t),tc=h(o),Et=a(o,"DIV",{class:!0});var Ca=i(Et);y(Rs.$$.fragment,Ca),$h=h(Ca),Qt=a(Ca,"P",{});var xa=i(Qt);Fh=s(xa,"RemBERT Model with a "),Ai=a(xa,"CODE",{});var Fv=i(Ai);Rh=s(Fv,"language modeling"),Fv.forEach(t),Eh=s(xa,` head on top for CLM fine-tuning.
This model is a PyTorch `),Es=a(xa,"A",{href:!0,rel:!0});var Rv=i(Es);Bh=s(Rv,"torch.nn.Module"),Rv.forEach(t),Mh=s(xa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xa.forEach(t),qh=h(Ca),ut=a(Ca,"DIV",{class:!0});var In=i(ut);y(Bs.$$.fragment,In),zh=h(In),Kt=a(In,"P",{});var ja=i(Kt);Ch=s(ja,"The "),da=a(ja,"A",{href:!0});var Ev=i(da);xh=s(Ev,"RemBertForCausalLM"),Ev.forEach(t),jh=s(ja," forward method, overrides the "),Ni=a(ja,"CODE",{});var Bv=i(Ni);Lh=s(Bv,"__call__"),Bv.forEach(t),Ph=s(ja," special method."),ja.forEach(t),Oh=h(In),y(Oo.$$.fragment,In),Dh=h(In),y(Do.$$.fragment,In),In.forEach(t),Ca.forEach(t),oc=h(o),Vt=a(o,"H2",{class:!0});var Nc=i(Vt);Ao=a(Nc,"A",{id:!0,class:!0,href:!0});var Mv=i(Ao);Si=a(Mv,"SPAN",{});var qv=i(Si);y(Ms.$$.fragment,qv),qv.forEach(t),Mv.forEach(t),Ah=h(Nc),Ii=a(Nc,"SPAN",{});var zv=i(Ii);Nh=s(zv,"RemBertForMaskedLM"),zv.forEach(t),Nc.forEach(t),nc=h(o),Bt=a(o,"DIV",{class:!0});var La=i(Bt);y(qs.$$.fragment,La),Sh=h(La),Jt=a(La,"P",{});var Pa=i(Jt);Ih=s(Pa,"RemBERT Model with a "),Wi=a(Pa,"CODE",{});var Cv=i(Wi);Wh=s(Cv,"language modeling"),Cv.forEach(t),Uh=s(Pa,` head on top.
This model is a PyTorch `),zs=a(Pa,"A",{href:!0,rel:!0});var xv=i(zs);Hh=s(xv,"torch.nn.Module"),xv.forEach(t),Qh=s(Pa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pa.forEach(t),Kh=h(La),Ge=a(La,"DIV",{class:!0});var Ct=i(Ge);y(Cs.$$.fragment,Ct),Vh=h(Ct),Gt=a(Ct,"P",{});var Oa=i(Gt);Jh=s(Oa,"The "),ca=a(Oa,"A",{href:!0});var jv=i(ca);Gh=s(jv,"RemBertForMaskedLM"),jv.forEach(t),Xh=s(Oa," forward method, overrides the "),Ui=a(Oa,"CODE",{});var Lv=i(Ui);Yh=s(Lv,"__call__"),Lv.forEach(t),Zh=s(Oa," special method."),Oa.forEach(t),eu=h(Ct),y(No.$$.fragment,Ct),tu=h(Ct),y(So.$$.fragment,Ct),ou=h(Ct),y(Io.$$.fragment,Ct),Ct.forEach(t),La.forEach(t),sc=h(o),Xt=a(o,"H2",{class:!0});var Sc=i(Xt);Wo=a(Sc,"A",{id:!0,class:!0,href:!0});var Pv=i(Wo);Hi=a(Pv,"SPAN",{});var Ov=i(Hi);y(xs.$$.fragment,Ov),Ov.forEach(t),Pv.forEach(t),nu=h(Sc),Qi=a(Sc,"SPAN",{});var Dv=i(Qi);su=s(Dv,"RemBertForSequenceClassification"),Dv.forEach(t),Sc.forEach(t),rc=h(o),it=a(o,"DIV",{class:!0});var Wn=i(it);y(js.$$.fragment,Wn),ru=h(Wn),Ki=a(Wn,"P",{});var Av=i(Ki);au=s(Av,`RemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Av.forEach(t),iu=h(Wn),Ls=a(Wn,"P",{});var Ic=i(Ls);lu=s(Ic,"This model is a PyTorch "),Ps=a(Ic,"A",{href:!0,rel:!0});var Nv=i(Ps);du=s(Nv,"torch.nn.Module"),Nv.forEach(t),cu=s(Ic,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ic.forEach(t),pu=h(Wn),Oe=a(Wn,"DIV",{class:!0});var at=i(Oe);y(Os.$$.fragment,at),mu=h(at),Yt=a(at,"P",{});var Da=i(Yt);hu=s(Da,"The "),pa=a(Da,"A",{href:!0});var Sv=i(pa);uu=s(Sv,"RemBertForSequenceClassification"),Sv.forEach(t),fu=s(Da," forward method, overrides the "),Vi=a(Da,"CODE",{});var Iv=i(Vi);gu=s(Iv,"__call__"),Iv.forEach(t),_u=s(Da," special method."),Da.forEach(t),ku=h(at),y(Uo.$$.fragment,at),bu=h(at),y(Ho.$$.fragment,at),vu=h(at),y(Qo.$$.fragment,at),Tu=h(at),y(Ko.$$.fragment,at),yu=h(at),y(Vo.$$.fragment,at),at.forEach(t),Wn.forEach(t),ac=h(o),Zt=a(o,"H2",{class:!0});var Wc=i(Zt);Jo=a(Wc,"A",{id:!0,class:!0,href:!0});var Wv=i(Jo);Ji=a(Wv,"SPAN",{});var Uv=i(Ji);y(Ds.$$.fragment,Uv),Uv.forEach(t),Wv.forEach(t),wu=h(Wc),Gi=a(Wc,"SPAN",{});var Hv=i(Gi);$u=s(Hv,"RemBertForMultipleChoice"),Hv.forEach(t),Wc.forEach(t),ic=h(o),lt=a(o,"DIV",{class:!0});var Un=i(lt);y(As.$$.fragment,Un),Fu=h(Un),Xi=a(Un,"P",{});var Qv=i(Xi);Ru=s(Qv,`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Qv.forEach(t),Eu=h(Un),Ns=a(Un,"P",{});var Uc=i(Ns);Bu=s(Uc,"This model is a PyTorch "),Ss=a(Uc,"A",{href:!0,rel:!0});var Kv=i(Ss);Mu=s(Kv,"torch.nn.Module"),Kv.forEach(t),qu=s(Uc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Uc.forEach(t),zu=h(Un),ft=a(Un,"DIV",{class:!0});var Hn=i(ft);y(Is.$$.fragment,Hn),Cu=h(Hn),eo=a(Hn,"P",{});var Aa=i(eo);xu=s(Aa,"The "),ma=a(Aa,"A",{href:!0});var Vv=i(ma);ju=s(Vv,"RemBertForMultipleChoice"),Vv.forEach(t),Lu=s(Aa," forward method, overrides the "),Yi=a(Aa,"CODE",{});var Jv=i(Yi);Pu=s(Jv,"__call__"),Jv.forEach(t),Ou=s(Aa," special method."),Aa.forEach(t),Du=h(Hn),y(Go.$$.fragment,Hn),Au=h(Hn),y(Xo.$$.fragment,Hn),Hn.forEach(t),Un.forEach(t),lc=h(o),to=a(o,"H2",{class:!0});var Hc=i(to);Yo=a(Hc,"A",{id:!0,class:!0,href:!0});var Gv=i(Yo);Zi=a(Gv,"SPAN",{});var Xv=i(Zi);y(Ws.$$.fragment,Xv),Xv.forEach(t),Gv.forEach(t),Nu=h(Hc),el=a(Hc,"SPAN",{});var Yv=i(el);Su=s(Yv,"RemBertForTokenClassification"),Yv.forEach(t),Hc.forEach(t),dc=h(o),dt=a(o,"DIV",{class:!0});var Qn=i(dt);y(Us.$$.fragment,Qn),Iu=h(Qn),tl=a(Qn,"P",{});var Zv=i(tl);Wu=s(Zv,`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Zv.forEach(t),Uu=h(Qn),Hs=a(Qn,"P",{});var Qc=i(Hs);Hu=s(Qc,"This model is a PyTorch "),Qs=a(Qc,"A",{href:!0,rel:!0});var eT=i(Qs);Qu=s(eT,"torch.nn.Module"),eT.forEach(t),Ku=s(Qc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qc.forEach(t),Vu=h(Qn),Xe=a(Qn,"DIV",{class:!0});var xt=i(Xe);y(Ks.$$.fragment,xt),Ju=h(xt),oo=a(xt,"P",{});var Na=i(oo);Gu=s(Na,"The "),ha=a(Na,"A",{href:!0});var tT=i(ha);Xu=s(tT,"RemBertForTokenClassification"),tT.forEach(t),Yu=s(Na," forward method, overrides the "),ol=a(Na,"CODE",{});var oT=i(ol);Zu=s(oT,"__call__"),oT.forEach(t),ef=s(Na," special method."),Na.forEach(t),tf=h(xt),y(Zo.$$.fragment,xt),of=h(xt),y(en.$$.fragment,xt),nf=h(xt),y(tn.$$.fragment,xt),xt.forEach(t),Qn.forEach(t),cc=h(o),no=a(o,"H2",{class:!0});var Kc=i(no);on=a(Kc,"A",{id:!0,class:!0,href:!0});var nT=i(on);nl=a(nT,"SPAN",{});var sT=i(nl);y(Vs.$$.fragment,sT),sT.forEach(t),nT.forEach(t),sf=h(Kc),sl=a(Kc,"SPAN",{});var rT=i(sl);rf=s(rT,"RemBertForQuestionAnswering"),rT.forEach(t),Kc.forEach(t),pc=h(o),ct=a(o,"DIV",{class:!0});var Kn=i(ct);y(Js.$$.fragment,Kn),af=h(Kn),so=a(Kn,"P",{});var Sa=i(so);lf=s(Sa,`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rl=a(Sa,"CODE",{});var aT=i(rl);df=s(aT,"span start logits"),aT.forEach(t),cf=s(Sa," and "),al=a(Sa,"CODE",{});var iT=i(al);pf=s(iT,"span end logits"),iT.forEach(t),mf=s(Sa,")."),Sa.forEach(t),hf=h(Kn),Gs=a(Kn,"P",{});var Vc=i(Gs);uf=s(Vc,"This model is a PyTorch "),Xs=a(Vc,"A",{href:!0,rel:!0});var lT=i(Xs);ff=s(lT,"torch.nn.Module"),lT.forEach(t),gf=s(Vc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vc.forEach(t),_f=h(Kn),Ye=a(Kn,"DIV",{class:!0});var jt=i(Ye);y(Ys.$$.fragment,jt),kf=h(jt),ro=a(jt,"P",{});var Ia=i(ro);bf=s(Ia,"The "),ua=a(Ia,"A",{href:!0});var dT=i(ua);vf=s(dT,"RemBertForQuestionAnswering"),dT.forEach(t),Tf=s(Ia," forward method, overrides the "),il=a(Ia,"CODE",{});var cT=i(il);yf=s(cT,"__call__"),cT.forEach(t),wf=s(Ia," special method."),Ia.forEach(t),$f=h(jt),y(nn.$$.fragment,jt),Ff=h(jt),y(sn.$$.fragment,jt),Rf=h(jt),y(rn.$$.fragment,jt),jt.forEach(t),Kn.forEach(t),mc=h(o),ao=a(o,"H2",{class:!0});var Jc=i(ao);an=a(Jc,"A",{id:!0,class:!0,href:!0});var pT=i(an);ll=a(pT,"SPAN",{});var mT=i(ll);y(Zs.$$.fragment,mT),mT.forEach(t),pT.forEach(t),Ef=h(Jc),dl=a(Jc,"SPAN",{});var hT=i(dl);Bf=s(hT,"TFRemBertModel"),hT.forEach(t),Jc.forEach(t),hc=h(o),Ne=a(o,"DIV",{class:!0});var bt=i(Ne);y(er.$$.fragment,bt),Mf=h(bt),cl=a(bt,"P",{});var uT=i(cl);qf=s(uT,"The bare RemBERT Model transformer outputing raw hidden-states without any specific head on top."),uT.forEach(t),zf=h(bt),tr=a(bt,"P",{});var Gc=i(tr);Cf=s(Gc,"This model inherits from "),fa=a(Gc,"A",{href:!0});var fT=i(fa);xf=s(fT,"TFPreTrainedModel"),fT.forEach(t),jf=s(Gc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gc.forEach(t),Lf=h(bt),or=a(bt,"P",{});var Xc=i(or);Pf=s(Xc,"This model is also a "),nr=a(Xc,"A",{href:!0,rel:!0});var gT=i(nr);Of=s(gT,"tf.keras.Model"),gT.forEach(t),Df=s(Xc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xc.forEach(t),Af=h(bt),y(ln.$$.fragment,bt),Nf=h(bt),gt=a(bt,"DIV",{class:!0});var Vn=i(gt);y(sr.$$.fragment,Vn),Sf=h(Vn),io=a(Vn,"P",{});var Wa=i(io);If=s(Wa,"The "),ga=a(Wa,"A",{href:!0});var _T=i(ga);Wf=s(_T,"TFRemBertModel"),_T.forEach(t),Uf=s(Wa," forward method, overrides the "),pl=a(Wa,"CODE",{});var kT=i(pl);Hf=s(kT,"__call__"),kT.forEach(t),Qf=s(Wa," special method."),Wa.forEach(t),Kf=h(Vn),y(dn.$$.fragment,Vn),Vf=h(Vn),y(cn.$$.fragment,Vn),Vn.forEach(t),bt.forEach(t),uc=h(o),lo=a(o,"H2",{class:!0});var Yc=i(lo);pn=a(Yc,"A",{id:!0,class:!0,href:!0});var bT=i(pn);ml=a(bT,"SPAN",{});var vT=i(ml);y(rr.$$.fragment,vT),vT.forEach(t),bT.forEach(t),Jf=h(Yc),hl=a(Yc,"SPAN",{});var TT=i(hl);Gf=s(TT,"TFRemBertForMaskedLM"),TT.forEach(t),Yc.forEach(t),fc=h(o),Se=a(o,"DIV",{class:!0});var vt=i(Se);y(ar.$$.fragment,vt),Xf=h(vt),ir=a(vt,"P",{});var Zc=i(ir);Yf=s(Zc,"RemBERT Model with a "),ul=a(Zc,"CODE",{});var yT=i(ul);Zf=s(yT,"language modeling"),yT.forEach(t),eg=s(Zc," head on top."),Zc.forEach(t),tg=h(vt),lr=a(vt,"P",{});var ep=i(lr);og=s(ep,"This model inherits from "),_a=a(ep,"A",{href:!0});var wT=i(_a);ng=s(wT,"TFPreTrainedModel"),wT.forEach(t),sg=s(ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep.forEach(t),rg=h(vt),dr=a(vt,"P",{});var tp=i(dr);ag=s(tp,"This model is also a "),cr=a(tp,"A",{href:!0,rel:!0});var $T=i(cr);ig=s($T,"tf.keras.Model"),$T.forEach(t),lg=s(tp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tp.forEach(t),dg=h(vt),y(mn.$$.fragment,vt),cg=h(vt),Ze=a(vt,"DIV",{class:!0});var Lt=i(Ze);y(pr.$$.fragment,Lt),pg=h(Lt),co=a(Lt,"P",{});var Ua=i(co);mg=s(Ua,"The "),ka=a(Ua,"A",{href:!0});var FT=i(ka);hg=s(FT,"TFRemBertForMaskedLM"),FT.forEach(t),ug=s(Ua," forward method, overrides the "),fl=a(Ua,"CODE",{});var RT=i(fl);fg=s(RT,"__call__"),RT.forEach(t),gg=s(Ua," special method."),Ua.forEach(t),_g=h(Lt),y(hn.$$.fragment,Lt),kg=h(Lt),y(un.$$.fragment,Lt),bg=h(Lt),y(fn.$$.fragment,Lt),Lt.forEach(t),vt.forEach(t),gc=h(o),po=a(o,"H2",{class:!0});var op=i(po);gn=a(op,"A",{id:!0,class:!0,href:!0});var ET=i(gn);gl=a(ET,"SPAN",{});var BT=i(gl);y(mr.$$.fragment,BT),BT.forEach(t),ET.forEach(t),vg=h(op),_l=a(op,"SPAN",{});var MT=i(_l);Tg=s(MT,"TFRemBertForCausalLM"),MT.forEach(t),op.forEach(t),_c=h(o),Ie=a(o,"DIV",{class:!0});var Tt=i(Ie);y(hr.$$.fragment,Tt),yg=h(Tt),ur=a(Tt,"P",{});var np=i(ur);wg=s(np,"RemBERT Model with a "),kl=a(np,"CODE",{});var qT=i(kl);$g=s(qT,"language modeling"),qT.forEach(t),Fg=s(np," head on top for CLM fine-tuning."),np.forEach(t),Rg=h(Tt),fr=a(Tt,"P",{});var sp=i(fr);Eg=s(sp,"This model inherits from "),ba=a(sp,"A",{href:!0});var zT=i(ba);Bg=s(zT,"TFPreTrainedModel"),zT.forEach(t),Mg=s(sp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sp.forEach(t),qg=h(Tt),gr=a(Tt,"P",{});var rp=i(gr);zg=s(rp,"This model is also a "),_r=a(rp,"A",{href:!0,rel:!0});var CT=i(_r);Cg=s(CT,"tf.keras.Model"),CT.forEach(t),xg=s(rp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rp.forEach(t),jg=h(Tt),y(_n.$$.fragment,Tt),Lg=h(Tt),et=a(Tt,"DIV",{class:!0});var Pt=i(et);y(kr.$$.fragment,Pt),Pg=h(Pt),Pe=a(Pt,"P",{});var Ve=i(Pe);Og=s(Ve,"encoder_hidden_states  ("),bl=a(Ve,"CODE",{});var xT=i(bl);Dg=s(xT,"tf.Tensor"),xT.forEach(t),Ag=s(Ve," of shape "),vl=a(Ve,"CODE",{});var jT=i(vl);Ng=s(jT,"(batch_size, sequence_length, hidden_size)"),jT.forEach(t),Sg=s(Ve,", "),Tl=a(Ve,"EM",{});var LT=i(Tl);Ig=s(LT,"optional"),LT.forEach(t),Wg=s(Ve,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),yl=a(Ve,"CODE",{});var PT=i(yl);Ug=s(PT,"tf.Tensor"),PT.forEach(t),Hg=s(Ve," of shape "),wl=a(Ve,"CODE",{});var OT=i(wl);Qg=s(OT,"(batch_size, sequence_length)"),OT.forEach(t),Kg=s(Ve,", "),$l=a(Ve,"EM",{});var DT=i($l);Vg=s(DT,"optional"),DT.forEach(t),Jg=s(Ve,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),Fl=a(Ve,"CODE",{});var AT=i(Fl);Gg=s(AT,"[0, 1]"),AT.forEach(t),Xg=s(Ve,":"),Ve.forEach(t),Yg=h(Pt),br=a(Pt,"UL",{});var ap=i(br);vr=a(ap,"LI",{});var ip=i(vr);Zg=s(ip,"1 for tokens that are "),Rl=a(ip,"STRONG",{});var NT=i(Rl);e_=s(NT,"not masked"),NT.forEach(t),t_=s(ip,","),ip.forEach(t),o_=h(ap),Tr=a(ap,"LI",{});var lp=i(Tr);n_=s(lp,"0 for tokens that are "),El=a(lp,"STRONG",{});var ST=i(El);s_=s(ST,"masked"),ST.forEach(t),r_=s(lp,"."),lp.forEach(t),ap.forEach(t),a_=h(Pt),V=a(Pt,"P",{});var G=i(V);i_=s(G,"past_key_values ("),Bl=a(G,"CODE",{});var IT=i(Bl);l_=s(IT,"Tuple[Tuple[tf.Tensor]]"),IT.forEach(t),d_=s(G," of length "),Ml=a(G,"CODE",{});var WT=i(Ml);c_=s(WT,"config.n_layers"),WT.forEach(t),p_=s(G,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),ql=a(G,"CODE",{});var UT=i(ql);m_=s(UT,"past_key_values"),UT.forEach(t),h_=s(G," are used, the user can optionally input only the last "),zl=a(G,"CODE",{});var HT=i(zl);u_=s(HT,"decoder_input_ids"),HT.forEach(t),f_=s(G,` (those that
don\u2019t have their past key value states given to this model) of shape `),Cl=a(G,"CODE",{});var QT=i(Cl);g_=s(QT,"(batch_size, 1)"),QT.forEach(t),__=s(G,` instead of all
`),xl=a(G,"CODE",{});var KT=i(xl);k_=s(KT,"decoder_input_ids"),KT.forEach(t),b_=s(G," of shape "),jl=a(G,"CODE",{});var VT=i(jl);v_=s(VT,"(batch_size, sequence_length)"),VT.forEach(t),T_=s(G,`.
use_cache (`),Ll=a(G,"CODE",{});var JT=i(Ll);y_=s(JT,"bool"),JT.forEach(t),w_=s(G,", "),Pl=a(G,"EM",{});var GT=i(Pl);$_=s(GT,"optional"),GT.forEach(t),F_=s(G,", defaults to "),Ol=a(G,"CODE",{});var XT=i(Ol);R_=s(XT,"True"),XT.forEach(t),E_=s(G,`):
If set to `),Dl=a(G,"CODE",{});var YT=i(Dl);B_=s(YT,"True"),YT.forEach(t),M_=s(G,", "),Al=a(G,"CODE",{});var ZT=i(Al);q_=s(ZT,"past_key_values"),ZT.forEach(t),z_=s(G,` key value states are returned and can be used to speed up decoding (see
`),Nl=a(G,"CODE",{});var ey=i(Nl);C_=s(ey,"past_key_values"),ey.forEach(t),x_=s(G,"). Set to "),Sl=a(G,"CODE",{});var ty=i(Sl);j_=s(ty,"False"),ty.forEach(t),L_=s(G," during training, "),Il=a(G,"CODE",{});var oy=i(Il);P_=s(oy,"True"),oy.forEach(t),O_=s(G,` during generation
labels (`),Wl=a(G,"CODE",{});var ny=i(Wl);D_=s(ny,"tf.Tensor"),ny.forEach(t),A_=s(G," or "),Ul=a(G,"CODE",{});var sy=i(Ul);N_=s(sy,"np.ndarray"),sy.forEach(t),S_=s(G," of shape "),Hl=a(G,"CODE",{});var ry=i(Hl);I_=s(ry,"(batch_size, sequence_length)"),ry.forEach(t),W_=s(G,", "),Ql=a(G,"EM",{});var ay=i(Ql);U_=s(ay,"optional"),ay.forEach(t),H_=s(G,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Kl=a(G,"CODE",{});var iy=i(Kl);Q_=s(iy,"[0, ..., config.vocab_size - 1]"),iy.forEach(t),K_=s(G,"."),G.forEach(t),V_=h(Pt),y(kn.$$.fragment,Pt),Pt.forEach(t),Tt.forEach(t),kc=h(o),mo=a(o,"H2",{class:!0});var dp=i(mo);bn=a(dp,"A",{id:!0,class:!0,href:!0});var ly=i(bn);Vl=a(ly,"SPAN",{});var dy=i(Vl);y(yr.$$.fragment,dy),dy.forEach(t),ly.forEach(t),J_=h(dp),Jl=a(dp,"SPAN",{});var cy=i(Jl);G_=s(cy,"TFRemBertForSequenceClassification"),cy.forEach(t),dp.forEach(t),bc=h(o),We=a(o,"DIV",{class:!0});var yt=i(We);y(wr.$$.fragment,yt),X_=h(yt),Gl=a(yt,"P",{});var py=i(Gl);Y_=s(py,"RemBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),py.forEach(t),Z_=h(yt),$r=a(yt,"P",{});var cp=i($r);ek=s(cp,"This model inherits from "),va=a(cp,"A",{href:!0});var my=i(va);tk=s(my,"TFPreTrainedModel"),my.forEach(t),ok=s(cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cp.forEach(t),nk=h(yt),Fr=a(yt,"P",{});var pp=i(Fr);sk=s(pp,"This model is also a "),Rr=a(pp,"A",{href:!0,rel:!0});var hy=i(Rr);rk=s(hy,"tf.keras.Model"),hy.forEach(t),ak=s(pp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pp.forEach(t),ik=h(yt),y(vn.$$.fragment,yt),lk=h(yt),tt=a(yt,"DIV",{class:!0});var Ot=i(tt);y(Er.$$.fragment,Ot),dk=h(Ot),ho=a(Ot,"P",{});var Ha=i(ho);ck=s(Ha,"The "),Ta=a(Ha,"A",{href:!0});var uy=i(Ta);pk=s(uy,"TFRemBertForSequenceClassification"),uy.forEach(t),mk=s(Ha," forward method, overrides the "),Xl=a(Ha,"CODE",{});var fy=i(Xl);hk=s(fy,"__call__"),fy.forEach(t),uk=s(Ha," special method."),Ha.forEach(t),fk=h(Ot),y(Tn.$$.fragment,Ot),gk=h(Ot),y(yn.$$.fragment,Ot),_k=h(Ot),y(wn.$$.fragment,Ot),Ot.forEach(t),yt.forEach(t),vc=h(o),uo=a(o,"H2",{class:!0});var mp=i(uo);$n=a(mp,"A",{id:!0,class:!0,href:!0});var gy=i($n);Yl=a(gy,"SPAN",{});var _y=i(Yl);y(Br.$$.fragment,_y),_y.forEach(t),gy.forEach(t),kk=h(mp),Zl=a(mp,"SPAN",{});var ky=i(Zl);bk=s(ky,"TFRemBertForMultipleChoice"),ky.forEach(t),mp.forEach(t),Tc=h(o),Ue=a(o,"DIV",{class:!0});var wt=i(Ue);y(Mr.$$.fragment,wt),vk=h(wt),ed=a(wt,"P",{});var by=i(ed);Tk=s(by,`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),by.forEach(t),yk=h(wt),qr=a(wt,"P",{});var hp=i(qr);wk=s(hp,"This model inherits from "),ya=a(hp,"A",{href:!0});var vy=i(ya);$k=s(vy,"TFPreTrainedModel"),vy.forEach(t),Fk=s(hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hp.forEach(t),Rk=h(wt),zr=a(wt,"P",{});var up=i(zr);Ek=s(up,"This model is also a "),Cr=a(up,"A",{href:!0,rel:!0});var Ty=i(Cr);Bk=s(Ty,"tf.keras.Model"),Ty.forEach(t),Mk=s(up,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),up.forEach(t),qk=h(wt),y(Fn.$$.fragment,wt),zk=h(wt),_t=a(wt,"DIV",{class:!0});var Jn=i(_t);y(xr.$$.fragment,Jn),Ck=h(Jn),fo=a(Jn,"P",{});var Qa=i(fo);xk=s(Qa,"The "),wa=a(Qa,"A",{href:!0});var yy=i(wa);jk=s(yy,"TFRemBertForMultipleChoice"),yy.forEach(t),Lk=s(Qa," forward method, overrides the "),td=a(Qa,"CODE",{});var wy=i(td);Pk=s(wy,"__call__"),wy.forEach(t),Ok=s(Qa," special method."),Qa.forEach(t),Dk=h(Jn),y(Rn.$$.fragment,Jn),Ak=h(Jn),y(En.$$.fragment,Jn),Jn.forEach(t),wt.forEach(t),yc=h(o),go=a(o,"H2",{class:!0});var fp=i(go);Bn=a(fp,"A",{id:!0,class:!0,href:!0});var $y=i(Bn);od=a($y,"SPAN",{});var Fy=i(od);y(jr.$$.fragment,Fy),Fy.forEach(t),$y.forEach(t),Nk=h(fp),nd=a(fp,"SPAN",{});var Ry=i(nd);Sk=s(Ry,"TFRemBertForTokenClassification"),Ry.forEach(t),fp.forEach(t),wc=h(o),He=a(o,"DIV",{class:!0});var $t=i(He);y(Lr.$$.fragment,$t),Ik=h($t),sd=a($t,"P",{});var Ey=i(sd);Wk=s(Ey,`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ey.forEach(t),Uk=h($t),Pr=a($t,"P",{});var gp=i(Pr);Hk=s(gp,"This model inherits from "),$a=a(gp,"A",{href:!0});var By=i($a);Qk=s(By,"TFPreTrainedModel"),By.forEach(t),Kk=s(gp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gp.forEach(t),Vk=h($t),Or=a($t,"P",{});var _p=i(Or);Jk=s(_p,"This model is also a "),Dr=a(_p,"A",{href:!0,rel:!0});var My=i(Dr);Gk=s(My,"tf.keras.Model"),My.forEach(t),Xk=s(_p,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_p.forEach(t),Yk=h($t),y(Mn.$$.fragment,$t),Zk=h($t),ot=a($t,"DIV",{class:!0});var Dt=i(ot);y(Ar.$$.fragment,Dt),eb=h(Dt),_o=a(Dt,"P",{});var Ka=i(_o);tb=s(Ka,"The "),Fa=a(Ka,"A",{href:!0});var qy=i(Fa);ob=s(qy,"TFRemBertForTokenClassification"),qy.forEach(t),nb=s(Ka," forward method, overrides the "),rd=a(Ka,"CODE",{});var zy=i(rd);sb=s(zy,"__call__"),zy.forEach(t),rb=s(Ka," special method."),Ka.forEach(t),ab=h(Dt),y(qn.$$.fragment,Dt),ib=h(Dt),y(zn.$$.fragment,Dt),lb=h(Dt),y(Cn.$$.fragment,Dt),Dt.forEach(t),$t.forEach(t),$c=h(o),ko=a(o,"H2",{class:!0});var kp=i(ko);xn=a(kp,"A",{id:!0,class:!0,href:!0});var Cy=i(xn);ad=a(Cy,"SPAN",{});var xy=i(ad);y(Nr.$$.fragment,xy),xy.forEach(t),Cy.forEach(t),db=h(kp),id=a(kp,"SPAN",{});var jy=i(id);cb=s(jy,"TFRemBertForQuestionAnswering"),jy.forEach(t),kp.forEach(t),Fc=h(o),Qe=a(o,"DIV",{class:!0});var Ft=i(Qe);y(Sr.$$.fragment,Ft),pb=h(Ft),bo=a(Ft,"P",{});var Va=i(bo);mb=s(Va,`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ld=a(Va,"CODE",{});var Ly=i(ld);hb=s(Ly,"span start logits"),Ly.forEach(t),ub=s(Va," and "),dd=a(Va,"CODE",{});var Py=i(dd);fb=s(Py,"span end logits"),Py.forEach(t),gb=s(Va,")."),Va.forEach(t),_b=h(Ft),Ir=a(Ft,"P",{});var bp=i(Ir);kb=s(bp,"This model inherits from "),Ra=a(bp,"A",{href:!0});var Oy=i(Ra);bb=s(Oy,"TFPreTrainedModel"),Oy.forEach(t),vb=s(bp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bp.forEach(t),Tb=h(Ft),Wr=a(Ft,"P",{});var vp=i(Wr);yb=s(vp,"This model is also a "),Ur=a(vp,"A",{href:!0,rel:!0});var Dy=i(Ur);wb=s(Dy,"tf.keras.Model"),Dy.forEach(t),$b=s(vp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vp.forEach(t),Fb=h(Ft),y(jn.$$.fragment,Ft),Rb=h(Ft),nt=a(Ft,"DIV",{class:!0});var At=i(nt);y(Hr.$$.fragment,At),Eb=h(At),vo=a(At,"P",{});var Ja=i(vo);Bb=s(Ja,"The "),Ea=a(Ja,"A",{href:!0});var Ay=i(Ea);Mb=s(Ay,"TFRemBertForQuestionAnswering"),Ay.forEach(t),qb=s(Ja," forward method, overrides the "),cd=a(Ja,"CODE",{});var Ny=i(cd);zb=s(Ny,"__call__"),Ny.forEach(t),Cb=s(Ja," special method."),Ja.forEach(t),xb=h(At),y(Ln.$$.fragment,At),jb=h(At),y(Pn.$$.fragment,At),Lb=h(At),y(On.$$.fragment,At),At.forEach(t),Ft.forEach(t),this.h()},h(){b(d,"name","hf:doc:metadata"),b(d,"content",JSON.stringify(N1)),b(p,"id","rembert"),b(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(p,"href","#rembert"),b(c,"class","relative group"),b(te,"id","overview"),b(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(te,"href","#overview"),b(q,"class","relative group"),b(se,"href","https://arxiv.org/abs/2010.12821"),b(se,"rel","nofollow"),b(oe,"id","transformers.RemBertConfig"),b(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(oe,"href","#transformers.RemBertConfig"),b(ee,"class","relative group"),b(ye,"href","/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertModel"),b(A,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),b(de,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),b($o,"id","initializing-a-model-from-the-rembert-style-configuration->>>-model-=-rembertmodel(configuration)"),b($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b($o,"href","#initializing-a-model-from-the-rembert-style-configuration->>>-model-=-rembertmodel(configuration)"),b(wo,"class","relative group"),b(Ro,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),b(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ro,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),b(Fo,"class","relative group"),b(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Eo,"id","transformers.RemBertTokenizer"),b(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Eo,"href","#transformers.RemBertTokenizer"),b(Nt,"class","relative group"),b(ts,"href","https://github.com/google/sentencepiece"),b(ts,"rel","nofollow"),b(ea,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),b(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(na,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(qo,"id","transformers.RemBertTokenizerFast"),b(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(qo,"href","#transformers.RemBertTokenizerFast"),b(It,"class","relative group"),b(ps,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),b(ps,"rel","nofollow"),b(sa,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),b(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ia,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(xo,"id","transformers.RemBertModel"),b(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(xo,"href","#transformers.RemBertModel"),b(Wt,"class","relative group"),b(Ts,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Ts,"rel","nofollow"),b(ws,"href","https://arxiv.org/abs/1706.03762"),b(ws,"rel","nofollow"),b(la,"href","/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertModel"),b(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Po,"id","transformers.RemBertForCausalLM"),b(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Po,"href","#transformers.RemBertForCausalLM"),b(Ht,"class","relative group"),b(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Es,"rel","nofollow"),b(da,"href","/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertForCausalLM"),b(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ao,"id","transformers.RemBertForMaskedLM"),b(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ao,"href","#transformers.RemBertForMaskedLM"),b(Vt,"class","relative group"),b(zs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(zs,"rel","nofollow"),b(ca,"href","/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertForMaskedLM"),b(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Wo,"id","transformers.RemBertForSequenceClassification"),b(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Wo,"href","#transformers.RemBertForSequenceClassification"),b(Xt,"class","relative group"),b(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Ps,"rel","nofollow"),b(pa,"href","/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertForSequenceClassification"),b(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Jo,"id","transformers.RemBertForMultipleChoice"),b(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Jo,"href","#transformers.RemBertForMultipleChoice"),b(Zt,"class","relative group"),b(Ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Ss,"rel","nofollow"),b(ma,"href","/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertForMultipleChoice"),b(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Yo,"id","transformers.RemBertForTokenClassification"),b(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Yo,"href","#transformers.RemBertForTokenClassification"),b(to,"class","relative group"),b(Qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Qs,"rel","nofollow"),b(ha,"href","/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertForTokenClassification"),b(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(on,"id","transformers.RemBertForQuestionAnswering"),b(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(on,"href","#transformers.RemBertForQuestionAnswering"),b(no,"class","relative group"),b(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Xs,"rel","nofollow"),b(ua,"href","/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.RemBertForQuestionAnswering"),b(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(an,"id","transformers.TFRemBertModel"),b(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(an,"href","#transformers.TFRemBertModel"),b(ao,"class","relative group"),b(fa,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),b(nr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(nr,"rel","nofollow"),b(ga,"href","/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.TFRemBertModel"),b(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(pn,"id","transformers.TFRemBertForMaskedLM"),b(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(pn,"href","#transformers.TFRemBertForMaskedLM"),b(lo,"class","relative group"),b(_a,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),b(cr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(cr,"rel","nofollow"),b(ka,"href","/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.TFRemBertForMaskedLM"),b(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(gn,"id","transformers.TFRemBertForCausalLM"),b(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(gn,"href","#transformers.TFRemBertForCausalLM"),b(po,"class","relative group"),b(ba,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),b(_r,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(_r,"rel","nofollow"),b(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(bn,"id","transformers.TFRemBertForSequenceClassification"),b(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(bn,"href","#transformers.TFRemBertForSequenceClassification"),b(mo,"class","relative group"),b(va,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),b(Rr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Rr,"rel","nofollow"),b(Ta,"href","/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.TFRemBertForSequenceClassification"),b(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b($n,"id","transformers.TFRemBertForMultipleChoice"),b($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b($n,"href","#transformers.TFRemBertForMultipleChoice"),b(uo,"class","relative group"),b(ya,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),b(Cr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Cr,"rel","nofollow"),b(wa,"href","/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.TFRemBertForMultipleChoice"),b(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Bn,"id","transformers.TFRemBertForTokenClassification"),b(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Bn,"href","#transformers.TFRemBertForTokenClassification"),b(go,"class","relative group"),b($a,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),b(Dr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Dr,"rel","nofollow"),b(Fa,"href","/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.TFRemBertForTokenClassification"),b(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(xn,"id","transformers.TFRemBertForQuestionAnswering"),b(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(xn,"href","#transformers.TFRemBertForQuestionAnswering"),b(ko,"class","relative group"),b(Ra,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),b(Ur,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Ur,"rel","nofollow"),b(Ea,"href","/docs/transformers/v4.18.0/en/model_doc/rembert#transformers.TFRemBertForQuestionAnswering"),b(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,v){e(document.head,d),_(o,g,v),_(o,c,v),e(c,p),e(p,k),w(l,k,null),e(c,u),e(c,M),e(M,ue),_(o,X,v),_(o,q,v),e(q,te),e(te,N),w(ne,N,null),e(q,fe),e(q,S),e(S,ge),_(o,pe,v),_(o,J,v),e(J,O),e(J,se),e(se,Z),e(J,z),_(o,x,v),_(o,ae,v),e(ae,H),_(o,me,v),_(o,ie,v),e(ie,I),e(I,_e),_(o,he,v),_(o,C,v),e(C,ke),_(o,W,v),_(o,le,v),e(le,be),_(o,U,v),_(o,ee,v),e(ee,oe),e(oe,L),w(re,L,null),e(ee,Q),e(ee,ce),e(ce,f),_(o,B,v),_(o,P,v),w(Te,P,null),e(P,Re),e(P,j),e(j,Ee),e(j,ye),e(ye,Be),e(j,D),e(P,K),e(P,ve),e(ve,Me),e(ve,A),e(A,qe),e(ve,ze),e(ve,de),e(de,Ce),e(ve,Tp),e(P,yp),w(yo,P,null),e(P,wp),e(P,Ga),e(Ga,Xa),e(Xa,Ya),e(Ya,Za),e(Za,$p),e(P,Fp),e(P,ei),e(ei,ti),e(ti,oi),e(oi,wo),e(wo,$o),e($o,ni),w(Gn,ni,null),e(wo,Rp),e(wo,si),e(si,Ep),e(P,Bp),e(P,ri),e(ri,ai),e(ai,ii),e(ii,Fo),e(Fo,Ro),e(Ro,li),w(Xn,li,null),e(Fo,Mp),e(Fo,di),e(di,qp),_(o,Vd,v),_(o,Nt,v),e(Nt,Eo),e(Eo,ci),w(Yn,ci,null),e(Nt,zp),e(Nt,pi),e(pi,Cp),_(o,Jd,v),_(o,Le,v),w(Zn,Le,null),e(Le,xp),e(Le,es),e(es,jp),e(es,ts),e(ts,Lp),e(es,Pp),e(Le,Op),e(Le,os),e(os,Dp),e(os,ea),e(ea,Ap),e(os,Np),e(Le,Sp),e(Le,Mt),w(ns,Mt,null),e(Mt,Ip),e(Mt,mi),e(mi,Wp),e(Mt,Up),e(Mt,ss),e(ss,ta),e(ta,Hp),e(ta,hi),e(hi,Qp),e(ss,Kp),e(ss,oa),e(oa,Vp),e(oa,ui),e(ui,Jp),e(Le,Gp),e(Le,Bo),w(rs,Bo,null),e(Bo,Xp),e(Bo,as),e(as,Yp),e(as,fi),e(fi,Zp),e(as,em),e(Le,tm),e(Le,pt),w(is,pt,null),e(pt,om),e(pt,gi),e(gi,nm),e(pt,sm),w(Mo,pt,null),e(pt,rm),e(pt,St),e(St,am),e(St,_i),e(_i,im),e(St,lm),e(St,ki),e(ki,dm),e(St,cm),e(Le,pm),e(Le,na),w(ls,na,null),_(o,Gd,v),_(o,It,v),e(It,qo),e(qo,bi),w(ds,bi,null),e(It,mm),e(It,vi),e(vi,hm),_(o,Xd,v),_(o,De,v),w(cs,De,null),e(De,um),e(De,Rt),e(Rt,fm),e(Rt,Ti),e(Ti,gm),e(Rt,_m),e(Rt,ps),e(ps,km),e(Rt,bm),e(Rt,sa),e(sa,vm),e(Rt,Tm),e(De,ym),e(De,qt),w(ms,qt,null),e(qt,wm),e(qt,yi),e(yi,$m),e(qt,Fm),e(qt,hs),e(hs,ra),e(ra,Rm),e(ra,wi),e(wi,Em),e(hs,Bm),e(hs,aa),e(aa,Mm),e(aa,$i),e($i,qm),e(De,zm),e(De,zo),w(us,zo,null),e(zo,Cm),e(zo,fs),e(fs,xm),e(fs,Fi),e(Fi,jm),e(fs,Lm),e(De,Pm),e(De,mt),w(gs,mt,null),e(mt,Om),e(mt,Ri),e(Ri,Dm),e(mt,Am),w(Co,mt,null),e(mt,Nm),e(mt,Ei),e(Ei,Sm),e(De,Im),e(De,ia),w(_s,ia,null),_(o,Yd,v),_(o,Wt,v),e(Wt,xo),e(xo,Bi),w(ks,Bi,null),e(Wt,Wm),e(Wt,Mi),e(Mi,Um),_(o,Zd,v),_(o,Je,v),w(bs,Je,null),e(Je,Hm),e(Je,vs),e(vs,Qm),e(vs,Ts),e(Ts,Km),e(vs,Vm),e(Je,Jm),e(Je,ys),e(ys,Gm),e(ys,ws),e(ws,Xm),e(ys,Ym),e(Je,Zm),e(Je,Ae),e(Ae,eh),e(Ae,qi),e(qi,th),e(Ae,oh),e(Ae,zi),e(zi,nh),e(Ae,sh),e(Ae,Ci),e(Ci,rh),e(Ae,ah),e(Ae,xi),e(xi,ih),e(Ae,lh),e(Ae,ji),e(ji,dh),e(Ae,ch),e(Ae,Li),e(Li,ph),e(Ae,mh),e(Je,hh),e(Je,ht),w($s,ht,null),e(ht,uh),e(ht,Ut),e(Ut,fh),e(Ut,la),e(la,gh),e(Ut,_h),e(Ut,Pi),e(Pi,kh),e(Ut,bh),e(ht,vh),w(jo,ht,null),e(ht,Th),w(Lo,ht,null),_(o,ec,v),_(o,Ht,v),e(Ht,Po),e(Po,Oi),w(Fs,Oi,null),e(Ht,yh),e(Ht,Di),e(Di,wh),_(o,tc,v),_(o,Et,v),w(Rs,Et,null),e(Et,$h),e(Et,Qt),e(Qt,Fh),e(Qt,Ai),e(Ai,Rh),e(Qt,Eh),e(Qt,Es),e(Es,Bh),e(Qt,Mh),e(Et,qh),e(Et,ut),w(Bs,ut,null),e(ut,zh),e(ut,Kt),e(Kt,Ch),e(Kt,da),e(da,xh),e(Kt,jh),e(Kt,Ni),e(Ni,Lh),e(Kt,Ph),e(ut,Oh),w(Oo,ut,null),e(ut,Dh),w(Do,ut,null),_(o,oc,v),_(o,Vt,v),e(Vt,Ao),e(Ao,Si),w(Ms,Si,null),e(Vt,Ah),e(Vt,Ii),e(Ii,Nh),_(o,nc,v),_(o,Bt,v),w(qs,Bt,null),e(Bt,Sh),e(Bt,Jt),e(Jt,Ih),e(Jt,Wi),e(Wi,Wh),e(Jt,Uh),e(Jt,zs),e(zs,Hh),e(Jt,Qh),e(Bt,Kh),e(Bt,Ge),w(Cs,Ge,null),e(Ge,Vh),e(Ge,Gt),e(Gt,Jh),e(Gt,ca),e(ca,Gh),e(Gt,Xh),e(Gt,Ui),e(Ui,Yh),e(Gt,Zh),e(Ge,eu),w(No,Ge,null),e(Ge,tu),w(So,Ge,null),e(Ge,ou),w(Io,Ge,null),_(o,sc,v),_(o,Xt,v),e(Xt,Wo),e(Wo,Hi),w(xs,Hi,null),e(Xt,nu),e(Xt,Qi),e(Qi,su),_(o,rc,v),_(o,it,v),w(js,it,null),e(it,ru),e(it,Ki),e(Ki,au),e(it,iu),e(it,Ls),e(Ls,lu),e(Ls,Ps),e(Ps,du),e(Ls,cu),e(it,pu),e(it,Oe),w(Os,Oe,null),e(Oe,mu),e(Oe,Yt),e(Yt,hu),e(Yt,pa),e(pa,uu),e(Yt,fu),e(Yt,Vi),e(Vi,gu),e(Yt,_u),e(Oe,ku),w(Uo,Oe,null),e(Oe,bu),w(Ho,Oe,null),e(Oe,vu),w(Qo,Oe,null),e(Oe,Tu),w(Ko,Oe,null),e(Oe,yu),w(Vo,Oe,null),_(o,ac,v),_(o,Zt,v),e(Zt,Jo),e(Jo,Ji),w(Ds,Ji,null),e(Zt,wu),e(Zt,Gi),e(Gi,$u),_(o,ic,v),_(o,lt,v),w(As,lt,null),e(lt,Fu),e(lt,Xi),e(Xi,Ru),e(lt,Eu),e(lt,Ns),e(Ns,Bu),e(Ns,Ss),e(Ss,Mu),e(Ns,qu),e(lt,zu),e(lt,ft),w(Is,ft,null),e(ft,Cu),e(ft,eo),e(eo,xu),e(eo,ma),e(ma,ju),e(eo,Lu),e(eo,Yi),e(Yi,Pu),e(eo,Ou),e(ft,Du),w(Go,ft,null),e(ft,Au),w(Xo,ft,null),_(o,lc,v),_(o,to,v),e(to,Yo),e(Yo,Zi),w(Ws,Zi,null),e(to,Nu),e(to,el),e(el,Su),_(o,dc,v),_(o,dt,v),w(Us,dt,null),e(dt,Iu),e(dt,tl),e(tl,Wu),e(dt,Uu),e(dt,Hs),e(Hs,Hu),e(Hs,Qs),e(Qs,Qu),e(Hs,Ku),e(dt,Vu),e(dt,Xe),w(Ks,Xe,null),e(Xe,Ju),e(Xe,oo),e(oo,Gu),e(oo,ha),e(ha,Xu),e(oo,Yu),e(oo,ol),e(ol,Zu),e(oo,ef),e(Xe,tf),w(Zo,Xe,null),e(Xe,of),w(en,Xe,null),e(Xe,nf),w(tn,Xe,null),_(o,cc,v),_(o,no,v),e(no,on),e(on,nl),w(Vs,nl,null),e(no,sf),e(no,sl),e(sl,rf),_(o,pc,v),_(o,ct,v),w(Js,ct,null),e(ct,af),e(ct,so),e(so,lf),e(so,rl),e(rl,df),e(so,cf),e(so,al),e(al,pf),e(so,mf),e(ct,hf),e(ct,Gs),e(Gs,uf),e(Gs,Xs),e(Xs,ff),e(Gs,gf),e(ct,_f),e(ct,Ye),w(Ys,Ye,null),e(Ye,kf),e(Ye,ro),e(ro,bf),e(ro,ua),e(ua,vf),e(ro,Tf),e(ro,il),e(il,yf),e(ro,wf),e(Ye,$f),w(nn,Ye,null),e(Ye,Ff),w(sn,Ye,null),e(Ye,Rf),w(rn,Ye,null),_(o,mc,v),_(o,ao,v),e(ao,an),e(an,ll),w(Zs,ll,null),e(ao,Ef),e(ao,dl),e(dl,Bf),_(o,hc,v),_(o,Ne,v),w(er,Ne,null),e(Ne,Mf),e(Ne,cl),e(cl,qf),e(Ne,zf),e(Ne,tr),e(tr,Cf),e(tr,fa),e(fa,xf),e(tr,jf),e(Ne,Lf),e(Ne,or),e(or,Pf),e(or,nr),e(nr,Of),e(or,Df),e(Ne,Af),w(ln,Ne,null),e(Ne,Nf),e(Ne,gt),w(sr,gt,null),e(gt,Sf),e(gt,io),e(io,If),e(io,ga),e(ga,Wf),e(io,Uf),e(io,pl),e(pl,Hf),e(io,Qf),e(gt,Kf),w(dn,gt,null),e(gt,Vf),w(cn,gt,null),_(o,uc,v),_(o,lo,v),e(lo,pn),e(pn,ml),w(rr,ml,null),e(lo,Jf),e(lo,hl),e(hl,Gf),_(o,fc,v),_(o,Se,v),w(ar,Se,null),e(Se,Xf),e(Se,ir),e(ir,Yf),e(ir,ul),e(ul,Zf),e(ir,eg),e(Se,tg),e(Se,lr),e(lr,og),e(lr,_a),e(_a,ng),e(lr,sg),e(Se,rg),e(Se,dr),e(dr,ag),e(dr,cr),e(cr,ig),e(dr,lg),e(Se,dg),w(mn,Se,null),e(Se,cg),e(Se,Ze),w(pr,Ze,null),e(Ze,pg),e(Ze,co),e(co,mg),e(co,ka),e(ka,hg),e(co,ug),e(co,fl),e(fl,fg),e(co,gg),e(Ze,_g),w(hn,Ze,null),e(Ze,kg),w(un,Ze,null),e(Ze,bg),w(fn,Ze,null),_(o,gc,v),_(o,po,v),e(po,gn),e(gn,gl),w(mr,gl,null),e(po,vg),e(po,_l),e(_l,Tg),_(o,_c,v),_(o,Ie,v),w(hr,Ie,null),e(Ie,yg),e(Ie,ur),e(ur,wg),e(ur,kl),e(kl,$g),e(ur,Fg),e(Ie,Rg),e(Ie,fr),e(fr,Eg),e(fr,ba),e(ba,Bg),e(fr,Mg),e(Ie,qg),e(Ie,gr),e(gr,zg),e(gr,_r),e(_r,Cg),e(gr,xg),e(Ie,jg),w(_n,Ie,null),e(Ie,Lg),e(Ie,et),w(kr,et,null),e(et,Pg),e(et,Pe),e(Pe,Og),e(Pe,bl),e(bl,Dg),e(Pe,Ag),e(Pe,vl),e(vl,Ng),e(Pe,Sg),e(Pe,Tl),e(Tl,Ig),e(Pe,Wg),e(Pe,yl),e(yl,Ug),e(Pe,Hg),e(Pe,wl),e(wl,Qg),e(Pe,Kg),e(Pe,$l),e($l,Vg),e(Pe,Jg),e(Pe,Fl),e(Fl,Gg),e(Pe,Xg),e(et,Yg),e(et,br),e(br,vr),e(vr,Zg),e(vr,Rl),e(Rl,e_),e(vr,t_),e(br,o_),e(br,Tr),e(Tr,n_),e(Tr,El),e(El,s_),e(Tr,r_),e(et,a_),e(et,V),e(V,i_),e(V,Bl),e(Bl,l_),e(V,d_),e(V,Ml),e(Ml,c_),e(V,p_),e(V,ql),e(ql,m_),e(V,h_),e(V,zl),e(zl,u_),e(V,f_),e(V,Cl),e(Cl,g_),e(V,__),e(V,xl),e(xl,k_),e(V,b_),e(V,jl),e(jl,v_),e(V,T_),e(V,Ll),e(Ll,y_),e(V,w_),e(V,Pl),e(Pl,$_),e(V,F_),e(V,Ol),e(Ol,R_),e(V,E_),e(V,Dl),e(Dl,B_),e(V,M_),e(V,Al),e(Al,q_),e(V,z_),e(V,Nl),e(Nl,C_),e(V,x_),e(V,Sl),e(Sl,j_),e(V,L_),e(V,Il),e(Il,P_),e(V,O_),e(V,Wl),e(Wl,D_),e(V,A_),e(V,Ul),e(Ul,N_),e(V,S_),e(V,Hl),e(Hl,I_),e(V,W_),e(V,Ql),e(Ql,U_),e(V,H_),e(V,Kl),e(Kl,Q_),e(V,K_),e(et,V_),w(kn,et,null),_(o,kc,v),_(o,mo,v),e(mo,bn),e(bn,Vl),w(yr,Vl,null),e(mo,J_),e(mo,Jl),e(Jl,G_),_(o,bc,v),_(o,We,v),w(wr,We,null),e(We,X_),e(We,Gl),e(Gl,Y_),e(We,Z_),e(We,$r),e($r,ek),e($r,va),e(va,tk),e($r,ok),e(We,nk),e(We,Fr),e(Fr,sk),e(Fr,Rr),e(Rr,rk),e(Fr,ak),e(We,ik),w(vn,We,null),e(We,lk),e(We,tt),w(Er,tt,null),e(tt,dk),e(tt,ho),e(ho,ck),e(ho,Ta),e(Ta,pk),e(ho,mk),e(ho,Xl),e(Xl,hk),e(ho,uk),e(tt,fk),w(Tn,tt,null),e(tt,gk),w(yn,tt,null),e(tt,_k),w(wn,tt,null),_(o,vc,v),_(o,uo,v),e(uo,$n),e($n,Yl),w(Br,Yl,null),e(uo,kk),e(uo,Zl),e(Zl,bk),_(o,Tc,v),_(o,Ue,v),w(Mr,Ue,null),e(Ue,vk),e(Ue,ed),e(ed,Tk),e(Ue,yk),e(Ue,qr),e(qr,wk),e(qr,ya),e(ya,$k),e(qr,Fk),e(Ue,Rk),e(Ue,zr),e(zr,Ek),e(zr,Cr),e(Cr,Bk),e(zr,Mk),e(Ue,qk),w(Fn,Ue,null),e(Ue,zk),e(Ue,_t),w(xr,_t,null),e(_t,Ck),e(_t,fo),e(fo,xk),e(fo,wa),e(wa,jk),e(fo,Lk),e(fo,td),e(td,Pk),e(fo,Ok),e(_t,Dk),w(Rn,_t,null),e(_t,Ak),w(En,_t,null),_(o,yc,v),_(o,go,v),e(go,Bn),e(Bn,od),w(jr,od,null),e(go,Nk),e(go,nd),e(nd,Sk),_(o,wc,v),_(o,He,v),w(Lr,He,null),e(He,Ik),e(He,sd),e(sd,Wk),e(He,Uk),e(He,Pr),e(Pr,Hk),e(Pr,$a),e($a,Qk),e(Pr,Kk),e(He,Vk),e(He,Or),e(Or,Jk),e(Or,Dr),e(Dr,Gk),e(Or,Xk),e(He,Yk),w(Mn,He,null),e(He,Zk),e(He,ot),w(Ar,ot,null),e(ot,eb),e(ot,_o),e(_o,tb),e(_o,Fa),e(Fa,ob),e(_o,nb),e(_o,rd),e(rd,sb),e(_o,rb),e(ot,ab),w(qn,ot,null),e(ot,ib),w(zn,ot,null),e(ot,lb),w(Cn,ot,null),_(o,$c,v),_(o,ko,v),e(ko,xn),e(xn,ad),w(Nr,ad,null),e(ko,db),e(ko,id),e(id,cb),_(o,Fc,v),_(o,Qe,v),w(Sr,Qe,null),e(Qe,pb),e(Qe,bo),e(bo,mb),e(bo,ld),e(ld,hb),e(bo,ub),e(bo,dd),e(dd,fb),e(bo,gb),e(Qe,_b),e(Qe,Ir),e(Ir,kb),e(Ir,Ra),e(Ra,bb),e(Ir,vb),e(Qe,Tb),e(Qe,Wr),e(Wr,yb),e(Wr,Ur),e(Ur,wb),e(Wr,$b),e(Qe,Fb),w(jn,Qe,null),e(Qe,Rb),e(Qe,nt),w(Hr,nt,null),e(nt,Eb),e(nt,vo),e(vo,Bb),e(vo,Ea),e(Ea,Mb),e(vo,qb),e(vo,cd),e(cd,zb),e(vo,Cb),e(nt,xb),w(Ln,nt,null),e(nt,jb),w(Pn,nt,null),e(nt,Lb),w(On,nt,null),Rc=!0},p(o,[v]){const Qr={};v&2&&(Qr.$$scope={dirty:v,ctx:o}),yo.$set(Qr);const pd={};v&2&&(pd.$$scope={dirty:v,ctx:o}),Mo.$set(pd);const md={};v&2&&(md.$$scope={dirty:v,ctx:o}),Co.$set(md);const hd={};v&2&&(hd.$$scope={dirty:v,ctx:o}),jo.$set(hd);const Kr={};v&2&&(Kr.$$scope={dirty:v,ctx:o}),Lo.$set(Kr);const ud={};v&2&&(ud.$$scope={dirty:v,ctx:o}),Oo.$set(ud);const fd={};v&2&&(fd.$$scope={dirty:v,ctx:o}),Do.$set(fd);const gd={};v&2&&(gd.$$scope={dirty:v,ctx:o}),No.$set(gd);const Vr={};v&2&&(Vr.$$scope={dirty:v,ctx:o}),So.$set(Vr);const _d={};v&2&&(_d.$$scope={dirty:v,ctx:o}),Io.$set(_d);const kd={};v&2&&(kd.$$scope={dirty:v,ctx:o}),Uo.$set(kd);const bd={};v&2&&(bd.$$scope={dirty:v,ctx:o}),Ho.$set(bd);const vd={};v&2&&(vd.$$scope={dirty:v,ctx:o}),Qo.$set(vd);const Td={};v&2&&(Td.$$scope={dirty:v,ctx:o}),Ko.$set(Td);const yd={};v&2&&(yd.$$scope={dirty:v,ctx:o}),Vo.$set(yd);const Jr={};v&2&&(Jr.$$scope={dirty:v,ctx:o}),Go.$set(Jr);const wd={};v&2&&(wd.$$scope={dirty:v,ctx:o}),Xo.$set(wd);const $d={};v&2&&($d.$$scope={dirty:v,ctx:o}),Zo.$set($d);const Fd={};v&2&&(Fd.$$scope={dirty:v,ctx:o}),en.$set(Fd);const Ke={};v&2&&(Ke.$$scope={dirty:v,ctx:o}),tn.$set(Ke);const Gr={};v&2&&(Gr.$$scope={dirty:v,ctx:o}),nn.$set(Gr);const Rd={};v&2&&(Rd.$$scope={dirty:v,ctx:o}),sn.$set(Rd);const To={};v&2&&(To.$$scope={dirty:v,ctx:o}),rn.$set(To);const Ed={};v&2&&(Ed.$$scope={dirty:v,ctx:o}),ln.$set(Ed);const Bd={};v&2&&(Bd.$$scope={dirty:v,ctx:o}),dn.$set(Bd);const Md={};v&2&&(Md.$$scope={dirty:v,ctx:o}),cn.$set(Md);const qd={};v&2&&(qd.$$scope={dirty:v,ctx:o}),mn.$set(qd);const zd={};v&2&&(zd.$$scope={dirty:v,ctx:o}),hn.$set(zd);const Cd={};v&2&&(Cd.$$scope={dirty:v,ctx:o}),un.$set(Cd);const xd={};v&2&&(xd.$$scope={dirty:v,ctx:o}),fn.$set(xd);const jd={};v&2&&(jd.$$scope={dirty:v,ctx:o}),_n.$set(jd);const Ld={};v&2&&(Ld.$$scope={dirty:v,ctx:o}),kn.$set(Ld);const Xr={};v&2&&(Xr.$$scope={dirty:v,ctx:o}),vn.$set(Xr);const Pd={};v&2&&(Pd.$$scope={dirty:v,ctx:o}),Tn.$set(Pd);const Od={};v&2&&(Od.$$scope={dirty:v,ctx:o}),yn.$set(Od);const Dd={};v&2&&(Dd.$$scope={dirty:v,ctx:o}),wn.$set(Dd);const Ad={};v&2&&(Ad.$$scope={dirty:v,ctx:o}),Fn.$set(Ad);const Nd={};v&2&&(Nd.$$scope={dirty:v,ctx:o}),Rn.$set(Nd);const Sd={};v&2&&(Sd.$$scope={dirty:v,ctx:o}),En.$set(Sd);const Yr={};v&2&&(Yr.$$scope={dirty:v,ctx:o}),Mn.$set(Yr);const Id={};v&2&&(Id.$$scope={dirty:v,ctx:o}),qn.$set(Id);const Wd={};v&2&&(Wd.$$scope={dirty:v,ctx:o}),zn.$set(Wd);const Ud={};v&2&&(Ud.$$scope={dirty:v,ctx:o}),Cn.$set(Ud);const Zr={};v&2&&(Zr.$$scope={dirty:v,ctx:o}),jn.$set(Zr);const Hd={};v&2&&(Hd.$$scope={dirty:v,ctx:o}),Ln.$set(Hd);const Qd={};v&2&&(Qd.$$scope={dirty:v,ctx:o}),Pn.$set(Qd);const Kd={};v&2&&(Kd.$$scope={dirty:v,ctx:o}),On.$set(Kd)},i(o){Rc||($(l.$$.fragment,o),$(ne.$$.fragment,o),$(re.$$.fragment,o),$(Te.$$.fragment,o),$(yo.$$.fragment,o),$(Gn.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(ns.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(Mo.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(ms.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(Co.$$.fragment,o),$(_s.$$.fragment,o),$(ks.$$.fragment,o),$(bs.$$.fragment,o),$($s.$$.fragment,o),$(jo.$$.fragment,o),$(Lo.$$.fragment,o),$(Fs.$$.fragment,o),$(Rs.$$.fragment,o),$(Bs.$$.fragment,o),$(Oo.$$.fragment,o),$(Do.$$.fragment,o),$(Ms.$$.fragment,o),$(qs.$$.fragment,o),$(Cs.$$.fragment,o),$(No.$$.fragment,o),$(So.$$.fragment,o),$(Io.$$.fragment,o),$(xs.$$.fragment,o),$(js.$$.fragment,o),$(Os.$$.fragment,o),$(Uo.$$.fragment,o),$(Ho.$$.fragment,o),$(Qo.$$.fragment,o),$(Ko.$$.fragment,o),$(Vo.$$.fragment,o),$(Ds.$$.fragment,o),$(As.$$.fragment,o),$(Is.$$.fragment,o),$(Go.$$.fragment,o),$(Xo.$$.fragment,o),$(Ws.$$.fragment,o),$(Us.$$.fragment,o),$(Ks.$$.fragment,o),$(Zo.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(Vs.$$.fragment,o),$(Js.$$.fragment,o),$(Ys.$$.fragment,o),$(nn.$$.fragment,o),$(sn.$$.fragment,o),$(rn.$$.fragment,o),$(Zs.$$.fragment,o),$(er.$$.fragment,o),$(ln.$$.fragment,o),$(sr.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(rr.$$.fragment,o),$(ar.$$.fragment,o),$(mn.$$.fragment,o),$(pr.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),$(fn.$$.fragment,o),$(mr.$$.fragment,o),$(hr.$$.fragment,o),$(_n.$$.fragment,o),$(kr.$$.fragment,o),$(kn.$$.fragment,o),$(yr.$$.fragment,o),$(wr.$$.fragment,o),$(vn.$$.fragment,o),$(Er.$$.fragment,o),$(Tn.$$.fragment,o),$(yn.$$.fragment,o),$(wn.$$.fragment,o),$(Br.$$.fragment,o),$(Mr.$$.fragment,o),$(Fn.$$.fragment,o),$(xr.$$.fragment,o),$(Rn.$$.fragment,o),$(En.$$.fragment,o),$(jr.$$.fragment,o),$(Lr.$$.fragment,o),$(Mn.$$.fragment,o),$(Ar.$$.fragment,o),$(qn.$$.fragment,o),$(zn.$$.fragment,o),$(Cn.$$.fragment,o),$(Nr.$$.fragment,o),$(Sr.$$.fragment,o),$(jn.$$.fragment,o),$(Hr.$$.fragment,o),$(Ln.$$.fragment,o),$(Pn.$$.fragment,o),$(On.$$.fragment,o),Rc=!0)},o(o){F(l.$$.fragment,o),F(ne.$$.fragment,o),F(re.$$.fragment,o),F(Te.$$.fragment,o),F(yo.$$.fragment,o),F(Gn.$$.fragment,o),F(Xn.$$.fragment,o),F(Yn.$$.fragment,o),F(Zn.$$.fragment,o),F(ns.$$.fragment,o),F(rs.$$.fragment,o),F(is.$$.fragment,o),F(Mo.$$.fragment,o),F(ls.$$.fragment,o),F(ds.$$.fragment,o),F(cs.$$.fragment,o),F(ms.$$.fragment,o),F(us.$$.fragment,o),F(gs.$$.fragment,o),F(Co.$$.fragment,o),F(_s.$$.fragment,o),F(ks.$$.fragment,o),F(bs.$$.fragment,o),F($s.$$.fragment,o),F(jo.$$.fragment,o),F(Lo.$$.fragment,o),F(Fs.$$.fragment,o),F(Rs.$$.fragment,o),F(Bs.$$.fragment,o),F(Oo.$$.fragment,o),F(Do.$$.fragment,o),F(Ms.$$.fragment,o),F(qs.$$.fragment,o),F(Cs.$$.fragment,o),F(No.$$.fragment,o),F(So.$$.fragment,o),F(Io.$$.fragment,o),F(xs.$$.fragment,o),F(js.$$.fragment,o),F(Os.$$.fragment,o),F(Uo.$$.fragment,o),F(Ho.$$.fragment,o),F(Qo.$$.fragment,o),F(Ko.$$.fragment,o),F(Vo.$$.fragment,o),F(Ds.$$.fragment,o),F(As.$$.fragment,o),F(Is.$$.fragment,o),F(Go.$$.fragment,o),F(Xo.$$.fragment,o),F(Ws.$$.fragment,o),F(Us.$$.fragment,o),F(Ks.$$.fragment,o),F(Zo.$$.fragment,o),F(en.$$.fragment,o),F(tn.$$.fragment,o),F(Vs.$$.fragment,o),F(Js.$$.fragment,o),F(Ys.$$.fragment,o),F(nn.$$.fragment,o),F(sn.$$.fragment,o),F(rn.$$.fragment,o),F(Zs.$$.fragment,o),F(er.$$.fragment,o),F(ln.$$.fragment,o),F(sr.$$.fragment,o),F(dn.$$.fragment,o),F(cn.$$.fragment,o),F(rr.$$.fragment,o),F(ar.$$.fragment,o),F(mn.$$.fragment,o),F(pr.$$.fragment,o),F(hn.$$.fragment,o),F(un.$$.fragment,o),F(fn.$$.fragment,o),F(mr.$$.fragment,o),F(hr.$$.fragment,o),F(_n.$$.fragment,o),F(kr.$$.fragment,o),F(kn.$$.fragment,o),F(yr.$$.fragment,o),F(wr.$$.fragment,o),F(vn.$$.fragment,o),F(Er.$$.fragment,o),F(Tn.$$.fragment,o),F(yn.$$.fragment,o),F(wn.$$.fragment,o),F(Br.$$.fragment,o),F(Mr.$$.fragment,o),F(Fn.$$.fragment,o),F(xr.$$.fragment,o),F(Rn.$$.fragment,o),F(En.$$.fragment,o),F(jr.$$.fragment,o),F(Lr.$$.fragment,o),F(Mn.$$.fragment,o),F(Ar.$$.fragment,o),F(qn.$$.fragment,o),F(zn.$$.fragment,o),F(Cn.$$.fragment,o),F(Nr.$$.fragment,o),F(Sr.$$.fragment,o),F(jn.$$.fragment,o),F(Hr.$$.fragment,o),F(Ln.$$.fragment,o),F(Pn.$$.fragment,o),F(On.$$.fragment,o),Rc=!1},d(o){t(d),o&&t(g),o&&t(c),R(l),o&&t(X),o&&t(q),R(ne),o&&t(pe),o&&t(J),o&&t(x),o&&t(ae),o&&t(me),o&&t(ie),o&&t(he),o&&t(C),o&&t(W),o&&t(le),o&&t(U),o&&t(ee),R(re),o&&t(B),o&&t(P),R(Te),R(yo),R(Gn),R(Xn),o&&t(Vd),o&&t(Nt),R(Yn),o&&t(Jd),o&&t(Le),R(Zn),R(ns),R(rs),R(is),R(Mo),R(ls),o&&t(Gd),o&&t(It),R(ds),o&&t(Xd),o&&t(De),R(cs),R(ms),R(us),R(gs),R(Co),R(_s),o&&t(Yd),o&&t(Wt),R(ks),o&&t(Zd),o&&t(Je),R(bs),R($s),R(jo),R(Lo),o&&t(ec),o&&t(Ht),R(Fs),o&&t(tc),o&&t(Et),R(Rs),R(Bs),R(Oo),R(Do),o&&t(oc),o&&t(Vt),R(Ms),o&&t(nc),o&&t(Bt),R(qs),R(Cs),R(No),R(So),R(Io),o&&t(sc),o&&t(Xt),R(xs),o&&t(rc),o&&t(it),R(js),R(Os),R(Uo),R(Ho),R(Qo),R(Ko),R(Vo),o&&t(ac),o&&t(Zt),R(Ds),o&&t(ic),o&&t(lt),R(As),R(Is),R(Go),R(Xo),o&&t(lc),o&&t(to),R(Ws),o&&t(dc),o&&t(dt),R(Us),R(Ks),R(Zo),R(en),R(tn),o&&t(cc),o&&t(no),R(Vs),o&&t(pc),o&&t(ct),R(Js),R(Ys),R(nn),R(sn),R(rn),o&&t(mc),o&&t(ao),R(Zs),o&&t(hc),o&&t(Ne),R(er),R(ln),R(sr),R(dn),R(cn),o&&t(uc),o&&t(lo),R(rr),o&&t(fc),o&&t(Se),R(ar),R(mn),R(pr),R(hn),R(un),R(fn),o&&t(gc),o&&t(po),R(mr),o&&t(_c),o&&t(Ie),R(hr),R(_n),R(kr),R(kn),o&&t(kc),o&&t(mo),R(yr),o&&t(bc),o&&t(We),R(wr),R(vn),R(Er),R(Tn),R(yn),R(wn),o&&t(vc),o&&t(uo),R(Br),o&&t(Tc),o&&t(Ue),R(Mr),R(Fn),R(xr),R(Rn),R(En),o&&t(yc),o&&t(go),R(jr),o&&t(wc),o&&t(He),R(Lr),R(Mn),R(Ar),R(qn),R(zn),R(Cn),o&&t($c),o&&t(ko),R(Nr),o&&t(Fc),o&&t(Qe),R(Sr),R(jn),R(Hr),R(Ln),R(Pn),R(On)}}}const N1={local:"rembert",sections:[{local:"overview",title:"Overview"},{local:"transformers.RemBertConfig",title:"RemBertConfig"},{local:"transformers.RemBertTokenizer",title:"RemBertTokenizer"},{local:"transformers.RemBertTokenizerFast",title:"RemBertTokenizerFast"},{local:"transformers.RemBertModel",title:"RemBertModel"},{local:"transformers.RemBertForCausalLM",title:"RemBertForCausalLM"},{local:"transformers.RemBertForMaskedLM",title:"RemBertForMaskedLM"},{local:"transformers.RemBertForSequenceClassification",title:"RemBertForSequenceClassification"},{local:"transformers.RemBertForMultipleChoice",title:"RemBertForMultipleChoice"},{local:"transformers.RemBertForTokenClassification",title:"RemBertForTokenClassification"},{local:"transformers.RemBertForQuestionAnswering",title:"RemBertForQuestionAnswering"},{local:"transformers.TFRemBertModel",title:"TFRemBertModel"},{local:"transformers.TFRemBertForMaskedLM",title:"TFRemBertForMaskedLM"},{local:"transformers.TFRemBertForCausalLM",title:"TFRemBertForCausalLM"},{local:"transformers.TFRemBertForSequenceClassification",title:"TFRemBertForSequenceClassification"},{local:"transformers.TFRemBertForMultipleChoice",title:"TFRemBertForMultipleChoice"},{local:"transformers.TFRemBertForTokenClassification",title:"TFRemBertForTokenClassification"},{local:"transformers.TFRemBertForQuestionAnswering",title:"TFRemBertForQuestionAnswering"}],title:"RemBERT"};function S1(E){return Hy(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class V1 extends Sy{constructor(d){super();Iy(this,d,S1,A1,Wy,{})}}export{V1 as default,N1 as metadata};
