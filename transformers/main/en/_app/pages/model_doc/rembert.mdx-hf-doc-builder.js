import{S as Hy,i as Qy,s as Ky,e as r,k as m,w as v,t as n,M as Vy,c as a,d as t,m as h,a as i,x as y,h as s,b,G as e,g as _,y as w,q as $,o as F,B as R,v as Jy,L as $e}from"../../chunks/vendor-hf-doc-builder.js";import{T as je}from"../../chunks/Tip-hf-doc-builder.js";import{D as Y}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Fe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as we}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Gy(E){let d,g,c,p,k;return p=new Fe({props:{code:"",highlighted:""}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Xy(E){let d,g,c,p,k;return p=new Fe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("sequence pair mask has the following format:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"sequence pair mask has the following format:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Yy(E){let d,g,c,p,k;return p=new Fe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("sequence pair mask has the following format:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"sequence pair mask has the following format:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Zy(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function ew(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function tw(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function ow(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForCausalLM, RemBertConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function nw(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function sw(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForMaskedLM
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
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function rw(E){let d,g;return d=new Fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function aw(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function iw(E){let d,g,c,p,k;return p=new Fe({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=n("Example of single-label classification:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example of single-label classification:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function lw(E){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function dw(E){let d,g,c,p,k;return p=new Fe({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=n("Example of multi-label classification:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example of multi-label classification:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function cw(E){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RemBertForSequenceClassification.from_pretrained(
    "rembert", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;rembert&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function pw(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function mw(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function hw(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function uw(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForTokenClassification
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
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function fw(E){let d,g;return d=new Fe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function gw(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function _w(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForQuestionAnswering
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
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function kw(E){let d,g;return d=new Fe({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function bw(E){let d,g,c,p,k,l,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,O,se,Z,q,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(f),p=a(f,"UL",{});var P=i(p);k=a(P,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=h(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=h(f),q=a(f,"UL",{});var D=i(q);x=a(D,"LI",{});var A=i(x);ae=s(A,"a single Tensor with "),H=a(A,"CODE",{});var Me=i(H);me=s(Me,"input_ids"),Me.forEach(t),ie=s(A," only and nothing else: "),I=a(A,"CODE",{});var ze=i(I);_e=s(ze,"model(inputs_ids)"),ze.forEach(t),A.forEach(t),he=h(D),C=a(D,"LI",{});var K=i(C);ke=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(K,"CODE",{});var Te=i(W);le=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),be=s(K," or "),U=a(K,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),K.forEach(t),oe=h(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,d,B),e(d,g),_(f,c,B),_(f,p,B),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,z,B),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,q,B),e(q,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(q,he),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(O),f&&t(Z),f&&t(q)}}}function Tw(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function vw(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function yw(E){let d,g,c,p,k,l,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,O,se,Z,q,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(f),p=a(f,"UL",{});var P=i(p);k=a(P,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=h(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=h(f),q=a(f,"UL",{});var D=i(q);x=a(D,"LI",{});var A=i(x);ae=s(A,"a single Tensor with "),H=a(A,"CODE",{});var Me=i(H);me=s(Me,"input_ids"),Me.forEach(t),ie=s(A," only and nothing else: "),I=a(A,"CODE",{});var ze=i(I);_e=s(ze,"model(inputs_ids)"),ze.forEach(t),A.forEach(t),he=h(D),C=a(D,"LI",{});var K=i(C);ke=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(K,"CODE",{});var Te=i(W);le=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),be=s(K," or "),U=a(K,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),K.forEach(t),oe=h(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,d,B),e(d,g),_(f,c,B),_(f,p,B),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,z,B),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,q,B),e(q,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(q,he),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(O),f&&t(Z),f&&t(q)}}}function ww(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function $w(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForMaskedLM
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = TFRemBertForMaskedLM.from_pretrained("rembert")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Fw(E){let d,g;return d=new Fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function Rw(E){let d,g,c,p,k,l,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,O,se,Z,q,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(f),p=a(f,"UL",{});var P=i(p);k=a(P,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=h(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=h(f),q=a(f,"UL",{});var D=i(q);x=a(D,"LI",{});var A=i(x);ae=s(A,"a single Tensor with "),H=a(A,"CODE",{});var Me=i(H);me=s(Me,"input_ids"),Me.forEach(t),ie=s(A," only and nothing else: "),I=a(A,"CODE",{});var ze=i(I);_e=s(ze,"model(inputs_ids)"),ze.forEach(t),A.forEach(t),he=h(D),C=a(D,"LI",{});var K=i(C);ke=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(K,"CODE",{});var Te=i(W);le=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),be=s(K," or "),U=a(K,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),K.forEach(t),oe=h(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,d,B),e(d,g),_(f,c,B),_(f,p,B),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,z,B),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,q,B),e(q,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(q,he),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(O),f&&t(Z),f&&t(q)}}}function Ew(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Bw(E){let d,g,c,p,k,l,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,O,se,Z,q,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(f),p=a(f,"UL",{});var P=i(p);k=a(P,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=h(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=h(f),q=a(f,"UL",{});var D=i(q);x=a(D,"LI",{});var A=i(x);ae=s(A,"a single Tensor with "),H=a(A,"CODE",{});var Me=i(H);me=s(Me,"input_ids"),Me.forEach(t),ie=s(A," only and nothing else: "),I=a(A,"CODE",{});var ze=i(I);_e=s(ze,"model(inputs_ids)"),ze.forEach(t),A.forEach(t),he=h(D),C=a(D,"LI",{});var K=i(C);ke=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(K,"CODE",{});var Te=i(W);le=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),be=s(K," or "),U=a(K,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),K.forEach(t),oe=h(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,d,B),e(d,g),_(f,c,B),_(f,p,B),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,z,B),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,q,B),e(q,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(q,he),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(O),f&&t(Z),f&&t(q)}}}function Mw(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function zw(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForSequenceClassification
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
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function qw(E){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function Cw(E){let d,g,c,p,k,l,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,O,se,Z,q,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(f),p=a(f,"UL",{});var P=i(p);k=a(P,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=h(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=h(f),q=a(f,"UL",{});var D=i(q);x=a(D,"LI",{});var A=i(x);ae=s(A,"a single Tensor with "),H=a(A,"CODE",{});var Me=i(H);me=s(Me,"input_ids"),Me.forEach(t),ie=s(A," only and nothing else: "),I=a(A,"CODE",{});var ze=i(I);_e=s(ze,"model(inputs_ids)"),ze.forEach(t),A.forEach(t),he=h(D),C=a(D,"LI",{});var K=i(C);ke=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(K,"CODE",{});var Te=i(W);le=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),be=s(K," or "),U=a(K,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),K.forEach(t),oe=h(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,d,B),e(d,g),_(f,c,B),_(f,p,B),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,z,B),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,q,B),e(q,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(q,he),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(O),f&&t(Z),f&&t(q)}}}function xw(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function jw(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Lw(E){let d,g,c,p,k,l,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,O,se,Z,q,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(f),p=a(f,"UL",{});var P=i(p);k=a(P,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=h(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=h(f),q=a(f,"UL",{});var D=i(q);x=a(D,"LI",{});var A=i(x);ae=s(A,"a single Tensor with "),H=a(A,"CODE",{});var Me=i(H);me=s(Me,"input_ids"),Me.forEach(t),ie=s(A," only and nothing else: "),I=a(A,"CODE",{});var ze=i(I);_e=s(ze,"model(inputs_ids)"),ze.forEach(t),A.forEach(t),he=h(D),C=a(D,"LI",{});var K=i(C);ke=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(K,"CODE",{});var Te=i(W);le=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),be=s(K," or "),U=a(K,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),K.forEach(t),oe=h(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,d,B),e(d,g),_(f,c,B),_(f,p,B),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,z,B),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,q,B),e(q,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(q,he),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(O),f&&t(Z),f&&t(q)}}}function Pw(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Ow(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForTokenClassification
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
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Dw(E){let d,g;return d=new Fe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function Aw(E){let d,g,c,p,k,l,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,O,se,Z,q,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(f),p=a(f,"UL",{});var P=i(p);k=a(P,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=h(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=h(f),q=a(f,"UL",{});var D=i(q);x=a(D,"LI",{});var A=i(x);ae=s(A,"a single Tensor with "),H=a(A,"CODE",{});var Me=i(H);me=s(Me,"input_ids"),Me.forEach(t),ie=s(A," only and nothing else: "),I=a(A,"CODE",{});var ze=i(I);_e=s(ze,"model(inputs_ids)"),ze.forEach(t),A.forEach(t),he=h(D),C=a(D,"LI",{});var K=i(C);ke=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(K,"CODE",{});var Te=i(W);le=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),be=s(K," or "),U=a(K,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),K.forEach(t),oe=h(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,d,B),e(d,g),_(f,c,B),_(f,p,B),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,z,B),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,q,B),e(q,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(q,he),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(O),f&&t(Z),f&&t(q)}}}function Nw(E){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Sw(E){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForQuestionAnswering
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
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Iw(E){let d,g;return d=new Fe({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function Ww(E){let d,g,c,p,k,l,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,O,se,Z,q,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce,f,B,P,ve,Re,j,Ee,ye,Be,D,A,Me,ze,K,Te,qe,de,Ce,yp,ea,wp,$p,Fp,wo,Rp,Xa,Ya,Za,ei,Ep,Bp,ti,oi,ni,$o,Fo,si,Xn,Mp,ri,zp,qp,ai,ii,li,Ro,Eo,di,Yn,Cp,ci,xp,Jd,Nt,Bo,pi,Zn,jp,mi,Lp,Gd,Le,es,Pp,ts,Op,os,Dp,Ap,Np,ns,Sp,ta,Ip,Wp,Up,Mt,ss,Hp,hi,Qp,Kp,rs,oa,Vp,ui,Jp,Gp,na,Xp,fi,Yp,Zp,Mo,as,em,is,tm,gi,om,nm,sm,pt,ls,rm,_i,am,im,zo,lm,St,dm,ki,cm,pm,bi,mm,hm,um,sa,ds,Xd,It,qo,Ti,cs,fm,vi,gm,Yd,De,ps,_m,Rt,km,yi,bm,Tm,ms,vm,ym,ra,wm,$m,Fm,zt,hs,Rm,wi,Em,Bm,us,aa,Mm,$i,zm,qm,ia,Cm,Fi,xm,jm,Co,fs,Lm,gs,Pm,Ri,Om,Dm,Am,mt,_s,Nm,Ei,Sm,Im,xo,Wm,Bi,Um,Hm,la,ks,Zd,Wt,jo,Mi,bs,Qm,zi,Km,ec,Je,Ts,Vm,vs,Jm,ys,Gm,Xm,Ym,ws,Zm,$s,eh,th,oh,Ae,nh,qi,sh,rh,Ci,ah,ih,xi,lh,dh,ji,ch,ph,Li,mh,hh,Pi,uh,fh,gh,ht,Fs,_h,Ut,kh,da,bh,Th,Oi,vh,yh,wh,Lo,$h,Po,tc,Ht,Oo,Di,Rs,Fh,Ai,Rh,oc,Et,Es,Eh,Qt,Bh,Ni,Mh,zh,Bs,qh,Ch,xh,ut,Ms,jh,Kt,Lh,ca,Ph,Oh,Si,Dh,Ah,Nh,Do,Sh,Ao,nc,Vt,No,Ii,zs,Ih,Wi,Wh,sc,Bt,qs,Uh,Jt,Hh,Ui,Qh,Kh,Cs,Vh,Jh,Gh,Ge,xs,Xh,Gt,Yh,pa,Zh,eu,Hi,tu,ou,nu,So,su,Io,ru,Wo,rc,Xt,Uo,Qi,js,au,Ki,iu,ac,it,Ls,lu,Vi,du,cu,Ps,pu,Os,mu,hu,uu,Oe,Ds,fu,Yt,gu,ma,_u,ku,Ji,bu,Tu,vu,Ho,yu,Qo,wu,Ko,$u,Vo,Fu,Jo,ic,Zt,Go,Gi,As,Ru,Xi,Eu,lc,lt,Ns,Bu,Yi,Mu,zu,Ss,qu,Is,Cu,xu,ju,ft,Ws,Lu,eo,Pu,ha,Ou,Du,Zi,Au,Nu,Su,Xo,Iu,Yo,dc,to,Zo,el,Us,Wu,tl,Uu,cc,dt,Hs,Hu,ol,Qu,Ku,Qs,Vu,Ks,Ju,Gu,Xu,Xe,Vs,Yu,oo,Zu,ua,ef,tf,nl,of,nf,sf,en,rf,tn,af,on,pc,no,nn,sl,Js,lf,rl,df,mc,ct,Gs,cf,so,pf,al,mf,hf,il,uf,ff,gf,Xs,_f,Ys,kf,bf,Tf,Ye,Zs,vf,ro,yf,fa,wf,$f,ll,Ff,Rf,Ef,sn,Bf,rn,Mf,an,hc,ao,ln,dl,er,zf,cl,qf,uc,Ne,tr,Cf,pl,xf,jf,or,Lf,ga,Pf,Of,Df,nr,Af,sr,Nf,Sf,If,dn,Wf,gt,rr,Uf,io,Hf,_a,Qf,Kf,ml,Vf,Jf,Gf,cn,Xf,pn,fc,lo,mn,hl,ar,Yf,ul,Zf,gc,Se,ir,eg,lr,tg,fl,og,ng,sg,dr,rg,ka,ag,ig,lg,cr,dg,pr,cg,pg,mg,hn,hg,Ze,mr,ug,co,fg,ba,gg,_g,gl,kg,bg,Tg,un,vg,fn,yg,gn,_c,po,_n,_l,hr,wg,kl,$g,kc,Ie,ur,Fg,fr,Rg,bl,Eg,Bg,Mg,gr,zg,Ta,qg,Cg,xg,_r,jg,kr,Lg,Pg,Og,kn,Dg,et,br,Ag,Pe,Ng,Tl,Sg,Ig,vl,Wg,Ug,yl,Hg,Qg,wl,Kg,Vg,$l,Jg,Gg,Fl,Xg,Yg,Rl,Zg,e_,t_,Tr,vr,o_,El,n_,s_,r_,yr,a_,Bl,i_,l_,d_,V,c_,Ml,p_,m_,zl,h_,u_,ql,f_,g_,Cl,__,k_,xl,b_,T_,jl,v_,y_,Ll,w_,$_,Pl,F_,R_,Ol,E_,B_,Dl,M_,z_,Al,q_,C_,Nl,x_,j_,Sl,L_,P_,Il,O_,D_,Wl,A_,N_,Ul,S_,I_,Hl,W_,U_,Ql,H_,Q_,Kl,K_,V_,Vl,J_,G_,X_,bn,bc,mo,Tn,Jl,wr,Y_,Gl,Z_,Tc,We,$r,ek,Xl,tk,ok,Fr,nk,va,sk,rk,ak,Rr,ik,Er,lk,dk,ck,vn,pk,tt,Br,mk,ho,hk,ya,uk,fk,Yl,gk,_k,kk,yn,bk,wn,Tk,$n,vc,uo,Fn,Zl,Mr,vk,ed,yk,yc,Ue,zr,wk,td,$k,Fk,qr,Rk,wa,Ek,Bk,Mk,Cr,zk,xr,qk,Ck,xk,Rn,jk,_t,jr,Lk,fo,Pk,$a,Ok,Dk,od,Ak,Nk,Sk,En,Ik,Bn,wc,go,Mn,nd,Lr,Wk,sd,Uk,$c,He,Pr,Hk,rd,Qk,Kk,Or,Vk,Fa,Jk,Gk,Xk,Dr,Yk,Ar,Zk,eb,tb,zn,ob,ot,Nr,nb,_o,sb,Ra,rb,ab,ad,ib,lb,db,qn,cb,Cn,pb,xn,Fc,ko,jn,id,Sr,mb,ld,hb,Rc,Qe,Ir,ub,bo,fb,dd,gb,_b,cd,kb,bb,Tb,Wr,vb,Ea,yb,wb,$b,Ur,Fb,Hr,Rb,Eb,Bb,Ln,Mb,nt,Qr,zb,To,qb,Ba,Cb,xb,pd,jb,Lb,Pb,Pn,Ob,On,Db,Dn,Ec;return l=new xe({}),ne=new xe({}),re=new xe({}),ve=new Y({props:{name:"class transformers.RemBertConfig",anchor:"transformers.RemBertConfig",parameters:[{name:"vocab_size",val:" = 250300"},{name:"hidden_size",val:" = 1152"},{name:"num_hidden_layers",val:" = 32"},{name:"num_attention_heads",val:" = 18"},{name:"input_embedding_size",val:" = 256"},{name:"output_embedding_size",val:" = 1664"},{name:"intermediate_size",val:" = 4608"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 312"},{name:"eos_token_id",val:" = 313"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RemBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 250300) &#x2014;
Vocabulary size of the RemBERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertModel">RemBertModel</a> or <a href="/docs/transformers/main/en/model_doc/rembert#transformers.TFRemBertModel">TFRemBertModel</a>. Vocabulary size of the model.
Defines the different tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of
<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertModel">RemBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.RemBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1152) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertModel">RemBertModel</a> or <a href="/docs/transformers/main/en/model_doc/rembert#transformers.TFRemBertModel">TFRemBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RemBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RemBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RemBertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/configuration_rembert.py#L29"}}),wo=new we({props:{anchor:"transformers.RemBertConfig.example",$$slots:{default:[Gy]},$$scope:{ctx:E}}}),Xn=new xe({}),Yn=new xe({}),Zn=new xe({}),es=new Y({props:{name:"class transformers.RemBertTokenizer",anchor:"transformers.RemBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = True"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert.py#L43"}}),ss=new Y({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RemBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert.py#L172",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),as=new Y({props:{name:"get_special_tokens_mask",anchor:"transformers.RemBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RemBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert.py#L197",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ls=new Y({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert.py#L228",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),zo=new we({props:{anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Xy]},$$scope:{ctx:E}}}),ds=new Y({props:{name:"save_vocabulary",anchor:"transformers.RemBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert.py#L258"}}),cs=new xe({}),ps=new Y({props:{name:"class transformers.RemBertTokenizerFast",anchor:"transformers.RemBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert_fast.py#L51"}}),hs=new Y({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RemBertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert_fast.py#L144",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fs=new Y({props:{name:"get_special_tokens_mask",anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert_fast.py#L169",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),_s=new Y({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert_fast.py#L200",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xo=new we({props:{anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[Yy]},$$scope:{ctx:E}}}),ks=new Y({props:{name:"save_vocabulary",anchor:"transformers.RemBertTokenizerFast.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert_fast.py#L230"}}),bs=new xe({}),Ts=new Y({props:{name:"class transformers.RemBertModel",anchor:"transformers.RemBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RemBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L747"}}),Fs=new Y({props:{name:"forward",anchor:"transformers.RemBertModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L786",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lo=new je({props:{$$slots:{default:[Zy]},$$scope:{ctx:E}}}),Po=new we({props:{anchor:"transformers.RemBertModel.forward.example",$$slots:{default:[ew]},$$scope:{ctx:E}}}),Rs=new xe({}),Es=new Y({props:{name:"class transformers.RemBertForCausalLM",anchor:"transformers.RemBertForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L1020"}}),Ms=new Y({props:{name:"forward",anchor:"transformers.RemBertForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L1042",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Do=new je({props:{$$slots:{default:[tw]},$$scope:{ctx:E}}}),Ao=new we({props:{anchor:"transformers.RemBertForCausalLM.forward.example",$$slots:{default:[ow]},$$scope:{ctx:E}}}),zs=new xe({}),qs=new Y({props:{name:"class transformers.RemBertForMaskedLM",anchor:"transformers.RemBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L917"}}),xs=new Y({props:{name:"forward",anchor:"transformers.RemBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L939",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new je({props:{$$slots:{default:[nw]},$$scope:{ctx:E}}}),Io=new we({props:{anchor:"transformers.RemBertForMaskedLM.forward.example",$$slots:{default:[sw]},$$scope:{ctx:E}}}),Wo=new we({props:{anchor:"transformers.RemBertForMaskedLM.forward.example-2",$$slots:{default:[rw]},$$scope:{ctx:E}}}),js=new xe({}),Ls=new Y({props:{name:"class transformers.RemBertForSequenceClassification",anchor:"transformers.RemBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L1173"}}),Ds=new Y({props:{name:"forward",anchor:"transformers.RemBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L1184",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new je({props:{$$slots:{default:[aw]},$$scope:{ctx:E}}}),Qo=new we({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example",$$slots:{default:[iw]},$$scope:{ctx:E}}}),Ko=new we({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example-2",$$slots:{default:[lw]},$$scope:{ctx:E}}}),Vo=new we({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example-3",$$slots:{default:[dw]},$$scope:{ctx:E}}}),Jo=new we({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example-4",$$slots:{default:[cw]},$$scope:{ctx:E}}}),As=new xe({}),Ns=new Y({props:{name:"class transformers.RemBertForMultipleChoice",anchor:"transformers.RemBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L1270"}}),Ws=new Y({props:{name:"forward",anchor:"transformers.RemBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L1281",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xo=new je({props:{$$slots:{default:[pw]},$$scope:{ctx:E}}}),Yo=new we({props:{anchor:"transformers.RemBertForMultipleChoice.forward.example",$$slots:{default:[mw]},$$scope:{ctx:E}}}),Us=new xe({}),Hs=new Y({props:{name:"class transformers.RemBertForTokenClassification",anchor:"transformers.RemBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L1362"}}),Vs=new Y({props:{name:"forward",anchor:"transformers.RemBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L1374",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),en=new je({props:{$$slots:{default:[hw]},$$scope:{ctx:E}}}),tn=new we({props:{anchor:"transformers.RemBertForTokenClassification.forward.example",$$slots:{default:[uw]},$$scope:{ctx:E}}}),on=new we({props:{anchor:"transformers.RemBertForTokenClassification.forward.example-2",$$slots:{default:[fw]},$$scope:{ctx:E}}}),Js=new xe({}),Gs=new Y({props:{name:"class transformers.RemBertForQuestionAnswering",anchor:"transformers.RemBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L1441"}}),Zs=new Y({props:{name:"forward",anchor:"transformers.RemBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RemBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L1453",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new je({props:{$$slots:{default:[gw]},$$scope:{ctx:E}}}),rn=new we({props:{anchor:"transformers.RemBertForQuestionAnswering.forward.example",$$slots:{default:[_w]},$$scope:{ctx:E}}}),an=new we({props:{anchor:"transformers.RemBertForQuestionAnswering.forward.example-2",$$slots:{default:[kw]},$$scope:{ctx:E}}}),er=new xe({}),tr=new Y({props:{name:"class transformers.TFRemBertModel",anchor:"transformers.TFRemBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L931"}}),dn=new je({props:{$$slots:{default:[bw]},$$scope:{ctx:E}}}),rr=new Y({props:{name:"call",anchor:"transformers.TFRemBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L937",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cn=new je({props:{$$slots:{default:[Tw]},$$scope:{ctx:E}}}),pn=new we({props:{anchor:"transformers.TFRemBertModel.call.example",$$slots:{default:[vw]},$$scope:{ctx:E}}}),ar=new xe({}),ir=new Y({props:{name:"class transformers.TFRemBertForMaskedLM",anchor:"transformers.TFRemBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1024"}}),hn=new je({props:{$$slots:{default:[yw]},$$scope:{ctx:E}}}),mr=new Y({props:{name:"call",anchor:"transformers.TFRemBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1040",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),un=new je({props:{$$slots:{default:[ww]},$$scope:{ctx:E}}}),fn=new we({props:{anchor:"transformers.TFRemBertForMaskedLM.call.example",$$slots:{default:[$w]},$$scope:{ctx:E}}}),gn=new we({props:{anchor:"transformers.TFRemBertForMaskedLM.call.example-2",$$slots:{default:[Fw]},$$scope:{ctx:E}}}),hr=new xe({}),ur=new Y({props:{name:"class transformers.TFRemBertForCausalLM",anchor:"transformers.TFRemBertForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1105"}}),kn=new je({props:{$$slots:{default:[Rw]},$$scope:{ctx:E}}}),br=new Y({props:{name:"call",anchor:"transformers.TFRemBertForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1131",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),bn=new we({props:{anchor:"transformers.TFRemBertForCausalLM.call.example",$$slots:{default:[Ew]},$$scope:{ctx:E}}}),wr=new xe({}),$r=new Y({props:{name:"class transformers.TFRemBertForSequenceClassification",anchor:"transformers.TFRemBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1247"}}),vn=new je({props:{$$slots:{default:[Bw]},$$scope:{ctx:E}}}),Br=new Y({props:{name:"call",anchor:"transformers.TFRemBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1261",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),yn=new je({props:{$$slots:{default:[Mw]},$$scope:{ctx:E}}}),wn=new we({props:{anchor:"transformers.TFRemBertForSequenceClassification.call.example",$$slots:{default:[zw]},$$scope:{ctx:E}}}),$n=new we({props:{anchor:"transformers.TFRemBertForSequenceClassification.call.example-2",$$slots:{default:[qw]},$$scope:{ctx:E}}}),Mr=new xe({}),zr=new Y({props:{name:"class transformers.TFRemBertForMultipleChoice",anchor:"transformers.TFRemBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1331"}}),Rn=new je({props:{$$slots:{default:[Cw]},$$scope:{ctx:E}}}),jr=new Y({props:{name:"call",anchor:"transformers.TFRemBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1351",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),En=new je({props:{$$slots:{default:[xw]},$$scope:{ctx:E}}}),Bn=new we({props:{anchor:"transformers.TFRemBertForMultipleChoice.call.example",$$slots:{default:[jw]},$$scope:{ctx:E}}}),Lr=new xe({}),Pr=new Y({props:{name:"class transformers.TFRemBertForTokenClassification",anchor:"transformers.TFRemBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1458"}}),zn=new je({props:{$$slots:{default:[Lw]},$$scope:{ctx:E}}}),Nr=new Y({props:{name:"call",anchor:"transformers.TFRemBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1470",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),qn=new je({props:{$$slots:{default:[Pw]},$$scope:{ctx:E}}}),Cn=new we({props:{anchor:"transformers.TFRemBertForTokenClassification.call.example",$$slots:{default:[Ow]},$$scope:{ctx:E}}}),xn=new we({props:{anchor:"transformers.TFRemBertForTokenClassification.call.example-2",$$slots:{default:[Dw]},$$scope:{ctx:E}}}),Sr=new xe({}),Ir=new Y({props:{name:"class transformers.TFRemBertForQuestionAnswering",anchor:"transformers.TFRemBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1538"}}),Ln=new je({props:{$$slots:{default:[Aw]},$$scope:{ctx:E}}}),Qr=new Y({props:{name:"call",anchor:"transformers.TFRemBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1549",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pn=new je({props:{$$slots:{default:[Nw]},$$scope:{ctx:E}}}),On=new we({props:{anchor:"transformers.TFRemBertForQuestionAnswering.call.example",$$slots:{default:[Sw]},$$scope:{ctx:E}}}),Dn=new we({props:{anchor:"transformers.TFRemBertForQuestionAnswering.call.example-2",$$slots:{default:[Iw]},$$scope:{ctx:E}}}),{c(){d=r("meta"),g=m(),c=r("h1"),p=r("a"),k=r("span"),v(l.$$.fragment),u=m(),M=r("span"),ue=n("RemBERT"),X=m(),z=r("h2"),te=r("a"),N=r("span"),v(ne.$$.fragment),fe=m(),S=r("span"),ge=n("Overview"),pe=m(),J=r("p"),O=n("The RemBERT model was proposed in "),se=r("a"),Z=n("Rethinking Embedding Coupling in Pre-trained Language Models"),q=n(" by Hyung Won Chung, Thibault F\xE9vry, Henry Tsai, Melvin Johnson, Sebastian Ruder."),x=m(),ae=r("p"),H=n("The abstract from the paper is the following:"),me=m(),ie=r("p"),I=r("em"),_e=n(`We re-evaluate the standard practice of sharing weights between input and output embeddings in state-of-the-art
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
also similar to the Albert one rather than the BERT one.`),U=m(),ee=r("h2"),oe=r("a"),L=r("span"),v(re.$$.fragment),Q=m(),ce=r("span"),f=n("RemBertConfig"),B=m(),P=r("div"),v(ve.$$.fragment),Re=m(),j=r("p"),Ee=n("This is the configuration class to store the configuration of a "),ye=r("a"),Be=n("RemBertModel"),D=n(`. It is used to instantiate an
RemBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RemBERT
`),A=r("a"),Me=n("google/rembert"),ze=n(" architecture."),K=m(),Te=r("p"),qe=n("Configuration objects inherit from "),de=r("a"),Ce=n("PretrainedConfig"),yp=n(` and can be used to control the model outputs. Read the
documentation from `),ea=r("a"),wp=n("PretrainedConfig"),$p=n(" for more information."),Fp=m(),v(wo.$$.fragment),Rp=m(),Xa=r("blockquote"),Ya=r("blockquote"),Za=r("blockquote"),ei=r("p"),Ep=n(`from transformers import RemBertModel, RemBertConfig >>> # Initializing a RemBERT rembert style
configuration >>> configuration = RemBertConfig()`),Bp=m(),ti=r("blockquote"),oi=r("blockquote"),ni=r("blockquote"),$o=r("h1"),Fo=r("a"),si=r("span"),v(Xn.$$.fragment),Mp=m(),ri=r("span"),zp=n("Initializing a model from the rembert style configuration >>> model = RemBertModel(configuration)"),qp=m(),ai=r("blockquote"),ii=r("blockquote"),li=r("blockquote"),Ro=r("h1"),Eo=r("a"),di=r("span"),v(Yn.$$.fragment),Cp=m(),ci=r("span"),xp=n("Accessing the model configuration >>> configuration = model.config"),Jd=m(),Nt=r("h2"),Bo=r("a"),pi=r("span"),v(Zn.$$.fragment),jp=m(),mi=r("span"),Lp=n("RemBertTokenizer"),Gd=m(),Le=r("div"),v(es.$$.fragment),Pp=m(),ts=r("p"),Op=n("Construct a RemBERT tokenizer. Based on "),os=r("a"),Dp=n("SentencePiece"),Ap=n("."),Np=m(),ns=r("p"),Sp=n("This tokenizer inherits from "),ta=r("a"),Ip=n("PreTrainedTokenizer"),Wp=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Up=m(),Mt=r("div"),v(ss.$$.fragment),Hp=m(),hi=r("p"),Qp=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A REMBERT sequence has the following format:`),Kp=m(),rs=r("ul"),oa=r("li"),Vp=n("single sequence: "),ui=r("code"),Jp=n("[CLS] X [SEP]"),Gp=m(),na=r("li"),Xp=n("pair of sequences: "),fi=r("code"),Yp=n("[CLS] A [SEP] B [SEP]"),Zp=m(),Mo=r("div"),v(as.$$.fragment),em=m(),is=r("p"),tm=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),gi=r("code"),om=n("prepare_for_model"),nm=n(" method."),sm=m(),pt=r("div"),v(ls.$$.fragment),rm=m(),_i=r("p"),am=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT"),im=m(),v(zo.$$.fragment),lm=m(),St=r("p"),dm=n("If "),ki=r("code"),cm=n("token_ids_1"),pm=n(" is "),bi=r("code"),mm=n("None"),hm=n(", this method only returns the first portion of the mask (0s)."),um=m(),sa=r("div"),v(ds.$$.fragment),Xd=m(),It=r("h2"),qo=r("a"),Ti=r("span"),v(cs.$$.fragment),fm=m(),vi=r("span"),gm=n("RemBertTokenizerFast"),Yd=m(),De=r("div"),v(ps.$$.fragment),_m=m(),Rt=r("p"),km=n("Construct a \u201Cfast\u201D RemBert tokenizer (backed by HuggingFace\u2019s "),yi=r("em"),bm=n("tokenizers"),Tm=n(` library). Based on
`),ms=r("a"),vm=n("Unigram"),ym=n(`. This
tokenizer inherits from `),ra=r("a"),wm=n("PreTrainedTokenizerFast"),$m=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Fm=m(),zt=r("div"),v(hs.$$.fragment),Rm=m(),wi=r("p"),Em=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RemBERT sequence has the following format:`),Bm=m(),us=r("ul"),aa=r("li"),Mm=n("single sequence: "),$i=r("code"),zm=n("[CLS] X [SEP]"),qm=m(),ia=r("li"),Cm=n("pair of sequences: "),Fi=r("code"),xm=n("[CLS] A [SEP] B [SEP]"),jm=m(),Co=r("div"),v(fs.$$.fragment),Lm=m(),gs=r("p"),Pm=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ri=r("code"),Om=n("prepare_for_model"),Dm=n(" method."),Am=m(),mt=r("div"),v(_s.$$.fragment),Nm=m(),Ei=r("p"),Sm=n("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT"),Im=m(),v(xo.$$.fragment),Wm=m(),Bi=r("p"),Um=n("if token_ids_1 is None, only returns the first portion of the mask (0s)."),Hm=m(),la=r("div"),v(ks.$$.fragment),Zd=m(),Wt=r("h2"),jo=r("a"),Mi=r("span"),v(bs.$$.fragment),Qm=m(),zi=r("span"),Km=n("RemBertModel"),ec=m(),Je=r("div"),v(Ts.$$.fragment),Vm=m(),vs=r("p"),Jm=n(`The bare RemBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ys=r("a"),Gm=n("torch.nn.Module"),Xm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ym=m(),ws=r("p"),Zm=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),$s=r("a"),eh=n(`Attention is
all you need`),th=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),oh=m(),Ae=r("p"),nh=n("To behave as an decoder the model needs to be initialized with the "),qi=r("code"),sh=n("is_decoder"),rh=n(` argument of the configuration set
to `),Ci=r("code"),ah=n("True"),ih=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),xi=r("code"),lh=n("is_decoder"),dh=n(` argument and
`),ji=r("code"),ch=n("add_cross_attention"),ph=n(" set to "),Li=r("code"),mh=n("True"),hh=n("; an "),Pi=r("code"),uh=n("encoder_hidden_states"),fh=n(" is then expected as an input to the forward pass."),gh=m(),ht=r("div"),v(Fs.$$.fragment),_h=m(),Ut=r("p"),kh=n("The "),da=r("a"),bh=n("RemBertModel"),Th=n(" forward method, overrides the "),Oi=r("code"),vh=n("__call__"),yh=n(" special method."),wh=m(),v(Lo.$$.fragment),$h=m(),v(Po.$$.fragment),tc=m(),Ht=r("h2"),Oo=r("a"),Di=r("span"),v(Rs.$$.fragment),Fh=m(),Ai=r("span"),Rh=n("RemBertForCausalLM"),oc=m(),Et=r("div"),v(Es.$$.fragment),Eh=m(),Qt=r("p"),Bh=n("RemBERT Model with a "),Ni=r("code"),Mh=n("language modeling"),zh=n(` head on top for CLM fine-tuning.
This model is a PyTorch `),Bs=r("a"),qh=n("torch.nn.Module"),Ch=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xh=m(),ut=r("div"),v(Ms.$$.fragment),jh=m(),Kt=r("p"),Lh=n("The "),ca=r("a"),Ph=n("RemBertForCausalLM"),Oh=n(" forward method, overrides the "),Si=r("code"),Dh=n("__call__"),Ah=n(" special method."),Nh=m(),v(Do.$$.fragment),Sh=m(),v(Ao.$$.fragment),nc=m(),Vt=r("h2"),No=r("a"),Ii=r("span"),v(zs.$$.fragment),Ih=m(),Wi=r("span"),Wh=n("RemBertForMaskedLM"),sc=m(),Bt=r("div"),v(qs.$$.fragment),Uh=m(),Jt=r("p"),Hh=n("RemBERT Model with a "),Ui=r("code"),Qh=n("language modeling"),Kh=n(` head on top.
This model is a PyTorch `),Cs=r("a"),Vh=n("torch.nn.Module"),Jh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gh=m(),Ge=r("div"),v(xs.$$.fragment),Xh=m(),Gt=r("p"),Yh=n("The "),pa=r("a"),Zh=n("RemBertForMaskedLM"),eu=n(" forward method, overrides the "),Hi=r("code"),tu=n("__call__"),ou=n(" special method."),nu=m(),v(So.$$.fragment),su=m(),v(Io.$$.fragment),ru=m(),v(Wo.$$.fragment),rc=m(),Xt=r("h2"),Uo=r("a"),Qi=r("span"),v(js.$$.fragment),au=m(),Ki=r("span"),iu=n("RemBertForSequenceClassification"),ac=m(),it=r("div"),v(Ls.$$.fragment),lu=m(),Vi=r("p"),du=n(`RemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cu=m(),Ps=r("p"),pu=n("This model is a PyTorch "),Os=r("a"),mu=n("torch.nn.Module"),hu=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),uu=m(),Oe=r("div"),v(Ds.$$.fragment),fu=m(),Yt=r("p"),gu=n("The "),ma=r("a"),_u=n("RemBertForSequenceClassification"),ku=n(" forward method, overrides the "),Ji=r("code"),bu=n("__call__"),Tu=n(" special method."),vu=m(),v(Ho.$$.fragment),yu=m(),v(Qo.$$.fragment),wu=m(),v(Ko.$$.fragment),$u=m(),v(Vo.$$.fragment),Fu=m(),v(Jo.$$.fragment),ic=m(),Zt=r("h2"),Go=r("a"),Gi=r("span"),v(As.$$.fragment),Ru=m(),Xi=r("span"),Eu=n("RemBertForMultipleChoice"),lc=m(),lt=r("div"),v(Ns.$$.fragment),Bu=m(),Yi=r("p"),Mu=n(`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),zu=m(),Ss=r("p"),qu=n("This model is a PyTorch "),Is=r("a"),Cu=n("torch.nn.Module"),xu=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ju=m(),ft=r("div"),v(Ws.$$.fragment),Lu=m(),eo=r("p"),Pu=n("The "),ha=r("a"),Ou=n("RemBertForMultipleChoice"),Du=n(" forward method, overrides the "),Zi=r("code"),Au=n("__call__"),Nu=n(" special method."),Su=m(),v(Xo.$$.fragment),Iu=m(),v(Yo.$$.fragment),dc=m(),to=r("h2"),Zo=r("a"),el=r("span"),v(Us.$$.fragment),Wu=m(),tl=r("span"),Uu=n("RemBertForTokenClassification"),cc=m(),dt=r("div"),v(Hs.$$.fragment),Hu=m(),ol=r("p"),Qu=n(`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ku=m(),Qs=r("p"),Vu=n("This model is a PyTorch "),Ks=r("a"),Ju=n("torch.nn.Module"),Gu=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xu=m(),Xe=r("div"),v(Vs.$$.fragment),Yu=m(),oo=r("p"),Zu=n("The "),ua=r("a"),ef=n("RemBertForTokenClassification"),tf=n(" forward method, overrides the "),nl=r("code"),of=n("__call__"),nf=n(" special method."),sf=m(),v(en.$$.fragment),rf=m(),v(tn.$$.fragment),af=m(),v(on.$$.fragment),pc=m(),no=r("h2"),nn=r("a"),sl=r("span"),v(Js.$$.fragment),lf=m(),rl=r("span"),df=n("RemBertForQuestionAnswering"),mc=m(),ct=r("div"),v(Gs.$$.fragment),cf=m(),so=r("p"),pf=n(`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),al=r("code"),mf=n("span start logits"),hf=n(" and "),il=r("code"),uf=n("span end logits"),ff=n(")."),gf=m(),Xs=r("p"),_f=n("This model is a PyTorch "),Ys=r("a"),kf=n("torch.nn.Module"),bf=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Tf=m(),Ye=r("div"),v(Zs.$$.fragment),vf=m(),ro=r("p"),yf=n("The "),fa=r("a"),wf=n("RemBertForQuestionAnswering"),$f=n(" forward method, overrides the "),ll=r("code"),Ff=n("__call__"),Rf=n(" special method."),Ef=m(),v(sn.$$.fragment),Bf=m(),v(rn.$$.fragment),Mf=m(),v(an.$$.fragment),hc=m(),ao=r("h2"),ln=r("a"),dl=r("span"),v(er.$$.fragment),zf=m(),cl=r("span"),qf=n("TFRemBertModel"),uc=m(),Ne=r("div"),v(tr.$$.fragment),Cf=m(),pl=r("p"),xf=n("The bare RemBERT Model transformer outputing raw hidden-states without any specific head on top."),jf=m(),or=r("p"),Lf=n("This model inherits from "),ga=r("a"),Pf=n("TFPreTrainedModel"),Of=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Df=m(),nr=r("p"),Af=n("This model is also a "),sr=r("a"),Nf=n("tf.keras.Model"),Sf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),If=m(),v(dn.$$.fragment),Wf=m(),gt=r("div"),v(rr.$$.fragment),Uf=m(),io=r("p"),Hf=n("The "),_a=r("a"),Qf=n("TFRemBertModel"),Kf=n(" forward method, overrides the "),ml=r("code"),Vf=n("__call__"),Jf=n(" special method."),Gf=m(),v(cn.$$.fragment),Xf=m(),v(pn.$$.fragment),fc=m(),lo=r("h2"),mn=r("a"),hl=r("span"),v(ar.$$.fragment),Yf=m(),ul=r("span"),Zf=n("TFRemBertForMaskedLM"),gc=m(),Se=r("div"),v(ir.$$.fragment),eg=m(),lr=r("p"),tg=n("RemBERT Model with a "),fl=r("code"),og=n("language modeling"),ng=n(" head on top."),sg=m(),dr=r("p"),rg=n("This model inherits from "),ka=r("a"),ag=n("TFPreTrainedModel"),ig=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lg=m(),cr=r("p"),dg=n("This model is also a "),pr=r("a"),cg=n("tf.keras.Model"),pg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mg=m(),v(hn.$$.fragment),hg=m(),Ze=r("div"),v(mr.$$.fragment),ug=m(),co=r("p"),fg=n("The "),ba=r("a"),gg=n("TFRemBertForMaskedLM"),_g=n(" forward method, overrides the "),gl=r("code"),kg=n("__call__"),bg=n(" special method."),Tg=m(),v(un.$$.fragment),vg=m(),v(fn.$$.fragment),yg=m(),v(gn.$$.fragment),_c=m(),po=r("h2"),_n=r("a"),_l=r("span"),v(hr.$$.fragment),wg=m(),kl=r("span"),$g=n("TFRemBertForCausalLM"),kc=m(),Ie=r("div"),v(ur.$$.fragment),Fg=m(),fr=r("p"),Rg=n("RemBERT Model with a "),bl=r("code"),Eg=n("language modeling"),Bg=n(" head on top for CLM fine-tuning."),Mg=m(),gr=r("p"),zg=n("This model inherits from "),Ta=r("a"),qg=n("TFPreTrainedModel"),Cg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xg=m(),_r=r("p"),jg=n("This model is also a "),kr=r("a"),Lg=n("tf.keras.Model"),Pg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Og=m(),v(kn.$$.fragment),Dg=m(),et=r("div"),v(br.$$.fragment),Ag=m(),Pe=r("p"),Ng=n("encoder_hidden_states  ("),Tl=r("code"),Sg=n("tf.Tensor"),Ig=n(" of shape "),vl=r("code"),Wg=n("(batch_size, sequence_length, hidden_size)"),Ug=n(", "),yl=r("em"),Hg=n("optional"),Qg=n(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),wl=r("code"),Kg=n("tf.Tensor"),Vg=n(" of shape "),$l=r("code"),Jg=n("(batch_size, sequence_length)"),Gg=n(", "),Fl=r("em"),Xg=n("optional"),Yg=n(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),Rl=r("code"),Zg=n("[0, 1]"),e_=n(":"),t_=m(),Tr=r("ul"),vr=r("li"),o_=n("1 for tokens that are "),El=r("strong"),n_=n("not masked"),s_=n(","),r_=m(),yr=r("li"),a_=n("0 for tokens that are "),Bl=r("strong"),i_=n("masked"),l_=n("."),d_=m(),V=r("p"),c_=n("past_key_values ("),Ml=r("code"),p_=n("Tuple[Tuple[tf.Tensor]]"),m_=n(" of length "),zl=r("code"),h_=n("config.n_layers"),u_=n(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),ql=r("code"),f_=n("past_key_values"),g_=n(" are used, the user can optionally input only the last "),Cl=r("code"),__=n("decoder_input_ids"),k_=n(` (those that
don\u2019t have their past key value states given to this model) of shape `),xl=r("code"),b_=n("(batch_size, 1)"),T_=n(` instead of all
`),jl=r("code"),v_=n("decoder_input_ids"),y_=n(" of shape "),Ll=r("code"),w_=n("(batch_size, sequence_length)"),$_=n(`.
use_cache (`),Pl=r("code"),F_=n("bool"),R_=n(", "),Ol=r("em"),E_=n("optional"),B_=n(", defaults to "),Dl=r("code"),M_=n("True"),z_=n(`):
If set to `),Al=r("code"),q_=n("True"),C_=n(", "),Nl=r("code"),x_=n("past_key_values"),j_=n(` key value states are returned and can be used to speed up decoding (see
`),Sl=r("code"),L_=n("past_key_values"),P_=n("). Set to "),Il=r("code"),O_=n("False"),D_=n(" during training, "),Wl=r("code"),A_=n("True"),N_=n(` during generation
labels (`),Ul=r("code"),S_=n("tf.Tensor"),I_=n(" or "),Hl=r("code"),W_=n("np.ndarray"),U_=n(" of shape "),Ql=r("code"),H_=n("(batch_size, sequence_length)"),Q_=n(", "),Kl=r("em"),K_=n("optional"),V_=n(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Vl=r("code"),J_=n("[0, ..., config.vocab_size - 1]"),G_=n("."),X_=m(),v(bn.$$.fragment),bc=m(),mo=r("h2"),Tn=r("a"),Jl=r("span"),v(wr.$$.fragment),Y_=m(),Gl=r("span"),Z_=n("TFRemBertForSequenceClassification"),Tc=m(),We=r("div"),v($r.$$.fragment),ek=m(),Xl=r("p"),tk=n("RemBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),ok=m(),Fr=r("p"),nk=n("This model inherits from "),va=r("a"),sk=n("TFPreTrainedModel"),rk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ak=m(),Rr=r("p"),ik=n("This model is also a "),Er=r("a"),lk=n("tf.keras.Model"),dk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ck=m(),v(vn.$$.fragment),pk=m(),tt=r("div"),v(Br.$$.fragment),mk=m(),ho=r("p"),hk=n("The "),ya=r("a"),uk=n("TFRemBertForSequenceClassification"),fk=n(" forward method, overrides the "),Yl=r("code"),gk=n("__call__"),_k=n(" special method."),kk=m(),v(yn.$$.fragment),bk=m(),v(wn.$$.fragment),Tk=m(),v($n.$$.fragment),vc=m(),uo=r("h2"),Fn=r("a"),Zl=r("span"),v(Mr.$$.fragment),vk=m(),ed=r("span"),yk=n("TFRemBertForMultipleChoice"),yc=m(),Ue=r("div"),v(zr.$$.fragment),wk=m(),td=r("p"),$k=n(`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Fk=m(),qr=r("p"),Rk=n("This model inherits from "),wa=r("a"),Ek=n("TFPreTrainedModel"),Bk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mk=m(),Cr=r("p"),zk=n("This model is also a "),xr=r("a"),qk=n("tf.keras.Model"),Ck=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xk=m(),v(Rn.$$.fragment),jk=m(),_t=r("div"),v(jr.$$.fragment),Lk=m(),fo=r("p"),Pk=n("The "),$a=r("a"),Ok=n("TFRemBertForMultipleChoice"),Dk=n(" forward method, overrides the "),od=r("code"),Ak=n("__call__"),Nk=n(" special method."),Sk=m(),v(En.$$.fragment),Ik=m(),v(Bn.$$.fragment),wc=m(),go=r("h2"),Mn=r("a"),nd=r("span"),v(Lr.$$.fragment),Wk=m(),sd=r("span"),Uk=n("TFRemBertForTokenClassification"),$c=m(),He=r("div"),v(Pr.$$.fragment),Hk=m(),rd=r("p"),Qk=n(`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Kk=m(),Or=r("p"),Vk=n("This model inherits from "),Fa=r("a"),Jk=n("TFPreTrainedModel"),Gk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xk=m(),Dr=r("p"),Yk=n("This model is also a "),Ar=r("a"),Zk=n("tf.keras.Model"),eb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tb=m(),v(zn.$$.fragment),ob=m(),ot=r("div"),v(Nr.$$.fragment),nb=m(),_o=r("p"),sb=n("The "),Ra=r("a"),rb=n("TFRemBertForTokenClassification"),ab=n(" forward method, overrides the "),ad=r("code"),ib=n("__call__"),lb=n(" special method."),db=m(),v(qn.$$.fragment),cb=m(),v(Cn.$$.fragment),pb=m(),v(xn.$$.fragment),Fc=m(),ko=r("h2"),jn=r("a"),id=r("span"),v(Sr.$$.fragment),mb=m(),ld=r("span"),hb=n("TFRemBertForQuestionAnswering"),Rc=m(),Qe=r("div"),v(Ir.$$.fragment),ub=m(),bo=r("p"),fb=n(`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),dd=r("code"),gb=n("span start logits"),_b=n(" and "),cd=r("code"),kb=n("span end logits"),bb=n(")."),Tb=m(),Wr=r("p"),vb=n("This model inherits from "),Ea=r("a"),yb=n("TFPreTrainedModel"),wb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$b=m(),Ur=r("p"),Fb=n("This model is also a "),Hr=r("a"),Rb=n("tf.keras.Model"),Eb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bb=m(),v(Ln.$$.fragment),Mb=m(),nt=r("div"),v(Qr.$$.fragment),zb=m(),To=r("p"),qb=n("The "),Ba=r("a"),Cb=n("TFRemBertForQuestionAnswering"),xb=n(" forward method, overrides the "),pd=r("code"),jb=n("__call__"),Lb=n(" special method."),Pb=m(),v(Pn.$$.fragment),Ob=m(),v(On.$$.fragment),Db=m(),v(Dn.$$.fragment),this.h()},l(o){const T=Vy('[data-svelte="svelte-1phssyn"]',document.head);d=a(T,"META",{name:!0,content:!0}),T.forEach(t),g=h(o),c=a(o,"H1",{class:!0});var Kr=i(c);p=a(Kr,"A",{id:!0,class:!0,href:!0});var md=i(p);k=a(md,"SPAN",{});var hd=i(k);y(l.$$.fragment,hd),hd.forEach(t),md.forEach(t),u=h(Kr),M=a(Kr,"SPAN",{});var ud=i(M);ue=s(ud,"RemBERT"),ud.forEach(t),Kr.forEach(t),X=h(o),z=a(o,"H2",{class:!0});var Vr=i(z);te=a(Vr,"A",{id:!0,class:!0,href:!0});var fd=i(te);N=a(fd,"SPAN",{});var gd=i(N);y(ne.$$.fragment,gd),gd.forEach(t),fd.forEach(t),fe=h(Vr),S=a(Vr,"SPAN",{});var _d=i(S);ge=s(_d,"Overview"),_d.forEach(t),Vr.forEach(t),pe=h(o),J=a(o,"P",{});var Jr=i(J);O=s(Jr,"The RemBERT model was proposed in "),se=a(Jr,"A",{href:!0,rel:!0});var kd=i(se);Z=s(kd,"Rethinking Embedding Coupling in Pre-trained Language Models"),kd.forEach(t),q=s(Jr," by Hyung Won Chung, Thibault F\xE9vry, Henry Tsai, Melvin Johnson, Sebastian Ruder."),Jr.forEach(t),x=h(o),ae=a(o,"P",{});var bd=i(ae);H=s(bd,"The abstract from the paper is the following:"),bd.forEach(t),me=h(o),ie=a(o,"P",{});var Td=i(ie);I=a(Td,"EM",{});var vd=i(I);_e=s(vd,`We re-evaluate the standard practice of sharing weights between input and output embeddings in state-of-the-art
pre-trained language models. We show that decoupled embeddings provide increased modeling flexibility, allowing us to
significantly improve the efficiency of parameter allocation in the input embedding of multilingual models. By
reallocating the input embedding parameters in the Transformer layers, we achieve dramatically better performance on
standard natural language understanding tasks with the same number of parameters during fine-tuning. We also show that
allocating additional capacity to the output embedding provides benefits to the model that persist through the
fine-tuning stage even though the output embedding is discarded after pre-training. Our analysis shows that larger
output embeddings prevent the model\u2019s last layers from overspecializing to the pre-training task and encourage
Transformer representations to be more general and more transferable to other tasks and languages. Harnessing these
findings, we are able to train models that achieve strong performance on the XTREME benchmark without increasing the
number of parameters at the fine-tuning stage.`),vd.forEach(t),Td.forEach(t),he=h(o),C=a(o,"P",{});var yd=i(C);ke=s(yd,"Tips:"),yd.forEach(t),W=h(o),le=a(o,"P",{});var wd=i(le);be=s(wd,`For fine-tuning, RemBERT can be thought of as a bigger version of mBERT with an ALBERT-like factorization of the
embedding layer. The embeddings are not tied in pre-training, in contrast with BERT, which enables smaller input
embeddings (preserved during fine-tuning) and bigger output embeddings (discarded at fine-tuning). The tokenizer is
also similar to the Albert one rather than the BERT one.`),wd.forEach(t),U=h(o),ee=a(o,"H2",{class:!0});var Gr=i(ee);oe=a(Gr,"A",{id:!0,class:!0,href:!0});var $d=i(oe);L=a($d,"SPAN",{});var Fd=i(L);y(re.$$.fragment,Fd),Fd.forEach(t),$d.forEach(t),Q=h(Gr),ce=a(Gr,"SPAN",{});var Rd=i(ce);f=s(Rd,"RemBertConfig"),Rd.forEach(t),Gr.forEach(t),B=h(o),P=a(o,"DIV",{class:!0});var Ke=i(P);y(ve.$$.fragment,Ke),Re=h(Ke),j=a(Ke,"P",{});var vo=i(j);Ee=s(vo,"This is the configuration class to store the configuration of a "),ye=a(vo,"A",{href:!0});var Ed=i(ye);Be=s(Ed,"RemBertModel"),Ed.forEach(t),D=s(vo,`. It is used to instantiate an
RemBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RemBERT
`),A=a(vo,"A",{href:!0,rel:!0});var Bd=i(A);Me=s(Bd,"google/rembert"),Bd.forEach(t),ze=s(vo," architecture."),vo.forEach(t),K=h(Ke),Te=a(Ke,"P",{});var yo=i(Te);qe=s(yo,"Configuration objects inherit from "),de=a(yo,"A",{href:!0});var Md=i(de);Ce=s(Md,"PretrainedConfig"),Md.forEach(t),yp=s(yo,` and can be used to control the model outputs. Read the
documentation from `),ea=a(yo,"A",{href:!0});var zd=i(ea);wp=s(zd,"PretrainedConfig"),zd.forEach(t),$p=s(yo," for more information."),yo.forEach(t),Fp=h(Ke),y(wo.$$.fragment,Ke),Rp=h(Ke),Xa=a(Ke,"BLOCKQUOTE",{});var qd=i(Xa);Ya=a(qd,"BLOCKQUOTE",{});var Cd=i(Ya);Za=a(Cd,"BLOCKQUOTE",{});var xd=i(Za);ei=a(xd,"P",{});var jd=i(ei);Ep=s(jd,`from transformers import RemBertModel, RemBertConfig >>> # Initializing a RemBERT rembert style
configuration >>> configuration = RemBertConfig()`),jd.forEach(t),xd.forEach(t),Cd.forEach(t),qd.forEach(t),Bp=h(Ke),ti=a(Ke,"BLOCKQUOTE",{});var Ld=i(ti);oi=a(Ld,"BLOCKQUOTE",{});var Pd=i(oi);ni=a(Pd,"BLOCKQUOTE",{});var Od=i(ni);$o=a(Od,"H1",{class:!0});var Xr=i($o);Fo=a(Xr,"A",{id:!0,class:!0,href:!0});var Dd=i(Fo);si=a(Dd,"SPAN",{});var Ad=i(si);y(Xn.$$.fragment,Ad),Ad.forEach(t),Dd.forEach(t),Mp=h(Xr),ri=a(Xr,"SPAN",{});var Nd=i(ri);zp=s(Nd,"Initializing a model from the rembert style configuration >>> model = RemBertModel(configuration)"),Nd.forEach(t),Xr.forEach(t),Od.forEach(t),Pd.forEach(t),Ld.forEach(t),qp=h(Ke),ai=a(Ke,"BLOCKQUOTE",{});var Sd=i(ai);ii=a(Sd,"BLOCKQUOTE",{});var Id=i(ii);li=a(Id,"BLOCKQUOTE",{});var Wd=i(li);Ro=a(Wd,"H1",{class:!0});var Yr=i(Ro);Eo=a(Yr,"A",{id:!0,class:!0,href:!0});var Ud=i(Eo);di=a(Ud,"SPAN",{});var Hd=i(di);y(Yn.$$.fragment,Hd),Hd.forEach(t),Ud.forEach(t),Cp=h(Yr),ci=a(Yr,"SPAN",{});var Qd=i(ci);xp=s(Qd,"Accessing the model configuration >>> configuration = model.config"),Qd.forEach(t),Yr.forEach(t),Wd.forEach(t),Id.forEach(t),Sd.forEach(t),Ke.forEach(t),Jd=h(o),Nt=a(o,"H2",{class:!0});var Zr=i(Nt);Bo=a(Zr,"A",{id:!0,class:!0,href:!0});var Kd=i(Bo);pi=a(Kd,"SPAN",{});var Vd=i(pi);y(Zn.$$.fragment,Vd),Vd.forEach(t),Kd.forEach(t),jp=h(Zr),mi=a(Zr,"SPAN",{});var Wb=i(mi);Lp=s(Wb,"RemBertTokenizer"),Wb.forEach(t),Zr.forEach(t),Gd=h(o),Le=a(o,"DIV",{class:!0});var st=i(Le);y(es.$$.fragment,st),Pp=h(st),ts=a(st,"P",{});var Bc=i(ts);Op=s(Bc,"Construct a RemBERT tokenizer. Based on "),os=a(Bc,"A",{href:!0,rel:!0});var Ub=i(os);Dp=s(Ub,"SentencePiece"),Ub.forEach(t),Ap=s(Bc,"."),Bc.forEach(t),Np=h(st),ns=a(st,"P",{});var Mc=i(ns);Sp=s(Mc,"This tokenizer inherits from "),ta=a(Mc,"A",{href:!0});var Hb=i(ta);Ip=s(Hb,"PreTrainedTokenizer"),Hb.forEach(t),Wp=s(Mc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Mc.forEach(t),Up=h(st),Mt=a(st,"DIV",{class:!0});var Ma=i(Mt);y(ss.$$.fragment,Ma),Hp=h(Ma),hi=a(Ma,"P",{});var Qb=i(hi);Qp=s(Qb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A REMBERT sequence has the following format:`),Qb.forEach(t),Kp=h(Ma),rs=a(Ma,"UL",{});var zc=i(rs);oa=a(zc,"LI",{});var Ab=i(oa);Vp=s(Ab,"single sequence: "),ui=a(Ab,"CODE",{});var Kb=i(ui);Jp=s(Kb,"[CLS] X [SEP]"),Kb.forEach(t),Ab.forEach(t),Gp=h(zc),na=a(zc,"LI",{});var Nb=i(na);Xp=s(Nb,"pair of sequences: "),fi=a(Nb,"CODE",{});var Vb=i(fi);Yp=s(Vb,"[CLS] A [SEP] B [SEP]"),Vb.forEach(t),Nb.forEach(t),zc.forEach(t),Ma.forEach(t),Zp=h(st),Mo=a(st,"DIV",{class:!0});var qc=i(Mo);y(as.$$.fragment,qc),em=h(qc),is=a(qc,"P",{});var Cc=i(is);tm=s(Cc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),gi=a(Cc,"CODE",{});var Jb=i(gi);om=s(Jb,"prepare_for_model"),Jb.forEach(t),nm=s(Cc," method."),Cc.forEach(t),qc.forEach(t),sm=h(st),pt=a(st,"DIV",{class:!0});var An=i(pt);y(ls.$$.fragment,An),rm=h(An),_i=a(An,"P",{});var Gb=i(_i);am=s(Gb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT"),Gb.forEach(t),im=h(An),y(zo.$$.fragment,An),lm=h(An),St=a(An,"P",{});var za=i(St);dm=s(za,"If "),ki=a(za,"CODE",{});var Xb=i(ki);cm=s(Xb,"token_ids_1"),Xb.forEach(t),pm=s(za," is "),bi=a(za,"CODE",{});var Yb=i(bi);mm=s(Yb,"None"),Yb.forEach(t),hm=s(za,", this method only returns the first portion of the mask (0s)."),za.forEach(t),An.forEach(t),um=h(st),sa=a(st,"DIV",{class:!0});var Zb=i(sa);y(ds.$$.fragment,Zb),Zb.forEach(t),st.forEach(t),Xd=h(o),It=a(o,"H2",{class:!0});var xc=i(It);qo=a(xc,"A",{id:!0,class:!0,href:!0});var eT=i(qo);Ti=a(eT,"SPAN",{});var tT=i(Ti);y(cs.$$.fragment,tT),tT.forEach(t),eT.forEach(t),fm=h(xc),vi=a(xc,"SPAN",{});var oT=i(vi);gm=s(oT,"RemBertTokenizerFast"),oT.forEach(t),xc.forEach(t),Yd=h(o),De=a(o,"DIV",{class:!0});var kt=i(De);y(ps.$$.fragment,kt),_m=h(kt),Rt=a(kt,"P",{});var Nn=i(Rt);km=s(Nn,"Construct a \u201Cfast\u201D RemBert tokenizer (backed by HuggingFace\u2019s "),yi=a(Nn,"EM",{});var nT=i(yi);bm=s(nT,"tokenizers"),nT.forEach(t),Tm=s(Nn,` library). Based on
`),ms=a(Nn,"A",{href:!0,rel:!0});var sT=i(ms);vm=s(sT,"Unigram"),sT.forEach(t),ym=s(Nn,`. This
tokenizer inherits from `),ra=a(Nn,"A",{href:!0});var rT=i(ra);wm=s(rT,"PreTrainedTokenizerFast"),rT.forEach(t),$m=s(Nn,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Nn.forEach(t),Fm=h(kt),zt=a(kt,"DIV",{class:!0});var qa=i(zt);y(hs.$$.fragment,qa),Rm=h(qa),wi=a(qa,"P",{});var aT=i(wi);Em=s(aT,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RemBERT sequence has the following format:`),aT.forEach(t),Bm=h(qa),us=a(qa,"UL",{});var jc=i(us);aa=a(jc,"LI",{});var Sb=i(aa);Mm=s(Sb,"single sequence: "),$i=a(Sb,"CODE",{});var iT=i($i);zm=s(iT,"[CLS] X [SEP]"),iT.forEach(t),Sb.forEach(t),qm=h(jc),ia=a(jc,"LI",{});var Ib=i(ia);Cm=s(Ib,"pair of sequences: "),Fi=a(Ib,"CODE",{});var lT=i(Fi);xm=s(lT,"[CLS] A [SEP] B [SEP]"),lT.forEach(t),Ib.forEach(t),jc.forEach(t),qa.forEach(t),jm=h(kt),Co=a(kt,"DIV",{class:!0});var Lc=i(Co);y(fs.$$.fragment,Lc),Lm=h(Lc),gs=a(Lc,"P",{});var Pc=i(gs);Pm=s(Pc,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ri=a(Pc,"CODE",{});var dT=i(Ri);Om=s(dT,"prepare_for_model"),dT.forEach(t),Dm=s(Pc," method."),Pc.forEach(t),Lc.forEach(t),Am=h(kt),mt=a(kt,"DIV",{class:!0});var Sn=i(mt);y(_s.$$.fragment,Sn),Nm=h(Sn),Ei=a(Sn,"P",{});var cT=i(Ei);Sm=s(cT,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT"),cT.forEach(t),Im=h(Sn),y(xo.$$.fragment,Sn),Wm=h(Sn),Bi=a(Sn,"P",{});var pT=i(Bi);Um=s(pT,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),pT.forEach(t),Sn.forEach(t),Hm=h(kt),la=a(kt,"DIV",{class:!0});var mT=i(la);y(ks.$$.fragment,mT),mT.forEach(t),kt.forEach(t),Zd=h(o),Wt=a(o,"H2",{class:!0});var Oc=i(Wt);jo=a(Oc,"A",{id:!0,class:!0,href:!0});var hT=i(jo);Mi=a(hT,"SPAN",{});var uT=i(Mi);y(bs.$$.fragment,uT),uT.forEach(t),hT.forEach(t),Qm=h(Oc),zi=a(Oc,"SPAN",{});var fT=i(zi);Km=s(fT,"RemBertModel"),fT.forEach(t),Oc.forEach(t),ec=h(o),Je=a(o,"DIV",{class:!0});var qt=i(Je);y(Ts.$$.fragment,qt),Vm=h(qt),vs=a(qt,"P",{});var Dc=i(vs);Jm=s(Dc,`The bare RemBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ys=a(Dc,"A",{href:!0,rel:!0});var gT=i(ys);Gm=s(gT,"torch.nn.Module"),gT.forEach(t),Xm=s(Dc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dc.forEach(t),Ym=h(qt),ws=a(qt,"P",{});var Ac=i(ws);Zm=s(Ac,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),$s=a(Ac,"A",{href:!0,rel:!0});var _T=i($s);eh=s(_T,`Attention is
all you need`),_T.forEach(t),th=s(Ac,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ac.forEach(t),oh=h(qt),Ae=a(qt,"P",{});var rt=i(Ae);nh=s(rt,"To behave as an decoder the model needs to be initialized with the "),qi=a(rt,"CODE",{});var kT=i(qi);sh=s(kT,"is_decoder"),kT.forEach(t),rh=s(rt,` argument of the configuration set
to `),Ci=a(rt,"CODE",{});var bT=i(Ci);ah=s(bT,"True"),bT.forEach(t),ih=s(rt,". To be used in a Seq2Seq model, the model needs to initialized with both "),xi=a(rt,"CODE",{});var TT=i(xi);lh=s(TT,"is_decoder"),TT.forEach(t),dh=s(rt,` argument and
`),ji=a(rt,"CODE",{});var vT=i(ji);ch=s(vT,"add_cross_attention"),vT.forEach(t),ph=s(rt," set to "),Li=a(rt,"CODE",{});var yT=i(Li);mh=s(yT,"True"),yT.forEach(t),hh=s(rt,"; an "),Pi=a(rt,"CODE",{});var wT=i(Pi);uh=s(wT,"encoder_hidden_states"),wT.forEach(t),fh=s(rt," is then expected as an input to the forward pass."),rt.forEach(t),gh=h(qt),ht=a(qt,"DIV",{class:!0});var In=i(ht);y(Fs.$$.fragment,In),_h=h(In),Ut=a(In,"P",{});var Ca=i(Ut);kh=s(Ca,"The "),da=a(Ca,"A",{href:!0});var $T=i(da);bh=s($T,"RemBertModel"),$T.forEach(t),Th=s(Ca," forward method, overrides the "),Oi=a(Ca,"CODE",{});var FT=i(Oi);vh=s(FT,"__call__"),FT.forEach(t),yh=s(Ca," special method."),Ca.forEach(t),wh=h(In),y(Lo.$$.fragment,In),$h=h(In),y(Po.$$.fragment,In),In.forEach(t),qt.forEach(t),tc=h(o),Ht=a(o,"H2",{class:!0});var Nc=i(Ht);Oo=a(Nc,"A",{id:!0,class:!0,href:!0});var RT=i(Oo);Di=a(RT,"SPAN",{});var ET=i(Di);y(Rs.$$.fragment,ET),ET.forEach(t),RT.forEach(t),Fh=h(Nc),Ai=a(Nc,"SPAN",{});var BT=i(Ai);Rh=s(BT,"RemBertForCausalLM"),BT.forEach(t),Nc.forEach(t),oc=h(o),Et=a(o,"DIV",{class:!0});var xa=i(Et);y(Es.$$.fragment,xa),Eh=h(xa),Qt=a(xa,"P",{});var ja=i(Qt);Bh=s(ja,"RemBERT Model with a "),Ni=a(ja,"CODE",{});var MT=i(Ni);Mh=s(MT,"language modeling"),MT.forEach(t),zh=s(ja,` head on top for CLM fine-tuning.
This model is a PyTorch `),Bs=a(ja,"A",{href:!0,rel:!0});var zT=i(Bs);qh=s(zT,"torch.nn.Module"),zT.forEach(t),Ch=s(ja,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ja.forEach(t),xh=h(xa),ut=a(xa,"DIV",{class:!0});var Wn=i(ut);y(Ms.$$.fragment,Wn),jh=h(Wn),Kt=a(Wn,"P",{});var La=i(Kt);Lh=s(La,"The "),ca=a(La,"A",{href:!0});var qT=i(ca);Ph=s(qT,"RemBertForCausalLM"),qT.forEach(t),Oh=s(La," forward method, overrides the "),Si=a(La,"CODE",{});var CT=i(Si);Dh=s(CT,"__call__"),CT.forEach(t),Ah=s(La," special method."),La.forEach(t),Nh=h(Wn),y(Do.$$.fragment,Wn),Sh=h(Wn),y(Ao.$$.fragment,Wn),Wn.forEach(t),xa.forEach(t),nc=h(o),Vt=a(o,"H2",{class:!0});var Sc=i(Vt);No=a(Sc,"A",{id:!0,class:!0,href:!0});var xT=i(No);Ii=a(xT,"SPAN",{});var jT=i(Ii);y(zs.$$.fragment,jT),jT.forEach(t),xT.forEach(t),Ih=h(Sc),Wi=a(Sc,"SPAN",{});var LT=i(Wi);Wh=s(LT,"RemBertForMaskedLM"),LT.forEach(t),Sc.forEach(t),sc=h(o),Bt=a(o,"DIV",{class:!0});var Pa=i(Bt);y(qs.$$.fragment,Pa),Uh=h(Pa),Jt=a(Pa,"P",{});var Oa=i(Jt);Hh=s(Oa,"RemBERT Model with a "),Ui=a(Oa,"CODE",{});var PT=i(Ui);Qh=s(PT,"language modeling"),PT.forEach(t),Kh=s(Oa,` head on top.
This model is a PyTorch `),Cs=a(Oa,"A",{href:!0,rel:!0});var OT=i(Cs);Vh=s(OT,"torch.nn.Module"),OT.forEach(t),Jh=s(Oa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Oa.forEach(t),Gh=h(Pa),Ge=a(Pa,"DIV",{class:!0});var Ct=i(Ge);y(xs.$$.fragment,Ct),Xh=h(Ct),Gt=a(Ct,"P",{});var Da=i(Gt);Yh=s(Da,"The "),pa=a(Da,"A",{href:!0});var DT=i(pa);Zh=s(DT,"RemBertForMaskedLM"),DT.forEach(t),eu=s(Da," forward method, overrides the "),Hi=a(Da,"CODE",{});var AT=i(Hi);tu=s(AT,"__call__"),AT.forEach(t),ou=s(Da," special method."),Da.forEach(t),nu=h(Ct),y(So.$$.fragment,Ct),su=h(Ct),y(Io.$$.fragment,Ct),ru=h(Ct),y(Wo.$$.fragment,Ct),Ct.forEach(t),Pa.forEach(t),rc=h(o),Xt=a(o,"H2",{class:!0});var Ic=i(Xt);Uo=a(Ic,"A",{id:!0,class:!0,href:!0});var NT=i(Uo);Qi=a(NT,"SPAN",{});var ST=i(Qi);y(js.$$.fragment,ST),ST.forEach(t),NT.forEach(t),au=h(Ic),Ki=a(Ic,"SPAN",{});var IT=i(Ki);iu=s(IT,"RemBertForSequenceClassification"),IT.forEach(t),Ic.forEach(t),ac=h(o),it=a(o,"DIV",{class:!0});var Un=i(it);y(Ls.$$.fragment,Un),lu=h(Un),Vi=a(Un,"P",{});var WT=i(Vi);du=s(WT,`RemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),WT.forEach(t),cu=h(Un),Ps=a(Un,"P",{});var Wc=i(Ps);pu=s(Wc,"This model is a PyTorch "),Os=a(Wc,"A",{href:!0,rel:!0});var UT=i(Os);mu=s(UT,"torch.nn.Module"),UT.forEach(t),hu=s(Wc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wc.forEach(t),uu=h(Un),Oe=a(Un,"DIV",{class:!0});var at=i(Oe);y(Ds.$$.fragment,at),fu=h(at),Yt=a(at,"P",{});var Aa=i(Yt);gu=s(Aa,"The "),ma=a(Aa,"A",{href:!0});var HT=i(ma);_u=s(HT,"RemBertForSequenceClassification"),HT.forEach(t),ku=s(Aa," forward method, overrides the "),Ji=a(Aa,"CODE",{});var QT=i(Ji);bu=s(QT,"__call__"),QT.forEach(t),Tu=s(Aa," special method."),Aa.forEach(t),vu=h(at),y(Ho.$$.fragment,at),yu=h(at),y(Qo.$$.fragment,at),wu=h(at),y(Ko.$$.fragment,at),$u=h(at),y(Vo.$$.fragment,at),Fu=h(at),y(Jo.$$.fragment,at),at.forEach(t),Un.forEach(t),ic=h(o),Zt=a(o,"H2",{class:!0});var Uc=i(Zt);Go=a(Uc,"A",{id:!0,class:!0,href:!0});var KT=i(Go);Gi=a(KT,"SPAN",{});var VT=i(Gi);y(As.$$.fragment,VT),VT.forEach(t),KT.forEach(t),Ru=h(Uc),Xi=a(Uc,"SPAN",{});var JT=i(Xi);Eu=s(JT,"RemBertForMultipleChoice"),JT.forEach(t),Uc.forEach(t),lc=h(o),lt=a(o,"DIV",{class:!0});var Hn=i(lt);y(Ns.$$.fragment,Hn),Bu=h(Hn),Yi=a(Hn,"P",{});var GT=i(Yi);Mu=s(GT,`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),GT.forEach(t),zu=h(Hn),Ss=a(Hn,"P",{});var Hc=i(Ss);qu=s(Hc,"This model is a PyTorch "),Is=a(Hc,"A",{href:!0,rel:!0});var XT=i(Is);Cu=s(XT,"torch.nn.Module"),XT.forEach(t),xu=s(Hc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hc.forEach(t),ju=h(Hn),ft=a(Hn,"DIV",{class:!0});var Qn=i(ft);y(Ws.$$.fragment,Qn),Lu=h(Qn),eo=a(Qn,"P",{});var Na=i(eo);Pu=s(Na,"The "),ha=a(Na,"A",{href:!0});var YT=i(ha);Ou=s(YT,"RemBertForMultipleChoice"),YT.forEach(t),Du=s(Na," forward method, overrides the "),Zi=a(Na,"CODE",{});var ZT=i(Zi);Au=s(ZT,"__call__"),ZT.forEach(t),Nu=s(Na," special method."),Na.forEach(t),Su=h(Qn),y(Xo.$$.fragment,Qn),Iu=h(Qn),y(Yo.$$.fragment,Qn),Qn.forEach(t),Hn.forEach(t),dc=h(o),to=a(o,"H2",{class:!0});var Qc=i(to);Zo=a(Qc,"A",{id:!0,class:!0,href:!0});var ev=i(Zo);el=a(ev,"SPAN",{});var tv=i(el);y(Us.$$.fragment,tv),tv.forEach(t),ev.forEach(t),Wu=h(Qc),tl=a(Qc,"SPAN",{});var ov=i(tl);Uu=s(ov,"RemBertForTokenClassification"),ov.forEach(t),Qc.forEach(t),cc=h(o),dt=a(o,"DIV",{class:!0});var Kn=i(dt);y(Hs.$$.fragment,Kn),Hu=h(Kn),ol=a(Kn,"P",{});var nv=i(ol);Qu=s(nv,`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),nv.forEach(t),Ku=h(Kn),Qs=a(Kn,"P",{});var Kc=i(Qs);Vu=s(Kc,"This model is a PyTorch "),Ks=a(Kc,"A",{href:!0,rel:!0});var sv=i(Ks);Ju=s(sv,"torch.nn.Module"),sv.forEach(t),Gu=s(Kc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kc.forEach(t),Xu=h(Kn),Xe=a(Kn,"DIV",{class:!0});var xt=i(Xe);y(Vs.$$.fragment,xt),Yu=h(xt),oo=a(xt,"P",{});var Sa=i(oo);Zu=s(Sa,"The "),ua=a(Sa,"A",{href:!0});var rv=i(ua);ef=s(rv,"RemBertForTokenClassification"),rv.forEach(t),tf=s(Sa," forward method, overrides the "),nl=a(Sa,"CODE",{});var av=i(nl);of=s(av,"__call__"),av.forEach(t),nf=s(Sa," special method."),Sa.forEach(t),sf=h(xt),y(en.$$.fragment,xt),rf=h(xt),y(tn.$$.fragment,xt),af=h(xt),y(on.$$.fragment,xt),xt.forEach(t),Kn.forEach(t),pc=h(o),no=a(o,"H2",{class:!0});var Vc=i(no);nn=a(Vc,"A",{id:!0,class:!0,href:!0});var iv=i(nn);sl=a(iv,"SPAN",{});var lv=i(sl);y(Js.$$.fragment,lv),lv.forEach(t),iv.forEach(t),lf=h(Vc),rl=a(Vc,"SPAN",{});var dv=i(rl);df=s(dv,"RemBertForQuestionAnswering"),dv.forEach(t),Vc.forEach(t),mc=h(o),ct=a(o,"DIV",{class:!0});var Vn=i(ct);y(Gs.$$.fragment,Vn),cf=h(Vn),so=a(Vn,"P",{});var Ia=i(so);pf=s(Ia,`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),al=a(Ia,"CODE",{});var cv=i(al);mf=s(cv,"span start logits"),cv.forEach(t),hf=s(Ia," and "),il=a(Ia,"CODE",{});var pv=i(il);uf=s(pv,"span end logits"),pv.forEach(t),ff=s(Ia,")."),Ia.forEach(t),gf=h(Vn),Xs=a(Vn,"P",{});var Jc=i(Xs);_f=s(Jc,"This model is a PyTorch "),Ys=a(Jc,"A",{href:!0,rel:!0});var mv=i(Ys);kf=s(mv,"torch.nn.Module"),mv.forEach(t),bf=s(Jc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jc.forEach(t),Tf=h(Vn),Ye=a(Vn,"DIV",{class:!0});var jt=i(Ye);y(Zs.$$.fragment,jt),vf=h(jt),ro=a(jt,"P",{});var Wa=i(ro);yf=s(Wa,"The "),fa=a(Wa,"A",{href:!0});var hv=i(fa);wf=s(hv,"RemBertForQuestionAnswering"),hv.forEach(t),$f=s(Wa," forward method, overrides the "),ll=a(Wa,"CODE",{});var uv=i(ll);Ff=s(uv,"__call__"),uv.forEach(t),Rf=s(Wa," special method."),Wa.forEach(t),Ef=h(jt),y(sn.$$.fragment,jt),Bf=h(jt),y(rn.$$.fragment,jt),Mf=h(jt),y(an.$$.fragment,jt),jt.forEach(t),Vn.forEach(t),hc=h(o),ao=a(o,"H2",{class:!0});var Gc=i(ao);ln=a(Gc,"A",{id:!0,class:!0,href:!0});var fv=i(ln);dl=a(fv,"SPAN",{});var gv=i(dl);y(er.$$.fragment,gv),gv.forEach(t),fv.forEach(t),zf=h(Gc),cl=a(Gc,"SPAN",{});var _v=i(cl);qf=s(_v,"TFRemBertModel"),_v.forEach(t),Gc.forEach(t),uc=h(o),Ne=a(o,"DIV",{class:!0});var bt=i(Ne);y(tr.$$.fragment,bt),Cf=h(bt),pl=a(bt,"P",{});var kv=i(pl);xf=s(kv,"The bare RemBERT Model transformer outputing raw hidden-states without any specific head on top."),kv.forEach(t),jf=h(bt),or=a(bt,"P",{});var Xc=i(or);Lf=s(Xc,"This model inherits from "),ga=a(Xc,"A",{href:!0});var bv=i(ga);Pf=s(bv,"TFPreTrainedModel"),bv.forEach(t),Of=s(Xc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xc.forEach(t),Df=h(bt),nr=a(bt,"P",{});var Yc=i(nr);Af=s(Yc,"This model is also a "),sr=a(Yc,"A",{href:!0,rel:!0});var Tv=i(sr);Nf=s(Tv,"tf.keras.Model"),Tv.forEach(t),Sf=s(Yc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yc.forEach(t),If=h(bt),y(dn.$$.fragment,bt),Wf=h(bt),gt=a(bt,"DIV",{class:!0});var Jn=i(gt);y(rr.$$.fragment,Jn),Uf=h(Jn),io=a(Jn,"P",{});var Ua=i(io);Hf=s(Ua,"The "),_a=a(Ua,"A",{href:!0});var vv=i(_a);Qf=s(vv,"TFRemBertModel"),vv.forEach(t),Kf=s(Ua," forward method, overrides the "),ml=a(Ua,"CODE",{});var yv=i(ml);Vf=s(yv,"__call__"),yv.forEach(t),Jf=s(Ua," special method."),Ua.forEach(t),Gf=h(Jn),y(cn.$$.fragment,Jn),Xf=h(Jn),y(pn.$$.fragment,Jn),Jn.forEach(t),bt.forEach(t),fc=h(o),lo=a(o,"H2",{class:!0});var Zc=i(lo);mn=a(Zc,"A",{id:!0,class:!0,href:!0});var wv=i(mn);hl=a(wv,"SPAN",{});var $v=i(hl);y(ar.$$.fragment,$v),$v.forEach(t),wv.forEach(t),Yf=h(Zc),ul=a(Zc,"SPAN",{});var Fv=i(ul);Zf=s(Fv,"TFRemBertForMaskedLM"),Fv.forEach(t),Zc.forEach(t),gc=h(o),Se=a(o,"DIV",{class:!0});var Tt=i(Se);y(ir.$$.fragment,Tt),eg=h(Tt),lr=a(Tt,"P",{});var ep=i(lr);tg=s(ep,"RemBERT Model with a "),fl=a(ep,"CODE",{});var Rv=i(fl);og=s(Rv,"language modeling"),Rv.forEach(t),ng=s(ep," head on top."),ep.forEach(t),sg=h(Tt),dr=a(Tt,"P",{});var tp=i(dr);rg=s(tp,"This model inherits from "),ka=a(tp,"A",{href:!0});var Ev=i(ka);ag=s(Ev,"TFPreTrainedModel"),Ev.forEach(t),ig=s(tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tp.forEach(t),lg=h(Tt),cr=a(Tt,"P",{});var op=i(cr);dg=s(op,"This model is also a "),pr=a(op,"A",{href:!0,rel:!0});var Bv=i(pr);cg=s(Bv,"tf.keras.Model"),Bv.forEach(t),pg=s(op,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),op.forEach(t),mg=h(Tt),y(hn.$$.fragment,Tt),hg=h(Tt),Ze=a(Tt,"DIV",{class:!0});var Lt=i(Ze);y(mr.$$.fragment,Lt),ug=h(Lt),co=a(Lt,"P",{});var Ha=i(co);fg=s(Ha,"The "),ba=a(Ha,"A",{href:!0});var Mv=i(ba);gg=s(Mv,"TFRemBertForMaskedLM"),Mv.forEach(t),_g=s(Ha," forward method, overrides the "),gl=a(Ha,"CODE",{});var zv=i(gl);kg=s(zv,"__call__"),zv.forEach(t),bg=s(Ha," special method."),Ha.forEach(t),Tg=h(Lt),y(un.$$.fragment,Lt),vg=h(Lt),y(fn.$$.fragment,Lt),yg=h(Lt),y(gn.$$.fragment,Lt),Lt.forEach(t),Tt.forEach(t),_c=h(o),po=a(o,"H2",{class:!0});var np=i(po);_n=a(np,"A",{id:!0,class:!0,href:!0});var qv=i(_n);_l=a(qv,"SPAN",{});var Cv=i(_l);y(hr.$$.fragment,Cv),Cv.forEach(t),qv.forEach(t),wg=h(np),kl=a(np,"SPAN",{});var xv=i(kl);$g=s(xv,"TFRemBertForCausalLM"),xv.forEach(t),np.forEach(t),kc=h(o),Ie=a(o,"DIV",{class:!0});var vt=i(Ie);y(ur.$$.fragment,vt),Fg=h(vt),fr=a(vt,"P",{});var sp=i(fr);Rg=s(sp,"RemBERT Model with a "),bl=a(sp,"CODE",{});var jv=i(bl);Eg=s(jv,"language modeling"),jv.forEach(t),Bg=s(sp," head on top for CLM fine-tuning."),sp.forEach(t),Mg=h(vt),gr=a(vt,"P",{});var rp=i(gr);zg=s(rp,"This model inherits from "),Ta=a(rp,"A",{href:!0});var Lv=i(Ta);qg=s(Lv,"TFPreTrainedModel"),Lv.forEach(t),Cg=s(rp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rp.forEach(t),xg=h(vt),_r=a(vt,"P",{});var ap=i(_r);jg=s(ap,"This model is also a "),kr=a(ap,"A",{href:!0,rel:!0});var Pv=i(kr);Lg=s(Pv,"tf.keras.Model"),Pv.forEach(t),Pg=s(ap,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ap.forEach(t),Og=h(vt),y(kn.$$.fragment,vt),Dg=h(vt),et=a(vt,"DIV",{class:!0});var Pt=i(et);y(br.$$.fragment,Pt),Ag=h(Pt),Pe=a(Pt,"P",{});var Ve=i(Pe);Ng=s(Ve,"encoder_hidden_states  ("),Tl=a(Ve,"CODE",{});var Ov=i(Tl);Sg=s(Ov,"tf.Tensor"),Ov.forEach(t),Ig=s(Ve," of shape "),vl=a(Ve,"CODE",{});var Dv=i(vl);Wg=s(Dv,"(batch_size, sequence_length, hidden_size)"),Dv.forEach(t),Ug=s(Ve,", "),yl=a(Ve,"EM",{});var Av=i(yl);Hg=s(Av,"optional"),Av.forEach(t),Qg=s(Ve,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),wl=a(Ve,"CODE",{});var Nv=i(wl);Kg=s(Nv,"tf.Tensor"),Nv.forEach(t),Vg=s(Ve," of shape "),$l=a(Ve,"CODE",{});var Sv=i($l);Jg=s(Sv,"(batch_size, sequence_length)"),Sv.forEach(t),Gg=s(Ve,", "),Fl=a(Ve,"EM",{});var Iv=i(Fl);Xg=s(Iv,"optional"),Iv.forEach(t),Yg=s(Ve,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),Rl=a(Ve,"CODE",{});var Wv=i(Rl);Zg=s(Wv,"[0, 1]"),Wv.forEach(t),e_=s(Ve,":"),Ve.forEach(t),t_=h(Pt),Tr=a(Pt,"UL",{});var ip=i(Tr);vr=a(ip,"LI",{});var lp=i(vr);o_=s(lp,"1 for tokens that are "),El=a(lp,"STRONG",{});var Uv=i(El);n_=s(Uv,"not masked"),Uv.forEach(t),s_=s(lp,","),lp.forEach(t),r_=h(ip),yr=a(ip,"LI",{});var dp=i(yr);a_=s(dp,"0 for tokens that are "),Bl=a(dp,"STRONG",{});var Hv=i(Bl);i_=s(Hv,"masked"),Hv.forEach(t),l_=s(dp,"."),dp.forEach(t),ip.forEach(t),d_=h(Pt),V=a(Pt,"P",{});var G=i(V);c_=s(G,"past_key_values ("),Ml=a(G,"CODE",{});var Qv=i(Ml);p_=s(Qv,"Tuple[Tuple[tf.Tensor]]"),Qv.forEach(t),m_=s(G," of length "),zl=a(G,"CODE",{});var Kv=i(zl);h_=s(Kv,"config.n_layers"),Kv.forEach(t),u_=s(G,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),ql=a(G,"CODE",{});var Vv=i(ql);f_=s(Vv,"past_key_values"),Vv.forEach(t),g_=s(G," are used, the user can optionally input only the last "),Cl=a(G,"CODE",{});var Jv=i(Cl);__=s(Jv,"decoder_input_ids"),Jv.forEach(t),k_=s(G,` (those that
don\u2019t have their past key value states given to this model) of shape `),xl=a(G,"CODE",{});var Gv=i(xl);b_=s(Gv,"(batch_size, 1)"),Gv.forEach(t),T_=s(G,` instead of all
`),jl=a(G,"CODE",{});var Xv=i(jl);v_=s(Xv,"decoder_input_ids"),Xv.forEach(t),y_=s(G," of shape "),Ll=a(G,"CODE",{});var Yv=i(Ll);w_=s(Yv,"(batch_size, sequence_length)"),Yv.forEach(t),$_=s(G,`.
use_cache (`),Pl=a(G,"CODE",{});var Zv=i(Pl);F_=s(Zv,"bool"),Zv.forEach(t),R_=s(G,", "),Ol=a(G,"EM",{});var ey=i(Ol);E_=s(ey,"optional"),ey.forEach(t),B_=s(G,", defaults to "),Dl=a(G,"CODE",{});var ty=i(Dl);M_=s(ty,"True"),ty.forEach(t),z_=s(G,`):
If set to `),Al=a(G,"CODE",{});var oy=i(Al);q_=s(oy,"True"),oy.forEach(t),C_=s(G,", "),Nl=a(G,"CODE",{});var ny=i(Nl);x_=s(ny,"past_key_values"),ny.forEach(t),j_=s(G,` key value states are returned and can be used to speed up decoding (see
`),Sl=a(G,"CODE",{});var sy=i(Sl);L_=s(sy,"past_key_values"),sy.forEach(t),P_=s(G,"). Set to "),Il=a(G,"CODE",{});var ry=i(Il);O_=s(ry,"False"),ry.forEach(t),D_=s(G," during training, "),Wl=a(G,"CODE",{});var ay=i(Wl);A_=s(ay,"True"),ay.forEach(t),N_=s(G,` during generation
labels (`),Ul=a(G,"CODE",{});var iy=i(Ul);S_=s(iy,"tf.Tensor"),iy.forEach(t),I_=s(G," or "),Hl=a(G,"CODE",{});var ly=i(Hl);W_=s(ly,"np.ndarray"),ly.forEach(t),U_=s(G," of shape "),Ql=a(G,"CODE",{});var dy=i(Ql);H_=s(dy,"(batch_size, sequence_length)"),dy.forEach(t),Q_=s(G,", "),Kl=a(G,"EM",{});var cy=i(Kl);K_=s(cy,"optional"),cy.forEach(t),V_=s(G,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Vl=a(G,"CODE",{});var py=i(Vl);J_=s(py,"[0, ..., config.vocab_size - 1]"),py.forEach(t),G_=s(G,"."),G.forEach(t),X_=h(Pt),y(bn.$$.fragment,Pt),Pt.forEach(t),vt.forEach(t),bc=h(o),mo=a(o,"H2",{class:!0});var cp=i(mo);Tn=a(cp,"A",{id:!0,class:!0,href:!0});var my=i(Tn);Jl=a(my,"SPAN",{});var hy=i(Jl);y(wr.$$.fragment,hy),hy.forEach(t),my.forEach(t),Y_=h(cp),Gl=a(cp,"SPAN",{});var uy=i(Gl);Z_=s(uy,"TFRemBertForSequenceClassification"),uy.forEach(t),cp.forEach(t),Tc=h(o),We=a(o,"DIV",{class:!0});var yt=i(We);y($r.$$.fragment,yt),ek=h(yt),Xl=a(yt,"P",{});var fy=i(Xl);tk=s(fy,"RemBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),fy.forEach(t),ok=h(yt),Fr=a(yt,"P",{});var pp=i(Fr);nk=s(pp,"This model inherits from "),va=a(pp,"A",{href:!0});var gy=i(va);sk=s(gy,"TFPreTrainedModel"),gy.forEach(t),rk=s(pp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pp.forEach(t),ak=h(yt),Rr=a(yt,"P",{});var mp=i(Rr);ik=s(mp,"This model is also a "),Er=a(mp,"A",{href:!0,rel:!0});var _y=i(Er);lk=s(_y,"tf.keras.Model"),_y.forEach(t),dk=s(mp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mp.forEach(t),ck=h(yt),y(vn.$$.fragment,yt),pk=h(yt),tt=a(yt,"DIV",{class:!0});var Ot=i(tt);y(Br.$$.fragment,Ot),mk=h(Ot),ho=a(Ot,"P",{});var Qa=i(ho);hk=s(Qa,"The "),ya=a(Qa,"A",{href:!0});var ky=i(ya);uk=s(ky,"TFRemBertForSequenceClassification"),ky.forEach(t),fk=s(Qa," forward method, overrides the "),Yl=a(Qa,"CODE",{});var by=i(Yl);gk=s(by,"__call__"),by.forEach(t),_k=s(Qa," special method."),Qa.forEach(t),kk=h(Ot),y(yn.$$.fragment,Ot),bk=h(Ot),y(wn.$$.fragment,Ot),Tk=h(Ot),y($n.$$.fragment,Ot),Ot.forEach(t),yt.forEach(t),vc=h(o),uo=a(o,"H2",{class:!0});var hp=i(uo);Fn=a(hp,"A",{id:!0,class:!0,href:!0});var Ty=i(Fn);Zl=a(Ty,"SPAN",{});var vy=i(Zl);y(Mr.$$.fragment,vy),vy.forEach(t),Ty.forEach(t),vk=h(hp),ed=a(hp,"SPAN",{});var yy=i(ed);yk=s(yy,"TFRemBertForMultipleChoice"),yy.forEach(t),hp.forEach(t),yc=h(o),Ue=a(o,"DIV",{class:!0});var wt=i(Ue);y(zr.$$.fragment,wt),wk=h(wt),td=a(wt,"P",{});var wy=i(td);$k=s(wy,`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),wy.forEach(t),Fk=h(wt),qr=a(wt,"P",{});var up=i(qr);Rk=s(up,"This model inherits from "),wa=a(up,"A",{href:!0});var $y=i(wa);Ek=s($y,"TFPreTrainedModel"),$y.forEach(t),Bk=s(up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),up.forEach(t),Mk=h(wt),Cr=a(wt,"P",{});var fp=i(Cr);zk=s(fp,"This model is also a "),xr=a(fp,"A",{href:!0,rel:!0});var Fy=i(xr);qk=s(Fy,"tf.keras.Model"),Fy.forEach(t),Ck=s(fp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fp.forEach(t),xk=h(wt),y(Rn.$$.fragment,wt),jk=h(wt),_t=a(wt,"DIV",{class:!0});var Gn=i(_t);y(jr.$$.fragment,Gn),Lk=h(Gn),fo=a(Gn,"P",{});var Ka=i(fo);Pk=s(Ka,"The "),$a=a(Ka,"A",{href:!0});var Ry=i($a);Ok=s(Ry,"TFRemBertForMultipleChoice"),Ry.forEach(t),Dk=s(Ka," forward method, overrides the "),od=a(Ka,"CODE",{});var Ey=i(od);Ak=s(Ey,"__call__"),Ey.forEach(t),Nk=s(Ka," special method."),Ka.forEach(t),Sk=h(Gn),y(En.$$.fragment,Gn),Ik=h(Gn),y(Bn.$$.fragment,Gn),Gn.forEach(t),wt.forEach(t),wc=h(o),go=a(o,"H2",{class:!0});var gp=i(go);Mn=a(gp,"A",{id:!0,class:!0,href:!0});var By=i(Mn);nd=a(By,"SPAN",{});var My=i(nd);y(Lr.$$.fragment,My),My.forEach(t),By.forEach(t),Wk=h(gp),sd=a(gp,"SPAN",{});var zy=i(sd);Uk=s(zy,"TFRemBertForTokenClassification"),zy.forEach(t),gp.forEach(t),$c=h(o),He=a(o,"DIV",{class:!0});var $t=i(He);y(Pr.$$.fragment,$t),Hk=h($t),rd=a($t,"P",{});var qy=i(rd);Qk=s(qy,`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),qy.forEach(t),Kk=h($t),Or=a($t,"P",{});var _p=i(Or);Vk=s(_p,"This model inherits from "),Fa=a(_p,"A",{href:!0});var Cy=i(Fa);Jk=s(Cy,"TFPreTrainedModel"),Cy.forEach(t),Gk=s(_p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_p.forEach(t),Xk=h($t),Dr=a($t,"P",{});var kp=i(Dr);Yk=s(kp,"This model is also a "),Ar=a(kp,"A",{href:!0,rel:!0});var xy=i(Ar);Zk=s(xy,"tf.keras.Model"),xy.forEach(t),eb=s(kp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kp.forEach(t),tb=h($t),y(zn.$$.fragment,$t),ob=h($t),ot=a($t,"DIV",{class:!0});var Dt=i(ot);y(Nr.$$.fragment,Dt),nb=h(Dt),_o=a(Dt,"P",{});var Va=i(_o);sb=s(Va,"The "),Ra=a(Va,"A",{href:!0});var jy=i(Ra);rb=s(jy,"TFRemBertForTokenClassification"),jy.forEach(t),ab=s(Va," forward method, overrides the "),ad=a(Va,"CODE",{});var Ly=i(ad);ib=s(Ly,"__call__"),Ly.forEach(t),lb=s(Va," special method."),Va.forEach(t),db=h(Dt),y(qn.$$.fragment,Dt),cb=h(Dt),y(Cn.$$.fragment,Dt),pb=h(Dt),y(xn.$$.fragment,Dt),Dt.forEach(t),$t.forEach(t),Fc=h(o),ko=a(o,"H2",{class:!0});var bp=i(ko);jn=a(bp,"A",{id:!0,class:!0,href:!0});var Py=i(jn);id=a(Py,"SPAN",{});var Oy=i(id);y(Sr.$$.fragment,Oy),Oy.forEach(t),Py.forEach(t),mb=h(bp),ld=a(bp,"SPAN",{});var Dy=i(ld);hb=s(Dy,"TFRemBertForQuestionAnswering"),Dy.forEach(t),bp.forEach(t),Rc=h(o),Qe=a(o,"DIV",{class:!0});var Ft=i(Qe);y(Ir.$$.fragment,Ft),ub=h(Ft),bo=a(Ft,"P",{});var Ja=i(bo);fb=s(Ja,`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),dd=a(Ja,"CODE",{});var Ay=i(dd);gb=s(Ay,"span start logits"),Ay.forEach(t),_b=s(Ja," and "),cd=a(Ja,"CODE",{});var Ny=i(cd);kb=s(Ny,"span end logits"),Ny.forEach(t),bb=s(Ja,")."),Ja.forEach(t),Tb=h(Ft),Wr=a(Ft,"P",{});var Tp=i(Wr);vb=s(Tp,"This model inherits from "),Ea=a(Tp,"A",{href:!0});var Sy=i(Ea);yb=s(Sy,"TFPreTrainedModel"),Sy.forEach(t),wb=s(Tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tp.forEach(t),$b=h(Ft),Ur=a(Ft,"P",{});var vp=i(Ur);Fb=s(vp,"This model is also a "),Hr=a(vp,"A",{href:!0,rel:!0});var Iy=i(Hr);Rb=s(Iy,"tf.keras.Model"),Iy.forEach(t),Eb=s(vp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vp.forEach(t),Bb=h(Ft),y(Ln.$$.fragment,Ft),Mb=h(Ft),nt=a(Ft,"DIV",{class:!0});var At=i(nt);y(Qr.$$.fragment,At),zb=h(At),To=a(At,"P",{});var Ga=i(To);qb=s(Ga,"The "),Ba=a(Ga,"A",{href:!0});var Wy=i(Ba);Cb=s(Wy,"TFRemBertForQuestionAnswering"),Wy.forEach(t),xb=s(Ga," forward method, overrides the "),pd=a(Ga,"CODE",{});var Uy=i(pd);jb=s(Uy,"__call__"),Uy.forEach(t),Lb=s(Ga," special method."),Ga.forEach(t),Pb=h(At),y(Pn.$$.fragment,At),Ob=h(At),y(On.$$.fragment,At),Db=h(At),y(Dn.$$.fragment,At),At.forEach(t),Ft.forEach(t),this.h()},h(){b(d,"name","hf:doc:metadata"),b(d,"content",JSON.stringify(Uw)),b(p,"id","rembert"),b(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(p,"href","#rembert"),b(c,"class","relative group"),b(te,"id","overview"),b(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(te,"href","#overview"),b(z,"class","relative group"),b(se,"href","https://arxiv.org/abs/2010.12821"),b(se,"rel","nofollow"),b(oe,"id","transformers.RemBertConfig"),b(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(oe,"href","#transformers.RemBertConfig"),b(ee,"class","relative group"),b(ye,"href","/docs/transformers/main/en/model_doc/rembert#transformers.RemBertModel"),b(A,"href","https://huggingface.co/google/rembert"),b(A,"rel","nofollow"),b(de,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),b(ea,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),b(Fo,"id","initializing-a-model-from-the-rembert-style-configuration->>>-model-=-rembertmodel(configuration)"),b(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Fo,"href","#initializing-a-model-from-the-rembert-style-configuration->>>-model-=-rembertmodel(configuration)"),b($o,"class","relative group"),b(Eo,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),b(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Eo,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),b(Ro,"class","relative group"),b(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Bo,"id","transformers.RemBertTokenizer"),b(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Bo,"href","#transformers.RemBertTokenizer"),b(Nt,"class","relative group"),b(os,"href","https://github.com/google/sentencepiece"),b(os,"rel","nofollow"),b(ta,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),b(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(sa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(qo,"id","transformers.RemBertTokenizerFast"),b(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(qo,"href","#transformers.RemBertTokenizerFast"),b(It,"class","relative group"),b(ms,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),b(ms,"rel","nofollow"),b(ra,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),b(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(la,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(jo,"id","transformers.RemBertModel"),b(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(jo,"href","#transformers.RemBertModel"),b(Wt,"class","relative group"),b(ys,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(ys,"rel","nofollow"),b($s,"href","https://arxiv.org/abs/1706.03762"),b($s,"rel","nofollow"),b(da,"href","/docs/transformers/main/en/model_doc/rembert#transformers.RemBertModel"),b(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Oo,"id","transformers.RemBertForCausalLM"),b(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Oo,"href","#transformers.RemBertForCausalLM"),b(Ht,"class","relative group"),b(Bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Bs,"rel","nofollow"),b(ca,"href","/docs/transformers/main/en/model_doc/rembert#transformers.RemBertForCausalLM"),b(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(No,"id","transformers.RemBertForMaskedLM"),b(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(No,"href","#transformers.RemBertForMaskedLM"),b(Vt,"class","relative group"),b(Cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Cs,"rel","nofollow"),b(pa,"href","/docs/transformers/main/en/model_doc/rembert#transformers.RemBertForMaskedLM"),b(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Uo,"id","transformers.RemBertForSequenceClassification"),b(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Uo,"href","#transformers.RemBertForSequenceClassification"),b(Xt,"class","relative group"),b(Os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Os,"rel","nofollow"),b(ma,"href","/docs/transformers/main/en/model_doc/rembert#transformers.RemBertForSequenceClassification"),b(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Go,"id","transformers.RemBertForMultipleChoice"),b(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Go,"href","#transformers.RemBertForMultipleChoice"),b(Zt,"class","relative group"),b(Is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Is,"rel","nofollow"),b(ha,"href","/docs/transformers/main/en/model_doc/rembert#transformers.RemBertForMultipleChoice"),b(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Zo,"id","transformers.RemBertForTokenClassification"),b(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Zo,"href","#transformers.RemBertForTokenClassification"),b(to,"class","relative group"),b(Ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Ks,"rel","nofollow"),b(ua,"href","/docs/transformers/main/en/model_doc/rembert#transformers.RemBertForTokenClassification"),b(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(nn,"id","transformers.RemBertForQuestionAnswering"),b(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(nn,"href","#transformers.RemBertForQuestionAnswering"),b(no,"class","relative group"),b(Ys,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Ys,"rel","nofollow"),b(fa,"href","/docs/transformers/main/en/model_doc/rembert#transformers.RemBertForQuestionAnswering"),b(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ln,"id","transformers.TFRemBertModel"),b(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(ln,"href","#transformers.TFRemBertModel"),b(ao,"class","relative group"),b(ga,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),b(sr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(sr,"rel","nofollow"),b(_a,"href","/docs/transformers/main/en/model_doc/rembert#transformers.TFRemBertModel"),b(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(mn,"id","transformers.TFRemBertForMaskedLM"),b(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(mn,"href","#transformers.TFRemBertForMaskedLM"),b(lo,"class","relative group"),b(ka,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),b(pr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(pr,"rel","nofollow"),b(ba,"href","/docs/transformers/main/en/model_doc/rembert#transformers.TFRemBertForMaskedLM"),b(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(_n,"id","transformers.TFRemBertForCausalLM"),b(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(_n,"href","#transformers.TFRemBertForCausalLM"),b(po,"class","relative group"),b(Ta,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),b(kr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(kr,"rel","nofollow"),b(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Tn,"id","transformers.TFRemBertForSequenceClassification"),b(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Tn,"href","#transformers.TFRemBertForSequenceClassification"),b(mo,"class","relative group"),b(va,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),b(Er,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Er,"rel","nofollow"),b(ya,"href","/docs/transformers/main/en/model_doc/rembert#transformers.TFRemBertForSequenceClassification"),b(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Fn,"id","transformers.TFRemBertForMultipleChoice"),b(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Fn,"href","#transformers.TFRemBertForMultipleChoice"),b(uo,"class","relative group"),b(wa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),b(xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(xr,"rel","nofollow"),b($a,"href","/docs/transformers/main/en/model_doc/rembert#transformers.TFRemBertForMultipleChoice"),b(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Mn,"id","transformers.TFRemBertForTokenClassification"),b(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Mn,"href","#transformers.TFRemBertForTokenClassification"),b(go,"class","relative group"),b(Fa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),b(Ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Ar,"rel","nofollow"),b(Ra,"href","/docs/transformers/main/en/model_doc/rembert#transformers.TFRemBertForTokenClassification"),b(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(jn,"id","transformers.TFRemBertForQuestionAnswering"),b(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(jn,"href","#transformers.TFRemBertForQuestionAnswering"),b(ko,"class","relative group"),b(Ea,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),b(Hr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Hr,"rel","nofollow"),b(Ba,"href","/docs/transformers/main/en/model_doc/rembert#transformers.TFRemBertForQuestionAnswering"),b(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,T){e(document.head,d),_(o,g,T),_(o,c,T),e(c,p),e(p,k),w(l,k,null),e(c,u),e(c,M),e(M,ue),_(o,X,T),_(o,z,T),e(z,te),e(te,N),w(ne,N,null),e(z,fe),e(z,S),e(S,ge),_(o,pe,T),_(o,J,T),e(J,O),e(J,se),e(se,Z),e(J,q),_(o,x,T),_(o,ae,T),e(ae,H),_(o,me,T),_(o,ie,T),e(ie,I),e(I,_e),_(o,he,T),_(o,C,T),e(C,ke),_(o,W,T),_(o,le,T),e(le,be),_(o,U,T),_(o,ee,T),e(ee,oe),e(oe,L),w(re,L,null),e(ee,Q),e(ee,ce),e(ce,f),_(o,B,T),_(o,P,T),w(ve,P,null),e(P,Re),e(P,j),e(j,Ee),e(j,ye),e(ye,Be),e(j,D),e(j,A),e(A,Me),e(j,ze),e(P,K),e(P,Te),e(Te,qe),e(Te,de),e(de,Ce),e(Te,yp),e(Te,ea),e(ea,wp),e(Te,$p),e(P,Fp),w(wo,P,null),e(P,Rp),e(P,Xa),e(Xa,Ya),e(Ya,Za),e(Za,ei),e(ei,Ep),e(P,Bp),e(P,ti),e(ti,oi),e(oi,ni),e(ni,$o),e($o,Fo),e(Fo,si),w(Xn,si,null),e($o,Mp),e($o,ri),e(ri,zp),e(P,qp),e(P,ai),e(ai,ii),e(ii,li),e(li,Ro),e(Ro,Eo),e(Eo,di),w(Yn,di,null),e(Ro,Cp),e(Ro,ci),e(ci,xp),_(o,Jd,T),_(o,Nt,T),e(Nt,Bo),e(Bo,pi),w(Zn,pi,null),e(Nt,jp),e(Nt,mi),e(mi,Lp),_(o,Gd,T),_(o,Le,T),w(es,Le,null),e(Le,Pp),e(Le,ts),e(ts,Op),e(ts,os),e(os,Dp),e(ts,Ap),e(Le,Np),e(Le,ns),e(ns,Sp),e(ns,ta),e(ta,Ip),e(ns,Wp),e(Le,Up),e(Le,Mt),w(ss,Mt,null),e(Mt,Hp),e(Mt,hi),e(hi,Qp),e(Mt,Kp),e(Mt,rs),e(rs,oa),e(oa,Vp),e(oa,ui),e(ui,Jp),e(rs,Gp),e(rs,na),e(na,Xp),e(na,fi),e(fi,Yp),e(Le,Zp),e(Le,Mo),w(as,Mo,null),e(Mo,em),e(Mo,is),e(is,tm),e(is,gi),e(gi,om),e(is,nm),e(Le,sm),e(Le,pt),w(ls,pt,null),e(pt,rm),e(pt,_i),e(_i,am),e(pt,im),w(zo,pt,null),e(pt,lm),e(pt,St),e(St,dm),e(St,ki),e(ki,cm),e(St,pm),e(St,bi),e(bi,mm),e(St,hm),e(Le,um),e(Le,sa),w(ds,sa,null),_(o,Xd,T),_(o,It,T),e(It,qo),e(qo,Ti),w(cs,Ti,null),e(It,fm),e(It,vi),e(vi,gm),_(o,Yd,T),_(o,De,T),w(ps,De,null),e(De,_m),e(De,Rt),e(Rt,km),e(Rt,yi),e(yi,bm),e(Rt,Tm),e(Rt,ms),e(ms,vm),e(Rt,ym),e(Rt,ra),e(ra,wm),e(Rt,$m),e(De,Fm),e(De,zt),w(hs,zt,null),e(zt,Rm),e(zt,wi),e(wi,Em),e(zt,Bm),e(zt,us),e(us,aa),e(aa,Mm),e(aa,$i),e($i,zm),e(us,qm),e(us,ia),e(ia,Cm),e(ia,Fi),e(Fi,xm),e(De,jm),e(De,Co),w(fs,Co,null),e(Co,Lm),e(Co,gs),e(gs,Pm),e(gs,Ri),e(Ri,Om),e(gs,Dm),e(De,Am),e(De,mt),w(_s,mt,null),e(mt,Nm),e(mt,Ei),e(Ei,Sm),e(mt,Im),w(xo,mt,null),e(mt,Wm),e(mt,Bi),e(Bi,Um),e(De,Hm),e(De,la),w(ks,la,null),_(o,Zd,T),_(o,Wt,T),e(Wt,jo),e(jo,Mi),w(bs,Mi,null),e(Wt,Qm),e(Wt,zi),e(zi,Km),_(o,ec,T),_(o,Je,T),w(Ts,Je,null),e(Je,Vm),e(Je,vs),e(vs,Jm),e(vs,ys),e(ys,Gm),e(vs,Xm),e(Je,Ym),e(Je,ws),e(ws,Zm),e(ws,$s),e($s,eh),e(ws,th),e(Je,oh),e(Je,Ae),e(Ae,nh),e(Ae,qi),e(qi,sh),e(Ae,rh),e(Ae,Ci),e(Ci,ah),e(Ae,ih),e(Ae,xi),e(xi,lh),e(Ae,dh),e(Ae,ji),e(ji,ch),e(Ae,ph),e(Ae,Li),e(Li,mh),e(Ae,hh),e(Ae,Pi),e(Pi,uh),e(Ae,fh),e(Je,gh),e(Je,ht),w(Fs,ht,null),e(ht,_h),e(ht,Ut),e(Ut,kh),e(Ut,da),e(da,bh),e(Ut,Th),e(Ut,Oi),e(Oi,vh),e(Ut,yh),e(ht,wh),w(Lo,ht,null),e(ht,$h),w(Po,ht,null),_(o,tc,T),_(o,Ht,T),e(Ht,Oo),e(Oo,Di),w(Rs,Di,null),e(Ht,Fh),e(Ht,Ai),e(Ai,Rh),_(o,oc,T),_(o,Et,T),w(Es,Et,null),e(Et,Eh),e(Et,Qt),e(Qt,Bh),e(Qt,Ni),e(Ni,Mh),e(Qt,zh),e(Qt,Bs),e(Bs,qh),e(Qt,Ch),e(Et,xh),e(Et,ut),w(Ms,ut,null),e(ut,jh),e(ut,Kt),e(Kt,Lh),e(Kt,ca),e(ca,Ph),e(Kt,Oh),e(Kt,Si),e(Si,Dh),e(Kt,Ah),e(ut,Nh),w(Do,ut,null),e(ut,Sh),w(Ao,ut,null),_(o,nc,T),_(o,Vt,T),e(Vt,No),e(No,Ii),w(zs,Ii,null),e(Vt,Ih),e(Vt,Wi),e(Wi,Wh),_(o,sc,T),_(o,Bt,T),w(qs,Bt,null),e(Bt,Uh),e(Bt,Jt),e(Jt,Hh),e(Jt,Ui),e(Ui,Qh),e(Jt,Kh),e(Jt,Cs),e(Cs,Vh),e(Jt,Jh),e(Bt,Gh),e(Bt,Ge),w(xs,Ge,null),e(Ge,Xh),e(Ge,Gt),e(Gt,Yh),e(Gt,pa),e(pa,Zh),e(Gt,eu),e(Gt,Hi),e(Hi,tu),e(Gt,ou),e(Ge,nu),w(So,Ge,null),e(Ge,su),w(Io,Ge,null),e(Ge,ru),w(Wo,Ge,null),_(o,rc,T),_(o,Xt,T),e(Xt,Uo),e(Uo,Qi),w(js,Qi,null),e(Xt,au),e(Xt,Ki),e(Ki,iu),_(o,ac,T),_(o,it,T),w(Ls,it,null),e(it,lu),e(it,Vi),e(Vi,du),e(it,cu),e(it,Ps),e(Ps,pu),e(Ps,Os),e(Os,mu),e(Ps,hu),e(it,uu),e(it,Oe),w(Ds,Oe,null),e(Oe,fu),e(Oe,Yt),e(Yt,gu),e(Yt,ma),e(ma,_u),e(Yt,ku),e(Yt,Ji),e(Ji,bu),e(Yt,Tu),e(Oe,vu),w(Ho,Oe,null),e(Oe,yu),w(Qo,Oe,null),e(Oe,wu),w(Ko,Oe,null),e(Oe,$u),w(Vo,Oe,null),e(Oe,Fu),w(Jo,Oe,null),_(o,ic,T),_(o,Zt,T),e(Zt,Go),e(Go,Gi),w(As,Gi,null),e(Zt,Ru),e(Zt,Xi),e(Xi,Eu),_(o,lc,T),_(o,lt,T),w(Ns,lt,null),e(lt,Bu),e(lt,Yi),e(Yi,Mu),e(lt,zu),e(lt,Ss),e(Ss,qu),e(Ss,Is),e(Is,Cu),e(Ss,xu),e(lt,ju),e(lt,ft),w(Ws,ft,null),e(ft,Lu),e(ft,eo),e(eo,Pu),e(eo,ha),e(ha,Ou),e(eo,Du),e(eo,Zi),e(Zi,Au),e(eo,Nu),e(ft,Su),w(Xo,ft,null),e(ft,Iu),w(Yo,ft,null),_(o,dc,T),_(o,to,T),e(to,Zo),e(Zo,el),w(Us,el,null),e(to,Wu),e(to,tl),e(tl,Uu),_(o,cc,T),_(o,dt,T),w(Hs,dt,null),e(dt,Hu),e(dt,ol),e(ol,Qu),e(dt,Ku),e(dt,Qs),e(Qs,Vu),e(Qs,Ks),e(Ks,Ju),e(Qs,Gu),e(dt,Xu),e(dt,Xe),w(Vs,Xe,null),e(Xe,Yu),e(Xe,oo),e(oo,Zu),e(oo,ua),e(ua,ef),e(oo,tf),e(oo,nl),e(nl,of),e(oo,nf),e(Xe,sf),w(en,Xe,null),e(Xe,rf),w(tn,Xe,null),e(Xe,af),w(on,Xe,null),_(o,pc,T),_(o,no,T),e(no,nn),e(nn,sl),w(Js,sl,null),e(no,lf),e(no,rl),e(rl,df),_(o,mc,T),_(o,ct,T),w(Gs,ct,null),e(ct,cf),e(ct,so),e(so,pf),e(so,al),e(al,mf),e(so,hf),e(so,il),e(il,uf),e(so,ff),e(ct,gf),e(ct,Xs),e(Xs,_f),e(Xs,Ys),e(Ys,kf),e(Xs,bf),e(ct,Tf),e(ct,Ye),w(Zs,Ye,null),e(Ye,vf),e(Ye,ro),e(ro,yf),e(ro,fa),e(fa,wf),e(ro,$f),e(ro,ll),e(ll,Ff),e(ro,Rf),e(Ye,Ef),w(sn,Ye,null),e(Ye,Bf),w(rn,Ye,null),e(Ye,Mf),w(an,Ye,null),_(o,hc,T),_(o,ao,T),e(ao,ln),e(ln,dl),w(er,dl,null),e(ao,zf),e(ao,cl),e(cl,qf),_(o,uc,T),_(o,Ne,T),w(tr,Ne,null),e(Ne,Cf),e(Ne,pl),e(pl,xf),e(Ne,jf),e(Ne,or),e(or,Lf),e(or,ga),e(ga,Pf),e(or,Of),e(Ne,Df),e(Ne,nr),e(nr,Af),e(nr,sr),e(sr,Nf),e(nr,Sf),e(Ne,If),w(dn,Ne,null),e(Ne,Wf),e(Ne,gt),w(rr,gt,null),e(gt,Uf),e(gt,io),e(io,Hf),e(io,_a),e(_a,Qf),e(io,Kf),e(io,ml),e(ml,Vf),e(io,Jf),e(gt,Gf),w(cn,gt,null),e(gt,Xf),w(pn,gt,null),_(o,fc,T),_(o,lo,T),e(lo,mn),e(mn,hl),w(ar,hl,null),e(lo,Yf),e(lo,ul),e(ul,Zf),_(o,gc,T),_(o,Se,T),w(ir,Se,null),e(Se,eg),e(Se,lr),e(lr,tg),e(lr,fl),e(fl,og),e(lr,ng),e(Se,sg),e(Se,dr),e(dr,rg),e(dr,ka),e(ka,ag),e(dr,ig),e(Se,lg),e(Se,cr),e(cr,dg),e(cr,pr),e(pr,cg),e(cr,pg),e(Se,mg),w(hn,Se,null),e(Se,hg),e(Se,Ze),w(mr,Ze,null),e(Ze,ug),e(Ze,co),e(co,fg),e(co,ba),e(ba,gg),e(co,_g),e(co,gl),e(gl,kg),e(co,bg),e(Ze,Tg),w(un,Ze,null),e(Ze,vg),w(fn,Ze,null),e(Ze,yg),w(gn,Ze,null),_(o,_c,T),_(o,po,T),e(po,_n),e(_n,_l),w(hr,_l,null),e(po,wg),e(po,kl),e(kl,$g),_(o,kc,T),_(o,Ie,T),w(ur,Ie,null),e(Ie,Fg),e(Ie,fr),e(fr,Rg),e(fr,bl),e(bl,Eg),e(fr,Bg),e(Ie,Mg),e(Ie,gr),e(gr,zg),e(gr,Ta),e(Ta,qg),e(gr,Cg),e(Ie,xg),e(Ie,_r),e(_r,jg),e(_r,kr),e(kr,Lg),e(_r,Pg),e(Ie,Og),w(kn,Ie,null),e(Ie,Dg),e(Ie,et),w(br,et,null),e(et,Ag),e(et,Pe),e(Pe,Ng),e(Pe,Tl),e(Tl,Sg),e(Pe,Ig),e(Pe,vl),e(vl,Wg),e(Pe,Ug),e(Pe,yl),e(yl,Hg),e(Pe,Qg),e(Pe,wl),e(wl,Kg),e(Pe,Vg),e(Pe,$l),e($l,Jg),e(Pe,Gg),e(Pe,Fl),e(Fl,Xg),e(Pe,Yg),e(Pe,Rl),e(Rl,Zg),e(Pe,e_),e(et,t_),e(et,Tr),e(Tr,vr),e(vr,o_),e(vr,El),e(El,n_),e(vr,s_),e(Tr,r_),e(Tr,yr),e(yr,a_),e(yr,Bl),e(Bl,i_),e(yr,l_),e(et,d_),e(et,V),e(V,c_),e(V,Ml),e(Ml,p_),e(V,m_),e(V,zl),e(zl,h_),e(V,u_),e(V,ql),e(ql,f_),e(V,g_),e(V,Cl),e(Cl,__),e(V,k_),e(V,xl),e(xl,b_),e(V,T_),e(V,jl),e(jl,v_),e(V,y_),e(V,Ll),e(Ll,w_),e(V,$_),e(V,Pl),e(Pl,F_),e(V,R_),e(V,Ol),e(Ol,E_),e(V,B_),e(V,Dl),e(Dl,M_),e(V,z_),e(V,Al),e(Al,q_),e(V,C_),e(V,Nl),e(Nl,x_),e(V,j_),e(V,Sl),e(Sl,L_),e(V,P_),e(V,Il),e(Il,O_),e(V,D_),e(V,Wl),e(Wl,A_),e(V,N_),e(V,Ul),e(Ul,S_),e(V,I_),e(V,Hl),e(Hl,W_),e(V,U_),e(V,Ql),e(Ql,H_),e(V,Q_),e(V,Kl),e(Kl,K_),e(V,V_),e(V,Vl),e(Vl,J_),e(V,G_),e(et,X_),w(bn,et,null),_(o,bc,T),_(o,mo,T),e(mo,Tn),e(Tn,Jl),w(wr,Jl,null),e(mo,Y_),e(mo,Gl),e(Gl,Z_),_(o,Tc,T),_(o,We,T),w($r,We,null),e(We,ek),e(We,Xl),e(Xl,tk),e(We,ok),e(We,Fr),e(Fr,nk),e(Fr,va),e(va,sk),e(Fr,rk),e(We,ak),e(We,Rr),e(Rr,ik),e(Rr,Er),e(Er,lk),e(Rr,dk),e(We,ck),w(vn,We,null),e(We,pk),e(We,tt),w(Br,tt,null),e(tt,mk),e(tt,ho),e(ho,hk),e(ho,ya),e(ya,uk),e(ho,fk),e(ho,Yl),e(Yl,gk),e(ho,_k),e(tt,kk),w(yn,tt,null),e(tt,bk),w(wn,tt,null),e(tt,Tk),w($n,tt,null),_(o,vc,T),_(o,uo,T),e(uo,Fn),e(Fn,Zl),w(Mr,Zl,null),e(uo,vk),e(uo,ed),e(ed,yk),_(o,yc,T),_(o,Ue,T),w(zr,Ue,null),e(Ue,wk),e(Ue,td),e(td,$k),e(Ue,Fk),e(Ue,qr),e(qr,Rk),e(qr,wa),e(wa,Ek),e(qr,Bk),e(Ue,Mk),e(Ue,Cr),e(Cr,zk),e(Cr,xr),e(xr,qk),e(Cr,Ck),e(Ue,xk),w(Rn,Ue,null),e(Ue,jk),e(Ue,_t),w(jr,_t,null),e(_t,Lk),e(_t,fo),e(fo,Pk),e(fo,$a),e($a,Ok),e(fo,Dk),e(fo,od),e(od,Ak),e(fo,Nk),e(_t,Sk),w(En,_t,null),e(_t,Ik),w(Bn,_t,null),_(o,wc,T),_(o,go,T),e(go,Mn),e(Mn,nd),w(Lr,nd,null),e(go,Wk),e(go,sd),e(sd,Uk),_(o,$c,T),_(o,He,T),w(Pr,He,null),e(He,Hk),e(He,rd),e(rd,Qk),e(He,Kk),e(He,Or),e(Or,Vk),e(Or,Fa),e(Fa,Jk),e(Or,Gk),e(He,Xk),e(He,Dr),e(Dr,Yk),e(Dr,Ar),e(Ar,Zk),e(Dr,eb),e(He,tb),w(zn,He,null),e(He,ob),e(He,ot),w(Nr,ot,null),e(ot,nb),e(ot,_o),e(_o,sb),e(_o,Ra),e(Ra,rb),e(_o,ab),e(_o,ad),e(ad,ib),e(_o,lb),e(ot,db),w(qn,ot,null),e(ot,cb),w(Cn,ot,null),e(ot,pb),w(xn,ot,null),_(o,Fc,T),_(o,ko,T),e(ko,jn),e(jn,id),w(Sr,id,null),e(ko,mb),e(ko,ld),e(ld,hb),_(o,Rc,T),_(o,Qe,T),w(Ir,Qe,null),e(Qe,ub),e(Qe,bo),e(bo,fb),e(bo,dd),e(dd,gb),e(bo,_b),e(bo,cd),e(cd,kb),e(bo,bb),e(Qe,Tb),e(Qe,Wr),e(Wr,vb),e(Wr,Ea),e(Ea,yb),e(Wr,wb),e(Qe,$b),e(Qe,Ur),e(Ur,Fb),e(Ur,Hr),e(Hr,Rb),e(Ur,Eb),e(Qe,Bb),w(Ln,Qe,null),e(Qe,Mb),e(Qe,nt),w(Qr,nt,null),e(nt,zb),e(nt,To),e(To,qb),e(To,Ba),e(Ba,Cb),e(To,xb),e(To,pd),e(pd,jb),e(To,Lb),e(nt,Pb),w(Pn,nt,null),e(nt,Ob),w(On,nt,null),e(nt,Db),w(Dn,nt,null),Ec=!0},p(o,[T]){const Kr={};T&2&&(Kr.$$scope={dirty:T,ctx:o}),wo.$set(Kr);const md={};T&2&&(md.$$scope={dirty:T,ctx:o}),zo.$set(md);const hd={};T&2&&(hd.$$scope={dirty:T,ctx:o}),xo.$set(hd);const ud={};T&2&&(ud.$$scope={dirty:T,ctx:o}),Lo.$set(ud);const Vr={};T&2&&(Vr.$$scope={dirty:T,ctx:o}),Po.$set(Vr);const fd={};T&2&&(fd.$$scope={dirty:T,ctx:o}),Do.$set(fd);const gd={};T&2&&(gd.$$scope={dirty:T,ctx:o}),Ao.$set(gd);const _d={};T&2&&(_d.$$scope={dirty:T,ctx:o}),So.$set(_d);const Jr={};T&2&&(Jr.$$scope={dirty:T,ctx:o}),Io.$set(Jr);const kd={};T&2&&(kd.$$scope={dirty:T,ctx:o}),Wo.$set(kd);const bd={};T&2&&(bd.$$scope={dirty:T,ctx:o}),Ho.$set(bd);const Td={};T&2&&(Td.$$scope={dirty:T,ctx:o}),Qo.$set(Td);const vd={};T&2&&(vd.$$scope={dirty:T,ctx:o}),Ko.$set(vd);const yd={};T&2&&(yd.$$scope={dirty:T,ctx:o}),Vo.$set(yd);const wd={};T&2&&(wd.$$scope={dirty:T,ctx:o}),Jo.$set(wd);const Gr={};T&2&&(Gr.$$scope={dirty:T,ctx:o}),Xo.$set(Gr);const $d={};T&2&&($d.$$scope={dirty:T,ctx:o}),Yo.$set($d);const Fd={};T&2&&(Fd.$$scope={dirty:T,ctx:o}),en.$set(Fd);const Rd={};T&2&&(Rd.$$scope={dirty:T,ctx:o}),tn.$set(Rd);const Ke={};T&2&&(Ke.$$scope={dirty:T,ctx:o}),on.$set(Ke);const vo={};T&2&&(vo.$$scope={dirty:T,ctx:o}),sn.$set(vo);const Ed={};T&2&&(Ed.$$scope={dirty:T,ctx:o}),rn.$set(Ed);const Bd={};T&2&&(Bd.$$scope={dirty:T,ctx:o}),an.$set(Bd);const yo={};T&2&&(yo.$$scope={dirty:T,ctx:o}),dn.$set(yo);const Md={};T&2&&(Md.$$scope={dirty:T,ctx:o}),cn.$set(Md);const zd={};T&2&&(zd.$$scope={dirty:T,ctx:o}),pn.$set(zd);const qd={};T&2&&(qd.$$scope={dirty:T,ctx:o}),hn.$set(qd);const Cd={};T&2&&(Cd.$$scope={dirty:T,ctx:o}),un.$set(Cd);const xd={};T&2&&(xd.$$scope={dirty:T,ctx:o}),fn.$set(xd);const jd={};T&2&&(jd.$$scope={dirty:T,ctx:o}),gn.$set(jd);const Ld={};T&2&&(Ld.$$scope={dirty:T,ctx:o}),kn.$set(Ld);const Pd={};T&2&&(Pd.$$scope={dirty:T,ctx:o}),bn.$set(Pd);const Od={};T&2&&(Od.$$scope={dirty:T,ctx:o}),vn.$set(Od);const Xr={};T&2&&(Xr.$$scope={dirty:T,ctx:o}),yn.$set(Xr);const Dd={};T&2&&(Dd.$$scope={dirty:T,ctx:o}),wn.$set(Dd);const Ad={};T&2&&(Ad.$$scope={dirty:T,ctx:o}),$n.$set(Ad);const Nd={};T&2&&(Nd.$$scope={dirty:T,ctx:o}),Rn.$set(Nd);const Sd={};T&2&&(Sd.$$scope={dirty:T,ctx:o}),En.$set(Sd);const Id={};T&2&&(Id.$$scope={dirty:T,ctx:o}),Bn.$set(Id);const Wd={};T&2&&(Wd.$$scope={dirty:T,ctx:o}),zn.$set(Wd);const Yr={};T&2&&(Yr.$$scope={dirty:T,ctx:o}),qn.$set(Yr);const Ud={};T&2&&(Ud.$$scope={dirty:T,ctx:o}),Cn.$set(Ud);const Hd={};T&2&&(Hd.$$scope={dirty:T,ctx:o}),xn.$set(Hd);const Qd={};T&2&&(Qd.$$scope={dirty:T,ctx:o}),Ln.$set(Qd);const Zr={};T&2&&(Zr.$$scope={dirty:T,ctx:o}),Pn.$set(Zr);const Kd={};T&2&&(Kd.$$scope={dirty:T,ctx:o}),On.$set(Kd);const Vd={};T&2&&(Vd.$$scope={dirty:T,ctx:o}),Dn.$set(Vd)},i(o){Ec||($(l.$$.fragment,o),$(ne.$$.fragment,o),$(re.$$.fragment,o),$(ve.$$.fragment,o),$(wo.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(es.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(ls.$$.fragment,o),$(zo.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(fs.$$.fragment,o),$(_s.$$.fragment,o),$(xo.$$.fragment,o),$(ks.$$.fragment,o),$(bs.$$.fragment,o),$(Ts.$$.fragment,o),$(Fs.$$.fragment,o),$(Lo.$$.fragment,o),$(Po.$$.fragment,o),$(Rs.$$.fragment,o),$(Es.$$.fragment,o),$(Ms.$$.fragment,o),$(Do.$$.fragment,o),$(Ao.$$.fragment,o),$(zs.$$.fragment,o),$(qs.$$.fragment,o),$(xs.$$.fragment,o),$(So.$$.fragment,o),$(Io.$$.fragment,o),$(Wo.$$.fragment,o),$(js.$$.fragment,o),$(Ls.$$.fragment,o),$(Ds.$$.fragment,o),$(Ho.$$.fragment,o),$(Qo.$$.fragment,o),$(Ko.$$.fragment,o),$(Vo.$$.fragment,o),$(Jo.$$.fragment,o),$(As.$$.fragment,o),$(Ns.$$.fragment,o),$(Ws.$$.fragment,o),$(Xo.$$.fragment,o),$(Yo.$$.fragment,o),$(Us.$$.fragment,o),$(Hs.$$.fragment,o),$(Vs.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(Js.$$.fragment,o),$(Gs.$$.fragment,o),$(Zs.$$.fragment,o),$(sn.$$.fragment,o),$(rn.$$.fragment,o),$(an.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(dn.$$.fragment,o),$(rr.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(ar.$$.fragment,o),$(ir.$$.fragment,o),$(hn.$$.fragment,o),$(mr.$$.fragment,o),$(un.$$.fragment,o),$(fn.$$.fragment,o),$(gn.$$.fragment,o),$(hr.$$.fragment,o),$(ur.$$.fragment,o),$(kn.$$.fragment,o),$(br.$$.fragment,o),$(bn.$$.fragment,o),$(wr.$$.fragment,o),$($r.$$.fragment,o),$(vn.$$.fragment,o),$(Br.$$.fragment,o),$(yn.$$.fragment,o),$(wn.$$.fragment,o),$($n.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$(Rn.$$.fragment,o),$(jr.$$.fragment,o),$(En.$$.fragment,o),$(Bn.$$.fragment,o),$(Lr.$$.fragment,o),$(Pr.$$.fragment,o),$(zn.$$.fragment,o),$(Nr.$$.fragment,o),$(qn.$$.fragment,o),$(Cn.$$.fragment,o),$(xn.$$.fragment,o),$(Sr.$$.fragment,o),$(Ir.$$.fragment,o),$(Ln.$$.fragment,o),$(Qr.$$.fragment,o),$(Pn.$$.fragment,o),$(On.$$.fragment,o),$(Dn.$$.fragment,o),Ec=!0)},o(o){F(l.$$.fragment,o),F(ne.$$.fragment,o),F(re.$$.fragment,o),F(ve.$$.fragment,o),F(wo.$$.fragment,o),F(Xn.$$.fragment,o),F(Yn.$$.fragment,o),F(Zn.$$.fragment,o),F(es.$$.fragment,o),F(ss.$$.fragment,o),F(as.$$.fragment,o),F(ls.$$.fragment,o),F(zo.$$.fragment,o),F(ds.$$.fragment,o),F(cs.$$.fragment,o),F(ps.$$.fragment,o),F(hs.$$.fragment,o),F(fs.$$.fragment,o),F(_s.$$.fragment,o),F(xo.$$.fragment,o),F(ks.$$.fragment,o),F(bs.$$.fragment,o),F(Ts.$$.fragment,o),F(Fs.$$.fragment,o),F(Lo.$$.fragment,o),F(Po.$$.fragment,o),F(Rs.$$.fragment,o),F(Es.$$.fragment,o),F(Ms.$$.fragment,o),F(Do.$$.fragment,o),F(Ao.$$.fragment,o),F(zs.$$.fragment,o),F(qs.$$.fragment,o),F(xs.$$.fragment,o),F(So.$$.fragment,o),F(Io.$$.fragment,o),F(Wo.$$.fragment,o),F(js.$$.fragment,o),F(Ls.$$.fragment,o),F(Ds.$$.fragment,o),F(Ho.$$.fragment,o),F(Qo.$$.fragment,o),F(Ko.$$.fragment,o),F(Vo.$$.fragment,o),F(Jo.$$.fragment,o),F(As.$$.fragment,o),F(Ns.$$.fragment,o),F(Ws.$$.fragment,o),F(Xo.$$.fragment,o),F(Yo.$$.fragment,o),F(Us.$$.fragment,o),F(Hs.$$.fragment,o),F(Vs.$$.fragment,o),F(en.$$.fragment,o),F(tn.$$.fragment,o),F(on.$$.fragment,o),F(Js.$$.fragment,o),F(Gs.$$.fragment,o),F(Zs.$$.fragment,o),F(sn.$$.fragment,o),F(rn.$$.fragment,o),F(an.$$.fragment,o),F(er.$$.fragment,o),F(tr.$$.fragment,o),F(dn.$$.fragment,o),F(rr.$$.fragment,o),F(cn.$$.fragment,o),F(pn.$$.fragment,o),F(ar.$$.fragment,o),F(ir.$$.fragment,o),F(hn.$$.fragment,o),F(mr.$$.fragment,o),F(un.$$.fragment,o),F(fn.$$.fragment,o),F(gn.$$.fragment,o),F(hr.$$.fragment,o),F(ur.$$.fragment,o),F(kn.$$.fragment,o),F(br.$$.fragment,o),F(bn.$$.fragment,o),F(wr.$$.fragment,o),F($r.$$.fragment,o),F(vn.$$.fragment,o),F(Br.$$.fragment,o),F(yn.$$.fragment,o),F(wn.$$.fragment,o),F($n.$$.fragment,o),F(Mr.$$.fragment,o),F(zr.$$.fragment,o),F(Rn.$$.fragment,o),F(jr.$$.fragment,o),F(En.$$.fragment,o),F(Bn.$$.fragment,o),F(Lr.$$.fragment,o),F(Pr.$$.fragment,o),F(zn.$$.fragment,o),F(Nr.$$.fragment,o),F(qn.$$.fragment,o),F(Cn.$$.fragment,o),F(xn.$$.fragment,o),F(Sr.$$.fragment,o),F(Ir.$$.fragment,o),F(Ln.$$.fragment,o),F(Qr.$$.fragment,o),F(Pn.$$.fragment,o),F(On.$$.fragment,o),F(Dn.$$.fragment,o),Ec=!1},d(o){t(d),o&&t(g),o&&t(c),R(l),o&&t(X),o&&t(z),R(ne),o&&t(pe),o&&t(J),o&&t(x),o&&t(ae),o&&t(me),o&&t(ie),o&&t(he),o&&t(C),o&&t(W),o&&t(le),o&&t(U),o&&t(ee),R(re),o&&t(B),o&&t(P),R(ve),R(wo),R(Xn),R(Yn),o&&t(Jd),o&&t(Nt),R(Zn),o&&t(Gd),o&&t(Le),R(es),R(ss),R(as),R(ls),R(zo),R(ds),o&&t(Xd),o&&t(It),R(cs),o&&t(Yd),o&&t(De),R(ps),R(hs),R(fs),R(_s),R(xo),R(ks),o&&t(Zd),o&&t(Wt),R(bs),o&&t(ec),o&&t(Je),R(Ts),R(Fs),R(Lo),R(Po),o&&t(tc),o&&t(Ht),R(Rs),o&&t(oc),o&&t(Et),R(Es),R(Ms),R(Do),R(Ao),o&&t(nc),o&&t(Vt),R(zs),o&&t(sc),o&&t(Bt),R(qs),R(xs),R(So),R(Io),R(Wo),o&&t(rc),o&&t(Xt),R(js),o&&t(ac),o&&t(it),R(Ls),R(Ds),R(Ho),R(Qo),R(Ko),R(Vo),R(Jo),o&&t(ic),o&&t(Zt),R(As),o&&t(lc),o&&t(lt),R(Ns),R(Ws),R(Xo),R(Yo),o&&t(dc),o&&t(to),R(Us),o&&t(cc),o&&t(dt),R(Hs),R(Vs),R(en),R(tn),R(on),o&&t(pc),o&&t(no),R(Js),o&&t(mc),o&&t(ct),R(Gs),R(Zs),R(sn),R(rn),R(an),o&&t(hc),o&&t(ao),R(er),o&&t(uc),o&&t(Ne),R(tr),R(dn),R(rr),R(cn),R(pn),o&&t(fc),o&&t(lo),R(ar),o&&t(gc),o&&t(Se),R(ir),R(hn),R(mr),R(un),R(fn),R(gn),o&&t(_c),o&&t(po),R(hr),o&&t(kc),o&&t(Ie),R(ur),R(kn),R(br),R(bn),o&&t(bc),o&&t(mo),R(wr),o&&t(Tc),o&&t(We),R($r),R(vn),R(Br),R(yn),R(wn),R($n),o&&t(vc),o&&t(uo),R(Mr),o&&t(yc),o&&t(Ue),R(zr),R(Rn),R(jr),R(En),R(Bn),o&&t(wc),o&&t(go),R(Lr),o&&t($c),o&&t(He),R(Pr),R(zn),R(Nr),R(qn),R(Cn),R(xn),o&&t(Fc),o&&t(ko),R(Sr),o&&t(Rc),o&&t(Qe),R(Ir),R(Ln),R(Qr),R(Pn),R(On),R(Dn)}}}const Uw={local:"rembert",sections:[{local:"overview",title:"Overview"},{local:"transformers.RemBertConfig",title:"RemBertConfig"},{local:"transformers.RemBertTokenizer",title:"RemBertTokenizer"},{local:"transformers.RemBertTokenizerFast",title:"RemBertTokenizerFast"},{local:"transformers.RemBertModel",title:"RemBertModel"},{local:"transformers.RemBertForCausalLM",title:"RemBertForCausalLM"},{local:"transformers.RemBertForMaskedLM",title:"RemBertForMaskedLM"},{local:"transformers.RemBertForSequenceClassification",title:"RemBertForSequenceClassification"},{local:"transformers.RemBertForMultipleChoice",title:"RemBertForMultipleChoice"},{local:"transformers.RemBertForTokenClassification",title:"RemBertForTokenClassification"},{local:"transformers.RemBertForQuestionAnswering",title:"RemBertForQuestionAnswering"},{local:"transformers.TFRemBertModel",title:"TFRemBertModel"},{local:"transformers.TFRemBertForMaskedLM",title:"TFRemBertForMaskedLM"},{local:"transformers.TFRemBertForCausalLM",title:"TFRemBertForCausalLM"},{local:"transformers.TFRemBertForSequenceClassification",title:"TFRemBertForSequenceClassification"},{local:"transformers.TFRemBertForMultipleChoice",title:"TFRemBertForMultipleChoice"},{local:"transformers.TFRemBertForTokenClassification",title:"TFRemBertForTokenClassification"},{local:"transformers.TFRemBertForQuestionAnswering",title:"TFRemBertForQuestionAnswering"}],title:"RemBERT"};function Hw(E){return Jy(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Yw extends Hy{constructor(d){super();Qy(this,d,Hw,Ww,Ky,{})}}export{Yw as default,Uw as metadata};
