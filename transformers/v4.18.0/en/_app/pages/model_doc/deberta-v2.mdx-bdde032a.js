import{S as Qg,i as Gg,s as Kg,e as a,k as h,w as T,t as n,M as Jg,c as r,d as t,m,a as i,x as w,h as s,b as u,F as e,g as _,y as $,q as y,o as D,B as E,v as Xg,L as Te}from"../../chunks/vendor-6b77c823.js";import{T as Re}from"../../chunks/Tip-39098574.js";import{D as K}from"../../chunks/Docstring-1088f2fb.js";import{C as we}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Be}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ke}from"../../chunks/ExampleCodeBlock-5212b321.js";function Yg(F){let l,g,c,p,k;return p=new we({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){l=a("p"),g=n("sequence pair mask has the following format:"),c=h(),T(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"sequence pair mask has the following format:"),f.forEach(t),c=m(d),w(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),k=!0},p:Te,i(d){k||(y(p.$$.fragment,d),k=!0)},o(d){D(p.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function Zg(F){let l,g,c,p,k;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,k)},d(d){d&&t(l)}}}function e_(F){let l,g,c,p,k;return p=new we({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2Model
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2Model.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),k=!0},p:Te,i(d){k||(y(p.$$.fragment,d),k=!0)},o(d){D(p.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function t_(F){let l,g,c,p,k;return{c(){l=a("p"),g=n(`Although the recipe for forward pass needs to be defined within
this function, one should call the `),c=a("code"),p=n("Module"),k=n(` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,`Although the recipe for forward pass needs to be defined within
this function, one should call the `),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),k=s(f,` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,k)},d(d){d&&t(l)}}}function o_(F){let l,g,c,p,k;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,k)},d(d){d&&t(l)}}}function n_(F){let l,g,c,p,k;return p=new we({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMaskedLM
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForMaskedLM.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),k=!0},p:Te,i(d){k||(y(p.$$.fragment,d),k=!0)},o(d){D(p.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function s_(F){let l,g;return l=new we({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function a_(F){let l,g,c,p,k;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,k)},d(d){d&&t(l)}}}function r_(F){let l,g,c,p,k;return p=new we({props:{code:`import torch
from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=a("p"),g=n("Example of single-label classification:"),c=h(),T(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example of single-label classification:"),f.forEach(t),c=m(d),w(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),k=!0},p:Te,i(d){k||(y(p.$$.fragment,d),k=!0)},o(d){D(p.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function i_(F){let l,g;return l=new we({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function l_(F){let l,g,c,p,k;return p=new we({props:{code:`import torch
from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=a("p"),g=n("Example of multi-label classification:"),c=h(),T(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example of multi-label classification:"),f.forEach(t),c=m(d),w(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),k=!0},p:Te,i(d){k||(y(p.$$.fragment,d),k=!0)},o(d){D(p.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function d_(F){let l,g;return l=new we({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function c_(F){let l,g,c,p,k;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,k)},d(d){d&&t(l)}}}function p_(F){let l,g,c,p,k;return p=new we({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForTokenClassification
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForTokenClassification.from_pretrained("microsoft/deberta-v2-xlarge")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),k=!0},p:Te,i(d){k||(y(p.$$.fragment,d),k=!0)},o(d){D(p.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function h_(F){let l,g;return l=new we({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function m_(F){let l,g,c,p,k;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,k)},d(d){d&&t(l)}}}function f_(F){let l,g,c,p,k;return p=new we({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForQuestionAnswering.from_pretrained("microsoft/deberta-v2-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),k=!0},p:Te,i(d){k||(y(p.$$.fragment,d),k=!0)},o(d){D(p.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function u_(F){let l,g;return l=new we({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function g_(F){let l,g,c,p,k,d,f,x,de,J,q,Y,S,ee,ce,I,pe,re,N,R,te,Z,M,j,ne,W,ie,se,H,le,ae,z,he,A,me,fe,O,X,ue,P,ge,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),x=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=h(),q=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=h(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=h(),z=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=h(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=r(v,"P",{});var V=i(l);g=s(V,"TF 2.0 models accepts two formats as inputs:"),V.forEach(t),c=m(v),p=r(v,"UL",{});var G=i(p);k=r(G,"LI",{});var Ee=i(k);d=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(G),x=r(G,"LI",{});var De=i(x);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=m(v),q=r(v,"P",{});var C=i(q);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),N=m(v),R=r(v,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=m(v),M=r(v,"UL",{});var B=i(M);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),W=r(L,"CODE",{});var Ve=i(W);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),H=r(L,"CODE",{});var xe=i(H);le=s(xe,"model(inputs_ids)"),xe.forEach(t),L.forEach(t),ae=m(B),z=r(B,"LI",{});var Q=i(z);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(Q,"CODE",{});var ve=i(A);me=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=m(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),B.forEach(t)},m(v,V){_(v,l,V),e(l,g),_(v,c,V),_(v,p,V),e(p,k),e(k,d),e(p,f),e(p,x),e(x,de),_(v,J,V),_(v,q,V),e(q,Y),e(q,S),e(S,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),_(v,N,V),_(v,R,V),e(R,te),_(v,Z,V),_(v,M,V),e(M,j),e(j,ne),e(j,W),e(W,ie),e(j,se),e(j,H),e(H,le),e(M,ae),e(M,z),e(z,he),e(z,A),e(A,me),e(z,fe),e(z,O),e(O,X),e(M,ue),e(M,P),e(P,ge),e(P,U),e(U,oe)},d(v){v&&t(l),v&&t(c),v&&t(p),v&&t(J),v&&t(q),v&&t(N),v&&t(R),v&&t(Z),v&&t(M)}}}function __(F){let l,g,c,p,k;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,k)},d(d){d&&t(l)}}}function b_(F){let l,g,c,p,k;return p=new we({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2Model
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2Model.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2Model.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),k=!0},p:Te,i(d){k||(y(p.$$.fragment,d),k=!0)},o(d){D(p.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function v_(F){let l,g,c,p,k,d,f,x,de,J,q,Y,S,ee,ce,I,pe,re,N,R,te,Z,M,j,ne,W,ie,se,H,le,ae,z,he,A,me,fe,O,X,ue,P,ge,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),x=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=h(),q=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=h(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=h(),z=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=h(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=r(v,"P",{});var V=i(l);g=s(V,"TF 2.0 models accepts two formats as inputs:"),V.forEach(t),c=m(v),p=r(v,"UL",{});var G=i(p);k=r(G,"LI",{});var Ee=i(k);d=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(G),x=r(G,"LI",{});var De=i(x);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=m(v),q=r(v,"P",{});var C=i(q);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),N=m(v),R=r(v,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=m(v),M=r(v,"UL",{});var B=i(M);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),W=r(L,"CODE",{});var Ve=i(W);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),H=r(L,"CODE",{});var xe=i(H);le=s(xe,"model(inputs_ids)"),xe.forEach(t),L.forEach(t),ae=m(B),z=r(B,"LI",{});var Q=i(z);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(Q,"CODE",{});var ve=i(A);me=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=m(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),B.forEach(t)},m(v,V){_(v,l,V),e(l,g),_(v,c,V),_(v,p,V),e(p,k),e(k,d),e(p,f),e(p,x),e(x,de),_(v,J,V),_(v,q,V),e(q,Y),e(q,S),e(S,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),_(v,N,V),_(v,R,V),e(R,te),_(v,Z,V),_(v,M,V),e(M,j),e(j,ne),e(j,W),e(W,ie),e(j,se),e(j,H),e(H,le),e(M,ae),e(M,z),e(z,he),e(z,A),e(A,me),e(z,fe),e(z,O),e(O,X),e(M,ue),e(M,P),e(P,ge),e(P,U),e(U,oe)},d(v){v&&t(l),v&&t(c),v&&t(p),v&&t(J),v&&t(q),v&&t(N),v&&t(R),v&&t(Z),v&&t(M)}}}function k_(F){let l,g,c,p,k;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,k)},d(d){d&&t(l)}}}function T_(F){let l,g,c,p,k;return p=new we({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForMaskedLM.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),k=!0},p:Te,i(d){k||(y(p.$$.fragment,d),k=!0)},o(d){D(p.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function w_(F){let l,g;return l=new we({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function $_(F){let l,g,c,p,k,d,f,x,de,J,q,Y,S,ee,ce,I,pe,re,N,R,te,Z,M,j,ne,W,ie,se,H,le,ae,z,he,A,me,fe,O,X,ue,P,ge,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),x=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=h(),q=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=h(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=h(),z=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=h(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=r(v,"P",{});var V=i(l);g=s(V,"TF 2.0 models accepts two formats as inputs:"),V.forEach(t),c=m(v),p=r(v,"UL",{});var G=i(p);k=r(G,"LI",{});var Ee=i(k);d=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(G),x=r(G,"LI",{});var De=i(x);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=m(v),q=r(v,"P",{});var C=i(q);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),N=m(v),R=r(v,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=m(v),M=r(v,"UL",{});var B=i(M);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),W=r(L,"CODE",{});var Ve=i(W);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),H=r(L,"CODE",{});var xe=i(H);le=s(xe,"model(inputs_ids)"),xe.forEach(t),L.forEach(t),ae=m(B),z=r(B,"LI",{});var Q=i(z);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(Q,"CODE",{});var ve=i(A);me=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=m(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),B.forEach(t)},m(v,V){_(v,l,V),e(l,g),_(v,c,V),_(v,p,V),e(p,k),e(k,d),e(p,f),e(p,x),e(x,de),_(v,J,V),_(v,q,V),e(q,Y),e(q,S),e(S,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),_(v,N,V),_(v,R,V),e(R,te),_(v,Z,V),_(v,M,V),e(M,j),e(j,ne),e(j,W),e(W,ie),e(j,se),e(j,H),e(H,le),e(M,ae),e(M,z),e(z,he),e(z,A),e(A,me),e(z,fe),e(z,O),e(O,X),e(M,ue),e(M,P),e(P,ge),e(P,U),e(U,oe)},d(v){v&&t(l),v&&t(c),v&&t(p),v&&t(J),v&&t(q),v&&t(N),v&&t(R),v&&t(Z),v&&t(M)}}}function y_(F){let l,g,c,p,k;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,k)},d(d){d&&t(l)}}}function D_(F){let l,g,c,p,k;return p=new we({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForSequenceClassification.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),k=!0},p:Te,i(d){k||(y(p.$$.fragment,d),k=!0)},o(d){D(p.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function E_(F){let l,g;return l=new we({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFDebertaV2ForSequenceClassification.from_pretrained("kamalkraj/deberta-v2-xlarge", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function F_(F){let l,g,c,p,k,d,f,x,de,J,q,Y,S,ee,ce,I,pe,re,N,R,te,Z,M,j,ne,W,ie,se,H,le,ae,z,he,A,me,fe,O,X,ue,P,ge,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),x=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=h(),q=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=h(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=h(),z=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=h(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=r(v,"P",{});var V=i(l);g=s(V,"TF 2.0 models accepts two formats as inputs:"),V.forEach(t),c=m(v),p=r(v,"UL",{});var G=i(p);k=r(G,"LI",{});var Ee=i(k);d=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(G),x=r(G,"LI",{});var De=i(x);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=m(v),q=r(v,"P",{});var C=i(q);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),N=m(v),R=r(v,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=m(v),M=r(v,"UL",{});var B=i(M);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),W=r(L,"CODE",{});var Ve=i(W);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),H=r(L,"CODE",{});var xe=i(H);le=s(xe,"model(inputs_ids)"),xe.forEach(t),L.forEach(t),ae=m(B),z=r(B,"LI",{});var Q=i(z);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(Q,"CODE",{});var ve=i(A);me=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=m(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),B.forEach(t)},m(v,V){_(v,l,V),e(l,g),_(v,c,V),_(v,p,V),e(p,k),e(k,d),e(p,f),e(p,x),e(x,de),_(v,J,V),_(v,q,V),e(q,Y),e(q,S),e(S,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),_(v,N,V),_(v,R,V),e(R,te),_(v,Z,V),_(v,M,V),e(M,j),e(j,ne),e(j,W),e(W,ie),e(j,se),e(j,H),e(H,le),e(M,ae),e(M,z),e(z,he),e(z,A),e(A,me),e(z,fe),e(z,O),e(O,X),e(M,ue),e(M,P),e(P,ge),e(P,U),e(U,oe)},d(v){v&&t(l),v&&t(c),v&&t(p),v&&t(J),v&&t(q),v&&t(N),v&&t(R),v&&t(Z),v&&t(M)}}}function V_(F){let l,g,c,p,k;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,k)},d(d){d&&t(l)}}}function x_(F){let l,g,c,p,k;return p=new we({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForTokenClassification.from_pretrained("kamalkraj/deberta-v2-xlarge")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),k=!0},p:Te,i(d){k||(y(p.$$.fragment,d),k=!0)},o(d){D(p.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function q_(F){let l,g;return l=new we({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function M_(F){let l,g,c,p,k,d,f,x,de,J,q,Y,S,ee,ce,I,pe,re,N,R,te,Z,M,j,ne,W,ie,se,H,le,ae,z,he,A,me,fe,O,X,ue,P,ge,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),k=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),x=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=h(),q=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=h(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=h(),z=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=h(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=r(v,"P",{});var V=i(l);g=s(V,"TF 2.0 models accepts two formats as inputs:"),V.forEach(t),c=m(v),p=r(v,"UL",{});var G=i(p);k=r(G,"LI",{});var Ee=i(k);d=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(G),x=r(G,"LI",{});var De=i(x);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=m(v),q=r(v,"P",{});var C=i(q);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),N=m(v),R=r(v,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=m(v),M=r(v,"UL",{});var B=i(M);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),W=r(L,"CODE",{});var Ve=i(W);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),H=r(L,"CODE",{});var xe=i(H);le=s(xe,"model(inputs_ids)"),xe.forEach(t),L.forEach(t),ae=m(B),z=r(B,"LI",{});var Q=i(z);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(Q,"CODE",{});var ve=i(A);me=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=m(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),B.forEach(t)},m(v,V){_(v,l,V),e(l,g),_(v,c,V),_(v,p,V),e(p,k),e(k,d),e(p,f),e(p,x),e(x,de),_(v,J,V),_(v,q,V),e(q,Y),e(q,S),e(S,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),_(v,N,V),_(v,R,V),e(R,te),_(v,Z,V),_(v,M,V),e(M,j),e(j,ne),e(j,W),e(W,ie),e(j,se),e(j,H),e(H,le),e(M,ae),e(M,z),e(z,he),e(z,A),e(A,me),e(z,fe),e(z,O),e(O,X),e(M,ue),e(M,P),e(P,ge),e(P,U),e(U,oe)},d(v){v&&t(l),v&&t(c),v&&t(p),v&&t(J),v&&t(q),v&&t(N),v&&t(R),v&&t(Z),v&&t(M)}}}function z_(F){let l,g,c,p,k;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,k)},d(d){d&&t(l)}}}function j_(F){let l,g,c,p,k;return p=new we({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForQuestionAnswering.from_pretrained("kamalkraj/deberta-v2-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),k=!0},p:Te,i(d){k||(y(p.$$.fragment,d),k=!0)},o(d){D(p.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function C_(F){let l,g;return l=new we({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function P_(F){let l,g,c,p,k,d,f,x,de,J,q,Y,S,ee,ce,I,pe,re,N,R,te,Z,M,j,ne,W,ie,se,H,le,ae,z,he,A,me,fe,O,X,ue,P,ge,U,oe,v,V,G,Ee,De,C,_e,$e,Fe,B,L,Ve,xe,Q,ve,ye,be,qe,Ol,na,Ua,Nl,Wl,Hl,sa,Qa,Ul,Ql,Gl,aa,Ga,Kl,Jl,Mi,tt,Xl,gn,Yl,Zl,_n,ed,td,bn,od,nd,zi,xt,io,Ka,vn,sd,Ja,ad,ji,pt,kn,rd,qt,id,ra,ld,dd,Tn,cd,pd,hd,Mt,md,ia,fd,ud,la,gd,_d,Ci,zt,lo,Xa,wn,bd,Ya,vd,Pi,ze,$n,kd,yn,Td,Dn,wd,$d,yd,ut,En,Dd,Za,Ed,Fd,Fn,er,Vd,xd,tr,qd,Md,co,Vn,zd,jt,jd,or,Cd,Pd,nr,Rd,Bd,Ad,ot,xn,Ld,sr,Sd,Id,po,Od,Ct,Nd,ar,Wd,Hd,rr,Ud,Qd,Gd,da,qn,Ri,Pt,ho,ir,Mn,Kd,lr,Jd,Bi,Xe,zn,Xd,jn,Yd,Cn,Zd,ec,tc,Pn,oc,Rn,nc,sc,ac,nt,Bn,rc,Rt,ic,ca,lc,dc,dr,cc,pc,hc,mo,mc,fo,Ai,Bt,uo,cr,An,fc,pr,uc,Li,ht,Ln,gc,hr,_c,bc,st,Sn,vc,mr,kc,Tc,fr,wc,$c,go,Si,At,_o,ur,In,yc,gr,Dc,Ii,Ye,On,Ec,Lt,Fc,_r,Vc,xc,Nn,qc,Mc,zc,Wn,jc,Hn,Cc,Pc,Rc,Ne,Un,Bc,St,Ac,pa,Lc,Sc,br,Ic,Oc,Nc,bo,Wc,vo,Hc,ko,Oi,It,To,vr,Qn,Uc,kr,Qc,Ni,Ae,Gn,Gc,Tr,Kc,Jc,Kn,Xc,Jn,Yc,Zc,ep,Xn,tp,Yn,op,np,sp,Me,Zn,ap,Ot,rp,ha,ip,lp,wr,dp,cp,pp,wo,hp,$o,mp,yo,fp,Do,up,Eo,Wi,Nt,Fo,$r,es,gp,yr,_p,Hi,Le,ts,bp,Dr,vp,kp,os,Tp,ns,wp,$p,yp,ss,Dp,as,Ep,Fp,Vp,We,rs,xp,Wt,qp,ma,Mp,zp,Er,jp,Cp,Pp,Vo,Rp,xo,Bp,qo,Ui,Ht,Mo,Fr,is,Ap,Vr,Lp,Qi,Se,ls,Sp,Ut,Ip,xr,Op,Np,qr,Wp,Hp,Up,ds,Qp,cs,Gp,Kp,Jp,ps,Xp,hs,Yp,Zp,eh,He,ms,th,Qt,oh,fa,nh,sh,Mr,ah,rh,ih,zo,lh,jo,dh,Co,Gi,Gt,Po,zr,fs,ch,jr,ph,Ki,Ie,us,hh,gs,mh,_s,fh,uh,gh,bs,_h,vs,bh,vh,kh,Ro,Th,at,ks,wh,Kt,$h,ua,yh,Dh,Cr,Eh,Fh,Vh,Bo,xh,Ao,Ji,Jt,Lo,Pr,Ts,qh,Rr,Mh,Xi,mt,ws,zh,Br,jh,Ch,rt,$s,Ph,Ar,Rh,Bh,ys,Ah,Lr,Lh,Sh,Ih,Ze,Oh,Sr,Nh,Wh,Ir,Hh,Uh,Or,Qh,Gh,Nr,Kh,Jh,Yi,Xt,So,Wr,Ds,Xh,Hr,Yh,Zi,Oe,Es,Zh,Yt,em,Ur,tm,om,Fs,nm,sm,am,Vs,rm,xs,im,lm,dm,Io,cm,Ue,qs,pm,Zt,hm,ga,mm,fm,Qr,um,gm,_m,Oo,bm,No,vm,Wo,el,eo,Ho,Gr,Ms,km,Kr,Tm,tl,je,zs,wm,Jr,$m,ym,js,Dm,Cs,Em,Fm,Vm,Ps,xm,Rs,qm,Mm,zm,Uo,jm,Qe,Bs,Cm,to,Pm,_a,Rm,Bm,Xr,Am,Lm,Sm,Qo,Im,Go,Om,Ko,ol,oo,Jo,Yr,As,Nm,Zr,Wm,nl,Ce,Ls,Hm,ei,Um,Qm,Ss,Gm,Is,Km,Jm,Xm,Os,Ym,Ns,Zm,ef,tf,Xo,of,Ge,Ws,nf,no,sf,ba,af,rf,ti,lf,df,cf,Yo,pf,Zo,hf,en,sl,so,tn,oi,Hs,mf,ni,ff,al,Pe,Us,uf,ao,gf,si,_f,bf,ai,vf,kf,Tf,Qs,wf,Gs,$f,yf,Df,Ks,Ef,Js,Ff,Vf,xf,on,qf,Ke,Xs,Mf,ro,zf,va,jf,Cf,ri,Pf,Rf,Bf,nn,Af,sn,Lf,an,rl;return d=new Be({}),ee=new Be({}),vn=new Be({}),kn=new K({props:{name:"class transformers.DebertaV2Config",anchor:"transformers.DebertaV2Config",parameters:[{name:"vocab_size",val:" = 128100"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 24"},{name:"intermediate_size",val:" = 6144"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128100) &#x2014;
Vocabulary size of the DeBERTa-v2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Model">DebertaV2Model</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaV2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DebertaV2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DebertaV2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DebertaV2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 6144) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DebertaV2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code>, <code>&quot;gelu&quot;</code>, <code>&quot;tanh&quot;</code>, <code>&quot;gelu_fast&quot;</code>, <code>&quot;mish&quot;</code>, <code>&quot;linear&quot;</code>, <code>&quot;sigmoid&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.DebertaV2Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DebertaV2Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DebertaV2Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DebertaV2Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/v4.18.0/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaV2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-7) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaV2Config.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaV2Config.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaV2Config.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaV2Config.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaV2Config.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/configuration_deberta_v2.py#L31"}}),wn=new Be({}),$n=new K({props:{name:"class transformers.DebertaV2Tokenizer",anchor:"transformers.DebertaV2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.DebertaV2Tokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaV2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201D;[CLS]&#x201D;) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.
When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.`,name:"bos_token"},{anchor:"transformers.DebertaV2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201D;[SEP]&#x201D;) &#x2014;
The end of sequence token. When building a sequence using special tokens, this is not the token that is
used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.DebertaV2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaV2Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaV2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaV2Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaV2Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.DebertaV2Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L53"}}),En=new K({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L178",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vn=new K({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"},{name:"already_has_special_tokens",val:" = False"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L202",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xn=new K({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L228",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),po=new ke({props:{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Yg]},$$scope:{ctx:F}}}),qn=new K({props:{name:"save_vocabulary",anchor:"transformers.DebertaV2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L261"}}),Mn=new Be({}),zn=new K({props:{name:"class transformers.DebertaV2Model",anchor:"transformers.DebertaV2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L977"}}),Bn=new K({props:{name:"forward",anchor:"transformers.DebertaV2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1001",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mo=new Re({props:{$$slots:{default:[Zg]},$$scope:{ctx:F}}}),fo=new ke({props:{anchor:"transformers.DebertaV2Model.forward.example",$$slots:{default:[e_]},$$scope:{ctx:F}}}),An=new Be({}),Ln=new K({props:{name:"class transformers.DebertaV2PreTrainedModel",anchor:"transformers.DebertaV2PreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L881"}}),Sn=new K({props:{name:"_forward_unimplemented",anchor:"transformers.DebertaV2PreTrainedModel.forward",parameters:[{name:"*input",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/torch/nn/modules/module.py#L190"}}),go=new Re({props:{$$slots:{default:[t_]},$$scope:{ctx:F}}}),In=new Be({}),On=new K({props:{name:"class transformers.DebertaV2ForMaskedLM",anchor:"transformers.DebertaV2ForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1090"}}),Un=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1109",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),bo=new Re({props:{$$slots:{default:[o_]},$$scope:{ctx:F}}}),vo=new ke({props:{anchor:"transformers.DebertaV2ForMaskedLM.forward.example",$$slots:{default:[n_]},$$scope:{ctx:F}}}),ko=new ke({props:{anchor:"transformers.DebertaV2ForMaskedLM.forward.example-2",$$slots:{default:[s_]},$$scope:{ctx:F}}}),Qn=new Be({}),Gn=new K({props:{name:"class transformers.DebertaV2ForSequenceClassification",anchor:"transformers.DebertaV2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1226"}}),Zn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1251",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),wo=new Re({props:{$$slots:{default:[a_]},$$scope:{ctx:F}}}),$o=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example",$$slots:{default:[r_]},$$scope:{ctx:F}}}),yo=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-2",$$slots:{default:[i_]},$$scope:{ctx:F}}}),Do=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-3",$$slots:{default:[l_]},$$scope:{ctx:F}}}),Eo=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-4",$$slots:{default:[d_]},$$scope:{ctx:F}}}),es=new Be({}),ts=new K({props:{name:"class transformers.DebertaV2ForTokenClassification",anchor:"transformers.DebertaV2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1346"}}),rs=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1360",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),Vo=new Re({props:{$$slots:{default:[c_]},$$scope:{ctx:F}}}),xo=new ke({props:{anchor:"transformers.DebertaV2ForTokenClassification.forward.example",$$slots:{default:[p_]},$$scope:{ctx:F}}}),qo=new ke({props:{anchor:"transformers.DebertaV2ForTokenClassification.forward.example-2",$$slots:{default:[h_]},$$scope:{ctx:F}}}),is=new Be({}),ls=new K({props:{name:"class transformers.DebertaV2ForQuestionAnswering",anchor:"transformers.DebertaV2ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1423"}}),ms=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1436",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),zo=new Re({props:{$$slots:{default:[m_]},$$scope:{ctx:F}}}),jo=new ke({props:{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.example",$$slots:{default:[f_]},$$scope:{ctx:F}}}),Co=new ke({props:{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.example-2",$$slots:{default:[u_]},$$scope:{ctx:F}}}),fs=new Be({}),us=new K({props:{name:"class transformers.TFDebertaV2Model",anchor:"transformers.TFDebertaV2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1175"}}),Ro=new Re({props:{$$slots:{default:[g_]},$$scope:{ctx:F}}}),ks=new K({props:{name:"call",anchor:"transformers.TFDebertaV2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2Model.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2Model.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2Model.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1181",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bo=new Re({props:{$$slots:{default:[__]},$$scope:{ctx:F}}}),Ao=new ke({props:{anchor:"transformers.TFDebertaV2Model.call.example",$$slots:{default:[b_]},$$scope:{ctx:F}}}),Ts=new Be({}),ws=new K({props:{name:"class transformers.TFDebertaV2PreTrainedModel",anchor:"transformers.TFDebertaV2PreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1079"}}),$s=new K({props:{name:"call",anchor:"transformers.TFDebertaV2PreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),Ds=new Be({}),Es=new K({props:{name:"class transformers.TFDebertaV2ForMaskedLM",anchor:"transformers.TFDebertaV2ForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1224"}}),Io=new Re({props:{$$slots:{default:[v_]},$$scope:{ctx:F}}}),qs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1240",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),Oo=new Re({props:{$$slots:{default:[k_]},$$scope:{ctx:F}}}),No=new ke({props:{anchor:"transformers.TFDebertaV2ForMaskedLM.call.example",$$slots:{default:[T_]},$$scope:{ctx:F}}}),Wo=new ke({props:{anchor:"transformers.TFDebertaV2ForMaskedLM.call.example-2",$$slots:{default:[w_]},$$scope:{ctx:F}}}),Ms=new Be({}),zs=new K({props:{name:"class transformers.TFDebertaV2ForSequenceClassification",anchor:"transformers.TFDebertaV2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1308"}}),Uo=new Re({props:{$$slots:{default:[$_]},$$scope:{ctx:F}}}),Bs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1326",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),Qo=new Re({props:{$$slots:{default:[y_]},$$scope:{ctx:F}}}),Go=new ke({props:{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.example",$$slots:{default:[D_]},$$scope:{ctx:F}}}),Ko=new ke({props:{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.example-2",$$slots:{default:[E_]},$$scope:{ctx:F}}}),As=new Be({}),Ls=new K({props:{name:"class transformers.TFDebertaV2ForTokenClassification",anchor:"transformers.TFDebertaV2ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1397"}}),Xo=new Re({props:{$$slots:{default:[F_]},$$scope:{ctx:F}}}),Ws=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1409",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),Yo=new Re({props:{$$slots:{default:[V_]},$$scope:{ctx:F}}}),Zo=new ke({props:{anchor:"transformers.TFDebertaV2ForTokenClassification.call.example",$$slots:{default:[x_]},$$scope:{ctx:F}}}),en=new ke({props:{anchor:"transformers.TFDebertaV2ForTokenClassification.call.example-2",$$slots:{default:[q_]},$$scope:{ctx:F}}}),Hs=new Be({}),Us=new K({props:{name:"class transformers.TFDebertaV2ForQuestionAnswering",anchor:"transformers.TFDebertaV2ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1476"}}),on=new Re({props:{$$slots:{default:[M_]},$$scope:{ctx:F}}}),Xs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1487",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),nn=new Re({props:{$$slots:{default:[z_]},$$scope:{ctx:F}}}),sn=new ke({props:{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.example",$$slots:{default:[j_]},$$scope:{ctx:F}}}),an=new ke({props:{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.example-2",$$slots:{default:[C_]},$$scope:{ctx:F}}}),{c(){l=a("meta"),g=h(),c=a("h1"),p=a("a"),k=a("span"),T(d.$$.fragment),f=h(),x=a("span"),de=n("DeBERTa-v2"),J=h(),q=a("h2"),Y=a("a"),S=a("span"),T(ee.$$.fragment),ce=h(),I=a("span"),pe=n("Overview"),re=h(),N=a("p"),R=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),M=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),j=h(),ne=a("p"),W=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ie=h(),se=a("p"),H=n("The abstract from the paper is the following:"),le=h(),ae=a("p"),z=a("em"),he=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),A=a("a"),me=n("https://github.com/microsoft/DeBERTa"),fe=n("."),O=h(),X=a("p"),ue=n("The following information is visible directly on the "),P=a("a"),ge=n(`original implementation
repository`),U=n(`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=a("a"),v=n("blog"),V=h(),G=a("p"),Ee=n("New in v2:"),De=h(),C=a("ul"),_e=a("li"),$e=a("strong"),Fe=n("Vocabulary"),B=n(` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),L=a("a"),Ve=n("sentencepiece-based"),xe=n(" tokenizer."),Q=h(),ve=a("li"),ye=a("strong"),be=n("nGiE(nGram Induced Input Encoding)"),qe=n(` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),Ol=h(),na=a("li"),Ua=a("strong"),Nl=n("Sharing position projection matrix with content projection matrix in attention layer"),Wl=n(` Based on previous
experiments, this can save parameters without affecting the performance.`),Hl=h(),sa=a("li"),Qa=a("strong"),Ul=n("Apply bucket to encode relative positions"),Ql=n(` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),Gl=h(),aa=a("li"),Ga=a("strong"),Kl=n("900M model & 1.5B model"),Jl=n(` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),Mi=h(),tt=a("p"),Xl=n("This model was contributed by "),gn=a("a"),Yl=n("DeBERTa"),Zl=n(`. This model TF 2.0 implementation was
contributed by `),_n=a("a"),ed=n("kamalkraj"),td=n(". The original code can be found "),bn=a("a"),od=n("here"),nd=n("."),zi=h(),xt=a("h2"),io=a("a"),Ka=a("span"),T(vn.$$.fragment),sd=h(),Ja=a("span"),ad=n("DebertaV2Config"),ji=h(),pt=a("div"),T(kn.$$.fragment),rd=h(),qt=a("p"),id=n("This is the configuration class to store the configuration of a "),ra=a("a"),ld=n("DebertaV2Model"),dd=n(`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Tn=a("a"),cd=n("microsoft/deberta-v2-xlarge"),pd=n(" architecture."),hd=h(),Mt=a("p"),md=n("Configuration objects inherit from "),ia=a("a"),fd=n("PretrainedConfig"),ud=n(` and can be used to control the model outputs. Read the
documentation from `),la=a("a"),gd=n("PretrainedConfig"),_d=n(" for more information."),Ci=h(),zt=a("h2"),lo=a("a"),Xa=a("span"),T(wn.$$.fragment),bd=h(),Ya=a("span"),vd=n("DebertaV2Tokenizer"),Pi=h(),ze=a("div"),T($n.$$.fragment),kd=h(),yn=a("p"),Td=n("Constructs a DeBERTa-v2 tokenizer. Based on "),Dn=a("a"),wd=n("SentencePiece"),$d=n("."),yd=h(),ut=a("div"),T(En.$$.fragment),Dd=h(),Za=a("p"),Ed=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Fd=h(),Fn=a("ul"),er=a("li"),Vd=n("single sequence: [CLS] X [SEP]"),xd=h(),tr=a("li"),qd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Md=h(),co=a("div"),T(Vn.$$.fragment),zd=h(),jt=a("p"),jd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),or=a("code"),Cd=n("prepare_for_model"),Pd=n(" or "),nr=a("code"),Rd=n("encode_plus"),Bd=n(" methods."),Ad=h(),ot=a("div"),T(xn.$$.fragment),Ld=h(),sr=a("p"),Sd=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Id=h(),T(po.$$.fragment),Od=h(),Ct=a("p"),Nd=n("If "),ar=a("code"),Wd=n("token_ids_1"),Hd=n(" is "),rr=a("code"),Ud=n("None"),Qd=n(", this method only returns the first portion of the mask (0s)."),Gd=h(),da=a("div"),T(qn.$$.fragment),Ri=h(),Pt=a("h2"),ho=a("a"),ir=a("span"),T(Mn.$$.fragment),Kd=h(),lr=a("span"),Jd=n("DebertaV2Model"),Bi=h(),Xe=a("div"),T(zn.$$.fragment),Xd=h(),jn=a("p"),Yd=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Cn=a("a"),Zd=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ec=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),tc=h(),Pn=a("p"),oc=n("This model is also a PyTorch "),Rn=a("a"),nc=n("torch.nn.Module"),sc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ac=h(),nt=a("div"),T(Bn.$$.fragment),rc=h(),Rt=a("p"),ic=n("The "),ca=a("a"),lc=n("DebertaV2Model"),dc=n(" forward method, overrides the "),dr=a("code"),cc=n("__call__"),pc=n(" special method."),hc=h(),T(mo.$$.fragment),mc=h(),T(fo.$$.fragment),Ai=h(),Bt=a("h2"),uo=a("a"),cr=a("span"),T(An.$$.fragment),fc=h(),pr=a("span"),uc=n("DebertaV2PreTrainedModel"),Li=h(),ht=a("div"),T(Ln.$$.fragment),gc=h(),hr=a("p"),_c=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),bc=h(),st=a("div"),T(Sn.$$.fragment),vc=h(),mr=a("p"),kc=n("Defines the computation performed at every call."),Tc=h(),fr=a("p"),wc=n("Should be overridden by all subclasses."),$c=h(),T(go.$$.fragment),Si=h(),At=a("h2"),_o=a("a"),ur=a("span"),T(In.$$.fragment),yc=h(),gr=a("span"),Dc=n("DebertaV2ForMaskedLM"),Ii=h(),Ye=a("div"),T(On.$$.fragment),Ec=h(),Lt=a("p"),Fc=n("DeBERTa Model with a "),_r=a("code"),Vc=n("language modeling"),xc=n(` head on top.
The DeBERTa model was proposed in `),Nn=a("a"),qc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Mc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),zc=h(),Wn=a("p"),jc=n("This model is also a PyTorch "),Hn=a("a"),Cc=n("torch.nn.Module"),Pc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Rc=h(),Ne=a("div"),T(Un.$$.fragment),Bc=h(),St=a("p"),Ac=n("The "),pa=a("a"),Lc=n("DebertaV2ForMaskedLM"),Sc=n(" forward method, overrides the "),br=a("code"),Ic=n("__call__"),Oc=n(" special method."),Nc=h(),T(bo.$$.fragment),Wc=h(),T(vo.$$.fragment),Hc=h(),T(ko.$$.fragment),Oi=h(),It=a("h2"),To=a("a"),vr=a("span"),T(Qn.$$.fragment),Uc=h(),kr=a("span"),Qc=n("DebertaV2ForSequenceClassification"),Ni=h(),Ae=a("div"),T(Gn.$$.fragment),Gc=h(),Tr=a("p"),Kc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Jc=h(),Kn=a("p"),Xc=n("The DeBERTa model was proposed in "),Jn=a("a"),Yc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Zc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ep=h(),Xn=a("p"),tp=n("This model is also a PyTorch "),Yn=a("a"),op=n("torch.nn.Module"),np=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),sp=h(),Me=a("div"),T(Zn.$$.fragment),ap=h(),Ot=a("p"),rp=n("The "),ha=a("a"),ip=n("DebertaV2ForSequenceClassification"),lp=n(" forward method, overrides the "),wr=a("code"),dp=n("__call__"),cp=n(" special method."),pp=h(),T(wo.$$.fragment),hp=h(),T($o.$$.fragment),mp=h(),T(yo.$$.fragment),fp=h(),T(Do.$$.fragment),up=h(),T(Eo.$$.fragment),Wi=h(),Nt=a("h2"),Fo=a("a"),$r=a("span"),T(es.$$.fragment),gp=h(),yr=a("span"),_p=n("DebertaV2ForTokenClassification"),Hi=h(),Le=a("div"),T(ts.$$.fragment),bp=h(),Dr=a("p"),vp=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),kp=h(),os=a("p"),Tp=n("The DeBERTa model was proposed in "),ns=a("a"),wp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),$p=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),yp=h(),ss=a("p"),Dp=n("This model is also a PyTorch "),as=a("a"),Ep=n("torch.nn.Module"),Fp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Vp=h(),We=a("div"),T(rs.$$.fragment),xp=h(),Wt=a("p"),qp=n("The "),ma=a("a"),Mp=n("DebertaV2ForTokenClassification"),zp=n(" forward method, overrides the "),Er=a("code"),jp=n("__call__"),Cp=n(" special method."),Pp=h(),T(Vo.$$.fragment),Rp=h(),T(xo.$$.fragment),Bp=h(),T(qo.$$.fragment),Ui=h(),Ht=a("h2"),Mo=a("a"),Fr=a("span"),T(is.$$.fragment),Ap=h(),Vr=a("span"),Lp=n("DebertaV2ForQuestionAnswering"),Qi=h(),Se=a("div"),T(ls.$$.fragment),Sp=h(),Ut=a("p"),Ip=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),xr=a("code"),Op=n("span start logits"),Np=n(" and "),qr=a("code"),Wp=n("span end logits"),Hp=n(")."),Up=h(),ds=a("p"),Qp=n("The DeBERTa model was proposed in "),cs=a("a"),Gp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Kp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jp=h(),ps=a("p"),Xp=n("This model is also a PyTorch "),hs=a("a"),Yp=n("torch.nn.Module"),Zp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),eh=h(),He=a("div"),T(ms.$$.fragment),th=h(),Qt=a("p"),oh=n("The "),fa=a("a"),nh=n("DebertaV2ForQuestionAnswering"),sh=n(" forward method, overrides the "),Mr=a("code"),ah=n("__call__"),rh=n(" special method."),ih=h(),T(zo.$$.fragment),lh=h(),T(jo.$$.fragment),dh=h(),T(Co.$$.fragment),Gi=h(),Gt=a("h2"),Po=a("a"),zr=a("span"),T(fs.$$.fragment),ch=h(),jr=a("span"),ph=n("TFDebertaV2Model"),Ki=h(),Ie=a("div"),T(us.$$.fragment),hh=h(),gs=a("p"),mh=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),_s=a("a"),fh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),uh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),gh=h(),bs=a("p"),_h=n("This model is also a "),vs=a("a"),bh=n("tf.keras.Model"),vh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kh=h(),T(Ro.$$.fragment),Th=h(),at=a("div"),T(ks.$$.fragment),wh=h(),Kt=a("p"),$h=n("The "),ua=a("a"),yh=n("TFDebertaV2Model"),Dh=n(" forward method, overrides the "),Cr=a("code"),Eh=n("__call__"),Fh=n(" special method."),Vh=h(),T(Bo.$$.fragment),xh=h(),T(Ao.$$.fragment),Ji=h(),Jt=a("h2"),Lo=a("a"),Pr=a("span"),T(Ts.$$.fragment),qh=h(),Rr=a("span"),Mh=n("TFDebertaV2PreTrainedModel"),Xi=h(),mt=a("div"),T(ws.$$.fragment),zh=h(),Br=a("p"),jh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Ch=h(),rt=a("div"),T($s.$$.fragment),Ph=h(),Ar=a("p"),Rh=n("Calls the model on new inputs and returns the outputs as tensors."),Bh=h(),ys=a("p"),Ah=n("In this case "),Lr=a("code"),Lh=n("call()"),Sh=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Ih=h(),Ze=a("p"),Oh=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Sr=a("code"),Nh=n("tf.keras.Model"),Wh=n(`.
To call a model on an input, always use the `),Ir=a("code"),Hh=n("__call__()"),Uh=n(` method,
i.e. `),Or=a("code"),Qh=n("model(inputs)"),Gh=n(", which relies on the underlying "),Nr=a("code"),Kh=n("call()"),Jh=n(" method."),Yi=h(),Xt=a("h2"),So=a("a"),Wr=a("span"),T(Ds.$$.fragment),Xh=h(),Hr=a("span"),Yh=n("TFDebertaV2ForMaskedLM"),Zi=h(),Oe=a("div"),T(Es.$$.fragment),Zh=h(),Yt=a("p"),em=n("DeBERTa Model with a "),Ur=a("code"),tm=n("language modeling"),om=n(` head on top.
The DeBERTa model was proposed in `),Fs=a("a"),nm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),sm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),am=h(),Vs=a("p"),rm=n("This model is also a "),xs=a("a"),im=n("tf.keras.Model"),lm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dm=h(),T(Io.$$.fragment),cm=h(),Ue=a("div"),T(qs.$$.fragment),pm=h(),Zt=a("p"),hm=n("The "),ga=a("a"),mm=n("TFDebertaV2ForMaskedLM"),fm=n(" forward method, overrides the "),Qr=a("code"),um=n("__call__"),gm=n(" special method."),_m=h(),T(Oo.$$.fragment),bm=h(),T(No.$$.fragment),vm=h(),T(Wo.$$.fragment),el=h(),eo=a("h2"),Ho=a("a"),Gr=a("span"),T(Ms.$$.fragment),km=h(),Kr=a("span"),Tm=n("TFDebertaV2ForSequenceClassification"),tl=h(),je=a("div"),T(zs.$$.fragment),wm=h(),Jr=a("p"),$m=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ym=h(),js=a("p"),Dm=n("The DeBERTa model was proposed in "),Cs=a("a"),Em=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Fm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Vm=h(),Ps=a("p"),xm=n("This model is also a "),Rs=a("a"),qm=n("tf.keras.Model"),Mm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zm=h(),T(Uo.$$.fragment),jm=h(),Qe=a("div"),T(Bs.$$.fragment),Cm=h(),to=a("p"),Pm=n("The "),_a=a("a"),Rm=n("TFDebertaV2ForSequenceClassification"),Bm=n(" forward method, overrides the "),Xr=a("code"),Am=n("__call__"),Lm=n(" special method."),Sm=h(),T(Qo.$$.fragment),Im=h(),T(Go.$$.fragment),Om=h(),T(Ko.$$.fragment),ol=h(),oo=a("h2"),Jo=a("a"),Yr=a("span"),T(As.$$.fragment),Nm=h(),Zr=a("span"),Wm=n("TFDebertaV2ForTokenClassification"),nl=h(),Ce=a("div"),T(Ls.$$.fragment),Hm=h(),ei=a("p"),Um=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Qm=h(),Ss=a("p"),Gm=n("The DeBERTa model was proposed in "),Is=a("a"),Km=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Jm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Xm=h(),Os=a("p"),Ym=n("This model is also a "),Ns=a("a"),Zm=n("tf.keras.Model"),ef=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tf=h(),T(Xo.$$.fragment),of=h(),Ge=a("div"),T(Ws.$$.fragment),nf=h(),no=a("p"),sf=n("The "),ba=a("a"),af=n("TFDebertaV2ForTokenClassification"),rf=n(" forward method, overrides the "),ti=a("code"),lf=n("__call__"),df=n(" special method."),cf=h(),T(Yo.$$.fragment),pf=h(),T(Zo.$$.fragment),hf=h(),T(en.$$.fragment),sl=h(),so=a("h2"),tn=a("a"),oi=a("span"),T(Hs.$$.fragment),mf=h(),ni=a("span"),ff=n("TFDebertaV2ForQuestionAnswering"),al=h(),Pe=a("div"),T(Us.$$.fragment),uf=h(),ao=a("p"),gf=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),si=a("code"),_f=n("span start logits"),bf=n(" and "),ai=a("code"),vf=n("span end logits"),kf=n(")."),Tf=h(),Qs=a("p"),wf=n("The DeBERTa model was proposed in "),Gs=a("a"),$f=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),yf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Df=h(),Ks=a("p"),Ef=n("This model is also a "),Js=a("a"),Ff=n("tf.keras.Model"),Vf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xf=h(),T(on.$$.fragment),qf=h(),Ke=a("div"),T(Xs.$$.fragment),Mf=h(),ro=a("p"),zf=n("The "),va=a("a"),jf=n("TFDebertaV2ForQuestionAnswering"),Cf=n(" forward method, overrides the "),ri=a("code"),Pf=n("__call__"),Rf=n(" special method."),Bf=h(),T(nn.$$.fragment),Af=h(),T(sn.$$.fragment),Lf=h(),T(an.$$.fragment),this.h()},l(o){const b=Jg('[data-svelte="svelte-1phssyn"]',document.head);l=r(b,"META",{name:!0,content:!0}),b.forEach(t),g=m(o),c=r(o,"H1",{class:!0});var Ys=i(c);p=r(Ys,"A",{id:!0,class:!0,href:!0});var ii=i(p);k=r(ii,"SPAN",{});var li=i(k);w(d.$$.fragment,li),li.forEach(t),ii.forEach(t),f=m(Ys),x=r(Ys,"SPAN",{});var di=i(x);de=s(di,"DeBERTa-v2"),di.forEach(t),Ys.forEach(t),J=m(o),q=r(o,"H2",{class:!0});var Zs=i(q);Y=r(Zs,"A",{id:!0,class:!0,href:!0});var ci=i(Y);S=r(ci,"SPAN",{});var pi=i(S);w(ee.$$.fragment,pi),pi.forEach(t),ci.forEach(t),ce=m(Zs),I=r(Zs,"SPAN",{});var hi=i(I);pe=s(hi,"Overview"),hi.forEach(t),Zs.forEach(t),re=m(o),N=r(o,"P",{});var ea=i(N);R=s(ea,"The DeBERTa model was proposed in "),te=r(ea,"A",{href:!0,rel:!0});var mi=i(te);Z=s(mi,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),mi.forEach(t),M=s(ea,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),ea.forEach(t),j=m(o),ne=r(o,"P",{});var fi=i(ne);W=s(fi,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),fi.forEach(t),ie=m(o),se=r(o,"P",{});var ui=i(se);H=s(ui,"The abstract from the paper is the following:"),ui.forEach(t),le=m(o),ae=r(o,"P",{});var gi=i(ae);z=r(gi,"EM",{});var ta=i(z);he=s(ta,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),A=r(ta,"A",{href:!0,rel:!0});var _i=i(A);me=s(_i,"https://github.com/microsoft/DeBERTa"),_i.forEach(t),fe=s(ta,"."),ta.forEach(t),gi.forEach(t),O=m(o),X=r(o,"P",{});var rn=i(X);ue=s(rn,"The following information is visible directly on the "),P=r(rn,"A",{href:!0,rel:!0});var bi=i(P);ge=s(bi,`original implementation
repository`),bi.forEach(t),U=s(rn,`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=r(rn,"A",{href:!0,rel:!0});var vi=i(oe);v=s(vi,"blog"),vi.forEach(t),rn.forEach(t),V=m(o),G=r(o,"P",{});var ki=i(G);Ee=s(ki,"New in v2:"),ki.forEach(t),De=m(o),C=r(o,"UL",{});var et=i(C);_e=r(et,"LI",{});var ln=i(_e);$e=r(ln,"STRONG",{});var Ti=i($e);Fe=s(Ti,"Vocabulary"),Ti.forEach(t),B=s(ln,` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),L=r(ln,"A",{href:!0,rel:!0});var wi=i(L);Ve=s(wi,"sentencepiece-based"),wi.forEach(t),xe=s(ln," tokenizer."),ln.forEach(t),Q=m(et),ve=r(et,"LI",{});var ka=i(ve);ye=r(ka,"STRONG",{});var $i=i(ye);be=s($i,"nGiE(nGram Induced Input Encoding)"),$i.forEach(t),qe=s(ka,` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),ka.forEach(t),Ol=m(et),na=r(et,"LI",{});var Ta=i(na);Ua=r(Ta,"STRONG",{});var yi=i(Ua);Nl=s(yi,"Sharing position projection matrix with content projection matrix in attention layer"),yi.forEach(t),Wl=s(Ta,` Based on previous
experiments, this can save parameters without affecting the performance.`),Ta.forEach(t),Hl=m(et),sa=r(et,"LI",{});var wa=i(sa);Qa=r(wa,"STRONG",{});var Di=i(Qa);Ul=s(Di,"Apply bucket to encode relative positions"),Di.forEach(t),Ql=s(wa,` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),wa.forEach(t),Gl=m(et),aa=r(et,"LI",{});var $a=i(aa);Ga=r($a,"STRONG",{});var Ei=i(Ga);Kl=s(Ei,"900M model & 1.5B model"),Ei.forEach(t),Jl=s($a,` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),$a.forEach(t),et.forEach(t),Mi=m(o),tt=r(o,"P",{});var ft=i(tt);Xl=s(ft,"This model was contributed by "),gn=r(ft,"A",{href:!0,rel:!0});var Fi=i(gn);Yl=s(Fi,"DeBERTa"),Fi.forEach(t),Zl=s(ft,`. This model TF 2.0 implementation was
contributed by `),_n=r(ft,"A",{href:!0,rel:!0});var Vi=i(_n);ed=s(Vi,"kamalkraj"),Vi.forEach(t),td=s(ft,". The original code can be found "),bn=r(ft,"A",{href:!0,rel:!0});var xi=i(bn);od=s(xi,"here"),xi.forEach(t),nd=s(ft,"."),ft.forEach(t),zi=m(o),xt=r(o,"H2",{class:!0});var oa=i(xt);io=r(oa,"A",{id:!0,class:!0,href:!0});var qi=i(io);Ka=r(qi,"SPAN",{});var Sf=i(Ka);w(vn.$$.fragment,Sf),Sf.forEach(t),qi.forEach(t),sd=m(oa),Ja=r(oa,"SPAN",{});var If=i(Ja);ad=s(If,"DebertaV2Config"),If.forEach(t),oa.forEach(t),ji=m(o),pt=r(o,"DIV",{class:!0});var ya=i(pt);w(kn.$$.fragment,ya),rd=m(ya),qt=r(ya,"P",{});var Da=i(qt);id=s(Da,"This is the configuration class to store the configuration of a "),ra=r(Da,"A",{href:!0});var Of=i(ra);ld=s(Of,"DebertaV2Model"),Of.forEach(t),dd=s(Da,`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Tn=r(Da,"A",{href:!0,rel:!0});var Nf=i(Tn);cd=s(Nf,"microsoft/deberta-v2-xlarge"),Nf.forEach(t),pd=s(Da," architecture."),Da.forEach(t),hd=m(ya),Mt=r(ya,"P",{});var Ea=i(Mt);md=s(Ea,"Configuration objects inherit from "),ia=r(Ea,"A",{href:!0});var Wf=i(ia);fd=s(Wf,"PretrainedConfig"),Wf.forEach(t),ud=s(Ea,` and can be used to control the model outputs. Read the
documentation from `),la=r(Ea,"A",{href:!0});var Hf=i(la);gd=s(Hf,"PretrainedConfig"),Hf.forEach(t),_d=s(Ea," for more information."),Ea.forEach(t),ya.forEach(t),Ci=m(o),zt=r(o,"H2",{class:!0});var il=i(zt);lo=r(il,"A",{id:!0,class:!0,href:!0});var Uf=i(lo);Xa=r(Uf,"SPAN",{});var Qf=i(Xa);w(wn.$$.fragment,Qf),Qf.forEach(t),Uf.forEach(t),bd=m(il),Ya=r(il,"SPAN",{});var Gf=i(Ya);vd=s(Gf,"DebertaV2Tokenizer"),Gf.forEach(t),il.forEach(t),Pi=m(o),ze=r(o,"DIV",{class:!0});var it=i(ze);w($n.$$.fragment,it),kd=m(it),yn=r(it,"P",{});var ll=i(yn);Td=s(ll,"Constructs a DeBERTa-v2 tokenizer. Based on "),Dn=r(ll,"A",{href:!0,rel:!0});var Kf=i(Dn);wd=s(Kf,"SentencePiece"),Kf.forEach(t),$d=s(ll,"."),ll.forEach(t),yd=m(it),ut=r(it,"DIV",{class:!0});var Fa=i(ut);w(En.$$.fragment,Fa),Dd=m(Fa),Za=r(Fa,"P",{});var Jf=i(Za);Ed=s(Jf,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Jf.forEach(t),Fd=m(Fa),Fn=r(Fa,"UL",{});var dl=i(Fn);er=r(dl,"LI",{});var Xf=i(er);Vd=s(Xf,"single sequence: [CLS] X [SEP]"),Xf.forEach(t),xd=m(dl),tr=r(dl,"LI",{});var Yf=i(tr);qd=s(Yf,"pair of sequences: [CLS] A [SEP] B [SEP]"),Yf.forEach(t),dl.forEach(t),Fa.forEach(t),Md=m(it),co=r(it,"DIV",{class:!0});var cl=i(co);w(Vn.$$.fragment,cl),zd=m(cl),jt=r(cl,"P",{});var Va=i(jt);jd=s(Va,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),or=r(Va,"CODE",{});var Zf=i(or);Cd=s(Zf,"prepare_for_model"),Zf.forEach(t),Pd=s(Va," or "),nr=r(Va,"CODE",{});var eu=i(nr);Rd=s(eu,"encode_plus"),eu.forEach(t),Bd=s(Va," methods."),Va.forEach(t),cl.forEach(t),Ad=m(it),ot=r(it,"DIV",{class:!0});var dn=i(ot);w(xn.$$.fragment,dn),Ld=m(dn),sr=r(dn,"P",{});var tu=i(sr);Sd=s(tu,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),tu.forEach(t),Id=m(dn),w(po.$$.fragment,dn),Od=m(dn),Ct=r(dn,"P",{});var xa=i(Ct);Nd=s(xa,"If "),ar=r(xa,"CODE",{});var ou=i(ar);Wd=s(ou,"token_ids_1"),ou.forEach(t),Hd=s(xa," is "),rr=r(xa,"CODE",{});var nu=i(rr);Ud=s(nu,"None"),nu.forEach(t),Qd=s(xa,", this method only returns the first portion of the mask (0s)."),xa.forEach(t),dn.forEach(t),Gd=m(it),da=r(it,"DIV",{class:!0});var su=i(da);w(qn.$$.fragment,su),su.forEach(t),it.forEach(t),Ri=m(o),Pt=r(o,"H2",{class:!0});var pl=i(Pt);ho=r(pl,"A",{id:!0,class:!0,href:!0});var au=i(ho);ir=r(au,"SPAN",{});var ru=i(ir);w(Mn.$$.fragment,ru),ru.forEach(t),au.forEach(t),Kd=m(pl),lr=r(pl,"SPAN",{});var iu=i(lr);Jd=s(iu,"DebertaV2Model"),iu.forEach(t),pl.forEach(t),Bi=m(o),Xe=r(o,"DIV",{class:!0});var cn=i(Xe);w(zn.$$.fragment,cn),Xd=m(cn),jn=r(cn,"P",{});var hl=i(jn);Yd=s(hl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Cn=r(hl,"A",{href:!0,rel:!0});var lu=i(Cn);Zd=s(lu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),lu.forEach(t),ec=s(hl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),hl.forEach(t),tc=m(cn),Pn=r(cn,"P",{});var ml=i(Pn);oc=s(ml,"This model is also a PyTorch "),Rn=r(ml,"A",{href:!0,rel:!0});var du=i(Rn);nc=s(du,"torch.nn.Module"),du.forEach(t),sc=s(ml," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ml.forEach(t),ac=m(cn),nt=r(cn,"DIV",{class:!0});var pn=i(nt);w(Bn.$$.fragment,pn),rc=m(pn),Rt=r(pn,"P",{});var qa=i(Rt);ic=s(qa,"The "),ca=r(qa,"A",{href:!0});var cu=i(ca);lc=s(cu,"DebertaV2Model"),cu.forEach(t),dc=s(qa," forward method, overrides the "),dr=r(qa,"CODE",{});var pu=i(dr);cc=s(pu,"__call__"),pu.forEach(t),pc=s(qa," special method."),qa.forEach(t),hc=m(pn),w(mo.$$.fragment,pn),mc=m(pn),w(fo.$$.fragment,pn),pn.forEach(t),cn.forEach(t),Ai=m(o),Bt=r(o,"H2",{class:!0});var fl=i(Bt);uo=r(fl,"A",{id:!0,class:!0,href:!0});var hu=i(uo);cr=r(hu,"SPAN",{});var mu=i(cr);w(An.$$.fragment,mu),mu.forEach(t),hu.forEach(t),fc=m(fl),pr=r(fl,"SPAN",{});var fu=i(pr);uc=s(fu,"DebertaV2PreTrainedModel"),fu.forEach(t),fl.forEach(t),Li=m(o),ht=r(o,"DIV",{class:!0});var Ma=i(ht);w(Ln.$$.fragment,Ma),gc=m(Ma),hr=r(Ma,"P",{});var uu=i(hr);_c=s(uu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),uu.forEach(t),bc=m(Ma),st=r(Ma,"DIV",{class:!0});var hn=i(st);w(Sn.$$.fragment,hn),vc=m(hn),mr=r(hn,"P",{});var gu=i(mr);kc=s(gu,"Defines the computation performed at every call."),gu.forEach(t),Tc=m(hn),fr=r(hn,"P",{});var _u=i(fr);wc=s(_u,"Should be overridden by all subclasses."),_u.forEach(t),$c=m(hn),w(go.$$.fragment,hn),hn.forEach(t),Ma.forEach(t),Si=m(o),At=r(o,"H2",{class:!0});var ul=i(At);_o=r(ul,"A",{id:!0,class:!0,href:!0});var bu=i(_o);ur=r(bu,"SPAN",{});var vu=i(ur);w(In.$$.fragment,vu),vu.forEach(t),bu.forEach(t),yc=m(ul),gr=r(ul,"SPAN",{});var ku=i(gr);Dc=s(ku,"DebertaV2ForMaskedLM"),ku.forEach(t),ul.forEach(t),Ii=m(o),Ye=r(o,"DIV",{class:!0});var mn=i(Ye);w(On.$$.fragment,mn),Ec=m(mn),Lt=r(mn,"P",{});var za=i(Lt);Fc=s(za,"DeBERTa Model with a "),_r=r(za,"CODE",{});var Tu=i(_r);Vc=s(Tu,"language modeling"),Tu.forEach(t),xc=s(za,` head on top.
The DeBERTa model was proposed in `),Nn=r(za,"A",{href:!0,rel:!0});var wu=i(Nn);qc=s(wu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),wu.forEach(t),Mc=s(za,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),za.forEach(t),zc=m(mn),Wn=r(mn,"P",{});var gl=i(Wn);jc=s(gl,"This model is also a PyTorch "),Hn=r(gl,"A",{href:!0,rel:!0});var $u=i(Hn);Cc=s($u,"torch.nn.Module"),$u.forEach(t),Pc=s(gl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),gl.forEach(t),Rc=m(mn),Ne=r(mn,"DIV",{class:!0});var gt=i(Ne);w(Un.$$.fragment,gt),Bc=m(gt),St=r(gt,"P",{});var ja=i(St);Ac=s(ja,"The "),pa=r(ja,"A",{href:!0});var yu=i(pa);Lc=s(yu,"DebertaV2ForMaskedLM"),yu.forEach(t),Sc=s(ja," forward method, overrides the "),br=r(ja,"CODE",{});var Du=i(br);Ic=s(Du,"__call__"),Du.forEach(t),Oc=s(ja," special method."),ja.forEach(t),Nc=m(gt),w(bo.$$.fragment,gt),Wc=m(gt),w(vo.$$.fragment,gt),Hc=m(gt),w(ko.$$.fragment,gt),gt.forEach(t),mn.forEach(t),Oi=m(o),It=r(o,"H2",{class:!0});var _l=i(It);To=r(_l,"A",{id:!0,class:!0,href:!0});var Eu=i(To);vr=r(Eu,"SPAN",{});var Fu=i(vr);w(Qn.$$.fragment,Fu),Fu.forEach(t),Eu.forEach(t),Uc=m(_l),kr=r(_l,"SPAN",{});var Vu=i(kr);Qc=s(Vu,"DebertaV2ForSequenceClassification"),Vu.forEach(t),_l.forEach(t),Ni=m(o),Ae=r(o,"DIV",{class:!0});var _t=i(Ae);w(Gn.$$.fragment,_t),Gc=m(_t),Tr=r(_t,"P",{});var xu=i(Tr);Kc=s(xu,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),xu.forEach(t),Jc=m(_t),Kn=r(_t,"P",{});var bl=i(Kn);Xc=s(bl,"The DeBERTa model was proposed in "),Jn=r(bl,"A",{href:!0,rel:!0});var qu=i(Jn);Yc=s(qu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qu.forEach(t),Zc=s(bl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),bl.forEach(t),ep=m(_t),Xn=r(_t,"P",{});var vl=i(Xn);tp=s(vl,"This model is also a PyTorch "),Yn=r(vl,"A",{href:!0,rel:!0});var Mu=i(Yn);op=s(Mu,"torch.nn.Module"),Mu.forEach(t),np=s(vl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),vl.forEach(t),sp=m(_t),Me=r(_t,"DIV",{class:!0});var Je=i(Me);w(Zn.$$.fragment,Je),ap=m(Je),Ot=r(Je,"P",{});var Ca=i(Ot);rp=s(Ca,"The "),ha=r(Ca,"A",{href:!0});var zu=i(ha);ip=s(zu,"DebertaV2ForSequenceClassification"),zu.forEach(t),lp=s(Ca," forward method, overrides the "),wr=r(Ca,"CODE",{});var ju=i(wr);dp=s(ju,"__call__"),ju.forEach(t),cp=s(Ca," special method."),Ca.forEach(t),pp=m(Je),w(wo.$$.fragment,Je),hp=m(Je),w($o.$$.fragment,Je),mp=m(Je),w(yo.$$.fragment,Je),fp=m(Je),w(Do.$$.fragment,Je),up=m(Je),w(Eo.$$.fragment,Je),Je.forEach(t),_t.forEach(t),Wi=m(o),Nt=r(o,"H2",{class:!0});var kl=i(Nt);Fo=r(kl,"A",{id:!0,class:!0,href:!0});var Cu=i(Fo);$r=r(Cu,"SPAN",{});var Pu=i($r);w(es.$$.fragment,Pu),Pu.forEach(t),Cu.forEach(t),gp=m(kl),yr=r(kl,"SPAN",{});var Ru=i(yr);_p=s(Ru,"DebertaV2ForTokenClassification"),Ru.forEach(t),kl.forEach(t),Hi=m(o),Le=r(o,"DIV",{class:!0});var bt=i(Le);w(ts.$$.fragment,bt),bp=m(bt),Dr=r(bt,"P",{});var Bu=i(Dr);vp=s(Bu,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Bu.forEach(t),kp=m(bt),os=r(bt,"P",{});var Tl=i(os);Tp=s(Tl,"The DeBERTa model was proposed in "),ns=r(Tl,"A",{href:!0,rel:!0});var Au=i(ns);wp=s(Au,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Au.forEach(t),$p=s(Tl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tl.forEach(t),yp=m(bt),ss=r(bt,"P",{});var wl=i(ss);Dp=s(wl,"This model is also a PyTorch "),as=r(wl,"A",{href:!0,rel:!0});var Lu=i(as);Ep=s(Lu,"torch.nn.Module"),Lu.forEach(t),Fp=s(wl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),wl.forEach(t),Vp=m(bt),We=r(bt,"DIV",{class:!0});var vt=i(We);w(rs.$$.fragment,vt),xp=m(vt),Wt=r(vt,"P",{});var Pa=i(Wt);qp=s(Pa,"The "),ma=r(Pa,"A",{href:!0});var Su=i(ma);Mp=s(Su,"DebertaV2ForTokenClassification"),Su.forEach(t),zp=s(Pa," forward method, overrides the "),Er=r(Pa,"CODE",{});var Iu=i(Er);jp=s(Iu,"__call__"),Iu.forEach(t),Cp=s(Pa," special method."),Pa.forEach(t),Pp=m(vt),w(Vo.$$.fragment,vt),Rp=m(vt),w(xo.$$.fragment,vt),Bp=m(vt),w(qo.$$.fragment,vt),vt.forEach(t),bt.forEach(t),Ui=m(o),Ht=r(o,"H2",{class:!0});var $l=i(Ht);Mo=r($l,"A",{id:!0,class:!0,href:!0});var Ou=i(Mo);Fr=r(Ou,"SPAN",{});var Nu=i(Fr);w(is.$$.fragment,Nu),Nu.forEach(t),Ou.forEach(t),Ap=m($l),Vr=r($l,"SPAN",{});var Wu=i(Vr);Lp=s(Wu,"DebertaV2ForQuestionAnswering"),Wu.forEach(t),$l.forEach(t),Qi=m(o),Se=r(o,"DIV",{class:!0});var kt=i(Se);w(ls.$$.fragment,kt),Sp=m(kt),Ut=r(kt,"P",{});var Ra=i(Ut);Ip=s(Ra,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),xr=r(Ra,"CODE",{});var Hu=i(xr);Op=s(Hu,"span start logits"),Hu.forEach(t),Np=s(Ra," and "),qr=r(Ra,"CODE",{});var Uu=i(qr);Wp=s(Uu,"span end logits"),Uu.forEach(t),Hp=s(Ra,")."),Ra.forEach(t),Up=m(kt),ds=r(kt,"P",{});var yl=i(ds);Qp=s(yl,"The DeBERTa model was proposed in "),cs=r(yl,"A",{href:!0,rel:!0});var Qu=i(cs);Gp=s(Qu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Qu.forEach(t),Kp=s(yl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),yl.forEach(t),Jp=m(kt),ps=r(kt,"P",{});var Dl=i(ps);Xp=s(Dl,"This model is also a PyTorch "),hs=r(Dl,"A",{href:!0,rel:!0});var Gu=i(hs);Yp=s(Gu,"torch.nn.Module"),Gu.forEach(t),Zp=s(Dl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Dl.forEach(t),eh=m(kt),He=r(kt,"DIV",{class:!0});var Tt=i(He);w(ms.$$.fragment,Tt),th=m(Tt),Qt=r(Tt,"P",{});var Ba=i(Qt);oh=s(Ba,"The "),fa=r(Ba,"A",{href:!0});var Ku=i(fa);nh=s(Ku,"DebertaV2ForQuestionAnswering"),Ku.forEach(t),sh=s(Ba," forward method, overrides the "),Mr=r(Ba,"CODE",{});var Ju=i(Mr);ah=s(Ju,"__call__"),Ju.forEach(t),rh=s(Ba," special method."),Ba.forEach(t),ih=m(Tt),w(zo.$$.fragment,Tt),lh=m(Tt),w(jo.$$.fragment,Tt),dh=m(Tt),w(Co.$$.fragment,Tt),Tt.forEach(t),kt.forEach(t),Gi=m(o),Gt=r(o,"H2",{class:!0});var El=i(Gt);Po=r(El,"A",{id:!0,class:!0,href:!0});var Xu=i(Po);zr=r(Xu,"SPAN",{});var Yu=i(zr);w(fs.$$.fragment,Yu),Yu.forEach(t),Xu.forEach(t),ch=m(El),jr=r(El,"SPAN",{});var Zu=i(jr);ph=s(Zu,"TFDebertaV2Model"),Zu.forEach(t),El.forEach(t),Ki=m(o),Ie=r(o,"DIV",{class:!0});var wt=i(Ie);w(us.$$.fragment,wt),hh=m(wt),gs=r(wt,"P",{});var Fl=i(gs);mh=s(Fl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),_s=r(Fl,"A",{href:!0,rel:!0});var eg=i(_s);fh=s(eg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),eg.forEach(t),uh=s(Fl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Fl.forEach(t),gh=m(wt),bs=r(wt,"P",{});var Vl=i(bs);_h=s(Vl,"This model is also a "),vs=r(Vl,"A",{href:!0,rel:!0});var tg=i(vs);bh=s(tg,"tf.keras.Model"),tg.forEach(t),vh=s(Vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vl.forEach(t),kh=m(wt),w(Ro.$$.fragment,wt),Th=m(wt),at=r(wt,"DIV",{class:!0});var fn=i(at);w(ks.$$.fragment,fn),wh=m(fn),Kt=r(fn,"P",{});var Aa=i(Kt);$h=s(Aa,"The "),ua=r(Aa,"A",{href:!0});var og=i(ua);yh=s(og,"TFDebertaV2Model"),og.forEach(t),Dh=s(Aa," forward method, overrides the "),Cr=r(Aa,"CODE",{});var ng=i(Cr);Eh=s(ng,"__call__"),ng.forEach(t),Fh=s(Aa," special method."),Aa.forEach(t),Vh=m(fn),w(Bo.$$.fragment,fn),xh=m(fn),w(Ao.$$.fragment,fn),fn.forEach(t),wt.forEach(t),Ji=m(o),Jt=r(o,"H2",{class:!0});var xl=i(Jt);Lo=r(xl,"A",{id:!0,class:!0,href:!0});var sg=i(Lo);Pr=r(sg,"SPAN",{});var ag=i(Pr);w(Ts.$$.fragment,ag),ag.forEach(t),sg.forEach(t),qh=m(xl),Rr=r(xl,"SPAN",{});var rg=i(Rr);Mh=s(rg,"TFDebertaV2PreTrainedModel"),rg.forEach(t),xl.forEach(t),Xi=m(o),mt=r(o,"DIV",{class:!0});var La=i(mt);w(ws.$$.fragment,La),zh=m(La),Br=r(La,"P",{});var ig=i(Br);jh=s(ig,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),ig.forEach(t),Ch=m(La),rt=r(La,"DIV",{class:!0});var un=i(rt);w($s.$$.fragment,un),Ph=m(un),Ar=r(un,"P",{});var lg=i(Ar);Rh=s(lg,"Calls the model on new inputs and returns the outputs as tensors."),lg.forEach(t),Bh=m(un),ys=r(un,"P",{});var ql=i(ys);Ah=s(ql,"In this case "),Lr=r(ql,"CODE",{});var dg=i(Lr);Lh=s(dg,"call()"),dg.forEach(t),Sh=s(ql,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),ql.forEach(t),Ih=m(un),Ze=r(un,"P",{});var $t=i(Ze);Oh=s($t,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Sr=r($t,"CODE",{});var cg=i(Sr);Nh=s(cg,"tf.keras.Model"),cg.forEach(t),Wh=s($t,`.
To call a model on an input, always use the `),Ir=r($t,"CODE",{});var pg=i(Ir);Hh=s(pg,"__call__()"),pg.forEach(t),Uh=s($t,` method,
i.e. `),Or=r($t,"CODE",{});var hg=i(Or);Qh=s(hg,"model(inputs)"),hg.forEach(t),Gh=s($t,", which relies on the underlying "),Nr=r($t,"CODE",{});var mg=i(Nr);Kh=s(mg,"call()"),mg.forEach(t),Jh=s($t," method."),$t.forEach(t),un.forEach(t),La.forEach(t),Yi=m(o),Xt=r(o,"H2",{class:!0});var Ml=i(Xt);So=r(Ml,"A",{id:!0,class:!0,href:!0});var fg=i(So);Wr=r(fg,"SPAN",{});var ug=i(Wr);w(Ds.$$.fragment,ug),ug.forEach(t),fg.forEach(t),Xh=m(Ml),Hr=r(Ml,"SPAN",{});var gg=i(Hr);Yh=s(gg,"TFDebertaV2ForMaskedLM"),gg.forEach(t),Ml.forEach(t),Zi=m(o),Oe=r(o,"DIV",{class:!0});var yt=i(Oe);w(Es.$$.fragment,yt),Zh=m(yt),Yt=r(yt,"P",{});var Sa=i(Yt);em=s(Sa,"DeBERTa Model with a "),Ur=r(Sa,"CODE",{});var _g=i(Ur);tm=s(_g,"language modeling"),_g.forEach(t),om=s(Sa,` head on top.
The DeBERTa model was proposed in `),Fs=r(Sa,"A",{href:!0,rel:!0});var bg=i(Fs);nm=s(bg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),bg.forEach(t),sm=s(Sa,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Sa.forEach(t),am=m(yt),Vs=r(yt,"P",{});var zl=i(Vs);rm=s(zl,"This model is also a "),xs=r(zl,"A",{href:!0,rel:!0});var vg=i(xs);im=s(vg,"tf.keras.Model"),vg.forEach(t),lm=s(zl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zl.forEach(t),dm=m(yt),w(Io.$$.fragment,yt),cm=m(yt),Ue=r(yt,"DIV",{class:!0});var Dt=i(Ue);w(qs.$$.fragment,Dt),pm=m(Dt),Zt=r(Dt,"P",{});var Ia=i(Zt);hm=s(Ia,"The "),ga=r(Ia,"A",{href:!0});var kg=i(ga);mm=s(kg,"TFDebertaV2ForMaskedLM"),kg.forEach(t),fm=s(Ia," forward method, overrides the "),Qr=r(Ia,"CODE",{});var Tg=i(Qr);um=s(Tg,"__call__"),Tg.forEach(t),gm=s(Ia," special method."),Ia.forEach(t),_m=m(Dt),w(Oo.$$.fragment,Dt),bm=m(Dt),w(No.$$.fragment,Dt),vm=m(Dt),w(Wo.$$.fragment,Dt),Dt.forEach(t),yt.forEach(t),el=m(o),eo=r(o,"H2",{class:!0});var jl=i(eo);Ho=r(jl,"A",{id:!0,class:!0,href:!0});var wg=i(Ho);Gr=r(wg,"SPAN",{});var $g=i(Gr);w(Ms.$$.fragment,$g),$g.forEach(t),wg.forEach(t),km=m(jl),Kr=r(jl,"SPAN",{});var yg=i(Kr);Tm=s(yg,"TFDebertaV2ForSequenceClassification"),yg.forEach(t),jl.forEach(t),tl=m(o),je=r(o,"DIV",{class:!0});var lt=i(je);w(zs.$$.fragment,lt),wm=m(lt),Jr=r(lt,"P",{});var Dg=i(Jr);$m=s(Dg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Dg.forEach(t),ym=m(lt),js=r(lt,"P",{});var Cl=i(js);Dm=s(Cl,"The DeBERTa model was proposed in "),Cs=r(Cl,"A",{href:!0,rel:!0});var Eg=i(Cs);Em=s(Eg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Eg.forEach(t),Fm=s(Cl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Cl.forEach(t),Vm=m(lt),Ps=r(lt,"P",{});var Pl=i(Ps);xm=s(Pl,"This model is also a "),Rs=r(Pl,"A",{href:!0,rel:!0});var Fg=i(Rs);qm=s(Fg,"tf.keras.Model"),Fg.forEach(t),Mm=s(Pl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pl.forEach(t),zm=m(lt),w(Uo.$$.fragment,lt),jm=m(lt),Qe=r(lt,"DIV",{class:!0});var Et=i(Qe);w(Bs.$$.fragment,Et),Cm=m(Et),to=r(Et,"P",{});var Oa=i(to);Pm=s(Oa,"The "),_a=r(Oa,"A",{href:!0});var Vg=i(_a);Rm=s(Vg,"TFDebertaV2ForSequenceClassification"),Vg.forEach(t),Bm=s(Oa," forward method, overrides the "),Xr=r(Oa,"CODE",{});var xg=i(Xr);Am=s(xg,"__call__"),xg.forEach(t),Lm=s(Oa," special method."),Oa.forEach(t),Sm=m(Et),w(Qo.$$.fragment,Et),Im=m(Et),w(Go.$$.fragment,Et),Om=m(Et),w(Ko.$$.fragment,Et),Et.forEach(t),lt.forEach(t),ol=m(o),oo=r(o,"H2",{class:!0});var Rl=i(oo);Jo=r(Rl,"A",{id:!0,class:!0,href:!0});var qg=i(Jo);Yr=r(qg,"SPAN",{});var Mg=i(Yr);w(As.$$.fragment,Mg),Mg.forEach(t),qg.forEach(t),Nm=m(Rl),Zr=r(Rl,"SPAN",{});var zg=i(Zr);Wm=s(zg,"TFDebertaV2ForTokenClassification"),zg.forEach(t),Rl.forEach(t),nl=m(o),Ce=r(o,"DIV",{class:!0});var dt=i(Ce);w(Ls.$$.fragment,dt),Hm=m(dt),ei=r(dt,"P",{});var jg=i(ei);Um=s(jg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),jg.forEach(t),Qm=m(dt),Ss=r(dt,"P",{});var Bl=i(Ss);Gm=s(Bl,"The DeBERTa model was proposed in "),Is=r(Bl,"A",{href:!0,rel:!0});var Cg=i(Is);Km=s(Cg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Cg.forEach(t),Jm=s(Bl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Bl.forEach(t),Xm=m(dt),Os=r(dt,"P",{});var Al=i(Os);Ym=s(Al,"This model is also a "),Ns=r(Al,"A",{href:!0,rel:!0});var Pg=i(Ns);Zm=s(Pg,"tf.keras.Model"),Pg.forEach(t),ef=s(Al,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Al.forEach(t),tf=m(dt),w(Xo.$$.fragment,dt),of=m(dt),Ge=r(dt,"DIV",{class:!0});var Ft=i(Ge);w(Ws.$$.fragment,Ft),nf=m(Ft),no=r(Ft,"P",{});var Na=i(no);sf=s(Na,"The "),ba=r(Na,"A",{href:!0});var Rg=i(ba);af=s(Rg,"TFDebertaV2ForTokenClassification"),Rg.forEach(t),rf=s(Na," forward method, overrides the "),ti=r(Na,"CODE",{});var Bg=i(ti);lf=s(Bg,"__call__"),Bg.forEach(t),df=s(Na," special method."),Na.forEach(t),cf=m(Ft),w(Yo.$$.fragment,Ft),pf=m(Ft),w(Zo.$$.fragment,Ft),hf=m(Ft),w(en.$$.fragment,Ft),Ft.forEach(t),dt.forEach(t),sl=m(o),so=r(o,"H2",{class:!0});var Ll=i(so);tn=r(Ll,"A",{id:!0,class:!0,href:!0});var Ag=i(tn);oi=r(Ag,"SPAN",{});var Lg=i(oi);w(Hs.$$.fragment,Lg),Lg.forEach(t),Ag.forEach(t),mf=m(Ll),ni=r(Ll,"SPAN",{});var Sg=i(ni);ff=s(Sg,"TFDebertaV2ForQuestionAnswering"),Sg.forEach(t),Ll.forEach(t),al=m(o),Pe=r(o,"DIV",{class:!0});var ct=i(Pe);w(Us.$$.fragment,ct),uf=m(ct),ao=r(ct,"P",{});var Wa=i(ao);gf=s(Wa,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),si=r(Wa,"CODE",{});var Ig=i(si);_f=s(Ig,"span start logits"),Ig.forEach(t),bf=s(Wa," and "),ai=r(Wa,"CODE",{});var Og=i(ai);vf=s(Og,"span end logits"),Og.forEach(t),kf=s(Wa,")."),Wa.forEach(t),Tf=m(ct),Qs=r(ct,"P",{});var Sl=i(Qs);wf=s(Sl,"The DeBERTa model was proposed in "),Gs=r(Sl,"A",{href:!0,rel:!0});var Ng=i(Gs);$f=s(Ng,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ng.forEach(t),yf=s(Sl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Sl.forEach(t),Df=m(ct),Ks=r(ct,"P",{});var Il=i(Ks);Ef=s(Il,"This model is also a "),Js=r(Il,"A",{href:!0,rel:!0});var Wg=i(Js);Ff=s(Wg,"tf.keras.Model"),Wg.forEach(t),Vf=s(Il,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Il.forEach(t),xf=m(ct),w(on.$$.fragment,ct),qf=m(ct),Ke=r(ct,"DIV",{class:!0});var Vt=i(Ke);w(Xs.$$.fragment,Vt),Mf=m(Vt),ro=r(Vt,"P",{});var Ha=i(ro);zf=s(Ha,"The "),va=r(Ha,"A",{href:!0});var Hg=i(va);jf=s(Hg,"TFDebertaV2ForQuestionAnswering"),Hg.forEach(t),Cf=s(Ha," forward method, overrides the "),ri=r(Ha,"CODE",{});var Ug=i(ri);Pf=s(Ug,"__call__"),Ug.forEach(t),Rf=s(Ha," special method."),Ha.forEach(t),Bf=m(Vt),w(nn.$$.fragment,Vt),Af=m(Vt),w(sn.$$.fragment,Vt),Lf=m(Vt),w(an.$$.fragment,Vt),Vt.forEach(t),ct.forEach(t),this.h()},h(){u(l,"name","hf:doc:metadata"),u(l,"content",JSON.stringify(R_)),u(p,"id","debertav2"),u(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(p,"href","#debertav2"),u(c,"class","relative group"),u(Y,"id","overview"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#overview"),u(q,"class","relative group"),u(te,"href","https://arxiv.org/abs/2006.03654"),u(te,"rel","nofollow"),u(A,"href","https://github.com/microsoft/DeBERTa"),u(A,"rel","nofollow"),u(P,"href","https://github.com/microsoft/DeBERTa"),u(P,"rel","nofollow"),u(oe,"href","https://www.microsoft.com/en-us/research/blog/microsoft-deberta-surpasses-human-performance-on-the-superglue-benchmark/"),u(oe,"rel","nofollow"),u(L,"href","https://github.com/google/sentencepiece"),u(L,"rel","nofollow"),u(gn,"href","https://huggingface.co/DeBERTa"),u(gn,"rel","nofollow"),u(_n,"href","https://huggingface.co/kamalkraj"),u(_n,"rel","nofollow"),u(bn,"href","https://github.com/microsoft/DeBERTa"),u(bn,"rel","nofollow"),u(io,"id","transformers.DebertaV2Config"),u(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(io,"href","#transformers.DebertaV2Config"),u(xt,"class","relative group"),u(ra,"href","/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Model"),u(Tn,"href","https://huggingface.co/microsoft/deberta-base"),u(Tn,"rel","nofollow"),u(ia,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(la,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lo,"id","transformers.DebertaV2Tokenizer"),u(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(lo,"href","#transformers.DebertaV2Tokenizer"),u(zt,"class","relative group"),u(Dn,"href","https://github.com/google/sentencepiece"),u(Dn,"rel","nofollow"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(da,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ho,"id","transformers.DebertaV2Model"),u(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ho,"href","#transformers.DebertaV2Model"),u(Pt,"class","relative group"),u(Cn,"href","https://arxiv.org/abs/2006.03654"),u(Cn,"rel","nofollow"),u(Rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Rn,"rel","nofollow"),u(ca,"href","/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2Model"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(uo,"id","transformers.DebertaV2PreTrainedModel"),u(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(uo,"href","#transformers.DebertaV2PreTrainedModel"),u(Bt,"class","relative group"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_o,"id","transformers.DebertaV2ForMaskedLM"),u(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_o,"href","#transformers.DebertaV2ForMaskedLM"),u(At,"class","relative group"),u(Nn,"href","https://arxiv.org/abs/2006.03654"),u(Nn,"rel","nofollow"),u(Hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Hn,"rel","nofollow"),u(pa,"href","/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2ForMaskedLM"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(To,"id","transformers.DebertaV2ForSequenceClassification"),u(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(To,"href","#transformers.DebertaV2ForSequenceClassification"),u(It,"class","relative group"),u(Jn,"href","https://arxiv.org/abs/2006.03654"),u(Jn,"rel","nofollow"),u(Yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Yn,"rel","nofollow"),u(ha,"href","/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2ForSequenceClassification"),u(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fo,"id","transformers.DebertaV2ForTokenClassification"),u(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fo,"href","#transformers.DebertaV2ForTokenClassification"),u(Nt,"class","relative group"),u(ns,"href","https://arxiv.org/abs/2006.03654"),u(ns,"rel","nofollow"),u(as,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(as,"rel","nofollow"),u(ma,"href","/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2ForTokenClassification"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mo,"id","transformers.DebertaV2ForQuestionAnswering"),u(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Mo,"href","#transformers.DebertaV2ForQuestionAnswering"),u(Ht,"class","relative group"),u(cs,"href","https://arxiv.org/abs/2006.03654"),u(cs,"rel","nofollow"),u(hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(hs,"rel","nofollow"),u(fa,"href","/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.DebertaV2ForQuestionAnswering"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Po,"id","transformers.TFDebertaV2Model"),u(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Po,"href","#transformers.TFDebertaV2Model"),u(Gt,"class","relative group"),u(_s,"href","https://arxiv.org/abs/2006.03654"),u(_s,"rel","nofollow"),u(vs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(vs,"rel","nofollow"),u(ua,"href","/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.TFDebertaV2Model"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Lo,"id","transformers.TFDebertaV2PreTrainedModel"),u(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Lo,"href","#transformers.TFDebertaV2PreTrainedModel"),u(Jt,"class","relative group"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(So,"id","transformers.TFDebertaV2ForMaskedLM"),u(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(So,"href","#transformers.TFDebertaV2ForMaskedLM"),u(Xt,"class","relative group"),u(Fs,"href","https://arxiv.org/abs/2006.03654"),u(Fs,"rel","nofollow"),u(xs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(xs,"rel","nofollow"),u(ga,"href","/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.TFDebertaV2ForMaskedLM"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ho,"id","transformers.TFDebertaV2ForSequenceClassification"),u(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ho,"href","#transformers.TFDebertaV2ForSequenceClassification"),u(eo,"class","relative group"),u(Cs,"href","https://arxiv.org/abs/2006.03654"),u(Cs,"rel","nofollow"),u(Rs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Rs,"rel","nofollow"),u(_a,"href","/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.TFDebertaV2ForSequenceClassification"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jo,"id","transformers.TFDebertaV2ForTokenClassification"),u(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jo,"href","#transformers.TFDebertaV2ForTokenClassification"),u(oo,"class","relative group"),u(Is,"href","https://arxiv.org/abs/2006.03654"),u(Is,"rel","nofollow"),u(Ns,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ns,"rel","nofollow"),u(ba,"href","/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.TFDebertaV2ForTokenClassification"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tn,"id","transformers.TFDebertaV2ForQuestionAnswering"),u(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(tn,"href","#transformers.TFDebertaV2ForQuestionAnswering"),u(so,"class","relative group"),u(Gs,"href","https://arxiv.org/abs/2006.03654"),u(Gs,"rel","nofollow"),u(Js,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Js,"rel","nofollow"),u(va,"href","/docs/transformers/v4.18.0/en/model_doc/deberta-v2#transformers.TFDebertaV2ForQuestionAnswering"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,l),_(o,g,b),_(o,c,b),e(c,p),e(p,k),$(d,k,null),e(c,f),e(c,x),e(x,de),_(o,J,b),_(o,q,b),e(q,Y),e(Y,S),$(ee,S,null),e(q,ce),e(q,I),e(I,pe),_(o,re,b),_(o,N,b),e(N,R),e(N,te),e(te,Z),e(N,M),_(o,j,b),_(o,ne,b),e(ne,W),_(o,ie,b),_(o,se,b),e(se,H),_(o,le,b),_(o,ae,b),e(ae,z),e(z,he),e(z,A),e(A,me),e(z,fe),_(o,O,b),_(o,X,b),e(X,ue),e(X,P),e(P,ge),e(X,U),e(X,oe),e(oe,v),_(o,V,b),_(o,G,b),e(G,Ee),_(o,De,b),_(o,C,b),e(C,_e),e(_e,$e),e($e,Fe),e(_e,B),e(_e,L),e(L,Ve),e(_e,xe),e(C,Q),e(C,ve),e(ve,ye),e(ye,be),e(ve,qe),e(C,Ol),e(C,na),e(na,Ua),e(Ua,Nl),e(na,Wl),e(C,Hl),e(C,sa),e(sa,Qa),e(Qa,Ul),e(sa,Ql),e(C,Gl),e(C,aa),e(aa,Ga),e(Ga,Kl),e(aa,Jl),_(o,Mi,b),_(o,tt,b),e(tt,Xl),e(tt,gn),e(gn,Yl),e(tt,Zl),e(tt,_n),e(_n,ed),e(tt,td),e(tt,bn),e(bn,od),e(tt,nd),_(o,zi,b),_(o,xt,b),e(xt,io),e(io,Ka),$(vn,Ka,null),e(xt,sd),e(xt,Ja),e(Ja,ad),_(o,ji,b),_(o,pt,b),$(kn,pt,null),e(pt,rd),e(pt,qt),e(qt,id),e(qt,ra),e(ra,ld),e(qt,dd),e(qt,Tn),e(Tn,cd),e(qt,pd),e(pt,hd),e(pt,Mt),e(Mt,md),e(Mt,ia),e(ia,fd),e(Mt,ud),e(Mt,la),e(la,gd),e(Mt,_d),_(o,Ci,b),_(o,zt,b),e(zt,lo),e(lo,Xa),$(wn,Xa,null),e(zt,bd),e(zt,Ya),e(Ya,vd),_(o,Pi,b),_(o,ze,b),$($n,ze,null),e(ze,kd),e(ze,yn),e(yn,Td),e(yn,Dn),e(Dn,wd),e(yn,$d),e(ze,yd),e(ze,ut),$(En,ut,null),e(ut,Dd),e(ut,Za),e(Za,Ed),e(ut,Fd),e(ut,Fn),e(Fn,er),e(er,Vd),e(Fn,xd),e(Fn,tr),e(tr,qd),e(ze,Md),e(ze,co),$(Vn,co,null),e(co,zd),e(co,jt),e(jt,jd),e(jt,or),e(or,Cd),e(jt,Pd),e(jt,nr),e(nr,Rd),e(jt,Bd),e(ze,Ad),e(ze,ot),$(xn,ot,null),e(ot,Ld),e(ot,sr),e(sr,Sd),e(ot,Id),$(po,ot,null),e(ot,Od),e(ot,Ct),e(Ct,Nd),e(Ct,ar),e(ar,Wd),e(Ct,Hd),e(Ct,rr),e(rr,Ud),e(Ct,Qd),e(ze,Gd),e(ze,da),$(qn,da,null),_(o,Ri,b),_(o,Pt,b),e(Pt,ho),e(ho,ir),$(Mn,ir,null),e(Pt,Kd),e(Pt,lr),e(lr,Jd),_(o,Bi,b),_(o,Xe,b),$(zn,Xe,null),e(Xe,Xd),e(Xe,jn),e(jn,Yd),e(jn,Cn),e(Cn,Zd),e(jn,ec),e(Xe,tc),e(Xe,Pn),e(Pn,oc),e(Pn,Rn),e(Rn,nc),e(Pn,sc),e(Xe,ac),e(Xe,nt),$(Bn,nt,null),e(nt,rc),e(nt,Rt),e(Rt,ic),e(Rt,ca),e(ca,lc),e(Rt,dc),e(Rt,dr),e(dr,cc),e(Rt,pc),e(nt,hc),$(mo,nt,null),e(nt,mc),$(fo,nt,null),_(o,Ai,b),_(o,Bt,b),e(Bt,uo),e(uo,cr),$(An,cr,null),e(Bt,fc),e(Bt,pr),e(pr,uc),_(o,Li,b),_(o,ht,b),$(Ln,ht,null),e(ht,gc),e(ht,hr),e(hr,_c),e(ht,bc),e(ht,st),$(Sn,st,null),e(st,vc),e(st,mr),e(mr,kc),e(st,Tc),e(st,fr),e(fr,wc),e(st,$c),$(go,st,null),_(o,Si,b),_(o,At,b),e(At,_o),e(_o,ur),$(In,ur,null),e(At,yc),e(At,gr),e(gr,Dc),_(o,Ii,b),_(o,Ye,b),$(On,Ye,null),e(Ye,Ec),e(Ye,Lt),e(Lt,Fc),e(Lt,_r),e(_r,Vc),e(Lt,xc),e(Lt,Nn),e(Nn,qc),e(Lt,Mc),e(Ye,zc),e(Ye,Wn),e(Wn,jc),e(Wn,Hn),e(Hn,Cc),e(Wn,Pc),e(Ye,Rc),e(Ye,Ne),$(Un,Ne,null),e(Ne,Bc),e(Ne,St),e(St,Ac),e(St,pa),e(pa,Lc),e(St,Sc),e(St,br),e(br,Ic),e(St,Oc),e(Ne,Nc),$(bo,Ne,null),e(Ne,Wc),$(vo,Ne,null),e(Ne,Hc),$(ko,Ne,null),_(o,Oi,b),_(o,It,b),e(It,To),e(To,vr),$(Qn,vr,null),e(It,Uc),e(It,kr),e(kr,Qc),_(o,Ni,b),_(o,Ae,b),$(Gn,Ae,null),e(Ae,Gc),e(Ae,Tr),e(Tr,Kc),e(Ae,Jc),e(Ae,Kn),e(Kn,Xc),e(Kn,Jn),e(Jn,Yc),e(Kn,Zc),e(Ae,ep),e(Ae,Xn),e(Xn,tp),e(Xn,Yn),e(Yn,op),e(Xn,np),e(Ae,sp),e(Ae,Me),$(Zn,Me,null),e(Me,ap),e(Me,Ot),e(Ot,rp),e(Ot,ha),e(ha,ip),e(Ot,lp),e(Ot,wr),e(wr,dp),e(Ot,cp),e(Me,pp),$(wo,Me,null),e(Me,hp),$($o,Me,null),e(Me,mp),$(yo,Me,null),e(Me,fp),$(Do,Me,null),e(Me,up),$(Eo,Me,null),_(o,Wi,b),_(o,Nt,b),e(Nt,Fo),e(Fo,$r),$(es,$r,null),e(Nt,gp),e(Nt,yr),e(yr,_p),_(o,Hi,b),_(o,Le,b),$(ts,Le,null),e(Le,bp),e(Le,Dr),e(Dr,vp),e(Le,kp),e(Le,os),e(os,Tp),e(os,ns),e(ns,wp),e(os,$p),e(Le,yp),e(Le,ss),e(ss,Dp),e(ss,as),e(as,Ep),e(ss,Fp),e(Le,Vp),e(Le,We),$(rs,We,null),e(We,xp),e(We,Wt),e(Wt,qp),e(Wt,ma),e(ma,Mp),e(Wt,zp),e(Wt,Er),e(Er,jp),e(Wt,Cp),e(We,Pp),$(Vo,We,null),e(We,Rp),$(xo,We,null),e(We,Bp),$(qo,We,null),_(o,Ui,b),_(o,Ht,b),e(Ht,Mo),e(Mo,Fr),$(is,Fr,null),e(Ht,Ap),e(Ht,Vr),e(Vr,Lp),_(o,Qi,b),_(o,Se,b),$(ls,Se,null),e(Se,Sp),e(Se,Ut),e(Ut,Ip),e(Ut,xr),e(xr,Op),e(Ut,Np),e(Ut,qr),e(qr,Wp),e(Ut,Hp),e(Se,Up),e(Se,ds),e(ds,Qp),e(ds,cs),e(cs,Gp),e(ds,Kp),e(Se,Jp),e(Se,ps),e(ps,Xp),e(ps,hs),e(hs,Yp),e(ps,Zp),e(Se,eh),e(Se,He),$(ms,He,null),e(He,th),e(He,Qt),e(Qt,oh),e(Qt,fa),e(fa,nh),e(Qt,sh),e(Qt,Mr),e(Mr,ah),e(Qt,rh),e(He,ih),$(zo,He,null),e(He,lh),$(jo,He,null),e(He,dh),$(Co,He,null),_(o,Gi,b),_(o,Gt,b),e(Gt,Po),e(Po,zr),$(fs,zr,null),e(Gt,ch),e(Gt,jr),e(jr,ph),_(o,Ki,b),_(o,Ie,b),$(us,Ie,null),e(Ie,hh),e(Ie,gs),e(gs,mh),e(gs,_s),e(_s,fh),e(gs,uh),e(Ie,gh),e(Ie,bs),e(bs,_h),e(bs,vs),e(vs,bh),e(bs,vh),e(Ie,kh),$(Ro,Ie,null),e(Ie,Th),e(Ie,at),$(ks,at,null),e(at,wh),e(at,Kt),e(Kt,$h),e(Kt,ua),e(ua,yh),e(Kt,Dh),e(Kt,Cr),e(Cr,Eh),e(Kt,Fh),e(at,Vh),$(Bo,at,null),e(at,xh),$(Ao,at,null),_(o,Ji,b),_(o,Jt,b),e(Jt,Lo),e(Lo,Pr),$(Ts,Pr,null),e(Jt,qh),e(Jt,Rr),e(Rr,Mh),_(o,Xi,b),_(o,mt,b),$(ws,mt,null),e(mt,zh),e(mt,Br),e(Br,jh),e(mt,Ch),e(mt,rt),$($s,rt,null),e(rt,Ph),e(rt,Ar),e(Ar,Rh),e(rt,Bh),e(rt,ys),e(ys,Ah),e(ys,Lr),e(Lr,Lh),e(ys,Sh),e(rt,Ih),e(rt,Ze),e(Ze,Oh),e(Ze,Sr),e(Sr,Nh),e(Ze,Wh),e(Ze,Ir),e(Ir,Hh),e(Ze,Uh),e(Ze,Or),e(Or,Qh),e(Ze,Gh),e(Ze,Nr),e(Nr,Kh),e(Ze,Jh),_(o,Yi,b),_(o,Xt,b),e(Xt,So),e(So,Wr),$(Ds,Wr,null),e(Xt,Xh),e(Xt,Hr),e(Hr,Yh),_(o,Zi,b),_(o,Oe,b),$(Es,Oe,null),e(Oe,Zh),e(Oe,Yt),e(Yt,em),e(Yt,Ur),e(Ur,tm),e(Yt,om),e(Yt,Fs),e(Fs,nm),e(Yt,sm),e(Oe,am),e(Oe,Vs),e(Vs,rm),e(Vs,xs),e(xs,im),e(Vs,lm),e(Oe,dm),$(Io,Oe,null),e(Oe,cm),e(Oe,Ue),$(qs,Ue,null),e(Ue,pm),e(Ue,Zt),e(Zt,hm),e(Zt,ga),e(ga,mm),e(Zt,fm),e(Zt,Qr),e(Qr,um),e(Zt,gm),e(Ue,_m),$(Oo,Ue,null),e(Ue,bm),$(No,Ue,null),e(Ue,vm),$(Wo,Ue,null),_(o,el,b),_(o,eo,b),e(eo,Ho),e(Ho,Gr),$(Ms,Gr,null),e(eo,km),e(eo,Kr),e(Kr,Tm),_(o,tl,b),_(o,je,b),$(zs,je,null),e(je,wm),e(je,Jr),e(Jr,$m),e(je,ym),e(je,js),e(js,Dm),e(js,Cs),e(Cs,Em),e(js,Fm),e(je,Vm),e(je,Ps),e(Ps,xm),e(Ps,Rs),e(Rs,qm),e(Ps,Mm),e(je,zm),$(Uo,je,null),e(je,jm),e(je,Qe),$(Bs,Qe,null),e(Qe,Cm),e(Qe,to),e(to,Pm),e(to,_a),e(_a,Rm),e(to,Bm),e(to,Xr),e(Xr,Am),e(to,Lm),e(Qe,Sm),$(Qo,Qe,null),e(Qe,Im),$(Go,Qe,null),e(Qe,Om),$(Ko,Qe,null),_(o,ol,b),_(o,oo,b),e(oo,Jo),e(Jo,Yr),$(As,Yr,null),e(oo,Nm),e(oo,Zr),e(Zr,Wm),_(o,nl,b),_(o,Ce,b),$(Ls,Ce,null),e(Ce,Hm),e(Ce,ei),e(ei,Um),e(Ce,Qm),e(Ce,Ss),e(Ss,Gm),e(Ss,Is),e(Is,Km),e(Ss,Jm),e(Ce,Xm),e(Ce,Os),e(Os,Ym),e(Os,Ns),e(Ns,Zm),e(Os,ef),e(Ce,tf),$(Xo,Ce,null),e(Ce,of),e(Ce,Ge),$(Ws,Ge,null),e(Ge,nf),e(Ge,no),e(no,sf),e(no,ba),e(ba,af),e(no,rf),e(no,ti),e(ti,lf),e(no,df),e(Ge,cf),$(Yo,Ge,null),e(Ge,pf),$(Zo,Ge,null),e(Ge,hf),$(en,Ge,null),_(o,sl,b),_(o,so,b),e(so,tn),e(tn,oi),$(Hs,oi,null),e(so,mf),e(so,ni),e(ni,ff),_(o,al,b),_(o,Pe,b),$(Us,Pe,null),e(Pe,uf),e(Pe,ao),e(ao,gf),e(ao,si),e(si,_f),e(ao,bf),e(ao,ai),e(ai,vf),e(ao,kf),e(Pe,Tf),e(Pe,Qs),e(Qs,wf),e(Qs,Gs),e(Gs,$f),e(Qs,yf),e(Pe,Df),e(Pe,Ks),e(Ks,Ef),e(Ks,Js),e(Js,Ff),e(Ks,Vf),e(Pe,xf),$(on,Pe,null),e(Pe,qf),e(Pe,Ke),$(Xs,Ke,null),e(Ke,Mf),e(Ke,ro),e(ro,zf),e(ro,va),e(va,jf),e(ro,Cf),e(ro,ri),e(ri,Pf),e(ro,Rf),e(Ke,Bf),$(nn,Ke,null),e(Ke,Af),$(sn,Ke,null),e(Ke,Lf),$(an,Ke,null),rl=!0},p(o,[b]){const Ys={};b&2&&(Ys.$$scope={dirty:b,ctx:o}),po.$set(Ys);const ii={};b&2&&(ii.$$scope={dirty:b,ctx:o}),mo.$set(ii);const li={};b&2&&(li.$$scope={dirty:b,ctx:o}),fo.$set(li);const di={};b&2&&(di.$$scope={dirty:b,ctx:o}),go.$set(di);const Zs={};b&2&&(Zs.$$scope={dirty:b,ctx:o}),bo.$set(Zs);const ci={};b&2&&(ci.$$scope={dirty:b,ctx:o}),vo.$set(ci);const pi={};b&2&&(pi.$$scope={dirty:b,ctx:o}),ko.$set(pi);const hi={};b&2&&(hi.$$scope={dirty:b,ctx:o}),wo.$set(hi);const ea={};b&2&&(ea.$$scope={dirty:b,ctx:o}),$o.$set(ea);const mi={};b&2&&(mi.$$scope={dirty:b,ctx:o}),yo.$set(mi);const fi={};b&2&&(fi.$$scope={dirty:b,ctx:o}),Do.$set(fi);const ui={};b&2&&(ui.$$scope={dirty:b,ctx:o}),Eo.$set(ui);const gi={};b&2&&(gi.$$scope={dirty:b,ctx:o}),Vo.$set(gi);const ta={};b&2&&(ta.$$scope={dirty:b,ctx:o}),xo.$set(ta);const _i={};b&2&&(_i.$$scope={dirty:b,ctx:o}),qo.$set(_i);const rn={};b&2&&(rn.$$scope={dirty:b,ctx:o}),zo.$set(rn);const bi={};b&2&&(bi.$$scope={dirty:b,ctx:o}),jo.$set(bi);const vi={};b&2&&(vi.$$scope={dirty:b,ctx:o}),Co.$set(vi);const ki={};b&2&&(ki.$$scope={dirty:b,ctx:o}),Ro.$set(ki);const et={};b&2&&(et.$$scope={dirty:b,ctx:o}),Bo.$set(et);const ln={};b&2&&(ln.$$scope={dirty:b,ctx:o}),Ao.$set(ln);const Ti={};b&2&&(Ti.$$scope={dirty:b,ctx:o}),Io.$set(Ti);const wi={};b&2&&(wi.$$scope={dirty:b,ctx:o}),Oo.$set(wi);const ka={};b&2&&(ka.$$scope={dirty:b,ctx:o}),No.$set(ka);const $i={};b&2&&($i.$$scope={dirty:b,ctx:o}),Wo.$set($i);const Ta={};b&2&&(Ta.$$scope={dirty:b,ctx:o}),Uo.$set(Ta);const yi={};b&2&&(yi.$$scope={dirty:b,ctx:o}),Qo.$set(yi);const wa={};b&2&&(wa.$$scope={dirty:b,ctx:o}),Go.$set(wa);const Di={};b&2&&(Di.$$scope={dirty:b,ctx:o}),Ko.$set(Di);const $a={};b&2&&($a.$$scope={dirty:b,ctx:o}),Xo.$set($a);const Ei={};b&2&&(Ei.$$scope={dirty:b,ctx:o}),Yo.$set(Ei);const ft={};b&2&&(ft.$$scope={dirty:b,ctx:o}),Zo.$set(ft);const Fi={};b&2&&(Fi.$$scope={dirty:b,ctx:o}),en.$set(Fi);const Vi={};b&2&&(Vi.$$scope={dirty:b,ctx:o}),on.$set(Vi);const xi={};b&2&&(xi.$$scope={dirty:b,ctx:o}),nn.$set(xi);const oa={};b&2&&(oa.$$scope={dirty:b,ctx:o}),sn.$set(oa);const qi={};b&2&&(qi.$$scope={dirty:b,ctx:o}),an.$set(qi)},i(o){rl||(y(d.$$.fragment,o),y(ee.$$.fragment,o),y(vn.$$.fragment,o),y(kn.$$.fragment,o),y(wn.$$.fragment,o),y($n.$$.fragment,o),y(En.$$.fragment,o),y(Vn.$$.fragment,o),y(xn.$$.fragment,o),y(po.$$.fragment,o),y(qn.$$.fragment,o),y(Mn.$$.fragment,o),y(zn.$$.fragment,o),y(Bn.$$.fragment,o),y(mo.$$.fragment,o),y(fo.$$.fragment,o),y(An.$$.fragment,o),y(Ln.$$.fragment,o),y(Sn.$$.fragment,o),y(go.$$.fragment,o),y(In.$$.fragment,o),y(On.$$.fragment,o),y(Un.$$.fragment,o),y(bo.$$.fragment,o),y(vo.$$.fragment,o),y(ko.$$.fragment,o),y(Qn.$$.fragment,o),y(Gn.$$.fragment,o),y(Zn.$$.fragment,o),y(wo.$$.fragment,o),y($o.$$.fragment,o),y(yo.$$.fragment,o),y(Do.$$.fragment,o),y(Eo.$$.fragment,o),y(es.$$.fragment,o),y(ts.$$.fragment,o),y(rs.$$.fragment,o),y(Vo.$$.fragment,o),y(xo.$$.fragment,o),y(qo.$$.fragment,o),y(is.$$.fragment,o),y(ls.$$.fragment,o),y(ms.$$.fragment,o),y(zo.$$.fragment,o),y(jo.$$.fragment,o),y(Co.$$.fragment,o),y(fs.$$.fragment,o),y(us.$$.fragment,o),y(Ro.$$.fragment,o),y(ks.$$.fragment,o),y(Bo.$$.fragment,o),y(Ao.$$.fragment,o),y(Ts.$$.fragment,o),y(ws.$$.fragment,o),y($s.$$.fragment,o),y(Ds.$$.fragment,o),y(Es.$$.fragment,o),y(Io.$$.fragment,o),y(qs.$$.fragment,o),y(Oo.$$.fragment,o),y(No.$$.fragment,o),y(Wo.$$.fragment,o),y(Ms.$$.fragment,o),y(zs.$$.fragment,o),y(Uo.$$.fragment,o),y(Bs.$$.fragment,o),y(Qo.$$.fragment,o),y(Go.$$.fragment,o),y(Ko.$$.fragment,o),y(As.$$.fragment,o),y(Ls.$$.fragment,o),y(Xo.$$.fragment,o),y(Ws.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(Hs.$$.fragment,o),y(Us.$$.fragment,o),y(on.$$.fragment,o),y(Xs.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),rl=!0)},o(o){D(d.$$.fragment,o),D(ee.$$.fragment,o),D(vn.$$.fragment,o),D(kn.$$.fragment,o),D(wn.$$.fragment,o),D($n.$$.fragment,o),D(En.$$.fragment,o),D(Vn.$$.fragment,o),D(xn.$$.fragment,o),D(po.$$.fragment,o),D(qn.$$.fragment,o),D(Mn.$$.fragment,o),D(zn.$$.fragment,o),D(Bn.$$.fragment,o),D(mo.$$.fragment,o),D(fo.$$.fragment,o),D(An.$$.fragment,o),D(Ln.$$.fragment,o),D(Sn.$$.fragment,o),D(go.$$.fragment,o),D(In.$$.fragment,o),D(On.$$.fragment,o),D(Un.$$.fragment,o),D(bo.$$.fragment,o),D(vo.$$.fragment,o),D(ko.$$.fragment,o),D(Qn.$$.fragment,o),D(Gn.$$.fragment,o),D(Zn.$$.fragment,o),D(wo.$$.fragment,o),D($o.$$.fragment,o),D(yo.$$.fragment,o),D(Do.$$.fragment,o),D(Eo.$$.fragment,o),D(es.$$.fragment,o),D(ts.$$.fragment,o),D(rs.$$.fragment,o),D(Vo.$$.fragment,o),D(xo.$$.fragment,o),D(qo.$$.fragment,o),D(is.$$.fragment,o),D(ls.$$.fragment,o),D(ms.$$.fragment,o),D(zo.$$.fragment,o),D(jo.$$.fragment,o),D(Co.$$.fragment,o),D(fs.$$.fragment,o),D(us.$$.fragment,o),D(Ro.$$.fragment,o),D(ks.$$.fragment,o),D(Bo.$$.fragment,o),D(Ao.$$.fragment,o),D(Ts.$$.fragment,o),D(ws.$$.fragment,o),D($s.$$.fragment,o),D(Ds.$$.fragment,o),D(Es.$$.fragment,o),D(Io.$$.fragment,o),D(qs.$$.fragment,o),D(Oo.$$.fragment,o),D(No.$$.fragment,o),D(Wo.$$.fragment,o),D(Ms.$$.fragment,o),D(zs.$$.fragment,o),D(Uo.$$.fragment,o),D(Bs.$$.fragment,o),D(Qo.$$.fragment,o),D(Go.$$.fragment,o),D(Ko.$$.fragment,o),D(As.$$.fragment,o),D(Ls.$$.fragment,o),D(Xo.$$.fragment,o),D(Ws.$$.fragment,o),D(Yo.$$.fragment,o),D(Zo.$$.fragment,o),D(en.$$.fragment,o),D(Hs.$$.fragment,o),D(Us.$$.fragment,o),D(on.$$.fragment,o),D(Xs.$$.fragment,o),D(nn.$$.fragment,o),D(sn.$$.fragment,o),D(an.$$.fragment,o),rl=!1},d(o){t(l),o&&t(g),o&&t(c),E(d),o&&t(J),o&&t(q),E(ee),o&&t(re),o&&t(N),o&&t(j),o&&t(ne),o&&t(ie),o&&t(se),o&&t(le),o&&t(ae),o&&t(O),o&&t(X),o&&t(V),o&&t(G),o&&t(De),o&&t(C),o&&t(Mi),o&&t(tt),o&&t(zi),o&&t(xt),E(vn),o&&t(ji),o&&t(pt),E(kn),o&&t(Ci),o&&t(zt),E(wn),o&&t(Pi),o&&t(ze),E($n),E(En),E(Vn),E(xn),E(po),E(qn),o&&t(Ri),o&&t(Pt),E(Mn),o&&t(Bi),o&&t(Xe),E(zn),E(Bn),E(mo),E(fo),o&&t(Ai),o&&t(Bt),E(An),o&&t(Li),o&&t(ht),E(Ln),E(Sn),E(go),o&&t(Si),o&&t(At),E(In),o&&t(Ii),o&&t(Ye),E(On),E(Un),E(bo),E(vo),E(ko),o&&t(Oi),o&&t(It),E(Qn),o&&t(Ni),o&&t(Ae),E(Gn),E(Zn),E(wo),E($o),E(yo),E(Do),E(Eo),o&&t(Wi),o&&t(Nt),E(es),o&&t(Hi),o&&t(Le),E(ts),E(rs),E(Vo),E(xo),E(qo),o&&t(Ui),o&&t(Ht),E(is),o&&t(Qi),o&&t(Se),E(ls),E(ms),E(zo),E(jo),E(Co),o&&t(Gi),o&&t(Gt),E(fs),o&&t(Ki),o&&t(Ie),E(us),E(Ro),E(ks),E(Bo),E(Ao),o&&t(Ji),o&&t(Jt),E(Ts),o&&t(Xi),o&&t(mt),E(ws),E($s),o&&t(Yi),o&&t(Xt),E(Ds),o&&t(Zi),o&&t(Oe),E(Es),E(Io),E(qs),E(Oo),E(No),E(Wo),o&&t(el),o&&t(eo),E(Ms),o&&t(tl),o&&t(je),E(zs),E(Uo),E(Bs),E(Qo),E(Go),E(Ko),o&&t(ol),o&&t(oo),E(As),o&&t(nl),o&&t(Ce),E(Ls),E(Xo),E(Ws),E(Yo),E(Zo),E(en),o&&t(sl),o&&t(so),E(Hs),o&&t(al),o&&t(Pe),E(Us),E(on),E(Xs),E(nn),E(sn),E(an)}}}const R_={local:"debertav2",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaV2Config",title:"DebertaV2Config"},{local:"transformers.DebertaV2Tokenizer",title:"DebertaV2Tokenizer"},{local:"transformers.DebertaV2Model",title:"DebertaV2Model"},{local:"transformers.DebertaV2PreTrainedModel",title:"DebertaV2PreTrainedModel"},{local:"transformers.DebertaV2ForMaskedLM",title:"DebertaV2ForMaskedLM"},{local:"transformers.DebertaV2ForSequenceClassification",title:"DebertaV2ForSequenceClassification"},{local:"transformers.DebertaV2ForTokenClassification",title:"DebertaV2ForTokenClassification"},{local:"transformers.DebertaV2ForQuestionAnswering",title:"DebertaV2ForQuestionAnswering"},{local:"transformers.TFDebertaV2Model",title:"TFDebertaV2Model"},{local:"transformers.TFDebertaV2PreTrainedModel",title:"TFDebertaV2PreTrainedModel"},{local:"transformers.TFDebertaV2ForMaskedLM",title:"TFDebertaV2ForMaskedLM"},{local:"transformers.TFDebertaV2ForSequenceClassification",title:"TFDebertaV2ForSequenceClassification"},{local:"transformers.TFDebertaV2ForTokenClassification",title:"TFDebertaV2ForTokenClassification"},{local:"transformers.TFDebertaV2ForQuestionAnswering",title:"TFDebertaV2ForQuestionAnswering"}],title:"DeBERTa-v2"};function B_(F){return Xg(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class W_ extends Qg{constructor(l){super();Gg(this,l,B_,P_,Kg,{})}}export{W_ as default,R_ as metadata};
