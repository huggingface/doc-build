import{S as Zv,i as ey,s as ty,e as r,k as m,w as v,t as n,M as oy,c as a,d as t,m as h,a as i,x as y,h as s,b as T,G as e,g as _,y as w,q as $,o as F,B as R,v as ny,L as $e}from"../../chunks/vendor-hf-doc-builder.js";import{T as xe}from"../../chunks/Tip-hf-doc-builder.js";import{D as Y}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Fe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Pe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as we}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function sy(B){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertModel, RemBertConfig

# Initializing a RemBERT rembert style configuration
configuration = RemBertConfig()

# Initializing a model from the rembert style configuration
model = RemBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertModel, RemBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a RemBERT rembert style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = RemBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the rembert style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function ry(B){let d,g,c,p,k;return p=new Fe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("sequence pair mask has the following format:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"sequence pair mask has the following format:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function ay(B){let d,g,c,p,k;return p=new Fe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("sequence pair mask has the following format:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"sequence pair mask has the following format:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function iy(B){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function ly(B){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertModel
import torch

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = RemBertModel.from_pretrained("google/rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertModel.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function dy(B){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function cy(B){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForCausalLM, RemBertConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function py(B){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function my(B){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForMaskedLM
import torch

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = RemBertForMaskedLM.from_pretrained("google/rembert")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function hy(B){let d,g;return d=new Fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function uy(B){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function fy(B){let d,g,c,p,k;return p=new Fe({props:{code:`import torch
from transformers import RemBertTokenizer, RemBertForSequenceClassification

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = RemBertForSequenceClassification.from_pretrained("google/rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example of single-label classification:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example of single-label classification:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function gy(B){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RemBertForSequenceClassification.from_pretrained("google/rembert", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function _y(B){let d,g,c,p,k;return p=new Fe({props:{code:`import torch
from transformers import RemBertTokenizer, RemBertForSequenceClassification

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = RemBertForSequenceClassification.from_pretrained("google/rembert", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example of multi-label classification:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example of multi-label classification:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function ky(B){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RemBertForSequenceClassification.from_pretrained(
    "google/rembert", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/rembert&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function by(B){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Ty(B){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForMultipleChoice
import torch

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = RemBertForMultipleChoice.from_pretrained("google/rembert")

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function vy(B){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function yy(B){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForTokenClassification
import torch

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = RemBertForTokenClassification.from_pretrained("google/rembert")

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

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
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function wy(B){let d,g;return d=new Fe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function $y(B){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Fy(B){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForQuestionAnswering
import torch

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = RemBertForQuestionAnswering.from_pretrained("google/rembert")

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Ry(B){let d,g;return d=new Fe({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function By(B){let d,g,c,p,k,l,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,P,se,Z,q,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),P=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(f),p=a(f,"UL",{});var A=i(p);k=a(A,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(A),M=a(A,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),A.forEach(t),X=h(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Be=i(N);ne=s(Be,"tf.keras.Model.fit"),Be.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),P=a(f,"P",{});var Ee=i(P);se=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=h(f),q=a(f,"UL",{});var O=i(q);x=a(O,"LI",{});var D=i(x);ae=s(D,"a single Tensor with "),H=a(D,"CODE",{});var Me=i(H);me=s(Me,"input_ids"),Me.forEach(t),ie=s(D," only and nothing else: "),I=a(D,"CODE",{});var ze=i(I);_e=s(ze,"model(inputs_ids)"),ze.forEach(t),D.forEach(t),he=h(O),C=a(O,"LI",{});var V=i(C);ke=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(V,"CODE",{});var Te=i(W);le=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),be=s(V," or "),U=a(V,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),V.forEach(t),oe=h(O),L=a(O,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),O.forEach(t)},m(f,E){_(f,d,E),e(d,g),_(f,c,E),_(f,p,E),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,E),_(f,z,E),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,E),_(f,P,E),e(P,se),_(f,Z,E),_(f,q,E),e(q,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(q,he),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(P),f&&t(Z),f&&t(q)}}}function Ey(B){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function My(B){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertModel
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = TFRemBertModel.from_pretrained("google/rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertModel.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function zy(B){let d,g,c,p,k,l,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,P,se,Z,q,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),P=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(f),p=a(f,"UL",{});var A=i(p);k=a(A,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(A),M=a(A,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),A.forEach(t),X=h(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Be=i(N);ne=s(Be,"tf.keras.Model.fit"),Be.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),P=a(f,"P",{});var Ee=i(P);se=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=h(f),q=a(f,"UL",{});var O=i(q);x=a(O,"LI",{});var D=i(x);ae=s(D,"a single Tensor with "),H=a(D,"CODE",{});var Me=i(H);me=s(Me,"input_ids"),Me.forEach(t),ie=s(D," only and nothing else: "),I=a(D,"CODE",{});var ze=i(I);_e=s(ze,"model(inputs_ids)"),ze.forEach(t),D.forEach(t),he=h(O),C=a(O,"LI",{});var V=i(C);ke=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(V,"CODE",{});var Te=i(W);le=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),be=s(V," or "),U=a(V,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),V.forEach(t),oe=h(O),L=a(O,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),O.forEach(t)},m(f,E){_(f,d,E),e(d,g),_(f,c,E),_(f,p,E),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,E),_(f,z,E),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,E),_(f,P,E),e(P,se),_(f,Z,E),_(f,q,E),e(q,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(q,he),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(P),f&&t(Z),f&&t(q)}}}function qy(B){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Cy(B){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForMaskedLM
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = TFRemBertForMaskedLM.from_pretrained("google/rembert")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function xy(B){let d,g;return d=new Fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function jy(B){let d,g,c,p,k,l,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,P,se,Z,q,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),P=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(f),p=a(f,"UL",{});var A=i(p);k=a(A,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(A),M=a(A,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),A.forEach(t),X=h(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Be=i(N);ne=s(Be,"tf.keras.Model.fit"),Be.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),P=a(f,"P",{});var Ee=i(P);se=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=h(f),q=a(f,"UL",{});var O=i(q);x=a(O,"LI",{});var D=i(x);ae=s(D,"a single Tensor with "),H=a(D,"CODE",{});var Me=i(H);me=s(Me,"input_ids"),Me.forEach(t),ie=s(D," only and nothing else: "),I=a(D,"CODE",{});var ze=i(I);_e=s(ze,"model(inputs_ids)"),ze.forEach(t),D.forEach(t),he=h(O),C=a(O,"LI",{});var V=i(C);ke=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(V,"CODE",{});var Te=i(W);le=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),be=s(V," or "),U=a(V,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),V.forEach(t),oe=h(O),L=a(O,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),O.forEach(t)},m(f,E){_(f,d,E),e(d,g),_(f,c,E),_(f,p,E),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,E),_(f,z,E),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,E),_(f,P,E),e(P,se),_(f,Z,E),_(f,q,E),e(q,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(q,he),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(P),f&&t(Z),f&&t(q)}}}function Ly(B){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForCausalLM
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = TFRemBertForCausalLM.from_pretrained("google/rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Py(B){let d,g,c,p,k,l,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,P,se,Z,q,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),P=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(f),p=a(f,"UL",{});var A=i(p);k=a(A,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(A),M=a(A,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),A.forEach(t),X=h(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Be=i(N);ne=s(Be,"tf.keras.Model.fit"),Be.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),P=a(f,"P",{});var Ee=i(P);se=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=h(f),q=a(f,"UL",{});var O=i(q);x=a(O,"LI",{});var D=i(x);ae=s(D,"a single Tensor with "),H=a(D,"CODE",{});var Me=i(H);me=s(Me,"input_ids"),Me.forEach(t),ie=s(D," only and nothing else: "),I=a(D,"CODE",{});var ze=i(I);_e=s(ze,"model(inputs_ids)"),ze.forEach(t),D.forEach(t),he=h(O),C=a(O,"LI",{});var V=i(C);ke=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(V,"CODE",{});var Te=i(W);le=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),be=s(V," or "),U=a(V,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),V.forEach(t),oe=h(O),L=a(O,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),O.forEach(t)},m(f,E){_(f,d,E),e(d,g),_(f,c,E),_(f,p,E),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,E),_(f,z,E),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,E),_(f,P,E),e(P,se),_(f,Z,E),_(f,q,E),e(q,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(q,he),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(P),f&&t(Z),f&&t(q)}}}function Oy(B){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Dy(B){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForSequenceClassification
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = TFRemBertForSequenceClassification.from_pretrained("google/rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Ay(B){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFRemBertForSequenceClassification.from_pretrained("google/rembert", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function Ny(B){let d,g,c,p,k,l,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,P,se,Z,q,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),P=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(f),p=a(f,"UL",{});var A=i(p);k=a(A,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(A),M=a(A,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),A.forEach(t),X=h(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Be=i(N);ne=s(Be,"tf.keras.Model.fit"),Be.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),P=a(f,"P",{});var Ee=i(P);se=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=h(f),q=a(f,"UL",{});var O=i(q);x=a(O,"LI",{});var D=i(x);ae=s(D,"a single Tensor with "),H=a(D,"CODE",{});var Me=i(H);me=s(Me,"input_ids"),Me.forEach(t),ie=s(D," only and nothing else: "),I=a(D,"CODE",{});var ze=i(I);_e=s(ze,"model(inputs_ids)"),ze.forEach(t),D.forEach(t),he=h(O),C=a(O,"LI",{});var V=i(C);ke=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(V,"CODE",{});var Te=i(W);le=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),be=s(V," or "),U=a(V,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),V.forEach(t),oe=h(O),L=a(O,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),O.forEach(t)},m(f,E){_(f,d,E),e(d,g),_(f,c,E),_(f,p,E),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,E),_(f,z,E),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,E),_(f,P,E),e(P,se),_(f,Z,E),_(f,q,E),e(q,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(q,he),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(P),f&&t(Z),f&&t(q)}}}function Sy(B){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Iy(B){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForMultipleChoice
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = TFRemBertForMultipleChoice.from_pretrained("google/rembert")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Wy(B){let d,g,c,p,k,l,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,P,se,Z,q,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),P=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(f),p=a(f,"UL",{});var A=i(p);k=a(A,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(A),M=a(A,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),A.forEach(t),X=h(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Be=i(N);ne=s(Be,"tf.keras.Model.fit"),Be.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),P=a(f,"P",{});var Ee=i(P);se=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=h(f),q=a(f,"UL",{});var O=i(q);x=a(O,"LI",{});var D=i(x);ae=s(D,"a single Tensor with "),H=a(D,"CODE",{});var Me=i(H);me=s(Me,"input_ids"),Me.forEach(t),ie=s(D," only and nothing else: "),I=a(D,"CODE",{});var ze=i(I);_e=s(ze,"model(inputs_ids)"),ze.forEach(t),D.forEach(t),he=h(O),C=a(O,"LI",{});var V=i(C);ke=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(V,"CODE",{});var Te=i(W);le=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),be=s(V," or "),U=a(V,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),V.forEach(t),oe=h(O),L=a(O,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),O.forEach(t)},m(f,E){_(f,d,E),e(d,g),_(f,c,E),_(f,p,E),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,E),_(f,z,E),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,E),_(f,P,E),e(P,se),_(f,Z,E),_(f,q,E),e(q,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(q,he),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(P),f&&t(Z),f&&t(q)}}}function Uy(B){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Hy(B){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForTokenClassification
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = TFRemBertForTokenClassification.from_pretrained("google/rembert")

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

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
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Qy(B){let d,g;return d=new Fe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function Vy(B){let d,g,c,p,k,l,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,P,se,Z,q,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),k=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=m(),P=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),me=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),he=m(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=m(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(f),p=a(f,"UL",{});var A=i(p);k=a(A,"LI",{});var ve=i(k);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(A),M=a(A,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),A.forEach(t),X=h(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Be=i(N);ne=s(Be,"tf.keras.Model.fit"),Be.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=h(f),P=a(f,"P",{});var Ee=i(P);se=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=h(f),q=a(f,"UL",{});var O=i(q);x=a(O,"LI",{});var D=i(x);ae=s(D,"a single Tensor with "),H=a(D,"CODE",{});var Me=i(H);me=s(Me,"input_ids"),Me.forEach(t),ie=s(D," only and nothing else: "),I=a(D,"CODE",{});var ze=i(I);_e=s(ze,"model(inputs_ids)"),ze.forEach(t),D.forEach(t),he=h(O),C=a(O,"LI",{});var V=i(C);ke=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(V,"CODE",{});var Te=i(W);le=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),be=s(V," or "),U=a(V,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),V.forEach(t),oe=h(O),L=a(O,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),O.forEach(t)},m(f,E){_(f,d,E),e(d,g),_(f,c,E),_(f,p,E),e(p,k),e(k,l),e(p,u),e(p,M),e(M,ue),_(f,X,E),_(f,z,E),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,E),_(f,P,E),e(P,se),_(f,Z,E),_(f,q,E),e(q,x),e(x,ae),e(x,H),e(H,me),e(x,ie),e(x,I),e(I,_e),e(q,he),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(P),f&&t(Z),f&&t(q)}}}function Ky(B){let d,g,c,p,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Jy(B){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForQuestionAnswering
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = TFRemBertForQuestionAnswering.from_pretrained("google/rembert")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),y(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,g),_(l,c,u),w(p,l,u),k=!0},p:$e,i(l){k||($(p.$$.fragment,l),k=!0)},o(l){F(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),R(p,l)}}}function Gy(B){let d,g;return d=new Fe({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:$e,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function Xy(B){let d,g,c,p,k,l,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,P,se,Z,q,x,ae,H,me,ie,I,_e,he,C,ke,W,le,be,U,ee,oe,L,re,Q,ce,f,E,A,ve,Re,j,Be,ye,Ee,O,D,Me,ze,V,Te,qe,de,Ce,Kc,Yr,Jc,Gc,Xc,Fo,Rd,St,Ro,Ga,Kn,Yc,Xa,Zc,Bd,je,Jn,ep,Gn,tp,Xn,op,np,sp,Yn,rp,Zr,ap,ip,lp,zt,Zn,dp,Ya,cp,pp,es,ea,mp,Za,hp,up,ta,fp,ei,gp,_p,Bo,ts,kp,os,bp,ti,Tp,vp,yp,ct,ns,wp,oi,$p,Fp,Eo,Rp,It,Bp,ni,Ep,Mp,si,zp,qp,Cp,oa,ss,Ed,Wt,Mo,ri,rs,xp,ai,jp,Md,De,as,Lp,Ft,Pp,ii,Op,Dp,is,Ap,Np,na,Sp,Ip,Wp,qt,ls,Up,li,Hp,Qp,ds,sa,Vp,di,Kp,Jp,ra,Gp,ci,Xp,Yp,zo,cs,Zp,ps,em,pi,tm,om,nm,pt,ms,sm,mi,rm,am,qo,im,hi,lm,dm,aa,hs,zd,Ut,Co,ui,us,cm,fi,pm,qd,Je,fs,mm,gs,hm,_s,um,fm,gm,ks,_m,bs,km,bm,Tm,Ae,vm,gi,ym,wm,_i,$m,Fm,ki,Rm,Bm,bi,Em,Mm,Ti,zm,qm,vi,Cm,xm,jm,mt,Ts,Lm,Ht,Pm,ia,Om,Dm,yi,Am,Nm,Sm,xo,Im,jo,Cd,Qt,Lo,wi,vs,Wm,$i,Um,xd,Rt,ys,Hm,Vt,Qm,Fi,Vm,Km,ws,Jm,Gm,Xm,ht,$s,Ym,Kt,Zm,la,eh,th,Ri,oh,nh,sh,Po,rh,Oo,jd,Jt,Do,Bi,Fs,ah,Ei,ih,Ld,Bt,Rs,lh,Gt,dh,Mi,ch,ph,Bs,mh,hh,uh,Ge,Es,fh,Xt,gh,da,_h,kh,zi,bh,Th,vh,Ao,yh,No,wh,So,Pd,Yt,Io,qi,Ms,$h,Ci,Fh,Od,at,zs,Rh,xi,Bh,Eh,qs,Mh,Cs,zh,qh,Ch,Oe,xs,xh,Zt,jh,ca,Lh,Ph,ji,Oh,Dh,Ah,Wo,Nh,Uo,Sh,Ho,Ih,Qo,Wh,Vo,Dd,eo,Ko,Li,js,Uh,Pi,Hh,Ad,it,Ls,Qh,Oi,Vh,Kh,Ps,Jh,Os,Gh,Xh,Yh,ut,Ds,Zh,to,eu,pa,tu,ou,Di,nu,su,ru,Jo,au,Go,Nd,oo,Xo,Ai,As,iu,Ni,lu,Sd,lt,Ns,du,Si,cu,pu,Ss,mu,Is,hu,uu,fu,Xe,Ws,gu,no,_u,ma,ku,bu,Ii,Tu,vu,yu,Yo,wu,Zo,$u,en,Id,so,tn,Wi,Us,Fu,Ui,Ru,Wd,dt,Hs,Bu,ro,Eu,Hi,Mu,zu,Qi,qu,Cu,xu,Qs,ju,Vs,Lu,Pu,Ou,Ye,Ks,Du,ao,Au,ha,Nu,Su,Vi,Iu,Wu,Uu,on,Hu,nn,Qu,sn,Ud,io,rn,Ki,Js,Vu,Ji,Ku,Hd,Ne,Gs,Ju,Gi,Gu,Xu,Xs,Yu,ua,Zu,ef,tf,Ys,of,Zs,nf,sf,rf,an,af,ft,er,lf,lo,df,fa,cf,pf,Xi,mf,hf,uf,ln,ff,dn,Qd,co,cn,Yi,tr,gf,Zi,_f,Vd,Se,or,kf,nr,bf,el,Tf,vf,yf,sr,wf,ga,$f,Ff,Rf,rr,Bf,ar,Ef,Mf,zf,pn,qf,Ze,ir,Cf,po,xf,_a,jf,Lf,tl,Pf,Of,Df,mn,Af,hn,Nf,un,Kd,mo,fn,ol,lr,Sf,nl,If,Jd,Ie,dr,Wf,cr,Uf,sl,Hf,Qf,Vf,pr,Kf,ka,Jf,Gf,Xf,mr,Yf,hr,Zf,eg,tg,gn,og,et,ur,ng,Le,sg,rl,rg,ag,al,ig,lg,il,dg,cg,ll,pg,mg,dl,hg,ug,cl,fg,gg,pl,_g,kg,bg,fr,gr,Tg,ml,vg,yg,wg,_r,$g,hl,Fg,Rg,Bg,K,Eg,ul,Mg,zg,fl,qg,Cg,gl,xg,jg,_l,Lg,Pg,kl,Og,Dg,bl,Ag,Ng,Tl,Sg,Ig,vl,Wg,Ug,yl,Hg,Qg,wl,Vg,Kg,$l,Jg,Gg,Fl,Xg,Yg,Rl,Zg,e_,Bl,t_,o_,El,n_,s_,Ml,r_,a_,zl,i_,l_,ql,d_,c_,Cl,p_,m_,xl,h_,u_,f_,_n,Gd,ho,kn,jl,kr,g_,Ll,__,Xd,We,br,k_,Pl,b_,T_,Tr,v_,ba,y_,w_,$_,vr,F_,yr,R_,B_,E_,bn,M_,tt,wr,z_,uo,q_,Ta,C_,x_,Ol,j_,L_,P_,Tn,O_,vn,D_,yn,Yd,fo,wn,Dl,$r,A_,Al,N_,Zd,Ue,Fr,S_,Nl,I_,W_,Rr,U_,va,H_,Q_,V_,Br,K_,Er,J_,G_,X_,$n,Y_,gt,Mr,Z_,go,ek,ya,tk,ok,Sl,nk,sk,rk,Fn,ak,Rn,ec,_o,Bn,Il,zr,ik,Wl,lk,tc,He,qr,dk,Ul,ck,pk,Cr,mk,wa,hk,uk,fk,xr,gk,jr,_k,kk,bk,En,Tk,ot,Lr,vk,ko,yk,$a,wk,$k,Hl,Fk,Rk,Bk,Mn,Ek,zn,Mk,qn,oc,bo,Cn,Ql,Pr,zk,Vl,qk,nc,Qe,Or,Ck,To,xk,Kl,jk,Lk,Jl,Pk,Ok,Dk,Dr,Ak,Fa,Nk,Sk,Ik,Ar,Wk,Nr,Uk,Hk,Qk,xn,Vk,nt,Sr,Kk,vo,Jk,Ra,Gk,Xk,Gl,Yk,Zk,eb,jn,tb,Ln,ob,Pn,sc;return l=new Pe({}),ne=new Pe({}),re=new Pe({}),ve=new Y({props:{name:"class transformers.RemBertConfig",anchor:"transformers.RemBertConfig",parameters:[{name:"vocab_size",val:" = 250300"},{name:"hidden_size",val:" = 1152"},{name:"num_hidden_layers",val:" = 32"},{name:"num_attention_heads",val:" = 18"},{name:"input_embedding_size",val:" = 256"},{name:"output_embedding_size",val:" = 1664"},{name:"intermediate_size",val:" = 4608"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 312"},{name:"eos_token_id",val:" = 313"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RemBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 250300) &#x2014;
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
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/configuration_rembert.py#L29"}}),Fo=new we({props:{anchor:"transformers.RemBertConfig.example",$$slots:{default:[sy]},$$scope:{ctx:B}}}),Kn=new Pe({}),Jn=new Y({props:{name:"class transformers.RemBertTokenizer",anchor:"transformers.RemBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = True"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert.py#L43"}}),Zn=new Y({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RemBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert.py#L172",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ts=new Y({props:{name:"get_special_tokens_mask",anchor:"transformers.RemBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RemBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert.py#L197",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ns=new Y({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert.py#L228",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Eo=new we({props:{anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[ry]},$$scope:{ctx:B}}}),ss=new Y({props:{name:"save_vocabulary",anchor:"transformers.RemBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert.py#L258"}}),rs=new Pe({}),as=new Y({props:{name:"class transformers.RemBertTokenizerFast",anchor:"transformers.RemBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert_fast.py#L51"}}),ls=new Y({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RemBertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert_fast.py#L144",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cs=new Y({props:{name:"get_special_tokens_mask",anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert_fast.py#L169",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ms=new Y({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert_fast.py#L200",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qo=new we({props:{anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[ay]},$$scope:{ctx:B}}}),hs=new Y({props:{name:"save_vocabulary",anchor:"transformers.RemBertTokenizerFast.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/tokenization_rembert_fast.py#L230"}}),us=new Pe({}),fs=new Y({props:{name:"class transformers.RemBertModel",anchor:"transformers.RemBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RemBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L747"}}),Ts=new Y({props:{name:"forward",anchor:"transformers.RemBertModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),xo=new xe({props:{$$slots:{default:[iy]},$$scope:{ctx:B}}}),jo=new we({props:{anchor:"transformers.RemBertModel.forward.example",$$slots:{default:[ly]},$$scope:{ctx:B}}}),vs=new Pe({}),ys=new Y({props:{name:"class transformers.RemBertForCausalLM",anchor:"transformers.RemBertForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L1020"}}),$s=new Y({props:{name:"forward",anchor:"transformers.RemBertForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Po=new xe({props:{$$slots:{default:[dy]},$$scope:{ctx:B}}}),Oo=new we({props:{anchor:"transformers.RemBertForCausalLM.forward.example",$$slots:{default:[cy]},$$scope:{ctx:B}}}),Fs=new Pe({}),Rs=new Y({props:{name:"class transformers.RemBertForMaskedLM",anchor:"transformers.RemBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L917"}}),Es=new Y({props:{name:"forward",anchor:"transformers.RemBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Ao=new xe({props:{$$slots:{default:[py]},$$scope:{ctx:B}}}),No=new we({props:{anchor:"transformers.RemBertForMaskedLM.forward.example",$$slots:{default:[my]},$$scope:{ctx:B}}}),So=new we({props:{anchor:"transformers.RemBertForMaskedLM.forward.example-2",$$slots:{default:[hy]},$$scope:{ctx:B}}}),Ms=new Pe({}),zs=new Y({props:{name:"class transformers.RemBertForSequenceClassification",anchor:"transformers.RemBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L1173"}}),xs=new Y({props:{name:"forward",anchor:"transformers.RemBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Wo=new xe({props:{$$slots:{default:[uy]},$$scope:{ctx:B}}}),Uo=new we({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example",$$slots:{default:[fy]},$$scope:{ctx:B}}}),Ho=new we({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example-2",$$slots:{default:[gy]},$$scope:{ctx:B}}}),Qo=new we({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example-3",$$slots:{default:[_y]},$$scope:{ctx:B}}}),Vo=new we({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example-4",$$slots:{default:[ky]},$$scope:{ctx:B}}}),js=new Pe({}),Ls=new Y({props:{name:"class transformers.RemBertForMultipleChoice",anchor:"transformers.RemBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L1270"}}),Ds=new Y({props:{name:"forward",anchor:"transformers.RemBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Jo=new xe({props:{$$slots:{default:[by]},$$scope:{ctx:B}}}),Go=new we({props:{anchor:"transformers.RemBertForMultipleChoice.forward.example",$$slots:{default:[Ty]},$$scope:{ctx:B}}}),As=new Pe({}),Ns=new Y({props:{name:"class transformers.RemBertForTokenClassification",anchor:"transformers.RemBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L1362"}}),Ws=new Y({props:{name:"forward",anchor:"transformers.RemBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Yo=new xe({props:{$$slots:{default:[vy]},$$scope:{ctx:B}}}),Zo=new we({props:{anchor:"transformers.RemBertForTokenClassification.forward.example",$$slots:{default:[yy]},$$scope:{ctx:B}}}),en=new we({props:{anchor:"transformers.RemBertForTokenClassification.forward.example-2",$$slots:{default:[wy]},$$scope:{ctx:B}}}),Us=new Pe({}),Hs=new Y({props:{name:"class transformers.RemBertForQuestionAnswering",anchor:"transformers.RemBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_rembert.py#L1441"}}),Ks=new Y({props:{name:"forward",anchor:"transformers.RemBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),on=new xe({props:{$$slots:{default:[$y]},$$scope:{ctx:B}}}),nn=new we({props:{anchor:"transformers.RemBertForQuestionAnswering.forward.example",$$slots:{default:[Fy]},$$scope:{ctx:B}}}),sn=new we({props:{anchor:"transformers.RemBertForQuestionAnswering.forward.example-2",$$slots:{default:[Ry]},$$scope:{ctx:B}}}),Js=new Pe({}),Gs=new Y({props:{name:"class transformers.TFRemBertModel",anchor:"transformers.TFRemBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L931"}}),an=new xe({props:{$$slots:{default:[By]},$$scope:{ctx:B}}}),er=new Y({props:{name:"call",anchor:"transformers.TFRemBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),ln=new xe({props:{$$slots:{default:[Ey]},$$scope:{ctx:B}}}),dn=new we({props:{anchor:"transformers.TFRemBertModel.call.example",$$slots:{default:[My]},$$scope:{ctx:B}}}),tr=new Pe({}),or=new Y({props:{name:"class transformers.TFRemBertForMaskedLM",anchor:"transformers.TFRemBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1024"}}),pn=new xe({props:{$$slots:{default:[zy]},$$scope:{ctx:B}}}),ir=new Y({props:{name:"call",anchor:"transformers.TFRemBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),mn=new xe({props:{$$slots:{default:[qy]},$$scope:{ctx:B}}}),hn=new we({props:{anchor:"transformers.TFRemBertForMaskedLM.call.example",$$slots:{default:[Cy]},$$scope:{ctx:B}}}),un=new we({props:{anchor:"transformers.TFRemBertForMaskedLM.call.example-2",$$slots:{default:[xy]},$$scope:{ctx:B}}}),lr=new Pe({}),dr=new Y({props:{name:"class transformers.TFRemBertForCausalLM",anchor:"transformers.TFRemBertForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1105"}}),gn=new xe({props:{$$slots:{default:[jy]},$$scope:{ctx:B}}}),ur=new Y({props:{name:"call",anchor:"transformers.TFRemBertForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1131",returnDescription:`
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
`}}),_n=new we({props:{anchor:"transformers.TFRemBertForCausalLM.call.example",$$slots:{default:[Ly]},$$scope:{ctx:B}}}),kr=new Pe({}),br=new Y({props:{name:"class transformers.TFRemBertForSequenceClassification",anchor:"transformers.TFRemBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1247"}}),bn=new xe({props:{$$slots:{default:[Py]},$$scope:{ctx:B}}}),wr=new Y({props:{name:"call",anchor:"transformers.TFRemBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),Tn=new xe({props:{$$slots:{default:[Oy]},$$scope:{ctx:B}}}),vn=new we({props:{anchor:"transformers.TFRemBertForSequenceClassification.call.example",$$slots:{default:[Dy]},$$scope:{ctx:B}}}),yn=new we({props:{anchor:"transformers.TFRemBertForSequenceClassification.call.example-2",$$slots:{default:[Ay]},$$scope:{ctx:B}}}),$r=new Pe({}),Fr=new Y({props:{name:"class transformers.TFRemBertForMultipleChoice",anchor:"transformers.TFRemBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1331"}}),$n=new xe({props:{$$slots:{default:[Ny]},$$scope:{ctx:B}}}),Mr=new Y({props:{name:"call",anchor:"transformers.TFRemBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),Fn=new xe({props:{$$slots:{default:[Sy]},$$scope:{ctx:B}}}),Rn=new we({props:{anchor:"transformers.TFRemBertForMultipleChoice.call.example",$$slots:{default:[Iy]},$$scope:{ctx:B}}}),zr=new Pe({}),qr=new Y({props:{name:"class transformers.TFRemBertForTokenClassification",anchor:"transformers.TFRemBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1458"}}),En=new xe({props:{$$slots:{default:[Wy]},$$scope:{ctx:B}}}),Lr=new Y({props:{name:"call",anchor:"transformers.TFRemBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),Mn=new xe({props:{$$slots:{default:[Uy]},$$scope:{ctx:B}}}),zn=new we({props:{anchor:"transformers.TFRemBertForTokenClassification.call.example",$$slots:{default:[Hy]},$$scope:{ctx:B}}}),qn=new we({props:{anchor:"transformers.TFRemBertForTokenClassification.call.example-2",$$slots:{default:[Qy]},$$scope:{ctx:B}}}),Pr=new Pe({}),Or=new Y({props:{name:"class transformers.TFRemBertForQuestionAnswering",anchor:"transformers.TFRemBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/rembert/modeling_tf_rembert.py#L1538"}}),xn=new xe({props:{$$slots:{default:[Vy]},$$scope:{ctx:B}}}),Sr=new Y({props:{name:"call",anchor:"transformers.TFRemBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),jn=new xe({props:{$$slots:{default:[Ky]},$$scope:{ctx:B}}}),Ln=new we({props:{anchor:"transformers.TFRemBertForQuestionAnswering.call.example",$$slots:{default:[Jy]},$$scope:{ctx:B}}}),Pn=new we({props:{anchor:"transformers.TFRemBertForQuestionAnswering.call.example-2",$$slots:{default:[Gy]},$$scope:{ctx:B}}}),{c(){d=r("meta"),g=m(),c=r("h1"),p=r("a"),k=r("span"),v(l.$$.fragment),u=m(),M=r("span"),ue=n("RemBERT"),X=m(),z=r("h2"),te=r("a"),N=r("span"),v(ne.$$.fragment),fe=m(),S=r("span"),ge=n("Overview"),pe=m(),J=r("p"),P=n("The RemBERT model was proposed in "),se=r("a"),Z=n("Rethinking Embedding Coupling in Pre-trained Language Models"),q=n(" by Hyung Won Chung, Thibault F\xE9vry, Henry Tsai, Melvin Johnson, Sebastian Ruder."),x=m(),ae=r("p"),H=n("The abstract from the paper is the following:"),me=m(),ie=r("p"),I=r("em"),_e=n(`We re-evaluate the standard practice of sharing weights between input and output embeddings in state-of-the-art
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
also similar to the Albert one rather than the BERT one.`),U=m(),ee=r("h2"),oe=r("a"),L=r("span"),v(re.$$.fragment),Q=m(),ce=r("span"),f=n("RemBertConfig"),E=m(),A=r("div"),v(ve.$$.fragment),Re=m(),j=r("p"),Be=n("This is the configuration class to store the configuration of a "),ye=r("a"),Ee=n("RemBertModel"),O=n(`. It is used to instantiate an
RemBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RemBERT
`),D=r("a"),Me=n("google/rembert"),ze=n(" architecture."),V=m(),Te=r("p"),qe=n("Configuration objects inherit from "),de=r("a"),Ce=n("PretrainedConfig"),Kc=n(` and can be used to control the model outputs. Read the
documentation from `),Yr=r("a"),Jc=n("PretrainedConfig"),Gc=n(" for more information."),Xc=m(),v(Fo.$$.fragment),Rd=m(),St=r("h2"),Ro=r("a"),Ga=r("span"),v(Kn.$$.fragment),Yc=m(),Xa=r("span"),Zc=n("RemBertTokenizer"),Bd=m(),je=r("div"),v(Jn.$$.fragment),ep=m(),Gn=r("p"),tp=n("Construct a RemBERT tokenizer. Based on "),Xn=r("a"),op=n("SentencePiece"),np=n("."),sp=m(),Yn=r("p"),rp=n("This tokenizer inherits from "),Zr=r("a"),ap=n("PreTrainedTokenizer"),ip=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),lp=m(),zt=r("div"),v(Zn.$$.fragment),dp=m(),Ya=r("p"),cp=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A REMBERT sequence has the following format:`),pp=m(),es=r("ul"),ea=r("li"),mp=n("single sequence: "),Za=r("code"),hp=n("[CLS] X [SEP]"),up=m(),ta=r("li"),fp=n("pair of sequences: "),ei=r("code"),gp=n("[CLS] A [SEP] B [SEP]"),_p=m(),Bo=r("div"),v(ts.$$.fragment),kp=m(),os=r("p"),bp=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ti=r("code"),Tp=n("prepare_for_model"),vp=n(" method."),yp=m(),ct=r("div"),v(ns.$$.fragment),wp=m(),oi=r("p"),$p=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT"),Fp=m(),v(Eo.$$.fragment),Rp=m(),It=r("p"),Bp=n("If "),ni=r("code"),Ep=n("token_ids_1"),Mp=n(" is "),si=r("code"),zp=n("None"),qp=n(", this method only returns the first portion of the mask (0s)."),Cp=m(),oa=r("div"),v(ss.$$.fragment),Ed=m(),Wt=r("h2"),Mo=r("a"),ri=r("span"),v(rs.$$.fragment),xp=m(),ai=r("span"),jp=n("RemBertTokenizerFast"),Md=m(),De=r("div"),v(as.$$.fragment),Lp=m(),Ft=r("p"),Pp=n("Construct a \u201Cfast\u201D RemBert tokenizer (backed by HuggingFace\u2019s "),ii=r("em"),Op=n("tokenizers"),Dp=n(` library). Based on
`),is=r("a"),Ap=n("Unigram"),Np=n(`. This
tokenizer inherits from `),na=r("a"),Sp=n("PreTrainedTokenizerFast"),Ip=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Wp=m(),qt=r("div"),v(ls.$$.fragment),Up=m(),li=r("p"),Hp=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RemBERT sequence has the following format:`),Qp=m(),ds=r("ul"),sa=r("li"),Vp=n("single sequence: "),di=r("code"),Kp=n("[CLS] X [SEP]"),Jp=m(),ra=r("li"),Gp=n("pair of sequences: "),ci=r("code"),Xp=n("[CLS] A [SEP] B [SEP]"),Yp=m(),zo=r("div"),v(cs.$$.fragment),Zp=m(),ps=r("p"),em=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),pi=r("code"),tm=n("prepare_for_model"),om=n(" method."),nm=m(),pt=r("div"),v(ms.$$.fragment),sm=m(),mi=r("p"),rm=n("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT"),am=m(),v(qo.$$.fragment),im=m(),hi=r("p"),lm=n("if token_ids_1 is None, only returns the first portion of the mask (0s)."),dm=m(),aa=r("div"),v(hs.$$.fragment),zd=m(),Ut=r("h2"),Co=r("a"),ui=r("span"),v(us.$$.fragment),cm=m(),fi=r("span"),pm=n("RemBertModel"),qd=m(),Je=r("div"),v(fs.$$.fragment),mm=m(),gs=r("p"),hm=n(`The bare RemBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),_s=r("a"),um=n("torch.nn.Module"),fm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gm=m(),ks=r("p"),_m=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),bs=r("a"),km=n(`Attention is
all you need`),bm=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Tm=m(),Ae=r("p"),vm=n("To behave as an decoder the model needs to be initialized with the "),gi=r("code"),ym=n("is_decoder"),wm=n(` argument of the configuration set
to `),_i=r("code"),$m=n("True"),Fm=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),ki=r("code"),Rm=n("is_decoder"),Bm=n(` argument and
`),bi=r("code"),Em=n("add_cross_attention"),Mm=n(" set to "),Ti=r("code"),zm=n("True"),qm=n("; an "),vi=r("code"),Cm=n("encoder_hidden_states"),xm=n(" is then expected as an input to the forward pass."),jm=m(),mt=r("div"),v(Ts.$$.fragment),Lm=m(),Ht=r("p"),Pm=n("The "),ia=r("a"),Om=n("RemBertModel"),Dm=n(" forward method, overrides the "),yi=r("code"),Am=n("__call__"),Nm=n(" special method."),Sm=m(),v(xo.$$.fragment),Im=m(),v(jo.$$.fragment),Cd=m(),Qt=r("h2"),Lo=r("a"),wi=r("span"),v(vs.$$.fragment),Wm=m(),$i=r("span"),Um=n("RemBertForCausalLM"),xd=m(),Rt=r("div"),v(ys.$$.fragment),Hm=m(),Vt=r("p"),Qm=n("RemBERT Model with a "),Fi=r("code"),Vm=n("language modeling"),Km=n(` head on top for CLM fine-tuning.
This model is a PyTorch `),ws=r("a"),Jm=n("torch.nn.Module"),Gm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xm=m(),ht=r("div"),v($s.$$.fragment),Ym=m(),Kt=r("p"),Zm=n("The "),la=r("a"),eh=n("RemBertForCausalLM"),th=n(" forward method, overrides the "),Ri=r("code"),oh=n("__call__"),nh=n(" special method."),sh=m(),v(Po.$$.fragment),rh=m(),v(Oo.$$.fragment),jd=m(),Jt=r("h2"),Do=r("a"),Bi=r("span"),v(Fs.$$.fragment),ah=m(),Ei=r("span"),ih=n("RemBertForMaskedLM"),Ld=m(),Bt=r("div"),v(Rs.$$.fragment),lh=m(),Gt=r("p"),dh=n("RemBERT Model with a "),Mi=r("code"),ch=n("language modeling"),ph=n(` head on top.
This model is a PyTorch `),Bs=r("a"),mh=n("torch.nn.Module"),hh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),uh=m(),Ge=r("div"),v(Es.$$.fragment),fh=m(),Xt=r("p"),gh=n("The "),da=r("a"),_h=n("RemBertForMaskedLM"),kh=n(" forward method, overrides the "),zi=r("code"),bh=n("__call__"),Th=n(" special method."),vh=m(),v(Ao.$$.fragment),yh=m(),v(No.$$.fragment),wh=m(),v(So.$$.fragment),Pd=m(),Yt=r("h2"),Io=r("a"),qi=r("span"),v(Ms.$$.fragment),$h=m(),Ci=r("span"),Fh=n("RemBertForSequenceClassification"),Od=m(),at=r("div"),v(zs.$$.fragment),Rh=m(),xi=r("p"),Bh=n(`RemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Eh=m(),qs=r("p"),Mh=n("This model is a PyTorch "),Cs=r("a"),zh=n("torch.nn.Module"),qh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ch=m(),Oe=r("div"),v(xs.$$.fragment),xh=m(),Zt=r("p"),jh=n("The "),ca=r("a"),Lh=n("RemBertForSequenceClassification"),Ph=n(" forward method, overrides the "),ji=r("code"),Oh=n("__call__"),Dh=n(" special method."),Ah=m(),v(Wo.$$.fragment),Nh=m(),v(Uo.$$.fragment),Sh=m(),v(Ho.$$.fragment),Ih=m(),v(Qo.$$.fragment),Wh=m(),v(Vo.$$.fragment),Dd=m(),eo=r("h2"),Ko=r("a"),Li=r("span"),v(js.$$.fragment),Uh=m(),Pi=r("span"),Hh=n("RemBertForMultipleChoice"),Ad=m(),it=r("div"),v(Ls.$$.fragment),Qh=m(),Oi=r("p"),Vh=n(`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Kh=m(),Ps=r("p"),Jh=n("This model is a PyTorch "),Os=r("a"),Gh=n("torch.nn.Module"),Xh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yh=m(),ut=r("div"),v(Ds.$$.fragment),Zh=m(),to=r("p"),eu=n("The "),pa=r("a"),tu=n("RemBertForMultipleChoice"),ou=n(" forward method, overrides the "),Di=r("code"),nu=n("__call__"),su=n(" special method."),ru=m(),v(Jo.$$.fragment),au=m(),v(Go.$$.fragment),Nd=m(),oo=r("h2"),Xo=r("a"),Ai=r("span"),v(As.$$.fragment),iu=m(),Ni=r("span"),lu=n("RemBertForTokenClassification"),Sd=m(),lt=r("div"),v(Ns.$$.fragment),du=m(),Si=r("p"),cu=n(`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pu=m(),Ss=r("p"),mu=n("This model is a PyTorch "),Is=r("a"),hu=n("torch.nn.Module"),uu=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fu=m(),Xe=r("div"),v(Ws.$$.fragment),gu=m(),no=r("p"),_u=n("The "),ma=r("a"),ku=n("RemBertForTokenClassification"),bu=n(" forward method, overrides the "),Ii=r("code"),Tu=n("__call__"),vu=n(" special method."),yu=m(),v(Yo.$$.fragment),wu=m(),v(Zo.$$.fragment),$u=m(),v(en.$$.fragment),Id=m(),so=r("h2"),tn=r("a"),Wi=r("span"),v(Us.$$.fragment),Fu=m(),Ui=r("span"),Ru=n("RemBertForQuestionAnswering"),Wd=m(),dt=r("div"),v(Hs.$$.fragment),Bu=m(),ro=r("p"),Eu=n(`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Hi=r("code"),Mu=n("span start logits"),zu=n(" and "),Qi=r("code"),qu=n("span end logits"),Cu=n(")."),xu=m(),Qs=r("p"),ju=n("This model is a PyTorch "),Vs=r("a"),Lu=n("torch.nn.Module"),Pu=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ou=m(),Ye=r("div"),v(Ks.$$.fragment),Du=m(),ao=r("p"),Au=n("The "),ha=r("a"),Nu=n("RemBertForQuestionAnswering"),Su=n(" forward method, overrides the "),Vi=r("code"),Iu=n("__call__"),Wu=n(" special method."),Uu=m(),v(on.$$.fragment),Hu=m(),v(nn.$$.fragment),Qu=m(),v(sn.$$.fragment),Ud=m(),io=r("h2"),rn=r("a"),Ki=r("span"),v(Js.$$.fragment),Vu=m(),Ji=r("span"),Ku=n("TFRemBertModel"),Hd=m(),Ne=r("div"),v(Gs.$$.fragment),Ju=m(),Gi=r("p"),Gu=n("The bare RemBERT Model transformer outputing raw hidden-states without any specific head on top."),Xu=m(),Xs=r("p"),Yu=n("This model inherits from "),ua=r("a"),Zu=n("TFPreTrainedModel"),ef=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf=m(),Ys=r("p"),of=n("This model is also a "),Zs=r("a"),nf=n("tf.keras.Model"),sf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rf=m(),v(an.$$.fragment),af=m(),ft=r("div"),v(er.$$.fragment),lf=m(),lo=r("p"),df=n("The "),fa=r("a"),cf=n("TFRemBertModel"),pf=n(" forward method, overrides the "),Xi=r("code"),mf=n("__call__"),hf=n(" special method."),uf=m(),v(ln.$$.fragment),ff=m(),v(dn.$$.fragment),Qd=m(),co=r("h2"),cn=r("a"),Yi=r("span"),v(tr.$$.fragment),gf=m(),Zi=r("span"),_f=n("TFRemBertForMaskedLM"),Vd=m(),Se=r("div"),v(or.$$.fragment),kf=m(),nr=r("p"),bf=n("RemBERT Model with a "),el=r("code"),Tf=n("language modeling"),vf=n(" head on top."),yf=m(),sr=r("p"),wf=n("This model inherits from "),ga=r("a"),$f=n("TFPreTrainedModel"),Ff=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rf=m(),rr=r("p"),Bf=n("This model is also a "),ar=r("a"),Ef=n("tf.keras.Model"),Mf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zf=m(),v(pn.$$.fragment),qf=m(),Ze=r("div"),v(ir.$$.fragment),Cf=m(),po=r("p"),xf=n("The "),_a=r("a"),jf=n("TFRemBertForMaskedLM"),Lf=n(" forward method, overrides the "),tl=r("code"),Pf=n("__call__"),Of=n(" special method."),Df=m(),v(mn.$$.fragment),Af=m(),v(hn.$$.fragment),Nf=m(),v(un.$$.fragment),Kd=m(),mo=r("h2"),fn=r("a"),ol=r("span"),v(lr.$$.fragment),Sf=m(),nl=r("span"),If=n("TFRemBertForCausalLM"),Jd=m(),Ie=r("div"),v(dr.$$.fragment),Wf=m(),cr=r("p"),Uf=n("RemBERT Model with a "),sl=r("code"),Hf=n("language modeling"),Qf=n(" head on top for CLM fine-tuning."),Vf=m(),pr=r("p"),Kf=n("This model inherits from "),ka=r("a"),Jf=n("TFPreTrainedModel"),Gf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xf=m(),mr=r("p"),Yf=n("This model is also a "),hr=r("a"),Zf=n("tf.keras.Model"),eg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tg=m(),v(gn.$$.fragment),og=m(),et=r("div"),v(ur.$$.fragment),ng=m(),Le=r("p"),sg=n("encoder_hidden_states  ("),rl=r("code"),rg=n("tf.Tensor"),ag=n(" of shape "),al=r("code"),ig=n("(batch_size, sequence_length, hidden_size)"),lg=n(", "),il=r("em"),dg=n("optional"),cg=n(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),ll=r("code"),pg=n("tf.Tensor"),mg=n(" of shape "),dl=r("code"),hg=n("(batch_size, sequence_length)"),ug=n(", "),cl=r("em"),fg=n("optional"),gg=n(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),pl=r("code"),_g=n("[0, 1]"),kg=n(":"),bg=m(),fr=r("ul"),gr=r("li"),Tg=n("1 for tokens that are "),ml=r("strong"),vg=n("not masked"),yg=n(","),wg=m(),_r=r("li"),$g=n("0 for tokens that are "),hl=r("strong"),Fg=n("masked"),Rg=n("."),Bg=m(),K=r("p"),Eg=n("past_key_values ("),ul=r("code"),Mg=n("Tuple[Tuple[tf.Tensor]]"),zg=n(" of length "),fl=r("code"),qg=n("config.n_layers"),Cg=n(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),gl=r("code"),xg=n("past_key_values"),jg=n(" are used, the user can optionally input only the last "),_l=r("code"),Lg=n("decoder_input_ids"),Pg=n(` (those that
don\u2019t have their past key value states given to this model) of shape `),kl=r("code"),Og=n("(batch_size, 1)"),Dg=n(` instead of all
`),bl=r("code"),Ag=n("decoder_input_ids"),Ng=n(" of shape "),Tl=r("code"),Sg=n("(batch_size, sequence_length)"),Ig=n(`.
use_cache (`),vl=r("code"),Wg=n("bool"),Ug=n(", "),yl=r("em"),Hg=n("optional"),Qg=n(", defaults to "),wl=r("code"),Vg=n("True"),Kg=n(`):
If set to `),$l=r("code"),Jg=n("True"),Gg=n(", "),Fl=r("code"),Xg=n("past_key_values"),Yg=n(` key value states are returned and can be used to speed up decoding (see
`),Rl=r("code"),Zg=n("past_key_values"),e_=n("). Set to "),Bl=r("code"),t_=n("False"),o_=n(" during training, "),El=r("code"),n_=n("True"),s_=n(` during generation
labels (`),Ml=r("code"),r_=n("tf.Tensor"),a_=n(" or "),zl=r("code"),i_=n("np.ndarray"),l_=n(" of shape "),ql=r("code"),d_=n("(batch_size, sequence_length)"),c_=n(", "),Cl=r("em"),p_=n("optional"),m_=n(`):
Labels for computing the cross entropy classification loss. Indices should be in `),xl=r("code"),h_=n("[0, ..., config.vocab_size - 1]"),u_=n("."),f_=m(),v(_n.$$.fragment),Gd=m(),ho=r("h2"),kn=r("a"),jl=r("span"),v(kr.$$.fragment),g_=m(),Ll=r("span"),__=n("TFRemBertForSequenceClassification"),Xd=m(),We=r("div"),v(br.$$.fragment),k_=m(),Pl=r("p"),b_=n("RemBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),T_=m(),Tr=r("p"),v_=n("This model inherits from "),ba=r("a"),y_=n("TFPreTrainedModel"),w_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$_=m(),vr=r("p"),F_=n("This model is also a "),yr=r("a"),R_=n("tf.keras.Model"),B_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),E_=m(),v(bn.$$.fragment),M_=m(),tt=r("div"),v(wr.$$.fragment),z_=m(),uo=r("p"),q_=n("The "),Ta=r("a"),C_=n("TFRemBertForSequenceClassification"),x_=n(" forward method, overrides the "),Ol=r("code"),j_=n("__call__"),L_=n(" special method."),P_=m(),v(Tn.$$.fragment),O_=m(),v(vn.$$.fragment),D_=m(),v(yn.$$.fragment),Yd=m(),fo=r("h2"),wn=r("a"),Dl=r("span"),v($r.$$.fragment),A_=m(),Al=r("span"),N_=n("TFRemBertForMultipleChoice"),Zd=m(),Ue=r("div"),v(Fr.$$.fragment),S_=m(),Nl=r("p"),I_=n(`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),W_=m(),Rr=r("p"),U_=n("This model inherits from "),va=r("a"),H_=n("TFPreTrainedModel"),Q_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),V_=m(),Br=r("p"),K_=n("This model is also a "),Er=r("a"),J_=n("tf.keras.Model"),G_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),X_=m(),v($n.$$.fragment),Y_=m(),gt=r("div"),v(Mr.$$.fragment),Z_=m(),go=r("p"),ek=n("The "),ya=r("a"),tk=n("TFRemBertForMultipleChoice"),ok=n(" forward method, overrides the "),Sl=r("code"),nk=n("__call__"),sk=n(" special method."),rk=m(),v(Fn.$$.fragment),ak=m(),v(Rn.$$.fragment),ec=m(),_o=r("h2"),Bn=r("a"),Il=r("span"),v(zr.$$.fragment),ik=m(),Wl=r("span"),lk=n("TFRemBertForTokenClassification"),tc=m(),He=r("div"),v(qr.$$.fragment),dk=m(),Ul=r("p"),ck=n(`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pk=m(),Cr=r("p"),mk=n("This model inherits from "),wa=r("a"),hk=n("TFPreTrainedModel"),uk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fk=m(),xr=r("p"),gk=n("This model is also a "),jr=r("a"),_k=n("tf.keras.Model"),kk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bk=m(),v(En.$$.fragment),Tk=m(),ot=r("div"),v(Lr.$$.fragment),vk=m(),ko=r("p"),yk=n("The "),$a=r("a"),wk=n("TFRemBertForTokenClassification"),$k=n(" forward method, overrides the "),Hl=r("code"),Fk=n("__call__"),Rk=n(" special method."),Bk=m(),v(Mn.$$.fragment),Ek=m(),v(zn.$$.fragment),Mk=m(),v(qn.$$.fragment),oc=m(),bo=r("h2"),Cn=r("a"),Ql=r("span"),v(Pr.$$.fragment),zk=m(),Vl=r("span"),qk=n("TFRemBertForQuestionAnswering"),nc=m(),Qe=r("div"),v(Or.$$.fragment),Ck=m(),To=r("p"),xk=n(`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Kl=r("code"),jk=n("span start logits"),Lk=n(" and "),Jl=r("code"),Pk=n("span end logits"),Ok=n(")."),Dk=m(),Dr=r("p"),Ak=n("This model inherits from "),Fa=r("a"),Nk=n("TFPreTrainedModel"),Sk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ik=m(),Ar=r("p"),Wk=n("This model is also a "),Nr=r("a"),Uk=n("tf.keras.Model"),Hk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qk=m(),v(xn.$$.fragment),Vk=m(),nt=r("div"),v(Sr.$$.fragment),Kk=m(),vo=r("p"),Jk=n("The "),Ra=r("a"),Gk=n("TFRemBertForQuestionAnswering"),Xk=n(" forward method, overrides the "),Gl=r("code"),Yk=n("__call__"),Zk=n(" special method."),eb=m(),v(jn.$$.fragment),tb=m(),v(Ln.$$.fragment),ob=m(),v(Pn.$$.fragment),this.h()},l(o){const b=oy('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),c=a(o,"H1",{class:!0});var Ir=i(c);p=a(Ir,"A",{id:!0,class:!0,href:!0});var Xl=i(p);k=a(Xl,"SPAN",{});var Yl=i(k);y(l.$$.fragment,Yl),Yl.forEach(t),Xl.forEach(t),u=h(Ir),M=a(Ir,"SPAN",{});var Zl=i(M);ue=s(Zl,"RemBERT"),Zl.forEach(t),Ir.forEach(t),X=h(o),z=a(o,"H2",{class:!0});var Wr=i(z);te=a(Wr,"A",{id:!0,class:!0,href:!0});var ed=i(te);N=a(ed,"SPAN",{});var td=i(N);y(ne.$$.fragment,td),td.forEach(t),ed.forEach(t),fe=h(Wr),S=a(Wr,"SPAN",{});var od=i(S);ge=s(od,"Overview"),od.forEach(t),Wr.forEach(t),pe=h(o),J=a(o,"P",{});var Ur=i(J);P=s(Ur,"The RemBERT model was proposed in "),se=a(Ur,"A",{href:!0,rel:!0});var nd=i(se);Z=s(nd,"Rethinking Embedding Coupling in Pre-trained Language Models"),nd.forEach(t),q=s(Ur," by Hyung Won Chung, Thibault F\xE9vry, Henry Tsai, Melvin Johnson, Sebastian Ruder."),Ur.forEach(t),x=h(o),ae=a(o,"P",{});var sd=i(ae);H=s(sd,"The abstract from the paper is the following:"),sd.forEach(t),me=h(o),ie=a(o,"P",{});var rd=i(ie);I=a(rd,"EM",{});var ad=i(I);_e=s(ad,`We re-evaluate the standard practice of sharing weights between input and output embeddings in state-of-the-art
pre-trained language models. We show that decoupled embeddings provide increased modeling flexibility, allowing us to
significantly improve the efficiency of parameter allocation in the input embedding of multilingual models. By
reallocating the input embedding parameters in the Transformer layers, we achieve dramatically better performance on
standard natural language understanding tasks with the same number of parameters during fine-tuning. We also show that
allocating additional capacity to the output embedding provides benefits to the model that persist through the
fine-tuning stage even though the output embedding is discarded after pre-training. Our analysis shows that larger
output embeddings prevent the model\u2019s last layers from overspecializing to the pre-training task and encourage
Transformer representations to be more general and more transferable to other tasks and languages. Harnessing these
findings, we are able to train models that achieve strong performance on the XTREME benchmark without increasing the
number of parameters at the fine-tuning stage.`),ad.forEach(t),rd.forEach(t),he=h(o),C=a(o,"P",{});var id=i(C);ke=s(id,"Tips:"),id.forEach(t),W=h(o),le=a(o,"P",{});var ld=i(le);be=s(ld,`For fine-tuning, RemBERT can be thought of as a bigger version of mBERT with an ALBERT-like factorization of the
embedding layer. The embeddings are not tied in pre-training, in contrast with BERT, which enables smaller input
embeddings (preserved during fine-tuning) and bigger output embeddings (discarded at fine-tuning). The tokenizer is
also similar to the Albert one rather than the BERT one.`),ld.forEach(t),U=h(o),ee=a(o,"H2",{class:!0});var Hr=i(ee);oe=a(Hr,"A",{id:!0,class:!0,href:!0});var dd=i(oe);L=a(dd,"SPAN",{});var cd=i(L);y(re.$$.fragment,cd),cd.forEach(t),dd.forEach(t),Q=h(Hr),ce=a(Hr,"SPAN",{});var pd=i(ce);f=s(pd,"RemBertConfig"),pd.forEach(t),Hr.forEach(t),E=h(o),A=a(o,"DIV",{class:!0});var Et=i(A);y(ve.$$.fragment,Et),Re=h(Et),j=a(Et,"P",{});var yo=i(j);Be=s(yo,"This is the configuration class to store the configuration of a "),ye=a(yo,"A",{href:!0});var md=i(ye);Ee=s(md,"RemBertModel"),md.forEach(t),O=s(yo,`. It is used to instantiate an
RemBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RemBERT
`),D=a(yo,"A",{href:!0,rel:!0});var hd=i(D);Me=s(hd,"google/rembert"),hd.forEach(t),ze=s(yo," architecture."),yo.forEach(t),V=h(Et),Te=a(Et,"P",{});var wo=i(Te);qe=s(wo,"Configuration objects inherit from "),de=a(wo,"A",{href:!0});var ud=i(de);Ce=s(ud,"PretrainedConfig"),ud.forEach(t),Kc=s(wo,` and can be used to control the model outputs. Read the
documentation from `),Yr=a(wo,"A",{href:!0});var fd=i(Yr);Jc=s(fd,"PretrainedConfig"),fd.forEach(t),Gc=s(wo," for more information."),wo.forEach(t),Xc=h(Et),y(Fo.$$.fragment,Et),Et.forEach(t),Rd=h(o),St=a(o,"H2",{class:!0});var Qr=i(St);Ro=a(Qr,"A",{id:!0,class:!0,href:!0});var gd=i(Ro);Ga=a(gd,"SPAN",{});var _d=i(Ga);y(Kn.$$.fragment,_d),_d.forEach(t),gd.forEach(t),Yc=h(Qr),Xa=a(Qr,"SPAN",{});var kd=i(Xa);Zc=s(kd,"RemBertTokenizer"),kd.forEach(t),Qr.forEach(t),Bd=h(o),je=a(o,"DIV",{class:!0});var Ve=i(je);y(Jn.$$.fragment,Ve),ep=h(Ve),Gn=a(Ve,"P",{});var Vr=i(Gn);tp=s(Vr,"Construct a RemBERT tokenizer. Based on "),Xn=a(Vr,"A",{href:!0,rel:!0});var bd=i(Xn);op=s(bd,"SentencePiece"),bd.forEach(t),np=s(Vr,"."),Vr.forEach(t),sp=h(Ve),Yn=a(Ve,"P",{});var Kr=i(Yn);rp=s(Kr,"This tokenizer inherits from "),Zr=a(Kr,"A",{href:!0});var Td=i(Zr);ap=s(Td,"PreTrainedTokenizer"),Td.forEach(t),ip=s(Kr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Kr.forEach(t),lp=h(Ve),zt=a(Ve,"DIV",{class:!0});var $o=i(zt);y(Zn.$$.fragment,$o),dp=h($o),Ya=a($o,"P",{});var vd=i(Ya);cp=s(vd,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A REMBERT sequence has the following format:`),vd.forEach(t),pp=h($o),es=a($o,"UL",{});var Jr=i(es);ea=a(Jr,"LI",{});var Ba=i(ea);mp=s(Ba,"single sequence: "),Za=a(Ba,"CODE",{});var yd=i(Za);hp=s(yd,"[CLS] X [SEP]"),yd.forEach(t),Ba.forEach(t),up=h(Jr),ta=a(Jr,"LI",{});var Ea=i(ta);fp=s(Ea,"pair of sequences: "),ei=a(Ea,"CODE",{});var wd=i(ei);gp=s(wd,"[CLS] A [SEP] B [SEP]"),wd.forEach(t),Ea.forEach(t),Jr.forEach(t),$o.forEach(t),_p=h(Ve),Bo=a(Ve,"DIV",{class:!0});var Gr=i(Bo);y(ts.$$.fragment,Gr),kp=h(Gr),os=a(Gr,"P",{});var Xr=i(os);bp=s(Xr,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ti=a(Xr,"CODE",{});var $d=i(ti);Tp=s($d,"prepare_for_model"),$d.forEach(t),vp=s(Xr," method."),Xr.forEach(t),Gr.forEach(t),yp=h(Ve),ct=a(Ve,"DIV",{class:!0});var Mt=i(ct);y(ns.$$.fragment,Mt),wp=h(Mt),oi=a(Mt,"P",{});var Fd=i(oi);$p=s(Fd,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT"),Fd.forEach(t),Fp=h(Mt),y(Eo.$$.fragment,Mt),Rp=h(Mt),It=a(Mt,"P",{});var Ma=i(It);Bp=s(Ma,"If "),ni=a(Ma,"CODE",{});var rb=i(ni);Ep=s(rb,"token_ids_1"),rb.forEach(t),Mp=s(Ma," is "),si=a(Ma,"CODE",{});var ab=i(si);zp=s(ab,"None"),ab.forEach(t),qp=s(Ma,", this method only returns the first portion of the mask (0s)."),Ma.forEach(t),Mt.forEach(t),Cp=h(Ve),oa=a(Ve,"DIV",{class:!0});var ib=i(oa);y(ss.$$.fragment,ib),ib.forEach(t),Ve.forEach(t),Ed=h(o),Wt=a(o,"H2",{class:!0});var rc=i(Wt);Mo=a(rc,"A",{id:!0,class:!0,href:!0});var lb=i(Mo);ri=a(lb,"SPAN",{});var db=i(ri);y(rs.$$.fragment,db),db.forEach(t),lb.forEach(t),xp=h(rc),ai=a(rc,"SPAN",{});var cb=i(ai);jp=s(cb,"RemBertTokenizerFast"),cb.forEach(t),rc.forEach(t),Md=h(o),De=a(o,"DIV",{class:!0});var _t=i(De);y(as.$$.fragment,_t),Lp=h(_t),Ft=a(_t,"P",{});var On=i(Ft);Pp=s(On,"Construct a \u201Cfast\u201D RemBert tokenizer (backed by HuggingFace\u2019s "),ii=a(On,"EM",{});var pb=i(ii);Op=s(pb,"tokenizers"),pb.forEach(t),Dp=s(On,` library). Based on
`),is=a(On,"A",{href:!0,rel:!0});var mb=i(is);Ap=s(mb,"Unigram"),mb.forEach(t),Np=s(On,`. This
tokenizer inherits from `),na=a(On,"A",{href:!0});var hb=i(na);Sp=s(hb,"PreTrainedTokenizerFast"),hb.forEach(t),Ip=s(On,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),On.forEach(t),Wp=h(_t),qt=a(_t,"DIV",{class:!0});var za=i(qt);y(ls.$$.fragment,za),Up=h(za),li=a(za,"P",{});var ub=i(li);Hp=s(ub,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RemBERT sequence has the following format:`),ub.forEach(t),Qp=h(za),ds=a(za,"UL",{});var ac=i(ds);sa=a(ac,"LI",{});var nb=i(sa);Vp=s(nb,"single sequence: "),di=a(nb,"CODE",{});var fb=i(di);Kp=s(fb,"[CLS] X [SEP]"),fb.forEach(t),nb.forEach(t),Jp=h(ac),ra=a(ac,"LI",{});var sb=i(ra);Gp=s(sb,"pair of sequences: "),ci=a(sb,"CODE",{});var gb=i(ci);Xp=s(gb,"[CLS] A [SEP] B [SEP]"),gb.forEach(t),sb.forEach(t),ac.forEach(t),za.forEach(t),Yp=h(_t),zo=a(_t,"DIV",{class:!0});var ic=i(zo);y(cs.$$.fragment,ic),Zp=h(ic),ps=a(ic,"P",{});var lc=i(ps);em=s(lc,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),pi=a(lc,"CODE",{});var _b=i(pi);tm=s(_b,"prepare_for_model"),_b.forEach(t),om=s(lc," method."),lc.forEach(t),ic.forEach(t),nm=h(_t),pt=a(_t,"DIV",{class:!0});var Dn=i(pt);y(ms.$$.fragment,Dn),sm=h(Dn),mi=a(Dn,"P",{});var kb=i(mi);rm=s(kb,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT"),kb.forEach(t),am=h(Dn),y(qo.$$.fragment,Dn),im=h(Dn),hi=a(Dn,"P",{});var bb=i(hi);lm=s(bb,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),bb.forEach(t),Dn.forEach(t),dm=h(_t),aa=a(_t,"DIV",{class:!0});var Tb=i(aa);y(hs.$$.fragment,Tb),Tb.forEach(t),_t.forEach(t),zd=h(o),Ut=a(o,"H2",{class:!0});var dc=i(Ut);Co=a(dc,"A",{id:!0,class:!0,href:!0});var vb=i(Co);ui=a(vb,"SPAN",{});var yb=i(ui);y(us.$$.fragment,yb),yb.forEach(t),vb.forEach(t),cm=h(dc),fi=a(dc,"SPAN",{});var wb=i(fi);pm=s(wb,"RemBertModel"),wb.forEach(t),dc.forEach(t),qd=h(o),Je=a(o,"DIV",{class:!0});var Ct=i(Je);y(fs.$$.fragment,Ct),mm=h(Ct),gs=a(Ct,"P",{});var cc=i(gs);hm=s(cc,`The bare RemBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),_s=a(cc,"A",{href:!0,rel:!0});var $b=i(_s);um=s($b,"torch.nn.Module"),$b.forEach(t),fm=s(cc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cc.forEach(t),gm=h(Ct),ks=a(Ct,"P",{});var pc=i(ks);_m=s(pc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),bs=a(pc,"A",{href:!0,rel:!0});var Fb=i(bs);km=s(Fb,`Attention is
all you need`),Fb.forEach(t),bm=s(pc,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),pc.forEach(t),Tm=h(Ct),Ae=a(Ct,"P",{});var st=i(Ae);vm=s(st,"To behave as an decoder the model needs to be initialized with the "),gi=a(st,"CODE",{});var Rb=i(gi);ym=s(Rb,"is_decoder"),Rb.forEach(t),wm=s(st,` argument of the configuration set
to `),_i=a(st,"CODE",{});var Bb=i(_i);$m=s(Bb,"True"),Bb.forEach(t),Fm=s(st,". To be used in a Seq2Seq model, the model needs to initialized with both "),ki=a(st,"CODE",{});var Eb=i(ki);Rm=s(Eb,"is_decoder"),Eb.forEach(t),Bm=s(st,` argument and
`),bi=a(st,"CODE",{});var Mb=i(bi);Em=s(Mb,"add_cross_attention"),Mb.forEach(t),Mm=s(st," set to "),Ti=a(st,"CODE",{});var zb=i(Ti);zm=s(zb,"True"),zb.forEach(t),qm=s(st,"; an "),vi=a(st,"CODE",{});var qb=i(vi);Cm=s(qb,"encoder_hidden_states"),qb.forEach(t),xm=s(st," is then expected as an input to the forward pass."),st.forEach(t),jm=h(Ct),mt=a(Ct,"DIV",{class:!0});var An=i(mt);y(Ts.$$.fragment,An),Lm=h(An),Ht=a(An,"P",{});var qa=i(Ht);Pm=s(qa,"The "),ia=a(qa,"A",{href:!0});var Cb=i(ia);Om=s(Cb,"RemBertModel"),Cb.forEach(t),Dm=s(qa," forward method, overrides the "),yi=a(qa,"CODE",{});var xb=i(yi);Am=s(xb,"__call__"),xb.forEach(t),Nm=s(qa," special method."),qa.forEach(t),Sm=h(An),y(xo.$$.fragment,An),Im=h(An),y(jo.$$.fragment,An),An.forEach(t),Ct.forEach(t),Cd=h(o),Qt=a(o,"H2",{class:!0});var mc=i(Qt);Lo=a(mc,"A",{id:!0,class:!0,href:!0});var jb=i(Lo);wi=a(jb,"SPAN",{});var Lb=i(wi);y(vs.$$.fragment,Lb),Lb.forEach(t),jb.forEach(t),Wm=h(mc),$i=a(mc,"SPAN",{});var Pb=i($i);Um=s(Pb,"RemBertForCausalLM"),Pb.forEach(t),mc.forEach(t),xd=h(o),Rt=a(o,"DIV",{class:!0});var Ca=i(Rt);y(ys.$$.fragment,Ca),Hm=h(Ca),Vt=a(Ca,"P",{});var xa=i(Vt);Qm=s(xa,"RemBERT Model with a "),Fi=a(xa,"CODE",{});var Ob=i(Fi);Vm=s(Ob,"language modeling"),Ob.forEach(t),Km=s(xa,` head on top for CLM fine-tuning.
This model is a PyTorch `),ws=a(xa,"A",{href:!0,rel:!0});var Db=i(ws);Jm=s(Db,"torch.nn.Module"),Db.forEach(t),Gm=s(xa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xa.forEach(t),Xm=h(Ca),ht=a(Ca,"DIV",{class:!0});var Nn=i(ht);y($s.$$.fragment,Nn),Ym=h(Nn),Kt=a(Nn,"P",{});var ja=i(Kt);Zm=s(ja,"The "),la=a(ja,"A",{href:!0});var Ab=i(la);eh=s(Ab,"RemBertForCausalLM"),Ab.forEach(t),th=s(ja," forward method, overrides the "),Ri=a(ja,"CODE",{});var Nb=i(Ri);oh=s(Nb,"__call__"),Nb.forEach(t),nh=s(ja," special method."),ja.forEach(t),sh=h(Nn),y(Po.$$.fragment,Nn),rh=h(Nn),y(Oo.$$.fragment,Nn),Nn.forEach(t),Ca.forEach(t),jd=h(o),Jt=a(o,"H2",{class:!0});var hc=i(Jt);Do=a(hc,"A",{id:!0,class:!0,href:!0});var Sb=i(Do);Bi=a(Sb,"SPAN",{});var Ib=i(Bi);y(Fs.$$.fragment,Ib),Ib.forEach(t),Sb.forEach(t),ah=h(hc),Ei=a(hc,"SPAN",{});var Wb=i(Ei);ih=s(Wb,"RemBertForMaskedLM"),Wb.forEach(t),hc.forEach(t),Ld=h(o),Bt=a(o,"DIV",{class:!0});var La=i(Bt);y(Rs.$$.fragment,La),lh=h(La),Gt=a(La,"P",{});var Pa=i(Gt);dh=s(Pa,"RemBERT Model with a "),Mi=a(Pa,"CODE",{});var Ub=i(Mi);ch=s(Ub,"language modeling"),Ub.forEach(t),ph=s(Pa,` head on top.
This model is a PyTorch `),Bs=a(Pa,"A",{href:!0,rel:!0});var Hb=i(Bs);mh=s(Hb,"torch.nn.Module"),Hb.forEach(t),hh=s(Pa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pa.forEach(t),uh=h(La),Ge=a(La,"DIV",{class:!0});var xt=i(Ge);y(Es.$$.fragment,xt),fh=h(xt),Xt=a(xt,"P",{});var Oa=i(Xt);gh=s(Oa,"The "),da=a(Oa,"A",{href:!0});var Qb=i(da);_h=s(Qb,"RemBertForMaskedLM"),Qb.forEach(t),kh=s(Oa," forward method, overrides the "),zi=a(Oa,"CODE",{});var Vb=i(zi);bh=s(Vb,"__call__"),Vb.forEach(t),Th=s(Oa," special method."),Oa.forEach(t),vh=h(xt),y(Ao.$$.fragment,xt),yh=h(xt),y(No.$$.fragment,xt),wh=h(xt),y(So.$$.fragment,xt),xt.forEach(t),La.forEach(t),Pd=h(o),Yt=a(o,"H2",{class:!0});var uc=i(Yt);Io=a(uc,"A",{id:!0,class:!0,href:!0});var Kb=i(Io);qi=a(Kb,"SPAN",{});var Jb=i(qi);y(Ms.$$.fragment,Jb),Jb.forEach(t),Kb.forEach(t),$h=h(uc),Ci=a(uc,"SPAN",{});var Gb=i(Ci);Fh=s(Gb,"RemBertForSequenceClassification"),Gb.forEach(t),uc.forEach(t),Od=h(o),at=a(o,"DIV",{class:!0});var Sn=i(at);y(zs.$$.fragment,Sn),Rh=h(Sn),xi=a(Sn,"P",{});var Xb=i(xi);Bh=s(Xb,`RemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Xb.forEach(t),Eh=h(Sn),qs=a(Sn,"P",{});var fc=i(qs);Mh=s(fc,"This model is a PyTorch "),Cs=a(fc,"A",{href:!0,rel:!0});var Yb=i(Cs);zh=s(Yb,"torch.nn.Module"),Yb.forEach(t),qh=s(fc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fc.forEach(t),Ch=h(Sn),Oe=a(Sn,"DIV",{class:!0});var rt=i(Oe);y(xs.$$.fragment,rt),xh=h(rt),Zt=a(rt,"P",{});var Da=i(Zt);jh=s(Da,"The "),ca=a(Da,"A",{href:!0});var Zb=i(ca);Lh=s(Zb,"RemBertForSequenceClassification"),Zb.forEach(t),Ph=s(Da," forward method, overrides the "),ji=a(Da,"CODE",{});var eT=i(ji);Oh=s(eT,"__call__"),eT.forEach(t),Dh=s(Da," special method."),Da.forEach(t),Ah=h(rt),y(Wo.$$.fragment,rt),Nh=h(rt),y(Uo.$$.fragment,rt),Sh=h(rt),y(Ho.$$.fragment,rt),Ih=h(rt),y(Qo.$$.fragment,rt),Wh=h(rt),y(Vo.$$.fragment,rt),rt.forEach(t),Sn.forEach(t),Dd=h(o),eo=a(o,"H2",{class:!0});var gc=i(eo);Ko=a(gc,"A",{id:!0,class:!0,href:!0});var tT=i(Ko);Li=a(tT,"SPAN",{});var oT=i(Li);y(js.$$.fragment,oT),oT.forEach(t),tT.forEach(t),Uh=h(gc),Pi=a(gc,"SPAN",{});var nT=i(Pi);Hh=s(nT,"RemBertForMultipleChoice"),nT.forEach(t),gc.forEach(t),Ad=h(o),it=a(o,"DIV",{class:!0});var In=i(it);y(Ls.$$.fragment,In),Qh=h(In),Oi=a(In,"P",{});var sT=i(Oi);Vh=s(sT,`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),sT.forEach(t),Kh=h(In),Ps=a(In,"P",{});var _c=i(Ps);Jh=s(_c,"This model is a PyTorch "),Os=a(_c,"A",{href:!0,rel:!0});var rT=i(Os);Gh=s(rT,"torch.nn.Module"),rT.forEach(t),Xh=s(_c,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_c.forEach(t),Yh=h(In),ut=a(In,"DIV",{class:!0});var Wn=i(ut);y(Ds.$$.fragment,Wn),Zh=h(Wn),to=a(Wn,"P",{});var Aa=i(to);eu=s(Aa,"The "),pa=a(Aa,"A",{href:!0});var aT=i(pa);tu=s(aT,"RemBertForMultipleChoice"),aT.forEach(t),ou=s(Aa," forward method, overrides the "),Di=a(Aa,"CODE",{});var iT=i(Di);nu=s(iT,"__call__"),iT.forEach(t),su=s(Aa," special method."),Aa.forEach(t),ru=h(Wn),y(Jo.$$.fragment,Wn),au=h(Wn),y(Go.$$.fragment,Wn),Wn.forEach(t),In.forEach(t),Nd=h(o),oo=a(o,"H2",{class:!0});var kc=i(oo);Xo=a(kc,"A",{id:!0,class:!0,href:!0});var lT=i(Xo);Ai=a(lT,"SPAN",{});var dT=i(Ai);y(As.$$.fragment,dT),dT.forEach(t),lT.forEach(t),iu=h(kc),Ni=a(kc,"SPAN",{});var cT=i(Ni);lu=s(cT,"RemBertForTokenClassification"),cT.forEach(t),kc.forEach(t),Sd=h(o),lt=a(o,"DIV",{class:!0});var Un=i(lt);y(Ns.$$.fragment,Un),du=h(Un),Si=a(Un,"P",{});var pT=i(Si);cu=s(pT,`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pT.forEach(t),pu=h(Un),Ss=a(Un,"P",{});var bc=i(Ss);mu=s(bc,"This model is a PyTorch "),Is=a(bc,"A",{href:!0,rel:!0});var mT=i(Is);hu=s(mT,"torch.nn.Module"),mT.forEach(t),uu=s(bc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),bc.forEach(t),fu=h(Un),Xe=a(Un,"DIV",{class:!0});var jt=i(Xe);y(Ws.$$.fragment,jt),gu=h(jt),no=a(jt,"P",{});var Na=i(no);_u=s(Na,"The "),ma=a(Na,"A",{href:!0});var hT=i(ma);ku=s(hT,"RemBertForTokenClassification"),hT.forEach(t),bu=s(Na," forward method, overrides the "),Ii=a(Na,"CODE",{});var uT=i(Ii);Tu=s(uT,"__call__"),uT.forEach(t),vu=s(Na," special method."),Na.forEach(t),yu=h(jt),y(Yo.$$.fragment,jt),wu=h(jt),y(Zo.$$.fragment,jt),$u=h(jt),y(en.$$.fragment,jt),jt.forEach(t),Un.forEach(t),Id=h(o),so=a(o,"H2",{class:!0});var Tc=i(so);tn=a(Tc,"A",{id:!0,class:!0,href:!0});var fT=i(tn);Wi=a(fT,"SPAN",{});var gT=i(Wi);y(Us.$$.fragment,gT),gT.forEach(t),fT.forEach(t),Fu=h(Tc),Ui=a(Tc,"SPAN",{});var _T=i(Ui);Ru=s(_T,"RemBertForQuestionAnswering"),_T.forEach(t),Tc.forEach(t),Wd=h(o),dt=a(o,"DIV",{class:!0});var Hn=i(dt);y(Hs.$$.fragment,Hn),Bu=h(Hn),ro=a(Hn,"P",{});var Sa=i(ro);Eu=s(Sa,`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Hi=a(Sa,"CODE",{});var kT=i(Hi);Mu=s(kT,"span start logits"),kT.forEach(t),zu=s(Sa," and "),Qi=a(Sa,"CODE",{});var bT=i(Qi);qu=s(bT,"span end logits"),bT.forEach(t),Cu=s(Sa,")."),Sa.forEach(t),xu=h(Hn),Qs=a(Hn,"P",{});var vc=i(Qs);ju=s(vc,"This model is a PyTorch "),Vs=a(vc,"A",{href:!0,rel:!0});var TT=i(Vs);Lu=s(TT,"torch.nn.Module"),TT.forEach(t),Pu=s(vc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vc.forEach(t),Ou=h(Hn),Ye=a(Hn,"DIV",{class:!0});var Lt=i(Ye);y(Ks.$$.fragment,Lt),Du=h(Lt),ao=a(Lt,"P",{});var Ia=i(ao);Au=s(Ia,"The "),ha=a(Ia,"A",{href:!0});var vT=i(ha);Nu=s(vT,"RemBertForQuestionAnswering"),vT.forEach(t),Su=s(Ia," forward method, overrides the "),Vi=a(Ia,"CODE",{});var yT=i(Vi);Iu=s(yT,"__call__"),yT.forEach(t),Wu=s(Ia," special method."),Ia.forEach(t),Uu=h(Lt),y(on.$$.fragment,Lt),Hu=h(Lt),y(nn.$$.fragment,Lt),Qu=h(Lt),y(sn.$$.fragment,Lt),Lt.forEach(t),Hn.forEach(t),Ud=h(o),io=a(o,"H2",{class:!0});var yc=i(io);rn=a(yc,"A",{id:!0,class:!0,href:!0});var wT=i(rn);Ki=a(wT,"SPAN",{});var $T=i(Ki);y(Js.$$.fragment,$T),$T.forEach(t),wT.forEach(t),Vu=h(yc),Ji=a(yc,"SPAN",{});var FT=i(Ji);Ku=s(FT,"TFRemBertModel"),FT.forEach(t),yc.forEach(t),Hd=h(o),Ne=a(o,"DIV",{class:!0});var kt=i(Ne);y(Gs.$$.fragment,kt),Ju=h(kt),Gi=a(kt,"P",{});var RT=i(Gi);Gu=s(RT,"The bare RemBERT Model transformer outputing raw hidden-states without any specific head on top."),RT.forEach(t),Xu=h(kt),Xs=a(kt,"P",{});var wc=i(Xs);Yu=s(wc,"This model inherits from "),ua=a(wc,"A",{href:!0});var BT=i(ua);Zu=s(BT,"TFPreTrainedModel"),BT.forEach(t),ef=s(wc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wc.forEach(t),tf=h(kt),Ys=a(kt,"P",{});var $c=i(Ys);of=s($c,"This model is also a "),Zs=a($c,"A",{href:!0,rel:!0});var ET=i(Zs);nf=s(ET,"tf.keras.Model"),ET.forEach(t),sf=s($c,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$c.forEach(t),rf=h(kt),y(an.$$.fragment,kt),af=h(kt),ft=a(kt,"DIV",{class:!0});var Qn=i(ft);y(er.$$.fragment,Qn),lf=h(Qn),lo=a(Qn,"P",{});var Wa=i(lo);df=s(Wa,"The "),fa=a(Wa,"A",{href:!0});var MT=i(fa);cf=s(MT,"TFRemBertModel"),MT.forEach(t),pf=s(Wa," forward method, overrides the "),Xi=a(Wa,"CODE",{});var zT=i(Xi);mf=s(zT,"__call__"),zT.forEach(t),hf=s(Wa," special method."),Wa.forEach(t),uf=h(Qn),y(ln.$$.fragment,Qn),ff=h(Qn),y(dn.$$.fragment,Qn),Qn.forEach(t),kt.forEach(t),Qd=h(o),co=a(o,"H2",{class:!0});var Fc=i(co);cn=a(Fc,"A",{id:!0,class:!0,href:!0});var qT=i(cn);Yi=a(qT,"SPAN",{});var CT=i(Yi);y(tr.$$.fragment,CT),CT.forEach(t),qT.forEach(t),gf=h(Fc),Zi=a(Fc,"SPAN",{});var xT=i(Zi);_f=s(xT,"TFRemBertForMaskedLM"),xT.forEach(t),Fc.forEach(t),Vd=h(o),Se=a(o,"DIV",{class:!0});var bt=i(Se);y(or.$$.fragment,bt),kf=h(bt),nr=a(bt,"P",{});var Rc=i(nr);bf=s(Rc,"RemBERT Model with a "),el=a(Rc,"CODE",{});var jT=i(el);Tf=s(jT,"language modeling"),jT.forEach(t),vf=s(Rc," head on top."),Rc.forEach(t),yf=h(bt),sr=a(bt,"P",{});var Bc=i(sr);wf=s(Bc,"This model inherits from "),ga=a(Bc,"A",{href:!0});var LT=i(ga);$f=s(LT,"TFPreTrainedModel"),LT.forEach(t),Ff=s(Bc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bc.forEach(t),Rf=h(bt),rr=a(bt,"P",{});var Ec=i(rr);Bf=s(Ec,"This model is also a "),ar=a(Ec,"A",{href:!0,rel:!0});var PT=i(ar);Ef=s(PT,"tf.keras.Model"),PT.forEach(t),Mf=s(Ec,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ec.forEach(t),zf=h(bt),y(pn.$$.fragment,bt),qf=h(bt),Ze=a(bt,"DIV",{class:!0});var Pt=i(Ze);y(ir.$$.fragment,Pt),Cf=h(Pt),po=a(Pt,"P",{});var Ua=i(po);xf=s(Ua,"The "),_a=a(Ua,"A",{href:!0});var OT=i(_a);jf=s(OT,"TFRemBertForMaskedLM"),OT.forEach(t),Lf=s(Ua," forward method, overrides the "),tl=a(Ua,"CODE",{});var DT=i(tl);Pf=s(DT,"__call__"),DT.forEach(t),Of=s(Ua," special method."),Ua.forEach(t),Df=h(Pt),y(mn.$$.fragment,Pt),Af=h(Pt),y(hn.$$.fragment,Pt),Nf=h(Pt),y(un.$$.fragment,Pt),Pt.forEach(t),bt.forEach(t),Kd=h(o),mo=a(o,"H2",{class:!0});var Mc=i(mo);fn=a(Mc,"A",{id:!0,class:!0,href:!0});var AT=i(fn);ol=a(AT,"SPAN",{});var NT=i(ol);y(lr.$$.fragment,NT),NT.forEach(t),AT.forEach(t),Sf=h(Mc),nl=a(Mc,"SPAN",{});var ST=i(nl);If=s(ST,"TFRemBertForCausalLM"),ST.forEach(t),Mc.forEach(t),Jd=h(o),Ie=a(o,"DIV",{class:!0});var Tt=i(Ie);y(dr.$$.fragment,Tt),Wf=h(Tt),cr=a(Tt,"P",{});var zc=i(cr);Uf=s(zc,"RemBERT Model with a "),sl=a(zc,"CODE",{});var IT=i(sl);Hf=s(IT,"language modeling"),IT.forEach(t),Qf=s(zc," head on top for CLM fine-tuning."),zc.forEach(t),Vf=h(Tt),pr=a(Tt,"P",{});var qc=i(pr);Kf=s(qc,"This model inherits from "),ka=a(qc,"A",{href:!0});var WT=i(ka);Jf=s(WT,"TFPreTrainedModel"),WT.forEach(t),Gf=s(qc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qc.forEach(t),Xf=h(Tt),mr=a(Tt,"P",{});var Cc=i(mr);Yf=s(Cc,"This model is also a "),hr=a(Cc,"A",{href:!0,rel:!0});var UT=i(hr);Zf=s(UT,"tf.keras.Model"),UT.forEach(t),eg=s(Cc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cc.forEach(t),tg=h(Tt),y(gn.$$.fragment,Tt),og=h(Tt),et=a(Tt,"DIV",{class:!0});var Ot=i(et);y(ur.$$.fragment,Ot),ng=h(Ot),Le=a(Ot,"P",{});var Ke=i(Le);sg=s(Ke,"encoder_hidden_states  ("),rl=a(Ke,"CODE",{});var HT=i(rl);rg=s(HT,"tf.Tensor"),HT.forEach(t),ag=s(Ke," of shape "),al=a(Ke,"CODE",{});var QT=i(al);ig=s(QT,"(batch_size, sequence_length, hidden_size)"),QT.forEach(t),lg=s(Ke,", "),il=a(Ke,"EM",{});var VT=i(il);dg=s(VT,"optional"),VT.forEach(t),cg=s(Ke,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),ll=a(Ke,"CODE",{});var KT=i(ll);pg=s(KT,"tf.Tensor"),KT.forEach(t),mg=s(Ke," of shape "),dl=a(Ke,"CODE",{});var JT=i(dl);hg=s(JT,"(batch_size, sequence_length)"),JT.forEach(t),ug=s(Ke,", "),cl=a(Ke,"EM",{});var GT=i(cl);fg=s(GT,"optional"),GT.forEach(t),gg=s(Ke,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),pl=a(Ke,"CODE",{});var XT=i(pl);_g=s(XT,"[0, 1]"),XT.forEach(t),kg=s(Ke,":"),Ke.forEach(t),bg=h(Ot),fr=a(Ot,"UL",{});var xc=i(fr);gr=a(xc,"LI",{});var jc=i(gr);Tg=s(jc,"1 for tokens that are "),ml=a(jc,"STRONG",{});var YT=i(ml);vg=s(YT,"not masked"),YT.forEach(t),yg=s(jc,","),jc.forEach(t),wg=h(xc),_r=a(xc,"LI",{});var Lc=i(_r);$g=s(Lc,"0 for tokens that are "),hl=a(Lc,"STRONG",{});var ZT=i(hl);Fg=s(ZT,"masked"),ZT.forEach(t),Rg=s(Lc,"."),Lc.forEach(t),xc.forEach(t),Bg=h(Ot),K=a(Ot,"P",{});var G=i(K);Eg=s(G,"past_key_values ("),ul=a(G,"CODE",{});var ev=i(ul);Mg=s(ev,"Tuple[Tuple[tf.Tensor]]"),ev.forEach(t),zg=s(G," of length "),fl=a(G,"CODE",{});var tv=i(fl);qg=s(tv,"config.n_layers"),tv.forEach(t),Cg=s(G,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),gl=a(G,"CODE",{});var ov=i(gl);xg=s(ov,"past_key_values"),ov.forEach(t),jg=s(G," are used, the user can optionally input only the last "),_l=a(G,"CODE",{});var nv=i(_l);Lg=s(nv,"decoder_input_ids"),nv.forEach(t),Pg=s(G,` (those that
don\u2019t have their past key value states given to this model) of shape `),kl=a(G,"CODE",{});var sv=i(kl);Og=s(sv,"(batch_size, 1)"),sv.forEach(t),Dg=s(G,` instead of all
`),bl=a(G,"CODE",{});var rv=i(bl);Ag=s(rv,"decoder_input_ids"),rv.forEach(t),Ng=s(G," of shape "),Tl=a(G,"CODE",{});var av=i(Tl);Sg=s(av,"(batch_size, sequence_length)"),av.forEach(t),Ig=s(G,`.
use_cache (`),vl=a(G,"CODE",{});var iv=i(vl);Wg=s(iv,"bool"),iv.forEach(t),Ug=s(G,", "),yl=a(G,"EM",{});var lv=i(yl);Hg=s(lv,"optional"),lv.forEach(t),Qg=s(G,", defaults to "),wl=a(G,"CODE",{});var dv=i(wl);Vg=s(dv,"True"),dv.forEach(t),Kg=s(G,`):
If set to `),$l=a(G,"CODE",{});var cv=i($l);Jg=s(cv,"True"),cv.forEach(t),Gg=s(G,", "),Fl=a(G,"CODE",{});var pv=i(Fl);Xg=s(pv,"past_key_values"),pv.forEach(t),Yg=s(G,` key value states are returned and can be used to speed up decoding (see
`),Rl=a(G,"CODE",{});var mv=i(Rl);Zg=s(mv,"past_key_values"),mv.forEach(t),e_=s(G,"). Set to "),Bl=a(G,"CODE",{});var hv=i(Bl);t_=s(hv,"False"),hv.forEach(t),o_=s(G," during training, "),El=a(G,"CODE",{});var uv=i(El);n_=s(uv,"True"),uv.forEach(t),s_=s(G,` during generation
labels (`),Ml=a(G,"CODE",{});var fv=i(Ml);r_=s(fv,"tf.Tensor"),fv.forEach(t),a_=s(G," or "),zl=a(G,"CODE",{});var gv=i(zl);i_=s(gv,"np.ndarray"),gv.forEach(t),l_=s(G," of shape "),ql=a(G,"CODE",{});var _v=i(ql);d_=s(_v,"(batch_size, sequence_length)"),_v.forEach(t),c_=s(G,", "),Cl=a(G,"EM",{});var kv=i(Cl);p_=s(kv,"optional"),kv.forEach(t),m_=s(G,`):
Labels for computing the cross entropy classification loss. Indices should be in `),xl=a(G,"CODE",{});var bv=i(xl);h_=s(bv,"[0, ..., config.vocab_size - 1]"),bv.forEach(t),u_=s(G,"."),G.forEach(t),f_=h(Ot),y(_n.$$.fragment,Ot),Ot.forEach(t),Tt.forEach(t),Gd=h(o),ho=a(o,"H2",{class:!0});var Pc=i(ho);kn=a(Pc,"A",{id:!0,class:!0,href:!0});var Tv=i(kn);jl=a(Tv,"SPAN",{});var vv=i(jl);y(kr.$$.fragment,vv),vv.forEach(t),Tv.forEach(t),g_=h(Pc),Ll=a(Pc,"SPAN",{});var yv=i(Ll);__=s(yv,"TFRemBertForSequenceClassification"),yv.forEach(t),Pc.forEach(t),Xd=h(o),We=a(o,"DIV",{class:!0});var vt=i(We);y(br.$$.fragment,vt),k_=h(vt),Pl=a(vt,"P",{});var wv=i(Pl);b_=s(wv,"RemBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),wv.forEach(t),T_=h(vt),Tr=a(vt,"P",{});var Oc=i(Tr);v_=s(Oc,"This model inherits from "),ba=a(Oc,"A",{href:!0});var $v=i(ba);y_=s($v,"TFPreTrainedModel"),$v.forEach(t),w_=s(Oc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oc.forEach(t),$_=h(vt),vr=a(vt,"P",{});var Dc=i(vr);F_=s(Dc,"This model is also a "),yr=a(Dc,"A",{href:!0,rel:!0});var Fv=i(yr);R_=s(Fv,"tf.keras.Model"),Fv.forEach(t),B_=s(Dc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dc.forEach(t),E_=h(vt),y(bn.$$.fragment,vt),M_=h(vt),tt=a(vt,"DIV",{class:!0});var Dt=i(tt);y(wr.$$.fragment,Dt),z_=h(Dt),uo=a(Dt,"P",{});var Ha=i(uo);q_=s(Ha,"The "),Ta=a(Ha,"A",{href:!0});var Rv=i(Ta);C_=s(Rv,"TFRemBertForSequenceClassification"),Rv.forEach(t),x_=s(Ha," forward method, overrides the "),Ol=a(Ha,"CODE",{});var Bv=i(Ol);j_=s(Bv,"__call__"),Bv.forEach(t),L_=s(Ha," special method."),Ha.forEach(t),P_=h(Dt),y(Tn.$$.fragment,Dt),O_=h(Dt),y(vn.$$.fragment,Dt),D_=h(Dt),y(yn.$$.fragment,Dt),Dt.forEach(t),vt.forEach(t),Yd=h(o),fo=a(o,"H2",{class:!0});var Ac=i(fo);wn=a(Ac,"A",{id:!0,class:!0,href:!0});var Ev=i(wn);Dl=a(Ev,"SPAN",{});var Mv=i(Dl);y($r.$$.fragment,Mv),Mv.forEach(t),Ev.forEach(t),A_=h(Ac),Al=a(Ac,"SPAN",{});var zv=i(Al);N_=s(zv,"TFRemBertForMultipleChoice"),zv.forEach(t),Ac.forEach(t),Zd=h(o),Ue=a(o,"DIV",{class:!0});var yt=i(Ue);y(Fr.$$.fragment,yt),S_=h(yt),Nl=a(yt,"P",{});var qv=i(Nl);I_=s(qv,`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),qv.forEach(t),W_=h(yt),Rr=a(yt,"P",{});var Nc=i(Rr);U_=s(Nc,"This model inherits from "),va=a(Nc,"A",{href:!0});var Cv=i(va);H_=s(Cv,"TFPreTrainedModel"),Cv.forEach(t),Q_=s(Nc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nc.forEach(t),V_=h(yt),Br=a(yt,"P",{});var Sc=i(Br);K_=s(Sc,"This model is also a "),Er=a(Sc,"A",{href:!0,rel:!0});var xv=i(Er);J_=s(xv,"tf.keras.Model"),xv.forEach(t),G_=s(Sc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sc.forEach(t),X_=h(yt),y($n.$$.fragment,yt),Y_=h(yt),gt=a(yt,"DIV",{class:!0});var Vn=i(gt);y(Mr.$$.fragment,Vn),Z_=h(Vn),go=a(Vn,"P",{});var Qa=i(go);ek=s(Qa,"The "),ya=a(Qa,"A",{href:!0});var jv=i(ya);tk=s(jv,"TFRemBertForMultipleChoice"),jv.forEach(t),ok=s(Qa," forward method, overrides the "),Sl=a(Qa,"CODE",{});var Lv=i(Sl);nk=s(Lv,"__call__"),Lv.forEach(t),sk=s(Qa," special method."),Qa.forEach(t),rk=h(Vn),y(Fn.$$.fragment,Vn),ak=h(Vn),y(Rn.$$.fragment,Vn),Vn.forEach(t),yt.forEach(t),ec=h(o),_o=a(o,"H2",{class:!0});var Ic=i(_o);Bn=a(Ic,"A",{id:!0,class:!0,href:!0});var Pv=i(Bn);Il=a(Pv,"SPAN",{});var Ov=i(Il);y(zr.$$.fragment,Ov),Ov.forEach(t),Pv.forEach(t),ik=h(Ic),Wl=a(Ic,"SPAN",{});var Dv=i(Wl);lk=s(Dv,"TFRemBertForTokenClassification"),Dv.forEach(t),Ic.forEach(t),tc=h(o),He=a(o,"DIV",{class:!0});var wt=i(He);y(qr.$$.fragment,wt),dk=h(wt),Ul=a(wt,"P",{});var Av=i(Ul);ck=s(Av,`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Av.forEach(t),pk=h(wt),Cr=a(wt,"P",{});var Wc=i(Cr);mk=s(Wc,"This model inherits from "),wa=a(Wc,"A",{href:!0});var Nv=i(wa);hk=s(Nv,"TFPreTrainedModel"),Nv.forEach(t),uk=s(Wc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wc.forEach(t),fk=h(wt),xr=a(wt,"P",{});var Uc=i(xr);gk=s(Uc,"This model is also a "),jr=a(Uc,"A",{href:!0,rel:!0});var Sv=i(jr);_k=s(Sv,"tf.keras.Model"),Sv.forEach(t),kk=s(Uc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uc.forEach(t),bk=h(wt),y(En.$$.fragment,wt),Tk=h(wt),ot=a(wt,"DIV",{class:!0});var At=i(ot);y(Lr.$$.fragment,At),vk=h(At),ko=a(At,"P",{});var Va=i(ko);yk=s(Va,"The "),$a=a(Va,"A",{href:!0});var Iv=i($a);wk=s(Iv,"TFRemBertForTokenClassification"),Iv.forEach(t),$k=s(Va," forward method, overrides the "),Hl=a(Va,"CODE",{});var Wv=i(Hl);Fk=s(Wv,"__call__"),Wv.forEach(t),Rk=s(Va," special method."),Va.forEach(t),Bk=h(At),y(Mn.$$.fragment,At),Ek=h(At),y(zn.$$.fragment,At),Mk=h(At),y(qn.$$.fragment,At),At.forEach(t),wt.forEach(t),oc=h(o),bo=a(o,"H2",{class:!0});var Hc=i(bo);Cn=a(Hc,"A",{id:!0,class:!0,href:!0});var Uv=i(Cn);Ql=a(Uv,"SPAN",{});var Hv=i(Ql);y(Pr.$$.fragment,Hv),Hv.forEach(t),Uv.forEach(t),zk=h(Hc),Vl=a(Hc,"SPAN",{});var Qv=i(Vl);qk=s(Qv,"TFRemBertForQuestionAnswering"),Qv.forEach(t),Hc.forEach(t),nc=h(o),Qe=a(o,"DIV",{class:!0});var $t=i(Qe);y(Or.$$.fragment,$t),Ck=h($t),To=a($t,"P",{});var Ka=i(To);xk=s(Ka,`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Kl=a(Ka,"CODE",{});var Vv=i(Kl);jk=s(Vv,"span start logits"),Vv.forEach(t),Lk=s(Ka," and "),Jl=a(Ka,"CODE",{});var Kv=i(Jl);Pk=s(Kv,"span end logits"),Kv.forEach(t),Ok=s(Ka,")."),Ka.forEach(t),Dk=h($t),Dr=a($t,"P",{});var Qc=i(Dr);Ak=s(Qc,"This model inherits from "),Fa=a(Qc,"A",{href:!0});var Jv=i(Fa);Nk=s(Jv,"TFPreTrainedModel"),Jv.forEach(t),Sk=s(Qc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qc.forEach(t),Ik=h($t),Ar=a($t,"P",{});var Vc=i(Ar);Wk=s(Vc,"This model is also a "),Nr=a(Vc,"A",{href:!0,rel:!0});var Gv=i(Nr);Uk=s(Gv,"tf.keras.Model"),Gv.forEach(t),Hk=s(Vc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vc.forEach(t),Qk=h($t),y(xn.$$.fragment,$t),Vk=h($t),nt=a($t,"DIV",{class:!0});var Nt=i(nt);y(Sr.$$.fragment,Nt),Kk=h(Nt),vo=a(Nt,"P",{});var Ja=i(vo);Jk=s(Ja,"The "),Ra=a(Ja,"A",{href:!0});var Xv=i(Ra);Gk=s(Xv,"TFRemBertForQuestionAnswering"),Xv.forEach(t),Xk=s(Ja," forward method, overrides the "),Gl=a(Ja,"CODE",{});var Yv=i(Gl);Yk=s(Yv,"__call__"),Yv.forEach(t),Zk=s(Ja," special method."),Ja.forEach(t),eb=h(Nt),y(jn.$$.fragment,Nt),tb=h(Nt),y(Ln.$$.fragment,Nt),ob=h(Nt),y(Pn.$$.fragment,Nt),Nt.forEach(t),$t.forEach(t),this.h()},h(){T(d,"name","hf:doc:metadata"),T(d,"content",JSON.stringify(Yy)),T(p,"id","rembert"),T(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(p,"href","#rembert"),T(c,"class","relative group"),T(te,"id","overview"),T(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(te,"href","#overview"),T(z,"class","relative group"),T(se,"href","https://arxiv.org/abs/2010.12821"),T(se,"rel","nofollow"),T(oe,"id","transformers.RemBertConfig"),T(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(oe,"href","#transformers.RemBertConfig"),T(ee,"class","relative group"),T(ye,"href","/docs/transformers/main/en/model_doc/rembert#transformers.RemBertModel"),T(D,"href","https://huggingface.co/google/rembert"),T(D,"rel","nofollow"),T(de,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),T(Yr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),T(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Ro,"id","transformers.RemBertTokenizer"),T(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(Ro,"href","#transformers.RemBertTokenizer"),T(St,"class","relative group"),T(Xn,"href","https://github.com/google/sentencepiece"),T(Xn,"rel","nofollow"),T(Zr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),T(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(oa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Mo,"id","transformers.RemBertTokenizerFast"),T(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(Mo,"href","#transformers.RemBertTokenizerFast"),T(Wt,"class","relative group"),T(is,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),T(is,"rel","nofollow"),T(na,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),T(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(aa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Co,"id","transformers.RemBertModel"),T(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(Co,"href","#transformers.RemBertModel"),T(Ut,"class","relative group"),T(_s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),T(_s,"rel","nofollow"),T(bs,"href","https://arxiv.org/abs/1706.03762"),T(bs,"rel","nofollow"),T(ia,"href","/docs/transformers/main/en/model_doc/rembert#transformers.RemBertModel"),T(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Lo,"id","transformers.RemBertForCausalLM"),T(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(Lo,"href","#transformers.RemBertForCausalLM"),T(Qt,"class","relative group"),T(ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),T(ws,"rel","nofollow"),T(la,"href","/docs/transformers/main/en/model_doc/rembert#transformers.RemBertForCausalLM"),T(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Do,"id","transformers.RemBertForMaskedLM"),T(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(Do,"href","#transformers.RemBertForMaskedLM"),T(Jt,"class","relative group"),T(Bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),T(Bs,"rel","nofollow"),T(da,"href","/docs/transformers/main/en/model_doc/rembert#transformers.RemBertForMaskedLM"),T(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Io,"id","transformers.RemBertForSequenceClassification"),T(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(Io,"href","#transformers.RemBertForSequenceClassification"),T(Yt,"class","relative group"),T(Cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),T(Cs,"rel","nofollow"),T(ca,"href","/docs/transformers/main/en/model_doc/rembert#transformers.RemBertForSequenceClassification"),T(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Ko,"id","transformers.RemBertForMultipleChoice"),T(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(Ko,"href","#transformers.RemBertForMultipleChoice"),T(eo,"class","relative group"),T(Os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),T(Os,"rel","nofollow"),T(pa,"href","/docs/transformers/main/en/model_doc/rembert#transformers.RemBertForMultipleChoice"),T(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Xo,"id","transformers.RemBertForTokenClassification"),T(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(Xo,"href","#transformers.RemBertForTokenClassification"),T(oo,"class","relative group"),T(Is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),T(Is,"rel","nofollow"),T(ma,"href","/docs/transformers/main/en/model_doc/rembert#transformers.RemBertForTokenClassification"),T(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(tn,"id","transformers.RemBertForQuestionAnswering"),T(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(tn,"href","#transformers.RemBertForQuestionAnswering"),T(so,"class","relative group"),T(Vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),T(Vs,"rel","nofollow"),T(ha,"href","/docs/transformers/main/en/model_doc/rembert#transformers.RemBertForQuestionAnswering"),T(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(rn,"id","transformers.TFRemBertModel"),T(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(rn,"href","#transformers.TFRemBertModel"),T(io,"class","relative group"),T(ua,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),T(Zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),T(Zs,"rel","nofollow"),T(fa,"href","/docs/transformers/main/en/model_doc/rembert#transformers.TFRemBertModel"),T(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(cn,"id","transformers.TFRemBertForMaskedLM"),T(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(cn,"href","#transformers.TFRemBertForMaskedLM"),T(co,"class","relative group"),T(ga,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),T(ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),T(ar,"rel","nofollow"),T(_a,"href","/docs/transformers/main/en/model_doc/rembert#transformers.TFRemBertForMaskedLM"),T(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(fn,"id","transformers.TFRemBertForCausalLM"),T(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(fn,"href","#transformers.TFRemBertForCausalLM"),T(mo,"class","relative group"),T(ka,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),T(hr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),T(hr,"rel","nofollow"),T(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(kn,"id","transformers.TFRemBertForSequenceClassification"),T(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(kn,"href","#transformers.TFRemBertForSequenceClassification"),T(ho,"class","relative group"),T(ba,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),T(yr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),T(yr,"rel","nofollow"),T(Ta,"href","/docs/transformers/main/en/model_doc/rembert#transformers.TFRemBertForSequenceClassification"),T(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(wn,"id","transformers.TFRemBertForMultipleChoice"),T(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(wn,"href","#transformers.TFRemBertForMultipleChoice"),T(fo,"class","relative group"),T(va,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),T(Er,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),T(Er,"rel","nofollow"),T(ya,"href","/docs/transformers/main/en/model_doc/rembert#transformers.TFRemBertForMultipleChoice"),T(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Bn,"id","transformers.TFRemBertForTokenClassification"),T(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(Bn,"href","#transformers.TFRemBertForTokenClassification"),T(_o,"class","relative group"),T(wa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),T(jr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),T(jr,"rel","nofollow"),T($a,"href","/docs/transformers/main/en/model_doc/rembert#transformers.TFRemBertForTokenClassification"),T(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Cn,"id","transformers.TFRemBertForQuestionAnswering"),T(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(Cn,"href","#transformers.TFRemBertForQuestionAnswering"),T(bo,"class","relative group"),T(Fa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),T(Nr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),T(Nr,"rel","nofollow"),T(Ra,"href","/docs/transformers/main/en/model_doc/rembert#transformers.TFRemBertForQuestionAnswering"),T(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),T(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),_(o,g,b),_(o,c,b),e(c,p),e(p,k),w(l,k,null),e(c,u),e(c,M),e(M,ue),_(o,X,b),_(o,z,b),e(z,te),e(te,N),w(ne,N,null),e(z,fe),e(z,S),e(S,ge),_(o,pe,b),_(o,J,b),e(J,P),e(J,se),e(se,Z),e(J,q),_(o,x,b),_(o,ae,b),e(ae,H),_(o,me,b),_(o,ie,b),e(ie,I),e(I,_e),_(o,he,b),_(o,C,b),e(C,ke),_(o,W,b),_(o,le,b),e(le,be),_(o,U,b),_(o,ee,b),e(ee,oe),e(oe,L),w(re,L,null),e(ee,Q),e(ee,ce),e(ce,f),_(o,E,b),_(o,A,b),w(ve,A,null),e(A,Re),e(A,j),e(j,Be),e(j,ye),e(ye,Ee),e(j,O),e(j,D),e(D,Me),e(j,ze),e(A,V),e(A,Te),e(Te,qe),e(Te,de),e(de,Ce),e(Te,Kc),e(Te,Yr),e(Yr,Jc),e(Te,Gc),e(A,Xc),w(Fo,A,null),_(o,Rd,b),_(o,St,b),e(St,Ro),e(Ro,Ga),w(Kn,Ga,null),e(St,Yc),e(St,Xa),e(Xa,Zc),_(o,Bd,b),_(o,je,b),w(Jn,je,null),e(je,ep),e(je,Gn),e(Gn,tp),e(Gn,Xn),e(Xn,op),e(Gn,np),e(je,sp),e(je,Yn),e(Yn,rp),e(Yn,Zr),e(Zr,ap),e(Yn,ip),e(je,lp),e(je,zt),w(Zn,zt,null),e(zt,dp),e(zt,Ya),e(Ya,cp),e(zt,pp),e(zt,es),e(es,ea),e(ea,mp),e(ea,Za),e(Za,hp),e(es,up),e(es,ta),e(ta,fp),e(ta,ei),e(ei,gp),e(je,_p),e(je,Bo),w(ts,Bo,null),e(Bo,kp),e(Bo,os),e(os,bp),e(os,ti),e(ti,Tp),e(os,vp),e(je,yp),e(je,ct),w(ns,ct,null),e(ct,wp),e(ct,oi),e(oi,$p),e(ct,Fp),w(Eo,ct,null),e(ct,Rp),e(ct,It),e(It,Bp),e(It,ni),e(ni,Ep),e(It,Mp),e(It,si),e(si,zp),e(It,qp),e(je,Cp),e(je,oa),w(ss,oa,null),_(o,Ed,b),_(o,Wt,b),e(Wt,Mo),e(Mo,ri),w(rs,ri,null),e(Wt,xp),e(Wt,ai),e(ai,jp),_(o,Md,b),_(o,De,b),w(as,De,null),e(De,Lp),e(De,Ft),e(Ft,Pp),e(Ft,ii),e(ii,Op),e(Ft,Dp),e(Ft,is),e(is,Ap),e(Ft,Np),e(Ft,na),e(na,Sp),e(Ft,Ip),e(De,Wp),e(De,qt),w(ls,qt,null),e(qt,Up),e(qt,li),e(li,Hp),e(qt,Qp),e(qt,ds),e(ds,sa),e(sa,Vp),e(sa,di),e(di,Kp),e(ds,Jp),e(ds,ra),e(ra,Gp),e(ra,ci),e(ci,Xp),e(De,Yp),e(De,zo),w(cs,zo,null),e(zo,Zp),e(zo,ps),e(ps,em),e(ps,pi),e(pi,tm),e(ps,om),e(De,nm),e(De,pt),w(ms,pt,null),e(pt,sm),e(pt,mi),e(mi,rm),e(pt,am),w(qo,pt,null),e(pt,im),e(pt,hi),e(hi,lm),e(De,dm),e(De,aa),w(hs,aa,null),_(o,zd,b),_(o,Ut,b),e(Ut,Co),e(Co,ui),w(us,ui,null),e(Ut,cm),e(Ut,fi),e(fi,pm),_(o,qd,b),_(o,Je,b),w(fs,Je,null),e(Je,mm),e(Je,gs),e(gs,hm),e(gs,_s),e(_s,um),e(gs,fm),e(Je,gm),e(Je,ks),e(ks,_m),e(ks,bs),e(bs,km),e(ks,bm),e(Je,Tm),e(Je,Ae),e(Ae,vm),e(Ae,gi),e(gi,ym),e(Ae,wm),e(Ae,_i),e(_i,$m),e(Ae,Fm),e(Ae,ki),e(ki,Rm),e(Ae,Bm),e(Ae,bi),e(bi,Em),e(Ae,Mm),e(Ae,Ti),e(Ti,zm),e(Ae,qm),e(Ae,vi),e(vi,Cm),e(Ae,xm),e(Je,jm),e(Je,mt),w(Ts,mt,null),e(mt,Lm),e(mt,Ht),e(Ht,Pm),e(Ht,ia),e(ia,Om),e(Ht,Dm),e(Ht,yi),e(yi,Am),e(Ht,Nm),e(mt,Sm),w(xo,mt,null),e(mt,Im),w(jo,mt,null),_(o,Cd,b),_(o,Qt,b),e(Qt,Lo),e(Lo,wi),w(vs,wi,null),e(Qt,Wm),e(Qt,$i),e($i,Um),_(o,xd,b),_(o,Rt,b),w(ys,Rt,null),e(Rt,Hm),e(Rt,Vt),e(Vt,Qm),e(Vt,Fi),e(Fi,Vm),e(Vt,Km),e(Vt,ws),e(ws,Jm),e(Vt,Gm),e(Rt,Xm),e(Rt,ht),w($s,ht,null),e(ht,Ym),e(ht,Kt),e(Kt,Zm),e(Kt,la),e(la,eh),e(Kt,th),e(Kt,Ri),e(Ri,oh),e(Kt,nh),e(ht,sh),w(Po,ht,null),e(ht,rh),w(Oo,ht,null),_(o,jd,b),_(o,Jt,b),e(Jt,Do),e(Do,Bi),w(Fs,Bi,null),e(Jt,ah),e(Jt,Ei),e(Ei,ih),_(o,Ld,b),_(o,Bt,b),w(Rs,Bt,null),e(Bt,lh),e(Bt,Gt),e(Gt,dh),e(Gt,Mi),e(Mi,ch),e(Gt,ph),e(Gt,Bs),e(Bs,mh),e(Gt,hh),e(Bt,uh),e(Bt,Ge),w(Es,Ge,null),e(Ge,fh),e(Ge,Xt),e(Xt,gh),e(Xt,da),e(da,_h),e(Xt,kh),e(Xt,zi),e(zi,bh),e(Xt,Th),e(Ge,vh),w(Ao,Ge,null),e(Ge,yh),w(No,Ge,null),e(Ge,wh),w(So,Ge,null),_(o,Pd,b),_(o,Yt,b),e(Yt,Io),e(Io,qi),w(Ms,qi,null),e(Yt,$h),e(Yt,Ci),e(Ci,Fh),_(o,Od,b),_(o,at,b),w(zs,at,null),e(at,Rh),e(at,xi),e(xi,Bh),e(at,Eh),e(at,qs),e(qs,Mh),e(qs,Cs),e(Cs,zh),e(qs,qh),e(at,Ch),e(at,Oe),w(xs,Oe,null),e(Oe,xh),e(Oe,Zt),e(Zt,jh),e(Zt,ca),e(ca,Lh),e(Zt,Ph),e(Zt,ji),e(ji,Oh),e(Zt,Dh),e(Oe,Ah),w(Wo,Oe,null),e(Oe,Nh),w(Uo,Oe,null),e(Oe,Sh),w(Ho,Oe,null),e(Oe,Ih),w(Qo,Oe,null),e(Oe,Wh),w(Vo,Oe,null),_(o,Dd,b),_(o,eo,b),e(eo,Ko),e(Ko,Li),w(js,Li,null),e(eo,Uh),e(eo,Pi),e(Pi,Hh),_(o,Ad,b),_(o,it,b),w(Ls,it,null),e(it,Qh),e(it,Oi),e(Oi,Vh),e(it,Kh),e(it,Ps),e(Ps,Jh),e(Ps,Os),e(Os,Gh),e(Ps,Xh),e(it,Yh),e(it,ut),w(Ds,ut,null),e(ut,Zh),e(ut,to),e(to,eu),e(to,pa),e(pa,tu),e(to,ou),e(to,Di),e(Di,nu),e(to,su),e(ut,ru),w(Jo,ut,null),e(ut,au),w(Go,ut,null),_(o,Nd,b),_(o,oo,b),e(oo,Xo),e(Xo,Ai),w(As,Ai,null),e(oo,iu),e(oo,Ni),e(Ni,lu),_(o,Sd,b),_(o,lt,b),w(Ns,lt,null),e(lt,du),e(lt,Si),e(Si,cu),e(lt,pu),e(lt,Ss),e(Ss,mu),e(Ss,Is),e(Is,hu),e(Ss,uu),e(lt,fu),e(lt,Xe),w(Ws,Xe,null),e(Xe,gu),e(Xe,no),e(no,_u),e(no,ma),e(ma,ku),e(no,bu),e(no,Ii),e(Ii,Tu),e(no,vu),e(Xe,yu),w(Yo,Xe,null),e(Xe,wu),w(Zo,Xe,null),e(Xe,$u),w(en,Xe,null),_(o,Id,b),_(o,so,b),e(so,tn),e(tn,Wi),w(Us,Wi,null),e(so,Fu),e(so,Ui),e(Ui,Ru),_(o,Wd,b),_(o,dt,b),w(Hs,dt,null),e(dt,Bu),e(dt,ro),e(ro,Eu),e(ro,Hi),e(Hi,Mu),e(ro,zu),e(ro,Qi),e(Qi,qu),e(ro,Cu),e(dt,xu),e(dt,Qs),e(Qs,ju),e(Qs,Vs),e(Vs,Lu),e(Qs,Pu),e(dt,Ou),e(dt,Ye),w(Ks,Ye,null),e(Ye,Du),e(Ye,ao),e(ao,Au),e(ao,ha),e(ha,Nu),e(ao,Su),e(ao,Vi),e(Vi,Iu),e(ao,Wu),e(Ye,Uu),w(on,Ye,null),e(Ye,Hu),w(nn,Ye,null),e(Ye,Qu),w(sn,Ye,null),_(o,Ud,b),_(o,io,b),e(io,rn),e(rn,Ki),w(Js,Ki,null),e(io,Vu),e(io,Ji),e(Ji,Ku),_(o,Hd,b),_(o,Ne,b),w(Gs,Ne,null),e(Ne,Ju),e(Ne,Gi),e(Gi,Gu),e(Ne,Xu),e(Ne,Xs),e(Xs,Yu),e(Xs,ua),e(ua,Zu),e(Xs,ef),e(Ne,tf),e(Ne,Ys),e(Ys,of),e(Ys,Zs),e(Zs,nf),e(Ys,sf),e(Ne,rf),w(an,Ne,null),e(Ne,af),e(Ne,ft),w(er,ft,null),e(ft,lf),e(ft,lo),e(lo,df),e(lo,fa),e(fa,cf),e(lo,pf),e(lo,Xi),e(Xi,mf),e(lo,hf),e(ft,uf),w(ln,ft,null),e(ft,ff),w(dn,ft,null),_(o,Qd,b),_(o,co,b),e(co,cn),e(cn,Yi),w(tr,Yi,null),e(co,gf),e(co,Zi),e(Zi,_f),_(o,Vd,b),_(o,Se,b),w(or,Se,null),e(Se,kf),e(Se,nr),e(nr,bf),e(nr,el),e(el,Tf),e(nr,vf),e(Se,yf),e(Se,sr),e(sr,wf),e(sr,ga),e(ga,$f),e(sr,Ff),e(Se,Rf),e(Se,rr),e(rr,Bf),e(rr,ar),e(ar,Ef),e(rr,Mf),e(Se,zf),w(pn,Se,null),e(Se,qf),e(Se,Ze),w(ir,Ze,null),e(Ze,Cf),e(Ze,po),e(po,xf),e(po,_a),e(_a,jf),e(po,Lf),e(po,tl),e(tl,Pf),e(po,Of),e(Ze,Df),w(mn,Ze,null),e(Ze,Af),w(hn,Ze,null),e(Ze,Nf),w(un,Ze,null),_(o,Kd,b),_(o,mo,b),e(mo,fn),e(fn,ol),w(lr,ol,null),e(mo,Sf),e(mo,nl),e(nl,If),_(o,Jd,b),_(o,Ie,b),w(dr,Ie,null),e(Ie,Wf),e(Ie,cr),e(cr,Uf),e(cr,sl),e(sl,Hf),e(cr,Qf),e(Ie,Vf),e(Ie,pr),e(pr,Kf),e(pr,ka),e(ka,Jf),e(pr,Gf),e(Ie,Xf),e(Ie,mr),e(mr,Yf),e(mr,hr),e(hr,Zf),e(mr,eg),e(Ie,tg),w(gn,Ie,null),e(Ie,og),e(Ie,et),w(ur,et,null),e(et,ng),e(et,Le),e(Le,sg),e(Le,rl),e(rl,rg),e(Le,ag),e(Le,al),e(al,ig),e(Le,lg),e(Le,il),e(il,dg),e(Le,cg),e(Le,ll),e(ll,pg),e(Le,mg),e(Le,dl),e(dl,hg),e(Le,ug),e(Le,cl),e(cl,fg),e(Le,gg),e(Le,pl),e(pl,_g),e(Le,kg),e(et,bg),e(et,fr),e(fr,gr),e(gr,Tg),e(gr,ml),e(ml,vg),e(gr,yg),e(fr,wg),e(fr,_r),e(_r,$g),e(_r,hl),e(hl,Fg),e(_r,Rg),e(et,Bg),e(et,K),e(K,Eg),e(K,ul),e(ul,Mg),e(K,zg),e(K,fl),e(fl,qg),e(K,Cg),e(K,gl),e(gl,xg),e(K,jg),e(K,_l),e(_l,Lg),e(K,Pg),e(K,kl),e(kl,Og),e(K,Dg),e(K,bl),e(bl,Ag),e(K,Ng),e(K,Tl),e(Tl,Sg),e(K,Ig),e(K,vl),e(vl,Wg),e(K,Ug),e(K,yl),e(yl,Hg),e(K,Qg),e(K,wl),e(wl,Vg),e(K,Kg),e(K,$l),e($l,Jg),e(K,Gg),e(K,Fl),e(Fl,Xg),e(K,Yg),e(K,Rl),e(Rl,Zg),e(K,e_),e(K,Bl),e(Bl,t_),e(K,o_),e(K,El),e(El,n_),e(K,s_),e(K,Ml),e(Ml,r_),e(K,a_),e(K,zl),e(zl,i_),e(K,l_),e(K,ql),e(ql,d_),e(K,c_),e(K,Cl),e(Cl,p_),e(K,m_),e(K,xl),e(xl,h_),e(K,u_),e(et,f_),w(_n,et,null),_(o,Gd,b),_(o,ho,b),e(ho,kn),e(kn,jl),w(kr,jl,null),e(ho,g_),e(ho,Ll),e(Ll,__),_(o,Xd,b),_(o,We,b),w(br,We,null),e(We,k_),e(We,Pl),e(Pl,b_),e(We,T_),e(We,Tr),e(Tr,v_),e(Tr,ba),e(ba,y_),e(Tr,w_),e(We,$_),e(We,vr),e(vr,F_),e(vr,yr),e(yr,R_),e(vr,B_),e(We,E_),w(bn,We,null),e(We,M_),e(We,tt),w(wr,tt,null),e(tt,z_),e(tt,uo),e(uo,q_),e(uo,Ta),e(Ta,C_),e(uo,x_),e(uo,Ol),e(Ol,j_),e(uo,L_),e(tt,P_),w(Tn,tt,null),e(tt,O_),w(vn,tt,null),e(tt,D_),w(yn,tt,null),_(o,Yd,b),_(o,fo,b),e(fo,wn),e(wn,Dl),w($r,Dl,null),e(fo,A_),e(fo,Al),e(Al,N_),_(o,Zd,b),_(o,Ue,b),w(Fr,Ue,null),e(Ue,S_),e(Ue,Nl),e(Nl,I_),e(Ue,W_),e(Ue,Rr),e(Rr,U_),e(Rr,va),e(va,H_),e(Rr,Q_),e(Ue,V_),e(Ue,Br),e(Br,K_),e(Br,Er),e(Er,J_),e(Br,G_),e(Ue,X_),w($n,Ue,null),e(Ue,Y_),e(Ue,gt),w(Mr,gt,null),e(gt,Z_),e(gt,go),e(go,ek),e(go,ya),e(ya,tk),e(go,ok),e(go,Sl),e(Sl,nk),e(go,sk),e(gt,rk),w(Fn,gt,null),e(gt,ak),w(Rn,gt,null),_(o,ec,b),_(o,_o,b),e(_o,Bn),e(Bn,Il),w(zr,Il,null),e(_o,ik),e(_o,Wl),e(Wl,lk),_(o,tc,b),_(o,He,b),w(qr,He,null),e(He,dk),e(He,Ul),e(Ul,ck),e(He,pk),e(He,Cr),e(Cr,mk),e(Cr,wa),e(wa,hk),e(Cr,uk),e(He,fk),e(He,xr),e(xr,gk),e(xr,jr),e(jr,_k),e(xr,kk),e(He,bk),w(En,He,null),e(He,Tk),e(He,ot),w(Lr,ot,null),e(ot,vk),e(ot,ko),e(ko,yk),e(ko,$a),e($a,wk),e(ko,$k),e(ko,Hl),e(Hl,Fk),e(ko,Rk),e(ot,Bk),w(Mn,ot,null),e(ot,Ek),w(zn,ot,null),e(ot,Mk),w(qn,ot,null),_(o,oc,b),_(o,bo,b),e(bo,Cn),e(Cn,Ql),w(Pr,Ql,null),e(bo,zk),e(bo,Vl),e(Vl,qk),_(o,nc,b),_(o,Qe,b),w(Or,Qe,null),e(Qe,Ck),e(Qe,To),e(To,xk),e(To,Kl),e(Kl,jk),e(To,Lk),e(To,Jl),e(Jl,Pk),e(To,Ok),e(Qe,Dk),e(Qe,Dr),e(Dr,Ak),e(Dr,Fa),e(Fa,Nk),e(Dr,Sk),e(Qe,Ik),e(Qe,Ar),e(Ar,Wk),e(Ar,Nr),e(Nr,Uk),e(Ar,Hk),e(Qe,Qk),w(xn,Qe,null),e(Qe,Vk),e(Qe,nt),w(Sr,nt,null),e(nt,Kk),e(nt,vo),e(vo,Jk),e(vo,Ra),e(Ra,Gk),e(vo,Xk),e(vo,Gl),e(Gl,Yk),e(vo,Zk),e(nt,eb),w(jn,nt,null),e(nt,tb),w(Ln,nt,null),e(nt,ob),w(Pn,nt,null),sc=!0},p(o,[b]){const Ir={};b&2&&(Ir.$$scope={dirty:b,ctx:o}),Fo.$set(Ir);const Xl={};b&2&&(Xl.$$scope={dirty:b,ctx:o}),Eo.$set(Xl);const Yl={};b&2&&(Yl.$$scope={dirty:b,ctx:o}),qo.$set(Yl);const Zl={};b&2&&(Zl.$$scope={dirty:b,ctx:o}),xo.$set(Zl);const Wr={};b&2&&(Wr.$$scope={dirty:b,ctx:o}),jo.$set(Wr);const ed={};b&2&&(ed.$$scope={dirty:b,ctx:o}),Po.$set(ed);const td={};b&2&&(td.$$scope={dirty:b,ctx:o}),Oo.$set(td);const od={};b&2&&(od.$$scope={dirty:b,ctx:o}),Ao.$set(od);const Ur={};b&2&&(Ur.$$scope={dirty:b,ctx:o}),No.$set(Ur);const nd={};b&2&&(nd.$$scope={dirty:b,ctx:o}),So.$set(nd);const sd={};b&2&&(sd.$$scope={dirty:b,ctx:o}),Wo.$set(sd);const rd={};b&2&&(rd.$$scope={dirty:b,ctx:o}),Uo.$set(rd);const ad={};b&2&&(ad.$$scope={dirty:b,ctx:o}),Ho.$set(ad);const id={};b&2&&(id.$$scope={dirty:b,ctx:o}),Qo.$set(id);const ld={};b&2&&(ld.$$scope={dirty:b,ctx:o}),Vo.$set(ld);const Hr={};b&2&&(Hr.$$scope={dirty:b,ctx:o}),Jo.$set(Hr);const dd={};b&2&&(dd.$$scope={dirty:b,ctx:o}),Go.$set(dd);const cd={};b&2&&(cd.$$scope={dirty:b,ctx:o}),Yo.$set(cd);const pd={};b&2&&(pd.$$scope={dirty:b,ctx:o}),Zo.$set(pd);const Et={};b&2&&(Et.$$scope={dirty:b,ctx:o}),en.$set(Et);const yo={};b&2&&(yo.$$scope={dirty:b,ctx:o}),on.$set(yo);const md={};b&2&&(md.$$scope={dirty:b,ctx:o}),nn.$set(md);const hd={};b&2&&(hd.$$scope={dirty:b,ctx:o}),sn.$set(hd);const wo={};b&2&&(wo.$$scope={dirty:b,ctx:o}),an.$set(wo);const ud={};b&2&&(ud.$$scope={dirty:b,ctx:o}),ln.$set(ud);const fd={};b&2&&(fd.$$scope={dirty:b,ctx:o}),dn.$set(fd);const Qr={};b&2&&(Qr.$$scope={dirty:b,ctx:o}),pn.$set(Qr);const gd={};b&2&&(gd.$$scope={dirty:b,ctx:o}),mn.$set(gd);const _d={};b&2&&(_d.$$scope={dirty:b,ctx:o}),hn.$set(_d);const kd={};b&2&&(kd.$$scope={dirty:b,ctx:o}),un.$set(kd);const Ve={};b&2&&(Ve.$$scope={dirty:b,ctx:o}),gn.$set(Ve);const Vr={};b&2&&(Vr.$$scope={dirty:b,ctx:o}),_n.$set(Vr);const bd={};b&2&&(bd.$$scope={dirty:b,ctx:o}),bn.$set(bd);const Kr={};b&2&&(Kr.$$scope={dirty:b,ctx:o}),Tn.$set(Kr);const Td={};b&2&&(Td.$$scope={dirty:b,ctx:o}),vn.$set(Td);const $o={};b&2&&($o.$$scope={dirty:b,ctx:o}),yn.$set($o);const vd={};b&2&&(vd.$$scope={dirty:b,ctx:o}),$n.$set(vd);const Jr={};b&2&&(Jr.$$scope={dirty:b,ctx:o}),Fn.$set(Jr);const Ba={};b&2&&(Ba.$$scope={dirty:b,ctx:o}),Rn.$set(Ba);const yd={};b&2&&(yd.$$scope={dirty:b,ctx:o}),En.$set(yd);const Ea={};b&2&&(Ea.$$scope={dirty:b,ctx:o}),Mn.$set(Ea);const wd={};b&2&&(wd.$$scope={dirty:b,ctx:o}),zn.$set(wd);const Gr={};b&2&&(Gr.$$scope={dirty:b,ctx:o}),qn.$set(Gr);const Xr={};b&2&&(Xr.$$scope={dirty:b,ctx:o}),xn.$set(Xr);const $d={};b&2&&($d.$$scope={dirty:b,ctx:o}),jn.$set($d);const Mt={};b&2&&(Mt.$$scope={dirty:b,ctx:o}),Ln.$set(Mt);const Fd={};b&2&&(Fd.$$scope={dirty:b,ctx:o}),Pn.$set(Fd)},i(o){sc||($(l.$$.fragment,o),$(ne.$$.fragment,o),$(re.$$.fragment,o),$(ve.$$.fragment,o),$(Fo.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Zn.$$.fragment,o),$(ts.$$.fragment,o),$(ns.$$.fragment,o),$(Eo.$$.fragment,o),$(ss.$$.fragment,o),$(rs.$$.fragment,o),$(as.$$.fragment,o),$(ls.$$.fragment,o),$(cs.$$.fragment,o),$(ms.$$.fragment,o),$(qo.$$.fragment,o),$(hs.$$.fragment,o),$(us.$$.fragment,o),$(fs.$$.fragment,o),$(Ts.$$.fragment,o),$(xo.$$.fragment,o),$(jo.$$.fragment,o),$(vs.$$.fragment,o),$(ys.$$.fragment,o),$($s.$$.fragment,o),$(Po.$$.fragment,o),$(Oo.$$.fragment,o),$(Fs.$$.fragment,o),$(Rs.$$.fragment,o),$(Es.$$.fragment,o),$(Ao.$$.fragment,o),$(No.$$.fragment,o),$(So.$$.fragment,o),$(Ms.$$.fragment,o),$(zs.$$.fragment,o),$(xs.$$.fragment,o),$(Wo.$$.fragment,o),$(Uo.$$.fragment,o),$(Ho.$$.fragment,o),$(Qo.$$.fragment,o),$(Vo.$$.fragment,o),$(js.$$.fragment,o),$(Ls.$$.fragment,o),$(Ds.$$.fragment,o),$(Jo.$$.fragment,o),$(Go.$$.fragment,o),$(As.$$.fragment,o),$(Ns.$$.fragment,o),$(Ws.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),$(en.$$.fragment,o),$(Us.$$.fragment,o),$(Hs.$$.fragment,o),$(Ks.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(sn.$$.fragment,o),$(Js.$$.fragment,o),$(Gs.$$.fragment,o),$(an.$$.fragment,o),$(er.$$.fragment,o),$(ln.$$.fragment,o),$(dn.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(pn.$$.fragment,o),$(ir.$$.fragment,o),$(mn.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),$(lr.$$.fragment,o),$(dr.$$.fragment,o),$(gn.$$.fragment,o),$(ur.$$.fragment,o),$(_n.$$.fragment,o),$(kr.$$.fragment,o),$(br.$$.fragment,o),$(bn.$$.fragment,o),$(wr.$$.fragment,o),$(Tn.$$.fragment,o),$(vn.$$.fragment,o),$(yn.$$.fragment,o),$($r.$$.fragment,o),$(Fr.$$.fragment,o),$($n.$$.fragment,o),$(Mr.$$.fragment,o),$(Fn.$$.fragment,o),$(Rn.$$.fragment,o),$(zr.$$.fragment,o),$(qr.$$.fragment,o),$(En.$$.fragment,o),$(Lr.$$.fragment,o),$(Mn.$$.fragment,o),$(zn.$$.fragment,o),$(qn.$$.fragment,o),$(Pr.$$.fragment,o),$(Or.$$.fragment,o),$(xn.$$.fragment,o),$(Sr.$$.fragment,o),$(jn.$$.fragment,o),$(Ln.$$.fragment,o),$(Pn.$$.fragment,o),sc=!0)},o(o){F(l.$$.fragment,o),F(ne.$$.fragment,o),F(re.$$.fragment,o),F(ve.$$.fragment,o),F(Fo.$$.fragment,o),F(Kn.$$.fragment,o),F(Jn.$$.fragment,o),F(Zn.$$.fragment,o),F(ts.$$.fragment,o),F(ns.$$.fragment,o),F(Eo.$$.fragment,o),F(ss.$$.fragment,o),F(rs.$$.fragment,o),F(as.$$.fragment,o),F(ls.$$.fragment,o),F(cs.$$.fragment,o),F(ms.$$.fragment,o),F(qo.$$.fragment,o),F(hs.$$.fragment,o),F(us.$$.fragment,o),F(fs.$$.fragment,o),F(Ts.$$.fragment,o),F(xo.$$.fragment,o),F(jo.$$.fragment,o),F(vs.$$.fragment,o),F(ys.$$.fragment,o),F($s.$$.fragment,o),F(Po.$$.fragment,o),F(Oo.$$.fragment,o),F(Fs.$$.fragment,o),F(Rs.$$.fragment,o),F(Es.$$.fragment,o),F(Ao.$$.fragment,o),F(No.$$.fragment,o),F(So.$$.fragment,o),F(Ms.$$.fragment,o),F(zs.$$.fragment,o),F(xs.$$.fragment,o),F(Wo.$$.fragment,o),F(Uo.$$.fragment,o),F(Ho.$$.fragment,o),F(Qo.$$.fragment,o),F(Vo.$$.fragment,o),F(js.$$.fragment,o),F(Ls.$$.fragment,o),F(Ds.$$.fragment,o),F(Jo.$$.fragment,o),F(Go.$$.fragment,o),F(As.$$.fragment,o),F(Ns.$$.fragment,o),F(Ws.$$.fragment,o),F(Yo.$$.fragment,o),F(Zo.$$.fragment,o),F(en.$$.fragment,o),F(Us.$$.fragment,o),F(Hs.$$.fragment,o),F(Ks.$$.fragment,o),F(on.$$.fragment,o),F(nn.$$.fragment,o),F(sn.$$.fragment,o),F(Js.$$.fragment,o),F(Gs.$$.fragment,o),F(an.$$.fragment,o),F(er.$$.fragment,o),F(ln.$$.fragment,o),F(dn.$$.fragment,o),F(tr.$$.fragment,o),F(or.$$.fragment,o),F(pn.$$.fragment,o),F(ir.$$.fragment,o),F(mn.$$.fragment,o),F(hn.$$.fragment,o),F(un.$$.fragment,o),F(lr.$$.fragment,o),F(dr.$$.fragment,o),F(gn.$$.fragment,o),F(ur.$$.fragment,o),F(_n.$$.fragment,o),F(kr.$$.fragment,o),F(br.$$.fragment,o),F(bn.$$.fragment,o),F(wr.$$.fragment,o),F(Tn.$$.fragment,o),F(vn.$$.fragment,o),F(yn.$$.fragment,o),F($r.$$.fragment,o),F(Fr.$$.fragment,o),F($n.$$.fragment,o),F(Mr.$$.fragment,o),F(Fn.$$.fragment,o),F(Rn.$$.fragment,o),F(zr.$$.fragment,o),F(qr.$$.fragment,o),F(En.$$.fragment,o),F(Lr.$$.fragment,o),F(Mn.$$.fragment,o),F(zn.$$.fragment,o),F(qn.$$.fragment,o),F(Pr.$$.fragment,o),F(Or.$$.fragment,o),F(xn.$$.fragment,o),F(Sr.$$.fragment,o),F(jn.$$.fragment,o),F(Ln.$$.fragment,o),F(Pn.$$.fragment,o),sc=!1},d(o){t(d),o&&t(g),o&&t(c),R(l),o&&t(X),o&&t(z),R(ne),o&&t(pe),o&&t(J),o&&t(x),o&&t(ae),o&&t(me),o&&t(ie),o&&t(he),o&&t(C),o&&t(W),o&&t(le),o&&t(U),o&&t(ee),R(re),o&&t(E),o&&t(A),R(ve),R(Fo),o&&t(Rd),o&&t(St),R(Kn),o&&t(Bd),o&&t(je),R(Jn),R(Zn),R(ts),R(ns),R(Eo),R(ss),o&&t(Ed),o&&t(Wt),R(rs),o&&t(Md),o&&t(De),R(as),R(ls),R(cs),R(ms),R(qo),R(hs),o&&t(zd),o&&t(Ut),R(us),o&&t(qd),o&&t(Je),R(fs),R(Ts),R(xo),R(jo),o&&t(Cd),o&&t(Qt),R(vs),o&&t(xd),o&&t(Rt),R(ys),R($s),R(Po),R(Oo),o&&t(jd),o&&t(Jt),R(Fs),o&&t(Ld),o&&t(Bt),R(Rs),R(Es),R(Ao),R(No),R(So),o&&t(Pd),o&&t(Yt),R(Ms),o&&t(Od),o&&t(at),R(zs),R(xs),R(Wo),R(Uo),R(Ho),R(Qo),R(Vo),o&&t(Dd),o&&t(eo),R(js),o&&t(Ad),o&&t(it),R(Ls),R(Ds),R(Jo),R(Go),o&&t(Nd),o&&t(oo),R(As),o&&t(Sd),o&&t(lt),R(Ns),R(Ws),R(Yo),R(Zo),R(en),o&&t(Id),o&&t(so),R(Us),o&&t(Wd),o&&t(dt),R(Hs),R(Ks),R(on),R(nn),R(sn),o&&t(Ud),o&&t(io),R(Js),o&&t(Hd),o&&t(Ne),R(Gs),R(an),R(er),R(ln),R(dn),o&&t(Qd),o&&t(co),R(tr),o&&t(Vd),o&&t(Se),R(or),R(pn),R(ir),R(mn),R(hn),R(un),o&&t(Kd),o&&t(mo),R(lr),o&&t(Jd),o&&t(Ie),R(dr),R(gn),R(ur),R(_n),o&&t(Gd),o&&t(ho),R(kr),o&&t(Xd),o&&t(We),R(br),R(bn),R(wr),R(Tn),R(vn),R(yn),o&&t(Yd),o&&t(fo),R($r),o&&t(Zd),o&&t(Ue),R(Fr),R($n),R(Mr),R(Fn),R(Rn),o&&t(ec),o&&t(_o),R(zr),o&&t(tc),o&&t(He),R(qr),R(En),R(Lr),R(Mn),R(zn),R(qn),o&&t(oc),o&&t(bo),R(Pr),o&&t(nc),o&&t(Qe),R(Or),R(xn),R(Sr),R(jn),R(Ln),R(Pn)}}}const Yy={local:"rembert",sections:[{local:"overview",title:"Overview"},{local:"transformers.RemBertConfig",title:"RemBertConfig"},{local:"transformers.RemBertTokenizer",title:"RemBertTokenizer"},{local:"transformers.RemBertTokenizerFast",title:"RemBertTokenizerFast"},{local:"transformers.RemBertModel",title:"RemBertModel"},{local:"transformers.RemBertForCausalLM",title:"RemBertForCausalLM"},{local:"transformers.RemBertForMaskedLM",title:"RemBertForMaskedLM"},{local:"transformers.RemBertForSequenceClassification",title:"RemBertForSequenceClassification"},{local:"transformers.RemBertForMultipleChoice",title:"RemBertForMultipleChoice"},{local:"transformers.RemBertForTokenClassification",title:"RemBertForTokenClassification"},{local:"transformers.RemBertForQuestionAnswering",title:"RemBertForQuestionAnswering"},{local:"transformers.TFRemBertModel",title:"TFRemBertModel"},{local:"transformers.TFRemBertForMaskedLM",title:"TFRemBertForMaskedLM"},{local:"transformers.TFRemBertForCausalLM",title:"TFRemBertForCausalLM"},{local:"transformers.TFRemBertForSequenceClassification",title:"TFRemBertForSequenceClassification"},{local:"transformers.TFRemBertForMultipleChoice",title:"TFRemBertForMultipleChoice"},{local:"transformers.TFRemBertForTokenClassification",title:"TFRemBertForTokenClassification"},{local:"transformers.TFRemBertForQuestionAnswering",title:"TFRemBertForQuestionAnswering"}],title:"RemBERT"};function Zy(B){return ny(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class aw extends Zv{constructor(d){super();ey(this,d,Zy,Xy,ty,{})}}export{aw as default,Yy as metadata};
